use super::trace::{RsiOutcome, RsiTrace, RsiTraceScore};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ThinkingPatternKind {
    VerifiedEfficient,
    OverthoughtFailure,
    ToolRecovery,
    CorrectionRecovery,
    UnverifiedAction,
}

impl ThinkingPatternKind {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::VerifiedEfficient => "verified_efficient",
            Self::OverthoughtFailure => "overthought_failure",
            Self::ToolRecovery => "tool_recovery",
            Self::CorrectionRecovery => "correction_recovery",
            Self::UnverifiedAction => "unverified_action",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ThinkingAnalysis {
    pub pattern: ThinkingPatternKind,
    pub lesson: String,
}

pub fn analyze_thinking(trace: &RsiTrace, score: &RsiTraceScore) -> ThinkingAnalysis {
    let has_verification = !trace.verifications.is_empty();
    let recovered_tool = trace.tool_steps.iter().enumerate().any(|(idx, step)| {
        !step.success
            && trace.tool_steps[idx + 1..]
                .iter()
                .any(|later| later.name == step.name && later.success)
    });

    if trace.user_correction.is_some() || matches!(trace.outcome, Some(RsiOutcome::UserCorrected)) {
        return ThinkingAnalysis {
            pattern: ThinkingPatternKind::CorrectionRecovery,
            lesson: "A user correction means the next similar trace should re-anchor on the corrected fact and verify before continuing."
                .to_owned(),
        };
    }
    if trace.thinking_tokens > 16_000 && score.outcome < 0.5 {
        return ThinkingAnalysis {
            pattern: ThinkingPatternKind::OverthoughtFailure,
            lesson: "High reasoning spend did not help; require earlier observable checks before spending more thinking budget."
                .to_owned(),
        };
    }
    if recovered_tool {
        return ThinkingAnalysis {
            pattern: ThinkingPatternKind::ToolRecovery,
            lesson: "A failed tool recovered after checking state; retry policy should inspect current inputs before repeating the tool."
                .to_owned(),
        };
    }
    if has_verification && score.outcome > 0.9 && trace.thinking_tokens <= 4_000 {
        return ThinkingAnalysis {
            pattern: ThinkingPatternKind::VerifiedEfficient,
            lesson: "A short reasoning pass plus explicit verification was enough; keep similar tasks tool-grounded and low effort."
                .to_owned(),
        };
    }
    ThinkingAnalysis {
        pattern: ThinkingPatternKind::UnverifiedAction,
        lesson: "The trace lacked a strong verification signal; future variants should ask for an observable check before promotion."
            .to_owned(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::{RsiToolStep, RsiVerification, score_trace};

    #[test]
    fn analyzer_summarizes_pattern_without_raw_thinking_normal() {
        let mut trace = RsiTrace::new("s1");
        trace.thinking_blocks = vec!["private reasoning details".to_owned()];
        trace.outcome = Some(RsiOutcome::Succeeded);
        trace.thinking_tokens = 900;
        trace.tool_steps = vec![RsiToolStep::new("Bash", true)];
        trace.verifications = vec![RsiVerification::new("cargo test", true)];

        let analysis = analyze_thinking(&trace, &score_trace(&trace));

        assert_eq!(analysis.pattern, ThinkingPatternKind::VerifiedEfficient);
        assert!(!analysis.lesson.contains("private reasoning details"));
    }
}
