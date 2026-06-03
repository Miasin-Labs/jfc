//! AFlow workflow optimisation — the offline harness that makes
//! [`jfc_core::workflow_search`] (MCTS over workflow structure) load-bearing.
//!
//! From *AFlow: Automating Agentic Workflow Generation* (arXiv:2410.10762): a
//! workflow is a structure of LLM-invoking **operators** (generate, ensemble,
//! review, revise, …); AFlow runs MCTS over *edits to that structure*, scoring
//! each candidate on a held-out task set and back-propagating which edit helped.
//!
//! `jfc_core::workflow_search` is the search engine and supplies the
//! [`jfc_core::workflow_search::Mutator`] / [`jfc_core::workflow_search::Evaluator`]
//! traits, but it is representation-agnostic — it had no workflow model, no task
//! set, and no scorer to optimise over. This module is exactly that missing
//! infrastructure:
//!
//! - [`WorkflowVariant`] — a candidate workflow as an ordered operator pipeline.
//! - [`WorkflowTask`] + [`WorkflowEvaluator`] — the held-out eval set and the
//!   per-`(variant, task)` scorer (an LLM workflow run in production; a
//!   deterministic mock in tests, mirroring [`crate::variant_selector`]).
//! - [`WorkflowOptimizer`] — adapts the task-set scorer into the search
//!   `Evaluator` (AFlow objective: mean quality − cost·calls) and drives
//!   [`jfc_core::workflow_search::search`].
//! - [`StructuralMutator`] — proposes structural edits (append a review→revise
//!   refinement, add/grow an ensemble, back off) guided by the experience log.
//!
//! Like [`crate::variant_selector`], this is **offline** — it optimises a
//! workflow against an eval corpus and never touches the live async runner. The
//! winning [`WorkflowVariant`] is the artefact a future pass compiles into the
//! runner (a separate step); the optimiser itself is fully implemented and
//! tested here.

use jfc_core::{Evaluator as SearchEvaluator, Experience, Mutator, SearchResult, argmax, search};

/// One operator in a workflow pipeline. Each maps to an LLM-call cost; the
/// *quality* a given pipeline achieves is the [`WorkflowEvaluator`]'s call.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum WorkflowOp {
    /// A single generation pass.
    Generate,
    /// Sample `n` generations and select among them (`n >= 2`).
    Ensemble(u8),
    /// Critique the current answer.
    Review,
    /// Revise the answer using the preceding review.
    Revise,
}

impl WorkflowOp {
    /// Estimated LLM calls this operator costs.
    fn llm_calls(&self) -> u32 {
        match self {
            WorkflowOp::Generate | WorkflowOp::Review | WorkflowOp::Revise => 1,
            WorkflowOp::Ensemble(n) => *n as u32,
        }
    }
}

/// A candidate workflow: an ordered pipeline of operators.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct WorkflowVariant {
    pub ops: Vec<WorkflowOp>,
}

impl WorkflowVariant {
    /// The minimal seed workflow: a single generation. AFlow starts from a
    /// trivial workflow and searches outward.
    pub fn seed() -> Self {
        Self { ops: vec![WorkflowOp::Generate] }
    }

    pub fn from_ops(ops: Vec<WorkflowOp>) -> Self {
        Self { ops }
    }

    /// Total estimated LLM calls to run this workflow once.
    pub fn llm_calls(&self) -> u32 {
        self.ops.iter().map(WorkflowOp::llm_calls).sum()
    }

    /// Number of review→revise refinement rounds (a `Revise` op).
    pub fn refinement_rounds(&self) -> usize {
        self.ops.iter().filter(|o| matches!(o, WorkflowOp::Revise)).count()
    }

    /// The first ensemble width, if any.
    pub fn ensemble_width(&self) -> Option<u8> {
        self.ops.iter().find_map(|o| match o {
            WorkflowOp::Ensemble(n) => Some(*n),
            _ => None,
        })
    }
}

/// One held-out evaluation task.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct WorkflowTask {
    pub name: String,
    pub input: String,
    pub expected: String,
}

