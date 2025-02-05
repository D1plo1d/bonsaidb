use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::Arc;
use std::time::Duration;

#[cfg(feature = "encryption")]
use bonsaidb_core::document::KeyId;
use bonsaidb_core::permissions::Permissions;
use bonsaidb_core::schema::{Schema, SchemaName};
use sysinfo::{RefreshKind, System, SystemExt};

use crate::storage::{DatabaseOpener, StorageSchemaOpener};
#[cfg(feature = "encryption")]
use crate::vault::AnyVaultKeyStorage;
use crate::Error;

#[cfg(feature = "password-hashing")]
mod argon;
#[cfg(feature = "password-hashing")]
pub use argon::*;

/// Configuration options for [`Storage`](crate::storage::Storage).
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct StorageConfiguration {
    /// The path to the database. Defaults to `db.bonsaidb` if not specified.
    pub path: Option<PathBuf>,

    /// Prevents storing data on the disk. This is intended for testing purposes
    /// primarily. Keep in mind that the underlying storage format is
    /// append-only.
    pub memory_only: bool,

    /// The unique id of the server. If not specified, the server will randomly
    /// generate a unique id on startup. If the server generated an id and this
    /// value is subsequently set, the generated id will be overridden by the
    /// one specified here.
    pub unique_id: Option<u64>,

    /// The vault key storage to use. If not specified,
    /// [`LocalVaultKeyStorage`](crate::vault::LocalVaultKeyStorage) will be
    /// used with the server's data folder as the path. This is **incredibly
    /// insecure and should not be used outside of testing**.
    ///
    /// For secure encryption, it is important to store the vault keys in a
    /// location that is separate from the database. If the keys are on the same
    /// hardware as the encrypted content, anyone with access to the disk will
    /// be able to decrypt the stored data.
    #[cfg(feature = "encryption")]
    pub vault_key_storage: Option<Arc<dyn AnyVaultKeyStorage>>,

    /// The default encryption key for the database. If specified, all documents
    /// will be stored encrypted at-rest using the key specified. Having this
    /// key specified will also encrypt views. Without this, views will be
    /// stored unencrypted.
    #[cfg(feature = "encryption")]
    pub default_encryption_key: Option<KeyId>,

    /// Configuration options related to background tasks.
    pub workers: Tasks,

    /// Configuration options related to views.
    pub views: Views,

    /// Controls how the key-value store persists keys, on a per-database basis.
    pub key_value_persistence: KeyValuePersistence,

    /// Sets the default compression algorithm.
    #[cfg(feature = "compression")]
    pub default_compression: Option<Compression>,

    /// The permissions granted to authenticated connections to this server.
    pub authenticated_permissions: Permissions,

    /// Password hashing configuration.
    #[cfg(feature = "password-hashing")]
    pub argon: ArgonConfiguration,

    pub(crate) initial_schemas: HashMap<SchemaName, Arc<dyn DatabaseOpener>>,
}

impl Default for StorageConfiguration {
    fn default() -> Self {
        let system_specs = RefreshKind::new().with_cpu().with_memory();
        let mut system = System::new_with_specifics(system_specs);
        system.refresh_specifics(system_specs);
        Self {
            path: None,
            memory_only: false,
            unique_id: None,
            #[cfg(feature = "encryption")]
            vault_key_storage: None,
            #[cfg(feature = "encryption")]
            default_encryption_key: None,
            #[cfg(feature = "compression")]
            default_compression: None,
            workers: Tasks::default_for(&system),
            views: Views::default(),
            key_value_persistence: KeyValuePersistence::default(),
            authenticated_permissions: Permissions::default(),
            #[cfg(feature = "password-hashing")]
            argon: ArgonConfiguration::default_for(&system),
            initial_schemas: HashMap::default(),
        }
    }
}

impl StorageConfiguration {
    /// Registers the schema provided.
    pub fn register_schema<S: Schema>(&mut self) -> Result<(), Error> {
        // TODO this should error on duplicate registration.
        self.initial_schemas
            .insert(S::schema_name(), Arc::new(StorageSchemaOpener::<S>::new()?));
        Ok(())
    }
}

