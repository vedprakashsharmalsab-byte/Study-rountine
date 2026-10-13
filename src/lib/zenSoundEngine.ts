// High-Performance Procedural Web Audio Engine for ARETĒ Zen Study Mode
// 30 Handcrafted Synthesis Soundscapes: Zero external files, 100% offline, zero bandwidth.

export interface ZenSoundDef {
  id: string;
  name: string;
  icon: string;
  category: "nature" | "noise" | "binaural" | "ambient" | "melodic";
  desc: string;
  scienceBacking?: string;
  evidenceBadge?: string;
}

export interface StopAlarmOption {
  id: string;
  name: string;
  icon: string;
  desc: string;
  frequencyDesc: string;
}

export const STOP_ALARM_OPTIONS: StopAlarmOption[] = [
  { id: "tibetan_bowl", name: "Tibetan Singing Bowl", icon: "🔔", desc: "432 Hz resonant bronze bell with warm meditative decay", frequencyDesc: "432 Hz Healing Resonance" },
  { id: "zen_gong", name: "Zen Bronze Gong", icon: "🏮", desc: "Deep 110 Hz mindful strike with harmonic overtones", frequencyDesc: "110 Hz Deep Fundamental" },
  { id: "digital_chime", name: "Crystal Chime", icon: "✨", desc: "Crisp two-tone alert chime (D5 to A5)", frequencyDesc: "587 Hz → 880 Hz Double Tone" },
  { id: "temple_bell", name: "Temple Bell", icon: "🏛️", desc: "528 Hz pure Solfeggio transformation tone", frequencyDesc: "528 Hz Solfeggio Scale" },
  { id: "academic_fanfare", name: "Academic Triumph", icon: "🎺", desc: "Bright triad fanfare celebrating completed study session", frequencyDesc: "C5-E5-G5 Triad" },
  { id: "gentle_harp", name: "Gentle Harp Flourish", icon: "🎵", desc: "Soft arpeggiated acoustic harp chord", frequencyDesc: "Pentatonic Flourish" },
  { id: "none", name: "Silent (Visual Flash)", icon: "🔕", desc: "No audio chime, discreet visual pulse only", frequencyDesc: "Muted" },
];

