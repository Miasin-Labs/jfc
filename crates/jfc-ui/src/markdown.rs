use ratatui::{
    style::{Modifier, Style},
    text::{Line, Span},
};

use crate::theme::Theme;

#[derive(Clone)]
pub enum Block {
    Paragraph(Vec<MdSpan>),
    Header(u8, String),
    CodeBlock { language: String, code: String },
    ListItem(Vec<MdSpan>),
    BlankLine,
}

#[derive(Clone)]
pub enum MdSpan {
    Plain(String),
    Bold(String),
    Italic(String),
    InlineCode(String),
}

pub fn parse(text: &str) -> Vec<Block> {
    let mut blocks = Vec::new();
    let mut lines = text.lines().peekable();

    while let Some(line) = lines.next() {
        if line.is_empty() {
            blocks.push(Block::BlankLine);
            continue;
        }
        if line.starts_with("```") {
            let language = line.trim_start_matches('`').trim().to_string();
            let mut code_lines = Vec::new();
            for cl in lines.by_ref() {
                if cl.starts_with("```") {
                    break;
                }
                code_lines.push(cl);
            }
            blocks.push(Block::CodeBlock {
                language,
                code: code_lines.join("\n"),
            });
            continue;
        }
        if let Some(rest) = line.strip_prefix("### ") {
            blocks.push(Block::Header(3, rest.to_string()));
            continue;
        }
        if let Some(rest) = line.strip_prefix("## ") {
            blocks.push(Block::Header(2, rest.to_string()));
            continue;
        }
        if let Some(rest) = line.strip_prefix("# ") {
            blocks.push(Block::Header(1, rest.to_string()));
            continue;
        }
        if line.starts_with("- ") || line.starts_with("* ") {
            blocks.push(Block::ListItem(parse_spans(&line[2..])));
            continue;
        }
        blocks.push(Block::Paragraph(parse_spans(line)));
    }
    blocks
}

fn parse_spans(text: &str) -> Vec<MdSpan> {
    let mut spans = Vec::new();
    let mut rest = text;
    while !rest.is_empty() {
        if let Some(s) = rest.strip_prefix("**") {
            if let Some(end) = s.find("**") {
                spans.push(MdSpan::Bold(s[..end].to_string()));
                rest = &s[end + 2..];
                continue;
            }
        }
        if let Some(s) = rest.strip_prefix('*') {
            if let Some(end) = s.find('*') {
                spans.push(MdSpan::Italic(s[..end].to_string()));
                rest = &s[end + 1..];
                continue;
            }
        }
        if let Some(s) = rest.strip_prefix('`') {
            if let Some(end) = s.find('`') {
                spans.push(MdSpan::InlineCode(s[..end].to_string()));
                rest = &s[end + 1..];
                continue;
            }
        }
        let next = rest.find(|c| c == '`' || c == '*').unwrap_or(rest.len());
        spans.push(MdSpan::Plain(rest[..next].to_string()));
        rest = &rest[next..];
    }
    spans
}

pub fn to_lines(text: &str, t: &Theme, _width: usize) -> Vec<Line<'static>> {
    let blocks = parse(text);
    let mut out = Vec::new();
    for block in blocks {
        match block {
            Block::Paragraph(spans) => {
                out.push(Line::from(spans_to_ratatui(&spans, t)));
            }
            Block::Header(level, text) => {
                let style = match level {
                    1 => Style::default()
                        .fg(t.text_primary)
                        .add_modifier(Modifier::BOLD | Modifier::UNDERLINED),
                    2 => Style::default().fg(t.text_primary).add_modifier(Modifier::BOLD),
                    _ => Style::default().fg(t.text_secondary).add_modifier(Modifier::BOLD),
                };
                out.push(Line::from(Span::styled(text, style)));
            }
            Block::CodeBlock { code, .. } => {
                out.push(Line::from(Span::styled(
                    "─".repeat(40),
                    Style::default().fg(t.border),
                )));
                for cl in code.lines() {
                    out.push(Line::from(Span::styled(
                        format!("  {cl}"),
                        t.code_block(),
                    )));
                }
                out.push(Line::from(Span::styled(
                    "─".repeat(40),
                    Style::default().fg(t.border),
                )));
            }
            Block::ListItem(spans) => {
                let mut parts = vec![Span::styled("• ", Style::default().fg(t.text_muted))];
                parts.extend(spans_to_ratatui(&spans, t));
                out.push(Line::from(parts));
            }
            Block::BlankLine => {
                out.push(Line::from(""));
            }
        }
    }
    out
}

fn spans_to_ratatui(spans: &[MdSpan], t: &Theme) -> Vec<Span<'static>> {
    spans
        .iter()
        .map(|s| match s {
            MdSpan::Plain(txt) => Span::styled(txt.clone(), Style::default().fg(t.text_primary)),
            MdSpan::Bold(txt) => Span::styled(txt.clone(), t.bold()),
            MdSpan::Italic(txt) => Span::styled(txt.clone(), t.italic()),
            MdSpan::InlineCode(txt) => Span::styled(txt.clone(), t.inline_code()),
        })
        .collect()
}
