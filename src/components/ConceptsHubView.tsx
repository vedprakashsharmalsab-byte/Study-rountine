"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  FlaskConical,
  Atom,
  Zap,
  Dna,
  Leaf,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Search,
  Sparkles,
  Lightbulb,
  FileText,
  Filter,
  GraduationCap,
  Award,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  HelpCircle,
  Layers,
  Compass,
  LayoutGrid,
  Check,
  Target
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { MATH_CHAPTER_CONCEPTS, type MathChapterConcept } from "@/data/mathConceptsData";
import {
  SCIENCE_CONCEPTS_AND_EXAMPLES,
  type ScienceConceptTopic,
  type ScienceConceptExample
} from "@/data/scienceConceptsAndExamples";
import {
  MATH_OFFICIAL_BLUEPRINTS,
  SCIENCE_OFFICIAL_BLUEPRINTS,
  type ChapterBlueprint
} from "@/data/cbseOfficialBlueprints";
import {
  MATH_BOARD_SOLVED_EXAMPLES,
  type MathBoardSolvedExample
} from "@/data/mathSolvedBoardExamples";

interface ConceptsHubViewProps {
  isDark: boolean;
  initialSubject?: "math" | "science";
  initialChapterNo?: number;
  onOpenQuestionBank?: (subject: "math" | "science", chapterNo: number) => void;
  onOpenActivities?: (chapterNo?: number) => void;
  onOpenTheorems?: () => void;
}

// Science Chapter Metadata with Official CBSE Units
const SCIENCE_CHAPTER_LIST = [
  { no: 1, name: "Chemical Reactions and Equations", shortName: "Ch 1: Reactions", discipline: "Chemistry", unit: "Unit I: Chemical Substances", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 2, name: "Acids, Bases and Salts", shortName: "Ch 2: Acids & Salts", discipline: "Chemistry", unit: "Unit I: Chemical Substances", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 3, name: "Metals and Non-Metals", shortName: "Ch 3: Metals & Non-metals", discipline: "Chemistry", unit: "Unit I: Chemical Substances", weightage: "7–9 Marks", icon: FlaskConical },
  { no: 4, name: "Carbon and its Compounds", shortName: "Ch 4: Carbon Compounds", discipline: "Chemistry", unit: "Unit I: Chemical Substances", weightage: "6–8 Marks", icon: FlaskConical },
  { no: 5, name: "Life Processes", shortName: "Ch 5: Life Processes", discipline: "Biology", unit: "Unit II: World of Living", weightage: "8–10 Marks", icon: Dna },
  { no: 6, name: "Control and Coordination", shortName: "Ch 6: Control & Coord", discipline: "Biology", unit: "Unit II: World of Living", weightage: "6–7 Marks", icon: Dna },
  { no: 7, name: "How do Organisms Reproduce?", shortName: "Ch 7: Reproduction", discipline: "Biology", unit: "Unit II: World of Living", weightage: "6–8 Marks", icon: Dna },
  { no: 8, name: "Heredity and Evolution", shortName: "Ch 8: Heredity", discipline: "Biology", unit: "Unit II: World of Living", weightage: "5–7 Marks", icon: Dna },
  { no: 9, name: "Light — Reflection and Refraction", shortName: "Ch 9: Light Optics", discipline: "Physics", unit: "Unit III: Natural Phenomena", weightage: "9–10 Marks", icon: Zap },
  { no: 10, name: "The Human Eye and Colourful World", shortName: "Ch 10: Human Eye", discipline: "Physics", unit: "Unit III: Natural Phenomena", weightage: "4–5 Marks", icon: Zap },
  { no: 11, name: "Electricity", shortName: "Ch 11: Electricity", discipline: "Physics", unit: "Unit IV: Effects of Current", weightage: "7–8 Marks", icon: Zap },
  { no: 12, name: "Magnetic Effects of Electric Current", shortName: "Ch 12: Magnetic Effects", discipline: "Physics", unit: "Unit IV: Effects of Current", weightage: "6–7 Marks", icon: Zap },
  { no: 13, name: "Our Environment", shortName: "Ch 13: Environment", discipline: "Natural Resources", unit: "Unit V: Natural Resources", weightage: "5 Marks", icon: Leaf }
];

