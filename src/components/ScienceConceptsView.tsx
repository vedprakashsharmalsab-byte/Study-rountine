"use client";

import React, { useState, useMemo } from "react";
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
  Check
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
  isEmbeddedInCommand?: boolean;
}

export default function ScienceConceptsView({ 
  isDark, 
  onOpenQuestionBank, 
  activeChapterNo,
  isEmbeddedInCommand = false 
}: ScienceConceptsViewProps) {
  const [activeDisciplineFilter, setActiveDisciplineFilter] = useState<string>("all");
  const [activeChapterFilter, setActiveChapterFilter] = useState<number | "all">(activeChapterNo || "all");
  const [activeLevelFilter, setActiveLevelFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({
    sci_c1_t1: true,
    sci_c5_t1: true,
    sci_c9_t1: true,
    sci_c11_t1: true
  });
  const [expandedExampleIds, setExpandedExampleIds] = useState<Record<string, boolean>>({
    ex_c1_1: true,
    ex_c1_2: true
  });

  // Automatically sync and expand when activeChapterNo changes in Chapter Command
  React.useEffect(() => {
    if (activeChapterNo !== undefined) {
      setActiveChapterFilter(activeChapterNo);
      // Auto-expand all topics for this active chapter so student can learn from zero
      const chapterTopics = SCIENCE_CONCEPTS_AND_EXAMPLES.filter((t) => t.chapterNo === activeChapterNo);
      const newExpandedState: Record<string, boolean> = {};
      chapterTopics.forEach((t) => {
        newExpandedState[t.id] = true;
      });
      setExpandedTopicIds((prev) => ({ ...prev, ...newExpandedState }));
    }
  }, [activeChapterNo]);

  const toggleTopicExpand = (id: string) => {
    setExpandedTopicIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExampleExpand = (id: string) => {
    setExpandedExampleIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpandAll = () => {
    const allExpanded = filteredTopics.every((t) => expandedTopicIds[t.id]);
    const nextState: Record<string, boolean> = {};
    filteredTopics.forEach((t) => {
      nextState[t.id] = !allExpanded;
    });
    setExpandedTopicIds(nextState);
  };

  // Chapter meta directory
  const CHAPTER_LIST = [
    { no: 1, name: "Ch 1: Reactions", discipline: "Chemistry" },
    { no: 2, name: "Ch 2: Acids & Salts", discipline: "Chemistry" },
    { no: 3, name: "Ch 3: Metals & Non-metals", discipline: "Chemistry" },
    { no: 4, name: "Ch 4: Carbon Compounds", discipline: "Chemistry" },
    { no: 5, name: "Ch 5: Life Processes", discipline: "Biology" },
    { no: 6, name: "Ch 6: Control & Coordination", discipline: "Biology" },
    { no: 7, name: "Ch 7: Reproduction", discipline: "Biology" },
    { no: 8, name: "Ch 8: Heredity", discipline: "Biology" },
    { no: 9, name: "Ch 9: Light (Reflection & Refraction)", discipline: "Physics" },
    { no: 10, name: "Ch 10: Human Eye & Colours", discipline: "Physics" },
    { no: 11, name: "Ch 11: Electricity", discipline: "Physics" },
    { no: 12, name: "Ch 12: Magnetic Effects", discipline: "Physics" },
    { no: 13, name: "Ch 13: Our Environment", discipline: "Natural Resources" },
  ];

  const filteredTopics = useMemo(() => {
    return SCIENCE_CONCEPTS_AND_EXAMPLES.filter((topic) => {
      // Discipline filter
      if (activeDisciplineFilter !== "all" && topic.discipline !== activeDisciplineFilter) {
        return false;
      }

      // Chapter filter
      if (activeChapterFilter !== "all" && topic.chapterNo !== activeChapterFilter) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTopic = 
          topic.topicTitle.toLowerCase().includes(q) ||
          topic.chapterName.toLowerCase().includes(q) ||
          topic.ncertSummary.toLowerCase().includes(q) ||
          topic.corePrinciples.some((p) => p.toLowerCase().includes(q)) ||
          (topic.keyReactionsOrFormulas && topic.keyReactionsOrFormulas.some((r) => r.name.toLowerCase().includes(q) || r.formula.toLowerCase().includes(q)));
        
        const matchesExample = topic.examples.some((ex) => 
          ex.question.toLowerCase().includes(q) ||
          ex.solutionSteps.some((s) => s.toLowerCase().includes(q)) ||
          ex.keyTakeaway.toLowerCase().includes(q)
        );

        if (!matchesTopic && !matchesExample) return false;
      }

      return true;
    });
  }, [activeDisciplineFilter, activeChapterFilter, searchQuery]);

  const totalExamplesCount = useMemo(() => {
    return filteredTopics.reduce((acc, t) => acc + t.examples.length, 0);
  }, [filteredTopics]);

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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 1. HERO BANNER OR CHAPTER COMMAND HEADER */}
      {isEmbeddedInCommand ? (
        <div 
          className={`p-5 sm:p-7 rounded-3xl border transition-all ${
            isDark 
              ? "bg-gradient-to-r from-teal-950/40 via-emerald-950/20 to-black/40 border-teal-500/30 shadow-lg" 
              : "bg-gradient-to-r from-teal-50 via-emerald-50 to-white border-teal-200 shadow-sm"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-500 text-slate-950">
                  NCERT Master Guide (From Zero)
                </span>
                <span className={`text-xs font-mono font-bold ${isDark ? "text-teal-400" : "text-teal-700"}`}>
                  Ch {activeChapterNo || 1} Deep Blueprint
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                {CHAPTER_LIST.find((c) => c.no === activeChapterNo)?.name || `Chapter ${activeChapterNo}`} — All NCERT Concepts & Leveled Examples
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Learn every chemical reaction, physics formula derivation, biological pathway, and examiner trap from ground zero.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={toggleExpandAll}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-700 shadow-xs"
                }`}
              >
                {filteredTopics.every((t) => expandedTopicIds[t.id]) ? "Collapse All Topics" : "Expand All Topics"}
              </button>

              {onOpenQuestionBank && (
                <button
                  onClick={() => onOpenQuestionBank(typeof activeChapterFilter === "number" ? activeChapterFilter : activeChapterNo)}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-teal-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Practice 40+ Questions</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div 
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            isDark 
              ? "bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-blue-950/30 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-gradient-to-r from-teal-50 via-white to-blue-50 border-teal-100 shadow-md"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                  <Atom className="w-5 h-5" />
                </div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-teal-500 text-slate-950">
                  100% NCERT Science Guide
                </span>
                <span className="text-xs font-mono text-teal-400 font-bold hidden sm:inline">
                  All 13 Chapters • Zero Omissions
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Science Concept Master & NCERT Solved Guide
              </h2>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Every NCERT topic explained intuitively with zero skipped details. Balanced chemical reactions, biological process flowcharts, physics formula derivations, and 3 to 7 leveled board examples per concept.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto text-center shrink-0">
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
                <span className="text-[10px] uppercase font-bold text-teal-400 block font-mono">Curriculum</span>
                <span className="text-lg sm:text-xl font-black">13 Chapters</span>
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
                <span className="text-[10px] uppercase font-bold text-amber-400 block font-mono">Solved Qs</span>
                <span className="text-lg sm:text-xl font-black">{totalExamplesCount} Solved</span>
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
                <span className="text-[10px] uppercase font-bold text-blue-400 block font-mono">Exam Target</span>
                <span className="text-lg sm:text-xl font-black">80/80 Marks</span>
              </div>
              <div className={`p-3 rounded-2xl border ${isDark ? "bg-black/30 border-white/5" : "bg-white/80 border-slate-200"}`}>
                <span className="text-[10px] uppercase font-bold text-emerald-400 block font-mono">Examiner Traps</span>
                <span className="text-lg sm:text-xl font-black">Zero Mark Loss</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. DISCIPLINE & LEVEL FILTER CONTROLS */}
      <div className="space-y-3">
        {/* Row 1: Discipline Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-teal-400" /> Discipline:
          </span>
          {[
            { id: "all", label: "All Disciplines", icon: BookOpen },
            { id: "Chemistry", label: "🧪 Chemistry (Ch 1–4)", icon: FlaskConical },
            { id: "Biology", label: "🧬 Biology (Ch 5–8)", icon: Dna },
            { id: "Physics", label: "⚡ Physics (Ch 9–12)", icon: Zap },
            { id: "Natural Resources", label: "🌿 Ecology (Ch 13)", icon: Leaf },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveDisciplineFilter(d.id);
                setActiveChapterFilter("all");
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                activeDisciplineFilter === d.id
                  ? isDark
                    ? "bg-teal-500 text-slate-950 border-teal-400 font-extrabold shadow-sm"
                    : "bg-teal-600 text-white border-teal-600 font-extrabold shadow-sm"
                  : isDark
                  ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {d.label}
            </button>
          ))}

          {/* Level Filter Dropdown */}
          <div className="ml-auto flex items-center gap-2">
            <select
              value={activeLevelFilter}
              onChange={(e) => setActiveLevelFilter(e.target.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border outline-none cursor-pointer ${
                isDark ? "bg-black/40 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800"
              }`}
            >
              <option value="all">All Example Levels</option>
              <option value="Level 1">Level 1: 1M Foundation</option>
              <option value="Level 2">Level 2: 2M–3M Board Standard</option>
              <option value="Level 3">Level 3: 4M–5M Master / Case Study</option>
            </select>

            <button
              onClick={toggleExpandAll}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                isDark ? "bg-white/[0.05] border-white/10 text-slate-300 hover:text-white" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Toggle All
            </button>
          </div>
        </div>

        {/* Row 2: Chapter Filter Pills (Horizontally Scrollable) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setActiveChapterFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
              activeChapterFilter === "all"
                ? isDark
                  ? "bg-teal-500 text-slate-950 border-teal-400 font-extrabold shadow-md"
                  : "bg-teal-600 text-white border-teal-600 font-extrabold shadow-md"
                : isDark
                ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            All Chapters ({filteredTopics.length} Topics)
          </button>
          {CHAPTER_LIST.filter(c => activeDisciplineFilter === "all" || c.discipline === activeDisciplineFilter).map((ch) => (
            <button
              key={ch.no}
              onClick={() => setActiveChapterFilter(ch.no)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                activeChapterFilter === ch.no
                  ? isDark
                    ? "bg-teal-500 text-slate-950 border-teal-400 font-extrabold shadow-md"
                    : "bg-teal-600 text-white border-teal-600 font-extrabold shadow-md"
                  : isDark
                  ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {ch.name}
            </button>
          ))}
        </div>

        {/* Row 3: Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search any reaction, formula, diagram step, or keyword (e.g. Ohm's law, Nephron, Esterification, Myopia)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border outline-none transition-all ${
              isDark 
                ? "bg-black/40 border-white/10 text-white focus:border-teal-500" 
                : "bg-white border-slate-200 text-slate-900 focus:border-teal-500 shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* 3. TOPICS LIST */}
      <div className="space-y-6">
        {filteredTopics.length === 0 ? (
          <div className={`p-12 text-center rounded-3xl border ${isDark ? "bg-black/20 border-white/10" : "bg-slate-50 border-slate-200"}`}>
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold">No concepts matched your filter or query.</p>
            <p className="text-xs text-slate-400 mt-1">Try clearing the search query or selecting "All Chapters".</p>
          </div>
        ) : (
          filteredTopics.map((topic) => {
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
                className={`virtual-card rounded-3xl border transition-all duration-200 ${
                  isDark 
                    ? "glass-card border-white/[0.08]" 
                    : "glass-card-light border-slate-200 shadow-sm"
                }`}
              >
                {/* Card Header Bar */}
                <div 
                  onClick={() => toggleTopicExpand(topic.id)}
                  className="p-5 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border flex items-center gap-1 ${disciplineStyle}`}>
                        <DisciplineIcon className="w-3 h-3" />
                        {topic.discipline} • Ch {topic.chapterNo}
                      </span>
                      <span className={`text-[11px] font-mono font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {topic.ncertSection}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                      {topic.topicTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-xl border ${
                      isDark ? "bg-teal-950/40 text-teal-300 border-teal-800/40" : "bg-teal-50 text-teal-800 border-teal-200"
                    }`}>
                      {topic.examples.length} Solved Examples
                    </span>
                    <button className="p-1 rounded-lg text-slate-400 hover:text-white">
                      {isTopicExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Card Collapsible Body */}
                {isTopicExpanded && (
                  <div className={`px-5 sm:px-7 pb-7 pt-2 border-t space-y-6 ${
                    isDark ? "border-white/5" : "border-slate-100"
                  }`}>
                    {/* NCERT Concept Breakdown */}
                    <div className={`p-4 sm:p-5 rounded-2xl border leading-relaxed ${
                      isDark ? "bg-black/30 border-white/5 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-teal-400" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                          NCERT Core Concept & Intuitive Explanation
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {topic.ncertSummary}
                      </p>
                    </div>

                    {/* Core Principles Bullet Points */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Key Scientific Principles & Activity Observations
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs leading-relaxed">
                        {topic.corePrinciples.map((principle, pIdx) => (
                          <div 
                            key={pIdx}
                            className={`p-3 rounded-xl border flex items-start gap-2 ${
                              isDark ? "bg-white/[0.02] border-white/5 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{principle}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Chemical Equations or Formulas */}
                    {topic.keyReactionsOrFormulas && topic.keyReactionsOrFormulas.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <FlaskConical className="w-3.5 h-3.5" /> High-Yield Chemical Reactions & Governing Formulas
                        </h4>
                        <div className="space-y-2">
                          {topic.keyReactionsOrFormulas.map((item, rIdx) => (
                            <div 
                              key={rIdx}
                              className={`p-3.5 rounded-2xl border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                                isDark ? "bg-black/40 border-amber-500/20 text-amber-300" : "bg-amber-50/50 border-amber-200 text-amber-900"
                              }`}
                            >
                              <div>
                                <span className="font-bold text-[11px] uppercase tracking-wider block opacity-70">
                                  {item.name}
                                </span>
                                <div className="mt-1 text-xs sm:text-sm font-bold">
                                  <PremiumMathRenderer content={item.formula} isDark={isDark} />
                                </div>
                              </div>
                              {item.note && (
                                <span className={`text-[10px] sm:text-xs font-sans px-2.5 py-1 rounded-lg border shrink-0 ${
                                  isDark ? "bg-black/60 border-white/10 text-slate-300" : "bg-white border-amber-200 text-amber-800"
                                }`}>
                                  💡 {item.note}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Board Examiner Warning / Trap Alert */}
                    <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                      isDark ? "bg-rose-950/20 border-rose-800/30 text-rose-200" : "bg-rose-50 border-rose-200 text-rose-900"
                    }`}>
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-xs leading-relaxed space-y-0.5">
                        <span className="font-bold uppercase tracking-wider text-rose-400 block font-mono text-[10px]">
                          CBSE Examiner Marks Deduction Trap
                        </span>
                        <span>{topic.commonMistakesWarning}</span>
                      </div>
                    </div>

                    {/* 4. LEVELED SOLVED EXAMPLES SECTION */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" /> Leveled Board Solved Examples ({visibleExamples.length} of {topic.examples.length} Shown)
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400">
                          Step-by-step scoring sheets
                        </span>
                      </div>

                      <div className="space-y-3">
                        {visibleExamples.map((ex) => {
                          const isExExpanded = expandedExampleIds[ex.id] ?? false;
                          const isL1 = ex.level.startsWith("Level 1");
                          const isL2 = ex.level.startsWith("Level 2");

                          return (
                            <div 
                              key={ex.id}
                              className={`rounded-2xl border overflow-hidden transition-all ${
                                isDark ? "border-white/10 bg-black/30" : "border-slate-200 bg-white"
                              }`}
                            >
                              {/* Example Accordion Header */}
                              <div 
                                onClick={() => toggleExampleExpand(ex.id)}
                                className="p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-white/[0.02]"
                              >
                                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 border ${
                                    isL1 
                                      ? "bg-blue-500/10 text-blue-400 border-blue-500/30" 
                                      : isL2 
                                      ? "bg-amber-500/10 text-amber-400 border-amber-500/30" 
                                      : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                                  }`}>
                                    {ex.level.split(" ")[0]} • {ex.marks}M
                                  </span>

                                  <p className={`text-xs sm:text-sm font-semibold truncate ${
                                    isDark ? "text-slate-100" : "text-slate-900"
                                  }`}>
                                    {ex.question}
                                  </p>
                                </div>

                                <button className="text-xs font-bold font-mono text-teal-400 shrink-0 flex items-center gap-1">
                                  <span>{isExExpanded ? "Fold" : "Answer Sheet"}</span>
                                  {isExExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                </button>
                              </div>

                              {/* Example Accordion Sheet Body */}
                              {isExExpanded && (
                                <div className={`p-4 sm:p-5 border-t space-y-4 ${
                                  isDark ? "border-white/10 bg-[#070b14]" : "border-slate-100 bg-slate-50/50"
                                }`}>
                                  {/* Full Question */}
                                  <div className="space-y-1">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                      Board Examination Question:
                                    </span>
                                    <div className={`text-xs sm:text-sm font-medium leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                                      <PremiumMathRenderer content={ex.question} isDark={isDark} />
                                    </div>
                                  </div>

                                  {/* Step-by-Step Model Solution Sheet */}
                                  <div className={`p-4 rounded-xl border space-y-2.5 font-sans leading-relaxed ${
                                    isDark ? "plain-paper-sheet-dark" : "plain-paper-sheet"
                                  }`}>
                                    <div className="flex items-center justify-between border-b pb-2 border-slate-200 dark:border-white/10">
                                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Model Answer Scheme (Full Marks Presentation)
                                      </span>
                                      <span className="text-[10px] font-mono opacity-60">
                                        Allocated: {ex.marks} Marks
                                      </span>
                                    </div>

                                    <div className="space-y-2 text-xs sm:text-sm">
                                      {ex.solutionSteps.map((step, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-2">
                                          <span className="font-mono font-bold text-[11px] opacity-60 mt-0.5 shrink-0">
                                            {sIdx + 1}.
                                          </span>
                                          <div className="flex-1">
                                            <PremiumMathRenderer content={step} isDark={isDark} />
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Key Takeaway */}
                                    <div className="mt-3 pt-2.5 border-t border-dashed border-slate-300 dark:border-white/15 flex items-center gap-2 text-xs font-medium text-emerald-500">
                                      <Lightbulb className="w-4 h-4 shrink-0" />
                                      <span><strong>Key Concept:</strong> {ex.keyTakeaway}</span>
                                    </div>
                                  </div>

                                  {/* Examiner Trap Warning */}
                                  <div className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                                    isDark ? "bg-amber-950/20 border-amber-800/30 text-amber-200" : "bg-amber-50 border-amber-200 text-amber-900"
                                  }`}>
                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                    <span><strong>Examiner Scoring Trap:</strong> {ex.examinerTrap}</span>
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
    </div>
  );
}
