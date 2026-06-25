use serde_json::json;

use super::RsiLoopSandboxPlan;

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiSandboxExecutionMode {
    #[default]
    InProcessCurator,
    ExternalWorker,
}

impl RsiSandboxExecutionMode {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::InProcessCurator => "in_process_curator",
            Self::ExternalWorker => "external_worker",
        }
    }
}

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum RsiSandboxEnforcementStatus {
    #[default]
    Blocked,
    InProcessOnly,
    KernelEnforced,
}

impl RsiSandboxEnforcementStatus {
    pub const fn slug(self) -> &'static str {
        match self {
            Self::Blocked => "blocked",
            Self::InProcessOnly => "in_process_only",
            Self::KernelEnforced => "kernel_enforced",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RsiSandboxEnforcement {
    pub status: RsiSandboxEnforcementStatus,
    pub execution_mode: RsiSandboxExecutionMode,
    pub kernel_enforced: bool,
    pub kernel_backend: &'static str,
    pub egress_isolated: bool,
    pub network_blocked: bool,
    pub egress_policy: &'static str,
    pub writable_scope: &'static str,
    pub require_fresh_worktree: bool,
    pub reasons: Vec<&'static str>,
}

impl RsiSandboxEnforcement {
    pub fn in_process(plan: &RsiLoopSandboxPlan) -> Self {
        let reasons = policy_reasons(plan);
        let status = if reasons.is_empty() {
            RsiSandboxEnforcementStatus::InProcessOnly
        } else {
            RsiSandboxEnforcementStatus::Blocked
        };
        Self {
            status,
            execution_mode: RsiSandboxExecutionMode::InProcessCurator,
            kernel_enforced: false,
            kernel_backend: "none",
            egress_isolated: false,
            network_blocked: plan.network_blocked,
            egress_policy: plan.egress_policy,
            writable_scope: plan.writable_scope,
            require_fresh_worktree: plan.require_fresh_worktree,
            reasons,
        }
    }

    pub fn external_worker(plan: &RsiLoopSandboxPlan, kernel_enforced: bool) -> Self {
        let mut reasons = policy_reasons(plan);
        if !kernel_enforced {
            reasons.push("kernel_sandbox_receipt_missing");
        }
        let status = if reasons.is_empty() {
            RsiSandboxEnforcementStatus::KernelEnforced
        } else {
            RsiSandboxEnforcementStatus::Blocked
        };
        Self {
            status,
            execution_mode: RsiSandboxExecutionMode::ExternalWorker,
            kernel_enforced,
            kernel_backend: if kernel_enforced {
                "kernel_receipt"
            } else {
                "none"
            },
            egress_isolated: kernel_enforced,
            network_blocked: plan.network_blocked,
            egress_policy: plan.egress_policy,
            writable_scope: plan.writable_scope,
            require_fresh_worktree: plan.require_fresh_worktree,
            reasons,
        }
    }

    pub fn bubblewrap_worker(
        plan: &RsiLoopSandboxPlan,
        bwrap_available: bool,
        unshare_net: bool,
    ) -> Self {
        let mut reasons = policy_reasons(plan);
        if !bwrap_available {
            reasons.push("bubblewrap_unavailable");
        }
        if !unshare_net {
            reasons.push("bubblewrap_unshare_net_missing");
        }
        let status = if reasons.is_empty() {
            RsiSandboxEnforcementStatus::KernelEnforced
        } else {
            RsiSandboxEnforcementStatus::Blocked
        };
        Self {
            status,
            execution_mode: RsiSandboxExecutionMode::ExternalWorker,
            kernel_enforced: status == RsiSandboxEnforcementStatus::KernelEnforced,
            kernel_backend: "bubblewrap_unshare_net",
            egress_isolated: status == RsiSandboxEnforcementStatus::KernelEnforced,
            network_blocked: plan.network_blocked,
            egress_policy: plan.egress_policy,
            writable_scope: plan.writable_scope,
            require_fresh_worktree: plan.require_fresh_worktree,
            reasons,
        }
    }

    pub const fn allows_mutation(&self) -> bool {
        matches!(
            self.status,
            RsiSandboxEnforcementStatus::InProcessOnly
                | RsiSandboxEnforcementStatus::KernelEnforced
        )
    }

    pub fn to_metadata(&self) -> serde_json::Value {
        json!({
            "status": self.status.slug(),
            "execution_mode": self.execution_mode.slug(),
            "kernel_enforced": self.kernel_enforced,
            "kernel_backend": self.kernel_backend,
            "egress_isolated": self.egress_isolated,
            "network_blocked": self.network_blocked,
            "egress_policy": self.egress_policy,
            "writable_scope": self.writable_scope,
            "require_fresh_worktree": self.require_fresh_worktree,
            "reasons": self.reasons,
        })
    }
}

impl Default for RsiSandboxEnforcement {
    fn default() -> Self {
        Self::in_process(&RsiLoopSandboxPlan::default())
    }
}

fn policy_reasons(plan: &RsiLoopSandboxPlan) -> Vec<&'static str> {
    let mut reasons = Vec::new();
    if !plan.network_blocked {
        reasons.push("sandbox_network_not_blocked");
    }
    if plan.egress_policy != "deny_by_default" {
        reasons.push("sandbox_egress_not_deny_by_default");
    }
    if plan.writable_scope != "project_worktree_only" {
        reasons.push("sandbox_writable_scope_too_broad");
    }
    if !plan.require_fresh_worktree {
        reasons.push("sandbox_fresh_worktree_missing");
    }
    reasons
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::rsi_curator::RsiLoopSandboxPlan;

    #[test]
    fn in_process_curator_is_allowed_without_kernel_receipt_normal() {
        let sandbox = RsiSandboxEnforcement::in_process(&RsiLoopSandboxPlan::default());

        assert_eq!(sandbox.status, RsiSandboxEnforcementStatus::InProcessOnly);
        assert_eq!(
            sandbox.execution_mode,
            RsiSandboxExecutionMode::InProcessCurator
        );
        assert!(!sandbox.kernel_enforced);
        assert!(sandbox.allows_mutation());
    }

    #[test]
    fn external_worker_without_kernel_receipt_is_blocked_robust() {
        let sandbox = RsiSandboxEnforcement::external_worker(&RsiLoopSandboxPlan::default(), false);

        assert_eq!(sandbox.status, RsiSandboxEnforcementStatus::Blocked);
        assert_eq!(
            sandbox.execution_mode,
            RsiSandboxExecutionMode::ExternalWorker
        );
        assert!(!sandbox.allows_mutation());
        assert!(sandbox.reasons.contains(&"kernel_sandbox_receipt_missing"));
    }

    #[test]
    fn bubblewrap_worker_with_unshare_net_is_kernel_enforced_normal() {
        let sandbox =
            RsiSandboxEnforcement::bubblewrap_worker(&RsiLoopSandboxPlan::default(), true, true);

        assert_eq!(sandbox.status, RsiSandboxEnforcementStatus::KernelEnforced);
        assert_eq!(sandbox.kernel_backend, "bubblewrap_unshare_net");
        assert!(sandbox.egress_isolated);
        assert!(sandbox.allows_mutation());
    }

    #[test]
    fn bubblewrap_worker_without_unshare_net_is_blocked_robust() {
        let sandbox =
            RsiSandboxEnforcement::bubblewrap_worker(&RsiLoopSandboxPlan::default(), true, false);

        assert_eq!(sandbox.status, RsiSandboxEnforcementStatus::Blocked);
        assert!(!sandbox.egress_isolated);
        assert!(sandbox.reasons.contains(&"bubblewrap_unshare_net_missing"));
    }
}
