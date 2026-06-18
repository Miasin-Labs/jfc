//! Unified agent state, status, and role.
//!
//! Consolidates four structs that each tracked "a running agent" with 70–90%
//! field overlap (`BackgroundTask`, `BackgroundAgentInfo`,
//! `InProcessTeammateState`, `TeammateInfo`) and four near-identical status
//! enums into a single [`AgentState`] keyed by [`AgentStatus`] + [`AgentRole`].
//!
//! Role-specific data (team name, solver worktree, trust score) lives in the
//! [`AgentRole`] enum variant rather than as scattered `Option` fields, so the
//! type system enforces which data is meaningful for which kind of agent.

use std::path::PathBuf;
use std::time::SystemTime;

use serde::{Deserialize, Serialize};

use crate::id::AgentId;

/// Lifecycle status shared by every agent, regardless of backend.
///
/// Merges `AgentStatus` (engine), `BackgroundAgentStatus` (daemon),
/// `TeammateStatus` (swarm), and `TaskLifecycle` (engine types). `Idle` is the
/// teammate-specific "waiting for a message" state; every other variant is
/// common to all backends.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum AgentStatus {
    /// Spawned but not yet started work.
    #[default]
    Pending,
    /// Actively streaming / executing tools.
    Running,
    /// Alive but waiting for input (teammates between turns).
    Idle,
    /// Finished successfully.
    Completed,
    /// Finished with an error.
    Failed,
    /// Aborted by the user or a takeover.
    Cancelled,
}

impl AgentStatus {
    /// Whether this is a terminal state (no further transitions expected).
    pub fn is_terminal(self) -> bool {
        matches!(
            self,
            AgentStatus::Completed | AgentStatus::Failed | AgentStatus::Cancelled
        )
    }

    /// Whether the agent is still alive (consuming resources).
    pub fn is_active(self) -> bool {
        matches!(
            self,
            AgentStatus::Pending | AgentStatus::Running | AgentStatus::Idle
        )
    }
}

/// What *kind* of agent this is, plus the data that only that kind needs.
///
/// This is the key consolidation: instead of separate structs per backend, the
/// role enum carries the backend-specific payload. A `Solo` agent has no extra
/// data; a `Teammate` carries its team name; a `Solver` carries its bounty and
/// worktree; and so on.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(tag = "kind", rename_all = "snake_case")]
pub enum AgentRole {
    /// A one-shot subagent (the `Task` tool), in-process or detached.
    Solo,
    /// A long-lived named teammate in a team/swarm.
    Teammate { team_name: String },
    /// An economy solver competing on a bounty in an isolated worktree.
    Solver {
        bounty_id: String,
        worktree: Option<PathBuf>,
    },
    /// An economy validator adversarially checking a solver's solution.
    Validator { bounty_id: String },
    /// A council seat: one model in a parallel multi-model deliberation.
    Council { council_id: String },
}

impl AgentRole {
    /// Short label for UI grouping (e.g. the roster panel headers).
    pub fn label(&self) -> &'static str {
        match self {
            AgentRole::Solo => "solo",
            AgentRole::Teammate { .. } => "teammate",
            AgentRole::Solver { .. } => "solver",
            AgentRole::Validator { .. } => "validator",
            AgentRole::Council { .. } => "council",
        }
    }

    /// The team this agent belongs to, if any.
    pub fn team_name(&self) -> Option<&str> {
        match self {
            AgentRole::Teammate { team_name } => Some(team_name.as_str()),
            _ => None,
        }
    }

    /// The bounty this agent is working on, if any.
    pub fn bounty_id(&self) -> Option<&str> {
        match self {
            AgentRole::Solver { bounty_id, .. } | AgentRole::Validator { bounty_id } => {
                Some(bounty_id.as_str())
            }
            _ => None,
        }
    }
}

/// The single record describing one agent's full state.
///
/// UI-only data that used to live on `BackgroundTask` (rendered message parts,
/// chat history) is intentionally *not* here — the render layer keeps that
/// keyed by `AgentId`. This struct is the canonical, serializable truth about
/// an agent's identity, lifecycle, and progress.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentState {
    pub id: AgentId,
    pub status: AgentStatus,
    pub role: AgentRole,
    pub description: String,

    // ── Progress (shared by all backends) ───────────────────────────────
    #[serde(default)]
    pub token_count: u64,
    #[serde(default)]
    pub tool_use_count: u32,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub last_tool: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model: Option<String>,

    // ── Lifecycle ───────────────────────────────────────────────────────
    pub started_at: SystemTime,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub completed_at: Option<SystemTime>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub error: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub summary: Option<String>,

    // ── Optional role-flavored fields ───────────────────────────────────
    /// Trust score for economy agents (solvers/validators). `None` otherwise.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub trust_score: Option<i8>,
    /// Why a teammate is idle (e.g. "waiting for leader"). `None` otherwise.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub idle_reason: Option<String>,
}