/// Configuration options for background tasks.
#[derive(Debug, Clone)]
pub struct Tasks {
    /// Defines how many workers should be spawned to process tasks. This
    /// defaults to the 2x the number of cpu cores available to the system or 2,
    /// whichever is larger.
    pub worker_count: usize,

    /// Defines how many simultaneous threads should be used when a task is
    /// parallelizable. This defaults to the nuber of cpu cores available to the
    /// system.
    pub parallelization: usize,
}

impl SystemDefault for Tasks {
    fn default_for(system: &System) -> Self {
        let num_cpus = system
            .physical_core_count()
            .unwrap_or(0)
            .max(system.processors().len())
            .max(1);
        Self {
            worker_count: num_cpus * 2,
            parallelization: num_cpus,
        }
    }
}

/// Configuration options for views.
#[derive(Clone, Debug, Default)]
pub struct Views {
    /// If true, the database will scan all views during the call to
    /// `open_local`. This will cause database opening to take longer, but once
    /// the database is open, no request will need to wait for the integrity to
    /// be checked. However, for faster startup time, you may wish to delay the
    /// integrity scan. Default value is `false`.
    pub check_integrity_on_open: bool,
}

/// Rules for persisting key-value changes. Default persistence is to
/// immediately persist all changes. While this ensures data integrity, the
/// overhead of the key-value store can be significantly reduced by utilizing
/// lazy persistence strategies that delay writing changes until certain
/// thresholds have been met.
///
/// ## Immediate persistence
///
/// The default persistence mode will trigger commits always:
///
/// ```rust
/// # use bonsaidb_local::config::KeyValuePersistence;
/// # use std::time::Duration;
/// assert!(!KeyValuePersistence::default().should_commit(0, Duration::ZERO));
/// assert!(KeyValuePersistence::default().should_commit(1, Duration::ZERO));
/// ```
///
/// ## Lazy persistence
///
/// Lazy persistence allows setting multiple thresholds, allowing for customized
/// behavior that can help tune performance, especially under write-heavy loads.
///
/// It is good practice to include one [`PersistenceThreshold`] that has no
/// duration, as it will ensure that the in-memory cache cannot exceed a certain
/// size. This number is counted for each database indepenently.
///
/// ```rust
/// # use bonsaidb_local::config::{KeyValuePersistence, PersistenceThreshold};
/// # use std::time::Duration;
/// #
/// let persistence = KeyValuePersistence::lazy([
///     PersistenceThreshold::after_changes(1).and_duration(Duration::from_secs(120)),
///     PersistenceThreshold::after_changes(10).and_duration(Duration::from_secs(10)),
///     PersistenceThreshold::after_changes(100),
/// ]);
///
/// // After 1 change and 60 seconds, no changes would be committed:
/// assert!(!persistence.should_commit(1, Duration::from_secs(60)));
/// // But on or after 120 seconds, that change will be committed:
/// assert!(persistence.should_commit(1, Duration::from_secs(120)));
///
/// // After 10 changes and 10 seconds, changes will be committed:
/// assert!(persistence.should_commit(10, Duration::from_secs(10)));
///
/// // Once 100 changes have been accumulated, this ruleset will always commit
/// // regardless of duration.
/// assert!(persistence.should_commit(100, Duration::ZERO));
/// ```
#[derive(Debug, Clone)]
#[must_use]
pub struct KeyValuePersistence(KeyValuePersistenceInner);

#[derive(Debug, Clone)]
enum KeyValuePersistenceInner {
    Immediate,
    Lazy(Vec<PersistenceThreshold>),
}

impl Default for KeyValuePersistence {
    /// Returns [`KeyValuePersistence::immediate()`].
    fn default() -> Self {
        Self::immediate()
    }
}

impl KeyValuePersistence {
    /// Returns a ruleset that commits all changes immediately.
    pub const fn immediate() -> Self {
        Self(KeyValuePersistenceInner::Immediate)
    }

    /// Returns a ruleset that lazily commits data based on a list of thresholds.
    pub fn lazy<II>(rules: II) -> Self
    where
        II: IntoIterator<Item = PersistenceThreshold>,
    {
        let mut rules = rules.into_iter().collect::<Vec<_>>();
        rules.sort_by(|a, b| a.number_of_changes.cmp(&b.number_of_changes));
        Self(KeyValuePersistenceInner::Lazy(rules))
    }

