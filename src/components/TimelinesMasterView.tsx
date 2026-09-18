"use client";

import React, { useState, useMemo, useEffect } from "react";
import { areteAudio } from "@/lib/audio";
import {
  Calendar,
  Sparkles,
  ArrowLeft,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Zap,
  BookOpen,
  ArrowUpDown,
  BookMarked,
  Table as TableIcon,
  HelpCircle,
  Trophy,
  Flame,
  Check,
  RotateCcw,
  Volume2,
  ExternalLink,
  Info
} from "lucide-react";
import {
  ENRICHED_SST_TIMELINES,
  SST_TIMELINE_ERAS,
  CHRONOLOGY_CHALLENGES,
  EnrichedTimelineEvent,
  TimelineEra,
  ChronologyChallengeSet
} from "../data/sstTimelinesData";
import {
  getToddlerStoryForEvent,
  ToddlerTimelineStory
} from "../data/toddlerTimelineStories";

interface MetroStation {
  id: string;
  year: string;
  emoji: string;
  label: string;
}

const METRO_STATIONS: Record<"ch1_europe" | "ch2_india", MetroStation[]> = {
  ch1_europe: [
    { id: "eu_1789_french_rev", year: "1789", emoji: "👑💥", label: "Bastille Stormed" },
    { id: "eu_1797_napoleon_invades", year: "1797", emoji: "⚔️🐎", label: "Italy Invaded" },
    { id: "eu_1804_civil_code", year: "1804", emoji: "📜✨", label: "Napoleonic Code" },
    { id: "eu_1813_leipzig", year: "1813", emoji: "📦🏃", label: "Battle of Leipzig" },
    { id: "eu_1815_vienna", year: "1815", emoji: "🏰🧓", label: "Congress of Vienna" },
    { id: "eu_1821_greek_war", year: "1821", emoji: "🏛️⛵", label: "Greek War Begins" },
    { id: "eu_1830_july_revolution", year: "1830", emoji: "💥🇫🇷", label: "July Revolution" },
    { id: "eu_1832_constantinople", year: "1832", emoji: "📜🏛️", label: "Constantinople Treaty" },
    { id: "eu_1834_zollverein", year: "1834", emoji: "🪙🚫", label: "Zollverein Formed" },
    { id: "eu_1848_frankfurt", year: "1848", emoji: "👑🏛️", label: "Frankfurt Church" },
    { id: "eu_1861_victor_emmanuel", year: "1861", emoji: "🇮🇹👑", label: "Italy United" },
    { id: "eu_1871_german_empire", year: "1871", emoji: "🪞⚔️", label: "German Empire" }
  ],
  ch2_india: [
    { id: "in_1915_gandhi_returns", year: "1915", emoji: "🚢🇮🇳", label: "Gandhiji Returns" },
    { id: "in_1917_champaran", year: "1917", emoji: "🌿✊", label: "Champaran Satyagraha" },
    { id: "in_1918_kheda", year: "1918", emoji: "🌾🧵", label: "Kheda & Mill Strike" },
    { id: "in_1919_rowlatt_act", year: "1919", emoji: "🚫🕊️", label: "Rowlatt & Jallianwala" },
    { id: "in_1920_ncm_launched", year: "1920", emoji: "🧶🎓", label: "NCM Launched" },
    { id: "in_1922_chauri_chaura", year: "1922", emoji: "🚒🛑", label: "Chauri Chaura" },
    { id: "in_1928_simon_commission", year: "1928", emoji: "📜🚫", label: "Simon Go Back" },
    { id: "in_1929_lahore_purna_swaraj", year: "1929", emoji: "🚩❄️", label: "Purna Swaraj" },
    { id: "in_1930_dandi_march", year: "1930", emoji: "🧂🌊", label: "Dandi Salt March" },
    { id: "in_1931_gandhi_irwin", year: "1931", emoji: "🤝🕊️", label: "Gandhi-Irwin Pact" },
    { id: "in_1932_poona_pact", year: "1932", emoji: "🤝📜", label: "Poona Pact" },
    { id: "in_1942_quit_india", year: "1942", emoji: "✊🇮🇳", label: "Quit India 'Do or Die'" },
    { id: "in_1947_independence", year: "1947", emoji: "🎉🕊️", label: "Independence Dawn" }
  ]
};

interface TimelinesMasterViewProps {
  isDark: boolean;
  initialChapterKey?: "ch1_europe" | "ch2_india" | "all";
  onOpenConceptsHub?: (chapterNo: number) => void;
  onBackToDashboard?: () => void;
  onAddXP?: (amount: number, reason: string) => void;
}

type ViewMode = "storyline" | "chronology_game" | "flashcards" | "cheat_sheet";

