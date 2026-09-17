"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Compass,
  Beaker,
  Award,
  Calendar,
  Zap,
  Flame,
  BookMarked,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Check,
  ChevronDown,
  Layers,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  GraduationCap
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
  // Psychological Micro-Sprint Timer (Pomodoro Habit Trigger: 25 min focus / 5 min rest)
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<"focus" | "break">("focus");

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroSeconds === 0) {
      setIsTimerRunning(false);
      playSound("complete");
      if (timerMode === "focus") {
        setTimerMode("break");
        setPomodoroSeconds(5 * 60);
      } else {
        setTimerMode("focus");
        setPomodoroSeconds(25 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, pomodoroSeconds, timerMode, playSound]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const activeSubject = CBSE_SUBJECTS.find((s) => s.id === commandSubjectId) || CBSE_SUBJECTS[0];
  const activeChapter = activeSubject.chapters.find((c) => c.id === commandChapterId) || activeSubject.chapters[0];
  const ncertNum = activeChapter.ncertChapterNo;

  // Real progress calculations
  const totalTopics = activeChapter.topics.length;
  const completedTopicsCount = activeChapter.topics.filter((t) => completedTopicIds[t.id]).length;
  const progressPct = totalTopics > 0 ? Math.round((completedTopicsCount / totalTopics) * 100) : 0;
  const masteryPct = progressPct;

  // Question bank statistics
  const chapterQuestionsCount =
    activeVaultQuestions.length > 0 && ncertNum === activeVaultChapter
      ? activeVaultQuestions.length
      : totalTopics * 4 || 25;
  const attemptedCount = Math.min(completedTopicsCount, chapterQuestionsCount);
  const attemptedStr = `${attemptedCount}/${chapterQuestionsCount}`;
  const accuracyStr =
    attemptedCount > 0
      ? `${Math.min(100, Math.round((completedTopicsCount / attemptedCount) * 100))}%`
      : "0%";

  // Real mistake logs count
  const chapterMistakesCount = myMistakes.filter((m) => {
    const chap = (m.chapter || "").toLowerCase();
    const sName = (activeChapter.name || "").toLowerCase();
    return chap.includes(sName) || (ncertNum && chap.includes(`ch ${ncertNum}`));
  }).length;

  // Real flashcards count
  const chapterFlashcardsCount =
    CHAPTER_WISE_FLASHCARDS.filter((fc) =>
      fc.chapter?.toLowerCase().includes(activeChapter.name.toLowerCase())
    ).length +
    customFlashcards.filter((fc) =>
      fc.chapter?.toLowerCase().includes(activeChapter.name.toLowerCase())
    ).length;

  // Next target uncompleted topics
  const uncompletedTopics = activeChapter.topics.filter((t) => !completedTopicIds[t.id]);
  const nextTargetTopic = uncompletedTopics.length > 0 ? uncompletedTopics[0] : null;
  const weakAreas =
    uncompletedTopics.length > 0
      ? uncompletedTopics.slice(0, 3).map((t) => t.title)
      : ["All Core NCERT Topics Completed! 🎉"];

  // Dynamic Concept Mastery Nodes
  const concepts = activeChapter.topics.slice(0, 6).map((t) => {
    const isDone = !!completedTopicIds[t.id];
    return {
      id: t.id,
      name: t.title,
      pct: isDone ? 100 : 0,
      status: isDone ? "Mastered" : "Unattempted",
      color: isDone ? "emerald" : "rose"
    };
  });

  // Overall Board Syllabus coverage badge info
  const syllabusBadge = useMemo(() => {
    if (activeChapter.examStatus === "partial_board") {
      return {
        label: "Partial Board Syllabus (Subtopics 1–1.3)",
        bg: isDark ? "bg-amber-500/15 text-amber-300 border-amber-500/30" : "bg-amber-50 text-amber-800 border-amber-200",
        icon: "⚠️"
      };
    }
    if (activeChapter.examStatus === "periodic_test_only") {
      return {
        label: "Periodic School Tests Only (Not in Board)",
        bg: isDark ? "bg-sky-500/15 text-sky-300 border-sky-500/30" : "bg-sky-50 text-sky-800 border-sky-200",
        icon: "📋"
      };
    }
    if (activeChapter.examStatus === "project_only") {
      return {
        label: "Internal Assessment Project Only",
        bg: isDark ? "bg-purple-500/15 text-purple-300 border-purple-500/30" : "bg-purple-50 text-purple-800 border-purple-200",
        icon: "📝"
      };
    }
    return {
      label: "Official 80M Board Exam Paper",
      bg: isDark ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border-emerald-200",
      icon: "🎯"
    };
  }, [activeChapter.examStatus, isDark]);

  return (
    <div className="space-y-6 sm:space-y-7 animate-fade-in font-sans">
      {/* ========================================================================= */}
      {/* ZONE 1: THE BEHAVIORAL KEYSTONE HERO (ELIMINATES CHOICE PARALYSIS)        */}
      {/* ========================================================================= */}
      <div
        className={`rounded-3xl border transition-all relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-b from-[#0e1726] to-[#0a101d] border-slate-800 shadow-xl text-slate-100"
            : "bg-white border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] text-slate-900"
        }`}
      >
        <div className="p-6 sm:p-8 lg:p-10">
          {/* Top Compass Strip: Habit Streak + Micro-Pomodoro Sprint */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Daily Keystone Session</span>
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${syllabusBadge.bg}`}>
                <span>{syllabusBadge.icon}</span>
                <span>{activeSubject.name} • Ch {ncertNum}</span>
              </span>
            </div>

            {/* Scientific Focus Sprint Timer (25m Focus Block) */}
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all ${
                isDark ? "bg-slate-900/90 border-slate-800" : "bg-slate-50 border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-wider">
                  {timerMode === "focus" ? "25m Sprint" : "5m Break"}:
                </span>
                <span className="text-sm font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                  {formatTimer(pomodoroSeconds)}
                </span>
              </div>
              <div className="flex items-center gap-1 border-l pl-2.5 border-slate-300 dark:border-slate-700">
                <button
                  onClick={() => {
                    playSound("click");
                    setIsTimerRunning(!isTimerRunning);
                  }}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    isTimerRunning
                      ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 hover:bg-amber-500/25"
                      : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/25"
                  }`}
                  title={isTimerRunning ? "Pause Sprint" : "Start Sprint"}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => {
                    playSound("click");
                    setIsTimerRunning(false);
                    setPomodoroSeconds(25 * 60);
                    setTimerMode("focus");
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all cursor-pointer"
                  title="Reset Sprint"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Core Content: Prompt to Conquer Next Topic */}
          <div className="pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Next Immediate Milestone</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                {activeChapter.name}
              </h1>

              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300 font-normal" : "text-slate-600 font-normal"}`}>
                {nextTargetTopic ? (
                  <>
                    Target for this session: <strong className="font-semibold text-slate-900 dark:text-white">"{nextTargetTopic.title}"</strong>. Visual theory breakdown, mandatory diagrams/proofs, and immediate high-yield CBSE board practice.
                  </>
                ) : (
                  "Congratulations! All core syllabus sub-topics for this chapter have been marked as mastered. Review flashcards or complete an exam sprint to consolidate memory."
                )}
              </p>

              {activeChapter.syllabusNote && (
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs border ${
                  isDark ? "bg-slate-900/60 text-slate-300 border-slate-800" : "bg-slate-50 text-slate-700 border-slate-200"
                }`}>
                  <span className="text-amber-500">ℹ️</span>
                  <span>{activeChapter.syllabusNote}</span>
                </div>
              )}
            </div>

            {/* Primary Action Button (The "Routine" Trigger) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={getTabHref(
                  commandSubjectId === "hindi" ? "hindi" : "concepts",
                  commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math",
                  ncertNum || 1
                )}
                onClick={(e) => {
                  playSound("click");
                  if (commandSubjectId === "hindi") {
                    handleNavClick(e, "hindi", {
                      customAction: () => {
                        setActiveTab("hindi");
                      }
                    });
                    return;
                  }
                  const targetSub =
                    commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math";
                  handleNavClick(e, "concepts", {
                    subject: targetSub,
                    chapter: ncertNum || 1,
                    customAction: () => {
                      setConceptsSubject(targetSub);
                      setConceptsChapterNo(ncertNum || 1);
                    }
                  });
                }}
                className="px-7 py-4 rounded-2xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-98 touch-manipulation"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start 10-Min Lesson Flow</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Subject Scientific Selector Bar */}
        <div className={`px-6 sm:px-8 py-4 border-t flex items-center gap-2 overflow-x-auto ${
          isDark ? "bg-slate-950/40 border-slate-800" : "bg-slate-50/70 border-slate-100"
        }`}>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2 shrink-0">
            Subject:
          </span>
          <div className="flex items-center gap-2">
            {[
              { id: "math", label: "Mathematics", icon: "📐", chCount: 14 },
              { id: "science", label: "Science", icon: "🔬", chCount: 13 },
              { id: "sst", label: "Social Science", icon: "🌍", chCount: 21 },
              { id: "english", label: "English", icon: "📖", chCount: 184 },
              { id: "hindi", label: "Hindi (Code 085)", icon: "✍️", chCount: 17 }
            ].map((s) => {
              const isSelected = commandSubjectId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    playSound("switch");
                    setCommandSubjectId(s.id);
                    const sub = CBSE_SUBJECTS.find((subItem) => subItem.id === s.id);
                    if (sub && sub.chapters.length > 0) {
                      setCommandChapterId(sub.chapters[0].id);
                      const chNo = sub.chapters[0].ncertChapterNo || 1;
                      const subjectType =
                        s.id === "science" ? "science" : s.id === "sst" ? "sst" : s.id === "english" ? "english" : "math";
                      setActiveVaultSubject(subjectType);
                      setActiveVaultChapter(chNo);
                      loadChapterData(chNo, false, subjectType);
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer border ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                      : isDark
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100/80"
                  }`}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {s.chCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ZONE 2: CHAPTER NAVIGATION & 4 CORE METRIC CARDS                          */}
      {/* ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-[#0f172a]/90 border-slate-800 shadow-xl"
            : "bg-white border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Chapter Switcher Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
              Curriculum Navigator
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              {activeChapter.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {totalTopics} Official NCERT Sub-Topics • Target: 100% Board Readiness
            </p>
          </div>

          {/* Clean Dropdown Selectors */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${
              isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
            }`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Subject:</span>
              <select
                className="bg-transparent font-bold outline-none cursor-pointer"
                value={commandSubjectId}
                onChange={(e) => {
                  playSound("click");
                  const newSubId = e.target.value;
                  setCommandSubjectId(newSubId);
                  const sub = CBSE_SUBJECTS.find((s) => s.id === newSubId);
                  if (sub && sub.chapters.length > 0) {
                    setCommandChapterId(sub.chapters[0].id);
                    const chNo = sub.chapters[0].ncertChapterNo || 1;
                    const subjectType =
                      newSubId === "science" ? "science" : newSubId === "sst" ? "sst" : newSubId === "english" ? "english" : "math";
                    setActiveVaultSubject(subjectType);
                    setActiveVaultChapter(chNo);
                    loadChapterData(chNo, false, subjectType);
                  }
                }}
              >
                {CBSE_SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold max-w-[260px] ${
              isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
            }`}>
              <span className="text-[10px] uppercase font-bold text-slate-400">Chapter:</span>
              <select
                className="bg-transparent font-bold outline-none cursor-pointer truncate max-w-[170px]"
                value={commandChapterId}
                onChange={(e) => {
                  playSound("click");
                  const newChId = e.target.value;
                  setCommandChapterId(newChId);
                  const ch = activeSubject.chapters.find((c) => c.id === newChId);
                  if (ch) {
                    const chNo = ch.ncertChapterNo || 1;
                    const subjectType =
                      commandSubjectId === "science"
                        ? "science"
                        : commandSubjectId === "sst"
                        ? "sst"
                        : commandSubjectId === "english"
                        ? "english"
                        : "math";
                    setActiveVaultSubject(subjectType);
                    setActiveVaultChapter(chNo);
                    loadChapterData(chNo, false, subjectType);
                  }
                }}
              >
                {activeSubject.chapters.map((c) => (
                  <option key={c.id} value={c.id} className={isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                    {c.ncertChapterNo ? `Ch ${c.ncertChapterNo}: ` : ""}{c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 4 Clean Metric Cards (Zero Glare, High Legibility) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            isDark ? "bg-slate-900/60 border-slate-800 hover:border-emerald-500/30" : "bg-slate-50/70 border-slate-200/80 hover:border-emerald-300"
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Progress
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {progressPct}%
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
              {completedTopicsCount} of {totalTopics} Topics Mastered
            </p>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            isDark ? "bg-slate-900/60 border-slate-800 hover:border-blue-500/30" : "bg-slate-50/70 border-slate-200/80 hover:border-blue-300"
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Readiness
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {masteryPct}%
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
              NCERT Exemplar & Proofs
            </p>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${masteryPct}%` }}
              />
            </div>
          </div>

          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            isDark ? "bg-slate-900/60 border-slate-800 hover:border-amber-500/30" : "bg-slate-50/70 border-slate-200/80 hover:border-amber-300"
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Practice Bank
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {attemptedStr}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
              Accuracy: {accuracyStr}
            </p>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: accuracyStr }}
              />
            </div>
          </div>

          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            isDark ? "bg-slate-900/60 border-slate-800 hover:border-rose-500/30" : "bg-slate-50/70 border-slate-200/80 hover:border-rose-300"
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                Revision Items
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {chapterMistakesCount + chapterFlashcardsCount}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
              {chapterFlashcardsCount} Cards • {chapterMistakesCount} Traps
            </p>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, (chapterMistakesCount + chapterFlashcardsCount) * 10)}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Strip */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Jump Directly To:
          </span>

          <a
            href={getTabHref(
              commandSubjectId === "hindi" ? "hindi" : "concepts",
              commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math",
              ncertNum || 1
            )}
            onClick={(e) => {
              if (commandSubjectId === "hindi") {
                handleNavClick(e, "hindi", {
                  customAction: () => {
                    setActiveTab("hindi");
                  }
                });
                return;
              }
              const targetSub =
                commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math";
              handleNavClick(e, "concepts", {
                subject: targetSub,
                chapter: ncertNum || 1,
                customAction: () => {
                  setConceptsSubject(targetSub);
                  setConceptsChapterNo(ncertNum || 1);
                }
              });
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Visual Theory</span>
          </a>

          {commandSubjectId === "science" && (
            <a
              href={getTabHref("diagrams")}
              onClick={(e) => {
                handleNavClick(e, "diagrams", {
                  customAction: () => {
                    setActiveTab("diagrams");
                  }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 dark:bg-sky-950/30 dark:hover:bg-sky-950/50 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>2. Diagrams & Sheets</span>
            </a>
          )}

          {commandSubjectId === "science" && (
            <a
              href={getTabHref("activities")}
              onClick={(e) => {
                handleNavClick(e, "activities", {
                  customAction: () => {
                    setActiveTab("activities");
                  }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60"
            >
              <Beaker className="w-3.5 h-3.5" />
              <span>3. Lab Experiments</span>
            </a>
          )}

          {commandSubjectId === "math" && (
            <a
              href={getTabHref("theorems")}
              onClick={(e) => {
                handleNavClick(e, "theorems", {
                  customAction: () => {
                    setActiveTab("theorems");
                  }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:hover:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
            >
              <Award className="w-3.5 h-3.5" />
              <span>2. Mandatory Proofs</span>
            </a>
          )}

          {commandSubjectId === "sst" && (
            <a
              href={getTabHref("timelines")}
              onClick={(e) => {
                handleNavClick(e, "timelines", {
                  customAction: () => {
                    if (setTimelinesChapterKey) {
                      setTimelinesChapterKey(ncertNum === 1 ? "ch1_europe" : "ch2_india");
                    }
                  }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:hover:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>2. Metro Timelines</span>
            </a>
          )}

          {commandSubjectId === "hindi" && (
            <a
              href={getTabHref("hindi")}
              onClick={(e) => {
                handleNavClick(e, "hindi", {
                  customAction: () => {
                    setActiveTab("hindi");
                  }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. संपूर्ण हिंदी मास्टर (Literature & Grammar)</span>
            </a>
          )}

          <a
            href={getTabHref(
              "questions",
              commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math",
              ncertNum || 1
            )}
            onClick={(e) => {
              const targetSub =
                commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math";
              handleNavClick(e, "questions", {
                subject: targetSub,
                chapter: ncertNum || 1,
                customAction: () => {
                  setActiveVaultSubject(targetSub as any);
                  setActiveVaultChapter(ncertNum || 1);
                  loadChapterData(ncertNum || 1, false, targetSub as any);
                }
              });
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs sm:ml-auto"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Practice Vault →</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ZONE 3: SEQUENTIAL SUB-TOPIC HABIT CHECKLIST                              */}
      {/* ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-[#0f172a]/90 border-slate-800 shadow-xl"
            : "bg-white border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>NCERT Chapter Sub-Topics Roadmap</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Check off each topic as you master it to earn +25 XP and build your study streak
            </p>
          </div>

          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {completedTopicsCount} / {totalTopics} Completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {activeChapter.topics.map((topic, idx) => {
            const isDone = !!completedTopicIds[topic.id];
            return (
              <div
                key={topic.id}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isDone
                    ? isDark
                      ? "bg-emerald-950/20 border-emerald-500/30"
                      : "bg-emerald-50/60 border-emerald-200"
                    : isDark
                    ? "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                    : "bg-slate-50/50 border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <button
                    onClick={() => {
                      playSound("click");
                      toggleTopic(topic.id);
                    }}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 border active:scale-90 ${
                      isDone
                        ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                        : isDark
                        ? "bg-slate-800 border-slate-700 text-transparent hover:border-emerald-500"
                        : "bg-white border-slate-300 text-transparent hover:border-emerald-600"
                    }`}
                    title={isDone ? "Mark as Incomplete" : "Mark as Mastered"}
                  >
                    <Check className="w-4 h-4" />
                  </button>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">
                      Sub-Topic #{idx + 1}
                    </span>
                    <p
                      className={`text-xs sm:text-sm font-semibold leading-tight break-words ${
                        isDone
                          ? "text-emerald-700 dark:text-emerald-300 line-through opacity-85"
                          : isDark
                          ? "text-slate-100"
                          : "text-slate-800"
                      }`}
                    >
                      {topic.title}
                    </p>
                  </div>
                </div>

                <a
                  href={getTabHref(
                    "concepts",
                    commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math",
                    ncertNum || 1
                  )}
                  onClick={(e) => {
                    const targetSub =
                      commandSubjectId === "science" ? "science" : commandSubjectId === "sst" ? "sst" : "math";
                    handleNavClick(e, "concepts", {
                      subject: targetSub,
                      chapter: ncertNum || 1,
                      customAction: () => {
                        setConceptsSubject(targetSub);
                        setConceptsChapterNo(ncertNum || 1);
                      }
                    });
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 shrink-0 ${
                    isDark
                      ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200"
                      : "bg-white border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <span>Study</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ZONE 4: REINFORCEMENT BENTO (TARGETS, DUE FOR REVISION, MASTERY MAP)      */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Next Targets Card */}
        <div
          className={`p-6 rounded-3xl border transition-all ${
            isDark
              ? "bg-[#0f172a]/90 border-slate-800 shadow-xl"
              : "bg-white border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]"
          }`}
        >
          <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4" /> Next Target Topics ({uncompletedTopics.length} Remaining)
          </h4>
          <div className="flex flex-wrap gap-2">
            {weakAreas.map((w, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${
                  isDark
                    ? "bg-rose-950/30 text-rose-300 border-rose-800/40"
                    : "bg-rose-50 text-rose-800 border-rose-200"
                }`}
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Due For Revision Card */}
        <div
          className={`p-6 rounded-3xl border transition-all ${
            isDark
              ? "bg-[#0f172a]/90 border-slate-800 shadow-xl"
              : "bg-white border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]"
          }`}
        >
          <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookMarked className="w-4 h-4" /> Active Recall & Spaced Repetition
          </h4>
          <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            <span>{chapterFlashcardsCount} Flashcards Available</span>
            <span>{chapterMistakesCount} Error Logs Recorded</span>
          </div>
          <div className="mt-4 flex gap-2.5">
            <a
              href={getTabHref("flashcards")}
              onClick={(e) => handleNavClick(e, "flashcards")}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isDark
                  ? "bg-amber-950/20 hover:bg-amber-950/40 text-amber-300 border-amber-800/40"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200"
              }`}
            >
              Start Flashcards
            </a>
            <a
              href={getTabHref("common_mistakes")}
              onClick={(e) => handleNavClick(e, "common_mistakes")}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isDark
                  ? "bg-amber-950/20 hover:bg-amber-950/40 text-amber-300 border-amber-800/40"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200"
              }`}
            >
              Review Mistakes
            </a>
          </div>
        </div>
      </div>

      {/* Concept Mastery Matrix */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-[#0f172a]/90 border-slate-800 shadow-xl"
            : "bg-white border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Concept Mastery Matrix: {activeChapter.name}</span>
          </h4>
          <span className="text-[11px] font-mono text-slate-400">
            Tap node to toggle mastery (+25 XP)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {concepts.map((concept, cIdx) => (
            <div
              key={cIdx}
              onClick={() => {
                playSound("click");
                toggleTopic(concept.id);
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                concept.pct > 0
                  ? isDark
                    ? "bg-emerald-950/25 border-emerald-500/40"
                    : "bg-emerald-50/70 border-emerald-300"
                  : isDark
                  ? "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                  : "bg-slate-50/60 border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center border font-mono font-bold shrink-0 text-xs ${
                  concept.pct > 0
                    ? "border-emerald-500 bg-emerald-600 text-white"
                    : isDark
                    ? "border-slate-700 bg-slate-800 text-slate-400"
                    : "border-slate-300 bg-white text-slate-600"
                }`}
              >
                {concept.pct > 0 ? <CheckCircle2 className="w-5 h-5" /> : `${concept.pct}%`}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs font-bold truncate ${
                    concept.pct > 0
                      ? isDark
                        ? "text-emerald-300"
                        : "text-emerald-900"
                      : isDark
                      ? "text-slate-100"
                      : "text-slate-800"
                  }`}
                >
                  {concept.name}
                </p>
                <span
                  className={`text-[10px] font-mono font-semibold block mt-0.5 ${
                    concept.pct > 0
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400"
                  }`}
                >
                  {concept.status} • Tap to toggle
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
