import { ChapterData } from './types';

export const CH8_DATA: ChapterData = {
  chapterNumber: 8,
  chapterName: 'Introduction to Trigonometry',
  weightageEstimate: '8–10 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Introduction to Trigonometry is one of the most powerful and high-yielding branches of mathematics in Class 10. It establishes the mathematical language of right-angled triangles through ratios (sine, cosine, tangent, cosecant, secant, cotangent), special standard angle values (0°, 30°, 45°, 60°, 90°), and the three fundamental Pythagorean identities used to prove algebraic-trigonometric equivalence.',
    prerequisites: [
      'Pythagoras theorem: Hypotenuse^2 = Perpendicular^2 + Base^2',
      'Basic algebraic identities: (a+b)^2, (a-b)^2, a^2 - b^2, a^3 + b^3',
      'Fraction simplification and rationalizing denominators'
    ],
    coreIdeas: [
      'Identification of Sides: The side OPPOSITE to angle theta is always the Perpendicular (P). The side adjacent to theta is the Base (B). The longest side opposite to 90 degrees is the Hypotenuse (H). If the angle switches from angle A to angle C, P and B SWAP!',
      'Primary Ratios: sin = P/H, cos = B/H, tan = P/B. (Mnemonic: Pandit Badri Prasad / Har Har Bole).',
      'Reciprocal Ratios: cosec = 1/sin = H/P, sec = 1/cos = H/B, cot = 1/tan = B/P.',
      'Quotient Ratios: tan = sin/cos, cot = cos/sin.',
      'Special Angle Values: Memorize via the 0-1-2-3-4 rule over 4 under square root. sin(0)=0, sin(30)=1/2, sin(45)=1/√2, sin(60)=√3/2, sin(90)=1. Cosine is Sine in exact reverse order!',
      'The Three Core Identities: (1) sin^2(theta) + cos^2(theta) = 1; (2) 1 + tan^2(theta) = sec^2(theta); (3) 1 + cot^2(theta) = cosec^2(theta).',
      'The Conjugate Reciprocal Secret: sec^2(theta) - tan^2(theta) = 1 ⟹ (sec(theta) - tan(theta))(sec(theta) + tan(theta)) = 1. If sec(theta) + tan(theta) = p, then sec(theta) - tan(theta) = 1/p instantly!'
    ],
    keyRelationships: [
      'sin(theta) and cos(theta) are always between 0 and 1 for acute angles (since P < H and B < H).',
      'sec(theta) and cosec(theta) are always >= 1.',
      'tan(45) = 1, sin(30) = cos(60) = 1/2, sin(45) = cos(45) = 1/√2, sin(60) = cos(30) = √3/2.',
      'tan(90), sec(90), cosec(0), cot(0) are NOT DEFINED (division by zero).'
    ],
    frequentMisunderstandings: [
      'Assuming the bottom horizontal side is always the base! (If angle is at the top vertex C, the vertical side AB becomes the Perpendicular and BC becomes the Base).',
      'Writing sin^2(theta) as (sin theta)^2 = sin(theta^2) (sin^2 theta is the square of the ratio, NEVER square the angle theta!).',
      'Writing tan(A + B) = tan A + tan B (Trigonometric functions DO NOT distribute over addition!).',
      'Trying to cancel terms across fractions without factoring.'
    ],
    examImportanceEvidence: 'Guaranteed 8–10 marks every year! 1 MCQ (1 Mark on standard angle or identity), 1 Short Answer (2 Marks on finding ratios from given tan A), and 1 Long Answer / Proof (4 or 5 Marks proving a trigonometric identity).'
  },
  concepts: [
    {
      id: 'ch8_c1',
      title: 'Trigonometric Ratios & Right Triangles',
      topic: 'T-Ratios Definition',
      simpleExplanation: 'Trig ratios are simply fixed recipe proportions between the three sides of any right triangle. No matter how big the triangle is, if the angle is 30°, the opposite side is ALWAYS half the hypotenuse!',
      exactMathIdea: 'For an acute angle theta in a right-angled triangle: sin(theta) = Perpendicular/Hypotenuse, cos(theta) = Base/Hypotenuse, tan(theta) = Perpendicular/Base. cosec(theta) = 1/sin(theta), sec(theta) = 1/cos(theta), cot(theta) = 1/tan(theta).',
      formulaOrTheorem: '\\sin\\theta = \\frac{P}{H}, \\quad \\cos\\theta = \\frac{B}{H}, \\quad \\tan\\theta = \\frac{P}{B} = \\frac{\\sin\\theta}{\\cos\\theta}',
      whenToUse: 'When given one trigonometric ratio (e.g. sin A = 3/5) and asked to find all other ratios or evaluate algebraic expressions.',
      recognitionClues: [
        'If 15 cot A = 8, find sin A and sec A',
        'In triangle ABC right angled at B, if tan A = 1/√3, find sin A cos C + cos A sin C',
        'Given sec theta = 13/12, calculate all other trigonometric ratios'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Finding All Ratios from Given Ratio',
          question: 'Given 15 cot A = 8, find sin A and sec A.',
          given: '15 cot A = 8 in right triangle ABC.',
          toFind: 'Values of sin A and sec A.',
          methodSelectionReason: 'cot A = 8/15 gives Base/Perpendicular = 8/15. Use Pythagoras theorem to find Hypotenuse.',
          stepByStepSolution: [
            '15 cot A = 8 ⟹ cot A = 8 / 15.',
            'Since cot A = Base / Perpendicular = AB / BC, let Base = 8k and Perpendicular = 15k for some positive k.',
            'By Pythagoras Theorem: AC^2 = AB^2 + BC^2',
            'AC^2 = (8k)^2 + (15k)^2 = 64k^2 + 225k^2 = 289k^2',
            'AC = sqrt(289k^2) = 17k (Hypotenuse = 17k).',
            'Now calculate required ratios:',
            'sin A = Perpendicular / Hypotenuse = 15k / 17k = 15 / 17.',
            'sec A = Hypotenuse / Base = 17k / 8k = 17 / 8.'
          ],
          finalAnswer: 'sin A = 15/17, sec A = 17/8',
          verificationCheck: '1 + cot^2 A = 1 + (8/15)^2 = 1 + 64/225 = 289/225 = (17/15)^2 = cosec^2 A. Matches perfectly!',
          commonTrap: 'Forgetting to introduce the constant k when setting sides (Base = 8k, Perpendicular = 15k) can lose 0.5 mark in subjective board papers.'
        },
        {
          level: 'standard',
          title: 'Angle Switching: sin A cos C + cos A sin C',
          question: 'In Triangle ABC, right-angled at B, if tan A = 1/√3, find the value of: sin A cos C + cos A sin C.',
          given: 'Right Triangle ABC at B, tan A = 1/√3.',
          toFind: 'Value of sin A cos C + cos A sin C.',
          methodSelectionReason: 'For angle A: P = BC = 1, B = AB = √3, H = 2. For angle C: P = AB = √3, B = BC = 1, H = 2.',
          stepByStepSolution: [
            'tan A = BC / AB = 1 / √3. Let BC = 1k, AB = √3 k.',
            'AC = sqrt((1k)^2 + (√3 k)^2) = sqrt(k^2 + 3k^2) = sqrt(4k^2) = 2k.',
            'For angle A: sin A = BC/AC = 1/2, cos A = AB/AC = √3/2.',
            'For angle C: side opposite to C is AB, so sin C = AB/AC = √3/2, cos C = BC/AC = 1/2.',
            'Substitute into expression: sin A cos C + cos A sin C',
            '= (1/2) * (1/2) + (√3/2) * (√3/2)',
            '= 1/4 + 3/4 = 4/4 = 1.'
          ],
          finalAnswer: 'Value = 1',
          verificationCheck: 'In any right triangle at B, A + C = 90 degrees. sin A cos C + cos A sin C = sin(A + C) = sin 90 = 1. Exact match!',
          commonTrap: 'Using the same perpendicular and base for both angle A and angle C.'
        }
      ],
      commonMisconceptions: [
        'Believing sin A means sin multiplied by A (sin is a function, not a multiplication factor; sin without an angle is meaningless!).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board examinations.',
      sourceTrace: 'NCERT Ch 8 Exercise 8.1'
    },
    {
      id: 'ch8_c2',
      title: 'Fundamental Trigonometric Identities',
      topic: 'Proving Trigonometric Identities',
      simpleExplanation: 'Identities are mathematical universal truths that work for ANY angle! Convert messy terms to simple sin and cos to unlock them like magic.',
      exactMathIdea: 'The three fundamental identities derived from Pythagoras theorem: (1) sin^2(theta) + cos^2(theta) = 1; (2) sec^2(theta) - tan^2(theta) = 1; (3) cosec^2(theta) - cot^2(theta) = 1. Valid for all acute angles 0 <= theta <= 90.',
      formulaOrTheorem: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad \\sec^2\\theta - \\tan^2\\theta = 1, \\quad \\csc^2\\theta - \\cot^2\\theta = 1',
      whenToUse: 'Whenever asked to prove LHS = RHS in trigonometric expressions, or simplify complex trigonometric fractions.',
      recognitionClues: [
        'Prove that (cosec theta - cot theta)^2 = (1 - cos theta)/(1 + cos theta)',
        'Prove that sin theta / (1 + cos theta) + (1 + cos theta) / sin theta = 2 cosec theta',
        'If sec theta + tan theta = p, find the value of sin theta'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Classic Identity Proof: (cosec - cot)^2',
          question: 'Prove that: (cosec θ - cot θ)^2 = (1 - cos θ) / (1 + cos θ).',
          given: 'LHS = (cosec θ - cot θ)^2.',
          toFind: 'Proof that LHS = (1 - cos θ) / (1 + cos θ).',
          methodSelectionReason: 'Convert cosec and cot into fundamental ratios (sin and cos), combine terms, and use sin^2 = 1 - cos^2 = (1-cos)(1+cos).',
          stepByStepSolution: [
            'LHS = (cosec θ - cot θ)^2',
            'Convert to sin and cos: = (1 / sin θ - cos θ / sin θ)^2',
            '= [(1 - cos θ) / sin θ]^2',
            '= (1 - cos θ)^2 / sin^2 θ',
            'Using the identity sin^2 θ = 1 - cos^2 θ:',
            '= (1 - cos θ)^2 / (1 - cos^2 θ)',
            'Factorize denominator using a^2 - b^2 = (a - b)(a + b):',
            '= (1 - cos θ)(1 - cos θ) / [(1 - cos θ)(1 + cos θ)]',
            'Cancel common factor (1 - cos θ):',
            '= (1 - cos θ) / (1 + cos θ) = RHS. Hence Proved!'
          ],
          finalAnswer: 'Hence Proved: LHS = RHS',
          verificationCheck: 'Test with θ = 60°: cosec 60 = 2/√3, cot 60 = 1/√3; LHS = (1/√3)^2 = 1/3. RHS = (1 - 1/2)/(1 + 1/2) = (1/2)/(3/2) = 1/3. Identical!',
          commonTrap: 'Expanding (1 - cos θ)^2 into 1 - 2 cos θ + cos^2 θ early, making cancellation difficult.'
        }
      ],
      commonMisconceptions: [
        'Writing 1 + tan^2 θ = cot^2 θ (confusing tan with cot; 1 + tan^2 θ = sec^2 θ, while 1 + cot^2 θ = cosec^2 θ).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Guaranteed 4 or 5-mark question in Section D of every CBSE board paper.',
      sourceTrace: 'NCERT Ch 8 Exercise 8.3 & Theorem Proofs'
    }
  ],
  formulas: [
    {
      id: 'ch8_f1',
      name: 'Pythagorean Trigonometric Identities',
      formula: '\\sin^2\\theta + \\cos^2\\theta = 1, \\quad \\sec^2\\theta - \\tan^2\\theta = 1, \\quad \\csc^2\\theta - \\cot^2\\theta = 1',
      symbolMeanings: [
        { symbol: 'θ', meaning: 'Acute angle in right triangle (0° ≤ θ ≤ 90°)' },
        { symbol: 'sin, cos, tan, sec, csc, cot', meaning: 'Standard trigonometric ratio functions' }
      ],
      whenToUse: 'In identity simplification, evaluating squared terms, and expressing one ratio in terms of another.',
      conditions: ['Angle θ within domain where functions are defined (θ ≠ 90° for tan/sec, θ ≠ 0° for cot/cosec)'],
      commonSubstitutions: [
        'sin^2 θ = 1 - cos^2 θ',
        'cos^2 θ = 1 - sin^2 θ',
        'sec^2 θ = 1 + tan^2 θ',
        'tan^2 θ = sec^2 θ - 1',
        'cosec^2 θ = 1 + cot^2 θ'
      ],
      miniExample: {
        question: 'Evaluate (1 + tan^2 θ)(1 - sin θ)(1 + sin θ).',
        substitution: '(1 + tan^2 θ)(1 - sin^2 θ) = (sec^2 θ)(cos^2 θ) = (1 / cos^2 θ)(cos^2 θ)',
        result: '1'
      },
      commonMistakes: ['Writing sec^2 θ + tan^2 θ = 1 instead of sec^2 θ - tan^2 θ = 1.'],
      memoryTrick: 'Sin-Cos ADD to 1; Sec-Tan and Csc-Cot SUBTRACT to 1!',
      sourceTrace: 'NCERT Section 8.4'
    },
    {
      id: 'ch8_f2',
      name: 'Conjugate Identity Reciprocal Trick',
      formula: '\\sec\\theta - \\tan\\theta = \\frac{1}{\\sec\\theta + \\tan\\theta}, \\quad \\csc\\theta - \\cot\\theta = \\frac{1}{\\csc\\theta + \\cot\\theta}',
      symbolMeanings: [
        { symbol: 'sec θ ± tan θ', meaning: 'Sum and difference of secant and tangent' }
      ],
      whenToUse: 'When given sec θ + tan θ = p or cosec θ + cot θ = q, and asked to find sin θ or cos θ.',
      conditions: ['p ≠ 0'],
      commonSubstitutions: ['If sec θ + tan θ = p, then sec θ - tan θ = 1/p. Adding gives 2 sec θ = p + 1/p.'],
      miniExample: {
        question: 'If sec θ + tan θ = 4, find cos θ.',
        substitution: 'sec θ - tan θ = 1/4. Add both: 2 sec θ = 4 + 1/4 = 17/4 ⟹ sec θ = 17/8 ⟹ cos θ = 8/17',
        result: 'cos θ = 8/17'
      },
      commonMistakes: ['Attempting to square both sides, creating long fourth-degree polynomials.'],
      memoryTrick: 'Sec and Tan are reciprocal twins across subtraction and addition!',
      sourceTrace: 'CBSE Board Question Pattern'
    }
  ],
  methodGuides: [
    {
      id: 'ch8_m1',
      questionPattern: 'Proving Identities by Converting to Sine and Cosine',
      recognitionClues: ['Prove that tan θ / (1 - cot θ) + cot θ / (1 - tan θ) = 1 + sec θ cosec θ', 'LHS contains mixed tangent, cotangent, secant'],
      requiredConcept: 'Expressing all 4 auxiliary ratios in terms of sin θ and cos θ.',
      whatIsGiven: 'A complex trigonometric expression on LHS.',
      whatMustBeFound: 'Proof that LHS reduces algebraically to RHS.',
      chosenMethod: 'Replace tan = sin/cos, cot = cos/sin, sec = 1/cos, cosec = 1/sin. Take LCM of denominators.',
      executionSteps: [
        'Step 1: Write LHS clearly.',
        'Step 2: Replace every tan θ with (sin θ / cos θ) and cot θ with (cos θ / sin θ).',
        'Step 3: Simplify individual fractions by finding common denominators in numerators and denominators.',
        'Step 4: Invert and multiply fractions: (A/B) / (C/D) = (A * D) / (B * C).',
        'Step 5: Factor out common terms or negative signs (e.g. cos θ - sin θ = -(sin θ - cos θ)).',
        'Step 6: Combine over common denominator: use identity a^3 - b^3 = (a - b)(a^2 + ab + b^2).',
        'Step 7: Replace sin^2 θ + cos^2 θ with 1.',
        'Step 8: Split the terms to match RHS. Conclude with "Hence Proved".'
      ],
      verificationMethod: 'Substitute θ = 30° or 45° to check numerical equality of LHS and RHS.',
      commonTrap: 'Forgetting the negative sign when converting (cos θ - sin θ) to (sin θ - cos θ).',
      exemplarQuestion: 'Prove that: tan θ / (1 - cot θ) + cot θ / (1 - tan θ) = 1 + sec θ cosec θ.',
      exemplarAnswer: 'Convert to sin and cos: LHS = (sin/cos)/(1 - cos/sin) + (cos/sin)/(1 - sin/cos) = sin^2 / [cos(sin - cos)] - cos^2 / [sin(sin - cos)] = (sin^3 - cos^3) / [sin cos (sin - cos)] = [(sin - cos)(sin^2 + sin cos + cos^2)] / [sin cos (sin - cos)] = (1 + sin cos) / (sin cos) = 1/(sin cos) + 1 = 1 + sec θ cosec θ = RHS. Hence Proved.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch8_q1',
      chapterId: 8,
      topic: 'Standard Angle Evaluation',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'Evaluate: 2 tan^2 45° + cos^2 30° - sin^2 60°.',
      options: ['1', '2', '√3', '0'],
      correctAnswer: '2',
      marks: 1,
      hints: ['tan 45° = 1, cos 30° = √3/2, sin 60° = √3/2.'],
      solutionSteps: [
        'tan 45° = 1 ⟹ 2 tan^2 45° = 2(1)^2 = 2',
        'cos 30° = √3/2 ⟹ cos^2 30° = (√3/2)^2 = 3/4',
        'sin 60° = √3/2 ⟹ sin^2 60° = (√3/2)^2 = 3/4',
        'Expression = 2 + 3/4 - 3/4 = 2.'
      ],
      commonTrap: 'Forgetting to square the values (writing 2(1) + √3/2 - √3/2).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 8 Ex 8.2 Q1(ii)',
      conceptId: 'ch8_c1'
    },
    {
      id: 'ch8_q2',
      chapterId: 8,
      topic: 'Conjugate Sec-Tan Relation',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'If sec θ + tan θ = 7, find the value of sec θ - tan θ.',
      options: ['7', '-7', '1/7', '0'],
      correctAnswer: '1/7',
      marks: 1,
      hints: ['Recall sec^2 θ - tan^2 θ = 1 ⟹ (sec θ - tan θ)(sec θ + tan θ) = 1.'],
      solutionSteps: [
        'We know that sec^2 θ - tan^2 θ = 1',
        '(sec θ - tan θ)(sec θ + tan θ) = 1',
        '(sec θ - tan θ) * 7 = 1',
        'sec θ - tan θ = 1/7.'
      ],
      commonTrap: 'Thinking sec θ - tan θ = -7.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 2023 MCQ',
      conceptId: 'ch8_c2'
    },
    {
      id: 'ch8_q3',
      chapterId: 8,
      topic: 'Trigonometric Equation with A and B',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'If tan(A + B) = √3 and tan(A - B) = 1/√3, where 0° < A + B ≤ 90° and A > B, find the values of A and B.',
      correctAnswer: 'A = 45°, B = 15°',
      marks: 3,
      hints: ['tan 60° = √3 ⟹ A + B = 60°. tan 30° = 1/√3 ⟹ A - B = 30°.'],
      solutionSteps: [
        'tan(A + B) = √3 = tan 60° ⟹ A + B = 60° ... (1)',
        'tan(A - B) = 1/√3 = tan 30° ⟹ A - B = 30° ... (2)',
        'Add equations (1) and (2):',
        '(A + B) + (A - B) = 60° + 30°',
        '2A = 90° ⟹ A = 45°',
        'Substitute A = 45° into (1):',
        '45° + B = 60° ⟹ B = 15°.'
      ],
      commonTrap: 'Distributing tan as tan A + tan B.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 8 Ex 8.2 Q3',
      conceptId: 'ch8_c1'
    },
    {
      id: 'ch8_q4',
      chapterId: 8,
      topic: 'Rationalizing Trigonometric Fractions',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'Prove that: √[(1 + sin A) / (1 - sin A)] = sec A + tan A.',
      correctAnswer: 'Hence Proved: LHS = sec A + tan A = RHS',
      marks: 3,
      hints: ['Multiply numerator and denominator inside the square root by (1 + sin A).'],
      solutionSteps: [
        'LHS = √[(1 + sin A) / (1 - sin A)]',
        'Multiply numerator and denominator by (1 + sin A):',
        '= √[ (1 + sin A)(1 + sin A) / ((1 - sin A)(1 + sin A)) ]',
        '= √[ (1 + sin A)^2 / (1 - sin^2 A) ]',
        'Using identity 1 - sin^2 A = cos^2 A:',
        '= √[ (1 + sin A)^2 / cos^2 A ]',
        '= (1 + sin A) / cos A',
        'Split the fraction: = 1 / cos A + sin A / cos A = sec A + tan A = RHS. Hence Proved!'
      ],
      commonTrap: 'Splitting the square root over addition: √(1 + sin A) ≠ 1 + √sin A.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 8 Ex 8.3 Q4(vi)',
      conceptId: 'ch8_c2'
    },
    {
      id: 'ch8_q5',
      chapterId: 8,
      topic: '5-Mark Board Proof Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'Prove that: (sin θ - cos θ + 1) / (sin θ + cos θ - 1) = 1 / (sec θ - tan θ), using the identity sec^2 θ = 1 + tan^2 θ.',
      correctAnswer: 'Hence Proved: LHS = 1 / (sec θ - tan θ)',
      marks: 5,
      hints: ['Divide numerator and denominator by cos θ to convert into tan θ and sec θ. Then replace 1 in numerator with (sec^2 θ - tan^2 θ).'],
      solutionSteps: [
        'Divide numerator and denominator of LHS by cos θ:',
        '= [(sin θ / cos θ) - (cos θ / cos θ) + (1 / cos θ)] / [(sin θ / cos θ) + (cos θ / cos θ) - (1 / cos θ)]',
        '= (tan θ - 1 + sec θ) / (tan θ + 1 - sec θ)',
        '= [(tan θ + sec θ) - 1] / [tan θ - sec θ + 1]',
        'Substitute 1 = (sec^2 θ - tan^2 θ) in the NUMERATOR only:',
        '= [(sec θ + tan θ) - (sec^2 θ - tan^2 θ)] / [tan θ - sec θ + 1]',
        '= [(sec θ + tan θ) - (sec θ - tan θ)(sec θ + tan θ)] / [tan θ - sec θ + 1]',
        'Factor out (sec θ + tan θ) in numerator:',
        '= (sec θ + tan θ)[1 - (sec θ - tan θ)] / [tan θ - sec θ + 1]',
        '= (sec θ + tan θ)[1 - sec θ + tan θ] / [tan θ - sec θ + 1]',
        'Since [1 - sec θ + tan θ] = [tan θ - sec θ + 1], they cancel completely!',
        '= sec θ + tan θ',
        'Multiply and divide by (sec θ - tan θ):',
        '= (sec^2 θ - tan^2 θ) / (sec θ - tan θ) = 1 / (sec θ - tan θ) = RHS. Hence Proved!'
      ],
      commonTrap: 'Substituting 1 = sec^2 θ - tan^2 θ in BOTH numerator and denominator, which creates an endless loop.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 8 Example 15',
      conceptId: 'ch8_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch8_pyq1',
      year: 'CBSE 2024 / 2020 / 2018',
      marks: 4,
      topic: 'Proving Identity with Cosec and Cot',
      conceptTested: 'Trigonometric Identity Proof',
      question: 'Prove that: (cos A - sin A + 1) / (cos A + sin A - 1) = cosec A + cot A.',
      markingSchemeBreakdown: [
        { step: 'Dividing numerator and denominator by sin A to get cot A and cosec A', marks: 1 },
        { step: 'Grouping terms: (cot A + cosec A - 1) / (cot A - cosec A + 1)', marks: 1 },
        { step: 'Substituting 1 = cosec^2 A - cot^2 A in numerator and factoring', marks: 1 },
        { step: 'Cancelling common bracket and reaching cosec A + cot A', marks: 1 }
      ],
      fullSolution: 'Divide numerator and denominator by sin A:\nLHS = [(cos A / sin A) - (sin A / sin A) + (1 / sin A)] / [(cos A / sin A) + (sin A / sin A) - (1 / sin A)]\n= (cot A - 1 + cosec A) / (cot A + 1 - cosec A)\n= [(cosec A + cot A) - 1] / [cot A - cosec A + 1]\n\nUsing identity 1 = cosec^2 A - cot^2 A in numerator:\n= [(cosec A + cot A) - (cosec^2 A - cot^2 A)] / [cot A - cosec A + 1]\n= [(cosec A + cot A) - (cosec A - cot A)(cosec A + cot A)] / [cot A - cosec A + 1]\n= (cosec A + cot A)[1 - (cosec A - cot A)] / [cot A - cosec A + 1]\n= (cosec A + cot A)[1 - cosec A + cot A] / [cot A - cosec A + 1]\n\nCancelling the identical factor [1 - cosec A + cot A]:\n= cosec A + cot A = RHS. Hence Proved.',
      commonMistake: 'Dividing by cos A instead of sin A (which gives sec and tan instead of cosec and cot).',
      frequencyTrend: 'Repeated 7 times across standard board papers in last 12 years.',
      source: 'CBSE Official Board Examination'
    },
    {
      id: 'ch8_pyq2',
      year: 'CBSE 2023 / 2019',
      marks: 3,
      topic: 'Elimination of Trigonometric Variables',
      conceptTested: 'Pythagorean Identity Substitution',
      question: 'If x = a sin θ and y = b tan θ, prove that: a^2 / x^2 - b^2 / y^2 = 1.',
      markingSchemeBreakdown: [
        { step: 'Finding a/x = 1/sin θ = cosec θ', marks: 1.0 },
        { step: 'Finding b/y = 1/tan θ = cot θ', marks: 1.0 },
        { step: 'Squaring and subtracting: cosec^2 θ - cot^2 θ = 1', marks: 1.0 }
      ],
      fullSolution: 'Given x = a sin θ ⟹ a / x = 1 / sin θ = cosec θ.\nGiven y = b tan θ ⟹ b / y = 1 / tan θ = cot θ.\n\nNow substitute into LHS:\nLHS = (a / x)^2 - (b / y)^2\n= cosec^2 θ - cot^2 θ\nUsing the fundamental identity cosec^2 θ - cot^2 θ = 1:\n= 1 = RHS. Hence Proved.',
      commonMistake: 'Squaring x and y first and getting lost in cross-multiplications instead of taking reciprocal ratios a/x and b/y.',
      frequencyTrend: 'Classic 3-mark algebra-trig fusion problem.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch8_err1',
      title: 'Distributing Trigonometric Functions across Angles',
      mistakeCategory: 'Sign & Algebraic Error',
      flawedWorking: 'Student writes sin(A + B) = sin A + sin B or tan(60° - 30°) = tan 60° - tan 30°.',
      whyItIsWrong: 'Trigonometric functions are non-linear ratio operations, NOT algebraic multipliers.',
      correctWorking: 'sin(A + B) ≠ sin A + sin B. Evaluate the angle inside first: tan(60° - 30°) = tan 30° = 1/√3. (Whereas tan 60° - tan 30° = √3 - 1/√3 = 2/√3, completely different!).',
      howToAvoid: 'Never distribute "sin", "cos", or "tan" over a plus or minus sign.',
      retryQuestion: {
        question: 'Is cos(60° + 30°) equal to cos 60° + cos 30°?',
        correctAnswer: 'No',
        explanation: 'cos(60° + 30°) = cos 90° = 0. But cos 60° + cos 30° = 1/2 + √3/2 = (1+√3)/2 ≠ 0.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'P-B-P / H-H-B: sin = P/H, cos = B/H, tan = P/B.',
      'Side opposite to angle θ is ALWAYS the Perpendicular. When switching angle from A to C, P and B swap!',
      '0-1-2-3-4 trick for Sine: 0, 1/2, 1/√2, √3/2, 1. Cosine is reversed.',
      'sin^2 θ + cos^2 θ = 1; sec^2 θ - tan^2 θ = 1; cosec^2 θ - cot^2 θ = 1.',
      'If sec θ + tan θ = p ⟹ sec θ - tan θ = 1/p.',
      'To prove identities: Convert all non-sin/cos terms to sin θ and cos θ.'
    ],
    speedTips: [
      'tan 45° = cot 45° = 1 (Memorize as an instant pivot).',
      'sin 30° = cos 60° = 1/2. sin 60° = cos 30° = √3/2.',
      'In identity proofs with (1 ± sin θ) in denominator: multiply numerator and denominator by conjugate (1 ∓ sin θ).'
    ],
    lastDayChecklist: [
      'Did you remember that sec^2 θ - tan^2 θ = 1 has a MINUS sign (not a plus sign)?',
      'Can you write out the values for 0°, 30°, 45°, 60°, 90° in under 30 seconds?',
      'In identity proof, did you only replace "1" in the numerator?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch8_d1',
          chapterId: 8,
          topic: 'Identity Basics',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The value of 9 sec^2 A - 9 tan^2 A is:',
          correctAnswer: '9',
          marks: 1,
          hints: ['Factor out 9: 9(sec^2 A - tan^2 A).'],
          solutionSteps: ['9(sec^2 A - tan^2 A) = 9(1) = 9.'],
          commonTrap: 'Writing 1 or -9.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 8 Ex 8.3 Q4(i)',
          conceptId: 'ch8_c2'
        },
        {
          id: 'ch8_d2',
          chapterId: 8,
          topic: 'Standard Angle Ratio',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'If sin θ = cos θ for an acute angle θ, what is the value of 2 tan^2 θ + sin^2 θ - 1?',
          correctAnswer: '3/2',
          marks: 2,
          hints: ['sin θ = cos θ ⟹ tan θ = 1 ⟹ θ = 45°.'],
          solutionSteps: [
            'sin θ = cos θ ⟹ sin θ / cos θ = 1 ⟹ tan θ = 1 ⟹ θ = 45°.',
            'sin 45° = 1/√2 ⟹ sin^2 45° = 1/2.',
            'Expression = 2(1)^2 + 1/2 - 1 = 2 + 1/2 - 1 = 1 + 1/2 = 3/2.'
          ],
          commonTrap: 'Forgetting that tan θ = 1 implies θ = 45°.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2021 Paper',
          conceptId: 'ch8_c1'
        },
        {
          id: 'ch8_d3',
          chapterId: 8,
          topic: 'Reciprocal Product',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Evaluate: (sin 30° + cos 60°) - (sin 60° - cos 30°).',
          correctAnswer: '1',
          marks: 2,
          hints: ['sin 30° = 1/2, cos 60° = 1/2, sin 60° = √3/2, cos 30° = √3/2.'],
          solutionSteps: [
            '(1/2 + 1/2) - (√3/2 - √3/2) = 1 - 0 = 1.'
          ],
          commonTrap: 'Sign error inside the second bracket.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch8_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch8_ct1',
          chapterId: 8,
          topic: 'Finding Ratio from Equation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'If 4 tan θ = 3, evaluate: (4 sin θ - cos θ) / (4 sin θ + cos θ).',
          correctAnswer: '1/2',
          marks: 3,
          hints: ['Divide numerator and denominator by cos θ to convert into tan θ.'],
          solutionSteps: [
            'Divide numerator and denominator by cos θ:',
            '= [4 (sin θ / cos θ) - 1] / [4 (sin θ / cos θ) + 1]',
            '= (4 tan θ - 1) / (4 tan θ + 1)',
            'Given 4 tan θ = 3:',
            '= (3 - 1) / (3 + 1) = 2 / 4 = 1/2.'
          ],
          commonTrap: 'Constructing a right triangle with P=3, B=4, H=5 which works but takes 3x longer!',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2020 Standard',
          conceptId: 'ch8_c1'
        },
        {
          id: 'ch8_ct2',
          chapterId: 8,
          topic: 'Identity Proof',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Prove that: (1 + cot A - cosec A)(1 + tan A + sec A) = 2.',
          correctAnswer: 'Hence Proved: LHS = 2',
          marks: 3,
          hints: ['Convert to sin A and cos A. Combine fractions, use (a+b)(a-b) = a^2 - b^2.'],
          solutionSteps: [
            'LHS = (1 + cos/sin - 1/sin)(1 + sin/cos + 1/cos)',
            '= [(sin + cos - 1) / sin] * [(cos + sin + 1) / cos]',
            '= [((sin + cos) - 1)((sin + cos) + 1)] / (sin cos)',
            'Using (a - 1)(a + 1) = a^2 - 1 with a = sin + cos:',
            '= [(sin + cos)^2 - 1] / (sin cos)',
            '= [sin^2 + cos^2 + 2 sin cos - 1] / (sin cos)',
            '= [1 + 2 sin cos - 1] / (sin cos)',
            '= 2 sin cos / (sin cos) = 2 = RHS. Hence Proved!'
          ],
          commonTrap: 'Multiplying all 9 terms directly without recognizing the (a-1)(a+1) pattern.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 8 Ex 8.3 Q4(ii)',
          conceptId: 'ch8_c2'
        },
        {
          id: 'ch8_ct3',
          chapterId: 8,
          topic: 'Challenge Algebraic Identity',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'If cosec θ - sin θ = l and sec θ - cos θ = m, prove that: l^2 m^2 (l^2 + m^2 + 3) = 1.',
          correctAnswer: 'Hence Proved: l^2 m^2 (l^2 + m^2 + 3) = 1',
          marks: 4,
          hints: ['l = 1/sin - sin = cos^2/sin. m = 1/cos - cos = sin^2/cos. Substitute into the expression.'],
          solutionSteps: [
            'l = (1 - sin^2 θ) / sin θ = cos^2 θ / sin θ',
            'm = (1 - cos^2 θ) / cos θ = sin^2 θ / cos θ',
            'l * m = (cos^2 θ / sin θ) * (sin^2 θ / cos θ) = sin θ cos θ',
            'l^2 m^2 = sin^2 θ cos^2 θ',
            'l^2 + m^2 = cos^4 θ / sin^2 θ + sin^4 θ / cos^2 θ = (cos^6 θ + sin^6 θ) / (sin^2 θ cos^2 θ)',
            'Note that sin^6 θ + cos^6 θ = (sin^2 θ + cos^2 θ)^3 - 3 sin^2 θ cos^2 θ (sin^2 θ + cos^2 θ) = 1 - 3 sin^2 θ cos^2 θ',
            'So l^2 + m^2 + 3 = (1 - 3 sin^2 θ cos^2 θ)/(sin^2 θ cos^2 θ) + 3 = 1 / (sin^2 θ cos^2 θ)',
            'Therefore: l^2 m^2 (l^2 + m^2 + 3) = (sin^2 θ cos^2 θ) * [1 / (sin^2 θ cos^2 θ)] = 1. Hence Proved!'
          ],
          commonTrap: 'Expanding into massive powers without using identity a^3 + b^3 = (a+b)^3 - 3ab(a+b).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Board HOTS Challenge',
          conceptId: 'ch8_c2'
        }
      ]
    }
  ]
};