impl AgentState {
    /// Create a freshly-spawned agent in [`AgentStatus::Pending`].
    pub fn new(id: AgentId, role: AgentRole, description: impl Into<String>) -> Self {
        Self {
            id,
            status: AgentStatus::Pending,
            role,
            description: description.into(),
            token_count: 0,
            tool_use_count: 0,
            last_tool: None,
            model: None,
            started_at: SystemTime::now(),
            completed_at: None,
            error: None,
            summary: None,
            trust_score: None,
            idle_reason: None,
        }
    }

    /// Mark the agent terminally completed with an optional summary.
    pub fn complete(&mut self, summary: Option<String>) {
        self.status = AgentStatus::Completed;
        self.completed_at = Some(SystemTime::now());
        self.summary = summary;
    }

    /// Mark the agent terminally failed with an error message.
    pub fn fail(&mut self, error: impl Into<String>) {
        self.status = AgentStatus::Failed;
        self.completed_at = Some(SystemTime::now());
        self.error = Some(error.into());
    }

    /// Mark the agent cancelled (user abort / takeover).
    pub fn cancel(&mut self) {
        self.status = AgentStatus::Cancelled;
        self.completed_at = Some(SystemTime::now());
    }
}

/// The result an agent reports when it finishes.
///
/// Replaces the engine's `AgentResult` and the economy's per-solver token
/// reporting with one shape consumed by `AgentRegistry::complete`.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentResult {
    pub id: AgentId,
    pub output: String,
    #[serde(default)]
    pub tokens_used: u64,
    #[serde(default)]
    pub elapsed_ms: u64,
    /// Unified diff produced by a solver, if any (drives bounty settlement).
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub patch: Option<String>,
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::id::AgentId;

    #[test]
    fn status_terminal_classification_normal() {
        assert!(AgentStatus::Completed.is_terminal());
        assert!(AgentStatus::Failed.is_terminal());
        assert!(AgentStatus::Cancelled.is_terminal());
        assert!(!AgentStatus::Running.is_terminal());
        assert!(!AgentStatus::Idle.is_terminal());
        assert!(!AgentStatus::Pending.is_terminal());
    }

    #[test]
    fn status_active_classification_normal() {
        assert!(AgentStatus::Pending.is_active());
        assert!(AgentStatus::Running.is_active());
        assert!(AgentStatus::Idle.is_active());
        assert!(!AgentStatus::Completed.is_active());
    }

    #[test]
    fn role_accessors_normal() {
        let team = AgentRole::Teammate {
            team_name: "alpha".into(),
        };
        assert_eq!(team.team_name(), Some("alpha"));
        assert_eq!(team.bounty_id(), None);
        assert_eq!(team.label(), "teammate");

        let solver = AgentRole::Solver {
            bounty_id: "b1".into(),
            worktree: None,
        };
        assert_eq!(solver.bounty_id(), Some("b1"));
        assert_eq!(solver.team_name(), None);
    }

    #[test]
    fn state_lifecycle_transitions_normal() {
        let mut s = AgentState::new(AgentId::named("x"), AgentRole::Solo, "do work");
        assert_eq!(s.status, AgentStatus::Pending);
        s.status = AgentStatus::Running;
        s.complete(Some("done".into()));
        assert_eq!(s.status, AgentStatus::Completed);
        assert!(s.completed_at.is_some());
        assert_eq!(s.summary.as_deref(), Some("done"));
    }

    #[test]
    fn state_fail_records_error_robust() {
        let mut s = AgentState::new(AgentId::named("x"), AgentRole::Solo, "do work");
        s.fail("boom");
        assert_eq!(s.status, AgentStatus::Failed);
        assert_eq!(s.error.as_deref(), Some("boom"));
        assert!(s.completed_at.is_some());
    }

    #[test]
    fn state_serde_roundtrip_with_role_payload_robust() {
        let mut s = AgentState::new(
            AgentId::stable("solver", 2),
            AgentRole::Solver {
                bounty_id: "b9".into(),
                worktree: Some(PathBuf::from("/tmp/wt")),
            },
            "solve it",
        );
        s.trust_score = Some(7);
        let json = serde_json::to_string(&s).unwrap();
        let back: AgentState = serde_json::from_str(&json).unwrap();
        assert_eq!(back.id, s.id);
        assert_eq!(back.role.bounty_id(), Some("b9"));
        assert_eq!(back.trust_score, Some(7));
    }
}
