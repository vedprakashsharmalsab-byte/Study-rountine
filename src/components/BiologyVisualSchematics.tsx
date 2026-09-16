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
  const [reproView, setReproView] = useState<"female" | "male">("female");
  const [mendelView, setMendelView] = useState<"monohybrid" | "dihybrid" | "sex_det">("monohybrid");
  const [digestiveView, setDigestiveView] = useState<"anatomy" | "enzymes" | "rubric">("anatomy");
  const [respiratoryView, setRespiratoryView] = useState<"anatomy" | "mechanics" | "alveoli">("anatomy");
  const [respiratoryPhase, setRespiratoryPhase] = useState<"inhalation" | "exhalation">("inhalation");

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
          <svg viewBox="0 0 1100 720" className="w-full h-auto select-none font-sans">
            <defs>
              <radialGradient id="respBgAtlas" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#0d1829" : "#f0f9ff"} />
                <stop offset="60%" stopColor={isDark ? "#070d18" : "#e0f2fe"} />
                <stop offset="100%" stopColor={isDark ? "#03060c" : "#dbeafe"} />
              </radialGradient>

              {/* Lung 3D shading gradients */}
              <linearGradient id="lungRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="30%" stopColor="#f43f5e" />
                <stop offset="70%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
              <linearGradient id="lungLeftGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="35%" stopColor="#f43f5e" />
                <stop offset="75%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>

              {/* Hyaline Cartilage gradient */}
              <linearGradient id="hyalineRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="25%" stopColor="#7dd3fc" />
                <stop offset="60%" stopColor="#bae6fd" />
                <stop offset="85%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>

              {/* Diaphragm muscular gradient */}
              <linearGradient id="diaphragmAtlasGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="40%" stopColor="#d97706" />
                <stop offset="80%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Blood capillary gradients */}
              <linearGradient id="capDeoxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="capOxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>

              {/* Soft atlas shadow filter */}
              <filter id="respAtlasShadow" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity={isDark ? "0.6" : "0.2"} />
              </filter>
              <filter id="glowAir" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Arrow markers */}
              <marker id="arrRespCyan" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#0284c7" />
              </marker>
              <marker id="arrRespRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#ef4444" />
              </marker>
              <marker id="arrRespAmber" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#f59e0b" />
              </marker>
              <marker id="arrRespWhite" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Background Canvas */}
            <rect width="1100" height="720" rx="24" fill="url(#respBgAtlas)" stroke={labelBorder} strokeWidth="1.5" />

            {/* Micro grid pattern for technical precision */}
            {[...Array(14)].map((_, i) => (
              <line key={"rvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="720" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(10)].map((_, i) => (
              <line key={"rhg" + i} x1="0" y1={75 * i} x2="1100" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* ================================================================= */}
            {/* TOP INTERACTIVE CONTROL PANEL & TITLE                            */}
            {/* ================================================================= */}
            <g transform="translate(30, 20)">
              {/* Title Badge */}
              <rect width="470" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <circle cx="28" cy="23" r="12" fill="#0284c7" fillOpacity="0.15" />
              <text x="28" y="27" fill="#0284c7" fontSize="14" fontWeight="900" textAnchor="middle">🫁</text>
              <text x="50" y="28" fill={textPrimary} fontSize="14" fontWeight="800" letterSpacing="0.3">
                HUMAN RESPIRATORY SYSTEM & ALVEOLI
              </text>
              <rect x="385" y="11" width="72" height="24" rx="6" fill="#0284c7" fillOpacity="0.15" stroke="#0284c7" strokeWidth="1" />
              <text x="421" y="27" fill="#0284c7" fontSize="10.5" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Interactive View Switcher Tabs (3 Modes) */}
            <g transform="translate(520, 20)">
              <rect width="550" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />

              {/* Tab 1: Anatomy */}
              <g
                className="cursor-pointer"
                onClick={() => setRespiratoryView("anatomy")}
                transform="translate(8, 7)"
              >
                <rect
                  width="160"
                  height="32"
                  rx="8"
                  fill={respiratoryView === "anatomy" ? "#0284c7" : "transparent"}
                  stroke={respiratoryView === "anatomy" ? "#38bdf8" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="80"
                  y="20"
                  fill={respiratoryView === "anatomy" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  1. Gross Anatomy
                </text>
              </g>

              {/* Tab 2: Mechanics */}
              <g
                className="cursor-pointer"
                onClick={() => setRespiratoryView("mechanics")}
                transform="translate(178, 7)"
              >
                <rect
                  width="180"
                  height="32"
                  rx="8"
                  fill={respiratoryView === "mechanics" ? "#0284c7" : "transparent"}
                  stroke={respiratoryView === "mechanics" ? "#38bdf8" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="90"
                  y="20"
                  fill={respiratoryView === "mechanics" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  2. Breathing Mechanics
                </text>
              </g>

              {/* Tab 3: Alveoli & Rubric */}
              <g
                className="cursor-pointer"
                onClick={() => setRespiratoryView("alveoli")}
                transform="translate(368, 7)"
              >
                <rect
                  width="172"
                  height="32"
                  rx="8"
                  fill={respiratoryView === "alveoli" ? "#0284c7" : "transparent"}
                  stroke={respiratoryView === "alveoli" ? "#38bdf8" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="86"
                  y="20"
                  fill={respiratoryView === "alveoli" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  3. Alveoli & 5M Rubric
                </text>
              </g>
            </g>

            {/* Secondary Mechanics Toggle Bar (Inhalation vs Exhalation) */}
            {respiratoryView === "mechanics" && (
              <g transform="translate(360, 75)">
                <rect width="380" height="38" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                <text x="18" y="24" fill={textPrimary} fontSize="11" fontWeight="700">Phase:</text>

                {/* Inhalation Button */}
                <g
                  className="cursor-pointer"
                  onClick={() => setRespiratoryPhase("inhalation")}
                  transform="translate(70, 5)"
                >
                  <rect
                    width="145"
                    height="28"
                    rx="6"
                    fill={respiratoryPhase === "inhalation" ? "#10b981" : isDark ? "#1e293b" : "#f1f5f9"}
                    stroke={respiratoryPhase === "inhalation" ? "#34d399" : "transparent"}
                    strokeWidth="1"
                  />
                  <text
                    x="72"
                    y="18"
                    fill={respiratoryPhase === "inhalation" ? "#ffffff" : textMuted}
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    ⬇️ Inhalation (Active)
                  </text>
                </g>

                {/* Exhalation Button */}
                <g
                  className="cursor-pointer"
                  onClick={() => setRespiratoryPhase("exhalation")}
                  transform="translate(225, 5)"
                >
                  <rect
                    width="145"
                    height="28"
                    rx="6"
                    fill={respiratoryPhase === "exhalation" ? "#f59e0b" : isDark ? "#1e293b" : "#f1f5f9"}
                    stroke={respiratoryPhase === "exhalation" ? "#fbbf24" : "transparent"}
                    strokeWidth="1"
                  />
                  <text
                    x="72"
                    y="18"
                    fill={respiratoryPhase === "exhalation" ? "#ffffff" : textMuted}
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    ⬆️ Exhalation (Passive)
                  </text>
                </g>
              </g>
            )}

            {/* ================================================================= */}
            {/* MAIN ANATOMICAL RENDER: RESPIRATORY TRACT & LUNGS               */}
            {/* ================================================================= */}
            <g transform="translate(40, 50)">

              {/* 1. Translucent Thoracic Cage Contour & Rib Cut-Ends */}
              <g opacity={isDark ? "0.22" : "0.15"}>
                {/* Thorax Silhouette */}
                <path
                  d="M 230 40 
                     C 190 70 160 130 160 210 
                     C 160 380 140 500 170 580 
                     L 590 580 
                     C 620 500 600 380 600 210 
                     C 600 130 570 70 530 40 Z"
                  fill="none"
                  stroke={textPrimary}
                  strokeWidth="3.5"
                  strokeDasharray="6,4"
                />

                {/* Cut Ends of Ribs (Right side: Ribs 3 to 9) */}
                {[200, 250, 305, 360, 415, 470, 525].map((yPos, idx) => (
                  <g key={"rib-rt-" + idx}>
                    <path
                      d={`M 175 ${yPos} Q 230 ${yPos + 18} 300 ${yPos + 12}`}
                      fill="none"
                      stroke={textPrimary}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <ellipse cx="175" cy={yPos} rx="7" ry="11" fill={isDark ? "#94a3b8" : "#64748b"} />
                  </g>
                ))}

                {/* Cut Ends of Ribs (Left side: Ribs 3 to 9) */}
                {[200, 250, 305, 360, 415, 470, 525].map((yPos, idx) => (
                  <g key={"rib-lt-" + idx}>
                    <path
                      d={`M 585 ${yPos} Q 530 ${yPos + 18} 460 ${yPos + 12}`}
                      fill="none"
                      stroke={textPrimary}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <ellipse cx="585" cy={yPos} rx="7" ry="11" fill={isDark ? "#94a3b8" : "#64748b"} />
                  </g>
                ))}
              </g>

              {/* 2. Upper Airway: Nasal Cavity, Pharynx & Larynx */}
              <g id="upperAirwayGroup">
                {/* Head / Nasal Silhouette Outline */}
                <path
                  d="M 330 20 
                     C 350 20 375 25 385 40 
                     C 395 55 385 75 395 90 
                     C 405 105 415 110 400 125 
                     C 390 135 380 145 380 165"
                  fill="none"
                  stroke={isDark ? "rgba(148, 163, 184, 0.3)" : "rgba(100, 116, 139, 0.3)"}
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Nasal Cavity with Conchae/Turbinate Air Passages */}
                <path
                  d="M 360 45 C 380 45 385 60 375 75 C 385 85 380 100 365 105"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M 355 60 Q 375 65 365 78 Q 380 85 360 95"
                  fill="none"
                  stroke="#bae6fd"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Pharynx (Common passage for food & air) */}
                <path
                  d="M 368 95 L 368 135"
                  stroke="#f472b6"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* Epiglottis Cartilage Flap */}
                <path
                  d="M 360 128 C 352 120 354 112 364 112 C 374 112 374 122 368 132"
                  fill="#facc15"
                  stroke="#ca8a04"
                  strokeWidth="2"
                />

                {/* LARYNX: Thyroid Cartilage (Adam's Apple) & Cricoid Ring */}
                <g filter="url(#respAtlasShadow)">
                  {/* Thyroid Cartilage body with prominence */}
                  <polygon
                    points="350,140 386,140 392,165 368,175 344,165"
                    fill="#38bdf8"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                  />
                  {/* Laryngeal Prominence (Adam's Apple) highlight */}
                  <line x1="368" y1="142" x2="368" y2="173" stroke="#e0f2fe" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Cricoid Cartilage (complete signet ring below thyroid cartilage) */}
                  <rect x="352" y="176" width="32" height="12" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
                </g>
              </g>

              {/* 3. TRACHEA (Windpipe) with 12 C-shaped Hyaline Cartilaginous Rings */}
              <g id="tracheaGroup">
                {/* Deep Tracheal Tube Background (smooth muscle & mucosa) */}
                <rect x="354" y="190" width="28" height="105" rx="5" fill={isDark ? "#0f172a" : "#cbd5e1"} stroke="#0284c7" strokeWidth="2" />

                {/* C-Shaped Rings (Open posteriorly facing esophagus) */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
                  const ringY = 194 + idx * 11;
                  return (
                    <g key={"c-ring-" + idx}>
                      {/* Hyaline Ring Arch */}
                      <path
                        d={`M 352 ${ringY} Q 368 ${ringY + 4} 384 ${ringY}`}
                        fill="none"
                        stroke="url(#hyalineRingGrad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        filter="url(#respAtlasShadow)"
                      />
                      {/* Anterior cartilage highlight */}
                      <circle cx="368" cy={ringY + 2} r="1.5" fill="#ffffff" opacity="0.8" />
                    </g>
                  );
                })}

                {/* Carina (Internal cartilaginous ridge at bifurcation) */}
                <circle cx="368" cy="298" r="4.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
              </g>

              {/* 4. PRIMARY BRONCHI BIFURCATION (Asymmetric Anatomy) */}
              <g id="bronchiBifurcation">
                {/* RIGHT Primary Bronchus: Wider, Shorter (2.5 cm), More Vertical */}
                <path
                  d="M 364 298 Q 345 320 315 340"
                  fill="none"
                  stroke="url(#hyalineRingGrad)"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M 364 298 Q 345 320 315 340"
                  fill="none"
                  stroke={isDark ? "#0f172a" : "#cbd5e1"}
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                {/* LEFT Primary Bronchus: Narrower, Longer (5.0 cm), More Horizontal */}
                <path
                  d="M 372 298 Q 410 325 445 348"
                  fill="none"
                  stroke="url(#hyalineRingGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 372 298 Q 410 325 445 348"
                  fill="none"
                  stroke={isDark ? "#0f172a" : "#cbd5e1"}
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </g>

              {/* 5. RIGHT LUNG (3 Distinct Lobes: Superior, Middle, Inferior) */}
              <g
                id="rightLungGroup"
                filter="url(#respAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("Right Lung (3 Lobes)")}
              >
                {/* Double Pleural Membrane Envelope (Parietal & Visceral Pleura) */}
                <path
                  d="M 315 285 
                     C 270 270 195 305 185 385 
                     C 175 470 205 540 315 558 
                     C 345 558 355 500 350 430 
                     C 345 360 340 300 315 285 Z"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4,3"
                  opacity="0.75"
                />

                {/* Main Right Lung Parenchyma */}
                <path
                  d="M 315 290 
                     C 272 278 202 312 192 388 
                     C 182 468 212 534 315 552 
                     C 340 552 350 495 345 425 
                     C 340 358 335 304 315 290 Z"
                  fill="url(#lungRightGrad)"
                  stroke="#e11d48"
                  strokeWidth="3.5"
                />

                {/* 1. Horizontal Fissure (Separating Superior & Middle Lobes) */}
                <path
                  d="M 198 385 Q 265 398 344 380"
                  fill="none"
                  stroke="#881337"
                  strokeWidth="3"
                  strokeDasharray="5,2"
                />

                {/* 2. Oblique Fissure (Separating Middle & Inferior Lobes) */}
                <path
                  d="M 215 465 Q 275 460 338 480"
                  fill="none"
                  stroke="#881337"
                  strokeWidth="3"
                  strokeDasharray="5,2"
                />

                {/* Lobe Text Labels inside Lung */}
                <text x="265" y="345" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle" opacity="0.9">
                  Superior Lobe
                </text>
                <text x="265" y="425" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle" opacity="0.9">
                  Middle Lobe
                </text>
                <text x="265" y="505" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle" opacity="0.9">
                  Inferior Lobe
                </text>

                {/* Secondary & Tertiary Bronchial Arborization (Right Lung) */}
                <g stroke="url(#hyalineRingGrad)" fill="none" strokeLinecap="round">
                  {/* Superior lobar bronchus */}
                  <path d="M 315 340 Q 285 335 255 330" strokeWidth="6" />
                  <path d="M 255 330 L 235 315 M 255 330 L 240 345" strokeWidth="3" />

                  {/* Middle lobar bronchus */}
                  <path d="M 315 340 Q 290 395 260 415" strokeWidth="5.5" />
                  <path d="M 260 415 L 235 425 M 260 415 L 265 440" strokeWidth="3" />

                  {/* Inferior lobar bronchus */}
                  <path d="M 315 340 Q 300 450 285 490" strokeWidth="5.5" />
                  <path d="M 285 490 L 260 515 M 285 490 L 305 520" strokeWidth="3" />
                </g>
              </g>

              {/* 6. LEFT LUNG (2 Lobes + Authentic Deep CARDIAC NOTCH for Heart) */}
              <g
                id="leftLungGroup"
                filter="url(#respAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("Left Lung & Cardiac Notch")}
              >
                {/* Double Pleural Membrane Envelope */}
                <path
                  d="M 430 285 
                     C 475 270 550 305 560 385 
                     C 570 470 540 540 430 558 
                     C 405 558 395 505 408 455 
                     C 380 420 380 370 405 335 
                     C 415 300 420 292 430 285 Z"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4,3"
                  opacity="0.75"
                />

                {/* Left Lung Parenchyma with realistic Cardiac Notch indent */}
                <path
                  d="M 430 290 
                     C 472 278 542 312 552 388 
                     C 562 468 532 534 430 552 
                     C 410 552 400 500 414 455 
                     C 388 420 388 370 412 338 
                     C 418 305 422 296 430 290 Z"
                  fill="url(#lungLeftGrad)"
                  stroke="#e11d48"
                  strokeWidth="3.5"
                />

                {/* Oblique Fissure (Dividing Superior & Inferior Lobes) */}
                <path
                  d="M 430 350 Q 490 415 545 450"
                  fill="none"
                  stroke="#881337"
                  strokeWidth="3"
                  strokeDasharray="5,2"
                />

                {/* Cardiac Notch Highlight Glow & Heart Outline */}
                <path
                  d="M 412 338 C 388 370 388 420 414 455"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#glowAir)"
                />

                {/* Ghost heart contour sitting inside cardiac notch */}
                <path
                  d="M 388 355 C 365 375 365 415 395 440 C 405 448 412 452 414 455"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                  opacity="0.8"
                />
                <text x="360" y="415" fill="#f87171" fontSize="9.5" fontWeight="800" textAnchor="middle">
                  Apex of Heart
                </text>

                {/* Lobe Text Labels */}
                <text x="485" y="355" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle" opacity="0.9">
                  Superior Lobe
                </text>
                <text x="480" y="495" fill="#ffffff" fontSize="10.5" fontWeight="800" textAnchor="middle" opacity="0.9">
                  Inferior Lobe
                </text>
                {/* Lingula Label */}
                <text x="435" y="472" fill="#fed7aa" fontSize="9" fontWeight="700">
                  Lingula
                </text>

                {/* Secondary & Tertiary Bronchial Arborization (Left Lung) */}
                <g stroke="url(#hyalineRingGrad)" fill="none" strokeLinecap="round">
                  {/* Superior lobar bronchus */}
                  <path d="M 445 348 Q 475 350 500 365" strokeWidth="6" />
                  <path d="M 500 365 L 525 350 M 500 365 L 525 380" strokeWidth="3" />

                  {/* Inferior lobar bronchus */}
                  <path d="M 445 348 Q 465 435 480 480" strokeWidth="5.5" />
                  <path d="M 480 480 L 460 510 M 480 480 L 505 515" strokeWidth="3" />
                </g>
              </g>

              {/* 7. MUSCULAR DIAPHRAGM (With Breathing Phase Mechanics Dynamics) */}
              <g id="diaphragmGroup" filter="url(#respAtlasShadow)">
                {/* Diaphragm Body */}
                {respiratoryPhase === "inhalation" ? (
                  /* Flattens downward on contraction */
                  <g>
                    <path
                      d="M 150 575 Q 368 565 590 575"
                      fill="none"
                      stroke="url(#diaphragmAtlasGrad)"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Downward contraction vectors */}
                    <path d="M 368 535 L 368 560" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrRespAmber)" />
                    <path d="M 270 538 L 270 560" stroke="#f59e0b" strokeWidth="3.5" markerEnd="url(#arrRespAmber)" />
                    <path d="M 470 538 L 470 560" stroke="#f59e0b" strokeWidth="3.5" markerEnd="url(#arrRespAmber)" />

                    {/* Air entering trachea vectors */}
                    <path d="M 368 25 L 368 75" stroke="#38bdf8" strokeWidth="5" markerEnd="url(#arrRespWhite)" />
                    <text x="368" y="15" fill="#38bdf8" fontSize="11" fontWeight="900" textAnchor="middle">
                      AIR RUSHES IN ⬇️
                    </text>
                  </g>
                ) : (
                  /* Relaxes and arches high into dome shape */
                  <g>
                    <path
                      d="M 150 580 Q 368 495 590 580"
                      fill="none"
                      stroke="url(#diaphragmAtlasGrad)"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Upward relaxation vectors */}
                    <path d="M 368 555 L 368 520" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrRespAmber)" />
                    <path d="M 270 560 L 270 530" stroke="#f59e0b" strokeWidth="3.5" markerEnd="url(#arrRespAmber)" />
                    <path d="M 470 560 L 470 530" stroke="#f59e0b" strokeWidth="3.5" markerEnd="url(#arrRespAmber)" />

                    {/* Air expelled vector */}
                    <path d="M 368 75 L 368 25" stroke="#f59e0b" strokeWidth="5" markerEnd="url(#arrRespAmber)" />
                    <text x="368" y="15" fill="#f59e0b" fontSize="11" fontWeight="900" textAnchor="middle">
                      AIR EXPELLED ⬆️
                    </text>
                  </g>
                )}

                {/* Central Tendon & Costal attachments */}
                <circle cx="368" cy={respiratoryPhase === "inhalation" ? 566 : 505} r="5" fill="#fef3c7" />
              </g>

              {/* 8. Anatomical Leader Lines & Callout Labels (Left & Center) */}
              <g id="respLabelsGroup">
                {/* 1. Nasal Cavity & Pharynx */}
                <line x1="365" y1="50" x2="110" y2="50" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 35)">
                  <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill={textAccent} fontSize="11" fontWeight="800" textAnchor="middle">
                    Nasal Passage
                  </text>
                </g>

                {/* 2. Epiglottis */}
                <line x1="360" y1="120" x2="110" y2="120" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 105)">
                  <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill="#facc15" fontSize="11" fontWeight="800" textAnchor="middle">
                    Epiglottis (Guards Glottis)
                  </text>
                </g>

                {/* 3. Larynx */}
                <line x1="350" y1="155" x2="110" y2="170" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 155)">
                  <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">
                    Larynx (Voice Box)
                  </text>
                </g>

                {/* 4. Trachea with C-Rings */}
                <line x1="352" y1="230" x2="110" y2="230" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 215)">
                  <rect width="130" height="42" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="18" fill={textAccent} fontSize="11" fontWeight="800" textAnchor="middle">
                    Trachea (Windpipe)
                  </text>
                  <text x="65" y="32" fill={textMuted} fontSize="9" textAnchor="middle">
                    C-shaped Hyaline Rings
                  </text>
                </g>

                {/* 5. Primary Bronchus & Carina */}
                <line x1="368" y1="298" x2="110" y2="298" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 283)">
                  <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">
                    Bronchi & Carina
                  </text>
                </g>

                {/* 6. Pleural Membranes */}
                <line x1="185" y1="385" x2="110" y2="385" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 365)">
                  <rect width="130" height="42" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="18" fill="#38bdf8" fontSize="10.5" fontWeight="800" textAnchor="middle">
                    Pleural Membranes
                  </text>
                  <text x="65" y="32" fill={textMuted} fontSize="8.5" textAnchor="middle">
                    Visceral + Parietal + Fluid
                  </text>
                </g>

                {/* 7. Cut Ends of Ribs */}
                <line x1="175" y1="470" x2="110" y2="470" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 455)">
                  <rect width="130" height="30" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill={textPrimary} fontSize="11" fontWeight="700" textAnchor="middle">
                    Cut Ends of Ribs
                  </text>
                </g>

                {/* 8. Diaphragm */}
                <line x1="200" y1="575" x2="110" y2="575" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 560)">
                  <rect width="130" height="34" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="22" fill="#f59e0b" fontSize="11" fontWeight="800" textAnchor="middle">
                    Muscular Diaphragm
                  </text>
                </g>

                {/* 9. Cardiac Notch Label (Right side of left lung) */}
                <line x1="395" y1="410" x2="300" y2="460" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(230, 465)">
                  <rect width="145" height="30" rx="6" fill={labelBg} stroke="#ef4444" strokeWidth="1.2" />
                  <text x="72" y="20" fill="#ef4444" fontSize="10.5" fontWeight="800" textAnchor="middle">
                    Cardiac Notch (Heart space)
                  </text>
                </g>
              </g>
            </g>

            {/* ================================================================= */}
            {/* RIGHT PANEL: DYNAMIC CARD DEPENDING ON SELECTED VIEW MODE         */}
            {/* ================================================================= */}
            <g transform="translate(710, 80)">

              {/* MODE 1: GROSS ANATOMY SUMMARY & CRITICAL VIVA POINTS */}
              {respiratoryView === "anatomy" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#respAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill={textAccent} fontSize="13" fontWeight="900" letterSpacing="0.4">
                      NCERT ANATOMICAL CHECKLIST (5M)
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      Standard labeling points expected in CBSE Class 10 Board Exams:
                    </text>
                  </g>

                  {/* Organ items with badges */}
                  {[
                    { title: "Nostrils & Nasal Passage", role: "Fine hairs & mucus line passage to filter dust & microbes; moistens/warms air.", color: "#0284c7" },
                    { title: "Pharynx & Larynx", role: "Pharynx connects to glottis. Epiglottis prevents food entry. Larynx contains vocal cords.", color: "#8b5cf6" },
                    { title: "Trachea (Windpipe)", role: "Supported by C-shaped cartilaginous rings ensuring airway does not collapse when air pressure falls.", color: "#0284c7" },
                    { title: "Bronchial Arborization", role: "Trachea divides into Right & Left primary bronchi, branching into bronchioles and alveolar ducts.", color: "#0ea5e9" },
                    { title: "Right vs Left Lung Lobes", role: "Right lung has 3 lobes (Horizontal & Oblique fissures). Left lung has 2 lobes + Cardiac Notch for heart.", color: "#e11d48" },
                    { title: "Double Pleural Membrane", role: "Visceral & parietal pleura filled with pleural fluid; reduces friction during thoracic expansion.", color: "#10b981" },
                    { title: "Alveoli (Respiratory Unit)", role: "Extensive surface area (~80 m²), single-cell thin squamous epithelium surrounded by capillaries.", color: "#f59e0b" },
                  ].map((item, idx) => (
                    <g key={"anat-point-" + idx} transform={`translate(20, ${70 + idx * 72})`}>
                      <circle cx="8" cy="8" r="5" fill={item.color} />
                      <text x="22" y="12" fill={textPrimary} fontSize="11" fontWeight="800">
                        {item.title}
                      </text>
                      <text x="22" y="28" fill={textMuted} fontSize="9.5" width="310">
                        {item.role.length > 55 ? item.role.slice(0, 52) + "..." : item.role}
                      </text>
                      <text x="22" y="42" fill={textMuted} fontSize="9" opacity="0.85">
                        {item.role.length > 55 ? item.role.slice(52) : ""}
                      </text>
                    </g>
                  ))}

                  {/* Golden Board Tip */}
                  <g transform="translate(18, 550)">
                    <rect width="324" height="42" rx="8" fill={isDark ? "rgba(2, 132, 199, 0.12)" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1" />
                    <text x="14" y="18" fill={textAccent} fontSize="10" fontWeight="800">
                      💡 CBSE EXAMINER TIP:
                    </text>
                    <text x="14" y="32" fill={textPrimary} fontSize="9.5">
                      Always draw Left Lung narrower with Cardiac Notch!
                    </text>
                  </g>
                </g>
              )}

              {/* MODE 2: BREATHING MECHANICS (INHALATION VS EXHALATION CONTRAST) */}
              {respiratoryView === "mechanics" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#respAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill="#f59e0b" fontSize="13" fontWeight="900" letterSpacing="0.4">
                      {respiratoryPhase === "inhalation" ? "MECHANISM OF INHALATION (ACTIVE)" : "MECHANISM OF EXHALATION (PASSIVE)"}
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      Step-by-step thoracic pressure-volume dynamics:
                    </text>
                  </g>

                  {/* 4 Step Process Cards */}
                  {respiratoryPhase === "inhalation" ? (
                    <g transform="translate(20, 55)">
                      {[
                        { step: "1", title: "Diaphragm Contraction", desc: "The muscular diaphragm contracts and FLATTENS downward towards abdominal cavity.", icon: "⬇️", color: "#10b981" },
                        { step: "2", title: "Rib Cage Elevation", desc: "External intercostal muscles contract, lifting ribs UPWARDS and OUTWARDS.", icon: "↗️", color: "#0284c7" },
                        { step: "3", title: "Thoracic Volume Increases", desc: "Chest cavity expands in both vertical and antero-posterior diameters, increasing volume.", icon: "📦", color: "#8b5cf6" },
                        { step: "4", title: "Pressure Drops ➔ Inrush of Air", desc: "Intra-pulmonary air pressure falls below atmospheric pressure; fresh atmospheric air rushes in.", icon: "💨", color: "#38bdf8" },
                      ].map((card, i) => (
                        <g key={"inh-step-" + i} transform={`translate(0, ${i * 105})`}>
                          <rect width="320" height="92" rx="10" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={card.color} strokeWidth="1.2" />
                          <circle cx="24" cy="24" r="14" fill={card.color} fillOpacity="0.15" />
                          <text x="24" y="28" fill={card.color} fontSize="11.5" fontWeight="900" textAnchor="middle">{card.step}</text>
                          <text x="48" y="24" fill={textPrimary} fontSize="11" fontWeight="800">{card.title}</text>
                          <text x="48" y="44" fill={textMuted} fontSize="9.5">{card.desc.slice(0, 42)}</text>
                          <text x="48" y="60" fill={textMuted} fontSize="9.5">{card.desc.slice(42)}</text>
                        </g>
                      ))}

                      {/* Summary Equation */}
                      <g transform="translate(0, 435)">
                        <rect width="320" height="85" rx="10" fill={isDark ? "rgba(16, 185, 129, 0.1)" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
                        <text x="16" y="24" fill="#10b981" fontSize="11" fontWeight="900">Boyle's Law Application:</text>
                        <text x="16" y="44" fill={textPrimary} fontSize="10" fontWeight="700">Volume (V) ↑  ➔  Pressure (P) ↓</text>
                        <text x="16" y="64" fill={textMuted} fontSize="9.5">Air moves from High pressure (atmosphere) to Low pressure (lungs).</text>
                      </g>
                    </g>
                  ) : (
                    <g transform="translate(20, 55)">
                      {[
                        { step: "1", title: "Diaphragm Relaxation", desc: "The muscular diaphragm relaxes, arching back UPWARD into its resting dome shape.", icon: "⬆️", color: "#f59e0b" },
                        { step: "2", title: "Rib Cage Depression", desc: "Intercostal muscles relax; ribs and sternum move DOWNWARDS and INWARDS.", icon: "↙️", color: "#ef4444" },
                        { step: "3", title: "Thoracic Volume Decreases", desc: "Elastic recoil of lungs compresses thoracic cavity, reducing internal volume.", icon: "📦", color: "#8b5cf6" },
                        { step: "4", title: "Pressure Rises ➔ Expulsion", desc: "Intra-pulmonary air pressure exceeds atmospheric pressure; air is pushed out of lungs.", icon: "💨", color: "#ea580c" },
                      ].map((card, i) => (
                        <g key={"exh-step-" + i} transform={`translate(0, ${i * 105})`}>
                          <rect width="320" height="92" rx="10" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={card.color} strokeWidth="1.2" />
                          <circle cx="24" cy="24" r="14" fill={card.color} fillOpacity="0.15" />
                          <text x="24" y="28" fill={card.color} fontSize="11.5" fontWeight="900" textAnchor="middle">{card.step}</text>
                          <text x="48" y="24" fill={textPrimary} fontSize="11" fontWeight="800">{card.title}</text>
                          <text x="48" y="44" fill={textMuted} fontSize="9.5">{card.desc.slice(0, 42)}</text>
                          <text x="48" y="60" fill={textMuted} fontSize="9.5">{card.desc.slice(42)}</text>
                        </g>
                      ))}

                      {/* Summary Equation */}
                      <g transform="translate(0, 435)">
                        <rect width="320" height="85" rx="10" fill={isDark ? "rgba(245, 158, 11, 0.1)" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
                        <text x="16" y="24" fill="#f59e0b" fontSize="11" fontWeight="900">Boyle's Law Application:</text>
                        <text x="16" y="44" fill={textPrimary} fontSize="10" fontWeight="700">Volume (V) ↓  ➔  Pressure (P) ↑</text>
                        <text x="16" y="64" fill={textMuted} fontSize="9.5">Air moves from High pressure (lungs) to Low pressure (atmosphere).</text>
                      </g>
                    </g>
                  )}
                </g>
              )}

              {/* MODE 3: HIGH-ZOOM ALVEOLAR SAC & CAPILLARY MESH (GAS EXCHANGE) */}
              {respiratoryView === "alveoli" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#respAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill="#0284c7" fontSize="13" fontWeight="900" letterSpacing="0.4">
                      ALVEOLAR SAC & CAPILLARY GAS EXCHANGE
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      Microscopic respiratory membrane (~0.2 μm thick)
                    </text>
                  </g>

                  {/* Microscopic Alveolar Sac Cluster Diagram */}
                  <g transform="translate(20, 50)">
                    <rect width="320" height="240" rx="12" fill={isDark ? "#08101e" : "#f8fafc"} stroke={labelBorder} strokeWidth="1.2" />

                    {/* Terminal Bronchiole Feeding Tube */}
                    <path d="M 160 10 L 160 45" stroke="#38bdf8" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 160 10 L 160 45" stroke={isDark ? "#0f172a" : "#e2e8f0"} strokeWidth="8" strokeLinecap="round" />
                    <text x="160" y="32" fill={textPrimary} fontSize="8.5" fontWeight="800" textAnchor="middle">Bronchiole</text>

                    {/* Cluster of 5 Interconnected Alveolar Spheres */}
                    <g filter="url(#respAtlasShadow)">
                      <circle cx="125" cy="85" r="30" fill="#fecdd3" stroke="#f43f5e" strokeWidth="2" />
                      <circle cx="195" cy="85" r="30" fill="#fda4af" stroke="#f43f5e" strokeWidth="2" />
                      <circle cx="105" cy="140" r="34" fill="#fca5a5" stroke="#f43f5e" strokeWidth="2" />
                      <circle cx="215" cy="140" r="34" fill="#fda4af" stroke="#f43f5e" strokeWidth="2" />
                      <circle cx="160" cy="155" r="38" fill="#fff1f2" stroke="#e11d48" strokeWidth="2.5" />
                    </g>

                    {/* Intertwining Capillary Mesh: Blue deoxygenated in, Red oxygenated out */}
                    {/* Pulmonary Arteriole (Blue) entering from left */}
                    <path
                      d="M 30 75 Q 80 50 115 80 Q 140 120 100 150 Q 70 170 40 210"
                      fill="none"
                      stroke="url(#capDeoxyGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle cx="30" cy="75" r="4" fill="#0284c7" />
                    <text x="32" y="65" fill="#0284c7" fontSize="8.5" fontWeight="800">Pulmonary Arteriole (Deox)</text>

                    {/* Pulmonary Venule (Red) leaving to right */}
                    <path
                      d="M 160 155 Q 210 130 235 150 Q 260 170 290 190"
                      fill="none"
                      stroke="url(#capOxyGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle cx="290" cy="190" r="4" fill="#ef4444" />
                    <text x="290" y="210" fill="#ef4444" fontSize="8.5" fontWeight="800" textAnchor="end">Pulmonary Venule (Ox)</text>

                    {/* Diffusion Vectors inside central alveolus */}
                    {/* O2 diffusion into blood */}
                    <path d="M 155 145 L 135 160" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrRespRed)" />
                    <text x="135" y="140" fill="#ef4444" fontSize="9" fontWeight="900">O₂ ➔ Blood</text>

                    {/* CO2 diffusion into alveolus */}
                    <path d="M 180 165 L 165 145" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrRespCyan)" />
                    <text x="185" y="140" fill="#0284c7" fontSize="9" fontWeight="900">CO₂ ➔ Air</text>
                  </g>

                  {/* CBSE 5-Mark Scoring Rubric Breakdown */}
                  <g transform="translate(20, 305)">
                    <text x="0" y="14" fill="#10b981" fontSize="11.5" fontWeight="900">
                      CBSE 5-MARK BOARD MARKING SCHEME:
                    </text>

                    {[
                      { marks: "1.5 M", rule: "Neat diagram: Trachea rings, asymmetric bronchi, 2 lungs + cardiac notch, and diaphragm." },
                      { marks: "1.0 M", rule: "Role of C-shaped cartilaginous rings: Prevents collapse during low pressure." },
                      { marks: "1.5 M", rule: "How alveoli maximize gas exchange: ~80 m² surface area, thin 1-cell wall, rich capillary mesh." },
                      { marks: "1.0 M", rule: "Role of Respiratory Pigment: Hemoglobin has high affinity for O₂ (diffusion alone takes 3 years to reach feet!)." },
                    ].map((rub, idx) => (
                      <g key={"rubric-row-" + idx} transform={`translate(0, ${26 + idx * 56})`}>
                        <rect width="52" height="22" rx="5" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" />
                        <text x="26" y="15" fill="#10b981" fontSize="10" fontWeight="900" textAnchor="middle">{rub.marks}</text>
                        <text x="62" y="15" fill={textPrimary} fontSize="9.5" fontWeight="700">{rub.rule.slice(0, 42)}</text>
                        <text x="62" y="30" fill={textMuted} fontSize="9">{rub.rule.slice(42)}</text>
                      </g>
                    ))}
                  </g>

                  {/* Surface Area Callout Box */}
                  <g transform="translate(20, 545)">
                    <rect width="320" height="46" rx="8" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1" />
                    <text x="14" y="18" fill="#f59e0b" fontSize="10.5" fontWeight="900">
                      🎾 TENNIS COURT SURFACE AREA:
                    </text>
                    <text x="14" y="33" fill={textPrimary} fontSize="9.5">
                      Spread out, human alveoli cover ~80 m² (equivalent to a singles tennis court)!
                    </text>
                  </g>
                </g>
              )}
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
          <svg viewBox="0 0 1100 720" className="w-full h-auto select-none font-sans">
            <defs>
              <radialGradient id="digAtlasBg" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor={isDark ? "#160e0a" : "#fffbeb"} />
                <stop offset="60%" stopColor={isDark ? "#0c0806" : "#fef3c7"} />
                <stop offset="100%" stopColor={isDark ? "#050302" : "#fde68a"} />
              </radialGradient>

              {/* Liver gradient - deep anatomical red-brown with vascular sheen */}
              <linearGradient id="liverAtlasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="30%" stopColor="#991b1b" />
                <stop offset="70%" stopColor="#7f1d1d" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>

              {/* Stomach gradient - warm golden muscular tone with gastric shading */}
              <linearGradient id="stomachAtlasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="30%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>

              {/* Pancreas gradient - glandular lobulated warm tone */}
              <linearGradient id="pancreasAtlasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>

              {/* Gallbladder gradient - deep bile green */}
              <linearGradient id="gallAtlasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>

              {/* Small intestine mucosa gradient */}
              <linearGradient id="smallIntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>

              {/* Large intestine haustra gradient */}
              <linearGradient id="largeIntGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="40%" stopColor="#b45309" />
                <stop offset="80%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>

              {/* 3D Depth Shadow */}
              <filter id="digAtlasShadow" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity={isDark ? "0.65" : "0.25"} />
              </filter>

              {/* Markers */}
              <marker id="arrBileGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#16a34a" />
              </marker>
              <marker id="arrStomachYellow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#f59e0b" />
              </marker>
              <marker id="arrEnzymeOrange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 1 L 7 4 L 0 7 z" fill="#ea580c" />
              </marker>
            </defs>

            {/* Background Canvas */}
            <rect width="1100" height="720" rx="24" fill="url(#digAtlasBg)" stroke={labelBorder} strokeWidth="1.5" />

            {/* Precision Grid */}
            {[...Array(14)].map((_, i) => (
              <line key={"dvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="720" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(10)].map((_, i) => (
              <line key={"dhg" + i} x1="0" y1={75 * i} x2="1100" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* ================================================================= */}
            {/* TOP HEADER & INTERACTIVE MODE TABS                                */}
            {/* ================================================================= */}
            <g transform="translate(30, 20)">
              {/* Title Badge */}
              <rect width="470" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <circle cx="28" cy="23" r="12" fill="#f59e0b" fillOpacity="0.15" />
              <text x="28" y="27" fill="#f59e0b" fontSize="14" fontWeight="900" textAnchor="middle">🍽️</text>
              <text x="50" y="28" fill={textPrimary} fontSize="14" fontWeight="800" letterSpacing="0.3">
                HUMAN ALIMENTARY CANAL & GLANDS
              </text>
              <rect x="385" y="11" width="72" height="24" rx="6" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1" />
              <text x="421" y="27" fill="#f59e0b" fontSize="10.5" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* View Mode Tabs */}
            <g transform="translate(520, 20)">
              <rect width="550" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />

              {/* Tab 1: Anatomy */}
              <g
                className="cursor-pointer"
                onClick={() => setDigestiveView("anatomy")}
                transform="translate(8, 7)"
              >
                <rect
                  width="160"
                  height="32"
                  rx="8"
                  fill={digestiveView === "anatomy" ? "#f59e0b" : "transparent"}
                  stroke={digestiveView === "anatomy" ? "#fbbf24" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="80"
                  y="20"
                  fill={digestiveView === "anatomy" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  1. Gross Anatomy
                </text>
              </g>

              {/* Tab 2: Enzyme Flow */}
              <g
                className="cursor-pointer"
                onClick={() => setDigestiveView("enzymes")}
                transform="translate(178, 7)"
              >
                <rect
                  width="180"
                  height="32"
                  rx="8"
                  fill={digestiveView === "enzymes" ? "#f59e0b" : "transparent"}
                  stroke={digestiveView === "enzymes" ? "#fbbf24" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="90"
                  y="20"
                  fill={digestiveView === "enzymes" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  2. Enzymes & Secretions
                </text>
              </g>

              {/* Tab 3: CBSE 5M Rubric & Villi */}
              <g
                className="cursor-pointer"
                onClick={() => setDigestiveView("rubric")}
                transform="translate(368, 7)"
              >
                <rect
                  width="172"
                  height="32"
                  rx="8"
                  fill={digestiveView === "rubric" ? "#f59e0b" : "transparent"}
                  stroke={digestiveView === "rubric" ? "#fbbf24" : "transparent"}
                  strokeWidth="1"
                />
                <text
                  x="86"
                  y="20"
                  fill={digestiveView === "rubric" ? "#ffffff" : textMuted}
                  fontSize="11.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  3. CBSE 5M Rubric & Villi
                </text>
              </g>
            </g>

            {/* ================================================================= */}
            {/* MAIN DIGESTIVE TRACT VECTOR ARTWORK                               */}
            {/* ================================================================= */}
            <g transform="translate(40, 50)">

              {/* 1. Profile Head & Oral Cavity Silhouette */}
              <g id="headProfileGroup">
                {/* Facial Silhouette Line */}
                <path
                  d="M 320 20 
                     C 350 20 375 25 385 45 
                     C 395 60 380 75 395 90 
                     C 405 100 415 105 400 120 
                     C 388 130 380 140 378 155 
                     L 378 270"
                  fill="none"
                  stroke={isDark ? "rgba(148, 163, 184, 0.25)" : "rgba(100, 116, 139, 0.25)"}
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Oral / Buccal Cavity Hollow */}
                <path
                  d="M 335 80 C 375 80 385 95 380 115 C 370 125 350 128 340 125 Z"
                  fill={isDark ? "rgba(244, 63, 94, 0.15)" : "rgba(244, 63, 94, 0.1)"}
                  stroke="#fb7185"
                  strokeWidth="2"
                />

                {/* Teeth: Upper & Lower arches */}
                <path d="M 370 95 L 382 95" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                <path d="M 368 115 L 380 115" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />

                {/* Muscular Tongue with taste papillae */}
                <path
                  d="M 345 120 Q 365 118 375 110"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* 3 Pairs of Salivary Glands with realistic anatomical positions */}
                {/* 1. Parotid Gland (Near Ear / Angle of Jaw) */}
                <g filter="url(#digAtlasShadow)">
                  <ellipse cx="328" cy="92" rx="11" ry="8" fill="#facc15" stroke="#d97706" strokeWidth="1.8" />
                  <path d="M 338 92 L 368 94" stroke="#d97706" strokeWidth="1.5" strokeDasharray="2,2" />
                </g>

                {/* 2. Submandibular Gland (Below lower jaw) */}
                <ellipse cx="352" cy="135" rx="9" ry="7" fill="#facc15" stroke="#d97706" strokeWidth="1.8" />

                {/* 3. Sublingual Gland (Under tongue) */}
                <ellipse cx="366" cy="123" rx="6" ry="5" fill="#facc15" stroke="#d97706" strokeWidth="1.5" />

                {/* Pharynx & Epiglottis */}
                <path d="M 365 125 L 365 155" stroke="#f472b6" strokeWidth="14" strokeLinecap="round" />
                <path d="M 358 142 C 352 135 354 130 362 130 C 370 130 370 138 365 146" fill="#facc15" stroke="#ca8a04" strokeWidth="1.8" />
              </g>

              {/* 2. OESOPHAGUS (Food pipe) with Peristaltic Wave & Bolus */}
              <g id="oesophagusGroup">
                {/* Muscular Oesophagus Tube */}
                <path
                  d="M 365 155 L 365 275"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 365 155 L 365 275"
                  fill="none"
                  stroke={isDark ? "#1e1b4b" : "#fce7f3"}
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* Peristaltic Muscular Contraction Rings */}
                <path d="M 358 185 Q 365 192 372 185" stroke="#be123c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 356 220 Q 365 228 374 220" stroke="#be123c" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Food Bolus moving downward */}
                <ellipse cx="365" cy="205" rx="5.5" ry="7.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                {/* Peristalsis downward motion arrows */}
                <path d="M 365 195 L 365 215" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrEnzymeOrange)" />
              </g>

              {/* 3. DIAPHRAGM MUSCULAR PARTITION */}
              <g id="diaphragmLine">
                <path
                  d="M 180 270 Q 365 255 560 270"
                  fill="none"
                  stroke={isDark ? "#475569" : "#94a3b8"}
                  strokeWidth="3"
                  strokeDasharray="6,4"
                />
                <text x="185" y="262" fill={textMuted} fontSize="9.5" fontWeight="800">
                  Diaphragm (Pierced by Oesophagus)
                </text>
              </g>

              {/* 4. LIVER (HEPAR) — Massive Bilobed Wedge (Right & Left Lobes) */}
              <g
                id="liverGroup"
                filter="url(#digAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("Liver & Biliary Tree")}
              >
                {/* Right Lobe (Massive, occupying right hypochondrium) */}
                <path
                  d="M 335 272 
                     C 240 272 210 320 220 375 
                     C 230 425 320 420 360 380 
                     C 375 350 365 275 335 272 Z"
                  fill="url(#liverAtlasGrad)"
                  stroke="#991b1b"
                  strokeWidth="3"
                />

                {/* Left Lobe (Smaller, overlapping the anterior stomach surface) */}
                <path
                  d="M 335 272 
                     C 365 275 400 282 410 310 
                     C 405 335 375 350 355 350 
                     C 345 320 340 290 335 272 Z"
                  fill="url(#liverAtlasGrad)"
                  stroke="#991b1b"
                  strokeWidth="2.5"
                  opacity="0.95"
                />

                {/* Falciform Ligament dividing Right & Left Lobes */}
                <path
                  d="M 335 272 Q 345 315 352 355"
                  fill="none"
                  stroke="#fecaca"
                  strokeWidth="2"
                  strokeDasharray="4,2"
                  opacity="0.8"
                />

                <text x="275" y="340" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" opacity="0.95">
                  LIVER (Right Lobe)
                </text>
                <text x="275" y="355" fill="#fecaca" fontSize="8.5" fontWeight="700" textAnchor="middle">
                  Largest Gland (~1.5 kg)
                </text>
              </g>

              {/* 5. GALLBLADDER & BILIARY DUCT TREE */}
              <g id="gallbladderGroup" filter="url(#digAtlasShadow)">
                {/* Gallbladder Pear-shaped Sac nestled under liver */}
                <path
                  d="M 320 370 
                     C 310 385 310 410 325 418 
                     C 340 420 348 400 340 380 Z"
                  fill="url(#gallAtlasGrad)"
                  stroke="#15803d"
                  strokeWidth="2"
                />
                <circle cx="328" cy="395" r="3" fill="#86efac" opacity="0.8" />

                {/* Complete Biliary Tree: Right/Left Hepatic + Cystic + Common Bile Duct */}
                {/* Right & Left Hepatic Ducts */}
                <path d="M 295 365 Q 320 370 335 375" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 360 360 Q 345 370 335 375" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Cystic Duct from Gallbladder */}
                <path d="M 330 375 Q 338 385 338 395" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Common Bile Duct descending behind duodenum */}
                <path
                  d="M 335 375 Q 345 400 365 425"
                  stroke="#16a34a"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  markerEnd="url(#arrBileGreen)"
                />
              </g>

              {/* 6. J-SHAPED STOMACH (Cardia, Fundus, Body, Pylorus, Rugae) */}
              <g
                id="stomachGroup"
                filter="url(#digAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("J-Shaped Stomach")}
              >
                {/* Main J-Shaped Stomach Body */}
                <path
                  d="M 365 275 
                     C 400 270 455 285 470 330 
                     C 485 375 480 425 435 440 
                     C 390 450 355 420 355 390 
                     C 355 370 375 350 380 320 
                     C 382 295 375 280 365 275 Z"
                  fill="url(#stomachAtlasGrad)"
                  stroke="#b45309"
                  strokeWidth="3.5"
                />

                {/* Gastric Fundus dome highlight */}
                <path
                  d="M 380 278 C 420 275 450 288 460 315"
                  fill="none"
                  stroke="#fef08a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Internal Gastric Rugae (Mucosal Folds for Expansion) */}
                <g stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.75">
                  <path d="M 430 320 Q 445 350 425 380" strokeDasharray="5,2" />
                  <path d="M 450 340 Q 460 370 445 400" strokeDasharray="5,2" />
                  <path d="M 410 350 Q 425 385 405 415" strokeDasharray="5,2" />
                </g>

                {/* Cardiac Sphincter (at gastro-oesophageal junction) */}
                <circle cx="366" cy="278" r="4.5" fill="#f43f5e" stroke="#be123c" strokeWidth="1.2" />

                {/* Pyloric Sphincter Valve (at gastroduodenal junction) */}
                <circle cx="355" cy="390" r="5" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />

                {/* Anatomical Regions Text */}
                <text x="430" y="305" fill="#ffffff" fontSize="9.5" fontWeight="900" textAnchor="middle" opacity="0.95">
                  Fundus
                </text>
                <text x="425" y="360" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" opacity="0.95">
                  Stomach (Body)
                </text>
                <text x="350" y="380" fill="#78350f" fontSize="8.5" fontWeight="900" textAnchor="end">
                  Pyloric Sphincter
                </text>
              </g>

              {/* 7. C-SHAPED DUODENUM LOOP WRAPPING PANCREAS */}
              <g id="duodenumGroup">
                {/* Duodenum C-Loop Tube */}
                <path
                  d="M 355 390 
                     C 320 390 315 450 350 455 
                     L 410 455"
                  fill="none"
                  stroke="#fed7aa"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M 355 390 
                     C 320 390 315 450 350 455 
                     L 410 455"
                  fill="none"
                  stroke={isDark ? "#1c1917" : "#ffedd5"}
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </g>

              {/* 8. PANCREAS (Lobulated Leaf Gland nestled in Duodenal Loop) */}
              <g
                id="pancreasGroup"
                filter="url(#digAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("Pancreas & Ducts")}
              >
                {/* Pancreatic Head, Body & Tail */}
                <path
                  d="M 345 420 
                     C 365 410 420 415 465 425 
                     C 475 428 470 440 450 442 
                     C 400 445 365 440 345 435 Z"
                  fill="url(#pancreasAtlasGrad)"
                  stroke="#ea580c"
                  strokeWidth="2.5"
                />

                {/* Lobulated texture bumps */}
                {[365, 390, 415, 440].map((xP, i) => (
                  <circle key={"panc-lob-" + i} cx={xP} cy={428 + (i % 2) * 5} r="3" fill="#fed7aa" opacity="0.7" />
                ))}

                {/* Main Pancreatic Duct (Duct of Wirsung) */}
                <path
                  d="M 460 430 L 345 425"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="3,2"
                  fill="none"
                />

                {/* Hepato-pancreatic Ampulla (Ampulla of Vater) entering Duodenum */}
                <circle cx="345" cy="425" r="4" fill="#16a34a" stroke="#ffffff" strokeWidth="1.2" />
                <text x="420" y="437" fill="#7c2d12" fontSize="9" fontWeight="900" textAnchor="middle">
                  PANCREAS
                </text>
              </g>

              {/* 9. LARGE INTESTINE (COLON) with Haustra & Taenia Coli */}
              <g id="colonGroup" filter="url(#digAtlasShadow)">
                {/* Haustrated Colon Path: Caecum ➔ Ascending ➔ Transverse ➔ Descending ➔ Sigmoid */}
                <path
                  d="M 270 560 
                     L 270 440 
                     C 270 420 290 415 320 415 
                     L 470 415 
                     C 500 415 520 430 520 450 
                     L 520 560 
                     C 520 595 480 605 450 605 
                     L 395 605 
                     L 395 640"
                  fill="none"
                  stroke="url(#largeIntGrad)"
                  strokeWidth="26"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Taenia Coli (Central longitudinal muscular ribbon band) */}
                <path
                  d="M 270 560 
                     L 270 440 
                     C 270 420 290 415 320 415 
                     L 470 415 
                     C 500 415 520 430 520 450 
                     L 520 560 
                     C 520 595 480 605 450 605 
                     L 395 605"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="2.5"
                  strokeDasharray="6,3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />

                {/* Haustra indentations (Sacculation notches) */}
                {[460, 490, 520].map((yVal, i) => (
                  <line key={"h-asc-" + i} x1="257" y1={yVal} x2="283" y2={yVal} stroke="#451a03" strokeWidth="2" />
                ))}
                {[340, 380, 420, 450].map((xVal, i) => (
                  <line key={"h-trans-" + i} x1={xVal} y1="402" x2={xVal} y2="428" stroke="#451a03" strokeWidth="2" />
                ))}
                {[460, 490, 520].map((yVal, i) => (
                  <line key={"h-desc-" + i} x1="507" y1={yVal} x2="533" y2={yVal} stroke="#451a03" strokeWidth="2" />
                ))}

                {/* Caecum Sac & Ileocaecal Junction */}
                <circle cx="270" cy="565" r="15" fill="#92400e" stroke="#451a03" strokeWidth="2" />

                {/* VERMIFORM APPENDIX (Vestigial worm-like tube) */}
                <path
                  d="M 270 578 
                     C 260 595 250 615 262 628 
                     C 268 632 275 625 272 618"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
              </g>

              {/* 10. SMALL INTESTINE (JEJUNUM & ILEUM: ~6.5m Dense Convolutions) */}
              <g
                id="smallIntestineGroup"
                filter="url(#digAtlasShadow)"
                className="cursor-pointer transition-transform hover:opacity-95"
                onClick={() => setHighlightPart("Small Intestine (Ileum & Villi)")}
              >
                {/* Multiple overlapping coiled intestinal loops */}
                {/* Deep background shadow loops */}
                <path
                  d="M 330 465 
                     Q 360 485 390 465 
                     Q 430 475 460 460 
                     Q 475 490 440 510 
                     Q 370 500 340 515 
                     Q 320 540 370 545 
                     Q 440 540 465 525 
                     Q 470 560 420 575 
                     Q 350 575 320 560 
                     L 285 565"
                  fill="none"
                  stroke="url(#smallIntGrad)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Foreground highlights and plicae folds */}
                <path
                  d="M 330 465 
                     Q 360 485 390 465 
                     Q 430 475 460 460 
                     Q 475 490 440 510 
                     Q 370 500 340 515 
                     Q 320 540 370 545 
                     Q 440 540 465 525 
                     Q 470 560 420 575 
                     Q 350 575 320 560 
                     L 285 565"
                  fill="none"
                  stroke="#ffedd5"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />

                {/* Coiled loop center label */}
                <text x="395" y="535" fill="#7c2d12" fontSize="10.5" fontWeight="900" textAnchor="middle">
                  Small Intestine
                </text>
                <text x="395" y="550" fill="#9a3412" fontSize="8.5" fontWeight="700" textAnchor="middle">
                  (Site of Complete Digestion)
                </text>
              </g>

              {/* 11. RECTUM & ANAL SPHINCTER */}
              <g id="rectumGroup">
                {/* Rectum Reservoir */}
                <rect x="382" y="605" width="26" height="35" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                {/* Internal and External Anal Sphincters */}
                <ellipse cx="395" cy="642" rx="10" ry="5" fill="#451a03" />
                <circle cx="395" cy="642" r="3.5" fill="#f43f5e" />
              </g>

              {/* 12. Direct Anatomical Leader Lines & Labels (Left Side) */}
              <g id="digestiveLabelsGroup">
                {/* Salivary Glands */}
                <line x1="328" y1="92" x2="110" y2="92" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 77)">
                  <rect width="130" height="32" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="20" fill={textAccent} fontSize="11" fontWeight="800" textAnchor="middle">
                    Salivary Glands
                  </text>
                </g>

                {/* Oesophagus & Peristalsis */}
                <line x1="365" y1="205" x2="110" y2="205" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 185)">
                  <rect width="130" height="42" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="18" fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">
                    Oesophagus
                  </text>
                  <text x="65" y="32" fill={textMuted} fontSize="9" textAnchor="middle">
                    Peristaltic Wave Bolus
                  </text>
                </g>

                {/* Liver */}
                <line x1="260" y1="320" x2="110" y2="320" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 305)">
                  <rect width="130" height="32" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="21" fill="#ef4444" fontSize="11" fontWeight="800" textAnchor="middle">
                    Liver (Bile Production)
                  </text>
                </g>

                {/* Gallbladder */}
                <line x1="325" y1="400" x2="110" y2="400" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 385)">
                  <rect width="130" height="32" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="21" fill="#16a34a" fontSize="11" fontWeight="800" textAnchor="middle">
                    Gallbladder (Stores Bile)
                  </text>
                </g>

                {/* Caecum & Appendix */}
                <line x1="260" y1="615" x2="110" y2="615" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(10, 600)">
                  <rect width="130" height="42" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="65" y="18" fill="#d97706" fontSize="11" fontWeight="800" textAnchor="middle">
                    Vermiform Appendix
                  </text>
                  <text x="65" y="32" fill={textMuted} fontSize="8.5" textAnchor="middle">
                    Vestigial Caecal Organ
                  </text>
                </g>

                {/* Stomach (Right-Center Callout) */}
                <line x1="465" y1="350" x2="560" y2="330" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(565, 315)">
                  <rect width="135" height="32" rx="6" fill={labelBg} stroke="#f59e0b" strokeWidth="1.2" />
                  <text x="67" y="21" fill="#f59e0b" fontSize="11" fontWeight="800" textAnchor="middle">
                    Stomach (HCl & Pepsin)
                  </text>
                </g>

                {/* Pancreas (Right-Center Callout) */}
                <line x1="460" y1="430" x2="560" y2="415" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(565, 400)">
                  <rect width="135" height="32" rx="6" fill={labelBg} stroke="#ea580c" strokeWidth="1.2" />
                  <text x="67" y="21" fill="#ea580c" fontSize="11" fontWeight="800" textAnchor="middle">
                    Pancreas (Trypsin/Lipase)
                  </text>
                </g>

                {/* Colon (Right-Center Callout) */}
                <line x1="520" y1="490" x2="560" y2="490" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(565, 475)">
                  <rect width="135" height="32" rx="6" fill={labelBg} stroke="#b45309" strokeWidth="1.2" />
                  <text x="67" y="21" fill="#b45309" fontSize="11" fontWeight="800" textAnchor="middle">
                    Colon (Water Absorption)
                  </text>
                </g>

                {/* Anus Sphincter (Bottom Callout) */}
                <line x1="408" y1="640" x2="560" y2="640" stroke={textMuted} strokeWidth="1.5" strokeDasharray="3,3" />
                <g transform="translate(565, 625)">
                  <rect width="135" height="32" rx="6" fill={labelBg} stroke={labelBorder} strokeWidth="1.2" />
                  <text x="67" y="21" fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">
                    Anus (Sphincter Egestion)
                  </text>
                </g>
              </g>
            </g>

            {/* ================================================================= */}
            {/* RIGHT PANEL: DYNAMIC CARD DEPENDING ON SELECTED VIEW MODE         */}
            {/* ================================================================= */}
            <g transform="translate(710, 80)">

              {/* MODE 1: GROSS ANATOMY CHECKLIST & ORGANS SUMMARY */}
              {digestiveView === "anatomy" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#digAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill="#f59e0b" fontSize="13" fontWeight="900" letterSpacing="0.4">
                      NCERT ALIMENTARY CANAL (FIG 5.6)
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      Standard CBSE Board anatomical organs & structures:
                    </text>
                  </g>

                  {/* Organ list */}
                  {[
                    { title: "1. Mouth & Buccal Cavity", role: "Teeth chew food. Tongue mixes with saliva. 3 pairs of salivary glands secrete Ptyalin.", color: "#0284c7" },
                    { title: "2. Oesophagus (Food Pipe)", role: "No digestive enzyme secreted! Rhythmic muscular contraction (Peristalsis) pushes bolus.", color: "#fb7185" },
                    { title: "3. J-Shaped Stomach", role: "Stores food for 4-5 hours. Gastric glands secrete Dilute HCl, Pepsinogen, and protective Mucus.", color: "#f59e0b" },
                    { title: "4. Liver & Gallbladder", role: "Largest gland. Secretes Bile into Gallbladder. Bile emulsifies fats and makes medium alkaline.", color: "#16a34a" },
                    { title: "5. Pancreas (Dual Gland)", role: "Situated in C-duodenum loop. Secretes Pancreatic Amylase, Trypsin, and Lipase.", color: "#ea580c" },
                    { title: "6. Small Intestine (Ileum)", role: "Longest part (~6.5m). Complete digestion of carbs, proteins, fats. Covered with microvilli.", color: "#f97316" },
                    { title: "7. Large Intestine & Anus", role: "Absorbs water and salts. Waste stored in Rectum and egested via Anal Sphincter.", color: "#78350f" },
                  ].map((item, idx) => (
                    <g key={"dig-org-" + idx} transform={`translate(20, ${70 + idx * 72})`}>
                      <circle cx="8" cy="8" r="5" fill={item.color} />
                      <text x="22" y="12" fill={textPrimary} fontSize="11" fontWeight="800">
                        {item.title}
                      </text>
                      <text x="22" y="28" fill={textMuted} fontSize="9.5" width="310">
                        {item.role.length > 52 ? item.role.slice(0, 50) + "..." : item.role}
                      </text>
                      <text x="22" y="42" fill={textMuted} fontSize="9" opacity="0.85">
                        {item.role.length > 52 ? item.role.slice(50) : ""}
                      </text>
                    </g>
                  ))}

                  {/* Golden Board Tip */}
                  <g transform="translate(18, 550)">
                    <rect width="324" height="42" rx="8" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1" />
                    <text x="14" y="18" fill="#f59e0b" fontSize="10" fontWeight="800">
                      💡 BOARD EXAM ESSENTIAL:
                    </text>
                    <text x="14" y="32" fill={textPrimary} fontSize="9.5">
                      Always draw Liver with Gallbladder on the anatomical RIGHT side!
                    </text>
                  </g>
                </g>
              )}

              {/* MODE 2: ENZYMES & COMPLETE BIOCHEMICAL FLOW */}
              {digestiveView === "enzymes" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#digAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill="#ea580c" fontSize="13" fontWeight="900" letterSpacing="0.4">
                      BIOCHEMICAL DIGESTION WORKFLOW
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      Enzymatic breakdown of Carbohydrates, Proteins & Fats:
                    </text>
                  </g>

                  {/* 5 Reaction Stage Cards */}
                  <g transform="translate(20, 55)">
                    {[
                      {
                        organ: "BUCCAL CAVITY (pH ~6.8)",
                        enzyme: "Salivary Amylase (Ptyalin)",
                        equation: "Starch ➔ Maltose (Disaccharide)",
                        color: "#0284c7",
                      },
                      {
                        organ: "STOMACH (pH ~1.5 - 2.0)",
                        enzyme: "Pepsin (activated by HCl)",
                        equation: "Proteins ➔ Peptones + Proteoses",
                        color: "#ef4444",
                      },
                      {
                        organ: "LIVER BILE (No Enzymes!)",
                        enzyme: "Bile Salts (Sodium taurocholate)",
                        equation: "Large Fat Globules ➔ Emulsified Micelles",
                        color: "#16a34a",
                      },
                      {
                        organ: "PANCREAS (pH ~7.8 - 8.4)",
                        enzyme: "Trypsin, Amylase, Lipase",
                        equation: "Proteins➔Peptides, Starch➔Sugar, Fat➔FA",
                        color: "#ea580c",
                      },
                      {
                        organ: "SMALL INTESTINE (Succus Entericus)",
                        enzyme: "Intestinal Peptidases & Lipases",
                        equation: "Carbs➔Glucose, Protein➔AA, Fat➔FA+Glycerol",
                        color: "#f59e0b",
                      },
                    ].map((card, i) => (
                      <g key={"enz-card-" + i} transform={`translate(0, ${i * 96})`}>
                        <rect width="320" height="86" rx="10" fill={isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)"} stroke={card.color} strokeWidth="1.2" />
                        <text x="16" y="20" fill={card.color} fontSize="10" fontWeight="900">{card.organ}</text>
                        <text x="16" y="38" fill={textPrimary} fontSize="11" fontWeight="800">{card.enzyme}</text>
                        <rect x="16" y="48" width="288" height="26" rx="5" fill={isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.6)"} />
                        <text x="24" y="65" fill={card.color} fontSize="9.5" fontWeight="800">{card.equation}</text>
                      </g>
                    ))}

                    {/* Summary Note */}
                    <g transform="translate(0, 485)">
                      <rect width="320" height="58" rx="8" fill={isDark ? "rgba(16, 185, 129, 0.1)" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
                      <text x="14" y="20" fill="#10b981" fontSize="10.5" fontWeight="900">★ COMPLETE END-PRODUCTS OF DIGESTION:</text>
                      <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Carbohydrates ➔ Glucose | Proteins ➔ Amino Acids</text>
                      <text x="14" y="50" fill={textPrimary} fontSize="9.5">• Fats ➔ Fatty Acids + Glycerol (absorbed by lacteals)</text>
                    </g>
                  </g>
                </g>
              )}

              {/* MODE 3: CBSE 5M RUBRIC & INTESTINAL VILLI STRUCTURE */}
              {digestiveView === "rubric" && (
                <g>
                  <rect width="360" height="610" rx="16" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" filter="url(#digAtlasShadow)" />

                  <g transform="translate(20, 24)">
                    <text x="0" y="0" fill="#10b981" fontSize="13" fontWeight="900" letterSpacing="0.4">
                      CBSE 5M RUBRIC & VILLI ADAPTATIONS
                    </text>
                    <text x="0" y="18" fill={textMuted} fontSize="10">
                      High-magnification intestinal absorption unit:
                    </text>
                  </g>

                  {/* Microscopic Villus Graphic */}
                  <g transform="translate(20, 50)">
                    <rect width="320" height="235" rx="12" fill={isDark ? "#120a06" : "#fffbeb"} stroke={labelBorder} strokeWidth="1.2" />

                    {/* Intestinal Wall Base */}
                    <path d="M 20 200 L 300 200" stroke="#b45309" strokeWidth="8" strokeLinecap="round" />

                    {/* 3 Finger-like Villi Projections */}
                    <path
                      d="M 60 200 
                         C 60 80 100 80 100 200 
                         C 100 80 140 80 140 200 
                         C 140 80 180 80 180 200"
                      fill="#fed7aa"
                      stroke="#f97316"
                      strokeWidth="3.5"
                    />

                    {/* Single Central Villus Zoomed Anatomy (Center Villus) */}
                    {/* Central Lacteal (Lymphatic vessel absorbing fatty acids) */}
                    <path d="M 120 195 L 120 110" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
                    <text x="120" y="105" fill="#ca8a04" fontSize="8" fontWeight="800" textAnchor="middle">Lacteal</text>

                    {/* Capillary Loop (Red arterial, Blue venous) */}
                    <path d="M 112 195 L 112 120 Q 120 115 128 120 L 128 195" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                    <path d="M 128 195 L 128 135" stroke="#0284c7" strokeWidth="2.5" />

                    {/* Microvilli Brush Border Hairlines */}
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={"brush-" + i}
                        x1={102 + i * 3}
                        y1="82"
                        x2={102 + i * 3}
                        y2="76"
                        stroke="#ea580c"
                        strokeWidth="1.5"
                      />
                    ))}
                    <text x="120" y="70" fill="#ea580c" fontSize="8" fontWeight="800" textAnchor="middle">Microvilli Brush Border</text>

                    {/* Absorption Labels */}
                    <text x="200" y="130" fill="#0284c7" fontSize="9" fontWeight="800">➔ Blood Capillaries:</text>
                    <text x="210" y="145" fill={textPrimary} fontSize="8.5">• Glucose & Amino Acids</text>
                    <text x="200" y="170" fill="#ca8a04" fontSize="9" fontWeight="800">➔ Central Lacteal:</text>
                    <text x="210" y="185" fill={textPrimary} fontSize="8.5">• Fatty Acids & Glycerol</text>
                  </g>

                  {/* CBSE 5-Mark Marking Scheme Breakdown */}
                  <g transform="translate(20, 295)">
                    <text x="0" y="14" fill="#10b981" fontSize="11" fontWeight="900">
                      CBSE OFFICIAL 5-MARK MARKING SCHEME:
                    </text>

                    {[
                      { marks: "2.0 M", rule: "Neat, labeled diagram showing Oesophagus, Stomach, Liver, Gallbladder, Pancreas, Small & Large Intestine." },
                      { marks: "1.0 M", rule: "Functions of Gastric Secretions: Role of HCl (kill germs, acidify), Pepsin (protein digestion), Mucus (wall protection)." },
                      { marks: "1.0 M", rule: "Role of Bile: Emulsification of fats (no enzymes!) & neutralizing acidic chyme." },
                      { marks: "1.0 M", rule: "Villi Adaptations: Massive surface area, thin 1-cell epithelium, rich capillary network & lacteals." },
                    ].map((rub, idx) => (
                      <g key={"rub-dig-" + idx} transform={`translate(0, ${24 + idx * 56})`}>
                        <rect width="50" height="20" rx="4" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" />
                        <text x="25" y="14" fill="#10b981" fontSize="9.5" fontWeight="900" textAnchor="middle">{rub.marks}</text>
                        <text x="58" y="14" fill={textPrimary} fontSize="9" fontWeight="700">{rub.rule.slice(0, 44)}</text>
                        <text x="58" y="28" fill={textMuted} fontSize="8.5">{rub.rule.slice(44)}</text>
                      </g>
                    ))}
                  </g>

                  {/* Golden Herbivore vs Carnivore Board Trap */}
                  <g transform="translate(20, 535)">
                    <rect width="320" height="58" rx="8" fill={isDark ? "rgba(239, 68, 68, 0.12)" : "#fef2f2"} stroke="#ef4444" strokeWidth="1" />
                    <text x="12" y="18" fill="#ef4444" fontSize="10" fontWeight="900">
                      ⚠️ FREQUENT CBSE 2M QUESTION:
                    </text>
                    <text x="12" y="33" fill={textPrimary} fontSize="9">
                      "Why do herbivores have longer small intestines than carnivores?"
                    </text>
                    <text x="12" y="48" fill={textMuted} fontSize="8.5">
                      Cellulose digestion takes longer (symbiotic bacteria); meat is easier to digest!
                    </text>
                  </g>
                </g>
              )}
            </g>
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
              <radialGradient id="brBg" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#050810" : "#e2e8f0"} />
              </radialGradient>
              {/* Forebrain - Cerebrum */}
              <linearGradient id="cerebrumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="40%" stopColor="#e11d48" />
                <stop offset="80%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
              {/* Hindbrain - Cerebellum */}
              <linearGradient id="cerebellumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              {/* Brainstem & Medulla */}
              <linearGradient id="medullaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="60%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              {/* Cranium / Skull Bone */}
              <linearGradient id="craniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <filter id="brDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#brBg)" />
            {/* Subtle Diagnostic Grid */}
            {[...Array(13)].map((_, i) => (
              <line key={"bvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="650" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={"bhg" + i} x1="0" y1={75 * i} x2="1000" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* Header Title Card */}
            <g transform="translate(40, 24)">
              <rect width="480" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="18" y="28" fill={textPrimary} fontSize="14" fontWeight="800" letterSpacing="0.4">
                HUMAN BRAIN — SAGITTAL MEDIAN SECTION
              </text>
              <rect x="400" y="10" width="68" height="26" rx="6" fill="#f43f5e" fillOpacity="0.2" />
              <text x="434" y="27" fill="#fb7185" fontSize="11" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* 3 Major Regions Functional Badge */}
            <g transform="translate(540, 26)">
              <rect width="420" height="42" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <circle cx="20" cy="21" r="6" fill="#f43f5e" />
              <text x="32" y="25" fill={textPrimary} fontSize="10" fontWeight="700">Forebrain (Thinking)</text>
              <circle cx="160" cy="21" r="6" fill="#fb923c" />
              <text x="172" y="25" fill={textPrimary} fontSize="10" fontWeight="700">Midbrain (Reflexes)</text>
              <circle cx="295" cy="21" r="6" fill="#38bdf8" />
              <text x="307" y="25" fill={textPrimary} fontSize="10" fontWeight="700">Hindbrain (Balance/BP)</text>
            </g>

            {/* MAIN BRAIN STRUCTURE GROUP */}
            <g transform="translate(490, 315)">
              {/* 1. CRANIUM (BONY SKULL) OUTER CASING */}
              <path
                d="M -230,120 
                   C -270,-30 -240,-160 -130,-220 
                   C -20,-270 140,-260 220,-170 
                   C 280,-100 270,40 220,130 
                   C 180,180 130,220 70,230"
                fill="none"
                stroke="url(#craniumGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* 2. MENINGES & CSF SPACE (Hydraulic Shock Absorber) */}
              <path
                d="M -220,110 
                   C -255,-30 -228,-150 -124,-208 
                   C -18,-256 132,-246 208,-160 
                   C 264,-94 254,36 208,120 
                   C 170,170 120,210 65,220"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4"
                strokeDasharray="6,4"
                opacity="0.6"
              />

              {/* 3. CEREBRUM (FOREBRAIN - Massive folded cortex) */}
              <path
                d="M -180,70 
                   C -240,60 -240,-110 -110,-170 
                   C -10,-210 130,-190 180,-100 
                   C 220,-20 190,70 100,80 
                   C 50,85 0,60 -40,60 
                   C -80,60 -120,75 -180,70 Z"
                fill="url(#cerebrumGrad)"
                stroke="#9f1239"
                strokeWidth="4"
                strokeLinejoin="round"
                filter="url(#brDrop)"
              />

              {/* Gyri & Sulci (Cortical Convolutions for Surface Area) */}
              <g fill="none" stroke="#ffe4e6" strokeWidth="2.5" opacity="0.45" strokeLinecap="round">
                <path d="M -170,-30 C -120,10 -100,-70 -30,-40 C 30,-20 70,-80 120,-30" />
                <path d="M -130,-90 C -80,-50 -40,-130 20,-80 C 70,-40 100,-110 150,-60" />
                <path d="M -90,-140 C -40,-100 10,-160 60,-110 C 110,-70 140,-130 170,-90" />
                <path d="M -190,20 C -140,50 -90,0 -40,30 C 10,60 60,10 110,40" />
                <path d="M -60,-175 C 0,-150 50,-185 100,-150" />
                <path d="M -145,-125 C -105,-155 -70,-115 -30,-145" />
              </g>

              {/* 4. CORPUS CALLOSUM (White matter bridge connecting hemispheres) */}
              <path
                d="M -90,15 
                   C -50,-35 40,-35 85,15 
                   C 60,35 -20,35 -90,15 Z"
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="3"
                filter="url(#brDrop)"
              />
              <path d="M -70,12 Q 0,-18 65,12" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* 5. THALAMUS (Relay Switchboard) */}
              <ellipse cx="2" cy="40" rx="30" ry="18" fill="#fda4af" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="2" y="44" fill="#881337" fontSize="9" fontWeight="800" textAnchor="middle">THALAMUS</text>

              {/* 6. HYPOTHALAMUS & PITUITARY GLAND */}
              <path
                d="M -15,55 C 5,50 20,55 25,65 C 20,80 -5,80 -15,55 Z"
                fill="#fb7185"
                stroke="#e11d48"
                strokeWidth="2"
              />
              {/* Infundibulum stalk */}
              <path d="M 12,70 L 18,92" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
              {/* Pituitary Gland (Hypophysis - Master Gland) */}
              <ellipse cx="20" cy="98" rx="12" ry="9" fill="#c084fc" stroke="#7e22ce" strokeWidth="2.5" filter="url(#brDrop)" />
              {/* Sella Turcica (Bony pocket housing pituitary) */}
              <path d="M 4,96 C 4,114 36,114 36,96" fill="none" stroke="#94a3b8" strokeWidth="2.5" />

              {/* 7. MIDBRAIN (Mesencephalon - Visual/Auditory Reflex) */}
              <path
                d="M -8,75 L 36,75 L 42,118 L -12,118 Z"
                fill="#fb923c"
                stroke="#c2410c"
                strokeWidth="2.5"
              />
              <text x="14" y="100" fill="#7c2d12" fontSize="8.5" fontWeight="800" textAnchor="middle">MIDBRAIN</text>

              {/* 8. PONS (Pneumotaxic Centre / Relay Bridge) */}
              <path
                d="M -12,118 
                   C -48,138 -48,172 -10,192 
                   L 44,192 L 42,118 Z"
                fill="#34d399"
                stroke="#059669"
                strokeWidth="3"
                filter="url(#brDrop)"
              />
              <text x="8" y="158" fill="#064e3b" fontSize="9" fontWeight="800" textAnchor="middle">PONS</text>

              {/* 9. MEDULLA OBLONGATA (Autonomic Vital Reflex: BP, Vomiting, Salivation) */}
              <path
                d="M -10,192 
                   C -24,228 -24,265 -12,305 
                   L 32,305 L 44,192 Z"
                fill="url(#medullaGrad)"
                stroke="#92400e"
                strokeWidth="3"
                filter="url(#brDrop)"
              />
              <text x="12" y="248" fill="#451a03" fontSize="8.5" fontWeight="800" textAnchor="middle">MEDULLA</text>

              {/* 10. SPINAL CORD (Continuous with Medulla) */}
              <path
                d="M -12,305 L -10,360 L 30,360 L 32,305 Z"
                fill="#cbd5e1"
                stroke="#64748b"
                strokeWidth="3"
              />
              <path d="M 10,305 L 10,360" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,2" />

              {/* 11. CEREBELLUM (HINDBRAIN - Arbor Vitae Tree of Life) */}
              <path
                d="M 44,125 
                   C 165,100 220,190 120,250 
                   C 70,270 38,245 44,192 Z"
                fill="url(#cerebellumGrad)"
                stroke="#0369a1"
                strokeWidth="4"
                filter="url(#brDrop)"
              />
              {/* Arbor Vitae (Branching white matter core inside cerebellum) */}
              <g fill="none" stroke="#f0f9ff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 55,185 L 105,185" />
                <path d="M 80,185 Q 95,150 115,140" />
                <path d="M 80,185 Q 95,220 115,228" />
                <path d="M 98,162 L 122,168" />
                <path d="M 98,205 L 122,202" />
                <path d="M 105,185 L 130,185" />
              </g>
            </g>

            {/* DIRECT LABELS & FUNCTIONAL ANNOTATION CALLOUT CARDS */}
            {/* LEFT COLUMN CALLOUTS (FOREBRAIN) */}
            <g>
              {/* Cerebrum Callout */}
              <g transform="translate(30, 95)">
                <rect width="260" height="62" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#f43f5e" fontSize="12" fontWeight="800">Cerebrum (Forebrain)</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Main thinking & intelligence centre</text>
                <text x="14" y="50" fill={textMuted} fontSize="9">• Sensory interpretation, memory & logic</text>
                <line x1="260" y1="31" x2="350" y2="180" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="350" cy="180" r="3.5" fill="#f43f5e" />
              </g>

              {/* Cranium / Skull Callout */}
              <g transform="translate(30, 180)">
                <rect width="260" height="52" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#94a3b8" fontSize="12" fontWeight="800">Cranium (Bony Skull)</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Rigid outer protection against impact</text>
                <line x1="260" y1="26" x2="330" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="330" cy="150" r="3.5" fill="#94a3b8" />
              </g>

              {/* Corpus Callosum Callout */}
              <g transform="translate(30, 255)">
                <rect width="260" height="52" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#cbd5e1" fontSize="12" fontWeight="800">Corpus Callosum</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Connects Left & Right hemispheres</text>
                <line x1="260" y1="26" x2="420" y2="320" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="420" cy="320" r="3.5" fill="#cbd5e1" />
              </g>

              {/* Hypothalamus Callout */}
              <g transform="translate(30, 330)">
                <rect width="260" height="64" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#fb7185" fontSize="12" fontWeight="800">Hypothalamus</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Centre for hunger, thirst & sleep</text>
                <text x="14" y="50" fill={textMuted} fontSize="9">• Controls body temperature & Pituitary</text>
                <line x1="260" y1="32" x2="480" y2="375" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="480" cy="375" r="3.5" fill="#fb7185" />
              </g>

              {/* Pituitary Gland Callout */}
              <g transform="translate(30, 415)">
                <rect width="260" height="56" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#c084fc" fontSize="12" fontWeight="800">Pituitary Gland (Master Gland)</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Secretes Growth Hormone (GH), TSH</text>
                <line x1="260" y1="28" x2="505" y2="410" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="505" cy="410" r="3.5" fill="#c084fc" />
              </g>
            </g>

            {/* RIGHT COLUMN CALLOUTS (MIDBRAIN & HINDBRAIN) */}
            <g>
              {/* Midbrain Callout */}
              <g transform="translate(710, 100)">
                <rect width="260" height="60" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#fb923c" fontSize="12" fontWeight="800">Midbrain</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Connects forebrain to hindbrain</text>
                <text x="14" y="50" fill={textMuted} fontSize="9">• Auditory, visual & pupil reflex movements</text>
                <line x1="0" y1="30" x2="-200" y2="395" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="-200" cy="395" r="3.5" fill="#fb923c" />
              </g>

              {/* Cerebellum Callout (HALLMARK CBSE 5M) */}
              <g transform="translate(710, 185)">
                <rect width="260" height="78" rx="10" fill={labelBg} stroke="#0284c7" strokeWidth="2" />
                <text x="14" y="20" fill="#38bdf8" fontSize="12" fontWeight="800">Cerebellum (Hindbrain)</text>
                <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ CBSE Hallmark Function:</text>
                <text x="14" y="50" fill={textPrimary} fontSize="9">• Maintains posture, balance & equilibrium</text>
                <text x="14" y="64" fill={textMuted} fontSize="9">• Precision of voluntary motor acts (walking)</text>
                <line x1="0" y1="39" x2="-95" y2="490" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="-95" cy="490" r="3.5" fill="#38bdf8" />
              </g>

              {/* Pons Callout */}
              <g transform="translate(710, 285)">
                <rect width="260" height="54" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#34d399" fontSize="12" fontWeight="800">Pons (Hindbrain)</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Relays impulses between brain regions</text>
                <text x="14" y="48" fill={textMuted} fontSize="9">• Pneumotaxic centre for respiration</text>
                <line x1="0" y1="27" x2="-225" y2="465" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="-225" cy="465" r="3.5" fill="#34d399" />
              </g>

              {/* Medulla Oblongata Callout */}
              <g transform="translate(710, 360)">
                <rect width="260" height="78" rx="10" fill={labelBg} stroke="#d97706" strokeWidth="1.5" />
                <text x="14" y="20" fill="#fbbf24" fontSize="12" fontWeight="800">Medulla Oblongata</text>
                <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ Vital Autonomic Centre:</text>
                <text x="14" y="50" fill={textPrimary} fontSize="9">• Involuntary actions: BP, salivation</text>
                <text x="14" y="64" fill={textMuted} fontSize="9">• Vomiting, swallowing & coughing reflexes</text>
                <line x1="0" y1="39" x2="-210" y2="550" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="-210" cy="550" r="3.5" fill="#fbbf24" />
              </g>

              {/* Spinal Cord Callout */}
              <g transform="translate(710, 460)">
                <rect width="260" height="52" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                <text x="14" y="20" fill="#cbd5e1" fontSize="12" fontWeight="800">Spinal Cord</text>
                <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Continuation of medulla, controls reflexes</text>
                <line x1="0" y1="26" x2="-215" y2="640" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
                <circle cx="-215" cy="640" r="3.5" fill="#cbd5e1" />
              </g>
            </g>

            {/* BOTTOM EXAMINER TRAP / HIGH YIELD NOTE */}
            <g transform="translate(40, 570)">
              <rect width="640" height="56" rx="12" fill={isDark ? "rgba(225, 29, 72, 0.12)" : "#fff1f2"} stroke="#e11d48" strokeWidth="1.5" />
              <text x="18" y="24" fill="#fb7185" fontSize="11" fontWeight="800">
                ⚠️ CBSE EXAMINER CRITICAL NOTE — INVOLUNTARY VS VOLUNTARY REGULATION:
              </text>
              <text x="18" y="42" fill={isDark ? "#fecdd3" : "#9f1239"} fontSize="10" fontWeight="600">
                Cerebellum controls accuracy & balance of VOLUNTARY acts (walking in a line). Medulla controls VITAL INVOLUNTARY acts (salivation, vomiting, BP).
              </text>
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
      // =====================================================================
      // 9. HUMAN REPRODUCTIVE SYSTEM (FEMALE & MALE INTERACTIVE VIEWS)
      // =====================================================================
      case "bio_human_reproduction":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="repBg" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor={isDark ? "#140a12" : "#fdf4ff"} />
                <stop offset="100%" stopColor={isDark ? "#060307" : "#fae8ff"} />
              </radialGradient>
              {/* Uterus Muscular Wall Gradient */}
              <linearGradient id="uterusWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
              {/* Endometrium Vascular Lining */}
              <linearGradient id="endoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              {/* Ovary Gradient */}
              <linearGradient id="ovaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              {/* Male Testis Gradient */}
              <linearGradient id="testisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <filter id="repDrop" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#repBg)" />
            {/* Grid */}
            {[...Array(13)].map((_, i) => (
              <line key={"rvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="650" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={"rhg" + i} x1="0" y1={75 * i} x2="1000" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* Header Title Card */}
            <g transform="translate(40, 24)">
              <rect width="470" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="18" y="28" fill={textPrimary} fontSize="13.5" fontWeight="800" letterSpacing="0.4">
                {reproView === "female"
                  ? "FEMALE REPRODUCTIVE SYSTEM — CORONAL SECTION"
                  : "MALE REPRODUCTIVE SYSTEM — SAGITTAL VIEW"}
              </text>
              <rect x="390" y="10" width="68" height="26" rx="6" fill="#ec4899" fillOpacity="0.2" />
              <text x="424" y="27" fill="#f472b6" fontSize="11" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* Interactive View Switcher Tabs inside SVG */}
            <g transform="translate(530, 24)">
              <g
                onClick={() => setReproView("female")}
                className="cursor-pointer"
              >
                <rect
                  width="210"
                  height="46"
                  rx="12"
                  fill={reproView === "female" ? "#ec4899" : labelBg}
                  stroke={reproView === "female" ? "#f472b6" : labelBorder}
                  strokeWidth="1.5"
                />
                <text
                  x="105"
                  y="28"
                  fill={reproView === "female" ? "#ffffff" : textPrimary}
                  fontSize="12"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  ♀ Female (NCERT Fig 7.11)
                </text>
              </g>

              <g
                transform="translate(220, 0)"
                onClick={() => setReproView("male")}
                className="cursor-pointer"
              >
                <rect
                  width="210"
                  height="46"
                  rx="12"
                  fill={reproView === "male" ? "#3b82f6" : labelBg}
                  stroke={reproView === "male" ? "#60a5fa" : labelBorder}
                  strokeWidth="1.5"
                />
                <text
                  x="105"
                  y="28"
                  fill={reproView === "male" ? "#ffffff" : textPrimary}
                  fontSize="12"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  ♂ Male (NCERT Fig 7.10)
                </text>
              </g>
            </g>

            {/* ========================================================= */}
            {/* VIEW A: FEMALE REPRODUCTIVE SYSTEM                       */}
            {/* ========================================================= */}
            {reproView === "female" ? (
              <g>
                {/* Central Organ Group */}
                <g transform="translate(500, 310)">
                  {/* Outer Broad Ligament & Pelvic Wall Shade */}
                  <path
                    d="M -240,-20 Q -150,70 -60,110 L 60,110 Q 150,70 240,-20"
                    fill="none"
                    stroke="#fda4af"
                    strokeWidth="32"
                    strokeLinecap="round"
                    opacity="0.25"
                  />

                  {/* Fallopian Tubes (Oviducts) - Left & Right */}
                  {/* Left Oviduct Arch */}
                  <path
                    d="M -45,-50 
                       C -90,-110 -200,-95 -230,-25 
                       C -245,10 -220,40 -205,30"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="14"
                    strokeLinecap="round"
                    filter="url(#repDrop)"
                  />
                  {/* Left Fimbriae (Finger-like projections catching ovum) */}
                  <g stroke="#e11d48" strokeWidth="3" strokeLinecap="round">
                    <path d="M -205,30 Q -200,60 -210,75" />
                    <path d="M -205,30 Q -215,60 -225,70" />
                    <path d="M -205,30 Q -230,50 -240,55" />
                    <path d="M -205,30 Q -190,55 -195,72" />
                  </g>

                  {/* Right Oviduct Arch */}
                  <path
                    d="M 45,-50 
                       C 90,-110 200,-95 230,-25 
                       C 245,10 220,40 205,30"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="14"
                    strokeLinecap="round"
                    filter="url(#repDrop)"
                  />
                  {/* Right Fimbriae */}
                  <g stroke="#e11d48" strokeWidth="3" strokeLinecap="round">
                    <path d="M 205,30 Q 200,60 210,75" />
                    <path d="M 205,30 Q 215,60 225,70" />
                    <path d="M 205,30 Q 230,50 240,55" />
                    <path d="M 205,30 Q 190,55 195,72" />
                  </g>

                  {/* Ovarian Ligaments anchoring ovaries to uterus */}
                  <path d="M -50,10 Q -120,40 -170,45" fill="none" stroke="#fbcfe8" strokeWidth="4" />
                  <path d="M 50,10 Q 120,40 170,45" fill="none" stroke="#fbcfe8" strokeWidth="4" />

                  {/* Left Ovary */}
                  <ellipse cx="-185" cy="55" rx="28" ry="18" fill="url(#ovaryGrad)" stroke="#d97706" strokeWidth="3" filter="url(#repDrop)" />
                  {/* Maturing Follicles inside Left Ovary */}
                  <circle cx="-195" cy="52" r="5" fill="#ffffff" opacity="0.8" />
                  <circle cx="-180" cy="60" r="7" fill="#ffffff" opacity="0.9" />
                  <circle cx="-172" cy="50" r="4" fill="#ffffff" opacity="0.7" />
                  {/* Ovulated Egg / Secondary Oocyte escaping toward fimbriae */}
                  <circle cx="-212" cy="72" r="4.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />

                  {/* Right Ovary */}
                  <ellipse cx="185" cy="55" rx="28" ry="18" fill="url(#ovaryGrad)" stroke="#d97706" strokeWidth="3" filter="url(#repDrop)" />
                  <circle cx="195" cy="52" r="5" fill="#ffffff" opacity="0.8" />
                  <circle cx="180" cy="60" r="7" fill="#ffffff" opacity="0.9" />
                  <circle cx="172" cy="50" r="4" fill="#ffffff" opacity="0.7" />

                  {/* UTERUS (WOMB) — Thick Myometrium Outer Wall */}
                  <path
                    d="M -55,-55 
                       C -30,-80 30,-80 55,-55 
                       C 80,-30 85,30 55,90 
                       C 40,120 30,140 25,180 
                       L -25,180 
                       C -30,140 -40,120 -55,90 
                       C -85,30 -80,-30 -55,-55 Z"
                    fill="url(#uterusWallGrad)"
                    stroke="#9f1239"
                    strokeWidth="4"
                    filter="url(#repDrop)"
                  />

                  {/* Uterine Cavity & Endometrium Lining */}
                  <path
                    d="M -32,-40 
                       C -16,-55 16,-55 32,-40 
                       C 50,-15 50,30 32,75 
                       C 20,105 15,130 14,175 
                       L -14,175 
                       C -15,130 -20,105 -32,75 
                       C -50,30 -50,-15 -32,-40 Z"
                    fill="url(#endoGrad)"
                    stroke="#e11d48"
                    strokeWidth="2"
                  />
                  {/* Endometrium vascular corrugations */}
                  <path d="M -30,0 Q -15,10 -30,20 Q -15,30 -30,40" fill="none" stroke="#be123c" strokeWidth="1.5" />
                  <path d="M 30,0 Q 15,10 30,20 Q 15,30 30,40" fill="none" stroke="#be123c" strokeWidth="1.5" />

                  {/* Cervix & Cervical Canal */}
                  <rect x="-24" y="180" width="48" height="40" rx="6" fill="#be123c" stroke="#9f1239" strokeWidth="2.5" />
                  <line x1="0" y1="180" x2="0" y2="220" stroke="#fda4af" strokeWidth="3" strokeDasharray="4,2" />

                  {/* Vagina (Birth Canal / Copulatory Canal) */}
                  <path
                    d="M -22,220 L -30,280 L 30,280 L 22,220 Z"
                    fill="#f472b6"
                    stroke="#db2777"
                    strokeWidth="3"
                  />
                  {/* Vaginal Rugae folds */}
                  <line x1="-16" y1="235" x2="16" y2="235" stroke="#be185d" strokeWidth="1.5" />
                  <line x1="-20" y1="252" x2="20" y2="252" stroke="#be185d" strokeWidth="1.5" />
                  <line x1="-24" y1="268" x2="24" y2="268" stroke="#be185d" strokeWidth="1.5" />
                </g>

                {/* LEFT COLUMN CALLOUTS (OVARY & OVIDUCT) */}
                <g>
                  {/* Fallopian Tube Callout */}
                  <g transform="translate(30, 95)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#f43f5e" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#f43f5e" fontSize="12" fontWeight="800">Fallopian Tube (Oviduct)</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ Primary Board Hallmark:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Site of Fertilisation (sperm meets egg)</text>
                    <text x="14" y="64" fill={textMuted} fontSize="9">• Cilia sweep zygote towards uterus</text>
                    <line x1="270" y1="37" x2="350" y2="240" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="350" cy="240" r="3.5" fill="#f43f5e" />
                  </g>

                  {/* Ovary Callout */}
                  <g transform="translate(30, 195)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#d97706" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#f59e0b" fontSize="12" fontWeight="800">Ovary (Primary Female Organ)</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Releases 1 mature ovum every ~28 days</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9.5">• Endocrine: Estrogen & Progesterone</text>
                    <text x="14" y="64" fill={textMuted} fontSize="9">• Thousands of immature eggs present at birth</text>
                    <line x1="270" y1="37" x2="320" y2="365" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="320" cy="365" r="3.5" fill="#d97706" />
                  </g>

                  {/* Placenta Inset Info Box */}
                  <g transform="translate(30, 295)">
                    <rect width="270" height="92" rx="10" fill={labelBg} stroke="#be123c" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#fb7185" fontSize="12" fontWeight="800">Placenta (Vascular Disc Tissue)</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ 3-Mark Question Favorite:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Embedded in uterine wall with chorionic villi</text>
                    <text x="14" y="64" fill={textPrimary} fontSize="9">• Passes Glucose & O₂ from mother to embryo</text>
                    <text x="14" y="78" fill={textMuted} fontSize="9">• Removes CO₂ & metabolic wastes from embryo</text>
                  </g>
                </g>

                {/* RIGHT COLUMN CALLOUTS (UTERUS, ENDOMETRIUM, CERVIX, VAGINA) */}
                <g>
                  {/* Uterus Callout */}
                  <g transform="translate(700, 95)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#e11d48" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#fb7185" fontSize="12" fontWeight="800">Uterus (Womb)</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ Implantation & Gestation:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Site where embryo implants in lining</text>
                    <text x="14" y="64" fill={textMuted} fontSize="9">• Thick muscular wall expands for 9 months</text>
                    <line x1="0" y1="37" x2="-160" y2="280" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-160" cy="280" r="3.5" fill="#e11d48" />
                  </g>

                  {/* Endometrium Callout */}
                  <g transform="translate(700, 195)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#be185d" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#f472b6" fontSize="12" fontWeight="800">Endometrium (Inner Lining)</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Rich in blood vessels to nourish embryo</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9.5">• If unfertilised: breaks down & sheds</text>
                    <text x="14" y="64" fill="#fb7185" fontSize="9">• Menstruation lasts ~3 to 5 days</text>
                    <line x1="0" y1="37" x2="-175" y2="350" stroke="#be185d" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-175" cy="350" r="3.5" fill="#be185d" />
                  </g>

                  {/* Cervix & Vagina Callout */}
                  <g transform="translate(700, 295)">
                    <rect width="270" height="76" rx="10" fill={labelBg} stroke="#db2777" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#f472b6" fontSize="12" fontWeight="800">Cervix & Vagina</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Cervix: narrow neck between uterus & vagina</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9.5">• Vagina: Receives sperms during copulation</text>
                    <text x="14" y="64" fill={textMuted} fontSize="9">• Jointly forms the Birth Canal at parturition</text>
                    <line x1="0" y1="38" x2="-180" y2="520" stroke="#db2777" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-180" cy="520" r="3.5" fill="#db2777" />
                  </g>
                </g>

                {/* BOTTOM SUMMARY RIBBON */}
                <g transform="translate(40, 570)">
                  <rect width="920" height="56" rx="12" fill={isDark ? "rgba(236, 72, 153, 0.12)" : "#fdf2f8"} stroke="#ec4899" strokeWidth="1.5" />
                  <text x="18" y="24" fill="#f472b6" fontSize="11" fontWeight="800">
                    ★ CBSE 5-MARK SEQUENCE — HUMAN FERTILISATION TO BIRTH:
                  </text>
                  <text x="18" y="42" fill={isDark ? "#fbcfe8" : "#831843"} fontSize="10" fontWeight="600">
                    Ovulation (Ovary) ➔ Fertilisation (Fallopian Tube) ➔ Zygote divides into Embryo ➔ Implantation in Endometrium (Uterus) ➔ Placenta exchange ➔ Birth (Vagina).
                  </text>
                </g>
              </g>
            ) : (
              /* ========================================================= */
              /* VIEW B: MALE REPRODUCTIVE SYSTEM                         */
              /* ========================================================= */
              <g>
                {/* Central Organ Group (Sagittal Lateral Section) */}
                <g transform="translate(500, 310)">
                  {/* Pelvic Bone & Spine Silhouette Hint */}
                  <path
                    d="M -160,-120 C -220,-80 -220,50 -180,120"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.3"
                  />

                  {/* Urinary Bladder */}
                  <ellipse cx="-40" cy="-60" rx="60" ry="46" fill="#fde047" stroke="#ca8a04" strokeWidth="3" filter="url(#repDrop)" />
                  <text x="-40" y="-56" fill="#854d0e" fontSize="10" fontWeight="800" textAnchor="middle">BLADDER</text>
                  {/* Ureter entering bladder from kidney */}
                  <path d="M -90,-150 Q -70,-100 -60,-80" fill="none" stroke="#eab308" strokeWidth="5" strokeLinecap="round" />

                  {/* Vas Deferens (Sperm Duct) looping over bladder */}
                  <path
                    d="M -95,190 
                       C -130,130 -160,20 -150,-40 
                       C -140,-110 -70,-130 0,-110 
                       C 40,-95 45,-60 40,-20 
                       L 30,15"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="7"
                    strokeLinecap="round"
                    filter="url(#repDrop)"
                  />

                  {/* Seminal Vesicle (Behind Bladder Neck) */}
                  <path
                    d="M 15,-60 C 45,-75 55,-40 35,-25 C 20,-15 15,-40 15,-60 Z"
                    fill="#f472b6"
                    stroke="#db2777"
                    strokeWidth="2.5"
                    filter="url(#repDrop)"
                  />

                  {/* Prostate Gland (Surrounds Urethra Base) */}
                  <ellipse cx="22" cy="0" rx="26" ry="20" fill="#a78bfa" stroke="#7c3aed" strokeWidth="3" filter="url(#repDrop)" />
                  <text x="22" y="3" fill="#4c1d95" fontSize="8.5" fontWeight="800" textAnchor="middle">PROSTATE</text>

                  {/* Bulbourethral / Cowper's Gland */}
                  <circle cx="20" cy="30" r="7" fill="#34d399" stroke="#059669" strokeWidth="2" />

                  {/* Scrotal Sac (External pouch) */}
                  <path
                    d="M -135,140 
                       C -150,250 -40,260 -45,170 
                       C -48,130 -90,135 -135,140 Z"
                    fill={isDark ? "#1e293b" : "#e2e8f0"}
                    stroke="#94a3b8"
                    strokeWidth="3.5"
                    filter="url(#repDrop)"
                  />

                  {/* Testis (Located inside Scrotum) */}
                  <ellipse cx="-90" cy="195" rx="30" ry="22" fill="url(#testisGrad)" stroke="#1d4ed8" strokeWidth="3" filter="url(#repDrop)" />
                  <text x="-90" y="199" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle">TESTIS</text>

                  {/* Epididymis (C-shaped cap on testis) */}
                  <path
                    d="M -115,180 
                       C -128,160 -80,165 -65,185 
                       C -60,205 -70,225 -85,215"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Urethra (Common pathway) passing through Penis */}
                  <path
                    d="M 22,-20 
                       L 22,25 
                       C 22,50 35,65 50,75 
                       L 110,130"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Penis (External Copulatory Organ) */}
                  <path
                    d="M 12,35 
                       C 15,65 30,85 50,105 
                       L 105,150 
                       C 125,165 140,150 135,130 
                       L 80,75 
                       C 60,55 50,30 45,15 Z"
                    fill="#fed7aa"
                    stroke="#ea580c"
                    strokeWidth="3.5"
                    filter="url(#repDrop)"
                  />
                  {/* Glans Penis tip */}
                  <path
                    d="M 105,150 C 130,170 145,150 135,130 Z"
                    fill="#fb923c"
                    stroke="#c2410c"
                    strokeWidth="2"
                  />
                </g>

                {/* LEFT COLUMN CALLOUTS (TESTIS, SCROTUM, VAS DEFERENS) */}
                <g>
                  {/* Testis & Scrotum (CRUCIAL CBSE 5M) */}
                  <g transform="translate(30, 95)">
                    <rect width="270" height="88" rx="10" fill={labelBg} stroke="#3b82f6" strokeWidth="2" />
                    <text x="14" y="20" fill="#60a5fa" fontSize="12" fontWeight="800">Testis & Scrotum</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ CBSE #1 Most Asked Question:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Located outside abdominal cavity</text>
                    <text x="14" y="64" fill="#38bdf8" fontSize="9">• Requires 2 to 2.5°C LOWER temp for sperm</text>
                    <text x="14" y="78" fill={textMuted} fontSize="9">• Secretes Testosterone hormone</text>
                    <line x1="270" y1="44" x2="380" y2="490" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="380" cy="490" r="3.5" fill="#3b82f6" />
                  </g>

                  {/* Epididymis Callout */}
                  <g transform="translate(30, 205)">
                    <rect width="270" height="60" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="14" y="20" fill="#60a5fa" fontSize="12" fontWeight="800">Epididymis</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Stores sperms temporarily</text>
                    <text x="14" y="48" fill={textMuted} fontSize="9">• Site for functional maturation & motility</text>
                    <line x1="270" y1="30" x2="420" y2="475" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="420" cy="475" r="3.5" fill="#60a5fa" />
                  </g>

                  {/* Vas Deferens Callout */}
                  <g transform="translate(30, 285)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#38bdf8" fontSize="12" fontWeight="800">Vas Deferens (Sperm Duct)</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• Transports sperms towards urethra</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9.5">• Loops over the urinary bladder</text>
                    <text x="14" y="64" fill="#fb7185" fontSize="9">• Cut & tied in Vasectomy (Contraception)</text>
                    <line x1="270" y1="37" x2="440" y2="210" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="440" cy="210" r="3.5" fill="#38bdf8" />
                  </g>
                </g>

                {/* RIGHT COLUMN CALLOUTS (GLANDS & URETHRA) */}
                <g>
                  {/* Seminal Vesicles & Prostate Callout */}
                  <g transform="translate(700, 95)">
                    <rect width="270" height="88" rx="10" fill={labelBg} stroke="#a78bfa" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#c084fc" fontSize="12" fontWeight="800">Prostate & Seminal Vesicles</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ Secretion Role in Board Exam:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Add fluid medium for easier transport</text>
                    <text x="14" y="64" fill={textPrimary} fontSize="9">• Provide nutrition (fructose) to sperms</text>
                    <text x="14" y="78" fill={textMuted} fontSize="9">• Fluid + Sperms = Semen</text>
                    <line x1="0" y1="44" x2="-170" y2="280" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-170" cy="280" r="3.5" fill="#a78bfa" />
                  </g>

                  {/* Urethra Callout */}
                  <g transform="translate(700, 205)">
                    <rect width="270" height="74" rx="10" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#38bdf8" fontSize="12" fontWeight="800">Urethra (Common Pathway)</text>
                    <text x="14" y="36" fill="#f8fafc" fontSize="9.5" fontWeight="700">★ Dual Function in Males:</text>
                    <text x="14" y="50" fill={textPrimary} fontSize="9">• Common passage for urine AND semen</text>
                    <text x="14" y="64" fill={textMuted} fontSize="9">• Never transmits both at the same time</text>
                    <line x1="0" y1="37" x2="-140" y2="390" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-140" cy="390" r="3.5" fill="#38bdf8" />
                  </g>

                  {/* Penis Callout */}
                  <g transform="translate(700, 295)">
                    <rect width="270" height="60" rx="10" fill={labelBg} stroke="#ea580c" strokeWidth="1.5" />
                    <text x="14" y="20" fill="#fb923c" fontSize="12" fontWeight="800">Penis (Copulatory Organ)</text>
                    <text x="14" y="36" fill={textPrimary} fontSize="9.5">• External organ with erectile tissue</text>
                    <text x="14" y="48" fill={textMuted} fontSize="9">• Delivers sperms into female vagina</text>
                    <line x1="0" y1="30" x2="-80" y2="440" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="-80" cy="440" r="3.5" fill="#ea580c" />
                  </g>
                </g>

                {/* BOTTOM SUMMARY RIBBON */}
                <g transform="translate(40, 570)">
                  <rect width="920" height="56" rx="12" fill={isDark ? "rgba(59, 130, 246, 0.12)" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="18" y="24" fill="#60a5fa" fontSize="11" fontWeight="800">
                    ★ CBSE BOARD ESSENTIAL — SPERM PATHWAY:
                  </text>
                  <text x="18" y="42" fill={isDark ? "#bfdbfe" : "#1e3a8a"} fontSize="10" fontWeight="600">
                    Testis (Production) ➔ Epididymis (Maturation) ➔ Vas Deferens (Transport) ➔ Gland Secretions Added (Semen) ➔ Urethra (Emission).
                  </text>
                </g>
              </g>
            )}
          </svg>
        );

      // =====================================================================
      // 10. MENDELIAN MONOHYBRID, DIHYBRID & SEX DETERMINATION MASTER
      // =====================================================================
      case "bio_mendel_crosses":
        return (
          <svg viewBox="0 0 1000 650" className="w-full h-auto select-none">
            <defs>
              <linearGradient id="mBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isDark ? "#0f172a" : "#f8fafc"} />
                <stop offset="100%" stopColor={isDark ? "#020617" : "#e2e8f0"} />
              </linearGradient>
              {/* Seed Gradients */}
              <radialGradient id="roundYellowSeed" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </radialGradient>
              <radialGradient id="roundGreenSeed" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="60%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </radialGradient>
              <radialGradient id="wrinkledYellowSeed" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="70%" stopColor="#ca8a04" />
                <stop offset="100%" stopColor="#854d0e" />
              </radialGradient>
              <radialGradient id="wrinkledGreenSeed" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="70%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
              </radialGradient>
            </defs>

            <rect width="1000" height="650" rx="20" fill="url(#mBg)" />
            {/* Diagnostic Grid */}
            {[...Array(13)].map((_, i) => (
              <line key={"mvg" + i} x1={80 * i} y1="0" x2={80 * i} y2="650" stroke={gridStroke} strokeWidth="1" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={"mhg" + i} x1="0" y1={75 * i} x2="1000" y2={75 * i} stroke={gridStroke} strokeWidth="1" />
            ))}

            {/* Header Title Card */}
            <g transform="translate(40, 22)">
              <rect width="360" height="46" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
              <text x="18" y="28" fill={textPrimary} fontSize="13.5" fontWeight="800" letterSpacing="0.4">
                HEREDITY: MENDELIAN GENETICS
              </text>
              <rect x="290" y="10" width="58" height="26" rx="6" fill="#10b981" fillOpacity="0.2" />
              <text x="319" y="27" fill="#34d399" fontSize="11" fontWeight="800" textAnchor="middle">
                CBSE 5M
              </text>
            </g>

            {/* 3 Interactive Tabs */}
            <g transform="translate(420, 22)">
              {/* Tab 1: Monohybrid */}
              <g onClick={() => setMendelView("monohybrid")} className="cursor-pointer">
                <rect
                  width="170"
                  height="46"
                  rx="12"
                  fill={mendelView === "monohybrid" ? "#10b981" : labelBg}
                  stroke={mendelView === "monohybrid" ? "#34d399" : labelBorder}
                  strokeWidth="1.5"
                />
                <text
                  x="85"
                  y="28"
                  fill={mendelView === "monohybrid" ? "#ffffff" : textPrimary}
                  fontSize="11.5"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  1. Monohybrid (3:1)
                </text>
              </g>

              {/* Tab 2: Dihybrid */}
              <g transform="translate(180, 0)" onClick={() => setMendelView("dihybrid")} className="cursor-pointer">
                <rect
                  width="180"
                  height="46"
                  rx="12"
                  fill={mendelView === "dihybrid" ? "#f59e0b" : labelBg}
                  stroke={mendelView === "dihybrid" ? "#fbbf24" : labelBorder}
                  strokeWidth="1.5"
                />
                <text
                  x="90"
                  y="28"
                  fill={mendelView === "dihybrid" ? "#ffffff" : textPrimary}
                  fontSize="11.5"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  2. Dihybrid (9:3:3:1)
                </text>
              </g>

              {/* Tab 3: Sex Determination */}
              <g transform="translate(370, 0)" onClick={() => setMendelView("sex_det")} className="cursor-pointer">
                <rect
                  width="170"
                  height="46"
                  rx="12"
                  fill={mendelView === "sex_det" ? "#ec4899" : labelBg}
                  stroke={mendelView === "sex_det" ? "#f472b6" : labelBorder}
                  strokeWidth="1.5"
                />
                <text
                  x="85"
                  y="28"
                  fill={mendelView === "sex_det" ? "#ffffff" : textPrimary}
                  fontSize="11.5"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  3. Sex Determination
                </text>
              </g>
            </g>

            {/* ========================================================= */}
            {/* TAB 1: MONOHYBRID CROSS (TALL × DWARF)                    */}
            {/* ========================================================= */}
            {mendelView === "monohybrid" && (
              <g transform="translate(40, 90)">
                {/* Left: Cross Flowchart */}
                <g>
                  {/* P Generation */}
                  <g transform="translate(0, 10)">
                    <rect width="450" height="65" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="16" y="24" fill="#38bdf8" fontSize="11" fontWeight="800">PARENTAL (P) GENERATION:</text>
                    <text x="16" y="48" fill={textPrimary} fontSize="13" fontWeight="800">
                      Pure Tall Plant <tspan fill="#34d399">(TT)</tspan>  ×  Pure Dwarf Plant <tspan fill="#f87171">(tt)</tspan>
                    </text>
                  </g>

                  {/* Gametes Arrow */}
                  <g transform="translate(0, 95)">
                    <line x1="120" y1="0" x2="120" y2="25" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                    <line x1="330" y1="0" x2="330" y2="25" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx="120" cy="38" r="15" fill="#34d399" />
                    <text x="120" y="43" fill="#064e3b" fontSize="14" fontWeight="800" textAnchor="middle">T</text>
                    <circle cx="330" cy="38" r="15" fill="#f87171" />
                    <text x="330" y="43" fill="#7f1d1d" fontSize="14" fontWeight="800" textAnchor="middle">t</text>
                  </g>

                  {/* F1 Generation */}
                  <g transform="translate(0, 170)">
                    <rect width="450" height="70" rx="12" fill={isDark ? "rgba(16, 185, 129, 0.15)" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
                    <text x="16" y="24" fill="#10b981" fontSize="11" fontWeight="800">FIRST FILIAL (F1) GENERATION:</text>
                    <text x="16" y="50" fill={textPrimary} fontSize="14" fontWeight="800">
                      All <tspan fill="#34d399">Tt (Hybrid Tall)</tspan> Plants (100%)
                    </text>
                    <text x="300" y="50" fill="#f59e0b" fontSize="11" fontWeight="700">★ Law of Dominance</text>
                  </g>

                  {/* Selfing F1 */}
                  <g transform="translate(0, 260)">
                    <rect width="450" height="45" rx="10" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="16" y="28" fill={textPrimary} fontSize="12" fontWeight="700">
                      Self-Pollination (F1 × F1):  <tspan fill="#34d399" fontWeight="800">Tt</tspan>  ×  <tspan fill="#34d399" fontWeight="800">Tt</tspan>
                    </text>
                  </g>

                  {/* F2 Generation Punnett Square */}
                  <g transform="translate(70, 325)">
                    {/* Grid border */}
                    <rect width="260" height="180" rx="12" fill={labelBg} stroke={textPrimary} strokeWidth="2" />
                    <line x1="70" y1="0" x2="70" y2="180" stroke={textPrimary} strokeWidth="2" />
                    <line x1="70" y1="60" x2="260" y2="60" stroke={textPrimary} strokeWidth="2" />
                    <line x1="165" y1="0" x2="165" y2="180" stroke={textPrimary} strokeWidth="2" />
                    <line x1="70" y1="120" x2="260" y2="120" stroke={textPrimary} strokeWidth="2" />

                    {/* Header gametes */}
                    <text x="35" y="35" fill="#94a3b8" fontSize="12" fontWeight="800" textAnchor="middle">♀ \ ♂</text>
                    <text x="117" y="38" fill="#38bdf8" fontSize="16" fontWeight="800" textAnchor="middle">T</text>
                    <text x="212" y="38" fill="#f87171" fontSize="16" fontWeight="800" textAnchor="middle">t</text>

                    <text x="35" y="95" fill="#38bdf8" fontSize="16" fontWeight="800" textAnchor="middle">T</text>
                    <text x="35" y="155" fill="#f87171" fontSize="16" fontWeight="800" textAnchor="middle">t</text>

                    {/* Cell 1: TT */}
                    <text x="117" y="95" fill="#34d399" fontSize="16" fontWeight="800" textAnchor="middle">TT</text>
                    <text x="117" y="110" fill={textMuted} fontSize="9" textAnchor="middle">Tall</text>

                    {/* Cell 2: Tt */}
                    <text x="212" y="95" fill="#34d399" fontSize="16" fontWeight="800" textAnchor="middle">Tt</text>
                    <text x="212" y="110" fill={textMuted} fontSize="9" textAnchor="middle">Tall</text>

                    {/* Cell 3: Tt */}
                    <text x="117" y="155" fill="#34d399" fontSize="16" fontWeight="800" textAnchor="middle">Tt</text>
                    <text x="117" y="170" fill={textMuted} fontSize="9" textAnchor="middle">Tall</text>

                    {/* Cell 4: tt */}
                    <text x="212" y="155" fill="#f87171" fontSize="16" fontWeight="800" textAnchor="middle">tt</text>
                    <text x="212" y="170" fill={textMuted} fontSize="9" textAnchor="middle">Dwarf</text>
                  </g>
                </g>

                {/* Right: Ratios & Laws Summary Cards */}
                <g transform="translate(500, 10)">
                  {/* F2 Ratios Card (Hallmark CBSE) */}
                  <rect width="420" height="150" rx="14" fill={labelBg} stroke="#10b981" strokeWidth="2" />
                  <text x="20" y="30" fill="#10b981" fontSize="13" fontWeight="800">
                    F2 GENERATION RATIOS (MANDATORY FOR FULL MARKS)
                  </text>

                  {/* Phenotypic Ratio */}
                  <g transform="translate(20, 50)">
                    <rect width="380" height="40" rx="8" fill={isDark ? "rgba(16, 185, 129, 0.15)" : "#ecfdf5"} />
                    <text x="14" y="25" fill={textPrimary} fontSize="12" fontWeight="700">
                      Phenotypic Ratio:  <tspan fill="#10b981" fontSize="15" fontWeight="900">3 Tall  :  1 Dwarf</tspan>
                    </text>
                  </g>

                  {/* Genotypic Ratio */}
                  <g transform="translate(20, 98)">
                    <rect width="380" height="40" rx="8" fill={isDark ? "rgba(56, 189, 248, 0.15)" : "#f0f9ff"} />
                    <text x="14" y="25" fill={textPrimary} fontSize="12" fontWeight="700">
                      Genotypic Ratio:  <tspan fill="#0284c7" fontSize="15" fontWeight="900">1 TT  :  2 Tt  :  1 tt (1:2:1)</tspan>
                    </text>
                  </g>

                  {/* Law of Dominance Box */}
                  <g transform="translate(0, 170)">
                    <rect width="420" height="135" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="20" y="28" fill="#f59e0b" fontSize="12" fontWeight="800">
                      1. LAW OF DOMINANCE
                    </text>
                    <text x="20" y="52" fill={textPrimary} fontSize="10.5" fontWeight="600">
                      • In a cross between two organisms differing in one trait,
                    </text>
                    <text x="20" y="70" fill={textPrimary} fontSize="10.5" fontWeight="600">
                      only one character expresses itself in F1 (Dominant trait = Tall).
                    </text>
                    <text x="20" y="92" fill={textMuted} fontSize="10">
                      • The trait which remains suppressed/hidden is Recessive (Dwarf).
                    </text>
                    <text x="20" y="114" fill="#34d399" fontSize="10" fontWeight="700">
                      • Dwarf trait reappears unchanged in F2 generation!
                    </text>
                  </g>

                  {/* Law of Segregation Box */}
                  <g transform="translate(0, 325)">
                    <rect width="420" height="145" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="20" y="28" fill="#38bdf8" fontSize="12" fontWeight="800">
                      2. LAW OF SEGREGATION (PURITY OF GAMETES)
                    </text>
                    <text x="20" y="52" fill={textPrimary} fontSize="10.5" fontWeight="600">
                      • During gamete formation, the two alleles of a gene
                    </text>
                    <text x="20" y="70" fill={textPrimary} fontSize="10.5" fontWeight="600">
                      segregate (separate) from each other.
                    </text>
                    <text x="20" y="92" fill={textMuted} fontSize="10">
                      • Each gamete carries only ONE allele with 50% probability.
                    </text>
                    <text x="20" y="118" fill="#fbbf24" fontSize="10.5" fontWeight="700">
                      ★ Why F2 shows dwarf: "t" allele was never lost or blended!
                    </text>
                  </g>
                </g>
              </g>
            )}

            {/* ========================================================= */}
            {/* TAB 2: DIHYBRID CROSS (16-CELL PUNNETT SQUARE)            */}
            {/* ========================================================= */}
            {mendelView === "dihybrid" && (
              <g transform="translate(30, 80)">
                {/* Left: 16-Cell Punnett Square */}
                <g transform="translate(30, 10)">
                  {/* Outer Frame */}
                  <rect width="440" height="380" rx="14" fill={labelBg} stroke={textPrimary} strokeWidth="2" />
                  {/* Grid Lines */}
                  {[1, 2, 3, 4].map((col) => (
                    <line key={"col" + col} x1={80 + 90 * (col - 1)} y1="0" x2={80 + 90 * (col - 1)} y2="380" stroke={textPrimary} strokeWidth="1.5" />
                  ))}
                  {[1, 2, 3, 4].map((row) => (
                    <line key={"row" + row} x1="0" y1={60 + 80 * (row - 1)} x2="440" y2={60 + 80 * (row - 1)} stroke={textPrimary} strokeWidth="1.5" />
                  ))}

                  {/* Corner Gametes Title */}
                  <text x="40" y="38" fill="#94a3b8" fontSize="12" fontWeight="800" textAnchor="middle">♀ \ ♂</text>

                  {/* Top Gametes */}
                  {["RY", "Ry", "rY", "ry"].map((g, idx) => (
                    <text key={"tg" + idx} x={125 + 90 * idx} y="38" fill="#f59e0b" fontSize="15" fontWeight="800" textAnchor="middle">
                      {g}
                    </text>
                  ))}

                  {/* Left Gametes */}
                  {["RY", "Ry", "rY", "ry"].map((g, idx) => (
                    <text key={"lg" + idx} x="40" y={105 + 80 * idx} fill="#f59e0b" fontSize="15" fontWeight="800" textAnchor="middle">
                      {g}
                    </text>
                  ))}

                  {/* 16 Cells Data: [genotype, phenotypeType, cx, cy] */}
                  {[
                    // Row 1
                    { g: "RRYY", t: "RY", x: 125, y: 100 },
                    { g: "RRYy", t: "RY", x: 215, y: 100 },
                    { g: "RrYY", t: "RY", x: 305, y: 100 },
                    { g: "RrYy", t: "RY", x: 395, y: 100 },
                    // Row 2
                    { g: "RRYy", t: "RY", x: 125, y: 180 },
                    { g: "RRyy", t: "Ry", x: 215, y: 180 },
                    { g: "RrYy", t: "RY", x: 305, y: 180 },
                    { g: "Rryy", t: "Ry", x: 395, y: 180 },
                    // Row 3
                    { g: "RrYY", t: "RY", x: 125, y: 260 },
                    { g: "RrYy", t: "RY", x: 215, y: 260 },
                    { g: "rrYY", t: "rY", x: 305, y: 260 },
                    { g: "rrYy", t: "rY", x: 395, y: 260 },
                    // Row 4
                    { g: "RrYy", t: "RY", x: 125, y: 340 },
                    { g: "Rryy", t: "Ry", x: 215, y: 340 },
                    { g: "rrYy", t: "rY", x: 305, y: 340 },
                    { g: "rryy", t: "ry", x: 395, y: 340 },
                  ].map((cell, idx) => (
                    <g key={"cell" + idx}>
                      {/* Seed Icon representation */}
                      {cell.t === "RY" && (
                        <circle cx={cell.x} cy={cell.y - 14} r="13" fill="url(#roundYellowSeed)" stroke="#ca8a04" strokeWidth="1.5" />
                      )}
                      {cell.t === "Ry" && (
                        <circle cx={cell.x} cy={cell.y - 14} r="13" fill="url(#roundGreenSeed)" stroke="#16a34a" strokeWidth="1.5" />
                      )}
                      {cell.t === "rY" && (
                        <path
                          d={`M ${cell.x-11},${cell.y-24} Q ${cell.x},${cell.y-29} ${cell.x+11},${cell.y-24} Q ${cell.x+15},${cell.y-14} ${cell.x+10},${cell.y-4} Q ${cell.x},${cell.y} ${cell.x-10},${cell.y-4} Z`}
                          fill="url(#wrinkledYellowSeed)"
                          stroke="#a16207"
                          strokeWidth="1.5"
                        />
                      )}
                      {cell.t === "ry" && (
                        <path
                          d={`M ${cell.x-11},${cell.y-24} Q ${cell.x},${cell.y-29} ${cell.x+11},${cell.y-24} Q ${cell.x+15},${cell.y-14} ${cell.x+10},${cell.y-4} Q ${cell.x},${cell.y} ${cell.x-10},${cell.y-4} Z`}
                          fill="url(#wrinkledGreenSeed)"
                          stroke="#14532d"
                          strokeWidth="1.5"
                        />
                      )}
                      <text x={cell.x} y={cell.y + 16} fill={textPrimary} fontSize="11" fontWeight="800" textAnchor="middle">
                        {cell.g}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Right: Phenotypic Summary & Law */}
                <g transform="translate(520, 10)">
                  {/* Phenotypic Ratio 9:3:3:1 Card */}
                  <rect width="410" height="210" rx="14" fill={labelBg} stroke="#f59e0b" strokeWidth="2" />
                  <text x="20" y="28" fill="#f59e0b" fontSize="13" fontWeight="800">
                    DIHYBRID PHENOTYPIC RATIO (9 : 3 : 3 : 1)
                  </text>

                  {/* Seed Rows */}
                  <g transform="translate(20, 42)">
                    {/* 1. Round Yellow */}
                    <g transform="translate(0, 0)">
                      <circle cx="15" cy="15" r="12" fill="url(#roundYellowSeed)" stroke="#ca8a04" strokeWidth="1.5" />
                      <text x="36" y="19" fill={textPrimary} fontSize="11.5" fontWeight="700">
                        Round Yellow seeds (R_Y_): <tspan fill="#f59e0b" fontWeight="900">9 / 16</tspan>
                      </text>
                    </g>

                    {/* 2. Round Green */}
                    <g transform="translate(0, 38)">
                      <circle cx="15" cy="15" r="12" fill="url(#roundGreenSeed)" stroke="#16a34a" strokeWidth="1.5" />
                      <text x="36" y="19" fill={textPrimary} fontSize="11.5" fontWeight="700">
                        Round Green seeds (R_yy): <tspan fill="#22c55e" fontWeight="900">3 / 16</tspan>
                      </text>
                    </g>

                    {/* 3. Wrinkled Yellow */}
                    <g transform="translate(0, 76)">
                      <path d="M 5,5 Q 15,0 25,5 Q 28,15 23,25 Q 15,28 7,24 Z" fill="url(#wrinkledYellowSeed)" stroke="#a16207" strokeWidth="1.5" />
                      <text x="36" y="19" fill={textPrimary} fontSize="11.5" fontWeight="700">
                        Wrinkled Yellow seeds (rrY_): <tspan fill="#eab308" fontWeight="900">3 / 16</tspan>
                      </text>
                    </g>

                    {/* 4. Wrinkled Green */}
                    <g transform="translate(0, 114)">
                      <path d="M 5,5 Q 15,0 25,5 Q 28,15 23,25 Q 15,28 7,24 Z" fill="url(#wrinkledGreenSeed)" stroke="#14532d" strokeWidth="1.5" />
                      <text x="36" y="19" fill={textPrimary} fontSize="11.5" fontWeight="700">
                        Wrinkled Green seeds (rryy): <tspan fill="#15803d" fontWeight="900">1 / 16</tspan>
                      </text>
                    </g>
                  </g>

                  {/* Law of Independent Assortment Card */}
                  <g transform="translate(0, 230)">
                    <rect width="410" height="160" rx="14" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="20" y="28" fill="#38bdf8" fontSize="12" fontWeight="800">
                      LAW OF INDEPENDENT ASSORTMENT
                    </text>
                    <text x="20" y="52" fill={textPrimary} fontSize="10" fontWeight="600">
                      • When two pairs of contrasting traits are combined in a hybrid,
                    </text>
                    <text x="20" y="70" fill={textPrimary} fontSize="10" fontWeight="600">
                      segregation of one pair of characters is INDEPENDENT of the other.
                    </text>
                    <text x="20" y="94" fill="#f59e0b" fontSize="10" fontWeight="700">
                      ★ Evidence: Recombinant phenotypes!
                    </text>
                    <text x="20" y="112" fill={textMuted} fontSize="9.5">
                      Round Green (3) and Wrinkled Yellow (3) are new combinations
                    </text>
                    <text x="20" y="128" fill={textMuted} fontSize="9.5">
                      not present in original parents (RRYY and rryy)!
                    </text>
                  </g>
                </g>

                {/* Bottom Formula Pill */}
                <g transform="translate(30, 410)">
                  <rect width="900" height="42" rx="10" fill={isDark ? "rgba(245, 158, 11, 0.12)" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="450" y="26" fill="#f59e0b" fontSize="11" fontWeight="800" textAnchor="middle">
                    P: RRYY × rryy  ➔  F1: All RrYy (Round Yellow)  ➔  F2: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green
                  </text>
                </g>
              </g>
            )}

            {/* ========================================================= */}
            {/* TAB 3: SEX DETERMINATION IN HUMAN BEINGS                  */}
            {/* ========================================================= */}
            {mendelView === "sex_det" && (
              <g transform="translate(40, 90)">
                {/* Left: Cross Flowchart */}
                <g>
                  {/* Karyotype Overview */}
                  <g transform="translate(0, 10)">
                    <rect width="450" height="60" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="16" y="22" fill="#ec4899" fontSize="11" fontWeight="800">HUMAN CHROMOSOME COMPLEMENT (23 PAIRS = 46):</text>
                    <text x="16" y="44" fill={textPrimary} fontSize="11.5" fontWeight="700">
                      22 Pairs = Autosomes (Body traits)  •  1 Pair (23rd) = Sex Chromosomes
                    </text>
                  </g>

                  {/* Parents Box */}
                  <g transform="translate(0, 85)">
                    <rect width="450" height="80" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="16" y="24" fill="#38bdf8" fontSize="11" fontWeight="800">PARENTS:</text>
                    <g transform="translate(50, 42)">
                      <text x="0" y="16" fill="#38bdf8" fontSize="14" fontWeight="800">FATHER (44 + XY)</text>
                      <text x="230" y="16" fill="#ec4899" fontSize="14" fontWeight="800">MOTHER (44 + XX)</text>
                    </g>
                  </g>

                  {/* Gametes Section */}
                  <g transform="translate(0, 185)">
                    <text x="16" y="18" fill="#94a3b8" fontSize="11" fontWeight="800">GAMETES PRODUCED:</text>
                    {/* Father gametes (50% X, 50% Y) */}
                    <g transform="translate(50, 30)">
                      <circle cx="30" cy="18" r="18" fill="#38bdf8" />
                      <text x="30" y="24" fill="#0c4a6e" fontSize="15" fontWeight="900" textAnchor="middle">X</text>
                      <text x="30" y="50" fill={textMuted} fontSize="9" textAnchor="middle">50% Sperm</text>

                      <circle cx="110" cy="18" r="18" fill="#38bdf8" />
                      <text x="110" y="24" fill="#0c4a6e" fontSize="15" fontWeight="900" textAnchor="middle">Y</text>
                      <text x="110" y="50" fill={textMuted} fontSize="9" textAnchor="middle">50% Sperm</text>
                    </g>

                    {/* Mother gametes (100% X) */}
                    <g transform="translate(280, 30)">
                      <circle cx="30" cy="18" r="18" fill="#ec4899" />
                      <text x="30" y="24" fill="#831843" fontSize="15" fontWeight="900" textAnchor="middle">X</text>
                      <text x="30" y="50" fill={textMuted} fontSize="9" textAnchor="middle">100% Eggs</text>

                      <circle cx="110" cy="18" r="18" fill="#ec4899" />
                      <text x="110" y="24" fill="#831843" fontSize="15" fontWeight="900" textAnchor="middle">X</text>
                      <text x="110" y="50" fill={textMuted} fontSize="9" textAnchor="middle">100% Eggs</text>
                    </g>
                  </g>

                  {/* Fertilisation Cross Paths */}
                  <g transform="translate(0, 275)">
                    <rect width="450" height="150" rx="14" fill={isDark ? "rgba(236, 72, 153, 0.08)" : "#fdf2f8"} stroke="#ec4899" strokeWidth="1.5" />
                    <text x="16" y="24" fill="#ec4899" fontSize="11" fontWeight="800">OFFSPRING POSSIBILITIES (F1 ZYGOTE):</text>

                    {/* 4 Outcome Pills */}
                    <g transform="translate(20, 42)">
                      {/* X + X = Female */}
                      <g transform="translate(0, 0)">
                        <rect width="190" height="42" rx="8" fill={labelBg} stroke="#ec4899" strokeWidth="1.5" />
                        <text x="12" y="26" fill="#ec4899" fontSize="13" fontWeight="900">X + X ➔ XX (Girl)</text>
                      </g>

                      {/* X + X = Female */}
                      <g transform="translate(210, 0)">
                        <rect width="190" height="42" rx="8" fill={labelBg} stroke="#ec4899" strokeWidth="1.5" />
                        <text x="12" y="26" fill="#ec4899" fontSize="13" fontWeight="900">X + X ➔ XX (Girl)</text>
                      </g>

                      {/* Y + X = Male */}
                      <g transform="translate(0, 52)">
                        <rect width="190" height="42" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
                        <text x="12" y="26" fill="#38bdf8" fontSize="13" fontWeight="900">Y + X ➔ XY (Boy)</text>
                      </g>

                      {/* Y + X = Male */}
                      <g transform="translate(210, 52)">
                        <rect width="190" height="42" rx="8" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5" />
                        <text x="12" y="26" fill="#38bdf8" fontSize="13" fontWeight="900">Y + X ➔ XY (Boy)</text>
                      </g>
                    </g>
                  </g>
                </g>

                {/* Right: Critical Board Explanation & Examiner Trap */}
                <g transform="translate(500, 10)">
                  {/* Probability Card */}
                  <rect width="420" height="110" rx="14" fill={labelBg} stroke="#10b981" strokeWidth="2" />
                  <text x="20" y="28" fill="#10b981" fontSize="13" fontWeight="800">
                    EXACT 50 : 50 PROBABILITY AT EVERY CONCEPTION
                  </text>
                  <text x="20" y="52" fill={textPrimary} fontSize="11" fontWeight="700">
                    • Probability of Female Child (XX) = 50% (1 in 2)
                  </text>
                  <text x="20" y="72" fill={textPrimary} fontSize="11" fontWeight="700">
                    • Probability of Male Child (XY) = 50% (1 in 2)
                  </text>
                  <text x="20" y="94" fill={textMuted} fontSize="9.5">
                    • Sex ratio at birth in human populations remains mathematically 1 : 1.
                  </text>

                  {/* CRITICAL EXAMINER ALERT (Hallmark CBSE Social & Scientific Question) */}
                  <g transform="translate(0, 130)">
                    <rect width="420" height="190" rx="14" fill={isDark ? "rgba(239, 68, 68, 0.15)" : "#fef2f2"} stroke="#ef4444" strokeWidth="2" />
                    <text x="20" y="28" fill="#ef4444" fontSize="12" fontWeight="800">
                      ⚠️ CBSE BOARD EXAMINER FAVORITE QUESTION:
                    </text>
                    <text x="20" y="48" fill="#f87171" fontSize="10.5" fontWeight="800">
                      "Why are mothers falsely blamed for delivering girl children?"
                    </text>
                    <text x="20" y="72" fill={textPrimary} fontSize="10" fontWeight="600">
                      1. All human females produce ONLY ONE type of ovum: containing 'X'.
                    </text>
                    <text x="20" y="90" fill={textPrimary} fontSize="10" fontWeight="600">
                      2. Human males are HETEROGAMETIC: producing 50% X and 50% Y sperms.
                    </text>
                    <text x="20" y="112" fill={isDark ? "#fecaca" : "#7f1d1d"} fontSize="10" fontWeight="700">
                      3. If sperm with 'X' fertilises egg ➔ Female child (XX).
                    </text>
                    <text x="20" y="130" fill={isDark ? "#fecaca" : "#7f1d1d"} fontSize="10" fontWeight="700">
                      4. If sperm with 'Y' fertilises egg ➔ Male child (XY).
                    </text>
                    <text x="20" y="156" fill="#ef4444" fontSize="11" fontWeight="900">
                      ★ CONCLUSION: The father's sperm SOLELY determines child sex!
                    </text>
                  </g>

                  {/* Summary Box */}
                  <g transform="translate(0, 340)">
                    <rect width="420" height="85" rx="12" fill={labelBg} stroke={labelBorder} strokeWidth="1.5" />
                    <text x="20" y="26" fill="#38bdf8" fontSize="11.5" fontWeight="800">
                      ENVIRONMENTAL SEX DETERMINATION CONTRAST:
                    </text>
                    <text x="20" y="48" fill={textPrimary} fontSize="9.5">
                      • In reptiles (turtles, lizards), incubating temperature determines sex.
                    </text>
                    <text x="20" y="66" fill={textMuted} fontSize="9.5">
                      • In snails, individuals can change sex (not genetically determined).
                    </text>
                  </g>
                </g>
              </g>
            )}
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
