(function() {var implementors = {};
implementors["bonsaidb_client"] = [{"text":"impl&lt;ApiError:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/custom_api/trait.CustomApiError.html\" title=\"trait bonsaidb_core::custom_api::CustomApiError\">CustomApiError</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_client/enum.Error.html\" title=\"enum bonsaidb_client::Error\">Error</a>&lt;ApiError&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ApiError: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_client::error::Error"]}];
implementors["bonsaidb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Revision.html\" title=\"struct bonsaidb_core::document::Revision\">Revision</a>","synthetic":false,"types":["bonsaidb_core::document::revision::Revision"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>","synthetic":false,"types":["bonsaidb_core::document::Header"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InsertError.html\" title=\"struct bonsaidb_core::schema::InsertError\">InsertError</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::schema::collection::InsertError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InvalidNameError.html\" title=\"struct bonsaidb_core::schema::InvalidNameError\">InvalidNameError</a>","synthetic":false,"types":["bonsaidb_core::schema::names::InvalidNameError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Name"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Authority"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::SchemaName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::CollectionName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.ViewName.html\" title=\"struct bonsaidb_core::schema::ViewName\">ViewName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::ViewName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/view/struct.CompositeKeyError.html\" title=\"struct bonsaidb_core::schema::view::CompositeKeyError\">CompositeKeyError</a>","synthetic":false,"types":["bonsaidb_core::schema::view::key::CompositeKeyError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/view/struct.IncorrectByteLength.html\" title=\"struct bonsaidb_core::schema::view::IncorrectByteLength\">IncorrectByteLength</a>","synthetic":false,"types":["bonsaidb_core::schema::view::key::IncorrectByteLength"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_core/schema/view/enum.Error.html\" title=\"enum bonsaidb_core::schema::view::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::schema::view::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/kv/struct.IncompatibleTypeError.html\" title=\"struct bonsaidb_core::kv::IncompatibleTypeError\">IncompatibleTypeError</a>","synthetic":false,"types":["bonsaidb_core::kv::IncompatibleTypeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_core/custom_api/struct.Infallible.html\" title=\"struct bonsaidb_core::custom_api::Infallible\">Infallible</a>","synthetic":false,"types":["bonsaidb_core::custom_api::Infallible"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Error.html\" title=\"enum bonsaidb_core::networking::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::networking::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_core/enum.Error.html\" title=\"enum bonsaidb_core::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_core/test_util/enum.HarnessTest.html\" title=\"enum bonsaidb_core::test_util::HarnessTest\">HarnessTest</a>","synthetic":false,"types":["bonsaidb_core::test_util::HarnessTest"]}];
implementors["bonsaidb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_local/enum.Error.html\" title=\"enum bonsaidb_local::Error\">Error</a>","synthetic":false,"types":["bonsaidb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bonsaidb_local/struct.StorageId.html\" title=\"struct bonsaidb_local::StorageId\">StorageId</a>","synthetic":false,"types":["bonsaidb_local::storage::StorageId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.Error.html\" title=\"enum bonsaidb_local::vault::Error\">Error</a>","synthetic":false,"types":["bonsaidb_local::vault::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.LocalVaultKeyStorageError.html\" title=\"enum bonsaidb_local::vault::LocalVaultKeyStorageError\">LocalVaultKeyStorageError</a>","synthetic":false,"types":["bonsaidb_local::vault::LocalVaultKeyStorageError"]}];
implementors["bonsaidb_server"] = [{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/custom_api/trait.CustomApiError.html\" title=\"trait bonsaidb_core::custom_api::CustomApiError\">CustomApiError</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.BackendError.html\" title=\"enum bonsaidb_server::BackendError\">BackendError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_server::backend::BackendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.Error.html\" title=\"enum bonsaidb_server::Error\">Error</a>","synthetic":false,"types":["bonsaidb_server::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()