use std::{any::Any, collections::HashMap, fmt::Debug, sync::Arc};

use flume::{Receiver, Sender};

use crate::jobs::{
    manager::{ManagedJob, Manager},
    task::{Handle, Id},
    traits::Executable,
    Job, Keyed,
};

#[derive(Debug)]
pub struct Jobs<Key> {
    last_task_id: u64,
    result_senders: HashMap<Id, Vec<Box<dyn AnySender>>>,
    keyed_jobs: HashMap<Key, Id>,
    queuer: Sender<Box<dyn Executable>>,
    queue: Receiver<Box<dyn Executable>>,
}

impl<Key> Default for Jobs<Key> {
    fn default() -> Self {
        let (queuer, queue) = flume::unbounded();

        Self {
            last_task_id: 0,
            result_senders: HashMap::new(),
            keyed_jobs: HashMap::new(),
            queuer,
            queue,
        }
    }
}

impl<Key> Jobs<Key>
where
    Key: Clone + std::hash::Hash + Eq + Send + Sync + Debug + 'static,
{
    pub fn queue(&self) -> Receiver<Box<dyn Executable>> {
        self.queue.clone()
    }

    pub fn enqueue<J: Job + 'static>(
        &mut self,
        job: J,
        key: Option<Key>,
        manager: Manager<Key>,
    ) -> Handle<J::Output, J::Error, Key> {
        self.last_task_id = self.last_task_id.wrapping_add(1);
        let id = Id(self.last_task_id);
        self.queuer
            .send(Box::new(ManagedJob {
                id,
                job,
                key,
                manager: manager.clone(),
            }))
            .unwrap();

        self.create_new_task_handle(id, manager)
    }

    pub fn create_new_task_handle<T: Send + Sync + 'static, E: Send + Sync + 'static>(
        &mut self,
        id: Id,
        manager: Manager<Key>,
    ) -> Handle<T, E, Key> {
        let (sender, receiver) = flume::bounded(1);
        let senders = self.result_senders.entry(id).or_insert_with(Vec::default);
        senders.push(Box::new(sender));

        Handle {
            id,
            manager,
            receiver,
        }
    }

    pub fn lookup_or_enqueue<J: Keyed<Key>>(
        &mut self,
        job: J,
        manager: Manager<Key>,
    ) -> Handle<<J as Job>::Output, <J as Job>::Error, Key> {
        let key = job.key();
        if let Some(&id) = self.keyed_jobs.get(&key) {
            self.create_new_task_handle(id, manager)
        } else {
            let handle = self.enqueue(job, Some(key.clone()), manager);
            self.keyed_jobs.insert(key, handle.id);
            handle
        }
    }

    pub async fn job_completed<T: Clone + Send + Sync + 'static, E: Send + Sync + 'static>(
        &mut self,
        id: Id,
        key: Option<&Key>,
        result: Result<T, E>,
    ) {
        if let Some(key) = key {
            self.keyed_jobs.remove(key);
        }

        if let Some(senders) = self.result_senders.remove(&id) {
            tokio::spawn(async move {
                let result = result.map_err(Arc::new);
                futures::future::join_all(senders.into_iter().map(|handle| {
                    let result = result.clone();
                    async move {
                        let handle = handle
                            .as_any()
                            .downcast_ref::<Sender<Result<T, Arc<E>>>>()
                            .unwrap();
                        handle.send_async(result).await
                    }
                }))
                .await;
            });
        }
    }
}

pub trait AnySender: Any + Send + Sync + Debug {
    fn as_any(&self) -> &'_ dyn Any;
}

impl<T> AnySender for Sender<T>
where
    T: Send + Sync + 'static,
{
    fn as_any(&self) -> &'_ dyn Any {
        self
    }
}
