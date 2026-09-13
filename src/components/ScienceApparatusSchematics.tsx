"use client";

import React, { useState } from "react";
import { Maximize2, ZoomOut, Sparkles, Beaker, Award, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

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
  const bgCard = isDark ? "bg-[#080d1a] border-cyan-500/20" : "bg-cyan-50/30 border-cyan-200/80";
  const labelBg = isDark ? "rgba(15, 23, 42, 0.92)" : "rgba(255, 255, 255, 0.96)";
  const labelBorder = isDark ? "rgba(56, 189, 248, 0.25)" : "rgba(2, 132, 199, 0.2)";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#94a3b8" : "#64748b";

  const renderSchematic = () => {
    switch (type) {
      // =====================================================================
      // 1. THERMAL COMBUSTION OF MAGNESIUM RIBBON & WATCH GLASS ASH (ACT 1.1)
      // =====================================================================
      case "burner_crucible":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradFlameBurner" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#06b6d4" />
                <stop offset="65%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
              <radialGradient id="gradDazzleGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="30%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="gradTongs" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="gradRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <filter id="shadowApp" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Lab Bench Surface */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" strokeLinecap="round" />
            <line x1="40" y1="344" x2="720" y2="344" stroke={isDark ? "#1e293b" : "#e2e8f0"} strokeWidth="2" />

            {/* BUNSEN BURNER */}
            {/* Cast Iron Heavy Base */}
            <rect x="360" y="325" width="80" height="15" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <rect x="385" y="315" width="30" height="10" fill="#334155" />
            {/* Gas Inlet Tube */}
            <path d="M 370 320 Q 340 320 310 335" fill="none" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
            {/* Burner Brass Collar with Air Hole */}
            <rect x="393" y="295" width="14" height="20" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="400" cy="305" r="3" fill="#0f172a" />
            {/* Chrome Burner Barrel */}
            <rect x="394" y="215" width="12" height="80" fill="url(#gradTongs)" stroke="#475569" strokeWidth="1" />
            {/* Burner Flame Tip */}
            <path d="M 392 215 C 392 165 400 135 400 130 C 400 135 408 165 408 215 Z" fill="url(#gradFlameBurner)" opacity="0.9" />
            <path d="M 396 215 C 396 185 400 165 400 160 C 400 165 404 185 404 215 Z" fill="#67e8f9" opacity="0.95" />

            {/* PAIR OF CRUCIBLE TONGS (HELD FROM LEFT) */}
            <path d="M 90 90 Q 200 130 305 160" fill="none" stroke="url(#gradTongs)" strokeWidth="7" strokeLinecap="round" filter="url(#shadowApp)" />
            <path d="M 90 105 Q 200 145 305 168" fill="none" stroke="url(#gradTongs)" strokeWidth="7" strokeLinecap="round" filter="url(#shadowApp)" />
            {/* Tongs Pivot Screw */}
            <circle cx="215" cy="140" r="5" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
            {/* Tongs Grip Jaw holding ribbon */}
            <path d="M 305 160 L 330 172" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
            <path d="M 305 168 L 328 177" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

            {/* MAGNESIUM RIBBON */}
            <path d="M 326 174 L 385 178" stroke="url(#gradRibbon)" strokeWidth="8" strokeLinecap="round" />
            {/* Silver-white lustrous sheen lines on ribbon */}
            <line x1="335" y1="172" x2="375" y2="176" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

            {/* DAZZLING WHITE FLAME & GLOW BURST AT BURNING TIP */}
            <circle cx="395" cy="176" r="45" fill="url(#gradDazzleGlow)" />
            <circle cx="395" cy="176" r="22" fill="#ffffff" />
            {/* Sparkling Starburst Rays */}
            <path d="M 395 140 L 395 212 M 359 176 L 431 176 M 370 151 L 420 201 M 370 201 L 420 151" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />

            {/* Falling MgO White Powder Particles */}
            {[195, 220, 245, 270, 290].map((y, idx) => (
              <circle key={idx} cx={400 + (idx % 2 === 0 ? -4 : 6)} cy={y} r="2.5" fill="#f8fafc" opacity="0.85" />
            ))}

            {/* WATCH GLASS WITH COLLECTED WHITE MgO ASH */}
            <g transform="translate(325, 305)">
              {/* Glass Concave Curve */}
              <path d="M 15 25 Q 75 48 135 25" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 20 26 Q 75 45 130 26" fill={isDark ? "rgba(56, 189, 248, 0.15)" : "rgba(2, 132, 199, 0.1)"} />
              {/* White MgO Powder Ash Mound */}
              <path d="M 40 28 Q 75 20 110 28 Q 75 38 40 28 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" filter="url(#shadowApp)" />
              <circle cx="70" cy="27" r="2" fill="#94a3b8" />
              <circle cx="82" cy="26" r="1.5" fill="#94a3b8" />
            </g>

            {/* CALLOUT BADGE 1: PAIR OF TONGS */}
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#shadowApp)" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="800">Pair of Tongs</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Holds ribbon safely at 45°</text>
              <circle cx="160" cy="21" r="3.5" fill="#38bdf8" />
              <path d="M 160 21 L 205 115" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 2: MAGNESIUM RIBBON & CLEANING */}
            <g transform="translate(230, 25)">
              <rect x="0" y="0" width="185" height="52" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" filter="url(#shadowApp)" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Magnesium Ribbon (Mg)</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Cleaned with sandpaper first</text>
              <text x="12" y="44" fill="#10b981" fontSize="8" fontWeight="bold">Removes basic MgCO₃ layer</text>
              <circle cx="92" cy="52" r="3.5" fill="#f59e0b" />
              <path d="M 92 52 L 340 170" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 3: DAZZLING FLAME */}
            <g transform="translate(505, 55)">
              <rect x="0" y="0" width="200" height="52" rx="8" fill={labelBg} stroke="#ef4444" strokeWidth="1.5" filter="url(#shadowApp)" />
              <text x="12" y="18" fill="#ef4444" fontSize="11" fontWeight="900">Dazzling White Flame</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">2Mg(s) + O₂(g) ➔ 2MgO(s)</text>
              <text x="12" y="44" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Protect eyes with UV goggles</text>
              <circle cx="0" cy="26" r="3.5" fill="#ef4444" />
              <path d="M 0 26 L 435 160" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 4: WATCH GLASS & MgO ASH */}
            <g transform="translate(505, 275)">
              <rect x="0" y="0" width="200" height="54" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" filter="url(#shadowApp)" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">Watch Glass with MgO Ash</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">White powder formed</text>
              <text x="12" y="45" fill="#0284c7" fontSize="8" fontWeight="bold">MgO + H₂O ➔ Mg(OH)₂ (Basic, turns Red litmus Blue)</text>
              <circle cx="0" cy="27" r="3.5" fill="#10b981" />
              <path d="M 0 27 L 450 325" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Why clean ribbon with sandpaper? To remove inert layer of basic magnesium carbonate (MgCO₃·Mg(OH)₂) formed by slow reaction with moist air.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 2. THERMAL DECOMPOSITION IN BOILING TUBE (FeSO4 / Pb(NO3)2) (ACT 1.5 & 1.6)
      // =====================================================================
      case "test_tube_boiling":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradGlassTube" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gradBrownFumes" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#b45309" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#78350f" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradFlameBoil" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="40%" stopColor="#06b6d4" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* Bunsen Burner */}
            <rect x="290" y="325" width="70" height="15" rx="3" fill="#1e293b" />
            <rect x="310" y="245" width="14" height="80" fill="#94a3b8" />
            <path d="M 307 245 C 307 195 317 170 317 165 C 317 170 327 195 327 245 Z" fill="url(#gradFlameBoil)" opacity="0.9" />

            {/* TEST TUBE HOLDER (WOODEN CLAMP FROM LEFT) */}
            <g transform="translate(60, 150)">
              <rect x="0" y="0" width="160" height="18" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
              {/* Clamping Band encircling the tube */}
              <circle cx="160" cy="9" r="16" fill="none" stroke="#64748b" strokeWidth="4" />
              <rect x="145" y="4" width="30" height="10" fill="#cbd5e1" rx="2" />
            </g>

            {/* TILTED HARD-GLASS BOILING TUBE (35 DEGREE ANGLE AWAY FROM OPERATOR) */}
            <g transform="translate(230, 90) rotate(32)">
              {/* Glass Tube Body */}
              <rect x="0" y="0" width="48" height="190" rx="22" fill="url(#gradGlassTube)" stroke="#38bdf8" strokeWidth="3" />
              {/* Tube Lip Rim */}
              <ellipse cx="24" cy="4" rx="26" ry="6" fill="none" stroke="#38bdf8" strokeWidth="3" />

              {/* Boiling Crystals / Residue at bottom */}
              <path d="M 3 145 C 3 145 24 140 45 145 L 45 168 C 45 180 36 187 24 187 C 12 187 3 180 3 168 Z" fill="#eab308" />
              {/* Crystalline speckles */}
              <circle cx="18" cy="160" r="3" fill="#ca8a04" />
              <circle cx="28" cy="155" r="2.5" fill="#ca8a04" />
              <circle cx="32" cy="168" r="3" fill="#78350f" />

              {/* Water Droplets Condensing on Cooler Upper Walls */}
              <circle cx="8" cy="70" r="2" fill="#38bdf8" opacity="0.8" />
              <circle cx="12" cy="85" r="2.5" fill="#38bdf8" opacity="0.8" />
              <circle cx="38" cy="75" r="2" fill="#38bdf8" opacity="0.8" />
              <circle cx="36" cy="95" r="3" fill="#38bdf8" opacity="0.8" />
            </g>

            {/* DENSE BILLOWING REDDISH-BROWN GAS (NO2) / PUNGENT SO2 ESCAPING MOUTH */}
            <g transform="translate(370, 70)">
              <path d="M 0 40 Q 40 10 90 25 Q 140 40 180 15 Q 210 -10 240 10" fill="none" stroke="url(#gradBrownFumes)" strokeWidth="18" strokeLinecap="round" opacity="0.85" />
              <path d="M 20 50 Q 70 25 130 35 Q 190 45 230 25" fill="none" stroke="url(#gradBrownFumes)" strokeWidth="12" strokeLinecap="round" opacity="0.75" />
              <circle cx="80" cy="25" r="16" fill="#b45309" opacity="0.4" filter="url(#shadowApp)" />
              <circle cx="150" cy="30" r="22" fill="#b45309" opacity="0.35" filter="url(#shadowApp)" />
            </g>

            {/* MOIST LITMUS PAPER HELD NEAR TUBE MOUTH */}
            <g transform="translate(480, 110)">
              <rect x="0" y="0" width="55" height="16" rx="2" fill="#3b82f6" transform="rotate(-20)" />
              <rect x="0" y="0" width="25" height="16" rx="2" fill="#ef4444" transform="rotate(-20)" />
              <text x="35" y="32" fill="#ef4444" fontSize="9" fontWeight="bold">Turns Red (Acidic Gas)</text>
            </g>

            {/* CALLOUT BADGE 1: TEST TUBE HOLDER */}
            <g transform="translate(50, 60)">
              <rect x="0" y="0" width="165" height="46" rx="8" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="800">Test Tube Holder</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Clamp held securely at upper 1/3</text>
              <circle cx="165" cy="23" r="3" fill="#38bdf8" />
              <path d="M 165 23 L 220 150" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 2: TILT DIRECTION SAFETY */}
            <g transform="translate(180, 25)">
              <rect x="0" y="0" width="190" height="48" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Tilted Mouth (Safety Rule)</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Point mouth away from self & others</text>
              <text x="12" y="42" fill="#ef4444" fontSize="8" fontWeight="bold">Do not inhale fumes directly</text>
            </g>

            {/* CALLOUT BADGE 3: BROWN FUMES & RESIDUE */}
            <g transform="translate(510, 20)">
              <rect x="0" y="0" width="210" height="65" rx="8" fill={labelBg} stroke="#b45309" strokeWidth="1.5" />
              <text x="12" y="18" fill="#b45309" fontSize="11" fontWeight="900">Dense Brown Fumes (NO₂ Gas)</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">2Pb(NO₃)₂ ➔ 2PbO + 4NO₂↑ + O₂↑</text>
              <text x="12" y="46" fill="#ca8a04" fontSize="8.5" fontWeight="bold">Residue: Yellow Lead Monoxide (PbO)</text>
              <text x="12" y="58" fill="#10b981" fontSize="8" fontWeight="bold">Color change: White powder ➔ Yellow</text>
            </g>

            {/* CALLOUT BADGE 4: FeSO4 ALTERNATIVE */}
            <g transform="translate(510, 185)">
              <rect x="0" y="0" width="210" height="54" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">If FeSO₄·7H₂O is Heated:</text>
              <text x="12" y="32" fill={textMuted} fontSize="8.5">Green crystals ➔ White ➔ Reddish-brown Fe₂O₃</text>
              <text x="12" y="46" fill="#f59e0b" fontSize="8.5" fontWeight="bold">Evolves choking SO₂ + SO₃ (smell of burning sulfur)</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.15)"} stroke="#f59e0b" strokeWidth="1" />
              <text x="15" y="19" fill="#f59e0b" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Decrepitation sound is heard when heating dry lead nitrate. Brown fumes turn moist blue litmus red (acidic NO₂). O₂ gas relights glowing splinter.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 3. ELECTROLYSIS OF WATER (2:1 VOLUME RATIO) (ACT 1.8)
      // =====================================================================
      case "electrolysis_cell":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradWaterBath" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="gradH2Gas" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="gradO2Gas" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#be123c" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* PLASTIC MUG APPARATUS CONTAINER */}
            <rect x="230" y="60" width="300" height="230" rx="16" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#38bdf8" strokeWidth="3.5" opacity="0.9" />
            {/* Mug Handle */}
            <path d="M 230 100 C 180 100 180 220 230 220" fill="none" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" />

            {/* Acidified Water Fill Level */}
            <rect x="233" y="110" width="294" height="176" rx="8" fill="url(#gradWaterBath)" />
            <path d="M 233 110 Q 306 106 380 110 Q 454 114 527 110" stroke="#0ea5e9" strokeWidth="2" fill="none" />

            {/* RUBBER STOPPERS AT BASE */}
            <rect x="280" y="280" width="60" height="18" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <rect x="420" y="280" width="60" height="18" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />

            {/* CARBON / GRAPHITE ROD ELECTRODES */}
            <rect x="303" y="140" width="14" height="145" rx="3" fill="#475569" stroke="#334155" strokeWidth="2" />
            <rect x="443" y="140" width="14" height="145" rx="3" fill="#475569" stroke="#334155" strokeWidth="2" />

            {/* INVERTED TEST TUBE 1: CATHODE (LEFT) - DOUBLE VOLUME OF H2 */}
            <rect x="285" y="30" width="50" height="200" rx="10" fill="none" stroke="#38bdf8" strokeWidth="3" />
            {/* H2 Gas Chamber (Double Height: 70px) */}
            <rect x="287" y="32" width="46" height="74" rx="8" fill="url(#gradH2Gas)" />
            {/* Graduation Ticks */}
            {[45, 60, 75, 90, 105].map(y => (
              <line key={y} x1="287" y1={y} x2="295" y2={y} stroke="#38bdf8" strokeWidth="1.5" />
            ))}
            {/* Gas Bubbles rising at Cathode */}
            {[120, 140, 160, 180, 200, 215].map((y, idx) => (
              <circle key={idx} cx={300 + (idx % 2 === 0 ? 3 : 17)} cy={y} r="3" fill="#ffffff" opacity="0.85" />
            ))}

            {/* INVERTED TEST TUBE 2: ANODE (RIGHT) - SINGLE VOLUME OF O2 */}
            <rect x="425" y="30" width="50" height="200" rx="10" fill="none" stroke="#f43f5e" strokeWidth="3" />
            {/* O2 Gas Chamber (Single Height: 37px - EXACTLY HALF OF H2!) */}
            <rect x="427" y="32" width="46" height="37" rx="8" fill="url(#gradO2Gas)" />
            {/* Water fills the remaining 160px */}
            <rect x="427" y="69" width="46" height="159" rx="4" fill="url(#gradWaterBath)" />
            {/* Graduation Ticks */}
            {[45, 60, 75, 90, 105].map(y => (
              <line key={y} x1="427" y1={y} x2="435" y2={y} stroke="#f43f5e" strokeWidth="1.5" />
            ))}
            {/* Gas Bubbles rising at Anode */}
            {[90, 120, 150, 180, 205].map((y, idx) => (
              <circle key={idx} cx={440 + (idx % 2 === 0 ? 3 : 17)} cy={y} r="3" fill="#ffffff" opacity="0.85" />
            ))}

            {/* CONNECTING CIRCUIT (6V BATTERY & SWITCH) */}
            {/* Cathode Wire (Blue / Negative) */}
            <path d="M 310 295 L 310 325 L 180 325 L 180 360 L 330 360" fill="none" stroke="#0284c7" strokeWidth="3" />
            {/* Anode Wire (Red / Positive) */}
            <path d="M 450 295 L 450 325 L 580 325 L 580 360 L 430 360" fill="none" stroke="#ef4444" strokeWidth="3" />

            {/* 6V Battery Symbol */}
            <g transform="translate(350, 345)">
              <line x1="0" y1="5" x2="0" y2="25" stroke="#ef4444" strokeWidth="4" />
              <line x1="12" y1="10" x2="12" y2="20" stroke="#64748b" strokeWidth="2" />
              <line x1="24" y1="5" x2="24" y2="25" stroke="#ef4444" strokeWidth="4" />
              <line x1="36" y1="10" x2="36" y2="20" stroke="#0284c7" strokeWidth="4" />
              <text x="18" y="-4" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle">6V Battery</text>
            </g>

            {/* CALLOUT BADGE 1: CATHODE & HYDROGEN (2x VOL) */}
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="200" height="64" rx="8" fill={labelBg} stroke="#0284c7" strokeWidth="1.5" />
              <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="900">CATHODE (-) ➔ 2x H₂ Gas</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Double volume of gas collected</text>
              <text x="12" y="44" fill="#0284c7" fontSize="8.5" fontWeight="bold">2H⁺ + 2e⁻ ➔ H₂(g)↑</text>
              <text x="12" y="56" fill="#10b981" fontSize="8" fontWeight="bold">Confirmatory test: Burns with "POP"</text>
              <circle cx="200" cy="32" r="3.5" fill="#0284c7" />
              <path d="M 200 32 L 285 55" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 2: ANODE & OXYGEN (1x VOL) */}
            <g transform="translate(515, 30)">
              <rect x="0" y="0" width="200" height="64" rx="8" fill={labelBg} stroke="#ef4444" strokeWidth="1.5" />
              <text x="12" y="18" fill="#ef4444" fontSize="11" fontWeight="900">ANODE (+) ➔ 1x O₂ Gas</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Half the volume of Cathode</text>
              <text x="12" y="44" fill="#ef4444" fontSize="8.5" fontWeight="bold">4OH⁻ ➔ 2H₂O + O₂↑ + 4e⁻</text>
              <text x="12" y="56" fill="#10b981" fontSize="8" fontWeight="bold">Confirmatory test: Rekindles splinter</text>
              <circle cx="0" cy="32" r="3.5" fill="#ef4444" />
              <path d="M 0 32 L 475 50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 3: ACIDIFIED WATER */}
            <g transform="translate(45, 140)">
              <rect x="0" y="0" width="170" height="48" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="800">Acidified Water</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Few drops of Dil H₂SO₄ added</text>
              <text x="12" y="42" fill="#10b981" fontSize="8" fontWeight="bold">Pure water is a poor conductor</text>
              <circle cx="170" cy="24" r="3" fill="#38bdf8" />
              <path d="M 170 24 L 245 150" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(2, 132, 199, 0.15)"} stroke="#0284c7" strokeWidth="1" />
              <text x="15" y="19" fill="#0284c7" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Why is H₂:O₂ volume ratio 2:1? Stoichiometric formula of water (H₂O) contains 2 atoms of H for every 1 atom of O. 2H₂O ➔ 2H₂ + O₂.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 4. SINGLE DISPLACEMENT: Fe NAIL IN CuSO4 (ACT 1.9)
      // =====================================================================
      case "displacement_beaker":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradCuSO4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="gradFeSO4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradIronClean" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="gradCopperDeposit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9a3412" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#7c2d12" />
              </linearGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* TEST TUBE 1: INITIAL STATE (LEFT) */}
            <g transform="translate(130, 60)">
              {/* Stand Clamp */}
              <line x1="-30" y1="280" x2="-30" y2="30" stroke="#64748b" strokeWidth="6" />
              <line x1="-30" y1="60" x2="20" y2="60" stroke="#64748b" strokeWidth="4" />

              {/* Glass Test Tube */}
              <rect x="0" y="20" width="70" height="230" rx="20" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#38bdf8" strokeWidth="3" />
              {/* Deep Blue CuSO4 Solution */}
              <rect x="3" y="80" width="64" height="166" rx="16" fill="url(#gradCuSO4)" />
              <path d="M 3 80 Q 35 76 67 80" stroke="#38bdf8" strokeWidth="2" fill="none" />

              {/* Thread holding nail */}
              <line x1="35" y1="-10" x2="35" y2="90" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Clean Iron Nail */}
              <path d="M 31 90 L 39 90 L 37 200 L 35 215 L 33 200 Z" fill="url(#gradIronClean)" stroke="#475569" strokeWidth="1" />
              {/* Nail Head */}
              <ellipse cx="35" cy="90" rx="8" ry="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />

              <text x="35" y="275" fill="#0284c7" fontSize="13" fontWeight="900" textAnchor="middle">TEST TUBE A</text>
              <text x="35" y="292" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle">Deep Blue CuSO₄</text>
              <text x="35" y="306" fill={textMuted} fontSize="9" textAnchor="middle">+ Clean Iron Nail (Grey)</text>
            </g>

            {/* DYNAMIC REACTION ARROW (CENTER) */}
            <g transform="translate(320, 140)">
              <rect x="0" y="0" width="120" height="60" rx="10" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M 35 30 L 75 30" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
              <polygon points="75,24 88,30 75,36" fill="#f59e0b" />
              <text x="60" y="20" fill="#f59e0b" fontSize="10" fontWeight="900" textAnchor="middle">After 20 min</text>
              <text x="60" y="48" fill={textMuted} fontSize="8.5" textAnchor="middle">Displacement Rxn</text>
            </g>

            {/* TEST TUBE 2: FINAL STATE (RIGHT) */}
            <g transform="translate(490, 60)">
              {/* Stand Clamp */}
              <line x1="100" y1="280" x2="100" y2="30" stroke="#64748b" strokeWidth="6" />
              <line x1="50" y1="60" x2="100" y2="60" stroke="#64748b" strokeWidth="4" />

              {/* Glass Test Tube */}
              <rect x="0" y="20" width="70" height="230" rx="20" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#10b981" strokeWidth="3" />
              {/* Pale Green FeSO4 Solution */}
              <rect x="3" y="80" width="64" height="166" rx="16" fill="url(#gradFeSO4)" />
              <path d="M 3 80 Q 35 76 67 80" stroke="#10b981" strokeWidth="2" fill="none" />

              {/* Thread */}
              <line x1="35" y1="-10" x2="35" y2="90" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Copper Coated Iron Nail (Brownish Coat) */}
              <path d="M 31 90 L 39 90 L 37 200 L 35 215 L 33 200 Z" fill="url(#gradCopperDeposit)" stroke="#7c2d12" strokeWidth="1.5" />
              <ellipse cx="35" cy="90" rx="8" ry="3" fill="#ea580c" stroke="#7c2d12" strokeWidth="1" />
              {/* Porous spongy copper granules on surface */}
              <circle cx="34" cy="130" r="2.5" fill="#7c2d12" />
              <circle cx="37" cy="160" r="3" fill="#7c2d12" />
              <circle cx="33" cy="185" r="2" fill="#7c2d12" />

              <text x="35" y="275" fill="#10b981" fontSize="13" fontWeight="900" textAnchor="middle">TEST TUBE B</text>
              <text x="35" y="292" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle">Pale Green FeSO₄</text>
              <text x="35" y="306" fill="#ea580c" fontSize="9" fontWeight="bold" textAnchor="middle">+ Reddish-Brown Cu Coat</text>
            </g>

            {/* CALLOUT BADGE: REDOX MECHANISM */}
            <g transform="translate(240, 20)">
              <rect x="0" y="0" width="280" height="42" rx="8" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="140" y="18" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Fe(s) + CuSO₄(aq) ➔ FeSO₄(aq) + Cu(s)↓</text>
              <text x="140" y="32" fill={textMuted} fontSize="9" textAnchor="middle">Fe is more reactive than Cu (Displaces Cu²⁺ from solution)</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Two visible changes: (1) Solution color fades from sky blue to pale green due to formation of Fe²⁺ ions. (2) Reddish-brown coating of metallic Cu deposits on nail.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 5. CARBON DIOXIDE EVOLUTION & LIME WATER TEST (ACT 2.5)
      // =====================================================================
      case "limewater_flask":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradAcid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gradMilky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* CONICAL REACTION FLASK (LEFT) */}
            <g transform="translate(120, 110)">
              {/* Flask Body */}
              <polygon points="20,230 180,230 120,50 80,50" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#38bdf8" strokeWidth="3" />
              {/* Neck */}
              <rect x="80" y="20" width="40" height="30" fill="none" stroke="#38bdf8" strokeWidth="3" />

              {/* Dilute HCl + Na2CO3 Solution */}
              <polygon points="23,227 177,227 155,160 45,160" fill="url(#gradAcid)" />
              {/* Na2CO3 Powder Granules */}
              {[45, 65, 85, 105, 125, 145, 55, 75, 95, 115, 135].map((x, idx) => (
                <circle key={idx} cx={x} cy={220 - (idx % 2) * 5} r="3" fill="#cbd5e1" />
              ))}
              {/* Vigorous CO2 Effervescence Bubbles */}
              {[50, 70, 90, 110, 130, 140, 60, 80, 100, 120].map((x, idx) => (
                <circle key={idx} cx={x} cy={170 + (idx % 4) * 12} r="3.5" fill="#ffffff" opacity="0.8" />
              ))}

              {/* Rubber Cork with 2 holes */}
              <rect x="76" y="16" width="48" height="20" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />

              {/* Thistle Funnel (Dips BELOW liquid surface - CRITICAL EXAM PRECAUTION!) */}
              <line x1="88" y1="-50" x2="88" y2="210" stroke="#94a3b8" strokeWidth="3" />
              <polygon points="76,-50 100,-50 88,-30" fill="#94a3b8" />
              <ellipse cx="88" cy="210" rx="3" ry="1.5" fill="#94a3b8" />
            </g>

            {/* BENT GLASS DELIVERY TUBE CONNECTING FLASK TO TEST TUBE */}
            <path
              d="M 226 126 L 226 70 Q 226 50 246 50 L 510 50 Q 530 50 530 70 L 530 250"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Delivery Tube Core */}
            <path
              d="M 226 126 L 226 70 Q 226 50 246 50 L 510 50 Q 530 50 530 70 L 530 250"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* TEST TUBE CONTAINING FRESH LIME WATER (RIGHT) */}
            <g transform="translate(500, 140)">
              {/* Test Tube Stand */}
              <rect x="5" y="195" width="55" height="10" rx="2" fill="#64748b" />

              {/* Glass Test Tube */}
              <rect x="15" y="10" width="36" height="190" rx="16" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#10b981" strokeWidth="3" />

              {/* Milky Lime Water (Insoluble CaCO3 precipitate) */}
              <rect x="18" y="80" width="30" height="117" rx="14" fill="url(#gradMilky)" />
              {/* CO2 Gas Bubbles emerging from tube */}
              <circle cx="30" cy="150" r="3.5" fill="#38bdf8" />
              <circle cx="34" cy="120" r="3" fill="#38bdf8" />
              <circle cx="28" cy="95" r="4" fill="#38bdf8" />

              <text x="33" y="225" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Lime Water</text>
              <text x="33" y="238" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">TURNS MILKY</text>
              <text x="33" y="250" fill={textMuted} fontSize="8" textAnchor="middle">White CaCO₃↓ ppt</text>
            </g>

            {/* CALLOUT BADGE 1: THISTLE FUNNEL PRECAUTION */}
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="200" height="60" rx="8" fill={labelBg} stroke="#ef4444" strokeWidth="1.5" />
              <text x="12" y="18" fill="#ef4444" fontSize="11" fontWeight="900">Thistle Funnel Precaution</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Must dip below acid liquid level</text>
              <text x="12" y="44" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Otherwise CO₂ escapes through funnel!</text>
              <circle cx="160" cy="40" r="3" fill="#ef4444" />
              <path d="M 160 40 L 208 80" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
            </g>

            {/* CALLOUT BADGE 2: FLASK REACTION */}
            <g transform="translate(45, 275)">
              <rect x="0" y="0" width="210" height="50" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Carbonate + Acid Reaction</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Na₂CO₃ + 2HCl ➔ 2NaCl + H₂O + CO₂↑</text>
              <text x="12" y="44" fill="#10b981" fontSize="8" fontWeight="bold">Brisk effervescence observed</text>
            </g>

            {/* CALLOUT BADGE 3: LIME WATER TURNING MILKY & EXCESS CO2 */}
            <g transform="translate(480, 20)">
              <rect x="0" y="0" width="240" height="75" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">Lime Water Test Reactions</text>
              <text x="12" y="32" fill={textMuted} fontSize="8.5">Ca(OH)₂ + CO₂ ➔ CaCO₃↓ (Milky) + H₂O</text>
              <text x="12" y="46" fill="#f59e0b" fontSize="9" fontWeight="bold">On passing EXCESS CO₂:</text>
              <text x="12" y="58" fill="#38bdf8" fontSize="8.5" fontWeight="bold">CaCO₃ + H₂O + CO₂ ➔ Ca(HCO₃)₂ (Soluble/Clear)</text>
              <text x="12" y="70" fill={textMuted} fontSize="7.5">Milkiness disappears with excess CO₂</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Two-step chemical question: Lime water turns milky due to insoluble CaCO₃. On passing excess CO₂, milkiness clears due to formation of soluble Calcium Hydrogen Carbonate.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 6. METAL + ACID EVOLUTION OF H2 GAS & POP TEST (ACT 2.3)
      // =====================================================================
      case "gas_delivery_trough":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <radialGradient id="gradPopShock" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* REACTION CONICAL FLASK WITH Zn GRANULES + ACID */}
            <g transform="translate(100, 130)">
              <polygon points="15,210 165,210 110,60 70,60" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#38bdf8" strokeWidth="3" />
              <rect x="70" y="30" width="40" height="30" fill="none" stroke="#38bdf8" strokeWidth="3" />
              {/* Dilute H2SO4 Solution */}
              <polygon points="18,207 162,207 138,140 42,140" fill="rgba(56, 189, 248, 0.2)" />
              {/* Zinc Granules at bottom */}
              {[45, 65, 85, 105, 125, 55, 75, 95, 115].map((x, idx) => (
                <circle key={idx} cx={x} cy={200 - (idx % 3) * 6} r="5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              ))}
              {/* H2 gas bubbles rising vigorously */}
              {[50, 70, 90, 110, 130].map((x, idx) => (
                <circle key={idx} cx={x} cy={160 + (idx % 3) * 10} r="3" fill="#38bdf8" />
              ))}
              {/* Rubber Cork */}
              <rect x="66" y="26" width="48" height="20" rx="3" fill="#1e293b" />
            </g>

            {/* GLASS DELIVERY TUBE TO TROUGH */}
            <path
              d="M 190 156 L 190 80 Q 190 60 210 60 L 360 60 Q 380 60 380 80 L 380 270"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 190 156 L 190 80 Q 190 60 210 60 L 360 60 Q 380 60 380 80 L 380 270"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* SOAP WATER TROUGH */}
            <g transform="translate(320, 240)">
              {/* Glass Trough Basin */}
              <rect x="0" y="20" width="160" height="80" rx="10" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#0284c7" strokeWidth="3" />
              {/* Soap Solution */}
              <rect x="3" y="45" width="154" height="52" rx="8" fill="rgba(2, 132, 199, 0.35)" />
              {/* Foam lather bubbles on surface */}
              {[20, 40, 60, 80, 100, 120, 140].map((x, idx) => (
                <circle key={idx} cx={x} cy={45} r="6" fill="#38bdf8" opacity="0.6" stroke="#0284c7" strokeWidth="1" />
              ))}
              <text x="80" y="118" fill="#0284c7" fontSize="11" fontWeight="bold" textAnchor="middle">Soap Water Trough</text>
            </g>

            {/* RISING HYDROGEN SOAP BUBBLES */}
            <g transform="translate(420, 100)">
              <circle cx="30" cy="110" r="14" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="70" cy="70" r="18" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="120" cy="20" r="22" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" strokeWidth="3" />
              <text x="120" y="24" fill="#0284c7" fontSize="11" fontWeight="900" textAnchor="middle">H₂</text>
            </g>

            {/* BURNING CANDLE BROUGHT TO BUBBLE & "POP" SOUND */}
            <g transform="translate(590, 70)">
              {/* Candle Body */}
              <rect x="35" y="80" width="22" height="70" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              {/* Wick */}
              <line x1="46" y1="80" x2="46" y2="70" stroke="#78350f" strokeWidth="2" />
              {/* Flame */}
              <path d="M 40 70 C 40 50 46 35 46 30 C 46 35 52 50 52 70 Z" fill="#f97316" />
              <path d="M 43 70 C 43 58 46 48 46 45 C 46 48 49 58 49 70 Z" fill="#fde047" />

              {/* Shockwave Starburst Explosion */}
              <circle cx="-10" cy="45" r="45" fill="url(#gradPopShock)" />
              <path d="M -25 35 L -10 10 L 5 35 L 30 25 L 15 50 L 35 70 L 5 65 L -10 90 L -25 65 L -50 70 L -35 50 L -50 25 Z" fill="#ef4444" stroke="#fef08a" strokeWidth="2" />
              <text x="-10" y="52" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">"POP!"</text>
            </g>

            {/* CALLOUT BADGE 1: REACTION FORMULA */}
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="230" height="54" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Zn + Dil H₂SO₄ ➔ ZnSO₄ + H₂↑</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Exothermic displacement reaction</text>
              <text x="12" y="44" fill="#10b981" fontSize="8.5" fontWeight="bold">Zinc granules provide high surface area</text>
            </g>

            {/* CALLOUT BADGE 2: WHY SOAP SOLUTION */}
            <g transform="translate(300, 20)">
              <rect x="0" y="0" width="210" height="54" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Why Soap Solution?</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">H₂ is insoluble in water & light</text>
              <text x="12" y="44" fill="#0284c7" fontSize="8.5" fontWeight="bold">Traps H₂ in bubbles that rise in air</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(239, 68, 68, 0.12)" : "rgba(239, 68, 68, 0.15)"} stroke="#ef4444" strokeWidth="1" />
              <text x="15" y="19" fill="#ef4444" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Characteristic test for Hydrogen gas: Burns with a distinct "POP" sound. If dilute HNO₃ is used instead, H₂ is NOT evolved because HNO₃ is a strong oxidizing agent!
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 7. ELECTRICAL CONDUCTIVITY OF SOLUTIONS (ACT 2.8)
      // =====================================================================
      case "conductivity_circuit":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <radialGradient id="gradBulbGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* BEAKER WITH TEST SOLUTION (LEFT) */}
            <g transform="translate(140, 120)">
              {/* Glass Beaker (100 mL) */}
              <rect x="0" y="20" width="220" height="195" rx="14" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#38bdf8" strokeWidth="3.5" />
              {/* Beaker Spout */}
              <path d="M 0 20 L -8 12 L 0 10" fill="none" stroke="#38bdf8" strokeWidth="3" />
              {/* Beaker Graduation Marks */}
              <line x1="15" y1="80" x2="35" y2="80" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="15" y1="120" x2="45" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="15" y1="160" x2="35" y2="160" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="50" y="124" fill={textMuted} fontSize="8">100 mL</text>

              {/* Dilute Acid Solution Fill */}
              <rect x="3" y="65" width="214" height="147" rx="10" fill="rgba(56, 189, 248, 0.2)" />
              <path d="M 3 65 Q 110 60 217 65" stroke="#38bdf8" strokeWidth="2" fill="none" />

              {/* Rubber Cork at Beaker Bottom */}
              <rect x="50" y="175" width="120" height="28" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />

              {/* Two Iron Nails inserted into cork */}
              <path d="M 75 185 L 75 90 L 81 90 L 81 185 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
              <path d="M 139 185 L 139 90 L 145 90 L 145 185 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />

              {/* Free Moving Ions in Solution */}
              <g transform="translate(60, 110)">
                <circle cx="10" cy="15" r="7" fill="#0284c7" />
                <text x="10" y="19" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">H⁺</text>
                <circle cx="45" cy="30" r="8" fill="#10b981" />
                <text x="45" y="34" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Cl⁻</text>
                <circle cx="85" cy="18" r="7" fill="#0284c7" />
                <text x="85" y="22" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">H⁺</text>
              </g>
            </g>

            {/* ELECTRICAL CIRCUIT WIRES CONNECTING BULB & 6V BATTERY */}
            {/* Wire from Left Nail to Battery */}
            <path d="M 218 305 L 218 335 L 70 335 L 70 60 L 250 60" fill="none" stroke="#0284c7" strokeWidth="3" />
            {/* 6V Battery */}
            <g transform="translate(250, 50)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#0284c7" strokeWidth="4" />
              <line x1="10" y1="5" x2="10" y2="15" stroke="#64748b" strokeWidth="2" />
              <line x1="20" y1="0" x2="20" y2="20" stroke="#ef4444" strokeWidth="4" />
              <line x1="30" y1="5" x2="30" y2="15" stroke="#64748b" strokeWidth="2" />
              <text x="15" y="-6" fill={textPrimary} fontSize="10" fontWeight="bold" textAnchor="middle">6V Battery</text>
            </g>

            {/* Wire to Key Switch */}
            <path d="M 280 60 L 350 60" stroke="#ef4444" strokeWidth="3" fill="none" />
            {/* Switch (Plug Key Closed) */}
            <rect x="350" y="52" width="30" height="16" rx="3" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="365" cy="60" r="4" fill="#ef4444" />
            <text x="365" y="44" fill={textMuted} fontSize="9" textAnchor="middle">Key (Closed)</text>

            {/* Wire from Switch to Bulb */}
            <path d="M 380 60 L 480 60" stroke="#ef4444" strokeWidth="3" fill="none" />

            {/* GLOWING INCANDESCENT BULB */}
            <g transform="translate(500, 60)">
              {/* Radial Glow Halo */}
              <circle cx="0" cy="0" r="48" fill="url(#gradBulbGlow)" />
              {/* Glass Bulb Dome */}
              <path d="M -16 -12 C -24 -24 -12 -36 0 -36 C 12 -36 24 -24 16 -12 L 10 0 L -10 0 Z" fill="rgba(254, 240, 138, 0.8)" stroke="#f59e0b" strokeWidth="2" />
              {/* Metallic Base */}
              <rect x="-10" y="0" width="20" height="12" rx="2" fill="#64748b" />
              {/* Filament glowing */}
              <path d="M -6 -12 L 0 -22 L 6 -12" fill="none" stroke="#ef4444" strokeWidth="2" />
              {/* Radiating Light Rays */}
              <line x1="-30" y1="-30" x2="-42" y2="-42" stroke="#f59e0b" strokeWidth="2" />
              <line x1="0" y1="-42" x2="0" y2="-54" stroke="#f59e0b" strokeWidth="2" />
              <line x1="30" y1="-30" x2="42" y2="-42" stroke="#f59e0b" strokeWidth="2" />
              <text x="45" y="-10" fill="#f59e0b" fontSize="12" fontWeight="900">BULB GLOWS!</text>
            </g>

            {/* Return Wire from Bulb to Right Nail */}
            <path d="M 500 72 L 500 335 L 282 335 L 282 305" fill="none" stroke="#ef4444" strokeWidth="3" />

            {/* COMPARATIVE RESULTS BOX (RIGHT) */}
            <g transform="translate(460, 130)">
              <rect x="0" y="0" width="260" height="195" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="130" y="24" fill={textPrimary} fontSize="12" fontWeight="900" textAnchor="middle">OBSERVATION & INFERENCE</text>
              <line x1="15" y1="34" x2="245" y2="34" stroke={isDark ? "#334155" : "#e2e8f0"} strokeWidth="1.5" />

              {/* Row 1: Dil HCl / H2SO4 */}
              <g transform="translate(15, 48)">
                <circle cx="8" cy="10" r="5" fill="#10b981" />
                <text x="22" y="10" fill="#10b981" fontSize="10.5" fontWeight="bold">Dil. HCl / H₂SO₄ / HNO₃:</text>
                <text x="22" y="24" fill={textPrimary} fontSize="9.5">Bulb GLOWS (Ionizes to produce H⁺ ions)</text>
              </g>

              {/* Row 2: Glucose & Alcohol */}
              <g transform="translate(15, 98)">
                <circle cx="8" cy="10" r="5" fill="#ef4444" />
                <text x="22" y="10" fill="#ef4444" fontSize="10.5" fontWeight="bold">Glucose (C₆H₁₂O₆) & Alcohol:</text>
                <text x="22" y="24" fill={textMuted} fontSize="9.5">Bulb DOES NOT GLOW (No free ions)</text>
              </g>

              {/* Row 3: Distilled Water */}
              <g transform="translate(15, 148)">
                <circle cx="8" cy="10" r="5" fill="#f59e0b" />
                <text x="22" y="10" fill="#f59e0b" fontSize="10.5" fontWeight="bold">Distilled Water vs Rain Water:</text>
                <text x="22" y="24" fill={textMuted} fontSize="9.5">Rain conducts (dissolved acids); Distilled doesn't</text>
              </g>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.15)"} stroke="#f59e0b" strokeWidth="1" />
              <text x="15" y="19" fill="#f59e0b" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                All acids contain hydrogen, but all compounds containing hydrogen are NOT acids. Glucose & alcohol contain hydrogen but do not dissociate into H⁺(aq) ions in water.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 8. CONDITIONS FOR RUSTING: 3 TEST TUBES (ACT 3.14)
      // =====================================================================
      case "rusting_tubes":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradRustCoat" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c2d12" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="gradCleanNail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>

            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* TUBE A: WATER + AIR (RUSTS HEAVILY) */}
            <g transform="translate(90, 50)">
              {/* Rubber Stopper */}
              <rect x="18" y="10" width="44" height="18" rx="3" fill="#1e293b" />
              {/* Glass Tube */}
              <rect x="15" y="20" width="50" height="230" rx="18" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#ef4444" strokeWidth="3" />
              {/* Tap Water Fill (Half-way) */}
              <rect x="18" y="130" width="44" height="117" rx="14" fill="rgba(56, 189, 248, 0.35)" />
              <line x1="18" y1="130" x2="62" y2="130" stroke="#0284c7" strokeWidth="2" />

              {/* Rusted Iron Nails (Partly in water, partly in air) */}
              <path d="M 36 100 L 44 100 L 42 220 L 40 232 L 38 220 Z" fill="url(#gradRustCoat)" stroke="#7c2d12" strokeWidth="1.5" />
              <ellipse cx="40" cy="100" rx="8" ry="3" fill="#b45309" />
              {/* Flaky Rust patches */}
              <circle cx="39" cy="125" r="3.5" fill="#78350f" />
              <circle cx="42" cy="150" r="3" fill="#78350f" />
              <circle cx="38" cy="180" r="4" fill="#78350f" />

              {/* Labels for Tube A */}
              <text x="40" y="275" fill="#ef4444" fontSize="13" fontWeight="900" textAnchor="middle">TUBE A</text>
              <text x="40" y="292" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">RUSTS HEAVILY!</text>
              <text x="40" y="306" fill={textMuted} fontSize="9" textAnchor="middle">Air (O₂) + Water Present</text>
            </g>

            {/* TUBE B: BOILED WATER + OIL LAYER (NO RUST) */}
            <g transform="translate(290, 50)">
              {/* Rubber Stopper */}
              <rect x="18" y="10" width="44" height="18" rx="3" fill="#1e293b" />
              {/* Glass Tube */}
              <rect x="15" y="20" width="50" height="230" rx="18" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#10b981" strokeWidth="3" />

              {/* Floating Layer of Mineral Oil (Blocks O2 re-entry) */}
              <rect x="18" y="105" width="44" height="20" fill="#f59e0b" opacity="0.85" />
              <text x="40" y="119" fill="#000" fontSize="7.5" fontWeight="bold" textAnchor="middle">OIL LAYER</text>

              {/* Boiled Distilled Water (No dissolved oxygen) */}
              <rect x="18" y="125" width="44" height="122" rx="14" fill="rgba(56, 189, 248, 0.25)" />

              {/* Shiny Clean Iron Nail (No Rust) */}
              <path d="M 36 125 L 44 125 L 42 220 L 40 232 L 38 220 Z" fill="url(#gradCleanNail)" stroke="#475569" strokeWidth="1" />
              <ellipse cx="40" cy="125" rx="8" ry="3" fill="#cbd5e1" />

              {/* Labels for Tube B */}
              <text x="40" y="275" fill="#10b981" fontSize="13" fontWeight="900" textAnchor="middle">TUBE B</text>
              <text x="40" y="292" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">NO RUST (CLEAN)</text>
              <text x="40" y="306" fill={textMuted} fontSize="9" textAnchor="middle">Boiled H₂O only (No O₂)</text>
            </g>

            {/* TUBE C: DRY AIR + ANHYDROUS CaCl2 (NO RUST) */}
            <g transform="translate(490, 50)">
              {/* Rubber Stopper (Airtight) */}
              <rect x="18" y="10" width="44" height="18" rx="3" fill="#1e293b" />
              {/* Glass Tube */}
              <rect x="15" y="20" width="50" height="230" rx="18" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#10b981" strokeWidth="3" />

              {/* Anhydrous Calcium Chloride (CaCl2) Pellets at bottom */}
              <path d="M 18 205 Q 40 195 62 205 L 62 232 C 62 242 52 247 40 247 C 28 247 18 242 18 232 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="28" cy="220" r="3" fill="#94a3b8" />
              <circle cx="40" cy="215" r="3.5" fill="#94a3b8" />
              <circle cx="52" cy="222" r="3" fill="#94a3b8" />
              <text x="40" y="238" fill="#475569" fontSize="7" fontWeight="bold" textAnchor="middle">CaCl₂ Desiccant</text>

              {/* Shiny Clean Iron Nail in Dry Air */}
              <path d="M 36 70 L 44 70 L 42 180 L 40 192 L 38 180 Z" fill="url(#gradCleanNail)" stroke="#475569" strokeWidth="1" />
              <ellipse cx="40" cy="70" rx="8" ry="3" fill="#cbd5e1" />

              {/* Labels for Tube C */}
              <text x="40" y="275" fill="#10b981" fontSize="13" fontWeight="900" textAnchor="middle">TUBE C</text>
              <text x="40" y="292" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">NO RUST (CLEAN)</text>
              <text x="40" y="306" fill={textMuted} fontSize="9" textAnchor="middle">Dry Air only (No H₂O)</text>
            </g>

            {/* CALLOUT BADGE: SCIENTIFIC CONCLUSION */}
            <g transform="translate(180, 10)">
              <rect x="0" y="0" width="400" height="34" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="200" y="21" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
                CONCLUSION: BOTH Oxygen (Air) AND Moisture (Water) are Essential for Rusting!
              </text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Why was water boiled in Tube B? To expel all dissolved air/oxygen. Why oil layer? To prevent air re-dissolving. Why CaCl₂ in Tube C? It is a drying agent that absorbs all moisture.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 9. GLASS SLAB REFRACTION & LATERAL DISPLACEMENT (ACT 10.10)
      // =====================================================================
      case "glass_slab":
      case "general_apparatus":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradGlassSlab" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* RECTANGULAR GLASS SLAB (ABCD) */}
            <rect x="180" y="110" width="400" height="150" rx="8" fill="url(#gradGlassSlab)" stroke="#38bdf8" strokeWidth="3" />
            <text x="200" y="135" fill="#38bdf8" fontSize="12" fontWeight="900">GLASS SLAB (Denser, n₂ ≈ 1.5)</text>
            <text x="200" y="90" fill={textMuted} fontSize="11" fontWeight="bold">AIR (Rarer Medium, n₁ ≈ 1.0)</text>
            <text x="200" y="290" fill={textMuted} fontSize="11" fontWeight="bold">AIR (Rarer Medium, n₁ ≈ 1.0)</text>

            {/* NORMAL 1 (AT POINT OF INCIDENCE O) */}
            <line x1="280" y1="40" x2="280" y2="180" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,4" />
            <text x="285" y="60" fill={textMuted} fontSize="10">N₁</text>
            <text x="285" y="175" fill={textMuted} fontSize="10">N₁'</text>

            {/* INCIDENT RAY (AO) */}
            <line x1="160" y1="40" x2="280" y2="110" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            {/* Arrow on Incident Ray */}
            <polygon points="220,70 232,77 222,83" fill="#ef4444" />
            {/* Angle of Incidence (i) Arc */}
            <path d="M 280 85 A 25 25 0 0 0 255 95" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="255" y="80" fill="#f59e0b" fontSize="12" fontWeight="bold">∠i</text>

            {/* REFRACTED RAY INSIDE SLAB (OO' - BENDS TOWARD NORMAL) */}
            <line x1="280" y1="110" x2="380" y2="260" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            {/* Arrow on Refracted Ray */}
            <polygon points="330,178 340,193 328,195" fill="#ef4444" />
            {/* Angle of Refraction (r) Arc */}
            <path d="M 280 135 A 25 25 0 0 0 295 132" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="290" y="148" fill="#f59e0b" fontSize="11" fontWeight="bold">∠r</text>

            {/* NORMAL 2 (AT POINT OF EMERGENCE O') */}
            <line x1="380" y1="190" x2="380" y2="330" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,4" />
            <text x="385" y="210" fill={textMuted} fontSize="10">N₂</text>
            <text x="385" y="325" fill={textMuted} fontSize="10">N₂'</text>

            {/* EMERGENT RAY (O'B - BENDS AWAY FROM NORMAL) */}
            <line x1="380" y1="260" x2="500" y2="330" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            {/* Arrow on Emergent Ray */}
            <polygon points="440,290 452,297 442,303" fill="#ef4444" />
            {/* Angle of Emergence (e) Arc */}
            <path d="M 380 285 A 25 25 0 0 0 405 275" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="395" y="300" fill="#f59e0b" fontSize="12" fontWeight="bold">∠e</text>

            {/* ORIGINAL UNDEVIATED RAY PATH (DASHED EXTENSION) */}
            <line x1="280" y1="110" x2="600" y2="297" stroke="#64748b" strokeWidth="2" strokeDasharray="6,4" />

            {/* LATERAL SHIFT (d) MEASUREMENT BRACKET */}
            <line x1="435" y1="292" x2="472" y2="223" stroke="#10b981" strokeWidth="3" />
            <polyline points="428,296 435,292 431,285" fill="none" stroke="#10b981" strokeWidth="2" />
            <polyline points="479,219 472,223 468,230" fill="none" stroke="#10b981" strokeWidth="2" />
            <text x="470" y="260" fill="#10b981" fontSize="13" fontWeight="900">Shift 'd'</text>

            {/* CALLOUT BADGE 1: LAW OF REFRACTION & PARALLEL RAYS */}
            <g transform="translate(45, 120)">
              <rect x="0" y="0" width="125" height="70" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="62" y="20" fill="#10b981" fontSize="12" fontWeight="900" textAnchor="middle">∠i = ∠e</text>
              <text x="62" y="36" fill={textPrimary} fontSize="9.5" fontWeight="bold" textAnchor="middle">Incident Ray ∥</text>
              <text x="62" y="48" fill={textPrimary} fontSize="9.5" fontWeight="bold" textAnchor="middle">Emergent Ray</text>
              <text x="62" y="62" fill={textMuted} fontSize="8" textAnchor="middle">Parallel faces</text>
            </g>

            {/* CALLOUT BADGE 2: FACTORS AFFECTING LATERAL DISPLACEMENT */}
            <g transform="translate(490, 20)">
              <rect x="0" y="0" width="240" height="75" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Lateral Shift (d) Depends On:</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9">1. Thickness of glass slab (t)</text>
              <text x="12" y="46" fill={textPrimary} fontSize="9">2. Refractive index of glass (n)</text>
              <text x="12" y="60" fill={textPrimary} fontSize="9">3. Angle of incidence (∠i)</text>
              <text x="12" y="71" fill="#10b981" fontSize="8" fontWeight="bold">d ∝ t, d ∝ n, d ∝ ∠i</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(2, 132, 199, 0.15)"} stroke="#0284c7" strokeWidth="1" />
              <text x="15" y="19" fill="#0284c7" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Snell's Law: (sin i / sin r) = n₂/n₁ = Constant. The emergent ray is laterally shifted but strictly parallel to incident ray because deviations at both parallel faces cancel out.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 10. GLASS PRISM DISPERSION: VIBGYOR (ACT 11.2)
      // =====================================================================
      case "glass_prism":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradPrismGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {/* TRIANGULAR PRISM (ABC) */}
            <polygon points="340,60 200,280 480,280" fill="url(#gradPrismGlass)" stroke="#38bdf8" strokeWidth="3.5" />
            <text x="340" y="50" fill={textPrimary} fontSize="14" fontWeight="bold" textAnchor="middle">A (Angle of Prism)</text>
            <text x="185" y="295" fill={textMuted} fontSize="12" fontWeight="bold">B</text>
            <text x="495" y="295" fill={textMuted} fontSize="12" fontWeight="bold">C</text>

            {/* INCIDENT BEAM OF WHITE LIGHT */}
            <line x1="50" y1="210" x2="245" y2="185" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <line x1="50" y1="210" x2="245" y2="185" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,2" />
            <polygon points="140,194 155,192 143,204" fill="#ffffff" />
            <text x="70" y="195" fill={textPrimary} fontSize="12" fontWeight="900">White Light Beam</text>

            {/* DISPERSION INSIDE PRISM (SPLITTING AT FIRST FACE AB) */}
            <line x1="245" y1="185" x2="385" y2="175" stroke="#ef4444" strokeWidth="2" />
            <line x1="245" y1="185" x2="395" y2="215" stroke="#a855f7" strokeWidth="2" />

            {/* EMERGENT VIBGYOR SPECTRUM SPREADING TO WHITE SCREEN */}
            {/* Red (Least Deviated) */}
            <line x1="385" y1="175" x2="620" y2="110" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            {/* Orange */}
            <line x1="387" y1="181" x2="620" y2="130" stroke="#f97316" strokeWidth="3" />
            {/* Yellow */}
            <line x1="389" y1="188" x2="620" y2="150" stroke="#eab308" strokeWidth="3" />
            {/* Green */}
            <line x1="391" y1="195" x2="620" y2="170" stroke="#22c55e" strokeWidth="3" />
            {/* Blue */}
            <line x1="392" y1="202" x2="620" y2="190" stroke="#06b6d4" strokeWidth="3" />
            {/* Indigo */}
            <line x1="394" y1="209" x2="620" y2="210" stroke="#3b82f6" strokeWidth="3" />
            {/* Violet (Most Deviated) */}
            <line x1="395" y1="215" x2="620" y2="230" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />

            {/* PHOSPHORESCENT WHITE SCREEN */}
            <rect x="620" y="90" width="12" height="160" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <text x="645" y="115" fill="#ef4444" fontSize="12" fontWeight="900">R (Red: 700 nm)</text>
            <text x="645" y="135" fill="#f97316" fontSize="10" fontWeight="bold">Orange</text>
            <text x="645" y="155" fill="#eab308" fontSize="10" fontWeight="bold">Yellow</text>
            <text x="645" y="175" fill="#22c55e" fontSize="10" fontWeight="bold">Green</text>
            <text x="645" y="195" fill="#06b6d4" fontSize="10" fontWeight="bold">Blue</text>
            <text x="645" y="215" fill="#3b82f6" fontSize="10" fontWeight="bold">Indigo</text>
            <text x="645" y="235" fill="#a855f7" fontSize="12" fontWeight="900">V (Violet: 400 nm)</text>

            {/* CALLOUT BADGE 1: CAUSE OF DISPERSION */}
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="220" height="60" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Cause of Dispersion:</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9">Different colors travel at different</text>
              <text x="12" y="44" fill={textPrimary} fontSize="9">speeds in glass (v = c/n)</text>
              <text x="12" y="55" fill="#10b981" fontSize="8" fontWeight="bold">λ_Red &gt; λ_Violet  ⟹  v_Red &gt; v_Violet</text>
            </g>

            {/* CALLOUT BADGE 2: DEVIATION ANGLE COMPARISON */}
            <g transform="translate(480, 20)">
              <rect x="0" y="0" width="230" height="60" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Angle of Deviation (δ):</text>
              <text x="12" y="32" fill="#ef4444" fontSize="9.5" fontWeight="bold">Red deviates the LEAST</text>
              <text x="12" y="46" fill="#a855f7" fontSize="9.5" fontWeight="bold">Violet deviates the MOST</text>
              <text x="12" y="57" fill={textMuted} fontSize="7.5">δ_Violet &gt; δ_Indigo &gt; ... &gt; δ_Red</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(168, 85, 247, 0.12)" : "rgba(168, 85, 247, 0.15)"} stroke="#a855f7" strokeWidth="1" />
              <text x="15" y="19" fill="#a855f7" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Sir Isaac Newton was first to obtain spectrum using a glass prism. When he placed an identical inverted prism, the 7 colors recombined to produce White Light!
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 11. VARIEGATED LEAF IODINE STARCH TEST (ACT 5.1)
      // =====================================================================
      case "leaf_starch":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            <defs>
              <linearGradient id="gradLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
              <linearGradient id="gradStarchBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* 4 PROGRESSION STEP CARDS */}
            {/* STEP 1: VARIEGATED LEAF */}
            <g transform="translate(30, 60)">
              <rect x="0" y="0" width="155" height="260" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="77" y="24" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">STEP 1: Natural Leaf</text>
              <text x="77" y="38" fill={textMuted} fontSize="8" textAnchor="middle">Variegated Croton / Money plant</text>

              {/* Leaf Outline */}
              <ellipse cx="77" cy="120" rx="50" ry="70" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              {/* Green Patches (Chlorophyll) */}
              <path d="M 50 80 Q 77 65 105 80 Q 115 120 100 160 Q 77 175 55 160 Q 40 120 50 80 Z" fill="url(#gradLeafGreen)" />

              <rect x="12" y="205" width="131" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} />
              <text x="77" y="222" fill="#15803d" fontSize="8.5" fontWeight="bold" textAnchor="middle">Green: Chlorophyll</text>
              <text x="77" y="236" fill="#ca8a04" fontSize="8.5" fontWeight="bold" textAnchor="middle">Pale: No Chlorophyll</text>
            </g>

            {/* Step Arrow 1 -> 2 */}
            <path d="M 195 180 L 215 180" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arr)" />

            {/* STEP 2: BOILING IN WATER */}
            <g transform="translate(225, 60)">
              <rect x="0" y="0" width="155" height="260" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="77" y="24" fill="#38bdf8" fontSize="11" fontWeight="900" textAnchor="middle">STEP 2: Boil in Water</text>
              <text x="77" y="38" fill={textMuted} fontSize="8" textAnchor="middle">Kills cells & softens walls</text>

              {/* Beaker with boiling water */}
              <rect x="30" y="80" width="95" height="90" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2" />
              {/* Softened leaf inside */}
              <ellipse cx="77" cy="125" rx="25" ry="35" fill="#86efac" opacity="0.7" />
              {/* Flame */}
              <polygon points="68,185 77,170 86,185" fill="#f97316" />

              <rect x="12" y="205" width="131" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} />
              <text x="77" y="222" fill="#0284c7" fontSize="8.5" fontWeight="bold" textAnchor="middle">Boiling Water (2 min)</text>
              <text x="77" y="236" fill={textMuted} fontSize="8" textAnchor="middle">Breaks down cell membranes</text>
            </g>

            {/* Step Arrow 2 -> 3 */}
            <path d="M 390 180 L 410 180" stroke="#f59e0b" strokeWidth="3" />

            {/* STEP 3: ALCOHOL WATER BATH */}
            <g transform="translate(420, 60)">
              <rect x="0" y="0" width="155" height="260" rx="12" fill={labelBg} stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="77" y="24" fill="#8b5cf6" fontSize="11" fontWeight="900" textAnchor="middle">STEP 3: Alcohol Bath</text>
              <text x="77" y="38" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Never heat alcohol directly!</text>

              {/* Water Bath Beaker */}
              <rect x="25" y="80" width="105" height="95" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#64748b" strokeWidth="1.5" />
              {/* Alcohol Test Tube inside water */}
              <rect x="58" y="55" width="38" height="110" rx="10" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" strokeWidth="2" />
              <text x="77" y="110" fill="#8b5cf6" fontSize="8" fontWeight="bold" textAnchor="middle">Alcohol</text>
              {/* Flame under beaker */}
              <polygon points="68,190 77,175 86,190" fill="#f97316" />

              <rect x="12" y="205" width="131" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} />
              <text x="77" y="222" fill="#8b5cf6" fontSize="8.5" fontWeight="bold" textAnchor="middle">Extracts Chlorophyll</text>
              <text x="77" y="236" fill={textMuted} fontSize="8" textAnchor="middle">Leaf turns pale/colorless</text>
            </g>

            {/* Step Arrow 3 -> 4 */}
            <path d="M 585 180 L 605 180" stroke="#f59e0b" strokeWidth="3" />

            {/* STEP 4: IODINE STARCH TEST RESULT */}
            <g transform="translate(615, 60)">
              <rect x="0" y="0" width="125" height="260" rx="12" fill={labelBg} stroke="#10b981" strokeWidth="2" />
              <text x="62" y="24" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">STEP 4: Result</text>
              <text x="62" y="38" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Dilute Iodine Wash</text>

              {/* Dish with Tested Leaf */}
              <ellipse cx="62" cy="120" rx="42" ry="58" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              {/* BLUE-BLACK CENTER ONLY WHERE CHLOROPHYLL WAS! */}
              <path d="M 40 85 Q 62 70 84 85 Q 92 120 80 150 Q 62 165 44 150 Q 32 120 40 85 Z" fill="url(#gradStarchBlue)" stroke="#1e1b4b" strokeWidth="2" />

              <rect x="8" y="195" width="109" height="55" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} />
              <text x="62" y="210" fill="#38bdf8" fontSize="8.5" fontWeight="900" textAnchor="middle">BLUE-BLACK!</text>
              <text x="62" y="223" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Starch Present</text>
              <text x="62" y="235" fill={textMuted} fontSize="7" textAnchor="middle">Proves Chlorophyll is</text>
              <text x="62" y="244" fill={textMuted} fontSize="7" textAnchor="middle">essential for starch</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Safety precaution: Alcohol is highly inflammable, so the test tube with alcohol is heated in a water bath, never directly over burner. Only chlorophyll-containing areas turn blue-black.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 12. KOH BELL JAR EXPERIMENT: CO2 ESSENTIAL (ACT 5.2)
      // =====================================================================
      case "bell_jar_co2":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* SETUP A: WITH KOH (CO2 ABSORBED) */}
            <g transform="translate(90, 50)">
              {/* Glass Plate Base */}
              <rect x="10" y="240" width="220" height="12" rx="3" fill="#64748b" />
              <text x="120" y="268" fill={textMuted} fontSize="9" textAnchor="middle">Vaseline Airtight Seal</text>

              {/* Bell Jar Glass Dome */}
              <path d="M 25 240 L 25 90 C 25 20 215 20 215 90 L 215 240 Z" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="3" />
              <ellipse cx="120" cy="20" rx="14" ry="8" fill="#38bdf8" opacity="0.4" />

              {/* Potted Plant A */}
              <rect x="50" y="180" width="60" height="55" rx="5" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
              <path d="M 80 180 L 80 110" stroke="#15803d" strokeWidth="4" />
              <path d="M 80 140 Q 55 125 60 110 Q 75 125 80 135" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
              <path d="M 80 130 Q 105 115 100 100 Q 85 115 80 125" fill="#22c55e" stroke="#15803d" strokeWidth="1" />

              {/* Watch Glass with KOH Pellets */}
              <g transform="translate(145, 215)">
                <ellipse cx="25" cy="18" rx="22" ry="7" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="18" cy="16" r="3" fill="#ef4444" />
                <circle cx="28" cy="15" r="2.5" fill="#ef4444" />
                <circle cx="23" cy="19" r="3" fill="#ef4444" />
                <text x="25" y="8" fill="#ef4444" fontSize="9" fontWeight="900" textAnchor="middle">KOH Pellets</text>
              </g>

              {/* Result Badge */}
              <rect x="25" y="280" width="190" height="46" rx="8" fill={labelBg} stroke="#ef4444" strokeWidth="1.5" />
              <text x="120" y="298" fill="#ef4444" fontSize="12" fontWeight="900" textAnchor="middle">PLANT A: NO STARCH</text>
              <text x="120" y="312" fill={textMuted} fontSize="8.5" textAnchor="middle">KOH absorbs all CO₂ ➔ No Photosynthesis</text>
            </g>

            {/* SETUP B: CONTROL (WITHOUT KOH) */}
            <g transform="translate(430, 50)">
              {/* Glass Plate Base */}
              <rect x="10" y="240" width="220" height="12" rx="3" fill="#64748b" />
              <text x="120" y="268" fill={textMuted} fontSize="9" textAnchor="middle">Vaseline Airtight Seal</text>

              {/* Bell Jar Glass Dome */}
              <path d="M 25 240 L 25 90 C 25 20 215 20 215 90 L 215 240 Z" fill="rgba(56, 189, 248, 0.1)" stroke="#10b981" strokeWidth="3" />
              <ellipse cx="120" cy="20" rx="14" ry="8" fill="#10b981" opacity="0.4" />

              {/* Potted Plant B */}
              <rect x="80" y="180" width="60" height="55" rx="5" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
              <path d="M 110 180 L 110 110" stroke="#15803d" strokeWidth="4" />
              <path d="M 110 140 Q 85 125 90 110 Q 105 125 110 135" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
              <path d="M 110 130 Q 135 115 130 100 Q 115 115 110 125" fill="#22c55e" stroke="#15803d" strokeWidth="1" />

              {/* Result Badge */}
              <rect x="25" y="280" width="190" height="46" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="120" y="298" fill="#10b981" fontSize="12" fontWeight="900" textAnchor="middle">PLANT B: STARCH FORMED</text>
              <text x="120" y="312" fill={textMuted} fontSize="8.5" textAnchor="middle">CO₂ available ➔ Turns Deep Blue-Black</text>
            </g>

            {/* CALLOUT BADGE: DE-STARCHING PRECAUTION */}
            <g transform="translate(240, 10)">
              <rect x="0" y="0" width="280" height="34" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="140" y="21" fill="#f59e0b" fontSize="10.5" fontWeight="900" textAnchor="middle">
                Both plants destarched in dark for 3 days first!
              </text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Role of KOH: Absorbs carbon dioxide (2KOH + CO₂ ➔ K₂CO₃ + H₂O). Destarching ensures any starch detected during experiment was synthesized in the bell jar.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 13. SEED RESPIRATION & WATER COLUMN RISE (ACT 5.4)
      // =====================================================================
      case "respiration_flask":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* CONICAL FLASK WITH GERMINATING SEEDS (LEFT) */}
            <g transform="translate(130, 110)">
              <polygon points="15,225 175,225 120,50 75,50" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#38bdf8" strokeWidth="3" />
              <rect x="75" y="20" width="45" height="30" fill="none" stroke="#38bdf8" strokeWidth="3" />
              {/* Moist Germinating Gram / Bean Seeds */}
              {[35, 55, 75, 95, 115, 135, 155, 45, 65, 85, 105, 125, 145].map((x, idx) => (
                <g key={idx} transform={`translate(${x}, ${215 - (idx % 3) * 10})`}>
                  <ellipse cx="0" cy="0" rx="7" ry="5" fill="#15803d" stroke="#166534" strokeWidth="1" />
                  {/* Sprouted radicle tip */}
                  <path d="M 4 2 Q 9 5 11 10" stroke="#fef08a" strokeWidth="2" fill="none" />
                </g>
              ))}
              <text x="95" y="240" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Moist Germinating Seeds</text>

              {/* Small suspended test tube with KOH solution */}
              <rect x="85" y="70" width="22" height="60" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              {/* Suspension thread */}
              <line x1="96" y1="20" x2="96" y2="70" stroke="#64748b" strokeWidth="1.5" />
              <text x="60" y="105" fill="#ca8a04" fontSize="8" fontWeight="bold">KOH Tube</text>

              {/* Airtight Rubber Cork */}
              <rect x="71" y="16" width="53" height="20" rx="3" fill="#1e293b" />
            </g>

            {/* BENT GLASS DELIVERY TUBE TO BEAKER */}
            <path
              d="M 230 126 L 230 60 Q 230 40 250 40 L 530 40 Q 550 40 550 60 L 550 270"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* BEAKER WITH COLORED WATER (RIGHT) */}
            <g transform="translate(505, 190)">
              <rect x="0" y="20" width="90" height="120" rx="8" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#0284c7" strokeWidth="2.5" />
              {/* Colored Water Level */}
              <rect x="3" y="60" width="84" height="77" rx="6" fill="#f43f5e" opacity="0.4" />

              {/* WATER LEVEL RISE IN DELIVERY TUBE (CRITICAL PHENOMENON!) */}
              <rect x="42" y="20" width="6" height="60" fill="#ef4444" />
              <polygon points="38,25 45,10 52,25" fill="#ef4444" />

              <text x="45" y="155" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">Colored Water</text>
            </g>

            {/* CALLOUT BADGE: VACUUM & WATER LEVEL RISE */}
            <g transform="translate(480, 75)">
              <rect x="0" y="0" width="220" height="75" rx="8" fill={labelBg} stroke="#ef4444" strokeWidth="1.5" />
              <text x="12" y="18" fill="#ef4444" fontSize="12" fontWeight="900">WATER LEVEL RISES!</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">1. Seeds respire, produce CO₂</text>
              <text x="12" y="44" fill={textMuted} fontSize="9">2. Suspended KOH absorbs CO₂</text>
              <text x="12" y="56" fill="#10b981" fontSize="9" fontWeight="bold">3. Partial vacuum formed in flask</text>
              <text x="12" y="68" fill="#0284c7" fontSize="8.5" fontWeight="bold">4. Atmospheric pressure pushes water up</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(2, 132, 199, 0.15)"} stroke="#0284c7" strokeWidth="1" />
              <text x="15" y="19" fill="#0284c7" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Why does water rise in the delivery tube? CO₂ released by seeds is absorbed by KOH, creating a partial vacuum in the airtight flask. Atmospheric pressure drives water column upwards.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 14. ANAEROBIC FERMENTATION IN YEAST (ACT 5.5)
      // =====================================================================
      case "yeast_fermentation":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* TEST TUBE 1: YEAST + GLUCOSE + OIL SEAL (LEFT) */}
            <g transform="translate(150, 70)">
              {/* Rubber Stopper */}
              <rect x="18" y="10" width="44" height="20" rx="3" fill="#1e293b" />
              {/* Glass Tube */}
              <rect x="15" y="20" width="50" height="230" rx="18" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#f59e0b" strokeWidth="3" />

              {/* Liquid Paraffin Oil Seal Layer (Excludes Oxygen) */}
              <rect x="18" y="100" width="44" height="20" fill="#f59e0b" opacity="0.85" />
              <text x="40" y="114" fill="#000" fontSize="7.5" fontWeight="bold" textAnchor="middle">OIL SEAL</text>

              {/* Yeast + Glucose Solution Mixture */}
              <rect x="18" y="120" width="44" height="127" rx="14" fill="#fed7aa" opacity="0.75" />
              {/* Yeast granules & fermentation bubbles */}
              {[140, 160, 180, 200, 220].map((y, idx) => (
                <circle key={idx} cx={28 + (idx % 2) * 22} cy={y} r="3" fill="#ea580c" />
              ))}

              <text x="40" y="275" fill="#f59e0b" fontSize="12" fontWeight="900" textAnchor="middle">Fermentation Tube</text>
              <text x="40" y="290" fill={textMuted} fontSize="9" textAnchor="middle">Yeast + Glucose</text>
            </g>

            {/* GLASS DELIVERY TUBE TO LIME WATER */}
            <path
              d="M 190 85 L 190 40 Q 190 25 210 25 L 480 25 Q 500 25 500 40 L 500 230"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* TEST TUBE 2: LIME WATER TURNING MILKY (RIGHT) */}
            <g transform="translate(475, 120)">
              {/* Glass Tube */}
              <rect x="10" y="10" width="40" height="180" rx="16" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#10b981" strokeWidth="3" />
              {/* Milky Lime Water */}
              <rect x="13" y="70" width="34" height="117" rx="14" fill="#f8fafc" opacity="0.9" />
              <text x="30" y="215" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Lime Water Milky</text>
              <text x="30" y="228" fill={textMuted} fontSize="8" textAnchor="middle">CO₂ produced</text>
            </g>

            {/* CALLOUT BADGE 1: PARAFFIN OIL SEAL */}
            <g transform="translate(45, 20)">
              <rect x="0" y="0" width="200" height="52" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Liquid Paraffin Seal</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Floated on top of yeast solution</text>
              <text x="12" y="44" fill="#ef4444" fontSize="8.5" fontWeight="bold">Ensures STRICTLY ANAEROBIC conditions</text>
            </g>

            {/* CALLOUT BADGE 2: FERMENTATION EQUATION */}
            <g transform="translate(255, 80)">
              <rect x="0" y="0" width="210" height="60" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="105" y="18" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Anaerobic Fermentation</text>
              <text x="105" y="32" fill={textPrimary} fontSize="8.5" fontWeight="bold" textAnchor="middle">C₆H₁₂O₆ ➔ 2C₂H₅OH + 2CO₂↑ + 2ATP</text>
              <text x="105" y="46" fill={textMuted} fontSize="8" textAnchor="middle">Produces Ethanol (characteristic smell)</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.15)"} stroke="#f59e0b" strokeWidth="1" />
              <text x="15" y="19" fill="#f59e0b" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Two products of anaerobic respiration in yeast: Ethanol (C₂H₅OH) and Carbon dioxide (CO₂). Less energy is released (only 2 ATP vs 38 ATP in aerobic).
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 15. SAPONIFICATION: PREPARATION OF SOAP & SALTING OUT (ACT 4.10)
      // =====================================================================
      case "saponification_beaker":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* TRIPOD STAND & WIRE GAUZE */}
            <g transform="translate(230, 220)">
              {/* Wire Gauze with Ceramic Center */}
              <line x1="0" y1="0" x2="200" y2="0" stroke="#64748b" strokeWidth="5" />
              <rect x="60" y="-3" width="80" height="6" rx="2" fill="#cbd5e1" />
              {/* Tripod Legs */}
              <line x1="20" y1="0" x2="0" y2="120" stroke="#475569" strokeWidth="5" />
              <line x1="180" y1="0" x2="200" y2="120" stroke="#475569" strokeWidth="5" />
              <line x1="100" y1="0" x2="100" y2="120" stroke="#334155" strokeWidth="4" />
              {/* Bunsen Burner underneath */}
              <rect x="85" y="60" width="30" height="60" fill="#94a3b8" />
              <polygon points="90,60 100,30 110,60" fill="#f97316" />
            </g>

            {/* BEAKER WITH REACTION MIXTURE */}
            <g transform="translate(250, 70)">
              <rect x="0" y="20" width="160" height="130" rx="8" fill={isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(248, 250, 252, 0.8)"} stroke="#38bdf8" strokeWidth="3" />
              {/* Oil + 20% NaOH Emulsion */}
              <rect x="3" y="60" width="154" height="87" rx="6" fill="#fef08a" opacity="0.6" />

              {/* CURDY PRECIPITATED SOAP LAYER (SALTING OUT WITH NaCl) */}
              <rect x="3" y="45" width="154" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="80" y="60" fill="#000" fontSize="9.5" fontWeight="900" textAnchor="middle">Curdy Soap Layer (Precipitate)</text>

              {/* Glass Stirring Rod */}
              <line x1="130" y1="-20" x2="70" y2="110" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* CALLOUT BADGE 1: REAGENTS */}
            <g transform="translate(45, 60)">
              <rect x="0" y="0" width="180" height="54" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5" />
              <text x="12" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Starting Reagents</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">20 mL Castor/Vegetable Oil</text>
              <text x="12" y="44" fill="#10b981" fontSize="9" fontWeight="bold">+ 30 mL 20% NaOH Solution</text>
            </g>

            {/* CALLOUT BADGE 2: SALTING OUT WITH NaCl */}
            <g transform="translate(460, 60)">
              <rect x="0" y="0" width="250" height="65" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">Why Add Common Salt (NaCl)?</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9">Decreases solubility of soap</text>
              <text x="12" y="45" fill="#10b981" fontSize="9" fontWeight="bold">"Salting Out" causes soap to precipitate</text>
              <text x="12" y="58" fill={textMuted} fontSize="8">Byproduct in solution: Glycerol</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Saponification: Alkaline hydrolysis of esters/fats with NaOH yields soap (Sodium salt of fatty acid) and Glycerol. Adding NaCl precipitates soap out of solution.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 16. INDICATORS VISUAL SPECTRUM & OLFACTORY TESTS (ACT 2.1 & 2.2)
      // =====================================================================
      case "indicators_strip":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* 4 COMPARATIVE HORIZONTAL PANELS */}
            {/* ROW 1: LITMUS */}
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="670" height="55" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="20" y="32" fill={textPrimary} fontSize="13" fontWeight="900">Litmus Solution / Paper</text>
              <rect x="230" y="12" width="190" height="32" rx="6" fill="#ef4444" opacity="0.9" />
              <text x="325" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Acid: TURNS RED</text>
              <rect x="450" y="12" width="190" height="32" rx="6" fill="#3b82f6" opacity="0.9" />
              <text x="545" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Base: TURNS BLUE</text>
            </g>

            {/* ROW 2: PHENOLPHTHALEIN */}
            <g transform="translate(45, 95)">
              <rect x="0" y="0" width="670" height="55" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="20" y="32" fill={textPrimary} fontSize="13" fontWeight="900">Phenolphthalein</text>
              <rect x="230" y="12" width="190" height="32" rx="6" fill="#f8fafc" opacity="0.3" stroke="#94a3b8" strokeWidth="1" />
              <text x="325" y="32" fill={textPrimary} fontSize="11" fontWeight="bold" textAnchor="middle">Acid: COLORLESS</text>
              <rect x="450" y="12" width="190" height="32" rx="6" fill="#ec4899" opacity="0.9" />
              <text x="545" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Base: DEEP PINK</text>
            </g>

            {/* ROW 3: METHYL ORANGE */}
            <g transform="translate(45, 160)">
              <rect x="0" y="0" width="670" height="55" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="20" y="32" fill={textPrimary} fontSize="13" fontWeight="900">Methyl Orange</text>
              <rect x="230" y="12" width="190" height="32" rx="6" fill="#f43f5e" opacity="0.9" />
              <text x="325" y="32" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Acid: RED / ORANGE</text>
              <rect x="450" y="12" width="190" height="32" rx="6" fill="#eab308" opacity="0.9" />
              <text x="545" y="32" fill="#000" fontSize="11" fontWeight="900" textAnchor="middle">Base: YELLOW</text>
            </g>

            {/* ROW 4: OLFACTORY INDICATORS */}
            <g transform="translate(45, 225)">
              <rect x="0" y="0" width="670" height="65" rx="10" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="20" y="28" fill="#10b981" fontSize="13" fontWeight="900">Olfactory Indicators</text>
              <text x="20" y="46" fill={textMuted} fontSize="9">Vanilla essence, Clove oil, Onion</text>
              <rect x="230" y="12" width="190" height="42" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1" />
              <text x="325" y="30" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Acid: Retains Smell</text>
              <text x="325" y="44" fill={textMuted} fontSize="8" textAnchor="middle">Characteristic odor persists</text>
              <rect x="450" y="12" width="190" height="42" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" />
              <text x="545" y="30" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle">Base: Loses Smell</text>
              <text x="545" y="44" fill={textMuted} fontSize="8" textAnchor="middle">Odor destroyed by alkali</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Dry HCl gas does NOT change the color of dry blue litmus paper because H⁺ ions are only produced in the presence of water (HCl + H₂O ➔ H₃O⁺ + Cl⁻).
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 17. STRAIGHT WIRE MAGNETIC FIELD & RIGHT HAND THUMB RULE (ACT 12.1)
      // =====================================================================
      case "magnetic_wire":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* PERSPECTIVE CARDBOARD SHEET PIERCED BY VERTICAL WIRE */}
            <g transform="translate(180, 80)">
              {/* Horizontal Cardboard Sheet in 3D Perspective */}
              <polygon points="0,120 340,120 400,20 60,20" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="2.5" />
              <text x="80" y="45" fill={textMuted} fontSize="10" fontWeight="bold">Cardboard Sheet</text>

              {/* Concentric Circular Magnetic Field Lines */}
              <ellipse cx="200" cy="70" rx="40" ry="18" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <ellipse cx="200" cy="70" rx="80" ry="34" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
              <ellipse cx="200" cy="70" rx="120" ry="48" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,4" />

              {/* Anti-clockwise Arrows on Field Lines */}
              <path d="M 240 70 L 240 64" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arr)" />
              <path d="M 160 70 L 160 76" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arr)" />
              <text x="290" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold">B-Field Loops</text>

              {/* Small Plotting Compass on Cardboard */}
              <circle cx="280" cy="70" r="10" fill="#fff" stroke="#475569" strokeWidth="1.5" />
              <line x1="280" y1="62" x2="280" y2="78" stroke="#ef4444" strokeWidth="2.5" />
            </g>

            {/* VERTICAL COPPER WIRE CONDUCTOR PIERCING SHEET */}
            <line x1="380" y1="30" x2="380" y2="330" stroke="#ea580c" strokeWidth="10" strokeLinecap="round" />
            {/* Core copper highlight */}
            <line x1="380" y1="30" x2="380" y2="330" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />

            {/* Current Direction Vector (UPWARDS) */}
            <g transform="translate(380, 50)">
              <polygon points="-7,15 0,-5 7,15" fill="#10b981" />
              <text x="18" y="5" fill="#10b981" fontSize="13" fontWeight="900">Current I (Upward)</text>
            </g>

            {/* CALLOUT BADGE 1: RIGHT-HAND THUMB RULE */}
            <g transform="translate(45, 50)">
              <rect x="0" y="0" width="210" height="75" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">Right-Hand Thumb Rule:</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9.5">Thumb ➔ Direction of Current (I)</text>
              <text x="12" y="46" fill="#f59e0b" fontSize="9.5" fontWeight="bold">Fingers curl ➔ Direction of</text>
              <text x="12" y="58" fill="#f59e0b" fontSize="9.5" fontWeight="bold">Magnetic Field lines (B)</text>
              <text x="12" y="70" fill={textMuted} fontSize="8">Upward I ⟹ Anti-clockwise B</text>
            </g>

            {/* CALLOUT BADGE 2: FIELD STRENGTH FACTORS */}
            <g transform="translate(500, 50)">
              <rect x="0" y="0" width="210" height="75" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Magnetic Field Strength (B):</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9.5">1. Directly proportional to current:</text>
              <text x="24" y="44" fill="#10b981" fontSize="9" fontWeight="bold">B ∝ I</text>
              <text x="12" y="58" fill={textPrimary} fontSize="9.5">2. Inversely proportional to distance:</text>
              <text x="24" y="70" fill="#ef4444" fontSize="9" fontWeight="bold">B ∝ 1/r (Crowded near wire)</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                Maxwell's Right-Hand Thumb Rule: If you hold the current-carrying wire in right hand with thumb along current, curled fingers give magnetic field direction.
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 18. FORCE ON CURRENT CONDUCTOR: KICK EXPERIMENT (ACT 12.7)
      // =====================================================================
      case "kick_experiment":
        return (
          <svg viewBox="0 0 760 400" className="w-full h-auto max-h-[420px] select-none">
            {/* Lab Bench */}
            <line x1="40" y1="340" x2="720" y2="340" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="4" />

            {/* HORSESHOE MAGNET MOUNTED VERTICALLY */}
            <g transform="translate(300, 90)">
              {/* Horseshoe Arc */}
              <path d="M 0 40 C -80 40 -80 180 0 180" fill="none" stroke="#64748b" strokeWidth="32" strokeLinecap="round" />
              {/* North Pole (Bottom, facing up) */}
              <rect x="-10" y="160" width="50" height="36" fill="#ef4444" rx="4" />
              <text x="15" y="184" fill="#fff" fontSize="16" fontWeight="900" textAnchor="middle">N</text>
              {/* South Pole (Top, facing down) */}
              <rect x="-10" y="24" width="50" height="36" fill="#3b82f6" rx="4" />
              <text x="15" y="48" fill="#fff" fontSize="16" fontWeight="900" textAnchor="middle">S</text>

              {/* Magnetic Field Vector Lines (Vertically Upwards N ➔ S) */}
              <line x1="15" y1="155" x2="15" y2="65" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,3" />
              <polygon points="11,70 15,60 19,70" fill="#f59e0b" />
              <text x="25" y="115" fill="#f59e0b" fontSize="10" fontWeight="bold">B (N ➔ S)</text>
            </g>

            {/* SUSPENDED ALUMINIUM ROD (AB) */}
            <g transform="translate(240, 195)">
              {/* Rod Body AB */}
              <line x1="0" y1="0" x2="180" y2="0" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
              <text x="-15" y="5" fill="#cbd5e1" fontSize="12" fontWeight="bold">A</text>
              <text x="190" y="5" fill="#cbd5e1" fontSize="12" fontWeight="bold">B</text>

              {/* Suspension Wires from Retort Stand */}
              <line x1="30" y1="-140" x2="30" y2="0" stroke="#94a3b8" strokeWidth="2" />
              <line x1="150" y1="-140" x2="150" y2="0" stroke="#94a3b8" strokeWidth="2" />

              {/* DISPLACEMENT KICK ARROW */}
              <path d="M 90 0 Q 120 -30 150 -40" fill="none" stroke="#10b981" strokeWidth="4" />
              <polygon points="145,-47 160,-40 150,-30" fill="#10b981" />
              <text x="165" y="-40" fill="#10b981" fontSize="13" fontWeight="900">Deflection / Force "KICK" ➔</text>
            </g>

            {/* CALLOUT BADGE 1: FLEMING'S LEFT-HAND RULE */}
            <g transform="translate(45, 50)">
              <rect x="0" y="0" width="220" height="95" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="900">Fleming's Left-Hand Rule:</text>
              <text x="12" y="34" fill="#10b981" fontSize="10" fontWeight="bold">Thumb ➔ FORCE / Motion (Kick)</text>
              <text x="12" y="48" fill="#f59e0b" fontSize="10" fontWeight="bold">Forefinger ➔ FIELD (B: N ➔ S)</text>
              <text x="12" y="62" fill="#0284c7" fontSize="10" fontWeight="bold">Middle finger ➔ CURRENT (I)</text>
              <text x="12" y="76" fill={textMuted} fontSize="8.5">All 3 mutually perpendicular</text>
              <text x="12" y="88" fill="#ef4444" fontSize="8" fontWeight="bold">F = B I L sin θ (Max when θ = 90°)</text>
            </g>

            {/* CALLOUT BADGE 2: CONDITIONS AFFECTING FORCE */}
            <g transform="translate(500, 50)">
              <rect x="0" y="0" width="210" height="75" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Force Reversal Rules:</text>
              <text x="12" y="32" fill={textPrimary} fontSize="9">1. Reverse Current ➔ Kick Reverses</text>
              <text x="12" y="46" fill={textPrimary} fontSize="9">2. Reverse Magnetic Poles ➔ Kick Reverses</text>
              <text x="12" y="60" fill={textPrimary} fontSize="9">3. Parallel to B (θ=0°) ➔ Force is ZERO</text>
              <text x="12" y="71" fill="#10b981" fontSize="8" fontWeight="bold">Basis of Electric Motor!</text>
            </g>

            {/* FOOTER CBSE EXAM TIP BANNER */}
            <g transform="translate(40, 360)">
              <rect x="0" y="0" width="680" height="30" rx="6" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="1" />
              <text x="15" y="19" fill="#10b981" fontSize="10" fontWeight="900">CBSE EXAM FOCUS:</text>
              <text x="125" y="19" fill={textPrimary} fontSize="9.5">
                In kick experiment (Activity 12.7), displacement is maximum when conductor is perpendicular to magnetic field (θ = 90°). If current flows parallel to field lines, force is zero!
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // DEFAULT FALLBACK
      // =====================================================================
      default:
        return (
          <div className="w-full flex flex-col items-center py-4">
            <div className="text-xs font-mono font-bold text-cyan-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Beaker className="w-4 h-4 text-cyan-400" />
              <span>Standard Laboratory Experimental Setup & Procedure</span>
            </div>
            <svg viewBox="0 0 760 220" className="w-full max-w-2xl h-auto max-h-[220px]">
              <rect x="40" y="20" width="680" height="180" rx="14" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#38bdf8" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="120" cy="110" r="40" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
              <text x="120" y="120" fill="#0284c7" fontSize="28" textAnchor="middle">🔬</text>
              <text x="190" y="90" fill={textPrimary} fontSize="16" fontWeight="900">{title}</text>
              <text x="190" y="115" fill={textMuted} fontSize="12" fontFamily="monospace">Official NCERT Class 10 Laboratory Protocol & Setup</text>
              <text x="190" y="140" fill="#10b981" fontSize="11" fontWeight="bold">✓ Compliant with CBSE Board Practical Exam Rubrics & Marking Scheme</text>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl border ${bgCard} flex flex-col items-center select-none transition-all`}>
      <div className="w-full flex items-center justify-between gap-2 mb-2">
        <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>NCERT Science Practical Apparatus: {title}</span>
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
