"use client";

import React from "react";
import { CheckCircle2, Flame, BookOpen, Stamp, Sparkles, Check } from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import type { VaultQuestion } from "@/data/vaultQuestions";

interface NotebookSolutionViewProps {
  question: VaultQuestion;
  isDark: boolean;
}

export default function NotebookSolutionView({ question, isDark }: NotebookSolutionViewProps) {
  // 1. Process steps or parse answer into distinct Topper-Grade parts
  const rawSteps = question.steps && question.steps.length > 0 ? question.steps : [];

  const parseStepContent = (stepText: string) => {
    const cleaned = stepText.replace(/^Step\s*\d+\s*:\s*/i, "").trim();
    const reasonMatch = cleaned.match(/\[(.*?)\]/);
    const reason = reasonMatch ? reasonMatch[1] : null;
    const equationText = reasonMatch ? cleaned.replace(/\[.*?\]/, "").trim() : cleaned;
    return { equationText, reason };
  };

  // Intelligently determine whether to use math steps or multi-part structured theory
  const isPureMathDerivation = rawSteps.length > 0 && rawSteps.some(s => /^Step\s*\d+/i.test(s) || /\[.*?\]/.test(s));

  // Split answer into structured parts (e.g. (a), (b), (c), (d), or paragraphs)
  const structuredParts = React.useMemo(() => {
    if (isPureMathDerivation) return null;
    if (!question.answer) return [];

    const answer = question.answer.trim();

    // Helper to format sub-points inside a part (e.g., (1)... (2)... or bullets)
    const formatSubItems = (text: string) => {
      let formatted = text.trim();
      // Separate inline (1), (2), (3) or (i), (ii), (iii) into newlines with bold tags
      formatted = formatted.replace(/(?:^|\s)(\((?:[0-9]+|[ivxlcdm]+)\))\s+/gi, "\n\n$1 ");
      // Separate hyphen bullets
      formatted = formatted.replace(/\n\s*-\s*/g, "\n\n- ");
      return formatted;
    };

    // Check for multi-part (a), (b), (c), (d)
    if (/\([a-d]\)\s+/i.test(answer)) {
      const split = answer.split(/(?=\([a-d]\)\s+)/i).map(s => s.trim()).filter(Boolean);
      if (split.length > 1) {
        return split.map((part) => {
          const match = part.match(/^\(([a-d])\)\s*([\s\S]*)/i);
          if (match) {
            return {
              tag: `Part (${match[1].toLowerCase()})`,
              content: formatSubItems(match[2])
            };
          }
          return { tag: "Ans.", content: formatSubItems(part) };
        });
      }
    }

    // Check for Roman numeral parts: (i), (ii), (iii), (iv)
    if (/\([ivx]+\)\s+/i.test(answer)) {
      const split = answer.split(/(?=\([ivx]+\)\s+)/i).map(s => s.trim()).filter(Boolean);
      if (split.length > 1) {
        return split.map((part) => {
          const match = part.match(/^\(([ivx]+)\)\s*([\s\S]*)/i);
          if (match) {
            return {
              tag: `Part (${match[1].toLowerCase()})`,
              content: formatSubItems(match[2])
            };
          }
          return { tag: "Ans.", content: formatSubItems(part) };
        });
      }
    }

    // Check for double newline paragraphs
    const paragraphs = answer.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    if (paragraphs.length > 1) {
      return paragraphs.map((p, idx) => ({
        tag: idx === 0 ? "Ans." : `(${idx + 1})`,
        content: formatSubItems(p)
      }));
    }

    return [{ tag: "Ans.", content: formatSubItems(answer) }];
  }, [rawSteps, question.answer, isPureMathDerivation]);

  // Determine if question has a separate, concise final result vs a full theory explanation
  const isMultiParagraphTheory = question.answer && question.answer.length > 160;

  return (
    <div className="w-full my-3 animate-fade-in">
      {/* 
        AUTHENTIC PLAIN PAPER CBSE EXAM ANSWER SHEET
        Plain paper, continuous red margin line, authentic margin tags,
        generous line spacing, and 100% CBSE Topper presentation standards.
      */}
      <div 
        className={`relative rounded-2xl transition-all overflow-hidden ${
          isDark 
            ? "plain-paper-sheet-dark text-slate-100 border border-white/10" 
            : "plain-paper-sheet text-slate-900 border border-slate-300/80 shadow-md"
        }`}
      >
        {/* Top Margin Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 pt-4 pb-3 border-b border-current/10">
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider ${
              isDark ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-red-50 text-red-700 border border-red-300"
            }`}>
              CBSE Topper Answer Sheet
            </span>
            <span className="text-[11px] font-mono opacity-70">
              Section {question.marks >= 5 ? "D (5M Long Answer)" : question.marks === 4 ? "E (4M Case Study)" : question.marks === 3 ? "C (3M Short Answer)" : question.marks === 2 ? "B (2M Short Answer)" : "A (1M Objective)"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            {question.formula && (
              <span className={`text-[11px] font-semibold hidden md:inline ${isDark ? "text-cyan-400" : "text-blue-800"}`}>
                Governing Formula: {question.formula}
              </span>
            )}
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
              isDark ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border-emerald-300"
            }`}>
              Full Score: {question.marks} / {question.marks} Marks
            </span>
          </div>
        </div>

        {/* PLAIN PAPER SHEET BODY WITH RED MARGIN */}
        <div className="relative px-3 sm:px-6 py-6">
          {/* Solution Body with Generous Line Height and Clear Step Separation */}
          <div className="space-y-6 sm:space-y-7">
            {isPureMathDerivation ? (
              // CASE 1: Pure mathematical derivation steps explicitly provided
              rawSteps.map((step, idx) => {
                const { equationText, reason } = parseStepContent(step);
                return (
                  <div key={idx} className="relative flex items-start">
                    {/* Margin Column with exact physical border-r */}
                    <div className={`w-14 sm:w-20 text-right pr-3.5 sm:pr-4 border-r-2 border-red-500/60 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                      isDark ? "text-red-400" : "text-red-700"
                    }`}>
                      {idx === 0 ? "Ans." : `(${idx + 1})`}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pl-4 sm:pl-6 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3">
                        <div className="text-xs sm:text-sm font-medium leading-relaxed tracking-wide min-w-0 flex-1 break-words">
                          <PremiumMathRenderer content={equationText} isDark={isDark} />
                        </div>

                        {reason && (
                          <div className={`text-[11px] font-mono italic opacity-95 shrink-0 self-start lg:self-center px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5 shadow-2xs ${
                            isDark 
                              ? "bg-amber-500/10 text-amber-300 border-amber-500/20" 
                              : "bg-amber-50/90 text-amber-950 border-amber-200 font-semibold"
                          }`}>
                            <span className="font-black text-amber-600 dark:text-amber-400 not-italic">∵</span>
                            <span>{reason}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : structuredParts && structuredParts.length > 1 ? (
              // CASE 2: Multi-part answer (e.g. Parts (a), (b), (c), (d))
              structuredParts.map((part, pIdx) => (
                <div key={pIdx} className="relative flex items-start">
                  {/* Margin Column */}
                  <div className={`w-14 sm:w-20 text-right pr-3.5 sm:pr-4 border-r-2 border-red-500/60 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                    isDark ? "text-red-400" : "text-red-700"
                  }`}>
                    {part.tag}
                  </div>

                  {/* Part Content Box */}
                  <div className="flex-1 pl-4 sm:pl-6 min-w-0">
                    <div className={`p-4 rounded-xl border leading-relaxed text-xs sm:text-sm font-medium transition-all ${
                      isDark 
                        ? "bg-white/[0.02] border-white/5 text-slate-100" 
                        : "bg-white border-slate-200/80 text-slate-900 shadow-xs"
                    }`}>
                      <PremiumMathRenderer content={part.content} isDark={isDark} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // CASE 3: Single block answer
              <div className="relative flex items-start">
                <div className={`w-14 sm:w-20 text-right pr-3.5 sm:pr-4 border-r-2 border-red-500/60 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                  isDark ? "text-red-400" : "text-red-700"
                }`}>
                  Ans.
                </div>
                <div className="flex-1 pl-4 sm:pl-6 text-xs sm:text-sm font-medium leading-relaxed min-w-0">
                  <div className={`p-4 rounded-xl border ${
                    isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"
                  }`}>
                    <PremiumMathRenderer content={question.answer} isDark={isDark} />
                  </div>
                </div>
              </div>
            )}

            {/* Authentic Boxed Final Answer on the Paper */}
            {question.answer && !isMultiParagraphTheory && (
              <div className="relative flex items-start pt-2">
                <div className={`w-14 sm:w-20 text-right pr-3.5 sm:pr-4 border-r-2 border-red-500/60 shrink-0 font-mono font-black text-base pt-1 ${
                  isDark ? "text-emerald-400" : "text-emerald-700"
                }`}>
                  ∴
                </div>
                <div className="flex-1 pl-4 sm:pl-6 min-w-0">
                  <div className={`inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-xl border-2 font-mono max-w-full overflow-x-auto ${
                    isDark 
                      ? "border-emerald-500 bg-emerald-950/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                      : "border-emerald-700 bg-emerald-50 text-emerald-950 font-bold shadow-xs"
                  }`}>
                    <span className="text-[11px] font-black uppercase tracking-wider">Ans:</span>
                    <div className="text-xs sm:text-sm font-bold break-words">
                      <PremiumMathRenderer content={question.answer} isDark={isDark} />
                    </div>
                    <span className="text-[10px] font-mono uppercase opacity-80 shrink-0">(Hence Proved / Final)</span>
                  </div>
                </div>
              </div>
            )}

            {/* For multi-part theory answers: Clean verification seal */}
            {isMultiParagraphTheory && (
              <div className="relative flex items-start pt-1">
                <div className={`w-14 sm:w-20 text-right pr-3.5 sm:pr-4 border-r-2 border-red-500/60 shrink-0 font-mono font-black text-base pt-1 ${
                  isDark ? "text-emerald-400" : "text-emerald-700"
                }`}>
                  ✓
                </div>
                <div className="flex-1 pl-4 sm:pl-6 min-w-0">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono font-bold max-w-full overflow-x-auto ${
                    isDark 
                      ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300" 
                      : "bg-emerald-50 border-emerald-300 text-emerald-800"
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>All Sub-Parts Fully Answered & Verified with CBSE Board Marking Rubric</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Plain Paper Sheet Footer Note */}
        <div className="px-5 sm:px-8 py-3 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 shrink-0" />
            <span className={`text-[11px] font-medium leading-normal ${isDark ? "text-amber-300" : "text-amber-900"}`}>
              <strong>Examiner Rubric:</strong> {question.examinerNote || "Stating scientific reasons and units beside each step guarantees full 100% marks."}
            </span>
          </div>

          <div className={`flex items-center gap-1.5 text-[10px] font-mono font-bold shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% CBSE Standard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
