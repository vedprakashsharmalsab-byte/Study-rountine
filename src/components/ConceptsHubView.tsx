"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  BookOpen,
  FlaskConical,
  Atom,
  Flame,
  Compass,
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
  LayoutGrid,
  Check,
  Target,
  Landmark,
  Flag,
  Scale,
  Globe,
  Trees,
  Droplets,
  TrendingUp,
  Briefcase,
  Coins,
  Map,
  Calendar,
  Image as ImageIcon,
  ZoomIn,
  X
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import TrigValuesMasterTable from "@/components/TrigValuesMasterTable";
import { MathDiagramFigure } from "@/components/MathDiagramFigure";
import ScienceConceptsHubView from "@/components/ScienceConceptsHubView";
import { MATH_CHAPTER_CONCEPTS, type MathChapterConcept } from "@/data/mathConceptsData";
import {
  SCIENCE_CONCEPTS_AND_EXAMPLES,
  type ScienceConceptTopic,
  type ScienceConceptExample
} from "@/data/scienceConceptsAndExamples";
import {
  MATH_OFFICIAL_BLUEPRINTS,
  SCIENCE_OFFICIAL_BLUEPRINTS,
  SST_OFFICIAL_BLUEPRINTS,
  type ChapterBlueprint
} from "@/data/cbseOfficialBlueprints";
import {
  MATH_BOARD_SOLVED_EXAMPLES,
  type MathBoardSolvedExample
} from "@/data/mathSolvedBoardExamples";
import {
  SST_CHAPTER_LIST,
  SST_CONCEPTS_AND_EXAMPLES,
  SST_TIMELINES,
  SST_MAP_WORK,
  type SSTConceptTopic,
  type SSTChapterMeta,
  type SSTTimelineEvent,
  type SSTMapWorkChapter
} from "@/data/sstConceptsData";
import SmartStudyTopicCard from "@/components/SmartStudyTopicCard";

