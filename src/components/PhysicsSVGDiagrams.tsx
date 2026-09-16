"use client";
/**
 * PhysicsSVGDiagrams.tsx
 * 29 premium NCERT Class 10 Physics diagrams as real responsive SVGs.
 *
 * Layout reference (all mirror/lens diagrams):
 *   viewBox: "0 0 880 400"
 *   Principal axis: y=200
 *   Mirror diagrams: Pole P at x=680, F at x=540, C at x=400
 *   Lens diagrams:   Optical centre O at x=440, F1 at x=290, F2 at x=590, 2F1 at x=140, 2F2 at x=740
 */

import React, { useState } from "react";
import {
  DiagramBg, DiagramTitleBar, SciArrowDefs, AxisLabel,
  CalloutLabel, ExamTip, InsetBox, useDiagramTheme, SCI_COLORS,
} from "@/components/ScienceSVGEngine";

// ─────────────────────────────────────────
// SHARED: Mirror backdrop + axis
// ─────────────────────────────────────────
function MirrorAxis({ theme, y = 200 }: { theme: ReturnType<typeof useDiagramTheme>; y?: number }) {
  return (
    <>
      {/* Principal axis */}
      <line x1={20} y1={y} x2={840} y2={y}
        stroke={theme.axis} strokeWidth="1.8" strokeDasharray="8,4" />
      {/* Arrow on axis */}
      <polygon points={`${838},${y-4} ${848},${y} ${838},${y+4}`} fill={theme.axis} />
    </>
  );
}

/** Concave mirror arc — concave face pointing LEFT (toward object) */
function ConcaveMirrorArc({ px = 680, ay = 200, r = 55, theme }:
  { px?: number; ay?: number; r?: number; theme: ReturnType<typeof useDiagramTheme> }) {
  // Arc from (px-12, ay-r) curving through (px+20, ay) to (px-12, ay+r)
  const top = ay - r;
  const bot = ay + r;
  const ctrl = px + 22;
  return (
    <>
      {/* Back (non-reflecting) fill */}
      <path d={`M ${px-12} ${top} Q ${ctrl} ${ay} ${px-12} ${bot} L ${px+14} ${bot} Q ${px+46} ${ay} ${px+14} ${top} Z`}
        fill={theme.muted} fillOpacity="0.12" stroke="none" />
      {/* Reflecting arc */}
      <path d={`M ${px-12} ${top} Q ${ctrl} ${ay} ${px-12} ${bot}`}
        fill="none" stroke={theme.muted} strokeWidth="5" strokeLinecap="round" />
      {/* Hatching — non-reflecting side */}
      {Array.from({ length: 6 }, (_, i) => {
        const t = (i + 1) / 7;
        const hy = top + t * (bot - top);
        const hx = px - 12 + 22 * 4 * t * (1 - t); // approx point on bezier
        return (
          <line key={i}
            x1={hx + 2} y1={hy - 3}
            x2={hx + 14} y2={hy + 8}
            stroke={theme.muted} strokeWidth="1.5" opacity="0.5" />
        );
      })}
    </>
  );
}

/** Convex mirror arc — convex face pointing LEFT */
function ConvexMirrorArc({ px = 680, ay = 200, r = 55, theme }:
  { px?: number; ay?: number; r?: number; theme: ReturnType<typeof useDiagramTheme> }) {
  const top = ay - r;
  const bot = ay + r;
  const ctrl = px - 22; // control point to the LEFT → arc bulges left
  return (
    <>
      <path d={`M ${px+12} ${top} Q ${ctrl} ${ay} ${px+12} ${bot} L ${px+36} ${bot} Q ${px+12} ${ay} ${px+36} ${top} Z`}
        fill={theme.muted} fillOpacity="0.12" stroke="none" />
      <path d={`M ${px+12} ${top} Q ${ctrl} ${ay} ${px+12} ${bot}`}
        fill="none" stroke={theme.muted} strokeWidth="5" strokeLinecap="round" />
      {Array.from({ length: 6 }, (_, i) => {
        const t = (i + 1) / 7;
        const hy = top + t * (bot - top);
        return (
          <line key={i}
            x1={px + 14} y1={hy - 3}
            x2={px + 28} y2={hy + 8}
            stroke={theme.muted} strokeWidth="1.5" opacity="0.5" />
        );
      })}
    </>
  );
}

/** Thin biconvex lens shape */
function ConvexLens({ ox = 440, ay = 200, h = 120, theme }:
  { ox?: number; ay?: number; h?: number; theme: ReturnType<typeof useDiagramTheme> }) {
  const top = ay - h / 2;
  const bot = ay + h / 2;
  return (
    <path
      d={`M ${ox} ${top} Q ${ox + 28} ${ay} ${ox} ${bot} Q ${ox - 28} ${ay} ${ox} ${top} Z`}
      fill={SCI_COLORS.highlight} fillOpacity="0.14"
      stroke={SCI_COLORS.highlight} strokeWidth="2.5"
    />
  );
}

/** Biconcave lens shape */
function ConcaveLens({ ox = 440, ay = 200, h = 120, theme }:
  { ox?: number; ay?: number; h?: number; theme: ReturnType<typeof useDiagramTheme> }) {
  const top = ay - h / 2;
  const bot = ay + h / 2;
  return (
    <path
      d={`M ${ox - 10} ${top} Q ${ox + 14} ${ay} ${ox - 10} ${bot} L ${ox + 10} ${bot} Q ${ox - 14} ${ay} ${ox + 10} ${top} Z`}
      fill={SCI_COLORS.highlight} fillOpacity="0.1"
      stroke={SCI_COLORS.highlight} strokeWidth="2.5"
    />
  );
}

/** Object arrow (upright, amber) */
function ObjectArrow({ x, ay, h = 60, color = SCI_COLORS.ray }: { x: number; ay: number; h?: number; color?: string }) {
  return (
    <>
      <line x1={x} y1={ay} x2={x} y2={ay - h}
        stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <polygon
        points={`${x - 6},${ay - h + 10} ${x + 6},${ay - h + 10} ${x},${ay - h - 4}`}
        fill={color}
      />
      <circle cx={x} cy={ay} r="4" fill={color} />
    </>
  );
}

/** Image arrow — inverted (real) or upright dashed (virtual) */
function ImageArrow({
  x, ay, h = 50, inverted = true, dashed = false, color = SCI_COLORS.warning,
}: { x: number; ay: number; h?: number; inverted?: boolean; dashed?: boolean; color?: string }) {
  const tipY = inverted ? ay + h : ay - h;
  const arrowY = inverted ? ay + h - 10 : ay - h + 10;
  const arrowDir = inverted ? 1 : -1;
  return (
    <>
      <line x1={x} y1={ay} x2={x} y2={tipY}
        stroke={color} strokeWidth="3" strokeLinecap="round"
        strokeDasharray={dashed ? "7,4" : undefined} />
      <polygon
        points={`${x - 5},${arrowY} ${x + 5},${arrowY} ${x},${arrowY + 8 * arrowDir}`}
        fill={color} fillOpacity={dashed ? 0.7 : 1}
      />
      <circle cx={x} cy={ay} r="3.5" fill={color} opacity={dashed ? 0.6 : 1} />
    </>
  );
}

// ═══════════════════════════════════════════════
// SECTION 1: SPHERICAL MIRROR DIAGRAMS
// ═══════════════════════════════════════════════

// Standard mirror coordinate constants
const P = 680; // Pole
const F = 540; // Focus
const C = 400; // Centre of Curvature
const AY = 200; // Axis y-position

// 1A. Concave Mirror — Object at Infinity
function ConcaveMirrorAtInfinity({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cm_inf_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object at Infinity"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(a)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />
      <ConcaveMirrorArc px={P} ay={AY} r={70} theme={theme} />

      {/* Two parallel incident rays (from left, horizontal) */}
      {/* Ray 1: at y=155 */}
      <line x1={30} y1={155} x2={668} y2={155}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Reflected ray 1 → converges at F(540, 200) */}
      <line x1={668} y1={155} x2={F} y2={AY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Ray 2: at y=245 */}
      <line x1={30} y1={245} x2={668} y2={245}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Reflected ray 2 → converges at F */}
      <line x1={668} y1={245} x2={F} y2={AY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* "∞" label for object */}
      <text x={40} y={135} fill={SCI_COLORS.ray} fontSize="28" fontWeight="900"
        fontFamily="serif">∞</text>
      <text x={40} y={158} fill={theme.muted} fontSize="9.5"
        fontFamily="system-ui,-apple-system,sans-serif">Object at ∞</text>

      {/* Point image at F (bright dot) */}
      <circle cx={F} cy={AY} r="7" fill={SCI_COLORS.ray} filter="url(#glowSm)" />
      <circle cx={F} cy={AY} r="4" fill="#ffffff" />

      {/* Axis labels */}
      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      {/* Callout labels */}
      <CalloutLabel ax={F} ay={AY - 10} lx={440} ly={80} w={150} h={30}
        text="Image at Focus F" sub="Real · Inverted · Point-sized"
        textColor={SCI_COLORS.ray} theme={theme} anchor="right" />

      {/* Info panel */}
      <g transform="translate(20,290)">
        <rect width={840} height={82} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={20} fill={theme.accent} fontSize="9.5" fontWeight="900"
          fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.8">
          KEY RULES
        </text>
        <text x={18} y={38} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ① All incident parallel rays converge at the principal focus F after reflection.
        </text>
        <text x={18} y={55} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Application: Solar furnace, solar concentrator — concentrates sunrays at F to generate intense heat.
        </text>
        <text x={18} y={70} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ CBSE: Omitting arrowheads on incident and reflected rays → immediate −1 mark penalty.
        </text>
      </g>
    </svg>
  );
}

