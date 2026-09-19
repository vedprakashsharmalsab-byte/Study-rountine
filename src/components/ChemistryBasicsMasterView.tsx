"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  FlaskConical,
  Atom,
  Sparkles,
  Zap,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  HelpCircle,
  BookOpen,
  Layers,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Shield,
  Lightbulb,
  Search,
  Droplet,
  Check,
  X,
  Target,
  Award,
  TestTube2
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { areteAudio } from "@/lib/audio";

interface ChemistryBasicsMasterViewProps {
  isDark: boolean;
  onNavigateToChapter?: (chapterNo: number) => void;
}

// ---------------------------------------------------------------------------
// 1. CATIONS & ANIONS DATA WITH VALENCIES
// ---------------------------------------------------------------------------
interface IonData {
  id: string;
  symbol: string;
  name: string;
  charge: number; // positive for cations, negative for anions
  valency: number;
  type: "monoatomic" | "polyatomic";
  formulaSymbol: string; // for rendering
  isRadical?: boolean;
}

const CATIONS: IonData[] = [
  { id: "na", symbol: "Na⁺", name: "Sodium", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Na" },
  { id: "k", symbol: "K⁺", name: "Potassium", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "K" },
  { id: "h", symbol: "H⁺", name: "Hydrogen", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "H" },
  { id: "nh4", symbol: "NH₄⁺", name: "Ammonium", charge: 1, valency: 1, type: "polyatomic", formulaSymbol: "NH4", isRadical: true },
  { id: "ag", symbol: "Ag⁺", name: "Silver", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Ag" },
  { id: "ca", symbol: "Ca²⁺", name: "Calcium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Ca" },
  { id: "mg", symbol: "Mg²⁺", name: "Magnesium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Mg" },
  { id: "zn", symbol: "Zn²⁺", name: "Zinc", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Zn" },
  { id: "fe2", symbol: "Fe²⁺", name: "Iron(II) / Ferrous", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Fe" },
  { id: "cu2", symbol: "Cu²⁺", name: "Copper(II) / Cupric", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Cu" },
  { id: "ba", symbol: "Ba²⁺", name: "Barium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Ba" },
  { id: "pb", symbol: "Pb²⁺", name: "Lead(II)", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Pb" },
  { id: "al", symbol: "Al³⁺", name: "Aluminium", charge: 3, valency: 3, type: "monoatomic", formulaSymbol: "Al" },
  { id: "fe3", symbol: "Fe³⁺", name: "Iron(III) / Ferric", charge: 3, valency: 3, type: "monoatomic", formulaSymbol: "Fe" }
];

const ANIONS: IonData[] = [
  { id: "cl", symbol: "Cl⁻", name: "Chloride", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "Cl" },
  { id: "oh", symbol: "OH⁻", name: "Hydroxide", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "OH", isRadical: true },
  { id: "no3", symbol: "NO₃⁻", name: "Nitrate", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "NO3", isRadical: true },
  { id: "hco3", symbol: "HCO₃⁻", name: "Bicarbonate / Hydrogen Carbonate", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "HCO3", isRadical: true },
  { id: "br", symbol: "Br⁻", name: "Bromide", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "Br" },
  { id: "i", symbol: "I⁻", name: "Iodide", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "I" },
  { id: "o", symbol: "O²⁻", name: "Oxide", charge: -2, valency: 2, type: "monoatomic", formulaSymbol: "O" },
  { id: "s", symbol: "S²⁻", name: "Sulfide", charge: -2, valency: 2, type: "monoatomic", formulaSymbol: "S" },
  { id: "so4", symbol: "SO₄²⁻", name: "Sulfate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "SO4", isRadical: true },
  { id: "so3", symbol: "SO₃²⁻", name: "Sulfite", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "SO3", isRadical: true },
  { id: "co3", symbol: "CO₃²⁻", name: "Carbonate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "CO3", isRadical: true },
  { id: "po4", symbol: "PO₄³⁻", name: "Phosphate", charge: -3, valency: 3, type: "polyatomic", formulaSymbol: "PO4", isRadical: true }
];

// Helper to compute greatest common divisor
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// ---------------------------------------------------------------------------
// 2. FIRST 20 ELEMENTS & ELECTRONIC CONFIGURATION
// ---------------------------------------------------------------------------
interface ElementConfig {
  z: number;
  name: string;
  symbol: string;
  k: number;
  l: number;
  m: number;
  n: number;
  valenceElectrons: number;
  valency: number;
  type: "metal" | "nonmetal" | "metalloid" | "noblegas";
  mnemonicHint: string;
}

const FIRST_20_ELEMENTS: ElementConfig[] = [
  { z: 1, name: "Hydrogen", symbol: "H", k: 1, l: 0, m: 0, n: 0, valenceElectrons: 1, valency: 1, type: "nonmetal", mnemonicHint: "1 electron; can lose or share" },
  { z: 2, name: "Helium", symbol: "He", k: 2, l: 0, m: 0, n: 0, valenceElectrons: 2, valency: 0, type: "noblegas", mnemonicHint: "Duplet complete (stable 0 valency)" },
  { z: 3, name: "Lithium", symbol: "Li", k: 2, l: 1, m: 0, n: 0, valenceElectrons: 1, valency: 1, type: "metal", mnemonicHint: "Loses 1 valence electron to form Li⁺" },
  { z: 4, name: "Beryllium", symbol: "Be", k: 2, l: 2, m: 0, n: 0, valenceElectrons: 2, valency: 2, type: "metal", mnemonicHint: "Loses 2 valence electrons to form Be²⁺" },
  { z: 5, name: "Boron", symbol: "B", k: 2, l: 3, m: 0, n: 0, valenceElectrons: 3, valency: 3, type: "metalloid", mnemonicHint: "Shares 3 electrons" },
  { z: 6, name: "Carbon", symbol: "C", k: 2, l: 4, m: 0, n: 0, valenceElectrons: 4, valency: 4, type: "nonmetal", mnemonicHint: "Tetravalent! Shares 4 electrons (Covalent)" },
  { z: 7, name: "Nitrogen", symbol: "N", k: 2, l: 5, m: 0, n: 0, valenceElectrons: 5, valency: 3, type: "nonmetal", mnemonicHint: "Needs 3 electrons: 8 - 5 = 3" },
  { z: 8, name: "Oxygen", symbol: "O", k: 2, l: 6, m: 0, n: 0, valenceElectrons: 6, valency: 2, type: "nonmetal", mnemonicHint: "Needs 2 electrons: 8 - 6 = 2 (Oxide O²⁻)" },
  { z: 9, name: "Fluorine", symbol: "F", k: 2, l: 7, m: 0, n: 0, valenceElectrons: 7, valency: 1, type: "nonmetal", mnemonicHint: "Needs 1 electron: 8 - 7 = 1 (Fluoride F⁻)" },
  { z: 10, name: "Neon", symbol: "Ne", k: 2, l: 8, m: 0, n: 0, valenceElectrons: 8, valency: 0, type: "noblegas", mnemonicHint: "Octet complete (stable 0 valency)" },
  { z: 11, name: "Sodium", symbol: "Na", k: 2, l: 8, m: 1, n: 0, valenceElectrons: 1, valency: 1, type: "metal", mnemonicHint: "Loses 1 electron easily (Na⁺ cation)" },
  { z: 12, name: "Magnesium", symbol: "Mg", k: 2, l: 8, m: 2, n: 0, valenceElectrons: 2, valency: 2, type: "metal", mnemonicHint: "Loses 2 electrons (Mg²⁺ cation)" },
  { z: 13, name: "Aluminium", symbol: "Al", k: 2, l: 8, m: 3, n: 0, valenceElectrons: 3, valency: 3, type: "metal", mnemonicHint: "Loses 3 electrons (Al³⁺ cation)" },
  { z: 14, name: "Silicon", symbol: "Si", k: 2, l: 8, m: 4, n: 0, valenceElectrons: 4, valency: 4, type: "metalloid", mnemonicHint: "Shares 4 electrons like Carbon" },
  { z: 15, name: "Phosphorus", symbol: "P", k: 2, l: 8, m: 5, n: 0, valenceElectrons: 5, valency: 3, type: "nonmetal", mnemonicHint: "8 - 5 = 3 (Phosphate PO₄³⁻)" },
  { z: 16, name: "Sulfur", symbol: "S", k: 2, l: 8, m: 6, n: 0, valenceElectrons: 6, valency: 2, type: "nonmetal", mnemonicHint: "8 - 6 = 2 (Sulfide S²⁻, Sulfate SO₄²⁻)" },
  { z: 17, name: "Chlorine", symbol: "Cl", k: 2, l: 8, m: 7, n: 0, valenceElectrons: 7, valency: 1, type: "nonmetal", mnemonicHint: "8 - 7 = 1 (Chloride Cl⁻ anion)" },
  { z: 18, name: "Argon", symbol: "Ar", k: 2, l: 8, m: 8, n: 0, valenceElectrons: 8, valency: 0, type: "noblegas", mnemonicHint: "Octet complete (stable 0 valency)" },
  { z: 19, name: "Potassium", symbol: "K", k: 2, l: 8, m: 8, n: 1, valenceElectrons: 1, valency: 1, type: "metal", mnemonicHint: "Most reactive alkali metal (K⁺ cation)" },
  { z: 20, name: "Calcium", symbol: "Ca", k: 2, l: 8, m: 8, n: 2, valenceElectrons: 2, valency: 2, type: "metal", mnemonicHint: "Loses 2 valence electrons (Ca²⁺ cation)" }
];

// ---------------------------------------------------------------------------
// 3. REACTIVITY SERIES LADDER
// ---------------------------------------------------------------------------
interface ReactivityElement {
  symbol: string;
  name: string;
  mnemonicWord: string;
  reactivityLevel: "Extremely Reactive" | "Moderately Reactive" | "Least Reactive";
  waterReaction: string;
  acidReaction: string;
  reductionMethod: string;
}

const REACTIVITY_SERIES: ReactivityElement[] = [
  { symbol: "K", name: "Potassium", mnemonicWord: "Please", reactivityLevel: "Extremely Reactive", waterReaction: "Explosive with cold water (ignites H₂)", acidReaction: "Violent / Dangerous", reductionMethod: "Electrolytic reduction of molten chloride" },
  { symbol: "Na", name: "Sodium", mnemonicWord: "Stop", reactivityLevel: "Extremely Reactive", waterReaction: "Vigorous with cold water (catches fire)", acidReaction: "Violent", reductionMethod: "Electrolytic reduction of molten chloride" },
  { symbol: "Ca", name: "Calcium", mnemonicWord: "Calling", reactivityLevel: "Extremely Reactive", waterReaction: "Less violent; bubbles stick to metal making it float", acidReaction: "Very rapid", reductionMethod: "Electrolytic reduction" },
  { symbol: "Mg", name: "Magnesium", mnemonicWord: "Me", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts with HOT water / steam; floats on bubbles", acidReaction: "Rapid evolution of H₂", reductionMethod: "Reduction using carbon or electrolysis" },
  { symbol: "Al", name: "Aluminium", mnemonicWord: "A", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts only with STEAM (Al₂O₃ protective layer)", acidReaction: "Rapid after oxide layer dissolves", reductionMethod: "Electrolytic reduction (Hall-Héroult)" },
  { symbol: "Zn", name: "Zinc", mnemonicWord: "Careless", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts only with STEAM", acidReaction: "Steady bubbles of H₂ gas", reductionMethod: "Smelting with Carbon (Coke)" },
  { symbol: "Fe", name: "Iron", mnemonicWord: "Zebra", reactivityLevel: "Moderately Reactive", waterReaction: "Slow with STEAM (forming Fe₃O₄)", acidReaction: "Moderate bubbles of H₂ gas", reductionMethod: "Blast furnace reduction with Carbon / CO" },
  { symbol: "Pb", name: "Lead", mnemonicWord: "Instead", reactivityLevel: "Moderately Reactive", waterReaction: "No visible reaction with cold water", acidReaction: "Slow (forms insoluble protective salt layer)", reductionMethod: "Reduction with Carbon" },
  { symbol: "[H]", name: "Hydrogen", mnemonicWord: "Try", reactivityLevel: "Least Reactive", waterReaction: "Reference baseline (Non-metal standard)", acidReaction: "Reference: Metals above displace H₂ from dilute acids", reductionMethod: "Baseline" },
  { symbol: "Cu", name: "Copper", mnemonicWord: "Learning", reactivityLevel: "Least Reactive", waterReaction: "No reaction even with steam", acidReaction: "DOES NOT displace H₂ from dilute HCl / H₂SO₄", reductionMethod: "Roasting followed by self-reduction or electrolysis" },
  { symbol: "Hg", name: "Mercury", mnemonicWord: "How", reactivityLevel: "Least Reactive", waterReaction: "No reaction", acidReaction: "No reaction with dilute non-oxidizing acids", reductionMethod: "Heating cinnabar (HgS) in air" },
  { symbol: "Ag", name: "Silver", mnemonicWord: "Copper", reactivityLevel: "Least Reactive", waterReaction: "No reaction", acidReaction: "No reaction with dilute acids", reductionMethod: "Found in native or refined by chemical displacement" },
  { symbol: "Au", name: "Gold", mnemonicWord: "Saves", reactivityLevel: "Least Reactive", waterReaction: "Completely inert", acidReaction: "Only dissolves in Aqua Regia (3:1 HCl : HNO₃)", reductionMethod: "Found in pure native state" },
  { symbol: "Pt", name: "Platinum", mnemonicWord: "Gold", reactivityLevel: "Least Reactive", waterReaction: "Completely inert", acidReaction: "Only dissolves in Aqua Regia", reductionMethod: "Found in pure native state" }
];

// ---------------------------------------------------------------------------
// 4. BOARD PRACTICAL COLOR CHANGES & LAB OBSERVATION CARDS
// ---------------------------------------------------------------------------
interface LabObservation {
  id: string;
  title: string;
  reactionEquation: string;
  reactantsState: string;
  productsState: string;
  colorTransition: string;
  gasOrPpt: string;
  examSignificance: string;
  practicalTest: string;
}

const LAB_OBSERVATIONS: LabObservation[] = [
  {
    id: "lab_feso4",
    title: "1. Thermal Decomposition of Ferrous Sulphate Crystals",
    reactionEquation: "2FeSO₄·7H₂O (s, pale green) ──Δ──> Fe₂O₃ (s, reddish-brown) + SO₂ (g) + SO₃ (g) + 7H₂O (l)",
    reactantsState: "Green heptahydrate crystals (FeSO₄·7H₂O)",
    productsState: "Reddish-brown solid (Ferric oxide Fe₂O₃) + 2 acidic gases",
    colorTransition: "Pale green crystals ➔ Dirty white (anhydrous) ➔ Reddish-brown solid",
    gasOrPpt: "Pungent smelling gases of burning sulfur (SO₂ + SO₃). Both turn moist blue litmus red!",
    examSignificance: "Repeated in 2020, 2023, 2024 CBSE papers. Tests dehydration first, then decomposition.",
    practicalTest: "Holding a boiling tube with dry test tube holder pointing away from self and neighbors."
  },
  {
    id: "lab_pbno3",
    title: "2. Thermal Decomposition of Lead Nitrate",
    reactionEquation: "2Pb(NO₃)₂ (s, white powder) ──Δ──> 2PbO (s, yellow) + 4NO₂ (g, brown fumes) + O₂ (g)",
    reactantsState: "White crystalline powder of Lead Nitrate",
    productsState: "Lead monoxide (yellow residue when cold) + Nitrogen dioxide + Oxygen",
    colorTransition: "White powder ➔ Yellow solid residue (PbO) adhering to boiling tube",
    gasOrPpt: "Dense reddish-brown fumes of Nitrogen dioxide (NO₂) + Colorless Oxygen supporting rekindling.",
    examSignificance: "Examiners love asking: 'Name the brown fumes evolved.' Answer: NO₂ (Nitrogen Dioxide).",
    practicalTest: "Glowing splint inserted into mouth rekindles due to O₂ gas emission."
  },
  {
    id: "lab_cao",
    title: "3. Slaking of Lime (Quicklime with Water)",
    reactionEquation: "CaO (s, white quicklime) + H₂O (l) ──> Ca(OH)₂ (aq, slaked lime) + Enormous Heat",
    reactantsState: "Hard white lumps of Calcium Oxide (Quicklime)",
    productsState: "Milky suspension/solution of Calcium Hydroxide (Slaked Lime)",
    colorTransition: "White solid ➔ Slaked lime solution with vigorous hissing sound",
    gasOrPpt: "Highly exothermic reaction! Beaker becomes scalding hot to the touch.",
    examSignificance: "Class 10 Unit 1 prototype of Exothermic Combination Reaction.",
    practicalTest: "The supernatant liquid (clear limewater) is used for testing Carbon Dioxide gas."
  },
  {
    id: "lab_limewater",
    title: "4. Limewater Test for Carbon Dioxide",
    reactionEquation: "Ca(OH)₂ (aq) + CO₂ (g) ──> CaCO₃ (s, white ppt / milky) + H₂O (l)\nCaCO₃ (s) + H₂O (l) + CO₂ (excess) ──> Ca(HCO₃)₂ (aq, colorless soluble)",
    reactantsState: "Clear transparent freshly prepared limewater",
    productsState: "Milky insoluble CaCO₃ precipitate; on excess CO₂, soluble Calcium Bicarbonate",
    colorTransition: "Clear ➔ Milky White turbidity ➔ Clear transparent solution again!",
    gasOrPpt: "White precipitate of CaCO₃ dissolves upon continuous bubbling of excess CO₂ gas.",
    examSignificance: "Fundamental test for CO₂. Tested in Ch 1 (Reactions), Ch 2 (Acids on carbonates), Ch 5 (Respiration).",
    practicalTest: "Passing exhaled air through freshly slaked lime using a delivery tube."
  },
  {
    id: "lab_pbi2",
    title: "5. Precipitation Reaction (Lead Nitrate + Potassium Iodide)",
    reactionEquation: "Pb(NO₃)₂ (aq, clear) + 2KI (aq, clear) ──> PbI₂ (s, bright canary yellow ppt) + 2KNO₃ (aq)",
    reactantsState: "Two completely clear, transparent, colorless aqueous solutions",
    productsState: "Bright brilliant yellow precipitate settling down + colorless KNO₃",
    colorTransition: "Colorless + Colorless ➔ Dazzling Canary Yellow Precipitate!",
    gasOrPpt: "Insoluble solid Lead Iodide (PbI₂) precipitate (Double displacement reaction).",
    examSignificance: "Activity 1.2 in NCERT Science textbook. Iconic question on identifying precipitate color.",
    practicalTest: "Instant precipitation occurs without needing any heating or external catalyst."
  },
  {
    id: "lab_fe_cuso4",
    title: "6. Iron Nail in Copper Sulphate Solution",
    reactionEquation: "Fe (s, silver-grey) + CuSO₄ (aq, deep blue) ──> FeSO₄ (aq, pale green) + Cu (s, reddish-brown deposit)",
    reactantsState: "Cleaned grey iron nails + Deep blue copper sulfate solution",
    productsState: "Light pale green ferrous sulfate solution + Reddish brown copper coating",
    colorTransition: "Deep Blue solution ➔ Pale Green solution; Silver-grey nail ➔ Reddish brown coating",
    gasOrPpt: "Displacement reaction! Iron is higher than Copper in the reactivity series.",
    examSignificance: "CBSE Activity 1.9. Always asked: 'Why does blue color fade?' Because Cu²⁺ ions are displaced by Fe²⁺.",
    practicalTest: "Nails must be cleaned with sandpaper first to remove any oxide/rust coating."
  }
];

// ---------------------------------------------------------------------------
// 5. STEP-BY-STEP BALANCING PRACTICE EQUATIONS
// ---------------------------------------------------------------------------
interface BalancingEquation {
  id: string;
  unbalanced: string;
  balanced: string;
  explanation: string;
  steps: { stepNo: number; description: string; currentEquation: string }[];
}

const BALANCING_EXAMPLES: BalancingEquation[] = [
  {
    id: "eq_fe_h2o",
    unbalanced: "Fe + H₂O ──> Fe₃O₄ + H₂",
    balanced: "3Fe + 4H₂O ──> Fe₃O₄ + 4H₂",
    explanation: "Classic NCERT textbook demonstration of the hit-and-trial method.",
    steps: [
      { stepNo: 1, description: "Box all formulas. Never alter anything inside formulas (e.g. do not touch Fe₃O₄).", currentEquation: "Fe + H₂O ──> Fe₃O₄ + H₂" },
      { stepNo: 2, description: "Count atoms: RHS has 4 Oxygen atoms, LHS has only 1 in H₂O. Place coefficient 4 in front of H₂O.", currentEquation: "Fe + 4H₂O ──> Fe₃O₄ + H₂" },
      { stepNo: 3, description: "Now LHS has 8 Hydrogen atoms (4 × 2). Place coefficient 4 in front of H₂ on RHS.", currentEquation: "Fe + 4H₂O ──> Fe₃O₄ + 4H₂" },
      { stepNo: 4, description: "RHS has 3 Iron (Fe) atoms. Place coefficient 3 in front of Fe on LHS. Verify all atom counts!", currentEquation: "3Fe + 4H₂O ──> Fe₃O₄ + 4H₂" }
    ]
  },
  {
    id: "eq_c3h8_o2",
    unbalanced: "C₃H₈ + O₂ ──> CO₂ + H₂O",
    balanced: "C₃H₈ + 5O₂ ──> 3CO₂ + 4H₂O",
    explanation: "Combustion of Propane (Hydrocarbon combustion pattern used in Ch 4 Carbon Compounds).",
    steps: [
      { stepNo: 1, description: "Balance Carbon first: 3 Carbon on LHS, so place 3 in front of CO₂ on RHS.", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + H₂O" },
      { stepNo: 2, description: "Balance Hydrogen next: 8 Hydrogen on LHS, so place 4 in front of H₂O on RHS (4 × 2 = 8).", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + 4H₂O" },
      { stepNo: 3, description: "Count total Oxygen on RHS: (3 × 2) + (4 × 1) = 6 + 4 = 10 Oxygen atoms.", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + 4H₂O (10 O needed)" },
      { stepNo: 4, description: "Place coefficient 5 in front of O₂ on LHS (5 × 2 = 10). Equation is perfectly balanced!", currentEquation: "C₃H₈ + 5O₂ ──> 3CO₂ + 4H₂O" }
    ]
  },
  {
    id: "eq_hno3_caoh2",
    unbalanced: "HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O",
    balanced: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O",
    explanation: "Neutralization reaction of Nitric Acid with Calcium Hydroxide.",
    steps: [
      { stepNo: 1, description: "Notice Nitrate (NO₃) radical: RHS has 2 NO₃ radicals inside Ca(NO₃)₂. Place 2 in front of HNO₃ on LHS.", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O" },
      { stepNo: 2, description: "Calcium is already balanced (1 on LHS, 1 on RHS).", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O" },
      { stepNo: 3, description: "Count Hydrogen: 2 from (2HNO₃) + 2 from Ca(OH)₂ = 4 Hydrogen on LHS. Place 2 in front of H₂O on RHS (2 × 2 = 4).", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O" },
      { stepNo: 4, description: "Verify Oxygen: (2 × 3) + 2 = 8 on LHS; (2 × 3) + 2 = 8 on RHS. Fully balanced!", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O" }
    ]
  }
];

// ---------------------------------------------------------------------------
// 6. QUICK FOUNDATION DIAGNOSTIC QUIZ
// ---------------------------------------------------------------------------
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

const FOUNDATION_QUIZ: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the correct chemical formula for Aluminium Sulfate using the Criss-Cross valency rule?",
    options: ["AlSO₄", "Al₂(SO₄)₃", "Al₃(SO₄)₂", "Al(SO₄)₃"],
    correctIdx: 1,
    explanation: "Aluminium has valency 3 (Al³⁺) and Sulfate has valency 2 (SO₄²⁻). Criss-crossing gives Al₂(SO₄)₃ with brackets around the polyatomic radical."
  },
  {
    id: "q2",
    question: "Why do we never change subscripts inside chemical formulas (e.g. writing H₂O₂ instead of 2H₂O) when balancing an equation?",
    options: [
      "Because subscripts alter the chemical identity and molecular structure of the substance",
      "Because subscripts cannot be even numbers in chemistry",
      "Because subscripts only apply to gaseous reactants",
      "Because changing subscripts violates Boyle's Law"
    ],
    correctIdx: 0,
    explanation: "Changing subscripts alters the chemical identity of the substance. H₂O is vital drinking water, whereas H₂O₂ is toxic, highly reactive hydrogen peroxide!"
  },
  {
    id: "q3",
    question: "According to the Reactivity Series, what happens when an iron nail is immersed in an aqueous solution of Zinc Sulphate (ZnSO₄)?",
    options: [
      "Iron displaces Zinc, solution turns green",
      "No chemical reaction occurs because Iron is less reactive than Zinc",
      "Hydrogen gas vigorously bubbles out",
      "A white precipitate of Zinc Hydroxide forms"
    ],
    correctIdx: 1,
    explanation: "In the reactivity series ('Careless Zebra Instead...'), Zinc (Zn) is above Iron (Fe). A less reactive metal cannot displace a more reactive metal from its salt solution!"
  },
  {
    id: "q4",
    question: "When crystalline green Ferrous Sulphate (FeSO₄·7H₂O) is heated in a dry boiling tube, what are the primary observations?",
    options: [
      "White fumes of HCl with blue residue",
      "Loss of water of crystallization followed by a reddish-brown solid (Fe₂O₃) and pungent sulfur gases (SO₂, SO₃)",
      "Instant canary yellow precipitate with oxygen gas emission",
      "Vigorous flame with sweet ester odor"
    ],
    correctIdx: 1,
    explanation: "FeSO₄·7H₂O first loses its 7 water molecules turning white, then decomposes into reddish-brown Fe₂O₃ and suffocating, choking gases SO₂ and SO₃."
  },
  {
    id: "q5",
    question: "Why does carbon form covalent bonds rather than ionic bonds by forming C⁴⁺ or C⁴⁻ ions?",
    options: [
      "Because carbon is a noble gas with zero valency",
      "Removing 4 electrons requires massive ionization energy, while holding 10 electrons by 6 protons is electrostatic suicide",
      "Because carbon has an odd number of neutrons",
      "Because carbon only reacts with hydrogen and never with oxygen"
    ],
    correctIdx: 1,
    explanation: "Forming C⁴⁺ requires an enormous amount of energy to overcome nuclear pull for 4 electrons. Forming C⁴⁻ would require 6 protons to hold 10 electrons, which is unstable. Hence, carbon exclusively shares electrons!"
  }
];

export default function ChemistryBasicsMasterView({
  isDark,
  onNavigateToChapter
}: ChemistryBasicsMasterViewProps) {
  // Navigation sub-tabs within Chemistry Basics
  const [activeTab, setActiveTab] = useState<
    "criss_cross" | "valency_table" | "balancing" | "reactivity" | "observations" | "quiz"
  >("criss_cross");

  // Criss-Cross Interactive State
  const [selectedCationId, setSelectedCationId] = useState<string>("al");
  const [selectedAnionId, setSelectedAnionId] = useState<string>("so4");

  // Reactivity Displacement Simulator State
  const [simMetal, setSimMetal] = useState<string>("Fe");
  const [simSolution, setSimSolution] = useState<string>("CuSO4");

  // Balancing Equations State
  const [activeBalancingIdx, setActiveBalancingIdx] = useState<number>(0);
  const [revealedBalancingStep, setRevealedBalancingStep] = useState<number>(1);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Derive Criss-Cross Formula
  const selectedCation = useMemo(() => CATIONS.find((c) => c.id === selectedCationId) || CATIONS[0], [selectedCationId]);
  const selectedAnion = useMemo(() => ANIONS.find((a) => a.id === selectedAnionId) || ANIONS[0], [selectedAnionId]);

  const crissCrossResult = useMemo(() => {
    const cVal = selectedCation.valency;
    const aVal = selectedAnion.valency;
    const divisor = gcd(cVal, aVal);
    const simplifiedCationSubscript = aVal / divisor;
    const simplifiedAnionSubscript = cVal / divisor;

    // Build formula string
    let formulaStr = "";

    // Cation part
    if (selectedCation.isRadical && simplifiedCationSubscript > 1) {
      formulaStr += `(${selectedCation.formulaSymbol})${simplifiedCationSubscript}`;
    } else {
      formulaStr += selectedCation.formulaSymbol + (simplifiedCationSubscript > 1 ? simplifiedCationSubscript : "");
    }

    // Anion part
    if (selectedAnion.isRadical && simplifiedAnionSubscript > 1) {
      formulaStr += `(${selectedAnion.formulaSymbol})${simplifiedAnionSubscript}`;
    } else {
      formulaStr += selectedAnion.formulaSymbol + (simplifiedAnionSubscript > 1 ? simplifiedAnionSubscript : "");
    }

    // Compound Name
    const compoundName = `${selectedCation.name} ${selectedAnion.name}`;

    return {
      cVal,
      aVal,
      simplifiedCationSubscript,
      simplifiedAnionSubscript,
      formulaStr,
      compoundName,
      ratio: `${simplifiedCationSubscript} : ${simplifiedAnionSubscript}`
    };
  }, [selectedCation, selectedAnion]);

  // Reactivity Simulator Result
  const reactivitySimulationResult = useMemo(() => {
    // Metal rankings (lower index = more reactive)
    const order = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "Pb", "Cu", "Ag", "Au"];
    const solutionMetalMap: Record<string, { metal: string; name: string; color: string }> = {
      CuSO4: { metal: "Cu", name: "Copper(II) Sulfate", color: "Deep Blue" },
      FeSO4: { metal: "Fe", name: "Iron(II) Sulfate", color: "Light Pale Green" },
      ZnSO4: { metal: "Zn", name: "Zinc Sulfate", color: "Colorless Transparent" },
      AgNO3: { metal: "Ag", name: "Silver Nitrate", color: "Colorless Transparent" },
      MgSO4: { metal: "Mg", name: "Magnesium Sulfate", color: "Colorless Transparent" }
    };

    const solInfo = solutionMetalMap[simSolution] || solutionMetalMap["CuSO4"];
    const metalRank = order.indexOf(simMetal);
    const solMetalRank = order.indexOf(solInfo.metal);

    if (metalRank === -1 || solMetalRank === -1) {
      return { success: false, msg: "Simulation not supported for this pair." };
    }

    if (simMetal === solInfo.metal) {
      return {
        success: false,
        canDisplace: false,
        title: "Same Metal",
        explanation: `No net chemical displacement occurs because ${simMetal} cannot displace its own ions.`,
        observation: "No color change. Solution remains unchanged."
      };
    }

    if (metalRank < solMetalRank) {
      // simMetal is HIGHER up, so it DISPLACES
      return {
        success: true,
        canDisplace: true,
        title: "Displacement Occurs! ✅",
        explanation: `${simMetal} is positioned HIGHER than ${solInfo.metal} in the activity series. Hence, ${simMetal} readily displaces ${solInfo.metal} from ${solInfo.name}.`,
        equation: `${simMetal} + ${simSolution} ──> ${simMetal}SO₄ + ${solInfo.metal} ↓`,
        observation: `Solution color changes! ${solInfo.color} fades, and solid ${solInfo.metal} deposits onto the ${simMetal} surface.`
      };
    } else {
      // simMetal is LOWER down, so NO displacement
      return {
        success: true,
        canDisplace: false,
        title: "No Reaction Occurs ❌",
        explanation: `${simMetal} is positioned LOWER than ${solInfo.metal} in the activity series. A less electropositive metal cannot displace a more reactive metal from its aqueous salt solution!`,
        equation: `${simMetal} + ${simSolution} ──> No Reaction (NR)`,
        observation: `No color change, no temperature increase, and no deposit. The solution remains ${solInfo.color}.`
      };
    }
  }, [simMetal, simSolution]);

  // Quiz submission & scoring
  const handleSelectQuizOption = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    areteAudio.play("click");
  };

  const handleGradeQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    FOUNDATION_QUIZ.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIdx) correctCount++;
    });
    if (correctCount >= 4) {
      areteAudio.play("success");
    } else {
      areteAudio.play("pop");
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    areteAudio.play("reveal");
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* =========================================================================
          HERO BANNER: ZERO-TO-HERO CHEMISTRY PREREQUISITES
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-br from-[#1b150c] via-[#15100a] to-[#120f09] border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)]"
            : "bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-yellow-50/60 border-amber-200 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" /> CBSE Class 10 Foundation Prerequisite
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-amber-950/60 text-amber-300 border-amber-500/30"
                    : "bg-amber-100 text-amber-900 border-amber-300"
                }`}
              >
                🧪 Zero-to-Hero Chemistry Bridge Course
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300"
                }`}
              >
                ⚡ 100% Practical & Interactive
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
                Basics of Chemistry Required for Class 10
              </span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              85% of students struggle in Class 10 Chemistry not because Chapter 1 is difficult, but because they never
              mastered <strong>valencies</strong>, <strong>polyatomic radicals</strong>, the{" "}
              <strong>criss-cross formula rule</strong>, <strong>reactivity series</strong>, or{" "}
              <strong>board color changes</strong>. This interactive masterclass bridges every Class 9 gap so you can
              score 100% in Chapters 1, 2, 3, and 4!
            </p>
          </div>

          {/* Quick Jump Buttons to Class 10 Chapters */}
          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Direct Chapter Jumps:
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              <button
                onClick={() => onNavigateToChapter?.(1)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer flex items-center justify-between gap-2"
              >
                <span>Ch 1: Chemical Reactions</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(2)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer flex items-center justify-between gap-2"
              >
                <span>Ch 2: Acids, Bases & Salts</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(3)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer flex items-center justify-between gap-2"
              >
                <span>Ch 3: Metals & Non-Metals</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(4)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer flex items-center justify-between gap-2"
              >
                <span>Ch 4: Carbon & Compounds</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/10">
          {[
            { id: "criss_cross", label: "🧪 Interactive Criss-Cross Formula Builder", icon: Atom },
            { id: "valency_table", label: "📊 First 20 Elements & Valency Matrix", icon: Layers },
            { id: "balancing", label: "⚖️ How to Balance Equations (Step-by-Step)", icon: RefreshCw },
            { id: "reactivity", label: "⚡ Reactivity Series Ladder & Simulator", icon: Zap },
            { id: "observations", label: "🎨 Board Lab Colors & Observations", icon: TestTube2 },
            { id: "quiz", label: "🎯 5-Question Foundation Diagnostic", icon: Target }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  areteAudio.play("click");
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? isDark
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                      : "bg-amber-600 text-white border-amber-600 font-black shadow-md"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MODULE 1: INTERACTIVE CRISS-CROSS FORMULA GENERATOR
          ========================================================================= */}
      {activeTab === "criss_cross" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Atom className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Interactive Criss-Cross Chemical Formula Generator
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Pick any Cation (+ve) and Anion (-ve). Watch how valencies criss-cross, simplify common factors, and
                apply brackets for polyatomic radicals like (SO₄) and (OH).
              </p>
            </div>

            {/* Cation Selector */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>1. Select Cation (Positive Ion / Metal):</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  (Donates electrons to form stable electropositive ion)
                </span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {CATIONS.map((c) => {
                  const isSelected = selectedCationId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCationId(c.id);
                        areteAudio.play("click");
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? isDark
                            ? "bg-amber-500/20 border-amber-400 text-white shadow-sm ring-1 ring-amber-400"
                            : "bg-amber-100 border-amber-500 text-amber-950 shadow-sm ring-1 ring-amber-500"
                          : isDark
                          ? "bg-white/[0.03] border-white/5 text-slate-300 hover:border-white/20"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-sm text-amber-400">{c.symbol}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                          +{c.valency}
                        </span>
                      </div>
                      <div className="text-[11px] truncate mt-1 text-slate-300">{c.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Anion Selector */}
            <div className="space-y-3 mb-8">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <span>2. Select Anion (Negative Ion / Non-Metal or Polyatomic Radical):</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  (Accepts electrons to satisfy octet)
                </span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {ANIONS.map((a) => {
                  const isSelected = selectedAnionId === a.id;
                  return (
                    <button
                      key={a.id}
                      onClick={() => {
                        setSelectedAnionId(a.id);
                        areteAudio.play("click");
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? isDark
                            ? "bg-sky-500/20 border-sky-400 text-white shadow-sm ring-1 ring-sky-400"
                            : "bg-sky-100 border-sky-500 text-sky-950 shadow-sm ring-1 ring-sky-500"
                          : isDark
                          ? "bg-white/[0.03] border-white/5 text-slate-300 hover:border-white/20"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-sm text-sky-400">{a.symbol}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
                          -{a.valency}
                        </span>
                      </div>
                      <div className="text-[11px] truncate mt-1 text-slate-300">{a.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Criss-Cross Live Visualizer Box */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border ${
                isDark
                  ? "bg-gradient-to-br from-[#1a2333]/70 to-[#0e1626]/90 border-blue-500/30 shadow-[0_8px_32px_rgba(59,130,246,0.12)]"
                  : "bg-gradient-to-br from-blue-50/80 to-sky-50 border-blue-200 shadow-md"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" /> Dynamic Criss-Cross Derivation
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Valency Ratio: {crissCrossResult.ratio}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Step 1 & 2: Elements and Valencies */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border text-center space-y-4 ${
                    isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block">
                    Step 1: Write Symbols
                  </span>
                  <div className="flex justify-around items-center text-xl sm:text-2xl font-mono font-black">
                    <span className="text-amber-400">{selectedCation.formulaSymbol}</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-sky-400">{selectedAnion.formulaSymbol}</span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block pt-2 border-t border-white/10">
                    Step 2: Write Valencies Below
                  </span>
                  <div className="flex justify-around items-center text-xl sm:text-2xl font-mono font-black">
                    <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto border border-amber-500/30">
                      {crissCrossResult.cVal}
                    </span>
                    <span className="text-slate-500">⤩</span>
                    <span className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center mx-auto border border-sky-500/30">
                      {crissCrossResult.aVal}
                    </span>
                  </div>
                </div>

                {/* Step 3: The Criss-Cross Action */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border text-center space-y-3 ${
                    isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 block">
                    Step 3: Criss-Cross &amp; Simplify
                  </span>
                  <div className="text-sm font-mono space-y-1 text-slate-300">
                    <div>
                      {selectedCation.formulaSymbol} takes subscript:{" "}
                      <strong className="text-sky-400">{crissCrossResult.simplifiedCationSubscript}</strong>
                    </div>
                    <div>
                      {selectedAnion.formulaSymbol} takes subscript:{" "}
                      <strong className="text-amber-400">{crissCrossResult.simplifiedAnionSubscript}</strong>
                    </div>
                  </div>

                  {selectedAnion.isRadical && crissCrossResult.simplifiedAnionSubscript > 1 && (
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px] font-bold">
                      ⚠️ Polyatomic Radical Rule: Must wrap ({selectedAnion.formulaSymbol}) in brackets!
                    </div>
                  )}
                  {gcd(crissCrossResult.cVal, crissCrossResult.aVal) > 1 && (
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                      💡 Charges simplified by dividing by GCD ({gcd(crissCrossResult.cVal, crissCrossResult.aVal)})
                    </div>
                  )}
                </div>

                {/* Step 4: Final Formula Box */}
                <div
                  className={`p-5 rounded-2xl border text-center space-y-3 ${
                    isDark
                      ? "bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-400/40 shadow-md"
                      : "bg-gradient-to-br from-amber-100 to-orange-100 border-amber-300 shadow-md"
                  }`}
                >
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-300 block">
                    Official Chemical Formula
                  </span>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider py-1">
                    {crissCrossResult.formulaStr}
                  </div>
                  <div className="text-sm font-bold text-amber-200">{crissCrossResult.compoundName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 2: FIRST 20 ELEMENTS & VALENCY MATRIX
          ========================================================================= */}
      {activeTab === "valency_table" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  The First 20 Elements: Electronic Configuration &amp; Valency Rulebook
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                CBSE Class 10 Chemistry strictly requires mastery of the first 20 elements (H to Ca). Understand the
                golden formula:
                <span className="block mt-1 font-mono font-bold text-amber-400">
                  If valence e⁻ ≤ 4 ➔ Valency = valence e⁻ (Metals donate electrons)
                </span>
                <span className="block font-mono font-bold text-sky-400">
                  If valence e⁻ &gt; 4 ➔ Valency = 8 − valence e⁻ (Non-metals gain/share electrons)
                </span>
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead
                  className={`font-mono uppercase text-[11px] font-bold border-b border-white/10 ${
                    isDark ? "bg-white/[0.04] text-slate-300" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <tr>
                    <th className="p-3">Z</th>
                    <th className="p-3">Element</th>
                    <th className="p-3">Symbol</th>
                    <th className="p-3">K (2)</th>
                    <th className="p-3">L (8)</th>
                    <th className="p-3">M (8)</th>
                    <th className="p-3">N (2)</th>
                    <th className="p-3">Valence e⁻</th>
                    <th className="p-3 font-black text-amber-400">Valency</th>
                    <th className="p-3">Nature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {FIRST_20_ELEMENTS.map((el) => {
                    const isNoble = el.type === "noblegas";
                    const isMetal = el.type === "metal";
                    return (
                      <tr
                        key={el.z}
                        className={`transition-colors ${
                          isNoble
                            ? isDark
                              ? "bg-purple-950/20 hover:bg-purple-950/40"
                              : "bg-purple-50 hover:bg-purple-100"
                            : isMetal
                            ? isDark
                              ? "hover:bg-amber-950/20"
                              : "hover:bg-amber-50"
                            : isDark
                            ? "hover:bg-sky-950/20"
                            : "hover:bg-sky-50"
                        }`}
                      >
                        <td className="p-3 font-bold text-slate-400">{el.z}</td>
                        <td className="p-3 font-bold text-slate-200">{el.name}</td>
                        <td className="p-3 font-black text-amber-400">{el.symbol}</td>
                        <td className="p-3">{el.k}</td>
                        <td className="p-3">{el.l || "-"}</td>
                        <td className="p-3">{el.m || "-"}</td>
                        <td className="p-3">{el.n || "-"}</td>
                        <td className="p-3 font-bold text-sky-400">{el.valenceElectrons}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded font-black ${
                              isNoble
                                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                : el.valency <= 2
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            }`}
                          >
                            {el.valency}
                          </span>
                        </td>
                        <td className="p-3 font-sans text-xs">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              isNoble
                                ? "bg-purple-500/20 text-purple-300"
                                : el.type === "metal"
                                ? "bg-amber-500/20 text-amber-300"
                                : el.type === "metalloid"
                                ? "bg-teal-500/20 text-teal-300"
                                : "bg-sky-500/20 text-sky-300"
                            }`}
                          >
                            {el.type}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 3: HOW TO BALANCE CHEMICAL EQUATIONS (PRACTICAL STEP-BY-STEP)
          ========================================================================= */}
      {activeTab === "balancing" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  The Golden Rules for Balancing Chemical Equations
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Based on the <strong>Law of Conservation of Mass</strong>: Mass can neither be created nor destroyed.
                The number of atoms of each element on the Reactant side (LHS) must equal the Product side (RHS).
              </p>
            </div>

            {/* 3 Golden Rules Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Golden Rule #1
                </span>
                <h4 className="font-bold text-white text-sm">Never Touch Subscripts!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Changing subscripts inside a formula changes the chemical substance. Changing H₂O to H₂O₂ turns
                  life-saving water into deadly bleach!
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/30 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-sky-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Golden Rule #2
                </span>
                <h4 className="font-bold text-white text-sm">Only Adjust Coefficients</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Always place whole numbers as stoichiometric multipliers in front of chemical formulas (e.g. 2H₂O, 3Fe,
                  2NaCl).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Golden Rule #3
                </span>
                <h4 className="font-bold text-white text-sm">Order of Attack</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  1. Balance <strong>Metals</strong> first ➔ 2. Balance <strong>Non-metals</strong> (C, S, N, Cl) ➔ 3.
                  Balance <strong>Oxygen</strong> ➔ 4. Balance <strong>Hydrogen</strong> last!
                </p>
              </div>
            </div>

            {/* Interactive Step-by-Step Balancing Examples */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Select Benchmark Equation:
              </span>
              <div className="flex flex-wrap gap-2">
                {BALANCING_EXAMPLES.map((ex, idx) => (
                  <button
                    key={ex.id}
                    onClick={() => {
                      setActiveBalancingIdx(idx);
                      setRevealedBalancingStep(1);
                      areteAudio.play("click");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      activeBalancingIdx === idx
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                        : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{ex.unbalanced.split("──>")[0].trim()}</span>
                  </button>
                ))}
              </div>

              {/* Active Example Walkthrough Card */}
              {(() => {
                const currentEq = BALANCING_EXAMPLES[activeBalancingIdx];
                return (
                  <div
                    className={`p-6 sm:p-8 rounded-3xl border ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4 mb-6">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-slate-400 block">Unbalanced Equation:</span>
                        <div className="text-lg sm:text-xl font-mono font-bold text-rose-400">
                          {currentEq.unbalanced}
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-[11px] font-mono uppercase text-emerald-400 block font-bold">
                          Final Target Balanced:
                        </span>
                        <div className="text-lg sm:text-xl font-mono font-black text-emerald-300">
                          {currentEq.balanced}
                        </div>
                      </div>
                    </div>

                    {/* Step by Step Breakdown */}
                    <div className="space-y-3 mb-6">
                      {currentEq.steps.map((st) => {
                        const isRevealed = st.stepNo <= revealedBalancingStep;
                        return (
                          <div
                            key={st.stepNo}
                            className={`p-4 rounded-2xl border transition-all ${
                              isRevealed
                                ? isDark
                                  ? "bg-white/[0.04] border-white/15"
                                  : "bg-white border-slate-200 shadow-sm"
                                : "opacity-40 border-dashed border-white/5"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                                  {st.stepNo}
                                </span>
                                <div>
                                  <div className="text-sm font-bold text-slate-200">{st.description}</div>
                                  <div className="text-xs font-mono text-amber-400 mt-1">
                                    Equation State: {st.currentEquation}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Reveal Next Step Button */}
                    {revealedBalancingStep < currentEq.steps.length ? (
                      <button
                        onClick={() => {
                          setRevealedBalancingStep((prev) => prev + 1);
                          areteAudio.play("reveal");
                        }}
                        className="w-full py-3 rounded-2xl text-xs font-black bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                      >
                        <span>Reveal Step {revealedBalancingStep + 1} ➔</span>
                      </button>
                    ) : (
                      <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-center font-bold text-xs">
                        🎉 Equation Fully Balanced! Both sides have identical atom counts.
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 4: REACTIVITY SERIES LADDER & TEST-TUBE SIMULATOR
          ========================================================================= */}
      {activeTab === "reactivity" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  The Activity (Reactivity) Series &amp; Displacement Simulator
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Memorize the famous CBSE mnemonic:{" "}
                <strong className="text-amber-400">
                  &quot;Please Stop Calling Me A Careless Zebra Instead Try Learning How Copper Saves Gold&quot;
                </strong>
                . A metal can ONLY displace metals positioned BELOW it!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Reactivity Ladder Table */}
              <div className="lg:col-span-6 space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Reactivity Ladder (Top = Most Electropositive)
                </span>
                <div className="space-y-1.5">
                  {REACTIVITY_SERIES.map((el, idx) => (
                    <div
                      key={el.symbol}
                      className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                        idx < 3
                          ? isDark
                            ? "bg-rose-950/20 border-rose-500/30 text-rose-300"
                            : "bg-rose-50 border-rose-200 text-rose-900"
                          : idx < 8
                          ? isDark
                            ? "bg-amber-950/20 border-amber-500/30 text-amber-300"
                            : "bg-amber-50 border-amber-200 text-amber-900"
                          : isDark
                          ? "bg-sky-950/20 border-sky-500/30 text-sky-300"
                          : "bg-sky-50 border-sky-200 text-sky-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-black text-sm w-7">{el.symbol}</span>
                        <span className="font-bold text-slate-200">{el.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          {el.mnemonicWord}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                        {el.reactivityLevel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Displacement Simulator */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Virtual Test-Tube Displacement Simulator
                </span>

                <div
                  className={`p-6 rounded-3xl border space-y-5 ${
                    isDark
                      ? "bg-gradient-to-br from-[#181d29] to-[#121620] border-white/10"
                      : "bg-slate-50 border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-slate-300 block">
                      1. Pick Solid Metal to immerse:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Fe", "Zn", "Cu", "Mg", "Al", "Ag"].map((m) => (
                        <button
                          key={m}
                          onClick={() => {
                            setSimMetal(m);
                            areteAudio.play("click");
                          }}
                          className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer border ${
                            simMetal === m
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                              : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-slate-300 block">
                      2. Pick Aqueous Salt Solution in Test-Tube:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "CuSO4", label: "CuSO₄ (Blue)" },
                        { id: "FeSO4", label: "FeSO₄ (Pale Green)" },
                        { id: "ZnSO4", label: "ZnSO₄ (Colorless)" },
                        { id: "AgNO3", label: "AgNO₃ (Colorless)" },
                        { id: "MgSO4", label: "MgSO₄ (Colorless)" }
                      ].map((sol) => (
                        <button
                          key={sol.id}
                          onClick={() => {
                            setSimSolution(sol.id);
                            areteAudio.play("click");
                          }}
                          className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                            simSolution === sol.id
                              ? "bg-sky-500 text-slate-950 border-sky-400 shadow-sm"
                              : "bg-white/5 border-white/10 text-slate-300 hover:text-white"
                          }`}
                        >
                          {sol.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Simulator Result Display */}
                  <div
                    className={`p-5 rounded-2xl border space-y-3 ${
                      reactivitySimulationResult.canDisplace
                        ? isDark
                          ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-300"
                          : "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : isDark
                        ? "bg-rose-950/20 border-rose-500/40 text-rose-300"
                        : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">{reactivitySimulationResult.title}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/30">
                        {simMetal} + {simSolution}
                      </span>
                    </div>
                    {reactivitySimulationResult.equation && (
                      <div className="font-mono text-xs font-bold py-1 bg-black/40 px-3 rounded-lg">
                        {reactivitySimulationResult.equation}
                      </div>
                    )}
                    <p className="text-xs leading-relaxed text-slate-300">
                      {reactivitySimulationResult.explanation}
                    </p>
                    {reactivitySimulationResult.observation && (
                      <div className="text-xs font-semibold pt-1 border-t border-white/10">
                        👀 <strong>Visual Observation:</strong> {reactivitySimulationResult.observation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 5: BOARD LAB COLOR CHANGES & OBSERVATIONS
          ========================================================================= */}
      {activeTab === "observations" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <TestTube2 className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Class 10 Board Practical Colors &amp; Lab Observation Vault
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Every single CBSE Board examination asks 2–4 marks directly from practical observations: precipitates,
                gas fumes, and crystal color transitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LAB_OBSERVATIONS.map((obs) => (
                <div
                  key={obs.id}
                  className={`p-5 sm:p-6 rounded-2xl border space-y-3.5 transition-all ${
                    isDark
                      ? "bg-white/[0.02] border-white/10 hover:border-amber-500/30"
                      : "bg-slate-50 border-slate-200 hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-sm text-white">{obs.title}</h3>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-amber-300 leading-relaxed">
                    {obs.reactionEquation}
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-amber-400 shrink-0">🎨 Color Shift:</span>
                      <span className="text-slate-300">{obs.colorTransition}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-sky-400 shrink-0">💨 Gas / Ppt:</span>
                      <span className="text-slate-300">{obs.gasOrPpt}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-purple-400 shrink-0">📋 CBSE Trap:</span>
                      <span className="text-slate-300">{obs.examSignificance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 6: 5-QUESTION FOUNDATION DIAGNOSTIC CHECK
          ========================================================================= */}
      {activeTab === "quiz" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  5-Question Chemistry Foundation Diagnostic Check
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Test your mastery of valencies, formula writing, reactivity series, and practical colors before diving
                into Chapter 1!
              </p>
            </div>

            <div className="space-y-6">
              {FOUNDATION_QUIZ.map((q, idx) => {
                const userSelected = quizAnswers[q.id];
                const isAnswered = userSelected !== undefined;
                const isCorrect = userSelected === q.correctIdx;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border space-y-3.5 ${
                      isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-slate-200 leading-snug">{q.question}</h4>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userSelected === optIdx;
                        let optStyle = isDark
                          ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIdx) {
                            optStyle = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold";
                          } else if (isThisSelected) {
                            optStyle = "bg-rose-500/20 border-rose-500/50 text-rose-300 font-bold";
                          }
                        } else if (isThisSelected) {
                          optStyle = "bg-amber-500/20 border-amber-500 text-amber-300 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIdx && (
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {quizSubmitted && isThisSelected && !isCorrect && (
                              <X className="w-4 h-4 text-rose-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="pl-9 pt-2">
                        <div
                          className={`p-3 rounded-xl text-xs leading-relaxed border ${
                            isCorrect
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                              : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                          }`}
                        >
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              {!quizSubmitted ? (
                <button
                  onClick={handleGradeQuiz}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-black bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Foundation Diagnostic</span>
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-black bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retry Diagnostic Check</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
