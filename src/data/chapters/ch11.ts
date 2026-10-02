import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH11_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "ch11_q1",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "The area of a circle inscribed in a square of side a is:\n(a) πa²\n(b) πa²/4\n(c) πa²/2\n(d) a²",
    options: ["πa²", "πa²/4", "πa²/2", "a²"],
    correctOption: 1,
    answer: "Option (b): πa²/4",
    steps: [
      "Circle inscribed in a square of side a has diameter = a, so radius r = a/2.",
      "Area = πr² = π(a/2)² = πa²/4"
    ],
    explanation: "When a circle is inscribed in a square, the diameter equals the side of the square.",
    formula: "r = a/2, \\quad A = \\pi r^2 = \\pi a^2/4",
    examinerNote: "Inscribed circle: diameter = side. Circumscribed circle: diameter = diagonal.",
    source: "NCERT Exemplar"
  },
  {
    id: "ch11_q2",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "The area of a sector of a circle with radius r, making an angle θ at the centre is:\n(a) (θ/180) × πr²\n(b) (θ/360) × πr²\n(c) (θ/360) × 2πr\n(d) (θ/180) × 2πr",
    options: [
      "(θ/180) × πr²",
      "(θ/360) × πr²",
      "(θ/360) × 2πr",
      "(θ/180) × 2πr"
    ],
    correctOption: 1,
    answer: "Option (b): (θ/360) × πr²",
    steps: [
      "Area of full circle = πr²",
      "Sector is (θ/360) fraction of the full circle.",
      "Area of sector = (θ/360) × πr²"
    ],
    explanation: "A sector with central angle θ is (θ/360)th part of the full circle.",
    formula: "\\text{Area of sector} = \\frac{\\theta}{360} \\times \\pi r^2",
    examinerNote: "Option (c) is arc length, not area. Confusing area and arc length is the most common error here.",
    source: "NCERT Section 12.2"
  },
  {
    id: "ch11_q3",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "The length of an arc of a circle with radius 12 cm making a central angle of 30° is: (Use π = 22/7)\n(a) 2π cm\n(b) 44π/7 cm\n(c) 22/7 cm\n(d) 44/7 cm",
    options: ["2π cm", "44π/7 cm", "22/7 cm", "44/7 cm"],
    correctOption: 3,
    answer: "Option (d): 44/7 cm",
    steps: [
      "Arc length l = (θ/360) × 2πr",
      "= (30/360) × 2 × (22/7) × 12",
      "= (1/12) × (2 × 22 × 12)/7",
      "= (1/12) × 528/7 = 44/7 cm"
    ],
    explanation: "Arc length formula: l = (θ/360) × 2πr. Sector and arc use the same fraction of the full circle.",
    formula: "l = \\frac{\\theta}{360} \\times 2\\pi r",
    examinerNote: "Arc length uses 2πr (circumference); area uses πr². Never confuse these two formulas.",
    source: "NCERT Exercise 12.2 Q1"
  },
  {
    id: "ch11_q4",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Area of a minor segment = Area of corresponding sector − Area of triangle formed by radii and chord.\nReason (R): A major segment and a minor segment together form the full circle.\n(a) Both A and R are true and R is correct explanation\n(b) Both A and R are true but R is NOT the correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT the correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 1,
    answer: "Option (b): Both true, but R is not the correct explanation of A",
    steps: [
      "A is TRUE: Segment area = Sector area − Triangle area ✓",
      "R is also TRUE: Minor + Major segments = Full circle ✓",
      "However, R (segments adding to circle) does NOT explain why A (segment = sector − triangle) is true.",
      "These are independent facts, so R is not the correct explanation of A."
    ],
    explanation: "A and R are independent geometric facts. Both are correct but unrelated to each other.",
    examinerNote: "The trap here is that both statements are true, but one does NOT explain the other.",
    source: "CBSE Sample Paper 2024"
  },
  {
    id: "ch11_q5",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "The area of the largest triangle inscribed in a semicircle of radius r is:\n(a) r²\n(b) 2r²\n(c) πr²/2\n(d) r²/2",
    options: ["r²", "2r²", "πr²/2", "r²/2"],
    correctOption: 0,
    answer: "Option (a): r²",
    steps: [
      "The largest triangle inscribed in a semicircle has its base as the diameter = 2r.",
      "The maximum height equals the radius r (when apex is at top of semicircle).",
      "Area = ½ × base × height = ½ × 2r × r = r²"
    ],
    explanation: "The largest inscribed triangle has base = diameter and height = radius, giving Area = r².",
    formula: "A = \\frac{1}{2} \\times 2r \\times r = r^2",
    examinerNote: "Classic NCERT concept. Area of this triangle = r², NOT πr²/2 (which is the semicircle area).",
    source: "NCERT Exemplar"
  },
  {
    id: "ch11_q6",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "If the circumference and the area of a circle are numerically equal, then the diameter of the circle is:\n(a) π units\n(b) 2 units\n(c) 4 units\n(d) 2π units",
    options: ["π units", "2 units", "4 units", "2π units"],
    correctOption: 2,
    answer: "Option (c): 4 units",
    steps: [
      "Given: Circumference = Area numerically",
      "2πr = πr²",
      "2 = r ⟹ r = 2",
      "Diameter = 2r = 4 units"
    ],
    explanation: "Setting 2πr = πr² gives r = 2, so diameter = 4.",
    formula: "2\\pi r = \\pi r^2 \\implies r = 2, \\text{ diameter} = 4",
    examinerNote: "Very common 1-mark trap. Answer is diameter (4), not radius (2).",
    source: "NCERT Exemplar / Board PYQ"
  },

  // ==========================================
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // ==========================================
  {
    id: "ch11_q7",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 2,
    type: "VSA",
    question: "Find the area of a sector of a circle with radius 4 cm and angle 30°. (Use π = 3.14)",
    answer: "Area = 4.19 cm² (approximately)",
    steps: [
      "Area of sector = (θ/360) × πr²",
      "= (30/360) × 3.14 × 4²",
      "= (1/12) × 3.14 × 16",
      "= 50.24/12 ≈ 4.19 cm²"
    ],
    explanation: "Direct application of sector area formula.",
    formula: "A = \\frac{30}{360} \\times \\pi r^2",
    examinerNote: "Use π = 3.14 only if specified. Otherwise leave answer in terms of π.",
    source: "NCERT Exercise 12.1 Q4"
  },
  {
    id: "ch11_q8",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 2,
    type: "VSA",
    question: "The minute hand of a clock is 14 cm long. Find the area swept by the minute hand in 5 minutes. (Use π = 22/7)",
    answer: "Area swept = 154/3 cm² ≈ 51.33 cm²",
    steps: [
      "In 60 minutes, minute hand sweeps 360°.",
      "In 5 minutes, angle swept = (5/60) × 360° = 30°",
      "Area = (30/360) × (22/7) × 14²",
      "= (1/12) × (22/7) × 196",
      "= (1/12) × 44 × 14 = (1/12) × 616 = 154/3 cm²"
    ],
    explanation: "Real-life sector area problem. 5 minutes = 30°. Apply sector formula.",
    formula: "\\theta = \\frac{5}{60} \\times 360^\\circ = 30^\\circ",
    examinerNote: "Clock problems: 1 minute = 6°, 5 minutes = 30°, 15 minutes = 90°. Memorize these.",
    source: "NCERT Exercise 12.1 Q9"
  },
  {
    id: "ch11_q9",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 2,
    type: "VSA",
    question: "A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding minor segment. (Use π = 3.14)",
    answer: "Area of minor segment = 28.5 cm²",
    steps: [
      "θ = 90°, r = 10 cm",
      "Area of sector = (90/360) × 3.14 × 100 = (1/4) × 314 = 78.5 cm²",
      "Area of triangle = (1/2) × r × r × sin 90° = (1/2) × 10 × 10 × 1 = 50 cm²",
      "Area of minor segment = 78.5 − 50 = 28.5 cm²"
    ],
    explanation: "Segment area = Sector area − Triangle area. For 90°, triangle area = ½r².",
    formula: "A_{seg} = A_{sector} - A_{triangle} = \\frac{\\theta}{360}\\pi r^2 - \\frac{1}{2}r^2\\sin\\theta",
    examinerNote: "This is the most tested problem type in Chapter 12. Practice all angles: 30°, 60°, 90°, 120°.",
    source: "NCERT Exercise 12.2 Q5"
  },

  // ==========================================
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // ==========================================
  {
    id: "ch11_q10",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 3,
    type: "SA",
    question: "Find the area of the shaded region in a circle of radius 21 cm, where two equal chords AB and CD of length 21 cm are drawn parallel to each other on opposite sides of the centre. (Use π = 22/7)",
    answer: "Area of shaded region = 1386 − 441√3/2 cm² (or using the segment formula for 60° sectors)",
    steps: [
      "For chord AB = 21 cm = r, so the chord equals the radius.",
      "When chord length = radius r, the central angle = 60°.",
      "Each shaded segment has θ = 60°.",
      "Area of sector (60°) = (60/360) × (22/7) × 441 = (1/6) × (22/7) × 441 = (22 × 441)/(42) = 231 cm²",
      "Area of equilateral triangle = (√3/4) × r² = (√3/4) × 441 = 441√3/4 cm²",
      "Area of one segment = 231 − 441√3/4",
      "Total shaded area (2 segments) = 2 × (231 − 441√3/4) = 462 − 441√3/2 cm²"
    ],
    explanation: "When chord = radius, the triangle formed is equilateral (all sides = r), so central angle = 60°.",
    formula: "A_{shaded} = 2 \\times \\left(\\frac{60}{360}\\pi r^2 - \\frac{\\sqrt{3}}{4}r^2\\right)",
    examinerNote: "CBSE frequently tests 'chord = radius ⟹ equilateral triangle ⟹ 60° sector'. Memorize this.",
    source: "NCERT Exemplar / Board PYQ 2021"
  },
  {
    id: "ch11_q11",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 3,
    type: "SA",
    question: "In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find: (i) length of the arc, (ii) area of the sector, (iii) area of the segment. (Use π = 22/7)",
    answer: "(i) 22 cm, (ii) 231 cm², (iii) 231 - 441√3/4 cm²",
    steps: [
      "(i) Arc length = (60/360) × 2 × (22/7) × 21 = (1/6) × 2 × 22 × 3 = 22 cm",
      "(ii) Area of sector = (60/360) × (22/7) × 21² = (1/6) × (22/7) × 441 = 231 cm²",
      "(iii) Area of △OAB (isosceles with OA = OB = 21, ∠AOB = 60°): Since OA = OB and ∠AOB = 60°, triangle is equilateral.",
      "Area of △OAB = (√3/4) × 21² = (√3/4) × 441 = 441√3/4 cm²",
      "Area of segment = 231 - 441√3/4 cm²"
    ],
    explanation: "Three-part question testing arc length, sector area, and segment area for a 60° sector.",
    formula: "l = \\frac{\\theta}{360} \\cdot 2\\pi r, \\quad A_{sector} = \\frac{\\theta}{360}\\pi r^2, \\quad A_{seg} = A_{sector} - A_{\\triangle}",
    examinerNote: "This 3-part question is the most classic example in Chapter 12. All three formulas must be memorized.",
    source: "NCERT Exercise 12.2 Q4"
  },
  {
    id: "ch11_q12",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 3,
    type: "SA",
    question: "A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find the area of each sector. (Use π = 22/7)",
    answer: "Area of each sector = 96.25 mm²",
    steps: [
      "Radius = 35/2 = 17.5 mm",
      "10 equal sectors ⟹ each sector has angle = 360/10 = 36°",
      "Area of each sector = (36/360) × (22/7) × (17.5)²",
      "= (1/10) × (22/7) × 306.25",
      "= (22 × 306.25)/(70) = 6737.5/70 = 96.25 mm²"
    ],
    explanation: "10 equal sectors each have 36°. Apply sector area formula for each.",
    formula: "A = \\frac{36}{360} \\times \\pi r^2",
    examinerNote: "Calculate r correctly: diameter = 35 mm, so r = 17.5 mm (not 35 mm).",
    source: "NCERT Exercise 12.1 Q6"
  },

  // ==========================================
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // ==========================================
  {
    id: "ch11_q13",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 5,
    type: "LA",
    question: "ABCD is a square of side 14 cm. With each vertex as centre, a circle of radius equal to half the side of the square is drawn. Find the area of the shaded region (portions of the circles inside the square but outside the quarter circles at each corner). (Use π = 22/7)",
    answer: "Area of shaded region = 42 cm²",
    steps: [
      "Side of square = 14 cm, r = 7 cm",
      "Area of square = 14² = 196 cm²",
      "Four quarter circles at corners, each with r = 7 cm:",
      "Area of 4 quarter circles = 4 × (1/4) × π × 7² = π × 49 = (22/7) × 49 = 154 cm²",
      "Area of shaded region = Area of square − Area of 4 quarter circles",
      "= 196 − 154 = 42 cm²"
    ],
    explanation: "The four quarter circles together form one full circle. Shaded area = Square − Full circle area.",
    formula: "A_{shaded} = a^2 - 4 \\times \\frac{1}{4}\\pi r^2 = a^2 - \\pi r^2",
    examinerNote: "Extremely common 5-mark question. 4 × (1/4 circle) = 1 full circle. State this clearly.",
    source: "NCERT Exercise 12.3 Q4 / Board 2023"
  },
  {
    id: "ch11_q14",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 5,
    type: "LA",
    question: "The given figure shows a sector of a circle OAB of radius 35 cm, where ∠AOB = 120°. Find the area of the shaded region. (Use π = 22/7)",
    answer: "Area of shaded region = 3850/3 - (1225√3/4) cm²",
    steps: [
      "Area of sector OAB = (120/360) × (22/7) × 35² = (1/3) × (22/7) × 1225",
      "= (1/3) × 22 × 175 = 3850/3 cm²",
      "Area of △OAB (isosceles, OA = OB = 35, ∠AOB = 120°):",
      "Area = (1/2) × OA × OB × sin(120°) = (1/2) × 35 × 35 × (√3/2)",
      "= (1225√3)/4 cm²",
      "Area of minor segment = 3850/3 - 1225√3/4 cm²"
    ],
    explanation: "For 120° sector, triangle OAB uses sin(120°) = √3/2. Area of segment = sector − triangle.",
    formula: "A_{\\triangle} = \\frac{1}{2}r^2 \\sin\\theta",
    examinerNote: "For 120° case, sin(120°) = √3/2. For 60°, sin(60°) = √3/2. For 90°, sin(90°) = 1.",
    source: "NCERT Exemplar / Board 2022"
  },

  // ==========================================
  // SECTION E: CASE-BASED STUDY (4 MARKS)
  // ==========================================
  {
    id: "ch11_q15",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 4,
    type: "Case Study",
    question: "A horse is tied to a peg at corner A of a square field of side 21 m by a rope 14 m long. The rope can swing from corner A.\n\n(i) [1M] What angle is covered by the rope as it sweeps the field from one side to an adjacent side?\n(ii) [1M] Find the area of the sector that the horse can graze.\n(iii) [2M] Find the area of the field that the horse cannot graze. (Use π = 22/7)",
    answer: "(i) 90°, (ii) 154 m², (iii) 287 m²",
    steps: [
      "(i) The corner of a square is 90°, so the rope sweeps a 90° sector.",
      "(ii) Area of sector = (90/360) × (22/7) × 14² = (1/4) × (22/7) × 196 = (22 × 196)/28 = 154 m²",
      "(iii) Area of square field = 21² = 441 m²",
      "Area the horse cannot graze = 441 − 154 = 287 m²"
    ],
    explanation: "Horse tied at corner of square: grazing area = 90° sector (quarter circle).",
    formula: "A_{graze} = \\frac{90}{360}\\pi r^2 = \\frac{\\pi r^2}{4}",
    examinerNote: "Very common real-life application of sectors. Always confirm the angle is 90° for a square corner.",
    source: "NCERT Exercise 12.2 Q7 / Board 2022"
  },
  {
    id: "ch11_q16",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 4,
    type: "Case Study",
    question: "A park is designed in the shape of a circle of diameter 28 m. The park has a flower bed in the form of a sector of central angle 60°. The remaining area has walking paths along arc AB.\n\n(i) [1M] Find the radius of the park.\n(ii) [1M] Find the length of the curved arc AB of the flower bed sector.\n(iii) [2M] Find the area of the flower bed and the remaining area of the park. (Use π = 22/7)",
    answer: "(i) r = 14 m, (ii) arc = 44/3 m, (iii) Flower bed = 308/3 m², Remaining = 616 - 308/3 m²",
    steps: [
      "(i) radius = diameter/2 = 28/2 = 14 m",
      "(ii) Arc length = (60/360) × 2 × (22/7) × 14 = (1/6) × 88 = 44/3 m",
      "(iii) Flower bed area = (60/360) × (22/7) × 14² = (1/6) × (22/7) × 196 = (22 × 196)/42 = 308/3 m²",
      "Total area = (22/7) × 196 = 616 m²",
      "Remaining area = 616 − 308/3 = (1848 − 308)/3 = 1540/3 m²"
    ],
    explanation: "Real-life park design using sector formulas. Remaining area = Total circle − sector.",
    source: "CBSE Sample Paper 2025"
  },

  // ==========================================
  // ADDITIONAL PYQs
  // ==========================================
  {
    id: "ch11_q17",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 3,
    type: "SA",
    question: "Find the area of the shaded region in the figure where ABCD is a square of side 14 cm and circles with diameter BC and AD as diameters have been drawn. (Use π = 22/7)",
    answer: "Area of shaded region = 154 cm²",
    steps: [
      "Diameter of each circle = BC = AD = 14 cm, so r = 7 cm.",
      "Area of each semicircle = (1/2) × (22/7) × 7² = (1/2) × 154 = 77 cm²",
      "Two semicircles together = 154 cm²",
      "This equals one full circle area, and the shaded region = 2 semicircles = 154 cm²."
    ],
    explanation: "Two semicircles with diameter = side of square together make one full circle.",
    formula: "A_{shaded} = 2 \\times \\frac{1}{2}\\pi r^2 = \\pi r^2",
    source: "NCERT Exemplar / Board PYQ"
  },
  {
    id: "ch11_q18",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 2,
    type: "VSA",
    question: "Find the area of a quadrant of a circle whose circumference is 22 cm. (Use π = 22/7)",
    answer: "Area of quadrant = 77/8 cm²",
    steps: [
      "Circumference = 2πr = 22 ⟹ r = 22/(2π) = 7/(2) = 7/2 cm",
      "Quadrant = (1/4) circle, angle = 90°",
      "Area of quadrant = (1/4) × πr² = (1/4) × (22/7) × (7/2)² = (1/4) × (22/7) × (49/4)",
      "= (22 × 49)/(7 × 16) = 1078/112 = 77/8 cm²"
    ],
    explanation: "Find r from circumference, then apply (1/4)πr² for quadrant (90° sector).",
    formula: "r = \\frac{C}{2\\pi}, \\quad A = \\frac{1}{4}\\pi r^2",
    examinerNote: "Common 2-mark question. Quadrant = ¼ circle = sector with 90°.",
    source: "NCERT Exercise 12.1 Q5"
  },
  {
    id: "ch11_q19",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 2,
    type: "VSA",
    question: "The short and long hands of a clock are 4 cm and 6 cm long respectively. Find the sum of distances travelled by their tips in 2 days. (Use π = 22/7)",
    answer: "Total distance = 1912 cm",
    steps: [
      "In 2 days: Short hand (hour hand) completes 2 × 2 = 4 full rotations; Long hand (minute hand) completes 2 × 24 = 48 full rotations.",
      "Distance by short hand tip = 4 × 2π × 4 = 32π = 32 × 22/7 = 704/7 ≈ 100.57 cm",
      "Distance by long hand tip = 48 × 2π × 6 = 576π = 576 × 22/7 = 12672/7 ≈ 1810.29 cm",
      "Total ≈ 1910.86 cm ≈ 1912 cm (using exact fractions: 704/7 + 12672/7 = 13376/7 = 1910.86)"
    ],
    explanation: "Distance tip travels = number of rotations × circumference (2πr).",
    formula: "d = n \\times 2\\pi r",
    examinerNote: "In 2 days: hour hand rotates 4 times (every 12 hours), minute hand rotates 48 times (every hour).",
    source: "NCERT Exercise 12.1 Q3"
  },
  {
    id: "ch11_q20",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 1,
    type: "MCQ",
    question: "The perimeter of a sector of angle 45° and radius 7 cm is: (Use π = 22/7)\n(a) 25.5 cm\n(b) 14 cm\n(c) 11 cm\n(d) 19.5 cm",
    options: ["25.5 cm", "14 cm", "11 cm", "19.5 cm"],
    correctOption: 0,
    answer: "Option (a): 25.5 cm",
    steps: [
      "Perimeter of sector = 2r + arc length",
      "Arc length = (45/360) × 2 × (22/7) × 7 = (1/8) × 44 = 5.5 cm",
      "Perimeter = 2 × 7 + 5.5 = 14 + 5.5 = 19.5 cm"
    ],
    explanation: "Perimeter of a sector includes two radii AND the arc length.",
    formula: "P = 2r + l, \\quad l = \\frac{\\theta}{360} \\times 2\\pi r",
    examinerNote: "Most common mistake: forgetting the 2r (the two straight sides). Perimeter ≠ just arc length.",
    source: "CBSE Board PYQ 2023"
  },
  {
    id: "ch11_q21",
    chapter: 11,
    chapterName: "Areas Related to Circles",
    marks: 3,
    type: "SA",
    question: "In a circle of radius 21 cm, a chord PQ is drawn such that it subtends an angle of 120° at the centre. Find the area of the minor segment. (Use π = 22/7 and √3 ≈ 1.73)",
    answer: "Area of minor segment ≈ 315.3 cm²",
    steps: [
      "θ = 120°, r = 21 cm",
      "Area of sector = (120/360) × (22/7) × 21² = (1/3) × (22/7) × 441 = (22 × 63) = 1386/3 = 462 cm²",
      "Area of △OPQ = (1/2) × r² × sin(120°) = (1/2) × 441 × (√3/2) = 441√3/4 ≈ 441 × 1.73/4 ≈ 190.6 cm²",
      "Area of minor segment = 462 − 190.6 ≈ 271.4 cm²"
    ],
    explanation: "For 120° chord, use sin(120°) = √3/2 for the triangle area.",
    formula: "A_{seg} = \\frac{120}{360}\\pi r^2 - \\frac{1}{2}r^2\\sin 120°",
    examinerNote: "sin(120°) = sin(180° - 60°) = sin(60°) = √3/2. Board examiners check this correctly.",
    source: "NCERT Exercise 12.2 Q9"
  }
];
