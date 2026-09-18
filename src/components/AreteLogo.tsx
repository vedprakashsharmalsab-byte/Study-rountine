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
    sm: { icon: 28, text: "text-sm", motto: "text-[9px]", gap: "gap-2" },
    md: { icon: 38, text: "text-lg", motto: "text-[10px]", gap: "gap-2.5" },
    lg: { icon: 48, text: "text-2xl", motto: "text-xs", gap: "gap-3" },
    xl: { icon: 64, text: "text-3xl", motto: "text-sm", gap: "gap-3.5" }
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className} select-none group`}>
      {/* ARETĒ PRECISION VECTOR SIGIL */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {/* Ambient Glow */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/25 via-amber-400/20 to-cyan-400/20 blur-sm pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-70" 
        />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(245,158,11,0.35)]"
        >
          <defs>
            {/* Golden Metallic Gradient */}
            <linearGradient id="areteGold" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Celestial Cyan-Blue Gradient */}
            <linearGradient id="areteCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Radiant Core Radial */}
            <radialGradient id="areteCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Geometric Hexagon Shield Frame */}
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            stroke="url(#areteGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="url(#areteCyan)"
            strokeWidth="1.2"
            strokeDasharray="2 4"
            className="opacity-60"
          />

          {/* Classical Laurel Leaves (Left & Right Wreath Arc) */}
          <path
            d="M 26 68 C 22 55 24 38 34 26 C 31 34 32 44 38 50 C 32 50 28 58 26 68 Z"
            fill="url(#areteGold)"
            opacity="0.85"
          />
          <path
            d="M 74 68 C 78 55 76 38 66 26 C 69 34 68 44 62 50 C 68 50 72 58 74 68 Z"
            fill="url(#areteGold)"
            opacity="0.85"
          />

          {/* Central Greek Apex Delta (Δ) of Supreme Excellence */}
          <path
            d="M 50 20 L 73 72 L 27 72 Z"
            stroke="url(#areteGold)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="url(#areteCore)"
          />

          {/* Inner Horizon Crossing Beam */}
          <line
            x1="35"
            y1="56"
            x2="65"
            y2="56"
            stroke="url(#areteCyan)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Celestial Radiant Star at Apex (8-Point Peak Star) */}
          <polygon
            points="50,11 52.5,17 58.5,19.5 52.5,22 50,28 47.5,22 41.5,19.5 47.5,17"
            fill="#ffffff"
            className="drop-shadow-[0_0_6px_#ffffff]"
          />
        </svg>
      </div>

      {/* TYPOGRAPHY & MOTTO */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-wider uppercase font-mono ${dimensions.text} ${
                isDark
                  ? "bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 bg-clip-text text-transparent"
              }`}
              style={{ letterSpacing: "0.08em" }}
            >
              ARETĒ
            </span>
            <span
              className={`text-[9px] font-mono font-black uppercase px-1.5 py-0.5 rounded border leading-none ${
                isDark
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                  : "bg-amber-100 text-amber-900 border-amber-300"
              }`}
            >
              Ἀρετή
            </span>
          </div>

          {showMotto ? (
            <span
              className={`font-mono italic tracking-tight pt-0.5 ${dimensions.motto} ${
                isDark ? "text-cyan-400/90" : "text-cyan-800"
              }`}
            >
              Ad Astra per Scientiam
            </span>
          ) : (
            <span
              className={`font-mono text-[10px] tracking-wider uppercase font-semibold pt-0.5 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              CBSE Class 10 Command Engine
            </span>
          )}
        </div>
      )}
    </div>
  );
}
