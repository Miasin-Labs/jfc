//! Adaptive energy-based voice activity detection (VAD) with noise rejection.
//!
//! Watches an audio stream and emits [`VadEvent::SpeechStart`] /
//! [`VadEvent::SpeechEnd`] as you start and stop talking. The design mirrors
//! the techniques production VADs (WebRTC, Deepgram endpointing, fast-vad)
//! converge on, implemented dependency-free over raw PCM frames.
//!
//! ## Why more than an energy threshold
//!
//! A fixed energy threshold has two failure modes we hit in practice:
//!
//! - It needs hand-tuning per mic/room (too low → noise triggers it; too high
//!   → quiet speech is missed).
//! - Energy alone *cannot* tell your voice from a laptop fan or AC at the same
//!   loudness, so it keeps "recording" while the fan runs and never ends the
//!   utterance.
//!
//! ## The four layers
//!
//! 1. **Adaptive noise floor** — an exponential moving average of frame energy
//!    that only updates on non-speech frames, so the detector self-calibrates
//!    to the room instead of using a fixed number.
//! 2. **Hysteresis (double threshold)** — a high `onset` threshold to *start*
//!    speech, a lower `offset` threshold to *stay in* speech. The gap stops
//!    mid-word flicker.
//! 3. **Speech-vs-noise gates** (the fan fix) — to *start* a segment a loud
//!    frame must also (a) be **energy-modulated** (speech pulses at the ~4 Hz
//!    syllabic rate; a fan is flat) and (b) be **periodic** (voiced speech has
//!    a pitch; broadband noise does not).
//! 4. **Hangover** — speech only ends after `silence_frames` of sustained
//!    silence, so natural pauses ("um, like…") don't cut you off.
//!
//! ## Env overrides
//!
//! - `JFC_VAD_THRESHOLD` — fixed onset threshold; disables the adaptive floor
//!   and the speech-vs-noise gates (simple energy mode, for tests/back-compat).
//! - `JFC_VAD_SILENCE_MS` — silence before speech ends (default 1000).
//! - `JFC_VAD_NOISE_MARGIN` — onset = noise_floor × margin (default 3.0).
//! - `JFC_VAD_MIN_MODULATION` — min energy coefficient-of-variation (default 0.10; 0 disables).
//! - `JFC_VAD_MIN_PERIODICITY` — min autocorrelation peak to start (default 0.35; 0 disables).

use std::collections::VecDeque;

/// VAD events emitted during monitoring.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum VadEvent {
    /// Speech has started (enough consecutive voiced frames).
    SpeechStart,
    /// Speech has ended (enough consecutive silent frames after speech).
    SpeechEnd,
}

/// Frames of recent energy kept for the modulation test (~400ms @ 20ms).
const MODULATION_WINDOW: usize = 20;
/// Minimum frames of history before the modulation statistic is trusted.
/// Until then `energy_is_modulated` returns false, so a loud steady source
/// (a fan) can't sneak a false start through in the first few frames.
const MODULATION_MIN_FRAMES: usize = 6;

/// Adaptive energy-based VAD state machine.
pub struct Vad {
    /// Frames that must be voiced before triggering SpeechStart.
    speech_onset_frames: usize,
    /// Frames that must be silent before triggering SpeechEnd (the hangover).
    silence_frames: usize,
    /// Frame duration in samples (frame_bytes / 2 for 16-bit).
    frame_samples: usize,

    // ── Adaptive thresholding ──────────────────────────────────────────────
    /// Running noise-floor estimate (RMS), updated on non-speech frames.
    noise_floor: f64,
    /// onset = noise_floor × onset_margin (or fixed_threshold if set).
    onset_margin: f64,
    /// offset = noise_floor × offset_margin (continue-speech threshold).
    offset_margin: f64,
    /// EMA smoothing factor for the noise floor (0..1, smaller = slower).
    noise_alpha: f64,
    /// When `Some`, use this fixed onset threshold and skip adaptive logic +
    /// speech-vs-noise gates (simple energy mode; used by tests / manual tune).
    fixed_threshold: Option<u32>,
    /// True until the floor has been seeded by the first few frames.
    floor_seeded: bool,
    frames_seen: usize,

