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
  ChevronLeft,
  ChevronRight,
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
  Languages,
  Filter
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
  const [topicFilter, setTopicFilter] = useState<"all" | "high_yield" | "pending">("all");

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

  const currentChapterIndex = useMemo(() => {
    return currentSubject.chapters.findIndex((c) => c.id === commandChapterId);
  }, [currentSubject, commandChapterId]);

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

  // Prev / Next Chapter Navigation
  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      const prevCh = currentSubject.chapters[currentChapterIndex - 1];
      handleSelectChapter(prevCh.id);
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < currentSubject.chapters.length - 1) {
      const nextCh = currentSubject.chapters[currentChapterIndex + 1];
      handleSelectChapter(nextCh.id);
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

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 py-4 font-sans antialiased text-slate-800">
      
      {/* =========================================================================
          MASTER FLIGHT DECK (Single Zero-Scroll Unified Studio Card)
          ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* TOP RIBBON: Greeting, 5-Subject Segmented Pill, & Board Countdown */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-50/50">
          
          {/* Identity & Streak */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-sm font-bold text-slate-900 truncate">
              {greetingText}, {studentName} 👋
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0">
              <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
              {studyStreak} Day Streak
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200/80 shrink-0">
              🎯 Boards: {daysUntilBoards}d Left
            </span>
          </div>

          {/* Sleek Segmented 5-Subject Selector */}
          <div className="flex items-center gap-1 bg-white border border-slate-200/80 p-1 rounded-xl shadow-xs overflow-x-auto">
            {CBSE_SUBJECTS.map((sub) => {
              const isSelected = sub.id === commandSubjectId;
              const shortName = sub.name.split("(")[0].trim().replace("Mathematics", "Maths").replace("Social Science", "SST");

              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSelectSubject(sub.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  {shortName}
                </button>
              );
            })}
          </div>

          {/* 25-Min Focus Sprint Companion */}
          <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                {formattedFocusTime}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                playSound("click");
                setIsFocusActive(!isFocusActive);
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isFocusActive
                  ? "bg-amber-100 text-amber-900 hover:bg-amber-200"
                  : "bg-slate-900 text-white hover:bg-slate-800"
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
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            CENTER STAGE: TWO-COLUMN ZERO-SCROLL SPLIT COCKPIT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* LEFT COLUMN: The Mission Focus (5 of 12 columns) */}
          <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-white">
            
            <div className="space-y-4">
              {/* Subject Tag & Interactive Chapter Navigation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                    {currentSubject.name.split("(")[0].trim()}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Ch {currentChapterNum} of {currentSubject.chapters.length}
                  </span>
                </div>

                {/* Chapter Dropdown with Prev/Next Fast Navigation */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevChapter}
                    disabled={currentChapterIndex <= 0}
                    className="p-2.5 rounded-xl border border-slate-300/80 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 cursor-pointer"
                    title="Previous Chapter"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="relative flex-1">
                    <label htmlFor="chapter-select" className="sr-only">Select Chapter</label>
                    <select
                      id="chapter-select"
                      value={commandChapterId}
                      onChange={(e) => handleSelectChapter(e.target.value)}
                      aria-label="Select Chapter"
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

                  <button
                    type="button"
                    onClick={handleNextChapter}
                    disabled={currentChapterIndex >= currentSubject.chapters.length - 1}
                    className="p-2.5 rounded-xl border border-slate-300/80 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 cursor-pointer"
                    title="Next Chapter"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Chapter Title */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  {currentChapter.name}
                </h2>
                <div className="flex items-center justify-between text-xs mt-2 text-slate-500 font-medium">
                  <span>Progress: {completedInChapter} of {chapterTopics.length} done</span>
                  <span className="font-mono font-bold text-slate-800">{chapterProgressPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${chapterProgressPercent}%` }}
                  />
                </div>
              </div>

              {/* Next Milestone Card */}
              {nextTargetTopic && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1">
                      👉 Next Target
                    </span>
                    {nextTargetTopic.isImportantForBoards && (
                      <span className="font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 text-[10px] border border-rose-200/60">
                        90%+ Recurring
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-slate-900 line-clamp-2">
                    {nextTargetTopic.title}
                  </div>
                </div>
              )}

              {/* 2 Big 1-Click Action Buttons */}
              <div className="space-y-2 pt-1">
                <Link
                  href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                  onClick={(e) => handleNavClick(e, "concepts", {
                    subject: activeSubjectKey,
                    chapter: currentChapterNum
                  })}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold">Start Lesson Notes (10 Min)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href={getTabHref("questions", activeSubjectKey, currentChapterNum)}
                  onClick={(e) => handleNavClick(e, "questions", {
                    subject: activeSubjectKey,
                    chapter: currentChapterNum
                  })}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-900 transition-all shadow-xs group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold">Practice Board Questions</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Bottom 4 Compact Utility Pills */}
            <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-slate-100 text-[11px] font-semibold">
              <Link
                href={getTabHref("flashcards")}
                onClick={(e) => handleNavClick(e, "flashcards")}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>🗂 Flashcards</span>
                <span className="font-mono text-slate-500 font-bold">{chapterFlashcardsCount}</span>
              </Link>
              
              <Link
                href={getTabHref("common_mistakes")}
                onClick={(e) => handleNavClick(e, "common_mistakes")}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>⚠️ Mistakes</span>
                <span className="font-mono text-rose-600 font-bold">{chapterMistakesCount}</span>
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
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>📐 Cheat-Sheet</span>
                <span className="text-slate-400">→</span>
              </Link>

              <Link
                href={getTabHref("roadmap")}
                onClick={(e) => handleNavClick(e, "roadmap")}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>📅 30-Day Plan</span>
                <span className="text-slate-400">→</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: The Interactive Topic Runway (7 of 12 columns) */}
          <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-slate-50/30">
            
            <div className="space-y-3">
              {/* Header Strip with Interactive Filter Pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    NCERT Topic Checklist
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Check off topics as you study (+25 XP each)
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1 bg-white border border-slate-200/80 p-0.5 rounded-lg self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setTopicFilter("all")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      topicFilter === "all" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    All ({chapterTopics.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicFilter("pending")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      topicFilter === "pending" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Pending ({chapterTopics.length - completedInChapter})
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicFilter("high_yield")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      topicFilter === "high_yield" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    High-Yield ({chapterTopics.filter(t => t.isImportantForBoards).length})
                  </button>
                </div>
              </div>

              {/* Contained Zero-Scroll Topic List */}
              <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
                {filteredTopics.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400 font-medium bg-white rounded-xl border border-dashed border-slate-200">
                    No topics match the selected filter.
                  </div>
                ) : (
                  filteredTopics.map((topic, index) => {
                    const isDone = !!completedTopicIds[topic.id];

                    return (
                      <div
                        key={topic.id}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                          isDone
                            ? "bg-emerald-50/50 border-emerald-200/70 text-slate-600"
                            : "bg-white border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <button
                            type="button"
                            onClick={() => toggleTopic(topic.id)}
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                              isDone
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "border-slate-300 hover:border-slate-400 bg-white"
                            }`}
                            title={isDone ? "Mark incomplete" : "Mark completed (+25 XP)"}
                          >
                            {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-semibold text-slate-400">
                                {topic.sectionCode || `${index + 1}`}
                              </span>
                              {topic.isImportantForBoards && (
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200/60">
                                  High-Yield
                                </span>
                              )}
                            </div>
                            <span className={`text-xs font-semibold mt-0.5 block truncate ${
                              isDone ? "line-through text-slate-400" : "text-slate-900"
                            }`}>
                              {topic.title}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <Link
                            href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                            onClick={(e) => handleNavClick(e, "concepts", {
                              subject: activeSubjectKey,
                              chapter: currentChapterNum
                            })}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
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

            {/* Quick Helper Note */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>💡 Target: Master 2 NCERT topics daily for 100% board readiness</span>
              <Link
                href={getTabHref("roadmap")}
                onClick={(e) => handleNavClick(e, "roadmap")}
                className="font-bold text-slate-600 hover:text-slate-900 underline decoration-slate-300 cursor-pointer"
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
