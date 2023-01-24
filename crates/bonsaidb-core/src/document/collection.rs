use std::fmt::Debug;

use arc_bytes::serde::{Bytes, CowBytes};

use crate::connection::{AsyncConnection, Connection};
use crate::document::{BorrowedDocument, CollectionHeader, DocumentId, Header, OwnedDocument};
use crate::schema::SerializedCollection;
use crate::Error;

/// A document with serializable contents.
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct CollectionDocument<C>
where
    C: SerializedCollection,
{
    /// The header of the document, which contains the id and `Revision`.
    pub header: CollectionHeader<C::PrimaryKey>,

    /// The document's contents.
    pub contents: C::Contents,
}

impl<'a, C> TryFrom<&'a BorrowedDocument<'a>> for CollectionDocument<C>
where
    C: SerializedCollection,
{
    type Error = Error;

    fn try_from(value: &'a BorrowedDocument<'a>) -> Result<Self, Self::Error> {
        Ok(Self {
            contents: C::deserialize(&value.contents)?,
            header: CollectionHeader::try_from(value.header.clone())?,
        })
    }
}

impl<'a, C> TryFrom<&'a OwnedDocument> for CollectionDocument<C>
where
    C: SerializedCollection,
{
    type Error = Error;

    fn try_from(value: &'a OwnedDocument) -> Result<Self, Self::Error> {
        Ok(Self {
            contents: C::deserialize(&value.contents)?,
            header: CollectionHeader::try_from(value.header.clone())?,
        })
    }
}

impl<'a, 'b, C> TryFrom<&'b CollectionDocument<C>> for BorrowedDocument<'a>
where
    C: SerializedCollection,
{
    type Error = crate::Error;

    fn try_from(value: &'b CollectionDocument<C>) -> Result<Self, Self::Error> {
        Ok(Self {
            contents: CowBytes::from(C::serialize(&value.contents)?),
            header: Header::try_from(value.header.clone())?,
        })
    }
}

