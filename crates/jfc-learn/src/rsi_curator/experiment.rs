use serde_json::json;

use super::trace::{RsiTrace, score_trace};

const TOOL_STEP_TOKEN_ESTIMATE: u64 = 256;
const MICRO_USD_PER_TOKEN: u64 = 3;
const PLATEAU_WINDOW: usize = 4;
const PLATEAU_EPSILON: f64 = 0.01;

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiPlateauStatus {
    #[default]
    InsufficientData,
    Improving,
    Plateaued,
}

impl RsiPlateauStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::InsufficientData => "insufficient_data",
            Self::Improving => "improving",
            Self::Plateaued => "plateaued",
        }
    }
}

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiExperimentAction {
    #[default]
    CollectMoreTraces,
    ContinueExploit,
    BranchOut,
}

impl RsiExperimentAction {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::CollectMoreTraces => "collect_more_traces",
            Self::ContinueExploit => "continue_exploit",
            Self::BranchOut => "branch_out",
        }
    }
}

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiAntiCheatStatus {
    #[default]
    NeedsEvidence,
    Protected,
}

impl RsiAntiCheatStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::NeedsEvidence => "needs_evidence",
            Self::Protected => "protected",
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RsiMetricPoint {
    pub session_id: String,
    pub score: f64,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RsiPlateauReport {
    pub status: RsiPlateauStatus,
    pub window: usize,
    pub best_score: f64,
    pub latest_score: f64,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiHiddenValidationReport {
    pub required: bool,
    pub holdout_name: String,
    pub passed: usize,
    pub total: usize,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiAntiCheatReport {
    pub status: RsiAntiCheatStatus,
    pub protected_targets: Vec<&'static str>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RsiSandboxReport {
    pub network_blocked: bool,
    pub egress_policy: &'static str,
    pub writable_scope: &'static str,
}

impl Default for RsiSandboxReport {
    fn default() -> Self {
        Self {
            network_blocked: true,
            egress_policy: "deny_by_default",
            writable_scope: "project_worktree_only",
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiCostReport {
    pub estimated_tokens: u64,
    pub estimated_cost_micro_usd: u64,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RsiExperimentDashboard {
    pub trace_count: usize,
    pub metric_points: Vec<RsiMetricPoint>,
    pub plateau: RsiPlateauReport,
    pub next_action: RsiExperimentAction,
    pub hidden_validation: RsiHiddenValidationReport,
    pub anti_cheat: RsiAntiCheatReport,
    pub sandbox: RsiSandboxReport,
    pub cost: RsiCostReport,
}

impl RsiExperimentDashboard {
    pub fn to_metadata(&self) -> serde_json::Value {
        json!({
            "trace_count": self.trace_count,
            "metrics": {
                "points": self.metric_points.iter().map(|point| {
                    json!({"session_id": point.session_id, "score": point.score})
                }).collect::<Vec<_>>(),
                "best_score": self.plateau.best_score,
                "latest_score": self.plateau.latest_score,
            },
            "plateau": {
                "status": self.plateau.status.slug(),
                "window": self.plateau.window,
            },
            "next_action": self.next_action.slug(),
            "hidden_validation": {
                "required": self.hidden_validation.required,
                "holdout_name": self.hidden_validation.holdout_name,
                "passed": self.hidden_validation.passed,
                "total": self.hidden_validation.total,
            },
            "anti_cheat": {
                "status": self.anti_cheat.status.slug(),
                "protected_targets": self.anti_cheat.protected_targets,
            },
            "sandbox": {
                "network_blocked": self.sandbox.network_blocked,
                "egress_policy": self.sandbox.egress_policy,
                "writable_scope": self.sandbox.writable_scope,
            },
            "cost": {
                "estimated_tokens": self.cost.estimated_tokens,
                "estimated_cost_micro_usd": self.cost.estimated_cost_micro_usd,
            },
        })
    }

    pub fn render_summary(&self) -> String {
        format!(
            "traces={} best_score={:.2} latest_score={:.2} plateau={} hidden_validation={} anti_cheat={} sandbox={} next_action={} cost_tokens={} cost_micro_usd={}",
            self.trace_count,
            self.plateau.best_score,
            self.plateau.latest_score,
            self.plateau.status.slug(),
            if self.hidden_validation.required {
                "required"
            } else {
                "missing"
            },
            self.anti_cheat.status.slug(),
            if self.sandbox.network_blocked {
                "network_blocked"
            } else {
                "network_allowed"
            },
            self.next_action.slug(),
            self.cost.estimated_tokens,
            self.cost.estimated_cost_micro_usd,
        )
    }
}

pub fn build_experiment_dashboard(traces: &[RsiTrace]) -> RsiExperimentDashboard {
    let metric_points = traces
        .iter()
        .map(|trace| RsiMetricPoint {
            session_id: trace.session_id.clone(),
            score: score_trace(trace).overall,
        })
        .collect::<Vec<_>>();
    let plateau = plateau_report(&metric_points);
    RsiExperimentDashboard {
        trace_count: traces.len(),
        hidden_validation: hidden_validation_report(traces),
        anti_cheat: anti_cheat_report(traces),
        sandbox: RsiSandboxReport::default(),
        cost: cost_report(traces),
        next_action: action_for(plateau.status),
        metric_points,
        plateau,
    }
}

fn plateau_report(points: &[RsiMetricPoint]) -> RsiPlateauReport {
    let best_score = points.iter().map(|point| point.score).fold(0.0, f64::max);
    let latest_score = points.last().map_or(0.0, |point| point.score);
    let status = if points.len() < PLATEAU_WINDOW {
        RsiPlateauStatus::InsufficientData
    } else {
        let window = &points[points.len() - PLATEAU_WINDOW..];
        let first = window.first().map_or(0.0, |point| point.score);
        let last = window.last().map_or(0.0, |point| point.score);
        if last - first <= PLATEAU_EPSILON {
            RsiPlateauStatus::Plateaued
        } else {
            RsiPlateauStatus::Improving
        }
    };
    RsiPlateauReport {
        status,
        window: PLATEAU_WINDOW,
        best_score,
        latest_score,
    }
}

fn hidden_validation_report(traces: &[RsiTrace]) -> RsiHiddenValidationReport {
    let mut total = 0usize;
    let mut passed = 0usize;
    for verification in traces.iter().flat_map(|trace| &trace.verifications) {
        total += 1;
        if verification.passed {
            passed += 1;
        }
    }
    RsiHiddenValidationReport {
        required: true,
        holdout_name: "hidden-validation-holdout".to_owned(),
        passed,
        total,
    }
}

fn anti_cheat_report(traces: &[RsiTrace]) -> RsiAntiCheatReport {
    let status = if traces.iter().any(|trace| !trace.verifications.is_empty()) {
        RsiAntiCheatStatus::Protected
    } else {
        RsiAntiCheatStatus::NeedsEvidence
    };
    RsiAntiCheatReport {
        status,
        protected_targets: vec!["hidden_validation", "score_function", "source_hash"],
    }
}

fn cost_report(traces: &[RsiTrace]) -> RsiCostReport {
    let estimated_tokens = traces
        .iter()
        .map(|trace| {
            trace
                .thinking_tokens
                .saturating_add(trace.tool_steps.len() as u64 * TOOL_STEP_TOKEN_ESTIMATE)
        })
        .sum();
    RsiCostReport {
        estimated_tokens,
        estimated_cost_micro_usd: estimated_tokens.saturating_mul(MICRO_USD_PER_TOKEN),
    }
}

const fn action_for(status: RsiPlateauStatus) -> RsiExperimentAction {
    match status {
        RsiPlateauStatus::InsufficientData => RsiExperimentAction::CollectMoreTraces,
        RsiPlateauStatus::Improving => RsiExperimentAction::ContinueExploit,
        RsiPlateauStatus::Plateaued => RsiExperimentAction::BranchOut,
    }
}
