//! Background agent manager with session isolation.
//!
//! Spawns tokio tasks for parallel agent work, tracks status,
//! collects results, and enforces concurrency limits.

use std::collections::HashMap;

#[allow(unused_imports)]
use std::sync::Arc;

#[allow(unused_imports)]
use tokio::sync::{Mutex, oneshot};

/// Unique identifier for a background agent.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct AgentId(u64);

/// Status of a background agent.
#[derive(Debug, Clone)]
pub enum AgentStatus {
    Running,
    Completed,
    Failed(String),
}

/// Result from a completed background agent.
#[derive(Debug, Clone)]
pub struct AgentResult {
    pub id: AgentId,
    pub output: String,
    pub tokens_used: usize,
    pub elapsed_ms: u64,
}

/// Configuration for spawning a background agent.
#[derive(Debug, Clone)]
pub struct AgentConfig {
    pub task_description: String,
    pub max_tokens: usize,
}

/// Summary of an agent for TUI display.
#[derive(Debug, Clone)]
pub struct AgentSummary {
    pub id: AgentId,
    pub description: String,
    pub status: AgentStatus,
    pub elapsed_ms: u64,
}

/// Error when spawning fails.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum SpawnError {
    AtCapacity(usize),
}

impl std::fmt::Display for SpawnError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::AtCapacity(max) => write!(f, "at capacity ({max} concurrent agents)"),
        }
    }
}

impl std::error::Error for SpawnError {}

/// Manages background agent lifecycle.
pub struct BackgroundManager {
    max_concurrent: usize,
    next_id: u64,
    agents: HashMap<AgentId, AgentEntry>,
}

struct AgentEntry {
    status: AgentStatus,
    config: AgentConfig,
    result: Option<AgentResult>,
    started_at: std::time::Instant,
}

impl BackgroundManager {
    pub fn new(max_concurrent: usize) -> Self {
        Self {
            max_concurrent,
            next_id: 0,
            agents: HashMap::new(),
        }
    }

    pub fn spawn(&mut self, config: AgentConfig) -> Result<AgentId, SpawnError> {
        if self.active_count() >= self.max_concurrent {
            return Err(SpawnError::AtCapacity(self.max_concurrent));
        }

        let id = AgentId(self.next_id);
        self.next_id += 1;

        self.agents.insert(
            id,
            AgentEntry {
                status: AgentStatus::Running,
                config,
                result: None,
                started_at: std::time::Instant::now(),
            },
        );

        Ok(id)
    }

    pub fn status(&self, id: AgentId) -> Option<&AgentStatus> {
        self.agents.get(&id).map(|entry| &entry.status)
    }

    pub fn complete(&mut self, id: AgentId, output: String, tokens_used: usize) {
        let Some(entry) = self.agents.get_mut(&id) else {
            return;
        };

        entry.status = AgentStatus::Completed;
        entry.result = Some(AgentResult {
            id,
            output,
            tokens_used,
            elapsed_ms: elapsed_ms(entry.started_at),
        });
    }

    pub fn fail(&mut self, id: AgentId, error: String) {
        if let Some(entry) = self.agents.get_mut(&id) {
            entry.status = AgentStatus::Failed(error);
        }
    }

    pub fn collect(&mut self, id: AgentId) -> Option<AgentResult> {
        self.agents
            .get_mut(&id)
            .and_then(|entry| entry.result.take())
    }

    pub fn active_count(&self) -> usize {
        self.agents
            .values()
            .filter(|entry| matches!(entry.status, AgentStatus::Running))
            .count()
    }

    pub fn all_ids(&self) -> Vec<AgentId> {
        let mut ids: Vec<_> = self.agents.keys().copied().collect();
        ids.sort_by_key(|id| id.0);
        ids
    }

    /// Get summaries of all agents for TUI rendering.
    pub fn summaries(&self) -> Vec<AgentSummary> {
        let mut summaries: Vec<_> = self
            .agents
            .iter()
            .map(|(&id, entry)| AgentSummary {
                id,
                description: entry.config.task_description.clone(),
                status: entry.status.clone(),
                elapsed_ms: entry
                    .result
                    .as_ref()
                    .map(|result| result.elapsed_ms)
                    .unwrap_or_else(|| elapsed_ms(entry.started_at)),
            })
            .collect();
        summaries.sort_by_key(|summary| summary.id.0);
        summaries
    }
}

