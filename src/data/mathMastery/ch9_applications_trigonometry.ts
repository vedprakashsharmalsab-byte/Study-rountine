import { ChapterData } from './types';

export const CH9_DATA: ChapterData = {
  chapterNumber: 9,
  chapterName: 'Some Applications of Trigonometry',
  weightageEstimate: '4–5 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Some Applications of Trigonometry (commonly called Heights & Distances) is the pure real-world application of trigonometry. Students calculate towering heights of monuments, widths of wide rivers, distances between ships at sea, and cloud altitudes using lines of sight, angles of elevation (looking up), and angles of depression (looking down) without ever physically climbing or measuring across.',
    prerequisites: [
      'Trigonometric ratios (tan = P/B, sin = P/H, cos = B/H)',
      'Exact standard values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3',
      'Alternate interior angles theorem for parallel lines',
      'Rationalizing denominators involving √3'
    ],
    coreIdeas: [
      'Line of Sight: The straight line drawn from the eye of an observer to the point in the object viewed by the observer.',
      'Angle of Elevation: The angle formed by the line of sight with the horizontal when the point being viewed is ABOVE the horizontal level (looking UP).',
      'Angle of Depression: The angle formed by the line of sight with the horizontal when the point being viewed is BELOW the horizontal level (looking DOWN).',
      'The Alternate Angles Axiom: The angle of depression of an object from the observer ALWAYS equals the angle of elevation of the observer from the object because horizontal sight-lines are strictly parallel.',
      'The 45° Pivot Hack: Whenever a 45° angle appears, tan 45° = 1, which means Perpendicular = Base instantly! This eliminates one variable in 2 seconds.',
      'The 30°-60° Complementary Ratio: tan 30° = 1/√3 and tan 60° = √3. If angle changes from 30° to 60° as you walk closer, the distance walked relates directly to the height.'
    ],
    keyRelationships: [
      'If two angles of elevation from points at distances a and b from the base of a tower are complementary (alpha + beta = 90°), the height of the tower is ALWAYS h = sqrt(a * b).',
      'In a 30°-60°-90° right triangle, the sides are in the fixed ratio: opposite to 30° is 1, opposite to 60° is √3, and hypotenuse is 2.',
      'In a 45°-45°-90° right triangle, the legs are equal (1 : 1) and hypotenuse is √2.'
    ],
    frequentMisunderstandings: [
      'Drawing the angle of depression between the VERTICAL tower and the line of sight! (Angle of depression is strictly measured between the HORIZONTAL line and the line of sight!).',
      'Forgetting to add the observer height: If an observer of height 1.5 m is standing 28.5 m away from a 30 m chimney, the triangle base is 28.5 m and triangle height is 30 - 1.5 = 28.5 m.',
      'Leaving √3 in the denominator without rationalizing (e.g. leaving 20/√3 instead of 20√3 / 3).'
    ],
    examImportanceEvidence: 'Guaranteed 4 or 5 marks in Section D or Case Study in every CBSE paper! Typically appears as a 4-mark Case-Based question or 5-mark Long Answer with a two-triangle diagram.'
  },
  concepts: [
    {
      id: 'ch9_c1',
      title: 'Angle of Elevation & 1-Triangle Scenarios',
      topic: 'Elevation Angle & Direct Heights',
      simpleExplanation: 'When you stand on the ground and tilt your head UP to gaze at the top of a skyscraper, the tilt angle from the flat horizontal ground is the Angle of Elevation.',
      exactMathIdea: 'The angle of elevation of the point viewed is the angle formed by the line of sight with the horizontal plane for an object situated above the horizontal line of sight.',
      formulaOrTheorem: '\\tan\\theta = \\frac{\\text{Height of Object}}{\\text{Distance from Base}} = \\frac{h}{d}',
      whenToUse: 'When finding the height of a tree, broken tree, shadow length, or length of a ladder leaning against a wall.',
      recognitionClues: [
        'The angle of elevation of the top of a tower from a point on the ground',
        'A tree breaks due to storm and the broken part bends',
        'A ladder leaning against a wall makes an angle of 60 degrees'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Direct Tower Height from Ground',
          question: 'The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. Find the height of the tower.',
          given: 'Distance from foot d = 30 m, angle of elevation θ = 30°.',
          toFind: 'Height of the tower h.',
          methodSelectionReason: 'Right triangle formed by tower (perpendicular), ground (base), and line of sight. tan θ = h/d.',
          stepByStepSolution: [
            'Let AB be the tower of height h metres, and C be the point on the ground such that BC = 30 m.',
            'Angle of elevation angle ACB = 30°.',
            'In right-angled Triangle ABC:',
            'tan 30° = AB / BC',
            '1 / √3 = h / 30',
            'h = 30 / √3',
            'Rationalize the denominator by multiplying numerator and denominator by √3:',
            'h = (30 * √3) / 3 = 10√3 m.'
          ],
          finalAnswer: 'Height of tower = 10√3 m (approx 17.32 m)',
          verificationCheck: 'h / d = 10√3 / 30 = √3 / 3 = 1 / √3 = tan 30°. Exact match!',
          commonTrap: 'Using sin 30° instead of tan 30° when hypotenuse is not involved.'
        },
        {
          level: 'standard',
          title: 'Broken Tree Stem Problem',
          question: 'A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the total height of the tree.',
          given: 'Distance from base to top touching ground BC = 8 m, angle = 30°.',
          toFind: 'Total height of the tree (AB + AC, where AC is the broken part).',
          methodSelectionReason: 'Total tree height = standing part AB + fallen hypotenuse AC. Calculate AB using tan 30° and AC using cos 30°.',
          stepByStepSolution: [
            'Let standing vertical part be AB and broken leaning part be AC. Total height = AB + AC.',
            'In right-angled Triangle ABC at B:',
            'tan 30° = AB / BC ⟹ 1 / √3 = AB / 8 ⟹ AB = 8 / √3 m.',
            'cos 30° = BC / AC ⟹ √3 / 2 = 8 / AC ⟹ AC = 16 / √3 m.',
            'Total height of tree = AB + AC = 8 / √3 + 16 / √3 = 24 / √3 m.',
            'Rationalize: (24 * √3) / 3 = 8√3 m.'
          ],
          finalAnswer: 'Total height of tree = 8√3 m',
          verificationCheck: 'AB^2 + BC^2 = (8/√3)^2 + 8^2 = 64/3 + 64 = 256/3 = (16/√3)^2 = AC^2. Pythagorean theorem holds!',
          commonTrap: 'Finding only AB = 8/√3 m and forgetting to add the broken hypotenuse part AC.'
        }
      ],
      commonMisconceptions: [
        'Assuming the broken tree problem only requires finding the standing vertical segment.'
      ],
      priority: 'Must Master',
      cbseFrequency: 'The broken tree problem is one of the top 3 most repeated questions in CBSE history.',
      sourceTrace: 'NCERT Ch 9 Exercise 9.1 Question 2'
    },
    {
      id: 'ch9_c2',
      title: 'Angle of Depression & 2-Triangle Scenarios',
      topic: 'Depression Angle & Dual Triangle Systems',
      simpleExplanation: 'When you stand on top of a cliff and look DOWN at a boat, the angle between your straight horizontal eyesight and your downward gaze is the Angle of Depression. By alternate interior angles, it equals the angle looking up from the boat!',
      exactMathIdea: 'The angle of depression is the angle formed by the line of sight with the horizontal line drawn through the eye of the observer when the object is lower than the observer. Since horizontal lines are parallel, Angle of Depression = Angle of Elevation.',
      formulaOrTheorem: '\\angle \\text{ of Depression} = \\angle \\text{ of Elevation (by Alternate Interior Angles)}',
      whenToUse: 'When an observer is positioned on top of a lighthouse, building, or aeroplane looking down at one or two objects.',
      recognitionClues: [
        'From the top of a 75m high lighthouse, the angles of depression of two ships',
        'From the top of a building, the angles of depression of top and bottom of a tower',
        'Two poles of equal heights on either side of a road'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Two Ships on Same Side of Lighthouse',
          question: 'As observed from the top of a 75 m high lighthouse from sea-level, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.',
          given: 'Lighthouse height AB = 75 m. Angles of depression are 45° (nearer ship D) and 30° (farther ship C).',
          toFind: 'Distance between ships CD.',
          methodSelectionReason: 'Use two right triangles: Triangle ABD (45°) to find BD, then Triangle ABC (30°) to find BC. Distance CD = BC - BD.',
          stepByStepSolution: [
            'Let AB be the lighthouse = 75 m.',
            'Let D and C be the positions of the two ships. Angles of depression are 45° and 30°, so angle ADB = 45° and angle ACB = 30° (alternate interior angles).',
            'In right-angled Triangle ABD (45° angle):',
            'tan 45° = AB / BD ⟹ 1 = 75 / BD ⟹ BD = 75 m.',
            'In right-angled Triangle ABC (30° angle):',
            'tan 30° = AB / BC ⟹ 1 / √3 = 75 / BC ⟹ BC = 75√3 m.',
            'Distance between the two ships CD = BC - BD:',
            'CD = 75√3 - 75 = 75(√3 - 1) m.'
          ],
          finalAnswer: 'Distance between ships = 75(√3 - 1) m (approx 54.9 m)',
          verificationCheck: 'Nearer ship has larger angle (45°), farther ship has smaller angle (30°). 75√3 > 75. Correct.',
          commonTrap: 'Swapping the angles (assigning 30° to the closer ship and 45° to the farther ship).'
        }
      ],
      commonMisconceptions: [
        'Believing the angle of depression is inside the triangle between the vertical lighthouse and the hypotenuse.'
      ],
      priority: 'Must Master',
      cbseFrequency: 'Standard 4 or 5-mark question in almost every board paper.',
      sourceTrace: 'NCERT Ch 9 Exercise 9.1 Question 13'
    }
  ],
  formulas: [
    {
      id: 'ch9_f1',
      name: 'Heights and Distances Fundamental Ratios',
      formula: '\\tan\\theta = \\frac{h}{d}, \\quad \\sin\\theta = \\frac{h}{L}, \\quad \\cos\\theta = \\frac{d}{L}',
      symbolMeanings: [
        { symbol: 'h', meaning: 'Perpendicular height of object' },
        { symbol: 'd', meaning: 'Horizontal distance along ground' },
        { symbol: 'L', meaning: 'Slant distance / Length of line of sight or ladder' },
        { symbol: 'θ', meaning: 'Angle of elevation or depression' }
      ],
      whenToUse: 'Every heights and distances problem.',
      conditions: ['Flat ground and vertical objects perpendicular to ground (90°)'],
      commonSubstitutions: [
        'tan 30° = 1/√3',
        'tan 45° = 1 (⟹ h = d)',
        'tan 60° = √3 (⟹ h = d√3)'
      ],
      miniExample: {
        question: 'If shadow length equals tower height, what is the angle of elevation of the sun?',
        substitution: 'tan θ = h / d = h / h = 1 ⟹ θ = 45°',
        result: 'θ = 45°'
      },
      commonMistakes: ['Confusing tan 30° (1/√3) with tan 60° (√3).'],
      memoryTrick: 'Smaller angle = Smaller fraction (30° is 1/√3, 60° is √3)!',
      sourceTrace: 'NCERT Ch 9 Summary'
    },
    {
      id: 'ch9_f2',
      name: 'Complementary Angles Tower Height Formula',
      formula: 'h = \\sqrt{a \\cdot b}',
      symbolMeanings: [
        { symbol: 'h', meaning: 'Height of tower' },
        { symbol: 'a, b', meaning: 'Distances of the two observation points from the foot of tower' }
      ],
      whenToUse: 'When the angles of elevation from two points are given as complementary (sum = 90°).',
      conditions: ['Points are on the same straight line with the foot of the tower', 'Angles α and β satisfy α + β = 90°'],
      commonSubstitutions: ['tan α = h/a and tan β = tan(90° - α) = cot α = h/b. Multiply: tan α * cot α = (h/a)(h/b) ⟹ 1 = h^2 / (ab) ⟹ h = sqrt(ab).'],
      miniExample: {
        question: 'The angles of elevation from points at distances 4 m and 9 m from the base of a tower are complementary. Find tower height.',
        substitution: 'h = sqrt(4 * 9) = sqrt(36) = 6 m',
        result: 'h = 6 m'
      },
      commonMistakes: ['Adding the distances instead of multiplying them under the square root.'],
      memoryTrick: 'Complementary roots multiply: Height is geometric mean of distances!',
      sourceTrace: 'NCERT Ch 9 Ex 9.1 Question 16'
    }
  ],
  methodGuides: [
    {
      id: 'ch9_m1',
      questionPattern: 'Two Poles of Equal Height on Opposite Sides of a Road',
      recognitionClues: ['Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide'],
      requiredConcept: 'Equal height h, two right triangles whose horizontal base segments add up to total road width W.',
      whatIsGiven: 'Total road width W = 80 m, equal height h, angles 60° and 30° from an intermediate point.',
      whatMustBeFound: 'Height of poles h and distance of the point from both poles.',
      chosenMethod: 'Let distance from first pole be x, then distance from second pole is (80 - x). Set up tan 60° and tan 30° and equate h.',
      executionSteps: [
        'Step 1: Draw two vertical poles AB and CD of equal height h perpendicular to road BD of width 80 m.',
        'Step 2: Let P be the observation point on BD. Let BP = x, then PD = 80 - x.',
        'Step 3: In Triangle ABP: tan 60° = AB / BP ⟹ √3 = h / x ⟹ h = x√3 ... (1).',
        'Step 4: In Triangle CDP: tan 30° = CD / PD ⟹ 1 / √3 = h / (80 - x) ⟹ h = (80 - x) / √3 ... (2).',
        'Step 5: Equate both expressions for h: x√3 = (80 - x) / √3.',
        'Step 6: Cross-multiply: 3x = 80 - x ⟹ 4x = 80 ⟹ x = 20 m.',
        'Step 7: Distance from first pole = 20 m; distance from second pole = 80 - 20 = 60 m.',
        'Step 8: Height of poles h = x√3 = 20√3 m.'
      ],
      verificationMethod: 'h / 20 = 20√3 / 20 = √3 = tan 60°. h / 60 = 20√3 / 60 = √3 / 3 = 1/√3 = tan 30°. Matches!',
      commonTrap: 'Assuming P is the exact midpoint (40 m). The point is closer to the pole with the larger angle (60°)!',
      exemplarQuestion: 'Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30°, respectively. Find the height of the poles and the distances of the point from the poles.',
      exemplarAnswer: 'Height of poles = 20√3 m (34.64 m). Distances of the point from poles are 20 m and 60 m.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch9_q1',
      chapterId: 9,
      topic: 'Shadow Ratio',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'If the length of the shadow of a tower is √3 times the height of the tower, then the angle of elevation of the sun is:',
      options: ['30°', '45°', '60°', '90°'],
      correctAnswer: '30°',
      marks: 1,
      hints: ['Let height be h, shadow be h√3. tan θ = h / (h√3) = 1/√3.'],
      solutionSteps: [
        'tan θ = Height / Shadow = h / (h√3) = 1 / √3',
        'Since tan 30° = 1 / √3, the angle of elevation is 30°.'
      ],
      commonTrap: 'Inverting the ratio and concluding 60°.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 2023 MCQ',
      conceptId: 'ch9_c1'
    },
    {
      id: 'ch9_q2',
      chapterId: 9,
      topic: 'Kite String Problem',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string, assuming no slack.',
      correctAnswer: '40√3 m',
      marks: 2,
      hints: ['Here height is Perpendicular = 60 m, string is Hypotenuse L. Use sin 60° = P/H.'],
      solutionSteps: [
        'sin 60° = Perpendicular / Hypotenuse = 60 / L',
        '√3 / 2 = 60 / L',
        'L = (60 * 2) / √3 = 120 / √3',
        'Rationalize: L = (120 * √3) / 3 = 40√3 m.'
      ],
      commonTrap: 'Using tan 60° instead of sin 60° (string length is the hypotenuse, not the base).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 9 Ex 9.1 Q5',
      conceptId: 'ch9_c1'
    },
    {
      id: 'ch9_q3',
      chapterId: 9,
      topic: 'Statue on Pedestal',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A 1.6 m tall statue stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and from the same point the angle of elevation of the top of the pedestal is 45°. Find the height of the pedestal.',
      correctAnswer: '0.8(√3 + 1) m',
      marks: 3,
      hints: ['Let pedestal height be h. Angle 45° gives distance d = h. In 60° triangle, tan 60° = (h + 1.6)/h.'],
      solutionSteps: [
        'Let height of pedestal be h, and distance of point on ground be d.',
        'From the 45° angle to the top of pedestal: tan 45° = h / d ⟹ 1 = h / d ⟹ d = h.',
        'From the 60° angle to the top of statue: tan 60° = (h + 1.6) / d',
        'Substitute d = h: √3 = (h + 1.6) / h',
        'h√3 = h + 1.6 ⟹ h(√3 - 1) = 1.6',
        'h = 1.6 / (√3 - 1)',
        'Rationalize denominator: h = 1.6(√3 + 1) / ((√3 - 1)(√3 + 1)) = 1.6(√3 + 1) / 2 = 0.8(√3 + 1) m.'
      ],
      commonTrap: 'Leaving the answer un-rationalized as 1.6 / (√3 - 1).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 9 Ex 9.1 Q8',
      conceptId: 'ch9_c2'
    },
    {
      id: 'ch9_q4',
      chapterId: 9,
      topic: 'Complementary Angles Tower Proof',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'The angles of elevation of the top of a tower from two points at a distance of 4 m and 9 m from the base of the tower and in the same straight line with it are complementary. Prove that the height of the tower is 6 m.',
      correctAnswer: 'Hence Proved: Height of tower = 6 m',
      marks: 3,
      hints: ['Let angles be θ and (90° - θ). tan θ = h/4, tan(90° - θ) = cot θ = h/9. Multiply both.'],
      solutionSteps: [
        'Let AB be the tower of height h.',
        'Let C and D be two points on the ground at distances 4 m and 9 m from foot B (BC = 4 m, BD = 9 m).',
        'Let angle ACB = θ. Since the angles are complementary, angle ADB = 90° - θ.',
        'In right Triangle ABC: tan θ = AB / BC = h / 4 ... (1).',
        'In right Triangle ABD: tan(90° - θ) = AB / BD ⟹ cot θ = h / 9 ... (2).',
        'Multiply equations (1) and (2):',
        'tan θ * cot θ = (h / 4) * (h / 9)',
        '1 = h^2 / 36',
        'h^2 = 36 ⟹ h = 6 m (height cannot be negative). Hence Proved!'
      ],
      commonTrap: 'Taking -6 as a solution for height.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 9 Ex 9.1 Q16',
      conceptId: 'ch9_c1'
    },
    {
      id: 'ch9_q5',
      chapterId: 9,
      topic: 'Cloud and Reflection Problem',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'The angle of elevation of a cloud from a point 60 m above a lake is 30° and the angle of depression of the reflection of the cloud in the lake is 60°. Find the height of the cloud above the surface of the lake.',
      correctAnswer: '120 m',
      marks: 5,
      hints: ['Let cloud height above lake be H. Then distance of cloud reflection below water surface is also H! Distance of cloud above observation point = H - 60. Distance of reflection below observation point = H + 60.'],
      solutionSteps: [
        'Let the surface of the lake be the horizontal line.',
        'Let the height of the cloud above the lake surface be H metres.',
        'By law of reflection in water, the image of the cloud is at depth H below the water surface.',
        'The observation point P is at height 60 m above the lake.',
        'Height of cloud above P = H - 60 m.',
        'Depth of reflection below P = H + 60 m.',
        'Let horizontal distance from observation point to cloud line be x.',
        'In right triangle with angle of elevation 30°:',
        'tan 30° = (H - 60) / x ⟹ 1 / √3 = (H - 60) / x ⟹ x = (H - 60)√3 ... (1).',
        'In right triangle with angle of depression 60°:',
        'tan 60° = (H + 60) / x ⟹ √3 = (H + 60) / x ⟹ x = (H + 60) / √3 ... (2).',
        'Equate expressions for x from (1) and (2):',
        '(H - 60)√3 = (H + 60) / √3',
        'Multiply both sides by √3: 3(H - 60) = H + 60',
        '3H - 180 = H + 60 ⟹ 2H = 240 ⟹ H = 120 m.'
      ],
      commonTrap: 'Assuming the reflection is measured from the observation point rather than from the lake surface (reflection depth below water equals cloud height above water!).',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 5-Mark Board Challenge (Delhi & Outside Delhi)',
      conceptId: 'ch9_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch9_pyq1',
      year: 'CBSE 2024 / 2022 / 2019',
      marks: 5,
      topic: 'Two Poles on Opposite Sides of Road',
      conceptTested: 'Heights & Distances Dual Triangle System',
      question: 'Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30°, respectively. Find the height of the poles and the distances of the point from the poles.',
      markingSchemeBreakdown: [
        { step: 'Correct diagram showing two poles, road width 80m, point P and angles', marks: 1 },
        { step: 'Applying tan 60° in first triangle: h = x√3', marks: 1 },
        { step: 'Applying tan 30° in second triangle: h = (80 - x)/√3', marks: 1 },
        { step: 'Solving x = 20 m and second distance 60 m', marks: 1 },
        { step: 'Final height of poles = 20√3 m (or 34.64 m)', marks: 1 }
      ],
      fullSolution: 'Let AB and CD be the two poles of equal height h, so AB = CD = h.\nLet the road width BD = 80 m.\nLet P be the observation point on BD. Let BP = x, then PD = 80 - x.\n\nIn right-angled Triangle ABP:\ntan 60° = AB / BP ⟹ √3 = h / x ⟹ h = x√3 ... (1)\n\nIn right-angled Triangle CDP:\ntan 30° = CD / PD ⟹ 1 / √3 = h / (80 - x) ⟹ h = (80 - x) / √3 ... (2)\n\nFrom (1) and (2):\nx√3 = (80 - x) / √3\n3x = 80 - x\n4x = 80 ⟹ x = 20 m.\n\nDistance from pole AB = 20 m.\nDistance from pole CD = 80 - 20 = 60 m.\nHeight of poles h = 20√3 m.\n\nHence, height of the poles is 20√3 m and distances from the poles are 20 m and 60 m.',
      commonMistake: 'Forgetting to substitute x = 20 back into h = x√3 to report the height of the poles.',
      frequencyTrend: 'Top 3 most asked 5-mark question in Class 10 CBSE Math.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch9_err1',
      title: 'Drawing Angle of Depression with the Vertical Line',
      mistakeCategory: 'Incorrect Condition/Constraint',
      flawedWorking: 'Student labels the angle between the vertical lighthouse and the hypotenuse as the angle of depression θ.',
      whyItIsWrong: 'The angle of depression is ALWAYS formed between the horizontal eye-level line and the line of sight.',
      correctWorking: 'Draw a horizontal dashed line at the top. The angle between the horizontal line and line of sight is θ. By alternate angles, the angle at the base on the ground is also θ.',
      howToAvoid: 'Always draw the horizontal line of sight FIRST before marking depression angle.',
      retryQuestion: {
        question: 'If angle of depression of a car from top of a tower is 30°, what is the angle of elevation of the tower from the car?',
        correctAnswer: '30°',
        explanation: 'Alternate interior angles are equal.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Angle of elevation = Looking UP from horizontal.',
      'Angle of depression = Looking DOWN from horizontal = Angle of elevation from object.',
      'tan 45° = 1 ⟹ Height = Base (Instant calculation pivot!).',
      'tan 30° = 1/√3 (approx 0.577), tan 60° = √3 (approx 1.732).',
      'For complementary angles from distances a and b: h = sqrt(ab).',
      'In cloud problems: distance of reflection below water surface = height of cloud above water surface.'
    ],
    speedTips: [
      'If angle of elevation increases from 30° to 60° as you move distance d towards tower: h = d * (√3 / 2).',
      'Always rationalize denominators: multiply by √3 / √3.',
      'Always include units (m, cm) in the final answer.'
    ],
    lastDayChecklist: [
      'Did you draw a clear, large diagram with vertices labelled and right angles marked?',
      'Did you remember to add observer height if given in the question?',
      'Did you state the alternate interior angle property when converting angle of depression to elevation?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch9_d1',
          chapterId: 9,
          topic: 'Elevation Angle Identification',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'A pole 6 m high casts a shadow 2√3 m long on the ground, then the sun’s elevation is:',
          correctAnswer: '60°',
          marks: 1,
          hints: ['tan θ = 6 / (2√3) = 3 / √3 = √3.'],
          solutionSteps: [
            'tan θ = Height / Shadow = 6 / (2√3) = 3 / √3 = √3',
            'tan 60° = √3 ⟹ θ = 60°.'
          ],
          commonTrap: 'Confusing 60° with 30°.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2020 MCQ',
          conceptId: 'ch9_c1'
        },
        {
          id: 'ch9_d2',
          chapterId: 9,
          topic: 'Simple Ladder Problem',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A ladder 15 m long reaches a window which is 9 m above the ground. How far is the foot of the ladder from the base of the wall?',
          correctAnswer: '12 m',
          marks: 2,
          hints: ['Pythagorean triplet: 9^2 + b^2 = 15^2.'],
          solutionSteps: [
            'Base = sqrt(15^2 - 9^2) = sqrt(225 - 81) = sqrt(144) = 12 m.'
          ],
          commonTrap: 'Adding 15^2 and 9^2.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Board',
          conceptId: 'ch9_c1'
        },
        {
          id: 'ch9_d3',
          chapterId: 9,
          topic: '45-Degree Tower Calculation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A tower stands vertically on the ground. From a point 100 m away from its foot, the angle of elevation of the top is 45°. Find the height of the tower.',
          correctAnswer: '100 m',
          marks: 2,
          hints: ['tan 45° = 1 ⟹ h = d.'],
          solutionSteps: [
            'tan 45° = h / 100 ⟹ 1 = h / 100 ⟹ h = 100 m.'
          ],
          commonTrap: 'Doing unnecessary square root arithmetic.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Basic Math',
          conceptId: 'ch9_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch9_ct1',
          chapterId: 9,
          topic: 'Two Ships Distance',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'From the top of a 100 m high cliff, the angles of depression of two boats are 30° and 45°. If the boats are on opposite sides of the cliff, find the distance between the two boats.',
          correctAnswer: '100(√3 + 1) m',
          marks: 3,
          hints: ['Boats are on OPPOSITE sides, so total distance = d1 + d2.'],
          solutionSteps: [
            'In Triangle 1: tan 45° = 100 / d1 ⟹ d1 = 100 m.',
            'In Triangle 2: tan 30° = 100 / d2 ⟹ 1/√3 = 100 / d2 ⟹ d2 = 100√3 m.',
            'Since boats are on OPPOSITE sides of the cliff:',
            'Total distance = d1 + d2 = 100 + 100√3 = 100(√3 + 1) m (approx 273.2 m).'
          ],
          commonTrap: 'Subtracting d1 from d2 (which is for same side, NOT opposite sides!).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Sample Paper',
          conceptId: 'ch9_c2'
        },
        {
          id: 'ch9_ct2',
          chapterId: 9,
          topic: 'Tower on Building',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'From a point on the ground, the angle of elevation of the bottom and top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. Find the height of the tower.',
          correctAnswer: '20(√3 - 1) m',
          marks: 3,
          hints: ['Let building be 20 m, tower be h. tan 45° = 20/d ⟹ d = 20. tan 60° = (20 + h)/d.'],
          solutionSteps: [
            'tan 45° = 20 / d ⟹ 1 = 20 / d ⟹ d = 20 m.',
            'tan 60° = (20 + h) / d ⟹ √3 = (20 + h) / 20.',
            '20√3 = 20 + h ⟹ h = 20√3 - 20 = 20(√3 - 1) m (approx 14.64 m).'
          ],
          commonTrap: 'Forgetting to subtract 20 from 20√3.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 9 Ex 9.1 Q7',
          conceptId: 'ch9_c2'
        },
        {
          id: 'ch9_ct3',
          chapterId: 9,
          topic: 'Speed of Aeroplane / Boat',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'The angle of elevation of an aeroplane from a point on the ground is 60°. After a flight of 30 seconds, the angle of elevation becomes 30°. If the aeroplane is flying at a constant height of 3000√3 m, find the speed of the aeroplane in km/h.',
          correctAnswer: '720 km/h',
          marks: 4,
          hints: ['Find distance d1 from tan 60° and d2 from tan 30°. Distance travelled in 30s = d2 - d1. Speed = distance / time. Convert to km/h.'],
          solutionSteps: [
            'Constant height h = 3000√3 m.',
            'In first position: tan 60° = h / d1 ⟹ √3 = 3000√3 / d1 ⟹ d1 = 3000 m.',
            'In second position: tan 30° = h / d2 ⟹ 1 / √3 = 3000√3 / d2 ⟹ d2 = 3000√3 * √3 = 9000 m.',
            'Distance travelled by plane in 30 seconds = d2 - d1 = 9000 - 3000 = 6000 m.',
            'Speed = Distance / Time = 6000 m / 30 s = 200 m/s.',
            'Convert to km/h: 200 * (18 / 5) = 40 * 18 = 720 km/h.'
          ],
          commonTrap: 'Leaving the speed in m/s (200 m/s) when question asks for km/h.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 5-Mark Board Exam',
          conceptId: 'ch9_c2'
        }
      ]
    }
  ]
};
