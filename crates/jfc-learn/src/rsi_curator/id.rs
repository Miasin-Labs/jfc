use sha2::{Digest, Sha256};

pub(super) fn candidate_id(kind: &str, target_kind: &str, target_name: &str, body: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(kind.as_bytes());
    hasher.update(target_kind.as_bytes());
    hasher.update(target_name.as_bytes());
    hasher.update(body.as_bytes());
    to_hex(&hasher.finalize())
}

pub(super) fn slug(value: &str) -> String {
    value
        .chars()
        .map(|c| {
            if c.is_ascii_alphanumeric() {
                c.to_ascii_lowercase()
            } else {
                '-'
            }
        })
        .collect::<String>()
        .split('-')
        .filter(|part| !part.is_empty())
        .collect::<Vec<_>>()
        .join("-")
}

fn to_hex(bytes: &[u8]) -> String {
    let mut out = String::with_capacity(bytes.len() * 2);
    for byte in bytes {
        out.push_str(&format!("{byte:02x}"));
    }
    out
}