interface ConceptsHubViewProps {
  isDark: boolean;
  initialSubject?: "math" | "science" | "sst";
  initialChapterNo?: number;
  onSubjectChange?: (subject: "math" | "science" | "sst") => void;
  onChapterChange?: (chapterNo: number) => void;
  onOpenQuestionBank?: (subject: "math" | "science" | "sst", chapterNo: number) => void;
  onOpenActivities?: (chapterNo?: number) => void;
  onOpenTheorems?: () => void;
  onOpenReactions?: (chapterNo?: number) => void;
  onOpenDiagrams?: (chapterNo?: number) => void;
  onOpenHots?: (subject: "math" | "science" | "sst", chapterNo?: number) => void;
  onOpenMnemonics?: (chapterNo?: number) => void;
  onOpenTimelines?: (chapterNo?: number) => void;
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
  initialSubject,
  initialChapterNo,
  onSubjectChange,
  onChapterChange,
  onOpenQuestionBank,
  onOpenActivities,
  onOpenTheorems,
  onOpenReactions,
  onOpenDiagrams,
  onOpenHots,
  onOpenTimelines
}: ConceptsHubViewProps) {
  // Respect explicit deep-linked props first, fallback to localStorage for session persistence
  const [activeSubject, setActiveSubject] = useState<"math" | "science" | "sst">(() => {
    if (initialSubject) return initialSubject;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_concepts_subject");
      if (saved && ["math", "science", "sst"].includes(saved)) {
        return saved as any;
      }
    }
    return "math";
  });

  const [activeMathChapterNo, setActiveMathChapterNo] = useState<number>(() => {
    if (initialSubject === "math" && initialChapterNo) return initialChapterNo;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_math_chapter");
      if (saved) {
        const p = parseInt(saved);
        if (!isNaN(p) && p >= 1 && p <= 14) return p;
      }
    }
    return 1; // Default to Chapter 1: Real Numbers (NEVER hardcoded to Triangles)
  });

  const [activeScienceChapterNo, setActiveScienceChapterNo] = useState<number>(() => {
    if (initialSubject === "science" && initialChapterNo) return initialChapterNo;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_science_chapter");
      if (saved) {
        const p = parseInt(saved);
        if (!isNaN(p) && p >= 1 && p <= 13) return p;
      }
    }
    return 1; // Default to Chapter 1: Chemical Reactions
  });

  const [activeSSTChapterNo, setActiveSSTChapterNo] = useState<number>(() => {
    if (initialSubject === "sst" && initialChapterNo) return initialChapterNo;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_sst_chapter");
      if (saved) {
        const p = parseInt(saved);
        if (!isNaN(p) && p >= 1 && p <= 10) return p;
      }
    }
    return 1; // Default to Chapter 1: Nationalism in Europe
  });

  // Track and persist changes to localStorage & notify parent
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_concepts_subject", activeSubject);
    }
    onSubjectChange?.(activeSubject);
  }, [activeSubject, onSubjectChange]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_math_chapter", activeMathChapterNo.toString());
    }
    if (activeSubject === "math") {
      onChapterChange?.(activeMathChapterNo);
    }
  }, [activeMathChapterNo, activeSubject, onChapterChange]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_science_chapter", activeScienceChapterNo.toString());
    }
    if (activeSubject === "science") {
      onChapterChange?.(activeScienceChapterNo);
    }
  }, [activeScienceChapterNo, activeSubject, onChapterChange]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_sst_chapter", activeSSTChapterNo.toString());
    }
    if (activeSubject === "sst") {
      onChapterChange?.(activeSSTChapterNo);
    }
  }, [activeSSTChapterNo, activeSubject, onChapterChange]);
  const [sstDisciplineFilter, setSstDisciplineFilter] = useState<"All" | "History" | "Political Science" | "Geography" | "Economics">("All");
  const [activeSSTViewTab, setActiveSSTViewTab] = useState<"concepts" | "timeline" | "mapwork" | "mnemonics">("concepts");
  const [expandedSSTTopicIds, setExpandedSSTTopicIds] = useState<Record<string, boolean>>({
    sst_his_c1_t1: true,
    sst_his_c1_t2: true,
    sst_his_c2_t1: true,
    sst_pol_c1_t1: true,
    sst_geo_c1_t1: true,
    sst_eco_c1_t1: true
  });
  const [activeMnemonicModal, setActiveMnemonicModal] = useState<{ src: string; title: string; description: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isChapterGridOpen, setIsChapterGridOpen] = useState<boolean>(false);

  // Science expandable topic state
  const [expandedScienceTopicIds, setExpandedScienceTopicIds] = useState<Record<string, boolean>>({
    sci_c1_t1: true,
    sci_c1_t2: true
  });

  // Sync props only when initialSubject or initialChapterNo change externally from explicit navigation
  const prevSubRef = useRef(initialSubject);
  const prevChRef = useRef(initialChapterNo);
  useEffect(() => {
    if (initialSubject && initialSubject !== prevSubRef.current) {
      prevSubRef.current = initialSubject;
      setActiveSubject(initialSubject);
    }
    if (initialChapterNo && initialChapterNo !== prevChRef.current) {
      prevChRef.current = initialChapterNo;
      const targetSub = initialSubject || activeSubject;
      if (targetSub === "math") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveMathChapterNo(initialChapterNo);
      } else if (targetSub === "science") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveScienceChapterNo(initialChapterNo);
      } else if (targetSub === "sst") {
        setActiveSSTChapterNo(initialChapterNo);
      }
    }
  }, [initialSubject, initialChapterNo, activeSubject]);

  // Active Math Chapter Data (Defaults to Ch 1 Real Numbers)
  const activeMathChapter = useMemo(() => {
    return (
      MATH_CHAPTER_CONCEPTS.find((c) => c.chapterNo === activeMathChapterNo) ||
      MATH_CHAPTER_CONCEPTS[0] // Default Ch 1 Real Numbers (NEVER hardcoded Triangles)
    );
  }, [activeMathChapterNo]);

  // Active Math Blueprint (Defaults to Ch 1)
  const activeMathBlueprint = useMemo(() => {
    return MATH_OFFICIAL_BLUEPRINTS[activeMathChapterNo] || MATH_OFFICIAL_BLUEPRINTS[1];
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

  // Active SST Blueprint (CBSE 2026-2027)
  const activeSSTBlueprint = useMemo(() => {
    return SST_OFFICIAL_BLUEPRINTS[activeSSTChapterNo] || SST_OFFICIAL_BLUEPRINTS[1];
  }, [activeSSTChapterNo]);

  // Unified active blueprint for current subject
  const activeCurrentBlueprint = useMemo(() => {
    if (activeSubject === "math") return activeMathBlueprint;
    if (activeSubject === "science") return activeScienceBlueprint;
    return activeSSTBlueprint;
  }, [activeSubject, activeMathBlueprint, activeScienceBlueprint, activeSSTBlueprint]);

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

  // Active SST Chapter Meta & Topics
  const activeSSTMeta = useMemo(() => {
    return (
      SST_CHAPTER_LIST.find((c) => c.no === activeSSTChapterNo) ||
      SST_CHAPTER_LIST[0]
    );
  }, [activeSSTChapterNo]);

  const activeSSTTopics = useMemo(() => {
    return SST_CONCEPTS_AND_EXAMPLES.filter(
      (t) => t.chapterNo === activeSSTChapterNo
    );
  }, [activeSSTChapterNo]);

  const filteredSSTTopics = useMemo(() => {
    let list = activeSSTTopics;
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
  }, [activeSSTTopics, searchQuery]);

  const filteredSSTChapterList = useMemo(() => {
    if (sstDisciplineFilter === "All") return SST_CHAPTER_LIST;
    return SST_CHAPTER_LIST.filter((c) => c.discipline === sstDisciplineFilter);
  }, [sstDisciplineFilter]);

  const activeSSTTimeline = useMemo(() => {
    if (activeSSTChapterNo === 1) return SST_TIMELINES["ch1_europe"] || [];
    if (activeSSTChapterNo === 2) return SST_TIMELINES["ch2_india"] || [];
    return [];
  }, [activeSSTChapterNo]);

  const activeSSTMapWork = useMemo(() => {
    return SST_MAP_WORK.find((m) => m.chapterNo === activeSSTChapterNo);
  }, [activeSSTChapterNo]);

  const currentChapterMeta = activeSubject === "math"
    ? MATH_CHAPTER_LIST.find((c) => c.no === activeMathChapterNo) || MATH_CHAPTER_LIST[5]
    : activeSubject === "science"
    ? activeScienceMeta
    : activeSSTMeta;

  // Previous and Next Navigation Handlers
  const handlePrevChapter = () => {
    if (activeSubject === "math") {
      const prev = activeMathChapterNo > 1 ? activeMathChapterNo - 1 : 14;
      setActiveMathChapterNo(prev);
    } else if (activeSubject === "science") {
      const prev = activeScienceChapterNo > 1 ? activeScienceChapterNo - 1 : 13;
      setActiveScienceChapterNo(prev);
    } else {
      const prev = activeSSTChapterNo > 1 ? activeSSTChapterNo - 1 : 10;
      setActiveSSTChapterNo(prev);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextChapter = () => {
    if (activeSubject === "math") {
      const next = activeMathChapterNo < 14 ? activeMathChapterNo + 1 : 1;
      setActiveMathChapterNo(next);
    } else if (activeSubject === "science") {
      const next = activeScienceChapterNo < 13 ? activeScienceChapterNo + 1 : 1;
      setActiveScienceChapterNo(next);
    } else {
      const next = activeSSTChapterNo < 10 ? activeSSTChapterNo + 1 : 1;
      setActiveSSTChapterNo(next);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleScienceTopic = (id: string) => {
    setExpandedScienceTopicIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSSTTopic = (id: string) => {
    setExpandedSSTTopicIds((prev) => ({ ...prev, [id]: !prev[id] }));
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
            <a
              href="/?tab=concepts&subject=math&chapter=1"
              onClick={(e) => {
                if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  setActiveSubject("math");
                  setIsChapterGridOpen(false);
                }
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
            </a>
            <a
              href="/?tab=concepts&subject=science&chapter=1"
              onClick={(e) => {
                if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  setActiveSubject("science");
                  setIsChapterGridOpen(false);
                }
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
            </a>
            <a
              href="/?tab=concepts&subject=sst&chapter=1"
              onClick={(e) => {
                if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  setActiveSubject("sst");
                  setIsChapterGridOpen(false);
                }
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeSubject === "sst"
                  ? isDark
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 shadow-md font-black"
                    : "bg-rose-600 text-white shadow-md font-black"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>🌍 Social Science (10 Chs)</span>
            </a>
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
                {activeSubject === "math" ? `Ch ${activeMathChapterNo}: ${currentChapterMeta.name}` : activeSubject === "science" ? `Ch ${activeScienceChapterNo}: ${currentChapterMeta.name}` : `${currentChapterMeta.shortName} (${'discipline' in currentChapterMeta ? currentChapterMeta.discipline : 'SST'})`}
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
              <span>{isChapterGridOpen ? "Close Chapter Grid" : `Browse All ${activeSubject === "math" ? "14 Maths" : activeSubject === "science" ? "13 Science" : "10 Test Series 1"} Chapters`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isChapterGridOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Universal Chapter Dropdown & Navigation Toolbar (Mobile, Smartphone, Laptop, PC) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
            <div className="flex items-center gap-2 flex-1">
              <label htmlFor="concepts-chapter-select" className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 shrink-0">
                Chapter:
              </label>
              <div className="fabulous-select-wrapper flex-1">
                <select
                  id="concepts-chapter-select"
                  aria-label="Select Chapter directly"
                  value={activeSubject === "math" ? activeMathChapterNo : activeSubject === "science" ? activeScienceChapterNo : activeSSTChapterNo}
                  onChange={(e) => {
                    const num = parseInt(e.target.value);
                    if (activeSubject === "math") setActiveMathChapterNo(num);
                    else if (activeSubject === "science") setActiveScienceChapterNo(num);
                    else setActiveSSTChapterNo(num);
                  }}
                  className={`fabulous-select ${
                    isDark ? "fabulous-select-dark" : "fabulous-select-light"
                  }`}
                >
                  {(activeSubject === "math" ? MATH_CHAPTER_LIST : activeSubject === "science" ? SCIENCE_CHAPTER_LIST : SST_CHAPTER_LIST).map((ch) => (
                    <option key={ch.no} value={ch.no}>
                      {ch.shortName} ({ch.weightage})
                    </option>
                  ))}
                </select>
                <div className="fabulous-select-icon text-zinc-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handlePrevChapter}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center transition-all cursor-pointer min-h-[42px] min-w-[42px] active:scale-95 ${
                    isDark ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                  }`}
                  title="Previous Chapter"
                  aria-label="Previous Chapter"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextChapter}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center transition-all cursor-pointer min-h-[42px] min-w-[42px] active:scale-95 ${
                    isDark ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                  }`}
                  title="Next Chapter"
                  aria-label="Next Chapter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Direct Responsive Grid (Zero Horizontal Scrolling, toggled or displayed cleanly) */}
          {isChapterGridOpen && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 pt-2 transition-all">
              {activeSubject === "sst"
                ? filteredSSTChapterList.map((ch) => {
                    const isSelected = ch.no === activeSSTChapterNo;
                    return (
                      <a
                        key={ch.no}
                        href={`/?tab=concepts&subject=sst&chapter=${ch.no}`}
                        onClick={(e) => {
                          if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            setActiveSSTChapterNo(ch.no);
                            setIsChapterGridOpen(false);
                          }
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex flex-col justify-between gap-1 border min-h-[56px] ${
                          isSelected
                            ? isDark
                              ? "bg-rose-500 text-slate-950 border-rose-400 font-black shadow-md scale-[1.02]"
                              : "bg-rose-600 text-white border-rose-600 font-black shadow-md scale-[1.02]"
                            : isDark
                            ? "bg-[#0b0f19] text-slate-300 hover:text-white border-white/5 hover:border-white/10"
                            : "bg-white text-slate-700 hover:text-slate-950 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-mono text-[10px] opacity-75">{ch.discipline}</span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded leading-none inline-flex items-center ${
                            isSelected ? "bg-black/20 text-slate-950 font-bold" : "bg-white/10 text-slate-400"
                          }`}>
                            {ch.weightage}
                          </span>
                        </div>
                        <span className="truncate text-xs font-extrabold">{ch.name}</span>
                        {ch.examStatus && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-black self-start inline-flex items-center gap-1 ${
                            isSelected
                              ? "bg-slate-950/30 text-slate-950"
                              : ch.examStatus === "board_exam"
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                              : ch.examStatus === "partial_board"
                              ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                              : "bg-sky-500/15 text-sky-400 border border-sky-500/25"
                          }`}>
                            <span>🎯</span> {ch.examStatusLabel || "Board Exam 2026"}
                          </span>
                        )}
                      </a>
                    );
                  })
                : activeSubject === "math"
                ? MATH_CHAPTER_LIST.map((ch) => {
                    const isSelected = ch.no === activeMathChapterNo;
                    return (
                      <a
                        key={ch.no}
                        href={`/?tab=concepts&subject=math&chapter=${ch.no}`}
                        onClick={(e) => {
                          if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            setActiveMathChapterNo(ch.no);
                            setIsChapterGridOpen(false);
                          }
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
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded leading-none inline-flex items-center ${
                            isSelected ? "bg-black/30 text-white" : "bg-white/10 text-slate-400"
                          }`}>
                            {ch.weightage.split(" ")[0]}
                          </span>
                        </div>
                        <span className="text-[11px] leading-snug line-clamp-1">{ch.name}</span>
                      </a>
                    );
                  })
                : SCIENCE_CHAPTER_LIST.map((ch) => {
                    const isSelected = ch.no === activeScienceChapterNo;
                    const Icon = ch.icon;
                    return (
                      <a
                        key={ch.no}
                        href={`/?tab=concepts&subject=science&chapter=${ch.no}`}
                        onClick={(e) => {
                          if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                            e.preventDefault();
                            setActiveScienceChapterNo(ch.no);
                            setIsChapterGridOpen(false);
                          }
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
                      </a>
                    );
                  })}
            </div>
          )}

          {/* Quick Prev / Next Bar on Phone */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs font-bold">
            <button
              onClick={handlePrevChapter}
              className={`px-3 py-1.5 rounded-lg border flex items-center gap-1 cursor-pointer transition-colors ${
                isDark
                  ? "border-white/10 text-slate-400 hover:text-white"
                  : "border-slate-300 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Chapter</span>
            </button>
            <span className={`text-[11px] font-mono font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {activeSubject === "math" ? `${activeMathChapterNo} of 14` : activeSubject === "science" ? `${activeScienceChapterNo} of 13` : `${activeSSTChapterNo} of 10`}
            </span>
            <button
              onClick={handleNextChapter}
              className={`px-3 py-1.5 rounded-lg border flex items-center gap-1 cursor-pointer transition-colors ${
                isDark
                  ? "border-white/10 text-slate-400 hover:text-white"
                  : "border-slate-300 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. OFFICIAL CBSE BOARD BLUEPRINT & MARKING SCHEME CARD (CRITICAL REQUIREMENT)
          Fully supported for Mathematics (041), Science (086) & Social Science (087)
          Standards: CBSE Curriculum & Marking Schemes 2026-2027
          ========================================================================= */}
      <div
        className={`p-7 sm:p-9 rounded-3xl border transition-all ${
          isDark
            ? "apple-hero-math border-blue-500/30"
            : "apple-hero-math-light border-blue-200"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 pb-5 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider bg-blue-500 text-white shadow-md shadow-blue-500/25 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Official CBSE Board Blueprint 2026-27
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                isDark ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-amber-100 text-amber-900 border-amber-300"
              }`}>
                {activeCurrentBlueprint.unitName}
              </span>
            </div>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              {activeSubject === "math" ? activeMathChapter.title : activeSubject === "science" ? activeScienceMeta.name : activeSSTMeta.name} — Board Weightage: {activeCurrentBlueprint.expectedMarks}
            </h3>
            {activeSubject === "sst" && activeSSTMeta.boardExamNote && (
              <p className={`text-xs font-mono font-semibold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                🎯 {activeSSTMeta.boardExamNote}
              </p>
            )}
          </div>

          <span className={`text-xs font-mono font-black px-4 py-2 rounded-2xl border shadow-xs ${
            isDark ? "bg-emerald-500/15 border-emerald-500/35 text-emerald-300" : "bg-emerald-100 border-emerald-300 text-emerald-950"
          }`}>
            Target: 100/100 Perfect Marking
          </span>
        </div>

        {/* Section-Wise Expected Question Pattern */}
        {(() => {
          const currentBlueprint = activeCurrentBlueprint;
          const pattern = currentBlueprint.questionPattern as any; // Allow for mapSkill
          const mapSkillMarks = pattern.mapSkill ? pattern.mapSkill * 1 : 0;
          const chapterTotalMarks = pattern.mcq1M * 1 + pattern.vsa2M * 2 + pattern.sa3M * 3 + pattern.la5M * 5 + pattern.case4M * 4 + mapSkillMarks;
          const chapterTotalQuestions = pattern.mcq1M + pattern.vsa2M + pattern.sa3M + pattern.la5M + pattern.case4M + (pattern.mapSkill ? pattern.mapSkill : 0);

          return (
            <div className="pt-6 space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-400 block">
                  CBSE Question Paper Pattern Breakdown (Pool) vs Weightage:
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-full border shadow-sm ${
                    isDark ? "bg-amber-500/15 border-amber-500/40 text-amber-300" : "bg-amber-100 border-amber-300 text-amber-900"
                  }`}>
                    Weightage: {currentBlueprint.expectedMarks}
                  </span>
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-full border ${
                    isDark ? "bg-blue-500/15 border-blue-500/30 text-blue-300" : "bg-blue-50 border-blue-200 text-blue-800"
                  }`}>
                    Pool: {chapterTotalMarks} Marks ({chapterTotalQuestions} Qs)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
                {[
                  { section: "Sec A", marksEach: 1, count: pattern.mcq1M, type: "MCQs / Objective" },
                  { section: "Sec B", marksEach: 2, count: pattern.vsa2M, type: "Very Short (VSA)" },
                  { section: "Sec C", marksEach: 3, count: pattern.sa3M, type: "Short Answer (SA)" },
                  { section: "Sec D", marksEach: 5, count: pattern.la5M, type: "Long Answer (LA)" },
                  { section: "Sec E", marksEach: 4, count: pattern.case4M, type: "Case-Based Study" },
                  ...(pattern.mapSkill ? [{ section: "Sec F", marksEach: 1, count: pattern.mapSkill, type: "Map Pointing" }] : [])
                ].map((p, idx) => {
                  const isTested = p.count > 0;
                  const sectionTotalMarks = p.count * p.marksEach;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        isTested
                          ? isDark
                            ? "bg-black/50 border-blue-500/30 shadow-md shadow-blue-500/5 hover:scale-[1.03] hover:border-blue-400"
                            : "bg-white border-blue-200 shadow-sm hover:scale-[1.03] hover:border-blue-400"
                          : isDark
                            ? "bg-white/[0.02] border-white/5 opacity-40 grayscale-[40%]"
                            : "bg-slate-50/70 border-slate-200/60 opacity-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-mono font-bold text-slate-400">{p.section} ({p.marksEach}M)</span>
                        {isTested ? (
                          <span className="text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            +{sectionTotalMarks}M
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-white/5">
                            0M
                          </span>
                        )}
                      </div>
                      <span className={`text-xl sm:text-2xl font-mono font-black block my-1 ${
                        isTested ? "text-blue-400" : "text-slate-500"
                      }`}>
                        {p.count} <span className="text-xs font-normal opacity-80">Q{p.count !== 1 ? "s" : ""}</span>
                      </span>
                      <span className="text-[11px] text-slate-400 block truncate font-medium">{p.type}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* Step-by-Step Scoring Rubric */}
        <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-teal-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Official CBSE Step-by-Step Mark Award Rubric:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {activeCurrentBlueprint.markingSchemeRubric.map((r, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border flex items-start justify-between gap-3.5 ${
                  isDark ? "bg-white/[0.025] border-white/8" : "bg-white border-slate-200 shadow-2xs"
                }`}
              >
                <div className="space-y-1">
                  <span className={`font-bold block text-sm ${isDark ? "text-slate-100" : "text-slate-800"}`}>
                    {r.step}
                  </span>
                  <span className="text-xs text-slate-400 font-mono block">{r.rubricNote}</span>
                </div>
                <span className="px-2.5 py-1 rounded-xl text-xs font-mono font-black bg-teal-500/20 text-teal-300 border border-teal-500/35 shrink-0">
                  +{r.marks}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Examiner Penalties */}
        <div className="pt-5 mt-5 border-t border-white/10">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
            <ShieldAlert className="w-4 h-4" /> Examiner Trap Penalties (Marks Deducted by Board Evaluators):
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-rose-300 font-medium">
            {activeCurrentBlueprint.examinerPenalties.map((pen, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold shrink-0 mt-0.5">⚠️</span>
                <span className="leading-relaxed">{pen}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SST: Elegant Study Blueprint Card */}
      {activeSubject === "sst" && (
        <div className={`p-7 sm:p-9 rounded-3xl border transition-all ${
          isDark
            ? "apple-insight-card border-rose-500/30"
            : "apple-insight-card-light border-rose-200"
        }`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 pb-5 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider bg-rose-500 text-white shadow-md shadow-rose-500/25 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> CBSE Social Science — Chapter Strategy
                </span>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-amber-100 text-amber-900 border-amber-300"
                }`}>{'discipline' in activeSSTMeta ? activeSSTMeta.discipline : 'SST'}</span>
              </div>
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                {activeSSTMeta.name} — {activeSSTMeta.weightage}
              </h3>
            </div>
            <span className={`text-xs font-mono font-black px-4 py-2 rounded-2xl border shrink-0 shadow-xs ${
              isDark ? "bg-emerald-500/15 border-emerald-500/35 text-emerald-300" : "bg-emerald-100 border-emerald-300 text-emerald-950"
            }`}>
              Target: 100/100 Perfect Marking
            </span>
          </div>
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {[
              { label: "Short Answer (3M)", tip: "Write 3 distinct bullet points. Name the event, exact year/date, and its historical or social impact.", color: "text-blue-400 border-blue-500/25 bg-blue-500/10" },
              { label: "Long Answer (5M)", tip: "Provide 5 structured points, each with a bold sub-heading. Integrate examples, quotes, and cause-and-effect conclusions.", color: "text-teal-400 border-teal-500/25 bg-teal-500/10" },
              { label: "Map Work & Milestones", tip: "Practice NCERT blind maps: mark industrial centers, national movement epicenters, and major river valley projects.", color: "text-amber-400 border-amber-500/25 bg-amber-500/10" },
            ].map((tip, i) => (
              <div key={i} className={`p-4 rounded-2xl border ${tip.color}`}>
                <span className="font-bold text-sm block mb-1">{tip.label}</span>
                <span className={`text-xs sm:text-sm leading-relaxed block ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          3. MATHEMATICS CHAPTER CONCEPTS VIEW
          ========================================================================= */}
      {activeSubject === "math" && activeMathChapter && (
        <div className="space-y-6 animate-fade-in">
          {/* Chapter Hero Banner - Apple Keynote Ultra-Hero */}
          <div
            className={`p-7 sm:p-10 rounded-3xl border transition-all ${
              isDark ? "apple-hero-math border-blue-500/30" : "apple-hero-math-light border-blue-200"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-blue-500 text-white shadow-md shadow-blue-500/30 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> NCERT Mathematics Master
                  </span>
                  <span className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border backdrop-blur-md ${
                    isDark ? "bg-blue-950/70 text-blue-200 border-blue-500/40" : "bg-blue-100/90 text-blue-900 border-blue-300"
                  }`}>
                    Chapter {activeMathChapter.chapterNo} of 14 • {activeMathBlueprint.unitName}
                  </span>
                  <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-400" />
                    {activeMathChapter.weightage}
                  </span>
                </div>

                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {activeMathChapter.title}
                </h2>

                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-slate-300/90" : "text-slate-700 font-medium"
                }`}>
                  {activeMathChapter.oneLiner}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
                {onOpenTheorems && [1, 4, 5, 6, 7, 8, 10, 11, 13].includes(activeMathChapter.chapterNo) && (
                  <button
                    onClick={onOpenTheorems}
                    className="px-4 py-2.5 rounded-2xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/35 transition-all cursor-pointer flex items-center gap-2 shadow-xs hover:scale-[1.02] active:scale-95"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Theorems & Derivations</span>
                  </button>
                )}

                {onOpenHots && (
                  <button
                    onClick={() => onOpenHots("math", activeMathChapter.chapterNo)}
                    className="px-4 py-2.5 rounded-2xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/35 transition-all cursor-pointer flex items-center gap-2 shadow-xs hover:scale-[1.02] active:scale-95"
                  >
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span>Competitive HOTS</span>
                  </button>
                )}

                {onOpenQuestionBank && (
                  <button
                    onClick={() => onOpenQuestionBank("math", activeMathChapter.chapterNo)}
                    className="px-6 py-3 rounded-2xl text-xs font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white transition-all cursor-pointer flex items-center gap-2.5 shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-95"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Practice Board Questions</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Intuitive Real-World Analogy Card - Apple Keynote Callout */}
          <div
            className={`p-7 sm:p-9 rounded-3xl border transition-all ${
              isDark ? "apple-insight-card border-amber-500/30" : "apple-insight-card-light border-amber-300/80"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-amber-500/25 text-amber-400 border border-amber-500/40 shadow-inner shrink-0">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="space-y-2.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase font-black text-amber-400 tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/25">
                    Keynote Mental Model
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  {activeMathChapter.analogyTitle}
                </h3>
                <div className={`text-sm sm:text-base leading-relaxed font-normal pt-1 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  <PremiumMathRenderer content={activeMathChapter.analogyContent} />
                </div>
              </div>
            </div>
          </div>

          {/* Core Sections & Step-by-Step Problem Solving Guides */}
          <div className="space-y-8">
            {activeMathChapter.sections.map((section, sIdx) => (
              <div
                key={section.id}
                style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
                className={`p-7 sm:p-10 rounded-3xl border space-y-7 transition-all ${
                  isDark ? "apple-bento-section-dark" : "apple-bento-section-light"
                }`}
              >
                {/* Section Header */}
                <div className="border-b pb-6 border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      SECTION {sIdx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      {section.label}
                    </span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    <PremiumMathRenderer content={section.heading} isDark={isDark} inline />
                  </h3>
                  {section.subheading && (
                    <div className={`text-sm sm:text-base font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      <PremiumMathRenderer content={section.subheading} isDark={isDark} inline />
                    </div>
                  )}
                </div>

                {/* Core Explanation */}
                <div className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  <PremiumMathRenderer content={section.explanation} isDark={isDark} />
                </div>

                {/* Embedded High-Yield CBSE Math Vector Figures */}
                {activeMathChapter.chapterNo === 6 && (section.id === "bpt_theorem" || section.id === "converse_bpt") && (
                  <MathDiagramFigure
                    figureType="math_triangles_bpt"
                    title="Theorem 6.1: Basic Proportionality Theorem (Thales)"
                    caption="Line DE ∥ BC divides sides AB and AC in the equal ratio AD/DB = AE/EC"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 6 && (section.id === "similarity_criteria" || section.id === "similarity_basics") && (
                  <MathDiagramFigure
                    figureType="math_triangles_similarity"
                    title="Criteria for Similarity of Triangles (AAA / SSS / SAS)"
                    caption="Corresponding angles are equal and corresponding sides are proportional"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 7 && (section.id === "distance_formula" || section.id === "section_formula") && (
                  <MathDiagramFigure
                    figureType="math_coord_distance_section"
                    title="Coordinate Geometry: Distance & Section Formula"
                    caption="Cartesian distance right triangle and internal division point P(x, y)"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 8 && (section.id === "ratios" || section.id === "punta_bata") && (
                  <MathDiagramFigure
                    figureType="math_trig_right_triangle"
                    title="Trigonometric Ratios in a Right-Angled Triangle"
                    caption="Defining sin, cos, tan, cosec, sec, cot with respect to acute angle θ"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 9 && (section.id === "angles_elevation_depression") && (
                  <MathDiagramFigure
                    figureType="math_heights_elevation_depression"
                    title="Line of Sight: Angles of Elevation and Depression"
                    caption="Horizontal observer line of sight and alternate interior angle equality (α = β)"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 9 && (section.id === "two_triangles_blueprints" || section.id === "speed_shortcuts") && (
                  <MathDiagramFigure
                    figureType="math_heights_two_observers"
                    title="Heights & Distances: Two Points on Same Side of Tower"
                    caption="Deriving distance between observers CD = h(cot 30° − cot 60°) = 2h/√3"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 10 && (section.id === "theorem_10_1" || section.id === "tangent_basics") && (
                  <MathDiagramFigure
                    figureType="math_circles_tangent_radius"
                    title="Theorem 10.1: Tangent is Perpendicular to Radius"
                    caption="The tangent XY at point of contact P is perpendicular to radius OP (OP ⊥ XY)"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 10 && (section.id === "theorem_10_2" || section.id === "hard_ncert_circles") && (
                  <MathDiagramFigure
                    figureType="math_circles_external_tangents"
                    title="Theorem 10.2: Tangents from an External Point are Equal"
                    caption="Congruence of right triangles △OAP ≅ △OBP yields PA = PB and ∠AOB + ∠APB = 180°"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 11 && (section.id === "sector_arc_formulas" || section.id === "segment_formulas") && (
                  <MathDiagramFigure
                    figureType="math_areas_sector_segment"
                    title="Geometry of Sectors & Minor Segments of a Circle"
                    caption="Arc length l = (θ/360)2πr, Sector area = (θ/360)πr², Segment = Sector − △OAB"
                    isDark={isDark}
                  />
                )}
                {activeMathChapter.chapterNo === 12 && (section.id === "solids_catalog" || section.id === "combined_solids_rule") && (
                  <MathDiagramFigure
                    figureType="math_solids_combinations"
                    title="3D Combinations of Solids: Surface Area & Volume"
                    caption="Interactive visual catalog: Toy (Cone + Hemisphere), Medicine Capsule, and Circus Tent"
                    isDark={isDark}
                  />
                )}

                {/* Dedicated Interactive 6x5 Trigonometric Values Table for Chapter 8 */}
                {activeMathChapter.chapterNo === 8 && (section.id === "table" || section.id === "values") && (
                  <TrigValuesMasterTable isDark={isDark} />
                )}

                {/* Key Formulas & Golden Relationships */}
                {section.formulasOrKeyPoints && section.formulasOrKeyPoints.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Key Formulas & Governing Relations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {section.formulasOrKeyPoints.map((fp, i) => {
                        const isWide = Boolean(
                          fp.content && (
                            fp.content.length > 120 ||
                            fp.content.includes("\n") ||
                            fp.content.includes("$$") ||
                            (fp.content.match(/\\(?:d?frac)/g) || []).length > 1
                          )
                        );
                        return (
                          <div
                            key={i}
                            className={`${
                              isWide ? "col-span-1 md:col-span-2" : "col-span-1"
                            } rounded-3xl border overflow-hidden transition-all hover:scale-[1.005] ${
                              isDark
                                ? "bg-gradient-to-br from-teal-950/40 via-[#0b1420] to-[#091019] border-teal-500/25 shadow-[0_4px_24px_rgba(20,184,166,0.1)] hover:shadow-[0_6px_28px_rgba(20,184,166,0.18)] hover:border-teal-500/40"
                                : "bg-gradient-to-br from-teal-50 via-white to-emerald-50/50 border-teal-200 shadow-sm hover:shadow-md hover:border-teal-300"
                            }`}
                          >
                            {/* Accent top-bar */}
                            <div className="h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400" />
                            <div className="p-6 sm:p-7 space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                  <span className="text-xs font-black text-teal-400">{i + 1}</span>
                                </div>
                                <div className={`text-base sm:text-lg font-black leading-snug ${ isDark ? "text-teal-300" : "text-teal-900 font-black" }`}>
                                  <PremiumMathRenderer content={fp.title} isDark={isDark} inline />
                                </div>
                              </div>
                              <div className={`text-base sm:text-lg rounded-2xl p-5 border overflow-x-auto ${
                                isDark
                                  ? "bg-black/50 border-teal-500/20 text-slate-100 shadow-inner"
                                  : "bg-teal-50/90 border-teal-200 text-slate-900 shadow-inner"
                              }`}>
                                <PremiumMathRenderer content={fp.content} isDark={isDark} />
                              </div>
                              {fp.note && (
                                <div className={`text-xs sm:text-sm font-medium pt-3 mt-1 border-t flex items-start gap-2.5 ${
                                  isDark ? "border-teal-500/20 text-amber-300" : "border-teal-200 text-amber-800 font-semibold"
                                }`}>
                                  <span className="shrink-0 text-base">💡</span>
                                  <div className="flex-1">
                                    <PremiumMathRenderer content={fp.note} isDark={isDark} />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step-by-Step Problem Solving Guide */}
                {section.stepByStepGuide && section.stepByStepGuide.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                      <Compass className="w-4 h-4" /> Step-by-Step Problem Solving Method
                    </h4>
                    <div className="space-y-3.5">
                      {section.stepByStepGuide.map((st) => (
                        <div
                          key={st.stepNo}
                          className={`p-5 sm:p-6 rounded-2xl border flex items-start gap-4 ${
                            isDark ? "bg-white/[0.03] border-white/8" : "bg-slate-50 border-slate-200 shadow-xs"
                          }`}
                        >
                          <span className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">
                            {st.stepNo}
                          </span>
                          <div className="space-y-2 flex-1">
                            <h5 className="font-bold text-base text-indigo-300 block">
                              <PremiumMathRenderer content={st.title} isDark={isDark} inline />
                            </h5>
                            <div className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                              <PremiumMathRenderer content={st.action} isDark={isDark} />
                            </div>
                            {st.proTip && (
                              <div className={`text-xs sm:text-sm font-mono pt-1.5 ${isDark ? "text-emerald-300" : "text-emerald-800 font-semibold"}`}>
                                <PremiumMathRenderer content={`💡 **Topper Tip:** ${st.proTip}`} isDark={isDark} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CBSE Examiner Traps */}
                {section.examinerTraps && section.examinerTraps.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4" /> High-Risk Board Pitfalls & Corrections
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {section.examinerTraps.map((tr, i) => (
                        <div
                          key={i}
                          className={`rounded-3xl border overflow-hidden transition-all ${
                            isDark
                              ? "bg-gradient-to-br from-rose-950/40 via-[#130a0d] to-[#0b0f19] border-rose-800/40 shadow-[0_4px_20px_rgba(239,68,68,0.1)]"
                              : "bg-gradient-to-br from-rose-50 via-white to-red-50/30 border-rose-200 shadow-sm"
                          }`}
                        >
                          {/* Bold left accent bar */}
                          <div className="flex">
                            <div className="w-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 shrink-0" />
                            <div className="flex-1 p-6 space-y-4">
                              {/* Trap section */}
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded-md ${
                                    isDark ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" : "bg-rose-100 text-rose-800 border border-rose-300"
                                  }`}>❌ Common Trap #{i + 1}</span>
                                </div>
                                <div className={`text-sm sm:text-base font-medium leading-relaxed ${ isDark ? "text-rose-200" : "text-rose-950" }`}>
                                  <PremiumMathRenderer content={tr.trap} isDark={isDark} />
                                </div>
                              </div>
                              {/* Divider */}
                              <div className={`border-t ${ isDark ? "border-rose-800/40" : "border-rose-200" }`} />
                              {/* Correction section */}
                              <div className="space-y-2">
                                <span className={`text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded-md inline-flex items-center gap-1.5 ${
                                  isDark ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                }`}>✅ Mandatory Correction</span>
                                <div className={`text-sm sm:text-base leading-relaxed ${ isDark ? "text-emerald-200" : "text-emerald-950 font-medium" }`}>
                                  <PremiumMathRenderer content={tr.correction} isDark={isDark} />
                                </div>
                              </div>
                            </div>
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
            <div className="space-y-5 pt-4">
              <div className="flex items-center justify-between">
                <h3 className={`text-xl sm:text-2xl font-black flex items-center gap-2.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  CBSE Board Solved Model Problems with Official Mark Rubric
                </h3>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeMathExamples.length} Model Question{activeMathExamples.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-5">
                {activeMathExamples.map((ex) => (
                  <div
                    key={ex.id}
                    style={{ contentVisibility: "auto", containIntrinsicSize: "450px" }}
                    className={`p-6 sm:p-7 rounded-3xl border space-y-5 transition-all ${
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

                    <h4 className={`text-base sm:text-lg font-bold leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                      <PremiumMathRenderer content={ex.question} isDark={isDark} />
                    </h4>

                    {/* Step-by-Step Marking Scheme */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-xs font-mono uppercase font-bold text-emerald-400 block">
                        Official Step-by-Step Scoring Distribution:
                      </span>
                      <div className="space-y-2.5">
                        {ex.markingSchemeSteps.map((st) => (
                          <div
                            key={st.stepNo}
                            className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 ${
                              isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                                {st.stepNo}
                              </span>
                              <div className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                <PremiumMathRenderer content={st.description} isDark={isDark} />
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                              {st.marksAwarded}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Final Answer Box */}
                    <div className={`p-4 rounded-2xl border font-bold text-sm flex items-center justify-between ${
                      isDark ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                    }`}>
                      <span className="text-sm font-bold">Official Final Answer:</span>
                      <span className="font-mono text-base px-3.5 py-1.5 rounded-xl bg-black/40 border border-emerald-500/40">
                        <PremiumMathRenderer content={ex.finalAnswer} isDark={isDark} inline />
                      </span>
                    </div>

                    {ex.examinerTrap && (
                      <div className="text-xs sm:text-sm text-rose-400 font-mono">
                        <PremiumMathRenderer content={`⚠️ **Examiner Caution:** ${ex.examinerTrap}`} isDark={isDark} />
                      </div>
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
              className={`flex-1 py-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "border-white/10 hover:border-blue-500/40 bg-white/5 hover:bg-white/10 text-white" : "border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>
            <button
              onClick={handleNextChapter}
              className={`flex-1 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                isDark ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20" : "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30"
              }`}
            >
              <span>Next Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. SCIENCE CHAPTER CONCEPTS VIEW (Toddler-to-Pro)
          ========================================================================= */}
      {activeSubject === "science" && (
        <ScienceConceptsHubView
          isDark={isDark}
          activeChapterNo={activeScienceChapterNo}
          onOpenQuestionBank={(chNo) => onOpenQuestionBank?.("science", chNo || activeScienceChapterNo)}
          onOpenActivities={onOpenActivities}
          onOpenReactions={onOpenReactions}
          onOpenDiagrams={onOpenDiagrams}
          onOpenHots={onOpenHots}
        />
      )}

      {/* =========================================================================
          5. SOCIAL SCIENCE (SST) CHAPTER CONCEPTS, TIMELINE & MAP WORK VIEW
          ========================================================================= */}
      {activeSubject === "sst" && (
        <div className="space-y-6 animate-fade-in">
          {/* SST Discipline Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-rose-400" /> Filter Discipline:
            </span>
            {(["All", "History", "Political Science", "Geography", "Economics"] as const).map((disc) => (
              <button
                key={disc}
                onClick={() => setSstDisciplineFilter(disc)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  sstDisciplineFilter === disc
                    ? isDark
                      ? "bg-rose-500 text-slate-950 border-rose-400 font-black shadow-sm"
                      : "bg-rose-600 text-white border-rose-600 font-black shadow-sm"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {disc === "All" && "🌐 All (10 Chs)"}
                {disc === "History" && "🏛️ History (2 Chs)"}
                {disc === "Political Science" && "⚖️ Civics (2 Chs)"}
                {disc === "Geography" && "🌍 Geography (3 Chs)"}
                {disc === "Economics" && "📈 Economics (3 Chs)"}
              </button>
            ))}
          </div>

          {/* SST Chapter Hero Banner */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDark
                ? "bg-gradient-to-br from-[#1c0d16] via-[#140b12] to-[#120a17] border-rose-500/25 shadow-[0_8px_32px_rgba(244,63,94,0.15)]"
                : "bg-gradient-to-br from-rose-50/90 via-white to-amber-50/80 border-rose-200 shadow-md"
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-rose-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" /> CBSE SST Test Series 1 Master
                  </span>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                    isDark ? "bg-rose-950/60 text-rose-300 border-rose-500/30" : "bg-rose-100 text-rose-900 border-rose-300"
                  }`}>
                    {activeSSTMeta.discipline} • {activeSSTMeta.unit}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    Board Weightage: {activeSSTMeta.weightage}
                  </span>
                </div>

                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {activeSSTMeta.name}
                </h2>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700 font-medium"
                }`}>
                  Comprehensive NCERT explanation with deep concepts, historical timelines, official CBSE map points, and leveled solved board questions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0">
                {activeSSTMeta.mnemonicCount > 0 && (
                  <button
                    onClick={() => setActiveSSTViewTab("mnemonics")}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Visual Mnemonics (2 Sheets)</span>
                  </button>
                )}

                {onOpenHots && (
                  <button
                    onClick={() => onOpenHots("sst", activeSSTMeta.no)}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span>Competitive HOTS</span>
                  </button>
                )}

                {onOpenQuestionBank && (
                  <button
                    onClick={() => onOpenQuestionBank("sst", activeSSTMeta.no)}
                    className="px-4 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-rose-500/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Solve Questions Vault</span>
                  </button>
                )}
              </div>
            </div>

            {/* PROMINENT TIMELINE ANNOUNCEMENT BANNER (CRITICAL FOR DISCOVERABILITY) */}
            {activeSSTMeta.timelineAvailable && (
              <div 
                onClick={() => setActiveSSTViewTab("timeline")}
                className={`mt-5 p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  activeSSTViewTab === "timeline"
                    ? "bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/50"
                    : isDark
                    ? "bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black/40 border-amber-500/30 hover:border-amber-400/60 shadow-md"
                    : "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 border-amber-300 hover:border-amber-400 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500 text-slate-950 font-black shrink-0 shadow-md">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950">
                        ⚡ FULL CHRONOLOGICAL TIMELINE AVAILABLE
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {activeSSTTimeline.length} Milestone Events with NCERT Page References
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm font-bold mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {activeSSTChapterNo === 1 
                        ? "The Rise of Nationalism in Europe (1789 French Revolution to 1914 WW1)" 
                        : "Nationalism in India (1915 Gandhi's Return to 1947 Independence)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 flex-wrap">
                  {onOpenTimelines && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenTimelines(activeSSTChapterNo);
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 hover:brightness-110 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>🎮 Play Chronology Game & Flashcards</span>
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSSTViewTab(activeSSTViewTab === "timeline" ? "concepts" : "timeline");
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shrink-0"
                  >
                    <span>{activeSSTViewTab === "timeline" ? "📘 Switch to Concepts" : `📜 Open Timeline (${activeSSTTimeline.length} Events)`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* SST View Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => setActiveSSTViewTab("concepts")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  activeSSTViewTab === "concepts"
                    ? isDark
                      ? "bg-rose-500 text-slate-950 border-rose-400 font-black shadow-md"
                      : "bg-rose-600 text-white border-rose-600 font-black shadow-md"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📘 Deep NCERT Concepts ({filteredSSTTopics.length})</span>
              </button>

              {activeSSTMeta.timelineAvailable && (
                <button
                  onClick={() => setActiveSSTViewTab("timeline")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                    activeSSTViewTab === "timeline"
                      ? isDark
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                        : "bg-amber-600 text-white border-amber-600 font-black shadow-md"
                      : isDark
                      ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>📜 Chronological Timeline ({activeSSTTimeline.length} Events)</span>
                </button>
              )}

              {activeSSTMeta.mapWorkAvailable && activeSSTMapWork && (
                <button
                  onClick={() => setActiveSSTViewTab("mapwork")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                    activeSSTViewTab === "mapwork"
                      ? isDark
                        ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-md"
                        : "bg-teal-600 text-white border-teal-600 font-black shadow-md"
                      : isDark
                      ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>🗺️ CBSE Board Map Work</span>
                </button>
              )}

              <button
                onClick={() => setActiveSSTViewTab("mnemonics")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  activeSSTViewTab === "mnemonics"
                    ? isDark
                      ? "bg-purple-500 text-white border-purple-400 font-black shadow-md"
                      : "bg-purple-600 text-white border-purple-600 font-black shadow-md"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>🖼️ Visual Mnemonics (2 Sheets)</span>
              </button>
            </div>
          </div>

          {/* TAB 1: DEEP NCERT CONCEPTS WITH SMART STUDY VISUAL CARDS */}
          {activeSSTViewTab === "concepts" && (
            <div className="space-y-6">
              {filteredSSTTopics.map((topic, topicIdx) => (
                <SmartStudyTopicCard
                  key={topic.id}
                  topic={topic}
                  topicIdx={topicIdx}
                  isDark={isDark}
                  isExpanded={!!expandedSSTTopicIds[topic.id]}
                  onToggle={() => toggleSSTTopic(topic.id)}
                />
              ))}
            </div>
          )}

          {/* TAB 2: CHRONOLOGICAL TIMELINE (HISTORY) */}
          {activeSSTViewTab === "timeline" && activeSSTTimeline.length > 0 && (
            <div className={`p-6 sm:p-8 rounded-3xl border ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"}`}>
              {/* SMART STUDY HERO LAUNCHER */}
              <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 ${
                isDark ? "bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-transparent border-amber-500/30" : "bg-gradient-to-r from-amber-50 via-rose-50/50 to-white border-amber-200"
              }`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950">
                      ⚡ Smart Study Suite
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      CBSE Exam Ordering Challenges, Flashcards & Quick Matrix
                    </span>
                  </div>
                  <h4 className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                    Interactive Chronology Challenge & Rapid Recall Engine
                  </h4>
                  <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Practice official CBSE board sequence questions with interactive ordering, instant scoring, and active recall flip flashcards.
                  </p>
                </div>
                {onOpenTimelines && (
                  <button
                    onClick={() => onOpenTimelines(activeSSTChapterNo)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 hover:brightness-110 text-slate-950 shadow-lg shadow-amber-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Launch Dedicated Timelines Master</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-amber-400" />
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Chronological Timeline: {activeSSTMeta.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Complete milestone events for CBSE Class 10 Board historical sequence questions.
                  </p>
                </div>
              </div>

              <div className="relative border-l-2 border-amber-500/30 ml-4 pl-6 space-y-6">
                {activeSSTTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-4 border-[#0b0f19] shadow-sm" />
                    <div className={`p-4 rounded-2xl border transition-all ${
                      isDark ? "bg-white/[0.02] border-white/10 hover:border-amber-500/30" : "bg-slate-50 border-slate-200 hover:border-amber-400 shadow-2xs"
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          {item.year}
                        </span>
                        {item.ncertReference && (
                          <span className="text-[10px] font-mono font-bold text-amber-400/90 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                            📖 {item.ncertReference}
                          </span>
                        )}
                      </div>
                      <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                        {item.event}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {item.significance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CBSE BOARD MAP WORK */}
          {activeSSTViewTab === "mapwork" && activeSSTMapWork && (
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"}`}>
              <div className="flex items-center gap-3">
                <Map className="w-6 h-6 text-teal-400" />
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    CBSE Board Prescribed Map Work (Test Series 1)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Strictly aligned with CBSE SQP 2026-27 Section F (5 Marks Map Question).
                  </p>
                </div>
              </div>

              {activeSSTMapWork.items.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block">
                    {cat.category}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cat.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className={`p-4 rounded-2xl border space-y-1.5 ${
                          isDark ? "bg-white/[0.02] border-white/10" : "bg-teal-50/50 border-teal-200 shadow-2xs"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-teal-300">{pt.label}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                            {pt.river ? pt.river : "Location"}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-amber-300">📍 State / Region: {pt.state}</p>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{pt.significance}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: VISUAL MNEMONICS */}
          {activeSSTViewTab === "mnemonics" && (
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-md"}`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Chapter Visual Mnemonics ({activeSSTMeta.name})
                  </h3>
                  <p className="text-xs text-slate-400">
                    Hand-crafted visual cheat sheets and revision diagrams. Click any sheet to zoom.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(activeSSTTopics[0]?.mnemonicImages || []).map((img, iIdx) => (
                  <div
                    key={iIdx}
                    onClick={() => setActiveMnemonicModal(img)}
                    className={`p-4 rounded-3xl border cursor-pointer group transition-all transform hover:scale-[1.01] ${
                      isDark ? "bg-white/[0.02] border-white/10 hover:border-amber-500/40" : "bg-slate-50 border-slate-200 hover:border-amber-400 shadow-md"
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 mb-3">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                        <ZoomIn className="w-5 h-5" /> Click to View Full Resolution
                      </div>
                    </div>
                    <h4 className={`font-bold text-sm mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {img.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Sticky Navigation */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevChapter}
              className={`flex-1 py-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "border-white/10 hover:border-rose-500/40 bg-white/5 hover:bg-white/10 text-white" : "border-slate-200 hover:border-rose-400 bg-slate-50 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous SST Chapter</span>
            </button>
            <button
              onClick={handleNextChapter}
              className={`flex-1 py-3 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                isDark ? "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20" : "bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/30"
              }`}
            >
              <span>Next SST Chapter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Full-screen Mnemonic Modal */}
      {activeMnemonicModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActiveMnemonicModal(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-950 rounded-3xl border border-white/20 p-4 flex flex-col items-center overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">{activeMnemonicModal.title}</h3>
                <p className="text-xs text-slate-400">{activeMnemonicModal.description}</p>
              </div>
              <button
                onClick={() => setActiveMnemonicModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full overflow-auto flex items-center justify-center p-2">
              <img
                src={activeMnemonicModal.src}
                alt={activeMnemonicModal.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
