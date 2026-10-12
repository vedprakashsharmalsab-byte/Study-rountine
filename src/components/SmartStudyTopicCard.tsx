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
  Smile,
  ShieldAlert,
  Layers
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
  const [activeMode, setActiveMode] = useState<"toddler" | "storyboard" | "topper" | "practice">("toddler");
  const [expandedExampleIdx, setExpandedExampleIdx] = useState<number | null>(0);
  const [isTrapRevealed, setIsTrapRevealed] = useState<boolean>(false);

  // Retrieve Toddler Story & 4-Act Storyboard
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
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-black uppercase tracking-wider border ${
              isDark ? "bg-rose-500/20 text-rose-300 border-rose-500/30" : "bg-rose-100 text-rose-800 border-rose-300"
            }`}>
              NCERT TOPIC #{topicIdx + 1}
            </span>
            <span className={`text-[11px] font-mono font-semibold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {topic.ncertSection}
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border flex items-center gap-1 ${
              isDark ? "bg-amber-500/15 text-amber-400 border-amber-500/25" : "bg-amber-100 text-amber-800 border-amber-300"
            }`}>
              <span>🎬 Visual Scenario + Class 9 Bridge</span>
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${
              isDark ? "bg-rose-500/10 text-rose-300 border-rose-500/20" : "bg-rose-50 text-rose-800 border-rose-200"
            }`}>
              🔥 Repeated Board Topic
            </span>
          </div>

          <h3 className={`text-base sm:text-lg lg:text-xl font-black tracking-tight break-words ${isDark ? "text-white" : "text-slate-900"}`}>
            {topic.topicTitle}
          </h3>

          {!isExpanded && (
            <p className={`text-xs line-clamp-1 italic break-words ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {toddlerGuide.toddlerAnalogy.hook} • {toddlerGuide.toddlerAnalogy.scenario.substring(0, 110)}...
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${
            isDark ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-emerald-100 text-emerald-800 border-emerald-300"
          }`}>
            {topic.examples.length} Solved Qs
          </span>
          <div className={`p-2 rounded-xl border shrink-0 transition-transform duration-200 ${
            isDark ? "border-white/10" : "border-slate-300"
          } ${isExpanded ? "rotate-180 bg-rose-500/20 text-rose-400" : ""}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 2. EXPANDED SMART STUDY CONTENT (ZERO BORING PARAGRAPHS) */}
      {isExpanded && (
        <div className="px-5 pb-6 sm:px-6 sm:pb-6 space-y-6 border-t border-white/10 pt-5 min-w-0">
          {/* INTERACTIVE TRUTH OR TRAP? TAP-TO-TEST CARD */}
          <div
            onClick={() => {
              playSound("reveal");
              setIsTrapRevealed(prev => !prev);
            }}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer select-none relative overflow-hidden min-w-0 ${
              isTrapRevealed
                ? isDark
                  ? "bg-gradient-to-r from-rose-950/40 via-amber-950/20 to-black border-amber-500/40 shadow-lg"
                  : "bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border-amber-300 shadow-md"
                : isDark
                ? "bg-gradient-to-r from-rose-950/30 via-black to-slate-900/60 border-rose-500/30 hover:border-amber-400/50"
                : "bg-gradient-to-r from-rose-50 to-amber-50/60 border-rose-200 hover:border-amber-400"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 min-w-0">
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                  isTrapRevealed ? "bg-amber-500 text-slate-950" : "bg-rose-500 text-white animate-pulse"
                }`}>
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-400">
                      🕹️ Interactive Challenge • Tap to Test Yourself
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {isTrapRevealed ? "Tap to Hide" : "Tap to Reveal"}
                    </span>
                  </div>
                  <h4 className={`text-xs sm:text-sm font-black break-words ${isDark ? "text-white" : "text-slate-900"}`}>
                    {toddlerGuide.truthOrTrap.question}
                  </h4>
                  <p className={`text-xs italic break-words ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Claim: &ldquo;{toddlerGuide.truthOrTrap.trapStatement}&rdquo;
                  </p>
                </div>
              </div>

              <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-lg shrink-0 border self-start sm:self-auto ${
                isTrapRevealed
                  ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                  : isDark ? "bg-white/10 text-slate-300 border-white/20" : "bg-slate-200 text-slate-600 border-slate-300"
              }`}>
                {isTrapRevealed ? "REVEALED" : "TAP TO REVEAL"}
              </span>
            </div>

            {isTrapRevealed && (
              <div className="mt-4 pt-3 border-t border-current/10 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-rose-500 text-white">
                    {toddlerGuide.truthOrTrap.isTruth ? "TRUE STATEMENT" : "EXAMINER TRAP (FALSE)"}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed font-semibold ${
                  isDark ? "text-amber-200" : "text-amber-900"
                }`}>
                  {toddlerGuide.truthOrTrap.revealExplanation}
                </p>
                <p className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-600 font-medium"}`}>
                  💡 <strong>Examiner Tip:</strong> {toddlerGuide.truthOrTrap.examinerTip}
                </p>
              </div>
            )}
          </div>

          {/* MODE SELECTOR PILLS */}
          <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border overflow-x-auto no-scrollbar sm:flex-wrap ${isDark ? "bg-black/20 border-white/5" : "bg-slate-100 border-slate-200"}`}>
            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("toddler");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "toddler"
                  ? "bg-amber-500 text-slate-950 shadow-md font-black scale-102"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>🎬 Visual Scenario Narrative</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("storyboard");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "storyboard"
                  ? "bg-rose-500 text-white shadow-md font-black scale-102"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>⚡ 4-Act NCERT Deep Dive</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("topper");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "topper"
                  ? "bg-blue-500 text-white shadow-md font-black scale-102"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>🏛️ Class 9 Bridge &amp; 5-Pt Formula</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setActiveMode("practice");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap ${
                activeMode === "practice"
                  ? "bg-emerald-500 text-slate-950 shadow-md font-black scale-102"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>🏆 Solved Board PYQs ({topic.examples.length})</span>
            </button>
          </div>

          {/* =========================================================================
              MODE 1: NCERT VISUAL SCENARIO NARRATIVE (VIVID MENTAL MODEL)
              ========================================================================= */}
          {activeMode === "toddler" && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn min-w-0">
              {/* 1. CINEMATIC SCENE ANCHOR (BREATHABLE, SPACIOUS, MULTI-BEAT) */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden min-w-0 shadow-xl transition-all ${
                  isDark
                    ? "bg-gradient-to-br from-amber-950/30 via-[#0d1424] to-black border-amber-500/30"
                    : "bg-gradient-to-br from-amber-50/80 via-orange-50/30 to-yellow-50/50 border-amber-200/80"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center text-xl font-black shrink-0 shadow-lg shadow-amber-500/20">
                      🎬
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 inline-block">
                        Visual Scenario Anchor • Mental Model
                      </span>
                      <h4 className={`text-base sm:text-lg font-black tracking-tight mt-1 ${isDark ? "text-white" : "text-slate-950"}`}>
                        {toddlerGuide.toddlerAnalogy.hook}
                      </h4>
                    </div>
                  </div>
                  {topic.ncertSection && (
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-xl self-start sm:self-auto ${
                      isDark ? "bg-white/5 text-amber-300 border border-white/10" : "bg-white text-amber-900 border border-amber-200"
                    }`}>
                      📖 {topic.ncertSection.split("(")[0].trim()}
                    </span>
                  )}
                </div>

                {/* MULTI-PARAGRAPH NARRATIVE BEATS */}
                <div className="pt-6 space-y-4">
                  {toddlerGuide.toddlerAnalogy.scenario.split("\n\n").filter(p => p.trim().length > 0).map((para, pIdx) => (
                    <div
                      key={pIdx}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        isDark
                          ? "bg-white/[0.02] border-white/5 hover:border-amber-500/20"
                          : "bg-white/80 border-amber-100 hover:border-amber-300"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono font-black shrink-0 mt-0.5">
                          {pIdx + 1}
                        </span>
                        <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose font-medium break-words flex-1 ${
                          isDark ? "text-slate-200" : "text-slate-800"
                        }`}>
                          {para}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. THE CORE INTUITIVE MENTAL MODEL ("IN PLAIN ENGLISH") */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border relative overflow-hidden transition-all shadow-lg ${
                  isDark
                    ? "bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-amber-500/40"
                    : "bg-gradient-to-r from-amber-100/70 via-orange-50 to-white border-amber-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                    💡
                  </div>
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-black uppercase tracking-wider text-amber-400">
                        The Intuitive Mental Model • In Plain English
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base font-bold leading-relaxed ${isDark ? "text-amber-100" : "text-amber-950"}`}>
                      {toddlerGuide.toddlerAnalogy.moralOrAha}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. FULL TOPIC DEEP-DIVE: CORE NCERT PRINCIPLES */}
              {topic.corePrinciples && topic.corePrinciples.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-base">
                        📖
                      </span>
                      <div>
                        <h4 className={`text-sm sm:text-base font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                          Full Topic Deep-Dive: Core NCERT Principles
                        </h4>
                        <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          Every foundational law, constitutional article & factual cause explained with zero skipped details.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {topic.corePrinciples.length} Principles
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5">
                    {topic.corePrinciples.map((principle, prIdx) => {
                      const hasColon = principle.includes(":");
                      const titlePart = hasColon ? principle.split(":")[0].trim() : `Key Principle ${prIdx + 1}`;
                      const bodyPart = hasColon ? principle.substring(principle.indexOf(":") + 1).trim() : principle;

                      return (
                        <div
                          key={prIdx}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                            isDark
                              ? "bg-white/[0.02] border-white/10 hover:border-blue-500/30"
                              : "bg-slate-50/80 border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">
                              {String(prIdx + 1).padStart(2, "0")}
                            </div>
                            <div className="space-y-1 flex-1 min-w-0">
                              <span className={`text-xs sm:text-sm font-black block tracking-tight ${isDark ? "text-blue-300" : "text-blue-950"}`}>
                                {titlePart}
                              </span>
                              <p className={`text-xs sm:text-sm leading-relaxed font-medium break-words ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                {bodyPart}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. ESSENTIAL NCERT TECHNICAL DEFINITIONS (IF AVAILABLE) */}
              {topic.keyDefinitions && topic.keyDefinitions.length > 0 && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                      📚
                    </span>
                    <h4 className={`text-xs sm:text-sm font-black tracking-tight uppercase tracking-wider ${isDark ? "text-emerald-300" : "text-emerald-950"}`}>
                      Essential NCERT Technical Vocabulary
                    </h4>
                  </div>
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

              {/* 5. CAST OF CHARACTERS / HISTORICAL & INSTITUTIONAL FORCES */}
              {toddlerGuide.toddlerAnalogy.characters.length > 0 && (
                <div className="space-y-3">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    <span>🎭 The Key Historical &amp; Institutional Forces</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {toddlerGuide.toddlerAnalogy.characters.map((char, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${
                          isDark ? "bg-white/[0.02] border-white/10 hover:border-amber-500/30" : "bg-slate-50 border-slate-200 hover:border-amber-300"
                        }`}
                      >
                        <span className="text-3xl shrink-0 mt-0.5">{char.emoji}</span>
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

              {/* 6. FOUNDATIONAL BRIDGE & BOARD HOTSPOT (TWO DISTINCT CARDS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* CLASS 9 FOUNDATIONAL BRIDGE */}
                {(toddlerGuide.toddlerAnalogy.class9Connection || (topic as any).class9Bridge) && (
                  <div
                    className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-950/30 via-indigo-950/20 to-black border-blue-500/30 text-blue-200"
                        : "bg-gradient-to-r from-blue-50 to-indigo-50/50 border-blue-200 text-blue-950"
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">🏛️</span>
                    <div className="space-y-1 min-w-0 flex-1">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-blue-400 block">
                        Connecting from Past • Class 9 NCERT Foundation Bridge
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed font-medium">
                        {toddlerGuide.toddlerAnalogy.class9Connection || (topic as any).class9Bridge?.connectionExplanation}
                      </p>
                    </div>
                  </div>
                )}

                {/* REPEATED BOARD HOTSPOT BANNER */}
                {toddlerGuide.toddlerAnalogy.boardHotspot && (
                  <div
                    className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 ${
                      isDark
                        ? "bg-rose-950/20 border-rose-500/30 text-rose-200"
                        : "bg-rose-50 border-rose-200 text-rose-950"
                    }`}
                  >
                    <span className="text-2xl shrink-0 mt-0.5">🔥</span>
                    <div className="space-y-1 min-w-0 flex-1">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-400 block">
                        CBSE Board Examination Trend
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed font-medium">
                        {toddlerGuide.toddlerAnalogy.boardHotspot}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 7. HIGH-RISK EXAMINER TRAP & WARNING CARD */}
              {topic.commonMistakesWarning && (
                <div
                  className={`p-5 rounded-2xl border relative overflow-hidden transition-all ${
                    isDark
                      ? "bg-rose-950/20 border-rose-500/40 text-rose-200"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-400 block">
                        High-Risk Board Examiner Trap • Avoid Mark Deduction
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed font-medium">
                        {topic.commonMistakesWarning}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. THE GOLDEN TAKEAWAY FORMULA CARD */}
              <div
                className={`p-5 sm:p-6 rounded-3xl border text-center relative overflow-hidden shadow-md transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border-amber-500/40"
                    : "bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-amber-300"
                }`}
              >
                <span className="text-2xl block mb-2">🏆</span>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-500 block mb-1">
                  The Golden Takeaway Formula
                </span>
                <p className={`text-sm sm:text-base font-black max-w-2xl mx-auto leading-relaxed ${
                  isDark ? "text-amber-200" : "text-amber-950"
                }`}>
                  {toddlerGuide.toddlerAnalogy.moralOrAha}
                </p>
              </div>
            </div>
          )}

          {/* =========================================================================
              MODE 2: GRAPHIC STORYBOARD (REPLACES BORING PARAGRAPHS COMPLETELY!)
              ========================================================================= */}
          {activeMode === "storyboard" && (
            <div className="space-y-6 animate-fadeIn">
              {/* 4 ACTION SCENES (THE SPARK -> THE MECHANISM -> THE TWIST -> THE BOARD KEY) */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> 4-Act Storyboard Breakdown (Zero Boring Paragraphs)
                </span>

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
                          <span className="text-[10px] font-mono text-slate-500 font-bold">
                            Act #{scene.sceneNo}
                          </span>
                        </div>

                        <h4 className={`text-sm sm:text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                          {scene.headline}
                        </h4>

                        <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {scene.narrative}
                        </p>
                      </div>

                      <div className={`p-2.5 rounded-xl border text-[11px] font-mono font-bold ${
                        isDark ? "bg-black/30 border-white/5 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                      }`}>
                        🎯 <strong>CBSE Key:</strong> {scene.boardKeyword}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CORE CONCEPTUAL PRINCIPLES CHECKLIST */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Core Conceptual Principles ({topic.corePrinciples.length})
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {topic.corePrinciples.map((cp, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                        isDark ? "bg-emerald-950/10 border-emerald-500/20" : "bg-emerald-50/50 border-emerald-200"
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className={`text-xs leading-relaxed font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        {cp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY DEFINITIONS & TERMINOLOGY */}
              {topic.keyDefinitions && topic.keyDefinitions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Tag className="w-4 h-4" /> Must-Know Board Terminology &amp; Keywords ({topic.keyDefinitions.length})
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topic.keyDefinitions.map((def, dIdx) => (
                      <div
                        key={dIdx}
                        className={`p-3.5 rounded-2xl border space-y-1 ${
                          isDark ? "bg-amber-950/10 border-amber-500/20" : "bg-amber-50/40 border-amber-200"
                        }`}
                      >
                        <span className="text-xs font-black text-amber-400 font-mono tracking-wide block">
                          {def.term}
                        </span>
                        <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          {def.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================================================
              MODE 3: TOPPER 5-POINT FORMULA
              ========================================================================= */}
          {activeMode === "topper" && (
            <div className="space-y-4 animate-fadeIn">
              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? "bg-blue-950/20 border-blue-500/30" : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Standard CBSE 5-Mark High-Score Answer Blueprint
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Write these 5 structured points directly in your answer sheet for any 5-mark question from this topic to guarantee full marks.
                </p>
              </div>

              {/* CLASS 9 PRIOR KNOWLEDGE ANCHOR */}
              {(toddlerGuide.toddlerAnalogy.class9Connection || (topic as any).class9Bridge) && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    isDark
                      ? "bg-indigo-950/20 border-indigo-500/30 text-indigo-200"
                      : "bg-indigo-50/70 border-indigo-200 text-indigo-950"
                  }`}
                >
                  <span className="text-xl shrink-0 mt-0.5">🏛️</span>
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

              <div className="space-y-2.5">
                {[
                  { title: "Point 1: Introduction & Historical/Conceptual Context", content: toddlerGuide.toddlerAnalogy.hook },
                  { title: "Point 2: Core Provisions & Structural Mechanisms", content: topic.corePrinciples[0] || "Key fundamental mechanisms laid down by NCERT." },
                  { title: "Point 3: Direct Socio-Economic or Political Impact", content: topic.corePrinciples[1] || "Specific outcomes on different social and economic classes." },
                  { title: "Point 4: Critical Counter-Perspective or Limitations", content: topic.commonMistakesWarning || "Contradictions, limitations, or resulting conflicts." },
                  { title: "Point 5: Board Exam Conclusion & Significance", content: topic.corePrinciples[2] || "Long-term historical legacy or modern democratic significance." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-black">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-blue-400 font-mono">
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              MODE 4: SOLVED BOARD QUESTIONS
              ========================================================================= */}
          {activeMode === "practice" && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Official CBSE Board Questions ({topic.examples.length} Solved)
              </span>

              <div className="space-y-3">
                {topic.examples.map((ex, exIdx) => {
                  const isExOpen = expandedExampleIdx === exIdx;
                  return (
                    <div
                      key={ex.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div
                        onClick={() => {
                          playSound("click");
                          setExpandedExampleIdx(isExOpen ? null : exIdx);
                        }}
                        className="p-4 cursor-pointer flex items-center justify-between gap-3"
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
                            {ex.marks} Mark{ex.marks > 1 ? "s" : ""} • {ex.type}
                          </span>
                          <h5 className={`text-xs sm:text-sm font-bold w-full mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                            {ex.question}
                          </h5>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isExOpen ? "rotate-180" : ""}`} />
                      </div>

                      {isExOpen && (
                        <div className={`px-4 pb-4 pt-2 space-y-3 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
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
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="space-y-1.5">
                            <span className={`text-[10px] font-mono uppercase font-bold block ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                              Topper Answer Sheet / Official Marking Rubric:
                            </span>
                            {ex.solutionPoints.map((pt, pIdx) => (
                              <div key={pIdx} className="text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                                <span className="text-emerald-400 font-bold shrink-0">{pIdx + 1}.</span>
                                <span className={isDark ? "text-slate-300" : "text-slate-700"}>{pt}</span>
                              </div>
                            ))}
                          </div>

                          {ex.examinerTrap && (
                            <div className={`p-3 rounded-xl border text-xs space-y-1 ${
                              isDark ? "bg-rose-950/20 border-rose-500/30" : "bg-rose-50 border-rose-200"
                            }`}>
                              <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-rose-400" : "text-rose-600"}`}>
                                <AlertTriangle className="w-3.5 h-3.5" /> Examiner Trap:
                              </span>
                              <p className={isDark ? "text-rose-200/90" : "text-rose-900"}>{ex.examinerTrap}</p>
                            </div>
                          )}

                          {ex.keyTakeaway && (
                            <div className={`p-3 rounded-xl border text-xs ${
                              isDark ? "bg-blue-950/20 border-blue-500/30" : "bg-blue-50 border-blue-200"
                            }`}>
                              <span className={`font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>💡 Key Board Takeaway: </span>
                              <span className={isDark ? "text-slate-300" : "text-slate-700"}>{ex.keyTakeaway}</span>
                            </div>
                          )}
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
