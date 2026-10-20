import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 3: PAIR OF LINEAR EQUATIONS
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
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
      "Step 1: Write both linear equations in standard form a_i x + b_i y + c_i = 0:\nLine 1: 1x + 2y + 5 = 0 ⇒ a_1 = 1, b_1 = 2, c_1 = 5.\nLine 2: -3x - 6y + 1 = 0 ⇒ a_2 = -3, b_2 = -6, c_2 = 1.",
      "Step 2: Compute the coefficient ratios:\na_1 / a_2 = 1 / (-3) = -1/3\nb_1 / b_2 = 2 / (-6) = -1/3\nc_1 / c_2 = 5 / 1 = 5.",
      "Step 3: Compare the ratios: a_1 / a_2 = b_1 / b_2 ≠ c_1 / c_2 (since -1/3 = -1/3 ≠ 5).",
      "Step 4: This ratio condition geometrically represents PARALLEL LINES, which never intersect on the Cartesian plane.",
      "Step 5: Therefore, the system has NO COMMON SOLUTION (Inconsistent System)."
    ],
    explanation: "Reason: When a_1/a_2 = b_1/b_2 ≠ c_1/c_2, the lines have identical slopes but distinct y-intercepts. Geometrically, they are strictly parallel and never cross, meaning no ordered pair (x, y) satisfies both equations.\n• Why other options are wrong:\n- a unique solution: Would require a_1/a_2 ≠ b_1/b_2, which is false since 1/(-3) = 2/(-6) = -1/3.\n- exactly two solutions: A system of two straight lines can intersect at 0, 1, or infinitely many points; two straight lines can NEVER intersect at exactly two points.\n- infinitely many solutions: Would require a_1/a_2 = b_1/b_2 = c_1/c_2, but here c_1/c_2 = 5 ≠ -1/3.",
    formula: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\iff \\text{Parallel Lines (No Solution)}",
    examinerNote: "Linear systems can never have 'exactly two solutions'—they have 0, 1, or infinitely many. Do not confuse coincident lines with parallel lines.",
    source: "CBSE Board 2023 Standard (Set 30/1/1)"
  },
  {
    id: "vq_3_mcq_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019, 2024] For what value of k will the pair of linear equations kx - y = 2 and 6x - 2y = 3 have a unique solution?",
    options: ["k = 3", "k ≠ 3", "k = 0", "k ≠ 0"],
    correctOption: 1,
    answer: "k ≠ 3",
    steps: [
      "Step 1: Write both equations in standard form:\nLine 1: kx - 1y - 2 = 0 ⇒ a_1 = k, b_1 = -1, c_1 = -2.\nLine 2: 6x - 2y - 3 = 0 ⇒ a_2 = 6, b_2 = -2, c_2 = -3.",
      "Step 2: Recall the condition for a unique solution (intersecting lines): a_1 / a_2 ≠ b_1 / b_2.",
      "Step 3: Substitute the coefficients into the inequality: k / 6 ≠ (-1) / (-2).",
      "Step 4: Simplify the right-hand side: (-1)/(-2) = 1/2.",
      "Step 5: Solve for k: k / 6 ≠ 1 / 2 ⇒ k ≠ 6 / 2 ⇒ k ≠ 3."
    ],
    explanation: "Reason: A pair of linear equations represents intersecting lines (having a unique solution) if and only if their slopes differ, which is algebraically expressed by a_1/a_2 ≠ b_1/b_2. Substituting gives k/6 ≠ 1/2 ⇒ k ≠ 3.\n• Why other options are wrong:\n- k = 3: For k = 3, a_1/a_2 = 3/6 = 1/2 = b_1/b_2 ≠ (-2)/(-3) = 2/3, which makes the lines parallel (no solution), directly contradicting the unique solution requirement.\n- k = 0: k can take any real value other than 3; k = 0 simply gives a horizontal line -y = 2 which intersects 6x - 2y = 3 uniquely.\n- k ≠ 0: Irrelevant restriction that misses the true parallel slope condition at k = 3.",
    formula: "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\iff \\text{Intersecting Lines (Unique Solution)}",
    examinerNote: "Classic Board Trap: Students frequently solve k/6 = 1/2 to get k = 3 and carelessly mark 'k = 3' without noticing the question asks for a UNIQUE solution (which demands the inequality k ≠ 3).",
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
      "Step 1: Write both equations with constants on the LHS:\nLine 1: 3x + 2ky - 2 = 0 ⇒ a_1 = 3, b_1 = 2k, c_1 = -2.\nLine 2: 2x + 5y + 1 = 0 ⇒ a_2 = 2, b_2 = 5, c_2 = 1.",
      "Step 2: Recall condition for parallel lines (no solution): a_1 / a_2 = b_1 / b_2 ≠ c_1 / c_2.",
      "Step 3: Equate the first two ratios: 3 / 2 = (2k) / 5.",
      "Step 4: Cross-multiply: 2 × 2k = 3 × 5 ⇒ 4k = 15 ⇒ k = 15 / 4.",
      "Step 5: Verify the inequality condition: c_1 / c_2 = -2 / 1 = -2. Since 3/2 ≠ -2, the inequality a_1/a_2 ≠ c_1/c_2 is strictly satisfied."
    ],
    explanation: "Reason: Parallel lines require equal slopes (a_1/a_2 = b_1/b_2) with unequal y-intercepts (≠ c_1/c_2). Equating 3/2 = 2k/5 gives 4k = 15 ⇒ k = 15/4. Since c_1/c_2 = -2 ≠ 3/2, the lines are strictly parallel.\n• Why other options are wrong:\n- -5/4: Arithmetic error with signs when cross-multiplying.\n- 2/5: Setting b_1/a_2 = a_1/b_2 by inverting numerator and denominator.\n- 3/2: Equating k directly to a_1/a_2 instead of solving 2k/5 = 3/2.",
    formula: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\implies \\frac{3}{2} = \\frac{2k}{5} \\implies k = \\frac{15}{4}",
    examinerNote: "Always check c_1/c_2: if k = 15/4 had made c_1/c_2 = 3/2, the lines would be coincident, not parallel.",
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
      "Step 1: Set up the given simultaneous system:\nEquation 1: x - y = 2\nEquation 2: x + y = 4",
      "Step 2: Add Equation 1 and Equation 2 to eliminate y:\n(x - y) + (x + y) = 2 + 4\n2x = 6 ⇒ x = 3.",
      "Step 3: Substitute x = 3 into Equation 2:\n3 + y = 4 ⇒ y = 4 - 3 = 1.",
      "Step 4: Since x = a and y = b, we have a = 3 and b = 1.",
      "Step 5: The question asks for 'a and b respectively', so the answer is 3 and 1."
    ],
    explanation: "Reason: Adding the two linear equations eliminates y: 2x = 6 ⇒ x = 3. Substituting into x + y = 4 gives y = 1. Therefore, a = 3 and b = 1.\n• Why other options are wrong:\n- 3 and 5: Violates x - y = 2 (3 - 5 = -2, not +2).\n- 5 and 3: Violates x + y = 4 (5 + 3 = 8, not 4).\n- -1 and -3: Adds to -4, not +4.",
    formula: "x = \\frac{c_1 + c_2}{2} = 3, \\quad y = \\frac{c_2 - c_1}{2} = 1",
    examinerNote: "Order matters in 'respectively': if an option says '1 and 3', that would represent a = 1, b = 3 which is wrong.",
    source: "CBSE Board 2018 All India"
  },
  {
    id: "vq_3_mcq_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] Assertion (A): The pair of linear equations 2x + 3y = 5 and 4x + 6y = 15 is inconsistent.\nReason (R): The pair of linear equations a_1 x + b_1 y + c_1 = 0 and a_2 x + b_2 y + c_2 = 0 is inconsistent if a_1/a_2 = b_1/b_2 ≠ c_1/c_2.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: Check Assertion (A): Write equations in standard form:\n2x + 3y - 5 = 0 ⇒ a_1 = 2, b_1 = 3, c_1 = -5\n4x + 6y - 15 = 0 ⇒ a_2 = 4, b_2 = 6, c_2 = -15.\nRatios: a_1/a_2 = 2/4 = 1/2; b_1/b_2 = 3/6 = 1/2; c_1/c_2 = -5/(-15) = 1/3.\nSince 1/2 = 1/2 ≠ 1/3, the lines are parallel and have no solution (inconsistent). Assertion (A) is TRUE.",
      "Step 2: Check Reason (R): By definition, a linear system is inconsistent if and only if it represents parallel lines, which corresponds to a_1/a_2 = b_1/b_2 ≠ c_1/c_2. Reason (R) is TRUE.",
      "Step 3: Check Explanation: Assertion (A) is inconsistent precisely because it satisfies the condition stated in Reason (R). Hence, (R) is the correct explanation of (A)."
    ],
    explanation: "Reason: Both statements are mathematically true. Calculating ratios for the given system yields 2/4 = 3/6 ≠ 5/15 (1/2 = 1/2 ≠ 1/3), which matches the exact criterion of inconsistency defined in Reason (R). Therefore, (R) correctly explains (A).\n• Why other options are wrong:\n- Option B is wrong because (R) is the direct mathematical theorem used to prove (A).\n- Options C and D are wrong because neither statement is false.",
    formula: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\iff \\text{Inconsistent System}",
    examinerNote: "Remember: 'Inconsistent' means zero solutions (parallel lines). 'Consistent' means at least one solution (intersecting or coincident lines).",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },
  {
    id: "vq_3_mcq_6",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2024 Standard] Assertion (A): The system of equations x + 2y = 3 and 5x + ky = 7 has a unique solution if k ≠ 10.\nReason (R): The pair of linear equations a_1 x + b_1 y + c_1 = 0 and a_2 x + b_2 y + c_2 = 0 has a unique solution if a_1/a_2 ≠ b_1/b_2.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: Check Reason (R): Two lines have a unique intersection point if and only if their slopes differ, i.e. a_1 / a_2 ≠ b_1 / b_2. Reason (R) is TRUE.",
      "Step 2: Check Assertion (A): Here a_1 = 1, b_1 = 2; a_2 = 5, b_2 = k.\nFor a unique solution: a_1 / a_2 ≠ b_1 / b_2 ⇒ 1 / 5 ≠ 2 / k ⇒ k ≠ 10. Assertion (A) is TRUE.",
      "Step 3: Reason (R) provides the exact criterion used to determine that k ≠ 10 in Assertion (A). Hence (R) is the correct explanation of (A)."
    ],
    explanation: "Reason: A unique solution exists if and only if a_1/a_2 ≠ b_1/b_2. Applying this rule to x + 2y = 3 and 5x + ky = 7 gives 1/5 ≠ 2/k ⇒ k ≠ 10. Thus both statements are true and (R) is the direct explanation of (A).\n• Why other options are wrong:\n- Option B is wrong because (R) is the direct governing condition for (A).\n- Options C and D are wrong because both statements are true.",
    formula: "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\iff \\text{Unique Solution}",
    examinerNote: "Standard 1-mark Assertion-Reason question: Cross-multiply 1/5 ≠ 2/k to immediately obtain k ≠ 10.",
    source: "CBSE 2024 Standard Board Exam"
  },
  {
    id: "vq_3_mcq_7",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020 Standard] Aruna has only ₹1 and ₹2 coins with her. If the total number of coins that she has is 50 and the amount of money with her is ₹75, then the number of ₹1 and ₹2 coins are, respectively:",
    options: ["35 and 15", "35 and 20", "15 and 35", "25 and 25"],
    correctOption: 3,
    answer: "25 and 25",
    steps: [
      "Step 1: Let the number of ₹1 coins be x and the number of ₹2 coins be y.",
      "Step 2: Total number of coins is 50: x + y = 50  --- (Equation 1).",
      "Step 3: Total monetary value is ₹75: 1(x) + 2(y) = 75 ⇒ x + 2y = 75  --- (Equation 2).",
      "Step 4: Subtract Equation 1 from Equation 2:\n(x + 2y) - (x + y) = 75 - 50 ⇒ y = 25.",
      "Step 5: Substitute y = 25 into Equation 1:\nx + 25 = 50 ⇒ x = 25.",
      "Step 6: Therefore, the number of ₹1 coins is 25 and ₹2 coins is 25."
    ],
    explanation: "Reason: Setting up equations for count (x + y = 50) and value (x + 2y = 75) gives (x + 2y) - (x + y) = y = 25, which immediately yields x = 25. Thus, Aruna has 25 ₹1 coins and 25 ₹2 coins.\n• Why other options are wrong:\n- 35 and 15: 35(1) + 15(2) = 35 + 30 = ₹65 ≠ ₹75.\n- 35 and 20: 35 + 20 = 55 coins ≠ 50 coins.\n- 15 and 35: 15(1) + 35(2) = 15 + 70 = ₹85 ≠ ₹75.",
    formula: "x + y = 50, \\quad x + 2y = 75 \\implies y = 25, \\; x = 25",
    examinerNote: "Verify quickly: 25 ₹1 coins = ₹25, 25 ₹2 coins = ₹50; total = ₹75 and 25 + 25 = 50 coins.",
    source: "CBSE Board 2020 Standard"
  },
  {
    id: "vq_3_mcq_8",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2022 Term-1] The pair of equations y = 0 and y = -7 has:",
    options: [
      "one solution",
      "two solutions",
      "infinitely many solutions",
      "no solution"
    ],
    correctOption: 3,
    answer: "no solution",
    steps: [
      "Step 1: Understand the geometric meaning of each equation:\n- y = 0 represents the horizontal X-axis itself.\n- y = -7 represents a horizontal straight line parallel to the X-axis, located 7 units below it.",
      "Step 2: Since both lines are horizontal, they have identical slopes (slope m = 0).",
      "Step 3: Two distinct parallel horizontal lines never intersect at any point in the plane.",
      "Step 4: Therefore, the pair of equations has NO SOLUTION."
    ],
    explanation: "Reason: The line y = 0 is the X-axis and y = -7 is a horizontal line 7 units below the X-axis. Because two distinct horizontal lines are parallel, they never intersect, resulting in no solution.\n• Why other options are wrong:\n- one solution: Two parallel lines have 0 points of intersection, not 1.\n- two solutions: Straight lines cannot intersect at 2 points.\n- infinitely many solutions: Requires coincident lines, but here the y-values are distinct (0 vs -7).",
    formula: "y = c_1 \\text{ and } y = c_2 \\; (c_1 \\neq c_2) \\implies \\text{Parallel Lines (No Solution)}",
    examinerNote: "Visual Shortcut: y = 0 and y = -7 are parallel horizontal lines; x = 0 and x = 5 are parallel vertical lines. In both cases, there is no solution.",
    source: "CBSE Term-1 Board Exam 2021-22"
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
    question: "[CBSE 2019 Standard] Solve the following pair of linear equations by elimination: x + y = 14 and x - y = 4.",
    answer: "x = 9, y = 5",
    steps: [
      "Step 1: Write down the given equations:\nEquation 1: x + y = 14\nEquation 2: x - y = 4",
      "Step 2: Notice that the coefficients of y are +1 and -1 (opposite signs). Add Equation 1 and Equation 2 to eliminate y:\n(x + y) + (x - y) = 14 + 4\n2x = 18 ⇒ x = 18 / 2 = 9.",
      "Step 3: Substitute x = 9 into Equation 1 to find y:\n9 + y = 14 ⇒ y = 14 - 9 = 5.",
      "Step 4: Verification:\nEquation 1 check: 9 + 5 = 14 [True]\nEquation 2 check: 9 - 5 = 4 [True].",
      "Step 5: Final Solution: x = 9, y = 5."
    ],
    explanation: "Reason: Adding equations with opposite coefficients (+y and -y) eliminates y in a single step without requiring any multiplication. Back-substituting x = 9 into x + y = 14 immediately gives y = 5.",
    formula: "(x + y) + (x - y) = 2x \\implies x = 9, \\; y = 5",
    examinerNote: "CBSE Marking Scheme: 1 mark for eliminating one variable and finding x = 9; 1 mark for finding y = 5 with verification.",
    source: "CBSE Board 2019 Standard"
  },
  {
    id: "vq_3_vsa_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2018, 2023] Find the value of k for which the following pair of linear equations has infinitely many solutions: kx + 3y = k - 3 and 12x + ky = k.",
    answer: "k = 6",
    steps: [
      "Step 1: Write both equations in standard form with constants on the LHS:\nkx + 3y - (k - 3) = 0 ⇒ a_1 = k, b_1 = 3, c_1 = -(k - 3)\n12x + ky - k = 0 ⇒ a_2 = 12, b_2 = k, c_2 = -k.",
      "Step 2: Recall condition for infinitely many solutions (coincident lines):\na_1 / a_2 = b_1 / b_2 = c_1 / c_2.",
      "Step 3: Substitute coefficients:\nk / 12 = 3 / k = -(k - 3) / (-k) = (k - 3) / k.",
      "Step 4: Solve the first equality: k / 12 = 3 / k ⇒ k² = 36 ⇒ k = 6 or k = -6.",
      "Step 5: Test both values with the second equality 3 / k = (k - 3) / k:\n- If k = 6: 3 / 6 = (6 - 3) / 6 ⇒ 1/2 = 3/6 = 1/2. Satisfied!\n- If k = -6: 3 / (-6) = (-6 - 3) / (-6) ⇒ -1/2 ≠ -9/(-6) = 3/2. Not satisfied!",
      "Step 6: Therefore, k = -6 must be rejected, and the only valid value is k = 6."
    ],
    explanation: "Reason: Infinitely many solutions require all three ratios to be equal. While k/12 = 3/k gives candidate values k = ±6, only k = 6 satisfies the third ratio 3/k = (k - 3)/k = 1/2. At k = -6, the lines are parallel (no solution), not coincident.",
    formula: "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\implies \\frac{k}{12} = \\frac{3}{k} = \\frac{k-3}{k} \\implies k = 6",
    examinerNote: "CRITICAL 0.5-MARK TRAP: Students who answer 'k = ±6' lose marks for failing to discard k = -6.",
    source: "CBSE Board 2023 Standard (Set 30/1/3)"
  },
  {
    id: "vq_3_vsa_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2020 Standard] Solve 2x + 3y = 11 and 2x - 4y = -24, and hence find the value of 'm' for which y = mx + 3.",
    answer: "x = -2, y = 5; m = -1",
    steps: [
      "Step 1: Given equations:\nEquation 1: 2x + 3y = 11\nEquation 2: 2x - 4y = -24",
      "Step 2: Notice that the coefficients of x in both equations are identical (+2). Subtract Equation 2 from Equation 1:\n(2x + 3y) - (2x - 4y) = 11 - (-24)\n3y + 4y = 11 + 24\n7y = 35 ⇒ y = 5.",
      "Step 3: Substitute y = 5 into Equation 1:\n2x + 3(5) = 11 ⇒ 2x + 15 = 11 ⇒ 2x = -4 ⇒ x = -2.",
      "Step 4: Now find m using the condition y = mx + 3 with x = -2 and y = 5:\n5 = m(-2) + 3\n5 - 3 = -2m ⇒ 2 = -2m ⇒ m = -1.",
      "Step 5: Final Conclusion: The solution is x = -2, y = 5, and the value of m is -1."
    ],
    explanation: "Reason: Subtracting Eq 2 from Eq 1 eliminates 2x directly, yielding 7y = 35 ⇒ y = 5 and x = -2. Substituting this unique intersection point into y = mx + 3 determines the slope parameter: 5 = -2m + 3 ⇒ m = -1.",
    formula: "y = mx + 3 \\implies 5 = m(-2) + 3 \\implies m = -1",
    examinerNote: "CBSE Marking Scheme: 1 mark for finding x = -2 and y = 5; 1 mark for finding m = -1.",
    source: "CBSE Board 2020 Standard (Set 30/2/1)"
  },
  {
    id: "vq_3_vsa_4",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2024 Standard] If 217x + 131y = 913 and 131x + 217y = 827, find the value of (x + y) and (x - y).",
    answer: "x + y = 5; x - y = 1",
    steps: [
      "Step 1: Given system with swapped diagonal coefficients:\nEquation 1: 217x + 131y = 913\nEquation 2: 131x + 217y = 827",
      "Step 2: Add Equation 1 and Equation 2:\n(217 + 131)x + (131 + 217)y = 913 + 827\n348x + 348y = 1740.",
      "Step 3: Divide through by 348:\nx + y = 1740 / 348 = 5.",
      "Step 4: Subtract Equation 2 from Equation 1:\n(217 - 131)x + (131 - 217)y = 913 - 827\n86x - 86y = 86.",
      "Step 5: Divide through by 86:\nx - y = 86 / 86 = 1.",
      "Step 6: Therefore, (x + y) = 5 and (x - y) = 1."
    ],
    explanation: "Reason: Multiplying 217 and 131 directly creates enormous numbers. The 'Add once, Subtract once' technique exploits diagonal symmetry: adding yields 348(x + y) = 1740 ⇒ x + y = 5, and subtracting yields 86(x - y) = 86 ⇒ x - y = 1.",
    formula: "(a+b)(x+y) = c_1+c_2 \\implies x+y = 5; \\quad (a-b)(x-y) = c_1-c_2 \\implies x-y = 1",
    examinerNote: "If the question further asks for x and y, simply add these two simplified equations: 2x = 6 ⇒ x = 3, y = 2.",
    source: "CBSE Board 2024 Standard"
  },
  {
    id: "vq_3_vsa_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2021 Term-1] For what value of p does the pair of equations 4x + py + 8 = 0 and 2x + 2y + 2 = 0 have a unique solution?",
    answer: "p ≠ 4",
    steps: [
      "Step 1: Identify coefficients from the two equations:\na_1 = 4, b_1 = p, c_1 = 8\na_2 = 2, b_2 = 2, c_2 = 2.",
      "Step 2: Recall the condition for a unique solution: a_1 / a_2 ≠ b_1 / b_2.",
      "Step 3: Substitute coefficients: 4 / 2 ≠ p / 2.",
      "Step 4: Simplify: 2 ≠ p / 2 ⇒ p ≠ 4.",
      "Step 5: Therefore, the pair of equations has a unique solution for all real values of p EXCEPT 4."
    ],
    explanation: "Reason: A unique solution requires distinct slopes: a_1/a_2 ≠ b_1/b_2. Setting 4/2 ≠ p/2 gives p ≠ 4. For any real number other than 4, the lines intersect uniquely.",
    formula: "\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\implies \\frac{4}{2} \\neq \\frac{p}{2} \\implies p \\neq 4",
    examinerNote: "Do not write p = 4! Writing p = 4 makes the lines parallel or coincident. State 'p can be any real number except 4'.",
    source: "CBSE Term-1 Board Examination 2021"
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
    question: "[CBSE 2017, 2024] Find the values of a and b for which the following pair of linear equations has an infinite number of solutions: 2x + 3y = 7 and (a - b)x + (a + b)y = 3a + b - 2.",
    answer: "a = 5, b = 1",
    steps: [
      "Step 1: Write both equations in standard form:\n2x + 3y - 7 = 0 ⇒ a_1 = 2, b_1 = 3, c_1 = -7\n(a - b)x + (a + b)y - (3a + b - 2) = 0 ⇒ a_2 = a - b, b_2 = a + b, c_2 = -(3a + b - 2).",
      "Step 2: Condition for infinitely many solutions is: a_1 / a_2 = b_1 / b_2 = c_1 / c_2.\n2 / (a - b) = 3 / (a + b) = 7 / (3a + b - 2).",
      "Step 3: Equate the first and second ratios:\n2 / (a - b) = 3 / (a + b)\n2(a + b) = 3(a - b)\n2a + 2b = 3a - 3b\n3a - 2a = 2b + 3b ⇒ a = 5b  --- (Equation 1).",
      "Step 4: Equate the first and third ratios:\n2 / (a - b) = 7 / (3a + b - 2)\n2(3a + b - 2) = 7(a - b)\n6a + 2b - 4 = 7a - 7b\n7a - 6a - 7b - 2b = -4\na - 9b = -4  --- (Equation 2).",
      "Step 5: Substitute a = 5b from Equation 1 into Equation 2:\n5b - 9b = -4\n-4b = -4 ⇒ b = 1.",
      "Step 6: Substitute b = 1 into Equation 1:\na = 5(1) = 5.",
      "Step 7: Verification:\nRatios: a_1/a_2 = 2/(5-1) = 2/4 = 1/2.\nb_1/b_2 = 3/(5+1) = 3/6 = 1/2.\nc_1/c_2 = 7/(3(5) + 1 - 2) = 7/(15 + 1 - 2) = 7/14 = 1/2.\nAll three ratios equal 1/2! Verified 100%."
    ],
    explanation: "Reason: Infinitely many solutions require all three coefficient ratios to be identical. Setting up the simultaneous ratio system produces two linear equations in a and b: a = 5b and a - 9b = -4. Substituting gives b = 1 and a = 5.",
    formula: "\\frac{2}{a-b} = \\frac{3}{a+b} = \\frac{7}{3a+b-2} = \\frac{1}{2} \\implies a = 5, \\; b = 1",
    examinerNote: "CBSE Marking Scheme: 1 mark for setting up the ratio chain; 1 mark for obtaining equations a = 5b and a - 9b = -4; 1 mark for solving a = 5, b = 1 with verification.",
    source: "CBSE Board 2024 Standard (Set 30/1/1) & 2017 All India"
  },
  {
    id: "vq_3_sa_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2019 Standard] The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits of the number differ by 2, find the number. How many such numbers are there?",
    answer: "42 or 24 (There are 2 such numbers)",
    steps: [
      "Step 1: Let the tens digit be x and the units digit be y.",
      "Step 2: By decimal place-value notation:\nOriginal number = 10x + y\nNumber with reversed digits = 10y + x.",
      "Step 3: Condition 1 (Sum of numbers is 66):\n(10x + y) + (10y + x) = 66\n11x + 11y = 66\nDivide by 11: x + y = 6  --- (Equation 1).",
      "Step 4: Condition 2 (Digits differ by 2):\nSince we do not know whether tens digit or units digit is greater, we have two cases:\nCase A: x - y = 2\nCase B: y - x = 2.",
      "Step 5: Solve Case A (x - y = 2):\nAdd Eq 1 and Case A: (x + y) + (x - y) = 6 + 2 ⇒ 2x = 8 ⇒ x = 4.\nSubstitute: 4 + y = 6 ⇒ y = 2.\nNumber = 10(4) + 2 = 42.",
      "Step 6: Solve Case B (y - x = 2):\nAdd Eq 1 and Case B: (x + y) + (y - x) = 6 + 2 ⇒ 2y = 8 ⇒ y = 4.\nSubstitute: x + 4 = 6 ⇒ x = 2.\nNumber = 10(2) + 4 = 24.",
      "Step 7: Verification: 42 + 24 = 66. Digits differ by |4 - 2| = 2. Both numbers 42 and 24 satisfy all conditions."
    ],
    explanation: "Reason: The statement 'digits differ by 2' means |x - y| = 2, producing two symmetric valid cases: x - y = 2 (giving 42) and y - x = 2 (giving 24). Both solutions are fully valid.",
    formula: "11(x + y) = 66 \\implies x + y = 6; \\quad |x - y| = 2 \\implies \\text{Number is } 42 \\text{ or } 24",
    examinerNote: "CBSE Trap: Students who provide only one number (e.g. 42) lose 1 full mark! Always consider both cases x - y = 2 and y - x = 2.",
    source: "CBSE Board 2019 Standard"
  },
  {
    id: "vq_3_sa_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2020 Standard] Five years hence, the age of Jacob will be three times that of his son. Five years ago, Jacob's age was seven times that of his son. What are their present ages?",
    answer: "Jacob's present age = 40 years; Son's present age = 10 years",
    steps: [
      "Step 1: Define variables:\nLet Jacob's present age = x years, and his son's present age = y years.",
      "Step 2: Condition 1 (Five years hence / in the future):\nJacob's age = x + 5, Son's age = y + 5.\nGiven: x + 5 = 3(y + 5)\nx + 5 = 3y + 15\nx - 3y = 10  --- (Equation 1).",
      "Step 3: Condition 2 (Five years ago / in the past):\nJacob's age = x - 5, Son's age = y - 5.\nGiven: x - 5 = 7(y - 5)\nx - 5 = 7y - 35\nx - 7y = -30  --- (Equation 2).",
      "Step 4: Subtract Equation 2 from Equation 1 to eliminate x:\n(x - 3y) - (x - 7y) = 10 - (-30)\n-3y + 7y = 10 + 30\n4y = 40 ⇒ y = 10 years.",
      "Step 5: Substitute y = 10 into Equation 1:\nx - 3(10) = 10 ⇒ x - 30 = 10 ⇒ x = 40 years.",
      "Step 6: Verification:\nIn 5 years: Jacob = 45, Son = 15; 45 = 3(15) [Verified].\n5 years ago: Jacob = 35, Son = 5; 35 = 7(5) [Verified]."
    ],
    explanation: "Reason: Time-travel age problems require translating 'years hence' as (age + n) and 'years ago' as (age - n). Setting up the two equations x - 3y = 10 and x - 7y = -30 and subtracting yields y = 10 and x = 40.",
    formula: "x + 5 = 3(y + 5), \\quad x - 5 = 7(y - 5) \\implies x = 40 \\text{ years}, \\; y = 10 \\text{ years}",
    examinerNote: "CBSE Marking Scheme: 1 mark for formulation of Eq 1 and Eq 2; 1 mark for solving y = 10; 1 mark for finding x = 40 with units ('years').",
    source: "CBSE Board 2020 Standard (Set 30/3/1)"
  },
  {
    id: "vq_3_sa_4",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2018, 2023] A fraction becomes 1/3 when 1 is subtracted from the numerator, and it becomes 1/4 when 8 is added to its denominator. Find the fraction.",
    answer: "5/12",
    steps: [
      "Step 1: Let the numerator be x and the denominator be y. The fraction is x/y (where y ≠ 0).",
      "Step 2: Condition 1 (Subtract 1 from numerator):\n(x - 1) / y = 1 / 3\nCross-multiply: 3(x - 1) = y ⇒ 3x - 3 = y ⇒ 3x - y = 3  --- (Equation 1).",
      "Step 3: Condition 2 (Add 8 to denominator):\nx / (y + 8) = 1 / 4\nCross-multiply: 4x = y + 8 ⇒ 4x - y = 8  --- (Equation 2).",
      "Step 4: Subtract Equation 1 from Equation 2 to eliminate y:\n(4x - y) - (3x - y) = 8 - 3\nx = 5.",
      "Step 5: Substitute x = 5 into Equation 1:\n3(5) - y = 3 ⇒ 15 - y = 3 ⇒ y = 12.",
      "Step 6: Write the final fraction: Fraction = x / y = 5 / 12.",
      "Step 7: Verification:\n(5 - 1) / 12 = 4 / 12 = 1/3 [Verified].\n5 / (12 + 8) = 5 / 20 = 1/4 [Verified]."
    ],
    explanation: "Reason: Cross-multiplying the fractional relationships produces two linear equations: 3x - y = 3 and 4x - y = 8. Subtracting eliminates y instantly, giving x = 5 and y = 12, so the fraction is 5/12.",
    formula: "\\frac{x-1}{y} = \\frac{1}{3} \\implies 3x - y = 3; \\quad \\frac{x}{y+8} = \\frac{1}{4} \\implies 4x - y = 8 \\implies \\frac{x}{y} = \\frac{5}{12}",
    examinerNote: "Do not leave the answer as 'x = 5, y = 12'. The question asks for 'the fraction', so you must explicitly write '5/12'.",
    source: "CBSE Board 2023 Standard & 2018 All India"
  },
  {
    id: "vq_3_sa_5",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2024 Standard] Solve the following pair of equations for x and y: x/a + y/b = 2 and ax - by = a² - b² (where a ≠ 0, b ≠ 0).",
    answer: "x = a, y = b",
    steps: [
      "Step 1: Simplify Equation 1 by taking LCM of denominators (ab):\nx/a + y/b = 2 ⇒ (bx + ay) / ab = 2 ⇒ bx + ay = 2ab  --- (Equation 1).",
      "Step 2: Write Equation 2:\nax - by = a² - b²  --- (Equation 2).",
      "Step 3: To eliminate y, multiply Equation 1 by b and Equation 2 by a:\nMultiply Eq 1 by b: b²x + aby = 2ab²  --- (Equation 3)\nMultiply Eq 2 by a: a²x - aby = a(a² - b²) = a³ - ab²  --- (Equation 4).",
      "Step 4: Add Equation 3 and Equation 4 (the +aby and -aby cancel out):\n(b²x + a²x) = 2ab² + a³ - ab²\n(a² + b²)x = a³ + ab² = a(a² + b²).",
      "Step 5: Since a and b are non-zero real numbers, a² + b² ≠ 0. Divide both sides by (a² + b²):\nx = a.",
      "Step 6: Substitute x = a into Equation 1 (bx + ay = 2ab):\nb(a) + ay = 2ab ⇒ ab + ay = 2ab ⇒ ay = ab ⇒ y = b.",
      "Step 7: Final Solution: x = a, y = b."
    ],
    explanation: "Reason: Literal algebraic systems are solved cleanly by eliminating the opposite-signed variable y. Multiplying Eq 1 by b and Eq 2 by a makes the y-coefficients ±ab. Adding them leaves (a² + b²)x = a(a² + b²), which factors neatly to x = a and y = b.",
    formula: "bx + ay = 2ab \\text{ and } ax - by = a^2 - b^2 \\implies x = a, \\; y = b",
    examinerNote: "CBSE Marking Scheme: 1 mark for clearing fractions to bx + ay = 2ab; 1 mark for eliminating y to get (a² + b²)x = a(a² + b²); 1 mark for obtaining x = a, y = b.",
    source: "CBSE Board 2024 Standard (Set 30/2/1)"
  },
  {
    id: "vq_3_sa_6",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "[CBSE 2015, 2022] Determine the coordinates of the vertices of the triangle formed by the lines x - y + 1 = 0, 3x + 2y - 12 = 0, and the x-axis. Also calculate the area of this triangle.",
    answer: "Vertices: (-1, 0), (4, 0), (2, 3); Area = 7.5 sq units",
    steps: [
      "Step 1: Find the points where each line intersects the x-axis (where y = 0):\n- For Line 1 (x - y + 1 = 0): Put y = 0 ⇒ x + 1 = 0 ⇒ x = -1. Vertex A = (-1, 0).\n- For Line 2 (3x + 2y - 12 = 0): Put y = 0 ⇒ 3x - 12 = 0 ⇒ x = 4. Vertex B = (4, 0).",
      "Step 2: Find the intersection of Line 1 and Line 2 to obtain the top vertex C:\nFrom Line 1: y = x + 1.\nSubstitute into Line 2: 3x + 2(x + 1) - 12 = 0\n3x + 2x + 2 - 12 = 0\n5x - 10 = 0 ⇒ 5x = 10 ⇒ x = 2.\nThen y = 2 + 1 = 3. Vertex C = (2, 3).",
      "Step 3: Identify the dimensions of the triangle:\n- Base along the x-axis lies between A(-1, 0) and B(4, 0):\nBase length = |4 - (-1)| = 4 + 1 = 5 units.\n- Height is the perpendicular distance from vertex C(2, 3) to the x-axis, which is the y-coordinate of C:\nHeight h = 3 units.",
      "Step 4: Calculate the Area of the triangle:\nArea = (1/2) × Base × Height = (1/2) × 5 × 3 = 15 / 2 = 7.5 sq units."
    ],
    explanation: "Reason: Setting y = 0 on both lines gives base vertices (-1, 0) and (4, 0), establishing a base of 5 units. Solving the lines simultaneously gives top vertex (2, 3), making the altitude h = 3. Area = (1/2)(5)(3) = 7.5 sq units.",
    formula: "\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 5 \\times 3 = 7.5 \\text{ sq units}",
    examinerNote: "CBSE Marking Breakdown: 1 mark for vertices A(-1, 0) and B(4, 0); 1 mark for intersection vertex C(2, 3); 1 mark for area calculation 7.5 sq units.",
    source: "CBSE Board 2022 Term-2 & 2015 All India"
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
    question: "[CBSE 2016, 2023 Standard] A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.",
    answer: "Speed of boat in still water = 8 km/h; Speed of stream = 3 km/h",
    steps: [
      "Step 1: Define variables with physical conditions:\nLet the speed of the boat in still water = x km/h, and the speed of the stream = y km/h (with x > y).\nSpeed downstream = (x + y) km/h\nSpeed upstream = (x - y) km/h.",
      "Step 2: Formulate equations using Time = Distance / Speed:\nCase 1 (30 km up + 44 km down = 10 h):\n30 / (x - y) + 44 / (x + y) = 10  --- (Equation 1)\nCase 2 (40 km up + 55 km down = 13 h):\n40 / (x - y) + 55 / (x + y) = 13  --- (Equation 2).",
      "Step 3: Use the reducible substitution technique:\nLet u = 1 / (x - y) and v = 1 / (x + y).\nThe equations become:\n30u + 44v = 10 ⇒ 15u + 22v = 5  --- (Equation 3)\n40u + 55v = 13  --- (Equation 4).",
      "Step 4: Eliminate u:\nMultiply Eq 3 by 8: 120u + 176v = 40\nMultiply Eq 4 by 3: 120u + 165v = 39\nSubtract: 11v = 1 ⇒ v = 1 / 11.",
      "Step 5: Substitute v = 1/11 into Eq 3:\n15u + 22(1/11) = 5 ⇒ 15u + 2 = 5 ⇒ 15u = 3 ⇒ u = 3/15 = 1/5.",
      "Step 6: Invert back to x and y (Stage 2):\n1 / (x - y) = 1/5 ⇒ x - y = 5  --- (Equation 5)\n1 / (x + y) = 1/11 ⇒ x + y = 11  --- (Equation 6).",
      "Step 7: Solve the final linear system:\nAdd Eq 5 and Eq 6: 2x = 16 ⇒ x = 8 km/h.\nSubtract Eq 5 from Eq 6: 2y = 6 ⇒ y = 3 km/h.",
      "Step 8: Final Conclusion:\nSpeed of boat in still water = 8 km/h\nSpeed of stream = 3 km/h."
    ],
    explanation: "Reason: Variables in denominators are transformed into linear form by substituting u = 1/(x-y) and v = 1/(x+y). Solving the transformed linear system gives u = 1/5 and v = 1/11. Inverting back produces x - y = 5 and x + y = 11, solving to x = 8 km/h and y = 3 km/h.",
    formula: "v_{\\text{down}} = x + y, \\quad v_{\\text{up}} = x - y \\implies x = \\frac{v_{\\text{down}} + v_{\\text{up}}}{2} = 8, \\quad y = \\frac{v_{\\text{down}} - v_{\\text{up}}}{2} = 3",
    examinerNote: "CBSE 5-Mark Marking Scheme: 1 mark for defining variables and equations; 1.5 marks for substitution and solving u = 1/5, v = 1/11; 1.5 marks for inverting and solving x = 8, y = 3; 1 mark for correct units and statement.",
    source: "CBSE Board 2023 Standard (Set 30/2/1) & 2016 All India"
  },
  {
    id: "vq_3_la_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "[CBSE 2019 Standard] Points A and B are 100 km apart on a highway. One car starts from A and another from B at the same time. If the cars travel in the same direction at different speeds, they meet in 5 hours. If they travel towards each other, they meet in 1 hour. What are the speeds of the two cars?",
    answer: "Speed of car from A = 60 km/h; Speed of car from B = 40 km/h",
    steps: [
      "Step 1: Define variables:\nLet the speed of the car starting from A be x km/h, and the speed of the car starting from B be y km/h (with x > y).",
      "Step 2: Case 1 (Cars travel in the same direction):\nIn 5 hours, car from A travels distance = 5x km.\nCar from B travels distance = 5y km.\nSince car from A must cover the initial 100 km gap to catch car from B:\n5x - 5y = 100\nDivide by 5: x - y = 20  --- (Equation 1).",
      "Step 3: Case 2 (Cars travel towards each other):\nIn 1 hour, car from A travels distance = 1x km.\nCar from B travels distance = 1y km.\nTogether they cover the entire 100 km gap between A and B:\n1x + 1y = 100\nx + y = 100  --- (Equation 2).",
      "Step 4: Solve the simultaneous system:\nAdd Equation 1 and Equation 2:\n(x - y) + (x + y) = 20 + 100\n2x = 120 ⇒ x = 60 km/h.",
      "Step 5: Substitute x = 60 into Equation 2:\n60 + y = 100 ⇒ y = 100 - 60 = 40 km/h.",
      "Step 6: Verification:\nSame direction: Distance A = 5(60) = 300 km, Distance B = 5(40) = 200 km; Gap = 300 - 200 = 100 km [Verified].\nOpposite directions: 1(60) + 1(40) = 100 km [Verified].",
      "Step 7: Final Conclusion:\nSpeed of the car starting from A = 60 km/h\nSpeed of the car starting from B = 40 km/h."
    ],
    explanation: "Reason: Relative speed in the same direction is (x - y), so Distance = Speed × Time gives 100 = (x - y)(5) ⇒ x - y = 20. In opposite directions, relative speed is (x + y), giving 100 = (x + y)(1) ⇒ x + y = 100. Adding gives x = 60 km/h and y = 40 km/h.",
    formula: "x - y = \\frac{100}{5} = 20, \\quad x + y = \\frac{100}{1} = 100 \\implies x = 60 \\text{ km/h}, \\; y = 40 \\text{ km/h}",
    examinerNote: "CBSE 5-Mark Rubric: 1.5 marks for formulating Eq 1 (x - y = 20); 1.5 marks for Eq 2 (x + y = 100); 1 mark for solving x = 60, y = 40; 1 mark for writing final statement with units.",
    source: "CBSE Board 2019 Standard (Set 30/1/1)"
  },
  {
    id: "vq_3_la_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "[CBSE 2020 Standard] 2 women and 5 men can together finish an embroidery work in 4 days, while 3 women and 6 men can finish it in 3 days. Find the time taken by 1 woman alone to finish the work, and also that taken by 1 man alone.",
    answer: "1 woman alone = 18 days; 1 man alone = 36 days",
    steps: [
      "Step 1: Define unitary work rates:\nLet the time taken by 1 woman alone to complete the work = x days.\nThen 1 woman's 1-day work = 1/x of total work.\nLet the time taken by 1 man alone to complete the work = y days.\nThen 1 man's 1-day work = 1/y of total work.",
      "Step 2: Condition 1 (2 women and 5 men finish in 4 days):\nTheir combined 1-day work = 1/4.\n2(1/x) + 5(1/y) = 1/4 ⇒ 2/x + 5/y = 1/4  --- (Equation 1).",
      "Step 3: Condition 2 (3 women and 6 men finish in 3 days):\nTheir combined 1-day work = 1/3.\n3(1/x) + 6(1/y) = 1/3 ⇒ 3/x + 6/y = 1/3  --- (Equation 2).",
      "Step 4: Substitute u = 1/x and v = 1/y to convert into linear equations:\n2u + 5v = 1/4 ⇒ 8u + 20v = 1  --- (Equation 3)\n3u + 6v = 1/3 ⇒ 9u + 18v = 1  --- (Equation 4).",
      "Step 5: Eliminate u:\nMultiply Eq 3 by 9: 72u + 180v = 9\nMultiply Eq 4 by 8: 72u + 144v = 8\nSubtract: 36v = 1 ⇒ v = 1/36.",
      "Step 6: Substitute v = 1/36 into Eq 4:\n9u + 18(1/36) = 1 ⇒ 9u + 1/2 = 1 ⇒ 9u = 1/2 ⇒ u = 1/18.",
      "Step 7: Invert back to x and y:\nx = 1/u = 18 days\ny = 1/v = 36 days.",
      "Step 8: Final Conclusion:\nTime taken by 1 woman alone = 18 days\nTime taken by 1 man alone = 36 days."
    ],
    explanation: "Reason: Work problems are converted into rate equations using Unitary Method: (Work done per day) = 1/(Total days). Setting 2u + 5v = 1/4 and 3u + 6v = 1/3 gives u = 1/18 and v = 1/36. Inverting gives x = 18 days for a woman and y = 36 days for a man.",
    formula: "\\frac{2}{x} + \\frac{5}{y} = \\frac{1}{4}, \\quad \\frac{3}{x} + \\frac{6}{y} = \\frac{1}{3} \\implies x = 18 \\text{ days}, \\; y = 36 \\text{ days}",
    examinerNote: "Common Pitfall: Do NOT write 2x + 5y = 4! Days do not add directly; work done per day (rates) add up. You must use fractions 1/x and 1/y.",
    source: "CBSE Board 2020 Standard"
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
    question: "[CBSE 2024 Competency Case Study] Metro Rail Fare Structure: In a metropolitan city, the metro rail charges consist of a fixed boarding charge plus a distance charge per kilometer travelled. For a passenger travelling a distance of 10 km, the total fare paid is ₹105. For a journey of 15 km, the total fare paid is ₹155.\n\nBased on this information, answer the following questions:\n(i) Represent the given situation in the form of a pair of linear equations. (1 Mark)\n(ii) Find the fixed charge and the charge per kilometer. (2 Marks)\n(iii) (a) How much does a passenger have to pay for travelling a distance of 25 km? (1 Mark)\nOR\n(iii) (b) If a commuter pays ₹255, how many kilometers did they travel? (1 Mark)",
    answer: "(i) x + 10y = 105, x + 15y = 155; (ii) Fixed charge = ₹5, Charge/km = ₹10; (iii)(a) ₹255; (iii)(b) 25 km",
    steps: [
      "Part (i): Let the fixed charge = ₹x, and the charge per kilometer = ₹y.\nFor 10 km journey: x + 10y = 105  --- (Equation 1)\nFor 15 km journey: x + 15y = 155  --- (Equation 2).",
      "Part (ii): Subtract Equation 1 from Equation 2:\n(x + 15y) - (x + 10y) = 155 - 105\n5y = 50 ⇒ y = 10.\nSubstitute y = 10 into Equation 1:\nx + 10(10) = 105 ⇒ x + 100 = 105 ⇒ x = 5.\nTherefore, Fixed charge x = ₹5, and Charge per km y = ₹10.",
      "Part (iii)(a): Fare for 25 km:\nTotal Fare = x + 25y = 5 + 25(10) = 5 + 250 = ₹255.",
      "Part (iii)(b) Alternative: Let distance be d km:\n5 + 10d = 255 ⇒ 10d = 250 ⇒ d = 25 km."
    ],
    explanation: "Reason: The linear cost model is Total Cost = Fixed Charge + (Distance × Rate). Subtracting the two trip equations eliminates the fixed charge directly: 5y = 50 ⇒ y = ₹10/km, giving x = ₹5. Fare for 25 km is 5 + 25(10) = ₹255.",
    formula: "\\text{Total Fare} = x + dy = 5 + 10d",
    examinerNote: "CBSE Competency Requirement: Full marks require explicitly stating units: ₹5 and ₹10/km. Do not omit the currency symbol ₹.",
    source: "CBSE Official CFPQ Competency Assessment 2024"
  },
  {
    id: "vq_3_case_2",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Sample Paper Case Study] School Exhibition Stationery Stall: To organize a school art exhibition, the teacher purchased art supplies. In the first purchase, 5 sketch pens and 7 paint brushes cost ₹50. In the second purchase, 7 sketch pens and 5 paint brushes of the same kind cost ₹46.\n\n(i) Formulate the pair of linear equations representing this purchase. (1 Mark)\n(ii) Find the cost of one sketch pen and that of one paint brush. (2 Marks)\n(iii) (a) Find the total cost of purchasing 3 sketch pens and 4 paint brushes. (1 Mark)\nOR\n(iii) (b) If a student has ₹30, can they buy 3 sketch pens and 3 paint brushes? Justify. (1 Mark)",
    answer: "(i) 5x + 7y = 50, 7x + 5y = 46; (ii) Sketch pen = ₹3, Paint brush = ₹5; (iii)(a) ₹29; (iii)(b) Yes, total cost is ₹24 ≤ ₹30 (₹6 left)",
    steps: [
      "Part (i): Let cost of 1 sketch pen = ₹x, and cost of 1 paint brush = ₹y.\nEquation 1: 5x + 7y = 50\nEquation 2: 7x + 5y = 46.",
      "Part (ii): Notice swapped coefficients. Add Eq 1 and Eq 2:\n12x + 12y = 96 ⇒ x + y = 8  --- (Equation 3).\nSubtract Eq 2 from Eq 1:\n-2x + 2y = 4 ⇒ -x + y = 2 ⇒ y - x = 2  --- (Equation 4).\nAdd Eq 3 and Eq 4: 2y = 10 ⇒ y = ₹5 (paint brush).\nSubstitute into Eq 3: x + 5 = 8 ⇒ x = ₹3 (sketch pen).",
      "Part (iii)(a): Cost of 3 sketch pens and 4 paint brushes:\nCost = 3x + 4y = 3(3) + 4(5) = 9 + 20 = ₹29.",
      "Part (iii)(b) Alternative: Cost of 3 sketch pens and 3 paint brushes:\nCost = 3(x + y) = 3(8) = ₹24.\nSince ₹24 ≤ ₹30, the student CAN buy them, with ₹6 change remaining."
    ],
    explanation: "Reason: Swapped coefficients allow instant solution via Add/Subtract: (5+7)(x+y) = 96 ⇒ x + y = 8, and (7-5)(x-y) = 46-50 = -4 ⇒ x - y = -2. Solving yields sketch pen x = ₹3 and brush y = ₹5.",
    formula: "5x + 7y = 50, \\; 7x + 5y = 46 \\implies x = \\text{₹}3, \\; y = \\text{₹}5",
    examinerNote: "In part (iii)(b), full marks require explicit justification comparing ₹24 with the student's budget ₹30.",
    source: "CBSE Official Sample Paper 2024"
  },
  {
    id: "vq_3_case_3",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2025 Competency Case Study] Community Garden Fencing & Walkway: An architect designs a rectangular community park. If the length is reduced by 5 meters and breadth is increased by 3 meters, the area of the park is reduced by 9 square meters. However, if the length is increased by 3 meters and breadth is increased by 2 meters, the area increases by 67 square meters.\n\n(i) Formulate the algebraic equations representing the two area conditions. (1 Mark)\n(ii) Find the original length and breadth of the community park. (2 Marks)\n(iii) (a) Find the perimeter of the original park. (1 Mark)\nOR\n(iii) (b) Find the cost of fencing the park at ₹15 per meter. (1 Mark)",
    answer: "(i) 3x - 5y = 6, 2x + 3y = 61; (ii) Length = 17 m, Breadth = 9 m; (iii)(a) 52 meters; (iii)(b) ₹780",
    steps: [
      "Part (i): Let the original length = x meters, and original breadth = y meters.\nOriginal Area = xy square meters.\nCondition 1: (x - 5)(y + 3) = xy - 9\nxy + 3x - 5y - 15 = xy - 9\n3x - 5y = 15 - 9 ⇒ 3x - 5y = 6  --- (Equation 1).\nCondition 2: (x + 3)(y + 2) = xy + 67\nxy + 2x + 3y + 6 = xy + 67\n2x + 3y = 67 - 6 ⇒ 2x + 3y = 61  --- (Equation 2).",
      "Part (ii): Solve the system using elimination:\nMultiply Eq 1 by 3: 9x - 15y = 18\nMultiply Eq 2 by 5: 10x + 15y = 305\nAdd equations: 19x = 323 ⇒ x = 323 / 19 = 17 meters.\nSubstitute x = 17 into Eq 1:\n3(17) - 5y = 6 ⇒ 51 - 5y = 6 ⇒ 5y = 45 ⇒ y = 9 meters.\nTherefore, Length = 17 m, Breadth = 9 m.",
      "Part (iii)(a): Perimeter of the park:\nPerimeter = 2(Length + Breadth) = 2(17 + 9) = 2(26) = 52 meters.",
      "Part (iii)(b) Alternative: Cost of fencing at ₹15/m:\nCost = Perimeter × Rate = 52 × 15 = ₹780."
    ],
    explanation: "Reason: Expanding (x - 5)(y + 3) = xy - 9 cancels the non-linear xy term, leaving 3x - 5y = 6. Expanding (x + 3)(y + 2) = xy + 67 leaves 2x + 3y = 61. Solving gives length 17 m and breadth 9 m. Perimeter is 2(17 + 9) = 52 m.",
    formula: "3x - 5y = 6, \\quad 2x + 3y = 61 \\implies x = 17 \\text{ m}, \\; y = 9 \\text{ m}; \\quad P = 2(x+y) = 52 \\text{ m}",
    examinerNote: "Notice that xy cancels out on both sides, which is why this area problem reduces cleanly to a linear system.",
    source: "CBSE Competency Assessment Framework 2025"
  }
];