export const TimelinesMasterView: React.FC<TimelinesMasterViewProps> = ({
  isDark,
  initialChapterKey = "ch2_india",
  onOpenConceptsHub,
  onBackToDashboard,
  onAddXP
}) => {
  // State: Filters
  const [selectedChapter, setSelectedChapter] = useState<"ch1_europe" | "ch2_india" | "all">(
    initialChapterKey
  );
  const [selectedEra, setSelectedEra] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeMode, setActiveMode] = useState<ViewMode>("storyline");

  // State: Memorized Events (Stored in localStorage)
  const [memorizedEvents, setMemorizedEvents] = useState<Record<string, boolean>>({});

  // State: Expanded Event Details (Storyline)
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  // State: Chronology Challenge Game
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(
    CHRONOLOGY_CHALLENGES[0].id
  );
  const [gameItems, setGameItems] = useState<EnrichedTimelineEvent[]>([]);
  const [gameSubmitted, setGameSubmitted] = useState<boolean>(false);
  const [gameIsCorrect, setGameIsCorrect] = useState<boolean>(false);
  const [gameStreak, setGameStreak] = useState<number>(0);
  const [gameScore, setGameScore] = useState<number>(0);

  // State: Flashcards Mode
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // State: Timeline Teaching Display Mode: 'combo' | 'toddler' | 'deep'
  const [timelineDisplayMode, setTimelineDisplayMode] = useState<"combo" | "toddler" | "deep">("combo");

  // State: Revealed Toddler Mysteries (Why Did This Happen?)
  const [revealedMysteries, setRevealedMysteries] = useState<Record<string, boolean>>({});

  // State: Active Metro Station
  const [activeMetroStation, setActiveMetroStation] = useState<string | null>(null);

  // Metro station fast travel handler
  const handleMetroTravel = (eventId: string) => {
    playSoundEffect("flip");
    setActiveMetroStation(eventId);
    setExpandedEventId(eventId);
    const element = document.getElementById(`timeline-card-${eventId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Active Metro Stations list based on chapter filter
  const activeMetroList = useMemo(() => {
    if (selectedChapter === "ch1_europe") return METRO_STATIONS.ch1_europe;
    if (selectedChapter === "ch2_india") return METRO_STATIONS.ch2_india;
    return [...METRO_STATIONS.ch1_europe, ...METRO_STATIONS.ch2_india];
  }, [selectedChapter]);

  // Sound generator using ARETE audio singleton
  const playSoundEffect = (type: "click" | "success" | "flip" | "error") => {
    if (type === "flip") {
      areteAudio.play("pop");
    } else {
      areteAudio.play(type);
    }
  };

  // Load memorized state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sst_memorized_timelines");
      if (saved) {
        setMemorizedEvents(JSON.parse(saved));
      }
    } catch {}
  }, []);

  // Filter events based on active chapter, era, and search
  const filteredEvents = useMemo(() => {
    return ENRICHED_SST_TIMELINES.filter((item) => {
      // Chapter filter
      if (selectedChapter !== "all" && item.chapterKey !== selectedChapter) {
        return false;
      }
      // Era filter
      if (selectedEra !== "all" && item.era !== selectedEra) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesEvent = item.event.toLowerCase().includes(query);
        const matchesSignificance = item.significance.toLowerCase().includes(query);
        const matchesYear = item.year.toLowerCase().includes(query);
        const matchesPersonality = item.keyPersonalities?.some((p) =>
          p.toLowerCase().includes(query)
        );
        const matchesTrap = item.boardTrap?.toLowerCase().includes(query);
        return (
          matchesEvent ||
          matchesSignificance ||
          matchesYear ||
          matchesPersonality ||
          matchesTrap
        );
      }
      return true;
    }).sort((a, b) => a.numericYear - b.numericYear);
  }, [selectedChapter, selectedEra, searchQuery]);

  // Available eras based on chapter selection
  const availableEras = useMemo(() => {
    if (selectedChapter === "all") return SST_TIMELINE_ERAS;
    return SST_TIMELINE_ERAS.filter((era) => era.chapterKey === selectedChapter);
  }, [selectedChapter]);

  // Toggle Memorization
  const toggleMemorize = (eventId: string, eventTitle: string) => {
    playSoundEffect("click");
    const updated = { ...memorizedEvents, [eventId]: !memorizedEvents[eventId] };
    setMemorizedEvents(updated);
    try {
      localStorage.setItem("sst_memorized_timelines", JSON.stringify(updated));
    } catch {}

    if (updated[eventId]) {
      playSoundEffect("success");
      if (onAddXP) {
        onAddXP(15, `Mastered milestone: ${eventTitle}`);
      }
    }
  };

  // Initialize or reset game challenge
  const loadChallenge = (challengeId: string) => {
    const chal = CHRONOLOGY_CHALLENGES.find((c) => c.id === challengeId);
    if (!chal) return;
    setSelectedChallengeId(challengeId);
    setGameSubmitted(false);
    setGameIsCorrect(false);

    // Get event objects
    const items = chal.eventIds
      .map((id) => ENRICHED_SST_TIMELINES.find((e) => e.id === id))
      .filter(Boolean) as EnrichedTimelineEvent[];

    // Shuffle items
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setGameItems(shuffled);
  };

  // Run on game mode activation or challenge switch
  useEffect(() => {
    if (activeMode === "chronology_game") {
      loadChallenge(selectedChallengeId);
    }
  }, [activeMode, selectedChallengeId]);

  // Move item up or down in chronology game
  const moveGameItem = (fromIdx: number, toIdx: number) => {
    if (toIdx < 0 || toIdx >= gameItems.length || gameSubmitted) return;
    playSoundEffect("click");
    const updated = [...gameItems];
    const [moved] = updated.splice(fromIdx, 1);
    updated.splice(toIdx, 0, moved);
    setGameItems(updated);
  };

  // Check chronology game solution
  const checkGameSolution = () => {
    const activeChallenge = CHRONOLOGY_CHALLENGES.find((c) => c.id === selectedChallengeId);
    if (!activeChallenge) return;

    let isCorrect = true;
    for (let i = 0; i < gameItems.length; i++) {
      if (gameItems[i].id !== activeChallenge.eventIds[i]) {
        isCorrect = false;
        break;
      }
    }

    setGameSubmitted(true);
    setGameIsCorrect(isCorrect);

    if (isCorrect) {
      playSoundEffect("success");
      setGameStreak((prev) => prev + 1);
      setGameScore((prev) => prev + 50);
      if (onAddXP) {
        onAddXP(50, `Solved Chronology Challenge: ${activeChallenge.title}`);
      }
    } else {
      playSoundEffect("error");
      setGameStreak(0);
    }
  };

  // Progress stats
  const totalInCurrentFilter = filteredEvents.length;
  const memorizedInCurrentFilter = filteredEvents.filter((e) => memorizedEvents[e.id]).length;
  const percentageMemorized = totalInCurrentFilter
    ? Math.round((memorizedInCurrentFilter / totalInCurrentFilter) * 100)
    : 0;

  return (
    <div className={`space-y-8 animate-fade-in ${isDark ? "text-slate-100" : "text-slate-800"}`}>
      {/* =========================================================================
          HERO BANNER: SMART STUDY TIMELINES MASTER
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all shadow-xl ${
          isDark
            ? "bg-gradient-to-br from-[#0c1322] via-[#09111e] to-[#121b2d] border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.12)]"
            : "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/80 border-amber-200 shadow-lg"
        }`}
      >
        {/* Parallax Background Glow Element */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> SST Chronology Command Center
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-amber-950/60 text-amber-300 border-amber-500/30"
                    : "bg-amber-100 text-amber-900 border-amber-300"
                }`}
              >
                CBSE Class 10 History • 54 Milestones
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300"
                }`}
              >
                🎯 100% Board Syllabi (Ch 1 & Ch 2)
              </span>
            </div>

            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Master CBSE Historical Timelines & Chronology Traps
            </h1>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Exhaustive smart breakdown of every historical milestone from the <strong>French Revolution (1789)</strong> to{" "}
              <strong>Indian Independence (1947)</strong>. Solve chronological arrangement MCQs, bypass examiner traps, and lock dates into long-term memory.
            </p>
          </div>

          {/* Quick Stats & Navigation */}
          <div className="flex flex-wrap lg:flex-col items-center sm:items-end gap-3 w-full lg:w-auto shrink-0">
            <div
              className={`p-4 rounded-2xl border flex items-center gap-4 w-full sm:w-auto ${
                isDark ? "bg-slate-900/70 border-white/10" : "bg-white border-slate-200 shadow-xs"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-lg border ${
                isDark ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : "bg-amber-100 text-amber-800 border-amber-300"
              }`}>
                {percentageMemorized}%
              </div>
              <div>
                <div className={`text-[11px] font-mono uppercase tracking-wider font-bold ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  Milestone Mastery
                </div>
                <div className="text-sm font-bold">
                  {memorizedInCurrentFilter} of {totalInCurrentFilter} Memorized
                </div>
              </div>
            </div>

            {onBackToDashboard && (
              <button
                onClick={() => {
                  playSoundEffect("click");
                  onBackToDashboard();
                }}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                    : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
              </button>
            )}
          </div>
        </div>

        {/* MODE SELECTOR NAVIGATION TABS */}
        <div className={`mt-8 pt-6 border-t flex flex-wrap gap-2 sm:gap-3 ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}>
          {[
            { id: "storyline", label: "Interactive Storyline", icon: Sparkles, badge: "Full Flow" },
            { id: "chronology_game", label: "CBSE Sequence Game", icon: Zap, badge: "Trainer (+50 XP)" },
            { id: "flashcards", label: "Rapid Recall Cards", icon: BookMarked, badge: "3D Flip" },
            { id: "cheat_sheet", label: "5-Min Exam Cheat Sheet", icon: TableIcon, badge: "Revision Table" }
          ].map((tab) => {
            const isActive = activeMode === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSoundEffect("click");
                  setActiveMode(tab.id as ViewMode);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border touch-manipulation min-h-[44px] ${
                  isActive
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/25 font-black scale-102"
                    : isDark
                    ? "bg-slate-900/60 border-white/10 hover:border-amber-500/40 text-slate-300"
                    : "bg-white border-slate-200 hover:border-amber-400 text-slate-700"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? "text-slate-950" : isDark ? "text-amber-400" : "text-amber-700"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-slate-950/20 text-slate-950 font-bold"
                      : isDark
                      ? "bg-white/5 text-amber-300"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          CONTROLS BAR: CHAPTER SELECTION, ERA FILTERS, SEARCH
          ========================================================================= */}
      <div
        className={`p-5 rounded-2xl border space-y-4 ${
          isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-xs"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Chapter Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-slate-400 flex items-center gap-1.5 mr-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Chapter:
            </span>
            {[
              { id: "all", label: "All History (Both Chapters)" },
              { id: "ch2_india", label: "Ch 2: Nationalism in India (1915–1947)" },
              { id: "ch1_europe", label: "Ch 1: Nationalism in Europe (1789–1871)" }
            ].map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  playSoundEffect("click");
                  setSelectedChapter(ch.id as any);
                  setSelectedEra("all");
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border touch-manipulation min-h-[38px] ${
                  selectedChapter === ch.id
                    ? "bg-amber-500/20 border-amber-500 text-amber-400"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search event, date, leader..."
              className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:outline-hidden transition-all ${
                isDark
                  ? "bg-slate-900/80 border-white/15 focus:border-amber-400 text-white"
                  : "bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 ${
                  isDark ? "hover:text-white" : "hover:text-slate-900"
                }`}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Era Filter Chips */}
        <div className="pt-3 border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3 text-amber-400" /> Eras:
          </span>
          <button
            onClick={() => {
              playSoundEffect("click");
              setSelectedEra("all");
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 cursor-pointer transition-all border ${
              selectedEra === "all"
                ? "bg-amber-500 text-slate-950 font-bold border-amber-400"
                : isDark
                ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-600"
            }`}
          >
            All Eras ({filteredEvents.length})
          </button>
          {availableEras.map((era) => {
            const count = ENRICHED_SST_TIMELINES.filter((e) => e.era === era.name).length;
            const isEraActive = selectedEra === era.name;
            return (
              <button
                key={era.id}
                onClick={() => {
                  playSoundEffect("click");
                  setSelectedEra(isEraActive ? "all" : era.name);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 cursor-pointer transition-all border flex items-center gap-1.5 ${
                  isEraActive
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-400"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{era.name}</span>
                <span className="text-[10px] opacity-70 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MODE 1: INTERACTIVE STORYLINE TIMELINE
          ========================================================================= */}
      {activeMode === "storyline" && (
        <div className="space-y-6">
          {/* 1. HISTORICAL EXPRESS METRO LINE (FAST TRAVEL JOURNEY TRACK) */}
          <div
            className={`p-4 sm:p-5 rounded-3xl border ${
              isDark
                ? "bg-[#0c1120] border-white/10"
                : "bg-gradient-to-r from-amber-50/70 via-white to-orange-50/60 border-amber-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 font-mono text-sm">
                  🚇
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black flex items-center gap-1.5">
                    <span>CBSE Historical Express Metro Line</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black">
                      FAST TRAVEL
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Tap any station to fast-travel down the chronological track.
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {selectedChapter === "ch1_europe"
                  ? "12 Stations (1789–1871)"
                  : selectedChapter === "ch2_india"
                  ? "13 Stations (1915–1947)"
                  : "All Historical Express Routes"}
              </span>
            </div>

            {/* Scrollable Metro Track */}
            <div className="relative overflow-x-auto pb-2 pt-1 no-scrollbar">
              <div className="flex items-center gap-2 min-w-max px-1">
                {activeMetroList.map((station, sIdx) => {
                  const isActive = activeMetroStation === station.id;
                  const isDone = !!memorizedEvents[station.id];
                  return (
                    <button
                      key={station.id}
                      onClick={() => handleMetroTravel(station.id)}
                      className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all cursor-pointer shrink-0 touch-manipulation min-h-[44px] ${
                        isActive
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black scale-105 shadow-md shadow-amber-500/30"
                          : isDone
                          ? isDark
                            ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                            : "bg-emerald-50 border-emerald-300 text-emerald-900"
                          : isDark
                          ? "bg-white/5 border-white/10 hover:border-amber-500/40 hover:bg-white/10 text-slate-300"
                          : "bg-white border-slate-200 hover:border-amber-400 text-slate-700 shadow-xs"
                      }`}
                    >
                      <span className="text-base select-none">{station.emoji}</span>
                      <div className="text-left">
                        <span
                          className={`block font-mono text-[11px] font-black ${
                            isActive ? "text-slate-950" : "text-amber-400"
                          }`}
                        >
                          {station.year}
                        </span>
                        <span
                          className={`block text-[11px] font-semibold truncate max-w-[90px] sm:max-w-[120px] ${
                            isActive ? "text-slate-950 font-black" : ""
                          }`}
                        >
                          {station.label}
                        </span>
                      </div>
                      {sIdx < activeMetroList.length - 1 && (
                        <div
                          className={`w-3 h-0.5 ml-1 ${
                            isActive ? "bg-slate-950" : isDark ? "bg-white/15" : "bg-slate-300"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. TIMELINE TEACHING STYLE CONTROLLER */}
          <div
            className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
              isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-xs"
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-black">Timeline Teaching Style:</span>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              {[
                { id: "combo", label: "⚡ Super Combo", desc: "Toddler + CBSE" },
                { id: "toddler", label: "👶 Toddler ELI5 Drama", desc: "10s Playground Story" },
                { id: "deep", label: "🎓 CBSE Board Exam", desc: "Causes & Rubric" }
              ].map((m) => {
                const isSelected = timelineDisplayMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      playSoundEffect("click");
                      setTimelineDisplayMode(m.id as any);
                    }}
                    className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-xs"
                        : isDark
                        ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                        : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center px-1">
            <div>
              <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" /> Chronological Event Flow
              </h3>
              <p className="text-xs text-slate-400">
                Playground toddler analogies + official CBSE marking rubrics and examiner traps.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredEvents.length} Events
            </span>
          </div>

          {filteredEvents.length === 0 ? (
            <div
              className={`p-12 text-center rounded-3xl border ${
                isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200"
              }`}
            >
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="font-bold text-sm">No historical milestones match your query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedEra("all");
                }}
                className="mt-3 px-4 py-2 text-xs font-bold rounded-xl bg-amber-500 text-slate-950 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="relative ml-2 sm:ml-6 pl-5 sm:pl-8 border-l-2 border-amber-500/30 space-y-8">
              {filteredEvents.map((item, idx) => {
                const isExpanded = expandedEventId === item.id;
                const isDone = !!memorizedEvents[item.id];
                const toddler = getToddlerStoryForEvent(item.id, item.event, item.significance);
                const isMysteryRevealed = !!revealedMysteries[item.id];
                const isStationActive = activeMetroStation === item.id;

                return (
                  <div key={item.id} id={`timeline-card-${item.id}`} className="relative group scroll-mt-28">
                    {/* Glowing Node on the Timeline Track */}
                    <div
                      onClick={() => toggleMemorize(item.id, item.event)}
                      title={isDone ? "Memorized! Click to unmark" : "Click to mark memorized (+15 XP)"}
                      className={`absolute -left-[31px] sm:-left-[39px] top-4 w-5 h-5 rounded-full border-4 cursor-pointer transition-all flex items-center justify-center ${
                        isDone
                          ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.7)] scale-110"
                          : isDark
                          ? "bg-amber-400 border-[#0b0f19] group-hover:scale-125 group-hover:bg-amber-300"
                          : "bg-amber-500 border-white group-hover:scale-125 shadow-xs"
                      }`}
                    >
                      {isDone && <Check className="w-2.5 h-2.5 text-slate-950 font-black" />}
                    </div>

                    {/* Milestone Card */}
                    <div
                      className={`p-5 sm:p-6 rounded-3xl border transition-all ${
                        isStationActive
                          ? "ring-2 ring-amber-400 border-amber-400 shadow-xl shadow-amber-500/20"
                          : ""
                      } ${
                        isDone
                          ? isDark
                            ? "bg-emerald-950/15 border-emerald-500/30"
                            : "bg-emerald-50/50 border-emerald-200"
                          : isDark
                          ? "bg-[#0c101c] border-white/10 hover:border-amber-500/40 hover:bg-[#0f1424]"
                          : "bg-white border-slate-200 hover:border-amber-400 shadow-sm"
                      }`}
                    >
                      {/* Top Badges Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black tracking-wide bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-xs">
                            📅 {item.year}
                          </span>
                          <span
                            className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg border ${
                              isDark
                                ? "bg-amber-950/40 text-amber-300 border-amber-500/30"
                                : "bg-amber-100 text-amber-900 border-amber-200"
                            }`}
                          >
                            {item.era}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md ${
                              item.examProbability.includes("CRITICAL")
                                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                                : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                            }`}
                          >
                            ⭐ {item.examProbability}
                          </span>
                        </div>

                        {/* Memorized Toggle Button */}
                        <button
                          onClick={() => toggleMemorize(item.id, item.event)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isDone
                              ? "bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-xs"
                              : isDark
                              ? "bg-white/5 border-white/10 hover:border-emerald-500 text-slate-400 hover:text-emerald-400"
                              : "bg-slate-100 border-slate-200 hover:border-emerald-500 text-slate-600 hover:text-emerald-700"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? "Memorized" : "Mark Mastered"}</span>
                        </button>
                      </div>

                      {/* Event Title with Drama Emoji */}
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-xs shrink-0 select-none">
                          {toddler.dramaEmoji}
                        </span>
                        <div>
                          <h4
                            className={`text-base sm:text-lg font-black tracking-tight ${
                              isDone
                                ? "text-emerald-400"
                                : isDark
                                ? "text-white"
                                : "text-slate-900"
                            }`}
                          >
                            {item.event}
                          </h4>
                          {item.keyPersonalities && item.keyPersonalities.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                              {item.keyPersonalities.map((person, pIdx) => (
                                <span
                                  key={pIdx}
                                  className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                                    isDark
                                      ? "bg-white/5 border-white/10 text-slate-300"
                                      : "bg-slate-100 border-slate-200 text-slate-700"
                                  }`}
                                >
                                  👤 {person}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 1. TODDLER STORY SECTION (When in 'toddler' or 'combo' mode) */}
                      {(timelineDisplayMode === "toddler" || timelineDisplayMode === "combo") && (
                        <div
                          className={`p-4 sm:p-5 rounded-2xl border transition-all mb-3.5 ${
                            isDark
                              ? "bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-amber-500/25"
                              : "bg-gradient-to-r from-amber-50 via-orange-50/50 to-white border-amber-200"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 flex items-center gap-1">
                              👶 Toddler Drama in 10s (ELI5)
                            </span>
                            <span className="text-[10px] font-mono font-semibold text-amber-500/90 hidden sm:inline">
                              Playground Analogy • 100% NCERT Rigor
                            </span>
                          </div>
                          <p
                            className={`text-xs sm:text-sm font-medium leading-relaxed ${
                              isDark ? "text-amber-100/90" : "text-amber-950"
                            }`}
                          >
                            {toddler.toddlerStory}
                          </p>
                        </div>
                      )}

                      {/* 2. INTERACTIVE "WHY DID THIS HAPPEN?" TODDLER MYSTERY CARD */}
                      <div className="mb-4">
                        {!isMysteryRevealed ? (
                          <button
                            onClick={() => {
                              playSoundEffect("flip");
                              setRevealedMysteries((prev) => ({ ...prev, [item.id]: true }));
                              onAddXP?.(5, `Curiosity Bonus: Solved ${item.year} Mystery!`);
                            }}
                            className={`w-full p-3 rounded-2xl border border-dashed transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left group ${
                              isDark
                                ? "bg-white/[0.02] border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/5 text-slate-300"
                                : "bg-amber-50/40 border-amber-300 hover:border-amber-500 hover:bg-amber-50 text-slate-700"
                            }`}
                          >
                            <span className="text-xs font-bold flex items-center gap-2">
                              <span className="text-lg">❓</span>
                              <span>
                                Board Mystery: <strong>{toddler.toddlerQuestion}</strong>
                              </span>
                            </span>
                            <span className="text-[11px] font-mono font-black px-3 py-1 rounded-xl bg-amber-500 text-slate-950 group-hover:scale-105 transition-transform flex items-center gap-1 shrink-0 self-start sm:self-auto">
                              Tap to Solve (+5 XP) ✨
                            </span>
                          </button>
                        ) : (
                          <div
                            className={`p-4 rounded-2xl border animate-fade-in ${
                              isDark
                                ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-200"
                                : "bg-emerald-50 border-emerald-300 text-emerald-950"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[11px] font-mono font-black uppercase text-emerald-400 flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4" /> Solved: {toddler.toddlerQuestion}
                              </span>
                              <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/20">
                                +5 XP Earned
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium leading-relaxed">
                              {toddler.toddlerAnswer}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* 3. CBSE BOARD SUMMARY (When in 'deep' or 'combo' mode) */}
                      {(timelineDisplayMode === "deep" || timelineDisplayMode === "combo") && (
                        <div
                          className={`p-3.5 sm:p-4 rounded-2xl border mb-4 ${
                            isDark
                              ? "bg-white/[0.02] border-white/10"
                              : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                            🎓 Official CBSE 3-Mark Answer Points:
                          </span>
                          <p
                            className={`text-xs sm:text-sm leading-relaxed ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            {item.significance}
                          </p>
                        </div>
                      )}

                      {/* Expand / Collapse Button */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                        {item.ncertReference && (
                          <span className="text-[11px] font-mono font-bold text-amber-400/90 flex items-center gap-1">
                            📖 {item.ncertReference}
                          </span>
                        )}

                        <button
                          onClick={() => {
                            playSoundEffect("click");
                            setExpandedEventId(isExpanded ? null : item.id);
                          }}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isExpanded
                              ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                              : isDark
                              ? "bg-white/5 border-white/10 hover:bg-amber-500/10 hover:border-amber-500/30 text-amber-300"
                              : "bg-amber-50 border-amber-200 hover:bg-amber-100 text-amber-900"
                          }`}
                        >
                          <span>{isExpanded ? "Hide Deep Dive" : "Deep Dive & Board Traps"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* ==================== DEEP DIVE EXPANDED SECTION ==================== */}
                      {isExpanded && (
                        <div className="mt-5 pt-5 border-t border-white/10 space-y-4 animate-fade-in">
                          {/* Why CBSE Asks This */}
                          {item.whyCbseAsksThis && (
                            <div
                              className={`p-4 rounded-2xl border ${
                                isDark
                                  ? "bg-blue-950/20 border-blue-500/30 text-blue-200"
                                  : "bg-blue-50 border-blue-200 text-blue-900"
                              }`}
                            >
                              <span className="text-xs font-mono font-black uppercase tracking-wider block mb-1 flex items-center gap-1.5 text-blue-400">
                                <Award className="w-4 h-4" /> Why CBSE Asks This in Board Exams
                              </span>
                              <p className="text-xs leading-relaxed">{item.whyCbseAsksThis}</p>
                            </div>
                          )}

                          {/* Examiner Trap Warning */}
                          {item.boardTrap && (
                            <div
                              className={`p-4 rounded-2xl border ${
                                isDark
                                  ? "bg-rose-950/25 border-rose-500/40 text-rose-200"
                                  : "bg-rose-50 border-rose-200 text-rose-900"
                              }`}
                            >
                              <span className="text-xs font-mono font-black uppercase tracking-wider block mb-1 flex items-center gap-1.5 text-rose-400">
                                <AlertTriangle className="w-4 h-4" /> Examiner Trap to Avoid
                              </span>
                              <p className="text-xs leading-relaxed">{item.boardTrap}</p>
                            </div>
                          )}

                          {/* Causes & Consequences Grid */}
                          {(item.causes || item.consequences) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                              {item.causes && (
                                <div
                                  className={`p-3.5 rounded-2xl border ${
                                    isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                                  }`}
                                >
                                  <span className="text-xs font-mono font-bold uppercase text-amber-400 block mb-2">
                                    Root Causes & Triggers
                                  </span>
                                  <ul className={`space-y-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                    {item.causes.map((cause, cIdx) => (
                                      <li key={cIdx} className="flex items-start gap-2">
                                        <span className="text-amber-400 font-bold">•</span>
                                        <span>{cause}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.consequences && (
                                <div
                                  className={`p-3.5 rounded-2xl border ${
                                    isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                                  }`}
                                >
                                  <span className="text-xs font-mono font-bold uppercase text-emerald-400 block mb-2">
                                    Direct Historical Impact
                                  </span>
                                  <ul className={`space-y-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                    {item.consequences.map((cons, cIdx) => (
                                      <li key={cIdx} className="flex items-start gap-2">
                                        <span className="text-emerald-400 font-bold">•</span>
                                        <span>{cons}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Quick Mnemonic Memory Hook */}
                          {item.quickMnemonic && (
                            <div
                              className={`p-3 rounded-xl border flex items-center gap-3 ${
                                isDark
                                  ? "bg-amber-950/20 border-amber-500/30 text-amber-200"
                                  : "bg-amber-50 border-amber-200 text-amber-900"
                              }`}
                            >
                              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                              <div className="text-xs">
                                <span className="font-mono font-bold uppercase text-[10px] text-amber-400 mr-2">
                                  Quick Mnemonic Hook:
                                </span>
                                <strong>{item.quickMnemonic}</strong>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          MODE 2: CBSE CHRONOLOGY ORDERING GAME TRAINER
          ========================================================================= */}
      {activeMode === "chronology_game" && (
        <div className="space-y-6">
          {/* Game Header */}
          <div
            className={`p-6 rounded-3xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
              isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase bg-amber-500 text-slate-950">
                  ⚡ Board Exam MCQ Simulator
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Streak: <strong className="text-amber-400">{gameStreak}</strong> 🔥 • Score:{" "}
                  <strong className="text-emerald-400">{gameScore} XP</strong>
                </span>
              </div>
              <h3 className="text-xl font-black">Arrange Events in Chronological Sequence</h3>
              <p className="text-xs text-slate-400">
                CBSE tests this in Section A (1 Mark). Use the <strong>▲ Up</strong> and{" "}
                <strong>▼ Down</strong> buttons to order earliest to latest.
              </p>
            </div>

            {/* Challenge Round Dropdown */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="fabulous-select-wrapper flex-1 sm:flex-initial min-w-[260px]">
                <select
                  value={selectedChallengeId}
                  onChange={(e) => {
                    playSoundEffect("click");
                    loadChallenge(e.target.value);
                  }}
                  className={`fabulous-select ${
                    isDark ? "fabulous-select-dark" : "fabulous-select-light"
                  }`}
                >
                  {CHRONOLOGY_CHALLENGES.map((chal) => (
                    <option key={chal.id} value={chal.id}>
                      {chal.chapterKey === "ch2_india" ? "🇮🇳 India: " : "🇪🇺 Europe: "}
                      {chal.title} ({chal.difficulty})
                    </option>
                  ))}
                </select>
                <div className="fabulous-select-icon text-zinc-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <button
                onClick={() => {
                  playSoundEffect("click");
                  loadChallenge(selectedChallengeId);
                }}
                className={`p-2 rounded-xl border text-xs cursor-pointer ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
                    : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700"
                }`}
                title="Shuffle / Restart Challenge"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Challenge Tip */}
          {(() => {
            const currentChal = CHRONOLOGY_CHALLENGES.find((c) => c.id === selectedChallengeId);
            if (!currentChal) return null;
            return (
              <div
                className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs ${
                  isDark
                    ? "bg-amber-950/20 border-amber-500/30 text-amber-200"
                    : "bg-amber-50 border-amber-200 text-amber-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Target:</strong> Arrange these {gameItems.length} milestone events in
                    ascending timeline order (from earliest in history to most recent).
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                  {currentChal.difficulty}
                </span>
              </div>
            );
          })()}

          {/* Ordering Cards List */}
          <div className="space-y-3">
            {gameItems.map((item, idx) => {
              const activeChal = CHRONOLOGY_CHALLENGES.find((c) => c.id === selectedChallengeId);
              const isItemCorrect =
                gameSubmitted && activeChal?.eventIds[idx] === item.id;
              const isItemWrong =
                gameSubmitted && activeChal?.eventIds[idx] !== item.id;

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isItemCorrect
                      ? "bg-emerald-950/30 border-emerald-500 text-emerald-100"
                      : isItemWrong
                      ? "bg-rose-950/30 border-rose-500 text-rose-100"
                      : isDark
                      ? "bg-[#0c101c] border-white/10"
                      : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Position Number */}
                    <div
                      className={`w-9 h-9 rounded-xl font-mono font-black text-sm flex items-center justify-center shrink-0 border ${
                        isItemCorrect
                          ? "bg-emerald-500 text-slate-950 border-emerald-400"
                          : isItemWrong
                          ? "bg-rose-500 text-white border-rose-400"
                          : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      }`}
                    >
                      #{idx + 1}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {/* If submitted, reveal the real year! */}
                        {gameSubmitted ? (
                          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-black bg-amber-500 text-slate-950">
                            {item.year}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white/5 text-slate-400">
                            {item.era}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-slate-400">
                          📖 {item.ncertReference}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold truncate">{item.event}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{item.significance}</p>
                    </div>
                  </div>

                  {/* Ordering Controls (Up / Down) */}
                  {!gameSubmitted && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => moveGameItem(idx, idx - 1)}
                        disabled={idx === 0}
                        className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
                          idx === 0
                            ? "opacity-30 cursor-not-allowed border-transparent"
                            : isDark
                            ? "bg-white/5 border-white/10 hover:bg-amber-500/20 hover:border-amber-400 text-white"
                            : "bg-slate-100 border-slate-200 hover:bg-amber-100 text-slate-800"
                        }`}
                        title="Move Earlier"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => moveGameItem(idx, idx + 1)}
                        disabled={idx === gameItems.length - 1}
                        className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
                          idx === gameItems.length - 1
                            ? "opacity-30 cursor-not-allowed border-transparent"
                            : isDark
                            ? "bg-white/5 border-white/10 hover:bg-amber-500/20 hover:border-amber-400 text-white"
                            : "bg-slate-100 border-slate-200 hover:bg-amber-100 text-slate-800"
                        }`}
                        title="Move Later"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Bar & Result */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {!gameSubmitted ? (
              <button
                onClick={checkGameSolution}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all cursor-pointer shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> Verify Chronological Sequence
              </button>
            ) : (
              <div className="w-full space-y-4">
                <div
                  className={`p-5 rounded-2xl border ${
                    gameIsCorrect
                      ? "bg-emerald-950/30 border-emerald-500 text-emerald-200"
                      : "bg-rose-950/30 border-rose-500 text-rose-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {gameIsCorrect ? (
                      <>
                        <Trophy className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-base font-black text-emerald-400">
                          Outstanding! Sequence is 100% Correct (+50 XP)
                        </h4>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                        <h4 className="text-base font-black text-rose-400">
                          Sequence Incorrect — Review Revealed Years Above
                        </h4>
                      </>
                    )}
                  </div>

                  <p className="text-xs leading-relaxed mb-3">
                    {(() => {
                      const activeChal = CHRONOLOGY_CHALLENGES.find(
                        (c) => c.id === selectedChallengeId
                      );
                      return activeChal?.cbseTip;
                    })()}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => loadChallenge(selectedChallengeId)}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Retry This Challenge
                    </button>

                    <button
                      onClick={() => {
                        const currentIdx = CHRONOLOGY_CHALLENGES.findIndex(
                          (c) => c.id === selectedChallengeId
                        );
                        const nextChal =
                          CHRONOLOGY_CHALLENGES[(currentIdx + 1) % CHRONOLOGY_CHALLENGES.length];
                        loadChallenge(nextChal.id);
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black cursor-pointer flex items-center gap-1.5"
                    >
                      Next Challenge Round <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 3: RAPID RECALL 3D FLASHCARDS
          ========================================================================= */}
      {activeMode === "flashcards" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <div>
              <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-400" /> 3D Flip Rapid Recall Engine
              </h3>
              <p className="text-xs text-slate-400">
                Card {flashcardIndex + 1} of {filteredEvents.length} • Tap card to reveal event and
                significance.
              </p>
            </div>
            <button
              onClick={() => {
                playSoundEffect("flip");
                setFlashcardIndex(Math.floor(Math.random() * filteredEvents.length));
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" /> Shuffle Card
            </button>
          </div>

          {filteredEvents.length > 0 && (
            <div className="max-w-xl mx-auto">
              {/* Flashcard Component */}
              {(() => {
                const currentCard = filteredEvents[flashcardIndex];
                if (!currentCard) return null;

                return (
                  <div
                    onClick={() => {
                      playSoundEffect("flip");
                      setIsFlipped(!isFlipped);
                    }}
                    className={`min-h-[340px] p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between relative shadow-2xl ${
                      isFlipped
                        ? isDark
                          ? "bg-gradient-to-br from-[#0c182a] to-[#091522] border-teal-500/50"
                          : "bg-gradient-to-br from-teal-50 to-white border-teal-300"
                        : isDark
                        ? "bg-gradient-to-br from-[#121624] to-[#0b0f19] border-amber-500/50 hover:border-amber-400"
                        : "bg-gradient-to-br from-amber-50 to-white border-amber-300 hover:border-amber-400"
                    }`}
                  >
                    {/* Top Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {isFlipped ? "Answer / Historical Consequence" : "Year & Era Prompt"}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10">
                        {currentCard.era}
                      </span>
                    </div>

                    {/* Card Center Content */}
                    {!isFlipped ? (
                      <div className="text-center space-y-4 my-auto">
                        <div className="inline-block px-5 py-2 rounded-2xl bg-amber-500 text-slate-950 font-mono font-black text-2xl sm:text-3xl shadow-lg shadow-amber-500/30">
                          {currentCard.year}
                        </div>
                        <h4 className={`text-lg sm:text-xl font-bold ${isDark ? "text-slate-300" : "text-slate-800"}`}>
                          What major milestone event occurred in {currentCard.year}?
                        </h4>
                        <p className="text-xs text-slate-500 font-mono">
                          (Click anywhere to flip and verify)
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3.5 my-auto animate-fade-in text-left">
                        {(() => {
                          const toddler = getToddlerStoryForEvent(
                            currentCard.id,
                            currentCard.event,
                            currentCard.significance
                          );
                          return (
                            <>
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="px-3 py-1 rounded-md text-xs font-mono font-black bg-teal-500 text-slate-950">
                                    {currentCard.year}
                                  </span>
                                  <span className="text-xl select-none">{toddler.dramaEmoji}</span>
                                </div>
                                <span className="text-xs font-mono text-teal-400 font-bold">
                                  📖 {currentCard.ncertReference}
                                </span>
                              </div>

                              <h4 className="text-base sm:text-lg font-black text-teal-300">
                                {currentCard.event}
                              </h4>

                              {/* Toddler ELI5 Hook Bubble */}
                              <div
                                className={`p-3 rounded-xl border text-xs font-medium leading-relaxed ${
                                  isDark
                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                                    : "bg-amber-50 border-amber-200 text-amber-950"
                                }`}
                              >
                                <span className="font-bold block text-[10px] uppercase font-mono text-amber-400 mb-0.5">
                                  👶 Toddler Drama Hook (ELI5):
                                </span>
                                {toddler.toddlerStory}
                              </div>

                              <div className={`space-y-1 text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                <span className="text-[10px] font-mono uppercase font-bold text-teal-400 block">
                                  🎓 Official CBSE Board Points:
                                </span>
                                <p>{currentCard.significance}</p>
                              </div>

                              {currentCard.keyPersonalities && currentCard.keyPersonalities.length > 0 && (
                                <div className="text-xs text-slate-400 pt-1">
                                  <strong>Key Figures:</strong> {currentCard.keyPersonalities.join(", ")}
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    )}

                    {/* Bottom Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                      <span className="text-slate-400">Tap to flip 🔄</span>
                      <span className="font-bold text-amber-400">
                        {currentCard.examProbability}
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* Prev / Next Controls */}
              <div className="flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setIsFlipped(false);
                    setFlashcardIndex((prev) =>
                      prev === 0 ? filteredEvents.length - 1 : prev - 1
                    );
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                      : "bg-white border-slate-200 hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  ← Previous Card
                </button>

                <button
                  onClick={() => {
                    const curr = filteredEvents[flashcardIndex];
                    if (curr) toggleMemorize(curr.id, curr.event);
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mark Memorized
                </button>

                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setIsFlipped(false);
                    setFlashcardIndex((prev) => (prev + 1) % filteredEvents.length);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                      : "bg-white border-slate-200 hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  Next Card →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          MODE 4: 5-MINUTE EXAM CHEAT SHEET MATRIX (HIGH-YIELD REVISION TABLE)
          ========================================================================= */}
      {activeMode === "cheat_sheet" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <div>
              <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-amber-400" /> High-Yield Pre-Exam Matrix
              </h3>
              <p className="text-xs text-slate-400">
                Bird&apos;s-eye chronological table for quick scanning 10 minutes before the board exam.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Print Cheat Sheet
            </button>
          </div>

          <div
            className={`rounded-3xl border overflow-hidden ${
              isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-xs"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead
                  className={`border-b font-mono font-bold uppercase ${
                    isDark
                      ? "bg-slate-900/90 border-white/10 text-amber-400"
                      : "bg-amber-50 border-slate-200 text-amber-900"
                  }`}
                >
                  <tr>
                    <th className="p-4">Year / Date</th>
                    <th className="p-4">Chapter & Era</th>
                    <th className="p-4">Historical Milestone</th>
                    <th className="p-4">Key Figures</th>
                    <th className="p-4">Examiner Trap to Avoid</th>
                    <th className="p-4">Ref</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredEvents.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-amber-500/5 transition-colors ${
                        memorizedEvents[item.id] ? (isDark ? "bg-emerald-950/10" : "bg-emerald-50/40") : ""
                      }`}
                    >
                      <td className="p-4 font-mono font-black text-amber-400 whitespace-nowrap">
                        {item.year}
                      </td>
                      <td className={`p-4 whitespace-nowrap ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <span className={`block font-bold ${isDark ? "text-slate-300" : "text-slate-900"}`}>
                          {item.chapterKey === "ch1_europe" ? "Ch 1: Europe" : "Ch 2: India"}
                        </span>
                        <span className="text-[10px] opacity-75">{item.era}</span>
                      </td>
                      <td className="p-4">
                        <span className={`font-bold text-sm block mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{item.event}</span>
                        <p className={`line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.significance}</p>
                      </td>
                      <td className={`p-4 whitespace-nowrap ${isDark ? "text-slate-300" : "text-slate-800 font-medium"}`}>
                        {item.keyPersonalities ? item.keyPersonalities.join(", ") : "—"}
                      </td>
                      <td className={`p-4 text-[11px] max-w-xs ${isDark ? "text-rose-300" : "text-rose-700 font-medium"}`}>
                        {item.boardTrap || "—"}
                      </td>
                      <td className={`p-4 font-mono text-[10px] whitespace-nowrap ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {item.ncertReference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelinesMasterView;
