use super::analysis::{ThinkingAnalysis, ThinkingPatternKind};
use super::candidate::{CandidateChange, CandidateKind, CandidateTarget, candidate};
use super::id::slug;
use super::trace::{RsiTrace, RsiTraceScore};

pub(super) fn should_emit_reasoning_policy(trace: &RsiTrace) -> bool {
    trace.thinking_tokens > 0 || !trace.thinking_blocks.is_empty()
}

pub(super) fn reasoning_policy(
    trace: &RsiTrace,
    score: &RsiTraceScore,
    analysis: &ThinkingAnalysis,
) -> CandidateChange {
    let pattern = analysis.pattern.slug();
    let name = format!(
        "{}-{}",
        trace.model.as_deref().unwrap_or("default-model"),
        pattern
    );
    let body = format!(
        "Reasoning Process Policy: {pattern}\nPattern: {}\nLesson: {}\nPolicy: make the smallest useful private reasoning pass, name assumptions internally, then run an observable verification before treating the result as learned or complete.\nSafety: never copy private reasoning into prompts, skills, memory, tool definitions, harnesses, or logs; persist only this distilled policy and its verification evidence.\nValidation: keep the policy only while fixtures pass, research checks stay verified, and rollback remains available.",
        pattern_label(analysis.pattern),
        analysis.lesson
    );
    candidate(
        trace,
        CandidateKind::ReasoningPolicy,
        CandidateTarget {
            kind: "reasoning_policy".to_owned(),
            name: slug(&name),
        },
        format!("Reasoning process policy: {pattern}"),
        body,
        score.overall.max(0.69),
        None,
    )
}

fn pattern_label(pattern: ThinkingPatternKind) -> &'static str {
    match pattern {
        ThinkingPatternKind::VerifiedEfficient => "verified efficient run",
        ThinkingPatternKind::OverthoughtFailure => "overthought failure",
        ThinkingPatternKind::ToolRecovery => "tool recovery",
        ThinkingPatternKind::CorrectionRecovery => "correction recovery",
        ThinkingPatternKind::UnverifiedAction => "unverified action",
    }
}
