const DEFAULT_BASE_URL: &str = "https://integrate.api.nvidia.com/v1";

pub(super) fn nvidia_credentials() -> Option<NvidiaCredentials> {
    let api_key = env_value(["NVIDIA_API_KEY", "NVAPI_KEY"])
        .or_else(|| key_from_credentials_file("nvidia", "api_key"))?;
    let base_url = env_value(["NVIDIA_BASE_URL"])
        .or_else(|| key_from_credentials_file("nvidia", "base_url"))
        .unwrap_or_else(|| DEFAULT_BASE_URL.to_owned())
        .trim_end_matches('/')
        .to_owned();

    Some(NvidiaCredentials { api_key, base_url })
}

pub(super) struct NvidiaCredentials {
    pub(super) api_key: String,
    pub(super) base_url: String,
}

fn env_value<const N: usize>(names: [&str; N]) -> Option<String> {
    names
        .into_iter()
        .filter_map(|name| std::env::var(name).ok())
        .map(|value| value.trim().to_owned())
        .find(|value| !value.is_empty())
}

fn key_from_credentials_file(section: &str, key: &str) -> Option<String> {
    let home = std::env::var("HOME").ok()?;
    let path = std::path::PathBuf::from(home).join(".config/jfc/credentials.toml");
    let content = std::fs::read_to_string(path).ok()?;
    let mut in_section = false;
    let section_header = format!("[{section}]");
    for line in content.lines() {
        let trimmed = line.trim();
        if trimmed == section_header {
            in_section = true;
            continue;
        }
        if trimmed.starts_with('[') {
            in_section = false;
            continue;
        }
        if in_section
            && let Some((name, value)) = trimmed.split_once('=')
            && name.trim() == key
        {
            let value = value.trim().trim_matches('"').trim_matches('\'').trim();
            if !value.is_empty() {
                return Some(value.to_owned());
            }
        }
    }
    None
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::nvidia::NvidiaProvider;
    use jfc_provider::Provider;

    #[test]
    #[serial_test::serial(env)]
    fn from_env_accepts_nvapi_key_alias_normal() {
        unsafe {
            std::env::remove_var("NVIDIA_API_KEY");
            std::env::set_var("NVAPI_KEY", "nvapi-test");
            std::env::set_var("NVIDIA_BASE_URL", "https://integrate.api.nvidia.com/v1/");
        }
        let provider = NvidiaProvider::from_env().expect("provider from env");
        unsafe {
            std::env::remove_var("NVAPI_KEY");
            std::env::remove_var("NVIDIA_BASE_URL");
        }

        assert_eq!(provider.name(), "nvidia");
        assert_eq!(
            provider.chat_url(),
            "https://integrate.api.nvidia.com/v1/chat/completions"
        );
    }

    #[test]
    #[serial_test::serial(env)]
    fn from_env_falls_through_empty_primary_key_to_nvapi_alias_robust() {
        unsafe {
            std::env::set_var("NVIDIA_API_KEY", "");
            std::env::set_var("NVAPI_KEY", "nvapi-test");
        }
        let provider = NvidiaProvider::from_env().expect("provider from alias");
        unsafe {
            std::env::remove_var("NVIDIA_API_KEY");
            std::env::remove_var("NVAPI_KEY");
        }

        assert_eq!(provider.name(), "nvidia");
    }

    #[test]
    #[serial_test::serial(env)]
    fn credentials_file_parser_reads_nvidia_section_normal() {
        let dir = tempfile::tempdir().expect("tempdir");
        let config = dir.path().join(".config/jfc");
        std::fs::create_dir_all(&config).expect("config dir");
        std::fs::write(
            config.join("credentials.toml"),
            r#"
[openai]
api_key = "sk-test"

[nvidia]
api_key = "nvapi-test"
base_url = "https://integrate.api.nvidia.com/v1/"
"#,
        )
        .expect("credentials file");
        let old_home = std::env::var("HOME").ok();
        unsafe {
            std::env::set_var("HOME", dir.path());
        }
        let api_key = key_from_credentials_file("nvidia", "api_key");
        let base_url = key_from_credentials_file("nvidia", "base_url");
        unsafe {
            match old_home {
                Some(home) => std::env::set_var("HOME", home),
                None => std::env::remove_var("HOME"),
            }
        }

        assert_eq!(api_key.as_deref(), Some("nvapi-test"));
        assert_eq!(
            base_url.as_deref(),
            Some("https://integrate.api.nvidia.com/v1/")
        );
    }
}
