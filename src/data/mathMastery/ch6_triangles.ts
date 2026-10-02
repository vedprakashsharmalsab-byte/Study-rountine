import { ChapterData } from './types';

export const CH6_DATA: ChapterData = {
  chapterNumber: 6,
  chapterName: 'Triangles',
  weightageEstimate: '8–10 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Triangles in Class 10 focuses on Similarity of Figures—shapes that have the exact same shape but different sizes. The chapter revolves around Thales Theorem (Basic Proportionality Theorem - BPT), its converse, and the three golden similarity criteria (AA/AAA, SAS, SSS) applied to solve real-world geometry and algebraic ratio problems.',
    prerequisites: [
      'Concept of Congruence (Class 9) vs Similarity',
      'Ratio and proportion fundamentals',
      'Parallel lines cut by transversals (alternate interior and corresponding angles)',
      'Pythagoras theorem fundamentals'
    ],
    coreIdeas: [
      'Two polygons with same number of sides are similar if: (i) corresponding angles are equal, and (ii) corresponding sides are in the same ratio (proportional).',
      'Basic Proportionality Theorem (BPT / Thales Theorem): If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.',
      'Converse of BPT: If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.',
      'Similarity Criteria: AA (Angle-Angle), SAS (Side-Angle-Side), SSS (Side-Side-Side). If two angles of one triangle are equal to two angles of another, the triangles are similar (AA criterion is sufficient!).',
      'Order of vertices matters strictly in similarity notation: Triangle ABC ~ Triangle DEF means A corresponds to D, B to E, C to F. Writing ABC ~ EDF is mathematically wrong.'
    ],
    keyRelationships: [
      'In Triangle ABC with DE || BC: AD/DB = AE/EC (BPT). Also by addition: AD/AB = AE/AC = DE/BC (from Triangle ADE ~ Triangle ABC).',
      'Diagonals of a trapezium divide each other proportionally: AO/CO = BO/DO.',
      'Ratio of perimeters of two similar triangles equals the ratio of their corresponding sides: Perimeter(ABC)/Perimeter(DEF) = AB/DE = BC/EF = AC/DF.'
    ],
    frequentMisunderstandings: [
      'Writing AD/DB = DE/BC! Note that DE/BC comes from similarity of Triangle ADE and Triangle ABC, so DE/BC = AD/AB, NOT AD/DB!',
      'Swapping the order of vertices in similarity statements (e.g. writing Triangle ABC ~ Triangle FED instead of DEF).',
      'Forgetting to state "By AA Similarity Criterion" before equating side ratios in board exam proofs.'
    ],
    examImportanceEvidence: 'One of the highest-weightage geometry chapters in CBSE Class 10! Consistently features: 1 MCQ (1 Mark on side ratio), 1 Short Answer (2 or 3 Marks on BPT application), and 1 Long Answer / Proof (5 Marks: formal proof of Thales Theorem or application proof).'
  },
  concepts: [
    {
      id: 'ch6_c1',
      title: 'Basic Proportionality Theorem (BPT / Thales Theorem)',
      topic: 'Thales Theorem & Ratio Division',
      simpleExplanation: 'If you draw a horizontal fence parallel to the base inside a triangle, it slices both side walls into exact matching proportions!',
      exactMathIdea: 'If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. Given Triangle ABC with DE || BC, then AD/DB = AE/EC.',
      formulaOrTheorem: '\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}',
      whenToUse: 'Whenever a line parallel to one side of a triangle is given, or when testing whether two lines are parallel using given segments.',
      recognitionClues: [
        'DE is parallel to BC',
        'Find the length of EC given AD, DB, AE',
        'Prove that EF is parallel to QR'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Finding Unknown Segment using BPT',
          question: 'In Triangle ABC, DE || BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.',
          given: 'Triangle ABC with DE || BC, AD = 1.5 cm, DB = 3 cm, AE = 1 cm.',
          toFind: 'Length of EC.',
          methodSelectionReason: 'Since DE || BC, Thales Theorem (BPT) applies directly: AD/DB = AE/EC.',
          stepByStepSolution: [
            'In Triangle ABC, since DE || BC, by Basic Proportionality Theorem (BPT):',
            'AD / DB = AE / EC',
            'Substitute the given values: 1.5 / 3 = 1 / EC',
            'Simplify the left-hand fraction: 1 / 2 = 1 / EC',
            'Cross-multiply: EC = 2 cm.'
          ],
          finalAnswer: 'EC = 2 cm',
          verificationCheck: '1.5 / 3 = 0.5 and 1 / 2 = 0.5. The ratio is preserved.',
          commonTrap: 'Inverting the ratio or writing AD/AB = AE/EC.'
        },
        {
          level: 'standard',
          title: 'Solving for Unknown x in BPT',
          question: 'In Triangle ABC, DE || BC. If AD = x, DB = x - 2, AE = x + 2, and EC = x - 1, find the value of x.',
          given: 'DE || BC with segment lengths expressed algebraically.',
          toFind: 'The positive value of x.',
          methodSelectionReason: 'By BPT, AD/DB = AE/EC. Cross-multiplying yields a linear or quadratic equation.',
          stepByStepSolution: [
            'By BPT: AD / DB = AE / EC',
            'x / (x - 2) = (x + 2) / (x - 1)',
            'Cross-multiply: x(x - 1) = (x - 2)(x + 2)',
            'Expand both sides: x^2 - x = x^2 - 4',
            'Subtract x^2 from both sides: -x = -4 ⟹ x = 4.'
          ],
          finalAnswer: 'x = 4',
          verificationCheck: 'AD = 4, DB = 2 (ratio 4/2 = 2); AE = 6, EC = 3 (ratio 6/3 = 2). Correct!',
          commonTrap: 'Expanding (x - 2)(x + 2) incorrectly as x^2 - 4x + 4 instead of difference of squares x^2 - 4.'
        }
      ],
      commonMisconceptions: [
        'Assuming DE = 1/2 BC (that only holds if D and E are midpoints by Midpoint Theorem, not any random parallel line).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board papers either as Theorem Proof or 3-mark problem.',
      sourceTrace: 'NCERT Ch 6 Theorem 6.1 & Exercise 6.2'
    },
    {
      id: 'ch6_c2',
      title: 'Criteria for Similarity of Triangles (AA, SAS, SSS)',
      topic: 'Triangle Similarity Criteria',
      simpleExplanation: 'Two triangles are similar if they have the exact same shape (just zoomed in or zoomed out). If just 2 angles match, their entire shape matches automatically (AA criterion)!',
      exactMathIdea: 'Two triangles ABC and DEF are similar if: (i) AA: Two angles of one triangle are respectively equal to two angles of another triangle. (ii) SAS: One angle is equal and the sides including these angles are proportional. (iii) SSS: All three corresponding sides are in the same ratio.',
      formulaOrTheorem: '\\triangle ABC \\sim \\triangle DEF \\iff \\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} \\text{ and } \\angle A = \\angle D, \\; \\angle B = \\angle E, \\; \\angle C = \\angle F',
      whenToUse: 'When proving geometric properties, finding heights of poles/shadows, or finding side ratios in overlapping triangles.',
      recognitionClues: [
        'A vertical pole casts a shadow',
        'Prove that Triangle ABC is similar to Triangle PQR',
        'Diagonals of a trapezium intersect at O'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Vertical Pole and Tower Shadow Problem',
          question: 'A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same time a tower casts a shadow 28 m long. Find the height of the tower.',
          given: 'Pole height h1 = 6 m, pole shadow s1 = 4 m. Tower shadow s2 = 28 m. Sun angle of elevation is identical.',
          toFind: 'Tower height h2.',
          methodSelectionReason: 'At the same time, the angle of elevation of the sun is the same for both. Both pole and tower stand vertical (90 degrees). Hence triangles are similar by AA.',
          stepByStepSolution: [
            'Let Triangle ABC represent the pole and shadow: AB = 6 m (pole), BC = 4 m (shadow), angle B = 90 degrees.',
            'Let Triangle PQR represent the tower and shadow: PQ = h (tower), QR = 28 m (shadow), angle Q = 90 degrees.',
            'In Triangle ABC and Triangle PQR:',
            'angle B = angle Q = 90 degrees (both vertical to the ground)',
            'angle C = angle R (sun elevation angle at the same time)',
            'Therefore, Triangle ABC ~ Triangle PQR (by AA similarity criterion).',
            'Since corresponding sides of similar triangles are proportional:',
            'AB / PQ = BC / QR ⟹ 6 / h = 4 / 28',
            'Simplify: 6 / h = 1 / 7 ⟹ h = 6 * 7 = 42 m.'
          ],
          finalAnswer: 'Height of the tower = 42 m',
          verificationCheck: 'Ratio of height to shadow = 6/4 = 1.5. Tower: 42/28 = 1.5. Perfect match!',
          commonTrap: 'Forgetting to justify similarity with AA criterion (stating sun elevation angle is equal) loses 1 mark.'
        }
      ],
      commonMisconceptions: [
        'Believing that SAS similarity means any angle can be equal (the angle MUST be strictly included between the two proportional sides).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Standard 2 or 3-mark question in almost every board exam set.',
      sourceTrace: 'NCERT Ch 6 Exercise 6.3'
    }
  ],
  formulas: [
    {
      id: 'ch6_f1',
      name: 'Thales Theorem / BPT Ratio Formula',
      formula: '\\frac{AD}{DB} = \\frac{AE}{EC} \\iff \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}',
      symbolMeanings: [
        { symbol: 'AD, DB', meaning: 'Segments into which line DE divides side AB' },
        { symbol: 'AE, EC', meaning: 'Segments into which line DE divides side AC' },
        { symbol: 'DE, BC', meaning: 'Parallel segment and base of triangle' }
      ],
      whenToUse: 'When a line inside a triangle is parallel to one of the sides.',
      conditions: ['Line DE must be strictly parallel to side BC', 'D must lie on AB and E on AC'],
      commonSubstitutions: ['If DB = AB - AD, write AD / (AB - AD) = AE / (AC - AE)'],
      miniExample: {
        question: 'If AD/DB = 3/4 and AC = 14 cm, find AE.',
        substitution: 'AE / AC = AD / AB = 3 / (3 + 4) = 3/7 ⟹ AE = (3/7) * 14',
        result: 'AE = 6 cm'
      },
      commonMistakes: ['Equating DE/BC to AD/DB instead of AD/AB.'],
      memoryTrick: 'Small side to small side = Big side to big side!',
      sourceTrace: 'NCERT Theorem 6.1'
    },
    {
      id: 'ch6_f2',
      name: 'Trapezium Diagonals Proportionality',
      formula: '\\frac{AO}{CO} = \\frac{BO}{DO} \\quad \\text{for trapezium } ABCD \\text{ with } AB \\parallel CD',
      symbolMeanings: [
        { symbol: 'O', meaning: 'Point of intersection of diagonals AC and BD' },
        { symbol: 'AB, CD', meaning: 'Parallel bases of trapezium' }
      ],
      whenToUse: 'In any question involving diagonals of a trapezium intersecting at O.',
      conditions: ['AB must be parallel to CD'],
      commonSubstitutions: ['(3x - 1) / (5x - 3) = (2x + 1) / (6x - 5)'],
      miniExample: {
        question: 'In trapezium ABCD, AB || DC, diagonals intersect at O. If AO = 3, CO = x - 3, BO = 3x - 19, DO = x - 5, find x.',
        substitution: '3 / (x - 3) = (3x - 19) / (x - 5) ⟹ 3(x - 5) = (x - 3)(3x - 19)',
        result: 'x = 8 or x = 9 (verify segment lengths are positive)'
      },
      commonMistakes: ['Setting AO/BO = CO/DO instead of matching along the same diagonal.'],
      memoryTrick: 'Diagonal segments through intersection point O share the same ratio!',
      sourceTrace: 'NCERT Ch 6 Exercise 6.2 Question 9 & 10'
    }
  ],
  methodGuides: [
    {
      id: 'ch6_m1',
      questionPattern: 'Formal Proof of Basic Proportionality Theorem (Thales Theorem)',
      recognitionClues: ['State and prove Basic Proportionality Theorem', 'Prove that if a line is drawn parallel to one side...'],
      requiredConcept: 'Area of triangle ratio method with heights perpendicular to sides.',
      whatIsGiven: 'A triangle ABC in which a line parallel to side BC intersects other two sides AB and AC at D and E respectively.',
      whatMustBeFound: 'Proof that AD/DB = AE/EC.',
      chosenMethod: 'Area method: Join BE and CD, draw perpendiculars DM perpendicular to AC and EN perpendicular to AB.',
      executionSteps: [
        'Step 1: State "Given" and "To Prove: AD/DB = AE/EC".',
        'Step 2: "Construction": Join BE and CD. Draw DM perpendicular to AC and EN perpendicular to AB.',
        'Step 3: Area of Triangle ADE = (1/2) * AD * EN. Area of Triangle BDE = (1/2) * DB * EN.',
        'Step 4: Ratio: ar(ADE) / ar(BDE) = [(1/2) * AD * EN] / [(1/2) * DB * EN] = AD / DB ... (Equation 1).',
        'Step 5: Similarly, taking base AE and height DM: ar(ADE) = (1/2) * AE * DM, ar(DEC) = (1/2) * EC * DM.',
        'Step 6: Ratio: ar(ADE) / ar(DEC) = AE / EC ... (Equation 2).',
        'Step 7: Note that Triangle BDE and Triangle DEC are on the same base DE and between the same parallels DE and BC. Therefore, ar(BDE) = ar(DEC) ... (Equation 3).',
        'Step 8: From (1), (2), and (3), LHS are equal, hence AD/DB = AE/EC. Hence Proved!'
      ],
      verificationMethod: 'Check that both altitudes EN and DM are clearly labelled on the diagram.',
      commonTrap: 'Forgetting to write the reason why ar(BDE) = ar(DEC) (same base and between same parallels) loses 1 mark.',
      exemplarQuestion: 'State and prove Basic Proportionality Theorem.',
      exemplarAnswer: 'Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. (Proof follows Steps 1-8 above).'
    },
    {
      id: 'ch6_m2',
      questionPattern: 'Proving Two Triangles Similar using AA Criterion',
      recognitionClues: ['In figure, angle 1 = angle 2, prove that...', 'D is a point on side BC such that angle ADC = angle BAC'],
      requiredConcept: 'AA similarity criterion (two matching angles are sufficient).',
      whatIsGiven: 'Two triangles with common or vertically opposite angles, or alternate interior angles.',
      whatMustBeFound: 'Similarity proof and subsequent side ratio deduction (e.g. CA^2 = CB * CD).',
      chosenMethod: 'Identify 2 pairs of equal angles, write similarity statement in strict vertex order, deduce ratio.',
      executionSteps: [
        'Step 1: In the two triangles to be compared, identify the first pair of equal angles (often given or right angles).',
        'Step 2: Identify the second pair of equal angles (often a shared common angle or vertically opposite angles).',
        'Step 3: Write: "Therefore, Triangle [XYZ] ~ Triangle [PQR] (by AA similarity criterion)".',
        'Step 4: Form the side ratio: XY/PQ = YZ/QR = XZ/PR.',
        'Step 5: Cross-multiply the relevant pair to obtain the required identity (e.g. CA * CA = CB * CD ⟹ CA^2 = CB * CD).'
      ],
      verificationMethod: 'Ensure vertices in the numerator and denominator match corresponding angles.',
      commonTrap: 'Failing to mention the common angle clearly with full 3-letter notation (e.g. angle C = angle C or angle ACD = angle BCA).',
      exemplarQuestion: 'D is a point on the side BC of a triangle ABC such that angle ADC = angle BAC. Prove that CA^2 = CB * CD.',
      exemplarAnswer: 'In Triangle ADC and Triangle BAC: angle ADC = angle BAC (Given), angle ACD = angle BCA (Common angle C). By AA criterion, Triangle ADC ~ Triangle BAC. Therefore, CA / CB = CD / CA ⟹ CA^2 = CB * CD. Hence Proved.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch6_q1',
      chapterId: 6,
      topic: 'Basic Proportionality Theorem',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'In a triangle ABC, DE is parallel to BC with D on AB and E on AC. If AD = 3 cm, DB = 5 cm, and AE = 6 cm, find AC.',
      options: ['10 cm', '16 cm', '12 cm', '8 cm'],
      correctAnswer: '16 cm',
      marks: 1,
      hints: ['By BPT: AD/DB = AE/EC. Find EC first, then AC = AE + EC.'],
      solutionSteps: [
        'By BPT: AD / DB = AE / EC',
        '3 / 5 = 6 / EC ⟹ EC = (6 * 5) / 3 = 10 cm',
        'Total length AC = AE + EC = 6 + 10 = 16 cm.'
      ],
      commonTrap: 'Picking 10 cm directly without adding AE = 6 to get total AC!',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 6 Ex 6.2 Q1',
      conceptId: 'ch6_c1'
    },
    {
      id: 'ch6_q2',
      chapterId: 6,
      topic: 'Similarity Criteria',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'If in two triangles ABC and PQR, AB/QR = BC/PR = CA/PQ, then which of the following similarity statements is true?',
      options: [
        'Triangle PQR ~ Triangle CAB',
        'Triangle PQR ~ Triangle ABC',
        'Triangle CBA ~ Triangle PQR',
        'Triangle BCA ~ Triangle PQR'
      ],
      correctAnswer: 'Triangle PQR ~ Triangle CAB',
      marks: 1,
      hints: ['Check corresponding vertices: AB corresponds to QR, BC to PR, CA to PQ.'],
      solutionSteps: [
        'From AB/QR = BC/PR: Common letter in numerators is B, common in denominators is R. So B corresponds to R.',
        'From BC/PR = CA/PQ: Common letter in numerators is C, common in denominators is P. So C corresponds to P.',
        'From CA/PQ = AB/QR: Common letter in numerators is A, common in denominators is Q. So A corresponds to Q.',
        'Thus: P corresponds to C, Q corresponds to A, R corresponds to B.',
        'Hence, Triangle PQR ~ Triangle CAB.'
      ],
      commonTrap: 'Assuming Triangle ABC ~ Triangle PQR without checking corresponding vertex alignment.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Exemplar MCQ',
      conceptId: 'ch6_c2'
    },
    {
      id: 'ch6_q3',
      chapterId: 6,
      topic: 'Ladder / Pole Similarity Application',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground, find the length of her shadow after 4 seconds.',
      correctAnswer: '1.6 m',
      marks: 3,
      hints: [
        'Convert height to metres: 90 cm = 0.9 m.',
        'Distance walked in 4 s = 1.2 * 4 = 4.8 m.',
        'Use similarity of the girl-shadow triangle with the lamp-ground triangle.'
      ],
      solutionSteps: [
        'Let AB be the lamp-post = 3.6 m, CD be the girl = 0.9 m.',
        'Distance walked BD = speed * time = 1.2 m/s * 4 s = 4.8 m.',
        'Let length of shadow DE = x metres.',
        'In Triangle ABE and Triangle CDE:',
        'angle B = angle D = 90 degrees (both perpendicular to ground)',
        'angle E = angle E (common angle)',
        'Therefore, Triangle ABE ~ Triangle CDE (by AA criterion).',
        'Side ratio: AB / CD = BE / DE ⟹ 3.6 / 0.9 = (4.8 + x) / x',
        '4 / 1 = (4.8 + x) / x ⟹ 4x = 4.8 + x ⟹ 3x = 4.8 ⟹ x = 1.6 m.'
      ],
      commonTrap: 'Writing BE = 4.8 m instead of (4.8 + x) m! BE is the entire distance from lamp-post to tip of shadow.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 6 Example 8',
      conceptId: 'ch6_c2'
    },
    {
      id: 'ch6_q4',
      chapterId: 6,
      topic: 'Trapezium Diagonals & BPT',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'Diagonals of a quadrilateral ABCD intersect each other at the point O such that AO/BO = CO/DO. Show that ABCD is a trapezium.',
      correctAnswer: 'Hence Proved: AB || CD, so ABCD is a trapezium.',
      marks: 3,
      hints: ['Draw a line OE parallel to BA through O meeting AD at E. Apply BPT and given condition.'],
      solutionSteps: [
        'Given: AO / BO = CO / DO ⟹ AO / CO = BO / DO ... (1).',
        'To prove: ABCD is a trapezium (i.e. AB || CD).',
        'Construction: Through O, draw OE || BA intersecting AD at E.',
        'In Triangle ABD, since OE || BA, by BPT: DE / EA = DO / BO ⟹ EA / DE = BO / DO ... (2).',
        'From (1) and (2): EA / DE = AO / CO.',
        'In Triangle ADC, since EA / DE = AO / CO, by the Converse of BPT: OE || CD.',
        'Since OE || BA and OE || CD, it follows that AB || CD.',
        'A quadrilateral with one pair of opposite sides parallel is a trapezium. Hence ABCD is a trapezium.'
      ],
      commonTrap: 'Assuming OE is parallel to CD in construction—you can only draw OE parallel to ONE side (AB), then prove it is parallel to CD.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 6 Ex 6.2 Q10',
      conceptId: 'ch6_c1'
    },
    {
      id: 'ch6_q5',
      chapterId: 6,
      topic: 'Challenge Similarity Proof',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'In Triangle ABC, AD is an altitude and AE is the diameter of circumcircle of Triangle ABC. Prove that AB * AC = AE * AD.',
      correctAnswer: 'Hence Proved: AB * AC = AE * AD',
      marks: 5,
      hints: ['Join EC. Use the theorem that angle in a semi-circle is 90 degrees (angle ACE = 90 degrees). Use AA similarity between Triangle ABD and Triangle AEC.'],
      solutionSteps: [
        'Join EC.',
        'Since AE is a diameter, angle ACE = 90 degrees (angle in a semicircle).',
        'Also, AD is an altitude, so angle ADB = 90 degrees.',
        'In Triangle ABD and Triangle AEC:',
        'angle ADB = angle ACE = 90 degrees',
        'angle ABD = angle AEC (angles subtended by the same arc AC of circumcircle are equal)',
        'By AA similarity criterion: Triangle ABD ~ Triangle AEC.',
        'Corresponding sides are proportional: AB / AE = AD / AC.',
        'Cross-multiply: AB * AC = AE * AD. Hence Proved!'
      ],
      commonTrap: 'Forgetting that angles subtended by the same arc in the same segment of a circle are equal.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Board Standard Exemplar Challenge',
      conceptId: 'ch6_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch6_pyq1',
      year: 'CBSE 2024 / 2022 / 2019',
      marks: 5,
      topic: 'Thales Theorem Formal Proof',
      conceptTested: 'Basic Proportionality Theorem (Statement and Proof)',
      question: 'State and prove Basic Proportionality Theorem (Thales Theorem).',
      markingSchemeBreakdown: [
        { step: 'Correct Statement of BPT', marks: 1 },
        { step: 'Correct diagram with labelled vertices and construction', marks: 1 },
        { step: 'Ratios of areas of triangles with altitude EN', marks: 1.5 },
        { step: 'Equality of areas on same base and final conclusion AD/DB = AE/EC', marks: 1.5 }
      ],
      fullSolution: 'Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\n\nGiven: In Triangle ABC, DE || BC intersecting AB at D and AC at E.\nTo Prove: AD/DB = AE/EC.\nConstruction: Join BE and CD. Draw DM perpendicular to AC and EN perpendicular to AB.\n\nProof:\nar(ADE) = 1/2 * AD * EN\nar(BDE) = 1/2 * DB * EN\nar(ADE) / ar(BDE) = AD / DB ... (1)\n\nar(ADE) = 1/2 * AE * DM\nar(DEC) = 1/2 * EC * DM\nar(ADE) / ar(DEC) = AE / EC ... (2)\n\nTriangle BDE and Triangle DEC lie on the same base DE and between the same parallel lines DE and BC.\nTherefore, ar(BDE) = ar(DEC) ... (3)\n\nFrom (1), (2), and (3): AD / DB = AE / EC. Hence Proved.',
      commonMistake: 'Writing formula without declaring altitudes EN and DM or omitting reason (3) for equality of triangle areas.',
      frequencyTrend: 'Repeated 6 times in past 10 years (Standard & Basic sets).',
      source: 'CBSE Official Board Examination'
    },
    {
      id: 'ch6_pyq2',
      year: 'CBSE 2023 / 2020',
      marks: 3,
      topic: 'Trapezium Proportionality',
      conceptTested: 'BPT Application on Trapezium',
      question: 'ABCD is a trapezium with AB || DC. E and F are points on non-parallel sides AD and BC respectively such that EF || AB. Show that AE/ED = BF/FC.',
      markingSchemeBreakdown: [
        { step: 'Joining diagonal AC intersecting EF at G', marks: 0.5 },
        { step: 'Applying BPT in Triangle ADC', marks: 1.0 },
        { step: 'Applying BPT in Triangle CAB', marks: 1.0 },
        { step: 'Equating both ratios to obtain AE/ED = BF/FC', marks: 0.5 }
      ],
      fullSolution: 'Join AC to intersect EF at point G.\nIn Triangle ADC, EG || DC (since EF || AB and AB || DC ⟹ EF || DC).\nBy BPT in Triangle ADC:\nAE / ED = AG / GC ... (1)\n\nIn Triangle CAB, GF || AB.\nBy BPT in Triangle CAB:\nAG / GC = BF / FC ... (2)\n\nFrom (1) and (2):\nAE / ED = BF / FC. Hence Proved.',
      commonMistake: 'Trying to apply BPT directly to the trapezium without drawing the diagonal AC.',
      frequencyTrend: 'Very high frequency 3-mark board favorite.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch6_err1',
      title: 'Confusing BPT side ratio with Similarity base ratio',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Given DE || BC, student writes DE / BC = AD / DB.',
      whyItIsWrong: 'BPT gives ratio of divided parts: AD/DB = AE/EC. The parallel segment ratio DE/BC comes from similarity of Triangle ADE and Triangle ABC, so DE/BC = AD/AB = AE/AC.',
      correctWorking: 'DE / BC = AD / AB = AD / (AD + DB).',
      howToAvoid: 'Remember: parallel base ratio uses the FULL side (AD/AB), while the two cut segments use parts (AD/DB).',
      retryQuestion: {
        question: 'In Triangle ABC, DE || BC. If AD = 2 cm and DB = 3 cm, what is the ratio DE : BC?',
        correctAnswer: '2 : 5',
        explanation: 'DE / BC = AD / AB = 2 / (2 + 3) = 2 / 5.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'BPT: AD/DB = AE/EC holds only when line is parallel to third side.',
      'For parallel bases: DE/BC = AD/AB (small triangle side over big triangle side).',
      'AA Similarity: Just 2 matching angles prove two triangles similar.',
      'Order of vertices in similarity statements MUST match corresponding equal angles.',
      'In trapezium ABCD with AB || CD: Diagonals satisfy AO/CO = BO/DO.'
    ],
    speedTips: [
      'Ratio shortcut: If AD : DB = 2 : 3, then AD : AB = 2 : 5 and area ratio of ADE to ABC is 2^2 : 5^2 = 4 : 25.',
      'Shadow problems: Height / Shadow = constant for all objects at the same time.',
      'To prove parallel: show AD/DB = AE/EC (Converse of BPT).'
    ],
    lastDayChecklist: [
      'Can you write the complete proof of Thales Theorem in under 6 minutes without looking?',
      'Did you remember that angles subtended by sun are equal (AA criterion in shadow questions)?',
      'Are you careful to write full side AD/AB when working with parallel segment DE/BC?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch6_d1',
          chapterId: 6,
          topic: 'BPT Basics',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'If a line divides two sides of a triangle in the same ratio, then the line is parallel to the third side. What is this theorem called?',
          correctAnswer: 'Converse of Basic Proportionality Theorem',
          marks: 1,
          hints: ['It is the reverse statement of Thales Theorem.'],
          solutionSteps: ['The reverse of Thales Theorem is known as the Converse of Basic Proportionality Theorem.'],
          commonTrap: 'Confusing BPT with its Converse.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 6 Theorem 6.2',
          conceptId: 'ch6_c1'
        },
        {
          id: 'ch6_d2',
          chapterId: 6,
          topic: 'Similarity Ratios',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Triangle ABC ~ Triangle DEF such that 2AB = DE and BC = 8 cm. Find EF.',
          correctAnswer: '16 cm',
          marks: 2,
          hints: ['AB/DE = BC/EF. Given DE = 2AB ⟹ AB/DE = 1/2.'],
          solutionSteps: [
            'AB / DE = BC / EF',
            '1 / 2 = 8 / EF ⟹ EF = 16 cm.'
          ],
          commonTrap: 'Dividing 8 by 2 instead of multiplying.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Board Practice',
          conceptId: 'ch6_c2'
        },
        {
          id: 'ch6_d3',
          chapterId: 6,
          topic: 'BPT Segment Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'In Triangle ABC, DE || BC. If AD = 4 cm, DB = (x - 4) cm, AE = 8 cm, EC = (3x - 19) cm, find x.',
          correctAnswer: '11',
          marks: 2,
          hints: ['AD/DB = AE/EC. Cross-multiply to solve for x.'],
          solutionSteps: [
            '4 / (x - 4) = 8 / (3x - 19)',
            'Simplify: 1 / (x - 4) = 2 / (3x - 19)',
            'Cross-multiply: 3x - 19 = 2x - 8 ⟹ x = 11.'
          ],
          commonTrap: 'Arithmetic error when expanding 2(x - 4).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2020 Paper',
          conceptId: 'ch6_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch6_ct1',
          chapterId: 6,
          topic: 'Pole and Shadow',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A vertical stick 20 cm long casts a shadow 15 cm long on the ground. At the same time, a tower casts a shadow 45 m long. What is the height of the tower in metres?',
          correctAnswer: '60 m',
          marks: 2,
          hints: ['Stick: 20/15 = 4/3. Tower: h / 45 = 4/3.'],
          solutionSteps: [
            'By AA similarity: Height1 / Shadow1 = Height2 / Shadow2',
            '20 / 15 = h / 45 ⟹ 4 / 3 = h / 45 ⟹ h = 4 * 15 = 60 m.'
          ],
          commonTrap: 'Forgetting to check units (ratio is unitless if both in cm).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Sample Paper',
          conceptId: 'ch6_c2'
        },
        {
          id: 'ch6_ct2',
          chapterId: 6,
          topic: 'Diagonals of Trapezium',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'In trapezium ABCD with AB || DC, diagonals intersect at O. If AO = 5x - 7, OC = 2x + 1, BO = 7x - 5, OD = 7x + 1, find x.',
          correctAnswer: '2',
          marks: 3,
          hints: ['AO/OC = BO/OD. Form the quadratic equation and solve.'],
          solutionSteps: [
            '(5x - 7) / (2x + 1) = (7x - 5) / (7x + 1)',
            '(5x - 7)(7x + 1) = (2x + 1)(7x - 5)',
            '35x^2 + 5x - 49x - 7 = 14x^2 - 10x + 7x - 5',
            '35x^2 - 44x - 7 = 14x^2 - 3x - 5',
            '21x^2 - 41x - 2 = 0',
            'Factorize: (x - 2)(21x + 1) = 0',
            'Since segment length must be positive, x = 2.'
          ],
          commonTrap: 'Choosing negative root x = -1/21 which yields negative segment lengths.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch6_c1'
        },
        {
          id: 'ch6_ct3',
          chapterId: 6,
          topic: 'Thales Theorem Application',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'In Triangle ABC, AD is median. Line drawn through D parallel to AB meets AC at E. If AC = 12 cm, find AE.',
          correctAnswer: '6 cm',
          marks: 5,
          hints: ['D is midpoint of BC. By Converse of Midpoint theorem, line through midpoint parallel to a side bisects the other side.'],
          solutionSteps: [
            'Since AD is median, D is the midpoint of BC (BD = DC).',
            'Line DE is parallel to AB and passes through midpoint D of BC.',
            'By the Converse of Midpoint Theorem (or BPT where CD/DB = CE/EA = 1/1):',
            'E is the midpoint of AC.',
            'Therefore, AE = (1/2) * AC = (1/2) * 12 = 6 cm.'
          ],
          commonTrap: 'Confusing median with altitude.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Exemplar',
          conceptId: 'ch6_c1'
        }
      ]
    }
  ]
};
