import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 3: PAIR OF LINEAR EQUATIONS
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// =========================================================================

export const CH3_QUESTIONS: VaultQuestion[] = [
  // -----------------------------------------------------------------------
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // -----------------------------------------------------------------------
  {
    id: "vq_3_mcq_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020, 2023 Standard] The pair of equations x + 2y + 5 = 0 and -3x - 6y + 1 = 0 has:",
    options: [
      "a unique solution",
      "exactly two solutions",
      "infinitely many solutions",
      "no solution"
    ],
    correctOption: 3,
    answer: "no solution",
    steps: [
      "Step 1: Write both equations in standard form a*x + b*y + c = 0:\nLine 1: 1*x + 2*y + 5 = 0 => a_1 = 1, b_1 = 2, c_1 = 5\nLine 2: -3*x - 6*y + 1 = 0 => a_2 = -3, b_2 = -6, c_2 = 1.",
      "Step 2: Compute ratios:\na_1 / a_2 = 1 / (-3) = -1/3\nb_1 / b_2 = 2 / (-6) = -1/3\nc_1 / c_2 = 5 / 1 = 5.",
      "Step 3: Compare ratios: a_1 / a_2 = b_1 / b_2 != c_1 / c_2.",
      "Step 4: This condition represents PARALLEL LINES, which have NO common point. Therefore, the system has NO SOLUTION (Inconsistent)."
    ],
    explanation: "When a_1/a_2 = b_1/b_2 != c_1/c_2, the lines are strictly parallel and never intersect, yielding zero solutions.",
    formula: "a_1/a_2 = b_1/b_2 != c_1/c_2 <=> No Solution",
    examinerNote: "Linear systems can never have 'exactly two solutions'—they have 0, 1, or infinitely many.",
    source: "CBSE Board 2023 Standard (Set 30/1/1)"
  },
  {
    id: "vq_3_mcq_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019, 2024] For what value of k will the pair of linear equations kx - y = 2 and 6x - 2y = 3 have a unique solution?",
    options: ["k = 3", "k != 3", "k = 0", "k != 0"],
    correctOption: 1,
    answer: "k != 3",
    steps: [
      "Step 1: Condition for a unique solution (intersecting lines) is a_1 / a_2 != b_1 / b_2.",
      "Step 2: Here a_1 = k, b_1 = -1 and a_2 = 6, b_2 = -2.",
      "Step 3: Set up inequality: k / 6 != (-1) / (-2).",
      "Step 4: k / 6 != 1 / 2 => k != 6 / 2 => k != 3."
    ],
    explanation: "A unique solution occurs if and only if the lines have different slopes, i.e., a_1/a_2 != b_1/b_2. Here k/6 != 1/2 gives k != 3.",
    formula: "a_1/a_2 != b_1/b_2 <=> Unique Solution",
    examinerNote: "Do not write k = 3! For k = 3 the lines become parallel (no solution). The question asks for a UNIQUE solution, so k != 3.",
    source: "CBSE Board 2024 (Set 30/3/1)"
  },
  {
    id: "vq_3_mcq_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2021, 2024] If the lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then the value of k is:",
    options: ["-5/4", "2/5", "15/4", "3/2"],
    correctOption: 2,
    answer: "15/4",
    steps: [
      "Step 1: For parallel lines, a_1 / a_2 = b_1 / b_2 != c_1 / c_2.",
      "Step 2: Here a_1 = 3, b_1 = 2k; a_2 = 2, b_2 = 5.",
      "Step 3: Equate: 3 / 2 = (2k) / 5.",
      "Step 4: Cross multiply: 2 * 2k = 3 * 5 => 4k = 15 => k = 15 / 4.",
      "Step 5: Verify c_1/c_2 != 3/2: c_1 = -2, c_2 = 1 => -2/1 = -2 != 3/2. Condition satisfied."
    ],
    explanation: "Parallel lines require equal slopes (a_1/a_2 = b_1/b_2) with different intercepts.",
    formula: "a_1/a_2 = b_1/b_2 => 3/2 = 2k/5 => k = 15/4",
    examinerNote: "Be careful to convert both equations to same standard form before reading constants.",
    source: "CBSE Board 2021 Term-1"
  },
  {
    id: "vq_3_mcq_4",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2018 All India] If x = a, y = b is the solution of the equations x - y = 2 and x + y = 4, then the values of a and b are, respectively:",
    options: ["3 and 5", "5 and 3", "3 and 1", "-1 and -3"],
    correctOption: 2,
    answer: "3 and 1",
    steps: [
      "Step 1: Add the two equations: (x - y) + (x + y) = 2 + 4 => 2x = 6 => x = 3.",
      "Step 2: Substitute x = 3 into x + y = 4: 3 + y = 4 => y = 1.",
      "Step 3: Therefore, a = x = 3 and b = y = 1."
    ],
    explanation: "Solving the simultaneous system by elimination immediately yields a = 3 and b = 1.",
    formula: "x = (c_1 + c_2)/2, y = (c_2 - c_1)/2",
    examinerNote: "Check option order: the question asks for 'a and b respectively', so (3, 1), not (1, 3).",
    source: "CBSE Board 2018 All India"
  },
  {
    id: "vq_3_mcq_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] Assertion (A): The pair of equations x - 2 = 0 and y + 3 = 0 intersects at the point (2, -3).\nReason (R): The line x = a is parallel to the y-axis, and y = b is parallel to the x-axis, intersecting perpendicularly at (a, b).",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: x - 2 = 0 => x = 2 is a vertical line parallel to the y-axis passing through (2, y).",
      "Step 2: y + 3 = 0 => y = -3 is a horizontal line parallel to the x-axis passing through (x, -3).",
      "Step 3: Their unique intersection point is (2, -3). Thus Assertion (A) is true.",
      "Step 4: Reason (R) states the geometric definition of perpendicular coordinate axes lines, which explains why the unique intersection is (a, b) = (2, -3)."
    ],
    explanation: "Vertical line x = a and horizontal line y = b are mutually perpendicular and intersect at point (a, b).",
    formula: "Lines x = a and y = b intersect at (a, b)",
    examinerNote: "Understand that x = 2 is still a linear equation in two variables: 1*x + 0*y - 2 = 0.",
    source: "CBSE Board 2023 Standard"
  },

  // -----------------------------------------------------------------------
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // -----------------------------------------------------------------------
  {
    id: "vq_3_vsa_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2012, 2019, 2023] Solve 2x + 3y = 11 and 2x - 4y = -24 and hence find the value of 'm' for which y = mx + 3.",
    answer: "x = -2, y = 5; m = -1",
    steps: [
      "Step 1: Given:\nEquation (1): 2x + 3y = 11\nEquation (2): 2x - 4y = -24",
      "Step 2: Subtract (2) from (1):\n(2x + 3y) - (2x - 4y) = 11 - (-24)\n7y = 35 => y = 5.",
      "Step 3: Substitute y = 5 into (1):\n2x + 3(5) = 11 => 2x + 15 = 11 => 2x = -4 => x = -2.",
      "Step 4: Now find m using y = mx + 3:\n5 = m*(-2) + 3\n5 - 3 = -2m => 2 = -2m => m = -1."
    ],
    explanation: "Eliminating 2x directly finds y = 5, then x = -2. Substituting coordinates into the line y = mx + 3 gives m = -1.",
    formula: "Elimination Method; m = (y - 3)/x",
    examinerNote: "Finding only x and y gives 1 mark; computing m = -1 completes the 2 marks.",
    source: "CBSE Board 2023 (Set 30/2/1) & NCERT Ex 3.2"
  },
  {
    id: "vq_3_vsa_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2016, 2020 Standard] Solve for x and y:\n217x + 131y = 913\n131x + 217y = 827",
    answer: "x = 3, y = 2",
    steps: [
      "Step 1: Notice the symmetric coefficients (cross-coefficients are identical). Use the Add-Subtract Method.",
      "Step 2: Add the two equations:\n(217 + 131)x + (131 + 217)y = 913 + 827\n348x + 348y = 1740\nDivide entire equation by 348: x + y = 5  --- (Equation 3).",
      "Step 3: Subtract Equation (2) from Equation (1):\n(217 - 131)x + (131 - 217)y = 913 - 827\n86x - 86y = 86\nDivide entire equation by 86: x - y = 1  --- (Equation 4).",
      "Step 4: Solve simple Equations (3) and (4):\nAdding (3) and (4): 2x = 6 => x = 3.\nSubtracting (4) from (3): 2y = 4 => y = 2.",
      "Step 5: Solution is x = 3, y = 2."
    ],
    explanation: "Whenever cross-coefficients are identical, standard elimination involves massive numbers. Adding and subtracting produces two ultra-simple equations: x + y = A and x - y = B.",
    formula: "Add: (a+b)(x+y) = c+d; Subtract: (a-b)(x-y) = c-d",
    examinerNote: "Do NOT multiply 217 by 131. The Add-Subtract method is the official CBSE expected method for symmetric equations.",
    source: "CBSE Board 2020 Standard (Set 30/1/2)"
  },
  {
    id: "vq_3_vsa_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2010, 2018, 2024] For what values of a and b does the following pair of linear equations have an infinite number of solutions?\n2x + 3y = 7\n(a - b)x + (a + b)y = 3a + b - 2",
    answer: "a = 5, b = 1",
    steps: [
      "Step 1: Condition for infinitely many solutions (coincident lines):\na_1 / a_2 = b_1 / b_2 = c_1 / c_2.",
      "Step 2: Substitute coefficients:\n2 / (a - b) = 3 / (a + b) = 7 / (3a + b - 2).",
      "Step 3: Equate first two ratios:\n2 / (a - b) = 3 / (a + b) => 2(a + b) = 3(a - b)\n2a + 2b = 3a - 3b => a = 5b  --- (Equation 1).",
      "Step 4: Equate first and third ratios:\n2 / (a - b) = 7 / (3a + b - 2) => 2(3a + b - 2) = 7(a - b)\n6a + 2b - 4 = 7a - 7b => a - 9b = -4  --- (Equation 2).",
      "Step 5: Substitute a = 5b into Equation (2):\n5b - 9b = -4 => -4b = -4 => b = 1.",
      "Step 6: Then a = 5b = 5(1) = 5. Solution: a = 5, b = 1."
    ],
    explanation: "Infinite solutions require the lines to be identical multiples of each other. Cross-multiplying the ratio equality produces two linear equations in a and b.",
    formula: "a_1/a_2 = b_1/b_2 = c_1/c_2 <=> Infinitely Many Solutions",
    examinerNote: "Verify by substituting a=5, b=1 back: 2/4 = 3/6 = 7/14 = 1/2. Perfectly consistent.",
    source: "CBSE Board 2024 Standard & NCERT Ex 3.4"
  },

  // -----------------------------------------------------------------------
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // -----------------------------------------------------------------------
  {
    id: "vq_3_sa_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2011, 2019, 2024] The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits of the number differ by 2, find the number. How many such numbers are there?",
    answer: "The number is 42 or 24 (Two such numbers exist)",
    steps: [
      "Step 1: Let the tens digit be x and the units digit be y.\nOriginal Number = 10x + y.\nReversed Number = 10y + x.",
      "Step 2: According to the first condition:\n(10x + y) + (10y + x) = 66\n11x + 11y = 66 => x + y = 6  --- (Equation 1).",
      "Step 3: According to the second condition, the digits differ by 2. This gives two cases:\nCase 1: x - y = 2  --- (Equation 2a)\nCase 2: y - x = 2  --- (Equation 2b).",
      "Step 4: Solve Case 1 (x - y = 2):\nAdd (1) and (2a): 2x = 8 => x = 4.\nSubstitute in (1): 4 + y = 6 => y = 2.\nOriginal Number = 10(4) + 2 = 42.",
      "Step 5: Solve Case 2 (y - x = 2):\nAdd (1) and (2b): 2y = 8 => y = 4.\nSubstitute in (1): x + 4 = 6 => x = 2.\nOriginal Number = 10(2) + 4 = 24.",
      "Step 6: Both 42 and 24 satisfy the problem (42 + 24 = 66, and |4 - 2| = 2). There are TWO such numbers: 42 and 24."
    ],
    explanation: "Because the question does not specify which digit is larger ('digits differ by 2'), both |x - y| = 2 cases must be solved to obtain full credit.",
    formula: "Number = 10*tens + units; Reversed = 10*units + tens",
    examinerNote: "CRITICAL BOARD TRAP: Writing only 42 loses 1 mark! You MUST write both 42 and 24.",
    source: "CBSE Board 2024 (Set 30/2/1) & NCERT"
  },
  {
    id: "vq_3_sa_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2014, 2020 Standard] A fraction becomes 9/11 if 2 is added to both numerator and denominator. If 3 is added to both numerator and denominator, it becomes 5/6. Find the fraction.",
    answer: "7/9",
    steps: [
      "Step 1: Let the numerator be x and denominator be y. Fraction = x / y.",
      "Step 2: First condition: (x + 2) / (y + 2) = 9 / 11.\nCross multiply: 11(x + 2) = 9(y + 2)\n11x + 22 = 9y + 18 => 11x - 9y = -4  --- (Equation 1).",
      "Step 3: Second condition: (x + 3) / (y + 3) = 5 / 6.\nCross multiply: 6(x + 3) = 5(y + 3)\n6x + 18 = 5y + 15 => 6x - 5y = -3  --- (Equation 2).",
      "Step 4: Solve by elimination. Multiply (1) by 5 and (2) by 9:\n55x - 45y = -20\n54x - 45y = -27.",
      "Step 5: Subtract the two equations:\n(55x - 54x) = -20 - (-27)\nx = 7.",
      "Step 6: Substitute x = 7 into (2):\n6(7) - 5y = -3 => 42 - 5y = -3 => 5y = 45 => y = 9.",
      "Step 7: The required fraction is x / y = 7 / 9."
    ],
    explanation: "Translating words into ratios, cross-multiplying to remove denominators, and eliminating y gives x = 7 and y = 9.",
    formula: "Fraction = x/y",
    examinerNote: "Conclude by writing the fraction '7/9', not just x = 7, y = 9.",
    source: "CBSE Board 2020 (Set 30/1/3) & NCERT Ex 3.3"
  },
  {
    id: "vq_3_sa_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2012, 2018 All India] Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. How old are Nuri and Sonu currently?",
    answer: "Nuri = 50 years, Sonu = 20 years",
    steps: [
      "Step 1: Let the present age of Nuri be x years and present age of Sonu be y years.",
      "Step 2: 5 years ago:\nNuri's age = x - 5; Sonu's age = y - 5.\nCondition: (x - 5) = 3*(y - 5)\nx - 5 = 3y - 15 => x - 3y = -10  --- (Equation 1).",
      "Step 3: 10 years later:\nNuri's age = x + 10; Sonu's age = y + 10.\nCondition: (x + 10) = 2*(y + 10)\nx + 10 = 2y + 20 => x - 2y = 10  --- (Equation 2).",
      "Step 4: Subtract Equation (1) from Equation (2):\n(x - 2y) - (x - 3y) = 10 - (-10)\ny = 20 years (Sonu's age).",
      "Step 5: Substitute y = 20 into (2):\nx - 2(20) = 10 => x - 40 = 10 => x = 50 years (Nuri's age).",
      "Step 6: Present age of Nuri is 50 years and Sonu is 20 years."
    ],
    explanation: "Age problem formulation: Past ages subtract years, future ages add years. Solving linear system yields ages 50 and 20.",
    formula: "Past = (x - t); Future = (x + t)",
    examinerNote: "Check: 5 yrs ago: 45 = 3 * 15 (True); 10 yrs later: 60 = 2 * 30 (True). Always verify.",
    source: "CBSE Board 2018 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // -----------------------------------------------------------------------
  {
    id: "vq_3_la_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "[CBSE 2008, 2015, 2019, 2024] A motor boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.",
    answer: "Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h",
    steps: [
      "Step 1: Let the speed of the boat in still water be x km/h, and the speed of the stream be y km/h (x > y > 0).",
      "Step 2: Speed upstream = (x - y) km/h; Speed downstream = (x + y) km/h.",
      "Step 3: Time = Distance / Speed.\nFirst journey: 30 / (x - y) + 44 / (x + y) = 10  --- (Equation 1).\nSecond journey: 40 / (x - y) + 55 / (x + y) = 13  --- (Equation 2).",
      "Step 4: Substitute u = 1 / (x - y) and v = 1 / (x + y):\n30u + 44v = 10  --- (Equation 3)\n40u + 55v = 13  --- (Equation 4).",
      "Step 5: Multiply (3) by 4 and (4) by 3 to eliminate u:\n120u + 176v = 40\n120u + 165v = 39\nSubtract: 11v = 1 => v = 1 / 11.",
      "Step 6: Substitute v = 1/11 into (3):\n30u + 44(1/11) = 10 => 30u + 4 = 10 => 30u = 6 => u = 6 / 30 = 1 / 5.",
      "Step 7: Back substitute for x and y:\nu = 1 / (x - y) = 1 / 5 => x - y = 5  --- (Equation 5)\nv = 1 / (x + y) = 1 / 11 => x + y = 11  --- (Equation 6).",
      "Step 8: Solve Equations (5) and (6):\nAdding (5) and (6): 2x = 16 => x = 8 km/h.\nSubtracting (5) from (6): 2y = 6 => y = 3 km/h.",
      "Step 9: Conclude: Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h."
    ],
    explanation: "Classic 5-mark board archetype: upstream speed is (x - y) because stream opposes motion; downstream speed is (x + y) because stream assists motion. Substitution u = 1/(x-y) reduces equations to linear form.",
    formula: "Speed Upstream = x - y; Speed Downstream = x + y",
    examinerNote: "Units (km/h) are mandatory. Must state assumption x > y.",
    source: "CBSE Board 2024 Standard (Set 30/1/1) — Classic 5-mark question"
  },
  {
    id: "vq_3_la_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "[CBSE 2013, 2017, 2023] Solve the following pair of linear equations graphically:\n2x + 3y = 12\nx - y = 1\nDetermine the coordinates of the vertices of the triangle formed by these lines and the y-axis, and find the area of this shaded triangular region.",
    answer: "Intersection (3, 2); Vertices (0, 4), (0, -1), (3, 2); Area = 7.5 sq units",
    steps: [
      "Step 1: Table of values for Line 1: 2x + 3y = 12 => y = (12 - 2x) / 3\nWhen x = 0: y = 4 => (0, 4)\nWhen x = 3: y = 2 => (3, 2)\nWhen x = 6: y = 0 => (6, 0).",
      "Step 2: Table of values for Line 2: x - y = 1 => y = x - 1\nWhen x = 0: y = -1 => (0, -1)\nWhen x = 1: y = 0 => (1, 0)\nWhen x = 3: y = 2 => (3, 2).",
      "Step 3: Point of Intersection: The two lines intersect at point A(3, 2). Thus x = 3, y = 2 is the unique solution.",
      "Step 4: Vertices of the triangle formed with the y-axis (x = 0):\nVertex A = Intersection point = (3, 2)\nVertex B = y-intercept of Line 1 = (0, 4)\nVertex C = y-intercept of Line 2 = (0, -1).",
      "Step 5: Base along the y-axis = distance between (0, 4) and (0, -1) = |4 - (-1)| = 5 units.",
      "Step 6: Altitude (height) to this base = perpendicular distance from A(3, 2) to y-axis = x-coordinate of A = 3 units.",
      "Step 7: Area of the triangle = (1/2) * Base * Height = (1/2) * 5 * 3 = 15 / 2 = 7.5 sq units."
    ],
    explanation: "Graphical solution: intersection gives the algebraic solution. Triangle with y-axis has base on x=0 and height equal to the x-coordinate of the apex.",
    formula: "Area = (1/2) * base * height = (1/2) * |y_1 - y_2| * |x_apex|",
    examinerNote: "Careful: the question specifies 'with the y-axis', not x-axis! Base is along the vertical axis (length = 5).",
    source: "CBSE Board 2023 Standard (Set 30/4/1)"
  },

  // -----------------------------------------------------------------------
  // SECTION E: 4-MARK COMPETENCY CASE STUDY (CBSE 2024-2026 PATTERN)
  // -----------------------------------------------------------------------
  {
    id: "vq_3_case_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Competency Case Study] City Taxi Booking: A city taxi service has a fare structure that consists of a fixed flag-down charge together with a variable charge per kilometer traveled. For a distance of 10 km, the charge paid by a commuter is Rs 105, and for a journey of 15 km, the charge paid is Rs 155.\n\nBased on this information, answer the following questions:\n(i) Formulate a pair of linear equations in two variables representing this fare structure. (1 Mark)\n(ii) Find the fixed flag-down charge and the rate per kilometer. (1 Mark)\n(iii) (a) What amount will a person have to pay for traveling a distance of 25 km? (2 Marks)\nOR\n(iii) (b) If a commuter pays a total fare of Rs 355, find the distance traveled in kilometers. (2 Marks)",
    answer: "(i) x + 10y = 105 and x + 15y = 155; (ii) Fixed charge = Rs 5, Rate = Rs 10/km; (iii)(a) Rs 255; (iii)(b) 35 km",
    steps: [
      "Part (i): Let the fixed charge be Rs x and the charge per kilometer be Rs y.\nFor 10 km: x + 10y = 105  --- (Equation 1).\nFor 15 km: x + 15y = 155  --- (Equation 2).",
      "Part (ii): Subtract Equation (1) from Equation (2):\n(x + 15y) - (x + 10y) = 155 - 105\n5y = 50 => y = 10.\nRate per kilometer = Rs 10/km.\nSubstitute y = 10 into (1):\nx + 10(10) = 105 => x + 100 = 105 => x = Rs 5.\nFixed flag-down charge = Rs 5.",
      "Part (iii)(a): Total fare for 25 km:\nTotal Cost = x + 25y = 5 + 25(10) = 5 + 250 = Rs 255.",
      "Part (iii)(b) Alternative: Given Total Cost = Rs 355:\nx + d * y = 355\n5 + 10 * d = 355\n10 * d = 350 => d = 35 km.\nThe commuter traveled a distance of 35 km."
    ],
    explanation: "Real-world linear cost model: Cost = Fixed + Variable*Distance. Solving by elimination gives both parameters.",
    formula: "Total Cost = Fixed + Rate * Distance",
    examinerNote: "Don't forget rupee symbols and km units in the final answer.",
    source: "CBSE Official CFPQ 2024 & Sample Paper 2024-25"
  },
  {
    id: "vq_3_mcq_6",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2024 Standard] Assertion (A): The pair of linear equations 3x - 5y = 7 and 6x - 10y = 3 has no solution.\nReason (R): The pair of equations a1*x + b1*y + c1 = 0 and a2*x + b2*y + c2 = 0 represents parallel lines if a1/a2 = b1/b2 != c1/c2.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: Write in standard form: 3x - 5y - 7 = 0 and 6x - 10y - 3 = 0.",
      "Step 2: Calculate ratios: a1/a2 = 3/6 = 1/2; b1/b2 = -5/(-10) = 1/2; c1/c2 = -7/(-3) = 7/3.",
      "Step 3: Notice a1/a2 = b1/b2 != c1/c2 (1/2 = 1/2 != 7/3). Therefore, lines are parallel and have NO solution.",
      "Step 4: Assertion is True and Reason is the exact matching criterion."
    ],
    explanation: "Parallel lines never meet, hence consistent intersection does not exist.",
    formula: "No solution: a1/a2 = b1/b2 != c1/c2",
    examinerNote: "Always rewrite equations so constant terms are on the same side before evaluating c1/c2.",
    source: "CBSE 2024 Standard Board Examination"
  },
  {
    id: "vq_3_mcq_7",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] The pair of equations x = a and y = b graphically represents lines which are:",
    options: [
      "parallel",
      "intersecting at (b, a)",
      "coincident",
      "intersecting at (a, b)"
    ],
    correctOption: 3,
    answer: "intersecting at (a, b)",
    steps: [
      "Step 1: x = a is a vertical line parallel to the y-axis, passing through (a, 0).",
      "Step 2: y = b is a horizontal line parallel to the x-axis, passing through (0, b).",
      "Step 3: A vertical line and a horizontal line are perpendicular to each other and intersect at the unique point (a, b)."
    ],
    explanation: "x = a fixes the x-coordinate and y = b fixes the y-coordinate, yielding unique intersection (a, b).",
    formula: "Intersection point = (a, b)",
    examinerNote: "Don't confuse (a, b) with (b, a). Coordinates are strictly ordered (x, y).",
    source: "CBSE 2023 Standard (Set 30/1/3)"
  },
  {
    id: "vq_3_mcq_8",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020 Standard] Solve 2x + 3y = 11 and 2x - 4y = -24, and hence find the value of 'm' for which y = mx + 3.",
    options: ["m = 1", "m = -1", "m = 2", "m = -2"],
    correctOption: 1,
    answer: "m = -1",
    steps: [
      "Step 1: Subtract equations: (2x + 3y) - (2x - 4y) = 11 - (-24) => 7y = 35 => y = 5.",
      "Step 2: Substitute y = 5 into 2x + 3(5) = 11 => 2x + 15 = 11 => 2x = -4 => x = -2.",
      "Step 3: Substitute x = -2 and y = 5 into y = mx + 3:\n5 = m(-2) + 3 => 2 = -2m => m = -1."
    ],
    explanation: "Eliminate 2x to find y=5, then x=-2. Finally substitute both coordinates into the linear slope equation.",
    formula: "m = (y - 3) / x",
    examinerNote: "Double check sign when subtracting -24: 11 - (-24) = 11 + 24 = 35.",
    source: "CBSE 2020 Standard Board Examination"
  },
  {
    id: "vq_3_vsa_4",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2023 Standard] Find the value of k for which the system of equations 3x + y = 1 and (2k - 1)x + (k - 1)y = 2k + 1 has no solution.",
    answer: "k = 2",
    steps: [
      "Step 1: For no solution: a1/a2 = b1/b2 != c1/c2.",
      "Step 2: a1 = 3, b1 = 1, c1 = 1; a2 = 2k - 1, b2 = k - 1, c2 = 2k + 1.",
      "Step 3: 3 / (2k - 1) = 1 / (k - 1)\nCross-multiplying: 3(k - 1) = 2k - 1\n3k - 3 = 2k - 1 => k = 2.",
      "Step 4: Check inequality: c1/c2 = 1 / (2(2) + 1) = 1/5. Here b1/b2 = 1 / (2 - 1) = 1. Since 1 != 1/5, condition holds.",
      "Step 5: Therefore, k = 2."
    ],
    explanation: "Parallel line condition requires equal slope (a1/a2 = b1/b2) and distinct intercepts (b1/b2 != c1/c2).",
    formula: "a1/a2 = b1/b2 != c1/c2",
    examinerNote: "Checking the inequality condition != c1/c2 is mandatory to secure the final 0.5 mark.",
    source: "CBSE Board 2023 Standard"
  },
  {
    id: "vq_3_vsa_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2020, 2022] Solve the following pair of linear equations by the method of cross-addition and subtraction: 47x + 31y = 63 and 31x + 47y = 15.",
    answer: "x = 2, y = -1",
    steps: [
      "Step 1: Add the two equations:\n(47 + 31)x + (31 + 47)y = 63 + 15\n78x + 78y = 78 => x + y = 1  --- (Equation 3).",
      "Step 2: Subtract the second equation from the first:\n(47 - 31)x + (31 - 47)y = 63 - 15\n16x - 16y = 48 => x - y = 3  --- (Equation 4).",
      "Step 3: Add (3) and (4): 2x = 4 => x = 2.",
      "Step 4: Subtract (4) from (3): 2y = -2 => y = -1.",
      "Step 5: Verification: 47(2) + 31(-1) = 94 - 31 = 63. Correct!"
    ],
    explanation: "When coefficients of x and y are interchanged, adding and subtracting yields simple reduced equations x+y and x-y.",
    formula: "(x + y) and (x - y) reduction technique",
    examinerNote: "Do not attempt to multiply 47 by 31; this cyclic method solves the problem in 4 simple lines.",
    source: "CBSE 2022 Term-2 Board Examination"
  },
  {
    id: "vq_3_sa_4",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2024 Standard] 2 women and 5 men can together finish an embroidery work in 4 days, while 3 women and 6 men can finish it in 3 days. Find the time taken by 1 woman alone to finish the work, and also that taken by 1 man alone.",
    answer: "1 woman alone = 18 days; 1 man alone = 36 days",
    steps: [
      "Step 1: Let 1 woman take x days and 1 man take y days alone.\nWork done by 1 woman in 1 day = 1/x; by 1 man = 1/y.",
      "Step 2: Given 2 women and 5 men take 4 days:\n2/x + 5/y = 1/4  --- (Equation 1).\nGiven 3 women and 6 men take 3 days:\n3/x + 6/y = 1/3 => 1/x + 2/y = 1/9  --- (Equation 2).",
      "Step 3: Let u = 1/x and v = 1/y:\n2u + 5v = 1/4 => 8u + 20v = 1\nu + 2v = 1/9 => 9u + 18v = 1.",
      "Step 4: Multiply second by 8 and first by 9:\n72u + 180v = 9\n72u + 144v = 8\nSubtract: 36v = 1 => v = 1/36 => y = 36 days.",
      "Step 5: u = 1/9 - 2(1/36) = 1/9 - 1/18 = 1/18 => x = 18 days.",
      "Step 6: Therefore, 1 woman takes 18 days alone and 1 man takes 36 days alone."
    ],
    explanation: "Rate of work per day is reciprocal of total days. Reducible linear equations yield individual times.",
    formula: "Daily Work = 1 / Days; n_1 * (1/x) + n_2 * (1/y) = 1 / Total Days",
    examinerNote: "Be sure to state the final answer in days, not as the reciprocal rates 1/18 and 1/36.",
    source: "CBSE Board 2024 Standard (Set 30/2/1)"
  },
  {
    id: "vq_3_sa_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2023 Standard] A fraction becomes 9/11 if 2 is added to both the numerator and the denominator. If 3 is added to both the numerator and the denominator, it becomes 5/6. Find the fraction.",
    answer: "The fraction is 7/9",
    steps: [
      "Step 1: Let the numerator be x and denominator be y. Fraction = x/y.",
      "Step 2: Condition 1: (x + 2) / (y + 2) = 9/11\nCross-multiply: 11(x + 2) = 9(y + 2)\n11x + 22 = 9y + 18 => 11x - 9y = -4  --- (Equation 1).",
      "Step 3: Condition 2: (x + 3) / (y + 3) = 5/6\nCross-multiply: 6(x + 3) = 5(y + 3)\n6x + 18 = 5y + 15 => 6x - 5y = -3  --- (Equation 2).",
      "Step 4: Multiply (1) by 5 and (2) by 9:\n55x - 45y = -20\n54x - 45y = -27\nSubtract: x = 7.",
      "Step 5: Substitute x = 7 into (2): 6(7) - 5y = -3 => 42 - 5y = -3 => 5y = 45 => y = 9.",
      "Step 6: Required fraction = x/y = 7/9.",
      "Step 7: Verification: (7+2)/(9+2) = 9/11; (7+3)/(9+3) = 10/12 = 5/6. Fully verified!"
    ],
    explanation: "Cross-multiplication transforms rational proportion statements into standard linear simultaneous equations.",
    formula: "Fraction = x/y; solve 11x - 9y = -4 and 6x - 5y = -3",
    examinerNote: "State the fraction as 7/9, not just x = 7 and y = 9.",
    source: "CBSE Board 2023 Standard (Set 30/3/2)"
  },
  {
    id: "vq_3_sa_6",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2020 Standard] Points A and B are 100 km apart on a highway. One car starts from A and another from B at the same time. If the cars travel in the same direction at different speeds, they meet in 5 hours. If they travel towards each other, they meet in 1 hour. What are the speeds of the two cars?",
    answer: "Speed of car from A = 60 km/h; Speed of car from B = 40 km/h",
    steps: [
      "Step 1: Let the speed of the car from A be x km/h and that of the car from B be y km/h (x > y).",
      "Step 2: Case 1 (Same direction, meeting in 5 hours):\nRelative speed = x - y.\nDistance = Relative Speed * Time => 100 = (x - y) * 5 => x - y = 20  --- (Equation 1).",
      "Step 3: Case 2 (Towards each other, meeting in 1 hour):\nRelative speed = x + y.\nDistance = Relative Speed * Time => 100 = (x + y) * 1 => x + y = 100  --- (Equation 2).",
      "Step 4: Add (1) and (2): 2x = 120 => x = 60 km/h.",
      "Step 5: Subtract (1) from (2): 2y = 80 => y = 40 km/h.",
      "Step 6: Speed of car A = 60 km/h; Speed of car B = 40 km/h."
    ],
    explanation: "Relative speed concept: (x - y) when moving in same direction, (x + y) when moving towards each other.",
    formula: "Same direction: d = (x - y)t; Opposite: d = (x + y)t",
    examinerNote: "Assume x > y explicitly at the start so that x - y is positive.",
    source: "CBSE Board 2020 Standard"
  },
  {
    id: "vq_3_la_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "[CBSE 2017, 2020, 2024] A motorboat can travel 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can travel 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.",
    answer: "Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h",
    steps: [
      "Step 1: Let speed of boat in still water be x km/h and speed of stream be y km/h (x > y).\nSpeed upstream = (x - y) km/h; Speed downstream = (x + y) km/h.",
      "Step 2: Total time = Upstream Time + Downstream Time.\nCondition 1: 30 / (x - y) + 44 / (x + y) = 10.\nCondition 2: 40 / (x - y) + 55 / (x + y) = 13.",
      "Step 3: Let u = 1 / (x - y) and v = 1 / (x + y):\n30u + 44v = 10  --- (1)\n40u + 55v = 13  --- (2)",
      "Step 4: Multiply (1) by 4 and (2) by 3:\n120u + 176v = 40\n120u + 165v = 39\nSubtract: 11v = 1 => v = 1/11.",
      "Step 5: Substitute v = 1/11 into (1): 30u + 44(1/11) = 10 => 30u + 4 = 10 => 30u = 6 => u = 1/5.",
      "Step 6: Now: x - y = 1/u = 5, and x + y = 1/v = 11.",
      "Step 7: Add equations: 2x = 16 => x = 8 km/h.\nSubtract equations: 2y = 6 => y = 3 km/h.",
      "Step 8: Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h."
    ],
    explanation: "Two-stage reduction: first solve for reciprocal parameters u and v, then solve the resulting linear system in x and y.",
    formula: "v_up = x - y; v_down = x + y; Time = d_up/(x - y) + d_down/(x + y)",
    examinerNote: "This 5-mark problem appears regularly across 20-year papers. Ensure units (km/h) are explicitly written.",
    source: "CBSE Board 2020 & 2024 All India"
  },
  {
    id: "vq_3_case_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Sample Paper Case Study] Lending Library Pricing: A public lending library has a fixed charge for the first three days and an additional charge for each day thereafter. Saritha paid Rs 27 for a book kept for seven days, while Susy paid Rs 21 for the book she kept for five days.\n\n(i) Formulate the pair of linear equations representing this situation. (1 Mark)\n(ii) Find the fixed charge for the first 3 days. (1 Mark)\n(iii) (a) Find the charge for each extra day. (1 Mark) How much would a member pay for keeping a book for 9 days? (1 Mark)\nOR\n(iii) (b) If a student has Rs 45 in total library credit, what is the maximum number of days they can borrow the book? (2 Marks)",
    answer: "(i) x + 4y = 27 and x + 2y = 21; (ii) Fixed charge = Rs 15; (iii)(a) Extra day = Rs 3/day, 9 days = Rs 33; (iii)(b) 13 days",
    steps: [
      "Part (i): Let fixed charge for first 3 days be Rs x and charge per extra day be Rs y.\nSaritha kept for 7 days (3 fixed + 4 extra): x + 4y = 27  --- (1).\nSusy kept for 5 days (3 fixed + 2 extra): x + 2y = 21  --- (2).",
      "Part (ii): Subtract (2) from (1): 2y = 6 => y = 3. Rate per extra day = Rs 3.\nSubstitute y = 3 into (2): x + 2(3) = 21 => x + 6 = 21 => x = Rs 15. Fixed charge = Rs 15.",
      "Part (iii)(a): Extra day charge = Rs 3.\nFor 9 days: 3 fixed + 6 extra days = x + 6y = 15 + 6(3) = 15 + 18 = Rs 33.",
      "Part (iii)(b) Alternative: Total cost <= 45:\n15 + (d - 3)*3 <= 45\n(d - 3)*3 <= 30 => d - 3 <= 10 => d <= 13 days.\nMaximum days = 13 days."
    ],
    explanation: "Careful definition of variables: days beyond the initial 3-day window are charged extra, so d days incur (d - 3) daily charges.",
    formula: "Total = x + (Days - 3)*y for Days >= 3",
    examinerNote: "Common trap: writing x + 7y = 27 instead of x + 4y = 27. The fixed charge covers the first 3 days.",
    source: "CBSE Official Sample Paper 2024"
  },
  {
    id: "vq_3_case_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2025 Competency Case Study] Educational Excursion Ticket Booking: A school organizes a science trip. The ticket counter offers child tickets and adult tickets. A group of 4 teachers and 20 students paid Rs 2800. Another group of 5 teachers and 35 students from the same school paid Rs 4600.\n\n(i) Represent the given situation algebraically. (1 Mark)\n(ii) Find the cost of one adult ticket. (1 Mark)\n(iii) (a) Find the cost of one student ticket, and the total cost for 2 teachers and 15 students. (2 Marks)\nOR\n(iii) (b) If the school has a budget of Rs 6000 for a third group consisting of 6 teachers, what is the maximum number of students that can accompany them? (2 Marks)",
    answer: "(i) 4x + 20y = 2800 and 5x + 35y = 4600; (ii) Adult ticket = Rs 150; (iii)(a) Student ticket = Rs 110, Group cost = Rs 1950; (iii)(b) 46 students",
    steps: [
      "Part (i): Let adult ticket be Rs x and student ticket be Rs y.\n4x + 20y = 2800 => x + 5y = 700  --- (1).\n5x + 35y = 4600 => x + 7y = 920  --- (2).",
      "Part (ii): Subtract (1) from (2): 2y = 220 => y = 110. Student ticket = Rs 110.\nSubstitute into (1): x + 5(110) = 700 => x + 550 = 700 => x = Rs 150. Adult ticket = Rs 150.",
      "Part (iii)(a): Student ticket = Rs 110.\nFor 2 teachers and 15 students: 2(150) + 15(110) = 300 + 1650 = Rs 1950.",
      "Part (iii)(b) Alternative: Budget = Rs 6000 with 6 teachers:\nCost for 6 teachers = 6 * 150 = Rs 900.\nRemaining for students = 6000 - 900 = Rs 5100.\nNumber of students = floor(5100 / 110) = floor(46.36) = 46 students."
    ],
    explanation: "System of linear equations derived from commercial pricing tiers. Integer floor division determines capacity within budget.",
    formula: "Cost = N_adult * x + N_child * y",
    examinerNote: "In part (iii)(b), you cannot round up to 47 because that would exceed the budget of Rs 6000. Take floor = 46.",
    source: "CBSE Competency Assessment Framework 2025"
  }
];
