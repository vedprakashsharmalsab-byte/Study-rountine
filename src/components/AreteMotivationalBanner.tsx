"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Sparkles,
  Flame,
  Target,
  ArrowRight,
  Zap,
  Award,
  RefreshCw,
  BookOpen,
  Timer,
  CheckCircle2,
  Quote,
  Compass
} from "lucide-react";
import { areteAudio } from "@/lib/audio";
import { ARETE_WISDOM_VAULT, WisdomQuote } from "@/data/areteQuotesVault";

interface AreteMotivationalBannerProps {
  currentXP: number;
  userRank: number;
  totalContenders: number;
  isDark: boolean;
  onLaunchPomodoro: () => void;
  onLaunchPractice: () => void;
  onLaunchFlashcards: () => void;
}

export default function AreteMotivationalBanner({
  currentXP,
  userRank,
  totalContenders,
  isDark,
  onLaunchPomodoro,
  onLaunchPractice,
  onLaunchFlashcards
}: AreteMotivationalBannerProps) {
  const [quoteIdx, setQuoteIdx] = useState(0);

  // Advance to a fresh quote on every visit/mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = parseInt(localStorage.getItem("arete_last_quote_idx") || "-1", 10);
      const nextIdx = (saved + 1) % ARETE_WISDOM_VAULT.length;
      localStorage.setItem("arete_last_quote_idx", nextIdx.toString());
      setQuoteIdx(nextIdx);
    }
  }, []);

  const activeQuote: WisdomQuote = useMemo(() => {
    return ARETE_WISDOM_VAULT[quoteIdx % ARETE_WISDOM_VAULT.length] || ARETE_WISDOM_VAULT[0];
  }, [quoteIdx]);

  const handleNextQuote = () => {
    areteAudio.play("pop");
    const nextIdx = Math.floor(Math.random() * ARETE_WISDOM_VAULT.length);
    setQuoteIdx(nextIdx);
    if (typeof window !== "undefined") {
      localStorage.setItem("arete_last_quote_idx", nextIdx.toString());
    }
  };

  const isLowXP = currentXP < 600 || userRank > 10;

  return (
    <div
      className={`p-5 sm:p-7 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#121c2e] via-[#0d1424] to-[#150e20] border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.12)]"
          : "bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-rose-50/80 border-amber-200 shadow-lg"
      }`}
      style={{ transform: "translateZ(0)" }}
    >
      {/* BACKGROUND RADIANT ACCENT */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* LEFT: QUOTE & MOTIVATIONAL HOOK */}
        <div className="space-y-3.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Areté Mindset &amp; Momentum Catalyst
            </span>
            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              isDark ? "bg-white/5 border-white/10 text-amber-300" : "bg-white border-amber-300 text-amber-900"
            }`}>
              {activeQuote.category}
            </span>
            <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              isDark ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" : "bg-cyan-50 border-cyan-200 text-cyan-800"
            }`}>
              Wisdom #{quoteIdx + 1} of {ARETE_WISDOM_VAULT.length}
            </span>
            {isLowXP && (
              <span className={`text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                isDark ? "bg-rose-500/15 border-rose-500/30 text-rose-300" : "bg-rose-100 border-rose-300 text-rose-900"
              }`}>
                <Flame className="w-3 h-3 text-rose-400" /> Comeback Protocol Active
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2.5">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-1 opacity-80" />
              <p className={`text-base sm:text-lg font-black tracking-tight leading-snug italic ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                &ldquo;{activeQuote.quote}&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pl-7">
              <span className={`text-xs font-mono font-bold ${isDark ? "text-amber-400" : "text-amber-800"}`}>
                — {activeQuote.author} <span className="opacity-75 font-normal">({activeQuote.source})</span>
              </span>
              <button
                type="button"
                onClick={handleNextQuote}
                className={`text-[11px] font-mono font-bold flex items-center gap-1.5 px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                }`}
                title="Shuffle next insight from 800+ quotes"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Next Insight (800+ Vault)</span>
              </button>
            </div>
          </div>

          <p className={`text-xs pl-7 border-l-2 ${
            isDark ? "border-amber-500/40 text-slate-300" : "border-amber-500 text-slate-700 font-medium"
          }`}>
            💡 <strong>Board Strategist Action:</strong> {activeQuote.context}
          </p>
        </div>

        {/* RIGHT: RAPID XP BOOSTER QUESTS (1-CLICK DIRECT ACCELERATORS) */}
        <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 shrink-0 w-full lg:w-80 ${
          isDark ? "bg-black/40 border-white/10" : "bg-white border-amber-200 shadow-sm"
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              1-Click XP Boosters
            </span>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
              isDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-700"
            }`}>
              Quick Rank Climb
            </span>
          </div>

          <p className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Rank is won through execution. Choose a quest to earn XP immediately:
          </p>

          <div className="space-y-2">
            {/* QUEST 1: SOLVE 3 MCQs */}
            <button
              type="button"
              onClick={() => {
                areteAudio.play("click");
                onLaunchPractice();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer group active:scale-98 ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-amber-500/40 text-white"
                  : "bg-slate-50 hover:bg-white border-slate-200 hover:border-amber-400 text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold block truncate">Solve 3 Board MCQs</span>
                  <span className={`text-[10px] block ${isDark ? "text-slate-400" : "text-slate-500"}`}>Questions Vault</span>
                </div>
              </div>
              <span className="text-xs font-mono font-black text-amber-400 shrink-0">+30 XP</span>
            </button>

            {/* QUEST 2: 15-MIN POMODORO */}
            <button
              type="button"
              onClick={() => {
                areteAudio.play("click");
                onLaunchPomodoro();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer group active:scale-98 ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-emerald-500/40 text-white"
                  : "bg-slate-50 hover:bg-white border-slate-200 hover:border-emerald-400 text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Timer className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold block truncate">25-Min Focus Sprint</span>
                  <span className={`text-[10px] block ${isDark ? "text-slate-400" : "text-slate-500"}`}>Pomodoro Engine</span>
                </div>
              </div>
              <span className="text-xs font-mono font-black text-emerald-400 shrink-0">+50 XP</span>
            </button>

            {/* QUEST 3: FLASHCARDS */}
            <button
              type="button"
              onClick={() => {
                areteAudio.play("click");
                onLaunchFlashcards();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer group active:scale-98 ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-cyan-500/40 text-white"
                  : "bg-slate-50 hover:bg-white border-slate-200 hover:border-cyan-400 text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold block truncate">5 Active Flashcards</span>
                  <span className={`text-[10px] block ${isDark ? "text-slate-400" : "text-slate-500"}`}>Recall Sprint</span>
                </div>
              </div>
              <span className="text-xs font-mono font-black text-cyan-400 shrink-0">+25 XP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