// 1B. Concave Mirror — Object Beyond C
function ConcaveMirrorBeyondC({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = 220; const objH = 72;
  const imgX = 472; const imgH = 30; // diminished, between F and C

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cm_bc_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object Beyond C"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(b)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />
      <ConcaveMirrorArc px={P} ay={AY} r={70} theme={theme} />
      <ObjectArrow x={objX} ay={AY} h={objH} />
      <ImageArrow x={imgX} ay={AY} h={imgH} inverted color={SCI_COLORS.warning} />

      {/* Ray 1: parallel to axis from object tip → reflects through F */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points={`${666},${AY-objH-4} ${672},${AY-objH} ${666},${AY-objH+4}`} fill={SCI_COLORS.ray} />
      <line x1={668} y1={AY - objH} x2={imgX} y2={AY + imgH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Ray 2: through C, retraces path */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY + objH * 0.33}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points={`${666},${AY+objH*0.33-5} ${672},${AY+objH*0.33} ${666},${AY+objH*0.33+5}`} fill={SCI_COLORS.ray} />
      <line x1={668} y1={AY + objH * 0.33} x2={imgX} y2={AY + imgH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      {/* Object label */}
      <CalloutLabel ax={objX} ay={AY - objH} lx={140} ly={60} w={120} h={28}
        text="Object (beyond C)" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />
      {/* Image label */}
      <CalloutLabel ax={imgX} ay={AY + imgH} lx={370} ly={280} w={160} h={30}
        text="Image (between F & C)" sub="Real · Inverted · Diminished"
        textColor={SCI_COLORS.warning} theme={theme} anchor="left" />

      <g transform="translate(20,330)">
        <rect width={840} height={52} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Ray 1: Parallel to PA → reflects through F. &nbsp;&nbsp; Ray 2: Through C → retraces back through C.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Image must be drawn smaller than object, inverted, between F and C.
        </text>
      </g>
    </svg>
  );
}

// 1C. Concave Mirror — Object At C
function ConcaveMirrorAtC({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = C; const objH = 65;
  const imgX = C; const imgH = 65; // same size, inverted, at C

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cm_ac_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object at C  (m = −1)"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(c)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />
      <ConcaveMirrorArc px={P} ay={AY} r={70} theme={theme} />
      {/* Object and Image overlap at C, offset slightly */}
      <ObjectArrow x={objX - 6} ay={AY} h={objH} />
      <ImageArrow x={objX + 6} ay={AY} h={imgH} inverted color={SCI_COLORS.warning} />

      {/* Ray 1: parallel to axis → reflects through F then to image */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,124 671,128 665,132" fill={SCI_COLORS.ray} />
      <line x1={668} y1={AY - objH} x2={imgX + 6} y2={AY + imgH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Ray 2: through F → reflects parallel → but wait, for object at C:
           Ray 1: Parallel → reflects through F
           Ray 2: Through F → reflects parallel → we need its other intersection
           Actually, for object at C, rays through C retrace themselves. Let's use:
           Ray 2: Through C center (along radius) → reflects back through C */}
      <line x1={objX - 6} y1={AY - objH} x2={P} y2={AY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="676,199 680,205 684,199" fill={SCI_COLORS.ray} />
      <line x1={P} y1={AY} x2={objX + 6} y2={AY + imgH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      <CalloutLabel ax={objX - 6} ay={AY - objH} lx={230} ly={60} w={130} h={28}
        text="Object at C" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />
      <CalloutLabel ax={imgX + 6} ay={AY + imgH} lx={320} ly={290} w={180} h={30}
        text="Image at C — Same size" sub="Real · Inverted · m = −1"
        textColor={SCI_COLORS.warning} theme={theme} anchor="left" />

      <g transform="translate(20,330)">
        <rect width={840} height={52} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Magnification m = −v/u = −1. Image exactly same size as object. Benchmark: measures R = 2f.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Heights of object and image arrows MUST match in the diagram. Both at position C.
        </text>
      </g>
    </svg>
  );
}

// 1D. Concave Mirror — Object Between C and F
function ConcaveMirrorBetweenCF({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = 470; const objH = 60; // between C(400) and F(540)
  const imgX = 210; const imgH = 140; // magnified, beyond C, real inverted

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cm_cf_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object Between C and F"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(d)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />
      <ConcaveMirrorArc px={P} ay={AY} r={70} theme={theme} />
      <ObjectArrow x={objX} ay={AY} h={objH} />
      {/* Image beyond C, inverted, magnified — clipped at top */}
      <ImageArrow x={imgX} ay={AY} h={Math.min(imgH, 160)} inverted color={SCI_COLORS.warning} />

      {/* Ray 1: parallel → reflects through F */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,134 671,140 665,146" fill={SCI_COLORS.ray} />
      <line x1={668} y1={AY - objH} x2={imgX} y2={AY + Math.min(imgH,160)}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Ray 2: through F → reflects parallel */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY + objH * 0.5}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,228 671,230 665,234" fill={SCI_COLORS.ray} />
      <line x1={668} y1={AY + objH * 0.5} x2={imgX} y2={AY + Math.min(imgH,160)}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      <CalloutLabel ax={objX} ay={AY - objH} lx={340} ly={52} w={145} h={28}
        text="Object (between C and F)" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />
      <CalloutLabel ax={imgX} ay={AY + 100} lx={20} ly={290} w={175} h={30}
        text="Image beyond C — Magnified" sub="Real · Inverted · m < −1"
        textColor={SCI_COLORS.warning} theme={theme} anchor="left" />

      <g transform="translate(20,330)">
        <rect width={840} height={52} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Conjugate of Case 2: When object is between C and F, image moves beyond C (enlarged). Used in: Cinema projectors, microscopes.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Image must be clearly LARGER than object and placed beyond C.
        </text>
      </g>
    </svg>
  );
}

// 1E. Concave Mirror — Object at F (Parallel beam output)
function ConcaveMirrorAtF({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = F; const objH = 60;

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cm_f_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object at F  (Image at ∞)"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(e)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />
      <ConcaveMirrorArc px={P} ay={AY} r={70} theme={theme} />
      <ObjectArrow x={objX} ay={AY} h={objH} />

      {/* Ray 1: parallel to axis → reflects through F (which is the object position) → parallel */}
      <line x1={objX - 80} y1={AY - objH} x2={668} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,134 671,140 665,146" fill={SCI_COLORS.ray} />
      {/* Reflected ray emerges parallel to axis (going left — image at ∞) */}
      <line x1={668} y1={AY - objH} x2={30} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Ray 2: through C center, retraces */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY + objH * 0.45}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,225 671,227 665,231" fill={SCI_COLORS.ray} />
      {/* Reflected ray: parallel to axis */}
      <line x1={668} y1={AY + objH * 0.45} x2={30} y2={AY + objH * 0.45}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* ∞ label at left for image */}
      <text x={22} y={AY - objH - 8} fill={SCI_COLORS.ray} fontSize="22" fontWeight="900"
        fontFamily="serif">∞</text>
      <text x={22} y={AY + objH * 0.45 + 18} fill={SCI_COLORS.ray} fontSize="22" fontWeight="900"
        fontFamily="serif">∞</text>

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      <CalloutLabel ax={F} ay={AY - objH} lx={380} ly={55} w={145} h={28}
        text="Object at F" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />

      <g transform="translate(20,310)">
        <rect width={840} height={72} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Reflected rays emerge PARALLEL to each other and to the principal axis — image forms at infinity.
        </text>
        <text x={18} y={36} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Application: Searchlights, torches, vehicle headlights (bulb placed at F → powerful parallel beam).
        </text>
        <text x={18} y={54} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Reflected rays must be drawn STRICTLY PARALLEL. They must never converge or diverge.
        </text>
      </g>
    </svg>
  );
}

// 1F. Concave Mirror — Object Between P and F (VIRTUAL, ERECT, MAGNIFIED)
// Most tested case — 100% CBSE recurrence
function ConcaveMirrorBetweenPF({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = 610; const objH = 58; // between P(680) and F(540)
  // Virtual image BEHIND mirror (x > P = 680) — dashed
  const imgX = 760; const imgH = 110; // magnified, upright, behind mirror

  return (
    <svg viewBox="0 0 880 440" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={440} theme={theme} gradId="cm_pf_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f4ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Mirror — Object Between P and F  (Virtual, Erect, Magnified)"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.7(f) | 100% CBSE Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />
      <MirrorAxis theme={theme} y={AY} />

      {/* "Behind mirror" zone indicator */}
      <rect x={688} y={50} width={180} height={300} rx="8"
        fill={isDark ? "rgba(148,163,184,0.05)" : "rgba(148,163,184,0.08)"}
        stroke={theme.callout} strokeWidth="1" strokeDasharray="5,4" />
      <text x={778} y={42} fill={theme.muted} fontSize="9" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Behind Mirror (Virtual Region)</text>

      <ConcaveMirrorArc px={P} ay={AY} r={80} theme={theme} />
      <ObjectArrow x={objX} ay={AY} h={objH} />
      {/* Virtual image: upright (erect), dashed */}
      <ImageArrow x={imgX} ay={AY} h={imgH} inverted={false} dashed color={SCI_COLORS.virtualRay} />

      {/* Ray 1: parallel to axis → reflects through F
           After reflection it diverges; extend backward to meet virtual image */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,134 671,140 665,146" fill={SCI_COLORS.ray} />
      {/* Reflected ray (diverges away from observer, going to upper-left) */}
      <line x1={668} y1={AY - objH} x2={90} y2={AY - objH - 80}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Dashed backward extension → meets virtual image */}
      <line x1={668} y1={AY - objH} x2={imgX} y2={AY - imgH}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Ray 2: passes through C, appears to come from C direction */}
      <line x1={objX} y1={AY - objH} x2={668} y2={AY + objH * 1.2}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="665,266 671,270 665,274" fill={SCI_COLORS.ray} />
      {/* Reflected ray — diverges to lower-left */}
      <line x1={668} y1={AY + objH * 1.2} x2={90} y2={AY + 200}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Dashed backward extension → meets virtual image */}
      <line x1={668} y1={AY + objH * 1.2} x2={imgX} y2={AY - imgH}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <AxisLabel x={F} y={AY} label="F" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={C} y={AY} label="C" color={SCI_COLORS.highlight} theme={theme} />

      <CalloutLabel ax={objX} ay={AY - objH} lx={460} ly={60} w={130} h={28}
        text="Object (P to F)" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />
      <CalloutLabel ax={imgX} ay={AY - imgH} lx={680} ly={56} w={185} h={30}
        text="Virtual Image (behind mirror)" sub="Virtual · Erect · Magnified (m > +1)"
        textColor={SCI_COLORS.virtualRay} theme={theme} anchor="left" />

      {/* Legend */}
      <g transform="translate(20, 370)">
        <rect width={840} height={58} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <line x1={18} y1={22} x2={55} y2={22} stroke={SCI_COLORS.ray} strokeWidth="2.5" />
        <text x={62} y={26} fill={theme.text} fontSize="10.5" fontWeight="600"
          fontFamily="system-ui,-apple-system,sans-serif">Actual reflected ray (solid)</text>
        <line x1={280} y1={22} x2={317} y2={22} stroke={SCI_COLORS.virtualRay}
          strokeWidth="2" strokeDasharray="6,4" />
        <text x={324} y={26} fill={theme.text} fontSize="10.5" fontWeight="600"
          fontFamily="system-ui,-apple-system,sans-serif">Virtual extension behind mirror (MUST be dashed)</text>
        <text x={18} y={48} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ CRITICAL: All virtual extensions and the virtual image MUST use dashed lines. Solid virtual lines = −1 mark.
          Application: Shaving mirror, dentist's examination mirror.
        </text>
      </g>
    </svg>
  );
}

// 1G. Convex Mirror — Object at Infinity
function ConvexMirrorAtInfinity({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  // For convex mirror: P at 680, F (virtual) behind mirror at 820, C (virtual) at 960
  const FV = 820; // virtual focus behind mirror
  const CV = 960; // virtual C

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cxm_inf_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Convex Mirror — Object at Infinity"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.8(a)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={AY} />

      {/* Virtual region behind mirror */}
      <rect x={688} y={55} width={180} height={290} rx="8"
        fill={isDark ? "rgba(148,163,184,0.05)" : "rgba(148,163,184,0.07)"}
        stroke={theme.callout} strokeWidth="1" strokeDasharray="5,4" />
      <text x={778} y={48} fill={theme.muted} fontSize="9" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Behind Mirror</text>

      <ConvexMirrorArc px={P} ay={AY} r={70} theme={theme} />

      {/* Two parallel incident rays */}
      <line x1={30} y1={155} x2={688} y2={155}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={30} y1={245} x2={688} y2={245}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Reflected rays diverge (appear to come from virtual F behind mirror) */}
      <line x1={688} y1={155} x2={30} y2={70}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={688} y1={245} x2={30} y2={290}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Dashed extensions to virtual F */}
      <line x1={688} y1={155} x2={FV} y2={AY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />
      <line x1={688} y1={245} x2={FV} y2={AY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Virtual F */}
      <circle cx={FV} cy={AY} r="6" fill={SCI_COLORS.virtualRay} opacity="0.7" />
      <text x={FV} y={AY + 18} fill={SCI_COLORS.virtualRay} fontSize="13" fontWeight="800"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">F</text>

      {/* ∞ label */}
      <text x={30} y={130} fill={SCI_COLORS.ray} fontSize="26" fontWeight="900" fontFamily="serif">∞</text>

      <AxisLabel x={P} y={AY} label="P" theme={theme} />

      <g transform="translate(20,320)">
        <rect width={840} height={62} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Convex mirror always produces Virtual, Erect, Diminished image regardless of object position.
        </text>
        <text x={18} y={36} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Image at infinity forms at the virtual focus F behind the mirror (point sized).
        </text>
        <text x={18} y={52} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ F and C are ALWAYS behind the reflecting surface for a convex mirror.
        </text>
      </g>
    </svg>
  );
}

// 1H. Convex Mirror — Object between Infinity and P (General Case — Rear View Mirror)
function ConvexMirrorGeneral({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = 350; const objH = 70;
  const FV = 820; // virtual focus
  const imgX = 730; const imgH = 26; // virtual, diminished, between P and F

  return (
    <svg viewBox="0 0 880 440" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={440} theme={theme} gradId="cxm_gen_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Convex Mirror — Object Anywhere (Rear-View Mirror)"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.8(b) | 99% CBSE Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />
      <MirrorAxis theme={theme} y={AY} />

      {/* Virtual region */}
      <rect x={688} y={55} width={180} height={290} rx="8"
        fill={isDark ? "rgba(148,163,184,0.05)" : "rgba(148,163,184,0.07)"}
        stroke={theme.callout} strokeWidth="1" strokeDasharray="5,4" />
      <text x={778} y={48} fill={theme.muted} fontSize="9" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Behind Mirror (Virtual)</text>

      <ConvexMirrorArc px={P} ay={AY} r={70} theme={theme} />
      <ObjectArrow x={objX} ay={AY} h={objH} />
      {/* Virtual, erect, diminished image between P and F behind mirror */}
      <ImageArrow x={imgX} ay={AY} h={imgH} inverted={false} dashed color={SCI_COLORS.virtualRay} />

      {/* Ray 1: parallel to axis → diverges as if from F behind mirror */}
      <line x1={objX} y1={AY - objH} x2={688} y2={AY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="685,134 691,140 685,146" fill={SCI_COLORS.ray} />
      {/* Reflected: diverges to upper-left */}
      <line x1={688} y1={AY - objH} x2={80} y2={AY - objH - 55}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Extension → virtual F */}
      <line x1={688} y1={AY - objH} x2={FV} y2={AY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Ray 2: directed toward C (behind mirror, so appears to go toward 960,200) */}
      <line x1={objX} y1={AY - objH} x2={688} y2={AY + objH * 0.6}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <polygon points="685,232 691,240 685,248" fill={SCI_COLORS.ray} />
      {/* Reflected back from C direction */}
      <line x1={688} y1={AY + objH * 0.6} x2={80} y2={AY + objH * 0.6 + 30}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Extension → virtual image */}
      <line x1={688} y1={AY + objH * 0.6} x2={FV} y2={AY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Virtual F */}
      <circle cx={FV} cy={AY} r="6" fill={SCI_COLORS.virtualRay} opacity="0.7" />
      <text x={FV} y={AY + 18} fill={SCI_COLORS.virtualRay} fontSize="13" fontWeight="800"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">F (virtual)</text>

      <AxisLabel x={P} y={AY} label="P" theme={theme} />
      <CalloutLabel ax={objX} ay={AY - objH} lx={200} ly={55} w={135} h={28}
        text="Object (any position)" textColor={SCI_COLORS.ray} theme={theme} anchor="right" />
      <CalloutLabel ax={imgX} ay={AY - imgH} lx={680} ly={65} w={180} h={30}
        text="Virtual Image (P to F)" sub="Virtual · Erect · Diminished · 0 < m < 1"
        textColor={SCI_COLORS.virtualRay} theme={theme} anchor="left" />

      <g transform="translate(20,370)">
        <rect width={840} height={58} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          WHY rear-view mirror is convex: (1) Image is always erect. (2) Image is diminished → wider field of view.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Image is ALWAYS between P and F behind the mirror, regardless of object position (never forms real image).
        </text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════
// SECTION 2: LENS DIAGRAMS
// ═══════════════════════════════════════════════
const O  = 440;  // Optical Centre
const F1 = 290;  const F2 = 590; // Focal lengths (f=150)
const FF1 = 140; const FF2 = 740; // 2F points
const LAY = 200; // Lens axis y

// 2A. Glass Slab Refraction
function GlassSlabRefraction({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  // Slab: x from 340 to 540, full height
  const slabX1 = 320; const slabX2 = 540;
  const incidentY = 130; // y where incident ray meets top surface
  const incidentX1 = 150;
  // Snell's law: n1 sin i = n2 sin r, for glass n≈1.5, if i=40°, r≈25°
  // Top interface: ray enters at (320, 130), refracts inside glass
  const refractX = 430; const refractY = 290; // inside glass travel
  // Bottom interface: exits, lateral displacement d
  const exitX = 490; const exitY = 350;
  const emergentX = 700;

  return (
    <svg viewBox="0 0 880 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={420} theme={theme} gradId="slab_bg"
        gradColors={[isDark ? "#0a0f1e" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Refraction Through Rectangular Glass Slab"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.10"
        marks="5M" theme={theme} />

      {/* Glass slab */}
      <rect x={slabX1} y={80} width={slabX2 - slabX1} height={260}
        fill={SCI_COLORS.highlight} fillOpacity="0.12"
        stroke={SCI_COLORS.highlight} strokeWidth="2" />
      <text x={(slabX1 + slabX2) / 2} y={210} fill={SCI_COLORS.highlight} fontSize="13" fontWeight="700"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">Glass Slab</text>
      <text x={(slabX1 + slabX2) / 2} y={228} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">n ≈ 1.5</text>

      {/* Normal at top surface */}
      <line x1={slabX1 + 50} y1={80 - 50} x2={slabX1 + 50} y2={80 + 70}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="5,4" />
      <text x={slabX1 + 52} y={70} fill={theme.muted} fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">Normal</text>

      {/* Normal at bottom surface */}
      <line x1={refractX + 20} y1={340 - 50} x2={refractX + 20} y2={340 + 50}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="5,4" />

      {/* Incident ray */}
      <line x1={150} y1={50} x2={slabX1 + 50} y2={80}
        stroke={SCI_COLORS.ray} strokeWidth="3" markerEnd="url(#arAmber)" />
      {/* Label: angle i */}
      <text x={slabX1 + 70} y={76} fill={SCI_COLORS.ray} fontSize="14" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif">i</text>
      <text x={235} y={62} fill={SCI_COLORS.ray} fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Incident Ray</text>

      {/* Refracted ray inside glass */}
      <line x1={slabX1 + 50} y1={80} x2={refractX + 20} y2={340}
        stroke={SCI_COLORS.ray} strokeWidth="3" />
      {/* Label: angle r */}
      <text x={slabX1 + 72} y={108} fill={SCI_COLORS.ray} fontSize="14" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif">r</text>

      {/* Emergent ray */}
      <line x1={refractX + 20} y1={340} x2={700} y2={370}
        stroke={SCI_COLORS.ray} strokeWidth="3" markerEnd="url(#arAmber)" />
      <text x={630} y={360} fill={SCI_COLORS.ray} fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Emergent Ray</text>

      {/* Lateral displacement d (double-headed arrow) */}
      <line x1={150} y1={50} x2={510} y2={70}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="6,4" />
      {/* Arrow showing lateral displacement */}
      <line x1={510} y1={70} x2={700} y2={370}
        stroke={theme.muted} strokeWidth="1.2" strokeDasharray="4,4" />
      <line x1={556} y1={330} x2={refractX + 20} y2={340}
        stroke={SCI_COLORS.warning} strokeWidth="2.5"
        markerEnd="url(#arOrange)" markerStart="url(#arOrange)" />
      <text x={520} y={326} fill={SCI_COLORS.warning} fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">d</text>

      {/* Key facts */}
      <g transform="translate(610, 80)">
        <rect width={240} height={200} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
        <text x={120} y={22} fill={theme.accent} fontSize="10" fontWeight="900"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">KEY RULES</text>
        {[
          ["i = e", "Incident angle = Emergence angle"],
          ["Emergent ray ∥ Incident ray", "Both surfaces are parallel"],
          ["Lateral shift d ∝ slab thickness", "Greater thickness → more shift"],
          ["n × sin r = sin i", "Snell's Law at both surfaces"],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(12, ${34 + i * 40})`}>
            <text fill={theme.accent} fontSize="11" fontWeight="700"
              fontFamily="system-ui,-apple-system,sans-serif">{k}</text>
            <text y={16} fill={theme.muted} fontSize="9.5"
              fontFamily="system-ui,-apple-system,sans-serif">{v}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// 2B. Convex Lens — Object at Infinity
function ConvexLensAtInfinity({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="cl_inf_bg"
        gradColors={[isDark ? "#0b1022" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Convex Lens — Object at Infinity"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.16(a)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={LAY} />
      <ConvexLens ox={O} ay={LAY} h={130} theme={theme} />

      {/* Parallel incident rays */}
      <line x1={20} y1={LAY - 50} x2={O} y2={LAY - 50}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={20} y1={LAY + 50} x2={O} y2={LAY + 50}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Refracted: converge at F2 */}
      <line x1={O} y1={LAY - 50} x2={F2} y2={LAY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={O} y1={LAY + 50} x2={F2} y2={LAY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* ∞ label */}
      <text x={22} y={LAY - 60} fill={SCI_COLORS.ray} fontSize="26" fontWeight="900"
        fontFamily="serif">∞</text>

      {/* Point image at F2 */}
      <circle cx={F2} cy={LAY} r="7" fill={SCI_COLORS.ray} filter="url(#glowSm)" />

      {/* Axis labels */}
      <AxisLabel x={O} y={LAY} label="O" color={SCI_COLORS.highlight} theme={theme} />
      <AxisLabel x={F1} y={LAY} label="F₁" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={F2} y={LAY} label="F₂" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={FF1} y={LAY} label="2F₁" color={theme.muted} theme={theme} />
      <AxisLabel x={FF2} y={LAY} label="2F₂" color={theme.muted} theme={theme} />

      <CalloutLabel ax={F2} ay={LAY} lx={500} ly={60} w={175} h={30}
        text="Image at F₂ (point-sized)" sub="Real · Inverted · Highly diminished"
        textColor={SCI_COLORS.ray} theme={theme} anchor="left" />

      <g transform="translate(20,320)">
        <rect width={840} height={62} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          All parallel rays refract and converge at the second principal focus F₂.
        </text>
        <text x={18} y={36} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Application: Burning glass (concentrates sunlight), objective lens of astronomical telescope.
        </text>
        <text x={18} y={52} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Draw arrows on both incident and refracted rays. Ray through O must go STRAIGHT (no bending).
        </text>
      </g>
    </svg>
  );
}

// 2C–2F. Convex Lens cases — helper component for the standard 2-ray construction
function ConvexLensStandardCase({
  isDark, title, ncertRef, marks = "3M", marksColor,
  objX, objH, imgX, imgH, imgInverted, imgDashed = false,
  infoText, warnText,
}: {
  isDark: boolean; title: string; ncertRef: string; marks?: string; marksColor?: string;
  objX: number; objH: number; imgX: number; imgH: number;
  imgInverted: boolean; imgDashed?: boolean;
  infoText: string; warnText: string;
}) {
  const theme = useDiagramTheme(isDark);
  const imgColor = imgDashed ? SCI_COLORS.virtualRay : SCI_COLORS.warning;
  const objTip = LAY - objH;
  const imgTip = imgInverted ? LAY + imgH : LAY - imgH;

  return (
    <svg viewBox="0 0 880 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={420} theme={theme} gradId={`cl_${objX}_bg`}
        gradColors={[isDark ? "#0b1022" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title={title} chapter={`Ch 9 | ${ncertRef}`}
        marks={marks} marksColor={marksColor} theme={theme} />
      <MirrorAxis theme={theme} y={LAY} />
      <ConvexLens ox={O} ay={LAY} h={130} theme={theme} />
      <ObjectArrow x={objX} ay={LAY} h={objH} />
      <ImageArrow x={imgX} ay={LAY} h={imgH} inverted={imgInverted}
        dashed={imgDashed} color={imgColor} />

      {/* Ray 1: parallel to axis → refracts through F2 */}
      <line x1={objX} y1={objTip} x2={O} y2={objTip}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={O} y1={objTip} x2={imgX} y2={imgTip}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)"
        strokeDasharray={imgDashed ? "6,0" : undefined} />

      {/* Ray 2: through Optical Centre O → straight (undeviated) */}
      <line x1={objX} y1={objTip} x2={O} y2={LAY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <line x1={O} y1={LAY} x2={imgDashed ? imgX + 80 : imgX} y2={imgDashed ? LAY - imgH * 1.5 : imgTip}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)"
        strokeDasharray={imgDashed ? "6,4" : undefined} />

      {/* If virtual, dashed backward extension */}
      {imgDashed && (
        <>
          <line x1={O} y1={LAY} x2={imgX} y2={LAY - imgH}
            stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />
          <line x1={O} y1={objTip} x2={imgX} y2={LAY - imgH}
            stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />
        </>
      )}

      <AxisLabel x={O} y={LAY} label="O" color={SCI_COLORS.highlight} theme={theme} />
      <AxisLabel x={F1} y={LAY} label="F₁" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={F2} y={LAY} label="F₂" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={FF1} y={LAY} label="2F₁" color={theme.muted} theme={theme} />
      <AxisLabel x={FF2} y={LAY} label="2F₂" color={theme.muted} theme={theme} />

      <g transform="translate(20,340)">
        <rect width={840} height={66} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={20} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">{infoText}</text>
        <text x={18} y={42} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">⚠ {warnText}</text>
      </g>
    </svg>
  );
}

// 2G. Concave Lens — Object at Infinity
function ConcaveLensAtInfinity({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const F1V = 590; // virtual F1 on right side for concave lens
  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="ccl_inf_bg"
        gradColors={[isDark ? "#0b1022" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Lens — Object at Infinity"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.17(a)"
        marks="3M" theme={theme} />
      <MirrorAxis theme={theme} y={LAY} />
      <ConcaveLens ox={O} ay={LAY} h={130} theme={theme} />

      {/* Two parallel incident rays */}
      <line x1={20} y1={LAY - 50} x2={O} y2={LAY - 50}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={20} y1={LAY + 50} x2={O} y2={LAY + 50}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Refracted rays diverge (appear to come from virtual F1 on LEFT side) */}
      <line x1={O} y1={LAY - 50} x2={820} y2={LAY - 100}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={O} y1={LAY + 50} x2={820} y2={LAY + 100}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* Dashed backward extension → virtual F1 on left of lens */}
      <line x1={O} y1={LAY - 50} x2={290} y2={LAY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />
      <line x1={O} y1={LAY + 50} x2={290} y2={LAY}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Virtual F1 */}
      <circle cx={290} cy={LAY} r="6" fill={SCI_COLORS.virtualRay} opacity="0.7" />
      <AxisLabel x={O} y={LAY} label="O" color={SCI_COLORS.highlight} theme={theme} />
      <text x={290} y={LAY + 20} fill={SCI_COLORS.virtualRay} fontSize="13" fontWeight="800"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">F₁ (virtual)</text>

      <text x={22} y={LAY - 62} fill={SCI_COLORS.ray} fontSize="26" fontWeight="900"
        fontFamily="serif">∞</text>

      <g transform="translate(20,310)">
        <rect width={840} height={70} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={20} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Concave (diverging) lens: Parallel rays diverge after refraction. Backward extensions meet at virtual F₁.
        </text>
        <text x={18} y={40} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Image at virtual F₁: Virtual, Erect, Highly Diminished. Focal length f is negative for concave lens.
        </text>
        <text x={18} y={58} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Concave lens ALWAYS produces virtual, erect, diminished image regardless of object position.
        </text>
      </g>
    </svg>
  );
}

// 2H. Concave Lens — General Case (Myopia correction)
function ConcaveLensGeneral({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const objX = 150; const objH = 70;
  const imgX = 380; const imgH = 32; // virtual, diminished, between O and F1

  return (
    <svg viewBox="0 0 880 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={420} theme={theme} gradId="ccl_gen_bg"
        gradColors={[isDark ? "#0b1022" : "#f0f9ff", isDark ? "#060812" : "#e8f4fd"]} />
      <DiagramTitleBar title="Concave Lens — Object Between ∞ and O  (Myopia Correction)"
        chapter="Ch 9: Light — Reflection and Refraction | NCERT Fig 9.17(b) | 99% Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />
      <MirrorAxis theme={theme} y={LAY} />
      <ConcaveLens ox={O} ay={LAY} h={130} theme={theme} />
      <ObjectArrow x={objX} ay={LAY} h={objH} />
      {/* Virtual, erect, diminished image between O and F1 */}
      <ImageArrow x={imgX} ay={LAY} h={imgH} inverted={false} dashed color={SCI_COLORS.virtualRay} />

      {/* Ray 1: parallel to axis → diverges as if from F1 */}
      <line x1={objX} y1={LAY - objH} x2={O} y2={LAY - objH}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={O} y1={LAY - objH} x2={820} y2={LAY - objH - 70}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Backward extension to virtual image tip */}
      <line x1={O} y1={LAY - objH} x2={imgX} y2={LAY - imgH}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      {/* Ray 2: through O → continues straight */}
      <line x1={objX} y1={LAY - objH} x2={O} y2={LAY}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <line x1={O} y1={LAY} x2={820} y2={LAY + 30}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      {/* Backward ext */}
      <line x1={O} y1={LAY} x2={imgX} y2={LAY - imgH}
        stroke={SCI_COLORS.virtualRay} strokeWidth="1.8" strokeDasharray="6,4" />

      <AxisLabel x={O} y={LAY} label="O" color={SCI_COLORS.highlight} theme={theme} />
      <AxisLabel x={F1} y={LAY} label="F₁" color={SCI_COLORS.ray} theme={theme} />
      <AxisLabel x={F2} y={LAY} label="F₂" color={SCI_COLORS.ray} theme={theme} />

      <CalloutLabel ax={objX} ay={LAY - objH} lx={50} ly={55} w={130} h={28}
        text="Object" textColor={SCI_COLORS.ray} theme={theme} anchor="left" />
      <CalloutLabel ax={imgX} ay={LAY - imgH} lx={220} ly={54} w={190} h={30}
        text="Virtual Image (O to F₁)" sub="Virtual · Erect · Diminished"
        textColor={SCI_COLORS.virtualRay} theme={theme} anchor="left" />

      <g transform="translate(20,340)">
        <rect width={840} height={66} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={20} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Concave lens: image always forms between F₁ and O on the SAME side as the object — never crosses to the other side.
        </text>
        <text x={18} y={42} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Used to correct MYOPIA (short-sightedness): focal length f = −d (far point distance). Power P = 1/f (in metres).
        </text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════
// SECTION 3: HUMAN EYE & DISPERSION
// ═══════════════════════════════════════════════

// 3A. Human Eye Anatomy (cross-section)
function HumanEyeAnatomy({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const cx = 380; const cy = 210; // eye center
  const rx = 130; const ry = 120;

  return (
    <svg viewBox="0 0 880 460" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={460} theme={theme} gradId="eye_bg"
        gradColors={[isDark ? "#0a0e1e" : "#f0f9ff", isDark ? "#060810" : "#e8f4fd"]} />
      <DiagramTitleBar title="Anatomy of the Human Eye"
        chapter="Ch 10: The Human Eye and the Colourful World | NCERT Fig 10.1 | 98% Recurrence"
        marks="5M" theme={theme} />

      <defs>
        <radialGradient id="eyeWhite" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor={isDark ? "#1e3a5f" : "#e8f4fd"} />
          <stop offset="100%" stopColor={isDark ? "#0d1f3a" : "#bfdbfe"} />
        </radialGradient>
        <radialGradient id="irisGrad" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <radialGradient id="lensGrad" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Main eyeball - sclera */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
        fill="url(#eyeWhite)" stroke={SCI_COLORS.highlight} strokeWidth="3" />

      {/* Retina (inner back wall) */}
      <path d={`M ${cx - rx * 0.3} ${cy - ry * 0.92}
        Q ${cx - rx * 0.85} ${cy} ${cx - rx * 0.3} ${cy + ry * 0.92}`}
        fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="6"
        strokeLinecap="round" />

      {/* Cornea (transparent front bulge) */}
      <path d={`M ${cx + rx * 0.82} ${cy - ry * 0.38}
        Q ${cx + rx * 1.22} ${cy} ${cx + rx * 0.82} ${cy + ry * 0.38}`}
        fill={SCI_COLORS.highlight} fillOpacity="0.18"
        stroke={SCI_COLORS.highlight} strokeWidth="3.5" />

      {/* Iris */}
      <ellipse cx={cx + rx * 0.72} cy={cy} rx={22} ry={32}
        fill="url(#irisGrad)" stroke="#1d4ed8" strokeWidth="2" />

      {/* Pupil */}
      <ellipse cx={cx + rx * 0.72} cy={cy} rx={10} ry={15}
        fill={isDark ? "#000" : "#1e293b"} />

      {/* Crystalline lens */}
      <ellipse cx={cx + rx * 0.45} cy={cy} rx={18} ry={30}
        fill="url(#lensGrad)" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />

      {/* Yellow spot / Fovea */}
      <circle cx={cx - rx * 0.18} cy={cy} r="6" fill="#fbbf24" />

      {/* Blind spot */}
      <circle cx={cx - rx * 0.18} cy={cy + 30} r="5" fill="#ef4444" />

      {/* Optic nerve */}
      <path d={`M ${cx - rx * 0.18} ${cy + 28} Q ${cx - rx * 0.4} ${cy + 50} ${cx - rx * 0.6} ${cy + 60}`}
        fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
      <line x1={cx - rx * 0.6} y1={cy + 60} x2={cx - rx} y2={cy + 80}
        stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />

      {/* Ciliary muscle */}
      <ellipse cx={cx + rx * 0.3} cy={cy - 35} rx={12} ry={8}
        fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2" />
      <ellipse cx={cx + rx * 0.3} cy={cy + 35} rx={12} ry={8}
        fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2" />
      {/* Suspensory ligaments */}
      <line x1={cx + rx * 0.3} y1={cy - 28} x2={cx + rx * 0.45} y2={cy - 20}
        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3,2" />
      <line x1={cx + rx * 0.3} y1={cy + 28} x2={cx + rx * 0.45} y2={cy + 20}
        stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* Light ray path */}
      <line x1={780} y1={cy - 20} x2={cx + rx * 0.85} y2={cy - 20}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />
      <line x1={cx + rx * 0.85} y1={cy - 20} x2={cx + rx * 0.45} y2={cy - 5}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <line x1={cx + rx * 0.45} y1={cy - 5} x2={cx - rx * 0.18} y2={cy}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" markerEnd="url(#arAmber)" />

      {/* LABELS */}
      {/* Cornea */}
      <CalloutLabel ax={cx + rx * 1.05} ay={cy} lx={578} ly={148} w={140} h={30}
        text="Cornea" sub="Main refraction (most bending)"
        textColor={SCI_COLORS.highlight} theme={theme} anchor="left" />
      {/* Iris */}
      <CalloutLabel ax={cx + rx * 0.72} ay={cy - 34} lx={580} ly={192} w={140} h={30}
        text="Iris (coloured)" sub="Controls pupil size"
        textColor="#3b82f6" theme={theme} anchor="left" />
      {/* Pupil */}
      <CalloutLabel ax={cx + rx * 0.72} ay={cy + 16} lx={580} ly={238} w={140} h={30}
        text="Pupil" sub="Aperture controlling light"
        textColor={theme.accent} theme={theme} anchor="left" />
      {/* Lens */}
      <CalloutLabel ax={cx + rx * 0.45} ay={cy - 32} lx={580} ly={284} w={155} h={30}
        text="Crystalline Lens" sub="Curvature changed by ciliary"
        textColor={SCI_COLORS.highlight} theme={theme} anchor="left" />
      {/* Ciliary */}
      <CalloutLabel ax={cx + rx * 0.3} ay={cy - 38} lx={150} ly={58} w={145} h={30}
        text="Ciliary Muscles" sub="Alter lens shape (accommodation)"
        textColor="#a78bfa" theme={theme} anchor="left" />
      {/* Retina */}
      <CalloutLabel ax={cx - rx * 0.28} ay={cy + 60} lx={20} ly={168} w={140} h={30}
        text="Retina" sub="Rods (light) + Cones (colour)"
        textColor={SCI_COLORS.oxygen} theme={theme} anchor="left" />
      {/* Optic nerve */}
      <CalloutLabel ax={cx - rx * 0.8} ay={cy + 75} lx={20} ly={216} w={140} h={30}
        text="Optic Nerve" sub="Carries impulse to brain"
        textColor="#f59e0b" theme={theme} anchor="left" />
      {/* Yellow spot */}
      <CalloutLabel ax={cx - rx * 0.18} ay={cy} lx={150} ly={110} w={140} h={30}
        text="Yellow Spot" sub="Region of clearest vision"
        textColor="#fbbf24" theme={theme} anchor="left" />
      {/* Blind spot */}
      <CalloutLabel ax={cx - rx * 0.18} ay={cy + 30} lx={20} ly={266} w={140} h={30}
        text="Blind Spot" sub="Optic nerve exit — no vision"
        textColor={SCI_COLORS.oxygen} theme={theme} anchor="left" />

      {/* Exam tip */}
      <g transform="translate(20, 400)">
        <rect width={840} height={46} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Power of accommodation: Ciliary muscles contract → lens becomes thicker (shorter f) for near vision. Relax → lens thins for far vision.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Most refraction occurs at CORNEA (not lens). Lens fine-tunes focus using accommodation.
        </text>
      </g>
    </svg>
  );
}

// 3B. Myopia — 3-panel diagram
function MyopiaCorrection({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);

  const drawEye = (panelY: number, type: "normal" | "defective" | "corrected") => {
    const ex = 480; const ey = panelY + 50;
    const erx = 90; const ery = 65;
    const retX = ex - erx * 0.2;
    const focusX = type === "defective" ? ex - erx * 0.55 : retX; // in front of retina for defective

    return (
      <g>
        {/* Eyeball */}
        <ellipse cx={ex} cy={ey} rx={erx} ry={ery}
          fill={isDark ? "#0d1f3a" : "#dbeafe"} stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        {/* Retina */}
        <path d={`M ${retX} ${ey - ery * 0.9} Q ${ex - erx * 0.85} ${ey} ${retX} ${ey + ery * 0.9}`}
          fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="5" strokeLinecap="round" />
        {/* Cornea */}
        <path d={`M ${ex + erx * 0.82} ${ey - ery * 0.4} Q ${ex + erx * 1.18} ${ey} ${ex + erx * 0.82} ${ey + ery * 0.4}`}
          fill={SCI_COLORS.highlight} fillOpacity="0.15" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        {/* Lens */}
        <ellipse cx={ex + erx * 0.4} cy={ey} rx={12} ry={22}
          fill={SCI_COLORS.highlight} fillOpacity="0.2" stroke={SCI_COLORS.highlight} strokeWidth="2" />
        {/* Correcting concave lens (only for corrected) */}
        {type === "corrected" && (
          <ellipse cx={ex + erx * 1.4} cy={ey} rx={8} ry={30}
            fill={SCI_COLORS.co2} fillOpacity="0.2" stroke={SCI_COLORS.co2} strokeWidth="2.5" />
        )}
        {/* Incident rays */}
        {[ey - 30, ey + 30].map((ry2, i) => (
          <g key={i}>
            <line x1={type === "corrected" ? ex - 180 : ex - 150} y1={ry2}
              x2={type === "corrected" ? ex + erx * 1.4 - 8 : ex + erx * 0.82}
              y2={ry2}
              stroke={SCI_COLORS.ray} strokeWidth="2" markerEnd="url(#arAmber)" />
            {type === "corrected" && (
              <line x1={ex + erx * 1.4 + 8} y1={ry2}
                x2={ex + erx * 0.82} y2={ry2 + (i === 0 ? 8 : -8)}
                stroke={SCI_COLORS.ray} strokeWidth="2" />
            )}
            {/* Focus point */}
            <line
              x1={ex + erx * 0.82} y1={ry2 + (type === "corrected" ? (i === 0 ? 8 : -8) : 0)}
              x2={focusX} y2={ey}
              stroke={SCI_COLORS.ray} strokeWidth="2" markerEnd="url(#arAmber)" />
          </g>
        ))}
        {/* Focus dot */}
        <circle cx={focusX} cy={ey} r="5"
          fill={type === "defective" ? SCI_COLORS.warning : "#22c55e"} />
        {/* Focus label */}
        <text x={focusX} y={ey - 10}
          fill={type === "defective" ? SCI_COLORS.warning : "#22c55e"}
          fontSize="9" fontWeight="700" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">
          {type === "defective" ? "Focus in front!" : "Focus on Retina ✓"}
        </text>
      </g>
    );
  };

  return (
    <svg viewBox="0 0 880 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={500} theme={theme} gradId="myopia_bg"
        gradColors={[isDark ? "#0a0e1e" : "#fff1f2", isDark ? "#060810" : "#ffe4e6"]} />
      <DiagramTitleBar title="Myopia (Near-Sightedness) — Defect and Correction"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.2 | 100% CBSE Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />

      {/* Panel 1: Far Point */}
      <g transform="translate(0, 50)">
        <rect x={20} y={5} width={240} height={35} rx="8"
          fill={SCI_COLORS.co2} fillOpacity="0.18" stroke={SCI_COLORS.co2} strokeWidth="1" />
        <text x={140} y={27} fill={SCI_COLORS.co2} fontSize="12" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">
          MYOPIA: Far Point shifts Nearer
        </text>
        {/* Arrows: far object clearly visible, distant blurry */}
        <text x={40} y={60} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">NEAR: seen clearly ✓</text>
        <text x={40} y={80} fill={SCI_COLORS.warning} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">FAR: blurred image ✗</text>
        <text x={40} y={102} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">Causes:</text>
        <text x={40} y={118} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">① Eyeball too long (elongated)</text>
        <text x={40} y={134} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">② Eye lens too curved (thick)</text>
      </g>

      {/* Panel 2: Defective eye */}
      <g transform="translate(0, 200)">
        <text x={300} y={15} fill={SCI_COLORS.warning} fontSize="11" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">
          DEFECTIVE EYE (Image in front of Retina)
        </text>
        {drawEye(20, "defective")}
        {/* Label */}
        <text x={240} y={135} fill={theme.text} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">Distant parallel rays</text>
        <text x={240} y={150} fill={theme.text} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">converge BEFORE retina</text>
      </g>

      {/* Panel 3: Corrected eye */}
      <g transform="translate(440, 200)">
        <text x={200} y={15} fill="#22c55e" fontSize="11" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">
          CORRECTED EYE (Concave Lens)
        </text>
        {drawEye(20, "corrected")}
        <text x={10} y={135} fill={theme.text} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">Concave lens diverges</text>
        <text x={10} y={150} fill={theme.text} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">rays → focus on retina ✓</text>
      </g>

      {/* Bottom info */}
      <g transform="translate(20, 430)">
        <rect width={840} height={52} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Correction: Concave (diverging) lens of power P = −1/f diopters. Focal length f = distance to far point.
        </text>
        <text x={18} y={38} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ CBSE needs all 3 panels: (a) Far point diagram, (b) Defective eye (image in FRONT of retina), (c) Corrected with concave lens.
        </text>
      </g>
    </svg>
  );
}

// 3C. Hypermetropia — 3-panel diagram
function HypermetropiaCorrection({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);

  return (
    <svg viewBox="0 0 880 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={500} theme={theme} gradId="hyper_bg"
        gradColors={[isDark ? "#0a0e1e" : "#f0fdf4", isDark ? "#060810" : "#dcfce7"]} />
      <DiagramTitleBar title="Hypermetropia (Far-Sightedness) — Defect and Correction"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.3 | 99% CBSE Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />

      {/* Causes panel */}
      <g transform="translate(20, 55)">
        <rect width={240} height={130} rx="10"
          fill={theme.labelBg} stroke="#22c55e" strokeWidth="1.5" />
        <text x={120} y={20} fill="#22c55e" fontSize="11" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">HYPERMETROPIA</text>
        <text x={12} y={40} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">NEAR objects: blurred ✗</text>
        <text x={12} y={58} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">FAR objects: seen clearly ✓</text>
        <text x={12} y={78} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">Causes:</text>
        <text x={12} y={96} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">① Eyeball too short/small</text>
        <text x={12} y={114} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">② Eye lens too thin (long f)</text>
      </g>

      {/* Defective eye — image forms BEHIND retina */}
      <g transform="translate(0, 210)">
        <text x={300} y={12} fill={SCI_COLORS.warning} fontSize="11" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">
          DEFECTIVE EYE (Image behind Retina)
        </text>
        {/* Simple eye cross-section */}
        <ellipse cx={480} cy={70} rx={90} ry={65}
          fill={isDark ? "#0d1f3a" : "#dbeafe"} stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        {/* Retina */}
        <path d={`M 462 7 Q 394 70 462 133`}
          fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="5" strokeLinecap="round" />
        {/* Cornea */}
        <path d={`M 554 42 Q 590 70 554 98`}
          fill={SCI_COLORS.highlight} fillOpacity="0.15" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        {/* Short eyeball — image would focus behind retina */}
        {/* Incoming rays */}
        <line x1={280} y1={45} x2={554} y2={45} stroke={SCI_COLORS.ray} strokeWidth="2"  />
        <polygon points="551,41 557,45 551,49" fill={SCI_COLORS.ray} />
        <line x1={280} y1={95} x2={554} y2={95} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <polygon points="551,91 557,95 551,99" fill={SCI_COLORS.ray} />
        {/* Focus behind retina */}
        <line x1={554} y1={45} x2={430} y2={70} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <line x1={554} y1={95} x2={430} y2={70} stroke={SCI_COLORS.ray} strokeWidth="2" />
        {/* Actual focus point behind retina — shown as extension through retina */}
        <line x1={430} y1={70} x2={320} y2={70}
          stroke={SCI_COLORS.warning} strokeWidth="2" strokeDasharray="6,4" />
        <circle cx={310} cy={70} r="5" fill={SCI_COLORS.warning} />
        <text x={310} y={58} fill={SCI_COLORS.warning} fontSize="9" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Focus BEHIND retina</text>
      </g>

      {/* Corrected eye — convex lens */}
      <g transform="translate(440, 210)">
        <text x={200} y={12} fill="#22c55e" fontSize="11" fontWeight="800"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">
          CORRECTED EYE (Convex Lens)
        </text>
        <ellipse cx={280} cy={70} rx={90} ry={65}
          fill={isDark ? "#0d1f3a" : "#dbeafe"} stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        <path d="M 262 7 Q 194 70 262 133"
          fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="5" strokeLinecap="round" />
        <path d="M 354 42 Q 390 70 354 98"
          fill={SCI_COLORS.highlight} fillOpacity="0.15" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        {/* Convex correcting lens */}
        <ellipse cx={90} cy={70} rx={10} ry={30}
          fill={SCI_COLORS.oxygen} fillOpacity="0.2" stroke={SCI_COLORS.oxygen} strokeWidth="2.5" />
        {/* Rays converge to retina */}
        <line x1={0} y1={48} x2={80} y2={48} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <polygon points="77,44 83,48 77,52" fill={SCI_COLORS.ray} />
        <line x1={0} y1={92} x2={80} y2={92} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <polygon points="77,88 83,92 77,96" fill={SCI_COLORS.ray} />
        {/* After convex lens, converges toward retina */}
        <line x1={100} y1={45} x2={354} y2={42} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <line x1={100} y1={95} x2={354} y2={98} stroke={SCI_COLORS.ray} strokeWidth="2" />
        <line x1={354} y1={42} x2={230} y2={70} stroke={SCI_COLORS.ray} strokeWidth="2" markerEnd="url(#arAmber)" />
        <line x1={354} y1={98} x2={230} y2={70} stroke={SCI_COLORS.ray} strokeWidth="2" markerEnd="url(#arAmber)" />
        <circle cx={230} cy={70} r="5" fill="#22c55e" />
        <text x={230} y={58} fill="#22c55e" fontSize="9" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">On retina ✓</text>
      </g>

      {/* Bottom info */}
      <g transform="translate(20, 428)">
        <rect width={840} height={58} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Correction: Convex (converging) lens. It converges diverging rays so they focus on the retina.
        </text>
        <text x={18} y={36} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          Near point of hypermetropic eye is beyond 25 cm (e.g. 1 m). Convex lens forms virtual image at this near point.
        </text>
        <text x={18} y={52} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Correction: CONCAVE for Myopia, CONVEX for Hypermetropia. Reversing these = full mark penalty.
        </text>
      </g>
    </svg>
  );
}

// 3D. Prism Refraction (Angles A, D, i, e)
function PrismRefraction({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  // Prism: equilateral triangle, apex at top-center
  const ax = 420; const ay = 60;  // apex
  const bl = 200; const br = 640; const bY = 320; // base corners

  return (
    <svg viewBox="0 0 880 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={420} theme={theme} gradId="prism_bg"
        gradColors={[isDark ? "#0b0e22" : "#fefce8", isDark ? "#060812" : "#fef9c3"]} />
      <DiagramTitleBar title="Refraction Through Triangular Glass Prism"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.4 | 99% Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />

      {/* Glass prism (filled triangle) */}
      <polygon points={`${ax},${ay} ${bl},${bY} ${br},${bY}`}
        fill={SCI_COLORS.highlight} fillOpacity="0.18"
        stroke={SCI_COLORS.highlight} strokeWidth="3" />

      {/* Face labels */}
      <text x={(ax + bl) / 2 - 25} y={(ay + bY) / 2} fill={SCI_COLORS.highlight} fontSize="11"
        fontFamily="system-ui,-apple-system,sans-serif">Face AB</text>
      <text x={(ax + br) / 2 + 10} y={(ay + bY) / 2} fill={SCI_COLORS.highlight} fontSize="11"
        fontFamily="system-ui,-apple-system,sans-serif">Face AC</text>

      {/* Incident ray on left face */}
      {/* Entry point on AB: midpoint ≈ (310, 190) */}
      const entryX = 310; const entryY = 190;
      <line x1={100} y1={120} x2={310} y2={190}
        stroke={SCI_COLORS.ray} strokeWidth="3" markerEnd="url(#arAmber)" />
      <text x={160} y={145} fill={SCI_COLORS.ray} fontSize="13" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif">Incident Ray</text>

      {/* Normal at entry — perpendicular to AB */}
      <line x1={360} y1={145} x2={260} y2={235}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="5,4" />
      <text x={365} y={140} fill={theme.muted} fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">N</text>

      {/* Angle of incidence i */}
      <path d="M 270 155 Q 290 175 310 190" fill="none" stroke={SCI_COLORS.ray} strokeWidth="1.5" />
      <text x={260} y={150} fill={SCI_COLORS.ray} fontSize="14" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif">i</text>

      {/* Refracted ray inside prism */}
      <line x1={310} y1={190} x2={530} y2={235}
        stroke={SCI_COLORS.ray} strokeWidth="3" />

      {/* Angle of refraction r1 */}
      <path d="M 310 195 Q 330 210 350 220" fill="none" stroke={SCI_COLORS.ray} strokeWidth="1.5" />
      <text x={318} y={218} fill={SCI_COLORS.ray} fontSize="13" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">r</text>

      {/* Normal at exit face AC */}
      <line x1={490} y1={175} x2={570} y2={285}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="5,4" />
      <text x={580} y={280} fill={theme.muted} fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">M</text>

      {/* Angle of emergence e at exit */}
      <path d="M 530 250 Q 548 255 558 268" fill="none" stroke={SCI_COLORS.ray} strokeWidth="1.5" />
      <text x={550} y={245} fill={SCI_COLORS.ray} fontSize="13" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">e</text>

      {/* Emergent ray */}
      <line x1={530} y1={235} x2={740} y2={330}
        stroke={SCI_COLORS.ray} strokeWidth="3" markerEnd="url(#arAmber)" />
      <text x={680} y={326} fill={SCI_COLORS.ray} fontSize="12" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Emergent Ray</text>

      {/* Angle of deviation D — between extended incident and emergent */}
      <line x1={100} y1={120} x2={400} y2={270}
        stroke={theme.muted} strokeWidth="1.5" strokeDasharray="5,4" />
      <path d="M 350 250 Q 370 270 380 280" fill="none" stroke={SCI_COLORS.warning} strokeWidth="2" />
      <text x={325} y={300} fill={SCI_COLORS.warning} fontSize="16" fontWeight="900"
        fontFamily="system-ui,-apple-system,sans-serif">D</text>
      <text x={300} y={320} fill={theme.muted} fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">Angle of Deviation</text>

      {/* Angle A (apex of prism) */}
      <path d="M 390 90 Q 420 80 450 90" fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2" />
      <text x={408} y={78} fill={SCI_COLORS.highlight} fontSize="16" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif">A</text>

      {/* Right panel: Key formula */}
      <g transform="translate(760, 80)">
        <rect width={100} height={260} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
        <text x={50} y={22} fill={theme.accent} fontSize="9.5" fontWeight="900"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">KEY</text>
        {[
          ["A + D = i + e", "Prism formula"],
          ["Violet bends most", "(shortest λ)"],
          ["Red bends least", "(longest λ)"],
          ["D minimum", "special case"],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(8, ${34 + i * 54})`}>
            <text fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
              fontFamily="system-ui,-apple-system,sans-serif">{k}</text>
            <text y={16} fill={theme.muted} fontSize="9"
              fontFamily="system-ui,-apple-system,sans-serif">{v}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// 3E. VIBGYOR Dispersion
function VIBGYORDispersion({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const prismColors = [
    ["#8b5cf6", "Violet (most deviation)"],
    ["#6366f1", "Indigo"],
    ["#3b82f6", "Blue"],
    ["#22c55e", "Green"],
    ["#fbbf24", "Yellow"],
    ["#f97316", "Orange"],
    ["#ef4444", "Red (least deviation)"],
  ];

  return (
    <svg viewBox="0 0 880 430" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={430} theme={theme} gradId="vibgyor_bg"
        gradColors={[isDark ? "#0b0e22" : "#fafafa", isDark ? "#060812" : "#f1f5f9"]} />
      <DiagramTitleBar title="Dispersion of White Light by Glass Prism — VIBGYOR Spectrum"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.5 | 98% Recurrence"
        marks="3M" theme={theme} />

      {/* Prism */}
      <polygon points="330,60 190,340 470,340"
        fill={SCI_COLORS.highlight} fillOpacity="0.15"
        stroke={SCI_COLORS.highlight} strokeWidth="3" />

      {/* Incident white light beam */}
      <line x1={80} y1={195} x2={252} y2={195}
        stroke="#f1f5f9" strokeWidth="14" strokeLinecap="round"
        markerEnd="url(#arWhite)" opacity="0.9" />
      <text x={60} y={185} fill="#f1f5f9" fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">White light</text>

      {/* Dispersed rays emerging from right face */}
      {prismColors.map(([color], i) => {
        const n = prismColors.length;
        const spread = 160; // total spread
        const startY = 340 - 160 + i * (spread / n); // from top (violet) to bottom (red)
        const endY = 370 - 170 + i * (spread / n) + 8;
        return (
          <line key={i}
            x1={400} y1={320 - 20 + i * 4}
            x2={820} y2={210 + i * 24}
            stroke={color} strokeWidth="3" strokeLinecap="round"
            markerEnd={`url(#arAmber)`} opacity="0.9" />
        );
      })}

      {/* Spectrum labels on right */}
      {prismColors.map(([color, name], i) => (
        <text key={i}
          x={828} y={216 + i * 24}
          fill={color} fontSize="11" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          {name}
        </text>
      ))}

      {/* Screen line */}
      <line x1={818} y1={200} x2={818} y2={390}
        stroke={theme.muted} strokeWidth="3" strokeLinecap="round" />
      <text x={818} y={192} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Screen</text>

      {/* Bottom info */}
      <g transform="translate(20, 370)">
        <rect width={840} height={48} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Cause of dispersion: Different colours travel at different speeds in glass → different refractive indices → different deviation angles.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ CRITICAL: RED is at TOP of spectrum, VIOLET at BOTTOM. Reversing this order = ZERO marks. V-I-B-G-Y-O-R from bottom to top.
        </text>
      </g>
    </svg>
  );
}

// 3F. Spectrum Recombination (Newton's Inverted Prism)
function SpectrumRecombination({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  const colors = ["#8b5cf6","#6366f1","#3b82f6","#22c55e","#fbbf24","#f97316","#ef4444"];

  return (
    <svg viewBox="0 0 880 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={400} theme={theme} gradId="recomb_bg"
        gradColors={[isDark ? "#0b0e22" : "#fafafa", isDark ? "#060812" : "#f1f5f9"]} />
      <DiagramTitleBar title="Recombination of White Light — Newton's Inverted Prism"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.6 | 98% Recurrence"
        marks="5M" theme={theme} />

      {/* Prism 1 (normal) */}
      <polygon points="200,50 90,290 310,290"
        fill={SCI_COLORS.highlight} fillOpacity="0.14"
        stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
      <text x={200} y={300} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Prism 1</text>

      {/* Prism 2 (INVERTED — base at top) */}
      <polygon points="640,280 530,40 750,40"
        fill={SCI_COLORS.highlight} fillOpacity="0.14"
        stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
      <text x={640} y={300} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Prism 2 (INVERTED)</text>

      {/* Incident white ray into prism 1 */}
      <line x1={20} y1={170} x2={145} y2={170}
        stroke="#f1f5f9" strokeWidth="10" strokeLinecap="round" markerEnd="url(#arWhite)" opacity="0.9" />

      {/* Dispersed rays from prism 1 to prism 2 */}
      {colors.map((color, i) => {
        const y1 = 245 - i * 20;
        const y2 = 140 + i * 22;
        return (
          <line key={i}
            x1={258} y1={y1}
            x2={532} y2={y2}
            stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        );
      })}

      {/* Recombined white ray emerging from prism 2 */}
      <line x1={732} y1={162} x2={860} y2={162}
        stroke="#f1f5f9" strokeWidth="10" strokeLinecap="round" markerEnd="url(#arWhite)" opacity="0.9" />
      <text x={790} y={152} fill="#f1f5f9" fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">White Light</text>

      <g transform="translate(20, 330)">
        <rect width={840} height={52} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Second identical prism INVERTED (base opposite): recombines 7 colours back into white light.
        </text>
        <text x={18} y={36} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Proves: White light is a mixture of 7 colours. Prism does NOT produce colours — it only separates them.
        </text>
      </g>
    </svg>
  );
}

// 3G. Rainbow Formation
function RainbowFormation({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);

  return (
    <svg viewBox="0 0 880 430" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={430} theme={theme} gradId="rainbow_bg"
        gradColors={[isDark ? "#0a0e22" : "#f0f9ff", isDark ? "#060810" : "#e0f2fe"]} />
      <DiagramTitleBar title="Rainbow Formation — Refraction + TIR + Refraction in Water Droplets"
        chapter="Ch 10: The Human Eye | NCERT Fig 10.8 | 99% Recurrence"
        marks="5M" theme={theme} />

      {/* Raindrop (large circle) */}
      <circle cx={400} cy={200} r={120}
        fill={SCI_COLORS.highlight} fillOpacity="0.12"
        stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
      <text x={400} y={205} fill={SCI_COLORS.highlight} fontSize="13" fontWeight="700"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">Raindrop</text>
      <text x={400} y={223} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">(acts as tiny prism)</text>

      {/* Step 1: Incident white ray → Entry refraction */}
      <line x1={80} y1={140} x2={285} y2={152}
        stroke="#f1f5f9" strokeWidth="5" strokeLinecap="round" markerEnd="url(#arWhite)" />
      <text x={100} y={130} fill="#f1f5f9" fontSize="11" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">① Sunlight (white)</text>

      {/* Refraction inside droplet (violet most, red least) */}
      <line x1={285} y1={152} x2={510} y2={310}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />

      {/* Step 2: TIR at back of droplet */}
      <line x1={510} y1={310} x2={285} y2={260}
        stroke={SCI_COLORS.ray} strokeWidth="2.5" />
      <text x={540} y={326} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">② TIR at back</text>

      {/* Step 3: Exit refraction → dispersed colours */}
      {["#ef4444","#f97316","#fbbf24","#22c55e","#3b82f6","#6366f1","#8b5cf6"].map((color, i) => (
        <line key={i}
          x1={285} y1={260}
          x2={80} y2={230 + i * 24}
          stroke={color} strokeWidth="2.5" strokeLinecap="round"
          markerEnd="url(#arAmber)" />
      ))}
      <text x={30} y={222} fill="#ef4444" fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">Red (42°)</text>
      <text x={30} y={398} fill="#8b5cf6" fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">Violet (40°)</text>
      <text x={30} y={268} fill={theme.muted} fontSize="10"
        fontFamily="system-ui,-apple-system,sans-serif">③ Exit — dispersed VIBGYOR</text>

      {/* Observer icon */}
      <circle cx={80} cy={320} r={14} fill={SCI_COLORS.highlight} fillOpacity="0.3"
        stroke={SCI_COLORS.highlight} strokeWidth="2" />
      <text x={80} y={326} fill={theme.text} fontSize="11" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">👁</text>
      <text x={80} y={344} fill={theme.muted} fontSize="9" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Observer</text>

      {/* Sun behind observer */}
      <text x={80} y={384} fill="#fbbf24" fontSize="10"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">☀ Sun</text>
      <text x={80} y={400} fill={theme.muted} fontSize="9"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">(behind you)</text>

      <g transform="translate(530, 70)">
        <rect width={330} height={220} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
        <text x={165} y={22} fill={theme.accent} fontSize="10" fontWeight="900"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">3 OPTICAL STEPS</text>
        {[
          ["① Refraction + Dispersion", "White light enters droplet, splits."],
          ["② Total Internal Reflection", "At back surface of droplet."],
          ["③ Refraction (exit)", "Colours separate further on exit."],
          ["Red: 42° to sun direction", "Violet: 40° (inner arc of rainbow)"],
          ["Sun always BEHIND observer", "Rainbow in opposite direction."],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(12, ${30 + i * 36})`}>
            <text fill={i === 3 ? "#ef4444" : theme.text} fontSize="11" fontWeight="700"
              fontFamily="system-ui,-apple-system,sans-serif">{k}</text>
            <text y={16} fill={theme.muted} fontSize="9.5"
              fontFamily="system-ui,-apple-system,sans-serif">{v}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════
// SECTION 4: CIRCUITS & MAGNETISM
// ═══════════════════════════════════════════════

// Circuit symbol helpers
function Battery({ x, y, long = 30 }: { x: number; y: number; long?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <line x1={0} y1={0} x2={-long} y2={0} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={-long} y1={-10} x2={-long} y2={10} stroke="#22c55e" strokeWidth="4" />
      <line x1={-long - 6} y1={-6} x2={-long - 6} y2={6} stroke="#22c55e" strokeWidth="2.5" />
      <text x={-long - 20} y={-14} fill="#22c55e" fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">+</text>
      <text x={-long + 6} y={-14} fill="#ef4444" fontSize="12" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">−</text>
    </g>
  );
}

function Resistor({ x, y, w = 50, label = "" }: { x: number; y: number; w?: number; label?: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={-10} width={w} height={20} rx="4"
        fill="none" stroke={SCI_COLORS.warning} strokeWidth="2.5" />
      {label && (
        <text x={w / 2} y={-18} fill={SCI_COLORS.warning} fontSize="11" fontWeight="700"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">{label}</text>
      )}
    </g>
  );
}

function Ammeter({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={14} fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
      <text fill={SCI_COLORS.highlight} fontSize="13" fontWeight="900"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="system-ui,-apple-system,sans-serif">A</text>
    </g>
  );
}

function Voltmeter({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={14} fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="2.5" />
      <text fill={SCI_COLORS.oxygen} fontSize="13" fontWeight="900"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="system-ui,-apple-system,sans-serif">V</text>
    </g>
  );
}

function Switch({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={-10} cy={0} r={4} fill="#f1f5f9" />
      <circle cx={10} cy={0} r={4} fill="#f1f5f9" />
      <line x1={-10} y1={0} x2={8} y2={-12}
        stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
      <text x={0} y={-20} fill="#94a3b8" fontSize="10"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">K</text>
    </g>
  );
}

function Rheostat({ x, y, w = 60 }: { x: number; y: number; w?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={-10} width={w} height={20} rx="4"
        fill="none" stroke="#a78bfa" strokeWidth="2.5" />
      <line x1={w / 2} y1={-10} x2={w / 2} y2={-28}
        stroke="#a78bfa" strokeWidth="2" />
      <polygon points={`${w/2-6},-26 ${w/2+6},-26 ${w/2},-14`}
        fill="#a78bfa" />
      <text x={w / 2} y={-34} fill="#a78bfa" fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Rh</text>
    </g>
  );
}

// 4A. Ohm's Law Verification Circuit
function OhmsLawCircuit({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 460" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={460} theme={theme} gradId="ohm_bg"
        gradColors={[isDark ? "#080e18" : "#f0fdf4", isDark ? "#040810" : "#dcfce7"]} />
      <DiagramTitleBar title="Ohm's Law — Experimental Verification Circuit"
        chapter="Ch 11: Electricity | NCERT Fig 11.2 | 100% CBSE Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />

      {/* Circuit outline */}
      {/* Top wire: left → right */}
      <line x1={80} y1={150} x2={780} y2={150} stroke="#f1f5f9" strokeWidth="2.5" />
      {/* Right wire: top → bottom */}
      <line x1={780} y1={150} x2={780} y2={330} stroke="#f1f5f9" strokeWidth="2.5" />
      {/* Bottom wire: right → left */}
      <line x1={780} y1={330} x2={80} y2={330} stroke="#f1f5f9" strokeWidth="2.5" />
      {/* Left wire: bottom → top */}
      <line x1={80} y1={330} x2={80} y2={150} stroke="#f1f5f9" strokeWidth="2.5" />

      {/* Battery — left side, middle */}
      <g transform="translate(80, 240)">
        <line x1={0} y1={0} x2={0} y2={-90} stroke="#f1f5f9" strokeWidth="2.5" />
        <line x1={-12} y1={-62} x2={12} y2={-62} stroke="#22c55e" strokeWidth="5" />
        <line x1={-7} y1={-70} x2={7} y2={-70} stroke="#22c55e" strokeWidth="2.5" />
        <line x1={-12} y1={-54} x2={12} y2={-54} stroke="#22c55e" strokeWidth="5" />
        <line x1={-7} y1={-46} x2={7} y2={-46} stroke="#22c55e" strokeWidth="2.5" />
        <text x={-30} y={-68} fill="#22c55e" fontSize="11" fontWeight="800"
          fontFamily="system-ui,-apple-system,sans-serif">+</text>
        <text x={16} y={-42} fill={SCI_COLORS.oxygen} fontSize="14" fontWeight="800"
          fontFamily="system-ui,-apple-system,sans-serif">−</text>
        <text x={-50} y={-60} fill="#22c55e" fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">Battery</text>
        <text x={-50} y={-46} fill={theme.muted} fontSize="9"
          fontFamily="system-ui,-apple-system,sans-serif">(EMF: ε)</text>
      </g>

      {/* Switch on top wire */}
      <g transform="translate(200, 150)">
        <circle cx={-10} cy={0} r={4} fill="#f1f5f9" />
        <circle cx={10} cy={0} r={4} fill="#f1f5f9" />
        <line x1={-10} y1={0} x2={8} y2={-14}
          stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
        <text x={0} y={-22} fill={theme.muted} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Switch K</text>
      </g>

      {/* Rheostat on top wire */}
      <g transform="translate(310, 150)">
        <rect x={0} y={-12} width={80} height={24} rx="5"
          fill="none" stroke="#a78bfa" strokeWidth="2.5" />
        <line x1={40} y1={-12} x2={40} y2={-32}
          stroke="#a78bfa" strokeWidth="2" />
        <polygon points="33,-30 47,-30 40,-14" fill="#a78bfa" />
        <text x={40} y={-40} fill="#a78bfa" fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Rheostat (Rh)</text>
      </g>

      {/* Ammeter on top-right section */}
      <g transform="translate(500, 150)">
        <circle r={18} fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        <text fill={SCI_COLORS.highlight} fontSize="15" fontWeight="900"
          textAnchor="middle" dominantBaseline="middle"
          fontFamily="system-ui,-apple-system,sans-serif">A</text>
        <text x={0} y={-26} fill={SCI_COLORS.highlight} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Ammeter (series)</text>
      </g>

      {/* Nichrome wire / Resistor — on right section of top wire */}
      <g transform="translate(610, 150)">
        <rect x={0} y={-14} width={100} height={28} rx="5"
          fill="none" stroke={SCI_COLORS.warning} strokeWidth="2.5" />
        <text x={50} y={-22} fill={SCI_COLORS.warning} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Nichrome Wire (R)</text>
      </g>

      {/* Voltmeter — in parallel across resistor */}
      <line x1={610} y1={150} x2={610} y2={270}
        stroke={SCI_COLORS.oxygen} strokeWidth="2" strokeDasharray="4,3" />
      <line x1={710} y1={150} x2={710} y2={270}
        stroke={SCI_COLORS.oxygen} strokeWidth="2" strokeDasharray="4,3" />
      <line x1={610} y1={270} x2={660} y2={270}
        stroke={SCI_COLORS.oxygen} strokeWidth="2" />
      <line x1={710} y1={270} x2={660} y2={270}
        stroke={SCI_COLORS.oxygen} strokeWidth="2" />
      <g transform="translate(660, 270)">
        <circle r={18} fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="2.5" />
        <text fill={SCI_COLORS.oxygen} fontSize="15" fontWeight="900"
          textAnchor="middle" dominantBaseline="middle"
          fontFamily="system-ui,-apple-system,sans-serif">V</text>
        <text x={0} y={28} fill={SCI_COLORS.oxygen} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Voltmeter (parallel)</text>
      </g>

      {/* V–I graph */}
      <g transform="translate(100, 340)">
        <text fill={theme.accent} fontSize="10" fontWeight="900"
          fontFamily="system-ui,-apple-system,sans-serif">V–I GRAPH</text>
        {/* Axes */}
        <line x1={10} y1={90} x2={10} y2={10} stroke={theme.axis} strokeWidth="2" markerEnd="url(#arCyan)" />
        <line x1={10} y1={90} x2={110} y2={90} stroke={theme.axis} strokeWidth="2" markerEnd="url(#arCyan)" />
        <text x={5} y={8} fill={theme.muted} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">V</text>
        <text x={115} y={94} fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">I</text>
        {/* Straight line through origin */}
        <line x1={10} y1={90} x2={100} y2={14}
          stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        <text x={60} y={65} fill="#22c55e" fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">slope = R</text>
        <text x={20} y={108} fill={theme.muted} fontSize="9.5"
          fontFamily="system-ui,-apple-system,sans-serif">Straight line → Ohm's Law: V = IR</text>
      </g>

      {/* Key rules */}
      <g transform="translate(500, 360)">
        <rect width={360} height={82} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
        <text x={180} y={18} fill={theme.accent} fontSize="9.5" fontWeight="900"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">CONNECTION RULES</text>
        {[
          ["Ammeter: always in SERIES", "Low resistance → minimal V drop"],
          ["Voltmeter: always in PARALLEL", "High resistance → negligible current"],
          ["+ve terminal → +ve terminal", "Correct polarity to prevent damage"],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(12, ${24 + i * 20})`}>
            <text fill={i < 2 ? SCI_COLORS.warning : SCI_COLORS.highlight} fontSize="10.5" fontWeight="700"
              fontFamily="system-ui,-apple-system,sans-serif">{k}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// 4B. Resistors in Series
function ResistorsInSeries({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 440" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={440} theme={theme} gradId="series_bg"
        gradColors={[isDark ? "#080e18" : "#f0fdf4", isDark ? "#040810" : "#dcfce7"]} />
      <DiagramTitleBar title="Resistors in Series — V = V₁ + V₂ + V₃, Rs = R₁ + R₂ + R₃"
        chapter="Ch 11: Electricity | NCERT Fig 11.6 | 98% Recurrence"
        marks="5M" theme={theme} />

      {/* Main circuit rectangle */}
      <line x1={60} y1={140} x2={800} y2={140} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={800} y1={140} x2={800} y2={300} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={800} y1={300} x2={60} y2={300} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={60} y1={300} x2={60} y2={140} stroke="#f1f5f9" strokeWidth="2.5" />

      {/* Battery (left) */}
      <g transform="translate(60, 220)">
        <line x1={-8} y1={-30} x2={8} y2={-30} stroke="#22c55e" strokeWidth="5" />
        <line x1={-5} y1={-18} x2={5} y2={-18} stroke="#22c55e" strokeWidth="2.5" />
        <line x1={-8} y1={28} x2={8} y2={28} stroke="#22c55e" strokeWidth="5" />
        <line x1={-5} y1={40} x2={5} y2={40} stroke="#22c55e" strokeWidth="2.5" />
        <text x={20} y={0} fill="#22c55e" fontSize="11" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">V</text>
      </g>

      {/* Ammeter on top wire */}
      <g transform="translate(160, 140)">
        <circle r={16} fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2.5" />
        <text fill={SCI_COLORS.highlight} fontSize="14" fontWeight="900"
          textAnchor="middle" dominantBaseline="middle"
          fontFamily="system-ui,-apple-system,sans-serif">A</text>
        <text x={0} y={-24} fill={SCI_COLORS.highlight} fontSize="10" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">I (same throughout)</text>
      </g>

      {/* 3 Resistors in series on top wire */}
      {[
        { x: 240, label: "R₁", v: "V₁" },
        { x: 440, label: "R₂", v: "V₂" },
        { x: 600, label: "R₃", v: "V₃" },
      ].map(({ x, label, v }) => (
        <g key={label} transform={`translate(${x}, 140)`}>
          <rect x={0} y={-14} width={100} height={28} rx="5"
            fill="none" stroke={SCI_COLORS.warning} strokeWidth="2.5" />
          <text x={50} y={-22} fill={SCI_COLORS.warning} fontSize="11" textAnchor="middle" fontWeight="700"
            fontFamily="system-ui,-apple-system,sans-serif">{label}</text>
          {/* Voltmeter across each resistor */}
          <line x1={0} y1={14} x2={0} y2={60} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" strokeDasharray="4,3" />
          <line x1={100} y1={14} x2={100} y2={60} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" strokeDasharray="4,3" />
          <line x1={0} y1={60} x2={50} y2={60} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" />
          <line x1={100} y1={60} x2={50} y2={60} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" />
          <circle cx={50} cy={60} r={12}
            fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="2" />
          <text x={50} y={64} fill={SCI_COLORS.oxygen} fontSize="11" fontWeight="900"
            textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">V</text>
          <text x={50} y={88} fill={SCI_COLORS.oxygen} fontSize="10" textAnchor="middle"
            fontFamily="system-ui,-apple-system,sans-serif">{v}</text>
        </g>
      ))}

      {/* Current arrow on top wire */}
      <polygon points="320,133 326,140 320,147" fill={SCI_COLORS.highlight} />
      <polygon points="520,133 526,140 520,147" fill={SCI_COLORS.highlight} />
      <polygon points="720,133 726,140 720,147" fill={SCI_COLORS.highlight} />

      {/* Formula box */}
      <g transform="translate(60, 340)">
        <rect width={760} height={80} rx="10"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
        <text x={24} y={24} fill={theme.text} fontSize="12" fontWeight="800"
          fontFamily="system-ui,-apple-system,sans-serif">
          Series: V = V₁ + V₂ + V₃ &nbsp;&nbsp;&nbsp; Rs = R₁ + R₂ + R₃ &nbsp;&nbsp;&nbsp; I is SAME through all resistors
        </text>
        <text x={24} y={46} fill={theme.muted} fontSize="10.5"
          fontFamily="system-ui,-apple-system,sans-serif">
          Derivation: V = IR₁ + IR₂ + IR₃ = I(R₁ + R₂ + R₃) = IRS
        </text>
        <text x={24} y={64} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ One bulb fails → ENTIRE circuit breaks (no current flows). Disadvantage of series connection.
        </text>
      </g>
    </svg>
  );
}

// 4C. Resistors in Parallel
function ResistorsInParallel({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 460" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={460} theme={theme} gradId="parallel_bg"
        gradColors={[isDark ? "#080e18" : "#f0fdf4", isDark ? "#040810" : "#dcfce7"]} />
      <DiagramTitleBar title="Resistors in Parallel — I = I₁ + I₂ + I₃, 1/Rp = 1/R₁ + 1/R₂ + 1/R₃"
        chapter="Ch 11: Electricity | NCERT Fig 11.7 | 98% Recurrence"
        marks="5M" theme={theme} />

      {/* Outer circuit */}
      <line x1={60} y1={100} x2={800} y2={100} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={800} y1={100} x2={800} y2={360} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={800} y1={360} x2={60} y2={360} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={60} y1={360} x2={60} y2={100} stroke="#f1f5f9" strokeWidth="2.5" />

      {/* Battery */}
      <g transform="translate(60, 230)">
        <line x1={-8} y1={-40} x2={8} y2={-40} stroke="#22c55e" strokeWidth="5" />
        <line x1={-5} y1={-26} x2={5} y2={-26} stroke="#22c55e" strokeWidth="2.5" />
        <line x1={-8} y1={40} x2={8} y2={40} stroke="#22c55e" strokeWidth="5" />
        <line x1={-5} y1={26} x2={5} y2={26} stroke="#22c55e" strokeWidth="2.5" />
        <text x={-50} y={5} fill="#22c55e" fontSize="11" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">V</text>
      </g>

      {/* Junction points */}
      <circle cx={220} cy={100} r={6} fill="#f1f5f9" />
      <circle cx={220} cy={360} r={6} fill="#f1f5f9" />
      <circle cx={650} cy={100} r={6} fill="#f1f5f9" />
      <circle cx={650} cy={360} r={6} fill="#f1f5f9" />

      {/* Three parallel branches */}
      {[
        { y: 160, label: "R₁", I: "I₁" },
        { y: 230, label: "R₂", I: "I₂" },
        { y: 300, label: "R₃", I: "I₃" },
      ].map(({ y, label, I }) => (
        <g key={label}>
          {/* Branch wire left */}
          <line x1={220} y1={y} x2={330} y2={y} stroke="#f1f5f9" strokeWidth="2" />
          {/* Ammeter */}
          <g transform={`translate(344, ${y})`}>
            <circle r={14} fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2" />
            <text fill={SCI_COLORS.highlight} fontSize="12" fontWeight="900"
              textAnchor="middle" dominantBaseline="middle"
              fontFamily="system-ui,-apple-system,sans-serif">A</text>
            <text x={0} y={22} fill={SCI_COLORS.highlight} fontSize="9" textAnchor="middle"
              fontFamily="system-ui,-apple-system,sans-serif">{I}</text>
          </g>
          {/* Wire between ammeter and resistor */}
          <line x1={358} y1={y} x2={430} y2={y} stroke="#f1f5f9" strokeWidth="2" />
          {/* Resistor */}
          <rect x={430} y={y - 12} width={100} height={24} rx="5"
            fill="none" stroke={SCI_COLORS.warning} strokeWidth="2.5" />
          <text x={480} y={y - 20} fill={SCI_COLORS.warning} fontSize="11" textAnchor="middle"
            fontWeight="700" fontFamily="system-ui,-apple-system,sans-serif">{label}</text>
          {/* Branch wire right */}
          <line x1={530} y1={y} x2={650} y2={y} stroke="#f1f5f9" strokeWidth="2" />
          {/* Branch vertical connectors */}
          <line x1={220} y1={100} x2={220} y2={y} stroke="#f1f5f9" strokeWidth="1.8" />
          <line x1={650} y1={100} x2={650} y2={y} stroke="#f1f5f9" strokeWidth="1.8" />
          <line x1={220} y1={360} x2={220} y2={y} stroke="#f1f5f9" strokeWidth="1.8" />
          <line x1={650} y1={360} x2={650} y2={y} stroke="#f1f5f9" strokeWidth="1.8" />
        </g>
      ))}

      {/* Voltmeter across the combination */}
      <g transform="translate(720, 230)">
        <circle r={18} fill="none" stroke={SCI_COLORS.oxygen} strokeWidth="2.5" />
        <text fill={SCI_COLORS.oxygen} fontSize="15" fontWeight="900"
          textAnchor="middle" dominantBaseline="middle"
          fontFamily="system-ui,-apple-system,sans-serif">V</text>
        <text x={0} y={28} fill={SCI_COLORS.oxygen} fontSize="9.5" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Same V for all</text>
        <line x1={0} y1={-18} x2={0} y2={-130} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" strokeDasharray="4,3" />
        <line x1={0} y1={18} x2={0} y2={130} stroke={SCI_COLORS.oxygen} strokeWidth="1.8" strokeDasharray="4,3" />
      </g>

      {/* Formula box */}
      <g transform="translate(60, 390)">
        <rect width={760} height={58} rx="9"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="11.5" fontWeight="800"
          fontFamily="system-ui,-apple-system,sans-serif">
          I = I₁ + I₂ + I₃ &nbsp;&nbsp;&nbsp; 1/Rp = 1/R₁ + 1/R₂ + 1/R₃ &nbsp;&nbsp;&nbsp; V is SAME across all branches
        </text>
        <text x={18} y={38} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Rp is ALWAYS less than the smallest individual R. Domestic wiring uses parallel → each appliance gets full 220V.
        </text>
      </g>
    </svg>
  );
}

// 4D. Domestic Electric Circuit
function DomesticCircuit({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 480" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={480} theme={theme} gradId="domestic_bg"
        gradColors={[isDark ? "#080e18" : "#f8fafc", isDark ? "#040810" : "#f1f5f9"]} />
      <DiagramTitleBar title="Domestic Electric Circuit — 220V AC Household Wiring"
        chapter="Ch 12: Magnetic Effects of Electric Current | NCERT Fig 12.14 | 99% Recurrence"
        marks="5M" marksColor={SCI_COLORS.warning} theme={theme} />

      {/* Supply pole */}
      <rect x={40} y={100} width={20} height={200} rx="4"
        fill="#64748b" stroke={theme.muted} strokeWidth="1.5" />
      <text x={50} y={95} fill={theme.muted} fontSize="10" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">Pole</text>

      {/* Live wire (red) */}
      <line x1={60} y1={120} x2={780} y2={120} stroke={SCI_COLORS.live} strokeWidth="4" strokeLinecap="round" />
      <text x={120} y={112} fill={SCI_COLORS.live} fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Live Wire (Red/Brown) — 220V</text>

      {/* Neutral wire (grey/blue) */}
      <line x1={60} y1={155} x2={780} y2={155} stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
      <text x={120} y={147} fill="#64748b" fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Neutral Wire (Black/Blue) — 0V</text>

      {/* Earth wire (green) */}
      <line x1={60} y1={190} x2={250} y2={190} stroke={SCI_COLORS.earth} strokeWidth="3" strokeLinecap="round" />
      <text x={120} y={208} fill={SCI_COLORS.earth} fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">Earth Wire (Green/Yellow)</text>
      {/* Earth symbol */}
      <g transform="translate(250, 190)">
        <line x1={0} y1={0} x2={0} y2={20} stroke={SCI_COLORS.earth} strokeWidth="3" />
        <line x1={-16} y1={20} x2={16} y2={20} stroke={SCI_COLORS.earth} strokeWidth="3" />
        <line x1={-10} y1={28} x2={10} y2={28} stroke={SCI_COLORS.earth} strokeWidth="2.5" />
        <line x1={-4} y1={36} x2={4} y2={36} stroke={SCI_COLORS.earth} strokeWidth="2" />
      </g>

      {/* Electricity Meter */}
      <g transform="translate(270, 100)">
        <rect x={0} y={0} width={60} height={70} rx="6"
          fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2" />
        <text x={30} y={30} fill={SCI_COLORS.highlight} fontSize="11" fontWeight="700"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">kWh</text>
        <text x={30} y={48} fill={theme.muted} fontSize="9" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Meter</text>
        <text x={30} y={82} fill={SCI_COLORS.highlight} fontSize="9.5" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Electricity Meter</text>
      </g>

      {/* MCB / Main Fuse */}
      <g transform="translate(370, 100)">
        <rect x={0} y={0} width={55} height={70} rx="6"
          fill="none" stroke={SCI_COLORS.warning} strokeWidth="2" />
        <text x={27} y={30} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">MCB</text>
        <text x={27} y={46} fill={theme.muted} fontSize="9" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Fuse</text>
        <text x={27} y={82} fill={SCI_COLORS.warning} fontSize="9.5" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">Main Fuse</text>
      </g>

      {/* Parallel appliance branches */}
      {[
        { x: 480, label: "Bulb", icon: "💡", note: "5A" },
        { x: 600, label: "Fan", icon: "🌀", note: "5A" },
        { x: 720, label: "Heater", icon: "🔥", note: "15A" },
      ].map(({ x, label, icon, note }) => (
        <g key={label}>
          {/* Branch drop */}
          <line x1={x} y1={120} x2={x} y2={240} stroke={SCI_COLORS.live} strokeWidth="2.5" />
          <line x1={x} y1={155} x2={x} y2={240} stroke="#64748b" strokeWidth="2.5" />
          {/* Appliance */}
          <rect x={x - 28} y={240} width={56} height={56} rx="8"
            fill="none" stroke={SCI_COLORS.highlight} strokeWidth="2" />
          <text x={x} y={270} fill={theme.text} fontSize="16" textAnchor="middle">{icon}</text>
          <text x={x} y={310} fill={theme.muted} fontSize="9.5" textAnchor="middle"
            fontFamily="system-ui,-apple-system,sans-serif">{label}</text>
          {/* Switch on live wire for each */}
          <circle cx={x - 6} cy={200} r={3} fill="#f1f5f9" />
          <circle cx={x + 6} cy={200} r={3} fill="#f1f5f9" />
          <line x1={x - 6} y1={200} x2={x + 4} y2={188}
            stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
          <text x={x} y={182} fill={theme.muted} fontSize="8" textAnchor="middle"
            fontFamily="system-ui,-apple-system,sans-serif">Switch</text>
          {/* Fuse */}
          <rect x={x - 10} y={360} width={20} height={16} rx="4"
            fill="none" stroke={SCI_COLORS.warning} strokeWidth="2" />
          <text x={x} y={398} fill={SCI_COLORS.warning} fontSize="8.5" textAnchor="middle"
            fontFamily="system-ui,-apple-system,sans-serif">{note} Fuse</text>
          {/* Return wire */}
          <line x1={x} y1={376} x2={x} y2={420} stroke="#64748b" strokeWidth="2.5" />
          <line x1={x} y1={296} x2={x} y2={360} stroke={SCI_COLORS.live} strokeWidth="2.5" />
          {/* Earth wire to each socket */}
          <line x1={x + 14} y1={268} x2={x + 28} y2={268}
            stroke={SCI_COLORS.earth} strokeWidth="2" />
        </g>
      ))}

      {/* Return bottom wire */}
      <line x1={60} y1={420} x2={780} y2={420} stroke="#64748b" strokeWidth="2.5" />
      <line x1={780} y1={420} x2={780} y2={155} stroke="#64748b" strokeWidth="2.5" />

      {/* Bottom explanation */}
      <g transform="translate(20, 438)">
        <rect width={840} height={34} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={14} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ Switch and fuse MUST be on the Live wire. Earth wire protects from shock (diverts fault current to ground). Appliances in PARALLEL.
        </text>
      </g>
    </svg>
  );
}

// 4E. Solenoid Magnetic Field
function SolenoidMagneticField({ isDark }: { isDark: boolean }) {
  const theme = useDiagramTheme(isDark);
  return (
    <svg viewBox="0 0 880 420" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <SciArrowDefs />
      <DiagramBg w={880} h={420} theme={theme} gradId="solenoid_bg"
        gradColors={[isDark ? "#080e18" : "#f0f9ff", isDark ? "#040810" : "#e0f2fe"]} />
      <DiagramTitleBar title="Magnetic Field of a Current-Carrying Solenoid"
        chapter="Ch 12: Magnetic Effects of Electric Current | NCERT Fig 12.10 | 97% Recurrence"
        marks="5M" theme={theme} />

      {/* Solenoid coil — drawn as a series of loops */}
      {Array.from({ length: 12 }, (_, i) => {
        const x = 180 + i * 42;
        return (
          <g key={i}>
            {/* Coil loop */}
            <ellipse cx={x + 21} cy={210} rx={12} ry={35}
              fill="none" stroke={isDark ? "#475569" : "#94a3b8"} strokeWidth="2.5" />
            {/* Front semicircle (solid) */}
            <path d={`M ${x + 9} 210 Q ${x + 21} 175 ${x + 33} 210`}
              fill="none" stroke={SCI_COLORS.current} strokeWidth="3" />
          </g>
        );
      })}

      {/* Solenoid end caps */}
      <ellipse cx={195} cy={210} rx={12} ry={35}
        fill="none" stroke={SCI_COLORS.current} strokeWidth="3" />
      <ellipse cx={685} cy={210} rx={12} ry={35}
        fill="none" stroke={SCI_COLORS.current} strokeWidth="3" />

      {/* Battery connection */}
      <line x1={60} y1={175} x2={195} y2={175} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={60} y1={245} x2={195} y2={245} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={685} y1={175} x2={800} y2={175} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={685} y1={245} x2={800} y2={245} stroke="#f1f5f9" strokeWidth="2.5" />
      <line x1={800} y1={175} x2={800} y2={245} stroke="#f1f5f9" strokeWidth="2.5" />
      {/* Battery */}
      <g transform="translate(60, 210)">
        <line x1={0} y1={-35} x2={0} y2={35} stroke="#f1f5f9" strokeWidth="2" />
        <line x1={-10} y1={-20} x2={10} y2={-20} stroke="#22c55e" strokeWidth="5" />
        <line x1={-6} y1={-8} x2={6} y2={-8} stroke="#22c55e" strokeWidth="2.5" />
        <line x1={-10} y1={20} x2={10} y2={20} stroke="#22c55e" strokeWidth="5" />
        <line x1={-6} y1={8} x2={6} y2={8} stroke="#22c55e" strokeWidth="2.5" />
        <text x={-30} y={-22} fill="#22c55e" fontSize="14" fontWeight="900">+</text>
        <text x={14} y={24} fill={SCI_COLORS.oxygen} fontSize="14" fontWeight="900">−</text>
      </g>

      {/* External field lines (loops) */}
      {[
        { rx: 380, ry: 80, y: 210 },
        { rx: 340, ry: 60, y: 210 },
        { rx: 300, ry: 45, y: 210 },
      ].map(({ rx, ry, y }, i) => (
        <ellipse key={i}
          cx={440} cy={y}
          rx={rx} ry={ry}
          fill="none"
          stroke={SCI_COLORS.highlight}
          strokeWidth={1.8 - i * 0.2}
          strokeDasharray={i > 0 ? "6,3" : ""}
          opacity={0.7 - i * 0.1}
        />
      ))}

      {/* Internal field lines — PARALLEL and uniform */}
      {[155, 180, 205, 230, 255].map((y) => (
        <line key={y}
          x1={200} y1={y} x2={680} y2={y}
          stroke={SCI_COLORS.highlight} strokeWidth="2.5"
          markerEnd="url(#arCyan)" opacity="0.9" />
      ))}

      {/* N and S pole labels */}
      <text x={194} y={115} fill={SCI_COLORS.oxygen} fontSize="22" fontWeight="900"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">S</text>
      <text x={686} y={115} fill={SCI_COLORS.co2} fontSize="22" fontWeight="900"
        textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif">N</text>

      {/* Labels */}
      <CalloutLabel ax={440} ay={155} lx={350} ly={58} w={180} h={30}
        text="Uniform parallel field inside" sub="Similar to bar magnet field"
        textColor={SCI_COLORS.highlight} theme={theme} anchor="left" />

      <g transform="translate(20, 355)">
        <rect width={840} height={52} rx="8"
          fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
        <text x={18} y={18} fill={theme.text} fontSize="10.5" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          Inside solenoid: field lines are PARALLEL STRAIGHT LINES — uniform magnetic field (like a bar magnet). North pole: right thumb points N when fingers curl in current direction.
        </text>
        <text x={18} y={38} fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
          fontFamily="system-ui,-apple-system,sans-serif">
          ⚠ CBSE mark: "Field inside solenoid is uniform AND parallel" (+1 mark). External field resembles bar magnet field lines.
        </text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════
// MAIN DISPATCHER
// ═══════════════════════════════════════════════
interface PhysicsSVGDiagramProps {
  id: string;
  isDark: boolean;
}

export default function PhysicsSVGDiagram({ id, isDark }: PhysicsSVGDiagramProps) {
  switch (id) {
    // Section 1: Spherical Mirrors
    case "diag_asset_concave_mirror_inf":
      return <ConcaveMirrorAtInfinity isDark={isDark} />;
    case "diag_asset_concave_mirror_beyond_c":
      return <ConcaveMirrorBeyondC isDark={isDark} />;
    case "diag_asset_concave_mirror_at_c":
      return <ConcaveMirrorAtC isDark={isDark} />;
    case "diag_asset_concave_mirror_between_c_f":
      return <ConcaveMirrorBetweenCF isDark={isDark} />;
    case "diag_asset_concave_mirror_at_f":
      return <ConcaveMirrorAtF isDark={isDark} />;
    case "diag_asset_concave_mirror_between_p_f":
      return <ConcaveMirrorBetweenPF isDark={isDark} />;
    case "diag_asset_convex_mirror_inf":
      return <ConvexMirrorAtInfinity isDark={isDark} />;
    case "diag_asset_convex_mirror_between_inf_p":
      return <ConvexMirrorGeneral isDark={isDark} />;

    // Section 2: Lenses
    case "diag_asset_glass_slab_refraction":
      return <GlassSlabRefraction isDark={isDark} />;
    case "diag_asset_convex_lens_inf":
      return <ConvexLensAtInfinity isDark={isDark} />;
    case "diag_asset_convex_lens_beyond_2f1":
      return (
        <ConvexLensStandardCase
          isDark={isDark}
          title="Convex Lens — Object Beyond 2F₁ (Camera Lens)"
          ncertRef="NCERT Fig 9.16(b)"
          objX={80} objH={70} imgX={640} imgH={28}
          imgInverted={true}
          infoText="Object beyond 2F₁ → Image between F₂ and 2F₂. Real, Inverted, Diminished."
          warnText="Ray through O must be dead straight — any bending = mark deduction. Application: Camera lens, human eye."
        />
      );
    case "diag_asset_convex_lens_at_2f1":
      return (
        <ConvexLensStandardCase
          isDark={isDark}
          title="Convex Lens — Object at 2F₁ (Photocopier — m = −1)"
          ncertRef="NCERT Fig 9.16(c)"
          objX={140} objH={65} imgX={740} imgH={65}
          imgInverted={true}
          infoText="Object at 2F₁ → Image at 2F₂. Real, Inverted, Same Size (m = −1). Bench test for focal length."
          warnText="F₁ and 2F₁ distances on left MUST exactly equal F₂ and 2F₂ distances on right. Symmetric!"
        />
      );
    case "diag_asset_convex_lens_between_f1_2f1":
      return (
        <ConvexLensStandardCase
          isDark={isDark}
          title="Convex Lens — Object Between F₁ and 2F₁ (Projector)"
          ncertRef="NCERT Fig 9.16(d)"
          objX={340} objH={62} imgX={790} imgH={140}
          imgInverted={true}
          infoText="Object between F₁ and 2F₁ → Image beyond 2F₂. Real, Inverted, Magnified. Cinema projector."
          warnText="Image must be visibly LARGER than object and drawn beyond 2F₂."
        />
      );
    case "diag_asset_convex_lens_at_f1":
      return (
        <ConvexLensStandardCase
          isDark={isDark}
          title="Convex Lens — Object at F₁ (Parallel Beam / Collimator)"
          ncertRef="NCERT Fig 9.16(e)"
          objX={290} objH={65} imgX={830} imgH={1}
          imgInverted={true}
          infoText="Object at F₁ → Refracted rays emerge parallel. Image at infinity. Application: Collimator of spectroscope."
          warnText="Refracted rays must be drawn STRICTLY PARALLEL to each other and to the principal axis."
        />
      );
    case "diag_asset_convex_lens_between_o_f1":
      return (
        <ConvexLensStandardCase
          isDark={isDark}
          title="Convex Lens — Object Between O and F₁ (Magnifying Glass)"
          ncertRef="NCERT Fig 9.16(f) | 100% CBSE Recurrence"
          marks="5M" marksColor={SCI_COLORS.warning}
          objX={380} objH={65} imgX={150} imgH={140}
          imgInverted={false} imgDashed={true}
          infoText="Object between O and F₁ → Virtual, Erect, Magnified image on SAME side as object. Simple magnifying glass / reading glass."
          warnText="CRITICAL: Virtual image and all dashed extensions MUST use dashed lines. Solid virtual rays = −1 mark penalty."
        />
      );
    case "diag_asset_concave_lens_inf":
      return <ConcaveLensAtInfinity isDark={isDark} />;
    case "diag_asset_concave_lens_between_inf_o":
      return <ConcaveLensGeneral isDark={isDark} />;

    // Section 3: Eye & Dispersion
    case "diag_asset_anatomy_human_eye":
      return <HumanEyeAnatomy isDark={isDark} />;
    case "diag_asset_myopia_correction":
      return <MyopiaCorrection isDark={isDark} />;
    case "diag_asset_hypermetropia_correction":
      return <HypermetropiaCorrection isDark={isDark} />;
    case "diag_asset_prism_refraction":
      return <PrismRefraction isDark={isDark} />;
    case "diag_asset_prism_dispersion":
      return <VIBGYORDispersion isDark={isDark} />;
    case "diag_asset_spectrum_recombination":
      return <SpectrumRecombination isDark={isDark} />;
    case "diag_asset_rainbow_atmospheric":
    case "diag_asset_atmospheric_refraction":
      return <RainbowFormation isDark={isDark} />;

    // Section 4: Circuits & Magnetism
    case "diag_asset_ohms_law_circuit":
      return <OhmsLawCircuit isDark={isDark} />;
    case "diag_asset_resistors_in_series":
      return <ResistorsInSeries isDark={isDark} />;
    case "diag_asset_resistors_in_parallel":
      return <ResistorsInParallel isDark={isDark} />;
    case "diag_asset_domestic_electric_circuit":
      return <DomesticCircuit isDark={isDark} />;

    // Solenoid is referenced from SCIENCE_DIAGRAMS_MASTER
    default:
      return null; // Falls back to JPEG image in ScienceDiagramsView
  }
}
