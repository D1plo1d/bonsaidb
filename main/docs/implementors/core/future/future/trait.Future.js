(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl&lt;'a, Cn, Cl, PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.AsyncList.html\" title=\"struct bonsaidb_core::connection::AsyncList\">AsyncList</a>&lt;'a, Cn, Cl, PrimaryKey&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: <a class=\"trait\" href=\"bonsaidb_core/connection/trait.AsyncConnection.html\" title=\"trait bonsaidb_core::connection::AsyncConnection\">AsyncConnection</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.Collection.html\" title=\"trait bonsaidb_core::schema::Collection\">Collection</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.KeyEncoding.html\" title=\"trait bonsaidb_core::key::KeyEncoding\">KeyEncoding</a>&lt;'k, Cl::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;PrimaryKey&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;PrimaryKey&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::connection::AsyncList"]},{"text":"impl&lt;'a, 'name, Conn, Col, EI, EU&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.AsyncEntry.html\" title=\"struct bonsaidb_core::schema::AsyncEntry\">AsyncEntry</a>&lt;'a, 'name, Conn, Col, EI, EU&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Col: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.NamedCollection.html\" title=\"trait bonsaidb_core::schema::NamedCollection\">NamedCollection</a> + <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Col as <a class=\"trait\" href=\"bonsaidb_core/schema/trait.Collection.html\" title=\"trait bonsaidb_core::schema::Collection\">Collection</a>&gt;::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Conn: <a class=\"trait\" href=\"bonsaidb_core/connection/trait.AsyncConnection.html\" title=\"trait bonsaidb_core::connection::AsyncConnection\">AsyncConnection</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;EI: EntryInsert&lt;Col&gt; + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;EU: EntryUpdate&lt;Col&gt; + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;'name: 'a,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::schema::collection::AsyncEntry"]},{"text":"impl&lt;'a, Cn, Cl, PrimaryKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.AsyncList.html\" title=\"struct bonsaidb_core::schema::AsyncList\">AsyncList</a>&lt;'a, Cn, Cl, PrimaryKey&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: <a class=\"trait\" href=\"bonsaidb_core/schema/trait.SerializedCollection.html\" title=\"trait bonsaidb_core::schema::SerializedCollection\">SerializedCollection</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: <a class=\"trait\" href=\"bonsaidb_core/connection/trait.AsyncConnection.html\" title=\"trait bonsaidb_core::connection::AsyncConnection\">AsyncConnection</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimaryKey: for&lt;'k&gt; <a class=\"trait\" href=\"bonsaidb_core/key/trait.KeyEncoding.html\" title=\"trait bonsaidb_core::key::KeyEncoding\">KeyEncoding</a>&lt;'k, Cl::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl::<a class=\"associatedtype\" href=\"bonsaidb_core/schema/trait.Collection.html#associatedtype.PrimaryKey\" title=\"type bonsaidb_core::schema::Collection::PrimaryKey\">PrimaryKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;PrimaryKey&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;PrimaryKey&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::schema::collection::AsyncList"]},{"text":"impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/get/struct.AsyncBuilder.html\" title=\"struct bonsaidb_core::keyvalue::get::AsyncBuilder\">AsyncBuilder</a>&lt;'a, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"bonsaidb_core/keyvalue/trait.AsyncKeyValue.html\" title=\"trait bonsaidb_core::keyvalue::AsyncKeyValue\">AsyncKeyValue</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::keyvalue::implementation::get::AsyncBuilder"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/increment/struct.AsyncBuilder.html\" title=\"struct bonsaidb_core::keyvalue::increment::AsyncBuilder\">AsyncBuilder</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"bonsaidb_core/keyvalue/trait.AsyncKeyValue.html\" title=\"trait bonsaidb_core::keyvalue::AsyncKeyValue\">AsyncKeyValue</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>, Error = <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.IncompatibleTypeError.html\" title=\"struct bonsaidb_core::keyvalue::IncompatibleTypeError\">IncompatibleTypeError</a>&gt;,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::keyvalue::implementation::increment::AsyncBuilder"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/set/struct.AsyncBuilder.html\" title=\"struct bonsaidb_core::keyvalue::set::AsyncBuilder\">AsyncBuilder</a>&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"bonsaidb_core/keyvalue/trait.AsyncKeyValue.html\" title=\"trait bonsaidb_core::keyvalue::AsyncKeyValue\">AsyncKeyValue</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.138/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["bonsaidb_core::keyvalue::implementation::set::AsyncBuilder"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()