import { ChapterData } from './types';

export const CH11_DATA: ChapterData = {
  chapterNumber: 11,
  chapterName: 'Areas Related to Circles',
  weightageEstimate: '4–5 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Areas Related to Circles covers the geometry of circular regions, sectors, aur segments. Yahan hum circle ke tukdon ko samajhte hain: Sector (radii se kata pizza slice) aur Segment (chord se kata bread crust). Iske sath clock hands (har minute 6° sweep), car wipers, brooches, aur grazing fields ke guaranteed 4–5 marks ke board problems solve karte hain.',
    prerequisites: [
      'Circumference = 2πr and Area = πr²',
      'Fractional proportions of 360°',
      'Area of triangles (½ × base × height, equilateral triangle area)',
      'Basic angle properties of a clock (360° in 60 minutes = 6°/minute)'
    ],
    coreIdeas: [
      'Sector vs Segment: A Sector is bounded by two radii and an arc (like a pizza slice). A Segment is bounded by a chord and an arc (like the pizza crust).',
      'Arc Length: l = (θ / 360°) × 2πr = (θ / 180°) × πr.',
      'Area of Sector: A = (θ / 360°) × πr². Also equals the triangle-like shortcut: A = ½ × l × r.',
      'Perimeter of Sector: Do NOT confuse with arc length! Perimeter = Arc length + 2 radii = l + 2r.',
      'Area of Minor Segment: Area of Sector - Area of Triangle OAB.',
      'Universal Triangle Area Formula: Area of Triangle OAB = ½ × r² sin θ. Works for all CBSE angles: θ = 60° ((√3/4)r²), θ = 90° (½r²), and θ = 120° ((√3/4)r²).',
      'Clock Hand Rule: Minute hand moves 360° in 60 minutes, so it sweeps exactly 6° per minute. In 5 mins = 30°; in 15 mins = 90°; in 20 mins = 120°.'
    ],
    keyRelationships: [
      'Area of Major Sector = πr² - Area of Minor Sector = ((360° - θ) / 360°) × πr².',
      'Area of Major Segment = πr² - Area of Minor Segment.',
      'For a quadrant: θ = 90°, so Area = (1/4) ×  πr² and Arc = (1/4) ×  2πr.'
    ],
    frequentMisunderstandings: [
      'Forgetting the + 2r when asked for the PERIMETER of a sector (writing only arc length l).',
      'Trying to calculate major segment directly rather than subtracting minor segment from total circle area πr².',
      'Forgetting that minute hand sweeps 6° per minute (and hour hand sweeps 0.5° per minute).'
    ],
    examImportanceEvidence: 'Guaranteed 4–5 marks! Typically features: 1 MCQ (1 Mark on sector formula or perimeter) + 1 Short Answer (3 Marks on clock hand area or segment calculation).'
  },
  concepts: [
    {
      id: 'ch11_c1',
      title: 'Arc Length & Area of a Sector',
      topic: 'Sectors & Fractional Areas',
      simpleExplanation: 'Bhai, sector poore 360° circle ka ek fractional hissa (θ/360°) hota hai. Arc length ke liye circumference 2πr ko (θ/360°) se multiply karo, aur area ke liye πr² ko (θ/360°) se!',
      exactMathIdea: 'For a circle of radius r and central angle θ: Arc length l = (θ / 360°) × 2πr. Area of sector = (θ / 360°) × πr² = ½ × l × r. Perimeter of sector = l + 2r.',
      formulaOrTheorem: 'l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r, \\quad A = \\frac{\\theta}{360^\\circ} \\times \\pi r² = \\frac{1}{2} l r',
      whenToUse: 'When finding area swept by clock hands, windshield wipers, lighthouse light beams, or circular pizza slices.',
      recognitionClues: [
        'Find the area of a sector of a circle with radius',
        'The length of the minute hand of a clock is',
        'A car has two wipers which do not overlap'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Minute Hand Swept Area',
          question: 'The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.',
          given: 'Radius r = 14 cm, time = 5 minutes.',
          toFind: 'Area swept by minute hand.',
          methodSelectionReason: 'Minute hand travels 360° in 60 min, so in 5 min it sweeps θ = (360/60) × 5 = 30°. Then calculate sector area.',
          stepByStepSolution: [
            'Angle swept by minute hand in 1 minute = 360° / 60 = 6°.',
            'Angle swept in 5 minutes θ = 5 × 6° = 30°.',
            'Radius r = 14 cm.',
            'Area swept = Area of sector = (θ / 360°) × πr²',
            '= (30° / 360°) × (22/7) ×  14 × 14',
            '= (1/12) × 22 × 2 × 14',
            '= (1/12) × 616 = 154 / 3 cm² (approx 51.33 cm²).'
          ],
          finalAnswer: 'Area swept = 154/3 cm²',
          verificationCheck: '30° is 1/12 of a circle. Full area = (22/7) × 14 × 14 = 616. 616 / 12 = 154/3. Exact match!',
          commonTrap: 'Using θ = 5° directly instead of multiplying 5 minutes by 6°/min.'
        }
      ],
      commonMisconceptions: ['Thinking sector perimeter is just the curved arc.'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 90% of past CBSE board papers.',
      sourceTrace: 'NCERT Ch 11 Exercise 11.1 Q3'
    },
    {
      id: 'ch11_c2',
      title: 'Area of a Segment (Minor & Major)',
      topic: 'Segments & Triangle Subtraction',
      simpleExplanation: 'Segment (bread crust) nikalne ke liye poore pizza slice (sector) ke area mein se beech wale triangle ka area subtract kar do: Segment = Sector - Triangle!',
      exactMathIdea: 'Area of Minor Segment = Area of Sector OAB - Area of Triangle OAB. Area of Triangle OAB = ½ × r² sin θ. Area of Major Segment = Total Circle Area (πr²) - Area of Minor Segment.',
      formulaOrTheorem: '\\text{Area of Minor Segment} = \\frac{\\theta}{360^\\circ}\\pi r² - \\frac{1}{2}r²\\sin\\theta',
      whenToUse: 'When a chord subtends an angle of 60°, 90°, or 120° at the center and the area of the bounded segment is required.',
      recognitionClues: [
        'A chord of a circle of radius 15 cm subtends an angle of 60° at the center',
        'Find the areas of the corresponding minor and major segments',
        'A chord subtends a right angle at the center'
      ],
      workedExamples: [
        {
          level: 'standard',
          title: 'Segment Area with 90° Central Angle',
          question: 'A chord of a circle of radius 10 cm subtends a right angle at the center. Find the area of the corresponding minor segment. (Use π = 3.14)',
          given: 'Radius r = 10 cm, central angle θ = 90°.',
          toFind: 'Area of minor segment.',
          methodSelectionReason: 'Area of minor segment = Area of quadrant - Area of right triangle OAB.',
          stepByStepSolution: [
            'Area of sector OAB = (90° / 360°) × πr² = (1/4) × 3.14 × 10² = (1/4) × 314 = 78.5 cm².',
            'In right-angled Triangle OAB (∠AOB = 90°):',
            'Area of Triangle OAB = ½ × base × height = ½ × r × r = ½ × 10 × 10 = 50 cm².',
            'Area of minor segment = Area of sector - Area of Triangle OAB',
            '= 78.5 - 50 = 28.5 cm².'
          ],
          finalAnswer: 'Area of minor segment = 28.5 cm²',
          verificationCheck: 'Sector (78.5) > Triangle (50) ⟹ Segment (28.5) > 0. Correct.',
          commonTrap: 'Using π = 22/7 when question explicitly specifies π = 3.14.'
        }
      ],
      commonMisconceptions: ['Forgetting that major segment is Circle Area minus Minor Segment.'],
      priority: 'Must Master',
      cbseFrequency: 'Standard 3-mark board question.',
      sourceTrace: 'NCERT Ch 11 Exercise 11.1 Q4'
    }
  ],
  formulas: [
    {
      id: 'ch11_f1',
      name: 'Sector Arc and Area Formulas',
      formula: 'l = \\frac{\\theta}{360^\\circ}(2\\pi r), \\quad A = \\frac{\\theta}{360^\\circ}(\\pi r²) = \\frac{1}{2}lr',
      symbolMeanings: [
        { symbol: 'r', meaning: 'Radius of circle' },
        { symbol: 'θ', meaning: 'Central angle subtended by the sector in degrees' },
        { symbol: 'l', meaning: 'Arc length of sector' },
        { symbol: 'A', meaning: 'Area of sector' }
      ],
      whenToUse: 'Sector arc and area calculations.',
      conditions: ['Angle θ in degrees, 0° < θ ≤ 360°'],
      commonSubstitutions: ['Quadrant: θ = 90° ⟹ A = (1/4)πr²; Semicircle: θ = 180° ⟹ A = (1/2)πr²'],
      miniExample: {
        question: 'Find arc length of sector of radius 6 cm with angle 60°.',
        substitution: 'l = (60/360) ×  2 × (22/7) ×  6 = (1/6) ×  12 × (22/7) = 44/7 cm',
        result: '44/7 cm (6.28 cm)'
      },
      commonMistakes: ['Writing sector perimeter as l instead of l + 2r.'],
      memoryTrick: 'Fraction times whole circle: (θ/360) is the magic multiplier!',
      sourceTrace: 'NCERT Section 11.2'
    }
  ],
  methodGuides: [
    {
      id: 'ch11_m1',
      questionPattern: 'Area of Minor Segment with 60° or 120° Angle',
      recognitionClues: ['A chord of a circle of radius r subtends an angle of 60° (or 120°) at the center'],
      requiredConcept: 'Area of segment = Area of sector - Area of triangle.',
      whatIsGiven: 'Radius r and angle θ = 60° or 120°.',
      whatMustBeFound: 'Area of minor segment (and major segment if asked).',
      chosenMethod: 'For θ = 60°, triangle is equilateral: Area = (√3/4) ×  r². For θ = 120°, Area of triangle is also (√3/4) ×  r².',
      executionSteps: [
        'Step 1: Compute Area of sector = (θ / 360°) × πr².',
        'Step 2: For θ = 60°, Area of Triangle = (√3/4) ×  r².',
        'Step 3: Area of Minor Segment = Area of sector - Area of Triangle.',
        'Step 4: If Major Segment is asked: Area of Major Segment = πr² - Area of Minor Segment.',
        'Step 5: Substitute numerical values of π (3.14 or 22/7) and √3 (1.732) if given.'
      ],
      verificationMethod: 'Minor segment + Major segment must equal exactly πr².',
      commonTrap: 'Using ½ × base × height without finding height in 60°/120° triangles instead of using (√3/4)r².',
      exemplarQuestion: 'A chord of a circle of radius 15 cm subtends an angle of 60° at the center. Find the area of the minor segment. (Use π = 3.14, √3 = 1.73)',
      exemplarAnswer: 'Sector Area = (60/360) × 3.14 × 15² = (1/6) × 706.5 = 117.75 cm². Triangle Area = (√3/4) × 15² = (1.73/4) × 225 = 97.31 cm². Minor Segment Area = 117.75 - 97.31 = 20.44 cm².'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch11_q1',
      chapterId: 11,
      topic: 'Quadrant Area',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'Find the area of a quadrant of a circle whose circumference is 22 cm.',
      options: ['77/8 cm²', '77/4 cm²', '38.5 cm²', '77 cm²'],
      correctAnswer: '77/8 cm²',
      marks: 1,
      hints: ['Circumference 2πr = 22 ⟹ r = 7/2 cm. Quadrant area = (1/4) ×  πr².'],
      solutionSteps: [
        '2 × (22/7) ×  r = 22 ⟹ r = 7 / 2 cm.',
        'Area of quadrant = (1/4) ×  πr² = (1/4) ×  (22/7) ×  (7/2) × (7/2) = 77 / 8 cm².'
      ],
      commonTrap: 'Confusing circumference with radius.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q2',
      conceptId: 'ch11_c1'
    },
    {
      id: 'ch11_q2',
      chapterId: 11,
      topic: 'Car Wipers Area',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm sweeping through an angle of 115°. Find the total area cleaned at each sweep of the blades.',
      correctAnswer: '158125/126 cm²',
      marks: 2,
      hints: ['Total area = 2 × Area of one sector.'],
      solutionSteps: [
        'Total area = 2 × [(115° / 360°) × (22/7) ×  25 × 25]',
        '= 2 × (23 / 72) × (22/7) ×  625 = (23 × 11 × 625) / (36 × 7) = 158125 / 252 × 2 = 158125 / 126 cm² (approx 1254.96 cm²).'
      ],
      commonTrap: 'Calculating area for only 1 wiper instead of both wipers.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q11',
      conceptId: 'ch11_c1'
    },
    {
      id: 'ch11_q3',
      chapterId: 11,
      topic: 'Horse Grazing Field',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A horse is tied to a peg at one corner of a square grass field of side 15 m by means of a 5 m long rope. Find the area of that part of the field in which the horse can graze. (Use π = 3.14)',
      correctAnswer: '19.625 m²',
      marks: 3,
      hints: ['Corner of square has angle 90°. Grazing area is a quadrant of radius 5 m.'],
      solutionSteps: [
        'At the corner of a square, angle θ = 90°.',
        'Rope length is the radius: r = 5 m.',
        'Grazing area = (90° / 360°) × πr² = (1/4) × 3.14 × 5²',
        '= (1/4) × 3.14 × 25 = 78.5 / 4 = 19.625 m².'
      ],
      commonTrap: 'Using side of square (15 m) as radius instead of rope length (5 m).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q8(i)',
      conceptId: 'ch11_c1'
    },
    {
      id: 'ch11_q4',
      chapterId: 11,
      topic: 'Segment with 120° Angle',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'A chord of a circle of radius 12 cm subtends an angle of 120° at the center. Find the area of the corresponding segment of the circle. (Use π = 3.14, √3 = 1.73)',
      correctAnswer: '88.44 cm²',
      marks: 3,
      hints: ['Sector Area = (120/360) × π × 12². Triangle Area = (√3/4) × 12².'],
      solutionSteps: [
        'Area of sector = (120° / 360°) × 3.14 × 12 × 12 = (1/3) × 3.14 × 144 = 48 × 3.14 = 150.72 cm².',
        'Area of Triangle with 120° = (√3/4) ×  r² = (1.73 / 4) × 144 = 1.73 × 36 = 62.28 cm².',
        'Area of segment = 150.72 - 62.28 = 88.44 cm².'
      ],
      commonTrap: 'Calculating area of triangle with 120° as ½ × 12 × 12 = 72 cm² (that is for 90°, not 120°!).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q7',
      conceptId: 'ch11_c2'
    },
    {
      id: 'ch11_q5',
      chapterId: 11,
      topic: 'Round Table Cover 6-Design Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'A round table cover has six equal designs. If the radius of the cover is 28 cm, find the cost of making the designs at the rate of ₹0.35 per cm². (Use √3 = 1.7)',
      correctAnswer: '₹162.68',
      marks: 5,
      hints: ['6 equal designs ⟹ central angle of each sector θ = 360° / 6 = 60°. Each design is a minor segment! Total design area = 6 × (Area of one minor segment).'],
      solutionSteps: [
        'Central angle for each of the 6 designs: θ = 360° / 6 = 60°.',
        'Radius r = 28 cm.',
        'Area of 1 sector = (60° / 360°) × (22/7) ×  28 × 28 = (1/6) ×  22 × 4 × 28 = 2464 / 6 = 1232 / 3 cm².',
        'Area of 1 equilateral triangle = (√3/4) ×  r² = (1.7 / 4) × 28 × 28 = 1.7 × 196 = 333.2 cm².',
        'Area of 1 design = 1232/3 - 333.2 = 410.67 - 333.2 = 77.47 cm².',
        'Total area of 6 designs = 6 × [1232/3 - 333.2] = 2 × 1232 - 6 × 333.2 = 2464 - 1999.2 = 464.8 cm².',
        'Cost of making designs = 464.8 × 0.35 = ₹162.68.'
      ],
      commonTrap: 'Multiplying by 6 before simplifying, causing rounding discrepancies.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q13',
      conceptId: 'ch11_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch11_pyq1',
      year: 'CBSE 2024 / 2020',
      marks: 3,
      topic: 'Clock Hand Sector Area',
      conceptTested: 'Sector area with time-to-angle conversion',
      question: 'The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand between 7:00 AM and 7:15 AM.',
      markingSchemeBreakdown: [
        { step: 'Calculating angle swept in 15 minutes: 15 × 6° = 90°', marks: 1 },
        { step: 'Formula for area of sector (θ/360) × πr²', marks: 1 },
        { step: 'Substitution and final answer 154 cm²', marks: 1 }
      ],
      fullSolution: 'Time elapsed = 15 minutes.\nAngle swept in 15 minutes θ = 15 × 6° = 90°.\nRadius r = 14 cm.\nArea swept = (90° / 360°) × (22/7) ×  14 × 14\n= (1/4) × 22 × 2 × 14\n= 154 cm².\n\nHence, the area swept by the minute hand is 154 cm².',
      commonMistake: 'Forgetting that 15 minutes corresponds to a 90° quadrant.',
      frequencyTrend: 'High frequency 3-mark CBSE question.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch11_err1',
      title: 'Confusing Arc Length with Sector Perimeter',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'When asked for perimeter of sector, student writes P = (θ/360°) × 2πr.',
      whyItIsWrong: 'The perimeter of any region is the complete outer closed boundary. For a sector, the boundary consists of the curved arc PLUS the two straight radii.',
      correctWorking: 'Perimeter of sector = (θ/360°) × 2πr + 2r.',
      howToAvoid: 'Always draw the sector and trace your finger around all borders: 1 curved arc + 2 straight radii.',
      retryQuestion: {
        question: 'Find the perimeter of a semicircle of radius 7 cm.',
        correctAnswer: '36 cm',
        explanation: 'P = πr + 2r = (22/7) × 7 + 2(7) = 22 + 14 = 36 cm.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Arc length: l = (θ/360°) × 2πr.',
      'Area of sector: A = (θ/360°) × πr² = ½ × l × r.',
      'Perimeter of sector = l + 2r.',
      'Area of segment = Area of sector - Area of triangle.',
      'Area of triangle: θ = 60° ⟹ (√3/4)r²; θ = 90° ⟹ (1/2)r²; θ = 120° ⟹ (√3/4)r².',
      'Minute hand sweeps 6° per minute.'
    ],
    speedTips: [
      'Quadrant: Area is exactly 1/4 of circle.',
      'Semicircle: Area is 1/2 of circle, perimeter is πr + 2r.',
      'For fast calculations: if r = 7, circle area is 154 and circumference is 44.'
    ],
    lastDayChecklist: [
      'Did you add 2r when asked for sector perimeter?',
      'Did you use the specified value of π (3.14 vs 22/7)?',
      'Did you remember that major segment = circle area - minor segment?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch11_d1',
          chapterId: 11,
          topic: 'Sector Formula',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'If the perimeter of a circle is equal to that of a square, then the ratio of their areas is:',
          correctAnswer: '14 : 11',
          marks: 1,
          hints: ['2πr = 4a ⟹ a = πr/2. Area ratio = πr² / a².'],
          solutionSteps: [
            '2πr = 4a ⟹ a = πr / 2.',
            'Area of circle / Area of square = (πr²) / a² = (πr²) / (π² r² / 4) = 4 / π = 4 / (22/7) = 28 / 22 = 14 / 11.'
          ],
          commonTrap: 'Inverting ratio to 11 : 14.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2023 MCQ',
          conceptId: 'ch11_c1'
        },
        {
          id: 'ch11_d2',
          chapterId: 11,
          topic: 'Arc Length Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the length of an arc of a circle of radius 21 cm which subtends an angle of 60° at the center.',
          correctAnswer: '22 cm',
          marks: 2,
          hints: ['l = (60/360) ×  2 × (22/7) ×  21.'],
          solutionSteps: [
            'l = (1/6) ×  2 × (22/7) ×  21 = (1/6) ×  2 × 22 × 3 = (1/6) ×  132 = 22 cm.'
          ],
          commonTrap: 'Forgetting the factor 2 in 2πr.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q5',
          conceptId: 'ch11_c1'
        },
        {
          id: 'ch11_d3',
          chapterId: 11,
          topic: 'Quadrant Perimeter',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the perimeter of a quadrant of a circle of radius 14 cm.',
          correctAnswer: '50 cm',
          marks: 2,
          hints: ['P = (1/4) × 2πr + 2r.'],
          solutionSteps: [
            'Arc = (1/4) ×  2 × (22/7) ×  14 = 22 cm.',
            'Perimeter = 22 + 2(14) = 22 + 28 = 50 cm.'
          ],
          commonTrap: 'Writing 22 cm without adding the two radii.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Exemplar',
          conceptId: 'ch11_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch11_ct1',
          chapterId: 11,
          topic: 'Sector Area Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the area of a sector of a circle of radius 6 cm if angle of the sector is 60°.',
          correctAnswer: '132/7 cm²',
          marks: 2,
          hints: ['A = (60/360) ×  (22/7) ×  6 × 6.'],
          solutionSteps: [
            'A = (1/6) ×  (22/7) ×  36 = 6 × (22/7) = 132/7 cm² (approx 18.86 cm²).'
          ],
          commonTrap: 'Arithmetic calculation error.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q1',
          conceptId: 'ch11_c1'
        },
        {
          id: 'ch11_ct2',
          chapterId: 11,
          topic: 'Major Segment Calculation',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'A chord of a circle of radius 10 cm subtends a right angle at the center. Find the area of the corresponding major segment. (Use π = 3.14)',
          correctAnswer: '285.5 cm²',
          marks: 4,
          hints: ['Major segment area = Total circle area - Minor segment area.'],
          solutionSteps: [
            'Total circle area = πr² = 3.14 × 100 = 314 cm².',
            'Minor sector area = (90/360) ×  314 = 78.5 cm².',
            'Triangle area = ½ × 10 × 10 = 50 cm².',
            'Minor segment area = 78.5 - 50 = 28.5 cm².',
            'Major segment area = 314 - 28.5 = 285.5 cm².'
          ],
          commonTrap: 'Subtracting triangle area from total circle area instead of subtracting minor segment.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q4(ii)',
          conceptId: 'ch11_c2'
        },
        {
          id: 'ch11_ct3',
          chapterId: 11,
          topic: 'Brooch Silver Wire Problem',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'A circular brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find the total length of silver wire required.',
          correctAnswer: '285 mm',
          marks: 4,
          hints: ['Total wire = Circumference + 5 × Diameter.'],
          solutionSteps: [
            'Diameter d = 35 mm, Radius r = 35/2 mm.',
            'Circumference = πd = (22/7) ×  35 = 22 × 5 = 110 mm.',
            'Length of 5 diameters = 5 × 35 = 175 mm.',
            'Total wire required = Circumference + 5 diameters = 110 + 175 = 285 mm.'
          ],
          commonTrap: 'Adding 10 diameters instead of 5 diameters (5 diameters create 10 sectors!).',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 11 Ex 11.1 Q9',
          conceptId: 'ch11_c1'
        }
      ]
    }
  ]
};
