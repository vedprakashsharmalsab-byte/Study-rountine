"use client";

import React, { useState } from "react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { Sparkles, ArrowLeftRight, Check } from "lucide-react";

interface TrigValuesMasterTableProps {
  isDark?: boolean;
}

interface TrigCell {
  val: string;
  derivation: string;
  isUndefined?: boolean;
}

export default function TrigValuesMasterTable({ isDark = true }: TrigValuesMasterTableProps) {
  const [activeAngleIndex, setActiveAngleIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"standard" | "derivation" | "swap">("standard");

  const angles = [
    { deg: "0^\\circ", rad: "0", label: "0°" },
    { deg: "30^\\circ", rad: "\\frac{\\pi}{6}", label: "30°" },
    { deg: "45^\\circ", rad: "\\frac{\\pi}{4}", label: "45°" },
    { deg: "60^\\circ", rad: "\\frac{\\pi}{3}", label: "60°" },
    { deg: "90^\\circ", rad: "\\frac{\\pi}{2}", label: "90°" }
  ];

  const tableData: {
    ratio: string;
    name: string;
    type: "primary" | "reciprocal";
    memoryTip: string;
    swapPair: string;
    values: TrigCell[];
  }[] = [
    {
      ratio: "\\sin\\theta",
      name: "Sine",
      type: "primary",
      memoryTip: "0-1-2-3-4 pattern: √n / 2",
      swapPair: "Cos (Reverse)",
      values: [
        { val: "0", derivation: "\\frac{\\sqrt{0}}{2} = 0" },
        { val: "\\frac{1}{2}", derivation: "\\frac{\\sqrt{1}}{2} = \\frac{1}{2}" },
        { val: "\\frac{1}{\\sqrt{2}}", derivation: "\\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}" },
        { val: "\\frac{\\sqrt{3}}{2}", derivation: "\\frac{\\sqrt{3}}{2}" },
        { val: "1", derivation: "\\frac{\\sqrt{4}}{2} = 1" }
      ]
    },
    {
      ratio: "\\cos\\theta",
      name: "Cosine",
      type: "primary",
      memoryTip: "Sine walking backwards (4-3-2-1-0)",
      swapPair: "Sin (Complement)",
      values: [
        { val: "1", derivation: "\\frac{\\sqrt{4}}{2} = 1" },
        { val: "\\frac{\\sqrt{3}}{2}", derivation: "\\frac{\\sqrt{3}}{2}" },
        { val: "\\frac{1}{\\sqrt{2}}", derivation: "\\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}" },
        { val: "\\frac{1}{2}", derivation: "\\frac{\\sqrt{1}}{2} = \\frac{1}{2}" },
        { val: "0", derivation: "\\frac{\\sqrt{0}}{2} = 0" }
      ]
    },
    {
      ratio: "\\tan\\theta",
      name: "Tangent",
      type: "primary",
      memoryTip: "Divide: sin ÷ cos",
      swapPair: "Cot (Complement)",
      values: [
        { val: "0", derivation: "\\frac{0}{1} = 0" },
        { val: "\\frac{1}{\\sqrt{3}}", derivation: "\\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}" },
        { val: "1", derivation: "\\frac{1/\\sqrt{2}}{1/\\sqrt{2}} = 1" },
        { val: "\\sqrt{3}", derivation: "\\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}" },
        { val: "\\text{Not Defined}", derivation: "\\frac{1}{0} \\implies \\text{undefined}", isUndefined: true }
      ]
    },
    {
      ratio: "\\csc\\theta",
      name: "Cosecant",
      type: "reciprocal",
      memoryTip: "Flip Sine upside-down (1/sin)",
      swapPair: "Sec (Complement)",
      values: [
        { val: "\\text{Not Defined}", derivation: "\\frac{1}{0} \\implies \\text{undefined}", isUndefined: true },
        { val: "2", derivation: "\\frac{1}{1/2} = 2" },
        { val: "\\sqrt{2}", derivation: "\\frac{1}{1/\\sqrt{2}} = \\sqrt{2}" },
        { val: "\\frac{2}{\\sqrt{3}}", derivation: "\\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}}" },
        { val: "1", derivation: "\\frac{1}{1} = 1" }
      ]
    },
    {
      ratio: "\\sec\\theta",
      name: "Secant",
      type: "reciprocal",
      memoryTip: "Flip Cosine upside-down (1/cos)",
      swapPair: "Csc (Complement)",
      values: [
        { val: "1", derivation: "\\frac{1}{1} = 1" },
        { val: "\\frac{2}{\\sqrt{3}}", derivation: "\\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}}" },
        { val: "\\sqrt{2}", derivation: "\\frac{1}{1/\\sqrt{2}} = \\sqrt{2}" },
        { val: "2", derivation: "\\frac{1}{1/2} = 2" },
        { val: "\\text{Not Defined}", derivation: "\\frac{1}{0} \\implies \\text{undefined}", isUndefined: true }
      ]
    },
    {
      ratio: "\\cot\\theta",
      name: "Cotangent",
      type: "reciprocal",
      memoryTip: "Flip Tan upside-down (cos ÷ sin)",
      swapPair: "Tan (Complement)",
      values: [
        { val: "\\text{Not Defined}", derivation: "\\frac{1}{0} \\implies \\text{undefined}", isUndefined: true },
        { val: "\\sqrt{3}", derivation: "\\frac{1}{1/\\sqrt{3}} = \\sqrt{3}" },
        { val: "1", derivation: "\\frac{1}{1} = 1" },
        { val: "\\frac{1}{\\sqrt{3}}", derivation: "\\frac{1}{\\sqrt{3}}" },
        { val: "0", derivation: "\\frac{\\cos 90^\\circ}{\\sin 90^\\circ} = \\frac{0}{1} = 0" }
      ]
    }
  ];

  return (
    <div className={`rounded-3xl border shadow-xl overflow-hidden transition-all my-6 ${
      isDark 
        ? "bg-[#0b101c] border-emerald-500/25 shadow-[0_10px_40px_rgba(0,0,0,0.6)]" 
        : "bg-white border-emerald-200 shadow-xl"
    }`}>
      {/* Top Banner with Controls */}
      <div className={`p-5 sm:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        isDark 
          ? "bg-gradient-to-r from-emerald-950/50 via-[#0e1726] to-[#0b101c] border-white/10" 
          : "bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-emerald-200"
      }`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500 text-slate-950 shadow-xs">
              Official CBSE Table
            </span>
            <span className={`text-xs font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
              Standard Angles (0°, 30°, 45°, 60°, 90°)
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
            Trigonometric Ratios Master Matrix
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Click any column angle to inspect ratios. Notice how complementary angles (30° ↔ 60°, 0° ↔ 90°) swap sin/cos, tan/cot, and sec/csc!
          </p>
        </div>

        {/* View Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl border self-start md:self-auto shrink-0 bg-black/20 border-white/10">
          <button
            onClick={() => setViewMode("standard")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === "standard"
                ? "bg-emerald-500 text-slate-950 shadow-xs"
                : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950"
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            <span>Exact Values</span>
          </button>
          <button
            onClick={() => setViewMode("derivation")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === "derivation"
                ? "bg-amber-500 text-slate-950 shadow-xs"
                : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>0-1-2-3-4 Secret</span>
          </button>
          <button
            onClick={() => setViewMode("swap")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === "swap"
                ? "bg-cyan-500 text-slate-950 shadow-xs"
                : isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950"
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Swap Rule (90°-θ)</span>
          </button>
        </div>
      </div>

      {/* Explanation Banner depending on view mode */}
      {viewMode === "derivation" && (
        <div className={`px-6 py-3 border-b text-xs flex items-center gap-2 ${
          isDark ? "bg-amber-500/10 border-amber-500/20 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
        }`}>
          <Sparkles className="w-4 h-4 shrink-0" />
          <div className="flex-1">
            <PremiumMathRenderer
              content="**The 30-Second Board Exam Trick:** Write numbers $0, 1, 2, 3, 4$ across columns $\\to$ Divide all by $4$ $\\to$ Put a square root over each $\\left(\\sqrt{\\frac{0}{4}}, \\sqrt{\\frac{1}{4}}, \\sqrt{\\frac{2}{4}}, \\sqrt{\\frac{3}{4}}, \\sqrt{\\frac{4}{4}}\\right)$. That yields Sine! Cosine is Sine in reverse."
              isDark={isDark}
            />
          </div>
        </div>
      )}

      {viewMode === "swap" && (
        <div className={`px-6 py-3 border-b text-xs flex items-center gap-2 ${
          isDark ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" : "bg-cyan-50 border-cyan-200 text-cyan-900"
        }`}>
          <ArrowLeftRight className="w-4 h-4 shrink-0" />
          <div className="flex-1">
            <PremiumMathRenderer
              content="**The Complementary Swap Principle ($\\theta + \\phi = 90^\\circ$):** When two angles sum to $90^\\circ$, Sine & Cosine swap values ($\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$), Tangent & Cotangent swap ($\\tan 30^\\circ = \\cot 60^\\circ = \\frac{1}{\\sqrt{3}}$), and Secant & Cosecant swap ($\\sec 30^\\circ = \\csc 60^\\circ = \\frac{2}{\\sqrt{3}}$)!"
              isDark={isDark}
            />
          </div>
        </div>
      )}

      {/* Responsive Matrix Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className={`border-b ${isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"}`}>
              <th className="p-4 sm:p-5 font-mono font-bold text-xs uppercase tracking-wider w-[170px]">
                <span className={isDark ? "text-slate-400" : "text-slate-500"}>Ratio / Angle</span>
              </th>
              {angles.map((ang, idx) => {
                const isSelected = activeAngleIndex === idx;
                const isSwapBuddy = activeAngleIndex !== null && (
                  (activeAngleIndex === 1 && idx === 3) || // 30° <-> 60°
                  (activeAngleIndex === 3 && idx === 1) || // 60° <-> 30°
                  (activeAngleIndex === 0 && idx === 4) || // 0° <-> 90°
                  (activeAngleIndex === 4 && idx === 0)    // 90° <-> 0°
                );

                return (
                  <th
                    key={ang.label}
                    onClick={() => setActiveAngleIndex(activeAngleIndex === idx ? null : idx)}
                    className={`p-3.5 sm:p-4 text-center cursor-pointer transition-all border-l ${
                      isDark ? "border-white/10" : "border-slate-200"
                    } ${
                      isSelected
                        ? isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100/80 text-emerald-950 font-black"
                        : isSwapBuddy && viewMode === "swap"
                        ? isDark ? "bg-cyan-500/20 text-cyan-300" : "bg-cyan-100/80 text-cyan-950 font-black"
                        : isDark ? "hover:bg-white/5 text-slate-200" : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="font-bold text-base sm:text-lg">{ang.label}</span>
                      <span className="text-xs font-mono opacity-80">
                        <PremiumMathRenderer content={`$${ang.rad}$`} isDark={isDark} inline />
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rIdx) => {
              const isPrimary = row.type === "primary";
              return (
                <tr
                  key={row.name}
                  className={`border-b transition-all ${
                    isDark ? "border-white/5 hover:bg-white/[0.02]" : "border-slate-200 hover:bg-slate-50/60"
                  } ${rIdx === 2 ? (isDark ? "border-b-2 border-emerald-500/30" : "border-b-2 border-emerald-300") : ""}`}
                >
                  {/* Ratio Label Column */}
                  <td className="p-3.5 sm:p-4 font-semibold">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border ${
                        isPrimary
                          ? isDark ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold"
                          : isDark ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-purple-100 text-purple-900 border-purple-300 font-bold"
                      }`}>
                        <PremiumMathRenderer content={`$${row.ratio}$`} isDark={isDark} inline />
                      </div>
                      <div>
                        <div className={`text-sm font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                          {row.name}
                        </div>
                        <div className={`text-[11px] font-mono ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {row.memoryTip}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* 5 Angles Columns */}
                  {row.values.map((cell, cIdx) => {
                    const isSelectedCol = activeAngleIndex === cIdx;
                    const isSwapBuddyCol = activeAngleIndex !== null && (
                      (activeAngleIndex === 1 && cIdx === 3) ||
                      (activeAngleIndex === 3 && cIdx === 1) ||
                      (activeAngleIndex === 0 && cIdx === 4) ||
                      (activeAngleIndex === 4 && cIdx === 0)
                    );

                    return (
                      <td
                        key={cIdx}
                        onClick={() => setActiveAngleIndex(activeAngleIndex === cIdx ? null : cIdx)}
                        className={`p-3 sm:p-4 text-center border-l transition-all cursor-pointer ${
                          isDark ? "border-white/5" : "border-slate-200"
                        } ${
                          isSelectedCol
                            ? isDark ? "bg-emerald-500/15" : "bg-emerald-50"
                            : isSwapBuddyCol && viewMode === "swap"
                            ? isDark ? "bg-cyan-500/15" : "bg-cyan-50"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center min-h-[42px]">
                          {viewMode === "derivation" ? (
                            <div className="space-y-0.5">
                              <span className={`text-xs font-mono font-bold ${
                                cell.isUndefined ? "text-rose-400 italic" : isDark ? "text-amber-300" : "text-amber-800 font-bold"
                              }`}>
                                <PremiumMathRenderer content={`$${cell.derivation}$`} isDark={isDark} inline />
                              </span>
                            </div>
                          ) : (
                            <span className={`font-mono text-base sm:text-lg font-bold ${
                              cell.isUndefined 
                                ? "text-xs font-sans text-rose-400 font-black italic tracking-wide" 
                                : isDark ? "text-white" : "text-slate-950 font-black"
                            }`}>
                              <PremiumMathRenderer content={`$${cell.val}$`} isDark={isDark} inline />
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Memory Aids & Tips Footer */}
      <div className={`p-4 sm:p-5 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs sm:text-sm ${
        isDark ? "bg-black/30 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
      }`}>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 text-xs">
            <Check className="w-3.5 h-3.5" /> High-Yield Anchors:
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs">
            <PremiumMathRenderer content="$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$" isDark={isDark} inline />
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs">
            <PremiumMathRenderer content="$\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$" isDark={isDark} inline />
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs">
            <PremiumMathRenderer content="$\\tan 45^\\circ = \\cot 45^\\circ = 1$" isDark={isDark} inline />
          </span>
        </div>
        <div className="text-xs font-mono text-amber-400">
          ★ Pro Tip: Tan 90°, Csc 0°, Sec 90°, Cot 0° are ALL "Not Defined" (Division by 0)
        </div>
      </div>
    </div>
  );
}
