import { ChapterData } from './types';

export const CH4_DATA: ChapterData = {
  chapterNumber: 4,
  chapterName: 'Quadratic Equations',
  weightageEstimate: '6–9 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Quadratic Equations is the powerhouse of Class 10 algebra. It covers testing second-degree validity, factoring polynomials with surds/radicals, solving by the quadratic formula, analyzing the discriminant D = b² - 4ac to deduce the nature of roots, and modeling non-linear real-world scenarios (pipe filling, train speed increases, delayed flights).',
    prerequisites: ['Basic polynomial factorization', 'Square roots and surd arithmetic', 'Solving linear equations'],
    coreIdeas: [
      'Standard form: ax² + bx + c = 0 where a ≠ 0. If a = 0, the equation degenerates into linear.',
      'Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a).',
      'Discriminant D = b² - 4ac controls the root spectrum:',
      '  - D > 0: Two distinct real roots.',
      '  - D = 0: Two equal (coincident) real roots (each root = -b / (2a)).',
      '  - D < 0: No real roots.',
      'Finding parameter k for equal roots is guaranteed to appear in CBSE exams.',
      'In time-distance word problems, time difference equation: (Distance / Slower speed) - (Distance / Faster speed) = Time Difference.'
    ],
    keyRelationships: [
      'If roots are real and equal, the quadratic expression is a perfect square.',
      'If D is a perfect square (and a, b, c are rational), the roots are rational.'
    ],
    frequentMisunderstandings: [
      'Writing the discriminant as b² - 4ac and forgetting that (-b)² is positive, leading to sign errors in 4ac.',
      'Discarding the denominator 2a or forgetting that the division bar spans the entire numerator: (-b ± √D) / (2a).',
      'Failing to reject non-physical answers (e.g. negative speed, negative dimensions, negative time) in word problems.'
    ],
    examImportanceEvidence: 'One of the highest scoring chapters. Appears in every section: Section A (1 MCQ on D condition), Section B/C (factorising surds or quadratic formula), Section D (5 marks word problem on train speed or water taps).'
  },
  concepts: [
    {
      id: 'ch4_c1',
      title: 'Standard Form & Factorisation with Radicals (Surds)',
      topic: 'Factorisation Technique',
      simpleExplanation: 'Break down the middle term so that the product of the two split numbers equals ac, even when square roots are present.',
      exactMathIdea: 'For ax² + bx + c = 0, find two numbers p and q such that p + q = b and pq = ac. Group terms and extract binomial common factors.',
      formulaOrTheorem: 'a x² + (p + q)x + c = 0 \\quad \\text{where } pq = ac',
      whenToUse: 'When solving quadratic equations with integer or surd coefficients efficiently.',
      recognitionClues: ['Solve for x by factorisation', '√2 x² + 7x + 5 √2 = 0', '4 √3 x² + 5x - 2 √3 = 0'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Solving Quadratic Equation with Surds',
          question: 'Solve for x by factorisation: √2 x² + 7x + 5 √2 = 0.',
          given: 'Equation √2 x² + 7x + 5 √2 = 0.',
          toFind: 'Values of x.',
          methodSelectionReason: 'Product of extremes = √2 × 5 √2 = 5 × 2 = 10. Middle term sum = 7. Split 7 into 5 and 2.',
          stepByStepSolution: [
            'Product = ac = √2 × 5 √2 = 10.',
            'Sum = b = 7.',
            'Numbers are 5 and 2 (5 × 2 = 10, 5 + 2 = 7).',
            'Rewrite: √2 x² + 2x + 5x + 5 √2 = 0.',
            'Note that 2 can be written as √2 × √2:',
            '√2 x (x + √2) + 5 (x + √2) = 0.',
            'Take common factor (x + √2):',
            '(x + √2)(√2 x + 5) = 0.',
            'Either x + √2 = 0  ⇒  x = -√2,',
            'Or √2 x + 5 = 0  ⇒  x = -5 / √2 = -5 √2 / 2.'
          ],
          finalAnswer: 'x = -√2 and x = -5 / √2',
          verificationCheck: '√2(-√2)² + 7(-√2) + 5 √2 = 2 √2 - 7 √2 + 5 √2 = 0. Verified!',
          commonTrap: 'Failing to see that 2 = √2 × √2, which prevents finding the common binomial factor.'
        }
      ],
      commonMisconceptions: ['Thinking radical equations cannot be solved by middle term splitting.'],
      priority: 'Must Master',
      cbseFrequency: 'Repeated in CBSE Board 2017, 2020, 2023 (2 or 3 marks).',
      sourceTrace: 'NCERT Ch 4 Ex 4.2 Q1(iii)'
    },
    {
      id: 'ch4_c2',
      title: 'Discriminant and Nature of Roots',
      topic: 'Discriminant Analysis',
      simpleExplanation: 'The discriminant D = b² - 4ac acts like an X-ray. It tells you whether roots are real, equal, or imaginary before you do any solving.',
      exactMathIdea: 'For ax² + bx + c = 0 with a ≠ 0, D = b² - 4ac. (1) D > 0: Two distinct real roots. (2) D = 0: Two equal real roots (-b/2a, -b/2a). (3) D < 0: No real roots.',
      formulaOrTheorem: 'D = b² - 4ac',
      whenToUse: 'When asked to determine nature of roots, or find unknown k such that roots are real and equal.',
      recognitionClues: ['Find the value of k for which the equation has two equal roots', 'Find the nature of the roots of the quadratic equation', 'Has real roots (D ≥ 0)'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Equal Roots Condition (Finding k)',
          question: 'Find the values of k for which the quadratic equation (k + 4)x² + (k + 1)x + 1 = 0 has equal roots.',
          given: 'Equation (k + 4)x² + (k + 1)x + 1 = 0 has equal roots.',
          toFind: 'Value(s) of k.',
          methodSelectionReason: 'For equal roots, discriminant D = b² - 4ac must equal 0.',
          stepByStepSolution: [
            'Identify coefficients: a = k + 4, b = k + 1, c = 1.',
            'Condition for equal roots: D = b² - 4ac = 0.',
            '(k + 1)² - 4(k + 4)(1) = 0.',
            'k² + 2k + 1 - 4k - 16 = 0.',
            'k² - 2k - 15 = 0.',
            'Split middle term: product = -15, sum = -2 ⇒ factors are -5 and +3.',
            '(k - 5)(k + 3) = 0.',
            'k = 5 or k = -3.',
            'Check coefficient a = k + 4: If k = 5, a = 9 ≠ 0. If k = -3, a = 1 ≠ 0. Both are valid!'
          ],
          finalAnswer: 'k = 5 or k = -3',
          verificationCheck: 'For k = 5: 9x² + 6x + 1 = (3x + 1)² = 0 (equal roots). For k = -3: x² - 2x + 1 = (x - 1)² = 0 (equal roots).',
          commonTrap: 'Forgetting to expand (k + 1)² as k² + 2k + 1 (missing the 2k term).'
        }
      ],
      commonMisconceptions: ['Writing D > 0 for equal roots instead of D = 0.', 'Confusing "real roots" (D ≥ 0) with "distinct real roots" (D > 0).'],
      priority: 'Must Master',
      cbseFrequency: 'Present in 100% of CBSE board papers.',
      sourceTrace: 'NCERT Ch 4 Section 4.4, PYQ Granth 2016-2024'
    },
    {
      id: 'ch4_c3',
      title: 'Word Problems: Time, Speed, and Tap Work Rates',
      topic: 'Non-linear Applications',
      simpleExplanation: 'When speed increases, time decreases. Set up the difference in time: Time(Slow) - Time(Fast) = Time Saved.',
      exactMathIdea: 'If distance is d, original speed is x km/h, and increased speed is (x + s) km/h: d/x - d/(x + s) = t_diff. Cross multiply and reduce to standard quadratic form.',
      formulaOrTheorem: '\\frac{\\text{Distance}}{\\text{Original Speed}} - \\frac{\\text{Distance}}{\\text{Increased Speed}} = \\Delta t',
      whenToUse: 'For train speed, airplane delay, or pipe/tank rate problems.',
      recognitionClues: ['A train travels 360 km at a uniform speed', 'If the speed had been 5 km/h more, it would have taken 1 hour less', 'Two water taps together can fill a tank in 9 3/8 hours'],
      workedExamples: [
        {
          level: 'application',
          title: 'Train Speed Word Problem',
          question: 'A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.',
          given: 'Distance = 360 km. Speed increase = 5 km/h. Time saved = 1 hour.',
          toFind: 'Original speed of the train.',
          methodSelectionReason: 'Time = Distance / Speed. Form the time difference equation.',
          stepByStepSolution: [
            'Let the original speed of the train be x km/h (x > 0).',
            'Increased speed = (x + 5) km/h.',
            'Original time t1 = 360 / x hours.',
            'New time t2 = 360 / (x + 5) hours.',
            'Given t1 - t2 = 1:',
            '360/x - 360/(x + 5) = 1',
            '360 [ (x + 5 - x) / (x(x + 5)) ] = 1',
            '360 × 5 / (x² + 5x) = 1',
            '1800 = x² + 5x',
            'x² + 5x - 1800 = 0',
            'Factorise: 1800 = 40 × 45, and 45 - 40 = 5.',
            'x² + 45x - 40x - 1800 = 0',
            '(x + 45)(x - 40) = 0',
            'x = 40 or x = -45.',
            'Since speed cannot be negative, reject x = -45. Thus x = 40 km/h.'
          ],
          finalAnswer: 'The speed of the train is 40 km/h.',
          verificationCheck: 'Time 1 = 360/40 = 9 hrs. Time 2 = 360/45 = 8 hrs. 9 - 8 = 1 hr. Verified!',
          commonTrap: 'Writing 360/(x+5) - 360/x = 1 (subtracting the larger fraction from the smaller, yielding negative time).'
        },
        {
          level: 'advanced',
          title: 'Two Water Taps Tank Problem',
          question: 'Two water taps together can fill a tank in 9 3/8 hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.',
          given: 'Combined time = 9 3/8 = 75/8 hours. Larger tap takes 10 hours less.',
          toFind: 'Individual filling times.',
          methodSelectionReason: 'Sum of reciprocal filling rates equals combined rate: 1/x + 1/(x - 10) = 8/75.',
          stepByStepSolution: [
            'Let the smaller tap take x hours to fill the tank.',
            'Then the larger tap takes (x - 10) hours (x > 10).',
            'Portion of tank filled in 1 hour: 1/x + 1/(x - 10).',
            'Combined time = 75/8 hours ⇒ 1 hour combined rate = 8/75.',
            '1/x + 1/(x - 10) = 8/75',
            '(x - 10 + x) / (x(x - 10)) = 8/75',
            '(2x - 10) / (x² - 10x) = 8/75',
            '2(x - 5) / (x² - 10x) = 8/75  ⇒  (x - 5) / (x² - 10x) = 4/75',
            '75(x - 5) = 4(x² - 10x)',
            '75x - 375 = 4x² - 40x',
            '4x² - 115x + 375 = 0',
            'Factorise: 4 × 375 = 1500. Two numbers multiplying to 1500 and adding to 115 are 100 and 15.',
            '4x² - 100x - 15x + 375 = 0',
            '4x(x - 25) - 15(x - 25) = 0 ⇒ (4x - 15)(x - 25) = 0.',
            'x = 25 or x = 15/4 = 3.75.',
            'If x = 3.75 hours, larger tap time x - 10 = 3.75 - 10 = -6.25 hours (impossible!).',
            'Therefore, x = 25 hours. Larger tap = 25 - 10 = 15 hours.'
          ],
          finalAnswer: 'Smaller tap = 25 hours, Larger tap = 15 hours.',
          verificationCheck: '1/25 + 1/15 = (3 + 5)/75 = 8/75. Inverted time = 75/8 = 9 3/8 hours. Correct!',
          commonTrap: 'Accepting x = 15/4 without checking if x - 10 remains positive!'
        }
      ],
      commonMisconceptions: ['Thinking that both mathematical roots are automatically valid real-world solutions.'],
      priority: 'Must Master',
      cbseFrequency: 'Direct 5-mark long question in CBSE 2016, 2018, 2019, 2022, 2024.',
      sourceTrace: 'NCERT Ch 4 Ex 4.3 Q4, Q9, PYQ Granth'
    }
  ],
  formulas: [
    {
      id: 'ch4_f1',
      name: 'Quadratic Formula (Sridharacharya Formula)',
      formula: 'x = \\frac{-b \\pm \\sqrt{b² - 4ac}}{2a}',
      symbolMeanings: [
        { symbol: 'a', meaning: 'Coefficient of x² (a ≠ 0)' },
        { symbol: 'b', meaning: 'Coefficient of x' },
        { symbol: 'c', meaning: 'Constant term' },
        { symbol: 'b² - 4ac', meaning: 'Discriminant D' }
      ],
      whenToUse: 'When factorisation is tricky or impossible with rational integers.',
      conditions: ['D = b² - 4ac ≥ 0 for real roots.'],
      commonSubstitutions: ['x1 = (-b + √D)/(2a)', 'x2 = (-b - √D)/(2a)'],
      miniExample: {
        question: 'Solve 2x² - 7x + 3 = 0 using quadratic formula.',
        substitution: 'a=2, b=-7, c=3; D = (-7)² - 4(2)(3) = 49 - 24 = 25. x = (7 ± 5)/4',
        result: 'x = 3 or x = 1/2'
      },
      commonMistakes: [
        'Writing x = -b ± √D / 2a where 2a only divides the square root.',
        'Taking (-b)² as negative.'
      ],
      sourceTrace: 'NCERT Ch 4 Section 4.3'
    },
    {
      id: 'ch4_f2',
      name: 'Discriminant Spectrum & Root Nature',
      formula: 'D = b² - 4ac \\quad \\begin{cases} D > 0 & 2 \\text{ distinct real roots} \\\\ D = 0 & 2 \\text{ equal real roots } (x = -b/2a) \\\\ D < 0 & \\text{No real roots} \\end{cases}',
      symbolMeanings: [
        { symbol: 'D', meaning: 'Discriminant value' }
      ],
      whenToUse: 'To determine root nature or find boundary values of parameters.',
      conditions: ['a ≠ 0'],
      commonSubstitutions: ['Equal roots condition: b² = 4ac'],
      miniExample: {
        question: 'Find nature of roots of 2x² - 4x + 3 = 0.',
        substitution: 'D = (-4)² - 4(2)(3) = 16 - 24 = -8 < 0',
        result: 'No real roots.'
      },
      commonMistakes: ['Thinking D < 0 means roots are zero (they are non-real / complex).'],
      sourceTrace: 'NCERT Ch 4 Section 4.4'
    }
  ],
  methodGuides: [
    {
      id: 'ch4_m1',
      questionPattern: 'Speed-Distance-Time Variance Problems',
      recognitionClues: ['Speed increased by v km/h', 'Takes t hours less/more', 'Delay of flight/journey'],
      requiredConcept: 'Time = Distance / Speed',
      whatIsGiven: 'Distance d, speed difference s, time difference t.',
      whatMustBeFound: 'Original speed x.',
      chosenMethod: 'd/x - d/(x + s) = t.',
      executionSteps: [
        'Step 1: Let original speed = x km/h (x > 0).',
        'Step 2: Identify slower speed and faster speed.',
        'Step 3: Write: Time(slower) - Time(faster) = Time difference.',
        'Step 4: Take common distance factor: d [ (fast - slow) / (slow × fast) ] = t.',
        'Step 5: Simplify to standard quadratic equation ax² + bx + c = 0.',
        'Step 6: Solve for x using factorisation or quadratic formula.',
        'Step 7: Reject negative root with explicit physical reason (speed cannot be negative).'
      ],
      verificationMethod: 'Calculate both times directly and check if their difference matches given hours.',
      commonTrap: 'Reversing the order of fractions and getting a negative speed.',
      exemplarQuestion: 'An express train takes 1 hour less than a passenger train to travel 132 km between Mysore and Bangalore. If the average speed of the express train is 11 km/h more than that of the passenger train, find the average speeds of the two trains.',
      exemplarAnswer: '132/x - 132/(x + 11) = 1 ⇒ x² + 11x - 1452 = 0 ⇒ (x + 44)(x - 33) = 0 ⇒ x = 33 km/h (Passenger) and 44 km/h (Express).'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch4_q1',
      chapterId: 4,
      topic: 'Nature of Roots',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'Which of the following equations has two distinct real roots?',
      options: ['2x² - 3√2x + 9/4 = 0', 'x² + x - 5 = 0', 'x² + 3x + 2√2 = 0', '5x² - 3x + 1 = 0'],
      correctAnswer: 'x² + x - 5 = 0',
      marks: 1,
      hints: ['Calculate D = b² - 4ac for each equation. Look for D > 0.'],
      solutionSteps: [
        'For x² + x - 5 = 0: a = 1, b = 1, c = -5.',
        'D = b² - 4ac = 1² - 4(1)(-5) = 1 + 20 = 21 > 0.',
        'Since D > 0, it has two distinct real roots.'
      ],
      commonTrap: 'Calculating 1 - 20 instead of 1 - (-20).',
      isOriginalPractice: true,
      sourcePdfRef: 'Textbook Ch 4 Section 4.4',
      conceptId: 'ch4_c2'
    },
    {
      id: 'ch4_q2',
      chapterId: 4,
      topic: 'Equal Roots Condition',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'If the equation 2x² + k x + 3 = 0 has two equal real roots, find the value of k.',
      options: ['k = ±2 √6', 'k = ±√6', 'k = ±4 √6', 'k = 6'],
      correctAnswer: 'k = ±2 √6',
      marks: 1,
      hints: ['D = b² - 4ac = 0 ⇒ k² - 4(2)(3) = 0.'],
      solutionSteps: [
        'D = k² - 4(2)(3) = 0',
        'k² - 24 = 0 ⇒ k² = 24',
        'k = ±√24 = ±2 √6.'
      ],
      commonTrap: 'Forgetting the ± sign.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 4 Ex 4.4 Q2(i)',
      conceptId: 'ch4_c2'
    },
    {
      id: 'ch4_q3',
      chapterId: 4,
      topic: 'Solving by Factorisation with Surds',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'Solve for x: 4x² - 4a x + (a² - b²) = 0.',
      correctAnswer: 'x = (a + b)/2 and x = (a - b)/2',
      marks: 3,
      hints: ['Notice that 4x² - 4ax + a² = (2x - a)². Then apply difference of squares with b².'],
      solutionSteps: [
        'Rewrite equation as: (4x² - 4ax + a²) - b² = 0.',
        '(2x - a)² - b² = 0.',
        'Using identity A² - B² = (A - B)(A + B):',
        '(2x - a - b)(2x - a + b) = 0.',
        'Either 2x - a - b = 0 ⇒ 2x = a + b ⇒ x = (a + b) / 2.',
        'Or 2x - a + b = 0 ⇒ 2x = a - b ⇒ x = (a - b) / 2.'
      ],
      commonTrap: 'Trying to expand a² - b² and getting lost in quadratic formula arithmetic.',
      isOriginalPractice: true,
      sourcePdfRef: 'PYQ Granth 2019 / RD Sharma',
      conceptId: 'ch4_c1'
    },
    {
      id: 'ch4_q4',
      chapterId: 4,
      topic: 'Speed & Delay Problem',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'An aeroplane left 30 minutes later than its scheduled time and in order to reach its destination 1500 km away in time, it had to increase its speed by 250 km/h from its usual speed. Determine its usual speed.',
      options: ['750 km/h', '500 km/h', '800 km/h', '1000 km/h'],
      correctAnswer: '750 km/h',
      marks: 4,
      hints: ['Time difference is 30 mins = 1/2 hour. 1500/x - 1500/(x + 250) = 1/2.'],
      solutionSteps: [
        'Let usual speed be x km/h. Increased speed = x + 250.',
        '1500/x - 1500/(x + 250) = 1/2',
        '1500 [ 250 / (x(x + 250)) ] = 1/2',
        '375000 / (x² + 250x) = 1/2',
        'x² + 250x - 750000 = 0',
        'Factorise: 1000 × 750 = 750000 and 1000 - 750 = 250.',
        '(x + 1000)(x - 750) = 0.',
        'x = 750 km/h (rejecting negative speed x = -1000).'
      ],
      commonTrap: 'Using 30 instead of 1/2 (not converting minutes to hours).',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Board 2018 / Support Material',
      conceptId: 'ch4_c3'
    },
    {
      id: 'ch4_q5',
      chapterId: 4,
      topic: 'Quadratic Equation Challenge (Nested Roots)',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'Solve for x: x = √6 + sqrt(6 + sqrt(6 + ... to infinity)).',
      options: ['3', '2', '-2', '6'],
      correctAnswer: '3',
      marks: 2,
      hints: ['Notice that the expression under the first square root is x itself: x = √6 + x. Square both sides.'],
      solutionSteps: [
        'Given x = √6 + sqrt(6 + ...).',
        'The infinite nested radical has self-similarity: x = √6 + x.',
        'Squaring both sides: x² = 6 + x.',
        'x² - x - 6 = 0.',
        '(x - 3)(x + 2) = 0.',
        'x = 3 or x = -2.',
        'Since the principal square root is non-negative, x cannot be -2.',
        'Therefore, x = 3.'
      ],
      commonTrap: 'Giving both 3 and -2 without realizing that square roots of positive numbers are always positive.',
      isOriginalPractice: true,
      sourcePdfRef: 'Oswaal QCB Challenge Series',
      conceptId: 'ch4_c1'
    }
  ],
  pyqs: [
    {
      id: 'ch4_pyq_2024',
      year: 'CBSE 2024 Standard',
      marks: 3,
      topic: 'Nature of Roots',
      conceptTested: 'Equal roots condition for quadratic equation',
      question: 'If the quadratic equation (1 + m²)x² + 2mc x + (c² - a²) = 0 has equal roots, prove that c² = a² (1 + m²).',
      markingSchemeBreakdown: [
        { step: 'Setting D = b² - 4ac = 0 with correct substitutions', marks: 1.0 },
        { step: 'Expanding (2mc)² - 4(1 + m²)(c² - a²) = 0 correctly', marks: 1.0 },
        { step: 'Simplifying and isolating c² to conclude proof', marks: 1.0 }
      ],
      fullSolution: 'For equal roots, D = 0. Here A = 1 + m², B = 2mc, C = c² - a². (2mc)² - 4(1 + m²)(c² - a²) = 0 ⇒ 4m² c² - 4[c² - a² + m² c² - m² a²] = 0 ⇒ 4m² c² - 4c² + 4a² - 4m² c² + 4m² a² = 0 ⇒ -4c² + 4a² (1 + m²) = 0 ⇒ 4c² = 4a² (1 + m²) ⇒ c² = a² (1 + m²). Hence proved.',
      commonMistake: 'Sign errors when expanding -4(1 + m²)(c² - a²).',
      frequencyTrend: 'High-frequency proof question repeated in 2017, 2020, 2024.',
      source: 'CBSE Board 2024 Set 30/3/1'
    }
  ],
  commonMistakes: [
    {
      id: 'ch4_m_err1',
      title: 'Fractional Denominator Span in Quadratic Formula',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Writing x = -b ± √D / 2a and calculating x = -b + (√D/2a).',
      whyItIsWrong: 'The entire quantity (-b ± √D) is divided by 2a, not just the square root term.',
      correctWorking: 'x = (-b ± √D) / (2a).',
      howToAvoid: 'Use brackets around the numerator: [ -b ± √D ] / (2a).',
      retryQuestion: {
        question: 'Solve x² - 4x + 1 = 0 using the quadratic formula.',
        correctAnswer: 'x = 2 ± √3',
        explanation: 'x = (4 ± √16 - 4)/2 = (4 ± √12)/2 = (4 ± 2√3)/2 = 2 ± √3.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Standard form: ax² + bx + c = 0 (a ≠ 0).',
      'Quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).',
      'D > 0: Two distinct real roots.',
      'D = 0: Two equal real roots (-b/2a).',
      'D < 0: No real roots.',
      'Equal roots condition: b² = 4ac.',
      'In time-distance problems: Time(slow) - Time(fast) = Time saved.',
      'Always discard negative values for length, speed, and time.'
    ],
    speedTips: [
      'If b is even, say 2b\', root can be quickly written as (-b\' ± √b\'² - ac)/a.',
      'Always factor out common constants from the entire equation before computing D.'
    ],
    lastDayChecklist: [
      'Did you remember that (-b)² is positive?',
      'Did you state why you rejected the negative solution in the word problem?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 10,
      questions: [
        {
          id: 'ch4_diag_1',
          chapterId: 4,
          topic: 'Identification',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'Which of the following is NOT a quadratic equation?',
          options: ['(x + 2)² = 2(x + 3)', 'x² + 3x = (-1)(1 - 3x)²', '(x + 2)(x - 1) = x² - 2x - 3', 'x³ - x² = (x - 1)³'],
          correctAnswer: '(x + 2)(x - 1) = x² - 2x - 3',
          marks: 1,
          hints: ['Expand and check if the x² term cancels out completely.'],
          solutionSteps: [
            '(x + 2)(x - 1) = x² + x - 2.',
            'x² + x - 2 = x² - 2x - 3.',
            'x² cancels out on both sides: 3x + 1 = 0 (this is linear, degree 1).',
            'Therefore, it is NOT a quadratic equation.'
          ],
          commonTrap: 'Assuming degree 3 in (x - 1)³ means it is cubic (the x³ cancels out!).',
          isOriginalPractice: true,
          sourcePdfRef: 'Diagnostic Test',
          conceptId: 'ch4_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch4_ct_1',
          chapterId: 4,
          topic: 'Quadratic Word Problem',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the other two sides.',
          correctAnswer: 'Base = 12 cm, Altitude = 5 cm',
          marks: 3,
          hints: ['Pythagoras theorem: base² + altitude² = hypotenuse². x² + (x - 7)² = 13².'],
          solutionSteps: [
            'Let base = x cm. Altitude = (x - 7) cm.',
            'x² + (x - 7)² = 13² = 169.',
            'x² + x² - 14x + 49 = 169.',
            '2x² - 14x - 120 = 0  ⇒  x² - 7x - 60 = 0.',
            '(x - 12)(x + 5) = 0.',
            'x = 12 (rejecting x = -5 since length cannot be negative).',
            'Base = 12 cm, Altitude = 12 - 7 = 5 cm.'
          ],
          commonTrap: 'Forgetting to check the altitude (12 - 7 = 5) and only giving the base.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 4 Ex 4.2 Q5',
          conceptId: 'ch4_c3'
        }
      ]
    },
    {
      testType: 'Advanced Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch4_adv_1',
          chapterId: 4,
          topic: 'Equal Roots Condition',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'If the roots of the equation (a - b)x² + (b - c)x + (c - a) = 0 are equal, prove that 2a = b + c.',
          correctAnswer: '2a = b + c (b, a, c are in AP)',
          marks: 4,
          hints: ['Notice that x = 1 is obviously a root because sum of coefficients is 0! Since roots are equal, both roots are 1.'],
          solutionSteps: [
            'Notice that sum of coefficients: (a - b) + (b - c) + (c - a) = 0.',
            'This means x = 1 is always a root of this equation.',
            'Since the equation is given to have equal roots, the other root must also be 1.',
            'Product of roots = (c - a) / (a - b).',
            'Since both roots are 1: 1 × 1 = (c - a) / (a - b).',
            'a - b = c - a ⇒ 2a = b + c. Hence proved!'
          ],
          commonTrap: 'Trying to expand D = (b - c)² - 4(a - b)(c - a) = 0, which takes 20 minutes of tedious algebra.',
          isOriginalPractice: true,
          sourcePdfRef: 'RD Sharma Class 10 Ch 4 Higher Order Thinking',
          conceptId: 'ch4_c2'
        }
      ]
    },
    {
      testType: 'Mastery Test',
      durationMinutes: 60,
      totalMarks: 35,
      questions: [
        {
          id: 'ch4_mst_1',
          chapterId: 4,
          topic: 'Speed and Current Challenge',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.',
          options: ['6 km/h', '8 km/h', '4 km/h', '5 km/h'],
          correctAnswer: '6 km/h',
          marks: 4,
          hints: ['Upstream speed = 18 - x, Downstream speed = 18 + x. 24/(18 - x) - 24/(18 + x) = 1.'],
          solutionSteps: [
            'Let speed of stream = x km/h (x < 18).',
            'Upstream speed = 18 - x; Downstream speed = 18 + x.',
            '24/(18 - x) - 24/(18 + x) = 1.',
            '24 [ (18 + x - (18 - x)) / (18² - x²) ] = 1.',
            '24(2x) = 324 - x².',
            '48x = 324 - x² ⇒ x² + 48x - 324 = 0.',
            'Factorise: 54 × 6 = 324 and 54 - 6 = 48.',
            '(x + 54)(x - 6) = 0.',
            'x = 6 km/h (rejecting negative speed x = -54).'
          ],
          commonTrap: 'Writing x - 18 for upstream speed instead of 18 - x.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 4 Ex 4.4 Example 15',
          conceptId: 'ch4_c3'
        }
      ]
    }
  ]
};
