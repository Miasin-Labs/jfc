use ansi_to_tui::IntoText;

use crate::app::App;

const PASTE_CHAR_THRESHOLD: usize = 800;
const PASTE_NEWLINE_THRESHOLD: usize = 2;

type ClipboardImage = (crate::attachments::Attachment, u32, u32);

pub(crate) fn attach_image(app: &mut App, image: ClipboardImage) {
    let (attachment, width, height) = image;
    app.image_counter += 1;
    let id = app.image_counter;
    app.pasted_images.push(crate::attachments::PastedContent {
        id,
        attachment,
        width,
        height,
    });
    app.textarea.insert_str(format!("[Image #{id}]"));
}

pub(crate) fn insert_pasted_text(app: &mut App, raw: &str) {
    let collapse = jfc_engine::config::load_arc().collapse_large_pastes;
    insert_pasted_text_with_mode(app, raw, collapse);
}

pub(super) fn insert_pasted_text_with_mode(app: &mut App, raw: &str, collapse: bool) {
    let text = normalize_pasted_text(raw);
    if text.is_empty() {
        return;
    }

    if collapse && should_collapse(&text) {
        app.paste_counter += 1;
        let chip = paste_label(app.paste_counter, text.matches('\n').count());
        app.pasted_texts.push((chip.clone(), text));
        app.textarea.insert_str(&chip);
    } else {
        app.textarea.insert_str(&text);
    }
}

/// Paste an image when one is available; image-probe failures still fall back
/// to clipboard text. Keeping both reads behind closures makes that failure
/// path deterministic in tests.
pub(super) fn paste_clipboard_with<ImageRead, TextRead>(
    app: &mut App,
    read_image: ImageRead,
    read_text: TextRead,
) where
    ImageRead: FnOnce() -> Result<Option<ClipboardImage>, String>,
    TextRead: FnOnce() -> Result<String, String>,
{
    match read_image() {
        Ok(Some(image)) => {
            tracing::debug!(
                target: "jfc::input::paste",
                width = image.1,
                height = image.2,
                bytes = image.0.bytes.len(),
                "attached clipboard image"
            );
            attach_image(app, image);
            return;
        }
        Ok(None) => {}
        Err(error) => {
            tracing::debug!(
                target: "jfc::input::paste",
                %error,
                "clipboard image probe failed; trying text"
            );
        }
    }

    match read_text() {
        Ok(text) => insert_pasted_text(app, &text),
        Err(error) => tracing::debug!(
            target: "jfc::input::paste",
            %error,
            "clipboard text paste failed"
        ),
    }
}

pub(crate) fn paste_clipboard(app: &mut App) {
    paste_clipboard_with(
        app,
        crate::attachments::read_clipboard_image,
        crate::attachments::read_clipboard_text,
    );
}

fn should_collapse(text: &str) -> bool {
    text.chars().count() > PASTE_CHAR_THRESHOLD
        || text.matches('\n').count() > PASTE_NEWLINE_THRESHOLD
}

fn paste_label(id: u32, newline_count: usize) -> String {
    if newline_count == 0 {
        format!("[Pasted text #{id}]")
    } else {
        format!("[Pasted text #{id} +{newline_count} lines]")
    }
}

fn normalize_pasted_text(raw: &str) -> String {
    let normalized = raw.replace("\r\n", "\n").replace('\r', "\n");
    let mut plain = strip_ansi(&normalized);
    if plain.contains('\t') {
        plain = plain.replace('\t', "    ");
    }
    plain
}

fn strip_ansi(input: &str) -> String {
    if !input.contains('\u{1b}') {
        return input.to_owned();
    }

    let trailing_newline = input.ends_with('\n');
    let Ok(text) = input.into_text() else {
        return input.to_owned();
    };
    let mut plain = String::with_capacity(input.len());
    for (line_index, line) in text.lines.iter().enumerate() {
        if line_index > 0 {
            plain.push('\n');
        }
        for span in &line.spans {
            plain.push_str(span.content.as_ref());
        }
    }
    if trailing_newline {
        plain.push('\n');
    }
    plain
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn normalizes_clipboard_text_like_claude_normal() {
        assert_eq!(
            normalize_pasted_text("\u{1b}[31mred\u{1b}[0m\r\nnext\tcell\r"),
            "red\nnext    cell\n"
        );
    }

    #[test]
    fn collapse_threshold_and_label_match_claude_normal() {
        assert!(!should_collapse("one\ntwo\nthree"));
        assert!(should_collapse("one\ntwo\nthree\nfour"));
        assert!(should_collapse(&"x".repeat(801)));
        assert_eq!(paste_label(3, 0), "[Pasted text #3]");
        assert_eq!(paste_label(4, 3), "[Pasted text #4 +3 lines]");
    }
}
