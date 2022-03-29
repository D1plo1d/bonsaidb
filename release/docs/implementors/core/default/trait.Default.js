(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.User.html\" title=\"struct bonsaidb_core::admin::User\">User</a>","synthetic":false,"types":["bonsaidb_core::admin::user::User"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Range.html\" title=\"struct bonsaidb_core::connection::Range\">Range</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Range"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.Bound.html\" title=\"enum bonsaidb_core::connection::Bound\">Bound</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Bound"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Session.html\" title=\"struct bonsaidb_core::connection::Session\">Session</a>","synthetic":false,"types":["bonsaidb_core::connection::Session"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.SessionId.html\" title=\"struct bonsaidb_core::connection::SessionId\">SessionId</a>","synthetic":false,"types":["bonsaidb_core::connection::SessionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>","synthetic":false,"types":["bonsaidb_core::document::id::DocumentId"]},{"text":"impl&lt;K:&nbsp;for&lt;'a&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.Key.html\" title=\"trait bonsaidb_core::key::Key\">Key</a>&lt;'a&gt;, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"bonsaidb_core/schema/view/map/enum.Mappings.html\" title=\"enum bonsaidb_core::schema::view::map::Mappings\">Mappings</a>&lt;K, V&gt;","synthetic":false,"types":["bonsaidb_core::schema::view::map::Mappings"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/transaction/struct.Transaction.html\" title=\"struct bonsaidb_core::transaction::Transaction\">Transaction</a>","synthetic":false,"types":["bonsaidb_core::transaction::Transaction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.Timestamp.html\" title=\"struct bonsaidb_core::keyvalue::Timestamp\">Timestamp</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::timestamp::Timestamp"]},{"text":"impl&lt;Resolution&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::key::time::limited::LimitedResolutionDuration"]},{"text":"impl&lt;Resolution, Epoch&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionTimestamp.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionTimestamp\">LimitedResolutionTimestamp</a>&lt;Resolution, Epoch&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Epoch: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeEpoch.html\" title=\"trait bonsaidb_core::key::time::limited::TimeEpoch\">TimeEpoch</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::key::time::limited::LimitedResolutionTimestamp"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Basic.html\" title=\"struct bonsaidb_core::test_util::Basic\">Basic</a>","synthetic":false,"types":["bonsaidb_core::test_util::Basic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasic.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasic\">EncryptedBasic</a>","synthetic":false,"types":["bonsaidb_core::test_util::EncryptedBasic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Unique.html\" title=\"struct bonsaidb_core::test_util::Unique\">Unique</a>","synthetic":false,"types":["bonsaidb_core::test_util::Unique"]}];
implementors["bonsaidb_keystorage_s3"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_keystorage_s3/struct.S3VaultKeyStorage.html\" title=\"struct bonsaidb_keystorage_s3::S3VaultKeyStorage\">S3VaultKeyStorage</a>","synthetic":false,"types":["bonsaidb_keystorage_s3::S3VaultKeyStorage"]}];
implementors["bonsaidb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_local/config/struct.TimedArgonParams.html\" title=\"struct bonsaidb_local::config::TimedArgonParams\">TimedArgonParams</a>","synthetic":false,"types":["bonsaidb_local::config::argon::TimedArgonParams"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_local/config/struct.StorageConfiguration.html\" title=\"struct bonsaidb_local::config::StorageConfiguration\">StorageConfiguration</a>","synthetic":false,"types":["bonsaidb_local::config::StorageConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_local/config/struct.Views.html\" title=\"struct bonsaidb_local::config::Views\">Views</a>","synthetic":false,"types":["bonsaidb_local::config::Views"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_local/config/struct.KeyValuePersistence.html\" title=\"struct bonsaidb_local::config::KeyValuePersistence\">KeyValuePersistence</a>","synthetic":false,"types":["bonsaidb_local::config::KeyValuePersistence"]}];
implementors["bonsaidb_server"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bonsaidb_server/trait.Backend.html\" title=\"trait bonsaidb_server::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_server/struct.ServerConfiguration.html\" title=\"struct bonsaidb_server::ServerConfiguration\">ServerConfiguration</a>&lt;B&gt;","synthetic":false,"types":["bonsaidb_server::config::ServerConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bonsaidb_server/struct.AcmeConfiguration.html\" title=\"struct bonsaidb_server::AcmeConfiguration\">AcmeConfiguration</a>","synthetic":false,"types":["bonsaidb_server::config::acme::AcmeConfiguration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.StandardTcpProtocols.html\" title=\"enum bonsaidb_server::StandardTcpProtocols\">StandardTcpProtocols</a>","synthetic":false,"types":["bonsaidb_server::server::tcp::StandardTcpProtocols"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()