"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Check,
  ChevronRight,
  ChevronLeft,
  Clock,
  Download,
  ExternalLink,
  Flame,
  Layers,
  ListTodo,
  Moon,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  Target,
  Trash2,
  Upload,
  Zap,
  Square,
  FileText,
  Compass,
  ArrowRight,
  Copy,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  MapPin,
  PenTool,
  Bookmark,
  Calendar,
  AlertCircle,
  Eye,
  EyeOff,
  CheckSquare,
  Trophy,
  Gamepad2,
  Dices,
  FlameKindling,
  Sparkle,
  BookMarked,
  Filter
} from "lucide-react";

import {
  CBSE_SUBJECTS,
  BOARD_LEVEL_QUESTIONS,
  INTERACTIVE_SIMULATIONS,
  TEST_SERIES_I_SCHEDULE,
  CHAPTER_WISE_FLASHCARDS,
  FlashcardItem,
  TestSeriesExam,
  BoardQuestion,
  InteractiveSimulation,
  Subject,
  Chapter
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

// Essential Reactions with Color Changes & Precipitates
const ESSENTIAL_CHEMISTRY_REACTIONS = [
  {
    name: "Thermal Decomposition of Ferrous Sulphate",
    equation: "2FeSO₄(s) [Pale Green] ──Δ──> Fe₂O₃(s) [Reddish-Brown] + SO₂(g) + SO₃(g)",
    obs: "Pale green crystals change to reddish-brown ferric oxide. Characteristic choking smell of burning sulphur.",
    type: "Thermal Decomposition"
  },
  {
    name: "Precipitation Reaction (Lead Nitrate + Potassium Iodide)",
    equation: "Pb(NO₃)₂(aq) + 2KI(aq) ──> PbI₂(s) [Bright Yellow Precipitate ↓] + 2KNO₃(aq)",
    obs: "Instant bright yellow precipitate of Lead Iodide (PbI₂) is formed upon mixing clear solutions.",
    type: "Double Displacement / Precipitation"
  },
  {
    name: "Thermal Decomposition of Lead Nitrate",
    equation: "2Pb(NO₃)₂(s) [White] ──Δ──> 2PbO(s) [Yellow Solid] + 4NO₂(g) [Brown Fumes] + O₂(g)",
    obs: "Emission of dense pungent reddish-brown fumes of Nitrogen Dioxide (NO₂).",
    type: "Thermal Decomposition"
  },
  {
    name: "Photolytic Decomposition of Silver Chloride",
    equation: "2AgCl(s) [White] ──Sunlight──> 2Ag(s) [Grey Metal] + Cl₂(g)",
    obs: "White silver chloride turns grey in sunlight. Classic reaction for black & white photography.",
    type: "Photolytic Decomposition"
  },
  {
    name: "Chlor-Alkali Process (Electrolysis of Brine)",
    equation: "2NaCl(aq) + 2H₂O(l) ──Electricity──> 2NaOH(aq) + Cl₂(g) [At Anode] + H₂(g) [At Cathode]",
    obs: "Chlorine gas collected at Anode, Hydrogen gas at Cathode, Sodium Hydroxide formed near cathode.",
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

export default function LakshmipatSinghaniaCommandCenter() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"test_series" | "today" | "syllabus" | "flashcards" | "questions" | "experiments" | "reactions" | "roadmap">("test_series");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  // REAL STUDENT SLATE (STARTING AT ZERO)
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [dayType, setDayType] = useState<"weekday" | "weekend">("weekday");

  // Selected Test Series Exam Tab
  const [selectedExamId, setSelectedExamId] = useState<string>("exam_maths");
  const [completedTestSeriesTopics, setCompletedTestSeriesTopics] = useState<{ [topicKey: string]: boolean }>({});

  // Topic-Wise Full Syllabus Progress State: { [topicId: string]: boolean }
  const [completedTopicIds, setCompletedTopicIds] = useState<{ [topicId: string]: boolean }>({});
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("maths");
  const [expandedChapterIds, setExpandedChapterIds] = useState<{ [chapterId: string]: boolean }>({
    math_ch1: true,
    sci_ch1: true,
    sst_his1: true
  });

  // Flashcards State
  const [customFlashcards, setCustomFlashcards] = useState<FlashcardItem[]>([]);
  const [selectedFlashcardSubject, setSelectedFlashcardSubject] = useState<string>("All Subjects");
  const [selectedFlashcardChapter, setSelectedFlashcardChapter] = useState<string>("All Chapters");
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);
  const [masteredFlashcardIds, setMasteredFlashcardIds] = useState<{ [id: string]: boolean }>({});
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
    markingStep1: "1 Mark: Correct identity selection and initial step.",
    markingStep2: "2 Marks: Simplification and final proof."
  });

  // Pomodoro Focus Timer
  const [pomoSeconds, setPomoSeconds] = useState(25 * 60);
  const [isPomoActive, setIsPomoActive] = useState(false);
  const [totalFocusMins, setTotalFocusMins] = useState(0);
  const pomoTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Daily Realistic Tasks
  const [todayTasks, setTodayTasks] = useState<{ id: string; text: string; slot: string; done: boolean }[]>([
    { id: "t1", text: "Sept 14 Exam: Solve 10 RD Sharma Trigonometry Proofs + BPT Theorem", slot: "8:00 PM – 9:30 PM", done: false },
    { id: "t2", text: "Sept 16 Exam: Life Processes Diagrams (Nephron & Heart) + Chlor-Alkali", slot: "10:00 PM – 11:15 PM", done: false },
    { id: "t3", text: "Quick Flashcards: 10 Science & SST Active Recall Cards", slot: "11:15 PM – 11:45 PM", done: false }
  ]);
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

  // Dual Live Timers
  const nextExamCountdown = useMemo(() => calculatePrecisionCountdown("2026-09-14"), [calculatePrecisionCountdown]);
  const feb1Countdown = useMemo(() => calculatePrecisionCountdown("2027-02-01"), [calculatePrecisionCountdown]);

  // Selected Test Series Exam Details
  const activeExam = useMemo(() => {
    return TEST_SERIES_I_SCHEDULE.find((e) => e.id === selectedExamId) || TEST_SERIES_I_SCHEDULE[0];
  }, [selectedExamId]);

  const activeExamCountdown = useMemo(() => {
    return calculatePrecisionCountdown(activeExam.date);
  }, [calculatePrecisionCountdown, activeExam]);

  // Gamified Level & Rank calculation
  const { currentLevel, rankTitle } = useMemo(() => {
    const level = Math.floor(xp / 200) + 1;
    let title = "Novice Scholar (Level 1)";
    if (level === 2) title = "Board Contender (Level 2)";
    else if (level === 3) title = "Rank Booster (Level 3)";
    else if (level === 4) title = "Honors Aspirant (Level 4)";
    else if (level >= 5 && level < 10) title = "Topper Prodigy (Level 5+)";
    else if (level >= 10) title = "AIR 1 CBSE Master (Level 10)";
    return { currentLevel: level, rankTitle: title };
  }, [xp]);

  // Sound generator
  const playSound = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      osc.start();
      setTimeout(() => osc.stop(), 160);
    } catch {}
  }, []);

  // Confetti trigger
  const triggerConfetti = useCallback(() => {
    const colors = ["#d97706", "#2563eb", "#059669", "#dc2626", "#7c3aed", "#ea580c"];
    const particles: ConfettiParticle[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        id: Math.random() + i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 7 + 4,
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 4 - 2
      });
    }
    setConfetti(particles);
    playSound();
  }, [playSound]);

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

  // Load from LocalStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const sTopics = localStorage.getItem("op100_lsa_topics_v3");
        const sTestSeries = localStorage.getItem("op100_lsa_test_series_v3");
        const sStreak = localStorage.getItem("op100_lsa_streak_v3");
        const sXp = localStorage.getItem("op100_lsa_xp_v3");
        const sCoins = localStorage.getItem("op100_lsa_coins_v3");
        const sTasks = localStorage.getItem("op100_lsa_tasks_v3");
        const sCustomFC = localStorage.getItem("op100_lsa_custom_fc_v3");
        const sMasteredFC = localStorage.getItem("op100_lsa_mastered_fc_v3");
        const sCustomQ = localStorage.getItem("op100_lsa_customq_v3");
        const sFocus = localStorage.getItem("op100_lsa_focus_v3");
        const sTheme = localStorage.getItem("op100_lsa_theme_v3");

        if (sTopics) setCompletedTopicIds(JSON.parse(sTopics));
        if (sTestSeries) setCompletedTestSeriesTopics(JSON.parse(sTestSeries));
        if (sStreak) setStreak(parseInt(sStreak));
        if (sXp) setXp(parseInt(sXp));
        if (sCoins) setCoins(parseInt(sCoins));
        if (sTasks) setTodayTasks(JSON.parse(sTasks));
        if (sCustomFC) setCustomFlashcards(JSON.parse(sCustomFC));
        if (sMasteredFC) setMasteredFlashcardIds(JSON.parse(sMasteredFC));
        if (sCustomQ) setCustomQuestions(JSON.parse(sCustomQ));
        if (sFocus) setTotalFocusMins(parseInt(sFocus));
        if (sTheme) setTheme(sTheme as any);
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
    localStorage.setItem("op100_lsa_topics_v3", JSON.stringify(completedTopicIds));
    localStorage.setItem("op100_lsa_test_series_v3", JSON.stringify(completedTestSeriesTopics));
    localStorage.setItem("op100_lsa_streak_v3", streak.toString());
    localStorage.setItem("op100_lsa_xp_v3", xp.toString());
    localStorage.setItem("op100_lsa_coins_v3", coins.toString());
    localStorage.setItem("op100_lsa_tasks_v3", JSON.stringify(todayTasks));
    localStorage.setItem("op100_lsa_custom_fc_v3", JSON.stringify(customFlashcards));
    localStorage.setItem("op100_lsa_mastered_fc_v3", JSON.stringify(masteredFlashcardIds));
    localStorage.setItem("op100_lsa_customq_v3", JSON.stringify(customQuestions));
    localStorage.setItem("op100_lsa_focus_v3", totalFocusMins.toString());
    localStorage.setItem("op100_lsa_theme_v3", theme);
  }, [completedTopicIds, completedTestSeriesTopics, streak, xp, coins, todayTasks, customFlashcards, masteredFlashcardIds, customQuestions, totalFocusMins, theme, mounted]);

  // Pomodoro Interval Timer
  useEffect(() => {
    if (isPomoActive) {
      pomoTimerRef.current = setInterval(() => {
        setPomoSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(pomoTimerRef.current!);
            setIsPomoActive(false);
            setTotalFocusMins((m) => m + 25);
            setXp((x) => x + 50);
            setCoins((c) => c + 5);
            triggerConfetti();
            alert("🏆 25-minute Focused Study Block Finished! +50 XP earned.");
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
  }, [isPomoActive, triggerConfetti]);

  const formattedPomoTime = useMemo(() => {
    const m = Math.floor(pomoSeconds / 60);
    const s = pomoSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [pomoSeconds]);

  // Test Series Topic Completion Percentage
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

  // Toggle Test Series Topic
  const toggleTestSeriesTopic = (key: string) => {
    setCompletedTestSeriesTopics((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (next[key]) {
        setXp((x) => x + 25);
        setCoins((c) => c + 2);
        triggerConfetti();
      }
      return next;
    });
  };

  // Full Syllabus Topics Statistics
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

  // Toggle Full Syllabus Topic Checkbox
  const toggleTopic = (topicId: string) => {
    setCompletedTopicIds((prev) => {
      const next = { ...prev, [topicId]: !prev[topicId] };
      if (next[topicId]) {
        setXp((x) => x + 25);
        setCoins((c) => c + 2);
        triggerConfetti();
      }
      return next;
    });
  };

  const toggleChapterExpand = (chId: string) => {
    setExpandedChapterIds((prev) => ({ ...prev, [chId]: !prev[chId] }));
  };

  // All Flashcards Combined & Filtered
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
    setXp((x) => x + 50);
    setCoins((c) => c + 5);
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

  // Combine Questions
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
    setXp((x) => x + 50);
    setCoins((c) => c + 5);
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

  // Toggle Daily Tasks
  const handleToggleTask = (id: string) => {
    setTodayTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const next = !t.done;
          if (next) {
            setXp((x) => x + 35);
            setStreak((s) => (s === 0 ? 1 : s));
            triggerConfetti();
          }
          return { ...t, done: next };
        }
        return t;
      })
    );
  };

  const handleAddNewTask = () => {
    const text = prompt("Enter today's study target:");
    if (!text) return;
    const slot = prompt("Time Slot (e.g. 8:00 PM – 9:30 PM, Evening):") || "Evening Self-Study";
    setTodayTasks((prev) => [...prev, { id: "task_" + Date.now(), text, slot, done: false }]);
  };

  const handleDeleteTask = (id: string) => {
    setTodayTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Backup Export/Import
  const handleExportBackup = () => {
    const backup = {
      version: "2027.7.0",
      exportDate: new Date().toISOString(),
      completedTopicIds,
      completedTestSeriesTopics,
      streak,
      xp,
      coins,
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
    a.download = `cbse-lsa-complete-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
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
        if (data.streak !== undefined) setStreak(data.streak);
        if (data.xp !== undefined) setXp(data.xp);
        if (data.coins !== undefined) setCoins(data.coins);
        if (data.todayTasks) setTodayTasks(data.todayTasks);
        if (data.customFlashcards) setCustomFlashcards(data.customFlashcards);
        if (data.masteredFlashcardIds) setMasteredFlashcardIds(data.masteredFlashcardIds);
        if (data.customQuestions) setCustomQuestions(data.customQuestions);
        if (data.totalFocusMins !== undefined) setTotalFocusMins(data.totalFocusMins);
        triggerConfetti();
        setIsBackupModalOpen(false);
        alert("🎉 Study snapshot loaded successfully!");
      } catch {
        alert("❌ Invalid backup file format.");
      }
    };
    reader.readAsText(file);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white font-sans">
        <div className="text-center space-y-3">
          <div className="animate-spin h-8 w-8 border-3 border-amber-500 border-t-transparent rounded-full mx-auto" />
          <p className="text-xs text-slate-400 font-mono">Loading CBSE Class 10 Topper OS...</p>
        </div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen transition-colors duration-150 ${isDark ? "bg-[#090d16] text-slate-100" : "bg-[#f8fafc] text-slate-900"}`}>
      
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

      {/* TOP HEADER WITH DUAL HIGH-PRECISION MILLISECOND COUNTDOWNS */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md px-6 py-3 flex items-center justify-between transition-colors ${
        isDark ? "border-slate-800/80 bg-[#090d16]/95 text-white" : "border-slate-200 bg-white/95 text-slate-900 shadow-sm"
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-sm">
            100
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm md:text-base font-bold tracking-tight">
                CBSE Class 10 Command Center
              </h1>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${
                isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
              }`}>
                2026–2027
              </span>
            </div>
            <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {rankTitle} • Lakshmipat Singhania Academy Test Series I
            </p>
          </div>
        </div>

        {/* METRICS & BOTH LIVE MILLISECOND TIMERS */}
        <div className="flex items-center gap-2">
          {/* TIMER 1: TEST SERIES I (SEPT 14) WITH MILLISECONDS */}
          <div className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium ${
            isDark ? "bg-[#111827] border-amber-500/40 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-900 shadow-xs"
          }`}>
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-bold">Sept 14:</span>
            <span>
              {nextExamCountdown.days}d {nextExamCountdown.hours}h {nextExamCountdown.mins}m {nextExamCountdown.secs}s
            </span>
            <span className="text-[10px] text-amber-500/80 font-mono w-5 text-left">
              .{nextExamCountdown.ms.toString().padStart(2, "0")}
            </span>
          </div>

          {/* TIMER 2: FEB 1 FINAL BOARDS PREP WITH MILLISECONDS */}
          <div className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium ${
            isDark ? "bg-[#111827] border-blue-500/40 text-blue-400" : "bg-blue-50 border-blue-200 text-blue-900 shadow-xs"
          }`}>
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-bold">Feb 1:</span>
            <span>
              {feb1Countdown.days}d {feb1Countdown.hours}h {feb1Countdown.mins}m {feb1Countdown.secs}s
            </span>
            <span className="text-[10px] text-blue-500/80 font-mono w-5 text-left">
              .{feb1Countdown.ms.toString().padStart(2, "0")}
            </span>
          </div>

          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold ${
            isDark ? "bg-[#111827] border-slate-800 text-orange-400" : "bg-white border-slate-200 text-orange-600 shadow-xs"
          }`}>
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>{streak}d</span>
          </div>

          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold ${
            isDark ? "bg-[#111827] border-slate-800 text-amber-400" : "bg-white border-slate-200 text-amber-800 shadow-xs"
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{xp} XP</span>
          </div>

          <button
            onClick={() => setIsBackupModalOpen(true)}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isDark ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
            }`}
            title="Backup Data"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isDark ? "bg-[#111827] border-slate-800 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
            }`}
            title="Toggle Light/Dark Mode"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>
        </div>
      </header>

      {/* TOP NAVIGATION TABS */}
      <nav className={`border-b px-6 py-2 flex items-center gap-1.5 overflow-x-auto transition-colors ${
        isDark ? "border-slate-800/80 bg-[#0d1322]/60" : "border-slate-200 bg-white/80"
      }`}>
        {[
          { id: "test_series", label: "🎯 Test Series I (Sept 14–26)", icon: Calendar },
          { id: "today", label: "Daily Routine & Focus", icon: Target },
          { id: "syllabus", label: "Full 6-Subject NCERT", icon: BookOpen },
          { id: "flashcards", label: "⚡ Chapter Flashcards Engine", icon: BookMarked },
          { id: "questions", label: "RD Sharma / HOTS Bank", icon: Zap },
          { id: "experiments", label: "3D Science Labs (PhET)", icon: FlaskConical },
          { id: "reactions", label: "Reactions & Map Work", icon: MapPin },
          { id: "roadmap", label: "🚀 Life & 100% Roadmap", icon: Compass }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? isDark
                    ? "bg-slate-100 text-slate-950 font-bold"
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
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto p-6 space-y-6">

        {/* ===================== TAB 0: TEST SERIES I (SEPT 14 - SEPT 26, 2026) ===================== */}
        {activeTab === "test_series" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* HERO ACADEMY EXAM BANNER */}
            <div className={`p-6 md:p-7 rounded-2xl border transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold border ${
                      isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}>
                      LAKSHMIPAT SINGHANIA ACADEMY BISSAU
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Class X • Test Series I (2026–2027)</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                    Next Exam: <span className="text-amber-500">{activeExam.subject} ({activeExam.displayDate})</span>
                  </h2>

                  <p className={`text-xs md:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Faculty: <strong className={isDark ? "text-slate-200" : "text-slate-800"}>{activeExam.teachers}</strong> • Code: {activeExam.code}
                  </p>
                </div>

                {/* LIVE HIGH-PRECISION MILLISECOND COUNTDOWN CARD */}
                <div className={`p-4 rounded-xl border shrink-0 text-center space-y-1 ${
                  isDark ? "bg-[#0b0f19] border-amber-500/30 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-900"
                }`}>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider">Live Time Remaining</p>
                  <div className="text-2xl md:text-3xl font-black font-mono tracking-tight flex items-baseline justify-center">
                    <span>
                      {activeExamCountdown.days}d {activeExamCountdown.hours}h {activeExamCountdown.mins}m {activeExamCountdown.secs}s
                    </span>
                    <span className="text-sm font-mono opacity-75 ml-1 w-7 text-left">
                      .{activeExamCountdown.ms.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <p className={`text-[10px] font-mono opacity-80 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Test Series I Mastered: {testSeriesPercentage}% ({testSeriesCompleted}/{testSeriesTotal} Topics)
                  </p>
                </div>
              </div>
            </div>

            {/* TEST SERIES I DATE SHEET PILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {TEST_SERIES_I_SCHEDULE.map((exam) => {
                const isSelected = exam.id === selectedExamId;
                const examCountdown = calculatePrecisionCountdown(exam.date);
                return (
                  <button
                    key={exam.id}
                    onClick={() => setSelectedExamId(exam.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
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
            <div className={`p-6 rounded-2xl border space-y-5 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-800">
                <div>
                  <h3 className="text-base font-bold flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>{activeExam.subject} — Prescribed Syllabus for Test Series I</span>
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
              <div className="space-y-4">
                {activeExam.chapters.map((ch, chIdx) => (
                  <div
                    key={chIdx}
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      isDark ? "bg-[#0b0f19] border-slate-800/90" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold flex items-center gap-2">
                        {ch.category && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-800 text-slate-300">
                            {ch.category}
                          </span>
                        )}
                        <span>{ch.title}</span>
                      </h4>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {ch.topics.map((topic, tIdx) => {
                        const key = `${activeExam.id}_${chIdx}_${tIdx}`;
                        const isDone = completedTestSeriesTopics[key] || false;
                        return (
                          <div
                            key={tIdx}
                            onClick={() => toggleTestSeriesTopic(key)}
                            className={`p-2.5 rounded-lg border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                              isDone
                                ? isDark
                                  ? "bg-amber-950/20 border-amber-800/40 text-amber-200"
                                  : "bg-amber-50 border-amber-200 text-amber-950"
                                : isDark
                                ? "bg-[#111827] border-slate-800 text-slate-300 hover:border-slate-700"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                              ) : (
                                <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                              )}
                              <p className={`text-xs font-medium ${isDone ? "line-through opacity-60" : ""}`}>
                                {topic}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-amber-500 font-semibold shrink-0">+25 XP</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* SAMPLE TEST SERIES QUESTIONS FOR THIS EXAM */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" /> High-Probability Board Sample Questions ({activeExam.subject})
                </h4>

                <div className="space-y-3">
                  {activeExam.samplePaperQuestions.map((sq, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-xl border space-y-2.5 ${
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

                      <div className={`p-3 rounded-lg border text-xs font-mono leading-relaxed ${
                        isDark ? "bg-[#111827] border-emerald-800/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                      }`}>
                        <strong>Model Solution / Scheme:</strong> {sq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================== TAB 1: DAILY STUDY ROUTINE & FOCUS ===================== */}
        {activeTab === "today" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* HERO STUDY CARD */}
            <div className={`p-6 md:p-7 rounded-2xl border transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold border ${
                      isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}>
                      DAILY ROUTINE
                    </span>
                    <div className={`flex p-0.5 rounded-lg border ${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
                      <button
                        onClick={() => setDayType("weekday")}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                          dayType === "weekday"
                            ? isDark
                              ? "bg-slate-800 text-white"
                              : "bg-white text-slate-900 shadow-xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        School Day
                      </button>
                      <button
                        onClick={() => setDayType("weekend")}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                          dayType === "weekend"
                            ? isDark
                              ? "bg-slate-800 text-white"
                              : "bg-white text-slate-900 shadow-xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        Sunday / Holiday
                      </button>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                    {dayType === "weekday" ? "School + Coaching + Prime Night Self-Study" : "Sunday 6-Hour Mock & Practice Block"}
                  </h2>

                  <p className={`text-xs md:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {dayType === "weekday"
                      ? "School (7:30 AM – 2:30 PM) • Tuition (5:00 PM – 7:30 PM) • Prime Self-Study: 8:00 PM – 11:30 PM."
                      : "Sunday Sprint: 10:30 AM – 1:30 PM (Timed Board Mock Test) • 4:00 PM – 8:00 PM (RD Sharma & Exemplar)."}
                  </p>
                </div>

                {/* STATS TILES */}
                <div className={`flex items-center gap-5 p-4 rounded-xl border shrink-0 ${
                  isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-amber-500 font-mono">{overallSyllabusPercentage}%</p>
                    <p className={`text-[10px] uppercase font-bold mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      All Subjects Grip
                    </p>
                  </div>
                  <div className={`w-px h-10 ${isDark ? "bg-slate-800" : "bg-slate-200"}`} />
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-blue-500 font-mono">{totalFocusMins}m</p>
                    <p className={`text-[10px] uppercase font-bold mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Study Logged
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-COLUMN FOCUS TIMER & PRIORITIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* CLEAN 25M FOCUS TIMER */}
              <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center space-y-4 transition-colors ${
                isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                  <Clock className="w-4 h-4" />
                  <span>25-Minute Focus Block</span>
                </div>

                <div className={`w-36 h-36 rounded-full border-2 flex flex-col items-center justify-center ${
                  isDark ? "border-slate-800 bg-[#0b0f19]" : "border-slate-200 bg-slate-50"
                }`}>
                  <p className="text-3xl font-bold font-mono tracking-tight">{formattedPomoTime}</p>
                  <p className={`text-[10px] font-medium mt-0.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {isPomoActive ? "Session Running" : "Ready"}
                  </p>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => setIsPomoActive(!isPomoActive)}
                    className={`px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer transition-all ${
                      isPomoActive
                        ? "bg-amber-600 text-white"
                        : isDark
                        ? "bg-slate-100 text-slate-950 hover:bg-white"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isPomoActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPomoActive ? "Pause" : "Start Study Block"}
                  </button>

                  <button
                    onClick={() => {
                      setIsPomoActive(false);
                      setPomoSeconds(25 * 60);
                    }}
                    className={`p-2.5 border rounded-xl cursor-pointer ${
                      isDark ? "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* REAL EVENING & NIGHT TASKS */}
              <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${
                isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                  <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Today&apos;s Self-Study Targets
                  </h3>
                  <button
                    onClick={handleAddNewTask}
                    className={`px-2 py-1 text-[11px] font-semibold rounded-md cursor-pointer flex items-center gap-1 border ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>

                <div className="space-y-2 overflow-y-auto max-h-56">
                  {todayTasks.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => handleToggleTask(t.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        t.done
                          ? isDark
                            ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-300"
                            : "bg-emerald-50 border-emerald-200 text-emerald-900"
                          : isDark
                          ? "bg-[#0b0f19] border-slate-800/80 hover:border-slate-700"
                          : "bg-slate-50 border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {t.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                        )}
                        <div>
                          <p className={`text-xs font-medium ${t.done ? "line-through opacity-60" : ""}`}>
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
                        className={`p-1 hover:text-red-500 cursor-pointer ${isDark ? "text-slate-600" : "text-slate-400"}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className={`pt-2 border-t text-[11px] flex justify-between items-center ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"}`}>
                  <span>{todayTasks.filter((t) => t.done).length} of {todayTasks.length} completed</span>
                  <span className="text-amber-500 font-semibold">+35 XP per target</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 2: FULL 6-SUBJECT NCERT TRACKER ===================== */}
        {activeTab === "syllabus" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-2xl border space-y-1.5 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h2 className="text-lg font-bold">2026–2027 Complete 6-Subject NCERT Syllabus Mastery</h2>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                All 6 Subjects: Mathematics, Science, Social Science, Information Technology 402, English (First Flight + Footprints), and Hindi Course B (Sparsh 2 + Sanchayan 2).
              </p>
            </div>

            {/* SUBJECT SELECTOR PILLS */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {CBSE_SUBJECTS.map((sub) => {
                const isSelected = sub.id === selectedSubjectId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubjectId(sub.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0 border ${
                      isSelected
                        ? isDark
                          ? "bg-slate-100 text-slate-950 border-white font-bold"
                          : "bg-slate-900 text-white border-slate-900 font-bold shadow-sm"
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

            {/* CHAPTERS WITH NCERT SECTIONS */}
            <div className="space-y-3">
              {selectedSubject.chapters.map((chapter) => {
                const isExpanded = expandedChapterIds[chapter.id] || false;
                const chapterCompletedTopics = chapter.topics.filter((t) => completedTopicIds[t.id]).length;
                const chapterTotalTopics = chapter.topics.length;
                const isAllDone = chapterCompletedTopics === chapterTotalTopics && chapterTotalTopics > 0;

                return (
                  <div
                    key={chapter.id}
                    className={`rounded-xl border p-4 transition-all ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div
                      onClick={() => toggleChapterExpand(chapter.id)}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-amber-500">
                            {chapter.ncertChapterNo ? `Ch ${chapter.ncertChapterNo}` : "Unit"}
                          </span>
                          <h4 className="text-xs md:text-sm font-bold">{chapter.name}</h4>
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

                      <div className="flex items-center gap-3">
                        <div className={`w-24 h-1.5 rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                          <div
                            className="h-full bg-amber-500 rounded-full transition-all duration-200"
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
                              className={`p-2.5 rounded-lg border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                                isChecked
                                  ? isDark
                                    ? "bg-amber-950/20 border-amber-800/40 text-amber-200"
                                    : "bg-amber-50/80 border-amber-200 text-amber-950"
                                  : isDark
                                  ? "bg-[#0b0f19] border-slate-800 text-slate-300 hover:border-slate-700"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                {isChecked ? (
                                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                                ) : (
                                  <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-slate-600" : "text-slate-400"}`} />
                                )}
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[11px] font-mono font-semibold opacity-70">
                                      Section {topic.sectionCode}
                                    </span>
                                    <p className="text-xs font-medium">{topic.title}</p>
                                  </div>
                                </div>
                              </div>

                              {topic.isImportantForBoards && (
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold font-mono bg-red-500/10 text-red-500 border border-red-500/20 shrink-0">
                                  High Yield
                                </span>
                              )}
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
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-amber-500" />
                  <h2 className="text-lg font-bold">Chapter-Wise Active Recall Flashcards Engine</h2>
                </div>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Filter by subject and chapter to test core formulas, reactions, historical dates, and literature quotes.
                </p>
              </div>

              <button
                onClick={() => setShowAddFlashcardModal(true)}
                className={`px-3.5 py-2 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Plus className="w-3.5 h-3.5" /> Create Custom Flashcard
              </button>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2 items-center">
              <select
                className={`p-2 rounded-xl text-xs border font-medium ${
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
                className={`p-2 rounded-xl text-xs border font-medium ${
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

              <span className="text-xs font-mono text-slate-400 ml-auto">
                {filteredFlashcards.length} Cards in Deck
              </span>
            </div>

            {/* INTERACTIVE FLASHCARD FLIPPER */}
            {filteredFlashcards.length > 0 ? (
              <div className="space-y-4">
                <div
                  onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                  className={`p-8 md:p-12 rounded-3xl border text-center cursor-pointer transition-all select-none min-h-[260px] flex flex-col justify-between items-center ${
                    isFlashcardFlipped
                      ? isDark
                        ? "bg-[#0b0f19] border-emerald-500/40 text-emerald-200 shadow-md"
                        : "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-md"
                      : isDark
                      ? "bg-[#111827] border-slate-800 text-white hover:border-amber-500/50"
                      : "bg-white border-slate-200 text-slate-900 hover:border-amber-500 shadow-sm"
                  }`}
                >
                  <div className="flex justify-between w-full text-xs font-mono opacity-70">
                    <span>Card {flashcardIndex + 1} of {filteredFlashcards.length}</span>
                    <span className="font-bold">{filteredFlashcards[flashcardIndex].subject} • {filteredFlashcards[flashcardIndex].chapter}</span>
                  </div>

                  <div className="space-y-3 py-4 max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500">
                      {isFlashcardFlipped ? "Verified Answer & Model Scheme" : "Question Statement (Click to Flip)"}
                    </p>
                    <h3 className="text-base md:text-lg font-bold leading-relaxed whitespace-pre-line">
                      {isFlashcardFlipped
                        ? filteredFlashcards[flashcardIndex].backAnswer
                        : filteredFlashcards[flashcardIndex].frontQuestion}
                    </h3>
                    {isFlashcardFlipped && filteredFlashcards[flashcardIndex].hintOrFormula && (
                      <p className="text-xs font-mono text-amber-500 pt-2 font-semibold">
                        Key Rule: {filteredFlashcards[flashcardIndex].hintOrFormula}
                      </p>
                    )}
                  </div>

                  <p className="text-[11px] font-mono opacity-60">
                    {isFlashcardFlipped ? "Click to flip back to question" : "Click anywhere to flip and check answer"}
                  </p>
                </div>

                {/* CONTROLS */}
                <div className="flex justify-between items-center gap-3">
                  <button
                    onClick={() => {
                      setIsFlashcardFlipped(false);
                      setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                    }}
                    className={`px-4 py-2 rounded-xl border text-xs font-semibold cursor-pointer ${
                      isDark ? "bg-[#111827] border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Previous Card
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const curId = filteredFlashcards[flashcardIndex].id;
                        setMasteredFlashcardIds((prev) => ({ ...prev, [curId]: true }));
                        setXp((x) => x + 30);
                        setCoins((c) => c + 3);
                        triggerConfetti();
                        setIsFlashcardFlipped(false);
                        setFlashcardIndex((prev) => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                      }}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-xs"
                    >
                      ✓ Mastered (+30 XP)
                    </button>
                    <button
                      onClick={() => {
                        setIsFlashcardFlipped(false);
                        setFlashcardIndex((prev) => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                      }}
                      className={`px-4 py-2 rounded-xl border text-xs font-semibold cursor-pointer ${
                        isDark ? "bg-[#111827] border-slate-800 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      Next Card ➔
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 border rounded-2xl text-center space-y-2">
                <p className="text-sm font-semibold">No flashcards match this filter.</p>
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
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="space-y-1">
                <h2 className="text-lg font-bold">RD Sharma, RS Aggarwal & Competency Solutions</h2>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Rigorous proofs, case-based studies, and full step-by-step CBSE marking schemes.
                </p>
              </div>

              <button
                onClick={() => setShowQuestionModal(true)}
                className={`px-3.5 py-2 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Plus className="w-3.5 h-3.5" /> Add Problem / Proof
              </button>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2 items-center">
              <select
                className={`p-2 rounded-xl text-xs border font-medium ${
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
                className={`p-2 rounded-xl text-xs border font-medium ${
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
                <option value="Information Technology">Information Technology</option>
              </select>

              <input
                type="text"
                placeholder="Search trigonometry, quadratic, reflection, nationalism..."
                className={`flex-1 min-w-[200px] p-2 rounded-xl text-xs border ${
                  isDark ? "bg-[#111827] border-slate-800 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-xs"
                }`}
                value={searchQuestionQuery}
                onChange={(e) => setSearchQuestionQuery(e.target.value)}
              />
            </div>

            {/* QUESTIONS LIST WITH VISIBLE STEP-BY-STEP SOLUTIONS */}
            <div className="space-y-4">
              {filteredQuestions.map((q) => {
                const isRevealed = revealedQuestionIds[q.id] ?? true;
                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border space-y-3.5 transition-colors ${
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
                          onClick={() => setRevealedQuestionIds((prev) => ({ ...prev, [q.id]: !isRevealed }))}
                          className={`px-2.5 py-1 rounded-md border text-[11px] font-mono flex items-center gap-1 cursor-pointer ${
                            isDark ? "bg-[#0b0f19] border-slate-700 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                          }`}
                        >
                          {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          <span>{isRevealed ? "Hide" : "Show Solution"}</span>
                        </button>
                      </div>
                    </div>

                    {q.caseContext && (
                      <div className={`p-3.5 rounded-xl text-xs leading-relaxed border italic ${
                        isDark ? "bg-[#0b0f19] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}>
                        <strong>Case Scenario:</strong> {q.caseContext}
                      </div>
                    )}

                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-semibold leading-relaxed whitespace-pre-line">{q.question}</p>
                    </div>

                    {/* PROPER VISIBLE SOLUTION & STEP MARKING BOX */}
                    {isRevealed && (
                      <div className={`p-4 rounded-xl border space-y-3 animate-fade-in ${
                        isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"
                      }`}>
                        {/* FINAL ANSWER BOX */}
                        <div className={`p-2.5 rounded-lg border flex items-center justify-between font-mono text-xs ${
                          isDark ? "bg-[#111827] border-emerald-800/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
                        }`}>
                          <span className="flex items-center gap-1.5 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>Final Answer / Result:</span>
                          </span>
                          <span className="font-bold text-amber-500">{q.correctAnswer}</span>
                        </div>

                        {/* DERIVATION */}
                        <div className="space-y-1">
                          <p className="text-[11px] font-bold text-emerald-500 uppercase font-mono tracking-wider">
                            Full Model Derivation & Steps:
                          </p>
                          <p className="text-xs leading-relaxed whitespace-pre-line">{q.explanation}</p>
                        </div>

                        {/* STEP MARKING BREAKDOWN */}
                        {q.markingSchemeSteps && q.markingSchemeSteps.length > 0 && (
                          <div className={`space-y-1 pt-2.5 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                            <p className="text-[10px] font-bold text-amber-500 uppercase font-mono">
                              CBSE Examiner Step-by-Step Mark Allotment:
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
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-2xl border space-y-1.5 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber-500" />
                <h2 className="text-lg font-bold">Virtual 3D Science Experiments & Math Labs</h2>
              </div>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Interactive visual physics, chemistry, biology, and trigonometry labs (PhET Univ. of Colorado & GeoGebra 3D).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {INTERACTIVE_SIMULATIONS.map((sim) => (
                <div
                  key={sim.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3.5 transition-colors ${
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="space-y-2.5">
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

                    <div className="space-y-1 pt-1">
                      <p className="text-[10px] font-bold text-amber-500 font-mono uppercase">Key Board Concepts Tested:</p>
                      <ul className="space-y-0.5 text-xs text-slate-400">
                        {sim.keyLearningObjectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={sim.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-2 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
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
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-2xl border space-y-1.5 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h2 className="text-lg font-bold">Essential Chemistry Reactions & Mandatory SST Map Work</h2>
              <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                High-yield color changes, gas emissions, and mandatory map locations frequently tested in Class 10 Boards.
              </p>
            </div>

            {/* REACTIONS LIST */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" /> Top Chemistry Reactions (Color Changes & Precipitates)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className={`p-2.5 rounded-lg font-mono text-xs font-semibold border ${
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

            {/* MAP WORK CHECKLIST */}
            <div className="space-y-3.5 pt-4 border-t border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Official CBSE Class 10 SST Map Work Checklist
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MANDATORY_MAP_LOCATIONS.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-emerald-500">{cat.category}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {cat.items.map((item, iIdx) => (
                        <div key={iIdx} className={`p-2 rounded-lg border flex items-center gap-2 ${
                          isDark ? "bg-[#0b0f19] border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}>
                          <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB 7: DEEPLY ELABORATED LIFE & 100% BOARD ROADMAP ===================== */}
        {activeTab === "roadmap" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 md:p-7 rounded-2xl border space-y-2 transition-colors ${
              isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">Master Life & 100% Board Roadmap (2026–2027)</h2>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                A complete chronological roadmap from Lakshmipat Singhania Academy Test Series I $\rightarrow$ Pre-Boards $\rightarrow$ 100% in Finals $\rightarrow$ Class 11 Stream Readiness.
              </p>
            </div>

            {/* CHRONOLOGICAL SPRINTS */}
            <div className="space-y-4">
              {[
                {
                  sprint: "Sprint 1: Test Series I Victory (Sept 14 – Sept 26, 2026)",
                  target: "Goal: 95%+ in all 6 Subjects at LSA",
                  focus: "Maths (14th), Science (16th), Hindi (18th), SST (21st), IT (23rd), English (26th). Complete topic-wise test checklist and write all derivations.",
                  habits: "Daily 25-minute Pomodoro focus blocks • Memorize Chemistry color changes and SST map locations."
                },
                {
                  sprint: "Sprint 2: 100% NCERT Closure (Oct 1 – Oct 31, 2026)",
                  target: "Goal: Every single NCERT line, in-text question, and back exercise solved",
                  focus: "Finish remaining chapters in Science (Carbon, Heredity, Light, Eye) and Mathematics (Surface Areas, Circles, Coordinate Geo, AP).",
                  habits: "No side books yet. Treat NCERT like the holy book of CBSE."
                },
                {
                  sprint: "Sprint 3: RD Sharma, RS Aggarwal & Competency Mastery (Nov 1 – Dec 15, 2026)",
                  target: "Goal: Master 50% NEP Competency & Level 2 HOTS riders",
                  focus: "Solve RD Sharma Trigonometry identities proofs, quadratic speed-time word problems, and NCERT Exemplar questions.",
                  habits: "Time-box hard problems: if stuck for 15 mins, study the model step-marking breakdown and redo without looking."
                },
                {
                  sprint: "Sprint 4: Pre-Board 1 & 10 Years PYQs Analysis (Dec 16 – Dec 31, 2026)",
                  target: "Goal: Score 92%+ in Pre-Board 1 and eliminate silly mistakes",
                  focus: "Analyze recurring 5-year question patterns from 2018–2026 CBSE Board sets. Create personal high-yield formula sheets.",
                  habits: "Identify and eliminate units omission (e.g. omitting cm², Ω, Joules) and calculation slips."
                },
                {
                  sprint: "Sprint 5: 15 Timed 3-Hour Sample Paper Simulations (Jan 1 – Jan 25, 2027)",
                  target: "Goal: Exam Hall Stamina & Speed (Finish 15 mins before time)",
                  focus: "Sit strictly from 10:30 AM to 1:30 PM under authentic board exam conditions. Write full answers on board-ruled sheets.",
                  habits: "15 minutes reading time strategy: decide optional questions first and plan question sequence."
                },
                {
                  sprint: "Sprint 6: Final 100% Board Readiness (Jan 26 – Feb 1, 2027)",
                  target: "Goal: Peak Physical, Mental & Academic Clarity",
                  focus: "Rapid formula speedruns, chemistry reactions memory lab, and active recall flashcards.",
                  habits: "7+ hours sleep nightly, light nutrition, positive topper self-talk, zero new topics."
                },
                {
                  sprint: "Sprint 7: Class 11 Stream Bridge & Life Beyond Boards (Feb – April 2027)",
                  target: "Goal: Smooth Transition to JEE, NEET, CUET, or CA Foundation",
                  focus: "Stream selection (PCM / PCB / Commerce with Maths / Humanities) based on genuine strengths.",
                  habits: "Class 10 gives the work ethic; Class 11 builds the career foundation."
                }
              ].map((sp, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border space-y-2.5 ${
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-amber-500">{sp.sprint}</h3>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 shrink-0">
                      {sp.target}
                    </span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    <strong className="text-blue-400">Core Focus:</strong> {sp.focus}
                  </p>
                  <p className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    <strong className="text-emerald-500">Daily Execution:</strong> {sp.habits}
                  </p>
                </div>
              ))}
            </div>

            {/* TOPPER RULES */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5" /> Golden Rules of CBSE Paper Presentation (Never Lose 0.5 Marks)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">1. Box Final Numerical Answers</h4>
                  <p className="text-slate-400">Always enclose your final numerical value in a clean box: <strong>[ x = 6 km/h ]</strong> so the examiner spots it immediately.</p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">2. Always Write Formula First</h4>
                  <p className="text-slate-400">Never plug values directly. Writing <strong>1/f = 1/v - 1/u</strong> carries a mandatory 0.5 to 1 mark in the official marking rubric.</p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">3. Draw Ray Diagrams with Pencil & Arrows</h4>
                  <p className="text-slate-400">Ray diagrams without direction arrows get 0 marks in CBSE. Use a sharp pencil and ruler for all optics diagrams.</p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">4. Underline Keywords in SST & Biology</h4>
                  <p className="text-slate-400">In 5-mark long answers, write points with sub-headings and underline key dates, treaties, and biological terms.</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* CREATE FLASHCARD MODAL */}
      {showAddFlashcardModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-2xl w-full max-w-lg p-6 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm">Add Chapter-Wise Flashcard</h3>
              <button onClick={() => setShowAddFlashcardModal(false)} className="text-xs text-slate-400 hover:text-white cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomFlashcard} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Subject</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
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
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
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
                  placeholder="e.g. Introduction to Trigonometry, Life Processes"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newFlashcardForm.chapter}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, chapter: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Front Question / Prompt</label>
                <textarea
                  rows={2}
                  placeholder="Enter the question or concept to test..."
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
                  placeholder="Enter the exact verified answer..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newFlashcardForm.backAnswer}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, backAnswer: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Key Formula or Rule (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. sin²θ + cos²θ = 1"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newFlashcardForm.hintOrFormula}
                  onChange={(e) => setNewFlashcardForm({ ...newFlashcardForm, hintOrFormula: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2.5 font-bold rounded-xl text-xs cursor-pointer ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Save Flashcard to Deck (+50 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE QUESTION MODAL */}
      {showQuestionModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-2xl w-full max-w-lg p-6 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm">Add Problem / Proof to Bank</h3>
              <button onClick={() => setShowQuestionModal(false)} className="text-xs text-slate-400 hover:text-white cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomQuestion} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1">Type</label>
                  <select
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
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
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                    value={newQuestionForm.subject}
                    onChange={(e) => setNewQuestionForm({ ...newQuestionForm, subject: e.target.value as any })}
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Information Technology">Information Technology</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Chapter Name</label>
                <input
                  type="text"
                  placeholder="e.g. Introduction to Trigonometry"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
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
                <label className="block text-[10px] font-bold uppercase mb-1">Final Answer / Proved Value</label>
                <input
                  type="text"
                  placeholder="e.g. LHS = RHS, x = 6 km/h"
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newQuestionForm.correctAnswer}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, correctAnswer: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1">Step-by-Step Derivation</label>
                <textarea
                  rows={3}
                  placeholder="Step-by-step solution..."
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-slate-800 text-white"
                  value={newQuestionForm.explanation}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, explanation: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2.5 font-bold rounded-xl text-xs cursor-pointer ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Save to Question Bank (+50 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BACKUP MODAL */}
      {isBackupModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`border rounded-2xl w-full max-w-md p-6 space-y-4 shadow-xl ${
            isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-bold text-sm">Backup / Restore Study Progress</h3>
              <button onClick={() => setIsBackupModalOpen(false)} className="text-xs text-slate-400 hover:text-white cursor-pointer">
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Download your study progress snapshot to never lose your streak or topic checkoffs.
            </p>

            <div className="space-y-2">
              <button
                onClick={handleExportBackup}
                className={`w-full py-2.5 font-bold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Download className="w-4 h-4" /> Download Backup File (JSON)
              </button>

              <label className={`w-full py-2.5 border font-semibold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 text-center block ${
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
      <footer className={`border-t py-4 text-center text-xs font-mono ${isDark ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-500"}`}>
        Lakshmipat Singhania Academy Bissau • Test Series I & CBSE 100% Command Center (2026–2027)
      </footer>
    </div>
  );
}
