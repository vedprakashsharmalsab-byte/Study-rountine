import { ChapterData } from './types';

export const CH3_DATA: ChapterData = {
  chapterNumber: 3,
  chapterName: 'Pair of Linear Equations in Two Variables',
  weightageEstimate: '6–8 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Linear Equations in Two Variables models simultaneous real-world constraints. The chapter teaches geometric interpretation (intersecting, parallel, or coincident lines), algebraic methods (substitution and elimination), and translates complex real-world situations (upstream/downstream, two-digit numbers, fixed/variable costs) into solvable algebraic systems.',
    prerequisites: ['Plotting linear graphs ax + by + c = 0', 'Solving single-variable linear equations', 'Coordinate geometry quadrants and intercepts'],
    coreIdeas: [
      'Two linear equations represent two straight lines on the Cartesian plane.',
      'Consistency Condition: Unique solution (intersecting) <=> a1/a2 != b1/b2.',
      'Infinitely many solutions (coincident) <=> a1/a2 = b1/b2 = c1/c2.',
      'Inconsistent / No solution (parallel) <=> a1/a2 = b1/b2 != c1/c2.',
      'Elimination method: Multiply equations by suitable constants to make the coefficients of one variable numerically equal, then add or subtract.',
      'Upstream speed = (x - y) km/h, Downstream speed = (x + y) km/h, where x is speed of boat in still water and y is stream speed.',
      'Two-digit number: 10x + y (x = tens digit, y = units digit). Reversing digits produces 10y + x.'
    ],
    keyRelationships: [
      'For parallel lines, slopes are identical (a1/a2 = b1/b2), but y-intercepts differ (!= c1/c2).',
      'For coincident lines, one equation is simply a non-zero scalar multiple of the other.'
    ],
    frequentMisunderstandings: [
      'Not putting both equations in the same standard form before comparing ratios (e.g. keeping c1 on LHS and c2 on RHS leads to sign flips in c1/c2!).',
      'Taking upstream speed as (y - x) instead of (x - y). The boat must be faster than the stream (x > y)!',
      'Assuming "a two-digit number" is represented by xy instead of 10x + y.'
    ],
    examImportanceEvidence: 'One of the highest-weightage algebra chapters. Typically features: 1 MCQ on ratio conditions (k value for no/infinite solutions) + 1 Long Answer (4 or 5 marks word problem or case study on upstream/downstream, speed-time, or taxi charges).'
  },
  concepts: [
    {
      id: 'ch3_c1',
      title: 'Consistency Conditions and Ratio Test',
      topic: 'Line Relationships and Solvability',
      simpleExplanation: 'By comparing the ratios of x-coefficients, y-coefficients, and constant terms, you can instantly tell if lines cross once, never cross, or lie on top of each other.',
      exactMathIdea: 'For a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0: (1) Intersecting lines / Unique solution: a1/a2 != b1/b2 (Consistent). (2) Coincident lines / Infinitely many solutions: a1/a2 = b1/b2 = c1/c2 (Consistent & Dependent). (3) Parallel lines / No solution: a1/a2 = b1/b2 != c1/c2 (Inconsistent).',
      formulaOrTheorem: '\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\implies 1 \\text{ sol}, \\quad \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\implies \\infty \\text{ sol}, \\quad \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\implies 0 \\text{ sol}',
      whenToUse: 'When asked to determine consistency, nature of lines, or find unknown parameter k for no solution or infinite solutions.',
      recognitionClues: ['For what value of k will the system have no solution?', 'Check whether the pair of equations is consistent', 'Lines represent parallel lines'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Finding k for Infinitely Many Solutions',
          question: 'Find the values of a and b for which the following pair of linear equations has an infinite number of solutions: 2x + 3y = 7; (a - b)x + (a + b)y = 3a + b - 2.',
          given: 'Two linear equations, condition: infinitely many solutions.',
          toFind: 'Values of a and b.',
          methodSelectionReason: 'Infinitely many solutions requires a1/a2 = b1/b2 = c1/c2.',
          stepByStepSolution: [
            'Write equations in standard form:',
            '2x + 3y - 7 = 0  =>  a1 = 2, b1 = 3, c1 = -7',
            '(a - b)x + (a + b)y - (3a + b - 2) = 0  =>  a2 = a - b, b2 = a + b, c2 = -(3a + b - 2)',
            'Condition: a1/a2 = b1/b2 = c1/c2',
            '2 / (a - b) = 3 / (a + b) = 7 / (3a + b - 2)',
            'Equating 1st and 2nd: 2(a + b) = 3(a - b) => 2a + 2b = 3a - 3b => a = 5b  --- (1)',
            'Equating 2nd and 3rd: 3(3a + b - 2) = 7(a + b) => 9a + 3b - 6 = 7a + 7b => 2a - 4b = 6 => a - 2b = 3  --- (2)',
            'Substitute (1) into (2): 5b - 2b = 3 => 3b = 3 => b = 1.',
            'Then a = 5(1) = 5.'
          ],
          finalAnswer: 'a = 5, b = 1',
          verificationCheck: 'Check ratios: 2/(5-1) = 2/4 = 1/2. 3/(5+1) = 3/6 = 1/2. 7/(3*5+1-2) = 7/14 = 1/2. All equal 1/2. Correct!',
          commonTrap: 'Forgetting to check the second equality (using only 2/(a-b) = 3/(a+b) which yields a single relation a = 5b, not unique numbers).'
        }
      ],
      commonMisconceptions: ['Forgetting that consistent means AT LEAST one solution (both unique and infinite are consistent!).'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board papers as 1-mark MCQ or 2-mark question.',
      sourceTrace: 'NCERT Ch 3 Section 3.2, PYQ Granth 2016-2024'
    },
    {
      id: 'ch3_c2',
      title: 'Elimination Method for Solving Systems',
      topic: 'Algebraic Solving Techniques',
      simpleExplanation: 'Multiply one or both equations by numbers so that the coefficients of x (or y) match. Then add or subtract to eliminate that variable.',
      exactMathIdea: 'Given a1 x + b1 y = c1 and a2 x + b2 y = c2: Multiply eq 1 by a2 and eq 2 by a1. Subtract the resulting equations to eliminate x and obtain a single linear equation in y.',
      formulaOrTheorem: 'a_2(a_1 x + b_1 y) - a_1(a_2 x + b_2 y) = a_2 c_1 - a_1 c_2 \\implies (a_2 b_1 - a_1 b_2)y = a_2 c_1 - a_1 c_2',
      whenToUse: 'Fastest and least error-prone method for any system of linear equations in board exams.',
      recognitionClues: ['Solve the pair of equations', 'Solve for x and y'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Symmetric Coefficient System (Big Numbers)',
          question: 'Solve for x and y: 49x + 51y = 499; 51x + 49y = 501.',
          given: 'System with swapped coefficients 49 and 51.',
          toFind: 'Values of x and y.',
          methodSelectionReason: 'When coefficients of x and y are interchanged, ADD the two equations to get x + y, then SUBTRACT them to get x - y. Do not cross-multiply giant numbers!',
          stepByStepSolution: [
            'Eq 1: 49x + 51y = 499',
            'Eq 2: 51x + 49y = 501',
            'Step 1 (Add Eq 1 and Eq 2): (49+51)x + (51+49)y = 499 + 501  =>  100x + 100y = 1000  =>  x + y = 10  --- (3)',
            'Step 2 (Subtract Eq 1 from Eq 2): (51-49)x + (49-51)y = 501 - 499  =>  2x - 2y = 2  =>  x - y = 1  --- (4)',
            'Step 3 (Add Eq 3 and Eq 4): 2x = 11  =>  x = 11/2 = 5.5 (or if standard integer: check sum).',
            'Let us re-verify: x = 11/2, y = 9/2.'
          ],
          finalAnswer: 'x = 11/2, y = 9/2 (or 5.5 and 4.5)',
          verificationCheck: '49(5.5) + 51(4.5) = 269.5 + 229.5 = 499. Verified!',
          commonTrap: 'Trying to multiply Eq 1 by 51 and Eq 2 by 49, resulting in massive arithmetic errors.'
        }
      ],
      commonMisconceptions: ['Forgetting to distribute the multiplier to the constant term on RHS.'],
      priority: 'Must Master',
      cbseFrequency: 'Fundamental skill tested in almost every 3-mark and 5-mark question.',
      sourceTrace: 'NCERT Ch 3 Section 3.3.2'
    },
    {
      id: 'ch3_c3',
      title: 'Real-World Word Problems (Speed, Time, Boat)',
      topic: 'Application Word Problems',
      simpleExplanation: 'Convert sentences into equations. For upstream/downstream: River pushes you downstream (x+y) and fights you upstream (x-y). Time = Distance / Speed.',
      exactMathIdea: 'Let speed of boat in still water = x km/h, speed of stream = y km/h. Downstream speed = x + y. Upstream speed = x - y. Time = Distance / Speed. Form equations of total time = t1 + t2.',
      formulaOrTheorem: 'v_{\\text{down}} = x + y, \\quad v_{\\text{up}} = x - y, \\quad t = \\frac{d}{v}',
      whenToUse: 'When a boat travels upstream/downstream, or trains/cars travel at varying speeds.',
      recognitionClues: ['A boat goes 30 km upstream and 44 km downstream in 10 hours', 'Still water speed', 'Speed of current/stream'],
      workedExamples: [
        {
          level: 'application',
          title: 'Classic Upstream and Downstream Problem',
          question: 'A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.',
          given: 'Journey 1: 30 km up + 44 km down = 10 hrs. Journey 2: 40 km up + 55 km down = 13 hrs.',
          toFind: 'Speed of boat (x) and speed of stream (y).',
          methodSelectionReason: 'Substitute u = 1/(x-y) and v = 1/(x+y) to convert reducible non-linear equations into standard linear form.',
          stepByStepSolution: [
            'Let speed of boat = x km/h, stream = y km/h (x > y).',
            'Upstream speed = x - y; Downstream speed = x + y.',
            '30/(x - y) + 44/(x + y) = 10  --- (1)',
            '40/(x - y) + 55/(x + y) = 13  --- (2)',
            'Let u = 1/(x - y) and v = 1/(x + y):',
            '30u + 44v = 10  =>  15u + 22v = 5  --- (3)',
            '40u + 55v = 13  --- (4)',
            'Multiply (3) by 8 and (4) by 3 to eliminate u:',
            '120u + 176v = 40',
            '120u + 165v = 39',
            'Subtracting: 11v = 1  =>  v = 1/11.',
            'Substitute v = 1/11 into (3): 15u + 22(1/11) = 5  =>  15u + 2 = 5  =>  15u = 3  =>  u = 1/5.',
            'Now substitute back: 1/(x - y) = 1/5  =>  x - y = 5  --- (5)',
            '1/(x + y) = 1/11  =>  x + y = 11  --- (6)',
            'Adding (5) and (6): 2x = 16  =>  x = 8 km/h.',
            'Subtracting: 2y = 6  =>  y = 3 km/h.'
          ],
          finalAnswer: 'Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h.',
          verificationCheck: 'Upstream = 8-3 = 5 km/h. Downstream = 8+3 = 11 km/h. Time 1: 30/5 + 44/11 = 6 + 4 = 10 hrs. Time 2: 40/5 + 55/11 = 8 + 5 = 13 hrs. Verified!',
          commonTrap: 'Forgetting to invert u and v back to (x - y) and (x + y).'
        }
      ],
      commonMisconceptions: ['Assuming upstream is faster than downstream.'],
      priority: 'Must Master',
      cbseFrequency: 'CBSE 5-mark question in 60% of past board exams.',
      sourceTrace: 'NCERT Ch 3 Ex 3.6 Q2(i), PYQ Granth 2017-2023'
    }
  ],
  formulas: [
    {
      id: 'ch3_f1',
      name: 'Consistency Ratio Matrix',
      formula: '\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\quad \\text{vs} \\quad \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\quad \\text{vs} \\quad \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}',
      symbolMeanings: [
        { symbol: 'a1, a2', meaning: 'Coefficients of x in eq 1 and eq 2' },
        { symbol: 'b1, b2', meaning: 'Coefficients of y in eq 1 and eq 2' },
        { symbol: 'c1, c2', meaning: 'Constant terms when both on the same side' }
      ],
      whenToUse: 'For any question asking for unique solution, no solution, or infinitely many solutions.',
      conditions: ['Both equations must have constants on the SAME side (both LHS or both RHS).'],
      commonSubstitutions: ['No solution: a1/a2 = b1/b2 != c1/c2'],
      miniExample: {
        question: 'For what k does 2x + ky = 1 and 3x - 5y = 7 have a unique solution?',
        substitution: 'a1/a2 != b1/b2 => 2/3 != k/(-5) => k != -10/3',
        result: 'k != -10/3'
      },
      commonMistakes: ['Writing k = -10/3 instead of k != -10/3 for UNIQUE solution.'],
      sourceTrace: 'NCERT Table 3.1'
    }
  ],
  methodGuides: [
    {
      id: 'ch3_m1',
      questionPattern: 'Two-Digit Number Problems',
      recognitionClues: ['A two-digit number', 'The sum of the digits of a two-digit number is 9', 'The number obtained by reversing the digits'],
      requiredConcept: 'Place value expansion: Number = 10(tens digit) + (units digit)',
      whatIsGiven: 'Sum/difference of digits and relation between original and reversed number.',
      whatMustBeFound: 'The original two-digit number.',
      chosenMethod: 'Let tens digit = x, units digit = y. Original number = 10x + y, Reversed number = 10y + x.',
      executionSteps: [
        'Step 1: Write: "Let tens digit be x and units digit be y".',
        'Step 2: Original number = 10x + y; Reversed number = 10y + x.',
        'Step 3: Translate first sentence into Eq 1 (e.g. x + y = 9).',
        'Step 4: Translate second sentence into Eq 2 (e.g. 10y + x = 10x + y + 27).',
        'Step 5: Simplify Eq 2 to standard form ax + by = c.',
        'Step 6: Solve simultaneously for x and y using elimination.',
        'Step 7: Substitute digits back to write the final number 10x + y.'
      ],
      verificationMethod: 'Sum the digits of the final number and test the reversal condition.',
      commonTrap: 'Writing the final answer as x=3, y=6 and forgetting to write the actual number "36".',
      exemplarQuestion: 'The sum of the digits of a two digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.',
      exemplarAnswer: 'x + y = 9; 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => 8x = y. Substituting into x + y = 9: x + 8x = 9 => 9x = 9 => x = 1, y = 8. Number = 18.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch3_q1',
      chapterId: 3,
      topic: 'Ratio Test',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'The pair of equations x + 2y + 5 = 0 and -3x - 6y + 1 = 0 has:',
      options: ['a unique solution', 'exactly two solutions', 'infinitely many solutions', 'no solution'],
      correctAnswer: 'no solution',
      marks: 1,
      hints: ['Compare a1/a2, b1/b2, and c1/c2.'],
      solutionSteps: [
        'a1/a2 = 1 / (-3) = -1/3',
        'b1/b2 = 2 / (-6) = -1/3',
        'c1/c2 = 5 / 1 = 5',
        'Since a1/a2 = b1/b2 != c1/c2, the lines are parallel and have no solution.'
      ],
      commonTrap: 'Ignoring the signs of -3 and -6.',
      isOriginalPractice: true,
      sourcePdfRef: 'Textbook Ch 3 Section 3.2',
      conceptId: 'ch3_c1'
    },
    {
      id: 'ch3_q2',
      chapterId: 3,
      topic: 'Solving Linear System',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'Solve for x and y: 2x + 3y = 11 and 2x - 4y = -24. Hence find the value of m for which y = m x + 3.',
      options: ['m = -1', 'm = 1', 'm = 2', 'm = -2'],
      correctAnswer: 'm = -1',
      marks: 2,
      hints: ['Subtract the two equations to eliminate 2x directly.'],
      solutionSteps: [
        '(2x + 3y) - (2x - 4y) = 11 - (-24)  =>  7y = 35  =>  y = 5.',
        '2x + 3(5) = 11  =>  2x = 11 - 15 = -4  =>  x = -2.',
        'Now substitute x = -2 and y = 5 into y = mx + 3:',
        '5 = m(-2) + 3  =>  2 = -2m  =>  m = -1.'
      ],
      commonTrap: 'Calculation mistake with double negative 11 - (-24).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 3 Ex 3.3 Q2',
      conceptId: 'ch3_c2'
    },
    {
      id: 'ch3_q3',
      chapterId: 3,
      topic: 'Fixed and Variable Charges',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A taxi charge in a city consists of a fixed charge together with the charge for the distance covered. For a distance of 10 km, the charge paid is Rs 105 and for a journey of 15 km, the charge paid is Rs 155. What are the fixed charges and the charge per km?',
      options: ['Fixed Rs 5, Rs 10/km', 'Fixed Rs 10, Rs 5/km', 'Fixed Rs 15, Rs 9/km', 'Fixed Rs 25, Rs 8/km'],
      correctAnswer: 'Fixed Rs 5, Rs 10/km',
      marks: 3,
      hints: ['Let fixed charge = x and rate per km = y. Form x + 10y = 105 and x + 15y = 155.'],
      solutionSteps: [
        'x + 10y = 105  --- (1)',
        'x + 15y = 155  --- (2)',
        'Subtracting (1) from (2): 5y = 50 => y = 10.',
        'x + 10(10) = 105 => x = 105 - 100 = 5.',
        'Fixed charge = Rs 5, Charge per km = Rs 10.'
      ],
      commonTrap: 'Multiplying fixed charge by distance.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 3 Ex 3.3 Q3(iv)',
      conceptId: 'ch3_c3'
    },
    {
      id: 'ch3_q4',
      chapterId: 3,
      topic: 'Fraction Problem',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'A fraction becomes 9/11, if 2 is added to both the numerator and the denominator. If 3 is added to both the numerator and the denominator it becomes 5/6. Find the fraction.',
      options: ['7/9', '5/7', '8/11', '9/11'],
      correctAnswer: '7/9',
      marks: 3,
      hints: ['Let fraction be x/y. (x+2)/(y+2) = 9/11 and (x+3)/(y+3) = 5/6.'],
      solutionSteps: [
        '11(x + 2) = 9(y + 2) => 11x + 22 = 9y + 18 => 11x - 9y = -4  --- (1)',
        '6(x + 3) = 5(y + 3) => 6x + 18 = 5y + 15 => 6x - 5y = -3  --- (2)',
        'Multiply (1) by 5 and (2) by 9:',
        '55x - 45y = -20',
        '54x - 45y = -27',
        'Subtracting: x = 7.',
        'Substitute in (2): 6(7) - 5y = -3 => 42 + 3 = 5y => 5y = 45 => y = 9.',
        'Fraction is x/y = 7/9.'
      ],
      commonTrap: 'Inverting numerator and denominator when cross multiplying.',
      isOriginalPractice: true,
      sourcePdfRef: 'PYQ Granth 2022 Standard',
      conceptId: 'ch3_c3'
    },
    {
      id: 'ch3_q5',
      chapterId: 3,
      topic: 'Work and Time System Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: '2 women and 5 men can together finish an embroidery work in 4 days, while 3 women and 6 men can finish it in 3 days. Find the time taken by 1 woman alone to finish the work, and also that taken by 1 man alone.',
      correctAnswer: '1 woman = 18 days, 1 man = 36 days',
      marks: 4,
      hints: ['Let 1 woman take x days and 1 man take y days. 1 day work: 2/x + 5/y = 1/4.'],
      solutionSteps: [
        'Let 1 woman take x days and 1 man take y days.',
        '1 woman 1-day work = 1/x; 1 man 1-day work = 1/y.',
        '2/x + 5/y = 1/4  --- (1)',
        '3/x + 6/y = 1/3  --- (2)',
        'Let u = 1/x and v = 1/y:',
        '2u + 5v = 1/4  =>  8u + 20v = 1',
        '3u + 6v = 1/3  =>  9u + 18v = 1',
        'Multiply first by 9 and second by 8:',
        '72u + 180v = 9',
        '72u + 144v = 8',
        'Subtracting: 36v = 1 => v = 1/36 => y = 36 days.',
        'Substitute v = 1/36 into 2u + 5(1/36) = 1/4 => 2u = 9/36 - 5/36 = 4/36 = 1/9 => u = 1/18 => x = 18 days.'
      ],
      commonTrap: 'Writing 2x + 5y = 4 (work is inversely proportional to time!).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 3 Ex 3.6 Q2(ii) / Support Material',
      conceptId: 'ch3_c3'
    }
  ],
  pyqs: [
    {
      id: 'ch3_pyq_2024',
      year: 'CBSE 2024 Standard',
      marks: 1,
      topic: 'Consistency Condition',
      conceptTested: 'Parallel lines / No solution',
      question: 'If the lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then the value of k is:',
      markingSchemeBreakdown: [
        { step: 'Equating a1/a2 = b1/b2 != c1/c2', marks: 0.5 },
        { step: 'Solving 3/2 = 2k/5 to find k = 15/4', marks: 0.5 }
      ],
      fullSolution: 'For parallel lines, a1/a2 = b1/b2 != c1/c2. Here a1 = 3, b1 = 2k, c1 = -2; a2 = 2, b2 = 5, c2 = 1. 3/2 = 2k/5 => 4k = 15 => k = 15/4. Check: c1/c2 = -2/1 = -2 != 3/2. Hence k = 15/4.',
      commonMistake: 'Writing k = 5/4 due to division errors.',
      frequencyTrend: 'Guaranteed 1-mark question in almost every board set.',
      source: 'CBSE Board 2024 Set 30/1/2'
    }
  ],
  commonMistakes: [
    {
      id: 'ch3_m_err1',
      title: 'Sign Inversion in Constant Ratio c1/c2',
      mistakeCategory: 'Incorrect Condition/Constraint',
      flawedWorking: 'Given 2x + 3y = 7 and 4x + 6y + 14 = 0. Student computes c1 = 7, c2 = 14 and says c1/c2 = 1/2.',
      whyItIsWrong: 'In eq 1, 7 is on RHS (c1 = -7 in standard form). In eq 2, 14 is on LHS (c2 = +14). They have opposite signs!',
      correctWorking: 'Convert both to standard form ax + by + c = 0: 2x + 3y - 7 = 0 and 4x + 6y + 14 = 0. Then c1/c2 = -7/14 = -1/2. Lines are parallel, not coincident.',
      howToAvoid: 'ALWAYS shift all constants to the left-hand side before writing down a, b, c.',
      retryQuestion: {
        question: 'Are 3x - 4y = 5 and 6x - 8y + 10 = 0 coincident or parallel?',
        correctAnswer: 'Parallel (no solution)',
        explanation: '3x - 4y - 5 = 0 and 6x - 8y + 10 = 0. a1/a2 = 3/6 = 1/2, b1/b2 = -4/(-8) = 1/2, c1/c2 = -5/10 = -1/2. a1/a2 = b1/b2 != c1/c2.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Unique solution: a1/a2 != b1/b2 (Intersecting lines).',
      'Infinitely many solutions: a1/a2 = b1/b2 = c1/c2 (Coincident lines).',
      'No solution: a1/a2 = b1/b2 != c1/c2 (Parallel lines).',
      'Upstream speed = (x - y), Downstream speed = (x + y).',
      'Two digit number = 10x + y; reversed = 10y + x.',
      'Symmetric coefficients (ax + by = c, bx + ay = d): Add once, subtract once.'
    ],
    speedTips: [
      'In ratio test MCQs: Check if cross-multiplication a1*b2 == a2*b1 holds first.',
      'In speed-distance word problems, check units (km/h vs m/s, hours vs minutes).'
    ],
    lastDayChecklist: [
      'Did you put both constants on the same side before checking ratios?',
      'Did you remember that time = distance / speed?',
      'Did you write the final two-digit number instead of just x and y?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 10,
      questions: [
        {
          id: 'ch3_diag_1',
          chapterId: 3,
          topic: 'Graphical Consistency',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'If a pair of linear equations is consistent, then the lines will be:',
          options: ['always coincident', 'parallel', 'always intersecting', 'intersecting or coincident'],
          correctAnswer: 'intersecting or coincident',
          marks: 1,
          hints: ['Consistent means having AT LEAST one solution.'],
          solutionSteps: ['Consistent system has either 1 solution (intersecting) or infinitely many (coincident).'],
          commonTrap: 'Choosing "always intersecting" and forgetting coincident lines are also consistent.',
          isOriginalPractice: true,
          sourcePdfRef: 'Diagnostic Test',
          conceptId: 'ch3_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch3_ct_1',
          chapterId: 3,
          topic: 'Speed-Distance Problem',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Points A and B are 100 km apart on a highway. One car starts from A and another from B at the same time. If the cars travel in the same direction at different speeds, they meet in 5 hours. If they travel towards each other, they meet in 1 hour. What are the speeds of the two cars?',
          correctAnswer: 'Speed of car A = 60 km/h, Speed of car B = 40 km/h',
          marks: 4,
          hints: ['Relative speed in same direction is (x - y). Relative speed towards each other is (x + y). Distance = Speed * Time.'],
          solutionSteps: [
            'Let speed of car A = x km/h, car B = y km/h (x > y).',
            'Same direction: Relative speed = x - y. In 5 hours: 5(x - y) = 100 => x - y = 20  --- (1)',
            'Opposite direction (towards each other): Relative speed = x + y. In 1 hour: 1(x + y) = 100 => x + y = 100  --- (2)',
            'Adding (1) and (2): 2x = 120 => x = 60 km/h.',
            'Subtracting: 2y = 80 => y = 40 km/h.'
          ],
          commonTrap: 'Formulating 5x + 5y = 100 for the same direction instead of 5(x - y) = 100.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 3 Ex 3.5 Q4(iv)',
          conceptId: 'ch3_c3'
        }
      ]
    },
    {
      testType: 'Advanced Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch3_adv_1',
          chapterId: 3,
          topic: 'Cyclic Quadrilateral Linear System',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'ABCD is a cyclic quadrilateral. Find the angles of the cyclic quadrilateral if angle A = 4y + 20, angle B = 3y - 5, angle C = -4x, angle D = -7x + 5.',
          correctAnswer: 'A = 120°, B = 70°, C = 60°, D = 110°',
          marks: 4,
          hints: ['Opposite angles of a cyclic quadrilateral sum to 180°: A + C = 180° and B + D = 180°.'],
          solutionSteps: [
            'A + C = 180 => (4y + 20) + (-4x) = 180 => -4x + 4y = 160 => -x + y = 40  --- (1)',
            'B + D = 180 => (3y - 5) + (-7x + 5) = 180 => -7x + 3y = 180  --- (2)',
            'From (1), y = x + 40. Substitute in (2): -7x + 3(x + 40) = 180 => -4x + 120 = 180 => -4x = 60 => x = -15.',
            'Then y = -15 + 40 = 25.',
            'Angles: A = 4(25)+20 = 120°; B = 3(25)-5 = 70°; C = -4(-15) = 60°; D = -7(-15)+5 = 110°.'
          ],
          commonTrap: 'Panicking because x is negative (x = -15). The angles themselves are positive!',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 3 Optional Exercise Q8',
          conceptId: 'ch3_c3'
        }
      ]
    },
    {
      testType: 'Mastery Test',
      durationMinutes: 60,
      totalMarks: 35,
      questions: [
        {
          id: 'ch3_mst_1',
          chapterId: 3,
          topic: 'Mastery Word Problem',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'A railway half ticket costs half the full fare, but the reservation charges are the same on a half ticket as on a full ticket. One reserved first class ticket from station A to B costs Rs 2530. Also, one reserved first class ticket and one reserved first class half ticket from A to B costs Rs 3810. Find the full first class fare from station A to B and the reservation charge per ticket.',
          correctAnswer: 'Full fare = Rs 2500, Reservation charge = Rs 30',
          marks: 4,
          hints: ['Let full fare = x and reservation charge = y. Ticket = x + y. Half ticket = x/2 + y.'],
          solutionSteps: [
            'Let full fare = x, reservation charge = y.',
            'One full ticket: x + y = 2530  --- (1)',
            'One full and one half ticket: (x + y) + (x/2 + y) = 3810  =>  3x/2 + 2y = 3810  =>  3x + 4y = 7620  --- (2)',
            'Multiply (1) by 3: 3x + 3y = 7590  --- (3)',
            'Subtract (3) from (2): y = 7620 - 7590 = 30.',
            'Substitute into (1): x + 30 = 2530 => x = 2500.'
          ],
          commonTrap: 'Halving the reservation charge as well as the fare on the half ticket.',
          isOriginalPractice: true,
          sourcePdfRef: 'RD Sharma Class 10 Ch 3 Exemplar',
          conceptId: 'ch3_c3'
        }
      ]
    }
  ]
};
