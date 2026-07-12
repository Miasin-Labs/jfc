use std::path::{Path, PathBuf};
use std::time::Duration;

use crate::runtime::ExecutionResult;

use super::bash::{execute_bash_output, execute_bash_with_options};
use super::registry::snapshot_event_sender;
use super::safe_tools::configure_tool_command;

const INTERACTIVE_BASH_TIMEOUT: Duration = Duration::from_secs(60);
const GLOBAL_TMUX_OPTIONS_WITH_ARGS: &[&str] = &["-L", "-S", "-f", "-c", "-T"];
const BLOCKED_TMUX_SUBCOMMANDS: &[&str] = &[
    "capture-pane",
    "capturep",
    "save-buffer",
    "saveb",
    "show-buffer",
    "showb",
    "pipe-pane",
    "pipep",
];
const PROHIBITED_TMUX_SUBCOMMANDS: &[&str] = &["kill-server"];

pub(crate) fn resolve_bash_workdir(cwd: &Path, workdir: Option<&str>) -> PathBuf {
    let Some(workdir) = workdir.map(str::trim).filter(|workdir| !workdir.is_empty()) else {
        return cwd.to_path_buf();
    };
    let path = Path::new(workdir);
    if path.is_absolute() {
        path.to_path_buf()
    } else {
        cwd.join(path)
    }
}

pub(crate) fn suppress_bash_output(mut result: ExecutionResult) -> ExecutionResult {
    if result.is_error() {
        return result;
    }
    let first_line = result.output.lines().next().unwrap_or_default();
    result.output = if first_line.starts_with("[exit ") {
        format!("{first_line}\n(output suppressed)")
    } else {
        "(output suppressed)".to_owned()
    };
    result
}

pub(crate) fn neutralize_unknown_bash_output(result: ExecutionResult) -> ExecutionResult {
    if !result.is_error() || !result.output.starts_with("Unknown Bash task id") {
        return result;
    }
    ExecutionResult::success(
        "Background Bash output is attached to the original Bash tool automatically; \
         BashOutput polling is ignored for compatibility.",
    )
}

pub(crate) async fn execute_bash_route(
    command: &str,
    timeout: Option<u64>,
    workdir: Option<&str>,
    run_in_background: Option<bool>,
    suppress_output: Option<bool>,
    cwd: &Path,
    runtime_tool_id: Option<&str>,
) -> ExecutionResult {
    let effective_cwd = resolve_bash_workdir(cwd, workdir);
    let progress =
        runtime_tool_id.and_then(|id| snapshot_event_sender().map(|tx| (id.to_owned(), tx)));
    let result = execute_bash_with_options(
        command,
        timeout,
        &effective_cwd,
        progress,
        run_in_background.unwrap_or(false),
    )
    .await;
    if suppress_output.unwrap_or(false) && !run_in_background.unwrap_or(false) {
        suppress_bash_output(result)
    } else {
        result
    }
}

pub(crate) async fn execute_bash_output_route(
    task_id: &str,
    offset: Option<u64>,
    limit: Option<u64>,
    block: Option<bool>,
    timeout: Option<u64>,
    wait_up_to: Option<u64>,
) -> ExecutionResult {
    let result = execute_bash_output(task_id, offset, limit, block, wait_up_to.or(timeout)).await;
    neutralize_unknown_bash_output(result)
}

pub(crate) async fn execute_interactive_bash_route(tmux_command: &str) -> ExecutionResult {
    let parts = match tokenize_tmux_command(tmux_command) {
        Ok(parts) if parts.is_empty() => return ExecutionResult::failure("Empty tmux command"),
        Ok(parts) => parts,
        Err(error) => return ExecutionResult::failure(error),
    };
    if parts.first().is_some_and(|part| part == "tmux") {
        return ExecutionResult::failure(
            "InteractiveBash expects a tmux subcommand without the leading `tmux` prefix.",
        );
    }

    let subcommand_index = find_subcommand_index(&parts);
    let raw_subcommand = subcommand_index
        .and_then(|index| parts.get(index))
        .map(String::as_str)
        .unwrap_or_default();
    let subcommand = raw_subcommand.to_ascii_lowercase();

    if PROHIBITED_TMUX_SUBCOMMANDS.contains(&subcommand.as_str()) {
        return ExecutionResult::failure(prohibited_tmux_command_message(raw_subcommand));
    }
    if BLOCKED_TMUX_SUBCOMMANDS.contains(&subcommand.as_str()) {
        return ExecutionResult::failure(blocked_tmux_command_message(raw_subcommand, &parts));
    }

    let mut command = tokio::process::Command::new("tmux");
    command.args(&parts).kill_on_drop(true);
    configure_tool_command(&mut command);

    let output = match tokio::time::timeout(INTERACTIVE_BASH_TIMEOUT, command.output()).await {
        Ok(Ok(output)) => output,
        Ok(Err(error)) => {
            return ExecutionResult::failure(format!("failed to run tmux: {error}"));
        }
        Err(_) => {
            return ExecutionResult::failure(format!(
                "tmux command timed out after {}ms",
                INTERACTIVE_BASH_TIMEOUT.as_millis()
            ));
        }
    };

    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);
    if !output.status.success() {
        let message = stderr.trim();
        let fallback = format!("tmux exited with status {}", output.status);
        return ExecutionResult::failure(if message.is_empty() {
            fallback
        } else {
            message.to_owned()
        });
    }

    if stdout.is_empty() {
        ExecutionResult::success("(no output)")
    } else {
        ExecutionResult::success(stdout.into_owned())
    }
}

