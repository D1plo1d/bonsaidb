initSidebarItems({"enum":[["CollectionSerializer","Serialization format for storing a collection."],["NamedReference","A reference to a collection that has a unique name view."]],"mod":[["view","Types for defining map/reduce-powered `View`s."]],"struct":[["Authority","The owner of a schema item. This should represent the company, group, or individual that created the item in question. This value is used for namespacing. Changing this after values are in use is not supported without manual migrations at this time."],["CollectionDocument","A document with serializable contents."],["CollectionName","The name of a `Collection`."],["Entry","A future that resolves to an entry in a [`NamedCollection`]."],["InsertError","An error from inserting a [`CollectionDocument`]."],["InvalidNameError","An invalid name was used in a schema definition."],["Name","A valid schema name. Must be alphanumeric (`a-zA-Z9-0`) or a hyphen (`-`). Cloning this structure shares the underlying string data, regardless of whether it’s a static string literal or an owned String."],["SchemaName","The name of a `Schema`."],["Schematic","A collection of defined collections and views."],["ViewName","The name of a `View`."]],"trait":[["Collection","A namespaced collection of `Document<Self>` items and views."],["NamedCollection","A collection with a unique name column."],["Schema","Defines a group of collections that are stored into a single database."]]});