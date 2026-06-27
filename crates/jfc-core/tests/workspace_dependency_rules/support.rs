use std::collections::{BTreeMap, BTreeSet};
use std::path::{Path, PathBuf};
use std::process::Command;

use serde::Deserialize;

#[derive(Debug, Deserialize)]
struct CargoMetadata {
    packages: Vec<CargoPackage>,
    workspace_members: Vec<String>,
}

#[derive(Debug, Deserialize)]
struct CargoPackage {
    name: String,
    id: String,
    dependencies: Vec<CargoDependency>,
}

#[derive(Debug, Deserialize)]
struct CargoDependency {
    name: String,
    kind: Option<String>,
    source: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub(crate) struct ForbiddenDependencyEdge {
    pub(crate) from: String,
    pub(crate) to: String,
    pub(crate) rule: &'static str,
}

pub(crate) type WorkspaceDependencies = BTreeMap<String, BTreeSet<String>>;

pub(crate) fn read_workspace_dependencies()
-> Result<WorkspaceDependencies, Box<dyn std::error::Error>> {
    let output = Command::new("cargo")
        .args(["metadata", "--no-deps", "--format-version=1"])
        .current_dir(workspace_root())
        .output()?;

    assert!(
        output.status.success(),
        "cargo metadata failed with status {:?}\nstdout:\n{}\nstderr:\n{}",
        output.status.code(),
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );

    let metadata: CargoMetadata = serde_json::from_slice(&output.stdout)?;
    Ok(workspace_dependencies(metadata))
}

fn workspace_root() -> PathBuf {
    Path::new(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .and_then(Path::parent)
        .map(Path::to_path_buf)
        .unwrap_or_else(|| PathBuf::from(env!("CARGO_MANIFEST_DIR")))
}

fn workspace_dependencies(metadata: CargoMetadata) -> WorkspaceDependencies {
    let workspace_member_ids = metadata
        .workspace_members
        .into_iter()
        .collect::<BTreeSet<_>>();
    let workspace_package_names = metadata
        .packages
        .iter()
        .filter(|package| workspace_member_ids.contains(&package.id))
        .map(|package| package.name.clone())
        .collect::<BTreeSet<_>>();

    metadata
        .packages
        .into_iter()
        .filter(|package| workspace_member_ids.contains(&package.id))
        .map(|package| {
            let workspace_deps = package
                .dependencies
                .into_iter()
                .filter(|dependency| dependency.kind.is_none())
                .filter(|dependency| dependency.source.is_none())
                .filter(|dependency| workspace_package_names.contains(&dependency.name))
                .map(|dependency| dependency.name)
                .collect::<BTreeSet<_>>();

            (package.name, workspace_deps)
        })
        .collect()
}

pub(crate) fn forbidden_edges_except(
    dependencies: &WorkspaceDependencies,
    package: &str,
    allowed_workspace_deps: &[&str],
    rule: &'static str,
) -> Vec<ForbiddenDependencyEdge> {
    let allowed = allowed_workspace_deps
        .iter()
        .copied()
        .collect::<BTreeSet<_>>();

    dependencies
        .get(package)
        .into_iter()
        .flat_map(|deps| deps.iter())
        .filter(|dependency| !allowed.contains(dependency.as_str()))
        .map(|dependency| ForbiddenDependencyEdge {
            from: package.to_owned(),
            to: dependency.clone(),
            rule,
        })
        .collect()
}

pub(crate) fn assert_no_forbidden_edges(forbidden_edges: &[ForbiddenDependencyEdge]) {
    assert!(
        forbidden_edges.is_empty(),
        "forbidden workspace dependency edges: {forbidden_edges:#?}"
    );
}
