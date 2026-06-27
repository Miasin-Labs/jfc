use serde::{Deserialize, Serialize};

use crate::{PluginId, descriptor::DescriptorVisibility};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum UiMutationScope {
    InfoSidebar,
    TaskPanel,
    SessionSidebar,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum UiWidgetKind {
    Text,
    Action,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum UiWidgetRefreshKind {
    ProcessBridge,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct UiWidgetRefreshDescriptor {
    pub kind: UiWidgetRefreshKind,
    pub handler: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub min_interval_ms: Option<u64>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub auto_refresh_ms: Option<u64>,
}

impl UiWidgetRefreshDescriptor {
    pub fn process_bridge(handler: impl Into<String>) -> Self {
        Self {
            kind: UiWidgetRefreshKind::ProcessBridge,
            handler: handler.into(),
            min_interval_ms: None,
            auto_refresh_ms: None,
        }
    }

    pub fn with_min_interval_ms(mut self, min_interval_ms: u64) -> Self {
        self.min_interval_ms = Some(min_interval_ms);
        self
    }

    pub fn with_auto_refresh_ms(mut self, auto_refresh_ms: u64) -> Self {
        self.auto_refresh_ms = Some(auto_refresh_ms);
        self
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct UiWidgetDescriptor {
    pub plugin_id: PluginId,
    pub scope: UiMutationScope,
    pub id: String,
    pub label: String,
    pub kind: UiWidgetKind,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub body: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub runtime_action_id: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub refresh: Option<UiWidgetRefreshDescriptor>,
    pub priority: i32,
    pub visibility: DescriptorVisibility,
}

impl UiWidgetDescriptor {
    pub fn new(
        plugin_id: PluginId,
        scope: UiMutationScope,
        id: impl Into<String>,
        label: impl Into<String>,
        kind: UiWidgetKind,
    ) -> Self {
        Self {
            plugin_id,
            scope,
            id: id.into(),
            label: label.into(),
            kind,
            body: None,
            runtime_action_id: None,
            refresh: None,
            priority: 0,
            visibility: DescriptorVisibility::HostVisible,
        }
    }

    pub fn with_body(mut self, body: impl Into<String>) -> Self {
        self.body = Some(body.into());
        self
    }

    pub fn with_runtime_action(mut self, runtime_action_id: impl Into<String>) -> Self {
        self.runtime_action_id = Some(runtime_action_id.into());
        self
    }

    pub fn with_refresh(mut self, refresh: UiWidgetRefreshDescriptor) -> Self {
        self.refresh = Some(refresh);
        self
    }

    pub fn with_priority(mut self, priority: i32) -> Self {
        self.priority = priority;
        self
    }

    pub fn with_visibility(mut self, visibility: DescriptorVisibility) -> Self {
        self.visibility = visibility;
        self
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct BridgeUiWidgetRefreshRequest {
    pub widget_id: String,
    pub scope: UiMutationScope,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub state: Option<serde_json::Value>,
}

impl BridgeUiWidgetRefreshRequest {
    pub fn new(widget_id: impl Into<String>, scope: UiMutationScope) -> Self {
        Self {
            widget_id: widget_id.into(),
            scope,
            state: None,
        }
    }

    pub fn with_state(mut self, state: serde_json::Value) -> Self {
        self.state = Some(state);
        self
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct BridgeUiWidgetRefreshResult {
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub body: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub state: Option<serde_json::Value>,
}

impl BridgeUiWidgetRefreshResult {
    pub fn body(body: impl Into<String>) -> Self {
        Self {
            body: Some(body.into()),
            state: None,
        }
    }

    pub fn with_state(mut self, state: serde_json::Value) -> Self {
        self.state = Some(state);
        self
    }
}
