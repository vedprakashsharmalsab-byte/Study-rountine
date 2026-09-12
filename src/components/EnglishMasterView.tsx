"use client";

import React, { useState, useMemo, useRef } from "react";
import {
  BookOpen,
  Feather,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Compass,
  Search,
  Quote,
  HelpCircle,
  Eye,
  EyeOff,
  Lightbulb,
  FileText,
  BarChart3,
  Mail,
  Flame,
  Check,
  X,
  Bookmark,
  Filter,
  Plus,
  ArrowRight,
  Clock,
  Award,
  ShieldAlert,
  Zap,
  Camera,
  Target,
  Layers,
  Play
} from "lucide-react";
import {
  ENGLISH_LITERATURE_DATA,
  EnglishChapter,
  HardWord,
  BoardQA
} from "@/data/englishLiteratureData";
import {
  ENGLISH_GRAMMAR_DATA,
  GrammarTopic,
  GrammarMistakeCard,
  GrammarExercise
} from "@/data/englishGrammarData";
import {
  ENGLISH_WRITING_DATA,
  WritingSectionGuide,
  WritingSampleModel
} from "@/data/englishWritingData";

interface EnglishMasterViewProps {
  isDark: boolean;
  onJumpToRevision?: (title: string) => void;
}

type EnglishTab = "literature" | "poetry" | "grammar" | "practice" | "writing" | "mistakes";

interface CustomEnglishMistake {
  id: string;
  category: "Grammar" | "Literature" | "Poetry" | "Writing";
  title: string;
  wrong: string;
  correct: string;
  tip: string;
  penalty: string;
}

const PRELOADED_ENGLISH_MISTAKES: CustomEnglishMistake[] = [
  {
    id: "eng-m1",
    category: "Grammar",
    title: "Present Perfect with Past Time Words",
    wrong: "I have seen that movie yesterday.",
    correct: "I saw that movie yesterday.",
    tip: "Never use 'has/have' with definite past words (yesterday, ago, in 2022). Use Simple Past (V2).",
    penalty: "-1 Mark in Editing / Gap Filling"
  },
  {
    id: "eng-m2",
    category: "Grammar",
    title: "Question Conjunction in Reported Speech",
    wrong: "He asked me that where was I going.",
    correct: "He asked me where I was going.",
    tip: "NEVER use 'that' before wh- question words or 'if/whether'. Also, use statement order (subject + verb), not question order.",
    penalty: "-1 Mark in Dialogue Completion"
  },
  {
    id: "eng-m3",
    category: "Grammar",
    title: "'One of the' Singular Verb Agreement",
    wrong: "One of my friends are coming to visit.",
    correct: "One of my friends is coming to visit.",
    tip: "The subject is 'One' (singular), not 'friends'. Always use singular verb (is/was/has).",
    penalty: "-0.5 Mark in Subject-Verb Concord"
  },
  {
    id: "eng-m4",
    category: "Writing",
    title: "Apostrophe in 'Yours sincerely'",
    wrong: "Your's sincerely / Your's faithfully",
    correct: "Yours sincerely / Yours faithfully",
    tip: "'Yours' is already possessive; an apostrophe turns it into a spelling error.",
    penalty: "-0.5 Mark in Letter Format"
  },
  {
    id: "eng-m5",
    category: "Writing",
    title: "Archaic 'Respected Sir' in Formal Letters",
    wrong: "Respected Sir / Respected Madam",
    correct: "Sir / Madam",
    tip: "CBSE and modern standard business format prefers neutral 'Sir' or 'Madam'. 'Respected' is outdated.",
    penalty: "-0.5 Mark in Salutation"
  },
  {
    id: "eng-m6",
    category: "Writing",
    title: "Subjective Moralizing in Analytical Paragraph",
    wrong: "In my opinion, everyone must stop using smartphones because it ruins children.",
    correct: "The survey indicates an inverse correlation between excessive screen exposure and academic scores.",
    tip: "Analytical paragraph is 100% objective data analysis. Do NOT give moral advice or personal opinions.",
    penalty: "-1 Mark in Content & Relevance"
  },
  {
    id: "eng-m7",
    category: "Literature",
    title: "Did Herriot operate on Tricki?",
    wrong: "Dr. Herriot performed a stomach surgery on Tricki at his hospital.",
    correct: "NO surgical operation was performed; the cure was purely water, diet restriction, and pack play.",
    tip: "The title 'A Triumph of Surgery' is purely ironical. Mrs. Pumphrey mistakenly believed an operation cured him.",
    penalty: "-2 Marks in Board SAQ"
  },
  {
    id: "eng-m8",
    category: "Literature",
    title: "Why did Hari Singh return to Anil?",
    wrong: "Hari Singh returned because he feared the police would catch him at the station.",
    correct: "Hari Singh returned because of moral guilt over losing Anil's trust and the priceless value of learning to read and write.",
    tip: "Hari easily escaped police before; his motive was redemption and literacy, not fear of arrest.",
    penalty: "-1.5 Marks in Theme-based Question"
  },
  {
    id: "eng-m9",
    category: "Literature",
    title: "Why Bholi initially agreed to marry Bishamber",
    wrong: "Bholi liked Bishamber's wealth and wanted to marry a rich grocer.",
    correct: "Bholi agreed solely out of filial duty and sacrifice to preserve her father's social prestige (izzat).",
    tip: "She was obedient until Bishamber humiliated her father by extorting 5,000 rupees dowry for her pockmarks.",
    penalty: "-1.5 Marks in Character Analysis"
  },
  {
    id: "eng-m10",
    category: "Poetry",
    title: "Symbolism of Hemlock and Crow in 'Dust of Snow'",
    wrong: "The crow and hemlock tree represent Robert Frost's love for birds and winter gardening.",
    correct: "The crow (omen of sorrow) and hemlock (poisonous plant) represent how inauspicious elements of nature can bring unexpected healing.",
    tip: "Robert Frost subverts traditional romantic symbols (cuckoos, roses) to show nature's humble restorative power.",
    penalty: "-1 Mark in Poetic Symbolism"
  }
];