    /// Returns true if these rules determine that the outstanding changes should be persisted.
    #[must_use]
    pub fn should_commit(
        &self,
        number_of_changes: usize,
        elapsed_since_last_commit: Duration,
    ) -> bool {
        self.duration_until_next_commit(number_of_changes, elapsed_since_last_commit)
            == Some(Duration::ZERO)
    }

    pub(crate) fn duration_until_next_commit(
        &self,
        number_of_changes: usize,
        elapsed_since_last_commit: Duration,
    ) -> Option<Duration> {
        if number_of_changes == 0 {
            None
        } else {
            match &self.0 {
                KeyValuePersistenceInner::Immediate => Some(Duration::ZERO),
                KeyValuePersistenceInner::Lazy(rules) => {
                    let mut shortest_duration = Duration::MAX;
                    for rule in rules
                        .iter()
                        .take_while(|rule| rule.number_of_changes <= number_of_changes)
                    {
                        let remaining_time =
                            rule.duration.saturating_sub(elapsed_since_last_commit);
                        shortest_duration = shortest_duration.min(remaining_time);

                        if shortest_duration == Duration::ZERO {
                            break;
                        }
                    }
                    (shortest_duration < Duration::MAX).then(|| shortest_duration)
                }
            }
        }
    }
}

/// A threshold controlling lazy commits. For a threshold to apply, both
/// `number_of_changes` must be met or surpassed and `duration` must have
/// elpased since the last commit.
///
/// A threshold with a duration of zero will not wait any time to persist
/// changes once the specified `number_of_changes` has been met or surpassed.
#[derive(Debug, Copy, Clone)]
#[must_use]
pub struct PersistenceThreshold {
    /// The minimum number of changes that must have occurred for this threshold to apply.
    pub number_of_changes: usize,
    /// The amount of time that must elapse since the last write for this threshold to apply.
    pub duration: Duration,
}

impl PersistenceThreshold {
    /// Returns a threshold that applies after a number of changes have elapsed.
    pub const fn after_changes(number_of_changes: usize) -> Self {
        Self {
            number_of_changes,
            duration: Duration::ZERO,
        }
    }

    /// Sets the duration of this threshold to `duration` and returns self.
    pub const fn and_duration(mut self, duration: Duration) -> Self {
        self.duration = duration;
        self
    }
}

/// Storage configuration builder methods.
pub trait Builder: Sized {
    /// Creates a default configuration with `path` set.
    #[must_use]
    fn new<P: AsRef<Path>>(path: P) -> Self
    where
        Self: Default,
    {
        Self::default().path(path)
    }
    /// Registers the schema and returns self.
    fn with_schema<S: Schema>(self) -> Result<Self, Error>;

    /// Sets [`StorageConfiguration::path`](StorageConfiguration#structfield.memory_only) to true and returns self.
    #[must_use]
    fn memory_only(self) -> Self;
    /// Sets [`StorageConfiguration::path`](StorageConfiguration#structfield.path) to `path` and returns self.
    #[must_use]
    fn path<P: AsRef<Path>>(self, path: P) -> Self;
    /// Sets [`StorageConfiguration::unique_id`](StorageConfiguration#structfield.unique_id) to `unique_id` and returns self.
    #[must_use]
    fn unique_id(self, unique_id: u64) -> Self;
    /// Sets [`StorageConfiguration::vault_key_storage`](StorageConfiguration#structfield.vault_key_storage) to `key_storage` and returns self.
    #[cfg(feature = "encryption")]
    #[must_use]
    fn vault_key_storage<VaultKeyStorage: AnyVaultKeyStorage>(
        self,
        key_storage: VaultKeyStorage,
    ) -> Self;
    /// Sets [`StorageConfiguration::default_encryption_key`](StorageConfiguration#structfield.default_encryption_key) to `path` and returns self.
    #[cfg(feature = "encryption")]
    #[must_use]
    fn default_encryption_key(self, key: KeyId) -> Self;
    /// Sets [`Tasks::worker_count`] to `worker_count` and returns self.
    #[must_use]
    fn tasks_worker_count(self, worker_count: usize) -> Self;
    /// Sets [`Tasks::parallelization`] to `parallelization` and returns self.
    #[must_use]
    fn tasks_parallelization(self, parallelization: usize) -> Self;
    /// Sets [`Views::check_integrity_on_open`] to `check` and returns self.
    #[must_use]
    fn check_view_integrity_on_open(self, check: bool) -> Self;
    /// Sets [`StorageConfiguration::default_compression`](StorageConfiguration#structfield.default_compression) to `path` and returns self.
    #[cfg(feature = "compression")]
    #[must_use]
    fn default_compression(self, compression: Compression) -> Self;
    /// Sets [`StorageConfiguration::key_value_persistence`](StorageConfiguration#structfield.key_value_persistence) to `persistence` and returns self.
    #[must_use]
    fn key_value_persistence(self, persistence: KeyValuePersistence) -> Self;
    /// Sets [`Self::authenticated_permissions`](Self#structfield.authenticated_permissions) to `authenticated_permissions` and returns self.
    #[must_use]
    fn authenticated_permissions<P: Into<Permissions>>(self, authenticated_permissions: P) -> Self;
    /// Sets [`StorageConfiguration::argon`](StorageConfiguration#structfield.argon) to `argon` and returns self.
    #[cfg(feature = "password-hashing")]
    #[must_use]
    fn argon(self, argon: ArgonConfiguration) -> Self;
}

