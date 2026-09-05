"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import type { VaultQuestion, VaultChapterInfo } from "@/data/vaultQuestions";
import MnemonicGallery from "@/components/MnemonicGallery";
import NotebookSolutionView from "@/components/NotebookSolutionView";
import ChapterConceptExplainer from "@/components/ChapterConceptExplainer";
import TheoremsAndExamplesView from "@/components/TheoremsAndExamplesView";
import ScienceConceptsView from "@/components/ScienceConceptsView";
import ScienceActivitiesView from "@/components/ScienceActivitiesView";
import ConceptsHubView from "@/components/ConceptsHubView";
import ChemistryReactionsView from "@/components/ChemistryReactionsView";
import ScienceDiagramsView from "@/components/ScienceDiagramsView";
import CompetitiveHotsView from "@/components/CompetitiveHotsView";

import {
  Atom,
  ArrowRight,
  Award,
  Beaker,
  BookOpen,
  Check,
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
  AlertTriangle,
  LayoutGrid,
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
  },
  {
    id: "mst_sci_c1_1",
    subject: "Science",
    chapter: "Ch 1: Chemical Reactions and Equations",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "What is observed when lead nitrate powder 2Pb(NO₃)₂(s) is heated in a boiling tube? Identify the residue and gases evolved.",
    wrongAnswer: "Brown solid residue of lead oxide is formed and a colorless oxygen gas is evolved.",
    reason: "Reversing color of residue and gas! The residue PbO (Lead Monoxide) is YELLOW (cold) or reddish-brown (hot), and the pungent gas evolved is REDDISH-BROWN NITROGEN DIOXIDE (NO₂), along with colorless O₂.",
    correctAnswer: "2Pb(NO₃)₂(s) —[Heat]⟶ 2PbO(s) [Yellow residue] + 4NO₂(g)↑ [Reddish-brown fumes] + O₂(g)↑ [Colorless].\nKey observations:\n1. Emission of brown fumes of nitrogen dioxide (NO₂).\n2. A yellow solid residue of lead monoxide (PbO) remains in the boiling tube.",
    concept: "Thermal decomposition of lead nitrate: Brown fumes = NO₂; Yellow residue = PbO."
  },
  {
    id: "mst_sci_c1_2",
    subject: "Science",
    chapter: "Ch 1: Chemical Reactions and Equations",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "In the reaction: CuO(s) + H₂(g) —[Heat]⟶ Cu(s) + H₂O(l), identify (a) the substance oxidized, (b) the substance reduced, (c) the oxidizing agent, and (d) the reducing agent.",
    wrongAnswer: "(a) Cu is oxidized, (b) H₂O is reduced, (c) H₂ is oxidizing agent, (d) CuO is reducing agent.",
    reason: "Selecting PRODUCTS instead of REACTANTS! Oxidized/reduced substances and oxidizing/reducing agents must ALWAYS be reactants on the left-hand side of the chemical equation.",
    correctAnswer: "1. Substance oxidized = H₂ (gains oxygen to form H₂O).\n2. Substance reduced = CuO (loses oxygen to form Cu).\n3. Oxidizing agent = CuO (provides oxygen for oxidation).\n4. Reducing agent = H₂ (removes oxygen from CuO).",
    concept: "Redox agent identification: All four designations (oxidized, reduced, oxidizing agent, reducing agent) are strictly REACTANTS."
  },
  {
    id: "mst_sci_c2_1",
    subject: "Science",
    chapter: "Ch 2: Acids, Bases and Salts",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "Why is it recommended that acid should be added to water and not water to acid while diluting a concentrated acid?",
    wrongAnswer: "Because water has a higher boiling point so adding acid first prevents water from evaporating.",
    reason: "Missing the fundamental thermodynamic cause: dilution of a concentrated acid (especially H₂SO₄) is highly EXOTHERMIC. Adding water to concentrated acid creates localized boiling that splashes hot concentrated acid onto skin/eyes and may break the glass container.",
    correctAnswer: "1. Dilution of concentrated acid is an extremely exothermic process.\n2. If water is added to concentrated acid, the heat generated suddenly causes localized boiling and may cause the mixture to splash out, causing severe chemical burns.\n3. The glass container may also crack due to excessive local heating.\n4. Hence, concentrated acid must always be added SLOWLY to water with CONSTANT STIRRING.",
    concept: "Acid Dilution Safety: Always add ACID to WATER slowly with stirring, NEVER water to acid."
  },
  {
    id: "mst_sci_c2_2",
    subject: "Science",
    chapter: "Ch 2: Acids, Bases and Salts",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "What is the chemical difference between Baking Soda and Baking Powder? Why is tartaric acid added to baking soda to make baking powder?",
    wrongAnswer: "Baking soda is Na₂CO₃ and baking powder is NaHCO₃.",
    reason: "Confusing Washing Soda (Na₂CO₃·10H₂O) with Baking Soda (NaHCO₃), and failing to recognize that baking powder is a MIXTURE of sodium hydrogen carbonate and a mild edible acid (tartaric acid).",
    correctAnswer: "1. Baking Soda is pure Sodium Hydrogen Carbonate (NaHCO₃).\n2. Baking Powder is a mixture of baking soda (NaHCO₃) and a mild edible acid like tartaric acid.\n3. When heated with water during cake baking: 2NaHCO₃ + H⁺ —> Na⁺ + CO₂↑ + H₂O.\n4. The CO₂ gas causes cake/bread to rise making them soft and spongy.\n5. Tartaric acid neutralizes the basic sodium carbonate (Na₂CO₃) formed, preventing a bitter metallic taste in the cake.",
    concept: "Baking Powder = NaHCO₃ + Tartaric Acid; Tartaric acid prevents bitter taste of Na₂CO₃."
  },
  {
    id: "mst_sci_c3_1",
    subject: "Science",
    chapter: "Ch 3: Metals and Non-Metals",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "Why is hydrogen gas NOT evolved when a metal reacts with dilute nitric acid (HNO₃)? Name the two exceptions.",
    wrongAnswer: "Nitric acid is a weak acid so it doesn't have enough hydrogen ions to form H₂ gas.",
    reason: "Nitric acid is actually a VERY STRONG acid and a powerful OXIDIZING AGENT! It oxidizes the H₂ gas formed into H₂O and itself gets reduced to nitrogen oxides (N₂O, NO, or NO₂).",
    correctAnswer: "1. Dilute HNO₃ is a powerful oxidizing agent.\n2. As soon as H₂ gas is produced, HNO₃ oxidizes it into water (H₂O) and is itself reduced to any of the nitrogen oxides (N₂O, NO, NO₂).\n3. EXCEPTIONS: Magnesium (Mg) and Manganese (Mn) react with very dilute (1%) HNO₃ to evolve H₂ gas:\nMg(s) + 2HNO₃(aq) —> Mg(NO₃)₂(aq) + H₂(g)↑\nMn(s) + 2HNO₃(aq) —> Mn(NO₃)₂(aq) + H₂(g)↑",
    concept: "HNO₃ with metals: Strong oxidizing agent converts H₂ to H₂O; only Mg and Mn evolve H₂ with 1% dilute HNO₃."
  },
  {
    id: "mst_sci_c3_2",
    subject: "Science",
    chapter: "Ch 3: Metals and Non-Metals",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "Differentiate between Roasting and Calcination using balanced chemical equations for zinc extraction.",
    wrongAnswer: "Roasting is heating carbonate ore without air; calcination is heating sulphide ore with air.",
    reason: "Direct reversal of the two metallurgical processes! Remember mnemonic: C = Calcination = Carbonate ore = Close/limited air; R = Roasting = Sulphide ore = Regular/excess air.",
    correctAnswer: "1. ROASTING: Heating SULPHIDE ore strongly in the presence of EXCESS air:\n2ZnS(s) [Zinc Blende] + 3O₂(g) —[Heat]⟶ 2ZnO(s) + 2SO₂(g)↑\n2. CALCINATION: Heating CARBONATE ore strongly in LIMITED air (or absence of air):\nZnCO₃(s) [Calamine] —[Heat]⟶ ZnO(s) + CO₂(g)↑",
    concept: "Metallurgy: Roasting = Sulphide ore in excess air (gives SO₂); Calcination = Carbonate ore in limited air (gives CO₂)."
  },
  {
    id: "mst_sci_c5_1",
    subject: "Science",
    chapter: "Ch 5: Life Processes",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "Compare the anaerobic respiration occurring in yeast cells with that occurring in human muscle cells during heavy exercise.",
    wrongAnswer: "Both yeast and human muscles produce ethanol, carbon dioxide, and energy when oxygen is absent.",
    reason: "Human muscle cells NEVER produce ethanol or carbon dioxide during anaerobic respiration! Producing ethanol in muscles would cause systemic alcohol toxicity. Human muscles produce 3-carbon LACTIC ACID + energy (which causes muscle cramps).",
    correctAnswer: "1. In Yeast (Fermentation - Absence of O₂):\nGlucose (6C) —[Cytoplasm]⟶ Pyruvate (3C) —[Absence of O₂]⟶ Ethanol (2C) + CO₂ + 2 ATP.\n2. In Human Muscle Cells (Lack of O₂ during vigorous exercise):\nGlucose (6C) —[Cytoplasm]⟶ Pyruvate (3C) —[Lack of O₂]⟶ Lactic Acid (3C) + 2 ATP.\nNote: Accumulation of lactic acid causes muscle cramps; no CO₂ is released in muscle anaerobic pathway.",
    concept: "Anaerobic Respiration: Yeast = Ethanol + CO₂ + 2 ATP; Human Muscles = Lactic Acid + 2 ATP (NO CO₂)."
  },
  {
    id: "mst_sci_c5_2",
    subject: "Science",
    chapter: "Ch 5: Life Processes",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "Explain the two main stages of urine formation in a nephron. Which substances are selectively reabsorbed?",
    wrongAnswer: "Urine is directly filtered out from blood in the glomerulus and excreted immediately without modification.",
    reason: "Overlooking the massive volume of initial glomerular filtrate (~180 liters/day) versus actual urine output (1–2 liters/day). Selective reabsorption in the renal tubule is vital to retain water, glucose, and essential ions.",
    correctAnswer: "1. Ultrafiltration (in Bowman's Capsule & Glomerulus):\nBlood is filtered under high hydrostatic pressure; water, glucose, amino acids, urea, and mineral salts pass into the Bowman's capsule as initial filtrate (~180 L/day). Blood cells and large proteins remain in blood capillaries.\n2. Selective Reabsorption (along the tubular part of nephron):\nAs filtrate flows along the convoluted tubule and Henle's loop, glucose, amino acids, essential salts, and a major portion of water are selectively reabsorbed back into peritubular capillaries.\n3. Remaining fluid containing urea, uric acid, and excess salts forms urine (~1.5 L/day).",
    concept: "Nephron Physiology: Glomerular ultrafiltration followed by tubular selective reabsorption of glucose, amino acids, and water."
  },
  {
    id: "mst_sci_c11_1",
    subject: "Science",
    chapter: "Ch 11: Electricity",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "A student plots a V-I graph with V on y-axis and I on x-axis for two wires A and B (slopes θ_A > θ_B). Another student plots I on y-axis and V on x-axis. How do the slopes relate to resistance?",
    wrongAnswer: "Slope always equals resistance R in any graph.",
    reason: "Failing to check which variable is on which axis! For V-I graph (V on y, I on x): Slope = ΔV/ΔI = R (greater slope = greater resistance). For I-V graph (I on y, V on x): Slope = ΔI/ΔV = 1/R (greater slope = SMALLER resistance)!",
    correctAnswer: "1. If V is on y-axis and I on x-axis: Slope = ΔV / ΔI = Resistance (R). Wire with steeper slope has HIGHER resistance.\n2. If I is on y-axis and V on x-axis: Slope = ΔI / ΔV = Conductance = 1 / R. Wire with steeper slope has LOWER resistance.\nBoard Rule: Always examine axis labels before determining which wire has higher resistance.",
    concept: "Ohm's Law Graph: Slope of V vs I is R; Slope of I vs V is 1/R."
  },
  {
    id: "mst_sci_c11_2",
    subject: "Science",
    chapter: "Ch 11: Electricity",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "Three resistors of 6 Ω, 3 Ω, and 2 Ω are connected in parallel. Calculate equivalent resistance.",
    wrongAnswer: "1/R_p = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1. (Writing R_p = 6 Ω).",
    reason: "Forgetting to take reciprocal after adding fractions! In this case 6/6 = 1 so the number was 1, but for other numbers (e.g. 5/12), students report 5/12 Ω instead of 12/5 = 2.4 Ω.",
    correctAnswer: "1/R_p = 1/R₁ + 1/R₂ + 1/R₃ = 1/6 + 1/3 + 1/2\n= (1 + 2 + 3) / 6 = 6 / 6 = 1 Ω⁻¹\n∴ R_p = 1 / 1 = 1.0 Ω.\nNote: Equivalent resistance in parallel is ALWAYS strictly smaller than the smallest individual resistor (1 Ω < 2 Ω).",
    concept: "Parallel Resistance: Always invert 1/R_p to get R_p; R_p is always less than minimum resistor."
  },
  {
    id: "mst_sci_c12_1",
    subject: "Science",
    chapter: "Ch 12: Magnetic Effects of Electric Current",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "State Fleming's Left-Hand Rule and specify the exact physical quantity represented by each finger.",
    wrongAnswer: "Thumb = Current, Forefinger = Force, Center finger = Magnetic Field.",
    reason: "Scrambling the finger assignments! Remember the FBI mnemonic: F = Thumb (Force/Motion), B = Forefinger (Magnetic Field), I = Center finger (Current).",
    correctAnswer: "Stretch the thumb, forefinger, and middle finger of the left hand mutually perpendicular to each other:\n1. Forefinger points in the direction of Magnetic Field (B).\n2. Middle finger points in the direction of Electric Current (I).\n3. Thumb points in the direction of mechanical Force or Motion (F) acting on the conductor.",
    concept: "Fleming's Left-Hand Rule: FBI = Force (Thumb), Field (Forefinger), Current (Center finger)."
  },
  {
    id: "mst_sci_c12_2",
    subject: "Science",
    chapter: "Ch 12: Magnetic Effects of Electric Current",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "Describe the pattern of magnetic field lines inside a long current-carrying solenoid. What does this pattern indicate?",
    wrongAnswer: "The field lines are circular and non-uniform, becoming zero at the exact center of the solenoid.",
    reason: "Confusing the magnetic field of a straight wire with that of a long solenoid! Inside a solenoid, field lines are straight, parallel, and equidistant.",
    correctAnswer: "1. The magnetic field lines inside a long solenoid are in the form of parallel straight lines along the axis.\n2. This indicates that the magnetic field is UNIFORM at all points inside the solenoid.\n3. The solenoid behaves exactly like a bar magnet with North and South poles at opposite ends.",
    concept: "Solenoid Interior: Magnetic field lines are parallel straight lines representing a completely UNIFORM magnetic field."
  },
  {
    id: "mst_sci_c13_1",
    subject: "Science",
    chapter: "Ch 13: Our Environment",
    priority: "CRITICAL",
    dateAdded: "2026-09-04",
    question: "If 10,000 Joules of solar energy falls on green leaves of plants in a terrestrial ecosystem, how much energy is transferred to primary consumers (herbivores)?",
    wrongAnswer: "10% of 10,000 J = 1,000 J.",
    reason: "Applying the 10% law directly to incident sunlight! Green plants only capture ~1% of solar energy falling on leaves into food energy. The 10% Lindeman's Law only applies from TROPHIC LEVEL to TROPHIC LEVEL (Producers ⟶ Herbivores).",
    correctAnswer: "1. Solar energy falling on green leaves = 10,000 J.\n2. Energy captured by autotrophs (Producers, 1% of sunlight) = 1% of 10,000 J = 100 J.\n3. Energy transferred to Primary Consumers (Herbivores, 10% law) = 10% of 100 J = 10 J.\nAnswer = 10 Joules (NOT 1,000 J).",
    concept: "Trophic Energy Transfer: Sunlight to Plant = 1%; Plant to Herbivore to Carnivore = 10% per step."
  },
  {
    id: "mst_sci_c13_2",
    subject: "Science",
    chapter: "Ch 13: Our Environment",
    priority: "HIGH",
    dateAdded: "2026-09-04",
    question: "What is Biological Magnification? In a food chain: Water ⟶ Phytoplankton ⟶ Small Fish ⟶ Fish-eating Bird, which organism accumulates the highest pesticide concentration?",
    wrongAnswer: "Water or phytoplankton because chemicals are sprayed directly into water and ingested first.",
    reason: "Misunderstanding biological magnification: because pesticides like DDT are non-biodegradable, organisms cannot excrete them. With each higher trophic level, an organism consumes many organisms of the previous level, leading to progressive ACCUMULATION.",
    correctAnswer: "1. Biological Magnification: The progressive increase in the concentration of non-biodegradable harmful chemicals (e.g. DDT) at each successive trophic level in a food chain.\n2. The highest concentration will be found in the organism at the TOP of the food chain: Fish-eating Bird (Tertiary consumer / Top carnivore).\n3. Phytoplankton has the lowest concentration among living organisms.",
    concept: "Biological Magnification: Non-biodegradable chemicals increase progressively, reaching maximum at top trophic level."
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

export const IsolatedConfetti = React.memo(function IsolatedConfetti({ trigger }: { trigger: number }) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);

  useEffect(() => {
    if (trigger === 0) return;
    const colors = ["#f59e0b", "#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#f97316"];
    const pList: ConfettiParticle[] = [];
    for (let i = 0; i < 35; i++) {
      pList.push({
        id: Math.random() + i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        speedY: Math.random() * 4 + 3,
        speedX: Math.random() * 4 - 2
      });
    }
    setParticles(pList);
  }, [trigger]);

  useEffect(() => {
    if (particles.length === 0) return;
    const frame = requestAnimationFrame(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, y: p.y + p.speedY, x: p.x + p.speedX }))
          .filter((p) => p.y < 110)
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
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
  );
});

