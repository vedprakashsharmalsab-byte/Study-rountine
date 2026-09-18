"use client";

import React, { useState } from "react";
import { Sparkles, Target, Flame, Award, ArrowRight, Check, Compass, BookOpen } from "lucide-react";
import { appStorage, STORAGE_KEYS } from "@/lib/storage";

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: (cadetName: string) => void;
  isDark: boolean;
}

export default function OnboardingModal({ isOpen, onComplete, isDark }: OnboardingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");

  if (!isOpen) return null;

  const handleFinish = () => {
    const finalName = name.trim() || "CBSE Cadet";
    appStorage.setItem(STORAGE_KEYS.ONBOARDING_DONE, "true");
    appStorage.setItem(STORAGE_KEYS.STUDENT_NAME, finalName);
    onComplete(finalName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-md rounded-3xl border shadow-2xl p-6 sm:p-8 space-y-6 ${
          isDark ? "bg-[#0c101d] border-white/15 text-white" : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        {/* PROGRESS INDICATOR */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s === step 
                    ? "w-8 bg-amber-400" 
                    : s < step 
                    ? "w-4 bg-amber-400/50" 
                    : "w-4 bg-white/15"
                }`} 
              />
            ))}
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
            Step {step} of 3
          </span>
        </div>

        {/* STEP 1: CADET IDENTIFICATION */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Welcome to Study Routine</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Your personal CBSE Class 10 (2026–2027) NCERT mastery engine. What should we call you?
              </p>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-300 font-medium">Your Name / Call-Sign:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarthak, Aarav..."
                className={`w-full px-4 py-3 rounded-2xl border text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                  isDark ? "bg-white/5 border-white/15 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") setStep(2);
                }}
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 active:scale-95 transition-all"
            >
              <span>Next: Target Milestones</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: TARGET TIMELINE */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Academic Board Target</h2>
              <p className="text-xs text-zinc-400 mt-1">
                All countdowns and study blocks are synced to official CBSE milestones.
              </p>
            </div>
            <div className={`p-4 rounded-2xl border space-y-2 text-xs font-mono ${
              isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Class 10 Board Exams:</span>
                <span className="font-bold text-amber-400">February 1, 2027</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Test Series 1 (Mid-Term):</span>
                <span className="font-bold text-emerald-400">Sept 14 – 26, 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">NCERT Syllabus Chapters:</span>
                <span className="font-bold text-cyan-400">27 Chapters (6 Subjects)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-2xl border border-white/15 text-xs font-bold hover:bg-white/5 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
              >
                <span>Next: 60-Second Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MECHANICS TOUR */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">How You Level Up</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Zero fake metrics. Every reward maps strictly to authentic studying completed.
              </p>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block">XP & Levels 1–100:</strong>
                  <span className="text-zinc-400 text-[11px]">Earn XP by reading NCERT topics, mastering flashcards, and writing proofs.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Flame className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-orange-300 block">Daily Streak & Grace Window:</strong>
                  <span className="text-zinc-400 text-[11px]">Study every day. Automatic Streak Freeze protects your hard work if life gets busy.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-300 block">Spaced Repetition (SM-2):</strong>
                  <span className="text-zinc-400 text-[11px]">Flashcards schedule themselves based on how easily you recall them.</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Launch Dashboard (+50 XP Bonus)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
