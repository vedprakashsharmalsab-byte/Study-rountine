"use client";

import React, { useState } from "react";
import { Maximize2, ZoomOut, Sparkles, Beaker } from "lucide-react";

interface ApparatusSchematicProps {
  type?: string;
  title: string;
  isDark: boolean;
}

export default function ScienceApparatusSchematic({
  type,
  title,
  isDark
}: ApparatusSchematicProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // SVG background and stroke styling based on theme
  const bgClass = isDark ? "bg-[#080d1a] border-white/10" : "bg-slate-50 border-slate-200";
  const strokeColor = isDark ? "#38bdf8" : "#0284c7";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";

  const renderSchematic = () => {
    switch (type) {
      // ---------------------------------------------------------------------
      // 1. THERMAL COMBUSTION / PHOTOLYSIS (Mg RIBBON / AgCl)
      // ---------------------------------------------------------------------
      case "burner_crucible":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experimental Setup: Thermal Combustion / Photolytic Decomposition</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Watch Glass / Crucible */}
              <path d="M 140 150 Q 230 180 320 150" fill="none" stroke={strokeColor} strokeWidth="3" />
              <path d="M 160 152 Q 230 170 300 152" fill={isDark ? "#ffffff" : "#f1f5f9"} opacity="0.85" />
              <text x="230" y="190" fill={textMuted} fontSize="10" textAnchor="middle" fontFamily="monospace">Watch Glass with White MgO Powder (Ash)</text>

              {/* Tongs */}
              <path d="M 70 45 L 205 85 L 210 95" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              <path d="M 70 55 L 205 85 L 208 98" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="205" cy="85" r="4" fill="#ef4444" />
              <text x="80" y="40" fill={textMuted} fontSize="10" fontFamily="monospace">Pair of Tongs</text>

              {/* Magnesium Ribbon */}
              <path d="M 210 95 L 245 105" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
              {/* Dazzling Flame Glow */}
              <circle cx="245" cy="105" r="18" fill="#fbbf24" opacity="0.5" />
              <circle cx="245" cy="105" r="10" fill="#ffffff" />
              <text x="275" y="100" fill="#f59e0b" fontSize="11" fontWeight="black" fontFamily="monospace">Dazzling White Flame</text>

              {/* Bunsen Burner */}
              <rect x="228" y="130" width="34" height="28" fill={isDark ? "#334155" : "#94a3b8"} rx="2" />
              <polygon points="233,130 245,115 257,130" fill="#f97316" opacity="0.9" />
              <polygon points="238,130 245,120 252,130" fill="#fde047" />
              <text x="280" y="145" fill={textMuted} fontSize="10" fontFamily="monospace">Bunsen Burner</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 2. BOILING TUBE THERMAL DECOMPOSITION & PRECIPITATION
      // ---------------------------------------------------------------------
      case "test_tube_boiling":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Boiling Tube & Thermal Decomposition / Precipitation</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Test Tube Holder */}
              <rect x="60" y="65" width="140" height="12" fill="#64748b" rx="2" />
              <circle cx="200" cy="71" r="13" fill="none" stroke="#94a3b8" strokeWidth="3" />
              <text x="70" y="55" fill={textMuted} fontSize="10" fontFamily="monospace">Test Tube Holder</text>

              {/* Boiling Tube Tilted */}
              <g transform="rotate(35 220 90)">
                <rect x="195" y="25" width="40" height="125" rx="18" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={strokeColor} strokeWidth="3" opacity="0.92" />
                {/* Solid / Residue at bottom */}
                <path d="M 196 115 Q 215 125 234 115 L 234 132 A 18 18 0 0 1 196 132 Z" fill="#eab308" opacity="0.9" />
                <text x="215" y="135" fill="#000" fontSize="9" textAnchor="middle" fontWeight="bold">Residue</text>
                {/* Rising gas fumes */}
                <circle cx="205" cy="65" r="5" fill="#a855f7" opacity="0.7" />
                <circle cx="225" cy="55" r="6" fill="#a855f7" opacity="0.7" />
                <circle cx="212" cy="40" r="7" fill="#a855f7" opacity="0.7" />
              </g>

              {/* Brown Fumes / Gas Label */}
              <path d="M 260 50 Q 300 25 340 38" fill="none" stroke="#b45309" strokeWidth="2.5" strokeDasharray="3,3" />
              <text x="345" y="42" fill="#b45309" fontSize="11" fontWeight="black" fontFamily="monospace">Dense Brown Fumes (NO₂) / Pungent SO₂</text>

              {/* Flame under tube */}
              <polygon points="205,175 218,150 230,175" fill="#f97316" />
              <polygon points="209,175 218,158 226,175" fill="#fde047" />
              <rect x="200" y="175" width="36" height="20" fill={isDark ? "#334155" : "#94a3b8"} rx="2" />
              <text x="150" y="188" fill={textMuted} fontSize="10" fontFamily="monospace">Bunsen Flame</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 3. ELECTROLYTIC DECOMPOSITION OF WATER (2:1 VOLUME RATIO)
      // ---------------------------------------------------------------------
      case "electrolysis_cell":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Hoffman Voltameter (Water Electrolysis — 2:1 H₂:O₂ Ratio)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Beaker / Plastic Mug */}
              <rect x="140" y="35" width="180" height="120" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke={strokeColor} strokeWidth="3" opacity="0.9" />
              {/* Water Level */}
              <rect x="142" y="60" width="176" height="93" fill="#38bdf8" opacity="0.25" />
              <text x="150" y="75" fill={textMuted} fontSize="9" fontFamily="monospace">Acidified H₂O (Dil H₂SO₄)</text>

              {/* Cathode Tube (Left) - Double Gas Volume 2x (H2) */}
              <rect x="170" y="18" width="32" height="105" rx="5" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
              <rect x="171" y="19" width="30" height="48" fill="#38bdf8" opacity="0.4" />
              <text x="186" y="38" fill="#0284c7" fontSize="10" fontWeight="black" textAnchor="middle">H₂ (2x)</text>
              <text x="186" y="50" fill={textMuted} fontSize="7" textAnchor="middle">Double Vol</text>
              <rect x="182" y="78" width="7" height="45" fill="#475569" />

              {/* Anode Tube (Right) - Single Gas Volume 1x (O2) */}
              <rect x="258" y="18" width="32" height="105" rx="5" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              <rect x="259" y="19" width="30" height="24" fill="#f87171" opacity="0.4" />
              <text x="274" y="33" fill="#dc2626" fontSize="10" fontWeight="black" textAnchor="middle">O₂ (1x)</text>
              <text x="274" y="44" fill={textMuted} fontSize="7" textAnchor="middle">Half Vol</text>
              <rect x="270" y="78" width="7" height="45" fill="#475569" />

              {/* Rubber Stoppers */}
              <rect x="166" y="152" width="40" height="10" fill="#1e293b" />
              <rect x="254" y="152" width="40" height="10" fill="#1e293b" />

              {/* 6V Battery & Circuit */}
              <path d="M 186 162 L 186 182 L 210 182" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
              <path d="M 274 162 L 274 182 L 250 182" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              {/* Battery Plates */}
              <line x1="210" y1="174" x2="210" y2="190" stroke="#0ea5e9" strokeWidth="3" />
              <line x1="222" y1="178" x2="222" y2="186" stroke="#64748b" strokeWidth="2" />
              <line x1="235" y1="174" x2="235" y2="190" stroke="#ef4444" strokeWidth="3" />
              <line x1="248" y1="178" x2="248" y2="186" stroke="#64748b" strokeWidth="2" />
              <text x="175" y="196" fill="#0ea5e9" fontSize="10" fontWeight="bold">- Cathode</text>
              <text x="285" y="196" fill="#ef4444" fontSize="10" fontWeight="bold">+ Anode</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 4. SINGLE DISPLACEMENT (IRON NAIL IN CuSO4)
      // ---------------------------------------------------------------------
      case "displacement_beaker":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Single Displacement Reaction (Fe + CuSO₄ ➔ FeSO₄ + Cu)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Test Tube 1: Initial Deep Blue CuSO4 */}
              <g transform="translate(60, 25)">
                <rect x="25" y="10" width="50" height="130" rx="16" fill="#0284c7" opacity="0.35" stroke="#0284c7" strokeWidth="2.5" />
                <text x="50" y="155" fill="#0284c7" fontSize="11" fontWeight="black" textAnchor="middle">Initial CuSO₄</text>
                <text x="50" y="168" fill={textMuted} fontSize="9" textAnchor="middle">(Deep Sky Blue)</text>
                {/* Clean Grey Iron Nail */}
                <line x1="50" y1="30" x2="50" y2="120" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
                <text x="50" y="22" fill={textMuted} fontSize="8" textAnchor="middle">Clean Nail</text>
              </g>

              {/* Reaction Arrow */}
              <g transform="translate(175, 75)">
                <path d="M 10 20 L 75 20" stroke="#f59e0b" strokeWidth="3" />
                <polygon points="75,15 85,20 75,25" fill="#f59e0b" />
                <text x="45" y="10" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">After 20 min</text>
                <text x="45" y="35" fill={textMuted} fontSize="8" textAnchor="middle">Fe displaces Cu</text>
              </g>

              {/* Test Tube 2: Final Pale Green FeSO4 + Brown Cu Coated Nail */}
              <g transform="translate(275, 25)">
                <rect x="25" y="10" width="50" height="130" rx="16" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2.5" />
                <text x="50" y="155" fill="#10b981" fontSize="11" fontWeight="black" textAnchor="middle">Final FeSO₄</text>
                <text x="50" y="168" fill={textMuted} fontSize="9" textAnchor="middle">(Pale Light Green)</text>
                {/* Copper coated nail */}
                <line x1="50" y1="30" x2="50" y2="120" stroke="#9a3412" strokeWidth="7" strokeLinecap="round" />
                <text x="85" y="85" fill="#b45309" fontSize="10" fontWeight="black">Reddish-Brown Cu Coat</text>
              </g>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 5. CARBON DIOXIDE GAS & LIME WATER TEST
      // ---------------------------------------------------------------------
      case "limewater_flask":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Reaction of Carbonate with Acid & Lime Water Confirmation</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Conical Reaction Flask (Left) */}
              <polygon points="70,160 145,160 120,80 95,80" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              <rect x="95" y="55" width="25" height="28" fill="none" stroke={strokeColor} strokeWidth="2" />
              <rect x="78" y="142" width="60" height="16" fill="#f59e0b" opacity="0.35" />
              <text x="108" y="154" fill={textPrimary} fontSize="9" textAnchor="middle" fontWeight="bold">Na₂CO₃ + Dil HCl</text>

              {/* Thistle Funnel dipping below liquid */}
              <line x1="102" y1="20" x2="102" y2="148" stroke="#94a3b8" strokeWidth="2.5" />
              <polygon points="95,20 109,20 102,32" fill="#94a3b8" />
              <text x="65" y="30" fill={textMuted} fontSize="9" fontFamily="monospace">Thistle Funnel</text>

              {/* Glass Delivery Tube with Cork */}
              <rect x="94" y="55" width="27" height="10" fill="#1e293b" />
              <path d="M 115 62 L 115 35 L 305 35 L 305 125" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <text x="210" y="28" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">CO₂ Gas Delivery Tube</text>

              {/* Lime Water Test Tube (Right) */}
              <rect x="290" y="65" width="34" height="100" rx="14" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={strokeColor} strokeWidth="2.5" />
              {/* Milky Lime Water (CaCO3 ppt) */}
              <rect x="291" y="105" width="32" height="58" rx="12" fill="#e2e8f0" opacity="0.9" />
              <text x="307" y="178" fill="#10b981" fontSize="11" fontWeight="black" textAnchor="middle">Milky Ca(OH)₂</text>
              <text x="307" y="190" fill={textMuted} fontSize="8" textAnchor="middle">(Insoluble White CaCO₃ ↓)</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 6. METAL + ACID EVOLUTION OF H2 GAS & POP TEST
      // ---------------------------------------------------------------------
      case "gas_delivery_trough":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Reaction of Zn + Acid & Hydrogen Gas Soap Bubble POP Test</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Conical Flask */}
              <polygon points="50,160 130,160 105,80 80,80" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              <rect x="80" y="60" width="25" height="20" fill="none" stroke={strokeColor} strokeWidth="2" />
              <circle cx="85" cy="150" r="5" fill="#94a3b8" />
              <circle cx="95" cy="152" r="6" fill="#94a3b8" />
              <circle cx="106" cy="148" r="5" fill="#94a3b8" />
              <text x="90" y="176" fill={textMuted} fontSize="9" textAnchor="middle" fontFamily="monospace">Zn Granules + Dil H₂SO₄</text>

              {/* Delivery Tube to Soap Trough */}
              <path d="M 92 68 L 92 35 L 240 35 L 240 140" fill="none" stroke="#38bdf8" strokeWidth="3" />

              {/* Soap Water Trough */}
              <rect x="195" y="120" width="95" height="45" rx="5" fill="#0284c7" opacity="0.25" stroke={strokeColor} strokeWidth="2" />
              <text x="242" y="180" fill={textMuted} fontSize="9" textAnchor="middle">Soap Water Trough</text>

              {/* Rising Soap Bubbles with H2 */}
              <circle cx="242" cy="105" r="10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="265" cy="80" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="295" cy="55" r="14" fill="#38bdf8" opacity="0.25" stroke="#38bdf8" strokeWidth="2" />
              <text x="295" y="58" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">H₂</text>

              {/* Burning Candle Pop Test */}
              <rect x="355" y="50" width="14" height="40" fill="#fde047" rx="1" />
              <polygon points="357,50 362,36 367,50" fill="#f97316" />
              <circle cx="362,34" r="5" fill="#ef4444" opacity="0.8" />
              <text x="362" y="22" fill="#ef4444" fontSize="13" fontWeight="black" textAnchor="middle">"POP!" Sound</text>
              <text x="362" y="105" fill={textMuted} fontSize="9" textAnchor="middle">Burning Candle</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 7. ELECTRICAL CONDUCTIVITY OF SOLUTIONS
      // ---------------------------------------------------------------------
      case "conductivity_circuit":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Electrical Conductivity of Solutions (Ion Presence & Glow)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Beaker with Solution */}
              <rect x="140" y="70" width="180" height="100" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              <rect x="142" y="90" width="176" height="78" fill="#0284c7" opacity="0.25" />
              {/* Rubber Cork with Iron Nails */}
              <rect x="180" y="145" width="100" height="18" fill="#334155" rx="3" />
              <line x1="205" y1="145" x2="205" y2="95" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
              <line x1="255" y1="145" x2="255" y2="95" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
              <text x="230" y="185" fill={textMuted} fontSize="9" textAnchor="middle">Rubber Cork & Iron Nails</text>

              {/* Wire Loop */}
              <path d="M 205 150 L 205 185 L 60 185 L 60 35 L 210 35" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <path d="M 255 150 L 255 185 L 400 185 L 400 35 L 250 35" fill="none" stroke="#ef4444" strokeWidth="2.5" />

              {/* 6V Battery */}
              <line x1="100" y1="25" x2="100" y2="45" stroke="#38bdf8" strokeWidth="3" />
              <line x1="110" y1="30" x2="110" y2="40" stroke="#64748b" strokeWidth="2" />
              <text x="105" y="18" fill={textMuted} fontSize="9" textAnchor="middle">6V Battery</text>

              {/* Glowing Bulb */}
              <circle cx="230" cy="35" r="14" fill="#fbbf24" opacity="0.95" stroke="#f59e0b" strokeWidth="2" />
              <text x="230" y="39" fill="#000" fontSize="9" fontWeight="bold" textAnchor="middle">Bulb</text>
              <text x="230" y="58" fill="#eab308" fontSize="10" fontWeight="black" textAnchor="middle">GLOWS (Acids / Free H⁺ Ions)</text>
              <text x="230" y="115" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="middle">Aqueous Test Solution</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 8. CONDITIONS FOR RUSTING (3 TEST TUBES)
      // ---------------------------------------------------------------------
      case "rusting_tubes":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Conditions Necessary for Rusting (3 Test Tube Investigation)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Tube A: Water + Air (RUSTS) */}
              <g transform="translate(45, 25)">
                <rect x="20" y="10" width="45" height="120" rx="14" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
                <rect x="21" y="65" width="43" height="63" fill="#38bdf8" opacity="0.3" rx="10" />
                <line x1="42" y1="45" x2="42" y2="115" stroke="#9a3412" strokeWidth="7" strokeLinecap="round" />
                <text x="42" y="150" fill="#ef4444" fontSize="11" fontWeight="black" textAnchor="middle">Tube A: RUSTS</text>
                <text x="42" y="164" fill={textMuted} fontSize="9" textAnchor="middle">Air + Water Present</text>
              </g>

              {/* Tube B: Boiled Water + Oil (NO RUST) */}
              <g transform="translate(180, 25)">
                <rect x="20" y="10" width="45" height="120" rx="14" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
                <rect x="21" y="48" width="43" height="14" fill="#f59e0b" opacity="0.75" />
                <rect x="21" y="62" width="43" height="66" fill="#38bdf8" opacity="0.2" rx="10" />
                <line x1="42" y1="55" x2="42" y2="115" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
                <text x="42" y="150" fill="#10b981" fontSize="11" fontWeight="black" textAnchor="middle">Tube B: Clean</text>
                <text x="42" y="164" fill={textMuted} fontSize="9" textAnchor="middle">Boiled H₂O + Oil (No O₂)</text>
              </g>

              {/* Tube C: Dry Air + CaCl2 (NO RUST) */}
              <g transform="translate(315, 25)">
                <rect x="20" y="10" width="45" height="120" rx="14" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
                <rect x="21" y="105" width="43" height="23" fill="#ffffff" opacity="0.7" rx="8" />
                <line x1="42" y1="35" x2="42" y2="95" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
                <text x="42" y="150" fill="#10b981" fontSize="11" fontWeight="black" textAnchor="middle">Tube C: Clean</text>
                <text x="42" y="164" fill={textMuted} fontSize="9" textAnchor="middle">Dry Air + CaCl₂ (No H₂O)</text>
              </g>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 9. GLASS SLAB REFRACTION & LATERAL DISPLACEMENT
      // ---------------------------------------------------------------------
      case "glass_slab":
      case "general_apparatus":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Optical Ray Diagram: Glass Slab Refraction & Lateral Displacement (d)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Glass Slab */}
              <rect x="110" y="50" width="240" height="85" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2.5" />
              <text x="230" y="95" fill={textPrimary} fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.85">Glass Slab (Optically Denser Medium)</text>

              {/* Normal 1 */}
              <line x1="165" y1="20" x2="165" y2="80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
              {/* Incident Ray */}
              <line x1="105" y1="20" x2="165" y2="50" stroke="#ef4444" strokeWidth="2.5" />
              <text x="120" y="32" fill="#ef4444" fontSize="10" fontWeight="bold">Incident Ray (∠i)</text>

              {/* Refracted Ray inside slab */}
              <line x1="165" y1="50" x2="210" y2="135" stroke="#ef4444" strokeWidth="2.5" />
              <text x="198" y="110" fill="#ef4444" fontSize="9" fontWeight="bold">∠r</text>

              {/* Normal 2 */}
              <line x1="210" y1="105" x2="210" y2="165" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />

              {/* Emergent Ray */}
              <line x1="210" y1="135" x2="270" y2="165" stroke="#ef4444" strokeWidth="2.5" />
              <text x="280" y="168" fill="#ef4444" fontSize="10" fontWeight="bold">Emergent Ray (∠e)</text>

              {/* Original Undeviated Path */}
              <line x1="165" y1="50" x2="315" y2="125" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />

              {/* Lateral Shift (d) bracket */}
              <line x1="238" y1="149" x2="265" y2="98" stroke="#10b981" strokeWidth="2" />
              <text x="278" y="122" fill="#10b981" fontSize="11" fontWeight="black">Shift 'd'</text>
              <text x="230" y="188" fill={textMuted} fontSize="10" textAnchor="middle" fontFamily="monospace">∠i = ∠e (Incident Ray || Emergent Ray)</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 10. GLASS PRISM DISPERSION (VIBGYOR)
      // ---------------------------------------------------------------------
      case "glass_prism":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Optical Ray Diagram: Dispersion of White Light into Spectrum (VIBGYOR)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Triangular Prism */}
              <polygon points="210,35 130,155 290,155" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2.5" />
              <text x="210" y="140" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle">Glass Prism</text>

              {/* Incident White Light Beam */}
              <line x1="35" y1="110" x2="155" y2="100" stroke="#f8fafc" strokeWidth="4" />
              <text x="45" y="100" fill={textPrimary} fontSize="10" fontWeight="bold">White Light Beam</text>

              {/* Dispersed inside prism */}
              <line x1="155" y1="100" x2="230" y2="95" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="155" y1="100" x2="240" y2="115" stroke="#a855f7" strokeWidth="1.5" />

              {/* Emergent VIBGYOR Spectrum to Screen */}
              <line x1="230" y1="95" x2="380" y2="60" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="232" y1="98" x2="380" y2="72" stroke="#f97316" strokeWidth="2" />
              <line x1="235" y1="102" x2="380" y2="84" stroke="#eab308" strokeWidth="2" />
              <line x1="237" y1="107" x2="380" y2="96" stroke="#22c55e" strokeWidth="2" />
              <line x1="238" y1="110" x2="380" y2="108" stroke="#06b6d4" strokeWidth="2" />
              <line x1="239" y1="113" x2="380" y2="120" stroke="#3b82f6" strokeWidth="2" />
              <line x1="240" y1="115" x2="380" y2="132" stroke="#a855f7" strokeWidth="2.5" />

              {/* Screen */}
              <rect x="380" y="50" width="10" height="92" fill="#94a3b8" rx="2" />
              <text x="400" y="65" fill="#ef4444" fontSize="10" fontWeight="bold">Red (Least Bent)</text>
              <text x="400" y="135" fill="#a855f7" fontSize="10" fontWeight="bold">Violet (Most Bent)</text>
              <text x="230" y="185" fill={textMuted} fontSize="10" textAnchor="middle" fontFamily="monospace">λ_Red &gt; λ_Violet  ⟹  Speed_Red &gt; Speed_Violet in Glass</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 11. VARIEGATED LEAF STARCH TEST (CHLOROPHYLL ESSENTIAL)
      // ---------------------------------------------------------------------
      case "leaf_starch":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: 4-Stage Variegated Leaf Iodine Starch Test (Activity 5.1)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Step 1: Variegated Leaf */}
              <g transform="translate(15, 25)">
                <ellipse cx="40" cy="65" rx="35" ry="50" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <path d="M 25 35 Q 40 25 55 35 Q 65 65 55 95 Q 40 105 25 95 Q 15 65 25 35 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                <text x="40" y="135" fill="#15803d" fontSize="10" fontWeight="bold" textAnchor="middle">1. Variegated Leaf</text>
                <text x="40" y="147" fill={textMuted} fontSize="8" textAnchor="middle">Green & Pale Areas</text>
              </g>

              {/* Step 2: Boiling in Water */}
              <g transform="translate(115, 25)">
                <rect x="15" y="45" width="55" height="65" rx="4" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2" />
                <polygon points="35,115 42,102 50,115" fill="#f97316" />
                <text x="42" y="135" fill={textPrimary} fontSize="10" fontWeight="bold" textAnchor="middle">2. Boiling Water</text>
                <text x="42" y="147" fill={textMuted} fontSize="8" textAnchor="middle">Kills Leaf Cells</text>
              </g>

              {/* Step 3: Alcohol Water Bath */}
              <g transform="translate(215, 25)">
                <rect x="5" y="40" width="70" height="70" rx="4" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2" />
                <rect x="28" y="20" width="24" height="75" rx="10" fill="#a78bfa" opacity="0.4" stroke="#8b5cf6" strokeWidth="2" />
                <polygon points="33,115 40,102 47,115" fill="#f97316" />
                <text x="40" y="135" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle">3. Alcohol Bath</text>
                <text x="40" y="147" fill={textMuted} fontSize="8" textAnchor="middle">Extracts Chlorophyll</text>
              </g>

              {/* Step 4: Iodine Starch Test Result */}
              <g transform="translate(325, 25)">
                <ellipse cx="45" cy="65" rx="35" ry="50" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <path d="M 30 35 Q 45 25 60 35 Q 70 65 60 95 Q 45 105 30 95 Q 20 65 30 35 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
                <text x="45" y="135" fill="#38bdf8" fontSize="10" fontWeight="black" textAnchor="middle">4. Iodine Test</text>
                <text x="45" y="147" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="middle">Blue-Black Center!</text>
                <text x="45" y="159" fill={textMuted} fontSize="7" textAnchor="middle">Proves Chlorophyll Essential</text>
              </g>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 12. KOH BELL JAR EXPERIMENT (CO2 ESSENTIAL)
      // ---------------------------------------------------------------------
      case "bell_jar_co2":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: KOH Bell Jar Setup — CO₂ is Essential for Photosynthesis</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Setup A: With KOH (CO2 Absorbed) */}
              <g transform="translate(50, 20)">
                {/* Bell Jar Dome */}
                <path d="M 20 150 L 20 60 C 20 10 140 10 140 60 L 140 150 Z" fill="#38bdf8" opacity="0.15" stroke={strokeColor} strokeWidth="2.5" />
                {/* Glass Plate Base */}
                <rect x="10" y="150" width="140" height="8" rx="2" fill="#64748b" />
                {/* Potted Plant */}
                <rect x="40" y="115" width="40" height="35" rx="3" fill="#b45309" />
                <path d="M 60 115 L 60 70 M 60 85 Q 40 75 45 65 M 60 80 Q 80 70 75 60" stroke="#16a34a" strokeWidth="3" fill="none" />
                {/* Watch Glass with KOH */}
                <ellipse cx="115" cy="142" rx="16" ry="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="112" cy="141" r="2" fill="#ef4444" />
                <circle cx="118" cy="141" r="2" fill="#ef4444" />
                <text x="115" y="132" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">KOH Pellets</text>
                <text x="80" y="172" fill="#ef4444" fontSize="10" fontWeight="black" textAnchor="middle">Plant A: No Starch</text>
                <text x="80" y="184" fill={textMuted} fontSize="8" textAnchor="middle">KOH absorbs all CO₂</text>
              </g>

              {/* Setup B: Control (Without KOH) */}
              <g transform="translate(250, 20)">
                {/* Bell Jar Dome */}
                <path d="M 20 150 L 20 60 C 20 10 140 10 140 60 L 140 150 Z" fill="#38bdf8" opacity="0.15" stroke={strokeColor} strokeWidth="2.5" />
                {/* Glass Plate Base */}
                <rect x="10" y="150" width="140" height="8" rx="2" fill="#64748b" />
                {/* Potted Plant */}
                <rect x="60" y="115" width="40" height="35" rx="3" fill="#b45309" />
                <path d="M 80 115 L 80 70 M 80 85 Q 60 75 65 65 M 80 80 Q 100 70 95 60" stroke="#16a34a" strokeWidth="3" fill="none" />
                <text x="80" y="172" fill="#10b981" fontSize="10" fontWeight="black" textAnchor="middle">Plant B (Control): Starch Formed</text>
                <text x="80" y="184" fill={textMuted} fontSize="8" textAnchor="middle">CO₂ available ➔ Turns Blue-Black</text>
              </g>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 13. RESPIRATION IN GERMINATING SEEDS (CO2 RELEASE)
      // ---------------------------------------------------------------------
      case "respiration_flask":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: CO₂ Produced During Seed Respiration (Water Rise in Tube)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Conical Flask */}
              <polygon points="60,165 150,165 125,75 85,75" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              <rect x="85" y="55" width="40" height="20" fill="none" stroke={strokeColor} strokeWidth="2" />
              {/* Germinating Seeds */}
              {[75, 88, 102, 115, 128, 80, 95, 110, 125, 90, 105].map((x, idx) => (
                <circle key={idx} cx={x} cy={155 - (idx % 3) * 6} r="4.5" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
              ))}
              <text x="105" y="180" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="middle">Moist Germinating Seeds</text>

              {/* Suspended Tube with KOH */}
              <rect x="98" y="85" width="14" height="40" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <line x1="105" y1="58" x2="105" y2="85" stroke="#94a3b8" strokeWidth="1" />
              <text x="80" y="110" fill="#ca8a04" fontSize="8" fontWeight="bold" textAnchor="end">KOH Tube</text>

              {/* Delivery Tube bent into Beaker */}
              <path d="M 112 65 L 112 30 L 320 30 L 320 145" fill="none" stroke="#38bdf8" strokeWidth="3.5" />

              {/* Beaker with Colored Water */}
              <rect x="290" y="105" width="60" height="60" rx="4" fill="#38bdf8" opacity="0.3" stroke={strokeColor} strokeWidth="2" />
              {/* Rising Water Column in Tube */}
              <rect x="318" y="85" width="4" height="60" fill="#0284c7" />
              <polygon points="314,90 320,78 326,90" fill="#ef4444" />
              <text x="335" y="90" fill="#ef4444" fontSize="9" fontWeight="black">Water Level Rises!</text>
              <text x="320" y="180" fill={textMuted} fontSize="8" textAnchor="middle">Colored Water Beaker</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 14. ANAEROBIC FERMENTATION IN YEAST
      // ---------------------------------------------------------------------
      case "yeast_fermentation":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Yeast Anaerobic Fermentation with Liquid Paraffin Seal</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Test Tube 1: Yeast + Glucose (Left) */}
              <rect x="80" y="40" width="50" height="125" rx="16" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              {/* Yeast Mixture */}
              <rect x="82" y="95" width="46" height="68" rx="12" fill="#fed7aa" opacity="0.7" />
              {/* Liquid Paraffin Oil Seal */}
              <rect x="82" y="82" width="46" height="13" fill="#f59e0b" opacity="0.85" />
              <text x="135" y="88" fill="#f59e0b" fontSize="8" fontWeight="bold">Paraffin Oil Seal (No O₂)</text>
              <text x="105" y="130" fill="#9a3412" fontSize="9" fontWeight="bold" textAnchor="middle">Yeast + Glucose</text>

              {/* Delivery Tube */}
              <path d="M 105 45 L 105 25 L 300 25 L 300 115" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <text x="200" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂ Gas Delivery</text>

              {/* Test Tube 2: Lime Water Turning Milky */}
              <rect x="280" y="60" width="40" height="105" rx="14" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={strokeColor} strokeWidth="2.5" />
              <rect x="281" y="95" width="38" height="68" rx="12" fill="#e2e8f0" opacity="0.9" />
              <text x="300" y="180" fill="#10b981" fontSize="10" fontWeight="black" textAnchor="middle">Lime Water Milky</text>
              <text x="300" y="192" fill={textMuted} fontSize="8" textAnchor="middle">CO₂ + Ethanol Formed</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 15. SAPONIFICATION / SOAP PREPARATION & SALTING OUT
      // ---------------------------------------------------------------------
      case "saponification_beaker":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Saponification — Soap Synthesis & Salting Out with NaCl</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Beaker on Tripod */}
              <rect x="150" y="45" width="160" height="95" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
              {/* Oil + NaOH Reaction Mix */}
              <rect x="152" y="70" width="156" height="68" fill="#fde047" opacity="0.35" />
              {/* Precipitated Soap Layer on top */}
              <rect x="152" y="65" width="156" height="14" fill="#ffffff" opacity="0.9" stroke="#94a3b8" strokeWidth="1" />
              <text x="230" y="75" fill="#000" fontSize="9" fontWeight="black" textAnchor="middle">Curdy Soap Layer (Salting Out with NaCl)</text>
              <text x="230" y="105" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="middle">Vegetable Oil + 20% NaOH Solution</text>

              {/* Glass Stirring Rod */}
              <line x1="260" y1="15" x2="210" y2="120" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
              <text x="270" y="25" fill="#38bdf8" fontSize="9" fontWeight="bold">Glass Stirring Rod</text>

              {/* Wire Gauze & Tripod Stand */}
              <line x1="130" y1="140" x2="330" y2="140" stroke="#64748b" strokeWidth="3" />
              <line x1="150" y1="140" x2="135" y2="185" stroke="#64748b" strokeWidth="3" />
              <line x1="310" y1="140" x2="325" y2="185" stroke="#64748b" strokeWidth="3" />

              {/* Burner Flame */}
              <polygon points="220,165 230,143 240,165" fill="#f97316" />
              <polygon points="223,165 230,150 237,165" fill="#fde047" />
              <text x="230" y="185" fill={textMuted} fontSize="9" textAnchor="middle">Gentle Heating</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 16. INDICATORS COLOR SPECTRUM (LITMUS, PHENOLPHTHALEIN, METHYL ORANGE)
      // ---------------------------------------------------------------------
      case "indicators_strip":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Spectrum: Indicator Color Transitions in Acid vs Alkaline Solutions</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Row 1: Litmus */}
              <g transform="translate(30, 25)">
                <text x="0" y="16" fill={textPrimary} fontSize="10" fontWeight="bold">Litmus Paper:</text>
                <rect x="120" y="2" width="120" height="22" rx="5" fill="#ef4444" opacity="0.85" />
                <text x="180" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Acid: Turns RED</text>
                <rect x="260" y="2" width="120" height="22" rx="5" fill="#3b82f6" opacity="0.85" />
                <text x="320" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Base: Turns BLUE</text>
              </g>

              {/* Row 2: Phenolphthalein */}
              <g transform="translate(30, 65)">
                <text x="0" y="16" fill={textPrimary} fontSize="10" fontWeight="bold">Phenolphthalein:</text>
                <rect x="120" y="2" width="120" height="22" rx="5" fill="#e2e8f0" opacity="0.4" stroke="#94a3b8" strokeWidth="1" />
                <text x="180" y="17" fill={textPrimary} fontSize="9" fontWeight="bold" textAnchor="middle">Acid: COLORLESS</text>
                <rect x="260" y="2" width="120" height="22" rx="5" fill="#ec4899" opacity="0.85" />
                <text x="320" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Base: BRIGHT PINK</text>
              </g>

              {/* Row 3: Methyl Orange */}
              <g transform="translate(30, 105)">
                <text x="0" y="16" fill={textPrimary} fontSize="10" fontWeight="bold">Methyl Orange:</text>
                <rect x="120" y="2" width="120" height="22" rx="5" fill="#f43f5e" opacity="0.85" />
                <text x="180" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Acid: RED / ORANGE</text>
                <rect x="260" y="2" width="120" height="22" rx="5" fill="#eab308" opacity="0.85" />
                <text x="320" y="17" fill="#000" fontSize="9" fontWeight="black" textAnchor="middle">Base: YELLOW</text>
              </g>

              {/* Row 4: Olfactory Note */}
              <g transform="translate(30, 145)">
                <rect x="0" y="0" width="380" height="28" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="1" />
                <text x="190" y="18" fill={strokeColor} fontSize="9" fontWeight="bold" textAnchor="middle">Olfactory Indicators: Clove Oil / Vanilla / Onion lose smell in Base, retain in Acid</text>
              </g>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 17. STRAIGHT WIRE MAGNETIC FIELD & RIGHT HAND THUMB RULE
      // ---------------------------------------------------------------------
      case "magnetic_wire":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Concentric Magnetic Field Lines around Straight Wire (Activity 12.1)</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Horizontal White Cardboard Sheet (Perspective) */}
              <polygon points="100,120 340,120 380,60 140,60" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
              <text x="125" y="75" fill={textMuted} fontSize="9" fontFamily="monospace">Cardboard Sheet</text>

              {/* Concentric Magnetic Circular Lines */}
              <ellipse cx="240" cy="90" rx="30" ry="14" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <ellipse cx="240" cy="90" rx="60" ry="25" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" />
              <ellipse cx="240" cy="90" rx="90" ry="36" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" />

              {/* Direction Arrows on Field Rings (Anti-clockwise for upward current) */}
              <path d="M 270 90 L 270 85" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="315" y="95" fill="#f59e0b" fontSize="9" fontWeight="bold">B-Field Loops</text>

              {/* Vertical Copper Wire through hole */}
              <line x1="240" y1="15" x2="240" y2="185" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" />
              {/* Upward Current Vector */}
              <line x1="240" y1="45" x2="240" y2="20" stroke="#22c55e" strokeWidth="3" />
              <polygon points="236,20 240,10 244,20" fill="#22c55e" />
              <text x="250" y="25" fill="#22c55e" fontSize="10" fontWeight="black">Current I (Up)</text>

              {/* Right-Hand Thumb Rule Badge */}
              <rect x="25" y="145" width="200" height="35" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#22c55e" strokeWidth="1.5" />
              <text x="125" y="160" fill="#22c55e" fontSize="9" fontWeight="black" textAnchor="middle">Right-Hand Thumb Rule:</text>
              <text x="125" y="172" fill={textMuted} fontSize="8" textAnchor="middle">Thumb = Current ➔ Fingers Curl = B-Field</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // 18. FORCE ON CURRENT CONDUCTOR (KICK EXPERIMENT)
      // ---------------------------------------------------------------------
      case "kick_experiment":
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apparatus Schematic: Kick Experiment — Force on Current Conductor in Magnetic Field</span>
            </div>
            <svg viewBox="0 0 460 200" className="w-full max-w-lg h-auto max-h-[220px]">
              {/* Horseshoe Magnet (N & S Poles) */}
              <path d="M 180 50 C 130 50 130 150 180 150" fill="none" stroke="#64748b" strokeWidth="22" strokeLinecap="round" />
              {/* North Pole (Bottom) */}
              <rect x="170" y="138" width="40" height="24" fill="#ef4444" rx="3" />
              <text x="190" y="154" fill="#fff" fontSize="12" fontWeight="black" textAnchor="middle">N</text>
              {/* South Pole (Top) */}
              <rect x="170" y="38" width="40" height="24" fill="#3b82f6" rx="3" />
              <text x="190" y="54" fill="#fff" fontSize="12" fontWeight="black" textAnchor="middle">S</text>

              {/* Magnetic Field Vector B (N to S upwards) */}
              <line x1="190" y1="135" x2="190" y2="65" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3,3" />
              <polygon points="186,68 190,58 194,68" fill="#f59e0b" />
              <text x="160" y="100" fill="#f59e0b" fontSize="9" fontWeight="bold">B-Field (N ➔ S)</text>

              {/* Suspended Aluminium Rod AB */}
              <line x1="150" y1="98" x2="270" y2="98" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" />
              <text x="140" y="95" fill="#cbd5e1" fontSize="10" fontWeight="bold">A</text>
              <text x="280" y="95" fill="#cbd5e1" fontSize="10" fontWeight="bold">B</text>

              {/* Suspension Wires */}
              <line x1="170" y1="20" x2="170" y2="95" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="250" y1="20" x2="250" y2="95" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Force / Kick Arrow (Deflection) */}
              <path d="M 220 98 Q 240 80 260 70" stroke="#10b981" strokeWidth="3" fill="none" />
              <polygon points="255,67 268,68 263,78" fill="#10b981" />
              <text x="275" y="70" fill="#10b981" fontSize="11" fontWeight="black">Force "Kick" ➔</text>

              {/* Fleming's Left Hand Rule Note */}
              <rect x="290" y="135" width="150" height="42" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#10b981" strokeWidth="1.5" />
              <text x="365" y="152" fill="#10b981" fontSize="9" fontWeight="black" textAnchor="middle">Fleming's Left-Hand Rule:</text>
              <text x="365" y="165" fill={textMuted} fontSize="8" textAnchor="middle">Thumb = Force (Kick)</text>
              <text x="365" y="174" fill={textMuted} fontSize="8" textAnchor="middle">Forefinger = B, Middle = Current I</text>
            </svg>
          </div>
        );

      // ---------------------------------------------------------------------
      // DEFAULT FALLBACK
      // ---------------------------------------------------------------------
      default:
        return (
          <div className="w-full flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Beaker className="w-3.5 h-3.5" />
              <span>Laboratory Experimental Setup & Protocol</span>
            </div>
            <svg viewBox="0 0 460 160" className="w-full max-w-lg h-auto max-h-[180px]">
              <rect x="50" y="30" width="360" height="100" rx="14" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" strokeDasharray="4,4" />
              <circle cx="110" cy="80" r="26" fill="#0284c7" opacity="0.25" stroke="#0284c7" strokeWidth="2" />
              <text x="110" y="86" fill="#0284c7" fontSize="18" textAnchor="middle">🧪</text>
              <text x="155" y="75" fill={textPrimary} fontSize="13" fontWeight="bold">{title}</text>
              <text x="155" y="93" fill={textMuted} fontSize="10" fontFamily="monospace">Standard NCERT Lab Apparatus & Control Bench</text>
              <text x="155" y="108" fill="#10b981" fontSize="9" fontWeight="bold">Observational Protocol Aligned with CBSE Rubric</text>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl border ${bgClass} flex flex-col items-center select-none transition-all`}>
      <div className="w-full flex items-center justify-between gap-2 mb-2">
        <div className="text-[11px] font-mono font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>NCERT Lab Visual Apparatus: {title}</span>
        </div>
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20"
        >
          {isZoomed ? <ZoomOut className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          <span>{isZoomed ? "Reset Zoom" : "Deep View"}</span>
        </button>
      </div>

      <div className={`w-full flex items-center justify-center overflow-x-auto transition-all ${isZoomed ? "scale-105" : ""}`}>
        {renderSchematic()}
      </div>
    </div>
  );
}