    // ── Speech-vs-noise discrimination ─────────────────────────────────────
    /// Recent per-frame RMS, for the energy-modulation test.
    rms_history: VecDeque<u32>,
    /// Minimum energy coefficient-of-variation to count as speech (0 = off).
    min_modulation: f64,
    /// Minimum autocorrelation-peak periodicity to *start* speech (0 = off).
    min_periodicity: f64,
    /// Most recent frame periodicity score (for diagnostics).
    last_periodicity: f64,
    /// Most recent frame zero-crossing rate (for diagnostics).
    last_zcr: f32,

    // ── Detection state ────────────────────────────────────────────────────
    consecutive_voiced: usize,
    consecutive_silent: usize,
    in_speech: bool,
    /// Most recent frame RMS — exposed for the UI level meter.
    last_rms: u32,
    /// Leftover bytes from the last push that didn't fill a complete frame.
    leftover: Vec<u8>,
}

impl Vad {
    /// Create with adaptive parameters (or a fixed threshold via env).
    pub fn new() -> Self {
        let frame_ms = 20; // 20ms frames
        let sample_rate = 16_000u32;
        let frame_samples = (sample_rate * frame_ms / 1000) as usize; // 320

        // Silence window before declaring end-of-utterance. 1000ms matches
        // Deepgram's `utterance_end_ms` default and rides through natural
        // between-word pauses. Override via JFC_VAD_SILENCE_MS.
        let silence_ms = env_u32("JFC_VAD_SILENCE_MS", 1000);
        let silence_frames =
            (silence_ms * sample_rate / 1000 / frame_samples as u32).max(1) as usize;

        // Optional fixed threshold (disables adaptive floor + noise gates).
        let fixed_threshold = std::env::var("JFC_VAD_THRESHOLD")
            .ok()
            .and_then(|s| s.parse::<u32>().ok());

        let onset_margin = env_f64("JFC_VAD_NOISE_MARGIN", 3.0).max(1.1);

        // Speech-vs-noise gates are on by default in adaptive mode, off when a
        // fixed threshold is pinned (back-compat / deterministic tests).
        let min_modulation = env_f64(
            "JFC_VAD_MIN_MODULATION",
            if fixed_threshold.is_some() { 0.0 } else { 0.10 },
        );
        // Real-speech calibration: measured single-frame (20ms, 320-sample)
        // autocorrelation peaks for actual conversational speech run ~0.19–0.65
        // (median ≈ 0.45), while broadband noise (fans, AC, chair scrapes) sits
        // near ~0.10. 0.35 catches ~95% of voice frames while staying well
        // above the noise band. (An earlier 0.55 was miscalibrated against
        // synthetic tones and rejected most real speech.)
        let min_periodicity = env_f64(
            "JFC_VAD_MIN_PERIODICITY",
            if fixed_threshold.is_some() { 0.0 } else { 0.35 },
        );

        Self {
            speech_onset_frames: 3,
            silence_frames,
            frame_samples,
            // Seed the floor non-zero so the first frames don't all read as
            // speech before the EMA adapts.
            noise_floor: 150.0,
            onset_margin,
            offset_margin: onset_margin * 0.6, // hysteresis gap
            noise_alpha: 0.05,
            fixed_threshold,
            floor_seeded: false,
            frames_seen: 0,
            rms_history: VecDeque::with_capacity(MODULATION_WINDOW),
            min_modulation,
            min_periodicity,
            last_periodicity: 0.0,
            last_zcr: 0.0,
            consecutive_voiced: 0,
            consecutive_silent: 0,
            in_speech: false,
            last_rms: 0,
            leftover: Vec::new(),
        }
    }

    /// Push raw 16-bit signed PCM bytes. Returns any VAD events detected.
    pub fn push(&mut self, pcm: &[u8]) -> Vec<VadEvent> {
        let mut events = Vec::new();
        let mut buf = std::mem::take(&mut self.leftover);
        buf.extend_from_slice(pcm);

        let frame_bytes = self.frame_samples * 2;
        let mut pos = 0;
        while pos + frame_bytes <= buf.len() {
            let frame = &buf[pos..pos + frame_bytes];
            pos += frame_bytes;
            if let Some(ev) = self.process_frame(frame) {
                events.push(ev);
            }
        }

        self.leftover = buf[pos..].to_vec();
        events
    }

