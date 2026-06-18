//! The unified agent registry trait and spawn configuration.
//!
//! [`AgentRegistry`] is the single seam every execution backend (in-process,
//! daemon, team, council, economy) implements. `dispatch.rs` no longer knows
//! about backends — it builds a [`SpawnConfig`] and calls
//! [`AgentRegistry::spawn`]. The registry owns identity, state, and abort
//! handles; the UI reads [`AgentRegistry::list`] as its single source of truth.
//!
//! This trait deliberately lives in `jfc-agent` (which has no provider or
//! tokio dependency) so it can be shared by every crate without pulling the
//! engine in. Backend implementations live in `jfc-engine/src/agents/`.

use std::path::PathBuf;

use crate::id::AgentId;
use crate::state::{AgentResult, AgentRole, AgentState, AgentStatus};

/// Everything a backend needs to start an agent.
///
/// Consolidates `AgentConfig` (engine), `TeammateRunnerConfig` (swarm), and
/// `BackgroundAgentLaunch` (daemon). The [`AgentRole`] determines which of the
/// optional fields are meaningful — e.g. a `Teammate` uses `team_name` (carried
/// inside the role), a `Solver` uses `worktree`.
///
/// Provider/model wiring is intentionally represented as plain strings here so
/// `jfc-agent` stays dependency-light; the engine resolves them to concrete
/// `Arc<dyn Provider>` / `ModelId` when it implements the trait.
#[derive(Debug, Clone)]
pub struct SpawnConfig {
    pub role: AgentRole,
    pub prompt: String,
    pub description: String,
    /// Provider name (e.g. "anthropic"); resolved to a concrete provider by the
    /// backend.
    pub provider: Option<String>,
    /// Model id (e.g. "claude-opus-4"); `None` = backend default.
    pub model: Option<String>,
    /// Working directory for the agent's tools.
    pub cwd: PathBuf,
    /// Token budget cap; `None` = backend/charter default.
    pub max_tokens: Option<u64>,
    /// Whether the agent runs detached (separate process) vs in-process.
    pub detached: bool,
    /// Optional pre-assigned identity. `None` = registry mints a fresh one.
    /// Used by the economy to request stable solver/validator ids.
    pub id: Option<AgentId>,
}

impl SpawnConfig {
    /// Minimal solo-agent config: a prompt and a working directory.
    pub fn solo(prompt: impl Into<String>, cwd: impl Into<PathBuf>) -> Self {
        let prompt = prompt.into();
        Self {
            role: AgentRole::Solo,
            description: prompt.chars().take(80).collect(),
            prompt,
            provider: None,
            model: None,
            cwd: cwd.into(),
            max_tokens: None,
            detached: false,
            id: None,
        }
    }

    /// Builder: attach a role.
    pub fn with_role(mut self, role: AgentRole) -> Self {
        self.role = role;
        self
    }

    /// Builder: set the model.
    pub fn with_model(mut self, model: impl Into<String>) -> Self {
        self.model = Some(model.into());
        self
    }

    /// Builder: set the provider.
    pub fn with_provider(mut self, provider: impl Into<String>) -> Self {
        self.provider = Some(provider.into());
        self
    }

    /// Builder: request a specific pre-assigned identity.
    pub fn with_id(mut self, id: AgentId) -> Self {
        self.id = Some(id);
        self
    }

    /// Builder: mark this agent as detached (runs in a separate process).
    pub fn detached(mut self) -> Self {
        self.detached = true;
        self
    }
}

/// Errors a registry can return.
#[derive(Debug, thiserror::Error)]
pub enum RegistryError {
    #[error("unknown agent: {0}")]
    UnknownAgent(AgentId),
    #[error("agent name not found: {0}")]
    NameNotFound(String),
    #[error("backend rejected spawn: {0}")]
    SpawnRejected(String),
    #[error("backend error: {0}")]
    Backend(String),
}

/// The single seam every execution backend implements.
///
/// Every method is async: the registry's tracked state lives behind a
/// `tokio::sync::RwLock`, so accessors `.await` the lock rather than blocking
/// the executor thread (which `std::sync::RwLock` would risk inside async
/// callers). `spawn` and `wait` additionally launch / await running work.
#[async_trait::async_trait]
pub trait AgentRegistry: Send + Sync {
    /// Start an agent and return its identity immediately. The agent runs
    /// asynchronously; callers poll [`AgentRegistry::status`] or await
    /// [`AgentRegistry::wait`].
    async fn spawn(&self, config: SpawnConfig) -> Result<AgentId, RegistryError>;

    /// Current lifecycle status, or `None` if the id is unknown.
    async fn status(&self, id: &AgentId) -> Option<AgentStatus>;

    /// Full current state, or `None` if the id is unknown.
    async fn state(&self, id: &AgentId) -> Option<AgentState>;

    /// Request abort. Returns `true` if the agent existed and was signalled.
    async fn abort(&self, id: &AgentId) -> bool;

    /// Record terminal completion for an agent (called by the backend).
    async fn complete(&self, id: &AgentId, result: AgentResult);

    /// Snapshot of every tracked agent — the UI's single source of truth.
    async fn list(&self) -> Vec<AgentState>;

    /// Resolve a human-readable name (teammate name / display name) to an id.
    async fn resolve_name(&self, name: &str) -> Option<AgentId>;

    /// Await an agent's terminal result. Implementations should resolve as soon
    /// as the agent reaches a terminal status.
    async fn wait(&self, id: &AgentId) -> Result<AgentResult, RegistryError>;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn solo_config_defaults_normal() {
        let cfg = SpawnConfig::solo("do the thing", "/tmp");
        assert!(matches!(cfg.role, AgentRole::Solo));
        assert_eq!(cfg.prompt, "do the thing");
        assert!(!cfg.detached);
        assert!(cfg.id.is_none());
    }

    #[test]
    fn builder_chain_sets_fields_normal() {
        let cfg = SpawnConfig::solo("x", "/tmp")
            .with_model("claude-opus-4")
            .with_provider("anthropic")
            .detached();
        assert_eq!(cfg.model.as_deref(), Some("claude-opus-4"));
        assert_eq!(cfg.provider.as_deref(), Some("anthropic"));
        assert!(cfg.detached);
    }

    #[test]
    fn with_role_overrides_default_robust() {
        let cfg = SpawnConfig::solo("x", "/tmp").with_role(AgentRole::Teammate {
            team_name: "alpha".into(),
        });
        assert_eq!(cfg.role.team_name(), Some("alpha"));
    }

    #[test]
    fn description_is_truncated_prompt_robust() {
        let long = "a".repeat(200);
        let cfg = SpawnConfig::solo(long, "/tmp");
        assert_eq!(cfg.description.len(), 80);
    }
}
