import { ChapterData } from './types';

export const CH10_DATA: ChapterData = {
  chapterNumber: 10,
  chapterName: 'Circles',
  weightageEstimate: '6–8 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Circles in Class 10 focuses on the geometry of Tangents—straight lines that kiss a circle at exactly one point of contact. The entire chapter rests on two foundational theorems: Theorem 10.1 (Radius is perpendicular to tangent at point of contact) and Theorem 10.2 (Lengths of two tangents from an external point are equal), leading to deep applications in circumscribing polygons, concentric circles, and inradii.',
    prerequisites: [
      'Basic circle vocabulary: center, radius, chord, diameter, secant, tangent',
      'Pythagorean theorem',
      'Congruence of triangles (RHS criterion)',
      'Quadrilateral angle sum property (sum of interior angles = 360°)'
    ],
    coreIdeas: [
      'Number of Tangents: 0 from an interior point; exactly 1 from a point on the circumference; exactly 2 tangents of equal length from an external point.',
      'Theorem 10.1: The tangent at any point of a circle is perpendicular to the radius through the point of contact (OP ⟂ XY).',
      'Theorem 10.2: The lengths of tangents drawn from an external point to a circle are equal (PA = PB).',
      'Supplementary Angles Property: The angle between the two tangents from an external point and the angle subtended by the line-segment joining the points of contact at the center are supplementary: ∠APB + ∠AOB = 180°.',
      'Circumscribing Quadrilateral Property: If a quadrilateral ABCD circumscribes a circle touching it at P, Q, R, S, then AB + CD = AD + BC (sum of opposite sides are equal!).',
      'Circumscribing Parallelogram is a Rhombus: If a parallelogram circumscribes a circle, because opposite sides are equal and AB + CD = AD + BC, all 4 sides become equal: it is a RHOMBUS!',
      'Concentric Circles Chord Bisection: In two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.'
    ],
    keyRelationships: [
      'Right triangle inradius formula: For a right triangle with legs a and b and hypotenuse c, the inradius is r = (a + b - c) / 2.',
      'Angle bisector: The center of the circle lies on the bisector of the angle between the two tangents (∠APO = ∠BPO).',
      'Chord length in concentric circles: If R is outer radius and r is inner radius, chord length L = 2 * sqrt(R^2 - r^2).'
    ],
    frequentMisunderstandings: [
      'Forgetting that tangent is perpendicular ONLY to the radius drawn to the point of contact, not to arbitrary chords.',
      'Confusing a secant (cuts circle at two distinct points) with a tangent (touches at exactly one point).',
      'Forgetting to mention Theorem 10.2 ("Lengths of tangents from an external point are equal") when writing 2-column geometric proofs in board exams.'
    ],
    examImportanceEvidence: 'Guaranteed 6–8 marks in every single board paper! Typically includes: 1 MCQ (1 Mark on ∠APB + ∠AOB = 180° or tangent length), 1 Short Answer (2 or 3 Marks on concentric circles or chord length), and 1 Long Answer / Proof (4 or 5 Marks: Theorem 10.2 proof or proving circumscribing parallelogram is a rhombus).'
  },
  concepts: [
    {
      id: 'ch10_c1',
      title: 'Theorem 10.1 & Perpendicularity at Point of Contact',
      topic: 'Radius-Tangent Perpendicularity',
      simpleExplanation: 'At the exact point where a tangent kisses a circle, the spoke (radius) from the center hits it like a hammer at a perfect 90° right angle!',
      exactMathIdea: 'The tangent at any point of a circle is perpendicular to the radius through the point of contact. If XY is tangent to circle with center O at point P, then OP ⟂ XY. This forms right-angled triangles with any line drawn from the center.',
      formulaOrTheorem: 'OP \\perp XY \\implies \\angle OPX = \\angle OPY = 90^\\circ',
      whenToUse: 'When calculating tangent lengths, distances from center using Pythagoras theorem, or angle between radii.',
      recognitionClues: [
        'A tangent PQ at a point P of a circle of radius 5 cm',
        'Find the length of tangent drawn from a point 10 cm away from center',
        'Line meets the circle at point of contact'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Tangent Length via Pythagoras',
          question: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q so that OQ = 12 cm. Find the length of PQ.',
          given: 'Circle radius OP = 5 cm, distance OQ = 12 cm, PQ is tangent at P.',
          toFind: 'Length of PQ.',
          methodSelectionReason: 'By Theorem 10.1, OP ⟂ PQ at point of contact P. Therefore, Triangle OPQ is a right-angled triangle with hypotenuse OQ.',
          stepByStepSolution: [
            'By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent.',
            'Therefore, ∠OPQ = 90° in Triangle OPQ.',
            'By Pythagoras Theorem: OQ^2 = OP^2 + PQ^2',
            '12^2 = 5^2 + PQ^2',
            '144 = 25 + PQ^2',
            'PQ^2 = 144 - 25 = 119',
            'PQ = √119 cm.'
          ],
          finalAnswer: 'Length of PQ = √119 cm',
          verificationCheck: 'Hypotenuse OQ (12) must be greater than both legs OP (5) and PQ (√119 ≈ 10.9). 12 > 10.9 > 5. Verified!',
          commonTrap: 'Mistaking PQ as the hypotenuse and writing PQ = sqrt(12^2 + 5^2) = 13 cm! OQ is the hypotenuse opposite to 90°.'
        }
      ],
      commonMisconceptions: [
        'Assuming a tangent can have multiple points of contact (a tangent touches at strictly ONE point).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Very frequent 1-mark MCQ in every CBSE set.',
      sourceTrace: 'NCERT Ch 10 Theorem 10.1 & Ex 10.1'
    },
    {
      id: 'ch10_c2',
      title: 'Theorem 10.2 & Two Tangents from an External Point',
      topic: 'Equal Tangents & Circumscribed Figures',
      simpleExplanation: 'If you stand outside a circle and reach out both arms to touch the circle, both arms will be EXACTLY the same length: PA = PB!',
      exactMathIdea: 'The lengths of tangents drawn from an external point to a circle are equal. If PA and PB are tangents from external point P to circle with center O at points of contact A and B, then: (i) PA = PB, (ii) ∠APO = ∠BPO, (iii) ∠AOP = ∠BOP, and (iv) ∠APB + ∠AOB = 180°.',
      formulaOrTheorem: 'PA = PB, \\quad \\angle APB + \\angle AOB = 180^\\circ',
      whenToUse: 'Whenever tangents from an external point are given, proving quadrilateral or polygon circumscription properties, or finding perimeter of triangles.',
      recognitionClues: [
        'Prove that the lengths of tangents drawn from an external point are equal',
        'Prove that a parallelogram circumscribing a circle is a rhombus',
        'Quadrilateral ABCD circumscribes a circle, prove AB + CD = AD + BC'
      ],
      workedExamples: [
        {
          level: 'standard',
          title: 'Angle between Tangents and Subtended Angle',
          question: 'If tangents PA and PB from a point P to a circle with center O are inclined to each other at an angle of 80°, then find ∠POA.',
          given: 'Tangents PA and PB inclined at ∠APB = 80°.',
          toFind: 'Angle ∠POA.',
          methodSelectionReason: 'By symmetry, PO bisects ∠APB (∠APO = 80/2 = 40°). Triangle OAP has ∠OAP = 90°. Use angle sum property.',
          stepByStepSolution: [
            'By Theorem 10.1, OA ⟂ PA ⟹ ∠OAP = 90°.',
            'The line joining the external point P to center O bisects the angle between the tangents:',
            '∠APO = (1/2) * ∠APB = (1/2) * 80° = 40°.',
            'In right-angled Triangle OAP:',
            '∠POA + ∠APO + ∠OAP = 180°',
            '∠POA + 40° + 90° = 180°',
            '∠POA + 130° = 180° ⟹ ∠POA = 50°.'
          ],
          finalAnswer: '∠POA = 50°',
          verificationCheck: '∠AOB = 180° - 80° = 100°. Since PO bisects ∠AOB, ∠POA = 100° / 2 = 50°. Exact match!',
          commonTrap: 'Finding ∠AOB = 100° and forgetting to halve it to get ∠POA.'
        },
        {
          level: 'application',
          title: 'Proving Parallelogram Circumscribing Circle is a Rhombus',
          question: 'Prove that the parallelogram circumscribing a circle is a rhombus.',
          given: 'Parallelogram ABCD circumscribing a circle touching at P, Q, R, S.',
          toFind: 'Proof that ABCD is a rhombus (all 4 sides are equal).',
          methodSelectionReason: 'Tangents from external points are equal (AP=AS, BP=BQ, CR=CQ, DR=DS). Adding gives AB + CD = AD + BC. Since ABCD is a parallelogram, AB = CD and AD = BC.',
          stepByStepSolution: [
            'Let ABCD be a parallelogram circumscribing a circle touching sides AB, BC, CD, DA at points P, Q, R, S respectively.',
            'By Theorem 10.2, lengths of tangents from an external point are equal:',
            'AP = AS ... (1) [Tangents from point A]',
            'BP = BQ ... (2) [Tangents from point B]',
            'CR = CQ ... (3) [Tangents from point C]',
            'DR = DS ... (4) [Tangents from point D]',
            'Adding equations (1), (2), (3), and (4):',
            '(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)',
            'AB + CD = AD + BC ... (5)',
            'Since ABCD is a parallelogram, opposite sides are equal: AB = CD and BC = AD.',
            'Substitute CD = AB and BC = AD into (5):',
            'AB + AB = AD + AD ⟹ 2 AB = 2 AD ⟹ AB = AD.',
            'Since adjacent sides are equal (AB = AD) and opposite sides are equal, all four sides are equal: AB = BC = CD = DA.',
            'A parallelogram with all sides equal is a rhombus. Hence ABCD is a rhombus. Hence Proved!'
          ],
          finalAnswer: 'Hence Proved: ABCD is a rhombus.',
          verificationCheck: 'All four tangent equality equations are correctly grouped so left side forms AB + CD.',
          commonTrap: 'Adding the equations with terms on the wrong side (e.g. writing BQ = BP on left side) which prevents forming side AB.'
        }
      ],
      commonMisconceptions: [
        'Believing that any quadrilateral circumscribing a circle is a rhombus (it must be a parallelogram first!).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Repeated in almost every CBSE board exam cycle as a 3 or 4-mark question.',
      sourceTrace: 'NCERT Ch 10 Theorem 10.2 & Ex 10.2 Q11'
    }
  ],
  formulas: [
    {
      id: 'ch10_f1',
      name: 'Theorem 10.2 Tangent Length Equality',
      formula: 'PA = PB \\quad \\text{and} \\quad \\angle APB + \\angle AOB = 180^\\circ',
      symbolMeanings: [
        { symbol: 'PA, PB', meaning: 'Lengths of the two tangents from external point P' },
        { symbol: '∠APB', meaning: 'Angle between the two tangents' },
        { symbol: '∠AOB', meaning: 'Angle subtended by points of contact at the center' }
      ],
      whenToUse: 'In any problem involving two tangents from an external point.',
      conditions: ['Point P must be strictly outside the circle'],
      commonSubstitutions: ['If ∠APB = θ, then ∠AOB = 180° - θ, and ∠OAB = ∠OBA = θ/2'],
      miniExample: {
        question: 'If angle between two tangents is 70°, find the angle subtended by radii at the center.',
        substitution: '∠AOB = 180° - 70° = 110°',
        result: '∠AOB = 110°'
      },
      commonMistakes: ['Thinking ∠APB + ∠AOB = 90° instead of 180°.'],
      memoryTrick: 'Opposite angles in the kite PAOB add to 180° (Supplementary)!',
      sourceTrace: 'NCERT Theorem 10.2'
    },
    {
      id: 'ch10_f2',
      name: 'Chord Length in Concentric Circles',
      formula: 'L = 2\\sqrt{R^2 - r^2}',
      symbolMeanings: [
        { symbol: 'L', meaning: 'Length of chord of larger circle touching smaller circle' },
        { symbol: 'R', meaning: 'Radius of larger circle' },
        { symbol: 'r', meaning: 'Radius of smaller circle' }
      ],
      whenToUse: 'When two concentric circles are given and a chord of the outer circle touches the inner circle.',
      conditions: ['Concentric circles (same center O), R > r'],
      commonSubstitutions: ['Perpendicular from center bisects the chord: half chord = sqrt(R^2 - r^2)'],
      miniExample: {
        question: 'Two concentric circles have radii 5 cm and 3 cm. Find length of chord of larger circle touching smaller circle.',
        substitution: 'L = 2 * sqrt(5^2 - 3^2) = 2 * sqrt(25 - 9) = 2 * sqrt(16) = 2 * 4 = 8 cm',
        result: 'L = 8 cm'
      },
      commonMistakes: ['Forgetting to double the half-chord length (giving 4 cm instead of 8 cm).'],
      memoryTrick: 'Half is a Pythagorean triplet, then double it for the full chord!',
      sourceTrace: 'NCERT Ch 10 Ex 10.2 Q7'
    }
  ],
  methodGuides: [
    {
      id: 'ch10_m1',
      questionPattern: 'Formal Proof of Theorem 10.2 (Lengths of Tangents from External Point)',
      recognitionClues: ['Prove that the lengths of tangents drawn from an external point to a circle are equal'],
      requiredConcept: 'RHS congruence of triangles formed with radii and line to center.',
      whatIsGiven: 'A circle with center O, an external point P and two tangents PQ and PR to the circle.',
      whatMustBeFound: 'Proof that PQ = PR.',
      chosenMethod: 'Join OP, OQ, OR. Prove Triangle OQP ≅ Triangle ORP using RHS congruence.',
      executionSteps: [
        'Step 1: Write "Given: A circle with center O, a point P lying outside the circle and two tangents PQ, PR on the circle from P".',
        'Step 2: "To Prove: PQ = PR".',
        'Step 3: "Construction: Join OP, OQ, and OR".',
        'Step 4: By Theorem 10.1, radius is perpendicular to tangent at point of contact: ∠OQP = ∠ORP = 90°.',
        'Step 5: In right triangles Triangle OQP and Triangle ORP:',
        '∠OQP = ∠ORP = 90° (Radius ⟂ Tangent)',
        'OP = OP (Common Hypotenuse)',
        'OQ = OR (Radii of the same circle)',
        'Step 6: Therefore, Triangle OQP ≅ Triangle ORP (by RHS congruence criterion).',
        'Step 7: By CPCT (Corresponding Parts of Congruent Triangles): PQ = PR. Hence Proved!'
      ],
      verificationMethod: 'Ensure RHS congruence is cited, NOT SAS (since the angle 90° is not between OP and OQ).',
      commonTrap: 'Using SAS instead of RHS: the 90° angle is opposite the hypotenuse OP, so RHS is mandatory.',
      exemplarQuestion: 'Prove that the lengths of tangents drawn from an external point to a circle are equal.',
      exemplarAnswer: 'Follows Steps 1-7 above completely.'
    },
    {
      id: 'ch10_m2',
      questionPattern: 'Circumscribed Quadrilateral Opposite Sides Sum Property',
      recognitionClues: ['A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC'],
      requiredConcept: 'Theorem 10.2 applied 4 times from the four vertices.',
      whatIsGiven: 'Quadrilateral ABCD touching circle at points P, Q, R, S.',
      whatMustBeFound: 'Proof that AB + CD = AD + BC.',
      chosenMethod: 'Apply Theorem 10.2 to vertices A, B, C, D and add the four equations.',
      executionSteps: [
        'Step 1: Identify the four vertices A, B, C, D as external points to the circle.',
        'Step 2: By Theorem 10.2: Tangents from A: AP = AS ... (1).',
        'Step 3: Tangents from B: BP = BQ ... (2).',
        'Step 4: Tangents from C: CR = CQ ... (3).',
        'Step 5: Tangents from D: DR = DS ... (4).',
        'Step 6: Add equations (1) to (4): (AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ).',
        'Step 7: Substitute side names: AB + CD = AD + BC. Hence Proved!'
      ],
      verificationMethod: 'Check that AP and BP are on the same side so their sum makes AB.',
      commonTrap: 'Writing BQ = BP on the left side, which mixes up the terms and prevents forming AB.',
      exemplarQuestion: 'A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.',
      exemplarAnswer: 'AP = AS, BP = BQ, CR = CQ, DR = DS. Adding: (AP+BP) + (CR+DR) = (AS+DS) + (BQ+CQ) ⟹ AB + CD = AD + BC. Hence Proved.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch10_q1',
      chapterId: 10,
      topic: 'Tangent Length and Radius',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the center is 25 cm. The radius of the circle is:',
      options: ['7 cm', '12 cm', '15 cm', '24.5 cm'],
      correctAnswer: '7 cm',
      marks: 1,
      hints: ['By Pythagoras theorem in right triangle: r^2 + 24^2 = 25^2.'],
      solutionSteps: [
        'r = sqrt(25^2 - 24^2) = sqrt(625 - 576) = sqrt(49) = 7 cm.'
      ],
      commonTrap: 'Adding 25^2 and 24^2.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 10 Ex 10.2 Q1',
      conceptId: 'ch10_c1'
    },
    {
      id: 'ch10_q2',
      chapterId: 10,
      topic: 'Concentric Circles Chord',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle.',
      options: ['4 cm', '8 cm', '6 cm', '10 cm'],
      correctAnswer: '8 cm',
      marks: 2,
      hints: ['Half chord = sqrt(5^2 - 3^2) = 4 cm. Full chord = 2 * 4 = 8 cm.'],
      solutionSteps: [
        'Let O be the common center and AB be the chord of the outer circle touching the inner circle at P.',
        'OP is perpendicular to AB and OP = 3 cm, OA = 5 cm.',
        'In right Triangle OPA: AP = sqrt(OA^2 - OP^2) = sqrt(25 - 9) = sqrt(16) = 4 cm.',
        'Since perpendicular from center bisects the chord: AB = 2 * AP = 2 * 4 = 8 cm.'
      ],
      commonTrap: 'Stopping at AP = 4 cm without doubling to find the full chord AB.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 10 Ex 10.2 Q7',
      conceptId: 'ch10_c1'
    },
    {
      id: 'ch10_q3',
      chapterId: 10,
      topic: 'Supplementary Angle Relation',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the center.',
      correctAnswer: 'Hence Proved: ∠APB + ∠AOB = 180°',
      marks: 3,
      hints: ['In quadrilateral PAOB, angles at A and B are 90° by Theorem 10.1. Sum of angles in a quadrilateral is 360°.'],
      solutionSteps: [
        'Let PA and PB be tangents from external point P to circle with center O at points of contact A and B.',
        'By Theorem 10.1: OA ⟂ PA ⟹ ∠OAP = 90° and OB ⟂ PB ⟹ ∠OBP = 90°.',
        'In quadrilateral PAOB, sum of interior angles is 360°:',
        '∠APB + ∠OAP + ∠AOB + ∠OBP = 360°',
        '∠APB + 90° + ∠AOB + 90° = 360°',
        '∠APB + ∠AOB + 180° = 360°',
        '∠APB + ∠AOB = 360° - 180° = 180°.',
        'Therefore, ∠APB and ∠AOB are supplementary. Hence Proved!'
      ],
      commonTrap: 'Confusing supplementary (sum = 180°) with complementary (sum = 90°).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 10 Ex 10.2 Q4',
      conceptId: 'ch10_c2'
    },
    {
      id: 'ch10_q4',
      chapterId: 10,
      topic: 'Triangle Perimeter and Tangents',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively. Find the sides AB and AC.',
      correctAnswer: 'AB = 15 cm, AC = 13 cm',
      marks: 4,
      hints: ['Let AF = AE = x. Sides are a = 14, b = x + 6, c = x + 8. Equate Area by Heron formula to sum of areas of 3 triangles (1/2 * r * perimeter).'],
      solutionSteps: [
        'Let circle touch AB at F and AC at E. By Theorem 10.2: BD = BF = 8 cm, CD = CE = 6 cm. Let AF = AE = x.',
        'Sides of triangle: BC = 8 + 6 = 14 cm, AB = x + 8, AC = x + 6.',
        'Semi-perimeter s = (14 + x + 8 + x + 6) / 2 = (28 + 2x) / 2 = 14 + x.',
        'Area using Heron Formula: ar(ABC) = sqrt(s(s - a)(s - b)(s - c))',
        '= sqrt((14 + x)(x)(6)(8)) = sqrt(48x(14 + x)).',
        'Also, Area = ar(OBC) + ar(OAB) + ar(OAC) = (1/2)*4*(14) + (1/2)*4*(x + 8) + (1/2)*4*(x + 6)',
        '= 2 * [14 + x + 8 + x + 6] = 2 * (28 + 2x) = 4(14 + x).',
        'Equate both areas: sqrt(48x(14 + x)) = 4(14 + x).',
        'Square both sides: 48x(14 + x) = 16(14 + x)^2.',
        'Since 14 + x ≠ 0: 48x = 16(14 + x) ⟹ 3x = 14 + x ⟹ 2x = 14 ⟹ x = 7 cm.',
        'Therefore: AB = x + 8 = 7 + 8 = 15 cm; AC = x + 6 = 7 + 6 = 13 cm.'
      ],
      commonTrap: 'Algebraic error when squaring 4(14 + x) (squaring 4 to 16).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 10 Ex 10.2 Q12',
      conceptId: 'ch10_c2'
    },
    {
      id: 'ch10_q5',
      chapterId: 10,
      topic: 'Right Triangle Inradius Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'A circle touches all the four sides of a quadrilateral ABCD whose sides are AB = 6 cm, BC = 7 cm and CD = 4 cm. Find AD.',
      correctAnswer: 'AD = 3 cm',
      marks: 2,
      hints: ['Use circumscribing quadrilateral theorem: AB + CD = AD + BC.'],
      solutionSteps: [
        'For any quadrilateral circumscribing a circle: AB + CD = AD + BC.',
        '6 + 4 = AD + 7',
        '10 = AD + 7 ⟹ AD = 10 - 7 = 3 cm.'
      ],
      commonTrap: 'Doing complex circle construction instead of using the direct opposite sides sum theorem.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Board Standard Paper',
      conceptId: 'ch10_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch10_pyq1',
      year: 'CBSE 2024 / 2023 / 2020 / 2017',
      marks: 4,
      topic: 'Theorem 10.2 Formal Proof',
      conceptTested: 'Lengths of tangents from external point are equal',
      question: 'Prove that the lengths of tangents drawn from an external point to a circle are equal.',
      markingSchemeBreakdown: [
        { step: 'Given, To Prove, and correct circle diagram', marks: 1 },
        { step: 'Construction: Join OP, OQ, OR', marks: 0.5 },
        { step: 'Right angles declaration by Theorem 10.1 (∠OQP = ∠ORP = 90°)', marks: 1 },
        { step: 'RHS Congruence of Triangle OQP and Triangle ORP', marks: 1 },
        { step: 'CPCT conclusion PQ = PR', marks: 0.5 }
      ],
      fullSolution: 'Given: A circle with center O. A point P outside the circle and two tangents PQ and PR on the circle from P.\nTo Prove: PQ = PR.\nConstruction: Join OP, OQ and OR.\n\nProof:\nBy Theorem 10.1, the tangent at any point of a circle is perpendicular to the radius through the point of contact.\nTherefore, ∠OQP = 90° and ∠ORP = 90°.\n\nIn right-angled triangles Triangle OQP and Triangle ORP:\n∠OQP = ∠ORP = 90°\nOP = OP (Common Hypotenuse)\nOQ = OR (Radii of the same circle)\n\nTherefore, Triangle OQP ≅ Triangle ORP (by RHS congruence criterion).\nHence, PQ = PR (by CPCT).\nHence Proved.',
      commonMistake: 'Using SSS before proving PQ = PR (circular reasoning!). RHS is the only correct criterion.',
      frequencyTrend: 'Repeated 8 times in past 10 years (Standard & Basic).',
      source: 'CBSE Official Board Examination'
    },
    {
      id: 'ch10_pyq2',
      year: 'CBSE 2022 / 2019',
      marks: 3,
      topic: 'Parallelogram Circumscribing Circle is Rhombus',
      conceptTested: 'Circumscribed quadrilateral opposite sides sum',
      question: 'Prove that the parallelogram circumscribing a circle is a rhombus.',
      markingSchemeBreakdown: [
        { step: 'Applying Theorem 10.2 at all 4 vertices', marks: 1.0 },
        { step: 'Adding equations to get AB + CD = AD + BC', marks: 1.0 },
        { step: 'Using parallelogram property AB = CD and BC = AD to conclude AB = AD and rhombus', marks: 1.0 }
      ],
      fullSolution: 'Let ABCD be a parallelogram circumscribing a circle touching at P, Q, R, S.\nBy Theorem 10.2, lengths of tangents from an external point are equal:\nAP = AS ... (1)\nBP = BQ ... (2)\nCR = CQ ... (3)\nDR = DS ... (4)\n\nAdding (1) + (2) + (3) + (4):\n(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)\nAB + CD = AD + BC ... (5)\n\nSince ABCD is a parallelogram:\nAB = CD and BC = AD.\n\nSubstitute in (5):\nAB + AB = AD + AD\n2 AB = 2 AD ⟹ AB = AD.\n\nSince opposite sides are equal and adjacent sides are equal, AB = BC = CD = DA.\nTherefore, parallelogram ABCD is a rhombus. Hence Proved.',
      commonMistake: 'Missing reason statement "Tangents drawn from an external point to a circle are equal".',
      frequencyTrend: 'Very high frequency 3-mark CBSE question.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch10_err1',
      title: 'Applying Pythagoras Theorem with Wrong Hypotenuse',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Given OP = 5 cm (radius) and OQ = 13 cm (distance to external point), student writes PQ = sqrt(13^2 + 5^2).',
      whyItIsWrong: 'The 90° angle is at P (point of contact). Therefore, OQ is the hypotenuse, NOT PQ.',
      correctWorking: 'PQ = sqrt(OQ^2 - OP^2) = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm.',
      howToAvoid: 'Always draw the 90° box at the point of contact on the circumference. The side opposite to 90° (line to center O) is ALWAYS the hypotenuse.',
      retryQuestion: {
        question: 'If radius is 6 cm and distance from center to external point is 10 cm, find tangent length.',
        correctAnswer: '8 cm',
        explanation: 'PQ = sqrt(10^2 - 6^2) = sqrt(64) = 8 cm.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Radius is perpendicular to tangent at point of contact: OP ⟂ XY (90°).',
      'Lengths of tangents from external point are equal: PA = PB.',
      'Angle between tangents and angle at center are supplementary: ∠APB + ∠AOB = 180°.',
      'Circumscribed quadrilateral: AB + CD = AD + BC.',
      'Circumscribed parallelogram is ALWAYS a rhombus.',
      'Concentric circles chord length: L = 2 * sqrt(R^2 - r^2).'
    ],
    speedTips: [
      'If angle between tangents is 60°, Triangle PAB is equilateral (all sides equal)!',
      'If angle between tangents is 90°, PAOB is a square of side r, so PA = PB = r.',
      'Quick inradius of right triangle: r = (a + b - c) / 2.'
    ],
    lastDayChecklist: [
      'Can you write the formal proof of Theorem 10.2 using RHS congruence?',
      'Did you double the half-chord in concentric circles questions?',
      'Are you remembering that AB + CD = AD + BC in circumscribed quadrilateral?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch10_d1',
          chapterId: 10,
          topic: 'Tangents Count',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'How many tangents can a circle have?',
          correctAnswer: 'Infinitely many',
          marks: 1,
          hints: ['A circle has infinitely many points on its circumference, and at each point exactly one tangent can be drawn.'],
          solutionSteps: ['A circle has infinitely many tangents.'],
          commonTrap: 'Writing 2 (which is the number of tangents from ONE external point, not the whole circle).',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 10 Ex 10.1 Q2',
          conceptId: 'ch10_c1'
        },
        {
          id: 'ch10_d2',
          chapterId: 10,
          topic: 'Angle Subtended by Tangents',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'If two tangents inclined at an angle 60° are drawn to a circle of radius 3 cm, then length of each tangent is equal to:',
          correctAnswer: '3√3 cm',
          marks: 2,
          hints: ['In Triangle OAP: ∠APO = 30°, OA = 3 cm. tan 30° = OA / PA ⟹ 1/√3 = 3 / PA.'],
          solutionSteps: [
            'Line OP bisects the angle between tangents: ∠APO = 60° / 2 = 30°.',
            'In right Triangle OAP: tan 30° = OA / PA',
            '1 / √3 = 3 / PA ⟹ PA = 3√3 cm.'
          ],
          commonTrap: 'Using tan 60° instead of tan 30°.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2022 MCQ',
          conceptId: 'ch10_c2'
        },
        {
          id: 'ch10_d3',
          chapterId: 10,
          topic: 'Concentric Circles Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'The radii of two concentric circles are 13 cm and 5 cm. Find the length of each chord of one circle which touches the other circle.',
          correctAnswer: '24 cm',
          marks: 2,
          hints: ['Half chord = sqrt(13^2 - 5^2) = 12 cm. Full chord = 24 cm.'],
          solutionSteps: [
            'Half chord = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm.',
            'Full chord = 2 * 12 = 24 cm.'
          ],
          commonTrap: 'Stopping at 12 cm.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch10_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch10_ct1',
          chapterId: 10,
          topic: 'Circumscribed Quadrilateral',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm and CD = 14 cm, find AD.',
          correctAnswer: '11 cm',
          marks: 3,
          hints: ['AB + CD = AD + BC.'],
          solutionSteps: [
            'AB + CD = AD + BC',
            '12 + 14 = AD + 15',
            '26 = AD + 15 ⟹ AD = 11 cm.'
          ],
          commonTrap: 'Arithmetic error when subtracting 15 from 26.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2023 Standard',
          conceptId: 'ch10_c2'
        },
        {
          id: 'ch10_ct2',
          chapterId: 10,
          topic: 'Angle between Tangents Proof',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line segment joining the points of contact at the center.',
          correctAnswer: 'Hence Proved: ∠APB + ∠AOB = 180°',
          marks: 3,
          hints: ['In quadrilateral PAOB, ∠OAP = ∠OBP = 90°. Sum of angles = 360°.'],
          solutionSteps: [
            'In quadrilateral PAOB: ∠OAP = 90° and ∠OBP = 90° (Theorem 10.1).',
            '∠APB + ∠AOB + 90° + 90° = 360°',
            '∠APB + ∠AOB = 360° - 180° = 180°.'
          ],
          commonTrap: 'Omitting the statement of Theorem 10.1.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 10 Ex 10.2 Q8',
          conceptId: 'ch10_c2'
        },
        {
          id: 'ch10_ct3',
          chapterId: 10,
          topic: 'Right Triangle Inradius Proof',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'In a right-angled triangle ABC, ∠B = 90°, a circle is inscribed with center O and radius r touching sides AB, BC, CA at P, Q, R. If AB = 8 cm and BC = 6 cm, find the inradius r.',
          correctAnswer: '2 cm',
          marks: 4,
          hints: ['Hypotenuse AC = sqrt(8^2 + 6^2) = 10 cm. Inradius r = (AB + BC - AC) / 2.'],
          solutionSteps: [
            'In right Triangle ABC: AC = sqrt(AB^2 + BC^2) = sqrt(8^2 + 6^2) = sqrt(64 + 36) = sqrt(100) = 10 cm.',
            'Note that OPBQ is a square of side r (since ∠B = 90°, ∠OPB = 90°, ∠OQB = 90° and OP = OQ = r).',
            'Therefore, BP = BQ = r.',
            'By Theorem 10.2: AP = AR = AB - BP = 8 - r.',
            'CQ = CR = BC - BQ = 6 - r.',
            'Now, AC = AR + CR = (8 - r) + (6 - r) = 14 - 2r.',
            'Since AC = 10 cm:',
            '14 - 2r = 10 ⟹ 2r = 4 ⟹ r = 2 cm.'
          ],
          commonTrap: 'Forgetting to prove OPBQ is a square before setting BP = BQ = r.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 4-Mark Board Question',
          conceptId: 'ch10_c2'
        }
      ]
    }
  ]
};
