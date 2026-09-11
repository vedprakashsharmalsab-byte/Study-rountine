"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  FlaskConical,
  Atom,
  Zap,
  Dna,
  Leaf,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Search,
  Sparkles,
  Lightbulb,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Shield,
  ListChecks,
  Target,
  CheckCircle2,
  Compass,
  Flame,
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { SCIENCE_CHAPTER_CONCEPTS, getScienceChapter, type ScienceChapterConcept } from "@/data/scienceConcepts";

interface ScienceConceptsHubViewProps {
  isDark: boolean;
  activeChapterNo?: number;
  isEmbeddedInCommand?: boolean;
  onOpenQuestionBank?: (chapterNo?: number) => void;
  onOpenActivities?: (chapterNo?: number) => void;
  onOpenReactions?: (chapterNo?: number) => void;
  onOpenDiagrams?: (chapterNo?: number) => void;
  onOpenHots?: (subject: "math" | "science" | "sst", chapterNo?: number) => void;
}

// Chapter metadata list
const CHAPTER_LIST = [
  { no: 1, name: "Chemical Reactions and Equations", shortName: "Ch 1: Reactions", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 2, name: "Acids, Bases and Salts", shortName: "Ch 2: Acids & Salts", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 3, name: "Metals and Non-Metals", shortName: "Ch 3: Metals", discipline: "Chemistry", weightage: "7–9 Marks", icon: FlaskConical },
  { no: 4, name: "Carbon and its Compounds", shortName: "Ch 4: Carbon", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 5, name: "Life Processes", shortName: "Ch 5: Life Processes", discipline: "Biology", weightage: "8–10 Marks", icon: Dna },
  { no: 6, name: "Control and Coordination", shortName: "Ch 6: Control", discipline: "Biology", weightage: "6–7 Marks", icon: Dna },
  { no: 7, name: "How do Organisms Reproduce?", shortName: "Ch 7: Reproduction", discipline: "Biology", weightage: "6–8 Marks", icon: Dna },
  { no: 8, name: "Heredity and Evolution", shortName: "Ch 8: Heredity", discipline: "Biology", weightage: "5–7 Marks", icon: Dna },
  { no: 9, name: "Light — Reflection and Refraction", shortName: "Ch 9: Light", discipline: "Physics", weightage: "9–10 Marks", icon: Zap },
  { no: 10, name: "The Human Eye and Colourful World", shortName: "Ch 10: Human Eye", discipline: "Physics", weightage: "4–5 Marks", icon: Zap },
  { no: 11, name: "Electricity", shortName: "Ch 11: Electricity", discipline: "Physics", weightage: "7–8 Marks", icon: Zap },
  { no: 12, name: "Magnetic Effects of Electric Current", shortName: "Ch 12: Magnetism", discipline: "Physics", weightage: "6–7 Marks", icon: Zap },
  { no: 13, name: "Our Environment", shortName: "Ch 13: Environment", discipline: "Natural Resources", weightage: "5 Marks", icon: Leaf },
];

function getDisciplineColors(discipline: string, isDark: boolean) {
  switch (discipline) {
    case "Chemistry":
      return {
        badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
        accent: isDark ? "border-amber-500/30" : "border-amber-300",
        glow: "shadow-amber-500/10",
        icon: "text-amber-400",
        tag: isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/40" : "bg-amber-50 text-amber-800 border-amber-200",
      };
    case "Biology":
      return {
        badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        accent: isDark ? "border-emerald-500/30" : "border-emerald-300",
        glow: "shadow-emerald-500/10",
        icon: "text-emerald-400",
        tag: isDark ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/40" : "bg-emerald-50 text-emerald-800 border-emerald-200",
      };
    case "Physics":
      return {
        badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
        accent: isDark ? "border-blue-500/30" : "border-blue-300",
        glow: "shadow-blue-500/10",
        icon: "text-blue-400",
        tag: isDark ? "bg-blue-950/40 text-blue-300 border-blue-800/40" : "bg-blue-50 text-blue-800 border-blue-200",
      };
    default:
      return {
        badge: "bg-teal-500/15 text-teal-400 border-teal-500/30",
        accent: isDark ? "border-teal-500/30" : "border-teal-300",
        glow: "shadow-teal-500/10",
        icon: "text-teal-400",
        tag: isDark ? "bg-teal-950/40 text-teal-300 border-teal-800/40" : "bg-teal-50 text-teal-800 border-teal-200",
      };
  }
}

