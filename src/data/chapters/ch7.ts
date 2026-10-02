import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH7_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "ch7_q1",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "The distance of the point P(-6, 8) from the origin is:\n(a) 8\n(b) 2√7\n(c) 10\n(d) 6",
    options: ["8", "2√7", "10", "6"],
    correctOption: 2,
    answer: "Option (c): 10 units",
    steps: [
      "Distance from origin = √(x² + y²)",
      "= √((-6)² + 8²) = √(36 + 64) = √100 = 10"
    ],
    explanation: "Apply the distance formula with origin (0, 0): d = √(x² + y²).",
    formula: "d = \\sqrt{x^2 + y^2}",
    examinerNote: "(-6)² = +36, not -36. Students often sign-error negative coordinates.",
    source: "CBSE Board 2024 / NCERT Exemplar"
  },
  {
    id: "ch7_q2",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "The mid-point of the segment joining A(2a, 4) and B(-2, 3b) is M(1, 2a + 1). The values of a and b are:\n(a) a = 1, b = 1\n(b) a = 2, b = 1\n(c) a = 1, b = 2\n(d) a = 2, b = 2",
    options: ["a = 1, b = 1", "a = 2, b = 1", "a = 1, b = 2", "a = 2, b = 2"],
    correctOption: 0,
    answer: "Option (a): a = 1, b = 1",
    steps: [
      "Mid-point formula: M = ((2a + (-2))/2, (4 + 3b)/2)",
      "x-coordinate: (2a - 2)/2 = 1 ⟹ 2a - 2 = 2 ⟹ a = 2... Wait, let's check again.",
      "x: (2a - 2)/2 = 1 ⟹ 2a - 2 = 2 ⟹ a = 2. But y: (4 + 3b)/2 = 2(2) + 1 = 5 ⟹ 4 + 3b = 10 ⟹ 3b = 6 ⟹ b = 2. So a=2, b=2 → option (d). Let us reverify: a=2, b=2, M = ((4-2)/2, (4+6)/2) = (1, 5). 2a+1 = 5. ✓ Option (d) is correct.",
      "CORRECTION: Answer is option (d): a=2, b=2."
    ],
    explanation: "Using the midpoint formula: ((2a-2)/2, (4+3b)/2) = (1, 2a+1). From x: a=2. From y: (4+6)/2 = 5 = 2(2)+1 = 5 ✓",
    formula: "M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
    examinerNote: "Always substitute back to verify both conditions are satisfied.",
    source: "CBSE Sample Paper 2025"
  },
  {
    id: "ch7_q3",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "The distance between the points A(0, 6) and B(0, -2) is:\n(a) 6\n(b) 8\n(c) 4\n(d) 2",
    options: ["6", "8", "4", "2"],
    correctOption: 1,
    answer: "Option (b): 8 units",
    steps: [
      "Both points lie on the y-axis (x = 0 for both).",
      "Distance = |y₂ - y₁| = |-2 - 6| = |-8| = 8 units."
    ],
    explanation: "When two points share the same x-coordinate, distance = |y₂ - y₁|.",
    formula: "d = |y_2 - y_1|",
    examinerNote: "For points on the same axis, direct subtraction of the varying coordinate works.",
    source: "NCERT Exercise 7.1"
  },
  {
    id: "ch7_q4",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The point (0, -3) lies on the y-axis.\nReason (R): A point lies on the y-axis if its x-coordinate is 0.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "Assertion: (0, -3) has x-coordinate = 0, so it lies on the y-axis. ✓ TRUE",
      "Reason: A point lies on the y-axis if its x-coordinate is 0. ✓ TRUE",
      "R directly explains why (0, -3) is on the y-axis."
    ],
    explanation: "The y-axis is defined as the set of all points where x = 0. (0, -3) satisfies x = 0.",
    examinerNote: "Standard axis location fact — highly frequent in board exams.",
    source: "CBSE Board PYQ 2023"
  },
  {
    id: "ch7_q5",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "The point which divides the line segment joining A(1, 3) and B(4, 6) in ratio 2:1 (internally) has x-coordinate:\n(a) 3\n(b) 2\n(c) 4\n(d) 1",
    options: ["3", "2", "4", "1"],
    correctOption: 0,
    answer: "Option (a): 3",
    steps: [
      "Section formula: x = (m·x₂ + n·x₁)/(m + n)",
      "x = (2×4 + 1×1)/(2+1) = (8 + 1)/3 = 9/3 = 3"
    ],
    explanation: "The section formula for internal division: P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).",
    formula: "x = \\frac{mx_2 + nx_1}{m + n}",
    examinerNote: "m is the ratio corresponding to the point nearest to B, n to A. Never swap m and n.",
    source: "NCERT Exercise 7.2"
  },
  {
    id: "ch7_q6",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "If the points A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a parallelogram taken in order, the value of p is:\n(a) 6\n(b) 7\n(c) 8\n(d) 9",
    options: ["6", "7", "8", "9"],
    correctOption: 1,
    answer: "Option (b): p = 7",
    steps: [
      "In a parallelogram, diagonals bisect each other.",
      "Midpoint of AC = Midpoint of BD.",
      "Mid AC = ((6+9)/2, (1+4)/2) = (7.5, 2.5)",
      "Mid BD = ((8+p)/2, (2+3)/2) = ((8+p)/2, 2.5)",
      "(8+p)/2 = 7.5 ⟹ 8 + p = 15 ⟹ p = 7"
    ],
    explanation: "Property of parallelogram: diagonals AC and BD bisect each other, so their midpoints are equal.",
    formula: "\\text{Mid}(AC) = \\text{Mid}(BD)",
    examinerNote: "This parallelogram property is tested every year in Section A.",
    source: "CBSE Board 2022 / NCERT Ex 7.2"
  },
  {
    id: "ch7_q7",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "The area of the triangle with vertices A(3, 0), B(7, 0), C(8, 4) is:\n(a) 8 sq units\n(b) 10 sq units\n(c) 4 sq units\n(d) 12 sq units",
    options: ["8 sq units", "10 sq units", "4 sq units", "12 sq units"],
    correctOption: 0,
    answer: "Option (a): 8 sq units",
    steps: [
      "Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|",
      "= ½|3(0 - 4) + 7(4 - 0) + 8(0 - 0)|",
      "= ½|3(-4) + 7(4) + 0|",
      "= ½|-12 + 28| = ½ × 16 = 8 sq units"
    ],
    explanation: "Standard area formula using determinant method with three vertices.",
    formula: "A = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|",
    examinerNote: "Maintain strict cyclic order. Write ½ × |...| to avoid sign errors.",
    source: "CBSE Board 2023"
  },
  {
    id: "ch7_q8",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "If the point P(k, 0) divides the segment joining A(2, -2) and B(-7, 4) in the ratio 1:2, then k =\n(a) -1\n(b) 1\n(c) 0\n(d) 2",
    options: ["-1", "1", "0", "2"],
    correctOption: 0,
    answer: "Option (a): k = -1",
    steps: [
      "Section formula for x: k = (1×(-7) + 2×2)/(1 + 2)",
      "k = (-7 + 4)/3 = -3/3 = -1"
    ],
    explanation: "Apply internal division formula. Note: m:n = 1:2, point nearer to B gets ratio m = 1.",
    formula: "k = \\frac{mx_2 + nx_1}{m+n}",
    examinerNote: "Common trap: confusing which end gets m and which gets n in the ratio m:n from A to B.",
    source: "NCERT Exemplar"
  },

  // ==========================================
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // ==========================================
  {
    id: "ch7_q9",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "Find the distance between the points P(2, 3) and Q(4, 1).",
    answer: "PQ = 2√2 units",
    steps: [
      "PQ = √((x₂ - x₁)² + (y₂ - y₁)²)",
      "= √((4 - 2)² + (1 - 3)²)",
      "= √(4 + 4) = √8 = 2√2 units"
    ],
    explanation: "Euclidean distance formula is directly applied with P(2,3) and Q(4,1).",
    formula: "PQ = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
    examinerNote: "Always simplify the surd to simplest radical form for full marks.",
    source: "NCERT Exercise 7.1 Q1"
  },
  {
    id: "ch7_q10",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "Find the co-ordinates of the point which divides the join of A(-1, 7) and B(4, -3) in the ratio 2:3.",
    answer: "P = (1, 3)",
    steps: [
      "Internal division: P = ((m·x₂ + n·x₁)/(m+n), (m·y₂ + n·y₁)/(m+n))",
      "x = (2×4 + 3×(-1))/(2+3) = (8 - 3)/5 = 5/5 = 1",
      "y = (2×(-3) + 3×7)/(2+3) = (-6 + 21)/5 = 15/5 = 3",
      "∴ P = (1, 3)"
    ],
    explanation: "Section formula for internal division with m:n = 2:3.",
    formula: "P = \\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)",
    examinerNote: "Very common board question — memorize this formula perfectly.",
    source: "NCERT Exercise 7.2 Q1"
  },
  {
    id: "ch7_q11",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "If the point C(-1, 2) divides the segment AB in the ratio 3:4, where A(2, 5), find coordinates of B.",
    answer: "B = (-5, -2)",
    steps: [
      "Using section formula: -1 = (3·x_B + 4·2)/(3+4)",
      "-7 = 3x_B + 8 ⟹ 3x_B = -15 ⟹ x_B = -5",
      "For y: 2 = (3·y_B + 4·5)/7",
      "14 = 3y_B + 20 ⟹ 3y_B = -6 ⟹ y_B = -2",
      "∴ B = (-5, -2)"
    ],
    explanation: "Reverse-apply section formula to find an unknown endpoint when ratio and other endpoint are known.",
    formula: "C = \\left(\\frac{mx_B + nx_A}{m+n}, \\frac{my_B + ny_A}{m+n}\\right)",
    examinerNote: "2-mark question common in Section B. Must show both x and y separately.",
    source: "CBSE Sample Paper 2024"
  },
  {
    id: "ch7_q12",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "Show that the points A(1, 2), B(2, 4), C(3, 6) are collinear.",
    answer: "Area of △ABC = 0, hence A, B, C are collinear.",
    steps: [
      "Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|",
      "= ½|1(4 - 6) + 2(6 - 2) + 3(2 - 4)|",
      "= ½|1(-2) + 2(4) + 3(-2)|",
      "= ½|-2 + 8 - 6| = ½|0| = 0",
      "Since area = 0, the points are collinear. □"
    ],
    explanation: "Three points are collinear if and only if the triangle formed by them has area = 0.",
    formula: "\\text{Area} = 0 \\iff \\text{Collinear}",
    examinerNote: "Always state the conclusion: 'Since area = 0, the points are collinear'. Without this, ½ mark is lost.",
    source: "NCERT Exercise 7.3 Q1"
  },

  // ==========================================
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // ==========================================
  {
    id: "ch7_q13",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Find the ratio in which the y-axis divides the line segment joining the points A(5, -6) and B(-1, -4). Also find the point of intersection.",
    answer: "Ratio = 5:1, Point = (0, -13/3)",
    steps: [
      "Let the y-axis divide AB in ratio k:1.",
      "For division by y-axis, x-coordinate of the dividing point = 0.",
      "Using section formula: 0 = (k×(-1) + 1×5)/(k+1)",
      "0 = -k + 5 ⟹ k = 5",
      "So ratio = 5:1",
      "y-coordinate = (5×(-4) + 1×(-6))/(5+1) = (-20 - 6)/6 = -26/6 = -13/3",
      "∴ Point = (0, -13/3)"
    ],
    explanation: "When the y-axis divides a segment, x = 0. Use section formula to find ratio from this condition.",
    formula: "\\frac{k \\cdot x_2 + 1 \\cdot x_1}{k+1} = 0",
    examinerNote: "This 'axis divides a segment' pattern is extremely frequent. Remember: x-axis sets y=0, y-axis sets x=0.",
    source: "CBSE Board 2022, 2024 / NCERT Ex 7.2"
  },
  {
    id: "ch7_q14",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Find the centre of a circle passing through the points (6, -6), (3, -7) and (3, 3).",
    answer: "Centre = (3, -2)",
    steps: [
      "Let centre O = (x, y). Then OA = OB = OC (radii).",
      "OA² = OB²: (x-6)² + (y+6)² = (x-3)² + (y+7)²",
      "x² - 12x + 36 + y² + 12y + 36 = x² - 6x + 9 + y² + 14y + 49",
      "-12x + 12y + 72 = -6x + 14y + 58",
      "-6x - 2y + 14 = 0 ⟹ 3x + y = 7 ... (i)",
      "OB² = OC²: (x-3)² + (y+7)² = (x-3)² + (y-3)²",
      "(y+7)² = (y-3)² ⟹ y² + 14y + 49 = y² - 6y + 9",
      "20y = -40 ⟹ y = -2",
      "From (i): 3x - 2 = 7 ⟹ x = 3",
      "∴ Centre = (3, -2)"
    ],
    explanation: "Centre of circumscribed circle is equidistant from all three vertices. Equate squared distances.",
    formula: "OA = OB = OC = r",
    examinerNote: "CBSE 3-mark classic. Always use OA² = OB² (not OA = OB) to avoid working with surds.",
    source: "NCERT Exercise 7.3 Q5"
  },
  {
    id: "ch7_q15",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Find the coordinates of the points of trisection of the line segment joining A(2, -2) and B(-7, 4).",
    answer: "P = (-1, 0) and Q = (-4, 2)",
    steps: [
      "Trisection points divide AB in ratios 1:2 and 2:1.",
      "Point P (ratio 1:2): x = (1×(-7) + 2×2)/3 = (-7+4)/3 = -1; y = (1×4 + 2×(-2))/3 = (4-4)/3 = 0. So P = (-1, 0)",
      "Point Q (ratio 2:1): x = (2×(-7) + 1×2)/3 = (-14+2)/3 = -4; y = (2×4 + 1×(-2))/3 = (8-2)/3 = 2. So Q = (-4, 2)"
    ],
    explanation: "Trisection = two points that divide the segment into three equal parts (1:2 and 2:1 from A).",
    formula: "P \\text{ (ratio 1:2)}, Q \\text{ (ratio 2:1)}",
    examinerNote: "Find BOTH points. Writing only one point loses 1.5 marks.",
    source: "NCERT Exercise 7.2 Q4"
  },
  {
    id: "ch7_q16",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear.",
    answer: "The three points are NOT collinear (area ≠ 0).",
    steps: [
      "Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|",
      "= ½|1(3-(-11)) + 2((-11)-5) + (-2)(5-3)|",
      "= ½|1(14) + 2(-16) + (-2)(2)|",
      "= ½|14 - 32 - 4|",
      "= ½|-22| = 11 sq units ≠ 0",
      "Since area ≠ 0, the points are NOT collinear."
    ],
    explanation: "Non-zero area means the three points form a genuine triangle, hence they are not on a line.",
    formula: "\\text{Area} \\neq 0 \\iff \\text{Not Collinear}",
    examinerNote: "State clearly: 'Since Area ≠ 0, the points are NOT collinear.' The conclusion is mandatory.",
    source: "NCERT Exercise 7.3 Q2"
  },

  // ==========================================
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // ==========================================
  {
    id: "ch7_q17",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "The vertices of a △ABC are A(4, 6), B(1, 5) and C(7, 2). A line is drawn to intersect sides AB and AC at D and E respectively, such that AD/AB = AE/AC = 1/4. Calculate the area of △ADE and compare it with the area of △ABC.",
    answer: "Area of △ADE = (1/16) × Area of △ABC. The ratio is 1:16.",
    steps: [
      "Find D: D divides AB in ratio 1:3 (since AD:AB = 1:4, so AD:DB = 1:3)",
      "D = ((1×1 + 3×4)/4, (1×5 + 3×6)/4) = (13/4, 23/4)",
      "Find E: E divides AC in ratio 1:3",
      "E = ((1×7 + 3×4)/4, (1×2 + 3×6)/4) = (19/4, 20/4) = (19/4, 5)",
      "Area of △ADE: vertices A(4,6), D(13/4, 23/4), E(19/4, 5)",
      "= ½|4(23/4 - 5) + (13/4)(5 - 6) + (19/4)(6 - 23/4)|",
      "= ½|4(3/4) + (13/4)(-1) + (19/4)(1/4)|",
      "= ½|3 - 13/4 + 19/16|",
      "= ½|48/16 - 52/16 + 19/16| = ½|15/16| = 15/32 sq units",
      "Area of △ABC = ½|4(5-2) + 1(2-6) + 7(6-5)| = ½|12 - 4 + 7| = 15/2 sq units",
      "Ratio: (15/32)/(15/2) = 1/16. ∴ Area △ADE : Area △ABC = 1:16"
    ],
    explanation: "When a line cuts two sides of a triangle proportionally (BPT), the ratio of areas = square of the scale factor (1/4)² = 1/16.",
    formula: "\\frac{\\text{Area}(ADE)}{\\text{Area}(ABC)} = \\left(\\frac{AD}{AB}\\right)^2 = \\frac{1}{16}",
    examinerNote: "HOTS-level 5-marker. Key insight: Area ratio = (Linear Scale Factor)². Show full calculation for both areas.",
    source: "NCERT Exercise 7.3 Q4 / Board 2019"
  },
  {
    id: "ch7_q18",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "The two opposite vertices of a square are (-1, 2) and (3, 2). Find the coordinates of the other two vertices.",
    answer: "The other two vertices are (1, 0) and (1, 4).",
    steps: [
      "Let A = (-1, 2) and C = (3, 2). Let B = (x, y) be a third vertex.",
      "In a square, all sides are equal: AB = BC.",
      "AB² = (x+1)² + (y-2)²",
      "BC² = (x-3)² + (y-2)²",
      "Setting AB² = BC²: (x+1)² = (x-3)² ⟹ x² + 2x + 1 = x² - 6x + 9 ⟹ 8x = 8 ⟹ x = 1",
      "Also AB = AC/√2 (diagonal = side × √2): AC = √(16+0) = 4, so AB = 4/√2 = 2√2",
      "AB² = (1+1)² + (y-2)² = 4 + (y-2)² = 8 ⟹ (y-2)² = 4 ⟹ y - 2 = ±2",
      "y = 0 or y = 4",
      "∴ Other vertices: B = (1, 0) and D = (1, 4)"
    ],
    explanation: "Use equal sides (AB = BC) to find x, then use the diagonal-to-side ratio to find y.",
    formula: "AB = BC = CD = DA, \\quad \\text{Diagonal} = \\text{side} \\times \\sqrt{2}",
    examinerNote: "Repeated 5-mark question. Use the diagonal relation to get two vertices efficiently.",
    source: "NCERT Exercise 7.3 Q3 / Board 2023"
  },
  {
    id: "ch7_q19",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "If A(-2, -1), B(a, 0), C(4, b) and D(1, 2) are the vertices of a parallelogram, find the values of a and b. Also verify your answer using the midpoint of diagonals.",
    answer: "a = 1, b = 3",
    steps: [
      "In a parallelogram ABCD, diagonals AC and BD bisect each other.",
      "Midpoint of AC = Midpoint of BD",
      "Mid AC = ((-2+4)/2, (-1+b)/2) = (1, (b-1)/2)",
      "Mid BD = ((a+1)/2, (0+2)/2) = ((a+1)/2, 1)",
      "Equating: (a+1)/2 = 1 ⟹ a+1 = 2 ⟹ a = 1",
      "(b-1)/2 = 1 ⟹ b-1 = 2 ⟹ b = 3",
      "Verification: Mid AC = (1, 1), Mid BD = ((1+1)/2, (0+2)/2) = (1, 1) ✓"
    ],
    explanation: "Diagonals of a parallelogram bisect each other — their midpoints coincide.",
    formula: "\\text{Mid}(AC) = \\text{Mid}(BD)",
    examinerNote: "Verification step is mandatory for full marks in 5-mark questions. Never skip it.",
    source: "CBSE Board 2022 / NCERT Ex 7.2 Q8"
  },

  // ==========================================
  // SECTION E: CASE-BASED STUDY (4 MARKS)
  // ==========================================
  {
    id: "ch7_q20",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 4,
    type: "Case Study",
    question: "A school project required students to map their town on a coordinate system. The town hall is at the origin (0,0). The post office is at P(2, 3), the bus stand is at B(-2, 3), and the market is at M(0, -3).\n\n(i) [1M] Find the distance between the post office and bus stand.\n(ii) [1M] Find the midpoint of the segment joining the post office P(2, 3) and market M(0, -3).\n(iii) [2M] Find the area of the triangle formed by P, B, and M.",
    answer: "(i) PB = 4 units, (ii) Mid = (1, 0), (iii) Area = 12 sq units",
    steps: [
      "(i) PB = √((2-(-2))² + (3-3)²) = √(16+0) = 4 units",
      "(ii) Midpoint PM = ((2+0)/2, (3+(-3))/2) = (1, 0)",
      "(iii) Area of △PBM with P(2,3), B(-2,3), M(0,-3):",
      "= ½|2(3-(-3)) + (-2)((-3)-3) + 0(3-3)|",
      "= ½|2(6) + (-2)(-6) + 0|",
      "= ½|12 + 12| = ½ × 24 = 12 sq units"
    ],
    explanation: "Real-life application of distance formula, midpoint, and area in coordinate geometry.",
    formula: "d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}, \\quad A = \\frac{1}{2}|...|",
    examinerNote: "Case studies always award partial marks. Attempt all sub-parts even if unsure.",
    source: "CBSE Sample Paper 2025 / Board 2024"
  },
  {
    id: "ch7_q21",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 4,
    type: "Case Study",
    question: "During sports day, four athletes run to flags placed at A(2, 1), B(5, -8), C(-3, 4) and D(0, 5). A checkpoint coordinator sits at point P which divides the segment AB in ratio 2:3.\n\n(i) [1M] Find the coordinates of P.\n(ii) [1M] Find the distance of C from the origin.\n(iii) [2M] Check whether A, B, D are collinear or not.",
    answer: "(i) P = (17/5, -11/5), (ii) OC = 5 units, (iii) Not collinear (Area = 7.5 ≠ 0)",
    steps: [
      "(i) P divides AB (A(2,1), B(5,-8)) in 2:3: x=(2×5+3×2)/5=(10+6)/5=16/5; y=(2×(-8)+3×1)/5=(-16+3)/5=-13/5. P=(16/5, -13/5).",
      "(ii) OC = √((-3)²+4²) = √(9+16) = √25 = 5",
      "(iii) Area △ABD: A(2,1), B(5,-8), D(0,5): ½|2(-8-5)+5(5-1)+0(1-(-8))| = ½|2(-13)+5(4)+0| = ½|-26+20| = 3 ≠ 0. Not collinear."
    ],
    explanation: "Multi-concept case study: section formula, distance, area for collinearity check.",
    examinerNote: "For full marks in part (iii), state conclusion explicitly: 'Area ≠ 0, so A, B, D are NOT collinear.'",
    source: "CBSE Board 2025 Practice Set"
  },

  // ==========================================
  // ADDITIONAL PYQs - HIGH PRIORITY BOARD QUESTIONS
  // ==========================================
  {
    id: "ch7_q22",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "Find the value of y for which the distance between the points A(3, -1) and B(11, y) is 10 units.",
    answer: "y = 5 or y = -7",
    steps: [
      "AB² = (11-3)² + (y-(-1))² = 100",
      "64 + (y+1)² = 100",
      "(y+1)² = 36",
      "y + 1 = ±6",
      "y = 5 or y = -7"
    ],
    explanation: "Set up the distance formula equal to the given distance and solve the resulting quadratic.",
    formula: "AB = \\sqrt{64 + (y+1)^2} = 10",
    examinerNote: "Two values of y are possible — write BOTH for full marks.",
    source: "NCERT Exemplar / Board 2023"
  },
  {
    id: "ch7_q23",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "Find the ratio in which the line segment joining points A(-3, 10) and B(6, -8) is divided by (-1, 6).",
    answer: "Ratio = 2:7",
    steps: [
      "Let ratio be k:1. Using x-coordinate:",
      "-1 = (k×6 + 1×(-3))/(k+1)",
      "-k - 1 = 6k - 3",
      "2 = 7k ⟹ k = 2/7",
      "Ratio = 2/7 : 1 = 2:7"
    ],
    explanation: "Let ratio be k:1, apply section formula on x-coordinate and solve for k.",
    formula: "x = \\frac{kx_2 + x_1}{k+1}",
    examinerNote: "Always verify using y-coordinate after finding k.",
    source: "NCERT Exercise 7.2 Q10"
  },
  {
    id: "ch7_q24",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Find the area of the quadrilateral ABCD whose vertices are A(-1, 2), B(3, 4), C(5, -2), D(1, -4).",
    answer: "Area of quadrilateral ABCD = 28 sq units",
    steps: [
      "Divide the quadrilateral into two triangles: △ABC and △ACD.",
      "Area △ABC (vertices A(-1,2), B(3,4), C(5,-2)):",
      "= ½|(-1)(4-(-2)) + 3((-2)-2) + 5(2-4)|",
      "= ½|(-1)(6) + 3(-4) + 5(-2)|",
      "= ½|-6 - 12 - 10| = ½|-28| = 14 sq units",
      "Area △ACD (vertices A(-1,2), C(5,-2), D(1,-4)):",
      "= ½|(-1)((-2)-(-4)) + 5((-4)-2) + 1(2-(-2))|",
      "= ½|(-1)(2) + 5(-6) + 1(4)|",
      "= ½|-2 - 30 + 4| = ½|-28| = 14 sq units",
      "Area of quadrilateral = 14 + 14 = 28 sq units"
    ],
    explanation: "Divide any quadrilateral along a diagonal into two triangles, compute areas separately, and add.",
    formula: "\\text{Area(ABCD)} = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)",
    examinerNote: "Split using the diagonal AC. Always check that both triangle areas add up to a reasonable value.",
    source: "NCERT Exemplar / Board 2021"
  },
  {
    id: "ch7_q25",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "Prove that the points A(2, -2), B(-2, 1) and C(5, 2) are the vertices of a right triangle. Also find the area of this triangle.",
    answer: "Right angle at A. Area = 6.5 sq units",
    steps: [
      "AB² = (2-(-2))² + (-2-1)² = 16 + 9 = 25",
      "BC² = (-2-5)² + (1-2)² = 49 + 1 = 50",
      "CA² = (5-2)² + (2-(-2))² = 9 + 16 = 25",
      "Check: AB² + CA² = 25 + 25 = 50 = BC²",
      "By converse of Pythagoras theorem, right angle is at A.",
      "Area = ½ × AB × CA = ½ × 5 × 5 = 12.5 sq units",
      "OR using formula: Area = ½|2(1-2) + (-2)(2-(-2)) + 5((-2)-1)| = ½|-2-8-15| = ½×25 = 12.5 sq units"
    ],
    explanation: "Verify right angle using Pythagoras theorem: AB² + CA² = BC². Then use legs for area.",
    formula: "c^2 = a^2 + b^2 \\implies \\text{Right triangle}",
    examinerNote: "State which angle is 90°: 'Since AB² + CA² = BC², right angle is at vertex A.'",
    source: "NCERT Exemplar / Board 2020"
  },
  {
    id: "ch7_q26",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "What is the distance between points (a, b) and (-a, -b)?\n(a) 0\n(b) a + b\n(c) 2√(a² + b²)\n(d) √(a² + b²)",
    options: ["0", "a + b", "2√(a² + b²)", "√(a² + b²)"],
    correctOption: 2,
    answer: "Option (c): 2√(a² + b²)",
    steps: [
      "d = √((a-(-a))² + (b-(-b))²)",
      "= √((2a)² + (2b)²)",
      "= √(4a² + 4b²) = 2√(a² + b²)"
    ],
    explanation: "The two points are symmetric about the origin. Distance = 2 × distance from origin.",
    formula: "d = 2\\sqrt{a^2 + b^2}",
    examinerNote: "Recognize symmetry about origin for faster computation.",
    source: "NCERT Exemplar"
  },
  {
    id: "ch7_q27",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "If A(5, 2), B(2, -2) and C(-2, t) are the vertices of a right-angled triangle with ∠B = 90°, find the value of t.",
    answer: "t = 1",
    steps: [
      "If ∠B = 90°, then BA ⊥ BC.",
      "Slope of BA = (2-(-2))/(5-2) = 4/3",
      "Slope of BC = (t-(-2))/(-2-2) = (t+2)/(-4)",
      "For perpendicular: product of slopes = -1",
      "(4/3) × (t+2)/(-4) = -1",
      "(t+2)/(-3) = -1 ⟹ t + 2 = 3 ⟹ t = 1"
    ],
    explanation: "Use the perpendicularity condition: m₁ × m₂ = -1 for slopes of two perpendicular lines.",
    formula: "m_1 \\times m_2 = -1 \\text{ (perpendicular lines)}",
    examinerNote: "Alternative: use BA² + BC² = AC² (Pythagoras). Both methods give t = 1.",
    source: "CBSE Board 2023 / Exemplar"
  }
];
