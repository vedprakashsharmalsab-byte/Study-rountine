"use client";

import React from "react";
import { CheckCircle2, Flame, BookOpen, Stamp, Sparkles } from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import type { VaultQuestion } from "@/data/vaultQuestions";

interface NotebookSolutionViewProps {
  question: VaultQuestion;
  isDark: boolean;
}

export default function NotebookSolutionView({ question, isDark }: NotebookSolutionViewProps) {
  const rawSteps = question.steps && question.steps.length > 0 ? question.steps : [];

  const parseStepContent = (stepText: string) => {
    const cleaned = stepText.replace(/^Step\s*\d+\s*:\s*/i, "").trim();
    const reasonMatch = cleaned.match(/\[(.*?)\]/);
    const reason = reasonMatch ? reasonMatch[1] : null;
    const equationText = reasonMatch ? cleaned.replace(/\[.*?\]/, "").trim() : cleaned;
    return { equationText, reason };
  };

  return (
    <div className="w-full my-3 animate-fade-in">
      {/* 
        AUTHENTIC PLAIN PAPER CBSE EXAM ANSWER SHEET
        Plain paper (no grids, no ruled lines), realistic paper drop-shadow,
        continuous left vertical red margin line, authentic margin tags,
        and full high-contrast visibility in both white (light) and dark modes.
      */}
      <div 
        className={`relative rounded-md transition-all ${
          isDark 
            ? "plain-paper-sheet-dark text-slate-100" 
            : "plain-paper-sheet text-slate-900 border border-slate-300/80"
        }`}
      >
        {/* Subtle Top Margin Holes / Sheet Identifier */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2.5 border-b border-current/10">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider ${
              isDark ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-red-50 text-red-700 border border-red-300"
            }`}>
              CBSE Answer Sheet
            </span>
            <span className="text-[11px] font-mono opacity-70">
              Sec {question.marks >= 5 ? "D (5M)" : question.marks === 4 ? "E (4M)" : question.marks === 3 ? "C (3M)" : question.marks === 2 ? "B (2M)" : "A (1M)"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            {question.formula && (
              <span className={`text-[11px] font-semibold hidden md:inline ${isDark ? "text-cyan-400" : "text-blue-800"}`}>
                Formula: {question.formula}
              </span>
            )}
            <span className={`text-[11px] font-bold ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
              Max: {question.marks} Mark{question.marks > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* PLAIN PAPER SHEET BODY WITH LEFT RED MARGIN */}
        <div className="relative px-2 sm:px-6 py-6">
          {/* Continuous Left Vertical Red Margin Line */}
          <div 
            className="absolute top-0 bottom-0 left-11 sm:left-16 border-r-2 pointer-events-none"
            style={{ borderColor: isDark ? "rgba(239, 68, 68, 0.45)" : "rgba(220, 38, 38, 0.75)" }}
          />

          {/* Derivation Steps Written Naturally on Plain Paper with Generous Spacing */}
          <div className="space-y-6 sm:space-y-7">
            {rawSteps.length > 0 ? (
              rawSteps.map((step, idx) => {
                const { equationText, reason } = parseStepContent(step);
                return (
                  <div key={idx} className="relative flex items-start gap-1">
                    {/* Margin Column: Step Tag */}
                    <div className={`w-9 sm:w-14 text-right pr-2.5 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                      isDark ? "text-red-400" : "text-red-700"
                    }`}>
                      {idx === 0 ? "Ans." : `(${idx + 1})`}
                    </div>

                    {/* Plain Paper Step Content & Right Justified Reason */}
                    <div className="flex-1 pl-3 sm:pl-5 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
                        <div className="text-xs sm:text-sm font-medium leading-loose tracking-wide min-w-0">
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
            ) : (
              <div className="relative flex items-start gap-1">
                <div className={`w-9 sm:w-14 text-right pr-2.5 shrink-0 font-mono font-black text-xs select-none pt-1 ${
                  isDark ? "text-red-400" : "text-red-700"
                }`}>
                  Ans.
                </div>
                <div className="flex-1 pl-3 sm:pl-5 text-xs sm:text-sm font-medium leading-relaxed">
                  <PremiumMathRenderer content={question.answer} isDark={isDark} />
                </div>
              </div>
            )}

            {/* Authentic Boxed Final Answer on the Paper */}
            {question.answer && (
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
                    <span className="text-[11px] font-black uppercase tracking-wider">Ans:</span>
                    <span className="text-xs sm:text-sm font-bold underline decoration-double decoration-current underline-offset-4">
                      {question.answer}
                    </span>
                    <span className="text-[10px] font-mono uppercase opacity-80">(Hence Proved / Final)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Plain Paper Sheet Footer Note */}
        <div className="px-6 py-3 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 shrink-0" />
            <span className={`text-[11px] font-medium ${isDark ? "text-amber-300" : "text-amber-900"}`}>
              <strong>Examiner Rubric:</strong> {question.examinerNote || "Stating reasons beside each step guarantees full step marks in board evaluation."}
            </span>
          </div>

          <div className={`flex items-center gap-1 text-[10px] font-mono font-bold shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% CBSE Standard</span>
          </div>
        </div>
      </div>
    </div>
  );
}
