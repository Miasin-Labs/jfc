use crate::ContextSkeletonError;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(transparent)]
pub struct ContributorId(String);

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ContextContributor {
    id: ContributorId,
    label: String,
    /// Tokens this contributor occupies in the assembled context. Defaults to
    /// `0` so a contributor can be declared before its contribution is measured
    /// (and so older serialized records without the field still load).
    #[serde(default)]
    tokens: u64,
}

impl ContributorId {
    pub fn new(id: impl Into<String>) -> Result<Self, ContextSkeletonError> {
        let id = id.into();
        if id.trim().is_empty() {
            return Err(ContextSkeletonError::EmptyContributorId);
        }

        Ok(Self(id))
    }

    pub fn as_str(&self) -> &str {
        &self.0
    }
}

impl ContextContributor {
    pub fn new(id: ContributorId, label: impl Into<String>) -> Self {
        Self {
            id,
            label: label.into(),
            tokens: 0,
        }
    }

    pub fn try_new(
        id: ContributorId,
        label: impl Into<String>,
    ) -> Result<Self, ContextSkeletonError> {
        let label = label.into();
        if label.trim().is_empty() {
            return Err(ContextSkeletonError::EmptyContributorLabel);
        }

        Ok(Self {
            id,
            label,
            tokens: 0,
        })
    }

    /// Attach a measured token contribution (builder style).
    #[must_use]
    pub fn with_tokens(mut self, tokens: u64) -> Self {
        self.tokens = tokens;
        self
    }

    pub fn id(&self) -> &ContributorId {
        &self.id
    }

    pub fn label(&self) -> &str {
        &self.label
    }

    pub fn tokens(&self) -> u64 {
        self.tokens
    }
}

/// An ordered, token-attributed breakdown of everything occupying the assembled
/// context window. This is the owned source of truth for the context-composition
/// view (System / Docs / Memories / Compartments / Conversation / Tool Calls /
/// Tool Defs ...) — replacing the render layer recomputing estimates inline.
#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct ContextAccount {
    contributors: Vec<ContextContributor>,
}

impl ContextAccount {
    pub fn new(contributors: Vec<ContextContributor>) -> Self {
        Self { contributors }
    }

    pub fn contributors(&self) -> &[ContextContributor] {
        &self.contributors
    }

    /// Sum of every contributor's token attribution.
    pub fn total_tokens(&self) -> u64 {
        self.contributors.iter().map(ContextContributor::tokens).sum()
    }

    /// `true` when no contributor carries any tokens (nothing measured yet).
    pub fn is_empty(&self) -> bool {
        self.contributors
            .iter()
            .all(|contributor| contributor.tokens() == 0)
    }

    /// Look up a contributor's tokens by id, if present.
    pub fn tokens_for(&self, id: &str) -> Option<u64> {
        self.contributors
            .iter()
            .find(|contributor| contributor.id().as_str() == id)
            .map(ContextContributor::tokens)
    }
}
