"use client";

import React from "react";

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
  // SVG background and stroke styling based on theme
  const bgClass = isDark ? "bg-[#080d1a] border-white/10" : "bg-slate-50 border-slate-200";
  const strokeColor = isDark ? "#38bdf8" : "#0284c7";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";

  switch (type) {
    case "burner_crucible":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Experimental Apparatus Schematic: Thermal Combustion / Photolysis</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Watch Glass / Crucible */}
            <path d="M 120 140 Q 200 165 280 140" fill="none" stroke={strokeColor} strokeWidth="3" />
            <path d="M 140 142 Q 200 156 260 142" fill={isDark ? "#ffffff" : "#f1f5f9"} opacity="0.8" />
            <text x="200" y="172" fill={textMuted} fontSize="10" textAnchor="middle" fontFamily="monospace">Watch Glass with White MgO Powder</text>

            {/* Tongs */}
            <path d="M 60 40 L 175 75 L 180 85" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <path d="M 60 50 L 175 75 L 178 88" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            <circle cx="175" cy="75" r="4" fill="#ef4444" />
            <text x="70" y="35" fill={textMuted} fontSize="10" fontFamily="monospace">Pair of Tongs</text>

            {/* Magnesium Ribbon with dazzling glow */}
            <path d="M 180 85 L 210 95" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
            {/* Flame / Dazzling Light */}
            <circle cx="210" cy="95" r="14" fill="#fbbf24" opacity="0.6" />
            <circle cx="210" cy="95" r="8" fill="#ffffff" />
            <text x="235" y="90" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">Dazzling White Flame</text>

            {/* Burner */}
            <rect x="195" y="115" width="30" height="25" fill={isDark ? "#334155" : "#94a3b8"} rx="2" />
            <polygon points="200,115 210,102 220,115" fill="#f97316" opacity="0.85" />
            <text x="240" y="130" fill={textMuted} fontSize="10" fontFamily="monospace">Burner</text>
          </svg>
        </div>
      );

    case "test_tube_boiling":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Apparatus Schematic: Boiling Tube & Thermal Decomposition / Precipitation</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Test Tube Holder */}
            <rect x="50" y="55" width="130" height="10" fill="#64748b" rx="2" />
            <circle cx="180" cy="60" r="12" fill="none" stroke="#94a3b8" strokeWidth="3" />
            <text x="60" y="48" fill={textMuted} fontSize="10" fontFamily="monospace">Test Tube Holder</text>

            {/* Boiling Tube Tilted */}
            <g transform="rotate(35 200 80)">
              <rect x="175" y="20" width="35" height="110" rx="16" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={strokeColor} strokeWidth="3" opacity="0.9" />
              {/* Solid / Solution at bottom */}
              <path d="M 176 100 Q 192 110 209 100 L 209 115 A 16 16 0 0 1 176 115 Z" fill="#eab308" opacity="0.85" />
              <text x="193" y="118" fill="#000" fontSize="8" textAnchor="middle" fontWeight="bold">Residue</text>
              {/* Rising gas fumes */}
              <circle cx="185" cy="50" r="4" fill="#a855f7" opacity="0.6" />
              <circle cx="200" cy="40" r="5" fill="#a855f7" opacity="0.6" />
              <circle cx="190" cy="30" r="6" fill="#a855f7" opacity="0.6" />
            </g>

            {/* Brown Fumes / Gas Label */}
            <path d="M 230 45 Q 260 25 290 35" fill="none" stroke="#b45309" strokeWidth="2" strokeDasharray="3,3" />
            <text x="295" y="38" fill="#b45309" fontSize="10" fontWeight="bold" fontFamily="monospace">Dense Brown Fumes (NO₂) / Gas</text>

            {/* Flame under tube */}
            <polygon points="185,155 195,135 205,155" fill="#f97316" />
            <polygon points="188,155 195,142 202,155" fill="#fde047" />
            <rect x="180" y="155" width="30" height="20" fill={isDark ? "#334155" : "#94a3b8"} rx="2" />
            <text x="140" y="170" fill={textMuted} fontSize="10" fontFamily="monospace">Bunsen Flame</text>
          </svg>
        </div>
      );

    case "electrolysis_cell":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>⚡ Apparatus Schematic: Hoffman Electrolytic Voltameter (Water Decomposition)</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Beaker / Plastic Mug */}
            <rect x="120" y="30" width="160" height="110" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke={strokeColor} strokeWidth="3" opacity="0.9" />
            {/* Water Level */}
            <rect x="122" y="55" width="156" height="83" fill="#38bdf8" opacity="0.25" />
            <text x="130" y="70" fill={textMuted} fontSize="9" fontFamily="monospace">Acidified H₂O</text>

            {/* Cathode Tube (Left) - Double Gas Volume 2x */}
            <rect x="145" y="15" width="28" height="95" rx="4" fill="none" stroke="#0ea5e9" strokeWidth="2" />
            <rect x="146" y="16" width="26" height="40" fill="#38bdf8" opacity="0.35" />
            <text x="159" y="35" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">H₂ (2x)</text>
            <rect x="156" y="70" width="6" height="40" fill="#475569" />

            {/* Anode Tube (Right) - Single Gas Volume 1x */}
            <rect x="225" y="15" width="28" height="95" rx="4" fill="none" stroke="#ef4444" strokeWidth="2" />
            <rect x="226" y="16" width="26" height="20" fill="#f87171" opacity="0.35" />
            <text x="239" y="27" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">O₂ (1x)</text>
            <rect x="236" y="70" width="6" height="40" fill="#475569" />

            {/* Rubber Stoppers */}
            <rect x="142" y="138" width="34" height="8" fill="#1e293b" />
            <rect x="222" y="138" width="34" height="8" fill="#1e293b" />

            {/* 6V Battery & Circuit */}
            <path d="M 159 146 L 159 165 L 185 165" fill="none" stroke="#0ea5e9" strokeWidth="2" />
            <path d="M 239 146 L 239 165 L 215 165" fill="none" stroke="#ef4444" strokeWidth="2" />
            {/* Battery Symbol */}
            <line x1="185" y1="158" x2="185" y2="172" stroke="#0ea5e9" strokeWidth="3" />
            <line x1="195" y1="162" x2="195" y2="168" stroke="#64748b" strokeWidth="2" />
            <line x1="205" y1="158" x2="205" y2="172" stroke="#ef4444" strokeWidth="3" />
            <line x1="215" y1="162" x2="215" y2="168" stroke="#64748b" strokeWidth="2" />
            <text x="180" y="178" fill="#0ea5e9" fontSize="9" fontWeight="bold">- (Cathode)</text>
            <text x="215" y="178" fill="#ef4444" fontSize="9" fontWeight="bold">+ (Anode)</text>
            <text x="200" y="152" fill={textMuted} fontSize="9" textAnchor="middle" fontFamily="monospace">6V Battery</text>
          </svg>
        </div>
      );

    case "displacement_beaker":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Apparatus Schematic: Single Displacement (Fe + CuSO₄)</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Test Tube 1: Initial Deep Blue CuSO4 */}
            <g transform="translate(40, 20)">
              <rect x="30" y="10" width="45" height="120" rx="14" fill="#0284c7" opacity="0.3" stroke="#0284c7" strokeWidth="2.5" />
              <text x="52" y="145" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">Initial CuSO₄</text>
              <text x="52" y="158" fill={textMuted} fontSize="8" textAnchor="middle">(Deep Blue)</text>
              {/* Shiny clean nail */}
              <line x1="52" y1="30" x2="52" y2="110" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Reaction Arrow */}
            <path d="M 150 75 L 210 75" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="180" y="65" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">After 20 min</text>

            {/* Test Tube 2: Final Pale Green FeSO4 + Red-Brown Nail */}
            <g transform="translate(190, 20)">
              <rect x="30" y="10" width="45" height="120" rx="14" fill="#10b981" opacity="0.25" stroke="#10b981" strokeWidth="2.5" />
              <text x="52" y="145" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Final FeSO₄</text>
              <text x="52" y="158" fill={textMuted} fontSize="8" textAnchor="middle">(Pale Light Green)</text>
              {/* Copper coated nail */}
              <line x1="52" y1="30" x2="52" y2="110" stroke="#b45309" strokeWidth="6" strokeLinecap="round" />
              <text x="85" y="80" fill="#b45309" fontSize="9" fontWeight="bold">Brown Cu Coat</text>
            </g>
          </svg>
        </div>
      );

    case "limewater_flask":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Apparatus Schematic: Carbon Dioxide Gas & Lime Water Test</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Reaction Flask (Left) */}
            <polygon points="70,140 130,140 110,70 90,70" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
            <rect x="90" y="45" width="20" height="25" fill="none" stroke={strokeColor} strokeWidth="2" />
            <rect x="75" y="125" width="50" height="14" fill="#f59e0b" opacity="0.3" />
            <text x="100" y="135" fill={textPrimary} fontSize="8" textAnchor="middle" fontWeight="bold">Na₂CO₃ + HCl</text>

            {/* Thistle Funnel */}
            <line x1="95" y1="20" x2="95" y2="120" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="90,20 100,20 95,30" fill="#94a3b8" />
            <text x="60" y="25" fill={textMuted} fontSize="8" fontFamily="monospace">Thistle Funnel</text>

            {/* Delivery Tube bent over */}
            <path d="M 105 50 L 105 35 L 260 35 L 260 115" fill="none" stroke="#38bdf8" strokeWidth="3" />
            <text x="180" y="28" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂ Gas Transfer Tube</text>

            {/* Lime Water Test Tube (Right) */}
            <rect x="245" y="60" width="30" height="90" rx="12" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={strokeColor} strokeWidth="2.5" />
            {/* Milky Lime water */}
            <rect x="246" y="95" width="28" height="52" rx="10" fill="#e2e8f0" opacity="0.85" />
            <text x="260" y="165" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Milky Ca(OH)₂</text>
            <text x="260" y="175" fill={textMuted} fontSize="8" textAnchor="middle">(Turbid CaCO₃ ↓)</text>
          </svg>
        </div>
      );

    case "gas_delivery_trough":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Apparatus Schematic: Metal + Acid → H₂ Gas Soap Bubble POP Test</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Conical Flask */}
            <polygon points="50,140 120,140 95,70 75,70" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
            <rect x="75" y="55" width="20" height="15" fill="none" stroke={strokeColor} strokeWidth="2" />
            <circle cx="80" cy="130" r="4" fill="#94a3b8" />
            <circle cx="90" cy="132" r="5" fill="#94a3b8" />
            <circle cx="98" cy="129" r="4" fill="#94a3b8" />
            <text x="85" y="155" fill={textMuted} fontSize="9" textAnchor="middle" fontFamily="monospace">Zn Granules + Dil. H₂SO₄</text>

            {/* Delivery Tube into Trough */}
            <path d="M 85 60 L 85 30 L 220 30 L 220 125" fill="none" stroke="#38bdf8" strokeWidth="3" />

            {/* Soap Solution Trough */}
            <rect x="180" y="110" width="80" height="40" rx="4" fill="#0284c7" opacity="0.2" stroke={strokeColor} strokeWidth="2" />
            <text x="220" y="165" fill={textMuted} fontSize="9" textAnchor="middle">Soap Trough</text>

            {/* Rising Soap Bubbles */}
            <circle cx="220" cy="95" r="9" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="240" cy="70" r="11" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="265" cy="45" r="13" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" strokeWidth="2" />
            <text x="265" y="48" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">H₂</text>

            {/* Burning Candle Pop Test */}
            <rect x="315" y="40" width="12" height="35" fill="#fde047" rx="1" />
            <polygon points="317,40 321,28 325,40" fill="#f97316" />
            <circle cx="321" cy="26" r="4" fill="#ef4444" opacity="0.8" />
            <text x="321" y="18" fill="#ef4444" fontSize="11" fontWeight="black" textAnchor="middle">"POP!"</text>
            <text x="321" y="85" fill={textMuted} fontSize="8" textAnchor="middle">Burning Candle</text>
          </svg>
        </div>
      );

    case "conductivity_circuit":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>⚡ Apparatus Schematic: Electrical Conductivity of Solutions (Ion Presence)</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Beaker with Solution */}
            <rect x="120" y="60" width="160" height="90" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2.5" />
            <rect x="122" y="80" width="156" height="68" fill="#0284c7" opacity="0.25" />
            {/* Rubber Cork with Iron Nails */}
            <rect x="160" y="130" width="80" height="15" fill="#334155" rx="3" />
            <line x1="180" y1="130" x2="180" y2="85" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
            <line x1="220" y1="130" x2="220" y2="85" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
            <text x="200" y="165" fill={textMuted} fontSize="9" textAnchor="middle">Rubber Cork & Iron Nails</text>

            {/* Wire to Battery, Bulb, Switch */}
            <path d="M 180 135 L 180 170 L 60 170 L 60 30 L 200 30" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <path d="M 220 135 L 220 170 L 340 170 L 340 30 L 230 30" fill="none" stroke="#ef4444" strokeWidth="2.5" />

            {/* 6V Battery */}
            <line x1="90" y1="20" x2="90" y2="40" stroke="#38bdf8" strokeWidth="3" />
            <line x1="100" y1="25" x2="100" y2="35" stroke="#64748b" strokeWidth="2" />
            <text x="95" y="15" fill={textMuted} fontSize="9" textAnchor="middle">6V Battery</text>

            {/* Bulb (Glowing for Acid, Off for Alcohol) */}
            <circle cx="215" cy="30" r="12" fill="#fbbf24" opacity="0.9" stroke="#f59e0b" strokeWidth="2" />
            <text x="215" y="34" fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">Bulb</text>
            <text x="215" y="52" fill="#eab308" fontSize="9" fontWeight="bold" textAnchor="middle">GLOWS (H⁺ ions)</text>
          </svg>
        </div>
      );

    case "rusting_tubes":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🧪 Apparatus Schematic: Conditions for Rusting (3 Test Tube Investigation)</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Tube A: Water + Air (RUSTS) */}
            <g transform="translate(30, 20)">
              <rect x="20" y="10" width="40" height="110" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
              <rect x="21" y="60" width="38" height="58" fill="#38bdf8" opacity="0.3" rx="8" />
              {/* Heavy Rust Nail */}
              <line x1="40" y1="40" x2="40" y2="105" stroke="#9a3412" strokeWidth="6" strokeLinecap="round" />
              <text x="40" y="135" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Tube A: RUSTS</text>
              <text x="40" y="148" fill={textMuted} fontSize="8" textAnchor="middle">Water + Air</text>
            </g>

            {/* Tube B: Boiled Water + Oil Layer (NO RUST) */}
            <g transform="translate(150, 20)">
              <rect x="20" y="10" width="40" height="110" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
              <rect x="21" y="45" width="38" height="12" fill="#f59e0b" opacity="0.7" />
              <rect x="21" y="57" width="38" height="61" fill="#38bdf8" opacity="0.2" rx="8" />
              {/* Clean Nail */}
              <line x1="40" y1="50" x2="40" y2="105" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
              <text x="40" y="135" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Tube B: Clean</text>
              <text x="40" y="148" fill={textMuted} fontSize="8" textAnchor="middle">Boiled H₂O + Oil</text>
            </g>

            {/* Tube C: Dry Air + Anhydrous CaCl2 (NO RUST) */}
            <g transform="translate(270, 20)">
              <rect x="20" y="10" width="40" height="110" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" />
              <rect x="21" y="95" width="38" height="23" fill="#ffffff" opacity="0.6" rx="6" />
              {/* Clean Nail */}
              <line x1="40" y1="30" x2="40" y2="85" stroke="#cbd5e1" strokeWidth="5" strokeLinecap="round" />
              <text x="40" y="135" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Tube C: Clean</text>
              <text x="40" y="148" fill={textMuted} fontSize="8" textAnchor="middle">Dry Air + CaCl₂</text>
            </g>
          </svg>
        </div>
      );

    case "glass_slab":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>⚡ Optical Ray Diagram: Rectangular Glass Slab & Lateral Displacement</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Glass Slab */}
            <rect x="100" y="45" width="200" height="75" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2.5" />
            <text x="200" y="85" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle" opacity="0.8">Glass Slab (Optically Denser)</text>

            {/* Normal 1 */}
            <line x1="145" y1="20" x2="145" y2="70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
            {/* Incident Ray */}
            <line x1="90" y1="20" x2="145" y2="45" stroke="#ef4444" strokeWidth="2.5" />
            <text x="105" y="32" fill="#ef4444" fontSize="9" fontWeight="bold">Incident Ray (∠i)</text>

            {/* Refracted Ray inside slab */}
            <line x1="145" y1="45" x2="185" y2="120" stroke="#ef4444" strokeWidth="2.5" />
            <text x="175" y="98" fill="#ef4444" fontSize="8" fontWeight="bold">∠r</text>

            {/* Normal 2 */}
            <line x1="185" y1="95" x2="185" y2="145" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* Emergent Ray */}
            <line x1="185" y1="120" x2="240" y2="145" stroke="#ef4444" strokeWidth="2.5" />
            <text x="250" y="148" fill="#ef4444" fontSize="9" fontWeight="bold">Emergent Ray (∠e)</text>

            {/* Original Undeviated Path */}
            <line x1="145" y1="45" x2="275" y2="105" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />

            {/* Lateral Shift (d) bracket */}
            <line x1="210" y1="131" x2="230" y2="85" stroke="#10b981" strokeWidth="2" />
            <text x="240" y="105" fill="#10b981" fontSize="10" fontWeight="black">Shift 'd'</text>
            <text x="200" y="170" fill={textMuted} fontSize="9" textAnchor="middle" fontFamily="monospace">∠i = ∠e (Incident Ray || Emergent Ray)</text>
          </svg>
        </div>
      );

    case "glass_prism":
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🌈 Optical Ray Diagram: Dispersion of White Light into Spectrum (VIBGYOR)</span>
          </div>
          <svg viewBox="0 0 400 180" className="w-full max-w-md h-40">
            {/* Triangular Prism */}
            <polygon points="180,30 110,140 250,140" fill="#38bdf8" opacity="0.2" stroke={strokeColor} strokeWidth="2.5" />
            <text x="180" y="125" fill={textPrimary} fontSize="10" fontWeight="bold" textAnchor="middle">Glass Prism</text>

            {/* Incident White Light Beam */}
            <line x1="30" y1="100" x2="135" y2="90" stroke="#f8fafc" strokeWidth="3.5" />
            <text x="40" y="90" fill={textPrimary} fontSize="9" fontWeight="bold">White Light Beam</text>

            {/* Refracted & Dispersed rays inside prism */}
            <line x1="135" y1="90" x2="200" y2="85" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="135" y1="90" x2="210" y2="105" stroke="#a855f7" strokeWidth="1.5" />

            {/* Emergent VIBGYOR Spectrum to Screen */}
            <line x1="200" y1="85" x2="330" y2="55" stroke="#ef4444" strokeWidth="2.5" />
            <line x1="202" y1="88" x2="330" y2="65" stroke="#f97316" strokeWidth="2" />
            <line x1="205" y1="92" x2="330" y2="75" stroke="#eab308" strokeWidth="2" />
            <line x1="207" y1="97" x2="330" y2="85" stroke="#22c55e" strokeWidth="2" />
            <line x1="208" y1="100" x2="330" y2="95" stroke="#06b6d4" strokeWidth="2" />
            <line x1="209" y1="103" x2="330" y2="105" stroke="#3b82f6" strokeWidth="2" />
            <line x1="210" y1="105" x2="330" y2="115" stroke="#a855f7" strokeWidth="2.5" />

            {/* Screen */}
            <rect x="330" y="45" width="8" height="80" fill="#94a3b8" rx="2" />
            <text x="345" y="58" fill="#ef4444" fontSize="9" fontWeight="bold">R (Least Bent)</text>
            <text x="345" y="118" fill="#a855f7" fontSize="9" fontWeight="bold">V (Most Bent)</text>
            <text x="200" y="165" fill={textMuted} fontSize="9" textAnchor="middle" fontFamily="monospace">λ_Red &gt; λ_Violet  ⟹  Speed_Red &gt; Speed_Violet</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`p-4 rounded-2xl border ${bgClass} flex flex-col items-center select-none`}>
          <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <span>🔬 Laboratory Experimental Setup Overview</span>
          </div>
          <svg viewBox="0 0 400 140" className="w-full max-w-md h-32">
            <rect x="50" y="30" width="300" height="80" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeColor} strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="100" cy="70" r="22" fill="#0284c7" opacity="0.2" stroke="#0284c7" strokeWidth="2" />
            <text x="100" y="74" fill="#0284c7" fontSize="16" textAnchor="middle">🧪</text>
            <text x="140" y="65" fill={textPrimary} fontSize="12" fontWeight="bold">{title}</text>
            <text x="140" y="82" fill={textMuted} fontSize="9" fontFamily="monospace">Controlled Experimental Environment & Observation Protocol</text>
          </svg>
        </div>
      );
  }
}
