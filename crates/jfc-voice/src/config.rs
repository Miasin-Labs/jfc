//! Voice mode configuration — parsed from ClaudeCompatibilityConfig.voice.

use serde::{Deserialize, Serialize};

/// How push-to-talk or voice activity detection is triggered.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize, Default)]
#[serde(rename_all = "lowercase")]
pub enum VoiceMode {
    /// Hold the push-to-talk key to record; release to submit (default).
    #[default]
    Hold,
    /// Tap the key once to start recording, tap again to stop and submit.
    Tap,
    /// Hands-free: always listening, auto-detects speech via energy VAD.
    /// Starts recording when you speak, stops after silence, auto-submits.
    /// No key press needed — just talk.
    Vad,
}

impl VoiceMode {
    pub fn from_str(s: &str) -> Option<Self> {
        match s.trim().to_lowercase().as_str() {
            "hold" => Some(Self::Hold),
            "tap" => Some(Self::Tap),
            "vad" | "auto" | "handsfree" | "hands-free" | "continuous" => Some(Self::Vad),
            _ => None,
        }
    }

    pub fn label(self) -> &'static str {
        match self {
            Self::Hold => "hold",
            Self::Tap => "tap",
            Self::Vad => "vad",
        }
    }
}

/// Which VAD engine drives hands-free speech detection.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum VadEngine {
    /// Dependency-free energy + periodicity + modulation detector (default).
    #[default]
    Energy,
    /// Neural Silero VAD (requires the `vad-neural` build feature). Far more
    /// robust to tonal noise / babble / low SNR; falls back to Energy when the
    /// feature isn't compiled in or the model fails to load.
    Neural,
}

impl VadEngine {
    /// Resolve the configured engine from `JFC_VAD_ENGINE`
    /// (`neural`/`silero`/`onnx` → Neural, anything else → Energy).
    pub fn from_env() -> Self {
        match std::env::var("JFC_VAD_ENGINE")
            .unwrap_or_default()
            .to_lowercase()
            .as_str()
        {
            "neural" | "silero" | "onnx" | "ml" => Self::Neural,
            _ => Self::Energy,
        }
    }

    /// Parse from a config-file string. `None` for unrecognized values.
    pub fn from_str(s: &str) -> Option<Self> {
        match s.trim().to_lowercase().as_str() {
            "energy" | "classic" | "default" => Some(Self::Energy),
            "neural" | "silero" | "onnx" | "ml" => Some(Self::Neural),
            _ => None,
        }
    }

    pub fn label(self) -> &'static str {
        match self {
            Self::Energy => "energy",
            Self::Neural => "neural",
        }
    }
}

/// Resolved voice configuration.
#[derive(Debug, Clone, Default)]
pub struct VoiceConfig {
    /// Voice mode is enabled.
    pub enabled: bool,
    /// Hold or tap mode.
    pub mode: VoiceMode,
    /// Which VAD engine drives hands-free mode (energy vs neural Silero).
    pub vad_engine: VadEngine,
    /// Auto-submit after hold-to-talk release (hold mode only).
    pub auto_submit: bool,
    /// BCP-47 language code for STT (default "en").
    pub language: String,
    /// Which STT backend to prefer.
    pub backend: SttBackendKind,
    /// Override the Anthropic voice stream WebSocket URL.
    pub anthropic_voice_url: Option<String>,
    /// OpenAI API key for Whisper API backend.
    pub openai_api_key: Option<String>,
    /// Path to local whisper binary (e.g. "whisper-cpp", "whisper").
    pub local_whisper_bin: Option<String>,
    /// Path to whisper model file for local backend.
    pub local_whisper_model: Option<String>,
}

/// Which STT backend to attempt first.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum SttBackendKind {
    /// Try Anthropic WebSocket first, then OpenAI, then local.
    #[default]
    Auto,
    /// Anthropic real-time WebSocket (requires Claude.ai OAuth).
    Anthropic,
    /// OpenAI Whisper API (requires OPENAI_API_KEY).
    OpenAiWhisper,
    /// Local whisper.cpp binary (works offline).
    LocalWhisper,
}

