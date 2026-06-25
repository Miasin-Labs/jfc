use serde_json::json;

use super::experiment::{RsiAntiCheatStatus, RsiExperimentDashboard};
use super::loop_plan::{RsiExperimentLoopPlan, RsiExperimentPhase};
use super::sandbox_enforcement::RsiSandboxEnforcement;

const DEFAULT_CADENCE_SECONDS: u64 = 900;
const DEFAULT_ITERATIONS_PER_CYCLE: u64 = 1;

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiJobPreflightStatus {
    Ready,
    #[default]
    Blocked,
}

impl RsiJobPreflightStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Ready => "ready",
            Self::Blocked => "blocked",
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiExperimentSchedule {
    pub cadence_seconds: u64,
    pub max_iterations_per_cycle: u64,
    pub dashboard_update_required: bool,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiJobPreflight {
    pub status: RsiJobPreflightStatus,
    pub reasons: Vec<&'static str>,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiHiddenValidationHarness {
    pub holdout_name: String,
    pub observed_passed: usize,
    pub observed_total: usize,
    pub reject_metric_mutation: bool,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiExperimentJobSpec {
    pub name: &'static str,
    pub phase: RsiExperimentPhase,
    pub schedule: RsiExperimentSchedule,
    pub preflight: RsiJobPreflight,
    pub hidden_validation: RsiHiddenValidationHarness,
    pub sandbox: RsiSandboxEnforcement,
    pub external_worker_sandbox: RsiSandboxEnforcement,
    pub max_tokens: u64,
    pub branch_strategy: &'static str,
}

impl RsiExperimentJobSpec {
    pub fn to_metadata(&self) -> serde_json::Value {
        json!({
            "name": self.name,
            "phase": self.phase.slug(),
            "schedule": {
                "cadence_seconds": self.schedule.cadence_seconds,
                "max_iterations_per_cycle": self.schedule.max_iterations_per_cycle,
                "dashboard_update_required": self.schedule.dashboard_update_required,
            },
            "preflight": {
                "status": self.preflight.status.slug(),
                "reasons": self.preflight.reasons,
            },
            "hidden_validation": {
                "holdout_name": self.hidden_validation.holdout_name,
                "observed_passed": self.hidden_validation.observed_passed,
                "observed_total": self.hidden_validation.observed_total,
                "reject_metric_mutation": self.hidden_validation.reject_metric_mutation,
            },
            "sandbox": self.sandbox.to_metadata(),
            "external_worker_sandbox": self.external_worker_sandbox.to_metadata(),
            "cost": {
                "max_tokens": self.max_tokens,
            },
            "branch_strategy": self.branch_strategy,
        })
    }

    pub fn render_summary(&self) -> String {
        let reasons = if self.preflight.reasons.is_empty() {
            "none".to_owned()
        } else {
            self.preflight.reasons.join("+")
        };
        format!(
            "name={} phase={} cadence_seconds={} max_iterations_per_cycle={} preflight={} reasons={} holdout={} hidden_validation={}/{} sandbox_enforcement={} execution_mode={} kernel_enforced={} sandbox_backend={} external_worker_sandbox={} external_backend={} external_egress_isolated={} sandbox={} egress={} fresh_worktree={} max_tokens={} branch_strategy={}",
            self.name,
            self.phase.slug(),
            self.schedule.cadence_seconds,
            self.schedule.max_iterations_per_cycle,
            self.preflight.status.slug(),
            reasons,
            self.hidden_validation.holdout_name,
            self.hidden_validation.observed_passed,
            self.hidden_validation.observed_total,
            self.sandbox.status.slug(),
            self.sandbox.execution_mode.slug(),
            self.sandbox.kernel_enforced,
            self.sandbox.kernel_backend,
            self.external_worker_sandbox.status.slug(),
            self.external_worker_sandbox.kernel_backend,
            self.external_worker_sandbox.egress_isolated,
            if self.sandbox.network_blocked {
                "network_blocked"
            } else {
                "network_allowed"
            },
            self.sandbox.egress_policy,
            self.sandbox.require_fresh_worktree,
            self.max_tokens,
            self.branch_strategy,
        )
    }
}

pub fn build_experiment_job_spec(
    dashboard: &RsiExperimentDashboard,
    plan: &RsiExperimentLoopPlan,
) -> RsiExperimentJobSpec {
    let sandbox = RsiSandboxEnforcement::in_process(&plan.sandbox);
    let reasons = preflight_reasons(dashboard, plan, &sandbox);
    let preflight = RsiJobPreflight {
        status: if reasons.is_empty() {
            RsiJobPreflightStatus::Ready
        } else {
            RsiJobPreflightStatus::Blocked
        },
        reasons,
    };
    RsiExperimentJobSpec {
        name: "rsi-experiment-iteration",
        phase: plan.phase,
        schedule: RsiExperimentSchedule {
            cadence_seconds: DEFAULT_CADENCE_SECONDS,
            max_iterations_per_cycle: DEFAULT_ITERATIONS_PER_CYCLE,
            dashboard_update_required: true,
        },
        preflight,
        hidden_validation: RsiHiddenValidationHarness {
            holdout_name: plan.validation.holdout_name.clone(),
            observed_passed: dashboard.hidden_validation.passed,
            observed_total: dashboard.hidden_validation.total,
            reject_metric_mutation: plan.anti_cheat.reject_metric_mutation,
        },
        sandbox,
        external_worker_sandbox: RsiSandboxEnforcement::external_worker(&plan.sandbox, false),
        max_tokens: plan.cost.max_next_iteration_tokens,
        branch_strategy: plan.branch_strategy,
    }
}

fn preflight_reasons(
    dashboard: &RsiExperimentDashboard,
    plan: &RsiExperimentLoopPlan,
    sandbox: &RsiSandboxEnforcement,
) -> Vec<&'static str> {
    let mut reasons = Vec::new();
    if !plan.validation.hidden_holdout_required {
        reasons.push("hidden_holdout_contract_missing");
    }
    if dashboard.hidden_validation.total == 0 {
        reasons.push("hidden_validation_not_run");
    } else if dashboard.hidden_validation.passed < dashboard.hidden_validation.total {
        reasons.push("hidden_validation_failed");
    }
    if dashboard.anti_cheat.status != RsiAntiCheatStatus::Protected
        || !plan.anti_cheat.reject_metric_mutation
        || !has_required_targets(plan)
    {
        reasons.push("anti_cheat_not_enforced");
    }
    if !sandbox.allows_mutation() {
        reasons.extend(sandbox.reasons.iter().copied());
    }
    if plan.cost.max_next_iteration_tokens == 0 || !plan.cost.stop_on_budget_exhaustion {
        reasons.push("budget_not_enforced");
    }
    if plan.phase == RsiExperimentPhase::Branch
        && plan.branch_strategy != "try_orthogonal_strategy_before_more_local_tuning"
    {
        reasons.push("branch_strategy_missing");
    }
    reasons
}

fn has_required_targets(plan: &RsiExperimentLoopPlan) -> bool {
    ["hidden_validation", "score_function", "source_hash"]
        .iter()
        .all(|target| plan.anti_cheat.protected_targets.contains(target))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::{
        RsiOutcome, RsiSandboxEnforcementStatus, RsiToolStep, RsiTrace, RsiVerification,
        build_experiment_dashboard, build_experiment_loop_plan,
    };

    #[test]
    fn job_spec_is_ready_after_hidden_validation_and_sandbox_preflight_normal() {
        let traces = [
            succeeded_trace("s1", 1_000),
            succeeded_trace("s2", 1_100),
            succeeded_trace("s3", 1_200),
            succeeded_trace("s4", 1_300),
        ];
        let dashboard = build_experiment_dashboard(&traces);
        let plan = build_experiment_loop_plan(&dashboard);

        let job = build_experiment_job_spec(&dashboard, &plan);

        assert_eq!(job.preflight.status, RsiJobPreflightStatus::Ready);
        assert!(job.preflight.reasons.is_empty());
        assert_eq!(job.phase, RsiExperimentPhase::Branch);
        assert_eq!(job.schedule.cadence_seconds, 900);
        assert!(job.schedule.dashboard_update_required);
        assert_eq!(job.hidden_validation.observed_passed, 4);
        assert_eq!(job.sandbox.egress_policy, "deny_by_default");
        assert_eq!(
            job.sandbox.status,
            RsiSandboxEnforcementStatus::InProcessOnly
        );
        assert!(!job.sandbox.kernel_enforced);
        assert_eq!(
            job.external_worker_sandbox.status,
            RsiSandboxEnforcementStatus::Blocked
        );
        assert!(job.sandbox.require_fresh_worktree);
        assert!(job.max_tokens > 0);
    }

    #[test]
    fn job_spec_blocks_when_hidden_validation_has_not_run_robust() {
        let mut trace = RsiTrace::new("s1");
        trace.outcome = Some(RsiOutcome::Succeeded);
        trace.tool_steps = vec![RsiToolStep::new("Bash", true)];
        trace.thinking_tokens = 1_000;
        let dashboard = build_experiment_dashboard(&[trace]);
        let plan = build_experiment_loop_plan(&dashboard);

        let job = build_experiment_job_spec(&dashboard, &plan);

        assert_eq!(job.preflight.status, RsiJobPreflightStatus::Blocked);
        assert!(job.preflight.reasons.contains(&"hidden_validation_not_run"));
        assert!(job.preflight.reasons.contains(&"anti_cheat_not_enforced"));
    }

    fn succeeded_trace(session: &str, thinking_tokens: u64) -> RsiTrace {
        let mut trace = RsiTrace::new(session);
        trace.outcome = Some(RsiOutcome::Succeeded);
        trace.thinking_tokens = thinking_tokens;
        trace.tool_steps = vec![RsiToolStep::new("Bash", true)];
        trace.verifications = vec![RsiVerification::new("hidden cargo test", true)];
        trace
    }
}
