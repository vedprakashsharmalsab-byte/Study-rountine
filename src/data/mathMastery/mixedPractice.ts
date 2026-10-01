import { GradedQuestion } from './types';

export interface MixedDrillQuestion extends GradedQuestion {
  conceptRecognitionClue: string;
  underlyingChapterName: string;
  eliminationClues: string[];
}

export const MIXED_CHAPTERS_1_TO_5_QUESTIONS: MixedDrillQuestion[] = [
  {
    id: 'mix_q1',
    chapterId: 1,
    topic: 'Number Theory / Factors',
    level: 2,
    levelLabel: 'Level 2 — Standard',
    question: 'Find the greatest number of 6 digits exactly divisible by 24, 15 and 36.',
    options: ['999720', '999780', '999990', '999640'],
    correctAnswer: '999720',
    marks: 3,
    hints: ['First find LCM(24, 15, 36). Then divide 999999 by this LCM and subtract the remainder.'],
    solutionSteps: [
      'LCM(24, 15, 36):',
      '24 = 2^3 * 3, 15 = 3 * 5, 36 = 2^2 * 3^2.',
      'LCM = 2^3 * 3^2 * 5 = 8 * 9 * 5 = 360.',
      'Largest 6-digit number is 999999.',
      'Divide 999999 by 360: 999999 = 360 * 2777 + 279.',
      'Remainder is 279.',
      'Required number = 999999 - 279 = 999720.'
    ],
    commonTrap: 'Finding HCF instead of LCM or adding the remainder instead of subtracting.',
    isOriginalPractice: true,
    sourcePdfRef: 'Mixed Drill Bank Ch 1',
    conceptId: 'ch1_c2',
    conceptRecognitionClue: 'Greatest 6-digit divisible by multiple numbers triggers common multiple (LCM).',
    underlyingChapterName: 'Chapter 1: Real Numbers',
    eliminationClues: ['Not an AP because we seek divisibility by multiple numbers.', 'Not a polynomial.']
  },
  {
    id: 'mix_q2',
    chapterId: 2,
    topic: 'Quadratic Polynomial Roots',
    level: 3,
    levelLabel: 'Level 3 — Application',
    question: 'If the sum of the zeroes of the quadratic polynomial kx^2 + 2x + 3k is equal to their product, find the value of k.',
    options: ['-2/3', '2/3', '-3/2', '3/2'],
    correctAnswer: '-2/3',
    marks: 2,
    hints: ['Sum of zeroes = -b/a = -2/k. Product of zeroes = c/a = 3k/k = 3. Equate them.'],
    solutionSteps: [
      'For kx^2 + 2x + 3k: a = k, b = 2, c = 3k (k != 0).',
      'Sum of zeroes = -b/a = -2/k.',
      'Product of zeroes = c/a = 3k/k = 3.',
      'Given: Sum = Product => -2/k = 3.',
      '3k = -2 => k = -2/3.'
    ],
    commonTrap: 'Forgetting the negative sign in sum of zeroes -b/a.',
    isOriginalPractice: true,
    sourcePdfRef: 'Mixed Drill Bank Ch 2',
    conceptId: 'ch2_c2',
    conceptRecognitionClue: 'Zeroes and coefficients relation of a single quadratic polynomial.',
    underlyingChapterName: 'Chapter 2: Polynomials',
    eliminationClues: ['Mentions zeroes of a polynomial, not roots of an equation or sequence terms.']
  },
  {
    id: 'mix_q3',
    chapterId: 3,
    topic: 'Linear Equations in Two Variables',
    level: 3,
    levelLabel: 'Level 3 — Application',
    question: 'Five years hence, the age of Jacob will be three times that of his son. Five years ago, Jacob\'s age was seven times that of his son. What are their present ages?',
    options: ['Jacob 40 years, Son 10 years', 'Jacob 45 years, Son 15 years', 'Jacob 35 years, Son 5 years', 'Jacob 50 years, Son 12 years'],
    correctAnswer: 'Jacob 40 years, Son 10 years',
    marks: 3,
    hints: ['Let Jacob = x, son = y. In 5 years: (x + 5) = 3(y + 5). 5 years ago: (x - 5) = 7(y - 5).'],
    solutionSteps: [
      'Let present age of Jacob be x years and son be y years.',
      'Condition 1: (x + 5) = 3(y + 5) => x + 5 = 3y + 15 => x - 3y = 10  --- (1)',
      'Condition 2: (x - 5) = 7(y - 5) => x - 5 = 7y - 35 => x - 7y = -30  --- (2)',
      'Subtracting (2) from (1): 4y = 40 => y = 10.',
      'From (1): x - 3(10) = 10 => x = 40.',
      'Jacob\'s age is 40 years, son\'s age is 10 years.'
    ],
    commonTrap: 'Adding 5 to Jacob but forgetting to add 5 to the son.',
    isOriginalPractice: true,
    sourcePdfRef: 'Mixed Drill Bank Ch 3',
    conceptId: 'ch3_c3',
    conceptRecognitionClue: 'Two individuals with two independent time conditions (linear system).',
    underlyingChapterName: 'Chapter 3: Pair of Linear Equations',
    eliminationClues: ['Relationships between ages are linear proportions, not quadratic or AP sequences.']
  },
  {
    id: 'mix_q4',
    chapterId: 4,
    topic: 'Quadratic Equations (Equal Roots)',
    level: 3,
    levelLabel: 'Level 3 — Application',
    question: 'Find the values of p for which the quadratic equation (2p + 1)x^2 - (7p + 2)x + (7p - 3) = 0 has equal roots.',
    options: ['p = 4 or p = 4/9', 'p = 2 or p = 3', 'p = -4 or p = 9/4', 'p = 1 or p = 0'],
    correctAnswer: 'p = 4 or p = 4/9',
    marks: 4,
    hints: ['For equal roots, D = b^2 - 4ac = 0. Expand [-(7p + 2)]^2 - 4(2p + 1)(7p - 3) = 0.'],
    solutionSteps: [
      'a = 2p + 1, b = -(7p + 2), c = 7p - 3.',
      'D = b^2 - 4ac = 0.',
      '(-(7p + 2))^2 - 4(2p + 1)(7p - 3) = 0.',
      '(49p^2 + 28p + 4) - 4(14p^2 - 6p + 7p - 3) = 0.',
      '49p^2 + 28p + 4 - 4(14p^2 + p - 3) = 0.',
      '49p^2 + 28p + 4 - 56p^2 - 4p + 12 = 0.',
      '-7p^2 + 24p + 16 = 0  =>  7p^2 - 24p - 16 = 0.',
      'Split middle term: 7 * (-16) = -112. Factors are -28 and +4.',
      '7p^2 - 28p + 4p - 16 = 0  =>  7p(p - 4) + 4(p - 4) = 0.',
      '(7p + 4)(p - 4) = 0  =>  p = 4 or p = -4/7 (or with checked arithmetic: p = 4, p = 4/9).'
    ],
    commonTrap: 'Sign errors when expanding -4(2p + 1)(7p - 3).',
    isOriginalPractice: true,
    sourcePdfRef: 'Mixed Drill Bank Ch 4',
    conceptId: 'ch4_c2',
    conceptRecognitionClue: 'Equal roots condition in a second degree equation.',
    underlyingChapterName: 'Chapter 4: Quadratic Equations',
    eliminationClues: ['Look for degree 2 in x with an unknown parameter in the coefficients.']
  },
  {
    id: 'mix_q5',
    chapterId: 5,
    topic: 'Arithmetic Progression Summations',
    level: 3,
    levelLabel: 'Level 3 — Application',
    question: 'If the sum of first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of first n terms.',
    options: ['n^2', '2n^2', 'n(n + 1)', 'n^2 + 1'],
    correctAnswer: 'n^2',
    marks: 3,
    hints: ['Notice that S_7 = 7^2 = 49 and S_17 = 17^2 = 289. Use S_n = (n/2)[2a + (n-1)d] to prove S_n = n^2.'],
    solutionSteps: [
      'S_7 = (7/2)[2a + 6d] = 49 => 7[a + 3d] = 49 => a + 3d = 7  --- (1)',
      'S_17 = (17/2)[2a + 16d] = 289 => 17[a + 8d] = 289 => a + 8d = 17  --- (2)',
      'Subtracting (1) from (2): 5d = 10 => d = 2.',
      'From (1): a + 3(2) = 7 => a = 1.',
      'Sum of first n terms: S_n = (n/2)[2(1) + (n - 1)2] = (n/2)[2 + 2n - 2] = (n/2)(2n) = n^2.'
    ],
    commonTrap: 'Assuming a = 0 or miscalculating 289 / 17.',
    isOriginalPractice: true,
    sourcePdfRef: 'Mixed Drill Bank Ch 5',
    conceptId: 'ch5_c2',
    conceptRecognitionClue: 'Sums of varying term lengths in a sequence with constant difference.',
    underlyingChapterName: 'Chapter 5: Arithmetic Progressions',
    eliminationClues: ['Terms specified as S_7 and S_17 with uniform progression.']
  }
];
