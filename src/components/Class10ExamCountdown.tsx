"use client";

import React, { useState, useEffect, useMemo, memo } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Target,
  AlertCircle,
  CheckCircle2,
  Settings,
  ChevronDown,
  ChevronUp,
  Flame,
  Award,
  Zap,
  Globe
} from "lucide-react";

interface Class10ExamCountdownProps {
  isDark: boolean;
  className?: string;
  variant?: "hero" | "compact" | "banner";
  onTargetReached?: () => void;
  collapsible?: boolean;
}

// Default target: 26 October 2026 at 10:30 AM IST (Official CBSE Board Exam Session)
const DEFAULT_TARGET_DATE_STR = "26 October 2026";
const TIMEZONE_LABEL = "Asia/Kolkata (IST • UTC+05:30)";

interface CountdownBreakdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isPassed: boolean;
  isToday: boolean;
}

function calculateTimeRemaining(targetIsoString: string): CountdownBreakdown {
  const targetTimeMs = new Date(targetIsoString).getTime();
  const nowMs = Date.now();
  const diffMs = targetTimeMs - nowMs;

  if (diffMs <= 0 || isNaN(diffMs)) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isPassed: true,
      isToday: diffMs > -86400000
    };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  const totalSeconds = Math.floor(diffMs / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds,
    isPassed: false,
    isToday: days === 0
  };
}