export const ZEN_SOUNDS: ZenSoundDef[] = [
  // NATURE (1-7)
  { id: "rain", name: "Gentle Rain", icon: "🌧️", category: "nature", desc: "Soothing rain on window" },
  { id: "heavy_rain", name: "Heavy Downpour", icon: "⛈️", category: "nature", desc: "Deep rain & distant thunder" },
  { id: "ocean", name: "Ocean Waves", icon: "🌊", category: "nature", desc: "Rhythmic surf washing ashore" },
  { id: "campfire", name: "Crackling Campfire", icon: "🪵", category: "nature", desc: "Warm wood pops & amber fire" },
  { id: "forest_wind", name: "Pine Forest Wind", icon: "🌲", category: "nature", desc: "Breeze through mountain pines" },
  { id: "mountain_stream", name: "Mountain Stream", icon: "🏞️", category: "nature", desc: "Fresh bubbling stream water" },
  { id: "crickets", name: "Midnight Crickets", icon: "🦗", category: "nature", desc: "Nocturnal summer evening calm" },

  // NOISE COLORS (8-10)
  { id: "brown_noise", name: "Brown Noise (Deep)", icon: "🟤", category: "noise", desc: "Deep 1/f² warm concentration", scienceBacking: "1/f² power drop dampens distracting sharp sounds, highly effective for ADHD and executive focus", evidenceBadge: "ADHD Focus" },
  { id: "pink_noise", name: "Pink Noise (Flow)", icon: "🌸", category: "noise", desc: "Balanced 1/f memory retention", scienceBacking: "1/f pink spectrum mimics natural biological rhythms, proven to boost memory consolidation", evidenceBadge: "Memory Boost" },
  { id: "white_noise", name: "White Noise (Focus)", icon: "🤍", category: "noise", desc: "Uniform noise for distraction blocking" },

  // BINAURAL BRAINWAVE ENTRAINMENT (11-13)
  { id: "binaural_alpha", name: "Alpha Beats (10 Hz)", icon: "🧠", category: "binaural", desc: "Alert calm & relaxed focus" },
  { id: "binaural_theta", name: "Theta Beats (6 Hz)", icon: "🧘", category: "binaural", desc: "Deep conceptual absorption" },
  { id: "binaural_gamma", name: "Gamma Beats (40 Hz)", icon: "⚡", category: "binaural", desc: "Peak cognition & math solving", scienceBacking: "MIT neuroscience research shows 40 Hz gamma oscillations enhance working memory, logic & complex math solving", evidenceBadge: "Peak Logic" },

  // AMBIENT & ASMR (14-22)
  { id: "cafe", name: "Cafe Ambience", icon: "☕", category: "ambient", desc: "Warm coffeehouse background murmur" },
  { id: "library", name: "Quiet Library", icon: "📖", category: "ambient", desc: "Peaceful hall with ticking clock" },
  { id: "keyboard_asmr", name: "Mechanical Keyboard", icon: "⌨️", category: "ambient", desc: "Rhythmic tactile clicky keystrokes" },
  { id: "airplane_cabin", name: "Airplane Cabin", icon: "✈️", category: "ambient", desc: "Hypnotic high-altitude hum" },
  { id: "lofi_vinyl", name: "Lo-Fi Vinyl Warmth", icon: "📻", category: "ambient", desc: "Vintage turntable crackle & warmth" },
  { id: "night_train", name: "Night Train Tracks", icon: "🚂", category: "ambient", desc: "Rhythmic rail clicks & sleeper drone" },
  { id: "underwater", name: "Submerged Calm", icon: "🤿", category: "ambient", desc: "Muffled aquatic pressure & peace" },
  { id: "zen_drops", name: "Zen Garden Drops", icon: "💧", category: "ambient", desc: "Rhythmic bamboo water drops" },
  { id: "clock_metronome", name: "60 BPM Metronome", icon: "🕰️", category: "ambient", desc: "Steady 1-second exam timekeeping" },

  // ATMOSPHERIC & HARMONIC (23-30)
  { id: "space_drone", name: "Cosmic Deep Drone", icon: "🌌", category: "melodic", desc: "Sub-bass harmonic space oscillation" },
  { id: "tibetan_bowl", name: "Tibetan Singing Bowl", icon: "🔔", category: "melodic", desc: "432 Hz resonant bronze overtone" },
  { id: "wind_chimes", name: "Autumn Wind Chimes", icon: "🎐", category: "melodic", desc: "Pentatonic metallic bells in breeze" },
  { id: "snowstorm", name: "Blizzard Snowstorm", icon: "❄️", category: "nature", desc: "Crisp winter wind gusts" },
  { id: "bamboo_rustle", name: "Bamboo Forest Wind", icon: "🌿", category: "nature", desc: "Stalks swaying in mountain wind" },
  { id: "cathedral", name: "Cathedral Drone", icon: "⛪", category: "melodic", desc: "Sacred acoustic hall resonance" },
  { id: "crystal_cave", name: "Crystal Cave Echo", icon: "💎", category: "melodic", desc: "High harmonic crystalline chiming" },
  { id: "lofi_piano", name: "Lo-Fi Piano Chords", icon: "🎹", category: "melodic", desc: "Slow warm modal chord resonance" }
];

class ZenSoundEngine {
  private ctx: AudioContext | null = null;
  private activeNodes: { stop: () => void }[] = [];
  private masterGain: GainNode | null = null;
  private currentSoundId: string | null = null;
  private volume: number = 0.5;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getCurrentSound(): string | null {
    return this.currentSoundId;
  }

  public stopAll() {
    this.activeNodes.forEach((node) => {
      try {
        node.stop();
      } catch {}
    });
    this.activeNodes = [];
    this.currentSoundId = null;
  }

