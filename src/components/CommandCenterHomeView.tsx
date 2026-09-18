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
  ChevronDown,
  Layers,
  FileText,
  HelpCircle,
  AlertTriangle,
  Award,
  Clock,
  Compass,
  Zap,
  Bookmark,
  ExternalLink,
  Flame,
  Check
} from "lucide-react";
import {
  CBSE_SUBJECTS,
  CHAPTER_WISE_FLASHCARDS,
  FlashcardItem
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
  // Student Name
  const [studentName, setStudentName] = useState<string>("Cadet");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("cbse_student_name");
      if (name && name.trim().length > 0) {
        setStudentName(name.trim());
      }
    }
  }, []);

  // Today's formatted date
  const todayFormatted = useMemo(() => {
    return new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }, []);

  // 25-min Calm Focus Companion (Simple, clean, distraction-free)
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
  const currentSubject = useMemo(() => {
    return CBSE_SUBJECTS.find((s) => s.id === commandSubjectId) || CBSE_SUBJECTS[0];
  }, [commandSubjectId]);

  const currentChapter = useMemo(() => {
    const found = currentSubject.chapters.find((c) => c.id === commandChapterId);
    return found || currentSubject.chapters[0] || {
      id: "ch_default",
      ncertChapterNo: 1,
      name: "Introduction",
      topics: []
    };
  }, [currentSubject, commandChapterId]);

  // Map internal subject ID to routing key
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

  // Next unfinished topic
  const nextTargetTopic = chapterTopics.find((t) => !completedTopicIds[t.id]) || chapterTopics[0];

  // Subject Selection Handler
  const handleSelectSubject = (subId: string) => {
    playSound("click");
    setCommandSubjectId(subId);
    const sub = CBSE_SUBJECTS.find((s) => s.id === subId);
    if (sub && sub.chapters.length > 0) {
      setCommandChapterId(sub.chapters[0].id);
    }
  };

  // Chapter Selection Handler
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

  // Chapter-Specific Revision Items
  const chapterMistakesCount = useMemo(() => {
    return myMistakes.filter((m) => {
      const matchSub = (m.subject || "").toLowerCase().includes(activeSubjectKey);
      const matchCh = (m.chapter || "").toLowerCase().includes(`${currentChapterNum}`) ||
                      (m.chapter || "").toLowerCase().includes(currentChapter.name.toLowerCase());
      return matchSub || matchCh;
    }).length;
  }, [myMistakes, activeSubjectKey, currentChapterNum, currentChapter.name]);

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

  // Overall Subject Progress
  const subjectTotalTopics = useMemo(() => {
    return currentSubject.chapters.reduce((acc, ch) => acc + (ch.topics?.length || 0), 0);
  }, [currentSubject]);

  const subjectCompletedTopics = useMemo(() => {
    return currentSubject.chapters.reduce((acc, ch) => {
      return acc + (ch.topics?.filter((t) => completedTopicIds[t.id]).length || 0);
    }, 0);
  }, [currentSubject, completedTopicIds]);

  const subjectProgressPercent = subjectTotalTopics > 0
    ? Math.round((subjectCompletedTopics / subjectTotalTopics) * 100)
    : 0;

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 font-sans ${
      isDark ? "text-slate-100" : "text-slate-800"
    }`}>

      {/* =========================================================================
          1. HEADER: GREETING & FOCUS COMPANION (Clean, Calm, Respectful)
          ========================================================================= */}
      <div className={`p-6 rounded-2xl border transition-all ${
        isDark
          ? "bg-slate-900/60 border-slate-800 shadow-sm"
          : "bg-white border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]"
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                CBSE Class 10 Study Routine
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {todayFormatted}
              </span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight mt-1 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Welcome back, {studentName}
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Follow your planned syllabus step-by-step. Consistency creates mastery.
            </p>
          </div>

          {/* Simple 25-Min Study Sprint Timer */}
          <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border shrink-0 ${
            isDark
              ? "bg-slate-800/80 border-slate-700"
              : "bg-slate-50 border-slate-200"
          }`}>
            <Clock className="w-4 h-4 text-slate-500" />
            <div className="text-right">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Study Sprint
              </div>
              <div className="text-base font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                {formattedFocusTime}
              </div>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <button
                type="button"
                onClick={() => {
                  playSound("click");
                  setIsFocusActive(!isFocusActive);
                }}
                className={`p-2 rounded-lg font-medium text-xs transition-colors ${
                  isFocusActive
                    ? "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300"
                    : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900"
                }`}
                title={isFocusActive ? "Pause sprint" : "Start 25-min focus sprint"}
              >
                {isFocusActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  playSound("click");
                  setIsFocusActive(false);
                  setFocusSeconds(25 * 60);
                }}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 dark:hover:bg-slate-700 transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. SUBJECT SELECTOR (Crisp, High-Speed Tabs)
          ========================================================================= */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Subject
          </label>
          <span className="text-xs font-medium text-slate-500">
            {currentSubject.name}: {subjectCompletedTopics}/{subjectTotalTopics} Topics Mastered ({subjectProgressPercent}%)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {CBSE_SUBJECTS.map((sub) => {
            const isSelected = sub.id === commandSubjectId;
            const subTopicsTotal = sub.chapters.reduce((acc, c) => acc + (c.topics?.length || 0), 0);
            const subTopicsDone = sub.chapters.reduce((acc, c) => {
              return acc + (c.topics?.filter((t) => completedTopicIds[t.id]).length || 0);
            }, 0);
            const pct = subTopicsTotal > 0 ? Math.round((subTopicsDone / subTopicsTotal) * 100) : 0;

            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleSelectSubject(sub.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm dark:bg-white dark:text-slate-900 dark:border-white"
                    : isDark
                    ? "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs font-bold truncate">
                  {sub.name}
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] opacity-75">
                  <span>{sub.chapters.length} Chapters</span>
                  <span className="font-mono font-medium">{pct}%</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. ACTIVE CHAPTER & DIRECT REDIRECTS (Hero Study Card)
          ========================================================================= */}
      <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
        isDark
          ? "bg-slate-900/60 border-slate-800"
          : "bg-white border-slate-200 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]"
      }`}>
        <div className="space-y-6">
          {/* Chapter Selector Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200/80 dark:border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800">
                  Chapter {currentChapterNum}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentChapter.topics?.length || 0} NCERT Topics
                </span>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {currentChapter.name}
              </h2>
            </div>

            {/* Change Chapter Dropdown */}
            <div className="relative shrink-0 w-full sm:w-auto">
              <label htmlFor="chapter-select" className="sr-only">Change Chapter</label>
              <select
                id="chapter-select"
                value={commandChapterId}
                onChange={(e) => handleSelectChapter(e.target.value)}
                aria-label="Select chapter"
                className={`w-full sm:w-64 appearance-none px-3.5 py-2.5 rounded-xl border text-xs font-bold pr-9 cursor-pointer transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-750"
                    : "bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100"
                }`}
              >
                {currentSubject.chapters.map((ch, idx) => (
                  <option key={ch.id} value={ch.id}>
                    Ch {ch.ncertChapterNo || idx + 1}: {ch.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Chapter Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500">
                Chapter Completion: {completedInChapter} of {chapterTopics.length} topics finished
              </span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {chapterProgressPercent}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${chapterProgressPercent}%` }}
              />
            </div>
          </div>

          {/* 1-CLICK FAST REDIRECT BUTTONS (Instant Study Action) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
              onClick={(e) => handleNavClick(e, "concepts", {
                subject: activeSubjectKey,
                chapter: currentChapterNum
              })}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 dark:bg-slate-900/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">
                    Read Theory & Notes
                  </div>
                  <div className="text-xs text-white/70 dark:text-slate-500">
                    NCERT concepts & key definitions
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </Link>

            <Link
              href={getTabHref("questions", activeSubjectKey, currentChapterNum)}
              onClick={(e) => handleNavClick(e, "questions", {
                subject: activeSubjectKey,
                chapter: currentChapterNum
              })}
              className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                isDark
                  ? "bg-slate-800/80 border-slate-700 text-white hover:bg-slate-700/80"
                  : "bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">
                    Practice Board Questions
                  </div>
                  <div className="text-xs text-slate-500">
                    Previous 10-year CBSE vault
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. SUB-TOPICS CHECKLIST (Simple, Clear, Frictionless)
          ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-base font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Chapter Topics & Micro-Habits
            </h3>
            <p className="text-xs text-slate-500">
              Check off topics as you study. Each completed topic adds +25 XP to your progress.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500">
            {completedInChapter}/{chapterTopics.length} Done
          </span>
        </div>

        <div className="space-y-2">
          {chapterTopics.map((topic, index) => {
            const isDone = !!completedTopicIds[topic.id];

            return (
              <div
                key={topic.id}
                className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                  isDone
                    ? isDark
                      ? "bg-emerald-950/20 border-emerald-900/40 text-slate-400"
                      : "bg-emerald-50/50 border-emerald-200/70 text-slate-600"
                    : isDark
                    ? "bg-slate-900/50 border-slate-800 text-slate-200 hover:border-slate-700"
                    : "bg-white border-slate-200 text-slate-800 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isDone
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : isDark
                        ? "border-slate-700 hover:border-slate-500"
                        : "border-slate-300 hover:border-slate-400 bg-white"
                    }`}
                    title={isDone ? "Mark topic incomplete" : "Mark topic complete (+25 XP)"}
                  >
                    {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-semibold text-slate-400 mr-2">
                      {index + 1}.
                    </span>
                    <span className={`text-sm font-semibold ${
                      isDone ? "line-through text-slate-400 dark:text-slate-500" : ""
                    }`}>
                      {topic.title}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                    onClick={(e) => handleNavClick(e, "concepts", {
                      subject: activeSubjectKey,
                      chapter: currentChapterNum
                    })}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
                  >
                    Study
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          5. ACTIVE RECALL & QUICK TOOLKIT (Clean, Fast Shortcuts)
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Revision & Mistake Status */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDark
            ? "bg-slate-900/60 border-slate-800"
            : "bg-white border-slate-200 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]"
        }`}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Active Recall & Revision</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              href={getTabHref("flashcards")}
              onClick={(e) => handleNavClick(e, "flashcards")}
              className={`p-3.5 rounded-xl border text-left transition-colors ${
                isDark
                  ? "bg-slate-800/60 border-slate-700 hover:bg-slate-700/60"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                {chapterFlashcardsCount}
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Flashcards Ready
              </div>
            </Link>

            <Link
              href={getTabHref("common_mistakes")}
              onClick={(e) => handleNavClick(e, "common_mistakes")}
              className={`p-3.5 rounded-xl border text-left transition-colors ${
                isDark
                  ? "bg-slate-800/60 border-slate-700 hover:bg-slate-700/60"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="text-xl font-bold font-mono text-rose-600 dark:text-rose-400">
                {chapterMistakesCount}
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Mistakes Logged
              </div>
            </Link>
          </div>
        </div>

        {/* Essential Tools Rail */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDark
            ? "bg-slate-900/60 border-slate-800"
            : "bg-white border-slate-200 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]"
        }`}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Curriculum Toolkit</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold">
            {activeSubjectKey === "math" ? (
              <>
                <Link
                  href={getTabHref("theorems")}
                  onClick={(e) => handleNavClick(e, "theorems")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  📐 Mandatory Proofs
                </Link>
                <Link
                  href={getTabHref("activities")}
                  onClick={(e) => handleNavClick(e, "activities")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  🧪 Lab Experiments
                </Link>
              </>
            ) : activeSubjectKey === "science" ? (
              <>
                <Link
                  href={getTabHref("diagrams")}
                  onClick={(e) => handleNavClick(e, "diagrams")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  🫀 Anatomy Diagrams
                </Link>
                <Link
                  href={getTabHref("reactions")}
                  onClick={(e) => handleNavClick(e, "reactions")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  ⚗️ Chemical Reactions
                </Link>
              </>
            ) : activeSubjectKey === "sst" ? (
              <>
                <Link
                  href={getTabHref("timelines")}
                  onClick={(e) => handleNavClick(e, "timelines")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  🗺️ Metro Timelines
                </Link>
                <Link
                  href={getTabHref("syllabus")}
                  onClick={(e) => handleNavClick(e, "syllabus")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  📋 Map Work Syllabus
                </Link>
              </>
            ) : activeSubjectKey === "hindi" ? (
              <>
                <Link
                  href={getTabHref("hindi")}
                  onClick={(e) => handleNavClick(e, "hindi")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  📖 व्याकरण व मुहावरे
                </Link>
                <Link
                  href={getTabHref("hindi")}
                  onClick={(e) => handleNavClick(e, "hindi")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  ✍️ सूचना व लेखन
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={getTabHref("english")}
                  onClick={(e) => handleNavClick(e, "english")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  📚 First Flight & Footprints
                </Link>
                <Link
                  href={getTabHref("english")}
                  onClick={(e) => handleNavClick(e, "english")}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  ✍️ Writing Skills & Grammar
                </Link>
              </>
            )}

            <Link
              href={getTabHref("roadmap")}
              onClick={(e) => handleNavClick(e, "roadmap")}
              className={`p-2.5 rounded-xl border text-center transition-colors ${
                isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
              }`}
            >
              📅 30-Day Blueprint
            </Link>
            <Link
              href={getTabHref("test_series")}
              onClick={(e) => handleNavClick(e, "test_series")}
              className={`p-2.5 rounded-xl border text-center transition-colors ${
                isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
              }`}
            >
              🎯 Full Test Series
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
