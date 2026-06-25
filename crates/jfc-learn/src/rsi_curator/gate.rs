use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum CandidateStatus {
    Candidate,
    Active,
    Rejected,
}

impl CandidateStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Candidate => "candidate",
            Self::Active => "active",
            Self::Rejected => "rejected",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum PromotionMode {
    CandidateOnly,
    EvidenceOrApproval,
    AutoActivateVerified,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct RsiPromotionPolicy {
    pub mode: PromotionMode,
    pub approved_candidate_ids: Vec<String>,
    pub min_active_recurrence: i64,
    pub min_active_eval_score: u8,
}

impl Default for RsiPromotionPolicy {
    fn default() -> Self {
        Self {
            mode: PromotionMode::CandidateOnly,
            approved_candidate_ids: Vec::new(),
            min_active_recurrence: 3,
            min_active_eval_score: 85,
        }
    }
}

impl RsiPromotionPolicy {
    pub fn auto_activate_verified() -> Self {
        Self {
            mode: PromotionMode::AutoActivateVerified,
            approved_candidate_ids: Vec::new(),
            min_active_recurrence: 1,
            min_active_eval_score: 0,
        }
    }

    pub fn evidence_or_approval(min_active_recurrence: i64, min_active_eval_score: u8) -> Self {
        Self {
            mode: PromotionMode::EvidenceOrApproval,
            approved_candidate_ids: Vec::new(),
            min_active_recurrence,
            min_active_eval_score,
        }
    }

    pub fn with_approval(mut self, candidate_id: impl Into<String>) -> Self {
        self.approved_candidate_ids.push(candidate_id.into());
        self
    }

    pub fn status_for(
        &self,
        candidate_id: &str,
        eval: &CandidateEval,
        recurrence_count: i64,
    ) -> CandidateStatus {
        if !eval.passed {
            return CandidateStatus::Rejected;
        }
        let approved = self
            .approved_candidate_ids
            .iter()
            .any(|approved| approved == candidate_id);
        match self.mode {
            PromotionMode::CandidateOnly if approved => CandidateStatus::Active,
            PromotionMode::CandidateOnly => CandidateStatus::Candidate,
            PromotionMode::AutoActivateVerified => CandidateStatus::Active,
            PromotionMode::EvidenceOrApproval
                if approved
                    || (recurrence_count >= self.min_active_recurrence
                        && eval.score >= f64::from(self.min_active_eval_score) / 100.0) =>
            {
                CandidateStatus::Active
            }
            PromotionMode::EvidenceOrApproval => CandidateStatus::Candidate,
        }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct CandidateEval {
    pub passed: bool,
    pub score: f64,
    pub reason: String,
    pub fixtures_run: usize,
    pub fixtures_passed: usize,
    pub research_profile: RsiEvalProfile,
    pub research_checks_run: usize,
    pub research_checks_passed: usize,
    pub research_checks: Vec<RsiResearchCheck>,
    pub research_lineage: Vec<RsiResearchRef>,
}

impl CandidateEval {
    pub fn pass(score: f64, reason: impl Into<String>) -> Self {
        Self {
            passed: true,
            score: score.clamp(0.0, 1.0),
            reason: reason.into(),
            fixtures_run: 0,
            fixtures_passed: 0,
            research_profile: RsiEvalProfile::Ungated,
            research_checks_run: 0,
            research_checks_passed: 0,
            research_checks: Vec::new(),
            research_lineage: Vec::new(),
        }
    }

    pub fn reject(score: f64, reason: impl Into<String>) -> Self {
        Self {
            passed: false,
            score: score.clamp(0.0, 1.0),
            reason: reason.into(),
            fixtures_run: 0,
            fixtures_passed: 0,
            research_profile: RsiEvalProfile::Ungated,
            research_checks_run: 0,
            research_checks_passed: 0,
            research_checks: Vec::new(),
            research_lineage: Vec::new(),
        }
    }

    pub fn with_fixtures(mut self, fixtures_run: usize, fixtures_passed: usize) -> Self {
        self.fixtures_run = fixtures_run;
        self.fixtures_passed = fixtures_passed;
        self
    }

    pub fn with_research_gate(
        mut self,
        profile: RsiEvalProfile,
        checks: Vec<RsiResearchCheck>,
        lineage: Vec<RsiResearchRef>,
    ) -> Self {
        self.research_checks_run = checks.len();
        self.research_checks_passed = checks.iter().filter(|check| check.passed).count();
        self.research_profile = profile;
        self.research_checks = checks;
        self.research_lineage = lineage;
        self
    }

    pub fn research_verified(&self) -> bool {
        self.research_profile != RsiEvalProfile::Ungated
            && self.research_checks_run > 0
            && self.research_checks_run == self.research_checks_passed
            && !self.research_lineage.is_empty()
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum RsiEvalProfile {
    Ungated,
    ExperienceMemory,
    PromptRevision,
    SkillAcquisition,
    ToolDefinitionControl,
    HarnessSelfImprovement,
    ContextPlaybook,
    BudgetPolicy,
    ReasoningProcess,
}

impl RsiEvalProfile {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Ungated => "ungated",
            Self::ExperienceMemory => "experience_memory",
            Self::PromptRevision => "prompt_revision",
            Self::SkillAcquisition => "skill_acquisition",
            Self::ToolDefinitionControl => "tool_definition_control",
            Self::HarnessSelfImprovement => "harness_self_improvement",
            Self::ContextPlaybook => "context_playbook",
            Self::BudgetPolicy => "budget_policy",
            Self::ReasoningProcess => "reasoning_process",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RsiResearchCheck {
    pub name: &'static str,
    pub passed: bool,
}

impl RsiResearchCheck {
    pub const fn new(name: &'static str, passed: bool) -> Self {
        Self { name, passed }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct RsiResearchRef {
    pub paper_id: &'static str,
    pub role: &'static str,
}
