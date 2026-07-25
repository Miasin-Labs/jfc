use jfc_core::mcp_elicitation::{
    ElicitationEvent, ElicitationKind, ElicitationResponse, ElicitationSnapshot, push,
    send_elicitation_event,
};
use rmcp::ClientHandler;
use rmcp::model::{
    ClientCapabilities, ClientInfo, CreateElicitationRequestParams, CreateElicitationResult,
    ElicitationAction, ElicitationCapability, ElicitationResponseNotificationParam,
    FormElicitationCapability, Implementation, ListRootsResult, Root, RootsCapabilities,
    UrlElicitationCapability,
};
use rmcp::service::{NotificationContext, RequestContext, RoleClient};
use std::path::{Path, PathBuf};
use std::sync::Arc;
use tokio::sync::RwLock;

pub(super) type RootStore = Arc<RwLock<Vec<Root>>>;

#[derive(Clone)]
pub(super) struct JfcClientHandler {
    server_name: String,
    roots: RootStore,
}

impl JfcClientHandler {
    pub(super) fn new(server_name: String, roots: RootStore) -> Self {
        Self { server_name, roots }
    }
}

impl ClientHandler for JfcClientHandler {
    async fn list_roots(
        &self,
        _context: RequestContext<RoleClient>,
    ) -> Result<ListRootsResult, rmcp::ErrorData> {
        Ok(ListRootsResult::new(self.roots.read().await.clone()))
    }

    async fn on_tool_list_changed(&self, _ctx: NotificationContext<RoleClient>) {
        crate::registry::request_refresh();
        linkscope::record_items("mcp.notifications.tools_list_changed", 1);
        tracing::info!(
            target: "jfc::mcp",
            server = %self.server_name,
            "received notifications/tools/list_changed — registry refresh requested"
        );
    }

    async fn create_elicitation(
        &self,
        request: CreateElicitationRequestParams,
        _context: RequestContext<RoleClient>,
    ) -> Result<CreateElicitationResult, rmcp::ErrorData> {
        let kind = elicitation_kind(&request);
        let mode = kind.label().to_owned();
        linkscope::record_items("mcp.elicitation.create", 1);
        tracing::info!(
            target: "jfc::mcp::elicitation",
            server = %self.server_name,
            mode = %mode,
            "received elicitation/create"
        );

        let (id, rx) = push(self.server_name.clone(), kind.clone());
        send_elicitation_event(ElicitationEvent::Arrived(ElicitationSnapshot {
            id: id.clone(),
            server_name: self.server_name.clone(),
            kind,
        }));

        let response = rx.await.unwrap_or(ElicitationResponse::Cancel);
        let action_label = match &response {
            ElicitationResponse::Accept { .. } => "accept",
            ElicitationResponse::Decline => "decline",
            ElicitationResponse::Cancel => "cancel",
        };
        linkscope::record_items("mcp.elicitation.resolved", 1);
        tracing::info!(
            target: "jfc::mcp::elicitation",
            server = %self.server_name,
            action = %action_label,
            "elicitation resolved"
        );

        send_elicitation_event(ElicitationEvent::Resolved {
            id: id.clone(),
            server_name: self.server_name.clone(),
            mode,
            action: action_label.to_owned(),
        });

        Ok(match response {
            ElicitationResponse::Accept { content } => CreateElicitationResult {
                action: ElicitationAction::Accept,
                content: Some(content),
                meta: None,
            },
            ElicitationResponse::Decline => CreateElicitationResult {
                action: ElicitationAction::Decline,
                content: None,
                meta: None,
            },
            ElicitationResponse::Cancel => CreateElicitationResult {
                action: ElicitationAction::Cancel,
                content: None,
                meta: None,
            },
        })
    }

    async fn on_url_elicitation_notification_complete(
        &self,
        params: ElicitationResponseNotificationParam,
        _context: NotificationContext<RoleClient>,
    ) {
        linkscope::record_items("mcp.elicitation.complete_notification", 1);
        tracing::info!(
            target: "jfc::mcp::elicitation",
            server = %self.server_name,
            elicitation_id = %params.elicitation_id,
            "received notifications/elicitation/complete"
        );
        let resolved = jfc_core::mcp_elicitation::resolve_by_elicitation_id(
            &params.elicitation_id,
            jfc_core::mcp_elicitation::ElicitationResponse::Accept {
                content: serde_json::Value::Object(Default::default()),
            },
        );
        if !resolved {
            tracing::debug!(
                target: "jfc::mcp::elicitation",
                server = %self.server_name,
                elicitation_id = %params.elicitation_id,
                "elicitation/complete notification for unknown or already-resolved elicitation"
            );
        }
    }

    fn get_info(&self) -> ClientInfo {
        let mut caps = ClientCapabilities::default();
        caps.roots = Some(RootsCapabilities {
            list_changed: Some(true),
        });
        caps.elicitation = Some(ElicitationCapability {
            form: Some(FormElicitationCapability {
                schema_validation: Some(true),
            }),
            url: Some(UrlElicitationCapability {}),
        });
        ClientInfo::new(caps, Implementation::new("jfc", env!("CARGO_PKG_VERSION")))
    }
}

pub(super) fn root_store(paths: &[PathBuf]) -> RootStore {
    Arc::new(RwLock::new(paths.iter().filter_map(|path| root(path)).collect()))
}

pub(super) fn roots(paths: &[PathBuf]) -> Vec<Root> {
    paths.iter().filter_map(|path| root(path)).collect()
}

fn root(path: &Path) -> Option<Root> {
    let absolute = if path.is_absolute() {
        path.to_path_buf()
    } else {
        std::env::current_dir().ok()?.join(path)
    };
    let uri = url::Url::from_directory_path(&absolute).ok()?.to_string();
    let name = absolute
        .file_name()
        .and_then(|name| name.to_str())
        .filter(|name| !name.is_empty());
    Some(match name {
        Some(name) => Root::new(uri).with_name(name),
        None => Root::new(uri),
    })
}

fn elicitation_kind(request: &CreateElicitationRequestParams) -> ElicitationKind {
    match request {
        CreateElicitationRequestParams::FormElicitationParams {
            message,
            requested_schema,
            ..
        } => {
            let schema = serde_json::to_value(requested_schema)
                .unwrap_or_else(|_| serde_json::Value::Object(Default::default()));
            ElicitationKind::Form {
                message: message.clone(),
                schema,
            }
        }
        CreateElicitationRequestParams::UrlElicitationParams {
            message,
            url,
            elicitation_id,
            ..
        } => ElicitationKind::Url {
            message: message.clone(),
            url: url.clone(),
            elicitation_id: elicitation_id.clone(),
        },
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn roots_are_file_uris_with_names_regression() {
        let roots = roots(&[PathBuf::from("/tmp/jfc workspace")]);
        assert_eq!(roots.len(), 1);
        assert_eq!(roots[0].uri, "file:///tmp/jfc%20workspace/");
        assert_eq!(roots[0].name.as_deref(), Some("jfc workspace"));
    }
}
