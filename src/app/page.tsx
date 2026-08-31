"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  Download,
  ExternalLink,
  Flame,
  Layers,
  Moon,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  Target,
  Trash2,
  Upload,
  Zap,
  Square,
  Compass,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  MapPin,
  PenTool,
  BookMarked,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Menu,
  X,
  Share2,
  Calendar
} from "lucide-react";

import {
  CBSE_SUBJECTS,
  TEST_SERIES_I_SCHEDULE,
  CHAPTER_WISE_FLASHCARDS,
  BOARD_LEVEL_QUESTIONS,
  INTERACTIVE_SIMULATIONS,
  FlashcardItem,
  BoardQuestion
} from "@/data/cbseData";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speedY: number;
  speedX: number;
}

interface XpToast {
  id: number;
  amount: number;
  text: string;
}

// Essential Chemistry Reactions
const ESSENTIAL_CHEMISTRY_REACTIONS = [
  {
    name: "Lead Nitrate Thermal Decomposition",
    equation: "2Pb(NO₃)₂ (s) ──Δ──> 2PbO (s, Yellow) + 4NO₂ (g, Brown Fumes) + O₂ (g)",
    obs: "Emission of pungent reddish-brown NO₂ fumes; yellowish residue of Lead Monoxide remains.",
    type: "Thermal Decomposition"
  },
  {
    name: "Ferrous Sulphate Crystal Heating",
    equation: "2FeSO₄·7H₂O ──Δ──> Fe₂O₃ (s, Reddish Brown) + SO₂ (g) + SO₃ (g) + 7H₂O",
    obs: "Green crystals turn white then reddish-brown; characteristic smell of burning sulphur.",
    type: "Thermal Decomposition"
  },
  {
    name: "Quicklime with Water (Slaking of Lime)",
    equation: "CaO (s) + H₂O (l) ──> Ca(OH)₂ (aq) + Heat",
    obs: "Vigorous hissing reaction; beaker gets extremely hot (highly exothermic combination).",
    type: "Exothermic Combination"
  },
  {
    name: "Bleaching Action of Bleaching Powder",
    equation: "Ca(OH)₂ (dry) + Cl₂ (g) ──> CaOCl₂ (s) + H₂O",
    obs: "Preparation of calcium oxychloride; strong chlorine odor; acts as an oxidizing agent.",
    type: "Chlor-Alkali Product"
  },
  {
    name: "Precipitation of Barium Sulphate",
    equation: "Na₂SO₄ (aq) + BaCl₂ (aq) ──> BaSO₄ (s, White ppt) + 2NaCl (aq)",
    obs: "Instant formation of an insoluble white precipitate of BaSO₄.",
    type: "Double Displacement"
  },
  {
    name: "Electrolysis of Acidulated Water",
    equation: "2H₂O (l) ──Electricity──> 2H₂ (g, Cathode) + O₂ (g, Anode)",
    obs: "Volume of Hydrogen collected at cathode is exactly double the volume of Oxygen at anode (2:1).",
    type: "Electrolytic Decomposition"
  },
  {
    name: "Esterification Reaction",
    equation: "CH₃COOH + C₂H₅OH ──Conc. H₂SO₄──> CH₃COOC₂H₅ (Ethyl Ethanoate) + H₂O",
    obs: "Formation of sweet, fruity-smelling ester when warmed in a water bath.",
    type: "Organic Esterification"
  }
];

// Essential SST Class 10 Map Work Checklist
const MANDATORY_MAP_LOCATIONS = [
  { category: "History: Nationalism in India", items: ["Champaran (Bihar) - Indigo Planters Movement", "Kheda (Gujarat) - Peasant Satyagraha", "Ahmedabad - Cotton Mill Workers Satyagraha", "Amritsar (Punjab) - Jallianwala Bagh Incident", "Chauri Chaura (UP) - Calling off Non-Cooperation", "Dandi (Gujarat) - Civil Disobedience Salt March"] },
  { category: "Geography: Major Dams", items: ["Salal (J&K) - River Chenab", "Bhakra Nangal (HP/Punjab) - River Sutlej", "Tehri (Uttarakhand) - River Bhagirathi", "Rana Pratap Sagar (Rajasthan) - River Chambal", "Sardar Sarovar (Gujarat) - River Narmada", "Hirakud (Odisha) - River Mahanadi", "Nagarjuna Sagar (Telangana/AP) - River Krishna", "Tungabhadra (Karnataka) - River Tungabhadra"] },
  { category: "Major Sea Ports", items: ["Kandla (Gujarat)", "Mumbai (Maharashtra)", "Marmagao (Goa)", "New Mangalore (Karnataka)", "Kochi (Kerala)", "Tuticorin & Chennai (Tamil Nadu)", "Visakhapatnam (Andhra Pradesh)", "Paradip (Odisha)", "Haldia (West Bengal)"] },
  { category: "Nuclear Power Plants", items: ["Narora (Uttar Pradesh)", "Rawatbhata (Rajasthan)", "Kakrapar (Gujarat)", "Tarapur (Maharashtra)", "Kaiga (Karnataka)", "Kalpakkam (Tamil Nadu)"] }
];

// LEVEL TIERS DEFINITION
const LEVEL_TIERS = [
  { level: 1, title: "Novice Aspirant", minXp: 0, maxXp: 250, badge: "🎯", color: "from-slate-500 to-slate-700" },
  { level: 2, title: "Consistent Achiever", minXp: 250, maxXp: 650, badge: "⚡", color: "from-blue-500 to-cyan-600" },
  { level: 3, title: "Concept Conqueror", minXp: 650, maxXp: 1200, badge: "🧠", color: "from-emerald-500 to-teal-600" },
  { level: 4, title: "Board Contender", minXp: 1200, maxXp: 1900, badge: "🏆", color: "from-amber-500 to-orange-600" },
  { level: 5, title: "Rank Booster", minXp: 1900, maxXp: 2800, badge: "🚀", color: "from-purple-500 to-indigo-600" },
  { level: 6, title: "Distinction Master", minXp: 2800, maxXp: 4000, badge: "💎", color: "from-pink-500 to-rose-600" },
  { level: 7, title: "Topper Prodigy", minXp: 4000, maxXp: 5500, badge: "🌟", color: "from-yellow-400 to-amber-600" },
  { level: 8, title: "AIR 1 CBSE Master", minXp: 5500, maxXp: 10000, badge: "👑", color: "from-amber-300 via-yellow-500 to-orange-600" }
];

