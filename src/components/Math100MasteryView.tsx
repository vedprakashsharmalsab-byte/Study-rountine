"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  MATH_CHAPTERS,
  getChapterData,
  searchMathSystem,
  GradedQuestion,
  ConceptItem,
  FormulaItem,
  PYQItem,
  CommonMistakeItem,
  MistakeRecord,
  MathMasteryProgress,
  MIXED_CHAPTERS_1_TO_5_QUESTIONS
} from '@/data/mathMastery';
import {
  Calculator,
  Target,
  Award,
  CheckCircle2,
  AlertTriangle,
  Search,
  ArrowRight,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronDown,
  Layers,
  Lightbulb,
  TrendingUp,
  FileText,
  BrainCircuit,
  GraduationCap,
  ShieldCheck,
  Zap,
  BookmarkCheck,
  Check,
  Compass
} from 'lucide-react';

const PROGRESS_STORAGE_KEY = 'cbse_math_100_mastery_progress_v2';

const DEFAULT_PROGRESS: MathMasteryProgress = {
  learnedConcepts: {},
  memorizedFormulas: {},
  solvedQuestions: {},
  practicedPYQs: {},
  completedTests: {},
  mistakes: []
};

type ActiveTab =
  | 'dashboard'
  | 'concepts'
  | 'formulas'
  | 'practice'
  | 'pyqs'
  | 'mistakes'
  | 'tests'
  | 'mixed'
  | 'search';

