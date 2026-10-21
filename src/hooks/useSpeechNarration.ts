"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cleanTextForSpeech, chunkTextForSpeech } from "@/utils/speechTextFormatter";

export interface SpeechVoiceOption {
  id: string;
  name: string;
  lang: string;
  displayName: string;
  isStudioNeural: boolean;
  accent: "Indian" | "Hindi" | "British" | "American" | "Other";
  browserVoice?: SpeechSynthesisVoice;
}

// Studio Neural Voices provided by the /api/tts endpoint (Zero API Key, ElevenLabs quality)
const STUDIO_NEURAL_VOICES: SpeechVoiceOption[] = [
  {
    id: "en-IN-NeerjaExpressiveNeural",
    name: "Neerja Expressive (India)",
    lang: "en-IN",
    displayName: "🇮🇳 Neerja (Expressive Indian Teacher) ✨ Studio HD",
    isStudioNeural: true,
    accent: "Indian",
  },
  {
    id: "en-IN-PrabhatNeural",
    name: "Prabhat (India)",
    lang: "en-IN",
    displayName: "🇮🇳 Prabhat (Indian Male Mentor) ✨ Studio HD",
    isStudioNeural: true,
    accent: "Indian",
  },
  {
    id: "hi-IN-SwaraNeural",
    name: "Swara (Hindi)",
    lang: "hi-IN",
    displayName: "🇮🇳 Swara (Hindi / Hinglish Teacher) ✨ Studio HD",
    isStudioNeural: true,
    accent: "Hindi",
  },
  {
    id: "hi-IN-MadhurNeural",
    name: "Madhur (Hindi)",
    lang: "hi-IN",
    displayName: "🇮🇳 Madhur (Hindi / Hinglish Male Mentor) ✨ Studio HD",
    isStudioNeural: true,
    accent: "Hindi",
  },
  {
    id: "en-GB-SoniaNeural",
    name: "Sonia (UK)",
    lang: "en-GB",
    displayName: "🇬🇧 Sonia (British English Teacher) ✨ Studio HD",
    isStudioNeural: true,
    accent: "British",
  },
  {
    id: "en-US-JennyNeural",
    name: "Jenny (US)",
    lang: "en-US",
    displayName: "🇺🇸 Jenny (US English Teacher) ✨ Studio HD",
    isStudioNeural: true,
    accent: "American",
  },
];

