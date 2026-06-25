use super::candidate::{CandidateChange, CandidateKind, CandidateTarget, candidate};
use super::id::slug;
use super::trace::{RsiTrace, RsiTraceScore};

#[derive(Debug, Clone, PartialEq)]
pub struct BudgetRecommendation {
    pub model: Option<String>,
    pub effort: Option<String>,
    pub recommendation: String,
    pub tool_visibility: Vec<ToolVisibilityRecommendation>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ToolVisibilityAction {
    ShowEarlier,
    HideUntilNeeded,
}

impl ToolVisibilityAction {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::ShowEarlier => "show_earlier",
            Self::HideUntilNeeded => "hide_until_needed",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ToolVisibilityRecommendation {
    pub tool_name: String,
    pub action: ToolVisibilityAction,
    pub reason: String,
}

pub(super) fn should_emit_budget(trace: &RsiTrace, score: &RsiTraceScore) -> bool {
    trace.thinking_tokens > 16_000 || (trace.thinking_tokens <= 4_000 && score.outcome > 0.9)
}

pub(super) fn budget_policy(trace: &RsiTrace, score: &RsiTraceScore) -> CandidateChange {
    let recommendation = if trace.thinking_tokens > 16_000 && score.outcome < 0.5 {
        "Lower reasoning effort or require earlier tool verification; high thinking did not prevent failure."
    } else if trace.thinking_tokens <= 4_000 && score.outcome > 0.9 {
        "Keep current/lower effort for similar tasks; low thinking budget was sufficient."
    } else {
        "Collect more traces before changing reasoning effort."
    };
    candidate(
        trace,
        CandidateKind::BudgetPolicy,
        CandidateTarget {
            kind: "budget_policy".to_owned(),
            name: budget_name(trace),
        },
        "Reasoning budget recommendation",
        recommendation.to_owned(),
        score.overall.max(0.6),
        Some(BudgetRecommendation {
            model: trace.model.clone(),
            effort: trace.effort.clone(),
            recommendation: recommendation.to_owned(),
            tool_visibility: tool_visibility(trace),
        }),
    )
}

fn budget_name(trace: &RsiTrace) -> String {
    let model = trace.model.as_deref().unwrap_or("unknown-model");
    let effort = trace.effort.as_deref().unwrap_or("default-effort");
    format!("{}-{}", slug(model), slug(effort))
}

fn tool_visibility(trace: &RsiTrace) -> Vec<ToolVisibilityRecommendation> {
    let mut out = Vec::new();
    for step in &trace.tool_steps {
        if out
            .iter()
            .any(|item: &ToolVisibilityRecommendation| item.tool_name == step.name)
        {
            continue;
        }
        if step.success {
            out.push(ToolVisibilityRecommendation {
                tool_name: step.name.clone(),
                action: ToolVisibilityAction::ShowEarlier,
                reason:
                    "Successful traces should make this tool available earlier for similar tasks."
                        .to_owned(),
            });
        } else {
            out.push(ToolVisibilityRecommendation {
                tool_name: step.name.clone(),
                action: ToolVisibilityAction::HideUntilNeeded,
                reason: "Failed traces should hide this tool until path, input, or prerequisite state is verified."
                    .to_owned(),
            });
        }
    }
    out
}