// Mathematics Chapter Metadata with Official CBSE Units
const MATH_CHAPTER_LIST = [
  { no: 1, name: "Real Numbers", shortName: "Ch 1: Real Numbers", unit: "Unit I: Number Systems", weightage: "6 Marks" },
  { no: 2, name: "Polynomials", shortName: "Ch 2: Polynomials", unit: "Unit II: Algebra", weightage: "4 Marks" },
  { no: 3, name: "Pair of Linear Equations in Two Variables", shortName: "Ch 3: Linear Equations", unit: "Unit II: Algebra", weightage: "6 Marks" },
  { no: 4, name: "Quadratic Equations", shortName: "Ch 4: Quadratic Eq", unit: "Unit II: Algebra", weightage: "6 Marks" },
  { no: 5, name: "Arithmetic Progressions", shortName: "Ch 5: AP", unit: "Unit II: Algebra", weightage: "6 Marks" },
  { no: 6, name: "Triangles", shortName: "Ch 6: Triangles", unit: "Unit IV: Geometry", weightage: "9–10 Marks" },
  { no: 7, name: "Coordinate Geometry", shortName: "Ch 7: Coord Geometry", unit: "Unit III: Coordinate Geometry", weightage: "6 Marks" },
  { no: 8, name: "Introduction to Trigonometry", shortName: "Ch 8: Trigonometry", unit: "Unit V: Trigonometry", weightage: "8 Marks" },
  { no: 9, name: "Some Applications of Trigonometry", shortName: "Ch 9: Heights & Distances", unit: "Unit V: Trigonometry", weightage: "4–5 Marks" },
  { no: 10, name: "Circles", shortName: "Ch 10: Circles", unit: "Unit IV: Geometry", weightage: "6 Marks" },
  { no: 11, name: "Areas Related to Circles", shortName: "Ch 11: Areas Circles", unit: "Unit VI: Mensuration", weightage: "4 Marks" },
  { no: 12, name: "Surface Areas and Volumes", shortName: "Ch 12: Mensuration", unit: "Unit VI: Mensuration", weightage: "6 Marks" },
  { no: 13, name: "Statistics", shortName: "Ch 13: Statistics", unit: "Unit VII: Statistics & Probability", weightage: "7 Marks" },
  { no: 14, name: "Probability", shortName: "Ch 14: Probability", unit: "Unit VII: Statistics & Probability", weightage: "4 Marks" }
];

