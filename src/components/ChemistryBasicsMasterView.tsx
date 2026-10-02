"use client";

import React, { useState, useMemo } from "react";
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
  BookOpen,
  Layers,
  ChevronDown,
  ChevronUp,
  Shield,
  Lightbulb,
  Search,
  Check,
  X,
  Target,
  Award,
  TestTube2,
  Droplet,
  Compass,
  ListChecks,
  ExternalLink
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { areteAudio } from "@/lib/audio";

interface ChemistryBasicsMasterViewProps {
  isDark: boolean;
  onNavigateToChapter?: (chapterNo: number) => void;
}

// ---------------------------------------------------------------------------
// 1. CATIONS & ANIONS DATA WITH VALENCIES (COMPLETE MONOATOMIC & POLYATOMIC)
// ---------------------------------------------------------------------------
interface IonData {
  id: string;
  symbol: string;
  name: string;
  charge: number;
  valency: number;
  type: "monoatomic" | "polyatomic";
  formulaSymbol: string;
  isRadical?: boolean;
}

const CATIONS: IonData[] = [
  { id: "h", symbol: "H⁺", name: "Hydrogen", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "H" },
  { id: "na", symbol: "Na⁺", name: "Sodium", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Na" },
  { id: "k", symbol: "K⁺", name: "Potassium", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "K" },
  { id: "li", symbol: "Li⁺", name: "Lithium", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Li" },
  { id: "nh4", symbol: "NH₄⁺", name: "Ammonium", charge: 1, valency: 1, type: "polyatomic", formulaSymbol: "NH4", isRadical: true },
  { id: "ag", symbol: "Ag⁺", name: "Silver", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Ag" },
  { id: "cu1", symbol: "Cu⁺", name: "Copper(I) / Cuprous", charge: 1, valency: 1, type: "monoatomic", formulaSymbol: "Cu" },
  { id: "ca", symbol: "Ca²⁺", name: "Calcium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Ca" },
  { id: "mg", symbol: "Mg²⁺", name: "Magnesium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Mg" },
  { id: "zn", symbol: "Zn²⁺", name: "Zinc", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Zn" },
  { id: "fe2", symbol: "Fe²⁺", name: "Iron(II) / Ferrous", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Fe" },
  { id: "cu2", symbol: "Cu²⁺", name: "Copper(II) / Cupric", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Cu" },
  { id: "ba", symbol: "Ba²⁺", name: "Barium", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Ba" },
  { id: "pb", symbol: "Pb²⁺", name: "Lead(II) / Plumbous", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Pb" },
  { id: "sn2", symbol: "Sn²⁺", name: "Tin(II) / Stannous", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Sn" },
  { id: "ni", symbol: "Ni²⁺", name: "Nickel(II)", charge: 2, valency: 2, type: "monoatomic", formulaSymbol: "Ni" },
  { id: "al", symbol: "Al³⁺", name: "Aluminium", charge: 3, valency: 3, type: "monoatomic", formulaSymbol: "Al" },
  { id: "fe3", symbol: "Fe³⁺", name: "Iron(III) / Ferric", charge: 3, valency: 3, type: "monoatomic", formulaSymbol: "Fe" },
  { id: "cr3", symbol: "Cr³⁺", name: "Chromium(III)", charge: 3, valency: 3, type: "monoatomic", formulaSymbol: "Cr" },
  { id: "sn4", symbol: "Sn⁴⁺", name: "Tin(IV) / Stannic", charge: 4, valency: 4, type: "monoatomic", formulaSymbol: "Sn" },
  { id: "pb4", symbol: "Pb⁴⁺", name: "Lead(IV) / Plumbic", charge: 4, valency: 4, type: "monoatomic", formulaSymbol: "Pb" }
];

const ANIONS: IonData[] = [
  { id: "cl", symbol: "Cl⁻", name: "Chloride", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "Cl" },
  { id: "br", symbol: "Br⁻", name: "Bromide", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "Br" },
  { id: "i", symbol: "I⁻", name: "Iodide", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "I" },
  { id: "f", symbol: "F⁻", name: "Fluoride", charge: -1, valency: 1, type: "monoatomic", formulaSymbol: "F" },
  { id: "oh", symbol: "OH⁻", name: "Hydroxide", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "OH", isRadical: true },
  { id: "no3", symbol: "NO₃⁻", name: "Nitrate", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "NO3", isRadical: true },
  { id: "no2", symbol: "NO₂⁻", name: "Nitrite", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "NO2", isRadical: true },
  { id: "hco3", symbol: "HCO₃⁻", name: "Hydrogen Carbonate (Bicarbonate)", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "HCO3", isRadical: true },
  { id: "hso4", symbol: "HSO₄⁻", name: "Hydrogen Sulfate (Bisulfate)", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "HSO4", isRadical: true },
  { id: "ch3coo", symbol: "CH₃COO⁻", name: "Acetate / Ethanoate", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "CH3COO", isRadical: true },
  { id: "mno4", symbol: "MnO₄⁻", name: "Permanganate", charge: -1, valency: 1, type: "polyatomic", formulaSymbol: "MnO4", isRadical: true },
  { id: "o", symbol: "O²⁻", name: "Oxide", charge: -2, valency: 2, type: "monoatomic", formulaSymbol: "O" },
  { id: "s", symbol: "S²⁻", name: "Sulfide", charge: -2, valency: 2, type: "monoatomic", formulaSymbol: "S" },
  { id: "so4", symbol: "SO₄²⁻", name: "Sulfate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "SO4", isRadical: true },
  { id: "so3", symbol: "SO₃²⁻", name: "Sulfite", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "SO3", isRadical: true },
  { id: "co3", symbol: "CO₃²⁻", name: "Carbonate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "CO3", isRadical: true },
  { id: "cr2o7", symbol: "Cr₂O₇²⁻", name: "Dichromate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "Cr2O7", isRadical: true },
  { id: "cro4", symbol: "CrO₄²⁻", name: "Chromate", charge: -2, valency: 2, type: "polyatomic", formulaSymbol: "CrO4", isRadical: true },
  { id: "n", symbol: "N³⁻", name: "Nitride", charge: -3, valency: 3, type: "monoatomic", formulaSymbol: "N" },
  { id: "p", symbol: "P³⁻", name: "Phosphide", charge: -3, valency: 3, type: "monoatomic", formulaSymbol: "P" },
  { id: "po4", symbol: "PO₄³⁻", name: "Phosphate", charge: -3, valency: 3, type: "polyatomic", formulaSymbol: "PO4", isRadical: true }
];

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// ---------------------------------------------------------------------------
// 2. COMPLETE ELEMENTS 1 TO 30 & BOHR-BURY ELECTRONIC CONFIGURATION
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
  valency: string;
  type: "metal" | "nonmetal" | "metalloid" | "noblegas" | "transition";
  mnemonicHint: string;
}

const ELEMENTS_1_TO_30: ElementConfig[] = [
  { z: 1, name: "Hydrogen", symbol: "H", k: 1, l: 0, m: 0, n: 0, valenceElectrons: 1, valency: "1", type: "nonmetal", mnemonicHint: "1 electron; can donate (H⁺) or share covalent bond" },
  { z: 2, name: "Helium", symbol: "He", k: 2, l: 0, m: 0, n: 0, valenceElectrons: 2, valency: "0", type: "noblegas", mnemonicHint: "Duplet complete (noble, chemically inert)" },
  { z: 3, name: "Lithium", symbol: "Li", k: 2, l: 1, m: 0, n: 0, valenceElectrons: 1, valency: "1", type: "metal", mnemonicHint: "Alkali metal; loses 1 electron (Li⁺)" },
  { z: 4, name: "Beryllium", symbol: "Be", k: 2, l: 2, m: 0, n: 0, valenceElectrons: 2, valency: "2", type: "metal", mnemonicHint: "Alkaline earth metal; loses 2 electrons (Be²⁺)" },
  { z: 5, name: "Boron", symbol: "B", k: 2, l: 3, m: 0, n: 0, valenceElectrons: 3, valency: "3", type: "metalloid", mnemonicHint: "Metalloid; shares 3 valence electrons" },
  { z: 6, name: "Carbon", symbol: "C", k: 2, l: 4, m: 0, n: 0, valenceElectrons: 4, valency: "4", type: "nonmetal", mnemonicHint: "Tetravalent! Shares 4 electrons; forms millions of covalent chains" },
  { z: 7, name: "Nitrogen", symbol: "N", k: 2, l: 5, m: 0, n: 0, valenceElectrons: 5, valency: "3", type: "nonmetal", mnemonicHint: "Valency = 8 - 5 = 3; forms triple bond (N≡N)" },
  { z: 8, name: "Oxygen", symbol: "O", k: 2, l: 6, m: 0, n: 0, valenceElectrons: 6, valency: "2", type: "nonmetal", mnemonicHint: "Valency = 8 - 6 = 2; gains 2 e⁻ to form oxide (O²⁻)" },
  { z: 9, name: "Fluorine", symbol: "F", k: 2, l: 7, m: 0, n: 0, valenceElectrons: 7, valency: "1", type: "nonmetal", mnemonicHint: "Most electronegative element; gains 1 e⁻ (F⁻)" },
  { z: 10, name: "Neon", symbol: "Ne", k: 2, l: 8, m: 0, n: 0, valenceElectrons: 8, valency: "0", type: "noblegas", mnemonicHint: "Octet complete (stable 0 valency)" },
  { z: 11, name: "Sodium", symbol: "Na", k: 2, l: 8, m: 1, n: 0, valenceElectrons: 1, valency: "1", type: "metal", mnemonicHint: "Alkali metal; vigorously loses 1 e⁻ (Na⁺)" },
  { z: 12, name: "Magnesium", symbol: "Mg", k: 2, l: 8, m: 2, n: 0, valenceElectrons: 2, valency: "2", type: "metal", mnemonicHint: "Burns with dazzling white flame; forms Mg²⁺" },
  { z: 13, name: "Aluminium", symbol: "Al", k: 2, l: 8, m: 3, n: 0, valenceElectrons: 3, valency: "3", type: "metal", mnemonicHint: "Amphoteric oxide former; loses 3 e⁻ (Al³⁺)" },
  { z: 14, name: "Silicon", symbol: "Si", k: 2, l: 8, m: 4, n: 0, valenceElectrons: 4, valency: "4", type: "metalloid", mnemonicHint: "Semiconductor; shares 4 electrons like carbon" },
  { z: 15, name: "Phosphorus", symbol: "P", k: 2, l: 8, m: 5, n: 0, valenceElectrons: 5, valency: "3, 5", type: "nonmetal", mnemonicHint: "Non-metal; forms PCl₃ and PCl₅; phosphate PO₄³⁻" },
  { z: 16, name: "Sulfur", symbol: "S", k: 2, l: 8, m: 6, n: 0, valenceElectrons: 6, valency: "2, 4, 6", type: "nonmetal", mnemonicHint: "Crown molecule S₈; sulfide S²⁻, sulfate SO₄²⁻" },
  { z: 17, name: "Chlorine", symbol: "Cl", k: 2, l: 8, m: 7, n: 0, valenceElectrons: 7, valency: "1", type: "nonmetal", mnemonicHint: "Halogen; gains 1 e⁻ to form chloride (Cl⁻)" },
  { z: 18, name: "Argon", symbol: "Ar", k: 2, l: 8, m: 8, n: 0, valenceElectrons: 8, valency: "0", type: "noblegas", mnemonicHint: "Octet complete; used inside filament bulbs" },
  { z: 19, name: "Potassium", symbol: "K", k: 2, l: 8, m: 8, n: 1, valenceElectrons: 1, valency: "1", type: "metal", mnemonicHint: "Top of reactivity series; explosive with water (K⁺)" },
  { z: 20, name: "Calcium", symbol: "Ca", k: 2, l: 8, m: 8, n: 2, valenceElectrons: 2, valency: "2", type: "metal", mnemonicHint: "Alkaline earth; limestone CaCO₃, quicklime CaO (Ca²⁺)" },
  { z: 21, name: "Scandium", symbol: "Sc", k: 2, l: 8, m: 9, n: 2, valenceElectrons: 2, valency: "3", type: "transition", mnemonicHint: "Transition metal; loses 4s² and 3d¹ electrons" },
  { z: 22, name: "Titanium", symbol: "Ti", k: 2, l: 8, m: 10, n: 2, valenceElectrons: 2, valency: "4", type: "transition", mnemonicHint: "High strength-to-density ratio; forms TiO₂" },
  { z: 23, name: "Vanadium", symbol: "V", k: 2, l: 8, m: 11, n: 2, valenceElectrons: 2, valency: "5", type: "transition", mnemonicHint: "Industrial catalyst (V₂O₅ in Contact Process)" },
  { z: 24, name: "Chromium", symbol: "Cr", k: 2, l: 8, m: 13, n: 1, valenceElectrons: 1, valency: "2, 3, 6", type: "transition", mnemonicHint: "Exceptional half-filled 3d⁵ 4s¹; dichromate Cr₂O₇²⁻" },
  { z: 25, name: "Manganese", symbol: "Mn", k: 2, l: 8, m: 13, n: 2, valenceElectrons: 2, valency: "2, 4, 7", type: "transition", mnemonicHint: "Variable valencies; KMnO₄, MnO₂ catalyst" },
  { z: 26, name: "Iron", symbol: "Fe", k: 2, l: 8, m: 14, n: 2, valenceElectrons: 2, valency: "2 (Ferrous), 3 (Ferric)", type: "transition", mnemonicHint: "Crucial transition metal; Fe²⁺ (pale green), Fe³⁺ (brown)" },
  { z: 27, name: "Cobalt", symbol: "Co", k: 2, l: 8, m: 15, n: 2, valenceElectrons: 2, valency: "2, 3", type: "transition", mnemonicHint: "Magnetic transition metal; CoCl₂ moisture indicator" },
  { z: 28, name: "Nickel", symbol: "Ni", k: 2, l: 8, m: 16, n: 2, valenceElectrons: 2, valency: "2", type: "transition", mnemonicHint: "Catalyst for hydrogenation of vegetable oils into vanaspati" },
  { z: 29, name: "Copper", symbol: "Cu", k: 2, l: 8, m: 18, n: 1, valenceElectrons: 1, valency: "1 (Cuprous), 2 (Cupric)", type: "transition", mnemonicHint: "Exceptional 3d¹⁰ 4s¹; Cu²⁺ solutions are brilliant deep blue" },
  { z: 30, name: "Zinc", symbol: "Zn", k: 2, l: 8, m: 18, n: 2, valenceElectrons: 2, valency: "2", type: "transition", mnemonicHint: "Amphoteric metal; reacts with acid & base (Na₂ZnO₂)" }
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
  { symbol: "K", name: "Potassium", mnemonicWord: "Please", reactivityLevel: "Extremely Reactive", waterReaction: "Explosive with cold water (ignites H₂ gas)", acidReaction: "Violent / Dangerous explosion", reductionMethod: "Electrolytic reduction of molten chloride" },
  { symbol: "Na", name: "Sodium", mnemonicWord: "Stop", reactivityLevel: "Extremely Reactive", waterReaction: "Vigorous with cold water (melts into silvery ball, catches fire)", acidReaction: "Violent bubbling", reductionMethod: "Electrolytic reduction of molten chloride" },
  { symbol: "Ca", name: "Calcium", mnemonicWord: "Calling", reactivityLevel: "Extremely Reactive", waterReaction: "Less violent; H₂ bubbles adhere to surface causing metal to float", acidReaction: "Very rapid", reductionMethod: "Electrolytic reduction" },
  { symbol: "Mg", name: "Magnesium", mnemonicWord: "Me", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts with HOT water / steam; floats on H₂ bubbles", acidReaction: "Rapid evolution of H₂ bubbles", reductionMethod: "Reduction using carbon or electrolysis" },
  { symbol: "Al", name: "Aluminium", mnemonicWord: "A", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts only with STEAM (Al₂O₃ protective oxide layer)", acidReaction: "Rapid after oxide layer dissolves", reductionMethod: "Electrolytic reduction (Hall-Héroult)" },
  { symbol: "Zn", name: "Zinc", mnemonicWord: "Careless", reactivityLevel: "Moderately Reactive", waterReaction: "Reacts only with STEAM at red heat", acidReaction: "Steady streams of H₂ gas bubbles", reductionMethod: "Reduction with Carbon (Coke)" },
  { symbol: "Fe", name: "Iron", mnemonicWord: "Zebra", reactivityLevel: "Moderately Reactive", waterReaction: "Slow reaction with STEAM (forms magnetic Fe₃O₄)", acidReaction: "Moderate bubbles of H₂ gas", reductionMethod: "Blast furnace reduction with Carbon / CO" },
  { symbol: "Pb", name: "Lead", mnemonicWord: "Instead", reactivityLevel: "Moderately Reactive", waterReaction: "No visible reaction with cold water", acidReaction: "Slow (forms insoluble protective salt coating)", reductionMethod: "Reduction with Carbon" },
  { symbol: "[H]", name: "Hydrogen", mnemonicWord: "Try", reactivityLevel: "Least Reactive", waterReaction: "Reference baseline (Non-metal standard)", acidReaction: "Reference: Metals above displace H₂ from dilute non-oxidizing acids", reductionMethod: "Baseline" },
  { symbol: "Cu", name: "Copper", mnemonicWord: "Learning", reactivityLevel: "Least Reactive", waterReaction: "No reaction with cold water or steam", acidReaction: "DOES NOT displace H₂ from dilute HCl or H₂SO₄", reductionMethod: "Roasting followed by self-reduction or electrolysis" },
  { symbol: "Hg", name: "Mercury", mnemonicWord: "How", reactivityLevel: "Least Reactive", waterReaction: "No reaction", acidReaction: "No reaction with dilute non-oxidizing acids", reductionMethod: "Direct heating of cinnabar (HgS) in air" },
  { symbol: "Ag", name: "Silver", mnemonicWord: "Copper", reactivityLevel: "Least Reactive", waterReaction: "No reaction", acidReaction: "No reaction with dilute non-oxidizing acids", reductionMethod: "Native state or chemical displacement" },
  { symbol: "Au", name: "Gold", mnemonicWord: "Saves", reactivityLevel: "Least Reactive", waterReaction: "Completely inert", acidReaction: "Dissolves only in Aqua Regia (3:1 Conc. HCl : Conc. HNO₃)", reductionMethod: "Pure native state" },
  { symbol: "Pt", name: "Platinum", mnemonicWord: "Gold", reactivityLevel: "Least Reactive", waterReaction: "Completely inert", acidReaction: "Dissolves only in Aqua Regia", reductionMethod: "Pure native state" }
];

// ---------------------------------------------------------------------------
// 4. BOARD PRACTICAL COLOR CHANGES & LAB OBSERVATIONS
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
    colorTransition: "Pale green crystals ➔ Dirty white (anhydrous FeSO₄) ➔ Reddish-brown solid residue",
    gasOrPpt: "Pungent suffocating smell of burning sulphur (SO₂ + SO₃). Both gases turn moist blue litmus red!",
    examSignificance: "Tests two-stage transformation: water of crystallization loss first, followed by thermal breakdown.",
    practicalTest: "Holding boiling tube with test tube holder inclined away from eyes; SO₂ turns acidified K₂Cr₂O₇ from orange to green."
  },
  {
    id: "lab_pbno3",
    title: "2. Thermal Decomposition of Lead Nitrate",
    reactionEquation: "2Pb(NO₃)₂ (s, white powder) ──Δ──> 2PbO (s, yellow) + 4NO₂ (g, brown fumes) + O₂ (g)",
    reactantsState: "White crystalline dry powder of Lead Nitrate",
    productsState: "Lead monoxide (yellow residue when cold) + Nitrogen dioxide + Oxygen",
    colorTransition: "White powder ➔ Reddish-brown when hot, yellow solid residue when cold (PbO)",
    gasOrPpt: "Dense reddish-brown fumes of Nitrogen dioxide (NO₂) + Colorless Oxygen gas.",
    examSignificance: "Golden question: 'Name the brown gas evolved.' Answer: NO₂ (Nitrogen Dioxide).",
    practicalTest: "Glowing wooden splint inserted into boiling tube rekindles due to Oxygen emission."
  },
  {
    id: "lab_cao",
    title: "3. Slaking of Lime (Quicklime with Water)",
    reactionEquation: "CaO (s, white quicklime) + H₂O (l) ──> Ca(OH)₂ (aq, slaked lime) + Enormous Heat",
    reactantsState: "Hard white lumps of Calcium Oxide (Quicklime)",
    productsState: "Milky suspension/solution of Calcium Hydroxide (Slaked Lime)",
    colorTransition: "White solid lumps ➔ Slaked lime solution with vigorous hissing sound",
    gasOrPpt: "Prototypical Exothermic Combination reaction! Beaker becomes scalding hot.",
    examSignificance: "The supernatant clear liquid (limewater) is used for confirming Carbon Dioxide gas.",
    practicalTest: "Temperature measured with a laboratory thermometer shows sharp rise (+40°C)."
  },
  {
    id: "lab_limewater",
    title: "4. Limewater Test for Carbon Dioxide",
    reactionEquation: "Ca(OH)₂ (aq) + CO₂ (g) ──> CaCO₃ (s, white ppt / milky) + H₂O (l)\nCaCO₃ (s) + H₂O (l) + CO₂ (excess) ──> Ca(HCO₃)₂ (aq, colorless soluble)",
    reactantsState: "Clear transparent freshly prepared limewater",
    productsState: "Insoluble milky white CaCO₃ precipitate; turns colorless upon excess CO₂",
    colorTransition: "Clear transparent ➔ Milky White turbidity ➔ Clear transparent solution again!",
    gasOrPpt: "White precipitate of CaCO₃ dissolves because soluble Calcium Bicarbonate Ca(HCO₃)₂ is synthesized.",
    examSignificance: "Fundamental test for identifying CO₂ gas from carbonate decompositions, acid-carbonate reactions, and cellular respiration.",
    practicalTest: "Pass gas through delivery tube; stop bubbling before excess to observe vivid milkiness."
  },
  {
    id: "lab_pbi2",
    title: "5. Precipitation Reaction (Lead Nitrate + Potassium Iodide)",
    reactionEquation: "Pb(NO₃)₂ (aq, clear) + 2KI (aq, clear) ──> PbI₂ (s, bright canary yellow ppt) + 2KNO₃ (aq)",
    reactantsState: "Two completely clear, transparent, colorless aqueous solutions",
    productsState: "Dazzling canary yellow precipitate settling down + clear colorless KNO₃",
    colorTransition: "Colorless + Colorless ➔ Brilliant Canary Yellow Precipitate!",
    gasOrPpt: "Insoluble solid Lead Iodide (PbI₂) precipitate (Double displacement exchange of ions).",
    examSignificance: "Core NCERT Demonstration. Tests precipitate identification without heating.",
    practicalTest: "Instant precipitation occurs upon contact at room temperature."
  },
  {
    id: "lab_fe_cuso4",
    title: "6. Iron Nail in Copper Sulphate Solution",
    reactionEquation: "Fe (s, silver-grey) + CuSO₄ (aq, deep blue) ──> FeSO₄ (aq, pale green) + Cu (s, reddish-brown deposit)",
    reactantsState: "Sandpaper-cleaned grey iron nails + Deep blue copper sulfate solution",
    productsState: "Light pale green ferrous sulfate solution + Reddish brown copper coating",
    colorTransition: "Deep Blue solution ➔ Pale Green solution; Silver-grey nail ➔ Reddish brown coating",
    gasOrPpt: "Single displacement reaction: Fe is higher than Cu in the reactivity series.",
    examSignificance: "Key question: 'Why does blue color fade?' Because Cu²⁺ ions are displaced by Fe²⁺ ions in solution.",
    practicalTest: "Nails must be rubbed with emery paper first to strip off any oxide film."
  }
];

// ---------------------------------------------------------------------------
// 5. STEP-BY-STEP BALANCING EQUATIONS
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
    explanation: "Classic demonstration of balancing using the atom-counting method.",
    steps: [
      { stepNo: 1, description: "Box all formulas. Never alter anything inside chemical formulas (e.g. never alter Fe₃O₄).", currentEquation: "Fe + H₂O ──> Fe₃O₄ + H₂" },
      { stepNo: 2, description: "Balance Oxygen: RHS has 4 Oxygen atoms; LHS has only 1 in H₂O. Place coefficient 4 before H₂O.", currentEquation: "Fe + 4H₂O ──> Fe₃O₄ + H₂" },
      { stepNo: 3, description: "Balance Hydrogen: LHS now has 4 × 2 = 8 Hydrogen atoms. Place coefficient 4 before H₂ on RHS.", currentEquation: "Fe + 4H₂O ──> Fe₃O₄ + 4H₂" },
      { stepNo: 4, description: "Balance Iron: RHS has 3 Iron atoms. Place coefficient 3 before Fe on LHS. Verify all atom totals!", currentEquation: "3Fe + 4H₂O ──> Fe₃O₄ + 4H₂" }
    ]
  },
  {
    id: "eq_c3h8_o2",
    unbalanced: "C₃H₈ + O₂ ──> CO₂ + H₂O",
    balanced: "C₃H₈ + 5O₂ ──> 3CO₂ + 4H₂O",
    explanation: "Combustion of Propane (Hydrocarbon combustion pattern).",
    steps: [
      { stepNo: 1, description: "Balance Carbon first: 3 Carbon on LHS, so place 3 before CO₂ on RHS.", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + H₂O" },
      { stepNo: 2, description: "Balance Hydrogen next: 8 Hydrogen on LHS, so place 4 before H₂O on RHS (4 × 2 = 8).", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + 4H₂O" },
      { stepNo: 3, description: "Count total Oxygen on RHS: (3 × 2) + (4 × 1) = 6 + 4 = 10 Oxygen atoms.", currentEquation: "C₃H₈ + O₂ ──> 3CO₂ + 4H₂O (10 O needed on LHS)" },
      { stepNo: 4, description: "Place coefficient 5 before O₂ on LHS (5 × 2 = 10). Equation is perfectly balanced!", currentEquation: "C₃H₈ + 5O₂ ──> 3CO₂ + 4H₂O" }
    ]
  },
  {
    id: "eq_hno3_caoh2",
    unbalanced: "HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O",
    balanced: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O",
    explanation: "Acid-base neutralization of Nitric Acid with Calcium Hydroxide.",
    steps: [
      { stepNo: 1, description: "Notice Nitrate (NO₃) radical: RHS has 2 NO₃ radicals inside Ca(NO₃)₂. Place 2 before HNO₃ on LHS.", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O" },
      { stepNo: 2, description: "Calcium is already balanced (1 on LHS, 1 on RHS).", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + H₂O" },
      { stepNo: 3, description: "Count Hydrogen: 2 from 2HNO₃ + 2 from Ca(OH)₂ = 4 Hydrogen on LHS. Place 2 before H₂O on RHS (2 × 2 = 4).", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O" },
      { stepNo: 4, description: "Verify Oxygen: (2 × 3) + 2 = 8 on LHS; (2 × 3) + 2 = 8 on RHS. Balanced!", currentEquation: "2HNO₃ + Ca(OH)₂ ──> Ca(NO₃)₂ + 2H₂O" }
    ]
  }
];

// ---------------------------------------------------------------------------
// 6. CHEMICAL BONDING: IONIC VS COVALENT MECHANICS
// ---------------------------------------------------------------------------
interface BondingConcept {
  id: string;
  title: string;
  type: "ionic" | "covalent" | "carbon";
  summary: string;
  keyPoints: string[];
  examples: string[];
  properties: { label: string; value: string }[];
}

const BONDING_CONCEPTS: BondingConcept[] = [
  {
    id: "ionic_bonding",
    title: "Ionic (Electrovalent) Bonding: Complete Electron Transfer",
    type: "ionic",
    summary: "Formed by complete transfer of one or more valence electrons from an electropositive metal atom to an electronegative non-metal atom, resulting in electrostatic attraction between oppositely charged ions.",
    keyPoints: [
      "Metals have 1, 2, or 3 valence electrons and lose them to attain stable noble gas octets (Cations).",
      "Non-metals have 5, 6, or 7 valence electrons and gain electrons to complete octets (Anions).",
      "The electrostatic attraction between positive cations and negative anions forms a rigid 3D crystal lattice."
    ],
    examples: [
      "NaCl: Na (2,8,1) ➔ Na⁺ (2,8) + e⁻  |  Cl (2,8,7) + e⁻ ➔ Cl⁻ (2,8,8)  ⟹  NaCl",
      "MgCl₂: Mg (2,8,2) ➔ Mg²⁺ + 2e⁻  |  2Cl + 2e⁻ ➔ 2Cl⁻  ⟹  MgCl₂",
      "CaO: Ca (2,8,8,2) ➔ Ca²⁺ + 2e⁻  |  O (2,6) + 2e⁻ ➔ O²⁻  ⟹  CaO"
    ],
    properties: [
      { label: "Physical Nature", value: "Hard, rigid, brittle crystalline solids due to strong electrostatic attraction." },
      { label: "Melting & Boiling Points", value: "Very high (e.g. NaCl MP: 801°C); immense thermal energy needed to break crystal lattice." },
      { label: "Solubility", value: "Generally soluble in polar solvents (water); insoluble in non-polar solvents (kerosene, petrol)." },
      { label: "Electrical Conductivity", value: "Do NOT conduct electricity in solid state (ions locked in lattice). Conduct vigorously in molten or aqueous states due to free mobile ions." }
    ]
  },
  {
    id: "covalent_bonding",
    title: "Covalent Bonding: Mutual Sharing of Electron Pairs",
    type: "covalent",
    summary: "Formed when two non-metal atoms achieve stable noble gas electron configurations by mutually sharing one, two, or three pairs of valence electrons.",
    keyPoints: [
      "Single Covalent Bond (—): Sharing of 1 electron pair (2 electrons total, e.g. H—H, Cl—Cl, H—Cl).",
      "Double Covalent Bond (=): Sharing of 2 electron pairs (4 electrons total, e.g. O=O, O=C=O).",
      "Triple Covalent Bond (≡): Sharing of 3 electron pairs (6 electrons total, e.g. N≡N, H—C≡C—H)."
    ],
    examples: [
      "Hydrogen Molecule (H₂): Each H shares 1 electron to complete stable Helium duplet.",
      "Water (H₂O): Oxygen (2,6) shares 1 electron with each of two Hydrogen atoms.",
      "Methane (CH₄): Central Carbon atom shares its 4 valence electrons with 4 Hydrogen atoms."
    ],
    properties: [
      { label: "Physical Nature", value: "Gases, liquids, or soft solids due to weak intermolecular van der Waals forces." },
      { label: "Melting & Boiling Points", value: "Low compared to ionic compounds; intermolecular forces are easily overcome at moderate temperatures." },
      { label: "Solubility", value: "Generally insoluble in water; soluble in organic non-polar solvents (benzene, acetone, alcohol)." },
      { label: "Electrical Conductivity", value: "Poor conductors of electricity in all states because no charged ions or free mobile electrons are produced." }
    ]
  },
  {
    id: "carbon_tetravalency",
    title: "Carbon's Unique Chemistry: Tetravalency & Catenation",
    type: "carbon",
    summary: "Carbon has atomic number 6 with electronic configuration (2, 4). It has 4 valence electrons. Why does it strictly form covalent bonds?",
    keyPoints: [
      "Why not gain 4 electrons (C⁴⁻)? Nuclear charge of +6 cannot stably hold 10 electrons; extreme electron-electron repulsion makes C⁴⁻ formation energetically impossible.",
      "Why not lose 4 electrons (C⁴⁺)? Removing 4 electrons requires enormous successive ionization enthalpies that are unavailable in normal chemical processes.",
      "Solution: Carbon exclusively shares its 4 valence electrons with other atoms, forming stable covalent bonds.",
      "Catenation: Unique ability to form covalent bonds with other carbon atoms, creating long straight chains, branched frameworks, and closed rings."
    ],
    examples: [
      "Catenation: C—C bond energy is exceptionally high (348 kJ/mol), making carbon backbone chains virtually indestructible.",
      "Tetravalency: Carbon forms bonds with Oxygen, Nitrogen, Hydrogen, Sulfur, Chlorine, giving rise to diverse functional groups."
    ],
    properties: [
      { label: "Bond Nature", value: "Strictly covalent single, double, and triple bonds." },
      { label: "Compound Variety", value: "Over 10 million distinct compounds, exceeding all other elements combined." }
    ]
  }
];

// ---------------------------------------------------------------------------
// 7. DIAGNOSTIC MASTERY QUIZ
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
    question: "What is the correct chemical formula for Aluminium Sulfate derived via the Criss-Cross valency rule?",
    options: ["AlSO₄", "Al₂(SO₄)₃", "Al₃(SO₄)₂", "Al(SO₄)₃"],
    correctIdx: 1,
    explanation: "Aluminium has valency 3 (Al³⁺) and Sulfate has valency 2 (SO₄²⁻). Criss-crossing gives Al₂(SO₄)₃ with mandatory brackets around the polyatomic radical."
  },
  {
    id: "q2",
    question: "Why do we adjust only coefficients and NEVER change subscripts inside formulas when balancing equations?",
    options: [
      "Altering subscripts changes the chemical identity of the substance (e.g. changing H₂O to H₂O₂ turns drinking water into bleach)",
      "Subscripts cannot be even numbers in chemistry",
      "Subscripts only apply to gaseous reactants",
      "Changing subscripts violates Boyle's law"
    ],
    correctIdx: 0,
    explanation: "Changing subscripts alters the chemical identity of the substance. H₂O is drinking water, whereas H₂O₂ is toxic, highly reactive hydrogen peroxide!"
  },
  {
    id: "q3",
    question: "According to the Reactivity Series, what occurs when an iron nail is immersed in an aqueous Zinc Sulfate (ZnSO₄) solution?",
    options: [
      "Iron displaces Zinc; solution turns pale green",
      "No chemical displacement reaction occurs because Iron is less reactive than Zinc",
      "Hydrogen gas vigorously bubbles out",
      "A white precipitate of Zinc Hydroxide forms instantly"
    ],
    correctIdx: 1,
    explanation: "In the reactivity series ('Careless Zebra Instead...'), Zinc (Zn) is positioned higher than Iron (Fe). A less reactive metal cannot displace a more reactive metal from its aqueous salt solution!"
  },
  {
    id: "q4",
    question: "When crystalline pale green Ferrous Sulphate (FeSO₄·7H₂O) is heated in a dry boiling tube, what are the primary observations?",
    options: [
      "White fumes of HCl with blue residue",
      "Loss of water of crystallization turning white, followed by reddish-brown solid (Fe₂O₃) and pungent sulfur gases (SO₂, SO₃)",
      "Instant canary yellow precipitate with oxygen gas emission",
      "Vigorous flame with sweet fruity ester odor"
    ],
    correctIdx: 1,
    explanation: "FeSO₄·7H₂O first loses its 7 water molecules turning white, then decomposes thermally into reddish-brown Fe₂O₃ and suffocating, choking gases SO₂ and SO₃."
  },
  {
    id: "q5",
    question: "Why does carbon form covalent bonds rather than ionic bonds by forming C⁴⁺ or C⁴⁻ ions?",
    options: [
      "Because carbon is a noble gas with zero valency",
      "Forming C⁴⁺ requires huge ionization energy, while holding 10 electrons by 6 protons in C⁴⁻ is electrostatically unstable",
      "Because carbon has an odd number of neutrons",
      "Because carbon only reacts with hydrogen and never with oxygen"
    ],
    correctIdx: 1,
    explanation: "Forming C⁴⁺ requires enormous energy to pull 4 electrons away against nuclear charge. Forming C⁴⁻ would require 6 protons to hold 10 electrons, which is electrostatically impossible. Hence carbon exclusively shares electrons!"
  },
  {
    id: "q6",
    question: "Which of the following compounds exhibits ionic bonding and conducts electricity when dissolved in water?",
    options: ["Methane (CH₄)", "Magnesium Chloride (MgCl₂)", "Carbon Dioxide (CO₂)", "Glucose (C₆H₁₂O₆)"],
    correctIdx: 1,
    explanation: "MgCl₂ is an ionic compound formed by electron transfer from Magnesium to Chlorine. In water, it dissociates into free mobile Mg²⁺ and Cl⁻ ions that conduct electricity."
  },
  {
    id: "q7",
    question: "What is the observation when Carbon Dioxide gas is continuously bubbled in excess through freshly prepared limewater?",
    options: [
      "Turns milky white and stays permanently milky",
      "Turns milky white due to CaCO₃ precipitate, which then disappears to become clear due to soluble Ca(HCO₃)₂",
      "Turns brilliant canary yellow precipitate",
      "Produces a pungent smell of burning sulphur"
    ],
    correctIdx: 1,
    explanation: "Limewater initially turns milky due to insoluble Calcium Carbonate (CaCO₃). Upon passing excess CO₂, it forms soluble Calcium Hydrogen Carbonate [Ca(HCO₃)₂], making the solution completely clear again!"
  },
  {
    id: "q8",
    question: "What color transition is observed when neutral red litmus paper and phenolphthalein are dipped into an aqueous Sodium Hydroxide (NaOH) solution?",
    options: [
      "Red litmus stays red; Phenolphthalein turns colorless",
      "Red litmus turns blue; Phenolphthalein turns vivid magenta pink",
      "Red litmus turns orange; Phenolphthalein turns bright yellow",
      "Red litmus bleaches white; Phenolphthalein stays green"
    ],
    correctIdx: 1,
    explanation: "Sodium Hydroxide is a strong basic alkali. Bases turn red litmus blue and turn colorless phenolphthalein to vivid magenta pink."
  }
];

export default function ChemistryBasicsMasterView({
  isDark,
  onNavigateToChapter
}: ChemistryBasicsMasterViewProps) {
  // Navigation sub-tabs within Chemistry Basics
  const [activeTab, setActiveTab] = useState<
    "criss_cross" | "elements_matrix" | "bonding" | "balancing" | "reactivity" | "observations" | "quiz"
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

  // Element Search
  const [elementSearch, setElementSearch] = useState<string>("");

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
        title: "Identical Metal",
        explanation: `No net chemical displacement occurs because ${simMetal} cannot displace its own ions from ${solInfo.name}.`,
        observation: "No color change. Solution and metal remain unchanged."
      };
    }

    if (metalRank < solMetalRank) {
      return {
        success: true,
        canDisplace: true,
        title: "Chemical Displacement Occurs! ✅",
        explanation: `${simMetal} is positioned HIGHER than ${solInfo.metal} in the activity series. Hence, ${simMetal} readily displaces ${solInfo.metal} from ${solInfo.name}.`,
        equation: `${simMetal} + ${simSolution} ──> ${simMetal}SO₄ + ${solInfo.metal} ↓`,
        observation: `Solution color changes! ${solInfo.color} fades, and solid reddish/dark ${solInfo.metal} deposits onto the metal surface.`
      };
    } else {
      return {
        success: true,
        canDisplace: false,
        title: "No Reaction Occurs ❌",
        explanation: `${simMetal} is positioned LOWER than ${solInfo.metal} in the activity series. A less electropositive metal cannot displace a more reactive metal from its salt solution!`,
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
    if (correctCount >= 6) {
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

  const filteredElements = useMemo(() => {
    if (!elementSearch.trim()) return ELEMENTS_1_TO_30;
    const q = elementSearch.toLowerCase();
    return ELEMENTS_1_TO_30.filter(
      (el) =>
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        el.z.toString() === q ||
        el.type.toLowerCase().includes(q)
    );
  }, [elementSearch]);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* =========================================================================
          HERO BANNER: UNIFIED FUNDAMENTAL CHEMISTRY ENGINE
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-br from-[#1b150c] via-[#15100a] to-[#120f09] border-amber-500/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)]"
            : "bg-gradient-to-br from-amber-50/95 via-orange-50/60 to-yellow-50/70 border-amber-300 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5" /> Unified Chemistry Engine
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-amber-950/60 text-amber-300 border-amber-500/30"
                    : "bg-amber-100 text-amber-900 border-amber-300 font-extrabold"
                }`}
              >
                🧪 Elements 1–30 • Valency • Bonding • Redox
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold"
                }`}
              >
                ⚡ 100% Practical Interactive Suite
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight flex items-center gap-3">
              <span className={isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300" : "text-amber-950 font-black"}>
                Comprehensive Chemistry Foundations &amp; Masterclass
              </span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
              Master every fundamental and advanced chemical law: from atomic numbers (Z = 1 to 30), electron configurations,
              cations, anions, and polyatomic radicals, to the interactive criss-cross formula matrix, equation balancing
              mechanics, ionic versus covalent bonding, reactivity series displacement, and board laboratory color transformations.
            </p>
          </div>

          {/* Quick Jump Buttons to Board Chemistry Chapters */}
          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
            <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Jump to Chemistry Chapters:
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              <button
                onClick={() => onNavigateToChapter?.(1)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <span>Ch 1: Chemical Reactions</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(2)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <span>Ch 2: Acids, Bases & Salts</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(3)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <span>Ch 3: Metals & Non-Metals</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </button>
              <button
                onClick={() => onNavigateToChapter?.(4)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <span>Ch 4: Carbon & Compounds</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className={`flex flex-wrap items-center gap-2 pt-6 mt-6 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
          {[
            { id: "criss_cross", label: "🧪 Criss-Cross Formula Builder", icon: Atom },
            { id: "elements_matrix", label: "📊 Elements 1–30 Valency Matrix", icon: Layers },
            { id: "bonding", label: "⚛️ Ionic vs Covalent Bonding", icon: Compass },
            { id: "balancing", label: "⚖️ Equation Balancing Mechanics", icon: RefreshCw },
            { id: "reactivity", label: "⚡ Reactivity Series & Simulator", icon: Zap },
            { id: "observations", label: "🎨 Board Lab Colors & Gas Tests", icon: TestTube2 },
            { id: "quiz", label: "🎯 Diagnostic Mastery Challenge", icon: Target }
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
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? isDark
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                      : "bg-amber-600 text-white border-amber-600 font-black shadow-md"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs"
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
                <Atom className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  Interactive Criss-Cross Chemical Formula Generator
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Pick any Cation (+ve) and Anion (-ve). Watch how valencies criss-cross, simplify common factors, and
                automatically enforce brackets for polyatomic radicals like (SO₄) and (OH).
              </p>
            </div>

            {/* Cation Selector */}
            <div className="space-y-3 mb-6">
              <label className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? "text-amber-400" : "text-amber-800 font-black"
              }`}>
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
                        <span className={`font-mono font-bold text-sm ${isDark ? "text-amber-400" : "text-amber-800 font-black"}`}>{c.symbol}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-200 text-amber-950 font-bold"
                        }`}>
                          +{c.valency}
                        </span>
                      </div>
                      <div className={`text-[11px] truncate mt-1 ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>{c.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Anion Selector */}
            <div className="space-y-3 mb-8">
              <label className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? "text-sky-400" : "text-sky-800 font-black"
              }`}>
                <span>2. Select Anion (Negative Ion / Non-Metal or Polyatomic Radical):</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  (Accepts electrons to satisfy octet)
                </span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
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
                        <span className={`font-mono font-bold text-sm ${isDark ? "text-sky-400" : "text-sky-800 font-black"}`}>{a.symbol}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isDark ? "bg-sky-500/20 text-sky-300" : "bg-sky-200 text-sky-950 font-bold"
                        }`}>
                          -{a.valency}
                        </span>
                      </div>
                      <div className={`text-[11px] truncate mt-1 ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>{a.name}</div>
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
                  : "bg-gradient-to-br from-blue-50/90 to-sky-50 border-blue-200 shadow-md"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                  isDark ? "text-blue-400" : "text-blue-800 font-extrabold"
                }`}>
                  <Sparkles className="w-4 h-4" /> Live Criss-Cross Derivation
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-blue-200 text-blue-900 font-bold"
                }`}>
                  Ratio: {crissCrossResult.ratio}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Step 1: Symbols */}
                <div className={`p-4 rounded-2xl border text-center space-y-2 ${
                  isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">1. Write Symbols</span>
                  <div className="flex items-center justify-center gap-4 text-2xl font-mono font-black py-2">
                    <span className={isDark ? "text-amber-400" : "text-amber-800"}>{selectedCation.formulaSymbol}</span>
                    <span className="text-slate-400">+</span>
                    <span className={isDark ? "text-sky-400" : "text-sky-800"}>{selectedAnion.formulaSymbol}</span>
                  </div>
                  <span className={`text-[10px] block ${isDark ? "text-slate-400" : "text-slate-600"}`}>Cation precedes Anion</span>
                </div>

                {/* Step 2: Valencies */}
                <div className={`p-4 rounded-2xl border text-center space-y-2 ${
                  isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">2. Note Valencies</span>
                  <div className="flex items-center justify-center gap-6 text-xl font-mono font-bold py-2">
                    <span className={`px-2.5 py-1 rounded-lg ${isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-900 font-bold"}`}>
                      +{crissCrossResult.cVal}
                    </span>
                    <span className="text-slate-400">⇄</span>
                    <span className={`px-2.5 py-1 rounded-lg ${isDark ? "bg-sky-500/20 text-sky-300" : "bg-sky-100 text-sky-900 font-bold"}`}>
                      -{crissCrossResult.aVal}
                    </span>
                  </div>
                  <span className={`text-[10px] block ${isDark ? "text-slate-400" : "text-slate-600"}`}>Criss-cross numerical values</span>
                </div>

                {/* Step 3: Subscript Simplification */}
                <div className={`p-4 rounded-2xl border text-center space-y-2 ${
                  isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-xs"
                }`}>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">3. Simplify Common Factor</span>
                  <div className="text-xs font-mono space-y-1 py-1">
                    <div>
                      {selectedCation.formulaSymbol} takes subscript:{" "}
                      <strong className={isDark ? "text-sky-400" : "text-sky-800 font-black"}>{crissCrossResult.simplifiedCationSubscript}</strong>
                    </div>
                    <div>
                      {selectedAnion.formulaSymbol} takes subscript:{" "}
                      <strong className={isDark ? "text-amber-400" : "text-amber-800 font-black"}>{crissCrossResult.simplifiedAnionSubscript}</strong>
                    </div>
                  </div>

                  {selectedAnion.isRadical && crissCrossResult.simplifiedAnionSubscript > 1 && (
                    <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 text-[10px] font-bold">
                      ⚠️ Polyatomic Radical: ({selectedAnion.formulaSymbol}) requires brackets!
                    </div>
                  )}
                  {gcd(crissCrossResult.cVal, crissCrossResult.aVal) > 1 && (
                    <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                      💡 Simplified by dividing by GCD ({gcd(crissCrossResult.cVal, crissCrossResult.aVal)})
                    </div>
                  )}
                </div>

                {/* Step 4: Final Formula Box */}
                <div
                  className={`p-5 rounded-2xl border text-center space-y-3 ${
                    isDark
                      ? "bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-400/40 shadow-md"
                      : "bg-gradient-to-br from-amber-100 to-orange-100 border-amber-400 shadow-md"
                  }`}
                >
                  <span className={`text-xs font-mono font-black uppercase tracking-wider block ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                    Official Chemical Formula
                  </span>
                  <div className={`text-2xl sm:text-3xl font-mono font-black tracking-wider py-1 ${isDark ? "text-white" : "text-slate-950"}`}>
                    {crissCrossResult.formulaStr}
                  </div>
                  <div className={`text-sm font-bold ${isDark ? "text-amber-200" : "text-amber-950"}`}>{crissCrossResult.compoundName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 2: ELEMENTS 1 TO 30 & VALENCY MATRIX
          ========================================================================= */}
      {activeTab === "elements_matrix" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  Elements 1 to 30: Electronic Configuration &amp; Valency Rulebook
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Understand the universal golden formula for determining combining capacity (valency):
                <span className={`block mt-1 font-mono font-bold ${isDark ? "text-amber-400" : "text-amber-800"}`}>
                  • If valence electrons ≤ 4 ➔ Valency = Valence Electrons (Metals donate electrons)
                </span>
                <span className={`block font-mono font-bold ${isDark ? "text-sky-400" : "text-sky-800"}`}>
                  • If valence electrons &gt; 4 ➔ Valency = 8 − Valence Electrons (Non-metals gain/share electrons)
                </span>
                <span className={`block font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                  • Transition Elements (Z = 21 to 30) exhibit variable oxidation states due to participating (n-1)d subshell electrons!
                </span>
              </p>
            </div>

            {/* Search filter for elements */}
            <div className="mb-4 max-w-sm">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by name, symbol, Z, or nature..."
                  value={elementSearch}
                  onChange={(e) => setElementSearch(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-medium border outline-none ${
                    isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                  }`}
                />
              </div>
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
                    <th className="p-3">M (18)</th>
                    <th className="p-3">N (32)</th>
                    <th className="p-3">Valence e⁻</th>
                    <th className={`p-3 font-black ${isDark ? "text-amber-400" : "text-amber-800"}`}>Valency</th>
                    <th className="p-3">Nature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {filteredElements.map((el) => {
                    const isNoble = el.type === "noblegas";
                    const isMetal = el.type === "metal";
                    const isTransition = el.type === "transition";
                    return (
                      <tr
                        key={el.z}
                        className={`transition-colors ${
                          isNoble
                            ? isDark ? "bg-purple-950/20 hover:bg-purple-950/40" : "bg-purple-50 hover:bg-purple-100"
                            : isTransition
                            ? isDark ? "hover:bg-emerald-950/20" : "hover:bg-emerald-50"
                            : isMetal
                            ? isDark ? "hover:bg-amber-950/20" : "hover:bg-amber-50"
                            : isDark ? "hover:bg-sky-950/20" : "hover:bg-sky-50"
                        }`}
                      >
                        <td className="p-3 font-bold text-slate-400">{el.z}</td>
                        <td className={`p-3 font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>{el.name}</td>
                        <td className={`p-3 font-black ${isDark ? "text-amber-400" : "text-amber-800"}`}>{el.symbol}</td>
                        <td className="p-3">{el.k}</td>
                        <td className="p-3">{el.l || "-"}</td>
                        <td className="p-3">{el.m || "-"}</td>
                        <td className="p-3">{el.n || "-"}</td>
                        <td className={`p-3 font-bold ${isDark ? "text-sky-400" : "text-sky-800"}`}>{el.valenceElectrons}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded font-black ${
                              isNoble
                                ? "bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30"
                                : isTransition
                                ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30"
                            }`}
                          >
                            {el.valency}
                          </span>
                        </td>
                        <td className="p-3 font-sans text-xs">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              isNoble
                                ? "bg-purple-500/20 text-purple-800 dark:text-purple-300"
                                : isTransition
                                ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                                : el.type === "metal"
                                ? "bg-amber-500/20 text-amber-800 dark:text-amber-300"
                                : el.type === "metalloid"
                                ? "bg-teal-500/20 text-teal-800 dark:text-teal-300"
                                : "bg-sky-500/20 text-sky-800 dark:text-sky-300"
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
          MODULE 3: CHEMICAL BONDING (IONIC VS COVALENT)
          ========================================================================= */}
      {activeTab === "bonding" && (
        <div className="space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  Chemical Bonding Masterclass: Ionic vs Covalent Mechanics
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Atoms bond to achieve lowest potential energy and attain stable noble gas octets (duplet for H/He).
                Compare the two great mechanisms: electron transfer vs electron sharing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {BONDING_CONCEPTS.map((concept) => (
                <div
                  key={concept.id}
                  className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${
                    concept.type === "ionic"
                      ? isDark ? "bg-amber-950/15 border-amber-500/30" : "bg-amber-50/70 border-amber-300 shadow-xs"
                      : concept.type === "covalent"
                      ? isDark ? "bg-sky-950/15 border-sky-500/30" : "bg-sky-50/70 border-sky-300 shadow-xs"
                      : isDark ? "bg-emerald-950/15 border-emerald-500/30" : "bg-emerald-50/70 border-emerald-300 shadow-xs"
                  }`}
                >
                  <div className="space-y-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                      concept.type === "ionic"
                        ? "bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/30"
                        : concept.type === "covalent"
                        ? "bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-500/30"
                        : "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/30"
                    }`}>
                      {concept.type === "ionic" ? "Electron Transfer" : concept.type === "covalent" ? "Electron Sharing" : "Unique Tetravalency"}
                    </span>

                    <h3 className={`text-lg font-black ${isDark ? "text-white" : "text-slate-900"}`}>{concept.title}</h3>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>{concept.summary}</p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Core Principles:</span>
                      <ul className="space-y-1.5 text-xs">
                        {concept.keyPoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-amber-500 shrink-0 font-bold">•</span>
                            <span className={isDark ? "text-slate-300" : "text-slate-700"}>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Key Examples:</span>
                      {concept.examples.map((ex, idx) => (
                        <div key={idx} className={`p-2 rounded-xl text-[11px] font-mono border ${
                          isDark ? "bg-black/30 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 font-semibold"
                        }`}>
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Physical Properties:</span>
                    <div className="grid grid-cols-1 gap-1 text-[11px]">
                      {concept.properties.map((pr, idx) => (
                        <div key={idx} className={`p-2 rounded-lg ${isDark ? "bg-white/5" : "bg-white/80"} flex flex-col gap-0.5`}>
                          <span className={`font-bold ${isDark ? "text-amber-300" : "text-amber-900"}`}>{pr.label}:</span>
                          <span className={isDark ? "text-slate-300" : "text-slate-700"}>{pr.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 4: EQUATION BALANCING MECHANICS
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
                <RefreshCw className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
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
              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? "bg-amber-500/10 border-amber-500/30" : "bg-amber-50 border-amber-200"
              }`}>
                <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${
                  isDark ? "text-amber-400" : "text-amber-800 font-black"
                }`}>
                  <AlertTriangle className="w-3.5 h-3.5" /> Golden Rule #1
                </span>
                <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Never Touch Subscripts!</h4>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Changing subscripts inside a formula changes the chemical substance. Changing H₂O to H₂O₂ turns
                  life-saving water into deadly bleach!
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? "bg-sky-500/10 border-sky-500/30" : "bg-sky-50 border-sky-200"
              }`}>
                <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${
                  isDark ? "text-sky-400" : "text-sky-800 font-black"
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Golden Rule #2
                </span>
                <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Only Adjust Coefficients</h4>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Always place whole numbers as stoichiometric multipliers in front of chemical formulas (e.g. 2H₂O, 3Fe,
                  2NaCl).
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? "bg-emerald-500/10 border-emerald-500/30" : "bg-emerald-50 border-emerald-200"
              }`}>
                <span className={`text-xs font-mono font-bold uppercase flex items-center gap-1.5 ${
                  isDark ? "text-emerald-400" : "text-emerald-800 font-black"
                }`}>
                  <Zap className="w-3.5 h-3.5" /> Golden Rule #3
                </span>
                <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Order of Attack</h4>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  1. Balance <strong>Metals</strong> first ➔ 2. Balance <strong>Non-metals</strong> (C, S, N, Cl) ➔ 3.
                  Balance <strong>Oxygen</strong> ➔ 4. Balance <strong>Hydrogen</strong> last!
                </p>
              </div>
            </div>

            {/* Interactive Step-by-Step Balancing Examples */}
            <div className="space-y-4">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-600"}`}>
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
                        : isDark
                        ? "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                        : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
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
                        <div className="text-lg sm:text-xl font-mono font-bold text-rose-500">
                          {currentEq.unbalanced}
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <span className={`text-[11px] font-mono uppercase block font-bold ${
                          isDark ? "text-emerald-400" : "text-emerald-800 font-black"
                        }`}>
                          Target Balanced Equation:
                        </span>
                        <div className={`text-lg sm:text-xl font-mono font-black ${
                          isDark ? "text-emerald-300" : "text-emerald-900"
                        }`}>
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
                                <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                                  isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-200 text-amber-950 font-bold"
                                }`}>
                                  {st.stepNo}
                                </span>
                                <div>
                                  <div className={`text-sm font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>{st.description}</div>
                                  <div className={`text-xs font-mono mt-1 ${isDark ? "text-amber-400" : "text-amber-800 font-bold"}`}>
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
                      <div className={`p-3.5 rounded-2xl text-center font-bold text-xs border ${
                        isDark ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-emerald-100 text-emerald-950 border-emerald-300"
                      }`}>
                        🎉 Equation Fully Balanced! Number of atoms on LHS equals RHS.
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
          MODULE 5: REACTIVITY SERIES & TEST-TUBE SIMULATOR
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
                <Zap className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  The Activity (Reactivity) Series &amp; Displacement Simulator
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Memorize the famous mnemonic:{" "}
                <strong className={isDark ? "text-amber-400" : "text-amber-800 font-black"}>
                  &quot;Please Stop Calling Me A Careless Zebra Instead Try Learning How Copper Saves Gold&quot;
                </strong>
                . A metal can ONLY displace metals positioned BELOW it in the series!
              </p>
            </div>

            {/* Interactive Displacement Simulator Widget */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border mb-8 ${
                isDark
                  ? "bg-gradient-to-br from-[#121c2c] to-[#0a121e] border-teal-500/30 shadow-[0_8px_32px_rgba(20,184,166,0.12)]"
                  : "bg-gradient-to-br from-teal-50/80 to-cyan-50 border-teal-200 shadow-md"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
                  isDark ? "text-teal-400" : "text-teal-800 font-black"
                }`}>
                  <TestTube2 className="w-4 h-4" /> Virtual Test-Tube Displacement Simulator
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-teal-200 text-teal-900 font-bold"
                }`}>
                  Live Chemical Logic
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Select Metal */}
                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    1. Select Solid Metal Strip to Insert:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {["Mg", "Al", "Zn", "Fe", "Cu", "Ag"].map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setSimMetal(m);
                          areteAudio.play("click");
                        }}
                        className={`p-2.5 rounded-xl border font-mono font-bold text-xs transition-all cursor-pointer ${
                          simMetal === m
                            ? isDark
                              ? "bg-teal-500 text-slate-950 border-teal-400 shadow-md"
                              : "bg-teal-600 text-white border-teal-600 shadow-md"
                            : isDark
                            ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Aqueous Salt Solution */}
                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    2. Select Aqueous Salt Solution:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: "CuSO4", name: "CuSO₄ (Blue)" },
                      { id: "FeSO4", name: "FeSO₄ (Pale Green)" },
                      { id: "ZnSO4", name: "ZnSO₄ (Colorless)" },
                      { id: "AgNO3", name: "AgNO₃ (Colorless)" },
                      { id: "MgSO4", name: "MgSO₄ (Colorless)" }
                    ].map((sol) => (
                      <button
                        key={sol.id}
                        onClick={() => {
                          setSimSolution(sol.id);
                          areteAudio.play("click");
                        }}
                        className={`p-2.5 rounded-xl border font-mono font-bold text-xs transition-all cursor-pointer ${
                          simSolution === sol.id
                            ? isDark
                              ? "bg-sky-500 text-slate-950 border-sky-400 shadow-md"
                              : "bg-sky-600 text-white border-sky-600 shadow-md"
                            : isDark
                            ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {sol.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simulation Result Box */}
              <div
                className={`p-5 rounded-2xl border ${
                  reactivitySimulationResult.canDisplace
                    ? isDark
                      ? "bg-emerald-950/30 border-emerald-500/40"
                      : "bg-emerald-100/90 border-emerald-400 text-emerald-950"
                    : isDark
                    ? "bg-rose-950/20 border-rose-500/30"
                    : "bg-rose-100/90 border-rose-300 text-rose-950"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <h4 className={`text-base font-black ${
                    reactivitySimulationResult.canDisplace
                      ? isDark ? "text-emerald-300" : "text-emerald-950 font-black"
                      : isDark ? "text-rose-300" : "text-rose-950 font-black"
                  }`}>
                    {reactivitySimulationResult.title}
                  </h4>
                  {reactivitySimulationResult.equation && (
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${
                      isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-300 text-slate-900"
                    }`}>
                      {reactivitySimulationResult.equation}
                    </span>
                  )}
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed mb-2 ${
                  isDark ? "text-slate-300" : "text-slate-800 font-medium"
                }`}>
                  {reactivitySimulationResult.explanation}
                </p>
                {reactivitySimulationResult.observation && (
                  <div className={`p-2.5 rounded-xl text-xs font-bold border ${
                    isDark ? "bg-black/30 border-white/10 text-amber-300" : "bg-white border-amber-300 text-amber-950"
                  }`}>
                    <strong>Observation:</strong> {reactivitySimulationResult.observation}
                  </div>
                )}
              </div>
            </div>

            {/* Reactivity Ladder Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead
                  className={`font-mono uppercase text-[11px] font-bold border-b border-white/10 ${
                    isDark ? "bg-white/[0.04] text-slate-300" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <tr>
                    <th className="p-3">Rank</th>
                    <th className="p-3">Element</th>
                    <th className="p-3">Mnemonic Word</th>
                    <th className="p-3">Reactivity Category</th>
                    <th className="p-3">Reaction with Water</th>
                    <th className="p-3">Extraction / Reduction Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {REACTIVITY_SERIES.map((el, idx) => (
                    <tr
                      key={el.symbol}
                      className={
                        el.reactivityLevel === "Extremely Reactive"
                          ? isDark ? "bg-rose-950/15" : "bg-rose-50"
                          : el.reactivityLevel === "Moderately Reactive"
                          ? isDark ? "bg-amber-950/15" : "bg-amber-50"
                          : isDark ? "bg-emerald-950/15" : "bg-emerald-50"
                      }
                    >
                      <td className="p-3 font-mono font-bold text-slate-400">{idx + 1}</td>
                      <td className="p-3 font-mono font-black text-sm">
                        <span className={isDark ? "text-white" : "text-slate-900"}>{el.name} ({el.symbol})</span>
                      </td>
                      <td className={`p-3 font-bold ${isDark ? "text-amber-400" : "text-amber-800"}`}>{el.mnemonicWord}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                            el.reactivityLevel === "Extremely Reactive"
                              ? "bg-rose-500/20 text-rose-800 dark:text-rose-300"
                              : el.reactivityLevel === "Moderately Reactive"
                              ? "bg-amber-500/20 text-amber-800 dark:text-amber-300"
                              : "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                          }`}
                        >
                          {el.reactivityLevel}
                        </span>
                      </td>
                      <td className={`p-3 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>{el.waterReaction}</td>
                      <td className={`p-3 text-xs font-mono ${isDark ? "text-slate-300" : "text-slate-700"}`}>{el.reductionMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 6: BOARD LAB COLORS & OBSERVATION CARDS
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
                <TestTube2 className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  Board Practical Lab Colors &amp; Chemical Observation Vault
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Board examiners frequently test observational chemistry: precipitate colors, gas identification smells,
                and acid-base indicator shifts. Memorize these benchmark reactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LAB_OBSERVATIONS.map((obs) => (
                <div
                  key={obs.id}
                  className={`p-6 rounded-3xl border space-y-4 flex flex-col justify-between ${
                    isDark ? "bg-white/[0.02] border-white/10 hover:border-amber-500/30" : "bg-slate-50 border-slate-200 hover:border-amber-400 shadow-xs"
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className={`text-base font-black ${isDark ? "text-white" : "text-slate-900"}`}>{obs.title}</h3>

                    <div className={`p-3 rounded-xl font-mono text-xs border leading-relaxed ${
                      isDark ? "bg-black/40 border-white/10 text-amber-300" : "bg-white border-amber-200 text-amber-950 font-bold"
                    }`}>
                      {obs.reactionEquation}
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="font-bold text-slate-400">Color Transition:</span>
                        <div className={`font-semibold mt-0.5 ${isDark ? "text-emerald-300" : "text-emerald-800"}`}>
                          {obs.colorTransition}
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-slate-400">Gas / Precipitate Evolution:</span>
                        <div className={`mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{obs.gasOrPpt}</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    isDark ? "bg-amber-500/10 border-amber-500/20 text-amber-200" : "bg-amber-50 border-amber-300 text-amber-950"
                  }`}>
                    <strong>Exam Significance:</strong> {obs.examSignificance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODULE 7: DIAGNOSTIC MASTERY QUIZ
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
                <Target className="w-5 h-5 text-amber-500" />
                <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  Unified Chemistry Diagnostic Challenge
                </h2>
              </div>
              <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Validate your comprehensive mastery of valencies, criss-cross formula writing, bonding principles,
                reactivity rankings, and board practical colors.
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
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                        isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-200 text-amber-950 font-bold"
                      }`}>
                        {idx + 1}
                      </span>
                      <h4 className={`font-bold text-sm leading-snug ${isDark ? "text-slate-200" : "text-slate-900"}`}>{q.question}</h4>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userSelected === optIdx;
                        let optStyle = isDark
                          ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIdx) {
                            optStyle = isDark
                              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold"
                              : "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (isThisSelected) {
                            optStyle = isDark
                              ? "bg-rose-500/20 border-rose-500/50 text-rose-300 font-bold"
                              : "bg-rose-100 border-rose-400 text-rose-950 font-bold";
                          }
                        } else if (isThisSelected) {
                          optStyle = isDark
                            ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                            : "bg-amber-100 border-amber-500 text-amber-950 font-bold";
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
                              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            )}
                            {quizSubmitted && isThisSelected && !isCorrect && (
                              <X className="w-4 h-4 text-rose-500 shrink-0" />
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
                              ? isDark ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium"
                              : isDark ? "bg-amber-500/10 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-950 font-medium"
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
            <div className={`pt-6 border-t flex items-center justify-between gap-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
              {!quizSubmitted ? (
                <button
                  onClick={handleGradeQuiz}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-black bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Diagnostic Challenge</span>
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-black border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isDark ? "bg-white/10 hover:bg-white/20 text-white border-white/10" : "bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300"
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retry Diagnostic Challenge</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