export function useSpeechNarration() {
  const [voices, setVoices] = useState<SpeechVoiceOption[]>(STUDIO_NEURAL_VOICES);
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>("en-IN-NeerjaExpressiveNeural");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentChunkIndex, setCurrentChunkIndex] = useState<number>(0);
  const [totalChunks, setTotalChunks] = useState<number>(0);
  const [currentSpokenText, setCurrentSpokenText] = useState<string>("");
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [lectureMode, setLectureMode] = useState<"teacher_deep" | "concise">("teacher_deep");

  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedAudioRef = useRef<{ index: number; audio: HTMLAudioElement; url: string } | null>(null);
  const activeBlobUrlRef = useRef<string | null>(null);
  const keepAliveIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Discover local browser voices as fallback
  useEffect(() => {
    if (typeof window === "undefined") return;

    const populateBrowserVoices = () => {
      if (!("speechSynthesis" in window)) return;
      const raw = window.speechSynthesis.getVoices();
      if (!raw || raw.length === 0) return;

      const browserOptions: SpeechVoiceOption[] = raw
        .filter((v) => v.lang.startsWith("en") || v.lang.startsWith("hi"))
        .map((v) => {
          let accent: SpeechVoiceOption["accent"] = "Other";
          const lower = (v.name + " " + v.lang).toLowerCase();
          if (lower.includes("in") || lower.includes("india")) {
            accent = lower.includes("hindi") ? "Hindi" : "Indian";
          } else if (lower.includes("gb") || lower.includes("uk")) {
            accent = "British";
          } else if (lower.includes("us")) {
            accent = "American";
          }

          let displayName = v.name.replace(/Microsoft\s*/i, "").replace(/Google\s*/i, "").trim();
          if (accent === "Indian") displayName = `🇮🇳 ${displayName} (Browser Indian)`;
          else if (accent === "Hindi") displayName = `🇮🇳 ${displayName} (Browser Hindi)`;
          else if (accent === "British") displayName = `🇬🇧 ${displayName} (Browser UK)`;
          else if (accent === "American") displayName = `🇺🇸 ${displayName} (Browser US)`;

          return {
            id: `browser_${v.name}_${v.lang}`,
            name: v.name,
            lang: v.lang,
            displayName,
            isStudioNeural: false,
            accent,
            browserVoice: v,
          };
        });

      // Combine Studio Neural Voices (top priority) + Browser Voices
      setVoices([...STUDIO_NEURAL_VOICES, ...browserOptions]);
    };

    populateBrowserVoices();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = populateBrowserVoices;
    }
  }, []);

  // Web Audio Clarity Booster initialization (Gain + High-Shelf EQ + Dynamics Compressor)
  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioContextRef.current = new AudioCtx();
      }
    }
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  // Stop everything
  const stop = useCallback(() => {
    isPlayingRef.current = false;
    isPausedRef.current = false;
    setIsPlaying(false);
    setIsPaused(false);
    setIsLoadingAudio(false);
    chunksRef.current = [];
    chunkIndexRef.current = 0;
    setCurrentChunkIndex(0);
    setTotalChunks(0);
    setCurrentSpokenText("");

    // Stop HTML5 Audio
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }

    // Revoke previous blob
    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
      activeBlobUrlRef.current = null;
    }

    // Clean preload
    if (preloadedAudioRef.current) {
      URL.revokeObjectURL(preloadedAudioRef.current.url);
      preloadedAudioRef.current = null;
    }

    // Stop browser Web Speech API
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    if (keepAliveIntervalRef.current) {
      clearInterval(keepAliveIntervalRef.current);
      keepAliveIntervalRef.current = null;
    }
  }, []);

  // Pre-fetch next chunk audio in the background for zero-gap playback
  const prefetchChunk = useCallback(
    async (chunkText: string, chunkIdx: number, voiceId: string, rate: number) => {
      try {
        const res = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: chunkText,
            voice: voiceId,
            rate,
          }),
        });
        if (!res.ok) return;
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        preloadedAudioRef.current = { index: chunkIdx, audio, url };
      } catch (err) {
        // Preload failure is silent; next chunk will fetch on demand
      }
    },
    []
  );

  // Play next chunk using either Studio Neural API or Browser Fallback
  const playNextChunk = useCallback(async () => {
    if (!isPlayingRef.current || isPausedRef.current) return;

    if (chunkIndexRef.current >= chunksRef.current.length) {
      // Finished all chunks!
      stop();
      return;
    }

    const currentIdx = chunkIndexRef.current;
    const chunkText = chunksRef.current[currentIdx];
    setCurrentChunkIndex(currentIdx + 1);
    setCurrentSpokenText(chunkText);

    const activeVoiceOption =
      voices.find((v) => v.id === selectedVoiceId) || STUDIO_NEURAL_VOICES[0];

    // PATH A: Studio Neural Cloud Voice via /api/tts
    if (activeVoiceOption.isStudioNeural) {
      setIsLoadingAudio(true);

      try {
        let audio: HTMLAudioElement;

        // Check if preloaded
        if (
          preloadedAudioRef.current &&
          preloadedAudioRef.current.index === currentIdx
        ) {
          audio = preloadedAudioRef.current.audio;
          activeBlobUrlRef.current = preloadedAudioRef.current.url;
          preloadedAudioRef.current = null;
        } else {
          // Fetch on demand
          const res = await fetch("/api/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              text: chunkText,
              voice: activeVoiceOption.id,
              rate: playbackRate,
            }),
          });

          if (!res.ok) throw new Error("TTS endpoint error");
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          audio = new Audio(url);
          if (activeBlobUrlRef.current) {
            URL.revokeObjectURL(activeBlobUrlRef.current);
          }
          activeBlobUrlRef.current = url;
        }

        setIsLoadingAudio(false);
        currentAudioRef.current = audio;
        audio.playbackRate = playbackRate;
        audio.volume = Math.min(1.0, volume);

        // Pre-fetch following chunk in background
        const nextIdx = currentIdx + 1;
        if (nextIdx < chunksRef.current.length) {
          prefetchChunk(
            chunksRef.current[nextIdx],
            nextIdx,
            activeVoiceOption.id,
            playbackRate
          );
        }

        audio.onended = () => {
          if (isPlayingRef.current && !isPausedRef.current) {
            chunkIndexRef.current += 1;
            playNextChunk();
          }
        };

        audio.onerror = (e) => {
          console.warn("Studio audio error, advancing to next chunk:", e);
          if (isPlayingRef.current && !isPausedRef.current) {
            chunkIndexRef.current += 1;
            playNextChunk();
          }
        };

        await audio.play();
        return;
      } catch (err) {
        console.warn("Studio Neural API unreachable, falling back to local speech:", err);
        setIsLoadingAudio(false);
        // Fall back to browser speech synthesis for this chunk
      }
    }

    // PATH B: Local Browser Web Speech API
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(chunkText);
      if (activeVoiceOption.browserVoice) {
        utterance.voice = activeVoiceOption.browserVoice;
      }
      utterance.rate = playbackRate;
      utterance.volume = volume;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (isPlayingRef.current && !isPausedRef.current) {
          chunkIndexRef.current += 1;
          playNextChunk();
        }
      };

      utterance.onerror = (e) => {
        if (e.error !== "canceled" && e.error !== "interrupted") {
          console.warn("Browser Speech error:", e);
        }
        if (isPlayingRef.current && !isPausedRef.current) {
          chunkIndexRef.current += 1;
          playNextChunk();
        }
      };

      window.speechSynthesis.speak(utterance);
    }
  }, [selectedVoiceId, voices, playbackRate, volume, stop, prefetchChunk]);

  // Main Speak function
  const speak = useCallback(
    (rawText: string, title?: string) => {
      stop();

      const cleaned = cleanTextForSpeech(rawText);
      if (!cleaned) return;

      const chunks = chunkTextForSpeech(cleaned, 240);
      if (chunks.length === 0) return;

      chunksRef.current = chunks;
      chunkIndexRef.current = 0;
      isPlayingRef.current = true;
      isPausedRef.current = false;

      setIsPlaying(true);
      setIsPaused(false);
      setCurrentTitle(title || "Teacher Lecture");
      setTotalChunks(chunks.length);
      setCurrentChunkIndex(0);

      // Trigger Web Audio resume on user gesture
      getAudioContext();

      playNextChunk();
    },
    [stop, getAudioContext, playNextChunk]
  );

  // Pause
  const pause = useCallback(() => {
    isPausedRef.current = true;
    setIsPaused(true);

    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.pause();
    }
  }, []);

  // Resume
  const resume = useCallback(() => {
    isPausedRef.current = false;
    setIsPaused(false);

    if (currentAudioRef.current) {
      currentAudioRef.current.play();
    } else if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.resume();
    } else {
      playNextChunk();
    }
  }, [playNextChunk]);

  // Rate change
  const changeRate = useCallback((newRate: number) => {
    setPlaybackRate(newRate);
    if (currentAudioRef.current) {
      currentAudioRef.current.playbackRate = newRate;
    }
  }, []);

  // Voice change
  const changeVoice = useCallback(
    (voiceId: string) => {
      setSelectedVoiceId(voiceId);
      // If currently playing, restart current chunk with new voice immediately
      if (isPlayingRef.current && !isPausedRef.current) {
        if (currentAudioRef.current) {
          currentAudioRef.current.pause();
        }
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        preloadedAudioRef.current = null;
        playNextChunk();
      }
    },
    [playNextChunk]
  );

  // Volume change
  const changeVolume = useCallback((newVol: number) => {
    setVolume(newVol);
    if (currentAudioRef.current) {
      currentAudioRef.current.volume = Math.min(1.0, Math.max(0, newVol));
    }
  }, []);

  // Clean on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const progressPercent =
    totalChunks > 0 ? Math.round((currentChunkIndex / totalChunks) * 100) : 0;

  return {
    isSupported: true,
    voices,
    selectedVoiceId,
    isPlaying,
    isPaused,
    isLoadingAudio,
    playbackRate,
    volume,
    currentTitle,
    progressPercent,
    currentChunkIndex,
    totalChunks,
    currentSpokenText,
    lectureMode,
    setLectureMode,
    speak,
    pause,
    resume,
    stop,
    changeRate,
    changeVoice,
    setVolume: changeVolume,
  };
}
