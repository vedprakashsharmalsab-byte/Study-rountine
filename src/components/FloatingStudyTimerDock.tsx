"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Plus,
  Minus,
  Maximize2,
  Minimize2,
  Square,
  ChevronUp,
  ChevronDown,
  Headphones,
  Sliders,
  Bell,
  Volume1,
  Lock,
  Unlock,
  GripVertical,
  Move
} from "lucide-react";
import { ZenStudyTimerModal } from "./ZenStudyTimerModal";
import { ZEN_SOUNDS, zenSoundEngine, STOP_ALARM_OPTIONS } from "@/lib/zenSoundEngine";

interface FloatingStudyTimerDockProps {
  isDark: boolean;
  onTimerComplete?: (minutes: number) => void;
  onAddXp?: (amount: number, reason: string) => void;
  onPlaySound?: (sound: "done" | "levelup" | "click") => void;
  onTriggerConfetti?: () => void;
}

const PRESETS = [
  { label: "15m Sprint", minutes: 15, icon: "⚡", desc: "Formula & Recall Sprint" },
  { label: "22m Flow", minutes: 22, icon: "🎯", desc: "Optimal 22m Deep Flow" },
  { label: "25m Classic", minutes: 25, icon: "⏳", desc: "Standard Pomodoro Focus" },
  { label: "45m Deep Study", minutes: 45, icon: "📖", desc: "NCERT Chapter Mastery" },
  { label: "60m Mock Sprint", minutes: 60, icon: "📝", desc: "Timed Board Exam Drill" },
  { label: "90m Marathon", minutes: 90, icon: "🏆", desc: "Full Exam Simulation" }
];

