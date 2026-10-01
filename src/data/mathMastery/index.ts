import { ChapterData, GradedQuestion, FormulaItem, PYQItem, ConceptItem, MethodGuideItem } from './types';
import { CH1_DATA } from './ch1_real_numbers';
import { CH2_DATA } from './ch2_polynomials';
import { CH3_DATA } from './ch3_linear_equations';
import { CH4_DATA } from './ch4_quadratic_equations';
import { CH5_DATA } from './ch5_arithmetic_progressions';
import { MIXED_CHAPTERS_1_TO_5_QUESTIONS } from './mixedPractice';

export * from './types';
export * from './mixedPractice';

export const MATH_CHAPTERS: ChapterData[] = [
  CH1_DATA,
  CH2_DATA,
  CH3_DATA,
  CH4_DATA,
  CH5_DATA
];

export function getChapterData(chapterNum: number): ChapterData | undefined {
  return MATH_CHAPTERS.find(c => c.chapterNumber === chapterNum);
}

export function getAllMasteryQuestions(): GradedQuestion[] {
  return MATH_CHAPTERS.flatMap(c => c.gradedQuestions);
}

export function getAllFormulas(): FormulaItem[] {
  return MATH_CHAPTERS.flatMap(c => c.formulas);
}

export function getAllPYQs(): PYQItem[] {
  return MATH_CHAPTERS.flatMap(c => c.pyqs);
}

export function getAllConcepts(): ConceptItem[] {
  return MATH_CHAPTERS.flatMap(c => c.concepts);
}

export function getAllMethodGuides(): MethodGuideItem[] {
  return MATH_CHAPTERS.flatMap(c => c.methodGuides);
}

export function searchMathSystem(query: string): {
  concepts: ConceptItem[];
  formulas: FormulaItem[];
  questions: GradedQuestion[];
  pyqs: PYQItem[];
} {
  const q = query.toLowerCase().trim();
  if (!q) {
    return {
      concepts: [],
      formulas: [],
      questions: [],
      pyqs: []
    };
  }

  const concepts = getAllConcepts().filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.simpleExplanation.toLowerCase().includes(q) ||
    c.topic.toLowerCase().includes(q) ||
    c.formulaOrTheorem.toLowerCase().includes(q)
  );

  const formulas = getAllFormulas().filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.formula.toLowerCase().includes(q) ||
    f.whenToUse.toLowerCase().includes(q)
  );

  const questions = getAllMasteryQuestions().filter(qu =>
    qu.question.toLowerCase().includes(q) ||
    qu.topic.toLowerCase().includes(q) ||
    qu.levelLabel.toLowerCase().includes(q)
  );

  const pyqs = getAllPYQs().filter(p =>
    p.question.toLowerCase().includes(q) ||
    p.year.toLowerCase().includes(q) ||
    p.topic.toLowerCase().includes(q) ||
    p.conceptTested.toLowerCase().includes(q)
  );

  return { concepts, formulas, questions, pyqs };
}