    /// Process one complete frame and return a state-transition event, if any.
    fn process_frame(&mut self, frame: &[u8]) -> Option<VadEvent> {
        let rms = rms_energy(frame);
        self.last_rms = rms;
        self.last_zcr = zero_crossing_rate(frame);
        self.frames_seen += 1;

        self.rms_history.push_back(rms);
        while self.rms_history.len() > MODULATION_WINDOW {
            self.rms_history.pop_front();
        }

        let (onset, offset) = self.thresholds();
        // Hysteresis: in-speech uses the lower offset threshold; idle uses the
        // higher onset threshold.
        let loud_enough = if self.in_speech {
            rms as f64 >= offset
        } else {
            rms as f64 >= onset
        };

        // Speech-vs-noise gates — the fan fix. Only applied to *starting*
        // speech (and skipped entirely in fixed-threshold mode). Once we're in
        // a segment the silence hangover handles ending, so quiet vowels /
        // unvoiced consonants inside a word don't get cut.
        let speech_like = if self.fixed_threshold.is_some() || self.in_speech {
            true
        } else {
            let modulated = self.min_modulation <= 0.0 || self.energy_is_modulated();
            let periodic = if self.min_periodicity <= 0.0 {
                true
            } else {
                self.last_periodicity = frame_periodicity(frame);
                self.last_periodicity >= self.min_periodicity
            };
            modulated && periodic
        };

        let voiced = loud_enough && speech_like;

        if voiced {
            self.consecutive_voiced += 1;
            self.consecutive_silent = 0;
        } else {
            self.consecutive_silent += 1;
            self.consecutive_voiced = 0;
            // Adapt the noise floor on any non-voiced frame (including a loud
            // but flat fan), so the floor rises to absorb steady noise.
            self.update_noise_floor(rms);
        }

        if !self.in_speech && self.consecutive_voiced >= self.speech_onset_frames {
            self.in_speech = true;
            return Some(VadEvent::SpeechStart);
        }
        if self.in_speech && self.consecutive_silent >= self.silence_frames {
            self.in_speech = false;
            self.consecutive_voiced = 0;
            return Some(VadEvent::SpeechEnd);
        }
        None
    }

    /// Whether the recent energy window fluctuates enough to be speech rather
    /// than steady noise. Coefficient of variation (stddev / mean): speech
    /// ≈ 0.3–1.0 (syllabic pulsing), a steady fan/AC ≈ < 0.1.
    ///
    /// Returns `false` until at least `MODULATION_MIN_FRAMES` of history exist,
    /// so a loud steady source (a fan) can't sneak a false start through in the
    /// first few frames before the statistic is meaningful. This adds ~100ms of
    /// onset latency, which is imperceptible.
    fn energy_is_modulated(&self) -> bool {
        let n = self.rms_history.len();
        if n < MODULATION_MIN_FRAMES {
            return false;
        }
        let mean = self.rms_history.iter().map(|&r| r as f64).sum::<f64>() / n as f64;
        if mean < 1.0 {
            return false;
        }
        let var = self
            .rms_history
            .iter()
            .map(|&r| {
                let d = r as f64 - mean;
                d * d
            })
            .sum::<f64>()
            / n as f64;
        (var.sqrt() / mean) >= self.min_modulation
    }

    /// Current (onset, offset) thresholds.
    fn thresholds(&self) -> (f64, f64) {
        if let Some(fixed) = self.fixed_threshold {
            // Manual mode: onset = fixed, offset = 60% of fixed (hysteresis).
            (fixed as f64, fixed as f64 * 0.6)
        } else {
            let onset = self.noise_floor * self.onset_margin;
            let offset = self.noise_floor * self.offset_margin;
            // Floor the onset so a near-silent room doesn't make faint sounds
            // count as speech.
            (onset.max(120.0), offset.max(72.0))
        }
    }

    /// Update the adaptive noise floor with an EMA over silent frames.
    fn update_noise_floor(&mut self, rms: u32) {
        let x = rms as f64;
        if !self.floor_seeded {
            // Seed quickly from the first ~10 silent frames, then settle into
            // the slow EMA so the floor tracks the room without lag.
            self.noise_floor = 0.7 * self.noise_floor + 0.3 * x;
            if self.frames_seen >= 10 {
                self.floor_seeded = true;
            }
        } else {
            self.noise_floor =
                (1.0 - self.noise_alpha) * self.noise_floor + self.noise_alpha * x;
        }
        self.noise_floor = self.noise_floor.clamp(20.0, 8000.0);
    }

