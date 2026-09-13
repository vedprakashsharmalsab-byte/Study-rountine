"use client";

import React, { useState } from "react";
import { ZoomIn, ZoomOut, Maximize2, X, Sparkles, Award } from "lucide-react";

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

  const labelBg = isDark ? "rgba(8, 12, 28, 0.94)" : "rgba(255,255,255,0.97)";
  const labelBorder = isDark ? "rgba(56,189,248,0.18)" : "rgba(2,132,199,0.18)";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const gridStroke = isDark ? "rgba(148,163,184,0.06)" : "rgba(0,0,0,0.04)";

  const renderSVG = () => {
    switch (id) {

      // =====================================================================
      // 1. HUMAN HEART — CORONAL SECTION (Highly Detailed)
      // =====================================================================
      case "bio_heart":
      case "bio_heart_double_circulation":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              {/* Gradients */}
              <radialGradient id="hBgGrad" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#1a0a0e" : "#fff0f0"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#fef2f2"} />
              </radialGradient>
              <linearGradient id="hMyo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9f1239" />
                <stop offset="40%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
              <linearGradient id="hRA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="hRV" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#075985" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="hLA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#9f1239" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="hLV" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#9f1239" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="hAorta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="hPulArt" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="hShadow">
                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
              </filter>
              <filter id="hGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <marker id="hArrRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#f43f5e" />
              </marker>
              <marker id="hArrBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Background */}
            <rect width="960" height="600" fill="url(#hBgGrad)" rx="18" />

            {/* Background grid */}
            {[...Array(12)].map((_,i) => <line key={"hg"+i} x1={80*i} y1="0" x2={80*i} y2="600" stroke={gridStroke} strokeWidth="1"/>)}
            {[...Array(8)].map((_,i) => <line key={"hgh"+i} x1="0" y1={75*i} x2="960" y2={75*i} stroke={gridStroke} strokeWidth="1"/>)}

            {/* ── GREAT VESSELS ── */}
            {/* Superior Vena Cava */}
            <path d="M 345 30 L 345 175 Q 345 200 368 210" fill="none" stroke="#0369a1" strokeWidth="30" strokeLinecap="round"/>
            {/* Inferior Vena Cava */}
            <path d="M 360 450 L 360 350" fill="none" stroke="#0369a1" strokeWidth="28" strokeLinecap="round"/>
            {/* Pulmonary Trunk */}
            <path d="M 460 200 Q 455 115 400 88" fill="none" stroke="url(#hPulArt)" strokeWidth="28" strokeLinecap="round"/>
            <path d="M 400 88 L 310 72" fill="none" stroke="url(#hPulArt)" strokeWidth="20" strokeLinecap="round"/>
            <path d="M 400 88 L 550 80" fill="none" stroke="url(#hPulArt)" strokeWidth="20" strokeLinecap="round"/>
            {/* Aortic Arch */}
            <path d="M 490 195 Q 498 65 450 40 Q 405 30 398 78" fill="none" stroke="url(#hAorta)" strokeWidth="36" strokeLinecap="round"/>
            {/* Arch Branches (brachiocephalic, common carotid, subclavian) */}
            <path d="M 432 42 L 422 8" stroke="#f43f5e" strokeWidth="11" strokeLinecap="round"/>
            <path d="M 452 36 L 452 5" stroke="#f43f5e" strokeWidth="10" strokeLinecap="round"/>
            <path d="M 472 42 L 484 10" stroke="#f43f5e" strokeWidth="10" strokeLinecap="round"/>
            {/* Pulmonary Veins (4x, oxygenated = red) */}
            <path d="M 590 175 L 655 162" stroke="#ef4444" strokeWidth="16" strokeLinecap="round"/>
            <path d="M 588 200 L 660 195" stroke="#ef4444" strokeWidth="16" strokeLinecap="round"/>
            <path d="M 335 175 L 278 168" stroke="#ef4444" strokeWidth="14" strokeLinecap="round"/>
            <path d="M 335 200 L 278 195" stroke="#ef4444" strokeWidth="14" strokeLinecap="round"/>
            {/* Coronary Arteries */}
            <path d="M 490 240 Q 540 250 555 310 Q 558 360 530 400" fill="none" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
            <path d="M 440 240 Q 400 255 390 310 Q 380 370 400 430" fill="none" stroke="#f43f5e" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>

            {/* ── HEART BODY ── */}
            <path
              d="M 470 120 C 385 115 285 158 278 268 C 272 400 400 505 478 548 C 552 505 668 400 662 268 C 656 158 555 115 470 120 Z"
              fill="url(#hMyo)" stroke="#e11d48" strokeWidth="5" filter="url(#hShadow)"
            />

            {/* ── CHAMBERS ── */}
            {/* Right Atrium */}
            <path d="M 315 215 C 315 178 390 178 398 225 C 402 265 340 290 315 215 Z" fill="url(#hRA)" stroke="#0284c7" strokeWidth="3"/>
            {/* Right Ventricle */}
            <path d="M 330 305 C 336 278 415 278 428 315 C 442 390 390 458 425 475 C 395 475 325 430 330 305 Z" fill="url(#hRV)" stroke="#0284c7" strokeWidth="3.5"/>
            {/* Left Atrium */}
            <path d="M 545 215 C 545 178 475 178 468 225 C 464 265 530 290 545 215 Z" fill="url(#hLA)" stroke="#e11d48" strokeWidth="3"/>
            {/* Left Ventricle (thickest wall 3x) */}
            <path d="M 530 305 C 524 278 455 278 445 315 C 432 390 462 460 470 510 C 512 480 545 430 530 305 Z" fill="url(#hLV)" stroke="#e11d48" strokeWidth="5"/>
            {/* Interventricular Septum */}
            <path d="M 435 240 L 435 520 C 448 520 452 390 452 240 Z" fill="#881337" stroke="#fb7185" strokeWidth="2.5"/>

            {/* ── VALVES ── */}
            {/* Tricuspid (RA→RV) */}
            <line x1="348" y1="290" x2="400" y2="302" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
            <path d="M 355 295 L 357 340 M 390 300 L 393 340" stroke="#fde68a" strokeWidth="2" strokeDasharray="3,2"/>
            {/* Pulmonary Semilunar */}
            <path d="M 448 200 Q 455 185 462 200" fill="none" stroke="#fbbf24" strokeWidth="4"/>
            {/* Mitral/Bicuspid (LA→LV) */}
            <line x1="460" y1="302" x2="512" y2="290" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
            <path d="M 467 300 L 465 340 M 503 295 L 498 340" stroke="#fde68a" strokeWidth="2" strokeDasharray="3,2"/>
            {/* Aortic Semilunar */}
            <path d="M 498 200 Q 505 185 512 200" fill="none" stroke="#fbbf24" strokeWidth="4"/>

            {/* ── SA & AV NODE MARKERS ── */}
            <circle cx="340" cy="195" r="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.9"/>
            <text x="300" y="192" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">SA</text>
            <circle cx="420" cy="290" r="6" fill="#a3e635" stroke="#84cc16" strokeWidth="2" opacity="0.9"/>
            <text x="380" y="288" fill="#a3e635" fontSize="8" fontWeight="bold" textAnchor="middle">AV</text>

            {/* ── FLOW ARROWS ── */}
            <path d="M 345 60 L 345 170" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#hArrBlue)"/>
            <path d="M 375 245 L 378 305" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#hArrBlue)"/>
            <path d="M 450 30 L 440 78" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#hArrRed)"/>
            <path d="M 540 185 L 530 250" stroke="#ef4444" strokeWidth="3" markerEnd="url(#hArrRed)"/>

            {/* ── CALLOUT LABELS (left side: blue vessels) ── */}
            {/* 1. Superior Vena Cava */}
            <g transform="translate(22, 30)">
              <rect x="0" y="0" width="188" height="52" rx="10" fill={labelBg} stroke="#0369a1" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="12" fontWeight="900">Superior Vena Cava</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Deox blood from upper body → RA</text>
              <circle cx="188" cy="26" r="4" fill="#38bdf8"/>
              <line x1="188" y1="26" x2="338" y2="65" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 2. Pulmonary Artery */}
            <g transform="translate(18, 102)">
              <rect x="0" y="0" width="188" height="52" rx="10" fill={labelBg} stroke="#0284c7" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="12" fontWeight="900">Pulmonary Artery</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Deox blood → lungs (only artery)</text>
              <circle cx="188" cy="26" r="4" fill="#38bdf8"/>
              <line x1="188" y1="26" x2="370" y2="112" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 3. Right Atrium */}
            <g transform="translate(22, 195)">
              <rect x="0" y="0" width="188" height="52" rx="10" fill={labelBg} stroke="#0284c7" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="12" fontWeight="900">Right Atrium</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Thin-walled; tricuspid valve below</text>
              <circle cx="188" cy="26" r="4" fill="#38bdf8"/>
              <line x1="188" y1="26" x2="318" y2="240" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 4. Right Ventricle */}
            <g transform="translate(22, 310)">
              <rect x="0" y="0" width="188" height="52" rx="10" fill={labelBg} stroke="#0284c7" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="12" fontWeight="900">Right Ventricle</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Pumps to pulmonary trunk (low P)</text>
              <circle cx="188" cy="26" r="4" fill="#38bdf8"/>
              <line x1="188" y1="26" x2="338" y2="360" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 5. Inferior Vena Cava */}
            <g transform="translate(22, 435)">
              <rect x="0" y="0" width="188" height="52" rx="10" fill={labelBg} stroke="#0284c7" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="12" fontWeight="900">Inferior Vena Cava</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Deox blood from lower body → RA</text>
              <circle cx="188" cy="26" r="4" fill="#38bdf8"/>
              <line x1="188" y1="26" x2="358" y2="445" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* ── CALLOUT LABELS (right side: red vessels) ── */}
            {/* 6. Aortic Arch */}
            <g transform="translate(685, 22)">
              <rect x="0" y="0" width="200" height="52" rx="10" fill={labelBg} stroke="#ef4444" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f43f5e" fontSize="12" fontWeight="900">Aorta (Systemic)</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Highest pressure vessel (120 mmHg)</text>
              <circle cx="0" cy="26" r="4" fill="#f43f5e"/>
              <line x1="0" y1="26" x2="-205" y2="50" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 7. Pulmonary Veins */}
            <g transform="translate(688, 128)">
              <rect x="0" y="0" width="200" height="52" rx="10" fill={labelBg} stroke="#ef4444" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f43f5e" fontSize="12" fontWeight="900">Pulmonary Veins (×4)</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Oxygenated blood → LA (exception!)</text>
              <circle cx="0" cy="26" r="4" fill="#f43f5e"/>
              <line x1="0" y1="26" x2="-38" y2="178" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 8. Left Atrium */}
            <g transform="translate(690, 228)">
              <rect x="0" y="0" width="200" height="52" rx="10" fill={labelBg} stroke="#e11d48" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f43f5e" fontSize="12" fontWeight="900">Left Atrium</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Bicuspid/Mitral valve; ox. blood</text>
              <circle cx="0" cy="26" r="4" fill="#f43f5e"/>
              <line x1="0" y1="26" x2="-148" y2="240" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 9. Left Ventricle */}
            <g transform="translate(688, 332)">
              <rect x="0" y="0" width="200" height="62" rx="10" fill={labelBg} stroke="#be123c" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f43f5e" fontSize="12" fontWeight="900">Left Ventricle (Thick)</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">3× thicker wall — pumps to body</text>
              <text x="12" y="48" fill="#10b981" fontSize="9" fontWeight="bold">★ CBSE Board Distinction</text>
              <circle cx="0" cy="31" r="4" fill="#f43f5e"/>
              <line x1="0" y1="31" x2="-158" y2="380" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            {/* 10. Coronary Arteries */}
            <g transform="translate(688, 440)">
              <rect x="0" y="0" width="200" height="52" rx="10" fill={labelBg} stroke="#fb7185" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#fb7185" fontSize="12" fontWeight="900">Coronary Arteries</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Supply O₂ to heart muscle itself</text>
              <circle cx="0" cy="26" r="4" fill="#fb7185"/>
              <line x1="0" y1="26" x2="-155" y2="370" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* Septum Label */}
            <text x="436" y="395" fill="#fb7185" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(-90,436,395)">Muscular Septum</text>
            <text x="446" y="395" fill={textMuted} fontSize="8" textAnchor="middle" transform="rotate(-90,446,395)">Prevents O₂/CO₂ mix</text>

            {/* ── CBSE KEY FACT BANNER ── */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Double Circulation = Pulmonary Loop (Heart↔Lungs) + Systemic Loop (Heart↔Body)
            </text>
          </svg>
        );

      // =====================================================================
      // 2. HUMAN RESPIRATORY SYSTEM & ALVEOLAR GAS EXCHANGE
      // =====================================================================
      case "bio_respiratory_system":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="rBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#0d1424" : "#f0f9ff"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#e0f2fe"} />
              </radialGradient>
              <linearGradient id="rLung" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="rTrachea" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1"/>
                <stop offset="50%" stopColor="#f8fafc"/>
                <stop offset="100%" stopColor="#94a3b8"/>
              </linearGradient>
              <filter id="rShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.4"/>
              </filter>
              <radialGradient id="rAlv" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.4"/>
              </radialGradient>
            </defs>
            <rect width="960" height="600" fill="url(#rBg)" rx="18"/>

            {/* ── NASAL CAVITY & PHARYNX ── */}
            <path d="M 430 28 Q 430 12 480 10 Q 530 12 530 28 L 530 65 Q 530 80 480 82 Q 430 80 430 65 Z" fill={isDark ? "rgba(148,163,184,0.3)" : "rgba(203,213,225,0.6)"} stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="2"/>
            <text x="480" y="50" fill={textMuted} fontSize="10" textAnchor="middle" fontWeight="bold">NASAL CAVITY</text>
            {/* Pharynx */}
            <rect x="455" y="82" width="50" height="40" rx="6" fill={isDark ? "rgba(148,163,184,0.25)" : "rgba(203,213,225,0.5)"} stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="2"/>
            <text x="480" y="107" fill={textMuted} fontSize="9" textAnchor="middle">Pharynx</text>
            {/* Larynx/Voice box */}
            <path d="M 462 122 L 462 150 L 498 150 L 498 122 Q 498 112 480 110 Q 462 112 462 122 Z" fill={isDark ? "rgba(250,204,21,0.2)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="480" y="136" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="bold">Larynx</text>

            {/* ── TRACHEA with C-rings ── */}
            <rect x="466" y="150" width="28" height="110" rx="4" fill="url(#rTrachea)" stroke="#94a3b8" strokeWidth="2"/>
            {[160,172,184,196,208,220,232,244].map((y,i) => (
              <path key={"tc"+i} d={`M 466 ${y} Q 454 ${y+6} 466 ${y+12}`} fill="none" stroke={isDark ? "#64748b" : "#94a3b8"} strokeWidth="3" strokeLinecap="round"/>
            ))}
            <text x="438" y="208" fill={textMuted} fontSize="8.5" textAnchor="end">C-shaped</text>
            <text x="438" y="219" fill={textMuted} fontSize="8.5" textAnchor="end">cartilage</text>
            <text x="438" y="230" fill={textMuted} fontSize="8.5" textAnchor="end">rings</text>

            {/* ── BRONCHI BIFURCATION ── */}
            <path d="M 466 260 Q 420 265 352 305" fill="none" stroke="#94a3b8" strokeWidth="16" strokeLinecap="round"/>
            <path d="M 494 260 Q 540 265 608 305" fill="none" stroke="#94a3b8" strokeWidth="16" strokeLinecap="round"/>
            {/* Secondary bronchi */}
            <path d="M 352 305 Q 310 330 290 370" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round"/>
            <path d="M 352 305 Q 345 345 330 385" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round"/>
            <path d="M 608 305 Q 650 330 670 370" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round"/>
            <path d="M 608 305 Q 615 345 630 385" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round"/>
            {/* Bronchioles */}
            <path d="M 290 370 Q 270 400 260 430" fill="none" stroke={isDark?"#64748b":"#94a3b8"} strokeWidth="5" strokeLinecap="round"/>
            <path d="M 330 385 Q 320 415 315 445" fill="none" stroke={isDark?"#64748b":"#94a3b8"} strokeWidth="4" strokeLinecap="round"/>
            <path d="M 670 370 Q 690 400 700 430" fill="none" stroke={isDark?"#64748b":"#94a3b8"} strokeWidth="5" strokeLinecap="round"/>
            <path d="M 630 385 Q 640 415 645 445" fill="none" stroke={isDark?"#64748b":"#94a3b8"} strokeWidth="4" strokeLinecap="round"/>

            {/* ── LUNGS (body outlines) ── */}
            <path d="M 250 300 C 200 290 150 320 145 390 C 140 450 180 520 270 540 C 330 555 385 545 400 520 C 410 500 420 470 415 440 C 405 395 380 350 360 315 C 345 295 290 305 250 300 Z"
              fill="url(#rLung)" stroke={isDark ? "#f9a8d4" : "#ec4899"} strokeWidth="3" filter="url(#rShadow)" opacity="0.9"/>
            <path d="M 710 300 C 760 290 810 320 815 390 C 820 450 780 520 690 540 C 630 555 575 545 560 520 C 550 500 540 470 545 440 C 555 395 580 350 600 315 C 615 295 670 305 710 300 Z"
              fill="url(#rLung)" stroke={isDark ? "#f9a8d4" : "#ec4899"} strokeWidth="3" filter="url(#rShadow)" opacity="0.9"/>
            {/* Lung lobe lines */}
            <path d="M 205 350 Q 250 380 270 430" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6"/>
            <path d="M 300 310 Q 350 360 375 430" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6"/>
            <path d="M 755 350 Q 710 380 690 430" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6"/>
            <path d="M 660 310 Q 610 360 585 430" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.6"/>

            {/* ── DIAPHRAGM ── */}
            <path d="M 150 548 Q 300 530 480 540 Q 660 530 810 548" fill="none" stroke={isDark ? "#64748b" : "#94a3b8"} strokeWidth="8" strokeLinecap="round"/>
            <text x="480" y="568" fill={textMuted} fontSize="10" textAnchor="middle" fontWeight="bold">Diaphragm (contracts → air in; relaxes → air out)</text>

            {/* ── ALVEOLI INSET BOX ── */}
            <rect x="340" y="400" width="280" height="145" rx="14" fill={isDark ? "rgba(8,12,28,0.92)" : "rgba(240,249,255,0.97)"} stroke="#10b981" strokeWidth="2"/>
            <text x="480" y="420" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">Alveolar Gas Exchange (INSET)</text>
            {/* Alveolar sacs */}
            {[[380,448],[410,445],[438,450],[466,445],[494,448],[415,475],[445,472],[472,477]].map(([cx,cy],i) =>
              <circle key={"alv"+i} cx={cx} cy={cy} r="15" fill="url(#rAlv)" stroke="#4ade80" strokeWidth="1.5" opacity="0.9"/>
            )}
            {/* Capillary net */}
            <path d="M 365 460 Q 430 455 500 460 Q 570 455 605 460" fill="none" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
            <path d="M 365 468 Q 430 472 500 468 Q 570 472 605 468" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
            {/* Gas arrows */}
            <text x="395" y="498" fill="#38bdf8" fontSize="9" fontWeight="bold">O₂→</text>
            <text x="440" y="498" fill="#f87171" fontSize="9" fontWeight="bold">←CO₂</text>
            <text x="490" y="498" fill="#38bdf8" fontSize="9" fontWeight="bold">O₂→</text>
            <text x="535" y="498" fill="#f87171" fontSize="9" fontWeight="bold">←CO₂</text>
            <text x="420" y="518" fill={textMuted} fontSize="8.5" textAnchor="middle">Diffusion across 1-cell-thick wall</text>
            <text x="545" y="518" fill={textMuted} fontSize="8.5" textAnchor="middle">(Large surface area!)</text>

            {/* ── CALLOUT LABELS ── */}
            <g transform="translate(16, 22)">
              <rect x="0" y="0" width="205" height="52" rx="9" fill={labelBg} stroke="#94a3b8" strokeWidth="1.5"/>
              <text x="12" y="18" fill={textPrimary} fontSize="11" fontWeight="900">Nasal Cavity</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Warms, moistens, filters air</text>
              <circle cx="205" cy="26" r="3.5" fill="#94a3b8"/>
              <line x1="205" y1="26" x2="430" y2="50" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(16, 90)">
              <rect x="0" y="0" width="205" height="52" rx="9" fill={labelBg} stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#fbbf24" fontSize="11" fontWeight="900">Larynx / Voice Box</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Epiglottis prevents food entry</text>
              <circle cx="205" cy="26" r="3.5" fill="#fbbf24"/>
              <line x1="205" y1="26" x2="462" y2="135" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(16, 175)">
              <rect x="0" y="0" width="205" height="52" rx="9" fill={labelBg} stroke="#38bdf8" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#38bdf8" fontSize="11" fontWeight="900">Trachea</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">C-rings prevent collapse; 12 cm long</text>
              <circle cx="205" cy="26" r="3.5" fill="#38bdf8"/>
              <line x1="205" y1="26" x2="466" y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(736, 175)">
              <rect x="0" y="0" width="205" height="52" rx="9" fill={labelBg} stroke="#ec4899" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#ec4899" fontSize="11" fontWeight="900">Bronchi &amp; Bronchioles</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Bronchioles lack cartilage rings</text>
              <circle cx="0" cy="26" r="3.5" fill="#ec4899"/>
              <line x1="0" y1="26" x2="-118" y2="285" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(728, 280)">
              <rect x="0" y="0" width="210" height="52" rx="9" fill={labelBg} stroke="#f9a8d4" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f9a8d4" fontSize="11" fontWeight="900">Lungs (3+2 lobes)</text>
              <text x="12" y="33" fill={textMuted} fontSize="9.5">Right = 3 lobes; Left = 2 lobes</text>
              <circle cx="0" cy="26" r="3.5" fill="#f9a8d4"/>
              <line x1="0" y1="26" x2="-130" y2="200" stroke="#f9a8d4" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Alveoli = tiny air sacs with 1-cell-thick walls → max surface area for O₂/CO₂ diffusion
            </text>
          </svg>
        );

      // =====================================================================
      // 3. NEPHRON — STRUCTURE & URINE FORMATION
      // =====================================================================
      case "bio_nephron_excretory":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="nBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#0d1a14" : "#f0fdf4"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#dcfce7"} />
              </radialGradient>
              <radialGradient id="nGlom" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fca5a5"/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.5"/>
              </radialGradient>
              <linearGradient id="nTubule" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a3e635" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.5"/>
              </linearGradient>
              <filter id="nShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.4"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#nBg)" rx="18"/>

            {/* ── KIDNEY OUTLINE (right side silhouette) ── */}
            <path d="M 750 80 C 820 80 880 150 880 300 C 880 450 820 520 750 520 C 680 520 660 460 660 380 C 660 330 680 290 660 250 C 640 210 680 80 750 80 Z"
              fill={isDark ? "rgba(239,68,68,0.12)" : "rgba(254,226,226,0.6)"} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6,3"/>
            <text x="770" y="310" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle" opacity="0.5">KIDNEY</text>
            <text x="770" y="325" fill="#ef4444" fontSize="9" textAnchor="middle" opacity="0.4">cortex / medulla</text>

            {/* ── BOWMAN'S CAPSULE ── */}
            <circle cx="240" cy="110" r="55" fill={isDark ? "rgba(96,165,250,0.15)" : "rgba(219,234,254,0.7)"} stroke="#3b82f6" strokeWidth="2.5"/>
            <circle cx="240" cy="110" r="32" fill="url(#nGlom)" filter="url(#nShadow)"/>
            <text x="240" y="113" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Glomerulus</text>
            <text x="240" y="176" fill="#3b82f6" fontSize="9" fontWeight="bold" textAnchor="middle">Bowman's Capsule</text>
            {/* Afferent arteriole */}
            <path d="M 178 78 Q 200 90 210 105" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round"/>
            <text x="148" y="72" fill="#ef4444" fontSize="9" fontWeight="bold">Afferent</text>
            {/* Efferent arteriole */}
            <path d="M 270 108 Q 295 105 320 115" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round"/>
            <text x="312" y="104" fill="#f97316" fontSize="9" fontWeight="bold">Efferent</text>

            {/* ── PCT (Proximal Convoluted Tubule) ── */}
            <path d="M 280 145 Q 340 130 370 155 Q 400 180 360 210 Q 320 240 360 265 Q 400 290 355 320" fill="none" stroke="#4ade80" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="408" y="200" fill="#4ade80" fontSize="10" fontWeight="bold">PCT</text>
            <text x="408" y="213" fill={textMuted} fontSize="8.5">Reabsorbs glucose,</text>
            <text x="408" y="224" fill={textMuted} fontSize="8.5">amino acids, water</text>

            {/* ── LOOP OF HENLE ── */}
            {/* Descending limb */}
            <path d="M 355 320 Q 360 380 355 440 Q 352 490 360 510" fill="none" stroke="#38bdf8" strokeWidth="9" strokeLinecap="round"/>
            {/* Loop bottom */}
            <path d="M 360 510 Q 400 530 440 510" fill="none" stroke="#0284c7" strokeWidth="11" strokeLinecap="round"/>
            {/* Ascending limb */}
            <path d="M 440 510 Q 445 470 440 420 Q 438 370 448 320" fill="none" stroke="#818cf8" strokeWidth="9" strokeLinecap="round"/>
            <text x="505" y="440" fill="#38bdf8" fontSize="10" fontWeight="bold">Loop of Henle</text>
            <text x="310" y="425" fill="#38bdf8" fontSize="9">↓ Descending</text>
            <text x="310" y="438" fill={textMuted} fontSize="8.5">(permeable to H₂O)</text>
            <text x="452" y="425" fill="#818cf8" fontSize="9">↑ Ascending</text>
            <text x="452" y="438" fill={textMuted} fontSize="8.5">(impermeable H₂O)</text>

            {/* ── DCT (Distal Convoluted Tubule) ── */}
            <path d="M 448 320 Q 500 295 530 315 Q 560 340 520 370 Q 480 400 525 420 Q 565 440 540 465" fill="none" stroke="#c084fc" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="556" y="360" fill="#c084fc" fontSize="10" fontWeight="bold">DCT</text>
            <text x="556" y="373" fill={textMuted} fontSize="8.5">Secretion of urea,</text>
            <text x="556" y="384" fill={textMuted} fontSize="8.5">selective reabsorption</text>

            {/* ── COLLECTING DUCT ── */}
            <path d="M 540 465 Q 600 480 640 500 L 660 510" fill="none" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round"/>
            <text x="620" y="480" fill="#fbbf24" fontSize="10" fontWeight="bold">Collecting Duct</text>
            <text x="620" y="493" fill={textMuted} fontSize="8.5">→ Renal Pelvis → Ureter</text>

            {/* ── PERITUBULAR CAPILLARIES ── */}
            <path d="M 320 200 Q 350 240 330 290 Q 310 340 335 380" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,3" opacity="0.7"/>
            <path d="M 450 350 Q 480 390 465 430" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,3" opacity="0.7"/>
            <text x="302" y="345" fill="#ef4444" fontSize="8.5" textAnchor="end">Peritubular</text>
            <text x="302" y="358" fill="#ef4444" fontSize="8.5" textAnchor="end">Capillaries</text>

            {/* ── CALLOUT LABELS ── */}
            <g transform="translate(16, 60)">
              <rect x="0" y="0" width="155" height="42" rx="8" fill={labelBg} stroke="#3b82f6" strokeWidth="1.5"/>
              <text x="10" y="16" fill="#3b82f6" fontSize="11" fontWeight="900">Bowman's Capsule</text>
              <text x="10" y="30" fill={textMuted} fontSize="9">Filtration under pressure</text>
              <circle cx="155" cy="21" r="3.5" fill="#3b82f6"/>
              <line x1="155" y1="21" x2="183" y2="95" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(690, 108)">
              <rect x="0" y="0" width="210" height="62" rx="8" fill={labelBg} stroke="#4ade80" strokeWidth="1.5"/>
              <text x="10" y="18" fill="#4ade80" fontSize="11" fontWeight="900">3 Processes:</text>
              <text x="10" y="32" fill={textMuted} fontSize="9">1. Filtration (Bowman's)</text>
              <text x="10" y="45" fill={textMuted} fontSize="9">2. Reabsorption (PCT, DCT)</text>
              <text x="10" y="58" fill={textMuted} fontSize="9">3. Secretion (DCT)</text>
            </g>
            <g transform="translate(690, 200)">
              <rect x="0" y="0" width="210" height="52" rx="8" fill={labelBg} stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="10" y="18" fill="#fbbf24" fontSize="11" fontWeight="900">Urine Composition</text>
              <text x="10" y="33" fill={textMuted} fontSize="9">Water, urea, uric acid, salts</text>
              <text x="10" y="45" fill={textMuted} fontSize="9">No glucose/proteins (if healthy)</text>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Glomerulus ultrafiltration → selective reabsorption in tubules → urine concentrates
            </text>
          </svg>
        );

      // =====================================================================
      // 4. HUMAN ALIMENTARY CANAL (Digestive System)
      // =====================================================================
      case "bio_alimentary_canal":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="alBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#1a100a" : "#fff7ed"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#fef3c7"} />
              </radialGradient>
              <linearGradient id="alGut" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4"/>
              </linearGradient>
              <filter id="alShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.4"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#alBg)" rx="18"/>

            {/* ── GI TRACT ── */}
            {/* Mouth/Oral cavity */}
            <ellipse cx="480" cy="45" rx="55" ry="28" fill={isDark ? "rgba(251,191,36,0.2)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="2.5"/>
            <text x="480" y="49" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">Mouth (Buccal Cavity)</text>
            {/* Oesophagus */}
            <path d="M 452 73 L 452 148" stroke="#f59e0b" strokeWidth="18" strokeLinecap="round"/>
            <path d="M 508 73 L 508 148" stroke="#fbbf24" strokeWidth="18" strokeLinecap="round"/>
            <text x="540" y="112" fill="#f59e0b" fontSize="10" fontWeight="bold">Oesophagus</text>
            <text x="540" y="125" fill={textMuted} fontSize="8.5">(Peristalsis moves food)</text>
            {/* Stomach */}
            <path d="M 435 148 Q 380 160 355 210 Q 335 260 370 310 Q 400 345 455 355 Q 510 355 525 300 Q 540 245 520 195 Q 508 155 508 148 Z"
              fill={isDark ? "rgba(249,115,22,0.3)" : "rgba(254,215,170,0.8)"} stroke="#f97316" strokeWidth="2.5" filter="url(#alShadow)"/>
            <text x="440" y="250" fill="#f97316" fontSize="12" fontWeight="900" textAnchor="middle">Stomach</text>
            <text x="440" y="265" fill={textMuted} fontSize="9" textAnchor="middle">HCl + pepsin</text>
            <text x="440" y="278" fill={textMuted} fontSize="9" textAnchor="middle">pH 1.5–2 (acidic)</text>
            {/* Small Intestine (duodenum+jejunum+ileum) */}
            <path d="M 455 355 Q 500 370 520 410 Q 545 450 510 480 Q 475 510 440 490 Q 405 470 380 500 Q 355 530 370 558" fill="none" stroke="#f59e0b" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="575" y="450" fill="#f59e0b" fontSize="10" fontWeight="bold">Small Intestine</text>
            <text x="575" y="463" fill={textMuted} fontSize="8.5">(6–7 m; villi for absorption)</text>
            {/* Large Intestine */}
            <path d="M 370 558 Q 290 570 255 520 Q 230 470 255 415 Q 280 360 255 305 Q 235 260 275 230" fill="none" stroke="#92400e" strokeWidth="22" strokeLinecap="round"/>
            <text x="120" y="400" fill="#92400e" fontSize="10" fontWeight="bold">Large Intestine</text>
            <text x="120" y="413" fill={textMuted} fontSize="8.5">(Water reabsorption)</text>
            {/* Appendix */}
            <path d="M 255 230 Q 220 215 210 238" fill="none" stroke="#92400e" strokeWidth="8" strokeLinecap="round"/>
            <text x="168" y="220" fill={textMuted} fontSize="8.5">Appendix</text>
            {/* Rectum + Anus */}
            <path d="M 370 558 Q 425 575 430 585" fill="none" stroke="#78350f" strokeWidth="14" strokeLinecap="round"/>
            <circle cx="430" cy="585" r="8" fill="#78350f"/>
            <text x="455" y="590" fill={textMuted} fontSize="9">Anus</text>

            {/* ── ACCESSORY ORGANS ── */}
            {/* Liver */}
            <path d="M 570 155 Q 680 145 710 200 Q 720 235 690 255 Q 650 270 600 265 Q 560 260 550 230 Q 540 200 570 155 Z"
              fill={isDark ? "rgba(239,68,68,0.25)" : "rgba(254,202,202,0.7)"} stroke="#ef4444" strokeWidth="2.5" filter="url(#alShadow)"/>
            <text x="635" y="205" fill="#ef4444" fontSize="12" fontWeight="900" textAnchor="middle">LIVER</text>
            <text x="635" y="220" fill={textMuted} fontSize="8.5" textAnchor="middle">Bile → emulsifies fats</text>
            {/* Gall Bladder */}
            <ellipse cx="680" cy="275" rx="28" ry="18" fill={isDark ? "rgba(16,185,129,0.3)" : "rgba(209,250,229,0.9)"} stroke="#10b981" strokeWidth="2"/>
            <text x="680" y="279" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">Gall Bladder</text>
            {/* Bile duct */}
            <path d="M 680 293 Q 650 330 530 355" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="5,3"/>
            {/* Pancreas */}
            <path d="M 560 295 Q 640 285 700 300 Q 720 310 700 325 Q 640 335 560 320 Q 540 310 560 295 Z"
              fill={isDark ? "rgba(168,85,247,0.2)" : "rgba(243,232,255,0.8)"} stroke="#a855f7" strokeWidth="2.5"/>
            <text x="630" y="315" fill="#a855f7" fontSize="11" fontWeight="900" textAnchor="middle">PANCREAS</text>
            <text x="630" y="328" fill={textMuted} fontSize="8.5" textAnchor="middle">Amylase, lipase, trypsin</text>
            {/* Pancreatic duct */}
            <path d="M 560 310 Q 540 340 530 355" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="4,3"/>

            {/* Villus inset */}
            <rect x="686" y="355" width="248" height="175" rx="12" fill={isDark ? "rgba(8,12,28,0.93)" : "rgba(255,251,235,0.97)"} stroke="#f59e0b" strokeWidth="2"/>
            <text x="810" y="373" fill="#f59e0b" fontSize="11" fontWeight="900" textAnchor="middle">Villus (INSET)</text>
            {/* Villus shape */}
            <path d="M 770 510 Q 760 450 770 400 Q 780 380 810 375 Q 840 380 850 400 Q 858 450 850 510 Z"
              fill={isDark ? "rgba(251,191,36,0.15)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="2"/>
            {/* Blood capillary in villus */}
            <path d="M 810 400 Q 808 440 812 490" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
            {/* Lacteal */}
            <path d="M 820 400 Q 820 440 818 490" fill="none" stroke="#f0abfc" strokeWidth="3" strokeLinecap="round"/>
            <text x="856" y="420" fill="#ef4444" fontSize="8">Capillary</text>
            <text x="856" y="435" fill="#f0abfc" fontSize="8">Lacteal</text>
            <text x="856" y="450" fill={textMuted} fontSize="8">(absorbs fat)</text>
            <text x="856" y="476" fill={textMuted} fontSize="8">Villi increase</text>
            <text x="856" y="489" fill={textMuted} fontSize="8">surface area</text>

            {/* ── CALLOUT LABELS ── */}
            <g transform="translate(16, 30)">
              <rect x="0" y="0" width="210" height="52" rx="8" fill={labelBg} stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="10" y="18" fill="#fbbf24" fontSize="11" fontWeight="900">Salivary Glands (3 pairs)</text>
              <text x="10" y="33" fill={textMuted} fontSize="9">Salivary amylase → starch to maltose</text>
              <circle cx="210" cy="26" r="3.5" fill="#fbbf24"/>
              <line x1="210" y1="26" x2="424" y2="45" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Bile emulsifies fat; Pancreatic juice has 3 enzymes; Small intestine = absorption site
            </text>
          </svg>
        );

      // =====================================================================
      // 5. NEURON STRUCTURE & REFLEX ARC
      // =====================================================================
      case "bio_neuron_reflex_arc":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="neuBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#0d1422" : "#f0f4ff"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#e0e7ff"} />
              </radialGradient>
              <linearGradient id="neuAxon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8"/>
                <stop offset="100%" stopColor="#6366f1"/>
              </linearGradient>
              <linearGradient id="neuMyelin" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fde68a"/>
                <stop offset="100%" stopColor="#fbbf24"/>
              </linearGradient>
              <filter id="neuShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.4"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#neuBg)" rx="18"/>

            {/* ═══════ TOP HALF: NEURON STRUCTURE ═══════ */}
            <text x="480" y="28" fill={isDark ? "#e0e7ff" : "#312e81"} fontSize="13" fontWeight="900" textAnchor="middle">NEURON STRUCTURE (Myelinated Motor Neuron)</text>

            {/* Dendrites */}
            {[[-55,-38],[-30,-52],[-12,-60],[8,-60],[28,-52],[52,-38]].map(([dx,dy],i) => (
              <path key={"nd"+i} d={`M 175 115 Q ${175+dx*0.6} ${115+dy*0.5} ${175+dx} ${115+dy}`} fill="none" stroke="#818cf8" strokeWidth="5" strokeLinecap="round"/>
            ))}
            {/* Minor dendrite branches */}
            {[[-55,-38],[-30,-52],[52,-38]].map(([dx,dy],i) => (
              <path key={"nd2"+i} d={`M ${175+dx} ${115+dy} Q ${175+dx-12} ${115+dy-12} ${175+dx-6} ${115+dy-22}`} fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round"/>
            ))}
            {/* Cell body (soma) */}
            <circle cx="175" cy="115" r="45" fill={isDark ? "rgba(99,102,241,0.3)" : "rgba(199,210,254,0.7)"} stroke="#6366f1" strokeWidth="3" filter="url(#neuShadow)"/>
            <circle cx="175" cy="115" r="14" fill={isDark ? "rgba(139,92,246,0.6)" : "rgba(167,139,250,0.5)"} stroke="#7c3aed" strokeWidth="2"/>
            <text x="175" y="119" fill="#7c3aed" fontSize="8" fontWeight="bold" textAnchor="middle">Nucleus</text>
            <text x="175" y="170" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">Cell Body (Soma)</text>
            {/* Axon hillock */}
            <path d="M 218 115 Q 250 115 268 115" fill="none" stroke="#6366f1" strokeWidth="10" strokeLinecap="round"/>
            {/* Axon (myelinated segments) */}
            {[268,318,368,418,468,518,568,618,668].map((x,i) => (
              <rect key={"ms"+i} x={x} y="108" width="40" height="14" rx="6" fill="url(#neuMyelin)" stroke="#f59e0b" strokeWidth="1.5"/>
            ))}
            {/* Nodes of Ranvier (gaps) */}
            {[308,358,408,458,508,558,608,658].map((x,i) => (
              <rect key={"nr"+i} x={x} y="110" width="10" height="10" rx="2" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#818cf8" strokeWidth="1.5"/>
            ))}
            <path d="M 268 115 L 720 115" stroke="#818cf8" strokeWidth="6" strokeOpacity="0.5"/>
            {/* Terminal buttons / Synaptic knobs */}
            {[[720,98],[720,115],[720,132]].map(([x,y],i) => (
              <path key={"tb"+i} d={`M 720 115 Q ${720+(i-1)*8} ${y} ${730+(i-1)*8} ${y}`} fill="none" stroke="#818cf8" strokeWidth="4" strokeLinecap="round"/>
            ))}
            {[[730,92],[730,115],[730,138]].map(([x,y],i) => (
              <ellipse key={"kb"+i} cx={x} cy={y} rx="14" ry="8" fill={isDark ? "rgba(99,102,241,0.5)" : "rgba(199,210,254,0.8)"} stroke="#6366f1" strokeWidth="2"/>
            ))}
            {/* Synapse neurotransmitter dots */}
            {[[745,92],[748,115],[745,138]].map(([x,y],i) => (
              <React.Fragment key={"syn"+i}>
                {[[-3,-3],[3,-3],[0,4]].map(([ox,oy],j) =>
                  <circle key={j} cx={x+ox} cy={y+oy} r="2" fill="#a5b4fc"/>
                )}
              </React.Fragment>
            ))}

            {/* Neuron Labels */}
            <g transform="translate(80, 38)">
              <rect x="0" y="0" width="148" height="42" rx="8" fill={labelBg} stroke="#6366f1" strokeWidth="1.5"/>
              <text x="10" y="16" fill="#818cf8" fontSize="11" fontWeight="900">Dendrites</text>
              <text x="10" y="30" fill={textMuted} fontSize="9">Receive impulses → soma</text>
              <circle cx="148" cy="21" r="3.5" fill="#818cf8"/>
              <line x1="148" y1="21" x2="155" y2="75" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(400, 50)">
              <rect x="0" y="0" width="148" height="42" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5"/>
              <text x="10" y="16" fill="#f59e0b" fontSize="11" fontWeight="900">Myelin Sheath</text>
              <text x="10" y="30" fill={textMuted} fontSize="9">Schwann cells; insulation</text>
              <circle cx="0" cy="21" r="3.5" fill="#f59e0b"/>
              <line x1="0" y1="21" x2="-48" y2="108" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(554, 50)">
              <rect x="0" y="0" width="148" height="42" rx="8" fill={labelBg} stroke="#818cf8" strokeWidth="1.5"/>
              <text x="10" y="16" fill="#818cf8" fontSize="11" fontWeight="900">Node of Ranvier</text>
              <text x="10" y="30" fill={textMuted} fontSize="9">Gap; saltatory conduction</text>
              <circle cx="0" cy="21" r="3.5" fill="#818cf8"/>
              <line x1="0" y1="21" x2="-86" y2="110" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(716, 50)">
              <rect x="0" y="0" width="180" height="42" rx="8" fill={labelBg} stroke="#6366f1" strokeWidth="1.5"/>
              <text x="10" y="16" fill="#6366f1" fontSize="11" fontWeight="900">Synaptic Knobs</text>
              <text x="10" y="30" fill={textMuted} fontSize="9">Release neurotransmitters</text>
              <circle cx="0" cy="21" r="3.5" fill="#6366f1"/>
              <line x1="0" y1="21" x2="-24" y2="108" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* ═══════ BOTTOM HALF: REFLEX ARC ═══════ */}
            <line x1="30" y1="200" x2="930" y2="200" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" strokeDasharray="8,4"/>
            <text x="480" y="228" fill={isDark ? "#e0e7ff" : "#312e81"} fontSize="13" fontWeight="900" textAnchor="middle">REFLEX ARC (Spinal Cord Pathway)</text>

            {/* Stimulus (pin) */}
            <circle cx="80" cy="420" r="22" fill={isDark ? "rgba(239,68,68,0.2)" : "rgba(254,226,226,0.8)"} stroke="#ef4444" strokeWidth="2.5"/>
            <text x="80" y="416" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">STIMULUS</text>
            <text x="80" y="430" fill="#ef4444" fontSize="9" textAnchor="middle">(pin/heat)</text>

            {/* Receptor */}
            <ellipse cx="170" cy="430" rx="30" ry="18" fill={isDark ? "rgba(251,191,36,0.2)" : "rgba(254,243,199,0.7)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="170" y="428" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Receptor</text>
            <text x="170" y="441" fill={textMuted} fontSize="8" textAnchor="middle">(skin)</text>

            {/* Sensory neuron (afferent) */}
            <path d="M 200 430 Q 280 420 330 380" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" markerEnd="url(#hArrBlue)" opacity="0.9"/>
            <text x="258" y="415" fill="#3b82f6" fontSize="9" fontWeight="bold">Sensory Neuron</text>
            <text x="258" y="428" fill={textMuted} fontSize="8">(afferent)</text>

            {/* Spinal cord cross-section */}
            <ellipse cx="480" cy="330" rx="75" ry="60" fill={isDark ? "rgba(99,102,241,0.15)" : "rgba(224,231,255,0.7)"} stroke="#6366f1" strokeWidth="3" filter="url(#neuShadow)"/>
            <ellipse cx="480" cy="330" rx="38" ry="30" fill={isDark ? "rgba(99,102,241,0.3)" : "rgba(199,210,254,0.6)"} stroke="#6366f1" strokeWidth="2"/>
            <text x="480" y="328" fill="#6366f1" fontSize="10" fontWeight="900" textAnchor="middle">Spinal</text>
            <text x="480" y="342" fill="#6366f1" fontSize="9" textAnchor="middle">Cord (CNS)</text>
            {/* Synapse in spinal cord */}
            <circle cx="455" cy="325" r="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
            <text x="455" y="300" fill="#fbbf24" fontSize="8" textAnchor="middle">Synapse</text>

            {/* Motor neuron (efferent) */}
            <path d="M 630 340 Q 720 360 790 410" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" markerEnd="url(#hArrRed)" opacity="0.9"/>
            <text x="700" y="368" fill="#10b981" fontSize="9" fontWeight="bold">Motor Neuron</text>
            <text x="700" y="381" fill={textMuted} fontSize="8">(efferent)</text>

            {/* Effector (muscle) */}
            <path d="M 800 410 Q 840 395 870 415 Q 890 435 850 450 Q 820 460 800 440 Q 788 425 800 410 Z"
              fill={isDark ? "rgba(239,68,68,0.3)" : "rgba(254,202,202,0.7)"} stroke="#ef4444" strokeWidth="2"/>
            <text x="840" y="428" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">Effector</text>
            <text x="840" y="441" fill={textMuted} fontSize="8" textAnchor="middle">(muscle)</text>

            {/* Response arrow */}
            <path d="M 840 455 Q 790 490 700 510 Q 600 520 480 510 Q 360 498 270 490" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6,3" markerEnd="url(#hArrRed)"/>
            <text x="570" y="540" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">RESPONSE (withdraw hand) — bypasses brain</text>

            {/* Path labels */}
            <path d="M 80 448 L 80 475 L 166 475 L 166 448" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
            <path d="M 800 448 L 800 475 L 862 475 L 862 448" fill="none" stroke="#ef4444" strokeWidth="1.5"/>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Reflex arc path = Receptor → Sensory nerve → Spinal cord → Motor nerve → Effector
            </text>
          </svg>
        );

      // =====================================================================
      // 6. HUMAN BRAIN — 3 REGIONS (Sagittal Section)
      // =====================================================================
      case "bio_brain":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="brBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#180d1a" : "#fdf4ff"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#f3e8ff"} />
              </radialGradient>
              <linearGradient id="brCerebrum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="brCerebellum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#059669" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="brMedulla" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.3"/>
              </linearGradient>
              <filter id="brShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.4"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#brBg)" rx="18"/>

            {/* ── CEREBRUM (largest, convoluted) ── */}
            <path d="M 180 320 C 175 180 230 80 380 60 C 480 48 590 65 660 120 C 720 165 730 240 720 320 C 718 360 700 390 660 405 Q 600 420 540 415 Q 480 410 430 415 Q 380 420 330 408 Q 265 390 220 360 C 195 345 182 335 180 320 Z"
              fill="url(#brCerebrum)" stroke="#c084fc" strokeWidth="3" filter="url(#brShadow)"/>
            {/* Sulci (folds) */}
            {[
              "M 220 200 Q 280 170 360 185 Q 420 195 440 220",
              "M 240 260 Q 310 230 400 248 Q 460 260 490 285",
              "M 300 310 Q 360 285 450 295 Q 500 302 530 325",
              "M 420 160 Q 480 140 560 160 Q 610 173 640 200",
              "M 480 220 Q 540 200 610 220 Q 650 232 670 260",
              "M 530 290 Q 590 268 650 285 Q 690 296 700 320"
            ].map((d, i) => (
              <path key={"brs"+i} d={d} fill="none" stroke={isDark ? "#7c3aed" : "#c084fc"} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            ))}
            {/* Corpus Callosum */}
            <path d="M 340 310 Q 440 300 560 310" fill="none" stroke={isDark ? "#e9d5ff" : "#7c3aed"} strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
            <text x="450" y="295" fill={isDark ? "#e9d5ff" : "#7c3aed"} fontSize="8.5" textAnchor="middle">Corpus Callosum</text>

            {/* ── CEREBELLUM ── */}
            <path d="M 300 405 Q 260 420 240 460 Q 230 500 260 525 Q 310 545 370 530 Q 430 515 440 470 Q 445 435 410 415 Q 380 405 340 408 Q 320 409 300 405 Z"
              fill="url(#brCerebellum)" stroke="#34d399" strokeWidth="2.5"/>
            {/* Cerebellum folds */}
            {["M 255 455 Q 310 440 370 455","M 248 475 Q 305 460 368 476","M 245 498 Q 302 483 366 498"].map((d,i) => (
              <path key={"brc"+i} d={d} fill="none" stroke={isDark ? "#059669" : "#34d399"} strokeWidth="1.5" opacity="0.7"/>
            ))}

            {/* ── MEDULLA OBLONGATA + PONS ── */}
            <path d="M 410 415 Q 420 440 418 480 Q 416 510 420 530 L 455 530 Q 460 510 458 480 Q 456 448 450 415 Z"
              fill="url(#brMedulla)" stroke="#fbbf24" strokeWidth="2.5"/>
            {/* Pons (bump on medulla) */}
            <ellipse cx="434" cy="462" rx="28" ry="16" fill={isDark ? "rgba(251,191,36,0.35)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="434" y="466" fill="#d97706" fontSize="8.5" fontWeight="bold" textAnchor="middle">Pons</text>
            {/* Spinal cord continues */}
            <path d="M 418 530 L 418 580 M 455 530 L 455 580" stroke={isDark ? "#94a3b8" : "#475569"} strokeWidth="6" strokeLinecap="round"/>
            <text x="436" y="578" fill={textMuted} fontSize="9" textAnchor="middle">Spinal Cord</text>

            {/* ── REGION LABELS (on diagram) ── */}
            <text x="450" y="195" fill="#c084fc" fontSize="16" fontWeight="900" textAnchor="middle">CEREBRUM</text>
            <text x="450" y="212" fill="#c084fc" fontSize="9.5" textAnchor="middle">Thinking • Memory • Voluntary Actions • Speech</text>
            <text x="340" y="475" fill="#34d399" fontSize="12" fontWeight="900" textAnchor="middle">CEREBELLUM</text>
            <text x="340" y="490" fill="#34d399" fontSize="8.5" textAnchor="middle">Balance • Posture • Coordination</text>
            <text x="434" y="440" fill="#fbbf24" fontSize="9" fontWeight="900" textAnchor="middle">MEDULLA</text>

            {/* ── CALLOUT LABELS ── */}
            <g transform="translate(720, 60)">
              <rect x="0" y="0" width="220" height="72" rx="9" fill={labelBg} stroke="#c084fc" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#c084fc" fontSize="12" fontWeight="900">Cerebrum</text>
              <text x="12" y="33" fill={textMuted} fontSize="9">• Largest part (85% brain mass)</text>
              <text x="12" y="45" fill={textMuted} fontSize="9">• 2 hemispheres; 4 lobes each</text>
              <text x="12" y="58" fill={textMuted} fontSize="9">• Controls intelligence &amp; will</text>
              <circle cx="0" cy="36" r="4" fill="#c084fc"/>
              <line x1="0" y1="36" x2="-280" y2="200" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(720, 160)">
              <rect x="0" y="0" width="220" height="62" rx="9" fill={labelBg} stroke="#34d399" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#34d399" fontSize="12" fontWeight="900">Cerebellum</text>
              <text x="12" y="33" fill={textMuted} fontSize="9">• "Little brain"; 2nd largest</text>
              <text x="12" y="48" fill={textMuted} fontSize="9">• Fine motor control &amp; balance</text>
              <circle cx="0" cy="31" r="4" fill="#34d399"/>
              <line x1="0" y1="31" x2="-330" y2="470" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(720, 248)">
              <rect x="0" y="0" width="220" height="82" rx="9" fill={labelBg} stroke="#fbbf24" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#fbbf24" fontSize="12" fontWeight="900">Medulla Oblongata</text>
              <text x="12" y="33" fill={textMuted} fontSize="9">• Controls autonomic functions</text>
              <text x="12" y="47" fill={textMuted} fontSize="9">• Heartbeat, breathing, BP</text>
              <text x="12" y="62" fill="#ef4444" fontSize="9" fontWeight="bold">★ Damage is FATAL (board trap)</text>
              <circle cx="0" cy="41" r="4" fill="#fbbf24"/>
              <line x1="0" y1="41" x2="-300" y2="442" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(720, 358)">
              <rect x="0" y="0" width="220" height="72" rx="9" fill={labelBg} stroke="#818cf8" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#818cf8" fontSize="12" fontWeight="900">Forebrain Lobes</text>
              <text x="12" y="33" fill={textMuted} fontSize="9">• Frontal: decision, personality</text>
              <text x="12" y="48" fill={textMuted} fontSize="9">• Parietal: touch, temperature</text>
              <text x="12" y="62" fill={textMuted} fontSize="9">• Temporal: hearing; Occipital: vision</text>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Cerebrum = voluntary; Cerebellum = balance; Medulla = involuntary (heartbeat, breathing)
            </text>
          </svg>
        );

      // =====================================================================
      // 7. LEAF CROSS-SECTION & STOMATA MECHANISM
      // =====================================================================
      case "bio_leaf_stomata":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="lfBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#0a1a0a" : "#f0fdf4"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#dcfce7"} />
              </radialGradient>
              <linearGradient id="lfMeso" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.3"/>
              </linearGradient>
              <filter id="lfShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.3"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#lfBg)" rx="18"/>
            <text x="320" y="28" fill={isDark ? "#4ade80" : "#166534"} fontSize="13" fontWeight="900" textAnchor="middle">LEAF CROSS-SECTION (T.S.)</text>
            <text x="750" y="28" fill={isDark ? "#4ade80" : "#166534"} fontSize="13" fontWeight="900" textAnchor="middle">STOMATA MECHANISM</text>

            {/* ── LEAF CROSS-SECTION (left half) ── */}
            {/* Upper Epidermis */}
            <rect x="40" y="55" width="540" height="30" rx="5" fill={isDark ? "rgba(148,163,184,0.3)" : "rgba(203,213,225,0.6)"} stroke="#94a3b8" strokeWidth="2"/>
            <text x="320" y="76" fill={textMuted} fontSize="10" textAnchor="middle" fontWeight="bold">Upper Epidermis (waxy cuticle; no chloroplasts)</text>
            {/* Palisade Mesophyll */}
            {[60,95,130,165,200,235,270,305,340,375,410,445,480,515].map((x,i) => (
              <rect key={"pm"+i} x={x} y="85" width="22" height="72" rx="8" fill={isDark ? "rgba(34,197,94,0.5)" : "rgba(187,247,208,0.8)"} stroke="#22c55e" strokeWidth="1.5"/>
            ))}
            <text x="320" y="127" fill="#166534" fontSize="10" textAnchor="middle" fontWeight="bold">Palisade Mesophyll (Photosynthesis)</text>
            {/* Spongy Mesophyll with air spaces */}
            {[[70,168],[130,172],[195,165],[260,170],[330,168],[400,165],[460,170],[510,165]].map(([x,y],i) => (
              <ellipse key={"sm"+i} cx={x} cy={y} rx="28" ry="18" fill={isDark ? "rgba(34,197,94,0.25)" : "rgba(187,247,208,0.6)"} stroke="#22c55e" strokeWidth="1.5"/>
            ))}
            <text x="320" y="200" fill="#166534" fontSize="10" textAnchor="middle" fontWeight="bold">Spongy Mesophyll (air spaces for gas exchange)</text>
            {/* Vascular Bundle */}
            <ellipse cx="320" cy="218" rx="55" ry="18" fill={isDark ? "rgba(251,191,36,0.3)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="320" y="222" fill="#92400e" fontSize="9" fontWeight="bold" textAnchor="middle">Vascular Bundle (Xylem + Phloem)</text>
            {/* Lower Epidermis */}
            <rect x="40" y="232" width="540" height="28" rx="5" fill={isDark ? "rgba(148,163,184,0.25)" : "rgba(203,213,225,0.5)"} stroke="#94a3b8" strokeWidth="2"/>
            {/* Stomata on lower epidermis */}
            {[120, 240, 360, 450].map((x,i) => (
              <React.Fragment key={"sto"+i}>
                <ellipse cx={x} cy={246} rx="14" ry="5" fill={isDark ? "#0f172a" : "#1e293b"} stroke="#22c55e" strokeWidth="2"/>
                <ellipse cx={x-14} cy={246} rx="9" ry="7" fill="#22c55e" opacity="0.7"/>
                <ellipse cx={x+14} cy={246} rx="9" ry="7" fill="#22c55e" opacity="0.7"/>
              </React.Fragment>
            ))}
            <text x="320" y="276" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="bold">Lower Epidermis (stomata here; more shade)</text>

            {/* ── STOMATA MECHANISM (right half) ── */}
            <line x1="600" y1="40" x2="600" y2="580" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" strokeDasharray="6,4"/>
            {/* Open stomata */}
            <text x="750" y="65" fill="#4ade80" fontSize="11" fontWeight="900" textAnchor="middle">OPEN (Day / High Water)</text>
            <ellipse cx="750" cy="145" rx="18" ry="60" fill={isDark ? "#0f172a" : "#1e293b"} stroke="#22c55e" strokeWidth="2"/>
            <ellipse cx="718" cy="145" rx="18" ry="40" fill="#4ade80" stroke="#22c55e" strokeWidth="2.5"/>
            <ellipse cx="782" cy="145" rx="18" ry="40" fill="#4ade80" stroke="#22c55e" strokeWidth="2.5"/>
            <text x="718" y="148" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">Guard</text>
            <text x="718" y="158" fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">Cell</text>
            <text x="750" y="200" fill={textMuted} fontSize="9" textAnchor="middle">Turgid guard cells</text>
            <text x="750" y="213" fill={textMuted} fontSize="9" textAnchor="middle">→ pore opens</text>
            {/* Chloroplasts inside guard cells */}
            {[[710,130],[710,145],[710,160],[780,130],[780,145],[780,160]].map(([x,y],i) => (
              <ellipse key={"gc"+i} cx={x} cy={y} rx="6" ry="4" fill="#4ade80" opacity="0.8"/>
            ))}

            {/* Closed stomata */}
            <text x="750" y="260" fill="#f87171" fontSize="11" fontWeight="900" textAnchor="middle">CLOSED (Night / Low Water)</text>
            <ellipse cx="750" cy="360" rx="12" ry="55" fill={isDark ? "#0f172a" : "#1e293b"} stroke="#94a3b8" strokeWidth="2"/>
            <ellipse cx="728" cy="360" rx="12" ry="35" fill="#94a3b8" stroke="#64748b" strokeWidth="2.5"/>
            <ellipse cx="772" cy="360" rx="12" ry="35" fill="#94a3b8" stroke="#64748b" strokeWidth="2.5"/>
            <text x="750" y="410" fill={textMuted} fontSize="9" textAnchor="middle">Flaccid guard cells</text>
            <text x="750" y="423" fill={textMuted} fontSize="9" textAnchor="middle">→ pore closes</text>

            {/* Mechanism explanation */}
            <rect x="620" y="450" width="310" height="98" rx="10" fill={labelBg} stroke="#4ade80" strokeWidth="1.5"/>
            <text x="775" y="468" fill="#4ade80" fontSize="10.5" fontWeight="900" textAnchor="middle">Stomatal Opening Mechanism</text>
            <text x="635" y="484" fill={textMuted} fontSize="9">1. Sunlight → K⁺ enters guard cells</text>
            <text x="635" y="498" fill={textMuted} fontSize="9">2. Water enters by osmosis → cell turgid</text>
            <text x="635" y="512" fill={textMuted} fontSize="9">3. Thick inner wall bends outward → pore opens</text>
            <text x="635" y="526" fill={textMuted} fontSize="9">4. Night: K⁺ leaves → cell flaccid → pore closes</text>
            <text x="635" y="540" fill={textMuted} fontSize="9">Guard cells only leaf cells with chloroplasts!</text>

            {/* Callouts for cross-section */}
            <g transform="translate(580, 90)">
              <rect x="0" y="0" width="0" height="0" fill="none"/>
            </g>
            <g transform="translate(14, 100)">
              <rect x="0" y="0" width="20" height="52" rx="3" fill="#22c55e" opacity="0.6"/>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Guard cells only cells with chloroplasts in epidermis; stomata mainly on lower leaf surface
            </text>
          </svg>
        );

      // =====================================================================
      // 8. FLOWER LONGITUDINAL SECTION
      // =====================================================================
      case "bio_flower_ls":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="flBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#1a0a12" : "#fff1f5"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#ffe4e6"} />
              </radialGradient>
              <linearGradient id="flPetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.4"/>
              </linearGradient>
              <filter id="flShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="7" floodOpacity="0.35"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#flBg)" rx="18"/>

            {/* ── PEDUNCLE (stalk) ── */}
            <rect x="420" y="530" width="40" height="50" rx="6" fill={isDark ? "#1a3a1a" : "#86efac"} stroke="#22c55e" strokeWidth="2"/>
            <text x="480" y="562" fill="#22c55e" fontSize="9.5" fontWeight="bold">Peduncle</text>
            {/* Receptacle */}
            <path d="M 395 530 Q 440 520 480 520 Q 520 520 565 530 L 550 548 Q 480 555 410 548 Z" fill={isDark ? "#14532d" : "#bbf7d0"} stroke="#22c55e" strokeWidth="2"/>
            <text x="480" y="545" fill="#166534" fontSize="9" textAnchor="middle" fontWeight="bold">Receptacle</text>

            {/* ── SEPALS ── */}
            <path d="M 390 520 Q 350 480 360 440 Q 370 415 405 410" fill="url(#flPetal)" stroke="#86efac" strokeWidth="2.5" opacity="0.7"/>
            <path d="M 565 520 Q 610 480 600 440 Q 590 415 555 410" fill="url(#flPetal)" stroke="#86efac" strokeWidth="2.5" opacity="0.7"/>
            <text x="330" y="470" fill="#22c55e" fontSize="10" fontWeight="bold">Sepal (calyx)</text>

            {/* ── PETALS ── */}
            <path d="M 400 415 Q 330 340 340 265 Q 350 210 400 190 Q 440 175 450 215 Q 460 260 440 310 Q 425 350 415 400" fill="url(#flPetal)" stroke="#f472b6" strokeWidth="2.5"/>
            <path d="M 560 415 Q 630 340 620 265 Q 610 210 560 190 Q 520 175 510 215 Q 500 260 520 310 Q 535 350 545 400" fill="url(#flPetal)" stroke="#f472b6" strokeWidth="2.5"/>
            <text x="295" y="295" fill="#f472b6" fontSize="10" fontWeight="bold">Petal (corolla)</text>
            <text x="295" y="308" fill={textMuted} fontSize="8.5">Attract pollinators</text>

            {/* ── STAMEN (Anther + Filament) ── */}
            {[-55,-22,10,43].map((off,i) => (
              <React.Fragment key={"stm"+i}>
                <line x1={480+off} y1="410" x2={480+off} y2="290" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"/>
                <ellipse cx={480+off} cy="280" rx="12" ry="18" fill={isDark ? "rgba(251,191,36,0.7)" : "rgba(254,243,199,0.9)"} stroke="#f59e0b" strokeWidth="2.5"/>
                {/* Pollen grains */}
                {[[-6,0],[6,0],[0,-7]].map(([ox,oy],j) => (
                  <circle key={j} cx={480+off+ox} cy={280+oy} r="3" fill="#f59e0b" opacity="0.8"/>
                ))}
              </React.Fragment>
            ))}
            <text x="640" y="285" fill="#f59e0b" fontSize="10" fontWeight="bold">Anther</text>
            <text x="640" y="298" fill={textMuted} fontSize="8.5">(pollen sacs)</text>
            <text x="640" y="360" fill="#f59e0b" fontSize="10" fontWeight="bold">Filament</text>
            <text x="640" y="373" fill={textMuted} fontSize="8.5">(Stamen)</text>

            {/* ── PISTIL (Stigma + Style + Ovary) ── */}
            {/* Stigma (sticky top) */}
            <ellipse cx="480" cy="215" rx="22" ry="12" fill={isDark ? "rgba(167,139,250,0.6)" : "rgba(221,214,254,0.9)"} stroke="#7c3aed" strokeWidth="2.5"/>
            <text x="480" y="219" fill="#7c3aed" fontSize="9" fontWeight="bold" textAnchor="middle">Stigma</text>
            {/* Style */}
            <line x1="480" y1="227" x2="480" y2="360" stroke="#a855f7" strokeWidth="8" strokeLinecap="round"/>
            <text x="500" y="300" fill="#a855f7" fontSize="10" fontWeight="bold">Style</text>
            {/* Ovary */}
            <ellipse cx="480" cy="385" rx="65" ry="38" fill={isDark ? "rgba(168,85,247,0.2)" : "rgba(243,232,255,0.8)"} stroke="#a855f7" strokeWidth="2.5" filter="url(#flShadow)"/>
            <text x="480" y="385" fill="#7c3aed" fontSize="11" fontWeight="900" textAnchor="middle">Ovary</text>
            {/* Ovules */}
            {[[-24,8],[0,5],[24,8],[0,-10]].map(([ox,oy],i) => (
              <ellipse key={"ov"+i} cx={480+ox} cy={385+oy} rx="10" ry="7" fill={isDark ? "rgba(168,85,247,0.5)" : "rgba(216,180,254,0.8)"} stroke="#a855f7" strokeWidth="1.5"/>
            ))}
            <text x="480" y="400" fill={textMuted} fontSize="8" textAnchor="middle">(ovules → seeds)</text>
            <text x="640" y="388" fill="#a855f7" fontSize="10" fontWeight="bold">Ovary</text>
            <text x="640" y="401" fill={textMuted} fontSize="8.5">(matures → fruit)</text>
            <text x="640" y="220" fill="#7c3aed" fontSize="10" fontWeight="bold">Stigma</text>
            <text x="640" y="233" fill={textMuted} fontSize="8.5">(sticky; pollen lands)</text>

            {/* Pollen tube */}
            <path d="M 480 227 Q 481 285 480 365" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,2" opacity="0.7"/>
            <text x="505" y="325" fill="#fbbf24" fontSize="8.5">Pollen tube</text>

            {/* Callout labels left side */}
            <g transform="translate(16, 400)">
              <rect x="0" y="0" width="210" height="62" rx="8" fill={labelBg} stroke="#a855f7" strokeWidth="1.5"/>
              <text x="10" y="18" fill="#a855f7" fontSize="11" fontWeight="900">Pistil (Female)</text>
              <text x="10" y="32" fill={textMuted} fontSize="9">Stigma + Style + Ovary</text>
              <text x="10" y="46" fill={textMuted} fontSize="9">Stigma + Style + Ovary = Pistil (carpel)</text>
            </g>
            <g transform="translate(16, 330)">
              <rect x="0" y="0" width="210" height="52" rx="8" fill={labelBg} stroke="#f59e0b" strokeWidth="1.5"/>
              <text x="10" y="18" fill="#f59e0b" fontSize="11" fontWeight="900">Stamen (Male)</text>
              <text x="10" y="33" fill={textMuted} fontSize="9">Anther (pollen) + Filament</text>
              <circle cx="210" cy="26" r="3.5" fill="#f59e0b"/>
              <line x1="210" y1="26" x2="244" y2="340" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Stamen=male; Pistil=female; Ovary→fruit; Ovule→seed; Stigma receives pollen
            </text>
          </svg>
        );

      // =====================================================================
      // 9. FEMALE REPRODUCTIVE SYSTEM
      // =====================================================================
      case "bio_female_reproduction":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="frepBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#1a0a12" : "#fff1f5"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#ffe4e6"} />
              </radialGradient>
              <linearGradient id="frepUterus" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3"/>
              </linearGradient>
              <filter id="frepShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="7" floodOpacity="0.35"/>
              </filter>
            </defs>
            <rect width="960" height="600" fill="url(#frepBg)" rx="18"/>

            {/* ── UTERUS (pear-shaped) ── */}
            <path d="M 390 280 Q 350 265 330 300 Q 315 335 330 370 Q 355 415 390 435 Q 430 455 480 455 Q 530 455 570 435 Q 605 415 630 370 Q 645 335 630 300 Q 610 265 570 280 Q 540 268 480 265 Q 420 268 390 280 Z"
              fill="url(#frepUterus)" stroke="#ef4444" strokeWidth="3" filter="url(#frepShadow)"/>
            {/* Endometrium layer */}
            <path d="M 405 295 Q 370 285 355 315 Q 342 345 355 378 Q 375 415 410 430 Q 445 444 480 444 Q 515 444 550 430 Q 578 415 600 378 Q 614 345 604 315 Q 590 285 555 295 Q 525 282 480 280 Q 435 282 405 295 Z"
              fill={isDark ? "rgba(239,68,68,0.3)" : "rgba(254,202,202,0.5)"} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2"/>
            <text x="480" y="370" fill="#ef4444" fontSize="13" fontWeight="900" textAnchor="middle">Uterus</text>
            <text x="480" y="385" fill={textMuted} fontSize="9.5" textAnchor="middle">(womb; site of implantation)</text>
            <text x="480" y="310" fill="#ef4444" fontSize="8.5" textAnchor="middle">Endometrium</text>
            <text x="380" y="360" fill={textMuted} fontSize="8.5" textAnchor="end">Myometrium</text>
            <text x="380" y="373" fill={textMuted} fontSize="8.5" textAnchor="end">(smooth muscle)</text>

            {/* ── FALLOPIAN TUBES ── */}
            <path d="M 350 288 Q 290 265 240 240 Q 200 222 170 245" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round"/>
            <path d="M 610 288 Q 670 265 720 240 Q 760 222 790 245" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round"/>
            {/* Fimbriae */}
            {[[-8,-5],[0,-8],[8,-5],[14,-2],[-14,-2]].map(([ox,oy],i) => (
              <path key={"fimL"+i} d={`M ${170+ox} ${245+oy} Q ${165+ox} ${258+oy} ${170+ox} ${270+oy}`} fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            ))}
            {[[-8,-5],[0,-8],[8,-5],[14,-2],[-14,-2]].map(([ox,oy],i) => (
              <path key={"fimR"+i} d={`M ${790+ox} ${245+oy} Q ${795+ox} ${258+oy} ${790+ox} ${270+oy}`} fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            ))}
            <text x="135" y="240" fill="#f97316" fontSize="9.5" fontWeight="bold" textAnchor="end">Fallopian</text>
            <text x="135" y="253" fill="#f97316" fontSize="9.5" textAnchor="end">Tube (Oviduct)</text>
            <text x="135" y="275" fill={textMuted} fontSize="8.5" textAnchor="end">Fimbriae</text>
            <text x="835" y="240" fill="#f97316" fontSize="9.5" fontWeight="bold">Fallopian</text>
            <text x="835" y="253" fill="#f97316" fontSize="9.5">Tube</text>
            {/* Fertilization label */}
            <text x="275" y="252" fill="#fbbf24" fontSize="8" fontWeight="bold">← Fertilization</text>
            <text x="275" y="264" fill={textMuted} fontSize="8">   occurs here</text>

            {/* ── OVARIES ── */}
            <ellipse cx="158" cy="295" rx="45" ry="32" fill={isDark ? "rgba(168,85,247,0.3)" : "rgba(243,232,255,0.8)"} stroke="#a855f7" strokeWidth="2.5" filter="url(#frepShadow)"/>
            <ellipse cx="802" cy="295" rx="45" ry="32" fill={isDark ? "rgba(168,85,247,0.3)" : "rgba(243,232,255,0.8)"} stroke="#a855f7" strokeWidth="2.5" filter="url(#frepShadow)"/>
            {/* Follicles on left ovary */}
            {[[-18,-10],[-5,-18],[12,-12],[-8,5],[10,8]].map(([ox,oy],i) => (
              <circle key={"fol"+i} cx={158+ox} cy={295+oy} r={5+i%2} fill={isDark ? "rgba(168,85,247,0.6)" : "rgba(216,180,254,0.9)"} stroke="#a855f7" strokeWidth="1.5"/>
            ))}
            {/* Mature follicle with ovum */}
            <circle cx="153" cy="290" r="10" fill="#a855f7" opacity="0.5" stroke="#7c3aed" strokeWidth="2"/>
            <circle cx="153" cy="290" r="4" fill="#f9a8d4"/>
            <text x="100" y="340" fill="#a855f7" fontSize="10" fontWeight="bold" textAnchor="middle">Ovary</text>
            <text x="100" y="354" fill={textMuted} fontSize="8" textAnchor="middle">(produces eggs</text>
            <text x="100" y="366" fill={textMuted} fontSize="8" textAnchor="middle">+ estrogen)</text>
            <text x="860" y="340" fill="#a855f7" fontSize="10" fontWeight="bold" textAnchor="middle">Ovary</text>

            {/* ── CERVIX & VAGINA ── */}
            <path d="M 455 455 Q 455 490 455 515" stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="16" strokeLinecap="round" fill="none"/>
            <path d="M 505 455 Q 505 490 505 515" stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="16" strokeLinecap="round" fill="none"/>
            <text x="480" y="500" fill={textMuted} fontSize="9.5" textAnchor="middle" fontWeight="bold">Cervix + Vagina</text>

            {/* ── CALLOUT LABELS ── */}
            <g transform="translate(630, 98)">
              <rect x="0" y="0" width="215" height="72" rx="9" fill={labelBg} stroke="#ef4444" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#ef4444" fontSize="12" fontWeight="900">Uterus</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">• Thick muscular wall (myometrium)</text>
              <text x="12" y="45" fill={textMuted} fontSize="9">• Inner lining = endometrium</text>
              <text x="12" y="58" fill={textMuted} fontSize="9">• Endometrium sheds = menstruation</text>
              <circle cx="0" cy="36" r="4" fill="#ef4444"/>
              <line x1="0" y1="36" x2="-60" y2="360" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(630, 198)">
              <rect x="0" y="0" width="215" height="62" rx="9" fill={labelBg} stroke="#f97316" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#f97316" fontSize="12" fontWeight="900">Fallopian Tube</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">• Fertilization occurs here</text>
              <text x="12" y="46" fill={textMuted} fontSize="9">• Cilia move ovum toward uterus</text>
              <circle cx="0" cy="31" r="4" fill="#f97316"/>
              <line x1="0" y1="31" x2="-228" y2="255" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>
            <g transform="translate(630, 288)">
              <rect x="0" y="0" width="215" height="72" rx="9" fill={labelBg} stroke="#a855f7" strokeWidth="1.5"/>
              <text x="12" y="18" fill="#a855f7" fontSize="12" fontWeight="900">Ovary</text>
              <text x="12" y="32" fill={textMuted} fontSize="9">• Produces eggs (ova) monthly</text>
              <text x="12" y="46" fill={textMuted} fontSize="9">• Secretes estrogen &amp; progesterone</text>
              <text x="12" y="60" fill={textMuted} fontSize="9">• Graafian follicle ruptures at ovulation</text>
              <circle cx="0" cy="36" r="4" fill="#a855f7"/>
              <line x1="0" y1="36" x2="-173" y2="296" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3"/>
            </g>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Fertilization in fallopian tube; implantation in uterus; ovary releases mature egg at ovulation
            </text>
          </svg>
        );

      // =====================================================================
      // 10. MENDEL'S GENETICS — MONOHYBRID & DIHYBRID CROSSES
      // =====================================================================
      case "bio_mendel_cross":
        return (
          <svg viewBox="0 0 960 600" className="w-full h-auto select-none">
            <defs>
              <radialGradient id="menBg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor={isDark ? "#0d1422" : "#eff6ff"} />
                <stop offset="100%" stopColor={isDark ? "#07090f" : "#dbeafe"} />
              </radialGradient>
            </defs>
            <rect width="960" height="600" fill="url(#menBg)" rx="18"/>

            {/* ── LEFT: MONOHYBRID CROSS ── */}
            <text x="240" y="28" fill={isDark ? "#93c5fd" : "#1d4ed8"} fontSize="14" fontWeight="900" textAnchor="middle">MONOHYBRID CROSS (Tall × Short)</text>

            {/* P generation */}
            <text x="80" y="65" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">P (Parent):</text>
            {/* Tall plant TT */}
            <rect x="100" y="72" width="80" height="40" rx="8" fill={isDark ? "rgba(34,197,94,0.2)" : "rgba(220,252,231,0.9)"} stroke="#22c55e" strokeWidth="2"/>
            <text x="140" y="92" fill="#16a34a" fontSize="13" fontWeight="900" textAnchor="middle">TT</text>
            <text x="140" y="106" fill={textMuted} fontSize="9" textAnchor="middle">Tall (pure)</text>
            <text x="195" y="97" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="16" textAnchor="middle">×</text>
            {/* Short plant tt */}
            <rect x="210" y="72" width="80" height="40" rx="8" fill={isDark ? "rgba(239,68,68,0.2)" : "rgba(254,226,226,0.9)"} stroke="#ef4444" strokeWidth="2"/>
            <text x="250" y="92" fill="#dc2626" fontSize="13" fontWeight="900" textAnchor="middle">tt</text>
            <text x="250" y="106" fill={textMuted} fontSize="9" textAnchor="middle">Short (pure)</text>

            {/* Arrow */}
            <line x1="200" y1="118" x2="200" y2="145" stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="2" markerEnd="url(#hArrBlue)"/>
            <text x="210" y="140" fill={textMuted} fontSize="8.5">Cross</text>

            {/* F1 generation */}
            <text x="80" y="168" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">F₁:</text>
            <rect x="155" y="152" width="90" height="40" rx="8" fill={isDark ? "rgba(34,197,94,0.15)" : "rgba(220,252,231,0.7)"} stroke="#22c55e" strokeWidth="2"/>
            <text x="200" y="172" fill="#16a34a" fontSize="13" fontWeight="900" textAnchor="middle">Tt</text>
            <text x="200" y="186" fill="#16a34a" fontSize="9" textAnchor="middle" fontWeight="bold">All Tall (hybrid)</text>

            {/* Arrow + self-pollination */}
            <line x1="200" y1="198" x2="200" y2="225" stroke={isDark ? "#94a3b8" : "#64748b"} strokeWidth="2" markerEnd="url(#hArrBlue)"/>
            <text x="214" y="218" fill={textMuted} fontSize="8">Self-pollinate</text>

            {/* F2 — Punnett square 2×2 */}
            <text x="80" y="248" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">F₂ Punnett:</text>
            {/* Grid */}
            <rect x="95" y="252" width="44" height="44" rx="4" fill={isDark ? "rgba(34,197,94,0.2)" : "rgba(220,252,231,0.8)"} stroke="#22c55e" strokeWidth="1.5"/>
            <text x="117" y="274" fill="#16a34a" fontSize="12" fontWeight="900" textAnchor="middle">TT</text>
            <rect x="140" y="252" width="44" height="44" rx="4" fill={isDark ? "rgba(34,197,94,0.2)" : "rgba(220,252,231,0.8)"} stroke="#22c55e" strokeWidth="1.5"/>
            <text x="162" y="274" fill="#16a34a" fontSize="12" fontWeight="900" textAnchor="middle">Tt</text>
            <rect x="185" y="252" width="44" height="44" rx="4" fill={isDark ? "rgba(34,197,94,0.2)" : "rgba(220,252,231,0.8)"} stroke="#22c55e" strokeWidth="1.5"/>
            <text x="207" y="274" fill="#16a34a" fontSize="12" fontWeight="900" textAnchor="middle">Tt</text>
            <rect x="230" y="252" width="44" height="44" rx="4" fill={isDark ? "rgba(239,68,68,0.2)" : "rgba(254,226,226,0.8)"} stroke="#ef4444" strokeWidth="1.5"/>
            <text x="252" y="274" fill="#dc2626" fontSize="12" fontWeight="900" textAnchor="middle">tt</text>
            {/* Column headers */}
            <text x="117" y="250" fill="#16a34a" fontSize="9" fontWeight="bold" textAnchor="middle">T</text>
            <text x="162" y="250" fill="#16a34a" fontSize="9" fontWeight="bold" textAnchor="middle">t</text>
            <text x="207" y="250" fill="#16a34a" fontSize="9" fontWeight="bold" textAnchor="middle">T</text>
            <text x="252" y="250" fill="#dc2626" fontSize="9" fontWeight="bold" textAnchor="middle">t</text>
            {/* Ratio */}
            <text x="170" y="318" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="11" fontWeight="900" textAnchor="middle">Genotype: 1 TT : 2 Tt : 1 tt</text>
            <text x="170" y="333" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="11" fontWeight="900" textAnchor="middle">Phenotype: 3 Tall : 1 Short</text>
            <rect x="75" y="338" width="270" height="26" rx="6" fill={isDark ? "rgba(251,191,36,0.15)" : "rgba(254,243,199,0.8)"} stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="210" y="355" fill="#d97706" fontSize="11" fontWeight="900" textAnchor="middle">★ 3:1 Phenotypic Ratio</text>

            {/* ── RIGHT: DIHYBRID CROSS ── */}
            <line x1="490" y1="35" x2="490" y2="565" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"} strokeWidth="2" strokeDasharray="6,4"/>
            <text x="730" y="28" fill={isDark ? "#a5b4fc" : "#4f46e5"} fontSize="14" fontWeight="900" textAnchor="middle">DIHYBRID CROSS (Round Yellow × Wrinkled Green)</text>

            {/* P generation */}
            <text x="510" y="65" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">P:</text>
            <rect x="525" y="72" width="110" height="40" rx="8" fill={isDark ? "rgba(251,191,36,0.2)" : "rgba(254,243,199,0.9)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="580" y="92" fill="#d97706" fontSize="11" fontWeight="900" textAnchor="middle">RRYY</text>
            <text x="580" y="106" fill={textMuted} fontSize="8.5" textAnchor="middle">Round Yellow</text>
            <text x="645" y="97" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="16" textAnchor="middle">×</text>
            <rect x="655" y="72" width="110" height="40" rx="8" fill={isDark ? "rgba(34,197,94,0.15)" : "rgba(220,252,231,0.8)"} stroke="#22c55e" strokeWidth="2"/>
            <text x="710" y="92" fill="#166534" fontSize="11" fontWeight="900" textAnchor="middle">rryy</text>
            <text x="710" y="106" fill={textMuted} fontSize="8.5" textAnchor="middle">Wrinkled Green</text>

            {/* F1 */}
            <text x="510" y="165" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">F₁:</text>
            <rect x="595" y="148" width="110" height="40" rx="8" fill={isDark ? "rgba(251,191,36,0.15)" : "rgba(254,243,199,0.7)"} stroke="#fbbf24" strokeWidth="2"/>
            <text x="650" y="168" fill="#d97706" fontSize="11" fontWeight="900" textAnchor="middle">RrYy</text>
            <text x="650" y="182" fill="#d97706" fontSize="9" textAnchor="middle">All Round Yellow (hybrid)</text>

            {/* F2 Punnett 4×4 */}
            <text x="510" y="215" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="12" fontWeight="bold">F₂ (4×4 Punnett Square):</text>
            {/* Gametes */}
            {["RY","Ry","rY","ry"].map((g,i) => (
              <text key={"gh"+i} x={552+i*85} y="232" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">{g}</text>
            ))}
            {["RY","Ry","rY","ry"].map((g,i) => (
              <text key={"gv"+i} x="523" y={253+i*57} fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">{g}</text>
            ))}
            {/* 4×4 grid cells */}
            {[
              ["RRYY","RRYy","RrYY","RrYy"],
              ["RRYy","RRyy","RrYy","Rryy"],
              ["RrYY","RrYy","rrYY","rrYy"],
              ["RrYy","Rryy","rrYy","rryy"]
            ].map((row, ri) =>
              row.map((cell, ci) => {
                const isRndYel = cell.includes("R") && !cell.startsWith("rr") && cell.includes("Y") && !cell.endsWith("yy");
                const isRndGrn = cell.includes("R") && !cell.startsWith("rr") && !cell.includes("Y") || (cell.match(/^R/) && cell.endsWith("yy"));
                const isWrkYel = !cell.includes("R") && cell.includes("Y");
                const isWrkGrn = !cell.includes("R") && !cell.includes("Y");
                let fillColor = isWrkGrn
                  ? (isDark ? "rgba(100,116,139,0.3)" : "rgba(203,213,225,0.7)")
                  : isWrkYel
                  ? (isDark ? "rgba(251,191,36,0.2)" : "rgba(254,243,199,0.7)")
                  : isRndGrn
                  ? (isDark ? "rgba(34,197,94,0.2)" : "rgba(220,252,231,0.7)")
                  : (isDark ? "rgba(251,191,36,0.3)" : "rgba(254,243,199,0.9)");
                let borderColor = isWrkGrn ? "#64748b" : isWrkYel ? "#fbbf24" : isRndGrn ? "#22c55e" : "#fbbf24";
                return (
                  <g key={`f2${ri}${ci}`}>
                    <rect x={534+ci*85} y={237+ri*57} width="80" height="52" rx="4" fill={fillColor} stroke={borderColor} strokeWidth="1.5"/>
                    <text x={574+ci*85} y={260+ri*57} fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="9" fontWeight="bold" textAnchor="middle">{cell}</text>
                  </g>
                );
              })
            )}
            {/* Ratio box */}
            <rect x="510" y="475" width="430" height="70" rx="10" fill={isDark ? "rgba(99,102,241,0.15)" : "rgba(224,231,255,0.8)"} stroke="#6366f1" strokeWidth="2"/>
            <text x="725" y="493" fill="#6366f1" fontSize="12" fontWeight="900" textAnchor="middle">F₂ Dihybrid Phenotypic Ratio</text>
            <text x="725" y="511" fill={isDark ? "#e2e8f0" : "#1e293b"} fontSize="11" fontWeight="bold" textAnchor="middle">9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green</text>
            <rect x="622" y="520" width="206" height="20" rx="5" fill={isDark ? "rgba(251,191,36,0.2)" : "rgba(254,243,199,0.9)"} stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="725" y="534" fill="#d97706" fontSize="11" fontWeight="900" textAnchor="middle">★ 9:3:3:1 Ratio</text>

            {/* Laws box */}
            <rect x="510" y="385" width="430" height="82" rx="10" fill={labelBg} stroke="#818cf8" strokeWidth="1.5"/>
            <text x="725" y="403" fill="#818cf8" fontSize="11" fontWeight="900" textAnchor="middle">Mendel's Laws of Inheritance</text>
            <text x="520" y="420" fill={textMuted} fontSize="9">1. Law of Dominance: T (tall) dominant over t (short)</text>
            <text x="520" y="435" fill={textMuted} fontSize="9">2. Law of Segregation: Allele pairs separate during gamete formation</text>
            <text x="520" y="450" fill={textMuted} fontSize="9">3. Law of Independent Assortment: 2 traits assort independently (dihybrid)</text>
            <text x="520" y="465" fill="#ef4444" fontSize="9" fontWeight="bold">★ Round (R) &amp; Yellow (Y) are dominant; Wrinkled (r) &amp; Green (y) recessive</text>

            {/* CBSE Banner */}
            <rect x="120" y="560" width="720" height="30" rx="15" fill={isDark ? "rgba(16,185,129,0.12)" : "rgba(16,185,129,0.15)"} stroke="#10b981" strokeWidth="1.5"/>
            <text x="480" y="579" fill="#10b981" fontSize="11" fontWeight="900" textAnchor="middle">
              ⭐ CBSE KEY: Monohybrid = 3:1 ratio; Dihybrid = 9:3:3:1 ratio; TT=homozygous, Tt=heterozygous
            </text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 960 300" className="w-full h-auto select-none">
            <rect width="960" height="300" fill={isDark ? "#07090f" : "#f8fafc"} rx="14"/>
            <text x="480" y="145" fill={isDark ? "#334155" : "#cbd5e1"} fontSize="16" textAnchor="middle" fontWeight="bold">
              Diagram: {title || id}
            </text>
            <text x="480" y="168" fill={isDark ? "#1e293b" : "#e2e8f0"} fontSize="11" textAnchor="middle">Select a biology diagram from the sidebar</text>
          </svg>
        );
    }
  };

  return (
    <div className={`w-full rounded-2xl overflow-hidden border ${
      isDark ? "bg-[#07090f] border-emerald-500/15" : "bg-emerald-50/20 border-emerald-200/60"
    }`}>
      {renderSVG()}
    </div>
  );
}
