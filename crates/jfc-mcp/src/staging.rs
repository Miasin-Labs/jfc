//! File staging for programmatic MCP calls.
//!
//! The model-facing tool schema remains the server's schema. Callers that own
//! a synchronized file lane can opt into this wrapper and use exact
//! `{{in:NAME}}` / `{{out:NAME}}` string values in arguments. The server only
//! sees private, per-call paths and never receives lane paths directly.

use std::collections::{HashMap, HashSet};
use std::io::{Read, Write};
use std::path::{Component, Path, PathBuf};
use std::sync::{Arc, Mutex, OnceLock, Weak};
use std::time::Duration;

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use sha2::{Digest, Sha256};
use tokio_util::sync::CancellationToken;

use crate::{DispatchError, McpRegistry, RequestError, ToolCallOutcome};

const MAX_FILES: usize = 64;
const MAX_FILE_BYTES: u64 = 25 * 1024 * 1024;
const DEFAULT_TIMEOUT_MS: u64 = 120_000;
const MIN_TIMEOUT_MS: u64 = 1_000;
const MAX_TIMEOUT_MS: u64 = 600_000;
const MAX_DETAIL_CHARS: usize = 2_000;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct StagedInputFile {
    pub name: String,
    pub lane_path: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct StagedOutputFile {
    pub name: String,
    pub lane_path: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub if_match: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct StagedMcpCall {
    #[serde(default)]
    pub arguments: Value,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub expires_at: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub timeout_ms: Option<u64>,
    #[serde(default)]
    pub input_files: Vec<StagedInputFile>,
    #[serde(default)]
    pub output_files: Vec<StagedOutputFile>,
}

#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub enum StagingErrorCode {
    Expired,
    InputMissing,
    OutputTooLarge,
    OutputConflict,
    Timeout,
    ToolError,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct StagedInputUsed {
    pub lane_path: String,
    pub etag: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct StagedOutputWritten {
    pub lane_path: String,
    pub etag: String,
    pub bytes: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(tag = "status", rename_all = "snake_case")]
pub enum StagingOutcome {
    Succeeded {
        outputs: Vec<StagedOutputWritten>,
        inputs_used: Vec<StagedInputUsed>,
    },
    Failed {
        error_code: StagingErrorCode,
        detail: String,
        #[serde(default, skip_serializing_if = "Option::is_none")]
        retryable: Option<bool>,
    },
}

#[derive(Debug, Clone, PartialEq)]
pub struct StagedMcpCallResult {
    pub tool: Option<ToolCallOutcome>,
    pub staging: StagingOutcome,
}

/// Dispatch an MCP tool through the staged-file wrapper.
///
/// `lane_root` is the only filesystem tree input/output declarations may
/// address. Invalid paths and symlink escapes fail before the tool runs.
pub async fn dispatch_staged_mcp_tool(
    registry: &McpRegistry,
    advertised_name: &str,
    request: StagedMcpCall,
    lane_root: &Path,
    cancel: &CancellationToken,
) -> Result<StagedMcpCallResult, DispatchError> {
    run_staged_mcp_call(request, lane_root, cancel, |arguments, timeout| {
        registry.dispatch_tool(advertised_name, arguments, timeout)
    })
    .await
}

async fn run_staged_mcp_call<F, Fut>(
    request: StagedMcpCall,
    lane_root: &Path,
    cancel: &CancellationToken,
    call: F,
) -> Result<StagedMcpCallResult, DispatchError>
where
    F: FnOnce(Value, Duration) -> Fut,
    Fut: std::future::Future<Output = Result<ToolCallOutcome, DispatchError>>,
{
    if request.input_files.len() > MAX_FILES || request.output_files.len() > MAX_FILES {
        return Ok(failed(
            StagingErrorCode::ToolError,
            format!("at most {MAX_FILES} input and output files are allowed"),
            Some(false),
        ));
    }
    if !request.output_files.is_empty() && request.expires_at.is_none() {
        return Ok(failed(
            StagingErrorCode::ToolError,
            "expires_at is required when output files are declared",
            Some(false),
        ));
    }
    if let Some(expires_at) = request.expires_at.as_deref() {
        let expiry = match DateTime::parse_from_rfc3339(expires_at) {
            Ok(expiry) => expiry.with_timezone(&Utc),
            Err(_) => {
                return Ok(failed(
                    StagingErrorCode::Expired,
                    format!("expires_at is not an RFC3339 timestamp with a zone: {expires_at}"),
                    Some(false),
                ));
            }
        };
        if Utc::now() > expiry {
            return Ok(failed(
                StagingErrorCode::Expired,
                format!("request expired at {expires_at}"),
                Some(false),
            ));
        }
    }

    let lane_root = match prepare_lane_root(lane_root).await {
        Ok(root) => root,
        Err(detail) => {
            return Ok(failed(
                StagingErrorCode::ToolError,
                detail,
                Some(false),
            ));
        }
    };
    let inputs = match validate_inputs(&request.input_files, &lane_root) {
        Ok(inputs) => inputs,
        Err(result) => return Ok(result),
    };
    let outputs = match validate_outputs(&request.output_files, &lane_root) {
        Ok(outputs) => outputs,
        Err(result) => return Ok(result),
    };
    if let Err(result) = validate_names_and_tokens(&request, &inputs, &outputs) {
        return Ok(result);
    }

    let staging_dir = match tempfile::Builder::new().prefix("jfc-mcp-").tempdir() {
        Ok(dir) => dir,
        Err(error) => {
            return Ok(failed(
                StagingErrorCode::ToolError,
                format!("staging unavailable: {error}"),
                None,
            ));
        }
    };
    let input_dir = staging_dir.path().join("in");
    let output_dir = staging_dir.path().join("out");
    if let Err(error) = tokio::fs::create_dir(&input_dir)
        .await
        .and_then(|_| std::fs::create_dir(&output_dir))
    {
        return Ok(failed(
            StagingErrorCode::ToolError,
            format!("staging unavailable: {error}"),
            None,
        ));
    }

    let mut tokens = HashMap::new();
    let mut inputs_used = Vec::with_capacity(inputs.len());
    for (index, input) in inputs.iter().enumerate() {
        if cancel.is_cancelled() {
            return Ok(cancelled());
        }
        let bytes = match read_regular_file(input.path.clone(), lane_root.clone()).await {
            Ok(bytes) => bytes,
            Err(ReadFailure::Missing) => {
                return Ok(failed(
                    StagingErrorCode::InputMissing,
                    format!("input not found: {}", input.spec.lane_path),
                    Some(false),
                ));
            }
            Err(ReadFailure::TooLarge(size)) => {
                return Ok(failed(
                    StagingErrorCode::ToolError,
                    format!("input {} is {size} bytes (cap {MAX_FILE_BYTES})", input.spec.name),
                    Some(false),
                ));
            }
            Err(ReadFailure::Other(detail)) => {
                return Ok(failed(StagingErrorCode::ToolError, detail, None));
            }
        };
        let staged = input_dir.join(format!("{index}{}", safe_extension(&input.spec.lane_path)));
        if let Err(error) = tokio::fs::write(&staged, &bytes).await {
            return Ok(failed(
                StagingErrorCode::ToolError,
                format!("input stage failed: {error}"),
                None,
            ));
        }
        tokens.insert(
            format!("{{{{in:{}}}}}", input.spec.name),
            staged.to_string_lossy().into_owned(),
        );
        inputs_used.push(StagedInputUsed {
            lane_path: input.spec.lane_path.clone(),
            etag: etag(&bytes),
        });
    }

    let mut staged_outputs = Vec::with_capacity(outputs.len());
    for (index, output) in outputs.iter().enumerate() {
        let staged = output_dir.join(format!(
            "{index}{}",
            safe_extension(&output.spec.lane_path)
        ));
        tokens.insert(
            format!("{{{{out:{}}}}}", output.spec.name),
            staged.to_string_lossy().into_owned(),
        );
        staged_outputs.push(staged);
    }

    let arguments = replace_tokens(request.arguments, &tokens);
    let timeout = Duration::from_millis(
        request
            .timeout_ms
            .unwrap_or(DEFAULT_TIMEOUT_MS)
            .clamp(MIN_TIMEOUT_MS, MAX_TIMEOUT_MS),
    );
    let tool = tokio::select! {
        biased;
        _ = cancel.cancelled() => return Ok(cancelled()),
        result = tokio::time::timeout(timeout, call(arguments, timeout)) => match result {
            Err(_) => return Ok(failed(
                StagingErrorCode::Timeout,
                format!("tool did not complete within {}ms", timeout.as_millis()),
                Some(true),
            )),
            Ok(Err(DispatchError::Request(RequestError::Timeout))) => return Ok(failed(
                StagingErrorCode::Timeout,
                format!("tool did not complete within {}ms", timeout.as_millis()),
                Some(true),
            )),
            Ok(Err(error)) => return Err(error),
            Ok(Ok(tool)) => tool,
        }
    };
    if tool.is_error {
        return Ok(failed(
            StagingErrorCode::ToolError,
            if tool.text.is_empty() {
                "tool returned an error result".to_owned()
            } else {
                tool.text.clone()
            },
            None,
        ));
    }

    let mut written = Vec::with_capacity(outputs.len());
    for (output, staged) in outputs.iter().zip(staged_outputs) {
        if cancel.is_cancelled() {
            return Ok(cancelled());
        }
        let bytes = match read_regular_file(staged, staging_dir.path().to_path_buf()).await {
            Ok(bytes) => bytes,
            Err(ReadFailure::Missing) => {
                return Ok(failed(
                    StagingErrorCode::ToolError,
                    format!("tool did not produce output: {}", output.spec.name),
                    Some(false),
                ));
            }
            Err(ReadFailure::TooLarge(size)) => {
                return Ok(failed(
                    StagingErrorCode::OutputTooLarge,
                    format!("output {} is {size} bytes (cap {MAX_FILE_BYTES})", output.spec.name),
                    Some(false),
                ));
            }
            Err(ReadFailure::Other(detail)) => {
                return Ok(failed(StagingErrorCode::ToolError, detail, None));
            }
        };
        let _guard = lane_lock(&output.path).lock_owned().await;
        match write_lane_file(&output.path, &lane_root, &bytes, output.spec.if_match.as_deref()) {
            Ok(()) => written.push(StagedOutputWritten {
                lane_path: output.spec.lane_path.clone(),
                etag: etag(&bytes),
                bytes: u64::try_from(bytes.len()).unwrap_or(u64::MAX),
            }),
            Err(WriteFailure::Conflict) => {
                return Ok(failed(
                    StagingErrorCode::OutputConflict,
                    format!("output row changed: {}", output.spec.lane_path),
                    Some(false),
                ));
            }
            Err(WriteFailure::Other(detail)) => {
                return Ok(failed(StagingErrorCode::ToolError, detail, None));
            }
        }
    }

    Ok(StagedMcpCallResult {
        tool: Some(tool),
        staging: StagingOutcome::Succeeded {
            outputs: written,
            inputs_used,
        },
    })
}

struct ValidatedInput<'a> {
    spec: &'a StagedInputFile,
    path: PathBuf,
}

struct ValidatedOutput<'a> {
    spec: &'a StagedOutputFile,
    path: PathBuf,
}

async fn prepare_lane_root(root: &Path) -> Result<PathBuf, String> {
    tokio::fs::create_dir_all(root)
        .await
        .map_err(|error| format!("cannot create staging lane: {error}"))?;
    tokio::fs::canonicalize(root)
        .await
        .map_err(|error| format!("cannot resolve staging lane: {error}"))
}

fn validate_inputs<'a>(
    specs: &'a [StagedInputFile],
    root: &Path,
) -> Result<Vec<ValidatedInput<'a>>, StagedMcpCallResult> {
    specs
        .iter()
        .map(|spec| {
            lane_relative(&spec.lane_path)
                .map(|relative| ValidatedInput {
                    spec,
                    path: root.join(relative),
                })
                .map_err(|detail| failed(StagingErrorCode::ToolError, detail, Some(false)))
        })
        .collect()
}

