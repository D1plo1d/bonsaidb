var sourcesIndex = JSON.parse('{\
"bonsaidb":["",[],["any_connection.rs","cli.rs","lib.rs"]],\
"bonsaidb_client":["",[["client",[["remote_database",[],["keyvalue.rs","pubsub.rs"]]],["quic_worker.rs","remote_database.rs","sync.rs","tungstenite_worker.rs"]]],["builder.rs","client.rs","error.rs","lib.rs"]],\
"bonsaidb_core":["",[["admin",[],["authentication_token.rs","database.rs","group.rs","mod.rs","role.rs","user.rs"]],["connection",[],["has_session.rs","lowlevel.rs"]],["document",[],["collection.rs","header.rs","id.rs","revision.rs"]],["key",[],["deprecated.rs","time.rs"]],["keyvalue",[["implementation",[],["get.rs","increment.rs","namespaced.rs","set.rs"]]],["timestamp.rs"]],["permissions",[],["bonsai.rs","mod.rs"]],["schema",[["view",[],["map.rs"]]],["collection.rs","mod.rs","names.rs","schematic.rs","view.rs"]]],["api.rs","connection.rs","document.rs","key.rs","keyvalue.rs","lib.rs","limits.rs","networking.rs","pubsub.rs","test_util.rs","transaction.rs"]],\
"bonsaidb_files":["",[["schema",[],["block.rs","file.rs"]]],["direct.rs","lib.rs","schema.rs"]],\
"bonsaidb_keystorage_s3":["",[],["lib.rs"]],\
"bonsaidb_local":["",[["cli",[],["admin.rs"]],["config",[],["argon.rs"]],["database",[],["compat.rs","keyvalue.rs","pubsub.rs"]],["storage",[],["argon.rs","backup.rs","pubsub.rs","token_authentication.rs"]],["tasks",[["manager",[],["jobs.rs","managed_job.rs"]]],["compactor.rs","handle.rs","manager.rs","task.rs","traits.rs"]],["views",[],["integrity_scanner.rs","mapper.rs"]]],["async.rs","cli.rs","config.rs","database.rs","error.rs","lib.rs","open_trees.rs","storage.rs","tasks.rs","vault.rs","views.rs"]],\
"bonsaidb_macros":["",[],["lib.rs"]],\
"bonsaidb_server":["",[["cli",[],["certificate.rs","mod.rs","serve.rs"]],["server",[],["acme.rs","connected_client.rs","database.rs","shutdown.rs","tcp.rs","websockets.rs"]]],["api.rs","backend.rs","config.rs","dispatch.rs","error.rs","hosted.rs","lib.rs","server.rs","test_util.rs"]],\
"bonsaidb_utils":["",[],["lib.rs","lock_macros.rs"]],\
"xtask":["",[],["main.rs"]]\
}');
createSourceSidebar();
