"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Plus,
  Minus,
  Sparkles,
  Maximize2,
  Minimize2,
  Square,
  Flame,
  Award,
  Clock,
  Compass
} from "lucide-react";
import { ZEN_SOUNDS, zenSoundEngine, type ZenSoundDef } from "@/lib/zenSoundEngine";

interface ZenStudyTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  selectedMinutes: number;
  secondsRemaining: number;
  isRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onSelectPreset: (minutes: number) => void;
  onAdjustMinutes: (delta: number) => void;
}

const PRESETS = [
  { label: "15m Sprint", minutes: 15, desc: "Formula & Recall" },
  { label: "22m Focus", minutes: 22, desc: "Optimal Deep Flow" },
  { label: "25m Classic", minutes: 25, desc: "Standard Pomodoro" },
  { label: "45m Deep Study", minutes: 45, desc: "NCERT Mastery" },
  { label: "60m Mock Sprint", minutes: 60, desc: "Board Exam Section" },
  { label: "90m Marathon", minutes: 90, desc: "Full Length Mock" }
];

export const ZenStudyTimerModal = memo(function ZenStudyTimerModal({
  isOpen,
  onClose,
  isDark,
  selectedMinutes,
  secondsRemaining,
  isRunning,
  onToggleTimer,
  onResetTimer,
  onSelectPreset,
  onAdjustMinutes
}: ZenStudyTimerModalProps) {
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [soundVolume, setSoundVolume] = useState<number>(0.5);
  const [soundCategoryFilter, setSoundCategoryFilter] = useState<string>("all");
  const [daysToBoards, setDaysToBoards] = useState<number>(111);

  // Sync active sound with engine
  useEffect(() => {
    setActiveSoundId(zenSoundEngine.getCurrentSound());
  }, [isOpen]);

  // Calculate days to CBSE Boards (2027-02-01)
  useEffect(() => {
    const target = new Date("2027-02-01T09:00:00+05:30").getTime();
    const updateDays = () => {
      const diff = Math.max(0, target - Date.now());
      setDaysToBoards(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    };
    updateDays();
    const interval = setInterval(updateDays, 60000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation (Esc to close, Space to toggle)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        onToggleTimer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onToggleTimer]);

  const handleSelectSound = useCallback((soundId: string) => {
    if (activeSoundId === soundId) {
      // Toggle off / stop
      zenSoundEngine.stopAll();
      setActiveSoundId(null);
    } else {
      zenSoundEngine.playSound(soundId);
      setActiveSoundId(soundId);
    }
  }, [activeSoundId]);

  const handleStopAllSounds = useCallback(() => {
    zenSoundEngine.stopAll();
    setActiveSoundId(null);
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setSoundVolume(val);
    zenSoundEngine.setVolume(val);
  }, []);

  if (!isOpen) return null;

  const totalSecs = selectedMinutes * 60;
  const progressRatio = totalSecs > 0 ? (totalSecs - secondsRemaining) / totalSecs : 0;
  const strokeDashoffset = 754 - 754 * progressRatio; // Circle radius 120, circumference ~754

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  const filteredSounds = soundCategoryFilter === "all"
    ? ZEN_SOUNDS
    : ZEN_SOUNDS.filter((s) => s.category === soundCategoryFilter);

  const activeSoundObj = ZEN_SOUNDS.find((s) => s.id === activeSoundId);

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-[#030407] text-white flex flex-col justify-between overflow-y-auto no-scrollbar select-none animate-in fade-in duration-300"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.04) 0%, rgba(0, 0, 0, 0.98) 75%)"
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* =========================================================================
          TOP BAR: MILESTONES & CONTROLS (ZERO OVERLAPPING)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-3 flex items-center justify-between gap-3 shrink-0">
        {/* LEFT: STATUS & CBSE MILESTONES BANNER */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-300">
              {isRunning ? "Zen Focus Flow Active" : "Zen Focus Standby"}
            </span>
          </div>

          {/* CBSE Class 10 Board Milestones (2026-2027) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>CBSE Boards (2026–2027):</span>
            <span className="font-black text-amber-400">{daysToBoards} Days</span>
          </div>
        </div>

        {/* RIGHT: SOUND STATUS & EXIT BUTTON */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {activeSoundId && (
            <button
              onClick={handleStopAllSounds}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold hover:bg-rose-500/25 transition-all cursor-pointer"
              title="Stop playing ambient sound"
            >
              <Square className="w-3 h-3 fill-current" />
              <span>Stop Sound</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2 sm:px-3.5 sm:py-2 rounded-full bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-zinc-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold"
            title="Exit Fullscreen Zen Mode (Esc)"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Exit (Esc)</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          CENTER STAGE: AESTHETIC MINIMALIST TIMER THEATER
          ========================================================================= */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 max-w-4xl mx-auto w-full text-center">
        {/* CIRCULAR TIMER VISUAL */}
        <div className="relative flex items-center justify-center my-4 sm:my-6">
          <svg className="w-72 h-72 sm:w-88 sm:h-88 transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="50%"
              cy="50%"
              r="120"
              className="stroke-white/[0.06]"
              strokeWidth="6"
              fill="transparent"
            />
            {/* Progress glow ring */}
            <circle
              cx="50%"
              cy="50%"
              r="120"
              className={`transition-all duration-1000 ${
                isRunning ? "stroke-amber-400" : "stroke-white/30"
              }`}
              strokeWidth="7"
              strokeDasharray="754"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{
                filter: isRunning ? "drop-shadow(0 0 16px rgba(245, 158, 11, 0.45))" : "none"
              }}
            />
          </svg>

          {/* Centered Big Typography Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
            <div className="text-6xl sm:text-7xl font-mono font-black tracking-tighter tabular-nums text-white drop-shadow-[0_4px_24px_rgba(245,158,11,0.25)]">
              {timeFormatted}
            </div>
            <div className="text-xs sm:text-sm font-mono text-zinc-400 font-semibold tracking-wider uppercase mt-1">
              {selectedMinutes} MINUTE SPRINT
            </div>

            {/* In-circle increment & decrement adjusters */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => onAdjustMinutes(-5)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-90"
                title="Decrease 5 minutes"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                ±5m Adj
              </span>
              <button
                onClick={() => onAdjustMinutes(5)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-90"
                title="Increase 5 minutes"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* PRIMARY CONTROLS (PLAY / PAUSE / RESET) */}
        <div className="flex items-center gap-3.5 sm:gap-4 justify-center mt-2">
          <button
            onClick={onResetTimer}
            className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-95 cursor-pointer shadow-lg"
            title="Reset timer to beginning"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={onToggleTimer}
            className={`px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-black transition-all active:scale-95 cursor-pointer flex items-center gap-3 shadow-2xl ${
              isRunning
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/25 ring-2 ring-amber-400"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25 ring-2 ring-emerald-400"
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 fill-current" />
                <span>Pause Session</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Start Deep Focus ({selectedMinutes}m)</span>
              </>
            )}
          </button>
        </div>

        {/* PRESET CHIPS */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-5 sm:mt-6">
          {PRESETS.map((p) => {
            const isActive = selectedMinutes === p.minutes;
            return (
              <button
                key={p.minutes}
                onClick={() => onSelectPreset(p.minutes)}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-400"
                    : "bg-white/[0.04] border-white/10 text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM DOCK: 30 AMBIENT SOUNDSCAPES & AUDIO ENGINE
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 border-t border-white/10 bg-[#06080e]/95 backdrop-blur-2xl shrink-0">
        {/* Sound Header & Category Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-200">
              30 Ambient Study Soundscapes
            </span>
            {activeSoundObj && (
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Now Playing: {activeSoundObj.icon} {activeSoundObj.name}
              </span>
            )}
          </div>

          {/* Volume Slider & Stop Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={soundVolume}
                onChange={handleVolumeChange}
                className="w-24 sm:w-32 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Sound volume"
              />
              <span className="text-[10px] font-mono text-zinc-400 w-8">
                {Math.round(soundVolume * 100)}%
              </span>
            </div>

            {activeSoundId ? (
              <button
                onClick={handleStopAllSounds}
                className="px-3 py-1 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Square className="w-3 h-3 fill-current" />
                <span>Stop</span>
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-500">
                Tap any sound below to play
              </span>
            )}
          </div>
        </div>

        {/* 30 Sounds Horizontal Scroll Strip */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 pb-1">
          {ZEN_SOUNDS.map((s) => {
            const isPlaying = activeSoundId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectSound(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 border active:scale-95 ${
                  isPlaying
                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400"
                    : "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                }`}
                title={s.desc}
              >
                <span className="text-sm">{s.icon}</span>
                <span>{s.name}</span>
                {isPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Motivational Footer */}
        <div className="mt-2.5 text-center text-[10px] font-mono text-zinc-500 flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-amber-400/70" />
          <span>Every 25-minute deep focus block awards +50 Focus XP to your CBSE Cadet Ledger</span>
        </div>
      </div>
    </div>,
    document.body
  );
});
