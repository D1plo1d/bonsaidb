(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl&lt;K&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/connection/enum.QueryKey.html\" title=\"enum pliantdb_core::connection::QueryKey\">QueryKey</a>&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["pliantdb_core::connection::QueryKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/connection/enum.AccessPolicy.html\" title=\"enum pliantdb_core::connection::AccessPolicy\">AccessPolicy</a>","synthetic":false,"types":["pliantdb_core::connection::AccessPolicy"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/document/struct.Revision.html\" title=\"struct pliantdb_core::document::Revision\">Revision</a>","synthetic":false,"types":["pliantdb_core::document::revision::Revision"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/document/struct.Header.html\" title=\"struct pliantdb_core::document::Header\">Header</a>","synthetic":false,"types":["pliantdb_core::document::Header"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/document/struct.Document.html\" title=\"struct pliantdb_core::document::Document\">Document</a>&lt;'a&gt;","synthetic":false,"types":["pliantdb_core::document::Document"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/networking/struct.Payload.html\" title=\"struct pliantdb_core::networking::Payload\">Payload</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["pliantdb_core::networking::Payload"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.Request.html\" title=\"enum pliantdb_core::networking::Request\">Request</a>","synthetic":false,"types":["pliantdb_core::networking::Request"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.ServerRequest.html\" title=\"enum pliantdb_core::networking::ServerRequest\">ServerRequest</a>","synthetic":false,"types":["pliantdb_core::networking::ServerRequest"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.DatabaseRequest.html\" title=\"enum pliantdb_core::networking::DatabaseRequest\">DatabaseRequest</a>","synthetic":false,"types":["pliantdb_core::networking::DatabaseRequest"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.Response.html\" title=\"enum pliantdb_core::networking::Response\">Response</a>","synthetic":false,"types":["pliantdb_core::networking::Response"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.ServerResponse.html\" title=\"enum pliantdb_core::networking::ServerResponse\">ServerResponse</a>","synthetic":false,"types":["pliantdb_core::networking::ServerResponse"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.DatabaseResponse.html\" title=\"enum pliantdb_core::networking::DatabaseResponse\">DatabaseResponse</a>","synthetic":false,"types":["pliantdb_core::networking::DatabaseResponse"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/networking/struct.MappedDocument.html\" title=\"struct pliantdb_core::networking::MappedDocument\">MappedDocument</a>","synthetic":false,"types":["pliantdb_core::networking::MappedDocument"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/networking/struct.Database.html\" title=\"struct pliantdb_core::networking::Database\">Database</a>","synthetic":false,"types":["pliantdb_core::networking::Database"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/networking/enum.Error.html\" title=\"enum pliantdb_core::networking::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::networking::Error"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/schema/struct.CollectionId.html\" title=\"struct pliantdb_core::schema::CollectionId\">CollectionId</a>","synthetic":false,"types":["pliantdb_core::schema::collection::CollectionId"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/schema/view/map/struct.Serialized.html\" title=\"struct pliantdb_core::schema::view::map::Serialized\">Serialized</a>","synthetic":false,"types":["pliantdb_core::schema::view::map::Serialized"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"pliantdb_core/schema/view/map/trait.Key.html\" title=\"trait pliantdb_core::schema::view::map::Key\">Key</a>, V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/schema/view/map/struct.MappedValue.html\" title=\"struct pliantdb_core::schema::view::map::MappedValue\">MappedValue</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["pliantdb_core::schema::view::map::MappedValue"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/schema/struct.SchemaId.html\" title=\"struct pliantdb_core::schema::SchemaId\">SchemaId</a>","synthetic":false,"types":["pliantdb_core::schema::SchemaId"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/transaction/struct.Transaction.html\" title=\"struct pliantdb_core::transaction::Transaction\">Transaction</a>&lt;'a&gt;","synthetic":false,"types":["pliantdb_core::transaction::Transaction"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/transaction/struct.Operation.html\" title=\"struct pliantdb_core::transaction::Operation\">Operation</a>&lt;'a&gt;","synthetic":false,"types":["pliantdb_core::transaction::Operation"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/transaction/enum.Command.html\" title=\"enum pliantdb_core::transaction::Command\">Command</a>&lt;'a&gt;","synthetic":false,"types":["pliantdb_core::transaction::Command"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/transaction/enum.OperationResult.html\" title=\"enum pliantdb_core::transaction::OperationResult\">OperationResult</a>","synthetic":false,"types":["pliantdb_core::transaction::OperationResult"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/transaction/struct.Executed.html\" title=\"struct pliantdb_core::transaction::Executed\">Executed</a>&lt;'a&gt;","synthetic":false,"types":["pliantdb_core::transaction::Executed"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/transaction/struct.ChangedDocument.html\" title=\"struct pliantdb_core::transaction::ChangedDocument\">ChangedDocument</a>","synthetic":false,"types":["pliantdb_core::transaction::ChangedDocument"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"pliantdb_core/enum.Error.html\" title=\"enum pliantdb_core::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::Error"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"pliantdb_core/test_util/struct.Basic.html\" title=\"struct pliantdb_core::test_util::Basic\">Basic</a>","synthetic":false,"types":["pliantdb_core::test_util::Basic"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()