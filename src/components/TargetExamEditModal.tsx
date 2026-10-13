"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  X,
  Check,
  RotateCcw,
  Target,
} from "lucide-react";
import {
  getSavedTargetExam,
  saveTargetExam,
  DEFAULT_TARGET_EXAM,
  formatExamDateLabel
} from "@/lib/targetExamStorage";

interface TargetExamEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onPlaySound?: (sound: "done" | "levelup" | "click") => void;
  onTriggerConfetti?: () => void;
}

export const TargetExamEditModal: React.FC<TargetExamEditModalProps> = ({
  isOpen,
  onClose,
  isDark,
  onPlaySound,
  onTriggerConfetti,
}) => {
  const [date, setDate] = useState<string>(DEFAULT_TARGET_EXAM.date);
  const [time, setTime] = useState<string>(DEFAULT_TARGET_EXAM.time);
  const [title, setTitle] = useState<string>(DEFAULT_TARGET_EXAM.title);
  const [customLabel, setCustomLabel] = useState<string>(DEFAULT_TARGET_EXAM.label);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const saved = getSavedTargetExam();
      setDate(saved.date);
      setTime(saved.time);
      setTitle(saved.title);
      setCustomLabel(saved.label);
      setSavedSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getPreviewDays = () => {
    try {
      const targetTime = new Date(`${date}T${time}:00+05:30`).getTime();
      const diff = targetTime - Date.now();
      if (diff <= 0) return "Passed";
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return `${d}d ${h}h remaining`;
    } catch {
      return "Invalid date";
    }
  };

  const handleSelectPreset = (presetDate: string, presetTitle: string) => {
    setDate(presetDate);
    setTitle(presetTitle);
    const label = formatExamDateLabel(presetDate);
    setCustomLabel(label);
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
  };

  const handleApplyQuickOffset = (days: number, offsetTitle: string) => {
    const target = new Date();
    target.setDate(target.getDate() + days);
    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, "0");
    const dd = String(target.getDate()).padStart(2, "0");
    const formatted = `${yyyy}-${mm}-${dd}`;
    setDate(formatted);
    setTitle(offsetTitle);
    setCustomLabel(formatExamDateLabel(formatted));
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
  };

  const handleSave = () => {
    const finalLabel = customLabel.trim() || formatExamDateLabel(date);
    const finalTitle = title.trim() || "Class 10 Target Milestone";
    saveTargetExam({
      date,
      time,
      label: finalLabel,
      title: finalTitle,
    });
    setSavedSuccess(true);

    if (onPlaySound) {
      try { onPlaySound("levelup"); } catch {}
    }
    if (onTriggerConfetti) {
      try { onTriggerConfetti(); } catch {}
    }

    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleResetDefault = () => {
    setDate(DEFAULT_TARGET_EXAM.date);
    setTime(DEFAULT_TARGET_EXAM.time);
    setTitle(DEFAULT_TARGET_EXAM.title);
    setCustomLabel(DEFAULT_TARGET_EXAM.label);
    saveTargetExam(DEFAULT_TARGET_EXAM);
    if (onPlaySound) {
      try { onPlaySound("click"); } catch {}
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 relative ${
          isDark
            ? "bg-[#0c0f17] border-amber-500/30 text-white shadow-[0_20px_60px_rgba(245,158,11,0.25)]"
            : "bg-white border-amber-200 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

        <div className="p-5 sm:p-6 pb-3 flex items-start justify-between gap-3 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-400">
                Milestone Target Customizer
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black tracking-tight">
              Edit Your Target Exam Date & Time
            </h2>
            <p className={`text-xs ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
              Set any date and time you desire. Live countdowns across the entire dashboard update instantly.
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDark ? "hover:bg-white/10 text-zinc-400 hover:text-white" : "hover:bg-slate-100 text-slate-500"
            }`}
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5 max-h-[72vh] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-1.5 text-amber-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>Target Date:</span>
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                max="2030-12-31"
                onChange={(e) => {
                  setDate(e.target.value);
                  if (e.target.value) {
                    setCustomLabel(formatExamDateLabel(e.target.value));
                  }
                }}
                className={`w-full px-3.5 py-2 rounded-xl text-sm font-mono font-bold border transition-all ${
                  isDark
                    ? "bg-zinc-900/90 border-amber-500/40 text-amber-300 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40"
                    : "bg-slate-50 border-amber-300 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-300"
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold flex items-center gap-1.5 text-amber-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Session Time (IST):</span>
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl text-sm font-mono font-bold border transition-all ${
                  isDark
                    ? "bg-zinc-900/90 border-amber-500/40 text-amber-300 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40"
                    : "bg-slate-50 border-amber-300 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-300"
                }`}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold flex items-center gap-1.5 text-amber-400">
              <Target className="w-3.5 h-3.5" />
              <span>Milestone Name / Exam Title:</span>
            </label>
            <input
              type="text"
              value={title}
              placeholder="e.g. Pre-Board Phase 1 / Science Pre-Board / Mid-Term"
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                isDark
                  ? "bg-zinc-900/90 border-white/15 text-white placeholder-zinc-500 focus:border-amber-400"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500"
              }`}
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-Tap Official & Practice Presets:</span>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { label: "26 Oct 2026", date: "2026-10-26", title: "Pre-Board Phase 1 (Test Series II)", badge: "Standard" },
                { label: "15 Nov 2026", date: "2026-11-15", title: "Mid-Term Comprehensive Assessment", badge: "Mid-Term" },
                { label: "1 Dec 2026",  date: "2026-12-01", title: "Pre-Board Phase 2 Kickoff", badge: "Pre-Board 2" },
                { label: "15 Jan 2027", date: "2027-01-15", title: "Final Board Mock Sprint", badge: "Mock Sprint" },
                { label: "1 Feb 2027",  date: "2027-02-01", title: "CBSE Class 10 Board Examinations", badge: "Final Boards" },
              ].map((p) => {
                const isSelected = date === p.date;
                return (
                  <button
                    key={p.date}
                    type="button"
                    onClick={() => handleSelectPreset(p.date, p.title)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? isDark
                          ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)] ring-1 ring-amber-400/50"
                          : "bg-amber-100 border-amber-400 text-amber-950 font-bold ring-1 ring-amber-400"
                        : isDark
                        ? "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:border-amber-500/40"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-200"
                    }`}
                  >
                    <div className="text-[10px] font-mono font-semibold opacity-70">{p.badge}</div>
                    <div className="text-xs font-mono font-bold mt-0.5">{p.label}</div>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleApplyQuickOffset(7, "7-Day Rapid Sprint Target")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:border-amber-500/40"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-200"
                }`}
              >
                <div className="text-[10px] font-mono font-semibold opacity-70">Quick Test</div>
                <div className="text-xs font-mono font-bold mt-0.5">+7 Days Sprint</div>
              </button>
            </div>
          </div>

          <div className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
            isDark ? "bg-amber-950/20 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-950"
          }`}>
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono font-bold uppercase opacity-80">Active Countdown Preview:</div>
              <div className="text-xs sm:text-sm font-black font-mono">
                {title} • {formatExamDateLabel(date)} at {time} IST
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-full text-xs font-mono font-black bg-amber-500/20 border border-amber-500/40 tabular-nums shrink-0">
              {getPreviewDays()}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between gap-3 bg-black/20">
          <button
            type="button"
            onClick={handleResetDefault}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
            title="Reset to Original 26 Oct 2026 Target"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset 26 Oct</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isDark ? "bg-white/5 hover:bg-white/10 text-zinc-300" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-md active:scale-95 ${
                savedSuccess
                  ? "bg-emerald-500 text-slate-950 ring-2 ring-emerald-400"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/20"
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Save & Apply Target</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
