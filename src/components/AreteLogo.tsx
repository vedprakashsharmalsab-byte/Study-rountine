"use client";

import React from "react";

interface AreteLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showMotto?: boolean;
  isDark?: boolean;
  className?: string;
}

export default function AreteLogo({
  size = "md",
  showText = true,
  showMotto = false,
  isDark = true,
  className = ""
}: AreteLogoProps) {
  // Dimensions mapping
  const dimensions = {
    sm: { icon: 32, text: "text-base", motto: "text-[10px]", badge: "text-[9px] px-1.5 py-0.5", gap: "gap-2.5" },
    md: { icon: 44, text: "text-xl", motto: "text-xs", badge: "text-[10px] px-2 py-0.5", gap: "gap-3" },
    lg: { icon: 54, text: "text-2xl sm:text-3xl", motto: "text-xs sm:text-sm", badge: "text-xs px-2.5 py-0.5", gap: "gap-3.5" },
    xl: { icon: 68, text: "text-3xl sm:text-4xl", motto: "text-sm", badge: "text-xs px-3 py-1", gap: "gap-4" }
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className} select-none group cursor-pointer`}>
      {/* ARETĒ PRECISION VECTOR SIGIL - HIGH CONTRAST & LUMINOUS */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {/* Ambient Halo Glow */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/40 via-amber-400/30 to-cyan-400/30 blur-md pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-85" 
        />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(245,158,11,0.55)]"
        >
          <defs>
            {/* Ultra High-Definition Golden Gradient */}
            <linearGradient id="areteGoldVivid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>

            {/* Neon Cyan Circuit Gradient */}
            <linearGradient id="areteCyanVivid" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Luminous Inner Shield Radial */}
            <radialGradient id="areteShieldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Geometric Hexagonal Archon Frame */}
          <polygon
            points="50,4 92,26 92,74 50,96 8,74 8,26"
            stroke="url(#areteGoldVivid)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isDark ? "#080e1a" : "#ffffff"}
            fillOpacity={isDark ? "0.9" : "0.95"}
          />

          {/* Shield Core Glow */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="url(#areteShieldGlow)"
          />

          {/* Precision Cyan Compass Ring */}
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="url(#areteCyanVivid)"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeOpacity="0.9"
          />

          {/* Classical Laurel Wreath Wings (Aristotelian Triumph) */}
          <path
            d="M 23 70 C 18 54 22 36 34 24 C 30 34 32 46 39 52 C 31 53 26 61 23 70 Z"
            fill="url(#areteGoldVivid)"
          />
          <path
            d="M 77 70 C 82 54 78 36 66 24 C 70 34 68 46 61 52 C 69 53 74 61 77 70 Z"
            fill="url(#areteGoldVivid)"
          />

          {/* Supreme Greek Delta (Δ) Apex of Areté */}
          <polygon
            points="50,18 76,74 24,74"
            stroke="url(#areteGoldVivid)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="rgba(245, 158, 11, 0.25)"
          />

          {/* Cross Horizon Vector Beam (Cyan Knowledge Bar) */}
          <line
            x1="32"
            y1="56"
            x2="68"
            y2="56"
            stroke="url(#areteCyanVivid)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Central Polaris 8-Point Star at Apex */}
          <polygon
            points="50,8 52.5,15 59,17.5 52.5,20 50,27 47.5,20 41,17.5 47.5,15"
            fill="#ffffff"
            stroke="#fbbf24"
            strokeWidth="0.8"
            className="drop-shadow-[0_0_8px_#ffffff]"
          />
        </svg>
      </div>

      {/* TYPOGRAPHY & SCHOLARLY EMBLEM */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span
              className={`font-black tracking-wider uppercase font-mono ${dimensions.text} ${
                isDark
                  ? "text-white drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
                  : "text-slate-950 font-black"
              }`}
              style={{ letterSpacing: "0.09em" }}
            >
              ARETĒ
            </span>
            <span
              className={`font-mono font-black uppercase rounded-full border leading-none shadow-sm flex items-center gap-1 ${dimensions.badge} ${
                isDark
                  ? "bg-amber-400 text-slate-950 border-amber-300 font-extrabold shadow-amber-500/20"
                  : "bg-amber-500 text-slate-950 border-amber-600 font-extrabold"
              }`}
            >
              <span>Ἀρετή</span>
              <span className="text-[8px] opacity-75">• CLASS 10</span>
            </span>
          </div>

          {showMotto ? (
            <span
              className={`font-mono italic font-bold tracking-tight pt-1 ${dimensions.motto} ${
                isDark ? "text-cyan-300 drop-shadow-sm" : "text-cyan-800 font-bold"
              }`}
            >
              Excellence in the Boards • Aristotelian Mastery
            </span>
          ) : (
            <span
              className={`font-mono text-[11px] tracking-wider uppercase font-bold pt-1 ${
                isDark ? "text-amber-400/90" : "text-amber-800"
              }`}
            >
              All-India CBSE Command Cockpit
            </span>
          )}
        </div>
      )}
    </div>
  );
}
