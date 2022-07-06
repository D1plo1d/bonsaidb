(function() {var implementors = {};
implementors["bonsaidb_client"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_client/enum.Error.html\" title=\"enum bonsaidb_client::Error\">Error</a>","synthetic":false,"types":["bonsaidb_client::error::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_client/enum.ApiError.html\" title=\"enum bonsaidb_client::ApiError\">ApiError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_client::error::ApiError"]}];
implementors["bonsaidb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.InvalidHexadecimal.html\" title=\"struct bonsaidb_core::document::InvalidHexadecimal\">InvalidHexadecimal</a>","synthetic":false,"types":["bonsaidb_core::document::id::InvalidHexadecimal"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InsertError.html\" title=\"struct bonsaidb_core::schema::InsertError\">InsertError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::schema::collection::InsertError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InvalidNameError.html\" title=\"struct bonsaidb_core::schema::InvalidNameError\">InvalidNameError</a>","synthetic":false,"types":["bonsaidb_core::schema::names::InvalidNameError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/schema/view/enum.Error.html\" title=\"enum bonsaidb_core::schema::view::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::schema::view::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.IncompatibleTypeError.html\" title=\"struct bonsaidb_core::keyvalue::IncompatibleTypeError\">IncompatibleTypeError</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::IncompatibleTypeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/api/enum.Infallible.html\" title=\"enum bonsaidb_core::api::Infallible\">Infallible</a>","synthetic":false,"types":["bonsaidb_core::api::Infallible"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/key/time/struct.DeltaNotRepresentable.html\" title=\"struct bonsaidb_core::key::time::DeltaNotRepresentable\">DeltaNotRepresentable</a>","synthetic":false,"types":["bonsaidb_core::key::time::DeltaNotRepresentable"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/key/time/enum.TimeError.html\" title=\"enum bonsaidb_core::key::time::TimeError\">TimeError</a>","synthetic":false,"types":["bonsaidb_core::key::time::TimeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/key/enum.NextValueError.html\" title=\"enum bonsaidb_core::key::NextValueError\">NextValueError</a>","synthetic":false,"types":["bonsaidb_core::key::NextValueError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/key/struct.CompositeKeyFieldContainsNullByte.html\" title=\"struct bonsaidb_core::key::CompositeKeyFieldContainsNullByte\">CompositeKeyFieldContainsNullByte</a>","synthetic":false,"types":["bonsaidb_core::key::CompositeKeyFieldContainsNullByte"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/key/struct.CompositeKeyError.html\" title=\"struct bonsaidb_core::key::CompositeKeyError\">CompositeKeyError</a>","synthetic":false,"types":["bonsaidb_core::key::CompositeKeyError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/key/struct.IncorrectByteLength.html\" title=\"struct bonsaidb_core::key::IncorrectByteLength\">IncorrectByteLength</a>","synthetic":false,"types":["bonsaidb_core::key::IncorrectByteLength"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/key/struct.UnknownEnumVariant.html\" title=\"struct bonsaidb_core::key::UnknownEnumVariant\">UnknownEnumVariant</a>","synthetic":false,"types":["bonsaidb_core::key::UnknownEnumVariant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Error.html\" title=\"enum bonsaidb_core::networking::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::networking::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/pubsub/struct.Disconnected.html\" title=\"struct bonsaidb_core::pubsub::Disconnected\">Disconnected</a>","synthetic":false,"types":["bonsaidb_core::pubsub::Disconnected"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/pubsub/enum.TryReceiveError.html\" title=\"enum bonsaidb_core::pubsub::TryReceiveError\">TryReceiveError</a>","synthetic":false,"types":["bonsaidb_core::pubsub::TryReceiveError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/enum.Error.html\" title=\"enum bonsaidb_core::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::Error"]}];
implementors["bonsaidb_files"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_files/enum.Error.html\" title=\"enum bonsaidb_files::Error\">Error</a>","synthetic":false,"types":["bonsaidb_files::Error"]}];
implementors["bonsaidb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_local/cli/enum.ReadPasswordError.html\" title=\"enum bonsaidb_local::cli::ReadPasswordError\">ReadPasswordError</a>","synthetic":false,"types":["bonsaidb_local::cli::ReadPasswordError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_local/enum.Error.html\" title=\"enum bonsaidb_local::Error\">Error</a>","synthetic":false,"types":["bonsaidb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.Error.html\" title=\"enum bonsaidb_local::vault::Error\">Error</a>","synthetic":false,"types":["bonsaidb_local::vault::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_local/vault/enum.LocalVaultKeyStorageError.html\" title=\"enum bonsaidb_local::vault::LocalVaultKeyStorageError\">LocalVaultKeyStorageError</a>","synthetic":false,"types":["bonsaidb_local::vault::LocalVaultKeyStorageError"]}];
implementors["bonsaidb_server"] = [{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/api/trait.ApiError.html\" title=\"trait bonsaidb_core::api::ApiError\">ApiError</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_server/api/enum.HandlerError.html\" title=\"enum bonsaidb_server::api::HandlerError\">HandlerError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_server::api::HandlerError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.BackendError.html\" title=\"enum bonsaidb_server::BackendError\">BackendError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_server::backend::BackendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.Error.html\" title=\"enum bonsaidb_server::Error\">Error</a>","synthetic":false,"types":["bonsaidb_server::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()