"use client";
/**
 * ScienceSVGEngine.tsx
 * Reusable primitives for the CBSE Class 10 Science diagram system.
 * All diagrams built with this engine share the same:
 *   - Color semantics (oxygen = red, CO₂ = blue, rays = amber, virtual = dashed)
 *   - Label / callout style
 *   - Info panel layout
 *   - Grid & background system
 *   - Arrow markers
 */
import React from "react";

// ─────────────────────────────────────────────────────────
// 1. SEMANTIC COLOR PALETTE
// ─────────────────────────────────────────────────────────
export const SCI_COLORS = {
  oxygen:        "#ef4444",   // red   — oxygenated blood, O₂
  co2:           "#3b82f6",   // blue  — deoxygenated blood, CO₂
  ray:           "#fbbf24",   // amber — light rays (real)
  virtualRay:    "#94a3b8",   // slate — virtual extensions (always dashed)
  nerve:         "#a78bfa",   // violet — nerve impulse
  current:       "#22c55e",   // green  — electric current
  earth:         "#84cc16",   // lime   — earth wire
  live:          "#ef4444",   // red    — live wire
  neutral:       "#64748b",   // slate  — neutral wire
  highlight:     "#38bdf8",   // cyan   — accent / highlight
  warning:       "#f97316",   // orange — exam trap / warning
  tissue:        "#f43f5e",   // rose   — biological tissue (generic)
  axis:          "#64748b",   // grey   — principal axis
};

// ─────────────────────────────────────────────────────────
// 2. THEME
// ─────────────────────────────────────────────────────────
export interface DiagramTheme {
  bg: string; bgGrad: string;
  grid: string;
  labelBg: string; labelBorder: string;
  text: string; muted: string; accent: string;
  axis: string; callout: string;
}

export function useDiagramTheme(isDark: boolean): DiagramTheme {
  return isDark ? {
    bg:          "#070a14",
    bgGrad:      "#0d1525",
    grid:        "rgba(148,163,184,0.04)",
    labelBg:     "rgba(8,12,26,0.97)",
    labelBorder: "rgba(56,189,248,0.22)",
    text:        "#f1f5f9",
    muted:       "#8b95a8",
    accent:      "#38bdf8",
    axis:        "rgba(148,163,184,0.45)",
    callout:     "rgba(148,163,184,0.38)",
  } : {
    bg:          "#f8fafc",
    bgGrad:      "#eff6ff",
    grid:        "rgba(0,0,0,0.025)",
    labelBg:     "rgba(255,255,255,0.98)",
    labelBorder: "rgba(2,132,199,0.2)",
    text:        "#0f172a",
    muted:       "#64748b",
    accent:      "#0284c7",
    axis:        "rgba(100,116,139,0.5)",
    callout:     "rgba(100,116,139,0.38)",
  };
}

// ─────────────────────────────────────────────────────────
// 3. ARROW MARKER DEFS  (include once per SVG)
// ─────────────────────────────────────────────────────────
export function SciArrowDefs() {
  const mkr = (id: string, fill: string) => (
    <marker key={id} id={id} viewBox="0 0 10 10" refX="8" refY="5"
      markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1.5 L 9 5 L 0 8.5 Z" fill={fill} />
    </marker>
  );
  return (
    <defs>
      {mkr("arAmber",  SCI_COLORS.ray)}
      {mkr("arAmberR", SCI_COLORS.ray)}
      {mkr("arBlue",   SCI_COLORS.co2)}
      {mkr("arRed",    SCI_COLORS.oxygen)}
      {mkr("arCyan",   SCI_COLORS.highlight)}
      {mkr("arSlate",  SCI_COLORS.virtualRay)}
      {mkr("arGreen",  SCI_COLORS.current)}
      {mkr("arWhite",  "#f1f5f9")}
      {mkr("arOrange", SCI_COLORS.warning)}
      {mkr("arViolet", SCI_COLORS.nerve)}
    </defs>
  );
}

