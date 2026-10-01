import { ChapterData } from './types';

export const CH5_DATA: ChapterData = {
  chapterNumber: 5,
  chapterName: 'Arithmetic Progressions',
  weightageEstimate: '6–8 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Arithmetic Progressions governs sequences where consecutive terms differ by a constant value. The chapter focuses on calculating the nth term, determining whether numbers belong to a sequence, finding terms from the end, calculating the sum of n terms, and modeling real-life patterns (spiral lengths, ladder rungs, monthly savings, and potato races).',
    prerequisites: ['Linear equation solving', 'Patterns and sequences', 'Basic arithmetic summation'],
    coreIdeas: [
      'An AP is a sequence of numbers in which each term is obtained by adding a fixed number d to the preceding term (except the first term a).',
      'Common difference d = a_{k+1} - a_k. d can be positive, negative, or zero.',
      'General nth term: a_n = a + (n - 1)d.',
      'nth term from the end of an AP with last term l: a_n\' = l - (n - 1)d.',
      'Sum of first n terms: S_n = (n/2)[2a + (n - 1)d] = (n/2)[a + l].',
      'Fundamental relationship: a_n = S_n - S_{n-1}. In S_n = An^2 + Bn, common difference d = 2A.',
      'Selection of terms: 3 terms in AP are taken as (a - d), a, (a + d); 4 terms as (a - 3d), (a - d), (a + d), (a + 3d).'
    ],
    keyRelationships: [
      'If three terms a, b, c are in AP, then 2b = a + c (b is the arithmetic mean of a and c).',
      'Double sum meaning: When S_n yields two values of n, it indicates that terms after the first n sum to zero (due to presence of negative terms).'
    ],
    frequentMisunderstandings: [
      'Assuming n can be a fraction or negative number. n MUST always be a positive natural number (n in N = {1, 2, 3...}).',
      'Forgetting parentheses in (n - 1)d, leading to n - d instead of nd - d.',
      'Confusing a_n (the value of the term at position n) with n (the index/position of the term).'
    ],
    examImportanceEvidence: 'Very high CBSE frequency. Typically features: 1 MCQ (finding common difference or 10th term) + 1 Short Answer (proving a relation like a_p = q, a_q = p) + 1 Case Study / Competency Question (4 Marks, e.g. spiral, stadium seats, ladder steps).'
  },
  concepts: [
    {
      id: 'ch5_c1',
      title: 'Common Difference and General nth Term',
      topic: 'nth Term of an AP',
      simpleExplanation: 'To find the value of any term at position n, take the starting value a and add the jump d exactly (n - 1) times.',
      exactMathIdea: 'The nth term of an AP with first term a and common difference d is given by a_n = a + (n - 1)d. The nth term from the end of a finite AP of last term l is a_n\' = l - (n - 1)d.',
      formulaOrTheorem: 'a_n = a + (n - 1)d, \\quad a_n\' = l - (n - 1)d',
      whenToUse: 'When asked to find the value of a specific term, find how many terms are in an AP, or determine if a number belongs to the sequence.',
      recognitionClues: ['Find the 20th term from the end', 'Which term of the AP is 78?', 'Determine if -150 is a term of the AP', 'Find the first negative term'],
      workedExamples: [
        {
          level: 'basic',
          title: 'Finding the 20th Term from the End',
          question: 'Find the 20th term from the last term of the AP: 3, 8, 13, ..., 253.',
          given: 'AP: 3, 8, 13, ..., 253. Required: 20th term from the end.',
          toFind: 'a_20 from the end.',
          methodSelectionReason: 'Use formula a_n\' = l - (n - 1)d, where l is the last term and d is the common difference.',
          stepByStepSolution: [
            'Here first term a = 3.',
            'Common difference d = 8 - 3 = 5.',
            'Last term l = 253.',
            'nth term from end formula: a_n\' = l - (n - 1)d.',
            'For n = 20: a_20\' = 253 - (20 - 1)(5).',
            'a_20\' = 253 - (19)(5) = 253 - 95 = 158.'
          ],
          finalAnswer: 'The 20th term from the end is 158.',
          verificationCheck: 'Total terms N: 253 = 3 + (N-1)5 => (N-1)5 = 250 => N = 51. 20th from end is (51 - 20 + 1) = 32nd term from start. a_32 = 3 + 31(5) = 3 + 155 = 158. Verified!',
          commonTrap: 'Finding the 20th term from the beginning instead of from the end.'
        },
        {
          level: 'standard',
          title: 'Determining the First Negative Term',
          question: 'Which term of the AP: 121, 117, 113, ... is its first negative term?',
          given: 'AP: 121, 117, 113, ...',
          toFind: 'Index n of the first term where a_n < 0.',
          methodSelectionReason: 'Set inequality a_n < 0 and solve for the smallest integer n.',
          stepByStepSolution: [
            'First term a = 121.',
            'Common difference d = 117 - 121 = -4.',
            'We want a_n < 0.',
            'a + (n - 1)d < 0',
            '121 + (n - 1)(-4) < 0',
            '121 - 4n + 4 < 0',
            '125 - 4n < 0  =>  4n > 125  =>  n > 125 / 4  =>  n > 31.25.',
            'Since n must be an integer, the smallest integer greater than 31.25 is n = 32.'
          ],
          finalAnswer: 'The 32nd term is the first negative term.',
          verificationCheck: 'a_31 = 121 + 30(-4) = 121 - 120 = 1 (positive). a_32 = 121 + 31(-4) = 121 - 124 = -3 (negative). Verified!',
          commonTrap: 'Rounding down to n = 31 instead of rounding up to the next integer 32.'
        }
      ],
      commonMisconceptions: ['Thinking common difference d must be positive (it is negative for decreasing sequences).'],
      priority: 'Must Master',
      cbseFrequency: 'CBSE board favourite. Tested in 95% of past 10 years papers.',
      sourceTrace: 'NCERT Ch 5 Section 5.2, PYQ Granth 2016-2024'
    },
    {
      id: 'ch5_c2',
      title: 'Sum of First n Terms of an AP',
      topic: 'AP Summation',
      simpleExplanation: 'Add the first and last terms, multiply by the number of pairs (n/2).',
      exactMathIdea: 'S_n = (n / 2) [2a + (n - 1)d]. When the first term a and last term l are known, S_n = (n / 2) [a + l]. Furthermore, the nth term can always be extracted from the sum: a_n = S_n - S_{n-1}.',
      formulaOrTheorem: 'S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[a + l], \\quad a_n = S_n - S_{n-1}',
      whenToUse: 'When asked to calculate total sum of n terms, find how many terms are needed for a specific sum, or find nth term from a quadratic formula for S_n.',
      recognitionClues: ['Find the sum of the first 22 terms', 'How many terms of the AP 9, 17, 25... must be taken to give a sum of 636?', 'If S_n = 3n^2 + 5n, find the AP'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Finding the Number of Terms for Given Sum',
          question: 'How many terms of the AP: 9, 17, 25, ... must be taken to give a sum of 636?',
          given: 'AP: a = 9, d = 17 - 9 = 8. Required sum S_n = 636.',
          toFind: 'Value of n.',
          methodSelectionReason: 'Substitute into S_n = (n/2)[2a + (n - 1)d] and solve the resulting quadratic equation in n.',
          stepByStepSolution: [
            'a = 9, d = 8, S_n = 636.',
            'S_n = (n / 2) [2(9) + (n - 1)(8)] = 636',
            '(n / 2) [18 + 8n - 8] = 636',
            '(n / 2) [8n + 10] = 636',
            'n(4n + 5) = 636',
            '4n^2 + 5n - 636 = 0.',
            'Solve using quadratic formula: a = 4, b = 5, c = -636.',
            'D = b^2 - 4ac = 5^2 - 4(4)(-636) = 25 + 10176 = 10201.',
            'sqrt(D) = sqrt(10201) = 101.',
            'n = (-5 +- 101) / (2 * 4) = (-5 +- 101) / 8.',
            'Taking positive root: n = (-5 + 101) / 8 = 96 / 8 = 12.',
            'Taking negative root: n = -106 / 8 = -53 / 4 (rejected as n must be a positive integer).'
          ],
          finalAnswer: '12 terms must be taken.',
          verificationCheck: 'S_12 = (12/2)[2(9) + 11(8)] = 6[18 + 88] = 6[106] = 636. Correct!',
          commonTrap: 'Arithmetic error when finding the square root of 10201.'
        },
        {
          level: 'application',
          title: 'Extracting AP and nth Term from S_n',
          question: 'If the sum of the first n terms of an AP is given by S_n = 3n^2 + 5n, find the nth term and the 15th term.',
          given: 'S_n = 3n^2 + 5n.',
          toFind: 'a_n and a_15.',
          methodSelectionReason: 'Use the formula a_n = S_n - S_{n-1}.',
          stepByStepSolution: [
            'S_n = 3n^2 + 5n.',
            'S_{n-1} = 3(n - 1)^2 + 5(n - 1) = 3(n^2 - 2n + 1) + 5n - 5 = 3n^2 - 6n + 3 + 5n - 5 = 3n^2 - n - 2.',
            'Now, a_n = S_n - S_{n-1} = (3n^2 + 5n) - (3n^2 - n - 2) = 3n^2 + 5n - 3n^2 + n + 2 = 6n + 2.',
            'To find the 15th term: a_15 = 6(15) + 2 = 90 + 2 = 92.'
          ],
          finalAnswer: 'a_n = 6n + 2, a_15 = 92',
          verificationCheck: 'S_1 = 3(1)^2 + 5(1) = 8 => a_1 = 8. Check formula: a_1 = 6(1) + 2 = 8. S_2 = 3(4) + 10 = 22 => a_2 = 22 - 8 = 14. Check: a_2 = 6(2) + 2 = 14. Common difference d = 6. Verified!',
          commonTrap: 'Expanding S_{n-1} carelessly and making sign errors.'
        }
      ],
      commonMisconceptions: ['Assuming S_n / n gives the nth term (it actually gives the average of the terms).'],
      priority: 'Must Master',
      cbseFrequency: 'Guaranteed 3-mark or 5-mark question.',
      sourceTrace: 'NCERT Ch 5 Section 5.3, PYQ Granth 2016-2024'
    }
  ],
  formulas: [
    {
      id: 'ch5_f1',
      name: 'General nth Term Formula',
      formula: 'a_n = a + (n - 1)d',
      symbolMeanings: [
        { symbol: 'a_n', meaning: 'Value of the term at position n' },
        { symbol: 'a', meaning: 'First term of the AP' },
        { symbol: 'n', meaning: 'Position / number of terms (n in N)' },
        { symbol: 'd', meaning: 'Common difference (a_{k+1} - a_k)' }
      ],
      whenToUse: 'To find any term or check if a value is present in the sequence.',
      conditions: ['n must be a positive integer: n in {1, 2, 3...}.'],
      commonSubstitutions: ['n = (a_n - a)/d + 1'],
      miniExample: {
        question: 'Find the 10th term of the AP: 2, 7, 12...',
        substitution: 'a = 2, d = 5; a_10 = 2 + (10 - 1)5 = 2 + 45',
        result: '47'
      },
      commonMistakes: ['Multiplying n by d without subtracting 1.'],
      sourceTrace: 'NCERT Ch 5 Section 5.2'
    },
    {
      id: 'ch5_f2',
      name: 'Sum of First n Terms',
      formula: 'S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[a + l]',
      symbolMeanings: [
        { symbol: 'S_n', meaning: 'Sum of the first n terms' },
        { symbol: 'l', meaning: 'Last term (a_n)' }
      ],
      whenToUse: 'To find the sum of terms in an AP.',
      conditions: ['Sequence must be arithmetic with constant d.'],
      commonSubstitutions: ['If a and l are known: S_n = (n/2)(a + l)'],
      miniExample: {
        question: 'Find the sum of first 10 terms of 1, 3, 5, 7...',
        substitution: 'S_10 = (10/2)[2(1) + 9(2)] = 5[2 + 18] = 5 * 20',
        result: '100'
      },
      commonMistakes: ['Writing S_n = n[2a + (n - 1)d] (forgetting to divide by 2).'],
      sourceTrace: 'NCERT Ch 5 Section 5.3'
    },
    {
      id: 'ch5_f3',
      name: 'Term from Sum Shortcut',
      formula: 'a_n = S_n - S_{n-1} \\quad \\text{and} \\quad d = S_2 - 2S_1',
      symbolMeanings: [
        { symbol: 'S_1', meaning: 'Sum of 1 term = a_1 (first term)' },
        { symbol: 'S_2', meaning: 'Sum of 2 terms = a_1 + a_2' }
      ],
      whenToUse: 'Fastest MCQ method when given quadratic expression S_n = An^2 + Bn: common difference is 2A and first term is A + B.',
      conditions: ['Only applies when S_n is given as a formula.'],
      commonSubstitutions: ['If S_n = An^2 + Bn => d = 2A, a = A + B'],
      miniExample: {
        question: 'If S_n = 5n^2 - 3n, what is the common difference d?',
        substitution: 'A = 5 => d = 2 * 5 = 10',
        result: 'd = 10'
      },
      commonMistakes: ['Guessing d = 5 (the coefficient of n^2) instead of doubling it (2A = 10).'],
      sourceTrace: 'Support Material Class 10 AP'
    }
  ],
  methodGuides: [
    {
      id: 'ch5_m1',
      questionPattern: 'Sum of Terms Given as a Quadratic in n',
      recognitionClues: ['If S_n = pn^2 + qn', 'Find the nth term from S_n'],
      requiredConcept: 'Relationship between S_n and a_n',
      whatIsGiven: 'Algebraic formula for sum of first n terms.',
      whatMustBeFound: 'The general nth term a_n and common difference d.',
      chosenMethod: 'a_n = S_n - S_{n-1} or test n=1 and n=2.',
      executionSteps: [
        'Step 1: Put n = 1 in S_n to get S_1. Since S_1 is the sum of 1 term, a_1 = S_1.',
        'Step 2: Put n = 2 in S_n to get S_2. Since S_2 = a_1 + a_2, find a_2 = S_2 - S_1.',
        'Step 3: Calculate common difference d = a_2 - a_1.',
        'Step 4: Write general nth term a_n = a_1 + (n - 1)d.',
        'Step 5: For formal boards proof, also compute S_n - S_{n-1} directly by algebra.'
      ],
      verificationMethod: 'Substitute n=1 and n=2 in your final a_n to see if they equal a_1 and a_2.',
      commonTrap: 'Thinking that a_n = S_n / n.',
      exemplarQuestion: 'In an AP, if S_n = n(4n + 1), find the nth term.',
      exemplarAnswer: 'S_1 = 1(5) = 5 => a_1 = 5. S_2 = 2(9) = 18 => a_2 = 18 - 5 = 13. d = 13 - 5 = 8. a_n = 5 + (n - 1)8 = 8n - 3.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch5_q1',
      chapterId: 5,
      topic: 'Common Difference Identification',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'The common difference of the AP: 1/p, (1 - p)/p, (1 - 2p)/p, ... is:',
      options: ['1', '-1', 'p', '-p'],
      correctAnswer: '-1',
      marks: 1,
      hints: ['d = a_2 - a_1 = [(1 - p)/p] - [1/p].'],
      solutionSteps: [
        'd = a_2 - a_1 = (1 - p)/p - 1/p = (1 - p - 1)/p = -p / p = -1.'
      ],
      commonTrap: 'Writing +1 instead of -1.',
      isOriginalPractice: true,
      sourcePdfRef: 'Textbook Ch 5 Section 5.1',
      conceptId: 'ch5_c1'
    },
    {
      id: 'ch5_q2',
      chapterId: 5,
      topic: 'nth Term Calculation',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'Which term of the AP: 3, 15, 27, 39, ... will be 132 more than its 54th term?',
      options: ['64th term', '65th term', '66th term', '67th term'],
      correctAnswer: '65th term',
      marks: 2,
      hints: ['a_n - a_54 = (n - 54)d = 132.'],
      solutionSteps: [
        'Here d = 15 - 3 = 12.',
        'We want a_n = a_54 + 132.',
        'a + (n - 1)d = a + 53d + 132.',
        '(n - 1)d - 53d = 132  =>  (n - 54)d = 132.',
        '(n - 54) * 12 = 132.',
        'n - 54 = 132 / 12 = 11.',
        'n = 54 + 11 = 65.'
      ],
      commonTrap: 'Calculating a_54 first (53 * 12 + 3) by long arithmetic instead of simplifying algebraically.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 5 Ex 5.2 Q11',
      conceptId: 'ch5_c1'
    },
    {
      id: 'ch5_q3',
      chapterId: 5,
      topic: 'Three Terms in AP',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'The sum of three numbers in AP is 27 and their product is 648. Find the numbers.',
      correctAnswer: '6, 9, 12 (or 12, 9, 6)',
      marks: 3,
      hints: ['Let the three terms be a - d, a, a + d. Their sum is 3a = 27.'],
      solutionSteps: [
        'Let the three numbers be a - d, a, a + d.',
        'Sum = (a - d) + a + (a + d) = 3a = 27 => a = 9.',
        'Product = (a - d) * a * (a + d) = a(a^2 - d^2) = 648.',
        '9(9^2 - d^2) = 648 => 81 - d^2 = 648 / 9 = 72.',
        'd^2 = 81 - 72 = 9 => d = ±3.',
        'If d = 3: numbers are 9 - 3, 9, 9 + 3 => 6, 9, 12.',
        'If d = -3: numbers are 9 - (-3), 9, 9 - 3 => 12, 9, 6.'
      ],
      commonTrap: 'Using terms a, a+d, a+2d which creates complicated cubic equations.',
      isOriginalPractice: true,
      sourcePdfRef: 'RD Sharma Ch 5 Ex 5.4 / Support Material',
      conceptId: 'ch5_c1'
    },
    {
      id: 'ch5_q4',
      chapterId: 5,
      topic: 'Ratio of Sums Proof',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'If the ratio of the sum of first n terms of two APs is (7n + 1) : (4n + 27), find the ratio of their 9th terms.',
      options: ['24 : 19', '124 : 95', '18 : 17', '4 : 3'],
      correctAnswer: '24 : 19',
      marks: 4,
      hints: ['To find the ratio of m-th terms, substitute n = 2m - 1 in the ratio of sums. For 9th term, m = 9 => n = 2(9) - 1 = 17.'],
      solutionSteps: [
        'S_n / S\'_n = [ (n/2)(2a1 + (n - 1)d1) ] / [ (n/2)(2a2 + (n - 1)d2) ] = (7n + 1) / (4n + 27).',
        '[ a1 + ((n - 1)/2)d1 ] / [ a2 + ((n - 1)/2)d2 ] = (7n + 1) / (4n + 27).',
        'We need the ratio of 9th terms: (a1 + 8d1) / (a2 + 8d2).',
        'Comparing: (n - 1)/2 = 8 => n - 1 = 16 => n = 17.',
        'Substitute n = 17:',
        'Ratio of 9th terms = [7(17) + 1] / [4(17) + 27] = [119 + 1] / [68 + 27] = 120 / 95.',
        'Simplify by dividing by 5: 120 / 5 = 24; 95 / 5 = 19.',
        'Ratio is 24 : 19.'
      ],
      commonTrap: 'Substituting n = 9 directly into the sum ratio (which gives ratio of sums S_9/S\'_9, NOT 9th terms!).',
      isOriginalPractice: true,
      sourcePdfRef: 'PYQ Granth 2020 Standard',
      conceptId: 'ch5_c2'
    },
    {
      id: 'ch5_q5',
      chapterId: 5,
      topic: 'Double Sum Mystery Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'How many terms of the AP: 24, 21, 18, ... must be taken so that their sum is 78? Explain the double answer.',
      correctAnswer: 'n = 4 or n = 13. Double answer explained: terms 5 to 13 sum to 0.',
      marks: 4,
      hints: ['Solve S_n = (n/2)[2(24) + (n - 1)(-3)] = 78. Then analyze terms from 5th to 13th.'],
      solutionSteps: [
        'a = 24, d = -3, S_n = 78.',
        '(n/2)[48 + (n - 1)(-3)] = 78',
        'n(48 - 3n + 3) = 156 => n(51 - 3n) = 156 => 3n^2 - 51n + 156 = 0.',
        'Divide by 3: n^2 - 17n + 52 = 0.',
        '(n - 4)(n - 13) = 0 => n = 4 or n = 13.',
        'Both n = 4 and n = 13 are valid positive integers.',
        'Explanation of double answer: The first 4 terms are 24, 21, 18, 15 (sum = 78).',
        'The terms from 5th to 13th are: 12, 9, 6, 3, 0, -3, -6, -9, -12.',
        'The sum of these 9 terms is exactly 0 because positive and negative terms cancel each other out.',
        'Hence, the sum of 13 terms remains 78.'
      ],
      commonTrap: 'Rejecting n = 13 thinking there cannot be two answers.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 5 Ex 5.3 Example 13',
      conceptId: 'ch5_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch5_pyq_2024',
      year: 'CBSE 2024 Standard',
      marks: 4,
      topic: 'Case Study: Spiral / Ladder Rows',
      conceptTested: 'Sum of n terms in real-world geometry',
      question: 'A spiral is made up of successive semicircles, with centres alternately at A and B, starting with centre at A, of radii 0.5 cm, 1.0 cm, 1.5 cm, 2.0 cm, ... What is the total length of such a spiral made up of thirteen consecutive semicircles? (Take pi = 22/7)',
      markingSchemeBreakdown: [
        { step: 'Lengths of semicircles form an AP: l_n = pi * r_n', marks: 1.0 },
        { step: 'Identifying a = 0.5 pi and d = 0.5 pi', marks: 1.0 },
        { step: 'Applying S_13 = (13/2)[2a + 12d]', marks: 1.0 },
        { step: 'Substituting pi = 22/7 to get 143 cm', marks: 1.0 }
      ],
      fullSolution: 'Circumference of semicircle = pi * r. Lengths: l1 = 0.5 pi, l2 = 1.0 pi, l3 = 1.5 pi, ... This is an AP with a = 0.5 pi, d = 0.5 pi, n = 13. Total length S_13 = (13/2)[2(0.5 pi) + 12(0.5 pi)] = (13/2)[pi + 6 pi] = (13/2) * 7 pi = (13/2) * 7 * (22/7) = 13 * 11 = 143 cm.',
      commonMistake: 'Using full circle circumference 2*pi*r instead of semicircle pi*r.',
      frequencyTrend: 'Very popular CBSE case-study question (2018, 2020, 2023, 2024).',
      source: 'CBSE Board 2024 Set 30/1/3'
    }
  ],
  commonMistakes: [
    {
      id: 'ch5_m_err1',
      title: 'Distributing d without Parentheses: (n - 1)d',
      mistakeCategory: 'Sign & Algebraic Error',
      flawedWorking: 'Writing a + n - 1 * d = a + n - d.',
      whyItIsWrong: 'Multiplication takes precedence: (n - 1) * d = nd - d.',
      correctWorking: 'Always write brackets: a + (n - 1)d = a + nd - d.',
      howToAvoid: 'Calculate (n - 1) first as a single number before multiplying by d.',
      retryQuestion: {
        question: 'If a = 5, d = -2, find the 11th term.',
        correctAnswer: '-15',
        explanation: 'a_11 = 5 + (11 - 1)(-2) = 5 + 10(-2) = 5 - 20 = -15.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'a_n = a + (n - 1)d (nth term from start).',
      'a_n\' = l - (n - 1)d (nth term from end).',
      'S_n = (n/2)[2a + (n - 1)d] = (n/2)[a + l].',
      'a_n = S_n - S_{n-1}.',
      'If a, b, c are in AP: 2b = a + c.',
      'In S_n = An^2 + Bn, common difference d = 2A, a = A + B.',
      'Double answer for n in S_n occurs when positive and negative terms cancel each other.'
    ],
    speedTips: [
      'To find ratio of m-th terms given ratio of S_n: replace n by (2m - 1).',
      'To check if a number is in AP: solve for n. If n is NOT an integer, the number is NOT in the AP.'
    ],
    lastDayChecklist: [
      'Did you check that n is a positive integer?',
      'Did you remember that d can be negative?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 10,
      questions: [
        {
          id: 'ch5_diag_1',
          chapterId: 5,
          topic: 'Identification',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The 11th term of the AP: -3, -1/2, 2, ... is:',
          options: ['28', '22', '-38', '-46 1/2'],
          correctAnswer: '22',
          marks: 1,
          hints: ['d = -1/2 - (-3) = 5/2. a_11 = -3 + 10(5/2).'],
          solutionSteps: [
            'a = -3, d = -1/2 - (-3) = -1/2 + 3 = 5/2.',
            'a_11 = a + 10d = -3 + 10(5/2) = -3 + 25 = 22.'
          ],
          commonTrap: 'Calculation error with negative fraction: -1/2 - 3 instead of -1/2 - (-3).',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 5 Ex 5.2 Q2(ii)',
          conceptId: 'ch5_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch5_ct_1',
          chapterId: 5,
          topic: 'Sum of AP',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'Find the sum of all two-digit odd positive integers.',
          options: ['2475', '2500', '2430', '2525'],
          correctAnswer: '2475',
          marks: 3,
          hints: ['Two-digit odd integers: 11, 13, 15, ..., 99. First find n, then S_n = (n/2)(a + l).'],
          solutionSteps: [
            'Sequence: 11, 13, 15, ..., 99.',
            'a = 11, d = 2, l = 99.',
            '99 = 11 + (n - 1)2 => 2(n - 1) = 88 => n - 1 = 44 => n = 45.',
            'S_45 = (45/2)[11 + 99] = (45/2)[110] = 45 * 55 = 2475.'
          ],
          commonTrap: 'Including single digit 1, 3, 5, 7, 9 or 3-digit numbers.',
          isOriginalPractice: true,
          sourcePdfRef: 'Support Material Ch 5',
          conceptId: 'ch5_c2'
        }
      ]
    },
    {
      testType: 'Advanced Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch5_adv_1',
          chapterId: 5,
          topic: 'Algebraic AP Proof',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'If m times the m-th term of an AP is equal to n times its n-th term, show that the (m + n)-th term of the AP is zero.',
          correctAnswer: 'a_{m+n} = 0',
          marks: 4,
          hints: ['m[a + (m - 1)d] = n[a + (n - 1)d]. Group terms with a and terms with d.'],
          solutionSteps: [
            'm[a + (m - 1)d] = n[a + (n - 1)d].',
            'ma + m(m - 1)d = na + n(n - 1)d.',
            'ma - na + [m^2 - m - (n^2 - n)]d = 0.',
            'a(m - n) + [(m^2 - n^2) - (m - n)]d = 0.',
            '(m - n) [ a + (m + n - 1)d ] = 0.',
            'Since m != n, (m - n) != 0, we can divide by (m - n):',
            'a + (m + n - 1)d = 0.',
            'Notice that the LHS is precisely the (m + n)-th term a_{m+n}.',
            'Therefore, a_{m+n} = 0. Hence proved!'
          ],
          commonTrap: 'Failing to factor out (m - n) and getting tangled in brackets.',
          isOriginalPractice: true,
          sourcePdfRef: 'PYQ Granth 2019 / RD Sharma',
          conceptId: 'ch5_c1'
        }
      ]
    },
    {
      testType: 'Mastery Test',
      durationMinutes: 60,
      totalMarks: 35,
      questions: [
        {
          id: 'ch5_mst_1',
          chapterId: 5,
          topic: 'AP Case Study Potato Race Challenge',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'In a potato race, a bucket is placed at the starting point, which is 5 m from the first potato, and the other potatoes are placed 3 m apart in a straight line. There are 10 potatoes in the line. A competitor starts from the bucket, picks up the nearest potato, runs back with it, drops it in the bucket, and continues until all potatoes are in the bucket. What is the total distance the competitor has to run?',
          options: ['370 m', '350 m', '380 m', '360 m'],
          correctAnswer: '370 m',
          marks: 4,
          hints: ['Distance for 1st potato: 2 * 5 = 10 m. For 2nd potato: 2 * (5 + 3) = 16 m. For 3rd potato: 2 * (5 + 6) = 22 m. Sum 10 terms of AP.'],
          solutionSteps: [
            'Distance for 1st potato = 2 * 5 = 10 m.',
            'Distance for 2nd potato = 2 * (5 + 3) = 16 m.',
            'Distance for 3rd potato = 2 * (5 + 6) = 22 m.',
            'This forms an AP: 10, 16, 22, ... with a = 10, d = 6, n = 10.',
            'S_10 = (10/2) [2(10) + (10 - 1)(6)] = 5 [20 + 9(6)] = 5 [20 + 54] = 5 * 74 = 370 m.'
          ],
          commonTrap: 'Forgetting that the competitor runs TO the potato AND BACK (multiplying by 2).',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 5 Ex 5.3 Q20',
          conceptId: 'ch5_c2'
        }
      ]
    }
  ]
};
