use std::sync::OnceLock;

use jfc_plugin_host::{PluginHost, PluginHostError, PluginRegistration};
use jfc_plugin_sdk::{
    PluginId, PluginManifest, PluginSource, PluginVersion, ToolApprovalPolicy, ToolDescriptor,
    ToolExecutorKind,
};

use jfc_provider::ToolDef;

use crate::runtime::{ExecutionResult, ToolProvenance, ToolSource};
use crate::types::{ToolInput, ToolKind};

use super::descriptor_builtin_routes::BuiltinToolRoute;
pub(crate) use super::descriptor_builtin_routes::DescriptorExecutionContext;
use super::descriptor_catalog::snapshot_external_tool_descriptors;
use super::descriptor_external_routes::execute_mcp_descriptor_route;
use super::descriptor_filesystem_defs::filesystem_descriptors;
use super::descriptor_process_bridge::execute_process_bridge_descriptor_route;
use super::descriptor_search_defs::search_descriptors;
use super::descriptor_shell_defs::shell_descriptors;

const BUILTIN_TOOLS_PLUGIN_ID: &str = "jfc.builtin.tools";
#[cfg(test)]
pub(crate) use super::descriptor_filesystem_defs::{
    EDIT_HANDLER as EDIT_TOOL_HANDLER, MULTI_EDIT_HANDLER as MULTI_EDIT_TOOL_HANDLER,
    NOTEBOOK_EDIT_HANDLER as NOTEBOOK_EDIT_TOOL_HANDLER,
    NOTEBOOK_READ_HANDLER as NOTEBOOK_READ_TOOL_HANDLER, READ_HANDLER as READ_TOOL_HANDLER,
    WRITE_HANDLER as WRITE_TOOL_HANDLER,
};
#[cfg(test)]
pub(crate) use super::descriptor_search_defs::{
    GLOB_HANDLER as GLOB_TOOL_HANDLER, GREP_HANDLER as GREP_TOOL_HANDLER,
};
#[cfg(test)]
pub(crate) use super::descriptor_shell_defs::{
    BASH_HANDLER as BASH_TOOL_HANDLER, BASH_OUTPUT_HANDLER as BASH_OUTPUT_TOOL_HANDLER,
};

static BUILTIN_TOOL_DESCRIPTORS: OnceLock<Vec<ToolDescriptor>> = OnceLock::new();

#[derive(Debug, Clone, PartialEq, Eq)]
pub(crate) struct ExternalToolPolicy {
    pub(crate) plugin_id: String,
    pub(crate) tool_name: String,
    pub(crate) approval_policy: ToolApprovalPolicy,
}

impl ExternalToolPolicy {
    pub(crate) fn audit_tool_name(&self) -> String {
        format!("{}::{}", self.plugin_id, self.tool_name)
    }

    pub(crate) fn audit_detail(&self, input: &ToolInput) -> String {
        let summary = input.summary();
        if summary.is_empty() {
            format!("plugin={}", self.plugin_id)
        } else {
            format!("plugin={} input={summary}", self.plugin_id)
        }
    }
}

#[cfg(test)]
pub async fn execute_descriptor_tool(
    kind: &ToolKind,
    input: &ToolInput,
    cwd: &std::path::Path,
) -> Option<ExecutionResult> {
    let context = DescriptorExecutionContext::new(cwd, None, None);
    execute_descriptor_tool_with_context(kind, input, context).await
}

pub(crate) async fn execute_descriptor_tool_with_context(
    kind: &ToolKind,
    input: &ToolInput,
    context: DescriptorExecutionContext<'_>,
) -> Option<ExecutionResult> {
    if let Some(route) = BuiltinToolRoute::from_tool(kind, input) {
        let descriptor = descriptor_for_handler(route.handler())?;
        return Some(execute_tool_descriptor(descriptor, kind, input, context).await);
    }

    let descriptor = descriptor_for_external_tool(kind)?;
    let cwd = context.cwd.to_path_buf();
    let result = execute_tool_descriptor(&descriptor, kind, input, context).await;
    Some(result.with_provenance(ToolProvenance {
        cwd,
        source: ToolSource::Plugin {
            plugin_id: descriptor.plugin_id.as_str().to_owned(),
        },
    }))
}

pub(crate) fn external_tool_policy(kind: &ToolKind) -> Option<ExternalToolPolicy> {
    descriptor_for_external_tool(kind).map(|descriptor| ExternalToolPolicy {
        plugin_id: descriptor.plugin_id.as_str().to_owned(),
        tool_name: descriptor.name,
        approval_policy: descriptor.approval_policy,
    })
}