export default function Math100MasteryView() {
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [progress, setProgress] = useState<MathMasteryProgress>(DEFAULT_PROGRESS);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive practice states
  const [selectedPracticeLevel, setSelectedPracticeLevel] = useState<number>(1);
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [answerFeedback, setAnswerFeedback] = useState<Record<string, 'correct' | 'incorrect'>>({});
  
  // Test states
  const [activeTestKey, setActiveTestKey] = useState<string | null>(null);
  const [testUserAnswers, setTestUserAnswers] = useState<Record<string, string>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [testScore, setTestScore] = useState<{ score: number; total: number } | null>(null);

  // Load progress from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch {
      // Ignore JSON error
    }
  }, []);

  // Save progress
  const saveProgress = (newProgress: MathMasteryProgress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(newProgress));
    } catch {
      // Ignore storage error
    }
  };

  const currentChapter = useMemo(() => {
    return getChapterData(selectedChapterNum) || MATH_CHAPTERS[0];
  }, [selectedChapterNum]);

  // Overall Statistics for Dashboard
  const stats = useMemo(() => {
    const allConcepts = MATH_CHAPTERS.flatMap(c => c.concepts);
    const allFormulas = MATH_CHAPTERS.flatMap(c => c.formulas);
    const allQuestions = MATH_CHAPTERS.flatMap(c => c.gradedQuestions);
    const allPYQs = MATH_CHAPTERS.flatMap(c => c.pyqs);

    const totalConcepts = allConcepts.length;
    const learnedConcepts = Object.values(progress.learnedConcepts).filter(Boolean).length;
    const conceptPercent = totalConcepts > 0 ? Math.round((learnedConcepts / totalConcepts) * 100) : 0;

    const totalFormulas = allFormulas.length;
    const memorizedFormulas = Object.values(progress.memorizedFormulas).filter(Boolean).length;
    const formulaPercent = totalFormulas > 0 ? Math.round((memorizedFormulas / totalFormulas) * 100) : 0;

    const totalPYQs = allPYQs.length;
    const practicedPYQs = Object.values(progress.practicedPYQs).filter(Boolean).length;
    const pyqPercent = totalPYQs > 0 ? Math.round((practicedPYQs / totalPYQs) * 100) : 0;

    const attemptedQuestions = Object.keys(progress.solvedQuestions).length;
    const correctQuestions = Object.values(progress.solvedQuestions).filter(s => s.correct).length;
    const accuracy = attemptedQuestions > 0 ? Math.round((correctQuestions / attemptedQuestions) * 100) : 0;

    // Readiness evaluation
    let readinessLabel = 'Foundation Stage';
    let readinessColor = 'text-amber-400';
    const overallScore = (conceptPercent * 0.3) + (formulaPercent * 0.25) + (pyqPercent * 0.25) + (accuracy * 0.2);

    if (overallScore >= 85) {
      readinessLabel = '100/100 Board Ready';
      readinessColor = 'text-emerald-400';
    } else if (overallScore >= 60) {
      readinessLabel = 'Strong Performance (85-95 Target)';
      readinessColor = 'text-cyan-400';
    } else if (overallScore >= 35) {
      readinessLabel = 'Developing Competence (70-85 Target)';
      readinessColor = 'text-blue-400';
    }

    return {
      totalConcepts,
      learnedConcepts,
      conceptPercent,
      totalFormulas,
      memorizedFormulas,
      formulaPercent,
      totalQuestions: allQuestions.length,
      attemptedQuestions,
      correctQuestions,
      accuracy,
      totalPYQs,
      practicedPYQs,
      pyqPercent,
      overallScore: Math.round(overallScore),
      readinessLabel,
      readinessColor,
      unresolvedMistakesCount: progress.mistakes.filter(m => !m.resolved).length
    };
  }, [progress]);

  // Concept toggle handler
  const toggleConceptLearned = (conceptId: string) => {
    const updated = {
      ...progress,
      learnedConcepts: {
        ...progress.learnedConcepts,
        [conceptId]: !progress.learnedConcepts[conceptId]
      }
    };
    saveProgress(updated);
  };

  // Formula toggle handler
  const toggleFormulaMemorized = (formulaId: string) => {
    const updated = {
      ...progress,
      memorizedFormulas: {
        ...progress.memorizedFormulas,
        [formulaId]: !progress.memorizedFormulas[formulaId]
      }
    };
    saveProgress(updated);
  };

  // PYQ toggle handler
  const togglePYQPracticed = (pyqId: string) => {
    const updated = {
      ...progress,
      practicedPYQs: {
        ...progress.practicedPYQs,
        [pyqId]: !progress.practicedPYQs[pyqId]
      }
    };
    saveProgress(updated);
  };

  // Answer submission handler for graded practice
  const handleCheckAnswer = (q: GradedQuestion) => {
    const given = (userAnswers[q.id] || '').trim();
    if (!given) return;

    const isMatch = given.toLowerCase() === q.correctAnswer.toLowerCase();
    setAnswerFeedback(prev => ({
      ...prev,
      [q.id]: isMatch ? 'correct' : 'incorrect'
    }));
    setRevealedSolutions(prev => ({ ...prev, [q.id]: true }));

    const updatedSolved = {
      ...progress.solvedQuestions,
      [q.id]: {
        correct: isMatch,
        attempts: ((progress.solvedQuestions[q.id]?.attempts) || 0) + 1,
        timestamp: Date.now()
      }
    };

    let updatedMistakes = [...progress.mistakes];
    if (!isMatch) {
      const alreadyLogged = updatedMistakes.some(m => m.questionId === q.id && !m.resolved);
      if (!alreadyLogged) {
        const newMistake: MistakeRecord = {
          id: `mistake_${Date.now()}_${q.id}`,
          questionId: q.id,
          chapterId: q.chapterId,
          questionText: q.question,
          studentAnswer: given,
          correctAnswer: q.correctAnswer,
          mistakeType: q.commonTrap || 'Conceptual / Calculation Error',
          conceptName: q.topic,
          explanation: q.solutionSteps.join(' '),
          correctedMethod: q.solutionSteps[0] || 'Carefully review the solution steps.',
          retryQuestion: q.question,
          retryAnswer: q.correctAnswer,
          timestamp: Date.now(),
          resolved: false
        };
        updatedMistakes.unshift(newMistake);
      }
    } else {
      updatedMistakes = updatedMistakes.map(m => m.questionId === q.id ? { ...m, resolved: true } : m);
    }

    saveProgress({
      ...progress,
      solvedQuestions: updatedSolved,
      mistakes: updatedMistakes
    });
  };

  // Resolve mistake handler
  const handleResolveMistake = (mistakeId: string) => {
    const updated = {
      ...progress,
      mistakes: progress.mistakes.map(m => m.id === mistakeId ? { ...m, resolved: true } : m)
    };
    saveProgress(updated);
  };

  // Search Results
  const searchResults = useMemo(() => {
    return searchMathSystem(searchQuery);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Header / System Banner */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Calculator className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Target: 100/100
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Chapters 1–5 Master System
                </span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                CBSE Class 10 Mathematics Command Center
              </h1>
            </div>
          </div>

          {/* Quick Metrics Bar in Header */}
          <div className="flex items-center gap-4 text-xs bg-slate-800/60 border border-slate-700/60 rounded-xl px-3 py-1.5 self-start md:self-auto">
            <div>
              <span className="text-slate-400">Readiness:</span>{' '}
              <span className={`font-bold ${stats.readinessColor}`}>{stats.readinessLabel}</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div>
              <span className="text-slate-400">Score Meter:</span>{' '}
              <span className="font-bold text-emerald-400">{stats.overallScore}%</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div>
              <span className="text-slate-400">Mistakes:</span>{' '}
              <span className="font-bold text-rose-400">{stats.unresolvedMistakesCount}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Selection Bar */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 py-2 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5 shrink-0">
            <Layers className="h-3.5 w-3.5 text-indigo-400" /> Chapter:
          </span>
          {MATH_CHAPTERS.map(ch => {
            const isSelected = ch.chapterNumber === selectedChapterNum;
            const chLearned = ch.concepts.filter(c => progress.learnedConcepts[c.id]).length;
            const chTotal = ch.concepts.length;
            const percent = chTotal > 0 ? Math.round((chLearned / chTotal) * 100) : 0;

            return (
              <button
                key={ch.chapterNumber}
                onClick={() => setSelectedChapterNum(ch.chapterNumber)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/70 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>Ch {ch.chapterNumber}: {ch.chapterName}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-700 text-slate-300'
                }`}>
                  {percent}%
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Sub-Navigation Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {[
            { id: 'dashboard', label: '100-Marks Prep Dashboard', icon: Target },
            { id: 'concepts', label: 'Concepts & Method Guide', icon: BrainCircuit },
            { id: 'formulas', label: 'Formula & Theorem Vault', icon: Calculator },
            { id: 'practice', label: '5-Level Graded Practice', icon: Award },
            { id: 'pyqs', label: '10-Yr PYQ Matrix', icon: TrendingUp },
            { id: 'mistakes', label: 'My Mistake Book', icon: AlertTriangle, badge: stats.unresolvedMistakesCount },
            { id: 'tests', label: 'Chapter Master Tests', icon: GraduationCap },
            { id: 'mixed', label: 'Cross-Chapter Mixed Drills', icon: Zap },
            { id: 'search', label: 'Master Search', icon: Search }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-slate-800 text-indigo-400 border-indigo-500/50 shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border-transparent'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1">
        {/* TAB 1: 100-MARKS DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Hero Banner with Target Meter */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900/90 p-6 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs tracking-wider uppercase">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Evidence-Based Class 10 Board Preparation Engine</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Targeting 100/100 in Class 10 Maths
                  </h2>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    A multi-tiered mastery framework synthesizing RD Sharma, 10-Year CBSE PYQ Granth (2016–2025), NCERT Exemplars, and Support Materials. Train method recognition, eliminate traps, and secure full step marks.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl shrink-0 min-w-[200px]">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Exam Readiness</span>
                  <span className={`text-2xl font-black mt-1 ${stats.readinessColor}`}>
                    {stats.readinessLabel}
                  </span>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full mt-3 overflow-hidden border border-slate-700">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${stats.overallScore}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1">{stats.overallScore}% Mastered</span>
                </div>
              </div>
            </div>

            {/* 4 Pillar Mastery Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Concept Mastery</span>
                  <BrainCircuit className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{stats.learnedConcepts}</span>
                  <span className="text-xs text-slate-400">/ {stats.totalConcepts} Core</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${stats.conceptPercent}%` }} />
                </div>
                <span className="text-[11px] text-indigo-400 mt-1 block">{stats.conceptPercent}% secure</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Formula Security</span>
                  <Calculator className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{stats.memorizedFormulas}</span>
                  <span className="text-xs text-slate-400">/ {stats.totalFormulas} Formulas</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${stats.formulaPercent}%` }} />
                </div>
                <span className="text-[11px] text-emerald-400 mt-1 block">{stats.formulaPercent}% memorized</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">10-Yr PYQ Coverage</span>
                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{stats.practicedPYQs}</span>
                  <span className="text-xs text-slate-400">/ {stats.totalPYQs} PYQs</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${stats.pyqPercent}%` }} />
                </div>
                <span className="text-[11px] text-cyan-400 mt-1 block">{stats.pyqPercent}% practiced</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Practice Accuracy</span>
                  <Award className="h-4 w-4 text-amber-400" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{stats.accuracy}%</span>
                  <span className="text-xs text-slate-400">({stats.correctQuestions}/{stats.attemptedQuestions})</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${stats.accuracy}%` }} />
                </div>
                <span className="text-[11px] text-amber-400 mt-1 block">First-attempt precision</span>
              </div>
            </div>

            {/* Today's High-Yield Session Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Today&apos;s High-Yield Maths Workout</h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                  Adaptive Recommendation
                </span>
              </div>
              <p className="text-xs text-slate-300">
                A 25-minute structured daily progression targeting the highest return on investment:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div
                  onClick={() => { setSelectedChapterNum(1); setActiveTab('concepts'); }}
                  className="cursor-pointer p-3 rounded-lg bg-slate-800/60 border border-slate-700 hover:border-indigo-500 transition space-y-1.5"
                >
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wide">1. Concept Recall</span>
                  <p className="text-xs font-semibold text-white">Ch 1: Irrationality Contradiction Proof</p>
                  <p className="text-[11px] text-slate-400">Review the 10-line theorem proof for sqrt(5) is irrational.</p>
                </div>

                <div
                  onClick={() => { setSelectedChapterNum(4); setActiveTab('practice'); setSelectedPracticeLevel(3); }}
                  className="cursor-pointer p-3 rounded-lg bg-slate-800/60 border border-slate-700 hover:border-emerald-500 transition space-y-1.5"
                >
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">2. Standard Drill</span>
                  <p className="text-xs font-semibold text-white">Ch 4: Train Speed / Tap Work Problems</p>
                  <p className="text-[11px] text-slate-400">Solve 2 application questions on time difference equations.</p>
                </div>

                <div
                  onClick={() => { setSelectedChapterNum(5); setActiveTab('pyqs'); }}
                  className="cursor-pointer p-3 rounded-lg bg-slate-800/60 border border-slate-700 hover:border-cyan-500 transition space-y-1.5"
                >
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">3. High-Yield PYQ</span>
                  <p className="text-xs font-semibold text-white">Ch 5: S_n Formula & Double Answer</p>
                  <p className="text-[11px] text-slate-400">Study CBSE 2024 Set 30/1/3 case study marking scheme.</p>
                </div>
              </div>
            </div>

            {/* Chapter Checklist Summary */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookmarkCheck className="h-4 w-4 text-emerald-400" />
                Chapters 1–5 Mastery Progress Checklist
              </h3>
              <div className="divide-y divide-slate-800">
                {MATH_CHAPTERS.map(ch => {
                  const chConcepts = ch.concepts.length;
                  const chLearned = ch.concepts.filter(c => progress.learnedConcepts[c.id]).length;
                  const chFormulas = ch.formulas.length;
                  const chMemorized = ch.formulas.filter(f => progress.memorizedFormulas[f.id]).length;

                  return (
                    <div key={ch.chapterNumber} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-white">
                            Chapter {ch.chapterNumber}: {ch.chapterName}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                            {ch.weightageEstimate}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {ch.overview.coreIdeas[0]}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-xs shrink-0">
                        <div className="text-right">
                          <span className="text-slate-400 text-[10px]">Concepts:</span>{' '}
                          <span className="font-semibold text-indigo-400">{chLearned}/{chConcepts}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-400 text-[10px]">Formulas:</span>{' '}
                          <span className="font-semibold text-emerald-400">{chMemorized}/{chFormulas}</span>
                        </div>
                        <button
                          onClick={() => { setSelectedChapterNum(ch.chapterNumber); setActiveTab('concepts'); }}
                          className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                        >
                          Open Chapter
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONCEPTS & METHOD GUIDE */}
        {activeTab === 'concepts' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                  Chapter {currentChapter.chapterNumber} Core Concepts
                </span>
                <h2 className="text-xl font-bold text-white">{currentChapter.chapterName}</h2>
                <p className="text-xs text-slate-400 mt-1">{currentChapter.overview.about}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {currentChapter.weightageEstimate}
                </span>
              </div>
            </div>

            {/* Method Recognition Engine ("How to Identify the Method") */}
            {currentChapter.methodGuides.length > 0 && (
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">How to Identify the Method (7-Step Strategy)</h3>
                </div>
                {currentChapter.methodGuides.map(guide => (
                  <div key={guide.id} className="space-y-3 bg-slate-900/90 rounded-lg p-4 border border-slate-800">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-amber-300">Pattern: {guide.questionPattern}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                        {guide.requiredConcept}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded bg-slate-800/60 border border-slate-700/60">
                        <span className="text-slate-400 font-bold block mb-1">🔍 Recognition Clues:</span>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-200">
                          {guide.recognitionClues.map((clue, idx) => (
                            <li key={idx}>{clue}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800/60 border border-slate-700/60">
                        <span className="text-rose-400 font-bold block mb-1">⚠️ Common Trap:</span>
                        <p className="text-slate-300">{guide.commonTrap}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <span className="text-indigo-400 font-bold block">Execution Sequence:</span>
                      <div className="space-y-1">
                        {guide.executionSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-300">
                            <span className="text-slate-400 font-mono text-[10px]">{idx + 1}.</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-xs">
                      <span className="text-emerald-400 font-bold block mb-1">Exemplar Problem & Quick Result:</span>
                      <p className="text-slate-300 italic mb-1">{guide.exemplarQuestion}</p>
                      <p className="text-emerald-300 font-mono font-semibold">{guide.exemplarAnswer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Individual Concepts */}
            <div className="space-y-4">
              {currentChapter.concepts.map(concept => {
                const isLearned = !!progress.learnedConcepts[concept.id];
                return (
                  <div
                    key={concept.id}
                    className={`rounded-xl border transition-all ${
                      isLearned
                        ? 'border-emerald-500/40 bg-slate-900/90'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                    } p-5 space-y-4`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
                            {concept.topic}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                            concept.priority === 'Must Master'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {concept.priority}
                          </span>
                          <span className="text-[11px] text-slate-400">CBSE: {concept.cbseFrequency}</span>
                        </div>
                        <h3 className="text-base font-bold text-white mt-1">{concept.title}</h3>
                      </div>

                      <button
                        onClick={() => toggleConceptLearned(concept.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                          isLearned
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-500/40'
                        }`}
                      >
                        <CheckCircle2 className={`h-4 w-4 ${isLearned ? 'text-emerald-400' : 'text-slate-400'}`} />
                        <span>{isLearned ? 'Mastered' : 'Mark Mastered'}</span>
                      </button>
                    </div>

                    {/* Simple explanation & Exact math idea */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <span className="text-indigo-400 font-bold block mb-1">Simple Explanation:</span>
                        <p className="text-slate-300 leading-relaxed">{concept.simpleExplanation}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <span className="text-emerald-400 font-bold block mb-1">Exact Mathematical Formulation:</span>
                        <p className="text-slate-300 font-mono text-[11px]">{concept.exactMathIdea}</p>
                        <div className="mt-2 p-2 rounded bg-slate-900 border border-slate-800 font-mono text-emerald-300 text-center">
                          {concept.formulaOrTheorem}
                        </div>
                      </div>
                    </div>

                    {/* Worked Examples */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                        Board-Level Worked Examples:
                      </span>
                      {concept.workedExamples.map((ex, exIdx) => (
                        <div key={exIdx} className="rounded-lg bg-slate-800/40 border border-slate-700/50 p-4 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-amber-300">{ex.title}</span>
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                              {ex.level}
                            </span>
                          </div>
                          <p className="text-slate-200 font-medium">{ex.question}</p>
                          <div className="text-slate-400 text-[11px] space-y-0.5">
                            <p><span className="text-slate-300 font-semibold">Given:</span> {ex.given}</p>
                            <p><span className="text-slate-300 font-semibold">To Find:</span> {ex.toFind}</p>
                            <p><span className="text-indigo-400 font-semibold">Why this method:</span> {ex.methodSelectionReason}</p>
                          </div>
                          <div className="space-y-1 pt-1 border-t border-slate-700/60 font-mono text-[11px] text-slate-300">
                            {ex.stepByStepSolution.map((s, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-slate-500">{sIdx + 1}.</span>
                                <span>{s}</span>
                              </div>
                            ))}
                          </div>
                          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 font-semibold">
                            Final Result: {ex.finalAnswer}
                          </div>
                          <div className="text-[11px] text-rose-300 bg-rose-950/20 p-2 rounded border border-rose-500/20">
                            <span className="font-bold">Avoid Exam Trap:</span> {ex.commonTrap}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: FORMULA & THEOREM VAULT */}
        {activeTab === 'formulas' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  Formula & Theorem Security
                </span>
                <h2 className="text-xl font-bold text-white">Chapter {currentChapter.chapterNumber} Formulas</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Formula → Symbol Meanings → Trigger Conditions → Mini Example → Traps
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentChapter.formulas.map(formula => {
                const isMemorized = !!progress.memorizedFormulas[formula.id];
                return (
                  <div
                    key={formula.id}
                    className={`rounded-xl border transition-all ${
                      isMemorized
                        ? 'border-emerald-500/40 bg-slate-900/90'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                    } p-5 space-y-3`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">{formula.name}</h3>
                      <button
                        onClick={() => toggleFormulaMemorized(formula.id)}
                        className={`p-1.5 rounded-lg border text-xs font-semibold transition ${
                          isMemorized
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center font-mono text-emerald-400 font-bold text-sm tracking-wide">
                      {formula.formula}
                    </div>

                    {/* Symbol breakdown */}
                    <div className="text-xs space-y-1">
                      <span className="text-slate-400 font-semibold block text-[11px]">Symbol Meanings:</span>
                      <div className="grid grid-cols-1 gap-1">
                        {formula.symbolMeanings.map((s, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300 text-[11px]">
                            <span className="font-mono text-indigo-400 font-bold">{s.symbol}:</span>
                            <span>{s.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* When to use */}
                    <div className="text-xs p-2.5 rounded bg-slate-800/40 border border-slate-700/50">
                      <span className="text-indigo-400 font-bold block mb-0.5">When to Trigger:</span>
                      <p className="text-slate-300 text-[11px]">{formula.whenToUse}</p>
                    </div>

                    {/* Mini Example */}
                    <div className="text-xs p-2.5 rounded bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                      <span className="text-emerald-400 font-bold block">Mini Example:</span>
                      <p className="text-slate-300 text-[11px]">{formula.miniExample.question}</p>
                      <p className="text-slate-400 font-mono text-[10px]">Substitution: {formula.miniExample.substitution}</p>
                      <p className="text-emerald-300 font-mono font-bold text-[11px]">Result: {formula.miniExample.result}</p>
                    </div>

                    {/* Common mistake */}
                    <div className="text-xs p-2.5 rounded bg-rose-950/20 border border-rose-500/20">
                      <span className="text-rose-400 font-bold block mb-0.5">Common Board Mistake:</span>
                      <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-0.5">
                        {formula.commonMistakes.map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Revision Sheet */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                Last-Day Revision Sheet for Chapter {currentChapter.chapterNumber}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-1.5">
                  <span className="text-indigo-400 font-bold block">Must Remember Points:</span>
                  <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                    {currentChapter.revisionSheet.mustRememberPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-1.5">
                  <span className="text-emerald-400 font-bold block">Speed Tips:</span>
                  <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                    {currentChapter.revisionSheet.speedTips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-1.5">
                  <span className="text-amber-400 font-bold block">5-Minute Exam Hall Checklist:</span>
                  <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                    {currentChapter.revisionSheet.lastDayChecklist.map((chk, idx) => (
                      <li key={idx}>{chk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 5-LEVEL GRADED PRACTICE */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  5-Level Graded Practice
                </span>
                <h2 className="text-xl font-bold text-white">Chapter {currentChapter.chapterNumber} Questions</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Progressive difficulty: Foundation → Standard → Application → Advanced → Challenge
                </p>
              </div>

              {/* Level Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {[1, 2, 3, 4, 5].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedPracticeLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                      selectedPracticeLevel === lvl
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    Level {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions list for selected level */}
            <div className="space-y-4">
              {currentChapter.gradedQuestions
                .filter(q => q.level === selectedPracticeLevel)
                .map(q => {
                  const solvedInfo = progress.solvedQuestions[q.id];
                  const feedback = answerFeedback[q.id];
                  const isSolutionRevealed = revealedSolutions[q.id];
                  const isHintRevealed = revealedHints[q.id];

                  return (
                    <div
                      key={q.id}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {q.levelLabel}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {q.marks} Mark{q.marks > 1 ? 's' : ''}
                          </span>
                          {q.isOriginalPractice && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Original Practice
                            </span>
                          )}
                        </div>
                        {solvedInfo && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                            solvedInfo.correct ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                          }`}>
                            {solvedInfo.correct ? '✓ Solved Correctly' : '⚠️ Need Revision'}
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-white leading-relaxed">
                        {q.question}
                      </div>

                      {/* Options if MCQ */}
                      {q.options && q.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = userAnswers[q.id] === opt;
                            return (
                              <button
                                key={optIdx}
                                onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                                className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium border transition ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white border-indigo-400 shadow'
                                    : 'bg-slate-800/60 text-slate-200 border-slate-700 hover:border-slate-600'
                                }`}
                              >
                                <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Non-MCQ text input */}
                      {(!q.options || q.options.length === 0) && (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Type your final answer..."
                            value={userAnswers[q.id] || ''}
                            onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 flex-1"
                          />
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                        <button
                          onClick={() => handleCheckAnswer(q)}
                          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow transition"
                        >
                          Check Answer
                        </button>
                        <button
                          onClick={() => setRevealedHints(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                        >
                          <Lightbulb className="h-3.5 w-3.5 text-amber-400" />
                          <span>{isHintRevealed ? 'Hide Hint' : 'Show Hint'}</span>
                        </button>
                        <button
                          onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                        >
                          <FileText className="h-3.5 w-3.5 text-indigo-400" />
                          <span>{isSolutionRevealed ? 'Hide Solution' : 'Step-by-Step Solution'}</span>
                        </button>
                      </div>

                      {/* Hint card */}
                      {isHintRevealed && (
                        <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200">
                          <span className="font-bold block mb-1">💡 Hint:</span>
                          <ul className="list-disc list-inside space-y-0.5">
                            {q.hints.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Answer Feedback */}
                      {feedback && (
                        <div className={`p-3 rounded-lg text-xs font-semibold border ${
                          feedback === 'correct'
                            ? 'bg-emerald-950/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-rose-950/20 text-rose-300 border-rose-500/30'
                        }`}>
                          {feedback === 'correct'
                            ? '🎉 Correct! Perfect execution.'
                            : `❌ Incorrect. Correct answer: "${q.correctAnswer}". Saved to your Mistake Book for spaced retry.`}
                        </div>
                      )}

                      {/* Solution steps */}
                      {isSolutionRevealed && (
                        <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
                          <span className="text-indigo-400 font-bold uppercase tracking-wide block">
                            Examiner-Approved Step-by-Step Marking Scheme:
                          </span>
                          <div className="space-y-1 font-mono text-[11px] text-slate-300">
                            {q.solutionSteps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-slate-500">{sIdx + 1}.</span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                          <div className="p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                            <span className="font-bold">Avoid Exam Trap:</span> {q.commonTrap}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* TAB 5: 10-YEAR PYQ PATTERN MATRIX */}
        {activeTab === 'pyqs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                  10-Year CBSE Official Exam Paper Trends (2016–2025)
                </span>
                <h2 className="text-xl font-bold text-white">Chapter {currentChapter.chapterNumber} PYQ Analysis</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Step-by-step marking schemes, recurring traps, and frequency trends.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {currentChapter.pyqs.map(pyq => {
                const isPracticed = !!progress.practicedPYQs[pyq.id];
                return (
                  <div
                    key={pyq.id}
                    className={`rounded-xl border transition-all ${
                      isPracticed
                        ? 'border-cyan-500/40 bg-slate-900/90'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                    } p-5 space-y-4`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20">
                          {pyq.year}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {pyq.marks} Mark{pyq.marks > 1 ? 's' : ''}
                        </span>
                        <span className="text-[11px] text-slate-400">Concept: {pyq.conceptTested}</span>
                      </div>

                      <button
                        onClick={() => togglePYQPracticed(pyq.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                          isPracticed
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-500/40'
                        }`}
                      >
                        <CheckCircle2 className={`h-4 w-4 ${isPracticed ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span>{isPracticed ? 'Practiced' : 'Mark as Practiced'}</span>
                      </button>
                    </div>

                    <div className="text-sm font-semibold text-white leading-relaxed">
                      {pyq.question}
                    </div>

                    {/* Step-marking breakdown */}
                    <div className="space-y-1.5 text-xs">
                      <span className="text-cyan-400 font-bold block text-[11px]">
                        CBSE Official Marking Scheme Breakdown:
                      </span>
                      <div className="space-y-1">
                        {pyq.markingSchemeBreakdown.map((b, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-800/50 border border-slate-700/50 text-[11px]">
                            <span className="text-slate-300">{b.step}</span>
                            <span className="font-mono text-cyan-400 font-bold shrink-0 ml-2">[{b.marks} M]</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                      <span className="text-indigo-400 font-bold block">Model Solution:</span>
                      <p>{pyq.fullSolution}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                        <span className="font-bold block mb-0.5">Frequent Student Blunder:</span>
                        {pyq.commonMistake}
                      </div>
                      <div className="p-2.5 rounded bg-indigo-950/20 border border-indigo-500/20 text-indigo-300 text-[11px]">
                        <span className="font-bold block mb-0.5">Frequency & Recurrence Trend:</span>
                        {pyq.frequencyTrend}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 6: MY MISTAKE BOOK */}
        {activeTab === 'mistakes' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                  Permanent Error Analysis
                </span>
                <h2 className="text-xl font-bold text-white">My Maths Mistake Book</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Every incorrect submission is logged here with underlying concept, flawed working, and retry questions.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold">
                  {stats.unresolvedMistakesCount} Unresolved
                </span>
              </div>
            </div>

            {/* Chapter Pre-analyzed Common Traps */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Examiner Traps for Chapter {currentChapter.chapterNumber}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentChapter.commonMistakes.map(cm => (
                  <div key={cm.id} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/60 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300">{cm.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        {cm.mistakeCategory}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                      <span className="font-bold">Flawed Working:</span> {cm.flawedWorking}
                    </div>
                    <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-[11px]">
                      <span className="font-bold">Correct Method:</span> {cm.correctWorking}
                    </div>
                    <p className="text-slate-300 text-[11px]"><span className="text-indigo-400 font-semibold">How to avoid:</span> {cm.howToAvoid}</p>
                    <div className="pt-2 border-t border-slate-700 text-[11px]">
                      <span className="text-amber-400 font-bold block mb-0.5">Quick Retry:</span>
                      <p className="text-slate-300 italic mb-1">{cm.retryQuestion.question}</p>
                      <p className="text-emerald-400 font-semibold">Ans: {cm.retryQuestion.correctAnswer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Logged Mistakes */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookmarkCheck className="h-4 w-4 text-rose-400" />
                Recorded Personal Mistakes ({progress.mistakes.length})
              </h3>
              {progress.mistakes.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
                  <ShieldCheck className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-300">Clean Sheet! No mistakes recorded yet.</p>
                  <p className="text-xs text-slate-500 mt-1">Any incorrect answers from practice or tests will appear here for one-click re-testing.</p>
                </div>
              ) : (
                progress.mistakes.map(m => (
                  <div
                    key={m.id}
                    className={`rounded-xl border p-4 space-y-3 transition ${
                      m.resolved
                        ? 'border-emerald-500/30 bg-slate-900/50 opacity-60'
                        : 'border-rose-500/30 bg-slate-900/90'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          Ch {m.chapterId} • {m.conceptName}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">
                          {m.mistakeType}
                        </span>
                      </div>
                      <button
                        onClick={() => handleResolveMistake(m.id)}
                        className={`text-xs px-2.5 py-1 rounded-md border font-semibold transition ${
                          m.resolved
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                        }`}
                      >
                        {m.resolved ? '✓ Resolved' : 'Mark Resolved'}
                      </button>
                    </div>

                    <p className="text-xs font-semibold text-white">{m.questionText}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[11px]">
                        <span className="font-bold">Your Submission:</span> {m.studentAnswer}
                      </div>
                      <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-[11px]">
                        <span className="font-bold">Correct Result:</span> {m.correctAnswer}
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 text-[11px] p-2 rounded bg-slate-800/40 border border-slate-700/50">
                      <span className="text-indigo-400 font-bold block mb-0.5">Model Execution:</span>
                      {m.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 7: CHAPTER MASTER TESTS */}
        {activeTab === 'tests' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">
                  Timed Examination Simulators
                </span>
                <h2 className="text-xl font-bold text-white">Chapter {currentChapter.chapterNumber} Master Tests</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Diagnostic Test → Chapter Test → Advanced Test → Mastery Test
                </p>
              </div>
            </div>

            {/* Test Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentChapter.tests.map(test => {
                const key = `ch${currentChapter.chapterNumber}_${test.testType}`;
                const completed = progress.completedTests[key];
                const isSelected = activeTestKey === key;

                return (
                  <div
                    key={test.testType}
                    onClick={() => {
                      setActiveTestKey(key);
                      setTestUserAnswers({});
                      setTestSubmitted(false);
                      setTestScore(null);
                    }}
                    className={`cursor-pointer rounded-xl border p-4 space-y-3 transition ${
                      isSelected
                        ? 'border-purple-500 bg-purple-950/20 shadow-lg shadow-purple-500/10'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-400">{test.testType}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {test.durationMinutes}m
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      {test.questions.length} Questions • {test.totalMarks} Marks
                    </div>
                    {completed ? (
                      <div className="text-xs text-emerald-400 font-semibold">
                        Score: {completed.score}/{completed.totalMarks} ({Math.round((completed.score / completed.totalMarks) * 100)}%)
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500">Not Attempted Yet</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Test Execution Area */}
            {activeTestKey && (() => {
              const test = currentChapter.tests.find(t => `ch${currentChapter.chapterNumber}_${t.testType}` === activeTestKey);
              if (!test) return null;

              const handleSubmitTest = () => {
                let score = 0;
                test.questions.forEach(q => {
                  const ans = (testUserAnswers[q.id] || '').trim();
                  if (ans.toLowerCase() === q.correctAnswer.toLowerCase()) {
                    score += q.marks;
                  }
                });
                setTestScore({ score, total: test.totalMarks });
                setTestSubmitted(true);

                const updated = {
                  ...progress,
                  completedTests: {
                    ...progress.completedTests,
                    [activeTestKey]: {
                      score,
                      totalMarks: test.totalMarks,
                      timestamp: Date.now()
                    }
                  }
                };
                saveProgress(updated);
              };

              return (
                <div className="rounded-xl border border-purple-500/30 bg-slate-900/90 p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Exam in Progress</span>
                      <h3 className="text-lg font-bold text-white">{test.testType} — Chapter {currentChapter.chapterNumber}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">Total: {test.totalMarks} Marks</span>
                      {!testSubmitted && (
                        <button
                          onClick={handleSubmitTest}
                          className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition"
                        >
                          Submit Test
                        </button>
                      )}
                    </div>
                  </div>

                  {testSubmitted && testScore && (
                    <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-purple-300 uppercase">Test Result</span>
                        <h4 className="text-2xl font-black text-white mt-0.5">
                          {testScore.score} / {testScore.total} Marks ({Math.round((testScore.score / testScore.total) * 100)}%)
                        </h4>
                      </div>
                      <button
                        onClick={() => {
                          setTestSubmitted(false);
                          setTestUserAnswers({});
                          setTestScore(null);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold hover:text-white"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Re-attempt
                      </button>
                    </div>
                  )}

                  <div className="space-y-5">
                    {test.questions.map((q, idx) => {
                      const userAns = testUserAnswers[q.id] || '';
                      const isCorrect = userAns.toLowerCase() === q.correctAnswer.toLowerCase();

                      return (
                        <div key={q.id} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/60 space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-400">Question {idx + 1}</span>
                            <span className="text-slate-500">[{q.marks} Mark{q.marks > 1 ? 's' : ''}]</span>
                          </div>
                          <p className="text-sm font-semibold text-white">{q.question}</p>

                          {q.options && q.options.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, oIdx) => (
                                <button
                                  key={oIdx}
                                  disabled={testSubmitted}
                                  onClick={() => setTestUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium border transition ${
                                    userAns === opt
                                      ? 'bg-purple-600 text-white border-purple-400'
                                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                                  }`}
                                >
                                  <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                                  {opt}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <input
                              type="text"
                              disabled={testSubmitted}
                              placeholder="Your answer..."
                              value={userAns}
                              onChange={e => setTestUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 w-full"
                            />
                          )}

                          {testSubmitted && (
                            <div className={`p-3 rounded-lg text-xs border space-y-1 ${
                              isCorrect
                                ? 'bg-emerald-950/20 text-emerald-300 border-emerald-500/30'
                                : 'bg-rose-950/20 text-rose-300 border-rose-500/30'
                            }`}>
                              <span className="font-bold block">
                                {isCorrect ? '✓ Correct Answer' : `❌ Incorrect. Correct: "${q.correctAnswer}"`}
                              </span>
                              <p className="text-[11px] text-slate-300 font-mono">
                                Solution: {q.solutionSteps.join(' ')}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 8: CROSS-CHAPTER MIXED DRILLS */}
        {activeTab === 'mixed' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-500/30 space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Unlabeled Chapter Mystery Mode
              </span>
              <h2 className="text-xl font-bold text-white">Cross-Chapter Mixed Drills (Chapters 1 to 5)</h2>
              <p className="text-xs text-slate-300">
                In actual CBSE exams, questions never display their chapter name. This drill forces you to diagnose:
                <strong className="text-amber-300"> &ldquo;What mathematical concept does this problem actually require?&rdquo;</strong>
              </p>
            </div>

            <div className="space-y-4">
              {MIXED_CHAPTERS_1_TO_5_QUESTIONS.map(q => {
                const isRevealed = revealedSolutions[q.id];
                const feedback = answerFeedback[q.id];

                return (
                  <div key={q.id} className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {q.marks} Marks
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          Mystery Question
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">Identify the required chapter &amp; concept</span>
                    </div>

                    <div className="text-sm font-semibold text-white leading-relaxed">
                      {q.question}
                    </div>

                    {q.options && q.options.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium border transition ${
                              userAnswers[q.id] === opt
                                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                                : 'bg-slate-800/60 text-slate-200 border-slate-700 hover:border-slate-600'
                            }`}
                          >
                            <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        placeholder="Your solution..."
                        value={userAnswers[q.id] || ''}
                        onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                        className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white w-full"
                      />
                    )}

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => handleCheckAnswer(q)}
                        className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition"
                      >
                        Check Answer
                      </button>
                      <button
                        onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                      >
                        {isRevealed ? 'Hide Diagnosis' : 'Reveal Underlying Concept & Diagnosis'}
                      </button>
                    </div>

                    {feedback && (
                      <div className={`p-3 rounded-lg text-xs font-semibold border ${
                        feedback === 'correct'
                          ? 'bg-emerald-950/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-rose-950/20 text-rose-300 border-rose-500/30'
                      }`}>
                        {feedback === 'correct' ? '✓ Mastered!' : `❌ Incorrect. Correct answer: "${q.correctAnswer}"`}
                      </div>
                    )}

                    {isRevealed && (
                      <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                            {q.underlyingChapterName}
                          </span>
                          <span className="text-xs text-slate-400">{q.topic}</span>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                          <span className="text-amber-400 font-bold block">Recognition Clue:</span>
                          <p>{q.conceptRecognitionClue}</p>
                        </div>
                        <div className="space-y-1 font-mono text-[11px] text-slate-300">
                          <span className="text-emerald-400 font-bold block">Full Solution:</span>
                          {q.solutionSteps.map((s, idx) => (
                            <p key={idx}>{idx + 1}. {s}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 9: MASTER SEARCH & FILTER */}
        {activeTab === 'search' && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                Unified Mathematics Search Engine
              </span>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search across all 5 chapters by theorem, formula, question type, or keyword (e.g. 'discriminant', 'irrational', 'upstream')..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 shadow-inner"
                />
              </div>
            </div>

            {searchQuery.trim() === '' ? (
              <div className="text-center py-16 text-slate-500 text-xs">
                Type any keyword or concept above to search across Concepts, Formulas, Practice Questions, and PYQs.
              </div>
            ) : (
              <div className="space-y-6">
                {/* Concepts found */}
                {searchResults.concepts.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-indigo-400 flex items-center gap-1.5">
                      <BrainCircuit className="h-4 w-4" />
                      Concepts ({searchResults.concepts.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {searchResults.concepts.map(c => (
                        <div key={c.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <span className="font-bold text-white block">{c.title}</span>
                          <p className="text-slate-400 line-clamp-2">{c.simpleExplanation}</p>
                          <span className="font-mono text-emerald-400 text-[10px] block mt-1">{c.formulaOrTheorem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Formulas found */}
                {searchResults.formulas.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <Calculator className="h-4 w-4" />
                      Formulas ({searchResults.formulas.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {searchResults.formulas.map(f => (
                        <div key={f.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <span className="font-bold text-white block">{f.name}</span>
                          <div className="font-mono text-emerald-300 font-bold p-1 rounded bg-slate-950 text-center">
                            {f.formula}
                          </div>
                          <p className="text-slate-400 text-[11px]">{f.whenToUse}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Questions found */}
                {searchResults.questions.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                      <Award className="h-4 w-4" />
                      Practice Questions ({searchResults.questions.length})
                    </h3>
                    <div className="space-y-2">
                      {searchResults.questions.map(q => (
                        <div key={q.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
                              Ch {q.chapterId} • {q.levelLabel}
                            </span>
                            <span className="font-mono text-emerald-400">Ans: {q.correctAnswer}</span>
                          </div>
                          <p className="text-white font-medium">{q.question}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PYQs found */}
                {searchResults.pyqs.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-1.5">
                      <TrendingUp className="h-4 w-4" />
                      Previous-Year Questions ({searchResults.pyqs.length})
                    </h3>
                    <div className="space-y-2">
                      {searchResults.pyqs.map(p => (
                        <div key={p.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                              {p.year}
                            </span>
                            <span className="text-slate-400">[{p.marks} M]</span>
                          </div>
                          <p className="text-white font-medium">{p.question}</p>
                          <p className="text-slate-400 text-[11px] font-mono">{p.fullSolution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {searchResults.concepts.length === 0 &&
                  searchResults.formulas.length === 0 &&
                  searchResults.questions.length === 0 &&
                  searchResults.pyqs.length === 0 && (
                    <div className="text-center py-12 text-slate-500 text-xs">
                      No matching records found for &ldquo;{searchQuery}&rdquo;. Try another term.
                    </div>
                  )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
