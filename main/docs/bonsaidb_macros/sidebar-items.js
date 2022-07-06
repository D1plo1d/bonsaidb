initSidebarItems({"derive":[["Api","Derives the `bonsaidb::core::api::Api` trait. `#[api(name = \"Name\", authority = \"Authority\", response = ResponseType, error = ErrorType, core = bonsaidb::core)]` `authority`, `response`, `error` and `core` are optional"],["Collection","Derives the `bonsaidb::core::schema::Collection` trait. `#[collection(authority = \"Authority\", name = \"Name\", views = [a, b, c])]`"],["FileConfig","Derives the `bonsaidb::files::FileConfig` trait. `#[api(metadata = MetadataType, block_size = 65_536, authority = \"authority\", files_name = \"files\", blocks_name = \"blocks\", core = bonsaidb::core, files = bosaidb::files)]` all arguments are optional"],["Key","Derives the `bonsaidb::core::key::Key` trait."],["Schema","Derives the `bonsaidb::core::schema::Schema` trait. `#[schema(name = \"Name\", authority = \"Authority\", collections = [A, B, C]), core = bonsaidb::core]` `authority`, `collections` and `core` are optional"],["View","Derives the `bonsaidb::core::schema::View` trait. `#[view(collection=CollectionType, key=KeyType, value=ValueType, name = \"by-name\")]` `name` and `value` are optional"]]});