    /// Force a SpeechEnd if we're currently in speech (e.g. on PTT release).
    pub fn force_end(&mut self) -> bool {
        if self.in_speech {
            self.in_speech = false;
            self.consecutive_voiced = 0;
            self.consecutive_silent = 0;
            true
        } else {
            false
        }
    }

    /// Whether VAD currently considers us in a speech segment.
    pub fn is_speaking(&self) -> bool {
        self.in_speech
    }

    /// Most recent frame RMS energy (for a live level meter).
    pub fn last_rms(&self) -> u32 {
        self.last_rms
    }

    /// Most recent frame zero-crossing rate (0..1), for diagnostics.
    pub fn last_zcr(&self) -> f32 {
        self.last_zcr
    }

    /// Most recent frame periodicity score (0..1), for diagnostics.
    pub fn last_periodicity(&self) -> f64 {
        self.last_periodicity
    }

    /// Current adaptive noise floor estimate (for diagnostics / meter scaling).
    pub fn noise_floor(&self) -> u32 {
        self.noise_floor as u32
    }

    /// A 0.0..1.0 voice level for the UI meter, scaled between the noise floor
    /// and a typical speech ceiling so quiet voices still move the bar.
    pub fn level(&self) -> f32 {
        let (onset, _) = self.thresholds();
        let floor = onset.min(self.last_rms as f64);
        let ceil = (onset * 8.0).max(floor + 1.0);
        (((self.last_rms as f64 - floor) / (ceil - floor)).clamp(0.0, 1.0)) as f32
    }

    /// Reset detection state (e.g. between utterances). Keeps the learned
    /// noise floor so the next utterance benefits from prior adaptation.
    pub fn reset(&mut self) {
        self.consecutive_voiced = 0;
        self.consecutive_silent = 0;
        self.in_speech = false;
        self.last_rms = 0;
        self.last_zcr = 0.0;
        self.last_periodicity = 0.0;
        self.rms_history.clear();
        self.leftover.clear();
    }
}

impl Default for Vad {
    fn default() -> Self {
        Self::new()
    }
}

fn env_u32(key: &str, default: u32) -> u32 {
    std::env::var(key)
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(default)
}

fn env_f64(key: &str, default: f64) -> f64 {
    std::env::var(key)
        .ok()
        .and_then(|s| s.parse().ok())
        .unwrap_or(default)
}

/// Zero-crossing rate of a 16-bit LE PCM frame: fraction of adjacent sample
/// pairs whose sign changes. Returns 0.0..=1.0. Low for hum, high for hiss.
pub fn zero_crossing_rate(pcm_bytes: &[u8]) -> f32 {
    let samples: Vec<i16> = pcm_bytes
        .chunks_exact(2)
        .map(|b| i16::from_le_bytes([b[0], b[1]]))
        .collect();
    if samples.len() < 2 {
        return 0.0;
    }
    let crossings = samples
        .windows(2)
        .filter(|w| (w[0] >= 0) != (w[1] >= 0))
        .count();
    crossings as f32 / (samples.len() - 1) as f32
}

/// Periodicity of a 16-bit LE PCM frame, in `0.0..=1.0`.
///
/// Peak of the normalized autocorrelation over lags for the human pitch range
/// (80–400 Hz at 16 kHz → lags 40–200). Voiced speech is quasi-periodic and
/// scores high; broadband noise (fans, AC, hiss) is aperiodic and scores low.
pub fn frame_periodicity(pcm_bytes: &[u8]) -> f64 {
    let samples: Vec<f64> = pcm_bytes
        .chunks_exact(2)
        .map(|b| i16::from_le_bytes([b[0], b[1]]) as f64)
        .collect();
    let n = samples.len();
    const MIN_LAG: usize = 40; // 16000 / 400 Hz
    const MAX_LAG: usize = 200; // 16000 / 80 Hz
    if n <= MAX_LAG + 1 {
        return 0.0;
    }
    let energy0: f64 = samples.iter().map(|&s| s * s).sum();
    if energy0 <= f64::EPSILON {
        return 0.0;
    }
    let mut best = 0.0f64;
    for lag in MIN_LAG..=MAX_LAG {
        let mut acc = 0.0f64;
        for i in 0..(n - lag) {
            acc += samples[i] * samples[i + lag];
        }
        let norm = acc / energy0;
        if norm > best {
            best = norm;
        }
    }
    best.clamp(0.0, 1.0)
}

