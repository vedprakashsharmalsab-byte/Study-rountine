"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, User, X, Check } from "lucide-react";

interface CadetNamePromptModalProps {
  isDark: boolean;
  currentName: string;
  onNameSaved: (newName: string) => void;
  playSound?: (sound: any) => void;
}

export const CADET_NAME_DISMISSED_KEY = "cbse_cadet_name_prompt_dismissed";
export const STUDENT_NAME_KEY = "cbse_student_name";

export default function CadetNamePromptModal({
  isDark,
  currentName,
  onNameSaved,
  playSound
}: CadetNamePromptModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    // Check if user already customized their name or dismissed the prompt
    try {
      const dismissed = localStorage.getItem(CADET_NAME_DISMISSED_KEY);
      const savedName = localStorage.getItem(STUDENT_NAME_KEY);
      
      // If already dismissed or user has already customized their name, don't show
      if (dismissed === "true" || (savedName && savedName.trim().length > 0 && savedName !== "Cadet" && savedName !== "CBSE Scholar")) {
        return;
      }

      // Delay prompt: appear gently after 45 seconds of usage (NOT right at the start!)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 45000);

      // Also listen for tutorial completion event to gently offer personalization
      const handleTutorialDone = () => {
        setTimeout(() => {
          const isStillDefault = !localStorage.getItem(STUDENT_NAME_KEY);
          const isStillNotDismissed = localStorage.getItem(CADET_NAME_DISMISSED_KEY) !== "true";
          if (isStillDefault && isStillNotDismissed) {
            setIsVisible(true);
          }
        }, 1500);
      };

      window.addEventListener("arete:tutorial-finished", handleTutorialDone);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("arete:tutorial-finished", handleTutorialDone);
      };
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(CADET_NAME_DISMISSED_KEY, "true");
    } catch {}
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) {
      handleDismiss();
      return;
    }

    try {
      localStorage.setItem(STUDENT_NAME_KEY, trimmed);
      localStorage.setItem(CADET_NAME_DISMISSED_KEY, "true");
    } catch {}

    onNameSaved(trimmed);
    setIsVisible(false);

    if (playSound) {
      try { playSound("achievement"); } catch {}
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cadet-prompt-title"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] animate-slide-up"
    >
      <div
        className={`rounded-3xl border shadow-2xl p-4 sm:p-5 transition-all duration-300 relative overflow-hidden ${
          isDark
            ? "bg-[#0c101d]/95 backdrop-blur-2xl border-amber-500/40 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] ring-1 ring-amber-400/20"
            : "bg-white/95 backdrop-blur-2xl border-amber-300 text-slate-900 shadow-xl ring-1 ring-amber-400/30"
        }`}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        {/* Header with Icon and Skip (X) */}
        <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-xl ${
              isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-900"
            }`}>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <span id="cadet-prompt-title" className={`text-xs font-mono font-black uppercase tracking-wider ${
              isDark ? "text-amber-400" : "text-amber-700"
            }`}>
              Cadet Personalization
            </span>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className={`p-1 rounded-lg transition-colors cursor-pointer ${
              isDark ? "hover:bg-white/10 text-zinc-400 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            }`}
            title="Skip for now"
            aria-label="Skip for now"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Friendly explanation */}
        <p className={`text-xs leading-relaxed mb-3 relative z-10 ${
          isDark ? "text-zinc-300" : "text-slate-600"
        }`}>
          Welcome aboard! Enter your name so we can personalize your Command Cockpit greetings, streak records, and syllabus achievements:
        </p>

        {/* Input Form */}
        <form onSubmit={handleSave} className="space-y-2.5 relative z-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
              <User className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              autoFocus
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Your name (e.g., Sarthak)"
              maxLength={25}
              className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-bold border transition-all outline-none ${
                isDark
                  ? "bg-black/40 border-white/15 text-white placeholder-zinc-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              }`}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDismiss}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isDark
                  ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Maybe Later
            </button>

            <button
              type="submit"
              disabled={!inputName.trim()}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${
                inputName.trim()
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 cursor-pointer shadow-amber-500/20"
                  : "bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed opacity-50"
              }`}
            >
              <span>Save Name</span>
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
