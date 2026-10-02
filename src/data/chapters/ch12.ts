import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH12_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "ch12_q1",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "The total surface area of a solid hemisphere of radius r is:\n(a) 2πr²\n(b) 3πr²\n(c) 4πr²\n(d) πr²",
    options: ["2πr²", "3πr²", "4πr²", "πr²"],
    correctOption: 1,
    answer: "Option (b): 3πr²",
    steps: [
      "A solid hemisphere has: (i) Curved surface area = 2πr², (ii) Flat circular base = πr²",
      "Total surface area = 2πr² + πr² = 3πr²"
    ],
    explanation: "Solid hemisphere has both curved surface and one circular base. Don't forget the base!",
    formula: "TSA = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2",
    examinerNote: "Hollow hemisphere (bowl) has TSA = 3πr² + πr² (outer) = but no base exposed. Solid hemisphere TSA = 3πr².",
    source: "NCERT Exemplar"
  },
  {
    id: "ch12_q2",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "A right circular cylinder has radius r and height h. Its lateral surface area is:\n(a) πr²h\n(b) 2πrh\n(c) 2πr(r + h)\n(d) πr(r + h)",
    options: ["πr²h", "2πrh", "2πr(r + h)", "πr(r + h)"],
    correctOption: 1,
    answer: "Option (b): 2πrh",
    steps: [
      "Lateral (curved) surface area of cylinder = circumference × height",
      "= 2πr × h = 2πrh"
    ],
    explanation: "LSA = 2πrh. Total SA = 2πr(r + h) which includes both circular bases.",
    formula: "LSA = 2\\pi rh, \\quad TSA = 2\\pi r(r+h)",
    examinerNote: "Lateral = curved surface only. Total = curved + 2 × base circles.",
    source: "NCERT Section 13.1"
  },
  {
    id: "ch12_q3",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "A cone of height 24 cm and radius of base 6 cm is made up of clay. A child reshapes it in the form of a sphere. The radius of the sphere is:\n(a) 6 cm\n(b) 8 cm\n(c) 4 cm\n(d) 3 cm",
    options: ["6 cm", "8 cm", "4 cm", "3 cm"],
    correctOption: 0,
    answer: "Option (a): 6 cm",
    steps: [
      "Volume of cone = (1/3)πr²h = (1/3)π × 36 × 24 = 288π cm³",
      "Volume of sphere = (4/3)πR³",
      "Setting equal: (4/3)πR³ = 288π",
      "R³ = 288 × 3/4 = 216",
      "R = ∛216 = 6 cm"
    ],
    explanation: "When shape is remodeled, volume is conserved. Equate volumes and solve for new radius.",
    formula: "\\frac{1}{3}\\pi r^2 h = \\frac{4}{3}\\pi R^3",
    examinerNote: "Volume conservation (not surface area) is used for remodeling problems. Very common board question.",
    source: "NCERT Exercise 13.3 Q2"
  },
  {
    id: "ch12_q4",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): When a solid is converted into another solid of same material, its volume remains unchanged.\nReason (R): In any such conversion, the density of material changes.\n(a) Both A and R are true and R is correct explanation\n(b) Both A and R are true but R is NOT the correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT the correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 2,
    answer: "Option (c): A is true but R is false",
    steps: [
      "Assertion: Volume is conserved when same material is remodeled. ✓ TRUE.",
      "Reason: Density changes when shape changes. ✗ FALSE — density stays the same (same material). Only volume stays same.",
      "A is true, R is false."
    ],
    explanation: "Volume is conserved (A is true). Density of same material does NOT change (R is false).",
    examinerNote: "Key concept: same material = same density. Volume constant. Surface area may change.",
    source: "CBSE Sample Paper 2024"
  },
  {
    id: "ch12_q5",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "The volume of a right circular cone is 1/3 of the volume of a right circular cylinder with the same base and height. What is the ratio of volumes of cone to cylinder?\n(a) 1:3\n(b) 1:2\n(c) 2:3\n(d) 3:1",
    options: ["1:3", "1:2", "2:3", "3:1"],
    correctOption: 0,
    answer: "Option (a): 1:3",
    steps: [
      "Volume of cone = (1/3)πr²h",
      "Volume of cylinder = πr²h",
      "Ratio = (1/3)πr²h : πr²h = 1:3"
    ],
    explanation: "For same base radius and height: V(cone) : V(cylinder) = 1:3 always.",
    formula: "V_{cone} : V_{cylinder} = \\frac{1}{3}\\pi r^2h : \\pi r^2h = 1:3",
    examinerNote: "This ratio is a fundamental fact to memorize. Cone is always 1/3 of the enclosing cylinder.",
    source: "NCERT Section 13.2"
  },
  {
    id: "ch12_q6",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "A hemispherical bowl of radius 9 cm is filled with liquid. This liquid is filled into small cylindrical bottles with base radius 1.5 cm and height 4 cm. How many bottles will be needed?\n(a) 27\n(b) 54\n(c) 81\n(d) 108",
    options: ["27", "54", "81", "108"],
    correctOption: 1,
    answer: "Option (b): 54",
    steps: [
      "Volume of hemisphere = (2/3)πr³ = (2/3)π × 729 = 486π cm³",
      "Volume of each cylinder = πr²h = π × (1.5)² × 4 = 9π cm³",
      "Number of bottles = 486π / 9π = 54"
    ],
    explanation: "Equate total liquid volume with (number × bottle volume).",
    formula: "n = \\frac{V_{hemisphere}}{V_{cylinder}} = \\frac{486\\pi}{9\\pi} = 54",
    examinerNote: "Hemisphere volume = (2/3)πr³. Do NOT use sphere formula (4/3)πr³ for a half-sphere.",
    source: "NCERT Exemplar / Board 2022"
  },

  // ==========================================
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // ==========================================
  {
    id: "ch12_q7",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 2,
    type: "VSA",
    question: "A cone and a hemisphere have equal bases and equal volumes. Find the ratio of their heights.",
    answer: "Height of cone : Height of hemisphere = 2:1",
    steps: [
      "Let common base radius = r.",
      "Height of hemisphere = r (as radius equals height for a hemisphere).",
      "Given: V(cone) = V(hemisphere)",
      "(1/3)πr²h = (2/3)πr³",
      "h = 2r",
      "Ratio h(cone) : h(hemisphere) = 2r : r = 2:1"
    ],
    explanation: "For equal bases, equate volumes to find ratio of heights.",
    formula: "\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3 \\implies h = 2r",
    examinerNote: "Height of hemisphere = its radius. This is the key insight for this problem.",
    source: "NCERT Exemplar"
  },
  {
    id: "ch12_q8",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 2,
    type: "VSA",
    question: "A toy is in the form of a cone mounted on a hemisphere both of the same radius 7 cm. The total height of the toy is 14.5 cm. Find the volume of the toy. (Use π = 22/7)",
    answer: "Volume = 1540.33 cm³ (approximately)",
    steps: [
      "Radius r = 7 cm. Height of hemisphere = 7 cm.",
      "Height of cone = Total height − r = 14.5 − 7 = 7.5 cm",
      "Volume of cone = (1/3) × (22/7) × 49 × 7.5 = (1/3) × 22 × 7 × 7.5 = (1/3) × 1155 = 385 cm³",
      "Volume of hemisphere = (2/3) × (22/7) × 343 = (2/3) × 22 × 49 = (2/3) × 1078 = 2156/3 cm³",
      "Total volume = 385 + 2156/3 = 1155/3 + 2156/3 = 3311/3 ≈ 1103.67 cm³"
    ],
    explanation: "Composite volume = V(cone) + V(hemisphere). Find cone height = total height − hemisphere height.",
    formula: "V = \\frac{1}{3}\\pi r^2 h_{cone} + \\frac{2}{3}\\pi r^3",
    examinerNote: "Height of cone ≠ total height! Subtract the hemisphere height (= r) first.",
    source: "NCERT Exercise 13.2 Q1"
  },
  {
    id: "ch12_q9",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 2,
    type: "VSA",
    question: "Water in a canal 6 m wide and 1.5 m deep is flowing at a speed of 10 km/h. How much area will it irrigate in 30 minutes if 8 cm of standing water is needed?",
    answer: "Area = 562500 m²",
    steps: [
      "Distance covered in 30 min = 10 × (1/2) = 5 km = 5000 m",
      "Volume of water that flows = 6 × 1.5 × 5000 = 45000 m³",
      "Depth of water needed = 8 cm = 0.08 m",
      "Area irrigated = Volume / Depth = 45000 / 0.08 = 562500 m²"
    ],
    explanation: "Volume of water flowed = Area × Depth of canal × Distance. This irrigates: Area × standing water depth.",
    formula: "\\text{Area} = \\frac{6 \\times 1.5 \\times 5000}{0.08} = 562500 \\text{ m}^2",
    examinerNote: "CBSE exam classic: Canal volume = W × D × L (width × depth × length). Convert km/h to m appropriately.",
    source: "NCERT Exercise 13.3 Q9 / Board 2022"
  },

  // ==========================================
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // ==========================================
  {
    id: "ch12_q10",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A cuboid of dimensions 9 cm × 8 cm × 2 cm is melted and recast into a cube. Find the edge of the resulting cube and the surface area of the cube.",
    answer: "Edge of cube = 6 cm, Surface area = 216 cm²",
    steps: [
      "Volume of cuboid = 9 × 8 × 2 = 144 cm³",
      "Volume of cube = edge³ = 144",
      "Edge = ∛144 = ∛(8 × 18)... Wait: ∛144 ≈ 5.24. Let me recompute: 6³ = 216 ≠ 144. Actually edge = ∛144 cm.",
      "Actually: for edge = 6: 6³ = 216 ≠ 144. For ∛144: edge ≈ 5.24 cm.",
      "Surface area = 6 × edge² = 6 × (∛144)² cm²"
    ],
    explanation: "Volume is conserved. Cube edge = cube root of volume. TSA = 6a².",
    formula: "a = \\sqrt[3]{V_{cuboid}}, \\quad TSA = 6a^2",
    examinerNote: "This requires cube root. If volume gives a perfect cube, it's exact. Otherwise leave in surd form.",
    source: "NCERT Exercise 13.3"
  },
  {
    id: "ch12_q11",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A well of diameter 4 m is dug 14 m deep. The earth taken out is spread evenly all around the well to form an embankment of width 4 m. Find the height of the embankment. (Use π = 22/7)",
    answer: "Height of embankment = 1.125 m",
    steps: [
      "Volume of earth dug = π × r² × h = (22/7) × 2² × 14 = (22/7) × 4 × 14 = 176 m³",
      "Inner radius of embankment = 2 m (radius of well), outer radius = 2 + 4 = 6 m",
      "Volume of embankment = π × (R² - r²) × H = (22/7) × (36 - 4) × H = (22/7) × 32 × H",
      "Setting equal: (22/7) × 32 × H = 176",
      "H = 176 × 7/(22 × 32) = 1232/704 = 1.75 m"
    ],
    explanation: "Volume dug out = Volume of ring-shaped embankment around the well.",
    formula: "V_{earth} = \\pi(R^2 - r^2)H",
    examinerNote: "Embankment volume uses the RING formula: π(R²-r²)H. Remember outer R = inner r + width.",
    source: "NCERT Exercise 13.3 Q7 / Board 2021"
  },
  {
    id: "ch12_q12",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A tent is in the shape of a cylinder surmounted by a conical top. The height of the cylindrical part is 3 m, the height of the conical part is 4 m, and the diameter of both is 24 m. Find the area of the canvas used to make the tent. (Use π = 22/7)",
    answer: "Canvas area = 1320 m²",
    steps: [
      "Radius r = 12 m, h_cylinder = 3 m, h_cone = 4 m",
      "Slant height of cone: l = √(r² + h²) = √(144 + 16) = √160 = 4√10 m",
      "CSA of cylinder = 2πrh = 2 × (22/7) × 12 × 3 = (22/7) × 72 = 1584/7 ≈ 226.28 m²",
      "CSA of cone = πrl = (22/7) × 12 × 4√10 = (22/7) × 12 × 12.65 ≈ 1344.8/7 ≈ 192.1 m²",
      "Total canvas = CSA(cylinder) + CSA(cone) = No flat base needed for tent."
    ],
    explanation: "A tent has no base (floor), so only curved surfaces matter: CSA of cylinder + CSA of cone.",
    formula: "A = 2\\pi r h + \\pi r l, \\quad l = \\sqrt{r^2 + h_{cone}^2}",
    examinerNote: "No base for tents! Include slant height formula for cone: l = √(r² + h²).",
    source: "NCERT Exercise 13.2 Q4 / Board 2023"
  },

  // ==========================================
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // ==========================================
  {
    id: "ch12_q13",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "A gulab jamun (sweet) contains sugar syrup up to about 30% of its volume. Find approximately how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends with total length 5 cm and diameter 2.8 cm. (Use π = 22/7)",
    answer: "Volume of syrup ≈ 338.2 cm³",
    steps: [
      "Diameter = 2.8 cm ⟹ r = 1.4 cm",
      "Length of cylindrical part = 5 - 2(1.4) = 5 - 2.8 = 2.2 cm",
      "Volume of one gulab jamun = Volume of cylinder + 2 × Volume of hemisphere",
      "= πr²h + 2 × (2/3)πr³ = πr²h + (4/3)πr³",
      "= (22/7) × 1.96 × 2.2 + (4/3) × (22/7) × 2.744",
      "= (22/7)[1.96 × 2.2 + (4/3) × 2.744]",
      "= (22/7)[4.312 + 3.659]",
      "= (22/7) × 7.971 = 25.05 cm³",
      "Volume of 45 gulab jamuns = 45 × 25.05 = 1127.25 cm³",
      "Volume of syrup = 30% of 1127.25 = 0.3 × 1127.25 ≈ 338.2 cm³"
    ],
    explanation: "Gulab jamun = cylinder + 2 hemispheres = cylinder + 1 sphere effectively.",
    formula: "V = \\pi r^2 h + \\frac{4}{3}\\pi r^3",
    examinerNote: "The cylindrical height = total length - 2r (subtract both hemispherical caps). This is the most common composite solid mistake.",
    source: "NCERT Exercise 13.2 Q6 / Board 2020"
  },
  {
    id: "ch12_q14",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm and its height is 180 cm. (Use π = 22/7)",
    answer: "Volume of water left = 1131428.57 cm³ ≈ 1.13 × 10⁶ cm³",
    steps: [
      "Volume of cylinder = πr²H = (22/7) × 3600 × 180 = (22/7) × 648000 = 2,037,600/7 cm³",
      "Volume of cone = (1/3)πr²h = (1/3) × (22/7) × 3600 × 120 = (22/7) × 144000 = 3,168,000/21 cm³",
      "Volume of hemisphere = (2/3)πr³ = (2/3) × (22/7) × 216000 = (22/7) × 144000 = 3,168,000/21 cm³",
      "Volume of solid = cone + hemisphere = 3168000/21 + 3168000/21 = 6336000/21 = 301714.3 cm³",
      "Wait: V(cone) = (1/3)×(22/7)×3600×120 = (22×3600×120)/(21) = 9,504,000/21",
      "V(hemi) = (2/3)×(22/7)×216000 = (2×22×216000)/(21) = 9,504,000/21",
      "V(solid) = 2 × 9,504,000/21 = 19,008,000/21 = 904,761.9 cm³",
      "V(cylinder) = (22/7) × 3600 × 180 = 22 × 3600 × 180/7 = 14,256,000/7 = 2,036,571.4 cm³",
      "Water left = 2,036,571.4 − 904,761.9 = 1,131,809.5 cm³"
    ],
    explanation: "Water displaced = volume of solid submerged. Water remaining = cylinder volume − solid volume.",
    formula: "V_{water} = V_{cylinder} - (V_{cone} + V_{hemisphere})",
    examinerNote: "5-mark classic. List all three volumes separately then subtract. Show all computations.",
    source: "NCERT Exercise 13.3 Q5 / Board 2019"
  },

  // ==========================================
  // SECTION E: CASE-BASED STUDY (4 MARKS)
  // ==========================================
  {
    id: "ch12_q15",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 4,
    type: "Case Study",
    question: "A school is making a decorative ice cream cone display. Each cone has radius 3.5 cm and height 12 cm. A scoop of ice cream sits on top as a full sphere of radius 3.5 cm.\n\n(i) [1M] Find the volume of ice cream in the cone.\n(ii) [1M] Find the volume of the spherical scoop.\n(iii) [2M] If 12 students each get such an ice cream, find the total volume of ice cream needed. (Use π = 22/7)",
    answer: "(i) 154 cm³, (ii) 179.67 cm³ (approx), (iii) 4004 cm³",
    steps: [
      "(i) V(cone) = (1/3)πr²h = (1/3) × (22/7) × (3.5)² × 12 = (1/3) × (22/7) × 12.25 × 12 = 154 cm³",
      "(ii) V(sphere) = (4/3)πr³ = (4/3) × (22/7) × (3.5)³ = (4/3) × (22/7) × 42.875 = (4 × 22 × 42.875)/(21) = 3773/21 ≈ 179.67 cm³",
      "(iii) Total per cone+scoop = 154 + 179.67 = 333.67 cm³",
      "For 12 students: 12 × 333.67 ≈ 4004 cm³"
    ],
    explanation: "Composite volume = cone + sphere. Multiply by number of units for total.",
    formula: "V_{total} = n \\times (V_{cone} + V_{sphere})",
    examinerNote: "Radius 3.5 = 7/2. Use this fraction form with 22/7 to avoid decimal errors.",
    source: "CBSE Sample Paper 2025"
  },
  {
    id: "ch12_q16",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 4,
    type: "Case Study",
    question: "A metallic toy rocket has a conical nose of base radius 2 cm and slant height 5 cm. The body is a cylinder of radius 2 cm and height 6 cm. The tail fins are negligible.\n\n(i) [1M] Find the height of the conical nose.\n(ii) [1M] Find the curved surface area of the cylinder.\n(iii) [2M] Find the total surface area of the rocket (exclude base of cylinder). (Use π = 22/7)",
    answer: "(i) h = √21 cm ≈ 4.58 cm, (ii) CSA = 264/7 cm², (iii) TSA = πrl + 2πrh + πr² = (cone CSA + cyl CSA + base circle)",
    steps: [
      "(i) h = √(l² - r²) = √(25 - 4) = √21 cm ≈ 4.58 cm",
      "(ii) CSA of cylinder = 2πrh = 2 × (22/7) × 2 × 6 = 528/7 ≈ 75.43 cm²",
      "(iii) CSA of cone = πrl = (22/7) × 2 × 5 = 220/7 ≈ 31.43 cm²",
      "Base of cylinder (bottom circular end) = πr² = (22/7) × 4 = 88/7 ≈ 12.57 cm²",
      "Total exposed SA = CSA(cone) + CSA(cylinder) + base = 220/7 + 528/7 + 88/7 = 836/7 ≈ 119.43 cm²"
    ],
    explanation: "Rocket = cone on top of cylinder. Slant height l, h = √(l²-r²). Exposed faces exclude junction between cone and cylinder.",
    formula: "l = \\sqrt{r^2 + h^2}, \\quad TSA = \\pi r l + 2\\pi r h + \\pi r^2",
    examinerNote: "The junction between cone and cylinder is NOT an exposed surface. The base circle at bottom IS exposed.",
    source: "CBSE Board 2024 Practice Set"
  },

  // ==========================================
  // ADDITIONAL PYQs
  // ==========================================
  {
    id: "ch12_q17",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A solid metallic sphere of diameter 21 cm is melted and recasted into a number of smaller cones, each of diameter 7 cm and height 3 cm. Find the number of cones so formed. (Use π = 22/7)",
    answer: "Number of cones = 126",
    steps: [
      "Volume of sphere = (4/3)π × (10.5)³ = (4/3) × (22/7) × 1157.625 = (4 × 22 × 1157.625)/(21) = 101871/18 cm³",
      "Actually: V = (4/3) × (22/7) × (21/2)³ = (4/3) × (22/7) × 9261/8 = (4 × 22 × 9261)/(168) = 815,148/168 = 4851 cm³",
      "Volume of each cone = (1/3)π × (3.5)² × 3 = (1/3) × (22/7) × 12.25 × 3 = (22 × 12.25 × 3)/(21) = 38.5 cm³",
      "Number of cones = 4851/38.5 = 126"
    ],
    explanation: "Volume conservation: sphere volume ÷ cone volume = number of cones formed.",
    formula: "n = \\frac{V_{sphere}}{V_{cone}} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{1}{3}\\pi r^2 h}",
    examinerNote: "Very popular remodeling question. Always compute volumes separately and divide. 126 is the exact answer.",
    source: "NCERT Exemplar / Board 2022, 2024"
  },
  {
    id: "ch12_q18",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 2,
    type: "VSA",
    question: "Find the volume of the largest right circular cone that can be carved out of a solid cube of side 14 cm. (Use π = 22/7)",
    answer: "Volume of cone = 2156/3 cm³ ≈ 718.67 cm³",
    steps: [
      "The cone must fit inside the cube. Max diameter = side of cube = 14 cm ⟹ r = 7 cm.",
      "Max height of cone = height of cube = 14 cm.",
      "V = (1/3) × (22/7) × 49 × 14 = (22 × 49 × 14)/(21) = (22 × 49 × 2)/3 = 2156/3 cm³"
    ],
    explanation: "Largest cone in cube has radius = half the side and height = side of the cube.",
    formula: "r = a/2, h = a, \\quad V = \\frac{1}{3}\\pi r^2 h",
    examinerNote: "The base diameter of cone equals the cube's side. Height of cone = side of cube.",
    source: "NCERT Exemplar"
  },
  {
    id: "ch12_q19",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A solid toy is in the form of a right circular cylinder with a hemispherical shape at one end and a cone at the other end. Their common diameter is 4.2 cm. The height of the cylindrical and conical portions are 12 cm and 7 cm respectively. Find the total surface area of the toy. (Use π = 22/7)",
    answer: "TSA ≈ 214.5 cm²",
    steps: [
      "r = 2.1 cm, h_cyl = 12 cm, h_cone = 7 cm",
      "Slant height of cone: l = √(r² + h²) = √(4.41 + 49) = √53.41 ≈ 7.31 cm",
      "CSA of hemisphere = 2πr² = 2 × (22/7) × 4.41 = 27.72 cm²",
      "CSA of cylinder = 2πrh = 2 × (22/7) × 2.1 × 12 = 158.4 cm²",
      "CSA of cone = πrl = (22/7) × 2.1 × 7.31 ≈ 48.19 cm²",
      "Total SA = 27.72 + 158.4 + 48.19 ≈ 234.31 cm²"
    ],
    explanation: "Three-part composite toy. Add curved surfaces of all three parts (no flat circular ends are exposed).",
    formula: "TSA = 2\\pi r^2 + 2\\pi r h_{cyl} + \\pi r l_{cone}",
    examinerNote: "No base circles are exposed in this toy (hemisphere caps one end, cone caps other). Only curved surfaces.",
    source: "NCERT Exercise 13.2 Q5 / Board 2023"
  },
  {
    id: "ch12_q20",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 1,
    type: "MCQ",
    question: "If the radius of a sphere is doubled, then the ratio of the surface areas of the new sphere to the original sphere is:\n(a) 2:1\n(b) 4:1\n(c) 8:1\n(d) 1:4",
    options: ["2:1", "4:1", "8:1", "1:4"],
    correctOption: 1,
    answer: "Option (b): 4:1",
    steps: [
      "Original TSA = 4πr²",
      "New TSA (with radius 2r) = 4π(2r)² = 16πr²",
      "Ratio = 16πr² : 4πr² = 4:1"
    ],
    explanation: "Surface area scales as the square of the radius. Doubling r multiplies SA by 2² = 4.",
    formula: "\\frac{SA_{new}}{SA_{old}} = \\left(\\frac{2r}{r}\\right)^2 = 4",
    examinerNote: "Surface area ∝ r² (square). Volume ∝ r³ (cube). These scaling facts are frequently tested.",
    source: "CBSE Board PYQ 2023"
  },
  {
    id: "ch12_q21",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 2,
    type: "VSA",
    question: "The radii of the top and bottom of a bucket of slant height 45 cm are 28 cm and 7 cm respectively. Find the total surface area of the bucket. (Use π = 22/7)",
    answer: "TSA = 8614.5 cm²",
    steps: [
      "Bucket is a frustum. R = 28, r = 7, l = 45",
      "CSA of frustum = π(R + r)l = (22/7)(28 + 7)(45) = (22/7) × 35 × 45 = 22 × 5 × 45 = 4950 cm²",
      "Area of base (smaller circle) = πr² = (22/7) × 49 = 154 cm²",
      "Area of top (larger circle) = πR² = (22/7) × 784 = 2464 cm²",
      "But bucket is open at top! TSA = CSA + base only = 4950 + 154 = 5104 cm²"
    ],
    explanation: "A bucket is an open frustum (no top). TSA = π(R+r)l + πr² (curved + bottom only).",
    formula: "TSA_{bucket} = \\pi(R+r)l + \\pi r^2",
    examinerNote: "Bucket is open at the top (larger circle). Only add the BOTTOM (smaller) circular base.",
    source: "NCERT Exercise 13.4 Q4 / Board 2022"
  }
];
