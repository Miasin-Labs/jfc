use serde::{Deserialize, Serialize};

use crate::{DescriptorVisibility, PluginId};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ServiceDescriptorKind {
    McpNamespace,
    McpStatus,
    ToolProcessRegistry,
    ToolFilesystemOperations,
    ToolNotebookOperations,
    PluginStoreCatalog,
    PluginTemplateCatalog,
    PluginInstaller,
    PluginUpdater,
    PluginRemoval,
    PluginDiagnostics,
    PluginSmoke,
}

impl ServiceDescriptorKind {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::McpNamespace => "mcp_namespace",
            Self::McpStatus => "mcp_status",
            Self::ToolProcessRegistry => "tool_process_registry",
            Self::ToolFilesystemOperations => "tool_filesystem_operations",
            Self::ToolNotebookOperations => "tool_notebook_operations",
            Self::PluginStoreCatalog => "plugin_store_catalog",
            Self::PluginTemplateCatalog => "plugin_template_catalog",
            Self::PluginInstaller => "plugin_installer",
            Self::PluginUpdater => "plugin_updater",
            Self::PluginRemoval => "plugin_removal",
            Self::PluginDiagnostics => "plugin_diagnostics",
            Self::PluginSmoke => "plugin_smoke",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ServiceDescriptorStatus {
    Available,
    RuntimeConfigured,
}

impl ServiceDescriptorStatus {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Available => "available",
            Self::RuntimeConfigured => "runtime_configured",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ServiceDescriptor {
    pub plugin_id: PluginId,
    pub kind: ServiceDescriptorKind,
    pub name: String,
    pub namespace: String,
    pub status: ServiceDescriptorStatus,
    pub description: String,
    pub visibility: DescriptorVisibility,
}

impl ServiceDescriptor {
    pub fn new(
        plugin_id: PluginId,
        kind: ServiceDescriptorKind,
        name: impl Into<String>,
        namespace: impl Into<String>,
        description: impl Into<String>,
    ) -> Self {
        Self {
            plugin_id,
            kind,
            name: name.into(),
            namespace: namespace.into(),
            status: ServiceDescriptorStatus::Available,
            description: description.into(),
            visibility: DescriptorVisibility::HostVisible,
        }
    }

    pub fn with_status(mut self, status: ServiceDescriptorStatus) -> Self {
        self.status = status;
        self
    }

    pub fn with_visibility(mut self, visibility: DescriptorVisibility) -> Self {
        self.visibility = visibility;
        self
    }
}
