"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  Zap,
  Target,
  Volume2,
  VolumeX,
  Plus,
  Minimize2,
  Maximize2,
  ChevronDown,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export type TimerMode = "stopwatch" | "question_pace" | "mock_exam";

interface PracticeTimerProps {
  isDark: boolean;
  activeSubject?: string;
  activeChapter?: number | null;
  onTimerComplete?: (mode: TimerMode, durationSeconds: number) => void;
  className?: string;
}

export const PracticeTimer = memo(function PracticeTimer({
  isDark,
  activeSubject = "science",
  activeChapter,
  onTimerComplete,
  className = ""
}: PracticeTimerProps) {
  const [mode, setMode] = useState<TimerMode>("question_pace");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0); // For stopwatch
  const [remainingSeconds, setRemainingSeconds] = useState<number>(180); // Default 3 mins for question pace
  const [initialTargetSeconds, setInitialTargetSeconds] = useState<number>(180);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [questionsAnsweredSession, setQuestionsAnsweredSession] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Sound chime synthesizer
  const playAlertSound = useCallback((frequency = 587.33, type: OscillatorType = "sine") => {
    if (isMuted || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {}
  }, [isMuted]);

  // Main tick loop
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (mode === "stopwatch") {
          setElapsedSeconds((prev) => prev + 1);
        } else {
          setRemainingSeconds((prev) => {
            if (prev <= 1) {
              clearInterval(timerRef.current!);
              setIsRunning(false);
              playAlertSound(880, "triangle"); // Happy ding
              setTimeout(() => playAlertSound(1174.66, "sine"), 150);
              if (onTimerComplete) {
                onTimerComplete(mode, initialTargetSeconds);
              }
              return 0;
            }
            if (prev === 60 || prev === 30 || prev === 10) {
              playAlertSound(440, "sine"); // Gentle warning beep
            }
            return prev - 1;
          });
        }
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode, initialTargetSeconds, onTimerComplete, playAlertSound]);

  // Keyboard shortcut listener (Space to play/pause, R to reset)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.code === "Space" && e.ctrlKey) {
        e.preventDefault();
        setIsRunning((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTogglePlay = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (mode === "stopwatch") {
      setElapsedSeconds(0);
    } else {
      setRemainingSeconds(initialTargetSeconds);
    }
  };

  const setQuestionPace = (seconds: number) => {
    setIsRunning(false);
    setInitialTargetSeconds(seconds);
    setRemainingSeconds(seconds);
    setMode("question_pace");
  };

  const setMockDuration = (seconds: number) => {
    setIsRunning(false);
    setInitialTargetSeconds(seconds);
    setRemainingSeconds(seconds);
    setMode("mock_exam");
  };

  const handleAddMinutes = (mins: number) => {
    const added = mins * 60;
    if (mode === "stopwatch") {
      setElapsedSeconds((prev) => Math.max(0, prev + added));
    } else {
      setRemainingSeconds((prev) => prev + added);
      setInitialTargetSeconds((prev) => prev + added);
    }
  };

  const handleNextQuestionCount = () => {
    setQuestionsAnsweredSession((prev) => prev + 1);
    handleReset();
    playAlertSound(659.25, "sine");
  };

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hours > 0) {
      return `${hours}:${mins < 10 ? "0" : ""}${mins}:${s < 10 ? "0" : ""}${s}`;
    }
    return `${mins < 10 ? "0" : ""}${mins}:${s < 10 ? "0" : ""}${s}`;
  };

  // Calculate percentage remaining for progress bar
  const progressPercent = mode === "stopwatch"
    ? Math.min(100, (elapsedSeconds % 3600) / 36)
    : initialTargetSeconds > 0
    ? Math.max(0, Math.min(100, (remainingSeconds / initialTargetSeconds) * 100))
    : 0;

  const currentSeconds = mode === "stopwatch" ? elapsedSeconds : remainingSeconds;
  const isUrgent = mode !== "stopwatch" && isRunning && remainingSeconds <= 30 && remainingSeconds > 0;
  const isWarning = mode !== "stopwatch" && isRunning && remainingSeconds <= 60 && remainingSeconds > 30;

  // Mini Floating Pill View
  if (isMinimized) {
    return (
      <div className={`fixed bottom-24 right-5 sm:right-8 z-40 transition-all animate-fade-in ${className}`}>
        <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl shadow-xl border backdrop-blur-md ${
          isUrgent
            ? "bg-rose-500/20 border-rose-500/50 text-rose-300 animate-pulse"
            : isWarning
            ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
            : isDark
            ? "bg-slate-900/90 border-teal-500/30 text-teal-300 shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
            : "bg-white/95 border-teal-300 text-teal-900 shadow-lg"
        }`}>
          <button
            onClick={handleTogglePlay}
            className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              isRunning
                ? "bg-amber-500 text-slate-950"
                : "bg-emerald-500 text-slate-950"
            }`}
            title={isRunning ? "Pause (Ctrl+Space)" : "Resume (Ctrl+Space)"}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          <div className="flex flex-col">
            <span className="text-xs font-mono font-black tracking-wider">
              {formatTime(currentSeconds)}
            </span>
            <span className="text-[9px] font-mono text-zinc-400 capitalize">
              {mode.replace("_", " ")}
            </span>
          </div>

          <button
            onClick={() => setIsMinimized(false)}
            className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Expand Full Timer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // Full Docked Timer Component
  return (
    <div
      className={`rounded-3xl border transition-all relative overflow-hidden ${
        isUrgent
          ? "border-rose-500/60 shadow-[0_0_25px_rgba(244,63,94,0.25)] ring-1 ring-rose-500/40"
          : isWarning
          ? "border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          : isDark
          ? "bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950/90 border-white/10 shadow-lg"
          : "bg-gradient-to-br from-teal-50/70 via-white to-slate-50/90 border-slate-200 shadow-md"
      } ${className}`}
    >
      {/* Top Thin Progress Bar */}
      <div className="w-full h-1 bg-black/20 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            isUrgent
              ? "bg-rose-500"
              : isWarning
              ? "bg-amber-500"
              : "bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400"
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* LEFT COLUMN: MODE PILLS & STATUS */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 border ${
              isDark ? "bg-teal-500/15 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-900 border-teal-200"
            }`}>
              <Clock className="w-3 h-3" />
              Practice Stopwatch &amp; Exam Timer
            </span>

            {questionsAnsweredSession > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                isDark ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" : "bg-emerald-100 text-emerald-900 border-emerald-300"
              }`}>
                ✓ {questionsAnsweredSession} Qs Solved
              </span>
            )}
          </div>

          {/* Mode Selector Buttons */}
          <div className={`p-1 rounded-2xl border flex flex-wrap items-center gap-1 ${
            isDark ? "bg-black/30 border-white/5" : "bg-slate-100 border-slate-200"
          }`}>
            <button
              onClick={() => {
                setIsRunning(false);
                setMode("question_pace");
                setRemainingSeconds(initialTargetSeconds || 180);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === "question_pace"
                  ? isDark
                    ? "bg-teal-500/25 text-teal-300 border border-teal-500/40 shadow-xs"
                    : "bg-teal-600 text-white shadow-xs"
                  : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Question Pace</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setMode("stopwatch");
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === "stopwatch"
                  ? isDark
                    ? "bg-indigo-500/25 text-indigo-300 border border-indigo-500/40 shadow-xs"
                    : "bg-indigo-600 text-white shadow-xs"
                  : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Session Stopwatch</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setMode("mock_exam");
                setInitialTargetSeconds(45 * 60);
                setRemainingSeconds(45 * 60);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === "mock_exam"
                  ? isDark
                    ? "bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-xs"
                    : "bg-amber-600 text-white shadow-xs"
                  : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Mock Exam</span>
            </button>
          </div>

          {/* Quick preset chips based on mode */}
          {mode === "question_pace" && (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className={`text-[10px] font-mono ${isDark ? "text-zinc-400" : "text-slate-600"}`}>CBSE Marks:</span>
              {[
                { label: "1M (90s)", sec: 90 },
                { label: "2M (3m)", sec: 180 },
                { label: "3M (5m)", sec: 300 },
                { label: "5M (8m)", sec: 480 },
              ].map((p) => (
                <button
                  key={p.sec}
                  onClick={() => setQuestionPace(p.sec)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                    initialTargetSeconds === p.sec && mode === "question_pace"
                      ? isDark
                        ? "bg-teal-500 text-slate-950 border-teal-300"
                        : "bg-teal-600 text-white border-teal-700"
                      : isDark
                      ? "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                      : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          {mode === "mock_exam" && (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className={`text-[10px] font-mono ${isDark ? "text-zinc-400" : "text-slate-600"}`}>Exam Duration:</span>
              {[
                { label: "30 Min", sec: 30 * 60 },
                { label: "45 Min", sec: 45 * 60 },
                { label: "90 Min", sec: 90 * 60 },
                { label: "180 Min (Board)", sec: 180 * 60 },
              ].map((m) => (
                <button
                  key={m.sec}
                  onClick={() => setMockDuration(m.sec)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border transition-all cursor-pointer ${
                    initialTargetSeconds === m.sec && mode === "mock_exam"
                      ? isDark
                        ? "bg-amber-500 text-slate-950 border-amber-300"
                        : "bg-amber-600 text-white border-amber-700"
                      : isDark
                      ? "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                      : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CENTER COLUMN: DIGITAL CLOCK & SPEED CONTROLS */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-3">
            <div
              className={`font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight select-none transition-colors ${
                isUrgent
                  ? "text-rose-400 animate-pulse"
                  : isWarning
                  ? "text-amber-400"
                  : isDark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {formatTime(currentSeconds)}
            </div>

            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleAddMinutes(1)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold border transition-all cursor-pointer flex items-center gap-0.5 ${
                  isDark ? "bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10" : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-2xs"
                }`}
                title="Add 1 Minute"
              >
                <Plus className="w-2.5 h-2.5" /> 1m
              </button>
              <button
                onClick={() => handleAddMinutes(5)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold border transition-all cursor-pointer flex items-center gap-0.5 ${
                  isDark ? "bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10" : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-2xs"
                }`}
                title="Add 5 Minutes"
              >
                <Plus className="w-2.5 h-2.5" /> 5m
              </button>
            </div>
          </div>

          {remainingSeconds === 0 && mode !== "stopwatch" && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mt-1 animate-bounce">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Time&apos;s Up! Review Solution or Move to Next Q</span>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: ACTION CONTROLS */}
        <div className="flex items-center justify-end gap-2 shrink-0">
          <button
            onClick={handleTogglePlay}
            className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 shadow-md active:scale-95 ${
              isRunning
                ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20"
            }`}
            title="Start / Pause Timer (Ctrl+Space)"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Start Timer</span>
              </>
            )}
          </button>

          {mode === "question_pace" && (
            <button
              onClick={handleNextQuestionCount}
              className={`px-3 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                isDark
                  ? "bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border-teal-500/30"
                  : "bg-teal-50 hover:bg-teal-100 text-teal-900 border-teal-200"
              }`}
              title="Mark Question Done & Reset for Next"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Next Q</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className={`p-2.5 rounded-2xl border transition-all cursor-pointer text-zinc-400 hover:text-white active:scale-95 ${
              isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 shadow-2xs"
            }`}
            title="Reset Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className={`p-2.5 rounded-2xl border transition-all cursor-pointer text-zinc-400 hover:text-white active:scale-95 ${
              isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 shadow-2xs"
            }`}
            title={isMuted ? "Unmute Timer Sound" : "Mute Timer Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            className={`p-2.5 rounded-2xl border transition-all cursor-pointer text-zinc-400 hover:text-white active:scale-95 ${
              isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 shadow-2xs"
            }`}
            title="Minimize to Floating Pill"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default PracticeTimer;
