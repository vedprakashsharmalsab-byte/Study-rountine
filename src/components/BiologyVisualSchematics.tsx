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
      // =====================================================================
      case "bio_nephron_excretory":
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
      // =====================================================================
      case "bio_brain":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="brBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#12091c" : "#faf5ff"} />
                <stop offset="100%" stopColor={isDark ? "#06030a" : "#f3e8ff"} />
              </radialGradient>
              <linearGradient id="cortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="50%" stopColor="#e879f9" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <filter id="brDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#brBg)" />
            {[...Array(13)].map((_, i) => <line key={"bvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"bhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="420" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                HUMAN BRAIN — SAGITTAL MEDIAN SECTION
              </text>
              <rect x="350" y="9" width="58" height="24" rx="6" fill="#a855f7" fillOpacity="0.2" />
              <text x="379" y="25" fill="#c084fc" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Skull Cranium Outline & Meninges */}
            <path
              d="M 230 430 
                 C 190 320 200 160 350 90 
                 C 480 30 650 50 740 140 
                 C 820 220 830 380 770 450"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Meninges 3 protective membranes (Dura, Arachnoid, Pia mater with CSF) */}
            <path
              d="M 240 420 C 205 320 215 170 355 105 C 480 48 640 68 725 150 C 800 225 810 370 755 440"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
            />

            {/* FOREBRAIN: CEREBRAL CORTEX (Extensive Gyri & Sulci Foldings for Cognition) */}
            <g filter="url(#brDrop)">
              <path
                d="M 260 410 
                   C 220 330 230 180 370 120 
                   C 490 70 630 85 710 160 
                   C 775 220 780 340 730 400 
                   C 660 380 600 370 540 330 
                   C 460 330 380 370 300 400 Z"
                fill="url(#cortexGrad)"
                stroke="#9333ea"
                strokeWidth="3.5"
              />
              {/* Detailed Anatomical Gyri / Sulci Convolution Curves */}
              <path d="M 330 190 Q 380 150 430 190 Q 480 140 540 180" stroke="#7e22ce" strokeWidth="2.5" fill="none"/>
              <path d="M 370 230 Q 420 190 470 240 Q 520 200 580 240" stroke="#7e22ce" strokeWidth="2.5" fill="none"/>
              <path d="M 410 280 Q 460 250 510 280 Q 560 250 630 280" stroke="#7e22ce" strokeWidth="2.5" fill="none"/>
              <path d="M 580 150 Q 640 190 680 250" stroke="#7e22ce" strokeWidth="2.5" fill="none"/>
              <path d="M 280 280 Q 330 260 370 310" stroke="#7e22ce" strokeWidth="2.5" fill="none"/>
            </g>

            {/* Corpus Callosum (Iconic C-shaped thick white matter band bridging hemispheres) */}
            <path
              d="M 380 300 
                 C 380 230 580 210 610 290 
                 C 590 260 430 270 410 315 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2"
              filter="url(#brDrop)"
            />

            {/* Thalamus (Egg-shaped sensory relay station) */}
            <ellipse cx="500" cy="315" rx="26" ry="18" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

            {/* Hypothalamus (Controls temperature, hunger, thirst, endocrine master) */}
            <path d="M 470 330 L 510 330 L 495 365 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />

            {/* Pituitary Gland (Master endocrine gland suspended by infundibulum stalk) */}
            <ellipse cx="485" cy="385" rx="10" ry="12" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <line x1="490" y1="365" x2="485" y2="375" stroke="#ef4444" strokeWidth="3" />

            {/* MIDBRAIN */}
            <circle cx="545" cy="350" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />

            {/* HINDBRAIN: PONS (Bulge with transverse conduction tracts) */}
            <path
              d="M 515 375 
                 C 490 395 490 440 520 455 
                 L 555 440 L 545 375 Z"
              fill="#34d399"
              stroke="#059669"
              strokeWidth="2.5"
            />

            {/* HINDBRAIN: MEDULLA OBLONGATA (Controls involuntary: heartbeat, breathing, vomiting, BP) */}
            <path
              d="M 520 455 
                 C 510 490 515 530 525 570 
                 L 555 570 L 555 440 Z"
              fill="#10b981"
              stroke="#047857"
              strokeWidth="2.5"
            />

            {/* SPINAL CORD continuation downwards */}
            <path d="M 525 570 L 525 630 M 555 570 L 555 630" stroke="#64748b" strokeWidth="4" />

            {/* HINDBRAIN: CEREBELLUM with ARBOR VITAE (Tree of Life branching pattern) */}
            <g filter="url(#brDrop)">
              <path
                d="M 570 375 
                   C 660 360 740 400 730 480 
                   C 720 540 640 550 570 510 
                   C 550 460 555 410 570 375 Z"
                fill="#fdba74"
                stroke="#ea580c"
                strokeWidth="3.5"
              />
              {/* Arbor Vitae White Matter Tree Branching */}
              <g stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none">
                <path d="M 575 445 Q 630 440 680 430" />
                <path d="M 620 442 Q 640 405 670 390" />
                <path d="M 640 435 Q 665 470 700 480" />
                <path d="M 600 444 Q 610 480 635 505" />
              </g>
            </g>

            {/* Brain Major Division Bracket Cards (CBSE Official Syllabus) */}
            {/* Forebrain */}
            <g transform="translate(40, 110)">
              <rect width="170" height="95" rx="8" fill={labelBg} stroke="#a855f7" strokeWidth="1.5" />
              <text x="85" y="20" fill="#a855f7" fontSize="12" fontWeight="800" textAnchor="middle">I. FOREBRAIN</text>
              <text x="12" y="38" fill={textPrimary} fontSize="10">• Cerebrum (Cortex)</text>
              <text x="12" y="52" fill={textMuted} fontSize="9">  Thinking, Memory, Will</text>
              <text x="12" y="68" fill={textPrimary} fontSize="10">• Sensory Integration</text>
              <text x="12" y="84" fill={textMuted} fontSize="9">  Hearing, Smell, Vision</text>
            </g>

            {/* Midbrain */}
            <g transform="translate(40, 225)">
              <rect width="170" height="75" rx="8" fill={labelBg} stroke="#0284c7" strokeWidth="1.5" />
              <text x="85" y="20" fill="#0284c7" fontSize="12" fontWeight="800" textAnchor="middle">II. MIDBRAIN</text>
              <text x="12" y="38" fill={textPrimary} fontSize="10">• Visual & Auditory</text>
              <text x="12" y="52" fill={textMuted} fontSize="9">  reflex centres</text>
              <text x="12" y="66" fill={textPrimary} fontSize="10">• Pupil dilation reflexes</text>
            </g>

            {/* Hindbrain */}
            <g transform="translate(40, 320)">
              <rect width="170" height="135" rx="8" fill={labelBg} stroke="#059669" strokeWidth="1.5" />
              <text x="85" y="20" fill="#059669" fontSize="12" fontWeight="800" textAnchor="middle">III. HINDBRAIN</text>
              <text x="12" y="38" fill={textPrimary} fontSize="10">• Cerebellum:</text>
              <text x="20" y="52" fill={textMuted} fontSize="9">Posture, balance, precision</text>
              <text x="12" y="68" fill={textPrimary} fontSize="10">• Pons:</text>
              <text x="20" y="82" fill={textMuted} fontSize="9">Pneumotaxic resp regulation</text>
              <text x="12" y="98" fill={textPrimary} fontSize="10">• Medulla Oblongata:</text>
              <text x="20" y="112" fill={textMuted} fontSize="9">Involuntary BP, salivation</text>
              <text x="20" y="124" fill={textMuted} fontSize="9">swallowing, vomiting</text>
            </g>

            {/* Anatomical Labels with Leader Lines */}
            <line x1="500" y1="85" x2="500" y2="45" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="500" y="40" fill="#a855f7" fontSize="12" fontWeight="800" textAnchor="middle">Cerebrum (Forebrain)</text>

            <line x1="430" y1="270" x2="310" y2="270" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="300" y="274" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="end">Corpus Callosum</text>

            <line x1="500" y1="315" x2="680" y2="280" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="685" y="284" fill="#d97706" fontSize="11" fontWeight="700">Thalamus</text>

            <line x1="495" y1="350" x2="680" y2="320" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="685" y="324" fill="#b45309" fontSize="11" fontWeight="700">Hypothalamus</text>

            <line x1="485" y1="390" x2="310" y2="390" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="300" y="394" fill="#ef4444" fontSize="11" fontWeight="800" textAnchor="end">Pituitary Gland</text>

            <line x1="510" y1="420" x2="310" y2="440" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="300" y="444" fill="#059669" fontSize="11" fontWeight="700" textAnchor="end">Pons (Hindbrain)</text>

            <line x1="535" y1="500" x2="310" y2="500" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="300" y="504" fill="#047857" fontSize="11" fontWeight="800" textAnchor="end">Medulla Oblongata</text>

            <line x1="680" y1="460" x2="820" y2="460" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(825, 445)">
              <rect width="155" height="42" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="77" y="18" fill="#ea580c" fontSize="11" fontWeight="800" textAnchor="middle">Cerebellum</text>
              <text x="77" y="32" fill={textMuted} fontSize="9" textAnchor="middle">(Posture & Balance)</text>
            </g>

            <line x1="540" y1="600" x2="680" y2="600" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="685" y="604" fill={textPrimary} fontSize="11" fontWeight="700">Spinal Cord</text>

            <line x1="760" y1="200" x2="850" y2="200" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="855" y="204" fill={textPrimary} fontSize="11" fontWeight="700">Cranium (Bony Skull)</text>
          </svg>
        );

      // =====================================================================
      // 7. LEAF CROSS SECTION (T.S.) & STOMATAL APPARATUS
      // =====================================================================
      case "bio_leaf_stomata":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="lfBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#06150c" : "#f0fdf4"} />
                <stop offset="100%" stopColor={isDark ? "#030805" : "#dcfce7"} />
              </radialGradient>
              <linearGradient id="palisadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="60%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
              <filter id="lfDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#lfBg)" />
            {[...Array(13)].map((_, i) => <line key={"lvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"lhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="450" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                TRANSVERSE SECTION OF LEAF & STOMATA
              </text>
              <rect x="380" y="9" width="58" height="24" rx="6" fill="#22c55e" fillOpacity="0.2" />
              <text x="409" y="25" fill="#22c55e" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* LEFT HALF: T.S. OF LEAF ANATOMY */}
            <g transform="translate(50, 80)">
              <text x="0" y="0" fill="#15803d" fontSize="12" fontWeight="800">
                PART A: CROSS SECTION OF DICOT LEAF (T.S.)
              </text>

              {/* 1. Waxy Hydrophobic Cuticle (Top sheen) */}
              <rect x="0" y="20" width="460" height="10" rx="4" fill="#67e8f9" opacity="0.8" />

              {/* 2. Upper Epidermis (Single layer of barrel-shaped parenchymatous cells, no chloroplasts) */}
              {[...Array(11)].map((_, i) => (
                <rect
                  key={"uepid"+i}
                  x={i * 42}
                  y="30"
                  width="40"
                  height="30"
                  rx="6"
                  fill="#bbf7d0"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
              ))}

              {/* 3. Palisade Mesophyll (Vertically elongated, densely packed with chlorophyll discs) */}
              {[...Array(11)].map((_, i) => (
                <g key={"pal"+i} transform={`translate(${i * 42}, 62)`}>
                  <rect width="40" height="110" rx="6" fill="url(#palisadeGrad)" stroke="#166534" strokeWidth="2" />
                  {/* Chloroplast Organelles */}
                  <circle cx="12" cy="20" r="4" fill="#14532d" />
                  <circle cx="28" cy="30" r="4" fill="#14532d" />
                  <circle cx="15" cy="55" r="4" fill="#14532d" />
                  <circle cx="28" cy="75" r="4" fill="#14532d" />
                  <circle cx="15" cy="95" r="4" fill="#14532d" />
                </g>
              ))}

              {/* 4. Spongy Mesophyll (Loosely arranged with large air cavities for gas exchange) */}
              <g transform="translate(0, 175)">
                {/* Air cavities background */}
                <rect width="460" height="125" rx="8" fill={isDark ? "#064e3b" : "#f0fdf4"} opacity="0.5" />
                {/* Loosely arranged oval cells */}
                <circle cx="40" cy="30" r="22" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="100" cy="45" r="20" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="45" cy="85" r="24" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="120" cy="100" r="20" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="360" cy="35" r="22" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="420" cy="45" r="20" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="370" cy="90" r="22" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <circle cx="430" cy="100" r="20" fill="#86efac" stroke="#16a34a" strokeWidth="2" />

                {/* VASCULAR BUNDLE (Midrib Vein in Center) */}
                <ellipse cx="230" cy="65" rx="65" ry="55" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                {/* Bundle Sheath Cells ring */}
                <text x="230" y="28" fill="#ca8a04" fontSize="9.5" fontWeight="800" textAnchor="middle">Bundle Sheath</text>
                {/* Xylem Vessels (Thick-walled red, water transport) */}
                <circle cx="215" cy="55" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" />
                <circle cx="245" cy="55" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" />
                <text x="230" y="58" fill="#dc2626" fontSize="9" fontWeight="800" textAnchor="middle">Xylem</text>
                {/* Phloem Sieve Tubes (Green, sugar translocation) */}
                <circle cx="215" cy="85" r="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5" />
                <circle cx="245" cy="85" r="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5" />
                <text x="230" y="88" fill="#16a34a" fontSize="8.5" fontWeight="800" textAnchor="middle">Phloem</text>

                {/* Respiratory Substomatal Cavity */}
                <path d="M 270 125 C 270 95 320 95 320 125 Z" fill="#38bdf8" opacity="0.3" />
                <text x="295" y="115" fill="#0284c7" fontSize="8.5" fontWeight="700" textAnchor="middle">Air Cavity</text>
              </g>

              {/* 5. Lower Epidermis with Stomatal Pore Opening */}
              <g transform="translate(0, 302)">
                {[...Array(6)].map((_, i) => (
                  <rect
                    key={"lepid"+i}
                    x={i * 42}
                    y="0"
                    width="40"
                    height="30"
                    rx="6"
                    fill="#bbf7d0"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                ))}
                {/* Stoma opening gap flanked by Guard Cells */}
                <ellipse cx="270" cy="15" rx="10" ry="14" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
                <ellipse cx="295" cy="15" rx="10" ry="14" fill="#4ade80" stroke="#15803d" strokeWidth="2" />

                {[...Array(4)].map((_, i) => (
                  <rect
                    key={"lepid2"+i}
                    x={315 + i * 40}
                    y="0"
                    width="38"
                    height="30"
                    rx="6"
                    fill="#bbf7d0"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                ))}
                {/* Lower Waxy Cuticle */}
                <rect x="0" y="30" width="460" height="8" rx="3" fill="#67e8f9" opacity="0.8" />
              </g>

              {/* Labels for Leaf Section */}
              <text x="470" y="28" fill="#06b6d4" fontSize="10.5" fontWeight="700">Waxy Cuticle</text>
              <text x="470" y="48" fill="#16a34a" fontSize="10.5" fontWeight="700">Upper Epidermis</text>
              <text x="470" y="115" fill="#15803d" fontSize="10.5" fontWeight="800">Palisade Mesophyll</text>
              <text x="470" y="210" fill="#16a34a" fontSize="10.5" fontWeight="700">Spongy Mesophyll</text>
              <text x="470" y="260" fill="#ca8a04" fontSize="10.5" fontWeight="800">Vascular Bundle (Vein)</text>
              <text x="470" y="318" fill="#15803d" fontSize="10.5" fontWeight="700">Lower Epidermis + Stoma</text>
            </g>

            {/* RIGHT HALF: HIGH-MAGNIFICATION OPEN VS CLOSED STOMATA */}
            <g transform="translate(560, 80)">
              <rect width="400" height="520" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#lfDrop)" />
              <text x="200" y="30" fill="#15803d" fontSize="13" fontWeight="800" textAnchor="middle">
                PART B: STOMATAL MECHANISM (TURGOR PRESSURE)
              </text>

              {/* 1. OPEN STOMA (High Turgor, Guard cells swell, pore opens) */}
              <g transform="translate(40, 60)">
                <rect width="320" height="195" rx="12" fill={isDark ? "#064e3b" : "#f0fdf4"} stroke="#22c55e" strokeWidth="1.5" />
                <text x="160" y="24" fill="#15803d" fontSize="11.5" fontWeight="800" textAnchor="middle">
                  1. OPEN STOMA (Water Influx ➔ Turgid)
                </text>

                {/* Left Kidney-shaped Guard Cell (Swollen) */}
                <path
                  d="M 125 50 
                     C 85 65 75 145 125 160 
                     C 105 135 105 75 125 50 Z"
                  fill="#86efac"
                  stroke="#15803d"
                  strokeWidth="3"
                />
                {/* Thick Inelastic Inner Wall */}
                <path d="M 125 50 C 105 75 105 135 125 160" stroke="#14532d" strokeWidth="6" fill="none" strokeLinecap="round"/>

                {/* Right Kidney-shaped Guard Cell (Swollen) */}
                <path
                  d="M 195 50 
                     C 235 65 245 145 195 160 
                     C 215 135 215 75 195 50 Z"
                  fill="#86efac"
                  stroke="#15803d"
                  strokeWidth="3"
                />
                {/* Thick Inelastic Inner Wall */}
                <path d="M 195 50 C 215 75 215 135 195 160" stroke="#14532d" strokeWidth="6" fill="none" strokeLinecap="round"/>

                {/* Wide Open Stomatal Aperture / Pore */}
                <ellipse cx="160" cy="105" rx="20" ry="38" fill="#0f172a" />
                <text x="160" y="110" fill="#38bdf8" fontSize="10" fontWeight="900" textAnchor="middle">PORE</text>

                {/* Organelles in Guard Cells: Nucleus & Chloroplasts */}
                <circle cx="95" cy="105" r="7" fill="#1e3a8a" stroke="#fff" strokeWidth="1.5" />
                <circle cx="225" cy="105" r="7" fill="#1e3a8a" stroke="#fff" strokeWidth="1.5" />
                <circle cx="90" cy="75" r="4" fill="#15803d" />
                <circle cx="90" cy="135" r="4" fill="#15803d" />
                <circle cx="230" cy="75" r="4" fill="#15803d" />
                <circle cx="230" cy="135" r="4" fill="#15803d" />

                <text x="160" y="182" fill="#15803d" fontSize="10" fontWeight="700" textAnchor="middle">
                  K⁺ & H₂O Enter ➔ Swelling bows outer thin walls outwards
                </text>
              </g>

              {/* 2. CLOSED STOMA (Flaccid Guard cells, pore closes to prevent water loss) */}
              <g transform="translate(40, 275)">
                <rect width="320" height="195" rx="12" fill={isDark ? "#1e1b4b" : "#fef2f2"} stroke="#f87171" strokeWidth="1.5" />
                <text x="160" y="24" fill="#dc2626" fontSize="11.5" fontWeight="800" textAnchor="middle">
                  2. CLOSED STOMA (Water Efflux ➔ Flaccid)
                </text>

                {/* Left Guard Cell (Straightened / collapsed) */}
                <path
                  d="M 145 50 
                     C 115 65 115 145 145 160 
                     L 156 160 L 156 50 Z"
                  fill="#fca5a5"
                  stroke="#b91c1c"
                  strokeWidth="3"
                />
                {/* Right Guard Cell (Straightened / collapsed) */}
                <path
                  d="M 175 50 
                     C 205 65 205 145 175 160 
                     L 164 160 L 164 50 Z"
                  fill="#fca5a5"
                  stroke="#b91c1c"
                  strokeWidth="3"
                />

                {/* Closed Slit (Tightly abutting inner thick walls) */}
                <line x1="160" y1="52" x2="160" y2="158" stroke="#7f1d1d" strokeWidth="4" />
                <text x="160" y="108" fill="#7f1d1d" fontSize="9" fontWeight="900" textAnchor="middle">CLOSED</text>

                {/* Organelles */}
                <circle cx="130" cy="105" r="6" fill="#1e3a8a" />
                <circle cx="190" cy="105" r="6" fill="#1e3a8a" />

                <text x="160" y="182" fill="#dc2626" fontSize="10" fontWeight="700" textAnchor="middle">
                  H₂O Loss ➔ Guard cells shrink & inner walls touch
                </text>
              </g>

              <text x="200" y="495" fill={textMuted} fontSize="9.5" fontWeight="600" textAnchor="middle">
                Crucial CBSE Concept: Guard cell turgidity regulates opening/closing
              </text>
            </g>
          </svg>
        );

      // =====================================================================
      // 8. LONGITUDINAL SECTION OF FLOWER (L.S.)
      // =====================================================================
      case "bio_flower_ls":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="flBg" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#190814" : "#fdf4ff"} />
                <stop offset="100%" stopColor={isDark ? "#060305" : "#fae8ff"} />
              </radialGradient>
              <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="40%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>
              <filter id="flDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#flBg)" />
            {[...Array(13)].map((_, i) => <line key={"fvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"fhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="420" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                LONGITUDINAL SECTION OF A FLOWER (L.S.)
              </text>
              <rect x="350" y="9" width="58" height="24" rx="6" fill="#ec4899" fillOpacity="0.2" />
              <text x="379" y="25" fill="#ec4899" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Flower Stem / Pedicel & Receptacle (Thalamus) */}
            <path d="M 500 500 L 500 630" stroke="#15803d" strokeWidth="22" strokeLinecap="round" />
            <path
              d="M 440 500 
                 C 440 450 560 450 560 500 Z"
              fill="#22c55e"
              stroke="#166534"
              strokeWidth="3.5"
            />
            <text x="500" y="525" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Thalamus / Receptacle</text>
            <text x="500" y="615" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">Pedicel</text>

            {/* Sepals (Calyx - Green protective outer whorl) */}
            <path d="M 450 490 C 360 490 320 440 300 420 C 330 460 410 500 450 500 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2.5" />
            <path d="M 550 490 C 640 490 680 440 700 420 C 670 460 590 500 550 500 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2.5" />

            {/* Petals (Corolla - Large colorful velvety whorl attracting pollinators) */}
            <g filter="url(#flDrop)">
              {/* Left Wing Petal */}
              <path
                d="M 450 470 
                   C 300 470 180 350 200 180 
                   C 260 160 380 280 440 380 Z"
                fill="url(#petalGrad)"
                stroke="#be185d"
                strokeWidth="3"
                opacity="0.95"
              />
              {/* Right Wing Petal */}
              <path
                d="M 550 470 
                   C 700 470 820 350 800 180 
                   C 740 160 620 280 560 380 Z"
                fill="url(#petalGrad)"
                stroke="#be185d"
                strokeWidth="3"
                opacity="0.95"
              />
              {/* Rear Central Petal */}
              <path
                d="M 420 350 
                   C 360 150 640 150 580 350 Z"
                fill="url(#petalGrad)"
                stroke="#9d174d"
                strokeWidth="3"
                opacity="0.75"
              />
            </g>

            {/* STAMEN (Male Reproductive Unit = Filament + Anther) */}
            {/* Left Stamen */}
            <path d="M 460 450 Q 360 320 370 180" fill="none" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            {/* Bilobed Anther bursting with yellow pollen */}
            <g transform="translate(355, 150)">
              <ellipse cx="10" cy="18" rx="10" ry="16" fill="#eab308" stroke="#a16207" strokeWidth="2" />
              <ellipse cx="24" cy="18" rx="10" ry="16" fill="#eab308" stroke="#a16207" strokeWidth="2" />
              {/* Pollen Grains */}
              <circle cx="10" cy="12" r="2.5" fill="#fef08a" />
              <circle cx="12" cy="22" r="2.5" fill="#fef08a" />
              <circle cx="22" cy="15" r="2.5" fill="#fef08a" />
              <circle cx="24" cy="25" r="2.5" fill="#fef08a" />
            </g>

            {/* Right Stamen */}
            <path d="M 540 450 Q 640 320 630 180" fill="none" stroke="#fde047" strokeWidth="6" strokeLinecap="round" />
            {/* Bilobed Anther */}
            <g transform="translate(615, 150)">
              <ellipse cx="10" cy="18" rx="10" ry="16" fill="#eab308" stroke="#a16207" strokeWidth="2" />
              <ellipse cx="24" cy="18" rx="10" ry="16" fill="#eab308" stroke="#a16207" strokeWidth="2" />
              <circle cx="10" cy="12" r="2.5" fill="#fef08a" />
              <circle cx="22" cy="15" r="2.5" fill="#fef08a" />
            </g>

            {/* PISTIL / CARPEL (Female Reproductive Unit = Stigma + Style + Ovary) */}
            {/* Ovary (Swollen basal chamber containing ovules) */}
            <path
              d="M 445 460 
                 C 430 380 480 340 485 270 
                 L 515 270 
                 C 520 340 570 380 555 460 Z"
              fill="#86efac"
              stroke="#15803d"
              strokeWidth="4"
              filter="url(#flDrop)"
            />

            {/* Anatropous Ovule inside Ovary chamber */}
            <g transform="translate(470, 360)">
              <ellipse cx="30" cy="35" rx="26" ry="32" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
              {/* Embryo Sac (Female Gametophyte) with 7 Cells & 8 Nuclei */}
              <ellipse cx="30" cy="35" rx="16" ry="20" fill="#ffffff" stroke="#eab308" strokeWidth="2" />
              {/* 3 Antipodal Cells at chalazal end */}
              <circle cx="22" cy="23" r="3" fill="#ef4444" />
              <circle cx="30" cy="20" r="3" fill="#ef4444" />
              <circle cx="38" cy="23" r="3" fill="#ef4444" />
              {/* 2 Central Polar Nuclei */}
              <circle cx="28" cy="35" r="2.5" fill="#3b82f6" />
              <circle cx="33" cy="35" r="2.5" fill="#3b82f6" />
              {/* Egg Apparatus: 1 Female Gamete (Egg Cell) + 2 Synergids */}
              <circle cx="30" cy="48" r="4.5" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
              <circle cx="22" cy="46" r="2.5" fill="#64748b" />
              <circle cx="38" cy="46" r="2.5" fill="#64748b" />
            </g>

            {/* Slender Style */}
            <rect x="490" y="140" width="20" height="130" fill="#86efac" stroke="#15803d" strokeWidth="3" />

            {/* Sticky Papillate Stigma (Receives pollen grain during pollination) */}
            <ellipse cx="500" cy="135" rx="24" ry="12" fill="#22c55e" stroke="#14532d" strokeWidth="3" />
            {/* Pollen grain germinating with Pollen Tube growing down style */}
            <circle cx="495" cy="128" r="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
            <path d="M 495 132 L 498 360" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,2" fill="none" />

            {/* Whorl Summary Cards & Labels */}
            {/* Male Whorl Card */}
            <g transform="translate(40, 100)">
              <rect width="180" height="90" rx="10" fill={labelBg} stroke="#eab308" strokeWidth="1.5" />
              <text x="90" y="22" fill="#ca8a04" fontSize="12" fontWeight="800" textAnchor="middle">
                STAMEN (MALE WHORL)
              </text>
              <text x="12" y="42" fill={textPrimary} fontSize="10.5">• Anther: Produces Pollen</text>
              <text x="12" y="58" fill={textPrimary} fontSize="10.5">• Filament: Slender Stalk</text>
              <text x="12" y="74" fill={textMuted} fontSize="9">Pollen = Male Gametes</text>
            </g>

            {/* Female Whorl Card */}
            <g transform="translate(780, 100)">
              <rect width="180" height="135" rx="10" fill={labelBg} stroke="#16a34a" strokeWidth="1.5" />
              <text x="90" y="22" fill="#15803d" fontSize="12" fontWeight="800" textAnchor="middle">
                CARPEL / PISTIL (FEMALE)
              </text>
              <text x="12" y="42" fill={textPrimary} fontSize="10.5">• Stigma: Sticky landing</text>
              <text x="12" y="58" fill={textPrimary} fontSize="10.5">• Style: Elongated tube</text>
              <text x="12" y="74" fill={textPrimary} fontSize="10.5">• Ovary: Swollen base</text>
              <text x="12" y="90" fill={textAccent} fontSize="10">• Ovule ➔ Becomes Seed</text>
              <text x="12" y="106" fill="#ec4899" fontSize="10">• Ovary ➔ Becomes Fruit</text>
              <text x="12" y="122" fill={textMuted} fontSize="8.5">Egg cell inside embryo sac</text>
            </g>

            {/* Direct Leader Lines */}
            <line x1="365" y1="165" x2="230" y2="165" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="220" y="169" fill="#ca8a04" fontSize="11" fontWeight="800" textAnchor="end">Anther</text>

            <line x1="365" y1="260" x2="230" y2="260" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="220" y="264" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="end">Filament</text>

            <line x1="500" y1="130" x2="770" y2="130" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="760" y="134" fill="#15803d" fontSize="11" fontWeight="800" textAnchor="end">Stigma</text>

            <line x1="510" y1="200" x2="770" y2="200" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="760" y="204" fill="#15803d" fontSize="11" fontWeight="800" textAnchor="end">Style</text>

            <line x1="550" y1="400" x2="770" y2="330" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="775" y="334" fill="#15803d" fontSize="11" fontWeight="800">Ovary Wall</text>

            <line x1="500" y1="400" x2="770" y2="380" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="775" y="384" fill="#ca8a04" fontSize="11" fontWeight="800">Ovule with Egg Cell</text>

            <line x1="220" y1="280" x2="100" y2="280" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="95" y="284" fill="#ec4899" fontSize="11" fontWeight="800" textAnchor="end">Petal (Corolla)</text>

            <line x1="320" y1="450" x2="200" y2="450" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="195" y="454" fill="#16a34a" fontSize="11" fontWeight="800" textAnchor="end">Sepal (Calyx)</text>
          </svg>
        );

      // =====================================================================
      // 9. HUMAN FEMALE REPRODUCTIVE SYSTEM
      // =====================================================================
      case "bio_female_reproduction":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="frBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#170a12" : "#fdf2f8"} />
                <stop offset="100%" stopColor={isDark ? "#060305" : "#fce7f3"} />
              </radialGradient>
              <linearGradient id="utGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
              <linearGradient id="endometriumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <filter id="frDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#frBg)" />
            {[...Array(13)].map((_, i) => <line key={"frvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"frhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="440" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                HUMAN FEMALE REPRODUCTIVE SYSTEM
              </text>
              <rect x="370" y="9" width="58" height="24" rx="6" fill="#f43f5e" fillOpacity="0.2" />
              <text x="399" y="25" fill="#f43f5e" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Fallopian Tubes (Oviducts: Isthmus, Ampulla, Infundibulum with Fimbriae) */}
            {/* Left Fallopian Tube */}
            <path
              d="M 440 230 
                 C 380 140 260 140 220 200 
                 C 200 230 205 260 215 280"
              fill="none"
              stroke="#fda4af"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Left Fimbriae (Finger-like projections sweeping ovum) */}
            <g stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M 215 280 L 195 295" />
              <path d="M 220 280 L 210 305" />
              <path d="M 225 280 L 230 305" />
              <path d="M 230 275 L 245 295" />
            </g>

            {/* Right Fallopian Tube */}
            <path
              d="M 560 230 
                 C 620 140 740 140 780 200 
                 C 800 230 795 260 785 280"
              fill="none"
              stroke="#fda4af"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Right Fimbriae */}
            <g stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M 785 280 L 805 295" />
              <path d="M 780 280 L 790 305" />
              <path d="M 775 280 L 770 305" />
              <path d="M 770 275 L 755 295" />
            </g>

            {/* OVARIES (Paired primary female sex organs producing estrogen & ova) */}
            {/* Left Ovary */}
            <g filter="url(#frDrop)">
              <ellipse cx="225" cy="330" rx="35" ry="24" fill="#fb7185" stroke="#be123c" strokeWidth="3" />
              {/* Developing Follicles inside Left Ovary */}
              <circle cx="210" cy="325" r="5" fill="#fef08a" stroke="#ca8a04" />
              <circle cx="230" cy="320" r="7" fill="#fef08a" stroke="#ca8a04" />
              <circle cx="240" cy="340" r="9" fill="#fef08a" stroke="#ca8a04" />
              {/* Ovarian Ligament anchoring to Uterus */}
              <path d="M 260 330 Q 380 340 440 320" stroke="#f472b6" strokeWidth="5" fill="none" strokeDasharray="4,2"/>
            </g>

            {/* Right Ovary */}
            <g filter="url(#frDrop)">
              <ellipse cx="775" cy="330" rx="35" ry="24" fill="#fb7185" stroke="#be123c" strokeWidth="3" />
              <circle cx="790" cy="325" r="5" fill="#fef08a" stroke="#ca8a04" />
              <circle cx="770" cy="320" r="7" fill="#fef08a" stroke="#ca8a04" />
              <circle cx="760" cy="340" r="9" fill="#fef08a" stroke="#ca8a04" />
              <path d="M 740 330 Q 620 340 560 320" stroke="#f472b6" strokeWidth="5" fill="none" strokeDasharray="4,2"/>
            </g>

            {/* UTERUS (Womb: Inverted pear-shaped thick muscular organ) */}
            <g filter="url(#frDrop)">
              {/* Outer Muscular Myometrium */}
              <path
                d="M 370 240 
                   C 370 170 630 170 630 240 
                   C 630 360 550 430 540 480 
                   L 460 480 
                   C 450 430 370 360 370 240 Z"
                fill="url(#utGrad)"
                stroke="#9f1239"
                strokeWidth="4"
              />

              {/* Endometrium (Vascular glandular inner lining for embryo implantation) */}
              <path
                d="M 410 245 
                   C 440 225 560 225 590 245 
                   C 570 340 525 390 520 440 
                   L 480 440 
                   C 475 390 430 340 410 245 Z"
                fill="url(#endometriumGrad)"
                stroke="#fda4af"
                strokeWidth="2.5"
              />
              {/* Uterine Cavity space */}
              <polygon points="450,250 550,250 500,380" fill="#fff1f2" opacity="0.6" />
            </g>

            {/* CERVIX (Narrow neck of uterus with cervical canal) */}
            <rect x="460" y="480" width="80" height="45" rx="6" fill="#be123c" stroke="#881337" strokeWidth="3" />
            <line x1="500" y1="480" x2="500" y2="525" stroke="#ffe4e6" strokeWidth="6" />

            {/* VAGINA (Birth canal & copulatory passage) */}
            <rect x="465" y="525" width="70" height="85" rx="8" fill="#fda4af" stroke="#f43f5e" strokeWidth="3" />
            {/* Vaginal rugae folds */}
            <line x1="475" y1="545" x2="525" y2="545" stroke="#e11d48" strokeWidth="2.5" />
            <line x1="475" y1="565" x2="525" y2="565" stroke="#e11d48" strokeWidth="2.5" />
            <line x1="475" y1="585" x2="525" y2="585" stroke="#e11d48" strokeWidth="2.5" />

            {/* Site of Fertilization Indicator: Ampulla */}
            <circle cx="270" cy="150" r="10" fill="#facc15" stroke="#ffffff" strokeWidth="2" filter="url(#frDrop)" />
            <text x="270" y="130" fill="#facc15" fontSize="11" fontWeight="800" textAnchor="middle">
              ★ SITE OF FERTILIZATION (Ampulla)
            </text>

            {/* Site of Implantation Indicator */}
            <circle cx="500" cy="270" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            <text x="500" y="300" fill="#10b981" fontSize="11" fontWeight="800" textAnchor="middle">
              ★ SITE OF IMPLANTATION (Endometrium)
            </text>

            {/* Labels & Details */}
            {/* Fallopian Tube */}
            <line x1="720" y1="150" x2="840" y2="150" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(845, 135)">
              <rect width="145" height="40" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="72" y="18" fill={textAccent} fontSize="11" fontWeight="800" textAnchor="middle">Oviduct / Fallopian Tube</text>
              <text x="72" y="32" fill={textMuted} fontSize="9" textAnchor="middle">(Fertilization Site)</text>
            </g>

            {/* Ovary */}
            <line x1="775" y1="355" x2="840" y2="355" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(845, 340)">
              <rect width="145" height="40" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="72" y="18" fill="#f43f5e" fontSize="11" fontWeight="800" textAnchor="middle">Ovary (Paired)</text>
              <text x="72" y="32" fill={textMuted} fontSize="9" textAnchor="middle">(Produces Ovum & Estrogen)</text>
            </g>

            {/* Uterus */}
            <line x1="400" y1="220" x2="160" y2="220" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <g transform="translate(15, 205)">
              <rect width="140" height="40" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
              <text x="70" y="18" fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">Uterus (Womb)</text>
              <text x="70" y="32" fill={textMuted} fontSize="9" textAnchor="middle">Embryo Development</text>
            </g>

            {/* Cervix */}
            <line x1="460" y1="500" x2="310" y2="500" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="300" y="504" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="end">Cervix</text>

            {/* Vagina */}
            <line x1="535" y1="565" x2="680" y2="565" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="685" y="569" fill={textPrimary} fontSize="11" fontWeight="700">Vagina (Birth Canal)</text>
          </svg>
        );

      // =====================================================================
      // 10. MENDELIAN MONOHYBRID & DIHYBRID INHERITANCE CROSSES
      // =====================================================================
      case "bio_mendel_cross":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="mnBg" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#020617" : "#e2e8f0"} />
              </radialGradient>
              <filter id="mnDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.4" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#mnBg)" />
            {[...Array(13)].map((_, i) => <line key={"mvg"+i} x1={80*i} y1="0" x2={80*i} y2="650" stroke={gridStroke} strokeWidth="1" />)}
            {[...Array(9)].map((_, i) => <line key={"mhg"+i} x1="0" y1={75*i} x2="1000" y2={75*i} stroke={gridStroke} strokeWidth="1" />)}

            {/* Title */}
            <g transform="translate(40, 25)">
              <rect width="460" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="16" y="26" fill={textPrimary} fontSize="14" fontWeight="700">
                MENDEL'S DIHYBRID CROSS & INHERITANCE RATIOS
              </text>
              <rect x="390" y="9" width="58" height="24" rx="6" fill="#6366f1" fillOpacity="0.2" />
              <text x="419" y="25" fill="#818cf8" fontSize="10" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* LEFT HALF: PARENTS (P1), GAMETES & F1 GENERATION */}
            <g transform="translate(40, 80)">
              <rect width="360" height="520" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#mnDrop)" />
              <text x="180" y="30" fill="#4f46e5" fontSize="12" fontWeight="800" textAnchor="middle">
                CROSS: ROUND YELLOW × WRINKLED GREEN
              </text>

              {/* Parents Generation (P) */}
              <g transform="translate(20, 50)">
                <text x="0" y="20" fill={textPrimary} fontSize="11" fontWeight="800">Parents (P Generation):</text>

                {/* Round Yellow (RRYY) */}
                <circle cx="70" cy="65" r="24" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" />
                <text x="70" y="70" fill="#713f12" fontSize="12" fontWeight="900" textAnchor="middle">RRYY</text>
                <text x="70" y="105" fill={textPrimary} fontSize="10" fontWeight="700" textAnchor="middle">Round Yellow</text>

                <text x="160" y="70" fill="#ef4444" fontSize="16" fontWeight="900" textAnchor="middle">×</text>

                {/* Wrinkled Green (rryy) */}
                <circle cx="250" cy="65" r="22" fill="#86efac" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5,3" />
                <text x="250" y="70" fill="#14532d" fontSize="12" fontWeight="900" textAnchor="middle">rryy</text>
                <text x="250" y="105" fill={textPrimary} fontSize="10" fontWeight="700" textAnchor="middle">Wrinkled Green</text>
              </g>

              {/* Gametes Produced */}
              <g transform="translate(20, 180)">
                <text x="0" y="15" fill={textPrimary} fontSize="11" fontWeight="800">Gametes Formed:</text>
                <circle cx="70" cy="45" r="16" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <text x="70" y="50" fill="#713f12" fontSize="11" fontWeight="800" textAnchor="middle">RY</text>

                <text x="160" y="50" fill="#ef4444" fontSize="16" fontWeight="900" textAnchor="middle">×</text>

                <circle cx="250" cy="45" r="16" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
                <text x="250" y="50" fill="#14532d" fontSize="11" fontWeight="800" textAnchor="middle">ry</text>
              </g>

              {/* F1 Generation Result */}
              <g transform="translate(20, 275)">
                <rect width="320" height="95" rx="10" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
                <text x="160" y="24" fill="#4338ca" fontSize="11.5" fontWeight="800" textAnchor="middle">
                  F1 GENERATION (ALL HETEROZYGOUS)
                </text>
                <circle cx="80" cy="60" r="22" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" />
                <text x="80" y="65" fill="#713f12" fontSize="11" fontWeight="900" textAnchor="middle">RrYy</text>
                <text x="120" y="56" fill={textPrimary} fontSize="12" fontWeight="800">100% Round Yellow</text>
                <text x="120" y="74" fill={textMuted} fontSize="10">Law of Dominance proved</text>
              </g>

              {/* Self-Pollination (F1 × F1) */}
              <g transform="translate(20, 390)">
                <text x="160" y="20" fill="#10b981" fontSize="11" fontWeight="800" textAnchor="middle">
                  Selfing: RrYy × RrYy
                </text>
                <text x="160" y="40" fill={textPrimary} fontSize="10" textAnchor="middle">
                  Produces 4 types of Gametes each:
                </text>
                <g transform="translate(45, 55)">
                  {["RY", "Ry", "rY", "ry"].map((gmt, idx) => (
                    <g key={"gmt"+idx} transform={`translate(${idx * 60}, 0)`}>
                      <circle cx="20" cy="20" r="16" fill="#f1f5f9" stroke="#6366f1" strokeWidth="2" />
                      <text x="20" y="24" fill="#312e81" fontSize="11" fontWeight="800" textAnchor="middle">{gmt}</text>
                    </g>
                  ))}
                </g>
              </g>
            </g>

            {/* RIGHT HALF: F2 PUNNETT SQUARE (4×4 GRID = 16 COMBINATIONS) */}
            <g transform="translate(420, 80)">
              <rect width="540" height="520" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#mnDrop)" />
              <text x="270" y="30" fill="#4338ca" fontSize="13" fontWeight="800" textAnchor="middle">
                F2 GENERATION — 4×4 PUNNETT CHECKERBOARD
              </text>

              {/* Punnett Grid Table */}
              <g transform="translate(40, 50)">
                {/* Headers Column & Row: RY, Ry, rY, ry */}
                {["RY", "Ry", "rY", "ry"].map((g, idx) => (
                  <g key={"hdr"+idx}>
                    {/* Top Row Header */}
                    <rect x={70 + idx * 85} y="0" width="80" height="32" rx="6" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1.5" />
                    <text x={110 + idx * 85} y="21" fill="#312e81" fontSize="11" fontWeight="900" textAnchor="middle">{g}</text>

                    {/* Left Column Header */}
                    <rect x="0" y={40 + idx * 68} width="60" height="60" rx="6" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1.5" />
                    <text x="30" y={76 + idx * 68} fill="#312e81" fontSize="11" fontWeight="900" textAnchor="middle">{g}</text>
                  </g>
                ))}

                {/* 16 Punnett Grid Cells */}
                {[
                  // Row 0: RY
                  { geno: "RRYY", pheno: "RY", bg: "#fef08a" },
                  { geno: "RRYy", pheno: "RY", bg: "#fef08a" },
                  { geno: "RrYY", pheno: "RY", bg: "#fef08a" },
                  { geno: "RrYy", pheno: "RY", bg: "#fef08a" },
                  // Row 1: Ry
                  { geno: "RRYy", pheno: "RY", bg: "#fef08a" },
                  { geno: "RRyy", pheno: "RG", bg: "#bbf7d0" },
                  { geno: "RrYy", pheno: "RY", bg: "#fef08a" },
                  { geno: "Rryy", pheno: "RG", bg: "#bbf7d0" },
                  // Row 2: rY
                  { geno: "RrYY", pheno: "RY", bg: "#fef08a" },
                  { geno: "RrYy", pheno: "RY", bg: "#fef08a" },
                  { geno: "rrYY", pheno: "WY", bg: "#fed7aa" },
                  { geno: "rrYy", pheno: "WY", bg: "#fed7aa" },
                  // Row 3: ry
                  { geno: "RrYy", pheno: "RY", bg: "#fef08a" },
                  { geno: "Rryy", pheno: "RG", bg: "#bbf7d0" },
                  { geno: "rrYy", pheno: "WY", bg: "#fed7aa" },
                  { geno: "rryy", pheno: "WG", bg: "#dcfce7" },
                ].map((cell, idx) => {
                  const col = idx % 4;
                  const row = Math.floor(idx / 4);
                  return (
                    <g key={"pcell"+idx} transform={`translate(${70 + col * 85}, ${40 + row * 68})`}>
                      <rect width="80" height="60" rx="8" fill={cell.bg} stroke="#94a3b8" strokeWidth="1.2" />
                      <text x="40" y="26" fill="#0f172a" fontSize="11" fontWeight="900" textAnchor="middle">{cell.geno}</text>
                      <circle cx="40" cy="44" r="8" fill={cell.pheno === "RY" ? "#eab308" : cell.pheno === "RG" ? "#22c55e" : cell.pheno === "WY" ? "#f97316" : "#15803d"} />
                    </g>
                  );
                })}
              </g>

              {/* F2 Phenotypic Ratio Summary Bar */}
              <g transform="translate(40, 395)">
                <rect width="460" height="95" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="230" y="24" fill="#0284c7" fontSize="12" fontWeight="800" textAnchor="middle">
                  F2 PHENOTYPIC RATIO = 9 : 3 : 3 : 1
                </text>

                <g transform="translate(15, 38)">
                  <rect x="0" y="0" width="100" height="42" rx="6" fill="#fef08a" />
                  <text x="50" y="18" fill="#713f12" fontSize="10" fontWeight="900" textAnchor="middle">9 Round Yellow</text>
                  <text x="50" y="32" fill="#713f12" fontSize="9" textAnchor="middle">(R_Y_)</text>

                  <rect x="110" y="0" width="100" height="42" rx="6" fill="#bbf7d0" />
                  <text x="160" y="18" fill="#14532d" fontSize="10" fontWeight="900" textAnchor="middle">3 Round Green</text>
                  <text x="160" y="32" fill="#14532d" fontSize="9" textAnchor="middle">(R_yy)</text>

                  <rect x="220" y="0" width="105" height="42" rx="6" fill="#fed7aa" />
                  <text x="272" y="18" fill="#7c2d12" fontSize="10" fontWeight="900" textAnchor="middle">3 Wrinkled Yellow</text>
                  <text x="272" y="32" fill="#7c2d12" fontSize="9" textAnchor="middle">(rrY_)</text>

                  <rect x="335" y="0" width="100" height="42" rx="6" fill="#dcfce7" />
                  <text x="385" y="18" fill="#14532d" fontSize="10" fontWeight="900" textAnchor="middle">1 Wrinkled Green</text>
                  <text x="385" y="32" fill="#14532d" fontSize="9" textAnchor="middle">(rryy)</text>
                </g>
              </g>
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
