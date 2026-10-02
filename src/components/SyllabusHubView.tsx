"use client";

import React, { useState } from "react";
import {
  CBSE_OFFICIAL_SYLLABUS_2026_27,
  type SubjectSyllabusData,
  type UnitWeightage,
  type ChapterWeightage,
  type PracticalExperiment,
  type MapWorkItem,
  type ExcludedTopic
} from "@/data/cbseOfficialSyllabus2027";
import { CBSE_SUBJECTS, type Subject } from "@/data/cbseData";
import {
  BookOpen,
  AlertTriangle,
  FlaskConical,
  MapPin,
  CheckCircle2,
  Square,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  Compass,
  FileText,
  Clock,
  Layers,
  Info,
  BarChart3,
  Flame,
  Zap,
  Target
} from "lucide-react";

interface SyllabusHubViewProps {
  isDark: boolean;
  selectedSubjectId: string;
  onSelectSubjectId: (id: string) => void;
  completedTopicIds: Record<string, boolean>;
  onToggleTopic: (topicId: string) => void;
  expandedChapterIds: Record<string, boolean>;
  onToggleChapterExpand: (chapterId: string) => void;
  playSound?: (type: "done" | "undone" | "flip" | "levelup" | "bell" | "click") => void;
}

export function SyllabusHubView({
  isDark,
  selectedSubjectId,
  onSelectSubjectId,
  completedTopicIds,
  onToggleTopic,
  expandedChapterIds,
  onToggleChapterExpand,
  playSound
}: SyllabusHubViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<"marking_scheme" | "units" | "topics" | "exclusions" | "practicals_map" | "assessment">("marking_scheme");
  const [priorityFilter, setPriorityFilter] = useState<string>("All");
  const [practicalFilter, setPracticalFilter] = useState<string>("All");

  // Lookup official syllabus data; fallback to maths if not directly mapped
  const syllabusMeta: SubjectSyllabusData | undefined =
    CBSE_OFFICIAL_SYLLABUS_2026_27[selectedSubjectId] ||
    (selectedSubjectId.includes("math") ? CBSE_OFFICIAL_SYLLABUS_2026_27.maths : undefined);

  // Lookup chapter hierarchy from CBSE_SUBJECTS
  const currentSubjectObj = CBSE_SUBJECTS.find((s) => s.id === selectedSubjectId) || CBSE_SUBJECTS[0];

  const handleSubTabChange = (tab: "marking_scheme" | "units" | "topics" | "exclusions" | "practicals_map" | "assessment") => {
    playSound?.("click");
    setActiveSubTab(tab);
  };

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in pb-12">
      {/* =================================================================== */}
      {/* 1. HERO HEADER: CBSE 2026-2027 OFFICIAL SYLLABUS DIRECTORY           */}
      {/* =================================================================== */}
      <div
        className={`p-5 sm:p-7 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/40 border-white/10 shadow-2xl"
            : "bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/50 border-indigo-100 shadow-xl"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> CBSE Official Curriculum 2026–2027
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                NEP 2020 & NCF-SE 2023 Aligned
              </span>
            </div>
            <h2 className={`text-lg sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              CBSE Class 10 Syllabus Command Hub
            </h2>
            <p className={`text-xs sm:text-sm max-w-3xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Direct synthesis from the official CBSE 2026-27 curriculum documents. Complete unit marks, cognitive taxonomy, 14 science practicals, map work catalogue, and official rationalization warnings.
            </p>
          </div>

          {/* QUICK METRICS PILL */}
          {syllabusMeta && (
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
              <div
                className={`p-3 rounded-2xl border text-center min-w-[90px] ${
                  isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}
              >
                <div className="text-[10px] uppercase font-bold font-mono opacity-60 text-slate-400">Code</div>
                <div className={`text-sm font-black font-mono ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                  {syllabusMeta.code}
                </div>
              </div>
              <div
                className={`p-3 rounded-2xl border text-center min-w-[90px] ${
                  isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}
              >
                <div className="text-[10px] uppercase font-bold font-mono opacity-60 text-slate-400">Theory / Int</div>
                <div className={`text-sm font-black font-mono ${isDark ? "text-white" : "text-slate-900"}`}>
                  {syllabusMeta.theoryMarks} + {syllabusMeta.internalMarks}
                </div>
              </div>
              <div
                className={`p-3 rounded-2xl border text-center min-w-[90px] ${
                  isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}
              >
                <div className="text-[10px] uppercase font-bold font-mono opacity-60 text-slate-400 flex items-center justify-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> Time
                </div>
                <div className={`text-sm font-black font-mono ${isDark ? "text-amber-400" : "text-amber-600"}`}>
                  {syllabusMeta.duration}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SUBJECT SELECTOR (MOBILE DROPDOWN & DESKTOP PILLS) */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="sm:hidden">
            <div className="fabulous-select-wrapper">
              <select
                aria-label="Select Syllabus Subject"
                value={selectedSubjectId}
                onChange={(e) => {
                  playSound?.("click");
                  onSelectSubjectId(e.target.value);
                }}
                className={`fabulous-select ${isDark ? "fabulous-select-dark" : "fabulous-select-light"}`}
              >
                {CBSE_SUBJECTS.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>
              <div className="fabulous-select-icon text-zinc-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-wrap gap-2">
            {CBSE_SUBJECTS.map((sub) => {
              const isSelected = sub.id === selectedSubjectId;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    playSound?.("click");
                    onSelectSubjectId(sub.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 border min-h-[40px] touch-manipulation active:scale-95 ${
                    isSelected
                      ? isDark
                        ? "bg-white/20 border-white/30 text-white font-bold shadow-xs ring-1 ring-white/30"
                        : "bg-slate-900 text-white border-slate-900 font-bold shadow-xs"
                      : isDark
                      ? "bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs"
                  }`}
                >
                  {sub.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. SECONDARY SUB-TABS (UNITS | TOPICS | EXCLUSIONS | PRACTICALS/MAP) */}
      {/* =================================================================== */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={() => handleSubTabChange("marking_scheme")}
          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "marking_scheme"
              ? isDark
                ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30"
                : "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
              : isDark
              ? "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-white/5"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5 text-amber-300" /> Chapter-Wise Marking Scheme ({syllabusMeta?.theoryMarks || 80}M)
        </button>

        <button
          onClick={() => handleSubTabChange("units")}
          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "units"
              ? isDark
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md"
                : "bg-indigo-600 text-white border-indigo-600 shadow-md"
              : isDark
              ? "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-white/5"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> Unit Breakdown & Blueprint ({syllabusMeta?.theoryMarks || 80}M)
        </button>

        <button
          onClick={() => handleSubTabChange("topics")}
          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "topics"
              ? isDark
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md"
                : "bg-indigo-600 text-white border-indigo-600 shadow-md"
              : isDark
              ? "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-white/5"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Chapter & Subtopic Mastery
        </button>

        <button
          onClick={() => handleSubTabChange("exclusions")}
          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "exclusions"
              ? isDark
                ? "bg-rose-600 text-white border-rose-500 shadow-md"
                : "bg-rose-600 text-white border-rose-600 shadow-md"
              : isDark
              ? "bg-slate-900/60 text-rose-300 border-rose-500/20 hover:bg-rose-500/10"
              : "bg-white text-rose-700 border-rose-200 hover:bg-rose-50"
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" /> Excluded & Formative Topics Alert
        </button>

        {syllabusMeta && (syllabusMeta.practicals || syllabusMeta.mapWork) && (
          <button
            onClick={() => handleSubTabChange("practicals_map")}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === "practicals_map"
                ? isDark
                  ? "bg-cyan-600 text-white border-cyan-500 shadow-md"
                  : "bg-cyan-600 text-white border-cyan-600 shadow-md"
                : isDark
                ? "bg-slate-900/60 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/10"
                : "bg-white text-cyan-800 border-cyan-200 hover:bg-cyan-50"
            }`}
          >
            {syllabusMeta.practicals ? (
              <>
                <FlaskConical className="w-3.5 h-3.5" /> 14 Mandatory Science Practicals
              </>
            ) : (
              <>
                <MapPin className="w-3.5 h-3.5" /> Official Map Pointing Syllabus (5M)
              </>
            )}
          </button>
        )}

        <button
          onClick={() => handleSubTabChange("assessment")}
          className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "assessment"
              ? isDark
                ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                : "bg-emerald-600 text-white border-emerald-600 shadow-md"
              : isDark
              ? "bg-slate-900/60 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/10"
              : "bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50"
          }`}
        >
          <Award className="w-3.5 h-3.5" /> Internal Assessment (20M Scheme)
        </button>
      </div>

      {/* =================================================================== */}
      {/* 2B. SUB-TAB: CHAPTER-WISE OFFICIAL MARKING SCHEME (LATEST CBSE)     */}
      {/* =================================================================== */}
      {activeSubTab === "marking_scheme" && syllabusMeta && (
        <div className="space-y-6">
          {/* Summary Strip */}
          <div
            className={`p-4 sm:p-5 rounded-3xl border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${
              isDark
                ? "bg-slate-900/80 border-white/10"
                : "bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 border-blue-200/70 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className={`text-sm sm:text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                  Official Chapter-Wise Weightage &amp; Question Typology
                </h3>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Direct synthesis from latest CBSE curriculum. Exact mark distributions, question format blueprints, and high-yield board focal areas.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
              <div className={`px-3 py-1.5 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-white border-blue-200 shadow-2xs"}`}>
                <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Theory Exam</span>
                <span className="text-xs font-black font-mono text-blue-500">{syllabusMeta.theoryMarks} Marks</span>
              </div>
              <div className={`px-3 py-1.5 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-white border-blue-200 shadow-2xs"}`}>
                <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Internal</span>
                <span className="text-xs font-black font-mono text-emerald-500">{syllabusMeta.internalMarks} Marks</span>
              </div>
              <div className={`px-3 py-1.5 rounded-xl border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-white border-blue-200 shadow-2xs"}`}>
                <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Total Chapters</span>
                <span className="text-xs font-black font-mono text-indigo-400">{syllabusMeta.chapterWeightages?.length || 0}</span>
              </div>
            </div>
          </div>

          {/* Priority Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs font-bold font-mono uppercase mr-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Filter Priority:
            </span>
            {(["All", "High Yield", "Core Yield", "Foundational", "Project / Periodic Only"] as const).map((filter) => {
              const isSelected = priorityFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    playSound?.("click");
                    setPriorityFilter(filter);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    isSelected
                      ? isDark
                        ? "bg-white/20 border-white/30 text-white shadow-xs"
                        : "bg-slate-900 border-slate-900 text-white shadow-xs"
                      : isDark
                      ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter === "High Yield" && "🔥 "}
                  {filter === "Core Yield" && "⚡ "}
                  {filter === "Foundational" && "📘 "}
                  {filter === "Project / Periodic Only" && "⚠️ "}
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Chapter Weightage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(syllabusMeta.chapterWeightages || [])
              .filter((cw) => priorityFilter === "All" || cw.priority === priorityFilter)
              .map((cw, idx) => {
                const isHighYield = cw.priority === "High Yield";
                const isInternalOnly = cw.priority === "Project / Periodic Only";
                return (
                  <div
                    key={cw.chapterId || idx}
                    className={`p-5 rounded-3xl border transition-all flex flex-col justify-between ${
                      isDark
                        ? "bg-slate-900/70 border-white/10 hover:border-white/20"
                        : "bg-white border-slate-200 shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Top Row: Unit & Chapter No + Marks Badge */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {cw.chapterNo && (
                            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                              {typeof cw.chapterNo === "number" ? `Ch ${cw.chapterNo}` : cw.chapterNo}
                            </span>
                          )}
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            {cw.unitNo}
                          </span>
                        </div>

                        {/* Marks Badge */}
                        <div
                          className={`px-3 py-1 rounded-2xl font-mono font-black text-xs sm:text-sm border shrink-0 ${
                            isInternalOnly
                              ? isDark
                                ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
                                : "bg-amber-50 border-amber-200 text-amber-700"
                              : isHighYield
                              ? isDark
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/40 shadow-sm"
                                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-xs"
                              : isDark
                              ? "bg-white/10 border-white/20 text-slate-200"
                              : "bg-slate-100 border-slate-300 text-slate-800"
                          }`}
                        >
                          {cw.marks}
                        </div>
                      </div>

                      {/* Chapter Title */}
                      <h4 className={`text-sm sm:text-base font-bold mb-2.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                        {cw.chapterName}
                      </h4>

                      {/* Priority Tag */}
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                            cw.priority === "High Yield"
                              ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
                              : cw.priority === "Core Yield"
                              ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                              : cw.priority === "Foundational"
                              ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                              : "bg-slate-500/15 text-slate-400 border-slate-500/30"
                          }`}
                        >
                          {cw.priority === "High Yield" && <Flame className="w-3 h-3" />}
                          {cw.priority === "Core Yield" && <Zap className="w-3 h-3" />}
                          {cw.priority}
                        </span>
                      </div>

                      {/* Question Typology Blueprint */}
                      <div
                        className={`p-3 rounded-2xl border mb-3 ${
                          isDark ? "bg-white/[0.03] border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Compass className="w-3.5 h-3.5 text-blue-400" />
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-blue-300" : "text-blue-700"}`}>
                            Question Format Blueprint:
                          </span>
                        </div>
                        <p className={`text-xs font-medium leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {cw.questionDistribution}
                        </p>
                      </div>
                    </div>

                    {/* CBSE Board Exam Focus */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Target className="w-3.5 h-3.5 text-emerald-400" />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDark ? "text-emerald-300" : "text-emerald-700"}`}>
                          High-Frequency Board Focal Points:
                        </span>
                      </div>
                      <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {cw.keyExamFocus}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. SUB-TAB 1: UNIT BREAKDOWN & BLUEPRINT (80 MARKS THEORY)           */}
      {/* =================================================================== */}
      {activeSubTab === "units" && syllabusMeta && (
        <div className="space-y-6">
          {/* UNITS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabusMeta.unitWeightages.map((unit, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-3xl border transition-all ${
                  isDark ? "bg-slate-900/70 border-white/10 hover:border-white/20" : "bg-white border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-indigo-400 tracking-wider">
                      {unit.unitNo}
                    </span>
                    <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{unit.unitName}</h3>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-2xl font-mono font-black text-sm border shrink-0 ${
                      isDark
                        ? "bg-indigo-500/20 border-indigo-500/30 text-indigo-300"
                        : "bg-indigo-50 border-indigo-200 text-indigo-700"
                    }`}
                  >
                    {unit.marks} Marks
                  </div>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {unit.chaptersIncluded.map((ch, cIdx) => (
                      <span
                        key={cIdx}
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          isDark
                            ? "bg-white/5 border-white/10 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  <p className={`text-xs leading-relaxed pt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {unit.keyHighlights}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* QUESTION PAPER DESIGN & COGNITIVE TAXONOMY */}
          <div
            className={`p-6 rounded-3xl border ${
              isDark ? "bg-slate-900/60 border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-indigo-400" />
              <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Official Question Paper Design & Cognitive Taxonomy
              </h3>
            </div>

            <p className={`text-xs mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              CBSE board papers are designed according to Bloom's Revised Taxonomy to ensure questions test real conceptual mastery and application instead of textbook memorization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {syllabusMeta.typologyDesign.map((typ, tIdx) => (
                <div
                  key={tIdx}
                  className={`p-4 rounded-2xl border ${
                    isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-indigo-400">{typ.category}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{typ.percentage}%</span>
                  </div>
                  <div className="text-lg font-black font-mono mb-1">{typ.marks} Marks</div>
                  <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {typ.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRESCRIBED NCERT BOOKS */}
          <div
            className={`p-5 rounded-3xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <h4 className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  Official Prescribed Books & NCERT Resources
                </h4>
              </div>
              <ul className="list-disc list-inside text-xs space-y-0.5 opacity-80 pl-1">
                {syllabusMeta.prescribedBooks.map((b, bIdx) => (
                  <li key={bIdx} className={isDark ? "text-slate-300" : "text-slate-700"}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. SUB-TAB 2: CHAPTER & SUBTOPIC MASTERY (INTERACTIVE CHECKLIST)     */}
      {/* =================================================================== */}
      {activeSubTab === "topics" && (
        <div className="space-y-3">
          {currentSubjectObj.chapters.map((chapter) => {
            const isExpanded = expandedChapterIds[chapter.id] || false;
            const chapterCompletedTopics = chapter.topics.filter((t) => completedTopicIds[t.id]).length;
            const chapterTotalTopics = chapter.topics.length;
            const isAllDone = chapterCompletedTopics === chapterTotalTopics && chapterTotalTopics > 0;

            return (
              <div
                key={chapter.id}
                className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-5 transition-all ${
                  isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div
                  onClick={() => onToggleChapterExpand(chapter.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-indigo-400">
                        {chapter.ncertChapterNo ? `Ch ${chapter.ncertChapterNo}` : "Unit"}
                      </span>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        {chapter.name}
                      </h4>

                      {/* CHAPTER WEIGHTAGE MARKS BADGE */}
                      {(() => {
                        const cw = syllabusMeta?.chapterWeightages?.find(
                          (w) =>
                            w.chapterId === chapter.id ||
                            (chapter.ncertChapterNo && w.chapterNo === chapter.ncertChapterNo) ||
                            w.chapterName.toLowerCase().includes(chapter.name.toLowerCase()) ||
                            chapter.name.toLowerCase().includes(w.chapterName.toLowerCase())
                        );
                        if (!cw) return null;
                        return (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border shrink-0 ${
                              cw.priority === "High Yield"
                                ? isDark
                                  ? "bg-blue-500/20 text-blue-300 border-blue-500/35"
                                  : "bg-blue-50 text-blue-700 border-blue-200"
                                : isDark
                                ? "bg-white/5 text-slate-300 border-white/10"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                          >
                            {cw.marks}
                          </span>
                        );
                      })()}

                      {/* OFFICIAL SYLLABUS STATUS BADGES */}
                      {chapter.examStatusLabel && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                            chapter.examStatus === "periodic_test_only"
                              ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
                              : chapter.examStatus === "partial_board"
                              ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                              : "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          {chapter.examStatusLabel}
                        </span>
                      )}

                      {isAllDone && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/25">
                          100% Mastered
                        </span>
                      )}
                    </div>

                    {chapter.syllabusNote && (
                      <p className={`text-[11px] font-medium leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <span className="font-bold text-amber-500">Official Note:</span> {chapter.syllabusNote}
                      </p>
                    )}

                    <p className={`text-[11px] font-mono ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                      {chapterCompletedTopics} of {chapterTotalTopics} Sub-Topics Mastered
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                    <div className={`w-24 sm:w-32 h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-black/10"}`}>
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                        style={{ width: `${Math.round((chapterCompletedTopics / (chapterTotalTopics || 1)) * 100)}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {Math.round((chapterCompletedTopics / (chapterTotalTopics || 1)) * 100)}%
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                  </div>
                </div>

                {/* TOPICS BREAKDOWN */}
                {isExpanded && (
                  <div className={`mt-3.5 pt-3.5 border-t space-y-2 animate-fade-in ${isDark ? "border-white/[0.08]" : "border-slate-200"}`}>
                    {chapter.topics.map((topic) => {
                      const isChecked = completedTopicIds[topic.id] || false;
                      return (
                        <div
                          key={topic.id}
                          onClick={() => onToggleTopic(topic.id)}
                          className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all min-h-[48px] touch-manipulation active:scale-[0.99] ${
                            isChecked
                              ? isDark
                                ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-200"
                                : "bg-indigo-50 border-indigo-300 text-indigo-950 font-medium"
                              : isDark
                              ? "bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            {isChecked ? (
                              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                            ) : (
                              <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-zinc-600" : "text-slate-400"}`} />
                            )}
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] font-mono font-semibold opacity-70 mr-1.5">
                                Sec {topic.sectionCode}
                              </span>
                              <span
                                className={`text-xs font-medium break-words ${
                                  isChecked ? "line-through opacity-70" : isDark ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {topic.title}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 flex-wrap justify-end shrink-0">
                            {topic.expectedMarks && (
                              <span
                                className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono border ${
                                  isDark ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-cyan-50 text-cyan-900 border-cyan-200"
                                }`}
                              >
                                {topic.expectedMarks}
                              </span>
                            )}
                            {topic.probability ? (
                              <span
                                className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono border ${
                                  topic.probability.includes("High Chance")
                                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                    : topic.probability.includes("Medium Chance")
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                                }`}
                              >
                                {topic.probability}
                              </span>
                            ) : topic.isImportantForBoards && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-mono bg-rose-500/15 text-rose-400 border border-rose-500/25">
                                High Yield
                              </span>
                            )}
                            <span className="text-[10px] font-mono text-indigo-400 font-bold shrink-0">+25 XP</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. SUB-TAB 3: EXCLUDED & FORMATIVE TOPICS ALERT                      */}
      {/* =================================================================== */}
      {activeSubTab === "exclusions" && syllabusMeta && (
        <div className="space-y-4">
          <div
            className={`p-5 rounded-3xl border flex items-start gap-3 ${
              isDark ? "bg-rose-950/20 border-rose-500/30" : "bg-rose-50 border-rose-200"
            }`}
          >
            <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className={`text-sm font-bold ${isDark ? "text-rose-300" : "text-rose-900"}`}>
                Critical Board Exam Advisory: Topics Excluded from Summative Examination
              </h3>
              <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                Students often waste dozens of hours memorizing deleted formulas, deleted chapters, or units designated strictly for school formative assessments. The following list is derived directly from the official CBSE 2026-27 documents.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabusMeta.criticalExclusions.map((item, eIdx) => (
              <div
                key={eIdx}
                className={`p-5 rounded-3xl border transition-all ${
                  isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-400">{item.chapter}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      item.officialStatus.includes("Strictly Excluded")
                        ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
                        : item.officialStatus.includes("Periodic Test")
                        ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                        : "bg-purple-500/15 text-purple-400 border-purple-500/30"
                    }`}
                  >
                    {item.officialStatus}
                  </span>
                </div>

                <h4 className={`text-sm font-bold mb-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>{item.topic}</h4>

                <div className={`p-3 rounded-2xl text-xs mb-2.5 ${isDark ? "bg-white/[0.03]" : "bg-slate-50"}`}>
                  <span className="font-semibold text-amber-500">Official Circular Rationale: </span>
                  <span className={isDark ? "text-slate-300" : "text-slate-700"}>{item.reasonAndCircular}</span>
                </div>

                <div className="text-xs flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={isDark ? "text-emerald-300" : "text-emerald-800"}>
                    <strong className="font-bold">Student Action:</strong> {item.studentAdvice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 6. SUB-TAB 4: 14 SCIENCE PRACTICALS & SST MAP WORK DIRECTORY         */}
      {/* =================================================================== */}
      {activeSubTab === "practicals_map" && syllabusMeta && (
        <div className="space-y-4">
          {/* SCIENCE 14 PRACTICALS */}
          {syllabusMeta.practicals && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    14 Mandatory CBSE Science Laboratory Experiments
                  </h3>
                  <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Assessed in Section B (Practical-based questions) of Board Theory Paper + 5 Marks Internal Subject Enrichment.
                  </p>
                </div>

                {/* PRACTICAL UNIT FILTER */}
                <div className="flex gap-1.5 flex-wrap">
                  {["All", "Chemistry", "Physics", "Biology"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setPracticalFilter(f)}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                        practicalFilter === f
                          ? "bg-cyan-600 text-white border-cyan-500"
                          : isDark
                          ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {syllabusMeta.practicals
                  .filter((p) => practicalFilter === "All" || p.unit.includes(practicalFilter))
                  .map((exp) => (
                    <div
                      key={exp.expNo}
                      className={`p-5 rounded-3xl border transition-all ${
                        isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-cyan-400">
                          Experiment #{exp.expNo} • {exp.unit}
                        </span>
                      </div>

                      <h4 className={`text-sm font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{exp.title}</h4>

                      <div className="space-y-2 text-xs">
                        <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/[0.02]" : "bg-slate-50"}`}>
                          <span className="font-bold text-slate-400">Apparatus: </span>
                          <span className={isDark ? "text-slate-300" : "text-slate-700"}>{exp.apparatus}</span>
                        </div>

                        <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/[0.02]" : "bg-slate-50"}`}>
                          <span className="font-bold text-slate-400">Procedure: </span>
                          <span className={isDark ? "text-slate-300" : "text-slate-700"}>{exp.procedureSummary}</span>
                        </div>

                        <div className={`p-2.5 rounded-xl ${isDark ? "bg-emerald-950/20 text-emerald-300" : "bg-emerald-50 text-emerald-900"}`}>
                          <strong className="font-bold">Expected Result: </strong>
                          {exp.expectedObservation}
                        </div>

                        <div className={`p-2.5 rounded-xl ${isDark ? "bg-rose-950/20 text-rose-300" : "bg-rose-50 text-rose-900"}`}>
                          <strong className="font-bold">⚠️ Viva Trap / Common Error: </strong>
                          {exp.vivaTrap}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* SOCIAL SCIENCE MAP WORK */}
          {syllabusMeta.mapWork && (
            <div className="space-y-4">
              <div className="space-y-0.5">
                <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  Official CBSE Class 10 Map Pointing Syllabus (5 Marks Guaranteed)
                </h3>
                <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  2 Marks History (Nationalism in India) + 3 Marks Geography (Dams, Minerals, Ports, Airports) on outline political map of India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {syllabusMeta.mapWork.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-5 rounded-3xl border transition-all ${
                      isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-amber-400">
                        {m.discipline} • {m.chapter}
                      </span>
                    </div>

                    <h4 className={`text-sm font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{m.category}</h4>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.locations.map((loc, lIdx) => (
                        <span
                          key={lIdx}
                          className={`text-xs px-2.5 py-1 rounded-xl font-medium border ${
                            isDark ? "bg-white/5 border-white/10 text-cyan-300" : "bg-cyan-50 border-cyan-200 text-cyan-900"
                          }`}
                        >
                          {loc}
                        </span>
                      ))}
                    </div>

                    <div className={`p-2.5 rounded-xl text-xs ${isDark ? "bg-amber-950/20 text-amber-300" : "bg-amber-50 text-amber-900"}`}>
                      <strong className="font-bold">Exam Pro-Tip: </strong>
                      {m.examTips}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* 7. SUB-TAB 5: INTERNAL ASSESSMENT (20 MARKS SCHEME)                 */}
      {/* =================================================================== */}
      {activeSubTab === "assessment" && syllabusMeta && (
        <div className="space-y-4">
          <div
            className={`p-5 rounded-3xl border ${
              isDark ? "bg-emerald-950/20 border-emerald-500/30" : "bg-emerald-50 border-emerald-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-emerald-500" />
              <h3 className={`text-sm font-bold ${isDark ? "text-emerald-300" : "text-emerald-900"}`}>
                CBSE Official 20-Mark Internal Assessment Guidelines
              </h3>
            </div>
            <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Internal assessment accounts for 20% of your total marks. Schools follow strict CBSE rubric guidelines to award these marks across four distinct quarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {syllabusMeta.internalAssessment.map((item, aIdx) => (
              <div
                key={aIdx}
                className={`p-5 rounded-3xl border ${
                  isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{item.component}</h4>
                  <span className="text-sm font-mono font-black text-emerald-400">{item.marks} Marks</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* TEACHER EVALUATION CRITERIA ADVICE */}
          <div
            className={`p-5 rounded-3xl border ${
              isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
            }`}
          >
            <h4 className={`text-sm font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              How to Secure 20/20 in Internal Assessment:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"}`}>
                <strong className="text-indigo-400 block mb-1">1. Periodic Test Average (5M)</strong>
                Best two periodic tests out of three are averaged. Consistently maintaining 85%+ guarantees full 5 marks.
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"}`}>
                <strong className="text-indigo-400 block mb-1">2. Multiple Assessments (5M)</strong>
                Quizzes, oral recitations, concept maps, and peer discussions in class.
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"}`}>
                <strong className="text-indigo-400 block mb-1">3. Portfolio & Notebooks (5M)</strong>
                Neat homework records, timely submissions, self-reflection sheets, and reading material summaries.
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"}`}>
                <strong className="text-indigo-400 block mb-1">4. Subject Enrichment / Practicals (5M)</strong>
                Lab manual completion, index maintenance, viva presentation, and experiment log sheets.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SyllabusHubView;