export const Class10ExamCountdown = memo(function Class10ExamCountdown({
  isDark,
  className = "",
  variant = "hero",
  onTargetReached,
  collapsible = true
}: Class10ExamCountdownProps) {
  // Configurable Exam Start Time: 10:30 AM IST (default), 10:00 AM, 09:00 AM
  const [selectedExamTime, setSelectedExamTime] = useState<string>("10:30");
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Target ISO anchored to Asia/Kolkata (+05:30)
  const targetIsoString = useMemo(() => {
    return `2026-10-26T${selectedExamTime}:00+05:30`;
  }, [selectedExamTime]);

  const [countdown, setCountdown] = useState<CountdownBreakdown>(() => {
    return calculateTimeRemaining(targetIsoString);
  });

  useEffect(() => {
    setCountdown(calculateTimeRemaining(targetIsoString));

    const interval = setInterval(() => {
      const updated = calculateTimeRemaining(targetIsoString);
      setCountdown(updated);
      if (updated.isPassed && onTargetReached) {
        onTargetReached();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetIsoString, onTargetReached]);

  const padNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  // Preparedness completion estimate relative to start of Class 10 academic session (April 1, 2026)
  const progressPercent = useMemo(() => {
    const sessionStart = new Date("2026-04-01T00:00:00+05:30").getTime();
    const examTarget = new Date(targetIsoString).getTime();
    const totalDuration = examTarget - sessionStart;
    const elapsed = Date.now() - sessionStart;
    if (elapsed <= 0) return 0;
    if (elapsed >= totalDuration) return 100;
    return Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));
  }, [targetIsoString]);

  // COMPACT CAPSULE VARIANT (for top navbars / headers)
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1.5 sm:gap-2 font-mono text-xs tabular-nums select-none ${className}`}>
        <span className={`px-2.5 py-1 rounded-full border flex items-center gap-1.5 font-bold shadow-xs ${
          isDark
            ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
            : "bg-amber-100 border-amber-300 text-amber-950 shadow-2xs"
        }`}>
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
          <span className="font-extrabold text-[11px] sm:text-xs">26 Oct Exam:</span>
          <span>{countdown.days}d {padNumber(countdown.hours)}h {padNumber(countdown.minutes)}m {padNumber(countdown.seconds)}s</span>
        </span>
      </div>
    );
  }

  // COLLAPSED BAR VARIANT (When user chooses to minimize the main hero banner)
  if (isCollapsed) {
    return (
      <div className={`w-full p-2.5 sm:p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 shadow-md ${
        isDark
          ? "bg-[#140e04]/95 border-amber-500/35 text-amber-300"
          : "bg-amber-50/95 border-amber-300 text-amber-950"
      } ${className}`}>
        <div className="flex items-center gap-2 min-w-0">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
          </span>
          <span className="text-xs sm:text-sm font-black truncate">
            Class 10 Exam Countdown (26 Oct 2026):
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold tabular-nums">
            {countdown.days}d {padNumber(countdown.hours)}h {padNumber(countdown.minutes)}m {padNumber(countdown.seconds)}s
          </span>
        </div>
        <button
          onClick={() => setIsCollapsed(false)}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
            isDark ? "bg-white/10 hover:bg-white/15 border-white/10 text-white" : "bg-white hover:bg-amber-100 border-amber-300 text-slate-800"
          }`}
          title="Expand Full Exam Countdown Cockpit"
        >
          <span>Expand</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    );
  }

  // HERO COUNTDOWN VIEW — DUAL 9:16 (SMARTPHONE) & 16:9 (LAPTOP) PERFECTION
  return (
    <section
      aria-label="Class 10 Exam Countdown"
      className={`w-full rounded-3xl border transition-all duration-300 relative overflow-hidden shadow-2xl ${
        isDark
          ? "bg-gradient-to-br from-[#191102] via-[#0f0b03] to-[#07070a] border-amber-500/35 shadow-[0_16px_50px_rgba(245,158,11,0.18)]"
          : "bg-gradient-to-br from-amber-50/98 via-white to-orange-50/90 border-amber-300 shadow-[0_12px_40px_rgba(245,158,11,0.14)]"
      } ${className}`}
    >
      {/* Visual Ambient Glow Highlights */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="p-4 sm:p-6 md:p-8 relative z-10 space-y-4 sm:space-y-6">

        {/* TOP ROW: BADGES, MAIN TITLES, TIMEZONE & CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-5 border-amber-500/20">
          
          {/* Left: High-Contrast Heading & Target Date */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider border shadow-xs inline-flex items-center gap-1.5 leading-none ${
                isDark
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                  : "bg-amber-200/90 text-amber-950 border-amber-400 font-extrabold"
              }`}>
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse shrink-0" />
                <span>OFFICIAL CLASS 10 EXAM COUNTDOWN</span>
              </span>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border inline-flex items-center gap-1 ${
                isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-slate-100 border-slate-300 text-slate-700"
              }`}>
                <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{TIMEZONE_LABEL}</span>
              </span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Time Left Until Exams
              </h2>
              <span className={`text-xs sm:text-sm font-semibold font-mono ${isDark ? "text-amber-400/90" : "text-amber-700"}`}>
                (Class 10 Exam Countdown)
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed flex items-center gap-1.5 flex-wrap ${isDark ? "text-zinc-300" : "text-slate-700"}`}>
              <span>Target Examination Date:</span>
              <strong className="text-amber-500 dark:text-amber-300 font-black underline decoration-amber-500/50 tracking-wide text-xs sm:text-sm">
                {DEFAULT_TARGET_DATE_STR}
              </strong>
              <span>at</span>
              <strong className="font-mono text-xs sm:text-sm">{selectedExamTime} AM IST</strong>
              <span className="text-[11px] opacity-75">(Standard CBSE Session Start)</span>
            </p>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-200"
                  : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-2xs"
              }`}
              title="Change Examination Time"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>Exam Time</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${showConfig ? "rotate-180" : ""}`} />
            </button>

            {collapsible && (
              <button
                onClick={() => setIsCollapsed(true)}
                className={`p-1.5 sm:p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 opacity-75 hover:opacity-100 ${
                  isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-white border-slate-300 text-slate-700"
                }`}
                title="Minimize Banner"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* TIME CONFIGURATION DRAWER (SMOOTH POPDOWN) */}
        {showConfig && (
          <div className={`p-3.5 sm:p-4 rounded-2xl border animate-fade-in ${
            isDark ? "bg-black/60 border-amber-500/30 text-zinc-200" : "bg-white/95 border-amber-200 text-slate-800 shadow-sm"
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <span className="text-xs font-bold block">Configurable Examination Session Start Time:</span>
                <span className="text-[11px] opacity-75">
                  CBSE exams traditionally commence at 10:30 AM IST. Select your specific batch time if different:
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { time: "09:00", label: "09:00 AM" },
                  { time: "10:00", label: "10:00 AM" },
                  { time: "10:30", label: "10:30 AM (CBSE Default)" }
                ].map((opt) => (
                  <button
                    key={opt.time}
                    onClick={() => {
                      setSelectedExamTime(opt.time);
                      setShowConfig(false);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedExamTime === opt.time
                        ? isDark
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                          : "bg-amber-600 text-white border-amber-700 font-black shadow-xs"
                        : isDark
                        ? "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                        : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MAIN 4-SQUIRCLE COUNTDOWN TILES (OPTIMIZED FOR 9:16 AND 16:9) */}
        {countdown.isPassed ? (
          <div className={`p-6 sm:p-8 rounded-3xl border text-center animate-fade-in ${
            isDark ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-950"
          }`}>
            <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-black">
              Class 10 Board Examinations Have Commenced!
            </h3>
            <p className="text-xs sm:text-sm max-w-md mx-auto mt-1 opacity-90">
              The target timestamp of 26 October 2026 has been reached. Step into the examination hall with total clarity, confidence, and calm!
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-5">
            {/* 4-BLOCK GRID: 4 COLUMNS ON ALL SCREENS (9:16 MOBILE & 16:9 DESKTOP) */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 font-mono text-center">
              
              {/* DAYS TILE */}
              <div className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border transition-all group flex flex-col items-center justify-center ${
                isDark
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.4)]"
                  : "bg-gradient-to-b from-amber-100/95 to-amber-50/70 border-amber-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(245,158,11,0.12)]"
              }`}>
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-amber-500 dark:text-amber-400 drop-shadow-sm tabular-nums leading-none">
                  {countdown.days}
                </div>
                <div className={`text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mt-1 sm:mt-1.5 ${
                  isDark ? "text-zinc-300 group-hover:text-amber-300" : "text-amber-950"
                }`}>
                  Days
                </div>
                <div className="hidden sm:block text-[9px] md:text-[10px] opacity-60 mt-0.5">
                  Full Days
                </div>
              </div>

              {/* HOURS TILE */}
              <div className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border transition-all group flex flex-col items-center justify-center ${
                isDark
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.4)]"
                  : "bg-gradient-to-b from-amber-100/95 to-amber-50/70 border-amber-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(245,158,11,0.12)]"
              }`}>
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-amber-500 dark:text-amber-400 drop-shadow-sm tabular-nums leading-none">
                  {padNumber(countdown.hours)}
                </div>
                <div className={`text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mt-1 sm:mt-1.5 ${
                  isDark ? "text-zinc-300 group-hover:text-amber-300" : "text-amber-950"
                }`}>
                  Hours
                </div>
                <div className="hidden sm:block text-[9px] md:text-[10px] opacity-60 mt-0.5">
                  Hours Left
                </div>
              </div>

              {/* MINUTES TILE */}
              <div className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border transition-all group flex flex-col items-center justify-center ${
                isDark
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.4)]"
                  : "bg-gradient-to-b from-amber-100/95 to-amber-50/70 border-amber-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(245,158,11,0.12)]"
              }`}>
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-amber-500 dark:text-amber-400 drop-shadow-sm tabular-nums leading-none">
                  {padNumber(countdown.minutes)}
                </div>
                <div className={`text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mt-1 sm:mt-1.5 ${
                  isDark ? "text-zinc-300 group-hover:text-amber-300" : "text-amber-950"
                }`}>
                  Mins
                </div>
                <div className="hidden sm:block text-[9px] md:text-[10px] opacity-60 mt-0.5">
                  Minutes
                </div>
              </div>

              {/* SECONDS TILE (LIVE PULSE EFFECT) */}
              <div className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border transition-all relative overflow-hidden group flex flex-col items-center justify-center ${
                isDark
                  ? "bg-gradient-to-b from-amber-500/15 via-white/[0.04] to-transparent border-amber-500/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_28px_rgba(245,158,11,0.25)]"
                  : "bg-gradient-to-b from-amber-200/95 to-amber-100/70 border-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_20px_rgba(245,158,11,0.2)]"
              }`}>
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-orange-500 dark:text-orange-400 drop-shadow-md tabular-nums leading-none">
                  {padNumber(countdown.seconds)}
                </div>
                <div className={`text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mt-1 sm:mt-1.5 flex items-center justify-center gap-1 ${
                  isDark ? "text-orange-400" : "text-orange-950"
                }`}>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-ping inline-block shrink-0" />
                  <span>Secs</span>
                </div>
                <div className="hidden sm:block text-[9px] md:text-[10px] opacity-60 mt-0.5">
                  Live Tick
                </div>
              </div>
            </div>

            {/* PROGRESS BAR & PREPARATION BENCHMARK (9:16 AND 16:9 COMPLIANT) */}
            <div className={`p-3 sm:p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 ${
              isDark ? "bg-black/35 border-white/5" : "bg-white/80 border-slate-200 shadow-2xs"
            }`}>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-semibold">
                  Class 10 Prep Progress: <strong className="font-mono text-amber-500">{progressPercent}%</strong>
                </span>
              </div>

              {/* Responsive Progress Track */}
              <div className="w-full sm:w-64 h-2.5 rounded-full bg-black/20 overflow-hidden border border-white/5 shrink-0">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className={`text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 ${
                isDark ? "text-amber-400" : "text-amber-800"
              }`}>
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Target: 100/100 Board Mastery</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default Class10ExamCountdown;
