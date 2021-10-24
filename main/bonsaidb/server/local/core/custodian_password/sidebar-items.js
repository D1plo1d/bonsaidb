initSidebarItems({"enum":[["Ake","Authenticated Key-Exchange for OPAQUE."],["Argon2Algorithm","Specific algorithm to use for [`Argon2Params`]."],["Error","`Error` type for this crate."],["Group","Prime-order group algorithm for OPAQUE."],["Hash","Hash algorithm for OPAQUE."],["Mhf","Memory-hardening function for OPAQUE."]],"mod":[["arrayvec","arrayvec provides the types [`ArrayVec`] and [`ArrayString`]:  array-backed vector and string types, which store their contents inline."],["error","See `Error`. Also re-exports [`InternalError`] and [`ProtocolError`]."],["serde","Serde"]],"struct":[["Argon2Params","Configuration for [`Mhf::Argon2`]."],["ClientConfig","Client configuration."],["ClientFile","Use this to enable server validation during login."],["ClientLogin","Holds the state of a login process. See `login`."],["ClientRegistration","Holds the state of a registration process. See `register`."],["Config","Common password configuration between server and client."],["ExportKey","Secret key derived from the users password on the client. The server has no access to it! Can be used to encrypt data and store it safely at the server."],["LoginFinalization","Send this back to the server to finish the login process. See `ClientLogin::finish()`."],["LoginRequest","Send this to the server to drive the login process. See `ServerLogin::login()`."],["LoginResponse","Send this back to the client to drive the login process. See `ClientLogin::finish()`."],["PublicKey","Public key, used to verify the server by the client. See `ClientRegistration::register()`."],["RegistrationFinalization","Send this back to the server to finish the registration process. See `ServerRegistration::finish()`."],["RegistrationRequest","Send this to the server to drive the registration process. See `ServerRegistration::register()`."],["RegistrationResponse","Send this back to the client to drive the registration process. See `ClientRegistration::finish()`."],["ServerConfig","Server configuration. This contains the secret key needed to create and use [`ServerFile`]s, if it is lost, all corresponding [`ServerFile`]s become unusable."],["ServerFile","Represents a registered client, this is needed for the client to login. See [`ServerLogin::login()`]."],["ServerLogin","Starts the login process on the server."],["ServerRegistration","Holds the state of a registration process. See `register`."]],"type":[["Result","`Result` for this crate."]]});