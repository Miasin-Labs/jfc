//! Accepted-rewrite persistence + decision-drift monitoring.
//!
//! Two durable concerns kept out of the stateless pipeline:
//!
//! 1. **Experience replay** — accepted rewrites are appended to a JSONL log and
//!    reloaded as few-shot exemplars (`with_exemplars`), so the rewriter learns
//!    from prior accepted edits (SPEC §C5).
//! 2. **Drift monitoring** — a lightweight rolling outcome rate that flags when
//!    the gate moves out of its historical distribution (Online Shift Detection
//!    + Conformal Adaptation, arXiv:2606.11949). This is a cheap online check,
//!    not a full conformal predictor — enough to surface "the refusal rate just
//!    tripled" without a model.

use std::collections::VecDeque;
use std::io::Write;
use std::path::{Path, PathBuf};

use crate::error::{AuditError, Result};
use super::types::Rewrite;

/// Append-only store of accepted rewrites, one JSON object per line.
pub struct RewriteStore {
    path: PathBuf,
}

impl RewriteStore {
    pub fn new(path: impl Into<PathBuf>) -> Self {
        Self { path: path.into() }
    }

    /// Append an accepted rewrite. Creates the file/parent dir on first write.
    pub fn append(&self, rewrite: &Rewrite) -> Result<()> {
        if let Some(parent) = self.path.parent() {
            std::fs::create_dir_all(parent).map_err(|e| AuditError::Io {
                source: e,
                context: format!("create_dir_all {}", parent.display()),
            })?;
        }
        let line = serde_json::to_string(rewrite).map_err(|e| AuditError::Serde {
            source: e,
            context: "serialize accepted rewrite".to_string(),
        })?;
        let mut f = std::fs::OpenOptions::new()
            .create(true)
            .append(true)
            .open(&self.path)
            .map_err(|e| AuditError::Io {
                source: e,
                context: format!("open {}", self.path.display()),
            })?;
        writeln!(f, "{line}").map_err(|e| AuditError::Io {
            source: e,
            context: format!("append {}", self.path.display()),
        })?;
        Ok(())
    }

    /// Load up to `limit` most-recent accepted rewrites for few-shot replay.
    /// Malformed lines are skipped (a corrupt line must not poison replay).
    pub fn load_recent(&self, limit: usize) -> Result<Vec<Rewrite>> {
        let text = match std::fs::read_to_string(&self.path) {
            Ok(t) => t,
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => return Ok(Vec::new()),
            Err(e) => {
                return Err(AuditError::Io {
                    source: e,
                    context: format!("read {}", self.path.display()),
                });
            }
        };
        let mut out: Vec<Rewrite> = text
            .lines()
            .rev()
            .filter_map(|l| serde_json::from_str::<Rewrite>(l).ok())
            .take(limit)
            .collect();
        out.reverse();
        Ok(out)
    }

    pub fn path(&self) -> &Path {
        &self.path
    }
}

/// A rolling refusal-rate monitor. Tracks the last `window` decisions and flags
/// when the recent refusal rate diverges from the long-run baseline by more than
/// `tolerance` — a cheap stand-in for a conformal drift detector.
pub struct DriftMonitor {
    window: usize,
    tolerance: f64,
    recent: VecDeque<bool>,
    total: u64,
    refused_total: u64,
}

/// The result of feeding one decision to the monitor.
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum DriftStatus {
    /// Not enough data yet (fewer than `window` samples).
    Warmup,
    /// Recent rate is within tolerance of the baseline.
    Stable,
    /// Recent refusal rate diverged from baseline — out of distribution.
    Drift { recent: f64, baseline: f64 },
}

impl DriftMonitor {
    pub fn new(window: usize, tolerance: f64) -> Self {
        Self {
            window: window.max(1),
            tolerance: tolerance.clamp(0.0, 1.0),
            recent: VecDeque::new(),
            total: 0,
            refused_total: 0,
        }
    }

    /// Record one decision (refused or not) and report drift status.
    pub fn record(&mut self, refused: bool) -> DriftStatus {
        self.total += 1;
        if refused {
            self.refused_total += 1;
        }
        self.recent.push_back(refused);
        if self.recent.len() > self.window {
            self.recent.pop_front();
        }
        if self.recent.len() < self.window {
            return DriftStatus::Warmup;
        }
        let recent_rate =
            self.recent.iter().filter(|&&r| r).count() as f64 / self.recent.len() as f64;
        let baseline = self.refused_total as f64 / self.total as f64;
        if (recent_rate - baseline).abs() > self.tolerance {
            DriftStatus::Drift {
                recent: recent_rate,
                baseline,
            }
        } else {
            DriftStatus::Stable
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use super::super::types::RiskFlag;

    fn rw(text: &str) -> Rewrite {
        Rewrite {
            original_intent: "intent".into(),
            risk_flags: vec![RiskFlag::EvasionPhrasing],
            text: text.into(),
            rationale: "r".into(),
        }
    }

    #[test]
    fn append_and_load_round_trip() {
        let dir = tempfile::tempdir().unwrap();
        let store = RewriteStore::new(dir.path().join("accepted.jsonl"));
        assert!(store.load_recent(10).unwrap().is_empty()); // missing file → empty
        store.append(&rw("first")).unwrap();
        store.append(&rw("second")).unwrap();
        store.append(&rw("third")).unwrap();
        let recent = store.load_recent(2).unwrap();
        assert_eq!(recent.len(), 2);
        // Most-recent-last ordering.
        assert_eq!(recent[0].text, "second");
        assert_eq!(recent[1].text, "third");
    }

    #[test]
    fn malformed_lines_are_skipped() {
        let dir = tempfile::tempdir().unwrap();
        let path = dir.path().join("accepted.jsonl");
        std::fs::write(&path, "not json\n{\"original_intent\":\"i\",\"risk_flags\":[],\"text\":\"ok\",\"rationale\":\"r\"}\n").unwrap();
        let recent = RewriteStore::new(&path).load_recent(10).unwrap();
        assert_eq!(recent.len(), 1);
        assert_eq!(recent[0].text, "ok");
    }

    #[test]
    fn drift_monitor_warmup_then_stable() {
        let mut m = DriftMonitor::new(4, 0.3);
        assert_eq!(m.record(false), DriftStatus::Warmup);
        assert_eq!(m.record(false), DriftStatus::Warmup);
        assert_eq!(m.record(false), DriftStatus::Warmup);
        assert_eq!(m.record(false), DriftStatus::Stable);
    }

    #[test]
    fn drift_monitor_flags_spike() {
        let mut m = DriftMonitor::new(4, 0.3);
        // Baseline accumulates lots of non-refusals…
        for _ in 0..20 {
            m.record(false);
        }
        // …then a burst of refusals in the recent window.
        m.record(true);
        m.record(true);
        m.record(true);
        let DriftStatus::Drift { recent, baseline } = m.record(true) else {
            panic!("expected drift after a refusal spike");
        };
        assert!(recent > baseline);
        assert!((recent - 1.0).abs() < f64::EPSILON);
    }
}
