"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  Clock,
  Flame,
  Check,
  Calculator,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  Target,
  Layers,
  FileText,
  AlertTriangle
} from "lucide-react";
import {
  CBSE_SUBJECTS,
  CHAPTER_WISE_FLASHCARDS,
  FlashcardItem,
  Chapter,
  Subject
} from "@/data/cbseData";

interface CommandCenterHomeViewProps {
  isDark: boolean;
  commandSubjectId: string;
  setCommandSubjectId: (id: string) => void;
  commandChapterId: string;
  setCommandChapterId: (id: string) => void;
  completedTopicIds: Record<string, boolean>;
  toggleTopic: (topicId: string) => void;
  myMistakes: any[];
  customFlashcards: any[];
  activeVaultQuestions: any[];
  activeVaultChapter: number | null;
  playSound: (sound: any) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, tab: string, options?: any) => void;
  getTabHref: (tab: string, subject?: string, chapter?: number) => string;
  setActiveTab: (tab: any) => void;
  setConceptsSubject: (sub: any) => void;
  setConceptsChapterNo: (no: number) => void;
  setActiveVaultSubject: (sub: any) => void;
  setActiveVaultChapter: (ch: number) => void;
  loadChapterData: (chapterNo: number, skipAi?: boolean, subjectType?: any) => void | Promise<any>;
  setTimelinesChapterKey?: (key: any) => void;
}

