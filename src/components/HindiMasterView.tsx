"use client";

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Feather,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Search,
  Quote,
  Eye,
  EyeOff,
  Lightbulb,
  FileText,
  Flame,
  Check,
  X,
  Clock,
  Award,
  ShieldAlert,
  Zap,
  Layers,
  HelpCircle,
  PenTool,
  MessageSquare
} from "lucide-react";
import {
  HINDI_LITERATURE_DATA,
  HindiChapter,
  HindiCharacter,
  HindiWordMeaning,
  HindiBoardQA,
  HindiPoemStanza
} from "@/data/hindiLiteratureData";
import {
  HINDI_GRAMMAR_TOPICS,
  TEXTBOOK_MUHAVARE_LIST,
  GrammarTopic,
  GrammarQuestion,
  TextbookIdiom
} from "@/data/hindiGrammarData";
import {
  HINDI_WRITING_SECTIONS,
  WritingSection,
  WritingSample
} from "@/data/hindiWritingData";

interface HindiMasterViewProps {
  isDark: boolean;
  onJumpToRevision?: (title: string) => void;
  onOpenQuestionBank?: (chapterNo: number) => void;
}

type HindiMainTab = "sparsh_prose" | "sparsh_poetry" | "sanchayan" | "grammar" | "writing" | "spelling_traps";