// ─────────────────────────────────────────────────────────
// 4. BACKGROUND + GRID
// ─────────────────────────────────────────────────────────
export function DiagramBg({
  w = 880, h = 400,
  rx = 18,
  theme,
  gradId,
  gradColors,
}: {
  w?: number; h?: number; rx?: number;
  theme: DiagramTheme;
  gradId: string;
  gradColors?: [string, string];
}) {
  const c1 = gradColors?.[0] ?? theme.bgGrad;
  const c2 = gradColors?.[1] ?? theme.bg;
  return (
    <>
      <defs>
        <radialGradient id={gradId} cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </radialGradient>
        <filter id="softDrop" x="-5%" y="-5%" width="115%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#000" floodOpacity="0.35" />
        </filter>
        <filter id="glowSm" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width={w} height={h} rx={rx} fill={`url(#${gradId})`} />
      {/* Subtle grid */}
      {Array.from({ length: 12 }, (_, i) => (
        <line key={`vg${i}`}
          x1={w * i / 11} y1={0} x2={w * i / 11} y2={h}
          stroke={theme.grid} strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`hg${i}`}
          x1={0} y1={h * i / 7} x2={w} y2={h * i / 7}
          stroke={theme.grid} strokeWidth="1" />
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────
// 5. DIAGRAM TITLE BAR
// ─────────────────────────────────────────────────────────
export function DiagramTitleBar({
  title, chapter, marks = "5M",
  marksColor = SCI_COLORS.highlight,
  x = 28, y = 26, theme,
}: {
  title: string; chapter?: string; marks?: string;
  marksColor?: string; x?: number; y?: number;
  theme: DiagramTheme;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text fill={theme.text} fontSize="13.5" fontWeight="800"
        fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.3">
        {title}
      </text>
      {chapter && (
        <text y="17" fill={theme.muted} fontSize="10"
          fontFamily="system-ui,-apple-system,sans-serif">
          {chapter}
        </text>
      )}
      {/* Marks badge */}
      <rect x={chapter ? 380 : 360} y={chapter ? -14 : -13} width={54} height={22}
        rx="7" fill={marksColor} fillOpacity="0.18" />
      <text x={chapter ? 407 : 387} y={chapter ? 2 : 3}
        fill={marksColor} fontSize="10" fontWeight="900" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">
        CBSE {marks}
      </text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────
// 6. CALLOUT LABEL (label box + leader line + dot)
// ─────────────────────────────────────────────────────────
export function CalloutLabel({
  ax, ay,           // anchor point on structure
  lx, ly,           // label box top-left
  w = 132, h = 28,
  text, sub,
  textColor,
  theme,
  anchor = "right", // "right"=leader goes from box-right to dot; "left"=from box-left
}: {
  ax: number; ay: number;
  lx: number; ly: number;
  w?: number; h?: number;
  text: string; sub?: string;
  textColor?: string;
  theme: DiagramTheme;
  anchor?: "right" | "left";
}) {
  const lh = sub ? h + 14 : h;
  const leaderX = anchor === "right" ? lx + w : lx;
  const leaderY = ly + lh / 2;
  const tc = textColor || theme.text;

  return (
    <g>
      {/* dot at structure */}
      <circle cx={ax} cy={ay} r="3.5" fill={tc} opacity="0.9" />
      {/* leader line */}
      <line x1={ax} y1={ay} x2={leaderX} y2={leaderY}
        stroke={theme.callout} strokeWidth="1.4" strokeDasharray="4,3" />
      {/* box */}
      <rect x={lx} y={ly} width={w} height={lh} rx="7"
        fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.2" />
      <text x={lx + w / 2} y={ly + (sub ? 16 : lh / 2 + 4)}
        fill={tc} fontSize="11" fontWeight="700" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">
        {text}
      </text>
      {sub && (
        <text x={lx + w / 2} y={ly + lh - 7}
          fill={theme.muted} fontSize="9" textAnchor="middle"
          fontFamily="system-ui,-apple-system,sans-serif">
          {sub}
        </text>
      )}
    </g>
  );
}

// ─────────────────────────────────────────────────────────
// 7. AXIS POINT LABEL  (P, F, C labels below principal axis)
// ─────────────────────────────────────────────────────────
export function AxisLabel({
  x, y, label, color, theme, below = true,
}: {
  x: number; y: number; label: string;
  color?: string; theme: DiagramTheme; below?: boolean;
}) {
  const offset = below ? 16 : -10;
  return (
    <>
      <line x1={x} y1={y - 6} x2={x} y2={y + 6}
        stroke={color || theme.muted} strokeWidth="2" />
      <text x={x} y={y + offset}
        fill={color || theme.muted}
        fontSize="13" fontWeight="800" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">
        {label}
      </text>
    </>
  );
}

// ─────────────────────────────────────────────────────────
// 8. OBJECT / IMAGE ARROW
// ─────────────────────────────────────────────────────────
export function DiagramArrow({
  x, baseY, tipY, color, isDashed = false, strokeW = 3,
}: {
  x: number; baseY: number; tipY: number;
  color: string; isDashed?: boolean; strokeW?: number;
}) {
  const arrowId = color === SCI_COLORS.ray ? "arAmber" : "arSlate";
  return (
    <g>
      <line x1={x} y1={baseY} x2={x} y2={tipY}
        stroke={color} strokeWidth={strokeW}
        strokeDasharray={isDashed ? "6,4" : undefined}
        markerEnd={`url(#${arrowId})`}
        strokeLinecap="round" />
      {/* Base dot */}
      <circle cx={x} cy={baseY} r="3" fill={color} />
    </g>
  );
}

// ─────────────────────────────────────────────────────────
// 9. INFO PANEL  (right or bottom key-facts panel)
// ─────────────────────────────────────────────────────────
export function InfoPanel({
  x, y, w = 210,
  title = "KEY STRUCTURES",
  items,
  theme,
}: {
  x: number; y: number; w?: number;
  title?: string;
  items: { label: string; text: string; color?: string }[];
  theme: DiagramTheme;
}) {
  const rowH = 46;
  const totalH = 34 + items.length * rowH + 8;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height={totalH} rx="12"
        fill={theme.labelBg} stroke={theme.labelBorder} strokeWidth="1.5" />
      {/* Title */}
      <text x={w / 2} y={21}
        fill={theme.accent} fontSize="9.5" fontWeight="900" textAnchor="middle"
        letterSpacing="1" fontFamily="system-ui,-apple-system,sans-serif">
        {title}
      </text>
      {/* Separator */}
      <line x1={12} y1={28} x2={w - 12} y2={28} stroke={theme.labelBorder} strokeWidth="1" />
      {/* Items */}
      {items.map((item, i) => (
        <g key={i} transform={`translate(10,${34 + i * rowH})`}>
          <rect x={0} y={0} width={w - 20} height={rowH - 4} rx="7"
            fill={item.color ? `${item.color}14` : `${theme.accent}08`}
            stroke={item.color ? `${item.color}30` : `${theme.accent}15`}
            strokeWidth="1" />
          <text x={8} y={15}
            fill={item.color || theme.accent} fontSize="10.5" fontWeight="700"
            fontFamily="system-ui,-apple-system,sans-serif">
            {item.label}
          </text>
          <foreignObject x={8} y={20} width={w - 36} height={22}>
            <div
              style={{
                fontSize: "9px",
                color: "inherit",
                fontFamily: "system-ui,-apple-system,sans-serif",
                lineHeight: "1.3",
              }}
            >
              {item.text}
            </div>
          </foreignObject>
          <text x={8} y={34}
            fill={theme.muted} fontSize="9"
            fontFamily="system-ui,-apple-system,sans-serif">
            {item.text.slice(0, 55)}{item.text.length > 55 ? "…" : ""}
          </text>
        </g>
      ))}
    </g>
  );
}

// ─────────────────────────────────────────────────────────
// 10. INSET BOX  (magnified detail panel)
// ─────────────────────────────────────────────────────────
export function InsetBox({
  x, y, w, h, title, accentColor = SCI_COLORS.highlight, theme, children,
}: {
  x: number; y: number; w: number; h: number;
  title: string; accentColor?: string;
  theme: DiagramTheme;
  children: React.ReactNode;
}) {
  return (
    <g transform={`translate(${x},${y})`} filter="url(#softDrop)">
      <rect width={w} height={h} rx="12"
        fill={theme.labelBg} stroke={accentColor} strokeWidth="2" strokeOpacity="0.6" />
      <text x={w / 2} y={20}
        fill={accentColor} fontSize="10" fontWeight="800" textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif">
        {title}
      </text>
      {children}
    </g>
  );
}

// ─────────────────────────────────────────────────────────
// 11. EXAM TIP STRIP  (bottom of diagram)
// ─────────────────────────────────────────────────────────
export function ExamTip({
  x, y, w, text, theme,
}: {
  x: number; y: number; w: number; text: string; theme: DiagramTheme;
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height={28} rx="8"
        fill={SCI_COLORS.warning} fillOpacity="0.12"
        stroke={SCI_COLORS.warning} strokeWidth="1" strokeOpacity="0.35" />
      <text x={10} y={18}
        fill={SCI_COLORS.warning} fontSize="10" fontWeight="700"
        fontFamily="system-ui,-apple-system,sans-serif">
        ⚠ EXAM TIP: {text}
      </text>
    </g>
  );
}