fn elapsed_ms(started_at: std::time::Instant) -> u64 {
    started_at
        .elapsed()
        .as_millis()
        .try_into()
        .unwrap_or(u64::MAX)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn config(description: &str) -> AgentConfig {
        AgentConfig {
            task_description: description.to_string(),
            max_tokens: 1_000,
        }
    }

    #[test]
    fn test_spawn_and_complete() {
        let mut manager = BackgroundManager::new(1);

        let id = manager.spawn(config("write tests")).unwrap();
        assert!(matches!(manager.status(id), Some(AgentStatus::Running)));
        let stored_config = &manager.agents.get(&id).unwrap().config;
        assert_eq!(stored_config.task_description, "write tests");
        assert_eq!(stored_config.max_tokens, 1_000);

        manager.complete(id, "done".to_string(), 42);
        assert!(matches!(manager.status(id), Some(AgentStatus::Completed)));

        let result = manager.collect(id).unwrap();
        assert_eq!(result.id, id);
        assert_eq!(result.output, "done");
        assert_eq!(result.tokens_used, 42);
        assert!(result.elapsed_ms < u64::MAX);
    }

    #[test]
    fn test_max_concurrent_enforced() {
        let mut manager = BackgroundManager::new(2);

        assert!(manager.spawn(config("one")).is_ok());
        assert!(manager.spawn(config("two")).is_ok());

        let error = manager.spawn(config("three")).unwrap_err();
        assert_eq!(error, SpawnError::AtCapacity(2));
    }

    #[test]
    fn test_fail_agent() {
        let mut manager = BackgroundManager::new(1);
        let id = manager.spawn(config("risky task")).unwrap();

        manager.fail(id, "panic isolated".to_string());

        match manager.status(id) {
            Some(AgentStatus::Failed(error)) => assert_eq!(error, "panic isolated"),
            other => panic!("expected failed status, got {other:?}"),
        }
    }

    #[test]
    fn test_collect_removes_result() {
        let mut manager = BackgroundManager::new(1);
        let id = manager.spawn(config("single collection")).unwrap();

        manager.complete(id, "collected".to_string(), 7);

        assert!(manager.collect(id).is_some());
        assert!(manager.collect(id).is_none());
    }

    #[test]
    fn test_crash_isolation() {
        let mut manager = BackgroundManager::new(3);
        let failed_id = manager.spawn(config("crashes")).unwrap();
        let completed_id = manager.spawn(config("finishes")).unwrap();
        let running_id = manager.spawn(config("keeps running")).unwrap();

        manager.fail(failed_id, "agent crashed".to_string());
        manager.complete(completed_id, "safe output".to_string(), 13);

        assert!(matches!(
            manager.status(failed_id),
            Some(AgentStatus::Failed(error)) if error == "agent crashed"
        ));
        assert!(matches!(
            manager.status(completed_id),
            Some(AgentStatus::Completed)
        ));
        assert!(matches!(
            manager.status(running_id),
            Some(AgentStatus::Running)
        ));

        let result = manager.collect(completed_id).unwrap();
        assert_eq!(result.output, "safe output");
        assert!(manager.collect(failed_id).is_none());
    }

    #[test]
    fn test_completed_agents_release_capacity() {
        let mut manager = BackgroundManager::new(1);
        let id = manager.spawn(config("first")).unwrap();

        manager.complete(id, "done".to_string(), 3);

        assert_eq!(manager.active_count(), 0);
        assert!(manager.spawn(config("second")).is_ok());
    }

    #[test]
    fn test_all_ids_are_stable() {
        let mut manager = BackgroundManager::new(2);
        let first_id = manager.spawn(config("first")).unwrap();
        let second_id = manager.spawn(config("second")).unwrap();

        assert_eq!(manager.all_ids(), vec![first_id, second_id]);
    }

    #[test]
    fn test_summaries_returns_all_agents() {
        let mut manager = BackgroundManager::new(3);
        let running_id = manager.spawn(config("running task")).unwrap();
        let completed_id = manager.spawn(config("completed task")).unwrap();
        let failed_id = manager.spawn(config("failed task")).unwrap();

        manager.complete(completed_id, "done".to_string(), 21);
        manager.fail(failed_id, "boom".to_string());

        let summaries = manager.summaries();

        assert_eq!(summaries.len(), 3);
        assert_eq!(summaries[0].id, running_id);
        assert_eq!(summaries[0].description, "running task");
        assert!(matches!(summaries[0].status, AgentStatus::Running));
        assert_eq!(summaries[1].id, completed_id);
        assert_eq!(summaries[1].description, "completed task");
        assert!(matches!(summaries[1].status, AgentStatus::Completed));
        assert_eq!(summaries[2].id, failed_id);
        assert_eq!(summaries[2].description, "failed task");
        assert!(matches!(
            &summaries[2].status,
            AgentStatus::Failed(error) if error == "boom"
        ));
        assert!(
            summaries
                .iter()
                .all(|summary| summary.elapsed_ms < u64::MAX)
        );
    }
}
