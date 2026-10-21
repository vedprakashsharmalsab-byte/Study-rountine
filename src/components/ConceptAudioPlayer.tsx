"use client";

import React, { useState } from "react";
import {
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Gauge,
  Sparkles,
  Headphones,
  SlidersHorizontal,
  ChevronDown,
  AudioWaveform,
  Loader2,
  GraduationCap,
  Zap,
  Check,
} from "lucide-react";
import type { SpeechVoiceOption } from "@/hooks/useSpeechNarration";

interface ConceptAudioPlayerProps {
  isDark: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  isLoadingAudio?: boolean;
  currentTitle: string;
  progressPercent: number;
  currentChunkIndex: number;
  totalChunks: number;
  currentSpokenText?: string;
  playbackRate: number;
  volume: number;
  voices: SpeechVoiceOption[];
  selectedVoiceId: string;
  lectureMode?: "teacher_deep" | "concise";
  onToggleLectureMode?: (mode: "teacher_deep" | "concise") => void;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onChangeRate: (rate: number) => void;
  onChangeVoice: (voiceId: string) => void;
  onVolumeChange: (vol: number) => void;
  isFloating?: boolean;
}

export default function ConceptAudioPlayer({
  isDark,
  isPlaying,
  isPaused,
  isLoadingAudio = false,
  currentTitle,
  progressPercent,
  currentChunkIndex,
  totalChunks,
  currentSpokenText,
  playbackRate,
  volume,
  voices,
  selectedVoiceId,
  lectureMode = "teacher_deep",
  onToggleLectureMode,
  onPlay,
  onPause,
  onResume,
  onStop,
  onChangeRate,
  onChangeVoice,
  onVolumeChange,
  isFloating = false,
}: ConceptAudioPlayerProps) {
  const [showVoiceDropdown, setShowVoiceDropdown] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(1.0);

  const activeVoice = voices.find((v) => v.id === selectedVoiceId) || voices[0];
  const studioVoices = voices.filter((v) => v.isStudioNeural);
  const browserVoices = voices.filter((v) => !v.isStudioNeural);

  const handleMuteToggle = () => {
    if (isMuted) {
      setIsMuted(false);
      onVolumeChange(prevVolume);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      onVolumeChange(0);
    }
  };

  const rates = [0.8, 1.0, 1.2, 1.5];

  // Floating Mini-Player when audio is playing and user scrolled down
  if (isFloating) {
    if (!isPlaying && !isPaused && !isLoadingAudio) return null;

    return (
      <div
        className={`fixed bottom-5 right-5 z-50 max-w-md w-[calc(100vw-2.5rem)] sm:w-96 rounded-2xl p-4 shadow-2xl border backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-5 ${
          isDark
            ? "bg-[#0b1329]/95 border-cyan-500/30 text-white shadow-cyan-950/60"
            : "bg-white/95 border-cyan-200 text-slate-900 shadow-xl shadow-cyan-100"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 overflow-hidden flex-1">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              {isLoadingAudio ? (
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
              ) : (
                <Headphones className="w-4 h-4 animate-pulse" />
              )}
            </div>
            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {lectureMode === "teacher_deep" ? "Teacher Masterclass" : "Quick Audio"}
                </span>
                {activeVoice?.isStudioNeural && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300">
                    HD
                  </span>
                )}
              </div>
              <p className="text-xs font-bold truncate">{currentTitle || "Concept Audio..."}</p>
            </div>
          </div>

          {/* Equalizer animation */}
          {isPlaying && !isPaused && !isLoadingAudio && (
            <div className="flex items-end gap-0.5 h-4 px-1 shrink-0">
              <span className="w-1 bg-cyan-400 rounded-full animate-bounce h-3" />
              <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.15s] h-4" />
              <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.3s] h-2" />
              <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.45s] h-3.5" />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200/30 dark:bg-slate-700/40 rounded-full h-1.5 mb-3 overflow-hidden">
          <div
            className="bg-linear-to-r from-cyan-400 to-teal-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {isLoadingAudio ? (
              <div className="w-9 h-9 rounded-xl bg-cyan-500/30 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
              </div>
            ) : isPlaying && !isPaused ? (
              <button
                onClick={onPause}
                title="Pause"
                className="w-9 h-9 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-cyan-500/30 cursor-pointer"
              >
                <Pause className="w-4 h-4 fill-current" />
              </button>
            ) : (
              <button
                onClick={isPaused ? onResume : onPlay}
                title="Play / Resume"
                className="w-9 h-9 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-cyan-500/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            )}

            <button
              onClick={onStop}
              title="Stop"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-red-500/20 text-red-400"
                  : "bg-slate-100 border-slate-200 hover:bg-red-50 text-red-600"
              }`}
            >
              <Square className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>

          {/* Speed Pills */}
          <div className="flex items-center gap-1">
            {rates.map((r) => (
              <button
                key={r}
                onClick={() => onChangeRate(r)}
                className={`text-[10px] font-mono font-bold px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                  playbackRate === r
                    ? "bg-cyan-500 text-slate-950 font-black shadow-xs"
                    : isDark
                    ? "bg-white/5 text-slate-300 hover:bg-white/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {r}x
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Master Inline Audio Banner at top of Concepts Hub
  return (
    <div
      className={`rounded-3xl border p-5 sm:p-6 transition-all duration-300 relative overflow-hidden ${
        isDark
          ? "bg-linear-to-br from-[#0c162d] via-[#091024] to-[#0a1224] border-cyan-500/30 shadow-xl shadow-cyan-950/30"
          : "bg-linear-to-br from-cyan-50/80 via-white to-teal-50/70 border-cyan-200 shadow-md shadow-cyan-100/70"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Info & Status */}
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-extrabold border ${
                isDark
                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                  : "bg-cyan-100 text-cyan-900 border-cyan-300"
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-cyan-400" />
              Studio AI Voice Teacher (ElevenLabs Quality • 100% Free)
            </span>

            {/* Clarity Boost Active Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              🔊 Loud &amp; Clear Indian Pronunciation
            </span>

            {isLoadingAudio && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
                Generating Studio HD Audio...
              </span>
            )}

            {isPlaying && !isPaused && !isLoadingAudio && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 animate-pulse">
                ● Live Teaching
              </span>
            )}
          </div>

          <h3 className={`text-lg sm:text-xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Listen, Learn &amp; Master — Top Indian Educator Audio Lecture
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Explains concepts deeply with everyday intuition, pauses for thought, step-by-step reasoning, and warns against tricky CBSE board examiner traps.
          </p>

          {/* Mode Switcher Pills */}
          {onToggleLectureMode && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-mono font-bold uppercase text-slate-400 mr-1">
                Lecture Style:
              </span>
              <button
                onClick={() => onToggleLectureMode("teacher_deep")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  lectureMode === "teacher_deep"
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md shadow-cyan-500/20"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>🎓 Master Teacher (Deep Intuition &amp; Pauses)</span>
              </button>

              <button
                onClick={() => onToggleLectureMode("concise")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  lectureMode === "concise"
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md shadow-cyan-500/20"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>⚡ Quick Revision (Direct Points)</span>
              </button>
            </div>
          )}

          {/* Currently Spoken Line Caption */}
          {isPlaying && currentSpokenText && (
            <div
              className={`mt-2 p-2.5 rounded-xl border text-xs italic leading-relaxed transition-all max-w-xl ${
                isDark
                  ? "bg-black/50 border-cyan-500/25 text-cyan-200"
                  : "bg-white/95 border-cyan-200 text-cyan-950 shadow-xs"
              }`}
            >
              <span className="font-bold font-mono text-[10px] text-cyan-400 mr-2 not-italic">
                TEACHER SPEECH:
              </span>
              &ldquo;{currentSpokenText}&rdquo;
            </div>
          )}
        </div>

        {/* Right Playback Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          {/* Main Action Button */}
          {isLoadingAudio ? (
            <button
              disabled
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500/60 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-500/10 cursor-not-allowed opacity-90"
            >
              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              Generating Lecture...
            </button>
          ) : isPlaying && !isPaused ? (
            <button
              onClick={onPause}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95 cursor-pointer"
            >
              <Pause className="w-4 h-4 fill-current" />
              Pause Lecture
            </button>
          ) : isPaused ? (
            <button
              onClick={onResume}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              Resume Lecture
            </button>
          ) : (
            <button
              onClick={onPlay}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              Play Master Lecture
            </button>
          )}

          {isPlaying && (
            <button
              onClick={onStop}
              title="Stop Narration"
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-center cursor-pointer ${
                isDark
                  ? "bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20"
                  : "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
              }`}
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          )}
        </div>
      </div>

      {/* Progress & Lower Controls Bar */}
      <div className="mt-5 pt-4 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-4">
        {/* Voice Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowVoiceDropdown(!showVoiceDropdown)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
              isDark
                ? "bg-white/5 border-white/10 hover:border-cyan-400/50 text-slate-200"
                : "bg-white border-slate-200 hover:border-cyan-400 text-slate-800 shadow-xs"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="truncate max-w-[200px] sm:max-w-[260px]">
              {activeVoice ? activeVoice.displayName : "Select Voice"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showVoiceDropdown && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowVoiceDropdown(false)}
              />
              <div
                className={`absolute left-0 bottom-full mb-2 z-50 w-80 sm:w-96 rounded-2xl p-2.5 max-h-80 overflow-y-auto border shadow-2xl backdrop-blur-xl ${
                  isDark
                    ? "bg-[#0b1329]/95 border-cyan-500/30 text-white"
                    : "bg-white/95 border-slate-200 text-slate-900 shadow-xl"
                }`}
              >
                {/* Section A: Studio Neural HD Voices */}
                <div className="px-3 py-1.5 text-[11px] font-mono font-black text-cyan-400 border-b border-cyan-500/20 mb-1 flex items-center justify-between">
                  <span>✨ STUDIO NEURAL VOICES (STUDIO HD)</span>
                  <span className="text-[10px] text-emerald-400 font-bold">ElevenLabs Quality</span>
                </div>
                {studioVoices.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      onChangeVoice(v.id);
                      setShowVoiceDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                      v.id === selectedVoiceId
                        ? "bg-cyan-500 text-slate-950 font-bold shadow-xs"
                        : isDark
                        ? "hover:bg-white/5 text-slate-200"
                        : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <span className="truncate">{v.displayName}</span>
                    {v.id === selectedVoiceId && (
                      <Check className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    )}
                  </button>
                ))}

                {/* Section B: Browser Fallback Voices */}
                {browserVoices.length > 0 && (
                  <>
                    <div className="px-3 py-1.5 mt-2 text-[10px] font-mono font-bold text-slate-400 border-b border-white/10 mb-1">
                      🌐 DEVICE BROWSER VOICES (OFFLINE FALLBACK)
                    </div>
                    {browserVoices.slice(0, 8).map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          onChangeVoice(v.id);
                          setShowVoiceDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                          v.id === selectedVoiceId
                            ? "bg-cyan-500 text-slate-950 font-bold"
                            : isDark
                            ? "hover:bg-white/5 text-slate-300"
                            : "hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        <span className="truncate">{v.displayName}</span>
                      </button>
                    ))}
                  </>
                )}
              </div>
            </>
          )}
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-cyan-400 mr-1 hidden sm:inline" />
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">Pacing:</span>
          {rates.map((r) => (
            <button
              key={r}
              onClick={() => onChangeRate(r)}
              className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                playbackRate === r
                  ? "bg-cyan-500 text-slate-950 font-black shadow-xs"
                  : isDark
                  ? "bg-white/5 text-slate-300 hover:bg-white/10"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {r}x
            </button>
          ))}
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleMuteToggle}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isDark ? "hover:bg-white/5 text-slate-300" : "hover:bg-slate-100 text-slate-700"
            }`}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-red-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setIsMuted(false);
              onVolumeChange(parseFloat(e.target.value));
            }}
            className="w-16 sm:w-20 accent-cyan-400 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Progress Bar when Active */}
      {(isPlaying || isLoadingAudio) && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
            <span>
              {isLoadingAudio ? "Preparing Audio Stream..." : `Lecture Progress: ${progressPercent}%`}
            </span>
            <span>
              Part {currentChunkIndex} of {totalChunks}
            </span>
          </div>
          <div className="w-full bg-slate-200/40 dark:bg-slate-700/40 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-linear-to-r from-cyan-400 to-teal-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
