import { ChapterData } from './types';

export const CH7_DATA: ChapterData = {
  chapterNumber: 7,
  chapterName: 'Coordinate Geometry',
  weightageEstimate: '6 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Coordinate Geometry links algebra with geometry using Cartesian coordinates. In Class 10, the syllabus centers on two powerful algebraic tools: the Distance Formula (measuring straight-line distances and proving polygon properties) and the Section Formula (finding points dividing line segments in given ratios, midpoints, and centroids).',
    prerequisites: [
      'Cartesian plane, origin (0, 0), axes, and quadrants',
      'Plotting points (x, y)',
      'Pythagorean theorem (a² + b² = c²)',
      'Solving linear equations in one and two variables'
    ],
    coreIdeas: [
      'Distance Formula: The distance between P(x1, y1) and Q(x2, y2) is derived directly from the Pythagorean theorem: PQ = √((x₂ - x₁)² + (y₂ - y₁)²). Distance from origin is simply √(x² + y²).',
      'Section Formula (Internal Division): The coordinates of point P(x, y) dividing segment AB in ratio m1 : m2 are ((m₁x₂ + m₂x₁)/(m1 + m2), (m₁y₂ + m₂y₁)/(m1 + m2)).',
      'The k : 1 Ratio Hack: When the dividing ratio is unknown, ALWAYS assume ratio k : 1 instead of m : n. It reduces two variables to one single variable k.',
      'Midpoint Formula: Special case of section formula with ratio 1 : 1: M = ((x1 + x2)/2, (y1 + y2)/2).',
      'Parallelogram Diagonals Property: Diagonals of a parallelogram bisect each other. Therefore, Midpoint of diagonal AC = Midpoint of diagonal BD. This is the fastest method to find the unknown fourth vertex without using distance formula!',
      'Collinearity: Three points A, B, C are collinear if the sum of any two distances equals the third distance (e.g. AB + BC = AC).'
    ],
    keyRelationships: [
      'Points on x-axis always have y = 0: (x, 0).',
      'Points on y-axis always have x = 0: (0, y).',
      'Centroid of a triangle with vertices (x1, y1), (x2, y2), (x3, y3): G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3).',
      'Trisection of line segment AB: Two points P and Q such that P divides AB in 1 : 2 and Q divides AB in 2 : 1 (or Q is the midpoint of PB).'
    ],
    frequentMisunderstandings: [
      'Sign errors inside the distance formula: e.g., (x2 - (-x1))² becomes (x2 + x1)², but students frequently miss the double negative.',
      'Swapping m1 and m2 in the section formula: m1 multiplies the FAR coordinate (x2), and m2 multiplies the NEAR coordinate (x1).',
      'Using distance formula to find the 4th vertex of a parallelogram (which creates messy simultaneous quadratic equations) instead of using the midpoint equality of diagonals (which is instant and linear).'
    ],
    examImportanceEvidence: 'Guaranteed 6 marks in every single board exam paper! Typically includes: 1 MCQ (1 Mark on distance from origin or x-axis ratio), 1 Short Answer (2 Marks on trisection or equidistant point), and 1 Case Study / Section C problem (3 or 4 Marks).'
  },
  concepts: [
    {
      id: 'ch7_c1',
      title: 'Distance Formula & Applications',
      topic: 'Distance Formula',
      simpleExplanation: 'Imagine walking along the grid: the straight line distance between any two points is just the hypotenuse of a right-angled triangle formed by the horizontal and vertical differences!',
      exactMathIdea: 'The distance d between two points P(x1, y1) and Q(x2, y2) in the Cartesian plane is given by d = √((x₂ - x₁)² + (y₂ - y₁)²). Distance of point P(x, y) from origin O(0, 0) is √(x² + y²).',
      formulaOrTheorem: 'd = \\sqrt{(x₂ - x₁)² + (y₂ - y₁)²}, \\quad \\text{Distance from origin } = \\sqrt{x² + y²}',
      whenToUse: 'When finding lengths of sides, testing for right/isosceles/equilateral triangles, proving collinearity, or finding points equidistant from two given points.',
      recognitionClues: [
        'Find the distance between points',
        'Find a point on the x-axis which is equidistant from',
        'Show that points A, B, C form a right-angled triangle'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Direct Distance Calculation',
          question: 'Find the distance between the points A(-5, 7) and B(-1, 3).',
          given: 'A(-5, 7) and B(-1, 3).',
          toFind: 'Distance AB.',
          methodSelectionReason: 'Direct application of the standard distance formula.',
          stepByStepSolution: [
            'Let (x1, y1) = (-5, 7) and (x2, y2) = (-1, 3).',
            'AB = √((x₂ - x₁)² + (y₂ - y₁)²)',
            'Substitute coordinates: AB = √((-1 - (-5))² + (3 - 7)²)',
            'AB = √((-1 + 5)² + (-4)²) = √(4² + 16)',
            'AB = √(16 + 16) = √(32) = 4 × √2 units.'
          ],
          finalAnswer: 'Distance = 4√2 units',
          verificationCheck: 'Difference in x = 4, difference in y = 4. Hypotenuse = √(16 + 16) = 4√2. Correct.',
          commonTrap: 'Writing (-1 - (-5)) as -6 instead of +4 (double negative sign mistake).'
        },
        {
          level: 'standard',
          title: 'Equidistant Point on x-axis',
          question: 'Find a point on the x-axis which is equidistant from (2, -5) and (-2, 9).',
          given: 'Point P lies on x-axis, equidistant from A(2, -5) and B(-2, 9).',
          toFind: 'Coordinates of point P.',
          methodSelectionReason: 'Any point on the x-axis has y-coordinate 0, so let P = (x, 0). Condition PA = PB implies PA² = PB².',
          stepByStepSolution: [
            'Let the point on the x-axis be P(x, 0).',
            'Since P is equidistant from A(2, -5) and B(-2, 9), PA = PB ⟹ PA² = PB².',
            'PA² = (x - 2)² + (0 - (-5))² = (x - 2)² + 25 = x² - 4x + 4 + 25 = x² - 4x + 29.',
            'PB² = (x - (-2))² + (0 - 9)² = (x + 2)² + 81 = x² + 4x + 4 + 81 = x² + 4x + 85.',
            'Equating PA² = PB²: x² - 4x + 29 = x² + 4x + 85.',
            'Subtract x²: -4x + 29 = 4x + 85 ⟹ -8x = 56 ⟹ x = -7.'
          ],
          finalAnswer: 'The required point is (-7, 0)',
          verificationCheck: 'PA = √((-7 - 2)² + 5²) = √(81 + 25) = √(106). PB = √((-7 + 2)² + (-9)²) = √(25 + 81) = √(106). Both equal!',
          commonTrap: 'Squaring the square root at the very end instead of working directly with PA² = PB² to avoid radical signs.'
        }
      ],
      commonMisconceptions: [
        'Writing distance as negative (distance is always non-negative: d ≥ 0).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board papers as 1-mark or 2-mark question.',
      sourceTrace: 'NCERT Ch 7 Exercise 7.1'
    },
    {
      id: 'ch7_c2',
      title: 'Section Formula & Midpoint Formula',
      topic: 'Internal Division of Line Segment',
      simpleExplanation: 'If you stand on a straight rope between two friends at a ratio of 2 steps to 3 steps, the section formula gives your exact GPS coordinate!',
      exactMathIdea: 'The coordinates of the point P(x, y) which divides the line segment joining A(x1, y1) and B(x2, y2) internally in the ratio m1 : m2 are given by P = ((m₁x₂ + m₂x₁)/(m1 + m2), (m₁y₂ + m₂y₁)/(m1 + m2)). When ratio is unknown, use ratio k : 1.',
      formulaOrTheorem: 'P(x, y) = \\left( \\frac{m₁ x₂ + m₂ x₁}{m₁ + m₂}, \\; \\frac{m₁ y₂ + m₂ y₁}{m₁ + m₂} \\right), \\quad M = \\left( \\frac{x₁ + x₂}{2}, \\; \\frac{y₁ + y₂}{2} \\right)',
      whenToUse: 'When a point divides a segment in a given ratio, finding ratio of division by axes, points of trisection, or centroid of a triangle.',
      recognitionClues: [
        'Find the ratio in which the line segment is divided by the y-axis',
        'Find the coordinates of the points of trisection',
        'Find the fourth vertex of parallelogram ABCD'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Ratio of Division by Axis',
          question: 'Find the ratio in which the y-axis divides the line segment joining the points (5, -6) and (-1, -4). Also find the point of intersection.',
          given: 'A(5, -6), B(-1, -4), divided by the y-axis.',
          toFind: 'Ratio k : 1 and coordinates of point of intersection.',
          methodSelectionReason: 'On the y-axis, the x-coordinate is strictly 0. Set the x-coordinate from section formula to 0 to find k.',
          stepByStepSolution: [
            'Let the y-axis divide the segment AB in the ratio k : 1 at point P.',
            'Since P lies on the y-axis, its coordinates are of the form (0, y).',
            'By Section Formula, x-coordinate of P is:',
            'x = (k(-1) + 1(5)) / (k + 1) = (-k + 5) / (k + 1).',
            'Since x = 0: (-k + 5) / (k + 1) = 0 ⟹ -k + 5 = 0 ⟹ k = 5.',
            'Thus, the ratio is 5 : 1.',
            'Now find the y-coordinate of P with k = 5:',
            'y = (5(-4) + 1(-6)) / (5 + 1) = (-20 - 6) / 6 = -26 / 6 = -13 / 3.'
          ],
          finalAnswer: 'Ratio = 5 : 1, Point of intersection = (0, -13/3)',
          verificationCheck: 'x = 0 confirms point lies on y-axis. 5(-1) + 5 = 0. Matches.',
          commonTrap: 'Assuming ratio m : n and getting stuck with two variables instead of ratio k : 1.'
        }
      ],
      commonMisconceptions: [
        'Multiplying m1 with x1 and m2 with x2 (Criss-cross rule: m1 multiplies the second point B, m2 multiplies the first point A!).'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Standard 3-mark board question in every paper.',
      sourceTrace: 'NCERT Ch 7 Exercise 7.2'
    }
  ],
  formulas: [
    {
      id: 'ch7_f1',
      name: 'Distance Formula',
      formula: 'd = \\sqrt{(x₂ - x₁)² + (y₂ - y₁)²}',
      symbolMeanings: [
        { symbol: '(x1, y1), (x2, y2)', meaning: 'Coordinates of endpoints P and Q' },
        { symbol: 'd', meaning: 'Straight line Euclidean distance' }
      ],
      whenToUse: 'Calculating length of a side, testing collinearity, finding radius from center and point on circle.',
      conditions: ['Real Cartesian coordinates'],
      commonSubstitutions: ['Distance from origin: d = √(x² + y²)'],
      miniExample: {
        question: 'Find the distance of point P(3, -4) from the origin.',
        substitution: 'd = √(3² + (-4)²) = √(9 + 16) = √25',
        result: 'd = 5 units'
      },
      commonMistakes: ['Writing (-4)² as -16 instead of +16.'],
      memoryTrick: 'Square the dx, square the dy, add them up and root the pie!',
      sourceTrace: 'NCERT Formula 7.1'
    },
    {
      id: 'ch7_f2',
      name: 'Section Formula (Internal Division)',
      formula: 'P(x, y) = \\left( \\frac{m₁ x₂ + m₂ x₁}{m₁ + m₂}, \\; \\frac{m₁ y₂ + m₂ y₁}{m₁ + m₂} \\right)',
      symbolMeanings: [
        { symbol: 'm1 : m2', meaning: 'Ratio in which point P divides segment AB internally' },
        { symbol: '(x1, y1), (x2, y2)', meaning: 'Coordinates of point A and point B respectively' }
      ],
      whenToUse: 'When a point divides a segment into parts, or determining ratio.',
      conditions: ['m1 + m2 ≠ 0, internal division'],
      commonSubstitutions: ['Let m1 : m2 = k : 1, then P = ((kx₂ + x₁)/(k + 1), (ky₂ + y₁)/(k + 1))'],
      miniExample: {
        question: 'Find the midpoint of A(4, 6) and B(2, -2).',
        substitution: 'M = ((4 + 2)/2, (6 + (-2))/2) = (6/2, 4/2)',
        result: 'M = (3, 2)'
      },
      commonMistakes: ['Multiplying m1 by x1 instead of x2 (Criss-Cross!).'],
      memoryTrick: 'Criss-cross: Far ratio times far point, near ratio times near point!',
      sourceTrace: 'NCERT Formula 7.2'
    }
  ],
  methodGuides: [
    {
      id: 'ch7_m1',
      questionPattern: 'Finding Fourth Vertex of a Parallelogram',
      recognitionClues: ['If (x1, y1), (x2, y2), (x3, y3), and (x, y) are the vertices of a parallelogram taken in order, find (x, y)'],
      requiredConcept: 'Diagonals of a parallelogram bisect each other (share the identical midpoint).',
      whatIsGiven: 'Three vertices of parallelogram ABCD in order, one unknown vertex.',
      whatMustBeFound: 'Coordinates of the missing fourth vertex.',
      chosenMethod: 'Midpoint of diagonal AC = Midpoint of diagonal BD (equate x-coordinates and y-coordinates).',
      executionSteps: [
        'Step 1: Write down coordinates of vertices A, B, C, D in cyclic order.',
        'Step 2: Note the two diagonals: AC and BD.',
        'Step 3: Calculate midpoint of AC: M_AC = ((x_A + x_C)/2, (y_A + y_C)/2).',
        'Step 4: Calculate midpoint of BD: M_BD = ((x_B + x_D)/2, (y_B + y_D)/2).',
        'Step 5: Equate: (x_A + x_C)/2 = (x_B + x_D)/2 ⟹ x_A + x_C = x_B + x_D.',
        'Step 6: Solve for x_D: x_D = x_A + x_C - x_B. Similarly, y_D = y_A + y_C - y_B.'
      ],
      verificationMethod: 'Check that distance AB = distance CD and distance BC = distance AD.',
      commonTrap: 'Using distance formula to set AB = CD and BC = AD, resulting in complicated non-linear equations that waste 15 minutes!',
      exemplarQuestion: 'If A(1, 2), B(4, y), C(x, 6) and D(3, 5) are the vertices of a parallelogram taken in order, find x and y.',
      exemplarAnswer: 'Midpoint of AC = ((1 + x)/2, (2 + 6)/2) = ((1 + x)/2, 4). Midpoint of BD = ((4 + 3)/2, (y + 5)/2) = (7/2, (y + 5)/2). Equating: (1 + x)/2 = 7/2 ⟹ x = 6. (y + 5)/2 = 4 ⟹ y = 3. Hence x = 6, y = 3.'
    },
    {
      id: 'ch7_m2',
      questionPattern: 'Points of Trisection of a Line Segment',
      recognitionClues: ['Find the coordinates of the points of trisection of the line segment joining...'],
      requiredConcept: 'Trisection means dividing a segment into 3 equal parts using two points P and Q.',
      whatIsGiven: 'Endpoints A(x1, y1) and B(x2, y2).',
      whatMustBeFound: 'Coordinates of trisection points P and Q.',
      chosenMethod: 'P divides AB in 1 : 2. Q is then simply the midpoint of PB (or divides AB in 2 : 1).',
      executionSteps: [
        'Step 1: Point P divides segment AB internally in ratio 1 : 2.',
        'Step 2: Use section formula for P: P = ((1x₂ + 2x₁)/(1 + 2), (1y₂ + 2y₁)/(1 + 2)).',
        'Step 3: Point Q divides segment AB internally in ratio 2 : 1 (or easier: Q is midpoint of PB).',
        'Step 4: Use midpoint formula for Q between P and B: Q = ((x_P + x2)/2, (y_P + y2)/2).',
        'Step 5: State coordinates of both points clearly.'
      ],
      verificationMethod: 'Check that AP = PQ = QB using distance formula.',
      commonTrap: 'Assuming trisection means dividing into 3 points (it requires only TWO points to cut into 3 pieces!).',
      exemplarQuestion: 'Find the coordinates of the points of trisection of line segment joining A(2, -2) and B(-7, 4).',
      exemplarAnswer: 'P divides AB in 1:2: P = ((1(-7) + 2(2))/3, (1(4) + 2(-2))/3) = ((-7+4)/3, (4-4)/3) = (-1, 0). Q is midpoint of PB: Q = ((-1 + (-7))/2, (0 + 4)/2) = (-4, 2). Trisection points are (-1, 0) and (-4, 2).'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch7_q1',
      chapterId: 7,
      topic: 'Distance from Origin',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'The distance of the point P(-6, 8) from the origin is:',
      options: ['8 units', '2√7 units', '10 units', '6 units'],
      correctAnswer: '10 units',
      marks: 1,
      hints: ['Distance from origin = √(x² + y²).'],
      solutionSteps: [
        'd = √((-6)² + 8²)',
        'd = √(36 + 64) = √(100) = 10 units.'
      ],
      commonTrap: 'Confusing distance with coordinates or taking √(8² - (-6)²).',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 2023 MCQ',
      conceptId: 'ch7_c1'
    },
    {
      id: 'ch7_q2',
      chapterId: 7,
      topic: 'Midpoint Coordinates',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'If the midpoint of the line segment joining A(x/2, 4) and B(-2, 4) is (1, 4), then the value of x is:',
      options: ['2', '-2', '6', '8'],
      correctAnswer: '8',
      marks: 1,
      hints: ['Use the midpoint formula for the x-coordinate: x_mid = (x₁ + x₂) / 2.'],
      solutionSteps: [
        'Step 1: Write the coordinates of the endpoints and the midpoint:',
        'Point A: (x₁, y₁) = (x/2, 4)',
        'Point B: (x₂, y₂) = (-2, 4)',
        'Midpoint M: (x_mid, y_mid) = (1, 4)',
        'Step 2: Recall the midpoint formula for the x-coordinate:',
        'x_mid = (x₁ + x₂) / 2',
        'Step 3: Substitute the known values into the formula:',
        '1 = ((x/2) + (-2)) / 2',
        'Step 4: Multiply both sides by 2 to clear the outer denominator:',
        '2 = (x/2) - 2',
        'Step 5: Add 2 to both sides:',
        'x/2 = 4',
        'Step 6: Multiply both sides by 2 to solve for x:',
        'x = 4 × 2 = 8',
        'Step 7: Verification: ((8/2) + (-2)) / 2 = (4 - 2) / 2 = 2/2 = 1 (matches midpoint x-coordinate).'
      ],
      commonTrap: 'Careless arithmetic when clearing the double fractions; remember that (x/2 - 2)/2 = 1 gives x/2 = 4, so x = 8.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Standard Exemplar',
      conceptId: 'ch7_c2'
    },
    {
      id: 'ch7_q3',
      chapterId: 7,
      topic: 'Section Formula with k : 1 Ratio',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also, find the coordinates of the point of division.',
      correctAnswer: 'Ratio = 1 : 1, Point = (-3/2, 0)',
      marks: 3,
      hints: ['On the x-axis, y = 0. Set (k(5) + 1(-5))/(k + 1) = 0 to find k.'],
      solutionSteps: [
        'Let the ratio be k : 1 and point on x-axis be P(x, 0).',
        'y-coordinate of P: (k(5) + 1(-5)) / (k + 1) = 0',
        '5k - 5 = 0 ⟹ k = 1. So ratio is 1 : 1 (P is the midpoint!).',
        'x-coordinate of P: (1(-4) + 1(1)) / (1 + 1) = (-4 + 1) / 2 = -3/2.',
        'Therefore, the point of division is (-3/2, 0).'
      ],
      commonTrap: 'Setting x = 0 instead of y = 0 for point on x-axis.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 7 Ex 7.2 Q5',
      conceptId: 'ch7_c2'
    },
    {
      id: 'ch7_q4',
      chapterId: 7,
      topic: 'Collinearity Verification',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear.',
      correctAnswer: 'Not Collinear: AB + BC ≠ AC',
      marks: 3,
      hints: ['Find distances AB, BC, AC using distance formula. Check if the sum of any two equals the third.'],
      solutionSteps: [
        'Let A(1, 5), B(2, 3), and C(-2, -11).',
        'AB = √((2 - 1)² + (3 - 5)²) = √(1 + 4) = √5 units.',
        'BC = √((-2 - 2)² + (-11 - 3)²) = √((-4)² + (-14)²) = √(16 + 196) = √(212) = 2 × √(53) units.',
        'AC = √((-2 - 1)² + (-11 - 5)²) = √((-3)² + (-16)²) = √(9 + 256) = √(265) units.',
        'Since √5 + 2 × √(53) ≠ √(265), the sum of any two distances is not equal to the third distance.',
        'Therefore, the points A, B, and C are not collinear.'
      ],
      commonTrap: 'Adding square roots directly: √5 + √(212) ≠ √(217).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 7 Ex 7.1 Q3',
      conceptId: 'ch7_c1'
    },
    {
      id: 'ch7_q5',
      chapterId: 7,
      topic: 'Challenge Centroid & Trisection Problem',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'If the vertices of a triangle are (1, a), (2, b) and (c², 3), and its centroid is at the origin (0, 0), find the values of a, b, and c.',
      correctAnswer: 'a + b = -3, c = ±√3 (imaginary c not allowed, so c² = -3 gives no real c, thus x-sum: 1 + 2 + c² = 0 ⇒ c² = -3. If first point is (-1, a), 1+2+c²=3 gives c=0)',
      marks: 5,
      hints: ['Centroid G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3) = (0, 0). Equate both x and y sums to 0.'],
      solutionSteps: [
        'Centroid G = ((1 + 2 + c) / 3, (a + b + 3) / 3) = (0, 0).',
        'For x-coordinate: 3 + c = 0 ⟹ c = -3.',
        'For y-coordinate: a + b + 3 = 0 ⟹ a + b = -3.'
      ],
      commonTrap: 'Dividing by 2 instead of 3 for centroid coordinates.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Challenge Board Question',
      conceptId: 'ch7_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch7_pyq1',
      year: 'CBSE 2024 / 2023 / 2020',
      marks: 3,
      topic: 'Equidistant Point on Axis',
      conceptTested: 'Distance formula with equidistant condition',
      question: 'Find a point on the x-axis which is equidistant from the points A(2, -5) and B(-2, 9).',
      markingSchemeBreakdown: [
        { step: 'Assuming point P(x, 0) on x-axis', marks: 0.5 },
        { step: 'Equating PA² = PB² and substituting coordinates', marks: 1.0 },
        { step: 'Expanding and simplifying algebraic equation', marks: 1.0 },
        { step: 'Final value x = -7 and writing point (-7, 0)', marks: 0.5 }
      ],
      fullSolution: 'Let the required point on the x-axis be P(x, 0).\nGiven PA = PB ⟹ PA² = PB².\n\n(x - 2)² + (0 - (-5))² = (x - (-2))² + (0 - 9)²\n(x - 2)² + 25 = (x + 2)² + 81\nx² - 4x + 4 + 25 = x² + 4x + 4 + 81\nx² - 4x + 29 = x² + 4x + 85\n-4x - 4x = 85 - 29\n-8x = 56 ⟹ x = -7.\n\nTherefore, the point on the x-axis is (-7, 0).',
      commonMistake: 'Forgetting to write the final answer as a coordinate pair (-7, 0) and leaving it as x = -7.',
      frequencyTrend: 'Appeared 5 times in the last 7 years across all Delhi and Outside Delhi sets.',
      source: 'CBSE Official Board Examination'
    },
    {
      id: 'ch7_pyq2',
      year: 'CBSE 2022 / 2019',
      marks: 3,
      topic: 'Parallelogram Fourth Vertex',
      conceptTested: 'Midpoint property of parallelogram diagonals',
      question: 'If the points A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a parallelogram, taken in order, find the value of p.',
      markingSchemeBreakdown: [
        { step: 'Stating diagonals of parallelogram bisect each other', marks: 0.5 },
        { step: 'Finding midpoint of AC: ((6 + 9)/2, (1 + 4)/2) = (15/2, 5/2)', marks: 1.0 },
        { step: 'Finding midpoint of BD: ((8 + p)/2, (2 + 3)/2) = ((8 + p)/2, 5/2)', marks: 1.0 },
        { step: 'Equating x-coordinates: (8 + p)/2 = 15/2 ⟹ p = 7', marks: 0.5 }
      ],
      fullSolution: 'We know that the diagonals of a parallelogram bisect each other.\nTherefore, Midpoint of diagonal AC = Midpoint of diagonal BD.\n\nMidpoint of AC = ((6 + 9)/2, (1 + 4)/2) = (15/2, 5/2)\nMidpoint of BD = ((8 + p)/2, (2 + 3)/2) = ((8 + p)/2, 5/2)\n\nEquating the x-coordinates:\n(8 + p) / 2 = 15 / 2\n8 + p = 15 ⟹ p = 7.\n\nHence, the value of p is 7.',
      commonMistake: 'Using distance formula to solve for p, which takes 4x longer and risks quadratic calculation errors.',
      frequencyTrend: 'Very popular CBSE 3-mark question.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch7_err1',
      title: 'Mixing up x and y in Section Formula',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Student writes x = (m₁y₂ + m₂y₁)/(m1 + m2).',
      whyItIsWrong: 'x-coordinates are calculated exclusively from x1 and x2. y-coordinates are calculated exclusively from y1 and y2.',
      correctWorking: 'x = (m₁x₂ + m₂x₁)/(m1 + m2) and y = (m₁y₂ + m₂y₁)/(m1 + m2).',
      howToAvoid: 'Always separate your work into two distinct columns: one for x, one for y.',
      retryQuestion: {
        question: 'Find the midpoint of (2, 8) and (6, 4).',
        correctAnswer: '(4, 6)',
        explanation: 'x = (2+6)/2 = 4, y = (8+4)/2 = 6.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Distance formula: d = √((x₂ - x₁)² + (y₂ - y₁)²). Distance from origin = √(x² + y²).',
      'On x-axis, y = 0. On y-axis, x = 0.',
      'Section formula: P = ((m₁x₂ + m₂x₁)/(m1 + m2), (m₁y₂ + m₂y₁)/(m1 + m2)). Always use ratio k : 1 when ratio is unknown.',
      'Midpoint: M = ((x1 + x2)/2, (y1 + y2)/2).',
      'Parallelogram 4th vertex shortcut: Midpoint of AC = Midpoint of BD (x_A + x_C = x_B + x_D).',
      'Centroid of triangle: G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3).'
    ],
    speedTips: [
      'Distance shortcut: If dx = 3, dy = 4, distance is immediately 5 (3-4-5 Pythagorean triplet).',
      'Ratio by x-axis: ratio k = -y1 / y2. Ratio by y-axis: ratio k = -x1 / x2 (instant 5-second MCQ trick!).',
      'Fourth vertex of parallelogram: D = A + C - B.'
    ],
    lastDayChecklist: [
      'Are you working with PA² = PB² to eliminate the square root right away in equidistant problems?',
      'Did you remember that m1 multiplies the FAR coordinate (x2) in section formula?',
      'Are you using the midpoint shortcut for parallelogram fourth vertex?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch7_d1',
          chapterId: 7,
          topic: 'Distance from Axis',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The distance of the point P(2, 3) from the x-axis is:',
          correctAnswer: '3 units',
          marks: 1,
          hints: ['Distance from x-axis is the absolute value of the y-coordinate.'],
          solutionSteps: ['Distance from the x-axis is |y| = |3| = 3 units.'],
          commonTrap: 'Writing 2 units (which is the distance from the y-axis, not x-axis).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2020 MCQ',
          conceptId: 'ch7_c1'
        },
        {
          id: 'ch7_d2',
          chapterId: 7,
          topic: 'Midpoint Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the midpoint of the line segment joining P(-2, 8) and Q(-6, -4).',
          correctAnswer: '(-4, 2)',
          marks: 2,
          hints: ['M = ((x1 + x2)/2, (y1 + y2)/2).'],
          solutionSteps: [
            'x = (-2 + (-6)) / 2 = -8 / 2 = -4',
            'y = (8 + (-4)) / 2 = 4 / 2 = 2',
            'Midpoint = (-4, 2).'
          ],
          commonTrap: 'Sign error when adding -2 and -6.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch7_c2'
        },
        {
          id: 'ch7_d3',
          chapterId: 7,
          topic: 'Trisection Ratio',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A point P divides the line segment AB in the ratio 1 : 2. If A is (2, 1) and B is (5, -8), find the coordinates of P.',
          correctAnswer: '(3, -2)',
          marks: 2,
          hints: ['P = ((1(5) + 2(2))/3, (1(-8) + 2(1))/3).'],
          solutionSteps: [
            'x = (1(5) + 2(2)) / (1 + 2) = (5 + 4) / 3 = 9 / 3 = 3',
            'y = (1(-8) + 2(1)) / (1 + 2) = (-8 + 2) / 3 = -6 / 3 = -2',
            'P = (3, -2).'
          ],
          commonTrap: 'Multiplying 1 with 2 and 2 with 5.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 7 Ex 7.2',
          conceptId: 'ch7_c2'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch7_ct1',
          chapterId: 7,
          topic: 'Distance Formula & Collinearity',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the value of y for which the distance between the points P(2, -3) and Q(10, y) is 10 units.',
          correctAnswer: '3 or -9',
          marks: 3,
          hints: ['PQ² = (10 - 2)² + (y - (-3))² = 10² = 100.'],
          solutionSteps: [
            '(10 - 2)² + (y + 3)² = 10²',
            '8² + (y + 3)² = 100',
            '64 + (y + 3)² = 100',
            '(y + 3)² = 36 ⟹ y + 3 = ±6',
            'Case 1: y + 3 = 6 ⟹ y = 3',
            'Case 2: y + 3 = -6 ⟹ y = -9',
            'Values of y are 3 or -9.'
          ],
          commonTrap: 'Taking only the positive square root (+6) and missing y = -9.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 7 Ex 7.1 Q8',
          conceptId: 'ch7_c1'
        },
        {
          id: 'ch7_ct2',
          chapterId: 7,
          topic: 'Ratio Division by Line',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'Find the ratio in which the line 2x + y - 4 = 0 divides the line segment joining the points A(2, -2) and B(3, 7).',
          correctAnswer: '2 : 9',
          marks: 3,
          hints: ['Express coordinates of P in terms of k: ((3k+2)/(k+1), (7k-2)/(k+1)). Substitute into line equation.'],
          solutionSteps: [
            'Let the ratio be k : 1. Point of division P = ((3k + 2)/(k + 1), (7k - 2)/(k + 1)).',
            'Since P lies on line 2x + y - 4 = 0:',
            '2[(3k + 2)/(k + 1)] + [(7k - 2)/(k + 1)] - 4 = 0',
            'Multiply entire equation by (k + 1):',
            '2(3k + 2) + (7k - 2) - 4(k + 1) = 0',
            '6k + 4 + 7k - 2 - 4k - 4 = 0',
            '9k - 2 = 0 ⟹ 9k = 2 ⟹ k = 2/9.',
            'Therefore, the ratio is 2 : 9.'
          ],
          commonTrap: 'Forgetting to multiply -4 by (k + 1) when clearing the denominator.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 7 Optional Exercise Q1',
          conceptId: 'ch7_c2'
        },
        {
          id: 'ch7_ct3',
          chapterId: 7,
          topic: 'Centroid and Coordinates',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Two vertices of a triangle are (3, -5) and (-7, 4). If its centroid is (2, -1), find the third vertex.',
          correctAnswer: '(10, -2)',
          marks: 4,
          hints: ['G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3).'],
          solutionSteps: [
            'Let the third vertex be C(x, y).',
            'x-coordinate: (3 + (-7) + x) / 3 = 2 ⟹ -4 + x = 6 ⟹ x = 10.',
            'y-coordinate: (-5 + 4 + y) / 3 = -1 ⟹ -1 + y = -3 ⟹ y = -2.',
            'The third vertex is (10, -2).'
          ],
          commonTrap: 'Arithmetic error when setting (-4 + x)/3 = 2.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Board Question',
          conceptId: 'ch7_c2'
        }
      ]
    }
  ]
};
