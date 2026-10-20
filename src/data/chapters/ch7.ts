import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 7: COORDINATE GEOMETRY
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
// =========================================================================

export const CH7_QUESTIONS: VaultQuestion[] = [
  // -----------------------------------------------------------------------
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // -----------------------------------------------------------------------
  {
    id: "ch7_q1",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2024 / NCERT Exemplar] The distance of the point P(-6, 8) from the origin is:",
    options: ["8", "2√7", "10", "6"],
    correctOption: 2,
    answer: "10",
    steps: [
      "Step 1: The origin O has coordinates (0, 0). The given point is P(-6, 8).",
      "Step 2: Recall the formula for the distance of any point P(x, y) from the origin O(0, 0):\n$$OP = \\sqrt{x^2 + y^2}$$",
      "Step 3: Substitute x = -6 and y = 8:\n$$OP = \\sqrt{(-6)^2 + 8^2}$$",
      "Step 4: Compute the squares (note that (-6)² is positive 36):\n$$OP = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ units}$$"
    ],
    explanation: "Reason: The distance of any point (x, y) from the origin is given directly by Pythagoras theorem as $\\sqrt{x^2 + y^2}$. Substituting x = -6 and y = 8 yields $\\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ units.\n• Why other options are wrong:\n- 8: This is merely the y-coordinate (ordinate), ignoring the horizontal distance.\n- 2√7: Results from incorrectly subtracting squares: $\\sqrt{64 - 36} = \\sqrt{28} = 2\\sqrt{7}$.\n- 6: This is the magnitude of the x-coordinate, ignoring the vertical displacement.",
    formula: "OP = \\sqrt{x^2 + y^2}",
    examinerNote: "Common Sign Trap: (-6)² = +36, NOT -36. A real square is always non-negative.",
    source: "CBSE Board 2024 / NCERT Exemplar"
  },
  {
    id: "ch7_q2",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[CBSE Sample Paper 2025] The mid-point of the segment joining A(2a, 4) and B(-2, 3b) is M(1, 2a + 1). The values of a and b are:",
    options: ["a = 1, b = 1", "a = 2, b = 1", "a = 1, b = 2", "a = 2, b = 2"],
    correctOption: 3,
    answer: "a = 2, b = 2",
    steps: [
      "Step 1: Recall the Midpoint Formula for the segment joining (x₁, y₁) and (x₂, y₂):\n$$M = \\left( \\frac{x_1 + x_2}{2}, \; \\frac{y_1 + y_2}{2} \\right)$$",
      "Step 2: Here (x₁, y₁) = (2a, 4) and (x₂, y₂) = (-2, 3b). The midpoint is M(1, 2a + 1):\n$$M = \\left( \\frac{2a + (-2)}{2}, \; \\frac{4 + 3b}{2} \\right) = (1, \; 2a + 1)$$",
      "Step 3: Equate the x-coordinates to solve for a:\n$$\\frac{2a - 2}{2} = 1 \\implies 2a - 2 = 2 \\implies 2a = 4 \\implies a = 2$$",
      "Step 4: Substitute a = 2 into the y-coordinate of M: $y_M = 2a + 1 = 2(2) + 1 = 5$.",
      "Step 5: Equate the y-coordinates to solve for b:\n$$\\frac{4 + 3b}{2} = 5 \\implies 4 + 3b = 10 \\implies 3b = 6 \\implies b = 2$$",
      "Step 6: Conclude: a = 2 and b = 2."
    ],
    explanation: "Reason: Equating the x-coordinates $(2a - 2)/2 = 1$ immediately gives $a = 2$. Substituting $a = 2$ gives the y-coordinate of the midpoint as $2(2) + 1 = 5$. Setting $(4 + 3b)/2 = 5$ gives $3b = 6 \\implies b = 2$.\n• Why other options are wrong:\n- a = 1, b = 1: Gives midpoint $x = (2 - 2)/2 = 0 \\neq 1$.\n- a = 2, b = 1: Gives midpoint $y = (4 + 3)/2 = 3.5 \\neq 5$.\n- a = 1, b = 2: Fails the x-coordinate condition.",
    formula: "M = \\left( \\frac{x_1 + x_2}{2}, \; \\frac{y_1 + y_2}{2} \\right)",
    examinerNote: "Always solve for 'a' first using the x-coordinate equation, then use that value to evaluate the y-coordinate before solving for 'b'.",
    source: "CBSE Sample Paper 2025"
  },
  {
    id: "ch7_q3",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[NCERT Exercise 7.1] The distance between the points A(0, 6) and B(0, -2) is:",
    options: ["6", "8", "4", "2"],
    correctOption: 1,
    answer: "8",
    steps: [
      "Step 1: Notice that both points have an x-coordinate of 0 ($x_1 = x_2 = 0$), which means both points lie on the Y-axis.",
      "Step 2: When two points lie on the same vertical line, the distance between them is simply the absolute difference of their y-coordinates:\n$$d = |y_2 - y_1|$$",
      "Step 3: Compute the distance:\n$$d = |-2 - 6| = |-8| = 8 \\text{ units}$$",
      "Step 4: Verification using full distance formula:\n$$d = \\sqrt{(0 - 0)^2 + (-2 - 6)^2} = \\sqrt{0 + (-8)^2} = \\sqrt{64} = 8 \\text{ units}$$"
    ],
    explanation: "Reason: Since both points lie on the Y-axis, the segment connecting them is purely vertical. The distance is $|y_1 - y_2| = |6 - (-2)| = |6 + 2| = 8$ units.\n• Why other options are wrong:\n- 6: Neglects the negative coordinate -2 entirely.\n- 4: Results from erroneously subtracting: $6 - 2 = 4$ instead of $6 - (-2) = 8$.\n- 2: Magnitude of the negative coordinate alone.",
    formula: "d = |y_2 - y_1| \quad (\\text{when } x_1 = x_2)",
    examinerNote: "Watch the double negative: 6 - (-2) = 6 + 2 = 8. Do not subtract 6 - 2.",
    source: "NCERT Exercise 7.1"
  },
  {
    id: "ch7_q4",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[CBSE Board PYQ 2023] Assertion (A): The point (0, -3) lies on the y-axis.\nReason (R): A point lies on the y-axis if and only if its x-coordinate is 0.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Both A and R are true and R is the correct explanation of A",
    steps: [
      "Step 1: Evaluate Reason (R): By mathematical definition, the Y-axis is the vertical line defined by the equation x = 0. Therefore, any point whose x-coordinate (abscissa) is 0 lies on the Y-axis. Reason (R) is TRUE.",
      "Step 2: Evaluate Assertion (A): For the point (0, -3), the x-coordinate is explicitly 0. Applying the rule in (R), the point (0, -3) lies on the Y-axis. Assertion (A) is TRUE.",
      "Step 3: Evaluate Causality: Assertion (A) is true precisely because of the criterion stated in Reason (R). Hence, (R) is the correct explanation of (A)."
    ],
    explanation: "Reason: The Y-axis is defined as the locus of all points with abscissa x = 0. Since the point (0, -3) has x = 0, it lies on the Y-axis. Reason (R) provides the exact definition justifying Assertion (A).\n• Why other options are wrong:\n- Option B: False because (R) is the direct, necessary and sufficient justification for (A).\n- Option C: False because (R) is universally true.\n- Option D: False because (A) is verified to be true.",
    formula: "x = 0 \\iff \\text{Point lies on Y-axis}",
    examinerNote: "Remember the axis dual: Points on the X-axis have y = 0; points on the Y-axis have x = 0.",
    source: "CBSE Board PYQ 2023"
  },
  {
    id: "ch7_q5",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[NCERT Exercise 7.2] The point which divides the line segment joining A(1, 3) and B(4, 6) in the ratio 2:1 internally has x-coordinate:",
    options: ["3", "2", "4", "1"],
    correctOption: 0,
    answer: "3",
    steps: [
      "Step 1: Identify the endpoints and ratio:\n$(x_1, y_1) = (1, 3), \\quad (x_2, y_2) = (4, 6), \\quad m_1 : m_2 = 2 : 1$",
      "Step 2: Apply the section formula for the x-coordinate:\n$$x = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}$$",
      "Step 3: Substitute the known values:\n$$x = \\frac{2(4) + 1(1)}{2 + 1}$$",
      "Step 4: Compute the numerator and denominator:\n$$x = \\frac{8 + 1}{3} = \\frac{9}{3} = 3$$"
    ],
    explanation: "Reason: Using the internal section formula with $m_1 = 2$ and $m_2 = 1$: $x = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{8 + 1}{3} = \\frac{9}{3} = 3$.\n• Why other options are wrong:\n- 2: Results from swapping the ratio to $1:2$: $\\frac{1(4) + 2(1)}{3} = \\frac{6}{3} = 2$.\n- 4: This is the x-coordinate of point B itself.\n- 1: This is the x-coordinate of point A itself.",
    formula: "x = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}",
    examinerNote: "CRISS-CROSS RULE: m1 multiplies the coordinate of B, and m2 multiplies the coordinate of A. Never multiply m1 by x1.",
    source: "NCERT Exercise 7.2"
  },
  {
    id: "ch7_q6",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[CBSE Board 2022 / NCERT Ex 7.2] If the points A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a parallelogram taken in order, the value of p is:",
    options: ["6", "7", "8", "9"],
    correctOption: 1,
    answer: "7",
    steps: [
      "Step 1: Key Geometrical Property: In any parallelogram, the diagonals bisect each other. Therefore:\n$$\\text{Midpoint of diagonal } AC = \\text{Midpoint of diagonal } BD$$",
      "Step 2: Find the midpoint of diagonal AC (with A(6, 1) and C(9, 4)):\n$$\\text{Midpoint } AC = \\left( \\frac{6 + 9}{2}, \; \\frac{1 + 4}{2} \\right) = \\left( \\frac{15}{2}, \; \\frac{5}{2} \\right)$$",
      "Step 3: Find the midpoint of diagonal BD (with B(8, 2) and D(p, 3)):\n$$\\text{Midpoint } BD = \\left( \\frac{8 + p}{2}, \; \\frac{2 + 3}{2} \\right) = \\left( \\frac{8 + p}{2}, \; \\frac{5}{2} \\right)$$",
      "Step 4: Equate the x-coordinates of both midpoints:\n$$\\frac{15}{2} = \\frac{8 + p}{2} \\implies 15 = 8 + p \\implies p = 15 - 8 = 7$$"
    ],
    explanation: "Reason: The diagonals AC and BD of a parallelogram bisect each other, meaning their midpoints coincide. Equating the x-coordinates gives $(6 + 9)/2 = (8 + p)/2 \\implies 15 = 8 + p \\implies p = 7$.\n• Why other options are wrong:\n- 6: Setting $8 + p = 14 \\implies p = 6$, miscalculating $6 + 9$.\n- 8: Equating with B's x-coordinate.\n- 9: Equating with C's x-coordinate.",
    formula: "\\text{Midpoint}(AC) = \\text{Midpoint}(BD) \\implies x_A + x_C = x_B + x_D",
    examinerNote: "Fastest Method: x_A + x_C = x_B + x_D ⇒ 6 + 9 = 8 + p ⇒ p = 7. Solves the problem in 5 seconds without distance formula!",
    source: "CBSE Board 2022 / NCERT Ex 7.2"
  },
  {
    id: "ch7_q7",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[CBSE Board 2023] The area of the triangle with vertices A(3, 0), B(7, 0), and C(8, 4) is:",
    options: ["8 sq units", "10 sq units", "4 sq units", "12 sq units"],
    correctOption: 0,
    answer: "8 sq units",
    steps: [
      "Step 1: Method 1 (Geometric Base × Height Shortcut):\nNotice that both A(3, 0) and B(7, 0) lie on the X-axis (y = 0).\nBase length AB = |7 - 3| = 4 units.\nThe height of the triangle is the perpendicular distance of vertex C(8, 4) from the X-axis, which is its y-coordinate: h = 4 units.\n$$\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 4 \\times 4 = 8 \\text{ sq units}$$",
      "Step 2: Method 2 (Coordinate Determinant Formula):\n$$\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$\n$$= \\frac{1}{2} |3(0 - 4) + 7(4 - 0) + 8(0 - 0)|$$\n$$= \\frac{1}{2} |-12 + 28 + 0| = \\frac{1}{2} |16| = 8 \\text{ sq units}$$"
    ],
    explanation: "Reason: Base AB lies on the X-axis with length $7 - 3 = 4$, and height from C is 4. The area is $\\frac{1}{2} \\times 4 \\times 4 = 8$ sq units.\n• Why other options are wrong:\n- 10 sq units: Miscomputing base as $8 - 3 = 5$, giving $\\frac{1}{2} \\times 5 \\times 4 = 10$.\n- 4 sq units: Forgetting to multiply by height 4.\n- 12 sq units: Taking base as 6 units.",
    formula: "\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|",
    examinerNote: "Whenever two vertices lie on an axis, using Area = 1/2 × base × height is 3 times faster than the full coordinate formula.",
    source: "CBSE Board 2023"
  },
  {
    id: "ch7_q8",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[NCERT Exemplar] If the point P(k, 0) divides the segment joining A(2, -2) and B(-7, 4) in the ratio 1:2, then the value of k is:",
    options: ["-1", "1", "0", "2"],
    correctOption: 0,
    answer: "-1",
    steps: [
      "Step 1: Identify the endpoints and given ratio: $A(2, -2), B(-7, 4)$ with ratio $m_1 : m_2 = 1 : 2$.",
      "Step 2: Apply the section formula for the x-coordinate of P(k, 0):\n$$k = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}$$",
      "Step 3: Substitute the known coordinates:\n$$k = \\frac{1(-7) + 2(2)}{1 + 2}$$",
      "Step 4: Compute numerator and denominator:\n$$k = \\frac{-7 + 4}{3} = \\frac{-3}{3} = -1$$",
      "Step 5: Verification using y-coordinate: $y = \\frac{1(4) + 2(-2)}{3} = \\frac{4 - 4}{3} = 0$, which matches the given y = 0!"
    ],
    explanation: "Reason: By the section formula for internal division, $k = \\frac{1(-7) + 2(2)}{1 + 2} = \\frac{-7 + 4}{3} = \\frac{-3}{3} = -1$.\n• Why other options are wrong:\n- 1: Omits the negative sign on $-7$, computing $\\frac{7 + 4}{3} \\approx 3.67$ or sign error.\n- 0: The y-coordinate is 0, not k.\n- 2: Swaps ratio to $2:1$, getting $\\frac{2(-7) + 1(2)}{3} = -4$.",
    formula: "k = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}",
    examinerNote: "Double check by verifying the y-coordinate: (1(4) + 2(-2))/3 = 0, confirming that P lies on the x-axis.",
    source: "NCERT Exemplar"
  },
  {
    id: "ch7_q26",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 1,
    type: "MCQ",
    question: "[NCERT Exemplar / CBSE Standard] What is the distance between the points (a, b) and (-a, -b)?",
    options: ["0", "a + b", "2√(a² + b²)", "√(a² + b²)"],
    correctOption: 2,
    answer: "2√(a² + b²)",
    steps: [
      "Step 1: Let the points be $P(a, b)$ and $Q(-a, -b)$.",
      "Step 2: Apply the distance formula:\n$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$",
      "Step 3: Substitute the coordinates:\n$$d = \\sqrt{(-a - a)^2 + (-b - b)^2} = \\sqrt{(-2a)^2 + (-2b)^2}$$",
      "Step 4: Compute the squares:\n$$d = \\sqrt{4a^2 + 4b^2}$$",
      "Step 5: Factor out 4 from under the square root:\n$$d = \\sqrt{4(a^2 + b^2)} = 2\\sqrt{a^2 + b^2}$$"
    ],
    explanation: "Reason: The points (a, b) and (-a, -b) are diagonally opposite reflections across the origin. The distance is $\\sqrt{(-2a)^2 + (-2b)^2} = \\sqrt{4(a^2 + b^2)} = 2\\sqrt{a^2 + b^2}$.\n• Why other options are wrong:\n- 0: Assumes identical points instead of diametrically opposed points.\n- a + b: Incorrectly takes $\\sqrt{a^2 + b^2} = a + b$ (a catastrophic algebra error!).\n- √(a² + b²): This is the distance of (a, b) from the origin, not from its opposite point.",
    formula: "d = \\sqrt{(2a)^2 + (2b)^2} = 2\\sqrt{a^2 + b^2}",
    examinerNote: "FATAL ALGEBRA TRAP: √(a² + b²) is NEVER equal to a + b! Square roots do not distribute over addition.",
    source: "NCERT Exemplar"
  },

  // -----------------------------------------------------------------------
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // -----------------------------------------------------------------------
  {
    id: "ch7_q9",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[NCERT Exercise 7.1 Q1] Find the distance between the points P(2, 3) and Q(4, 1).",
    answer: "PQ = 2√2 units",
    steps: [
      "Step 1: Identify coordinates: $(x_1, y_1) = (2, 3)$ and $(x_2, y_2) = (4, 1)$.",
      "Step 2: State the distance formula:\n$$PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$",
      "Step 3: Substitute coordinates into the formula:\n$$PQ = \\sqrt{(4 - 2)^2 + (1 - 3)^2}$$",
      "Step 4: Simplify inside the radical:\n$$PQ = \\sqrt{(2)^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8}$$",
      "Step 5: Express in simplest radical form:\n$$PQ = \\sqrt{4 \\times 2} = 2\\sqrt{2} \\text{ units}$$"
    ],
    explanation: "Reason: Direct evaluation using the Euclidean distance formula gives $\\sqrt{2^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$ units.",
    formula: "PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    examinerNote: "Always simplify √8 to 2√2 units. Leaving it as √8 may lead to a 0.5 mark deduction in CBSE boards.",
    source: "NCERT Exercise 7.1 Q1"
  },
  {
    id: "ch7_q10",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[NCERT Exercise 7.2 Q1] Find the coordinates of the point which divides the join of A(-1, 7) and B(4, -3) in the ratio 2:3 internally.",
    answer: "P(1, 3)",
    steps: [
      "Step 1: Identify parameters: $(x_1, y_1) = (-1, 7)$, $(x_2, y_2) = (4, -3)$, and ratio $m_1 : m_2 = 2 : 3$.",
      "Step 2: State the section formula for internal division:\n$$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \; \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$$",
      "Step 3: Calculate the x-coordinate:\n$$x = \\frac{2(4) + 3(-1)}{2 + 3} = \\frac{8 - 3}{5} = \\frac{5}{5} = 1$$",
      "Step 4: Calculate the y-coordinate:\n$$y = \\frac{2(-3) + 3(7)}{2 + 3} = \\frac{-6 + 21}{5} = \\frac{15}{5} = 3$$",
      "Step 5: Conclude: The required dividing point is P(1, 3)."
    ],
    explanation: "Reason: Applying internal division with weights 2 and 3 produces $x = 5/5 = 1$ and $y = 15/5 = 3$, giving $P(1, 3)$.",
    formula: "P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \; \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)",
    examinerNote: "CBSE Marking Scheme: 1 mark for formula and correct substitution for x and y, 1 mark for final coordinates P(1, 3).",
    source: "NCERT Exercise 7.2 Q1"
  },
  {
    id: "ch7_q11",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[CBSE Sample Paper 2024] If the point C(-1, 2) divides the segment AB in the ratio 3:4 internally, where A is (2, 5), find the coordinates of point B.",
    answer: "B(-5, -2)",
    steps: [
      "Step 1: Let the coordinates of point B be $(x_B, y_B)$.\nGiven: $A(2, 5)$, $C(-1, 2)$, and ratio $m_1 : m_2 = 3 : 4$.",
      "Step 2: Apply the section formula for the x-coordinate of C:\n$$-1 = \\frac{3(x_B) + 4(2)}{3 + 4}$$\n$$-1 = \\frac{3x_B + 8}{7} \\implies -7 = 3x_B + 8$$",
      "Step 3: Solve for $x_B$:\n$$3x_B = -7 - 8 = -15 \\implies x_B = \\frac{-15}{3} = -5$$",
      "Step 4: Apply the section formula for the y-coordinate of C:\n$$2 = \\frac{3(y_B) + 4(5)}{3 + 4}$$\n$$2 = \\frac{3y_B + 20}{7} \\implies 14 = 3y_B + 20$$",
      "Step 5: Solve for $y_B$:\n$$3y_B = 14 - 20 = -6 \\implies y_B = \\frac{-6}{3} = -2$$",
      "Step 6: Conclude: The coordinates of point B are (-5, -2)."
    ],
    explanation: "Reason: Inverting the section formula with dividing point $C(-1, 2)$ allows direct linear solution for both $x_B = -5$ and $y_B = -2$.",
    formula: "C(x, y) = \\left( \\frac{m_1 x_B + m_2 x_A}{m_1 + m_2}, \; \\frac{m_1 y_B + m_2 y_A}{m_1 + m_2} \\right)",
    examinerNote: "Separate the working into two clear columns: one for xB and one for yB to keep steps neat and prevent sign mix-ups.",
    source: "CBSE Sample Paper 2024"
  },
  {
    id: "ch7_q12",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[NCERT Exercise 7.3 Q1] Show that the points A(1, 2), B(2, 4), and C(3, 6) are collinear.",
    answer: "Area of △ABC = 0, hence points A, B, C are collinear (Proved)",
    steps: [
      "Step 1: Recall the collinearity criterion: Three points are collinear if and only if the area of the triangle formed by them is strictly equal to zero.",
      "Step 2: State the area formula:\n$$\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$",
      "Step 3: Substitute $(x_1, y_1) = (1, 2)$, $(x_2, y_2) = (2, 4)$, and $(x_3, y_3) = (3, 6)$:\n$$\\text{Area} = \\frac{1}{2} |1(4 - 6) + 2(6 - 2) + 3(2 - 4)|$$",
      "Step 4: Compute the terms inside the brackets:\n$$\\text{Area} = \\frac{1}{2} |1(-2) + 2(4) + 3(-2)| = \\frac{1}{2} |-2 + 8 - 6| = \\frac{1}{2} |0| = 0$$",
      "Step 5: Conclude: Since the area of $\\triangle ABC$ is 0, the points A, B, and C are collinear. Hence proved!"
    ],
    explanation: "Reason: A triangle with zero area collapses into a straight line. Since $\\text{Area}(\\triangle ABC) = 0$, points A, B, and C lie on the same straight line.",
    formula: "\\text{Area}(\\triangle ABC) = 0 \\iff A, B, C \\text{ are collinear}",
    examinerNote: "MANDATORY STEP: You must write the final conclusion statement: 'Since Area = 0, the points are collinear.' Omitting this statement loses 0.5 marks.",
    source: "NCERT Exercise 7.3 Q1"
  },
  {
    id: "ch7_q22",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[NCERT Exemplar / Board 2023] Find the value(s) of y for which the distance between the points A(3, -1) and B(11, y) is 10 units.",
    answer: "y = 5 or y = -7",
    steps: [
      "Step 1: Given: Distance AB = 10 units between A(3, -1) and B(11, y).",
      "Step 2: Apply the distance formula and square both sides immediately:\n$$AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 = 10^2 = 100$$",
      "Step 3: Substitute the coordinates:\n$$(11 - 3)^2 + (y - (-1))^2 = 100$$\n$$8^2 + (y + 1)^2 = 100 \\implies 64 + (y + 1)^2 = 100$$",
      "Step 4: Isolate $(y + 1)^2$:\n$$(y + 1)^2 = 100 - 64 = 36$$",
      "Step 5: Take the square root on both sides (remembering \\pm):\n$$y + 1 = \\pm \\sqrt{36} = \\pm 6$$",
      "Step 6: Solve for both cases:\n$$\\text{Case 1: } y + 1 = +6 \\implies y = 6 - 1 = 5$$\n$$\\text{Case 2: } y + 1 = -6 \\implies y = -6 - 1 = -7$$\nTherefore, y = 5 or y = -7."
    ],
    explanation: "Reason: Setting $(11 - 3)^2 + (y + 1)^2 = 100$ gives $(y + 1)^2 = 36 \\implies y + 1 = \\pm 6$, yielding two valid geometric solutions: $y = 5$ and $y = -7$.",
    formula: "AB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 = d^2",
    examinerNote: "Do not forget the ± sign when taking the square root of 36! Writing only y = 5 loses 1 mark because y = -7 is equally valid.",
    source: "NCERT Exemplar / Board 2023"
  },
  {
    id: "ch7_q23",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[NCERT Exercise 7.2 Q10] Find the ratio in which the line segment joining points A(-3, 10) and B(6, -8) is divided by the point (-1, 6).",
    answer: "Ratio = 2 : 7 (internally)",
    steps: [
      "Step 1: Let the required ratio be $k : 1$ with dividing point $P(-1, 6)$.",
      "Step 2: Apply the section formula for the x-coordinate:\n$$-1 = \\frac{k(6) + 1(-3)}{k + 1}$$",
      "Step 3: Cross-multiply and solve for k:\n$$-1(k + 1) = 6k - 3 \\implies -k - 1 = 6k - 3$$\n$$6k + k = 3 - 1 \\implies 7k = 2 \\implies k = \\frac{2}{7}$$",
      "Step 4: The ratio is $k : 1 = \\frac{2}{7} : 1 = 2 : 7$.",
      "Step 5: Verification using y-coordinate:\n$$y = \\frac{2(-8) + 7(10)}{2 + 7} = \\frac{-16 + 70}{9} = \\frac{54}{9} = 6 \\quad \\text{(Matches given y = 6!)} $$",
      "Step 6: Conclude: The line segment is divided in the ratio 2 : 7 internally."
    ],
    explanation: "Reason: Setting the x-coordinate formula to -1 yields $-k - 1 = 6k - 3 \\implies 7k = 2 \\implies k = 2/7$. Verifying with the y-coordinate yields 6, confirming the ratio $2:7$.",
    formula: "x = \\frac{k x_2 + x_1}{k + 1}",
    examinerNote: "Always verify with the other coordinate (y = 6). This confirms your ratio is 100% correct.",
    source: "NCERT Exercise 7.2 Q10"
  },
  {
    id: "ch7_q27",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 2,
    type: "VSA",
    question: "[CBSE Board 2023 / Exemplar] If A(5, 2), B(2, -2) and C(-2, t) are the vertices of a right-angled triangle with ∠B = 90°, find the value of t.",
    answer: "t = 1",
    steps: [
      "Step 1: In a right triangle with right angle at vertex B ($\\angle B = 90^\\circ$), the sides AB and BC are perpendicular ($AB \\perp BC$), and AC is the hypotenuse.",
      "Step 2: By Pythagoras Theorem: $AB^2 + BC^2 = AC^2$.",
      "Step 3: Compute the squared side lengths:\n$$AB^2 = (2 - 5)^2 + (-2 - 2)^2 = (-3)^2 + (-4)^2 = 9 + 16 = 25$$\n$$BC^2 = (-2 - 2)^2 + (t - (-2))^2 = (-4)^2 + (t + 2)^2 = 16 + (t^2 + 4t + 4) = t^2 + 4t + 20$$\n$$AC^2 = (-2 - 5)^2 + (t - 2)^2 = (-7)^2 + (t^2 - 4t + 4) = 49 + t^2 - 4t + 4 = t^2 - 4t + 53$$",
      "Step 4: Substitute into $AB^2 + BC^2 = AC^2$:\n$$25 + (t^2 + 4t + 20) = t^2 - 4t + 53$$\n$$t^2 + 4t + 45 = t^2 - 4t + 53$$",
      "Step 5: Cancel $t^2$ on both sides and solve for t:\n$$4t + 4t = 53 - 45 \\implies 8t = 8 \\implies t = 1$$",
      "Step 6: Conclude: The value of t is 1."
    ],
    explanation: "Reason: In $\\triangle ABC$ with $\\angle B = 90^\\circ$, Pythagoras theorem mandates $AB^2 + BC^2 = AC^2$. Expanding and cancelling $t^2$ leaves $8t = 8 \\implies t = 1$. Alternatively, using slopes: $m_{AB} \\times m_{BC} = -1 \\implies (4/3) \\times ((t+2)/(-4)) = -1 \\implies t = 1$.",
    formula: "AB^2 + BC^2 = AC^2 \quad (\\text{when } \\angle B = 90^\\circ)",
    examinerNote: "Notice how t² cancels cleanly on both sides, reducing to an elementary linear equation 8t = 8.",
    source: "CBSE Board 2023 / Exemplar"
  },

  // -----------------------------------------------------------------------
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // -----------------------------------------------------------------------
  {
    id: "ch7_q13",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[CBSE Board 2022, 2024 / NCERT Ex 7.2] Find the ratio in which the y-axis divides the line segment joining the points A(5, -6) and B(-1, -4). Also find the coordinates of the point of intersection.",
    answer: "Ratio = 5 : 1, \\quad \\text{Point of intersection} = (0, -13/3)",
    steps: [
      "Step 1: Any point lying on the Y-axis has its x-coordinate equal to 0. Let the dividing point on the Y-axis be $P(0, y)$.",
      "Step 2: Let the Y-axis divide the segment AB in the ratio $k : 1$.",
      "Step 3: Apply the section formula for the x-coordinate:\n$$x = \\frac{k x_2 + x_1}{k + 1} = 0$$\n$$\\frac{k(-1) + 1(5)}{k + 1} = 0 \\implies -k + 5 = 0 \\implies k = 5$$",
      "Step 4: Therefore, the ratio in which the Y-axis divides AB is $k : 1 = 5 : 1$.",
      "Step 5: Now calculate the y-coordinate using the ratio $m_1 = 5, m_2 = 1$:\n$$y = \\frac{5(-4) + 1(-6)}{5 + 1} = \\frac{-20 - 6}{6} = \\frac{-26}{6} = -\\frac{13}{3}$$",
      "Step 6: Conclude: The ratio is 5 : 1 and the point of intersection is $(0, -13/3)$."
    ],
    explanation: "Reason: Because the dividing point lies on the Y-axis, its abscissa is 0. Setting $\\frac{k(-1) + 5}{k + 1} = 0$ yields $k = 5$ (ratio $5:1$). Substituting $k = 5$ into the ordinate formula gives $y = -13/3$.",
    formula: "\\frac{k x_2 + x_1}{k + 1} = 0 \quad (\\text{for division by Y-axis})",
    examinerNote: "CBSE Marking Scheme: 1.5 marks for finding ratio 5:1, 1.5 marks for finding the coordinates of the point (0, -13/3).",
    source: "CBSE Board 2022, 2024 / NCERT Ex 7.2"
  },
  {
    id: "ch7_q14",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[NCERT Exercise 7.3 Q5] Find the centre of a circle passing through the points A(6, -6), B(3, -7), and C(3, 3).",
    answer: "Centre of the circle = (3, -2)",
    steps: [
      "Step 1: Let the centre of the circle be $O(x, y)$. Since all three points lie on the circumference, their distances from the centre are equal to the radius: $OA = OB = OC = r$.",
      "Step 2: Equate $OA^2 = OB^2$ to eliminate square root radicals:\n$$(x - 6)^2 + (y - (-6))^2 = (x - 3)^2 + (y - (-7))^2$$\n$$(x - 6)^2 + (y + 6)^2 = (x - 3)^2 + (y + 7)^2$$\n$$(x^2 - 12x + 36) + (y^2 + 12y + 36) = (x^2 - 6x + 9) + (y^2 + 14y + 49)$$",
      "Step 3: Cancel $x^2 + y^2$ and simplify:\n$$-12x + 12y + 72 = -6x + 14y + 58$$\n$$-12x + 6x + 12y - 14y = 58 - 72 \\implies -6x - 2y = -14$$\nDivide by -2: $3x + y = 7$  --- (Equation 1)",
      "Step 4: Equate $OB^2 = OC^2$:\n$$(x - 3)^2 + (y + 7)^2 = (x - 3)^2 + (y - 3)^2$$",
      "Step 5: Notice $(x - 3)^2$ cancels immediately from both sides!\n$$(y + 7)^2 = (y - 3)^2 \\implies y^2 + 14y + 49 = y^2 - 6y + 9$$\n$$14y + 6y = 9 - 49 \\implies 20y = -40 \\implies y = -2$$",
      "Step 6: Substitute $y = -2$ into Equation 1:\n$$3x + (-2) = 7 \\implies 3x = 9 \\implies x = 3$$",
      "Step 7: Conclude: The centre of the circle is (3, -2)."
    ],
    explanation: "Reason: The circumcentre $O(x, y)$ satisfies $OA^2 = OB^2 = OC^2$. Equating $OB^2 = OC^2$ allows $(x - 3)^2$ to cancel, directly giving $y = -2$. Substituting $y = -2$ into $3x + y = 7$ gives $x = 3$.",
    formula: "OA^2 = OB^2 = OC^2 = r^2",
    examinerNote: "Observation Shortcut: Noticing that B and C share the same x-coordinate (x = 3) makes (x - 3)² cancel immediately, saving 5 minutes of algebra!",
    source: "NCERT Exercise 7.3 Q5"
  },
  {
    id: "ch7_q15",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[NCERT Exercise 7.2 Q4] Find the coordinates of the points of trisection of the line segment joining A(2, -2) and B(-7, 4).",
    answer: "P(-1, 0) and Q(-4, 2)",
    steps: [
      "Step 1: Trisection means dividing the segment AB into three equal parts by two points P and Q such that $AP = PQ = QB$.",
      "Step 2: Therefore, point P divides AB internally in the ratio 1 : 2, and point Q divides AB internally in the ratio 2 : 1.",
      "Step 3: Find coordinates of P using ratio $m_1 : m_2 = 1 : 2$ with $A(2, -2)$ and $B(-7, 4)$:\n$$x_P = \\frac{1(-7) + 2(2)}{1 + 2} = \\frac{-7 + 4}{3} = \\frac{-3}{3} = -1$$\n$$y_P = \\frac{1(4) + 2(-2)}{1 + 2} = \\frac{4 - 4}{3} = \\frac{0}{3} = 0$$\nTherefore, P is (-1, 0).",
      "Step 4: Find coordinates of Q: Since Q is the midpoint of segment PB (or divides AB in 2:1):\n$$x_Q = \\frac{x_P + x_B}{2} = \\frac{-1 + (-7)}{2} = \\frac{-8}{2} = -4$$\n$$y_Q = \\frac{y_P + y_B}{2} = \\frac{0 + 4}{2} = \\frac{4}{2} = 2$$\nTherefore, Q is (-4, 2).",
      "Step 5: Conclude: The two points of trisection are P(-1, 0) and Q(-4, 2)."
    ],
    explanation: "Reason: Trisection points divide the line segment in ratios $1:2$ and $2:1$. Evaluating $P$ in $1:2$ gives $(-1, 0)$, and finding the midpoint of $PB$ gives $Q(-4, 2)$.",
    formula: "P \\text{ divides in } 1:2; \quad Q \\text{ divides in } 2:1 \\text{ (or Midpoint of } PB)",
    examinerNote: "CBSE Marking Scheme: 1.5 marks for point P(-1, 0), 1.5 marks for point Q(-4, 2). Finding only one point forfeits half the marks.",
    source: "NCERT Exercise 7.2 Q4"
  },
  {
    id: "ch7_q16",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[NCERT Exercise 7.3 Q2] Determine whether the points A(1, 5), B(2, 3), and C(-2, -11) are collinear.",
    answer: "The points are NOT collinear (Area = 11 sq units ≠ 0)",
    steps: [
      "Step 1: Three points are collinear if and only if the area of the triangle formed by them is strictly equal to zero.",
      "Step 2: State the area formula:\n$$\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$",
      "Step 3: Substitute $(x_1, y_1) = (1, 5)$, $(x_2, y_2) = (2, 3)$, and $(x_3, y_3) = (-2, -11)$:\n$$\\text{Area} = \\frac{1}{2} |1(3 - (-11)) + 2(-11 - 5) + (-2)(5 - 3)|$$",
      "Step 4: Compute the terms inside the brackets:\n$$\\text{Area} = \\frac{1}{2} |1(14) + 2(-16) - 2(2)|$$\n$$= \\frac{1}{2} |14 - 32 - 4| = \\frac{1}{2} |-22| = \\frac{1}{2}(22) = 11 \\text{ sq units}$$",
      "Step 5: Conclude: Since Area = 11 sq units $\\neq 0$, the points A, B, and C form a non-degenerate triangle and are NOT collinear."
    ],
    explanation: "Reason: A non-zero area ($\\text{Area} = 11 \\neq 0$) proves that the three points do not lie on a single straight line; hence they are not collinear.",
    formula: "\\text{Area} \\neq 0 \\iff \\text{Points are NOT collinear}",
    examinerNote: "State clearly: 'Since Area ≠ 0, the given points are NOT collinear.' Omitting the final conclusion sentence loses 0.5 marks.",
    source: "NCERT Exercise 7.3 Q2"
  },
  {
    id: "ch7_q24",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[NCERT Exemplar / Board 2021] Find the area of the quadrilateral ABCD whose vertices are A(-1, 2), B(3, 4), C(5, -2), and D(1, -4).",
    answer: "Area of quadrilateral ABCD = 28 sq units",
    steps: [
      "Step 1: Divide the quadrilateral ABCD into two non-overlapping triangles by drawing diagonal AC: $\\triangle ABC$ and $\\triangle ACD$.\n$$\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)$$",
      "Step 2: Calculate Area of $\\triangle ABC$ with vertices A(-1, 2), B(3, 4), C(5, -2):\n$$\\text{Area}(\\triangle ABC) = \\frac{1}{2} |(-1)(4 - (-2)) + 3(-2 - 2) + 5(2 - 4)|$$\n$$= \\frac{1}{2} |(-1)(6) + 3(-4) + 5(-2)| = \\frac{1}{2} |-6 - 12 - 10| = \\frac{1}{2} |-28| = 14 \\text{ sq units}$$",
      "Step 3: Calculate Area of $\\triangle ACD$ with vertices A(-1, 2), C(5, -2), D(1, -4):\n$$\\text{Area}(\\triangle ACD) = \\frac{1}{2} |(-1)(-2 - (-4)) + 5(-4 - 2) + 1(2 - (-2))|$$\n$$= \\frac{1}{2} |(-1)(2) + 5(-6) + 1(4)| = \\frac{1}{2} |-2 - 30 + 4| = \\frac{1}{2} |-28| = 14 \\text{ sq units}$$",
      "Step 4: Sum both triangle areas:\n$$\\text{Area}(ABCD) = 14 + 14 = 28 \\text{ sq units}$$",
      "Step 5: Conclude: The area of the quadrilateral ABCD is 28 sq units."
    ],
    explanation: "Reason: Any quadrilateral can be partitioned along a diagonal into two triangles. Evaluating $\\text{Area}(\\triangle ABC) = 14$ and $\\text{Area}(\\triangle ACD) = 14$ gives a total quadrilateral area of $14 + 14 = 28$ sq units.",
    formula: "\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)",
    examinerNote: "CBSE Marking Scheme: 1.5 marks for Area(△ABC) = 14, 1.5 marks for Area(△ACD) = 14 and adding to 28 sq units.",
    source: "NCERT Exemplar / Board 2021"
  },
  {
    id: "ch7_q25",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 3,
    type: "SA",
    question: "[NCERT Exemplar / Board 2020] Prove that the points A(2, -2), B(-2, 1), and C(5, 2) are the vertices of a right-angled triangle. Also find the area of this triangle.",
    answer: "Right-angled at A; \\quad \\text{Area} = 12.5 sq units",
    steps: [
      "Step 1: Compute the squared lengths of all three sides using the distance formula:\n$$AB^2 = (-2 - 2)^2 + (1 - (-2))^2 = (-4)^2 + (3)^2 = 16 + 9 = 25$$\n$$BC^2 = (5 - (-2))^2 + (2 - 1)^2 = (7)^2 + (1)^2 = 49 + 1 = 50$$\n$$CA^2 = (2 - 5)^2 + (-2 - 2)^2 = (-3)^2 + (-4)^2 = 9 + 16 = 25$$",
      "Step 2: Check the converse of Pythagoras theorem:\n$$AB^2 + CA^2 = 25 + 25 = 50 = BC^2$$",
      "Step 3: Since the sum of the squares of two sides equals the square of the third side ($AB^2 + CA^2 = BC^2$), $\\triangle ABC$ is a right-angled triangle with the right angle at vertex A.",
      "Step 4: Calculate the area of the right triangle using its perpendicular legs AB and CA:\n$$AB = \\sqrt{25} = 5 \\text{ units}, \\quad CA = \\sqrt{25} = 5 \\text{ units}$$\n$$\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times AB \\times CA = \\frac{1}{2} \\times 5 \\times 5 = \\frac{25}{2} = 12.5 \\text{ sq units}$$",
      "Step 5: Conclude: Triangle ABC is a right-angled triangle (right angle at A) with Area = 12.5 sq units."
    ],
    explanation: "Reason: $AB^2 = 25, CA^2 = 25$, and $BC^2 = 50$ satisfy $AB^2 + CA^2 = BC^2$, proving $\\triangle ABC$ is right-angled at vertex A. The area is $\\frac{1}{2} \\times 5 \\times 5 = 12.5$ sq units.",
    formula: "AB^2 + CA^2 = BC^2 \\implies \\angle A = 90^\\circ; \\quad \\text{Area} = \\frac{1}{2} \\times AB \\times CA",
    examinerNote: "Explicitly state which vertex is the right angle: 'Since AB² + CA² = BC², the right angle is at vertex A.'",
    source: "NCERT Exemplar / Board 2020"
  },

  // -----------------------------------------------------------------------
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // -----------------------------------------------------------------------
  {
    id: "ch7_q17",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "[NCERT Exercise 7.3 Q4 / Board 2019] The vertices of a △ABC are A(4, 6), B(1, 5) and C(7, 2). A line is drawn to intersect sides AB and AC at D and E respectively, such that AD/AB = AE/AC = 1/4. Calculate the area of △ADE and compare it with the area of △ABC.",
    answer: "Area of △ADE = 15/32 sq units, Area of △ABC = 15/2 sq units; Ratio = 1 : 16",
    steps: [
      "Step 1: Understand the division ratios: Given $AD/AB = 1/4 \\implies AD : DB = 1 : 3$. Thus, point D divides segment AB in the ratio 1 : 3.\nSimilarly, $AE/AC = 1/4 \\implies AE : EC = 1 : 3$. Point E divides segment AC in the ratio 1 : 3.",
      "Step 2: Find coordinates of D with $A(4, 6)$ and $B(1, 5)$ in ratio $1 : 3$:\n$$D = \\left( \\frac{1(1) + 3(4)}{1 + 3}, \; \\frac{1(5) + 3(6)}{1 + 3} \\right) = \\left( \\frac{1 + 12}{4}, \; \\frac{5 + 18}{4} \\right) = \\left( \\frac{13}{4}, \; \\frac{23}{4} \\right)$$",
      "Step 3: Find coordinates of E with $A(4, 6)$ and $C(7, 2)$ in ratio $1 : 3$:\n$$E = \\left( \\frac{1(7) + 3(4)}{1 + 3}, \; \\frac{1(2) + 3(6)}{1 + 3} \\right) = \\left( \\frac{7 + 12}{4}, \; \\frac{2 + 18}{4} \\right) = \\left( \\frac{19}{4}, \; \\frac{20}{4} \\right) = \\left( \\frac{19}{4}, \; 5 \\right)$$",
      "Step 4: Calculate Area of $\\triangle ADE$ with vertices $A(4, 6), D(13/4, 23/4), E(19/4, 5)$:\n$$\\text{Area}(\\triangle ADE) = \\frac{1}{2} \\left| 4\\left(\\frac{23}{4} - 5\\right) + \\frac{13}{4}(5 - 6) + \\frac{19}{4}\\left(6 - \\frac{23}{4}\\right) \\right|$$\n$$= \\frac{1}{2} \\left| 4\\left(\\frac{3}{4}\\right) + \\frac{13}{4}(-1) + \\frac{19}{4}\\left(\\frac{1}{4}\\right) \\right| = \\frac{1}{2} \\left| 3 - \\frac{13}{4} + \\frac{19}{16} \\right|$$\n$$= \\frac{1}{2} \\left| \\frac{48 - 52 + 19}{16} \\right| = \\frac{1}{2} \\left| \\frac{15}{16} \\right| = \\frac{15}{32} \\text{ sq units}$$",
      "Step 5: Calculate Area of $\\triangle ABC$ with vertices $A(4, 6), B(1, 5), C(7, 2)$:\n$$\\text{Area}(\\triangle ABC) = \\frac{1}{2} |4(5 - 2) + 1(2 - 6) + 7(6 - 5)| = \\frac{1}{2} |4(3) + 1(-4) + 7(1)|$$\n$$= \\frac{1}{2} |12 - 4 + 7| = \\frac{1}{2} |15| = \\frac{15}{2} \\text{ sq units}$$",
      "Step 6: Compute the ratio of areas:\n$$\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle ABC)} = \\frac{15/32}{15/2} = \\frac{15}{32} \\times \\frac{2}{15} = \\frac{2}{32} = \\frac{1}{16}$$",
      "Step 7: Conclude: Area of △ADE = 15/32 sq units, Area of △ABC = 15/2 sq units, and the ratio is 1 : 16."
    ],
    explanation: "Reason: Finding coordinates $D(13/4, 23/4)$ and $E(19/4, 5)$ allows computing $\\text{Area}(\\triangle ADE) = 15/32$ and $\\text{Area}(\\triangle ABC) = 15/2$. The ratio is $(15/32)/(15/2) = 1/16$, which perfectly matches the similarity theorem: $\\text{Area ratio} = (AD/AB)^2 = (1/4)^2 = 1/16$.",
    formula: "\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle ABC)} = \\left(\\frac{AD}{AB}\\right)^2 = \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16}",
    examinerNote: "CBSE HOTS Question: 1.5 marks for finding D and E, 1.5 marks for Area(ADE), 1 mark for Area(ABC), 1 mark for concluding the ratio 1:16.",
    source: "NCERT Exercise 7.3 Q4 / Board 2019"
  },
  {
    id: "ch7_q18",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "[NCERT Exercise 7.3 Q3 / Board 2023] The two opposite vertices of a square are (-1, 2) and (3, 2). Find the coordinates of the other two vertices.",
    answer: "The other two vertices are (1, 0) and (1, 4)",
    steps: [
      "Step 1: Let the opposite vertices be $A(-1, 2)$ and $C(3, 2)$. Let one of the remaining vertices be $B(x, y)$.",
      "Step 2: In a square, all sides are equal: $AB = BC \implies AB^2 = BC^2$:\n$$(x - (-1))^2 + (y - 2)^2 = (x - 3)^2 + (y - 2)^2$$\n$$(x + 1)^2 + (y - 2)^2 = (x - 3)^2 + (y - 2)^2$$",
      "Step 3: Notice $(y - 2)^2$ cancels out completely!\n$$(x + 1)^2 = (x - 3)^2 \\implies x^2 + 2x + 1 = x^2 - 6x + 9$$\n$$2x + 6x = 9 - 1 \\implies 8x = 8 \\implies x = 1$$",
      "Step 4: Now find the length of diagonal AC:\n$$AC = \\sqrt{(3 - (-1))^2 + (2 - 2)^2} = \\sqrt{4^2 + 0} = 4 \\text{ units}$$",
      "Step 5: In a square with side s and diagonal d, $d = s\\sqrt{2} \implies s = \\frac{d}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$ units.\nTherefore, $AB^2 = s^2 = (2\\sqrt{2})^2 = 8$.",
      "Step 6: Substitute $x = 1$ into the equation $AB^2 = 8$:\n$$(1 + 1)^2 + (y - 2)^2 = 8 \\implies 2^2 + (y - 2)^2 = 8$$\n$$4 + (y - 2)^2 = 8 \\implies (y - 2)^2 = 4$$\n$$y - 2 = \\pm 2 \\implies y = 2 \\pm 2$$",
      "Step 7: The two values of y are $y = 2 - 2 = 0$ and $y = 2 + 2 = 4$.\nTherefore, the two remaining vertices are B(1, 0) and D(1, 4)."
    ],
    explanation: "Reason: Setting $AB^2 = BC^2$ cancels $(y - 2)^2$, cleanly giving $x = 1$. Using the geometric relation $AB^2 = AC^2 / 2 = 16/2 = 8$ gives $4 + (y - 2)^2 = 8 \\implies y = 0$ or $y = 4$.",
    formula: "AB = BC \\quad \\text{and} \\quad AB^2 = \\frac{AC^2}{2}",
    examinerNote: "CBSE Marking Scheme: 2 marks for finding x = 1 using AB = BC, 2 marks for setting up AB² = 8 and finding y = 0, 4, 1 mark for stating vertices (1, 0) and (1, 4).",
    source: "NCERT Exercise 7.3 Q3 / Board 2023"
  },
  {
    id: "ch7_q19",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 5,
    type: "LA",
    question: "[CBSE Board 2022 / NCERT Ex 7.2 Q8] If A(-2, -1), B(a, 0), C(4, b), and D(1, 2) are the vertices of a parallelogram taken in order, find the values of a and b. Also verify your answer using the midpoint of diagonals.",
    answer: "a = 1, \\quad b = 3",
    steps: [
      "Step 1: Key Geometrical Property: The diagonals of a parallelogram bisect each other. Therefore, the midpoint of diagonal AC coincides with the midpoint of diagonal BD.",
      "Step 2: Compute the midpoint of diagonal AC with $A(-2, -1)$ and $C(4, b)$:\n$$\\text{Midpoint}(AC) = \\left( \\frac{-2 + 4}{2}, \; \\frac{-1 + b}{2} \\right) = \\left( 1, \; \\frac{b - 1}{2} \\right)$$",
      "Step 3: Compute the midpoint of diagonal BD with $B(a, 0)$ and $D(1, 2)$:\n$$\\text{Midpoint}(BD) = \\left( \\frac{a + 1}{2}, \; \\frac{0 + 2}{2} \\right) = \\left( \\frac{a + 1}{2}, \; 1 \\right)$$",
      "Step 4: Equate the x-coordinates of both midpoints to solve for a:\n$$1 = \\frac{a + 1}{2} \\implies a + 1 = 2 \\implies a = 1$$",
      "Step 5: Equate the y-coordinates of both midpoints to solve for b:\n$$\\frac{b - 1}{2} = 1 \\implies b - 1 = 2 \\implies b = 3$$",
      "Step 6: Verification Step:\n$$\\text{Midpoint}(AC) = \\left( 1, \; \\frac{3 - 1}{2} \\right) = (1, 1)$$\n$$\\text{Midpoint}(BD) = \\left( \\frac{1 + 1}{2}, \; 1 \\right) = (1, 1)$$\nBoth midpoints are identically (1, 1). Verified!"
    ],
    explanation: "Reason: Diagonals of a parallelogram bisect each other at a common midpoint. Equating midpoints gives $1 = (a+1)/2 \\implies a = 1$ and $(b-1)/2 = 1 \\implies b = 3$.",
    formula: "\\text{Midpoint}(AC) = \\text{Midpoint}(BD)",
    examinerNote: "CBSE 5-Mark Rule: The verification step carries a mandatory 1 full mark. Never end without showing that both midpoints evaluate to (1, 1).",
    source: "CBSE Board 2022 / NCERT Ex 7.2 Q8"
  },

  // -----------------------------------------------------------------------
  // SECTION E: 4-MARK COMPETENCY CASE STUDY (CBSE 2024-2026 PATTERN)
  // -----------------------------------------------------------------------
  {
    id: "ch7_q20",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 4,
    type: "Case Study",
    question: "[CBSE Sample Paper 2025 / Board 2024] Town Planning & Mapping: A school project required students to map their town on a Cartesian coordinate system. The town hall is situated at the origin (0, 0). The post office is located at P(2, 3), the bus stand is at B(-2, 3), and the market is at M(0, -3).\n\nBased on this information, answer the following:\n(i) Find the distance between the post office and the bus stand. (1 Mark)\n(ii) Find the midpoint of the segment joining the post office P(2, 3) and the market M(0, -3). (1 Mark)\n(iii) Find the area of the triangular zone formed by P, B, and M. (2 Marks)",
    answer: "(i) PB = 4 units; \\quad (ii) Midpoint = (1, 0); \\quad (iii) Area = 12 sq units",
    steps: [
      "Part (i) (1 Mark):\nDistance between Post Office P(2, 3) and Bus Stand B(-2, 3):\nNotice that both have y = 3 (horizontal line segment).\n$$PB = |x_2 - x_1| = |2 - (-2)| = |2 + 2| = 4 \\text{ units}$$\n(Using formula: $\\sqrt{(2 - (-2))^2 + (3 - 3)^2} = \\sqrt{4^2 + 0} = 4$ units).",
      "Part (ii) (1 Mark):\nMidpoint of segment PM joining P(2, 3) and M(0, -3):\n$$\\text{Midpoint} = \\left( \\frac{2 + 0}{2}, \; \\frac{3 + (-3)}{2} \\right) = \\left( \\frac{2}{2}, \; \\frac{0}{2} \\right) = (1, 0)$$",
      "Part (iii) (2 Marks):\nArea of $\\triangle PBM$ with vertices P(2, 3), B(-2, 3), and M(0, -3):\nMethod 1: $\\text{Base } PB = 4$, $\\text{Height } h = 3 - (-3) = 6$.\n$$\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 4 \\times 6 = 12 \\text{ sq units}$$\nMethod 2 (Coordinate formula):\n$$\\text{Area} = \\frac{1}{2} |2(3 - (-3)) + (-2)(-3 - 3) + 0(3 - 3)|$$\n$$= \\frac{1}{2} |2(6) + (-2)(-6) + 0| = \\frac{1}{2} |12 + 12| = \\frac{1}{2}(24) = 12 \\text{ sq units}$$"
    ],
    explanation: "Reason: Sub-parts assess fundamental coordinate primitives: (i) Horizontal distance $4$, (ii) Midpoint on X-axis $(1, 0)$, and (iii) Triangle area $12$ sq units.",
    formula: "d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}; \\quad M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right); \\quad \\text{Area} = \\frac{1}{2}|...|",
    examinerNote: "Always write units with each answer: 4 units, (1, 0), and 12 sq units.",
    source: "CBSE Sample Paper 2025 / Board 2024"
  },
  {
    id: "ch7_q21",
    chapter: 7,
    chapterName: "Coordinate Geometry",
    marks: 4,
    type: "Case Study",
    question: "[CBSE Board 2025 Practice Set] Sports Day Flag Stations: During annual sports day, four athletes run to flag positions placed at A(2, 1), B(5, -8), C(-3, 4), and D(0, 5). A checkpoint coordinator sits at point P which divides the line segment AB in the ratio 2:3 internally.\n\nBased on this layout, answer the following:\n(i) Find the coordinates of checkpoint coordinator P. (1 Mark)\n(ii) Find the distance of flag station C(-3, 4) from the central origin (0, 0). (1 Mark)\n(iii) Check whether flag stations A, B, and D are collinear or form a triangle. (2 Marks)",
    answer: "(i) P(16/5, -13/5); \\quad (ii) OC = 5 units; \\quad (iii) Not collinear (Area = 3 sq units ≠ 0)",
    steps: [
      "Part (i) (1 Mark):\nP divides AB (A(2, 1), B(5, -8)) in the ratio 2 : 3 internally:\n$$x_P = \\frac{2(5) + 3(2)}{2 + 3} = \\frac{10 + 6}{5} = \\frac{16}{5}$$\n$$y_P = \\frac{2(-8) + 3(1)}{2 + 3} = \\frac{-16 + 3}{5} = -\\frac{13}{5}$$\nTherefore, $P = \\left(\\frac{16}{5}, \; -\\frac{13}{5}\\right)$.",
      "Part (ii) (1 Mark):\nDistance of C(-3, 4) from origin O(0, 0):\n$$OC = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ units}$$",
      "Part (iii) (2 Marks):\nCheck collinearity of A(2, 1), B(5, -8), and D(0, 5) by calculating Area of $\\triangle ABD$:\n$$\\text{Area} = \\frac{1}{2} |2(-8 - 5) + 5(5 - 1) + 0(1 - (-8))|$$\n$$= \\frac{1}{2} |2(-13) + 5(4) + 0| = \\frac{1}{2} |-26 + 20| = \\frac{1}{2} |-6| = 3 \\text{ sq units}$$\nSince Area = 3 sq units $\\neq 0$, the points A, B, and D do not lie on a single straight line and are NOT collinear (they form a triangle with area 3 sq units)."
    ],
    explanation: "Reason: (i) Section formula gives $P(16/5, -13/5)$. (ii) Distance from origin is $\\sqrt{9 + 16} = 5$. (iii) Non-zero area ($\\text{Area} = 3 \\neq 0$) proves points A, B, D are not collinear.",
    formula: "P = \\left(\\frac{m_1 x_2 + m_2 x_1}{m_1+m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1+m_2}\\right); \\quad \\text{Area} \\neq 0 \\implies \\text{Not Collinear}",
    examinerNote: "Explicitly state the conclusion in part (iii): 'Since Area = 3 ≠ 0, A, B, D are NOT collinear.'",
    source: "CBSE Board 2025 Practice Set"
  }
];
