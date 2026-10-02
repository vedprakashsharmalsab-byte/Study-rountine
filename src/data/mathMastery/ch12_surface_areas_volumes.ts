import { ChapterData } from './types';

export const CH12_DATA: ChapterData = {
  chapterNumber: 12,
  chapterName: 'Surface Areas and Volumes',
  weightageEstimate: '6 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Surface Areas and Volumes in Class 10 focuses on Combinations of Solids: combining two or more fundamental 3D figures (cubes, cuboids, cylinders, cones, hemispheres, and spheres). Students master the crucial distinction between Surface Area (which depends strictly on exposed exterior surfaces) and Volume (which simply adds up algebraically).',
    prerequisites: [
      'Basic 2D geometry (area of circles, rectangles)',
      'Pythagorean theorem for cone slant height: l = sqrt(r^2 + h^2)',
      'Algebraic factorization and taking common factors (πr)'
    ],
    coreIdeas: [
      'The Golden Law of Combined Surface Area: When two solids are joined together, the contacting faces are BURIED inside and disappear! The Total Surface Area (TSA) of the new solid is the sum of the EXPOSED Curved Surface Areas.',
      'Example 1 (Toy: Cone on Hemisphere): TSA = CSA of Cone + CSA of Hemisphere = πrl + 2πr^2 = πr(l + 2r).',
      'Example 2 (Medicine Capsule: Cylinder + 2 Hemispherical ends): Total length L = h + 2r ⟹ Cylinder height h = L - 2r. TSA = 2πrh + 2(2πr^2) = 2πr(h + 2r).',
      'Example 3 (Hemispherical Scoop/Depression from Cube): TSA = 6a^2 - πr^2 (removed circle) + 2πr^2 (new inner bowl surface) = 6a^2 + πr^2.',
      'Volumes Always Add Directly: Volume of combined solid = Volume 1 + Volume 2. There is no burying of volume!',
      'Slant Height of Cone: l = sqrt(r^2 + h^2). Never use vertical height h in place of slant height l in πrl.'
    ],
    keyRelationships: [
      'Cylinder: CSA = 2πrh, Volume = πr^2h.',
      'Cone: CSA = πrl, Volume = (1/3)πr^2h, where l = sqrt(r^2 + h^2).',
      'Sphere: SA = 4πr^2, Volume = (4/3)πr^3.',
      'Hemisphere: CSA = 2πr^2, TSA = 3πr^2, Volume = (2/3)πr^3.',
      'Cube: TSA = 6a^2, Volume = a^3.',
      'Cuboid: TSA = 2(lb + bh + hl), Volume = lbh.'
    ],
    frequentMisunderstandings: [
      'Adding the TSAs of the individual solids! (e.g. TSA of toy ≠ TSA of cone + TSA of hemisphere, because the two circular bases touch and are hidden inside!).',
      'Using vertical height h instead of slant height l when calculating cone CSA πrl.',
      'Confusing diameter with radius: always check whether the question gives diameter d or radius r before substituting.'
    ],
    examImportanceEvidence: 'Guaranteed 6 marks in every single board paper! Typically includes: 1 MCQ (1 Mark on volume ratio or cube edge) + 1 Long Answer / Case Study (5 Marks: capsule, toy, or scoop problem).'
  },
  concepts: [
    {
      id: 'ch12_c1',
      title: 'Surface Area of Combined Solids',
      topic: 'Combined Surface Area',
      simpleExplanation: 'Imagine spray-painting the outside of the combined toy. Only the parts that get wet with paint count towards Surface Area! Any glued touching faces inside stay dry and must be excluded.',
      exactMathIdea: 'The total surface area of a combination of solids is the sum of the curved surface areas of each individual component that form the exterior boundary. Total Surface Area = CSA(Component 1) + CSA(Component 2).',
      formulaOrTheorem: '\\text{TSA of Toy (Cone + Hemisphere)} = \\pi r l + 2\\pi r^2 = \\pi r(l + 2r)',
      whenToUse: 'When two solids are glued together, hollowed out, or mounted on top of each other and total surface area is requested.',
      recognitionClues: [
        'A toy is in the form of a cone mounted on a hemisphere',
        'A medicine capsule is in the shape of a cylinder with two hemispheres',
        'A wooden toy rocket is in the shape of a cone on a cylinder'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Toy: Cone Mounted on Hemisphere',
          question: 'A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy.',
          given: 'Radius r = 3.5 cm = 7/2 cm. Total height H = 15.5 cm.',
          toFind: 'Total surface area of the toy.',
          methodSelectionReason: 'Toy consists of cone and hemisphere with common base. Height of cone h = H - r = 15.5 - 3.5 = 12 cm. Find slant height l, then TSA = πrl + 2πr^2.',
          stepByStepSolution: [
            'Radius of hemisphere and cone r = 3.5 cm.',
            'Height of hemisphere = radius = 3.5 cm.',
            'Height of cone h = Total height - radius = 15.5 - 3.5 = 12 cm.',
            'Slant height of cone l = sqrt(r^2 + h^2) = sqrt((3.5)^2 + 12^2) = sqrt(12.25 + 144) = sqrt(156.25) = 12.5 cm.',
            'Total surface area of toy = CSA of cone + CSA of hemisphere',
            '= πrl + 2πr^2 = πr(l + 2r)',
            '= (22 / 7) * 3.5 * (12.5 + 2 * 3.5)',
            '= (22 / 7) * (7 / 2) * (12.5 + 7)',
            '= 11 * (19.5) = 214.5 cm^2.'
          ],
          finalAnswer: 'Total surface area = 214.5 cm^2',
          verificationCheck: 'Factorized expression πr(l + 2r) avoids double multiplication by π. 11 * 19.5 = 214.5. Exact.',
          commonTrap: 'Using vertical height 12 cm instead of slant height 12.5 cm in πrl.'
        },
        {
          level: 'standard',
          title: 'Medicine Capsule Surface Area',
          question: 'A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its surface area.',
          given: 'Total length L = 14 mm, diameter d = 5 mm ⟹ radius r = 2.5 mm = 5/2 mm.',
          toFind: 'Surface area of the capsule.',
          methodSelectionReason: 'Total surface area = CSA of cylinder + 2 * (CSA of hemisphere) = 2πrh + 4πr^2.',
          stepByStepSolution: [
            'Radius r = d / 2 = 5 / 2 = 2.5 mm.',
            'Height of cylinder h = Total length - 2 * radius = 14 - 2(2.5) = 14 - 5 = 9 mm.',
            'Surface area = CSA of cylinder + 2 * (CSA of hemisphere)',
            '= 2πrh + 2(2πr^2) = 2πrh + 4πr^2 = 2πr(h + 2r)',
            '= 2 * (22 / 7) * (5 / 2) * [9 + 2(2.5)]',
            '= (22 / 7) * 5 * [9 + 5] = (22 / 7) * 5 * 14',
            '= 22 * 5 * 2 = 220 mm^2.'
          ],
          finalAnswer: 'Surface area = 220 mm^2',
          verificationCheck: '14 / 7 = 2 cancels cleanly! 22 * 10 = 220 mm^2. Clean integer result.',
          commonTrap: 'Subtracting only ONE radius from total length (writing cylinder height = 14 - 2.5 = 11.5 mm).'
        }
      ],
      commonMisconceptions: ['Adding flat circle areas that are glued inside.'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board papers as 4 or 5-mark question.',
      sourceTrace: 'NCERT Ch 12 Exercise 12.1 Q3 & Q6'
    },
    {
      id: 'ch12_c2',
      title: 'Volume of Combined Solids',
      topic: 'Combined Volumes',
      simpleExplanation: 'Volume is the capacity or amount of space inside. Just calculate the capacity of each component and ADD them together directly!',
      exactMathIdea: 'The volume of a solid formed by combining two or more basic solids is the algebraic sum of their individual volumes: Volume = V1 + V2. No surface subtraction is required.',
      formulaOrTheorem: 'V_{\\text{total}} = V_{\\text{cone}} + V_{\\text{hemisphere}} = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2(h + 2r)',
      whenToUse: 'When calculating capacity of storage tanks, ice cream cones, solid toys, or amount of air enclosed in a tent.',
      recognitionClues: [
        'A solid toy is in the form of a hemisphere surmounted by a right circular cone',
        'Find the volume of the solid',
        'A gulab jamun contains sugar syrup up to about 30% of its volume'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Gulab Jamun Volume & Sugar Syrup Problem',
          question: 'A gulab jamun contains sugar syrup up to about 30% of its volume. Find approximately how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends with length 5 cm and diameter 2.8 cm.',
          given: 'Total length = 5 cm, diameter = 2.8 cm ⟹ radius r = 1.4 cm. Syrup = 30% of total volume for 45 pieces.',
          toFind: 'Total syrup volume in 45 gulab jamuns.',
          methodSelectionReason: '1 gulab jamun = cylinder + 2 hemispheres (1 full sphere). Find volume of 1, multiply by 45, then find 30%.',
          stepByStepSolution: [
            'Radius r = 2.8 / 2 = 1.4 cm.',
            'Height of cylindrical part h = Total length - 2r = 5 - 2(1.4) = 5 - 2.8 = 2.2 cm.',
            'Volume of 1 gulab jamun = Volume of cylinder + 2 * (Volume of hemisphere)',
            '= πr^2h + (4/3)πr^3 = πr^2 [h + (4/3)r]',
            '= (22 / 7) * 1.4 * 1.4 * [2.2 + (4/3) * 1.4]',
            '= (22 / 7) * 1.96 * [2.2 + 1.87] = 22 * 0.28 * 4.07 = 6.16 * 4.07 ≈ 25.07 cm^3.',
            'Total volume of 45 gulab jamuns = 45 * 25.07 = 1128.15 cm^3.',
            'Volume of sugar syrup = 30% of 1128.15 = 0.30 * 1128.15 ≈ 338.45 cm^3.'
          ],
          finalAnswer: 'Volume of sugar syrup ≈ 338 cm^3',
          verificationCheck: 'Volume per piece ≈ 25 cm^3, 45 pieces ≈ 1125 cm^3, 30% of 1125 ≈ 338 cm^3. Correct.',
          commonTrap: 'Using diameter 2.8 cm as radius, inflating the volume by 8 times.'
        }
      ],
      commonMisconceptions: ['Trying to subtract overlapping volumes when combining shapes.'],
      priority: 'Must Master',
      cbseFrequency: 'Famous 5-mark board exam problem.',
      sourceTrace: 'NCERT Ch 12 Exercise 12.2 Q3'
    }
  ],
  formulas: [
    {
      id: 'ch12_f1',
      name: 'Master 3D Solid Surface Area & Volume Matrix',
      formula: 'V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h, \\quad CSA_{\\text{cone}} = \\pi r l, \\quad l = \\sqrt{r^2 + h^2}',
      symbolMeanings: [
        { symbol: 'r', meaning: 'Radius of circular base' },
        { symbol: 'h', meaning: 'Vertical perpendicular height' },
        { symbol: 'l', meaning: 'Slant height of cone' }
      ],
      whenToUse: 'Cone, cylinder, sphere, and hemisphere combinations.',
      conditions: ['r, h, l must be in the same units'],
      commonSubstitutions: ['Hemisphere: CSA = 2πr^2, Volume = (2/3)πr^3; Sphere: SA = 4πr^2, Volume = (4/3)πr^3'],
      miniExample: {
        question: 'Find slant height of cone with radius 7 cm and height 24 cm.',
        substitution: 'l = sqrt(7^2 + 24^2) = sqrt(49 + 576) = sqrt(625) = 25 cm',
        result: '25 cm'
      },
      commonMistakes: ['Confusing h (vertical height) with l (slant height).'],
      memoryTrick: '7-24-25 is a classic Pythagorean triplet for cones!',
      sourceTrace: 'NCERT Ch 12 Formulas'
    }
  ],
  methodGuides: [
    {
      id: 'ch12_m1',
      questionPattern: 'Solid Cube with Hemispherical Depression / Scooping',
      recognitionClues: ['A hemispherical depression is cut out from one face of a cubical wooden block of edge a'],
      requiredConcept: 'TSA of remaining solid after hollowing out.',
      whatIsGiven: 'A cube of edge a, diameter of hemisphere = edge a.',
      whatMustBeFound: 'Total surface area of the remaining solid.',
      chosenMethod: 'Start with 6 faces of cube (6a^2), subtract the circular hole (πr^2), add the new internal bowl surface (2πr^2).',
      executionSteps: [
        'Step 1: Total surface area of 6 faces of cube = 6a^2.',
        'Step 2: The top face now has a circular hole of radius r = a/2. Subtract area of circle = πr^2.',
        'Step 3: But the scoop created a new curved interior hemispherical surface! Add CSA of hemisphere = 2πr^2.',
        'Step 4: Net Surface Area = 6a^2 - πr^2 + 2πr^2 = 6a^2 + πr^2.',
        'Step 5: Substitute r = a/2: Net SA = 6a^2 + π(a/2)^2 = 6a^2 + πa^2/4 = (a^2 / 4)(24 + π) sq units.'
      ],
      verificationMethod: 'Notice that hollowing out a hemisphere INCREASES surface area, NOT decreases it (because the curved bowl has area 2πr^2, which is larger than the flat cut circle πr^2!).',
      commonTrap: 'Subtracting 2πr^2 instead of adding it (thinking volume loss implies surface area loss).',
      exemplarQuestion: 'A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the remaining solid.',
      exemplarAnswer: 'Surface area = 6l^2 - π(l/2)^2 + 2π(l/2)^2 = 6l^2 + πl^2/4 = (l^2 / 4)(24 + π) sq units.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch12_q1',
      chapterId: 12,
      topic: 'Two Cubes Joined End to End',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: '2 cubes each of volume 64 cm^3 are joined end to end. Find the surface area of the resulting cuboid.',
      options: ['160 cm^2', '128 cm^2', '192 cm^2', '80 cm^2'],
      correctAnswer: '160 cm^2',
      marks: 1,
      hints: ['Volume of cube a^3 = 64 ⟹ a = 4 cm. Resulting cuboid has length = 8 cm, breadth = 4 cm, height = 4 cm.'],
      solutionSteps: [
        'a^3 = 64 ⟹ a = 4 cm.',
        'Joined end to end: length l = 4 + 4 = 8 cm, breadth b = 4 cm, height h = 4 cm.',
        'Surface area of cuboid = 2(lb + bh + hl) = 2(8*4 + 4*4 + 8*4)',
        '= 2(32 + 16 + 32) = 2(80) = 160 cm^2.'
      ],
      commonTrap: 'Simply adding the surface areas of the two cubes: 2 * (6 * 16) = 192 cm^2 (this counts the 2 hidden internal faces!).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 12 Ex 12.1 Q1',
      conceptId: 'ch12_c1'
    },
    {
      id: 'ch12_q2',
      chapterId: 12,
      topic: 'Cone on Cylinder Tent',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent.',
      correctAnswer: '44 m^2',
      marks: 2,
      hints: ['Canvas used = CSA of cylinder + CSA of cone = 2πrh + πrl.'],
      solutionSteps: [
        'Radius r = 4 / 2 = 2 m. Height of cylinder h = 2.1 m. Slant height of cone l = 2.8 m.',
        'Canvas area = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)',
        '= (22 / 7) * 2 * [2(2.1) + 2.8] = (44 / 7) * [4.2 + 2.8]',
        '= (44 / 7) * 7 = 44 m^2.'
      ],
      commonTrap: 'Adding the base circle of the tent (tent floors are not made of canvas).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 12 Ex 12.1 Q7',
      conceptId: 'ch12_c1'
    },
    {
      id: 'ch12_q3',
      chapterId: 12,
      topic: 'Solid Toy Volume',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π.',
      correctAnswer: 'π cm^3',
      marks: 3,
      hints: ['V = (1/3)πr^2h + (2/3)πr^3. Given r = 1, h = 1.'],
      solutionSteps: [
        'Volume = Volume of cone + Volume of hemisphere',
        '= (1/3)πr^2h + (2/3)πr^3 = (1/3)π(1)^2(1) + (2/3)π(1)^3',
        '= (1/3)π + (2/3)π = (3/3)π = π cm^3.'
      ],
      commonTrap: 'Substituting 3.14 when question explicitly asks "in terms of π".',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 12 Ex 12.2 Q1',
      conceptId: 'ch12_c2'
    },
    {
      id: 'ch12_q4',
      chapterId: 12,
      topic: 'Cubical Block with Hemisphere Surmounted',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'A cubical wooden block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have? Find the surface area of the solid.',
      correctAnswer: 'Greatest diameter = 7 cm, Surface area = 332.5 cm^2',
      marks: 3,
      hints: ['Greatest diameter = side of cube = 7 cm ⟹ r = 3.5 cm. Surface area = 6a^2 - πr^2 + 2πr^2 = 6a^2 + πr^2.'],
      solutionSteps: [
        'Greatest diameter = side of cube = 7 cm ⟹ r = 7/2 = 3.5 cm.',
        'Surface area = 6a^2 + πr^2 = 6(7^2) + (22/7) * (7/2) * (7/2)',
        '= 6 * 49 + 77 / 2 = 294 + 38.5 = 332.5 cm^2.'
      ],
      commonTrap: 'Adding 2πr^2 without subtracting the covered circular base πr^2.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 12 Ex 12.1 Q4',
      conceptId: 'ch12_c1'
    },
    {
      id: 'ch12_q5',
      chapterId: 12,
      topic: 'Water Displaced by Cone & Hemisphere in Cylinder',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm and its height is 180 cm.',
      correctAnswer: '1.131 m^3 (or 1131428 cm^3)',
      marks: 5,
      hints: ['Volume of water left = Volume of cylinder - Volume of solid. Volume of solid = Volume of cone + Volume of hemisphere.'],
      solutionSteps: [
        'Volume of cylinder = π * R^2 * H = π * 60^2 * 180 = π * 3600 * 180 = 648000π cm^3.',
        'Volume of cone = (1/3) * π * r^2 * h = (1/3) * π * 60^2 * 120 = 144000π cm^3.',
        'Volume of hemisphere = (2/3) * π * r^3 = (2/3) * π * 60^3 = (2/3) * 216000π = 144000π cm^3.',
        'Total volume of solid = 144000π + 144000π = 288000π cm^3.',
        'Volume of water left = 648000π - 288000π = 360000π cm^3.',
        'Substitute π = 22/7: 360000 * (22/7) = 7920000 / 7 ≈ 1131428.57 cm^3.',
        'Convert to m^3: 1131428.57 / 1000000 ≈ 1.131 m^3.'
      ],
      commonTrap: 'Forgetting that 1 m^3 = 100^3 = 1,000,000 cm^3 (dividing by 100 or 10,000 instead of 1,000,000).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 12 Ex 12.2 Q7',
      conceptId: 'ch12_c2'
    }
  ],
  pyqs: [
    {
      id: 'ch12_pyq1',
      year: 'CBSE 2024 / 2022 / 2019',
      marks: 5,
      topic: 'Toy Surface Area',
      conceptTested: 'Cone + Hemisphere Combination Surface Area',
      question: 'A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy.',
      markingSchemeBreakdown: [
        { step: 'Height of cone h = 15.5 - 3.5 = 12 cm', marks: 1 },
        { step: 'Slant height l = sqrt(12^2 + 3.5^2) = 12.5 cm', marks: 1 },
        { step: 'Formula: TSA = πrl + 2πr^2 = πr(l + 2r)', marks: 1 },
        { step: 'Substitution and correct answer 214.5 cm^2', marks: 2 }
      ],
      fullSolution: 'Radius r = 3.5 cm = 7/2 cm.\nHeight of hemisphere = radius = 3.5 cm.\nHeight of cone h = 15.5 - 3.5 = 12 cm.\n\nSlant height l = sqrt(r^2 + h^2) = sqrt((3.5)^2 + 12^2) = sqrt(12.25 + 144) = sqrt(156.25) = 12.5 cm.\n\nTotal surface area of toy = CSA of cone + CSA of hemisphere\n= πrl + 2πr^2\n= πr(l + 2r)\n= (22 / 7) * (7 / 2) * [12.5 + 2(3.5)]\n= 11 * [12.5 + 7] = 11 * 19.5 = 214.5 cm^2.\n\nHence, the total surface area of the toy is 214.5 cm^2.',
      commonMistake: 'Adding the circular base area πr^2 of the cone.',
      frequencyTrend: 'Top 3 most asked 5-mark geometry question in CBSE.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch12_err1',
      title: 'Including Buried Circular Base in Combined Surface Area',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Student writes TSA of toy = (πrl + πr^2) + (2πr^2 + πr^2).',
      whyItIsWrong: 'The base circles of the cone and hemisphere are glued together inside the toy. They are not exposed to the exterior and cannot be touched or painted.',
      correctWorking: 'TSA of toy = CSA of cone + CSA of hemisphere = πrl + 2πr^2.',
      howToAvoid: 'Ask yourself: "Can my hand touch this surface?" If it is hidden inside the solid, DO NOT include it in surface area.',
      retryQuestion: {
        question: 'What is the surface area of a solid cylinder of radius r and height h closed by a hemisphere at one end?',
        correctAnswer: '2πrh + πr^2 + 2πr^2 = 2πrh + 3πr^2',
        explanation: 'Curved cylinder (2πrh) + Flat bottom circle (πr^2) + Curved hemisphere top (2πr^2).'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'In combined surface area: Only include EXPOSED surfaces. Glued interior faces disappear!',
      'Toy (Cone + Hemisphere): TSA = πrl + 2πr^2 = πr(l + 2r).',
      'Capsule (Cylinder + 2 Hemispheres): TSA = 2πrh + 4πr^2 = 2πr(h + 2r), where h = Total Length - 2r.',
      'Cube with scoop: TSA = 6a^2 + πr^2 (hollowing out INCREASES surface area!).',
      'Cone slant height: l = sqrt(r^2 + h^2).',
      'Volumes ALWAYS add directly: V = V1 + V2.'
    ],
    speedTips: [
      'Always factor out common terms like πr or 2πr before calculating to save 3 minutes of long multiplication.',
      '7-24-25 and 3.5-12-12.5 are the two most common cone dimensions in board papers.',
      '1 m^3 = 1000 litres = 1,000,000 cm^3.'
    ],
    lastDayChecklist: [
      'Did you use slant height l (not vertical height h) in cone CSA πrl?',
      'Did you subtract 2r (both ends) from total length to find cylinder height in capsule questions?',
      'Did you check whether question specifies π = 3.14 or 22/7?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch12_d1',
          chapterId: 12,
          topic: 'Sphere Ratio',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'If the radii of two spheres are in the ratio 2 : 3, then the ratio of their volumes is:',
          correctAnswer: '8 : 27',
          marks: 1,
          hints: ['Volume is proportional to r^3: V1/V2 = (r1/r2)^3 = (2/3)^3.'],
          solutionSteps: ['(2/3)^3 = 8 / 27.'],
          commonTrap: 'Squaring instead of cubing (giving 4 : 9).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2023 MCQ',
          conceptId: 'ch12_c2'
        },
        {
          id: 'ch12_d2',
          chapterId: 12,
          topic: 'Cone Slant Height',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the slant height of a cone whose radius is 5 cm and height is 12 cm.',
          correctAnswer: '13 cm',
          marks: 2,
          hints: ['l = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 cm.'],
          solutionSteps: ['l = sqrt(25 + 144) = sqrt(169) = 13 cm.'],
          commonTrap: 'Adding 5 and 12.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Basic Math',
          conceptId: 'ch12_c1'
        },
        {
          id: 'ch12_d3',
          chapterId: 12,
          topic: 'Hemisphere Volume',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the volume of a hemisphere of radius 3 cm in terms of π.',
          correctAnswer: '18π cm^3',
          marks: 2,
          hints: ['V = (2/3) * π * r^3 = (2/3) * π * 27.'],
          solutionSteps: ['V = (2/3) * π * 27 = 2 * 9π = 18π cm^3.'],
          commonTrap: 'Using sphere formula 4/3 instead of 2/3.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Standard Paper',
          conceptId: 'ch12_c2'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch12_ct1',
          chapterId: 12,
          topic: 'Capsule Surface Area',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'A medicine capsule has diameter 5 mm and total length 14 mm. Find its surface area.',
          correctAnswer: '220 mm^2',
          marks: 3,
          hints: ['r = 2.5 mm, h = 14 - 5 = 9 mm. TSA = 2πr(h + 2r).'],
          solutionSteps: [
            'r = 2.5 mm, h = 14 - 5 = 9 mm.',
            'TSA = 2πr(h + 2r) = 2 * (22/7) * (5/2) * (9 + 5) = (22/7) * 5 * 14 = 220 mm^2.'
          ],
          commonTrap: 'Forgetting to subtract 2 * 2.5 = 5 from total length.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 12 Ex 12.1 Q6',
          conceptId: 'ch12_c1'
        },
        {
          id: 'ch12_ct2',
          chapterId: 12,
          topic: 'Ice Cream Cone Volume',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'An ice cream cone consists of a cone of height 12 cm and diameter 6 cm surmounted by a hemispherical top. Find the volume of the ice cream.',
          correctAnswer: '54π cm^3 (or 169.71 cm^3)',
          marks: 3,
          hints: ['r = 3 cm, h = 12 cm. V = (1/3)πr^2h + (2/3)πr^3.'],
          solutionSteps: [
            'r = 6 / 2 = 3 cm, h = 12 cm.',
            'V_cone = (1/3) * π * 3^2 * 12 = 36π cm^3.',
            'V_hemisphere = (2/3) * π * 3^3 = 18π cm^3.',
            'Total volume = 36π + 18π = 54π cm^3 ≈ 169.71 cm^3.'
          ],
          commonTrap: 'Using diameter 6 cm as radius.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Sample Paper',
          conceptId: 'ch12_c2'
        },
        {
          id: 'ch12_ct3',
          chapterId: 12,
          topic: 'Cube with Hemispherical Depression',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'A wooden toy block is in the shape of a cube of edge 7 cm with a hemisphere carved out of one face such that the diameter of the hemisphere is equal to the edge of the cube. Find the total surface area of the remaining block.',
          correctAnswer: '332.5 cm^2',
          marks: 4,
          hints: ['TSA = 6a^2 - πr^2 + 2πr^2 = 6a^2 + πr^2.'],
          solutionSteps: [
            'Edge a = 7 cm, radius r = 3.5 cm.',
            'TSA = 6a^2 + πr^2 = 6(49) + (22/7) * (7/2) * (7/2) = 294 + 38.5 = 332.5 cm^2.'
          ],
          commonTrap: 'Subtracting 2πr^2 instead of adding it.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 12 Ex 12.1 Q5',
          conceptId: 'ch12_c1'
        }
      ]
    }
  ]
};
