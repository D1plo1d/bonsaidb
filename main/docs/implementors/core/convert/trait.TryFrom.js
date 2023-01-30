(function() {var implementors = {
"bonsaidb_core":[["impl&lt;'a, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"struct\" href=\"bonsaidb_core/document/struct.BorrowedDocument.html\" title=\"struct bonsaidb_core::document::BorrowedDocument\">BorrowedDocument</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,</span>"],["impl&lt;'a, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"struct\" href=\"bonsaidb_core/document/struct.OwnedDocument.html\" title=\"struct bonsaidb_core::document::OwnedDocument\">OwnedDocument</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,</span>"],["impl&lt;'a, 'b, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'b <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.BorrowedDocument.html\" title=\"struct bonsaidb_core::document::BorrowedDocument\">BorrowedDocument</a>&lt;'a&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,</span>"],["impl&lt;PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionHeader.html\" title=\"struct bonsaidb_core::document::CollectionHeader\">CollectionHeader</a>&lt;PrimaryKey&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.Key.html\" title=\"trait bonsaidb_core::key::Key\">Key</a>&lt;'k&gt;,</span>"],["impl&lt;PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionHeader.html\" title=\"struct bonsaidb_core::document::CollectionHeader\">CollectionHeader</a>&lt;PrimaryKey&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.Key.html\" title=\"trait bonsaidb_core::key::Key\">Key</a>&lt;'k&gt;,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>"],["impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.array.html\">N</a>]&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>"],["impl&lt;'a, 'c, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'c <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;&gt; for <a class=\"enum\" href=\"bonsaidb_core/schema/enum.NamedReference.html\" title=\"enum bonsaidb_core::schema::NamedReference\">NamedReference</a>&lt;'a, C::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.f64.html\">f64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u64.html\">u64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.i64.html\">i64</a>"],["impl&lt;Resolution&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/key/time/limited/enum.SignedDuration.html\" title=\"enum bonsaidb_core::key::time::limited::SignedDuration\">SignedDuration</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,</span>"],["impl&lt;Resolution&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;&gt; for <a class=\"enum\" href=\"bonsaidb_core/key/time/limited/enum.SignedDuration.html\" title=\"enum bonsaidb_core::key::time::limited::SignedDuration\">SignedDuration</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,</span>"],["impl&lt;Resolution&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,</span>"],["impl&lt;Resolution&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionDuration.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionDuration\">LimitedResolutionDuration</a>&lt;Resolution&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,</span>"],["impl&lt;Resolution, Epoch&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.0/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionTimestamp.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionTimestamp\">LimitedResolutionTimestamp</a>&lt;Resolution, Epoch&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Epoch: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeEpoch.html\" title=\"trait bonsaidb_core::key::time::limited::TimeEpoch\">TimeEpoch</a>,</span>"],["impl&lt;Resolution, Epoch&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/key/time/limited/struct.LimitedResolutionTimestamp.html\" title=\"struct bonsaidb_core::key::time::limited::LimitedResolutionTimestamp\">LimitedResolutionTimestamp</a>&lt;Resolution, Epoch&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.0/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resolution: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeResolution.html\" title=\"trait bonsaidb_core::key::time::limited::TimeResolution\">TimeResolution</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Epoch: <a class=\"trait\" href=\"bonsaidb_core/key/time/limited/trait.TimeEpoch.html\" title=\"trait bonsaidb_core::key::time::limited::TimeEpoch\">TimeEpoch</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()