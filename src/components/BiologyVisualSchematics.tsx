"use client";

import React, { useState } from "react";
import { Maximize2, ZoomOut, Sparkles, Award, CheckCircle2, Info } from "lucide-react";

interface BiologySchematicProps {
  id: string;
  title: string;
  isDark: boolean;
}

export default function BiologyVisualSchematic({
  id,
  title,
  isDark
}: BiologySchematicProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const bgCard = isDark ? "bg-[#0b101e] border-emerald-500/20" : "bg-emerald-50/30 border-emerald-200/80";
  const labelBg = isDark ? "rgba(15, 23, 42, 0.88)" : "rgba(255, 255, 255, 0.94)";
  const labelBorder = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#94a3b8" : "#64748b";

  const renderSVG = () => {
    switch (id) {
      // =====================================================================
      // 1. HUMAN HEART & DOUBLE CIRCULATION (CORONAL SECTION)
      // =====================================================================
      case "bio_heart":
      case "bio_heart_double_circulation":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradMyo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#be123c" />
                <stop offset="50%" stopColor="#9f1239" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
              <linearGradient id="gradAorta" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
              <linearGradient id="gradPulmArt" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="gradRA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="gradRV" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#075985" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="gradLA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#be123c" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="gradLV" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#9f1239" stopOpacity="0.9" />
              </linearGradient>
              <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.35" />
              </filter>
              <marker id="arrRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444" />
              </marker>
              <marker id="arrBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284c7" />
              </marker>
            </defs>

            {/* Background Grid Accent */}
            <rect width="760" height="480" fill="none" rx="16" />

            {/* --- GREAT VESSELS (POSTERIOR / SUPERIOR) --- */}
            {/* Superior Vena Cava */}
            <path d="M 270 50 L 270 140 Q 270 160 290 170" fill="none" stroke="#0284c7" strokeWidth="26" strokeLinecap="round" />
            {/* Inferior Vena Cava */}
            <path d="M 285 360 L 285 270" fill="none" stroke="#0284c7" strokeWidth="24" strokeLinecap="round" />

            {/* Pulmonary Trunk & Left/Right Branches */}
            <path d="M 370 170 Q 365 105 320 85" fill="none" stroke="url(#gradPulmArt)" strokeWidth="24" strokeLinecap="round" />
            <path d="M 320 85 L 245 75" fill="none" stroke="url(#gradPulmArt)" strokeWidth="18" strokeLinecap="round" />
            <path d="M 320 85 L 435 85" fill="none" stroke="url(#gradPulmArt)" strokeWidth="18" strokeLinecap="round" />

            {/* Systemic Aorta & Arch with 3 Branches */}
            <path d="M 400 170 Q 405 70 365 45 Q 330 45 325 80" fill="none" stroke="url(#gradAorta)" strokeWidth="30" strokeLinecap="round" />
            {/* 3 Arch arteries (Brachiocephalic, Carotid, Subclavian) */}
            <path d="M 355 45 L 345 15" stroke="#f43f5e" strokeWidth="9" strokeLinecap="round" />
            <path d="M 375 45 L 375 12" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
            <path d="M 395 50 L 405 18" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />

            {/* Pulmonary Veins (2 Left, 2 Right in red) */}
            <path d="M 470 135 L 525 125" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" />
            <path d="M 470 155 L 530 150" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" />
            <path d="M 260 145 L 220 145" stroke="#ef4444" strokeWidth="13" strokeLinecap="round" />

            {/* --- MAIN MYOCARDIAL BODY (HEART WALL & CAVITY) --- */}
            {/* Outer Muscular Pericardium & Myocardium */}
            <path
              d="M 380 95 C 310 90 230 130 230 220 C 230 320 340 400 395 435 C 445 400 550 320 545 220 C 540 130 460 90 380 95 Z"
              fill="url(#gradMyo)"
              stroke="#e11d48"
              strokeWidth="4"
              filter="url(#dropShadow)"
            />

            {/* INTERNAL CHAMBERS CORONAL SECTION */}
            {/* Right Atrium (Thin-walled receiving deox blood) */}
            <path d="M 255 170 C 255 140 315 140 320 180 C 320 220 270 235 255 170 Z" fill="url(#gradRA)" stroke="#0284c7" strokeWidth="2.5" />

            {/* Right Ventricle (Moderate wall thickness) */}
            <path d="M 270 245 C 275 225 335 225 345 255 C 355 315 310 365 345 375 C 320 375 270 335 270 245 Z" fill="url(#gradRV)" stroke="#0284c7" strokeWidth="3" />

            {/* Left Atrium (Thin-walled receiving ox blood) */}
            <path d="M 445 170 C 445 140 390 140 385 180 C 385 220 435 235 445 170 Z" fill="url(#gradLA)" stroke="#e11d48" strokeWidth="2.5" />

            {/* Left Ventricle (Thickest wall - 3x thicker to pump to whole body!) */}
            <path d="M 430 245 C 425 225 370 225 365 255 C 355 315 385 365 380 400 C 420 375 445 330 430 245 Z" fill="url(#gradLV)" stroke="#e11d48" strokeWidth="3.5" />

            {/* Central Interventricular Septum (Thick muscle partition) */}
            <path d="M 350 200 L 350 415 C 362 415 365 310 365 200 Z" fill="#881337" stroke="#fb7185" strokeWidth="2" />

            {/* VALVES */}
            {/* Tricuspid Valve (RA -> RV) */}
            <line x1="280" y1="230" x2="318" y2="238" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 285 234 L 290 275 M 310 238 L 315 275" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="2,2" />

            {/* Bicuspid / Mitral Valve (LA -> LV) */}
            <line x1="400" y1="238" x2="435" y2="230" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 405 238 L 402 275 M 428 234 L 420 275" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="2,2" />

            {/* Flow Indicator Arrows (Double Circulation) */}
            <path d="M 270 90 L 270 145" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrBlue)" />
            <path d="M 300 195 L 305 250" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrBlue)" />
            <path d="M 320 290 Q 345 220 355 120" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrBlue)" fill="none" />
            <path d="M 485 140 L 440 165" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrRed)" />
            <path d="M 420 195 L 415 255" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrRed)" />
            <path d="M 405 320 Q 395 240 380 90" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#arrRed)" fill="none" />

            {/* --- CALLOUT BADGES & LABELS --- */}
            {/* 1. Superior Vena Cava */}
            <g transform="translate(40, 45)">
              <circle cx="160" cy="20" r="4" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="20" x2="260" y2="70" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="900">Superior Vena Cava</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Deox blood from upper body</text>
            </g>

            {/* 2. Pulmonary Artery */}
            <g transform="translate(30, 110)">
              <circle cx="170" cy="20" r="4" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
              <line x1="170" y1="20" x2="265" y2="85" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="170" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="18" fill="#0ea5e9" fontSize="11" fontWeight="900">Pulmonary Artery</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Carries deox blood to Lungs</text>
            </g>

            {/* 3. Right Atrium & Tricuspid */}
            <g transform="translate(30, 185)">
              <circle cx="165" cy="20" r="4" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              <line x1="165" y1="20" x2="260" y2="190" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="900">Right Atrium & Valve</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Tricuspid valve stops backflow</text>
            </g>

            {/* 4. Right Ventricle */}
            <g transform="translate(40, 275)">
              <circle cx="155" cy="20" r="4" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              <line x1="155" y1="20" x2="280" y2="285" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="155" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="900">Right Ventricle</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Pumps to pulmonary trunk</text>
            </g>

            {/* 5. Inferior Vena Cava */}
            <g transform="translate(40, 360)">
              <circle cx="155" cy="20" r="4" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              <line x1="155" y1="20" x2="280" y2="350" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="155" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="900">Inferior Vena Cava</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">Deox blood from lower body</text>
            </g>

            {/* 6. Main Aorta (Systemic Arch) */}
            <g transform="translate(560, 35)">
              <circle cx="10" cy="20" r="4" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="20" x2="410" y2="40" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="18" fill="#ef4444" fontSize="11" fontWeight="900">Systemic Aorta</text>
              <text x="37" y="32" fill={textMuted} fontSize="9">Highest pressure (120 mmHg)</text>
            </g>

            {/* 7. Pulmonary Veins */}
            <g transform="translate(560, 115)">
              <circle cx="10" cy="20" r="4" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="20" x2="480" y2="140" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="18" fill="#f43f5e" fontSize="11" fontWeight="900">Pulmonary Veins (4x)</text>
              <text x="37" y="32" fill={textMuted} fontSize="9">Oxygenated blood from Lungs</text>
            </g>

            {/* 8. Left Atrium & Bicuspid */}
            <g transform="translate(560, 195)">
              <circle cx="10" cy="20" r="4" fill="#e11d48" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="20" x2="445" y2="200" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="18" fill="#e11d48" fontSize="11" fontWeight="900">Left Atrium & Mitral</text>
              <text x="37" y="32" fill={textMuted} fontSize="9">Bicuspid valve prevents reflux</text>
            </g>

            {/* 9. Left Ventricle (Thick Myocardium) */}
            <g transform="translate(560, 275)">
              <circle cx="10" cy="20" r="4" fill="#be123c" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="20" x2="435" y2="310" stroke="#be123c" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="18" fill="#be123c" fontSize="11" fontWeight="900">Left Ventricle (Thick)</text>
              <text x="37" y="32" fill="#10b981" fontSize="9" fontWeight="bold">3x thicker wall (Board Fact)</text>
            </g>

            {/* 10. Interventricular Septum */}
            <g transform="translate(560, 360)">
              <circle cx="10" cy="20" r="4" fill="#881337" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="20" x2="370" y2="345" stroke="#881337" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="18" fill="#fb7185" fontSize="11" fontWeight="900">Muscular Septum</text>
              <text x="37" y="32" fill={textMuted} fontSize="9">Prevents O₂/CO₂ mixing</text>
            </g>

            {/* Bottom CBSE Board Focus Pill */}
            <g transform="translate(140, 440)">
              <rect x="0" y="0" width="480" height="28" rx="14" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.1)"} stroke="#10b981" strokeWidth="1" />
              <text x="240" y="18" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ CBSE Board Key: Double Circulation = 1 Pulmonary Loop (Heart ↔ Lungs) + 1 Systemic Loop (Heart ↔ Body)
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 2. HUMAN RESPIRATORY SYSTEM & ALVEOLAR DIFFUSION
      // =====================================================================
      case "bio_respiratory_system":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradLungR" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <linearGradient id="gradLungL" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <radialGradient id="gradAlveolus">
                <stop offset="0%" stopColor="#fecdd3" />
                <stop offset="60%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </radialGradient>
            </defs>

            {/* UPPER AIRWAY */}
            {/* Nasal Cavity & Pharynx outline */}
            <path d="M 285 25 C 310 25 320 40 320 60 L 320 80" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            <path d="M 270 35 L 290 35" stroke="#38bdf8" strokeWidth="4" />

            {/* Epiglottis Flap & Larynx (Voice box) */}
            <rect x="308" y="78" width="24" height="20" rx="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            <path d="M 305 76 Q 320 70 335 76" stroke="#fbbf24" strokeWidth="3" fill="none" />

            {/* Trachea (Windpipe with C-shaped cartilage rings) */}
            <rect x="312" y="98" width="16" height="75" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="2" />
            {[106, 116, 126, 136, 146, 156, 166].map(y => (
              <path key={y} d={`M 308 ${y} Q 320 ${y-3} 332 ${y}`} stroke="#0284c7" strokeWidth="3" fill="none" strokeLinecap="round" />
            ))}

            {/* Primary Bronchi (Bifurcation at Carina) */}
            <path d="M 320 173 L 260 215" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 320 173 L 380 215" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" fill="none" />

            {/* LUNGS PARENCHYMA */}
            {/* Right Lung (3 Lobes: Superior, Middle, Inferior) */}
            <path
              d="M 245 190 C 185 190 145 240 145 320 C 145 375 195 390 255 385 C 285 385 285 315 255 210 Z"
              fill="url(#gradLungR)"
              opacity="0.85"
              stroke="#be123c"
              strokeWidth="3"
            />
            {/* Horizontal & Oblique Fissures */}
            <path d="M 148 275 Q 200 280 250 260" stroke="#881337" strokeWidth="2" strokeDasharray="3,2" fill="none" />
            <path d="M 152 335 Q 210 325 252 330" stroke="#881337" strokeWidth="2" strokeDasharray="3,2" fill="none" />

            {/* Left Lung (2 Lobes with deep Cardiac Notch for heart) */}
            <path
              d="M 395 190 C 455 190 495 240 495 320 C 495 375 445 390 385 385 C 360 385 370 330 390 300 C 375 250 375 210 395 190 Z"
              fill="url(#gradLungL)"
              opacity="0.85"
              stroke="#be123c"
              strokeWidth="3"
            />
            {/* Left Oblique Fissure */}
            <path d="M 405 250 Q 450 310 492 340" stroke="#881337" strokeWidth="2" strokeDasharray="3,2" fill="none" />

            {/* Intricate Bronchial Tree */}
            <g stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" fill="none">
              {/* Right secondary & tertiary */}
              <path d="M 260 215 L 210 245 M 210 245 L 180 270 M 210 245 L 225 280 M 260 215 L 250 280 M 250 280 L 230 330 M 250 280 L 270 340" />
              {/* Left secondary & tertiary */}
              <path d="M 380 215 L 430 245 M 430 245 L 460 270 M 430 245 L 420 280 M 380 215 L 390 270 M 390 270 L 415 330 M 390 270 L 440 330" />
            </g>

            {/* Muscular Diaphragm (Dome shape at base) */}
            <path d="M 125 405 Q 320 365 515 405" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
            <path d="M 130 412 Q 320 375 510 412" stroke="#059669" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* INSET: MAGNIFIED ALVEOLAR SAC & CAPILLARY NETWORK */}
            <g transform="translate(545, 130)">
              <rect x="0" y="0" width="190" height="230" rx="14" fill={labelBg} stroke="#f43f5e" strokeWidth="1.5" />
              <text x="95" y="24" fill="#e11d48" fontSize="11" fontWeight="900" textAnchor="middle">Magnified Alveolar Sac</text>
              <text x="95" y="38" fill={textMuted} fontSize="8" textAnchor="middle">Respiratory Exchange Surface</text>

              {/* Alveolar Cluster Bubbles */}
              <circle cx="80" cy="115" r="28" fill="url(#gradAlveolus)" stroke="#be123c" strokeWidth="2" />
              <circle cx="115" cy="105" r="24" fill="url(#gradAlveolus)" stroke="#be123c" strokeWidth="2" />
              <circle cx="105" cy="140" r="26" fill="url(#gradAlveolus)" stroke="#be123c" strokeWidth="2" />

              {/* Capillary Mesh Wrapping (Blue deox -> Red ox) */}
              <path d="M 40 85 Q 70 80 80 115 Q 90 150 110 170 L 150 170" fill="none" stroke="#0284c7" strokeWidth="4" />
              <path d="M 150 170 Q 140 120 115 105 Q 90 85 50 85" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="5,2" />

              {/* Gas Diffusion Indicators */}
              <text x="75" y="115" fill="#fff" fontSize="10" fontWeight="black" textAnchor="middle">O₂ ➔</text>
              <text x="105" y="145" fill="#fff" fontSize="10" fontWeight="black" textAnchor="middle">⬅ CO₂</text>

              <rect x="15" y="185" width="160" height="32" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} />
              <text x="95" y="198" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Huge Surface Area (~80 m²)</text>
              <text x="95" y="210" fill={textMuted} fontSize="7" textAnchor="middle">Single cell thin diffusion membrane</text>
            </g>

            {/* LABELS WITH LEADER LINES */}
            {/* Nasal passage */}
            <g transform="translate(50, 20)">
              <circle cx="140" cy="18" r="4" fill="#38bdf8" stroke="#fff" strokeWidth="1.5" />
              <line x1="140" y1="18" x2="280" y2="30" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="140" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#0284c7" fontSize="10" fontWeight="900">Nasal Passage</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">Filters, warms & moistens air</text>
            </g>

            {/* Larynx & Epiglottis */}
            <g transform="translate(50, 75)">
              <circle cx="150" cy="18" r="4" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
              <line x1="150" y1="18" x2="305" y2="85" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="150" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#d97706" fontSize="10" fontWeight="900">Epiglottis & Larynx</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">Prevents food entering trachea</text>
            </g>

            {/* Trachea Cartilage Rings */}
            <g transform="translate(50, 130)">
              <circle cx="160" cy="18" r="4" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="308" y2="135" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#0284c7" fontSize="10" fontWeight="900">C-Shaped Cartilage Rings</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">Prevents collapse during intake</text>
            </g>

            {/* Right Lung (3 Lobes) */}
            <g transform="translate(40, 220)">
              <circle cx="140" cy="18" r="4" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
              <line x1="140" y1="18" x2="200" y2="280" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="140" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#e11d48" fontSize="10" fontWeight="900">Right Lung (3 Lobes)</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">Superior, Middle, Inferior</text>
            </g>

            {/* Left Lung Cardiac Notch */}
            <g transform="translate(40, 310)">
              <circle cx="160" cy="18" r="4" fill="#be123c" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="375" y2="285" stroke="#be123c" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#be123c" fontSize="10" fontWeight="900">Cardiac Notch (Left)</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">2 lobes + space for Heart</text>
            </g>

            {/* Diaphragm */}
            <g transform="translate(40, 395)">
              <circle cx="150" cy="18" r="4" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
              <line x1="150" y1="18" x2="240" y2="400" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="150" height="36" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#10b981" fontSize="10" fontWeight="900">Muscular Diaphragm</text>
              <text x="10" y="28" fill={textMuted} fontSize="8">Flattens down during inhalation</text>
            </g>

            {/* Bottom CBSE Board Note */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(14, 165, 233, 0.12)" : "rgba(14, 165, 233, 0.1)"} stroke="#0ea5e9" strokeWidth="1" />
              <text x="240" y="17" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ CBSE Board Question: Mechanism of breathing involves ribs moving up/out & diaphragm flattening
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 3. NEPHRON & HUMAN EXCRETORY SYSTEM
      // =====================================================================
      case "bio_nephron_excretory":
      case "bio_excretion_nephron":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradKidney" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
              <linearGradient id="gradBowman" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* LEFT HALF: HUMAN EXCRETORY SYSTEM */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="235" height="405" rx="14" fill={isDark ? "#070b14" : "#f8fafc"} stroke={labelBorder} strokeWidth="1.5" />
              <text x="117" y="26" fill="#10b981" fontSize="12" fontWeight="900" textAnchor="middle">Human Excretory System</text>

              {/* Inferior Vena Cava (Blue) & Abdominal Aorta (Red) */}
              <path d="M 105 45 L 105 280" stroke="#0284c7" strokeWidth="12" strokeLinecap="round" />
              <path d="M 125 45 L 125 280" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />

              {/* Renal Arteries & Veins */}
              <path d="M 125 110 L 160 115" stroke="#dc2626" strokeWidth="7" />
              <path d="M 105 125 L 75 130" stroke="#0284c7" strokeWidth="7" />
              <path d="M 125 125 L 75 120" stroke="#dc2626" strokeWidth="7" />
              <path d="M 105 115 L 160 125" stroke="#0284c7" strokeWidth="7" />

              {/* Left Kidney (Higher) & Right Kidney (Slightly lower due to liver) */}
              <path d="M 50 85 C 20 100 20 155 50 170 C 68 150 68 105 50 85 Z" fill="url(#gradKidney)" stroke="#b91c1c" strokeWidth="2.5" />
              <path d="M 185 100 C 215 115 215 170 185 185 C 167 165 167 120 185 100 Z" fill="url(#gradKidney)" stroke="#b91c1c" strokeWidth="2.5" />
              <text x="45" y="76" fill="#f87171" fontSize="9" fontWeight="bold">Right Kidney</text>
              <text x="190" y="90" fill="#f87171" fontSize="9" fontWeight="bold">Left Kidney</text>

              {/* Ureters (Slender tubes carrying urine by peristalsis) */}
              <path d="M 60 145 Q 85 240 105 295" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <path d="M 175 160 Q 145 240 125 295" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <text x="117" y="240" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">Ureters (2x)</text>

              {/* Urinary Bladder (Pear-shaped muscular sac) */}
              <ellipse cx="115" cy="325" rx="36" ry="26" fill="#f59e0b" opacity="0.3" stroke="#d97706" strokeWidth="3" />
              <text x="115" y="328" fill={textPrimary} fontSize="10" fontWeight="black" textAnchor="middle">Urinary Bladder</text>
              <text x="115" y="340" fill={textMuted} fontSize="7" textAnchor="middle">Stores urine (~500 mL)</text>

              {/* Urethra */}
              <line x1="115" y1="351" x2="115" y2="385" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
              <text x="115" y="398" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Urethra</text>
            </g>

            {/* RIGHT HALF: DETAILED NEPHRON FUNCTIONAL UNIT */}
            <g transform="translate(285, 20)">
              <rect x="0" y="0" width="455" height="405" rx="14" fill={isDark ? "#070b14" : "#f8fafc"} stroke="#eab308" strokeWidth="1.5" />
              <text x="227" y="26" fill="#eab308" fontSize="13" fontWeight="900" textAnchor="middle">Microscopic Structure of a Nephron (~1 Million per Kidney)</text>

              {/* 1. Afferent Arteriole (Wider) & Efferent Arteriole (Narrower) */}
              <path d="M 30 70 L 65 95" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
              <text x="15" y="65" fill="#ef4444" fontSize="9" fontWeight="bold">Afferent Arteriole (Wide)</text>
              <path d="M 85 95 L 120 70" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
              <text x="135" y="65" fill="#ef4444" fontSize="9" fontWeight="bold">Efferent Arteriole (Narrow)</text>

              {/* Glomerulus (High Pressure Capillary Knot) */}
              <circle cx="75" cy="105" r="22" fill="#b91c1c" opacity="0.35" stroke="#ef4444" strokeWidth="2.5" />
              <path d="M 65 95 Q 75 115 85 95 Q 75 125 65 105" stroke="#ef4444" strokeWidth="3" fill="none" />
              <text x="75" y="138" fill="#ef4444" fontSize="9" fontWeight="black" textAnchor="middle">Glomerulus (Ultrafiltration)</text>

              {/* 2. Bowman's Capsule (Double-walled Cup) */}
              <path
                d="M 50 85 C 35 125 65 155 100 140 C 115 130 115 100 100 85"
                fill="none"
                stroke="#eab308"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <text x="75" y="160" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="middle">Bowman's Capsule</text>

              {/* 3. Proximal Convoluted Tubule (PCT) - Heavy Reabsorption */}
              <path
                d="M 100 140 Q 140 180 110 205 Q 85 225 120 250"
                fill="none"
                stroke="#10b981"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <rect x="135" y="175" width="165" height="38" rx="6" fill={labelBg} stroke="#10b981" strokeWidth="1" />
              <text x="145" y="191" fill="#10b981" fontSize="9" fontWeight="black">PCT (Major Reabsorption)</text>
              <text x="145" y="204" fill={textMuted} fontSize="8">100% Glucose, Amino acids, 75% NaCl & H₂O</text>

              {/* 4. Loop of Henle (Hairpin Loop deep into Medulla) */}
              {/* Descending limb (thin, water permeable) */}
              <path d="M 120 250 L 120 355" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
              {/* Hairpin bend */}
              <path d="M 120 355 Q 142 380 165 355" fill="none" stroke="#0ea5e9" strokeWidth="5" />
              {/* Ascending limb (thick, salt permeable) */}
              <path d="M 165 355 L 165 250" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
              <rect x="110" y="380" width="145" height="20" rx="4" fill={labelBg} stroke="#0ea5e9" strokeWidth="1" />
              <text x="182" y="394" fill="#0ea5e9" fontSize="8" fontWeight="bold" textAnchor="middle">Henle's Loop (Water Conservation)</text>

              {/* 5. Distal Convoluted Tubule (DCT) */}
              <path
                d="M 165 250 Q 195 215 230 235 Q 260 250 280 215"
                fill="none"
                stroke="#10b981"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <rect x="220" y="175" width="125" height="30" rx="6" fill={labelBg} stroke="#10b981" strokeWidth="1" />
              <text x="228" y="190" fill="#10b981" fontSize="9" fontWeight="black">DCT</text>
              <text x="228" y="200" fill={textMuted} fontSize="7">Conditional water & salt uptake</text>

              {/* 6. Collecting Duct (Straight vertical duct) */}
              <path d="M 280 215 L 305 215" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
              <line x1="305" y1="50" x2="305" y2="380" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" />
              {/* Side nephron entries */}
              <line x1="305" y1="95" x2="330" y2="80" stroke="#f59e0b" strokeWidth="4" />
              <line x1="305" y1="150" x2="330" y2="135" stroke="#f59e0b" strokeWidth="4" />
              <line x1="305" y1="290" x2="330" y2="275" stroke="#f59e0b" strokeWidth="4" />

              <g transform="translate(325, 205)">
                <rect x="0" y="0" width="120" height="42" rx="6" fill={labelBg} stroke="#f59e0b" strokeWidth="1" />
                <text x="10" y="18" fill="#d97706" fontSize="10" fontWeight="black">Collecting Duct</text>
                <text x="10" y="30" fill={textMuted} fontSize="8">Drains concentrated urine</text>
                <text x="10" y="40" fill={textMuted} fontSize="7">to Renal Pelvis & Ureter</text>
              </g>

              {/* Urine flow arrow out */}
              <path d="M 305 385 L 305 400" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrBlue)" />
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 440)">
              <rect x="0" y="0" width="480" height="28" rx="14" fill={isDark ? "rgba(234, 179, 8, 0.12)" : "rgba(234, 179, 8, 0.1)"} stroke="#eab308" strokeWidth="1" />
              <text x="240" y="18" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ 3 Steps of Urine Formation: 1. Glomerular Ultrafiltration → 2. Tubular Reabsorption → 3. Tubular Secretion
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 4. HUMAN ALIMENTARY CANAL (DIGESTIVE SYSTEM)
      // =====================================================================
      case "bio_alimentary_canal":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradStomach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
              <linearGradient id="gradLiver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <linearGradient id="gradSmallInt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>

            {/* MOUTH & BUCCAL CAVITY */}
            <path d="M 370 20 Q 405 20 405 50 Q 385 60 370 60" fill="#fbcfe8" stroke="#ec4899" strokeWidth="3" />
            <circle cx="410" cy="38" r="6" fill="#ec4899" />

            {/* OESOPHAGUS (Food pipe with peristaltic waves) */}
            <path d="M 375 60 L 375 140" stroke="#f43f5e" strokeWidth="9" strokeLinecap="round" />

            {/* J-SHAPED STOMACH */}
            <path
              d="M 375 140 C 420 145 440 175 435 215 C 425 245 375 245 345 220 C 340 185 355 155 375 140 Z"
              fill="url(#gradStomach)"
              stroke="#9f1239"
              strokeWidth="3.5"
            />

            {/* LIVER (Massive triangular gland on right side of body / left on page) */}
            <path
              d="M 260 125 C 330 115 365 135 345 205 C 300 215 250 185 260 125 Z"
              fill="url(#gradLiver)"
              stroke="#7f1d1d"
              strokeWidth="3"
            />
            {/* Gallbladder (Green sac) */}
            <ellipse cx="325" cy="195" rx="10" ry="16" fill="#15803d" stroke="#166534" strokeWidth="2" />
            {/* Bile duct leading to duodenum */}
            <path d="M 328 208 Q 338 235 355 242" fill="none" stroke="#16a34a" strokeWidth="3" />

            {/* C-SHAPED DUODENUM */}
            <path d="M 350 225 C 320 240 320 275 355 285" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />

            {/* PANCREAS (Leaf-like gland in Duodenum C-curve) */}
            <path d="M 355 240 C 390 235 425 245 440 250 C 410 265 375 260 355 240 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />

            {/* LARGE INTESTINE (Surrounding Frame) */}
            <path
              d="M 305 385 L 305 285 Q 305 265 325 265 L 435 265 Q 455 265 455 285 L 455 385"
              fill="none"
              stroke="#65a30d"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Vermiform Appendix */}
            <path d="M 305 385 L 295 405" stroke="#65a30d" strokeWidth="6" strokeLinecap="round" />

            {/* SMALL INTESTINE (Intricate dense coiled loops in center) */}
            <circle cx="380" cy="335" r="50" fill="url(#gradSmallInt)" opacity="0.4" stroke="#ea580c" strokeWidth="2" />
            <path
              d="M 350 310 Q 380 325 410 310 Q 380 340 350 355 Q 380 370 410 355"
              fill="none"
              stroke="#ea580c"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* RECTUM & ANUS */}
            <path d="M 380 385 L 380 435" stroke="#78350f" strokeWidth="10" strokeLinecap="round" />

            {/* CALLOUT BADGES */}
            {/* Mouth */}
            <g transform="translate(60, 25)">
              <circle cx="160" cy="18" r="4" fill="#ec4899" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="385" y2="35" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#db2777" fontSize="11" fontWeight="900">Mouth / Salivary Glands</text>
              <text x="10" y="30" fill={textMuted} fontSize="8">Salivary Amylase (Starch → Sugar)</text>
            </g>

            {/* Oesophagus */}
            <g transform="translate(60, 85)">
              <circle cx="160" cy="18" r="4" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="375" y2="105" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#f43f5e" fontSize="11" fontWeight="900">Oesophagus</text>
              <text x="10" y="30" fill={textMuted} fontSize="8">Peristaltic rhythmic contraction</text>
            </g>

            {/* Liver & Gallbladder */}
            <g transform="translate(60, 155)">
              <circle cx="160" cy="18" r="4" fill="#991b1b" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="295" y2="165" stroke="#991b1b" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#ef4444" fontSize="11" fontWeight="900">Liver & Gallbladder</text>
              <text x="10" y="30" fill={textMuted} fontSize="8">Bile salts emulsify large fat globules</text>
            </g>

            {/* Small Intestine */}
            <g transform="translate(60, 290)">
              <circle cx="160" cy="18" r="4" fill="#ea580c" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="350" y2="330" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="10" y="16" fill="#ea580c" fontSize="11" fontWeight="900">Small Intestine (6m)</text>
              <text x="10" y="30" fill={textMuted} fontSize="8">Villi absorb nutrients into blood</text>
            </g>

            {/* Stomach */}
            <g transform="translate(540, 140)">
              <circle cx="10" cy="18" r="4" fill="#e11d48" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="425" y2="185" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="35" y="16" fill="#e11d48" fontSize="11" fontWeight="900">Stomach (Gastric Juice)</text>
              <text x="35" y="30" fill={textMuted} fontSize="8">HCl (pH 1.8) + Pepsin + Mucus</text>
            </g>

            {/* Pancreas */}
            <g transform="translate(540, 220)">
              <circle cx="10" cy="18" r="4" fill="#ca8a04" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="415" y2="250" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="35" y="16" fill="#ca8a04" fontSize="11" fontWeight="900">Pancreas (Enzymes)</text>
              <text x="35" y="30" fill={textMuted} fontSize="8">Trypsin (proteins) + Lipase (fats)</text>
            </g>

            {/* Large Intestine & Anus */}
            <g transform="translate(540, 310)">
              <circle cx="10" cy="18" r="4" fill="#65a30d" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="455" y2="340" stroke="#65a30d" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="40" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="35" y="16" fill="#65a30d" fontSize="11" fontWeight="900">Large Intestine & Anus</text>
              <text x="35" y="30" fill={textMuted} fontSize="8">Water reabsorption; Anal sphincter</text>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(225, 29, 72, 0.12)" : "rgba(225, 29, 72, 0.1)"} stroke="#e11d48" strokeWidth="1" />
              <text x="240" y="17" fill="#e11d48" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ CBSE Board Favorite: Role of Mucus = protects inner stomach lining from excoriation by HCl
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 5. NEURON & REFLEX ARC
      // =====================================================================
      case "bio_neuron_reflex_arc":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradCyton" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="gradMyelin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* PART 1: COMPLETE MULTIPOLAR NEURON (TOP SECTION) */}
            <g transform="translate(40, 20)">
              <text x="10" y="18" fill="#0284c7" fontSize="12" fontWeight="900">1. Structure of a Typical Neuron (Nerve Cell)</text>

              {/* Branched Dendrites */}
              <g stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 85 75 L 45 45 M 45 45 L 20 30 M 45 45 L 35 60" />
                <path d="M 115 50 L 115 15 M 115 15 L 100 0 M 115 15 L 135 5" />
                <path d="M 80 105 L 45 125 M 45 125 L 25 115 M 45 125 L 35 145" />
                <path d="M 125 120 L 140 150 M 140 150 L 130 165 M 140 150 L 160 160" />
              </g>

              {/* Cyton / Cell Body / Soma */}
              <polygon
                points="85,75 115,50 145,70 135,115 95,115 75,90"
                fill="url(#gradCyton)"
                stroke="#0369a1"
                strokeWidth="2"
              />
              {/* Nucleus & Nissl granules */}
              <circle cx="108" cy="85" r="14" fill="#0369a1" />
              <circle cx="108" cy="85" r="6" fill="#fff" />
              <text x="108" y="125" fill={textPrimary} fontSize="9" fontWeight="black" textAnchor="middle">Cyton (Cell Body)</text>

              {/* Axon Fiber */}
              <line x1="145" y1="85" x2="520" y2="85" stroke="#eab308" strokeWidth="5" />

              {/* 5 Myelin Sheath Segments with Schwann Nuclei */}
              {[165, 235, 305, 375, 445].map((x, idx) => (
                <g key={idx}>
                  <rect x={x} y="68" width="55" height="34" rx="8" fill="url(#gradMyelin)" stroke="#ca8a04" strokeWidth="2" />
                  <circle cx={x + 28} cy="85" r="4" fill="#854d0e" />
                </g>
              ))}

              {/* Nodes of Ranvier callout */}
              <line x1="227" y1="65" x2="227" y2="105" stroke="#f43f5e" strokeWidth="3" />

              {/* Nerve Endings (Synaptic Knobs) */}
              <g stroke="#eab308" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 520 85 L 565 60 M 565 60 L 590 45 M 565 60 L 585 75" />
                <path d="M 520 85 L 565 110 M 565 110 L 590 125 M 565 110 L 585 95" />
              </g>
              {[ [590, 45], [585, 75], [590, 125], [585, 95] ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
              ))}

              {/* Labels */}
              <text x="40" y="20" fill="#0284c7" fontSize="10" fontWeight="bold">Dendrites (Receptors)</text>
              <text x="330" y="55" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="middle">Axon (Insulated with Myelin Sheath)</text>
              <text x="227" y="125" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">Node of Ranvier</text>
              <text x="600" y="85" fill="#ef4444" fontSize="10" fontWeight="bold">Nerve Endings (Synaptic Knobs)</text>
            </g>

            {/* SEPARATOR */}
            <line x1="40" y1="185" x2="720" y2="185" stroke={labelBorder} strokeWidth="1.5" strokeDasharray="6,4" />

            {/* PART 2: REFLEX ARC PATHWAY (BOTTOM SECTION) */}
            <g transform="translate(40, 200)">
              <text x="10" y="18" fill="#10b981" fontSize="12" fontWeight="900">2. Reflex Arc Pathway (Involuntary Instant Response to Stimulus)</text>

              {/* Heat Stimulus (Candle & Finger) */}
              <g transform="translate(15, 60)">
                {/* Candle */}
                <rect x="15" y="60" width="20" height="45" rx="3" fill="#cbd5e1" />
                <ellipse cx="25" cy="50" rx="8" ry="14" fill="#f59e0b" />
                <ellipse cx="25" cy="53" rx="4" ry="8" fill="#fef08a" />
                {/* Finger touching flame */}
                <path d="M 30 45 Q 60 40 90 40 L 90 60 Q 60 60 40 55 Z" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
                <text x="55" y="125" fill="#ea580c" fontSize="10" fontWeight="bold" textAnchor="middle">Heat Stimulus</text>
              </g>

              {/* Receptor: Skin */}
              <g transform="translate(115, 80)">
                <rect x="0" y="0" width="95" height="50" rx="8" fill={labelBg} stroke="#f97316" strokeWidth="2" />
                <text x="12" y="20" fill="#ea580c" fontSize="10" fontWeight="900">1. Receptors</text>
                <text x="12" y="32" fill={textMuted} fontSize="8">Thermo-receptors</text>
                <text x="12" y="42" fill={textMuted} fontSize="8">in skin of hand</text>
              </g>

              {/* Arrow 1: Sensory Neuron (Afferent) */}
              <path d="M 215 105 Q 290 55 375 75" fill="none" stroke="#0284c7" strokeWidth="4" markerEnd="url(#arrBlue)" />
              <text x="290" y="65" fill="#0284c7" fontSize="10" fontWeight="black" textAnchor="middle">2. Sensory Neuron ➔</text>

              {/* Spinal Cord (Cross-Section with H-shaped Grey Matter) */}
              <g transform="translate(385, 40)">
                <rect x="0" y="0" width="155" height="120" rx="16" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="2.5" />
                <text x="77" y="22" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Spinal Cord (CNS)</text>

                {/* Butterfly / H-shaped Grey Matter */}
                <path
                  d="M 40 45 C 55 55 60 65 77 65 C 95 65 100 55 115 45 C 105 75 95 80 115 100 C 95 90 95 85 77 85 C 60 85 60 90 40 100 C 60 80 50 75 40 45 Z"
                  fill="#10b981"
                  opacity="0.4"
                  stroke="#059669"
                  strokeWidth="2"
                />
                <circle cx="77" cy="75" r="4" fill="#047857" />

                {/* Relay Neuron inside Grey matter */}
                <line x1="55" y1="58" x2="95" y2="88" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                <text x="77" y="112" fill="#ca8a04" fontSize="9" fontWeight="bold" textAnchor="middle">3. Relay Neuron</text>
              </g>

              {/* Arrow 2: Motor Neuron (Efferent) */}
              <path d="M 425 160 Q 330 195 215 170" fill="none" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrBlue)" />
              <text x="320" y="195" fill="#d97706" fontSize="10" fontWeight="black" textAnchor="middle">⬅ 4. Motor Neuron</text>

              {/* Effector: Arm Bicep Muscle */}
              <g transform="translate(95, 150)">
                <rect x="0" y="0" width="115" height="48" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="2" />
                <text x="12" y="20" fill="#059669" fontSize="10" fontWeight="900">5. Effector (Muscle)</text>
                <text x="12" y="32" fill={textMuted} fontSize="8">Biceps contract instantly;</text>
                <text x="12" y="42" fill="#10b981" fontSize="8" fontWeight="bold">Hand withdraws in 50ms!</text>
              </g>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(2, 132, 199, 0.12)" : "rgba(2, 132, 199, 0.1)"} stroke="#0284c7" strokeWidth="1" />
              <text x="240" y="17" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ Chemical Synapse: Electrical impulse triggers release of Neurotransmitter (Acetylcholine) across synaptic cleft
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 6. HUMAN BRAIN (MIDSAGITTAL CROSS-SECTION)
      // =====================================================================
      case "bio_brain":
      case "bio_human_brain":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradCerebrum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <linearGradient id="gradCerebellum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            {/* CRANIUM / SKULL BONE */}
            <path
              d="M 180 340 C 140 230 180 80 370 70 C 540 60 600 200 580 330"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* MENINGES & CSF CUSHION SPACE */}
            <path
              d="M 190 335 C 155 235 190 95 370 85 C 530 75 585 205 570 325"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeDasharray="4,2"
            />

            {/* FOREBRAIN: CEREBRUM (SULCI & GYRI CONVOLUTIONS) */}
            <path
              d="M 205 320 C 175 240 205 110 370 100 C 515 90 565 210 550 310 C 490 300 450 315 400 315 C 340 315 280 295 205 320 Z"
              fill="url(#gradCerebrum)"
              opacity="0.8"
              stroke="#be123c"
              strokeWidth="3.5"
            />
            {/* Realistic Sulci & Gyri folds */}
            <g stroke="#be123c" strokeWidth="2.5" fill="none" strokeLinecap="round">
              <path d="M 250 160 Q 300 130 360 165 Q 420 135 480 170" />
              <path d="M 230 220 Q 290 190 350 225 Q 430 190 510 220" />
              <path d="M 270 265 Q 330 240 380 265 Q 450 240 490 270" />
              <path d="M 320 110 Q 340 150 330 180" />
              <path d="M 430 105 Q 420 145 440 175" />
            </g>

            {/* CORPUS CALLOSUM (C-shaped thick nerve tract bridge) */}
            <path d="M 310 245 C 330 200 420 200 445 245" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
            <path d="M 315 245 C 335 210 415 210 440 245" fill="none" stroke="#64748b" strokeWidth="3" />

            {/* THALAMUS & HYPOTHALAMUS */}
            <ellipse cx="380" cy="255" rx="22" ry="16" fill="#f59e0b" opacity="0.8" stroke="#d97706" strokeWidth="2" />
            <path d="M 360 265 Q 375 285 365 295" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />

            {/* PITUITARY GLAND (Master endocrine gland on stalk) */}
            <ellipse cx="355" cy="315" rx="9" ry="7" fill="#ec4899" stroke="#be185d" strokeWidth="2" />

            {/* MIDBRAIN */}
            <circle cx="410" cy="275" r="16" fill="#a855f7" opacity="0.85" stroke="#7e22ce" strokeWidth="2" />

            {/* HINDBRAIN: PONS VAROLII */}
            <rect x="385" y="295" width="40" height="28" rx="8" fill="#0ea5e9" opacity="0.8" stroke="#0284c7" strokeWidth="2" />

            {/* HINDBRAIN: MEDULLA OBLONGATA */}
            <rect x="390" y="325" width="30" height="40" rx="8" fill="#6366f1" opacity="0.8" stroke="#4338ca" strokeWidth="2" />

            {/* HINDBRAIN: CEREBELLUM (Tree of Life / Arbor Vitae branched foliage) */}
            <path
              d="M 455 315 C 525 300 560 360 520 410 C 470 425 450 380 455 315 Z"
              fill="url(#gradCerebellum)"
              stroke="#047857"
              strokeWidth="3"
            />
            {/* Arbor Vitae White Matter Tree Branching */}
            <path d="M 465 355 Q 490 355 510 345 M 490 355 L 515 375 M 490 355 L 485 395" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* SPINAL CORD CONTINUATION */}
            <path d="M 405 365 L 405 440" stroke="#94a3b8" strokeWidth="18" strokeLinecap="round" />

            {/* LABELS AND LEADER LINES */}
            {/* Cranium */}
            <g transform="translate(60, 45)">
              <circle cx="160" cy="18" r="4" fill="#94a3b8" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="300" y2="75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#94a3b8" fontSize="11" fontWeight="900">Cranium (Skull Box)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Bony shield + CSF fluid cushion</text>
            </g>

            {/* Cerebrum */}
            <g transform="translate(50, 115)">
              <circle cx="170" cy="18" r="4" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
              <line x1="170" y1="18" x2="270" y2="155" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="170" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#e11d48" fontSize="11" fontWeight="900">Cerebrum (Forebrain)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">80% brain volume; Thinking, Memory,</text>
              <text x="12" y="38" fill={textMuted} fontSize="8">Voluntary actions & Sensory areas</text>
            </g>

            {/* Hypothalamus & Pituitary */}
            <g transform="translate(50, 240)">
              <circle cx="170" cy="18" r="4" fill="#ec4899" stroke="#fff" strokeWidth="1.5" />
              <line x1="170" y1="18" x2="350" y2="310" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="170" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#db2777" fontSize="11" fontWeight="900">Hypothalamus & Pituitary</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Controls hunger, thirst, temp</text>
              <text x="12" y="38" fill={textMuted} fontSize="8">& Master endocrine secretion</text>
            </g>

            {/* Midbrain */}
            <g transform="translate(560, 150)">
              <circle cx="10" cy="18" r="4" fill="#a855f7" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="425" y2="275" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#a855f7" fontSize="11" fontWeight="900">Midbrain</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Visual & auditory reflex center</text>
            </g>

            {/* Cerebellum */}
            <g transform="translate(560, 230)">
              <circle cx="10" cy="18" r="4" fill="#059669" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="495" y2="350" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#059669" fontSize="11" fontWeight="900">Cerebellum (Hindbrain)</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Precision of voluntary motion,</text>
              <text x="37" y="38" fill="#059669" fontSize="8" fontWeight="bold">Posture & equilibrium balance</text>
            </g>

            {/* Medulla Oblongata */}
            <g transform="translate(560, 315)">
              <circle cx="10" cy="18" r="4" fill="#4f46e5" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="420" y2="345" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="165" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#4f46e5" fontSize="11" fontWeight="900">Medulla Oblongata</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Involuntary: Blood pressure,</text>
              <text x="37" y="38" fill={textMuted} fontSize="8">Salivation, vomiting, swallowing</text>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(5, 150, 105, 0.12)" : "rgba(5, 150, 105, 0.1)"} stroke="#059669" strokeWidth="1" />
              <text x="240" y="17" fill="#059669" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ Board Favorite: Riding a bicycle / walking in straight line is controlled by CEREBELLUM
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 7. CROSS SECTION OF LEAF & STOMATA
      // =====================================================================
      case "bio_leaf_stomata":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradPalisade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>

            {/* PART A: 3D ANATOMICAL LEAF LAYERS (LEFT HALF) */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="355" height="405" rx="14" fill={isDark ? "#070b14" : "#f8fafc"} stroke={labelBorder} strokeWidth="1.5" />
              <text x="177" y="24" fill="#16a34a" fontSize="12" fontWeight="900" textAnchor="middle">Part A: Dicot Leaf Transverse Section</text>

              {/* 1. Waxy Cuticle Layer */}
              <rect x="25" y="45" width="305" height="8" rx="2" fill="#38bdf8" opacity="0.8" />
              <text x="25" y="40" fill="#0284c7" fontSize="9" fontWeight="bold">Waxy Cuticle (Waterproof)</text>

              {/* 2. Upper Epidermis (Single layer, brick-like, no chloroplasts) */}
              {[25, 63, 101, 139, 177, 215, 253, 291].map((x, i) => (
                <rect key={i} x={x} y="53" width="37" height="24" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              ))}
              <text x="25" y="86" fill="#15803d" fontSize="9" fontWeight="bold">Upper Epidermis</text>

              {/* 3. Palisade Mesophyll (Dense columnar cells packed with chloroplasts) */}
              {[25, 55, 85, 115, 145, 175, 205, 235, 265, 295].map((x, i) => (
                <g key={i}>
                  <rect x={x} y="92" width="28" height="85" rx="5" fill="url(#gradPalisade)" stroke="#14532d" strokeWidth="1.5" />
                  {/* Chloroplast dots */}
                  <circle cx={x + 8} cy="110" r="2.5" fill="#fef08a" />
                  <circle cx={x + 18} cy="125" r="2.5" fill="#fef08a" />
                  <circle cx={x + 10} cy="145" r="2.5" fill="#fef08a" />
                  <circle cx={x + 20} cy="160" r="2.5" fill="#fef08a" />
                </g>
              ))}
              <text x="25" y="190" fill="#14532d" fontSize="9" fontWeight="bold">Palisade Mesophyll (Max Photosynthesis)</text>

              {/* 4. Spongy Mesophyll with Air Cavities */}
              {[
                [45, 215], [95, 230], [155, 215], [215, 235], [275, 215],
                [65, 265], [125, 275], [185, 265], [245, 275], [295, 260]
              ].map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="18" fill="#86efac" opacity="0.6" stroke="#16a34a" strokeWidth="1.5" />
                  <circle cx={cx} cy={cy} r="3" fill="#15803d" />
                </g>
              ))}
              <text x="25" y="305" fill="#15803d" fontSize="9" fontWeight="bold">Spongy Parenchyma & Intercellular Air Spaces</text>

              {/* 5. Lower Epidermis & Stomatal Pores */}
              <rect x="25" y="325" width="90" height="20" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <rect x="215" y="325" width="115" height="20" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              {/* Stomatal opening with 2 guard cells */}
              <ellipse cx="140" cy="335" rx="14" ry="10" fill="#15803d" stroke="#14532d" strokeWidth="1.5" />
              <ellipse cx="185" cy="335" rx="14" ry="10" fill="#15803d" stroke="#14532d" strokeWidth="1.5" />
              <text x="162" y="370" fill="#15803d" fontSize="10" fontWeight="black" textAnchor="middle">Stomatal Pore (Lower surface)</text>
            </g>

            {/* PART B: STOMATAL MECHANISM (OPEN VS CLOSED) */}
            <g transform="translate(395, 20)">
              <rect x="0" y="0" width="340" height="405" rx="14" fill={isDark ? "#070b14" : "#f8fafc"} stroke="#059669" strokeWidth="1.5" />
              <text x="170" y="24" fill="#059669" fontSize="12" fontWeight="900" textAnchor="middle">Part B: Stomatal Opening & Closing Mechanism</text>

              {/* 1. OPEN STOMA (TURGID GUARD CELLS) */}
              <g transform="translate(30, 45)">
                <text x="140" y="16" fill="#16a34a" fontSize="11" fontWeight="900" textAnchor="middle">1. Open Stoma (Turgid Condition)</text>
                {/* Left Kidney Guard Cell */}
                <path
                  d="M 105 35 C 70 45 65 115 105 130 C 120 110 120 55 105 35 Z"
                  fill="#4ade80"
                  stroke="#15803d"
                  strokeWidth="3"
                />
                {/* Right Kidney Guard Cell */}
                <path
                  d="M 175 35 C 210 45 215 115 175 130 C 160 110 160 55 175 35 Z"
                  fill="#4ade80"
                  stroke="#15803d"
                  strokeWidth="3"
                />
                {/* Stomatal Aperture (Open ellipse) */}
                <ellipse cx="140" cy="82" rx="20" ry="34" fill={isDark ? "#070b14" : "#fff"} stroke="#14532d" strokeWidth="3" />

                {/* Nuclei & Chloroplasts */}
                <circle cx="85" cy="82" r="6" fill="#15803d" />
                <circle cx="195" cy="82" r="6" fill="#15803d" />
                <circle cx="95" cy="60" r="3" fill="#166534" />
                <circle cx="100" cy="105" r="3" fill="#166534" />
                <circle cx="185" cy="60" r="3" fill="#166534" />
                <circle cx="180" cy="105" r="3" fill="#166534" />

                <text x="140" y="152" fill="#15803d" fontSize="9" fontWeight="bold" textAnchor="middle">Water Enters ➔ Guard Cells Swell & Curve Outward</text>
              </g>

              {/* 2. CLOSED STOMA (FLACCID GUARD CELLS) */}
              <g transform="translate(30, 220)">
                <text x="140" y="16" fill="#e11d48" fontSize="11" fontWeight="900" textAnchor="middle">2. Closed Stoma (Flaccid Condition)</text>
                {/* Guard Cells pressed straight against each other */}
                <ellipse cx="125" cy="75" rx="16" ry="42" fill="#4ade80" stroke="#15803d" strokeWidth="2.5" />
                <ellipse cx="155" cy="75" rx="16" ry="42" fill="#4ade80" stroke="#15803d" strokeWidth="2.5" />
                {/* Sealed aperture line */}
                <line x1="140" y1="35" x2="140" y2="115" stroke="#14532d" strokeWidth="4" />

                <circle cx="120" cy="75" r="5" fill="#15803d" />
                <circle cx="160" cy="75" r="5" fill="#15803d" />

                <text x="140" y="145" fill="#e11d48" fontSize="9" fontWeight="bold" textAnchor="middle">Water Leaves ➔ Guard Cells Shrink (Aperture Closes)</text>
              </g>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(22, 163, 74, 0.12)" : "rgba(22, 163, 74, 0.1)"} stroke="#16a34a" strokeWidth="1" />
              <text x="240" y="17" fill="#15803d" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ Stomatal Movement Trigger: Endosmosis (Turgidity) opens pore; Exosmosis (Flaccidity) closes pore
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 8. LONGITUDINAL SECTION OF A FLOWER
      // =====================================================================
      case "bio_flower_ls":
      case "bio_flower_anatomy":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradPetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>

            {/* Pedicel & Receptacle / Thalamus */}
            <path d="M 370 420 L 370 360 Q 380 340 380 330" stroke="#15803d" strokeWidth="14" strokeLinecap="round" />
            <ellipse cx="380" cy="330" rx="45" ry="18" fill="#16a34a" stroke="#14532d" strokeWidth="2.5" />

            {/* Sepals (Calyx - Green protective leaves) */}
            <path d="M 340 330 Q 260 320 230 360 Q 290 345 345 330" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <path d="M 420 330 Q 500 320 530 360 Q 470 345 415 330" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {/* Petals (Corolla - Velvety colorful petals) */}
            <path
              d="M 335 320 C 180 250 140 100 270 50 C 330 90 350 200 350 270 Z"
              fill="url(#gradPetal)"
              opacity="0.85"
              stroke="#9f1239"
              strokeWidth="3"
            />
            <path
              d="M 425 320 C 580 250 620 100 490 50 C 430 90 410 200 410 270 Z"
              fill="url(#gradPetal)"
              opacity="0.85"
              stroke="#9f1239"
              strokeWidth="3"
            />

            {/* FEMALE REPRODUCTIVE UNIT: PISTIL / CARPEL (CENTER) */}
            {/* Swollen Ovary */}
            <ellipse cx="380" cy="275" rx="36" ry="48" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
            {/* Anatropous Ovule inside Ovary */}
            <circle cx="380" cy="275" r="18" fill="#ca8a04" opacity="0.8" />
            <circle cx="380" cy="275" r="7" fill="#fff" />
            <text x="380" y="278" fill="#ca8a04" fontSize="8" fontWeight="bold" textAnchor="middle">Egg Cell</text>

            {/* Slender Style */}
            <line x1="380" y1="227" x2="380" y2="105" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />

            {/* Sticky Stigma */}
            <ellipse cx="380" cy="98" rx="24" ry="14" fill="#eab308" stroke="#a16207" strokeWidth="3" />
            <path d="M 368 94 Q 380 90 392 94" stroke="#a16207" strokeWidth="2" />

            {/* MALE REPRODUCTIVE UNIT: STAMENS (LEFT & RIGHT) */}
            {/* Left Stamen */}
            <path d="M 345 315 Q 275 250 290 135" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            {/* Bilobed Anther */}
            <ellipse cx="285" cy="125" rx="12" ry="18" fill="#d97706" stroke="#78350f" strokeWidth="2.5" />
            <ellipse cx="295" cy="125" rx="12" ry="18" fill="#f59e0b" stroke="#78350f" strokeWidth="2.5" />

            {/* Right Stamen */}
            <path d="M 415 315 Q 485 250 470 135" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="465" cy="125" rx="12" ry="18" fill="#d97706" stroke="#78350f" strokeWidth="2.5" />
            <ellipse cx="475" cy="125" rx="12" ry="18" fill="#f59e0b" stroke="#78350f" strokeWidth="2.5" />

            {/* LABELS WITH CLEAR CALLOUT BOXES */}
            {/* Petal */}
            <g transform="translate(50, 50)">
              <circle cx="150" cy="18" r="4" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
              <line x1="150" y1="18" x2="240" y2="100" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="150" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#e11d48" fontSize="11" fontWeight="900">Petal (Corolla)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Attracts insect pollinators</text>
            </g>

            {/* Stamen */}
            <g transform="translate(50, 130)">
              <circle cx="160" cy="18" r="4" fill="#d97706" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="280" y2="130" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#d97706" fontSize="11" fontWeight="900">Stamen (Male Organ)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Anther (pollen) + Filament</text>
            </g>

            {/* Sepal */}
            <g transform="translate(50, 320)">
              <circle cx="150" cy="18" r="4" fill="#15803d" stroke="#fff" strokeWidth="1.5" />
              <line x1="150" y1="18" x2="260" y2="340" stroke="#15803d" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="150" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#15803d" fontSize="11" fontWeight="900">Sepal (Calyx)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Protects flower in bud stage</text>
            </g>

            {/* Stigma */}
            <g transform="translate(560, 60)">
              <circle cx="10" cy="18" r="4" fill="#a16207" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="400" y2="95" stroke="#a16207" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#a16207" fontSize="11" fontWeight="900">Sticky Stigma</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Captures pollen grains</text>
            </g>

            {/* Style */}
            <g transform="translate(560, 140)">
              <circle cx="10" cy="18" r="4" fill="#ca8a04" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="385" y2="175" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#ca8a04" fontSize="11" fontWeight="900">Style</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Transmits growing pollen tube</text>
            </g>

            {/* Ovary & Ovule */}
            <g transform="translate(560, 240)">
              <circle cx="10" cy="18" r="4" fill="#ca8a04" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="415" y2="275" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#ca8a04" fontSize="11" fontWeight="900">Ovary & Ovule</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Ovary becomes Fruit;</text>
              <text x="37" y="38" fill="#10b981" fontSize="8" fontWeight="bold">Ovule becomes Seed!</text>
            </g>

            {/* Receptacle & Pedicel */}
            <g transform="translate(560, 340)">
              <circle cx="10" cy="18" r="4" fill="#16a34a" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="425" y2="335" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="38" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#16a34a" fontSize="11" fontWeight="900">Thalamus & Pedicel</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Flower stalk & seat</text>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(202, 138, 4, 0.12)" : "rgba(202, 138, 4, 0.1)"} stroke="#ca8a04" strokeWidth="1" />
              <text x="240" y="17" fill="#ca8a04" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ Post-Fertilization Fate: Zygote → Embryo | Ovule → Seed | Ovary Wall → Fruit Pericarp
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 9. HUMAN REPRODUCTIVE SYSTEMS (FEMALE & MALE)
      // =====================================================================
      case "bio_female_reproduction":
      case "bio_human_reproduction":
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            <defs>
              <linearGradient id="gradUterus" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>

            {/* FEMALE SYSTEM: UTERUS & OVIDUCTS (CENTER ANATOMY) */}
            {/* Muscular Uterine Wall (Myometrium) */}
            <path
              d="M 310 140 C 340 125 420 125 450 140 C 460 210 420 270 410 320 L 350 320 C 340 270 300 210 310 140 Z"
              fill="url(#gradUterus)"
              stroke="#9f1239"
              strokeWidth="4"
            />
            {/* Uterine Cavity & Endometrium (Vascular Lining) */}
            <path d="M 335 155 Q 380 145 425 155 Q 405 230 380 270 Q 355 230 335 155 Z" fill="#fff1f2" stroke="#f43f5e" strokeWidth="2" />
            <text x="380" y="205" fill="#e11d48" fontSize="11" fontWeight="900" textAnchor="middle">Uterus (Womb)</text>
            <text x="380" y="218" fill="#be123c" fontSize="8" fontWeight="bold" textAnchor="middle">Endometrium (Implantation Site)</text>

            {/* Fallopian Tubes (Oviducts - Left & Right) */}
            {/* Left Oviduct */}
            <path d="M 315 145 C 260 120 200 130 180 165" fill="none" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
            {/* Left Fimbriae Funnel */}
            <path d="M 180 165 C 165 170 165 195 185 195" stroke="#e11d48" strokeWidth="4" fill="none" />

            {/* Right Oviduct */}
            <path d="M 445 145 C 500 120 560 130 580 165" fill="none" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
            {/* Right Fimbriae Funnel */}
            <path d="M 580 165 C 595 170 595 195 575 195" stroke="#e11d48" strokeWidth="4" fill="none" />

            {/* Almond-shaped Ovaries (Left & Right) */}
            <ellipse cx="195" cy="205" rx="22" ry="15" fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
            <ellipse cx="565" cy="205" rx="22" ry="15" fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
            {/* Ligaments anchoring ovaries */}
            <line x1="217" y1="205" x2="315" y2="185" stroke="#be123c" strokeWidth="2.5" />
            <line x1="543" y1="205" x2="445" y2="185" stroke="#be123c" strokeWidth="2.5" />

            {/* Cervix (Narrow canal) */}
            <rect x="355" y="320" width="50" height="30" rx="4" fill="#f43f5e" stroke="#9f1239" strokeWidth="2" />
            <text x="380" y="338" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Cervix</text>

            {/* Vagina (Birth canal) */}
            <rect x="350" y="350" width="60" height="50" rx="6" fill="#fbcfe8" stroke="#db2777" strokeWidth="2.5" />
            <text x="380" y="380" fill="#9d174d" fontSize="10" fontWeight="black" textAnchor="middle">Vagina</text>

            {/* LABELS */}
            {/* Oviduct */}
            <g transform="translate(40, 65)">
              <circle cx="160" cy="18" r="4" fill="#e11d48" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="240" y2="130" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#e11d48" fontSize="11" fontWeight="900">Fallopian Tube (Oviduct)</text>
              <text x="12" y="28" fill="#059669" fontSize="8" fontWeight="bold">Site of FERTILIZATION (Ampulla)</text>
            </g>

            {/* Ovary */}
            <g transform="translate(40, 195)">
              <circle cx="160" cy="18" r="4" fill="#db2777" stroke="#fff" strokeWidth="1.5" />
              <line x1="160" y1="18" x2="195" y2="205" stroke="#db2777" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="0" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="12" y="16" fill="#db2777" fontSize="11" fontWeight="900">Ovary (Pair)</text>
              <text x="12" y="28" fill={textMuted} fontSize="8">Produces 1 Ovum/month</text>
              <text x="12" y="38" fill={textMuted} fontSize="8">& Estrogen / Progesterone</text>
            </g>

            {/* Placenta Board Fact Callout (Right side) */}
            <g transform="translate(560, 110)">
              <rect x="0" y="0" width="165" height="75" rx="8" fill={labelBg} stroke="#10b981" strokeWidth="1.5" />
              <text x="12" y="18" fill="#059669" fontSize="11" fontWeight="900">Placenta (Disc Tissue)</text>
              <text x="12" y="32" fill={textMuted} fontSize="8">Villi on embryo's side;</text>
              <text x="12" y="44" fill={textMuted} fontSize="8">Blood spaces on mother's side;</text>
              <text x="12" y="56" fill={textMuted} fontSize="8">Supplies glucose & O₂,</text>
              <text x="12" y="68" fill={textMuted} fontSize="8">removes waste from embryo</text>
            </g>

            {/* Vagina & Cervix */}
            <g transform="translate(560, 320)">
              <circle cx="10" cy="18" r="4" fill="#9d174d" stroke="#fff" strokeWidth="1.5" />
              <line x1="10" y1="18" x2="410" y2="365" stroke="#9d174d" strokeWidth="1.5" strokeDasharray="3,3" />
              <rect x="25" y="0" width="160" height="42" rx="8" fill={labelBg} stroke={labelBorder} />
              <text x="37" y="16" fill="#9d174d" fontSize="11" fontWeight="900">Cervix & Vagina</text>
              <text x="37" y="28" fill={textMuted} fontSize="8">Sperm entry & Birth canal</text>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(225, 29, 72, 0.12)" : "rgba(225, 29, 72, 0.1)"} stroke="#e11d48" strokeWidth="1" />
              <text x="240" y="17" fill="#e11d48" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ CBSE Trap: Fertilization occurs in OVIDUCT (Fallopian Tube), NEVER in Uterus!
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 10. MENDEL'S MONOHYBRID CROSS & PUNNETT SQUARE
      // =====================================================================
      case "bio_mendel_cross":
      case "bio_mendel_crosses":
      default:
        return (
          <svg viewBox="0 0 760 480" className="w-full h-auto max-h-[460px] select-none">
            {/* PARENTAL GENERATION (P1) */}
            <g transform="translate(40, 25)">
              <rect x="0" y="0" width="680" height="65" rx="10" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke={labelBorder} strokeWidth="1" />
              <text x="20" y="24" fill="#0284c7" fontSize="11" fontWeight="900">Parental Generation (P):</text>
              <text x="20" y="42" fill={textMuted} fontSize="9">Homozygous Purebred Cross</text>

              {/* TT Tall Parent */}
              <g transform="translate(230, 15)">
                <rect x="0" y="0" width="110" height="38" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2" />
                <text x="55" y="18" fill="#10b981" fontSize="12" fontWeight="black" textAnchor="middle">TT (Tall)</text>
                <text x="55" y="30" fill={textPrimary} fontSize="8" textAnchor="middle">Gamete: (T)</text>
              </g>

              <text x="365" y="38" fill="#f59e0b" fontSize="16" fontWeight="bold">✕</text>

              {/* tt Dwarf Parent */}
              <g transform="translate(400, 15)">
                <rect x="0" y="0" width="110" height="38" rx="8" fill="#f43f5e" opacity="0.2" stroke="#f43f5e" strokeWidth="2" />
                <text x="55" y="18" fill="#f43f5e" fontSize="12" fontWeight="black" textAnchor="middle">tt (Dwarf)</text>
                <text x="55" y="30" fill={textPrimary} fontSize="8" textAnchor="middle">Gamete: (t)</text>
              </g>
            </g>

            {/* F1 GENERATION */}
            <g transform="translate(40, 105)">
              <rect x="0" y="0" width="680" height="50" rx="10" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke={labelBorder} strokeWidth="1" />
              <text x="20" y="22" fill="#10b981" fontSize="11" fontWeight="900">F₁ Generation (First Filial):</text>
              <text x="20" y="36" fill={textMuted} fontSize="9">Law of Dominance Illustrated</text>

              <rect x="250" y="10" width="220" height="30" rx="8" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
              <text x="360" y="25" fill="#10b981" fontSize="12" fontWeight="black" textAnchor="middle">All Tt (100% Heterozygous Tall)</text>
              <text x="360" y="35" fill={textPrimary} fontSize="7" textAnchor="middle">Dwarf trait 't' remains masked by dominant 'T'</text>
            </g>

            {/* F2 GENERATION WITH PUNNETT SQUARE */}
            <g transform="translate(40, 170)">
              <rect x="0" y="0" width="680" height="255" rx="12" fill={isDark ? "#070b14" : "#f8fafc"} stroke="#10b981" strokeWidth="1.5" />
              <text x="20" y="25" fill="#10b981" fontSize="12" fontWeight="900">F₂ Generation: Self-Pollination of F₁ (Tt ✕ Tt)</text>
              <text x="20" y="40" fill={textMuted} fontSize="9">Gametes segregate independently with 50% probability each (T and t)</text>

              {/* PUNNETT SQUARE MATRIX */}
              <g transform="translate(80, 65)">
                {/* Headers */}
                <rect x="70" y="0" width="70" height="30" fill="#38bdf8" opacity="0.3" stroke="#0284c7" strokeWidth="1.5" />
                <text x="105" y="20" fill="#0284c7" fontSize="13" fontWeight="900" textAnchor="middle">T</text>

                <rect x="145" y="0" width="70" height="30" fill="#38bdf8" opacity="0.3" stroke="#0284c7" strokeWidth="1.5" />
                <text x="180" y="20" fill="#0284c7" fontSize="13" fontWeight="900" textAnchor="middle">t</text>

                <rect x="0" y="35" width="65" height="60" fill="#f59e0b" opacity="0.3" stroke="#d97706" strokeWidth="1.5" />
                <text x="32" y="70" fill="#d97706" fontSize="13" fontWeight="900" textAnchor="middle">T</text>

                <rect x="0" y="100" width="65" height="60" fill="#f59e0b" opacity="0.3" stroke="#d97706" strokeWidth="1.5" />
                <text x="32" y="135" fill="#d97706" fontSize="13" fontWeight="900" textAnchor="middle">t</text>

                {/* Box 1: TT */}
                <rect x="70" y="35" width="70" height="60" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                <text x="105" y="65" fill="#10b981" fontSize="16" fontWeight="black" textAnchor="middle">TT</text>
                <text x="105" y="80" fill={textPrimary} fontSize="8" fontWeight="bold" textAnchor="middle">Pure Tall</text>

                {/* Box 2: Tt */}
                <rect x="145" y="35" width="70" height="60" fill="#10b981" opacity="0.25" stroke="#10b981" strokeWidth="2" />
                <text x="180" y="65" fill="#10b981" fontSize="16" fontWeight="black" textAnchor="middle">Tt</text>
                <text x="180" y="80" fill={textPrimary} fontSize="8" fontWeight="bold" textAnchor="middle">Hybrid Tall</text>

                {/* Box 3: Tt */}
                <rect x="70" y="100" width="70" height="60" fill="#10b981" opacity="0.25" stroke="#10b981" strokeWidth="2" />
                <text x="105" y="130" fill="#10b981" fontSize="16" fontWeight="black" textAnchor="middle">Tt</text>
                <text x="105" y="145" fill={textPrimary} fontSize="8" fontWeight="bold" textAnchor="middle">Hybrid Tall</text>

                {/* Box 4: tt */}
                <rect x="145" y="100" width="70" height="60" fill="#f43f5e" opacity="0.3" stroke="#f43f5e" strokeWidth="2" />
                <text x="180" y="130" fill="#f43f5e" fontSize="16" fontWeight="black" textAnchor="middle">tt</text>
                <text x="180" y="145" fill={textPrimary} fontSize="8" fontWeight="bold" textAnchor="middle">Pure Dwarf</text>
              </g>

              {/* RATIOS BREAKDOWN CARD */}
              <g transform="translate(355, 55)">
                <rect x="0" y="0" width="300" height="175" rx="10" fill={isDark ? "#1e293b" : "#fff"} stroke={labelBorder} strokeWidth="1.5" />
                <text x="150" y="24" fill="#10b981" fontSize="12" fontWeight="900" textAnchor="middle">Mendelian F₂ Ratios (Board Exam):</text>

                <g transform="translate(15, 38)">
                  <rect x="0" y="0" width="270" height="42" rx="6" fill="#10b981" opacity="0.15" />
                  <text x="12" y="18" fill="#10b981" fontSize="11" fontWeight="black">Phenotypic Ratio = 3 : 1</text>
                  <text x="12" y="32" fill={textMuted} fontSize="9">75% Tall (TT + 2 Tt) : 25% Dwarf (tt)</text>
                </g>

                <g transform="translate(15, 88)">
                  <rect x="0" y="0" width="270" height="42" rx="6" fill="#0284c7" opacity="0.15" />
                  <text x="12" y="18" fill="#0284c7" fontSize="11" fontWeight="black">Genotypic Ratio = 1 : 2 : 1</text>
                  <text x="12" y="32" fill={textMuted} fontSize="9">25% TT : 50% Tt : 25% tt</text>
                </g>

                <text x="150" y="152" fill="#ca8a04" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Law of Segregation: Alleles separate cleanly in gametes!
                </text>
              </g>
            </g>

            {/* Bottom CBSE Focus */}
            <g transform="translate(140, 445)">
              <rect x="0" y="0" width="480" height="26" rx="13" fill={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.1)"} stroke="#10b981" strokeWidth="1" />
              <text x="240" y="17" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                ⭐ Dihybrid Ratio (Round/Yellow ✕ Wrinkled/Green) = 9 : 3 : 3 : 1 (Law of Independent Assortment)
              </text>
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`p-5 rounded-2xl border ${bgCard} flex flex-col items-center transition-all select-none shadow-sm`}>
      <div className="w-full flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/5">
        <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span className="truncate">NCERT Master Vector Schematic: {title}</span>
        </div>
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20 active:scale-95"
        >
          {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span>{isZoomed ? "Reset Zoom" : "Deep View (1.15x)"}</span>
        </button>
      </div>

      <div className={`w-full flex items-center justify-center overflow-x-auto transition-all ${isZoomed ? "scale-115 py-4" : ""}`}>
        {renderSVG()}
      </div>
    </div>
  );
}
