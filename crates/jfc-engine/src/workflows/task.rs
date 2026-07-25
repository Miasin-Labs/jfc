//! Workflow task lifecycle + state tracking.
//!
//! `WorkflowTaskState` is the canonical in-memory record for a running or
//! completed workflow.  It is stored on `BackgroundTask.workflow_progress` and
//! updated by `EngineEvent::WorkflowProgress` handlers in the event loop.
//!
//! Progress is wired through `EngineEvent::WorkflowProgress`; active workflow
//! cancellation tokens live in the small registry below so TaskStop and the
//! slash-command surface can stop a run by id.
use std::collections::HashMap;
use std::path::PathBuf;
use std::sync::{Mutex, OnceLock};
use tokio_util::sync::CancellationToken;

use super::meta::WorkflowMeta;

/// Status of a workflow run.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WorkflowRunStatus {
    Running,
    Paused,
    Completed,
    Partial,
    Failed,
    Killed,
}

impl WorkflowRunStatus {
    pub fn is_terminal(self) -> bool {
        matches!(
            self,
            WorkflowRunStatus::Completed
                | WorkflowRunStatus::Partial
                | WorkflowRunStatus::Failed
                | WorkflowRunStatus::Killed
        )
    }
}

impl std::fmt::Display for WorkflowRunStatus {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Running => f.write_str("running"),
            Self::Paused => f.write_str("paused"),
            Self::Completed => f.write_str("completed"),
            Self::Partial => f.write_str("partial"),
            Self::Failed => f.write_str("failed"),
            Self::Killed => f.write_str("killed"),
        }
    }
}

/// Per-agent progress row inside a workflow run.
#[derive(Debug, Clone)]
pub struct AgentProgress {
    /// 1-based monotonic index (matches `AgentRequest::index`).
    pub index: u32,
    /// Short display label (prompt prefix or explicit `label` opt).
    pub label: String,
    /// Phase this agent was launched in, if `phase()` was called before it.
    pub phase: Option<String>,
    pub status: AgentStatus,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AgentStatus {
    Queued,
    Running,
    Done,
    Failed,
    Skipped,
}

impl std::fmt::Display for AgentStatus {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Queued => f.write_str("queued"),
            Self::Running => f.write_str("running"),
            Self::Done => f.write_str("done"),
            Self::Failed => f.write_str("failed"),
            Self::Skipped => f.write_str("skipped"),
        }
    }
}

/// Live progress snapshot for a workflow background task.
///
/// Stored on `BackgroundTask::workflow_progress` and updated incrementally
/// via `EngineEvent::WorkflowProgress` events emitted by the runner.
#[derive(Debug, Clone)]
pub struct WorkflowTaskProgress {
    pub run_id: String,
    pub script_path: Option<PathBuf>,
    pub meta: WorkflowMeta,
    pub status: WorkflowRunStatus,
    /// Current phase title (last `phase()` call from the script).
    pub current_phase: Option<String>,
    /// All agent rows seen so far, in dispatch order.
    pub agents: Vec<AgentProgress>,
    /// Log messages emitted by `log()` and internal phase/progress signals.
    pub logs: Vec<String>,
    /// Total unique agents dispatched (excludes cache hits).
    pub total_dispatched: u32,
    /// Cache hits (agents replayed from the resume journal).
    pub cache_hits: u32,
    pub started_at: std::time::Instant,
    pub ended_at: Option<std::time::Instant>,
    /// Accumulated output tokens across all sub-agents.
    pub total_tokens: u64,
}

impl WorkflowTaskProgress {
    pub fn new(run_id: String, meta: WorkflowMeta) -> Self {
        Self {
            run_id,
            script_path: None,
            meta,
            status: WorkflowRunStatus::Running,
            current_phase: None,
            agents: Vec::new(),
            logs: Vec::new(),
            total_dispatched: 0,
            cache_hits: 0,
            started_at: std::time::Instant::now(),
            ended_at: None,
            total_tokens: 0,
        }
    }

    pub fn is_terminal(&self) -> bool {
        self.status.is_terminal()
    }

    /// How many agents are currently `Running`.
    pub fn running_count(&self) -> usize {
        self.agents
            .iter()
            .filter(|a| a.status == AgentStatus::Running)
            .count()
    }

    /// How many agents have finished (Done or Failed).
    pub fn finished_count(&self) -> usize {
        self.agents
            .iter()
            .filter(|a| matches!(a.status, AgentStatus::Done | AgentStatus::Failed))
            .count()
    }
}

/// Full state record for a running workflow (kept alive for the Cancel path).
pub struct WorkflowTaskState {
    pub progress: WorkflowTaskProgress,
    pub cancel: CancellationToken,
}

impl WorkflowTaskState {
    pub fn new(run_id: String, meta: WorkflowMeta, cancel: CancellationToken) -> Self {
        Self {
            progress: WorkflowTaskProgress::new(run_id, meta),
            cancel,
        }
    }

    pub fn is_terminal(&self) -> bool {
        self.progress.is_terminal()
    }
}

fn active_workflows() -> &'static Mutex<HashMap<String, CancellationToken>> {
    static ACTIVE: OnceLock<Mutex<HashMap<String, CancellationToken>>> = OnceLock::new();
    ACTIVE.get_or_init(|| Mutex::new(HashMap::new()))
}

pub fn register_active_workflow(task_id: &str, cancel: CancellationToken) {
    let mut active = active_workflows()
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner());
    active.insert(task_id.to_owned(), cancel);
}

pub fn unregister_active_workflow(task_id: &str) {
    let mut active = active_workflows()
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner());
    active.remove(task_id);
}

pub fn cancel_active_workflow(task_or_run_id: &str) -> bool {
    let task_id = if task_or_run_id.starts_with("wf_") {
        format!("bgwf_{task_or_run_id}")
    } else {
        task_or_run_id.to_owned()
    };
    let cancel = active_workflows()
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner())
        .get(&task_id)
        .cloned();
    if let Some(cancel) = cancel {
        cancel.cancel();
        true
    } else {
        false
    }
}

/// Generate a workflow run ID: `wf_` + 8 random hex chars.
pub fn generate_run_id() -> String {
    let id = uuid::Uuid::new_v4();
    format!("wf_{}", &id.simple().to_string()[..8])
}

#[cfg(test)]
mod active_workflow_tests {
    use super::*;

    #[test]
    fn workflow_cancel_registry_accepts_task_and_run_ids_normal() {
        let token = CancellationToken::new();
        register_active_workflow("bgwf_wf_canceltest", token.clone());
        assert!(cancel_active_workflow("wf_canceltest"));
        assert!(token.is_cancelled());
        unregister_active_workflow("bgwf_wf_canceltest");
        assert!(!cancel_active_workflow("bgwf_wf_canceltest"));
    }
}
