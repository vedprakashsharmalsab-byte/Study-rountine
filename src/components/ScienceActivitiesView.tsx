"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  FlaskConical, 
  Atom, 
  Zap, 
  Dna, 
  Leaf, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Lightbulb, 
  FileText, 
  Filter,
  Eye,
  Beaker,
  ShieldAlert,
  Flame,
  Clock,
  Award,
  FileImage,
  Maximize2
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import ScienceApparatusSchematic from "@/components/ScienceApparatusSchematics";
import { NCERT_SCIENCE_ACTIVITIES, NCERTActivity } from "@/data/ncertActivitiesData";

interface ScienceActivitiesViewProps {
  isDark: boolean;
  onOpenQuestionBank?: (chapterNo?: number) => void;
  defaultChapterNo?: number;
}

export default function ScienceActivitiesView({
  isDark,
  onOpenQuestionBank,
  defaultChapterNo
}: ScienceActivitiesViewProps) {
  // Mode: "cards" (detailed step-by-step PBQ cards) or "gallery" (all 29 visual apparatus schematics)
  const [activityViewMode, setActivityViewMode] = useState<"cards" | "gallery">("cards");
  // Always show visual diagrams on cards by default so diagrams are never hidden
  const [alwaysShowDiagrams, setAlwaysShowDiagrams] = useState<boolean>(true);

  // State with LocalStorage Persistence
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("all");
  const [selectedChapterNo, setSelectedChapterNo] = useState<number | "all">(defaultChapterNo || "all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedActivityIds, setExpandedActivityIds] = useState<Record<string, boolean>>({
    act_1_1: true,
    act_1_2: true
  });

  // Restore persistence on mount
  useEffect(() => {
    try {
      const savedDiscipline = localStorage.getItem("cbse_last_activity_discipline");
      if (savedDiscipline) setSelectedDiscipline(savedDiscipline);

      if (!defaultChapterNo) {
        const savedCh = localStorage.getItem("cbse_last_activity_chapter");
        if (savedCh && savedCh !== "all") {
          const parsed = parseInt(savedCh, 10);
          if (!isNaN(parsed)) setSelectedChapterNo(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, [defaultChapterNo]);

  // Save changes to localStorage
  const handleDisciplineChange = (d: string) => {
    setSelectedDiscipline(d);
    setSelectedChapterNo("all");
    try {
      localStorage.setItem("cbse_last_activity_discipline", d);
      localStorage.setItem("cbse_last_activity_chapter", "all");
    } catch {}
  };

  const handleChapterChange = (ch: number | "all") => {
    setSelectedChapterNo(ch);
    try {
      localStorage.setItem("cbse_last_activity_chapter", String(ch));
    } catch {}
  };

  const toggleExpand = (id: string) => {
    setExpandedActivityIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpandAll = () => {
    const allExpanded = filteredActivities.every((a) => expandedActivityIds[a.id]);
    const nextState: Record<string, boolean> = {};
    filteredActivities.forEach((a) => {
      nextState[a.id] = !allExpanded;
    });
    setExpandedActivityIds(nextState);
  };

  const CHAPTER_LIST = [
    { no: 1, name: "Chemical Reactions & Equations", short: "Ch 1: Reactions", discipline: "Chemistry" },
    { no: 2, name: "Acids, Bases and Salts", short: "Ch 2: Acids & Salts", discipline: "Chemistry" },
    { no: 3, name: "Metals and Non-Metals", short: "Ch 3: Metals", discipline: "Chemistry" },
    { no: 4, name: "Carbon & its Compounds", short: "Ch 4: Carbon", discipline: "Chemistry" },
    { no: 5, name: "Life Processes", short: "Ch 5: Life Processes", discipline: "Biology" },
    { no: 10, name: "Light Reflection & Refraction", short: "Ch 10: Light", discipline: "Physics" },
    { no: 11, name: "The Human Eye", short: "Ch 11: Human Eye", discipline: "Physics" },
    { no: 12, name: "Electricity", short: "Ch 12: Electricity", discipline: "Physics" },
    { no: 13, name: "Magnetic Effects", short: "Ch 13: Magnetic", discipline: "Physics" },
  ];

  const filteredActivities = useMemo(() => {
    return NCERT_SCIENCE_ACTIVITIES.filter((act) => {
      // Discipline filter
      if (selectedDiscipline !== "all" && act.discipline !== selectedDiscipline) return false;
      // Chapter filter
      if (selectedChapterNo !== "all" && act.chapterNo !== selectedChapterNo) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesMain = 
          act.activityNo.toLowerCase().includes(q) ||
          act.title.toLowerCase().includes(q) ||
          act.aim.toLowerCase().includes(q) ||
          act.chapterName.toLowerCase().includes(q) ||
          act.scientificInference.toLowerCase().includes(q) ||
          (act.colorChangeAndTransformation && act.colorChangeAndTransformation.summaryBadge.toLowerCase().includes(q)) ||
          act.apparatusAndMaterials.some((m) => m.toLowerCase().includes(q)) ||
          act.keyObservations.some((o) => o.details.toLowerCase().includes(q) || o.label.toLowerCase().includes(q));
        
        const matchesEquations = act.chemicalEquationsOrFormulas?.some(
          (e) => e.name.toLowerCase().includes(q) || e.equation.toLowerCase().includes(q)
        );

        return matchesMain || matchesEquations;
      }
      return true;
    });
  }, [selectedDiscipline, selectedChapterNo, searchQuery]);

  const getDisciplineBadgeStyle = (discipline: string) => {
    switch (discipline) {
      case "Chemistry": return "text-amber-400 border-amber-500/30 bg-amber-500/10";
      case "Physics": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "Biology": return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
      default: return "text-teal-400 border-teal-500/30 bg-teal-500/10";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. HERO BANNER */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        isDark 
          ? "bg-gradient-to-br from-[#0e1627] via-[#0a101d] to-[#0c1424] border-cyan-500/25 shadow-[0_8px_32px_rgba(6,182,212,0.15)]" 
          : "bg-gradient-to-br from-cyan-50/90 via-white to-blue-50/80 border-cyan-200 shadow-md"
      }`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-cyan-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <Beaker className="w-3.5 h-3.5" /> 100% Comprehensive NCERT Lab Activities Hub
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                isDark ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30" : "bg-cyan-100 text-cyan-900 border-cyan-300"
              }`}>
                2026-2027 CBSE Practical-Based Questions (PBQs) & High-Resolution Schematics
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              NCERT Science Activities, Visual Schematics & Practical PYQ Master
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300 font-normal" : "text-slate-700 font-medium"}`}>
              Every single experimental activity from the NCERT textbook, structured line-by-line with aim, interactive visual apparatus diagrams, step-by-step procedures, instant color change transformation indicators, balanced equations, and 20 years of authentic CBSE Board PBQs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={toggleExpandAll}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
              }`}
            >
              {filteredActivities.every((a) => expandedActivityIds[a.id]) ? "Collapse All Activities" : "Expand All Activities"}
            </button>

            <span className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold border text-center ${
              isDark ? "bg-cyan-950/40 text-cyan-300 border-cyan-800/40" : "bg-cyan-50 text-cyan-800 border-cyan-200"
            }`}>
              {filteredActivities.length} Activities Loaded
            </span>
          </div>
        </div>

        {/* PRIMARY VIEW MODE SWITCHER & DIAGRAM TOGGLE */}
        <div className="mt-6 pt-6 border-t border-current/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className={`p-1.5 rounded-2xl border inline-flex items-center gap-1.5 flex-wrap ${
            isDark ? "bg-black/40 border-white/10" : "bg-slate-100 border-slate-200"
          }`}>
            <button
              onClick={() => setActivityViewMode("cards")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activityViewMode === "cards"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-md"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>📋 Detailed PBQ Cards ({filteredActivities.length})</span>
            </button>

            <button
              onClick={() => setActivityViewMode("gallery")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activityViewMode === "gallery"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-md"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <FileImage className="w-4 h-4" />
              <span>🎨 Visual Apparatus Gallery (All 29 Diagrams)</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAlwaysShowDiagrams(!alwaysShowDiagrams)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                alwaysShowDiagrams
                  ? isDark 
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                    : "bg-emerald-100 border-emerald-300 text-emerald-900"
                  : isDark
                  ? "bg-white/5 border-white/10 text-slate-400"
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {alwaysShowDiagrams ? "🖼️ Always Show Diagrams: ON" : "🖼️ Always Show Diagrams: OFF"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <div className={`p-6 sm:p-7 rounded-3xl border space-y-4 ${
        isDark ? "bg-[#0c121e]/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
      }`}>
        {/* Discipline Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> Discipline:
          </span>
          {[
            { id: "all", label: "All Practical Areas" },
            { id: "Chemistry", label: "🧪 Chemistry Reactions" },
            { id: "Biology", label: "🧬 Biology Investigations" },
            { id: "Physics", label: "⚡ Physics Circuits & Optics" }
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => handleDisciplineChange(d.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedDiscipline === d.id
                  ? isDark
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-sm"
                    : "bg-cyan-600 text-white border-cyan-600 font-black shadow-sm"
                  : isDark
                  ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Chapter Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
          <button
            onClick={() => handleChapterChange("all")}
            className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border flex flex-col justify-between min-h-[48px] ${
              selectedChapterNo === "all"
                ? isDark
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-sm"
                  : "bg-cyan-600 text-white border-cyan-600 font-black shadow-sm"
                : isDark
                ? "bg-black/30 border-white/5 text-slate-300 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span className="text-[10px] font-mono text-slate-400">All Chapters</span>
            <span className="truncate">{filteredActivities.length} Activities</span>
          </button>
          {CHAPTER_LIST.filter(c => selectedDiscipline === "all" || c.discipline === selectedDiscipline).map((ch) => (
            <button
              key={ch.no}
              onClick={() => handleChapterChange(ch.no)}
              className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border flex flex-col justify-between min-h-[48px] text-left ${
                selectedChapterNo === ch.no
                  ? isDark
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-sm"
                    : "bg-cyan-600 text-white border-cyan-600 font-black shadow-sm"
                  : isDark
                  ? "bg-black/30 border-white/5 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span className="text-[10px] font-mono opacity-75">Ch {ch.no}</span>
              <span className="truncate text-[11px]">{ch.short.replace(`Ch ${ch.no}: `, '')}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative pt-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search activities by keyword, color change, precipitate, gas (e.g. Lead Nitrate, BaSO4, Lime water, Ohm's law, Iodine test, Pop sound)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border outline-none transition-all ${
              isDark 
                ? "bg-black/40 border-white/10 text-white focus:border-cyan-500" 
                : "bg-white border-slate-200 text-slate-900 focus:border-cyan-500 shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* =========================================================================
          VIEW MODE 2: VISUAL APPARATUS GALLERY (29 DIAGRAMS GRID)
          ========================================================================= */}
      {activityViewMode === "gallery" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-xl ${
                  isDark 
                    ? "bg-[#0b101c] border-white/10 hover:border-cyan-500/40" 
                    : "bg-white border-slate-200 hover:border-cyan-400 shadow-sm"
                }`}
              >
                {/* Header */}
                <div className="p-5 border-b border-current/10 flex items-start justify-between gap-3 bg-cyan-500/5">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black tracking-wider uppercase bg-cyan-500 text-slate-950">
                        {act.activityNo}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold border ${getDisciplineBadgeStyle(act.discipline)}`}>
                        {act.discipline}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Ch {act.chapterNo}: {act.chapterName}
                      </span>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight pt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {act.title}
                    </h3>
                  </div>

                  {onOpenQuestionBank && (
                    <button
                      onClick={() => onOpenQuestionBank(act.chapterNo)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Practice</span>
                    </button>
                  )}
                </div>

                {/* Apparatus Schematic Diagram */}
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <ScienceApparatusSchematic 
                    type={act.apparatusSchematicType} 
                    title={act.title} 
                    isDark={isDark} 
                  />
                </div>

                {/* Color Transformation & Actions Footer */}
                <div className="p-5 border-t border-current/10 space-y-3 bg-black/[0.02] dark:bg-white/[0.02]">
                  {act.colorChangeAndTransformation && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1 ${
                        isDark ? "bg-amber-950/30 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                      }`}>
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{act.colorChangeAndTransformation.summaryBadge}</span>
                      </span>
                      {act.colorChangeAndTransformation.precipitate && (
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold border ${
                          isDark ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-800"
                        }`}>
                          🧪 {act.colorChangeAndTransformation.precipitate}
                        </span>
                      )}
                      {act.colorChangeAndTransformation.gasEvolved && (
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold border ${
                          isDark ? "bg-sky-950/40 border-sky-500/30 text-sky-300" : "bg-sky-50 border-sky-300 text-sky-800"
                        }`}>
                          💨 {act.colorChangeAndTransformation.gasEvolved}
                        </span>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setActivityViewMode("cards");
                      setExpandedActivityIds(prev => ({ ...prev, [act.id]: true }));
                    }}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Step-by-Step Procedure & 20-Yr PBQs →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 1: DETAILED PBQ CARDS LIST
          ========================================================================= */}
      {activityViewMode === "cards" && (
        <div className="space-y-6">
          {filteredActivities.length === 0 ? (
            <div className={`p-12 text-center rounded-3xl border ${
              isDark ? "bg-black/20 border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-500 shadow-sm"
            }`}>
              <FlaskConical className="w-12 h-12 mx-auto mb-3 text-cyan-400/50" />
              <p className="text-base font-bold">No NCERT activities found matching your filter or search query.</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search keyword or selecting "All Chapters".</p>
            </div>
          ) : (
            filteredActivities.map((act) => {
              const isExpanded = !!expandedActivityIds[act.id];

              return (
                <div
                  key={act.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isDark 
                      ? "bg-[#0b101c] border-white/10 hover:border-cyan-500/30" 
                      : "bg-white border-slate-200 shadow-sm hover:border-cyan-400/50"
                  }`}
                >
                  {/* Header Card */}
                  <div 
                    onClick={() => toggleExpand(act.id)}
                    className={`p-6 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none ${
                      isExpanded 
                        ? isDark ? "bg-white/[0.02]" : "bg-slate-50/80" 
                        : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black tracking-wider uppercase bg-cyan-500 text-slate-950">
                          {act.activityNo}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold border ${getDisciplineBadgeStyle(act.discipline)}`}>
                          {act.discipline}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Ch {act.chapterNo}: {act.chapterName}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          🖼️ Visual Diagram Included
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        {act.title}
                      </h3>

                      {/* Color Change Summary Strip (Always Visible) */}
                      {act.colorChangeAndTransformation && (
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className={`px-3 py-1 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                            isDark ? "bg-amber-950/30 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                          }`}>
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            <span>{act.colorChangeAndTransformation.summaryBadge}</span>
                          </span>
                          {act.colorChangeAndTransformation.precipitate && (
                            <span className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold border ${
                              isDark ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-800"
                            }`}>
                              🧪 {act.colorChangeAndTransformation.precipitate}
                            </span>
                          )}
                          {act.colorChangeAndTransformation.gasEvolved && (
                            <span className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold border ${
                              isDark ? "bg-sky-950/40 border-sky-500/30 text-sky-300" : "bg-sky-50 border-sky-300 text-sky-800"
                            }`}>
                              💨 {act.colorChangeAndTransformation.gasEvolved}
                            </span>
                          )}
                          {act.colorChangeAndTransformation.thermalNature && (
                            <span className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold border ${
                              isDark ? "bg-rose-950/40 border-rose-500/30 text-rose-300" : "bg-rose-50 border-rose-300 text-rose-800"
                            }`}>
                              🌡️ {act.colorChangeAndTransformation.thermalNature}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                      <span className="text-xs font-mono font-bold text-cyan-400 hidden sm:inline">
                        {isExpanded ? "Collapse Details" : "View Full Procedure & PYQs"}
                      </span>
                      <button className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors bg-white/5">
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* VISUAL APPARATUS SCHEMATIC DIAGRAM (Rendered whenever alwaysShowDiagrams is ON or card is Expanded) */}
                  {(alwaysShowDiagrams || isExpanded) && (
                    <div className="px-6 sm:px-8 pt-4 pb-4 border-t border-current/10 bg-cyan-500/[0.02]">
                      <ScienceApparatusSchematic 
                        type={act.apparatusSchematicType} 
                        title={act.title} 
                        isDark={isDark} 
                      />
                    </div>
                  )}

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className={`px-6 sm:px-8 pb-8 pt-4 border-t space-y-7 ${
                      isDark ? "border-white/5 bg-[#090e1a]/70" : "border-slate-100 bg-slate-50/40"
                    }`}>
                      {/* Aim & Objective */}
                      <div className={`p-5 sm:p-6 rounded-2xl border space-y-2 ${
                        isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                      }`}>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" /> Experimental Aim / Objective
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed font-medium">
                          {act.aim}
                        </p>
                      </div>

                      {/* Detailed Color Transformation Breakdown */}
                      {act.colorChangeAndTransformation && (
                        <div className={`p-5 rounded-2xl border ${
                          isDark ? "bg-slate-900/60 border-amber-500/25" : "bg-amber-50/70 border-amber-300 shadow-xs"
                        }`}>
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-500 mb-3">
                            <Eye className="w-4 h-4" /> Comprehensive Visual Transformation Profile:
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/5" : "bg-white border-amber-200"}`}>
                              <span className="text-slate-400 font-mono block mb-0.5">Initial State / Color:</span>
                              <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-900"}`}>{act.colorChangeAndTransformation.initialColor || "Standard reagents"}</span>
                            </div>
                            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/5" : "bg-white border-amber-200"}`}>
                              <span className="text-slate-400 font-mono block mb-0.5">Final Observation / Color:</span>
                              <span className={`font-semibold ${isDark ? "text-emerald-300" : "text-emerald-900"}`}>{act.colorChangeAndTransformation.finalColor || "Observable shift"}</span>
                            </div>
                            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/5" : "bg-white border-amber-200"}`}>
                              <span className="text-slate-400 font-mono block mb-0.5">Precipitate Formed:</span>
                              <span className={`font-semibold ${isDark ? "text-sky-300" : "text-sky-900"}`}>{act.colorChangeAndTransformation.precipitate || "No insoluble precipitate"}</span>
                            </div>
                            <div className={`p-3 rounded-xl border ${isDark ? "bg-black/40 border-white/5" : "bg-white border-amber-200"}`}>
                              <span className="text-slate-400 font-mono block mb-0.5">Gas Evolved & Test:</span>
                              <span className={`font-semibold ${isDark ? "text-rose-300" : "text-rose-900"}`}>{act.colorChangeAndTransformation.gasEvolved || "No gas evolution"}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Apparatus & Materials Required */}
                      <div className="space-y-2.5">
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          Apparatus & Reagents Required:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {act.apparatusAndMaterials.map((mat, mIdx) => (
                            <span 
                              key={mIdx}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Step-by-Step Procedure */}
                      <div className="space-y-3">
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          Step-by-Step Experimental Procedure:
                        </span>
                        <div className="space-y-2.5 text-sm sm:text-base leading-relaxed">
                          {act.procedureSteps.map((step, sIdx) => (
                            <div 
                              key={sIdx}
                              className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                                isDark ? "bg-white/[0.02] border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                              }`}
                            >
                              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-mono font-black flex items-center justify-center shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span className="flex-1 leading-relaxed">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Visual Observations */}
                      <div className="space-y-3">
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <Eye className="w-4 h-4" /> Key Visual Observations (Exam Critical):
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {act.keyObservations.map((obs, oIdx) => (
                            <div 
                              key={oIdx}
                              className={`p-4 sm:p-5 rounded-2xl border space-y-1.5 ${
                                isDark ? "bg-black/50 border-amber-500/20" : "bg-amber-50/60 border-amber-200"
                              }`}
                            >
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">
                                {obs.label}
                              </span>
                              <p className={`text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                {obs.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chemical Equations / Formulas */}
                      {act.chemicalEquationsOrFormulas && act.chemicalEquationsOrFormulas.length > 0 && (
                        <div className="space-y-3">
                          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <FlaskConical className="w-4 h-4" /> Balanced Chemical Reactions & Formulas:
                          </span>
                          <div className="space-y-3">
                            {act.chemicalEquationsOrFormulas.map((eq, eIdx) => (
                              <div 
                                key={eIdx}
                                className={`p-5 rounded-2xl border space-y-2 ${
                                  isDark ? "bg-black/60 border-emerald-500/25 text-emerald-300" : "bg-emerald-50/70 border-emerald-200 text-emerald-900 shadow-xs"
                                }`}
                              >
                                <span className="font-mono font-bold text-xs uppercase tracking-wider block opacity-80">
                                  {eq.name}
                                </span>
                                <div className="text-base sm:text-lg font-bold overflow-x-auto pb-1">
                                  <PremiumMathRenderer content={eq.equation} isDark={isDark} />
                                </div>
                                {eq.note && (
                                  <p className={`text-xs font-sans ${isDark ? "text-slate-300" : "text-emerald-950"} pt-1 border-t border-emerald-500/20`}>
                                    💡 {eq.note}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Scientific Inference */}
                      <div className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                        isDark ? "bg-blue-950/20 border-blue-800/30 text-blue-200" : "bg-blue-50 border-blue-200 text-blue-900"
                      }`}>
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <div className="space-y-1 text-sm sm:text-base leading-relaxed">
                          <span className="font-bold uppercase tracking-wider text-blue-400 block font-mono text-xs">
                            Scientific Inference & Principle
                          </span>
                          <p className="font-normal">{act.scientificInference}</p>
                        </div>
                      </div>

                      {/* CBSE Examiner Trap & Safety Precautions */}
                      <div className={`p-5 sm:p-6 rounded-2xl border flex items-start gap-3.5 ${
                        isDark ? "bg-rose-950/25 border-rose-800/40 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-900"
                      }`}>
                        <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                        <div className="space-y-1 text-sm leading-relaxed">
                          <span className="font-bold uppercase tracking-wider text-rose-400 block font-mono text-xs">
                            ⚠️ CBSE Examiner Deduction Trap & Viva Question
                          </span>
                          <p className="font-medium">{act.examinerTrapAndSafety}</p>
                        </div>
                      </div>

                      {/* 2026-2027 CBSE Practical-Based Questions (PBQs) */}
                      {act.boardQuestions && act.boardQuestions.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-cyan-400" /> CBSE 2026-2027 Practical-Based Questions (PBQs) & Model Answers:
                          </span>
                          <div className="space-y-3">
                            {act.boardQuestions.map((q, qIdx) => (
                              <div 
                                key={qIdx}
                                className={`p-5 sm:p-6 rounded-2xl border space-y-3 ${
                                  isDark ? "bg-black/40 border-white/10" : "bg-white border-slate-200 shadow-2xs"
                                }`}
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    {q.year ? (
                                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-rose-600 text-white shadow-xs">
                                        {q.year}
                                      </span>
                                    ) : (
                                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                        CBSE Board Exam
                                      </span>
                                    )}
                                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                      {q.marks} {q.marks === 1 ? "Mark" : "Marks"}
                                    </span>
                                  </div>
                                  {q.coreKeyword && (
                                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${
                                      isDark ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30" : "bg-emerald-50 text-emerald-800 border-emerald-200"
                                    }`}>
                                      Key Phrase: {q.coreKeyword}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-sm sm:text-base font-bold leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                                  {q.question}
                                </p>
                                <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                                  isDark ? "plain-paper-sheet-dark text-slate-200" : "plain-paper-sheet text-slate-800"
                                }`}>
                                  <span className="font-mono font-bold text-emerald-500 block mb-1">Official CBSE Marking Scheme / Model Answer:</span>
                                  <span className="leading-relaxed">{q.answer}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
