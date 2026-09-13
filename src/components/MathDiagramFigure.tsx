"use client";

import React, { useState } from "react";
import { CheckCircle, Info, Sparkles, ZoomIn } from "lucide-react";

export type MathFigureType =
  | "math_triangles_bpt"
  | "math_triangles_similarity"
  | "math_trig_right_triangle"
  | "math_heights_elevation_depression"
  | "math_heights_two_observers"
  | "math_circles_tangent_radius"
  | "math_circles_external_tangents"
  | "math_areas_sector_segment"
  | "math_solids_combinations"
  | "math_coord_distance_section";

interface MathDiagramFigureProps {
  figureType: MathFigureType;
  title?: string;
  caption?: string;
  isDark?: boolean;
  className?: string;
}

export const MathDiagramFigure: React.FC<MathDiagramFigureProps> = ({
  figureType,
  title,
  caption,
  isDark = true,
  className = "",
}) => {
  const [solidTab, setSolidTab] = useState<"toy" | "capsule" | "tent">("toy");

  // Colors based on theme
  const strokeMain = isDark ? "#38bdf8" : "#2563eb";
  const strokeAlt = isDark ? "#34d399" : "#059669";
  const strokeAccent = isDark ? "#f59e0b" : "#d97706";
  const strokeDash = isDark ? "#94a3b8" : "#64748b";
  const textColor = isDark ? "#f1f5f9" : "#1e293b";
  const textMuted = isDark ? "#94a3b8" : "#64748b";
  const fillSubtle = isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(37, 99, 235, 0.08)";
  const fillGreenSubtle = isDark ? "rgba(52, 211, 153, 0.15)" : "rgba(5, 150, 105, 0.1)";
  const fillAmberSubtle = isDark ? "rgba(245, 158, 11, 0.15)" : "rgba(217, 119, 6, 0.1)";

  const renderFigureContent = () => {
    switch (figureType) {
      case "math_triangles_bpt":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 280" className="w-full max-w-[440px] h-auto select-none">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={strokeAccent} />
                </marker>
              </defs>

              {/* Triangle ABC */}
              <polygon
                points="220,30 60,240 380,240"
                fill={fillSubtle}
                stroke={strokeMain}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Line DE parallel to BC */}
              <line x1="140" y1="135" x2="300" y2="135" stroke={strokeAlt} strokeWidth="3" />
              {/* Parallel arrows */}
              <path d="M 215,130 L 225,135 L 215,140" fill="none" stroke={strokeAlt} strokeWidth="2" />
              <path d="M 215,235 L 225,240 L 215,245" fill="none" stroke={strokeMain} strokeWidth="2" />

              {/* Auxiliary lines: BE and CD */}
              <line x1="60" y1="240" x2="300" y2="135" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="380" y1="240" x2="140" y2="135" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Perpendiculars: DM perp AC and EN perp AB */}
              <line x1="140" y1="135" x2="252" y2="72" stroke={strokeAccent} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="300" y1="135" x2="188" y2="72" stroke={strokeAccent} strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Right angle symbols at M and N */}
              <path d="M 248,77 L 244,83 L 250,87" fill="none" stroke={strokeAccent} strokeWidth="1.2" />
              <path d="M 192,77 L 196,83 L 190,87" fill="none" stroke={strokeAccent} strokeWidth="1.2" />

              {/* Vertex Labels */}
              <circle cx="220" cy="30" r="4" fill={strokeMain} />
              <text x="220" y="20" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">A</text>

              <circle cx="60" cy="240" r="4" fill={strokeMain} />
              <text x="45" y="250" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">B</text>

              <circle cx="380" cy="240" r="4" fill={strokeMain} />
              <text x="395" y="250" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">C</text>

              <circle cx="140" cy="135" r="4" fill={strokeAlt} />
              <text x="122" y="135" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="14">D</text>

              <circle cx="300" cy="135" r="4" fill={strokeAlt} />
              <text x="318" y="135" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="14">E</text>

              <circle cx="252" cy="72" r="3" fill={strokeAccent} />
              <text x="268" y="68" textAnchor="middle" fill={strokeAccent} fontSize="12">M</text>

              <circle cx="188" cy="72" r="3" fill={strokeAccent} />
              <text x="172" y="68" textAnchor="middle" fill={strokeAccent} fontSize="12">N</text>

              {/* Ratio Callout */}
              <rect x="130" y="248" width="180" height="26" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeAlt} strokeWidth="1" />
              <text x="220" y="265" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="12">
                DE ∥ BC ⟹ AD / DB = AE / EC
              </text>
            </svg>
            <div className="mt-2 text-xs text-center space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Theorem 6.1: Basic Proportionality Theorem (Thales)
              </span>
              <p className={`text-[11px] ${textMuted}`}>
                Area(△ADE) / Area(△BDE) = AD/DB and Area(△ADE) / Area(△CDE) = AE/EC. Since Area(△BDE) = Area(△CDE) (same base DE, between parallels DE ∥ BC).
              </p>
            </div>
          </div>
        );

      case "math_triangles_similarity":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 220" className="w-full max-w-[440px] h-auto select-none">
              {/* Triangle ABC */}
              <polygon points="90,40 20,180 160,180" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
              {/* Triangle DEF */}
              <polygon points="320,60 260,180 380,180" fill={fillGreenSubtle} stroke={strokeAlt} strokeWidth="2.5" />

              {/* Angle Arcs on Triangle ABC */}
              <path d="M 80,60 A 20 20 0 0 0 100,60" fill="none" stroke={strokeAccent} strokeWidth="1.8" />
              <path d="M 38,180 A 18 18 0 0 0 30,162" fill="none" stroke={strokeMain} strokeWidth="1.8" />
              <path d="M 142,180 A 18 18 0 0 1 150,162" fill="none" stroke={strokeAlt} strokeWidth="1.8" />

              {/* Angle Arcs on Triangle DEF */}
              <path d="M 312,77 A 17 17 0 0 0 328,77" fill="none" stroke={strokeAccent} strokeWidth="1.8" />
              <path d="M 275,180 A 15 15 0 0 0 268,165" fill="none" stroke={strokeMain} strokeWidth="1.8" />
              <path d="M 365,180 A 15 15 0 0 1 372,165" fill="none" stroke={strokeAlt} strokeWidth="1.8" />

              {/* Labels */}
              <text x="90" y="28" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">A</text>
              <text x="12" y="190" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">B</text>
              <text x="170" y="190" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">C</text>

              <text x="320" y="48" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">D</text>
              <text x="250" y="190" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">E</text>
              <text x="390" y="190" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13">F</text>

              {/* Proportionality Banner */}
              <rect x="70" y="195" width="300" height="24" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeMain} strokeWidth="1" />
              <text x="220" y="211" textAnchor="middle" fill={strokeMain} fontWeight="bold" fontSize="11">
                △ABC ∼ △DEF ⟺ AB/DE = BC/EF = AC/DF
              </text>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Similarity Criteria: <strong>AAA/AA</strong> (angles equal), <strong>SSS</strong> (sides proportional), <strong>SAS</strong> (1 angle equal, included sides proportional).
            </p>
          </div>
        );

      case "math_trig_right_triangle":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 250" className="w-full max-w-[440px] h-auto select-none">
              {/* Right Triangle ABC with right angle at B, angle theta at C */}
              <polygon points="70,40 70,200 330,200" fill={fillSubtle} stroke={strokeMain} strokeWidth="3" />

              {/* Right angle mark at B */}
              <rect x="70" y="178" width="22" height="22" fill="none" stroke={strokeAccent} strokeWidth="2" />
              <circle cx="81" cy="189" r="2.5" fill={strokeAccent} />

              {/* Angle theta arc at C */}
              <path d="M 285,200 A 45 45 0 0 0 295,178" fill="none" stroke={strokeAlt} strokeWidth="2.5" />
              <text x="270" y="192" fill={strokeAlt} fontWeight="bold" fontSize="16">θ</text>

              {/* Vertices */}
              <circle cx="70" cy="40" r="4.5" fill={strokeMain} />
              <text x="50" y="42" fill={textColor} fontWeight="bold" fontSize="15">A</text>

              <circle cx="70" cy="200" r="4.5" fill={strokeAccent} />
              <text x="50" y="215" fill={strokeAccent} fontWeight="bold" fontSize="15">B (90°)</text>

              <circle cx="330" cy="200" r="4.5" fill={strokeAlt} />
              <text x="345" y="215" fill={strokeAlt} fontWeight="bold" fontSize="15">C (θ)</text>

              {/* Side Labels */}
              <text x="35" y="125" fill={isDark ? "#f43f5e" : "#e11d48"} fontWeight="bold" fontSize="12" textAnchor="middle" transform="rotate(-90 35 125)">
                Opposite (Perpendicular P)
              </text>
              <text x="200" y="222" fill={isDark ? "#38bdf8" : "#2563eb"} fontWeight="bold" fontSize="12" textAnchor="middle">
                Adjacent (Base B)
              </text>
              <text x="215" y="105" fill={isDark ? "#34d399" : "#059669"} fontWeight="bold" fontSize="12" textAnchor="middle" transform="rotate(-31.6 215 105)">
                Hypotenuse H = √(P² + B²)
              </text>

              {/* Formula Badge Box */}
              <g transform="translate(240, 30)">
                <rect width="185" height="120" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeDash} strokeWidth="1.2" />
                <text x="92" y="20" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="12">Core Ratios for θ</text>
                <text x="15" y="42" fill={textColor} fontSize="11">• sin θ = P / H = AB / AC</text>
                <text x="15" y="60" fill={textColor} fontSize="11">• cos θ = B / H = BC / AC</text>
                <text x="15" y="78" fill={textColor} fontSize="11">• tan θ = P / B = AB / BC</text>
                <text x="15" y="96" fill={textColor} fontSize="11">• cosec θ = 1/sin θ, sec θ = 1/cos θ</text>
                <text x="15" y="112" fill={strokeAlt} fontWeight="bold" fontSize="11">• sin²θ + cos²θ = 1</text>
              </g>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Mnemonic: <strong>Some People Have, Curly Brown Hair, Through Proper Brushing</strong> (P/H, B/H, P/B).
            </p>
          </div>
        );

      case "math_heights_elevation_depression":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 450 240" className="w-full max-w-[450px] h-auto select-none">
              {/* Ground horizontal */}
              <line x1="30" y1="200" x2="420" y2="200" stroke={strokeDash} strokeWidth="2" />
              {/* Ground dashes */}
              <line x1="50" y1="205" x2="40" y2="215" stroke={strokeDash} strokeWidth="1.2" />
              <line x1="80" y1="205" x2="70" y2="215" stroke={strokeDash} strokeWidth="1.2" />
              <line x1="110" y1="205" x2="100" y2="215" stroke={strokeDash} strokeWidth="1.2" />

              {/* Vertical Tower AB */}
              <line x1="80" y1="40" x2="80" y2="200" stroke={strokeMain} strokeWidth="4" />
              <rect x="76" y="186" width="14" height="14" fill="none" stroke={strokeMain} strokeWidth="1.5" />

              {/* Top horizontal observer line of sight */}
              <line x1="80" y1="40" x2="360" y2="40" stroke={strokeDash} strokeWidth="1.8" strokeDasharray="5 3" />
              <text x="220" y="32" textAnchor="middle" fill={textMuted} fontSize="11">Horizontal Line of Sight (Observer at Top)</text>

              {/* Line of Sight hypotenuse AC */}
              <line x1="80" y1="40" x2="360" y2="200" stroke={strokeAccent} strokeWidth="2.5" />

              {/* Angle of Depression beta at top */}
              <path d="M 140,40 A 60 60 0 0 1 127,67" fill="none" stroke={isDark ? "#f43f5e" : "#e11d48"} strokeWidth="2" />
              <text x="145" y="60" fill={isDark ? "#f43f5e" : "#e11d48"} fontWeight="bold" fontSize="13">β (Depression)</text>

              {/* Angle of Elevation alpha at bottom C */}
              <path d="M 300,200 A 60 60 0 0 1 312,173" fill="none" stroke={strokeAlt} strokeWidth="2" />
              <text x="275" y="192" fill={strokeAlt} fontWeight="bold" fontSize="13">α (Elevation)</text>

              {/* Vertices */}
              <circle cx="80" cy="40" r="4" fill={strokeMain} />
              <text x="65" y="42" fill={textColor} fontWeight="bold" fontSize="14">A (Top)</text>

              <circle cx="80" cy="200" r="4" fill={strokeMain} />
              <text x="65" y="218" fill={textColor} fontWeight="bold" fontSize="14">B (Foot)</text>

              <circle cx="360" cy="200" r="4" fill={strokeAlt} />
              <text x="375" y="218" fill={strokeAlt} fontWeight="bold" fontSize="14">C (Object)</text>

              {/* Height label h */}
              <text x="96" y="120" fill={strokeMain} fontWeight="bold" fontSize="13">Height h</text>
              {/* Distance label d */}
              <text x="220" y="218" fill={textColor} fontWeight="bold" fontSize="13">Distance d = h · cot α</text>

              {/* Equality callout */}
              <rect x="250" y="80" width="180" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeAlt} strokeWidth="1" />
              <text x="340" y="98" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="11">Alternate Interior Angles:</text>
              <text x="340" y="114" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">Angle of Elevation α = Angle of Depression β</text>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Always draw the horizontal line at the observer's eye before marking the angle of depression!
            </p>
          </div>
        );

      case "math_heights_two_observers":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 450 240" className="w-full max-w-[450px] h-auto select-none">
              {/* Ground */}
              <line x1="20" y1="200" x2="430" y2="200" stroke={strokeDash} strokeWidth="2" />
              {/* Tower AB */}
              <line x1="70" y1="30" x2="70" y2="200" stroke={strokeMain} strokeWidth="4" />
              <rect x="66" y="186" width="14" height="14" fill="none" stroke={strokeMain} strokeWidth="1.5" />

              {/* Line of sight to nearer observer C */}
              <line x1="70" y1="30" x2="230" y2="200" stroke={strokeAlt} strokeWidth="2.5" />
              {/* Line of sight to farther observer D */}
              <line x1="70" y1="30" x2="390" y2="200" stroke={strokeAccent} strokeWidth="2.5" />

              {/* Near angle 60 deg */}
              <path d="M 195,200 A 35 35 0 0 1 205,176" fill="none" stroke={strokeAlt} strokeWidth="2" />
              <text x="180" y="194" fill={strokeAlt} fontWeight="bold" fontSize="12">60°</text>

              {/* Far angle 30 deg */}
              <path d="M 345,200 A 45 45 0 0 1 356,183" fill="none" stroke={strokeAccent} strokeWidth="2" />
              <text x="330" y="194" fill={strokeAccent} fontWeight="bold" fontSize="12">30°</text>

              {/* Labels */}
              <text x="50" y="35" fill={textColor} fontWeight="bold" fontSize="14">A</text>
              <text x="50" y="215" fill={textColor} fontWeight="bold" fontSize="14">B</text>
              <text x="230" y="218" fill={strokeAlt} fontWeight="bold" fontSize="14">C</text>
              <text x="390" y="218" fill={strokeAccent} fontWeight="bold" fontSize="14">D</text>

              {/* Distance CD dimension line */}
              <line x1="230" y1="225" x2="390" y2="225" stroke={strokeDash} strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
              <text x="310" y="238" textAnchor="middle" fill={textColor} fontSize="11">Distance x = d₂ − d₁</text>

              {/* Tower Height */}
              <text x="85" y="115" fill={strokeMain} fontWeight="bold" fontSize="13">h</text>

              {/* Standard Board Master Formula Box */}
              <g transform="translate(230, 25)">
                <rect width="205" height="75" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAlt} strokeWidth="1.2" />
                <text x="102" y="20" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="11">Standard CBSE Ratio Formula</text>
                <text x="15" y="40" fill={textColor} fontSize="11">BC = h · cot 60° = h / √3</text>
                <text x="15" y="56" fill={textColor} fontSize="11">BD = h · cot 30° = h√3</text>
                <text x="15" y="70" fill={strokeAccent} fontWeight="bold" fontSize="11">CD = BD − BC = h(√3 − 1/√3) = 2h/√3</text>
              </g>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Frequently asked as speed problem: <code className="text-emerald-400">Time to reach foot = Time(C to D) / 2</code>.
            </p>
          </div>
        );

      case "math_circles_tangent_radius":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 420 250" className="w-full max-w-[420px] h-auto select-none">
              {/* Circle */}
              <circle cx="210" cy="110" r="75" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
              {/* Centre O */}
              <circle cx="210" cy="110" r="4.5" fill={strokeAccent} />
              <text x="210" y="98" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="14">O</text>

              {/* Radius OP */}
              <line x1="210" y1="110" x2="210" y2="185" stroke={strokeAlt} strokeWidth="3" />
              <text x="195" y="150" fill={strokeAlt} fontWeight="bold" fontSize="13">Radius r</text>

              {/* Tangent line XY */}
              <line x1="50" y1="185" x2="370" y2="185" stroke={strokeMain} strokeWidth="3" />
              <circle cx="210" cy="185" r="4.5" fill={strokeMain} />
              <text x="210" y="206" textAnchor="middle" fill={strokeMain} fontWeight="bold" fontSize="14">P (Point of Contact)</text>

              <text x="50" y="175" fill={textColor} fontWeight="bold" fontSize="13">X</text>
              <text x="365" y="175" fill={textColor} fontWeight="bold" fontSize="13">Y</text>

              {/* Right angle mark at P */}
              <rect x="210" y="165" width="20" height="20" fill="none" stroke={strokeAccent} strokeWidth="2" />
              <circle cx="220" cy="175" r="2.5" fill={strokeAccent} />

              {/* Arbitrary point Q outside */}
              <circle cx="310" cy="185" r="4" fill={strokeDash} />
              <text x="310" y="205" textAnchor="middle" fill={textMuted} fontSize="12">Q</text>
              <line x1="210" y1="110" x2="310" y2="185" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="275" y="140" fill={textMuted} fontSize="10">OQ &gt; OP</text>

              {/* Banner */}
              <rect x="70" y="215" width="280" height="26" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={strokeAlt} strokeWidth="1" />
              <text x="210" y="232" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="12">
                Theorem 10.1: Radius ⊥ Tangent at Point of Contact (OP ⊥ XY)
              </text>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Proof basis: OP is the shortest distance from centre O to line XY; hence it is perpendicular.
            </p>
          </div>
        );

      case "math_circles_external_tangents":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 450 250" className="w-full max-w-[450px] h-auto select-none">
              {/* Circle */}
              <circle cx="160" cy="125" r="70" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
              {/* Center O */}
              <circle cx="160" cy="125" r="4.5" fill={strokeAccent} />
              <text x="145" y="128" fill={strokeAccent} fontWeight="bold" fontSize="14">O</text>

              {/* External Point P */}
              <circle cx="380" cy="125" r="4.5" fill={strokeMain} />
              <text x="395" y="130" fill={textColor} fontWeight="bold" fontSize="15">P</text>

              {/* Tangent points A and B */}
              <circle cx="195" cy="65" r="4" fill={strokeAlt} />
              <text x="195" y="52" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="14">A</text>

              <circle cx="195" cy="185" r="4" fill={strokeAlt} />
              <text x="195" y="203" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="14">B</text>

              {/* Tangents PA and PB */}
              <line x1="380" y1="125" x2="195" y2="65" stroke={strokeAlt} strokeWidth="3" />
              <line x1="380" y1="125" x2="195" y2="185" stroke={strokeAlt} strokeWidth="3" />

              {/* Radii OA and OB */}
              <line x1="160" y1="125" x2="195" y2="65" stroke={strokeAccent} strokeWidth="2" />
              <line x1="160" y1="125" x2="195" y2="185" stroke={strokeAccent} strokeWidth="2" />

              {/* Center line OP */}
              <line x1="160" y1="125" x2="380" y2="125" stroke={strokeDash} strokeWidth="1.8" strokeDasharray="4 3" />

              {/* 90 degree marks at A and B */}
              <path d="M 185,71 L 191,79 L 201,75" fill="none" stroke={strokeAccent} strokeWidth="1.5" />
              <path d="M 185,179 L 191,171 L 201,175" fill="none" stroke={strokeAccent} strokeWidth="1.5" />

              {/* Equality tick marks on PA and PB */}
              <line x1="285" y1="92" x2="291" y2="98" stroke={strokeAlt} strokeWidth="2" />
              <line x1="285" y1="158" x2="291" y2="152" stroke={strokeAlt} strokeWidth="2" />

              {/* Core Theorem Box */}
              <g transform="translate(10, 185)">
                <rect width="180" height="55" rx="6" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAlt} strokeWidth="1.2" />
                <text x="90" y="18" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="11">Theorem 10.2: RHS Congruence</text>
                <text x="12" y="34" fill={textColor} fontSize="11">• Tangent Lengths: PA = PB</text>
                <text x="12" y="48" fill={textColor} fontSize="11">• Angle Bisector: ∠OPA = ∠OPB</text>
              </g>

              <g transform="translate(220, 185)">
                <rect width="210" height="55" rx="6" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAccent} strokeWidth="1.2" />
                <text x="105" y="18" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="11">Crucial Board Corollary</text>
                <text x="12" y="34" fill={textColor} fontSize="11">• ∠AOB + ∠APB = 180° (Supplementary)</text>
                <text x="12" y="48" fill={textColor} fontSize="11">• OP is perpendicular bisector of chord AB</text>
              </g>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Proof: In right △OAP and △OBP, OA = OB (radii), OP = OP (common hypotenuse), ∠OAP = ∠OBP = 90°. By RHS, △OAP ≅ △OBP ⟹ PA = PB.
            </p>
          </div>
        );

      case "math_areas_sector_segment":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 450 250" className="w-full max-w-[450px] h-auto select-none">
              {/* Full Circle dotted */}
              <circle cx="150" cy="125" r="90" fill="none" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Shaded Sector OAPB */}
              <path
                d="M 150,125 L 213.6,61.4 A 90 90 0 0 1 213.6,188.6 Z"
                fill={fillSubtle}
                stroke={strokeMain}
                strokeWidth="2"
              />

              {/* Shaded Minor Segment (bounded by chord AB and arc APB) */}
              <path
                d="M 213.6,61.4 A 90 90 0 0 1 213.6,188.6 Z"
                fill={fillAmberSubtle}
                stroke={strokeAccent}
                strokeWidth="2.5"
              />

              {/* Chord AB */}
              <line x1="213.6" y1="61.4" x2="213.6" y2="188.6" stroke={strokeAccent} strokeWidth="2.5" />

              {/* Centre O */}
              <circle cx="150" cy="125" r="4.5" fill={strokeMain} />
              <text x="135" y="128" fill={textColor} fontWeight="bold" fontSize="14">O</text>

              {/* Central Angle theta */}
              <path d="M 175,100 A 35 35 0 0 1 175,150" fill="none" stroke={strokeMain} strokeWidth="2" />
              <text x="180" y="128" fill={strokeMain} fontWeight="bold" fontSize="13">θ</text>

              {/* Radius r */}
              <text x="175" y="80" fill={textColor} fontWeight="bold" fontSize="12">r</text>
              <text x="175" y="172" fill={textColor} fontWeight="bold" fontSize="12">r</text>

              {/* Labels A, B, P */}
              <circle cx="213.6" cy="61.4" r="4" fill={strokeAccent} />
              <text x="228" y="58" fill={textColor} fontWeight="bold" fontSize="13">A</text>

              <circle cx="213.6" cy="188.6" r="4" fill={strokeAccent} />
              <text x="228" y="196" fill={textColor} fontWeight="bold" fontSize="13">B</text>

              <text x="248" y="128" fill={strokeAccent} fontWeight="bold" fontSize="13">P (Minor Arc)</text>

              {/* Segment callout pointer */}
              <path d="M 230,140 L 260,170 L 280,170" fill="none" stroke={strokeAccent} strokeWidth="1.5" />
              <text x="285" y="174" fill={strokeAccent} fontWeight="bold" fontSize="11">Minor Segment (Shaded)</text>

              {/* Formulas Box */}
              <g transform="translate(245, 25)">
                <rect width="195" height="135" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeMain} strokeWidth="1.2" />
                <text x="97" y="20" textAnchor="middle" fill={strokeMain} fontWeight="bold" fontSize="12">Formulas Library</text>
                <text x="12" y="42" fill={textColor} fontSize="11">• Arc Length l = (θ/360°) × 2πr</text>
                <text x="12" y="62" fill={textColor} fontSize="11">• Sector Area = (θ/360°) × πr²</text>
                <text x="12" y="78" fill={textMuted} fontSize="10">   also = (1/2) × l × r</text>
                <text x="12" y="98" fill={strokeAccent} fontWeight="bold" fontSize="11">• Area of Minor Segment:</text>
                <text x="12" y="114" fill={textColor} fontSize="10">   = Area(Sector) − Area(△OAB)</text>
                <text x="12" y="128" fill={strokeAlt} fontSize="10">   = (θ/360)πr² − (1/2)r² sin θ</text>
              </g>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              For θ = 60°: Area(△OAB) = (√3/4)r². For θ = 90°: Area(△OAB) = (1/2)r². For θ = 120°: Area(△OAB) = (1/2)r² sin 120° = (√3/4)r².
            </p>
          </div>
        );

      case "math_solids_combinations":
        return (
          <div className="flex flex-col items-center">
            {/* Tabs for Toy, Capsule, Tent */}
            <div className="flex gap-2 mb-3">
              {[
                { id: "toy", label: "Toy (Cone + Hemisphere)" },
                { id: "capsule", label: "Medicine Capsule" },
                { id: "tent", label: "Circus Tent" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSolidTab(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    solidTab === tab.id
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : isDark
                      ? "bg-slate-800 text-slate-400 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {solidTab === "toy" && (
              <svg viewBox="0 0 420 220" className="w-full max-w-[420px] h-auto select-none">
                {/* Cone Top */}
                <path d="M 120,40 L 60,130 L 180,130 Z" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
                {/* Cone altitude and radius */}
                <line x1="120" y1="40" x2="120" y2="130" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="120" y1="130" x2="180" y2="130" stroke={strokeAccent} strokeWidth="2" />
                <text x="145" y="125" fill={strokeAccent} fontWeight="bold" fontSize="11">Radius r</text>
                <text x="105" y="85" fill={strokeMain} fontWeight="bold" fontSize="11">Height h</text>
                <text x="160" y="85" fill={strokeAlt} fontWeight="bold" fontSize="11">Slant l = √(r²+h²)</text>

                {/* Hemisphere Bottom */}
                <path
                  d="M 60,130 A 60 60 0 0 0 180,130 Z"
                  fill={fillGreenSubtle}
                  stroke={strokeAlt}
                  strokeWidth="2.5"
                />
                <ellipse cx="120" cy="130" rx="60" ry="12" fill="none" stroke={strokeDash} strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Formulas Box */}
                <g transform="translate(210, 30)">
                  <rect width="200" height="145" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeMain} strokeWidth="1.2" />
                  <text x="100" y="20" textAnchor="middle" fill={strokeMain} fontWeight="bold" fontSize="12">Cone on Hemisphere Toy</text>
                  <text x="12" y="42" fill={textColor} fontWeight="bold" fontSize="11">Total Surface Area (TSA):</text>
                  <text x="12" y="60" fill={strokeAlt} fontSize="11">• TSA = CSA(Cone) + CSA(Hemi)</text>
                  <text x="12" y="78" fill={textColor} fontSize="11">   = πrl + 2πr² = πr(l + 2r)</text>
                  <text x="12" y="98" fill={textColor} fontWeight="bold" fontSize="11">Total Volume:</text>
                  <text x="12" y="116" fill={strokeAccent} fontSize="11">• V = Vol(Cone) + Vol(Hemi)</text>
                  <text x="12" y="134" fill={textColor} fontSize="11">   = (1/3)πr²h + (2/3)πr³</text>
                </g>
              </svg>
            )}

            {solidTab === "capsule" && (
              <svg viewBox="0 0 420 220" className="w-full max-w-[420px] h-auto select-none">
                {/* Cylinder middle */}
                <rect x="70" y="70" width="100" height="80" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
                {/* Left Hemisphere */}
                <path d="M 70,70 A 40 40 0 0 0 70,150 Z" fill={fillGreenSubtle} stroke={strokeAlt} strokeWidth="2.5" />
                {/* Right Hemisphere */}
                <path d="M 170,70 A 40 40 0 0 1 170,150 Z" fill={fillGreenSubtle} stroke={strokeAlt} strokeWidth="2.5" />

                {/* Dimensions */}
                <line x1="70" y1="165" x2="170" y2="165" stroke={strokeMain} strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                <text x="120" y="180" textAnchor="middle" fill={strokeMain} fontSize="11">Cylinder Length = H − 2r</text>

                <line x1="30" y1="195" x2="210" y2="195" stroke={strokeDash} strokeWidth="1.5" />
                <text x="120" y="210" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="11">Total Length H</text>

                {/* Formulas Box */}
                <g transform="translate(230, 30)">
                  <rect width="180" height="145" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAlt} strokeWidth="1.2" />
                  <text x="90" y="20" textAnchor="middle" fill={strokeAlt} fontWeight="bold" fontSize="12">Medicine Capsule</text>
                  <text x="12" y="42" fill={textColor} fontWeight="bold" fontSize="11">Total Surface Area:</text>
                  <text x="12" y="60" fill={textColor} fontSize="11">• TSA = CSA(Cyl) + 2 × CSA(Hemi)</text>
                  <text x="12" y="78" fill={strokeMain} fontSize="11">   = 2πrh + 2(2πr²) = 2πr(h + 2r)</text>
                  <text x="12" y="98" fill={textColor} fontWeight="bold" fontSize="11">Total Volume:</text>
                  <text x="12" y="116" fill={strokeAccent} fontSize="11">• V = πr²h + (4/3)πr³</text>
                  <text x="12" y="132" fill={textMuted} fontSize="10">(Internal base areas are NOT painted)</text>
                </g>
              </svg>
            )}

            {solidTab === "tent" && (
              <svg viewBox="0 0 420 220" className="w-full max-w-[420px] h-auto select-none">
                {/* Cylinder base */}
                <rect x="60" y="110" width="120" height="70" fill={fillSubtle} stroke={strokeMain} strokeWidth="2.5" />
                {/* Conical top */}
                <path d="M 120,40 L 60,110 L 180,110 Z" fill={fillGreenSubtle} stroke={strokeAlt} strokeWidth="2.5" />

                {/* Labels */}
                <text x="120" y="90" textAnchor="middle" fill={strokeAlt} fontSize="11">Cone (CSA = πrl)</text>
                <text x="120" y="150" textAnchor="middle" fill={strokeMain} fontSize="11">Cyl (CSA = 2πrh₁)</text>

                {/* Formulas Box */}
                <g transform="translate(200, 30)">
                  <rect width="210" height="145" rx="8" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAccent} strokeWidth="1.2" />
                  <text x="105" y="20" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="12">Circus Tent Canvas</text>
                  <text x="12" y="42" fill={textColor} fontWeight="bold" fontSize="11">Canvas Required (Area):</text>
                  <text x="12" y="60" fill={strokeAlt} fontSize="11">• Canvas = CSA(Cyl) + CSA(Cone)</text>
                  <text x="12" y="78" fill={textColor} fontSize="11">   = 2πrh₁ + πrl = πr(2h₁ + l)</text>
                  <text x="12" y="98" fill={isDark ? "#f43f5e" : "#e11d48"} fontWeight="bold" fontSize="11">⚠️ Critical Board Warning:</text>
                  <text x="12" y="116" fill={textColor} fontSize="10">• The floor of the tent is NOT canvas!</text>
                  <text x="12" y="132" fill={textColor} fontSize="10">• Never add the base circle πr².</text>
                </g>
              </svg>
            )}
          </div>
        );

      case "math_coord_distance_section":
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 450 240" className="w-full max-w-[450px] h-auto select-none">
              {/* Coordinate Grid lines */}
              <line x1="40" y1="20" x2="40" y2="210" stroke={strokeDash} strokeWidth="1.5" />
              <line x1="30" y1="200" x2="420" y2="200" stroke={strokeDash} strokeWidth="1.5" />
              <text x="35" y="15" fill={textMuted} fontSize="12">y</text>
              <text x="425" y="204" fill={textMuted} fontSize="12">x</text>

              {/* Point A (100, 160) and Point B (320, 50) */}
              <line x1="100" y1="160" x2="320" y2="50" stroke={strokeMain} strokeWidth="3" />

              {/* Horizontal and vertical legs for distance formula */}
              <line x1="100" y1="160" x2="320" y2="160" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="320" y1="160" x2="320" y2="50" stroke={strokeDash} strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="306" y="146" width="14" height="14" fill="none" stroke={strokeDash} strokeWidth="1" />

              {/* Point A */}
              <circle cx="100" cy="160" r="5" fill={strokeMain} />
              <text x="80" y="180" fill={textColor} fontWeight="bold" fontSize="13">A(x₁, y₁)</text>

              {/* Point B */}
              <circle cx="320" cy="50" r="5" fill={strokeMain} />
              <text x="335" y="48" fill={textColor} fontWeight="bold" fontSize="13">B(x₂, y₂)</text>

              {/* Section Point P (dividing 2:1) at (246, 86) */}
              <circle cx="246" cy="86" r="5" fill={strokeAccent} />
              <text x="246" y="72" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="13">P(x, y)</text>

              {/* Ratio markers m1 and m2 */}
              <text x="170" y="115" fill={strokeAlt} fontWeight="bold" fontSize="12">m₁</text>
              <text x="285" y="60" fill={strokeAlt} fontWeight="bold" fontSize="12">m₂</text>

              {/* Horizontal / Vertical leg labels */}
              <text x="210" y="175" textAnchor="middle" fill={textMuted} fontSize="11">|x₂ − x₁|</text>
              <text x="350" y="110" fill={textMuted} fontSize="11">|y₂ − y₁|</text>

              {/* Formulas Box */}
              <g transform="translate(50, 20)">
                <rect width="180" height="70" rx="6" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeMain} strokeWidth="1" />
                <text x="90" y="18" textAnchor="middle" fill={strokeMain} fontWeight="bold" fontSize="11">Distance Formula</text>
                <text x="12" y="38" fill={textColor} fontSize="11">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</text>
                <text x="12" y="55" fill={textMuted} fontSize="10">From origin: d = √(x² + y²)</text>
              </g>

              <g transform="translate(180, 175)">
                <rect width="250" height="58" rx="6" fill={isDark ? "#111827" : "#f8fafc"} stroke={strokeAccent} strokeWidth="1" />
                <text x="125" y="16" textAnchor="middle" fill={strokeAccent} fontWeight="bold" fontSize="11">Section Formula (m₁ : m₂)</text>
                <text x="12" y="34" fill={textColor} fontSize="11">x = (m₁x₂ + m₂x₁) / (m₁ + m₂)</text>
                <text x="12" y="50" fill={textColor} fontSize="11">y = (m₁y₂ + m₂y₁) / (m₁ + m₂)</text>
              </g>
            </svg>
            <p className={`mt-1 text-xs text-center ${textMuted}`}>
              Midpoint: <code className="text-sky-400 font-mono">((x₁+x₂)/2, (y₁+y₂)/2)</code>. Ratio tip: when finding ratio, assume <code className="text-emerald-400 font-mono">k : 1</code>.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all my-4 overflow-hidden ${
        isDark
          ? "bg-[#0b101c]/90 border-slate-800 shadow-lg shadow-black/30"
          : "bg-white border-slate-200 shadow-md shadow-slate-100"
      } ${className}`}
    >
      {/* Header bar */}
      {(title || caption) && (
        <div
          className={`px-4 py-3 border-b flex items-center justify-between ${
            isDark ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <div>
              {title && <h4 className={`text-sm font-semibold ${textColor}`}>{title}</h4>}
              {caption && <p className={`text-xs ${textMuted}`}>{caption}</p>}
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
            CBSE Vector Figure
          </span>
        </div>
      )}

      {/* Render Graphic */}
      <div className="p-4 flex flex-col items-center justify-center">
        {renderFigureContent()}
      </div>
    </div>
  );
};