function getDisciplineIcon(discipline: string) {
  switch (discipline) {
    case "Chemistry": return FlaskConical;
    case "Physics": return Zap;
    case "Biology": return Dna;
    default: return Leaf;
  }
}

export default function ScienceConceptsHubView({
  isDark,
  activeChapterNo,
  isEmbeddedInCommand = false,
  onOpenQuestionBank,
  onOpenActivities,
  onOpenReactions,
  onOpenDiagrams,
  onOpenHots,
}: ScienceConceptsHubViewProps) {
  const [selectedChapterNo, setSelectedChapterNo] = useState<number>(activeChapterNo || 1);
  const [disciplineFilter, setDisciplineFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedSectionIds, setExpandedSectionIds] = useState<Record<string, boolean>>({});

  const currentChNo = isEmbeddedInCommand && activeChapterNo !== undefined ? activeChapterNo : selectedChapterNo;

  useEffect(() => {
    if (activeChapterNo !== undefined) {
      setSelectedChapterNo(activeChapterNo);
    }
  }, [activeChapterNo]);

  const currentChapter = useMemo<ScienceChapterConcept | undefined>(
    () => getScienceChapter(currentChNo),
    [currentChNo]
  );

  const currentMeta = useMemo(() => CHAPTER_LIST.find((c) => c.no === currentChNo) || CHAPTER_LIST[0], [currentChNo]);

  // Auto-expand first 2 sections when chapter changes
  useEffect(() => {
    if (!currentChapter) return;
    const init: Record<string, boolean> = {};
    currentChapter.sections.forEach((s, idx) => {
      init[s.id] = idx < 2; // first 2 expanded by default
    });
    setExpandedSectionIds(init);
  }, [currentChNo, currentChapter]);

  const toggleSection = useCallback((id: string) => {
    setExpandedSectionIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAll = useCallback(() => {
    if (!currentChapter) return;
    const next: Record<string, boolean> = {};
    const allExpanded = currentChapter.sections.every((s) => expandedSectionIds[s.id]);
    currentChapter.sections.forEach((s) => { next[s.id] = !allExpanded; });
    setExpandedSectionIds(next);
  }, [currentChapter, expandedSectionIds]);

  const handleSelectChapter = useCallback((chNo: number) => {
    setSelectedChapterNo(chNo);
    setSearchQuery("");
    document.getElementById("sci-concepts-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const filteredSections = useMemo(() => {
    if (!currentChapter) return [];
    if (!searchQuery.trim()) return currentChapter.sections;
    const q = searchQuery.toLowerCase();
    return currentChapter.sections.filter((s) =>
      s.label.toLowerCase().includes(q) ||
      s.heading.toLowerCase().includes(q) ||
      s.explanation.toLowerCase().includes(q) ||
      s.formulasOrKeyPoints?.some((f) => f.title.toLowerCase().includes(q) || f.content.toLowerCase().includes(q)) ||
      s.examinerTraps?.some((t) => t.trap.toLowerCase().includes(q)) ||
      s.stepByStepGuide?.some((g) => g.title.toLowerCase().includes(q))
    );
  }, [currentChapter, searchQuery]);

  const prevChapter = CHAPTER_LIST.find((c) => c.no === currentChNo - 1);
  const nextChapter = CHAPTER_LIST.find((c) => c.no === currentChNo + 1);

  const colors = getDisciplineColors(currentMeta.discipline, isDark);
  const DisciplineIcon = getDisciplineIcon(currentMeta.discipline);

  if (!currentChapter) {
    return (
      <div className={`p-12 text-center rounded-3xl border ${isDark ? "bg-black/20 border-white/10" : "bg-slate-50 border-slate-200"}`}>
        <Atom className="w-12 h-12 mx-auto mb-3 opacity-30" />
        <p className="text-lg font-bold opacity-60">Chapter {currentChNo} content is coming soon!</p>
      </div>
    );
  }

  return (
    <div id="sci-concepts-top" className="space-y-6">

      {/* ============= CHAPTER SELECTOR RIBBON (standalone mode) ============= */}
      {!isEmbeddedInCommand && (
        <div className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
          isDark
            ? "bg-[#0c121e]/90 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-white border-slate-200 shadow-lg"
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
                <Atom className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight">Science — Toddler-to-Pro Master</h2>
                <p className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Each chapter taught from zero — analogy → theory → formula → board tips
                </p>
              </div>
            </div>
            {/* Discipline filter */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All" },
                { id: "Chemistry", label: "🧪 Chemistry" },
                { id: "Biology", label: "🧬 Biology" },
                { id: "Physics", label: "⚡ Physics" },
                { id: "Natural Resources", label: "🌿 Ecology" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDisciplineFilter(d.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    disciplineFilter === d.id
                      ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-sm"
                      : isDark
                      ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CHAPTER_LIST.filter((c) => disciplineFilter === "all" || c.discipline === disciplineFilter).map((ch) => {
              const isSelected = ch.no === currentChNo;
              const Icon = ch.icon;
              return (
                <button
                  key={ch.no}
                  onClick={() => handleSelectChapter(ch.no)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 border ${
                    isSelected
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 border-teal-300 font-black shadow-lg shadow-teal-500/25 scale-[1.02]"
                      : isDark
                      ? "bg-black/30 border-white/5 text-slate-300 hover:text-white hover:border-white/20"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80 shrink-0" />
                  <span>{ch.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ============= CHAPTER HERO ============= */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        isDark
          ? `bg-gradient-to-br from-[#0c1524] via-[#09101c] to-[#0c1826] ${colors.accent} shadow-[0_8px_32px_rgba(0,0,0,0.25)]`
          : `bg-gradient-to-br from-slate-50/90 via-white to-slate-50/80 border-slate-200 shadow-md`
      }`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 ${colors.badge} border`}>
                <DisciplineIcon className="w-3.5 h-3.5" />
                {currentMeta.discipline}
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${colors.tag}`}>
                Chapter {currentChNo} of 13
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Board: {currentMeta.weightage}
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              {currentChapter.title}
            </h2>

            {/* One-liner */}
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-teal-300/90 font-medium" : "text-teal-800 font-semibold"}`}>
              💡 {currentChapter.oneLiner}
            </p>

            {/* Section jump pills */}
            <div className="pt-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Topics in this chapter:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentChapter.sections.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setExpandedSectionIds((prev) => ({ ...prev, [s.id]: true }));
                      document.getElementById(`sci-section-${s.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isDark
                        ? "bg-white/5 border-white/10 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400/40"
                        : "bg-white border-slate-200 text-teal-800 hover:bg-teal-50 shadow-xs"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-[10px] flex items-center justify-center font-mono font-black">
                      {idx + 1}
                    </span>
                    <span>{s.label.split(".")[1]?.trim() || s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stats + buttons */}
          <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
            <div className={`p-4 rounded-2xl border text-center ${isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-xs"}`}>
              <div className="flex items-center justify-around gap-5">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-teal-400 block">Sections</span>
                  <span className="text-2xl font-mono font-black">{currentChapter.sections.length}</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">Discipline</span>
                  <span className="text-sm font-mono font-black">{currentMeta.discipline}</span>
                </div>
              </div>
            </div>
            <button
              onClick={expandAll}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
              }`}
            >
              {currentChapter.sections.every((s) => expandedSectionIds[s.id]) ? "Collapse All" : "Expand All"}
            </button>
            <div className="flex flex-wrap items-center gap-2">
              {onOpenDiagrams && (
                <button
                  onClick={() => onOpenDiagrams(currentChNo)}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                  title="Open Diagrams Vault for this chapter"
                >
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>Diagrams</span>
                </button>
              )}

              {onOpenHots && (
                <button
                  onClick={() => onOpenHots("science", currentChNo)}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  title="Open Competitive HOTS questions"
                >
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                  <span>HOTS</span>
                </button>
              )}

              {onOpenActivities && (
                <button
                  onClick={() => onOpenActivities(currentChNo)}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  title="Open NCERT Lab Activities"
                >
                  <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lab Activities</span>
                </button>
              )}

              {onOpenReactions && (
                <button
                  onClick={() => onOpenReactions(currentChNo)}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  title="Open Chemical Reactions vault"
                >
                  <Atom className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reactions</span>
                </button>
              )}
            </div>

            {onOpenQuestionBank && (
              <button
                onClick={() => onOpenQuestionBank(currentChNo)}
                className="px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Practice Questions →</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ============= ANALOGY CARD ============= */}
      <div className={`p-6 sm:p-7 rounded-3xl border ${
        isDark
          ? "bg-gradient-to-br from-violet-950/40 to-purple-950/30 border-violet-500/25"
          : "bg-gradient-to-br from-violet-50 to-purple-50/50 border-violet-200"
      }`}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-violet-400" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400">
                Toddler Analogy — Understand Before You Memorise
              </span>
            </div>
            <h3 className={`text-lg sm:text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
              {currentChapter.analogyTitle}
            </h3>
            <div className={`text-sm sm:text-base leading-relaxed whitespace-pre-line ${isDark ? "text-violet-200/90" : "text-violet-900"}`}>
              <PremiumMathRenderer content={currentChapter.analogyContent} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      {/* ============= SEARCH BAR ============= */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder={`Search within Chapter ${currentChNo}: ${currentChapter.title}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 rounded-2xl text-sm font-medium border outline-none transition-all ${
            isDark
              ? "bg-black/40 border-white/10 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              : "bg-white border-slate-200 text-slate-900 focus:border-teal-500 shadow-sm"
          }`}
        />
      </div>

      {/* ============= SECTIONS ============= */}
      <div className="space-y-5">
        {filteredSections.length === 0 ? (
          <div className={`p-10 text-center rounded-3xl border ${isDark ? "bg-black/20 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <p className="text-base font-bold opacity-60">No sections match your search in this chapter.</p>
          </div>
        ) : (
          filteredSections.map((section, sIdx) => {
            const isExpanded = expandedSectionIds[section.id] ?? false;
            return (
              <div
                key={section.id}
                id={`sci-section-${section.id}`}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isDark
                    ? "bg-[#0f172a]/85 border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-teal-500/30"
                    : "bg-white border-slate-200 shadow-md hover:border-teal-400"
                }`}

              >
                {/* Section Header */}
                <div
                  onClick={() => toggleSection(section.id)}
                  className={`p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none transition-colors ${
                    isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50/70"
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-teal-500/15 text-teal-400 border border-teal-500/30">
                        {sIdx + 1} / {filteredSections.length}
                      </span>
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                        {currentMeta.discipline}
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      {section.heading}
                    </h3>
                    {section.subheading && (
                      <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {section.subheading}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${colors.tag}`}>
                      {section.label}
                    </span>
                    <button className={`p-2 rounded-xl transition-colors ${isDark ? "bg-white/5 hover:bg-white/10 text-teal-400" : "bg-slate-100 hover:bg-slate-200 text-teal-600"}`}>
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Section Content */}
                {isExpanded && (
                  <div className={`px-5 sm:px-7 pb-7 pt-4 border-t space-y-6 ${
                    isDark ? "border-white/5 bg-[#090e1a]/60" : "border-slate-100 bg-slate-50/30"
                  }`}>

                    {/* Main Explanation */}
                    <div className={`p-5 sm:p-6 rounded-2xl border ${
                      isDark ? "bg-black/35 border-white/8 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                    }`}>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                          NCERT Concept — Step by Step from Scratch
                        </span>
                      </div>
                      <div className="text-sm sm:text-base leading-relaxed space-y-1 font-normal prose-sci">
                        <PremiumMathRenderer content={section.explanation} isDark={isDark} />
                      </div>
                    </div>

                    {/* Key Formulas / Points */}
                    {section.formulasOrKeyPoints && section.formulasOrKeyPoints.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Board-Critical Formulas & Key Points
                        </h4>
                        <div className="space-y-3">
                          {section.formulasOrKeyPoints.map((fp, fIdx) => (
                            <div key={fIdx} className={`p-5 rounded-2xl border ${
                              isDark ? "bg-amber-950/15 border-amber-500/20" : "bg-amber-50/70 border-amber-200 shadow-xs"
                            }`}>
                              <div className={`text-xs font-mono font-black uppercase tracking-wider mb-3 ${isDark ? "text-amber-400" : "text-amber-800"}`}>
                                📐 {fp.title}
                              </div>
                              <div className={`text-sm leading-relaxed ${isDark ? "text-amber-100/90" : "text-amber-900"}`}>
                                <PremiumMathRenderer content={fp.content} isDark={isDark} />
                              </div>
                              {fp.note && (
                                <div className={`mt-3 pt-3 border-t border-dashed flex items-start gap-2 text-xs ${
                                  isDark ? "border-amber-800/40 text-amber-300" : "border-amber-300 text-amber-800"
                                }`}>
                                  <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                  <span><strong>Topper Note:</strong> {fp.note}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step-by-Step Guide */}
                    {section.stepByStepGuide && section.stepByStepGuide.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                          <ListChecks className="w-4 h-4" />
                          CBSE Answer Template — Step-by-Step
                        </h4>
                        <div className="space-y-3">
                          {section.stepByStepGuide.map((step) => (
                            <div key={step.stepNo} className={`p-5 rounded-2xl border flex items-start gap-4 ${
                              isDark ? "bg-emerald-950/20 border-emerald-500/20" : "bg-emerald-50/60 border-emerald-200"
                            }`}>
                              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 font-mono font-black text-sm text-emerald-400">
                                {step.stepNo}
                              </div>
                              <div className="flex-1 space-y-1.5">
                                <div className={`font-bold text-sm ${isDark ? "text-emerald-300" : "text-emerald-800"}`}>
                                  {step.title}
                                </div>
                                <div className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                  {step.action}
                                </div>
                                {step.proTip && (
                                  <div className={`flex items-start gap-1.5 text-xs mt-1 ${isDark ? "text-teal-400" : "text-teal-700"}`}>
                                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span><strong>Pro Tip:</strong> {step.proTip}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Examiner Traps */}
                    {section.examinerTraps && section.examinerTraps.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          CBSE Examiner Traps — Marks Deduction Warnings
                        </h4>
                        <div className="space-y-3">
                          {section.examinerTraps.map((trap, tIdx) => (
                            <div key={tIdx} className={`p-5 rounded-2xl border space-y-2 ${
                              isDark ? "bg-rose-950/20 border-rose-800/35" : "bg-rose-50 border-rose-200"
                            }`}>
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                <div className="space-y-2 flex-1">
                                  <div className={`text-sm font-semibold ${isDark ? "text-rose-200" : "text-rose-900"}`}>
                                    <strong>❌ Trap:</strong> {trap.trap}
                                  </div>
                                  <div className={`text-sm ${isDark ? "text-emerald-300" : "text-emerald-800"}`}>
                                    <strong>✅ Correct:</strong> {trap.correction}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ============= CHAPTER NAV FOOTER ============= */}
      <div className={`p-5 sm:p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-sm"
      }`}>
        {prevChapter ? (
          <button
            onClick={() => handleSelectChapter(prevChapter.no)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 hover:border-teal-400/40 text-slate-300 hover:text-white transition-all cursor-pointer w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-teal-400" />
            <span>Prev: Ch {prevChapter.no} — {prevChapter.shortName}</span>
          </button>
        ) : <div className="hidden sm:block" />}

        {onOpenQuestionBank && (
          <button
            onClick={() => onOpenQuestionBank(currentChNo)}
            className="px-6 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>Practice Chapter {currentChNo} Questions →</span>
          </button>
        )}

        {nextChapter ? (
          <button
            onClick={() => handleSelectChapter(nextChapter.no)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 hover:border-teal-400/40 text-slate-300 hover:text-white transition-all cursor-pointer w-full sm:w-auto justify-center"
          >
            <span>Next: Ch {nextChapter.no} — {nextChapter.shortName}</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        ) : <div className="hidden sm:block" />}
      </div>
    </div>
  );
}
