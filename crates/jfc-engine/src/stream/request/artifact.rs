use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};

use jfc_provider::{Provider, ProviderMessage, StreamOptions};

const RETAINED_REQUESTS: usize = 64;
static REQUEST_SEQUENCE: AtomicU64 = AtomicU64::new(0);

pub(crate) async fn persist_ephemeral_request(
    provider: &dyn Provider,
    messages: &[ProviderMessage],
    options: &StreamOptions,
    kind: &str,
    attempt: u32,
) -> Option<PathBuf> {
    let Some(directory) = request_directory() else {
        return None;
    };
    let request = super::stream_request_snapshot(provider, messages, options);
    match persist_request_in(
        &directory,
        request.as_bytes(),
        provider.name(),
        options.model.as_str(),
        options.session_id.as_deref(),
        kind,
        attempt,
    )
    .await
    {
        Ok(path) => {
            tracing::debug!(
                target: "jfc::stream::request",
                path = %path.display(),
                kind,
                attempt,
                "persisted ephemeral outbound request"
            );
            Some(path)
        }
        Err(error) => {
            tracing::warn!(
                target: "jfc::stream::request",
                error = %error,
                directory = %directory.display(),
                "failed to persist ephemeral outbound request"
            );
            None
        }
    }
}

fn request_directory() -> Option<PathBuf> {
    if let Some(value) = std::env::var_os("JFC_EPHEMERAL_REQUEST_DIR") {
        let value = value.to_string_lossy();
        if matches!(value.as_ref(), "" | "0" | "false" | "off" | "disabled") {
            return None;
        }
        return Some(PathBuf::from(value.as_ref()));
    }
    if cfg!(test) {
        return None;
    }
    dirs::cache_dir().map(|cache| cache.join("jfc/requests/ephemeral"))
}

async fn persist_request_in(
    directory: &Path,
    request: &[u8],
    provider: &str,
    model: &str,
    session_id: Option<&str>,
    kind: &str,
    attempt: u32,
) -> std::io::Result<PathBuf> {
    tokio::fs::create_dir_all(directory).await?;
    set_private_directory_permissions(directory).await?;

    let captured_at = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|duration| duration.as_micros())
        .unwrap_or_default();
    let sequence = REQUEST_SEQUENCE.fetch_add(1, Ordering::Relaxed);
    let filename = format!(
        "ephemeral-{captured_at}-{}-{sequence}-{}-{attempt}-{}-{}-{}.request",
        std::process::id(),
        sanitize_component(kind),
        sanitize_component(provider),
        sanitize_component(model),
        sanitize_component(session_id.unwrap_or("no-session")),
    );
    let path = directory.join(filename);
    crate::atomic_write::write_atomic(&path, request).await?;
    set_private_file_permissions(&path).await?;
    prune_old_requests(directory, RETAINED_REQUESTS).await;
    Ok(path)
}

fn sanitize_component(value: &str) -> String {
    let sanitized = value
        .chars()
        .filter_map(|character| {
            if character.is_ascii_alphanumeric() || matches!(character, '-' | '_') {
                Some(character)
            } else if character == '.' {
                Some('-')
            } else {
                None
            }
        })
        .take(48)
        .collect::<String>();
    if sanitized.is_empty() {
        "unknown".to_owned()
    } else {
        sanitized
    }
}

async fn prune_old_requests(directory: &Path, retain: usize) {
    let Ok(mut entries) = tokio::fs::read_dir(directory).await else {
        return;
    };
    let mut requests = Vec::new();
    while let Ok(Some(entry)) = entries.next_entry().await {
        let path = entry.path();
        if path
            .extension()
            .is_some_and(|extension| extension == "request")
        {
            requests.push(path);
        }
    }
    if requests.len() <= retain {
        return;
    }
    requests.sort_unstable();
    let remove_count = requests.len().saturating_sub(retain);
    for path in requests.into_iter().take(remove_count) {
        let _ = tokio::fs::remove_file(path).await;
    }
}

#[cfg(unix)]
async fn set_private_directory_permissions(path: &Path) -> std::io::Result<()> {
    use std::os::unix::fs::PermissionsExt;
    tokio::fs::set_permissions(path, std::fs::Permissions::from_mode(0o700)).await
}

#[cfg(not(unix))]
async fn set_private_directory_permissions(_path: &Path) -> std::io::Result<()> {
    Ok(())
}

#[cfg(unix)]
async fn set_private_file_permissions(path: &Path) -> std::io::Result<()> {
    use std::os::unix::fs::PermissionsExt;
    tokio::fs::set_permissions(path, std::fs::Permissions::from_mode(0o600)).await
}

#[cfg(not(unix))]
async fn set_private_file_permissions(_path: &Path) -> std::io::Result<()> {
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn request_artifact_is_private_named_and_complete_normal() {
        let directory = tempfile::tempdir().expect("tempdir");
        let payload = br#"{"messages":[{"role":"user","content":"full prompt"}]}"#;

        let path = persist_request_in(
            directory.path(),
            payload,
            "anthropic-oauth",
            "claude-opus-4.8",
            Some("ses/unsafe:id"),
            "stream",
            2,
        )
        .await
        .expect("persist request");

        assert_eq!(tokio::fs::read(&path).await.expect("read request"), payload);
        let filename = path.file_name().unwrap().to_string_lossy();
        assert!(filename.starts_with("ephemeral-"));
        assert!(filename.ends_with(".request"));
        assert!(filename.contains("anthropic-oauth"));
        assert!(filename.contains("claude-opus-4-8"));
        assert!(filename.contains("sesunsafeid"));
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            let mode = tokio::fs::metadata(&path)
                .await
                .expect("metadata")
                .permissions()
                .mode()
                & 0o777;
            assert_eq!(mode, 0o600);
        }
    }

    #[tokio::test]
    async fn request_artifact_retention_removes_oldest_edge() {
        let directory = tempfile::tempdir().expect("tempdir");
        for name in [
            "ephemeral-1.request",
            "ephemeral-2.request",
            "ephemeral-3.request",
        ] {
            tokio::fs::write(directory.path().join(name), name)
                .await
                .expect("seed artifact");
        }

        prune_old_requests(directory.path(), 2).await;

        assert!(!directory.path().join("ephemeral-1.request").exists());
        assert!(directory.path().join("ephemeral-2.request").exists());
        assert!(directory.path().join("ephemeral-3.request").exists());
    }
}
