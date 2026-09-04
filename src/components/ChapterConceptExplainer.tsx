"use client";

import React, { useState, useMemo } from "react";
import { 
  BookOpen, CheckCircle2, ChevronRight, Compass, Flame, Sparkles, 
  X, Lightbulb, ArrowRight, BookMarked, Layers, HelpCircle, ShieldAlert
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { MATH_CHAPTER_CONCEPTS, type MathChapterConcept } from "@/data/mathConceptsData";

interface ChapterConceptExplainerProps {
  chapterId: number;
  isDark: boolean;
  onClose?: () => void;
  onOpenQuestions?: () => void;
  onChapterChange?: (chapterNo: number) => void;
}

export default function ChapterConceptExplainer({
  chapterId,
  isDark,
  onClose,
  onOpenQuestions,
  onChapterChange
}: ChapterConceptExplainerProps) {
  // Local active chapter state, defaults to the passed chapterId
  const [currentChapterNo, setCurrentChapterNo] = useState<number>(chapterId || 6);

  // Sync if chapterId prop changes
  React.useEffect(() => {
    if (chapterId && chapterId >= 1 && chapterId <= 14) {
      setCurrentChapterNo(chapterId);
    }
  }, [chapterId]);

  const activeChapterData: MathChapterConcept = useMemo(() => {
    const found = MATH_CHAPTER_CONCEPTS.find(c => c.chapterNo === currentChapterNo);
    return found || MATH_CHAPTER_CONCEPTS[5]; // Default to Ch 6 Triangles
  }, [currentChapterNo]);

  const [activeSectionId, setActiveSectionId] = useState<string>(activeChapterData.sections[0]?.id || "concept");

  // When chapter changes, reset to its first section
  const handleChapterSelect = (chNo: number) => {
    setCurrentChapterNo(chNo);
    const target = MATH_CHAPTER_CONCEPTS.find(c => c.chapterNo === chNo);
    if (target && target.sections.length > 0) {
      setActiveSectionId(target.sections[0].id);
    }
    if (onChapterChange) {
      onChapterChange(chNo);
    }
  };

  const currentSection = useMemo(() => {
    return activeChapterData.sections.find(s => s.id === activeSectionId) || activeChapterData.sections[0];
  }, [activeChapterData, activeSectionId]);

  return (
    <div className={`rounded-3xl border shadow-2xl overflow-hidden animate-fade-in transition-all ${
      isDark 
        ? "bg-[#0c121e]/95 backdrop-blur-2xl border-white/10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)]" 
        : "bg-white border-slate-200 text-slate-900 shadow-xl"
    }`}>
      {/* 1. TOP HEADER & CHAPTER QUICK SELECTOR */}
      <div className={`p-5 sm:p-7 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        isDark 
          ? "bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-950 border-white/10" 
          : "bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-slate-200"
      }`}>
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-xs">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-xs">
                Intuitive Concept Master
              </span>
              <span className={`text-xs font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                CBSE Class 10 Math
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700"
              }`}>
                {activeChapterData.weightage}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
              Chapter {activeChapterData.chapterNo}: {activeChapterData.title}
            </h2>
            <p className={`text-xs mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {activeChapterData.oneLiner}
            </p>
          </div>
        </div>

        {/* Action Controls & Chapter Dropdown */}
        <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
          <div className="relative">
            <select
              value={currentChapterNo}
              onChange={(e) => handleChapterSelect(Number(e.target.value))}
              className={`text-xs font-bold py-2 pl-3 pr-8 rounded-xl border outline-none cursor-pointer transition-all appearance-none ${
                isDark 
                  ? "bg-slate-900 border-white/15 text-white hover:border-emerald-500/50" 
                  : "bg-white border-slate-300 text-slate-900 hover:border-emerald-600 shadow-2xs"
              }`}
            >
              {MATH_CHAPTER_CONCEPTS.map(c => (
                <option key={c.chapterNo} value={c.chapterNo} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                  Ch {c.chapterNo}: {c.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xs opacity-60">
              ▼
            </div>
          </div>

          {onOpenQuestions && (
            <button
              onClick={onOpenQuestions}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <span>Practice Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isDark 
                  ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/5" 
                  : "border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
              title="Close Concept Explainer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. REAL-WORLD INTUITIVE ANALOGY STRIP */}
      <div className={`px-6 py-4 border-b flex items-start gap-3.5 ${
        isDark ? "bg-amber-500/[0.07] border-amber-500/15 text-amber-200" : "bg-amber-50/80 border-amber-200 text-amber-950"
      }`}>
        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${isDark ? "bg-amber-500/20 text-amber-400" : "bg-amber-100 text-amber-800"}`}>
          <Lightbulb className="w-4 h-4" />
        </div>
        <div className="text-xs space-y-1">
          <h4 className="font-black tracking-wide uppercase text-[11px] flex items-center gap-1.5">
            <span>Easy Real-Life Analogy:</span>
            <span className="font-bold underline decoration-amber-500/50">{activeChapterData.analogyTitle}</span>
          </h4>
          <p className="leading-relaxed opacity-95">
            {activeChapterData.analogyContent}
          </p>
        </div>
      </div>

      {/* 3. SECTION NAVIGATION PILLS */}
      {activeChapterData.sections.length > 1 && (
        <div className={`px-6 py-2.5 border-b flex items-center gap-2 overflow-x-auto no-scrollbar ${
          isDark ? "bg-black/40 border-white/5" : "bg-slate-50 border-slate-200"
        }`}>
          {activeChapterData.sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSectionId(sec.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                activeSectionId === sec.id
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-xs"
                  : isDark
                  ? "bg-white/5 text-slate-300 hover:text-white border-white/5 hover:border-white/10"
                  : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      )}

      {/* 4. CONTENT BODY */}
      <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto leading-relaxed">
        {currentSection && (
          <div className="space-y-6 animate-fade-in">
            {/* Section Heading Card */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? "bg-white/[0.03] border-white/10" : "bg-slate-50/70 border-slate-200 shadow-2xs"
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                  Core Concept Blueprint
                </span>
              </div>
              <h3 className={`text-lg sm:text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                {currentSection.heading}
              </h3>
              {currentSection.subheading && (
                <p className={`text-xs font-semibold mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {currentSection.subheading}
                </p>
              )}
              <div className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                <PremiumMathRenderer content={currentSection.explanation} isDark={isDark} />
              </div>
            </div>

            {/* Formulas and Key Mathematical Insights */}
            {currentSection.formulasOrKeyPoints && currentSection.formulasOrKeyPoints.length > 0 && (
              <div className="space-y-3">
                <h4 className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  isDark ? "text-cyan-400" : "text-blue-800"
                }`}>
                  <Compass className="w-3.5 h-3.5" />
                  Key Formulas & Mathematical Relationships
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {currentSection.formulasOrKeyPoints.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-2xl border flex flex-col justify-between space-y-2 ${
                        isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-2xs"
                      }`}
                    >
                      <div>
                        <strong className={`text-xs font-bold block mb-1.5 ${isDark ? "text-emerald-400" : "text-emerald-800 font-black"}`}>
                          {item.title}
                        </strong>
                        <div className="text-xs font-mono py-1 leading-loose">
                          <PremiumMathRenderer content={item.content} isDark={isDark} />
                        </div>
                      </div>
                      {item.note && (
                        <p className={`text-[11px] font-sans italic pt-1 border-t border-current/10 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}>
                          💡 {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step-by-Step Problem Solving Framework */}
            {currentSection.stepByStepGuide && currentSection.stepByStepGuide.length > 0 && (
              <div className="space-y-3">
                <h4 className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  isDark ? "text-amber-400" : "text-amber-800"
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  Step-by-Step Master Method (CBSE Step-Marking Guide)
                </h4>
                <div className="space-y-2.5">
                  {currentSection.stepByStepGuide.map((step) => (
                    <div 
                      key={step.stepNo}
                      className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                        isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-2xs"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5 ${
                        isDark ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-emerald-100 text-emerald-900 font-black"
                      }`}>
                        {step.stepNo}
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <h5 className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                          {step.title}
                        </h5>
                        <div className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          <PremiumMathRenderer content={step.action} isDark={isDark} />
                        </div>
                        {step.proTip && (
                          <p className={`text-[11px] font-mono pt-1 ${isDark ? "text-emerald-400" : "text-emerald-700 font-semibold"}`}>
                            ★ Pro Tip: {step.proTip}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Examiner Traps & Silly Mistake Shield */}
            {currentSection.examinerTraps && currentSection.examinerTraps.length > 0 && (
              <div className="space-y-3">
                <h4 className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  isDark ? "text-rose-400" : "text-rose-700"
                }`}>
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                  CBSE Examiner Traps & Silly Mistake Shield
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {currentSection.examinerTraps.map((trap, tIdx) => (
                    <div 
                      key={tIdx}
                      className={`p-4 rounded-2xl border space-y-2 ${
                        isDark 
                          ? "bg-rose-950/20 border-rose-900/30 text-slate-200" 
                          : "bg-rose-50/70 border-rose-200 text-slate-800 shadow-2xs"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-rose-500 text-xs font-black uppercase font-mono tracking-wider">
                        <Flame className="w-3.5 h-3.5" />
                        Common Mistake:
                      </div>
                      <p className="text-xs font-medium leading-relaxed">
                        <PremiumMathRenderer content={trap.trap} isDark={isDark} />
                      </p>
                      <div className={`p-2.5 rounded-xl border text-xs leading-relaxed ${
                        isDark ? "bg-black/40 border-emerald-500/20 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950 font-medium"
                      }`}>
                        <strong className="block text-[10px] font-mono uppercase tracking-wider mb-0.5 text-emerald-600 dark:text-emerald-400">
                          ✓ Correct Examiner-Approved Method:
                        </strong>
                        <PremiumMathRenderer content={trap.correction} isDark={isDark} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5. FOOTER ENCOURAGEMENT */}
      <div className={`px-6 py-3.5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono ${
        isDark ? "bg-black/40 border-white/10 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
      }`}>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Complete NCERT & CBSE Rationalized Syllabus 2024-2025</span>
        </div>
        <div className="text-[11px] opacity-80">
          Tip: Master the concept first, then solve 10 questions to achieve automatic memory recall!
        </div>
      </div>
    </div>
  );
}
