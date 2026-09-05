"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Eye,
  Zap,
  Dna,
  Layers,
  Search,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Info,
  Compass,
  ArrowRight,
  Maximize2,
  HelpCircle,
  Award,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  FileImage,
  Flame,
  ExternalLink
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import {
  SCIENCE_DIAGRAMS_MASTER,
  NCERT_PHYSICS_DIAGRAMS_VAULT,
  type ScienceDiagram,
  type VisualDiagramAsset,
  type DiagramCategory
} from "@/data/scienceDiagramsData";

interface ScienceDiagramsViewProps {
  isDark: boolean;
  onOpenQuestionBank?: (chapterNo?: number) => void;
  defaultChapterNo?: number;
}

export default function ScienceDiagramsView({
  isDark,
  onOpenQuestionBank,
  defaultChapterNo
}: ScienceDiagramsViewProps) {
  // Client-side mount flag for createPortal
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // View mode: 'gallery' (all 29 visual assets) or 'interactive' (ray tracers & step-by-step solvers)
  const [viewMode, setViewMode] = useState<"gallery" | "interactive">("gallery");

  // Gallery filters
  const [galleryCategory, setGalleryCategory] = useState<string>("all");
  const [gallerySearch, setGallerySearch] = useState<string>("");

  // Zoom Modal state
  const [activeZoomAsset, setActiveZoomAsset] = useState<VisualDiagramAsset | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Lock body scroll and handle ESC key when modal is open
  useEffect(() => {
    if (activeZoomAsset) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveZoomAsset(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeZoomAsset]);

  // Interactive View state
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeRayCase, setActiveRayCase] = useState<Record<string, number>>({
    diag_optics_concave_mirror: 6, // default to Case 6 (P to F)
    diag_optics_convex_lens: 6     // default to Case 6 (Magnifying glass)
  });
  const [activeLabelId, setActiveLabelId] = useState<string | null>(null);
  const [expandedDiagramIds, setExpandedDiagramIds] = useState<Record<string, boolean>>({
    diag_optics_concave_mirror: true,
    diag_mixed_circuit_solver: true,
    diag_bio_digestive_system: true
  });

  const toggleExpand = (id: string) => {
    setExpandedDiagramIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const GALLERY_CATEGORIES = [
    { id: "all", label: "All 29 Visual Diagrams", count: 29 },
    { id: "Spherical Mirrors", label: "Spherical Mirrors", count: 8 },
    { id: "Lenses & Refraction", label: "Lenses & Refraction", count: 9 },
    { id: "Human Eye & Dispersion", label: "Human Eye & Dispersion", count: 7 },
    { id: "Circuits & Magnetism", label: "Circuits & Magnetism", count: 5 }
  ];

  const filteredGalleryDiagrams = useMemo(() => {
    return NCERT_PHYSICS_DIAGRAMS_VAULT.filter((diag) => {
      if (galleryCategory !== "all" && diag.category !== galleryCategory) return false;
      if (gallerySearch.trim()) {
        const q = gallerySearch.toLowerCase();
        return (
          diag.title.toLowerCase().includes(q) ||
          diag.chapterName.toLowerCase().includes(q) ||
          diag.ncertFigureRef.toLowerCase().includes(q) ||
          diag.keyRule.toLowerCase().includes(q) ||
          (diag.objectPosition && diag.objectPosition.toLowerCase().includes(q)) ||
          (diag.imagePosition && diag.imagePosition.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [galleryCategory, gallerySearch]);

  const INTERACTIVE_CATEGORIES = [
    { id: "all", label: "All Interactive Solvers (12)" },
    { id: "Physics Optics", label: "Optics & Ray Tracing" },
    { id: "Physics Human Eye", label: "Eye Defects & Prisms" },
    { id: "Physics Electricity & Circuits", label: "Mixed Circuits & Solvers" },
    { id: "Physics Magnetism", label: "Magnetism & Domestic Circuit" },
    { id: "Biology Life Processes", label: "Life Processes Anatomy" },
    { id: "Biology Control & Coordination", label: "Neuron & Reflex Arc" },
    { id: "Biology Reproduction", label: "Flower & Reproduction" },
    { id: "Biology Heredity", label: "Mendel's Crosses & Genetics" }
  ];

  const filteredInteractiveDiagrams = useMemo(() => {
    return SCIENCE_DIAGRAMS_MASTER.filter((diag) => {
      if (selectedCategory !== "all" && diag.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesMain =
          diag.title.toLowerCase().includes(q) ||
          diag.chapterName.toLowerCase().includes(q) ||
          diag.description.toLowerCase().includes(q) ||
          diag.ncertFigureRef.toLowerCase().includes(q);

        const matchesLabels = diag.labels.some(
          (l) => l.name.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
        );

        return matchesMain || matchesLabels;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Handle zoom controls
  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomScale(1);

  return (
    <div className="space-y-6">
      {/* 1. HERO HEADER */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/20 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            : "bg-gradient-to-r from-cyan-50 via-white to-purple-50 border-cyan-100 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="w-9 h-9 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-cyan-500 text-slate-950 shadow-sm">
                Official NCERT Visual Vault
              </span>
              <span className="text-xs font-mono text-cyan-400 font-bold">
                CBSE Class 10 (2026–2027 Latest Syllabus)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              NCERT Visual Diagrams Vault & Interactive Ray Tracers
            </h1>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              All 29 textbook-accurate cropped ray diagrams, human eye optical defect corrections, glass slab refractions, and circuit diagrams with CBSE marking rubrics, ray direction rules, and examiner deduction traps.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-cyan-400">29</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Visual Diagrams</div>
            </div>
            <div className={`p-4 rounded-2xl border text-center flex-1 sm:flex-none ${isDark ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`}>
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">CBSE Criteria</div>
            </div>
          </div>
        </div>

        {/* VIEW MODE TOGGLE SWITCH */}
        <div className="mt-6 pt-6 border-t border-current/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className={`p-1 rounded-2xl border inline-flex items-center gap-1 ${isDark ? "bg-black/40 border-white/10" : "bg-slate-100 border-slate-200"}`}>
            <button
              onClick={() => setViewMode("gallery")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === "gallery"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-md"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <FileImage className="w-4 h-4" />
              <span>NCERT Visual Gallery (All 29 Diagrams)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${viewMode === "gallery" ? "bg-slate-950/20 text-slate-950" : "bg-cyan-500/20 text-cyan-400"}`}>
                29
              </span>
            </button>

            <button
              onClick={() => setViewMode("interactive")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === "interactive"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-md"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Interactive Ray Tracers & Solvers (12)</span>
            </button>
          </div>

          <span className="text-xs text-slate-400 font-mono">
            {viewMode === "gallery"
              ? `Displaying ${filteredGalleryDiagrams.length} of 29 cropped NCERT images`
              : `Displaying ${filteredInteractiveDiagrams.length} interactive case studies`}
          </span>
        </div>
      </div>

      {/* =========================================================================
          VIEW MODE 1: VISUAL NCERT GALLERY (ALL 29 DIAGRAMS)
          ========================================================================= */}
      {viewMode === "gallery" && (
        <div className="space-y-6">
          {/* SEARCH & CATEGORY FILTER */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={gallerySearch}
                onChange={(e) => setGallerySearch(e.target.value)}
                placeholder="Search across all 29 diagrams (e.g., 'concave mirror at c', 'myopia', 'prism', 'ohm circuit', 'parallel resistors')..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isDark ? "bg-black/40 border-white/10 text-white placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all border flex items-center gap-1.5 cursor-pointer ${
                    galleryCategory === cat.id
                      ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm"
                      : isDark
                      ? "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.07]"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    galleryCategory === cat.id ? "bg-slate-950/20 text-slate-950" : "bg-slate-700/30 text-slate-400"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 29 VISUAL DIAGRAMS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGalleryDiagrams.map((diag) => (
              <div
                key={diag.id}
                className={`rounded-3xl border overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl ${
                  isDark
                    ? "bg-[#0b0f19] border-white/10 hover:border-cyan-500/40"
                    : "bg-white border-slate-200 hover:border-cyan-400"
                }`}
              >
                {/* IMAGE CONTAINER — CLEAN WHITE WELL, ZERO BLUR, CLICK TO INSPECT */}
                <div
                  onClick={() => {
                    setActiveZoomAsset(diag);
                    setZoomScale(1);
                  }}
                  className="relative bg-white border-b border-slate-200 p-3.5 min-h-[220px] max-h-[240px] flex items-center justify-center cursor-pointer group select-none"
                >
                  <img
                    src={diag.imageUrl}
                    alt={diag.imageAlt}
                    className="max-h-[190px] w-auto max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* TOP BADGES */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-cyan-300 shadow-xs">
                      Ch {diag.chapterNo}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-amber-500 text-slate-950 shadow-xs">
                      {diag.boardMarks} Marks
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-emerald-600 text-white shadow-xs">
                      {diag.boardFrequency}
                    </span>
                  </div>

                  {/* BOTTOM TAP HINT BAR */}
                  <div className="absolute bottom-2 inset-x-3 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white flex items-center gap-1 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3 text-cyan-400" /> Click to Zoom Fullscreen
                    </span>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                      <span>{diag.ncertFigureRef}</span>
                      <span className="text-cyan-400 font-semibold">{diag.category}</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2">
                      {diag.title}
                    </h3>

                    {/* OPTICS SPECIFICATION PILLS */}
                    {diag.objectPosition && (
                      <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                        <div className={`p-1.5 rounded-lg border ${isDark ? "bg-black/30 border-white/5" : "bg-slate-50 border-slate-100"}`}>
                          <span className="text-[9px] uppercase font-bold text-slate-400 block font-mono">Object</span>
                          <span className="font-bold text-cyan-400 line-clamp-1">{diag.objectPosition}</span>
                        </div>
                        <div className={`p-1.5 rounded-lg border ${isDark ? "bg-black/30 border-white/5" : "bg-slate-50 border-slate-100"}`}>
                          <span className="text-[9px] uppercase font-bold text-slate-400 block font-mono">Image</span>
                          <span className="font-bold text-emerald-400 line-clamp-1">{diag.imagePosition}</span>
                        </div>
                      </div>
                    )}

                    {diag.natureOfImage && (
                      <div className="pt-0.5">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                          diag.natureOfImage.includes("Virtual")
                            ? "bg-purple-500/15 text-purple-300 border border-purple-500/20"
                            : "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                        }`}>
                          ★ {diag.natureOfImage}
                        </span>
                      </div>
                    )}

                    {/* KEY RULE */}
                    <div className={`p-2.5 rounded-xl text-xs leading-relaxed ${isDark ? "bg-white/[0.02] border border-white/5 text-slate-300" : "bg-slate-50 border border-slate-200 text-slate-600"}`}>
                      <span className="font-bold text-cyan-400 block mb-0.5">Key CBSE Optical Rule:</span>
                      {diag.keyRule}
                    </div>

                    {/* EXAMINER TRAP ALERT */}
                    <div className={`p-2.5 rounded-xl text-xs leading-relaxed ${isDark ? "bg-rose-950/20 border border-rose-500/20 text-rose-200" : "bg-rose-50 border border-rose-200 text-rose-700"}`}>
                      <span className="font-bold text-rose-400 flex items-center gap-1 mb-0.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Examiner Deduction Alert:
                      </span>
                      {diag.examinerAlert}
                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTON */}
                  <button
                    onClick={() => {
                      setActiveZoomAsset(diag);
                      setZoomScale(1);
                    }}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> Enlarge & Inspect Rubric
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 2: INTERACTIVE RAY TRACERS & MIXED CIRCUITS SOLVERS (12)
          ========================================================================= */}
      {viewMode === "interactive" && (
        <div className="space-y-6">
          {/* SEARCH & CATEGORY FILTER */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search diagrams by topic (e.g. 'concave mirror', 'myopia', 'mixed circuit', 'nephron', 'heart', 'mendel')..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isDark ? "bg-black/40 border-white/10 text-white placeholder:text-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {INTERACTIVE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all border cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm"
                      : isDark
                      ? "bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.07]"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* INTERACTIVE DIAGRAMS ACCORDION LIST */}
          <div className="space-y-6">
            {filteredInteractiveDiagrams.map((diag) => {
              const isExpanded = !!expandedDiagramIds[diag.id];
              const currentCaseIdx = (activeRayCase[diag.id] || 1) - 1;
              const currentCase = diag.rayTracingCases ? diag.rayTracingCases[currentCaseIdx] : null;

              return (
                <div
                  key={diag.id}
                  className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isDark
                      ? "bg-[#0b0f19] border-white/10 shadow-lg"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {/* CARD HEADER */}
                  <div
                    onClick={() => toggleExpand(diag.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                          Ch {diag.chapterNo} • {diag.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {diag.ncertFigureRef}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black tracking-tight">
                        {diag.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {diag.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {diag.boardMarks} Marks
                      </span>

                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* EXPANDED CONTENT */}
                  {isExpanded && (
                    <div className={`px-5 pb-6 sm:px-6 sm:pb-6 pt-3 border-t space-y-6 ${isDark ? "border-white/5" : "border-slate-100"}`}>
                      {/* CASE SELECTOR (FOR RAY OPTICS) */}
                      {diag.rayTracingCases && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                              <Eye className="w-4 h-4" /> Choose Object Position (6 Standard Cases):
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              Case {currentCaseIdx + 1} of {diag.rayTracingCases.length}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                            {diag.rayTracingCases.map((c) => (
                              <button
                                key={c.caseNo}
                                onClick={() => setActiveRayCase((prev) => ({ ...prev, [diag.id]: c.caseNo }))}
                                className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
                                  activeRayCase[diag.id] === c.caseNo
                                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md ring-1 ring-cyan-400"
                                    : isDark
                                    ? "bg-black/30 border-white/5 text-slate-400 hover:bg-white/5"
                                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                }`}
                              >
                                <span className="text-[10px] font-mono font-bold block text-cyan-400">Case {c.caseNo}</span>
                                <span className="text-xs font-bold line-clamp-1">{c.objectPosition}</span>
                              </button>
                            ))}
                          </div>

                          {/* CURRENT CASE SPEC SHEET */}
                          {currentCase && (
                            <div className={`p-4 rounded-2xl border space-y-3 ${isDark ? "bg-black/40 border-cyan-500/20" : "bg-cyan-50/50 border-cyan-200"}`}>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                                <div>
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Object Position</span>
                                  <span className="font-bold text-cyan-300">{currentCase.objectPosition}</span>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Image Position</span>
                                  <span className="font-bold text-emerald-300">{currentCase.imagePosition}</span>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Nature of Image</span>
                                  <span className={`font-bold ${currentCase.imageNature.includes("Virtual") ? "text-purple-300" : "text-amber-300"}`}>
                                    {currentCase.imageNature}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Size of Image</span>
                                  <span className="font-bold text-rose-300">{currentCase.imageSize}</span>
                                </div>
                              </div>

                              <div className="pt-2 border-t border-current/10 text-xs flex items-center gap-2">
                                <span className="font-bold text-slate-400">Board Practical Application:</span>
                                <span className="text-slate-200">{currentCase.practicalApplication}</span>
                              </div>

                              {/* RAY TRACING RULES */}
                              <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1 text-xs font-mono">
                                <div className="text-slate-300"><span className="text-emerald-400 font-bold">Ray 1:</span> {currentCase.ray1}</div>
                                <div className="text-slate-300"><span className="text-cyan-400 font-bold">Ray 2:</span> {currentCase.ray2}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* SOLVED MIXED CIRCUIT REDUCTION STEPS */}
                      {diag.solvedCircuitData && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                            <Zap className="w-4 h-4" /> Multi-Step Circuit Reduction & Solution Walkthrough:
                          </span>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {diag.solvedCircuitData.steps.map((step) => (
                              <div
                                key={step.stepNo}
                                className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-black/30 border-white/5" : "bg-slate-50 border-slate-200"}`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold text-amber-400 font-mono">Step {step.stepNo}</span>
                                  <span className="text-[11px] font-bold text-slate-300">{step.heading}</span>
                                </div>
                                <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-cyan-300">
                                  <PremiumMathRenderer content={step.formula} isDark={isDark} />
                                </div>
                                <p className="text-xs text-slate-400">{step.calculation}</p>
                                <div className="text-xs font-bold text-emerald-400 font-mono">Result: {step.result}</div>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className={`p-3 rounded-2xl border text-center ${isDark ? "bg-black/50 border-white/5" : "bg-white border-slate-200"}`}>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Total Req</span>
                              <span className="text-lg font-black text-emerald-400">{diag.solvedCircuitData.finalResistance}</span>
                            </div>
                            <div className={`p-3 rounded-2xl border text-center ${isDark ? "bg-black/50 border-white/5" : "bg-white border-slate-200"}`}>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Total Current I</span>
                              <span className="text-lg font-black text-cyan-400">{diag.solvedCircuitData.finalCurrent}</span>
                            </div>
                            <div className={`p-3 rounded-2xl border text-center ${isDark ? "bg-black/50 border-white/5" : "bg-white border-slate-200"}`}>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Total Power Consumed</span>
                              <span className="text-lg font-black text-amber-400">{diag.solvedCircuitData.powerDissipated}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LABELS & ANATOMICAL CALLOUTS */}
                      <div className="space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-purple-400" /> Mandatory Anatomical & Circuit Labels (Click to inspect):
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {diag.labels.map((l) => (
                            <div
                              key={l.id}
                              onClick={() => setActiveLabelId(activeLabelId === l.id ? null : l.id)}
                              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                                activeLabelId === l.id
                                  ? "bg-purple-500/20 border-purple-400 shadow-md ring-1 ring-purple-400"
                                  : isDark
                                  ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"
                                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-xs font-black text-purple-300">{l.name}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-200">
                                  Core
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                                {l.description}
                              </p>
                              <div className="mt-2 text-[11px] font-mono text-emerald-400">
                                ★ {l.boardSignificance}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CBSE MARKING RUBRIC & PENALTY ALERTS */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-emerald-950/20 border-emerald-500/20" : "bg-emerald-50 border-emerald-200"}`}>
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Official Step Marks Award Rubric:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {diag.markingPoints.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-rose-950/20 border-rose-500/20" : "bg-rose-50 border-rose-200"}`}>
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4" /> Examiner Traps & Deduction Rules:
                          </span>
                          <ul className="space-y-1.5 text-xs text-rose-200">
                            {diag.examinerTraps.map((tr, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-rose-400 font-bold">⚠</span>
                                <span>{tr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {onOpenQuestionBank && (
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={() => onOpenQuestionBank(diag.chapterNo)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            Practice Diagram Questions in Vault <ArrowRight className="w-3.5 h-3.5" />
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
      )}

      {/* =========================================================================
          CRYSTAL-CLEAR FULLSCREEN HIGH-RES MODAL VIA PORTAL (NO BLUR OVERLAY!)
          ========================================================================= */}
      {mounted && activeZoomAsset && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/85 flex items-center justify-center p-3 sm:p-6 select-none"
          onClick={() => setActiveZoomAsset(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl border overflow-hidden shadow-2xl ${
              isDark ? "bg-[#0b101d] border-slate-700 text-white" : "bg-white border-slate-300 text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-500 text-slate-950">
                    Ch {activeZoomAsset.chapterNo}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {activeZoomAsset.ncertFigureRef}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-amber-500/20 text-amber-300 font-bold">
                    {activeZoomAsset.boardMarks} Marks
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-bold">
                    {activeZoomAsset.boardFrequency}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-black truncate">{activeZoomAsset.title}</h2>
              </div>

              {/* ZOOM CONTROLS & ACTIONS */}
              <div className="flex items-center gap-2 shrink-0">
                {/* ZOOM CONTROLS */}
                <div className={`flex items-center rounded-xl border p-1 ${isDark ? "bg-black/50 border-white/10" : "bg-slate-100 border-slate-200"}`}>
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono px-2 font-bold text-cyan-400">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer ml-1"
                    title="Reset Zoom (100%)"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* OPEN IN NEW TAB */}
                <a
                  href={activeZoomAsset.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                  title="Open High-Res Original Image in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Raw High-Res</span>
                </a>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setActiveZoomAsset(null)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-white/10 transition-all cursor-pointer"
                  title="Close Modal (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* MODAL BODY (CRISP WHITE CANVAS + CRITERIA) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              {/* IMAGE DISPLAY CONTAINER — CLEAN WHITE WELL FOR MAXIMUM CONTRAST */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-inner flex items-center justify-center min-h-[320px] max-h-[500px] overflow-auto">
                <img
                  src={activeZoomAsset.imageUrl}
                  alt={activeZoomAsset.imageAlt}
                  style={{
                    transform: `scale(${zoomScale})`,
                    transformOrigin: "center center"
                  }}
                  className="max-h-[460px] w-auto max-w-full object-contain select-none transition-transform duration-150"
                />
              </div>

              {/* SPEC SHEET & CBSE CRITERIA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* KEY RULE */}
                <div className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-cyan-950/20 border-cyan-500/20" : "bg-cyan-50 border-cyan-200"}`}>
                  <span className="font-bold text-cyan-400 uppercase tracking-wider block font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Mandatory NCERT Optical Law / Circuit Rule:
                  </span>
                  <p className={isDark ? "text-slate-300 leading-relaxed" : "text-slate-700 leading-relaxed"}>
                    {activeZoomAsset.keyRule}
                  </p>
                  <div className="pt-2 border-t border-cyan-500/20 text-emerald-400 font-mono">
                    ★ Marking Tip: {activeZoomAsset.markingTip}
                  </div>
                </div>

                {/* DEDUCTION WARNING */}
                <div className={`p-4 rounded-2xl border space-y-2 ${isDark ? "bg-rose-950/20 border-rose-500/20" : "bg-rose-50 border-rose-200"}`}>
                  <span className="font-bold text-rose-400 uppercase tracking-wider block font-mono flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> CBSE Board Examiner Penalty Alert:
                  </span>
                  <p className={isDark ? "text-rose-200 leading-relaxed" : "text-rose-800 leading-relaxed"}>
                    {activeZoomAsset.examinerAlert}
                  </p>
                  <div className="pt-2 border-t border-rose-500/20 text-amber-300 font-mono">
                    ⚠️ Historical Board Recurrence: {activeZoomAsset.boardFrequency}
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs shrink-0">
              <span className="text-slate-400 font-mono text-[11px]">
                Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono">ESC</kbd> or click outside to exit
              </span>
              <button
                onClick={() => setActiveZoomAsset(null)}
                className="px-6 py-2 rounded-xl font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
