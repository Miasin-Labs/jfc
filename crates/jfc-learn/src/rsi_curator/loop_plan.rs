use serde_json::json;

use super::experiment::{RsiExperimentAction, RsiExperimentDashboard};

const DEFAULT_TIMEOUT_SECONDS: u64 = 300;
const DEFAULT_NEXT_TOKENS: u64 = 2_048;

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiExperimentPhase {
    #[default]
    Observe,
    Exploit,
    Branch,
}

impl RsiExperimentPhase {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Observe => "observe",
            Self::Exploit => "exploit",
            Self::Branch => "branch",
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiLoopValidationPlan {
    pub hidden_holdout_required: bool,
    pub holdout_name: String,
    pub require_observable_metric: bool,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiLoopAntiCheatPlan {
    pub protected_targets: Vec<&'static str>,
    pub reject_metric_mutation: bool,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RsiLoopSandboxPlan {
    pub network_blocked: bool,
    pub egress_policy: &'static str,
    pub writable_scope: &'static str,
    pub require_fresh_worktree: bool,
}

impl Default for RsiLoopSandboxPlan {
    fn default() -> Self {
        Self {
            network_blocked: true,
            egress_policy: "deny_by_default",
            writable_scope: "project_worktree_only",
            require_fresh_worktree: true,
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiLoopCostPlan {
    pub max_next_iteration_tokens: u64,
    pub stop_on_budget_exhaustion: bool,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct RsiExperimentLoopPlan {
    pub phase: RsiExperimentPhase,
    pub timeout_seconds: u64,
    pub commit_required: bool,
    pub validation: RsiLoopValidationPlan,
    pub anti_cheat: RsiLoopAntiCheatPlan,
    pub sandbox: RsiLoopSandboxPlan,
    pub cost: RsiLoopCostPlan,
    pub branch_strategy: &'static str,
}

impl RsiExperimentLoopPlan {
    pub fn to_metadata(&self) -> serde_json::Value {
        json!({
            "phase": self.phase.slug(),
            "timeout_seconds": self.timeout_seconds,
            "commit_required": self.commit_required,
            "validation": {
                "hidden_holdout_required": self.validation.hidden_holdout_required,
                "holdout_name": self.validation.holdout_name,
                "require_observable_metric": self.validation.require_observable_metric,
            },
            "anti_cheat": {
                "protected_targets": self.anti_cheat.protected_targets,
                "reject_metric_mutation": self.anti_cheat.reject_metric_mutation,
            },
            "sandbox": {
                "network_blocked": self.sandbox.network_blocked,
                "egress_policy": self.sandbox.egress_policy,
                "writable_scope": self.sandbox.writable_scope,
                "require_fresh_worktree": self.sandbox.require_fresh_worktree,
            },
            "cost": {
                "max_next_iteration_tokens": self.cost.max_next_iteration_tokens,
                "stop_on_budget_exhaustion": self.cost.stop_on_budget_exhaustion,
            },
            "branch_strategy": self.branch_strategy,
        })
    }

    pub fn render_summary(&self) -> String {
        format!(
            "phase={} timeout_seconds={} commit_required={} holdout={} anti_cheat_targets={} sandbox={} egress={} max_tokens={} branch_strategy={}",
            self.phase.slug(),
            self.timeout_seconds,
            self.commit_required,
            self.validation.holdout_name,
            self.anti_cheat.protected_targets.join("+"),
            if self.sandbox.network_blocked {
                "network_blocked"
            } else {
                "network_allowed"
            },
            self.sandbox.egress_policy,
            self.cost.max_next_iteration_tokens,
            self.branch_strategy,
        )
    }
}

pub fn build_experiment_loop_plan(dashboard: &RsiExperimentDashboard) -> RsiExperimentLoopPlan {
    RsiExperimentLoopPlan {
        phase: phase_for(dashboard.next_action),
        timeout_seconds: DEFAULT_TIMEOUT_SECONDS,
        commit_required: true,
        validation: RsiLoopValidationPlan {
            hidden_holdout_required: dashboard.hidden_validation.required,
            holdout_name: dashboard.hidden_validation.holdout_name.clone(),
            require_observable_metric: true,
        },
        anti_cheat: RsiLoopAntiCheatPlan {
            protected_targets: dashboard.anti_cheat.protected_targets.clone(),
            reject_metric_mutation: true,
        },
        sandbox: RsiLoopSandboxPlan {
            network_blocked: dashboard.sandbox.network_blocked,
            egress_policy: dashboard.sandbox.egress_policy,
            writable_scope: dashboard.sandbox.writable_scope,
            require_fresh_worktree: true,
        },
        cost: RsiLoopCostPlan {
            max_next_iteration_tokens: next_token_cap(dashboard),
            stop_on_budget_exhaustion: true,
        },
        branch_strategy: branch_strategy_for(dashboard.next_action),
    }
}

const fn phase_for(action: RsiExperimentAction) -> RsiExperimentPhase {
    match action {
        RsiExperimentAction::CollectMoreTraces => RsiExperimentPhase::Observe,
        RsiExperimentAction::ContinueExploit => RsiExperimentPhase::Exploit,
        RsiExperimentAction::BranchOut => RsiExperimentPhase::Branch,
    }
}

const fn branch_strategy_for(action: RsiExperimentAction) -> &'static str {
    match action {
        RsiExperimentAction::CollectMoreTraces => "collect_more_hidden_validation_traces",
        RsiExperimentAction::ContinueExploit => "continue_current_best_strategy",
        RsiExperimentAction::BranchOut => "try_orthogonal_strategy_before_more_local_tuning",
    }
}

fn next_token_cap(dashboard: &RsiExperimentDashboard) -> u64 {
    if dashboard.trace_count == 0 {
        return DEFAULT_NEXT_TOKENS;
    }
    let average = dashboard.cost.estimated_tokens / dashboard.trace_count as u64;
    average.saturating_add(DEFAULT_NEXT_TOKENS)
}
