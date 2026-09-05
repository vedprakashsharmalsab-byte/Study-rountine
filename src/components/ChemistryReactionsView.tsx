"use client";

import React, { useState, useMemo } from "react";
import {
  FlaskConical,
  Atom,
  Search,
  Sparkles,
  Flame,
  Zap,
  Sun,
  Layers,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Filter,
  Copy,
  Check,
  BookOpen,
  ArrowRight,
  Droplet
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import {
  CHEMISTRY_REACTIONS_MASTER,
  type ChemistryReaction,
  type ReactionType
} from "@/data/chemistryReactionsData";

interface ChemistryReactionsViewProps {
  isDark: boolean;
  onOpenQuestionBank?: (chapterNo?: number) => void;
  defaultChapterNo?: number;
}

export default function ChemistryReactionsView({
  isDark,
  onOpenQuestionBank,
  defaultChapterNo
}: ChemistryReactionsViewProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | "all">(defaultChapterNo || "all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    rx_1_1: true,
    rx_1_2: true,
    rx_2_9: true,
    rx_4_5: true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyEquation = (id: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CHAPTER_FILTERS = [
    { no: "all", label: "All Chapters (56 Reactions)" },
    { no: 1, label: "Ch 1: Reactions & Equations" },
    { no: 2, label: "Ch 2: Acids, Bases & Salts" },
    { no: 3, label: "Ch 3: Metals & Non-Metals" },
    { no: 4, label: "Ch 4: Carbon & its Compounds" }
  ];

  const REACTION_TYPES = [
    "all",
    "Combination",
    "Thermal Decomposition",
    "Electrolytic Decomposition",
    "Photolytic Decomposition",
    "Displacement",
    "Double Displacement (Precipitation)",
    "Redox (Oxidation-Reduction)",
    "Neutralization",
    "Acid-Carbonate Gas Evolution",
    "Chlor-Alkali Process",
    "Thermite Reaction",
    "Roasting & Calcination",
    "Esterification",
    "Saponification",
    "Controlled Oxidation",
    "Addition (Hydrogenation)"
  ];

  const filteredReactions = useMemo(() => {
    return CHEMISTRY_REACTIONS_MASTER.filter((rx) => {
      if (selectedChapter !== "all" && rx.chapterNo !== selectedChapter) return false;
      if (selectedType !== "all" && rx.reactionType !== selectedType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName =
          rx.title.toLowerCase().includes(q) ||
          rx.topic.toLowerCase().includes(q) ||
          rx.wordEquation.toLowerCase().includes(q) ||
          rx.balancedEquation.toLowerCase().includes(q) ||
          rx.ncertReference.toLowerCase().includes(q) ||
          rx.boardExamTrap.toLowerCase().includes(q);

        const matchesReactants = rx.reactants.some(
          (r) => r.name.toLowerCase().includes(q) || r.formula.toLowerCase().includes(q) || (r.color && r.color.toLowerCase().includes(q))
        );

        const matchesProducts = rx.products.some(
          (p) => p.name.toLowerCase().includes(q) || p.formula.toLowerCase().includes(q) || (p.color && p.color.toLowerCase().includes(q))
        );

        const matchesObs = rx.keyObservations.some((obs) => obs.toLowerCase().includes(q));

        return matchesName || matchesReactants || matchesProducts || matchesObs;
      }
      return true;
    });
  }, [selectedChapter, selectedType, searchQuery]);

  const getTypeBadgeColor = (type: ReactionType) => {
    switch (type) {
      case "Combination":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Thermal Decomposition":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Electrolytic Decomposition":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Photolytic Decomposition":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Displacement":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Double Displacement (Precipitation)":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Redox (Oxidation-Reduction)":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Neutralization":
        return "bg-teal-500/10 text-teal-400 border-teal-500/20";
      case "Thermite Reaction":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "Esterification":
      case "Saponification":
        return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. HERO HEADER */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-cyan-950/20 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            : "bg-gradient-to-r from-emerald-50 via-white to-cyan-50 border-emerald-100 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950">
                100% CBSE Board Standard
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                Chapters 1 to 4 Master Bank
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              CBSE Class 10 Chemistry Reactions Encyclopedia
            </h1>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Every chemical reaction mandated by the official CBSE Class 10 curriculum. Complete with state symbols, precipitate colors, gas identification tests, catalyst conditions, and examiner deduction traps.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-emerald-400">{CHEMISTRY_REACTIONS_MASTER.length}</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Reactions</div>
            </div>
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-cyan-400">17</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Reaction Types</div>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="mt-6 pt-6 border-t border-current/10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by reactant, product, precipitate color (e.g. 'yellow ppt', 'brown fumes', 'limewater', 'ester')..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                isDark ? "bg-black/40 border-white/10 text-white placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
            />
          </div>

          {/* CHAPTER SELECTOR TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CHAPTER_FILTERS.map((f) => (
              <button
                key={String(f.no)}
                onClick={() => setSelectedChapter(f.no as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                  selectedChapter === f.no
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                    : isDark
                    ? "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.07]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* TYPE FILTER DROPDOWN */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Type:
            </span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all focus:outline-none ${
                isDark ? "bg-slate-900 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              {REACTION_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t === "all" ? "All Reaction Types" : t}
                </option>
              ))}
            </select>

            <span className="text-xs font-mono text-slate-400 ml-auto">
              Showing {filteredReactions.length} of {CHEMISTRY_REACTIONS_MASTER.length}
            </span>
          </div>
        </div>
      </div>

      {/* 2. REACTIONS GRID / LIST */}
      <div className="grid grid-cols-1 gap-5">
        {filteredReactions.map((rx) => {
          const isExpanded = !!expandedIds[rx.id];
          return (
            <div
              key={rx.id}
              className={`rounded-3xl border transition-all duration-200 ${
                isDark
                  ? "bg-slate-900/60 border-white/[0.08] hover:border-white/20 shadow-lg"
                  : "bg-white border-slate-200 hover:border-emerald-300 shadow-sm"
              }`}
            >
              {/* TOP STRIP */}
              <div
                onClick={() => toggleExpand(rx.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      Ch {rx.chapterNo}: {rx.chapterName.split(" ")[0]}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border ${getTypeBadgeColor(rx.reactionType)}`}>
                      {rx.reactionType}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {rx.ncertReference}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                    {rx.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400">
                    {rx.wordEquation}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className={`px-2.5 py-1 rounded-xl text-[11px] font-bold ${
                    rx.heatTransfer === "Exothermic" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                    rx.heatTransfer === "Endothermic" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" :
                    "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                  }`}>
                    {rx.heatTransfer}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyEquation(rx.id, rx.balancedEquation);
                    }}
                    title="Copy LaTeX equation"
                    className={`p-2 rounded-xl border transition-colors ${
                      isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600"
                    }`}
                  >
                    {copiedId === rx.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* EXPANDED CONTENT */}
              {isExpanded && (
                <div className={`px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t space-y-5 ${isDark ? "border-white/5" : "border-slate-100"}`}>
                  {/* BALANCED FORMULA DISPLAY */}
                  <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? "bg-black/50 border-emerald-500/20" : "bg-emerald-50/50 border-emerald-200"}`}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Official Balanced Board Equation
                      </span>
                      {rx.conditions && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                          Condition: {rx.conditions}
                        </span>
                      )}
                    </div>
                    <div className="overflow-x-auto py-2">
                      <PremiumMathRenderer content={`$$${rx.balancedEquation}$$`} isDark={isDark} />
                    </div>
                  </div>

                  {/* REACTANTS & PRODUCTS WITH COLORS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* REACTANTS */}
                    <div className={`p-3.5 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"}`}>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 font-mono">Reactants</span>
                      <div className="space-y-1.5">
                        {rx.reactants.map((r, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-emerald-400">{r.formula} <span className="text-slate-400">{r.state}</span></span>
                            <span className="text-slate-300">{r.name} {r.color && <span className="text-[11px] text-amber-300">({r.color})</span>}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PRODUCTS */}
                    <div className={`p-3.5 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"}`}>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 font-mono">Products Formed</span>
                      <div className="space-y-1.5">
                        {rx.products.map((p, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-cyan-400">{p.formula} <span className="text-slate-400">{p.state}</span></span>
                            <span className="text-slate-300">{p.name} {p.color && <span className="text-[11px] text-amber-300">({p.color})</span>}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* KEY OBSERVATIONS */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Atom className="w-3.5 h-3.5 text-cyan-400" /> Laboratory Observations & Gas Tests:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm">
                      {rx.keyObservations.map((obs, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={isDark ? "text-slate-200" : "text-slate-700"}>{obs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EXAMINER DEDUCTION TRAP */}
                  <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    isDark ? "bg-rose-950/20 border-rose-500/30 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-900"
                  }`}>
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <span className="font-bold block text-rose-400">CBSE Board Marking Trap:</span>
                      <p className="leading-relaxed">{rx.boardExamTrap}</p>
                    </div>
                  </div>

                  {/* BOTTOM ACTION */}
                  {onOpenQuestionBank && (
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => onOpenQuestionBank(rx.chapterNo)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        Practice Ch {rx.chapterNo} Questions in Vault <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
