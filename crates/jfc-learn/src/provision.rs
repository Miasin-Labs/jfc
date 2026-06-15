//! Project provisioning — scaffold runtime config (CLAUDE.md, AGENTS.md) for an
//! uninitialized project from a workspace scan.
//!
//! This is the *content-generation* half (pure + testable). The CLI/first-launch
//! flow that confirms with the user and writes the files is the integration
//! layer; it calls [`scaffold_claude_md`] / [`scaffold_agents_md`] and persists
//! the returned strings. We never overwrite existing config — the caller checks
//! existence first (provisioning is opt-in and user-confirmed because it touches
//! tracked files).
//!
//! Reuses [`crate::arch_graph`] for the crate map rather than re-scanning, so the
//! generated docs reflect the same architecture the diagram does.

use crate::arch_graph::CrateNode;

/// A minimal summary of what was detected about a project, used to fill the
/// scaffolded config. Kept small + serializable-friendly.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ProjectSummary {
    /// Project / workspace name (e.g. the root dir or root Cargo.toml name).
    pub name: String,
    /// Detected primary language/toolchain label (e.g. "Rust workspace").
    pub kind: String,
    /// The workspace crates (for a Rust workspace); empty for non-Rust.
    pub crates: Vec<CrateNode>,
}

/// Build the body of a starter `CLAUDE.md` from a project summary. Includes the
/// project description, a crate inventory (if any), and the standard working
/// rules JFC expects. Deterministic.
pub fn scaffold_claude_md(summary: &ProjectSummary) -> String {
    let mut out = String::new();
    out.push_str(&format!("# {} Project Context\n\n", summary.name));
    out.push_str(&format!(
        "{} is a {}. This file is the canonical shared project instruction \
         file loaded into context.\n\n",
        summary.name, summary.kind
    ));

    if !summary.crates.is_empty() {
        out.push_str("## Workspace Crates\n\n");
        let mut sorted = summary.crates.clone();
        sorted.sort_by(|a, b| a.name.cmp(&b.name));
        for c in &sorted {
            let dep_note = if c.deps.is_empty() {
                String::new()
            } else {
                format!(" — depends on {}", c.deps.join(", "))
            };
            out.push_str(&format!("- `{}`{}\n", c.name, dep_note));
        }
        out.push('\n');
    }

    out.push_str(
        "## Working Rules\n\n\
         - Build and test from the workspace root before handing off changes.\n\
         - Keep edits scoped to the crate that owns the behavior.\n\
         - Prefer structural code tools for navigation and `rg` for literal text.\n\n\
         ## Design Biases\n\n\
         - Architecture beats feature velocity: identify the owner of shared state \
         and the integration path before adding a feature.\n\
         - Avoid god objects; preserve focused ownership boundaries.\n",
    );
    out
}

/// Build the body of a starter `AGENTS.md` (the import/init source many agent
/// tools read) from a project summary.
pub fn scaffold_agents_md(summary: &ProjectSummary) -> String {
    let mut out = String::new();
    out.push_str(&format!("# {}\n\n", summary.name));
    out.push_str(&format!("- Project type: {}.\n", summary.kind));
    if !summary.crates.is_empty() {
        out.push_str(&format!("- Workspace with {} crates.\n", summary.crates.len()));
    }
    out.push_str(
        "- Build/test from the workspace root.\n\
         - Keep modules focused — one responsibility per module.\n\
         - Root `CLAUDE.md` is the canonical shared project instruction file.\n",
    );
    out
}

/// Build a seed `MEMORY.md` index header. The memory store appends pointers to
/// this; provisioning just creates the scaffold if absent.
pub fn scaffold_memory_md(summary: &ProjectSummary) -> String {
    format!(
        "# Project Memory\n\n\
         ## Durable Facts\n\n\
         - {} is a {}.\n\
         - This index is auto-maintained; memory bodies live under the memory store, \
         not inline here.\n",
        summary.name, summary.kind
    )
}

/// Decide which config files are missing and therefore safe to scaffold. The
/// caller supplies which paths already exist; we never propose overwriting one.
/// Returns the list of file stems to create (e.g. ["CLAUDE.md", "AGENTS.md"]).
pub fn files_to_scaffold(exists: &dyn Fn(&str) -> bool) -> Vec<&'static str> {
    ["CLAUDE.md", "AGENTS.md", "MEMORY.md"]
        .into_iter()
        .filter(|f| !exists(f))
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    fn summary() -> ProjectSummary {
        ProjectSummary {
            name: "jfc".into(),
            kind: "Rust workspace".into(),
            crates: vec![
                CrateNode::new("jfc-core", vec![]),
                CrateNode::new("jfc-engine", vec!["jfc-core".into()]),
            ],
        }
    }

    #[test]
    fn scaffold_claude_md_includes_crates_and_rules_normal() {
        let md = scaffold_claude_md(&summary());
        assert!(md.contains("# jfc Project Context"));
        assert!(md.contains("Rust workspace"));
        assert!(md.contains("`jfc-engine`"));
        assert!(md.contains("depends on jfc-core"));
        assert!(md.contains("## Working Rules"));
        assert!(md.contains("## Design Biases"));
    }

    #[test]
    fn scaffold_claude_md_handles_no_crates_robust() {
        let s = ProjectSummary {
            name: "site".into(),
            kind: "Node project".into(),
            crates: vec![],
        };
        let md = scaffold_claude_md(&s);
        assert!(md.contains("# site Project Context"));
        assert!(!md.contains("## Workspace Crates"));
        assert!(md.contains("## Working Rules"));
    }

    #[test]
    fn scaffold_agents_md_reports_crate_count_normal() {
        let md = scaffold_agents_md(&summary());
        assert!(md.contains("# jfc"));
        assert!(md.contains("2 crates"));
    }

    #[test]
    fn scaffold_memory_md_has_index_header_normal() {
        let md = scaffold_memory_md(&summary());
        assert!(md.contains("# Project Memory"));
        assert!(md.contains("jfc is a Rust workspace"));
    }

    #[test]
    fn files_to_scaffold_skips_existing_normal() {
        // CLAUDE.md already exists → only the other two are proposed.
        let to_make = files_to_scaffold(&|f| f == "CLAUDE.md");
        assert_eq!(to_make, vec!["AGENTS.md", "MEMORY.md"]);
    }

    #[test]
    fn files_to_scaffold_all_when_none_exist_robust() {
        let to_make = files_to_scaffold(&|_| false);
        assert_eq!(to_make, vec!["CLAUDE.md", "AGENTS.md", "MEMORY.md"]);
    }

    #[test]
    fn files_to_scaffold_none_when_all_exist_robust() {
        let to_make = files_to_scaffold(&|_| true);
        assert!(to_make.is_empty());
    }
}
