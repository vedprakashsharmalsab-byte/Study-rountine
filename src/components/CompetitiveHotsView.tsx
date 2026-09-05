"use client";

import React, { useState, useMemo } from "react";
import {
  Flame,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Eye,
  EyeOff,
  BookOpen,
  ArrowRight,
  Filter,
  FileText
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import {
  COMPETITIVE_HOTS_BANK,
  type CompetitiveQuestion
} from "@/data/competitiveHotsData";

interface CompetitiveHotsViewProps {
  isDark: boolean;
  onOpenQuestionBank?: (subject: "math" | "science", chapterNo?: number) => void;
}

export default function CompetitiveHotsView({
  isDark,
  onOpenQuestionBank
}: CompetitiveHotsViewProps) {
  const [selectedSubject, setSelectedSubject] = useState<"all" | "math" | "science">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [revealedClueIds, setRevealedClueIds] = useState<Record<string, boolean>>({});
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    hots_sci_circuit_switch: true,
    hots_math_circle_supplementary: true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleClue = (id: string) => {
    setRevealedClueIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = useMemo(() => {
    return COMPETITIVE_HOTS_BANK.filter((q) => {
      if (selectedSubject !== "all" && q.subject !== selectedSubject) return false;
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.title.toLowerCase().includes(query) ||
          q.chapterName.toLowerCase().includes(query) ||
          q.questionText.toLowerCase().includes(query) ||
          q.finalBoxedAnswer.toLowerCase().includes(query) ||
          q.commonStudentPitfall.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedSubject, selectedDifficulty, searchQuery]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. HERO HEADER */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-r from-rose-950/30 via-slate-900/60 to-amber-950/20 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            : "bg-gradient-to-r from-rose-50 via-white to-amber-50 border-rose-100 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="w-9 h-9 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <Flame className="w-5 h-5" />
              </div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500 text-white">
                Olympiad & NTSE Tier
              </span>
              <span className="text-xs font-mono text-rose-400 font-bold">
                Higher Order Thinking Skills (HOTS)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Competitive HOTS & Multi-Concept Case Study Vault
            </h1>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              The differentiator between a 90% score and a 100% Century. Features non-routine mixed resistor networks with switch states, multi-step unknown chemical reaction chains ($X, Y, Z$), optics lens shifts, moving airplane trigonometry, and olympiad circle geometry proofs.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-rose-400">Section D/E</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">CBSE Standards</div>
            </div>
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-amber-400">100%</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Step Solved</div>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mt-6 pt-6 border-t border-current/10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competitive questions (e.g. 'switch', 'aeroplane', 'unknown', 'inradius', 'circle')..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50 ${
                isDark ? "bg-black/40 border-white/10 text-white placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl border bg-black/20 border-white/5">
              <button
                onClick={() => setSelectedSubject("all")}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedSubject === "all" ? "bg-rose-500 text-white shadow-sm" : "text-slate-400 hover:text-white"
                }`}
              >
                All Subjects
              </button>
              <button
                onClick={() => setSelectedSubject("math")}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedSubject === "math" ? "bg-amber-500 text-slate-950 shadow-sm" : "text-slate-400 hover:text-white"
                }`}
              >
                Mathematics HOTS
              </button>
              <button
                onClick={() => setSelectedSubject("science")}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedSubject === "science" ? "bg-cyan-500 text-slate-950 shadow-sm" : "text-slate-400 hover:text-white"
                }`}
              >
                Science HOTS
              </button>
            </div>

            <span className="text-xs font-mono text-slate-400 ml-auto">
              Showing {filteredQuestions.length} HOTS Problems
            </span>
          </div>
        </div>
      </div>

      {/* 2. HOTS QUESTIONS LIST */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const isExpanded = !!expandedIds[q.id];
          const isClueRevealed = !!revealedClueIds[q.id];

          return (
            <div
              key={q.id}
              className={`rounded-3xl border transition-all duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-white/[0.08] hover:border-white/20 shadow-lg"
                  : "bg-white border-slate-200 hover:border-rose-300 shadow-sm"
              }`}
            >
              {/* QUESTION HEADER STRIP */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      Ch {q.chapterNo}: {q.chapterName}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {q.difficulty}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {q.boardRecurrence}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2">
                    {q.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    {q.marks} Marks
                  </span>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* QUESTION BODY */}
              <div className="px-5 sm:px-6 pb-4">
                <div className={`p-4 rounded-2xl border text-sm sm:text-base leading-relaxed ${
                  isDark ? "bg-black/40 border-white/5 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
                }`}>
                  <PremiumMathRenderer content={q.questionText} isDark={isDark} />
                </div>
              </div>

              {/* EXPANDED CONTENT: HINTS & TOPPER ANSWER SHEET */}
              {isExpanded && (
                <div className={`px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t space-y-5 ${isDark ? "border-white/5" : "border-slate-100"}`}>
                  {/* HINTS / CONCEPT CLUES ACCORDION */}
                  <div className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-amber-950/20 border-amber-500/20" : "bg-amber-50 border-amber-200"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4" /> Strategy & Core Concept Clues:
                      </span>
                      <button
                        onClick={() => toggleClue(q.id)}
                        className="text-xs font-bold text-amber-400 flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        {isClueRevealed ? <><EyeOff className="w-3.5 h-3.5" /> Hide Clues</> : <><Eye className="w-3.5 h-3.5" /> Reveal Clues</>}
                      </button>
                    </div>

                    {isClueRevealed ? (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 pt-2 border-t border-amber-500/20">
                        {q.keyConceptClues.map((clue, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{clue}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-400 italic">
                        Try solving the problem on your rough paper first! Click "Reveal Clues" if you get stuck.
                      </p>
                    )}
                  </div>

                  {/* TOPPER STEP-BY-STEP ANSWER SHEET */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Official 100% Board Evaluator Answer Sheet:
                    </span>

                    <div className="space-y-3">
                      {q.topperAnswerSheet.map((st) => (
                        <div
                          key={st.stepNo}
                          className={`p-4 sm:p-5 rounded-2xl border space-y-2 ${
                            isDark ? "bg-black/50 border-white/5" : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">
                                {st.stepNo}
                              </span>
                              {st.stepHeading}
                            </span>
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                              {st.marksAwarded}
                            </span>
                          </div>

                          <div className="text-xs sm:text-sm leading-relaxed text-slate-200 py-1">
                            <PremiumMathRenderer content={st.working} isDark={isDark} />
                          </div>

                          <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                            <span className="text-cyan-400 font-bold">Evaluator Rubric:</span>
                            <span>{st.examinerCheck}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FINAL BOXED ANSWER */}
                  <div className={`p-4 rounded-2xl border text-center ${
                    isDark ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-900"
                  }`}>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono mb-1">Final Result</span>
                    <span className="text-sm sm:text-base font-black font-mono">
                      {q.finalBoxedAnswer}
                    </span>
                  </div>

                  {/* COMMON STUDENT PITFALL ALERT */}
                  <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    isDark ? "bg-rose-950/20 border-rose-500/30 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-900"
                  }`}>
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <span className="font-bold block text-rose-400">Common Student Deduction Trap:</span>
                      <p className="leading-relaxed">{q.commonStudentPitfall}</p>
                    </div>
                  </div>

                  {/* BOTTOM ACTION */}
                  {onOpenQuestionBank && (
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => onOpenQuestionBank(q.subject, q.chapterNo)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        Solve Similar Problems in Vault <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
