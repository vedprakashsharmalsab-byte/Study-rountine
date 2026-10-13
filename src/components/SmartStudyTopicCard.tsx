"use client";

import React, { useState } from "react";
import { areteAudio } from "@/lib/audio";
import {
  ChevronDown,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Award,
  Zap,
  Tag,
  ListOrdered,
  HelpCircle,
  Check,
  X,
  Volume2,
  ArrowRight,
  ShieldAlert,
  Layers,
  FileText,
  Clock,
  Compass,
  Lightbulb,
  CheckSquare,
  Bookmark
} from "lucide-react";
import type { SSTConceptTopic } from "@/data/sstConceptsData";
import { getToddlerGuideForTopic } from "@/data/toddlerAnalogiesData";

interface SmartStudyTopicCardProps {
  topic: SSTConceptTopic;
  topicIdx: number;
  isDark: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const SmartStudyTopicCard = React.memo(function SmartStudyTopicCard({
  topic,
  topicIdx,
  isDark,
  isExpanded,
  onToggle
}: SmartStudyTopicCardProps) {
  // Modes: masterclass (default authoritative view), blueprint (5-pt formula), visual (analogy), pyqs (solved questions)
  const [activeMode, setActiveMode] = useState<"masterclass" | "blueprint" | "visual" | "pyqs">("masterclass");
  const [expandedExampleIdx, setExpandedExampleIdx] = useState<number | null>(0);
  const [isTrapRevealed, setIsTrapRevealed] = useState<boolean>(false);

  // Retrieve Mental Model, 4-Act Storyboard & Truth/Trap challenge
  const toddlerGuide = getToddlerGuideForTopic(
    topic.id,
    topic.topicTitle,
    topic.discipline,
    topic.chapterNo,
    topic.ncertSummary,
    topic.corePrinciples,
    topic.commonMistakesWarning
  );

  // Audio synthesizer for micro-interactions
  const playSound = (type: "pop" | "reveal" | "click") => {
    areteAudio.play(type);
  };

  // Discipline styling tokens
  const getDisciplineTheme = (discipline: string) => {
    switch (discipline) {
      case "History":
        return {
          badge: isDark ? "bg-rose-500/20 text-rose-300 border-rose-500/30" : "bg-rose-100 text-rose-800 border-rose-300",
          accent: "text-rose-400",
          border: isDark ? "border-rose-500/30" : "border-rose-300",
          bgLight: isDark ? "bg-rose-950/20" : "bg-rose-50/70",
          glow: "from-rose-500/10"
        };
      case "Geography":
        return {
          badge: isDark ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-emerald-100 text-emerald-800 border-emerald-300",
          accent: "text-emerald-400",
          border: isDark ? "border-emerald-500/30" : "border-emerald-300",
          bgLight: isDark ? "bg-emerald-950/20" : "bg-emerald-50/70",
          glow: "from-emerald-500/10"
        };
      case "Political Science":
        return {
          badge: isDark ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-blue-100 text-blue-800 border-blue-300",
          accent: "text-blue-400",
          border: isDark ? "border-blue-500/30" : "border-blue-300",
          bgLight: isDark ? "bg-blue-950/20" : "bg-blue-50/70",
          glow: "from-blue-500/10"
        };
      default: // Economics
        return {
          badge: isDark ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-purple-100 text-purple-800 border-purple-300",
          accent: "text-purple-400",
          border: isDark ? "border-purple-500/30" : "border-purple-300",
          bgLight: isDark ? "bg-purple-950/20" : "bg-purple-50/70",
          glow: "from-purple-500/10"
        };
    }
  };

  const theme = getDisciplineTheme(topic.discipline);

  return (
    <div
      className={`perf-card rounded-3xl border transition-all overflow-hidden ${
        isDark
          ? "bg-[#0b0f19] border-white/10 hover:border-white/20 shadow-xl"
          : "bg-white border-slate-200 hover:border-rose-300 shadow-md"
      }`}
    >
      {/* 1. TOPIC HEADER BAR */}
      <div
        onClick={() => {
          playSound("click");
          onToggle();
        }}
        className={`p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors select-none min-w-0 ${
          isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"
        }`}
      >
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-black uppercase tracking-wider border ${theme.badge}`}>
              {topic.discipline} ? TOPIC #{topicIdx + 1}
            </span>
            <span className={`text-[11px] font-mono font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {topic.ncertSection}
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border flex items-center gap-1 ${
              isDark ? "bg-amber-500/15 text-amber-400 border-amber-500/25" : "bg-amber-100 text-amber-800 border-amber-300"
            }`}>
              <Sparkles className="w-3 h-3" />
              <span>HIGH YIELD</span>
            </span>
          </div>

          <h3 className={`text-base sm:text-lg font-black tracking-tight leading-snug break-words ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {topic.topicTitle}
          </h3>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
            <span className={`font-mono text-[11px] flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              <BookOpen className="w-3.5 h-3.5 text-rose-400" />
              <span>{topic.corePrinciples.length} Core Principles</span>
            </span>
            {topic.keyDefinitions && topic.keyDefinitions.length > 0 && (
              <span className={`font-mono text-[11px] flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <Tag className="w-3.5 h-3.5 text-emerald-400" />
                <span>{topic.keyDefinitions.length} Key Terms</span>
              </span>
            )}
            <span className={`font-mono text-[11px] flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{topic.examples.length} Solved Board PYQs</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <span className={`text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl border transition-all ${
            isExpanded
              ? "bg-rose-500 text-white border-rose-400 shadow-sm"
              : isDark ? "bg-white/5 text-slate-300 border-white/10" : "bg-slate-100 text-slate-700 border-slate-200"
          }`}>
            {isExpanded ? "Collapse" : "Study Concept"}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform ${
            isExpanded ? "rotate-180 bg-rose-500/20 border-rose-500/40 text-rose-400" : isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 2. EXPANDED CONTENT BODY */}
      {isExpanded && (
        <div className={`p-5 sm:p-7 border-t space-y-6 ${isDark ? "border-white/10 bg-[#090d16]" : "border-slate-200 bg-slate-50/50"}`}>
          {/* INTUITIVE MODE SELECTOR TABS */}
          <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border overflow-x-auto no-scrollbar sm:flex-wrap ${
            isDark ? "bg-black/30 border-white/10" : "bg-slate-200/70 border-slate-300"
          }`}>
            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("masterclass");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "masterclass"
                  ? "bg-rose-500 text-white shadow-md font-black scale-102"
                  : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>NCERT Masterclass (Default)</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("blueprint");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "blueprint"
                  ? "bg-blue-600 text-white shadow-md font-black scale-102"
                  : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>5-Point Board Blueprint</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("visual");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "visual"
                  ? "bg-amber-500 text-slate-950 shadow-md font-black scale-102"
                  : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Visual Mental Model & Analogy</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("pyqs");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "pyqs"
                  ? "bg-emerald-500 text-slate-950 shadow-md font-black scale-102"
                  : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950 font-semibold"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Solved Board PYQs ({topic.examples.length})</span>
            </button>
          </div>

          {/* =========================================================================
              MODE 1: NCERT MASTERCLASS (AUTHORITATIVE TEXTBOOK DEEP DIVE - DEFAULT)
              ========================================================================= */}
          {activeMode === "masterclass" && (
            <div className="space-y-6 sm:space-y-7 animate-fadeIn min-w-0">
              {/* A. CONTEXT & EXECUTIVE SUMMARY HERO */}
              <div
                className={`p-5 sm:p-6 rounded-3xl border relative overflow-hidden transition-all ${
                  isDark
                    ? "bg-gradient-to-br from-rose-950/30 via-[#0d1424] to-black border-rose-500/30"
                    : "bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40 border-rose-200"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-current/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-md shadow-rose-500/20">
                      ?
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-rose-500 text-white inline-block">
                        Executive Historical Context
                      </span>
                      <h4 className={`text-sm sm:text-base font-black tracking-tight mt-0.5 ${isDark ? "text-white" : "text-slate-950"}`}>
                        {toddlerGuide.toddlerAnalogy.hook}
                      </h4>
                    </div>
                  </div>
                  {topic.ncertSection && (
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-xl self-start sm:self-auto border ${
                      isDark ? "bg-white/5 text-rose-300 border-white/10" : "bg-white text-rose-900 border-rose-200"
                    }`}>
                      {topic.ncertSection}
                    </span>
                  )}
                </div>

                {/* B. THE FULL NCERT AUTHORITATIVE HISTORICAL NARRATIVE */}
                <div className="pt-5 space-y-4">
                  <span className={`text-[11px] font-mono font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? "text-rose-400" : "text-rose-700"
                  }`}>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Authoritative NCERT Textbook Masterclass Narrative:</span>
                  </span>
                  
                  <div className={`p-5 sm:p-6 rounded-2xl border space-y-3.5 text-xs sm:text-sm leading-relaxed ${
                    isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800"
                  }`}>
                    {topic.ncertSummary.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx} className="leading-relaxed font-normal">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* C. CORE PRINCIPLES & HISTORICAL MECHANISMS */}
              <div className="space-y-3">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                  isDark ? "text-rose-400" : "text-rose-700"
                }`}>
                  <BookOpen className="w-4 h-4" /> Core Historical Milestones & Mechanisms ({topic.corePrinciples.length})
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {topic.corePrinciples.map((principle, idx) => (
                    <div
                      key={idx}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                        isDark ? "bg-white/[0.02] border-white/10 hover:border-white/20" : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
                      }`}
                    >
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <p className={`text-xs sm:text-sm leading-relaxed font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {principle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* D. KEY DEFINITIONS & TERMINOLOGY */}
              {topic.keyDefinitions && topic.keyDefinitions.length > 0 && (
                <div className="space-y-3">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                    isDark ? "text-emerald-400" : "text-emerald-700"
                  }`}>
                    <Tag className="w-4 h-4" /> Crucial Historical Vocabulary & Exact NCERT Definitions
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {topic.keyDefinitions.map((def, defIdx) => (
                      <div
                        key={defIdx}
                        className={`p-4 rounded-2xl border transition-all ${
                          isDark
                            ? "bg-emerald-950/10 border-emerald-500/20 hover:border-emerald-500/40"
                            : "bg-emerald-50/50 border-emerald-200 hover:border-emerald-300"
                        }`}
                      >
                        <span className="px-2.5 py-0.5 rounded-lg text-xs font-black font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 inline-block mb-2">
                          {def.term}
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {def.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* E. 4-ACT CHRONOLOGICAL STORYBOARD */}
              {toddlerGuide.storyScenes && toddlerGuide.storyScenes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                      isDark ? "text-amber-400" : "text-amber-700"
                    }`}>
                      <Layers className="w-4 h-4" /> Chronological 4-Act Storyboard Breakdown
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark ? "bg-white/5 text-slate-400 border-white/10" : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}>
                      Cause ? Escalation ? Climax ? Impact
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {toddlerGuide.storyScenes.map((scene) => (
                      <div
                        key={scene.sceneNo}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 relative overflow-hidden ${
                          isDark ? "bg-[#0d1424] border-white/10 hover:border-white/20" : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{scene.emoji}</span>
                              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                {scene.badge}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              Act {scene.sceneNo} of 4
                            </span>
                          </div>
                          <h5 className={`text-xs sm:text-sm font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                            {scene.headline}
                          </h5>
                          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {scene.narrative}
                          </p>
                        </div>
                        <div className={`pt-2.5 border-t flex items-center justify-between gap-2 text-[11px] font-mono ${
                          isDark ? "border-white/10" : "border-slate-100"
                        }`}>
                          <span className={isDark ? "text-slate-400" : "text-slate-500"}>CBSE Key Term:</span>
                          <span className="font-bold text-rose-400 font-mono">
                            {scene.boardKeyword}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* F. EXAMINER TRAP & TRUTH-VS-TRAP CHALLENGE */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-rose-950/30 via-red-950/20 to-black border-rose-500/40 text-rose-200"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-400 block">
                        High-Risk Board Examiner Trap & Warning
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed font-semibold mt-1">
                        {topic.commonMistakesWarning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE TRUTH OR TRAP REVEAL */}
                <div className="mt-4 pt-3 border-t border-rose-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 block">
                        Interactive Reality Check Challenge:
                      </span>
                      <p className={`text-xs italic mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        &ldquo;{toddlerGuide.truthOrTrap.trapStatement}&rdquo;
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        playSound("reveal");
                        setIsTrapRevealed(!isTrapRevealed);
                      }}
                      className={`text-[10px] font-mono font-black uppercase px-3 py-1.5 rounded-xl shrink-0 border cursor-pointer transition-all ${
                        isTrapRevealed
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                          : isDark ? "bg-white/10 text-slate-300 border-white/20 hover:bg-white/20" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {isTrapRevealed ? "? TRAP EXPLAINED" : "? TEST YOURSELF (REVEAL TRAP)"}
                    </button>
                  </div>

                  {isTrapRevealed && (
                    <div className="mt-3 pt-3 border-t border-current/10 space-y-2 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-rose-500 text-white">
                          {toddlerGuide.truthOrTrap.isTruth ? "CORRECT STATEMENT" : "EXAMINER TRAP (FALSE)"}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed font-semibold ${isDark ? "text-amber-200" : "text-amber-900"}`}>
                        {toddlerGuide.truthOrTrap.revealExplanation}
                      </p>
                      <p className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-600 font-medium"}`}>
                        ? <strong>CBSE Examiner Tip:</strong> {toddlerGuide.truthOrTrap.examinerTip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              MODE 2: 5-POINT BOARD BLUEPRINT (TOPPER FORMULA)
              ========================================================================= */}
          {activeMode === "blueprint" && (
            <div className="space-y-5 animate-fadeIn min-w-0">
              <div
                className={`p-5 rounded-2xl border ${
                  isDark
                    ? "bg-blue-950/20 border-blue-500/30 text-blue-200"
                    : "bg-blue-50/80 border-blue-200 text-blue-950"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <ListOrdered className="w-5 h-5 text-blue-400" />
                  <h4 className="text-sm font-black uppercase tracking-wider font-mono">
                    CBSE 5-Mark Board Answer Formula (Topper Sheet Template)
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Write these 5 structured points directly in your board examination answer booklet for any 5-mark question from this topic to guarantee a full 5/5 score.
                </p>
              </div>

              {/* CLASS 9 FOUNDATION LINK */}
              {(toddlerGuide.toddlerAnalogy.class9Connection || (topic as any).class9Bridge) && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                    isDark
                      ? "bg-indigo-950/20 border-indigo-500/30 text-indigo-200"
                      : "bg-indigo-50/70 border-indigo-200 text-indigo-950"
                  }`}
                >
                  <span className="text-2xl shrink-0 mt-0.5">??</span>
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[10px] font-mono font-black uppercase text-indigo-400 block tracking-wider">
                      Class 9 Prior Knowledge Foundation Anchor
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      {toddlerGuide.toddlerAnalogy.class9Connection || (topic as any).class9Bridge?.connectionExplanation}
                    </p>
                  </div>
                </div>
              )}

              {/* 5-POINT STRUCTURED FORMULA */}
              <div className="space-y-3">
                {[
                  {
                    title: "Point 1: Introduction & Historical/Conceptual Context",
                    content: toddlerGuide.toddlerAnalogy.hook || topic.ncertSummary.slice(0, 180) + "..."
                  },
                  {
                    title: "Point 2: Core Provisions & Structural Mechanisms",
                    content: topic.corePrinciples[0] || "Key fundamental mechanisms laid down by NCERT."
                  },
                  {
                    title: "Point 3: Direct Socio-Economic or Political Impact",
                    content: topic.corePrinciples[1] || topic.corePrinciples[0] || "Specific outcomes on different social and economic classes."
                  },
                  {
                    title: "Point 4: Critical Counter-Perspective or Limitations",
                    content: topic.commonMistakesWarning || "Contradictions, limitations, or resulting conflicts."
                  },
                  {
                    title: "Point 5: Board Exam Conclusion & Significance",
                    content: topic.corePrinciples[2] || topic.corePrinciples[topic.corePrinciples.length - 1] || "Long-term historical legacy or modern democratic significance."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-blue-400 font-mono">
                        {item.title}
                      </h5>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* BOARD HOTSPOT */}
              {toddlerGuide.toddlerAnalogy.boardHotspot && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                    isDark ? "bg-rose-950/20 border-rose-500/30 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-950"
                  }`}
                >
                  <span className="text-2xl shrink-0 mt-0.5">?</span>
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-400 block">
                      CBSE Board Examination Question Trend
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      {toddlerGuide.toddlerAnalogy.boardHotspot}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================================================
              MODE 3: VISUAL MENTAL MODEL & RELATABLE ANALOGY
              ========================================================================= */}
          {activeMode === "visual" && (
            <div className="space-y-6 animate-fadeIn min-w-0">
              {/* VISUAL SCENARIO ANCHOR */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border relative overflow-hidden transition-all ${
                  isDark
                    ? "bg-gradient-to-br from-amber-950/30 via-[#0d1424] to-black border-amber-500/30"
                    : "bg-gradient-to-br from-amber-50/80 via-white to-yellow-50/50 border-amber-200"
                }`}
              >
                <div className="flex items-center gap-3 pb-4 border-b border-amber-500/20">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl font-black shrink-0 shadow-md">
                    ?
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 inline-block">
                      Visual Analogy Anchor ? Mental Model
                    </span>
                    <h4 className={`text-sm sm:text-base font-black tracking-tight mt-0.5 ${isDark ? "text-white" : "text-slate-950"}`}>
                      {toddlerGuide.toddlerAnalogy.hook}
                    </h4>
                  </div>
                </div>

                <div className="pt-5 space-y-3.5">
                  {toddlerGuide.toddlerAnalogy.scenario.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx} className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {para}
                    </p>
                  ))}
                </div>

                {toddlerGuide.toddlerAnalogy.moralOrAha && (
                  <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center gap-2">
                    <span className="text-lg">??</span>
                    <p className={`text-xs font-semibold ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                      <strong>Mental Anchor:</strong> {toddlerGuide.toddlerAnalogy.moralOrAha}
                    </p>
                  </div>
                )}
              </div>

              {/* CAST OF CHARACTERS / HISTORICAL FORCES */}
              {toddlerGuide.toddlerAnalogy.characters && toddlerGuide.toddlerAnalogy.characters.length > 0 && (
                <div className="space-y-3">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    <span>? Key Historical &amp; Institutional Forces</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {toddlerGuide.toddlerAnalogy.characters.map((char, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                          isDark ? "bg-white/[0.02] border-white/10 hover:border-amber-500/30" : "bg-slate-50 border-slate-200 hover:border-amber-300"
                        }`}
                      >
                        <span className="text-2xl shrink-0 mt-0.5">{char.emoji}</span>
                        <div className="min-w-0">
                          <span className={`text-xs sm:text-sm font-black block truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                            {char.name}
                          </span>
                          <p className={`text-xs leading-relaxed mt-1 ${isDark ? "text-slate-400" : "text-slate-600 font-medium"}`}>
                            {char.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* GOLDEN TAKEAWAY FORMULA */}
              <div
                className={`p-5 rounded-2xl border text-center relative overflow-hidden transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border-amber-500/40"
                    : "bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-amber-300"
                }`}
              >
                <span className="text-2xl block mb-1">?</span>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-500 block mb-1">
                  The Golden Takeaway Formula
                </span>
                <p className={`text-xs sm:text-sm font-black max-w-xl mx-auto leading-relaxed ${
                  isDark ? "text-amber-200" : "text-amber-950"
                }`}>
                  {toddlerGuide.toddlerAnalogy.moralOrAha || toddlerGuide.toddlerAnalogy.hook}
                </p>
              </div>
            </div>
          )}

          {/* =========================================================================
              MODE 4: SOLVED BOARD QUESTIONS (PYQS)
              ========================================================================= */}
          {activeMode === "pyqs" && (
            <div className="space-y-4 animate-fadeIn min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Official CBSE Board Questions ({topic.examples.length} Solved)
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Click question to reveal solution
                </span>
              </div>

              <div className="space-y-3">
                {topic.examples.map((ex, exIdx) => {
                  const isExOpen = expandedExampleIdx === exIdx;
                  return (
                    <div
                      key={ex.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-2xs"
                      }`}
                    >
                      <div
                        onClick={() => {
                          playSound("click");
                          setExpandedExampleIdx(isExOpen ? null : exIdx);
                        }}
                        className="p-4 cursor-pointer flex items-center justify-between gap-3 select-none"
                      >
                        <div className="flex flex-wrap items-center gap-2 flex-1">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            isDark ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-emerald-100 text-emerald-800 border-emerald-300"
                          }`}>
                            {ex.level}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            isDark ? "bg-amber-500/15 text-amber-400 border-amber-500/25" : "bg-amber-100 text-amber-900 border-amber-300"
                          }`}>
                            {ex.marks} Mark{ex.marks > 1 ? "s" : ""} ? {ex.type}
                          </span>
                          <h5 className={`text-xs sm:text-sm font-bold w-full mt-1.5 leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                            {ex.question}
                          </h5>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isExOpen ? "rotate-180" : ""}`} />
                      </div>

                      {isExOpen && (
                        <div className={`px-4 pb-4 pt-2 space-y-3.5 border-t ${isDark ? "border-white/10 bg-black/20" : "border-slate-100 bg-slate-50"}`}>
                          {/* MCQ OPTIONS */}
                          {ex.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
                              {ex.options.map((opt, optIdx) => (
                                <div
                                  key={optIdx}
                                  className={`p-2.5 rounded-xl border text-xs font-mono ${
                                    ex.correctOption === optIdx
                                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold"
                                      : isDark ? "bg-black/20 border-white/5 text-slate-400" : "bg-white border-slate-200 text-slate-600"
                                  }`}
                                >
                                  {String.fromCharCode(65 + optIdx)}) {opt}
                                  {ex.correctOption === optIdx && " ? (Correct Answer)"}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* TOPPER SOLUTION RUBRIC */}
                          <div className="space-y-1.5">
                            <span className={`text-[10px] font-mono uppercase font-black block tracking-wider ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                              Official Topper Marking Rubric &amp; Answer Points:
                            </span>
                            <div className="space-y-1.5">
                              {ex.solutionPoints.map((pt, pIdx) => (
                                <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span className={isDark ? "text-slate-200" : "text-slate-800"}>
                                    {pt}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* EXAMINER TRAP & KEY TAKEAWAY */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {ex.examinerTrap && (
                              <div className={`p-3 rounded-xl border text-xs ${
                                isDark ? "bg-rose-950/20 border-rose-500/30 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-900"
                              }`}>
                                <strong>? Examiner Trap:</strong> {ex.examinerTrap}
                              </div>
                            )}
                            {ex.keyTakeaway && (
                              <div className={`p-3 rounded-xl border text-xs ${
                                isDark ? "bg-amber-950/20 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                              }`}>
                                <strong>?? Key Takeaway:</strong> {ex.keyTakeaway}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default SmartStudyTopicCard;