  public playSound(soundId: string) {
    const ctx = this.getContext();
    if (!ctx) return;

    // If already playing this exact sound, stop it (toggle off)
    if (this.currentSoundId === soundId) {
      this.stopAll();
      return;
    }

    // Stop previous sound
    this.stopAll();
    this.currentSoundId = soundId;

    // Master gain for this sound session
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    // Smooth fade in (0.3s)
    master.gain.linearRampToValueAtTime(this.volume, ctx.currentTime + 0.3);
    master.connect(ctx.destination);
    this.masterGain = master;

    // Generator dispatch
    switch (soundId) {
      case "rain":
        this.createRain(ctx, master);
        break;
      case "heavy_rain":
        this.createHeavyRain(ctx, master);
        break;
      case "ocean":
        this.createOcean(ctx, master);
        break;
      case "campfire":
        this.createCampfire(ctx, master);
        break;
      case "forest_wind":
        this.createWind(ctx, master, 400, 150);
        break;
      case "snowstorm":
        this.createWind(ctx, master, 800, 300);
        break;
      case "bamboo_rustle":
        this.createWind(ctx, master, 600, 200);
        break;
      case "mountain_stream":
        this.createStream(ctx, master);
        break;
      case "crickets":
        this.createCrickets(ctx, master);
        break;
      case "brown_noise":
        this.createBrownNoise(ctx, master);
        break;
      case "pink_noise":
        this.createPinkNoise(ctx, master);
        break;
      case "white_noise":
        this.createWhiteNoise(ctx, master);
        break;
      case "binaural_alpha":
        this.createBinaural(ctx, master, 200, 10);
        break;
      case "binaural_theta":
        this.createBinaural(ctx, master, 150, 6);
        break;
      case "binaural_gamma":
        this.createBinaural(ctx, master, 240, 40);
        break;
      case "cafe":
        this.createCafe(ctx, master);
        break;
      case "library":
        this.createLibrary(ctx, master);
        break;
      case "keyboard_asmr":
        this.createKeyboardAsmr(ctx, master);
        break;
      case "airplane_cabin":
        this.createAirplane(ctx, master);
        break;
      case "lofi_vinyl":
        this.createVinyl(ctx, master);
        break;
      case "night_train":
        this.createTrain(ctx, master);
        break;
      case "underwater":
        this.createUnderwater(ctx, master);
        break;
      case "zen_drops":
        this.createZenDrops(ctx, master);
        break;
      case "clock_metronome":
        this.createMetronome(ctx, master);
        break;
      case "space_drone":
        this.createSpaceDrone(ctx, master);
        break;
      case "tibetan_bowl":
        this.createTibetanBowl(ctx, master);
        break;
      case "wind_chimes":
        this.createWindChimes(ctx, master);
        break;
      case "cathedral":
        this.createCathedral(ctx, master);
        break;
      case "crystal_cave":
        this.createCrystalCave(ctx, master);
        break;
      case "lofi_piano":
        this.createLofiPiano(ctx, master);
        break;
      default:
        this.createBrownNoise(ctx, master);
        break;
    }
  }

  // ==========================================
  // PROCEDURAL SOUND GENERATORS
  // ==========================================

  private createNoiseBuffer(ctx: AudioContext, seconds = 5): AudioBuffer {
    const bufferSize = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private createPinkNoiseBuffer(ctx: AudioContext, seconds = 5): AudioBuffer {
    const bufferSize = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  private createBrownNoiseBuffer(ctx: AudioContext, seconds = 5): AudioBuffer {
    const bufferSize = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Compensate amplitude
    }
    return buffer;
  }

  private loopBuffer(ctx: AudioContext, buffer: AudioBuffer, target: AudioNode) {
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.connect(target);
    src.start();
    this.activeNodes.push({
      stop: () => {
        try { src.stop(); src.disconnect(); } catch {}
      }
    });
  }

  private createWhiteNoise(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createNoiseBuffer(ctx);
    const gain = ctx.createGain();
    gain.gain.value = 0.25;
    gain.connect(dest);
    this.loopBuffer(ctx, buf, gain);
  }

  private createPinkNoise(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const gain = ctx.createGain();
    gain.gain.value = 0.35;
    gain.connect(dest);
    this.loopBuffer(ctx, buf, gain);
  }

  private createBrownNoise(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const gain = ctx.createGain();
    gain.gain.value = 0.45;
    gain.connect(dest);
    this.loopBuffer(ctx, buf, gain);
  }

  private createRain(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1800;

    const gain = ctx.createGain();
    gain.gain.value = 0.35;
    filter.connect(gain);
    gain.connect(dest);

    this.loopBuffer(ctx, buf, filter);
  }

  private createHeavyRain(ctx: AudioContext, dest: AudioNode) {
    const bufBrown = this.createBrownNoiseBuffer(ctx);
    const bufPink = this.createPinkNoiseBuffer(ctx);

    const f1 = ctx.createBiquadFilter();
    f1.type = "lowpass";
    f1.frequency.value = 600;

    const f2 = ctx.createBiquadFilter();
    f2.type = "bandpass";
    f2.frequency.value = 1400;
    f2.Q.value = 1.0;

    const gain = ctx.createGain();
    gain.gain.value = 0.4;
    f1.connect(gain);
    f2.connect(gain);
    gain.connect(dest);

    this.loopBuffer(ctx, bufBrown, f1);
    this.loopBuffer(ctx, bufPink, f2);
  }

  private createOcean(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 500;

    const gain = ctx.createGain();
    gain.gain.value = 0.1;

    // LFO to swell waves every 8 seconds
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12; // 8.3s cycle
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.35;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();

    filter.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, filter);

    this.activeNodes.push({
      stop: () => {
        try { lfo.stop(); lfo.disconnect(); } catch {}
      }
    });
  }

