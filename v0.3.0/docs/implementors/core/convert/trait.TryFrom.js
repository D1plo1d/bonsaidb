(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl&lt;'a, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"struct\" href=\"bonsaidb_core/document/struct.BorrowedDocument.html\" title=\"struct bonsaidb_core::document::BorrowedDocument\">BorrowedDocument</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::collection::CollectionDocument"]},{"text":"impl&lt;'a, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"struct\" href=\"bonsaidb_core/document/struct.OwnedDocument.html\" title=\"struct bonsaidb_core::document::OwnedDocument\">OwnedDocument</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::collection::CollectionDocument"]},{"text":"impl&lt;'a, 'b, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'b <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.BorrowedDocument.html\" title=\"struct bonsaidb_core::document::BorrowedDocument\">BorrowedDocument</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::BorrowedDocument"]},{"text":"impl&lt;PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionHeader.html\" title=\"struct bonsaidb_core::document::CollectionHeader\">CollectionHeader</a>&lt;PrimaryKey&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.Key.html\" title=\"trait bonsaidb_core::key::Key\">Key</a>&lt;'k&gt;,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::header::CollectionHeader"]},{"text":"impl&lt;PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionHeader.html\" title=\"struct bonsaidb_core::document::CollectionHeader\">CollectionHeader</a>&lt;PrimaryKey&gt;&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.Key.html\" title=\"trait bonsaidb_core::key::Key\">Key</a>&lt;'k&gt;,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::document::header::Header"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>","synthetic":false,"types":["bonsaidb_core::document::id::DocumentId"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"bonsaidb_core/document/struct.DocumentId.html\" title=\"struct bonsaidb_core::document::DocumentId\">DocumentId</a>","synthetic":false,"types":["bonsaidb_core::document::id::DocumentId"]},{"text":"impl&lt;'a, 'c, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'c <a class=\"struct\" href=\"bonsaidb_core/document/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::document::CollectionDocument\">CollectionDocument</a>&lt;C&gt;&gt; for <a class=\"enum\" href=\"bonsaidb_core/schema/enum.NamedReference.html\" title=\"enum bonsaidb_core::schema::NamedReference\">NamedReference</a>&lt;'a, C::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::schema::collection::NamedReference"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.f64.html\">f64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()