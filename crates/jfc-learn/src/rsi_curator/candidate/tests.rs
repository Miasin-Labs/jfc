use super::*;
use crate::rsi_curator::trace::{RsiOutcome, RsiTrace};

#[test]
fn candidates_do_not_copy_raw_thinking_normal() {
    let mut trace = RsiTrace::new("s1");
    trace.outcome = Some(RsiOutcome::UserCorrected);
    trace.user_correction = Some("actually use cargo test".into());
    trace.thinking_blocks = vec!["raw private chain of thought".into()];
    let score = crate::rsi_curator::score_trace(&trace);

    let analysis = crate::rsi_curator::analyze_thinking(&trace, &score);
    let candidates = generate_candidates(&trace, &score, &RsiCuratorConfig::default(), &analysis);

    assert!(!candidates.is_empty());
    assert!(
        candidates
            .iter()
            .all(|candidate| !candidate.body.contains("raw private chain of thought"))
    );
}

#[test]
fn candidate_id_accumulates_across_sessions_normal() {
    let mut a = RsiTrace::new("s1");
    a.outcome = Some(RsiOutcome::UserCorrected);
    a.user_correction = Some("actually use cargo test".into());
    let mut b = a.clone();
    b.session_id = "s2".to_owned();
    let score = crate::rsi_curator::score_trace(&a);
    let analysis = crate::rsi_curator::analyze_thinking(&a, &score);

    let first = generate_candidates(&a, &score, &RsiCuratorConfig::default(), &analysis);
    let second = generate_candidates(&b, &score, &RsiCuratorConfig::default(), &analysis);

    assert_eq!(first[0].id, second[0].id);
}

#[test]
fn recovered_tool_trace_generates_harness_patch_without_raw_thinking_normal() {
    let mut trace = RsiTrace::new("s1");
    trace.outcome = Some(RsiOutcome::Succeeded);
    trace.thinking_blocks = vec!["private chain-of-thought text".into()];
    trace.tool_steps = vec![
        crate::rsi_curator::RsiToolStep::new("Edit", false),
        crate::rsi_curator::RsiToolStep::new("Read", true),
        crate::rsi_curator::RsiToolStep::new("Edit", true),
    ];
    trace.verifications = vec![crate::rsi_curator::RsiVerification::new(
        "cargo test -p jfc-learn",
        true,
    )];
    let score = crate::rsi_curator::score_trace(&trace);
    let analysis = crate::rsi_curator::analyze_thinking(&trace, &score);

    let candidates = generate_candidates(&trace, &score, &RsiCuratorConfig::default(), &analysis);
    let patch = candidates
        .iter()
        .find(|candidate| candidate.kind == crate::rsi_curator::CandidateKind::HarnessPatch)
        .expect("harness patch candidate");

    assert!(patch.body.contains("Weakness Mining"));
    assert!(patch.body.contains("Harness Proposal"));
    assert!(patch.body.contains("Proposal Validation"));
    assert!(patch.body.contains("verify"));
    assert!(!patch.body.contains("private chain-of-thought text"));
}

#[test]
fn thinking_trace_generates_reasoning_policy_without_raw_cot_normal() {
    let mut trace = RsiTrace::new("s1");
    trace.outcome = Some(RsiOutcome::Succeeded);
    trace.thinking_tokens = 1_200;
    trace.thinking_blocks = vec!["raw private reasoning should stay hidden".into()];
    trace.verifications = vec![crate::rsi_curator::RsiVerification::new(
        "cargo test -p jfc-learn",
        true,
    )];
    let score = crate::rsi_curator::score_trace(&trace);
    let analysis = crate::rsi_curator::analyze_thinking(&trace, &score);

    let candidates = generate_candidates(&trace, &score, &RsiCuratorConfig::default(), &analysis);
    let policy = candidates
        .iter()
        .find(|candidate| candidate.kind == crate::rsi_curator::CandidateKind::ReasoningPolicy)
        .expect("reasoning policy candidate");

    assert_eq!(policy.target.kind, "reasoning_policy");
    assert!(policy.body.contains("Reasoning Process Policy"));
    assert!(policy.body.contains("observable verification"));
    assert!(policy.body.contains("never copy private reasoning"));
    assert!(
        !policy
            .body
            .contains("raw private reasoning should stay hidden")
    );
}
