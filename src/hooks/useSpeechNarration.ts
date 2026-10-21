"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cleanTextForSpeech, chunkTextForSpeech } from "@/utils/speechTextFormatter";

export interface SpeechVoiceOption {
  voice: SpeechSynthesisVoice;
  id: string;
  name: string;
  lang: string;
  displayName: string;
  isNatural: boolean;
  accent: "Indian" | "Hindi" | "British" | "American" | "Other";
}

export function useSpeechNarration() {
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechVoiceOption[]>([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentChunkIndex, setCurrentChunkIndex] = useState<number>(0);
  const [totalChunks, setTotalChunks] = useState<number>(0);
  const [currentSpokenText, setCurrentSpokenText] = useState<string>("");

  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const keepAliveIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Discover and rank browser voices
  const populateVoices = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const rawVoices = window.speechSynthesis.getVoices();
    if (!rawVoices || rawVoices.length === 0) return;

    // Filter and score voices
    const processed: SpeechVoiceOption[] = rawVoices
      .filter((v) => v.lang.startsWith("en") || v.lang.startsWith("hi"))
      .map((v) => {
        const lowerName = v.name.toLowerCase();
        const isNatural =
          lowerName.includes("natural") ||
          lowerName.includes("online") ||
          lowerName.includes("neural") ||
          lowerName.includes("google") ||
          lowerName.includes("siri") ||
          lowerName.includes("enhanced");

        let accent: SpeechVoiceOption["accent"] = "Other";
        if (v.lang.includes("IN") || lowerName.includes("india")) {
          accent = lowerName.includes("hindi") ? "Hindi" : "Indian";
        } else if (v.lang.includes("GB") || lowerName.includes("uk")) {
          accent = "British";
        } else if (v.lang.includes("US") || lowerName.includes("united states")) {
          accent = "American";
        }

        let displayName = v.name
          .replace(/Microsoft\s*/i, "")
          .replace(/Online\s*\(Natural\)\s*-\s*/i, "")
          .replace(/Google\s*/i, "")
          .trim();

        if (accent === "Indian") displayName = `🇮🇳 ${displayName} (Indian English)`;
        else if (accent === "Hindi") displayName = `🇮🇳 ${displayName} (Hindi)`;
        else if (accent === "British") displayName = `🇬🇧 ${displayName} (British)`;
        else if (accent === "American") displayName = `🇺🇸 ${displayName} (US English)`;

        if (isNatural) displayName += " ✨ Natural";

        return {
          voice: v,
          id: `${v.name}-${v.lang}`,
          name: v.name,
          lang: v.lang,
          displayName,
          isNatural,
          accent,
        };
      });

    // Sort: Indian Natural -> Hindi Natural -> Indian Standard -> British/US Natural -> Others
    processed.sort((a, b) => {
      const getScore = (item: SpeechVoiceOption) => {
        let score = 0;
        if (item.accent === "Indian" && item.isNatural) score += 100;
        else if (item.accent === "Hindi" && item.isNatural) score += 90;
        else if (item.accent === "Indian") score += 80;
        else if (item.accent === "Hindi") score += 70;
        else if (item.isNatural) score += 60;
        else if (item.accent === "British" || item.accent === "American") score += 40;
        return score;
      };
      return getScore(b) - getScore(a);
    });

    setVoices(processed);

    // Pick top voice by default if not set
    if (!selectedVoiceId && processed.length > 0) {
      setSelectedVoiceId(processed[0].id);
    }
  }, [selectedVoiceId]);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);
      populateVoices();
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }, [populateVoices]);

  // Keep-alive to bypass Chrome 15s freeze bug
  const startKeepAlive = () => {
    stopKeepAlive();
    keepAliveIntervalRef.current = setInterval(() => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        if (isPlayingRef.current && !isPausedRef.current) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }
    }, 9000);
  };

  const stopKeepAlive = () => {
    if (keepAliveIntervalRef.current) {
      clearInterval(keepAliveIntervalRef.current);
      keepAliveIntervalRef.current = null;
    }
  };

  // Play next chunk
  const playNextChunk = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (!isPlayingRef.current || isPausedRef.current) return;

    if (chunkIndexRef.current >= chunksRef.current.length) {
      // Completed reading all chunks
      setIsPlaying(false);
      setIsPaused(false);
      isPlayingRef.current = false;
      isPausedRef.current = false;
      setCurrentChunkIndex(0);
      setTotalChunks(0);
      setCurrentSpokenText("");
      stopKeepAlive();
      return;
    }

    const chunk = chunksRef.current[chunkIndexRef.current];
    setCurrentChunkIndex(chunkIndexRef.current + 1);
    setCurrentSpokenText(chunk);

    const utterance = new SpeechSynthesisUtterance(chunk);

    // Find voice
    const activeVoiceOption = voices.find((v) => v.id === selectedVoiceId) || voices[0];
    if (activeVoiceOption) {
      utterance.voice = activeVoiceOption.voice;
      utterance.lang = activeVoiceOption.voice.lang;
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
        console.warn("Speech error:", e);
      }
      if (isPlayingRef.current && !isPausedRef.current) {
        chunkIndexRef.current += 1;
        playNextChunk();
      }
    };

    window.speechSynthesis.speak(utterance);
  }, [selectedVoiceId, voices, playbackRate, volume]);

  // Main Speak function
  const speak = useCallback(
    (text: string, title?: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      window.speechSynthesis.cancel();
      stopKeepAlive();

      const cleaned = cleanTextForSpeech(text);
      if (!cleaned) return;

      const chunks = chunkTextForSpeech(cleaned);
      if (chunks.length === 0) return;

      chunksRef.current = chunks;
      chunkIndexRef.current = 0;
      isPlayingRef.current = true;
      isPausedRef.current = false;

      setIsPlaying(true);
      setIsPaused(false);
      setCurrentTitle(title || "Concept Narration");
      setTotalChunks(chunks.length);
      setCurrentChunkIndex(0);

      startKeepAlive();
      playNextChunk();
    },
    [playNextChunk]
  );

  // Pause
  const pause = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    isPausedRef.current = true;
  }, []);

  // Resume
  const resume = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setIsPaused(false);
    isPausedRef.current = false;
    window.speechSynthesis.resume();
  }, []);

  // Stop
  const stop = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    stopKeepAlive();
    setIsPlaying(false);
    setIsPaused(false);
    isPlayingRef.current = false;
    isPausedRef.current = false;
    chunksRef.current = [];
    chunkIndexRef.current = 0;
    setCurrentChunkIndex(0);
    setTotalChunks(0);
    setCurrentSpokenText("");
  }, []);

  // Change rate on the fly
  const changeRate = useCallback((rate: number) => {
    setPlaybackRate(rate);
  }, []);

  // Change voice on the fly
  const changeVoice = useCallback(
    (voiceId: string) => {
      setSelectedVoiceId(voiceId);
      // If currently playing, restart current chunk with new voice
      if (isPlayingRef.current && !isPausedRef.current) {
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.cancel();
          playNextChunk();
        }
      }
    },
    [playNextChunk]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      stopKeepAlive();
    };
  }, []);

  const progressPercent = totalChunks > 0 ? Math.round((currentChunkIndex / totalChunks) * 100) : 0;

  return {
    isSupported,
    voices,
    selectedVoiceId,
    isPlaying,
    isPaused,
    playbackRate,
    volume,
    currentTitle,
    progressPercent,
    currentChunkIndex,
    totalChunks,
    currentSpokenText,
    speak,
    pause,
    resume,
    stop,
    changeRate,
    changeVoice,
    setVolume,
  };
}