pub(crate) async fn execute_tool_descriptor(
    descriptor: &ToolDescriptor,
    kind: &ToolKind,
    input: &ToolInput,
    context: DescriptorExecutionContext<'_>,
) -> ExecutionResult {
    match descriptor.executor.kind {
        ToolExecutorKind::BuiltIn => {
            execute_builtin_descriptor_tool(descriptor, kind, input, context).await
        }
        ToolExecutorKind::Mcp => execute_mcp_descriptor_route(descriptor, input).await,
        ToolExecutorKind::ProcessBridge => {
            execute_process_bridge_descriptor_route(descriptor, input).await
        }
    }
}

async fn execute_builtin_descriptor_tool(
    descriptor: &ToolDescriptor,
    kind: &ToolKind,
    input: &ToolInput,
    context: DescriptorExecutionContext<'_>,
) -> ExecutionResult {
    let Some(route) = BuiltinToolRoute::from_tool(kind, input) else {
        return ExecutionResult::failure(format!(
            "descriptor `{}` expected built-in handler `{}` but received incompatible input {}",
            descriptor.name,
            descriptor.executor.handler,
            input.summary()
        ));
    };

    if route.handler() != descriptor.executor.handler {
        return ExecutionResult::failure(format!(
            "descriptor `{}` expected built-in handler `{}` but routed to `{}`",
            descriptor.name,
            descriptor.executor.handler,
            route.handler()
        ));
    }

    route.execute(context).await
}

pub fn builtin_tool_descriptors() -> &'static [ToolDescriptor] {
    BUILTIN_TOOL_DESCRIPTORS.get_or_init(load_builtin_tool_descriptors)
}

pub fn builtin_tool_defs() -> Vec<ToolDef> {
    builtin_tool_descriptors()
        .iter()
        .map(|descriptor| ToolDef {
            name: descriptor.name.clone(),
            description: descriptor.description.clone(),
            input_schema: descriptor.input_schema.clone(),
        })
        .collect()
}

pub(crate) fn descriptor_for_handler(handler: &str) -> Option<&'static ToolDescriptor> {
    builtin_tool_descriptors().iter().find(|descriptor| {
        descriptor.executor.kind == ToolExecutorKind::BuiltIn
            && descriptor.executor.handler == handler
    })
}

fn descriptor_for_external_tool(kind: &ToolKind) -> Option<ToolDescriptor> {
    let name = external_tool_name(kind)?;
    snapshot_external_tool_descriptors()
        .into_iter()
        .find(|descriptor| external_descriptor_matches(descriptor, name))
}

fn external_tool_name(kind: &ToolKind) -> Option<&str> {
    match kind {
        ToolKind::Generic(name) | ToolKind::Mcp(name) => Some(name.as_str()),
        ToolKind::UnknownTool { advertised_name } => Some(advertised_name.as_str()),
        _ => None,
    }
}

fn external_descriptor_matches(descriptor: &ToolDescriptor, name: &str) -> bool {
    descriptor.name == name
        || descriptor.executor.handler == name
        || (descriptor.executor.kind == ToolExecutorKind::Mcp && descriptor.name == name)
}

fn load_builtin_tool_descriptors() -> Vec<ToolDescriptor> {
    match builtin_tool_host() {
        Ok(host) => host.tool_descriptors(),
        Err(error) => {
            tracing::warn!(
                target: "jfc::plugin_tools",
                error = %error,
                "failed to activate builtin tool descriptors"
            );
            Vec::new()
        }
    }
}

fn builtin_tool_host() -> Result<PluginHost, PluginHostError> {
    let plugin_id = PluginId::new(BUILTIN_TOOLS_PLUGIN_ID);
    let manifest = PluginManifest::new(
        plugin_id.clone(),
        PluginVersion::new("0.1.0"),
        PluginSource::built_in("jfc-engine"),
    )
    .with_display_name("JFC built-in tools");
    let mut descriptors = shell_descriptors(plugin_id.clone());
    descriptors.extend(search_descriptors(plugin_id.clone()));
    descriptors.extend(filesystem_descriptors(plugin_id));
    let mut host = PluginHost::new();
    host.register_internal(PluginRegistration::new(manifest).with_tool_descriptors(descriptors))?;
    host.activate_all()?;
    Ok(host)
}
