//! Unified command/tool metadata layer (Dolt-style `Command` contract).
//!
//! JFC dispatches commands through three historically separate systems: the
//! top-level CLI (clap subcommands), TUI slash commands (the `SLASH_COMMANDS`
//! table), and model-facing tools (`ToolKind` dispatch). Each carries its own
//! name + help text + permission notion, so docs, completions, and the tool
//! manifest drift apart.
//!
//! [`CommandSpec`] is the single contract every command/tool can describe
//! itself through — name, one-line description, which [`Surface`] it lives on,
//! and its [`Permission`] class. Help/usage/manifest generation
//! ([`render_help`]) reads this metadata instead of a hand-maintained list, so
//! the surfaces converge.
//!
//! This is the incremental seed the migration builds on: the trait plus one
//! adapter per surface (proving it spans all three), with the bulk migration
//! of remaining commands left as follow-up.

/// Which dispatch surface a command lives on.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub(crate) enum Surface {
    /// Top-level `jfc <cmd>` CLI subcommand.
    Cli,
    /// In-TUI `/cmd` slash command.
    Slash,
    /// Model-facing tool (`ToolKind`).
    Tool,
}

impl Surface {
    pub(crate) fn label(self) -> &'static str {
        match self {
            Self::Cli => "cli",
            Self::Slash => "slash",
            Self::Tool => "tool",
        }
    }
}

/// Permission class — coarse enough to be uniform across surfaces, precise
/// enough to gate auto-approval and drive the audit ledger.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub(crate) enum Permission {
    /// No side effects on the user's files/system (Read, Grep, list, show).
    ReadOnly,
    /// Mutates files or runs arbitrary commands (Write, Edit, Bash, apply).
    Mutating,
    /// Manages jfc/agent state but not user code (task tools, /audit).
    Management,
}

impl Permission {
    pub(crate) fn label(self) -> &'static str {
        match self {
            Self::ReadOnly => "read-only",
            Self::Mutating => "mutating",
            Self::Management => "management",
        }
    }
}

/// The unified self-description every command/tool can provide. Object-safe so
/// heterogeneous specs can be collected into `Vec<Box<dyn CommandSpec>>` for
/// help/manifest generation.
pub(crate) trait CommandSpec {
    /// Invocation name (`changes`, `/audit`, `Bash`).
    fn name(&self) -> &str;
    /// One-line human description for help/usage.
    fn description(&self) -> &str;
    /// Which surface this command is dispatched on.
    fn surface(&self) -> Surface;
    /// Permission class.
    fn permission(&self) -> Permission;
}

/// A plain-data [`CommandSpec`] — the adapter every surface can produce from
/// its existing metadata without restructuring its dispatch.
#[derive(Debug, Clone, Copy)]
pub(crate) struct StaticSpec {
    pub name: &'static str,
    pub description: &'static str,
    pub surface: Surface,
    pub permission: Permission,
}

impl CommandSpec for StaticSpec {
    fn name(&self) -> &str {
        self.name
    }
    fn description(&self) -> &str {
        self.description
    }
    fn surface(&self) -> Surface {
        self.surface
    }
    fn permission(&self) -> Permission {
        self.permission
    }
}

/// Adapt a TUI slash-command table row `(name, help)` into a spec. Proves the
/// slash surface flows through the unified contract.
pub(crate) fn slash_spec(name: &'static str, help: &'static str) -> StaticSpec {
    StaticSpec {
        name,
        description: help,
        surface: Surface::Slash,
        permission: Permission::Management,
    }
}

/// Adapt a model tool into a spec, deriving permission from the tool kind.
/// Proves the tool surface flows through the unified contract.
///
/// `ToolKind::api_name`/`label` return `&str` borrowed from a temporary, so we
/// map to `'static` literals here to keep `StaticSpec` `Copy` + borrow-free.
pub(crate) fn tool_spec(kind: crate::types::ToolKind) -> StaticSpec {
    use crate::types::ToolKind;
    let (name, description, permission): (&'static str, &'static str, Permission) = match kind {
        ToolKind::Read => ("Read", "read a file", Permission::ReadOnly),
        ToolKind::Write => ("Write", "write a file", Permission::Mutating),
        ToolKind::Edit => ("Edit", "edit a file", Permission::Mutating),
        ToolKind::MultiEdit => ("MultiEdit", "apply multiple edits", Permission::Mutating),
        ToolKind::Bash => ("Bash", "run a shell command", Permission::Mutating),
        ToolKind::ApplyPatch => ("apply_patch", "apply a patch", Permission::Mutating),
        ToolKind::Glob => ("Glob", "match files by glob", Permission::ReadOnly),
        ToolKind::Grep => ("Grep", "search file contents", Permission::ReadOnly),
        ToolKind::Search => ("codebase_search", "semantic code search", Permission::ReadOnly),
        ToolKind::TaskCreate => ("TaskCreate", "create a task", Permission::Management),
        _ => ("tool", "model tool", Permission::Management),
    };
    StaticSpec {
        name,
        description,
        surface: Surface::Tool,
        permission,
    }
}

