use super::{CandidateChange, CandidateKind, CandidateStatus};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ControlCapability {
    MemoryWrite,
    SkillWrite,
    PromptWrite,
    ToolDefinitionWrite,
    HarnessWrite,
    ContextWrite,
    BudgetWrite,
    ReasoningWrite,
}

impl ControlCapability {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::MemoryWrite => "memory_write",
            Self::SkillWrite => "skill_write",
            Self::PromptWrite => "prompt_write",
            Self::ToolDefinitionWrite => "tool_definition_write",
            Self::HarnessWrite => "harness_write",
            Self::ContextWrite => "context_write",
            Self::BudgetWrite => "budget_write",
            Self::ReasoningWrite => "reasoning_write",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ControlTrust {
    Candidate,
    Verified,
}

impl ControlTrust {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Candidate => "candidate",
            Self::Verified => "verified",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ControlAssessment {
    pub capability: ControlCapability,
    pub trust: ControlTrust,
    pub activation_status: CandidateStatus,
    pub approval_required: bool,
    pub reason: String,
}

pub fn assess_control(candidate: &CandidateChange) -> ControlAssessment {
    let capability = capability_for(&candidate.kind);
    let evidence_verified = candidate.eval.passed
        && candidate.eval.fixtures_run > 0
        && candidate.eval.fixtures_run == candidate.eval.fixtures_passed
        && candidate.eval.research_verified()
        && !candidate.thinking.raw_stored;
    let trust = if evidence_verified {
        ControlTrust::Verified
    } else {
        ControlTrust::Candidate
    };
    let activation_status = if candidate.status == CandidateStatus::Active && !evidence_verified {
        CandidateStatus::Candidate
    } else {
        candidate.status
    };
    ControlAssessment {
        capability,
        trust,
        activation_status,
        approval_required: approval_required(capability),
        reason: reason_for(trust, activation_status),
    }
}

pub fn capability_for(kind: &CandidateKind) -> ControlCapability {
    match kind {
        CandidateKind::MemoryRule => ControlCapability::MemoryWrite,
        CandidateKind::SkillDraft => ControlCapability::SkillWrite,
        CandidateKind::SystemPromptPatch => ControlCapability::PromptWrite,
        CandidateKind::ToolDefinitionPatch => ControlCapability::ToolDefinitionWrite,
        CandidateKind::HarnessPatch => ControlCapability::HarnessWrite,
        CandidateKind::ContextPlaybookPatch => ControlCapability::ContextWrite,
        CandidateKind::BudgetPolicy => ControlCapability::BudgetWrite,
        CandidateKind::ReasoningPolicy => ControlCapability::ReasoningWrite,
    }
}

const fn approval_required(capability: ControlCapability) -> bool {
    match capability {
        ControlCapability::MemoryWrite => false,
        ControlCapability::SkillWrite
        | ControlCapability::PromptWrite
        | ControlCapability::ToolDefinitionWrite
        | ControlCapability::HarnessWrite
        | ControlCapability::ContextWrite
        | ControlCapability::BudgetWrite
        | ControlCapability::ReasoningWrite => true,
    }
}

fn reason_for(trust: ControlTrust, activation_status: CandidateStatus) -> String {
    match (trust, activation_status) {
        (ControlTrust::Verified, CandidateStatus::Active) => {
            "verified regression evidence permits active controlled rollout".to_owned()
        }
        (ControlTrust::Verified, CandidateStatus::Candidate) => {
            "verified regression evidence retained as candidate pending policy approval".to_owned()
        }
        (ControlTrust::Candidate, CandidateStatus::Candidate) => {
            "candidate lacks complete regression evidence for active rollout".to_owned()
        }
        (ControlTrust::Candidate, CandidateStatus::Rejected) => {
            "candidate rejected by evaluation gate".to_owned()
        }
        (ControlTrust::Verified, CandidateStatus::Rejected) => {
            "candidate rejected by promotion policy despite verified fixtures".to_owned()
        }
        (ControlTrust::Candidate, CandidateStatus::Active) => {
            "candidate was demoted before active rollout".to_owned()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::{
        CandidateEval, CandidateTarget, RsiEvalProfile, RsiResearchCheck, RsiResearchRef, RsiTrace,
        ThinkingProvenance,
    };

    fn active_candidate(eval: CandidateEval) -> CandidateChange {
        CandidateChange {
            id: "c1".to_owned(),
            kind: CandidateKind::ToolDefinitionPatch,
            target: CandidateTarget {
                kind: "tool_definition".to_owned(),
                name: "Edit".to_owned(),
            },
            title: "Tool patch".to_owned(),
            body: "verify current path before retrying Edit".to_owned(),
            evidence: "session=s1".to_owned(),
            source_session_id: "s1".to_owned(),
            source_turn_id: None,
            score: 0.92,
            recurrence_count: 1,
            eval,
            status: CandidateStatus::Active,
            budget: None,
            thinking: ThinkingProvenance::from_trace(&RsiTrace::new("s1")),
        }
    }

    fn research_eval() -> CandidateEval {
        CandidateEval::pass(0.92, "passed")
            .with_fixtures(2, 2)
            .with_research_gate(
                RsiEvalProfile::ToolDefinitionControl,
                vec![RsiResearchCheck::new("tool_control", true)],
                vec![RsiResearchRef {
                    paper_id: "2601.08012",
                    role: "verifiably_safe_tool_use",
                }],
            )
    }

    #[test]
    fn active_candidate_without_fixture_evidence_is_demoted_robust() {
        let assessment = assess_control(&active_candidate(CandidateEval::pass(0.92, "passed")));

        assert_eq!(
            assessment.capability,
            ControlCapability::ToolDefinitionWrite
        );
        assert_eq!(assessment.trust, ControlTrust::Candidate);
        assert_eq!(assessment.activation_status, CandidateStatus::Candidate);
        assert!(assessment.approval_required);
    }

    #[test]
    fn active_candidate_with_fixture_evidence_stays_active_normal() {
        let assessment = assess_control(&active_candidate(research_eval()));

        assert_eq!(assessment.trust, ControlTrust::Verified);
        assert_eq!(assessment.activation_status, CandidateStatus::Active);
        assert!(assessment.approval_required);
    }
}