impl Builder for StorageConfiguration {
    fn with_schema<S: Schema>(mut self) -> Result<Self, Error> {
        self.register_schema::<S>()?;
        Ok(self)
    }

    fn memory_only(mut self) -> Self {
        self.memory_only = true;
        self
    }

    fn path<P: AsRef<Path>>(mut self, path: P) -> Self {
        self.path = Some(path.as_ref().to_owned());
        self
    }

    fn unique_id(mut self, unique_id: u64) -> Self {
        self.unique_id = Some(unique_id);
        self
    }

    #[cfg(feature = "encryption")]
    fn vault_key_storage<VaultKeyStorage: AnyVaultKeyStorage>(
        mut self,
        key_storage: VaultKeyStorage,
    ) -> Self {
        self.vault_key_storage = Some(Arc::new(key_storage));
        self
    }

    #[cfg(feature = "encryption")]
    fn default_encryption_key(mut self, key: KeyId) -> Self {
        self.default_encryption_key = Some(key);
        self
    }

    #[cfg(feature = "compression")]
    fn default_compression(mut self, compression: Compression) -> Self {
        self.default_compression = Some(compression);
        self
    }

    fn tasks_worker_count(mut self, worker_count: usize) -> Self {
        self.workers.worker_count = worker_count;
        self
    }

    fn tasks_parallelization(mut self, parallelization: usize) -> Self {
        self.workers.parallelization = parallelization;
        self
    }

    fn check_view_integrity_on_open(mut self, check: bool) -> Self {
        self.views.check_integrity_on_open = check;
        self
    }

    fn key_value_persistence(mut self, persistence: KeyValuePersistence) -> Self {
        self.key_value_persistence = persistence;
        self
    }

    fn authenticated_permissions<P: Into<Permissions>>(
        mut self,
        authenticated_permissions: P,
    ) -> Self {
        self.authenticated_permissions = authenticated_permissions.into();
        self
    }

    #[cfg(feature = "password-hashing")]
    fn argon(mut self, argon: ArgonConfiguration) -> Self {
        self.argon = argon;
        self
    }
}

pub(crate) trait SystemDefault: Sized {
    fn default_for(system: &System) -> Self;
    fn default() -> Self {
        let system_specs = RefreshKind::new().with_cpu().with_memory();
        let mut system = System::new_with_specifics(system_specs);
        system.refresh_specifics(system_specs);
        Self::default_for(&system)
    }
}

/// All available compression algorithms.
#[derive(Debug, Clone, Copy)]
pub enum Compression {
    /// Compress data using the
    /// [lz4](https://en.wikipedia.org/wiki/LZ4_(compression_algorithm))
    /// algorithm. This is powered by
    /// [lz4_flex](https://crates.io/crates/lz4_flex).
    Lz4 = 1,
}

impl Compression {
    #[must_use]
    #[cfg(feature = "compression")]
    pub(crate) fn from_u8(value: u8) -> Option<Self> {
        match value {
            1 => Some(Self::Lz4),
            _ => None,
        }
    }
}
