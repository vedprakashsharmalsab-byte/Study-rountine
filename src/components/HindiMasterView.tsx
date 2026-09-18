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
  Lightbulb,
  FileText,
  Flame,
  Check,
  X,
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
  RotateCcw,
  Bookmark,
  ExternalLink,
  Copy
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
import {
  HINDI_CORE_SPELLING_RULES,
  TOP_50_HINDI_SPELLING_PAIRS,
  HindiSpellingRule,
  HindiSpellingPair
} from "@/data/hindiSpellingData";

interface HindiMasterViewProps {
  isDark: boolean;
  onJumpToRevision?: (title: string) => void;
  onOpenQuestionBank?: (chapterNo: number) => void;
}

type HindiMainTab = "sparsh_prose" | "sparsh_poetry" | "sanchayan" | "grammar" | "writing" | "spelling_traps";
type LitSubTab = "scene_studio" | "pyq_bank" | "summary_moral" | "characters_dialogues" | "vocab" | "boardqa";

export default function HindiMasterView({ isDark, onJumpToRevision, onOpenQuestionBank }: HindiMasterViewProps) {
  // Main Tab State with LocalStorage Persistence
  const [activeTab, setActiveTab] = useState<HindiMainTab>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_tab");
      if (saved && ["sparsh_prose", "sparsh_poetry", "sanchayan", "grammar", "writing", "spelling_traps"].includes(saved)) {
        return saved as any;
      }
    }
    return "sparsh_prose";
  });

  // Literature selection state
  const [selectedChapterId, setSelectedChapterId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_chapter");
      if (saved && HINDI_LITERATURE_DATA.some(c => c.id === saved)) {
        return saved;
      }
    }
    return "hin_sp_p1";
  });
  const [litSearchQuery, setLitSearchQuery] = useState<string>("");
  const [activeLitSubTab, setActiveLitSubTab] = useState<LitSubTab>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_subtab");
      if (saved && ["scene_studio", "pyq_bank", "summary_moral", "characters_dialogues", "vocab", "boardqa"].includes(saved)) {
        return saved as any;
      }
    }
    return "scene_studio";
  });

  // Focus Stepper States (Zero Endless Scrolling)
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [activePyqIndex, setActivePyqIndex] = useState<number>(0);
  const [activeStanzaIndex, setActiveStanzaIndex] = useState<number>(0);
  const [poetryAnalysisMode, setPoetryAnalysisMode] = useState<"bhavarth" | "shilp">("bhavarth");

  // Grammar selection state
  const [selectedGrammarId, setSelectedGrammarId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_grammar_topic");
      if (saved && HINDI_GRAMMAR_TOPICS.some(t => t.id === saved)) {
        return saved;
      }
    }
    return "padbandh";
  });
  const [grammarSubTab, setGrammarSubTab] = useState<"root_basics" | "textbook_muhavare" | "practice_quiz">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_grammar_subtab");
      if (saved && ["root_basics", "textbook_muhavare", "practice_quiz"].includes(saved)) {
        return saved as any;
      }
    }
    return "root_basics";
  });
  const [selectedMuhavareBook, setSelectedMuhavareBook] = useState<"all" | "स्पर्श भाग 2" | "संचयन भाग 2">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_muhavare_book");
      if (saved && ["all", "स्पर्श भाग 2", "संचयन भाग 2"].includes(saved)) {
        return saved as any;
      }
    }
    return "all";
  });
  const [selectedMuhavareChapter, setSelectedMuhavareChapter] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cbse_last_hindi_muhavare_chapter");
      if (saved) return saved;
    }
    return "all";
  });
  const [grammarUserAnswers, setGrammarUserAnswers] = useState<Record<string, number>>({});
  const [showGrammarExplanations, setShowGrammarExplanations] = useState<Record<string, boolean>>({});
  const [muhavareSearch, setMuhavareSearch] = useState<string>("");

  // Writing selection state
  const [selectedWritingId, setSelectedWritingId] = useState<string>("soochna");
  const [selectedWritingSampleId, setSelectedWritingSampleId] = useState<string>("soochna_agrasen_camp");

  // Spelling Traps state
  const [spellingViewMode, setSpellingViewMode] = useState<"core_rules" | "top_50_words">("core_rules");
  const [activeSpellingRuleId, setActiveSpellingRuleId] = useState<string>("ki_vs_kee");
  const [spellingSearchQuery, setSpellingSearchQuery] = useState<string>("");
  const [selectedSpellingCategory, setSelectedSpellingCategory] = useState<string>("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_hindi_tab", activeTab);
      localStorage.setItem("cbse_last_hindi_chapter", selectedChapterId);
      localStorage.setItem("cbse_last_hindi_subtab", activeLitSubTab);
      localStorage.setItem("cbse_last_grammar_topic", selectedGrammarId);
      localStorage.setItem("cbse_last_hindi_grammar_subtab", grammarSubTab);
      localStorage.setItem("cbse_last_hindi_muhavare_book", selectedMuhavareBook);
      localStorage.setItem("cbse_last_hindi_muhavare_chapter", selectedMuhavareChapter);
    }
  }, [activeTab, selectedChapterId, activeLitSubTab, selectedGrammarId, grammarSubTab, selectedMuhavareBook, selectedMuhavareChapter]);

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

  // Current active chapter
  const currentChapter = useMemo(() => {
    return HINDI_LITERATURE_DATA.find(c => c.id === selectedChapterId) || chaptersForTab[0] || HINDI_LITERATURE_DATA[0];
  }, [selectedChapterId, chaptersForTab]);

  // Filtered chapters by search query
  const filteredChapters = useMemo(() => {
    if (!litSearchQuery.trim()) return chaptersForTab;
    const q = litSearchQuery.toLowerCase().trim();
    return chaptersForTab.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q)
    );
  }, [chaptersForTab, litSearchQuery]);

  // Current active grammar topic
  const currentGrammarTopic = useMemo(() => {
    return HINDI_GRAMMAR_TOPICS.find(t => t.id === selectedGrammarId) || HINDI_GRAMMAR_TOPICS[0];
  }, [selectedGrammarId]);

  // Current active writing section
  const currentWritingSection = useMemo(() => {
    return HINDI_WRITING_SECTIONS.find(s => s.id === selectedWritingId) || HINDI_WRITING_SECTIONS[0];
  }, [selectedWritingId]);

  // Current active writing sample
  const currentWritingSample = useMemo(() => {
    return currentWritingSection.samples.find(s => s.id === selectedWritingSampleId) || currentWritingSection.samples[0];
  }, [currentWritingSection, selectedWritingSampleId]);

  // Filtered Muhavare list
  const filteredMuhavare = useMemo(() => {
    return TEXTBOOK_MUHAVARE_LIST.filter(m => {
      // Book filter
      if (selectedMuhavareBook !== "all" && m.bookName !== selectedMuhavareBook) {
        return false;
      }
      // Chapter filter
      if (selectedMuhavareChapter !== "all" && m.sourceChapter !== selectedMuhavareChapter) {
        return false;
      }
      // Search filter
      if (muhavareSearch.trim()) {
        const q = muhavareSearch.toLowerCase().trim();
        return (
          m.idiom.toLowerCase().includes(q) ||
          m.meaning.toLowerCase().includes(q) ||
          (m.exampleSentence ? m.exampleSentence.toLowerCase().includes(q) : false) ||
          m.sourceChapter.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedMuhavareBook, selectedMuhavareChapter, muhavareSearch]);

  // Unique list of chapters with Muhavare
  const muhavareChaptersList = useMemo(() => {
    const list = selectedMuhavareBook === "all"
      ? TEXTBOOK_MUHAVARE_LIST
      : TEXTBOOK_MUHAVARE_LIST.filter(m => m.bookName === selectedMuhavareBook);
    return Array.from(new Set(list.map(m => m.sourceChapter)));
  }, [selectedMuhavareBook]);

  // Filtered 50 Spelling Pairs
  const filteredSpellingPairs = useMemo(() => {
    return TOP_50_HINDI_SPELLING_PAIRS.filter(p => {
      if (selectedSpellingCategory !== "all" && p.category !== selectedSpellingCategory) {
        return false;
      }
      if (spellingSearchQuery.trim()) {
        const q = spellingSearchQuery.toLowerCase().trim();
        return (
          p.wrong.toLowerCase().includes(q) ||
          p.right.toLowerCase().includes(q) ||
          p.ruleOrTrick.toLowerCase().includes(q) ||
          p.exampleSentence.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedSpellingCategory, spellingSearchQuery]);

  // Active Spelling Rule
  const activeSpellingRule = useMemo(() => {
    return HINDI_CORE_SPELLING_RULES.find(r => r.id === activeSpellingRuleId) || HINDI_CORE_SPELLING_RULES[0];
  }, [activeSpellingRuleId]);

  // Switch tab and sync default chapter
  const handleTabChange = (tab: HindiMainTab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_hindi_tab", tab);
    }
    if (tab === "sparsh_prose") {
      const first = HINDI_LITERATURE_DATA.find(c => c.book === "sparsh_prose");
      if (first) setSelectedChapterId(first.id);
      setActiveLitSubTab("scene_studio");
      setActiveSceneIndex(0);
    } else if (tab === "sparsh_poetry") {
      const first = HINDI_LITERATURE_DATA.find(c => c.book === "sparsh_poetry");
      if (first) setSelectedChapterId(first.id);
      setActiveLitSubTab("scene_studio");
      setActiveStanzaIndex(0);
    } else if (tab === "sanchayan") {
      const first = HINDI_LITERATURE_DATA.find(c => c.book === "sanchayan");
      if (first) setSelectedChapterId(first.id);
      setActiveLitSubTab("scene_studio");
      setActiveSceneIndex(0);
    }
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setActiveSceneIndex(0);
    setActivePyqIndex(0);
    setActiveStanzaIndex(0);
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_hindi_chapter", chapterId);
    }
  };

  const handleSubTabChange = (subTab: LitSubTab) => {
    setActiveLitSubTab(subTab);
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_hindi_subtab", subTab);
    }
  };

  const handleGrammarTopicChange = (topicId: string) => {
    setSelectedGrammarId(topicId);
    if (typeof window !== "undefined") {
      localStorage.setItem("cbse_last_grammar_topic", topicId);
    }
  };

  const isPoetry = currentChapter.book === "sparsh_poetry";

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in text-slate-900 dark:text-slate-100">
      {/* =========================================================================
          1. TOP HERO STUDIO HEADER & MARKS ARCHITECTURE
          ========================================================================= */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        isDark 
          ? "bg-gradient-to-br from-[#180d19] via-[#120f1b] to-[#0a0d16] border-rose-500/25 shadow-[0_8px_32px_rgba(244,63,94,0.12)]" 
          : "bg-gradient-to-br from-rose-50/90 via-amber-50/50 to-white border-rose-200/80 shadow-md"
      }`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-rose-600 text-white shadow-sm flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> CBSE Hindi Course 'B' (Code 085) Focus Studio
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                isDark ? "bg-amber-950/60 text-amber-300 border-amber-500/30" : "bg-amber-100/90 text-amber-950 border-amber-300"
              }`}>
                2026-27 Board Examination Standard
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              हिंदी 'ब' सम्पूर्ण मास्टर स्टूडियो (Hindi Literature & Grammar Master)
            </h1>

            <p className={`text-sm sm:text-base leading-[1.9] ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
              दृश्यकेंद्रित गहन अध्ययन (Scene Steppers), मूल नियमों से व्याकरण विवेचन (Root Grammar), एनसीईआरटी पाठ्यपुस्तक मुहावरे बैंक (195 Idioms), आधिकारिक प्रारूप लेखन एवं 50+ बोर्ड वर्तनी शुद्धि जाल।
            </p>
          </div>

          {/* Official Board Marks Blueprint */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs w-full lg:w-auto">
            <div className={`p-3 rounded-2xl border text-center ${
              isDark ? "bg-slate-900/80 border-slate-700 text-rose-300" : "bg-white border-rose-200 text-rose-900 shadow-xs"
            }`}>
              <span className="block text-[11px] opacity-75 font-sans font-bold">साहित्य</span>
              <span className="text-base font-black text-rose-600 dark:text-rose-400">42 अंक</span>
            </div>
            <div className={`p-3 rounded-2xl border text-center ${
              isDark ? "bg-slate-900/80 border-slate-700 text-amber-300" : "bg-white border-amber-200 text-amber-900 shadow-xs"
            }`}>
              <span className="block text-[11px] opacity-75 font-sans font-bold">व्याकरण</span>
              <span className="text-base font-black text-amber-600 dark:text-amber-400">16 अंक</span>
            </div>
            <div className={`p-3 rounded-2xl border text-center ${
              isDark ? "bg-slate-900/80 border-slate-700 text-emerald-300" : "bg-white border-emerald-200 text-emerald-900 shadow-xs"
            }`}>
              <span className="block text-[11px] opacity-75 font-sans font-bold">रचनात्मक लेखन</span>
              <span className="text-base font-black text-emerald-600 dark:text-emerald-400">22 अंक</span>
            </div>
            <div className={`p-3 rounded-2xl border text-center ${
              isDark ? "bg-slate-900/80 border-slate-700 text-cyan-300" : "bg-white border-cyan-200 text-cyan-900 shadow-xs"
            }`}>
              <span className="block text-[11px] opacity-75 font-sans font-bold">कुल पूर्णांक</span>
              <span className="text-base font-black text-cyan-600 dark:text-cyan-400">80 अंक</span>
            </div>
          </div>
        </div>

        {/* 6 Primary Master Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-1 border-t pt-4 border-dashed border-rose-500/20">
          {[
            { id: "sparsh_prose", icon: BookOpen, title: "Sparsh Prose", sub: "स्पर्श गद्य (6 पाठ)", color: "rose" },
            { id: "sparsh_poetry", icon: Feather, title: "Sparsh Poetry", sub: "स्पर्श काव्य (6 पाठ)", color: "rose" },
            { id: "sanchayan", icon: Layers, title: "Sanchayan", sub: "संचयन पूरक (3 पाठ)", color: "purple" },
            { id: "grammar", icon: Zap, title: "Grammar Hub", sub: "व्याकरण (16 अंक)", color: "amber" },
            { id: "writing", icon: PenTool, title: "Writing Studio", sub: "रचनात्मक लेखन (22 अंक)", color: "emerald" },
            { id: "spelling_traps", icon: ShieldAlert, title: "Spelling Traps", sub: "वर्तनी व अशुद्धि (50+)", color: "red" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as HindiMainTab)}
                className={`flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer min-h-[48px] touch-manipulation active:scale-[0.98] ${
                  isSelected
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 ring-2 ring-white/30 font-black"
                    : isDark 
                      ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-white/10" 
                      : "text-slate-700 bg-white/80 hover:bg-white border border-slate-200 shadow-xs"
                }`}
              >
                <div className={`p-1.5 rounded-xl ${isSelected ? "bg-white/20 text-white" : isDark ? "bg-slate-800 text-rose-400" : "bg-rose-100 text-rose-600"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left leading-snug">
                  <div className="font-bold tracking-tight">{tab.title}</div>
                  <div className={`text-[11px] font-normal font-sans ${isSelected ? "text-white/90" : isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {tab.sub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: LITERATURE TABS (Sparsh Prose, Sparsh Poetry, Sanchayan)
          ========================================================================= */}
      {(activeTab === "sparsh_prose" || activeTab === "sparsh_poetry" || activeTab === "sanchayan") && (
        <div className="space-y-6">
          {/* Chapter Shelf & Quick Search */}
          <div className={`p-5 sm:p-6 rounded-3xl border ${
            isDark ? "bg-[#0d121f] border-white/10 shadow-lg" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> 
                  {activeTab === "sparsh_prose" ? "स्पर्श गद्य पाठ चयन" : activeTab === "sparsh_poetry" ? "स्पर्श काव्य पाठ चयन" : "संचयन पूरक पाठ चयन"}:
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {chaptersForTab.length} पाठ उपलब्ध
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="पाठ अथवा रचयिता खोजें..."
                  value={litSearchQuery}
                  onChange={(e) => setLitSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-3.5 py-2 rounded-xl text-sm border focus:outline-none transition-all ${
                    isDark ? "bg-black/50 border-white/15 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>
            </div>

            {/* Horizontal Chapter Quick Shelf */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2">
              {filteredChapters.map((ch, idx) => {
                const isSelected = ch.id === currentChapter.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterSelect(ch.id)}
                    className={`p-3 rounded-2xl border text-left transition-all shrink-0 w-64 sm:w-72 cursor-pointer touch-manipulation active:scale-[0.98] ${
                      isSelected
                        ? isDark
                          ? "bg-rose-950/60 border-rose-500 text-white shadow-md shadow-rose-950/50 ring-1 ring-rose-500/50"
                          : "bg-gradient-to-br from-rose-50 to-amber-50/50 border-rose-400 text-slate-950 shadow-md ring-1 ring-rose-300"
                        : isDark
                          ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50"
                          : "bg-slate-50 border-slate-200 text-slate-800 hover:border-rose-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-rose-600 text-white"
                          : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-700"
                      }`}>
                        पाठ {idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {ch.genre}
                      </span>
                    </div>
                    <div className="font-bold text-sm sm:text-base leading-snug line-clamp-1">
                      {ch.title}
                    </div>
                    <div className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? "text-rose-700 dark:text-rose-300 font-medium" : "text-slate-500"}`}>
                      {ch.author}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Chapter Studio Stage */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            isDark ? "bg-[#0b101c] border-white/10 shadow-xl" : "bg-white border-rose-200/80 shadow-md"
          }`}>
            {/* Chapter Header Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6 border-rose-500/20">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 font-mono">
                    {currentChapter.book === "sparsh_prose" ? "Sparsh Prose" : currentChapter.book === "sparsh_poetry" ? "Sparsh Poetry" : "Sanchayan"} • {currentChapter.genre}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    🎯 बोर्ड परीक्षा 2026 में सम्मिलित
                  </span>
                  <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    रचयिता / लेखक: <strong className={isDark ? "text-slate-200" : "text-slate-900"}>{currentChapter.author}</strong>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                  {currentChapter.title}
                </h2>

                <p className="text-sm sm:text-base italic text-amber-700 dark:text-amber-300 font-medium">
                  "{currentChapter.tagline}"
                </p>
              </div>

              {onOpenQuestionBank && (
                <button
                  onClick={() => onOpenQuestionBank(1)}
                  className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white shadow-md hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2 cursor-pointer touch-manipulation active:scale-95 shrink-0 self-start lg:self-center"
                >
                  <Zap className="w-4 h-4" />
                  <span>प्रश्न बैंक में अभ्यास करें (Chapter Practice)</span>
                </button>
              )}
            </div>

            {/* Mode Steppers Navigation Bar */}
            <div className="flex items-center gap-2 mt-5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => handleSubTabChange("scene_studio")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                  activeLitSubTab === "scene_studio"
                    ? "bg-rose-600 text-white shadow-md ring-1 ring-white/20"
                    : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {isPoetry ? <Feather className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
                <span>{isPoetry ? `📜 पद व काव्यांश स्टूडियो (${currentChapter.stanzas?.length || 0})` : `📖 दृश्य-वार कथा स्टूडियो (${currentChapter.deepSceneBreakdown?.length || 0})`}</span>
              </button>

              <button
                onClick={() => handleSubTabChange("pyq_bank")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                  activeLitSubTab === "pyq_bank"
                    ? "bg-amber-600 text-white shadow-md ring-1 ring-white/20"
                    : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <Award className="w-4 h-4" />
                <span>🎯 बोर्ड PYQ बैंक 2018–2025 ({currentChapter.pyqTrends?.length || 0})</span>
              </button>

              <button
                onClick={() => handleSubTabChange("summary_moral")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                  activeLitSubTab === "summary_moral"
                    ? "bg-purple-600 text-white shadow-md ring-1 ring-white/20"
                    : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>💡 केंद्रीय दर्शन व सारांश</span>
              </button>

              {((currentChapter.characters && currentChapter.characters.length > 0) || (currentChapter.keyDialogues && currentChapter.keyDialogues.length > 0)) && (
                <button
                  onClick={() => handleSubTabChange("characters_dialogues")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                    activeLitSubTab === "characters_dialogues"
                      ? "bg-indigo-600 text-white shadow-md ring-1 ring-white/20"
                      : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>👥 पात्र व संवाद ({currentChapter.characters?.length || 0})</span>
                </button>
              )}

              <button
                onClick={() => handleSubTabChange("vocab")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                  activeLitSubTab === "vocab"
                    ? "bg-teal-600 text-white shadow-md ring-1 ring-white/20"
                    : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>🔤 कठिन शब्दार्थ ({currentChapter.wordMeanings.length})</span>
              </button>

              <button
                onClick={() => handleSubTabChange("boardqa")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap min-h-[40px] ${
                  activeLitSubTab === "boardqa"
                    ? "bg-emerald-600 text-white shadow-md ring-1 ring-white/20"
                    : isDark ? "text-slate-300 bg-slate-900/60 hover:bg-slate-800" : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>📝 बोर्ड RTC व Q&A</span>
              </button>
            </div>

            {/* SUB-TAB 1: SCENE STUDIO / STANZA STUDIO */}
            {activeLitSubTab === "scene_studio" && (
              <div className="mt-6 space-y-6">
                {/* A. POETRY STANZA STEPPER */}
                {isPoetry && currentChapter.stanzas && currentChapter.stanzas.length > 0 && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1">
                      <div className="flex items-center gap-2">
                        {currentChapter.stanzas.map((st, sidx) => {
                          const isSel = sidx === activeStanzaIndex;
                          return (
                            <button
                              key={sidx}
                              onClick={() => setActiveStanzaIndex(sidx)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                                  : isDark ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                              }`}
                            >
                              <span>पद / साखी {sidx + 1}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          disabled={activeStanzaIndex === 0}
                          onClick={() => setActiveStanzaIndex(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          <ChevronLeft className="w-4 h-4 inline" /> पिछला
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-rose-500">
                          {activeStanzaIndex + 1} / {currentChapter.stanzas.length}
                        </span>
                        <button
                          disabled={activeStanzaIndex === currentChapter.stanzas.length - 1}
                          onClick={() => setActiveStanzaIndex(prev => Math.min(currentChapter.stanzas!.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          अगला <ChevronRight className="w-4 h-4 inline" />
                        </button>
                      </div>
                    </div>

                    {/* Stanza Card */}
                    {(() => {
                      const activeStanza = currentChapter.stanzas[activeStanzaIndex] || currentChapter.stanzas[0];
                      return (
                        <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                          isDark ? "bg-slate-900/80 border-slate-800 shadow-md" : "bg-gradient-to-br from-amber-50/70 via-white to-rose-50/40 border-amber-200 shadow-sm"
                        }`}>
                          {/* Calligraphy Box */}
                          <div className={`p-6 sm:p-8 rounded-2xl border ${
                            isDark ? "bg-black/50 border-amber-500/25" : "bg-amber-100/60 border-amber-300/80"
                          }`}>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                              <Quote className="w-4 h-4" /> मूल काव्यांश (Verse {activeStanzaIndex + 1}):
                            </div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold leading-[2.3] tracking-wide text-amber-950 dark:text-amber-100 whitespace-pre-line text-center">
                              {activeStanza.originalLines.join("\n")}
                            </p>
                          </div>

                          {/* Switcher: Meaning vs Shilp */}
                          <div className="flex items-center gap-2 border-b pb-3 border-slate-200 dark:border-slate-800">
                            <button
                              onClick={() => setPoetryAnalysisMode("bhavarth")}
                              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                poetryAnalysisMode === "bhavarth"
                                  ? "bg-rose-600 text-white shadow-xs"
                                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              📖 विस्तृत सरल भावार्थ (Line-by-Line Meaning)
                            </button>
                            <button
                              onClick={() => setPoetryAnalysisMode("shilp")}
                              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                poetryAnalysisMode === "shilp"
                                  ? "bg-purple-600 text-white shadow-xs"
                                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              🎨 शिल्प सौंदर्य, अलंकार व भाषा-शैली (Poetic Art)
                            </button>
                          </div>

                          {poetryAnalysisMode === "bhavarth" ? (
                            <div className="space-y-3">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 font-mono">
                                सरल व्याख्या व विस्तृत भावार्थ:
                              </h4>
                              <p className="text-base sm:text-lg leading-[2.2] font-serif text-slate-850 dark:text-slate-100">
                                {activeStanza.bhavarth}
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono">
                                काव्य-सौंदर्य, अलंकार, भाषा व विशेष बिंदु:
                              </h4>
                              <div className="space-y-2.5">
                                {activeStanza.vishesh.map((v, vidx) => (
                                  <div
                                    key={vidx}
                                    className={`p-4 rounded-xl border flex items-start gap-3 ${
                                      isDark ? "bg-slate-900/60 border-slate-800 text-slate-200" : "bg-purple-50/50 border-purple-200 text-purple-950"
                                    }`}
                                  >
                                    <Sparkles className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
                                    <span className="text-sm sm:text-base leading-[1.9] font-medium">{v}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* B. PROSE SCENE STEPPER */}
                {!isPoetry && currentChapter.deepSceneBreakdown && currentChapter.deepSceneBreakdown.length > 0 && (
                  <div className="space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100/80 dark:bg-slate-900/80 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                        {currentChapter.deepSceneBreakdown.map((sec, sidx) => {
                          const isSel = sidx === activeSceneIndex;
                          return (
                            <button
                              key={sidx}
                              onClick={() => setActiveSceneIndex(sidx)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                                isSel
                                  ? "bg-rose-600 text-white border-rose-600 shadow-sm ring-1 ring-white/20"
                                  : isDark ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                                isSel ? "bg-white/20 text-white" : "bg-rose-500/15 text-rose-600"
                              }`}>
                                {sidx + 1}
                              </span>
                              <span className="max-w-[160px] truncate">{sec.sceneTitle}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                        <button
                          disabled={activeSceneIndex === 0}
                          onClick={() => setActiveSceneIndex(prev => Math.max(0, prev - 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" /> पिछला
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-rose-500">
                          {activeSceneIndex + 1} / {currentChapter.deepSceneBreakdown.length}
                        </span>
                        <button
                          disabled={activeSceneIndex === currentChapter.deepSceneBreakdown.length - 1}
                          onClick={() => setActiveSceneIndex(prev => Math.min(currentChapter.deepSceneBreakdown!.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                        >
                          अगला <ChevronRight className="w-4 h-4" />
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
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 border-rose-500/20">
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-mono font-black text-xs sm:text-sm shadow-xs">
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

                          <div className={`p-6 sm:p-7 rounded-2xl border ${
                            isDark ? "bg-black/30 border-white/5" : "bg-slate-50/90 border-slate-200"
                          }`}>
                            <p className="text-base sm:text-lg lg:text-xl font-normal leading-[2.2] tracking-wide text-justify text-slate-850 dark:text-slate-100">
                              {activeScene.narrativeText}
                            </p>
                          </div>

                          {activeScene.keyInsights && activeScene.keyInsights.length > 0 && (
                            <div className={`p-5 rounded-2xl border ${
                              isDark ? "bg-amber-950/20 border-amber-900/30 text-amber-200" : "bg-amber-50/80 border-amber-200 text-amber-900"
                            }`}>
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5 font-mono">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                <span>बोर्ड परीक्षा हेतु मुख्य मर्म व अंतर्दृष्टि (Thematic Insights):</span>
                              </div>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {activeScene.keyInsights.map((insight, iidx) => (
                                  <li key={iidx} className="text-sm flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="leading-[1.8] font-medium">{insight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                            <button
                              disabled={activeSceneIndex === 0}
                              onClick={() => setActiveSceneIndex(prev => Math.max(0, prev - 1))}
                              className="px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                              <ArrowLeft className="w-4 h-4" /> पिछला दृश्य (Previous)
                            </button>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              दृश्य {activeSceneIndex + 1} / {currentChapter.deepSceneBreakdown.length}
                            </span>
                            <button
                              disabled={activeSceneIndex === currentChapter.deepSceneBreakdown.length - 1}
                              onClick={() => setActiveSceneIndex(prev => Math.min(currentChapter.deepSceneBreakdown!.length - 1, prev + 1))}
                              className="px-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
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

            {/* SUB-TAB 2: CBSE PYQ BANK 2018–2025 */}
            {activeLitSubTab === "pyq_bank" && (
              <div className="mt-6 space-y-5">
                {currentChapter.pyqTrends && currentChapter.pyqTrends.length > 0 ? (
                  <div className="space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100/80 dark:bg-slate-900/80 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                        {currentChapter.pyqTrends.map((pyq, pidx) => {
                          const isSel = pidx === activePyqIndex;
                          return (
                            <button
                              key={pidx}
                              onClick={() => setActivePyqIndex(pidx)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 cursor-pointer ${
                                isSel
                                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                                  : isDark ? "bg-slate-800/80 border-slate-700 text-slate-300" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{pyq.year.replace("CBSE ", "")}</span>
                              <span className="text-[11px] opacity-80">({pyq.marks}M)</span>
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
                          <ChevronLeft className="w-4 h-4 inline" /> पिछला
                        </button>
                        <span className="text-xs font-mono font-bold px-2 text-amber-500">
                          {activePyqIndex + 1} / {currentChapter.pyqTrends.length}
                        </span>
                        <button
                          disabled={activePyqIndex === currentChapter.pyqTrends.length - 1}
                          onClick={() => setActivePyqIndex(prev => Math.min(currentChapter.pyqTrends!.length - 1, prev + 1))}
                          className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          अगला <ChevronRight className="w-4 h-4 inline" />
                        </button>
                      </div>
                    </div>

                    {/* Active PYQ Card */}
                    {(() => {
                      const activePyq = currentChapter.pyqTrends[activePyqIndex] || currentChapter.pyqTrends[0];
                      return (
                        <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                          isDark ? "bg-slate-900/80 border-slate-800 shadow-md" : "bg-white border-slate-200 shadow-sm"
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold px-3 py-1 rounded-lg bg-rose-600 text-white shadow-xs font-mono">
                                {activePyq.year}
                              </span>
                              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-mono">
                                {activePyq.marks} अंक (Marks)
                              </span>
                            </div>
                            <span className="text-xs font-mono text-slate-400">
                              Core Concept: {activePyq.coreConcept}
                            </span>
                          </div>

                          <div>
                            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                              बोर्ड परीक्षा प्रश्न (Exam Question):
                            </span>
                            <h4 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white leading-[1.8]">
                              {activePyq.question}
                            </h4>
                          </div>

                          <div className={`p-6 rounded-2xl border space-y-3 ${
                            isDark ? "bg-black/30 border-white/5" : "bg-amber-50/40 border-amber-200/70"
                          }`}>
                            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                              परीक्षक उत्तर-कुंजी व मूल्यांकन निर्देश (Examiner Rubric & Marking Guide):
                            </span>
                            <p className="text-base sm:text-lg leading-[2.2] text-slate-850 dark:text-slate-100">
                              {activePyq.examinerRubric}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    इस पाठ के लिए विगत वर्ष प्रश्न संकलित किए जा रहे हैं।
                  </div>
                )}
              </div>
            )}

            {/* SUB-TAB 3: SUMMARY & MORAL */}
            {activeLitSubTab === "summary_moral" && (
              <div className="mt-6 space-y-6">
                <div className={`p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br ${
                  isDark ? "from-amber-950/30 via-slate-900/80 to-slate-900/60" : "from-amber-50 via-rose-50/40 to-orange-50/40"
                } shadow-sm`}>
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold uppercase text-xs tracking-wider mb-3 font-mono">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>पाठ का केंद्रीय भाव, जीवन-मूल्य एवं मुख्य संदेश (Core Philosophy)</span>
                  </div>
                  <p className="text-lg sm:text-xl leading-[2.2] font-semibold text-amber-950 dark:text-amber-100">
                    {currentChapter.centralMessage}
                  </p>
                </div>

                <div className={`p-6 sm:p-8 rounded-3xl border ${
                  isDark ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  <h4 className="text-xl font-bold flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <BookOpen className="w-5 h-5" />
                    <span>विस्तृत पाठ सारांश (Comprehensive Chapter Narrative)</span>
                  </h4>
                  <p className="text-base sm:text-lg leading-[2.3] text-justify text-slate-850 dark:text-slate-200">
                    {currentChapter.summary}
                  </p>
                </div>
              </div>
            )}

            {/* SUB-TAB 4: CHARACTERS & DIALOGUES */}
            {activeLitSubTab === "characters_dialogues" && (
              <div className="mt-6 space-y-6">
                {currentChapter.characters && currentChapter.characters.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b pb-2 border-purple-500/20">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        प्रमुख पात्र चरित्र-चित्रण (Character Sketches):
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentChapter.characters.map((ch, cidx) => (
                        <div
                          key={cidx}
                          className={`p-6 rounded-2xl border ${
                            isDark ? "bg-slate-900/60 border-slate-800" : "bg-purple-50/40 border-purple-200 shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between border-b pb-2.5 border-purple-500/20 mb-3">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                              {ch.name}
                            </h4>
                            <span className="text-xs font-mono text-purple-700 dark:text-purple-300 font-bold">
                              {ch.role}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base leading-[1.9] mb-4 text-slate-700 dark:text-slate-300">
                            {ch.description}
                          </p>
                          <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              प्रमुख चारित्रिक विशेषताएँ:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {ch.traits.map((trait, tidx) => (
                                <span key={tidx} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-medium">
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

                {currentChapter.keyDialogues && currentChapter.keyDialogues.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 border-b pb-2 border-rose-500/20">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                        महत्वपूर्ण संवाद व दार्शनिक संदर्भ (Exam-Critical Dialogues):
                      </span>
                    </div>

                    <div className="space-y-3">
                      {currentChapter.keyDialogues.map((dlg, didx) => (
                        <div
                          key={didx}
                          className={`p-6 rounded-2xl border ${
                            isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between border-b pb-2.5 border-slate-200 dark:border-slate-800 mb-2.5">
                            <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                              {dlg.speaker} ➔ {dlg.listener}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              {dlg.context}
                            </span>
                          </div>
                          <p className="text-base sm:text-lg font-serif italic font-semibold leading-[2.1] text-slate-900 dark:text-white my-3">
                            "{dlg.dialogue}"
                          </p>
                          <p className={`text-xs sm:text-sm pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800 ${
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

            {/* SUB-TAB 5: VOCABULARY */}
            {activeLitSubTab === "vocab" && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-teal-500/20">
                  <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>कठिन शब्दार्थ एवं संदर्भ (NCERT Vocabulary)</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {currentChapter.wordMeanings.length} शब्द उपलब्ध
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {currentChapter.wordMeanings.map((wm, widx) => (
                    <div
                      key={widx}
                      className={`p-4 rounded-xl border flex items-start justify-between gap-3 ${
                        isDark ? "bg-slate-900/40 border-slate-800" : "bg-teal-50/30 border-teal-200/70"
                      }`}
                    >
                      <span className="font-bold text-base text-amber-600 dark:text-amber-400">{wm.word}</span>
                      <span className="text-sm sm:text-base text-right font-medium text-slate-700 dark:text-slate-200 leading-[1.8]">{wm.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-TAB 6: BOARD RTC & Q&A */}
            {activeLitSubTab === "boardqa" && (
              <div className="mt-6 space-y-5">
                <div className="space-y-4">
                  {currentChapter.boardQAs.map((qa, qidx) => (
                    <div
                      key={qa.id}
                      className={`p-6 sm:p-7 rounded-2xl border ${
                        isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-amber-200/80 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 border-b pb-3 border-amber-500/20">
                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-rose-500/10 text-rose-600 border border-rose-500/20 font-mono">
                          प्रश्न {qidx + 1} • {qa.marks} अंक ({qa.wordLimit})
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium font-mono">
                          CBSE संभावित प्रश्न
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold mt-3 text-slate-950 dark:text-white leading-[1.8]">
                        {qa.question}
                      </h4>

                      <div className="mt-4 space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                          आदर्श उत्तर (Model Board Answer):
                        </div>
                        <p className="text-base sm:text-lg leading-[2.2] text-slate-800 dark:text-slate-200">
                          {qa.modelAnswer}
                        </p>
                      </div>

                      {/* Key Points */}
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2 font-mono">
                          मुख्य अंक-दायी बिंदु (Key Marking Points):
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {qa.keyPoints.map((kp, kidx) => (
                            <span key={kidx} className="text-xs sm:text-sm px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-medium">
                              ✓ {kp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Examiner Tip */}
                      <div className={`mt-4 p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                        isDark ? "bg-rose-950/20 border-rose-900/40 text-rose-300" : "bg-rose-50 border-rose-200 text-rose-900"
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

      {/* =========================================================================
          SECTION 2: GRAMMAR MASTER HUB (EXPLAINED FROM ROOT BASICS)
          ========================================================================= */}
      {activeTab === "grammar" && (
        <div className="space-y-6">
          {/* 4 Major Grammar Topics Pill Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {HINDI_GRAMMAR_TOPICS.map((topic) => {
              const isSelected = topic.id === currentGrammarTopic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => handleGrammarTopicChange(topic.id)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer min-h-[90px] touch-manipulation active:scale-[0.98] ${
                    isSelected
                      ? isDark
                        ? "bg-purple-950/60 border-purple-500 text-white shadow-lg ring-2 ring-purple-500/40"
                        : "bg-gradient-to-br from-purple-50 to-amber-50 border-purple-500 text-purple-950 shadow-md ring-2 ring-purple-400"
                      : isDark
                        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        : "bg-white border-slate-200 text-slate-700 hover:border-purple-200 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full font-mono ${
                      isSelected
                        ? "bg-purple-600 text-white"
                        : isDark ? "bg-slate-800 text-purple-400" : "bg-purple-100 text-purple-800"
                    }`}>
                      {topic.marks} अंक (Marks)
                    </span>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-950 dark:text-white leading-snug">{topic.title}</h4>
                  <span className="text-xs opacity-75 block mt-0.5 font-mono">{topic.englishTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Grammar Stage */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            isDark ? "bg-[#0c121e]/90 border-white/10 shadow-xl" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5 border-purple-500/20">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white flex items-center gap-2.5">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <span>{currentGrammarTopic.title} ({currentGrammarTopic.englishTitle})</span>
                </h3>
                <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  सीबीएसई बोर्ड परीक्षा 2026-27: 5 बहुविकल्पीय प्रश्न पूछे जाएँगे, किन्हीं 4 के उत्तर देने होंगे (4 अंक)।
                </p>
              </div>

              {/* Sub-modes for Grammar */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setGrammarSubTab("root_basics")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    grammarSubTab === "root_basics"
                      ? "bg-purple-600 text-white shadow-xs"
                      : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  📚 मूल संकल्पना व भेद
                </button>

                {currentGrammarTopic.id === "muhavare" && (
                  <button
                    onClick={() => setGrammarSubTab("textbook_muhavare")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      grammarSubTab === "textbook_muhavare"
                        ? "bg-amber-600 text-white shadow-xs"
                        : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    🔍 मुहावरे बैंक ({TEXTBOOK_MUHAVARE_LIST.length})
                  </button>
                )}

                <button
                  onClick={() => setGrammarSubTab("practice_quiz")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    grammarSubTab === "practice_quiz"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  ✍️ बोर्ड अभ्यास ({currentGrammarTopic.questions.length})
                </button>
              </div>
            </div>

            {/* MODE 1: ROOT CONCEPTS & BASICS */}
            {grammarSubTab === "root_basics" && (
              <div className="mt-6 space-y-6">
                {/* Foundational Definition Card */}
                <div className={`p-6 sm:p-7 rounded-3xl border space-y-4 ${
                  isDark ? "bg-purple-950/20 border-purple-800/30" : "bg-purple-50/60 border-purple-200"
                }`}>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
                      सीबीएसई मानक परिभाषा (Official Board Definition):
                    </span>
                    <p className={`text-base sm:text-lg lg:text-xl leading-[2.1] font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      {currentGrammarTopic.definition}
                    </p>
                  </div>

                  {currentGrammarTopic.classroomDefinition && (
                    <div className={`p-5 rounded-2xl border ${
                      isDark ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-200" : "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                          📓 कक्षा नोटबुक प्रामाणिक परिभाषा (Classroom Verified Note)
                        </span>
                      </div>
                      <p className="text-base sm:text-lg font-bold leading-[2.0]">
                        &quot;{currentGrammarTopic.classroomDefinition}&quot;
                      </p>
                      {currentGrammarTopic.introExample && (
                        <p className="text-sm sm:text-base mt-2.5 opacity-90 italic font-medium">
                          💡 <strong>कक्षा परिचयात्मक उदाहरण:</strong> {currentGrammarTopic.introExample}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Specific Root Concept Deep Dives */}
                {currentGrammarTopic.id === "padbandh" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2 font-mono">
                      <Sparkles className="w-5 h-5" />
                      शब्द, पद और पदबंध में मूल अंतर (Word vs Pad vs Padbandh):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-sm sm:text-base">
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1.5">1. शब्द (Word):</span>
                        <p className="leading-[1.8]">वर्णों का स्वतंत्र, सार्थक समूह जो शब्दकोश में उपस्थित होता है (उदा. 'कमल', 'मजदूर')। वाक्य के बाहर स्वतंत्र है।</p>
                      </div>
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-purple-600 dark:text-purple-400 block mb-1.5">2. पद (Pad):</span>
                        <p className="leading-[1.8]">जब वही शब्द वाक्य में प्रयुक्त होकर व्याकरणिक नियमों (लिंग, वचन, कारक, काल) में बंध जाता है, तब वह 'पद' कहलाता है।</p>
                      </div>
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1.5">3. पदबंध (Phrase):</span>
                        <p className="leading-[1.8]">जब कई पद मिलकर एक ही व्याकरणिक इकाई (शीर्ष पद के रूप में) का कार्य करते हैं, तो उस समूह को 'पदबंध' कहते हैं।</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentGrammarTopic.id === "vakya" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2 font-mono">
                      <Sparkles className="w-5 h-5" />
                      वाक्य के अनिवार्य अंग एवं रूपांतरण सूत्र:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm sm:text-base">
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1.5">उद्देश्य (Subject) व विधेय (Predicate):</span>
                        <p className="leading-[1.8]">जिसके विषय में कुछ कहा जाए वह <strong>उद्देश्य</strong> (कर्ता) है; और उद्देश्य के विषय में जो कुछ कहा जाए वह <strong>विधेय</strong> (क्रिया + कर्म) है।</p>
                      </div>
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1.5">आश्रित उपवाक्य के 3 भेद पहचान:</span>
                        <p className="leading-[1.9]">
                          • <strong>संज्ञा उपवाक्य:</strong> पहचान = 'कि'।<br />
                          • <strong>विशेषण उपवाक्य:</strong> पहचान = 'जो, जिसे, जिसने'।<br />
                          • <strong>क्रिया-विशेषण उपवाक्य:</strong> पहचान = 'जब-तब, जहाँ-वहाँ, जैसे-वैसे, क्योंकि, यदि-तो'।
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentGrammarTopic.id === "samas" && (
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <h4 className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2 font-mono">
                      <Sparkles className="w-5 h-5" />
                      सीबीएसई बोर्ड परीक्षा: कर्मधारय बनाम बहुव्रीहि का निर्णायक अंतर:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm sm:text-base">
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-purple-600 dark:text-purple-400 block mb-1.5">पीतांबर:</span>
                        <p className="leading-[1.9]">
                          • <strong>'पीला है जो अंबर'</strong> ➔ कर्मधारय समास (विशेषण-विशेष्य)।<br />
                          • <strong>'पीले हैं अंबर जिसके अर्थात श्रीकृष्ण'</strong> ➔ बहुव्रीहि समास (अन्य पद प्रधान)।
                        </p>
                      </div>
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white border-slate-200 shadow-xs"}`}>
                        <span className="font-bold text-purple-600 dark:text-purple-400 block mb-1.5">दशानन / त्रिनेत्र:</span>
                        <p className="leading-[1.9]">
                          • <strong>'दस आननों का समाहार'</strong> ➔ द्विगु समास (संख्यावाचक समूह)।<br />
                          • <strong>'दस हैं आनन जिसके अर्थात रावण'</strong> ➔ बहुव्रीहि समास (विशिष्ट व्यक्ति)।<br />
                          • <em>नियम: विग्रह के अनुसार ही समास का नाम लिखा जाता है।</em>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Detailed Types & Classroom Verified Examples */}
                <div className="space-y-5">
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white border-b pb-3 border-slate-200 dark:border-slate-800">
                    विस्तृत भेद, परिभाषा एवं कक्षा उदाहरण:
                  </h4>
                  <div className="grid grid-cols-1 gap-5">
                    {currentGrammarTopic.types.map((tp, tidx) => (
                      <div
                        key={tidx}
                        className={`p-6 sm:p-7 rounded-3xl border ${
                          isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200 dark:border-slate-800 mb-3.5">
                          <h5 className="text-lg font-bold text-purple-700 dark:text-purple-400">
                            {tp.name}
                          </h5>
                          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                            पहचान ट्रिक: {tp.identifyingClue}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base leading-[1.9] mb-4 text-slate-750 dark:text-slate-300">
                          {tp.description}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                            बोर्ड मानक उदाहरण (Standard Examples):
                          </span>
                          <ul className="space-y-1.5">
                            {tp.examples.map((ex, eidx) => (
                              <li key={eidx} className="text-sm sm:text-base flex items-start gap-2.5">
                                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                                <span className="leading-[1.8]">{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Classroom Handwritten Notebook Container */}
                        {tp.classroomExamples && tp.classroomExamples.length > 0 && (
                          <div className={`p-5 rounded-2xl border mt-5 ${
                            isDark ? "bg-emerald-950/25 border-emerald-900/40" : "bg-emerald-50/80 border-emerald-300 shadow-xs"
                          }`}>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-600 text-white flex items-center gap-1.5 shadow-xs">
                                <span>📓</span>
                                <span>कक्षा गृहकार्य व नोटबुक उदाहरण ({tp.classroomExamples.length})</span>
                              </span>
                              {tp.classroomDefinition && (
                                <span className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-semibold">
                                  {tp.classroomDefinition}
                                </span>
                              )}
                            </div>
                            <div className="space-y-3">
                              {tp.classroomExamples.map((cex, cidx) => (
                                <div
                                  key={cidx}
                                  className={`p-4 rounded-xl border text-sm sm:text-base ${
                                    isDark ? "bg-slate-900/90 border-slate-800 text-slate-100" : "bg-white border-emerald-200 text-slate-900 shadow-xs"
                                  }`}
                                >
                                  <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                                    <span className="font-bold text-slate-400 font-mono text-xs">उदा. {cidx + 1}:</span>
                                    <span className="font-semibold leading-[2.0]">
                                      {cex.sentence.split(cex.underlinedPart).map((part, pidx, arr) => (
                                        <span key={pidx}>
                                          {part}
                                          {pidx < arr.length - 1 && (
                                            <span className="underline underline-offset-4 decoration-2 decoration-emerald-500 font-bold bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                                              {cex.underlinedPart}
                                            </span>
                                          )}
                                        </span>
                                      ))}
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-mono font-bold">
                                      शीर्ष पद: {cex.topWord}
                                    </span>
                                    <span className="text-slate-600 dark:text-slate-400 italic">
                                      {cex.explanation}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Golden Rules & Common Mistakes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-amber-950/20 border-amber-900/30 text-amber-200" : "bg-amber-50/80 border-amber-200 text-amber-950"
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-3">
                      ⭐ 100% अंक प्राप्ति हेतु स्वर्णिम नियम (Golden Rules):
                    </span>
                    <ul className="space-y-2.5 text-sm sm:text-base">
                      {currentGrammarTopic.goldenRules.map((rule, ridx) => (
                        <li key={ridx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                          <span className="leading-[1.8]">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-6 rounded-2xl border ${
                    isDark ? "bg-rose-950/20 border-rose-900/30 text-rose-200" : "bg-rose-50/80 border-rose-200 text-rose-950"
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-3">
                      ⚠️ सामान्य भ्रांतियाँ व बोर्ड चेतावनी (Common Mistakes):
                    </span>
                    <ul className="space-y-2.5 text-sm sm:text-base">
                      {currentGrammarTopic.commonMistakes.map((mistake, midx) => (
                        <li key={midx} className="flex items-start gap-2.5">
                          <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                          <span className="leading-[1.8]">{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* MODE 2: TEXTBOOK MUHAVARE EXPLORER (195 IDIOMS) */}
            {grammarSubTab === "textbook_muhavare" && currentGrammarTopic.id === "muhavare" && (
              <div className="mt-6 space-y-5">
                {/* Book & Chapter Dual Filter Bar */}
                <div className={`p-5 rounded-2xl border space-y-3.5 ${
                  isDark ? "bg-slate-900/60 border-white/10" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 p-1 rounded-xl border bg-black/20 border-white/10 w-fit">
                      <button
                        onClick={() => {
                          setSelectedMuhavareBook("all");
                          setSelectedMuhavareChapter("all");
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedMuhavareBook === "all"
                            ? "bg-amber-500 text-slate-950 shadow-xs"
                            : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                        }`}
                      >
                        📚 दोनों पुस्तकें ({TEXTBOOK_MUHAVARE_LIST.length})
                      </button>
                      <button
                        onClick={() => {
                          setSelectedMuhavareBook("स्पर्श भाग 2");
                          setSelectedMuhavareChapter("all");
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedMuhavareBook === "स्पर्श भाग 2"
                            ? "bg-amber-500 text-slate-950 shadow-xs"
                            : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                        }`}
                      >
                        📖 स्पर्श भाग 2 ({TEXTBOOK_MUHAVARE_LIST.filter(m => m.bookName === "स्पर्श भाग 2").length})
                      </button>
                      <button
                        onClick={() => {
                          setSelectedMuhavareBook("संचयन भाग 2");
                          setSelectedMuhavareChapter("all");
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedMuhavareBook === "संचयन भाग 2"
                            ? "bg-purple-500 text-white shadow-xs"
                            : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                        }`}
                      >
                        📘 संचयन भाग 2 ({TEXTBOOK_MUHAVARE_LIST.filter(m => m.bookName === "संचयन भाग 2").length})
                      </button>
                    </div>

                    <div className="relative w-full sm:w-80">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="मुहावरा, अर्थ या वाक्य खोजें..."
                        value={muhavareSearch}
                        onChange={(e) => setMuhavareSearch(e.target.value)}
                        className={`w-full pl-9 pr-3.5 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none ${
                          isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-300 text-slate-900"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Chapter Chips */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => setSelectedMuhavareChapter("all")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                        selectedMuhavareChapter === "all"
                          ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                          : isDark ? "bg-slate-900/80 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                      }`}
                    >
                      सभी पाठ ({
                        selectedMuhavareBook === "all" 
                          ? TEXTBOOK_MUHAVARE_LIST.length 
                          : TEXTBOOK_MUHAVARE_LIST.filter(m => m.bookName === selectedMuhavareBook).length
                      })
                    </button>
                    {muhavareChaptersList.map((chName) => {
                      const count = TEXTBOOK_MUHAVARE_LIST.filter(m => m.sourceChapter === chName).length;
                      return (
                        <button
                          key={chName}
                          onClick={() => setSelectedMuhavareChapter(chName)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border cursor-pointer flex items-center gap-1.5 ${
                            selectedMuhavareChapter === chName
                              ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                              : isDark ? "bg-slate-900/80 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                          }`}
                        >
                          <span>{chName}</span>
                          <span className="text-[10px] opacity-80 font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Muhavare Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredMuhavare.map((m, midx) => (
                    <div
                      key={midx}
                      className={`p-6 rounded-2xl border space-y-3.5 transition-all ${
                        isDark ? "bg-slate-900/70 border-slate-800 hover:border-amber-500/40 shadow-md" : "bg-white border-slate-200 hover:border-amber-400 shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
                            {m.idiom}
                          </h4>
                          {m.bookName && (
                            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md ${
                              m.bookName.includes("स्पर्श") 
                                ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                                : "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30"
                            }`}>
                              {m.bookName}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                          {m.sourceChapter}
                        </span>
                      </div>

                      <div className="text-sm sm:text-base">
                        <span className="font-mono text-xs font-bold text-slate-400 block mb-1">अर्थ (Meaning):</span>
                        <span className="font-bold text-slate-950 dark:text-white leading-[1.8]">{m.meaning}</span>
                      </div>

                      {m.exampleSentence && (
                        <div className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-[1.9] ${
                          isDark ? "bg-black/40 border-white/5 text-slate-300" : "bg-amber-50/60 border-amber-200/60 text-slate-800"
                        }`}>
                          <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1 font-mono">एनसीईआरटी पाठ्यपुस्तक संदर्भ:</span>
                          "{m.exampleSentence}"
                        </div>
                      )}

                      {m.boardExamUsage && (
                        <div className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-[1.9] ${
                          isDark ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-200" : "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                        }`}>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1 font-mono">सीबीएसई बोर्ड मानक वाक्य-प्रयोग:</span>
                          "{m.boardExamUsage}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODE 3: PRACTICE QUIZ (MCQS) */}
            {grammarSubTab === "practice_quiz" && (
              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between border-b pb-3 border-emerald-500/20">
                  <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>सीबीएसई 10वीं बोर्ड मानक बहुविकल्पीय प्रश्न ({currentGrammarTopic.questions.length} प्रश्न)</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    4 अंक बोर्ड वेटेज
                  </span>
                </div>

                <div className="space-y-4">
                  {currentGrammarTopic.questions.map((q, qidx) => {
                    const selected = grammarUserAnswers[q.id];
                    const showExpl = showGrammarExplanations[q.id];
                    const isAnswered = selected !== undefined;
                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-2xl border space-y-4 ${
                          isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-600 border border-purple-500/20 font-mono">
                            प्रश्न {qidx + 1}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {q.trickOrRule || q.difficulty.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-[1.8]">
                          {q.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = selected === optIdx;
                            const isCorrect = optIdx === q.correctIndex;
                            let style = isDark ? "bg-slate-800/80 border-slate-700 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800";
                            if (isAnswered) {
                              if (isCorrect) {
                                style = "bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold";
                              } else if (isChosen) {
                                style = "bg-rose-500/20 border-rose-500 text-rose-700 dark:text-rose-300 font-bold";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                onClick={() => {
                                  setGrammarUserAnswers(prev => ({ ...prev, [q.id]: optIdx }));
                                  setShowGrammarExplanations(prev => ({ ...prev, [q.id]: true }));
                                }}
                                className={`p-3.5 rounded-xl border text-left text-sm sm:text-base font-medium transition-all flex items-center justify-between gap-2 cursor-pointer ${style}`}
                              >
                                <span>{opt}</span>
                                {isAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                                {isAnswered && isChosen && !isCorrect && <X className="w-4 h-4 text-rose-500 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {showExpl && (
                          <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-[1.9] ${
                            isDark ? "bg-purple-950/20 border-purple-900/40 text-purple-200" : "bg-purple-50 border-purple-200 text-purple-950"
                          }`}>
                            <strong className="block mb-1 font-mono">💡 व्याकरणिक व्याख्या:</strong>
                            {q.explanation}
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

      {/* =========================================================================
          SECTION 3: WRITING STUDIO (रचनात्मक लेखन - 22 अंक)
          ========================================================================= */}
      {activeTab === "writing" && (
        <div className="space-y-6">
          {/* 5 Writing Sections Tile Selector */}
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
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer min-h-[85px] touch-manipulation active:scale-[0.98] ${
                    isSelected
                      ? isDark
                        ? "bg-emerald-950/50 border-emerald-500 text-white shadow-lg ring-2 ring-emerald-500/40"
                        : "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-500 text-emerald-950 shadow-md ring-2 ring-emerald-400"
                      : isDark
                        ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        : "bg-white border-slate-200 text-slate-700 hover:border-emerald-200 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${
                      isSelected
                        ? "bg-emerald-600 text-white"
                        : isDark ? "bg-slate-800 text-emerald-400" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {sec.marks} अंक
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white leading-snug">
                    {sec.title}
                  </h4>
                  <span className={`text-xs block mt-0.5 font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {sec.wordLimit}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Writing Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-6 rounded-3xl border ${
                isDark ? "bg-slate-900/80 border-slate-800 shadow-md" : "bg-white border-emerald-200 shadow-sm"
              }`}>
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  आधिकारिक सीबीएसई प्रारूप (Official Format)
                </h3>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"} mb-4`}>
                  अंक वितरण: प्रारूप (Format) + विषय-वस्तु (Content) + भाषा-शुद्धता (Language)
                </p>

                <div className="space-y-3">
                  {currentWritingSection.formatGuidelines.map((fg, fidx) => (
                    <div
                      key={fidx}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm ${
                        isDark ? "bg-slate-800/50 border-slate-700" : "bg-emerald-50/40 border-emerald-200"
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                        <span>{fg.element}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-mono font-bold">
                          {fg.markWeight}
                        </span>
                      </div>
                      <p className={`leading-[1.8] ${isDark ? "text-slate-300" : "text-slate-700"}`}>{fg.description}</p>
                      <span className="text-xs text-slate-400 italic block mt-1">स्थान: {fg.placement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-br ${
                isDark ? "from-amber-950/20 to-slate-900/80" : "from-amber-50 to-orange-50/40"
              }`}>
                <h4 className="text-sm font-bold flex items-center gap-2 text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-3 font-mono">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  पूर्ण 100% अंक पाने के स्वर्णिम नियम
                </h4>
                <ul className="space-y-2.5">
                  {currentWritingSection.goldenTips.map((tip, tidx) => (
                    <li key={tidx} className={`text-xs sm:text-sm flex items-start gap-2.5 leading-[1.8] ${isDark ? "text-slate-200" : "text-slate-800"}`}>
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
                      className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl border font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isSel
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : isDark ? "bg-slate-900 border-slate-800 text-slate-400" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {s.title.split(":")[0]}
                    </button>
                  );
                })}
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl border ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-emerald-200 shadow-sm"
              }`}>
                <div className="border-b pb-4 border-emerald-500/20 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-mono">
                      आदर्श बोर्ड उत्तर • {currentWritingSample.wordCount} शब्द
                    </span>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-bold font-mono">
                      पूरे {currentWritingSection.marks}/{currentWritingSection.marks} अंक मानक
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mt-2.5 text-slate-950 dark:text-white leading-[1.8]">
                    {currentWritingSample.title}
                  </h3>
                </div>

                {/* Dedicated Examination Border Box Format */}
                {currentWritingSection.id === "soochna" ? (
                  <div className={`p-6 rounded-2xl border-2 border-emerald-500/40 shadow-lg ${
                    isDark ? "bg-slate-950/90 text-slate-100" : "bg-white text-slate-900"
                  }`}>
                    <div className="text-center pb-3 border-b border-dashed border-emerald-500/30 mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        📦 सीबीएसई 10वीं बोर्ड मानक: आयताकार सीमा-रेखा (Official Border Box)
                      </span>
                      <span className="text-xs text-slate-400 font-mono">शब्द सीमा: ~50-60 शब्द • 4 अंक</span>
                    </div>
                    <div className="p-5 sm:p-7 rounded-xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 text-base sm:text-lg leading-[2.2] font-serif whitespace-pre-line tracking-wide">
                      {currentWritingSample.content}
                    </div>
                  </div>
                ) : currentWritingSection.id === "vigyapan" ? (
                  <div className={`p-6 rounded-2xl border-2 border-purple-500/40 shadow-lg ${
                    isDark ? "bg-slate-950/90 text-slate-100" : "bg-white text-slate-900"
                  }`}>
                    <div className="text-center pb-3 border-b border-dashed border-purple-500/30 mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        🎨 सीबीएसई 10वीं बोर्ड मानक: विज्ञापन आरेखन बॉक्स (Design Box Frame)
                      </span>
                      <span className="text-xs text-slate-400 font-mono">शब्द सीमा: ~40 शब्द • 3 अंक</span>
                    </div>
                    <div className="p-5 sm:p-7 rounded-xl border border-purple-500/30 bg-purple-50/20 dark:bg-purple-950/20 text-base sm:text-lg leading-[2.2] font-serif whitespace-pre-line tracking-wide">
                      {currentWritingSample.content}
                    </div>
                  </div>
                ) : currentWritingSection.id === "email" ? (
                  <div className={`p-6 rounded-2xl border-2 border-blue-500/40 shadow-lg ${
                    isDark ? "bg-slate-950/90 text-slate-100" : "bg-white text-slate-900"
                  }`}>
                    <div className="text-center pb-3 border-b border-dashed border-blue-500/30 mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        📧 सीबीएसई 10वीं बोर्ड मानक: औपचारिक ई-मेल तालिका (Official Email Box)
                      </span>
                      <span className="text-xs text-slate-400 font-mono">शब्द सीमा: ~80-100 शब्द • 5 अंक</span>
                    </div>
                    <div className="p-5 sm:p-7 rounded-xl border border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 text-base sm:text-lg leading-[2.2] font-serif whitespace-pre-line tracking-wide">
                      {currentWritingSample.content}
                    </div>
                  </div>
                ) : (
                  <div className={`p-6 rounded-2xl border text-base sm:text-lg leading-[2.3] font-serif whitespace-pre-line tracking-wide ${
                    isDark ? "bg-slate-800/40 border-slate-700 text-slate-200" : "bg-emerald-50/30 border-emerald-200 text-slate-800"
                  }`}>
                    {currentWritingSample.content}
                  </div>
                )}

                {currentWritingSample.examinerNotes && currentWritingSample.examinerNotes.length > 0 && (
                  <div className={`mt-5 p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                    isDark ? "bg-emerald-950/20 border-emerald-900/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>परीक्षक की टिप्पणी (Examiner Notes):</strong> {currentWritingSample.examinerNotes.join(" • ")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 4: SPELLING TRAPS & COMMON MISTAKES (50+ BOARD TRAPS)
          ========================================================================= */}
      {activeTab === "spelling_traps" && (
        <div className="space-y-6">
          {/* Top Switcher: 8 Core Rules vs Top 50 Board Words */}
          <div className={`p-5 sm:p-6 rounded-3xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isDark ? "bg-[#0d121f] border-white/10" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-red-500" />
                <span>वर्तनी शुद्धि व बोर्ड परीक्षा अशुद्धि निवारक (Spelling Traps)</span>
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                सीबीएसई बोर्ड परीक्षा में वर्तनी की अशुद्धियों पर प्रत्येक उत्तर में 0.5 से 1 अंक तक की कटौती की जाती है।
              </p>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-2xl border bg-black/20 border-white/10 shrink-0">
              <button
                onClick={() => setSpellingViewMode("core_rules")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  spellingViewMode === "core_rules"
                    ? "bg-rose-600 text-white shadow-xs"
                    : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                }`}
              >
                📜 8 आधारभूत स्वर्णिम नियम
              </button>
              <button
                onClick={() => setSpellingViewMode("top_50_words")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  spellingViewMode === "top_50_words"
                    ? "bg-rose-600 text-white shadow-xs"
                    : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"
                }`}
              >
                🔍 शीर्ष 50 अशुद्ध-शुद्ध शब्द
              </button>
            </div>
          </div>

          {/* VIEW 1: 8 CORE RULES */}
          {spellingViewMode === "core_rules" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Selector: 8 Core Rules */}
              <div className="lg:col-span-5 space-y-2.5">
                {HINDI_CORE_SPELLING_RULES.map((rule, ridx) => {
                  const isSel = rule.id === activeSpellingRule.id;
                  return (
                    <button
                      key={rule.id}
                      onClick={() => setActiveSpellingRuleId(rule.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSel
                          ? isDark
                            ? "bg-rose-950/60 border-rose-500 text-white shadow-md ring-1 ring-rose-500"
                            : "bg-rose-50 border-rose-400 text-rose-950 shadow-sm ring-1 ring-rose-300"
                          : isDark
                            ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-rose-600">
                            नियम {ridx + 1}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-600 border border-red-500/30">
                            {rule.severity}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm sm:text-base leading-snug">
                          {rule.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${isSel ? "text-rose-500" : "text-slate-400"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Card for Active Rule */}
              <div className="lg:col-span-7">
                <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
                  isDark ? "bg-[#0c121e] border-white/10 shadow-xl" : "bg-white border-slate-200 shadow-md"
                }`}>
                  <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-600 text-white">
                        {activeSpellingRule.severity}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        {activeSpellingRule.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                      {activeSpellingRule.title}
                    </h3>
                    <h4 className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber-400 mt-1">
                      {activeSpellingRule.ruleHeading}
                    </h4>
                  </div>

                  <p className="text-base sm:text-lg leading-[2.1] text-slate-800 dark:text-slate-200">
                    {activeSpellingRule.explanation}
                  </p>

                  <div className="space-y-3.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      बोर्ड मानक उदाहरण व वाक्य तुलना:
                    </span>
                    {activeSpellingRule.examples.map((ex, eidx) => (
                      <div
                        key={eidx}
                        className={`p-4 rounded-2xl border space-y-2 ${
                          isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-start gap-2 text-sm sm:text-base">
                          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">✓ शुद्ध:</span>
                          <span className="font-semibold text-emerald-700 dark:text-emerald-300 leading-[1.8]">{ex.correct}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm sm:text-base">
                          <span className="font-mono font-bold text-red-500 shrink-0">✗ अशुद्ध:</span>
                          <span className="line-through text-red-600 dark:text-red-400 leading-[1.8]">{ex.incorrect}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800 italic">
                          💡 {ex.context}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className={`p-5 rounded-2xl border ${
                    isDark ? "bg-amber-950/20 border-amber-900/40 text-amber-200" : "bg-amber-50 border-amber-200 text-amber-950"
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>याद रखने का अचूक सूत्र (Mnemonic Rule):</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold leading-[1.9]">
                      {activeSpellingRule.mnemonicOrTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: TOP 50 BOARD WORDS */}
          {spellingViewMode === "top_50_words" && (
            <div className="space-y-5">
              {/* Filter & Search Bar */}
              <div className={`p-5 rounded-3xl border space-y-3.5 ${
                isDark ? "bg-[#0d121f] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {[
                      { id: "all", label: "सभी 50 शब्द" },
                      { id: "प्रत्यय संबंधी", label: "प्रत्यय संबंधी" },
                      { id: "रेफ़ व 'र' के रूप", label: "रेफ़ व 'र' के रूप" },
                      { id: "ह्रस्व-दीर्घ मात्रा", label: "ह्रस्व-दीर्घ मात्रा" },
                      { id: "संधि व संयुक्त अक्षर", label: "संधि व संयुक्त अक्षर" },
                      { id: "अनुस्वार व चन्द्रबिन्दु", label: "अनुस्वार व चन्द्रबिन्दु" }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedSpellingCategory(cat.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                          selectedSpellingCategory === cat.id
                            ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                            : isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="शब्द अथवा नियम खोजें..."
                      value={spellingSearchQuery}
                      onChange={(e) => setSpellingSearchQuery(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm border focus:outline-none ${
                        isDark ? "bg-black/50 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* 50 Word Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSpellingPairs.map((pair) => (
                  <div
                    key={pair.id}
                    className={`p-5 sm:p-6 rounded-2xl border space-y-3.5 transition-all ${
                      isDark ? "bg-slate-900/60 border-slate-800 hover:border-rose-500/40 shadow-sm" : "bg-white border-slate-200 hover:border-rose-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b pb-2.5 border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{pair.id} • {pair.category}
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                        {pair.boardFrequency}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-100/70 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono font-bold text-red-500 block">❌ अशुद्ध (Wrong):</span>
                        <span className="line-through text-red-600 dark:text-red-400 font-bold text-base sm:text-lg font-mono">
                          {pair.wrong}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      <div className="space-y-0.5 text-right">
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block">✅ शुद्ध (Right):</span>
                        <span className="text-emerald-700 dark:text-emerald-300 font-black text-lg sm:text-xl font-mono">
                          {pair.right}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm leading-[1.8] text-slate-700 dark:text-slate-300">
                      <strong>कारण / नियम:</strong> {pair.ruleOrTrick}
                    </p>

                    <div className={`p-3 rounded-xl border text-xs sm:text-sm leading-[1.8] ${
                      isDark ? "bg-slate-950/50 border-white/5 text-slate-300" : "bg-rose-50/50 border-rose-200/60 text-slate-800"
                    }`}>
                      <span className="font-bold text-rose-600 dark:text-rose-400 block font-mono text-[11px] mb-0.5">वाक्य प्रयोग:</span>
                      "{pair.exampleSentence}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
