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
    formula: "\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2",
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
    formula: "\\text{LSA} = 2\\pi rh, \\quad \\text{TSA} = 2\\pi r(r+h)",
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
    formula: "V_{\\text{cone}} : V_{\\text{cylinder}} = \\frac{1}{3}\\pi r^2h : \\pi r^2h = 1:3",
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
    formula: "n = \\frac{V_{\\text{hemisphere}}}{V_{\\text{cylinder}}} = \\frac{486\\pi}{9\\pi} = 54",
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
    formula: "V = \\frac{1}{3}\\pi r^2 h_{\\text{cone}} + \\frac{2}{3}\\pi r^3",
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
    question: "A solid metallic cuboid of dimensions 9 cm × 8 cm × 3 cm is melted and recast into a solid cube. Find the edge of the resulting cube and the total surface area of the cube.",
    answer: "Edge of cube = 6 cm, Total Surface Area = 216 cm²",
    steps: [
      "Step 1 (Conservation of Volume): When a solid of one shape is melted and recast into another, the total volume remains constant.",
      "Step 2: Volume of original cuboid = Length × Breadth × Height = 9 cm × 8 cm × 3 cm = 216 cm³.",
      "Step 3: Let the edge of the new cube be 'a' cm. Volume of cube = a³.",
      "Step 4: Equate the two volumes: a³ = 216 ⟹ a = ∛216 = 6 cm.",
      "Step 5: Total surface area of the cube = 6 × a² = 6 × (6 cm)² = 6 × 36 = 216 cm²."
    ],
    explanation: "Beginner Note: Melting preserves volume (not surface area). Calculate volume of cuboid (216 cm³), take cube root to get side of cube (6 cm), then compute 6a² = 216 cm².",
    formula: "V_{\\text{cuboid}} = l \\times b \\times h, \\quad a = \\sqrt[3]{V}, \\quad \\text{TSA} = 6a^2",
    examinerNote: "Volume conservation is the governing principle. Remember unit: edge is in cm, volume in cm³, surface area in cm².",
    source: "NCERT Exercise 12.3 / CBSE Board PYQ"
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
    formula: "V_{\\text{earth}} = \\pi(R^2 - r^2)H",
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
    formula: "A = 2\\pi r h + \\pi r l, \\quad l = \\sqrt{r^2 + h_{\\text{cone}}^2}",
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
    answer: "Volume of water left = 1,131,428.57 cm³ ≈ 1.131 m³",
    steps: [
      "Step 1: Identify dimensions of the cylinder — Radius R = 60 cm, Total Height H = 180 cm.",
      "Step 2: Calculate volume of the cylinder full of water:",
      "V(cylinder) = πR²H = (22/7) × (60)² × 180 = (22/7) × 3600 × 180 = 14,256,000 / 7 ≈ 2,036,571.43 cm³",
      "Step 3: Identify dimensions of the submerged solid (cone standing on hemisphere):",
      "Cone: Radius r = 60 cm, height h = 120 cm. Hemisphere: Radius r = 60 cm.",
      "Step 4: Calculate volume of the cone:",
      "V(cone) = (1/3)πr²h = (1/3) × (22/7) × (60)² × 120 = (22/7) × 3600 × 40 = 3,168,000 / 7 ≈ 452,571.43 cm³",
      "Step 5: Calculate volume of the hemisphere:",
      "V(hemisphere) = (2/3)πr³ = (2/3) × (22/7) × (60)³ = (2/3) × (22/7) × 216,000 = 3,168,000 / 7 ≈ 452,571.43 cm³",
      "Step 6: Total volume of submerged solid = V(cone) + V(hemisphere) = 3,168,000/7 + 3,168,000/7 = 6,336,000 / 7 ≈ 905,142.86 cm³",
      "Step 7: By Archimedes' principle, water displaced equals volume of submerged solid.",
      "Water remaining = V(cylinder) - V(solid) = (14,256,000 - 6,336,000) / 7 = 7,920,000 / 7 ≈ 1,131,428.57 cm³",
      "Convert to m³ (since 1 m³ = 10⁶ cm³): 1,131,428.57 / 1,000,000 ≈ 1.131 m³"
    ],
    explanation: "Water displaced equals the volume of the submerged solid. Water remaining in cylinder = Volume of cylinder − (Volume of cone + Volume of hemisphere).",
    formula: "V_{water} = V_{\\text{cylinder}} - (V_{\\text{cone}} + V_{\\text{hemisphere}})",
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
    formula: "V_{\\text{total}} = n \\times (V_{\\text{cone}} + V_{\\text{sphere}})",
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
    formula: "l = \\sqrt{r^2 + h^2}, \\quad \\text{TSA} = \\pi r l + 2\\pi r h + \\pi r^2",
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
      "Step 1: Sphere dimensions — Diameter D = 21 cm ⟹ Radius R = 21/2 cm = 10.5 cm.",
      "Step 2: Calculate volume of the solid sphere:",
      "V(sphere) = (4/3)πR³ = (4/3) × (22/7) × (21/2) × (21/2) × (21/2)",
      "= (4/3) × (22/7) × (9261/8) = (4 × 22 × 9261) / (3 × 7 × 8) = 815,148 / 168 = 4,851 cm³",
      "Step 3: Small cone dimensions — Diameter d = 7 cm ⟹ Radius r = 7/2 cm = 3.5 cm, Height h = 3 cm.",
      "Step 4: Calculate volume of one small cone:",
      "V(cone) = (1/3)πr²h = (1/3) × (22/7) × (7/2)² × 3 = (22/7) × (49/4) = (22 × 7) / 4 = 154 / 4 = 38.5 cm³",
      "Step 5: Number of cones formed = V(sphere) / V(cone) = 4,851 / 38.5 = 126 cones"
    ],
    explanation: "Law of conservation of volume: Melting and recasting does not alter the total volume of metal. Total cones = Sphere volume ÷ Cone volume.",
    formula: "n = \\frac{V_{\\text{sphere}}}{V_{\\text{cone}}} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{1}{3}\\pi r^2 h}",
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
    answer: "TSA ≈ 234.31 cm²",
    steps: [
      "r = 2.1 cm, h_cyl = 12 cm, h_cone = 7 cm",
      "Slant height of cone: l = √(r² + h²) = √(4.41 + 49) = √53.41 ≈ 7.31 cm",
      "CSA of hemisphere = 2πr² = 2 × (22/7) × 4.41 = 27.72 cm²",
      "CSA of cylinder = 2πrh = 2 × (22/7) × 2.1 × 12 = 158.4 cm²",
      "CSA of cone = πrl = (22/7) × 2.1 × 7.31 ≈ 48.19 cm²",
      "Total SA = 27.72 + 158.4 + 48.19 ≈ 234.31 cm²"
    ],
    explanation: "Three-part composite toy. Add curved surfaces of all three parts (no flat circular ends are exposed).",
    formula: "\\text{TSA} = 2\\pi r^2 + 2\\pi r h_{\\text{cyl}} + \\pi r l_{\\text{cone}}",
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
    answer: "TSA = 5104 cm²",
    steps: [
      "Bucket is an open frustum. R = 28 cm, r = 7 cm, l = 45 cm",
      "CSA of frustum = π(R + r)l = (22/7)(28 + 7)(45) = (22/7) × 35 × 45 = 22 × 5 × 45 = 4950 cm²",
      "Area of bottom circular base = πr² = (22/7) × 7² = 154 cm²",
      "Since bucket is open at top, TSA = CSA + base area only = 4950 + 154 = 5104 cm²"
    ],
    explanation: "A bucket is an open frustum (no top). TSA = π(R+r)l + πr² (curved + bottom only).",
    formula: "TSA_{bucket} = \\pi(R+r)l + \\pi r^2",
    examinerNote: "Bucket is open at the top (larger circle). Only add the BOTTOM (smaller) circular base. Note: Frustums are deleted in current NCERT, but this tests composite surface reasoning.",
    source: "NCERT Exercise 13.4 Q4 / Board 2022"
  },
  {
    id: "ch12_q22",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "An exhibition tent is in the form of a cylinder surmounted by a cone. The height of the tent above the ground is 85 m and the height of the cylindrical part is 50 m. If the diameter of the base is 168 m, find the quantity of canvas required to make the tent. Allow 20% extra for folds and for stitching. Give your answer to the nearest m². (Use π = 22/7)",
    answer: "Total canvas required = 60,509 m²",
    steps: [
      "Base radius r = 168 / 2 = 84 m",
      "Height of cylindrical part H = 50 m",
      "Height of conical part h = 85 - 50 = 35 m",
      "Slant height of cone: l = √(r² + h²) = √(84² + 35²) = √(7056 + 1225) = √8281 = 91 m",
      "Curved surface area of tent = CSA(cylinder) + CSA(cone) = 2πrH + πrl = πr(2H + l)",
      "CSA = (22/7) × 84 × [2(50) + 91] = 22 × 12 × (100 + 91) = 264 × 191 = 50,424 m²",
      "Allowance for folds and stitching = 20% of 50,424 = (20/100) × 50,424 = 10,084.8 m²",
      "Total canvas required = 50,424 + 10,084.8 = 60,508.8 m² ≈ 60,509 m²"
    ],
    explanation: "The tent has canvas only on the curved cylindrical wall and conical roof (no canvas on ground). Calculate total CSA then add the 20% stitching margin.",
    formula: "\\text{CSA} = 2\\pi r H + \\pi r l = \\pi r(2H + l), \\quad l = \\sqrt{r^2 + h^2}",
    examinerNote: "Do not add the base circle of the cylinder (ground has no canvas) or the touching circle between cylinder and cone (interior).",
    source: "Training Material Notes / CBSE Board Exemplar"
  },
  {
    id: "ch12_q23",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A solid decorative tank is made in the shape of a cylinder with a hemispherical depression at one end and open at the other end. The height of the cylinder is 1.45 m and its radius is 30 cm. Find the total surface area of the tank in m². (Use π = 22/7)",
    answer: "TSA = 3.3 m²",
    steps: [
      "Radius r = 30 cm = 0.3 m, Height of cylinder h = 1.45 m",
      "Curved surface area of cylinder = 2πrh",
      "Surface area of hemispherical depression = 2πr²",
      "Total surface area = CSA(cylinder) + CSA(hemisphere) = 2πrh + 2πr² = 2πr(h + r)",
      "TSA = 2 × (22/7) × 0.30 × (1.45 + 0.30) = 2 × (22/7) × 0.30 × 1.75",
      "Since 1.75 / 7 = 0.25: TSA = 2 × 22 × 0.30 × 0.25 = 44 × 0.075 = 3.3 m²"
    ],
    explanation: "Depression carves out an inner hemispherical curved face, adding 2πr² to the outer cylindrical surface area.",
    formula: "\\text{TSA} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(h + r)",
    examinerNote: "Unit consistency is critical: convert 30 cm to 0.3 m before calculating, or calculate in cm² (33,000 cm²) and divide by 10,000.",
    source: "Training Material Notes / NCERT Exemplar"
  },
  {
    id: "ch12_q24",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "A solid is in the form of a solid cylinder mounted on a solid hemisphere with the same radius. The diameter of the hemisphere is 21 cm and the total height of the solid is 24.5 cm. Determine the weight of the solid if the weight of 1 cm³ of the material is 6 gm. (Use π = 22/7)",
    answer: "Weight = 43.659 kg",
    steps: [
      "Radius of hemisphere and cylinder: r = 21 / 2 = 10.5 cm",
      "Total height = 24.5 cm ⟹ Height of cylinder h = 24.5 - r = 24.5 - 10.5 = 14 cm",
      "Volume of hemispherical part = (2/3)πr³ = (2/3) × (22/7) × (10.5)³ = 2425.5 cm³",
      "Volume of cylindrical part = πr²h = (22/7) × (10.5)² × 14 = 44 × 110.25 = 4851 cm³",
      "Total volume of solid = 2425.5 + 4851 = 7276.5 cm³",
      "Weight of solid = Volume × Density = 7276.5 × 6 g = 43,659 g = 43.659 kg"
    ],
    explanation: "Volumes of compound solids always add directly. Find the cylinder height by subtracting the hemisphere radius from the total height.",
    formula: "V_{\\text{total}} = \\frac{2}{3}\\pi r^3 + \\pi r^2 h, \\quad \\text{Weight} = V \\times \\rho",
    examinerNote: "Subtracting radius from total height to get cylinder height is the most common student pitfall in composite solid problems.",
    source: "Training Material Notes / CBSE Board PYQ"
  },
  {
    id: "ch12_q25",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A solid is in the form of a cone mounted on a hemisphere such that the center of the base of the cone coincides with the center of the base of the hemisphere. The slant height of the cone is l and the radius of the base of the cone is r/2, where r is the radius of the hemisphere. Prove that the surface area of the solid is (π/4)(11r + 2l)r sq. units.",
    answer: "Surface Area = (π/4)(11r + 2l)r sq. units (Proved)",
    steps: [
      "Curved surface area of the hemisphere = 2πr²",
      "Curved surface area of the cone = π × (r/2) × l = (1/2)πrl",
      "Area of exposed flat annular ring on top of hemisphere = πr² - π(r/2)² = πr² - (1/4)πr² = (3/4)πr²",
      "Total surface area = CSA(hemisphere) + CSA(cone) + Area of exposed ring",
      "TSA = 2πr² + (1/2)πrl + (3/4)πr² = (11/4)πr² + (1/2)πrl",
      "Factoring out (π/4)r: TSA = (π/4)r(11r + 2l) sq. units. Hence Proved!"
    ],
    explanation: "Because the cone's base is smaller than the hemisphere's top (radius r/2 vs r), an annular ring of the flat base remains exposed and must be included in the surface area.",
    formula: "\\text{TSA} = 2\\pi r^2 + \\pi\\left(\\frac{r}{2}\\right)l + \\left[\\pi r^2 - \\pi\\left(\\frac{r}{2}\\right)^2\\right] = \\frac{\\pi r}{4}(11r + 2l)",
    examinerNote: "Do not forget the exposed ring on top of the hemisphere! Many students omit πr² - π(r/2)².",
    source: "Training Material Notes / NCERT Exemplar"
  },
  {
    id: "ch12_q26",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A conical vessel of internal radius 12 cm and height 50 cm is full of water. The water is emptied into a cylindrical vessel with internal radius 10 cm. Find the height to which the liquid rises in the cylindrical vessel.",
    answer: "Height of water rise = 24 cm",
    steps: [
      "Volume of water in cone = (1/3)πr₁²h₁ = (1/3) × π × 12² × 50 = (1/3) × π × 144 × 50 = 2400π cm³",
      "Let h₂ be the height of water rise in the cylinder of radius r₂ = 10 cm",
      "Volume of water in cylinder = πr₂²h₂ = π × 10² × h₂ = 100πh₂ cm³",
      "Since volume of water is conserved: 100πh₂ = 2400π",
      "Dividing both sides by 100π: h₂ = 24 cm"
    ],
    explanation: "When liquid is poured between vessels, the volume remains constant. Canceling π avoids unnecessary multiplications.",
    formula: "\\frac{1}{3}\\pi r_1^2 h_1 = \\pi r_2^2 h_2",
    examinerNote: "Never substitute π = 22/7 or 3.14 when equating volumes! π cancels cleanly on both sides.",
    source: "Training Material Notes / CBSE Board 2023"
  },
  {
    id: "ch12_q27",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have? Find the surface area of the solid. (Use π = 22/7)",
    answer: "Greatest diameter = 7 cm, Surface Area = 332.5 cm²",
    steps: [
      "The greatest diameter of the hemisphere that can fit on the 7 cm × 7 cm face equals the side of the cube = 7 cm.",
      "Radius of hemisphere r = 7 / 2 = 3.5 cm",
      "Total surface area = Total surface area of cube + Curved surface area of hemisphere - Base area of hemisphere",
      "TSA = 6a² + 2πr² - πr² = 6a² + πr²",
      "TSA = 6(7)² + (22/7) × (3.5)² = 6 × 49 + (22/7) × (7/2) × (7/2)",
      "TSA = 294 + 77 / 2 = 294 + 38.5 = 332.5 cm²"
    ],
    explanation: "Mounting the hemisphere covers a circular region πr² on the top face of the cube, but exposes the curved dome 2πr², giving a net increase of +πr².",
    formula: "\\text{TSA} = 6a^2 + \\pi r^2",
    examinerNote: "Formula is 6a² + πr² (not 6a² + 2πr²). The circular base of the hemisphere hides that portion of the cube's top face.",
    source: "Training Material Notes / NCERT Exercise 12.1 Q4"
  },
  {
    id: "ch12_q28",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the remaining solid.",
    answer: "Surface area = (l²/4)(24 + π) sq. units",
    steps: [
      "Edge of the cube = l ⟹ Surface area of 6 faces of cube = 6l²",
      "Diameter of hemisphere = l ⟹ Radius r = l / 2",
      "Curved surface area of scooped hemispherical cavity = 2πr² = 2π(l/2)² = (πl²)/2",
      "Area of top circular opening removed from cube face = πr² = π(l/2)² = (πl²)/4",
      "Surface area of remaining solid = 6l² + 2πr² - πr² = 6l² + πr²",
      "TSA = 6l² + (πl²)/4 = (24l² + πl²)/4 = (l²/4)(24 + π) sq. units"
    ],
    explanation: "Cutting out a cavity increases the paintable surface area by substituting the removed flat circle with a curved bowl.",
    formula: "\\text{TSA} = 6l^2 + \\pi\\left(\\frac{l}{2}\\right)^2 = \\frac{l^2}{4}(24 + \\pi)",
    examinerNote: "Notice that both surmounting a hemisphere and scooping out a hemisphere yield the exact same total surface area formula: 6a² + πr²!",
    source: "Training Material Notes / NCERT Exercise 12.1 Q5"
  },
  {
    id: "ch12_q29",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its surface area. (Use π = 22/7)",
    answer: "Surface Area = 220 mm²",
    steps: [
      "Diameter = 5 mm ⟹ Radius r = 5 / 2 = 2.5 mm",
      "Length of cylindrical portion h = Total length - 2r = 14 - 2(2.5) = 14 - 5 = 9 mm",
      "Curved surface area of cylindrical part = 2πrh = 2 × π × 2.5 × 9 = 45π mm²",
      "Curved surface area of two hemispherical ends = 2 × (2πr²) = 4πr² = 4 × π × (2.5)² = 25π mm²",
      "Total surface area = CSA(cylinder) + 2 × CSA(hemisphere) = 45π + 25π = 70π mm²",
      "TSA = 70 × (22/7) = 10 × 22 = 220 mm²"
    ],
    explanation: "The capsule consists of a cylinder plus two hemispherical caps that together form a complete sphere of surface area 4πr².",
    formula: "\\text{TSA} = 2\\pi rh + 4\\pi r^2 = 2\\pi r(h + 2r)",
    examinerNote: "Do not forget to subtract 2r (both hemispherical ends) to find cylinder height: h = 14 - 5 = 9 mm.",
    source: "Training Material Notes / NCERT Exercise 12.1 Q6"
  },
  {
    id: "ch12_q30",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 4,
    type: "Case Study",
    question: "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the conical top is 2.8 m, find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the rate of ₹500 per m². (Note: The base of the tent is not covered with canvas).",
    answer: "Canvas Area = 44 m², Total Cost = ₹22,000",
    steps: [
      "Radius of cylinder and cone: r = 4 / 2 = 2 m",
      "Height of cylinder h = 2.1 m, Slant height of cone l = 2.8 m",
      "Curved surface area of cylindrical part = 2πrh = 2 × (22/7) × 2 × 2.1 = 4 × (22/7) × 2.1 = 26.4 m²",
      "Curved surface area of conical part = πrl = (22/7) × 2 × 2.8 = 17.6 m²",
      "Total area of canvas = CSA(cylinder) + CSA(cone) = 26.4 + 17.6 = 44 m²",
      "Total cost of canvas = Area × Rate = 44 × 500 = ₹22,000"
    ],
    explanation: "Area of canvas is simply πr(2h + l) since the floor is bare ground. Cost equals area multiplied by rate per square meter.",
    formula: "\\text{Area} = 2\\pi rh + \\pi rl = \\pi r(2h + l), \\quad \\text{Cost} = \\text{Area} \\times \\text{Rate}",
    examinerNote: "Examiners check that base area πr² is NOT included in the canvas calculation.",
    source: "Training Material Notes / NCERT Exercise 12.1 Q7"
  },
  {
    id: "ch12_q31",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "From a solid cylinder whose height is 2.4 cm and diameter 1.4 cm, a conical cavity of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the nearest cm². (Use π = 22/7)",
    answer: "Total surface area ≈ 18 cm²",
    steps: [
      "Radius r = 1.4 / 2 = 0.7 cm, Height h = 2.4 cm",
      "Slant height of conical cavity: l = √(r² + h²) = √(0.7² + 2.4²) = √(0.49 + 5.76) = √6.25 = 2.5 cm",
      "Total surface area of remaining solid = CSA(cylinder) + Base area of cylinder + CSA(conical cavity)",
      "TSA = 2πrh + πr² + πrl = πr(2h + r + l)",
      "TSA = (22/7) × 0.7 × [2(2.4) + 0.7 + 2.5] = 2.2 × [4.8 + 0.7 + 2.5] = 2.2 × 8.0 = 17.6 cm²",
      "To the nearest cm², TSA ≈ 18 cm²"
    ],
    explanation: "Hollowing out the cone leaves: (1) outer cylindrical curved wall (2πrh), (2) flat circular bottom base (πr²), and (3) interior conical wall (πrl).",
    formula: "\\text{TSA} = 2\\pi rh + \\pi r^2 + \\pi rl = \\pi r(2h + r + l)",
    examinerNote: "Do not add the top base circle because that is where the conical cavity was hollowed out and is open.",
    source: "Training Material Notes / NCERT Exercise 12.1 Q8"
  },
  {
    id: "ch12_q32",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A wooden article was made by scooping out a hemisphere from each end of a solid cylinder. If the height of the cylinder is 10 cm and its base is of radius 3.5 cm, find the total surface area of the article. (Use π = 22/7)",
    answer: "Total surface area = 374 cm²",
    steps: [
      "Radius r = 3.5 cm = 7/2 cm, Height h = 10 cm",
      "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 3.5 × 10 = 220 cm²",
      "Curved surface area of two scooped hemispheres = 2 × (2πr²) = 4πr²",
      "CSA(hemispheres) = 4 × (22/7) × 3.5 × 3.5 = 4 × (22/7) × (7/2) × (7/2) = 154 cm²",
      "Total surface area of article = CSA(cylinder) + 2 × CSA(hemisphere) = 220 + 154 = 374 cm²"
    ],
    explanation: "Scooping removes the flat circular ends but replaces each with an internal curved hemispherical surface.",
    formula: "\\text{TSA} = 2\\pi rh + 4\\pi r^2 = 2\\pi r(h + 2r)",
    examinerNote: "Both end faces are scooped, so TSA is simply 2πr(h + 2r).",
    source: "Training Material Notes / NCERT Exercise 12.1 Q9"
  },
  {
    id: "ch12_q33",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, which is surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that 1 cm³ of iron has approximately 8 g mass. (Use π = 3.14)",
    answer: "Mass of pole ≈ 892.26 kg",
    steps: [
      "Step 1: Identify dimensions of the bottom (larger) cylinder:",
      "Height h₁ = 220 cm, Base diameter d₁ = 24 cm ⟹ Radius r₁ = 24 / 2 = 12 cm.",
      "Step 2: Calculate volume of the bottom cylinder:",
      "V₁ = π × r₁² × h₁ = 3.14 × (12)² × 220 = 3.14 × 144 × 220 = 3.14 × 31,680 = 99,475.2 cm³",
      "Step 3: Identify dimensions of the top (smaller) cylinder:",
      "Height h₂ = 60 cm, Radius r₂ = 8 cm.",
      "Step 4: Calculate volume of the top cylinder:",
      "V₂ = π × r₂² × h₂ = 3.14 × (8)² × 60 = 3.14 × 64 × 60 = 3.14 × 3,840 = 12,057.6 cm³",
      "Step 5: Calculate total volume of the iron pole:",
      "V(total) = V₁ + V₂ = 99,475.2 + 12,057.6 = 111,532.8 cm³",
      "Step 6: Compute total mass using given density (1 cm³ has mass 8 g):",
      "Mass in grams = Volume × Density = 111,532.8 × 8 = 892,262.4 g",
      "Step 7: Convert mass to kilograms (1 kg = 1000 g):",
      "Mass in kg = 892,262.4 / 1000 = 892.2624 kg ≈ 892.26 kg"
    ],
    explanation: "The composite pole is made of two stacked cylinders. Total volume is the sum of their individual volumes (V₁ + V₂). Mass is obtained by multiplying total volume by density, then dividing by 1000 to convert grams to kilograms.",
    formula: "V_{\\text{total}} = \\pi r_1^2 h_1 + \\pi r_2^2 h_2, \\quad \\text{Mass} = \\frac{V_{\\text{total}} \\times 8}{1000} \\text{ kg}",
    examinerNote: "Remember to use π = 3.14 as specified in the question, and don't forget to convert final mass from grams to kilograms.",
    source: "NCERT Exercise 12.2 Q6 / CBSE Board 2019, 2023"
  },
  {
    id: "ch12_q34",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 3,
    type: "SA",
    question: "A pen stand made of wood is in the shape of a cuboid with four conical depressions to hold pens. The dimensions of the cuboid are 15 cm by 10 cm by 3.5 cm. The radius of each of the depressions is 0.5 cm and the depth is 1.4 cm. Find the volume of wood in the entire stand. (Use π = 22/7)",
    answer: "Volume of wood ≈ 523.53 cm³",
    steps: [
      "Volume of cuboid = l × b × h = 15 × 10 × 3.5 = 525 cm³",
      "Radius of conical depression r = 0.5 cm, depth h = 1.4 cm",
      "Volume of 1 conical depression = (1/3)πr²h = (1/3) × (22/7) × (0.5)² × 1.4 = (1/3) × (22/7) × 0.25 × 1.4 = 11/30 cm³ ≈ 0.367 cm³",
      "Volume of 4 conical depressions = 4 × (11/30) = 44/30 ≈ 1.47 cm³",
      "Volume of wood in pen stand = Volume of cuboid - Volume of 4 depressions = 525 - 1.47 = 523.53 cm³"
    ],
    explanation: "When cavities are drilled or scooped out of a solid, the volume of the scooped cavities is subtracted from the original solid volume.",
    formula: "V_{\\text{remaining}} = V_{\\text{cuboid}} - 4 \\times V_{\\text{cone}} = lbh - 4\\left(\\frac{1}{3}\\pi r^2 h_c\\right)",
    examinerNote: "Students often forget to multiply the cone volume by 4 for the 4 pen slots.",
    source: "Training Material Notes / NCERT Exercise 12.2 Q4"
  },
  {
    id: "ch12_q35",
    chapter: 12,
    chapterName: "Surface Areas and Volumes",
    marks: 5,
    type: "LA",
    question: "A vessel is in the form of an inverted cone. Its height is 8 cm and the radius of its top, which is open, is 5 cm. It is filled with water up to the brim. When lead shots, each of which is a sphere of radius 0.5 cm, are dropped into the vessel, one-fourth of the water flows out. Find the number of lead shots dropped into the vessel.",
    answer: "Number of lead shots = 100",
    steps: [
      "Height of cone h = 8 cm, radius r = 5 cm",
      "Volume of water in conical vessel = (1/3)πr²h = (1/3) × π × 5² × 8 = (200π)/3 cm³",
      "Volume of water displaced = (1/4) × (200π/3) = (50π)/3 cm³",
      "Radius of spherical lead shot R = 0.5 cm = 1/2 cm",
      "Volume of 1 lead shot = (4/3)πR³ = (4/3) × π × (1/2)³ = (4/3) × π × (1/8) = π/6 cm³",
      "Number of lead shots n = (Volume of water displaced) / (Volume of 1 lead shot)",
      "n = [(50π)/3] / [π/6] = (50/3) × (6/1) = 50 × 2 = 100"
    ],
    explanation: "By Archimedes' principle, the volume of water displaced equals the total volume of all submerged lead shots.",
    formula: "n = \\frac{\\frac{1}{4} V_{\\text{cone}}}{V_{\\text{sphere}}} = \\frac{\\frac{1}{4}\\left(\\frac{1}{3}\\pi r^2 h\\right)}{\\frac{4}{3}\\pi R^3}",
    examinerNote: "Keep π as a symbol throughout! It cancels out completely, saving time and preventing rounding errors.",
    source: "Training Material Notes / NCERT Exercise 12.2 Q5"
  }
];
