(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Range.html\" title=\"struct bonsaidb_core::connection::Range\">Range</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Range"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.Bound.html\" title=\"enum bonsaidb_core::connection::Bound\">Bound</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Bound"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::<a class=\"type\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html#associatedtype.Contents\" title=\"type bonsaidb_core::schema::SerializedCollection::Contents\">Contents</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::collection::CollectionDocument"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>","synthetic":false,"types":["bonsaidb_core::document::header::Header"]},{"text":"impl&lt;PrimaryKey:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionHeader.html\" title=\"struct bonsaidb_core::document::CollectionHeader\">CollectionHeader</a>&lt;PrimaryKey&gt;","synthetic":false,"types":["bonsaidb_core::document::header::CollectionHeader"]},{"text":"impl&lt;PrimaryKey:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"bonsaidb_core/document/enum.AnyHeader.html\" title=\"enum bonsaidb_core::document::AnyHeader\">AnyHeader</a>&lt;PrimaryKey&gt;","synthetic":false,"types":["bonsaidb_core::document::header::AnyHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>","synthetic":false,"types":["bonsaidb_core::document::id::DocumentId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Revision.html\" title=\"struct bonsaidb_core::document::Revision\">Revision</a>","synthetic":false,"types":["bonsaidb_core::document::revision::Revision"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"bonsaidb_core/document/enum.KeyId.html\" title=\"enum bonsaidb_core::document::KeyId\">KeyId</a>","synthetic":false,"types":["bonsaidb_core::document::KeyId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Name"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Authority"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::SchemaName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::CollectionName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.ViewName.html\" title=\"struct bonsaidb_core::schema::ViewName\">ViewName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::ViewName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.Timestamp.html\" title=\"struct bonsaidb_core::keyvalue::Timestamp\">Timestamp</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::timestamp::Timestamp"]}];
implementors["bonsaidb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_local/jobs/task/struct.Id.html\" title=\"struct bonsaidb_local::jobs::task::Id\">Id</a>","synthetic":false,"types":["bonsaidb_local::jobs::task::Id"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bonsaidb_local/struct.StorageId.html\" title=\"struct bonsaidb_local::StorageId\">StorageId</a>","synthetic":false,"types":["bonsaidb_local::storage::StorageId"]}];
implementors["bonsaidb_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.Transport.html\" title=\"enum bonsaidb_server::Transport\">Transport</a>","synthetic":false,"types":["bonsaidb_server::server::connected_client::Transport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()