export const FloatingStudyTimerDock = memo(function FloatingStudyTimerDock({
  isDark,
  onTimerComplete,
  onAddXp,
  onPlaySound,
  onTriggerConfetti,
}: FloatingStudyTimerDockProps) {
  const [selectedMinutes, setSelectedMinutes] = useState<number>(22);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(22 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerTab, setDrawerTab] = useState<"presets" | "sounds" | "alarm">("presets");
  const [isZenModalOpen, setIsZenModalOpen] = useState<boolean>(false);
  
  // Dock Visibility & Compact Modes
  const [isDockHidden, setIsDockHidden] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("arete_study_dock_hidden") === "true";
    }
    return false;
  });
  const [isCompact, setIsCompact] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("arete_study_dock_compact") === "true";
    }
    return false;
  });

  // Lock and Drag Repositioning Feature
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("arete_study_dock_locked");
      return saved !== null ? saved === "true" : true;
    }
    return true;
  });
  const [dockPosition, setDockPosition] = useState<{ x: number; y: number } | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("arete_study_dock_pos");
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return null;
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number } | null>(null);

  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [soundVolume, setSoundVolume] = useState<number>(() => zenSoundEngine.getVolume());
  const [selectedStopAlarm, setSelectedStopAlarm] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("arete_study_alarm_sound") || "tibetan_bowl";
    }
    return "tibetan_bowl";
  });
  const [soundCategory, setSoundCategory] = useState<"all" | "binaural" | "noise" | "nature" | "ambient">("binaural");
  const dockRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
        setIsDrawerOpen(false);
      }
    };
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDrawerOpen]);

  // Window resize bounds check for draggable dock
  useEffect(() => {
    const handleResize = () => {
      setDockPosition((pos) => {
        if (!pos) return null;
        const dockEl = dockRef.current;
        const width = dockEl?.offsetWidth || 280;
        const height = dockEl?.offsetHeight || 60;
        const newX = Math.max(10, Math.min(window.innerWidth - width - 10, pos.x));
        const newY = Math.max(10, Math.min(window.innerHeight - height - 10, pos.y));
        return { x: newX, y: newY };
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Timer Tick Engine
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (activeSoundId) {
              zenSoundEngine.stopAll();
              setActiveSoundId(null);
            }
            zenSoundEngine.playCompletionAlarm(selectedStopAlarm, soundVolume);

            if (onPlaySound) {
              try { onPlaySound("done"); } catch {}
            }
            if (onAddXp) {
              const gainedXp = Math.max(30, selectedMinutes * 2);
              onAddXp(gainedXp, `Completed ${selectedMinutes}m Focus Study Sprint`);
            }
            if (onTriggerConfetti) {
              try { onTriggerConfetti(); } catch {}
            }
            if (onTimerComplete) {
              onTimerComplete(selectedMinutes);
            }
            return selectedMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, selectedMinutes, activeSoundId, selectedStopAlarm, soundVolume, onAddXp, onPlaySound, onTimerComplete, onTriggerConfetti]);

  const toggleTimer = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
    setIsRunning((r) => !r);
  }, [onPlaySound]);

  const resetTimer = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
    setIsRunning(false);
    setSecondsRemaining(selectedMinutes * 60);
  }, [selectedMinutes, onPlaySound]);

  const selectPreset = useCallback((mins: number) => {
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
    setSelectedMinutes(mins);
    setSecondsRemaining(mins * 60);
    setIsRunning(false);
  }, [onPlaySound]);

  const adjustMinutes = useCallback((delta: number) => {
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
    setSelectedMinutes((prev) => {
      const next = Math.max(5, Math.min(180, prev + delta));
      setSecondsRemaining(next * 60);
      setIsRunning(false);
      return next;
    });
  }, [onPlaySound]);

  const handleSelectSound = useCallback((soundId: string) => {
    if (activeSoundId === soundId) {
      zenSoundEngine.stopAll();
      setActiveSoundId(null);
    } else {
      zenSoundEngine.playSound(soundId);
      setActiveSoundId(soundId);
    }
  }, [activeSoundId]);

  const handleStopAllSounds = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    zenSoundEngine.stopAll();
    setActiveSoundId(null);
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setSoundVolume(val);
    zenSoundEngine.setVolume(val);
  }, []);

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

  // Lock / Unlock toggle
  const toggleLock = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsLocked((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("arete_study_dock_locked", String(next));
      }
      return next;
    });
  }, []);

  // Compact mode toggle
  const toggleCompact = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsCompact((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("arete_study_dock_compact", String(next));
      }
      return next;
    });
  }, []);

  // Hide / Close dock
  const closeDock = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsDockHidden(true);
    setIsDrawerOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("arete_study_dock_hidden", "true");
    }
  }, []);

  // Reopen dock
  const reopenDock = useCallback(() => {
    setIsDockHidden(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("arete_study_dock_hidden", "false");
    }
  }, []);

  // Reset docked position to default bottom-right
  const resetPosition = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDockPosition(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("arete_study_dock_pos");
    }
  }, []);

  // Pointer drag event handlers for free repositioning when unlocked
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (isLocked) return;
    const target = e.target as HTMLElement;
    if (target.closest("button, input, select, a")) return;

    const dockEl = dockRef.current;
    if (!dockEl) return;
    const rect = dockEl.getBoundingClientRect();

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: dockPosition ? dockPosition.x : rect.left,
      initY: dockPosition ? dockPosition.y : rect.top,
    };
    setIsDragging(true);
    try {
      target.setPointerCapture(e.pointerId);
    } catch {}
  }, [isLocked, dockPosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;
    const dockEl = dockRef.current;
    const width = dockEl?.offsetWidth || 280;
    const height = dockEl?.offsetHeight || 60;
    const newX = Math.max(10, Math.min(window.innerWidth - width - 10, dragStartRef.current.initX + deltaX));
    const newY = Math.max(10, Math.min(window.innerHeight - height - 10, dragStartRef.current.initY + deltaY));
    setDockPosition({ x: newX, y: newY });
  }, [isDragging]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      dragStartRef.current = null;
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      if (dockPosition && typeof window !== "undefined") {
        localStorage.setItem("arete_study_dock_pos", JSON.stringify(dockPosition));
      }
    }
  }, [isDragging, dockPosition]);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  const filteredSounds = soundCategory === "all"
    ? ZEN_SOUNDS
    : ZEN_SOUNDS.filter((s) => s.category === soundCategory);

  // Determine if drawer opens downward (if dock is placed high up) or upward
  const isDockNearTop = dockPosition !== null && dockPosition.y < 380;

  // Render minimal reopen pill when dock is closed / hidden by user
  if (isDockHidden) {
    return (
      <>
        <aside
          aria-label="Reopen Focus Study Timer"
          className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 select-none transition-all duration-300 font-sans"
          style={
            dockPosition
              ? { left: `${dockPosition.x}px`, top: `${dockPosition.y}px`, right: "auto", bottom: "auto" }
              : undefined
          }
        >
          <button
            type="button"
            onClick={reopenDock}
            className={`px-3.5 py-2 rounded-full border shadow-2xl backdrop-blur-2xl flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 animate-fade-in ${
              isRunning
                ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 ring-2 ring-emerald-400/50 shadow-emerald-500/20"
                : isDark
                ? "bg-[#090d18]/95 border-amber-500/40 text-amber-300 hover:bg-[#11192e] shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                : "bg-white/95 border-amber-300 text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.14)] hover:bg-amber-50"
            }`}
            title="Reopen Focus Timer Dock"
          >
            <Timer className={`w-4 h-4 ${isRunning ? "text-emerald-400 animate-pulse" : "text-amber-400"}`} />
            <span className="font-mono font-black text-xs sm:text-sm tabular-nums tracking-tight">
              {timeFormatted}
            </span>
            {isRunning && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
            <span className="text-[10px] font-bold text-zinc-400 border-l border-white/20 pl-2">
              Focus Timer
            </span>
          </button>
        </aside>

        {/* ZEN MODAL (Always available even if dock was hidden) */}
        <ZenStudyTimerModal
          isOpen={isZenModalOpen}
          onClose={() => setIsZenModalOpen(false)}
          isDark={isDark}
          selectedMinutes={selectedMinutes}
          secondsRemaining={secondsRemaining}
          isRunning={isRunning}
          onToggleTimer={toggleTimer}
          onResetTimer={resetTimer}
          onSelectPreset={selectPreset}
          onAdjustMinutes={adjustMinutes}
        />
      </>
    );
  }

  return (
    <>
      {/* FLOATING STUDY TIMER DOCK */}
      <aside
        aria-label="Floating Study Focus Cockpit"
        ref={dockRef}
        id="floating-study-timer-dock"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`fixed z-40 select-none transition-shadow font-sans ${
          dockPosition ? "" : "bottom-20 md:bottom-6 right-4 sm:right-6"
        } ${isDragging ? "cursor-grabbing opacity-90 scale-[1.02]" : !isLocked ? "cursor-grab" : ""}`}
        style={
          dockPosition
            ? { left: `${dockPosition.x}px`, top: `${dockPosition.y}px`, right: "auto", bottom: "auto" }
            : undefined
        }
      >
        {/* EXPANDING DRAWER */}
        {isDrawerOpen && (
          <div
            className={`absolute ${
              isDockNearTop ? "top-full mt-3" : "bottom-full mb-3"
            } right-0 w-[330px] sm:w-[380px] rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-2xl animate-fade-in ${
              isDark
                ? "bg-[#090d18]/95 border-amber-500/35 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)] ring-1 ring-amber-500/20"
                : "bg-white/95 border-amber-200 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            }`}
          >
            {/* Drawer Header */}
            <div className="p-3.5 border-b border-white/10 flex items-center justify-between gap-2 bg-black/20">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setDrawerTab("presets")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    drawerTab === "presets"
                      ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Presets ({selectedMinutes}m)
                </button>
                <button
                  type="button"
                  onClick={() => setDrawerTab("sounds")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    drawerTab === "sounds"
                      ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Headphones className="w-3 h-3" />
                  <span>38 Sounds</span>
                  {activeSoundId && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                </button>
                <button
                  type="button"
                  onClick={() => setDrawerTab("alarm")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    drawerTab === "alarm"
                      ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Bell className="w-3 h-3" />
                  <span>Alarm</span>
                </button>
              </div>

              <div className="flex items-center gap-1">
                {dockPosition && (
                  <button
                    type="button"
                    onClick={resetPosition}
                    className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-amber-300 text-[10px] font-mono"
                    title="Reset to default bottom-right position"
                  >
                    Reset Pos
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white"
                  title="Close Drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="p-4 max-h-[360px] overflow-y-auto no-scrollbar space-y-4">
              
              {/* TAB 1: PRESETS */}
              {drawerTab === "presets" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-amber-400">Custom Duration</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => adjustMinutes(-5)}
                        className="p-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-zinc-200"
                        title="-5 Minutes"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono font-black text-sm text-amber-400 tabular-nums px-1">
                        {selectedMinutes}m
                      </span>
                      <button
                        type="button"
                        onClick={() => adjustMinutes(5)}
                        className="p-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-zinc-200"
                        title="+5 Minutes"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {PRESETS.map((p) => {
                      const isSelected = selectedMinutes === p.minutes;
                      return (
                        <button
                          key={p.minutes}
                          type="button"
                          onClick={() => selectPreset(p.minutes)}
                          className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? isDark
                                ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50"
                                : "bg-amber-100 border-amber-400 text-amber-950 font-bold"
                              : isDark
                              ? "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08]"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold">
                            <span>{p.icon} {p.label}</span>
                          </div>
                          <p className="text-[10px] opacity-70 mt-0.5 line-clamp-1">{p.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: 38 SCIENTIFIC SOUNDS */}
              {drawerTab === "sounds" && (
                <div className="space-y-3">
                  {/* Master Volume Slider */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                    <Volume1 className="w-4 h-4 text-amber-400 shrink-0" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={soundVolume}
                      onChange={handleVolumeChange}
                      className="w-full accent-amber-400 h-1.5 cursor-pointer"
                    />
                    <span className="text-[10px] font-mono text-zinc-300 w-8 text-right tabular-nums">
                      {Math.round(soundVolume * 100)}%
                    </span>
                    {activeSoundId && (
                      <button
                        type="button"
                        onClick={handleStopAllSounds}
                        className="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-mono font-bold hover:bg-rose-500/30 shrink-0"
                      >
                        Mute All
                      </button>
                    )}
                  </div>

                  {/* Category Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
                    {(["binaural", "noise", "nature", "ambient", "all"] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSoundCategory(cat)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold capitalize transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                          soundCategory === cat
                            ? "bg-amber-500 text-slate-950 font-black shadow-xs"
                            : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Sound List */}
                  <div className="space-y-1.5 max-h-[220px] overflow-y-auto no-scrollbar">
                    {filteredSounds.map((snd) => {
                      const isPlaying = activeSoundId === snd.id;
                      return (
                        <button
                          key={snd.id}
                          type="button"
                          onClick={() => handleSelectSound(snd.id)}
                          className={`w-full p-2 rounded-xl border text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isPlaying
                              ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50"
                              : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08]"
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-bold flex items-center gap-1.5 truncate">
                              <span>{snd.icon}</span>
                              <span className="truncate">{snd.name}</span>
                              {snd.evidenceBadge && (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                                  {snd.evidenceBadge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-zinc-400 truncate mt-0.5">{snd.desc}</p>
                          </div>

                          <span className={`p-1 rounded-full shrink-0 ${
                            isPlaying ? "bg-amber-400 text-slate-950" : "bg-white/10 text-zinc-400"
                          }`}>
                            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: STOP ALARM */}
              {drawerTab === "alarm" && (
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Completion Alarm Sound
                  </div>
                  {STOP_ALARM_OPTIONS.map((opt) => {
                    const isSelected = selectedStopAlarm === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectStopAlarm(opt.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50"
                            : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08]"
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{opt.name}</div>
                          <p className="text-[10px] text-zinc-400 truncate">{opt.desc}</p>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handleTestStopAlarm(e, opt.id)}
                          className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono font-bold text-amber-300 shrink-0"
                          title="Preview Alarm"
                        >
                          ▶ Test
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Drawer Footer: 1-Click Launch Zen Theater */}
            <div className="p-3 border-t border-white/10 bg-black/40 flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono text-zinc-400">
                Active: {activeSoundId ? ZEN_SOUNDS.find((s) => s.id === activeSoundId)?.name?.split(" ")[0] : "Muted"}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsDrawerOpen(false);
                  setIsZenModalOpen(true);
                }}
                className="px-3 py-1 rounded-xl text-xs font-mono font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center gap-1 shadow-sm hover:brightness-110 active:scale-95"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>OLED Zen [F]</span>
              </button>
            </div>
          </div>
        )}

        {/* CAPSULE DOCK BODY */}
        {isCompact ? (
          /* =========================================================
             COMPACT MICRO-PILL MODE: Sleek, tiny, zero interference
             ========================================================= */
          <div
            className={`flex items-center gap-1.5 p-1.5 rounded-full border shadow-2xl backdrop-blur-2xl transition-all duration-200 ${
              isRunning
                ? isDark
                  ? "bg-[#090d19]/95 border-emerald-500/50 shadow-[0_10px_35px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500/40"
                  : "bg-white/95 border-emerald-400 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400"
                : isDark
                ? "bg-[#080c18]/95 border-amber-500/35 text-white shadow-[0_10px_35px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/20"
                : "bg-white/95 border-amber-300 text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
            }`}
          >
            {/* Drag handle if unlocked */}
            {!isLocked && (
              <span className="text-zinc-500 pl-1 cursor-grab" title="Drag to reposition">
                <GripVertical className="w-3.5 h-3.5" />
              </span>
            )}

            {/* Time */}
            <button
              type="button"
              onClick={toggleCompact}
              className="px-2 py-0.5 rounded-full font-mono font-black text-xs sm:text-sm tabular-nums text-amber-400 dark:text-amber-300 hover:bg-white/10"
              title="Click to expand dock"
            >
              {timeFormatted}
            </button>

            {/* Play/Pause */}
            <button
              type="button"
              onClick={toggleTimer}
              className={`p-1.5 rounded-full transition-transform active:scale-90 ${
                isRunning
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-emerald-500/30"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black"
              }`}
              title={isRunning ? "Pause" : "Start"}
            >
              {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
            </button>

            {/* Expand button */}
            <button
              type="button"
              onClick={toggleCompact}
              className="p-1 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
              title="Expand full dock"
            >
              <Maximize2 className="w-3 h-3" />
            </button>

            {/* Close / Hide Button */}
            <button
              type="button"
              onClick={closeDock}
              className="p-1 rounded-full hover:bg-rose-500/20 text-zinc-400 hover:text-rose-300"
              title="Close Dock"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          /* =========================================================
             FULL DOCK CAPSULE: Complete controls & lock/move features
             ========================================================= */
          <div
            className={`flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full border shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
              isRunning
                ? isDark
                  ? "bg-[#090d19]/95 border-emerald-500/50 shadow-[0_10px_35px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500/40"
                  : "bg-white/95 border-emerald-400 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400"
                : isDark
                ? "bg-[#080c18]/95 border-amber-500/35 text-white shadow-[0_10px_35px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/20"
                : "bg-white/95 border-amber-300 text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
            }`}
          >
            {/* 1. Drag Handle (visible when unlocked) */}
            {!isLocked && (
              <div
                className="pl-1 pr-0.5 text-amber-400 hover:text-amber-300 cursor-grab active:cursor-grabbing flex items-center"
                title="Drag anywhere to reposition dock"
              >
                <GripVertical className="w-4 h-4 animate-pulse" />
              </div>
            )}

            {/* 2. Timer Icon & Time Display */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              title="Click to change duration & sounds"
            >
              <Timer
                className={`w-4 h-4 shrink-0 ${
                  isRunning
                    ? "text-emerald-400 animate-pulse"
                    : isDark
                    ? "text-amber-400"
                    : "text-amber-600"
                }`}
              />
              <span className="font-mono font-black text-sm sm:text-base tabular-nums tracking-tight leading-none text-amber-400 dark:text-amber-300">
                {timeFormatted}
              </span>
            </button>

            {/* 3. Play / Pause Action Button */}
            <button
              type="button"
              onClick={toggleTimer}
              aria-label={isRunning ? "Pause Timer" : "Start Study Timer"}
              className={`p-1.5 sm:p-2 rounded-full transition-transform active:scale-90 shadow-sm ${
                isRunning
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-emerald-500/30"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black shadow-amber-500/30"
              }`}
              title={isRunning ? "Pause Focus Timer" : "Start Focus Timer"}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>

            {/* 4. Reset Button (If Running or Elapsed) */}
            {(isRunning || secondsRemaining !== selectedMinutes * 60) && (
              <button
                type="button"
                onClick={resetTimer}
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* 5. Active Ambient Sound Badge */}
            <button
              type="button"
              onClick={() => {
                setDrawerTab("sounds");
                setIsDrawerOpen(true);
              }}
              className={`px-2 py-1 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                activeSoundId
                  ? "bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
              title="Ambient Study Soundscapes (38)"
            >
              <Headphones className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px]">
                {activeSoundId ? ZEN_SOUNDS.find((s) => s.id === activeSoundId)?.name?.split(" ")[0] : "Sounds"}
              </span>
            </button>

            {/* 6. Lock / Unlock Position Toggle */}
            <button
              type="button"
              onClick={toggleLock}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                !isLocked
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                  : "hover:bg-white/10 text-zinc-400 hover:text-zinc-200"
              }`}
              title={isLocked ? "Unlock to drag and reposition anywhere" : "Unlocked: Drag to move, click to lock position"}
            >
              {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            {/* 7. Minimize / Compact Pill Toggle */}
            <button
              type="button"
              onClick={toggleCompact}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Make small (compact micro-pill)"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>

            {/* 8. Fullscreen Zen Mode Trigger */}
            <button
              type="button"
              onClick={() => setIsZenModalOpen(true)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-amber-300 transition-colors"
              title="Open 10x Fullscreen OLED Zen Mode [F]"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* 9. Presets / Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Options & Presets"
            >
              {isDrawerOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>

            {/* 10. Close / Hide Button (so user can hide if annoying) */}
            <button
              type="button"
              onClick={closeDock}
              className="p-1.5 rounded-full hover:bg-rose-500/20 text-zinc-400 hover:text-rose-300 transition-colors"
              title="Close dock (reopen anytime via minimal floating pill)"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </aside>

      {/* FULLSCREEN OLED DEEP BLACK ZEN THEATER MODAL */}
      <ZenStudyTimerModal
        isOpen={isZenModalOpen}
        onClose={() => setIsZenModalOpen(false)}
        isDark={isDark}
        selectedMinutes={selectedMinutes}
        secondsRemaining={secondsRemaining}
        isRunning={isRunning}
        onToggleTimer={toggleTimer}
        onResetTimer={resetTimer}
        onSelectPreset={selectPreset}
        onAdjustMinutes={adjustMinutes}
      />
    </>
  );
});