/// Root-mean-square energy of a 16-bit LE PCM byte buffer.
/// Returns a value in [0, 32767].
pub fn rms_energy(pcm_bytes: &[u8]) -> u32 {
    if pcm_bytes.len() < 2 {
        return 0;
    }
    let sum_sq: u64 = pcm_bytes
        .chunks_exact(2)
        .map(|b| {
            let s = i16::from_le_bytes([b[0], b[1]]) as i64;
            (s * s) as u64
        })
        .sum();
    let mean_sq = sum_sq / (pcm_bytes.len() as u64 / 2);
    (mean_sq as f64).sqrt() as u32
}

#[cfg(test)]
mod tests {
    use super::*;

    fn silent_frame(samples: usize) -> Vec<u8> {
        vec![0u8; samples * 2]
    }

    /// Square wave at `amplitude` — loud but maximally periodic, used for the
    /// fixed-threshold (gate-off) tests.
    fn loud_frame(samples: usize, amplitude: i16) -> Vec<u8> {
        (0..samples)
            .flat_map(|i| {
                let v: i16 = if i % 2 == 0 { amplitude } else { -amplitude };
                v.to_le_bytes()
            })
            .collect()
    }

    /// A pitched, modulated, voiced-like frame at the given lag (pitch period)
    /// and amplitude — high periodicity, used for adaptive-mode speech tests.
    fn voiced_frame(samples: usize, lag: usize, amplitude: i16) -> Vec<u8> {
        (0..samples)
            .flat_map(|i| {
                // Triangle-ish periodic wave at `lag` samples/period.
                let phase = (i % lag) as f64 / lag as f64;
                let v = (amplitude as f64) * (2.0 * phase - 1.0);
                (v as i16).to_le_bytes()
            })
            .collect()
    }

    /// Loud but *aperiodic* broadband noise — a faithful model of a fan / AC /
    /// hiss / chair-scrape. High energy, no pitch peak. Uses a high-quality
    /// PRNG (SplitMix64) so successive samples are uncorrelated (real white
    /// noise scores ~0.10 periodicity; a weak PRNG can leave spurious structure).
    fn noise_frame(samples: usize, amplitude: i16, seed: u64) -> Vec<u8> {
        let mut state = seed.wrapping_add(0x9E3779B97F4A7C15);
        let mut next = || {
            // SplitMix64
            state = state.wrapping_add(0x9E3779B97F4A7C15);
            let mut z = state;
            z = (z ^ (z >> 30)).wrapping_mul(0xBF58476D1CE4E5B9);
            z = (z ^ (z >> 27)).wrapping_mul(0x94D049BB133111EB);
            z ^ (z >> 31)
        };
        (0..samples)
            .flat_map(|_| {
                let span = 2 * amplitude as i64 + 1;
                let r = (next() % span as u64) as i64 - amplitude as i64;
                (r as i16).to_le_bytes()
            })
            .collect()
    }

    /// Push `frames` copies and report whether SpeechStart ever fired.
    fn ran_speech_start(vad: &mut Vad, frame: &[u8], frames: usize) -> bool {
        (0..frames).any(|_| vad.push(frame).contains(&VadEvent::SpeechStart))
    }

    /// Seed modulation history with quiet frames, then push a continuous run of
    /// loud frames; report whether SpeechStart fired. Models real speech onset.
    fn ran_seeded_speech_start(vad: &mut Vad, loud: &[u8], quiet: &[u8], loud_frames: usize) -> bool {
        for _ in 0..6 {
            vad.push(quiet);
        }
        ran_speech_start(vad, loud, loud_frames)
    }

    /// Build a VAD with a fixed threshold so loudness-only tests are
    /// deterministic and independent of the adaptive gates.
    fn fixed_vad(threshold: u32) -> Vad {
        let mut v = Vad::new();
        v.fixed_threshold = Some(threshold);
        v.min_modulation = 0.0;
        v.min_periodicity = 0.0;
        v.silence_frames = 5;
        v
    }

