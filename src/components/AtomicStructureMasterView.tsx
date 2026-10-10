"use client";

import React, { useState, useMemo } from "react";
import {
  Atom,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Layers,
  ChevronDown,
  ChevronUp,
  Shield,
  Lightbulb,
  TestTube2,
  ListChecks,
  Check,
  Calculator,
  Compass,
  Info
} from "lucide-react";
import { areteAudio } from "@/lib/audio";

interface AtomicStructureMasterViewProps {
  isDark: boolean;
}

// ---------------------------------------------------------------------------
// 1. DATA FOR THE 7 FOUNDATIONAL ELEMENTS SPECIFIED IN CBSE CURRICULUM
// ---------------------------------------------------------------------------
interface BohrElementData {
  symbol: string;
  name: string;
  z: number;
  a: number;
  protons: number;
  neutrons: number;
  electrons: number;
  shells: number[]; // e.g. [2, 4] for Carbon (K=2, L=4)
  shellNames: string[];
  valenceElectrons: number;
  valency: number;
  valencyExplanation: string;
  category: "Non-metal" | "Alkali Metal" | "Alkaline Earth Metal" | "Halogen";
  ionFormed: string;
  realWorldExample: string;
}

const FOUNDATION_ELEMENTS: BohrElementData[] = [
  {
    symbol: "H",
    name: "Hydrogen",
    z: 1,
    a: 1,
    protons: 1,
    neutrons: 0,
    electrons: 1,
    shells: [1],
    shellNames: ["K: 1"],
    valenceElectrons: 1,
    valency: 1,
    valencyExplanation: "Needs 1 electron to complete its K-shell duplet (like Helium). It combines by sharing or losing 1 electron. Combining capacity = 1.",
    category: "Non-metal",
    ionFormed: "H⁺ (Proton) or shares in H₂ / H₂O",
    realWorldExample: "Water (H₂O), the sun's nuclear fusion fuel, and industrial hydrogen gas."
  },
  {
    symbol: "C",
    name: "Carbon",
    z: 6,
    a: 12,
    protons: 6,
    neutrons: 6,
    electrons: 6,
    shells: [2, 4],
    shellNames: ["K: 2", "L: 4"],
    valenceElectrons: 4,
    valency: 4,
    valencyExplanation: "Has 4 valence electrons. Losing 4 electrons requires enormous energy (C⁴⁺ impossible), while gaining 4 electrons produces severe electrostatic repulsion (C⁴⁻ unstable). Hence carbon shares 4 pairs of electrons (tetravalency). Combining capacity = 4.",
    category: "Non-metal",
    ionFormed: "Forms covalent bonds exclusively (e.g., CH₄, CO₂)",
    realWorldExample: "Basis of all organic life, DNA, proteins, graphite, and diamond."
  },
  {
    symbol: "O",
    name: "Oxygen",
    z: 8,
    a: 16,
    protons: 8,
    neutrons: 8,
    electrons: 8,
    shells: [2, 6],
    shellNames: ["K: 2", "L: 6"],
    valenceElectrons: 6,
    valency: 2,
    valencyExplanation: "CRITICAL DISTINCTION: It has 6 valence electrons, but its valency is NOT 6! To achieve a stable octet (8), it gains or shares 2 electrons (8 - 6 = 2). Combining capacity = 2.",
    category: "Non-metal",
    ionFormed: "O²⁻ (Oxide anion)",
    realWorldExample: "Essential for cellular respiration, air combustion, and rust formation."
  },
  {
    symbol: "Na",
    name: "Sodium",
    z: 11,
    a: 23,
    protons: 11,
    neutrons: 12,
    electrons: 11,
    shells: [2, 8, 1],
    shellNames: ["K: 2", "L: 8", "M: 1"],
    valenceElectrons: 1,
    valency: 1,
    valencyExplanation: "Has 1 electron in its outermost M shell. It is energetically favorable to lose this single electron than to gain 7. By losing 1 electron, it attains the stable octet of Neon [2, 8]. Combining capacity = 1.",
    category: "Alkali Metal",
    ionFormed: "Na⁺ (Sodium cation)",
    realWorldExample: "Common table salt (NaCl) and vital for nerve impulse conduction in humans."
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    z: 12,
    a: 24,
    protons: 12,
    neutrons: 12,
    electrons: 12,
    shells: [2, 8, 2],
    shellNames: ["K: 2", "L: 8", "M: 2"],
    valenceElectrons: 2,
    valency: 2,
    valencyExplanation: "Has 2 valence electrons in shell M. Readily donates these 2 electrons to non-metals, achieving Neon's noble gas electronic configuration [2, 8]. Combining capacity = 2.",
    category: "Alkaline Earth Metal",
    ionFormed: "Mg²⁺ (Magnesium cation)",
    realWorldExample: "Magnesium ribbon burns with dazzling white flame; central atom in chlorophyll."
  },
  {
    symbol: "Cl",
    name: "Chlorine",
    z: 17,
    a: 35,
    protons: 17,
    neutrons: 18,
    electrons: 17,
    shells: [2, 8, 7],
    shellNames: ["K: 2", "L: 8", "M: 7"],
    valenceElectrons: 7,
    valency: 1,
    valencyExplanation: "CRITICAL DISTINCTION: Has 7 valence electrons, but its valency is 1! It requires only 1 electron to complete its octet (8 - 7 = 1) and attain Argon's configuration [2, 8, 8]. Combining capacity = 1.",
    category: "Halogen",
    ionFormed: "Cl⁻ (Chloride anion)",
    realWorldExample: "Bleaching agent, swimming pool water disinfectant, and constituent of HCl."
  },
  {
    symbol: "Ca",
    name: "Calcium",
    z: 20,
    a: 40,
    protons: 20,
    neutrons: 20,
    electrons: 20,
    shells: [2, 8, 8, 2],
    shellNames: ["K: 2", "L: 8", "M: 8", "N: 2"],
    valenceElectrons: 2,
    valency: 2,
    valencyExplanation: "Has 2 valence electrons in its outermost N shell. Readily donates these 2 electrons, leaving behind a stable octet in the M shell and forming the Ca²⁺ cation. Combining capacity = 2.",
    category: "Alkaline Earth Metal",
    ionFormed: "Ca²⁺ (Calcium cation)",
    realWorldExample: "Constituent of human bones, teeth, marble, chalk, and limestone (CaCO₃)."
  }
];

