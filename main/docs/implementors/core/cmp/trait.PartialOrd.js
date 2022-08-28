(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl&lt;'a, TOwned, TBorrowed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/connection/enum.MaybeOwned.html\" title=\"enum bonsaidb_core::connection::MaybeOwned\">MaybeOwned</a>&lt;'a, TOwned, TBorrowed&gt;&gt; for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.MaybeOwned.html\" title=\"enum bonsaidb_core::connection::MaybeOwned\">MaybeOwned</a>&lt;'a, TOwned, TBorrowed&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TOwned: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;TBorrowed&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;TBorrowed: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::connection::MaybeOwned"]},{"text":"impl&lt;'a, TOwned, TBorrowed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;TBorrowed&gt; for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.MaybeOwned.html\" title=\"enum bonsaidb_core::connection::MaybeOwned\">MaybeOwned</a>&lt;'a, TOwned, TBorrowed&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TOwned: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;TBorrowed&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;TBorrowed: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::connection::MaybeOwned"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>","synthetic":false,"types":["bonsaidb_core::document::id::DocumentId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Name"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Authority"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/schema/struct.QualifiedName.html\" title=\"struct bonsaidb_core::schema::QualifiedName\">QualifiedName</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.QualifiedName.html\" title=\"struct bonsaidb_core::schema::QualifiedName\">QualifiedName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::QualifiedName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::SchemaName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::CollectionName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.Timestamp.html\" title=\"struct bonsaidb_core::keyvalue::Timestamp\">Timestamp</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.Timestamp.html\" title=\"struct bonsaidb_core::keyvalue::Timestamp\">Timestamp</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::timestamp::Timestamp"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/api/struct.ApiName.html\" title=\"struct bonsaidb_core::api::ApiName\">ApiName</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/api/struct.ApiName.html\" title=\"struct bonsaidb_core::api::ApiName\">ApiName</a>","synthetic":false,"types":["bonsaidb_core::api::ApiName"]},{"text":"impl&lt;Resolution:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;","synthetic":false,"types":["bonsaidb_core::key::time::limited::LimitedResolutionDuration"]},{"text":"impl&lt;Resolution:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>, Epoch:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeEpoch.html\" title=\"trait bonsaidb_core::key::time::limited::TimeEpoch\">TimeEpoch</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionTimestamp.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionTimestamp\">LimitedResolutionTimestamp</a>&lt;Resolution, Epoch&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionTimestamp.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionTimestamp\">LimitedResolutionTimestamp</a>&lt;Resolution, Epoch&gt;","synthetic":false,"types":["bonsaidb_core::key::time::limited::LimitedResolutionTimestamp"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/struct.EnumKey.html\" title=\"struct bonsaidb_core::key::EnumKey\">EnumKey</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/struct.EnumKey.html\" title=\"struct bonsaidb_core::key::EnumKey\">EnumKey</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html\" title=\"trait num_traits::cast::FromPrimitive\">FromPrimitive</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::key::EnumKey"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()