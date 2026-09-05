"use client";

import React, { useState, useMemo } from "react";
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  EyeOff, 
  Flame, 
  Search, 
  Sparkles,
  GraduationCap
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { THEOREMS_AND_EXAMPLES_BANK, BoardTheoremOrExample } from "@/data/theoremsAndExamples";

interface TheoremsAndExamplesViewProps {
  isDark: boolean;
  onOpenQuestionBank?: () => void;
}

export default function TheoremsAndExamplesView({ isDark, onOpenQuestionBank }: TheoremsAndExamplesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<{ [id: string]: boolean }>({
    thm_6_1: true // Open BPT by default for immediate value
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };


  const filteredItems = useMemo(() => {
    return THEOREMS_AND_EXAMPLES_BANK.filter(item => {
      // Category filter
      if (activeCategory === "theorems" && item.type !== "Theorem Proof") return false;
      if (activeCategory === "derivations" && item.type !== "Mandatory Derivation") return false;
      if (activeCategory === "ch1" && item.chapterNo !== 1) return false;
      if (activeCategory === "ch4" && item.chapterNo !== 4) return false;
      if (activeCategory === "ch5" && item.chapterNo !== 5) return false;
      if (activeCategory === "ch6" && item.chapterNo !== 6) return false;
      if (activeCategory === "ch7" && item.chapterNo !== 7) return false;
      if (activeCategory === "ch8" && item.chapterNo !== 8) return false;
      if (activeCategory === "ch10" && item.chapterNo !== 10) return false;
      if (activeCategory === "ch11" && item.chapterNo !== 11) return false;
      if (activeCategory === "ch13" && item.chapterNo !== 13) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.chapterName.toLowerCase().includes(q) ||
          item.statement.toLowerCase().includes(q) ||
          item.ncertReference.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. HERO HEADER - FLUID & SLEEK */}
      <div 
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark 
            ? "bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-cyan-950/20 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]" 
            : "bg-gradient-to-r from-emerald-50 via-white to-cyan-50 border-emerald-100 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950">
                100% Board Standard Repository
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold hidden sm:inline">
                Class 10 CBSE
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              CBSE Mandatory Theorems & High-Yield NCERT Solved Examples
            </h1>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Up to <strong>15–20 Marks</strong> in the CBSE Board Examination are directly derived from Theorem Proofs and iconic NCERT Solved Examples. Every proof below follows the official CBSE Marking Scheme with Given, To Prove, Construction, and Right-Aligned Reasons.
            </p>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="mt-6 pt-6 border-t border-current/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
            <span className="text-[10px] uppercase font-bold text-emerald-400 block font-mono">Core Proofs</span>
            <span className="text-lg sm:text-xl font-black">{THEOREMS_AND_EXAMPLES_BANK.filter(t => t.type === "Theorem Proof").length} Theorems</span>
          </div>
          <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
            <span className="text-[10px] uppercase font-bold text-amber-400 block font-mono">Iconic Examples</span>
            <span className="text-lg sm:text-xl font-black">8 NCERT Solved</span>
          </div>
          <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
            <span className="text-[10px] uppercase font-bold text-cyan-400 block font-mono">Exam Weightage</span>
            <span className="text-lg sm:text-xl font-black">~15-20 Marks</span>
          </div>
          <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
            <span className="text-[10px] uppercase font-bold text-rose-400 block font-mono">Presentation</span>
            <span className="text-lg sm:text-xl font-black">Single Sheet</span>
          </div>
        </div>
      </div>

      {/* 2. FILTER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "all", label: `All (${THEOREMS_AND_EXAMPLES_BANK.length})` },
            { id: "theorems", label: "⭐ Theorems & Converses" },
            { id: "derivations", label: "📐 Derivations" },
            { id: "ch1", label: "Ch 1: Real Numbers" },
            { id: "ch4", label: "Ch 4: Quadratics" },
            { id: "ch5", label: "Ch 5: AP" },
            { id: "ch6", label: "Ch 6: Triangles" },
            { id: "ch7", label: "Ch 7: Coordinate" },
            { id: "ch8", label: "Ch 8: Trigonometry" },
            { id: "ch10", label: "Ch 10: Circles" },
            { id: "ch11", label: "Ch 11: Areas Circles" },
            { id: "ch13", label: "Ch 13: Statistics" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                activeCategory === tab.id
                  ? isDark
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold shadow-md"
                    : "bg-emerald-600 text-white border-emerald-600 font-extrabold shadow-md"
                  : isDark
                  ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search theorem or example..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-medium border outline-none transition-all ${
              isDark 
                ? "bg-black/40 border-white/10 text-white focus:border-emerald-500" 
                : "bg-white border-slate-200 text-slate-900 focus:border-emerald-500"
            }`}
          />
        </div>
      </div>

      {/* 3. THEOREMS & EXAMPLES LIST */}
      <div className="space-y-6">
        {filteredItems.length === 0 ? (
          <div className={`text-center p-12 rounded-3xl border ${isDark ? "border-white/5 text-slate-400 bg-black/20" : "border-slate-200 text-slate-600 bg-slate-50"}`}>
            <BookOpen className="w-10 h-10 mx-auto text-slate-500 mb-3" />
            <p className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>No theorems or examples found matching your filter.</p>
            <p className="text-xs mt-1">Try resetting the category filter or searching for another keyword.</p>
          </div>
        ) : (
          filteredItems.map(item => {
            const isExpanded = expandedIds[item.id] || false;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isDark 
                    ? "bg-[#111622]/80 backdrop-blur-xl border-white/[0.07] shadow-lg hover:shadow-emerald-500/5 hover:border-white/15" 
                    : "bg-white border-slate-200 shadow-md hover:border-slate-300 text-slate-900"
                }`}
              >
                {/* Header Card */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        item.type === "Theorem Proof"
                          ? isDark ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                          : item.type === "Mandatory Derivation"
                          ? isDark ? "bg-amber-500/15 text-amber-400 border-amber-500/30" : "bg-amber-50 text-amber-800 border-amber-300 font-bold"
                          : isDark ? "bg-blue-500/15 text-blue-400 border-blue-500/30" : "bg-blue-50 text-blue-800 border-blue-300 font-bold"
                      }`}>
                        {item.type}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        isDark ? "text-slate-400 bg-white/5 border-white/5" : "text-slate-700 bg-slate-100 border-slate-200"
                      }`}>
                        Ch {item.chapterNo}: {item.chapterName}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        isDark ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-amber-800 bg-amber-50 border-amber-300"
                      }`}>
                        {item.marks} Marks
                      </span>
                      <span className={`text-[11px] font-mono font-semibold ml-auto md:ml-0 ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                        {item.boardFrequency}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900 font-black"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {item.ncertReference}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                        isDark ? "bg-white/5 hover:bg-white/10 text-white border border-white/10" : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 font-bold"
                      }`}
                    >
                      {isExpanded ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isExpanded ? "Hide Solution" : "View Single-Sheet Proof"}</span>
                    </button>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {/* THE AUTHENTIC PLAIN PAPER SHEET ANSWER PAPER VIEW */}
                {isExpanded && (
                  <div className={`border-t border-dashed border-current/15 p-3 sm:p-6 animate-fade-in ${isDark ? "bg-black/30" : "bg-slate-100/70"}`}>
                    {/* The Plain Paper Sheet */}
                    <div 
                      className={`rounded-md transition-all ${
                        isDark 
                          ? "plain-paper-sheet-dark text-slate-100" 
                          : "plain-paper-sheet text-slate-900 border border-slate-300/80"
                      }`}
                    >
                      {/* Paper Heading Strip */}
                      <div className="px-6 py-3 border-b border-current/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <span className={`font-black uppercase tracking-wider text-[11px] ${isDark ? "text-red-400" : "text-red-700"}`}>
                          Official CBSE Answer Sheet
                        </span>
                        <span className="opacity-70 text-[11px]">
                          Marks Allotted: {item.marks}M (Step Marking Scheme)
                        </span>
                      </div>

                      {/* STATEMENT & GIVEN / TO PROVE SECTION */}
                      <div className="px-6 sm:px-8 py-5 border-b border-current/10 space-y-3">
                        <div>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                            isDark ? "text-amber-400" : "text-amber-800"
                          }`}>
                            Theorem / Problem Statement:
                          </span>
                          <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                            <PremiumMathRenderer content={item.statement} isDark={isDark} />
                          </div>
                        </div>

                        {/* Given / To Prove / Construction Pills */}
                        {(item.given || item.toProve || item.construction) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                            {item.given && (
                              <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                                isDark ? "bg-black/30 border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-800 shadow-2xs"
                              }`}>
                                <strong className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>Given:</strong>
                                <PremiumMathRenderer content={item.given} isDark={isDark} />
                              </div>
                            )}
                            {item.toProve && (
                              <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                                isDark ? "bg-black/30 border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-800 shadow-2xs"
                              }`}>
                                <strong className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${isDark ? "text-cyan-400" : "text-blue-700"}`}>To Prove:</strong>
                                <PremiumMathRenderer content={item.toProve} isDark={isDark} />
                              </div>
                            )}
                            {item.construction && (
                              <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                                isDark ? "bg-black/30 border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-800 shadow-2xs"
                              }`}>
                                <strong className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${isDark ? "text-amber-400" : "text-amber-700"}`}>Construction:</strong>
                                <PremiumMathRenderer content={item.construction} isDark={isDark} />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* PLAIN PAPER DERIVATION WITH RED MARGIN */}
                      <div className="relative px-2 sm:px-6 py-6">
                        {/* Continuous Left Vertical Red Margin Line */}
                        <div 
                          className="absolute top-0 bottom-0 left-11 sm:left-16 border-r-2 pointer-events-none"
                          style={{ borderColor: isDark ? "rgba(239, 68, 68, 0.45)" : "rgba(220, 38, 38, 0.75)" }}
                        />

                        {/* Generously Spaced Flowing Steps */}
                        <div className="space-y-6 sm:space-y-7">
                          {item.sheetSteps.map((step, sIdx) => {
                            const hasCustomTag = step.marginTag && !step.marginTag.toLowerCase().startsWith("step");
                            return (
                              <div key={sIdx} className="relative flex items-start gap-1">
                                {/* Left Margin Indicator: Clean Step Number That Never Overflows */}
                                <div className={`w-9 sm:w-14 text-right pr-2.5 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                                  isDark ? "text-red-400" : "text-red-700"
                                }`}>
                                  {`(${sIdx + 1})`}
                                </div>

                                {/* Plain Paper Derivation & Reason */}
                                <div className="flex-1 pl-3 sm:pl-5 min-w-0">
                                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
                                    <div className="text-xs sm:text-sm font-medium leading-loose tracking-wide min-w-0">
                                      {hasCustomTag && (
                                        <span className={`inline-flex items-center text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded border mr-2 align-middle ${
                                          isDark 
                                            ? "bg-amber-500/15 text-amber-300 border-amber-500/30" 
                                            : "bg-amber-100 text-amber-900 border-amber-300 font-bold"
                                        }`}>
                                          {step.marginTag}
                                        </span>
                                      )}
                                      <PremiumMathRenderer content={step.content} isDark={isDark} />
                                    </div>

                                    {step.reason && (
                                      <div className={`text-[11px] font-mono italic opacity-95 shrink-0 self-start lg:self-center px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5 shadow-2xs ${
                                        isDark 
                                          ? "bg-amber-500/10 text-amber-300 border-amber-500/20" 
                                          : "bg-amber-50/90 text-amber-950 border-amber-200 font-semibold"
                                      }`}>
                                        <span className="font-black text-amber-600 dark:text-amber-400 not-italic">∵</span>
                                        <span>{step.reason}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {/* Final Boxed Result */}
                          {item.conclusion && (
                            <div className="relative flex items-start gap-1 pt-4">
                              <div className={`w-9 sm:w-14 text-right pr-2.5 shrink-0 font-mono font-black text-base pt-1 ${
                                isDark ? "text-emerald-400" : "text-emerald-700"
                              }`}>
                                ∴
                              </div>
                              <div className="flex-1 pl-3 sm:pl-5">
                                <div className={`inline-flex flex-wrap items-center gap-3 px-4 py-2.5 rounded-lg border-2 font-mono ${
                                  isDark 
                                    ? "border-emerald-500 bg-emerald-950/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                                    : "border-emerald-700 bg-emerald-50 text-emerald-950 font-bold shadow-xs"
                                }`}>
                                  <span className="text-[11px] font-black uppercase tracking-wider">Conclusion:</span>
                                  <span className="text-xs sm:text-sm font-bold underline decoration-double decoration-current underline-offset-4">
                                    <PremiumMathRenderer content={item.conclusion} isDark={isDark} />
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Examiner Warning Trap Footer */}
                      <div className="px-6 py-3 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className={`text-[11px] font-medium ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                            <strong>Examiner Rubric:</strong> {item.examinerTrap}
                          </span>
                        </div>

                        <div className={`flex items-center gap-1 text-[10px] font-mono font-bold shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>100% Board Verified</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