export default function CommandCenterHomeView({
  isDark,
  commandSubjectId,
  setCommandSubjectId,
  commandChapterId,
  setCommandChapterId,
  completedTopicIds,
  toggleTopic,
  myMistakes,
  customFlashcards,
  activeVaultQuestions,
  activeVaultChapter,
  playSound,
  handleNavClick,
  getTabHref,
  setActiveTab,
  setConceptsSubject,
  setConceptsChapterNo,
  setActiveVaultSubject,
  setActiveVaultChapter,
  loadChapterData,
  setTimelinesChapterKey
}: CommandCenterHomeViewProps) {
  // Student Name & Streak
  const [studentName, setStudentName] = useState<string>("Cadet");
  const [studyStreak, setStudyStreak] = useState<number>(1);
  const [topicFilter, setTopicFilter] = useState<"all" | "pending" | "high_yield">("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("cbse_student_name");
      if (name && name.trim().length > 0) {
        setStudentName(name.trim());
      }
      const savedStreak = parseInt(localStorage.getItem("cbse10_lsa_streak_v5") || "1", 10);
      if (!isNaN(savedStreak) && savedStreak >= 1) {
        setStudyStreak(savedStreak);
      }
    }
  }, []);

  // Time-aware greeting
  const greetingText = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }, []);

  // Days until CBSE Boards (Feb 1, 2027)
  const daysUntilBoards = useMemo(() => {
    const boardDate = new Date("2027-02-01T09:00:00").getTime();
    const diff = boardDate - Date.now();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  // 25-Min Spatial Focus Sprint Companion
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);
  const [isFocusActive, setIsFocusActive] = useState(false);
  const focusTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFocusActive) {
      focusTimerRef.current = setInterval(() => {
        setFocusSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(focusTimerRef.current!);
            setIsFocusActive(false);
            try { playSound("bell"); } catch {}
            return 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (focusTimerRef.current) {
      clearInterval(focusTimerRef.current);
    }
    return () => {
      if (focusTimerRef.current) clearInterval(focusTimerRef.current);
    };
  }, [isFocusActive, playSound]);

  const formattedFocusTime = useMemo(() => {
    const m = Math.floor(focusSeconds / 60);
    const s = focusSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [focusSeconds]);

  // Active Subject & Chapter Resolution
  const currentSubject: Subject = useMemo(() => {
    return CBSE_SUBJECTS.find((s) => s.id === commandSubjectId) || CBSE_SUBJECTS[0];
  }, [commandSubjectId]);

  const currentChapter: Chapter = useMemo(() => {
    const found = currentSubject.chapters.find((c) => c.id === commandChapterId);
    return found || currentSubject.chapters[0] || {
      id: "ch_default",
      ncertChapterNo: 1,
      name: "Introduction",
      topics: []
    };
  }, [currentSubject, commandChapterId]);

  // Subject Routing Key
  const activeSubjectKey = useMemo(() => {
    if (commandSubjectId === "maths") return "math";
    if (commandSubjectId === "science") return "science";
    if (commandSubjectId === "social") return "sst";
    if (commandSubjectId === "english") return "english";
    if (commandSubjectId === "hindi") return "hindi";
    return "math";
  }, [commandSubjectId]);

  const currentChapterNum = currentChapter.ncertChapterNo || 1;

  // Chapter Topics Progress
  const chapterTopics = currentChapter.topics || [];
  const completedInChapter = chapterTopics.filter((t) => completedTopicIds[t.id]).length;
  const chapterProgressPercent = chapterTopics.length > 0
    ? Math.round((completedInChapter / chapterTopics.length) * 100)
    : 0;

  // Next unfinished topic (Milestone)
  const nextTargetTopic = chapterTopics.find((t) => !completedTopicIds[t.id]) || chapterTopics[0];

  // Filtered Topics
  const filteredTopics = useMemo(() => {
    if (topicFilter === "high_yield") {
      return chapterTopics.filter((t) => t.isImportantForBoards);
    }
    if (topicFilter === "pending") {
      return chapterTopics.filter((t) => !completedTopicIds[t.id]);
    }
    return chapterTopics;
  }, [chapterTopics, topicFilter, completedTopicIds]);

  // Subject Switcher
  const handleSelectSubject = (subId: string) => {
    playSound("click");
    setCommandSubjectId(subId);
    const sub = CBSE_SUBJECTS.find((s) => s.id === subId);
    if (sub && sub.chapters.length > 0) {
      setCommandChapterId(sub.chapters[0].id);
    }
  };

  // Chapter Switcher
  const handleSelectChapter = (chId: string) => {
    playSound("click");
    setCommandChapterId(chId);
    const ch = currentSubject.chapters.find((c) => c.id === chId);
    if (ch) {
      const chNum = ch.ncertChapterNo || 1;
      if (["math", "science", "sst"].includes(activeSubjectKey)) {
        setConceptsSubject(activeSubjectKey);
        setConceptsChapterNo(chNum);
      }
      setActiveVaultSubject(activeSubjectKey as any);
      setActiveVaultChapter(chNum);
      loadChapterData(chNum, true, activeSubjectKey as any);
    }
  };

  // Chapter Mistakes Count
  const chapterMistakesCount = useMemo(() => {
    return myMistakes.filter((m) => {
      const matchSub = (m.subject || "").toLowerCase().includes(activeSubjectKey);
      const matchCh = (m.chapter || "").toLowerCase().includes(`${currentChapterNum}`) ||
                      (m.chapter || "").toLowerCase().includes(currentChapter.name.toLowerCase());
      return matchSub || matchCh;
    }).length;
  }, [myMistakes, activeSubjectKey, currentChapterNum, currentChapter.name]);

  // Chapter Flashcards Count
  const chapterFlashcardsCount = useMemo(() => {
    const rawSub = activeSubjectKey === "math" ? "Mathematics" :
                   activeSubjectKey === "science" ? "Science" :
                   activeSubjectKey === "sst" ? "Social Science" :
                   activeSubjectKey === "english" ? "English" : "Hindi";
    const subCards: FlashcardItem[] = (CHAPTER_WISE_FLASHCARDS as any)[rawSub] || [];
    const bankCards = subCards.filter(
      (f: FlashcardItem) => f.chapter.toLowerCase().includes(currentChapter.name.toLowerCase()) ||
                            f.chapter.toLowerCase().includes(`chapter ${currentChapterNum}`)
    );
    const userCards = customFlashcards.filter(
      (f: any) => (f.subject || "").toLowerCase().includes(activeSubjectKey)
    );
    return bankCards.length + userCards.length;
  }, [activeSubjectKey, currentChapter.name, currentChapterNum, customFlashcards]);

  // Subject Glow Theme
  const subjectTheme = useMemo(() => {
    switch (commandSubjectId) {
      case "maths":
        return {
          glow: "rgba(6,182,212,0.35)",
          activeRing: isDark ? "ring-2 ring-cyan-400 border-cyan-400/50" : "ring-2 ring-cyan-500 border-cyan-300",
          pillBg: isDark ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" : "bg-cyan-50 text-cyan-800 border-cyan-200",
          accentText: isDark ? "text-cyan-400" : "text-cyan-700",
          buttonGrad: "from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white"
        };
      case "science":
        return {
          glow: "rgba(16,185,129,0.35)",
          activeRing: isDark ? "ring-2 ring-emerald-400 border-emerald-400/50" : "ring-2 ring-emerald-500 border-emerald-300",
          pillBg: isDark ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" : "bg-emerald-50 text-emerald-800 border-emerald-200",
          accentText: isDark ? "text-emerald-400" : "text-emerald-700",
          buttonGrad: "from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white"
        };
      case "social":
        return {
          glow: "rgba(245,158,11,0.35)",
          activeRing: isDark ? "ring-2 ring-amber-400 border-amber-400/50" : "ring-2 ring-amber-500 border-amber-300",
          pillBg: isDark ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-amber-50 text-amber-800 border-amber-200",
          accentText: isDark ? "text-amber-400" : "text-amber-700",
          buttonGrad: "from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950"
        };
      case "english":
        return {
          glow: "rgba(168,85,247,0.35)",
          activeRing: isDark ? "ring-2 ring-purple-400 border-purple-400/50" : "ring-2 ring-purple-500 border-purple-300",
          pillBg: isDark ? "bg-purple-500/20 text-purple-300 border-purple-500/40" : "bg-purple-50 text-purple-800 border-purple-200",
          accentText: isDark ? "text-purple-400" : "text-purple-700",
          buttonGrad: "from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white"
        };
      case "hindi":
      default:
        return {
          glow: "rgba(244,63,94,0.35)",
          activeRing: isDark ? "ring-2 ring-rose-400 border-rose-400/50" : "ring-2 ring-rose-500 border-rose-300",
          pillBg: isDark ? "bg-rose-500/20 text-rose-300 border-rose-500/40" : "bg-rose-50 text-rose-800 border-rose-200",
          accentText: isDark ? "text-rose-400" : "text-rose-700",
          buttonGrad: "from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white"
        };
    }
  }, [commandSubjectId, isDark]);

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 py-4 font-sans antialiased relative z-10">
      
      {/* =========================================================================
          APPLE VISION PRO SPATIAL STUDY COCKPIT
          ========================================================================= */}
      <div className={`rounded-3xl transition-all duration-300 ${
        isDark ? "vision-panel" : "vision-panel-light"
      }`}>
        
        {/* SPATIAL TOP STATUS BAR */}
        <div className={`px-5 py-3.5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200/80 bg-white/40"
        }`}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className={`text-sm font-bold truncate ${isDark ? "text-white" : "text-slate-900"}`}>
              {greetingText}, {studentName} 👋
            </span>
            <span className="text-slate-400/40">•</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
              isDark ? "bg-amber-500/15 border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]" : "bg-amber-50 border-amber-200 text-amber-800"
            }`}>
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {studyStreak} Day Streak
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
              isDark ? "bg-blue-500/15 border-blue-500/30 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]" : "bg-blue-50 border-blue-200 text-blue-800"
            }`}>
              <Target className="w-3.5 h-3.5 text-blue-400" />
              Boards: {daysUntilBoards}d to Feb 1
            </span>
          </div>

          {/* SPATIAL FOCUS COMPANION ORB */}
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-xl ${
              isDark ? "bg-black/40 border-white/15 text-white" : "bg-white/80 border-slate-200 text-slate-900"
            }`}>
              <span className={`w-2 h-2 rounded-full ${isFocusActive ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`} />
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-mono font-bold tabular-nums">
                {formattedFocusTime}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                playSound("click");
                setIsFocusActive(!isFocusActive);
              }}
              className={`p-1.5 px-3 rounded-full text-xs font-bold transition-all cursor-pointer backdrop-blur-xl border flex items-center gap-1.5 shadow-sm active:scale-95 ${
                isFocusActive
                  ? "bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30"
                  : isDark
                  ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  : "bg-slate-900 text-white hover:bg-slate-800 border-slate-900"
              }`}
              title={isFocusActive ? "Pause Sprint" : "Start 25-Min Sprint"}
            >
              {isFocusActive ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
              <span>{isFocusActive ? "Pause" : "Focus"}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playSound("click");
                setIsFocusActive(false);
                setFocusSeconds(25 * 60);
              }}
              className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
                isDark ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/10" : "border-slate-200 text-slate-500 hover:bg-slate-100"
              }`}
              title="Reset Timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 5-SUBJECT LUMINOUS FLOATING CAPSULE BAR */}
        <div className={`px-5 py-3 border-b flex items-center gap-2 overflow-x-auto no-scrollbar ${
          isDark ? "border-white/10 bg-white/[0.01]" : "border-slate-200/80 bg-slate-50/40"
        }`}>
          {CBSE_SUBJECTS.map((sub) => {
            const isSelected = sub.id === commandSubjectId;
            const shortName = sub.name.split("(")[0].trim().replace("Mathematics", "Maths").replace("Social Science", "SST");
            const icon = sub.id === "maths" ? <Calculator className="w-3.5 h-3.5" /> :
                         sub.id === "science" ? <FlaskConical className="w-3.5 h-3.5" /> :
                         sub.id === "social" ? <Globe2 className="w-3.5 h-3.5" /> :
                         sub.id === "english" ? <GraduationCap className="w-3.5 h-3.5" /> :
                         <Languages className="w-3.5 h-3.5" />;

            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleSelectSubject(sub.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border active:scale-95 ${
                  isSelected
                    ? isDark
                      ? "bg-white/15 border-white/30 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] ring-1 ring-white/40"
                      : "bg-slate-900 border-slate-900 text-white shadow-md"
                    : isDark
                    ? "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {icon}
                <span>{shortName}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? isDark ? "bg-white/20 text-white" : "bg-white/20 text-white"
                    : isDark ? "bg-white/10 text-zinc-400" : "bg-slate-100 text-slate-500"
                }`}>
                  {sub.chapters.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            VISIONOS SPATIAL FLIGHT DECK (SIDE-BY-SIDE SPATIAL LAYOUT)
            ========================================================================= */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x ${
          isDark ? "divide-white/10" : "divide-slate-200"
        }`}>
          
          {/* LEFT RAIL: Interactive Spatial Chapter Drawer (4 of 12 columns) */}
          <div className={`lg:col-span-4 p-4 sm:p-5 flex flex-col justify-between space-y-4 ${
            isDark ? "bg-black/20" : "bg-slate-50/50"
          }`}>
            <div>
              <div className={`flex items-center justify-between pb-2.5 border-b mb-3 ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {currentSubject.name.split("(")[0].trim()} Chapters
                </span>
                <span className={`text-[11px] font-mono font-bold ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {currentSubject.chapters.length} Units
                </span>
              </div>

              {/* Scrollable Chapter List with Radial Progress Rings */}
              <div className="max-h-[460px] overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
                {currentSubject.chapters.map((ch, idx) => {
                  const isSelected = ch.id === commandChapterId;
                  const chNo = ch.ncertChapterNo || idx + 1;
                  const chCompleted = (ch.topics || []).filter(t => completedTopicIds[t.id]).length;
                  const chTotal = (ch.topics || []).length;
                  const isFinished = chTotal > 0 && chCompleted === chTotal;
                  const pct = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => handleSelectChapter(ch.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group active:scale-[0.98] ${
                        isSelected
                          ? isDark
                            ? "bg-white/[0.12] border-white/30 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-1 ring-white/30 font-bold"
                            : "bg-white border-slate-900 text-slate-950 shadow-md ring-1 ring-slate-900 font-bold"
                          : isFinished
                          ? isDark
                            ? "bg-emerald-500/[0.08] border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/[0.12]"
                            : "bg-emerald-50/70 border-emerald-200 text-emerald-900 hover:bg-emerald-100/70"
                          : isDark
                          ? "bg-white/[0.03] border-white/8 text-zinc-300 hover:bg-white/[0.07] hover:border-white/20 hover:text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Radial Progress Ring Mini */}
                        <div className="relative w-7 h-7 shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              className={isDark ? "stroke-white/10" : "stroke-slate-200"}
                              strokeWidth="3"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke={isFinished ? "#10b981" : isSelected ? (isDark ? "#38bdf8" : "#0f172a") : "#6366f1"}
                              strokeWidth="3"
                              strokeDasharray="100"
                              strokeDashoffset={100 - pct}
                              strokeLinecap="round"
                              className="transition-all duration-500"
                            />
                          </svg>
                          <span className="absolute text-[9px] font-mono font-black">
                            {chNo}
                          </span>
                        </div>

                        <span className="text-xs truncate font-medium">
                          {ch.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 text-[10px] font-mono">
                        {isFinished ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <span className="text-slate-400">
                            {chCompleted}/{chTotal}
                          </span>
                        )}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? "text-white translate-x-0.5" : "text-slate-500 group-hover:translate-x-0.5"
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom 4 Frosted Quick Tools */}
            <div className={`pt-3 border-t grid grid-cols-2 gap-1.5 text-[11px] font-semibold ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}>
              <Link
                href={getTabHref("flashcards")}
                onClick={(e) => handleNavClick(e, "flashcards")}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all backdrop-blur-md ${
                  isDark ? "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>🗂 Flashcards</span>
                <span className={`font-mono font-bold ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>{chapterFlashcardsCount}</span>
              </Link>
              
              <Link
                href={getTabHref("common_mistakes")}
                onClick={(e) => handleNavClick(e, "common_mistakes")}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all backdrop-blur-md ${
                  isDark ? "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>⚠️ Mistakes</span>
                <span className={`font-mono font-bold ${isDark ? "text-rose-400" : "text-rose-700"}`}>{chapterMistakesCount}</span>
              </Link>

              <Link
                href={getTabHref(
                  activeSubjectKey === "math" ? "theorems" :
                  activeSubjectKey === "science" ? "diagrams" :
                  activeSubjectKey === "sst" ? "timelines" :
                  activeSubjectKey === "hindi" ? "hindi" : "english"
                )}
                onClick={(e) => handleNavClick(e,
                  activeSubjectKey === "math" ? "theorems" :
                  activeSubjectKey === "science" ? "diagrams" :
                  activeSubjectKey === "sst" ? "timelines" :
                  activeSubjectKey === "hindi" ? "hindi" : "english"
                )}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all backdrop-blur-md ${
                  isDark ? "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>📐 Cheat-Sheet</span>
                <span className="text-slate-400">→</span>
              </Link>

              <Link
                href={getTabHref("roadmap")}
                onClick={(e) => handleNavClick(e, "roadmap")}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all backdrop-blur-md ${
                  isDark ? "bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>📅 Blueprint</span>
                <span className="text-slate-400">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT STAGE: Spatial Lesson Hero & Topic Runway (8 of 12 columns) */}
          <div className="lg:col-span-8 p-5 sm:p-6 space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Active Chapter Header with Luminous Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${subjectTheme.pillBg}`}>
                      Ch {currentChapterNum} • {currentSubject.name.split("(")[0].trim()}
                    </span>
                    {chapterProgressPercent === 100 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        ✓ Chapter Mastered
                      </span>
                    )}
                  </div>
                  <h2 className={`text-xl sm:text-2xl font-black tracking-tight mt-1.5 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {currentChapter.name}
                  </h2>
                </div>

                <div className="text-right sm:self-center shrink-0">
                  <div className={`text-xs font-mono font-bold ${isDark ? "text-zinc-200" : "text-slate-800"}`}>
                    {completedInChapter} of {chapterTopics.length} Units ({chapterProgressPercent}%)
                  </div>
                  <div className={`w-40 h-2 rounded-full overflow-hidden mt-1.5 sm:ml-auto ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        chapterProgressPercent === 100
                          ? "bg-emerald-400"
                          : isDark
                          ? "bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                          : "bg-slate-900"
                      }`}
                      style={{ width: `${chapterProgressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* =========================================================================
                  VISIONOS SPATIAL LESSON SPOTLIGHT HERO CARD
                  ========================================================================= */}
              <div className={`p-5 sm:p-6 rounded-3xl transition-all relative overflow-hidden ${
                isDark ? "vision-hero" : "vision-hero-light"
              }`}>
                {/* Iridescent Ambient Top Accent */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className={`font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-xs ${
                    isDark ? "text-amber-400" : "text-amber-800"
                  }`}>
                    <Sparkles className={`w-4 h-4 fill-current ${isDark ? "text-amber-400" : "text-amber-600"}`} />
                    Up Next Milestone
                  </span>
                  {nextTargetTopic?.isImportantForBoards && (
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${
                      isDark ? "bg-rose-500/20 text-rose-300 border-rose-500/40" : "bg-rose-50 text-rose-800 border-rose-300 font-extrabold"
                    }`}>
                      90%+ Recurring Board Question
                    </span>
                  )}
                </div>

                {/* Next Topic Title */}
                <div className="mb-4">
                  <h3 className={`text-lg sm:text-xl font-black leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
                    {nextTargetTopic ? nextTargetTopic.title : "All topics completed! Practice board questions below."}
                  </h3>
                </div>

                {/* 2 Big VisionOS Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <Link
                    href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                    onClick={(e) => handleNavClick(e, "concepts", {
                      subject: activeSubjectKey,
                      chapter: currentChapterNum
                    })}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-xs transition-all shadow-lg cursor-pointer active:scale-95 ${
                      isDark
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 shadow-amber-500/20 hover:brightness-110"
                        : "bg-slate-900 text-white hover:bg-slate-800 shadow-md"
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Topic Notes (10 Min)</span>
                  </Link>

                  <Link
                    href={getTabHref("questions", activeSubjectKey, currentChapterNum)}
                    onClick={(e) => handleNavClick(e, "questions", {
                      subject: activeSubjectKey,
                      chapter: currentChapterNum
                    })}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs transition-all border backdrop-blur-xl shadow-md cursor-pointer active:scale-95 ${
                      isDark
                        ? "bg-white/10 hover:bg-white/15 border-white/20 text-white shadow-white/5"
                        : "bg-white hover:bg-slate-100 border-slate-300 text-slate-800"
                    }`}
                  >
                    <HelpCircle className={`w-4 h-4 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
                    <span>Practice Board Questions</span>
                  </Link>
                </div>
              </div>

              {/* INTERACTIVE TOPIC RUNWAY */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pt-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    NCERT Topic Checklist
                  </span>
                  
                  {/* Topic Filter Pills */}
                  <div className={`flex items-center gap-1 p-1 rounded-full border backdrop-blur-md ${
                    isDark ? "bg-white/[0.04] border-white/10" : "bg-slate-100 border-slate-200"
                  }`}>
                    <button
                      type="button"
                      onClick={() => setTopicFilter("all")}
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "all"
                          ? isDark ? "bg-white/20 text-white shadow-sm" : "bg-white text-slate-900 shadow-sm"
                          : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      All ({chapterTopics.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopicFilter("pending")}
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "pending"
                          ? isDark ? "bg-white/20 text-white shadow-sm" : "bg-white text-slate-900 shadow-sm"
                          : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Pending ({chapterTopics.length - completedInChapter})
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopicFilter("high_yield")}
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "high_yield"
                          ? isDark ? "bg-white/20 text-white shadow-sm" : "bg-white text-slate-900 shadow-sm"
                          : isDark ? "text-zinc-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      High-Yield ({chapterTopics.filter(t => t.isImportantForBoards).length})
                    </button>
                  </div>
                </div>

                {/* Contained Checklist */}
                <div className="max-h-[220px] overflow-y-auto pr-1 space-y-2 custom-scrollbar">
                  {filteredTopics.length === 0 ? (
                    <div className={`p-6 text-center text-xs font-medium rounded-2xl border border-dashed ${
                      isDark ? "bg-white/[0.02] border-white/10 text-zinc-500" : "bg-slate-50 border-slate-200 text-slate-400"
                    }`}>
                      No topics found for this filter.
                    </div>
                  ) : (
                    filteredTopics.map((topic) => {
                      const isDone = !!completedTopicIds[topic.id];

                      return (
                        <div
                          key={topic.id}
                          className={`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all backdrop-blur-md ${
                            isDone
                              ? isDark
                                ? "bg-emerald-500/[0.06] border-emerald-500/20 text-zinc-400"
                                : "bg-emerald-50/50 border-emerald-200 text-slate-600"
                              : isDark
                              ? "bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20"
                              : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <button
                              type="button"
                              onClick={() => toggleTopic(topic.id)}
                              className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                                isDone
                                  ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                  : isDark
                                  ? "border-white/20 hover:border-white/40 bg-black/30"
                                  : "border-slate-300 hover:border-slate-400 bg-white"
                              }`}
                              title={isDone ? "Mark incomplete" : "Mark completed (+25 XP)"}
                            >
                              {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </button>

                            <div className="min-w-0">
                              <span className={`text-xs font-bold block truncate ${
                                isDone
                                  ? "line-through text-slate-400"
                                  : isDark ? "text-zinc-100" : "text-slate-900"
                              }`}>
                                {topic.title}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {topic.isImportantForBoards && (
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border hidden sm:inline ${
                                isDark ? "bg-rose-500/20 text-rose-300 border-rose-500/40" : "bg-rose-50 text-rose-800 border-rose-300 font-extrabold"
                              }`}>
                                High-Yield
                              </span>
                            )}
                            <Link
                              href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                              onClick={(e) => handleNavClick(e, "concepts", {
                                subject: activeSubjectKey,
                                chapter: currentChapterNum
                              })}
                              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer border ${
                                isDark
                                  ? "bg-white/10 hover:bg-white/20 border-white/15 text-white"
                                  : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
                              }`}
                            >
                              Study
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Quick Helper Note */}
            <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-medium ${
              isDark ? "border-white/10 text-zinc-400" : "border-slate-100 text-slate-500"
            }`}>
              <span>💡 Target: Master 2 NCERT topics daily for 100% board readiness</span>
              <Link
                href={getTabHref("roadmap")}
                onClick={(e) => handleNavClick(e, "roadmap")}
                className={`font-bold underline decoration-slate-400 cursor-pointer ${
                  isDark ? "text-amber-400 hover:text-amber-300" : "text-slate-800 hover:text-slate-950"
                }`}
              >
                View 30-Day Blueprint →
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