export const EnglishMasterView: React.FC<EnglishMasterViewProps> = ({
  isDark,
  onJumpToRevision
}) => {
  const [activeTab, setActiveTab] = useState<EnglishTab>("literature");

  // Literature & Poetry State
  const [selectedBookFilter, setSelectedBookFilter] = useState<string>("TS1");
  const [literatureSearch, setLiteratureSearch] = useState<string>("");
  const [selectedChapterId, setSelectedChapterId] = useState<string>("fp-ch1-triumph-of-surgery");
  const [selectedPoemId, setSelectedPoemId] = useState<string>("poem-dust-of-snow");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Horizontal Scroll Carousel Refs & Handlers
  const proseScrollRef = useRef<HTMLDivElement>(null);
  const poemScrollRef = useRef<HTMLDivElement>(null);

  const scrollProseLeft = () => {
    if (proseScrollRef.current) {
      proseScrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollProseRight = () => {
    if (proseScrollRef.current) {
      proseScrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollPoemLeft = () => {
    if (poemScrollRef.current) {
      poemScrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollPoemRight = () => {
    if (poemScrollRef.current) {
      poemScrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Grammar Clinic State
  const [selectedGrammarTopicId, setSelectedGrammarTopicId] = useState<string>("grammar-tenses");
  const [grammarAnswerRevealed, setGrammarAnswerRevealed] = useState<Record<string, boolean>>({});
  
  // Tenses 0-to-100 Interactive State
  const [tensesStage, setTensesStage] = useState<"basics" | "costumes" | "lenses" | "table" | "traps" | "practice">("basics");
  const [tensesAspectFilter, setTensesAspectFilter] = useState<"all" | "present" | "past" | "future">("all");

  // Subject-Verb Agreement Concord State
  const [concordFilter, setConcordFilter] = useState<"all" | "foundations" | "indefinite" | "bodyguards" | "advanced" | "ppt-drill">("all");
  const [pptAnswersRevealed, setPptAnswersRevealed] = useState<Record<number, boolean>>({});

  // Dedicated Practice Question Bank State
  const [practiceScope, setPracticeScope] = useState<"ALL" | "TS1" | "WORKSHEET" | "FIRST_FLIGHT" | "POETRY" | "GRAMMAR">("TS1");
  const [practiceTypeFilter, setPracticeTypeFilter] = useState<"ALL" | "MCQ" | "SAQ" | "LAQ">("ALL");
  const [practiceChapterSelect, setPracticeChapterSelect] = useState<string>("ALL");
  const [practiceSearch, setPracticeSearch] = useState<string>("");
  const [revealedPracticeAnswers, setRevealedPracticeAnswers] = useState<Record<string, boolean>>({});
  const [mcqUserChoice, setMcqUserChoice] = useState<Record<string, number>>({});
  // Pagination: limit to 10 at a time to prevent DOM bloat on 2-core 4GB RAM devices
  const [practiceDisplayCount, setPracticeDisplayCount] = useState(10);

  // Writing State
  const [selectedWritingType, setSelectedWritingType] = useState<"formal-letter" | "analytical-paragraph">("formal-letter");
  const [selectedWritingSampleId, setSelectedWritingSampleId] = useState<string>("fl-sample-1");

  // Master Tabs Scroll Ref & Controls
  const masterTabsRef = useRef<HTMLDivElement>(null);
  const scrollMasterTabs = (direction: "left" | "right") => {
    if (masterTabsRef.current) {
      masterTabsRef.current.scrollBy({ left: direction === "left" ? -280 : 280, behavior: "smooth" });
    }
  };

  // Poem Sub-Tab State
  const [poemSubTab, setPoemSubTab] = useState<"stanzas" | "analysis" | "devices" | "idioms" | "qas">("stanzas");

  // Modals Interactive State
  const [modalsStage, setModalsStage] = useState<"basics" | "categories" | "traps" | "practice">("basics");
  const [activeModalCategoryIdx, setActiveModalCategoryIdx] = useState<number>(0);

  // Subject-Verb Agreement Concord New UX State (No sideside boxes)
  const [activeConcordRuleIdx, setActiveConcordRuleIdx] = useState<number>(0);
  const [concordViewMode, setConcordViewMode] = useState<"focus" | "list" | "ppt-drill">("focus");
  const [concordQuickCheckRevealed, setConcordQuickCheckRevealed] = useState<Record<number, boolean>>({});

  // Reported Speech Master Rule Deck State
  const [activeSpeechRuleIdx, setActiveSpeechRuleIdx] = useState<number>(0);
  const [speechViewMode, setSpeechViewMode] = useState<"focus" | "list" | "dialogues">("focus");
  const [speechQuickCheckRevealed, setSpeechQuickCheckRevealed] = useState<Record<number, boolean>>({});
  const [dialogueAnswersRevealed, setDialogueAnswersRevealed] = useState<Record<string, boolean>>({});

  // Writing Lab State
  const [writingSubtypeFilter, setWritingSubtypeFilter] = useState<string>("all");
  const [activeFormatStep, setActiveFormatStep] = useState<number>(0);

  // Mistake Notebook State
  const [mistakeFilter, setMistakeFilter] = useState<string>("All");
  const [customMistakes, setCustomMistakes] = useState<CustomEnglishMistake[]>(PRELOADED_ENGLISH_MISTAKES);
  const [showAddMistakeModal, setShowAddMistakeModal] = useState<boolean>(false);
  const [newMistake, setNewMistake] = useState({
    category: "Grammar" as CustomEnglishMistake["category"],
    title: "",
    wrong: "",
    correct: "",
    tip: "",
    penalty: ""
  });

  // Filtered chapters for Literature Tab
  const proseChapters = useMemo(() => {
    return ENGLISH_LITERATURE_DATA.filter((ch) => ch.type !== "poem");
  }, []);

  const poemChapters = useMemo(() => {
    return ENGLISH_LITERATURE_DATA.filter((ch) => ch.type === "poem");
  }, []);

  const displayedProseChapters = useMemo(() => {
    return proseChapters.filter((ch) => {
      const matchBook =
        selectedBookFilter === "All" ||
        (selectedBookFilter === "TS1" && ch.isTestSeries1) ||
        (selectedBookFilter === "Footprints" && ch.book === "Footprints Without Feet") ||
        (selectedBookFilter === "FirstFlight" && ch.book === "First Flight (Prose)");
      const matchSearch =
        ch.title.toLowerCase().includes(literatureSearch.toLowerCase()) ||
        ch.author.toLowerCase().includes(literatureSearch.toLowerCase()) ||
        ch.theme.toLowerCase().includes(literatureSearch.toLowerCase());
      return matchBook && matchSearch;
    });
  }, [proseChapters, selectedBookFilter, literatureSearch]);

  const selectedChapter = useMemo(() => {
    return (
      ENGLISH_LITERATURE_DATA.find((ch) => ch.id === selectedChapterId) ||
      displayedProseChapters[0] ||
      ENGLISH_LITERATURE_DATA[0]
    );
  }, [selectedChapterId, displayedProseChapters]);

  const selectedPoem = useMemo(() => {
    return (
      ENGLISH_LITERATURE_DATA.find((ch) => ch.id === selectedPoemId) ||
      poemChapters[0]
    );
  }, [selectedPoemId, poemChapters]);

  const selectedGrammarTopic = useMemo(() => {
    return (
      ENGLISH_GRAMMAR_DATA.find((t) => t.id === selectedGrammarTopicId) ||
      ENGLISH_GRAMMAR_DATA[0]
    );
  }, [selectedGrammarTopicId]);

  const selectedWritingGuide = useMemo(() => {
    return (
      ENGLISH_WRITING_DATA.find((w) => w.type === selectedWritingType) ||
      ENGLISH_WRITING_DATA[0]
    );
  }, [selectedWritingType]);

  const selectedWritingSample = useMemo(() => {
    return (
      selectedWritingGuide.modelSamples.find((s) => s.id === selectedWritingSampleId) ||
      selectedWritingGuide.modelSamples[0]
    );
  }, [selectedWritingGuide, selectedWritingSampleId]);

  // Aggregate questions for Practice Question Bank
  const allPracticeQuestions = useMemo(() => {
    const list: Array<{
      id: string;
      chapterTitle: string;
      book: string;
      isTS1: boolean;
      isWorksheet: boolean;
      question: string;
      marks: number;
      type: "MCQ" | "SAQ" | "LAQ" | "RTC";
      modelAnswer: string;
      keyKeywords: string[];
      examinerRubricTip: string;
    }> = [];

    ENGLISH_LITERATURE_DATA.forEach((ch) => {
      (ch.boardQAs || []).forEach((qa) => {
        const isWs = qa.question.includes("Official Test Series 1 Worksheet") || qa.id.includes("-ws-");
        list.push({
          id: qa.id,
          chapterTitle: ch.title,
          book: ch.book,
          isTS1: ch.isTestSeries1,
          isWorksheet: isWs,
          question: qa.question,
          marks: qa.marks,
          type: qa.type as any,
          modelAnswer: qa.modelAnswer,
          keyKeywords: qa.keyKeywords,
          examinerRubricTip: qa.examinerRubricTip
        });
      });
    });

    // Aggregate all dedicated grammar clinic exercises (Tenses, Concord, Modals, Reported Speech)
    ENGLISH_GRAMMAR_DATA.forEach((topic) => {
      (topic.practiceExercises || []).forEach((ex, exIdx) => {
        list.push({
          id: ex.id || `grammar-${topic.id}-${exIdx}`,
          chapterTitle: topic.title,
          book: "Grammar Clinic",
          isTS1: true,
          isWorksheet: false,
          question: ex.question,
          marks: ex.type === "mcq" ? 1 : (ex.type === "dialogue-completion" ? 4 : 2),
          type: ex.type === "mcq" ? "MCQ" : "SAQ",
          modelAnswer: ex.correctAnswer + (ex.explanation ? `\n\n[Board Reasoning]: ${ex.explanation}` : ""),
          keyKeywords: [topic.syllabusCategory, ex.type, ex.boardYearTag || "CBSE Board Standard"],
          examinerRubricTip: ex.explanation || topic.shortTagline
        });
      });
    });

    return list;
  }, []);

  const filteredPracticeQuestions = useMemo(() => {
    return allPracticeQuestions.filter((q) => {
      // Scope Filter
      if (practiceScope === "TS1" && !q.isTS1) return false;
      if (practiceScope === "WORKSHEET" && !q.isWorksheet) return false;
      if (practiceScope === "FIRST_FLIGHT" && !q.book.includes("First Flight (Prose)")) return false;
      if (practiceScope === "POETRY" && !q.book.includes("First Flight (Poetry)")) return false;
      if (practiceScope === "GRAMMAR" && !q.book.includes("Grammar Clinic")) return false;

      // Type Filter
      if (practiceTypeFilter === "MCQ" && q.marks !== 1) return false;
      if (practiceTypeFilter === "SAQ" && q.marks !== 3 && q.marks !== 2) return false;
      if (practiceTypeFilter === "LAQ" && q.marks !== 6 && q.marks !== 5) return false;

      // Chapter Filter
      if (practiceChapterSelect !== "ALL" && q.chapterTitle !== practiceChapterSelect) return false;

      // Search Filter
      if (practiceSearch.trim()) {
        const term = practiceSearch.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(term);
        const matchAns = q.modelAnswer.toLowerCase().includes(term);
        const matchChap = q.chapterTitle.toLowerCase().includes(term);
        if (!matchQ && !matchAns && !matchChap) return false;
      }

      return true;
    });
  }, [allPracticeQuestions, practiceScope, practiceTypeFilter, practiceChapterSelect, practiceSearch]);

  const toggleRevealAnswer = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleGrammarAnswer = (id: string) => {
    setGrammarAnswerRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePptAnswer = (idx: number) => {
    setPptAnswersRevealed((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const togglePracticeAnswer = (id: string) => {
    setRevealedPracticeAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddCustomMistake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMistake.title || !newMistake.wrong || !newMistake.correct) return;
    const created: CustomEnglishMistake = {
      id: `custom-${Date.now()}`,
      ...newMistake
    };
    setCustomMistakes([created, ...customMistakes]);
    setNewMistake({
      category: "Grammar",
      title: "",
      wrong: "",
      correct: "",
      tip: "",
      penalty: ""
    });
    setShowAddMistakeModal(false);
  };

  const filteredMistakes = useMemo(() => {
    if (mistakeFilter === "All") return customMistakes;
    return customMistakes.filter((m) => m.category === mistakeFilter);
  }, [customMistakes, mistakeFilter]);

  // Subject Verb Agreement 16 PPT Practice Questions
  const PPT_PRACTICE_DRILL = [
    { q: "1. Mathematics (is / are) my favourite subject.", ans: "is", rule: "Rule 16: Plural in form, singular in meaning (academic subjects end in -s but take singular verbs)." },
    { q: "2. Neither the teacher nor the students (was / were) present.", ans: "were", rule: "Rule 5: Proximity rule with neither...nor. 'Students' is closer to the verb." },
    { q: "3. The quality of these mangoes (is / are) good.", ans: "is", rule: "Rule 14: Head noun agreement. The subject is 'quality' (singular), not 'mangoes'." },
    { q: "4. Each of the boys (has / have) done his work.", ans: "has", rule: "Rule 8: 'Each' is an indefinite pronoun and is strictly singular." },
    { q: "5. A number of students (is / are) absent today.", ans: "are", rule: "Rule 19: 'A number of' = many (always plural)." },
    { q: "6. The number of boys (is / are) fifty.", ans: "is", rule: "Rule 19: 'The number of' = a specific count/figure (always singular)." },
    { q: "7. Bread and butter (is / are) a wholesome food.", ans: "is", rule: "Rule 3: Two nouns expressing a single composite idea take a singular verb." },
    { q: "8. He as well as his friends (has / have) failed.", ans: "has", rule: "Rule 11: Bodyguard phrases (as well as). Verb agrees with the 1st subject 'He'." },
    { q: "9. Fifty kilometers (is / are) a long distance.", ans: "is", rule: "Rule 13: Units of distance, weight, and money taken as a single lump sum take singular verbs." },
    { q: "10. One of the girls (is / are) singing.", ans: "is", rule: "Rule 8: Subject is 'One', not 'girls'. Always singular." },
    { q: "11. The jury (was / were) divided in their opinions.", ans: "were", rule: "Rule 12: Collective noun with divided members acting as individuals takes a plural verb." },
    { q: "12. Either he or I (is / am) mistaken.", ans: "am", rule: "Rule 5: Either...or proximity. The pronoun 'I' is nearest to the verb, so it takes 'am'." },
    { q: "13. Many a man (has / have) died of cholera.", ans: "has", rule: "Rule 9: 'Many a' + singular noun takes a singular verb." },
    { q: "14. The scissors (is / are) blunt.", ans: "are", rule: "Rule 10: Pair nouns with two parts (scissors, trousers, binoculars) take plural verbs unless preceded by 'a pair of'." },
    { q: "15. Two and two (make / makes) four.", ans: "make (or makes)", rule: "Mathematical fact: 'make' is universally accepted in CBSE; 'makes' is also treated as valid." },
    { q: "16. Time and tide (wait / waits) for none.", ans: "wait", rule: "Two separate conceptual forces acting together take a plural verb." }
  ];

  return (
    <div className="space-y-6 pb-16">
      {/* =========================================================================
          TOP BANNER & NAVIGATION
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-indigo-950/70 to-slate-900 border-indigo-500/30 text-white"
            : "bg-gradient-to-br from-indigo-50 via-white to-sky-50 border-indigo-200/80 text-slate-900 shadow-indigo-100/50"
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                CBSE 2026-27 Blueprint
              </span>
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ⭐ Test Series 1 Priority
              </span>
              <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Exam: 26 Sept 2026
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Class 10 English Language & Literature (184)
            </h1>
            <p className={`text-sm sm:text-base font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Complete 0-to-100% mastery command center: all 8 Test Series 1 Footprints stories in full depth, 0-knowledge Tenses masterclass, 20-rule Subject-Verb Concord deck from classroom PPT, 130+ question bank with official WhatsApp worksheet answers, and writing lab.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <div
              className={`p-4 rounded-2xl border text-center ${
                isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className="block text-2xl font-black text-indigo-500">80</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Theory Marks
              </span>
            </div>
            <div
              className={`p-4 rounded-2xl border text-center ${
                isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <span className="block text-2xl font-black text-emerald-500">20</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Internal Marks
              </span>
            </div>
          </div>
        </div>

        {/* Pro Horizontal Scroll Cue Line Above Master Tabs */}
        <div className={`mt-6 p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 ${
          isDark ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900 shadow-sm"
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-base animate-pulse">👉</span>
            <span><strong>Horizontal Navigation:</strong> Swipe sideways (← →) or click arrow buttons to explore all sections: Stories & Prose • Poetry Masterclass • Grammar Clinic • Question Bank • Writing Lab • Mistake Notebook.</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => scrollMasterTabs("left")}
              aria-label="Scroll left"
              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-white hover:bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollMasterTabs("right")}
              aria-label="Scroll right"
              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-white hover:bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Master Tabs: Mobile Dropdown + Desktop Pills */}
        <div className="md:hidden mt-2">
          <div className="fabulous-select-wrapper">
            <select
              aria-label="Select English Section"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as EnglishTab)}
              className={`fabulous-select ${
                isDark ? "fabulous-select-dark" : "fabulous-select-light"
              }`}
            >
              {[
                { id: "literature", label: "📖 Stories & Prose (Footprints & First Flight)" },
                { id: "poetry", label: "🎭 Poetry Masterclass (Paraphrase & Devices)" },
                { id: "grammar", label: "⚡ Grammar Clinic (Tenses & Concord Rules)" },
                { id: "practice", label: "🎯 Question Bank & Practice (130+ Qs)" },
                { id: "writing", label: "✍️ Writing Lab (Letter & Paragraph 10M)" },
                { id: "mistakes", label: "❌ Mistake Notebook (Board Traps)" }
              ].map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
            <div className="fabulous-select-icon text-zinc-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div ref={masterTabsRef} className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-white/10 scroll-smooth mt-2">
          {[
            { id: "literature", label: "📖 Stories & Prose", badge: "Footprints (TS1) & First Flight" },
            { id: "poetry", label: "🎭 Poetry Masterclass", badge: "Paraphrase & Devices" },
            { id: "grammar", label: "⚡ Grammar Clinic", badge: "Tenses 0-100 & 20 Concord Rules" },
            { id: "practice", label: "🎯 Question Bank & Practice", badge: "130+ Qs & WhatsApp Sheets" },
            { id: "writing", label: "✍️ Writing Lab", badge: "Letter & Paragraph (10M)" },
            { id: "mistakes", label: "❌ Mistake Notebook", badge: `${customMistakes.length} Board Traps` }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as EnglishTab)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-150 flex items-center gap-2 border cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                    : isDark
                    ? "bg-slate-800/60 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : isDark
                      ? "bg-slate-700 text-slate-300"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          TAB 1: LITERATURE (STORIES & PROSE)
          ========================================================================= */}
      {activeTab === "literature" && (
        <div className="space-y-6">
          {/* Navigation Helper Cue Line */}
          <div className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 ${
            isDark ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
          }`}>
            <span>👈 <strong>Pro Navigation Tip:</strong> Click arrow buttons or swipe sideways (← →) on the carousel below to view all chapters. Click any card to load full scene-by-scene NCERT analysis.</span>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Horizontal Carousel</span>
          </div>

          {/* Horizontal Navigation Carousel with Scroll Left & Right buttons */}
          <div className={`p-4 rounded-3xl border ${isDark ? "bg-slate-900/90 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"}`}>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-400" />
                <span className="font-extrabold text-sm sm:text-base">
                  Prose & Stories Interactive Navigator
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isDark ? "bg-indigo-950 text-indigo-300 border border-indigo-500/30" : "bg-indigo-100 text-indigo-700"}`}>
                  {displayedProseChapters.length} Chapters Available
                </span>
              </div>
              
              {/* Scroll Control Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollProseLeft}
                  aria-label="Scroll left"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Scroll Left</span>
                </button>
                <button
                  onClick={scrollProseRight}
                  aria-label="Scroll right"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                  }`}
                >
                  <span className="hidden sm:inline">Scroll Right</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Book Filter Pills & Search */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: "TS1", label: "⭐ Test Series 1 Priority (Footprints Ch 1–8)" },
                  { id: "All", label: "All Prose" },
                  { id: "Footprints", label: "Footprints Without Feet" },
                  { id: "FirstFlight", label: "First Flight (Prose)" }
                ].map((f) => {
                  const isActive = selectedBookFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedBookFilter(f.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search story, author, theme..."
                  value={literatureSearch}
                  onChange={(e) => setLiteratureSearch(e.target.value)}
                  className={`w-full pl-9 pr-3 py-1.5 rounded-xl text-xs font-medium border outline-none transition-all ${
                    isDark
                      ? "bg-slate-800 border-white/10 text-white placeholder-slate-400 focus:border-indigo-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500"
                  }`}
                />
              </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div
              ref={proseScrollRef}
              className="flex items-stretch gap-3.5 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar"
            >
              {displayedProseChapters.map((ch) => {
                const isSelected = selectedChapter.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`shrink-0 w-64 sm:w-72 p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-[1.02]"
                        : isDark
                        ? "bg-slate-800/80 border-white/10 text-slate-200 hover:bg-slate-800 hover:border-indigo-500/50"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white hover:border-indigo-300 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : ch.isTestSeries1
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {ch.isTestSeries1 ? "⭐ Test Series 1" : ch.book}
                        </span>
                        <span className="text-xl">{ch.funToddlerHook.emoji}</span>
                      </div>

                      <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-1 mb-1">
                        {ch.title}
                      </h3>
                      <p
                        className={`text-xs font-medium line-clamp-1 mb-2 ${
                          isSelected ? "text-indigo-100" : isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        By {ch.author}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold">
                      <span className={isSelected ? "text-indigo-100" : isDark ? "text-slate-400" : "text-slate-600"}>
                        {ch.boardQAs?.length || 0} Board Q&As
                      </span>
                      <span className="flex items-center gap-1">
                        View Full Story <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Chapter Full Master Breakdown */}
          {selectedChapter && (
            <div className="space-y-6">
              {/* Header Hero Card */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border shadow-lg relative overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border-white/10 text-white"
                    : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 text-xs font-extrabold uppercase rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        {selectedChapter.book} — Chapter {selectedChapter.chapterNo}
                      </span>
                      {selectedChapter.isTestSeries1 && (
                        <span className="px-3 py-0.5 text-xs font-extrabold uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          ⭐ Official Test Series 1 Priority
                        </span>
                      )}
                      <span className="px-3 py-0.5 text-xs font-semibold rounded-full bg-slate-700/50 text-slate-300">
                        Genre: {selectedChapter.genre}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                      {selectedChapter.title}
                    </h2>
                    <p className={`text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      Author: <span className="text-indigo-400 font-bold">{selectedChapter.author}</span>
                    </p>
                    <div className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed ${
                      isDark ? "bg-slate-800/70 border-white/10 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}>
                      <strong>Central Thematic Thesis:</strong> {selectedChapter.theme}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => setActiveTab("practice")}
                      className="px-4 py-2.5 rounded-xl font-bold text-xs bg-indigo-600 text-white hover:bg-indigo-500 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Target className="w-4 h-4" />
                      <span>Practice {selectedChapter.boardQAs?.length || 10} Questions</span>
                    </button>
                    {onJumpToRevision && (
                      <button
                        onClick={() => onJumpToRevision(selectedChapter.title)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs border flex items-center justify-center gap-2 cursor-pointer ${
                          isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                        }`}
                      >
                        <Flame className="w-4 h-4 text-amber-500" />
                        <span>Flashcard Revision</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Toddler Analogy (ELI5 Hook) */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border ${
                  isDark
                    ? "bg-gradient-to-br from-amber-950/40 via-slate-900 to-amber-950/20 border-amber-500/30 text-white"
                    : "bg-gradient-to-br from-amber-50 via-white to-orange-50 border-amber-200 text-slate-900 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl p-2 rounded-2xl bg-amber-500/20">
                    {selectedChapter.funToddlerHook.emoji}
                  </span>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-500">
                      Toddler Analogy (ELI5 Hook)
                    </span>
                    <h4 className="text-lg font-black text-amber-400">
                      {selectedChapter.funToddlerHook.tagline}
                    </h4>
                  </div>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-medium mb-3 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  {selectedChapter.funToddlerHook.funnyStory}
                </p>
                <div className={`p-3 rounded-xl border text-xs sm:text-sm font-bold ${
                  isDark ? "bg-amber-950/60 border-amber-500/40 text-amber-300" : "bg-amber-100 border-amber-300 text-amber-900"
                }`}>
                  💡 <strong>The Core Life Lesson:</strong> {selectedChapter.funToddlerHook.ahaLesson}
                </div>
              </div>

              {/* Deep NCERT Explanation & Complete Bullet Sequence */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Deep Analysis */}
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-indigo-400">
                    <BookOpen className="w-5 h-5" />
                    <span>In-Depth NCERT Scene-by-Scene Analysis</span>
                  </h3>
                  <div className={`text-sm leading-relaxed space-y-4 font-medium whitespace-pre-line ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {selectedChapter.deepExplanation}
                  </div>
                </div>

                {/* Bullet Sequence */}
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Chronological Plot Milestones</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedChapter.bulletSummary.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-500/30">
                          {idx + 1}
                        </span>
                        <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Characters Breakdown */}
              {selectedChapter.characters && selectedChapter.characters.length > 0 && (
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-sky-400">
                    <Compass className="w-5 h-5" />
                    <span>Key Character Profiles & Psychological Traits</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedChapter.characters.map((char, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-5 rounded-2xl border ${
                          isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200 shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{char.emoji}</span>
                          <div>
                            <h4 className="font-bold text-base">{char.name}</h4>
                            <span className="text-xs text-indigo-400 font-semibold">{char.role}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {char.traits.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className={`text-xs leading-relaxed font-medium mb-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          {char.description}
                        </p>
                        {char.keyQuote && (
                          <div className={`p-2.5 rounded-xl border text-xs italic font-medium ${
                            isDark ? "bg-slate-900/60 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                          }`}>
                            "{char.keyQuote}"
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vocabulary & Key Thematic Quotes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Vocabulary */}
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-violet-400">
                    <Sparkles className="w-5 h-5" />
                    <span>NCERT High-Impact Vocabulary ({selectedChapter.hardWords.length} Words)</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedChapter.hardWords.map((hw, hwIdx) => (
                      <div
                        key={hwIdx}
                        className={`p-3.5 rounded-2xl border ${
                          isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-sm text-indigo-400">{hw.word}</span>
                            <span className="text-xs font-mono text-slate-400">[{hw.pronunciation}]</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-700 text-slate-300 uppercase">
                              {hw.partOfSpeech}
                            </span>
                          </div>
                        </div>
                        <p className={`text-xs font-semibold mb-1 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          Meaning: {hw.meaning}
                        </p>
                        <p className={`text-xs italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          Context: "{hw.contextSentence}"
                        </p>
                        {hw.synonyms && hw.synonyms.length > 0 && (
                          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                            <span className="font-bold">Synonyms:</span>
                            <span>{hw.synonyms.join(", ")}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Quotes */}
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-400">
                    <Quote className="w-5 h-5" />
                    <span>Pivotal Quotes for 6-Mark Answers</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedChapter.keyQuotes.map((kq, kqIdx) => (
                      <div
                        key={kqIdx}
                        className={`p-4 rounded-2xl border ${
                          isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <p className="text-xs sm:text-sm font-bold italic mb-2 text-indigo-300">
                          "{kq.quote}"
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>Speaker: <strong>{kq.speaker}</strong></span>
                          <span>{kq.context}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chapter High-Yield Keywords & Idioms / Metaphors */}
              {((selectedChapter.keywordsList && selectedChapter.keywordsList.length > 0) ||
                (selectedChapter.idiomsAndPhrases && selectedChapter.idiomsAndPhrases.length > 0)) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Keywords */}
                  {selectedChapter.keywordsList && selectedChapter.keywordsList.length > 0 && (
                    <div
                      className={`p-6 sm:p-7 rounded-3xl border ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <h3 className="text-lg font-bold flex items-center gap-2 text-sky-400">
                          <BookOpen className="w-5 h-5 text-sky-400" />
                          <span>High-Yield Keywords & Vocabulary</span>
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          {selectedChapter.keywordsList.length} Keywords
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedChapter.keywordsList.map((kw, kwIdx) => (
                          <div
                            key={kwIdx}
                            className={`px-3 py-2 rounded-xl border flex items-center gap-2 ${
                              isDark ? "bg-slate-800/80 border-white/10 text-sky-300" : "bg-sky-50 border-sky-200 text-sky-950 font-semibold"
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                            <span className="text-xs font-bold">{kw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Idioms & Expressions */}
                  {selectedChapter.idiomsAndPhrases && selectedChapter.idiomsAndPhrases.length > 0 && (
                    <div
                      className={`p-6 sm:p-7 rounded-3xl border ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <h3 className="text-lg font-bold flex items-center gap-2 text-amber-400">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                          <span>Chapter Idioms & Metaphors</span>
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {selectedChapter.idiomsAndPhrases.length} Expressions
                        </span>
                      </div>
                      <div className="space-y-3">
                        {selectedChapter.idiomsAndPhrases.map((ip, ipIdx) => (
                          <div
                            key={ipIdx}
                            className={`p-3.5 rounded-2xl border ${
                              isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-bold text-sm text-amber-300">"{ip.phrase}"</span>
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                                Idiom / Expression
                              </span>
                            </div>
                            <p className={`text-xs font-semibold mb-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                              <strong>Meaning:</strong> {ip.meaning}
                            </p>
                            <p className={`text-xs italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                              <strong>Usage:</strong> "{ip.contextSentence}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Examiner Pitfalls & Board Traps */}
              {selectedChapter.examinerTraps && selectedChapter.examinerTraps.length > 0 && (
                <div
                  className={`p-6 sm:p-7 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Examiner Pitfalls & Common Mistakes</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedChapter.examinerTraps.map((et, eIdx) => (
                      <div
                        key={eIdx}
                        className={`p-5 rounded-2xl border ${
                          isDark ? "bg-slate-800/80 border-rose-500/20" : "bg-rose-50/50 border-rose-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm text-rose-400">{et.trapTitle}</h4>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                            {et.penaltyRisk}
                          </span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300">
                            <strong>❌ Common Mistake:</strong> {et.commonMistake}
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                            <strong>✅ CBSE Scoring Approach:</strong> {et.correctCbseApproach}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Board Questions & Answers Section (10+ Questions) */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
                  isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-indigo-400">
                      <Target className="w-5 h-5" />
                      <span>CBSE Board Q&As ({selectedChapter.boardQAs?.length || 0} Questions Available)</span>
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      Includes all 17 Official Test Series 1 Worksheet questions with CBSE marking rubrics.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("practice")}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 shadow-md flex items-center gap-1.5 self-start cursor-pointer"
                  >
                    <span>Open in Full Practice Arena</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {(selectedChapter.boardQAs || []).map((qa, qIdx) => {
                    const isRevealed = revealedAnswers[qa.id];
                    const isWorksheet = qa.question.includes("Official Test Series 1 Worksheet") || qa.id.includes("-ws-");
                    return (
                      <div
                        key={qa.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          isWorksheet
                            ? isDark
                              ? "bg-indigo-950/40 border-indigo-500/40"
                              : "bg-indigo-50/70 border-indigo-300"
                            : isDark
                            ? "bg-slate-800/80 border-white/10"
                            : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              {qa.type} • {qa.marks} Mark{qa.marks > 1 ? "s" : ""}
                            </span>
                            {isWorksheet && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                📸 Official Test Series 1 Worksheet
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => toggleRevealAnswer(qa.id)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isRevealed
                                ? "bg-slate-700 text-slate-200"
                                : "bg-indigo-600 text-white hover:bg-indigo-500"
                            }`}
                          >
                            {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            <span>{isRevealed ? "Hide Model Answer" : "Reveal Model Answer"}</span>
                          </button>
                        </div>

                        <p className="font-bold text-sm sm:text-base leading-snug mb-3">
                          Q{qIdx + 1}. {qa.question}
                        </p>

                        {isRevealed && (
                          <div className={`mt-3 pt-3 border-t border-white/10 space-y-3 animate-fade-in ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                            <div>
                              <span className="text-xs font-bold uppercase text-emerald-400 block mb-1">
                                📝 CBSE Standard Model Answer ({qa.marks} Marks):
                              </span>
                              <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
                                {qa.modelAnswer}
                              </p>
                            </div>

                            {qa.keyKeywords && qa.keyKeywords.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                                <span className="text-[11px] font-bold text-slate-400">Must-Have Keywords:</span>
                                {qa.keyKeywords.map((kw, kwIdx) => (
                                  <span
                                    key={kwIdx}
                                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                  >
                                    ✓ {kw}
                                  </span>
                                ))}
                              </div>
                            )}

                            {qa.examinerRubricTip && (
                              <div className={`p-2.5 rounded-xl border text-xs font-medium ${
                                isDark ? "bg-slate-900 border-white/10 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                              }`}>
                                🎯 <strong>Examiner Scoring Tip:</strong> {qa.examinerRubricTip}
                              </div>
                            )}
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
      )}

      {/* =========================================================================
          TAB 2: POETRY MASTERCLASS
          ========================================================================= */}
      {activeTab === "poetry" && (
        <div className="space-y-6">
          {/* Navigation Helper Cue Line */}
          <div className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 ${
            isDark ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
          }`}>
            <span>👈 <strong>Poetry Navigator:</strong> Scroll horizontally (← →) through the poem deck. Click any poem for stanza paraphrases and poetic devices.</span>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Poetry Track</span>
          </div>

          <div className={`p-4 rounded-3xl border ${isDark ? "bg-slate-900/90 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"}`}>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Feather className="w-5 h-5 text-indigo-400" />
                <span className="font-extrabold text-sm sm:text-base">
                  First Flight Poetry Masterclass
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isDark ? "bg-indigo-950 text-indigo-300 border border-indigo-500/30" : "bg-indigo-100 text-indigo-700"}`}>
                  {poemChapters.length} Poems Included
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPoemLeft}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollPoemRight}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isDark ? "bg-slate-800 hover:bg-slate-700 border-white/10 text-white" : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={poemScrollRef}
              className="flex items-stretch gap-3.5 overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar"
            >
              {poemChapters.map((poem) => {
                const isSelected = selectedPoem.id === poem.id;
                return (
                  <button
                    key={poem.id}
                    onClick={() => setSelectedPoemId(poem.id)}
                    className={`shrink-0 w-64 sm:w-72 p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-[1.02]"
                        : isDark
                        ? "bg-slate-800/80 border-white/10 text-slate-200 hover:bg-slate-800"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                          Poem
                        </span>
                        <span className="text-xl">{poem.funToddlerHook.emoji}</span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-1 mb-1">
                        {poem.title}
                      </h3>
                      <p className={`text-xs font-medium line-clamp-1 ${isSelected ? "text-indigo-100" : isDark ? "text-slate-400" : "text-slate-500"}`}>
                        By {poem.author}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Poem Content */}
          {selectedPoem && (
            <div className="space-y-6">
              <div
                className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
                  isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedPoem.funToddlerHook.emoji}</span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black">{selectedPoem.title}</h2>
                    <p className="text-sm font-semibold text-indigo-400">By {selectedPoem.author}</p>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed mt-4 ${
                  isDark ? "bg-slate-800/70 border-white/10 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-700"
                }`}>
                  <strong>Central Philosophical Theme:</strong> {selectedPoem.theme}
                </div>
              </div>

              {/* Poetry Interactive Sub-Tabs */}
              <div className={`p-2.5 rounded-2xl border flex items-center gap-2 overflow-x-auto no-scrollbar ${
                isDark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                {[
                  { id: "stanzas", label: "📜 Stanza Paraphrase & Devices", count: selectedPoem.stanzaBreakdown?.length ? `${selectedPoem.stanzaBreakdown.length} Stanzas` : "Stanzas" },
                  { id: "devices", label: "📚 Poetic Devices Encyclopedia", count: selectedPoem.allPoeticDevicesGlossary?.length ? `${selectedPoem.allPoeticDevicesGlossary.length} Devices` : "Glossary" },
                  { id: "idioms", label: "🔑 Keywords & Idioms", count: `${selectedPoem.keywordsList?.length || 0} + ${selectedPoem.idiomsAndPhrases?.length || 0}` },
                  { id: "analysis", label: "🧠 Theme & Deep Meaning", count: "Deep Dive" },
                  { id: "qas", label: "📝 Board Extracts & RTCs", count: `${selectedPoem.boardQAs?.length || 0} Qs` }
                ].map((st) => {
                  const isActive = poemSubTab === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setPoemSubTab(st.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      <span>{st.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"}`}>
                        {st.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* SUB-VIEW 1: STANZA-BY-STANZA BREAKDOWN */}
              {poemSubTab === "stanzas" && (
                <div className="space-y-6 animate-fade-in">
                  {selectedPoem.stanzaBreakdown && selectedPoem.stanzaBreakdown.length > 0 ? (
                    selectedPoem.stanzaBreakdown.map((st) => (
                      <div
                        key={st.stanzaNumber}
                        className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
                          isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                        }`}
                      >
                        {/* Stanza Header */}
                        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                            Stanza {st.stanzaNumber} of {selectedPoem.stanzaBreakdown?.length || 0}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {st.originalLines.length} Lines • {st.poeticDevices?.length || 0} Devices Active
                          </span>
                        </div>

                        {/* Stanza Original Lines */}
                        <div className={`p-4 sm:p-5 rounded-2xl border font-serif text-sm sm:text-base leading-relaxed tracking-wide italic mb-5 ${
                          isDark ? "bg-slate-950/70 border-indigo-500/30 text-indigo-100" : "bg-indigo-50/60 border-indigo-200 text-indigo-950"
                        }`}>
                          {st.originalLines.map((ln: string, lnIdx: number) => (
                            <div key={lnIdx} className="flex items-baseline gap-3">
                              <span className="text-[10px] font-mono text-slate-500 w-4 text-right select-none">{lnIdx + 1}</span>
                              <span className="leading-snug">{ln}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stanza Paraphrase */}
                        <div className={`p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed mb-5 ${
                          isDark ? "bg-slate-800/80 border-white/10 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}>
                          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-sky-400" />
                            <span>Stanza Meaning & Line-by-Line Paraphrase:</span>
                          </div>
                          <p className="leading-relaxed whitespace-pre-line">{st.simpleParaphrase}</p>
                        </div>

                        {/* Poetic Devices in this Stanza */}
                        {st.poeticDevices && st.poeticDevices.length > 0 && (
                          <div className="space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                              ✨ Poetic Devices in Stanza {st.stanzaNumber}:
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              {st.poeticDevices.map((pd, pdIdx) => (
                                <div
                                  key={pdIdx}
                                  className={`p-4 rounded-2xl border flex flex-col justify-between ${
                                    isDark ? "bg-slate-800/60 border-white/10" : "bg-white border-slate-200 shadow-sm"
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                      <span className="font-bold text-sm text-indigo-400">{pd.device}</span>
                                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                        Device
                                      </span>
                                    </div>
                                    {pd.easyDefinition && (
                                      <p className={`text-xs mb-2 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                                        <strong className="text-sky-400">💡 Easy Meaning:</strong> {pd.easyDefinition}
                                      </p>
                                    )}
                                    <div className={`p-2.5 rounded-xl font-mono text-[11px] mb-2 leading-snug ${
                                      isDark ? "bg-slate-900 border border-indigo-500/20 text-amber-300" : "bg-amber-50 border border-amber-200 text-amber-900"
                                    }`}>
                                      <strong>📍 Exact Line/Words:</strong> "{pd.lineExample}"
                                    </div>
                                  </div>
                                  <p className={`text-[11px] italic pt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                    <strong>🎯 Why poet used it:</strong> {pd.explanation}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className={`p-6 sm:p-7 rounded-3xl border ${isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
                      <h3 className="text-lg font-bold mb-3 text-indigo-400">Full Poem Paraphrase</h3>
                      <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {selectedPoem.deepExplanation}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* SUB-VIEW 2: POETIC DEVICES ENCYCLOPEDIA */}
              {poemSubTab === "devices" && (
                <div className="space-y-4 animate-fade-in">
                  <div className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                  }`}>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-indigo-400">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                          <span>Poetic Devices Encyclopedia — {selectedPoem.title}</span>
                        </h3>
                        <p className={`text-xs sm:text-sm mt-1 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          Every literary device explained in simple English with exact citations and CBSE scoring significance.
                        </p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                        {selectedPoem.allPoeticDevicesGlossary?.length || 0} Devices
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(selectedPoem.allPoeticDevicesGlossary || []).map((pd, pdIdx) => (
                        <div
                          key={pdIdx}
                          className={`p-5 rounded-2xl border flex flex-col justify-between ${
                            isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200 shadow-sm"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h4 className="font-bold text-base text-indigo-400">{pd.device}</h4>
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Exam Key
                              </span>
                            </div>
                            <p className={`text-xs sm:text-sm mb-2.5 font-medium leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                              <strong className="text-sky-400">💡 Easy Definition:</strong> {pd.easyDefinition}
                            </p>
                            <div className={`p-3 rounded-xl font-mono text-xs mb-3 ${
                              isDark ? "bg-slate-900 border border-indigo-500/30 text-amber-300" : "bg-amber-50 border border-amber-200 text-amber-900"
                            }`}>
                              <strong>📍 Exact Words in Poem:</strong> "{pd.whereUsedInPoem}"
                            </div>
                          </div>
                          <p className={`text-xs italic pt-2 border-t border-white/10 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                            <strong>🎯 Literary Function:</strong> {pd.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 3: KEYWORDS & IDIOMS */}
              {poemSubTab === "idioms" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
                  {/* Keywords */}
                  <div
                    className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
                      isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-sky-400">
                        <BookOpen className="w-5 h-5 text-sky-400" />
                        <span>Poetic Keywords & Vocabulary</span>
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                        {selectedPoem.keywordsList?.length || 0} Words
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(selectedPoem.keywordsList || []).map((kw, kwIdx) => (
                        <div
                          key={kwIdx}
                          className={`px-3 py-2 rounded-xl border flex items-center gap-2 ${
                            isDark ? "bg-slate-800/80 border-white/10 text-sky-300" : "bg-sky-50 border-sky-200 text-sky-950 font-semibold"
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                          <span className="text-xs font-bold">{kw}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Idioms & Metaphors */}
                  <div
                    className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
                      isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-amber-400">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <span>Poetic Idioms & Metaphors</span>
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {selectedPoem.idiomsAndPhrases?.length || 0} Expressions
                      </span>
                    </div>
                    <div className="space-y-3">
                      {(selectedPoem.idiomsAndPhrases || []).map((ip, ipIdx) => (
                        <div
                          key={ipIdx}
                          className={`p-3.5 rounded-2xl border ${
                            isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-bold text-sm text-amber-300">"{ip.phrase}"</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                              Metaphor / Idiom
                            </span>
                          </div>
                          <p className={`text-xs font-semibold mb-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                            <strong>Meaning:</strong> {ip.meaning}
                          </p>
                          <p className={`text-xs italic ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                            <strong>Usage:</strong> "{ip.contextSentence}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 4: THEME & DEEP ANALYSIS */}
              {poemSubTab === "analysis" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
                  <div
                    className={`p-6 sm:p-7 rounded-3xl border ${
                      isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-indigo-400">
                      <BookOpen className="w-5 h-5" />
                      <span>Full Poem Analysis & Interpretation</span>
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {selectedPoem.deepExplanation}
                    </p>
                  </div>

                  <div
                    className={`p-6 sm:p-7 rounded-3xl border ${
                      isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-sky-400">
                      <Sparkles className="w-5 h-5" />
                      <span>Key Themes & Philosophical Takeaways</span>
                    </h3>
                    <div className="space-y-3">
                      {selectedPoem.bulletSummary.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                          <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className={isDark ? "text-slate-300" : "text-slate-700"}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 5: BOARD EXTRACTS & RTCS */}
              {poemSubTab === "qas" && (
                <div className={`p-6 sm:p-7 rounded-3xl border shadow-sm animate-fade-in ${
                  isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-indigo-400">
                        <Target className="w-5 h-5 text-emerald-400" />
                        <span>Board Extract Questions & RTCs ({selectedPoem.boardQAs?.length || 0} Questions)</span>
                      </h3>
                      <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Official CBSE Reference-to-Context extracts with model answers and scoring keywords.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {(selectedPoem.boardQAs || []).map((qa, qIdx) => {
                      const isRevealed = revealedAnswers[qa.id];
                      return (
                        <div
                          key={qa.id}
                          className={`p-5 rounded-2xl border transition-all ${
                            isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              {qa.type} • {qa.marks} Mark{qa.marks > 1 ? "s" : ""}
                            </span>
                            <button
                              onClick={() => toggleRevealAnswer(qa.id)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                isRevealed
                                  ? "bg-slate-700 text-slate-200"
                                  : "bg-indigo-600 text-white hover:bg-indigo-500"
                              }`}
                            >
                              {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              <span>{isRevealed ? "Hide Model Answer" : "Reveal Model Answer"}</span>
                            </button>
                          </div>

                          <p className="font-bold text-sm sm:text-base leading-snug mb-3">
                            Q{qIdx + 1}. {qa.question}
                          </p>

                          {isRevealed && (
                            <div className={`mt-3 pt-3 border-t border-white/10 space-y-3 animate-fade-in ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                              <div>
                                <span className="text-xs font-bold uppercase text-sky-400 block mb-1">
                                  📝 CBSE Standard Model Answer:
                                </span>
                                <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
                                  {qa.modelAnswer}
                                </p>
                              </div>

                              {qa.keyKeywords && qa.keyKeywords.length > 0 && (
                                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                                  <span className="text-[11px] font-bold text-slate-400">Essential Keywords:</span>
                                  {qa.keyKeywords.map((kw, kwIdx) => (
                                    <span
                                      key={kwIdx}
                                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30"
                                    >
                                      ✓ {kw}
                                    </span>
                                  ))}
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
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TAB 3: GRAMMAR CLINIC (0-TO-100% MASTERCLASS)
          ========================================================================= */}
      {activeTab === "grammar" && (
        <div className="space-y-6">
          {/* Top Helper Banner */}
          <div className={`p-4 rounded-3xl border text-xs sm:text-sm font-semibold flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            isDark ? "bg-indigo-950/50 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900 shadow-sm"
          }`}>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400 shrink-0" />
              <span>✨ <strong>0-to-100% Grammar Clinic:</strong> Choose a module below. No cramped sideways boxes—all rules, 5 verb costumes, and 20 PPT concord rules are rendered in spacious, high-contrast widescreen layout.</span>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 self-start sm:self-auto shrink-0">
              10 Board Marks
            </span>
          </div>

          {/* Grammar Topic Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGLISH_GRAMMAR_DATA.map((topic) => {
              const isSelected = selectedGrammarTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedGrammarTopicId(topic.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-[1.02]"
                      : isDark
                      ? "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800"
                      : "bg-white border-slate-200 text-slate-800 hover:bg-indigo-50/50 shadow-sm"
                  }`}
                >
                  <div className="text-3xl mb-2">{topic.emoji}</div>
                  <h3 className="font-bold text-base leading-tight mb-1">{topic.title}</h3>
                  <p className={`text-xs line-clamp-2 ${isSelected ? "text-indigo-100" : isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {topic.shortTagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* =====================================================================
              SUB-VIEW A: TENSES (THE TIME MACHINE: ZERO TO 100%)
              ===================================================================== */}
          {selectedGrammarTopic.id === "grammar-tenses" && (
            <div className="space-y-6">
              {/* Tenses Step Navigator Pills */}
              <div className={`p-3 rounded-2xl border flex items-center gap-2 overflow-x-auto no-scrollbar ${
                isDark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                {[
                  { id: "basics", label: "🚀 Step 1: Ground Zero (What is a Tense?)", icon: Lightbulb },
                  { id: "costumes", label: "🎭 Step 2: The 5 Verb Costumes (V1–V5)", icon: Layers },
                  { id: "lenses", label: "🎥 Step 3: The 4 Camera Lenses", icon: Camera },
                  { id: "table", label: "⏰ Step 4: The 12 Tenses Master Table", icon: Clock },
                  { id: "traps", label: "⚠️ Step 5: Deadly Board Traps", icon: AlertTriangle },
                  { id: "practice", label: "🎯 Step 6: Board Practice Drills", icon: Target }
                ].map((step) => {
                  const isActive = tensesStage === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setTensesStage(step.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      <step.icon className="w-3.5 h-3.5" />
                      <span>{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step 1: Ground Zero Intro */}
              {tensesStage === "basics" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-gradient-to-br from-indigo-950/60 via-slate-900 to-indigo-950/30 border-indigo-500/40 text-white" : "bg-gradient-to-br from-indigo-50 via-white to-sky-50 border-indigo-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl p-2.5 rounded-2xl bg-indigo-500/20">⏳</span>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                          Step 1: Ground Zero Concept (Assume Zero Prior Knowledge)
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-indigo-300">
                          What is a Tense? (The Action + The Clock)
                        </h3>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed font-medium mb-4 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {selectedGrammarTopic.zeroKnowledgeIntro.whatIsIt}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
                        <h4 className="font-bold text-sm text-indigo-400 mb-2 flex items-center gap-2">
                          <span>🎬 The Movie Actor Analogy</span>
                        </h4>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {selectedGrammarTopic.zeroKnowledgeIntro.concreteAnalogy}
                        </p>
                      </div>

                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
                        <h4 className="font-bold text-sm text-emerald-400 mb-2 flex items-center gap-2">
                          <span>🧭 The 3 × 4 Universal Matrix</span>
                        </h4>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {selectedGrammarTopic.zeroKnowledgeIntro.coreMentalModel}
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-between gap-3 ${
                      isDark ? "bg-indigo-950/80 border-indigo-500/40 text-indigo-300" : "bg-indigo-100 border-indigo-300 text-indigo-900"
                    }`}>
                      <span>🎯 <strong>Next Step:</strong> Learn how every verb in English has exactly 5 costume changes before applying formulas.</span>
                      <button
                        onClick={() => setTensesStage("costumes")}
                        className="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shrink-0 cursor-pointer"
                      >
                        Explore 5 Costumes →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: The 5 Verb Costumes */}
              {tensesStage === "costumes" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                        Step 2: Fundamental Grammar Prerequisite
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black">
                        The 5 Costumes of Every English Verb (V1 to V5)
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {selectedGrammarTopic.zeroKnowledgeIntro.whyVerbsChange}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
                      {[
                        { form: "V1", name: "Base Form", costume: "The Naked Hero", example: "eat / play / write", role: "Used in Simple Present (with I/you/they) & after modal verbs (can/must/will)." },
                        { form: "V2", name: "Simple Past", costume: "The Time Machine", example: "ate / played / wrote", role: "Stands ALONE for yesterday's completed events. Never needs a helper." },
                        { form: "V3", name: "Past Participle", costume: "The Finished Trophy", example: "eaten / played / written", role: "NEVER stands alone! Always needs bodyguards (has / have / had)." },
                        { form: "V4", name: "Present Participle", costume: "The Live Camera (-ing)", example: "eating / playing / writing", role: "NEVER stands alone! Needs is/am/are/was/were to show ongoing motion." },
                        { form: "V5", name: "3rd Person Singular", costume: "The Polite Singular (-s/-es)", example: "eats / plays / writes", role: "Worn ONLY when the subject is He, She, It, or a single person." }
                      ].map((c) => (
                        <div
                          key={c.form}
                          className={`p-4 rounded-2xl border flex flex-col justify-between ${
                            isDark ? "bg-slate-800/70 border-white/10" : "bg-slate-50 border-slate-200 shadow-sm"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-lg font-black text-indigo-400">{c.form}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                                {c.name}
                              </span>
                            </div>
                            <h4 className="font-bold text-xs mb-1.5 text-emerald-400">{c.costume}</h4>
                            <div className={`p-2 rounded-lg font-mono text-xs font-bold mb-2.5 ${
                              isDark ? "bg-slate-900 text-amber-300" : "bg-white border border-slate-200 text-amber-800"
                            }`}>
                              {c.example}
                            </div>
                          </div>
                          <p className={`text-[11px] leading-relaxed font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                            {c.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: The 4 Camera Lenses */}
              {tensesStage === "lenses" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                        Step 3: Visual Aspect Metaphor
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black">
                        The 4 Camera Lenses of Time
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        Every tense is simply looking at an action through one of these 4 camera perspectives.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: "1. Simple / Indefinite", emoji: "📸", lens: "The Snapshot Photo", rule: "Daily routine, static fact, or one-time event.", formula: "Present: V1 / V5 | Past: V2 | Future: will + V1", tip: "No '-ing', no 'has/have'. Just clean fact." },
                        { title: "2. Continuous / Progressive", emoji: "🎥", lens: "The Live Video Stream", rule: "Action actively rolling in front of your eyes.", formula: "be (is/am/are/was/were/will be) + V4 (-ing)", tip: "Stative verbs (know, love, understand) CANNOT use this lens!" },
                        { title: "3. Perfect", emoji: "🏆", lens: "The Finished Trophy", rule: "Action completed, but the result/trophy matters now.", formula: "have (has/have/had/will have) + V3", tip: "Never use definite past words (yesterday) with Present Perfect!" },
                        { title: "4. Perfect Continuous", emoji: "⏱️", lens: "The Running Stopwatch", rule: "Started in the past, duration ticking, still happening!", formula: "have + been + V4 (-ing) + [since / for]", tip: "Since = start point (Monday). For = duration (3 hours)." }
                      ].map((l) => (
                        <div
                          key={l.title}
                          className={`p-5 rounded-2xl border flex flex-col justify-between ${
                            isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200 shadow-sm"
                          }`}
                        >
                          <div>
                            <div className="text-3xl mb-2">{l.emoji}</div>
                            <h4 className="font-bold text-sm mb-1">{l.title}</h4>
                            <span className="text-xs font-extrabold text-indigo-400 block mb-2">{l.lens}</span>
                            <p className={`text-xs font-medium mb-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                              {l.rule}
                            </p>
                            <div className={`p-2 rounded-lg font-mono text-[11px] mb-3 ${
                              isDark ? "bg-slate-950/80 border border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border border-indigo-200 text-indigo-950 font-semibold"
                            }`}>
                              {l.formula}
                            </div>
                          </div>
                          <div className={`p-2 rounded-xl text-[11px] font-semibold ${
                            isDark ? "bg-indigo-950/50 text-indigo-300" : "bg-indigo-100 text-indigo-900"
                          }`}>
                            💡 <strong>Key Rule:</strong> {l.tip}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: All 12 Tenses Master Table */}
              {tensesStage === "table" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black">All 12 Tenses Master Deck</h3>
                      <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Formulas, mental hooks, signal words, and exemplar sentences.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[
                        { id: "all", label: "All 12 Tenses" },
                        { id: "present", label: "Present (4)" },
                        { id: "past", label: "Past (4)" },
                        { id: "future", label: "Future (4)" }
                      ].map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setTensesAspectFilter(f.id as any)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            tensesAspectFilter === f.id
                              ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                              : isDark
                              ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Roomy 1 or 2 Column Cards (NO squished 3-column sideways boxes!) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {selectedGrammarTopic.ruleBlocks
                      .filter((rb) => {
                        if (tensesAspectFilter === "present") return rb.ruleTitle.toLowerCase().includes("present");
                        if (tensesAspectFilter === "past") return rb.ruleTitle.toLowerCase().includes("past");
                        if (tensesAspectFilter === "future") return rb.ruleTitle.toLowerCase().includes("future");
                        return true;
                      })
                      .map((rb, rIdx) => (
                        <div
                          key={rIdx}
                          className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                            isDark
                              ? "bg-slate-900/90 border-white/10 hover:border-indigo-500/50 shadow-md"
                              : "bg-white border-slate-200 text-slate-900 shadow-sm hover:shadow-md"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                Rule {rb.ruleNo || rIdx + 1}
                              </span>
                              <span className="text-xs font-semibold text-slate-400">
                                CBSE Core Formula
                              </span>
                            </div>

                            <h4 className="font-black text-lg text-indigo-400 mb-2">
                              {rb.ruleTitle}
                            </h4>

                            <p className={`text-xs sm:text-sm mb-3 font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                              {rb.plainEnglishExplanation}
                            </p>

                            <div className={`p-3.5 rounded-xl border font-mono text-xs font-bold mb-3 ${
                              isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border border-indigo-200 text-indigo-950"
                            }`}>
                              <strong>Formula:</strong> {rb.formulaOrPattern}
                            </div>
                          </div>

                          <div className="space-y-2 pt-3 border-t border-white/10">
                            <span className="text-[11px] font-bold uppercase text-slate-400 block">
                              Board Exemplars:
                            </span>
                            {rb.goldenExamples.map((ex, exIdx) => (
                              <div key={exIdx} className={`p-2 rounded-xl text-xs ${isDark ? "bg-slate-800/50" : "bg-slate-50"}`}>
                                <div className="font-semibold text-indigo-300">{ex.sentence}</div>
                                <div className="text-[11px] text-slate-400 italic">{ex.note}</div>
                              </div>
                            ))}
                            {rb.examTip && (
                              <div className={`mt-2 p-2.5 rounded-xl text-xs font-medium ${
                                isDark ? "bg-amber-950/40 border border-amber-500/30 text-amber-300" : "bg-amber-50 border border-amber-200 text-amber-900"
                              }`}>
                                ⚠️ <strong>Signal Words & Board Tip:</strong> {rb.examTip}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Step 5: Deadly Board Traps */}
              {tensesStage === "traps" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
                        Step 5: Board Exam Traps
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-rose-500">
                        <AlertTriangle className="w-6 h-6" />
                        <span>The 5 Deadly Board Exam Traps in Tenses</span>
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        Where 95% of students lose marks in Editing, Omission, and Gap-Filling.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedGrammarTopic.mistakeCards.map((m) => (
                        <div
                          key={m.id}
                          className={`p-5 rounded-2xl border ${
                            isDark ? "bg-slate-800/80 border-rose-500/20" : "bg-slate-50 border-slate-200 shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                              {m.trapType}
                            </span>
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              m.severity === "CRITICAL" ? "bg-rose-600 text-white" : "bg-amber-500 text-black"
                            }`}>
                              {m.severity} RISK
                            </span>
                          </div>

                          <div className="space-y-2 mb-3">
                            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium flex items-start gap-2">
                              <X className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>{m.incorrect}</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>{m.correct}</span>
                            </div>
                          </div>

                          <p className={`text-xs font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {m.ruleExplanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Interactive Board Drills */}
              {tensesStage === "practice" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border shadow-sm ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                        Step 6: Real CBSE Exam Testing
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-indigo-400">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span>Interactive Tenses Board Exam Questions</span>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {selectedGrammarTopic.practiceExercises.map((ex, exIdx) => {
                        const isRevealed = grammarAnswerRevealed[ex.id];
                        return (
                          <div
                            key={ex.id}
                            className={`p-5 rounded-2xl border ${
                              isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-bold text-indigo-400">
                                {ex.boardYearTag || "CBSE Board Standard"}
                              </span>
                              <button
                                onClick={() => toggleGrammarAnswer(ex.id)}
                                className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                              >
                                {isRevealed ? "Hide Answer" : "Reveal Answer & Explanation"}
                              </button>
                            </div>

                            <p className="font-bold text-sm sm:text-base mb-2">
                              Q{exIdx + 1}. {ex.question}
                            </p>

                            {isRevealed && (
                              <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 animate-fade-in text-sm font-medium">
                                <div className="text-emerald-400 font-bold">
                                  ✅ Correct Answer: {ex.correctAnswer}
                                </div>
                                <div className="text-slate-400 text-xs">
                                  {ex.explanation}
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
          )}

          {/* =====================================================================
              SUB-VIEW B: SUBJECT-VERB CONCORD (MASTER RULE DECK: RULES 1–20)
              ===================================================================== */}
          {selectedGrammarTopic.id === "grammar-concord" && (
            <div className="space-y-6">
              {/* Mode Switcher Header */}
              <div className={`p-5 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-400">
                      Official CBSE Class 10 Syllabus
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      All 20 PPT Rules
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Subject-Verb Concord Master Rule Deck
                  </h3>
                  <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Zero optical illusion—spacious widescreen deck with toddler intuition, formulas, ❌ traps vs ✅ correct, and slide drills.
                  </p>
                </div>

                {/* View Mode Pills */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {[
                    { id: "focus", label: "✨ Focused Rule Card", desc: "1-by-1 Deep Dive" },
                    { id: "list", label: "📜 Full 20-Rule List", desc: "Vertical Reference" },
                    { id: "ppt-drill", label: "🎯 16 PPT Drills", desc: "Slide Test" }
                  ].map((m) => {
                    const isActive = concordViewMode === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setConcordViewMode(m.id as any)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          isActive
                            ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                            : isDark
                            ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* VIEW MODE 1: FOCUSED RULE DECK (ONE RULE AT A TIME) */}
              {concordViewMode === "focus" && (
                <div className="space-y-6 animate-fade-in">
                  {/* Rule Stepper Navigation Bar */}
                  <div className={`p-3 rounded-2xl border flex items-center gap-2 overflow-x-auto no-scrollbar ${
                    isDark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}>
                    {selectedGrammarTopic.ruleBlocks.map((rb, rIdx) => {
                      const isActive = activeConcordRuleIdx === rIdx;
                      return (
                        <button
                          key={rIdx}
                          onClick={() => setActiveConcordRuleIdx(rIdx)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                            isActive
                              ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                              : isDark
                              ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                              : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                          }`}
                        >
                          <span>R{rb.ruleNo || rIdx + 1}: </span>
                          <span className="font-medium">{rb.ruleTitle.split(":")[0].replace("Rule " + (rb.ruleNo || rIdx + 1), "").trim() || rb.ruleTitle.slice(0, 20)}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Featured Rule Card */}
                  {(() => {
                    const activeRule = selectedGrammarTopic.ruleBlocks[activeConcordRuleIdx] || selectedGrammarTopic.ruleBlocks[0];
                    const matchingPpt = PPT_PRACTICE_DRILL.find((p) => p.rule.includes("Rule " + (activeRule.ruleNo || (activeConcordRuleIdx + 1))));
                    const isQuickCheckRevealed = concordQuickCheckRevealed[activeConcordRuleIdx];

                    return (
                      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                      }`}>
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              Teacher PPT Rule {activeRule.ruleNo || activeConcordRuleIdx + 1} of {selectedGrammarTopic.ruleBlocks.length}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                              Official Class 10 Concord Rule
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              disabled={activeConcordRuleIdx === 0}
                              onClick={() => setActiveConcordRuleIdx((prev) => Math.max(0, prev - 1))}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold border disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 border-white/10 hover:bg-slate-700 cursor-pointer"
                            >
                              ← Prev Rule
                            </button>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              {activeConcordRuleIdx + 1} / {selectedGrammarTopic.ruleBlocks.length}
                            </span>
                            <button
                              disabled={activeConcordRuleIdx === selectedGrammarTopic.ruleBlocks.length - 1}
                              onClick={() => setActiveConcordRuleIdx((prev) => Math.min(selectedGrammarTopic.ruleBlocks.length - 1, prev + 1))}
                              className="px-3 py-1.5 rounded-xl text-xs font-bold border disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 border-white/10 hover:bg-slate-700 cursor-pointer"
                            >
                              Next Rule →
                            </button>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-black text-indigo-300 mb-4">
                          {activeRule.ruleTitle}
                        </h2>

                        {/* First Principles / Decision Logic */}
                        {(activeRule.whyItMatters || activeRule.howToDecide) && (
                          <div className={`p-4 sm:p-5 rounded-2xl border mb-5 ${
                            isDark ? "bg-indigo-950/40 border-indigo-500/30" : "bg-indigo-50 border-indigo-200"
                          }`}>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5">
                              <Lightbulb className="w-4 h-4 text-amber-400" />
                              <span>🍼 First Principles & Deciding Logic:</span>
                            </div>
                            {activeRule.whyItMatters && (
                              <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-2 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                <strong>Why It Matters:</strong> {activeRule.whyItMatters}
                              </p>
                            )}
                            {activeRule.howToDecide && (
                              <div className={`p-2.5 rounded-xl text-xs font-bold ${
                                isDark ? "bg-indigo-900/60 text-indigo-200" : "bg-white text-indigo-950 shadow-sm"
                              }`}>
                                🧠 <strong>Exam Decision Rule:</strong> {activeRule.howToDecide}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Official Plain-English Explanation */}
                        <div className="mb-5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            📜 Official Rule Explanation:
                          </h4>
                          <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                            {activeRule.plainEnglishExplanation}
                          </p>
                        </div>

                        {/* Golden Formula Box (Sky & Slate, NO Green!) */}
                        <div className={`p-4 sm:p-5 rounded-2xl border font-mono text-xs sm:text-sm font-bold mb-5 ${
                          isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border-indigo-200 text-indigo-950"
                        }`}>
                          <span className="text-slate-400 uppercase tracking-wider text-[11px] block mb-1">
                            📐 The Golden Concord Formula / Pattern:
                          </span>
                          <div className="leading-relaxed">{activeRule.formulaOrPattern}</div>
                        </div>

                        {/* Official CBSE Standard Rule */}
                        <div className={`p-4 rounded-2xl border mb-5 text-xs sm:text-sm font-medium ${
                          isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                        }`}>
                          <strong className="text-emerald-400 block mb-1">✅ Official CBSE Class 10 Rule:</strong>
                          <p className={isDark ? "text-slate-200" : "text-slate-700"}>{activeRule.officialRule}</p>
                        </div>

                        {/* Classroom PPT Drill Examples */}
                        <div className="space-y-2 mb-5 pt-3 border-t border-white/10">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            🎒 Official Classroom PPT Slide Examples:
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {activeRule.goldenExamples.map((ex, exIdx) => (
                              <div
                                key={exIdx}
                                className={`p-3.5 rounded-2xl border ${
                                  isDark ? "bg-slate-800/60 border-white/10" : "bg-slate-50 border-slate-200"
                                }`}
                              >
                                <div className="font-semibold text-indigo-300 text-xs sm:text-sm mb-1">{ex.sentence}</div>
                                <div className="text-slate-400 text-xs italic">{ex.note}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Teacher PPT Note / Exam Tip */}
                        {activeRule.examTip && (
                          <div className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium mb-5 ${
                            isDark ? "bg-amber-950/40 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                          }`}>
                            ⚠️ <strong>Teacher Classroom PPT Note:</strong> {activeRule.examTip}
                          </div>
                        )}

                        {/* Quick Rule Check (From Classroom PPT) */}
                        {matchingPpt && (
                          <div className={`p-4 sm:p-5 rounded-2xl border ${
                            isDark ? "bg-slate-950/60 border-indigo-500/40" : "bg-indigo-50/60 border-indigo-300"
                          }`}>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400">
                                ⚡ Quick Rule Check (PPT Slide Drill)
                              </span>
                              <button
                                onClick={() => setConcordQuickCheckRevealed((prev) => ({ ...prev, [activeConcordRuleIdx]: !prev[activeConcordRuleIdx] }))}
                                className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                              >
                                {isQuickCheckRevealed ? "Hide Answer" : "Check Answer"}
                              </button>
                            </div>
                            <p className="font-bold text-sm sm:text-base mb-1">{matchingPpt.q}</p>
                            {isQuickCheckRevealed && (
                              <div className="mt-2 pt-2 border-t border-white/10 animate-fade-in text-xs sm:text-sm">
                                <span className="text-emerald-400 font-black">
                                  ✅ Correct Verb: {matchingPpt.ans}
                                </span>
                                <span className="text-slate-400 ml-2">({matchingPpt.rule})</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Bottom Navigation */}
                        <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/10">
                          <button
                            disabled={activeConcordRuleIdx === 0}
                            onClick={() => setActiveConcordRuleIdx((prev) => Math.max(0, prev - 1))}
                            className="px-4 py-2 rounded-xl text-xs font-bold border disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 border-white/10 hover:bg-slate-700 cursor-pointer"
                          >
                            ← Previous Rule
                          </button>
                          <span className="text-xs font-semibold text-slate-400">
                            Rule {activeConcordRuleIdx + 1} of {selectedGrammarTopic.ruleBlocks.length}
                          </span>
                          <button
                            disabled={activeConcordRuleIdx === selectedGrammarTopic.ruleBlocks.length - 1}
                            onClick={() => setActiveConcordRuleIdx((prev) => Math.min(selectedGrammarTopic.ruleBlocks.length - 1, prev + 1))}
                            className="px-4 py-2 rounded-xl text-xs font-bold border disabled:opacity-30 disabled:cursor-not-allowed bg-slate-800 border-white/10 hover:bg-slate-700 cursor-pointer"
                          >
                            Next Rule →
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* VIEW MODE 2: FULL VERTICAL 20-RULE REFERENCE (SINGLE COLUMN, NO SIDESIDE ILLUSION!) */}
              {concordViewMode === "list" && (
                <div className="space-y-5 animate-fade-in">
                  {selectedGrammarTopic.ruleBlocks.map((rb, rIdx) => (
                    <div
                      key={rIdx}
                      className={`p-6 sm:p-7 rounded-3xl border ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                          Teacher PPT Rule {rb.ruleNo || rIdx + 1}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          Official Class 10 Rule
                        </span>
                      </div>

                      <h4 className="font-black text-lg text-indigo-400 mb-2">
                        {rb.ruleTitle}
                      </h4>

                      <p className={`text-xs sm:text-sm mb-3 font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {rb.plainEnglishExplanation}
                      </p>

                      <div className={`p-3.5 rounded-xl border font-mono text-xs font-bold mb-3.5 ${
                        isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border-indigo-200 text-indigo-950"
                      }`}>
                        <strong>Formula:</strong> {rb.formulaOrPattern}
                      </div>

                      {rb.howToDecide && (
                        <div className={`p-2.5 rounded-xl text-xs font-semibold mb-3 ${
                          isDark ? "bg-indigo-950/40 border border-indigo-500/20 text-indigo-300" : "bg-indigo-50 border border-indigo-200 text-indigo-950"
                        }`}>
                          🧠 <strong>Exam Decision Rule:</strong> {rb.howToDecide}
                        </div>
                      )}

                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        <span className="text-[11px] font-bold uppercase text-slate-400 block">
                          Classroom PPT Examples:
                        </span>
                        {rb.goldenExamples.map((ex, exIdx) => (
                          <div key={exIdx} className={`p-2.5 rounded-xl text-xs font-medium ${isDark ? "bg-slate-800/60" : "bg-slate-50"}`}>
                            <div className="text-indigo-300 font-semibold">{ex.sentence}</div>
                            <div className="text-slate-400 text-[11px] italic mt-0.5">{ex.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* VIEW MODE 3: 16 TEACHER PPT PRACTICE DRILLS */}
              {concordViewMode === "ppt-drill" && (
                <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg animate-fade-in ${
                  isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                        Direct From Official Classroom PPT (Subject_Verb_Agreement_Class_X.pptx)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-indigo-400">
                        Official 16-Question Subject-Verb Concord Drill
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        These 16 sentences come directly from the teacher's classroom slides with the complete answer key.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PPT_PRACTICE_DRILL.map((item, idx) => {
                      const isRevealed = pptAnswersRevealed[idx];
                      return (
                        <div
                          key={idx}
                          className={`p-5 rounded-2xl border transition-all ${
                            isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400">
                              PPT Slide Question #{idx + 1}
                            </span>
                            <button
                              onClick={() => togglePptAnswer(idx)}
                              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                            >
                              {isRevealed ? "Hide Answer" : "Check Answer"}
                            </button>
                          </div>

                          <p className="font-bold text-sm sm:text-base mb-2">{item.q}</p>

                          {isRevealed && (
                            <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 animate-fade-in text-xs sm:text-sm">
                              <div className="text-emerald-400 font-black">
                                ✅ Correct Verb: <span className="underline">{item.ans}</span>
                              </div>
                              <div className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                                💡 <strong>Teacher PPT Rule:</strong> {item.rule}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =====================================================================
              SUB-VIEW C: MODALS (0-TO-100% BOARD MASTERCLASS)
              ===================================================================== */}
          {selectedGrammarTopic.id === "grammar-modals" && (
            <div className="space-y-6">
              {/* Modals Stage Navigator Pills */}
              <div className={`p-3 rounded-2xl border flex items-center gap-2 overflow-x-auto no-scrollbar ${
                isDark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                {[
                  { id: "basics", label: "🚀 Step 1: Ground Zero & 3 Laws", icon: Lightbulb },
                  { id: "categories", label: "🎭 Step 2: 5 Intent Categories (8 Rules)", icon: Layers },
                  { id: "traps", label: "⚠️ Step 3: 8 Deadly Board Traps", icon: AlertTriangle },
                  { id: "practice", label: "🎯 Step 4: 15 Board Drills", icon: Target }
                ].map((st) => {
                  const isActive = modalsStage === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setModalsStage(st.id as any)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      <st.icon className="w-3.5 h-3.5" />
                      <span>{st.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step 1: Ground Zero & The 3 Inflexible Laws */}
              {modalsStage === "basics" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-gradient-to-br from-indigo-950/60 via-slate-900 to-indigo-950/30 border-indigo-500/40 text-white" : "bg-gradient-to-br from-indigo-50 via-white to-sky-50 border-indigo-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl p-2.5 rounded-2xl bg-indigo-500/20">🎛️</span>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                          Step 1: Ground Zero Concept (Assume Zero Prior Knowledge)
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-indigo-300">
                          What is a Modal? (The Tone & Dimmer Switch of Language)
                        </h3>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed font-medium mb-4 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                      {selectedGrammarTopic.zeroKnowledgeIntro.whatIsIt}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
                        <h4 className="font-bold text-sm text-indigo-400 mb-2">
                          💡 The Light Dimmer Switch Analogy
                        </h4>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {selectedGrammarTopic.zeroKnowledgeIntro.concreteAnalogy}
                        </p>
                      </div>

                      <div className={`p-5 rounded-2xl border ${isDark ? "bg-slate-800/80 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
                        <h4 className="font-bold text-sm text-sky-400 mb-2">
                          🧭 The 5 Core Intentions
                        </h4>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          {selectedGrammarTopic.zeroKnowledgeIntro.coreMentalModel}
                        </p>
                      </div>
                    </div>

                    {/* The 3 Inflexible Laws of Modals */}
                    <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block">
                        ⚖️ The 3 Inflexible Laws of Modals (Never Break These!):
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        <div className={`p-4 rounded-2xl border ${isDark ? "bg-slate-900/90 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                          <span className="text-xs font-black text-rose-400 block mb-1">LAW 1: Never Change Form</span>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            Modals NEVER add -s, -ed, or -ing. "He can sings", "musted", or "shoulding" are 100% illegal in English.
                          </p>
                        </div>
                        <div className={`p-4 rounded-2xl border ${isDark ? "bg-slate-900/90 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                          <span className="text-xs font-black text-sky-400 block mb-1">LAW 2: Always Bare Infinitive (V1)</span>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            Always followed by base V1. Never "must to go" or "can went". Always: modal + pure base verb.
                          </p>
                        </div>
                        <div className={`p-4 rounded-2xl border ${isDark ? "bg-slate-900/90 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                          <span className="text-xs font-black text-indigo-400 block mb-1">LAW 3: Defective Verbs</span>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            Modals cannot stand alone as the main action. They always need a companion main verb to complete meaning.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setModalsStage("categories")}
                        className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs cursor-pointer hover:bg-indigo-500"
                      >
                        Explore 5 Intent Categories →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: 5 Intent Categories (8 Rules) */}
              {modalsStage === "categories" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {selectedGrammarTopic.ruleBlocks.map((rb, rIdx) => (
                      <div
                        key={rIdx}
                        className={`p-6 rounded-3xl border flex flex-col justify-between transition-all ${
                          isDark
                            ? "bg-slate-900 border-white/10 hover:border-indigo-500/50 shadow-md"
                            : "bg-white border-slate-200 text-slate-900 shadow-sm hover:shadow-md"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              Rule {rb.ruleNo || rIdx + 1}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                              Class 10 Modals
                            </span>
                          </div>

                          <h4 className="font-black text-lg text-indigo-400 mb-2">
                            {rb.ruleTitle}
                          </h4>

                          <p className={`text-xs sm:text-sm mb-3 font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {rb.plainEnglishExplanation}
                          </p>

                          <div className={`p-3.5 rounded-xl border font-mono text-xs font-bold mb-3 ${
                            isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border-indigo-200 text-indigo-950"
                          }`}>
                            <strong>Formula:</strong> {rb.formulaOrPattern}
                          </div>
                        </div>

                        <div className="space-y-2 pt-3 border-t border-white/10">
                          <span className="text-[11px] font-bold uppercase text-slate-400 block">
                            Board Exemplars:
                          </span>
                          {rb.goldenExamples.map((ex, exIdx) => (
                            <div key={exIdx} className={`p-2.5 rounded-xl text-xs ${isDark ? "bg-slate-800/60" : "bg-slate-50"}`}>
                              <div className="font-semibold text-indigo-300">{ex.sentence}</div>
                              <div className="text-[11px] text-slate-400 italic">{ex.note}</div>
                            </div>
                          ))}
                          {rb.examTip && (
                            <div className={`mt-2 p-2.5 rounded-xl text-xs font-medium ${
                              isDark ? "bg-amber-950/40 border border-amber-500/30 text-amber-300" : "bg-amber-50 border border-amber-200 text-amber-900"
                            }`}>
                              ⚠️ <strong>Board Scoring Tip:</strong> {rb.examTip}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: 8 Deadly Board Traps */}
              {modalsStage === "traps" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
                        Step 3: Board Exam Pitfalls
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-rose-500">
                        <AlertTriangle className="w-6 h-6" />
                        <span>The 8 Deadly Board Traps in Modals</span>
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        Frequent point loss in Error Correction, Editing, and Dialogue Completion.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedGrammarTopic.mistakeCards.map((m) => (
                        <div
                          key={m.id}
                          className={`p-5 rounded-2xl border ${
                            isDark ? "bg-slate-800/80 border-rose-500/20" : "bg-slate-50 border-slate-200 shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                              {m.trapType}
                            </span>
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              m.severity === "CRITICAL" ? "bg-rose-600 text-white" : "bg-amber-500 text-black"
                            }`}>
                              {m.severity} RISK
                            </span>
                          </div>

                          <div className="space-y-2 mb-3">
                            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium flex items-start gap-2">
                              <X className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>{m.incorrect}</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 shrink-0" />
                              <span>{m.correct}</span>
                            </div>
                          </div>

                          <p className={`text-xs font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {m.ruleExplanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: 15 Board Drills */}
              {modalsStage === "practice" && (
                <div className="space-y-6 animate-fade-in">
                  <div className={`p-6 sm:p-8 rounded-3xl border shadow-sm ${
                    isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                  }`}>
                    <div className="mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                        Step 4: Real Board Exam Testing
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-indigo-400">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span>Interactive Modals Board Exam Drills ({selectedGrammarTopic.practiceExercises.length} Qs)</span>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {selectedGrammarTopic.practiceExercises.map((ex, exIdx) => {
                        const isRevealed = grammarAnswerRevealed[ex.id];
                        return (
                          <div
                            key={ex.id}
                            className={`p-5 rounded-2xl border ${
                              isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-bold text-indigo-400">
                                {ex.boardYearTag || "CBSE Board Standard"}
                              </span>
                              <button
                                onClick={() => toggleGrammarAnswer(ex.id)}
                                className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                              >
                                {isRevealed ? "Hide Answer" : "Reveal Answer & Explanation"}
                              </button>
                            </div>

                            <p className="font-bold text-sm sm:text-base mb-2">
                              Q{exIdx + 1}. {ex.question}
                            </p>

                            {isRevealed && (
                              <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 animate-fade-in text-sm font-medium">
                                <div className="text-emerald-400 font-bold">
                                  ✅ Correct Answer: {ex.correctAnswer}
                                </div>
                                <div className="text-slate-400 text-xs">
                                  {ex.explanation}
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
          )}

          {/* =====================================================================
              SUB-VIEW D: REPORTED SPEECH 0-TO-100% MASTER RULE DECK
              ===================================================================== */}
          {selectedGrammarTopic.id === "grammar-speech" && (
            <div className="space-y-6 animate-fade-in">
              {/* Toddler & Foundations Hook */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border ${
                  isDark
                    ? "bg-gradient-to-br from-indigo-950/60 via-slate-900 to-indigo-950/40 border-indigo-500/30 text-white"
                    : "bg-gradient-to-br from-indigo-50 via-white to-sky-50 border-indigo-200 text-slate-900 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl p-2 rounded-2xl bg-indigo-500/20">{selectedGrammarTopic.emoji}</span>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                      Direct to Indirect Masterclass • 0 to 100%
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-indigo-300">
                      {selectedGrammarTopic.toddlerAnalogy.hook}
                    </h4>
                  </div>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-medium mb-3 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  {selectedGrammarTopic.zeroKnowledgeIntro.concreteAnalogy}
                </p>
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium space-y-1.5 ${
                  isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50 border-indigo-200 text-indigo-950"
                }`}>
                  <div className="font-bold text-indigo-400">⚡ The 3 Inflexible Shifts of Indirect Speech:</div>
                  <div>1. <strong>Pronoun Shift (The SON Rule):</strong> 1st Person → Subject, 2nd Person → Object, 3rd Person → No Change.</div>
                  <div>2. <strong>Tense Backshift Ladder:</strong> V1 → V2 | is/am/are → was/were | has/have → had | V2 → had + V3 | will → would | can → could.</div>
                  <div>3. <strong>Time & Place Shift:</strong> today → that day | tomorrow → the next day | yesterday → the day before | here → there | now → then.</div>
                  <div className="text-amber-400 font-bold pt-1">⭐ The Golden Immunity: Universal Truths & Scientific Laws NEVER change tense!</div>
                </div>
              </div>

              {/* Mode Switcher Header */}
              <div className={`p-5 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-400">
                      Official CBSE Class 10 Syllabus
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      10 Master Transformation Rules
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Reported Speech Master Rule Deck
                  </h3>
                  <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Statements, questions, commands, requests, negative prohibitions, exclamations, and dialogue conversions.
                  </p>
                </div>

                {/* View Mode Pills */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {[
                    { id: "focus", label: "✨ Focused Rule Deck", desc: "1-by-1 Deep Dive" },
                    { id: "list", label: "📜 Full 10-Rule List", desc: "Vertical Reference" },
                    { id: "dialogues", label: "💬 5 CBSE Dialogues", desc: "4-Mark Board Extracts" }
                  ].map((m) => {
                    const isActive = speechViewMode === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setSpeechViewMode(m.id as any)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          isActive
                            ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                            : isDark
                            ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* VIEW MODE 1: FOCUSED RULE DECK */}
              {speechViewMode === "focus" && (
                <div className="space-y-6 animate-fade-in">
                  {/* Stepper Navigation */}
                  <div className={`p-3 rounded-2xl border flex items-center gap-2 overflow-x-auto no-scrollbar ${
                    isDark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}>
                    {selectedGrammarTopic.ruleBlocks.map((rb, rIdx) => {
                      const isActive = activeSpeechRuleIdx === rIdx;
                      return (
                        <button
                          key={rIdx}
                          onClick={() => setActiveSpeechRuleIdx(rIdx)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                            isActive
                              ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                              : isDark
                              ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                              : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                          }`}
                        >
                          <span>R{rb.ruleNo || rIdx + 1}: </span>
                          <span className="font-medium">{rb.ruleTitle.split("(")[0].trim()}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Featured Rule Card */}
                  {(() => {
                    const activeRule = selectedGrammarTopic.ruleBlocks[activeSpeechRuleIdx] || selectedGrammarTopic.ruleBlocks[0];
                    const isQuickCheckRevealed = speechQuickCheckRevealed[activeSpeechRuleIdx];

                    return (
                      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                      }`}>
                        {/* Card Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                              Reported Speech Rule {activeRule.ruleNo || activeSpeechRuleIdx + 1} of {selectedGrammarTopic.ruleBlocks.length}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                              CBSE Board Standard
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              disabled={activeSpeechRuleIdx === 0}
                              onClick={() => setActiveSpeechRuleIdx((prev) => Math.max(0, prev - 1))}
                              className="px-3 py-1 text-xs font-bold rounded-xl border border-white/10 hover:bg-slate-800 disabled:opacity-30 cursor-pointer"
                            >
                              ← Prev Rule
                            </button>
                            <button
                              disabled={activeSpeechRuleIdx === selectedGrammarTopic.ruleBlocks.length - 1}
                              onClick={() => setActiveSpeechRuleIdx((prev) => Math.min(selectedGrammarTopic.ruleBlocks.length - 1, prev + 1))}
                              className="px-3 py-1 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-30 cursor-pointer"
                            >
                              Next Rule →
                            </button>
                          </div>
                        </div>

                        {/* Title & Intuition */}
                        <div className="space-y-2 mb-5">
                          <h4 className="text-xl sm:text-2xl font-black text-indigo-400 flex items-center gap-2">
                            <span>{activeRule.ruleTitle}</span>
                          </h4>
                          <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                            {activeRule.plainEnglishExplanation}
                          </p>
                        </div>

                        {/* Official CBSE Rule Statement */}
                        <div className={`p-4 rounded-2xl border mb-5 ${
                          isDark ? "bg-slate-950/60 border-indigo-500/20 text-slate-300" : "bg-indigo-50/50 border-indigo-100 text-slate-800"
                        }`}>
                          <span className="text-xs font-black uppercase tracking-wider text-indigo-400 block mb-1">
                            Official CBSE Formulation:
                          </span>
                          <p className="text-xs sm:text-sm italic font-medium leading-relaxed">
                            "{activeRule.officialRule}"
                          </p>
                        </div>

                        {/* Formula Bar in Sleek Slate/Sky */}
                        <div className={`p-4 rounded-2xl border mb-6 font-mono text-xs sm:text-sm font-bold shadow-inner ${
                          isDark ? "bg-slate-950 border-indigo-500/40 text-sky-300" : "bg-indigo-50 border-indigo-300 text-indigo-950"
                        }`}>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-1 font-sans">
                            ⚡ Master Transformation Formula:
                          </div>
                          <div className="leading-relaxed">{activeRule.formulaOrPattern}</div>
                        </div>

                        {/* Golden Board Examples */}
                        <div className="space-y-3 mb-6">
                          <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                            Golden Board Exemplars:
                          </span>
                          <div className="space-y-2.5">
                            {activeRule.goldenExamples.map((ex, exIdx) => (
                              <div
                                key={exIdx}
                                className={`p-3.5 rounded-xl border text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                                  isDark ? "bg-slate-800/80 border-white/10" : "bg-slate-50 border-slate-200"
                                }`}
                              >
                                <div className="font-semibold text-sky-200">
                                  {ex.sentence}
                                </div>
                                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium shrink-0">
                                  {ex.note}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Exam Tip */}
                        {activeRule.examTip && (
                          <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium mb-6 ${
                            isDark ? "bg-amber-950/40 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                          }`}>
                            <strong>💡 Examiner Secret Tip:</strong> {activeRule.examTip}
                          </div>
                        )}

                        {/* Quick Rule Check */}
                        <div className={`p-5 rounded-2xl border ${
                          isDark ? "bg-slate-950/80 border-indigo-500/30" : "bg-slate-50 border-slate-200"
                        }`}>
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span className="text-xs font-black uppercase tracking-wider text-indigo-400">
                              Quick Rule Check
                            </span>
                            <button
                              onClick={() => setSpeechQuickCheckRevealed((prev) => ({ ...prev, [activeSpeechRuleIdx]: !prev[activeSpeechRuleIdx] }))}
                              className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                            >
                              {isQuickCheckRevealed ? "Hide Answer" : "Check Your Answer"}
                            </button>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold mb-2">
                            Convert: {activeRule.goldenExamples[0]?.sentence.split("→")[0] || "He said, 'I work hard.'"}
                          </p>
                          {isQuickCheckRevealed && (
                            <div className="pt-2 border-t border-white/10 text-xs sm:text-sm text-emerald-400 font-bold animate-fade-in">
                              ✅ {activeRule.goldenExamples[0]?.sentence.split("→")[1] || "He said that he worked hard."}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* VIEW MODE 2: FULL 10-RULE VERTICAL LIST */}
              {speechViewMode === "list" && (
                <div className="space-y-4 animate-fade-in">
                  {selectedGrammarTopic.ruleBlocks.map((rb, rIdx) => (
                    <div
                      key={rIdx}
                      className={`p-6 rounded-3xl border shadow-sm ${
                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">
                          Rule {rb.ruleNo || rIdx + 1}
                        </span>
                        <h4 className="font-bold text-base sm:text-lg text-indigo-300">{rb.ruleTitle}</h4>
                      </div>
                      <p className={`text-xs sm:text-sm mb-3 font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {rb.plainEnglishExplanation}
                      </p>
                      <div className={`p-3.5 rounded-xl border font-mono text-xs mb-3.5 ${
                        isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50/80 border-indigo-200 text-indigo-950"
                      }`}>
                        {rb.formulaOrPattern}
                      </div>
                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        <span className="text-[11px] font-bold uppercase text-slate-400">Golden Board Exemplars:</span>
                        {rb.goldenExamples.map((ex, exIdx) => (
                          <div key={exIdx} className="text-xs font-medium flex items-center justify-between gap-2">
                            <span className="text-slate-200 font-semibold">{ex.sentence}</span>
                            <span className="text-slate-400 text-[11px] italic shrink-0">{ex.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* VIEW MODE 3: 5 CBSE 4-MARK DIALOGUES */}
              {speechViewMode === "dialogues" && (
                <div className="space-y-5 animate-fade-in">
                  <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-semibold ${
                    isDark ? "bg-indigo-950/40 border-indigo-500/30 text-indigo-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
                  }`}>
                    💡 <strong>CBSE Board Dialogue Pattern:</strong> In Question 4 of Section B (Grammar), you are given a 2-person dialogue and a reporting paragraph with blanks (a) and (b). Practice below with instant reveals!
                  </div>

                  {selectedGrammarTopic.practiceExercises.filter((e) => e.type === "dialogue-completion").map((dia, dIdx) => {
                    const isRevealed = dialogueAnswersRevealed[dia.id];
                    return (
                      <div
                        key={dia.id}
                        className={`p-6 sm:p-7 rounded-3xl border shadow-lg ${
                          isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                            Dialogue Extract #{dIdx + 1}
                          </span>
                          <span className="text-xs font-bold text-amber-400">
                            {dia.boardYearTag}
                          </span>
                        </div>

                        {/* Dialogue Prompt */}
                        <div className={`p-4 rounded-2xl border font-mono text-xs sm:text-sm whitespace-pre-line leading-relaxed mb-4 ${
                          isDark ? "bg-slate-950 border-white/10 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
                        }`}>
                          {dia.question}
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() => setDialogueAnswersRevealed((prev) => ({ ...prev, [dia.id]: !prev[dia.id] }))}
                            className="px-4 py-2 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer shadow-md"
                          >
                            {isRevealed ? "Hide Model Completion" : "Reveal Board Model Completion"}
                          </button>
                        </div>

                        {/* Revealed Solution */}
                        {isRevealed && (
                          <div className={`mt-4 p-4 rounded-2xl border space-y-2 animate-fade-in ${
                            isDark ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200" : "bg-emerald-50 border-emerald-200 text-emerald-900"
                          }`}>
                            <div className="font-bold text-xs sm:text-sm">
                              ✅ Board Model Answer:
                            </div>
                            <div className="font-mono text-xs sm:text-sm font-semibold whitespace-pre-line">
                              {dia.correctAnswer}
                            </div>
                            <div className="text-xs opacity-90 pt-1 border-t border-emerald-500/20">
                              <strong>Examiner Breakdown:</strong> {dia.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 8 Common Board Traps Section */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-black text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span>8 Board Traps & Common Mistakes in Reported Speech</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedGrammarTopic.mistakeCards.map((m) => (
                    <div
                      key={m.id}
                      className={`p-5 rounded-2xl border space-y-2.5 ${
                        isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                          {m.trapType}
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400">
                          {m.severity}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                        ❌ {m.incorrect}
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                        ✅ {m.correct}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {m.ruleExplanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fallback for other grammar topics */}
          {selectedGrammarTopic.id !== "grammar-tenses" && selectedGrammarTopic.id !== "grammar-concord" && selectedGrammarTopic.id !== "grammar-modals" && selectedGrammarTopic.id !== "grammar-speech" && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl border bg-slate-900 border-white/10 text-white">
                <h4 className="font-bold text-lg text-indigo-400 mb-2">{selectedGrammarTopic.title}</h4>
                <p className="text-sm text-slate-300">{selectedGrammarTopic.shortTagline}</p>
              </div>
            </div>
          )}


              </div>
      )}

      {/* =========================================================================
          TAB 4: DEDICATED QUESTION BANK & PRACTICE ARENA (200+ QUESTIONS)
          ========================================================================= */}
      {activeTab === "practice" && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
            isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                  Comprehensive CBSE Question Vault
                </span>
                <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2">
                  <Target className="w-7 h-7 text-emerald-400" />
                  <span>Interactive Board Practice Arena</span>
                </h2>
                <p className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  All 8 Test Series 1 Footprints chapters (10+ Qs each), 17 WhatsApp worksheet questions, poetry extracts, and PPT grammar drills.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                  {filteredPracticeQuestions.length} Questions Displayed
                </span>
              </div>
            </div>

            {/* Scope Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {[
                { id: "TS1", label: "⭐ Test Series 1 Priority (Footprints Ch 1–8)" },
                { id: "GRAMMAR", label: "⚡ Dedicated Grammar Clinic (90+ Qs across 4 Topics)" },
                { id: "WORKSHEET", label: "📸 Official Teacher WhatsApp Worksheets (17 Qs)" },
                { id: "ALL", label: "All Questions Vault" },
                { id: "FIRST_FLIGHT", label: "First Flight Prose" },
                { id: "POETRY", label: "Poetry Questions" }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setPracticeScope(s.id as any); setPracticeDisplayCount(10); }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    practiceScope === s.id
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                      : isDark
                      ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Marks & Type Filter + Search */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
                {[
                  { id: "ALL", label: "All Types" },
                  { id: "MCQ", label: "1M MCQs" },
                  { id: "SAQ", label: "3M SAQs" },
                  { id: "LAQ", label: "6M LAQs" }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { setPracticeTypeFilter(t.id as any); setPracticeDisplayCount(10); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      practiceTypeFilter === t.id
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-sm"
                        : isDark
                        ? "bg-slate-800 text-slate-400 border-white/10 hover:bg-slate-700"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by keyword (e.g. Tricki, Ausable, Bholi)..."
                  value={practiceSearch}
                  onChange={(e) => setPracticeSearch(e.target.value)}
                  className={`w-full pl-9 pr-3 py-1.5 rounded-xl text-xs font-medium border outline-none transition-all ${
                    isDark
                      ? "bg-slate-800 border-white/10 text-white placeholder-slate-400 focus:border-indigo-500"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Questions Stream */}
          <div className="space-y-4">
            {filteredPracticeQuestions.length === 0 ? (
              <div className={`p-12 text-center rounded-3xl border ${
                isDark ? "bg-slate-900 border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-600"
              }`}>
                <Target className="w-12 h-12 mx-auto mb-3 text-slate-500 opacity-50" />
                <h4 className="font-bold text-lg mb-1">No questions match your current filter.</h4>
                <p className="text-xs">Try switching filters or clearing your search term.</p>
              </div>
            ) : (
              <>
              {filteredPracticeQuestions.slice(0, practiceDisplayCount).map((q, idx) => {
                const isRevealed = revealedPracticeAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-3xl border transition-all shadow-sm ${
                      q.isWorksheet
                        ? isDark
                          ? "bg-indigo-950/40 border-indigo-500/40 hover:border-indigo-400"
                          : "bg-indigo-50/80 border-indigo-300 hover:border-indigo-400"
                        : isDark
                        ? "bg-slate-900 border-white/10 hover:border-white/20"
                        : "bg-white border-slate-200 hover:border-indigo-200"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                          {q.chapterTitle}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                          {q.type} • {q.marks} Mark{q.marks > 1 ? "s" : ""}
                        </span>
                        {q.isWorksheet && (
                          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            📸 Official WhatsApp Worksheet Question
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => togglePracticeAnswer(q.id)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isRevealed
                            ? "bg-slate-700 text-slate-200"
                            : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm"
                        }`}
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? "Hide Answer" : "Reveal Answer"}</span>
                      </button>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base leading-snug mb-3">
                      Q{idx + 1}. {q.question}
                    </h3>

                    {isRevealed && (
                      <div className={`mt-4 pt-4 border-t border-white/10 space-y-3 animate-fade-in ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}>
                        <div>
                          <span className="text-xs font-extrabold uppercase text-emerald-400 block mb-1">
                            CBSE Scoring Model Answer ({q.marks} Marks):
                          </span>
                          <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
                            {q.modelAnswer}
                          </p>
                        </div>

                        {q.keyKeywords && q.keyKeywords.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                            <span className="text-[11px] font-bold text-slate-400">Essential Keywords:</span>
                            {q.keyKeywords.map((kw, kwIdx) => (
                              <span
                                key={kwIdx}
                                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              >
                                ✓ {kw}
                              </span>
                            ))}
                          </div>
                        )}

                        {q.examinerRubricTip && (
                          <div className={`p-3 rounded-2xl border text-xs font-medium ${
                            isDark ? "bg-slate-800/80 border-white/10 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                          }`}>
                            🎯 <strong>Examiner Rubric Tip:</strong> {q.examinerRubricTip}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {practiceDisplayCount < filteredPracticeQuestions.length && (
                <div className="flex flex-col items-center gap-2 pt-4">
                  <p className={`text-xs font-mono ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                    Showing {Math.min(practiceDisplayCount, filteredPracticeQuestions.length)} of {filteredPracticeQuestions.length} questions
                  </p>
                  <button
                    onClick={() => setPracticeDisplayCount(c => c + 10)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 cursor-pointer transition-all ${
                      isDark
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                    }`}
                  >
                    ↓ Load 10 More Questions
                  </button>
                </div>
              )}
              </>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: WRITING LAB
          ========================================================================= */}
      {activeTab === "writing" && (
        <div className="space-y-8 animate-fade-in">
          {/* Top Writing Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
            isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
                  CBSE Class 10 Section B (10 Marks Total)
                </span>
                <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2">
                  <Feather className="w-7 h-7 text-indigo-400" />
                  <span>Writing Skills Master Studio</span>
                </h2>
                <p className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  Exhaustive format skeletons, official 5-mark marking rubrics, golden opening/closing lines, and full exemplar models.
                </p>
              </div>

              {/* Format Switcher Pills */}
              <div className="flex items-center gap-2 shrink-0">
                {[
                  { id: "formal-letter", label: "📜 Formal Letters (5M)", icon: Mail },
                  { id: "analytical-paragraph", label: "📊 Analytical Paragraph (5M)", icon: BarChart3 }
                ].map((f) => {
                  const isActive = selectedWritingType === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        setSelectedWritingType(f.id as any);
                        setSelectedWritingSampleId(f.id === "formal-letter" ? "fl-sample-editor-1" : "ap-sample-1");
                        setWritingSubtypeFilter("all");
                      }}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      <f.icon className="w-4 h-4" />
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Marking Rubric Notice */}
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium ${
              isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50 border-indigo-200 text-indigo-950"
            }`}>
              <strong>📋 Official CBSE 5-Mark Distribution:</strong> Format = 1 Mark (All 9 sections in left-aligned block style) • Content = 2 Marks (Ideas, cause & effect, specific details) • Expression = 2 Marks (1M Grammatical accuracy & spelling + 1M Fluency, style & coherence). Word limit: 100–120 words.
            </div>
          </div>

          {/* VISUAL 9-PART CBSE FORMAT EXPLORER */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
            isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-black flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span>Interactive CBSE Format Blueprint ({selectedWritingGuide.formatSkeleton.length} Blocks)</span>
              </h3>
              <span className="text-xs font-bold text-indigo-400">Click any block to inspect examiner tips</span>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
              {selectedWritingGuide.formatSkeleton.map((fb, fIdx) => {
                const isActive = activeFormatStep === fIdx;
                return (
                  <button
                    key={fIdx}
                    onClick={() => setActiveFormatStep(fIdx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                        : isDark
                        ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {fb.sectionName}
                  </button>
                );
              })}
            </div>

            {/* Active Format Block Detail Card */}
            {(() => {
              const activeBlock = selectedWritingGuide.formatSkeleton[activeFormatStep] || selectedWritingGuide.formatSkeleton[0];
              return (
                <div className={`p-5 rounded-2xl border space-y-3 ${
                  isDark ? "bg-slate-950 border-indigo-500/30" : "bg-slate-50 border-indigo-100"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase text-indigo-400">
                      Component #{activeFormatStep + 1}: {activeBlock.sectionName}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      CBSE Standard Block Style
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {activeBlock.expectedContent}
                  </p>

                  <div className={`p-3 rounded-xl border font-mono text-xs whitespace-pre-line ${
                    isDark ? "bg-slate-900 border-white/10 text-sky-200" : "bg-white border-slate-200 text-slate-800"
                  }`}>
                    {activeBlock.sampleSnippet}
                  </div>

                  <div className={`p-3 rounded-xl border text-xs font-medium ${
                    isDark ? "bg-amber-950/40 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}>
                    <strong>💡 Examiner Secret Tip:</strong> {activeBlock.examinerTip}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* MODEL SAMPLES SHOWCASE STUDIO */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
            isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Board Exemplar Model Answers (5/5 Marks)
                </h3>
                <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Full official letters & analytical paragraphs with line-by-line examiner annotations.
                </p>
              </div>

              {/* Subtype Filter Pills (For Formal Letter) */}
              {selectedWritingType === "formal-letter" && (
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {[
                    { id: "all", label: "All (6)" },
                    { id: "editor", label: "📰 Editor (2)" },
                    { id: "complaint", label: "⚠️ Complaint (2)" },
                    { id: "enquiry", label: "❓ Enquiry (1)" },
                    { id: "order", label: "📦 Order (1)" }
                  ].map((sub) => {
                    const isActive = writingSubtypeFilter === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setWritingSubtypeFilter(sub.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition-all cursor-pointer ${
                          isActive
                            ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                            : isDark
                            ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Model Sample Selector */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
              {selectedWritingGuide.modelSamples
                .filter((s) => writingSubtypeFilter === "all" || s.letterSubtype === writingSubtypeFilter)
                .map((s) => {
                  const isSelected = selectedWritingSample.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedWritingSampleId(s.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                          : isDark
                          ? "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      {s.title}
                    </button>
                  );
                })}
            </div>

            {/* Active Sample Full Card */}
            {selectedWritingSample && (
              <div className={`p-6 sm:p-7 rounded-2xl border space-y-5 ${
                isDark ? "bg-slate-800/90 border-white/10" : "bg-slate-50 border-slate-200"
              }`}>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-400 block mb-1">
                      Prompt Question:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">
                      {selectedWritingSample.promptQuestion}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-700 text-slate-300">
                      {selectedWritingSample.wordCount} Words
                    </span>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      5/5 Board Exemplar
                    </span>
                  </div>
                </div>

                {/* Golden Opening Callout */}
                {selectedWritingSample.goldenOpeningLine && (
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                    isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
                  }`}>
                    <div className="font-extrabold uppercase text-indigo-400 text-[11px] mb-1">
                      ✨ Golden Opening Sentence (Ready-to-Use):
                    </div>
                    <p className="italic font-medium leading-relaxed">
                      "{selectedWritingSample.goldenOpeningLine}"
                    </p>
                  </div>
                )}

                {/* Tabular Data (If Order Letter) */}
                {selectedWritingSample.tabularData && (
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 block">
                      📋 Order Specification Table (Format Requirement):
                    </span>
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full text-xs text-left">
                        <thead className={`text-[11px] uppercase font-black ${
                          isDark ? "bg-slate-900 text-indigo-300" : "bg-indigo-100 text-indigo-950"
                        }`}>
                          <tr>
                            {selectedWritingSample.tabularData.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-2.5">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {selectedWritingSample.tabularData.rows.map((r, rIdx) => (
                            <tr key={rIdx} className={isDark ? "hover:bg-slate-900/50" : "hover:bg-slate-100"}>
                              {r.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2 font-medium">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Model Text */}
                <div className={`p-5 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line ${
                  isDark ? "bg-slate-950 border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800"
                }`}>
                  {selectedWritingSample.modelAnswerText}
                </div>

                {/* Golden Closing Callout */}
                {selectedWritingSample.goldenClosingLine && (
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                    isDark ? "bg-slate-950/80 border-indigo-500/30 text-sky-200" : "bg-indigo-50 border-indigo-200 text-indigo-900"
                  }`}>
                    <div className="font-extrabold uppercase text-indigo-400 text-[11px] mb-1">
                      🎯 Golden Closing & Action Sentence:
                    </div>
                    <p className="italic font-medium leading-relaxed">
                      "{selectedWritingSample.goldenClosingLine}"
                    </p>
                  </div>
                )}

                {/* Key Vocabulary Pills */}
                {selectedWritingSample.keyVocabularyUsed && selectedWritingSample.keyVocabularyUsed.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">High-Scoring Vocabulary:</span>
                    {selectedWritingSample.keyVocabularyUsed.map((v, vIdx) => (
                      <span
                        key={vIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 font-medium text-xs border border-indigo-500/30"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                )}

                {/* Examiner Annotations */}
                {selectedWritingSample.annotatedHighlights && selectedWritingSample.annotatedHighlights.length > 0 && (
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm font-medium space-y-2 ${
                    isDark ? "bg-amber-950/40 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}>
                    <span className="font-bold block">💡 Examiner Annotations & Scoring Tips:</span>
                    <div className="space-y-1.5">
                      {selectedWritingSample.annotatedHighlights.map((ann, aIdx) => (
                        <div key={aIdx} className="text-xs">
                          <strong>{ann.part}:</strong> {ann.comment}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* PRO VOCABULARY & PENALTY PITFALLS DRAWER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pro Vocabulary */}
            <div className={`p-6 rounded-3xl border shadow-lg ${
              isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
            }`}>
              <h4 className="text-base sm:text-lg font-black text-indigo-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>High-Scoring Expressions Bank</span>
              </h4>
              <div className="space-y-2.5">
                {selectedWritingGuide.proVocabulary.map((pv, pIdx) => (
                  <div
                    key={pIdx}
                    className={`p-3 rounded-xl border text-xs ${
                      isDark ? "bg-slate-800/70 border-white/10" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <strong className="text-sky-300 block mb-0.5">{pv.wordOrPhrase}</strong>
                    <span className="text-slate-300 font-medium">{pv.meaningAndUsage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Penalty Pitfalls */}
            <div className={`p-6 rounded-3xl border shadow-lg ${
              isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
            }`}>
              <h4 className="text-base sm:text-lg font-black text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Common Board Traps & Penalty Pitfalls</span>
              </h4>
              <div className="space-y-2.5">
                {selectedWritingGuide.commonPitfalls.map((pit, pIdx) => (
                  <div
                    key={pIdx}
                    className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                      isDark ? "bg-slate-800/70 border-white/10" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-amber-400">{pit.mistakeTitle}</strong>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400">
                        {pit.markDeduction}
                      </span>
                    </div>
                    <div className="p-1.5 rounded bg-rose-500/10 text-rose-300 font-medium text-[11px]">
                      ❌ {pit.wrongUsage}
                    </div>
                    <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-300 font-medium text-[11px]">
                      ✅ {pit.correctUsage}
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {pit.whyExaminerDeducts}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          TAB 6: MISTAKE NOTEBOOK
          ========================================================================= */}
      {activeTab === "mistakes" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-rose-500">
                <ShieldAlert className="w-6 h-6" />
                <span>Class 10 Board Mistake Prevention Notebook</span>
              </h2>
              <p className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Curated archive of common board slips, format blunders, and penalty risks.
              </p>
            </div>

            <button
              onClick={() => setShowAddMistakeModal(true)}
              className="px-4 py-2.5 rounded-2xl font-bold text-xs bg-rose-600 text-white hover:bg-rose-500 shadow-md flex items-center gap-2 self-start cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Log New Trap</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMistakes.map((m) => (
              <div
                key={m.id}
                className={`p-5 rounded-2xl border ${
                  isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400">
                    {m.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    {m.penalty}
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-3">{m.title}</h4>
                <div className="space-y-2 text-xs mb-3">
                  <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <strong>❌ Wrong:</strong> {m.wrong}
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <strong>✅ Correct:</strong> {m.correct}
                  </div>
                </div>
                <p className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  💡 {m.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
