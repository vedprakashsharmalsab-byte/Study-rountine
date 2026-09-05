"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  FlaskConical, 
  Atom, 
  Zap, 
  Dna, 
  Leaf, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  Search, 
  Sparkles, 
  HelpCircle, 
  Lightbulb, 
  FileText, 
  Filter, 
  ArrowLeft,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import PremiumMathRenderer from "@/components/PremiumMathRenderer";
import { 
  SCIENCE_CONCEPTS_AND_EXAMPLES, 
  ScienceConceptTopic, 
  ScienceConceptExample 
} from "@/data/scienceConceptsAndExamples";

interface ScienceConceptsViewProps {
  isDark: boolean;
  onOpenQuestionBank?: (chapterNo?: number) => void;
  activeChapterNo?: number;
  activeChapterName?: string;
  isEmbeddedInCommand?: boolean;
}

export default function ScienceConceptsView({ 
  isDark, 
  onOpenQuestionBank, 
  activeChapterNo, 
  activeChapterName, 
  isEmbeddedInCommand = false 
}: ScienceConceptsViewProps) {
  // Official CBSE Class 10 Science 13 Chapters Directory
  const CHAPTER_LIST = [
    { no: 1, name: "Chemical Reactions and Equations", shortName: "Ch 1: Reactions", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
    { no: 2, name: "Acids, Bases and Salts", shortName: "Ch 2: Acids & Salts", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
    { no: 3, name: "Metals and Non-Metals", shortName: "Ch 3: Metals & Non-metals", discipline: "Chemistry", weightage: "7–9 Marks", icon: FlaskConical },
    { no: 4, name: "Carbon and its Compounds", shortName: "Ch 4: Carbon Compounds", discipline: "Chemistry", weightage: "6–8 Marks", icon: FlaskConical },
    { no: 5, name: "Life Processes", shortName: "Ch 5: Life Processes", discipline: "Biology", weightage: "8–10 Marks", icon: Dna },
    { no: 6, name: "Control and Coordination", shortName: "Ch 6: Control & Coord", discipline: "Biology", weightage: "6–7 Marks", icon: Dna },
    { no: 7, name: "How do Organisms Reproduce?", shortName: "Ch 7: Reproduction", discipline: "Biology", weightage: "6–8 Marks", icon: Dna },
    { no: 8, name: "Heredity and Evolution", shortName: "Ch 8: Heredity", discipline: "Biology", weightage: "5–7 Marks", icon: Dna },
    { no: 9, name: "Light — Reflection and Refraction", shortName: "Ch 9: Light Optics", discipline: "Physics", weightage: "9–10 Marks", icon: Zap },
    { no: 10, name: "The Human Eye and Colourful World", shortName: "Ch 10: Human Eye", discipline: "Physics", weightage: "4–5 Marks", icon: Zap },
    { no: 11, name: "Electricity", shortName: "Ch 11: Electricity", discipline: "Physics", weightage: "7–8 Marks", icon: Zap },
    { no: 12, name: "Magnetic Effects of Electric Current", shortName: "Ch 12: Magnetic Effects", discipline: "Physics", weightage: "6–7 Marks", icon: Zap },
    { no: 13, name: "Our Environment", shortName: "Ch 13: Our Environment", discipline: "Natural Resources", weightage: "5 Marks", icon: Leaf },
  ];

  // Standalone chapter selection: NEVER combines all chapters together!
  const [selectedChapterNo, setSelectedChapterNo] = useState<number>(activeChapterNo || 1);
  const [activeDisciplineFilter, setActiveDisciplineFilter] = useState<string>("all");
  const [activeLevelFilter, setActiveLevelFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Track expanded topics (default all true for instant readable access)
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({});
  // Track expanded examples
  const [expandedExampleIds, setExpandedExampleIds] = useState<Record<string, boolean>>({});

  // Sync when activeChapterNo changes from parent (Chapter Command)
  useEffect(() => {
    if (activeChapterNo !== undefined) {
      setSelectedChapterNo(activeChapterNo);
    }
  }, [activeChapterNo]);

  // The active chapter number to display
  const currentChNo = isEmbeddedInCommand && activeChapterNo !== undefined 
    ? activeChapterNo 
    : selectedChapterNo;

  const currentChapterMeta = useMemo(() => {
    return CHAPTER_LIST.find((c) => c.no === currentChNo) || CHAPTER_LIST[0];
  }, [currentChNo]);

  // Strictly filter topics to ONLY this single chapter
  const chapterTopics = useMemo(() => {
    return SCIENCE_CONCEPTS_AND_EXAMPLES.filter((t) => t.chapterNo === currentChNo);
  }, [currentChNo]);

  // Expand all topics of the selected chapter automatically on chapter switch
  useEffect(() => {
    const newState: Record<string, boolean> = {};
    chapterTopics.forEach((t) => {
      newState[t.id] = true;
    });
    setExpandedTopicIds(newState);

    // Expand the first 2 examples of each topic by default
    const exState: Record<string, boolean> = {};
    chapterTopics.forEach((t) => {
      t.examples.slice(0, 2).forEach((ex) => {
        exState[ex.id] = true;
      });
    });
    setExpandedExampleIds(exState);
  }, [currentChNo, chapterTopics]);

  const toggleTopicExpand = (id: string) => {
    setExpandedTopicIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExampleExpand = (id: string) => {
    setExpandedExampleIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Search filter inside this specific chapter
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return chapterTopics;
    const q = searchQuery.toLowerCase();
    return chapterTopics.filter((topic) => {
      const matchesTopic = 
        topic.topicTitle.toLowerCase().includes(q) ||
        topic.ncertSummary.toLowerCase().includes(q) ||
        topic.corePrinciples.some((p) => p.toLowerCase().includes(q)) ||
        (topic.keyReactionsOrFormulas && topic.keyReactionsOrFormulas.some((r) => r.name.toLowerCase().includes(q) || r.formula.toLowerCase().includes(q)));
      
      const matchesExample = topic.examples.some((ex) => 
        ex.question.toLowerCase().includes(q) ||
        ex.solutionSteps.some((s) => s.toLowerCase().includes(q)) ||
        ex.keyTakeaway.toLowerCase().includes(q)
      );

      return matchesTopic || matchesExample;
    });
  }, [chapterTopics, searchQuery]);

  const toggleExpandAll = () => {
    const allExpanded = filteredTopics.every((t) => expandedTopicIds[t.id]);
    const nextState: Record<string, boolean> = {};
    filteredTopics.forEach((t) => {
      nextState[t.id] = !allExpanded;
    });
    setExpandedTopicIds(nextState);
  };

  const totalExamplesInChapter = useMemo(() => {
    return chapterTopics.reduce((acc, t) => acc + t.examples.length, 0);
  }, [chapterTopics]);

  const getDisciplineIcon = (discipline: string) => {
    switch (discipline) {
      case "Chemistry": return FlaskConical;
      case "Physics": return Zap;
      case "Biology": return Dna;
      default: return Leaf;
    }
  };

  const getDisciplineColor = (discipline: string) => {
    switch (discipline) {
      case "Chemistry": return "text-amber-400 border-amber-500/30 bg-amber-500/10";
      case "Physics": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "Biology": return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
      default: return "text-teal-400 border-teal-500/30 bg-teal-500/10";
    }
  };

  const resolvedChapterTitle = activeChapterName || currentChapterMeta.name;

  // Prev / Next Chapter Navigation
  const prevChapter = CHAPTER_LIST.find((c) => c.no === currentChNo - 1);
  const nextChapter = CHAPTER_LIST.find((c) => c.no === currentChNo + 1);

  const handleSelectChapter = (chNo: number) => {
    setSelectedChapterNo(chNo);
    setSearchQuery("");
    // Scroll to top of concepts view smoothly
    const elem = document.getElementById("science-chapter-top");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="science-chapter-top" className="space-y-8 animate-fade-in">
      {/* ==================== 1. STANDALONE CHAPTER SELECTOR RIBBON ==================== */}
      {!isEmbeddedInCommand && (
        <div className={`p-6 sm:p-7 rounded-3xl border space-y-5 transition-all ${
          isDark 
            ? "bg-[#0c121e]/90 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-white border-slate-200 shadow-lg"
        }`}>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                <Atom className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                  <span>Science Chapter-by-Chapter Master</span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/30">
                    100% NCERT
                  </span>
                </h2>
                <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Select any chapter below to explore its complete NCERT theory, balanced reactions, and solved board examples.
                </p>
              </div>
            </div>

            {/* Discipline Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all", label: "All 13 Ch" },
                { id: "Chemistry", label: "🧪 Chemistry" },
                { id: "Biology", label: "🧬 Biology" },
                { id: "Physics", label: "⚡ Physics" },
                { id: "Natural Resources", label: "🌿 Ecology" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDisciplineFilter(d.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    activeDisciplineFilter === d.id
                      ? isDark
                        ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-sm"
                        : "bg-teal-600 text-white border-teal-600 font-black shadow-sm"
                      : isDark
                      ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Pills Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CHAPTER_LIST.filter(c => activeDisciplineFilter === "all" || c.discipline === activeDisciplineFilter).map((ch) => {
              const isSelected = ch.no === currentChNo;
              const Icon = ch.icon;
              return (
                <button
                  key={ch.no}
                  onClick={() => handleSelectChapter(ch.no)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-2 border ${
                    isSelected
                      ? isDark
                        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 border-teal-300 font-black shadow-lg shadow-teal-500/25 scale-[1.02]"
                        : "bg-teal-600 text-white border-teal-600 font-black shadow-md scale-[1.02]"
                      : isDark
                      ? "bg-black/30 border-white/5 text-slate-300 hover:text-white hover:border-white/20"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80 shrink-0" />
                  <span>{ch.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================== 2. CHAPTER HERO BANNER (100% ISOLATED WHOLE CHAPTER) ==================== */}
      <div 
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark 
            ? "bg-gradient-to-br from-[#0c1524] via-[#09101c] to-[#0c1826] border-teal-500/25 shadow-[0_8px_32px_rgba(13,148,136,0.15)]" 
            : "bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/80 border-teal-200 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-teal-500 text-slate-950 shadow-sm flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> Whole Chapter NCERT Master
              </span>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                isDark ? "bg-teal-950/60 text-teal-300 border-teal-500/30" : "bg-teal-100 text-teal-900 border-teal-300"
              }`}>
                Chapter {currentChNo} of 13 • {currentChapterMeta.discipline}
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Board Weightage: {currentChapterMeta.weightage}
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
              {resolvedChapterTitle}
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300 font-normal" : "text-slate-700 font-medium"}`}>
              Full NCERT chapter syllabus covered from zero. Every chemical equation is balanced with state symbols, biological processes feature clear pathways, and physics concepts have governing formulas with step-by-step solved board problems.
            </p>

            {/* Quick Topic Navigation Jump Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Curriculum Sub-Topics in this Chapter:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {chapterTopics.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setExpandedTopicIds((prev) => ({ ...prev, [t.id]: true }));
                      const el = document.getElementById(`topic-card-${t.id}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isDark 
                        ? "bg-white/5 border-white/10 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400/40" 
                        : "bg-white border-slate-200 text-teal-800 hover:bg-teal-50 shadow-2xs"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-[10px] flex items-center justify-center font-mono font-black">
                      {idx + 1}
                    </span>
                    <span>{t.topicTitle.split(":")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats & Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 w-full lg:w-auto shrink-0">
            <div className={`p-4 rounded-2xl border text-center ${isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-xs"}`}>
              <div className="flex items-center justify-around gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-teal-400 block">Sub-Topics</span>
                  <span className="text-xl sm:text-2xl font-mono font-black">{chapterTopics.length} Core</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">Solved Qs</span>
                  <span className="text-xl sm:text-2xl font-mono font-black">{totalExamplesInChapter} Board Qs</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleExpandAll}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50"
                }`}
              >
                {filteredTopics.every((t) => expandedTopicIds[t.id]) ? "Collapse All Topics" : "Expand All Topics"}
              </button>

              {onOpenQuestionBank && (
                <button
                  onClick={() => onOpenQuestionBank(currentChNo)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Practice Questions</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 3. SEARCH & LEVEL FILTER BAR ==================== */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={`Search within Chapter ${currentChNo}: ${resolvedChapterTitle} (e.g. chemical names, formulas, definitions)...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-2xl text-xs sm:text-sm font-medium border outline-none transition-all ${
              isDark 
                ? "bg-black/40 border-white/10 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
                : "bg-white border-slate-200 text-slate-900 focus:border-teal-500 shadow-sm"
            }`}
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <select
            value={activeLevelFilter}
            onChange={(e) => setActiveLevelFilter(e.target.value)}
            className={`px-4 py-3 rounded-2xl text-xs font-bold border outline-none cursor-pointer flex-1 sm:flex-initial transition-all ${
              isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            <option value="all">All Solved Examples ({totalExamplesInChapter})</option>
            <option value="Level 1">Level 1: 1M Foundation</option>
            <option value="Level 2">Level 2: 2M–3M Board Standard</option>
            <option value="Level 3">Level 3: 4M–5M Case Study / Master</option>
          </select>
        </div>
      </div>

      {/* ==================== 4. COMPLETE TOPIC-BY-TOPIC GUIDE ==================== */}
      <div className="space-y-8">
        {filteredTopics.length === 0 ? (
          <div className={`p-12 text-center rounded-3xl border ${isDark ? "bg-black/20 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
            <p className="text-lg font-bold">No concepts matched your search query in Chapter {currentChNo}.</p>
            <p className="text-sm text-slate-400 mt-1">Try clearing the search query to view all topics for this chapter.</p>
          </div>
        ) : (
          filteredTopics.map((topic, topicIdx) => {
            const isTopicExpanded = expandedTopicIds[topic.id] ?? true;
            const DisciplineIcon = getDisciplineIcon(topic.discipline);
            const disciplineStyle = getDisciplineColor(topic.discipline);

            // Filter examples if level filter active
            const visibleExamples = topic.examples.filter(ex => {
              if (activeLevelFilter === "all") return true;
              return ex.level.startsWith(activeLevelFilter);
            });

            return (
              <div 
                key={topic.id}
                id={`topic-card-${topic.id}`}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isDark 
                    ? "bg-[#0f172a]/85 border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-teal-500/40" 
                    : "bg-white border-slate-200 shadow-md hover:border-teal-400"
                }`}
              >
                {/* Topic Header Bar */}
                <div 
                  onClick={() => toggleTopicExpand(topic.id)}
                  className={`p-6 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none transition-colors ${
                    isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50/70"
                  }`}
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-teal-500/15 text-teal-400 border border-teal-500/30">
                        Topic {topicIdx + 1} of {filteredTopics.length}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase border flex items-center gap-1 ${disciplineStyle}`}>
                        <DisciplineIcon className="w-3 h-3" />
                        {topic.discipline}
                      </span>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md ${
                        isDark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-600"
                      }`}>
                        {topic.ncertSection}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                      {topic.topicTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
                      isDark ? "bg-teal-950/40 text-teal-300 border-teal-800/40" : "bg-teal-50 text-teal-800 border-teal-200"
                    }`}>
                      {topic.examples.length} Solved Examples
                    </span>
                    <button className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors bg-white/5">
                      {isTopicExpanded ? <ChevronUp className="w-5 h-5 text-teal-400" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Topic Collapsible Content */}
                {isTopicExpanded && (
                  <div className={`px-6 sm:px-8 pb-8 pt-4 border-t space-y-7 ${
                    isDark ? "border-white/5 bg-[#090e1a]/70" : "border-slate-100 bg-slate-50/40"
                  }`}>
                    {/* 1. NCERT Concept Breakdown */}
                    <div className={`p-6 sm:p-7 rounded-2xl border space-y-3 leading-relaxed ${
                      isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                          NCERT Comprehensive Concept & Core Definition
                        </span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed font-normal">
                        {topic.ncertSummary}
                      </p>
                    </div>

                    {/* 2. Key Scientific Principles & Activity Observations */}
                    <div className="space-y-3">
                      <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Scientific Principles & Activity Observations
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {topic.corePrinciples.map((principle, pIdx) => (
                          <div 
                            key={pIdx}
                            className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3 transition-all ${
                              isDark ? "bg-white/[0.03] border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-2xs"
                            }`}
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span className="text-sm leading-relaxed">{principle}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Key Chemical Equations or Governing Formulas */}
                    {topic.keyReactionsOrFormulas && topic.keyReactionsOrFormulas.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <FlaskConical className="w-4 h-4" /> High-Yield Balanced Equations & Governing Formulas
                        </h4>
                        <div className="space-y-3">
                          {topic.keyReactionsOrFormulas.map((item, rIdx) => (
                            <div 
                              key={rIdx}
                              className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                isDark ? "bg-black/50 border-amber-500/25 text-amber-300" : "bg-amber-50/70 border-amber-200 text-amber-900 shadow-xs"
                              }`}
                            >
                              <div className="space-y-1.5 flex-1">
                                <span className="font-mono font-bold text-xs uppercase tracking-wider block opacity-75">
                                  {item.name}
                                </span>
                                <div className="text-base sm:text-lg font-bold">
                                  <PremiumMathRenderer content={item.formula} isDark={isDark} />
                                </div>
                              </div>
                              {item.note && (
                                <span className={`text-xs font-sans px-3.5 py-1.5 rounded-xl border shrink-0 ${
                                  isDark ? "bg-black/70 border-white/10 text-slate-200" : "bg-white border-amber-200 text-amber-900 font-medium"
                                }`}>
                                  💡 {item.note}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. Board Examiner Warning / Deduction Trap Alert */}
                    <div className={`p-5 sm:p-6 rounded-2xl border flex items-start gap-4 ${
                      isDark ? "bg-rose-950/25 border-rose-800/40 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-900"
                    }`}>
                      <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed space-y-1.5">
                        <span className="font-bold uppercase tracking-wider text-rose-400 block font-mono text-xs">
                          CBSE Examiner Marks Deduction Trap
                        </span>
                        <p className="font-medium">{topic.commonMistakesWarning}</p>
                      </div>
                    </div>

                    {/* 5. LEVELED BOARD SOLVED EXAMPLES */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                          <FileText className="w-4 h-4" /> Leveled Board Solved Examples ({visibleExamples.length} of {topic.examples.length} Shown)
                        </h4>
                        <span className="text-xs font-mono text-slate-400">
                          Step-by-Step Marking Scheme Included
                        </span>
                      </div>

                      <div className="space-y-4">
                        {visibleExamples.map((ex, exIdx) => {
                          const isExExpanded = expandedExampleIds[ex.id] ?? false;

                          const getLevelBadge = (level: string) => {
                            if (level.includes("Level 1")) {
                              return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
                            }
                            if (level.includes("Level 2")) {
                              return "bg-amber-500/15 text-amber-400 border-amber-500/30";
                            }
                            return "bg-purple-500/15 text-purple-400 border-purple-500/30";
                          };

                          return (
                            <div 
                              key={ex.id}
                              className={`rounded-2xl border transition-all overflow-hidden ${
                                isDark 
                                  ? "bg-black/30 border-white/10 hover:border-white/20" 
                                  : "bg-white border-slate-200 shadow-2xs hover:border-slate-300"
                              }`}
                            >
                              {/* Example Header */}
                              <div 
                                onClick={() => toggleExampleExpand(ex.id)}
                                className={`p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none transition-colors ${
                                  isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex flex-wrap items-center gap-2.5">
                                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${getLevelBadge(ex.level)}`}>
                                    {ex.level.split(":")[0]}
                                  </span>
                                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold ${
                                    isDark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-800"
                                  }`}>
                                    {ex.marks}M
                                  </span>
                                  <span className="text-xs font-mono text-amber-400 font-semibold hidden sm:inline">
                                    {ex.marks === 1 ? "CBSE 1M Objective" : ex.marks <= 3 ? "CBSE 2M-3M Standard" : "CBSE 4M-5M Case Study"}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-400">
                                  <span>{isExExpanded ? "Hide Full Solution" : "View Step-by-Step Solution"}</span>
                                  {isExExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </div>
                              </div>

                              {/* Example Body */}
                              {isExExpanded && (
                                <div className={`p-6 sm:p-7 border-t space-y-5 ${
                                  isDark ? "border-white/10 bg-[#070b14]" : "border-slate-100 bg-slate-50/50"
                                }`}>
                                  {/* Question Statement */}
                                  <div className="space-y-1.5">
                                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                      Board Examination Problem Statement:
                                    </span>
                                    <div className={`text-sm sm:text-base font-bold leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                                      <PremiumMathRenderer content={ex.question} isDark={isDark} />
                                    </div>
                                  </div>

                                  {/* Step-by-Step Model Solution Sheet */}
                                  <div className={`p-5 sm:p-6 rounded-2xl border space-y-3.5 font-sans leading-relaxed ${
                                    isDark ? "plain-paper-sheet-dark" : "plain-paper-sheet"
                                  }`}>
                                    <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-white/10">
                                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4" /> CBSE Model Answer Scheme (100% Score)
                                      </span>
                                      <span className="text-xs font-mono opacity-70">
                                        Allocated: {ex.marks} Marks
                                      </span>
                                    </div>

                                    <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                                      {ex.solutionSteps.map((step, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-3">
                                          <span className="font-mono font-bold text-xs opacity-60 mt-1 shrink-0">
                                            {sIdx + 1}.
                                          </span>
                                          <div className="flex-1 leading-relaxed">
                                            <PremiumMathRenderer content={step} isDark={isDark} />
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Key Takeaway */}
                                    <div className="mt-4 pt-3.5 border-t border-dashed border-slate-300 dark:border-white/15 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-emerald-500">
                                      <Lightbulb className="w-4 h-4 shrink-0" />
                                      <span><strong>Key Board Concept:</strong> {ex.keyTakeaway}</span>
                                    </div>
                                  </div>

                                  {/* Examiner Trap Warning */}
                                  <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                                    isDark ? "bg-amber-950/20 border-amber-800/30 text-amber-200" : "bg-amber-50 border-amber-200 text-amber-900"
                                  }`}>
                                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Examiner Trap:</strong> {ex.examinerTrap}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ==================== 5. CHAPTER NAVIGATION FOOTER ==================== */}
      <div className={`p-6 sm:p-7 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isDark ? "bg-black/30 border-white/10" : "bg-white border-slate-200 shadow-sm"
      }`}>
        {prevChapter ? (
          <button
            onClick={() => handleSelectChapter(prevChapter.no)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 hover:border-teal-400/40 text-slate-300 hover:text-white transition-all cursor-pointer w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-teal-400" />
            <span>Previous: Ch {prevChapter.no} ({prevChapter.shortName})</span>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {onOpenQuestionBank && (
          <button
            onClick={() => onOpenQuestionBank(currentChNo)}
            className="px-6 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>Practice Chapter {currentChNo} Questions →</span>
          </button>
        )}

        {nextChapter ? (
          <button
            onClick={() => handleSelectChapter(nextChapter.no)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-white/10 hover:border-teal-400/40 text-slate-300 hover:text-white transition-all cursor-pointer w-full sm:w-auto justify-center"
          >
            <span>Next: Ch {nextChapter.no} ({nextChapter.shortName})</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </div>
  );
}
