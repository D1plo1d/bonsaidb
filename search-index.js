var searchIndex = JSON.parse('{\
"pliantdb":{"doc":"pliantdb (name not set in stone) is a programmable …","i":[[0,"connection","pliantdb","types for interacting with a database",null,null],[4,"Error","pliantdb::connection","an enumeration of errors that are <code>Connection</code>-related",null,null],[13,"Storage","","an error occurred interacting with the file-storage layer",0,null],[13,"CollectionNotFound","","an attempt to use a <code>Collection</code> with a <code>Database</code> that it …",0,null],[8,"Connection","","a trait that defines all interactions with a <code>Database</code>, …",null,null],[10,"collection","","access a collection for the connected <code>Database</code>",1,[[],[["result",4],["collection",3],["error",4]]]],[10,"insert","","insert a newly created document into the connected …",1,[[["document",3]],[["box",3],["pin",3]]]],[10,"update","","update an existing document in the connected <code>Database</code> for …",1,[[["document",3]],[["box",3],["pin",3]]]],[3,"Collection","","a struct used to interact with a collection over a …",null,null],[11,"push","","add a new <code>Document<Cl></code> with the contents <code>item</code>",2,[[]]],[11,"get","","retrieve a <code>Document<Cl></code> with <code>id</code> from the connection",2,[[["uuid",3]]]],[0,"schema","pliantdb","types for defining database schema",null,null],[0,"collection","pliantdb::schema","types for defining a <code>Collection</code>",null,null],[3,"Id","pliantdb::schema::collection","a unique collection id. Choose collection names that …",null,null],[12,"0","","",3,null],[8,"Collection","","a namespaced collection of <code>Document<Self></code> items and views",null,null],[10,"id","","the <code>Id</code> of this collection",4,[[],["id",3]]],[10,"define_views","","implementors define all of their <code>View</code>s in <code>schema</code>",4,[[["schema",3]]]],[0,"view","pliantdb::schema","types for defining map/reduce-powered <code>View</code>s",null,null],[4,"Error","pliantdb::schema::view","errors that arise when interacting with views",null,null],[13,"SerializationError","","an error occurred while serializing or deserializing",5,null],[13,"ReduceUnimplemented","","returned when",5,null],[6,"MapResult","","a type alias for the result of <code>View::map()</code>",null,null],[8,"View","","a map/reduce powered indexing and aggregation schema",null,null],[16,"MapKey","","the key for this view",6,null],[16,"MapValue","","an associated type that can be stored with each entry in …",6,null],[16,"Reduce","","when implementing reduce(), this is the returned type. If …",6,null],[10,"name","","TODO need versioning the name of the view. Must be unique …",6,[[],["cow",4]]],[10,"map","","the map function for this view. This function is …",6,[[["document",3]],["mapresult",6]]],[11,"reduce","","the reduce function for this view. If …",6,[[],[["result",4],["error",4]]]],[4,"SerializableValue","","an enum representing either an owned value or a borrowed …",null,null],[13,"Owned","","an owned value",7,null],[13,"Borrowed","","a borrowed value",7,null],[3,"Map","","a structure representing a document\'s entry in a View\'s …",null,null],[12,"source","","the id of the document that emitted this entry",8,null],[12,"key","","the key used to index the View",8,null],[12,"value","","an associated value stored in the view",8,null],[8,"Database","pliantdb::schema","a trait that defines a group of collections that are …",null,null],[10,"define_collections","","implementors must define their <code>Collection</code>s in <code>schema</code>",9,[[["schema",3]]]],[3,"Schema","","a collection of defined collections and views",null,null],[3,"Document","","a struct representing a document in the database",null,null],[12,"id","","the id of the Document. Unique across the collection <code>C</code>",10,null],[12,"revision","","the revision of the stored document.",10,null],[12,"contents","","the serialized bytes of the stored item",10,null],[3,"Revision","","a struct containing information about a <code>Document</code>\'s …",null,null],[12,"id","","The current revision id of the document. This value is …",11,null],[12,"sha256","","The SHA256 digest of the bytes contained within the …",11,null],[0,"storage","pliantdb","types for interacting with a local, file-based database",null,null],[3,"Storage","pliantdb::storage","a local, file-based database",null,null],[11,"open_local","","opens a local file as a pliantdb",12,[[["asref",8],["path",3]],[["error",4],["result",4]]]],[4,"Error","pliantdb","an enumeration of errors that this crate can produce",null,null],[13,"Connection","","an error that occurred while interacting with a <code>Connection</code>",13,null],[13,"Serialization","","an error from serializing or deserializing from a <code>Document</code>",13,null],[11,"from","pliantdb::connection","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"init","","",0,[[]]],[11,"deref","","",0,[[]]],[11,"deref_mut","","",0,[[]]],[11,"drop","","",0,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"init","","",2,[[]]],[11,"deref","","",2,[[]]],[11,"deref_mut","","",2,[[]]],[11,"drop","","",2,[[]]],[11,"from","pliantdb::schema::collection","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"init","","",3,[[]]],[11,"deref","","",3,[[]]],[11,"deref_mut","","",3,[[]]],[11,"drop","","",3,[[]]],[11,"from","pliantdb::schema","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"init","","",14,[[]]],[11,"deref","","",14,[[]]],[11,"deref_mut","","",14,[[]]],[11,"drop","","",14,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"init","","",10,[[]]],[11,"deref","","",10,[[]]],[11,"deref_mut","","",10,[[]]],[11,"drop","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"init","","",11,[[]]],[11,"deref","","",11,[[]]],[11,"deref_mut","","",11,[[]]],[11,"drop","","",11,[[]]],[11,"from","pliantdb::schema::view","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"init","","",5,[[]]],[11,"deref","","",5,[[]]],[11,"deref_mut","","",5,[[]]],[11,"drop","","",5,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"init","","",7,[[]]],[11,"deref","","",7,[[]]],[11,"deref_mut","","",7,[[]]],[11,"drop","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"init","","",8,[[]]],[11,"deref","","",8,[[]]],[11,"deref_mut","","",8,[[]]],[11,"drop","","",8,[[]]],[11,"from","pliantdb::storage","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"init","","",12,[[]]],[11,"deref","","",12,[[]]],[11,"deref_mut","","",12,[[]]],[11,"drop","","",12,[[]]],[11,"from","pliantdb","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"init","","",13,[[]]],[11,"deref","","",13,[[]]],[11,"deref_mut","","",13,[[]]],[11,"drop","","",13,[[]]],[11,"collection","pliantdb::storage","",12,[[],[["result",4],["collection",3],["error",4]]]],[11,"insert","","",12,[[["document",3]],[["box",3],["pin",3]]]],[11,"update","","",12,[[["document",3]],[["box",3],["pin",3]]]],[11,"as_ref","pliantdb::schema::view","",7,[[]]],[11,"from","pliantdb::connection","",0,[[["error",4]]]],[11,"from","pliantdb::schema::collection","",3,[[]]],[11,"from","","",3,[[["string",3]]]],[11,"from","pliantdb::schema::view","",5,[[["error",3]]]],[11,"from","","",7,[[],["serializablevalue",4]]],[11,"from","pliantdb","",13,[[["error",4]]]],[11,"from","","",13,[[["error",3]]]],[11,"from","","",13,[[["error",4]]]],[11,"clone","pliantdb::schema","",11,[[],["revision",3]]],[11,"clone","pliantdb::storage","",12,[[],["storage",3]]],[11,"default","pliantdb::schema","",14,[[],["schema",3]]],[11,"eq","","",11,[[["revision",3]]]],[11,"ne","","",11,[[["revision",3]]]],[11,"eq","pliantdb::schema::view","",8,[[["map",3]]]],[11,"ne","","",8,[[["map",3]]]],[11,"fmt","pliantdb::connection","",0,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema","",11,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::view","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb","",13,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::connection","",0,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::view","",5,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb","",13,[[["formatter",3]],["result",6]]],[11,"source","pliantdb::connection","",0,[[],[["option",4],["error",8]]]],[11,"source","pliantdb::schema::view","",5,[[],[["option",4],["error",8]]]],[11,"source","pliantdb","",13,[[],[["option",4],["error",8]]]],[11,"define_collection","pliantdb::schema","adds the collection <code>C</code> and its views",14,[[]]],[11,"define_view","","adds the view <code>V</code>",14,[[]]],[11,"contains","","returns true if this schema contains the collection <code>C</code>",14,[[]]],[11,"new","","create a new document with serialized bytes from <code>contents</code>",10,[[],[["error",3],["result",4]]]],[11,"contents","","retrieves <code>contents</code> through deserialization into the type <code>D</code>",10,[[],[["deserialize",8],["result",4],["error",3]]]],[11,"emit","","create a <code>Map</code> result with an empty key and value",10,[[],["map",3]]],[11,"emit_key","","create a <code>Map</code> result with a <code>key</code> and an empty value",10,[[["serialize",8]],[["map",3],["serialize",8]]]],[11,"emit_value","","create a <code>Map</code> result with <code>value</code> and an empty key",10,[[["serialize",8]],[["map",3],["serialize",8]]]],[11,"emit_key_and_value","","create a <code>Map</code> result with a <code>key</code> and <code>value</code>",10,[[["serialize",8]],[["serialize",8],["map",3]]]],[11,"new","","creates the first revision for a document with the SHA256 …",11,[[]]],[11,"next_revision","","creates the next revision in sequence with an updated …",11,[[],["option",4]]]],"p":[[4,"Error"],[8,"Connection"],[3,"Collection"],[3,"Id"],[8,"Collection"],[4,"Error"],[8,"View"],[4,"SerializableValue"],[3,"Map"],[8,"Database"],[3,"Document"],[3,"Revision"],[3,"Storage"],[4,"Error"],[3,"Schema"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);