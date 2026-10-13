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
  Award,
  Bell,
  Eye,
  EyeOff,
  Radio,
  Sliders,
  CheckCircle2,
  Volume1
} from "lucide-react";
import {
  ZEN_SOUNDS,
  zenSoundEngine,
  STOP_ALARM_OPTIONS,
  type ZenSoundDef,
  type StopAlarmOption
} from "@/lib/zenSoundEngine";

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
  { label: "15m Sprint", minutes: 15, desc: "Formula & Recall Sprint" },
  { label: "22m Flow", minutes: 22, desc: "Optimal Deep Focus Interval" },
  { label: "25m Classic", minutes: 25, desc: "Standard Pomodoro Block" },
  { label: "45m Deep Study", minutes: 45, desc: "NCERT Concept Mastery" },
  { label: "60m Mock Sprint", minutes: 60, desc: "Board Exam Section Drill" },
  { label: "90m Marathon", minutes: 90, desc: "Full Exam Simulation" }
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
  const [soundVolume, setSoundVolume] = useState<number>(() => zenSoundEngine.getVolume());
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [soundCategoryFilter, setSoundCategoryFilter] = useState<string>("binaural");
  const [daysToBoards, setDaysToBoards] = useState<number>(111);
  const [isDistractionFree, setIsDistractionFree] = useState<boolean>(false);
  const [showAlarmDrawer, setShowAlarmDrawer] = useState<boolean>(false);
  const [selectedStopAlarm, setSelectedStopAlarm] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("arete_study_alarm_sound") || "tibetan_bowl";
    }
    return "tibetan_bowl";
  });

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

  // Keyboard navigation: Esc to close, Space to toggle, R to reset, F for distraction-free
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isDistractionFree) {
          setIsDistractionFree(false);
        } else {
          onClose();
        }
      } else if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        onToggleTimer();
      } else if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey) {
        if (e.target === document.body) onResetTimer();
      } else if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.metaKey) {
        if (e.target === document.body) setIsDistractionFree((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isDistractionFree, onClose, onToggleTimer, onResetTimer]);

  const handleSelectSound = useCallback((soundId: string) => {
    if (activeSoundId === soundId) {
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
    if (val > 0) setIsMuted(false);
  }, []);

  const handleToggleMute = useCallback(() => {
    if (isMuted) {
      zenSoundEngine.setVolume(soundVolume || 0.5);
      setIsMuted(false);
    } else {
      zenSoundEngine.setVolume(0);
      setIsMuted(true);
    }
  }, [isMuted, soundVolume]);

  const handleSelectStopAlarm = useCallback((alarmId: string) => {
    setSelectedStopAlarm(alarmId);
    if (typeof window !== "undefined") {
      localStorage.setItem("arete_study_alarm_sound", alarmId);
    }
  }, []);

  const handleTestStopAlarm = useCallback((e: React.MouseEvent, alarmId: string) => {
    e.stopPropagation();
    zenSoundEngine.playCompletionAlarm(alarmId, soundVolume);
  }, [soundVolume]);

  if (!isOpen) return null;

  const totalSecs = selectedMinutes * 60;
  const progressRatio = totalSecs > 0 ? (totalSecs - secondsRemaining) / totalSecs : 0;
  const strokeDashoffset = 754 - 754 * progressRatio;

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  const filteredSounds = soundCategoryFilter === "all"
    ? ZEN_SOUNDS
    : ZEN_SOUNDS.filter((s) => s.category === soundCategoryFilter);

  const activeSoundObj = ZEN_SOUNDS.find((s) => s.id === activeSoundId);

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-[#000000] text-white flex flex-col justify-between overflow-y-auto no-scrollbar select-none animate-in fade-in duration-300"
      style={{
        backgroundImage: isRunning
          ? "radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.05) 0%, rgba(0, 0, 0, 1) 70%)"
          : "radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.04) 0%, rgba(0, 0, 0, 1) 70%)"
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* =========================================================================
          TOP BAR: ZEN CONTROLS & CBSE MILESTONES (HIDDEN IN DISTRACTION-FREE)
          ========================================================================= */}
      {!isDistractionFree && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-5 pb-3 flex items-center justify-between gap-3 shrink-0 animate-in fade-in duration-200">
          {/* LEFT: STATUS & CBSE MILESTONES */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
              <span className="text-[11px] font-mono font-black tracking-wider uppercase text-zinc-300">
                {isRunning ? "Deep Flow Session Active" : "Zen Focus Standby"}
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>CBSE Boards (2026–27):</span>
              <span className="font-black text-cyan-400">{daysToBoards} Days</span>
            </div>
          </div>

          {/* RIGHT: ALARM DRAWER TRIGGER, ZEN TOGGLE & EXIT */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Stop Sound Selector Pill */}
            <button
              onClick={() => setShowAlarmDrawer((v) => !v)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                showAlarmDrawer
                  ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg"
                  : "bg-white/[0.05] border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-500/40"
              }`}
              title="Select Timer Stop Alarm Chime"
            >
              <Bell className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Stop Alarm:</span>
              <span className="text-amber-300 font-black truncate max-w-[110px]">
                {STOP_ALARM_OPTIONS.find((a) => a.id === selectedStopAlarm)?.name.split(" ")[0]}
              </span>
            </button>

            {/* Distraction-Free Toggle */}
            <button
              onClick={() => setIsDistractionFree(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold"
              title="Distraction-Free Zen Theater (Press F)"
            >
              <EyeOff className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden md:inline">Zen Only (F)</span>
            </button>

            {/* Exit Button */}
            <button
              onClick={onClose}
              className="p-2 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] hover:bg-rose-500/20 hover:border-rose-500/40 hover:text-rose-300 border border-white/15 text-zinc-300 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold"
              title="Exit Fullscreen Zen Mode (Esc)"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Exit (Esc)</span>
            </button>
          </div>
        </div>
      )}

      {/* STOP SOUND SELECTION MODAL DRAWER */}
      {showAlarmDrawer && !isDistractionFree && (
        <div className="w-full max-w-2xl mx-auto px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-4 rounded-2xl bg-zinc-950/95 border border-amber-500/40 shadow-2xl backdrop-blur-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Select Timer Completion / Stop Alarm Sound
                </span>
              </div>
              <button
                onClick={() => setShowAlarmDrawer(false)}
                className="text-zinc-400 hover:text-white text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STOP_ALARM_OPTIONS.map((opt) => {
                const isSelected = selectedStopAlarm === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectStopAlarm(opt.id)}
                    className={`p-2.5 rounded-xl border text-xs font-mono flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-400 text-amber-300 font-bold ring-1 ring-amber-400 shadow-md"
                        : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{opt.icon}</span>
                        <span className="font-bold truncate">{opt.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 truncate">{opt.desc}</span>
                      <span className="text-[9px] text-amber-400/80 font-mono">{opt.frequencyDesc}</span>
                    </div>

                    {opt.id !== "none" && (
                      <button
                        type="button"
                        onClick={(e) => handleTestStopAlarm(e, opt.id)}
                        className="px-2 py-1 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-amber-300 text-[10px] font-black shrink-0 transition-all shadow-xs"
                        title="Preview Alarm"
                      >
                        ▶ Test
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CENTER STAGE: PURE OLED DEEP BLACK COUNTDOWN THEATER
          ========================================================================= */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4 max-w-4xl mx-auto w-full text-center relative">
        {/* Distraction-Free Re-open Control */}
        {isDistractionFree && (
          <button
            onClick={() => setIsDistractionFree(false)}
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-zinc-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Show All Controls (F)</span>
          </button>
        )}

        {/* Circular Progress Display */}
        <div className="relative flex items-center justify-center my-4 sm:my-6">
          <svg className="w-72 h-72 sm:w-96 sm:h-96 transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="50%"
              cy="50%"
              r="130"
              className="stroke-white/[0.04]"
              strokeWidth="6"
              fill="transparent"
            />
            {/* Progress glow ring */}
            <circle
              cx="50%"
              cy="50%"
              r="130"
              className={`transition-all duration-1000 ${
                isRunning ? "stroke-amber-400" : "stroke-emerald-400"
              }`}
              strokeWidth="8"
              strokeDasharray="816"
              strokeDashoffset={816 - 816 * progressRatio}
              strokeLinecap="round"
              fill="transparent"
              style={{
                filter: isRunning
                  ? "drop-shadow(0 0 20px rgba(245, 158, 11, 0.55))"
                  : "drop-shadow(0 0 20px rgba(16, 185, 129, 0.45))"
              }}
            />
          </svg>

          {/* Centered Big Typography Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
            <div className="text-6xl sm:text-8xl font-mono font-black tracking-tight tabular-nums text-white drop-shadow-[0_4px_30px_rgba(245,158,11,0.3)]">
              {timeFormatted}
            </div>
            <div className="text-xs sm:text-sm font-mono text-zinc-400 font-semibold tracking-wider uppercase mt-1">
              {selectedMinutes} MINUTE SPRINT • {Math.round(progressRatio * 100)}% COMPLETE
            </div>

            {/* Adjusters (Hidden in Distraction-Free mode) */}
            {!isDistractionFree && (
              <div className="flex items-center gap-3 mt-4 animate-in fade-in duration-200">
                <button
                  onClick={() => onAdjustMinutes(-5)}
                  className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-90"
                  title="Decrease 5 minutes"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                  ±5m Session
                </span>
                <button
                  onClick={() => onAdjustMinutes(5)}
                  className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-90"
                  title="Increase 5 minutes"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* PRIMARY CONTROLS (PLAY / PAUSE / RESET) */}
        <div className="flex items-center gap-4 justify-center mt-2">
          <button
            onClick={onResetTimer}
            className="p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-95 cursor-pointer shadow-lg"
            title="Reset Timer (Press R)"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={onToggleTimer}
            className={`px-10 sm:px-14 py-4 rounded-2xl text-base sm:text-lg font-black transition-all active:scale-95 cursor-pointer flex items-center gap-3 shadow-2xl ${
              isRunning
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/30 ring-2 ring-amber-400"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 ring-2 ring-emerald-400"
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-6 h-6 fill-current" />
                <span>Pause Session (Space)</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6 fill-current" />
                <span>Start Deep Focus ({selectedMinutes}m)</span>
              </>
            )}
          </button>
        </div>

        {/* PRESET CHIPS (Hidden in distraction-free) */}
        {!isDistractionFree && (
          <div className="flex items-center justify-center gap-2 flex-wrap mt-5">
            {PRESETS.map((p) => {
              const isActive = selectedMinutes === p.minutes;
              return (
                <button
                  key={p.minutes}
                  onClick={() => onSelectPreset(p.minutes)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
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
        )}
      </div>

      {/* =========================================================================
          BOTTOM DOCK: SCIENCE-BACKED AMBIENT SOUNDS & AUDIO CONTROLS
          ========================================================================= */}
      {!isDistractionFree && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-3.5 border-t border-white/10 bg-[#05060a]/95 backdrop-blur-2xl shrink-0 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
            {/* Active Sound Indicator */}
            <div className="flex items-center gap-2 flex-wrap">
              <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-black tracking-wider uppercase text-zinc-200">
                Science-Backed Study Soundscapes (30)
              </span>
              {activeSoundObj && (
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Now Playing: {activeSoundObj.icon} {activeSoundObj.name}</span>
                  {activeSoundObj.evidenceBadge && (
                    <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                      {activeSoundObj.evidenceBadge}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Audio Controls: Volume Slider, Mute, Stop */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
                  title={isMuted ? "Unmute sound" : "Mute sound"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume1 className="w-4 h-4 text-amber-400" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : soundVolume}
                  onChange={handleVolumeChange}
                  className="w-24 sm:w-32 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Sound volume"
                />
                <span className="text-[10px] font-mono text-zinc-400 w-8 font-bold">
                  {isMuted ? "0%" : `${Math.round(soundVolume * 100)}%`}
                </span>
              </div>

              {activeSoundId && (
                <button
                  onClick={handleStopAllSounds}
                  className="px-3 py-1 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Square className="w-3 h-3 fill-current" />
                  <span>Stop Sound</span>
                </button>
              )}
            </div>
          </div>

          {/* Sound Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 mb-2">
            {[
              { id: "all", label: "All Sounds (30)" },
              { id: "binaural", label: "🧠 Brainwaves (40Hz Gamma / 10Hz Alpha)" },
              { id: "noise", label: "🟤 Noise (ADHD Focus / Pink / White)" },
              { id: "nature", label: "🌿 Biophilic Nature" },
              { id: "ambient", label: "☕ Workspaces & 60 BPM Metronome" },
              { id: "melodic", label: "🎵 Harmonic Resonance" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSoundCategoryFilter(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold shrink-0 border transition-all cursor-pointer ${
                  soundCategoryFilter === cat.id
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Horizontal Soundscape Carousel */}
          <div className="overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 pb-1">
            {filteredSounds.map((s) => {
              const isPlaying = activeSoundId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSound(s.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-2 border active:scale-95 ${
                    isPlaying
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400"
                      : "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                  title={s.scienceBacking || s.desc}
                >
                  <span className="text-sm">{s.icon}</span>
                  <span>{s.name}</span>
                  {s.evidenceBadge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-normal">
                      {s.evidenceBadge}
                    </span>
                  )}
                  {isPlaying && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Sound Scientific Rationale Banner */}
          {activeSoundObj?.scienceBacking && (
            <div className="mt-2 text-center text-[10px] font-mono text-cyan-300/90 bg-cyan-950/30 border border-cyan-500/20 rounded-lg py-1 px-3 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>{activeSoundObj.scienceBacking}</span>
            </div>
          )}
        </div>
      )}
    </div>,
    document.body
  );
});

export default ZenStudyTimerModal;
