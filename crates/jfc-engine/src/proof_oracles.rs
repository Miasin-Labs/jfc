//! Deterministic proof oracles for auto-review.
//!
//! Before an LLM reviews changed code, run cheap, deterministic checks
//! (`cargo test`, `cargo clippy`) and capture their *observed* outcome. The
//! findings are attached to the review prompt so the model reviews with real
//! compiler/test evidence in hand instead of guessing whether the code builds
//! or passes — the "route findings to deterministic oracles, then LLM review
//! only with those findings attached" shape.
//!
//! These are *observed results*, not proofs of correctness: a flaky test or a
//! cwd-dependent check can vary between runs. A finding records the oracle, the
//! exit outcome, and a short captured summary — never a reproducibility claim.
//!
//! Scope: `cargo test` and `cargo clippy` are the deterministic, fast,
//! always-available oracles. miri / sanitizer / fuzz-replay are deliberately
//! out of scope here — they are slow, frequently unconfigured, and produce
//! flaky findings; they would attach as additional [`ProofOracle`] variants
//! when a project opts into them.

use std::path::{Path, PathBuf};
use std::process::Stdio;
use std::time::Duration;

use serde::{Deserialize, Serialize};

/// A deterministic check that can be run against a changed worktree.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ProofOracle {
    /// `cargo test` — workspace test suite.
    CargoTest,
    /// `cargo clippy` — lint pass (treats warnings as findings, not failures).
    CargoClippy,
}

impl ProofOracle {
    pub fn name(self) -> &'static str {
        match self {
            ProofOracle::CargoTest => "cargo test",
            ProofOracle::CargoClippy => "cargo clippy",
        }
    }

    fn program_and_args(self) -> (&'static str, &'static [&'static str]) {
        match self {
            ProofOracle::CargoTest => ("cargo", &["test", "--workspace", "--quiet"]),
            ProofOracle::CargoClippy => {
                ("cargo", &["clippy", "--workspace", "--quiet", "--message-format=short"])
            }
        }
    }
}

/// The observed outcome of running one oracle.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct OracleFinding {
    pub oracle: String,
    /// True when the command exited 0.
    pub passed: bool,
    /// Whether the oracle ran at all (false = binary missing / spawn failure /
    /// timeout — recorded so the model knows the check was inconclusive rather
    /// than passing).
    pub ran: bool,
    /// Short captured evidence: the most relevant tail lines of output, or the
    /// reason the oracle did not run.
    pub summary: String,
}

impl OracleFinding {
    fn not_run(oracle: ProofOracle, reason: impl Into<String>) -> Self {
        Self {
            oracle: oracle.name().to_owned(),
            passed: false,
            ran: false,
            summary: reason.into(),
        }
    }
}

/// How long any single oracle may run before it is abandoned as inconclusive.
const ORACLE_TIMEOUT: Duration = Duration::from_secs(300);
/// Max characters of captured output kept per finding.
const MAX_SUMMARY_CHARS: usize = 2_000;

/// Run a single oracle in `cwd`, returning its observed finding. Never panics
/// or propagates an error: spawn/timeout failures become `ran: false` findings
/// so the review always gets a complete, attributable picture.
pub async fn run_oracle(oracle: ProofOracle, cwd: &Path) -> OracleFinding {
    let (program, args) = oracle.program_and_args();
    let mut cmd = tokio::process::Command::new(program);
    cmd.args(args)
        .current_dir(cwd)
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .kill_on_drop(true);

    let child = match cmd.spawn() {
        Ok(child) => child,
        Err(e) => return OracleFinding::not_run(oracle, format!("could not spawn {program}: {e}")),
    };

    let output = match tokio::time::timeout(ORACLE_TIMEOUT, child.wait_with_output()).await {
        Ok(Ok(output)) => output,
        Ok(Err(e)) => return OracleFinding::not_run(oracle, format!("{program} failed: {e}")),
        Err(_) => {
            return OracleFinding::not_run(
                oracle,
                format!("{} timed out after {}s", oracle.name(), ORACLE_TIMEOUT.as_secs()),
            );
        }
    };

    let passed = output.status.success();
    let summary = summarize_output(&output.stdout, &output.stderr, passed);
    OracleFinding {
        oracle: oracle.name().to_owned(),
        passed,
        ran: true,
        summary,
    }
}

/// Run every oracle and collect findings. Oracles run sequentially because they
/// contend on the same `target/` build lock — parallel cargo invocations would
/// serialize behind that lock anyway and risk corrupting each other's output.
pub async fn run_all(cwd: &Path) -> Vec<OracleFinding> {
    let mut findings = Vec::new();
    for oracle in [ProofOracle::CargoTest, ProofOracle::CargoClippy] {
        findings.push(run_oracle(oracle, cwd).await);
    }
    findings
}

