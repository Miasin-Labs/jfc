use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum RsiOutcome {
    Succeeded,
    Failed,
    UserCorrected,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct RsiToolStep {
    pub name: String,
    pub success: bool,
}

impl RsiToolStep {
    pub fn new(name: impl Into<String>, success: bool) -> Self {
        Self {
            name: name.into(),
            success,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct RsiVerification {
    pub command: String,
    pub passed: bool,
}

impl RsiVerification {
    pub fn new(command: impl Into<String>, passed: bool) -> Self {
        Self {
            command: command.into(),
            passed,
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct RsiTrace {
    pub session_id: String,
    pub turn_id: Option<String>,
    pub model: Option<String>,
    pub effort: Option<String>,
    pub thinking_blocks: Vec<String>,
    pub thinking_tokens: u64,
    pub tool_steps: Vec<RsiToolStep>,
    pub outcome: Option<RsiOutcome>,
    pub user_correction: Option<String>,
    pub verifications: Vec<RsiVerification>,
}

impl RsiTrace {
    pub fn new(session_id: impl Into<String>) -> Self {
        Self {
            session_id: session_id.into(),
            ..Self::default()
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq)]
pub struct RsiTraceScore {
    pub overall: f64,
    pub outcome: f64,
    pub tool_success_rate: f64,
    pub verification_pass_rate: f64,
    pub thinking_efficiency: f64,
}

pub fn score_trace(trace: &RsiTrace) -> RsiTraceScore {
    let outcome = match trace.outcome {
        Some(RsiOutcome::Succeeded) => 1.0,
        Some(RsiOutcome::UserCorrected) => 0.35,
        Some(RsiOutcome::Failed) | None => 0.0,
    };
    let tool_success_rate = success_rate(trace.tool_steps.iter().map(|step| step.success));
    let verification_pass_rate = success_rate(
        trace
            .verifications
            .iter()
            .map(|verification| verification.passed),
    );
    let thinking_efficiency = thinking_efficiency(trace.thinking_tokens, outcome);
    let overall = (outcome * 0.35)
        + (tool_success_rate * 0.25)
        + (verification_pass_rate * 0.25)
        + (thinking_efficiency * 0.15);
    RsiTraceScore {
        overall: overall.clamp(0.0, 1.0),
        outcome,
        tool_success_rate,
        verification_pass_rate,
        thinking_efficiency,
    }
}

fn success_rate<I>(values: I) -> f64
where
    I: Iterator<Item = bool>,
{
    let mut total = 0usize;
    let mut passed = 0usize;
    for value in values {
        total += 1;
        if value {
            passed += 1;
        }
    }
    if total == 0 {
        0.0
    } else {
        passed as f64 / total as f64
    }
}

fn thinking_efficiency(tokens: u64, outcome: f64) -> f64 {
    match (tokens, outcome >= 0.9) {
        (0, true) => 0.8,
        (0, false) => 0.3,
        (1..=4_000, true) => 1.0,
        (1..=4_000, false) => 0.5,
        (4_001..=16_000, true) => 0.75,
        (4_001..=16_000, false) => 0.25,
        (_, true) => 0.45,
        (_, false) => 0.1,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn trace_score_links_outcome_tools_verification_and_thinking_normal() {
        let mut trace = RsiTrace::new("s1");
        trace.outcome = Some(RsiOutcome::Succeeded);
        trace.thinking_tokens = 800;
        trace.tool_steps = vec![
            RsiToolStep::new("Read", true),
            RsiToolStep::new("Edit", false),
        ];
        trace.verifications = vec![RsiVerification::new("cargo test", true)];

        let score = score_trace(&trace);

        assert_eq!(score.outcome, 1.0);
        assert_eq!(score.tool_success_rate, 0.5);
        assert_eq!(score.verification_pass_rate, 1.0);
        assert_eq!(score.thinking_efficiency, 1.0);
        assert!(score.overall > 0.8);
    }
}
