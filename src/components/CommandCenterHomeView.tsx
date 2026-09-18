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
  CheckSquare
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

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 py-4 font-sans antialiased text-slate-800">
      
      {/* =========================================================================
          STUDIO FLIGHT DECK (Single Clean Studio Canvas)
          ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] overflow-hidden space-y-0">
        
        {/* TOP STATUS BAR: Greeting, Streak, Days to Boards, & Focus Timer */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
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
              🎯 Boards: {daysUntilBoards} Days Left (Feb 1)
            </span>
          </div>

          {/* 25-Min Focus Sprint Companion */}
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
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

        {/* 5-SUBJECT STUDIO SEGMENTED BAR */}
        <div className="px-5 py-3 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-950"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {icon}
                <span>{shortName}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {sub.chapters.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            INTERACTIVE CHAPTER PLAYER COCKPIT (Side-by-Side Zero Clutter)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* LEFT RAIL: Chapter Selector Drawer (4 of 12 columns) */}
          <div className="lg:col-span-4 p-4 sm:p-5 bg-slate-50/40 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {currentSubject.name.split("(")[0].trim()} Chapters
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500">
                  {currentSubject.chapters.length} Chapters
                </span>
              </div>

              {/* Scrollable Chapter List */}
              <div className="max-h-[460px] overflow-y-auto pr-1 space-y-1 custom-scrollbar">
                {currentSubject.chapters.map((ch, idx) => {
                  const isSelected = ch.id === commandChapterId;
                  const chNo = ch.ncertChapterNo || idx + 1;
                  const chCompleted = (ch.topics || []).filter(t => completedTopicIds[t.id]).length;
                  const chTotal = (ch.topics || []).length;
                  const isFinished = chTotal > 0 && chCompleted === chTotal;

                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => handleSelectChapter(ch.id)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? "bg-white border-slate-900 text-slate-950 shadow-xs font-bold ring-1 ring-slate-900"
                          : isFinished
                          ? "bg-emerald-50/50 border-emerald-200/70 text-emerald-900 hover:bg-emerald-100/50"
                          : "bg-white border-slate-200/70 text-slate-700 hover:bg-slate-100/70 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected
                            ? "bg-slate-900 text-white"
                            : isFinished
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          Ch {chNo}
                        </span>
                        <span className="text-xs truncate">
                          {ch.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 text-[10px] font-mono">
                        {isFinished ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <span className="text-slate-400">
                            {chCompleted}/{chTotal}
                          </span>
                        )}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? "text-slate-900 translate-x-0.5" : "text-slate-300"
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom 4 Compact Quick Tools */}
            <div className="pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-1.5 text-[11px] font-semibold">
              <Link
                href={getTabHref("flashcards")}
                onClick={(e) => handleNavClick(e, "flashcards")}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between transition-colors shadow-2xs"
              >
                <span>🗂 Flashcards</span>
                <span className="font-mono text-slate-500 font-bold">{chapterFlashcardsCount}</span>
              </Link>
              
              <Link
                href={getTabHref("common_mistakes")}
                onClick={(e) => handleNavClick(e, "common_mistakes")}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between transition-colors shadow-2xs"
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
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between transition-colors shadow-2xs"
              >
                <span>📐 Cheat-Sheet</span>
                <span className="text-slate-400">→</span>
              </Link>

              <Link
                href={getTabHref("roadmap")}
                onClick={(e) => handleNavClick(e, "roadmap")}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-between transition-colors shadow-2xs"
              >
                <span>📅 Blueprint</span>
                <span className="text-slate-400">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT STAGE: Active Study Hero & Topic Runway (8 of 12 columns) */}
          <div className="lg:col-span-8 p-5 sm:p-6 bg-white space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Active Chapter Header & Progress Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
                      Ch {currentChapterNum} • {currentSubject.name.split("(")[0].trim()}
                    </span>
                    {chapterProgressPercent === 100 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        ✓ Chapter Mastered
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1 leading-tight">
                    {currentChapter.name}
                  </h2>
                </div>

                <div className="text-right sm:self-center">
                  <div className="text-xs font-mono font-bold text-slate-800">
                    {completedInChapter} of {chapterTopics.length} Topics ({chapterProgressPercent}%)
                  </div>
                  <div className="w-36 h-2 bg-slate-100 rounded-full overflow-hidden mt-1 sm:ml-auto">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${chapterProgressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* 10X CHARISMATIC CONTINUE STUDY HERO */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-md space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
                    Up Next Milestone
                  </span>
                  {nextTargetTopic?.isImportantForBoards && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-400/40">
                      90%+ Recurring Board Question
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {nextTargetTopic ? nextTargetTopic.title : "All topics completed! Practice board questions below."}
                  </h3>
                </div>

                {/* 2 Big Primary Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <Link
                    href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                    onClick={(e) => handleNavClick(e, "concepts", {
                      subject: activeSubjectKey,
                      chapter: currentChapterNum
                    })}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all shadow-sm cursor-pointer active:scale-98"
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
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs transition-all shadow-sm cursor-pointer active:scale-98"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-300" />
                    <span>Practice Board Questions</span>
                  </Link>
                </div>
              </div>

              {/* Interactive Topic Runway */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    NCERT Topic Checklist
                  </span>
                  
                  {/* Topic Filter Pills */}
                  <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setTopicFilter("all")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      All ({chapterTopics.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopicFilter("pending")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "pending" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Pending ({chapterTopics.length - completedInChapter})
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopicFilter("high_yield")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                        topicFilter === "high_yield" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      High-Yield ({chapterTopics.filter(t => t.isImportantForBoards).length})
                    </button>
                  </div>
                </div>

                {/* Contained Checklist */}
                <div className="max-h-[220px] overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
                  {filteredTopics.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-400 font-medium bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      No topics found for this filter.
                    </div>
                  ) : (
                    filteredTopics.map((topic, index) => {
                      const isDone = !!completedTopicIds[topic.id];

                      return (
                        <div
                          key={topic.id}
                          className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                            isDone
                              ? "bg-emerald-50/40 border-emerald-200/70 text-slate-600"
                              : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <button
                              type="button"
                              onClick={() => toggleTopic(topic.id)}
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                                isDone
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 hover:border-slate-400 bg-white"
                              }`}
                              title={isDone ? "Mark incomplete" : "Mark completed (+25 XP)"}
                            >
                              {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                            </button>

                            <div className="min-w-0">
                              <span className={`text-xs font-semibold block truncate ${
                                isDone ? "line-through text-slate-400" : "text-slate-900"
                              }`}>
                                {topic.title}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {topic.isImportantForBoards && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200/60 hidden sm:inline">
                                High-Yield
                              </span>
                            )}
                            <Link
                              href={getTabHref("concepts", activeSubjectKey, currentChapterNum)}
                              onClick={(e) => handleNavClick(e, "concepts", {
                                subject: activeSubjectKey,
                                chapter: currentChapterNum
                              })}
                              className="px-2 py-0.5 rounded text-[10px] font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
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