impl VoiceConfig {
    /// Build from the `voice` serde_json::Value from ClaudeCompatibilityConfig.
    pub fn from_settings(voice_value: Option<&serde_json::Value>) -> Self {
        let mut cfg = Self {
            language: std::env::var("JFC_VOICE_LANGUAGE")
                .unwrap_or_else(|_| "en".to_owned()),
            anthropic_voice_url: std::env::var("JFC_VOICE_ANTHROPIC_URL")
                .ok()
                .or_else(|| std::env::var("VOICE_STREAM_BASE_URL").ok()),
            openai_api_key: std::env::var("OPENAI_API_KEY").ok(),
            local_whisper_bin: std::env::var("JFC_WHISPER_BIN").ok(),
            local_whisper_model: std::env::var("JFC_WHISPER_MODEL").ok(),
            backend: parse_backend_env(),
            vad_engine: VadEngine::from_env(),
            ..Default::default()
        };

        let Some(v) = voice_value else { return cfg };

        // voice.enabled / voiceEnabled (both shapes CC supports)
        if let Some(enabled) = v.get("enabled").and_then(|e| e.as_bool()) {
            cfg.enabled = enabled;
        }

        // voice.mode: "hold" | "tap"
        if let Some(mode_str) = v.get("mode").and_then(|m| m.as_str()) {
            if let Some(mode) = VoiceMode::from_str(mode_str) {
                cfg.mode = mode;
            }
        }

        // voice.vadEngine: "energy" | "neural" (env JFC_VAD_ENGINE wins).
        if let Some(engine_str) = v.get("vadEngine").and_then(|m| m.as_str()) {
            if std::env::var("JFC_VAD_ENGINE").is_err() {
                if let Some(engine) = VadEngine::from_str(engine_str) {
                    cfg.vad_engine = engine;
                }
            }
        }

        // voice.autoSubmit
        if let Some(auto) = v.get("autoSubmit").and_then(|a| a.as_bool()) {
            cfg.auto_submit = auto;
        }

        cfg
    }

    /// Determine which backend to actually use, given available credentials.
    pub fn effective_backend(&self) -> SttBackendKind {
        match self.backend {
            SttBackendKind::Auto => {
                // Anthropic first if we have any auth (checked at call time)
                SttBackendKind::Anthropic
            }
            other => other,
        }
    }

    /// Human-readable description of the active mode for the /voice output.
    pub fn mode_hint(&self) -> String {
        let key = "Space"; // default push-to-talk key
        match self.mode {
            VoiceMode::Hold => format!("Hold {key} to record, release to send."),
            VoiceMode::Tap => format!("Tap {key} (empty input) to start, tap again to send."),
            VoiceMode::Vad => format!(
                "Hands-free — just speak. {} VAD detects speech automatically.",
                self.vad_engine.label()
            ),
        }
    }
}

fn parse_backend_env() -> SttBackendKind {
    match std::env::var("JFC_VOICE_BACKEND")
        .unwrap_or_default()
        .to_lowercase()
        .as_str()
    {
        "anthropic" => SttBackendKind::Anthropic,
        "openai" | "whisper-api" | "openai-whisper" => SttBackendKind::OpenAiWhisper,
        "local" | "whisper" | "local-whisper" | "whisper-cpp" => SttBackendKind::LocalWhisper,
        _ => SttBackendKind::Auto,
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn voice_mode_from_str_normal() {
        assert_eq!(VoiceMode::from_str("hold"), Some(VoiceMode::Hold));
        assert_eq!(VoiceMode::from_str("tap"), Some(VoiceMode::Tap));
        assert_eq!(VoiceMode::from_str("vad"), Some(VoiceMode::Vad));
        assert_eq!(VoiceMode::from_str("auto"), Some(VoiceMode::Vad));
        assert_eq!(VoiceMode::from_str("HOLD"), Some(VoiceMode::Hold));
        assert_eq!(VoiceMode::from_str("off"), None);
    }

    #[test]
    fn voice_config_from_settings_normal() {
        let val = json!({"enabled": true, "mode": "tap", "autoSubmit": true});
        let cfg = VoiceConfig::from_settings(Some(&val));
        assert!(cfg.enabled);
        assert_eq!(cfg.mode, VoiceMode::Tap);
        assert!(cfg.auto_submit);
    }

    #[test]
    fn voice_config_defaults_on_none_robust() {
        let cfg = VoiceConfig::from_settings(None);
        assert!(!cfg.enabled);
        assert_eq!(cfg.mode, VoiceMode::Hold);
        assert_eq!(cfg.vad_engine, VadEngine::Energy);
    }

    #[test]
    fn vad_engine_from_str_normal() {
        assert_eq!(VadEngine::from_str("energy"), Some(VadEngine::Energy));
        assert_eq!(VadEngine::from_str("neural"), Some(VadEngine::Neural));
        assert_eq!(VadEngine::from_str("silero"), Some(VadEngine::Neural));
        assert_eq!(VadEngine::from_str("ONNX"), Some(VadEngine::Neural));
        assert_eq!(VadEngine::from_str("bogus"), None);
    }

    #[test]
    fn vad_engine_default_is_energy_normal() {
        assert_eq!(VadEngine::default(), VadEngine::Energy);
        assert_eq!(VadEngine::Energy.label(), "energy");
        assert_eq!(VadEngine::Neural.label(), "neural");
    }

    #[test]
    fn voice_config_reads_vad_engine_from_settings_normal() {
        // Only when the env override isn't set (env wins over file).
        if std::env::var("JFC_VAD_ENGINE").is_err() {
            let val = json!({"enabled": true, "mode": "vad", "vadEngine": "neural"});
            let cfg = VoiceConfig::from_settings(Some(&val));
            assert_eq!(cfg.vad_engine, VadEngine::Neural);
        }
    }
}