    #[test]
    fn rms_silent_is_zero_normal() {
        assert_eq!(rms_energy(&silent_frame(320)), 0);
    }

    #[test]
    fn rms_loud_above_threshold_normal() {
        assert!(rms_energy(&loud_frame(320, 5000)) > 300);
    }

    #[test]
    fn zcr_silent_is_zero_normal() {
        assert_eq!(zero_crossing_rate(&silent_frame(320)), 0.0);
    }

    #[test]
    fn zcr_alternating_is_high_normal() {
        assert!(zero_crossing_rate(&loud_frame(320, 5000)) > 0.9);
    }

    #[test]
    fn periodicity_high_for_pitched_signal_normal() {
        // A clean periodic wave at a pitch lag should score high.
        let p = frame_periodicity(&voiced_frame(320, 80, 6000));
        assert!(p > 0.5, "pitched signal should be periodic, got {p}");
    }

    #[test]
    fn periodicity_low_for_broadband_noise_robust() {
        // Aperiodic noise (a fan) should score low — this is what lets the VAD
        // distinguish it from a voice at the same loudness.
        let p = frame_periodicity(&noise_frame(320, 6000, 7));
        assert!(p < 0.5, "broadband noise should be aperiodic, got {p}");
    }

    #[test]
    fn vad_detects_speech_start_normal() {
        let mut vad = fixed_vad(300);
        let loud = loud_frame(320, 5000);
        let events: Vec<VadEvent> = (0..5).flat_map(|_| vad.push(&loud)).collect();
        assert!(events.contains(&VadEvent::SpeechStart));
    }

    #[test]
    fn vad_detects_speech_end_after_silence_normal() {
        let mut vad = fixed_vad(300);
        let loud = loud_frame(320, 5000);
        for _ in 0..5 {
            vad.push(&loud);
        }
        let silent = silent_frame(320);
        let events: Vec<VadEvent> = (0..10).flat_map(|_| vad.push(&silent)).collect();
        assert!(events.contains(&VadEvent::SpeechEnd));
    }

    #[test]
    fn vad_no_speech_end_without_start_robust() {
        let mut vad = fixed_vad(300);
        let silent = silent_frame(320);
        let events: Vec<VadEvent> = (0..100).flat_map(|_| vad.push(&silent)).collect();
        assert!(!events.contains(&VadEvent::SpeechEnd));
    }

    #[test]
    fn hysteresis_keeps_speech_through_quiet_dip_normal() {
        let mut vad = fixed_vad(300); // onset 300, offset 180
        let loud = loud_frame(320, 5000);
        for _ in 0..5 {
            vad.push(&loud);
        }
        assert!(vad.is_speaking());
        // RMS ~200: below onset(300) but above offset(180) → stays in speech.
        let dip = loud_frame(320, 200);
        let events: Vec<VadEvent> = (0..3).flat_map(|_| vad.push(&dip)).collect();
        assert!(!events.contains(&VadEvent::SpeechEnd));
        assert!(vad.is_speaking());
    }

    #[test]
    fn adaptive_floor_rises_with_background_noise_normal() {
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        let noise = loud_frame(320, 300);
        for _ in 0..50 {
            vad.push(&noise);
        }
        assert!(vad.noise_floor() > 150, "floor should rise with sustained noise");
    }

    #[test]
    fn adaptive_rejects_loud_fan_noise_normal() {
        // THE fan fix: loud but aperiodic broadband noise must NOT start speech
        // in adaptive mode, even though it clears any energy threshold.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        // Vary the seed each frame so the noise is genuinely non-repeating.
        let started = (0..80).any(|i| {
            let fan = noise_frame(320, 5000, i as u64);
            vad.push(&fan).contains(&VadEvent::SpeechStart)
        });
        assert!(!started, "loud steady fan noise must not be treated as speech");
    }

    #[test]
    fn adaptive_accepts_modulated_voiced_speech_normal() {
        // Pulsing, pitched frames (loud voiced / quiet gaps) carry both
        // periodicity and syllabic modulation → detected as speech.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        let loud = voiced_frame(320, 80, 7000);
        let quiet = silent_frame(320);
        assert!(
            ran_seeded_speech_start(&mut vad, &loud, &quiet, 10),
            "modulated voiced speech should be detected"
        );
    }