/// Render findings as a prompt-attachable block the review workflow injects so
/// the LLM reviews with the deterministic evidence in hand. Returns an empty
/// string for no findings.
pub fn render_findings_block(findings: &[OracleFinding]) -> String {
    if findings.is_empty() {
        return String::new();
    }
    let mut out = String::from(
        "Deterministic proof-oracle results (observed; not a reproducibility \
         claim). Weight failing oracles heavily and reconcile your findings \
         with them:\n",
    );
    for finding in findings {
        let status = if !finding.ran {
            "did not run"
        } else if finding.passed {
            "passed"
        } else {
            "FAILED"
        };
        out.push_str(&format!("\n- {} — {status}\n", finding.oracle));
        if !finding.summary.is_empty() {
            out.push_str(&format!("  {}\n", finding.summary.replace('\n', "\n  ")));
        }
    }
    out
}

/// Keep the last `MAX_SUMMARY_CHARS` of the most relevant stream. On failure
/// the tail of stderr (cargo errors land there) is the signal; on success a
/// short stdout tail confirms what ran.
fn summarize_output(stdout: &[u8], stderr: &[u8], passed: bool) -> String {
    let primary = if passed { stdout } else { stderr };
    let text = String::from_utf8_lossy(primary);
    let trimmed = text.trim();
    let body = if trimmed.is_empty() {
        // Fall back to the other stream if the primary was empty.
        let other = String::from_utf8_lossy(if passed { stderr } else { stdout });
        other.trim().to_owned()
    } else {
        trimmed.to_owned()
    };
    tail_chars(&body, MAX_SUMMARY_CHARS)
}

fn tail_chars(text: &str, max: usize) -> String {
    let count = text.chars().count();
    if count <= max {
        return text.to_owned();
    }
    let start = count - max;
    let tail: String = text.chars().skip(start).collect();
    format!("...[{} earlier chars omitted]\n{tail}", start)
}

/// Whether the project at `cwd` is a cargo workspace (so the cargo oracles are
/// applicable). Cheap existence check — avoids spawning cargo in a non-Rust
/// project.
pub fn is_cargo_project(cwd: &Path) -> bool {
    PathBuf::from(cwd).join("Cargo.toml").exists()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn render_block_is_empty_for_no_findings_normal() {
        assert_eq!(render_findings_block(&[]), "");
    }

    // Normal: a passing and a failing finding both render with their status and
    // the failing one is marked FAILED so the model weights it.
    #[test]
    fn render_block_marks_pass_and_fail_normal() {
        let findings = vec![
            OracleFinding {
                oracle: "cargo test".into(),
                passed: true,
                ran: true,
                summary: "test result: ok. 10 passed".into(),
            },
            OracleFinding {
                oracle: "cargo clippy".into(),
                passed: false,
                ran: true,
                summary: "error: unused variable `x`".into(),
            },
        ];
        let block = render_findings_block(&findings);
        assert!(block.contains("cargo test — passed"));
        assert!(block.contains("cargo clippy — FAILED"));
        assert!(block.contains("unused variable"));
    }

    // Robust: an oracle that did not run is rendered as 'did not run' (not a
    // silent pass), so the model knows the check was inconclusive.
    #[test]
    fn render_block_marks_not_run_robust() {
        let findings = vec![OracleFinding::not_run(
            ProofOracle::CargoTest,
            "could not spawn cargo: not found",
        )];
        let block = render_findings_block(&findings);
        assert!(block.contains("cargo test — did not run"));
        assert!(block.contains("not found"));
    }

    // Normal: tail_chars keeps the tail and notes the elision.
    #[test]
    fn tail_chars_keeps_tail_normal() {
        let text: String = (0..100).map(|i| char::from(b'a' + (i % 26) as u8)).collect();
        let tailed = tail_chars(&text, 10);
        assert!(tailed.contains("earlier chars omitted"));
        assert!(tailed.ends_with(&text[text.len() - 10..]));
    }

    // Robust: running a real oracle against a non-cargo dir yields a ran=false
    // finding (cargo errors out), never a panic — proves the runner is
    // failure-safe end to end with a real subprocess.
    #[tokio::test]
    async fn run_oracle_in_non_cargo_dir_is_failure_safe_robust() {
        let tmp = std::env::temp_dir().join(format!("jfc-oracle-test-{}", std::process::id()));
        let _ = tokio::fs::create_dir_all(&tmp).await;
        assert!(!is_cargo_project(&tmp));
        let finding = run_oracle(ProofOracle::CargoClippy, &tmp).await;
        // Either cargo isn't found (ran=false) or it errors out (passed=false);
        // in no case does the oracle report a passing check for a non-project.
        assert!(!finding.passed);
        assert_eq!(finding.oracle, "cargo clippy");
        let _ = tokio::fs::remove_dir_all(&tmp).await;
    }
}