export default function ConceptsHubView({
  isDark,
  initialSubject = "math",
  initialChapterNo = 6,
  onOpenQuestionBank,
  onOpenActivities,
  onOpenTheorems
}: ConceptsHubViewProps) {
  const [activeSubject, setActiveSubject] = useState<"math" | "science">(initialSubject);
  const [activeMathChapterNo, setActiveMathChapterNo] = useState<number>(
    initialSubject === "math" ? initialChapterNo || 6 : 6
  );
  const [activeScienceChapterNo, setActiveScienceChapterNo] = useState<number>(
    initialSubject === "science" ? initialChapterNo || 1 : 1
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isChapterGridOpen, setIsChapterGridOpen] = useState<boolean>(false);

  // Science expandable topic state
  const [expandedScienceTopicIds, setExpandedScienceTopicIds] = useState<Record<string, boolean>>({
    sci_c1_t1: true,
    sci_c1_t2: true
  });

  // Sync props if initialSubject or initialChapterNo changes externally
  useEffect(() => {
    if (initialSubject) {
      setActiveSubject(initialSubject);
      if (initialSubject === "math" && initialChapterNo) {
        setActiveMathChapterNo(initialChapterNo);
      } else if (initialSubject === "science" && initialChapterNo) {
        setActiveScienceChapterNo(initialChapterNo);
      }
    }
  }, [initialSubject, initialChapterNo]);

  // Active Math Chapter Data
  const activeMathChapter = useMemo(() => {
    return (
      MATH_CHAPTER_CONCEPTS.find((c) => c.chapterNo === activeMathChapterNo) ||
      MATH_CHAPTER_CONCEPTS[5] // Default Ch 6 Triangles
    );
  }, [activeMathChapterNo]);

  // Active Math Blueprint
  const activeMathBlueprint = useMemo(() => {
    return MATH_OFFICIAL_BLUEPRINTS[activeMathChapterNo] || MATH_OFFICIAL_BLUEPRINTS[6];
  }, [activeMathChapterNo]);

  // Active Math Solved Examples
  const activeMathExamples = useMemo(() => {
    return MATH_BOARD_SOLVED_EXAMPLES.filter((ex) => ex.chapterNo === activeMathChapterNo);
  }, [activeMathChapterNo]);

  // Active Science Topics for Selected Chapter
  const activeScienceTopics = useMemo(() => {
    return SCIENCE_CONCEPTS_AND_EXAMPLES.filter(
      (t) => t.chapterNo === activeScienceChapterNo
    );
  }, [activeScienceChapterNo]);

  // Active Science Blueprint
  const activeScienceBlueprint = useMemo(() => {
    return SCIENCE_OFFICIAL_BLUEPRINTS[activeScienceChapterNo] || SCIENCE_OFFICIAL_BLUEPRINTS[1];
  }, [activeScienceChapterNo]);

  // Filtered Science Topics (search)
  const filteredScienceTopics = useMemo(() => {
    let list = activeScienceTopics;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (t) =>
          t.topicTitle.toLowerCase().includes(q) ||
          t.ncertSummary.toLowerCase().includes(q) ||
          t.corePrinciples.some((p) => p.toLowerCase().includes(q)) ||
          t.examples.some((e) => e.question.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeScienceTopics, searchQuery]);

  const activeScienceMeta = useMemo(() => {
    return (
      SCIENCE_CHAPTER_LIST.find((c) => c.no === activeScienceChapterNo) ||
      SCIENCE_CHAPTER_LIST[0]
    );
  }, [activeScienceChapterNo]);

  const currentChapterMeta = activeSubject === "math"
    ? MATH_CHAPTER_LIST.find((c) => c.no === activeMathChapterNo) || MATH_CHAPTER_LIST[5]
    : activeScienceMeta;

  // Previous and Next Navigation Handlers
  const handlePrevChapter = () => {
    if (activeSubject === "math") {
      const prev = activeMathChapterNo > 1 ? activeMathChapterNo - 1 : 14;
      setActiveMathChapterNo(prev);
    } else {
      const prev = activeScienceChapterNo > 1 ? activeScienceChapterNo - 1 : 13;
      setActiveScienceChapterNo(prev);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextChapter = () => {
    if (activeSubject === "math") {
      const next = activeMathChapterNo < 14 ? activeMathChapterNo + 1 : 1;
      setActiveMathChapterNo(next);
    } else {
      const next = activeScienceChapterNo < 13 ? activeScienceChapterNo + 1 : 1;
      setActiveScienceChapterNo(next);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleScienceTopic = (id: string) => {
    setExpandedScienceTopicIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllScienceTopics = () => {
    const allExpanded = filteredScienceTopics.every((t) => expandedScienceTopicIds[t.id]);
    const next: Record<string, boolean> = {};
    filteredScienceTopics.forEach((t) => {
      next[t.id] = !allExpanded;
    });
    setExpandedScienceTopicIds(next);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* =========================================================================
          1. HEADER & SUBJECT SWITCHER BANNER
          ========================================================================= */}
      <div
        className={`p-5 sm:p-8 rounded-3xl border transition-colors ${
          isDark
            ? "bg-[#121212]/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            : "bg-white border-slate-200 shadow-xl"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                CBSE Class 10 Concepts Hub
              </h2>
            </div>
            <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"} font-medium max-w-2xl`}>
              Official NCERT syllabus concepts, step-by-step marking schemes, formulas, balanced equations, and CBSE board solved examples for all 27 chapters.
            </p>
          </div>

          {/* Subject Switcher */}
          <div className={`p-1.5 rounded-2xl border flex items-center gap-1.5 w-full sm:w-auto justify-center ${
            isDark ? "bg-black/40 border-white/10" : "bg-slate-100 border-slate-200"
          }`}>
            <button
              onClick={() => {
                setActiveSubject("math");
                setIsChapterGridOpen(false);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeSubject === "math"
                  ? isDark
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md font-black"
                    : "bg-blue-600 text-white shadow-md font-black"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>📐 Mathematics (14 Ch)</span>
            </button>
            <button
              onClick={() => {
                setActiveSubject("science");
                setIsChapterGridOpen(false);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeSubject === "science"
                  ? isDark
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md font-black"
                    : "bg-teal-600 text-white shadow-md font-black"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>🧪 Science (13 Ch)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            MOBILE-FIRST RESPONSIVE CHAPTER SELECTOR (NO HORIZONTAL SCROLL TRAPS!)
            ========================================================================= */}
        <div className="pt-5 mt-5 border-t border-white/10 space-y-3">
          {/* Quick Chapter Selector Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Active Chapter:
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {activeSubject === "math" ? `Ch ${activeMathChapterNo}: ${currentChapterMeta.name}` : `Ch ${activeScienceChapterNo}: ${currentChapterMeta.name}`}
              </span>
            </div>

            {/* Toggle Grid Selector Button */}
            <button
              onClick={() => setIsChapterGridOpen(!isChapterGridOpen)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                isChapterGridOpen
                  ? "bg-blue-500 text-white border-blue-400 shadow-md"
                  : isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{isChapterGridOpen ? "Close Chapter Grid" : `Browse All ${activeSubject === "math" ? "14 Maths" : "13 Science"} Chapters`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isChapterGridOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Direct Dropdown / Full Responsive Grid (Zero Horizontal Scrolling!) */}
          {(isChapterGridOpen || true) && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 pt-2 transition-all ${
              !isChapterGridOpen ? "hidden md:grid" : "grid"
            }`}>
              {activeSubject === "math"
                ? MATH_CHAPTER_LIST.map((ch) => {
                    const isSelected = ch.no === activeMathChapterNo;
                    return (
                      <button
                        key={ch.no}
                        onClick={() => {
                          setActiveMathChapterNo(ch.no);
                          setIsChapterGridOpen(false);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border flex flex-col justify-between gap-1 min-h-[56px] ${
                          isSelected
                            ? isDark
                              ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400 font-black shadow-lg shadow-blue-500/25 scale-[1.02]"
                              : "bg-blue-600 text-white border-blue-600 font-black shadow-md scale-[1.02]"
                            : isDark
                            ? "bg-[#0b0f19] border-white/5 hover:border-white/20 text-slate-300 hover:text-white"
                            : "bg-slate-50 border-slate-200 hover:bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-mono text-[10px] opacity-75">Ch {ch.no}</span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                            isSelected ? "bg-black/30 text-white" : "bg-white/10 text-slate-400"
                          }`}>
                            {ch.weightage.split(" ")[0]}
                          </span>
                        </div>
                        <span className="text-[11px] leading-snug line-clamp-1">{ch.name}</span>
                      </button>
                    );
                  })
                : SCIENCE_CHAPTER_LIST.map((ch) => {
                    const isSelected = ch.no === activeScienceChapterNo;
                    const Icon = ch.icon;
                    return (
                      <button
                        key={ch.no}
                        onClick={() => {
                          setActiveScienceChapterNo(ch.no);
                          setIsChapterGridOpen(false);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border flex flex-col justify-between gap-1 min-h-[56px] ${
                          isSelected
                            ? isDark
                              ? "bg-gradient-to-br from-teal-500 to-emerald-600 text-slate-950 border-teal-300 font-black shadow-lg shadow-teal-500/25 scale-[1.02]"
                              : "bg-teal-600 text-white border-teal-600 font-black shadow-md scale-[1.02]"
                            : isDark
                            ? "bg-[#0b0f19] border-white/5 hover:border-white/20 text-slate-300 hover:text-white"
                            : "bg-slate-50 border-slate-200 hover:bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-mono text-[10px] opacity-75">Ch {ch.no}</span>
                          <Icon className="w-3.5 h-3.5 opacity-80" />
                        </div>
                        <span className="text-[11px] leading-snug line-clamp-1">{ch.name}</span>
                      </button>
                    );
                  })}
            </div>
          )}

          {/* Quick Prev / Next Bar on Phone */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs font-bold">
            <button
              onClick={handlePrevChapter}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Chapter</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400">
              {activeSubject === "math" ? `${activeMathChapterNo} of 14` : `${activeScienceChapterNo} of 13`}
            </span>
            <button
              onClick={handleNextChapter}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. OFFICIAL CBSE BOARD BLUEPRINT & MARKING SCHEME CARD (CRITICAL REQUIREMENT)
          ========================================================================= */}
      <div
        className={`p-6 sm:p-7 rounded-3xl border transition-all ${
          isDark
            ? "bg-[#0d1424] border-blue-500/30 shadow-[0_4px_25px_rgba(59,130,246,0.1)]"
            : "bg-blue-50/70 border-blue-200 shadow-sm"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> Official CBSE Board Blueprint 2026-27
              </span>
              <span className="text-xs font-bold text-amber-400">
                {activeSubject === "math" ? activeMathBlueprint.unitName : activeScienceBlueprint.unitName}
              </span>
            </div>
            <h3 className={`text-lg sm:text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
              {activeSubject === "math" ? activeMathChapter.title : activeScienceMeta.name} — Board Weightage: {activeSubject === "math" ? activeMathBlueprint.expectedMarks : activeScienceBlueprint.expectedMarks}
            </h3>
          </div>

          <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
            isDark ? "bg-black/40 border-white/10 text-emerald-400" : "bg-white border-blue-200 text-emerald-700"
          }`}>
            Target: 100/100 Perfect Marking
          </span>
        </div>

        {/* Section-Wise Expected Question Pattern */}
        <div className="pt-4 space-y-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
            CBSE Question Paper Pattern Breakdown for this Chapter:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {[
              { section: "Sec A (1 Mark)", count: (activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).questionPattern.mcq1M, type: "MCQs / Objective" },
              { section: "Sec B (2 Marks)", count: (activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).questionPattern.vsa2M, type: "Very Short (VSA)" },
              { section: "Sec C (3 Marks)", count: (activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).questionPattern.sa3M, type: "Short Answer (SA)" },
              { section: "Sec D (5 Marks)", count: (activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).questionPattern.la5M, type: "Long Answer (LA)" },
              { section: "Sec E (4 Marks)", count: (activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).questionPattern.case4M, type: "Case-Based Study" }
            ].map((p, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border text-center ${
                  isDark ? "bg-black/30 border-white/5" : "bg-white border-blue-100 shadow-2xs"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400 block">{p.section}</span>
                <span className="text-base sm:text-lg font-mono font-black text-blue-400 block my-0.5">
                  {p.count} Question{p.count !== 1 ? "s" : ""}
                </span>
                <span className="text-[10px] text-slate-500 block truncate">{p.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Scoring Rubric */}
        <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Official CBSE Step-by-Step Mark Award Rubric:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {(activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).markingSchemeRubric.map((r, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl border flex items-start justify-between gap-3 ${
                  isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200"
                }`}
              >
                <div className="space-y-0.5">
                  <span className={`font-bold block ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {r.step}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">{r.rubricNote}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
                  +{r.marks}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Examiner Penalties */}
        <div className="pt-3 mt-3 border-t border-white/10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-1.5">
            <ShieldAlert className="w-3.5 h-3.5" /> Examiner Trap Penalties (Marks Deducted by Board Evaluators):
          </span>
          <ul className="space-y-1 text-xs text-rose-300 font-medium">
            {(activeSubject === "math" ? activeMathBlueprint : activeScienceBlueprint).examinerPenalties.map((pen, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-rose-400 font-bold shrink-0">⚠️</span>
                <span>{pen}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =========================================================================
          3. MATHEMATICS CHAPTER CONCEPTS VIEW
          ========================================================================= */}
      {activeSubject === "math" && activeMathChapter && (
        <div className="space-y-6 animate-fade-in">
          {/* Chapter Hero Banner */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDark
                ? "bg-gradient-to-br from-[#0c1524] via-[#09101c] to-[#0c1826] border-blue-500/25 shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
                : "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/80 border-blue-200 shadow-md"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-blue-500 text-white shadow-sm flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" /> NCERT Mathematics Master
                  </span>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                    isDark ? "bg-blue-950/60 text-blue-300 border-blue-500/30" : "bg-blue-100 text-blue-900 border-blue-300"
                  }`}>
                    Chapter {activeMathChapter.chapterNo} of 14 • {activeMathBlueprint.unitName}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    {activeMathChapter.weightage}
                  </span>
                </div>

                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {activeMathChapter.title}
                </h2>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700 font-medium"
                }`}>
                  {activeMathChapter.oneLiner}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
                {onOpenTheorems && activeMathChapter.chapterNo === 6 && (
                  <button
                    onClick={onOpenTheorems}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>5M Theorem Proofs</span>
                  </button>
                )}

                {onOpenQuestionBank && (
                  <button
                    onClick={() => onOpenQuestionBank("math", activeMathChapter.chapterNo)}
                    className="px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Practice Board Questions</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Intuitive Real-World Analogy Card */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              isDark
                ? "bg-[#111625] border-amber-500/30 shadow-[0_4px_20px_rgba(245,158,11,0.08)]"
                : "bg-amber-50/70 border-amber-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                  Intuitive Mental Model & Real-World Analogy
                </span>
                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {activeMathChapter.analogyTitle}
                </h3>
                <div className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <PremiumMathRenderer content={activeMathChapter.analogyContent} />
                </div>
              </div>
            </div>
          </div>

          {/* Core Sections & Step-by-Step Problem Solving Guides */}
          <div className="space-y-5">
            {activeMathChapter.sections.map((section) => (
              <div
                key={section.id}
                className={`p-6 sm:p-7 rounded-3xl border space-y-5 transition-all ${
                  isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"
                }`}
              >
                {/* Section Header */}
                <div className="border-b pb-4 border-white/10 space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
                    {section.label}
                  </span>
                  <h3 className={`text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                    {section.heading}
                  </h3>
                  {section.subheading && (
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {section.subheading}
                    </p>
                  )}
                </div>

                {/* Core Explanation */}
                <div className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <PremiumMathRenderer content={section.explanation} />
                </div>

                {/* Key Formulas & Golden Relationships */}
                {section.formulasOrKeyPoints && section.formulasOrKeyPoints.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Key Formulas & Governing Relations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.formulasOrKeyPoints.map((fp, i) => (
                        <div
                          key={i}
                          className={`p-4 rounded-2xl border space-y-2 ${
                            isDark ? "bg-black/30 border-teal-500/20" : "bg-teal-50/50 border-teal-200"
                          }`}
                        >
                          <span className="text-xs font-bold text-teal-400 block">{fp.title}</span>
                          <div className={`text-xs font-mono ${isDark ? "text-white" : "text-slate-900"}`}>
                            <PremiumMathRenderer content={fp.content} />
                          </div>
                          {fp.note && (
                            <p className="text-[11px] text-amber-400 font-medium">⚠️ {fp.note}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step-by-Step Problem Solving Guide */}
                {section.stepByStepGuide && section.stepByStepGuide.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> Step-by-Step Problem Solving Method
                    </h4>
                    <div className="space-y-2.5">
                      {section.stepByStepGuide.map((st) => (
                        <div
                          key={st.stepNo}
                          className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                            isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-black text-xs shrink-0">
                            {st.stepNo}
                          </span>
                          <div className="space-y-1 flex-1 text-xs">
                            <span className="font-bold text-indigo-300 block">{st.title}</span>
                            <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                              <PremiumMathRenderer content={st.action} />
                            </div>
                            {st.proTip && (
                              <span className="text-[11px] text-emerald-400 font-mono block">
                                💡 Topper Tip: {st.proTip}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CBSE Examiner Traps */}
                {section.examinerTraps && section.examinerTraps.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" /> High-Risk Board Pitfalls & Corrections
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.examinerTraps.map((tr, i) => (
                        <div
                          key={i}
                          className={`p-4 rounded-2xl border space-y-2 ${
                            isDark ? "bg-rose-950/20 border-rose-800/30" : "bg-rose-50 border-rose-200"
                          }`}
                        >
                          <span className="text-xs font-bold text-rose-400 block">❌ Common Student Trap:</span>
                          <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {tr.trap}
                          </p>
                          <span className="text-xs font-bold text-emerald-400 block pt-1">
                            ✓ Mandatory Correction:
                          </span>
                          <div className={`text-xs ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                            <PremiumMathRenderer content={tr.correction} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* =========================================================================
              MATHEMATICS SOLVED BOARD EXAMPLES WITH STEP MARKS BREAKDOWN
              ========================================================================= */}
          {activeMathExamples.length > 0 && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <h3 className={`text-lg sm:text-xl font-black flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  CBSE Board Solved Model Problems with Official Mark Rubric
                </h3>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeMathExamples.length} Model Question{activeMathExamples.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-4">
                {activeMathExamples.map((ex) => (
                  <div
                    key={ex.id}
                    className={`p-6 rounded-3xl border space-y-4 transition-all ${
                      isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-white/10">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {ex.level}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        Total Marks: {ex.marks}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                      {ex.question}
                    </h4>

                    {/* Step-by-Step Marking Scheme */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                        Official Step-by-Step Scoring Distribution:
                      </span>
                      <div className="space-y-2">
                        {ex.markingSchemeSteps.map((st) => (
                          <div
                            key={st.stepNo}
                            className={`p-3 rounded-xl border flex items-start justify-between gap-3 text-xs ${
                              isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                                {st.stepNo}
                              </span>
                              <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                                <PremiumMathRenderer content={st.description} />
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                              {st.marksAwarded}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Final Answer Box */}
                    <div className={`p-3.5 rounded-xl border font-bold text-xs flex items-center justify-between ${
                      isDark ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-900"
                    }`}>
                      <span>Final Answer:</span>
                      <span className="font-mono text-sm px-3 py-1 rounded-lg bg-black/30 border border-emerald-500/30">
                        {ex.finalAnswer}
                      </span>
                    </div>

                    {ex.examinerTrap && (
                      <p className="text-[11px] text-rose-400 font-mono">
                        ⚠️ Examiner Caution: {ex.examinerTrap}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sticky/Bottom Navigation Bar */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevChapter}
              className="flex-1 py-3 rounded-2xl border border-white/10 hover:border-blue-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>
            <button
              onClick={handleNextChapter}
              className="flex-1 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. SCIENCE CHAPTER CONCEPTS VIEW
          ========================================================================= */}
      {activeSubject === "science" && (
        <div className="space-y-6 animate-fade-in">
          {/* Science Chapter Hero */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDark
                ? "bg-gradient-to-br from-[#0c1524] via-[#09101c] to-[#0c1826] border-teal-500/25 shadow-[0_8px_32px_rgba(13,148,136,0.15)]"
                : "bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/80 border-teal-200 shadow-md"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-teal-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" /> NCERT Science Master
                  </span>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                    isDark ? "bg-teal-950/60 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-900 border-teal-300"
                  }`}>
                    Chapter {activeScienceMeta.no} of 13 • {activeScienceBlueprint.unitName}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    Board Weightage: {activeScienceMeta.weightage}
                  </span>
                </div>

                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {activeScienceMeta.name}
                </h2>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700 font-medium"
                }`}>
                  Official NCERT syllabus covered with balanced chemical reactions (physical states included), biological pathways, physics formulas, and step-by-step solved board examples.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
                {onOpenActivities && (
                  <button
                    onClick={() => onOpenActivities(activeScienceMeta.no)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <FlaskConical className="w-4 h-4 text-cyan-400" />
                    <span>Lab Activities ({activeScienceMeta.no})</span>
                  </button>
                )}

                {onOpenQuestionBank && (
                  <button
                    onClick={() => onOpenQuestionBank("science", activeScienceMeta.no)}
                    className="px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-teal-500/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Practice Board Questions</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, reactions, formulas, or concepts in this chapter..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs border outline-none transition-all ${
                  isDark
                    ? "bg-[#0b0f19] border-white/10 text-white placeholder:text-slate-500 focus:border-teal-500/50"
                    : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                }`}
              />
            </div>

            <button
              onClick={toggleAllScienceTopics}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                isDark ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
              }`}
            >
              {filteredScienceTopics.every((t) => expandedScienceTopicIds[t.id])
                ? "Collapse All Topics"
                : "Expand All Topics"}
            </button>
          </div>

          {/* Science Topics List */}
          <div className="space-y-5">
            {filteredScienceTopics.map((topic, topicIdx) => {
              const isExpanded = !!expandedScienceTopicIds[topic.id];
              return (
                <div
                  key={topic.id}
                  className={`rounded-3xl border transition-all overflow-hidden ${
                    isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"
                  }`}
                >
                  {/* Topic Accordion Header */}
                  <div
                    onClick={() => toggleScienceTopic(topic.id)}
                    className={`p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 transition-colors ${
                      isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          Topic #{topicIdx + 1}
                        </span>
                        <span className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {topic.ncertSection}
                        </span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        {topic.topicTitle}
                      </h3>
                    </div>

                    <div className="p-2 rounded-xl border border-white/10 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-teal-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 pt-0 space-y-5 border-t border-white/10">
                      {/* NCERT Summary */}
                      <div className={`p-4 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"}`}>
                        <span className="text-[10px] font-mono uppercase font-bold text-teal-400 block mb-1">
                          NCERT Official Theory Summary
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {topic.ncertSummary}
                        </p>
                      </div>

                      {/* Core Principles */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
                          Core Scientific Principles:
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm">
                          {topic.corePrinciples.map((cp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold shrink-0">•</span>
                              <span className={isDark ? "text-slate-300" : "text-slate-700"}>{cp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Chemical Reactions / Physics Formulas */}
                      {topic.keyReactionsOrFormulas && topic.keyReactionsOrFormulas.length > 0 && (
                        <div className="space-y-2.5">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                            Key Reactions & Governing Equations:
                          </span>
                          <div className="grid grid-cols-1 gap-2.5">
                            {topic.keyReactionsOrFormulas.map((rf, idx) => (
                              <div
                                key={idx}
                                className={`p-3.5 rounded-xl border font-mono text-xs ${
                                  isDark ? "bg-black/40 border-cyan-500/20 text-cyan-200" : "bg-cyan-50/50 border-cyan-200 text-cyan-950"
                                }`}
                              >
                                <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-1">{rf.name}</span>
                                <div className="font-bold text-sm">
                                  <PremiumMathRenderer content={rf.formula} />
                                </div>
                                {rf.note && <p className="text-[11px] text-amber-400 mt-1 font-sans">📌 {rf.note}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Examiner Warning */}
                      {topic.commonMistakesWarning && (
                        <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${
                          isDark ? "bg-rose-950/20 border-rose-900/30 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-900"
                        }`}>
                          <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <div className="text-xs space-y-0.5">
                            <span className="font-bold block">Board Examiner Warning:</span>
                            <p className="leading-relaxed">{topic.commonMistakesWarning}</p>
                          </div>
                        </div>
                      )}

                      {/* Solved Leveled Examples */}
                      {topic.examples && topic.examples.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                            CBSE Board Model Examples ({topic.examples.length} Solved):
                          </span>
                          <div className="space-y-3">
                            {topic.examples.map((ex) => (
                              <div
                                key={ex.id}
                                className={`p-4 rounded-2xl border space-y-2.5 ${
                                  isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                                }`}
                              >
                                <div className="flex items-center justify-between text-xs">
                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    {ex.level} • {ex.marks} Mark{ex.marks > 1 ? "s" : ""}
                                  </span>
                                </div>

                                <h4 className={`text-xs sm:text-sm font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                                  {ex.question}
                                </h4>

                                {/* Solution Steps */}
                                <div className="space-y-1.5 pt-1">
                                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                                    Step-by-Step Board Solution & Marking Scheme:
                                  </span>
                                  {ex.solutionSteps.map((step, sIdx) => (
                                    <div key={sIdx} className="text-xs flex items-start gap-2">
                                      <span className="text-emerald-400 font-bold shrink-0">{sIdx + 1}.</span>
                                      <div className={isDark ? "text-slate-300" : "text-slate-700"}>
                                        <PremiumMathRenderer content={step} />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {ex.examinerTrap && (
                                  <div className="text-[11px] text-rose-400 font-mono pt-1">
                                    ⚠️ Examiner Trap: {ex.examinerTrap}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky/Bottom Navigation Bar */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevChapter}
              className="flex-1 py-3 rounded-2xl border border-white/10 hover:border-teal-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>
            <button
              onClick={handleNextChapter}
              className="flex-1 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-teal-600/20"
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