/// Outcome of running one workflow variant on one task.
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct WorkflowOutcome {
    /// Solution quality in `[0, 1]` (e.g. fraction of the task solved).
    pub quality: f64,
    /// LLM calls actually consumed (defaults to the variant's static estimate;
    /// an evaluator may report a different measured figure).
    pub llm_calls: u32,
}

/// Runs a workflow variant on a task and reports quality + cost. An LLM
/// workflow execution in production; a deterministic function in tests
/// (mirroring [`crate::variant_selector::VariantEvaluator`]). Implementations
/// must be deterministic per `(variant, task)` so the search is reproducible.
pub trait WorkflowEvaluator {
    fn run(&self, variant: &WorkflowVariant, task: &WorkflowTask) -> WorkflowOutcome;
}

/// Drives [`jfc_core::workflow_search::search`] over [`WorkflowVariant`]s,
/// scoring each on the held-out task set with the AFlow objective.
pub struct WorkflowOptimizer<'a> {
    tasks: Vec<WorkflowTask>,
    evaluator: &'a dyn WorkflowEvaluator,
    /// Penalty per LLM call subtracted from mean quality — the AFlow
    /// cost/performance trade-off. `0.0` optimises pure quality.
    cost_per_call: f64,
}

impl<'a> WorkflowOptimizer<'a> {
    pub fn new(
        tasks: Vec<WorkflowTask>,
        evaluator: &'a dyn WorkflowEvaluator,
        cost_per_call: f64,
    ) -> Self {
        Self { tasks, evaluator, cost_per_call }
    }

    /// AFlow objective for one variant: mean quality across the task set minus
    /// `cost_per_call · mean_llm_calls`. Higher is better. An empty task set
    /// scores `0.0` (nothing to optimise against).
    pub fn objective(&self, variant: &WorkflowVariant) -> f64 {
        if self.tasks.is_empty() {
            return 0.0;
        }
        let n = self.tasks.len() as f64;
        let mut quality_sum = 0.0;
        let mut calls_sum = 0.0;
        for task in &self.tasks {
            let outcome = self.evaluator.run(variant, task);
            quality_sum += outcome.quality;
            calls_sum += outcome.llm_calls as f64;
        }
        (quality_sum / n) - self.cost_per_call * (calls_sum / n)
    }

    /// Run the AFlow search from `seed` for `iters` iterations and return the
    /// best workflow found plus the experience log. Deterministic: uses
    /// [`jfc_core::workflow_search::argmax`] selection (pure exploitation over
    /// the soft-mixed weights).
    pub fn optimize(
        &self,
        seed: WorkflowVariant,
        iters: usize,
    ) -> SearchResult<WorkflowVariant> {
        let mut mutator = StructuralMutator::new();
        search(
            seed,
            iters,
            &mut mutator,
            self,
            0.0, // lambda: pure exploitation of the score landscape
            1.0, // temperature
            argmax,
        )
    }
}

impl SearchEvaluator<WorkflowVariant> for WorkflowOptimizer<'_> {
    fn score(&self, state: &WorkflowVariant) -> f64 {
        self.objective(state)
    }
}

/// The structural edits the mutator can apply to a workflow.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Edit {
    /// Append a review→revise refinement round.
    AppendRefine,
    /// Add an ensemble (or widen the existing one).
    GrowEnsemble,
    /// Remove the last operator (back off — never below the seed Generate).
    Backoff,
}

const EDIT_ORDER: [Edit; 3] = [Edit::AppendRefine, Edit::GrowEnsemble, Edit::Backoff];
const MAX_ENSEMBLE: u8 = 5;

/// Experience-guided structural mutator (the AFlow "modify the workflow" step,
/// made deterministic). It keeps applying the current edit while the most
/// recent mutation *helped* (non-negative score delta); once an edit *hurt*, it
/// rotates to the next edit kind. This both intensifies useful structure and
/// backs off after overshooting — exactly AFlow's experience-driven variation,
/// minus the LLM proposing the edit.
pub struct StructuralMutator {
    cursor: usize,
}

impl Default for StructuralMutator {
    fn default() -> Self {
        Self::new()
    }
}

impl StructuralMutator {
    pub fn new() -> Self {
        Self { cursor: 0 }
    }

