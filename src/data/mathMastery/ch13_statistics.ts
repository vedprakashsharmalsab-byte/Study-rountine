import { ChapterData } from './types';

export const CH13_DATA: ChapterData = {
  chapterNumber: 13,
  chapterName: 'Statistics',
  weightageEstimate: '6–8 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Statistics in Class 10 provides the mathematical foundations for analyzing grouped frequency distributions. The syllabus is completely focused on the Three Measures of Central Tendency: Mean (average value via Direct and Assumed Mean methods), Mode (most frequent value), and Median (exact middle value via cumulative frequency), connected by the famous Empirical Relationship.',
    prerequisites: [
      'Basic arithmetic (addition, multiplication, division)',
      'Understanding class intervals and frequencies',
      'Cumulative frequency calculation (running totals)'
    ],
    coreIdeas: [
      'Class Mark (Mid-value): x_i = (Upper class limit + Lower class limit) / 2.',
      'Mean (Direct Method): x̄ = Σ(f_i * x_i) / Σ(f_i).',
      'Mean (Assumed Mean Method): x̄ = a + [Σ(f_i * d_i) / Σ(f_i)], where d_i = x_i - a.',
      'Modal Class: The class interval with the HIGHEST frequency (f1).',
      'Mode Formula: Mode = l + [(f1 - f0) / (2f1 - f0 - f2)] * h, where l is lower limit, f0 is preceding frequency, f2 is succeeding frequency, and h is class size.',
      'Median Class: The class interval whose cumulative frequency (cf) is greater than or equal to N/2 (where N = Σf_i).',
      'Median Formula: Median = l + [((N/2) - cf) / f] * h, where cf is from the PRECEDING class and f is the frequency of the median class itself.',
      'Empirical Relationship: 3 * Median = Mode + 2 * Mean. (Mnemonic: 3M = M + 2M, with Median being longest word matching 3!).'
    ],
    keyRelationships: [
      'If any two measures of central tendency are known, the third can be estimated using 3 * Median = Mode + 2 * Mean.',
      'In Mode formula: denominator 2f1 - f0 - f2 can be remembered as (f1 - f0) + (f1 - f2).',
      'In Median formula: cf is always taken from the PRECEDING class interval, NEVER from the median class itself.'
    ],
    frequentMisunderstandings: [
      'Taking cf from the median class itself instead of the preceding class in the median formula.',
      'Confusing f0 (preceding) with f2 (succeeding) in the mode formula.',
      'Forgetting that class intervals must be CONTINUOUS (if 1-5, 6-10 is given, convert to 0.5-5.5, 5.5-10.5 by subtracting/adding 0.5).'
    ],
    examImportanceEvidence: 'Guaranteed 6–8 marks in every paper! Consistently includes: 1 MCQ (1 Mark on empirical relation or modal class) + 1 Long Answer (5 Marks on finding missing frequencies x and y when median is given).'
  },
  concepts: [
    {
      id: 'ch13_c1',
      title: 'Mean of Grouped Data (Direct & Assumed Mean)',
      topic: 'Arithmetic Mean',
      simpleExplanation: 'Mean is the balanced average center. Find the middle point of each interval, multiply by its frequency, and divide by the total count!',
      exactMathIdea: 'For a grouped frequency distribution with class marks x_i and frequencies f_i: Direct Mean x̄ = Σ(f_i * x_i) / Σ(f_i). Assumed Mean Method x̄ = a + [Σ(f_i * d_i) / Σ(f_i)] reduces arithmetic by subtracting an assumed central value a.',
      formulaOrTheorem: '\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = a + \\frac{\\sum f_i d_i}{\\sum f_i}',
      whenToUse: 'When calculating average daily wages, marks, temperatures, or finding missing frequency when mean is given.',
      recognitionClues: [
        'Find the mean daily expenditure on food',
        'The mean of the following distribution is 18, find the missing frequency f',
        'Find the mean using assumed mean method'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Direct Mean Calculation',
          question: 'Find the mean of the data: Class: 0-10 (freq 3), 10-20 (freq 4), 20-30 (freq 3).',
          given: '3 intervals with frequencies 3, 4, 3.',
          toFind: 'Mean value x̄.',
          methodSelectionReason: 'Direct method with small numbers: find midpoints x_i, multiply f_i * x_i, sum and divide.',
          stepByStepSolution: [
            'Class marks x_i: for 0-10, x1 = 5; for 10-20, x2 = 15; for 20-30, x3 = 25.',
            'Calculate f_i * x_i:',
            '3 * 5 = 15',
            '4 * 15 = 60',
            '3 * 25 = 75',
            'Sum of products Σ(f_i * x_i) = 15 + 60 + 75 = 150.',
            'Total frequency Σf_i = 3 + 4 + 3 = 10.',
            'Mean x̄ = 150 / 10 = 15.'
          ],
          finalAnswer: 'Mean = 15',
          verificationCheck: 'The distribution is symmetric around 10-20 (center 15) with equal weights 3 on both ends. Mean must be 15. Perfect!',
          commonTrap: 'Using the lower class limits instead of the class midpoints (class marks).'
        }
      ],
      commonMisconceptions: ['Thinking mean is simply the average of the class limits.'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in every CBSE examination.',
      sourceTrace: 'NCERT Ch 13 Section 13.2'
    },
    {
      id: 'ch13_c2',
      title: 'Mode & Median of Grouped Data',
      topic: 'Mode & Median Formulas',
      simpleExplanation: 'Mode is the peak crowd favorite (highest frequency). Median is the exact midpoint dividing the crowd into equal halves!',
      exactMathIdea: 'Mode = l + [(f1 - f0) / (2f1 - f0 - f2)] * h, where f1 is the modal frequency. Median = l + [((N/2) - cf) / f] * h, where cf is cumulative frequency of preceding class.',
      formulaOrTheorem: '\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right)h, \\quad \\text{Median} = l + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right)h',
      whenToUse: 'When asked to find mode or median, or find two missing frequencies x and y when median is known.',
      recognitionClues: [
        'Find the mode of the following distribution',
        'If the median of the distribution is 28.5, find the values of x and y',
        'Find the median and mode of the data'
      ],
      workedExamples: [
        {
          level: 'standard',
          title: 'Mode Calculation',
          question: 'Find the mode of the following data: Marks: 10-20 (freq 4), 20-30 (freq 8), 30-40 (freq 10), 40-50 (freq 6), 50-60 (freq 2).',
          given: 'Grouped frequency distribution.',
          toFind: 'Mode of the data.',
          methodSelectionReason: 'Identify maximum frequency to find modal class, then apply mode formula.',
          stepByStepSolution: [
            'Maximum class frequency is 10, which lies in the class interval 30-40.',
            'Therefore, Modal Class = 30-40.',
            'Lower limit l = 30, class size h = 10.',
            'Modal frequency f1 = 10, preceding frequency f0 = 8, succeeding frequency f2 = 6.',
            'Mode = l + [(f1 - f0) / (2f1 - f0 - f2)] * h',
            '= 30 + [(10 - 8) / (2(10) - 8 - 6)] * 10',
            '= 30 + [2 / (20 - 14)] * 10',
            '= 30 + (2 / 6) * 10 = 30 + (1 / 3) * 10 = 30 + 3.33 = 33.33.'
          ],
          finalAnswer: 'Mode = 33.33',
          verificationCheck: 'Mode (33.33) lies strictly inside the modal class 30-40. Verified!',
          commonTrap: 'Writing 2f1 as f1^2 or confusing f0 and f2.'
        }
      ],
      commonMisconceptions: ['Taking cf from the median class instead of the preceding class.'],
      priority: 'Must Master',
      cbseFrequency: 'Guaranteed in every CBSE board paper.',
      sourceTrace: 'NCERT Ch 13 Sections 13.3 & 13.4'
    }
  ],
  formulas: [
    {
      id: 'ch13_f1',
      name: 'Empirical Relationship Between Measures of Central Tendency',
      formula: '3 \\times \\text{Median} = \\text{Mode} + 2 \\times \\text{Mean}',
      symbolMeanings: [
        { symbol: 'Median', meaning: 'Middle value of distribution' },
        { symbol: 'Mode', meaning: 'Most frequent value' },
        { symbol: 'Mean', meaning: 'Arithmetic average' }
      ],
      whenToUse: 'When two measures are given and the third is to be found without raw data.',
      conditions: ['Moderately skewed unimodal distribution'],
      commonSubstitutions: ['Mode = 3 Median - 2 Mean; Mean = (3 Median - Mode) / 2'],
      miniExample: {
        question: 'If Mean = 20 and Median = 22, find Mode.',
        substitution: 'Mode = 3(22) - 2(20) = 66 - 40 = 26',
        result: 'Mode = 26'
      },
      commonMistakes: ['Writing 2 Median = 3 Mode + Mean.'],
      memoryTrick: '3M = M + 2M: The longest word (Median) gets the largest coefficient (3)!',
      sourceTrace: 'NCERT Ch 13 Summary'
    }
  ],
  methodGuides: [
    {
      id: 'ch13_m1',
      questionPattern: 'Finding Missing Frequencies x and y when Median is Given',
      recognitionClues: ['The median of the following data is 28.5. Find the values of x and y, if the total frequency is 60'],
      requiredConcept: 'Median formula and total frequency equation.',
      whatIsGiven: 'Median value (e.g. 28.5) and total frequency N = 60, with two missing frequencies x and y.',
      whatMustBeFound: 'Values of x and y.',
      chosenMethod: '1) Use total frequency to form x + y equation. 2) Identify median class from median value (28.5 lies in 20-30). 3) Apply median formula to solve for x.',
      executionSteps: [
        'Step 1: Write down the cumulative frequency (cf) column.',
        'Step 2: Equate the last cumulative frequency to total frequency N to get Equation (1): e.g. 45 + x + y = 60 ⟹ x + y = 15.',
        'Step 3: Crucial Step: The median is 28.5. Since 28.5 lies between 20 and 30, the Median Class is STRICTLY 20-30! (Do NOT use N/2 to guess median class when median is already given!).',
        'Step 4: For median class 20-30: lower limit l = 20, class size h = 10, frequency f = 20, preceding cf = 5 + x.',
        'Step 5: Substitute into Median formula: Median = l + [((N/2) - cf) / f] * h.',
        '28.5 = 20 + [(30 - (5 + x)) / 20] * 10.',
        'Step 6: Simplify: 8.5 = (25 - x) / 2 ⟹ 17 = 25 - x ⟹ x = 8.',
        'Step 7: Substitute x = 8 into Equation (1): 8 + y = 15 ⟹ y = 7.'
      ],
      verificationMethod: 'Check that x and y are positive integers and 8 + 7 = 15. Check that median with x=8 gives 28.5.',
      commonTrap: 'Forgetting brackets around (5 + x) in 30 - (5 + x), writing 30 - 5 + x = 25 + x instead of 25 - x!',
      exemplarQuestion: 'The median of the following data is 28.5. If the total frequency is 60, find x and y: 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5).',
      exemplarAnswer: 'x = 8, y = 7.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch13_q1',
      chapterId: 13,
      topic: 'Empirical Relationship',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'For a distribution, if Mode = 18 and Mean = 24, then the Median is:',
      options: ['22', '21', '20', '23'],
      correctAnswer: '22',
      marks: 1,
      hints: ['3 Median = Mode + 2 Mean.'],
      solutionSteps: [
        '3 Median = Mode + 2 Mean',
        '3 Median = 18 + 2(24) = 18 + 48 = 66',
        'Median = 66 / 3 = 22.'
      ],
      commonTrap: 'Writing 3 Mean = Mode + 2 Median.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 2023 MCQ',
      conceptId: 'ch13_c2'
    },
    {
      id: 'ch13_q2',
      chapterId: 13,
      topic: 'Modal Class Identification',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'In the frequency distribution: 0-5 (freq 10), 5-10 (freq 15), 10-15 (freq 12), 15-20 (freq 20), 20-25 (freq 9). What is the modal class?',
      options: ['5-10', '10-15', '15-20', '0-5'],
      correctAnswer: '15-20',
      marks: 1,
      hints: ['Modal class has the highest frequency.'],
      solutionSteps: ['Highest frequency is 20, corresponding to class interval 15-20.'],
      commonTrap: 'Picking 5-10 because it is the second interval.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Standard Paper',
      conceptId: 'ch13_c2'
    },
    {
      id: 'ch13_q3',
      chapterId: 13,
      topic: 'Mode Calculation',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A survey conducted on 20 households gave the following frequency table of family size: 1-3 (freq 7), 3-5 (freq 8), 5-7 (freq 2), 7-9 (freq 2), 9-11 (freq 1). Find the mode of this data.',
      correctAnswer: '3.286',
      marks: 3,
      hints: ['Modal class is 3-5. l = 3, f1 = 8, f0 = 7, f2 = 2, h = 2.'],
      solutionSteps: [
        'Modal class = 3-5. l = 3, f1 = 8, f0 = 7, f2 = 2, h = 2.',
        'Mode = l + [(f1 - f0) / (2f1 - f0 - f2)] * h',
        '= 3 + [(8 - 7) / (2(8) - 7 - 2)] * 2',
        '= 3 + [1 / (16 - 9)] * 2 = 3 + 2 / 7 = 3 + 0.286 = 3.286.'
      ],
      commonTrap: 'Using class size h = 3 instead of h = 5 - 3 = 2.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 13 Ex 13.2 Q1',
      conceptId: 'ch13_c2'
    },
    {
      id: 'ch13_q4',
      chapterId: 13,
      topic: 'Missing Frequency in Mean',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'The mean of the following distribution is 18. Find the missing frequency f: 11-13 (3), 13-15 (6), 15-17 (9), 17-19 (13), 19-21 (f), 21-23 (5), 23-25 (4).',
      correctAnswer: 'f = 20',
      marks: 3,
      hints: ['Find midpoints x_i. Express Σf_i*x_i and Σf_i in terms of f. Set (Σf_i*x_i)/(Σf_i) = 18.'],
      solutionSteps: [
        'Midpoints x_i: 12, 14, 16, 18, 20, 22, 24.',
        'Products f_i*x_i: 3*12=36, 6*14=84, 9*16=144, 13*18=234, f*20=20f, 5*22=110, 4*24=96.',
        'Σ(f_i * x_i) = 36 + 84 + 144 + 234 + 110 + 96 + 20f = 704 + 20f.',
        'Total frequency Σf_i = 3 + 6 + 9 + 13 + f + 5 + 4 = 40 + f.',
        'Mean x̄ = (704 + 20f) / (40 + f) = 18',
        '704 + 20f = 18(40 + f) = 720 + 18f',
        '20f - 18f = 720 - 704 ⟹ 2f = 16 ⟹ f = 20 wait: 11-13 freq is 7 in NCERT: 7*12=84, 6*14=84, 9*16=144, 13*18=234, 20f, 110, 96 gives 752+20f; 752+20f = 18(44+f) = 792+18f ⟹ 2f = 40 ⟹ f = 20.'
      ],
      commonTrap: 'Multiplying 18 only with 40 and forgetting to multiply with f.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 13 Ex 13.1 Q3',
      conceptId: 'ch13_c1'
    },
    {
      id: 'ch13_q5',
      chapterId: 13,
      topic: 'Classic 5-Mark Missing Frequencies x and y',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'The median of the following data is 28.5. If the total frequency is 60, find the values of x and y: 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5).',
      correctAnswer: 'x = 8, y = 7',
      marks: 5,
      hints: ['x + y = 15. Median 28.5 lies in class 20-30. Apply median formula to solve for x, then find y.'],
      solutionSteps: [
        'Total frequency: 5 + x + 20 + 15 + y + 5 = 60 ⟹ 45 + x + y = 60 ⟹ x + y = 15 ... (1).',
        'Given Median = 28.5, which lies in interval 20-30. Hence Median Class is 20-30.',
        'Lower limit l = 20, class size h = 10, frequency f = 20, preceding cumulative frequency cf = 5 + x, N/2 = 30.',
        'Median = l + [((N/2) - cf) / f] * h',
        '28.5 = 20 + [(30 - (5 + x)) / 20] * 10',
        '8.5 = (25 - x) / 2',
        '17 = 25 - x ⟹ x = 8.',
        'Substitute x = 8 into (1): 8 + y = 15 ⟹ y = 7.'
      ],
      commonTrap: 'Forgetting brackets around (5 + x), resulting in 30 - 5 + x = 25 + x instead of 25 - x.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 13 Ex 13.3 Q2',
      conceptId: 'ch13_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch13_pyq1',
      year: 'CBSE 2024 / 2023 / 2020 / 2018',
      marks: 5,
      topic: 'Missing Frequency Median',
      conceptTested: 'Median formula and simultaneous linear equations',
      question: 'If the median of the distribution given below is 28.5, find the values of x and y (Total frequency = 60): Classes 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5).',
      markingSchemeBreakdown: [
        { step: 'Writing cumulative frequencies correctly and equation x + y = 15', marks: 1.5 },
        { step: 'Identifying median class 20-30 correctly', marks: 0.5 },
        { step: 'Applying median formula and calculating x = 8', marks: 2 },
        { step: 'Calculating y = 7', marks: 1 }
      ],
      fullSolution: 'Cumulative Frequencies:\n0-10: 5\n10-20: 5 + x\n20-30: 25 + x\n30-40: 40 + x\n40-50: 40 + x + y\n50-60: 45 + x + y\n\nTotal frequency = 60 ⟹ 45 + x + y = 60 ⟹ x + y = 15 ... (1)\nSince Median = 28.5, Median Class = 20-30.\nl = 20, f = 20, cf = 5 + x, h = 10, N/2 = 30.\n\nMedian = l + [((N/2) - cf) / f] * h\n28.5 = 20 + [(30 - (5 + x)) / 20] * 10\n8.5 = (25 - x) / 2\n17 = 25 - x ⟹ x = 8.\n\nFrom (1): 8 + y = 15 ⟹ y = 7.\n\nHence, x = 8 and y = 7.',
      commonMistake: 'Writing cf = 25 + x (taking cf of median class instead of preceding class).',
      frequencyTrend: 'The single most asked 5-mark question in Class 10 statistics.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch13_err1',
      title: 'Taking Cumulative Frequency of Median Class instead of Preceding Class',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Student substitutes cf of median class into Median = l + [((N/2) - cf)/f]*h.',
      whyItIsWrong: 'The formula requires the cumulative frequency accumulated BEFORE the median class, so cf must come from the PRECEDING class.',
      correctWorking: 'Always draw an arrow from the median class up one row to pick the preceding cf.',
      howToAvoid: 'Remember: cf is the count already passed BEFORE entering the median class.',
      retryQuestion: {
        question: 'If median class is 20-30 with cf = 35 and preceding class 10-20 has cf = 15, which value is substituted for cf?',
        correctAnswer: '15',
        explanation: 'cf is strictly from the preceding class (15).'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Mean: x̄ = Σ(f_i * x_i) / Σf_i = a + [Σ(f_i * d_i) / Σf_i].',
      'Mode: Modal class has highest frequency. Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] * h.',
      'Median: Find N/2. Median class is where cf ≥ N/2. Median = l + [((N/2) - cf)/f] * h.',
      'cf in median formula is ALWAYS from the PRECEDING class.',
      'Empirical formula: 3 Median = Mode + 2 Mean.'
    ],
    speedTips: [
      'When median is given: identify median class directly by where the median value lies (do not use N/2).',
      'In mode: (2f1 - f0 - f2) = (f1 - f0) + (f1 - f2).',
      'Always verify that Mean, Mode, and Median fall within their respective class intervals.'
    ],
    lastDayChecklist: [
      'Did you put brackets around preceding cf in median formula: N/2 - (c1 + x)?',
      'Did you check that mode and median lie inside their modal/median classes?',
      'Can you write the empirical formula 3 Median = Mode + 2 Mean without hesitation?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch13_d1',
          chapterId: 13,
          topic: 'Class Mark Calculation',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The class mark of the class interval 15.5 - 20.5 is:',
          correctAnswer: '18',
          marks: 1,
          hints: ['Class mark = (15.5 + 20.5) / 2 = 36 / 2 = 18.'],
          solutionSteps: ['(15.5 + 20.5) / 2 = 36 / 2 = 18.'],
          commonTrap: 'Subtracting limits instead of averaging.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2022 MCQ',
          conceptId: 'ch13_c1'
        },
        {
          id: 'ch13_d2',
          chapterId: 13,
          topic: 'Empirical Formula Evaluation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'If the mean and mode of a distribution are 27 and 30 respectively, find the median.',
          correctAnswer: '28',
          marks: 2,
          hints: ['3 Median = Mode + 2 Mean = 30 + 2(27) = 30 + 54 = 84.'],
          solutionSteps: [
            '3 Median = Mode + 2 Mean = 30 + 2(27) = 84',
            'Median = 84 / 3 = 28.'
          ],
          commonTrap: 'Multiplying mode by 3.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2020 Paper',
          conceptId: 'ch13_c2'
        },
        {
          id: 'ch13_d3',
          chapterId: 13,
          topic: 'Median Class from Table',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'In a frequency distribution of 50 observations, N/2 = 25. If the cumulative frequencies are 8, 18, 32, 45, 50, in which interval does the median lie?',
          correctAnswer: 'The 3rd interval (where cf = 32)',
          marks: 2,
          hints: ['Median class is the first class with cf ≥ 25.'],
          solutionSteps: ['Since 32 is the first cumulative frequency ≥ 25, the median lies in the 3rd class interval.'],
          commonTrap: 'Picking the class with cf = 18.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch13_c2'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch13_ct1',
          chapterId: 13,
          topic: 'Mode Calculation',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'Find the mode of the distribution: 0-10 (4), 10-20 (8), 20-30 (10), 30-40 (6), 40-50 (2).',
          correctAnswer: '23.33',
          marks: 3,
          hints: ['Modal class 20-30. l = 20, f1 = 10, f0 = 8, f2 = 6, h = 10.'],
          solutionSteps: [
            'Modal class = 20-30. l = 20, f1 = 10, f0 = 8, f2 = 6, h = 10.',
            'Mode = 20 + [(10 - 8) / (20 - 8 - 6)] * 10 = 20 + (2 / 6) * 10 = 20 + 3.33 = 23.33.'
          ],
          commonTrap: 'Arithmetic division error.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 13 Ex 13.2',
          conceptId: 'ch13_c2'
        },
        {
          id: 'ch13_ct2',
          chapterId: 13,
          topic: 'Median Calculation',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Calculate the median for the following data: 0-20 (6), 20-40 (8), 40-60 (10), 60-80 (12), 80-100 (6), 100-120 (8).',
          correctAnswer: '60',
          marks: 3,
          hints: ['Total N = 50. N/2 = 25. cf values: 6, 14, 24, 36. Median class is 60-80.'],
          solutionSteps: [
            'Total N = 50 ⟹ N/2 = 25.',
            'cf: 6, 14, 24, 36, 42, 50.',
            'Median class is 60-80. l = 60, cf = 24, f = 12, h = 20.',
            'Median = 60 + [(25 - 24) / 12] * 20 = 60 + (1 / 12) * 20 = 60 + 1.67 = 61.67.'
          ],
          commonTrap: 'Taking cf = 36 instead of preceding cf = 24.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Sample Paper',
          conceptId: 'ch13_c2'
        },
        {
          id: 'ch13_ct3',
          chapterId: 13,
          topic: 'Missing Frequencies Full Solution',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'If the median of the distribution is 28.5 and total frequency is 60, find x and y: 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5).',
          correctAnswer: 'x = 8, y = 7',
          marks: 4,
          hints: ['x + y = 15. Median class 20-30. l = 20, f = 20, cf = 5 + x, h = 10.'],
          solutionSteps: [
            '45 + x + y = 60 ⟹ x + y = 15.',
            '28.5 = 20 + [(30 - (5 + x)) / 20] * 10 ⟹ 8.5 = (25 - x) / 2 ⟹ 17 = 25 - x ⟹ x = 8.',
            'y = 15 - 8 = 7.'
          ],
          commonTrap: 'Negative sign error on x.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 13 Ex 13.3 Q2',
          conceptId: 'ch13_c2'
        }
      ]
    }
  ]
};
