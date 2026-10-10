"use client";

import React, { useState, useMemo, memo } from "react";
import {
  BookOpen,
  Search,
  Eye,
  EyeOff,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Atom,
  Copy,
  Check,
  Filter
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import {
  SCIENCE_DEFINITIONS_MASTER,
  getDefinitionsForChapter,
  type ScienceDefinition
} from "@/data/scienceDefinitionsData";

interface ScienceDefinitionsViewProps {
  isDark: boolean;
  activeChapterNo: number;
  chapterTitle?: string;
  onOpenQuestionBank?: (chapterNo?: number) => void;
}

export const ScienceDefinitionsView = memo(function ScienceDefinitionsView({
  isDark,
  activeChapterNo,
  chapterTitle = "",
  onOpenQuestionBank
}: ScienceDefinitionsViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isQuizMode, setIsQuizMode] = useState(false); // Hide definitions to self-test
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const chapterDefinitions = useMemo(() => {
    return getDefinitionsForChapter(activeChapterNo);
  }, [activeChapterNo]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    chapterDefinitions.forEach((d) => set.add(d.category));
    return ["all", ...Array.from(set)];
  }, [chapterDefinitions]);

  const filteredDefinitions = useMemo(() => {
    return chapterDefinitions.filter((d) => {
      const matchesCategory = selectedCategory === "all" || d.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;
      const matchesSearch =
        d.term.toLowerCase().includes(q) ||
        d.hindiTerm.toLowerCase().includes(q) ||
        d.ncertDefinition.toLowerCase().includes(q) ||
        d.simplifiedExplanation.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [chapterDefinitions, selectedCategory, searchQuery]);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAll = () => {
    const all: Record<string, boolean> = {};
    chapterDefinitions.forEach((d) => {
      all[d.id] = true;
    });
    setRevealedIds(all);
  };

  const hideAll = () => {
    setRevealedIds({});
  };

  const handleCopy = (def: ScienceDefinition) => {
    const text = `${def.term} (${def.hindiTerm}):\n${def.ncertDefinition}\n\nKey: ${def.simplifiedExplanation}`;
    navigator.clipboard.writeText(text);
    setCopiedId(def.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (chapterDefinitions.length === 0) {
    return null;
  }

  return (
    <div className={`p-6 sm:p-7 rounded-3xl border transition-all space-y-6 ${
      isDark
        ? "bg-gradient-to-br from-[#0e1626] via-[#0b1220] to-[#0a101d] border-teal-500/25 shadow-lg"
        : "bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/40 border-teal-200/80 shadow-md"
    }`}>
      {/* HEADER ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
              isDark ? "bg-teal-500/15 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-950 font-extrabold border-teal-300"
            }`}>
              💎 NCERT Foundation
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
              isDark ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-amber-100 text-amber-950 border-amber-300 font-bold"
            }`}>
              {chapterDefinitions.length} Core Definitions
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Foundations &amp; Core Definitions (आधारभूत परिभाषाएं)
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
            Exact CBSE Board keywords, simplified mental models, formulas, and examiner traps for 1-mark and 2-mark definitions.
          </p>
        </div>

        {/* CONTROLS: QUIZ MODE TOGGLE & REVEAL */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setIsQuizMode((prev) => !prev);
              if (!isQuizMode) hideAll();
              else revealAll();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
              isQuizMode
                ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                : isDark
                ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white"
                : "bg-white border-slate-200 text-slate-700 shadow-2xs hover:bg-slate-50"
            }`}
            title="Hide definitions to test your recall before exams"
          >
            {isQuizMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{isQuizMode ? "Self-Test Mode Active" : "Self-Test (Hide Definitions)"}</span>
          </button>

          {isQuizMode && (
            <div className="flex items-center gap-1">
              <button
                onClick={revealAll}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                  isDark ? "bg-white/5 text-teal-300 border-white/10" : "bg-white text-teal-900 border-slate-200"
                }`}
              >
                Reveal All
              </button>
              <button
                onClick={hideAll}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                  isDark ? "bg-white/5 text-zinc-400 border-white/10" : "bg-white text-slate-600 border-slate-200"
                }`}
              >
                Hide All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FILTER & SEARCH TOOLBAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search definitions by keyword, term, or Hindi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs font-medium border outline-none transition-all ${
              isDark
                ? "bg-black/30 border-white/10 text-white focus:border-teal-400"
                : "bg-white border-slate-200 text-slate-900 focus:border-teal-500 shadow-2xs"
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold capitalize border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? isDark
                    ? "bg-teal-500/20 text-teal-300 border-teal-500/40 font-black"
                    : "bg-teal-100 text-teal-950 border-teal-300 font-black"
                  : isDark
                  ? "bg-white/5 border-white/5 text-zinc-400 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* DEFINITION CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredDefinitions.map((def) => {
          const isRevealed = !isQuizMode || !!revealedIds[def.id];

          return (
            <div
              key={def.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                isDark
                  ? "bg-black/30 hover:bg-black/40 border-white/10 hover:border-teal-500/30"
                  : "bg-white hover:bg-slate-50/80 border-slate-200 shadow-xs hover:border-teal-300"
              }`}
            >
              <div className="space-y-2.5">
                {/* CARD TITLE BAR */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase border ${
                        def.category === "Law / Principle"
                          ? isDark ? "bg-purple-500/15 text-purple-300 border-purple-500/30" : "bg-purple-100 text-purple-900 border-purple-300"
                          : def.category === "Process / Phenomenon"
                          ? isDark ? "bg-blue-500/15 text-blue-300 border-blue-500/30" : "bg-blue-100 text-blue-900 border-blue-300"
                          : def.category === "Quantity / Unit"
                          ? isDark ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-amber-100 text-amber-950 border-amber-300"
                          : isDark ? "bg-teal-500/15 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-900 border-teal-200"
                      }`}>
                        {def.category}
                      </span>
                      <span className={`text-xs font-medium ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
                        {def.hindiTerm}
                      </span>
                    </div>
                    <h4 className={`text-base sm:text-lg font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      {def.term}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleCopy(def)}
                      className={`p-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        copiedId === def.id
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          : isDark
                          ? "bg-white/5 border-white/5 text-zinc-400 hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                      }`}
                      title="Copy definition"
                    >
                      {copiedId === def.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>

                    {isQuizMode && (
                      <button
                        onClick={() => toggleReveal(def.id)}
                        className={`p-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                          isRevealed
                            ? isDark ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-amber-100 text-amber-900 border-amber-300"
                            : isDark ? "bg-white/5 text-zinc-300 border-white/10" : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                        title={isRevealed ? "Hide definition" : "Reveal definition"}
                      >
                        {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      </button>
                    )}
                  </div>
                </div>

                {/* CONTENT AREA (REVEALABLE IN QUIZ MODE) */}
                {isRevealed ? (
                  <div className="space-y-2.5 animate-fade-in text-xs sm:text-sm">
                    {/* NCERT Official Definition */}
                    <div className={`p-3 rounded-xl border leading-relaxed ${
                      isDark ? "bg-white/[0.03] border-white/10 text-zinc-200" : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-teal-400" : "text-teal-800 font-extrabold"}`}>
                          Exact Board Definition:
                        </span>
                      </div>
                      <PremiumMathRenderer content={def.ncertDefinition} isDark={isDark} />
                    </div>

                    {/* Simplified Meaning */}
                    <div className="flex items-start gap-2 pt-0.5">
                      <Lightbulb className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
                      <div className={`text-xs ${isDark ? "text-zinc-300" : "text-slate-700"}`}>
                        <span className="font-bold text-amber-500/90 dark:text-amber-400">In Simple Words: </span>
                        {def.simplifiedExplanation}
                      </div>
                    </div>

                    {/* Formula / Equation / Unit if present */}
                    {(def.formulaOrEquation || def.siUnitOrValues) && (
                      <div className={`p-2 rounded-lg border font-mono text-xs flex flex-wrap items-center justify-between gap-2 ${
                        isDark ? "bg-black/40 border-white/5 text-teal-300" : "bg-teal-50/70 border-teal-200 text-teal-950 font-bold"
                      }`}>
                        {def.formulaOrEquation && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] uppercase opacity-70">Eq/Formula:</span>
                            <span>{def.formulaOrEquation}</span>
                          </div>
                        )}
                        {def.siUnitOrValues && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] uppercase opacity-70">Unit/Value:</span>
                            <span>{def.siUnitOrValues}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Examiner Keyword Trap */}
                    <div className={`p-2 rounded-lg border flex items-start gap-2 text-[11px] leading-relaxed ${
                      isDark ? "bg-rose-950/20 border-rose-500/20 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-900"
                    }`}>
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-400" />
                      <div>
                        <span className="font-bold">Examiner Trap: </span>
                        {def.examinerKeywordTrap}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => toggleReveal(def.id)}
                    className={`py-8 rounded-xl border border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                      isDark ? "bg-white/[0.02] border-white/10 hover:border-teal-500/40 text-zinc-400 hover:text-white" : "bg-slate-50 border-slate-300 hover:border-teal-400 text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Eye className="w-5 h-5 text-teal-400" />
                    <span className="text-xs font-bold">Click to Reveal Definition &amp; Test Yourself</span>
                  </div>
                )}
              </div>

              {/* CARD FOOTER */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="truncate max-w-[200px]">Eg: {def.example}</span>
                {onOpenQuestionBank && (
                  <button
                    onClick={() => onOpenQuestionBank(def.chapterNo)}
                    className={`text-[10px] font-bold hover:underline cursor-pointer ${
                      isDark ? "text-teal-400" : "text-teal-700"
                    }`}
                  >
                    Practice in QB →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ScienceDefinitionsView;
