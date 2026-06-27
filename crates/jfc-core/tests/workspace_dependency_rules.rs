#[path = "workspace_dependency_rules/support.rs"]
mod support;

use std::collections::BTreeSet;

use support::{
    ForbiddenDependencyEdge, WorkspaceDependencies, assert_no_forbidden_edges,
    forbidden_edges_except, read_workspace_dependencies,
};

const SDK_ALLOWED_WORKSPACE_DEPS: &[&str] = &["jfc-core"];
const HOST_ALLOWED_WORKSPACE_DEPS: &[&str] = &["jfc-core", "jfc-plugin-sdk"];

#[test]
fn plugin_sdk_depends_only_on_core_when_present() -> Result<(), Box<dyn std::error::Error>> {
    let dependencies = read_workspace_dependencies()?;

    let forbidden_edges = forbidden_edges_except(
        &dependencies,
        "jfc-plugin-sdk",
        SDK_ALLOWED_WORKSPACE_DEPS,
        "jfc-plugin-sdk may depend on jfc-core only among workspace crates",
    );

    assert_no_forbidden_edges(&forbidden_edges);
    Ok(())
}

#[test]
fn plugin_host_depends_only_on_sdk_and_core_when_present() -> Result<(), Box<dyn std::error::Error>>
{
    let dependencies = read_workspace_dependencies()?;

    let forbidden_edges = forbidden_edges_except(
        &dependencies,
        "jfc-plugin-host",
        HOST_ALLOWED_WORKSPACE_DEPS,
        "jfc-plugin-host may depend on jfc-plugin-sdk and jfc-core only among workspace crates",
    );

    assert_no_forbidden_edges(&forbidden_edges);
    Ok(())
}

#[test]
fn dependency_rule_helper_rejects_forbidden_sdk_edge() {
    let dependencies = WorkspaceDependencies::from([(
        "jfc-plugin-sdk".to_owned(),
        BTreeSet::from(["jfc-core".to_owned(), "jfc-engine".to_owned()]),
    )]);

    let forbidden_edges = forbidden_edges_except(
        &dependencies,
        "jfc-plugin-sdk",
        SDK_ALLOWED_WORKSPACE_DEPS,
        "jfc-plugin-sdk may depend on jfc-core only among workspace crates",
    );

    assert_eq!(
        forbidden_edges,
        vec![ForbiddenDependencyEdge {
            from: "jfc-plugin-sdk".to_owned(),
            to: "jfc-engine".to_owned(),
            rule: "jfc-plugin-sdk may depend on jfc-core only among workspace crates",
        }]
    );
}

#[test]
fn dependency_rule_helper_rejects_forbidden_host_edge() {
    let dependencies = WorkspaceDependencies::from([(
        "jfc-plugin-host".to_owned(),
        BTreeSet::from([
            "jfc-core".to_owned(),
            "jfc-plugin-sdk".to_owned(),
            "jfc-engine".to_owned(),
        ]),
    )]);

    let forbidden_edges = forbidden_edges_except(
        &dependencies,
        "jfc-plugin-host",
        HOST_ALLOWED_WORKSPACE_DEPS,
        "jfc-plugin-host may depend on jfc-plugin-sdk and jfc-core only among workspace crates",
    );

    assert_eq!(
        forbidden_edges,
        vec![ForbiddenDependencyEdge {
            from: "jfc-plugin-host".to_owned(),
            to: "jfc-engine".to_owned(),
            rule: "jfc-plugin-host may depend on jfc-plugin-sdk and jfc-core only among workspace crates",
        }]
    );
}
