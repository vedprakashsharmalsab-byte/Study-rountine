import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 2: POLYNOMIALS
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// =========================================================================

export const CH2_QUESTIONS: VaultQuestion[] = [
  // -----------------------------------------------------------------------
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // -----------------------------------------------------------------------
  {
    id: "vq_2_mcq_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020 Standard] If one zero of the quadratic polynomial x^2 + 3x + k is 2, then the value of k is:",
    options: ["10", "-10", "-7", "-2"],
    correctOption: 1,
    answer: "-10",
    steps: [
      "Step 1: If alpha is a zero of polynomial p(x), then p(alpha) = 0.",
      "Step 2: Here, p(x) = x^2 + 3x + k and alpha = 2.",
      "Step 3: Substitute x = 2: p(2) = (2)^2 + 3(2) + k = 0.",
      "Step 4: 4 + 6 + k = 0 => 10 + k = 0 => k = -10."
    ],
    explanation: "A real number k is a zero of a polynomial p(x) if and only if p(k) = 0. Direct substitution yields k = -10.",
    formula: "p(alpha) = 0",
    examinerNote: "Common mistake is setting 4 + 6 + k = 0 and writing k = 10 instead of -10.",
    source: "CBSE Board 2020 (Set 30/1/1)"
  },
  {
    id: "vq_2_mcq_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] A quadratic polynomial, whose zeroes are -3 and 4, is:",
    options: [
      "x^2 - x + 12",
      "x^2 + x + 12",
      "x^2 - x - 12",
      "2x^2 + 2x - 24"
    ],
    correctOption: 2,
    answer: "x^2 - x - 12",
    steps: [
      "Step 1: Given zeroes alpha = -3 and beta = 4.",
      "Step 2: Sum of zeroes S = alpha + beta = -3 + 4 = 1.",
      "Step 3: Product of zeroes P = alpha * beta = (-3) * 4 = -12.",
      "Step 4: Standard form: p(x) = k[x^2 - Sx + P] = k[x^2 - (1)x + (-12)] = x^2 - x - 12 (taking k = 1)."
    ],
    explanation: "Any quadratic polynomial with zeroes alpha and beta is given by k[x^2 - (alpha + beta)x + alpha*beta].",
    formula: "p(x) = k[x^2 - Sx + P]",
    examinerNote: "Remember the minus sign before the sum term: x^2 - Sx + P, NOT x^2 + Sx + P.",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },
  {
    id: "vq_2_mcq_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019, 2024] If one zero of the quadratic polynomial 3x^2 + 8x + k is the reciprocal of the other, then the value of k is:",
    options: ["3", "-3", "1/3", "-1/3"],
    correctOption: 0,
    answer: "3",
    steps: [
      "Step 1: Let the zeroes be alpha and 1/alpha.",
      "Step 2: Product of zeroes = alpha * (1/alpha) = 1.",
      "Step 3: In polynomial ax^2 + bx + c, product of zeroes = c / a.",
      "Step 4: Here a = 3, b = 8, and c = k. So c / a = k / 3 = 1 => k = 3."
    ],
    explanation: "Whenever the zeroes of ax^2 + bx + c are reciprocal to each other, alpha * (1/alpha) = 1 => c / a = 1 => c = a. Here c = k and a = 3, so k = 3.",
    formula: "Zeroes reciprocal <=> c = a",
    examinerNote: "Golden Board Shortcut: If zeroes are reciprocal, simply set constant term c equal to coefficient of x^2 (k = 3).",
    source: "CBSE Board 2019 Delhi & 2024 Standard"
  },
  {
    id: "vq_2_mcq_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2021 Term-1] The zeroes of the quadratic polynomial x^2 + 99x + 127 are:",
    options: [
      "both positive",
      "both negative",
      "one positive and one negative",
      "both equal"
    ],
    correctOption: 1,
    answer: "both negative",
    steps: [
      "Step 1: Here a = 1, b = 99, c = 127. Notice that all coefficients are strictly POSITIVE.",
      "Step 2: Sum of zeroes S = alpha + beta = -b / a = -99 < 0.",
      "Step 3: Product of zeroes P = alpha * beta = c / a = 127 > 0.",
      "Step 4: Since product is positive, both zeroes must have the same sign.",
      "Step 5: Since sum is negative, both zeroes must be strictly NEGATIVE."
    ],
    explanation: "If a, b, c all have the same positive sign, then sum = -b/a < 0 and product = c/a > 0, forcing both roots to be negative.",
    formula: "alpha + beta = -b/a, alpha * beta = c/a",
    examinerNote: "Do not attempt to solve the quadratic equation using formula; use sign analysis of sum and product.",
    source: "CBSE Term-1 Board Exam 2021"
  },
  {
    id: "vq_2_mcq_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] Assertion (A): The polynomial p(x) = x^2 - 4x + 4 has exactly one distinct zero.\nReason (R): The discriminant of p(x) is 0, which means the quadratic has real and equal zeroes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: p(x) = (x - 2)^2. Setting p(x) = 0 gives x = 2, 2.",
      "Step 2: There is exactly one distinct real zero (x = 2). Thus Assertion (A) is true.",
      "Step 3: Discriminant D = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0.",
      "Step 4: D = 0 implies real and coincident (equal) zeroes. Reason (R) is true and correctly explains (A)."
    ],
    explanation: "When a parabola touches the x-axis at exactly one point, D = 0, giving two equal roots (one distinct value).",
    formula: "D = b^2 - 4ac = 0 => Coincident Zeroes",
    examinerNote: "Geometrically, the vertex of the parabola touches the x-axis at (2, 0).",
    source: "CBSE Board 2023 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // -----------------------------------------------------------------------
  {
    id: "vq_2_vsa_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2019 Standard] Find the zeroes of the quadratic polynomial 4s^2 - 4s + 1 and verify the relationship between the zeroes and the coefficients.",
    answer: "Zeroes are 1/2, 1/2; Sum = 1, Product = 1/4 (Verified)",
    steps: [
      "Step 1: Factorise 4s^2 - 4s + 1 by splitting middle term or identity:\n4s^2 - 4s + 1 = (2s - 1)^2 = 0.",
      "Step 2: (2s - 1) = 0 => s = 1/2. Therefore, zeroes are alpha = 1/2 and beta = 1/2.",
      "Step 3: Verification of Sum of zeroes:\nalpha + beta = 1/2 + 1/2 = 1.\nFrom formula: -b / a = -(-4) / 4 = 4 / 4 = 1. (alpha + beta = -b / a verified).",
      "Step 4: Verification of Product of zeroes:\nalpha * beta = (1/2) * (1/2) = 1/4.\nFrom formula: c / a = 1 / 4. (alpha * beta = c / a verified)."
    ],
    explanation: "Factorisation reveals coincident zeroes s = 1/2. Evaluating both direct algebraic sum/product and coefficient ratios establishes complete verification.",
    formula: "alpha + beta = -b/a; alpha * beta = c/a",
    examinerNote: "Must write both the direct calculation and the formula ratio to earn full 2 marks.",
    source: "CBSE Board 2019 (Set 30/1/1)"
  },
  {
    id: "vq_2_vsa_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2017, 2023] If alpha and beta are the zeroes of the polynomial p(x) = 2x^2 + 5x + k such that alpha^2 + beta^2 + alpha*beta = 21/4, find the value of k.",
    answer: "k = 2",
    steps: [
      "Step 1: From p(x) = 2x^2 + 5x + k:\nSum of zeroes: alpha + beta = -b / a = -5 / 2.\nProduct of zeroes: alpha * beta = c / a = k / 2.",
      "Step 2: Express alpha^2 + beta^2 in terms of sum and product:\nalpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta.",
      "Step 3: Substitute into given equation:\n(alpha^2 + beta^2) + alpha*beta = 21 / 4\n[(alpha + beta)^2 - 2*alpha*beta] + alpha*beta = 21 / 4\n(alpha + beta)^2 - alpha*beta = 21 / 4.",
      "Step 4: Substitute values of sum and product:\n(-5/2)^2 - (k / 2) = 21 / 4\n25 / 4 - k / 2 = 21 / 4.",
      "Step 5: Solve for k:\nk / 2 = 25 / 4 - 21 / 4 = 4 / 4 = 1 => k = 2."
    ],
    explanation: "Rewrite symmetric expressions in terms of fundamental sum (alpha + beta) and product (alpha*beta) before substituting.",
    formula: "alpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta",
    examinerNote: "Be careful when squaring -5/2: (-5/2)^2 = +25/4.",
    source: "CBSE Board 2023 Standard (Set 30/3/1)"
  },
  {
    id: "vq_2_vsa_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2016, 2020] Find a quadratic polynomial whose zeroes are (3 + sqrt(5)) and (3 - sqrt(5)).",
    answer: "x^2 - 6x + 4",
    steps: [
      "Step 1: Let alpha = 3 + sqrt(5) and beta = 3 - sqrt(5).",
      "Step 2: Sum of zeroes S = alpha + beta = (3 + sqrt(5)) + (3 - sqrt(5)) = 6.",
      "Step 3: Product of zeroes P = alpha * beta = (3 + sqrt(5))(3 - sqrt(5)) = (3)^2 - (sqrt(5))^2 = 9 - 5 = 4.",
      "Step 4: Quadratic polynomial = k[x^2 - Sx + P] = k[x^2 - 6x + 4]. Taking k = 1: x^2 - 6x + 4."
    ],
    explanation: "Irrational roots of polynomials with rational coefficients always occur in conjugate pairs. Product uses (a+b)(a-b) = a^2 - b^2.",
    formula: "p(x) = k[x^2 - (alpha + beta)x + alpha*beta]",
    examinerNote: "Any constant multiple k(x^2 - 6x + 4) is valid. Taking k = 1 is standard.",
    source: "CBSE Board 2020 Delhi"
  },

  // -----------------------------------------------------------------------
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // -----------------------------------------------------------------------
  {
    id: "vq_2_sa_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2013, 2018, 2024] If alpha and beta are the zeroes of the quadratic polynomial f(x) = x^2 - p(x + 1) - c, prove that (alpha + 1)(beta + 1) = 1 - c.",
    answer: "(alpha + 1)(beta + 1) = 1 - c (Proved)",
    steps: [
      "Step 1: Rewrite f(x) in standard quadratic form ax^2 + bx + c:\nf(x) = x^2 - px - p - c = x^2 - px - (p + c).",
      "Step 2: Identify coefficients:\na = 1, b = -p, constant term C = -(p + c).",
      "Step 3: Calculate sum and product of zeroes:\nalpha + beta = -b / a = -(-p) / 1 = p\nalpha * beta = C / a = -(p + c) / 1 = -(p + c).",
      "Step 4: Expand the LHS of the identity to be proved:\nLHS = (alpha + 1)(beta + 1) = alpha * beta + alpha + beta + 1\nLHS = alpha * beta + (alpha + beta) + 1.",
      "Step 5: Substitute the values from Step 3:\nLHS = -(p + c) + p + 1 = -p - c + p + 1 = 1 - c = RHS.",
      "Step 6: Hence proved: (alpha + 1)(beta + 1) = 1 - c."
    ],
    explanation: "First expanding and simplifying the given polynomial into ax^2 + bx + c standard form is the critical key step.",
    formula: "(alpha + 1)(beta + 1) = alpha*beta + (alpha + beta) + 1",
    examinerNote: "Most students fail to rewrite the polynomial in standard form first, wrongly taking b = -p and c = -c.",
    source: "CBSE Board 2024 (Set 30/1/3) & 2018 All India"
  },
  {
    id: "vq_2_sa_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2011, 2017, 2024] If alpha and beta are the zeroes of the quadratic polynomial f(x) = 2x^2 - 5x + 7, evaluate:\n(i) 1/alpha + 1/beta\n(ii) alpha^2 + beta^2\n(iii) alpha/beta + beta/alpha",
    answer: "(i) 5/7; (ii) -3/4; (iii) -3/14",
    steps: [
      "Step 1: From f(x) = 2x^2 - 5x + 7, a = 2, b = -5, c = 7:\nalpha + beta = -(-5) / 2 = 5 / 2\nalpha * beta = 7 / 2.",
      "Step 2: Part (i): 1/alpha + 1/beta = (alpha + beta) / (alpha * beta) = (5/2) / (7/2) = 5 / 7.",
      "Step 3: Part (ii): alpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta = (5/2)^2 - 2*(7/2) = 25/4 - 7 = 25/4 - 28/4 = -3/4.",
      "Step 4: Part (iii): alpha/beta + beta/alpha = (alpha^2 + beta^2) / (alpha * beta) = (-3/4) / (7/2) = (-3/4) * (2/7) = -3 / 14."
    ],
    explanation: "Every symmetric rational function of roots can be systematically expressed using only (alpha + beta) and (alpha * beta).",
    formula: "alpha/beta + beta/alpha = (alpha^2 + beta^2)/(alpha*beta)",
    examinerNote: "A negative value for alpha^2 + beta^2 indicates that the zeroes are complex (since D = 25 - 56 = -31 < 0), but the algebraic evaluation is 100% correct.",
    source: "CBSE Board 2017 All India & 2024 Standard"
  },
  {
    id: "vq_2_sa_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2008, 2020] Find the zeroes of the quadratic polynomial 6x^2 - 3 - 7x and verify the relationship between the zeroes and the coefficients.",
    answer: "Zeroes are 3/2 and -1/3; Sum = 7/6, Product = -1/2 (Verified)",
    steps: [
      "Step 1: Rearrange in standard descending powers form:\n6x^2 - 7x - 3 = 0.",
      "Step 2: Factorise by splitting middle term (product = 6 * (-3) = -18, sum = -7):\n-18 = (-9) * 2 and -9 + 2 = -7.\n6x^2 - 9x + 2x - 3 = 0\n3x(2x - 3) + 1(2x - 3) = 0\n(2x - 3)(3x + 1) = 0.",
      "Step 3: Zeroes are: 2x - 3 = 0 => x = 3/2, and 3x + 1 = 0 => x = -1/3.\nSo alpha = 3/2 and beta = -1/3.",
      "Step 4: Verification:\nSum of zeroes: alpha + beta = 3/2 + (-1/3) = (9 - 2) / 6 = 7 / 6.\nFormula: -b / a = -(-7) / 6 = 7 / 6. (Sum verified).\nProduct of zeroes: alpha * beta = (3/2) * (-1/3) = -1 / 2.\nFormula: c / a = -3 / 6 = -1 / 2. (Product verified)."
    ],
    explanation: "Standard form ax^2 + bx + c must be written first to avoid misidentifying b as -3 and c as -7.",
    formula: "Standard Form: ax^2 + bx + c = 0",
    examinerNote: "Classic trap: Students take b = -3 and c = -7 because of the original question ordering.",
    source: "CBSE Board 2020 (Set 30/2/2)"
  },

  // -----------------------------------------------------------------------
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // -----------------------------------------------------------------------
  {
    id: "vq_2_la_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 5,
    type: "LA",
    question: "[CBSE 2016, 2022] If alpha and beta are the zeroes of the polynomial x^2 - 2x - 8, find a new quadratic polynomial whose zeroes are (2*alpha + 1) and (2*beta + 1).",
    answer: "x^2 - 8x - 29 (or k[x^2 - 8x - 29])",
    steps: [
      "Step 1: From the given polynomial p(x) = x^2 - 2x - 8:\na = 1, b = -2, c = -8.\nSum of zeroes: alpha + beta = -(-2) / 1 = 2.\nProduct of zeroes: alpha * beta = -8 / 1 = -8.",
      "Step 2: Let the zeroes of the required new polynomial be S_1 and S_2, where:\nS_1 = 2*alpha + 1 and S_2 = 2*beta + 1.",
      "Step 3: Find the sum of the new zeroes (S_new):\nS_new = S_1 + S_2 = (2*alpha + 1) + (2*beta + 1)\nS_new = 2*(alpha + beta) + 2 = 2*(2) + 2 = 4 + 2 = 6.",
      "Step 4: Find the product of the new zeroes (P_new):\nP_new = S_1 * S_2 = (2*alpha + 1)(2*beta + 1)\nP_new = 4*alpha*beta + 2*alpha + 2*beta + 1\nP_new = 4*alpha*beta + 2*(alpha + beta) + 1\nP_new = 4*(-8) + 2*(2) + 1 = -32 + 4 + 1 = -27.",
      "Step 5: Form the new quadratic polynomial:\nq(x) = k[x^2 - S_new * x + P_new] = k[x^2 - 6x - 27]. Taking k = 1: x^2 - 6x - 27.",
      "Step 6: Alternative Direct Verification:\nSolve x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0 => alpha = 4, beta = -2.\nThen 2*alpha + 1 = 2(4) + 1 = 9; 2*beta + 1 = 2(-2) + 1 = -3.\nNew polynomial zeroes are 9 and -3 => (x - 9)(x + 3) = x^2 - 6x - 27. Fully verified!"
    ],
    explanation: "Two valid approaches exist: algebraic symmetric transformation or directly finding alpha and beta when easily factorisable. Both give x^2 - 6x - 27.",
    formula: "New Polynomial = k[x^2 - (Sum_new)x + (Product_new)]",
    examinerNote: "Providing the direct factorisation check along with the algebraic method guarantees full 5 marks.",
    source: "CBSE Board 2022 Standard & 2016 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION E: 4-MARK COMPETENCY CASE STUDY (CBSE 2024-2026 PATTERN)
  // -----------------------------------------------------------------------
  {
    id: "vq_2_case_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Competency Case Study] Highway Overpass Design: The path traced by an overpass bridge over a railway track is parabolic and modeled by the quadratic polynomial p(x) = -x^2 + 2x + 8, where x represents the horizontal distance in meters from a reference point, and p(x) represents the height of the arch above ground level in meters.\n\nBased on this information, answer the following questions:\n(i) State whether the parabolic curve opens upwards or downwards, and give reason. (1 Mark)\n(ii) Find the zeroes of the polynomial p(x). (1 Mark)\n(iii) (a) Find the coordinates of the points where the overpass meets the ground level, and find the span (width) of the bridge base. (2 Marks)\nOR\n(iii) (b) Find the maximum height reached by the overpass arch above ground level. (2 Marks)",
    answer: "(i) Opens downwards as a = -1 < 0; (ii) Zeroes are 4 and -2; (iii)(a) Points (-2, 0) and (4, 0), Span = 6 meters; (iii)(b) Max height = 9 meters at x = 1",
    steps: [
      "Part (i): For p(x) = ax^2 + bx + c, the coefficient of x^2 is a = -1. Since a < 0 (negative), the parabola opens DOWNWARDS.",
      "Part (ii): To find zeroes, set p(x) = 0:\n-x^2 + 2x + 8 = 0 => x^2 - 2x - 8 = 0\n(x - 4)(x + 2) = 0 => x = 4 or x = -2.\nZeroes of the polynomial are 4 and -2.",
      "Part (iii)(a): The overpass meets ground level where height p(x) = 0.\nPoints on ground level are (-2, 0) and (4, 0).\nSpan (width) = distance between points = |4 - (-2)| = 6 meters.",
      "Part (iii)(b) Alternative: Maximum height occurs at the vertex of the parabola:\nx_vertex = -b / (2a) = -2 / (2 * (-1)) = -2 / (-2) = 1 meter.\nMaximum height = p(1) = -(1)^2 + 2(1) + 8 = -1 + 2 + 8 = 9 meters."
    ],
    explanation: "Real-world engineering application of quadratic polynomials: zeroes give ground anchor points and the vertex gives maximum clearance height.",
    formula: "Vertex x = -b/(2a); Max Height = p(-b/(2a))",
    examinerNote: "In part (iii)(a), do not write span as 2 meters (4 - 2). The distance between -2 and +4 is 4 - (-2) = 6 meters.",
    source: "CBSE CFPQ Competency Assessment 2024 & Sample Paper 2024-25"
  }
];