// Pure helper to determine exact 0-indexed correct option for any MCQ question
function resolveCorrectOptionIndex(q: VaultQuestion): number {
  if (typeof q.correctOption === "number" && q.correctOption >= 0) {
    return q.correctOption;
  }
  if (typeof (q as any).correctOptionIndex === "number" && (q as any).correctOptionIndex >= 0) {
    return (q as any).correctOptionIndex;
  }
  if (typeof (q as any).correctOption === "string") {
    const letter = (q as any).correctOption.trim().toUpperCase();
    const idx = ["A", "B", "C", "D"].indexOf(letter);
    if (idx !== -1) return idx;
  }
  // Parse from answer string if it starts with (a), (b), (c), (d) or Option A
  if (q.answer && q.options && q.options.length > 0) {
    const match = q.answer.match(/^\s*(?:option\s*)?\(?([a-d])\)?/i);
    if (match) {
      const idx = ["a", "b", "c", "d"].indexOf(match[1].toLowerCase());
      if (idx !== -1) return idx;
    }
    const cleanAns = q.answer.trim().toLowerCase();
    const exactIdx = q.options.findIndex((opt) => opt.trim().toLowerCase() === cleanAns);
    if (exactIdx !== -1) return exactIdx;
  }
  return 0; // standard fallback
}

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
  const [activeTab, setActiveTab] = useState<"chapter_dashboard" | "concepts" | "theorems" | "activities" | "questions" | "mnemonics" | "flashcards" | "common_mistakes" | "test_series" | "today" | "syllabus" | "experiments" | "reactions" | "diagrams" | "hots" | "roadmap">("chapter_dashboard");
  const [conceptsSubject, setConceptsSubject] = useState<"math" | "science">("math");
  const [conceptsChapterNo, setConceptsChapterNo] = useState<number>(6);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [levelUpModalData, setLevelUpModalData] = useState<{ level: number; title: string; badge: string } | null>(null);

  // Fabulous Compact Taskbar State (Zero Horizontal Scroll)
  const [navDropdown, setNavDropdown] = useState<"vaults" | "revision" | "planner" | null>(null);
  const [isAllModulesModalOpen, setIsAllModulesModalOpen] = useState(false);
  const [allModulesSearch, setAllModulesSearch] = useState("");
  const navRef = useRef<HTMLElement>(null);

  // Click outside to dismiss nav dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setNavDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock and ESC key for All Modules Modal
  useEffect(() => {
    if (isAllModulesModalOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsAllModulesModalOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = orig;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [isAllModulesModalOpen]);

  // Global Ctrl+K / Cmd+K shortcut to toggle All Modules Mega-Launcher
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsAllModulesModalOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);
  
  // Multi-Subject Systematic Chapter Command State
  const [commandSubjectId, setCommandSubjectId] = useState<string>("maths");
  const [commandChapterId, setCommandChapterId] = useState<string>("math_ch6");
  
  // Progressive Chapter Vault (Supports Math & Science)
  const [activeVaultSubject, setActiveVaultSubject] = useState<"math" | "science">("math");
  const [activeVaultChapter, setActiveVaultChapter] = useState<number | null>(6); // Default Triangles
  const [activeVaultQuestions, setActiveVaultQuestions] = useState<VaultQuestion[]>([]);
  const [isAnalyzingVault, setIsAnalyzingVault] = useState(false);
  const [vaultAnalysisLogs, setVaultAnalysisLogs] = useState<string[]>([]);
  const [vaultFilter, setVaultFilter] = useState<"all" | "1" | "2" | "3" | "5" | "case">("all");

  // Interactive MCQ Options Tracking & Immediate Evaluation
  const [selectedMcqOptions, setSelectedMcqOptions] = useState<Record<string, number>>({});
  const [correctMcqQuestionIds, setCorrectMcqQuestionIds] = useState<Record<string, boolean>>({});

  // Concept Explainer
  const [isConceptExplainerOpen, setIsConceptExplainerOpen] = useState(false);

  // My Mistakes
  const [myMistakes, setMyMistakes] = useState<any[]>(DEFAULT_MISTAKE_LOGS);
  const [mistakeSubjectFilter, setMistakeSubjectFilter] = useState<"All" | "Mathematics" | "Science">("All");
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

  // Confetti trigger (incremented to fire IsolatedConfetti) & Floating XP Toast
  const [confettiTrigger, setConfettiTrigger] = useState(0);
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
            const existingIds = new Set(parsed.map((m: any) => m.id));
            const merged = [...parsed, ...DEFAULT_MISTAKE_LOGS.filter((d) => !existingIds.has(d.id))];
            setMyMistakes(merged);
            localStorage.setItem("cbse10_lsa_my_mistakes_v5", JSON.stringify(merged));
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
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    }
    if (activeTab === "common_mistakes") {
      fetchMistakes();
    }
  }, [activeTab]);

  // Instant In-Memory Cache for Chapter Question Banks (Supports Math & Science)
  const chapterCacheRef = useRef<Record<string, VaultQuestion[]>>({});

  const loadChapterData = async (
    chapterId: number, 
    isPreload = false, 
    subject: "math" | "science" = activeVaultSubject
  ) => {
    const cacheKey = `${subject}_${chapterId}`;
    // 1. Instant cache hit: 0ms switch
    if (chapterCacheRef.current[cacheKey]) {
      setActiveVaultQuestions(chapterCacheRef.current[cacheKey]);
      setActiveVaultChapter(chapterId);
      return;
    }

    if (!isPreload) {
      setIsAnalyzingVault(true);
      setActiveVaultChapter(null);
      setVaultAnalysisLogs([
        "Connecting to Syllabus Engine...",
        `Loading High-Yield Board Questions for ${subject === "science" ? "Science" : "Maths"} Chapter ${chapterId}...`
      ]);
    }

    try {
      const res = await fetch(`/api/questions?subject=${subject}&chapter=${chapterId}`);
      const data = await res.json();
      const list = data.questions || [];
      chapterCacheRef.current[cacheKey] = list;
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

  // Initial load Ch 6 immediately & pre-cache remaining chapters in background for instant switches
  useEffect(() => {
    loadChapterData(6, false, "math");
    // Pre-cache Mathematics chapters
    [8, 9, 10, 13, 14].forEach((ch) => {
      fetch(`/api/questions?subject=math&chapter=${ch}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.questions) chapterCacheRef.current[`math_${ch}`] = d.questions;
        })
        .catch(() => {});
    });
    // Pre-cache Science chapters
    [1, 2, 3, 5, 11, 12, 13].forEach((ch) => {
      fetch(`/api/questions?subject=science&chapter=${ch}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.questions) chapterCacheRef.current[`science_${ch}`] = d.questions;
        })
        .catch(() => {});
    });
  }, []);

  // Interactive MCQ Questions & Live Scoring Stats for Active Vault Chapter
  const mcqQuestionsInVault = useMemo(() => {
    return activeVaultQuestions.filter((q) => q.options && q.options.length > 0);
  }, [activeVaultQuestions]);

  const mcqProgressStats = useMemo(() => {
    const attemptedQuestions = mcqQuestionsInVault.filter((q) => selectedMcqOptions[q.id] !== undefined);
    const correctQuestions = attemptedQuestions.filter((q) => {
      const correctIdx = resolveCorrectOptionIndex(q);
      return selectedMcqOptions[q.id] === correctIdx;
    });
    const accuracy = attemptedQuestions.length > 0
      ? Math.round((correctQuestions.length / attemptedQuestions.length) * 100)
      : 0;
    return {
      total: mcqQuestionsInVault.length,
      attempted: attemptedQuestions.length,
      correct: correctQuestions.length,
      accuracy
    };
  }, [mcqQuestionsInVault, selectedMcqOptions, resolveCorrectOptionIndex]);

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
    const correctMcqsCount = Object.keys(correctMcqQuestionIds).filter((k) => correctMcqQuestionIds[k]).length;

    // Derived XP (impossible to exploit by spam clicking)
    const calculatedXp =
      syllabusTopicsCount * 25 +
      testSeriesCount * 25 +
      mapCount * 15 +
      flashcardsCount * 20 +
      tasksDoneCount * 30 +
      focusBlocks * 50 +
      customContributionCount * 40 +
      correctMcqsCount * 10;

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
    customQuestions,
    correctMcqQuestionIds
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

  // Confetti trigger — increments counter so IsolatedConfetti handles its own animation loop
  const triggerConfetti = useCallback(() => {
    setConfettiTrigger((n) => n + 1);
  }, []);

  // Show floating XP Toast
  const showXpToast = useCallback((amount: number, text: string) => {
    const newToast = { id: Date.now() + Math.random(), amount, text };
    setXpToasts((prev) => [...prev.slice(-2), newToast]);
    setTimeout(() => {
      setXpToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 1800);
  }, []);

  // Quick 1-tap logging of an incorrect MCQ to Mistakes Notebook
  const logMcqMistakeToVault = useCallback((q: VaultQuestion, chosenOptIndex: number, correctOptIndex: number) => {
    const chosenLetter = String.fromCharCode(65 + chosenOptIndex);
    const correctLetter = String.fromCharCode(65 + correctOptIndex);
    const chosenText = q.options && q.options[chosenOptIndex] ? q.options[chosenOptIndex] : `Option (${chosenLetter})`;
    const correctText = q.options && q.options[correctOptIndex] ? q.options[correctOptIndex] : `Option (${correctLetter})`;

    const newEntry = {
      id: `mst_mcq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      subject: activeVaultSubject === "math" ? "Mathematics" : "Science",
      chapter: q.chapterName || `Chapter ${q.chapter}`,
      priority: "HIGH",
      dateAdded: new Date().toISOString().split("T")[0],
      question: q.question,
      wrongAnswer: `Selected (${chosenLetter}): ${chosenText}`,
      reason: q.examinerNote || "Selected incorrect option under test conditions. Immediate conceptual review required.",
      correctAnswer: `(${correctLetter}): ${correctText}\n\nExplanation: ${q.explanation || q.answer}`,
      concept: q.formula ? `Formula: ${q.formula}` : "Core NCERT Concept"
    };

    setMyMistakes((prev) => {
      const updated = [newEntry, ...prev];
      localStorage.setItem("cbse10_lsa_my_mistakes_v5", JSON.stringify(updated));
      return updated;
    });

    playSound("done");
    showXpToast(25, "MCQ Logged to Mistakes Notebook! (+25 XP)");
    triggerHaptic([30, 50]);
  }, [activeVaultSubject, playSound, showXpToast, triggerHaptic]);

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
        const sCorrectMcqs = localStorage.getItem("cbse10_lsa_correct_mcqs_v1");
        const sSelectedMcqs = localStorage.getItem("cbse10_lsa_selected_mcqs_v1");

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
        if (sCorrectMcqs) {
          try { setCorrectMcqQuestionIds(JSON.parse(sCorrectMcqs)); } catch {}
        }
        if (sSelectedMcqs) {
          try { setSelectedMcqOptions(JSON.parse(sSelectedMcqs)); } catch {}
        }
        if (sMistakes) {
          try {
            const parsed = JSON.parse(sMistakes);
            if (Array.isArray(parsed)) {
              const existingIds = new Set(parsed.map((m: any) => m.id));
              const merged = [...parsed, ...DEFAULT_MISTAKE_LOGS.filter((d) => !existingIds.has(d.id))];
              setMyMistakes(merged);
            } else {
              setMyMistakes(DEFAULT_MISTAKE_LOGS);
            }
          } catch {
            setMyMistakes(DEFAULT_MISTAKE_LOGS);
          }
        } else {
          setMyMistakes(DEFAULT_MISTAKE_LOGS);
        }
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
      localStorage.setItem("cbse10_lsa_correct_mcqs_v1", JSON.stringify(correctMcqQuestionIds));
      localStorage.setItem("cbse10_lsa_selected_mcqs_v1", JSON.stringify(selectedMcqOptions));
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
    if (typeof window === "undefined") return;
    setCompletedTopicIds({});
    setCompletedTestSeriesTopics({});
    setCompletedMapItems({});
    setCorrectMcqQuestionIds({});
    setSelectedMcqOptions({});
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
      const keysToRemove = [
        "cbse10_lsa_topics_v5",
        "cbse10_lsa_test_series_v5",
        "cbse10_lsa_map_v5",
        "cbse10_lsa_streak_v5",
        "cbse10_lsa_tasks_v5",
        "cbse10_lsa_custom_fc_v5",
        "cbse10_lsa_mastered_fc_v5",
        "cbse10_lsa_customq_v5",
        "cbse10_lsa_focus_v5",
        "cbse10_lsa_my_mistakes_v5",
        "cbse10_lsa_resolved_mistakes_v5",
        "cbse10_lsa_correct_mcqs_v1",
        "cbse10_lsa_selected_mcqs_v1",
        "cbse10_lsa_v5_cleared"
      ];
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("cbse10_lsa_")) {
          localStorage.removeItem(key);
        }
      });
      localStorage.setItem("cbse10_lsa_v5_cleared", "true");
    } catch {}
    playSound("click");
    showXpToast(0, "All Progress Reset to 0 XP");
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

      {/* CONFETTI LAYER (Rendered independently so animation frames do not re-render the entire page) */}
      <IsolatedConfetti trigger={confettiTrigger} />

      {/* =========================================================================
          STICKY HEADER WITH LIVE XP / LEVEL BAR & QUICK CONTROLS
          ========================================================================= */}
      {/* =========================================================================
          LUXURY COMMAND CENTER MASTER STATUS BAR (HIGH-TECH, VIBRANT & RICH)
          ========================================================================= */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-2xl px-3.5 sm:px-6 py-2.5 transition-colors ${
        isDark
          ? "border-white/[0.08] bg-gradient-to-r from-[#060913]/95 via-[#0b1222]/95 to-[#060913]/95 text-white shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-slate-200/90 bg-white/95 text-slate-900 shadow-xs"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* LOGO & ACADEMY BRANDING */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-2xl blur-xs opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-inner ring-1 ring-white/20">
                100
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                  CBSE CLASS 10 <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">2026–27</span>
                </h1>
              </div>
              <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1.5">
                <span>Lakshmipat Singhania Academy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-emerald-400 font-mono text-[9px] font-bold">LIVE HUD</span>
              </p>
            </div>
          </div>

          {/* CENTER: AEROSPACE TELEMETRY DUAL COUNTDOWN ISLAND */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] text-xs font-mono">
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("test_series");
                setNavDropdown(null);
              }}
              className="flex items-center gap-2 text-slate-200 hover:text-amber-300 transition-colors cursor-pointer group px-2 py-0.5 rounded-full hover:bg-amber-500/10"
              title="Target: Test Series I (Sept 14) — Click to view plan"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[11px] font-bold text-amber-400 group-hover:underline">Sept 14 Math:</span>
              <LiveCountdown targetDate="2026-09-14" variant="badge" colorScheme="amber" isDark={isDark} />
            </button>
            <span className="text-white/20 select-none">•</span>
            <div className="flex items-center gap-2 text-slate-200 px-2 py-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[11px] font-bold text-cyan-400">Final Boards:</span>
              <LiveCountdown targetDate="2027-02-01" variant="badge" colorScheme="blue" isDark={isDark} />
            </div>
          </div>

          {/* RIGHT: GAMIFIED TELEMETRY & CONTROLS */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* LEVEL & XP CAPSULE */}
            <div className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium shadow-md ${
              isDark ? "bg-slate-900/90 border-white/10 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" : "bg-slate-100 border-slate-200 text-slate-800"
            }`}>
              <span className="text-xs">{currentLevelInfo.badge}</span>
              <span className="font-black text-amber-400">Lvl {currentLevelInfo.level}</span>
              <span className="text-white/20 select-none">•</span>
              <span className="font-black text-white">{totalXp} <span className="text-[10px] text-amber-400/80">XP</span></span>
              
              {/* Vibrant glowing micro progress bar */}
              <div className="w-14 sm:w-18 h-1.5 rounded-full overflow-hidden bg-white/10 p-[1px] ml-0.5">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  style={{ width: `${levelProgressPercent}%` }}
                />
              </div>
            </div>

            {/* STREAK PILL */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono font-bold shadow-xs ${
              isDark ? "bg-gradient-to-r from-orange-500/20 to-rose-500/20 border-orange-500/40 text-orange-300 shadow-[0_0_12px_rgba(249,115,22,0.2)]" : "bg-amber-50 border-amber-200 text-amber-900"
            }`}>
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse shrink-0" />
              <span>{streak}d</span>
            </div>

            {/* QUICK ACTIONS GROUP */}
            <div className="flex items-center gap-1">
              {/* SOUND TOGGLE */}
              <button
                onClick={() => {
                  const nextMute = !isSoundMuted;
                  setIsSoundMuted(nextMute);
                  if (!nextMute) playSound("click");
                }}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isDark ? "bg-slate-900/80 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
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
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isDark ? "bg-slate-900/80 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
                }`}
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
              </button>

              {/* ZERO XP RESET BUTTON */}
              <button
                onClick={handleResetProgress}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isDark ? "bg-slate-900/80 border-white/10 text-slate-500 hover:text-rose-400 hover:bg-rose-500/15 hover:border-rose-500/30" : "bg-white border-slate-200 text-slate-500 hover:text-rose-600 shadow-xs"
                }`}
                title="Reset all progress to 0 XP"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE QUICK-DOCK (md:hidden - ZERO HORIZONTAL SCROLL)
          ========================================================================= */}
      <div className={`border-b px-2.5 py-2 flex md:hidden items-center justify-between gap-1.5 transition-colors relative z-30 ${
        isDark ? "border-white/[0.08] bg-[#070b14]/95 backdrop-blur-2xl" : "border-slate-200 bg-white/95"
      }`}>
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <button
            onClick={() => { playSound("click"); setActiveTab("chapter_dashboard"); }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 cursor-pointer ${
              activeTab === "chapter_dashboard" ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20" : isDark ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Command</span>
          </button>

          <button
            onClick={() => { playSound("click"); setActiveTab("concepts"); }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 cursor-pointer ${
              activeTab === "concepts" ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20" : isDark ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Concepts</span>
          </button>

          <button
            onClick={() => { playSound("click"); setActiveTab("diagrams"); }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 cursor-pointer ${
              activeTab === "diagrams" ? "bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20" : isDark ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Diagrams</span>
          </button>

          <button
            onClick={() => { playSound("click"); setActiveTab("hots"); }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 shrink-0 cursor-pointer ${
              activeTab === "hots" ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md shadow-rose-500/20" : isDark ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>HOTS</span>
          </button>
        </div>

        <button
          onClick={() => { playSound("click"); setIsAllModulesModalOpen(true); }}
          className="px-3 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 flex items-center gap-1.5 shrink-0 shadow-md shadow-amber-500/20 cursor-pointer active:scale-95"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-slate-950" />
          <span>All (15)</span>
        </button>
      </div>

      {/* =========================================================================
          DESKTOP & TABLET FABULOUS COMMAND TASKBAR (ZERO OVERLAP, ZERO HORIZONTAL SCROLL)
          ========================================================================= */}
      <nav
        ref={navRef}
        className={`border-b px-3 sm:px-6 py-2.5 hidden md:flex items-center justify-between transition-colors relative z-30 ${
          isDark
            ? "border-white/[0.08] bg-gradient-to-r from-[#060913]/98 via-[#0a0f20]/98 to-[#060913]/98 backdrop-blur-2xl shadow-lg"
            : "border-slate-200 bg-white/95 backdrop-blur-2xl shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 w-full">
          
          {/* FLOATING SEGMENTED DOCK: FIXED STABLE LABELS (ZERO OVERLAPPING) */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] shrink-0">
            
            {/* 1. Command Center */}
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("chapter_dashboard");
                setNavDropdown(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === "chapter_dashboard"
                  ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black shadow-md shadow-amber-500/30 ring-1 ring-amber-300/50"
                  : isDark
                  ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              <Target className={`w-3.5 h-3.5 ${activeTab === "chapter_dashboard" ? "text-slate-950" : "text-amber-400"} shrink-0`} />
              <span>Command</span>
            </button>

            {/* 2. Concepts Hub (27 Ch) */}
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("concepts");
                setNavDropdown(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === "concepts"
                  ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-black shadow-md shadow-indigo-500/30 ring-1 ring-blue-300/50"
                  : isDark
                  ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 ${activeTab === "concepts" ? "text-white" : "text-blue-400"} shrink-0`} />
              <span>Concepts</span>
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full shrink-0 ${
                activeTab === "concepts" ? "bg-white/25 text-white" : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
              }`}>
                27
              </span>
            </button>

            {/* 3. NCERT Diagrams Vault (29) */}
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("diagrams");
                setNavDropdown(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === "diagrams"
                  ? "bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black shadow-md shadow-cyan-500/30 ring-1 ring-cyan-300/50"
                  : isDark
                  ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              <Compass className={`w-3.5 h-3.5 ${activeTab === "diagrams" ? "text-slate-950" : "text-cyan-400"} shrink-0`} />
              <span>Diagrams</span>
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full shrink-0 ${
                activeTab === "diagrams" ? "bg-slate-950/20 text-slate-950" : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
              }`}>
                29
              </span>
            </button>

            {/* 4. Master Question Bank */}
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("questions");
                setNavDropdown(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === "questions"
                  ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-slate-950 font-black shadow-md shadow-emerald-500/30 ring-1 ring-emerald-300/50"
                  : isDark
                  ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${activeTab === "questions" ? "text-slate-950" : "text-emerald-400"} shrink-0`} />
              <span>Practice</span>
            </button>

            {/* 5. Competitive HOTS (35) */}
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("hots");
                setNavDropdown(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                activeTab === "hots"
                  ? "bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white font-black shadow-md shadow-rose-500/30 ring-1 ring-rose-300/50"
                  : isDark
                  ? "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${activeTab === "hots" ? "text-white" : "text-rose-400"} shrink-0`} />
              <span>HOTS</span>
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full shrink-0 ${
                activeTab === "hots" ? "bg-white/25 text-white" : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
              }`}>
                35
              </span>
            </button>

            <div className="h-4 w-px bg-white/15 mx-1 shrink-0" />

            {/* DROPDOWN 1: VAULTS (THEOREMS, REACTIONS, LAB ACTIVITIES) */}
            <div className="relative shrink-0">
              <button
                onClick={() => setNavDropdown(navDropdown === "vaults" ? null : "vaults")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 border ${
                  ["theorems", "reactions", "activities"].includes(activeTab)
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 font-black shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                    : isDark
                    ? "bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.08] hover:border-white/10"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Vaults</span>
                {["theorems", "reactions", "activities"].includes(activeTab) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 animate-pulse shadow-xs" />
                )}
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${navDropdown === "vaults" ? "rotate-180" : ""}`} />
              </button>

              {navDropdown === "vaults" && (
                <div className={`absolute top-full left-0 mt-2 w-72 rounded-2xl border shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                  isDark ? "bg-[#0a0f1d]/95 backdrop-blur-2xl border-white/15 text-white shadow-black/80" : "bg-white border-slate-200 text-slate-900 shadow-xl"
                }`}>
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Official Science & Math Proofs
                  </div>
                  {[
                    { id: "theorems", label: "Theorems & Converses", sub: "25 Formal Geometry Proofs", icon: Award, color: "text-amber-400 bg-amber-500/15" },
                    { id: "reactions", label: "Chemistry Reactions", sub: "56 Equations with States & Colors", icon: FlaskConical, color: "text-cyan-400 bg-cyan-500/15" },
                    { id: "activities", label: "NCERT Lab Activities", sub: "Step-by-step practical vivas", icon: Beaker, color: "text-emerald-400 bg-emerald-500/15" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        playSound("click");
                        setActiveTab(item.id as any);
                        setNavDropdown(null);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                        activeTab === item.id
                          ? isDark
                            ? "bg-amber-500/20 text-amber-300 font-bold"
                            : "bg-amber-50 text-amber-900 font-bold"
                          : isDark
                          ? "hover:bg-white/5 text-slate-300 hover:text-white"
                          : "hover:bg-slate-50 text-slate-700 hover:text-slate-950"
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight truncate mt-0.5">{item.sub}</div>
                      </div>
                      {activeTab === item.id && (
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DROPDOWN 2: MEMORY (MNEMONICS, FLASHCARDS, MISTAKES) */}
            <div className="relative shrink-0">
              <button
                onClick={() => setNavDropdown(navDropdown === "revision" ? null : "revision")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 border ${
                  ["mnemonics", "flashcards", "common_mistakes"].includes(activeTab)
                    ? "bg-purple-500/20 text-purple-300 border-purple-500/50 font-black shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                    : isDark
                    ? "bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.08] hover:border-white/10"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Memory</span>
                {["mnemonics", "flashcards", "common_mistakes"].includes(activeTab) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 animate-pulse shadow-xs" />
                )}
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${navDropdown === "revision" ? "rotate-180" : ""}`} />
              </button>

              {navDropdown === "revision" && (
                <div className={`absolute top-full left-0 mt-2 w-72 rounded-2xl border shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                  isDark ? "bg-[#0a0f1d]/95 backdrop-blur-2xl border-white/15 text-white shadow-black/80" : "bg-white border-slate-200 text-slate-900 shadow-xl"
                }`}>
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Active Recall & Error Traps
                  </div>
                  {[
                    { id: "mnemonics", label: "Visual Mnemonics Hub", sub: "49 High-Res Memory Sheets", icon: Sparkles, color: "text-purple-400 bg-purple-500/15" },
                    { id: "flashcards", label: "Flashcards Engine", sub: "Spaced Repetition Active Recall", icon: BookMarked, color: "text-blue-400 bg-blue-500/15" },
                    { id: "common_mistakes", label: "My Mistakes Error Log", sub: "Common Board Traps & Traps to Avoid", icon: AlertTriangle, color: "text-rose-400 bg-rose-500/15" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        playSound("click");
                        setActiveTab(item.id as any);
                        setNavDropdown(null);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                        activeTab === item.id
                          ? isDark
                            ? "bg-purple-500/20 text-purple-300 font-bold"
                            : "bg-purple-50 text-purple-900 font-bold"
                          : isDark
                          ? "hover:bg-white/5 text-slate-300 hover:text-white"
                          : "hover:bg-slate-50 text-slate-700 hover:text-slate-950"
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight truncate mt-0.5">{item.sub}</div>
                      </div>
                      {activeTab === item.id && (
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DROPDOWN 3: PLANNER (TEST SERIES, DAILY TASKS, SYLLABUS, ROADMAP) */}
            <div className="relative shrink-0">
              <button
                onClick={() => setNavDropdown(navDropdown === "planner" ? null : "planner")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 border ${
                  ["test_series", "today", "syllabus", "roadmap"].includes(activeTab)
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/50 font-black shadow-[0_0_12px_rgba(14,165,233,0.2)]"
                    : isDark
                    ? "bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.08] hover:border-white/10"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Planner</span>
                {["test_series", "today", "syllabus", "roadmap"].includes(activeTab) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 animate-pulse shadow-xs" />
                )}
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${navDropdown === "planner" ? "rotate-180" : ""}`} />
              </button>

              {navDropdown === "planner" && (
                <div className={`absolute top-full right-0 mt-2 w-72 rounded-2xl border shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                  isDark ? "bg-[#0a0f1d]/95 backdrop-blur-2xl border-white/15 text-white shadow-black/80" : "bg-white border-slate-200 text-slate-900 shadow-xl"
                }`}>
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Exam Strategy & Milestones
                  </div>
                  {[
                    { id: "test_series", label: "Test Series I (Sept 14)", sub: "Target Schedule & Cutoffs", icon: Calendar, color: "text-emerald-400 bg-emerald-500/15" },
                    { id: "today", label: "Daily Focus & Tasks", sub: "Daily Checklist & Pomodoro Rhythm", icon: Clock, color: "text-amber-400 bg-amber-500/15" },
                    { id: "syllabus", label: "NCERT Tracker", sub: "Official Rationalized Curriculum", icon: BookOpen, color: "text-teal-400 bg-teal-500/15" },
                    { id: "roadmap", label: "100% Roadmap", sub: "Class 10 Target Timeline", icon: Compass, color: "text-indigo-400 bg-indigo-500/15" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        playSound("click");
                        setActiveTab(item.id as any);
                        setNavDropdown(null);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                        activeTab === item.id
                          ? isDark
                            ? "bg-sky-500/20 text-sky-300 font-bold"
                            : "bg-sky-50 text-sky-900 font-bold"
                          : isDark
                          ? "hover:bg-white/5 text-slate-300 hover:text-white"
                          : "hover:bg-slate-50 text-slate-700 hover:text-slate-950"
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight truncate mt-0.5">{item.sub}</div>
                      </div>
                      {activeTab === item.id && (
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: ALL 15 MODULES MEGA LAUNCHER (GOLDEN COMMAND PALETTE) */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => {
                playSound("click");
                setIsAllModulesModalOpen(true);
                setNavDropdown(null);
              }}
              className="px-4 py-2 rounded-2xl text-xs font-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-slate-950 shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all flex items-center gap-2 cursor-pointer border border-amber-300/60 shrink-0"
              title="Open All Modules Command Palette (Ctrl+K)"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="tracking-tight">All Modules (15)</span>
              <kbd className="hidden lg:inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/20 text-slate-950 border border-slate-950/20 font-black ml-0.5">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          ALL 15 MODULES MEGA-LAUNCHER MODAL (VIA PORTAL, NO BLUR)
          ========================================================================= */}
      {mounted && isAllModulesModalOpen && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/85 flex items-center justify-center p-3 sm:p-6 select-none"
          onClick={() => setIsAllModulesModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`max-w-4xl w-full max-h-[90vh] flex flex-col rounded-3xl border overflow-hidden shadow-2xl ${
              isDark ? "bg-[#0b101d] border-white/15 text-white" : "bg-white border-slate-300 text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-black">All 15 Command Center Learning Modules</h2>
                </div>
                <p className="text-xs text-slate-400">
                  Instant launchpad to every vault, interactive solver, revision engine, and exam planner.
                </p>
              </div>

              <button
                onClick={() => setIsAllModulesModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MODAL SEARCH BAR */}
            <div className="px-5 pt-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={allModulesSearch}
                  onChange={(e) => setAllModulesSearch(e.target.value)}
                  placeholder="Filter modules (e.g. 'diagrams', 'theorems', 'questions', 'hots', 'flashcards')..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                    isDark ? "bg-black/40 border-white/10 text-white placeholder:text-slate-500" : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                  autoFocus
                />
              </div>
            </div>

            {/* MODAL BODY (4 ORGANIZED GROUPS) */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {[
                {
                  group: "Core Learning & Question Mastery",
                  items: [
                    { id: "chapter_dashboard", label: "Chapter Command", sub: "Systematic Syllabus Navigator", icon: Target, color: "text-amber-400 bg-amber-500/15" },
                    { id: "concepts", label: "Concepts Hub (27 Ch)", sub: "NCERT Official Blueprints & Rubrics", icon: BookOpen, color: "text-blue-400 bg-blue-500/15" },
                    { id: "questions", label: "Master Question Bank", sub: "1,200+ CBSE Board-Graded Questions", icon: Zap, color: "text-emerald-400 bg-emerald-500/15" },
                    { id: "hots", label: "Competitive HOTS Vault", sub: "35 Master NTSE / Olympiad Problems", icon: Flame, color: "text-rose-400 bg-rose-500/15" }
                  ]
                },
                {
                  group: "Official Proofs & Visual Vaults",
                  items: [
                    { id: "diagrams", label: "NCERT Visual Diagrams", sub: "29 Cropped Ray & Circuit Diagrams", icon: Compass, color: "text-cyan-400 bg-cyan-500/15" },
                    { id: "theorems", label: "Theorems & Converses", sub: "25 Formal Geometry Proofs & Corollaries", icon: Award, color: "text-amber-400 bg-amber-500/15" },
                    { id: "reactions", label: "Chemistry Reactions", sub: "56 Equations with States & Conditions", icon: FlaskConical, color: "text-teal-400 bg-teal-500/15" },
                    { id: "activities", label: "NCERT Lab Activities", sub: "Step-by-Step Practical Vivas", icon: Beaker, color: "text-indigo-400 bg-indigo-500/15" }
                  ]
                },
                {
                  group: "Active Recall & Error Elimination",
                  items: [
                    { id: "mnemonics", label: "Visual Mnemonics Hub", sub: "49 Infographic Cheat Sheets", icon: Sparkles, color: "text-purple-400 bg-purple-500/15" },
                    { id: "flashcards", label: "Flashcards Engine", sub: "Spaced Repetition Active Recall", icon: BookMarked, color: "text-blue-400 bg-blue-500/15" },
                    { id: "common_mistakes", label: "My Mistakes Error Log", sub: "Examiner Pitfalls & Deduction Traps", icon: AlertTriangle, color: "text-rose-400 bg-rose-500/15" }
                  ]
                },
                {
                  group: "Exam Planning & Progress Tracking",
                  items: [
                    { id: "test_series", label: "Test Series I (Sept 14)", sub: "Target Exam Schedules & Cutoffs", icon: Calendar, color: "text-emerald-400 bg-emerald-500/15" },
                    { id: "today", label: "Daily Focus & Tasks", sub: "Real-Time Productivity Checklist", icon: Clock, color: "text-amber-400 bg-amber-500/15" },
                    { id: "syllabus", label: "NCERT Master Syllabus", sub: "Class 10 CBSE 2026-27 Tracker", icon: BookOpen, color: "text-teal-400 bg-teal-500/15" },
                    { id: "roadmap", label: "100% Roadmap", sub: "Milestone-by-Milestone Timeline", icon: Compass, color: "text-cyan-400 bg-cyan-500/15" }
                  ]
                }
              ].map((grp, gIdx) => {
                const filtered = grp.items.filter(
                  it => !allModulesSearch.trim() ||
                    it.label.toLowerCase().includes(allModulesSearch.toLowerCase()) ||
                    it.sub.toLowerCase().includes(allModulesSearch.toLowerCase())
                );
                if (filtered.length === 0) return null;

                return (
                  <div key={gIdx} className="space-y-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {grp.group}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {filtered.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            playSound("click");
                            setActiveTab(item.id as any);
                            setIsAllModulesModalOpen(false);
                          }}
                          className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                            activeTab === item.id
                              ? isDark
                                ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-md"
                                : "bg-amber-50 border-amber-400 text-amber-900 font-bold shadow-sm"
                              : isDark
                              ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.06] text-slate-300 hover:text-white"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs sm:text-sm font-bold truncate">{item.label}</span>
                              {activeTab === item.id && (
                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 shrink-0">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{item.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs shrink-0">
              <span className="text-slate-400 font-mono text-[11px]">
                Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">ESC</kbd> to close
              </span>
              <button
                onClick={() => setIsAllModulesModalOpen(false)}
                className="px-5 py-2 rounded-xl font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* =========================================================================
          MAIN APPLICATION CONTENT
          ========================================================================= */}
      <main className="main-content-area max-w-5xl mx-auto px-3.5 sm:px-6 pt-4 sm:pt-6 space-y-5 sm:space-y-6">

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

        {/* ===================== TAB: CHEMISTRY REACTIONS ENCYCLOPEDIA ===================== */}
        {activeTab === "reactions" && (
          <ChemistryReactionsView
            isDark={isDark}
            onOpenQuestionBank={(targetChNo) => {
              playSound("click");
              const ch = targetChNo || 1;
              setActiveVaultSubject("science");
              setActiveVaultChapter(ch);
              loadChapterData(ch, false, "science");
              setActiveTab("questions");
            }}
          />
        )}

        {/* ===================== TAB: SCIENCE DIAGRAMS & MIXED CIRCUITS ===================== */}
        {activeTab === "diagrams" && (
          <ScienceDiagramsView
            isDark={isDark}
            onOpenQuestionBank={(targetChNo) => {
              playSound("click");
              const ch = targetChNo || 9;
              setActiveVaultSubject("science");
              setActiveVaultChapter(ch);
              loadChapterData(ch, false, "science");
              setActiveTab("questions");
            }}
          />
        )}

        {/* ===================== TAB: COMPETITIVE & HOTS VAULT ===================== */}
        {activeTab === "hots" && (
          <CompetitiveHotsView
            isDark={isDark}
            onOpenQuestionBank={(sub, targetChNo) => {
              playSound("click");
              const ch = targetChNo || 1;
              setActiveVaultSubject(sub);
              setActiveVaultChapter(ch);
              loadChapterData(ch, false, sub);
              setActiveTab("questions");
            }}
          />
        )}

        {/* ===================== TAB: CONCEPTS HUB (MATH + SCIENCE ALL 27 CHAPTERS) ===================== */}
        {activeTab === "concepts" && (
          <ConceptsHubView
            isDark={isDark}
            initialSubject={conceptsSubject}
            initialChapterNo={conceptsChapterNo}
            onOpenActivities={(targetChNo) => {
              playSound("click");
              setActiveTab("activities");
            }}
            onOpenTheorems={() => {
              playSound("click");
              setActiveTab("theorems");
            }}
            onOpenReactions={(targetChNo) => {
              playSound("click");
              setActiveTab("reactions");
            }}
            onOpenDiagrams={(targetChNo) => {
              playSound("click");
              setActiveTab("diagrams");
            }}
            onOpenHots={(sub, targetChNo) => {
              playSound("click");
              setActiveTab("hots");
            }}
            onOpenQuestionBank={(sub, ch) => {
              playSound("click");
              setActiveVaultSubject(sub);
              setActiveVaultChapter(ch);
              loadChapterData(ch, false, sub);
              setActiveTab("questions");
            }}
          />
        )}

        {/* ===================== TAB: NCERT SCIENCE LAB ACTIVITIES ===================== */}
        {activeTab === "activities" && (
          <ScienceActivitiesView
            isDark={isDark}
            onOpenQuestionBank={(targetChNo) => {
              playSound("click");
              const ch = targetChNo || 1;
              setActiveVaultSubject("science");
              setActiveVaultChapter(ch);
              loadChapterData(ch, false, "science");
              setActiveTab("questions");
            }}
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
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Subject Selector Toggle */}
                <div className={`p-1 rounded-2xl border flex items-center gap-1 ${isDark ? "bg-black/40 border-white/10" : "bg-slate-100 border-slate-200"}`}>
                  <button
                    onClick={() => {
                      setActiveVaultSubject("math");
                      loadChapterData(6, false, "math");
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeVaultSubject === "math"
                        ? "bg-emerald-500 text-slate-950 font-extrabold shadow-sm"
                        : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    📐 Maths
                  </button>
                  <button
                    onClick={() => {
                      setActiveVaultSubject("science");
                      loadChapterData(1, false, "science");
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeVaultSubject === "science"
                        ? "bg-teal-500 text-slate-950 font-extrabold shadow-sm"
                        : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🧪 Science (NCERT)
                  </button>
                </div>

                {/* Chapter Select Dropdown */}
                <select 
                  className={`px-4 py-2 rounded-xl text-sm font-bold border outline-none cursor-pointer ${isDark ? "bg-black/40 border-white/10 text-white focus:border-emerald-500" : "bg-white border-slate-200"}`}
                  onChange={(e) => loadChapterData(parseInt(e.target.value), false, activeVaultSubject)}
                  value={activeVaultChapter || ""}
                  disabled={isAnalyzingVault}
                >
                  {activeVaultSubject === "math" ? (
                    <>
                      <option value="6">Ch 6: Triangles (60 Questions)</option>
                      <option value="8">Ch 8: Introduction to Trigonometry (60 Questions)</option>
                      <option value="9">Ch 9: Some Applications of Trig (55 Questions)</option>
                      <option value="10">Ch 10: Circles (55 Questions)</option>
                      <option value="13">Ch 13: Statistics (55 Questions)</option>
                      <option value="14">Ch 14: Probability (55 Questions)</option>
                    </>
                  ) : (
                    <>
                      <option value="1">Ch 1: Chemical Reactions & Equations (35 Questions)</option>
                      <option value="2">Ch 2: Acids, Bases and Salts (35 Questions)</option>
                      <option value="3">Ch 3: Metals and Non-Metals (35 Questions)</option>
                      <option value="5">Ch 5: Life Processes (35 Questions)</option>
                      <option value="11">Ch 11: Electricity (35 Questions)</option>
                      <option value="12">Ch 12: Magnetic Effects of Current (30 Questions)</option>
                      <option value="13">Ch 13: Our Environment (30 Questions)</option>
                    </>
                  )}
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

                {/* Interactive MCQ Practice Scoreboard (Tap-to-Check Mode) */}
                {mcqQuestionsInVault.length > 0 && (
                  <div className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
                    isDark
                      ? "bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-teal-950/30 border-emerald-500/30 shadow-[0_4px_24px_rgba(16,185,129,0.08)]"
                      : "bg-gradient-to-r from-emerald-50/90 via-white to-teal-50/90 border-emerald-200 shadow-sm"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-bold tracking-tight">Interactive MCQ Self-Test Engine</h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-emerald-500 text-slate-950">
                            Tap to Check
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          Tap options directly to verify your answer, earn +10 XP, or log mistakes instantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap w-full md:w-auto justify-start md:justify-end">
                      <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                        isDark ? "bg-black/40 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                      }`}>
                        <span className="text-slate-400">Attempted:</span>
                        <span className="text-emerald-400">{mcqProgressStats.attempted}/{mcqProgressStats.total}</span>
                      </div>

                      <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                        isDark ? "bg-black/40 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                      }`}>
                        <span className="text-slate-400">Accuracy:</span>
                        <span className={mcqProgressStats.accuracy >= 80 ? "text-emerald-400 font-black" : mcqProgressStats.accuracy >= 50 ? "text-amber-400 font-black" : "text-slate-300"}>
                          {mcqProgressStats.accuracy}%
                        </span>
                      </div>

                      <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                        isDark ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-2xs"
                      }`}>
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>+{mcqProgressStats.correct * 10} XP</span>
                      </div>

                      {mcqProgressStats.attempted > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            playSound("click");
                            setSelectedMcqOptions({});
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isDark ? "bg-white/5 border-white/10 text-slate-400 hover:text-white" : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-2xs"
                          }`}
                          title="Reset your MCQ attempt choices"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

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
                    className={`virtual-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border space-y-4 sm:space-y-5 transition-all duration-300 ${
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

                    {/* Visual Circuit / Optics Diagram */}
                    {(q.diagramSvg || q.diagramImageUrl) && (
                      <div className={`my-3 p-3 sm:p-4 rounded-2xl border flex flex-col items-center justify-center overflow-x-auto ${
                        isDark ? "bg-black/30 border-white/10" : "bg-slate-50 border-slate-200 shadow-2xs"
                      }`}>
                        {q.diagramImageUrl && (
                          <img
                            src={q.diagramImageUrl}
                            alt="Visual Physics / Circuit Diagram"
                            className="w-full max-w-lg h-auto rounded-xl shadow-xs border border-white/10 object-contain my-1.5"
                            loading="lazy"
                          />
                        )}
                        {q.diagramSvg && (
                          <div className="w-full max-w-xl flex justify-center" dangerouslySetInnerHTML={{ __html: q.diagramSvg }} />
                        )}
                      </div>
                    )}

                    {/* MCQ Options Grid — Interactive Tap-to-Evaluate System */}
                    {q.options && q.options.length > 0 && (() => {
                      const correctIdx = resolveCorrectOptionIndex(q);
                      const selectedIdx = selectedMcqOptions[q.id];
                      const hasAnswered = selectedIdx !== undefined;
                      const isAnswerCorrect = hasAnswered && selectedIdx === correctIdx;

                      return (
                        <div className="space-y-3 pt-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = hasAnswered && selectedIdx === optIdx;
                              const isThisCorrect = (hasAnswered || isRevealed) && optIdx === correctIdx;
                              const isThisWrong = isThisSelected && !isAnswerCorrect;

                              let btnStyle = "";
                              if (isThisCorrect) {
                                btnStyle = isDark
                                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                  : "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-sm";
                              } else if (isThisWrong) {
                                btnStyle = isDark
                                  ? "bg-rose-950/60 border-rose-500 text-rose-200 font-bold shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                                  : "bg-rose-50 border-rose-500 text-rose-900 font-bold shadow-sm";
                              } else if (isDark) {
                                btnStyle = "bg-black/30 border-white/10 text-slate-300 hover:bg-white/[0.06] hover:border-white/20";
                              } else {
                                btnStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 shadow-2xs";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  onClick={() => {
                                    if (hasAnswered && selectedIdx === optIdx) return;
                                    const isCorrect = optIdx === correctIdx;
                                    setSelectedMcqOptions((prev) => ({ ...prev, [q.id]: optIdx }));

                                    if (isCorrect) {
                                      setCorrectMcqQuestionIds((prev) => {
                                        const updated = { ...prev, [q.id]: true };
                                        localStorage.setItem("cbse10_lsa_correct_mcqs_v1", JSON.stringify(updated));
                                        return updated;
                                      });
                                      playSound("levelup");
                                      showXpToast(10, "MCQ Correct! (+10 XP)");
                                      triggerConfetti();
                                      triggerHaptic([30, 50]);
                                    } else {
                                      playSound("click");
                                      triggerHaptic(20);
                                    }
                                  }}
                                  className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm font-mono border text-left flex items-start gap-3 transition-all duration-200 cursor-pointer active:scale-[0.99] select-none ${btnStyle}`}
                                >
                                  <span className={`w-6 h-6 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                                    isThisCorrect
                                      ? "bg-emerald-500 text-slate-950 font-black"
                                      : isThisWrong
                                      ? "bg-rose-500 text-white font-black"
                                      : isDark
                                      ? "bg-white/10 text-white"
                                      : "bg-slate-200 text-slate-900"
                                  }`}>
                                    {isThisCorrect ? "✓" : isThisWrong ? "✗" : String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <span className="leading-relaxed block break-words">{opt}</span>
                                    {isThisSelected && (
                                      <span className={`inline-flex items-center gap-1 text-[10px] font-mono mt-1 font-bold ${
                                        isAnswerCorrect ? "text-emerald-400" : "text-rose-400"
                                      }`}>
                                        {isAnswerCorrect ? "✓ Your Selection (Correct!)" : "✗ Your Selection (Incorrect)"}
                                      </span>
                                    )}
                                    {!isThisSelected && isThisCorrect && hasAnswered && (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-mono mt-1 font-bold text-emerald-400">
                                        ✓ Official CBSE Correct Answer
                                      </span>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Smart Immediate Evaluation Bar */}
                          {hasAnswered && (
                            <div className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in ${
                              isAnswerCorrect
                                ? isDark
                                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                                  : "bg-emerald-50 border-emerald-300 text-emerald-900"
                                : isDark
                                ? "bg-rose-950/40 border-rose-500/40 text-rose-300"
                                : "bg-rose-50 border-rose-300 text-rose-900"
                            }`}>
                              <div className="flex items-center gap-2.5 min-w-0">
                                {isAnswerCorrect ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                ) : (
                                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                                )}
                                <div className="text-xs">
                                  <p className="font-bold">
                                    {isAnswerCorrect
                                      ? "Spot On! Verified correct with official CBSE Marking Key (+10 XP)."
                                      : `Incorrect. Option (${String.fromCharCode(65 + correctIdx)}) is the correct answer.`}
                                  </p>
                                  {q.examinerNote && (
                                    <p className={`text-[11px] mt-0.5 opacity-90 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                      Examiner Tip: {q.examinerNote}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end flex-wrap">
                                {!isAnswerCorrect && (
                                  <button
                                    type="button"
                                    onClick={() => logMcqMistakeToVault(q, selectedIdx, correctIdx)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                                      isDark
                                        ? "bg-rose-900/40 border-rose-700/60 text-rose-200 hover:bg-rose-800/50"
                                        : "bg-white border-rose-300 text-rose-800 hover:bg-rose-100 shadow-2xs"
                                    }`}
                                  >
                                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                                    <span>Log to Mistakes</span>
                                  </button>
                                )}

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedMcqOptions((prev) => {
                                      const updated = { ...prev };
                                      delete updated[q.id];
                                      return updated;
                                    });
                                  }}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                                    isDark
                                      ? "bg-white/10 border-white/10 text-slate-300 hover:bg-white/20"
                                      : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-2xs"
                                  }`}
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Try Again</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setRevealedQuestionIds((prev) => ({ ...prev, [q.id]: !isRevealed }));
                                  }}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                                    isRevealed
                                      ? "bg-emerald-500 text-slate-950 border-emerald-500 font-extrabold"
                                      : isDark
                                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
                                      : "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-2xs"
                                  }`}
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>{isRevealed ? "Hide Solution" : "Explain Solution"}</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}

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

            {/* SUBJECT & CHAPTER FILTERS */}
            <div className="space-y-3">
              {/* Subject Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                  Subject:
                </span>
                {(() => {
                  const sciCount = myMistakes.filter((m) => (m.subject || "").toLowerCase().includes("sci")).length;
                  const mathCount = myMistakes.filter((m) => (m.subject || "").toLowerCase().includes("math")).length;
                  return [
                    { id: "All", label: `All Subjects (${myMistakes.length})`, icon: BookOpen },
                    { id: "Science", label: `🧪 Science (${sciCount} Mistakes Logged)`, icon: FlaskConical },
                    { id: "Mathematics", label: `📐 Mathematics (${mathCount} Mistakes Logged)`, icon: Zap }
                  ];
                })().map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      playSound("click");
                      setMistakeSubjectFilter(s.id as any);
                      setMistakeChapterFilter("All");
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      mistakeSubjectFilter === s.id
                        ? isDark
                          ? "bg-orange-500 text-slate-950 border-orange-400 font-black shadow-md"
                          : "bg-orange-600 text-white border-orange-600 font-black shadow-md"
                        : isDark
                        ? "bg-black/40 border-white/10 text-slate-400 hover:text-white"
                        : "bg-white border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs"
                    }`}
                  >
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>

              {/* Chapter Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {(mistakeSubjectFilter === "Science"
                  ? [
                      "All",
                      "Ch 1: Chemical Reactions",
                      "Ch 2: Acids, Bases & Salts",
                      "Ch 3: Metals & Non-Metals",
                      "Ch 5: Life Processes",
                      "Ch 11: Electricity",
                      "Ch 12: Magnetic Effects",
                      "Ch 13: Our Environment"
                    ]
                  : mistakeSubjectFilter === "Mathematics"
                  ? [
                      "All",
                      "Ch 6: Triangles",
                      "Ch 8: Introduction to Trigonometry",
                      "Ch 9: Some Applications of Trig",
                      "Ch 10: Circles",
                      "Ch 13: Statistics"
                    ]
                  : [
                      "All",
                      "Ch 1: Reactions",
                      "Ch 2: Acids & Salts",
                      "Ch 3: Metals",
                      "Ch 5: Life Processes",
                      "Ch 6: Triangles",
                      "Ch 8: Trigonometry",
                      "Ch 10: Circles",
                      "Ch 11: Electricity",
                      "Ch 12: Magnetic Effects",
                      "Ch 13: Environment / Stats"
                    ]
                ).map((chTab) => (
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
            </div>

            {isLoadingMistakes ? (
              <div className={`text-center p-12 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Loading your error log...</div>
            ) : myMistakes.filter((item) => {
                if (mistakeSubjectFilter !== "All") {
                  const itemSub = (item.subject || "").toLowerCase();
                  const targetSub = mistakeSubjectFilter.toLowerCase();
                  if (targetSub === "science" && !itemSub.includes("sci")) return false;
                  if (targetSub === "mathematics" && !itemSub.includes("math")) return false;
                }
                if (mistakeChapterFilter === "All") return true;
                const chap = (item.chapter || "").toLowerCase();
                const filter = mistakeChapterFilter.toLowerCase();
                if (filter.includes("ch 1") || filter.includes("reaction")) return chap.includes("ch 1") || chap.includes("reaction") || chap.includes("chemical") || chap.includes("1");
                if (filter.includes("ch 2") || filter.includes("acid")) return chap.includes("ch 2") || chap.includes("acid") || chap.includes("2");
                if (filter.includes("ch 3") || filter.includes("metal")) return chap.includes("ch 3") || chap.includes("metal") || chap.includes("3");
                if (filter.includes("ch 5") || filter.includes("life")) return chap.includes("ch 5") || chap.includes("life") || chap.includes("5");
                if (filter.includes("ch 6") || filter.includes("triangle")) return chap.includes("6") || chap.includes("triangle");
                if (filter.includes("ch 8") || filter.includes("trig")) return chap.includes("8") || (chap.includes("trig") && !chap.includes("app"));
                if (filter.includes("ch 9") || filter.includes("height")) return chap.includes("9") || chap.includes("app") || chap.includes("height");
                if (filter.includes("ch 10") || filter.includes("circle")) return chap.includes("10") || chap.includes("circle");
                if (filter.includes("ch 11") || filter.includes("electric")) return chap.includes("11") || chap.includes("electric");
                if (filter.includes("ch 12") || filter.includes("magnetic")) return chap.includes("12") || chap.includes("magnetic");
                if (filter.includes("ch 13") || filter.includes("environment") || filter.includes("stats")) return chap.includes("13") || chap.includes("environment") || chap.includes("stat");
                return chap.includes(filter);
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
                    if (mistakeSubjectFilter !== "All") {
                      const itemSub = (item.subject || "").toLowerCase();
                      const targetSub = mistakeSubjectFilter.toLowerCase();
                      if (targetSub === "science" && !itemSub.includes("sci")) return false;
                      if (targetSub === "mathematics" && !itemSub.includes("math")) return false;
                    }
                    if (mistakeChapterFilter === "All") return true;
                    const chap = (item.chapter || "").toLowerCase();
                    const filter = mistakeChapterFilter.toLowerCase();
                    if (filter.includes("ch 1") || filter.includes("reaction")) return chap.includes("ch 1") || chap.includes("reaction") || chap.includes("chemical") || chap.includes("1");
                    if (filter.includes("ch 2") || filter.includes("acid")) return chap.includes("ch 2") || chap.includes("acid") || chap.includes("2");
                    if (filter.includes("ch 3") || filter.includes("metal")) return chap.includes("ch 3") || chap.includes("metal") || chap.includes("3");
                    if (filter.includes("ch 5") || filter.includes("life")) return chap.includes("ch 5") || chap.includes("life") || chap.includes("5");
                    if (filter.includes("ch 6") || filter.includes("triangle")) return chap.includes("6") || chap.includes("triangle");
                    if (filter.includes("ch 8") || filter.includes("trig")) return chap.includes("8") || (chap.includes("trig") && !chap.includes("app"));
                    if (filter.includes("ch 9") || filter.includes("height")) return chap.includes("9") || chap.includes("app") || chap.includes("height");
                    if (filter.includes("ch 10") || filter.includes("circle")) return chap.includes("10") || chap.includes("circle");
                    if (filter.includes("ch 11") || filter.includes("electric")) return chap.includes("11") || chap.includes("electric");
                    if (filter.includes("ch 12") || filter.includes("magnetic")) return chap.includes("12") || chap.includes("magnetic");
                    if (filter.includes("ch 13") || filter.includes("environment") || filter.includes("stats")) return chap.includes("13") || chap.includes("environment") || chap.includes("stat");
                    return chap.includes(filter);
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
              {/* Row 1: Chapter Header & Dual Selectors */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white uppercase flex items-center gap-2">
                      <span className="text-emerald-400">#</span> {activeChapter.name}
                    </h2>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                      {activeSubject.name.split(" ")[0]} Command
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {activeSubject.name} • {totalTopics} Official NCERT Sub-Topics • Target: 100% Board Score
                  </p>
                </div>

                {/* Dual Subject & Chapter Selectors */}
                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
                  <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
                    <label className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0">Subject:</label>
                    <select 
                      className={`bg-transparent text-xs font-bold border-none outline-none cursor-pointer transition-all ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                      value={commandSubjectId}
                      onChange={(e) => {
                        playSound("click");
                        const newSubId = e.target.value;
                        setCommandSubjectId(newSubId);
                        const sub = CBSE_SUBJECTS.find((s) => s.id === newSubId);
                        if (sub && sub.chapters.length > 0) {
                          setCommandChapterId(sub.chapters[0].id);
                          const chNo = sub.chapters[0].ncertChapterNo || 1;
                          const subjectType = newSubId === "science" ? "science" : "math";
                          setActiveVaultSubject(subjectType);
                          setActiveVaultChapter(chNo);
                          loadChapterData(chNo, false, subjectType);
                        }
                      }}
                    >
                      {CBSE_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
                    <label className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0">Chapter:</label>
                    <select 
                      className={`bg-transparent text-xs font-bold border-none outline-none cursor-pointer transition-all max-w-[240px] truncate ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                      value={commandChapterId}
                      onChange={(e) => {
                        playSound("click");
                        const newChId = e.target.value;
                        setCommandChapterId(newChId);
                        const ch = activeSubject.chapters.find((c) => c.id === newChId);
                        if (ch?.ncertChapterNo) {
                          const subjectType = commandSubjectId === "science" ? "science" : "math";
                          setActiveVaultSubject(subjectType);
                          setActiveVaultChapter(ch.ncertChapterNo);
                          loadChapterData(ch.ncertChapterNo, false, subjectType);
                        }
                      }}
                    >
                      {activeSubject.chapters.map((ch, idx) => (
                        <option key={ch.id} value={ch.id} className="bg-slate-900 text-white">
                          {ch.ncertChapterNo ? `Ch ${ch.ncertChapterNo}: ` : `${idx + 1}. `}{ch.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 2: Dedicated Full-Width Metric Cards (Zero Overlapping) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6">
                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isDark ? "bg-black/40 border-emerald-500/20 shadow-sm" : "bg-emerald-50/60 border-emerald-200"
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] text-emerald-400 uppercase font-bold tracking-wider font-mono">Progress</p>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">{progressPct}%</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">{completedTopicsCount} of {totalTopics} Topics Mastered</p>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isDark ? "bg-black/40 border-amber-500/20 shadow-sm" : "bg-amber-50/60 border-amber-200"
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] text-amber-400 uppercase font-bold tracking-wider font-mono">Mastery Level</p>
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-mono font-black text-amber-400">{masteryPct}%</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">Board Readiness Index</p>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isDark ? "bg-black/40 border-cyan-500/20 shadow-sm" : "bg-cyan-50/60 border-cyan-200"
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] text-cyan-400 uppercase font-bold tracking-wider font-mono">Attempted Qs</p>
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-mono font-black text-cyan-400">{attemptedStr}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">Practice Bank Progress</p>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isDark ? "bg-black/40 border-blue-500/20 shadow-sm" : "bg-blue-50/60 border-blue-200"
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[11px] text-blue-400 uppercase font-bold tracking-wider font-mono">Accuracy</p>
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-mono font-black text-blue-400">{accuracyStr}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">First-Attempt Success Rate</p>
                </div>
              </div>

              {/* ==================== HERO CONCEPT LAUNCHER CARD ==================== */}
              <div className={`mt-8 p-6 sm:p-8 rounded-3xl border transition-all relative overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-[#0c182a] via-[#091322] to-[#0d1c2e] border-teal-500/30 shadow-[0_8px_32px_rgba(20,184,166,0.15)]"
                  : "bg-gradient-to-br from-teal-50/90 via-white to-blue-50/80 border-teal-200 shadow-lg"
              }`}>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-teal-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Concept Blueprint Hub
                      </span>
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                        isDark ? "bg-teal-950/60 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-900 border-teal-300"
                      }`}>
                        Chapter {ncertNum} • {activeSubject.name}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      Master All Core Concepts, Formulas & Examiner Traps
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Deep dive into official NCERT syllabus theory, intuitive mental analogies, balanced chemical reactions with physical states, mathematical proofs, and step-by-step solved board examples for <strong>{activeChapter.name}</strong>.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      playSound("click");
                      setConceptsSubject(commandSubjectId === "science" ? "science" : "math");
                      setConceptsChapterNo(ncertNum || (commandSubjectId === "science" ? 1 : 6));
                      setActiveTab("concepts");
                    }}
                    className="w-full lg:w-auto px-6 py-4 rounded-2xl text-xs sm:text-sm font-black bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-xl shadow-teal-500/25 hover:scale-[1.02] shrink-0"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Launch Chapter {ncertNum} Concepts Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ==================== OFFICIAL NCERT SUB-TOPIC MATRIX ==================== */}
              <div className="mt-8 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Official NCERT Sub-Topics Syllabus
                    </h4>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {completedTopicsCount} of {totalTopics} Sub-Topics Mastered • Click checkbox to toggle completion
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeChapter.topics.map((topic, idx) => {
                    const isDone = !!completedTopicIds[topic.id];
                    return (
                      <div
                        key={topic.id}
                        className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isDone
                            ? isDark
                              ? "bg-emerald-950/20 border-emerald-500/30 shadow-xs"
                              : "bg-emerald-50/70 border-emerald-200 shadow-xs"
                            : isDark
                            ? "bg-[#0c101c] border-white/5 hover:border-white/15"
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <button
                            onClick={() => toggleTopic(topic.id)}
                            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer shrink-0 border ${
                              isDone
                                ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold"
                                : isDark
                                ? "bg-white/5 border-white/15 text-transparent hover:border-emerald-400"
                                : "bg-slate-100 border-slate-300 text-transparent hover:border-emerald-500"
                            }`}
                            title={isDone ? "Mark as Incomplete" : "Mark as Mastered"}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono text-slate-400 block">Sub-Topic #{idx + 1}</span>
                            <p className={`text-xs font-bold truncate ${isDone ? "text-emerald-400 line-through opacity-80" : isDark ? "text-white" : "text-slate-900"}`}>
                              {topic.title}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            playSound("click");
                            setConceptsSubject(commandSubjectId === "science" ? "science" : "math");
                            setConceptsChapterNo(ncertNum || (commandSubjectId === "science" ? 1 : 6));
                            setActiveTab("concepts");
                          }}
                          className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 shrink-0 ${
                            isDark
                              ? "bg-white/5 border-white/10 hover:bg-teal-500/20 hover:border-teal-400/40 text-teal-300"
                              : "bg-slate-50 border-slate-200 hover:bg-teal-50 text-teal-800"
                          }`}
                        >
                          <span>Study</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ==================== BENTO CARDS: NEXT TARGETS & DUE FOR REVISION ==================== */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? "bg-red-950/20 border-red-900/30" : "bg-red-50 border-red-200"}`}>
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

                <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? "bg-amber-950/20 border-amber-900/30" : "bg-amber-50 border-amber-200"}`}>
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
                      className="flex-1 py-2 text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-xl transition-colors cursor-pointer"
                    >
                      Start Flashcards
                    </button>
                    <button 
                      onClick={() => { playSound("click"); setActiveTab("common_mistakes"); }}
                      className="flex-1 py-2 text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-xl transition-colors cursor-pointer"
                    >
                      Review Mistakes
                    </button>
                  </div>
                </div>
              </div>

              {/* ==================== DIRECT MODULE COMMAND GRID (10 MODULES) ==================== */}
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Direct Module Command (Click to Navigate Instantly)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {[
                    { label: 'Master Question Bank', action: () => setActiveTab('questions'), icon: Zap },
                    { 
                      label: 'Concepts Hub (27 Ch)', 
                      action: () => {
                        setConceptsSubject(commandSubjectId === "science" ? "science" : "math");
                        setConceptsChapterNo(ncertNum || (commandSubjectId === "science" ? 1 : 6));
                        setActiveTab('concepts');
                      }, 
                      icon: BookOpen 
                    },
                    { label: 'NCERT Lab Activities', action: () => setActiveTab('activities'), icon: Beaker },
                    { 
                      label: 'Circuits & Question Bank', 
                      action: () => {
                        setActiveVaultSubject("science");
                        setActiveVaultChapter(11);
                        loadChapterData(11, false, "science");
                        setActiveTab('questions');
                      }, 
                      icon: Zap 
                    },
                    { label: 'Theorems & Proofs (5M)', action: () => setActiveTab('theorems'), icon: Award },
                    { label: 'Visual Mnemonics (49)', action: () => setActiveTab('mnemonics'), icon: Sparkles },
                    { label: 'Flashcards Engine', action: () => setActiveTab('flashcards'), icon: BookMarked },
                    { label: 'My Mistakes Log', action: () => setActiveTab('common_mistakes'), icon: Flame },
                    { label: 'Test Series (Sept 14)', action: () => setActiveTab('test_series'), icon: Calendar },
                    { label: 'Daily Pomodoro Routine', action: () => setActiveTab('today'), icon: Clock },
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
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-2xl px-2 pt-1.5 safe-area-bottom transition-colors ${
        isDark ? "border-white/10/90 bg-[#090d16]/95 text-white" : "border-slate-200 bg-white/95 text-slate-900 shadow-lg"
      }`}>
        <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
          {[
            { id: "chapter_dashboard", label: "Command", icon: Target },
            { id: "concepts", label: "Concepts", icon: BookOpen },
            { id: "questions", label: "Questions", icon: Zap },
            { id: "mnemonics", label: "Mnemonics", icon: Sparkles },
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
                { id: "diagrams", label: "NCERT Diagrams Vault (29)", icon: Compass },
                { id: "test_series", label: "Test Series (Sept 14)", icon: Calendar },
                { id: "activities", label: "NCERT Lab Activities", icon: Beaker },
                { id: "theorems", label: "Theorems & Converses (25)", icon: Award },
                { id: "reactions", label: "Chemistry Reactions (56)", icon: FlaskConical },
                { id: "hots", label: "Competitive HOTS Vault (35)", icon: Flame },
                { id: "flashcards", label: "Flashcards Engine", icon: BookMarked },
                { id: "common_mistakes", label: "My Mistakes Log", icon: Flame },
                { id: "today", label: "Daily Focus & Tasks", icon: Clock },
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
                    onChange={(e) => {
                      const newSub = e.target.value;
                      const defaultCh = newSub === "Science" 
                        ? "Ch 1: Chemical Reactions and Equations" 
                        : "Ch 6: Triangles";
                      setNewMistakeForm({ ...newMistakeForm, subject: newSub, chapter: defaultCh });
                    }}
                  >
                    <option value="Science">🧪 Science</option>
                    <option value="Mathematics">📐 Mathematics</option>
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
                    {newMistakeForm.subject === "Science" ? (
                      <>
                        <option value="Ch 1: Chemical Reactions and Equations">Ch 1: Chemical Reactions & Equations</option>
                        <option value="Ch 2: Acids, Bases and Salts">Ch 2: Acids, Bases and Salts</option>
                        <option value="Ch 3: Metals and Non-Metals">Ch 3: Metals and Non-Metals</option>
                        <option value="Ch 5: Life Processes">Ch 5: Life Processes</option>
                        <option value="Ch 11: Electricity">Ch 11: Electricity</option>
                        <option value="Ch 12: Magnetic Effects of Electric Current">Ch 12: Magnetic Effects</option>
                        <option value="Ch 13: Our Environment">Ch 13: Our Environment</option>
                      </>
                    ) : (
                      <>
                        <option value="Ch 6: Triangles">Ch 6: Triangles</option>
                        <option value="Ch 8: Introduction to Trigonometry">Ch 8: Trigonometry</option>
                        <option value="Ch 9: Some Applications of Trig">Ch 9: Heights & Distances</option>
                        <option value="Ch 10: Circles">Ch 10: Circles</option>
                        <option value="Ch 13: Statistics">Ch 13: Statistics</option>
                      </>
                    )}
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
