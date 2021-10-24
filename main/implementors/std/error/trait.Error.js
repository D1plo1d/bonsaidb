(function() {var implementors = {};
implementors["bonsaidb_client"] = [{"text":"impl&lt;ApiError:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/custom_api/trait.CustomApiError.html\" title=\"trait bonsaidb_core::custom_api::CustomApiError\">CustomApiError</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_client/enum.Error.html\" title=\"enum bonsaidb_client::Error\">Error</a>&lt;ApiError&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_client::error::Error"]}];
implementors["bonsaidb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.InvalidNameError.html\" title=\"struct bonsaidb_core::schema::InvalidNameError\">InvalidNameError</a>","synthetic":false,"types":["bonsaidb_core::schema::names::InvalidNameError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.IncorrectByteLength.html\" title=\"struct bonsaidb_core::schema::view::map::IncorrectByteLength\">IncorrectByteLength</a>","synthetic":false,"types":["bonsaidb_core::schema::view::map::IncorrectByteLength"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/schema/view/enum.Error.html\" title=\"enum bonsaidb_core::schema::view::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::schema::view::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/kv/struct.IncompatibleTypeError.html\" title=\"struct bonsaidb_core::kv::IncompatibleTypeError\">IncompatibleTypeError</a>","synthetic":false,"types":["bonsaidb_core::kv::IncompatibleTypeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"bonsaidb_core/custom_api/struct.Infallible.html\" title=\"struct bonsaidb_core::custom_api::Infallible\">Infallible</a>","synthetic":false,"types":["bonsaidb_core::custom_api::Infallible"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/networking/enum.Error.html\" title=\"enum bonsaidb_core::networking::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::networking::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_core/enum.Error.html\" title=\"enum bonsaidb_core::Error\">Error</a>","synthetic":false,"types":["bonsaidb_core::Error"]}];
implementors["bonsaidb_server"] = [{"text":"impl&lt;E:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/custom_api/trait.CustomApiError.html\" title=\"trait bonsaidb_core::custom_api::CustomApiError\">CustomApiError</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.BackendError.html\" title=\"enum bonsaidb_server::BackendError\">BackendError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_server::backend::BackendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.Error.html\" title=\"enum bonsaidb_server::Error\">Error</a>","synthetic":false,"types":["bonsaidb_server::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()