"use client";

import React, { useState, useEffect, useMemo, memo } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Target,
  CheckCircle2,
  Settings,
  ChevronDown,
  ChevronUp,
  Flame,
  Award,
  Globe,
  Zap,
  ArrowRight
} from "lucide-react";

interface Class10ExamCountdownProps {
  isDark: boolean;
  className?: string;
  variant?: "hero" | "compact" | "banner";
  onTargetReached?: () => void;
  collapsible?: boolean;
}

const TIMEZONE_LABEL = "Asia/Kolkata (IST • UTC+05:30)";

export interface CountdownBreakdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isPassed: boolean;
  isToday: boolean;
}

export function calculateTimeRemaining(targetIsoString: string): CountdownBreakdown {
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
  const minutes = Math.floor((diffMs % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % 1000) / 1000);
  const totalSeconds = Math.floor(diffMs / 1000);

  return {
    days,
    hours,
    minutes,
    seconds: Math.floor((diffMs / 1000) % 60),
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

  // Dual Targets: "oct_milestone" (Oct 26, 2026) vs "feb_boards" (Feb 1, 2027)
  const [activeTarget, setActiveTarget] = useState<"oct_milestone" | "feb_boards">("oct_milestone");

  // Target ISO strings anchored to Asia/Kolkata (+05:30)
  const octIsoString = useMemo(() => {
    return `2026-10-26T${selectedExamTime}:00+05:30`;
  }, [selectedExamTime]);

  const febIsoString = useMemo(() => {
    return `2027-02-01T09:00:00+05:30`;
  }, []);

  const [octCountdown, setOctCountdown] = useState<CountdownBreakdown>(() => calculateTimeRemaining(octIsoString));
  const [febCountdown, setFebCountdown] = useState<CountdownBreakdown>(() => calculateTimeRemaining(febIsoString));

  useEffect(() => {
    const update = () => {
      const oct = calculateTimeRemaining(octIsoString);
      const feb = calculateTimeRemaining(febIsoString);
      setOctCountdown(oct);
      setFebCountdown(feb);

      // Smart Thinking Power & Auto-Termination:
      // If October 26 target has passed, automatically roll over focus to Feb 1, 2027 Boards!
      if (oct.isPassed && activeTarget === "oct_milestone") {
        setActiveTarget("feb_boards");
        if (onTargetReached) onTargetReached();
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [octIsoString, febIsoString, activeTarget, onTargetReached]);

  const padNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const activeCountdown = activeTarget === "oct_milestone" ? octCountdown : febCountdown;
  const activeDateTitle = activeTarget === "oct_milestone" ? "26 October 2026" : "1 February 2027";
  const activeMilestoneLabel = activeTarget === "oct_milestone" 
    ? "Pre-Board Phase 1 • Test Series II" 
    : "Official CBSE Class 10 Board Exams";

  // Preparedness completion estimate relative to start of Class 10 academic session (April 1, 2026)
  const progressPercent = useMemo(() => {
    const sessionStart = new Date("2026-04-01T00:00:00+05:30").getTime();
    const targetMs = new Date(activeTarget === "oct_milestone" ? octIsoString : febIsoString).getTime();
    const totalDuration = targetMs - sessionStart;
    const elapsed = Date.now() - sessionStart;
    if (elapsed <= 0) return 0;
    if (elapsed >= totalDuration) return 100;
    return Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));
  }, [activeTarget, octIsoString, febIsoString]);

  // COMPACT CAPSULE VARIANT (for top navbars / headers)
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-1.5 sm:gap-2 font-mono text-xs tabular-nums select-none ${className}`}>
        <button
          type="button"
          onClick={() => setActiveTarget(activeTarget === "oct_milestone" ? "feb_boards" : "oct_milestone")}
          className={`px-2.5 py-1 rounded-full border flex items-center gap-1.5 font-bold shadow-xs transition-all cursor-pointer active:scale-95 ${
            isDark
              ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
              : "bg-amber-100 border-amber-300 text-amber-950 shadow-2xs"
          }`}
          title="Click to toggle between Oct 26 Milestone and Feb 1 Boards"
        >
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
          <span className="font-extrabold text-[11px] sm:text-xs">
            {activeTarget === "oct_milestone" ? "26 Oct:" : "1 Feb Boards:"}
          </span>
          <span>
            {activeCountdown.days}d {padNumber(activeCountdown.hours)}h {padNumber(activeCountdown.minutes)}m {padNumber(activeCountdown.seconds)}s
          </span>
        </button>
      </div>
    );
  }

  // COLLAPSED BAR VARIANT
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
            {activeDateTitle} ({activeMilestoneLabel}):
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold tabular-nums">
            {activeCountdown.days}d {padNumber(activeCountdown.hours)}h {padNumber(activeCountdown.minutes)}m {padNumber(activeCountdown.seconds)}s
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

  // HERO COUNTDOWN VIEW — DUAL TARGETS WITH SMART THINKING & REAL-TIME PROGRESS
  return (
    <section
      aria-label="Class 10 Dual Exam Countdown"
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

        {/* TOP ROW: DUAL-TIMER TOGGLE PILLS, TIMEZONE & CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-5 border-amber-500/20">
          
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {/* TARGET 1: 26 OCT 2026 MILESTONE */}
              <button
                type="button"
                onClick={() => setActiveTarget("oct_milestone")}
                className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                  activeTarget === "oct_milestone"
                    ? isDark
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "bg-amber-500 text-slate-950 border-amber-500 font-extrabold shadow-sm"
                    : isDark
                    ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>⚡ 26 Oct 2026 (Pre-Board Phase 1)</span>
                {octCountdown.isPassed && <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-300">Conquered</span>}
              </button>

              {/* TARGET 2: 1 FEB 2027 BOARDS */}
              <button
                type="button"
                onClick={() => setActiveTarget("feb_boards")}
                className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                  activeTarget === "feb_boards"
                    ? isDark
                      ? "bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-cyan-600 text-white border-cyan-700 font-extrabold shadow-sm"
                    : isDark
                    ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>🎯 1 Feb 2027 (CBSE Boards)</span>
              </button>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border inline-flex items-center gap-1 ${
                isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-slate-100 border-slate-300 text-slate-700"
              }`}>
                <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{TIMEZONE_LABEL}</span>
              </span>
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                {activeTarget === "oct_milestone" ? "Time Left to 26 Oct Milestone" : "Time Left to CBSE Board Exams"}
              </h2>
              <span className={`text-xs sm:text-sm font-semibold font-mono ${
                activeTarget === "oct_milestone" ? "text-amber-400" : "text-cyan-400"
              }`}>
                ({activeMilestoneLabel})
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed flex items-center gap-1.5 flex-wrap ${isDark ? "text-zinc-300" : "text-slate-700"}`}>
              <span>Active Target:</span>
              <strong className="text-amber-500 dark:text-amber-300 font-black underline decoration-amber-500/50 tracking-wide text-xs sm:text-sm">
                {activeDateTitle}
              </strong>
              <span>at</span>
              <strong className="font-mono text-xs sm:text-sm">
                {activeTarget === "oct_milestone" ? `${selectedExamTime} AM IST` : "09:00 AM IST"}
              </strong>
              <span className="text-[11px] opacity-75">
                {activeTarget === "oct_milestone" ? "(Test Series II Phase)" : "(Official Annual Session)"}
              </span>
            </p>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
            {activeTarget === "oct_milestone" && (
              <button
                onClick={() => setShowConfig(!showConfig)}
                className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-200"
                    : "bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-2xs"
                }`}
                title="Change Examination Session Time"
              >
                <Settings className="w-3.5 h-3.5 text-amber-400" />
                <span>Time Config</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${showConfig ? "rotate-180" : ""}`} />
              </button>
            )}

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

        {/* TIME CONFIGURATION DRAWER */}
        {showConfig && activeTarget === "oct_milestone" && (
          <div className={`p-3.5 sm:p-4 rounded-2xl border animate-fade-in ${
            isDark ? "bg-black/60 border-amber-500/30 text-zinc-200" : "bg-white/95 border-amber-200 text-slate-800 shadow-sm"
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <span className="text-xs font-bold block">Configurable Examination Session Start Time:</span>
                <span className="text-[11px] opacity-75">
                  Select your specific batch session time if different:
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

        {/* MAIN 4-SQUIRCLE COUNTDOWN TILES */}
        {activeCountdown.isPassed ? (
          <div className={`p-6 sm:p-8 rounded-3xl border text-center animate-fade-in ${
            isDark ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-950"
          }`}>
            <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce mx-auto mb-2" />
            <h3 className="text-xl sm:text-2xl font-black">
              {activeDateTitle} Milestone Has Commenced!
            </h3>
            <p className="text-xs sm:text-sm max-w-md mx-auto mt-1 opacity-90">
              Target date reached with total focus! Transitioning into active examination mode.
            </p>
            {activeTarget === "oct_milestone" && (
              <button
                type="button"
                onClick={() => setActiveTarget("feb_boards")}
                className="mt-3 px-4 py-2 rounded-xl text-xs font-black bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Switch to 1 Feb 2027 CBSE Boards Countdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-5">
            {/* 4-BLOCK GRID: 4 COLUMNS ON ALL SCREENS */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 font-mono text-center">
              
              {/* DAYS TILE */}
              <div className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border transition-all group flex flex-col items-center justify-center ${
                isDark
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.4)]"
                  : "bg-gradient-to-b from-amber-100/95 to-amber-50/70 border-amber-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(245,158,11,0.12)]"
              }`}>
                <div className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm tabular-nums leading-none ${
                  activeTarget === "oct_milestone" ? "text-amber-500 dark:text-amber-400" : "text-cyan-500 dark:text-cyan-400"
                }`}>
                  {activeCountdown.days}
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
                <div className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm tabular-nums leading-none ${
                  activeTarget === "oct_milestone" ? "text-amber-500 dark:text-amber-400" : "text-cyan-500 dark:text-cyan-400"
                }`}>
                  {padNumber(activeCountdown.hours)}
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
                <div className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm tabular-nums leading-none ${
                  activeTarget === "oct_milestone" ? "text-amber-500 dark:text-amber-400" : "text-cyan-500 dark:text-cyan-400"
                }`}>
                  {padNumber(activeCountdown.minutes)}
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
                  {padNumber(activeCountdown.seconds)}
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
                  {activeMilestoneLabel} Progress: <strong className="font-mono text-amber-500">{progressPercent}%</strong>
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
