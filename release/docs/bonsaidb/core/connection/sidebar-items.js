initSidebarItems({"enum":[["AccessPolicy","Changes how the view’s outdated data will be treated."],["Authentication","User authentication methods."],["Bound","A range bound that can be serialized."],["Identity","An identity from the connected BonsaiDb instance."],["IdentityReference","A reference to an identity."],["QueryKey","Filters a [`View`] by key."],["Sort","A sort order."]],"struct":[["AsyncCollection","Interacts with a collection over a `Connection`."],["AsyncList","Retrieves a list of documents from a collection, when awaited. This structure also offers functions to customize the options for the operation."],["AsyncView","Parameters to query a [`schema::View`]."],["Collection","Interacts with a collection over a `Connection`."],["Database","A database stored in BonsaiDb."],["List","Retrieves a list of documents from a collection. This structure also offers functions to customize the options for the operation."],["Range","A range type that can represent all `std` range types and be serialized."],["SensitiveString","A plain-text password. This struct automatically overwrites the password with zeroes when dropped."],["Session","The authentication state for a [`StorageConnection`]."],["SessionId","A unique session ID."],["View","Parameters to query a [`schema::View`]."]],"trait":[["AsyncConnection","A connection to a database’s `Schema`, giving access to `Collection`s and `Views`s. All functions on this trait are safe to use in an asynchronous context."],["AsyncLowLevelConnection","The low-level interface to a database’s [`schema::Schema`], giving access to `Collection`s and `Views`s. This trait is for use within async contexts. For access outside of async contexts, use [`LowLevelConnection`]."],["AsyncStorageConnection","Functions for interacting with a multi-database BonsaiDb instance."],["Connection","A connection to a database’s `Schema`, giving access to `Collection`s and `Views`s. This trait is not safe to use within async contexts and will block the current thread. For async access, use [`AsyncConnection`]."],["HasSession","Functions to access information about the current session (authentication)."],["LowLevelConnection","The low-level interface to a database’s [`schema::Schema`], giving access to `Collection`s and `Views`s. This trait is not safe to use within async contexts and will block the current thread. For async access, use [`AsyncLowLevelConnection`]."],["StorageConnection","Functions for interacting with a multi-database BonsaiDb instance."]],"type":[["GroupedReductions","This type is the result of `reduce_grouped()`. It is a list of all matching keys and the reduced value of all mapped entries for that key."],["ViewMappings","This type is the result of `query()`. It is a list of mappings, which contains:"]]});