export default function HindiMasterView({ isDark, onJumpToRevision, onOpenQuestionBank }: HindiMasterViewProps) {
  // Main Tab State
  const [activeTab, setActiveTab] = useState<HindiMainTab>("sparsh_prose");

  // Literature selection state
  const [selectedChapterId, setSelectedChapterId] = useState<string>("hin_sp_p1");
  const [litSearchQuery, setLitSearchQuery] = useState<string>("");
  const [activeLitSubTab, setActiveLitSubTab] = useState<"summary" | "stanzas" | "vocab" | "boardqa" | "rtc">("summary");

  // Grammar selection state
  const [selectedGrammarId, setSelectedGrammarId] = useState<string>("padbandh");
  const [grammarUserAnswers, setGrammarUserAnswers] = useState<Record<string, number>>({});
  const [showGrammarExplanations, setShowGrammarExplanations] = useState<Record<string, boolean>>({});
  const [muhavareSearch, setMuhavareSearch] = useState<string>("");

  // Writing selection state
  const [selectedWritingId, setSelectedWritingId] = useState<string>("anuched");
  const [selectedWritingSampleId, setSelectedWritingSampleId] = useState<string>("anuched_1");

  // Filter chapters by tab
  const chaptersForTab = useMemo(() => {
    if (activeTab === "sparsh_prose") {
      return HINDI_LITERATURE_DATA.filter(c => c.book === "sparsh_prose");
    } else if (activeTab === "sparsh_poetry") {
      return HINDI_LITERATURE_DATA.filter(c => c.book === "sparsh_poetry");
    } else if (activeTab === "sanchayan") {
      return HINDI_LITERATURE_DATA.filter(c => c.book === "sanchayan");
    }
    return [];
  }, [activeTab]);

  // Active chapter
  const currentChapter = useMemo(() => {
    return HINDI_LITERATURE_DATA.find(c => c.id === selectedChapterId) || chaptersForTab[0] || HINDI_LITERATURE_DATA[0];
  }, [selectedChapterId, chaptersForTab]);

  // Filtered chapters by search
  const filteredChapters = useMemo(() => {
    if (!litSearchQuery.trim()) return chaptersForTab;
    const q = litSearchQuery.toLowerCase();
    return chaptersForTab.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q)
    );
  }, [chaptersForTab, litSearchQuery]);

  // Active grammar topic
  const currentGrammarTopic = useMemo(() => {
    return HINDI_GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId) || HINDI_GRAMMAR_TOPICS[0];
  }, [selectedGrammarId]);

  // Filtered muhavare
  const filteredMuhavare = useMemo(() => {
    if (!muhavareSearch.trim()) return TEXTBOOK_MUHAVARE_LIST;
    const q = muhavareSearch.toLowerCase();
    return TEXTBOOK_MUHAVARE_LIST.filter(m =>
      m.idiom.toLowerCase().includes(q) ||
      m.meaning.toLowerCase().includes(q) ||
      m.sourceChapter.toLowerCase().includes(q)
    );
  }, [muhavareSearch]);

  // Active writing section & sample
  const currentWritingSection = useMemo(() => {
    return HINDI_WRITING_SECTIONS.find(w => w.id === selectedWritingId) || HINDI_WRITING_SECTIONS[0];
  }, [selectedWritingId]);

  const currentWritingSample = useMemo(() => {
    return currentWritingSection.samples.find(s => s.id === selectedWritingSampleId) || currentWritingSection.samples[0];
  }, [currentWritingSection, selectedWritingSampleId]);

  // Switch tab and sync default chapter
  const handleTabChange = (tab: HindiMainTab) => {
    setActiveTab(tab);
    if (tab === "sparsh_prose") {
      setSelectedChapterId("hin_sp_p1");
      setActiveLitSubTab("summary");
    } else if (tab === "sparsh_poetry") {
      setSelectedChapterId("hin_sp_k1");
      setActiveLitSubTab("summary");
    } else if (tab === "sanchayan") {
      setSelectedChapterId("hin_san_1");
      setActiveLitSubTab("summary");
    }
  };

  // Helper to map active literature or grammar topic to Question Bank chapter number (1 to 21)
  const getVaultChapterNo = (): number => {
    if (activeTab === "sparsh_prose") {
      const match = currentChapter.id.match(/hin_sp_p(\d+)/);
      return match ? parseInt(match[1]) : 1;
    }
    if (activeTab === "sparsh_poetry") {
      const match = currentChapter.id.match(/hin_sp_k(\d+)/);
      return match ? parseInt(match[1]) + 7 : 8;
    }
    if (activeTab === "sanchayan") {
      const match = currentChapter.id.match(/hin_san_(\d+)/);
      return match ? parseInt(match[1]) + 14 : 15;
    }
    if (activeTab === "grammar") {
      if (selectedGrammarId === "padbandh") return 18;
      if (selectedGrammarId === "vakya") return 19;
      if (selectedGrammarId === "samas") return 20;
      if (selectedGrammarId === "muhavare") return 21;
      return 18;
    }
    return 1;
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-950 text-slate-100" : "bg-gradient-to-br from-amber-50/50 via-rose-50/30 to-orange-50/40 text-slate-800"}`}>
      {/* Top Banner & Header */}
      <div className={`border-b ${isDark ? "border-slate-800/80 bg-slate-900/70" : "border-amber-200/60 bg-white/80"} backdrop-blur-md sticky top-0 z-30 px-4 sm:px-8 py-4 shadow-sm`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-amber-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  हिंदी 'ब' मास्टर हब (Hindi Course B)
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-rose-500/10 text-rose-600 border border-rose-500/20">
                  Code 085 • 2026-27
                </span>
              </div>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"} mt-0.5`}>
                स्पर्श भाग-२ (गद्य व काव्य) • संचयन भाग-२ • संपूर्ण व्याकरण (16 अंक) • लेखन कौशल (22 अंक)
              </p>
            </div>
          </div>

          {/* Quick Mark Distribution Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 text-xs font-medium">
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-800"}`}>
              📖 पाठ्यपुस्तक: 28 अंक
            </span>
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-800"}`}>
              ✍️ व्याकरण: 16 अंक
            </span>
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-800"}`}>
              📝 लेखन: 22 अंक
            </span>
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-sky-300" : "bg-sky-50 border-sky-200 text-sky-800"}`}>
              🎯 कुल: 80 अंक
            </span>
          </div>
        </div>

        {/* Navigation Tabs Bar — Bilingual English Headers with Devanagari Subtitles */}
        <div className="max-w-7xl mx-auto mt-4 flex items-center gap-2 overflow-x-auto scrollbar-none border-t pt-3 border-dashed border-amber-500/20">
          <button
            onClick={() => handleTabChange("sparsh_prose")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "sparsh_prose"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <BookOpen className="w-4 h-4 text-rose-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Sparsh Prose</div>
              <div className="text-[10px] opacity-80 font-normal">स्पर्श (गद्य खंड) • 7 Ch</div>
            </div>
          </button>

          <button
            onClick={() => handleTabChange("sparsh_poetry")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "sparsh_poetry"
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <Feather className="w-4 h-4 text-amber-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Sparsh Poetry</div>
              <div className="text-[10px] opacity-80 font-normal">स्पर्श (काव्य खंड) • 7 Poems</div>
            </div>
          </button>

          <button
            onClick={() => handleTabChange("sanchayan")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "sanchayan"
                ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <Layers className="w-4 h-4 text-orange-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Sanchayan</div>
              <div className="text-[10px] opacity-80 font-normal">संचयन (पूरक) • 3 Ch</div>
            </div>
          </button>

          <button
            onClick={() => handleTabChange("grammar")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "grammar"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <Zap className="w-4 h-4 text-purple-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Grammar Hub</div>
              <div className="text-[10px] opacity-80 font-normal">व्याकरण मास्टर • 16 Marks</div>
            </div>
          </button>

          <button
            onClick={() => handleTabChange("writing")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "writing"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <PenTool className="w-4 h-4 text-emerald-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Writing Studio</div>
              <div className="text-[10px] opacity-80 font-normal">रचनात्मक लेखन • 22 Marks</div>
            </div>
          </button>

          <button
            onClick={() => handleTabChange("spelling_traps")}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
              activeTab === "spelling_traps"
                ? "bg-red-600 text-white shadow-md shadow-red-600/25 ring-1 ring-white/20"
                : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-red-300" />
            <div className="text-left leading-tight">
              <div className="font-bold">Spelling Traps</div>
              <div className="text-[10px] opacity-80 font-normal">वर्तनी व अशुद्धि निवारक</div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* ========================================================================= */}
        {/* SECTION 1: LITERATURE TABS (Prose, Poetry, Sanchayan) */}
        {/* ========================================================================= */}
        {(activeTab === "sparsh_prose" || activeTab === "sparsh_poetry" || activeTab === "sanchayan") && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar Chapter Selector */}
            <div className="lg:col-span-4 space-y-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? "text-slate-400" : "text-slate-400"}`} />
                <input
                  type="text"
                  placeholder="पाठ अथवा लेखक खोजें..."
                  value={litSearchQuery}
                  onChange={(e) => setLitSearchQuery(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all ${
                    isDark ? "bg-slate-900/80 border-slate-800 text-white placeholder-slate-500" : "bg-white border-amber-200/80 text-slate-900 placeholder-slate-400 shadow-sm"
                  }`}
                />
              </div>

              {/* Chapter Cards List */}
              <div className="space-y-2.5 max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
                {filteredChapters.map((ch) => {
                  const isSelected = ch.id === currentChapter.id;
                  return (
                    <div
                      key={ch.id}
                      onClick={() => setSelectedChapterId(ch.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all duration-200 ${
                        isSelected
                          ? isDark
                            ? "bg-rose-950/40 border-rose-500/60 shadow-md shadow-rose-950/50 ring-1 ring-rose-500/30"
                            : "bg-gradient-to-r from-rose-50 to-amber-50/60 border-rose-300 shadow-sm"
                          : isDark
                            ? "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                            : "bg-white/80 border-slate-200/80 hover:border-amber-200 hover:bg-amber-50/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              isSelected
                                ? "bg-rose-500 text-white"
                                : isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
                            }`}>
                              पाठ {ch.chapterNumber}
                            </span>
                            <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                              {ch.author}
                            </span>
                          </div>
                          <h3 className={`font-semibold text-base mt-1 ${isSelected ? "text-rose-600 dark:text-rose-400 font-bold" : ""}`}>
                            {ch.title}
                          </h3>
                          <p className={`text-xs line-clamp-1 mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                            {ch.tagline}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${isSelected ? "translate-x-1 text-rose-500" : "text-slate-400"}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main Content Area for Selected Chapter */}
            <div className="lg:col-span-8 space-y-4">
              {/* Chapter Header Card */}
              <div className={`p-6 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-amber-200/70 shadow-sm"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-amber-500/20">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 border border-rose-500/20">
                        {currentChapter.book === "sparsh_prose" ? "Sparsh Prose" : currentChapter.book === "sparsh_poetry" ? "Sparsh Poetry" : "Sanchayan"} • {currentChapter.genre}
                      </span>
                      <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        रचयिता / लेखक: <strong className={isDark ? "text-slate-200" : "text-slate-700"}>{currentChapter.author}</strong>
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-1.5 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                      {currentChapter.title}
                    </h2>
                  </div>

                  {onOpenQuestionBank && (
                    <button
                      onClick={() => onOpenQuestionBank(getVaultChapterNo())}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white shadow-md hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2 cursor-pointer touch-manipulation active:scale-95 shrink-0"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Practice in Question Bank (अध्याय अभ्यास)</span>
                    </button>
                  )}
                </div>

                <p className="mt-3 text-sm sm:text-base italic text-amber-700 dark:text-amber-300 font-medium">
                  "{currentChapter.tagline}"
                </p>

                {/* Sub-tab Navigation — Bilingual */}
                <div className="flex items-center gap-2 mt-5 border-t pt-4 border-slate-200/60 dark:border-slate-800 overflow-x-auto scrollbar-none text-xs sm:text-sm">
                  <button
                    onClick={() => setActiveLitSubTab("summary")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeLitSubTab === "summary"
                        ? "bg-rose-500 text-white shadow-sm font-bold"
                        : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    📖 Summary (पाठ-सार)
                  </button>

                  {currentChapter.stanzas && currentChapter.stanzas.length > 0 && (
                    <button
                      onClick={() => setActiveLitSubTab("stanzas")}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        activeLitSubTab === "stanzas"
                          ? "bg-amber-500 text-white shadow-sm font-bold"
                          : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      📜 Stanzas & Meaning (काव्यांश व भावार्थ)
                    </button>
                  )}

                  <button
                    onClick={() => setActiveLitSubTab("vocab")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeLitSubTab === "vocab"
                        ? "bg-rose-500 text-white shadow-sm font-bold"
                        : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🔤 Vocabulary (शब्दार्थ - {currentChapter.wordMeanings.length})
                  </button>

                  <button
                    onClick={() => setActiveLitSubTab("boardqa")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeLitSubTab === "boardqa"
                        ? "bg-rose-500 text-white shadow-sm font-bold"
                        : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🎯 Board Q&A (परीक्षा प्रश्नोत्तर - {currentChapter.boardQAs.length})
                  </button>

                  {currentChapter.rtcMcqs && (
                    <button
                      onClick={() => setActiveLitSubTab("rtc")}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        activeLitSubTab === "rtc"
                          ? "bg-rose-500 text-white shadow-sm font-bold"
                          : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      📝 RTC Practice (पठित गद्यांश MCQs)
                    </button>
                  )}
                </div>
              </div>

              {/* Sub-tab 1: Summary & Central Message */}
              {activeLitSubTab === "summary" && (
                <div className="space-y-4">
                  {/* Detailed Summary */}
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-100 shadow-sm"
                  }`}>
                    <h4 className="text-lg font-bold flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-3">
                      <BookOpen className="w-5 h-5" />
                      विस्तृत पाठ सारांश (Comprehensive Chapter Summary)
                    </h4>
                    <p className={`text-base leading-relaxed text-justify ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {currentChapter.summary}
                    </p>
                  </div>

                  {/* Central Message Box */}
                  <div className={`p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-br ${
                    isDark ? "from-amber-950/20 to-slate-900/60" : "from-amber-50/80 to-rose-50/40"
                  }`}>
                    <h4 className="text-sm font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      पाठ का केंद्रीय भाव एवं संदेश (Core Theme & Moral)
                    </h4>
                    <p className={`text-sm leading-relaxed font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {currentChapter.centralMessage}
                    </p>
                  </div>

                  {/* Characters Grid (if any) */}
                  {currentChapter.characters && currentChapter.characters.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold flex items-center gap-2 text-rose-600 dark:text-rose-400">
                        <UsersIcon className="w-5 h-5" />
                        प्रमुख पात्र एवं चरित्र-चित्रण (Key Characters & Character Sketches)
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentChapter.characters.map((char, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border ${
                              isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <h5 className="font-bold text-base text-amber-600 dark:text-amber-400">{char.name}</h5>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                              }`}>
                                {char.role}
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {char.traits.map((t, tidx) => (
                                <span key={tidx} className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                                  {t}
                                </span>
                              ))}
                            </div>

                            <p className={`text-xs mt-2.5 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                              {char.description}
                            </p>

                            {char.keyDialogue && (
                              <div className={`mt-3 p-2 rounded-lg border-l-2 border-rose-500 text-xs italic ${
                                isDark ? "bg-slate-800/60 text-rose-300" : "bg-rose-50 text-rose-900"
                              }`}>
                                "{char.keyDialogue}"
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Sub-tab 2: Stanzas (Poetry) */}
              {activeLitSubTab === "stanzas" && currentChapter.stanzas && (
                <div className="space-y-4">
                  {currentChapter.stanzas.map((st) => (
                    <div
                      key={st.stanzaNumber}
                      className={`p-5 rounded-2xl border ${
                        isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b pb-2.5 border-amber-500/20">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          पद्यांश / साखी / काव्यांश संख्या {st.stanzaNumber}
                        </span>
                      </div>

                      {/* Original Stanza Lines */}
                      <div className={`my-4 p-4 rounded-xl border text-center font-serif text-base sm:text-lg leading-loose tracking-wide ${
                        isDark ? "bg-amber-950/20 border-amber-800/40 text-amber-200" : "bg-amber-50/70 border-amber-200 text-amber-950"
                      }`}>
                        {st.originalLines.map((line, lidx) => (
                          <div key={lidx}>{line}</div>
                        ))}
                      </div>

                      {/* Bhavarth */}
                      <div className="space-y-2 mt-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                          सरल हिंदी भावार्थ (Explanation)
                        </h5>
                        <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {st.bhavarth}
                        </p>
                      </div>

                      {/* Vishesh & Kavyagat Soundarya */}
                      {st.vishesh && st.vishesh.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                            काव्यगत विशेषताएँ एवं शिल्प सौंदर्य (Alankar & Poetic Devices)
                          </h5>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {st.vishesh.map((v, vidx) => (
                              <li key={vidx} className="text-xs flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab 3: Vocabulary */}
              {activeLitSubTab === "vocab" && (
                <div className={`p-6 rounded-2xl border ${
                  isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-100 shadow-sm"
                }`}>
                  <h4 className="text-lg font-bold text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                    <Feather className="w-5 h-5" />
                    कठिन शब्दार्थ एवं संदर्भ (NCERT Vocabulary & Meanings)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentChapter.wordMeanings.map((wm, widx) => (
                      <div
                        key={widx}
                        className={`p-3 rounded-xl border flex items-start justify-between gap-3 ${
                          isDark ? "bg-slate-900/40 border-slate-800" : "bg-amber-50/30 border-amber-100"
                        }`}
                      >
                        <span className="font-bold text-sm text-amber-600 dark:text-amber-400">{wm.word}</span>
                        <span className={`text-xs text-right ${isDark ? "text-slate-300" : "text-slate-600"}`}>{wm.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-tab 4: Board QA */}
              {activeLitSubTab === "boardqa" && (
                <div className="space-y-4">
                  {currentChapter.boardQAs.map((qa, qidx) => (
                    <div
                      key={qa.id}
                      className={`p-5 rounded-2xl border ${
                        isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 border-b pb-2.5 border-amber-500/20">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 border border-rose-500/20">
                          प्रश्न {qidx + 1} • {qa.marks} अंक ({qa.wordLimit})
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                          CBSE संभावित प्रश्न
                        </span>
                      </div>

                      <h4 className="text-base font-bold mt-3 text-slate-900 dark:text-white">
                        {qa.question}
                      </h4>

                      <div className="mt-3 space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          आदर्श उत्तर (Model Board Answer):
                        </div>
                        <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {qa.modelAnswer}
                        </p>
                      </div>

                      {/* Key Points */}
                      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5">
                          मुख्य अंक-दायी बिंदु (Key Marking Points):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {qa.keyPoints.map((kp, kidx) => (
                            <span key={kidx} className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                              ✓ {kp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Examiner Tip */}
                      <div className={`mt-3 p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                        isDark ? "bg-rose-950/20 border-rose-900/40 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-800"
                      }`}>
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                        <div>
                          <strong>परीक्षक की टिप (Examiner's Secret):</strong> {qa.examinerTip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-tab 5: RTC MCQs */}
              {activeLitSubTab === "rtc" && currentChapter.rtcMcqs && (
                <div className={`p-6 rounded-2xl border ${
                  isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-100 shadow-sm"
                }`}>
                  <h4 className="text-lg font-bold text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    पठित गद्यांश / काव्यांश पर आधारित बहुविकल्पीय प्रश्न
                  </h4>

                  <div className={`p-4 rounded-xl border mb-6 text-sm leading-relaxed font-serif ${
                    isDark ? "bg-slate-800/40 border-slate-700 text-slate-200" : "bg-amber-50/60 border-amber-200 text-slate-800"
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-wider block text-amber-600 mb-1">गद्यांश / काव्यांश:</span>
                    "{currentChapter.rtcMcqs.passage}"
                  </div>

                  <div className="space-y-6">
                    {currentChapter.rtcMcqs.questions.map((q, qidx) => (
                      <div key={qidx} className="border-b pb-4 last:border-0 border-slate-200 dark:border-slate-800">
                        <p className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">
                          प्र. {qidx + 1}. {q.question}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, oidx) => {
                            const isCorrect = oidx === q.correctOption;
                            return (
                              <div
                                key={oidx}
                                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                                  isCorrect
                                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-semibold"
                                    : isDark ? "bg-slate-800/40 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                <span>({String.fromCharCode(65 + oidx)}) {opt}</span>
                                {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                          व्याख्या: {q.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: GRAMMAR MASTER HUB (16 MARKS) */}
        {/* ========================================================================= */}
        {activeTab === "grammar" && (
          <div className="space-y-6">
            {/* Grammar Topic Selector Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {HINDI_GRAMMAR_TOPICS.map((topic) => {
                const isSelected = topic.id === currentGrammarTopic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedGrammarId(topic.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? isDark
                          ? "bg-purple-950/40 border-purple-500 text-white shadow-lg shadow-purple-950/50"
                          : "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-400 shadow-sm"
                        : isDark
                          ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                          : "bg-white border-slate-200 text-slate-700 hover:border-purple-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-purple-500 text-white"
                          : isDark ? "bg-slate-800 text-purple-400" : "bg-purple-100 text-purple-700"
                      }`}>
                        {topic.marks} अंक
                      </span>
                    </div>
                    <h3 className={`font-bold text-base mt-1 ${isSelected ? "text-purple-600 dark:text-purple-300" : ""}`}>
                      {topic.title}
                    </h3>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"} mt-0.5`}>
                      {topic.englishTitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Grammar Detail & Interactive Quiz */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Rules & Theory (Left 7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Definition Card */}
                <div className={`p-6 rounded-2xl border ${
                  isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-purple-100 shadow-sm"
                }`}>
                  <div className="flex items-center justify-between border-b pb-3 border-purple-500/20 mb-3">
                    <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {currentGrammarTopic.title} ({currentGrammarTopic.englishTitle})
                    </h2>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 font-bold border border-purple-500/20">
                      बोर्ड अधिभार: {currentGrammarTopic.marks} अंक
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {currentGrammarTopic.definition}
                  </p>
                </div>

                {/* Golden Rules Box */}
                <div className={`p-5 rounded-2xl border border-amber-500/40 bg-gradient-to-br ${
                  isDark ? "from-amber-950/30 to-slate-900/80" : "from-amber-50 to-orange-50/40"
                }`}>
                  <h4 className="text-sm font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    गोल्डन ट्रिक्स एवं पहचान के नियम (Identification Shortcuts)
                  </h4>
                  <ul className="space-y-2">
                    {currentGrammarTopic.goldenRules.map((rule, ridx) => (
                      <li key={ridx} className={`text-xs sm:text-sm flex items-start gap-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        <span className="text-amber-500 font-bold mt-0.5">⚡</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Types Accordion / Cards */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    प्रमुख भेद एवं उदाहरण (Types & Board Examples)
                  </h4>
                  {currentGrammarTopic.types.map((type, tidx) => (
                    <div
                      key={tidx}
                      className={`p-4 rounded-xl border ${
                        isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h5 className="font-bold text-sm text-purple-600 dark:text-purple-400">{type.name}</h5>
                        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                          {type.identifyingClue}
                        </span>
                      </div>
                      <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"} mb-2.5`}>
                        {type.description}
                      </p>
                      <div className="space-y-1">
                        {type.examples.map((ex, eidx) => (
                          <div
                            key={eidx}
                            className={`text-xs px-2.5 py-1.5 rounded font-mono ${
                              isDark ? "bg-slate-800/60 text-slate-300" : "bg-purple-50/60 text-slate-800"
                            }`}
                          >
                            • {ex}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Textbook Muhavare Flashcards if Topic is Muhavare */}
                {currentGrammarTopic.id === "muhavare" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h4 className="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                        <Flame className="w-5 h-5" />
                        पाठ्यपुस्तक के 60 महत्वपूर्ण मुहावरे (Flashcard Explorer)
                      </h4>
                      <input
                        type="text"
                        placeholder="मुहावरा या पाठ खोजें..."
                        value={muhavareSearch}
                        onChange={(e) => setMuhavareSearch(e.target.value)}
                        className={`text-xs px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                          isDark ? "bg-slate-800 border-slate-700 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                      {filteredMuhavare.map((m, midx) => (
                        <div
                          key={midx}
                          className={`p-3 rounded-xl border ${
                            isDark ? "bg-slate-900/50 border-slate-800" : "bg-amber-50/40 border-amber-100"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-rose-600 dark:text-rose-400">{m.idiom}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              isDark ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"
                            }`}>
                              {m.sourceChapter}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 font-medium ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                            अर्थ: {m.meaning}
                          </p>
                          <p className={`text-xs mt-1 italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                            वाक्य: {m.sentence}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Board MCQ Quiz (Right 5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className={`p-5 rounded-2xl border ${
                  isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-purple-200 shadow-sm"
                }`}>
                  <div className="flex items-center justify-between border-b pb-3 border-purple-500/20 mb-4">
                    <div>
                      <h4 className="font-bold text-base text-purple-600 dark:text-purple-400 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        बोर्ड परीक्षा अभ्यास प्रश्न ({currentGrammarTopic.questions.length})
                      </h4>
                      <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        CBSE 2026-27 मानक बहुविकल्पीय प्रश्न
                      </p>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {currentGrammarTopic.questions.map((q, qidx) => {
                      const selectedOpt = grammarUserAnswers[q.id];
                      const isAnswered = selectedOpt !== undefined;
                      const isCorrect = selectedOpt === q.correctIndex;
                      const showExpl = showGrammarExplanations[q.id];

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isDark ? "bg-slate-900/50 border-slate-800" : "bg-slate-50/60 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600">
                              प्रश्न {qidx + 1}
                            </span>
                            <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                              q.difficulty === "hots" ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"
                            }`}>
                              {q.difficulty}
                            </span>
                          </div>

                          <p className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">
                            {q.question}
                          </p>

                          {/* Options */}
                          <div className="space-y-2">
                            {q.options.map((opt, oidx) => {
                              const isThisSelected = selectedOpt === oidx;
                              const isThisCorrect = oidx === q.correctIndex;

                              let btnClasses = isDark
                                ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-purple-50/50";

                              if (isAnswered) {
                                if (isThisCorrect) {
                                  btnClasses = "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  btnClasses = "bg-red-500/20 border-red-500 text-red-600 dark:text-red-400";
                                }
                              }

                              return (
                                <button
                                  key={oidx}
                                  disabled={isAnswered}
                                  onClick={() => {
                                    setGrammarUserAnswers(prev => ({ ...prev, [q.id]: oidx }));
                                    setShowGrammarExplanations(prev => ({ ...prev, [q.id]: true }));
                                  }}
                                  className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${btnClasses}`}
                                >
                                  <span>({String.fromCharCode(65 + oidx)}) {opt}</span>
                                  {isAnswered && isThisCorrect && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                                  {isAnswered && isThisSelected && !isCorrect && <X className="w-4 h-4 text-red-500 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation Toggle */}
                          {isAnswered && (
                            <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
                                  {isCorrect ? "✓ सही उत्तर!" : "✗ गलत उत्तर"}
                                </span>
                                <button
                                  onClick={() => setShowGrammarExplanations(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                                  className="text-[11px] text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                                >
                                  {showExpl ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                  {showExpl ? "व्याख्या छिपाएँ" : "व्याख्या देखें"}
                                </button>
                              </div>

                              {showExpl && (
                                <div className="mt-2 text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                                  <p>{q.explanation}</p>
                                  {q.trickOrRule && (
                                    <p className="text-amber-600 dark:text-amber-400 font-medium">
                                      💡 ट्रिक: {q.trickOrRule}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: WRITING SKILLS STUDIO (22 MARKS) */}
        {/* ========================================================================= */}
        {activeTab === "writing" && (
          <div className="space-y-6">
            {/* Writing Section Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {HINDI_WRITING_SECTIONS.filter(s => s.id !== "mistakes").map((sec) => {
                const isSelected = sec.id === currentWritingSection.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setSelectedWritingId(sec.id);
                      setSelectedWritingSampleId(sec.samples[0].id);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? isDark
                          ? "bg-emerald-950/40 border-emerald-500 text-white shadow-md shadow-emerald-950/50"
                          : "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-400 shadow-sm"
                        : isDark
                          ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                          : "bg-white border-slate-200 text-slate-700 hover:border-emerald-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-emerald-500 text-white"
                          : isDark ? "bg-slate-800 text-emerald-400" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {sec.marks} अंक
                      </span>
                    </div>
                    <h4 className={`font-bold text-sm ${isSelected ? "text-emerald-600 dark:text-emerald-300" : ""}`}>
                      {sec.title}
                    </h4>
                    <span className={`text-[11px] block mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {sec.wordLimit}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Writing Studio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Guidelines & Golden Tips */}
              <div className="lg:col-span-5 space-y-4">
                {/* Format Rules */}
                <div className={`p-5 rounded-2xl border ${
                  isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-emerald-100 shadow-sm"
                }`}>
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    आधिकारिक सीबीएसई प्रारूप (Official CBSE Format)
                  </h3>
                  <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"} mb-4`}>
                    अंक वितरण: प्रारूप (Format) + विषय-वस्तु (Content) + भाषा-शुद्धता (Language)
                  </p>

                  <div className="space-y-2.5">
                    {currentWritingSection.formatGuidelines.map((fg, fidx) => (
                      <div
                        key={fidx}
                        className={`p-2.5 rounded-lg border text-xs ${
                          isDark ? "bg-slate-800/40 border-slate-800" : "bg-emerald-50/40 border-emerald-100"
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-300 mb-1">
                          <span>{fg.element}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                            {fg.markWeight}
                          </span>
                        </div>
                        <p className={isDark ? "text-slate-300" : "text-slate-600"}>{fg.description}</p>
                        <span className="text-[10px] text-slate-400 italic block mt-1">स्थान: {fg.placement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Golden Writing Tips */}
                <div className={`p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-br ${
                  isDark ? "from-amber-950/20 to-slate-900/80" : "from-amber-50 to-orange-50/30"
                }`}>
                  <h4 className="text-sm font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    पूर्ण 100% अंक पाने के स्वर्णिम नियम
                  </h4>
                  <ul className="space-y-2">
                    {currentWritingSection.goldenTips.map((tip, tidx) => (
                      <li key={tidx} className={`text-xs flex items-start gap-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                        <span className="text-amber-500 font-bold mt-0.5">⭐</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Model Board Answer Viewer */}
              <div className="lg:col-span-7 space-y-4">
                {/* Sample Selector Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {currentWritingSection.samples.map((s) => {
                    const isSel = s.id === currentWritingSample.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedWritingSampleId(s.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium whitespace-nowrap transition-all ${
                          isSel
                            ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                            : isDark ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {s.title.split(":")[0]}
                      </button>
                    );
                  })}
                </div>

                {/* Model Sample Display Card */}
                <div className={`p-6 rounded-2xl border ${
                  isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-emerald-200 shadow-sm"
                }`}>
                  <div className="border-b pb-3 border-emerald-500/20 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                        आदर्श बोर्ड उत्तर • {currentWritingSample.wordCount} शब्द
                      </span>
                      <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                        पूरे {currentWritingSection.marks}/{currentWritingSection.marks} अंक मानक
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mt-2 text-slate-900 dark:text-white">
                      {currentWritingSample.title}
                    </h3>
                    <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      <strong>प्रश्न:</strong> {currentWritingSample.prompt}
                    </p>
                    {currentWritingSample.hints && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="text-[10px] text-slate-400">संकेत-बिंदु:</span>
                        {currentWritingSample.hints.map((h, hidx) => (
                          <span key={hidx} className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300">
                            • {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Authentic Content Box (Parchment/Box view) */}
                  <div className={`p-5 rounded-xl border whitespace-pre-wrap font-serif text-sm sm:text-base leading-relaxed ${
                    isDark
                      ? "bg-slate-950/70 border-slate-800 text-slate-200"
                      : "bg-amber-50/40 border-amber-200/60 text-slate-900"
                  }`}>
                    {currentWritingSample.content}
                  </div>

                  {/* Examiner Marking Breakdown */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                      परीक्षक मूल्यांकन टिप्पणी (Examiner's Rubric)
                    </h5>
                    <ul className="space-y-1">
                      {currentWritingSample.examinerNotes.map((note, nidx) => (
                        <li key={nidx} className={`text-xs flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 4: SPELLING & GRAMMAR TRAPS GUIDE */}
        {/* ========================================================================= */}
        {activeTab === "spelling_traps" && (
          <div className="space-y-6">
            {/* Banner */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? "bg-red-950/20 border-red-900/40 text-red-200" : "bg-red-50 border-red-200 text-red-900"
            }`}>
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
                    सीबीएसई वर्तनी एवं व्याकरणिक अशुद्धि निवारक (Spelling Penalties Guide)
                  </h3>
                  <p className="text-xs sm:text-sm mt-1">
                    बोर्ड परीक्षा में वर्तनी (Spelling) की प्रत्येक 2-3 त्रुटियों पर 0.5 से 1 अंक काट लिया जाता है। इन नियमों का कड़ाई से पालन करें।
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Golden Traps Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Trap 1: कि vs की */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                  <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                    1. 'कि' (ह्रस्व इ) बनाम 'की' (दीर्घ ई)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600">
                    सर्वाधिक आम गलती
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <strong>'कि' (छोटी इ):</strong> यह योजक (Conjunction) है जो दो उपवाक्यों को जोड़ता है।
                    <br />
                    <span className="text-emerald-700 dark:text-emerald-300 italic">उदाहरण: उसने कहा कि वह कल नहीं आएगा।</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <strong>'की' (बड़ी ई):</strong> यह संबंधकारक (स्त्रीलिंग) अथवा भूतकालिक क्रिया ('करना') है।
                    <br />
                    <span className="text-amber-700 dark:text-amber-300 italic">उदाहरण: यह राम की पुस्तक है। उसने मुझसे बात की।</span>
                  </div>
                </div>
              </div>

              {/* Trap 2: अनुस्वार vs अनुनासिक */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                  <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                    2. अनुस्वार (ं) बनाम चन्द्रबिन्दु (ँ)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600">
                    उच्चारण नियम
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    • <strong>अनुनासिक (ँ):</strong> हवा मुँह और नाक दोनों से निकलती है (उदा. आँख, चाँद, गाँव, दाँत)।
                  </p>
                  <p>
                    • <strong>शिरोरेखा नियम:</strong> यदि किसी वर्ण के ऊपर कोई मात्रा लगी हो (जैसे ि, ी, े, ै, ो, ौ), तो चन्द्रबिन्दु की जगह केवल बिन्दु (अनुस्वार) लगाया जाता है (उदा. मैं, हैं, गोंद, नहीं)।
                  </p>
                </div>
              </div>

              {/* Trap 3: नुक्ता */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                  <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                    3. नुक्ता (Nukta) का सही प्रयोग
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600">
                    अर्थ परिवर्तन
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>उर्दू व फ़ारसी के आगत शब्दों में नुक्ता लगाने से अर्थ पूरी तरह बदल जाता है:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                      <strong>सज़ा:</strong> दंड
                      <br />
                      <strong>सजा:</strong> सजाना
                    </div>
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                      <strong>राज़:</strong> रहस्य
                      <br />
                      <strong>राज:</strong> शासन
                    </div>
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                      <strong>ज़रा:</strong> थोड़ा
                      <br />
                      <strong>जरा:</strong> बुढ़ापा
                    </div>
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                      <strong>फन:</strong> साँप का सिर
                      <br />
                      <strong>फ़न:</strong> कला / हुनर
                    </div>
                  </div>
                </div>
              </div>

              {/* Trap 4: बहुवचन ह्रस्वीकरण */}
              <div className={`p-5 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                  <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                    4. बहुवचन में दीर्घ 'ई' का ह्रस्व 'इ' में परिवर्तन
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600">
                    स्वर्णिम नियम
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <p>
                    किसी भी शब्द के अंत में यदि दीर्घ 'ई' (ी) है, तो बहुवचन बनाते समय वह अनिवार्य रूप से ह्रस्व 'इ' (ि) बन जाती है:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      दवाई ➔ दवाइयाँ ✓ (दवाईयाँ ✗)
                    </div>
                    <div className="p-2 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      नदी ➔ नदियाँ ✓ (नदीयाँ ✗)
                    </div>
                    <div className="p-2 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      मिठाई ➔ मिठाइयाँ ✓
                    </div>
                    <div className="p-2 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                      पंक्ति ➔ पंक्तियाँ ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 10 Repeated Spelling Mistakes Table */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                सीबीएसई बोर्ड परीक्षा: शीर्ष 10 सर्वाधिक गलत लिखे जाने वाले शब्द
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { wrong: "कवियत्री", right: "कवयित्री", rule: "'य' पर छोटी 'इ' की मात्रा लगती है।" },
                  { wrong: "उज्वल", right: "उज्ज्वल", rule: "दो बार आधा 'ज' (ज् + ज्) आता है।" },
                  { wrong: "पूज्यनीय", right: "पूजनीय अथवा पूज्य", rule: "'पूज्य' और 'अनीय' दोनों प्रत्यय एक साथ नहीं जुड़ते।" },
                  { wrong: "आधीन", right: "अधीन", rule: "प्रारंभ में ह्रस्व 'अ' होता है, 'आ' नहीं।" },
                  { wrong: "आर्शीवाद", right: "आशीर्वाद", rule: "रेफ़ 'र' हमेशा 'शी' के बाद वाले अक्षर 'वा' पर लगता है।" },
                  { wrong: "श्रृंगार", right: "शृंगार", rule: "'श्र' (श्+र) में 'ऋ' की मात्रा नहीं जुड़ती; 'श' + 'ऋ' = 'शृ' बनता है।" },
                  { wrong: "सन्यासी", right: "संन्यासी", rule: "अनुस्वार (बिंदु) और आधा 'न' दोनों आते हैं।" },
                  { wrong: "रचियता", right: "रचयिता", rule: "'च' पर नहीं बल्कि 'य' पर 'इ' की मात्रा होती है।" },
                  { wrong: "ऐतिहासिक", right: "ऐतिहासिक", rule: "'इतिहास' + 'इक' प्रत्यय लगने से आदि स्वर 'ऐ' बन जाता है।" },
                  { wrong: "निरपराधী", right: "निरपराध", rule: "विशेषण के रूप में 'निरपराध' शुद्ध है, 'निरपराधी' अशुद्ध।" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 ${
                      isDark ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs line-through text-red-500 font-mono">✗ {item.wrong}</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">✓ {item.right}</span>
                      </div>
                      <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Icon helper
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
