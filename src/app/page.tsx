"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import type { VaultQuestion, VaultChapterInfo } from "@/data/vaultQuestions";
import MnemonicGallery from "@/components/MnemonicGallery";
import NotebookSolutionView from "@/components/NotebookSolutionView";
import ChapterConceptExplainer from "@/components/ChapterConceptExplainer";
import TheoremsAndExamplesView from "@/components/TheoremsAndExamplesView";

import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  FileText,
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
  Calendar,
  AlertCircle,
} from "lucide-react";

import {
  ASSERTION_REASON_BANK,
  CASE_BASED_STUDIES,
  EXAMINER_TRAPS_BANK,
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

// DEFAULT REALISTIC MISTAKE LOGS (FOCUSED ON CH 6 TRIANGLES & HIGH-YIELD TOPICS)
const DEFAULT_MISTAKE_LOGS = [
  {
    id: "mst_ch6_1",
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "CRITICAL",
    dateAdded: "2026-09-02",
    question: "In △ABC, DE ∥ BC with D on AB and E on AC. If AD = 3 cm, DB = 5 cm, and AE = 2.4 cm, find EC and the ratio DE / BC.",
    wrongAnswer: "EC = 4 cm; DE / BC = AD / DB = 3/5 = 0.60.",
    reason: "Applying BPT ratio AD/DB to parallel sides DE/BC! DE/BC belongs to △ADE and △ABC, which requires Similarity ratio AD/AB = 3/(3+5) = 3/8 (0.375), NOT the transversal segment ratio AD/DB!",
    correctAnswer: "1. By BPT: AD/DB = AE/EC ⟹ 3/5 = 2.4/EC ⟹ EC = 4.0 cm.\n2. By △ADE ∼ △ABC (AA similarity): DE/BC = AD/AB = 3/(3+5) = 3/8 = 0.375.",
    concept: "BPT vs Similarity Sides: Segments on transversals (AD/DB = AE/EC) vs Parallel base sides (DE/BC = AD/AB)."
  },
  {
    id: "mst_ch6_2",
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "CRITICAL",
    dateAdded: "2026-09-02",
    question: "If in △ABC and △DEF, AB/DE = BC/FD, then they will be similar when which angles are equal?",
    wrongAnswer: "∠B = ∠E (blindly pairing letters with same alphabetic positions).",
    reason: "Blindly pairing angles without checking the vertices that enclose the proportional sides. In △ABC, sides AB & BC include ∠B. In △DEF, sides DE & FD include ∠D. For SAS similarity, the strictly INCLUDED angles must be equal: ∠B = ∠D!",
    correctAnswer: "Included angle of (AB, BC) is ∠B.\nIncluded angle of (DE, FD) is ∠D.\nTherefore, the triangles are similar by SAS criterion if and only if ∠B = ∠D.",
    concept: "SAS Similarity Criterion: The angle MUST be strictly included between the two proportional sides."
  },
  {
    id: "mst_ch6_3",
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "HIGH",
    dateAdded: "2026-09-03",
    question: "Diagonals of a trapezium ABCD with AB ∥ DC intersect at O. If AB = 3 CD, find the ratio OA / OC and state the similarity rider.",
    wrongAnswer: "Writing OA / OC = 1 / 3 without establishing triangle similarity or confusing which vertex corresponds to which.",
    reason: "Rushing the proof without establishing alternate interior angles. Since AB ∥ DC, transversal AC gives ∠OAB = ∠OCD and transversal BD gives ∠OBA = ∠ODC.",
    correctAnswer: "In △AOB and △COD:\n∠OAB = ∠OCD (alt. int. angles as AB ∥ DC)\n∠OBA = ∠ODC (alt. int. angles)\n∴ △AOB ∼ △COD (AA criterion)\nCorresponding sides ratio: OA/OC = OB/OD = AB/CD = 3/1.",
    concept: "Trapezium Diagonals: Prove △AOB ∼ △COD by AA; vertex order A↔C, B↔D, O↔O."
  },
  {
    id: "mst_ch6_4",
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "HIGH",
    dateAdded: "2026-09-03",
    question: "Two similar triangles △ABC and △PQR have perimeters 36 cm and 24 cm. If PQ = 10 cm, find AB.",
    wrongAnswer: "AB / 10 = (36 / 24)² = (3/2)² = 9/4 ⟹ AB = 22.5 cm.",
    reason: "Squaring the perimeter ratio! Perimeters are 1-dimensional linear measures, so Perimeter ratio = Side ratio (AB/PQ) in 1st power. Never square perimeter ratios!",
    correctAnswer: "Perimeter(△ABC) / Perimeter(△PQR) = AB / PQ\n36 / 24 = AB / 10 ⟹ 3 / 2 = AB / 10 ⟹ AB = 15 cm.",
    concept: "Perimeters of similar triangles are in direct linear ratio to corresponding sides (Linear 1st power, NOT squared)."
  },
  {
    id: "mst_ch6_5",
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "MEDIUM",
    dateAdded: "2026-09-03",
    question: "A vertical pole 6 m tall casts a 4 m shadow. At the same time, a tower casts a 28 m shadow. Find the tower's height.",
    wrongAnswer: "Multiplying numbers randomly: (6 × 4) / 28 = 0.85 m or confusing pole height with shadow length.",
    reason: "Failing to set up similarity of the two right triangles formed by the sun's common angular elevation.",
    correctAnswer: "At the same time, sun's elevation angle θ is identical: ∠C = ∠R = θ and ∠B = ∠Q = 90°.\n∴ △ABC ∼ △PQR by AA similarity.\nHeight/Shadow = Height/Shadow ⟹ 6 / 4 = H / 28 ⟹ H = (6 × 28) / 4 = 42 m.",
    concept: "Shadow Problems: Right triangles are similar by AA because sun elevation is constant at any given instant."
  },
  {
    id: "mst_ch8_1",
    subject: "Mathematics",
    chapter: "Ch 8: Introduction to Trigonometry",
    priority: "CRITICAL",
    dateAdded: "2026-09-03",
    question: "Evaluate: sin 60° cos 30° + sin 30° cos 60°.",
    wrongAnswer: "Mixing up table values: writing sin 30° = √3/2 and sin 60° = 1/2.",
    reason: "Reversing standard table trigonometric values under exam pressure.",
    correctAnswer: "(√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 4/4 = 1. (Validates sin(A+B) = sin 90° = 1).",
    concept: "Standard Trigonometric Values Table for 0°, 30°, 45°, 60°, 90°."
  },
  {
    id: "mst_ch10_1",
    subject: "Mathematics",
    chapter: "Ch 10: Circles",
    priority: "HIGH",
    dateAdded: "2026-09-03",
    question: "Prove that the lengths of tangents drawn from an external point to a circle are equal (Theorem 10.2).",
    wrongAnswer: "Assuming PT = PQ at the beginning and claiming △OPT ≅ △OQT by SSS congruence.",
    reason: "Circular reasoning (Petitio Principii) — assuming the very statement that is required to be proved!",
    correctAnswer: "Join OP, OQ, OT. In right △OPT and right △OQT: ∠OPT = ∠OQT = 90° (Theorem 10.1: radius ⊥ tangent), OP = OP (common hypotenuse), OT = OQ (radii of same circle). By RHS congruence: △OPT ≅ △OQT. Hence PT = QT (CPCT).",
    concept: "Theorem 10.2 Proof: Must prove congruence using RHS (common hypotenuse + equal radii), NOT SSS."
  },
  {
    id: "mst_ch8_2",
    subject: "Mathematics",
    chapter: "Ch 8: Introduction to Trigonometry",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "Prove that: cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A.",
    wrongAnswer: "Canceling terms across the plus sign: writing cos A / 1 + 1 / cos A.",
    reason: "Illegal partial cancellation over addition! You cannot cancel terms separated by '+' signs in denominators.",
    correctAnswer: "Take common denominator: [cos²A + (1 + sin A)²] / [cos A(1 + sin A)]\n= [cos²A + 1 + 2sin A + sin²A] / [cos A(1 + sin A)]\n= [(cos²A + sin²A) + 1 + 2sin A] / [cos A(1 + sin A)]\n= [1 + 1 + 2sin A] / [cos A(1 + sin A)] = 2(1 + sin A) / [cos A(1 + sin A)] = 2 / cos A = 2 sec A.",
    concept: "Trigonometric Identity: Common denominator followed by sin²A + cos²A = 1."
  },
  {
    id: "mst_ch9_1",
    subject: "Mathematics",
    chapter: "Ch 9: Some Applications of Trig",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "From the top of a 75 m lighthouse, the angles of depression of two ships in line are 30° and 45°. Find the distance between the ships.",
    wrongAnswer: "Assigning 30° to the closer ship and 45° to the farther ship.",
    reason: "Angle of depression increases as an object approaches the observer! Closer ship has steeper angle (45°), farther ship has flatter angle (30°).",
    correctAnswer: "Let distance to closer ship be x, farther ship be y.\nIn right triangle: tan 45° = 75 / x ⟹ x = 75 m.\nIn right triangle: tan 30° = 75 / y ⟹ 1/√3 = 75 / y ⟹ y = 75√3 m.\nDistance between ships = y - x = 75(√3 - 1) m ≈ 54.9 m.",
    concept: "Angle of Depression: Closer objects always have larger angles than farther objects."
  },
  {
    id: "mst_ch10_2",
    subject: "Mathematics",
    chapter: "Ch 10: Circles",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "Tangents PA and PB are drawn from point P to a circle with center O. If ∠APB = 80°, find ∠AOB and ∠POA.",
    wrongAnswer: "Writing ∠AOB = 80° or claiming opposite angles are equal.",
    reason: "Opposite angles in cyclic quadrilateral OAPB are supplementary, NOT equal! ∠AOB + ∠APB = 180°.",
    correctAnswer: "Since OA ⊥ PA and OB ⊥ PB (radius ⊥ tangent):\n∠OAP = ∠OBP = 90°.\nIn quadrilateral OAPB: ∠AOB = 180° - 80° = 100°.\nLine OP bisects ∠AOB: ∠POA = 100° / 2 = 50°.",
    concept: "Tangents from external point: angle between tangents and angle subtended at center are supplementary (sum = 180°)."
  },
  {
    id: "mst_ch13_1",
    subject: "Mathematics",
    chapter: "Ch 13: Statistics",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "In the formula Median = L + [(N/2 - cf) / f] × h, what does 'cf' represent?",
    wrongAnswer: "Using the cumulative frequency of the median class itself.",
    reason: "Using cf of the median class makes (N/2 - cf) negative or zero! It MUST be the cumulative frequency of the PRECEDING class.",
    correctAnswer: "cf = Cumulative frequency of the class PRECEDING the median class.\nf = Simple frequency of the median class itself.\nL = Lower limit of the median class.\nh = Class size.",
    concept: "Grouped Data Median: cf is strictly from the preceding class, never the median class itself."
  }
];

// =========================================================================
// 🚀 HIGH-PERFORMANCE ISOLATED LIVE COUNTDOWN COMPONENT
// Eliminates root-level re-renders: runs on 0% CPU on 2GB/4GB RAM machines
// =========================================================================
function getPrecisionCountdown(targetDateString: string) {
  const target = new Date(targetDateString + "T09:00:00").getTime();
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, ms: 0, isPassed: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  const ms = Math.floor((diff % 1000) / 10);
  return { days, hours, mins, secs, ms, isPassed: false };
}

export const LiveCountdown = React.memo(function LiveCountdown({
  targetDate,
  variant = "badge",
  colorScheme = "amber",
  isDark = true
}: {
  targetDate: string;
  variant?: "badge" | "card-grid" | "short";
  colorScheme?: "amber" | "blue";
  isDark?: boolean;
}) {
  const [cd, setCd] = useState(() => getPrecisionCountdown(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setCd(getPrecisionCountdown(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (variant === "short") {
    return (
      <span className="text-[10px] font-mono opacity-85">
        {cd.days}d {cd.hours}h left
      </span>
    );
  }

  const isAmber = colorScheme === "amber";

  if (variant === "badge") {
    return (
      <span className="inline-flex items-center gap-1 font-mono font-semibold">
        <span>{cd.days}d {cd.hours}h {cd.mins}m {cd.secs}s</span>
        <span className={`text-[10px] ${isAmber ? "text-amber-500/80" : "text-blue-500/80"} font-mono w-5 text-left font-bold`}>
          .{cd.ms.toString().padStart(2, "0")}
        </span>
      </span>
    );
  }

  // card-grid: 4-block layout
  const textColor = isAmber ? "text-amber-400" : "text-blue-400";
  const secColor = isAmber ? "text-amber-500" : "text-blue-500";
  const bgBox = isDark ? "bg-[#0b0f19]" : isAmber ? "bg-amber-50/50" : "bg-blue-50/50";
  const borderBox = isDark ? "border-white/10" : isAmber ? "border-amber-200" : "border-blue-200";

  return (
    <div className="grid grid-cols-4 gap-1.5 font-mono text-center">
      <div className={`p-1.5 rounded-lg ${bgBox} border ${borderBox}`}>
        <span className={`block text-base sm:text-lg font-black ${textColor}`}>{cd.days}</span>
        <span className="text-[9px] uppercase opacity-70">Days</span>
      </div>
      <div className={`p-1.5 rounded-lg ${bgBox} border ${borderBox}`}>
        <span className={`block text-base sm:text-lg font-black ${textColor}`}>{cd.hours}</span>
        <span className="text-[9px] uppercase opacity-70">Hours</span>
      </div>
      <div className={`p-1.5 rounded-lg ${bgBox} border ${borderBox}`}>
        <span className={`block text-base sm:text-lg font-black ${textColor}`}>{cd.mins}</span>
        <span className="text-[9px] uppercase opacity-70">Mins</span>
      </div>
      <div className={`p-1.5 rounded-lg ${bgBox} border ${borderBox}`}>
        <span className={`block text-base sm:text-lg font-black ${secColor}`}>{cd.secs}.{cd.ms.toString().padStart(2, "0")}</span>
        <span className="text-[9px] uppercase opacity-70">Secs</span>
      </div>
    </div>
  );
});

export default function CBSECommandCenter() {


  const [systemId, setSystemId] = useState<string>("");
  useEffect(() => {
    let sid = localStorage.getItem("lsa_system_id");
    if (!sid) {
      sid = "sys_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("lsa_system_id", sid);
    }
    setSystemId(sid);
  }, []);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"chapter_dashboard" | "theorems" | "questions" | "mnemonics" | "flashcards" | "common_mistakes" | "test_series" | "today" | "syllabus" | "experiments" | "reactions" | "roadmap">("chapter_dashboard");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [levelUpModalData, setLevelUpModalData] = useState<{ level: number; title: string; badge: string } | null>(null);
  
  // Multi-Subject Systematic Chapter Command State
  const [commandSubjectId, setCommandSubjectId] = useState<string>("maths");
  const [commandChapterId, setCommandChapterId] = useState<string>("math_ch6");
  
  // Progressive Chapter Vault
  const [activeVaultChapter, setActiveVaultChapter] = useState<number | null>(6); // Default Triangles for now
  const [activeVaultQuestions, setActiveVaultQuestions] = useState<VaultQuestion[]>([]);
  const [isAnalyzingVault, setIsAnalyzingVault] = useState(false);
  const [vaultAnalysisLogs, setVaultAnalysisLogs] = useState<string[]>([]);
  const [vaultFilter, setVaultFilter] = useState<"all" | "1" | "2" | "3" | "5" | "case">("all");

  // Concept Explainer
  const [isConceptExplainerOpen, setIsConceptExplainerOpen] = useState(false);

  // My Mistakes
  const [myMistakes, setMyMistakes] = useState<any[]>(DEFAULT_MISTAKE_LOGS);
  const [mistakeChapterFilter, setMistakeChapterFilter] = useState<string>("All");
  const [isLoadingMistakes, setIsLoadingMistakes] = useState(false);
  const [resolvedMistakeIds, setResolvedMistakeIds] = useState<{ [id: string]: boolean }>({});
  const [isAddMistakeModalOpen, setIsAddMistakeModalOpen] = useState(false);
  const [retryingMistake, setRetryingMistake] = useState<any | null>(null);
  const [retryStudentAnswer, setRetryStudentAnswer] = useState<string>("");
  const [showRetryModelSolution, setShowRetryModelSolution] = useState(false);
  const [newMistakeForm, setNewMistakeForm] = useState({
    subject: "Mathematics",
    chapter: "Ch 6: Triangles",
    priority: "HIGH",
    question: "",
    wrongAnswer: "",
    reason: "",
    correctAnswer: "",
    concept: ""
  });

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
  const [revealedQuestionIds, setRevealedQuestionIds] = useState<{ [id: string]: boolean }>({});
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

  // Cached AudioContext to eliminate memory leaks and lag on low-RAM devices
  const audioCtxRef = useRef<AudioContext | null>(null);

  const fetchMistakes = async () => {
    setIsLoadingMistakes(true);
    try {
      const local = localStorage.getItem("cbse10_lsa_my_mistakes_v5");
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMyMistakes(parsed);
            setIsLoadingMistakes(false);
            return;
          }
        } catch {}
      }
      setMyMistakes(DEFAULT_MISTAKE_LOGS);
    } catch (e) {
      console.error(e);
      setMyMistakes(DEFAULT_MISTAKE_LOGS);
    } finally {
      setIsLoadingMistakes(false);
    }
  };

  const handleAddCustomMistake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMistakeForm.question.trim() || !newMistakeForm.correctAnswer.trim()) return;

    const newEntry = {
      id: `mst_cust_${Date.now()}`,
      subject: newMistakeForm.subject,
      chapter: newMistakeForm.chapter,
      priority: newMistakeForm.priority,
      dateAdded: new Date().toISOString().split("T")[0],
      question: newMistakeForm.question.trim(),
      wrongAnswer: newMistakeForm.wrongAnswer.trim() || "Incomplete attempt under exam pressure.",
      reason: newMistakeForm.reason.trim() || "Conceptual gap or rushing without writing initial formula.",
      correctAnswer: newMistakeForm.correctAnswer.trim(),
      concept: newMistakeForm.concept.trim() || "Core board formula application."
    };

    setMyMistakes((prev) => {
      const updated = [newEntry, ...prev];
      localStorage.setItem("cbse10_lsa_my_mistakes_v5", JSON.stringify(updated));
      return updated;
    });

    setNewMistakeForm({
      subject: "Mathematics",
      chapter: "Ch 6: Triangles",
      priority: "HIGH",
      question: "",
      wrongAnswer: "",
      reason: "",
      correctAnswer: "",
      concept: ""
    });

    setIsAddMistakeModalOpen(false);
    playSound("done");
    showXpToast(25, "New Mistake Logged! (+25 XP)");
    triggerHaptic([30, 40, 30]);
  };

  const handleToggleResolveMistake = (mistakeId: string) => {
    const isResolved = resolvedMistakeIds[mistakeId] || false;
    const next = !isResolved;
    setResolvedMistakeIds((prev) => {
      const updated = { ...prev, [mistakeId]: next };
      localStorage.setItem("cbse10_lsa_resolved_mistakes_v5", JSON.stringify(updated));
      return updated;
    });

    if (next) {
      playSound("done");
      showXpToast(30, "Mistake Resolved & Mastered! (+30 XP)");
      triggerConfetti();
      triggerHaptic([40, 60, 40]);
    } else {
      playSound("undone");
    }
  };

  const handleConvertMistakeToFlashcard = (item: any) => {
    const newCard: FlashcardItem = {
      id: `fc_mst_${Date.now()}`,
      subject: (item.subject || "Mathematics") as any,
      chapter: item.chapter || "Ch 6: Triangles",
      topic: item.concept || "Mistake Correction",
      frontQuestion: item.question,
      backAnswer: item.correctAnswer,
      hintOrFormula: `Note: ${item.reason}`,
      difficulty: "High Yield"
    };

    setCustomFlashcards((prev) => {
      const updated = [newCard, ...prev];
      localStorage.setItem("cbse10_lsa_custom_fc_v5", JSON.stringify(updated));
      return updated;
    });

    playSound("flip");
    showXpToast(25, "Converted to Active Recall Flashcard! (+25 XP)");
    triggerHaptic(20);
  };

  useEffect(() => {
    if (activeTab === "common_mistakes") {
      fetchMistakes();
    }
  }, [activeTab]);

  // Instant In-Memory Cache for Chapter Question Banks
  const chapterCacheRef = useRef<Record<number, VaultQuestion[]>>({});

  const loadChapterData = async (chapterId: number, isPreload = false) => {
    // 1. Instant cache hit: 0ms switch
    if (chapterCacheRef.current[chapterId]) {
      setActiveVaultQuestions(chapterCacheRef.current[chapterId]);
      setActiveVaultChapter(chapterId);
      return;
    }

    if (!isPreload) {
      setIsAnalyzingVault(true);
      setActiveVaultChapter(null);
      setVaultAnalysisLogs([
        "Connecting to Syllabus Engine...",
        `Loading High-Yield Board Questions for Chapter ${chapterId}...`
      ]);
    }

    try {
      const res = await fetch(`/api/questions?chapter=${chapterId}`);
      const data = await res.json();
      const list = data.questions || [];
      chapterCacheRef.current[chapterId] = list;
      if (!isPreload) {
        setActiveVaultQuestions(list);
        setActiveVaultChapter(chapterId);
      }
    } catch (e) {
      console.error("Failed to load questions:", e);
    } finally {
      if (!isPreload) {
        setIsAnalyzingVault(false);
      }
    }
  };

  // Initial load Ch 6 immediately & pre-cache all remaining chapters in background for instant switches
  useEffect(() => {
    loadChapterData(6);
    // Pre-cache other chapters in background without blocking UI
    [8, 9, 10, 13, 14].forEach(ch => {
      fetch(`/api/questions?chapter=${ch}`)
        .then(r => r.json())
        .then(d => {
          if (d.questions) chapterCacheRef.current[ch] = d.questions;
        })
        .catch(() => {});
    });
  }, []);

  const activeExam = useMemo(() => {
    return TEST_SERIES_I_SCHEDULE.find((e) => e.id === selectedExamId) || TEST_SERIES_I_SCHEDULE[0];
  }, [selectedExamId]);

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
      let audioCtx = audioCtxRef.current;
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
          audioCtxRef.current = audioCtx;
        }
      }
      if (!audioCtx) return;
      if (audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
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
  const isHydratedRef = useRef(false);
  const prevLevelRef = useRef<number | null>(null);
  useEffect(() => {
    if (!mounted) return;
    if (!isHydratedRef.current) {
      isHydratedRef.current = true;
      prevLevelRef.current = currentLevelInfo.level;
      return;
    }
    if (prevLevelRef.current !== null && currentLevelInfo.level > prevLevelRef.current) {
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

  // Load from LocalStorage (v5 with guaranteed 0 XP default for fresh sessions)
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // One-time cleanup to ensure fresh 0 XP start for all users as requested
        const isV5Initialized = localStorage.getItem("cbse10_lsa_v5_cleared");
        if (!isV5Initialized) {
          Object.keys(localStorage).forEach((key) => {
            if (key.startsWith("cbse10_lsa_")) {
              localStorage.removeItem(key);
            }
          });
          localStorage.setItem("cbse10_lsa_v5_cleared", "true");
        }

        const sTopics = localStorage.getItem("cbse10_lsa_topics_v5");
        const sTestSeries = localStorage.getItem("cbse10_lsa_test_series_v5");
        const sMap = localStorage.getItem("cbse10_lsa_map_v5");
        const sStreak = localStorage.getItem("cbse10_lsa_streak_v5");
        const sTasks = localStorage.getItem("cbse10_lsa_tasks_v5");
        const sCustomFC = localStorage.getItem("cbse10_lsa_custom_fc_v5");
        const sMasteredFC = localStorage.getItem("cbse10_lsa_mastered_fc_v5");
        const sCustomQ = localStorage.getItem("cbse10_lsa_customq_v5");
        const sFocus = localStorage.getItem("cbse10_lsa_focus_v5");
        const sTheme = localStorage.getItem("cbse10_lsa_theme_v5");
        const sMute = localStorage.getItem("cbse10_lsa_sound_mute_v5");
        const sMistakes = localStorage.getItem("cbse10_lsa_my_mistakes_v5");
        const sResolvedMistakes = localStorage.getItem("cbse10_lsa_resolved_mistakes_v5");

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
        if (sMistakes) setMyMistakes(JSON.parse(sMistakes));
        if (sResolvedMistakes) setResolvedMistakeIds(JSON.parse(sResolvedMistakes));
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
      localStorage.setItem("cbse10_lsa_topics_v5", JSON.stringify(completedTopicIds));
      localStorage.setItem("cbse10_lsa_test_series_v5", JSON.stringify(completedTestSeriesTopics));
      localStorage.setItem("cbse10_lsa_map_v5", JSON.stringify(completedMapItems));
      localStorage.setItem("cbse10_lsa_streak_v5", streak.toString());
      localStorage.setItem("cbse10_lsa_tasks_v5", JSON.stringify(todayTasks));
      localStorage.setItem("cbse10_lsa_custom_fc_v5", JSON.stringify(customFlashcards));
      localStorage.setItem("cbse10_lsa_mastered_fc_v5", JSON.stringify(masteredFlashcardIds));
      localStorage.setItem("cbse10_lsa_customq_v5", JSON.stringify(customQuestions));
      localStorage.setItem("cbse10_lsa_focus_v5", totalFocusMins.toString());
      localStorage.setItem("cbse10_lsa_my_mistakes_v5", JSON.stringify(myMistakes));
      localStorage.setItem("cbse10_lsa_resolved_mistakes_v5", JSON.stringify(resolvedMistakeIds));
      localStorage.setItem("cbse10_lsa_theme_v5", theme);
      localStorage.setItem("cbse10_lsa_sound_mute_v5", isSoundMuted ? "true" : "false");
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

  // One-Click Zero XP Reset (Cleans all storage & restores 0 XP state)
  const handleResetProgress = () => {
    if (typeof window !== "undefined" && window.confirm("Are you sure you want to reset all progress to 0 XP? All student scores and tasks will return to 0.")) {
      setCompletedTopicIds({});
      setCompletedTestSeriesTopics({});
      setCompletedMapItems({});
      setStreak(1);
      setTodayTasks([
        { id: "t1", text: "Sept 14 Exam: Solve 10 RD Sharma Trigonometry Proofs + BPT Theorem", slot: "8:00 PM – 9:30 PM", done: false },
        { id: "t2", text: "Sept 16 Exam: Life Processes Diagrams (Nephron & Heart) + Chlor-Alkali", slot: "10:00 PM – 11:15 PM", done: false },
        { id: "t3", text: "Quick Active Recall: 10 Science & SST Flashcards Deck", slot: "11:15 PM – 11:45 PM", done: false }
      ]);
      setCustomFlashcards([]);
      setMasteredFlashcardIds({});
      setCustomQuestions([]);
      setTotalFocusMins(0);
      setResolvedMistakeIds({});
      setRevealedQuestionIds({});
      try {
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("cbse10_lsa_")) {
            localStorage.removeItem(key);
          }
        });
        localStorage.setItem("cbse10_lsa_v5_cleared", "true");
      } catch {}
      playSound("click");
      showXpToast(0, "All Progress Reset to 0 XP");
    }
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
        isDark ? "border-white/10/80 bg-[#090d16]/90 text-white" : "border-slate-200/90 bg-white/90 text-slate-900 shadow-xs"
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

          {/* HEADER DUAL HIGH-PRECISION COUNTDOWNS (DESKTOP) */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            {/* TIMER 1: SEPT 14 TEST SERIES */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-amber-500/40 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-900 shadow-xs"
            }`}>
              <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="font-bold">Sept 14:</span>
              <LiveCountdown targetDate="2026-09-14" variant="badge" colorScheme="amber" isDark={isDark} />
            </div>

            {/* TIMER 2: FEB 1 FINAL BOARDS */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-blue-500/40 text-blue-400" : "bg-blue-50 border-blue-200 text-blue-900 shadow-xs"
            }`}>
              <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="font-bold">Feb 1 Boards:</span>
              <LiveCountdown targetDate="2027-02-01" variant="badge" colorScheme="blue" isDark={isDark} />
            </div>
          </div>

          {/* GAMIFIED STATS PILLS */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* LEVEL & XP PROGRESS BAR */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[11px] font-mono font-bold ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-amber-400" : "bg-slate-50 border-slate-200 text-amber-900"
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
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-orange-400" : "bg-white border-slate-200 text-orange-600 shadow-xs"
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
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
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
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
              title="Toggle Light/Dark Mode"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* ZERO XP RESET BUTTON */}
            <button
              onClick={handleResetProgress}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border transition-all cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-bold ${
                isDark ? "bg-rose-950/30 border-rose-800/40 text-rose-300 hover:bg-rose-900/40" : "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100 shadow-xs"
              }`}
              title="Reset all progress to 0 XP"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">0 XP Reset</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          LIVE DUAL COUNTDOWN TICKER STRIP (BOARDS & TEST SERIES)
          ========================================================================= */}
      <div className={`border-b px-3.5 sm:px-6 py-2 transition-colors ${
        isDark ? "border-white/10/80 bg-[#0d1322]/85 text-white" : "border-slate-200 bg-amber-50/50 text-slate-900"
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-mono">
          
          {/* TEST SERIES I TICKER */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`font-bold ${isDark ? "text-amber-400" : "text-amber-900"}`}>
                Sept 14 ({activeExam.subject}):
              </span>
              <LiveCountdown targetDate="2026-09-14" variant="badge" colorScheme="amber" isDark={isDark} />
            </div>
          </div>

          {/* FEB 1 FINAL BOARDS TICKER */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`font-bold ${isDark ? "text-blue-400" : "text-blue-900"}`}>
                Feb 1, 2027 Final CBSE Boards:
              </span>
              <LiveCountdown targetDate="2027-02-01" variant="badge" colorScheme="blue" isDark={isDark} />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          DESKTOP & TABLET HORIZONTAL TAB NAVIGATION
          ========================================================================= */}
      <nav className={`border-b px-3.5 sm:px-6 py-2 overflow-x-auto no-scrollbar hidden md:flex items-center gap-1.5 transition-colors ${
        isDark ? "border-white/10/80 bg-[#0d1322]/70" : "border-slate-200 bg-white/80"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 w-full">
          {[
            { id: "chapter_dashboard", label: "Chapter Command", icon: Target },
            { id: "theorems", label: "Theorems & Examples", icon: Award },
            { id: "questions", label: "Master Question Bank", icon: Zap },
            { id: "mnemonics", label: "Visual Mnemonics (35 Sheets)", icon: Sparkles },
            { id: "flashcards", label: "Flashcards Engine", icon: BookMarked },
            { id: "common_mistakes", label: "My Mistakes Error Log", icon: Flame },
            { id: "test_series", label: "Test Series I (Sept 14)", icon: Calendar },
            { id: "today", label: "Daily Focus & Tasks", icon: Clock },
            { id: "syllabus", label: "NCERT Syllabus", icon: BookOpen },
            { id: "roadmap", label: "100% Roadmap", icon: Compass }
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
            
            {/* HERO DUAL COUNTDOWN CARDS: TEST SERIES I & FEB 1 FINAL BOARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* CARD 1: TEST SERIES I (NEXT EXAM) */}
              <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-amber-500/30 shadow-md" : "bg-white border-amber-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
                    isDark ? "bg-amber-950/50 text-amber-300 border-amber-800/60" : "bg-amber-50 text-amber-900 border-amber-300"
                  }`}>
                    LSA TEST SERIES I (SEPT 14–26)
                  </span>
                  <span className="text-[10px] font-mono text-amber-500 font-bold">Exam {activeExam.displayDate}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold tracking-tight mb-1 truncate">
                  Next: <span className="text-amber-500">{activeExam.subject}</span> ({activeExam.code})
                </h3>

                <p className={`text-xs mb-3 truncate ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Faculty: <strong>{activeExam.teachers}</strong>
                </p>

                {/* 4-BLOCK MILLISECOND TIMER */}
                <LiveCountdown targetDate={activeExam.date} variant="card-grid" colorScheme="amber" isDark={isDark} />

                <p className={`text-[10px] font-mono font-semibold pt-2 text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Topics Mastered: {testSeriesPercentage}% ({testSeriesCompleted}/{testSeriesTotal})
                </p>
              </div>

              {/* CARD 2: FEB 1, 2027 FINAL CBSE BOARD EXAMINATIONS */}
              <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-blue-500/30 shadow-md" : "bg-white border-blue-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
                    isDark ? "bg-blue-950/50 text-blue-300 border-blue-800/60" : "bg-blue-50 text-blue-900 border-blue-300"
                  }`}>
                    CBSE CLASS 10 BOARDS (2026–2027)
                  </span>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">Target 100% (AIR 1)</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold tracking-tight mb-1 truncate">
                  Final Boards: <span className="text-blue-400">Feb 1, 2027</span>
                </h3>

                <p className={`text-xs mb-3 truncate ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Official CBSE Board Examination Commencement
                </p>

                {/* 4-BLOCK MILLISECOND TIMER */}
                <LiveCountdown targetDate="2027-02-01" variant="card-grid" colorScheme="blue" isDark={isDark} />

                <p className={`text-[10px] font-mono font-semibold pt-2 text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Syllabus Mastered: {overallSyllabusPercentage}% ({completedCount}/{totalTopics} NCERT Sub-Topics)
                </p>
              </div>

            </div>

            {/* TEST SERIES I DATE SHEET TABS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {TEST_SERIES_I_SCHEDULE.map((exam) => {
                const isSelected = exam.id === selectedExamId;
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
                        ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-300 hover:border-slate-700"
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
                      <LiveCountdown targetDate={exam.date} variant="short" isDark={isDark} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE EXAM CHAPTERS & TOPIC CHECKLIST */}
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-4 transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-white/10">
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
                  isDark ? "bg-[#0b0f19] border-white/10 text-amber-400" : "bg-slate-50 border-slate-200 text-amber-800"
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
                      isDark ? "bg-[#0b0f19] border-white/10/90" : "bg-slate-50 border-slate-200"
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
                                ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-300 hover:border-slate-700"
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
              <div className="pt-3 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> High-Probability Board Sample Questions
                </h4>

                <div className="space-y-2.5">
                  {activeExam.samplePaperQuestions.map((sq, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 sm:p-4 rounded-xl border space-y-2 ${
                        isDark ? "bg-[#0b0f19] border-white/10" : "bg-slate-50 border-slate-200"
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
                        isDark ? "bg-[#121212]/80 backdrop-blur-xl border-emerald-800/40 text-emerald-300" : "bg-emerald-50 border-emerald-200 text-emerald-950"
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
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
                      isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}>
                      DAILY TIME-BLOCK
                    </span>
                    <div className={`flex p-0.5 rounded-lg border ${isDark ? "bg-slate-950 border-white/10" : "bg-slate-100 border-slate-200"}`}>
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
                    {dayType === "weekday" ? "School (7:30–2:30) • Individual Mastery Plan (5:00–7:30) • Prime Self-Study (8:00–11:30)" : "Sunday 6-Hour Mock & Practice Block"}
                  </h2>
                </div>

                {/* STATS TILES */}
                <div className={`flex items-center gap-4 p-3 rounded-xl border shrink-0 ${
                  isDark ? "bg-[#0b0f19] border-white/10" : "bg-slate-50 border-slate-200"
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
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                  <Clock className="w-4 h-4" />
                  <span>25-Minute Focus Block (+50 XP)</span>
                </div>

                <div className={`w-36 h-36 rounded-full border-2 flex flex-col items-center justify-center ${
                  isDark ? "border-white/10 bg-[#0b0f19]" : "border-slate-200 bg-slate-50"
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
                      isDark ? "bg-[#0b0f19] border-white/10 text-slate-400 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                    title="Reset Timer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* REAL DAILY TASKS */}
              <div className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between space-y-3.5 transition-colors ${
                isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className={`flex items-center justify-between border-b pb-2.5 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                  <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Today&apos;s Targets (+30 XP)
                  </h3>
                  <button
                    onClick={handleAddNewTask}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1 border min-h-[36px] ${
                      isDark ? "bg-slate-900 border-white/10 text-slate-200 hover:text-white" : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
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
                          ? "bg-[#0b0f19] border-white/10 hover:border-slate-700"
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

                <div className={`pt-2 border-t text-[11px] flex justify-between items-center ${isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"}`}>
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
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
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
                        ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-400 hover:text-white"
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
                      isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-xs"
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
                      <div className={`mt-3 pt-3 border-t space-y-2 animate-fade-in ${isDark ? "border-white/10" : "border-slate-100"}`}>
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
                                  ? "bg-[#0b0f19] border-white/10 text-slate-300 hover:border-slate-700"
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

                              <div className="flex items-center gap-1.5 flex-wrap justify-end shrink-0">
                                {topic.expectedMarks && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {topic.expectedMarks}
                                  </span>
                                )}
                                {topic.probability ? (
                                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold font-mono border ${
                                    topic.probability.includes("High Chance")
                                      ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                      : topic.probability.includes("Medium Chance")
                                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                      : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                                  }`}>
                                    {topic.probability}
                                  </span>
                                ) : topic.isImportantForBoards && (
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
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
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
                  isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
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
                  isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
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
                      ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-white hover:border-amber-500/50 shadow-md"
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
                      isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
                        isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
        
        
        {/* ===================== TAB: VISUAL MNEMONICS HUB ===================== */}
        {activeTab === "mnemonics" && (
          <MnemonicGallery isDark={isDark} />
        )}

        {/* ===================== TAB: THEOREMS & MANDATORY BOARD EXAMPLES ===================== */}
        {activeTab === "theorems" && (
          <TheoremsAndExamplesView
            isDark={isDark}
            onOpenQuestionBank={() => setActiveTab("questions")}
          />
        )}

        {/* ===================== TAB 4: TRAINING VAULT (PREMIUM) ===================== */}
        {activeTab === "questions" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-8 rounded-3xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.1)]" : "bg-white border-slate-200 shadow-xl"
            }`}>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Master Training Vault
                </h2>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} font-medium max-w-lg`}>
                  Board-level questions with highly detailed, step-by-step mathematical reasoning. Syllabus-aware progressive loading.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <select 
                  className={`px-4 py-2 rounded-xl text-sm font-bold border outline-none cursor-pointer ${isDark ? "bg-black/40 border-white/10 text-white focus:border-emerald-500" : "bg-white border-slate-200"}`}
                  onChange={(e) => loadChapterData(parseInt(e.target.value))}
                  value={activeVaultChapter || ""}
                  disabled={isAnalyzingVault}
                >
                  <option value="6">Ch 6: Triangles (60 Questions)</option>
                  <option value="8">Ch 8: Introduction to Trigonometry (60 Questions)</option>
                  <option value="9">Ch 9: Some Applications of Trig (55 Questions)</option>
                  <option value="10">Ch 10: Circles (55 Questions)</option>
                  <option value="13">Ch 13: Statistics (55 Questions)</option>
                  <option value="14">Ch 14: Probability (55 Questions)</option>
                </select>
              </div>
            </div>

            {isAnalyzingVault && (
              <div className={`p-8 rounded-3xl border space-y-4 ${isDark ? "bg-black/40 border-white/5" : "bg-slate-50 border-slate-200"}`}>
                <div className="flex items-center gap-3 text-emerald-400 mb-6">
                  <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                  <span className="font-bold tracking-wider uppercase text-sm">Deep PDF Analysis Engine Running...</span>
                </div>
                <div className="space-y-2 font-mono text-xs sm:text-sm">
                  {vaultAnalysisLogs.map((log, i) => (
                    <div key={i} className={`${log.startsWith("✓") ? "text-emerald-400" : log.startsWith("❌") ? "text-red-400" : isDark ? "text-slate-400" : "text-slate-500"} animate-fade-in`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isAnalyzingVault && activeVaultChapter !== null && (
              <div className="space-y-6">
                {/* Format Filter Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-2 border-b border-white/10 pb-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { id: "all", label: `All Questions (${activeVaultQuestions.length})` },
                      { id: "1", label: "1M: MCQ & A/R" },
                      { id: "2", label: "2M: Short Answer I" },
                      { id: "3", label: "3M: Short Answer II" },
                      { id: "5", label: "5M: Proofs & HOTS" },
                      { id: "case", label: "4M: Case Studies" }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setVaultFilter(f.id as any)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          vaultFilter === f.id
                            ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                            : isDark
                            ? "bg-black/40 text-slate-400 hover:text-white border border-white/5"
                            : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  <span className={`text-xs font-bold uppercase font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Syllabus Verified: 100% Board Standard
                  </span>
                </div>

                {activeVaultQuestions
                  .filter(q => {
                    if (vaultFilter === "all") return true;
                    if (vaultFilter === "1") return q.marks === 1 || q.type === "MCQ";
                    if (vaultFilter === "2") return q.marks === 2;
                    if (vaultFilter === "3") return q.marks === 3;
                    if (vaultFilter === "5") return q.marks === 5 || q.type === "LA" || q.type === "Proof";
                    if (vaultFilter === "case") return q.type === "Case Study" || q.marks === 4;
                    return true;
                  })
                  .map((q) => {
                  const isRevealed = revealedQuestionIds[q.id] ?? false;
                  return (
                  <div
                    key={q.id}
                    className={`virtual-card p-6 sm:p-8 rounded-3xl border space-y-5 transition-all duration-300 ${
                      isDark 
                        ? "glass-card border-white/[0.08] hover:border-emerald-500/30 hover:shadow-[0_12px_40px_rgba(16,185,129,0.06)]" 
                        : "glass-card-light border-slate-200/80 shadow-md hover:shadow-xl"
                    }`}
                  >
                    <div className="flex flex-wrap justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${
                          isDark ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border-emerald-200"
                        }`}>
                          {q.type} • {q.marks} Marks
                        </span>
                        <span className={`text-sm font-bold ${isDark ? "text-gray-300" : "text-slate-800"}`}>{q.chapterName}</span>
                        {q.source && (
                          <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-md ${isDark ? "text-slate-400 border-white/10 bg-white/[0.03]" : "text-slate-600 border-slate-200 bg-slate-100"}`}>
                            {q.source}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          playSound("click");
                          setRevealedQuestionIds((prev) => ({ ...prev, [q.id]: !isRevealed }));
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                          isRevealed
                            ? isDark
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold"
                            : isDark
                            ? "bg-white/5 hover:bg-white/10 text-white border border-white/5"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 font-bold"
                        }`}
                      >
                        {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        <span>{isRevealed ? "Fold Answer Sheet" : "Open Master Answer Sheet"}</span>
                      </button>
                    </div>

                    <div className={`text-base sm:text-lg font-semibold leading-relaxed ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                      <PremiumMathRenderer content={`### Question\n\n${q.question}`} isDark={isDark} />
                    </div>

                    {/* MCQ Options Grid */}
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {q.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-xl text-xs font-mono border flex items-center gap-2.5 ${
                              isRevealed && q.correctOption === optIdx
                                ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/50 font-bold"
                                : isDark
                                ? "bg-black/30 border-white/5 text-slate-300"
                                : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${isDark ? "bg-white/10 text-white" : "bg-slate-200 text-slate-900"}`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Notebook Solution Breakdown - Single Plain Paper Sheet */}
                    {isRevealed && (
                      <div className={`mt-6 pt-5 border-t border-dashed ${isDark ? "border-white/15" : "border-slate-200"} animate-fade-in`}>
                        <NotebookSolutionView question={q} isDark={isDark} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            )}
          </div>
        )}
{activeTab === "experiments" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1 transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
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
                    isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-xs"
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
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
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
                      isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <h4 className="font-bold text-xs">{rxn.name}</h4>
                      <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[9px] font-mono">{rxn.type}</span>
                    </div>

                    <div className={`p-2.5 rounded-lg font-mono text-xs font-semibold border overflow-x-auto ${
                      isDark ? "bg-[#0b0f19] border-white/10 text-amber-300" : "bg-slate-50 border-slate-200 text-slate-900"
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
            <div className="space-y-3 pt-3 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-amber-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Mandatory SST Map Work Checklist (+15 XP per item)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {MANDATORY_MAP_LOCATIONS.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-xs"
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
                                ? "bg-[#0b0f19] border-white/10 text-slate-300 hover:border-slate-700"
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
        


        {/* ===================== TAB: MY MISTAKES (ERROR LOG) ===================== */}
        {activeTab === "common_mistakes" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-8 rounded-3xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(234,88,12,0.1)]" : "bg-white border-slate-200 shadow-xl text-slate-900"
            }`}>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Flame className="w-8 h-8 text-orange-500" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    My Mistakes Error Log
                  </h2>
                </div>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} font-medium max-w-2xl`}>
                  Your personal repository of incorrect attempts. Analyze, retry, and permanently fix weak areas before boards.
                </p>
              </div>
              <button 
                onClick={() => {
                  playSound("click");
                  setIsAddMistakeModalOpen(true);
                }}
                className={`px-4 py-2 font-bold text-sm rounded-xl border transition-all cursor-pointer ${
                  isDark ? "bg-white/10 hover:bg-white/15 border-white/10 text-white" : "bg-slate-900 text-white hover:bg-slate-800 shadow-xs"
                }`}
              >
                + Add Mistake Manually
              </button>
            </div>

            {/* CHAPTER FILTER PILLS */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                "All",
                "Ch 6: Triangles",
                "Ch 8: Introduction to Trigonometry",
                "Ch 9: Some Applications of Trig",
                "Ch 10: Circles",
                "Ch 13: Statistics"
              ].map((chTab) => (
                <button
                  key={chTab}
                  onClick={() => {
                    playSound("click");
                    setMistakeChapterFilter(chTab);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer shrink-0 ${
                    mistakeChapterFilter === chTab
                      ? isDark
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                        : "bg-amber-500 text-slate-950 border-amber-600 font-black shadow-md"
                      : isDark
                      ? "bg-black/40 border-white/10 text-slate-400 hover:text-white"
                      : "bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs"
                  }`}
                >
                  {chTab}
                </button>
              ))}
            </div>

            {isLoadingMistakes ? (
              <div className={`text-center p-12 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Loading your error log...</div>
            ) : myMistakes.filter((item) => {
                if (mistakeChapterFilter === "All") return true;
                if (mistakeChapterFilter === "Ch 6: Triangles") return item.chapter?.includes("6") || item.chapter?.includes("Triangles");
                if (mistakeChapterFilter === "Ch 8: Introduction to Trigonometry") return item.chapter?.includes("8") || (item.chapter?.includes("Trigonometry") && !item.chapter?.includes("Applications"));
                if (mistakeChapterFilter === "Ch 9: Some Applications of Trig") return item.chapter?.includes("9") || item.chapter?.includes("Applications");
                if (mistakeChapterFilter === "Ch 10: Circles") return item.chapter?.includes("10") || item.chapter?.includes("Circles");
                if (mistakeChapterFilter === "Ch 13: Statistics") return item.chapter?.includes("13") || item.chapter?.includes("Statistics");
                return item.chapter === mistakeChapterFilter;
              }).length === 0 ? (
              <div className={`text-center p-12 border rounded-3xl ${isDark ? "bg-black/20 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
                <Flame className={`w-12 h-12 mx-auto mb-4 ${isDark ? "text-slate-700" : "text-slate-400"}`} />
                <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>No Mistakes Logged in this Category!</h3>
                <p className="text-xs">When you get a question wrong during practice, it will appear here for review.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {myMistakes
                  .filter((item) => {
                    if (mistakeChapterFilter === "All") return true;
                    if (mistakeChapterFilter === "Ch 6: Triangles") return item.chapter?.includes("6") || item.chapter?.includes("Triangles");
                    if (mistakeChapterFilter === "Ch 8: Introduction to Trigonometry") return item.chapter?.includes("8") || (item.chapter?.includes("Trigonometry") && !item.chapter?.includes("Applications"));
                    if (mistakeChapterFilter === "Ch 9: Some Applications of Trig") return item.chapter?.includes("9") || item.chapter?.includes("Applications");
                    if (mistakeChapterFilter === "Ch 10: Circles") return item.chapter?.includes("10") || item.chapter?.includes("Circles");
                    if (mistakeChapterFilter === "Ch 13: Statistics") return item.chapter?.includes("13") || item.chapter?.includes("Statistics");
                    return item.chapter === mistakeChapterFilter;
                  })
                  .map((item, idx) => {
                    const isResolved = resolvedMistakeIds[item.id] || false;
                    return (
                      <div key={idx} className={`virtual-card p-6 sm:p-8 rounded-3xl border transition-all ${
                        isDark ? "bg-[#121212]/70 backdrop-blur-xl border-white/10 text-slate-100" : "bg-white border-slate-200 shadow-md text-slate-900"
                      }`}>
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded border ${
                            isDark ? "bg-orange-900/30 text-orange-400 border-orange-500/20" : "bg-orange-50 text-orange-800 border-orange-200"
                          }`}>{item.subject}</span>
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded border ${
                            isDark ? "bg-blue-900/30 text-blue-400 border-blue-500/20" : "bg-blue-50 text-blue-800 border-blue-200"
                          }`}>{item.chapter}</span>
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded border ${
                            isDark ? "bg-red-900/30 text-red-400 border-red-500/20" : "bg-red-50 text-red-800 border-red-200"
                          }`}>Priority: {item.priority}</span>
                          
                          {isResolved && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3 h-3" /> Resolved
                            </span>
                          )}

                          <span className={`text-xs ml-auto font-mono ${isDark ? "text-slate-500" : "text-slate-500"}`}>{item.dateAdded}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Question Statement</h4>
                            <div className={`text-sm sm:text-base font-medium p-4 rounded-xl border ${
                              isDark ? "bg-slate-900/50 border-white/5 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                            }`}>
                              <PremiumMathRenderer content={item.question} isDark={isDark} />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className={`p-4 rounded-xl border ${
                              isDark ? "bg-red-950/20 border-red-900/30 text-red-200" : "bg-red-50/90 border-red-200 text-red-950 shadow-2xs"
                            }`}>
                              <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1 ${
                                isDark ? "text-red-400" : "text-red-800 font-black"
                              }`}><span className="text-red-500">❌</span> My Answer</h4>
                              <div className={`text-sm font-mono ${isDark ? "text-red-200" : "text-red-950 font-bold"}`}>
                                <PremiumMathRenderer content={item.wrongAnswer} isDark={isDark} />
                              </div>
                              <div className={`mt-3 pt-3 border-t ${isDark ? "border-red-900/30" : "border-red-200"}`}>
                                <p className={`text-xs ${isDark ? "text-red-300" : "text-red-900 font-medium"}`}>
                                  <strong className={isDark ? "text-red-200" : "text-red-950"}>Why it's wrong:</strong> {item.reason}
                                </p>
                              </div>
                            </div>

                            <div className={`p-4 rounded-xl border ${
                              isDark ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-200" : "bg-emerald-50/90 border-emerald-200 text-emerald-950 shadow-2xs"
                            }`}>
                              <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1 ${
                                isDark ? "text-emerald-400" : "text-emerald-800 font-black"
                              }`}><span className="text-emerald-500">✅</span> Correct Approach</h4>
                              <div className={`text-sm font-mono whitespace-pre-line ${isDark ? "text-emerald-200" : "text-emerald-950 font-bold"}`}>
                                <PremiumMathRenderer content={item.correctAnswer} isDark={isDark} />
                              </div>
                              <div className={`mt-3 pt-3 border-t ${isDark ? "border-emerald-900/30" : "border-emerald-200"} flex items-center justify-between`}>
                                <p className={`text-xs ${isDark ? "text-emerald-300" : "text-emerald-900 font-medium"}`}>
                                  <strong className={isDark ? "text-emerald-200" : "text-emerald-950"}>Concept:</strong> {item.concept}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Panel */}
                        <div className={`mt-6 pt-6 border-t flex flex-wrap items-center gap-3 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                          <button 
                            onClick={() => {
                              playSound("click");
                              setRetryingMistake(item);
                              setRetryStudentAnswer("");
                              setShowRetryModelSolution(false);
                            }}
                            className="px-4 py-2 text-xs font-bold bg-amber-500 text-slate-950 rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                          >
                            <Target className="w-4 h-4"/> Retry Question
                          </button>
                          <button 
                            onClick={() => handleConvertMistakeToFlashcard(item)}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer ${
                              isDark ? "bg-slate-800 text-white border border-white/10 hover:bg-slate-700" : "bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            <BookMarked className="w-4 h-4"/> Add to Flashcards
                          </button>
                          <button 
                            onClick={() => handleToggleResolveMistake(item.id)}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ml-auto cursor-pointer ${
                              isResolved
                                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm font-black"
                                : isDark
                                ? "bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:bg-slate-700"
                                : "bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            <CheckCircle2 className={`w-4 h-4 ${isResolved ? "text-white" : "text-emerald-500"}`} />
                            <span>{isResolved ? "Resolved & Mastered ✓" : "Mark as Resolved (+30 XP)"}</span>
                          </button>
                        </div>

                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {activeTab === "roadmap" && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className={`p-4 sm:p-6 rounded-2xl border space-y-1.5 transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-sm"
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
                    isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10" : "bg-white border-slate-200 shadow-xs"
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
                <div className={`p-3.5 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">1. Box Final Numerical Answers</h4>
                  <p className="text-slate-400">Enclose your final numerical value in a clean box: <strong>[ x = 6 km/h ]</strong> so the examiner spots it immediately.</p>
                </div>
                <div className={`p-3.5 rounded-xl border space-y-1 ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-slate-50 border-slate-200"}`}>
                  <h4 className="font-bold text-amber-400">2. Always Write Formula First</h4>
                  <p className="text-slate-400">Writing <strong>1/f = 1/v - 1/u</strong> carries a mandatory 0.5 to 1 mark in the official rubric.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB: CHAPTER COMMAND (SYSTEMATIC MULTI-SUBJECT ARCHITECTURE) ===================== */}
        {activeTab === "chapter_dashboard" && (() => {
          const activeSubject = CBSE_SUBJECTS.find((s) => s.id === commandSubjectId) || CBSE_SUBJECTS[0];
          const activeChapter = activeSubject.chapters.find((c) => c.id === commandChapterId) || activeSubject.chapters[0];
          const ncertNum = activeChapter.ncertChapterNo;

          // Real, dynamic calculation from student progress (0% for fresh users)
          const totalTopics = activeChapter.topics.length;
          const completedTopicsCount = activeChapter.topics.filter((t) => completedTopicIds[t.id]).length;
          const progressPct = totalTopics > 0 ? Math.round((completedTopicsCount / totalTopics) * 100) : 0;
          const masteryPct = progressPct; // Starts at 0%

          // Real count of attempts / questions for this chapter
          const chapterQuestionsCount = activeVaultQuestions.length > 0 && ncertNum === activeVaultChapter
            ? activeVaultQuestions.length 
            : (totalTopics * 4 || 25);
          const attemptedCount = Math.min(completedTopicsCount, chapterQuestionsCount);
          const attemptedStr = `${attemptedCount}/${chapterQuestionsCount}`;
          const accuracyStr = attemptedCount > 0 ? `${Math.min(100, Math.round((completedTopicsCount / attemptedCount) * 100))}%` : "0%";

          // Real mistake count for this chapter
          const chapterMistakesCount = myMistakes.filter((m) => {
            const chap = (m.chapter || "").toLowerCase();
            const sName = (activeChapter.name || "").toLowerCase();
            return chap.includes(sName) || (ncertNum && chap.includes(`ch ${ncertNum}`));
          }).length;

          // Real flashcards count
          const chapterFlashcardsCount = CHAPTER_WISE_FLASHCARDS.filter((fc) => 
            fc.chapter?.toLowerCase().includes(activeChapter.name.toLowerCase())
          ).length + customFlashcards.filter((fc) => 
            fc.chapter?.toLowerCase().includes(activeChapter.name.toLowerCase())
          ).length;

          // Weak areas: unmastered topics
          const uncompletedTopics = activeChapter.topics.filter((t) => !completedTopicIds[t.id]);
          const weakAreas = uncompletedTopics.length > 0
            ? uncompletedTopics.slice(0, 3).map((t) => t.title)
            : ["All Core NCERT Topics Completed! 🎉"];

          // Dynamic Concept Mastery Nodes from chapter topics
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

          return (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
              isDark ? "bg-[#121212]/80 backdrop-blur-2xl border-white/10" : "bg-white border-slate-200"
            }`}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase">
                      # {activeChapter.name}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                      {activeSubject.name.split(" ")[0]} Command
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {activeSubject.name} • {totalTopics} Official NCERT Sub-Topics
                  </p>
                </div>

                {/* Dual Subject & Chapter Selectors */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <div className="flex items-center gap-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0">Subject:</label>
                    <select 
                      className={`px-3 py-2 rounded-xl text-xs font-bold border outline-none cursor-pointer transition-all ${
                        isDark ? "bg-black/50 border-white/10 text-white focus:border-emerald-500" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      value={commandSubjectId}
                      onChange={(e) => {
                        playSound("click");
                        const newSubId = e.target.value;
                        setCommandSubjectId(newSubId);
                        const sub = CBSE_SUBJECTS.find((s) => s.id === newSubId);
                        if (sub && sub.chapters.length > 0) {
                          setCommandChapterId(sub.chapters[0].id);
                          if (sub.chapters[0].ncertChapterNo) {
                            loadChapterData(sub.chapters[0].ncertChapterNo);
                          }
                        }
                      }}
                    >
                      {CBSE_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0">Chapter:</label>
                    <select 
                      className={`px-3 py-2 rounded-xl text-xs font-bold border outline-none cursor-pointer transition-all max-w-[220px] truncate ${
                        isDark ? "bg-black/50 border-white/10 text-white focus:border-emerald-500" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      value={commandChapterId}
                      onChange={(e) => {
                        playSound("click");
                        const newChId = e.target.value;
                        setCommandChapterId(newChId);
                        const ch = activeSubject.chapters.find((c) => c.id === newChId);
                        if (ch?.ncertChapterNo) {
                          loadChapterData(ch.ncertChapterNo);
                        }
                      }}
                    >
                      {activeSubject.chapters.map((ch, idx) => (
                        <option key={ch.id} value={ch.id}>
                          {ch.ncertChapterNo ? `Ch ${ch.ncertChapterNo}: ` : `${idx + 1}. `}{ch.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Stats Grid - 100% Dynamic starting from 0 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
                  <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Progress</p>
                    <p className="text-xl font-mono font-black text-emerald-400">{progressPct}%</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Mastery</p>
                    <p className="text-xl font-mono font-black text-amber-400">{masteryPct}%</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Attempted</p>
                    <p className="text-xl font-mono font-black text-cyan-400">{attemptedStr}</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Accuracy</p>
                    <p className="text-xl font-mono font-black text-blue-400">{accuracyStr}</p>
                  </div>
                </div>
              </div>

              {/* Concept Guide Action Bar */}
              <div className={`mt-6 p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                isDark ? "bg-gradient-to-r from-emerald-950/40 via-cyan-950/20 to-transparent border-emerald-500/20" : "bg-emerald-50/70 border-emerald-200"
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400">Concepts & Blueprint: {activeChapter.name}</h4>
                    <p className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      Full curriculum coverage, mandatory board definitions, high-yield patterns, and examiner grading rubric.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    playSound("click");
                    setIsConceptExplainerOpen(!isConceptExplainerOpen);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isConceptExplainerOpen ? "Hide Concept Guide" : `Read Ch ${ncertNum} Deep Concept Guide`}</span>
                </button>
              </div>

              {/* Concept Explainer Render */}
              {isConceptExplainerOpen && (
                <div className="mt-6 animate-fade-in">
                  <ChapterConceptExplainer
                    chapterId={ncertNum || 6}
                    isDark={isDark}
                    onClose={() => setIsConceptExplainerOpen(false)}
                    onOpenQuestions={() => {
                      setIsConceptExplainerOpen(false);
                      setActiveTab("questions");
                    }}
                    onChapterChange={(newChNo) => {
                      const matched = activeSubject.chapters.find((c) => (c.ncertChapterNo || c.id) === newChNo);
                      if (matched) {
                        setCommandChapterId(matched.id);
                      }
                    }}
                  />
                </div>
              )}

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border ${isDark ? "bg-red-950/20 border-red-900/30" : "bg-red-50 border-red-200"}`}>
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Flame className="w-4 h-4"/> Next Target Topics ({uncompletedTopics.length} Remaining)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {weakAreas.map((w, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-red-900/40 text-red-300 border border-red-800/50">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${isDark ? "bg-amber-950/20 border-amber-900/30" : "bg-amber-50 border-amber-200"}`}>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <BookMarked className="w-4 h-4"/> Due for Revision
                  </h4>
                  <div className="flex justify-between items-center text-sm font-medium text-slate-300">
                    <span>{chapterFlashcardsCount} Flashcards Available</span>
                    <span>{chapterMistakesCount} Error Logs Recorded</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button 
                      onClick={() => { playSound("click"); setActiveTab("flashcards"); }}
                      className="flex-1 py-1.5 text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-lg transition-colors cursor-pointer"
                    >
                      Start Flashcards
                    </button>
                    <button 
                      onClick={() => { playSound("click"); setActiveTab("common_mistakes"); }}
                      className="flex-1 py-1.5 text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-lg transition-colors cursor-pointer"
                    >
                      Review Mistakes
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Grid (All Modules Fully Functional) */}
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Direct Module Command (Click to Navigate Instantly)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {[
                    { label: 'Master Question Bank', action: () => setActiveTab('questions'), icon: Zap },
                    { label: 'Theorems & Proofs (5M)', action: () => setActiveTab('theorems'), icon: Award },
                    { label: 'Visual Mnemonics', action: () => setActiveTab('mnemonics'), icon: Sparkles },
                    { label: 'Flashcards Engine', action: () => setActiveTab('flashcards'), icon: BookMarked },
                    { label: 'My Mistakes Log', action: () => setActiveTab('common_mistakes'), icon: Flame },
                    { label: 'Test Series (Sept 14)', action: () => setActiveTab('test_series'), icon: Calendar },
                    { label: 'Daily Pomodoro Routine', action: () => setActiveTab('today'), icon: Clock },
                    { label: 'Lab Experiments', action: () => setActiveTab('experiments'), icon: FlaskConical },
                    { label: 'Color Reactions', action: () => setActiveTab('reactions'), icon: Flame },
                    { label: 'NCERT Full Syllabus', action: () => setActiveTab('syllabus'), icon: Compass }
                  ].map((module, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                        playSound("click");
                        module.action();
                      }} 
                      className={`p-3 text-left rounded-2xl border transition-all cursor-pointer flex items-center gap-2.5 ${
                        isDark 
                          ? "bg-slate-900/50 border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-slate-300 hover:text-white" 
                          : "bg-white border-slate-200 hover:border-emerald-500 hover:bg-emerald-50"
                      }`}
                    >
                      <module.icon className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold truncate">{module.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Concept Mastery Map (Dynamic by Chapter Topics) */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400">
                    <Compass className="w-4 h-4 text-cyan-400"/> Concept Mastery Map: {activeChapter.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500">Tap topic to mark mastered & claim +25 XP</span>
                </div>
                <div className={`p-6 rounded-2xl border ${isDark ? "bg-[#0b0f19] border-white/10" : "bg-slate-50 border-slate-200"}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {concepts.map((concept, cIdx) => (
                      <div 
                        key={cIdx} 
                        onClick={() => {
                          toggleTopic(concept.id);
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                          concept.pct > 0
                            ? isDark
                              ? "bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                              : "bg-emerald-50 border-emerald-300 shadow-sm"
                            : isDark
                            ? "bg-slate-900/40 border-white/10 hover:border-white/20"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-mono font-bold shrink-0 text-xs ${
                          concept.pct > 0
                            ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                            : isDark
                            ? "border-slate-700 bg-slate-800 text-slate-400"
                            : "border-slate-300 bg-slate-100 text-slate-600"
                        }`}>
                          {concept.pct}%
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold truncate ${concept.pct > 0 ? (isDark ? "text-emerald-300" : "text-emerald-900") : (isDark ? "text-white" : "text-slate-900")}`}>
                            {concept.name}
                          </p>
                          <span className={`text-[10px] font-mono font-semibold ${concept.pct > 0 ? "text-emerald-400" : "text-slate-400"}`}>
                            {concept.status} • Tap to toggle
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
          );
        })()}


      </main>

      {/* =========================================================================
          MOBILE BOTTOM NAVIGATION DOCK (FIXED AT BOTTOM FOR PHONES)
          ========================================================================= */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-2xl px-2 py-1.5 transition-colors ${
        isDark ? "border-white/10/90 bg-[#090d16]/95 text-white" : "border-slate-200 bg-white/95 text-slate-900 shadow-lg"
      }`}>
        <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
          {[
            { id: "chapter_dashboard", label: "Command", icon: Target },
            { id: "questions", label: "Questions", icon: Zap },
            { id: "mnemonics", label: "Mnemonics", icon: Sparkles },
            { id: "test_series", label: "Tests", icon: Calendar },
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
            isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-white/10">
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
                { id: "theorems", label: "Theorems & Examples", icon: Award },
                { id: "flashcards", label: "Flashcards", icon: BookMarked },
                { id: "common_mistakes", label: "My Mistakes Log", icon: Flame },
                { id: "today", label: "Daily Focus", icon: Clock },
                { id: "syllabus", label: "NCERT Tracker", icon: BookOpen },
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
                      ? "bg-[#0b0f19] border-white/10 text-slate-200"
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}
                >
                  <m.icon className="w-4 h-4" />
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setIsMobileMoreOpen(false);
                  handleResetProgress();
                }}
                className={`flex-1 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDark ? "bg-rose-950/40 border-rose-800/50 text-rose-300" : "bg-rose-50 border-rose-300 text-rose-700"
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset (0 XP)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LEVEL UP CELEBRATION MODAL
          ========================================================================= */}
      {levelUpModalData && (
        <div 
          onClick={() => setLevelUpModalData(null)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`border-2 border-amber-500/60 rounded-3xl w-full max-w-sm p-6 text-center space-y-4 shadow-2xl relative cursor-default ${
            isDark ? "bg-[#121212]/80 backdrop-blur-xl text-white" : "bg-white text-slate-900"
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
            isDark ? "bg-[#121212]/80 backdrop-blur-xl border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex justify-between items-center border-b pb-3 border-white/10">
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
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-white/10 text-white min-h-[40px]"
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
                    className="w-full p-2.5 rounded-xl border bg-slate-950 border-white/10 text-white min-h-[40px]"
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
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-white/10 text-white min-h-[40px]"
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
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-white/10 text-white"
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
                  className="w-full p-2.5 rounded-xl border bg-slate-950 border-white/10 text-white"
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
            isDark ? "bg-[#121212]/95 backdrop-blur-xl border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Add HOTS Problem to Bank (+40 XP)
              </h3>
              <button
                onClick={() => setShowQuestionModal(false)}
                className={`p-1 cursor-pointer ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomQuestion} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Type</label>
                  <select
                    className={`w-full p-2.5 rounded-xl border min-h-[40px] font-medium ${
                      isDark ? "bg-slate-950 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
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
                  <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Subject</label>
                  <select
                    className={`w-full p-2.5 rounded-xl border min-h-[40px] font-medium ${
                      isDark ? "bg-slate-950 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
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
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Chapter Name</label>
                <input
                  type="text"
                  placeholder="e.g. Introduction to Trigonometry"
                  className={`w-full p-2.5 rounded-xl border min-h-[40px] ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newQuestionForm.chapter}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, chapter: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Question / Proof Statement</label>
                <textarea
                  rows={3}
                  placeholder="Enter the problem statement..."
                  className={`w-full p-2.5 rounded-xl border ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newQuestionForm.question}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, question: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Final Result / Proved Statement</label>
                <input
                  type="text"
                  placeholder="e.g. LHS = RHS, x = 6 km/h"
                  className={`w-full p-2.5 rounded-xl border min-h-[40px] ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newQuestionForm.correctAnswer}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, correctAnswer: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Step-by-Step Solution</label>
                <textarea
                  rows={3}
                  placeholder="Model derivation steps..."
                  className={`w-full p-2.5 rounded-xl border ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newQuestionForm.explanation}
                  onChange={(e) => setNewQuestionForm({ ...newQuestionForm, explanation: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 font-bold rounded-xl text-xs cursor-pointer min-h-[44px] ${
                  isDark ? "bg-slate-100 text-slate-950 hover:bg-white" : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                }`}
              >
                Save to Problem Bank (+40 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ADD MISTAKE MANUALLY MODAL */}
      {isAddMistakeModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className={`border rounded-3xl w-full max-w-lg p-5 sm:p-6 space-y-4 shadow-2xl my-8 max-h-[90vh] overflow-y-auto ${
            isDark ? "bg-[#121212]/95 backdrop-blur-xl border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className={`flex justify-between items-center border-b pb-3 ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span>Log Exam Mistake / Blunder</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-mono">+25 XP</span>
              </h3>
              <button
                onClick={() => setIsAddMistakeModalOpen(false)}
                className={`p-1 cursor-pointer text-base ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
              >
                ✕
              </button>
            </div>

            <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Record your slip-ups, misread formulas, or conceptual traps. Turning mistakes into mastery guarantees your 100% board score.
            </p>

            <form onSubmit={handleAddCustomMistake} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Subject</label>
                  <select
                    className={`w-full p-2.5 rounded-xl border min-h-[40px] font-medium ${
                      isDark ? "bg-slate-950 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                    value={newMistakeForm.subject}
                    onChange={(e) => setNewMistakeForm({ ...newMistakeForm, subject: e.target.value })}
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Chapter</label>
                  <select
                    className={`w-full p-2.5 rounded-xl border min-h-[40px] font-medium ${
                      isDark ? "bg-slate-950 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                    value={newMistakeForm.chapter}
                    onChange={(e) => setNewMistakeForm({ ...newMistakeForm, chapter: e.target.value })}
                  >
                    <option value="Ch 6: Triangles">Ch 6: Triangles</option>
                    <option value="Ch 8: Introduction to Trigonometry">Ch 8: Trigonometry</option>
                    <option value="Ch 9: Some Applications of Trig">Ch 9: Heights & Distances</option>
                    <option value="Ch 10: Circles">Ch 10: Circles</option>
                    <option value="Ch 13: Statistics">Ch 13: Statistics</option>
                    <option value="Ch 1: Chemical Reactions">Ch 1: Chemical Reactions</option>
                    <option value="Ch 9: Light - Reflection & Refraction">Ch 9: Light</option>
                    <option value="Ch 11: Electricity">Ch 11: Electricity</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Priority</label>
                  <select
                    className={`w-full p-2.5 rounded-xl border min-h-[40px] font-medium ${
                      isDark ? "bg-slate-950 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                    value={newMistakeForm.priority}
                    onChange={(e) => setNewMistakeForm({ ...newMistakeForm, priority: e.target.value as any })}
                  >
                    <option value="HIGH">HIGH (Dangerous Trap)</option>
                    <option value="MEDIUM">MEDIUM (Silly Slip)</option>
                    <option value="LOW">LOW (Calculation Check)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Question / Problem Statement *
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. In △ABC, DE ∥ BC. If AD=2 cm, DB=3 cm, and AE=1.6 cm, find AC."
                  className={`w-full p-2.5 rounded-xl border ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newMistakeForm.question}
                  onChange={(e) => setNewMistakeForm({ ...newMistakeForm, question: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 flex items-center gap-1 ${
                    isDark ? "text-rose-400" : "text-rose-700 font-bold"
                  }`}>
                    <span>❌ What You Wrote (Wrong Answer)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Calculated EC = 2.4 cm and forgot to add AE to report AC = 4.0 cm."
                    className={`w-full p-2.5 rounded-xl border ${
                      isDark ? "bg-rose-950/20 border-rose-900/40 text-rose-200 placeholder-rose-400/50" : "bg-rose-50/70 border-rose-200 text-rose-950 placeholder-rose-700/50"
                    }`}
                    value={newMistakeForm.wrongAnswer}
                    onChange={(e) => setNewMistakeForm({ ...newMistakeForm, wrongAnswer: e.target.value })}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-1 flex items-center gap-1 ${
                    isDark ? "text-amber-400" : "text-amber-800 font-bold"
                  }`}>
                    <span>⚠️ Root Cause / Exam Trap</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Rushed to finish; reported segment EC instead of full side AC."
                    className={`w-full p-2.5 rounded-xl border ${
                      isDark ? "bg-amber-950/20 border-amber-900/40 text-amber-200 placeholder-amber-400/50" : "bg-amber-50/70 border-amber-200 text-amber-950 placeholder-amber-700/50"
                    }`}
                    value={newMistakeForm.reason}
                    onChange={(e) => setNewMistakeForm({ ...newMistakeForm, reason: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 flex items-center gap-1 ${
                  isDark ? "text-emerald-400" : "text-emerald-800 font-bold"
                }`}>
                  <span>✅ Board-Accurate Correct Answer & Steps *</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="By BPT: AD/DB = AE/EC => 2/3 = 1.6/EC => EC = 2.4 cm. AC = AE + EC = 1.6 + 2.4 = 4.0 cm."
                  className={`w-full p-2.5 rounded-xl border font-mono ${
                    isDark ? "bg-emerald-950/20 border-emerald-900/40 text-emerald-200 placeholder-emerald-400/50" : "bg-emerald-50/70 border-emerald-200 text-emerald-950 placeholder-emerald-700/50"
                  }`}
                  value={newMistakeForm.correctAnswer}
                  onChange={(e) => setNewMistakeForm({ ...newMistakeForm, correctAnswer: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className={`block text-[10px] font-bold uppercase mb-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Core Board Concept Mastered
                </label>
                <input
                  type="text"
                  placeholder="e.g. Basic Proportionality Theorem (Thales' Theorem)"
                  className={`w-full p-2.5 rounded-xl border min-h-[40px] ${
                    isDark ? "bg-slate-950 border-white/10 text-white placeholder-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                  value={newMistakeForm.concept}
                  onChange={(e) => setNewMistakeForm({ ...newMistakeForm, concept: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 font-bold rounded-xl text-xs sm:text-sm cursor-pointer min-h-[46px] transition-all flex items-center justify-center gap-2 ${
                    isDark ? "bg-orange-500 hover:bg-orange-400 text-slate-950 font-black" : "bg-orange-600 hover:bg-orange-500 text-white shadow-md font-black"
                  }`}
                >
                  <Flame className="w-4 h-4" /> Record Mistake in Error Log (+25 XP)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RETRY MISTAKE PRACTICE MODAL */}
      {retryingMistake && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className={`border rounded-3xl w-full max-w-2xl p-5 sm:p-7 space-y-5 shadow-2xl my-8 max-h-[92vh] overflow-y-auto ${
            isDark ? "bg-[#0c121e] border-slate-800 text-slate-100" : "bg-white border-slate-300 text-slate-900"
          }`}>
            {/* Modal Header */}
            <div className={`flex justify-between items-start border-b pb-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-lg bg-amber-500/10 text-amber-500">
                    <Target className="w-4 h-4" />
                  </span>
                  <h3 className="font-bold text-base sm:text-lg">Targeted Mistake Practice</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${
                    isDark ? "bg-orange-950/40 text-orange-400 border-orange-800/40" : "bg-orange-50 text-orange-800 border-orange-200"
                  }`}>{retryingMistake.subject}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${
                    isDark ? "bg-blue-950/40 text-blue-400 border-blue-800/40" : "bg-blue-50 text-blue-800 border-blue-200"
                  }`}>{retryingMistake.chapter}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded border ${
                    isDark ? "bg-red-950/40 text-red-400 border-red-800/40" : "bg-red-50 text-red-800 border-red-200"
                  }`}>Priority: {retryingMistake.priority}</span>
                </div>
              </div>

              <button
                onClick={() => setRetryingMistake(null)}
                className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                  isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                ✕
              </button>
            </div>

            {/* Question Card */}
            <div>
              <label className={`block text-[11px] font-bold uppercase tracking-wider mb-2 font-mono ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>Problem Statement</label>
              <div className={`p-4 rounded-2xl border text-sm sm:text-base leading-relaxed ${
                isDark ? "bg-slate-900/60 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
              }`}>
                <PremiumMathRenderer content={retryingMistake.question} isDark={isDark} />
              </div>
            </div>

            {/* Trap Callout */}
            <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
              isDark ? "bg-rose-950/20 border-rose-900/30 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-950"
            }`}>
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold">Avoid Your Previous Blunder:</p>
                <p className="opacity-90"><span className="font-semibold">What you wrote:</span> {retryingMistake.wrongAnswer}</p>
                <p className="opacity-80 text-[11px]"><span className="font-semibold">Root Trap:</span> {retryingMistake.reason}</p>
              </div>
            </div>

            {/* Student Working Scratchpad */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  Your Working Scratchpad (Write Formula & Step-by-Step Here)
                </label>
                <span className="text-[10px] text-slate-500 font-mono">No marks deducted for practice</span>
              </div>
              <textarea
                rows={4}
                placeholder="Write Given, Formula, and step-by-step derivation..."
                className={`w-full p-3.5 rounded-xl border font-mono text-xs sm:text-sm ${
                  isDark ? "bg-slate-950 border-slate-800 text-white placeholder-slate-600" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                }`}
                value={retryStudentAnswer}
                onChange={(e) => setRetryStudentAnswer(e.target.value)}
              />
            </div>

            {/* Reveal Board Model Solution */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  playSound("click");
                  setShowRetryModelSolution(!showRetryModelSolution);
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  showRetryModelSolution
                    ? isDark
                      ? "bg-slate-800 border-slate-700 text-white"
                      : "bg-slate-200 border-slate-300 text-slate-900"
                    : isDark
                    ? "bg-emerald-950/40 border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/40"
                    : "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100"
                }`}
              >
                {showRetryModelSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showRetryModelSolution ? "Hide Board Model Solution" : "Reveal CBSE Board Model Solution"}</span>
              </button>

              {showRetryModelSolution && (
                <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 animate-fade-in ${
                  isDark ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-100" : "bg-emerald-50/90 border-emerald-300 text-emerald-950"
                }`}>
                  <div className="flex items-center justify-between border-b pb-2 border-emerald-500/20">
                    <span className="text-xs font-bold font-mono uppercase tracking-wide flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> CBSE Model Answer
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${
                      isDark ? "bg-emerald-900/40 text-emerald-300 border-emerald-700/40" : "bg-emerald-100 text-emerald-900 border-emerald-300"
                    }`}>
                      {retryingMistake.concept}
                    </span>
                  </div>
                  <div className="text-sm font-mono whitespace-pre-line leading-relaxed">
                    <PremiumMathRenderer content={retryingMistake.correctAnswer} isDark={isDark} />
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className={`pt-3 border-t flex flex-wrap items-center justify-between gap-3 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
              <button
                type="button"
                onClick={() => handleConvertMistakeToFlashcard(retryingMistake)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 cursor-pointer ${
                  isDark ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <BookMarked className="w-4 h-4" /> Save to Flashcards
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setRetryingMistake(null)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer ${
                    isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleToggleResolveMistake(retryingMistake.id);
                    setRetryingMistake(null);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md cursor-pointer flex items-center gap-2 transition-all font-black"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{resolvedMistakeIds[retryingMistake.id] ? "Mark Unresolved" : "Mark Resolved (+30 XP)"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* FOOTER */}
      <footer className={`border-t py-4 text-center text-xs font-mono px-4 ${isDark ? "border-white/10 text-slate-500" : "border-slate-200 text-slate-500"}`}>
        Lakshmipat Singhania Academy Bissau • CBSE Class 10 Command Center (2026–2027)
      </footer>
    </div>
  );
}
