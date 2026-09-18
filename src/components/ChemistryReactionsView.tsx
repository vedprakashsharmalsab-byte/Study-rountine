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
        return isDark ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-emerald-50 text-emerald-800 border-emerald-300";
      case "Thermal Decomposition":
        return isDark ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-amber-50 text-amber-800 border-amber-300";
      case "Electrolytic Decomposition":
        return isDark ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-cyan-50 text-cyan-800 border-cyan-300";
      case "Photolytic Decomposition":
        return isDark ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : "bg-yellow-50 text-yellow-800 border-yellow-300";
      case "Displacement":
        return isDark ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-blue-50 text-blue-800 border-blue-300";
      case "Double Displacement (Precipitation)":
        return isDark ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-indigo-50 text-indigo-800 border-indigo-300";
      case "Redox (Oxidation-Reduction)":
        return isDark ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : "bg-purple-50 text-purple-800 border-purple-300";
      case "Neutralization":
        return isDark ? "bg-teal-500/10 text-teal-400 border-teal-500/20" : "bg-teal-50 text-teal-800 border-teal-300";
      case "Thermite Reaction":
        return isDark ? "bg-rose-500/10 text-rose-400 border-rose-500/20" : "bg-rose-50 text-rose-800 border-rose-300";
      case "Esterification":
      case "Saponification":
        return isDark ? "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20" : "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-300";
      default:
        return isDark ? "bg-slate-500/10 text-slate-400 border-slate-500/20" : "bg-slate-100 text-slate-800 border-slate-300";
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
              <div className={`w-9 h-9 rounded-2xl border flex items-center justify-center ${
                isDark ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-emerald-100 border-emerald-300 text-emerald-700"
              }`}>
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white">
                100% CBSE Board Standard
              </span>
              <span className={`text-xs font-mono font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
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
              <div className={`text-2xl font-black ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>{CHEMISTRY_REACTIONS_MASTER.length}</div>
              <div className={`text-[10px] uppercase font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>Total Reactions</div>
            </div>
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className={`text-2xl font-black ${isDark ? "text-cyan-400" : "text-cyan-800"}`}>17</div>
              <div className={`text-[10px] uppercase font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>Reaction Types</div>
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

          {/* CHAPTER SELECTOR: MOBILE DROPDOWN + DESKTOP PILLS */}
          <div className="md:hidden">
            <div className="fabulous-select-wrapper">
              <select
                aria-label="Select Chapter Filter"
                value={String(selectedChapter)}
                onChange={(e) => setSelectedChapter(e.target.value === "all" ? "all" : Number(e.target.value))}
                className={`fabulous-select ${
                  isDark ? "fabulous-select-dark" : "fabulous-select-light"
                }`}
              >
                {CHAPTER_FILTERS.map((f) => (
                  <option key={String(f.no)} value={String(f.no)}>
                    {f.label}
                  </option>
                ))}
              </select>
              <div className="fabulous-select-icon text-zinc-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-wrap pb-1">
            {CHAPTER_FILTERS.map((f) => (
              <button
                key={String(f.no)}
                onClick={() => setSelectedChapter(f.no as any)}
                className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border touch-manipulation min-h-[36px] ${
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
            <div className="fabulous-select-wrapper w-auto min-w-[190px]">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`fabulous-select ${
                  isDark ? "fabulous-select-dark" : "fabulous-select-light"
                }`}
              >
                {REACTION_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t === "all" ? "All Reaction Types" : t}
                  </option>
                ))}
              </select>
              <div className="fabulous-select-icon text-zinc-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

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
                role="button"
                tabIndex={0}
                className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 select-none touch-manipulation"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                      isDark ? "bg-slate-800 text-slate-300 border-slate-700" : "bg-slate-100 text-slate-700 border-slate-300"
                    }`}>
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

                  <div className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {rx.wordEquation}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-end sm:self-center">
                  <span className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border ${
                    rx.heatTransfer === "Exothermic" ? (isDark ? "bg-rose-500/10 text-rose-400 border-rose-500/20" : "bg-rose-50 text-rose-800 border-rose-200") :
                    rx.heatTransfer === "Endothermic" ? (isDark ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-cyan-50 text-cyan-800 border-cyan-200") :
                    (isDark ? "bg-slate-500/10 text-slate-400 border-slate-500/20" : "bg-slate-100 text-slate-700 border-slate-200")
                  }`}>
                    {rx.heatTransfer}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyEquation(rx.id, rx.balancedEquation);
                    }}
                    title="Copy LaTeX equation"
                    className={`p-2.5 rounded-xl border transition-colors touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer ${
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
                      <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                        <Sparkles className="w-3.5 h-3.5" /> Official Balanced Board Equation
                      </span>
                      {rx.conditions && (
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-bold ${
                          isDark ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-amber-50 text-amber-800 border-amber-300"
                        }`}>
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
                            <span className={`font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>{r.formula} <span className={isDark ? "text-slate-400" : "text-slate-500"}>{r.state}</span></span>
                            <span className={isDark ? "text-slate-300" : "text-slate-800"}>{r.name} {r.color && <span className={`text-[11px] ${isDark ? "text-amber-300" : "text-amber-700 font-semibold"}`}>({r.color})</span>}</span>
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
                            <span className={`font-bold ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>{p.formula} <span className={isDark ? "text-slate-400" : "text-slate-500"}>{p.state}</span></span>
                            <span className={isDark ? "text-slate-300" : "text-slate-800"}>{p.name} {p.color && <span className={`text-[11px] ${isDark ? "text-amber-300" : "text-amber-700 font-semibold"}`}>({p.color})</span>}</span>
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
