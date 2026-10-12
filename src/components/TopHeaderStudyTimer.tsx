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
  Minus
} from "lucide-react";

interface TopHeaderStudyTimerProps {
  isDark: boolean;
  onTimerComplete?: (minutes: number) => void;
  onAddXp?: (amount: number, reason: string) => void;
  onPlaySound?: (sound: "done" | "levelup" | "click") => void;
  onTriggerConfetti?: () => void;
}

const PRESETS = [
  { label: "25m Focus", minutes: 25, icon: "🍅", desc: "Standard Pomodoro Session" },
  { label: "15m Sprint", minutes: 15, icon: "⚡", desc: "Formula and Recall Sprint" },
  { label: "45m Deep Study", minutes: 45, icon: "🎯", desc: "NCERT Chapter Mastery" },
  { label: "60m Board Sprint", minutes: 60, icon: "📝", desc: "Full Section Timed Drill" },
];

export const TopHeaderStudyTimer = memo(function TopHeaderStudyTimer({
  isDark,
  onTimerComplete,
  onAddXp,
  onPlaySound,
  onTriggerConfetti,
}: TopHeaderStudyTimerProps) {
  const [selectedMinutes, setSelectedMinutes] = useState<number>(25);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  // Timer countdown engine
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Timer Finished!
            setIsRunning(false);
            setCompletedSessions((c) => c + 1);

            if (onTriggerConfetti) onTriggerConfetti();
            if (isSoundEnabled && onPlaySound) {
              try { onPlaySound("levelup"); } catch {}
            }
            if (onAddXp) {
              onAddXp(50, `Study Focus (${selectedMinutes}m) Completed! (+50 XP)`);
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
  }, [isRunning, selectedMinutes, isSoundEnabled, onAddXp, onPlaySound, onTimerComplete, onTriggerConfetti]);

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

  // Format MM:SS
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  return (
    <div className="relative shrink-0 select-none" ref={menuRef} id="tutorial-study-timer">
      {/* HEADER CAPSULE TRIGGER */}
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border text-[10px] sm:text-[11px] xl:text-xs font-mono font-bold transition-all cursor-pointer shadow-xs leading-none whitespace-nowrap active:scale-[0.98] ${
          isRunning
            ? isDark
              ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/30"
              : "bg-emerald-50 border-emerald-300 text-emerald-950 font-black ring-1 ring-emerald-400"
            : isDark
            ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/15"
            : "bg-amber-50 border-amber-300 text-amber-950 hover:bg-amber-100"
        }`}
        title="Top Study Focus Timer (Tap to open presets and controls)"
        role="button"
        tabIndex={0}
      >
        {/* Animated Timer Icon */}
        <Timer
          className={`w-3.5 h-3.5 shrink-0 ${
            isRunning
              ? "text-emerald-400 animate-pulse"
              : isDark
              ? "text-amber-400"
              : "text-amber-600"
          }`}
        />

        {/* Live Countdown Display */}
        <span className="tabular-nums font-mono font-black inline-flex items-center leading-none">
          {timeFormatted}
        </span>

        {/* Mini 1-Tap Play/Pause Action */}
        <button
          type="button"
          onClick={toggleTimer}
          aria-label={isRunning ? "Pause Focus Timer" : "Start Focus Timer"}
          className={`p-0.5 sm:p-1 rounded-full transition-transform active:scale-90 ml-0.5 ${
            isRunning
              ? isDark
                ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"
                : "bg-emerald-200 text-emerald-900 hover:bg-emerald-300"
              : isDark
              ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
              : "bg-amber-200 text-amber-900 hover:bg-amber-300"
          }`}
        >
          {isRunning ? <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /> : <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />}
        </button>
      </div>

      {/* POPOVER PRESET & CONTROLS MENU */}
      {isMenuOpen && (
        <div
          className={`absolute right-0 sm:right-auto sm:left-0 top-full mt-2 w-72 sm:w-80 rounded-2xl border p-3.5 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isDark
              ? "bg-[#0b0f19]/95 border-white/15 text-white shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              : "bg-white/95 border-slate-200 text-slate-900 shadow-xl"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
            <div className="flex items-center gap-1.5">
              <Timer className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-black tracking-wide uppercase">Study Focus Timer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsSoundEnabled((s) => !s)}
                className={`p-1 rounded-lg border transition-all text-[10px] ${
                  isSoundEnabled
                    ? isDark ? "bg-white/10 border-white/20 text-amber-300" : "bg-slate-100 border-slate-300 text-slate-700"
                    : "bg-white/5 border-white/10 text-slate-500"
                }`}
                title={isSoundEnabled ? "Sound alert on" : "Sound alert off"}
              >
                {isSoundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Time Display & Adjusters */}
          <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 mb-3 ${
            isDark ? "bg-black/30 border-white/10" : "bg-slate-50 border-slate-200"
          }`}>
            <button
              type="button"
              onClick={() => adjustMinutes(-5)}
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-bold font-mono transition-all"
              title="Minus 5 minutes"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            <div className="text-center">
              <div className="text-2xl font-black font-mono tracking-tight tabular-nums text-amber-400">
                {timeFormatted}
              </div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">
                {selectedMinutes} min focus session
              </div>
            </div>

            <button
              type="button"
              onClick={() => adjustMinutes(5)}
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-bold font-mono transition-all"
              title="Plus 5 minutes"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Presets Grid */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {PRESETS.map((p) => {
              const isCurrent = selectedMinutes === p.minutes;
              return (
                <button
                  key={p.minutes}
                  type="button"
                  onClick={() => selectPreset(p.minutes)}
                  className={`p-2 rounded-xl border text-left transition-all text-xs font-bold flex flex-col gap-0.5 cursor-pointer active:scale-98 ${
                    isCurrent
                      ? isDark
                        ? "bg-amber-500/20 border-amber-500/50 text-amber-300 ring-1 ring-amber-400/40"
                        : "bg-amber-100 border-amber-400 text-amber-950 font-black ring-1 ring-amber-400"
                      : isDark
                      ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{p.icon} {p.label}</span>
                    {isCurrent && <span className="text-[9px] font-mono text-amber-400">ACTIVE</span>}
                  </div>
                  <span className="text-[9px] opacity-60 font-normal leading-tight">{p.desc}</span>
                </button>
              );
            })}
          </div>

          {/* Controls: Play/Pause, Reset */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={toggleTimer}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md active:scale-98 ${
                isRunning
                  ? "bg-amber-500 hover:bg-amber-400 text-slate-950"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white"
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Timer</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Focus ({selectedMinutes}m)</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={resetTimer}
              className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isDark ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title="Reset to initial time"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Reward note */}
          <div className="mt-2.5 text-center text-[10px] font-mono opacity-70 flex items-center justify-center gap-1 text-amber-400">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Complete 1 session to earn +50 Focus XP</span>
          </div>
        </div>
      )}
    </div>
  );
});