    fn apply(edit: Edit, parent: &WorkflowVariant) -> Option<WorkflowVariant> {
        let mut ops = parent.ops.clone();
        match edit {
            Edit::AppendRefine => {
                ops.push(WorkflowOp::Review);
                ops.push(WorkflowOp::Revise);
                Some(WorkflowVariant { ops })
            }
            Edit::GrowEnsemble => {
                if let Some(slot) = ops.iter_mut().find_map(|o| match o {
                    WorkflowOp::Ensemble(n) if *n < MAX_ENSEMBLE => Some(n),
                    _ => None,
                }) {
                    *slot += 1;
                    Some(WorkflowVariant { ops })
                } else if ops.iter().any(|o| matches!(o, WorkflowOp::Ensemble(_))) {
                    None // ensemble already at MAX width — leaves the variant unchanged
                } else {
                    // Insert an ensemble right after the first Generate.
                    let pos = ops
                        .iter()
                        .position(|o| matches!(o, WorkflowOp::Generate))
                        .map(|p| p + 1)
                        .unwrap_or(0);
                    ops.insert(pos, WorkflowOp::Ensemble(2));
                    Some(WorkflowVariant { ops })
                }
            }
            Edit::Backoff => {
                if ops.len() > 1 {
                    ops.pop();
                    Some(WorkflowVariant { ops })
                } else {
                    None
                }
            }
        }
    }
}

