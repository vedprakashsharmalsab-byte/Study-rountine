"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  Feather,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
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
  MessageSquare,
  Filter,
  ArrowRight,
  ArrowLeft,
  RotateCcw
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
type LitSubTab = "scene_studio" | "pyq_bank" | "summary_moral" | "characters_dialogues" | "vocab" | "boardqa";

export default function HindiMasterView({ isDark, onJumpToRevision, onOpenQuestionBank }: HindiMasterViewProps) {
  // Main Tab State with LocalStorage Persistence
  const [activeTab, setActiveTab] = useState<HindiMainTab>("sparsh_prose");

  // Literature selection state
  const [selectedChapterId, setSelectedChapterId] = useState<string>("hin_sp_p1");
  const [litSearchQuery, setLitSearchQuery] = useState<string>("");
  const [activeLitSubTab, setActiveLitSubTab] = useState<LitSubTab>("scene_studio");

  // Focus Stepper States (Zero Endless Scrolling)
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [activePyqIndex, setActivePyqIndex] = useState<number>(0);
  const [activeStanzaIndex, setActiveStanzaIndex] = useState<number>(0);
  const [activeCharacterIndex, setActiveCharacterIndex] = useState<number>(0);
  const [poetryAnalysisMode, setPoetryAnalysisMode] = useState<"bhavarth" | "shilp">("bhavarth");

  // Grammar selection state
  const [selectedGrammarId, setSelectedGrammarId] = useState<string>("padbandh");
  const [grammarSubTab, setGrammarSubTab] = useState<"root_basics" | "textbook_muhavare" | "practice_quiz">("root_basics");
  const [selectedMuhavareChapter, setSelectedMuhavareChapter] = useState<string>("all");
  const [grammarUserAnswers, setGrammarUserAnswers] = useState<Record<string, number>>({});
  const [showGrammarExplanations, setShowGrammarExplanations] = useState<Record<string, boolean>>({});
  const [muhavareSearch, setMuhavareSearch] = useState<string>("");

  // Writing selection state
  const [selectedWritingId, setSelectedWritingId] = useState<string>("anuched");
  const [selectedWritingSampleId, setSelectedWritingSampleId] = useState<string>("anuched_1");

  // Restore persistence on mount
  useEffect(() => {
    try {
      const savedTab = localStorage.getItem("cbse_last_hindi_tab") as HindiMainTab | null;
      if (savedTab) setActiveTab(savedTab);

      const savedChapter = localStorage.getItem("cbse_last_hindi_chapter");
      if (savedChapter && HINDI_LITERATURE_DATA.some(c => c.id === savedChapter)) {
        setSelectedChapterId(savedChapter);
      }

      const savedSubTab = localStorage.getItem("cbse_last_hindi_subtab") as LitSubTab | null;
      if (savedSubTab) setActiveLitSubTab(savedSubTab);

      const savedGrammar = localStorage.getItem("cbse_last_grammar_topic");
      if (savedGrammar && HINDI_GRAMMAR_TOPICS.some(t => t.id === savedGrammar)) {
        setSelectedGrammarId(savedGrammar);
      }
    } catch {
      // ignore
    }
  }, []);

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

  // Filtered textbook muhavare
  const filteredMuhavare = useMemo(() => {
    return TEXTBOOK_MUHAVARE_LIST.filter(m => {
      if (selectedMuhavareChapter !== "all" && m.sourceChapter !== selectedMuhavareChapter) return false;
      if (muhavareSearch.trim()) {
        const q = muhavareSearch.toLowerCase();
        return (
          m.idiom.toLowerCase().includes(q) ||
          m.meaning.toLowerCase().includes(q) ||
          m.sourceChapter.toLowerCase().includes(q) ||
          (m.exampleSentence && m.exampleSentence.toLowerCase().includes(q)) ||
          (m.boardExamUsage && m.boardExamUsage.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedMuhavareChapter, muhavareSearch]);

  // Distinct Muhavare chapters for filter
  const muhavareChaptersList = useMemo(() => {
    const set = new Set<string>();
    TEXTBOOK_MUHAVARE_LIST.forEach(m => set.add(m.sourceChapter));
    return Array.from(set);
  }, []);

  // Active writing section & sample
  const currentWritingSection = useMemo(() => {
    return HINDI_WRITING_SECTIONS.find(w => w.id === selectedWritingId) || HINDI_WRITING_SECTIONS[0];
  }, [selectedWritingId]);

  const currentWritingSample = useMemo(() => {
    return currentWritingSection.samples.find(s => s.id === selectedWritingSampleId) || currentWritingSection.samples[0];
  }, [currentWritingSection, selectedWritingSampleId]);

  // Switch tab and sync default chapter + persist
  const handleTabChange = (tab: HindiMainTab) => {
    setActiveTab(tab);
    try {
      localStorage.setItem("cbse_last_hindi_tab", tab);
    } catch {}

    let newChId = selectedChapterId;
    if (tab === "sparsh_prose") {
      newChId = "hin_sp_p1";
      setSelectedChapterId(newChId);
      setActiveLitSubTab("scene_studio");
    } else if (tab === "sparsh_poetry") {
      newChId = "hin_sp_k1";
      setSelectedChapterId(newChId);
      setActiveLitSubTab("scene_studio");
    } else if (tab === "sanchayan") {
      newChId = "hin_san_1";
      setSelectedChapterId(newChId);
      setActiveLitSubTab("scene_studio");
    }
    setActiveSceneIndex(0);
    setActivePyqIndex(0);
    setActiveStanzaIndex(0);
    setActiveCharacterIndex(0);
    try {
      localStorage.setItem("cbse_last_hindi_chapter", newChId);
    } catch {}
  };

  const handleSelectChapter = (chId: string) => {
    setSelectedChapterId(chId);
    setActiveSceneIndex(0);
    setActivePyqIndex(0);
    setActiveStanzaIndex(0);
    setActiveCharacterIndex(0);
    try {
      localStorage.setItem("cbse_last_hindi_chapter", chId);
    } catch {}
  };

  const handleSubTabChange = (subTab: LitSubTab) => {
    setActiveLitSubTab(subTab);
    try {
      localStorage.setItem("cbse_last_hindi_subtab", subTab);
    } catch {}
  };

  const handleGrammarTopicChange = (topicId: string) => {
    setSelectedGrammarId(topicId);
    try {
      localStorage.setItem("cbse_last_grammar_topic", topicId);
    } catch {}
  };

  // Map chapter id to numeric ID for question bank jump
  const getVaultChapterNo = () => {
    switch (currentChapter.id) {
      case "hin_sp_p1": return 1;
      case "hin_sp_p2": return 2;
      case "hin_sp_p3": return 3;
      case "hin_sp_p4": return 4;
      case "hin_sp_p5": return 5;
      case "hin_sp_p6": return 6;
      case "hin_sp_p7": return 7;
      case "hin_sp_k1": return 8;
      case "hin_sp_k2": return 9;
      case "hin_sp_k3": return 10;
      case "hin_sp_k4": return 11;
      case "hin_sp_k5": return 12;
      case "hin_sp_k6": return 13;
      case "hin_sp_k7": return 14;
      case "hin_san_1": return 15;
      case "hin_san_2": return 16;
      case "hin_san_3": return 17;
      default: return 1;
    }
  };

  // Check if poetry
  const isPoetry = currentChapter.book === "sparsh_poetry";

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. TOP HEADER & BREADCRUMB STUDIO */}
      <div className={`p-5 sm:p-7 rounded-3xl border transition-all ${
        isDark 
          ? "bg-gradient-to-br from-[#1c1218] via-[#140e16] to-[#0f111a] border-rose-500/25 shadow-[0_8px_32px_rgba(244,63,94,0.12)]" 
          : "bg-gradient-to-br from-rose-50/90 via-amber-50/60 to-white border-amber-200 shadow-md"
      }`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-rose-600 text-white shadow-sm flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> CBSE Hindi Course 'B' (Code 085) Focus Studio
              </span>
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                isDark ? "bg-amber-950/60 text-amber-300 border-amber-500/30" : "bg-amber-100 text-amber-900 border-amber-300"
              }`}>
                2026-27 Board Examination Standard
              </span>
            </div>

            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              हिंदी 'ब' सम्पूर्ण मास्टर स्टूडियो (Hindi Literature & Grammar Master)
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300 font-normal" : "text-slate-700 font-medium"}`}>
              दृश्यकेंद्रित गहन अध्ययन (Scene Steppers), मूल नियमों से व्याकरण विवेचन (Root Grammar), एनसीईआरटी पाठ्यपुस्तक मुहावरे बैंक एवं विगत 7 वर्षों के सीबीएसई बोर्ड प्रश्न (2018–2025)।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-800"}`}>
              📖 साहित्य: 42 अंक
            </span>
            <span className={`px-2.5 py-1 rounded-lg border ${isDark ? "bg-slate-800/80 border-slate-700 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-800"}`}>
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

        {/* Primary Navigation Tabs */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1 border-t pt-3 border-dashed border-rose-500/20">
          {[
            { id: "sparsh_prose", icon: BookOpen, title: "Sparsh Prose", sub: "स्पर्श गद्य खंड (7 Ch)" },
            { id: "sparsh_poetry", icon: Feather, title: "Sparsh Poetry", sub: "स्पर्श काव्य खंड (7 Poems)" },
            { id: "sanchayan", icon: Layers, title: "Sanchayan", sub: "संचयन पूरक (3 Ch)" },
            { id: "grammar", icon: Zap, title: "Grammar Hub", sub: "व्याकरण मास्टर (16 Marks)" },
            { id: "writing", icon: PenTool, title: "Writing Studio", sub: "रचनात्मक लेखन (22 Marks)" },
            { id: "spelling_traps", icon: ShieldAlert, title: "Spelling Traps", sub: "वर्तनी व अशुद्धि निवारक" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as HindiMainTab)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/25 ring-1 ring-white/20 font-bold"
                    : isDark 
                      ? "text-slate-300 hover:bg-slate-800/60 border border-transparent hover:border-slate-700" 
                      : "text-slate-700 hover:bg-amber-100/60 border border-slate-200/60"
                }`}
              >
                <Icon className="w-4 h-4 text-rose-300" />
                <div className="text-left leading-tight">
                  <div className="font-bold">{tab.title}</div>
                  <div className="text-[10px] opacity-80 font-normal">{tab.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: LITERATURE TABS (Prose, Poetry, Sanchayan) — FOCUS STUDIO */}
      {/* ========================================================================= */}
      {(activeTab === "sparsh_prose" || activeTab === "sparsh_poetry" || activeTab === "sanchayan") && (
        <div className="space-y-5">
          {/* Horizontal Chapter Quick Shelf (Zero Phone Horizontal Squeeze) */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${
            isDark ? "bg-[#0f1422] border-white/10" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> 
                  {activeTab === "sparsh_prose" ? "स्पर्श गद्य पाठ चयन" : activeTab === "sparsh_poetry" ? "स्पर्श काव्य पाठ चयन" : "संचयन पूरक पाठ चयन"}:
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ({chaptersForTab.length} पाठ उपलब्ध)
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="पाठ अथवा रचयिता खोजें..."
                  value={litSearchQuery}
                  onChange={(e) => setLitSearchQuery(e.target.value)}
                  className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none transition-all ${
                    isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                />
              </div>
            </div>

            {/* Chapter Horizontal Pill Drawer */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {filteredChapters.map((ch, idx) => {
                const isSelected = ch.id === currentChapter.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleSelectChapter(ch.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? isDark
                          ? "bg-rose-950/60 border-rose-500 text-white shadow-sm ring-1 ring-rose-500/40"
                          : "bg-rose-600 border-rose-600 text-white shadow-sm"
                        : isDark
                          ? "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold text-[10px] ${
                      isSelected ? "bg-white/20 text-white" : "bg-rose-500/10 text-rose-500"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="font-bold">{ch.title}</span>
                    <span className="text-[10px] opacity-70">({ch.author})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Chapter Presentation Studio */}
          <div className={`p-6 sm:p-7 rounded-3xl border ${
            isDark ? "bg-[#0b101c] border-white/10 shadow-lg" : "bg-white border-amber-200/90 shadow-md"
          }`}>
            {/* Chapter Header Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-5 border-rose-500/20">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-600 border border-rose-500/20 font-mono">
                    {currentChapter.book === "sparsh_prose" ? "Sparsh Prose" : currentChapter.book === "sparsh_poetry" ? "Sparsh Poetry" : "Sanchayan"} • {currentChapter.genre}
                  </span>
                  <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    रचयिता / लेखक: <strong className={isDark ? "text-slate-200" : "text-slate-800"}>{currentChapter.author}</strong>
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  {currentChapter.title}
                </h2>
                <p className="text-sm italic text-amber-600 dark:text-amber-400 font-medium">
                  "{currentChapter.tagline}"
                </p>
              </div>

              {onOpenQuestionBank && (
                <button
                  onClick={() => onOpenQuestionBank(getVaultChapterNo())}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white shadow-md hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2 cursor-pointer touch-manipulation active:scale-95 shrink-0 self-start lg:self-center"
                >
                  <Zap className="w-4 h-4" />
                  <span>Practice Chapter in Question Bank (अध्याय अभ्यास)</span>
                </button>
              )}
            </div>

            {/* Mode Steppers Navigation Bar (No Endless Scrolling) */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 text-xs sm:text-sm border-b pb-4 border-slate-200/60 dark:border-slate-800">
              <button
                onClick={() => handleSubTabChange("scene_studio")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLitSubTab === "scene_studio"
                    ? "bg-rose-600 text-white font-bold shadow-md shadow-rose-600/25 ring-1 ring-white/20"
                    : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                }`}
              >
                {isPoetry ? <Feather className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
                <span>{isPoetry ? `📜 पद व काव्यांश स्टूडियो (${currentChapter.stanzas?.length || 0})` : `📖 दृश्य-वार कथा स्टूडियो (${currentChapter.deepSceneBreakdown?.length || 0})`}</span>
              </button>

              <button
                onClick={() => handleSubTabChange("pyq_bank")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLitSubTab === "pyq_bank"
                    ? "bg-amber-600 text-white font-bold shadow-md shadow-amber-600/25 ring-1 ring-white/20"
                    : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                }`}
              >
                <Award className="w-4 h-4" />
                <span>🎯 बोर्ड PYQ बैंक 2018–2025 ({currentChapter.pyqTrends?.length || 0})</span>
              </button>

              <button
                onClick={() => handleSubTabChange("summary_moral")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLitSubTab === "summary_moral"
                    ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/25 ring-1 ring-white/20"
                    : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>💡 केंद्रीय दर्शन व सारांश</span>
              </button>

              {((currentChapter.characters && currentChapter.characters.length > 0) || (currentChapter.keyDialogues && currentChapter.keyDialogues.length > 0)) && (
                <button
                  onClick={() => handleSubTabChange("characters_dialogues")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeLitSubTab === "characters_dialogues"
                      ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/25 ring-1 ring-white/20"
                      : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>👥 पात्र व मुख्य संवाद ({currentChapter.characters?.length || 0})</span>
                </button>
              )}

              <button
                onClick={() => handleSubTabChange("vocab")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLitSubTab === "vocab"
                    ? "bg-teal-600 text-white font-bold shadow-md shadow-teal-600/25 ring-1 ring-white/20"
                    : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>🔤 कठिन शब्दार्थ ({currentChapter.wordMeanings.length})</span>
              </button>

              <button
                onClick={() => handleSubTabChange("boardqa")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLitSubTab === "boardqa"
                    ? "bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/25 ring-1 ring-white/20"
                    : isDark ? "text-slate-300 hover:bg-slate-800/60" : "text-slate-700 hover:bg-amber-100/50"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>📝 बोर्ड RTC व संभावित प्रश्नोत्तर</span>
              </button>
            </div>

            {/* ===================================================================== */}
            {/* SUB-TAB 1: SCENE STUDIO / STANZA STUDIO (ZERO ENDLESS SCROLLING!) */}
            {/* ===================================================================== */}
            {activeLitSubTab === "scene_studio" && (
              <div className="mt-5 space-y-5">
                {/* A. FOR POETRY: STANZA STEPPER STUDIO */}
                {isPoetry && currentChapter.stanzas && currentChapter.stanzas.length > 0 && (
                  <div className="space-y-4">
                    {/* Stanza Selector Stepper */}
                    <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
                      <div className="flex items-center gap-2">
                        {currentChapter.stanzas.map((st, sidx) => {
                          const isSel = sidx === activeStanzaIndex;
                          return (
                            <button
                              key={sidx}
                              onClick={() => setActiveStanzaIndex(sidx)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? "bg-rose-600 text-white border-rose-600 font-bold shadow-sm"
                                  : isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                              }`}
                            >
                              <span>पद / साखी {sidx + 1}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          disabled={activeStanzaIndex === 0}
                          onClick={() => setActiveStanzaIndex(prev => Math.max(0, prev - 1))}
                          className="px-2.5 py-1 rounded-lg border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          <ChevronLeft className="w-4 h-4 inline" /> पिछला पद
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-rose-500">
                          {activeStanzaIndex + 1} / {currentChapter.stanzas.length}
                        </span>
                        <button
                          disabled={activeStanzaIndex === currentChapter.stanzas.length - 1}
                          onClick={() => setActiveStanzaIndex(prev => Math.min(currentChapter.stanzas!.length - 1, prev + 1))}
                          className="px-2.5 py-1 rounded-lg border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          अगला पद <ChevronRight className="w-4 h-4 inline" />
                        </button>
                      </div>
                    </div>

                    {/* Active Stanza Card */}
                    {(() => {
                      const activeStanza = currentChapter.stanzas[activeStanzaIndex] || currentChapter.stanzas[0];
                      return (
                        <div className={`p-6 sm:p-8 rounded-2xl border space-y-5 ${
                          isDark ? "bg-slate-900/80 border-slate-800" : "bg-gradient-to-br from-amber-50/70 via-white to-rose-50/40 border-amber-200 shadow-sm"
                        }`}>
                          {/* Verse Display in Calligraphy Card */}
                          <div className={`p-5 sm:p-6 rounded-2xl border ${
                            isDark ? "bg-black/50 border-amber-500/20" : "bg-amber-100/50 border-amber-300"
                          }`}>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1.5">
                              <Quote className="w-3.5 h-3.5" /> मूल काव्यांश (Verse {activeStanzaIndex + 1}):
                            </div>
                            <p className="text-lg sm:text-xl md:text-2xl font-serif font-medium leading-[2.2] tracking-wide text-amber-950 dark:text-amber-100 whitespace-pre-line text-center">
                              {activeStanza.originalLines.join("\n")}
                            </p>
                          </div>

                          {/* Switcher: Meaning vs Shilp-Soundarya */}
                          <div className="flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                            <button
                              onClick={() => setPoetryAnalysisMode("bhavarth")}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                poetryAnalysisMode === "bhavarth"
                                  ? "bg-rose-600 text-white shadow-xs"
                                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              📖 विस्तृत सरल भावार्थ (Line-by-Line Meaning)
                            </button>
                            <button
                              onClick={() => setPoetryAnalysisMode("shilp")}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                poetryAnalysisMode === "shilp"
                                  ? "bg-amber-600 text-white shadow-xs"
                                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              🎨 शिल्प-सौंदर्य एवं अलंकार (Poetic Devices)
                            </button>
                          </div>

                          {poetryAnalysisMode === "bhavarth" ? (
                            <div className="space-y-2">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block">
                                भावार्थ एवं अर्थ-गांभीर्य:
                              </span>
                              <p className={`text-base sm:text-lg leading-[2.1] text-justify ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                {activeStanza.bhavarth}
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500 block">
                                काव्यगत विशेषताएँ, भाषा-शैली व अलंकार:
                              </span>
                              {activeStanza.vishesh && activeStanza.vishesh.length > 0 ? (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {activeStanza.vishesh.map((v, vidx) => (
                                    <li key={vidx} className={`p-3 rounded-xl border text-sm flex items-start gap-2 ${
                                      isDark ? "bg-black/30 border-white/5 text-slate-200" : "bg-white border-amber-200 text-slate-800"
                                    }`}>
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                      <span>{v}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-slate-400">विशेष टिप्पणी उपलब्ध है।</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* B. FOR PROSE & SANCHAYAN: SCENE STEPPER STUDIO (ZERO ENDLESS SCROLLING!) */}
                {!isPoetry && currentChapter.deepSceneBreakdown && currentChapter.deepSceneBreakdown.length > 0 && (
                  <div className="space-y-4">
                    {/* Horizontal Scene Stepper Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100/70 dark:bg-slate-900/70 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                        {currentChapter.deepSceneBreakdown.map((sec, sidx) => {
                          const isSel = sidx === activeSceneIndex;
                          return (
                            <button
                              key={sidx}
                              onClick={() => setActiveSceneIndex(sidx)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? "bg-rose-600 text-white border-rose-600 shadow-sm ring-1 ring-white/20"
                                  : isDark ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                                isSel ? "bg-white/20 text-white" : "bg-rose-500/10 text-rose-500"
                              }`}>
                                {sidx + 1}
                              </span>
                              <span className="max-w-[150px] truncate">{sec.sceneTitle}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Scene Step Navigation */}
                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                        <button
                          disabled={activeSceneIndex === 0}
                          onClick={() => setActiveSceneIndex(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" /> पिछला
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-rose-500">
                          {activeSceneIndex + 1} / {currentChapter.deepSceneBreakdown.length}
                        </span>
                        <button
                          disabled={activeSceneIndex === currentChapter.deepSceneBreakdown.length - 1}
                          onClick={() => setActiveSceneIndex(prev => Math.min(currentChapter.deepSceneBreakdown!.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                        >
                          अगला <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Active Focus Scene Card */}
                    {(() => {
                      const activeScene = currentChapter.deepSceneBreakdown[activeSceneIndex] || currentChapter.deepSceneBreakdown[0];
                      return (
                        <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                          isDark ? "bg-slate-900/80 border-slate-800 shadow-md" : "bg-white border-slate-200 shadow-sm"
                        }`}>
                          {/* Scene Header */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 border-rose-500/20">
                            <div className="flex items-center gap-2.5">
                              <span className="px-3 py-1 rounded-xl bg-rose-600 text-white font-mono font-black text-xs shadow-xs">
                                दृश्य {activeSceneIndex + 1}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                                {activeScene.sceneTitle}
                              </h3>
                            </div>
                            <span className="text-xs font-mono text-slate-400">
                              भाग {activeSceneIndex + 1} of {currentChapter.deepSceneBreakdown.length}
                            </span>
                          </div>

                          {/* High-Readability Narrative Typography */}
                          <div className={`p-6 sm:p-7 rounded-2xl border ${
                            isDark ? "bg-black/30 border-white/5" : "bg-slate-50/70 border-slate-200/80"
                          }`}>
                            <p className={`text-lg sm:text-xl font-normal leading-[2.2] tracking-wide text-justify ${
                              isDark ? "text-slate-100" : "text-slate-800"
                            }`}>
                              {activeScene.narrativeText}
                            </p>
                          </div>

                          {/* Key Exam & Pedagogical Insights */}
                          {activeScene.keyInsights && activeScene.keyInsights.length > 0 && (
                            <div className={`p-5 rounded-2xl border ${
                              isDark ? "bg-amber-950/20 border-amber-900/30 text-amber-200" : "bg-amber-50/70 border-amber-200/80 text-amber-900"
                            }`}>
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                <span>बोर्ड परीक्षा हेतु मुख्य मर्म व अंतर्दृष्टि (Key Exam & Thematic Insights):</span>
                              </div>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                {activeScene.keyInsights.map((insight, iidx) => (
                                  <li key={iidx} className="text-sm flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{insight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Bottom Navigation Buttons */}
                          <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-slate-800">
                            <button
                              disabled={activeSceneIndex === 0}
                              onClick={() => setActiveSceneIndex(prev => Math.max(0, prev - 1))}
                              className="px-4 py-2 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                              <ArrowLeft className="w-4 h-4" /> पिछला दृश्य (Previous)
                            </button>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              दृश्य {activeSceneIndex + 1} / {currentChapter.deepSceneBreakdown.length}
                            </span>
                            <button
                              disabled={activeSceneIndex === currentChapter.deepSceneBreakdown.length - 1}
                              onClick={() => setActiveSceneIndex(prev => Math.min(currentChapter.deepSceneBreakdown!.length - 1, prev + 1))}
                              className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                            >
                              अगला दृश्य (Next) <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* ===================================================================== */}
            {/* SUB-TAB 2: CBSE PYQ BANK 2018–2025 (QUESTION STEPPER - NO ENDLESS SCROLL!) */}
            {/* ===================================================================== */}
            {activeLitSubTab === "pyq_bank" && (
              <div className="mt-5 space-y-4">
                {currentChapter.pyqTrends && currentChapter.pyqTrends.length > 0 ? (
                  <div className="space-y-4">
                    {/* Question Stepper Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100/70 dark:bg-slate-900/70 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                        {currentChapter.pyqTrends.map((pyq, pidx) => {
                          const isSel = pidx === activePyqIndex;
                          return (
                            <button
                              key={pidx}
                              onClick={() => setActivePyqIndex(pidx)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                                  : isDark ? "bg-slate-800/80 border-slate-700 text-slate-300" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{pyq.year.replace("CBSE ", "")}</span>
                              <span className="text-[10px] opacity-75">({pyq.marks}M)</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                        <button
                          disabled={activePyqIndex === 0}
                          onClick={() => setActivePyqIndex(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          <ChevronLeft className="w-3.5 h-3.5 inline" /> पिछला
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-amber-500">
                          {activePyqIndex + 1} / {currentChapter.pyqTrends.length}
                        </span>
                        <button
                          disabled={activePyqIndex === currentChapter.pyqTrends.length - 1}
                          onClick={() => setActivePyqIndex(prev => Math.min(currentChapter.pyqTrends!.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          अगला <ChevronRight className="w-3.5 h-3.5 inline" />
                        </button>
                      </div>
                    </div>

                    {/* Active Question Focus Card */}
                    {(() => {
                      const activePyq = currentChapter.pyqTrends[activePyqIndex] || currentChapter.pyqTrends[0];
                      return (
                        <div className={`p-6 sm:p-8 rounded-3xl border space-y-5 ${
                          isDark ? "bg-slate-900/80 border-slate-800 shadow-md" : "bg-white border-slate-200 shadow-sm"
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-600 text-white shadow-xs font-mono">
                                {activePyq.year}
                              </span>
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-mono">
                                {activePyq.marks} अंक (Marks)
                              </span>
                            </div>
                            <span className="text-xs font-mono text-slate-400">
                              Core Concept: {activePyq.coreConcept}
                            </span>
                          </div>

                          {/* Question Text */}
                          <div className={`p-5 rounded-2xl border ${
                            isDark ? "bg-black/40 border-white/5" : "bg-amber-50/50 border-amber-200/80"
                          }`}>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block mb-1">
                              CBSE बोर्ड आधिकारिक प्रश्न:
                            </span>
                            <h4 className="text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-white">
                              {activePyq.question}
                            </h4>
                          </div>

                          {/* Marking Scheme / Answer Breakdown */}
                          <div className="space-y-2">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 block">
                              आधिकारिक अंकन योजना (Official CBSE Marking Scheme & Model Answer):
                            </span>
                            <div className={`p-5 rounded-2xl border ${
                              isDark ? "bg-slate-950 border-emerald-500/20 text-slate-200" : "bg-emerald-50/50 border-emerald-200 text-slate-800"
                            }`}>
                              <p className="text-base leading-[2.1] text-justify whitespace-pre-line">
                                {activePyq.examinerRubric}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <p className="p-8 text-center text-slate-400">इस पाठ के PYQs तैयार किए जा रहे हैं।</p>
                )}
              </div>
            )}

            {/* ===================================================================== */}
            {/* SUB-TAB 3: CENTRAL MORAL & CHAPTER SUMMARY */}
            {/* ===================================================================== */}
            {activeLitSubTab === "summary_moral" && (
              <div className="mt-5 space-y-5">
                {/* Central Moral & Philosophy Banner */}
                <div className={`p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br ${
                  isDark ? "from-amber-950/30 via-slate-900/80 to-slate-900/60" : "from-amber-50 via-rose-50/40 to-orange-50/50"
                } shadow-sm`}>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold uppercase text-xs tracking-wider mb-2 font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>पाठ का केंद्रीय भाव, जीवन-मूल्य एवं मुख्य संदेश (Core Philosophy)</span>
                  </div>
                  <p className={`text-base sm:text-lg leading-[2.1] font-medium ${isDark ? "text-amber-100" : "text-amber-950"}`}>
                    {currentChapter.centralMessage}
                  </p>
                </div>

                {/* Comprehensive Chapter Summary */}
                <div className={`p-6 sm:p-7 rounded-2xl border ${
                  isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                }`}>
                  <h4 className="text-xl font-bold flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-4 pb-2 border-b border-amber-500/20">
                    <BookOpen className="w-5 h-5" />
                    <span>विस्तृत पाठ सारांश (Comprehensive Chapter Narrative)</span>
                  </h4>
                  <p className={`text-base sm:text-lg leading-[2.2] text-justify ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {currentChapter.summary}
                  </p>
                </div>
              </div>
            )}

            {/* ===================================================================== */}
            {/* SUB-TAB 4: CHARACTERS & DIALOGUES */}
            {/* ===================================================================== */}
            {activeLitSubTab === "characters_dialogues" && (
              <div className="mt-5 space-y-6">
                {/* Characters Section */}
                {currentChapter.characters && currentChapter.characters.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b pb-2 border-purple-500/20">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-500">
                        प्रमुख पात्र चरित्र-चित्रण (Character Sketches):
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentChapter.characters.map((ch, cidx) => (
                        <div
                          key={cidx}
                          className={`p-5 sm:p-6 rounded-2xl border ${
                            isDark ? "bg-slate-900/60 border-slate-800" : "bg-purple-50/40 border-purple-200 shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between border-b pb-2 border-purple-500/20 mb-3">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                              {ch.name}
                            </h4>
                            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">
                              {ch.role}
                            </span>
                          </div>
                          <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {ch.description}
                          </p>
                          <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              प्रमुख चारित्रिक विशेषताएँ:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {ch.traits.map((trait, tidx) => (
                                <span key={tidx} className="text-xs px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-medium">
                                  ✓ {trait}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Dialogues Section */}
                {currentChapter.keyDialogues && currentChapter.keyDialogues.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b pb-2 border-rose-500/20">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
                        महत्वपूर्ण संवाद व दार्शनिक संदर्भ (Exam-Critical Dialogues):
                      </span>
                    </div>

                    <div className="space-y-3">
                      {currentChapter.keyDialogues.map((dlg, didx) => (
                        <div
                          key={didx}
                          className={`p-5 rounded-2xl border ${
                            isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between border-b pb-2 border-slate-200 dark:border-slate-800 mb-2">
                            <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                              {dlg.speaker} ➔ {dlg.listener}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              {dlg.context}
                            </span>
                          </div>
                          <p className="text-base font-serif italic font-semibold leading-relaxed text-slate-900 dark:text-white my-2">
                            "{dlg.dialogue}"
                          </p>
                          <p className={`text-xs sm:text-sm pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}>
                            💡 <strong>आंतरिक मर्म / निहितार्थ:</strong> {dlg.boardSignificance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ===================================================================== */}
            {/* SUB-TAB 5: VOCABULARY */}
            {/* ===================================================================== */}
            {activeLitSubTab === "vocab" && (
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-teal-500/20">
                  <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>कठिन शब्दार्थ एवं संदर्भ (NCERT Vocabulary)</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {currentChapter.wordMeanings.length} शब्द सूची
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {currentChapter.wordMeanings.map((wm, widx) => (
                    <div
                      key={widx}
                      className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 ${
                        isDark ? "bg-slate-900/40 border-slate-800" : "bg-teal-50/30 border-teal-200/70"
                      }`}
                    >
                      <span className="font-bold text-base text-amber-600 dark:text-amber-400">{wm.word}</span>
                      <span className={`text-sm text-right ${isDark ? "text-slate-200" : "text-slate-700"}`}>{wm.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===================================================================== */}
            {/* SUB-TAB 6: BOARD RTC & Q&A */}
            {/* ===================================================================== */}
            {activeLitSubTab === "boardqa" && (
              <div className="mt-5 space-y-5">
                <div className="space-y-4">
                  {currentChapter.boardQAs.map((qa, qidx) => (
                    <div
                      key={qa.id}
                      className={`p-6 rounded-2xl border ${
                        isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 border-b pb-2.5 border-amber-500/20">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-600 border border-rose-500/20 font-mono">
                          प्रश्न {qidx + 1} • {qa.marks} अंक ({qa.wordLimit})
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium font-mono">
                          CBSE संभावित प्रश्न
                        </span>
                      </div>

                      <h4 className="text-lg font-bold mt-3 text-slate-900 dark:text-white leading-relaxed">
                        {qa.question}
                      </h4>

                      <div className="mt-3 space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                          आदर्श उत्तर (Model Board Answer):
                        </div>
                        <p className={`text-base leading-[2.1] ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {qa.modelAnswer}
                        </p>
                      </div>

                      {/* Key Points */}
                      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5 font-mono">
                          मुख्य अंक-दायी बिंदु (Key Marking Points):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {qa.keyPoints.map((kp, kidx) => (
                            <span key={kidx} className="text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-medium">
                              ✓ {kp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Examiner Tip */}
                      <div className={`mt-3.5 p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                        isDark ? "bg-rose-950/20 border-rose-900/40 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-800"
                      }`}>
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                        <div>
                          <strong>परीक्षक की गुप्त टिप (Examiner Secret Tip):</strong> {qa.examinerTip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: GRAMMAR MASTER HUB (EXPLAINED FROM ROOT BASICS) */}
      {/* ========================================================================= */}
      {activeTab === "grammar" && (
        <div className="space-y-6">
          {/* 4 Major Grammar Topics Pill Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HINDI_GRAMMAR_TOPICS.map((topic) => {
              const isSelected = topic.id === currentGrammarTopic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => handleGrammarTopicChange(topic.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? isDark
                        ? "bg-purple-950/60 border-purple-500 text-white shadow-md ring-1 ring-purple-500/40"
                        : "bg-purple-600 border-purple-600 text-white shadow-md"
                      : isDark
                        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        : "bg-white border-slate-200 text-slate-700 hover:border-purple-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full font-mono ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : isDark ? "bg-slate-800 text-purple-400" : "bg-purple-100 text-purple-700"
                    }`}>
                      {topic.marks} अंक (Marks)
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{topic.title}</h4>
                  <span className="text-[11px] opacity-75 block mt-0.5 font-mono">{topic.englishTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Grammar Mode Navigation */}
          <div className={`p-6 sm:p-7 rounded-3xl border ${
            isDark ? "bg-[#0c121e]/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-purple-500/20">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <span>{currentGrammarTopic.title} ({currentGrammarTopic.englishTitle})</span>
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  सीबीएसई बोर्ड परीक्षा 2026-27: 5 बहुविकल्पीय प्रश्न पूछे जाएँगे, किन्हीं 4 के उत्तर देने होंगे (4 अंक)।
                </p>
              </div>

              {/* Sub-modes for Grammar */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setGrammarSubTab("root_basics")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    grammarSubTab === "root_basics"
                      ? "bg-purple-600 text-white shadow-xs"
                      : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  📚 मूल संकल्पना व भेद (Root Concepts & Rules)
                </button>

                {currentGrammarTopic.id === "muhavare" && (
                  <button
                    onClick={() => setGrammarSubTab("textbook_muhavare")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      grammarSubTab === "textbook_muhavare"
                        ? "bg-amber-600 text-white shadow-xs"
                        : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    🔍 एनसीईआरटी पाठ्यपुस्तक मुहावरे बैंक ({TEXTBOOK_MUHAVARE_LIST.length})
                  </button>
                )}

                <button
                  onClick={() => setGrammarSubTab("practice_quiz")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    grammarSubTab === "practice_quiz"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  ✍️ बोर्ड परीक्षा अभ्यास प्रश्न ({currentGrammarTopic.questions.length})
                </button>
              </div>
            </div>

            {/* MODE 1: ROOT CONCEPTS & BASICS */}
            {grammarSubTab === "root_basics" && (
              <div className="mt-6 space-y-6">
                {/* Foundational Definition Card */}
                <div className={`p-6 rounded-2xl border ${
                  isDark ? "bg-purple-950/20 border-purple-800/30" : "bg-purple-50/60 border-purple-200"
                }`}>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 block mb-2">
                    आधारभूत परिभाषा एवं संकल्पना (Foundational Definition):
                  </span>
                  <p className={`text-base sm:text-lg leading-[2.1] font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {currentGrammarTopic.definition}
                  </p>
                </div>

                {/* Specific Root Concept Deep Dives */}
                {currentGrammarTopic.id === "padbandh" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      शब्द, पद और पदबंध में मूल अंतर (Word vs Pad vs Padbandh):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-rose-500 block mb-1">1. शब्द (Word):</span>
                        <p>वर्णों का स्वतंत्र, सार्थक समूह जो शब्दकोश में उपस्थित होता है (उदा. 'कमल', 'मजदूर')। वाक्य के बाहर इसका स्वतंत्र अस्तित्व है।</p>
                      </div>
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-purple-500 block mb-1">2. पद (Pad):</span>
                        <p>जब वही शब्द वाक्य में प्रयुक्त होकर व्याकरणिक नियमों (लिंग, वचन, कारक, काल) में बंध जाता है, तब वह 'पद' कहलाता है।</p>
                      </div>
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-emerald-500 block mb-1">3. पदबंध (Phrase):</span>
                        <p>जब कई पद मिलकर एक ही व्याकरणिक इकाई (शीर्ष पद के रूप में) का कार्य करते हैं, तो उस पद-समूह को 'पदबंध' कहते हैं।</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentGrammarTopic.id === "vakya" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      वाक्य के अनिवार्य अंग एवं रूपांतरण सूत्र:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-rose-500 block mb-1">उद्देश्य (Subject) व विधेय (Predicate):</span>
                        <p>जिसके विषय में कुछ कहा जाए वह <strong>उद्देश्य</strong> (कर्ता) है; और उद्देश्य के विषय में जो कुछ कहा जाए वह <strong>विधेय</strong> (क्रिया + कर्म) है।</p>
                      </div>
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-emerald-500 block mb-1">आश्रित उपवाक्य के 3 भेद पहचान:</span>
                        <p>• <strong>संज्ञा उपवाक्य:</strong> पहचान = 'कि'।<br />• <strong>विशेषण उपवाक्य:</strong> पहचान = 'जो, जिसे, जिसने'।<br />• <strong>क्रिया-विशेषण उपवाक्य:</strong> पहचान = 'जब-तब, जहाँ-वहाँ, जैसे-वैसे, क्योंकि, यदि-तो' आदि।</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentGrammarTopic.id === "samas" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      सीबीएसई बोर्ड परीक्षा: कर्मधारय बनाम बहुव्रीहि का निर्णायक अंतर:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-purple-500 block mb-1">पीतांबर:</span>
                        <p>• यदि विग्रह है: <strong>'पीला है जो अंबर'</strong> ➔ कर्मधारय समास (विशेषण-विशेष्य)।<br />• यदि विग्रह है: <strong>'पीले हैं अंबर जिसके अर्थात श्रीकृष्ण'</strong> ➔ बहुव्रीहि समास (अन्य पद प्रधान)।</p>
                      </div>
                      <div className={`p-4 rounded-xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200"}`}>
                        <span className="font-bold text-purple-500 block mb-1">दशानन / त्रिनेत्र:</span>
                        <p>• <strong>'दस आननों का समाहार'</strong> ➔ द्विगु समास (संख्यावाचक समूह)।<br />• <strong>'दस हैं आनन जिसके अर्थात रावण'</strong> ➔ बहुव्रीहि समास (विशिष्ट व्यक्ति)।<br />• <em>नियम: विग्रह के अनुसार ही समास का नाम लिखा जाता है।</em></p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Detailed Types & Examples */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b pb-2 border-slate-200 dark:border-slate-800">
                    विस्तृत भेद, परिभाषा एवं उदाहरण:
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {currentGrammarTopic.types.map((tp, tidx) => (
                      <div
                        key={tidx}
                        className={`p-5 sm:p-6 rounded-2xl border ${
                          isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-2.5 border-slate-200 dark:border-slate-800 mb-3">
                          <h5 className="text-base font-bold text-purple-600 dark:text-purple-400">
                            {tp.name}
                          </h5>
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">
                            पहचान ट्रिक: {tp.identifyingClue}
                          </span>
                        </div>
                        <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {tp.description}
                        </p>
                        <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            बोर्ड मानक उदाहरण (Board Standard Examples):
                          </span>
                          <ul className="space-y-1">
                            {tp.examples.map((ex, eidx) => (
                              <li key={eidx} className="text-xs sm:text-sm flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Golden Rules & Common Mistakes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-5 rounded-2xl border ${
                    isDark ? "bg-amber-950/20 border-amber-900/30 text-amber-200" : "bg-amber-50/70 border-amber-200 text-amber-900"
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-2.5">
                      ⭐ 100% अंक प्राप्ति हेतु स्वर्णिम नियम (Golden Rules):
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {currentGrammarTopic.goldenRules.map((rule, ridx) => (
                        <li key={ridx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    isDark ? "bg-rose-950/20 border-rose-900/30 text-rose-200" : "bg-rose-50/70 border-rose-200 text-rose-900"
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-2.5">
                      ⚠️ सामान्य भ्रांतियाँ व बोर्ड चेतावनी (Common Mistakes):
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {currentGrammarTopic.commonMistakes.map((mistake, midx) => (
                        <li key={midx} className="flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* MODE 2: TEXTBOOK MUHAVARE EXPLORER */}
            {grammarSubTab === "textbook_muhavare" && currentGrammarTopic.id === "muhavare" && (
              <div className="mt-6 space-y-5">
                {/* Chapter Filters for Muhavare */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    <button
                      onClick={() => setSelectedMuhavareChapter("all")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                        selectedMuhavareChapter === "all"
                          ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                          : isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      सभी पाठ ({TEXTBOOK_MUHAVARE_LIST.length})
                    </button>
                    {muhavareChaptersList.map((chName) => (
                      <button
                        key={chName}
                        onClick={() => setSelectedMuhavareChapter(chName)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                          selectedMuhavareChapter === chName
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {chName}
                      </button>
                    ))}
                  </div>

                  {/* Search bar inside Muhavare */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="मुहावरा या अर्थ खोजें..."
                      value={muhavareSearch}
                      onChange={(e) => setMuhavareSearch(e.target.value)}
                      className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none ${
                        isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>
                </div>

                {/* Muhavare Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredMuhavare.map((m, midx) => (
                    <div
                      key={midx}
                      className={`p-5 sm:p-6 rounded-2xl border space-y-3 ${
                        isDark ? "bg-slate-900/60 border-slate-800 hover:border-amber-500/40" : "bg-white border-slate-200 hover:border-amber-300 shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b pb-2.5 border-slate-200 dark:border-slate-800">
                        <h4 className="text-lg font-bold text-amber-600 dark:text-amber-400">
                          {m.idiom}
                        </h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          {m.sourceChapter}
                        </span>
                      </div>

                      <div className="text-sm">
                        <span className="font-mono text-xs font-bold text-slate-400 block mb-0.5">अर्थ:</span>
                        <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>{m.meaning}</span>
                      </div>

                      {m.exampleSentence && (
                        <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                          isDark ? "bg-black/30 border-white/5 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}>
                          <span className="text-amber-500 font-bold block mb-0.5">एनसीईआरटी पाठ्यपुस्तक संदर्भ:</span>
                          "{m.exampleSentence}"
                        </div>
                      )}

                      {m.boardExamUsage && (
                        <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                          isDark ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-200" : "bg-emerald-50/60 border-emerald-200 text-emerald-900"
                        }`}>
                          <span className="text-emerald-500 font-bold block mb-0.5">सीबीएसई बोर्ड मानक वाक्य-प्रयोग:</span>
                          "{m.boardExamUsage}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODE 3: PRACTICE QUIZ (16 MARKS MCQS) */}
            {grammarSubTab === "practice_quiz" && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-emerald-500/20">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
                    बोर्ड परीक्षा पैटर्न MCQs ({currentGrammarTopic.questions.length} प्रश्न):
                  </span>
                  <button
                    onClick={() => {
                      setGrammarUserAnswers({});
                      setShowGrammarExplanations({});
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> पुनः हल करें (Reset)
                  </button>
                </div>

                <div className="space-y-4">
                  {currentGrammarTopic.questions.map((q, qidx) => {
                    const userAnswer = grammarUserAnswers[q.id];
                    const isAnswered = userAnswer !== undefined;
                    const isCorrect = isAnswered && userAnswer === q.correctIndex;
                    const showExpl = showGrammarExplanations[q.id];

                    return (
                      <div
                        key={q.id}
                        className={`p-5 sm:p-6 rounded-2xl border ${
                          isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 border border-purple-500/20">
                            प्रश्न {qidx + 1} • {q.difficulty.toUpperCase()}
                          </span>
                          {isAnswered && (
                            <span className={`text-xs font-bold font-mono ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}>
                              {isCorrect ? "✓ सही उत्तर (+1)" : "✗ गलत उत्तर (0)"}
                            </span>
                          )}
                        </div>

                        <h5 className="text-base font-bold text-slate-900 dark:text-white leading-relaxed mb-4">
                          {q.question}
                        </h5>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, oidx) => {
                            const isThisSelected = userAnswer === oidx;
                            const isThisCorrect = oidx === q.correctIndex;

                            let btnStyle = isDark 
                              ? "bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-800" 
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";

                            if (isAnswered) {
                              if (isThisCorrect) {
                                btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold";
                              } else if (isThisSelected && !isCorrect) {
                                btnStyle = "bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-bold";
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
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                              >
                                <span>({String.fromCharCode(65 + oidx)}) {opt}</span>
                                {isAnswered && isThisCorrect && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                                {isAnswered && isThisSelected && !isCorrect && <X className="w-4 h-4 text-rose-500 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-bold ${isCorrect ? "text-emerald-500" : "text-rose-500"}`}>
                                {isCorrect ? "बधाई! आपका उत्तर पूर्णतः सही है।" : `सही विकल्प: (${String.fromCharCode(65 + q.correctIndex)})`}
                              </span>
                              <button
                                onClick={() => setShowGrammarExplanations(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                                className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                {showExpl ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                {showExpl ? "व्याख्या छिपाएँ" : "व्याख्या देखें"}
                              </button>
                            </div>

                            {showExpl && (
                              <div className="mt-2.5 text-xs sm:text-sm space-y-1.5 leading-relaxed text-slate-600 dark:text-slate-300">
                                <p>{q.explanation}</p>
                                {q.trickOrRule && (
                                  <p className="text-amber-600 dark:text-amber-400 font-medium">
                                    💡 व्याकरणिक ट्रिक: {q.trickOrRule}
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
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: CREATIVE WRITING STUDIO (22 MARKS) */}
      {/* ========================================================================= */}
      {activeTab === "writing" && (
        <div className="space-y-6">
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
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
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
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
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
                  <span className={`text-[11px] block mt-0.5 font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {sec.wordLimit}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Writing Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-5 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-emerald-100 shadow-sm"
              }`}>
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  आधिकारिक सीबीएसई प्रारूप (Official Format)
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
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-mono">
                          {fg.markWeight}
                        </span>
                      </div>
                      <p className={isDark ? "text-slate-300" : "text-slate-600"}>{fg.description}</p>
                      <span className="text-[10px] text-slate-400 italic block mt-1">स्थान: {fg.placement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-br ${
                isDark ? "from-amber-950/20 to-slate-900/80" : "from-amber-50 to-orange-50/30"
              }`}>
                <h4 className="text-sm font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2.5 font-mono">
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

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {currentWritingSection.samples.map((s) => {
                  const isSel = s.id === currentWritingSample.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedWritingSampleId(s.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium whitespace-nowrap transition-all cursor-pointer ${
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

              <div className={`p-6 rounded-2xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-emerald-200 shadow-sm"
              }`}>
                <div className="border-b pb-3 border-emerald-500/20 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-mono">
                      आदर्श बोर्ड उत्तर • {currentWritingSample.wordCount} शब्द
                    </span>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-medium font-mono">
                      पूरे {currentWritingSection.marks}/{currentWritingSection.marks} अंक मानक
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-2 text-slate-900 dark:text-white">
                    {currentWritingSample.title}
                  </h3>
                </div>

                <div className={`p-5 rounded-xl border text-sm sm:text-base leading-relaxed font-serif whitespace-pre-line ${
                  isDark ? "bg-slate-800/40 border-slate-700 text-slate-200" : "bg-emerald-50/30 border-emerald-100 text-slate-800"
                }`}>
                  {currentWritingSample.content}
                </div>

                {currentWritingSample.examinerNotes && currentWritingSample.examinerNotes.length > 0 && (
                  <div className={`mt-4 p-3 rounded-xl border text-xs flex items-start gap-2 ${
                    isDark ? "bg-emerald-950/20 border-emerald-900/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-800"
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>परीक्षक की टिप्पणी:</strong> {currentWritingSample.examinerNotes.join(" • ")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: SPELLING TRAPS & COMMON MISTAKES */}
      {/* ========================================================================= */}
      {activeTab === "spelling_traps" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Trap 1: की बनाम कि */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                  1. 'की' बनाम 'कि' का सही प्रयोग
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600 font-mono">
                  1 अंक कटौती
                </span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  • <strong>'कि' (ह्रस्व इ):</strong> यह योजक शब्द (conjunction) है जो दो वाक्यों या उपवाक्यों को जोड़ता है (उदा. उसने कहा <strong>कि</strong> वह कल नहीं आएगा)।
                </p>
                <p>
                  • <strong>'की' (दीर्घ ई):</strong> यह संबंध कारक (राम <strong>की</strong> पुस्तक) अथवा 'करना' क्रिया का भूतकाल रूप है (उसने मेहनत <strong>की</strong>)।
                </p>
              </div>
            </div>

            {/* Trap 2: अनुस्वार बनाम चन्द्रबिन्दु */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between border-b pb-2 border-red-500/20 mb-3">
                <h4 className="font-bold text-base text-rose-600 dark:text-rose-400">
                  2. अनुस्वार (ं) बनाम चन्द्रबिन्दु (ँ)
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600 font-mono">
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600 font-mono">
                  अर्थ परिवर्तन
                </span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <p>उर्दू व फ़ारसी के आगत शब्दों में नुक्ता लगाने से अर्थ पूरी तरह बदल जाता है:</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                    <strong>सज़ा:</strong> दंड | <strong>सजा:</strong> सजाना
                  </div>
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                    <strong>राज़:</strong> रहस्य | <strong>राज:</strong> शासन
                  </div>
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                    <strong>ज़रा:</strong> थोड़ा | <strong>जरा:</strong> बुढ़ापा
                  </div>
                  <div className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                    <strong>फ़न:</strong> कला | <strong>फन:</strong> साँप का सिर
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600 font-mono">
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
  );
}
