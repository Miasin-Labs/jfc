//! Unified agent identity.
//!
//! Replaces three pre-existing identifiers that all meant "an agent":
//! - `AgentId(u64)` in the engine's in-memory background manager,
//! - `AgentId(String)` in `jfc-economy` (prefixed, e.g. `solver-0`),
//! - a bare `agent_id: String` field on the swarm's teammate identity.
//!
//! A single [`AgentId`] newtype over a UUID is used everywhere. It carries an
//! optional human-readable `display_name` so the UI can show "researcher"
//! instead of a raw UUID while the stable identity stays collision-free.

use std::fmt;

use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// Stable, process-and-disk portable identity for an agent.
///
/// The `uuid` field is the canonical key (used for equality, hashing, and map
/// lookups). `display_name` is presentation-only and never participates in
/// identity — two `AgentId`s with the same UUID but different names are the
/// same agent.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentId {
    uuid: Uuid,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    display_name: Option<String>,
}

impl AgentId {
    /// Mint a fresh random identity (UUID v4).
    pub fn new() -> Self {
        Self {
            uuid: Uuid::new_v4(),
            display_name: None,
        }
    }

    /// Mint a fresh identity with a human-readable name attached.
    pub fn named(name: impl Into<String>) -> Self {
        Self {
            uuid: Uuid::new_v4(),
            display_name: Some(name.into()),
        }
    }

    /// Reconstruct from an existing UUID (e.g. when loading persisted state).
    pub fn from_uuid(uuid: Uuid) -> Self {
        Self {
            uuid,
            display_name: None,
        }
    }

    /// Derive a *stable* identity from a role prefix and an index.
    ///
    /// This replaces `jfc-economy`'s `AgentId::new_stable("solver", i)`: the
    /// same `(prefix, index)` pair always yields the same UUID (UUID v5 over a
    /// fixed namespace), so solver/validator identities are reproducible across
    /// a bounty cycle without a shared counter. The prefix is also kept as the
    /// display name.
    pub fn stable(prefix: &str, index: u64) -> Self {
        let seed = format!("{prefix}-{index}");
        Self {
            uuid: Uuid::new_v5(&Uuid::NAMESPACE_OID, seed.as_bytes()),
            display_name: Some(seed),
        }
    }

    /// Derive a *deterministic* identity from a single string label.
    ///
    /// Two `from_label` calls with the same string yield the same identity
    /// (UUID v5 over the label), and the label is retained as the display name.
    /// This is the bridge for systems that previously used the string itself as
    /// the identity key (e.g. the economy's `AgentId(String)`): a fixed label
    /// like `"solver_a"` keeps stable equality and hashing after the type swap.
    pub fn from_label(label: impl Into<String>) -> Self {
        let label = label.into();
        Self {
            uuid: Uuid::new_v5(&Uuid::NAMESPACE_OID, label.as_bytes()),
            display_name: Some(label),
        }
    }

    /// The canonical UUID.
    pub fn uuid(&self) -> Uuid {
        self.uuid
    }

    /// The optional presentation name.
    pub fn display_name(&self) -> Option<&str> {
        self.display_name.as_deref()
    }

    /// A stable string label for this id: its display name, or the empty string
    /// if it was minted without one. Callers that need a guaranteed-non-empty
    /// key should construct ids via [`AgentId::named`], [`AgentId::stable`], or
    /// [`AgentId::from_label`], all of which set a display name.
    pub fn label(&self) -> &str {
        self.display_name.as_deref().unwrap_or_default()
    }

    /// Attach (or replace) the presentation name.
    pub fn with_name(mut self, name: impl Into<String>) -> Self {
        self.display_name = Some(name.into());
        self
    }
}

impl Default for AgentId {
    fn default() -> Self {
        Self::new()
    }
}

/// Identity is the UUID only — names are presentation.
impl PartialEq for AgentId {
    fn eq(&self, other: &Self) -> bool {
        self.uuid == other.uuid
    }
}

impl Eq for AgentId {}

impl std::hash::Hash for AgentId {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.uuid.hash(state);
    }
}

impl PartialOrd for AgentId {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for AgentId {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.uuid.cmp(&other.uuid)
    }
}

impl fmt::Display for AgentId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match &self.display_name {
            Some(name) => write!(f, "{name} ({})", self.uuid),
            None => write!(f, "{}", self.uuid),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn new_ids_are_unique_normal() {
        let a = AgentId::new();
        let b = AgentId::new();
        assert_ne!(a, b);
    }

    #[test]
    fn stable_ids_are_reproducible_normal() {
        let a = AgentId::stable("solver", 0);
        let b = AgentId::stable("solver", 0);
        assert_eq!(a, b);
        assert_eq!(a.display_name(), Some("solver-0"));
    }

    #[test]
    fn from_label_is_deterministic_normal() {
        let a = AgentId::from_label("solver_a");
        let b = AgentId::from_label("solver_a");
        assert_eq!(a, b);
        assert_eq!(a.label(), "solver_a");
        assert_ne!(a, AgentId::from_label("solver_b"));
    }

    #[test]
    fn label_falls_back_to_empty_robust() {
        // An id minted without a name has an empty label, not a panic.
        assert_eq!(AgentId::from_uuid(Uuid::new_v4()).label(), "");
    }

    #[test]
    fn stable_ids_differ_by_index_normal() {
        assert_ne!(AgentId::stable("solver", 0), AgentId::stable("solver", 1));
    }

    #[test]
    fn display_name_does_not_affect_identity_robust() {
        let uuid = Uuid::new_v4();
        let a = AgentId::from_uuid(uuid).with_name("alice");
        let b = AgentId::from_uuid(uuid).with_name("bob");
        // Same UUID → same agent, regardless of display name.
        assert_eq!(a, b);
        use std::collections::hash_map::DefaultHasher;
        use std::hash::{Hash, Hasher};
        let mut ha = DefaultHasher::new();
        let mut hb = DefaultHasher::new();
        a.hash(&mut ha);
        b.hash(&mut hb);
        assert_eq!(ha.finish(), hb.finish());
    }

    #[test]
    fn serde_roundtrip_normal() {
        let id = AgentId::named("researcher");
        let json = serde_json::to_string(&id).unwrap();
        let back: AgentId = serde_json::from_str(&json).unwrap();
        assert_eq!(id, back);
        assert_eq!(back.display_name(), Some("researcher"));
    }
}