fn tokenize_tmux_command(command: &str) -> Result<Vec<String>, String> {
    let mut tokens = Vec::new();
    let mut current = String::new();
    let mut quote = None;
    let mut escaped = false;

    for ch in command.chars() {
        if escaped {
            current.push(ch);
            escaped = false;
            continue;
        }

        if ch == '\\' {
            escaped = true;
            continue;
        }

        match quote {
            Some(quote_char) if ch == quote_char => quote = None,
            Some(_) => current.push(ch),
            None if ch == '\'' || ch == '"' => quote = Some(ch),
            None if ch.is_whitespace() => {
                if !current.is_empty() {
                    tokens.push(std::mem::take(&mut current));
                }
            }
            None => current.push(ch),
        }
    }

    if escaped {
        current.push('\\');
    }
    if let Some(quote_char) = quote {
        return Err(format!("unterminated {quote_char} quote in tmux command"));
    }
    if !current.is_empty() {
        tokens.push(current);
    }
    Ok(tokens)
}

fn find_subcommand_index(parts: &[String]) -> Option<usize> {
    let mut index = 0;
    while index < parts.len() {
        let part = parts[index].as_str();
        if part == "--" {
            return (index + 1 < parts.len()).then_some(index + 1);
        }
        if GLOBAL_TMUX_OPTIONS_WITH_ARGS.contains(&part) {
            index += 2;
            continue;
        }
        if part.starts_with('-') {
            index += 1;
            continue;
        }
        return Some(index);
    }
    None
}

fn target_session_name(parts: &[String]) -> &str {
    let mut index = 0;
    while index < parts.len() {
        let part = parts[index].as_str();
        if part == "-t" {
            return parts
                .get(index + 1)
                .map(String::as_str)
                .unwrap_or("jfc-session");
        }
        if let Some(target) = part.strip_prefix("-t")
            && !target.is_empty()
        {
            return target;
        }
        index += 1;
    }
    "jfc-session"
}

fn blocked_tmux_command_message(command: &str, parts: &[String]) -> String {
    let session_name = target_session_name(parts);
    format!(
        "`{command}` is blocked in InteractiveBash.\n\nUse Bash for read-only tmux capture instead:\n\n```bash\ntmux capture-pane -p -t {session_name}\ntmux capture-pane -p -t {session_name} -S -1000\n```"
    )
}

fn prohibited_tmux_command_message(command: &str) -> String {
    format!(
        "`{command}` is prohibited in InteractiveBash.\n\nDo not run `tmux kill-server`; it terminates every tmux session on the server. Use scoped cleanup instead:\n\n```bash\ntmux kill-session -t <session-name>\n```"
    )
}

#[cfg(test)]
mod interactive_bash_tests {
    use super::{find_subcommand_index, target_session_name, tokenize_tmux_command};

    #[test]
    fn tokenize_tmux_command_handles_quotes_normal() {
        let tokens = tokenize_tmux_command("send-keys -t jfc-dev \"cargo run\" Enter")
            .expect("valid tokens");
        assert_eq!(tokens, ["send-keys", "-t", "jfc-dev", "cargo run", "Enter"]);
    }

    #[test]
    fn find_subcommand_index_skips_global_options_normal() {
        let tokens = tokenize_tmux_command("-L jfc has-session -t jfc-dev").expect("valid tokens");
        assert_eq!(find_subcommand_index(&tokens), Some(2));
    }

    #[test]
    fn target_session_name_extracts_compact_t_flag_normal() {
        let tokens = tokenize_tmux_command("send-keys -tjfc-dev Enter").expect("valid tokens");
        assert_eq!(target_session_name(&tokens), "jfc-dev");
    }
}
