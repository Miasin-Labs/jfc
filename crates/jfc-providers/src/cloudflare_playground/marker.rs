use serde_json::Value;

use jfc_provider::StreamEvent;

const SECTION_BEGIN: &str = "<|tool_calls_section_begin|>";
const SECTION_END: &str = "<|tool_calls_section_end|>";
const CALL_BEGIN: &str = "<|tool_call_begin|>";
const ARGUMENT_BEGIN: &str = "<|tool_call_argument_begin|>";
const CALL_END: &str = "<|tool_call_end|>";
const INLINE_TOOL_INDEX_BASE: usize = 100_000;

#[derive(Default)]
pub(super) struct MarkerState {
    inline_index: usize,
    text_buffer: String,
    saw_tool_call: bool,
}

impl MarkerState {
    pub(super) fn push_text(&mut self, text: &str) {
        self.text_buffer.push_str(text);
    }

    pub(super) fn take_saw_tool_call(&mut self) -> bool {
        let saw = self.saw_tool_call;
        self.saw_tool_call = false;
        saw
    }
}

pub(super) fn drain_marker_calls(
    state: &mut MarkerState,
    text_index: usize,
    out: &mut Vec<StreamEvent>,
    flush: bool,
) {
    loop {
        let Some(start) = state.text_buffer.find(SECTION_BEGIN) else {
            flush_or_hold_plain_text(state, text_index, out, flush);
            break;
        };
        if start > 0 {
            let text = state.text_buffer.drain(..start).collect::<String>();
            out.push(StreamEvent::TextDelta {
                index: text_index,
                delta: text,
            });
        }
        let Some(end_rel) = state.text_buffer.find(SECTION_END) else {
            if flush {
                match parse_marker_tool_calls(&state.text_buffer) {
                    Some(calls) => {
                        state.text_buffer.clear();
                        push_marker_tool_events(calls, state, out);
                    }
                    None => flush_or_hold_plain_text(state, text_index, out, true),
                }
            }
            break;
        };
        let end = end_rel + SECTION_END.len();
        let marker = state.text_buffer.drain(..end).collect::<String>();
        match parse_marker_tool_calls(&marker) {
            Some(calls) => push_marker_tool_events(calls, state, out),
            None => out.push(StreamEvent::TextDelta {
                index: text_index,
                delta: marker,
            }),
        }
    }
}

fn flush_or_hold_plain_text(
    state: &mut MarkerState,
    text_index: usize,
    out: &mut Vec<StreamEvent>,
    flush: bool,
) {
    let hold = if flush {
        0
    } else {
        partial_prefix_suffix_len(&state.text_buffer, SECTION_BEGIN)
    };
    let emit_len = state.text_buffer.len().saturating_sub(hold);
    if emit_len > 0 {
        let text = state.text_buffer.drain(..emit_len).collect::<String>();
        out.push(StreamEvent::TextDelta {
            index: text_index,
            delta: text,
        });
    }
}

fn parse_marker_tool_calls(body: &str) -> Option<Vec<(String, String)>> {
    let section_start = body.find(SECTION_BEGIN)? + SECTION_BEGIN.len();
    let section_tail = &body[section_start..];
    let section_end = section_tail.find(SECTION_END).unwrap_or(section_tail.len());
    let mut rest = &section_tail[..section_end];
    let mut calls = Vec::new();
    while let Some(start) = rest.find(CALL_BEGIN) {
        let after_begin = &rest[start + CALL_BEGIN.len()..];
        let Some(arg_at) = after_begin.find(ARGUMENT_BEGIN) else {
            break;
        };
        let raw_name = after_begin[..arg_at].trim();
        let after_arg = &after_begin[arg_at + ARGUMENT_BEGIN.len()..];
        let Some(end_at) = after_arg.find(CALL_END) else {
            break;
        };
        let input_json = after_arg[..end_at].trim();
        let Some(name) = normalize_marker_tool_name(raw_name) else {
            return None;
        };
        calls.push((name, normalize_tool_args(input_json)));
        rest = &after_arg[end_at + CALL_END.len()..];
    }
    (!calls.is_empty()).then_some(calls)
}

fn normalize_marker_tool_name(raw_name: &str) -> Option<String> {
    let name = raw_name.split(':').next().unwrap_or(raw_name).trim();
    let leaf = name.rsplit('.').next().unwrap_or(name).to_ascii_lowercase();
    match leaf.as_str() {
        "bash" | "exec" | "exec_command" | "execute_command" | "run_command" | "shell"
        | "shell_command" => Some("Bash".to_owned()),
        "read" | "read_file" => Some("Read".to_owned()),
        _ if !name.is_empty() => Some(name.rsplit('.').next().unwrap_or(name).to_owned()),
        _ => None,
    }
}

fn normalize_tool_args(raw: &str) -> String {
    let raw = raw.trim();
    if raw.is_empty() {
        return "{}".to_owned();
    }
    match serde_json::from_str::<Value>(raw) {
        Ok(Value::String(s)) => {
            let s = s.trim();
            if s.is_empty() {
                "{}".to_owned()
            } else {
                s.to_owned()
            }
        }
        Ok(_) | Err(_) => raw.to_owned(),
    }
}

fn push_marker_tool_events(
    calls: Vec<(String, String)>,
    state: &mut MarkerState,
    out: &mut Vec<StreamEvent>,
) {
    for (name, input_json) in calls {
        let idx = INLINE_TOOL_INDEX_BASE + state.inline_index;
        state.inline_index += 1;
        state.saw_tool_call = true;
        out.push(StreamEvent::ToolDone {
            index: idx,
            tool_name: name,
            tool_use_id: format!("toolu_{}", uuid::Uuid::new_v4().simple()),
            input_json,
            thought_signature: None,
        });
    }
}

fn partial_prefix_suffix_len(buf: &str, needle: &str) -> usize {
    let max = needle.len().saturating_sub(1).min(buf.len());
    for len in (1..=max).rev() {
        let start = buf.len() - len;
        if buf.is_char_boundary(start) && buf[start..] == needle[..len] {
            return len;
        }
    }
    0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn shell_command_alias_maps_to_bash_regression() {
        let marker = r#"<|tool_calls_section_begin|><|tool_call_begin|>functions.shell_command:0<|tool_call_argument_begin|>
{"command":"uname -a && cat /etc/os-release","description":"Get system info"}<|tool_call_end|><|tool_calls_section_end|>"#;

        let calls = parse_marker_tool_calls(marker).expect("marker tool call");

        assert_eq!(calls[0].0, "Bash");
        assert_eq!(
            calls[0].1,
            r#"{"command":"uname -a && cat /etc/os-release","description":"Get system info"}"#
        );
    }

    #[test]
    fn namespaced_bash_alias_maps_to_bash_regression() {
        let marker = r#"<|tool_calls_section_begin|><|tool_call_begin|>functions.bash:0<|tool_call_argument_begin|>
{"command":"uname -a"}<|tool_call_end|><|tool_calls_section_end|>"#;

        let calls = parse_marker_tool_calls(marker).expect("marker tool call");

        assert_eq!(calls[0].0, "Bash");
    }
}