impl<C> CollectionDocument<C>
where
    C: SerializedCollection,
{
    /// Stores the new value of `contents` in the document.
    ///
    /// ```rust
    /// # bonsaidb_core::__doctest_prelude!();
    /// # use bonsaidb_core::connection::Connection;
    /// # fn test_fn<C: Connection>(db: C) -> Result<(), Error> {
    /// if let Some(mut document) = MyCollection::get(&42, &db)? {
    ///     // modify the document
    ///     document.update(&db)?;
    ///     println!("Updated revision: {:?}", document.header.revision);
    /// }
    /// # Ok(())
    /// # }
    /// ```
    pub fn update<Cn: Connection>(&mut self, connection: &Cn) -> Result<(), Error> {
        let mut doc = self.to_document()?;

        connection.update::<C, _>(&mut doc)?;

        self.header = CollectionHeader::try_from(doc.header)?;

        Ok(())
    }

    /// Stores the new value of `contents` in the document.
    ///
    /// ```rust
    /// # bonsaidb_core::__doctest_prelude!();
    /// # use bonsaidb_core::connection::AsyncConnection;
    /// # fn test_fn<C: AsyncConnection>(db: C) -> Result<(), Error> {
    /// # tokio::runtime::Runtime::new().unwrap().block_on(async {
    /// if let Some(mut document) = MyCollection::get_async(&42, &db).await? {
    ///     // modify the document
    ///     document.update_async(&db).await?;
    ///     println!("Updated revision: {:?}", document.header.revision);
    /// }
    /// # Ok(())
    /// # })
    /// # }
    /// ```
    pub async fn update_async<Cn: AsyncConnection>(
        &mut self,
        connection: &Cn,
    ) -> Result<(), Error> {
        let mut doc = self.to_document()?;

        connection.update::<C, _>(&mut doc).await?;

        self.header = CollectionHeader::try_from(doc.header)?;

        Ok(())
    }

    /// Modifies `self`, automatically retrying the modification if the document
    /// has been updated on the server.
    ///
    /// ## Data loss warning
    ///
    /// If you've modified `self` before calling this function and a conflict
    /// occurs, all changes to self will be lost when the current document is
    /// fetched before retrying the process again. When you use this function,
    /// you should limit the edits to the value to within the `modifier`
    /// callback.
    pub fn modify<Cn: Connection, Modifier: FnMut(&mut Self) + Send + Sync>(
        &mut self,
        connection: &Cn,
        mut modifier: Modifier,
    ) -> Result<(), Error>
    where
        C::Contents: Clone,
    {
        let mut is_first_loop = true;
        // TODO this should have a retry-limit.
        loop {
            // On the first attempt, we want to try sending the update to the
            // database without fetching new contents. If we receive a conflict,
            // on future iterations we will first re-load the data.
            if is_first_loop {
                is_first_loop = false;
            } else {
                *self =
                    C::get(&self.header.id, connection)?.ok_or_else(|| {
                        match DocumentId::new(&self.header.id) {
                            Ok(id) => Error::DocumentNotFound(C::collection_name(), Box::new(id)),
                            Err(err) => err,
                        }
                    })?;
            }
            modifier(&mut *self);
            match self.update(connection) {
                Err(Error::DocumentConflict(..)) => {}
                other => return other,
            }
        }
    }

    /// Modifies `self`, automatically retrying the modification if the document
    /// has been updated on the server.
    ///
    /// ## Data loss warning
    ///
    /// If you've modified `self` before calling this function and a conflict
    /// occurs, all changes to self will be lost when the current document is
    /// fetched before retrying the process again. When you use this function,
    /// you should limit the edits to the value to within the `modifier`
    /// callback.
    pub async fn modify_async<Cn: AsyncConnection, Modifier: FnMut(&mut Self) + Send + Sync>(
        &mut self,
        connection: &Cn,
        mut modifier: Modifier,
    ) -> Result<(), Error>
    where
        C::Contents: Clone,
    {
        let mut is_first_loop = true;
        // TODO this should have a retry-limit.
        loop {
            // On the first attempt, we want to try sending the update to the
            // database without fetching new contents. If we receive a conflict,
            // on future iterations we will first re-load the data.
            if is_first_loop {
                is_first_loop = false;
            } else {
                *self = C::get_async(&self.header.id, connection)
                    .await?
                    .ok_or_else(|| match DocumentId::new(&self.header.id) {
                        Ok(id) => Error::DocumentNotFound(C::collection_name(), Box::new(id)),
                        Err(err) => err,
                    })?;
            }
            modifier(&mut *self);
            match self.update_async(connection).await {
                Err(Error::DocumentConflict(..)) => {}
                other => return other,
            }
        }
    }

    /// Removes the document from the collection.
    ///
    /// ```rust
    /// # bonsaidb_core::__doctest_prelude!();
    /// # use bonsaidb_core::connection::Connection;
    /// # fn test_fn<C: Connection>(db: C) -> Result<(), Error> {
    /// # tokio::runtime::Runtime::new().unwrap().block_on(async {
    /// if let Some(document) = MyCollection::get(&42, &db)? {
    ///     document.delete(&db)?;
    /// }
    /// # Ok(())
    /// # })
    /// # }
    /// ```
    pub fn delete<Cn: Connection>(&self, connection: &Cn) -> Result<(), Error> {
        connection.collection::<C>().delete(self)?;

        Ok(())
    }

    /// Removes the document from the collection.
    ///
    /// ```rust
    /// # bonsaidb_core::__doctest_prelude!();
    /// # use bonsaidb_core::connection::AsyncConnection;
    /// # fn test_fn<C: AsyncConnection>(db: C) -> Result<(), Error> {
    /// # tokio::runtime::Runtime::new().unwrap().block_on(async {
    /// if let Some(document) = MyCollection::get_async(&42, &db).await? {
    ///     document.delete_async(&db).await?;
    /// }
    /// # Ok(())
    /// # })
    /// # }
    /// ```
    pub async fn delete_async<Cn: AsyncConnection>(&self, connection: &Cn) -> Result<(), Error> {
        connection.collection::<C>().delete(self).await?;

        Ok(())
    }

    /// Converts this value to a serialized `Document`.
    pub fn to_document(&self) -> Result<OwnedDocument, Error> {
        Ok(OwnedDocument {
            contents: Bytes::from(C::serialize(&self.contents)?),
            header: Header::try_from(self.header.clone())?,
        })
    }
}

/// Helper functions for a slice of [`OwnedDocument`]s.
pub trait OwnedDocuments {
    /// Returns a list of deserialized documents.
    fn collection_documents<C: SerializedCollection>(
        &self,
    ) -> Result<Vec<CollectionDocument<C>>, Error>;
}

impl OwnedDocuments for [OwnedDocument] {
    fn collection_documents<C: SerializedCollection>(
        &self,
    ) -> Result<Vec<CollectionDocument<C>>, Error> {
        self.iter().map(CollectionDocument::try_from).collect()
    }
}