fn validate_outputs<'a>(
    specs: &'a [StagedOutputFile],
    root: &Path,
) -> Result<Vec<ValidatedOutput<'a>>, StagedMcpCallResult> {
    let mut paths = HashSet::new();
    specs
        .iter()
        .map(|spec| {
            let relative = lane_relative(&spec.lane_path)
                .map_err(|detail| failed(StagingErrorCode::ToolError, detail, Some(false)))?;
            if !paths.insert(relative.clone()) {
                return Err(failed(
                    StagingErrorCode::ToolError,
                    format!("duplicate output lane_path: {}", spec.lane_path),
                    Some(false),
                ));
            }
            if spec.if_match.as_deref() == Some("") {
                return Err(failed(
                    StagingErrorCode::ToolError,
                    format!("if_match for {} must not be empty", spec.name),
                    Some(false),
                ));
            }
            Ok(ValidatedOutput {
                spec,
                path: root.join(relative),
            })
        })
        .collect()
}

fn validate_names_and_tokens(
    request: &StagedMcpCall,
    inputs: &[ValidatedInput<'_>],
    outputs: &[ValidatedOutput<'_>],
) -> Result<(), StagedMcpCallResult> {
    let mut declared = HashSet::new();
    for (kind, token_kind, names) in [
        (
            "input",
            "in",
            inputs
                .iter()
                .map(|item| item.spec.name.as_str())
                .collect::<Vec<_>>(),
        ),
        (
            "output",
            "out",
            outputs
                .iter()
                .map(|item| item.spec.name.as_str())
                .collect::<Vec<_>>(),
        ),
    ] {
        let mut local = HashSet::new();
        for name in names {
            if !valid_name(name) {
                return Err(failed(
                    StagingErrorCode::ToolError,
                    format!("invalid {kind} name: {name}"),
                    Some(false),
                ));
            }
            if !local.insert(name) {
                return Err(failed(
                    StagingErrorCode::ToolError,
                    format!("duplicate {kind} name: {name}"),
                    Some(false),
                ));
            }
            declared.insert(format!("{{{{{token_kind}:{name}}}}}"));
        }
    }
    let mut used = HashSet::new();
    collect_tokens(&request.arguments, &mut used);
    if let Some(token) = used.iter().find(|token| !declared.contains(*token)) {
        return Err(failed(
            StagingErrorCode::ToolError,
            format!("argument token names no declared file: {token}"),
            Some(false),
        ));
    }
    let missing = outputs
        .iter()
        .map(|output| format!("{{{{out:{}}}}}", output.spec.name))
        .filter(|token| !used.contains(token))
        .collect::<Vec<_>>();
    if !missing.is_empty() {
        return Err(failed(
            StagingErrorCode::ToolError,
            format!("declared output not referenced in arguments: {}", missing.join(", ")),
            Some(false),
        ));
    }
    Ok(())
}

fn lane_relative(path: &str) -> Result<PathBuf, String> {
    let mut relative = PathBuf::new();
    for component in Path::new(path).components() {
        match component {
            Component::Normal(part) => relative.push(part),
            Component::CurDir | Component::RootDir => {}
            Component::ParentDir | Component::Prefix(_) => {
                return Err(format!("lane path escapes its root: {path}"));
            }
        }
    }
    if relative.as_os_str().is_empty() {
        return Err(format!("lane path is empty: {path}"));
    }
    Ok(relative)
}

fn valid_name(name: &str) -> bool {
    !name.is_empty()
        && name.len() <= 64
        && name
            .bytes()
            .all(|byte| byte.is_ascii_alphanumeric() || matches!(byte, b'_' | b'-'))
}

fn exact_token(value: &str) -> bool {
    let Some(body) = value.strip_prefix("{{").and_then(|value| value.strip_suffix("}}")) else {
        return false;
    };
    let Some((kind, name)) = body.split_once(':') else {
        return false;
    };
    matches!(kind, "in" | "out") && valid_name(name)
}

fn collect_tokens(value: &Value, tokens: &mut HashSet<String>) {
    match value {
        Value::String(value) if exact_token(value) => {
            tokens.insert(value.clone());
        }
        Value::Array(values) => {
            for value in values {
                collect_tokens(value, tokens);
            }
        }
        Value::Object(values) => {
            for value in values.values() {
                collect_tokens(value, tokens);
            }
        }
        _ => {}
    }
}

fn replace_tokens(value: Value, tokens: &HashMap<String, String>) -> Value {
    match value {
        Value::String(value) => tokens
            .get(&value)
            .cloned()
            .map(Value::String)
            .unwrap_or(Value::String(value)),
        Value::Array(values) => Value::Array(
            values
                .into_iter()
                .map(|value| replace_tokens(value, tokens))
                .collect(),
        ),
        Value::Object(values) => Value::Object(
            values
                .into_iter()
                .map(|(key, value)| (key, replace_tokens(value, tokens)))
                .collect(),
        ),
        value => value,
    }
}

fn safe_extension(path: &str) -> String {
    Path::new(path)
        .extension()
        .and_then(|extension| extension.to_str())
        .filter(|extension| {
            !extension.is_empty()
                && extension.len() <= 8
                && extension.bytes().all(|byte| byte.is_ascii_alphanumeric())
        })
        .map(|extension| format!(".{extension}"))
        .unwrap_or_default()
}

enum ReadFailure {
    Missing,
    TooLarge(u64),
    Other(String),
}

async fn read_regular_file(path: PathBuf, root: PathBuf) -> Result<Vec<u8>, ReadFailure> {
    tokio::task::spawn_blocking(move || read_regular_file_sync(&path, &root))
        .await
        .map_err(|error| ReadFailure::Other(format!("file staging task failed: {error}")))?
}

fn read_regular_file_sync(path: &Path, root: &Path) -> Result<Vec<u8>, ReadFailure> {
    let canonical = path.canonicalize().map_err(|error| {
        if error.kind() == std::io::ErrorKind::NotFound {
            ReadFailure::Missing
        } else {
            ReadFailure::Other(format!("cannot resolve {}: {error}", path.display()))
        }
    })?;
    if !canonical.starts_with(root) {
        return Err(ReadFailure::Other(format!(
            "file escapes staging root: {}",
            path.display()
        )));
    }
    if std::fs::symlink_metadata(path)
        .map_err(|error| ReadFailure::Other(error.to_string()))?
        .file_type()
        .is_symlink()
    {
        return Err(ReadFailure::Other(format!(
            "refusing symlinked staged file: {}",
            path.display()
        )));
    }
    let mut options = std::fs::OpenOptions::new();
    options.read(true);
    #[cfg(unix)]
    {
        use std::os::unix::fs::OpenOptionsExt;
        options.custom_flags(libc::O_NOFOLLOW | libc::O_NONBLOCK);
    }
    let file = options.open(path).map_err(|error| {
        if error.kind() == std::io::ErrorKind::NotFound {
            ReadFailure::Missing
        } else {
            ReadFailure::Other(format!("cannot open {}: {error}", path.display()))
        }
    })?;
    let metadata = file
        .metadata()
        .map_err(|error| ReadFailure::Other(format!("cannot stat {}: {error}", path.display())))?;
    if !metadata.is_file() {
        return Err(ReadFailure::Other(format!(
            "staged path is not a regular file: {}",
            path.display()
        )));
    }
    if metadata.len() > MAX_FILE_BYTES {
        return Err(ReadFailure::TooLarge(metadata.len()));
    }
    let mut bytes = Vec::with_capacity(usize::try_from(metadata.len()).unwrap_or(0));
    file.take(MAX_FILE_BYTES + 1)
        .read_to_end(&mut bytes)
        .map_err(|error| ReadFailure::Other(format!("cannot read {}: {error}", path.display())))?;
    if u64::try_from(bytes.len()).unwrap_or(u64::MAX) > MAX_FILE_BYTES {
        return Err(ReadFailure::TooLarge(
            u64::try_from(bytes.len()).unwrap_or(u64::MAX),
        ));
    }
    Ok(bytes)
}

enum WriteFailure {
    Conflict,
    Other(String),
}

fn write_lane_file(
    path: &Path,
    root: &Path,
    bytes: &[u8],
    if_match: Option<&str>,
) -> Result<(), WriteFailure> {
    let parent = path
        .parent()
        .ok_or_else(|| WriteFailure::Other("output has no parent directory".to_owned()))?;
    std::fs::create_dir_all(parent)
        .map_err(|error| WriteFailure::Other(format!("cannot create output parent: {error}")))?;
    let canonical_parent = parent
        .canonicalize()
        .map_err(|error| WriteFailure::Other(format!("cannot resolve output parent: {error}")))?;
    if !canonical_parent.starts_with(root) {
        return Err(WriteFailure::Other(
            "output parent escapes the staging lane".to_owned(),
        ));
    }
    if let Some(expected) = if_match {
        let current = match read_regular_file_sync(path, root) {
            Ok(bytes) => etag(&bytes),
            Err(ReadFailure::Missing) => return Err(WriteFailure::Conflict),
            Err(ReadFailure::TooLarge(_)) => return Err(WriteFailure::Conflict),
            Err(ReadFailure::Other(detail)) => return Err(WriteFailure::Other(detail)),
        };
        if current != expected {
            return Err(WriteFailure::Conflict);
        }
    }
    if path
        .symlink_metadata()
        .is_ok_and(|metadata| metadata.file_type().is_symlink())
    {
        return Err(WriteFailure::Other(format!(
            "refusing symlinked output row: {}",
            path.display()
        )));
    }
    let mut temp = tempfile::NamedTempFile::new_in(parent)
        .map_err(|error| WriteFailure::Other(format!("cannot stage output: {error}")))?;
    temp.write_all(bytes)
        .and_then(|_| temp.as_file().sync_all())
        .map_err(|error| WriteFailure::Other(format!("cannot persist output: {error}")))?;
    temp.persist(path)
        .map_err(|error| WriteFailure::Other(format!("cannot publish output: {}", error.error)))?;
    if let Ok(directory) = std::fs::File::open(parent) {
        let _ = directory.sync_all();
    }
    Ok(())
}

fn etag(bytes: &[u8]) -> String {
    let digest = Sha256::digest(bytes);
    let mut output = String::with_capacity(digest.len() * 2);
    for byte in digest {
        use std::fmt::Write as _;
        let _ = write!(output, "{byte:02x}");
    }
    output
}

fn failed(
    error_code: StagingErrorCode,
    detail: impl Into<String>,
    retryable: Option<bool>,
) -> StagedMcpCallResult {
    let detail = detail.into().chars().take(MAX_DETAIL_CHARS).collect();
    StagedMcpCallResult {
        tool: None,
        staging: StagingOutcome::Failed {
            error_code,
            detail,
            retryable,
        },
    }
}

fn cancelled() -> StagedMcpCallResult {
    failed(
        StagingErrorCode::ToolError,
        "cancelled by client",
        Some(true),
    )
}

type LaneLock = tokio::sync::Mutex<()>;
static LANE_LOCKS: OnceLock<Mutex<HashMap<PathBuf, Weak<LaneLock>>>> = OnceLock::new();

fn lane_lock(path: &Path) -> Arc<LaneLock> {
    let locks = LANE_LOCKS.get_or_init(Default::default);
    let mut locks = locks.lock().unwrap_or_else(|poisoned| poisoned.into_inner());
    locks.retain(|_, lock| lock.strong_count() > 0);
    if let Some(lock) = locks.get(path).and_then(Weak::upgrade) {
        return lock;
    }
    let lock = Arc::new(LaneLock::new(()));
    locks.insert(path.to_path_buf(), Arc::downgrade(&lock));
    lock
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn stages_exact_tokens_and_collects_declared_output_regression() {
        let lane = tempfile::tempdir().unwrap();
        std::fs::create_dir_all(lane.path().join("working")).unwrap();
        std::fs::write(lane.path().join("working/input.txt"), "hello").unwrap();
        let request = StagedMcpCall {
            arguments: serde_json::json!({
                "source": "{{in:source}}",
                "destination": "{{out:result}}",
                "literal": "prefix {{in:source}}"
            }),
            expires_at: Some((Utc::now() + chrono::Duration::minutes(1)).to_rfc3339()),
            timeout_ms: Some(5_000),
            input_files: vec![StagedInputFile {
                name: "source".into(),
                lane_path: "/working/input.txt".into(),
            }],
            output_files: vec![StagedOutputFile {
                name: "result".into(),
                lane_path: "/working/output.txt".into(),
                if_match: None,
            }],
        };

        let result = run_staged_mcp_call(
            request,
            lane.path(),
            &CancellationToken::new(),
            |arguments, _| async move {
                let source = arguments["source"].as_str().unwrap();
                let destination = arguments["destination"].as_str().unwrap();
                assert_eq!(arguments["literal"], "prefix {{in:source}}");
                let contents = std::fs::read_to_string(source).unwrap();
                std::fs::write(destination, format!("{contents} world")).unwrap();
                Ok(ToolCallOutcome {
                    text: "done".into(),
                    is_error: false,
                })
            },
        )
        .await
        .unwrap();

        assert!(matches!(result.staging, StagingOutcome::Succeeded { .. }));
        assert_eq!(
            std::fs::read_to_string(lane.path().join("working/output.txt")).unwrap(),
            "hello world"
        );
    }

    #[test]
    fn rejects_parent_path_and_unknown_token_regression() {
        assert!(lane_relative("../outside").is_err());
        let request = StagedMcpCall {
            arguments: serde_json::json!({"path": "{{out:missing}}"}),
            expires_at: None,
            timeout_ms: None,
            input_files: Vec::new(),
            output_files: Vec::new(),
        };
        let error = validate_names_and_tokens(&request, &[], &[]).unwrap_err();
        assert!(matches!(
            error.staging,
            StagingOutcome::Failed {
                error_code: StagingErrorCode::ToolError,
                ..
            }
        ));
    }
}
