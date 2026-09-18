"use client";

import React, { useState, useMemo } from "react";
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
  Quote
} from "lucide-react";
import { areteAudio } from "@/lib/audio";

interface AreteMotivationalBannerProps {
  currentXP: number;
  userRank: number;
  totalContenders: number;
  isDark: boolean;
  onLaunchPomodoro: () => void;
  onLaunchPractice: () => void;
  onLaunchFlashcards: () => void;
}

const MOTIVATIONAL_WISDOM = [
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle (The Philosopher of Areté)",
    category: "Consistency",
    context: "Every question you solve today builds an unshakeable foundation for February 2027."
  },
  {
    quote: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius (Meditations)",
    category: "Resilience",
    context: "Struggling with a difficult theorem or history date? That exact struggle is where your intellect expands."
  },
  {
    quote: "No man is free who is not master of himself.",
    author: "Epictetus",
    category: "Discipline",
    context: "Put away distractions for 25 minutes. A single focused Pomodoro will leapfrog your leaderboard rank."
  },
  {
    quote: "Every Archon of Areté was once an Aspirant who simply refused to yield.",
    author: "ARETĒ Creed",
    category: "Momentum",
    context: "Your rank today is just your starting line. 3 questions = +30 XP. Start now."
  },
  {
    quote: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
    category: "Preparation",
    context: "CBSE Board toppers don't guess in the exam hall; they automate their recall through deliberate repetition."
  },
  {
    quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee / Epictetus",
    category: "Mental Fortitude",
    context: "Embrace the challenging questions in the Practice Vault. That is where rank is won."
  }
];

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

  const activeQuote = useMemo(() => {
    return MOTIVATIONAL_WISDOM[quoteIdx % MOTIVATIONAL_WISDOM.length];
  }, [quoteIdx]);

  const handleNextQuote = () => {
    areteAudio.play("pop");
    setQuoteIdx((prev) => (prev + 1) % MOTIVATIONAL_WISDOM.length);
  };

  const isLowXP = currentXP < 600 || userRank > 10;

  return (
    <div
      className={`p-5 sm:p-7 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#121c2e] via-[#0d1424] to-[#150e20] border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.12)]"
          : "bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-rose-50/80 border-amber-200 shadow-lg"
      }`}
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
            <div className="flex items-center justify-between gap-4 pl-7">
              <span className={`text-xs font-mono font-bold ${isDark ? "text-amber-400" : "text-amber-800"}`}>
                — {activeQuote.author}
              </span>
              <button
                type="button"
                onClick={handleNextQuote}
                className={`text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
                }`}
                title="Shuffle Quote"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Next Wisdom</span>
              </button>
            </div>
          </div>

          <p className={`text-xs leading-relaxed pl-7 ${isDark ? "text-slate-300/90" : "text-slate-700 font-medium"}`}>
            💡 <strong>Topper Strategy:</strong> {activeQuote.context}
          </p>
        </div>

        {/* RIGHT: QUICK MOMENTUM BOOSTERS (1-TAP QUESTS) */}
        <div className={`w-full lg:w-80 p-4 sm:p-5 rounded-2xl border space-y-3 shrink-0 ${
          isDark
            ? "bg-black/40 border-white/10 shadow-inner"
            : "bg-white/90 border-amber-200 shadow-md backdrop-blur-sm"
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-mono font-black uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? "text-amber-400" : "text-amber-900"
            }`}>
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Immediate XP Boosters
            </span>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
              isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-900"
            }`}>
              Rank #{userRank} of {totalContenders}
            </span>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => {
                areteAudio.play("click");
                onLaunchPractice();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer group ${
                isDark
                  ? "bg-white/[0.03] border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10"
                  : "bg-emerald-50/60 border-emerald-200 hover:bg-emerald-100/80 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-emerald-500 text-slate-950 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className={`text-xs font-bold block truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    Solve 3 Board MCQs
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block">
                    +30 XP Instant Bounty
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            <button
              onClick={() => {
                areteAudio.play("click");
                onLaunchPomodoro();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer group ${
                isDark
                  ? "bg-white/[0.03] border-white/10 hover:border-amber-500/40 hover:bg-amber-500/10"
                  : "bg-amber-50/60 border-amber-200 hover:bg-amber-100/80 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-amber-500 text-slate-950 shrink-0">
                  <Timer className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className={`text-xs font-bold block truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    15-Min Focus Sprint
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 font-bold block">
                    +30 XP Focus Mastery
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>

            <button
              onClick={() => {
                areteAudio.play("click");
                onLaunchFlashcards();
              }}
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer group ${
                isDark
                  ? "bg-white/[0.03] border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10"
                  : "bg-cyan-50/60 border-cyan-200 hover:bg-cyan-100/80 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-cyan-500 text-slate-950 shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0">
                  <span className={`text-xs font-bold block truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    5 Recall Flashcards
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">
                    +25 XP Memory Boost
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