impl Mutator<WorkflowVariant> for StructuralMutator {
    fn expand(&mut self, parent: &WorkflowVariant, experience: &[Experience]) -> WorkflowVariant {
        // Rotate to a different edit when the most recent mutation hurt.
        if let Some(last) = experience.last()
            && last.delta() < 0.0
        {
            self.cursor = (self.cursor + 1) % EDIT_ORDER.len();
        }
        // Find the next edit (starting at the cursor) that yields a real change.
        for offset in 0..EDIT_ORDER.len() {
            let idx = (self.cursor + offset) % EDIT_ORDER.len();
            if let Some(child) = Self::apply(EDIT_ORDER[idx], parent) {
                self.cursor = idx;
                return child;
            }
        }
        // Every edit left the variant unchanged (degenerate) — return the parent.
        parent.clone()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn tasks(n: usize) -> Vec<WorkflowTask> {
        (0..n)
            .map(|i| WorkflowTask {
                name: format!("t{i}"),
                input: format!("in{i}"),
                expected: format!("out{i}"),
            })
            .collect()
    }

    /// Deterministic landscape with a real *interior* optimum: each refinement
    /// round lifts quality with diminishing returns (1 − 0.5·0.5^rounds), while
    /// cost grows linearly. With a modest `cost_per_call` the best score is at a
    /// few rounds, not zero and not the maximum — so a winning search must
    /// actually *find* the knee, not just pile on operators.
    struct DiminishingReturns;
    impl WorkflowEvaluator for DiminishingReturns {
        fn run(&self, variant: &WorkflowVariant, _task: &WorkflowTask) -> WorkflowOutcome {
            let rounds = variant.refinement_rounds() as i32;
            let quality = 1.0 - 0.5 * 0.5_f64.powi(rounds);
            WorkflowOutcome { quality, llm_calls: variant.llm_calls() }
        }
    }

    // Normal: search improves over the seed and lands on the interior optimum
    // (3 refinement rounds for this landscape + cost), not 0 and not unbounded.
    #[test]
    fn search_finds_interior_optimum_normal() {
        let eval = DiminishingReturns;
        let opt = WorkflowOptimizer::new(tasks(2), &eval, 0.02);
        let seed = WorkflowVariant::seed();
        let seed_score = opt.objective(&seed);

        let result = opt.optimize(seed, 12);

        assert!(
            result.best_score > seed_score,
            "search must improve over the seed ({} !> {})",
            result.best_score,
            seed_score
        );
        // Landscape knee is at 3 refinement rounds (see DiminishingReturns).
        assert_eq!(
            result.best.refinement_rounds(),
            3,
            "expected the interior optimum at 3 rounds, got {:?}",
            result.best.ops
        );
    }

    // Normal: the experience log records one entry per iteration, with at least
    // one positive delta (a structural edit that helped).
    #[test]
    fn experience_log_records_improvements_normal() {
        let eval = DiminishingReturns;
        let opt = WorkflowOptimizer::new(tasks(1), &eval, 0.02);
        let result = opt.optimize(WorkflowVariant::seed(), 6);
        assert_eq!(result.experience.len(), 6);
        assert!(
            result.experience.iter().any(|e| e.delta() > 0.0),
            "at least one mutation should improve the score"
        );
    }

    // Robust: the cost term is load-bearing — with zero cost, pure quality is
    // monotonic in refinement, so the optimum has strictly more rounds than
    // under a positive cost penalty.
    #[test]
    fn cost_penalty_shifts_optimum_robust() {
        let eval = DiminishingReturns;
        let free = WorkflowOptimizer::new(tasks(1), &eval, 0.0);
        let costed = WorkflowOptimizer::new(tasks(1), &eval, 0.02);

        let free_best = free.optimize(WorkflowVariant::seed(), 12);
        let costed_best = costed.optimize(WorkflowVariant::seed(), 12);

        assert!(
            free_best.best.refinement_rounds() > costed_best.best.refinement_rounds(),
            "free optimum ({}) should refine more than the costed optimum ({})",
            free_best.best.refinement_rounds(),
            costed_best.best.refinement_rounds()
        );
    }

    // Robust: zero iterations returns the seed unchanged.
    #[test]
    fn zero_iters_returns_seed_robust() {
        let eval = DiminishingReturns;
        let opt = WorkflowOptimizer::new(tasks(1), &eval, 0.02);
        let result = opt.optimize(WorkflowVariant::seed(), 0);
        assert_eq!(result.best, WorkflowVariant::seed());
        assert_eq!(result.nodes, 1);
    }

    // Robust: an empty task set scores 0 and never panics (no divide-by-zero).
    #[test]
    fn empty_task_set_is_safe_robust() {
        let eval = DiminishingReturns;
        let opt = WorkflowOptimizer::new(vec![], &eval, 0.02);
        assert_eq!(opt.objective(&WorkflowVariant::seed()), 0.0);
        let result = opt.optimize(WorkflowVariant::seed(), 3);
        assert_eq!(result.best_score, 0.0);
    }

    // Normal: the mutator's AppendRefine edit adds a review→revise pair.
    #[test]
    fn mutator_append_refine_adds_review_revise_normal() {
        let child = StructuralMutator::apply(Edit::AppendRefine, &WorkflowVariant::seed())
            .expect("append changes the variant");
        assert_eq!(
            child.ops,
            vec![WorkflowOp::Generate, WorkflowOp::Review, WorkflowOp::Revise]
        );
        assert_eq!(child.refinement_rounds(), 1);
    }

    // Robust: GrowEnsemble inserts an ensemble, then widens it, capped at MAX.
    #[test]
    fn mutator_grow_ensemble_inserts_then_widens_robust() {
        let v0 = WorkflowVariant::seed();
        let v1 = StructuralMutator::apply(Edit::GrowEnsemble, &v0).unwrap();
        assert_eq!(v1.ensemble_width(), Some(2));
        let v2 = StructuralMutator::apply(Edit::GrowEnsemble, &v1).unwrap();
        assert_eq!(v2.ensemble_width(), Some(3));
        // Widen to the cap, after which further growth leaves it unchanged.
        let mut v = v2;
        while let Some(next) = StructuralMutator::apply(Edit::GrowEnsemble, &v) {
            v = next;
        }
        assert_eq!(v.ensemble_width(), Some(MAX_ENSEMBLE));
    }

    // Robust: Backoff never removes the seed Generate.
    #[test]
    fn mutator_backoff_never_empties_robust() {
        let seed = WorkflowVariant::seed();
        assert!(StructuralMutator::apply(Edit::Backoff, &seed).is_none());
    }

    // Normal: llm_calls accounts for ensemble width.
    #[test]
    fn llm_calls_counts_ensemble_width_normal() {
        let v = WorkflowVariant::from_ops(vec![
            WorkflowOp::Generate,
            WorkflowOp::Ensemble(3),
            WorkflowOp::Review,
            WorkflowOp::Revise,
        ]);
        // 1 + 3 + 1 + 1 = 6
        assert_eq!(v.llm_calls(), 6);
    }
}
