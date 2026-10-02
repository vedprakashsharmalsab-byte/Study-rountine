"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Moon, Sun, FlaskConical, Sparkles, Home, LayoutGrid } from "lucide-react";
import ChemistryBasicsMasterView from "@/components/ChemistryBasicsMasterView";
import AreteLogo from "@/components/AreteLogo";

export default function ChemistryBasicsPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("arete_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("arete_theme", nextTheme);
  };

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070b14] text-white">
        <div className="animate-spin w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-150 relative ${
      isDark ? "apple-mesh-bg-dark text-slate-100" : "apple-mesh-bg-light text-slate-900"
    }`}>
      {/* Top Fixed Header */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors ${
        isDark
          ? "border-white/10 bg-[#080b14]/92 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          : "border-slate-200/80 bg-white/95 text-slate-900 shadow-xs"
      }`}>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`p-2 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                isDark
                  ? "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 shadow-2xs"
              }`}
              title="Return to Main Command Center"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Command Center</span>
            </Link>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <FlaskConical className="w-4 h-4" />
              </div>
              <span className="font-black text-sm sm:text-base tracking-tight">
                Chemistry Foundations Suite
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/?tab=concepts"
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isDark
                  ? "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Science Concepts</span>
            </Link>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isDark
                  ? "bg-white/10 border-white/20 text-amber-400 hover:text-amber-300"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 shadow-2xs"
              }`}
              title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3.5 sm:px-6 py-6 sm:py-8">
        <ChemistryBasicsMasterView
          isDark={isDark}
          onNavigateToChapter={(chNo) => {
            window.location.href = `/?tab=concepts&chapter=${chNo}`;
          }}
        />
      </main>
    </div>
  );
}
