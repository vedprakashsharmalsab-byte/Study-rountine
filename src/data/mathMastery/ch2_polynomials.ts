import { ChapterData } from './types';

export const CH2_DATA: ChapterData = {
  chapterNumber: 2,
  chapterName: 'Polynomials',
  weightageEstimate: '4–5 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Polynomials algebra aur geometry ka zabardast sangam hai! Class 10 mein hamara focus quadratic polynomials par hai: zeroes ko geometrically (X-axis intersections) samajhna, Vieta ke formulas (sum = -b/a aur product = c/a) master karna, aur bina individual roots nikale symmetric expressions (jaise α² + β², 1/α + 1/β) evaluate karna.',
    prerequisites: ['Splitting the middle term factorization', 'Basic algebraic identities (a+b)², (a-b)², a³+b³', 'Coordinate system (x-axis, y-axis)'],
    coreIdeas: [
      'The zeroes of a polynomial P(x) are the x-coordinates of the points where the graph y = P(x) intersects the x-axis.',
      'A polynomial of degree n can have at most n real zeroes.',
      'For a quadratic polynomial ax² + bx + c: Sum of zeroes (α + β) = -b/a; Product of zeroes (αβ) = c/a.',
      'Forming a quadratic polynomial: k[x² - (α + β)x + αβ], where k is any non-zero real number.',
      'Symmetric expressions of roots: Any symmetric function of α and β can be rewritten in terms of (α + β) and (αβ).'
    ],
    keyRelationships: [
      'If one zero is the reciprocal of the other: α × (1/α) = 1 ⇒ c/a = 1 ⇒ c = a.',
      'If one zero is equal in magnitude but opposite in sign: α + (-α) = 0 ⇒ -b/a = 0 ⇒ b = 0.'
    ],
    frequentMisunderstandings: [
      'Writing the polynomial as x² + (α + β)x + αβ instead of x² - (α + β)x + αβ (sign error on middle term).',
      'Forgetting the arbitrary constant k when forming the family of polynomials with fractional coefficients.',
      'Counting intersections with the y-axis instead of the x-axis when determining the number of zeroes from a graph.'
    ],
    examImportanceEvidence: 'Guaranteed 1 MCQ (Graph or reciprocal zero condition) + 1 Short Answer (2 or 3 marks: finding zeroes and verifying relations or evaluating symmetric expressions like α² + β²).'
  },
  concepts: [
    {
      id: 'ch2_c1',
      title: 'Geometrical Meaning of the Zeroes of a Polynomial',
      topic: 'Graphical Interpretation',
      simpleExplanation: 'Zeroes ka matlab graph horizontal X-axis ko kahan touch ya cross kar raha hai! Sirf X-axis ke cuts count karo, Y-axis ko bilkul ignore karo.',
      exactMathIdea: 'For any polynomial y = P(x), the real zeroes are the x-coordinates of the points where the curve y = P(x) intersects the x-axis. If the graph does not cut or touch the x-axis, the polynomial has no real zeroes.',
      formulaOrTheorem: '\\text{Number of real zeroes} = \\text{Number of intersection points with the } x\\text{-axis}',
      whenToUse: 'When given a graph of y = P(x) and asked to find the number of zeroes, or analyzing parabolic shapes of bridges/trajectories.',
      recognitionClues: ['The graph of y = p(x) is given in the figure', 'How many zeroes does the polynomial have?', 'Parabola opens upwards (a > 0) or downwards (a < 0)'],
      workedExamples: [
        {
          level: 'basic',
          title: 'Counting Zeroes from Graph',
          question: 'The graph of y = p(x) intersects the x-axis at 3 points and the y-axis at 1 point. What is the number of zeroes of p(x)?',
          given: 'Intersects x-axis at 3 points, y-axis at 1 point.',
          toFind: 'Number of zeroes of p(x).',
          methodSelectionReason: 'Zeroes correspond exclusively to x-axis intersection points.',
          stepByStepSolution: [
            'Recall that zeroes of p(x) are the values of x for which p(x) = 0.',
            'On the coordinate plane, p(x) = 0 (or y = 0) represents the x-axis.',
            'Therefore, the number of zeroes is the number of times the graph intersects or touches the x-axis.',
            'The graph intersects the x-axis at 3 points.',
            'The intersection with the y-axis is irrelevant for the zeroes of p(x).'
          ],
          finalAnswer: 'The number of zeroes is 3.',
          verificationCheck: 'Ignore the y-axis intercept completely.',
          commonTrap: 'Adding the y-intercept and writing 3 + 1 = 4.'
        }
      ],
      commonMisconceptions: ['Thinking a parabola must always have 2 real zeroes (it can have 2 distinct, 1 repeated/touching, or 0 real zeroes).'],
      priority: 'Must Master',
      cbseFrequency: 'CBSE 1-mark MCQ in 90% of past papers.',
      sourceTrace: 'NCERT Ch 2 Exercise 2.1'
    },
    {
      id: 'ch2_c2',
      title: 'Relationship Between Zeroes and Coefficients',
      topic: 'Coefficients and Roots',
      simpleExplanation: 'Bina quadratic equation factorise kiye, seedha coefficients dekh kar Sum (-b/a) aur Product (c/a) nikalna!',
      exactMathIdea: 'For a quadratic polynomial P(x) = ax² + bx + c (a ≠ 0) with zeroes α and β: Sum = α + β = -b/a = -(coefficient of x)/(coefficient of x²); Product = αβ = c/a = (constant term)/(coefficient of x²).',
      formulaOrTheorem: '\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha \\beta = \\frac{c}{a}',
      whenToUse: 'When asked to verify the relationship between zeroes and coefficients, or find unknown coefficients k given a condition on roots.',
      recognitionClues: ['Find the zeroes and verify the relationship between zeroes and coefficients', 'One zero is reciprocal of the other', 'Sum of zeroes is equal to half their product'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Zeroes Calculation and Verification',
          question: 'Find the zeroes of the quadratic polynomial 6x² - 3 - 7x and verify the relationship between the zeroes and coefficients.',
          given: 'Polynomial 6x² - 3 - 7x.',
          toFind: 'Zeroes and verification of sum and product formulas.',
          methodSelectionReason: 'First rearrange in standard form ax² + bx + c = 0, split the middle term, then verify sum = -b/a and product = c/a.',
          stepByStepSolution: [
            'Rearrange in standard form: 6x² - 7x - 3 = 0.',
            'Here a = 6, b = -7, c = -3.',
            'Split the middle term: product = 6 × (-3) = -18, sum = -7. Factors are -9 and +2.',
            '6x² - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (2x - 3)(3x + 1) = 0.',
            'Zeroes are α = 3/2 and β = -1/3.',
            'Verification of Sum: α + β = 3/2 + (-1/3) = (9 - 2)/6 = 7/6.',
            'From coefficients: -b/a = -(-7)/6 = 7/6. (Verified: α + β = -b/a).',
            'Verification of Product: αβ = (3/2) × (-1/3) = -3/6 = -1/2.',
            'From coefficients: c/a = -3/6 = -1/2. (Verified: αβ = c/a).'
          ],
          finalAnswer: 'Zeroes are 3/2 and -1/3. Relationship verified.',
          verificationCheck: 'Both sum and product match the coefficient formulas perfectly.',
          commonTrap: 'Taking b = -3 and c = -7 because 6x² - 3 - 7x is written with the constant term before the linear term!'
        },
        {
          level: 'application',
          title: 'Condition: Reciprocal Zeroes',
          question: 'If one zero of the quadratic polynomial (k - 1)x² + k x + 1 is the reciprocal of the other, find the value of k.',
          given: 'Polynomial (k - 1)x² + k x + 1, one zero is 1/α.',
          toFind: 'Value of k.',
          methodSelectionReason: 'If roots are α and 1/α, their product is α × (1/α) = 1. Use product of roots = c/a.',
          stepByStepSolution: [
            'Let the zeroes be α and 1/α.',
            'Product of zeroes = α × (1/α) = 1.',
            'From polynomial coefficients: a = (k - 1), b = k, c = 1.',
            'Product of zeroes = c / a = 1 / (k - 1).',
            'Equating: 1 / (k - 1) = 1  ⇒  k - 1 = 1  ⇒  k = 2.'
          ],
          finalAnswer: 'k = 2',
          verificationCheck: 'For k = 2, polynomial is x² + 2x + 1 = (x + 1)². Roots are -1 and -1 (reciprocal of -1 is -1).',
          commonTrap: 'Using sum of roots instead of product of roots, which creates unnecessary quadratic complications.'
        }
      ],
      commonMisconceptions: ['Forgetting the minus sign in -b/a.'],
      priority: 'Must Master',
      cbseFrequency: 'Repeated every single year in CBSE boards (2 or 3 marks).',
      sourceTrace: 'NCERT Ch 2 Section 2.3, PYQ Granth 2016-2024'
    },
    {
      id: 'ch2_c3',
      title: 'Symmetric Expressions of Roots',
      topic: 'Algebraic Identities of Zeroes',
      simpleExplanation: 'Calculate values like α² + β² or 1/α + 1/β without ever finding α and β individually!',
      exactMathIdea: 'Any symmetric function of zeroes can be converted into combinations of S = (α + β) and P = (αβ) using identities: α² + β² = (α+β)² - 2αβ; (α - β)² = (α+β)² - 4αβ; α³ + β³ = (α+β)³ - 3αβ(α+β).',
      formulaOrTheorem: '\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta',
      whenToUse: 'When asked to find 1/α + 1/β, α² + β², α/β + β/α, or form a new polynomial whose roots are 2α and 2β.',
      recognitionClues: ['If α and β are zeroes of the polynomial, find the value of α² + β²', 'Find a polynomial whose zeroes are 1/α and 1/β'],
      workedExamples: [
        {
          level: 'application',
          title: 'Evaluating α² + β² and 1/α + 1/β',
          question: 'If α and β are zeroes of the polynomial p(x) = 2x² + 5x + 2, evaluate (i) α² + β², (ii) 1/α + 1/β.',
          given: 'p(x) = 2x² + 5x + 2 with zeroes α, β.',
          toFind: '(i) α² + β², (ii) 1/α + 1/β.',
          methodSelectionReason: 'Find sum = -b/a and product = c/a, then substitute into algebraic identities.',
          stepByStepSolution: [
            'Here a = 2, b = 5, c = 2.',
            'Sum: α + β = -5/2.',
            'Product: αβ = 2/2 = 1.',
            'Part (i): α² + β² = (α + β)² - 2(αβ) = (-5/2)² - 2(1) = 25/4 - 2 = (25 - 8)/4 = 17/4.',
            'Part (ii): 1/α + 1/β = (α + β) / (αβ) = (-5/2) / 1 = -5/2.'
          ],
          finalAnswer: '(i) 17/4, (ii) -5/2',
          verificationCheck: 'Roots of 2x² + 5x + 2 are -2 and -1/2. (-2)² + (-1/2)² = 4 + 1/4 = 17/4. Correct!',
          commonTrap: 'Squaring α + β and forgetting to subtract 2αβ.'
        }
      ],
      commonMisconceptions: ['Assuming (α + β)² = α² + β² (ignoring the 2ab term).'],
      priority: 'High Priority',
      cbseFrequency: 'Very frequent in Section C (3 Marks) in Standard Maths.',
      sourceTrace: 'RD Sharma Ch 2 Ex 2.2, Support Material 2025'
    }
  ],
  formulas: [
    {
      id: 'ch2_f1',
      name: 'Sum and Product of Roots of Quadratic Polynomial',
      formula: '\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}',
      symbolMeanings: [
        { symbol: 'a', meaning: 'Coefficient of x² (a ≠ 0)' },
        { symbol: 'b', meaning: 'Coefficient of x' },
        { symbol: 'c', meaning: 'Constant term' },
        { symbol: 'α, β', meaning: 'Zeroes of the polynomial' }
      ],
      whenToUse: 'Whenever quadratic polynomial zeroes are mentioned or an unknown coefficient is to be found.',
      conditions: ['Polynomial must be in standard form: ax² + bx + c = 0.'],
      commonSubstitutions: ['α + β = -b/a', 'αβ = c/a'],
      miniExample: {
        question: 'Find sum and product of zeroes of 3x² - 5x + 7.',
        substitution: 'a=3, b=-5, c=7 ⇒ sum = -(-5)/3, product = 7/3',
        result: 'Sum = 5/3, Product = 7/3'
      },
      commonMistakes: ['Forgetting the negative sign in sum: writing b/a instead of -b/a.'],
      memoryTrick: 'Sum is Negative Boy over All (-b/a); Product is Constant over All (c/a)',
      sourceTrace: 'NCERT Ch 2 Section 2.3'
    },
    {
      id: 'ch2_f2',
      name: 'Formation of Quadratic Polynomial',
      formula: 'k \\left[ x^2 - S x + P \\right] = k \\left[ x^2 - (\\alpha + \\beta)x + \\alpha\\beta \\right], \\quad k \\neq 0',
      symbolMeanings: [
        { symbol: 'S', meaning: 'Sum of zeroes (α + β)' },
        { symbol: 'P', meaning: 'Product of zeroes (αβ)' },
        { symbol: 'k', meaning: 'Any non-zero real number (used to eliminate fractional denominators)' }
      ],
      whenToUse: 'When zeroes or sum and product of zeroes are given and you must construct the polynomial.',
      conditions: ['Must include k ≠ 0 for full marks in CBSE.'],
      commonSubstitutions: ['If S = 1/4, P = -1: k[x² - (1/4)x - 1]. Set k=4 ⇒ 4x² - x - 4.'],
      miniExample: {
        question: 'Find a quadratic polynomial whose sum and product of zeroes are -3 and 2.',
        substitution: 'k[x² - (-3)x + 2] = k[x² + 3x + 2]',
        result: 'x² + 3x + 2 (taking k = 1)'
      },
      commonMistakes: ['Writing x² + Sx + P (sign mistake on middle term).', 'Omitting k and leaving fractional coefficients unsimplified.'],
      sourceTrace: 'NCERT Ch 2 Exercise 2.2 Q2'
    },
    {
      id: 'ch2_f3',
      name: 'Essential Symmetric Identities of Roots',
      formula: '\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta, \\quad (\\alpha - \\beta)^2 = (\\alpha+\\beta)^2 - 4\\alpha\\beta',
      symbolMeanings: [
        { symbol: 'α, β', meaning: 'Zeroes of ax² + bx + c' }
      ],
      whenToUse: 'When evaluating difference of roots, sum of squares of roots, or reciprocal sums.',
      conditions: ['Only valid when α and β are roots of the same polynomial.'],
      commonSubstitutions: ['α² + β² = S² - 2P', '(α - β)² = S² - 4P'],
      miniExample: {
        question: 'If S = 4 and P = 3, find α² + β² and |α - β|.',
        substitution: 'α² + β² = 4² - 2(3) = 10; (α - β)² = 4² - 4(3) = 4 ⇒ |α - β| = 2',
        result: 'α² + β² = 10, |α - β| = 2'
      },
      commonMistakes: ['Confusing (α - β)² with α² - β².'],
      sourceTrace: 'RD Sharma Ch 2 Concept Sheet'
    }
  ],
  methodGuides: [
    {
      id: 'ch2_m1',
      questionPattern: 'Finding Unknown Parameter k Given a Relation Between Zeroes',
      recognitionClues: [
        'One zero is 7 times the other',
        'Sum of squares of zeroes is equal to 40',
        'Difference of zeroes is 1 (|α - β| = 1)'
      ],
      requiredConcept: 'Vieta relations (α + β = -b/a, αβ = c/a)',
      whatIsGiven: 'A quadratic polynomial with variable k and an algebraic condition linking α and β.',
      whatMustBeFound: 'The value(s) of parameter k.',
      chosenMethod: 'Express the given condition strictly in terms of (α + β) and (αβ), then solve for k.',
      executionSteps: [
        'Step 1: Write down a, b, c from the given polynomial.',
        'Step 2: Calculate sum S = -b/a and product P = c/a in terms of k.',
        'Step 3: Convert the condition into S and P (e.g. if α - β = 1, square both sides to get (α - β)² = 1 ⇒ S² - 4P = 1).',
        'Step 4: Substitute S and P into the equation.',
        'Step 5: Solve the resulting algebraic equation for k and verify with the original polynomial.'
      ],
      verificationMethod: 'Substitute k back into the polynomial, factorise, and check if the roots satisfy the original condition.',
      commonTrap: 'Trying to find α and β as complicated square root formulas instead of using symmetric identities.',
      exemplarQuestion: 'If the sum of the squares of zeroes of the quadratic polynomial f(x) = x² - 8x + k is 40, find the value of k.',
      exemplarAnswer: 'α + β = 8, αβ = k. α² + β² = (α + β)² - 2αβ ⇒ 40 = 8² - 2k ⇒ 40 = 64 - 2k ⇒ 2k = 24 ⇒ k = 12.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch2_q1',
      chapterId: 2,
      topic: 'Graphical Zeroes',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'If the graph of a quadratic polynomial touches the x-axis at exactly one point, the number of distinct real zeroes is:',
      options: ['1', '2', '0', '3'],
      correctAnswer: '1',
      marks: 1,
      hints: ['Touching the x-axis means the two roots coincide (equal roots).'],
      solutionSteps: [
        'When a parabola touches the x-axis at a single point, both zeroes are equal.',
        'Thus, the number of distinct real zeroes is 1.'
      ],
      commonTrap: 'Confusing "distinct zeroes" (1) with "degree of polynomial" (2).',
      isOriginalPractice: true,
      sourcePdfRef: 'Textbook Ch 2 Section 2.2',
      conceptId: 'ch2_c1'
    },
    {
      id: 'ch2_q2',
      chapterId: 2,
      topic: 'Sum and Product of Roots',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'A quadratic polynomial whose zeroes are -4 and 3 is:',
      options: ['x² + x - 12', 'x² - x - 12', 'x² + x + 12', 'x² - x + 12'],
      correctAnswer: 'x² + x - 12',
      marks: 1,
      hints: ['Sum = (-4) + 3 = -1; Product = (-4) × 3 = -12. Formula: x² - Sx + P.'],
      solutionSteps: [
        'Sum of zeroes S = -4 + 3 = -1.',
        'Product of zeroes P = (-4) × 3 = -12.',
        'Required polynomial = x² - Sx + P = x² - (-1)x + (-12) = x² + x - 12.'
      ],
      commonTrap: 'Writing x² - x - 12 because students forget that -S becomes -(-1) = +1.',
      isOriginalPractice: true,
      sourcePdfRef: 'Practice - Exercise & Solutions.pdf',
      conceptId: 'ch2_c2'
    },
    {
      id: 'ch2_q3',
      chapterId: 2,
      topic: 'Symmetric Expressions',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'If α and β are the zeroes of the quadratic polynomial f(x) = x² - p x + q, prove that α² / β² + β² / α² = (p⁴ - 4p² q + 2q²) / q².',
      correctAnswer: '(p⁴ - 4p² q + 2q²) / q²',
      marks: 3,
      hints: ['Find common denominator: (α⁴ + β⁴) / (α² β²). Then write α⁴ + β⁴ = (α² + β²)² - 2(α β)².'],
      solutionSteps: [
        'α + β = p, αβ = q.',
        'α² + β² = (α + β)² - 2αβ = p² - 2q.',
        'Now, α⁴ + β⁴ = (α² + β²)² - 2(αβ)² = (p² - 2q)² - 2q² = p⁴ - 4p² q + 4q² - 2q² = p⁴ - 4p² q + 2q².',
        'Dividing by α²β² = q² gives the desired expression.'
      ],
      commonTrap: 'Forgetting to square (p² - 2q) completely.',
      isOriginalPractice: true,
      sourcePdfRef: 'PW Competency Book / RD Sharma Ex 2.3',
      conceptId: 'ch2_c3'
    },
    {
      id: 'ch2_q4',
      chapterId: 2,
      topic: 'Parameter Determination',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'If the squared difference of the zeroes of the quadratic polynomial f(x) = x² + p x + 45 is equal to 144, find the value of p.',
      options: ['p = ±18', 'p = ±12', 'p = ±9', 'p = ±15'],
      correctAnswer: 'p = ±18',
      marks: 3,
      hints: ['(α - β)² = (α + β)² - 4 α β = 144.'],
      solutionSteps: [
        'Here a = 1, b = p, c = 45.',
        'Sum: α + β = -p. Product: αβ = 45.',
        '(α - β)² = (α + β)² - 4(αβ).',
        '144 = (-p)² - 4(45)',
        '144 = p² - 180',
        'p² = 144 + 180 = 324',
        'p = ±√324 = ±18.'
      ],
      commonTrap: 'Writing only p = 18 and forgetting the negative solution p = -18.',
      isOriginalPractice: true,
      sourcePdfRef: 'PYQ Granth 2019 Standard',
      conceptId: 'ch2_c3'
    },
    {
      id: 'ch2_q5',
      chapterId: 2,
      topic: 'Polynomial Root Transformation Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'If α and β are the zeroes of the quadratic polynomial 2x² - 5x + 7, find a quadratic polynomial whose zeroes are (2α + 3β) and (3α + 2β).',
      correctAnswer: 'k[x² - (25/2)x + 361/4] or 4x² - 50x + 361',
      marks: 4,
      hints: ['Find the new sum S_new = 5(α + β) and new product P_new = (2α + 3β)(3α + 2β). Expand using symmetric identities.'],
      solutionSteps: [
        'For 2x² - 5x + 7: α + β = 5/2, αβ = 7/2.',
        'New Sum: S_new = (2α + 3β) + (3α + 2β) = 5(α + β) = 5 × (5/2) = 25/2.',
        'New Product: P_new = (2α + 3β)(3α + 2β) = 6α² + 4αβ + 9αβ + 6β² = 6(α² + β²) + 13αβ.',
        'α² + β² = (α + β)² - 2αβ = (5/2)² - 2(7/2) = 25/4 - 7 = -3/4.',
        'P_new = 6(-3/4) + 13(7/2) = -9/2 + 91/2 = 82/2 = 41.',
        'Polynomial = k[x² - S_new x + P_new] = k[x² - (25/2)x + 41]. Setting k = 2 gives 2x² - 25x + 82.'
      ],
      commonTrap: 'Arithmetic mistake when calculating 6(α² + β²) + 13(αβ).',
      isOriginalPractice: true,
      sourcePdfRef: 'Oswaal QCB Challenge Series',
      conceptId: 'ch2_c3'
    }
  ],
  pyqs: [
    {
      id: 'ch2_pyq_2024',
      year: 'CBSE 2024 Standard',
      marks: 1,
      topic: 'Coefficients of Quadratic Polynomial',
      conceptTested: 'Reciprocal Zeroes Condition',
      question: 'If one zero of the polynomial p(x) = (a² + 9)x² + 13x + 6a is reciprocal of the other, find the value of a.',
      markingSchemeBreakdown: [
        { step: 'Equating product of zeroes c/a to 1', marks: 0.5 },
        { step: 'Solving quadratic equation (a - 3)² = 0 to get a = 3', marks: 0.5 }
      ],
      fullSolution: 'Let roots be α and 1/α. Product of zeroes = α × (1/α) = 1. We know product = c / coefficient of x² = 6a / (a² + 9). 6a / (a² + 9) = 1 ⇒ a² + 9 = 6a ⇒ a² - 6a + 9 = 0 ⇒ (a - 3)² = 0 ⇒ a = 3.',
      commonMistake: 'Expanding sum of roots instead of using product = 1.',
      frequencyTrend: 'Frequently asked concept (2018, 2020, 2024).',
      source: 'CBSE Board 2024 Set 30/2/1'
    },
    {
      id: 'ch2_pyq_2023',
      year: 'CBSE 2023 Standard',
      marks: 3,
      topic: 'Zeroes and Relations',
      conceptTested: 'Finding zeroes and verifying relations',
      question: 'Find the zeroes of the quadratic polynomial 4s² - 4s + 1 and verify the relationship between the zeroes and coefficients.',
      markingSchemeBreakdown: [
        { step: 'Factorising to (2s - 1)² = 0 to get s = 1/2, 1/2', marks: 1.5 },
        { step: 'Verification of α + β = -b/a and αβ = c/a', marks: 1.5 }
      ],
      fullSolution: '4s² - 4s + 1 = (2s - 1)² = 0 ⇒ s = 1/2, 1/2. Sum: 1/2 + 1/2 = 1. -b/a = -(-4)/4 = 1. (Verified). Product: (1/2) × (1/2) = 1/4. c/a = 1/4. (Verified).',
      commonMistake: 'Claiming there is only one zero instead of two equal zeroes (s = 1/2, 1/2).',
      frequencyTrend: 'Direct NCERT textbook question appearing regularly.',
      source: 'CBSE Board 2023'
    }
  ],
  commonMistakes: [
    {
      id: 'ch2_m_err1',
      title: 'Sign Confusion in Forming Polynomial x² - Sx + P',
      mistakeCategory: 'Sign & Algebraic Error',
      flawedWorking: 'Given sum S = -5, product P = 6. Student writes x² - 5x + 6.',
      whyItIsWrong: 'The formula is x² - (S)x + P. When S is negative, -(-5) becomes +5!',
      correctWorking: 'x² - (-5)x + 6 = x² + 5x + 6.',
      howToAvoid: 'Always write the formula with parentheses: x² - (sum)x + (product).',
      retryQuestion: {
        question: 'Form a quadratic polynomial whose sum of zeroes is -7 and product of zeroes is -8.',
        correctAnswer: 'x² + 7x - 8',
        explanation: 'x² - (-7)x + (-8) = x² + 7x - 8.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Number of real zeroes of y = p(x) is the count of intersections with the X-AXIS.',
      'Quadratic ax² + bx + c: α + β = -b/a, αβ = c/a.',
      'Polynomial with roots α, β: k[x² - (α + β)x + αβ].',
      'α² + β² = (α + β)² - 2αβ.',
      '1/α + 1/β = (α + β) / (αβ).',
      'If roots are reciprocals: c = a. If roots are opposites: b = 0.'
    ],
    speedTips: [
      'If product of zeroes is 1, immediately equate coefficient of x² and constant term: a = c.',
      'If zeroes are equal in magnitude but opposite in sign, set middle coefficient b = 0 immediately.'
    ],
    lastDayChecklist: [
      'Did you write k ≠ 0 in polynomial formation?',
      'Did you verify sum = -b/a (with the negative sign)?',
      'Can you expand α³ + β³ = (α+β)³ - 3αβ(α+β)?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 10,
      questions: [
        {
          id: 'ch2_diag_1',
          chapterId: 2,
          topic: 'Zeroes from Equation',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The zeroes of x² - 2x - 8 are:',
          options: ['4, -2', '-4, 2', '4, 2', '-4, -2'],
          correctAnswer: '4, -2',
          marks: 1,
          hints: ['x² - 4x + 2x - 8 = 0.'],
          solutionSteps: ['(x - 4)(x + 2) = 0 ⇒ x = 4, x = -2.'],
          commonTrap: 'Inverting signs of the roots.',
          isOriginalPractice: true,
          sourcePdfRef: 'Diagnostic Test',
          conceptId: 'ch2_c2'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch2_ct_1',
          chapterId: 2,
          topic: 'Coefficients and Identities',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'If α and β are zeroes of the polynomial x² - 6x + a, find the value of a if 3α + 2β = 20.',
          correctAnswer: 'a = -16',
          marks: 3,
          hints: ['We know α + β = 6. Use substitution with 3α + 2β = 20 to find α and β.'],
          solutionSteps: [
            'α + β = 6 ⇒ 2α + 2β = 12.',
            'Given 3α + 2β = 20.',
            'Subtracting: (3α + 2β) - (2α + 2β) = 20 - 12 ⇒ α = 8.',
            'Then β = 6 - α = 6 - 8 = -2.',
            'We know αβ = a / 1 = a.',
            'Therefore, a = 8 × (-2) = -16.'
          ],
          commonTrap: 'Assuming α and β must be positive numbers.',
          isOriginalPractice: true,
          sourcePdfRef: 'Chapter Test',
          conceptId: 'ch2_c3'
        }
      ]
    },
    {
      testType: 'Advanced Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch2_adv_1',
          chapterId: 2,
          topic: 'Cubic / Higher Order Zeroes',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'If the zeroes of the polynomial x³ - 3x² + x + 1 are a - b, a, a + b, find a and b.',
          options: ['a = 1, b = ±√2', 'a = 1, b = ±2', 'a = -1, b = ±√2', 'a = 2, b = ±1'],
          correctAnswer: 'a = 1, b = ±√2',
          marks: 3,
          hints: ['Sum of roots = -(-3)/1 = 3. (a - b) + a + (a + b) = 3 ⇒ 3a = 3.'],
          solutionSteps: [
            'Sum of zeroes = (a - b) + a + (a + b) = 3a.',
            'From polynomial, sum of zeroes = -(-3)/1 = 3 ⇒ 3a = 3 ⇒ a = 1.',
            'Product of zeroes = (a - b) · a · (a + b) = a(a² - b²).',
            'From polynomial, product of zeroes = -d/a = -(1)/1 = -1.',
            'Substitute a = 1: 1(1 - b²) = -1 ⇒ 1 - b² = -1 ⇒ b² = 2 ⇒ b = ±√2.'
          ],
          commonTrap: 'Forgetting the negative sign in the product of roots for cubic polynomials (-d/a).',
          isOriginalPractice: true,
          sourcePdfRef: 'Advanced Test',
          conceptId: 'ch2_c2'
        }
      ]
    },
    {
      testType: 'Mastery Test',
      durationMinutes: 60,
      totalMarks: 35,
      questions: [
        {
          id: 'ch2_mst_1',
          chapterId: 2,
          topic: 'Polynomial Mastery',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'If α, β are zeroes of x² - 4x + 1, find the value of α³ + β³.',
          options: ['52', '48', '64', '56'],
          correctAnswer: '52',
          marks: 3,
          hints: ['α + β = 4, αβ = 1. α³ + β³ = (α + β)³ - 3αβ(α + β).'],
          solutionSteps: [
            'α + β = 4, αβ = 1.',
            'α³ + β³ = (α + β)³ - 3αβ(α + β)',
            '= 4³ - 3(1)(4) = 64 - 12 = 52.'
          ],
          commonTrap: 'Writing 4³ = 64 without subtracting the 3ab(a+b) term.',
          isOriginalPractice: true,
          sourcePdfRef: 'Mastery Test',
          conceptId: 'ch2_c3'
        }
      ]
    }
  ]
};
