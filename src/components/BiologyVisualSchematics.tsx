"use client";

import React, { useState } from "react";
import { ZoomIn, ZoomOut, Maximize2, X, Sparkles, Award, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

interface BiologySchematicProps {
  id: string;
  title: string;
  isDark: boolean;
}

export default function BiologyVisualSchematic({
  id,
  title,
  isDark,
}: BiologySchematicProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [highlightPart, setHighlightPart] = useState<string | null>(null);

  const labelBg = isDark ? "rgba(10, 15, 30, 0.95)" : "rgba(255, 255, 255, 0.98)";
  const labelBorder = isDark ? "rgba(56, 189, 248, 0.3)" : "rgba(2, 132, 199, 0.25)";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#94a3b8" : "#475569";
  const textAccent = isDark ? "#38bdf8" : "#0284c7";
  const gridStroke = isDark ? "rgba(148, 163, 184, 0.05)" : "rgba(0, 0, 0, 0.03)";

  const renderSVG = () => {
    switch (id) {

      // =====================================================================
      // 1. HUMAN HEART — MEDICAL ATLAS CORONAL LONGITUDINAL SECTION
      // =====================================================================
      case "bio_heart":
      case "bio_heart_double_circulation":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="hBgGrad" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#18080c" : "#fff1f2"} />
                <stop offset="100%" stopColor={isDark ? "#06080e" : "#ffe4e6"} />
              </radialGradient>
              <linearGradient id="hMyoWall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#881337" />
                <stop offset="30%" stopColor="#be123c" />
                <stop offset="70%" stopColor="#9f1239" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
              <linearGradient id="hAorta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <linearGradient id="hPulmArt" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>
              <linearGradient id="hSVC" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#075985" />
              </linearGradient>
              <linearGradient id="hDeoxBlood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="hOxBlood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#991b1b" stopOpacity="0.85" />
              </linearGradient>
              <filter id="hOrganDepth" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.55" />
              </filter>
              <filter id="hGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <marker id="arrRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444" />
              </marker>
              <marker id="arrBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284c7" />
              </marker>
            </defs>

            {/* Background Canvas */}
            <rect width="1000" height="650" rx="20" fill="url(#hBgGrad)" />

            {/* Subtle Diagnostic Grid */}
            {[...Array(13)].map((_, i) => (
              <line key={"hvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="650" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={"hhg" + i} x1="0" y1={75 * i} x2="1000" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* Header Title Card */}
            <g transform="translate(40, 30)">
              <rect width="360" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700" letterSpacing="0.5">
                HUMAN HEART — SCHEMATIC SECTION
              </text>
              <rect x="290" y="9" width="58" height="24" rx="6" fill="#ef4444" fillOpacity="0.2" />
              <text x="319" y="25" fill="#f87171" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* ================= GREAT VESSELS LAYER ================= */}
            {/* Superior Vena Cava */}
            <path
              d="M 360 40 L 360 210 C 360 230 380 250 400 255"
              fill="none"
              stroke="url(#hSVC)"
              strokeWidth="42"
              strokeLinecap="round"
            />
            {/* Inferior Vena Cava */}
            <path
              d="M 380 500 L 380 390 C 380 360 395 340 410 330"
              fill="none"
              stroke="url(#hSVC)"
              strokeWidth="38"
              strokeLinecap="round"
            />

            {/* Pulmonary Trunk & Left/Right Pulmonary Arteries */}
            <path
              d="M 500 240 Q 480 150 420 120"
              fill="none"
              stroke="url(#hPulmArt)"
              strokeWidth="38"
              strokeLinecap="round"
            />
            {/* Right Pulmonary Artery branching under aorta */}
            <path d="M 420 120 C 360 105 280 110 240 120" fill="none" stroke="url(#hPulmArt)" strokeWidth="26" strokeLinecap="round" />
            {/* Left Pulmonary Artery branching to left lung */}
            <path d="M 420 120 C 510 110 610 115 670 125" fill="none" stroke="url(#hPulmArt)" strokeWidth="26" strokeLinecap="round" />

            {/* Aortic Arch & 3 Iconic Branches */}
            <path
              d="M 535 240 C 545 130 500 65 440 60 C 385 55 365 110 365 160"
              fill="none"
              stroke="url(#hAorta)"
              strokeWidth="46"
              strokeLinecap="round"
            />
            {/* Brachiocephalic Artery */}
            <path d="M 410 62 L 395 20" stroke="url(#hAorta)" strokeWidth="15" strokeLinecap="round" />
            {/* Left Common Carotid Artery */}
            <path d="M 445 58 L 445 16" stroke="url(#hAorta)" strokeWidth="14" strokeLinecap="round" />
            {/* Left Subclavian Artery */}
            <path d="M 478 66 L 495 22" stroke="url(#hAorta)" strokeWidth="14" strokeLinecap="round" />

            {/* Pulmonary Veins (Right & Left Pairs - 4 total carrying Oxygenated Blood) */}
            <path d="M 660 215 L 590 230" stroke="#ef4444" strokeWidth="22" strokeLinecap="round" />
            <path d="M 665 245 L 595 255" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" />
            <path d="M 270 215 L 340 230" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" />
            <path d="M 265 245 L 335 255" stroke="#ef4444" strokeWidth="20" strokeLinecap="round" />

            {/* ================= THICK MYOCARDIUM HEART BODY ================= */}
            {/* Outer Muscular Perimeter with Anatomical Apex tilted left */}
            <path
              d="M 500 160 
                 C 370 150 260 210 250 340 
                 C 240 470 380 585 505 615 
                 C 635 585 750 470 740 340 
                 C 730 210 630 150 500 160 Z"
              fill="url(#hMyoWall)"
              stroke="#e11d48"
              strokeWidth="5"
              filter="url(#hOrganDepth)"
            />

            {/* Myocardial muscle fiber striations for realism */}
            <path d="M 275 320 Q 320 400 370 470" stroke="#4c0519" strokeWidth="2" strokeDasharray="6,4" fill="none" opacity="0.6"/>
            <path d="M 715 320 Q 670 400 620 470" stroke="#4c0519" strokeWidth="2" strokeDasharray="6,4" fill="none" opacity="0.6"/>
            <path d="M 470 560 Q 500 590 530 560" stroke="#fb7185" strokeWidth="2" fill="none" opacity="0.4"/>

            {/* ================= INTERNAL CHAMBERS ================= */}
            {/* Right Atrium (Thin-walled, receives deoxygenated blood from vena cava) */}
            <path
              d="M 300 250 C 300 200 410 200 425 260 C 430 315 340 340 300 250 Z"
              fill="url(#hDeoxBlood)"
              stroke="#0284c7"
              strokeWidth="3.5"
            />
            {/* Right Ventricle (Pumps to lungs via pulmonary trunk) */}
            <path
              d="M 330 360 C 340 320 440 320 455 370 C 470 450 400 530 440 550 C 390 550 310 490 330 360 Z"
              fill="url(#hDeoxBlood)"
              stroke="#0284c7"
              strokeWidth="4"
            />

            {/* Left Atrium (Thin-walled, receives oxygenated blood from 4 pulm veins) */}
            <path
              d="M 680 250 C 680 200 570 200 555 260 C 550 315 640 340 680 250 Z"
              fill="url(#hOxBlood)"
              stroke="#f43f5e"
              strokeWidth="3.5"
            />
            {/* Left Ventricle (Thickest wall - 3x thicker than RV to pump to entire systemic body) */}
            <path
              d="M 650 360 C 640 320 540 320 525 370 C 510 450 560 530 515 575 C 570 555 670 490 650 360 Z"
              fill="url(#hOxBlood)"
              stroke="#f43f5e"
              strokeWidth="6"
            />

            {/* Thick Muscular Interventricular Septum (Prevents mixing of blood) */}
            <path
              d="M 465 290 L 465 580 C 485 580 495 450 495 290 Z"
              fill="#4c0519"
              stroke="#f43f5e"
              strokeWidth="3"
            />

            {/* ================= VALVES & HEART STRINGS ================= */}
            {/* Tricuspid Valve (3 Cusps between RA & RV) */}
            <line x1="345" y1="335" x2="420" y2="350" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            {/* Chordae Tendineae (Fibrous strings) & Papillary Muscles (RV) */}
            <path d="M 360 345 L 375 420 M 405 350 L 415 420" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="4,2" />
            <ellipse cx="375" cy="425" rx="7" ry="10" fill="#9f1239" stroke="#f43f5e" strokeWidth="1.5" />
            <ellipse cx="415" cy="425" rx="7" ry="10" fill="#9f1239" stroke="#f43f5e" strokeWidth="1.5" />

            {/* Bicuspid / Mitral Valve (2 Cusps between LA & LV) */}
            <line x1="560" y1="350" x2="635" y2="335" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            {/* Chordae Tendineae & Papillary Muscles (LV) */}
            <path d="M 575 350 L 565 435 M 620 345 L 610 435" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="4,2" />
            <ellipse cx="565" cy="440" rx="9" ry="14" fill="#9f1239" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="610" cy="440" rx="9" ry="14" fill="#9f1239" stroke="#f43f5e" strokeWidth="2" />

            {/* Pulmonary Semilunar Valve */}
            <path d="M 470 235 Q 485 220 500 235" fill="none" stroke="#fde047" strokeWidth="5" />
            {/* Aortic Semilunar Valve */}
            <path d="M 520 235 Q 535 220 550 235" fill="none" stroke="#fde047" strokeWidth="5" />

            {/* Sinoatrial (SA) Node & Atrioventricular (AV) Node (Pacemaker system) */}
            <circle cx="335" cy="225" r="9" fill="#eab308" stroke="#fef08a" strokeWidth="2.5" filter="url(#hGlow)" />
            <text x="335" y="210" fill="#fde047" fontSize="10" fontWeight="900" textAnchor="middle">SA NODE</text>
            <circle cx="450" cy="320" r="8" fill="#eab308" stroke="#fef08a" strokeWidth="2.5" />
            <text x="450" y="310" fill="#fde047" fontSize="10" fontWeight="900" textAnchor="middle">AV NODE</text>

            {/* Blood Flow Arrows (Deoxygenated = Blue, Oxygenated = Red) */}
            <path d="M 360 140 L 360 210" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrBlue)" fill="none" />
            <path d="M 380 320 L 390 380" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrBlue)" fill="none" />
            <path d="M 430 420 Q 470 330 480 230" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrBlue)" fill="none" />
            <path d="M 640 230 L 610 260" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrRed)" fill="none" />
            <path d="M 600 320 L 590 380" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrRed)" fill="none" />
            <path d="M 550 430 Q 535 320 535 230" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrRed)" fill="none" />

            {/* ================= ANNOTATION CALLOUT LABELS ================= */}
            {/* Superior Vena Cava */}
            <line x1="360" y1="90" x2="160" y2="90" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="360" cy="90" r="4" fill="#0284c7" />
            <g transform="translate(15, 75)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Superior Vena Cava</text>
            </g>

            {/* Aorta */}
            <line x1="440" y1="40" x2="440" y2="15" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(540, 15)">
              <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="65" y="20" fill="#ef4444" fontSize="12" fontWeight="800" textAnchor="middle">AORTA (Main Artery)</text>
            </g>
            <path d="M 535 30 L 490 30" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrRed)" fill="none" />

            {/* Pulmonary Artery */}
            <line x1="280" y1="120" x2="160" y2="150" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 135)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill="#0284c7" fontSize="11" fontWeight="700" textAnchor="middle">Pulmonary Artery</text>
            </g>

            {/* Pulmonary Veins */}
            <line x1="640" y1="230" x2="820" y2="230" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(825, 215)">
              <rect width="150" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="75" y="20" fill="#ef4444" fontSize="11" fontWeight="700" textAnchor="middle">Pulmonary Veins (4x)</text>
            </g>

            {/* Right Atrium */}
            <line x1="360" y1="260" x2="160" y2="260" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 245)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Right Atrium</text>
            </g>

            {/* Left Atrium */}
            <line x1="620" y1="260" x2="820" y2="280" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(825, 265)">
              <rect width="150" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="75" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Left Atrium</text>
            </g>

            {/* Tricuspid Valve */}
            <line x1="380" y1="340" x2="160" y2="340" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 325)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill="#fde047" fontSize="11" fontWeight="700" textAnchor="middle">Tricuspid Valve</text>
            </g>

            {/* Bicuspid / Mitral Valve */}
            <line x1="600" y1="340" x2="820" y2="340" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(825, 325)">
              <rect width="150" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="75" y="20" fill="#fde047" fontSize="11" fontWeight="700" textAnchor="middle">Bicuspid (Mitral) Valve</text>
            </g>

            {/* Right Ventricle */}
            <line x1="370" y1="440" x2="160" y2="440" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 425)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Right Ventricle</text>
            </g>

            {/* Left Ventricle (Thick Myocardium Wall) */}
            <line x1="620" y1="440" x2="820" y2="420" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(825, 405)">
              <rect width="150" height="38" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="75" y="18" fill="#ef4444" fontSize="11" fontWeight="700" textAnchor="middle">Left Ventricle</text>
              <text x="75" y="32" fill={textMuted} fontSize="9" fontWeight="600" textAnchor="middle">(Thick Wall: 3x RV)</text>
            </g>

            {/* Interventricular Septum */}
            <line x1="480" y1="480" x2="480" y2="610" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(390, 615)">
              <rect width="220" height="28" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="110" y="19" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">
                Interventricular Septum (No Mixing)
              </text>
            </g>

            {/* Inferior Vena Cava */}
            <line x1="380" y1="520" x2="160" y2="520" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 505)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Inferior Vena Cava</text>
            </g>
          </svg>
        );

      // =====================================================================
      // 2. HUMAN RESPIRATORY SYSTEM & ALVEOLAR SACS
      // =====================================================================
      case "bio_respiratory_system":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="respBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#0c1729" : "#f0f9ff"} />
                <stop offset="100%" stopColor={isDark ? "#060913" : "#e0f2fe"} />
              </radialGradient>
              <linearGradient id="lungPink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
              <linearGradient id="tracheaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="diaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <filter id="respDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#respBg)" />

            {/* Grid */}
            {[...Array(13)].map((_, i) => <line key={"rvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"rhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 30)">
              <rect width="390" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                HUMAN RESPIRATORY SYSTEM & ALVEOLI
              </text>
              <rect x="320" y="9" width="58" height="24" rx="6" fill="#38bdf8" fillOpacity="0.2" />
              <text x="349" y="25" fill="#38bdf8" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Torso Silhouette Outline */}
            <path
              d="M 330 40 Q 330 90 380 120 L 330 180 Q 220 200 200 350 Q 180 520 250 630 L 750 630 Q 820 520 800 350 Q 780 200 670 180 L 620 120 Q 670 90 670 40"
              fill="none"
              stroke={isDark ? "rgba(148, 163, 184, 0.15)" : "rgba(100, 116, 139, 0.12)"}
              strokeWidth="3"
            />

            {/* Nasal Cavity & Pharynx / Larynx */}
            <path d="M 470 30 Q 530 30 525 80 Q 520 120 500 135 L 500 155" fill="none" stroke="#f472b6" strokeWidth="18" strokeLinecap="round" />
            {/* Thyroid Cartilage (Adam's Apple) */}
            <polygon points="485,140 515,140 520,165 480,165" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />

            {/* Trachea (Windpipe) with 10 C-shaped Cartilaginous Rings */}
            <rect x="488" y="165" width="24" height="110" rx="4" fill="#0369a1" />
            {[...Array(8)].map((_, i) => (
              <path
                key={"cring"+i}
                d={`M 486 ${175 + i * 12} Q 500 ${180 + i * 12} 514 ${175 + i * 12}`}
                fill="none"
                stroke="url(#tracheaGrad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}

            {/* Bifurcation into Left & Right Primary Bronchi (Carina) */}
            <path d="M 500 270 Q 460 300 410 330" fill="none" stroke="url(#tracheaGrad)" strokeWidth="16" strokeLinecap="round" />
            <path d="M 500 270 Q 540 300 590 330" fill="none" stroke="url(#tracheaGrad)" strokeWidth="16" strokeLinecap="round" />

            {/* RIGHT LUNG (3 Lobes: Superior, Middle, Inferior) */}
            <g filter="url(#respDrop)">
              <path
                d="M 420 280 
                   C 360 270 280 320 270 410 
                   C 260 500 300 550 430 560 
                   C 460 560 460 480 450 410 
                   C 440 340 440 290 420 280 Z"
                fill="url(#lungPink)"
                stroke="#e11d48"
                strokeWidth="3.5"
                opacity="0.95"
              />
              {/* Horizontal & Oblique Fissures dividing 3 lobes */}
              <path d="M 275 390 Q 360 410 445 385" stroke="#881337" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
              <path d="M 285 460 Q 370 470 435 480" stroke="#881337" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
            </g>

            {/* LEFT LUNG (2 Lobes + Deep Cardiac Notch for Heart) */}
            <g filter="url(#respDrop)">
              <path
                d="M 580 280 
                   C 640 270 720 320 730 410 
                   C 740 500 700 550 570 560 
                   C 545 560 540 510 550 465 
                   C 525 430 525 380 550 340 
                   C 560 300 565 290 580 280 Z"
                fill="url(#lungPink)"
                stroke="#e11d48"
                strokeWidth="3.5"
                opacity="0.95"
              />
              {/* Oblique Fissure dividing 2 lobes */}
              <path d="M 575 350 Q 650 420 725 460" stroke="#881337" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
              {/* Cardiac Notch Glow */}
              <path d="M 550 340 C 520 390 525 435 550 465" stroke="#ef4444" strokeWidth="3" fill="none" strokeDasharray="4,2"/>
            </g>

            {/* Bronchial Arborization inside lungs (Secondary & Tertiary Bronchioles) */}
            <path d="M 410 330 Q 350 360 330 400" stroke="#0284c7" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M 410 330 Q 390 410 380 470" stroke="#0284c7" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M 330 400 L 305 440 M 330 400 L 350 445" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M 380 470 L 360 510 M 380 470 L 405 515" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round"/>

            <path d="M 590 330 Q 650 360 670 400" stroke="#0284c7" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M 590 330 Q 610 410 620 470" stroke="#0284c7" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M 670 400 L 695 440 M 670 400 L 650 445" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round"/>

            {/* Muscular Dome-shaped Diaphragm */}
            <path
              d="M 220 595 Q 500 520 780 595"
              fill="none"
              stroke="url(#diaGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#respDrop)"
            />
            {/* Diaphragm contraction downward arrow */}
            <path d="M 500 550 L 500 580" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrRed)" />
            <text x="500" y="540" fill="#f59e0b" fontSize="10" fontWeight="800" textAnchor="middle">Flattens on Inhalation</text>

            {/* High-Zoom Microscopic Inset: Alveolar Sac & Capillary Mesh */}
            <g transform="translate(770, 70)">
              <rect width="210" height="200" rx="14" fill={labelBg} stroke="#38bdf8" strokeWidth="2" filter="url(#respDrop)" />
              <text x="105" y="24" fill="#38bdf8" fontSize="11" fontWeight="800" textAnchor="middle">
                ALVEOLAR SAC (GAS EXCHANGE)
              </text>
              {/* Cluster of Alveoli Spheres */}
              <circle cx="85" cy="80" r="26" fill="#fca5a5" stroke="#e11d48" strokeWidth="2" />
              <circle cx="125" cy="85" r="24" fill="#fda4af" stroke="#e11d48" strokeWidth="2" />
              <circle cx="100" cy="115" r="28" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" />
              <circle cx="140" cy="120" r="22" fill="#fca5a5" stroke="#e11d48" strokeWidth="2" />
              {/* Capillary Mesh: Blue deox entering, Red ox leaving */}
              <path d="M 40 70 Q 75 55 100 80 Q 130 110 170 95" stroke="#0284c7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M 45 130 Q 90 145 115 115 Q 145 90 175 125" stroke="#ef4444" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <text x="40" y="165" fill="#0284c7" fontSize="9" fontWeight="700">CO₂ Diffuses In</text>
              <text x="170" y="165" fill="#ef4444" fontSize="9" fontWeight="700" textAnchor="end">O₂ into Blood</text>
              <text x="105" y="188" fill={textMuted} fontSize="8" fontWeight="600" textAnchor="middle">Extensive surface area (~80 m²)</text>
            </g>
            <line x1="695" y1="440" x2="770" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />

            {/* Labels */}
            {/* Pharynx/Larynx */}
            <line x1="520" y1="150" x2="680" y2="150" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(685, 135)">
              <rect width="130" height="28" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="65" y="18" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Larynx (Voice Box)</text>
            </g>

            {/* Trachea with Rings */}
            <line x1="486" y1="210" x2="160" y2="210" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 195)">
              <rect width="140" height="40" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="18" fill={textAccent} fontSize="11" fontWeight="700" textAnchor="middle">Trachea (Windpipe)</text>
              <text x="70" y="32" fill={textMuted} fontSize="9" textAnchor="middle">C-shaped Cartilage Rings</text>
            </g>

            {/* Bronchi */}
            <line x1="430" y1="310" x2="160" y2="310" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 295)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Bronchi & Bronchioles</text>
            </g>

            {/* Cardiac Notch */}
            <line x1="535" y1="410" x2="420" y2="440" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(350, 445)">
              <rect width="135" height="26" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="67" y="17" fill="#ef4444" fontSize="10" fontWeight="700" textAnchor="middle">Cardiac Notch (Heart space)</text>
            </g>

            {/* Diaphragm */}
            <line x1="260" y1="590" x2="160" y2="590" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 575)">
              <rect width="140" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="20" fill="#f59e0b" fontSize="11" fontWeight="700" textAnchor="middle">Muscular Diaphragm</text>
            </g>
          </svg>
        );

      // =====================================================================
      // 3. EXCRETORY SYSTEM & DETAILED NEPHRON MICROSTRUCTURE
      case "bio_excretion_nephron":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="exBg" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#120a1c" : "#faf5ff"} />
                <stop offset="100%" stopColor={isDark ? "#060712" : "#f3e8ff"} />
              </radialGradient>
              <linearGradient id="kidneyMed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#701a75" />
                <stop offset="50%" stopColor="#a21caf" />
                <stop offset="100%" stopColor="#4a044e" />
              </linearGradient>
              <linearGradient id="tubuleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <filter id="exDepth" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#exBg)" />
            {[...Array(13)].map((_, i) => <line key={"evg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"ehg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Header */}
            <g transform="translate(40, 30)">
              <rect width="420" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                HUMAN EXCRETORY SYSTEM & NEPHRON UNIT
              </text>
              <rect x="350" y="9" width="58" height="24" rx="6" fill="#a855f7" fillOpacity="0.2" />
              <text x="379" y="25" fill="#c084fc" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* LEFT HALF: MACROSCOPIC HUMAN EXCRETORY SYSTEM */}
            <g transform="translate(30, 80)">
              {/* Abdominal Aorta (Red) & Inferior Vena Cava (Blue) */}
              <path d="M 195 20 L 195 380" stroke="#dc2626" strokeWidth="22" strokeLinecap="round" />
              <path d="M 160 20 L 160 380" stroke="#0284c7" strokeWidth="24" strokeLinecap="round" />

              {/* Renal Arteries (Red) & Renal Veins (Blue) */}
              <path d="M 195 140 L 250 140" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
              <path d="M 195 155 L 90 155" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
              <path d="M 160 150 L 245 150" stroke="#0284c7" strokeWidth="14" strokeLinecap="round" />
              <path d="M 160 165 L 85 165" stroke="#0284c7" strokeWidth="14" strokeLinecap="round" />

              {/* LEFT KIDNEY (Bean shaped, slightly higher than right due to liver) */}
              <path
                d="M 60 100 
                   C 20 120 10 200 60 240 
                   C 100 240 100 180 80 165 
                   C 100 150 100 100 60 100 Z"
                fill="url(#kidneyMed)"
                stroke="#c084fc"
                strokeWidth="3.5"
                filter="url(#exDepth)"
              />
              {/* Adrenal Gland on Left Kidney */}
              <polygon points="45,98 65,80 80,98" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />

              {/* RIGHT KIDNEY (Bean shaped, slightly lower) */}
              <path
                d="M 280 120 
                   C 320 140 330 220 280 260 
                   C 240 260 240 200 260 185 
                   C 240 170 240 120 280 120 Z"
                fill="url(#kidneyMed)"
                stroke="#c084fc"
                strokeWidth="3.5"
                filter="url(#exDepth)"
              />
              {/* Adrenal Gland on Right Kidney */}
              <polygon points="265,118 285,100 300,118" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />

              {/* URETERS (Slender muscular tubes carrying urine by peristalsis) */}
              <path d="M 75 190 Q 90 320 155 420" fill="none" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />
              <path d="M 265 210 Q 250 320 195 420" fill="none" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />

              {/* URINARY BLADDER (Muscular reservoir with detrusor rugae) */}
              <path
                d="M 130 420 
                   C 100 420 110 490 175 510 
                   C 240 490 250 420 220 420 Z"
                fill="#d97706"
                stroke="#fbbf24"
                strokeWidth="3.5"
                filter="url(#exDepth)"
              />
              {/* Urethra (Excretory tube controlled by sphincters) */}
              <path d="M 175 510 L 175 545" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" />

              {/* Labels for Excretory Overview */}
              <text x="60" y="270" fill={textPrimary} fontSize="11" fontWeight="700">Left Kidney</text>
              <text x="280" y="285" fill={textPrimary} fontSize="11" fontWeight="700">Right Kidney</text>
              <text x="55" y="345" fill="#facc15" fontSize="11" fontWeight="700">Ureter</text>
              <text x="175" y="470" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Urinary Bladder</text>
              <text x="175" y="560" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Urethra</text>
            </g>

            {/* RIGHT HALF: HIGH-RESOLUTION MICROSCOPIC NEPHRON STRUCTURE */}
            <g transform="translate(430, 80)">
              <rect width="530" height="520" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#exDepth)" />
              <text x="265" y="30" fill="#a855f7" fontSize="13" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
                NEPHRON — FUNCTIONAL STRUCTURAL FILTRATION UNIT
              </text>

              {/* Renal Cortex vs Medulla Boundary line */}
              <line x1="20" y1="230" x2="510" y2="230" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
              <text x="495" y="222" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="end">RENAL CORTEX</text>
              <text x="495" y="245" fill="#a855f7" fontSize="10" fontWeight="700" textAnchor="end">RENAL MEDULLA</text>

              {/* Afferent Arteriole (Wider lumen, high pressure) & Efferent Arteriole (Narrow lumen) */}
              <path d="M 60 70 Q 90 90 100 120" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
              <path d="M 120 120 Q 130 90 160 70" fill="none" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
              <text x="50" y="60" fill="#ef4444" fontSize="10" fontWeight="700">Afferent (Wide)</text>
              <text x="170" y="60" fill="#ef4444" fontSize="10" fontWeight="700">Efferent (Narrow)</text>

              {/* Glomerulus (Tuft of ultrafiltration capillaries) */}
              <ellipse cx="110" cy="130" rx="18" ry="16" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <path d="M 98 122 Q 110 138 122 125" stroke="#fca5a5" strokeWidth="2.5" fill="none" />

              {/* Bowman's Capsule (Double-walled cup surrounding glomerulus) */}
              <path
                d="M 80 100 
                   C 60 130 75 165 110 165 
                   C 145 165 160 130 140 100 
                   C 135 115 125 145 110 145 
                   C 95 145 85 115 80 100 Z"
                fill="#fde047"
                stroke="#ca8a04"
                strokeWidth="2.5"
              />

              {/* Proximal Convoluted Tubule (PCT) - Dense serpentine coils for selective reabsorption */}
              <path
                d="M 110 165 
                   C 110 200 70 200 70 170 
                   C 70 140 40 160 40 190 
                   C 40 230 120 220 120 260"
                fill="none"
                stroke="url(#tubuleGrad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Loop of Henle (Hairpin loop dipping deep into Medulla) */}
              {/* Thin Descending Limb (Water permeable) */}
              <path d="M 120 260 L 120 440" stroke="#facc15" strokeWidth="7" strokeLinecap="round" />
              {/* Hairpin Bend */}
              <path d="M 120 440 Q 150 475 180 440" fill="none" stroke="#facc15" strokeWidth="8" strokeLinecap="round" />
              {/* Thick Ascending Limb (Impermeable to water, active NaCl transport) */}
              <path d="M 180 440 L 180 260" stroke="#eab308" strokeWidth="12" strokeLinecap="round" />

              {/* Distal Convoluted Tubule (DCT) */}
              <path
                d="M 180 260 
                   C 180 210 240 220 240 170 
                   C 240 130 280 140 300 170"
                fill="none"
                stroke="url(#tubuleGrad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Collecting Duct (Straight wide duct receiving filtrate from multiple nephrons) */}
              <path d="M 300 140 L 300 480" stroke="#ca8a04" strokeWidth="18" strokeLinecap="round" />
              {/* Secondary Nephron Inlet tributaries */}
              <path d="M 280 160 L 300 170" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />
              <path d="M 320 220 L 300 230" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />
              <path d="M 280 290 L 300 300" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />

              {/* Vasa Recta (Capillary network wrapped around Henle's Loop) */}
              <path d="M 160 70 Q 220 180 200 320 Q 180 430 140 450" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,3" fill="none" opacity="0.7"/>

              {/* Annotations & Step Badges */}
              <g transform="translate(340, 70)">
                <rect width="170" height="90" rx="8" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#818cf8" strokeWidth="1.2" />
                <text x="85" y="20" fill="#4f46e5" fontSize="11" fontWeight="800" textAnchor="middle">1. ULTRAFILTRATION</text>
                <text x="12" y="38" fill={textPrimary} fontSize="9.5">• In Glomerulus under</text>
                <text x="12" y="52" fill={textPrimary} fontSize="9.5">  high hydrostatic pressure</text>
                <text x="12" y="68" fill={textMuted} fontSize="8.5">• 180 Litres daily filtrate</text>
                <text x="12" y="82" fill={textMuted} fontSize="8.5">• Proteins/cells retained</text>
              </g>

              <g transform="translate(340, 180)">
                <rect width="170" height="90" rx="8" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#34d399" strokeWidth="1.2" />
                <text x="85" y="20" fill="#059669" fontSize="11" fontWeight="800" textAnchor="middle">2. REABSORPTION</text>
                <text x="12" y="38" fill={textPrimary} fontSize="9.5">• In PCT & Henle Loop</text>
                <text x="12" y="52" fill={textPrimary} fontSize="9.5">• Glucose, Amino Acids,</text>
                <text x="12" y="66" fill={textPrimary} fontSize="9.5">  Salts & Major Water</text>
                <text x="12" y="82" fill={textMuted} fontSize="8.5">• Only 1.5 - 2L urine formed</text>
              </g>

              <g transform="translate(340, 290)">
                <rect width="170" height="85" rx="8" fill={isDark ? "#78350f" : "#fef3c7"} stroke="#fbbf24" strokeWidth="1.2" />
                <text x="85" y="20" fill="#d97706" fontSize="11" fontWeight="800" textAnchor="middle">3. TUBULAR SECRETION</text>
                <text x="12" y="38" fill={textPrimary} fontSize="9.5">• In DCT into filtrate</text>
                <text x="12" y="52" fill={textPrimary} fontSize="9.5">• K⁺, H⁺, Ammonia</text>
                <text x="12" y="68" fill={textMuted} fontSize="8.5">• Maintains blood pH 7.4</text>
              </g>

              {/* Direct Anatomical Labels */}
              <text x="25" y="115" fill="#fde047" fontSize="11" fontWeight="800">Bowman's Capsule</text>
              <text x="15" y="225" fill="#eab308" fontSize="11" fontWeight="700">PCT</text>
              <text x="75" y="380" fill="#facc15" fontSize="11" fontWeight="700">Henle's Loop</text>
              <text x="225" y="270" fill="#eab308" fontSize="11" fontWeight="700">DCT</text>
              <text x="300" y="500" fill="#ca8a04" fontSize="11" fontWeight="800" textAnchor="middle">Collecting Duct → Ureter</text>
            </g>
          </svg>
        );

      // =====================================================================
      // 4. HUMAN ALIMENTARY CANAL & DIGESTIVE SYSTEM
      // =====================================================================
      case "bio_alimentary_canal":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="digBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#140e0a" : "#fffbeb"} />
                <stop offset="100%" stopColor={isDark ? "#080604" : "#fef3c7"} />
              </radialGradient>
              <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="60%" stopColor="#7f1d1d" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
              <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="pancreasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <filter id="digDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#digBg)" />
            {[...Array(13)].map((_, i) => <line key={"dvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"dhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 30)">
              <rect width="430" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                HUMAN ALIMENTARY CANAL & DIGESTIVE GLANDS
              </text>
              <rect x="360" y="9" width="58" height="24" rx="6" fill="#f59e0b" fillOpacity="0.2" />
              <text x="389" y="25" fill="#f59e0b" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Profile silhouette & Mouth / Buccal Cavity */}
            <path
              d="M 440 40 
                 C 480 40 510 50 510 80 
                 C 510 95 480 100 480 110 
                 C 520 110 530 130 500 145 
                 C 490 150 480 170 480 200 L 480 290"
              fill="none"
              stroke="#fb7185"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Teeth & Tongue */}
            <path d="M 475 118 L 495 118" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M 470 130 Q 485 130 492 125" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />

            {/* Salivary Glands (Parotid, Submandibular, Sublingual) */}
            <circle cx="515" cy="95" r="9" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="485" cy="140" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />

            {/* Esophagus (Food pipe) with peristaltic waves */}
            <path d="M 480 170 L 480 290" stroke="#f472b6" strokeWidth="16" strokeLinecap="round" />
            <path d="M 474 200 Q 486 215 474 230 Q 486 245 474 260" stroke="#be123c" strokeWidth="2.5" fill="none" />

            {/* Diaphragm horizontal line */}
            <path d="M 330 280 Q 500 270 670 280" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6,4" fill="none" />
            <text x="320" y="275" fill={textMuted} fontSize="9.5" fontWeight="700">Diaphragm</text>

            {/* LIVER (Massive triangular gland, Largest gland in body ~1.5kg) */}
            <path
              d="M 420 295 
                 C 320 295 300 350 310 400 
                 C 320 440 430 430 460 380 
                 C 470 340 460 295 420 295 Z"
              fill="url(#liverGrad)"
              stroke="#b91c1c"
              strokeWidth="3.5"
              filter="url(#digDrop)"
            />
            {/* Gallbladder (Green sac storing Bile juice) */}
            <ellipse cx="430" cy="380" rx="14" ry="20" fill="#22c55e" stroke="#15803d" strokeWidth="2" filter="url(#digDrop)" />
            {/* Bile Duct connecting to Duodenum */}
            <path d="M 430 395 Q 460 410 480 415" stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round" />

            {/* J-SHAPED STOMACH */}
            <path
              d="M 480 290 
                 C 520 290 570 310 570 360 
                 C 570 410 520 430 470 420 
                 C 490 390 500 350 475 320 Z"
              fill="url(#stomachGrad)"
              stroke="#d97706"
              strokeWidth="4"
              filter="url(#digDrop)"
            />
            {/* Gastric Rugae inside stomach */}
            <path d="M 525 330 Q 545 360 520 390" stroke="#b45309" strokeWidth="2.5" fill="none" strokeDasharray="4,2"/>
            {/* Pyloric Sphincter Valve */}
            <circle cx="470" cy="420" r="5" fill="#f43f5e" />

            {/* C-SHAPED DUODENUM LOOP */}
            <path
              d="M 470 420 
                 C 440 420 440 465 470 465 
                 L 510 465"
              fill="none"
              stroke="#fed7aa"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* PANCREAS (Leaf-like gland nestling in the duodenal C-loop) */}
            <path
              d="M 470 430 
                 C 510 420 570 430 590 445 
                 C 570 455 510 455 470 445 Z"
              fill="url(#pancreasGrad)"
              stroke="#ea580c"
              strokeWidth="2.5"
              filter="url(#digDrop)"
            />
            {/* Pancreatic duct */}
            <path d="M 570 440 L 460 440" stroke="#ffffff" strokeWidth="2" strokeDasharray="3,2" fill="none" />

            {/* LARGE INTESTINE (COLON: Ascending, Transverse, Descending) with Haustra */}
            <path
              d="M 370 570 L 370 460 Q 370 440 400 440 L 590 440 Q 620 440 620 460 L 620 570 Q 620 600 560 600 L 500 600 L 500 635"
              fill="none"
              stroke="#a16207"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cecum & Vermiform Appendix */}
            <circle cx="370" cy="575" r="14" fill="#a16207" stroke="#78350f" strokeWidth="2" />
            <path d="M 370 585 Q 360 615 375 625" stroke="#d97706" strokeWidth="7" fill="none" strokeLinecap="round" />

            {/* SMALL INTESTINE (Highly coiled Ileum ~6-7m long, site of complete digestion) */}
            <g filter="url(#digDrop)">
              <path
                d="M 430 480 Q 480 470 530 480 Q 560 500 520 520 Q 450 510 430 530 Q 420 560 480 560 Q 540 560 560 540 Q 560 570 480 580"
                fill="none"
                stroke="#fed7aa"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 430 480 Q 480 470 530 480 Q 560 500 520 520 Q 450 510 430 530 Q 420 560 480 560 Q 540 560 560 540 Q 560 570 480 580"
                fill="none"
                stroke="#f97316"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Rectum & Anus */}
            <rect x="490" y="590" width="20" height="35" rx="5" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <circle cx="500" cy="635" r="5" fill="#451a03" />

            {/* Right Summary Card: Secretions & Enzymes (Crucial for CBSE 5M) */}
            <g transform="translate(680, 80)">
              <rect width="280" height="490" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#digDrop)" />
              <text x="140" y="26" fill="#f59e0b" fontSize="12" fontWeight="800" textAnchor="middle">
                KEY DIGESTIVE ENZYMES & FUNCTIONS
              </text>

              {/* 1. Mouth */}
              <g transform="translate(16, 45)">
                <text x="0" y="14" fill={textPrimary} fontSize="11" fontWeight="800">1. Buccal Cavity (Mouth)</text>
                <text x="10" y="28" fill={textAccent} fontSize="9.5">• Salivary Amylase (Ptyalin)</text>
                <text x="10" y="42" fill={textMuted} fontSize="9">• Starch ➔ Maltose (pH 6.8)</text>
              </g>

              {/* 2. Stomach */}
              <g transform="translate(16, 105)">
                <text x="0" y="14" fill={textPrimary} fontSize="11" fontWeight="800">2. Stomach (Gastric Glands)</text>
                <text x="10" y="28" fill="#ef4444" fontSize="9.5">• Dilute HCl (pH 1.5 - 2.0)</text>
                <text x="10" y="42" fill={textAccent} fontSize="9.5">• Pepsin: Proteins ➔ Peptones</text>
                <text x="10" y="56" fill="#10b981" fontSize="9.5">• Mucus: Protects inner lining</text>
              </g>

              {/* 3. Liver */}
              <g transform="translate(16, 180)">
                <text x="0" y="14" fill={textPrimary} fontSize="11" fontWeight="800">3. Liver (Largest Gland)</text>
                <text x="10" y="28" fill="#16a34a" fontSize="9.5">• Secretes Bile (No enzymes!)</text>
                <text x="10" y="42" fill={textMuted} fontSize="9">• Emulsification of large fat globules</text>
                <text x="10" y="56" fill={textMuted} fontSize="9">• Makes acidic chyme alkaline</text>
              </g>

              {/* 4. Pancreas */}
              <g transform="translate(16, 255)">
                <text x="0" y="14" fill={textPrimary} fontSize="11" fontWeight="800">4. Pancreas (Dual Gland)</text>
                <text x="10" y="28" fill={textAccent} fontSize="9.5">• Trypsin: Proteins ➔ Peptides</text>
                <text x="10" y="42" fill={textAccent} fontSize="9.5">• Pancreatic Amylase: Carbohydrates</text>
                <text x="10" y="56" fill={textAccent} fontSize="9.5">• Lipase: Emulsified fats ➔ Fatty acids</text>
              </g>

              {/* 5. Small Intestine */}
              <g transform="translate(16, 335)">
                <text x="0" y="14" fill={textPrimary} fontSize="11" fontWeight="800">5. Small Intestine (Ileum)</text>
                <text x="10" y="28" fill={textPrimary} fontSize="9.5">• Succus Entericus (Intestinal juice)</text>
                <text x="10" y="42" fill="#10b981" fontSize="9.5">• Complete Digestion:</text>
                <text x="20" y="56" fill={textMuted} fontSize="8.5">Carbs ➔ Glucose</text>
                <text x="20" y="68" fill={textMuted} fontSize="8.5">Proteins ➔ Amino acids</text>
                <text x="20" y="80" fill={textMuted} fontSize="8.5">Fats ➔ Fatty acids + Glycerol</text>
                <text x="10" y="96" fill="#f59e0b" fontSize="9.5">• Villi: Maximize absorption area</text>
              </g>

              {/* 6. Large Intestine */}
              <g transform="translate(16, 450)">
                <text x="0" y="14" fill={textPrimary} fontSize="10.5" fontWeight="800">6. Large Intestine: Absorbs Water</text>
              </g>
            </g>

            {/* Direct Labels with Leader Lines */}
            <line x1="515" y1="95" x2="620" y2="95" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="625" y="99" fill={textPrimary} fontSize="11" fontWeight="700">Salivary Gland</text>

            <line x1="480" y1="210" x2="330" y2="210" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="320" y="214" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="end">Esophagus (Peristalsis)</text>

            <line x1="360" y1="360" x2="220" y2="360" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="210" y="364" fill="#ef4444" fontSize="11" fontWeight="800" textAnchor="end">Liver (Bile Production)</text>

            <line x1="430" y1="390" x2="220" y2="400" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="210" y="404" fill="#22c55e" fontSize="11" fontWeight="800" textAnchor="end">Gallbladder (Bile Storage)</text>

            <line x1="530" y1="370" x2="650" y2="370" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="655" y="374" fill="#f59e0b" fontSize="11" fontWeight="800">Stomach (HCl & Pepsin)</text>

            <line x1="520" y1="440" x2="650" y2="420" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="655" y="424" fill="#ea580c" fontSize="11" fontWeight="800">Pancreas (Trypsin/Lipase)</text>

            <line x1="370" y1="500" x2="220" y2="500" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="210" y="504" fill="#a16207" fontSize="11" fontWeight="700" textAnchor="end">Large Intestine (Colon)</text>

            <line x1="480" y1="540" x2="330" y2="540" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="320" y="544" fill="#f97316" fontSize="11" fontWeight="800" textAnchor="end">Small Intestine (Ileum & Villi)</text>

            <line x1="370" y1="615" x2="220" y2="615" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="210" y="619" fill="#78350f" fontSize="11" fontWeight="700" textAnchor="end">Vermiform Appendix</text>

            <line x1="500" y1="635" x2="650" y2="635" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="655" y="639" fill={textPrimary} fontSize="11" fontWeight="700">Anus (Sphincter)</text>
          </svg>
        );

      // =====================================================================
      // 5. HUMAN NEURON & REFLEX ARC PATHWAY
      // =====================================================================
      case "bio_neuron_reflex_arc":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="nrBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#081524" : "#f0fdfa"} />
                <stop offset="100%" stopColor={isDark ? "#040911" : "#ccfbf1"} />
              </radialGradient>
              <linearGradient id="myelinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <filter id="nrGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#nrBg)" />
            {[...Array(13)].map((_, i) => <line key={"nvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"nhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="450" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                STRUCTURE OF NEURON & SPINAL REFLEX ARC
              </text>
              <rect x="380" y="9" width="58" height="24" rx="6" fill="#14b8a6" fillOpacity="0.2" />
              <text x="409" y="25" fill="#14b8a6" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* TOP HALF: HIGH-RESOLUTION MULTIPOLAR NEURON */}
            <g transform="translate(60, 80)">
              <text x="0" y="0" fill="#0284c7" fontSize="12" fontWeight="800">PART A: MICROSCOPIC NEURON (NERVE CELL)</text>

              {/* Dendrites radiating from Soma */}
              <g stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" fill="none">
                <path d="M 80 80 Q 40 40 10 20 M 40 40 L 25 60 M 20 30 L 0 45" />
                <path d="M 80 110 Q 30 110 0 105 M 35 110 L 15 130" />
                <path d="M 80 140 Q 30 170 10 200 M 40 160 L 20 180" />
                <path d="M 120 75 Q 110 30 105 0 M 115 40 L 135 20" />
                <path d="M 120 155 Q 110 190 105 220 M 115 180 L 135 205" />
              </g>

              {/* Soma (Cell body / Perikaryon) with Nissl Granules */}
              <polygon
                points="80,90 130,70 160,110 130,150 80,135 65,110"
                fill="#38bdf8"
                stroke="#0284c7"
                strokeWidth="3"
              />
              {/* Nucleus & Nucleolus */}
              <circle cx="115" cy="115" r="18" fill="#1e3a8a" stroke="#ffffff" strokeWidth="2" />
              <circle cx="115" cy="115" r="7" fill="#60a5fa" />
              {/* Nissl Granules */}
              <circle cx="95" cy="100" r="2" fill="#1e3a8a" />
              <circle cx="105" cy="135" r="2" fill="#1e3a8a" />
              <circle cx="135" cy="100" r="2" fill="#1e3a8a" />
              <circle cx="140" cy="130" r="2" fill="#1e3a8a" />

              {/* Axon Hillock & Long Axon Cylinder */}
              <path d="M 160 115 L 750 115" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />

              {/* 5 Myelin Sheath Schwann Cell Cylinders separated by Nodes of Ranvier */}
              {[...Array(5)].map((_, i) => (
                <g key={"myelin"+i} transform={`translate(${190 + i * 105}, 95)`}>
                  <rect width="85" height="40" rx="10" fill="url(#myelinGrad)" stroke="#0369a1" strokeWidth="2" />
                  <circle cx="42" cy="14" r="4" fill="#f8fafc" />
                  <text x="42" y="32" fill="#ffffff" fontSize="8" fontWeight="700" textAnchor="middle">Schwann</text>
                </g>
              ))}

              {/* Nodes of Ranvier (Gaps between myelin sheaths allowing Saltatory Conduction) */}
              {[...Array(4)].map((_, i) => (
                <g key={"node"+i} transform={`translate(${275 + i * 105}, 115)`}>
                  <circle cx="10" cy="0" r="5" fill="#ef4444" filter="url(#nrGlow)" />
                </g>
              ))}

              {/* Axon Terminal Arborization & Synaptic Knobs / Boutons */}
              <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none">
                <path d="M 750 115 Q 790 80 830 65" />
                <path d="M 750 115 Q 790 115 840 115" />
                <path d="M 750 115 Q 790 150 830 165" />
              </g>
              <circle cx="830" cy="65" r="7" fill="#ef4444" stroke="#fef08a" strokeWidth="2" />
              <circle cx="840" cy="115" r="7" fill="#ef4444" stroke="#fef08a" strokeWidth="2" />
              <circle cx="830" cy="165" r="7" fill="#ef4444" stroke="#fef08a" strokeWidth="2" />

              {/* Direction of Nerve Impulse Arrow */}
              <path d="M 230 60 L 670 60" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#arrRed)" fill="none" />
              <text x="450" y="50" fill="#10b981" fontSize="11" fontWeight="800" textAnchor="middle">
                DIRECTION OF NERVE IMPULSE (ELECTROCHEMICAL: Dendrite ➔ Cell Body ➔ Axon)
              </text>

              {/* Neuron Labels */}
              <text x="25" y="10" fill={textPrimary} fontSize="11" fontWeight="700">Dendrites (Receive stimulus)</text>
              <text x="115" y="165" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">Cell Body (Cyton)</text>
              <text x="340" y="160" fill="#0284c7" fontSize="11" fontWeight="800">Myelin Sheath</text>
              <text x="485" y="160" fill="#ef4444" fontSize="11" fontWeight="800">Node of Ranvier</text>
              <text x="770" y="195" fill="#f59e0b" fontSize="11" fontWeight="800">Nerve Endings (Synaptic Knobs)</text>
            </g>

            {/* BOTTOM HALF: SPINAL REFLEX ARC PATHWAY */}
            <g transform="translate(60, 340)">
              <text x="0" y="0" fill="#059669" fontSize="12" fontWeight="800">PART B: SPINAL REFLEX ARC (INVOLUNTARY INSTANT PATHWAY)</text>

              {/* 1. Receptor: Skin on finger tips meeting a heat stimulus (flame) */}
              <g transform="translate(10, 40)">
                {/* Candle Flame Stimulus */}
                <path d="M 20 180 C 20 140 35 110 35 100 C 35 110 50 140 50 180 Z" fill="#f59e0b" />
                <path d="M 28 180 C 28 155 35 135 35 130 C 35 135 42 155 42 180 Z" fill="#ef4444" />
                <rect x="25" y="180" width="20" height="50" fill="#f8fafc" stroke="#cbd5e1" />
                <text x="35" y="245" fill="#ef4444" fontSize="10" fontWeight="800" textAnchor="middle">STIMULUS (Heat)</text>

                {/* Hand/Finger Skin Receptor */}
                <path d="M 80 80 Q 50 80 40 100 Q 55 120 80 120 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
                <text x="75" y="70" fill={textPrimary} fontSize="10" fontWeight="700">1. Heat Receptor (Skin)</text>
              </g>

              {/* 2. Sensory Neuron (Afferent pathway carrying signal to spinal cord) */}
              <path
                d="M 90 140 
                   Q 220 100 450 60 
                   C 500 50 530 80 570 95"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Dorsal Root Ganglion (DRG swollen soma) */}
              <ellipse cx="510" cy="65" rx="10" ry="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              <text x="510" y="45" fill="#0284c7" fontSize="10" fontWeight="800" textAnchor="middle">2. Sensory Neuron (DRG)</text>

              {/* 3. Spinal Cord Cross Section (Butterfly / H-shaped Grey Matter) */}
              <g transform="translate(560, 30)">
                <ellipse cx="140" cy="100" rx="120" ry="85" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="2" />
                {/* Butterfly Grey Matter */}
                <path
                  d="M 140 85 
                     C 120 50 80 40 70 70 
                     C 60 100 90 110 110 100 
                     C 90 120 60 140 75 160 
                     C 90 180 120 150 140 115 
                     C 160 150 190 180 205 160 
                     C 220 140 190 120 170 100 
                     C 190 110 220 100 210 70 
                     C 200 40 160 50 140 85 Z"
                  fill="#64748b"
                  stroke="#334155"
                  strokeWidth="2"
                />
                {/* Central Canal */}
                <circle cx="140" cy="100" r="5" fill="#0f172a" />

                {/* Relay Neuron (Interneuron in spinal grey matter) */}
                <path d="M 85 80 L 105 140" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <circle cx="85" cy="80" r="4" fill="#f59e0b" />
                <circle cx="105" cy="140" r="4" fill="#f59e0b" />
                <text x="140" y="30" fill="#f59e0b" fontSize="11" fontWeight="800" textAnchor="middle">3. Relay Neuron in Spinal Cord</text>
                <text x="140" y="195" fill={textMuted} fontSize="9" fontWeight="600" textAnchor="middle">(Signal also sent to Brain later)</text>
              </g>

              {/* 4. Motor Neuron (Efferent pathway from ventral horn to effector muscle) */}
              <path
                d="M 645 170 
                   C 600 220 400 210 240 200"
                fill="none"
                stroke="#ef4444"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <text x="440" y="235" fill="#ef4444" fontSize="11" fontWeight="800" textAnchor="middle">
                4. Motor Neuron (Efferent)
              </text>

              {/* 5. Effector (Arm Biceps Muscle Contracting) */}
              <g transform="translate(130, 160)">
                <ellipse cx="60" cy="40" rx="35" ry="22" fill="#be123c" stroke="#f43f5e" strokeWidth="2.5" />
                <path d="M 35 40 Q 60 30 85 40" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6"/>
                <text x="60" y="75" fill="#be123c" fontSize="11" fontWeight="800" textAnchor="middle">
                  5. Effector (Biceps Contracts)
                </text>
                <text x="60" y="90" fill="#10b981" fontSize="9.5" fontWeight="800" textAnchor="middle">
                  ➔ Response: Hand Pulled Away!
                </text>
              </g>
            </g>
          </svg>
        );

      // =====================================================================
      // 6. HUMAN BRAIN — SAGITTAL MEDIAN SECTION
      case "bio_human_brain":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="brBg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#171717" : "#fafafa"} />
                <stop offset="100%" stopColor={isDark ? "#0a0a0a" : "#e5e5e5"} />
              </radialGradient>
              <linearGradient id="cerebrumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
              <linearGradient id="cerebellumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="medullaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            <rect width="1000" height="650" fill="url(#brBg)" rx="16" />
            
            <g transform="translate(500, 300)">
              {/* Cerebrum (Forebrain) */}
              <path d="M -150,50 C -250,50 -250,-150 -100,-200 C 0,-230 150,-200 200,-100 C 230,0 200,100 100,100 C 50,100 0,70 -50,70 C -100,70 -100,50 -150,50 Z" fill="url(#cerebrumGrad)" stroke="#991b1b" strokeWidth="4" strokeLinejoin="round" />
              
              {/* Sulci and Gyri Details */}
              <path d="M -150,-100 C -100,-50 -50,-120 0,-80 C 50,-40 100,-100 150,-50" fill="none" stroke="#7f1d1d" strokeWidth="2" opacity="0.6" />
              <path d="M -100,-160 C -50,-110 0,-180 50,-120 C 100,-70 120,-140 170,-80" fill="none" stroke="#7f1d1d" strokeWidth="2" opacity="0.6" />
              <path d="M -200,-20 C -150,10 -100,-40 -50,0 C 0,30 50,-20 100,20" fill="none" stroke="#7f1d1d" strokeWidth="2" opacity="0.6" />

              {/* Corpus Callosum */}
              <path d="M -50,30 C -20,0 30,0 60,30 C 30,50 -20,50 -50,30 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />

              {/* Thalamus / Hypothalamus */}
              <ellipse cx="5" cy="55" rx="25" ry="15" fill="#f472b6" stroke="#be185d" strokeWidth="2" />
              <circle cx="20" cy="80" r="10" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" /> {/* Pituitary */}

              {/* Midbrain & Pons */}
              <path d="M -10,70 L 20,70 L 25,120 L -15,120 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="2" />
              <path d="M -15,120 C -40,140 -40,160 -10,180 L 25,180 L 25,120 Z" fill="#34d399" stroke="#047857" strokeWidth="2" /> {/* Pons */}

              {/* Medulla Oblongata */}
              <path d="M -10,180 C -20,220 -20,250 -10,300 L 20,300 L 25,180 Z" fill="url(#medullaGrad)" stroke="#a16207" strokeWidth="3" />

              {/* Cerebellum (Hindbrain) */}
              <path d="M 25,120 C 150,100 200,200 100,250 C 50,270 20,250 25,180 Z" fill="url(#cerebellumGrad)" stroke="#1e3a8a" strokeWidth="4" />
              {/* Arbor Vitae (Tree of Life in Cerebellum) */}
              <path d="M 40,180 L 80,180 M 60,180 L 70,140 M 60,180 L 100,220 M 70,160 L 90,140" fill="none" stroke="#bfdbfe" strokeWidth="2" />
            </g>

            {/* Labels */}
            <g fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">
              {/* Left Side (Forebrain) */}
              <text x="15" y="100" fill={textPrimary}>Cerebrum</text>
              <line x1="100" y1="95" x2="350" y2="150" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="250" fill={textPrimary}>Corpus Callosum</text>
              <line x1="160" y1="245" x2="450" y2="330" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="320" fill={textPrimary}>Hypothalamus</text>
              <line x1="130" y1="315" x2="500" y2="355" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="390" fill={textPrimary}>Pituitary Gland</text>
              <line x1="135" y1="385" x2="520" y2="380" stroke={textPrimary} strokeDasharray="4" />

              {/* Right Side (Hindbrain/Midbrain) */}
              <text x="825" y="440" fill={textPrimary}>Pons</text>
              <line x1="815" y1="435" x2="490" y2="450" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="500" fill={textPrimary}>Medulla Oblongata</text>
              <line x1="815" y1="495" x2="500" y2="520" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="550" fill={textPrimary}>Spinal Cord</text>
              <line x1="815" y1="545" x2="510" y2="580" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="350" fill={textPrimary}>Cerebellum (Posture & Balance)</text>
              <line x1="815" y1="345" x2="630" y2="470" stroke={textPrimary} strokeDasharray="4" />
            </g>
          </svg>
        );

      // =====================================================================
      // 7. LEAF CROSS SECTION (T.S.) & STOMATAL APPARATUS
      case "bio_pollen_germination":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="pgBg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#020617" : "#e2e8f0"} />
              </radialGradient>
              <linearGradient id="styleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <radialGradient id="ovaryGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#16a34a" />
              </radialGradient>
              <radialGradient id="pollenGrad" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </radialGradient>
            </defs>
            <rect width="1000" height="650" fill="url(#pgBg)" rx="16" />
            
            {/* Grid for scaling */}
            <g opacity="0.1" stroke={gridStroke} strokeWidth="1">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="650" />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
              ))}
            </g>

            {/* Central Pistil Structure */}
            <g transform="translate(500, 350)">
              {/* Ovary */}
              <ellipse cx="0" cy="150" rx="90" ry="110" fill="url(#ovaryGrad)" stroke="#14532d" strokeWidth="3" />
              {/* Style */}
              <path d="M -30,-150 L -25,50 C -25,90 -80,100 -90,150 C -90,200 -50,260 0,260 C 50,260 90,200 90,150 C 80,100 25,90 25,50 L 30,-150 Z" fill="url(#styleGrad)" stroke="#14532d" strokeWidth="3" />
              {/* Stigma */}
              <path d="M -50,-150 C -70,-170 -60,-200 -20,-190 C 0,-210 20,-190 50,-190 C 70,-170 50,-150 30,-150 Z" fill="#4ade80" stroke="#14532d" strokeWidth="3" />
              
              {/* Pollen Grains */}
              <circle cx="-30" cy="-195" r="12" fill="url(#pollenGrad)" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="10" cy="-205" r="12" fill="url(#pollenGrad)" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="45" cy="-190" r="12" fill="url(#pollenGrad)" stroke="#ca8a04" strokeWidth="2" />

              {/* Pollen Tube */}
              <path d="M 10,-193 C 10,-50 -10,0 -10,80 C -10,120 40,140 40,170 C 40,190 20,210 0,210 C -20,210 -40,190 -40,170" fill="none" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
              
              {/* Male Gametes in Tube */}
              <circle cx="-35" cy="170" r="4" fill="#ef4444" />
              <circle cx="-25" cy="180" r="4" fill="#ef4444" />

              {/* Embryo Sac */}
              <ellipse cx="0" cy="160" rx="50" ry="70" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" />
              {/* Egg Cell */}
              <circle cx="0" cy="210" r="12" fill="#60a5fa" />
              {/* Synergids */}
              <circle cx="-20" cy="215" r="10" fill="#93c5fd" />
              <circle cx="20" cy="215" r="10" fill="#93c5fd" />
              {/* Polar Nuclei */}
              <circle cx="-8" cy="150" r="8" fill="#a78bfa" />
              <circle cx="8" cy="150" r="8" fill="#a78bfa" />
              {/* Antipodals */}
              <circle cx="0" cy="100" r="9" fill="#f472b6" />
              <circle cx="-20" cy="105" r="9" fill="#f472b6" />
              <circle cx="20" cy="105" r="9" fill="#f472b6" />
            </g>

            {/* Labels - Rigidly Aligned */}
            <g fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">
              {/* Left Side */}
              <text x="15" y="150" fill={textPrimary}>Pollen Grain</text>
              <line x1="120" y1="145" x2="470" y2="155" stroke={textPrimary} strokeDasharray="4" />
              
              <text x="15" y="210" fill={textPrimary}>Stigma (Receptive Surface)</text>
              <line x1="230" y1="205" x2="450" y2="170" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="300" fill={textPrimary}>Pollen Tube</text>
              <line x1="110" y1="295" x2="480" y2="400" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="400" fill={textPrimary}>Style</text>
              <line x1="60" y1="395" x2="460" y2="350" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="550" fill={textPrimary}>Male Gametes</text>
              <line x1="130" y1="545" x2="465" y2="520" stroke={textPrimary} strokeDasharray="4" />

              {/* Right Side */}
              <text x="825" y="430" fill={textPrimary}>Ovary</text>
              <line x1="815" y1="425" x2="580" y2="480" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="500" fill={textPrimary}>Polar Nuclei (2n)</text>
              <line x1="815" y1="495" x2="515" y2="500" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="560" fill={textPrimary}>Egg Cell (Female Gamete)</text>
              <line x1="815" y1="555" x2="515" y2="560" stroke={textPrimary} strokeDasharray="4" />
            </g>
          </svg>
        );

      // =====================================================================
      // 8. LONGITUDINAL SECTION OF FLOWER (L.S.)
      case "bio_flower_anatomy":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="fBg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#1e1b4b" : "#e0e7ff"} />
                <stop offset="100%" stopColor={isDark ? "#0f172a" : "#c7d2fe"} />
              </radialGradient>
              <linearGradient id="petalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
              <linearGradient id="sepalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <rect width="1000" height="650" fill="url(#fBg)" rx="16" />
            
            <g transform="translate(500, 350)">
              {/* Receptacle & Pedicel */}
              <path d="M -40,150 L 40,150 L 20,280 L -20,280 Z" fill="url(#sepalGrad)" stroke="#14532d" strokeWidth="3" />
              <ellipse cx="0" cy="150" rx="50" ry="20" fill="#22c55e" stroke="#14532d" strokeWidth="3" />

              {/* Sepals */}
              <path d="M -50,150 C -100,100 -120,50 -150,0 C -120,50 -80,100 -20,160 Z" fill="url(#sepalGrad)" stroke="#14532d" strokeWidth="2" />
              <path d="M 50,150 C 100,100 120,50 150,0 C 120,50 80,100 20,160 Z" fill="url(#sepalGrad)" stroke="#14532d" strokeWidth="2" />

              {/* Petals */}
              <path d="M -30,130 C -250,50 -200,-150 -100,-200 C -50,-100 -20,0 0,130 Z" fill="url(#petalGrad)" stroke="#9d174d" strokeWidth="2" opacity="0.9" />
              <path d="M 30,130 C 250,50 200,-150 100,-200 C 50,-100 20,0 0,130 Z" fill="url(#petalGrad)" stroke="#9d174d" strokeWidth="2" opacity="0.9" />
              <path d="M -10,130 C -100,-50 -50,-250 0,-250 C 50,-250 100,-50 10,130 Z" fill="url(#petalGrad)" stroke="#9d174d" strokeWidth="2" opacity="0.8" />

              {/* Stamen (Filament & Anther) */}
              <path d="M -20,130 C -50,50 -80,-50 -100,-100" fill="none" stroke="#fcd34d" strokeWidth="4" />
              <ellipse cx="-100" cy="-100" rx="15" ry="10" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
              <ellipse cx="-105" cy="-110" rx="15" ry="10" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />

              <path d="M 20,130 C 50,50 80,-50 100,-100" fill="none" stroke="#fcd34d" strokeWidth="4" />
              <ellipse cx="100" cy="-100" rx="15" ry="10" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
              <ellipse cx="105" cy="-110" rx="15" ry="10" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />

              {/* Pistil (Ovary, Style, Stigma) */}
              <ellipse cx="0" cy="90" rx="40" ry="50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
              <path d="M -15,40 C -15,-50 -10,-100 0,-120 C 10,-100 15,-50 15,40 Z" fill="#86efac" stroke="#16a34a" strokeWidth="3" />
              <ellipse cx="0" cy="-125" rx="20" ry="10" fill="#4ade80" stroke="#16a34a" strokeWidth="3" />
              <ellipse cx="-10" cy="-130" rx="15" ry="8" fill="#4ade80" stroke="#16a34a" strokeWidth="3" />
              <ellipse cx="10" cy="-130" rx="15" ry="8" fill="#4ade80" stroke="#16a34a" strokeWidth="3" />

              {/* Ovules inside Ovary */}
              <circle cx="-15" cy="80" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
              <circle cx="15" cy="80" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
              <circle cx="-15" cy="110" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
              <circle cx="15" cy="110" r="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
            </g>

            {/* Labels */}
            <g fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">
              {/* Left Side (Stamen) */}
              <text x="15" y="200" fill={textPrimary}>Anther (Produces Pollen)</text>
              <line x1="210" y1="195" x2="390" y2="240" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="320" fill={textPrimary}>Filament</text>
              <line x1="90" y1="315" x2="410" y2="350" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="450" fill={textPrimary}>Petal (Corolla)</text>
              <line x1="125" y1="445" x2="380" y2="450" stroke={textPrimary} strokeDasharray="4" />

              <text x="15" y="580" fill={textPrimary}>Sepal (Calyx)</text>
              <line x1="120" y1="575" x2="430" y2="450" stroke={textPrimary} strokeDasharray="4" />

              {/* Right Side (Pistil/Carpel) */}
              <text x="825" y="190" fill={textPrimary}>Stigma (Receptive)</text>
              <line x1="815" y1="185" x2="520" y2="220" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="290" fill={textPrimary}>Style (Tube)</text>
              <line x1="815" y1="285" x2="515" y2="300" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="420" fill={textPrimary}>Ovary (Contains Ovules)</text>
              <line x1="815" y1="415" x2="540" y2="440" stroke={textPrimary} strokeDasharray="4" />

              <text x="825" y="530" fill={textPrimary}>Receptacle</text>
              <line x1="815" y1="525" x2="550" y2="500" stroke={textPrimary} strokeDasharray="4" />
            </g>
          </svg>
        );

      // =====================================================================
      // 9. HUMAN FEMALE REPRODUCTIVE SYSTEM
      case "bio_human_reproduction":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="repBg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#171717" : "#fafafa"} />
                <stop offset="100%" stopColor={isDark ? "#0a0a0a" : "#e5e5e5"} />
              </radialGradient>
              <linearGradient id="uterusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <rect width="1000" height="650" fill="url(#repBg)" rx="16" />
            
            {/* Split View Line */}
            <line x1="500" y1="50" x2="500" y2="600" stroke={textPrimary} strokeWidth="2" strokeDasharray="10,10" opacity="0.3" />
            <text x="250" y="80" fill={textPrimary} fontSize="20" fontWeight="bold" textAnchor="middle">Male Reproductive System</text>
            <text x="750" y="80" fill={textPrimary} fontSize="20" fontWeight="bold" textAnchor="middle">Female Reproductive System</text>

            {/* Left Side: Male System */}
            <g transform="translate(250, 350)">
              {/* Bladder */}
              <ellipse cx="0" cy="-100" rx="40" ry="30" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              {/* Urethra & Penis */}
              <path d="M -10,-70 L -10,100 C -10,120 10,120 10,100 L 10,-70 Z" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
              <path d="M -20,30 L -20,100 C -20,130 20,130 20,100 L 20,30 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
              {/* Testis & Scrotum */}
              <ellipse cx="-40" cy="120" rx="20" ry="25" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
              <path d="M -65,110 C -70,160 -10,160 -15,110" fill="none" stroke="#94a3b8" strokeWidth="3" />
              {/* Epididymis & Vas Deferens */}
              <path d="M -40,95 C -20,95 -20,50 -20,0 C -20,-50 -60,-80 -60,-120 C -60,-140 0,-140 0,-100" fill="none" stroke="#3b82f6" strokeWidth="3" />
              {/* Prostate & Seminal Vesicle */}
              <ellipse cx="0" cy="-60" rx="15" ry="10" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2" />
              <ellipse cx="20" cy="-80" rx="10" ry="15" fill="#f9a8d4" stroke="#db2777" strokeWidth="2" />
            </g>

            {/* Right Side: Female System */}
            <g transform="translate(750, 320)">
              {/* Uterus */}
              <path d="M -60,-50 C -40,-120 40,-120 60,-50 C 40,0 20,50 15,100 L -15,100 C -20,50 -40,0 -60,-50 Z" fill="url(#uterusGrad)" stroke="#991b1b" strokeWidth="3" />
              {/* Endometrium lining */}
              <path d="M -45,-45 C -30,-100 30,-100 45,-45 C 30,-5 10,40 5,90 L -5,90 C -10,40 -30,-5 -45,-45 Z" fill="#fecaca" />
              
              {/* Fallopian Tubes (Oviducts) */}
              <path d="M -60,-70 C -120,-80 -140,-40 -120,0" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
              <path d="M 60,-70 C 120,-80 140,-40 120,0" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
              {/* Fimbriae */}
              <path d="M -120,0 C -130,20 -110,20 -110,10" fill="none" stroke="#ef4444" strokeWidth="3" />
              <path d="M 120,0 C 130,20 110,20 110,10" fill="none" stroke="#ef4444" strokeWidth="3" />

              {/* Ovaries */}
              <ellipse cx="-130" cy="30" rx="15" ry="20" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              <ellipse cx="130" cy="30" rx="15" ry="20" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />

              {/* Cervix & Vagina */}
              <path d="M -15,100 L -25,180 L 25,180 L 15,100 Z" fill="#fbcfe8" stroke="#be185d" strokeWidth="2" />
              <line x1="-15" y1="100" x2="15" y2="100" stroke="#991b1b" strokeWidth="4" /> {/* Cervix */}
            </g>

            {/* Labels - Male */}
            <g fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold">
              <text x="10" y="240" fill={textPrimary}>Vas Deferens</text>
              <line x1="110" y1="235" x2="200" y2="245" stroke={textPrimary} strokeDasharray="4" />

              <text x="10" y="300" fill={textPrimary}>Prostate Gland</text>
              <line x1="120" y1="295" x2="250" y2="295" stroke={textPrimary} strokeDasharray="4" />

              <text x="10" y="380" fill={textPrimary}>Urethra</text>
              <line x1="70" y1="375" x2="250" y2="375" stroke={textPrimary} strokeDasharray="4" />

              <text x="10" y="470" fill={textPrimary}>Testis (Sperm Production)</text>
              <line x1="195" y1="465" x2="210" y2="470" stroke={textPrimary} strokeDasharray="4" />

              <text x="10" y="520" fill={textPrimary}>Scrotum</text>
              <line x1="70" y1="515" x2="190" y2="480" stroke={textPrimary} strokeDasharray="4" />

              {/* Labels - Female */}
              <text x="815" y="250" fill={textPrimary}>Fallopian Tube (Oviduct)</text>
              <line x1="805" y1="245" x2="650" y2="250" stroke={textPrimary} strokeDasharray="4" />

              <text x="815" y="360" fill={textPrimary}>Ovary (Egg Production)</text>
              <line x1="805" y1="355" x2="630" y2="350" stroke={textPrimary} strokeDasharray="4" />

              <text x="815" y="440" fill={textPrimary}>Uterus (Womb)</text>
              <line x1="805" y1="435" x2="770" y2="350" stroke={textPrimary} strokeDasharray="4" />

              <text x="815" y="520" fill={textPrimary}>Cervix</text>
              <line x1="805" y1="515" x2="760" y2="420" stroke={textPrimary} strokeDasharray="4" />

              <text x="815" y="570" fill={textPrimary}>Vagina</text>
              <line x1="805" y1="565" x2="760" y2="480" stroke={textPrimary} strokeDasharray="4" />
            </g>
          </svg>
        );

      // =====================================================================
      // 10. MENDELIAN MONOHYBRID & DIHYBRID INHERITANCE CROSSES
      case "bio_mendel_crosses":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <linearGradient id="mBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#1e293b" : "#e2e8f0"} />
              </linearGradient>
            </defs>
            <rect width="1000" height="650" fill="url(#mBg)" rx="16" />

            <text x="500" y="50" fill={textPrimary} fontSize="24" fontWeight="bold" textAnchor="middle">Mendelian Dihybrid Cross (F2 Generation)</text>
            <text x="500" y="80" fill={textMuted} fontSize="16" textAnchor="middle">Parents: RRYY (Round Yellow) × rryy (Wrinkled Green) → F1: RrYy</text>

            <g transform="translate(250, 150)">
              {/* Punnett Square Grid */}
              <rect x="0" y="0" width="500" height="400" fill="none" stroke={textPrimary} strokeWidth="4" />
              <line x1="125" y1="0" x2="125" y2="400" stroke={textPrimary} strokeWidth="2" />
              <line x1="250" y1="0" x2="250" y2="400" stroke={textPrimary} strokeWidth="2" />
              <line x1="375" y1="0" x2="375" y2="400" stroke={textPrimary} strokeWidth="2" />
              <line x1="0" y1="100" x2="500" y2="100" stroke={textPrimary} strokeWidth="2" />
              <line x1="0" y1="200" x2="500" y2="200" stroke={textPrimary} strokeWidth="2" />
              <line x1="0" y1="300" x2="500" y2="300" stroke={textPrimary} strokeWidth="2" />

              {/* Top Gametes */}
              <text x="62.5" y="-20" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">RY</text>
              <text x="187.5" y="-20" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">Ry</text>
              <text x="312.5" y="-20" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">rY</text>
              <text x="437.5" y="-20" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">ry</text>

              {/* Side Gametes */}
              <text x="-30" y="55" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">RY</text>
              <text x="-30" y="155" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">Ry</text>
              <text x="-30" y="255" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">rY</text>
              <text x="-30" y="355" fill={textAccent} fontSize="20" fontWeight="bold" textAnchor="middle">ry</text>

              {/* Fill the boxes with genotypes and corresponding circles */}
              {/* Row 1 */}
              <text x="62.5" y="45" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RRYY</text>
              <circle cx="62.5" cy="70" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="187.5" y="45" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RRYy</text>
              <circle cx="187.5" cy="70" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="312.5" y="45" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYY</text>
              <circle cx="312.5" cy="70" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="437.5" y="45" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYy</text>
              <circle cx="437.5" cy="70" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />

              {/* Row 2 */}
              <text x="62.5" y="145" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RRYy</text>
              <circle cx="62.5" cy="170" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="187.5" y="145" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RRyy</text>
              <circle cx="187.5" cy="170" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" strokeDasharray="3,3" /> {/* Wrinkled */}
              
              <text x="312.5" y="145" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYy</text>
              <circle cx="312.5" cy="170" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="437.5" y="145" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">Rryy</text>
              <circle cx="437.5" cy="170" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" strokeDasharray="3,3" />

              {/* Row 3 */}
              <text x="62.5" y="245" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYY</text>
              <circle cx="62.5" cy="270" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="187.5" y="245" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYy</text>
              <circle cx="187.5" cy="270" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="312.5" y="245" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">rrYY</text>
              <circle cx="312.5" cy="270" r="15" fill="#86efac" stroke="#16a34a" strokeWidth="2" /> {/* Green */}
              
              <text x="437.5" y="245" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">rrYy</text>
              <circle cx="437.5" cy="270" r="15" fill="#86efac" stroke="#16a34a" strokeWidth="2" />

              {/* Row 4 */}
              <text x="62.5" y="345" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">RrYy</text>
              <circle cx="62.5" cy="370" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              
              <text x="187.5" y="345" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">Rryy</text>
              <circle cx="187.5" cy="370" r="15" fill="#fde047" stroke="#ca8a04" strokeWidth="2" strokeDasharray="3,3" />
              
              <text x="312.5" y="345" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">rrYy</text>
              <circle cx="312.5" cy="370" r="15" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
              
              <text x="437.5" y="345" fill={textPrimary} fontSize="18" fontWeight="bold" textAnchor="middle">rryy</text>
              <circle cx="437.5" cy="370" r="15" fill="#86efac" stroke="#16a34a" strokeWidth="2" strokeDasharray="3,3" />
            </g>

            {/* Results Legend */}
            <g transform="translate(100, 600)" fontSize="18" fontWeight="bold" fill={textPrimary}>
              <text x="0" y="0">Phenotypic Ratio: 9 : 3 : 3 : 1</text>
              <text x="350" y="0" fill="#ca8a04">Round Yellow (9)</text>
              <text x="550" y="0" fill="#a16207">Wrinkled Yellow (3)</text>
              <text x="750" y="-10" fill="#16a34a">Round Green (3)</text>
              <text x="750" y="15" fill="#14532d">Wrinkled Green (1)</text>
            </g>
          </svg>
        );

      default:
        return (
          <div className="p-8 text-center text-slate-400">
            Diagram identifier not found.
          </div>
        );
    }
  };

  return (
    <div className="w-full relative">
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-900/60 shadow-2xl">
        {renderSVG()}
      </div>
    </div>
  );
}