export default function AtomicStructureMasterView({ isDark }: AtomicStructureMasterViewProps) {
  // Active Element for Bohr Diagram
  const [selectedSymbol, setSelectedSymbol] = useState<string>("Na");

  // Interactive Z/A/Charge Calculator State
  const [calcZ, setCalcZ] = useState<number>(11);
  const [calcA, setCalcA] = useState<number>(23);
  const [calcCharge, setCalcCharge] = useState<number>(1);

  // Active Pedagogy Step Accordion
  const [openPedagogyStep, setOpenPedagogyStep] = useState<number | null>(1);

  // Active Recall Quiz Answers
  const [activeRecallAnswers, setActiveRecallAnswers] = useState<Record<string, boolean>>({});

  const selectedElement = useMemo(
    () => FOUNDATION_ELEMENTS.find((el) => el.symbol === selectedSymbol) || FOUNDATION_ELEMENTS[3],
    [selectedSymbol]
  );

  // Derived Calculator values
  const calcProtons = calcZ;
  const calcNeutrons = Math.max(0, calcA - calcZ);
  const calcElectrons = Math.max(0, calcZ - calcCharge);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* =========================================================================
          SECTION HEADER: ATOMIC FOUNDATIONS MASTERCLASS (FROM ABSOLUTE SCRATCH)
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-br from-[#191528] via-[#120f20] to-[#0c0916] border-purple-500/30 shadow-[0_8px_32px_rgba(168,85,247,0.15)]"
            : "bg-gradient-to-br from-purple-50/95 via-indigo-50/60 to-violet-50/70 border-purple-300 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-purple-600 text-white shadow-sm flex items-center gap-1.5">
                <Atom className="w-3.5 h-3.5" /> Foundational Chemistry Masterclass
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-purple-950/60 text-purple-300 border-purple-500/30"
                    : "bg-purple-100 text-purple-900 border-purple-300 font-extrabold"
                }`}
              >
                Zero-Assumption Class 10 CBSE Curriculum
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold"
                }`}
              >
                10-Step Pedagogical Sequence
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight flex items-center gap-3">
              <span
                className={
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300"
                    : "text-purple-950 font-black"
                }
              >
                Atomic Architecture, Bohr Shells &amp; Valency Engine
              </span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
              Built from first principles: no prior knowledge of atoms, elements, atomic numbers, or chemical bonding is assumed.
              Understand what matter is, explore the anatomy of subatomic particles, visualize real Bohr electron shell distributions
              for 7 benchmark elements, master the crucial distinction between valence electrons and combining capacity, and resolve CBSE board traps.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODULE 1: INTERACTIVE SCIENTIFIC ATOMIC DIAGRAM STUDIO (7 BENCHMARKS)
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
          isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Atom className="w-5 h-5 text-purple-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              Interactive Bohr Atomic Structure Studio (7 Prescribed Elements)
            </h2>
          </div>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Select any prescribed element to inspect its exact nucleus composition (protons + neutrons),
            quantum energy shells (K, L, M, N), electron arrangement via the 2n² capacity rule, and why valency differs from valence electron count.
          </p>
        </div>

        {/* Element Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {FOUNDATION_ELEMENTS.map((el) => {
            const isSelected = selectedSymbol === el.symbol;
            return (
              <button
                key={el.symbol}
                onClick={() => {
                  setSelectedSymbol(el.symbol);
                  areteAudio.play("click");
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? isDark
                      ? "bg-purple-600 text-white border-purple-500 shadow-md font-black"
                      : "bg-purple-700 text-white border-purple-700 shadow-md font-black"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="font-mono text-sm">{el.symbol}</span>
                <span>{el.name} (Z={el.z})</span>
              </button>
            );
          })}
        </div>

        {/* Visualizer Container: SVG Diagram on Left, Scientific Spec Sheet on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* SVG Atomic Model */}
          <div
            className={`lg:col-span-6 p-6 rounded-3xl border flex flex-col items-center justify-center relative overflow-hidden ${
              isDark ? "bg-[#0b0e14] border-purple-500/20 shadow-inner" : "bg-purple-50/50 border-purple-200"
            }`}
          >
            <div className="absolute top-3 left-4 text-[11px] font-mono font-bold text-purple-400">
              BOHR MODEL • {selectedElement.name.toUpperCase()} (Z = {selectedElement.z})
            </div>

            {/* SVG Atom Drawing */}
            <div className="my-4 w-full max-w-[340px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 340 340" className="w-full h-full">
                <defs>
                  <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
                    <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                  </radialGradient>
                  <filter id="electronGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Shell Orbits (K, L, M, N) */}
                {selectedElement.shells.map((count, sIdx) => {
                  const radius = 45 + sIdx * 30; // Radius for shell
                  const shellLetter = ["K (n=1)", "L (n=2)", "M (n=3)", "N (n=4)"][sIdx];

                  return (
                    <g key={sIdx}>
                      {/* Orbit Ring */}
                      <circle
                        cx="170"
                        cy="170"
                        r={radius}
                        fill="none"
                        stroke={isDark ? "rgba(168, 85, 247, 0.35)" : "rgba(147, 51, 234, 0.45)"}
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />

                      {/* Shell Label */}
                      <text
                        x="170"
                        y={170 - radius - 4}
                        textAnchor="middle"
                        fill={isDark ? "#a78bfa" : "#7c3aed"}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {shellLetter}
                      </text>

                      {/* Electrons Distributed on this shell */}
                      {Array.from({ length: count }).map((_, eIdx) => {
                        const angle = (2 * Math.PI * eIdx) / count - Math.PI / 2;
                        const ex = 170 + radius * Math.cos(angle);
                        const ey = 170 + radius * Math.sin(angle);

                        return (
                          <g key={eIdx}>
                            <circle
                              cx={ex}
                              cy={ey}
                              r="5"
                              fill="#38bdf8"
                              stroke="#0284c7"
                              strokeWidth="1.5"
                              filter="url(#electronGlow)"
                            />
                            <text
                              x={ex}
                              y={ey + 2.5}
                              textAnchor="middle"
                              fill="#082f49"
                              fontSize="6.5"
                              fontWeight="black"
                            >
                              -
                            </text>
                          </g>
                        );
                      })}
                    </g>
                  );
                })}

                {/* Central Dense Nucleus */}
                <circle cx="170" cy="170" r="26" fill="url(#nucleusGlow)" />
                <circle cx="170" cy="170" r="26" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />

                {/* Nucleus Content: Protons & Neutrons */}
                <text x="170" y="166" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="black" fontFamily="monospace">
                  {selectedElement.protons}p⁺
                </text>
                <text x="170" y="178" textAnchor="middle" fill="#fed7aa" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  {selectedElement.neutrons}n⁰
                </text>
              </svg>
            </div>

            {/* Note on modern quantum reality */}
            <div className={`text-[10px] text-center leading-relaxed max-w-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              <em>Pedagogical note:</em> Bohr orbits show simplified 2D energy levels. Modern quantum chemistry demonstrates electrons occupy 3D probability clouds (orbitals), not literal planetary tracks.
            </div>
          </div>

          {/* Scientific Specification & Valency Analysis */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                  Chemical Identity &amp; Notation
                </span>
                <h3 className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                  {selectedElement.name} ({selectedElement.symbol})
                </h3>
              </div>

              <div
                className={`px-3 py-1.5 rounded-2xl text-xs font-mono font-black border ${
                  isDark ? "bg-purple-950/60 text-purple-300 border-purple-500/40" : "bg-purple-100 text-purple-900 border-purple-300"
                }`}
              >
                ^{selectedElement.a}_{selectedElement.z}{selectedElement.symbol}
              </div>
            </div>

            {/* Subatomic Counts Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div
                className={`p-3 rounded-2xl border text-center ${
                  isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Protons (p⁺)</span>
                <span className="text-lg font-black text-rose-400 font-mono">{selectedElement.protons}</span>
                <span className="text-[9px] text-slate-500 block">Z = {selectedElement.z}</span>
              </div>

              <div
                className={`p-3 rounded-2xl border text-center ${
                  isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Neutrons (n⁰)</span>
                <span className="text-lg font-black text-amber-400 font-mono">{selectedElement.neutrons}</span>
                <span className="text-[9px] text-slate-500 block">A - Z = {selectedElement.a - selectedElement.z}</span>
              </div>

              <div
                className={`p-3 rounded-2xl border text-center ${
                  isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Electrons (e⁻)</span>
                <span className="text-lg font-black text-sky-400 font-mono">{selectedElement.electrons}</span>
                <span className="text-[9px] text-slate-500 block">Neutral Atom</span>
              </div>
            </div>

            {/* Electron Configuration */}
            <div
              className={`p-4 rounded-2xl border space-y-1.5 ${
                isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span className={isDark ? "text-slate-300" : "text-slate-700"}>Electron Shell Distribution:</span>
                <span className="font-mono text-purple-400 font-black">
                  {selectedElement.shells.join(", ")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedElement.shellNames.map((s, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold border ${
                      idx === selectedElement.shellNames.length - 1
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40 font-black"
                        : isDark
                        ? "bg-black/30 text-slate-300 border-white/10"
                        : "bg-white text-slate-700 border-slate-300"
                    }`}
                  >
                    {s} {idx === selectedElement.shellNames.length - 1 ? "(Valence Shell)" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Valence Electrons vs Valency Crucial Distinction Box */}
            <div
              className={`p-4 rounded-2xl border space-y-2 ${
                isDark ? "bg-amber-500/10 border-amber-500/30" : "bg-amber-50 border-amber-300"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                  ⚖️ Valence Electrons vs Valency
                </span>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full font-black ${
                    isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-200 text-amber-950"
                  }`}
                >
                  Valency: {selectedElement.valency}
                </span>
              </div>

              <div className="text-xs space-y-1.5 leading-relaxed">
                <div>
                  <strong className={isDark ? "text-white" : "text-slate-900"}>Valence Electrons:</strong>{" "}
                  <span className="font-mono font-bold">{selectedElement.valenceElectrons}</span> in outermost shell.
                </div>
                <div>
                  <strong className={isDark ? "text-white" : "text-slate-900"}>Combining Capacity (Valency):</strong>{" "}
                  <span className="font-mono font-bold">{selectedElement.valency}</span>.
                </div>
                <p className={`text-[11px] pt-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {selectedElement.valencyExplanation}
                </p>
              </div>
            </div>

            {/* Real World Impact */}
            <div className="text-xs text-slate-400 flex items-start gap-2 pt-1">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Everyday Manifestation:</strong> {selectedElement.realWorldExample}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODULE 2: SUBATOMIC PARTICLES SCIENTIFIC COMPARISON MATRIX
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
          isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              Subatomic Particles: The Triad of Modern Chemistry
            </h2>
          </div>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Every atom in the universe (except ordinary Hydrogen-1) is composed of three fundamental particles:
            protons, neutrons, and electrons.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className={`border-b ${isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"}`}>
                <th className="py-3 px-4 font-mono font-bold uppercase">Particle</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Relative Charge</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Absolute Charge (C)</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Relative Mass</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Absolute Mass (kg)</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Location</th>
                <th className="py-3 px-4 font-mono font-bold uppercase">Role in Chemistry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-500/10">
              <tr className={isDark ? "hover:bg-white/5" : "hover:bg-slate-50"}>
                <td className="py-3.5 px-4 font-bold text-rose-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                  <span>Proton (p⁺)</span>
                </td>
                <td className="py-3.5 px-4 font-mono font-black">+1</td>
                <td className="py-3.5 px-4 font-mono">+1.602 × 10⁻¹⁹ C</td>
                <td className="py-3.5 px-4 font-mono">1 u</td>
                <td className="py-3.5 px-4 font-mono">1.6726 × 10⁻²⁷ kg</td>
                <td className="py-3.5 px-4">Inside Dense Nucleus</td>
                <td className="py-3.5 px-4 text-slate-300">Determines Atomic Number (Z) &amp; Element Identity</td>
              </tr>
              <tr className={isDark ? "hover:bg-white/5" : "hover:bg-slate-50"}>
                <td className="py-3.5 px-4 font-bold text-amber-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span>Neutron (n⁰)</span>
                </td>
                <td className="py-3.5 px-4 font-mono font-black">0 (Neutral)</td>
                <td className="py-3.5 px-4 font-mono">0 C</td>
                <td className="py-3.5 px-4 font-mono">1 u (≈ proton)</td>
                <td className="py-3.5 px-4 font-mono">1.6749 × 10⁻²⁷ kg</td>
                <td className="py-3.5 px-4">Inside Dense Nucleus</td>
                <td className="py-3.5 px-4 text-slate-300">Provides strong nuclear force buffer; determines Isotopes</td>
              </tr>
              <tr className={isDark ? "hover:bg-white/5" : "hover:bg-slate-50"}>
                <td className="py-3.5 px-4 font-bold text-sky-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0"></span>
                  <span>Electron (e⁻)</span>
                </td>
                <td className="py-3.5 px-4 font-mono font-black">-1</td>
                <td className="py-3.5 px-4 font-mono">-1.602 × 10⁻¹⁹ C</td>
                <td className="py-3.5 px-4 font-mono">1/1840 u (Negligible)</td>
                <td className="py-3.5 px-4 font-mono">9.109 × 10⁻³¹ kg</td>
                <td className="py-3.5 px-4">Extra-nuclear Energy Shells</td>
                <td className="py-3.5 px-4 text-slate-300">Governs Chemical Reactivity, Valency &amp; Bonding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================================================
          MODULE 3: INTERACTIVE Z / A & ION CALCULATOR ENGINE
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
          isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              Interactive Atomic Number (Z), Mass Number (A) &amp; Ion Calculator
            </h2>
          </div>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Test your understanding: adjust Atomic Number (Z), Mass Number (A), and Ionic Net Charge to see how protons, neutrons, and electrons are derived in real time.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-400 block">
              1. Atomic Number (Z = Protons):
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={calcZ}
              onChange={(e) => setCalcZ(Math.max(1, parseInt(e.target.value) || 1))}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                isDark ? "bg-white/5 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-400 block">
              2. Mass Number (A = p + n):
            </label>
            <input
              type="number"
              min={calcZ}
              max="70"
              value={calcA}
              onChange={(e) => setCalcA(Math.max(calcZ, parseInt(e.target.value) || calcZ))}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                isDark ? "bg-white/5 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-400 block">
              3. Net Charge (0 for Neutral, + for Cation, - for Anion):
            </label>
            <select
              value={calcCharge}
              onChange={(e) => setCalcCharge(parseInt(e.target.value))}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                isDark ? "bg-white/5 border-white/10 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            >
              <option value="0">0 (Neutral Atom)</option>
              <option value="1">+1 (Monovalent Cation, e.g. Na⁺)</option>
              <option value="2">+2 (Divalent Cation, e.g. Mg²⁺, Ca²⁺)</option>
              <option value="3">+3 (Trivalent Cation, e.g. Al³⁺)</option>
              <option value="-1">-1 (Monovalent Anion, e.g. Cl⁻, F⁻)</option>
              <option value="-2">-2 (Divalent Anion, e.g. O²⁻, S²⁻)</option>
              <option value="-3">-3 (Trivalent Anion, e.g. N³⁻)</option>
            </select>
          </div>
        </div>

        {/* Calculation Output Card */}
        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isDark ? "bg-emerald-950/20 border-emerald-500/30" : "bg-emerald-50/70 border-emerald-300"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold">
            <span className="text-emerald-400">
              SPECIES CLASSIFICATION:{" "}
              {calcCharge === 0 ? "Neutral Atom" : calcCharge > 0 ? `Cation (Positive Ion: +${calcCharge})` : `Anion (Negative Ion: ${calcCharge})`}
            </span>
            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
              Nuclear Formula: ^{calcA}_{calcZ}X^{calcCharge > 0 ? `+${calcCharge}` : calcCharge < 0 ? `${calcCharge}` : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200"}`}>
              <div className="text-[11px] text-slate-400">Protons = Z</div>
              <div className="text-xl font-mono font-black text-rose-400">{calcProtons}</div>
              <div className="text-[10px] text-slate-500">Unchanged in chemical reactions</div>
            </div>

            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200"}`}>
              <div className="text-[11px] text-slate-400">Neutrons = A - Z</div>
              <div className="text-xl font-mono font-black text-amber-400">{calcNeutrons}</div>
              <div className="text-[10px] text-slate-500">{calcA} - {calcZ} = {calcNeutrons}</div>
            </div>

            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200"}`}>
              <div className="text-[11px] text-slate-400">Electrons = Z - Charge</div>
              <div className="text-xl font-mono font-black text-sky-400">{calcElectrons}</div>
              <div className="text-[10px] text-slate-500">{calcZ} - ({calcCharge}) = {calcElectrons}</div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODULE 4: COMPLETE 10-STEP PEDAGOGICAL CURRICULUM
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
          isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-sm"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              The 10-Step Foundational Chemistry Curriculum (Zero to Hero)
            </h2>
          </div>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Follow each structured pedagogical step below to build infallible conceptual mastery.
          </p>
        </div>

        {/* 10 Step Accordion Items */}
        <div className="space-y-3">
          {[
            {
              step: 1,
              title: "Step 1: Simple Definitions (Matter, Atoms, Molecules, Elements & Compounds)",
              content: (
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-amber-400 block font-mono">1. Matter:</strong>
                      <p>Anything that has mass and occupies space (volume). Examples: water, air, iron, wood.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-amber-400 block font-mono">2. Atom:</strong>
                      <p>The smallest particle of an element that retains the chemical properties of that element and takes part in chemical reactions. Examples: H, C, O, Fe.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-amber-400 block font-mono">3. Molecule:</strong>
                      <p>An electrically neutral group of two or more atoms chemically held together. Can be homoatomic (O₂, H₂, N₂) or heteroatomic (H₂O, CO₂, CH₄).</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-amber-400 block font-mono">4. Element vs Compound:</strong>
                      <p>An element contains only ONE type of atom (e.g., pure Gold Au, Iron Fe). A compound contains two or more different elements chemically combined in a fixed ratio by mass (e.g., H₂O in fixed 1:8 mass ratio).</p>
                    </div>
                  </div>
                </div>
              )
            },
            {
              step: 2,
              title: "Step 2: Plain English Analogy (The Alphabet of Nature)",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <p>
                    Think of atoms as <strong>letters of the alphabet</strong> (there are only 118 known letters/elements: H, C, O, N...).
                  </p>
                  <p>
                    When you combine letters in specific rules, you form <strong>words</strong> (molecules). Just as "O" and "N" can make "NO" or "ON", atoms combine to form millions of unique chemical compounds.
                  </p>
                  <p>
                    You cannot have half an alphabet letter, and you cannot have half an atom in ordinary chemical reactions!
                  </p>
                </div>
              )
            },
            {
              step: 3,
              title: "Step 3: Precise Scientific Framework & Chemical Symbolism",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <p>
                    <strong>Jöns Jacob Berzelius (1814)</strong> established the modern system of chemical symbols:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The first letter is ALWAYS capitalized (e.g., Carbon = <strong>C</strong>, Hydrogen = <strong>H</strong>).</li>
                    <li>If two elements share the first letter, a second lowercase letter is added (e.g., Calcium = <strong>Ca</strong>, Chlorine = <strong>Cl</strong>, Cobalt = <strong>Co</strong>).</li>
                    <li>Some symbols derive from Latin names: Sodium from <em>Natrium</em> (<strong>Na</strong>), Potassium from <em>Kalium</em> (<strong>K</strong>), Iron from <em>Ferrum</em> (<strong>Fe</strong>), Copper from <em>Cuprum</em> (<strong>Cu</strong>).</li>
                  </ul>
                </div>
              )
            },
            {
              step: 4,
              title: "Step 4: Electron Shell Distribution (Bohr-Bury Rules)",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <p>
                    Electrons revolve around the nucleus in fixed discrete circular energy levels denoted by letters <strong>K, L, M, N...</strong> or principal quantum numbers <strong>n = 1, 2, 3, 4...</strong>
                  </p>
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 font-mono">
                    Maximum Capacity Rule = 2n²
                    <br />• K shell (n=1): 2(1)² = <strong>2 electrons</strong>
                    <br />• L shell (n=2): 2(2)² = <strong>8 electrons</strong>
                    <br />• M shell (n=3): 2(3)² = <strong>18 electrons</strong> (max 8 until N starts filling, due to stability)
                    <br />• N shell (n=4): 2(4)² = <strong>32 electrons</strong>
                  </div>
                </div>
              )
            },
            {
              step: 5,
              title: "Step 5: Why Atoms Combine (Minimizing Energy & Octet Rule)",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <p>
                    Isolated atoms have high potential energy. Noble gases (He, Ne, Ar) have complete outer shells (duplet for He, octet for Ne and Ar), making them chemically unreactive and stable.
                  </p>
                  <p>
                    All other atoms combine with one another to attain a stable noble gas electronic configuration (an <strong>octet of 8 electrons</strong> in the valence shell, or a duplet of 2 for H). They do this in three ways:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li><strong>Losing electrons</strong> (Metals form positive cations: Na → Na⁺ + e⁻)</li>
                    <li><strong>Gaining electrons</strong> (Non-metals form negative anions: Cl + e⁻ → Cl⁻)</li>
                    <li><strong>Sharing electrons</strong> (Non-metals form covalent bonds: H + H → H:H)</li>
                  </ol>
                </div>
              )
            },
            {
              step: 6,
              title: "Step 6: Solved Example — Finding p, n, e for Isotopes & Ions",
              content: (
                <div className="p-4 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs space-y-2">
                  <div className="text-amber-400 font-bold">
                    Problem: Determine the number of protons, neutrons, and electrons in:
                    <br />(a) Calcium ion (⁴⁰₂₀Ca²⁺)
                    <br />(b) Chloride ion (³⁵₁₇Cl⁻)
                  </div>
                  <div className="text-slate-300 pt-1 space-y-1">
                    <div>
                      <strong>Solution for (a) ⁴⁰₂₀Ca²⁺:</strong>
                      <br />• Atomic number Z = 20 ⇒ <strong>Protons = 20</strong>
                      <br />• Mass number A = 40 ⇒ <strong>Neutrons = A - Z = 40 - 20 = 20</strong>
                      <br />• Charge is +2 (lost 2 electrons) ⇒ <strong>Electrons = 20 - 2 = 18</strong>
                    </div>
                    <div className="pt-2">
                      <strong>Solution for (b) ³⁵₁₇Cl⁻:</strong>
                      <br />• Atomic number Z = 17 ⇒ <strong>Protons = 17</strong>
                      <br />• Mass number A = 35 ⇒ <strong>Neutrons = 35 - 17 = 18</strong>
                      <br />• Charge is -1 (gained 1 electron) ⇒ <strong>Electrons = 17 + 1 = 18</strong>
                    </div>
                  </div>
                </div>
              )
            },
            {
              step: 7,
              title: "Step 7: Examiner Pitfalls & Fatal Traps to Avoid in CBSE Exams",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 space-y-1">
                    <strong>TRAP #1: Thinking Valency equals Valence Electrons!</strong>
                    <p>
                      Oxygen has 6 valence electrons, but its valency is 2. Nitrogen has 5 valence electrons, but its valency is 3. Never write "Valency of Cl is 7"!
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 space-y-1">
                    <strong>TRAP #2: Confusing Mass Number with Atomic Mass!</strong>
                    <p>
                      Mass number (A) is always an integer count of nucleons (p + n). Atomic mass is an average mass taking isotope abundances into account (e.g. Chlorine's atomic mass is 35.5 u).
                    </p>
                  </div>
                </div>
              )
            },
            {
              step: 8,
              title: "Step 8: Active Recall Self-Check (Instant Diagnostic)",
              content: (
                <div className="space-y-3 text-xs">
                  {[
                    {
                      id: "rc1",
                      q: "An element X has mass number 31 and 16 neutrons. What is its atomic number and valency?",
                      ans: "Atomic number Z = 31 - 16 = 15 (Phosphorus). Electron configuration = 2, 8, 5. Valence electrons = 5. Valency = 8 - 5 = 3 (combining capacity is 3)."
                    },
                    {
                      id: "rc2",
                      q: "Why do noble gases like Helium and Argon have valency zero?",
                      ans: "Because Helium has a complete duplet (2 electrons in K shell) and Argon has a complete octet (8 valence electrons). Their atoms have no tendency to lose, gain, or share electrons, so their combining capacity is 0."
                    }
                  ].map((item) => (
                    <div key={item.id} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="font-bold">{item.q}</div>
                      <button
                        onClick={() =>
                          setActiveRecallAnswers((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                        }
                        className="px-3 py-1 rounded-lg text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 cursor-pointer"
                      >
                        {activeRecallAnswers[item.id] ? "Hide Answer" : "Reveal Answer"}
                      </button>
                      {activeRecallAnswers[item.id] && (
                        <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 leading-relaxed">
                          {item.ans}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )
            },
            {
              step: 9,
              title: "Step 9: Conceptual Enrichment (Isotopes & Isobars)",
              content: (
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-purple-400 block font-mono">Isotopes (Same Z, Different A):</strong>
                      <p>Atoms of the SAME element having identical atomic number (same protons) but different mass numbers (different neutrons). Examples: ³⁵₁₇Cl and ³⁷₁₇Cl; ¹₁H (Protium), ²₁H (Deuterium), ³₁H (Tritium). Chemically identical because valence electrons are identical!</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <strong className="text-purple-400 block font-mono">Isobars (Different Z, Same A):</strong>
                      <p>Atoms of DIFFERENT elements having different atomic numbers but the SAME mass number. Example: ⁴⁰₁₈Ar (Argon) and ⁴⁰₂₀Ca (Calcium). Chemically totally different!</p>
                    </div>
                  </div>
                </div>
              )
            },
            {
              step: 10,
              title: "Step 10: Official CBSE Board Examination Questions with Marking Schemes",
              content: (
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between font-bold text-amber-400">
                      <span>[CBSE 2023 Standard • 2 Marks]</span>
                      <span>Q1</span>
                    </div>
                    <p className="text-slate-200">
                      An atom of an element has electronic configuration 2, 8, 2.
                      <br />(a) What is the atomic number of this element?
                      <br />(b) What is its valency and is it a metal or non-metal?
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-slate-300 space-y-1">
                      <div><strong>Official Marking Scheme:</strong></div>
                      <div>(a) Atomic number = 2 + 8 + 2 = <strong>12</strong> (Magnesium, Mg). [1 Mark]</div>
                      <div>(b) Valency = <strong>2</strong> (loses 2 valence electrons). It is a <strong>metal</strong> (electropositive element). [1 Mark]</div>
                    </div>
                  </div>
                </div>
              )
            }
          ].map((item) => {
            const isOpen = openPedagogyStep === item.step;
            return (
              <div
                key={item.step}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? isDark ? "bg-white/5 border-purple-500/40" : "bg-purple-50/40 border-purple-300"
                    : isDark ? "bg-white/[0.02] border-white/10" : "bg-slate-50 border-slate-200"
                }`}
              >
                <button
                  onClick={() => {
                    setOpenPedagogyStep(isOpen ? null : item.step);
                    areteAudio.play("click");
                  }}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className={`text-xs sm:text-sm font-bold ${isOpen ? "text-purple-400" : isDark ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>

                {isOpen && <div className="px-4 pb-4 pt-1 border-t border-purple-500/10">{item.content}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
