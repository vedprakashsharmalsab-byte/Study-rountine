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
  Check,
  Calculator,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages
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
  // Student Name & Streak from localStorage
  const [studentName, setStudentName] = useState<string>("Cadet");
  const [studyStreak, setStudyStreak] = useState<number>(1);

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

  // 25-Min Focus Sprint Companion
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

  // Subject Visual Theme Helpers
  const getSubjectMeta = (id: string) => {
    switch (id) {
      case "maths":
        return {
          icon: Calculator,
          color: "text-blue-600",
          accent: "bg-blue-500",
          border: "border-blue-200",
          lightBg: "bg-blue-50/70",
          tag: "Core Math"
        };
      case "science":
        return {
          icon: FlaskConical,
          color: "text-emerald-600",
          accent: "bg-emerald-500",
          border: "border-emerald-200",
          lightBg: "bg-emerald-50/70",
          tag: "Experiments & Theory"
        };
      case "social":
        return {
          icon: Globe2,
          color: "text-amber-600",
          accent: "bg-amber-500",
          border: "border-amber-200",
          lightBg: "bg-amber-50/70",
          tag: "History, Geo, Pol & Eco"
        };
      case "english":
        return {
          icon: GraduationCap,
          color: "text-indigo-600",
          accent: "bg-indigo-500",
          border: "border-indigo-200",
          lightBg: "bg-indigo-50/70",
          tag: "Literature & Grammar"
        };
      case "hindi":
        return {
          icon: Languages,
          color: "text-rose-600",
          accent: "bg-rose-500",
          border: "border-rose-200",
          lightBg: "bg-rose-50/70",
          tag: "Course B (085)"
        };
      default:
        return {
          icon: BookOpen,
          color: "text-slate-600",
          accent: "bg-slate-500",
          border: "border-slate-200",
          lightBg: "bg-slate-50",
          tag: "Curriculum"
        };
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 font-sans antialiased text-slate-800">

      {/* =========================================================================
          1. DAILY MOMENTUM BAR (Charismatic Greeting, Streak & Focus Sprint)
          ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Greeting & Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/70">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {studyStreak} Day Streak
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-medium text-slate-500">
                Target: CBSE Board Exam 100%
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {greetingText}, {studentName} 👋
            </h1>
            <p className="text-sm text-slate-500">
              Here is your structured learning routine for today. Select a subject and start your session.
            </p>
          </div>

          {/* 25-Min Focus Sprint Companion */}
          <div className="flex items-center gap-3 bg-slate-50/80 border border-slate-200/90 rounded-xl px-4 py-2.5 self-start sm:self-center shrink-0">
            <Clock className="w-4 h-4 text-slate-500" />
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Focus Sprint
              </div>
              <div className="text-base font-mono font-bold text-slate-900 tabular-nums">
                {formattedFocusTime}
              </div>
            </div>
            <div className="flex items-center gap-1 ml-2">
              <button
                type="button"
                onClick={() => {
                  playSound("click");
                  setIsFocusActive(!isFocusActive);
                }}
                className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                  isFocusActive
                    ? "bg-amber-100 text-amber-900 hover:bg-amber-200 shadow-xs"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-xs"
                }`}
                title={isFocusActive ? "Pause Sprint" : "Start 25-Min Sprint"}
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
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. THE 5 TACTILE SUBJECT CARDS (Magnetic, Clean, Simple)
          ========================================================================= */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Choose Subject
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Active: <strong className="text-slate-900">{currentSubject.name}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {CBSE_SUBJECTS.map((sub) => {
            const isSelected = sub.id === commandSubjectId;
            const meta = getSubjectMeta(sub.id);
            const Icon = meta.icon;

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
                className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10"
                    : "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:shadow-xs hover:bg-slate-50/60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-white/15 text-white" : `${meta.lightBg} ${meta.color}`
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? "text-slate-300" : "text-slate-400"
                  }`}>
                    {pct}%
                  </span>
                </div>

                <div className="text-xs font-bold truncate">
                  {sub.name.split("(")[0].trim()}
                </div>
                <div className={`text-[10px] truncate mt-0.5 ${
                  isSelected ? "text-slate-400" : "text-slate-400"
                }`}>
                  {sub.chapters.length} Chapters
                </div>

                {/* Micro Progress Line */}
                <div className={`w-full h-1 rounded-full mt-2.5 overflow-hidden ${
                  isSelected ? "bg-white/20" : "bg-slate-100"
                }`}>
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isSelected ? "bg-emerald-400" : meta.accent
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. THE ACTIVE MISSION (Magnetic Hero Card with 1-Click Fast Actions)
          ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] space-y-6">
        
        {/* Header Strip with Chapter Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                Chapter {currentChapterNum}
              </span>
              <span className="text-xs font-medium text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">
                {currentSubject.name.split("(")[0].trim()}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {currentChapter.name}
            </h2>

            {nextTargetTopic && (
              <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5 pt-0.5">
                <span className="text-blue-600 font-bold">👉 Next Topic:</span>
                <span>{nextTargetTopic.title}</span>
              </p>
            )}
          </div>

          {/* Clean Modern Chapter Dropdown */}
          <div className="relative shrink-0 w-full sm:w-72">
            <label htmlFor="chapter-select" className="sr-only">Switch Chapter</label>
            <select
              id="chapter-select"
              value={commandChapterId}
              onChange={(e) => handleSelectChapter(e.target.value)}
              aria-label="Switch chapter"
              className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-300/80 bg-slate-50 text-xs font-bold text-slate-800 pr-9 cursor-pointer hover:bg-slate-100/70 transition-colors shadow-xs"
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
              Mastery Progress: <strong className="text-slate-800">{completedInChapter} of {chapterTopics.length}</strong> topics completed
            </span>
            <span className="font-mono font-bold text-slate-900">
              {chapterProgressPercent}%
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${chapterProgressPercent}%` }}
            />
          </div>
        </div>

        {/* 2 Big Irresistible Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <Link
            href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
            onClick={(e) => handleNavClick(e, "concepts", {
              subject: activeSubjectKey,
              chapter: currentChapterNum
            })}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Start Lesson Notes
                  <span className="text-[10px] font-semibold bg-white/20 px-1.5 py-0.5 rounded text-white/90">
                    10 Mins
                  </span>
                </div>
                <div className="text-xs text-slate-300">
                  Full NCERT concepts, definitions & examples
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={getTabHref("questions", activeSubjectKey, currentChapterNum)}
            onClick={(e) => handleNavClick(e, "questions", {
              subject: activeSubjectKey,
              chapter: currentChapterNum
            })}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 hover:bg-slate-100/80 transition-all shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Practice Board Questions
                  <span className="text-[10px] font-semibold bg-amber-500/15 text-amber-800 px-1.5 py-0.5 rounded">
                    10-Yr Solved
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  MCQs, Short & Long Answer Examination Bank
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* =========================================================================
          4. TOPIC ROADMAP CHECKLIST (Satisfying Habit Engine)
          ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold tracking-tight text-slate-900">
              NCERT Topic Roadmap & Checkpoints
            </h3>
            <p className="text-xs text-slate-500">
              Check off each topic as you learn. Earns +25 XP with instant feedback.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
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
                    ? "bg-emerald-50/50 border-emerald-200/70 text-slate-600"
                    : "bg-white border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                      isDone
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                        : "border-slate-300 hover:border-slate-400 bg-white"
                    }`}
                    title={isDone ? "Mark incomplete" : "Mark completed (+25 XP)"}
                  >
                    {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold text-slate-400">
                        {topic.sectionCode || `${index + 1}`}
                      </span>
                      {topic.isImportantForBoards && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200/60">
                          Board High-Yield
                        </span>
                      )}
                    </div>
                    <span className={`text-sm font-semibold mt-0.5 block ${
                      isDone ? "line-through text-slate-400" : "text-slate-900"
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
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors"
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
          5. THE 4 ESSENTIAL POWER TILES (Zero Bloat, Pure High-Value Tools)
          ========================================================================= */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold tracking-tight text-slate-900">
            High-Yield Curriculum Tools
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            1-Click Fast Navigation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* 1. Flashcards */}
          <Link
            href={getTabHref("flashcards")}
            onClick={(e) => handleNavClick(e, "flashcards")}
            className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Bookmark className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Flashcards Deck
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {chapterFlashcardsCount} cards ready for recall
            </div>
          </Link>

          {/* 2. Mistakes Log */}
          <Link
            href={getTabHref("common_mistakes")}
            onClick={(e) => handleNavClick(e, "common_mistakes")}
            className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
              Mistakes Notebook
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {chapterMistakesCount} exam traps recorded
            </div>
          </Link>

          {/* 3. Formulas & Proofs / Diagrams */}
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
            className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              {activeSubjectKey === "math" ? "Theorems & Proofs" :
               activeSubjectKey === "science" ? "NCERT Diagrams" :
               activeSubjectKey === "sst" ? "Metro Timelines" :
               activeSubjectKey === "hindi" ? "व्याकरण व मुहावरे" : "Grammar & Writing"}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              High-yield examination cheat-sheet
            </div>
          </Link>

          {/* 4. Full Test Series */}
          <Link
            href={getTabHref("test_series")}
            onClick={(e) => handleNavClick(e, "test_series")}
            className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              Test Series I (2026)
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Strict CBSE marking scheme tests
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}