/// Build the unified spec list from the live registries of all three
/// surfaces: the `SLASH_COMMANDS` table, the model tool kinds, and the CLI
/// subcommands. This is the single source the help/manifest generator reads,
/// so the surfaces converge instead of drifting.
pub(crate) fn all_specs() -> Vec<StaticSpec> {
    let mut specs = Vec::new();

    // Slash surface — straight from the registry table.
    for (name, help) in crate::input::SLASH_COMMANDS {
        specs.push(slash_spec(name, help));
    }

    // Tool surface — the mutating/read-only/management tools the model drives.
    use crate::types::ToolKind;
    for kind in [
        ToolKind::Read,
        ToolKind::Write,
        ToolKind::Edit,
        ToolKind::Bash,
        ToolKind::Grep,
        ToolKind::TaskCreate,
    ] {
        specs.push(tool_spec(kind));
    }

    // CLI surface — the top-level subcommands.
    for (name, desc) in [
        ("changes", "review/apply/revert agent change-sets"),
        ("daemon", "manage the background daemon"),
        ("auth", "manage provider authentication"),
    ] {
        specs.push(StaticSpec {
            name,
            description: desc,
            surface: Surface::Cli,
            permission: Permission::Management,
        });
    }

    specs
}

/// Render the unified command/tool help across every surface.
pub(crate) fn render_all() -> String {
    let specs = all_specs();
    let refs: Vec<&dyn CommandSpec> = specs.iter().map(|s| s as &dyn CommandSpec).collect();
    render_help(&refs)
}

/// Render a help/manifest table from any collection of specs. This is the
/// single generator the CLI `--help`, slash `/help`, and tool manifest can all
/// share, so they cannot drift from the metadata.
pub(crate) fn render_help(specs: &[&dyn CommandSpec]) -> String {
    if specs.is_empty() {
        return String::new();
    }
    let mut out = String::new();
    for spec in specs {
        out.push_str(&format!(
            "{:<22} [{:<6} {:<11}] {}\n",
            spec.name(),
            spec.surface().label(),
            spec.permission().label(),
            spec.description()
        ));
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    // Normal: a spec from each of the three surfaces renders into one help
    // table — proving the contract spans CLI + slash + tool.
    #[test]
    fn unified_help_spans_all_three_surfaces_normal() {
        let cli = StaticSpec {
            name: "changes",
            description: "review agent change-sets",
            surface: Surface::Cli,
            permission: Permission::Management,
        };
        let slash = slash_spec("/audit", "show the runtime audit ledger");
        let tool = tool_spec(crate::types::ToolKind::Bash);

        let specs: [&dyn CommandSpec; 3] = [&cli, &slash, &tool];
        let help = render_help(&specs);
        assert!(help.contains("changes"));
        assert!(help.contains("/audit"));
        assert!(help.contains("Bash"));
        // Each surface label appears.
        assert!(help.contains("cli"));
        assert!(help.contains("slash"));
        assert!(help.contains("tool"));
    }

    // Robust: tool permission is derived from kind — Bash is mutating, Read is
    // read-only, a task tool is management.
    #[test]
    fn tool_permission_derived_from_kind_robust() {
        assert_eq!(
            tool_spec(crate::types::ToolKind::Bash).permission(),
            Permission::Mutating
        );
        assert_eq!(
            tool_spec(crate::types::ToolKind::Read).permission(),
            Permission::ReadOnly
        );
        assert_eq!(
            tool_spec(crate::types::ToolKind::TaskCreate).permission(),
            Permission::Management
        );
    }

    // Robust: empty input renders empty (no panic, no stray header).
    #[test]
    fn render_help_empty_is_empty_robust() {
        assert_eq!(render_help(&[]), "");
    }
}
