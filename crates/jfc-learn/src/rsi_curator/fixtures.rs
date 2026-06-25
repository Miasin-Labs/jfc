use super::candidate::{CandidateChange, CandidateKind};
use super::trace::{RsiOutcome, RsiTrace};

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RsiRegressionFixture {
    pub name: String,
    pub requires_no_raw_thinking: bool,
    pub requires_observable_verification: bool,
    pub requires_tool_target: Option<String>,
    pub requires_budget_guidance: bool,
}

impl RsiRegressionFixture {
    pub fn from_trace_candidate(trace: &RsiTrace, candidate: &CandidateChange) -> Self {
        Self {
            name: format!("{}:{}", trace.session_id, candidate.kind.slug()),
            requires_no_raw_thinking: true,
            requires_observable_verification: requires_observable_verification(trace, candidate),
            requires_tool_target: match candidate.kind {
                CandidateKind::ToolDefinitionPatch => Some(candidate.target.name.clone()),
                CandidateKind::MemoryRule
                | CandidateKind::SkillDraft
                | CandidateKind::SystemPromptPatch
                | CandidateKind::HarnessPatch
                | CandidateKind::ContextPlaybookPatch
                | CandidateKind::BudgetPolicy
                | CandidateKind::ReasoningPolicy => None,
            },
            requires_budget_guidance: candidate.kind == CandidateKind::BudgetPolicy,
        }
    }
}

fn requires_observable_verification(trace: &RsiTrace, candidate: &CandidateChange) -> bool {
    matches!(
        candidate.kind,
        CandidateKind::MemoryRule
            | CandidateKind::SkillDraft
            | CandidateKind::SystemPromptPatch
            | CandidateKind::ToolDefinitionPatch
            | CandidateKind::HarnessPatch
            | CandidateKind::ContextPlaybookPatch
            | CandidateKind::ReasoningPolicy
    ) && (trace.user_correction.is_some()
        || matches!(trace.outcome, Some(RsiOutcome::UserCorrected))
        || !trace.verifications.is_empty())
}

pub fn fixtures_for_candidate(
    trace: &RsiTrace,
    candidate: &CandidateChange,
) -> [RsiRegressionFixture; 1] {
    [RsiRegressionFixture::from_trace_candidate(trace, candidate)]
}