export default function CBSECommandCenter() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"test_series" | "today" | "syllabus" | "flashcards" | "questions" | "experiments" | "reactions" | "roadmap">("test_series");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [levelUpModalData, setLevelUpModalData] = useState<{ level: number; title: string; badge: string } | null>(null);
  
  // Confetti & Floating XP Toast
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [xpToasts, setXpToasts] = useState<XpToast[]>([]);

  // Persistent Student Data
  const [streak, setStreak] = useState(1);
  const [dayType, setDayType] = useState<"weekday" | "weekend">("weekday");
  const [completedTopicIds, setCompletedTopicIds] = useState<{ [topicId: string]: boolean }>({});
  const [completedTestSeriesTopics, setCompletedTestSeriesTopics] = useState<{ [topicKey: string]: boolean }>({});
  const [completedMapItems, setCompletedMapItems] = useState<{ [mapItem: string]: boolean }>({});
  const [masteredFlashcardIds, setMasteredFlashcardIds] = useState<{ [id: string]: boolean }>({});
  const [totalFocusMins, setTotalFocusMins] = useState(0);

  // Selected states
  const [selectedExamId, setSelectedExamId] = useState<string>("exam_maths");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("maths");
  const [expandedChapterIds, setExpandedChapterIds] = useState<{ [chapterId: string]: boolean }>({
    math_ch1: true,
    sci_ch1: true,
    sst_his1: true
  });

  // Daily Tasks
  const [todayTasks, setTodayTasks] = useState<{ id: string; text: string; slot: string; done: boolean }[]>([
    { id: "t1", text: "Sept 14 Exam: Solve 10 RD Sharma Trigonometry Proofs + BPT Theorem", slot: "8:00 PM – 9:30 PM", done: false },
    { id: "t2", text: "Sept 16 Exam: Life Processes Diagrams (Nephron & Heart) + Chlor-Alkali", slot: "10:00 PM – 11:15 PM", done: false },
    { id: "t3", text: "Quick Active Recall: 10 Science & SST Flashcards Deck", slot: "11:15 PM – 11:45 PM", done: false }
  ]);

  // Flashcards State
  const [customFlashcards, setCustomFlashcards] = useState<FlashcardItem[]>([]);
  const [selectedFlashcardSubject, setSelectedFlashcardSubject] = useState<string>("All Subjects");
  const [selectedFlashcardChapter, setSelectedFlashcardChapter] = useState<string>("All Chapters");
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);
  const [showAddFlashcardModal, setShowAddFlashcardModal] = useState(false);
  const [newFlashcardForm, setNewFlashcardForm] = useState({
    subject: "Mathematics" as any,
    chapter: "Introduction to Trigonometry",
    topic: "Trigonometric Identities",
    frontQuestion: "",
    backAnswer: "",
    hintOrFormula: "",
    difficulty: "High Yield" as any
  });

  // Question Bank State
  const [customQuestions, setCustomQuestions] = useState<BoardQuestion[]>([]);
  const [selectedQuestionFilter, setSelectedQuestionFilter] = useState<string>("all");
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("all");
  const [revealedQuestionIds, setRevealedQuestionIds] = useState<{ [id: string]: boolean }>({
    bq_1: true,
    bq_2: true
  });
  const [searchQuestionQuery, setSearchQuestionQuery] = useState("");
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [newQuestionForm, setNewQuestionForm] = useState({
    type: "HOTS (RD/RS Level)" as any,
    subject: "Mathematics" as any,
    chapter: "Introduction to Trigonometry",
    topic: "Trigonometric Identities",
    difficulty: "Topper Level (100%)" as any,
    question: "",
    correctAnswer: "",
    explanation: "",
    markingStep1: "1 Mark: Correct formula selection and initial step.",
    markingStep2: "2 Marks: Simplification and final proof."
  });

  // Pomodoro Focus Timer
  const [pomoSeconds, setPomoSeconds] = useState(25 * 60);
  const [isPomoActive, setIsPomoActive] = useState(false);
  const pomoTimerRef = useRef<NodeJS.Timeout | null>(null);

  // High Precision Millisecond Clock (Running at 60fps)
  const [nowTime, setNowTime] = useState<number>(0);
  useEffect(() => {
    let animationFrameId: number;
    const update = () => {
      setNowTime(Date.now());
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Countdown calculations
  const calculatePrecisionCountdown = useCallback((targetDateString: string) => {
    if (!nowTime) return { days: 0, hours: 0, mins: 0, secs: 0, ms: 0, isPassed: false };
    const target = new Date(targetDateString + "T09:00:00").getTime();
    const diff = target - nowTime;
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, ms: 0, isPassed: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    const ms = Math.floor((diff % 1000) / 10);
    return { days, hours, mins, secs, ms, isPassed: false };
  }, [nowTime]);

  const activeExam = useMemo(() => {
    return TEST_SERIES_I_SCHEDULE.find((e) => e.id === selectedExamId) || TEST_SERIES_I_SCHEDULE[0];
  }, [selectedExamId]);

  const activeExamCountdown = useMemo(() => {
    return calculatePrecisionCountdown(activeExam.date);
  }, [calculatePrecisionCountdown, activeExam]);

  // =========================================================================
  // 🌟 MATHEMATICAL, EXPLOIT-PROOF DETERMINISTIC XP ENGINE
  // =========================================================================
  const {
    totalXp,
    coins,
    currentLevelInfo,
    nextLevelInfo,
    levelProgressPercent,
    xpForCurrentLevel,
    xpToNextLevel
  } = useMemo(() => {
    const syllabusTopicsCount = Object.keys(completedTopicIds).filter((k) => completedTopicIds[k]).length;
    const testSeriesCount = Object.keys(completedTestSeriesTopics).filter((k) => completedTestSeriesTopics[k]).length;
    const mapCount = Object.keys(completedMapItems).filter((k) => completedMapItems[k]).length;
    const flashcardsCount = Object.keys(masteredFlashcardIds).filter((k) => masteredFlashcardIds[k]).length;
    const tasksDoneCount = todayTasks.filter((t) => t.done).length;
    const focusBlocks = Math.floor(totalFocusMins / 25);
    const customContributionCount = customFlashcards.length + customQuestions.length;

    // Derived XP (impossible to exploit by spam clicking)
    const calculatedXp =
      syllabusTopicsCount * 25 +
      testSeriesCount * 25 +
      mapCount * 15 +
      flashcardsCount * 20 +
      tasksDoneCount * 30 +
      focusBlocks * 50 +
      customContributionCount * 40;

    // Derived Focus Coins
    const calculatedCoins =
      Math.floor(syllabusTopicsCount * 2) +
      Math.floor(testSeriesCount * 2) +
      Math.floor(flashcardsCount * 2) +
      focusBlocks * 5 +
      customContributionCount * 5;

    // Find current level tier
    let currentTier = LEVEL_TIERS[0];
    let nextTier = LEVEL_TIERS[1];

    for (let i = 0; i < LEVEL_TIERS.length; i++) {
      if (calculatedXp >= LEVEL_TIERS[i].minXp) {
        currentTier = LEVEL_TIERS[i];
        nextTier = LEVEL_TIERS[i + 1] || LEVEL_TIERS[i];
      }
    }

    const tierRange = nextTier.minXp - currentTier.minXp || 1000;
    const progressInTier = Math.max(0, calculatedXp - currentTier.minXp);
    const progressPct = Math.min(100, Math.round((progressInTier / tierRange) * 100));

    return {
      totalXp: calculatedXp,
      coins: calculatedCoins,
      currentLevelInfo: currentTier,
      nextLevelInfo: nextTier,
      levelProgressPercent: progressPct,
      xpForCurrentLevel: progressInTier,
      xpToNextLevel: Math.max(0, nextTier.minXp - calculatedXp)
    };
  }, [
    completedTopicIds,
    completedTestSeriesTopics,
    completedMapItems,
    masteredFlashcardIds,
    todayTasks,
    totalFocusMins,
    customFlashcards,
    customQuestions
  ]);

  // Audio synthesizer
  const playSound = useCallback((type: "done" | "undone" | "flip" | "levelup" | "bell" | "click") => {
    if (isSoundMuted || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "done") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.19);
      } else if (type === "undone") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(380, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.13);
      } else if (type === "flip") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.07);
      } else if (type === "levelup") {
        const now = audioCtx.currentTime;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.5, now + 0.3);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.65);
      } else if (type === "bell") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.75);
      } else {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      }
    } catch {}
  }, [isSoundMuted]);

  // Haptic feedback for mobile touch
  const triggerHaptic = useCallback((pattern: number | number[] = 15) => {
    if (typeof window !== "undefined" && navigator && "vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {}
    }
  }, []);

  // Confetti trigger
  const triggerConfetti = useCallback(() => {
    const colors = ["#f59e0b", "#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#f97316"];
    const particles: ConfettiParticle[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        id: Math.random() + i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 4 - 2
      });
    }
    setConfetti(particles);
  }, []);

  // Show floating XP Toast
  const showXpToast = useCallback((amount: number, text: string) => {
    const newToast = { id: Date.now() + Math.random(), amount, text };
    setXpToasts((prev) => [...prev.slice(-2), newToast]);
    setTimeout(() => {
      setXpToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 1800);
  }, []);

  // Animate confetti
  useEffect(() => {
    if (confetti.length > 0) {
      const frame = requestAnimationFrame(() => {
        setConfetti((prev) =>
          prev
            .map((p) => ({ ...p, y: p.y + p.speedY, x: p.x + p.speedX }))
            .filter((p) => p.y < 110)
        );
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [confetti]);

  // Level up detection
  const prevLevelRef = useRef<number>(1);
  useEffect(() => {
    if (mounted && currentLevelInfo.level > prevLevelRef.current) {
      setLevelUpModalData({
        level: currentLevelInfo.level,
        title: currentLevelInfo.title,
        badge: currentLevelInfo.badge
      });
      playSound("levelup");
      triggerConfetti();
      triggerHaptic([40, 60, 40, 60, 100]);
    }
    prevLevelRef.current = currentLevelInfo.level;
  }, [currentLevelInfo, mounted, playSound, triggerConfetti, triggerHaptic]);

  // Load from LocalStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const sTopics = localStorage.getItem("cbse10_lsa_topics_v4");
        const sTestSeries = localStorage.getItem("cbse10_lsa_test_series_v4");
        const sMap = localStorage.getItem("cbse10_lsa_map_v4");
        const sStreak = localStorage.getItem("cbse10_lsa_streak_v4");
        const sTasks = localStorage.getItem("cbse10_lsa_tasks_v4");
        const sCustomFC = localStorage.getItem("cbse10_lsa_custom_fc_v4");
        const sMasteredFC = localStorage.getItem("cbse10_lsa_mastered_fc_v4");
        const sCustomQ = localStorage.getItem("cbse10_lsa_customq_v4");
        const sFocus = localStorage.getItem("cbse10_lsa_focus_v4");
        const sTheme = localStorage.getItem("cbse10_lsa_theme_v4");
        const sMute = localStorage.getItem("cbse10_lsa_sound_mute_v4");

        if (sTopics) setCompletedTopicIds(JSON.parse(sTopics));
        if (sTestSeries) setCompletedTestSeriesTopics(JSON.parse(sTestSeries));
        if (sMap) setCompletedMapItems(JSON.parse(sMap));
        if (sStreak) setStreak(parseInt(sStreak));
        if (sTasks) setTodayTasks(JSON.parse(sTasks));
        if (sCustomFC) setCustomFlashcards(JSON.parse(sCustomFC));
        if (sMasteredFC) setMasteredFlashcardIds(JSON.parse(sMasteredFC));
        if (sCustomQ) setCustomQuestions(JSON.parse(sCustomQ));
        if (sFocus) setTotalFocusMins(parseInt(sFocus));
        if (sTheme) setTheme(sTheme as any);
        if (sMute) setIsSoundMuted(sMute === "true");
        setMounted(true);
      } catch (err) {
        console.error("Failed to load local storage data:", err);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("cbse10_lsa_topics_v4", JSON.stringify(completedTopicIds));
      localStorage.setItem("cbse10_lsa_test_series_v4", JSON.stringify(completedTestSeriesTopics));
      localStorage.setItem("cbse10_lsa_map_v4", JSON.stringify(completedMapItems));
      localStorage.setItem("cbse10_lsa_streak_v4", streak.toString());
      localStorage.setItem("cbse10_lsa_tasks_v4", JSON.stringify(todayTasks));
      localStorage.setItem("cbse10_lsa_custom_fc_v4", JSON.stringify(customFlashcards));
      localStorage.setItem("cbse10_lsa_mastered_fc_v4", JSON.stringify(masteredFlashcardIds));
      localStorage.setItem("cbse10_lsa_customq_v4", JSON.stringify(customQuestions));
      localStorage.setItem("cbse10_lsa_focus_v4", totalFocusMins.toString());
      localStorage.setItem("cbse10_lsa_theme_v4", theme);
      localStorage.setItem("cbse10_lsa_sound_mute_v4", isSoundMuted ? "true" : "false");
    } catch (e) {
      console.warn("Storage write error", e);
    }
  }, [
    completedTopicIds,
    completedTestSeriesTopics,
    completedMapItems,
    streak,
    todayTasks,
    customFlashcards,
    masteredFlashcardIds,
    customQuestions,
    totalFocusMins,
    theme,
    isSoundMuted,
    mounted
  ]);

  // Pomodoro Timer Interval
  useEffect(() => {
    if (isPomoActive) {
      pomoTimerRef.current = setInterval(() => {
        setPomoSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(pomoTimerRef.current!);
            setIsPomoActive(false);
            setTotalFocusMins((m) => m + 25);
            playSound("bell");
            triggerConfetti();
            triggerHaptic([100, 100, 100]);
            showXpToast(50, "Focus Session Complete (+50 XP)");
            return 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    }
    return () => {
      if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    };
  }, [isPomoActive, playSound, triggerConfetti, triggerHaptic, showXpToast]);

  const formattedPomoTime = useMemo(() => {
    const m = Math.floor(pomoSeconds / 60);
    const s = pomoSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [pomoSeconds]);

  // =========================================================================
  // HANDLERS (EXPLOIT-FREE & REACTIVE)
  // =========================================================================

  const toggleTestSeriesTopic = (key: string) => {
    triggerHaptic(15);
    setCompletedTestSeriesTopics((prev) => {
      const willBeDone = !prev[key];
      if (willBeDone) {
        playSound("done");
        showXpToast(25, "+25 XP Topic Mastered");
        triggerConfetti();
      } else {
        playSound("undone");
        showXpToast(-25, "-25 XP Topic Reopened");
      }
      return { ...prev, [key]: willBeDone };
    });
  };

  const toggleTopic = (topicId: string) => {
    triggerHaptic(15);
    setCompletedTopicIds((prev) => {
      const willBeDone = !prev[topicId];
      if (willBeDone) {
        playSound("done");
        showXpToast(25, "+25 XP Topic Mastered");
        triggerConfetti();
      } else {
        playSound("undone");
        showXpToast(-25, "-25 XP Topic Reopened");
      }
      return { ...prev, [topicId]: willBeDone };
    });
  };

  const toggleMapItem = (itemName: string) => {
    triggerHaptic(15);
    setCompletedMapItems((prev) => {
      const willBeDone = !prev[itemName];
      if (willBeDone) {
        playSound("done");
        showXpToast(15, "+15 XP Map Location Mastered");
      } else {
        playSound("undone");
        showXpToast(-15, "-15 XP Location Reopened");
      }
      return { ...prev, [itemName]: willBeDone };
    });
  };

  const toggleChapterExpand = (chId: string) => {
    playSound("click");
    setExpandedChapterIds((prev) => ({ ...prev, [chId]: !prev[chId] }));
  };

  const handleToggleTask = (id: string) => {
    triggerHaptic(20);
    setTodayTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextState = !t.done;
          if (nextState) {
            playSound("done");
            showXpToast(30, "+30 XP Task Done");
            triggerConfetti();
          } else {
            playSound("undone");
            showXpToast(-30, "-30 XP Task Undone");
          }
          return { ...t, done: nextState };
        }
        return t;
      })
    );
  };

  const handleAddNewTask = () => {
    playSound("click");
    const text = prompt("Enter today's target chapter / problem set:");
    if (!text || !text.trim()) return;
    const slot = prompt("Time Slot (e.g. 8:00 PM – 9:30 PM, Evening Drill):") || "Evening Self-Study";
    setTodayTasks((prev) => [...prev, { id: "task_" + Date.now(), text: text.trim(), slot, done: false }]);
  };

  const handleDeleteTask = (id: string) => {
    playSound("click");
    setTodayTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Flashcards Filtering & Mastery
  const allFlashcards = useMemo(() => {
    return [...CHAPTER_WISE_FLASHCARDS, ...customFlashcards];
  }, [customFlashcards]);

  const availableFlashcardChapters = useMemo(() => {
    const chapters = new Set<string>();
    allFlashcards.forEach((fc) => {
      if (selectedFlashcardSubject === "All Subjects" || fc.subject === selectedFlashcardSubject) {
        chapters.add(fc.chapter);
      }
    });
    return Array.from(chapters);
  }, [allFlashcards, selectedFlashcardSubject]);

  const filteredFlashcards = useMemo(() => {
    return allFlashcards.filter((fc) => {
      const matchSubject = selectedFlashcardSubject === "All Subjects" || fc.subject === selectedFlashcardSubject;
      const matchChapter = selectedFlashcardChapter === "All Chapters" || fc.chapter === selectedFlashcardChapter;
      return matchSubject && matchChapter;
    });
  }, [allFlashcards, selectedFlashcardSubject, selectedFlashcardChapter]);

  const currentCard = filteredFlashcards[flashcardIndex] || filteredFlashcards[0];
  const isCurrentCardMastered = currentCard ? !!masteredFlashcardIds[currentCard.id] : false;

  const toggleFlashcardMastery = () => {
    if (!currentCard) return;
    triggerHaptic(25);
    const cardId = currentCard.id;
    const willMaster = !masteredFlashcardIds[cardId];

    setMasteredFlashcardIds((prev) => ({ ...prev, [cardId]: willMaster }));

    if (willMaster) {
      playSound("done");
      showXpToast(20, "+20 XP Card Mastered");
      triggerConfetti();
      // Auto move to next card on mastery
      setIsFlashcardFlipped(false);
      setFlashcardIndex((prev) => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
    } else {
      playSound("undone");
      showXpToast(-20, "-20 XP Card Reopened");
    }
  };

  const handleAddCustomFlashcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFlashcardForm.frontQuestion || !newFlashcardForm.backAnswer) return;
    const fc: FlashcardItem = {
      id: "fc_custom_" + Date.now(),
      subject: newFlashcardForm.subject,
      chapter: newFlashcardForm.chapter,
      topic: newFlashcardForm.topic,
      frontQuestion: newFlashcardForm.frontQuestion,
      backAnswer: newFlashcardForm.backAnswer,
      hintOrFormula: newFlashcardForm.hintOrFormula,
      difficulty: newFlashcardForm.difficulty
    };
    setCustomFlashcards((prev) => [fc, ...prev]);
    playSound("done");
    showXpToast(40, "+40 XP Custom Flashcard Created");
    triggerConfetti();
    setShowAddFlashcardModal(false);
    setNewFlashcardForm({
      subject: "Mathematics",
      chapter: "Introduction to Trigonometry",
      topic: "Trigonometric Identities",
      frontQuestion: "",
      backAnswer: "",
      hintOrFormula: "",
      difficulty: "High Yield"
    });
  };

  // HOTS Questions
  const allQuestions = useMemo(() => {
    return [...BOARD_LEVEL_QUESTIONS, ...customQuestions];
  }, [customQuestions]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchType = selectedQuestionFilter === "all" ? true : q.type.toLowerCase().includes(selectedQuestionFilter.toLowerCase());
      const matchSub = selectedSubjectFilter === "all" ? true : q.subject.toLowerCase().includes(selectedSubjectFilter.toLowerCase());
      const matchSearch = searchQuestionQuery
        ? q.question.toLowerCase().includes(searchQuestionQuery.toLowerCase()) ||
          q.chapter.toLowerCase().includes(searchQuestionQuery.toLowerCase()) ||
          q.topic.toLowerCase().includes(searchQuestionQuery.toLowerCase())
        : true;
      return matchType && matchSub && matchSearch;
    });
  }, [allQuestions, selectedQuestionFilter, selectedSubjectFilter, searchQuestionQuery]);

  const handleAddCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionForm.question || !newQuestionForm.correctAnswer) return;
    const q: BoardQuestion = {
      id: "custom_q_" + Date.now(),
      type: newQuestionForm.type,
      subject: newQuestionForm.subject,
      chapter: newQuestionForm.chapter,
      topic: newQuestionForm.topic,
      difficulty: newQuestionForm.difficulty,
      question: newQuestionForm.question,
      correctAnswer: newQuestionForm.correctAnswer,
      explanation: newQuestionForm.explanation || newQuestionForm.correctAnswer,
      markingSchemeSteps: [newQuestionForm.markingStep1, newQuestionForm.markingStep2].filter(Boolean)
    };
    setCustomQuestions((prev) => [q, ...prev]);
    playSound("done");
    showXpToast(40, "+40 XP Proof Added to Bank");
    triggerConfetti();
    setShowQuestionModal(false);
    setNewQuestionForm({
      type: "HOTS (RD/RS Level)",
      subject: "Mathematics",
      chapter: "Introduction to Trigonometry",
      topic: "Trigonometric Identities",
      difficulty: "Topper Level (100%)",
      question: "",
      correctAnswer: "",
      explanation: "",
      markingStep1: "1 Mark: Correct formula selection and initial step.",
      markingStep2: "2 Marks: Simplification and final proof."
    });
  };

  // Progress stats
  const { testSeriesTotal, testSeriesCompleted, testSeriesPercentage } = useMemo(() => {
    let total = 0;
    let done = 0;
    TEST_SERIES_I_SCHEDULE.forEach((exam) => {
      exam.chapters.forEach((ch, chIdx) => {
        ch.topics.forEach((t, tIdx) => {
          total++;
          const key = `${exam.id}_${chIdx}_${tIdx}`;
          if (completedTestSeriesTopics[key]) done++;
        });
      });
    });
    const pct = Math.round((done / (total || 1)) * 100);
    return { testSeriesTotal: total, testSeriesCompleted: done, testSeriesPercentage: pct };
  }, [completedTestSeriesTopics]);

  const { totalTopics, completedCount, overallSyllabusPercentage } = useMemo(() => {
    let total = 0;
    let completed = 0;
    CBSE_SUBJECTS.forEach((sub) => {
      sub.chapters.forEach((ch) => {
        ch.topics.forEach((top) => {
          total++;
          if (completedTopicIds[top.id]) completed++;
        });
      });
    });
    const pct = Math.round((completed / (total || 1)) * 100);
    return { totalTopics: total, completedCount: completed, overallSyllabusPercentage: pct };
  }, [completedTopicIds]);

  const selectedSubject = useMemo(() => {
    return CBSE_SUBJECTS.find((s) => s.id === selectedSubjectId) || CBSE_SUBJECTS[0];
  }, [selectedSubjectId]);

  // Export / Import Backup
  const handleExportBackup = () => {
    const backup = {
      version: "2027.8.0-mobile-pro",
      exportDate: new Date().toISOString(),
      completedTopicIds,
      completedTestSeriesTopics,
      completedMapItems,
      streak,
      todayTasks,
      customFlashcards,
      masteredFlashcardIds,
      customQuestions,
      totalFocusMins
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cbse-lsa-study-snapshot-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    playSound("done");
    triggerConfetti();
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target?.result as string);
        if (data.completedTopicIds) setCompletedTopicIds(data.completedTopicIds);
        if (data.completedTestSeriesTopics) setCompletedTestSeriesTopics(data.completedTestSeriesTopics);
        if (data.completedMapItems) setCompletedMapItems(data.completedMapItems);
        if (data.streak !== undefined) setStreak(data.streak);
        if (data.todayTasks) setTodayTasks(data.todayTasks);
        if (data.customFlashcards) setCustomFlashcards(data.customFlashcards);
        if (data.masteredFlashcardIds) setMasteredFlashcardIds(data.masteredFlashcardIds);
        if (data.customQuestions) setCustomQuestions(data.customQuestions);
        if (data.totalFocusMins !== undefined) setTotalFocusMins(data.totalFocusMins);
        playSound("levelup");
        triggerConfetti();
        setIsBackupModalOpen(false);
        alert("🎉 Study snapshot loaded successfully! All your progress is restored.");
      } catch {
        alert("❌ Invalid backup file format.");
      }
    };
    reader.readAsText(file);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#090d16] text-white font-sans">
        <div className="text-center space-y-3">
          <div className="animate-spin h-9 w-9 border-3 border-amber-500 border-t-transparent rounded-full mx-auto" />
          <p className="text-xs text-slate-400 font-mono tracking-wider">Loading CBSE Class 10 Command Center...</p>
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen pb-24 md:pb-12 transition-colors duration-150 ${isDark ? "bg-[#090d16] text-slate-100" : "bg-[#f8fafc] text-slate-900"}`}>
      
      {/* FLOATING XP GAIN/LOSS TOASTS */}
      <div className="fixed top-16 right-4 z-50 pointer-events-none space-y-2">
        {xpToasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-toast px-3.5 py-1.5 rounded-full text-xs font-bold font-mono shadow-lg flex items-center gap-1.5 border backdrop-blur-md ${
              toast.amount > 0
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                : "bg-rose-500/20 border-rose-500/50 text-rose-300"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{toast.text}</span>
          </div>
        ))}
      </div>

      {/* CONFETTI LAYER */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confetti.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.color,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
          />
        ))}
      </div>

      {/* =========================================================================
          STICKY HEADER WITH LIVE XP / LEVEL BAR & QUICK CONTROLS
          ========================================================================= */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-xl px-3.5 sm:px-6 py-2.5 transition-colors ${
        isDark ? "border-slate-800/80 bg-[#090d16]/90 text-white" : "border-slate-200/90 bg-white/90 text-slate-900 shadow-xs"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          
          {/* LOGO & TITLE */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs sm:text-sm shadow-md shrink-0">
              100
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h1 className="text-xs sm:text-sm font-bold tracking-tight truncate">
                  CBSE Class 10 OS
                </h1>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold border shrink-0 ${
                  isDark ? "bg-amber-950/50 text-amber-300 border-amber-800/60" : "bg-amber-50 text-amber-900 border-amber-300"
                }`}>
                  2026–27
                </span>
              </div>
              <p className={`text-[10px] sm:text-xs truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Lakshmipat Singhania Academy
              </p>
            </div>
          </div>

          {/* GAMIFIED STATS PILLS */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* LEVEL & XP PROGRESS BAR */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-mono font-bold ${
              isDark ? "bg-[#111827] border-slate-800 text-amber-400" : "bg-slate-50 border-slate-200 text-amber-900"
            }`}>
              <span className="text-xs">{currentLevelInfo.badge}</span>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 leading-none">
                  Lvl {currentLevelInfo.level}
                </span>
                <span className="text-[10px] font-bold leading-tight text-amber-500">
                  {totalXp} XP
                </span>
              </div>
              <div className="w-10 sm:w-16 h-1.5 rounded-full overflow-hidden bg-slate-700/50 ml-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
                  style={{ width: `${levelProgressPercent}%` }}
                />
              </div>
            </div>

            {/* STREAK */}
            <div className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-[11px] font-mono font-bold ${
              isDark ? "bg-[#111827] border-slate-800 text-orange-400" : "bg-white border-slate-200 text-orange-600 shadow-xs"
            }`}>
              <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{streak}d</span>
            </div>

            {/* SOUND MUTE / UNMUTE */}
            <button
              onClick={() => {
                const nextMute = !isSoundMuted;
                setIsSoundMuted(nextMute);
                if (!nextMute) playSound("click");
              }}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                isDark ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
              title={isSoundMuted ? "Unmute Sound" : "Mute Sound"}
              aria-label="Toggle Sound"
            >
              {isSoundMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {/* THEME TOGGLE */}
            <button
              onClick={() => {
                playSound("click");
                setTheme(isDark ? "light" : "dark");
              }}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                isDark ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
              title="Toggle Light/Dark Mode"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* BACKUP BUTTON */}
            <button
              onClick={() => {
                playSound("click");
                setIsBackupModalOpen(true);
              }}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer hidden sm:flex ${
                isDark ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
              title="Backup & Restore Data"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          DESKTOP & TABLET HORIZONTAL TAB NAVIGATION
          ========================================================================= */}
      <nav className={`border-b px-3.5 sm:px-6 py-2 overflow-x-auto no-scrollbar hidden md:flex items-center gap-1.5 transition-colors ${
        isDark ? "border-slate-800/80 bg-[#0d1322]/70" : "border-slate-200 bg-white/80"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 w-full">
          {[
            { id: "test_series", label: "Test Series I (Sept 14)", icon: Calendar },
            { id: "today", label: "Daily Focus & Tasks", icon: Target },
            { id: "syllabus", label: "NCERT Syllabus Tracker", icon: BookOpen },
            { id: "flashcards", label: "Flashcards Engine", icon: BookMarked },
            { id: "questions", label: "RD Sharma / HOTS Bank", icon: Zap },
            { id: "experiments", label: "3D Science Labs (PhET)", icon: FlaskConical },
            { id: "reactions", label: "Reactions & Map Work", icon: MapPin },
            { id: "roadmap", label: "100% Board Roadmap", icon: Compass }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSound("click");
                  setActiveTab(tab.id as any);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? isDark
                      ? "bg-slate-100 text-slate-950 font-bold shadow-sm"
                      : "bg-slate-900 text-white font-bold shadow-sm"
                    : isDark
                    ? "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* =========================================================================
          MAIN APPLICATION CONTENT
          ========================================================================= */}
      <main className="max-w-5xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6">

        {/* ===================== TAB 0: TEST SERIES I (SEPT 14 - SEPT 26) ===================== */}
        {activeTab === "test_series" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            
            {/* HERO ACADEMY EXAM BANNER */}
            <div className={`p-4 sm:p-6 rounded-2xl border transition-all relative overflow-hidden ${
              isDark ? "bg-[#111827] border-slate-800 shadow-md" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
                      isDark ? "bg-amber-950/50 text-amber-300 border-amber-800/60" : "bg-amber-50 text-amber-900 border-amber-300"
                    }`}>
                      LAKSHMIPAT SINGHANIA ACADEMY
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Class X • Test Series I</span>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-bold tracking-tight">
                    Next Exam: <span className="text-amber-500">{activeExam.subject}</span> ({activeExam.displayDate})
                  </h2>

                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Faculty: <strong className={isDark ? "text-slate-200" : "text-slate-800"}>{activeExam.teachers}</strong> • Code: {activeExam.code}
                  </p>
                </div>

                {/* RESPONSIVE COUNTDOWN CLOCK CARD */}
                <div className={`w-full lg:w-auto p-3.5 sm:p-4 rounded-xl border text-center space-y-1.5 ${
                  isDark ? "bg-[#0b0f19] border-amber-500/30 text-amber-400" : "bg-amber-50/80 border-amber-200 text-amber-950"
                }`}>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500">Live Time Remaining</p>
                  
                  <div className="grid grid-cols-4 gap-1.5 font-mono text-center">
                    <div className={`p-1.5 rounded-lg ${isDark ? "bg-[#111827]" : "bg-white"} border ${isDark ? "border-slate-800" : "border-amber-200"}`}>
                      <span className="block text-lg sm:text-xl font-black">{activeExamCountdown.days}</span>
                      <span className="text-[9px] uppercase opacity-70">Days</span>
                    </div>
                    <div className={`p-1.5 rounded-lg ${isDark ? "bg-[#111827]" : "bg-white"} border ${isDark ? "border-slate-800" : "border-amber-200"}`}>
                      <span className="block text-lg sm:text-xl font-black">{activeExamCountdown.hours}</span>
                      <span className="text-[9px] uppercase opacity-70">Hours</span>
                    </div>
                    <div className={`p-1.5 rounded-lg ${isDark ? "bg-[#111827]" : "bg-white"} border ${isDark ? "border-slate-800" : "border-amber-200"}`}>
                      <span className="block text-lg sm:text-xl font-black">{activeExamCountdown.mins}</span>
                      <span className="text-[9px] uppercase opacity-70">Mins</span>
                    </div>
                    <div className={`p-1.5 rounded-lg ${isDark ? "bg-[#111827]" : "bg-white"} border ${isDark ? "border-slate-800" : "border-amber-200"}`}>
                      <span className="block text-lg sm:text-xl font-black text-amber-500">{activeExamCountdown.secs}.{activeExamCountdown.ms.toString().padStart(2, "0")}</span>
                      <span className="text-[9px] uppercase opacity-70">Secs</span>
                    </div>
                  </div>

                  <p className={`text-[10px] font-mono font-semibold pt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Series Mastered: {testSeriesPercentage}% ({testSeriesCompleted}/{testSeriesTotal} Topics)
                  </p>
                </div>
              </div>
            </div>

            {/* TEST SERIES I DATE SHEET TABS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {TEST_SERIES_I_SCHEDULE.map((exam) => {
                const isSelected = exam.id === selectedExamId;
                const examCountdown = calculatePrecisionCountdown(exam.date);
                return (
                  <button
                    key={exam.id}
                    onClick={() => {
                      playSound("click");
                      setSelectedExamId(exam.id);
                    }}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1.5 ${
                      isSelected
                        ? isDark
                          ? "bg-slate-100 text-slate-950 border-white font-bold shadow-sm"
                          : "bg-slate-900 text-white border-slate-900 font-bold shadow-sm"
                        : isDark
                        ? "bg-[#111827] border-slate-800 text-slate-300 hover:border-slate-700"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center text-[10px] opacity-75 font-mono mb-0.5">
                        <span>{exam.date.slice(5)}</span>
                      </div>
                      <h4 className="text-xs font-bold truncate">{exam.subject}</h4>
                    </div>

                    <div className="text-[10px] font-mono opacity-85">
                      {examCountdown.days}d {examCountdown.hours}h left
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE EXAM CHAPTERS & TOPIC CHECKLIST */}
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-4 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-slate-800">
                <div>
                  <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{activeExam.subject} — Prescribed Syllabus</span>
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {activeExam.syllabusSummary}
                  </p>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border shrink-0 ${
                  isDark ? "bg-[#0b0f19] border-slate-800 text-amber-400" : "bg-slate-50 border-slate-200 text-amber-800"
                }`}>
                  Exam Date: {activeExam.displayDate}
                </span>
              </div>

              {/* CHAPTERS BREAKDOWN */}
              <div className="space-y-3">
                {activeExam.chapters.map((ch, chIdx) => (
                  <div
                    key={chIdx}
                    className={`p-3.5 sm:p-4 rounded-xl border space-y-2.5 ${
                      isDark ? "bg-[#0b0f19] border-slate-800/90" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <h4 className="text-xs font-bold flex items-center gap-2">
                      {ch.category && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-800 text-slate-300">
                          {ch.category}
                        </span>
                      )}
                      <span>{ch.title}</span>
                    </h4>

                    <div className="space-y-1.5 pt-1">
                      {ch.topics.map((topic, tIdx) => {
                        const key = `${activeExam.id}_${chIdx}_${tIdx}`;
                        const isDone = completedTestSeriesTopics[key] || false;
                        return (
                          <div
                            key={tIdx}
                            onClick={() => toggleTestSeriesTopic(key)}
                            className={`p-2.5 rounded-lg border flex items-center justify-between gap-2.5 cursor-pointer transition-all min-h-[44px] ${
                              isDone
                                ? isDark
                                  ? "bg-amber-950/25 border-amber-800/40 text-amber-200"
                                  : "bg-amber-50 border-amber-200 text-amber-950"
                                : isDark
                                ? "bg-[#111827] border-slate-800 text-slate-300 hover:border-slate-700"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                              ) : (
                                <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                              )}
                              <p className={`text-xs font-medium leading-snug ${isDone ? "line-through opacity-60" : ""}`}>
                                {topic}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-amber-500 font-bold shrink-0">+25 XP</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* SAMPLE TEST SERIES QUESTIONS FOR THIS EXAM */}
              <div className="pt-3 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> High-Probability Board Sample Questions
                </h4>

                <div className="space-y-2.5">
                  {activeExam.samplePaperQuestions.map((sq, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 sm:p-4 rounded-xl border space-y-2 ${
                        isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-amber-500 font-mono">Q{sq.qNo}. {sq.section}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-800 text-slate-300">
                          {sq.marks} Mark{sq.marks > 1 ? "s" : ""}
                        </span>
                      </div>

                      <p className="text-xs font-semibold leading-relaxed">{sq.question}</p>

                      <div className={`p-2.5 rounded-lg border text-xs font-mono leading-relaxed ${
                        isDark ? "bg-[#111827] border-emerald-800/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                      }`}>
                        <strong>Model Solution:</strong> {sq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================== TAB 1: DAILY FOCUS ROUTINE & POMODORO ===================== */}
        {activeTab === "today" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            
            {/* HERO STUDY CARD */}
            <div className={`p-4 sm:p-6 rounded-2xl border transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
                      isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}>
                      DAILY TIME-BLOCK
                    </span>
                    <div className={`flex p-0.5 rounded-lg border ${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                      <button
                        onClick={() => {
                          playSound("click");
                          setDayType("weekday");
                        }}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                          dayType === "weekday"
                            ? isDark
                              ? "bg-slate-800 text-white font-bold"
                              : "bg-white text-slate-900 font-bold shadow-xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        School Day
                      </button>
                      <button
                        onClick={() => {
                          playSound("click");
                          setDayType("weekend");
                        }}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                          dayType === "weekend"
                            ? isDark
                              ? "bg-slate-800 text-white font-bold"
                              : "bg-white text-slate-900 font-bold shadow-xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        Sunday / Holiday
                      </button>
                    </div>
                  </div>

                  <h2 className="text-base sm:text-xl font-bold tracking-tight">
                    {dayType === "weekday" ? "School (7:30–2:30) • Tuition (5:00–7:30) • Prime Self-Study (8:00–11:30)" : "Sunday 6-Hour Mock & Practice Block"}
                  </h2>
                </div>

                {/* STATS TILES */}
                <div className={`flex items-center gap-4 p-3 rounded-xl border shrink-0 ${
                  isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-amber-500 font-mono">{overallSyllabusPercentage}%</p>
                    <p className={`text-[9px] uppercase font-bold mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Syllabus Grip
                    </p>
                  </div>
                  <div className={`w-px h-8 ${isDark ? "bg-slate-800" : "bg-slate-200"}`} />
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-blue-500 font-mono">{totalFocusMins}m</p>
                    <p className={`text-[9px] uppercase font-bold mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Focus Logged
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-COLUMN FOCUS TIMER & PRIORITIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              
              {/* CLEAN 25M FOCUS TIMER */}
              <div className={`p-5 sm:p-6 rounded-2xl border flex flex-col items-center justify-center text-center space-y-4 transition-colors ${
                isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                  <Clock className="w-4 h-4" />
                  <span>25-Minute Focus Block (+50 XP)</span>
                </div>

                <div className={`w-36 h-36 rounded-full border-2 flex flex-col items-center justify-center ${
                  isDark ? "border-slate-800 bg-[#0b0f19]" : "border-slate-200 bg-slate-50"
                }`}>
                  <p className="text-3xl font-black font-mono tracking-tight">{formattedPomoTime}</p>
                  <p className={`text-[10px] font-medium mt-0.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {isPomoActive ? "Session Active" : "Ready"}
                  </p>
                </div>

                <div className="flex gap-2.5 w-full max-w-xs">
                  <button
                    onClick={() => {
                      triggerHaptic(20);
                      playSound("click");
                      setIsPomoActive(!isPomoActive);
                    }}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all min-h-[44px] ${
                      isPomoActive
                        ? "bg-amber-600 text-white shadow-md"
                        : isDark
                        ? "bg-slate-100 text-slate-950 hover:bg-white"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isPomoActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPomoActive ? "Pause" : "Start Focus Block"}
                  </button>

                  <button
                    onClick={() => {
                      playSound("click");
                      setIsPomoActive(false);
                      setPomoSeconds(25 * 60);
                    }}
                    className={`p-2.5 border rounded-xl cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      isDark ? "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* REAL DAILY TASKS */}
              <div className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between space-y-3.5 transition-colors ${
                isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className={`flex items-center justify-between border-b pb-2.5 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                  <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Today&apos;s Targets (+30 XP)
                  </h3>
                  <button
                    onClick={handleAddNewTask}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1 border min-h-[36px] ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-200 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Task
                  </button>
                </div>

                <div className="space-y-2 overflow-y-auto max-h-60">
                  {todayTasks.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => handleToggleTask(t.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-2.5 cursor-pointer transition-all min-h-[44px] ${
                        t.done
                          ? isDark
                            ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-300"
                            : "bg-emerald-50 border-emerald-200 text-emerald-900"
                          : isDark
                          ? "bg-[#0b0f19] border-slate-800 hover:border-slate-700"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {t.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                        )}
                        <div className="min-w-0">
                          <p className={`text-xs font-medium leading-snug truncate ${t.done ? "line-through opacity-60" : ""}`}>
                            {t.text}
                          </p>
                          <span className={`text-[10px] font-mono ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                            {t.slot}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteTask(t.id);
                        }}
                        className={`p-1.5 hover:text-red-500 cursor-pointer shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`}
                        title="Delete Task"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className={`pt-2 border-t text-[11px] flex justify-between items-center ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"}`}>
                  <span>{todayTasks.filter((t) => t.done).length} of {todayTasks.length} Done</span>
                  <span className="text-amber-500 font-bold">+30 XP each</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: FULL 6-SUBJECT NCERT TRACKER ===================== */}
        {activeTab === "syllabus" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h2 className="text-base sm:text-xl font-bold">2026–2027 Complete NCERT Syllabus Mastery</h2>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Mathematics, Science, Social Science, Information Technology 402, English, and Hindi.
              </p>
            </div>

            {/* SUBJECT SELECTOR PILLS */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {CBSE_SUBJECTS.map((sub) => {
                const isSelected = sub.id === selectedSubjectId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      playSound("click");
                      setSelectedSubjectId(sub.id);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border min-h-[40px] ${
                      isSelected
                        ? isDark
                          ? "bg-slate-100 text-slate-950 border-white font-black"
                          : "bg-slate-900 text-white border-slate-900 font-black shadow-sm"
                        : isDark
                        ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    {sub.name}
                  </button>
                );
              })}
            </div>

            {/* CHAPTERS ACCORDION */}
            <div className="space-y-2.5 sm:space-y-3">
              {selectedSubject.chapters.map((chapter) => {
                const isExpanded = expandedChapterIds[chapter.id] || false;
                const chapterCompletedTopics = chapter.topics.filter((t) => completedTopicIds[t.id]).length;
                const chapterTotalTopics = chapter.topics.length;
                const isAllDone = chapterCompletedTopics === chapterTotalTopics && chapterTotalTopics > 0;

                return (
                  <div
                    key={chapter.id}
                    className={`rounded-2xl border p-3.5 sm:p-4 transition-all ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div
                      onClick={() => toggleChapterExpand(chapter.id)}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 cursor-pointer select-none"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono font-bold text-amber-500">
                            {chapter.ncertChapterNo ? `Ch ${chapter.ncertChapterNo}` : "Unit"}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold">{chapter.name}</h4>
                          {isAllDone && (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold border border-emerald-500/20">
                              100% Done
                            </span>
                          )}
                        </div>
                        <p className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {chapterCompletedTopics} of {chapterTotalTopics} Sub-Topics Mastered
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <div className={`w-20 sm:w-28 h-1.5 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                          <div
                            className="h-full bg-amber-500 rounded-full transition-all duration-300"
                            style={{ width: `${Math.round((chapterCompletedTopics / (chapterTotalTopics || 1)) * 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-500">
                          {Math.round((chapterCompletedTopics / (chapterTotalTopics || 1)) * 100)}%
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>

                    {/* TOPICS BREAKDOWN */}
                    {isExpanded && (
                      <div className={`mt-3 pt-3 border-t space-y-2 animate-fade-in ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                        {chapter.topics.map((topic) => {
                          const isChecked = completedTopicIds[topic.id] || false;
                          return (
                            <div
                              key={topic.id}
                              onClick={() => toggleTopic(topic.id)}
                              className={`p-2.5 rounded-xl border flex items-center justify-between gap-2.5 cursor-pointer transition-all min-h-[44px] ${
                                isChecked
                                  ? isDark
                                    ? "bg-amber-950/25 border-amber-800/40 text-amber-200"
                                    : "bg-amber-50 border-amber-200 text-amber-950"
                                  : isDark
                                  ? "bg-[#0b0f19] border-slate-800 text-slate-300 hover:border-slate-700"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {isChecked ? (
                                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                                ) : (
                                  <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                                )}
                                <div className="min-w-0">
                                  <span className="text-[10px] font-mono font-bold opacity-70 mr-1.5">
                                    Sec {topic.sectionCode}
                                  </span>
                                  <span className="text-xs font-medium">{topic.title}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                {topic.isImportantForBoards && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold font-mono bg-red-500/10 text-red-500 border border-red-500/20">
                                    High Yield
                                  </span>
                                )}
                                <span className="text-[10px] font-mono text-amber-500 font-bold">+25 XP</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================== TAB 3: CHAPTER FLASHCARDS ENGINE ===================== */}
        {activeTab === "flashcards" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-amber-500" />
                  <h2 className="text-base sm:text-xl font-bold">Active Recall Flashcards Engine</h2>
                </div>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Filter by subject and chapter to test core formulas, reactions, and historical dates.
                </p>
              </div>

              <button
                onClick={() => setShowAddFlashcardModal(true)}
                className={`px-3.5 py-2 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs min-h-[40px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Plus className="w-3.5 h-3.5" /> Create Custom Card
              </button>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2 items-center">
              <select
                className={`p-2.5 rounded-xl text-xs border font-medium min-h-[40px] ${
                  isDark ? "bg-[#111827] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
                value={selectedFlashcardSubject}
                onChange={(e) => {
                  setSelectedFlashcardSubject(e.target.value);
                  setSelectedFlashcardChapter("All Chapters");
                  setFlashcardIndex(0);
                  setIsFlashcardFlipped(false);
                }}
              >
                <option value="All Subjects">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Social Science">Social Science</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>

              <select
                className={`p-2.5 rounded-xl text-xs border font-medium min-h-[40px] max-w-[220px] truncate ${
                  isDark ? "bg-[#111827] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
                value={selectedFlashcardChapter}
                onChange={(e) => {
                  setSelectedFlashcardChapter(e.target.value);
                  setFlashcardIndex(0);
                  setIsFlashcardFlipped(false);
                }}
              >
                <option value="All Chapters">All Chapters</option>
                {availableFlashcardChapters.map((ch, idx) => (
                  <option key={idx} value={ch}>{ch}</option>
                ))}
              </select>

              <span className="text-xs font-mono text-slate-400 ml-auto font-bold">
                {filteredFlashcards.length} Cards in Deck
              </span>
            </div>

            {/* 3D INTERACTIVE FLASHCARD */}
            {filteredFlashcards.length > 0 && currentCard ? (
              <div className="space-y-4">
                <div
                  onClick={() => {
                    playSound("flip");
                    triggerHaptic(15);
                    setIsFlashcardFlipped(!isFlashcardFlipped);
                  }}
                  className={`p-6 sm:p-10 rounded-3xl border text-center cursor-pointer transition-all select-none min-h-[260px] sm:min-h-[300px] flex flex-col justify-between items-center ${
                    isFlashcardFlipped
                      ? isDark
                        ? "bg-[#0b0f19] border-emerald-500/50 text-emerald-200 shadow-lg"
                        : "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-md"
                      : isDark
                      ? "bg-[#111827] border-slate-800 text-white hover:border-amber-500/50 shadow-md"
                      : "bg-white border-slate-200 text-slate-900 hover:border-amber-500 shadow-sm"
                  }`}
                >
                  <div className="flex justify-between items-center w-full text-xs font-mono opacity-80">
                    <span className="font-bold">Card {flashcardIndex + 1} of {filteredFlashcards.length}</span>
                    <span className="font-bold truncate max-w-[200px]">{currentCard.subject} • {currentCard.chapter}</span>
                  </div>

                  <div className="space-y-3 py-4 max-w-2xl">
                    <p className="text-[10px] font-bold uppercase tracking-widest font-mono text-amber-500">
                      {isFlashcardFlipped ? "Verified Answer & Model Scheme" : "Question Statement (Tap to Flip)"}
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold leading-relaxed whitespace-pre-line">
                      {isFlashcardFlipped ? currentCard.backAnswer : currentCard.frontQuestion}
                    </h3>
                    {isFlashcardFlipped && currentCard.hintOrFormula && (
                      <p className="text-xs font-mono text-amber-500 pt-1 font-semibold">
                        Key Rule: {currentCard.hintOrFormula}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono opacity-70">
                    <span>{isFlashcardFlipped ? "Tap card to flip back" : "Tap anywhere to flip card"}</span>
                  </div>
                </div>

                {/* FLASHCARD CONTROLS */}
                <div className="flex flex-wrap justify-between items-center gap-2.5">
                  <button
                    onClick={() => {
                      playSound("click");
                      setIsFlashcardFlipped(false);
                      setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                    }}
                    className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold cursor-pointer min-h-[44px] flex items-center gap-1 ${
                      isDark ? "bg-[#111827] border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleFlashcardMastery}
                      className={`px-4 py-2.5 rounded-xl font-black text-xs cursor-pointer shadow-sm min-h-[44px] flex items-center gap-1.5 transition-all ${
                        isCurrentCardMastered
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                          : isDark
                          ? "bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isCurrentCardMastered ? "Mastered (+20 XP)" : "Mark Mastered (+20 XP)"}</span>
                    </button>

                    <button
                      onClick={() => {
                        playSound("click");
                        setIsFlashcardFlipped(false);
                        setFlashcardIndex((prev) => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                      }}
                      className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold cursor-pointer min-h-[44px] flex items-center gap-1 ${
                        isDark ? "bg-[#111827] border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 border rounded-2xl text-center space-y-3">
                <p className="text-sm font-semibold">No flashcards in this filtered section.</p>
                <button
                  onClick={() => setShowAddFlashcardModal(true)}
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                >
                  Create First Flashcard
                </button>
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 4: RD SHARMA / HOTS SOLUTIONS ===================== */}
        {activeTab === "questions" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="space-y-0.5">
                <h2 className="text-base sm:text-xl font-bold">RD Sharma, RS Aggarwal & Competency Bank</h2>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Rigorous proofs, case studies, and official step-by-step CBSE marking schemes.
                </p>
              </div>

              <button
                onClick={() => setShowQuestionModal(true)}
                className={`px-3.5 py-2 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs min-h-[40px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Plus className="w-3.5 h-3.5" /> Add Problem / Proof
              </button>
            </div>

            {/* SEARCH & FILTERS */}
            <div className="flex flex-wrap gap-2 items-center">
              <select
                className={`p-2.5 rounded-xl text-xs border font-medium min-h-[40px] ${
                  isDark ? "bg-[#111827] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
                value={selectedQuestionFilter}
                onChange={(e) => setSelectedQuestionFilter(e.target.value)}
              >
                <option value="all">All Problem Types</option>
                <option value="HOTS">RD / RS Level HOTS</option>
                <option value="Competency">CBSE Competency Based</option>
                <option value="Case Study">Case Studies</option>
                <option value="Assertion">Assertion & Reasoning</option>
              </select>

              <select
                className={`p-2.5 rounded-xl text-xs border font-medium min-h-[40px] ${
                  isDark ? "bg-[#111827] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
                value={selectedSubjectFilter}
                onChange={(e) => setSelectedSubjectFilter(e.target.value)}
              >
                <option value="all">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Social Science">Social Science</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>

              <input
                type="text"
                placeholder="Search trigonometry, quadratic, reflection..."
                className={`flex-1 min-w-[160px] p-2.5 rounded-xl text-xs border min-h-[40px] ${
                  isDark ? "bg-[#111827] border-slate-800 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-xs"
                }`}
                value={searchQuestionQuery}
                onChange={(e) => setSearchQuestionQuery(e.target.value)}
              />
            </div>

            {/* QUESTIONS LIST */}
            <div className="space-y-3.5 sm:space-y-4">
              {filteredQuestions.map((q) => {
                const isRevealed = revealedQuestionIds[q.id] ?? true;
                return (
                  <div
                    key={q.id}
                    className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition-colors ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${
                          isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}>
                          {q.type}
                        </span>
                        <span className="text-xs font-semibold">{q.subject} • {q.chapter}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-slate-800 text-slate-300">
                          {q.difficulty}
                        </span>
                        <button
                          onClick={() => {
                            playSound("click");
                            setRevealedQuestionIds((prev) => ({ ...prev, [q.id]: !isRevealed }));
                          }}
                          className={`px-2.5 py-1 rounded-md border text-[11px] font-mono flex items-center gap-1 cursor-pointer min-h-[32px] ${
                            isDark ? "bg-[#0b0f19] border-slate-700 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                          }`}
                        >
                          {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          <span>{isRevealed ? "Hide" : "Show Solution"}</span>
                        </button>
                      </div>
                    </div>

                    {q.caseContext && (
                      <div className={`p-3 rounded-xl text-xs leading-relaxed border italic ${
                        isDark ? "bg-[#0b0f19] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}>
                        <strong>Case Scenario:</strong> {q.caseContext}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm font-semibold leading-relaxed whitespace-pre-line">{q.question}</p>

                    {/* MODEL SOLUTION & STEP MARKING BOX */}
                    {isRevealed && (
                      <div className={`p-3.5 sm:p-4 rounded-xl border space-y-3 animate-fade-in ${
                        isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"
                      }`}>
                        <div className={`p-2.5 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs ${
                          isDark ? "bg-[#111827] border-emerald-800/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                        }`}>
                          <span className="flex items-center gap-1.5 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>Final Answer / Result:</span>
                          </span>
                          <span className="font-bold text-amber-500 break-words">{q.correctAnswer}</span>
                        </div>

                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-emerald-500 uppercase font-mono tracking-wider">
                            Full Model Derivation & Steps:
                          </p>
                          <p className="text-xs leading-relaxed whitespace-pre-line">{q.explanation}</p>
                        </div>

                        {q.markingSchemeSteps && q.markingSchemeSteps.length > 0 && (
                          <div className={`space-y-1 pt-2 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                            <p className="text-[10px] font-bold text-amber-500 uppercase font-mono">
                              CBSE Examiner Step Mark Allotment:
                            </p>
                            <ul className="space-y-0.5 text-xs font-mono opacity-80">
                              {q.markingSchemeSteps.map((step, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-1.5">
                                  <span className="text-amber-500">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* ===================== TAB 5: 3D VIRTUAL SCIENCE LABS ===================== */}
        {activeTab === "experiments" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber-500" />
                <h2 className="text-base sm:text-xl font-bold">Virtual 3D Science Labs & Math Visualizers</h2>
              </div>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Interactive physics, chemistry, and trigonometry labs (PhET Colorado & GeoGebra 3D).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INTERACTIVE_SIMULATIONS.map((sim) => (
                <div
                  key={sim.id}
                  className={`p-4 sm:p-5 rounded-2xl border flex flex-col justify-between space-y-3 transition-colors ${
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${
                        isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-800"
                      }`}>
                        {sim.provider}
                      </span>
                      <span className="font-semibold text-xs text-slate-400">{sim.subject} • {sim.topic}</span>
                    </div>

                    <h3 className="text-sm font-bold">{sim.title}</h3>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {sim.description}
                    </p>
                  </div>

                  <a
                    href={sim.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2.5 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all min-h-[44px] ${
                      isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Launch 3D Simulation
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB 6: REACTIONS & MAP WORK ===================== */}
        {activeTab === "reactions" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h2 className="text-base sm:text-xl font-bold">Chemistry Reactions & Mandatory SST Map Work</h2>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Color changes, gas emissions, and high-frequency map locations for Class 10 Boards.
              </p>
            </div>

            {/* REACTIONS LIST */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" /> Top Chemistry Reactions (Color Changes & Precipitates)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {ESSENTIAL_CHEMISTRY_REACTIONS.map((rxn, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border space-y-2 ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <h4 className="font-bold text-xs">{rxn.name}</h4>
                      <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[9px] font-mono">{rxn.type}</span>
                    </div>

                    <div className={`p-2.5 rounded-lg font-mono text-xs font-semibold border overflow-x-auto ${
                      isDark ? "bg-[#0b0f19] border-slate-800 text-amber-300" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}>
                      {rxn.equation}
                    </div>

                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      <strong className="text-emerald-500 font-semibold">Observation:</strong> {rxn.obs}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SST MAP WORK CHECKLIST */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Mandatory SST Map Work Checklist (+15 XP per item)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {MANDATORY_MAP_LOCATIONS.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-emerald-500">{cat.category}</h4>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {cat.items.map((item, iIdx) => {
                        const isDone = completedMapItems[item] || false;
                        return (
                          <div
                            key={iIdx}
                            onClick={() => toggleMapItem(item)}
                            className={`p-2.5 rounded-lg border flex items-center justify-between gap-2 cursor-pointer transition-all min-h-[40px] ${
                              isDone
                                ? isDark
                                  ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-300"
                                  : "bg-emerald-50 border-emerald-200 text-emerald-900"
                                : isDark
                                ? "bg-[#0b0f19] border-slate-800 text-slate-300 hover:border-slate-700"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {isDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              ) : (
                                <Square className={`w-3.5 h-3.5 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                              )}
                              <span className={`truncate ${isDone ? "line-through opacity-60" : ""}`}>{item}</span>
                            </div>
                            <span className="text-[9px] font-mono text-emerald-500 font-bold shrink-0">+15 XP</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 7: 100% BOARD ROADMAP ===================== */}
        {activeTab === "roadmap" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1.5 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500" />
                <h2 className="text-base sm:text-xl font-bold tracking-tight">Master Life & 100% Board Roadmap (2026–2027)</h2>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Chronological roadmap from Test Series I $\rightarrow$ Pre-Boards $\rightarrow$ 100% Finals $\rightarrow$ Class 11 Stream Readiness.
              </p>
            </div>

            {/* SPRINTS */}
            <div className="space-y-3">
              {[
                {
                  sprint: "Sprint 1: Test Series I Victory (Sept 14 – Sept 26, 2026)",
                  target: "Goal: 95%+ in all 6 Subjects at LSA",
                  focus: "Maths (14th), Science (16th), Hindi (18th), SST (21st), IT (23rd), English (26th).",
                  habits: "Daily 25-minute Pomodoro focus blocks • Memorize Chemistry color changes and SST map locations."
                },
                {
                  sprint: "Sprint 2: 100% NCERT Closure (Oct 1 – Oct 31, 2026)",
                  target: "Goal: Every NCERT line, in-text question, and back exercise solved",
                  focus: "Finish remaining chapters in Science and Mathematics.",
                  habits: "Treat NCERT as the core textbook for all standard definitions."
                },
                {
                  sprint: "Sprint 3: RD Sharma & Competency Mastery (Nov 1 – Dec 15, 2026)",
                  target: "Goal: Master 50% NEP Competency & Level 2 HOTS riders",
                  focus: "Solve RD Sharma Trigonometry identities proofs and quadratic speed-time word problems.",
                  habits: "Time-box hard problems: if stuck for 15 mins, study the model step-marking breakdown and redo."
                },
                {
                  sprint: "Sprint 4: Pre-Board 1 & 10-Year PYQs (Dec 16 – Dec 31, 2026)",
                  target: "Goal: Score 92%+ in Pre-Boards and eliminate silly mistakes",
                  focus: "Analyze recurring 5-year question patterns from 2018–2026 CBSE Board sets.",
                  habits: "Identify and eliminate units omission (e.g. cm², Ω, Joules) and calculation slips."
                },
                {
                  sprint: "Sprint 5: 15 Timed 3-Hour Simulations (Jan 1 – Jan 25, 2027)",
                  target: "Goal: Exam Hall Stamina & Speed (Finish 15 mins early)",
                  focus: "Sit strictly from 10:30 AM to 1:30 PM under authentic board exam conditions.",
                  habits: "15 minutes reading time strategy: decide optional questions first and plan question sequence."
                }
              ].map((sp, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border space-y-2 ${
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-amber-500">{sp.sprint}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 self-start sm:self-auto">
                      {sp.target}
                    </span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    <strong className="text-blue-400">Core Focus:</strong> {sp.focus}
                  </p>
                  <p className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    <strong className="text-emerald-500">Execution:</strong> {sp.habits}
                  </p>
                </div>
              ))}
            </div>

            {/* TOPPER PRESENTATION RULES */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5" /> Golden Rules of CBSE Paper Presentation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className={`p-3.5 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">1. Box Final Numerical Answers</h4>
                  <p className="text-slate-400">Enclose your final numerical value in a clean box: <strong>[ x = 6 km/h ]</strong> so the examiner spots it immediately.</p>
                </div>
                <div className={`p-3.5 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">2. Always Write Formula First</h4>
                  <p className="text-slate-400">Writing <strong>1/f = 1/v - 1/u</strong> carries a mandatory 0.5 to 1 mark in the official rubric.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* =========================================================================
          MOBILE BOTTOM NAVIGATION DOCK (FIXED AT BOTTOM FOR PHONES)
          ========================================================================= */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-2xl px-2 py-1.5 transition-colors ${
        isDark ? "border-slate-800/90 bg-[#090d16]/95 text-white" : "border-slate-200 bg-white/95 text-slate-900 shadow-lg"
      }`}>
        <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
          {[
            { id: "test_series", label: "Tests", icon: Calendar },
            { id: "today", label: "Focus", icon: Target },
            { id: "syllabus", label: "NCERT", icon: BookOpen },
            { id: "flashcards", label: "Cards", icon: BookMarked },
            { id: "more", label: "More", icon: Menu }
          ].map((item) => {
            const isMoreTab = item.id === "more";
            const isActive = isMoreTab ? isMobileMoreOpen : activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playSound("click");
                  triggerHaptic(10);
                  if (isMoreTab) {
                    setIsMobileMoreOpen(!isMobileMoreOpen);
                  } else {
                    setIsMobileMoreOpen(false);
                    setActiveTab(item.id as any);
                  }
                }}
                className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all min-h-[44px] ${
                  isActive
                    ? isDark
                      ? "bg-amber-500/15 text-amber-400 font-bold"
                      : "bg-amber-50 text-amber-900 font-bold"
                    : isDark
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive ? "text-amber-500" : ""}`} />
                <span className="text-[10px] tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MOBILE "MORE" DRAWER MODAL */}
      {isMobileMoreOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-end justify-center p-3 animate-fade-in">
          <div className={`border rounded-3xl w-full max-w-sm p-5 space-y-4 shadow-2xl ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" /> Additional Learning Modules
              </h3>
              <button
                onClick={() => setIsMobileMoreOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "questions", label: "RD Sharma / HOTS", icon: Zap },
                { id: "experiments", label: "3D Science Labs", icon: FlaskConical },
                { id: "reactions", label: "Reactions & Map", icon: MapPin },
                { id: "roadmap", label: "100% Roadmap", icon: Compass }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    playSound("click");
                    setActiveTab(m.id as any);
                    setIsMobileMoreOpen(false);
                  }}
                  className={`p-3 rounded-2xl border text-left flex flex-col gap-2 font-bold min-h-[56px] cursor-pointer ${
                    activeTab === m.id
                      ? "bg-amber-500 text-slate-950 border-amber-500"
                      : isDark
                      ? "bg-[#0b0f19] border-slate-800 text-slate-200"
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}
                >
                  <m.icon className="w-4 h-4" />
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setIsMobileMoreOpen(false);
                  setIsBackupModalOpen(true);
                }}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDark ? "bg-slate-800 border-slate-700 text-white" : "bg-slate-100 border-slate-300 text-slate-900"
                }`}
              >
                <Download className="w-3.5 h-3.5" /> Backup / Restore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LEVEL UP CELEBRATION MODAL
          ========================================================================= */}
      {levelUpModalData && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className={`border-2 border-amber-500/60 rounded-3xl w-full max-w-sm p-6 text-center space-y-4 shadow-2xl relative ${
            isDark ? "bg-[#111827] text-white" : "bg-white text-slate-900"
          }`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 mx-auto flex items-center justify-center text-3xl shadow-lg animate-pulse-glow">
              {levelUpModalData.badge}
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-500">
                ⭐ Rank Promotion! ⭐
              </span>
              <h3 className="text-xl font-black">Level {levelUpModalData.level} Reached</h3>
              <p className="text-sm font-bold text-amber-400">{levelUpModalData.title}</p>
            </div>

            <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Your verified concept mastery and study blocks have promoted you to a new rank tier!
            </p>

            <button
              onClick={() => {
                playSound("click");
                setLevelUpModalData(null);
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs cursor-pointer shadow-md"
            >
              Continue Preparation 🚀
            </button>
          </div>
        </div>
      )}

      {/* CREATE FLASHCARD MODAL */}
      {showAddFlashcardModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-3xl w-full max-w-md p-5 sm:p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-amber-500" /> Create Custom Flashcard (+40 XP)
              </h3>
              <button
                onClick={() => setShowAddFlashcardModal(false)}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomFlashcard} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Subject</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                    value={newFlashcardForm.subject}
                    onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, subject: e.target.value as any })}
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Information Technology">Information Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Difficulty</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                    value={newFlashcardForm.difficulty}
                    onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, difficulty: e.target.value as any })}
                  >
                    <option value="Fundamental">Fundamental</option>
                    <option value="High Yield">High Yield</option>
                    <option value="Topper Level (100%)">Topper Level (100%)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Chapter Name</label>
                <input
                  type="text"
                  placeholder="e.g. Introduction to Trigonometry"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                  value={newFlashcardForm.chapter}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, chapter: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Front Prompt / Question</label>
                <textarea
                  rows={2}
                  placeholder="Enter the concept prompt..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newFlashcardForm.frontQuestion}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, frontQuestion: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Back Answer / Derivation</label>
                <textarea
                  rows={3}
                  placeholder="Enter the verified answer..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newFlashcardForm.backAnswer}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, backAnswer: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 font-bold rounded-xl text-xs cursor-pointer min-h-[44px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Save Flashcard (+40 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE QUESTION MODAL */}
      {showQuestionModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-3xl w-full max-w-md p-5 sm:p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Add HOTS Problem to Bank (+40 XP)
              </h3>
              <button
                onClick={() => setShowQuestionModal(false)}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomQuestion} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Type</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                    value={newQuestionForm.type}
                    onChange={(e) => setNewQuestionForm({ ...newQuestionForm, type: e.target.value as any })}
                  >
                    <option value="HOTS (RD/RS Level)">HOTS (RD/RS Level)</option>
                    <option value="Competency Based">Competency Based</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Assertion Reasoning">Assertion Reasoning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Subject</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                    value={newQuestionForm.subject}
                    onChange={(e) => setNewQuestionForm({ ...newQuestionForm, subject: e.target.value as any })}
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Chapter Name</label>
                <input
                  type="text"
                  placeholder="e.g. Introduction to Trigonometry"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                  value={newQuestionForm.chapter}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, chapter: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Question / Proof Statement</label>
                <textarea
                  rows={3}
                  placeholder="Enter the problem statement..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newQuestionForm.question}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, question: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Final Result / Proved Statement</label>
                <input
                  type="text"
                  placeholder="e.g. LHS = RHS, x = 6 km/h"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white min-h-[40px]"
                  value={newQuestionForm.correctAnswer}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, correctAnswer: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Step-by-Step Solution</label>
                <textarea
                  rows={3}
                  placeholder="Model derivation steps..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newQuestionForm.explanation}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, explanation: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 font-bold rounded-xl text-xs cursor-pointer min-h-[44px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Save to Problem Bank (+40 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BACKUP / RESTORE MODAL */}
      {isBackupModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-3xl w-full max-w-md p-5 sm:p-6 space-y-4 shadow-2xl ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                <Download className="w-4 h-4 text-amber-500" /> Backup & Restore Progress
              </h3>
              <button
                onClick={() => setIsBackupModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Export your study snapshot JSON file so you can safely switch devices or restore your progress on Vercel anytime.
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleExportBackup}
                className={`w-full py-3 font-bold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 min-h-[44px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Download className="w-4 h-4" /> Download Backup File (.json)
              </button>

              <label className={`w-full py-3 border font-semibold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 text-center block min-h-[44px] ${
                isDark ? "bg-[#0b0f19] border-slate-800 text-slate-300 hover:bg-slate-800" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}>
                <Upload className="w-4 h-4" /> Select Backup File to Restore
                <input type="file" accept=".json" className="hidden" onChange={handleImportBackup} />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`border-t py-4 text-center text-xs font-mono px-4 ${isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-500"}`}>
        Lakshmipat Singhania Academy Bissau • CBSE Class 10 Command Center (2026–2027)
      </footer>
    </div>
  );
}