  private createCampfire(ctx: AudioContext, dest: AudioNode) {
    // Warm low drone
    const bufBrown = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 450;
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.25;
    filter.connect(droneGain);
    droneGain.connect(dest);
    this.loopBuffer(ctx, bufBrown, filter);

    // Random crackle pulses
    const interval = setInterval(() => {
      if (!this.currentSoundId || this.currentSoundId !== "campfire") {
        clearInterval(interval);
        return;
      }
      try {
        const pop = ctx.createOscillator();
        pop.type = "triangle";
        pop.frequency.setValueAtTime(100 + Math.random() * 800, ctx.currentTime);
        pop.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.05);

        const popGain = ctx.createGain();
        popGain.gain.setValueAtTime(0.08 + Math.random() * 0.12, ctx.currentTime);
        popGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        pop.connect(popGain);
        popGain.connect(dest);
        pop.start();
        pop.stop(ctx.currentTime + 0.06);
      } catch {}
    }, 180);

    this.activeNodes.push({
      stop: () => clearInterval(interval)
    });
  }

  private createWind(ctx: AudioContext, dest: AudioNode, centerFreq = 400, lfoDepth = 150) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = centerFreq;
    filter.Q.value = 2.0;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.2; // 5 second breeze swell
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = lfoDepth;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    const gain = ctx.createGain();
    gain.gain.value = 0.35;
    filter.connect(gain);
    gain.connect(dest);

    this.loopBuffer(ctx, buf, filter);
    this.activeNodes.push({
      stop: () => {
        try { lfo.stop(); lfo.disconnect(); } catch {}
      }
    });
  }

  private createStream(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const f1 = ctx.createBiquadFilter();
    f1.type = "bandpass";
    f1.frequency.value = 1200;
    f1.Q.value = 3;

    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    f1.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, f1);
  }

  private createCrickets(ctx: AudioContext, dest: AudioNode) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 4500;

    // Fast flutter LFO
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 14;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.08;

    const gain = ctx.createGain();
    gain.gain.value = 0.04;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    osc.connect(gain);
    gain.connect(dest);
    osc.start();
    lfo.start();

    this.activeNodes.push({
      stop: () => {
        try { osc.stop(); lfo.stop(); osc.disconnect(); lfo.disconnect(); } catch {}
      }
    });
  }

  private createBinaural(ctx: AudioContext, dest: AudioNode, carrierFreq: number, diffHz: number) {
    const oscL = ctx.createOscillator();
    oscL.type = "sine";
    oscL.frequency.value = carrierFreq;

    const oscR = ctx.createOscillator();
    oscR.type = "sine";
    oscR.frequency.value = carrierFreq + diffHz;

    const merger = ctx.createChannelMerger(2);
    const gain = ctx.createGain();
    gain.gain.value = 0.25;

    oscL.connect(merger, 0, 0); // Left channel
    oscR.connect(merger, 0, 1); // Right channel

    merger.connect(gain);
    gain.connect(dest);

    oscL.start();
    oscR.start();

    this.activeNodes.push({
      stop: () => {
        try { oscL.stop(); oscR.stop(); oscL.disconnect(); oscR.disconnect(); } catch {}
      }
    });
  }

  private createCafe(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const f1 = ctx.createBiquadFilter();
    f1.type = "lowpass";
    f1.frequency.value = 1000;

    const f2 = ctx.createBiquadFilter();
    f2.type = "peaking";
    f2.frequency.value = 350;
    f2.gain.value = 6;

    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    f1.connect(f2);
    f2.connect(gain);
    gain.connect(dest);

    this.loopBuffer(ctx, buf, f1);
  }

  private createLibrary(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 300;

    const gain = ctx.createGain();
    gain.gain.value = 0.2;
    filter.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, filter);
  }

  private createKeyboardAsmr(ctx: AudioContext, dest: AudioNode) {
    // Subtle room tone
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 250;
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.15;
    filter.connect(droneGain);
    droneGain.connect(dest);
    this.loopBuffer(ctx, buf, filter);

    // Periodic keystroke clicks
    const interval = setInterval(() => {
      if (!this.currentSoundId || this.currentSoundId !== "keyboard_asmr") {
        clearInterval(interval);
        return;
      }
      try {
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(400 + Math.random() * 300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.07, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

        osc.connect(g);
        g.connect(dest);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      } catch {}
    }, 280);

    this.activeNodes.push({
      stop: () => clearInterval(interval)
    });
  }

  private createAirplane(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 380;

    // 120Hz cabin engine oscillation
    const hum = ctx.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 118;
    const humGain = ctx.createGain();
    humGain.gain.value = 0.08;
    hum.connect(humGain);
    humGain.connect(dest);
    hum.start();

    const gain = ctx.createGain();
    gain.gain.value = 0.35;
    filter.connect(gain);
    gain.connect(dest);

    this.loopBuffer(ctx, buf, filter);
    this.activeNodes.push({
      stop: () => {
        try { hum.stop(); hum.disconnect(); } catch {}
      }
    });
  }

  private createVinyl(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createPinkNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 3000;

    const gain = ctx.createGain();
    gain.gain.value = 0.06;
    filter.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, filter);
  }

  private createTrain(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 350;

    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    filter.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, filter);
  }

  private createUnderwater(ctx: AudioContext, dest: AudioNode) {
    const buf = this.createBrownNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 200;

    const gain = ctx.createGain();
    gain.gain.value = 0.45;
    filter.connect(gain);
    gain.connect(dest);
    this.loopBuffer(ctx, buf, filter);
  }

  private createZenDrops(ctx: AudioContext, dest: AudioNode) {
    const interval = setInterval(() => {
      if (!this.currentSoundId || this.currentSoundId !== "zen_drops") {
        clearInterval(interval);
        return;
      }
      try {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.12);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.12, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

        osc.connect(g);
        g.connect(dest);
        osc.start();
        osc.stop(ctx.currentTime + 0.14);
      } catch {}
    }, 1800);

    this.activeNodes.push({
      stop: () => clearInterval(interval)
    });
  }

  private createMetronome(ctx: AudioContext, dest: AudioNode) {
    const interval = setInterval(() => {
      if (!this.currentSoundId || this.currentSoundId !== "clock_metronome") {
        clearInterval(interval);
        return;
      }
      try {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.15, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

        osc.connect(g);
        g.connect(dest);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch {}
    }, 1000); // 60 BPM

    this.activeNodes.push({
      stop: () => clearInterval(interval)
    });
  }

  private createSpaceDrone(ctx: AudioContext, dest: AudioNode) {
    const freqs = [65.41, 98.0, 130.81]; // C2, G2, C3
    const oscs: OscillatorNode[] = [];

    freqs.forEach((f) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;

      const gain = ctx.createGain();
      gain.gain.value = 0.08;

      osc.connect(gain);
      gain.connect(dest);
      osc.start();
      oscs.push(osc);
    });

    this.activeNodes.push({
      stop: () => {
        oscs.forEach((o) => {
          try { o.stop(); o.disconnect(); } catch {}
        });
      }
    });
  }

  private createTibetanBowl(ctx: AudioContext, dest: AudioNode) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 432;

    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 864;

    const gain = ctx.createGain();
    gain.gain.value = 0.12;

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(dest);

    osc.start();
    osc2.start();

    this.activeNodes.push({
      stop: () => {
        try { osc.stop(); osc2.stop(); osc.disconnect(); osc2.disconnect(); } catch {}
      }
    });
  }

  private createWindChimes(ctx: AudioContext, dest: AudioNode) {
    const pentatonic = [440, 523.25, 587.33, 659.25, 783.99, 880];
    const interval = setInterval(() => {
      if (!this.currentSoundId || this.currentSoundId !== "wind_chimes") {
        clearInterval(interval);
        return;
      }
      try {
        const freq = pentatonic[Math.floor(Math.random() * pentatonic.length)];
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.08, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(g);
        g.connect(dest);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);
      } catch {}
    }, 700);

    this.activeNodes.push({
      stop: () => clearInterval(interval)
    });
  }

  private createCathedral(ctx: AudioContext, dest: AudioNode) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 110; // A2

    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 165; // E3 fifth

    const gain = ctx.createGain();
    gain.gain.value = 0.08;

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(dest);

    osc.start();
    osc2.start();

    this.activeNodes.push({
      stop: () => {
        try { osc.stop(); osc2.stop(); osc.disconnect(); osc2.disconnect(); } catch {}
      }
    });
  }

  private createCrystalCave(ctx: AudioContext, dest: AudioNode) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 1760;

    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 2640;

    const gain = ctx.createGain();
    gain.gain.value = 0.03;

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(dest);

    osc.start();
    osc2.start();

    this.activeNodes.push({
      stop: () => {
        try { osc.stop(); osc2.stop(); osc.disconnect(); osc2.disconnect(); } catch {}
      }
    });
  }

  private createLofiPiano(ctx: AudioContext, dest: AudioNode) {
    const chord = [130.81, 155.56, 196.0, 233.08]; // Cm7
    const oscs: OscillatorNode[] = [];

    chord.forEach((f) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;

      const gain = ctx.createGain();
      gain.gain.value = 0.05;

      osc.connect(gain);
      gain.connect(dest);
      osc.start();
      oscs.push(osc);
    });

    this.activeNodes.push({
      stop: () => {
        oscs.forEach((o) => {
          try { o.stop(); o.disconnect(); } catch {}
        });
      }
    });
  }

  // Timer Stop / Completion Alarm Synthesizer (Science-backed Chimes & Bowls)
  public playCompletionAlarm(alarmId?: string, overrideVolume?: number) {
    let id = alarmId;
    if (!id && typeof window !== "undefined") {
      id = localStorage.getItem("arete_study_alarm_sound") || "tibetan_bowl";
    }
    if (!id) id = "tibetan_bowl";
    if (id === "none") return;

    const ctx = this.getContext();
    if (!ctx) return;

    const alarmGain = ctx.createGain();
    const vol = overrideVolume ?? this.volume ?? 0.6;
    alarmGain.gain.setValueAtTime(vol, ctx.currentTime);
    alarmGain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (id === "tibetan_bowl") {
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const g = ctx.createGain();

      o1.type = "sine";
      o1.frequency.setValueAtTime(432, now);
      o2.type = "sine";
      o2.frequency.setValueAtTime(864, now);

      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.5, now + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

      o1.connect(g);
      o2.connect(g);
      g.connect(alarmGain);

      o1.start(now);
      o2.start(now);
      o1.stop(now + 3.3);
      o2.stop(now + 3.3);
    } else if (id === "zen_gong") {
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const g = ctx.createGain();

      o1.type = "sine";
      o1.frequency.setValueAtTime(110, now);
      o2.type = "triangle";
      o2.frequency.setValueAtTime(330, now);

      g.gain.setValueAtTime(0.7, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 3.8);

      o1.connect(g);
      o2.connect(g);
      g.connect(alarmGain);

      o1.start(now);
      o2.start(now);
      o1.stop(now + 4.0);
      o2.stop(now + 4.0);
    } else if (id === "digital_chime") {
      [
        { f: 587.33, t: 0, dur: 0.8 },
        { f: 880.00, t: 0.25, dur: 1.2 }
      ].forEach((note) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(note.f, now + note.t);

        g.gain.setValueAtTime(0, now + note.t);
        g.gain.linearRampToValueAtTime(0.4, now + note.t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.dur);

        o.connect(g);
        g.connect(alarmGain);
        o.start(now + note.t);
        o.stop(now + note.t + note.dur + 0.1);
      });
    } else if (id === "temple_bell") {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(528, now);

      g.gain.setValueAtTime(0.6, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

      o.connect(g);
      g.connect(alarmGain);
      o.start(now);
      o.stop(now + 3.0);
    } else if (id === "academic_fanfare") {
      [
        { f: 523.25, t: 0, dur: 0.3 },
        { f: 659.25, t: 0.25, dur: 0.3 },
        { f: 783.99, t: 0.5, dur: 1.2 }
      ].forEach((n) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(n.f, now + n.t);

        g.gain.setValueAtTime(0, now + n.t);
        g.gain.linearRampToValueAtTime(0.4, now + n.t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.dur);

        o.connect(g);
        g.connect(alarmGain);
        o.start(now + n.t);
        o.stop(now + n.t + n.dur + 0.1);
      });
    } else if (id === "gentle_harp") {
      [440, 554.37, 659.25, 880].forEach((f, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, now + idx * 0.12);

        g.gain.setValueAtTime(0, now + idx * 0.12);
        g.gain.linearRampToValueAtTime(0.3, now + idx * 0.12 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 1.2);

        o.connect(g);
        g.connect(alarmGain);
        o.start(now + idx * 0.12);
        o.stop(now + idx * 0.12 + 1.3);
      });
    }
  }
}

export const zenSoundEngine = new ZenSoundEngine();
