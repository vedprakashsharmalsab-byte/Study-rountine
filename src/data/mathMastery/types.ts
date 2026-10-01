export type MasteryLevel = 1 | 2 | 3 | 4 | 5;
export type PriorityLevel = 'Must Master' | 'High Priority' | 'Important' | 'Challenge';

export interface ConceptWorkedExample {
  level: 'basic' | 'standard' | 'application' | 'advanced';
  title: string;
  question: string;
  given: string;
  toFind: string;
  methodSelectionReason: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  verificationCheck: string;
  commonTrap: string;
}

export interface ConceptItem {
  id: string;
  title: string;
  topic: string;
  simpleExplanation: string;
  exactMathIdea: string;
  formulaOrTheorem: string;
  whenToUse: string;
  recognitionClues: string[];
  workedExamples: ConceptWorkedExample[];
  commonMisconceptions: string[];
  priority: PriorityLevel;
  cbseFrequency: string;
  sourceTrace: string;
}

export interface FormulaSymbol {
  symbol: string;
  meaning: string;
}

export interface FormulaItem {
  id: string;
  name: string;
  formula: string;
  symbolMeanings: FormulaSymbol[];
  whenToUse: string;
  conditions: string[];
  commonSubstitutions: string[];
  miniExample: {
    question: string;
    substitution: string;
    result: string;
  };
  commonMistakes: string[];
  memoryTrick?: string;
  sourceTrace: string;
}

export interface MethodGuideItem {
  id: string;
  questionPattern: string;
  recognitionClues: string[];
  requiredConcept: string;
  whatIsGiven: string;
  whatMustBeFound: string;
  chosenMethod: string;
  executionSteps: string[];
  verificationMethod: string;
  commonTrap: string;
  exemplarQuestion: string;
  exemplarAnswer: string;
}

export interface GradedQuestion {
  id: string;
  chapterId: number;
  topic: string;
  level: MasteryLevel;
  levelLabel: 'Level 1 — Foundation' | 'Level 2 — Standard' | 'Level 3 — Application' | 'Level 4 — Advanced' | 'Level 5 — Challenge';
  question: string;
  options?: string[];
  correctAnswer: string;
  marks: number;
  hints: string[];
  solutionSteps: string[];
  commonTrap: string;
  isOriginalPractice: boolean;
  sourcePdfRef: string;
  conceptId: string;
}

export interface PYQItem {
  id: string;
  year: string;
  marks: number;
  topic: string;
  conceptTested: string;
  question: string;
  markingSchemeBreakdown: { step: string; marks: number }[];
  fullSolution: string;
  commonMistake: string;
  frequencyTrend: string;
  source: string;
}

export interface CommonMistakeItem {
  id: string;
  title: string;
  mistakeCategory: 'Formula & Substitution' | 'Sign & Algebraic Error' | 'Incomplete Proof/Justification' | 'Incorrect Condition/Constraint' | 'Unit & Rounding';
  flawedWorking: string;
  whyItIsWrong: string;
  correctWorking: string;
  howToAvoid: string;
  retryQuestion: {
    question: string;
    correctAnswer: string;
    explanation: string;
  };
}

export interface ChapterMasterTest {
  testType: 'Diagnostic' | 'Chapter Test' | 'Advanced Test' | 'Mastery Test';
  durationMinutes: number;
  totalMarks: number;
  questions: GradedQuestion[];
}

export interface ChapterData {
  chapterNumber: number;
  chapterName: string;
  weightageEstimate: string;
  overview: {
    about: string;
    prerequisites: string[];
    coreIdeas: string[];
    keyRelationships: string[];
    frequentMisunderstandings: string[];
    examImportanceEvidence: string;
  };
  concepts: ConceptItem[];
  formulas: FormulaItem[];
  methodGuides: MethodGuideItem[];
  gradedQuestions: GradedQuestion[];
  pyqs: PYQItem[];
  commonMistakes: CommonMistakeItem[];
  revisionSheet: {
    mustRememberPoints: string[];
    speedTips: string[];
    lastDayChecklist: string[];
  };
  tests: ChapterMasterTest[];
}

export interface MistakeRecord {
  id: string;
  questionId: string;
  chapterId: number;
  questionText: string;
  studentAnswer: string;
  correctAnswer: string;
  mistakeType: string;
  conceptName: string;
  explanation: string;
  correctedMethod: string;
  retryQuestion: string;
  retryAnswer: string;
  timestamp: number;
  resolved: boolean;
}

export interface MathMasteryProgress {
  learnedConcepts: Record<string, boolean>; // conceptId -> boolean
  memorizedFormulas: Record<string, boolean>; // formulaId -> boolean
  solvedQuestions: Record<string, { correct: boolean; attempts: number; timestamp: number }>; // questionId -> record
  practicedPYQs: Record<string, boolean>; // pyqId -> boolean
  completedTests: Record<string, { score: number; totalMarks: number; timestamp: number }>; // testKey -> record
  mistakes: MistakeRecord[];
}
