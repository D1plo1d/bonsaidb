use std::io::{Read, Seek, Write};
use std::mem::size_of;

use bonsaidb_core::key::time::TimestampAsNanoseconds;
use bonsaidb_core::test_util::TestDirectory;
use bonsaidb_local::config::{Builder, StorageConfiguration};
#[cfg(feature = "async")]
use bonsaidb_local::AsyncDatabase;
use bonsaidb_local::Database;
#[cfg(feature = "async")]
use futures::StreamExt;
#[cfg(feature = "async")]
use tokio::io::{AsyncReadExt, AsyncWriteExt};

use crate::{BonsaiFiles, Error, FileConfig, FilesSchema, Truncate};

#[test]
fn simple_file_test() {
    let directory = TestDirectory::new("simple-file");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let data = "hello, world!";
    let mut file = BonsaiFiles::build("/hello/world.txt")
        .contents(data.as_bytes())
        .create(&database)
        .unwrap();
    assert_eq!(file.len().unwrap(), u64::try_from(data.len()).unwrap());

    println!("Created file: {file:?}, length: {}", file.len().unwrap());

    let contents = file.contents().unwrap();
    assert_eq!(contents.len(), u64::try_from(data.len()).unwrap());

    let bytes = contents.into_string().unwrap();
    assert_eq!(bytes, data);

    let file = BonsaiFiles::load("/hello/world.txt", &database)
        .unwrap()
        .unwrap();
    assert_eq!(file.name(), "world.txt");
    assert_eq!(file.containing_path(), "/hello/");
    assert_eq!(file.contents().unwrap().to_string().unwrap(), data);

    file.delete().unwrap();
    assert!(BonsaiFiles::load("/hello/world.txt", &database)
        .unwrap()
        .is_none());
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_simple_file_test() {
    let directory = TestDirectory::new("simple-file-async");
    let database = AsyncDatabase::open::<FilesSchema>(StorageConfiguration::new(&directory))
        .await
        .unwrap();

    let data = "hello, world!";
    let mut file = BonsaiFiles::build("/hello/world.txt")
        .contents(data.as_bytes())
        .create_async(&database)
        .await
        .unwrap();
    assert_eq!(
        file.len().await.unwrap(),
        u64::try_from(data.len()).unwrap()
    );

    println!(
        "Created file: {file:?}, length: {}",
        file.len().await.unwrap()
    );

    let contents = file.contents().await.unwrap();
    assert_eq!(contents.len(), u64::try_from(data.len()).unwrap());

    let bytes = contents.into_string().await.unwrap();
    assert_eq!(bytes, data);

    let file = BonsaiFiles::load_async("/hello/world.txt", &database)
        .await
        .unwrap()
        .unwrap();
    assert_eq!(file.name(), "world.txt");
    assert_eq!(file.containing_path(), "/hello/");
    assert_eq!(
        file.contents().await.unwrap().to_string().await.unwrap(),
        data
    );

    file.delete().await.unwrap();
    assert!(BonsaiFiles::load_async("/hello/world.txt", &database)
        .await
        .unwrap()
        .is_none());
}

#[test]
fn load_or_create_test() {
    let directory = TestDirectory::new("load-or-create");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let file = BonsaiFiles::load_or_create("/hello/world.txt", true, &database).unwrap();
    let reloaded = BonsaiFiles::load_or_create("/hello/world.txt", true, &database).unwrap();
    assert_eq!(file, reloaded);
    let reloaded_unoptimal =
        BonsaiFiles::load_or_create("/hello/world.txt", false, &database).unwrap();
    assert_eq!(file, reloaded_unoptimal);

    file.delete().unwrap();
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_load_or_create_test() {
    let directory = TestDirectory::new("load-or-create-async");
    let database = AsyncDatabase::open::<FilesSchema>(StorageConfiguration::new(&directory))
        .await
        .unwrap();

    let file = BonsaiFiles::load_or_create_async("/hello/world.txt", true, &database)
        .await
        .unwrap();
    let reloaded = BonsaiFiles::load_or_create_async("/hello/world.txt", true, &database)
        .await
        .unwrap();
    assert_eq!(file, reloaded);
    let reloaded_unoptimal =
        BonsaiFiles::load_or_create_async("/hello/world.txt", false, &database)
            .await
            .unwrap();
    assert_eq!(file, reloaded_unoptimal);

    file.delete().await.unwrap();
}

#[test]
fn invalid_name_test() {
    let directory = TestDirectory::new("invalid-name");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let err = BonsaiFiles::build("hello/.txt")
        .contents(b"hello, world!")
        .create(&database)
        .unwrap_err();
    assert!(matches!(err, Error::InvalidName));
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_invalid_name_test() {
    let directory = TestDirectory::new("invalid-name-async");
    let database = AsyncDatabase::open::<FilesSchema>(StorageConfiguration::new(&directory))
        .await
        .unwrap();

    let err = BonsaiFiles::build("hello/.txt")
        .contents(b"hello, world!")
        .create_async(&database)
        .await
        .unwrap_err();
    assert!(matches!(err, Error::InvalidName));
}

#[test]
fn simple_path_test() {
    let directory = TestDirectory::new("simple-path");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let data = b"hello";
    let file = BonsaiFiles::build("hello.txt")
        .at_path("/some/containing/path")
        .contents(data)
        .create(&database)
        .unwrap();
    let contents = file.contents().unwrap();
    println!("Created file: {file:?}, length: {}", contents.len());
    let bytes = contents.into_vec().unwrap();
    assert_eq!(bytes, data);

    let file = BonsaiFiles::load("/some/containing/path/hello.txt", &database)
        .unwrap()
        .unwrap();
    assert_eq!(file.name(), "hello.txt");
    assert_eq!(file.containing_path(), "/some/containing/path/");

    let data2 = b"world!";
    let file2 = BonsaiFiles::build("world.txt")
        .at_path("/some/")
        .contents(data2)
        .create(&database)
        .unwrap();
    let contents = file2.contents().unwrap();
    let bytes = contents.into_vec().unwrap();
    assert_eq!(bytes, data2);

    let some_contents = BonsaiFiles::list("/", &database).unwrap();
    assert_eq!(some_contents.len(), 0);
    // First query intentionally has no trailing slash. The rest have trailing slashes.
    let path_contents = BonsaiFiles::list("/some/containing/path", &database).unwrap();
    assert_eq!(path_contents.len(), 1);
    assert_eq!(path_contents[0].name(), "hello.txt");
    let path_contents = BonsaiFiles::list("/some/", &database).unwrap();
    assert_eq!(path_contents.len(), 1);
    let path_contents = BonsaiFiles::list("/some/containing/", &database).unwrap();
    assert_eq!(path_contents.len(), 0);

    let all_contents = BonsaiFiles::list_recursive("/", &database).unwrap();
    assert_eq!(all_contents.len(), 2);
    let all_contents = BonsaiFiles::list_recursive("/some", &database).unwrap();
    assert_eq!(all_contents.len(), 2);
    let all_contents = BonsaiFiles::list_recursive("/some/containing/", &database).unwrap();
    assert_eq!(all_contents.len(), 1);
    let all_contents = BonsaiFiles::list_recursive("/some/containing/path/", &database).unwrap();
    assert_eq!(all_contents.len(), 1);

    let stats = BonsaiFiles::stats(&database).unwrap();
    assert_eq!(
        stats.total_bytes,
        u64::try_from(data.len() + data2.len()).unwrap()
    );
    assert_eq!(stats.file_count, 2);
    assert_eq!(
        BonsaiFiles::stats_for_path("/some", &database)
            .unwrap()
            .total_bytes,
        u64::try_from(data.len() + data2.len()).unwrap()
    );
    assert_eq!(
        BonsaiFiles::stats_for_path("/some/containing", &database)
            .unwrap()
            .total_bytes,
        u64::try_from(data.len()).unwrap()
    );
    assert_eq!(
        BonsaiFiles::stats_for_path("/nonexistant", &database)
            .unwrap()
            .total_bytes,
        0
    );

    // Test renaming and moving
    let mut file = file;
    file.rename(String::from("new-name.txt")).unwrap();
    assert!(
        BonsaiFiles::load("/some/containing/path/hello.txt", &database)
            .unwrap()
            .is_none()
    );
    let mut file = BonsaiFiles::load("/some/containing/path/new-name.txt", &database)
        .unwrap()
        .unwrap();
    file.move_to("/new/path/").unwrap();
    assert!(BonsaiFiles::load("/new/path/new-name.txt", &database)
        .unwrap()
        .is_some());
    file.move_to("/final/path/and_name.txt").unwrap();
    let file = BonsaiFiles::load("/final/path/and_name.txt", &database)
        .unwrap()
        .unwrap();
    let contents = file.contents().unwrap().into_vec().unwrap();
    assert_eq!(contents, data);

    assert_eq!(
        BonsaiFiles::stats_for_path("/some", &database)
            .unwrap()
            .total_bytes,
        u64::try_from(data2.len()).unwrap()
    );
}

#[cfg(feature = "async")]
#[tokio::test]
#[allow(clippy::too_many_lines)]
async fn async_simple_path_test() {
    let directory = TestDirectory::new("simple-path-async");
    let database = AsyncDatabase::open::<FilesSchema>(StorageConfiguration::new(&directory))
        .await
        .unwrap();

    let data = b"hello";
    let file = BonsaiFiles::build("hello.txt")
        .at_path("/some/containing/path")
        .contents(data)
        .create_async(&database)
        .await
        .unwrap();
    let contents = file.contents().await.unwrap();
    println!("Created file: {file:?}, length: {}", contents.len());
    let bytes = contents.into_vec().await.unwrap();
    assert_eq!(bytes, data);

    let file = BonsaiFiles::load_async("/some/containing/path/hello.txt", &database)
        .await
        .unwrap()
        .unwrap();
    assert_eq!(file.name(), "hello.txt");
    assert_eq!(file.containing_path(), "/some/containing/path/");

    let data2 = b"world!";
    let file2 = BonsaiFiles::build("world.txt")
        .at_path("/some/")
        .contents(data2)
        .create_async(&database)
        .await
        .unwrap();
    let contents = file2.contents().await.unwrap();
    let bytes = contents.into_vec().await.unwrap();
    assert_eq!(bytes, data2);

    let some_contents = BonsaiFiles::list_async("/", &database).await.unwrap();
    assert_eq!(some_contents.len(), 0);
    // First query intentionally has no trailing slash. The rest have trailing slashes.
    let path_contents = BonsaiFiles::list_async("/some/containing/path", &database)
        .await
        .unwrap();
    assert_eq!(path_contents.len(), 1);
    assert_eq!(path_contents[0].name(), "hello.txt");
    let path_contents = BonsaiFiles::list_async("/some/", &database).await.unwrap();
    assert_eq!(path_contents.len(), 1);
    let path_contents = BonsaiFiles::list_async("/some/containing/", &database)
        .await
        .unwrap();
    assert_eq!(path_contents.len(), 0);

    let all_contents = BonsaiFiles::list_recursive_async("/", &database)
        .await
        .unwrap();
    assert_eq!(all_contents.len(), 2);
    let all_contents = BonsaiFiles::list_recursive_async("/some", &database)
        .await
        .unwrap();
    assert_eq!(all_contents.len(), 2);
    let all_contents = BonsaiFiles::list_recursive_async("/some/containing/", &database)
        .await
        .unwrap();
    assert_eq!(all_contents.len(), 1);
    let all_contents = BonsaiFiles::list_recursive_async("/some/containing/path/", &database)
        .await
        .unwrap();
    assert_eq!(all_contents.len(), 1);

    let stats = BonsaiFiles::stats_async(&database).await.unwrap();
    assert_eq!(
        stats.total_bytes,
        u64::try_from(data.len() + data2.len()).unwrap()
    );
    assert_eq!(stats.file_count, 2);
    assert_eq!(
        BonsaiFiles::stats_for_path_async("/some", &database)
            .await
            .unwrap()
            .total_bytes,
        u64::try_from(data.len() + data2.len()).unwrap()
    );
    assert_eq!(
        BonsaiFiles::stats_for_path_async("/some/containing", &database)
            .await
            .unwrap()
            .total_bytes,
        u64::try_from(data.len()).unwrap()
    );
    assert_eq!(
        BonsaiFiles::stats_for_path_async("/nonexistant", &database)
            .await
            .unwrap()
            .total_bytes,
        0
    );

    // Test renaming and moving
    let mut file = file;
    file.rename(String::from("new-name.txt")).await.unwrap();
    assert!(
        BonsaiFiles::load_async("/some/containing/path/hello.txt", &database)
            .await
            .unwrap()
            .is_none()
    );
    let mut file = BonsaiFiles::load_async("/some/containing/path/new-name.txt", &database)
        .await
        .unwrap()
        .unwrap();
    file.move_to("/new/path/").await.unwrap();
    assert!(BonsaiFiles::load_async("/new/path/new-name.txt", &database)
        .await
        .unwrap()
        .is_some());
    file.move_to("/final/path/and_name.txt").await.unwrap();
    let file = BonsaiFiles::load_async("/final/path/and_name.txt", &database)
        .await
        .unwrap()
        .unwrap();
    let contents = file.contents().await.unwrap().into_vec().await.unwrap();
    assert_eq!(contents, data);

    assert_eq!(
        BonsaiFiles::stats_for_path_async("/some", &database)
            .await
            .unwrap()
            .total_bytes,
        u64::try_from(data2.len()).unwrap()
    );
}

enum SmallBlocks {}
impl FileConfig for SmallBlocks {
    type Metadata = usize;

    const BLOCK_SIZE: usize = 8;

    fn files_name() -> bonsaidb_core::schema::CollectionName {
        BonsaiFiles::files_name()
    }

    fn blocks_name() -> bonsaidb_core::schema::CollectionName {
        BonsaiFiles::blocks_name()
    }
}

#[test]
fn blocked_file_test() {
    let mut big_file = Vec::with_capacity(SmallBlocks::BLOCK_SIZE * 31 / 2);
    let mut counter = 0_u8;
    while big_file.len() + 4 < big_file.capacity() {
        counter += 1;
        for _ in 0..4 {
            big_file.push(counter);
        }
    }
    let directory = TestDirectory::new("blocked-file");
    let database =
        Database::open::<FilesSchema<SmallBlocks>>(StorageConfiguration::new(&directory)).unwrap();

    let test_start = TimestampAsNanoseconds::now();
    let mut file = SmallBlocks::build("hello.txt")
        .contents(&big_file)
        .create(&database)
        .unwrap();
    let contents = file.contents().unwrap();
    println!("Created file: {file:?}, length: {}", contents.len());
    assert!(file.last_appended_at().unwrap().unwrap() > test_start);
    assert!(contents.last_appended_at().unwrap() > test_start);
    let bytes = contents.into_vec().unwrap();
    assert_eq!(bytes, big_file);

    // Truncate the beginning of the file
    let new_length = u64::try_from(SmallBlocks::BLOCK_SIZE * 3).unwrap();
    big_file.splice(..big_file.len() - SmallBlocks::BLOCK_SIZE * 3, []);
    file.truncate(new_length, Truncate::RemovingStart).unwrap();
    assert_eq!(file.len().unwrap(), new_length);

    let contents = file.contents().unwrap();
    assert_eq!(contents.len(), new_length);
    assert_eq!(contents.into_vec().unwrap(), big_file);

    // Truncate the end of the file.
    let new_length = u64::try_from(SmallBlocks::BLOCK_SIZE).unwrap();
    big_file.truncate(SmallBlocks::BLOCK_SIZE);
    file.truncate(new_length, Truncate::RemovingEnd).unwrap();

    let contents = file.contents().unwrap();
    assert_eq!(contents.len(), new_length);
    assert_eq!(contents.to_vec().unwrap(), big_file);

    // Clear the file.
    file.truncate(0, Truncate::RemovingEnd).unwrap();
    assert_eq!(file.len().unwrap(), 0);
    assert!(file.last_appended_at().unwrap().is_none());
    assert!(file.contents().unwrap().last_appended_at().is_none());

    let mut writer = file.append_buffered();
    let buffer_size = SmallBlocks::BLOCK_SIZE * 3 / 2;
    writer.set_buffer_size(buffer_size).unwrap();
    // Write more than the single buffer size.
    let data_written = &bytes[0..SmallBlocks::BLOCK_SIZE * 2];
    writer.write_all(data_written).unwrap();
    assert_eq!(writer.buffer.len(), SmallBlocks::BLOCK_SIZE / 2);
    drop(writer);

    let contents = file.contents().unwrap();
    assert_eq!(contents.to_vec().unwrap(), data_written);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_blocked_file_test() {
    let mut big_file = Vec::with_capacity(SmallBlocks::BLOCK_SIZE * 31 / 2);
    let mut counter = 0_u8;
    while big_file.len() + 4 < big_file.capacity() {
        counter += 1;
        for _ in 0..4 {
            big_file.push(counter);
        }
    }
    let directory = TestDirectory::new("blocked-file-async");
    let database =
        AsyncDatabase::open::<FilesSchema<SmallBlocks>>(StorageConfiguration::new(&directory))
            .await
            .unwrap();

    let test_start = TimestampAsNanoseconds::now();
    let mut file = SmallBlocks::build("hello.txt")
        .contents(&big_file)
        .create_async(&database)
        .await
        .unwrap();
    let contents = file.contents().await.unwrap();
    println!("Created file: {file:?}, length: {}", contents.len());
    assert!(file.last_appended_at().await.unwrap().unwrap() > test_start);
    let initial_write_timestamp = contents.last_appended_at().unwrap();
    assert!(initial_write_timestamp > test_start);
    let bytes = contents.into_vec().await.unwrap();
    assert_eq!(bytes, big_file);
    // Truncate the beginning of the file
    let new_length = u64::try_from(SmallBlocks::BLOCK_SIZE * 3).unwrap();
    big_file.splice(..big_file.len() - SmallBlocks::BLOCK_SIZE * 3, []);
    file.truncate(new_length, Truncate::RemovingStart)
        .await
        .unwrap();
    assert_eq!(file.len().await.unwrap(), new_length);

    let contents = file.contents().await.unwrap();
    assert_eq!(contents.len(), new_length);
    assert_eq!(contents.into_vec().await.unwrap(), big_file);

    // Truncate the end of the file.
    let new_length = u64::try_from(SmallBlocks::BLOCK_SIZE).unwrap();
    big_file.truncate(SmallBlocks::BLOCK_SIZE);
    file.truncate(new_length, Truncate::RemovingEnd)
        .await
        .unwrap();

    let contents = file.contents().await.unwrap();
    assert_eq!(contents.len(), new_length);
    assert_eq!(contents.to_vec().await.unwrap(), big_file);

    // Clear the file.
    file.truncate(0, Truncate::RemovingEnd).await.unwrap();
    assert_eq!(file.len().await.unwrap(), 0);
    assert!(file.last_appended_at().await.unwrap().is_none());
    assert!(file.contents().await.unwrap().last_appended_at().is_none());

    let mut writer = file.append_buffered();
    let buffer_size = SmallBlocks::BLOCK_SIZE * 3 / 2;
    writer.set_buffer_size(buffer_size).await.unwrap();
    // Write more than the single buffer size.
    let data_written = &bytes[0..SmallBlocks::BLOCK_SIZE * 2];
    writer.write_all(data_written).await.unwrap();
    assert_eq!(writer.buffer.len(), SmallBlocks::BLOCK_SIZE / 2);
    drop(writer);

    // Dropping an unflushed writer will flush it in the background.
    tokio::time::sleep(std::time::Duration::from_millis(250)).await;

    let contents = file.contents().await.unwrap();
    assert!(contents.last_appended_at().unwrap() > initial_write_timestamp);
    assert_eq!(contents.to_vec().await.unwrap(), data_written);
}

#[test]
fn seek_read_test() {
    let mut file_contents = Vec::with_capacity(BonsaiFiles::BLOCK_SIZE * 3);
    let word_size = size_of::<usize>();
    while file_contents.len() + word_size < file_contents.capacity() {
        file_contents.extend(file_contents.len().to_be_bytes());
    }
    let directory = TestDirectory::new("seek-read");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let file = BonsaiFiles::build("hello.bin")
        .contents(&file_contents)
        .create(&database)
        .unwrap();
    let mut contents = file
        .contents()
        .unwrap()
        .with_buffer_size(BonsaiFiles::BLOCK_SIZE);
    // Read the last 16 bytes
    contents.seek(std::io::SeekFrom::End(-16)).unwrap();
    let mut buffer = [0; 16];
    contents.read_exact(&mut buffer).unwrap();
    assert_eq!(&file_contents[file_contents.len() - 16..], &buffer);

    // Seek slightly ahead of the start, and read 16 bytes.
    contents.seek(std::io::SeekFrom::Start(16)).unwrap();
    contents.read_exact(&mut buffer).unwrap();
    assert_eq!(&file_contents[16..32], &buffer);

    // Move foward into the next block.
    contents
        .seek(std::io::SeekFrom::Current(
            i64::try_from(BonsaiFiles::BLOCK_SIZE).unwrap(),
        ))
        .unwrap();
    contents.read_exact(&mut buffer).unwrap();
    assert_eq!(
        &file_contents[BonsaiFiles::BLOCK_SIZE + 32..BonsaiFiles::BLOCK_SIZE + 48],
        &buffer
    );
    // Re-read the last 16 bytes
    contents.seek(std::io::SeekFrom::Current(-16)).unwrap();
    assert_eq!(
        &file_contents[BonsaiFiles::BLOCK_SIZE + 32..BonsaiFiles::BLOCK_SIZE + 48],
        &buffer
    );
    // Try seeking to the end of the universe. It should return the file's length.
    assert_eq!(
        contents.seek(std::io::SeekFrom::End(i64::MAX)).unwrap(),
        contents.len()
    );
    // Verify read returns 0 bytes.
    assert_eq!(contents.read(&mut buffer).unwrap(), 0);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_seek_read_test() {
    let mut file_contents = Vec::with_capacity(BonsaiFiles::BLOCK_SIZE * 3);
    let word_size = size_of::<usize>();
    while file_contents.len() + word_size < file_contents.capacity() {
        file_contents.extend(file_contents.len().to_be_bytes());
    }
    let directory = TestDirectory::new("seek-read-async");
    let database = AsyncDatabase::open::<FilesSchema>(StorageConfiguration::new(&directory))
        .await
        .unwrap();

    let file = BonsaiFiles::build("hello.bin")
        .contents(&file_contents)
        .create_async(&database)
        .await
        .unwrap();
    let mut contents = file
        .contents()
        .await
        .unwrap()
        .with_buffer_size(BonsaiFiles::BLOCK_SIZE);
    // Read the last 16 bytes
    contents.seek(std::io::SeekFrom::End(-16)).unwrap();
    let mut buffer = [0; 16];
    contents.read_exact(&mut buffer).await.unwrap();
    assert_eq!(&file_contents[file_contents.len() - 16..], &buffer);

    // Seek slightly ahead of the start, and read 16 bytes.
    contents.seek(std::io::SeekFrom::Start(16)).unwrap();
    contents.read_exact(&mut buffer).await.unwrap();
    assert_eq!(&file_contents[16..32], &buffer);

    // Move foward into the next block.
    contents
        .seek(std::io::SeekFrom::Current(
            i64::try_from(BonsaiFiles::BLOCK_SIZE).unwrap(),
        ))
        .unwrap();
    contents.read_exact(&mut buffer).await.unwrap();
    assert_eq!(
        &file_contents[BonsaiFiles::BLOCK_SIZE + 32..BonsaiFiles::BLOCK_SIZE + 48],
        &buffer
    );
    // Re-read the last 16 bytes
    contents.seek(std::io::SeekFrom::Current(-16)).unwrap();
    assert_eq!(
        &file_contents[BonsaiFiles::BLOCK_SIZE + 32..BonsaiFiles::BLOCK_SIZE + 48],
        &buffer
    );
    // Try seeking to the end of the universe. It should return the file's length.
    assert_eq!(
        contents.seek(std::io::SeekFrom::End(i64::MAX)).unwrap(),
        contents.len()
    );
    // Verify read returns 0 bytes.
    assert_eq!(contents.read(&mut buffer).await.unwrap(), 0);
}

#[test]
fn block_iterator_test() {
    let mut file_contents = Vec::with_capacity(BonsaiFiles::BLOCK_SIZE * 3);
    let word_size = size_of::<usize>();
    while file_contents.len() + word_size < file_contents.capacity() {
        file_contents.extend(file_contents.len().to_be_bytes());
    }
    let directory = TestDirectory::new("block-iterator");
    let database = Database::open::<FilesSchema>(StorageConfiguration::new(&directory)).unwrap();

    let file = BonsaiFiles::build("hello.bin")
        .contents(&file_contents)
        .create(&database)
        .unwrap();
    let mut compare_against = &file_contents[..];
    let mut contents = file
        .contents()
        .unwrap()
        .with_buffer_size(BonsaiFiles::BLOCK_SIZE);
    // read a few bytes to test partial iteration.
    let mut buffer = [0; 4];
    contents.read_exact(&mut buffer).unwrap();
    compare_against = &compare_against[4..];
    assert_eq!(buffer, &compare_against[..4]);

    for block in contents {
        let bytes = block.unwrap();
        assert_eq!(bytes, compare_against[..bytes.len()]);
        compare_against = &compare_against[bytes.len()..];
    }
    assert!(compare_against.is_empty());
}

#[tokio::test]
#[cfg(feature = "async")]
async fn block_stream_test() {
    let mut file_contents = Vec::with_capacity(BonsaiFiles::BLOCK_SIZE * 3);
    let word_size = size_of::<usize>();
    while file_contents.len() + word_size < file_contents.capacity() {
        file_contents.extend(file_contents.len().to_be_bytes());
    }
    let directory = TestDirectory::new("block-stream");
    let database =
        AsyncDatabase::open::<FilesSchema<BonsaiFiles>>(StorageConfiguration::new(&directory))
            .await
            .unwrap();

    let file = BonsaiFiles::build("hello.bin")
        .contents(&file_contents)
        .create_async(&database)
        .await
        .unwrap();
    let mut compare_against = &file_contents[..];
    let mut contents = file
        .contents()
        .await
        .unwrap()
        .with_buffer_size(BonsaiFiles::BLOCK_SIZE);
    // read a few bytes to test partial iteration.
    let mut buffer = [0; 4];
    contents.read_exact(&mut buffer).await.unwrap();
    compare_against = &compare_against[4..];
    assert_eq!(buffer, &compare_against[..4]);

    while let Some(block) = contents.next().await {
        let bytes = block.unwrap();
        assert_eq!(bytes, compare_against[..bytes.len()]);
        compare_against = &compare_against[bytes.len()..];
    }
    assert!(compare_against.is_empty());
}

#[test]
fn simple_metadata_test() {
    let directory = TestDirectory::new("simple-metadata");
    let database =
        Database::open::<FilesSchema<SmallBlocks>>(StorageConfiguration::new(&directory)).unwrap();

    let file = SmallBlocks::build("/hello/world.txt")
        .contents(b"hello, world!")
        .metadata(42)
        .create(&database)
        .unwrap();
    assert_eq!(file.metadata(), &42);
    let mut file = SmallBlocks::get(file.id(), &database).unwrap().unwrap();
    assert_eq!(file.metadata(), &42);
    *file.metadata_mut() = 52;
    file.update_metadata().unwrap();

    let file = SmallBlocks::get(file.id(), &database).unwrap().unwrap();
    assert_eq!(file.metadata(), &52);
}

#[cfg(feature = "async")]
#[tokio::test]
async fn async_metadata_test() {
    let directory = TestDirectory::new("simple-metadata-async");
    let database =
        AsyncDatabase::open::<FilesSchema<SmallBlocks>>(StorageConfiguration::new(&directory))
            .await
            .unwrap();

    let file = SmallBlocks::build("/hello/world.txt")
        .contents(b"hello, world!")
        .metadata(42)
        .create_async(&database)
        .await
        .unwrap();
    assert_eq!(file.metadata(), &42);
    let mut file = SmallBlocks::get_async(file.id(), &database)
        .await
        .unwrap()
        .unwrap();
    assert_eq!(file.metadata(), &42);
    *file.metadata_mut() = 52;
    file.update_metadata().await.unwrap();

    let file = SmallBlocks::get_async(file.id(), &database)
        .await
        .unwrap()
        .unwrap();
    assert_eq!(file.metadata(), &52);
}
