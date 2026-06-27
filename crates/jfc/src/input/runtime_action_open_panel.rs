use crate::app::App;
use crate::runtime::EngineEvent;
use jfc_plugin_sdk::{
    RuntimeActionDescriptor, RuntimeActionOpenPanelTarget, RuntimeActionPayloadError,
};
use tokio::sync::mpsc;

use super::runtime_action_panels::focus_info_sidebar_panel;
use super::runtime_action_refresh::{
    refresh_focused_panel_snapshot, refresh_focused_widget_snapshot,
};
use super::runtime_action_widgets::focus_info_sidebar_widget;

#[derive(Clone, Copy, Debug, Eq, PartialEq)]
struct OpenPanelAction {
    target: RuntimeActionOpenPanelTarget,
    execute_panel_action: bool,
    execute_widget_action: bool,
}

impl OpenPanelAction {
    fn parse(action: &RuntimeActionDescriptor) -> Result<Self, RuntimeActionPayloadError> {
        let payload = action.open_panel_payload()?;
        Ok(Self {
            target: payload.target,
            execute_panel_action: payload.execute_panel_action,
            execute_widget_action: payload.execute_widget_action,
        })
    }
}

pub(super) async fn execute_open_panel_action(
    app: &mut App,
    action: &RuntimeActionDescriptor,
    tx: &mpsc::Sender<EngineEvent>,
) {
    let Some(open_panel) = parse_open_panel_action(action) else {
        return;
    };
    let navigation_action = execute_open_panel_navigation(app, action, open_panel).await;
    if let Some(navigation_action) = navigation_action.as_ref() {
        if open_panel.execute_panel_action || open_panel.execute_widget_action {
            super::runtime_action_router::execute_nested_runtime_action(app, navigation_action, tx)
                .await;
        }
    }
    if open_panel.execute_widget_action {
        let _ = refresh_focused_widget_snapshot(app).await;
    }
    if open_panel.execute_panel_action {
        let _ = refresh_focused_panel_snapshot(app).await;
    }
}

pub(super) async fn open_panel_navigation(
    app: &mut App,
    action: &RuntimeActionDescriptor,
) -> Option<RuntimeActionDescriptor> {
    let open_panel = parse_open_panel_action(action)?;
    execute_open_panel_navigation(app, action, open_panel).await
}

async fn execute_open_panel_navigation(
    app: &mut App,
    action: &RuntimeActionDescriptor,
    open_panel: OpenPanelAction,
) -> Option<RuntimeActionDescriptor> {
    match open_panel.target {
        RuntimeActionOpenPanelTarget::InfoSidebar => {
            app.info_sidebar.visible = true;
            focus_info_sidebar_panel(app, action).or_else(|| focus_info_sidebar_widget(app, action))
        }
        RuntimeActionOpenPanelTarget::SessionsSidebar => {
            if !app.session_sidebar.visible {
                super::host_palette_action::toggle_sessions_sidebar(app).await;
            }
            None
        }
        RuntimeActionOpenPanelTarget::ModelPicker => {
            super::host_palette_action::execute_host_palette_action(
                app,
                super::host_palette_action::HostPaletteAction::OpenModelPicker,
            )
            .await;
            None
        }
        RuntimeActionOpenPanelTarget::ThemePicker => {
            super::host_palette_action::execute_host_palette_action(
                app,
                super::host_palette_action::HostPaletteAction::OpenThemePicker,
            )
            .await;
            None
        }
    }
}

fn parse_open_panel_action(action: &RuntimeActionDescriptor) -> Option<OpenPanelAction> {
    match OpenPanelAction::parse(action) {
        Ok(open_panel) => Some(open_panel),
        Err(RuntimeActionPayloadError::MissingOpenPanel) => {
            tracing::warn!(
                target: "jfc::palette",
                plugin = action.plugin_id.as_str(),
                action = action.id.as_str(),
                key = "panel",
                "runtime action is missing required payload field"
            );
            None
        }
        Err(RuntimeActionPayloadError::UnsupportedOpenPanelTarget) => {
            tracing::warn!(
                target: "jfc::palette",
                plugin = action.plugin_id.as_str(),
                action = action.id.as_str(),
                panel = action.payload_text("panel").unwrap_or_default(),
                "unknown runtime-action panel target"
            );
            None
        }
        Err(error) => {
            tracing::warn!(
                target: "jfc::palette",
                plugin = action.plugin_id.as_str(),
                action = action.id.as_str(),
                reason = error.as_manifest_reason(),
                "invalid runtime-action OpenPanel payload"
            );
            None
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use jfc_plugin_sdk::{PluginId, RuntimeActionKind};

    #[test]
    fn open_panel_action_parse_accepts_info_alias_and_flags_normal() {
        let action = RuntimeActionDescriptor::new(
            PluginId::new("plugin.palette"),
            "panel.open",
            "Open Panel",
            "Open an info panel",
            RuntimeActionKind::OpenPanel,
        )
        .with_payload(serde_json::json!({
            "panel": "right_sidebar",
            "execute_panel_action": true,
            "execute_widget_action": false
        }));

        let open_panel = OpenPanelAction::parse(&action).expect("known panel");

        assert_eq!(open_panel.target, RuntimeActionOpenPanelTarget::InfoSidebar);
        assert!(open_panel.execute_panel_action);
        assert!(!open_panel.execute_widget_action);
    }

    #[test]
    fn open_panel_action_parse_rejects_unknown_panel_robust() {
        let action = RuntimeActionDescriptor::new(
            PluginId::new("plugin.palette"),
            "panel.open",
            "Open Panel",
            "Open an info panel",
            RuntimeActionKind::OpenPanel,
        )
        .with_payload(serde_json::json!({ "panel": "floating_debugger" }));

        assert_eq!(
            OpenPanelAction::parse(&action),
            Err(RuntimeActionPayloadError::UnsupportedOpenPanelTarget)
        );
    }

    #[test]
    fn open_panel_action_parse_rejects_missing_panel_robust() {
        let action = RuntimeActionDescriptor::new(
            PluginId::new("plugin.palette"),
            "panel.open",
            "Open Panel",
            "Open an info panel",
            RuntimeActionKind::OpenPanel,
        );

        assert_eq!(
            OpenPanelAction::parse(&action),
            Err(RuntimeActionPayloadError::MissingOpenPanel)
        );
    }
}
