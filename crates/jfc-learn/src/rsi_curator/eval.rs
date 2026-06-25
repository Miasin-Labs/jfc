use super::candidate::CandidateChange;
use super::fixtures::RsiRegressionFixture;
use super::gate::CandidateEval;
use super::research::assess_research_gate;
use super::trace::RsiTrace;

pub fn evaluate_candidate(
    candidate: &CandidateChange,
    fixtures: &[RsiRegressionFixture],
    trace: &RsiTrace,
) -> CandidateEval {
    if candidate.body.contains("<thinking") || candidate.body.contains("</thinking") {
        return CandidateEval::reject(candidate.score, "candidate leaks raw thinking markers");
    }
    if trace
        .thinking_blocks
        .iter()
        .any(|block| !block.is_empty() && candidate.body.contains(block))
    {
        return CandidateEval::reject(candidate.score, "candidate copies raw thinking text");
    }
    if candidate.body.len() > 2_000 {
        return CandidateEval::reject(candidate.score, "candidate body is too large");
    }
    if candidate.score < 0.55 {
        return CandidateEval::reject(candidate.score, "insufficient trace score");
    }

    let fixtures_passed = fixtures
        .iter()
        .filter(|fixture| candidate_passes_fixture(candidate, fixture))
        .count();
    if fixtures_passed != fixtures.len() {
        return CandidateEval::reject(
            candidate.score,
            format!(
                "failed RSI regression fixtures: {fixtures_passed}/{} passed",
                fixtures.len()
            ),
        )
        .with_fixtures(fixtures.len(), fixtures_passed);
    }

    let research = assess_research_gate(candidate, fixtures, trace);
    if !research.passed() {
        let failed = research.failed_check_names().join(", ");
        return CandidateEval::reject(
            candidate.score,
            format!("failed RSI research gate: {failed}"),
        )
        .with_fixtures(fixtures.len(), fixtures_passed)
        .with_research_gate(research.profile, research.checks, research.lineage);
    }

    CandidateEval::pass(
        candidate.score,
        "passed deterministic RSI regression fixtures",
    )
    .with_fixtures(fixtures.len(), fixtures_passed)
    .with_research_gate(research.profile, research.checks, research.lineage)
}

fn candidate_passes_fixture(candidate: &CandidateChange, fixture: &RsiRegressionFixture) -> bool {
    (!fixture.requires_no_raw_thinking || has_no_raw_thinking_markers(&candidate.body))
        && (!fixture.requires_observable_verification || mentions_verification(&candidate.body))
        && fixture
            .requires_tool_target
            .as_deref()
            .is_none_or(|tool| candidate.body.contains(tool))
        && (!fixture.requires_budget_guidance || mentions_budget_guidance(&candidate.body))
}

fn has_no_raw_thinking_markers(body: &str) -> bool {
    !body.contains("<thinking") && !body.contains("</thinking")
}

fn mentions_verification(body: &str) -> bool {
    let normalized = body.to_ascii_lowercase();
    ["verify", "verification", "test", "check", "observable"]
        .iter()
        .any(|needle| normalized.contains(needle))
}

fn mentions_budget_guidance(body: &str) -> bool {
    let normalized = body.to_ascii_lowercase();
    ["budget", "effort", "thinking", "hide", "show"]
        .iter()
        .any(|needle| normalized.contains(needle))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::{
        CandidateKind, CandidateStatus, CandidateTarget, RsiOutcome, RsiTrace, ThinkingProvenance,
    };

    fn candidate(body: &str) -> CandidateChange {
        CandidateChange {
            id: "c1".to_owned(),
            kind: CandidateKind::SystemPromptPatch,
            target: CandidateTarget {
                kind: "system_prompt".to_owned(),
                name: "guard".to_owned(),
            },
            title: "guard".to_owned(),
            body: body.to_owned(),
            evidence: String::new(),
            source_session_id: "s1".to_owned(),
            source_turn_id: None,
            score: 0.9,
            recurrence_count: 1,
            eval: CandidateEval::reject(0.0, "not evaluated"),
            status: CandidateStatus::Candidate,
            budget: None,
            thinking: ThinkingProvenance::from_trace(&RsiTrace::new("s1")),
        }
    }

    #[test]
    fn eval_rejects_raw_thinking_copies_normal() {
        let mut trace = RsiTrace::new("s1");
        trace.thinking_blocks = vec!["private reasoning".to_owned()];
        trace.outcome = Some(RsiOutcome::Succeeded);
        let fixtures = [RsiRegressionFixture::from_trace_candidate(
            &trace,
            &candidate("private reasoning"),
        )];

        let eval = evaluate_candidate(&candidate("private reasoning"), &fixtures, &trace);

        assert!(!eval.passed);
        assert_eq!(eval.reason, "candidate copies raw thinking text");
    }
}