    #[test]
    fn adaptive_rejects_chair_movement_transients_normal() {
        // Moving a chair / wheelchair makes brief aperiodic clunks and scrapes
        // — loud bursts, but (a) aperiodic (no pitch) and (b) too short to
        // satisfy the 3-frame onset debounce. Simulate random short noise
        // bursts separated by quiet and confirm none start speech.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        let quiet = silent_frame(320);
        let started = (0..40).any(|i| {
            // 1-frame loud aperiodic burst, then quiet — a "clunk".
            let burst = noise_frame(320, 8000, (i * 31 + 5) as u64);
            let a = vad.push(&burst).contains(&VadEvent::SpeechStart);
            let b = vad.push(&quiet).contains(&VadEvent::SpeechStart);
            a || b
        });
        assert!(
            !started,
            "brief aperiodic chair-movement transients must not start speech"
        );
    }

    #[test]
    fn voiced_speech_beats_fan_noise_floor_normal() {
        // After a fan raises the noise floor, genuine voiced speech (periodic,
        // louder, modulated) should still trigger SpeechStart.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        for i in 0..50 {
            vad.push(&noise_frame(320, 3000, i as u64)); // learn the fan floor
        }
        let loud = voiced_frame(320, 80, 9000);
        let quiet = silent_frame(320);
        assert!(
            ran_seeded_speech_start(&mut vad, &loud, &quiet, 10),
            "voiced speech should rise above a learned fan floor"
        );
    }

    #[test]
    fn fan_noise_does_not_trigger_speech_normal() {
        // Steady broadband noise (a fan): loud but aperiodic. Must not start
        // speech in adaptive mode, no matter how long it runs.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        let started = (0..100).any(|i| ran_speech_start(&mut vad, &noise_frame(320, 5000, i), 1));
        assert!(!started, "steady fan noise must not be detected as speech");
    }

    #[test]
    fn chair_movement_transient_does_not_trigger_speech_normal() {
        // Simulate moving around in a chair / wheelchair: bursts of loud
        // aperiodic noise separated by quiet, repeated. None of it is pitched,
        // so the periodicity gate (plus the onset debounce) must reject it all.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        let quiet = silent_frame(320);
        let mut started = false;
        for burst in 0..30 {
            // Each "scrape" is a few loud noise frames, then quiet.
            for f in 0..4 {
                let frame = noise_frame(320, 7000, (burst * 10 + f) as u64);
                if ran_speech_start(&mut vad, &frame, 1) {
                    started = true;
                }
            }
            for _ in 0..3 {
                if ran_speech_start(&mut vad, &quiet, 1) {
                    started = true;
                }
            }
        }
        assert!(
            !started,
            "chair/wheelchair movement (aperiodic transients) must not start speech"
        );
    }

    #[test]
    fn voiced_speech_still_detected_amid_noise_floor_normal() {
        // After a fan has raised the noise floor, genuine pitched speech
        // (periodic, louder) still triggers.
        let mut vad = Vad::new();
        vad.fixed_threshold = None;
        for i in 0..50 {
            vad.push(&noise_frame(320, 3000, i)); // learn the fan floor
        }
        let started = ran_speech_start(&mut vad, &voiced_frame(320, 80, 9000), 8);
        assert!(started, "real voiced speech must beat the noise floor");
    }

    #[test]
    fn level_meter_in_range_normal() {
        let mut vad = fixed_vad(300);
        vad.push(&loud_frame(320, 5000));
        let lvl = vad.level();
        assert!((0.0..=1.0).contains(&lvl));
        assert!(lvl > 0.0);
    }

    #[test]
    fn level_meter_silent_is_low_robust() {
        let mut vad = fixed_vad(300);
        vad.push(&silent_frame(320));
        assert!(vad.level() < 0.2);
    }

    #[test]
    fn force_end_while_speaking_normal() {
        let mut vad = fixed_vad(300);
        for _ in 0..5 {
            vad.push(&loud_frame(320, 5000));
        }
        assert!(vad.is_speaking());
        assert!(vad.force_end());
        assert!(!vad.is_speaking());
    }

    #[test]
    fn force_end_while_silent_returns_false_robust() {
        let mut vad = fixed_vad(300);
        assert!(!vad.force_end());
    }
}

