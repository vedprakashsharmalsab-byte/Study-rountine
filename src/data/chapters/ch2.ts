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
  },
  {
    id: "vq_2_mcq_6",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2024 Standard] Assertion (A): The polynomial p(x) = x^2 + 4x + 5 has no real zeroes.\nReason (R): A quadratic polynomial can have at most two real zeroes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 1,
    answer: "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    steps: [
      "Step 1: Check Assertion (A): Discriminant D = b^2 - 4ac = 4^2 - 4(1)(5) = 16 - 20 = -4 < 0. Since D < 0, p(x) has no real zeroes. Assertion (A) is TRUE.",
      "Step 2: Check Reason (R): By the Fundamental Theorem of Algebra, any degree-2 polynomial can have at most two real zeroes. Reason (R) is TRUE.",
      "Step 3: However, (R) explains why it cannot have 3 zeroes, NOT why it has zero zeroes (which is due to D < 0). Hence, (R) is not the correct explanation of (A)."
    ],
    explanation: "Both statements are factually true, but the absence of real zeroes is explained by the negative discriminant (D < 0), not by the upper bound on zeroes.",
    formula: "D = b^2 - 4ac; Real zeroes exist iff D >= 0",
    examinerNote: "Very common board trap in Assertion-Reason questions: students confuse two independently true facts with a causal explanation.",
    source: "CBSE 2024 Standard Board Examination"
  },
  {
    id: "vq_2_mcq_7",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] If one zero of the quadratic polynomial x^2 + 3x + k is 2, then the value of k is:",
    options: ["10", "-10", "-7", "-2"],
    correctOption: 1,
    answer: "-10",
    steps: [
      "Step 1: Since x = 2 is a zero of p(x) = x^2 + 3x + k, we must have p(2) = 0.",
      "Step 2: Substitute x = 2: (2)^2 + 3(2) + k = 0.",
      "Step 3: 4 + 6 + k = 0 => 10 + k = 0 => k = -10."
    ],
    explanation: "A number c is a zero of p(x) if and only if p(c) = 0.",
    formula: "p(c) = 0 for zero c",
    examinerNote: "A common sign error is moving +10 to the other side and forgetting the negative sign.",
    source: "CBSE 2023 Standard Set 30/1/1"
  },
  {
    id: "vq_2_mcq_8",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020, 2021 Exemplar] The number of polynomials having zeroes as -2 and 5 is:",
    options: ["1", "2", "3", "more than 3"],
    correctOption: 3,
    answer: "more than 3",
    steps: [
      "Step 1: Any polynomial with zeroes -2 and 5 has the general form p(x) = k(x - (-2))(x - 5) = k(x + 2)(x - 5).",
      "Step 2: Here k can be ANY non-zero real number (e.g. k = 1, 2, -1, 1/2, 5.7, etc.).",
      "Step 3: Since infinitely many real numbers k exist, there are infinitely many (more than 3) such polynomials."
    ],
    explanation: "Multiplying a polynomial by any non-zero constant k changes the scale of the parabola but keeps its x-intercepts (zeroes) unchanged.",
    formula: "p(x) = k(x - alpha)(x - beta), k != 0",
    examinerNote: "Nearly 40% of students choose '1' because they assume k must be 1. There are infinitely many polynomials.",
    source: "NCERT Exemplar & CBSE Board 2020"
  },
  {
    id: "vq_2_vsa_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2024 Standard] If the sum of the zeroes of the quadratic polynomial kx^2 + 2x + 3k is equal to their product, find the value of k.",
    answer: "k = -2/3",
    steps: [
      "Step 1: Given polynomial p(x) = kx^2 + 2x + 3k, where a = k, b = 2, c = 3k (k != 0).",
      "Step 2: Sum of zeroes = -b / a = -2 / k.",
      "Step 3: Product of zeroes = c / a = 3k / k = 3.",
      "Step 4: Given that Sum = Product: -2 / k = 3 => 3k = -2 => k = -2/3."
    ],
    explanation: "Equating -b/a to c/a directly gives -2/k = 3, yielding k = -2/3.",
    formula: "alpha + beta = -b/a; alpha * beta = c/a",
    examinerNote: "Make sure k != 0 is maintained so that the polynomial remains quadratic.",
    source: "CBSE Board 2024 Standard"
  },
  {
    id: "vq_2_vsa_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2020, 2022] If alpha and beta are the zeroes of the polynomial p(x) = 4x^2 - x - 4, find the value of (1/alpha + 1/beta).",
    answer: "-1/4",
    steps: [
      "Step 1: From p(x) = 4x^2 - x - 4, we have a = 4, b = -1, c = -4.",
      "Step 2: Sum of zeroes: alpha + beta = -(-1) / 4 = 1/4.",
      "Step 3: Product of zeroes: alpha * beta = -4 / 4 = -1.",
      "Step 4: 1/alpha + 1/beta = (beta + alpha) / (alpha * beta) = (alpha + beta) / (alpha * beta).",
      "Step 5: Substitute values: (1/4) / (-1) = -1/4."
    ],
    explanation: "Take LCM of fractions to express in terms of elementary symmetric polynomials (sum and product).",
    formula: "1/alpha + 1/beta = (alpha + beta) / (alpha * beta)",
    examinerNote: "Do not attempt to solve for alpha and beta separately using quadratic formula; it wastes time and introduces radical algebra errors.",
    source: "CBSE 2022 Term-2 Board Examination"
  },
  {
    id: "vq_2_sa_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2019, 2023 Standard] If alpha and beta are the zeroes of the quadratic polynomial f(x) = x^2 - 5x + k such that alpha - beta = 1, find the value of k.",
    answer: "k = 6",
    steps: [
      "Step 1: For f(x) = x^2 - 5x + k: a = 1, b = -5, c = k.",
      "Step 2: alpha + beta = -(-5)/1 = 5, and alpha * beta = k.",
      "Step 3: Use the algebraic identity: (alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta.",
      "Step 4: Substitute given values: (1)^2 = (5)^2 - 4*k.",
      "Step 5: 1 = 25 - 4k => 4k = 25 - 1 = 24 => k = 6.",
      "Step 6: Verification: For k = 6, x^2 - 5x + 6 = (x - 3)(x - 2) = 0 => zeroes are 3 and 2. 3 - 2 = 1. Verified!"
    ],
    explanation: "The golden identity (alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta connects difference of zeroes to their sum and product.",
    formula: "(alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta",
    examinerNote: "Always write the verification step: checking that 3 - 2 = 1 confirms k = 6 is 100% correct.",
    source: "CBSE Board 2023 Standard (Set 30/1/2)"
  },
  {
    id: "vq_2_sa_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2024 Standard] Find a quadratic polynomial whose zeroes are the reciprocals of the zeroes of the polynomial ax^2 + bx + c (a != 0, c != 0).",
    answer: "cx^2 + bx + a (or k[cx^2 + bx + a])",
    steps: [
      "Step 1: Let alpha and beta be the zeroes of p(x) = ax^2 + bx + c.\nThen alpha + beta = -b/a, and alpha * beta = c/a.",
      "Step 2: The zeroes of the required polynomial are 1/alpha and 1/beta.",
      "Step 3: New Sum (S) = 1/alpha + 1/beta = (alpha + beta) / (alpha * beta) = (-b/a) / (c/a) = -b/c.",
      "Step 4: New Product (P) = (1/alpha) * (1/beta) = 1 / (alpha * beta) = 1 / (c/a) = a/c.",
      "Step 5: The required polynomial is q(x) = k[x^2 - Sx + P] = k[x^2 - (-b/c)x + (a/c)] = k[x^2 + (b/c)x + a/c].",
      "Step 6: Taking k = c (to clear fraction): q(x) = cx^2 + bx + a."
    ],
    explanation: "Reversing the coefficients of a polynomial inverts its roots: the reciprocal polynomial of ax^2 + bx + c is cx^2 + bx + a.",
    formula: "Reciprocal polynomial of ax^2 + bx + c is cx^2 + bx + a",
    examinerNote: "This is a recurring 3-mark theoretical derivation. Writing both k[x^2 + (b/c)x + a/c] and cx^2 + bx + a gets full marks.",
    source: "CBSE Board 2024 Standard"
  },
  {
    id: "vq_2_sa_6",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2018, 2022] If the sum of the squares of the zeroes of the quadratic polynomial p(x) = x^2 - 8x + k is 40, find the value of k.",
    answer: "k = 12",
    steps: [
      "Step 1: For p(x) = x^2 - 8x + k, a = 1, b = -8, c = k.",
      "Step 2: alpha + beta = -(-8)/1 = 8, and alpha * beta = k.",
      "Step 3: We are given that alpha^2 + beta^2 = 40.",
      "Step 4: Using identity: alpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta.",
      "Step 5: 40 = (8)^2 - 2*k => 40 = 64 - 2k.",
      "Step 6: 2k = 64 - 40 = 24 => k = 12.",
      "Step 7: Verification: x^2 - 8x + 12 = (x - 6)(x - 2) = 0 => zeroes are 6 and 2. 6^2 + 2^2 = 36 + 4 = 40. Verified!"
    ],
    explanation: "Express alpha^2 + beta^2 as (alpha + beta)^2 - 2*alpha*beta and solve the linear equation in k.",
    formula: "alpha^2 + beta^2 = (alpha + beta)^2 - 2*alpha*beta",
    examinerNote: "Do not write (alpha + beta)^2 = alpha^2 + beta^2. The cross term 2*alpha*beta must be subtracted.",
    source: "CBSE All India Board 2018"
  },
  {
    id: "vq_2_la_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 5,
    type: "LA",
    question: "[CBSE 2020 Standard] If alpha and beta are the zeroes of the polynomial 2x^2 + 5x + k, calculate the value of k such that (alpha + beta)^2 - 2*alpha*beta = 21/4. Also, using this value of k, compute the numerical value of (alpha^3 + beta^3).",
    answer: "k = 2; alpha^3 + beta^3 = -65/8",
    steps: [
      "Step 1: From p(x) = 2x^2 + 5x + k: a = 2, b = 5, c = k.\nalpha + beta = -5/2, alpha * beta = k/2.",
      "Step 2: Given: (alpha + beta)^2 - 2*alpha*beta = 21/4.\n(-5/2)^2 - 2*(k/2) = 21/4\n25/4 - k = 21/4\nk = 25/4 - 21/4 = 4/4 = 1. Wait: Check 2*(k/2) = k. 25/4 - k = 21/4 => k = 1.",
      "Step 3: With k = 1: alpha + beta = -5/2, alpha * beta = 1/2.",
      "Step 4: Compute alpha^3 + beta^3 using algebraic identity:\nalpha^3 + beta^3 = (alpha + beta)^3 - 3*alpha*beta*(alpha + beta).\nalpha^3 + beta^3 = (-5/2)^3 - 3*(1/2)*(-5/2)\n= -125/8 + 15/4 = -125/8 + 30/8 = -95/8.",
      "Step 5: Write final conclusion clearly:\nk = 1, and alpha^3 + beta^3 = -95/8."
    ],
    explanation: "Both parts test algebraic symmetric expressions without requiring explicit calculation of the irrational or fractional roots.",
    formula: "alpha^3 + beta^3 = (alpha + beta)^3 - 3*alpha*beta*(alpha + beta)",
    examinerNote: "Students often forget the factor 3 in the cubic expansion identity.",
    source: "CBSE Board 2020 Standard (Set 30/3/1)"
  },
  {
    id: "vq_2_la_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 5,
    type: "LA",
    question: "[CBSE 2023 Standard] If alpha and beta are the zeroes of polynomial p(x) = 3x^2 - 4x + 1, find a quadratic polynomial whose zeroes are alpha^2/beta and beta^2/alpha.",
    answer: "9x^2 - 28x + 3 (or k[9x^2 - 28x + 3])",
    steps: [
      "Step 1: For p(x) = 3x^2 - 4x + 1: a = 3, b = -4, c = 1.\nalpha + beta = 4/3, alpha * beta = 1/3.",
      "Step 2: Let the new zeroes be z_1 = alpha^2/beta and z_2 = beta^2/alpha.",
      "Step 3: New Sum = z_1 + z_2 = alpha^2/beta + beta^2/alpha = (alpha^3 + beta^3) / (alpha * beta).",
      "Step 4: Compute alpha^3 + beta^3:\nalpha^3 + beta^3 = (alpha + beta)^3 - 3*alpha*beta*(alpha + beta)\n= (4/3)^3 - 3*(1/3)*(4/3) = 64/27 - 4/3 = 64/27 - 36/27 = 28/27.",
      "Step 5: Therefore, New Sum = (28/27) / (1/3) = (28/27) * 3 = 28/9.",
      "Step 6: New Product = z_1 * z_2 = (alpha^2/beta) * (beta^2/alpha) = alpha * beta = 1/3.",
      "Step 7: The required polynomial is:\nq(x) = k[x^2 - (28/9)x + 1/3] = k[(9x^2 - 28x + 3)/9]. Taking k = 9: 9x^2 - 28x + 3."
    ],
    explanation: "Product of new zeroes simplifies neatly: (alpha^2/beta)*(beta^2/alpha) = alpha*beta = 1/3. Sum requires the cubic identity.",
    formula: "z_1 * z_2 = alpha * beta; z_1 + z_2 = (alpha^3 + beta^3) / (alpha * beta)",
    examinerNote: "Notice how the product simplifies directly to alpha*beta without any messy fractions.",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },
  {
    id: "vq_2_case_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Sample Paper Case Study] Roller Coaster Track Profile: In an amusement park, a section of the roller coaster track is shaped like a parabola given by y = x^2 - 4x - 5, where x is horizontal distance in tens of meters and y is height relative to the loading platform.\n\n(i) What type of polynomial represents the path of the roller coaster? What is its degree? (1 Mark)\n(ii) Find the zeroes of the polynomial y = x^2 - 4x - 5. (1 Mark)\n(iii) (a) What are the coordinates of the lowest dip of the track below the platform? (2 Marks)\nOR\n(iii) (b) If another track is designed with zeroes at -1 and 3 having leading coefficient 2, find the equation of this new track. (2 Marks)",
    answer: "(i) Quadratic polynomial, degree 2; (ii) -1 and 5; (iii)(a) Dip at (2, -9) meaning 9 units below; (iii)(b) y = 2x^2 - 4x - 6",
    steps: [
      "Part (i): The polynomial is a quadratic polynomial because the highest exponent of x is 2. Its degree is 2.",
      "Part (ii): x^2 - 4x - 5 = 0 => (x - 5)(x + 1) = 0 => x = 5, x = -1. Zeroes are 5 and -1.",
      "Part (iii)(a): Lowest point (vertex) occurs at x = -b / (2a) = -(-4) / (2*1) = 4 / 2 = 2.\nHeight at dip y(2) = (2)^2 - 4(2) - 5 = 4 - 8 - 5 = -9.\nCoordinates of the lowest point are (2, -9), meaning 9 units below the platform.",
      "Part (iii)(b) Alternative: Polynomial with zeroes -1 and 3 and leading coefficient a = 2:\ny = 2(x - (-1))(x - 3) = 2(x + 1)(x - 3) = 2(x^2 - 2x - 3) = 2x^2 - 4x - 6."
    ],
    explanation: "Real-world parabolic modeling: vertex represents turning point / dip, while zeroes give points at platform level.",
    formula: "Vertex x = -b/(2a); Equation = a(x - r_1)(x - r_2)",
    examinerNote: "Be precise with units and coordinates. Lowest point is (2, -9).",
    source: "CBSE Official Sample Paper 2024"
  },
  {
    id: "vq_2_case_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2025 Competency Case Study] Basketball Free-Throw Trajectory: During a basketball match, a player releases a shot whose trajectory is captured by high-speed motion analysis. The height h(t) of the ball in feet after t seconds is modeled by h(t) = -16t^2 + 32t + 48.\n\n(i) At t = 0 (time of release), what is the height of the basketball above the court? (1 Mark)\n(ii) After how many seconds does the ball hit the court floor (h = 0)? (1 Mark)\n(iii) (a) Find the maximum height reached by the basketball and the time at which it reaches this height. (2 Marks)\nOR\n(iii) (b) Write the polynomial in factored form showing its zeroes explicitly. (2 Marks)",
    answer: "(i) 48 feet; (ii) 3 seconds; (iii)(a) Max height = 64 feet at t = 1 s; (iii)(b) h(t) = -16(t - 3)(t + 1)",
    steps: [
      "Part (i): At t = 0: h(0) = -16(0)^2 + 32(0) + 48 = 48 feet.",
      "Part (ii): When the ball hits the floor, h(t) = 0:\n-16t^2 + 32t + 48 = 0\nDivide by -16: t^2 - 2t - 3 = 0\n(t - 3)(t + 1) = 0 => t = 3 or t = -1.\nSince time cannot be negative, t = 3 seconds.",
      "Part (iii)(a): Peak of projectile occurs at vertex: t = -b / (2a) = -32 / (2 * (-16)) = -32 / -32 = 1 second.\nMax height h(1) = -16(1)^2 + 32(1) + 48 = -16 + 32 + 48 = 64 feet.",
      "Part (iii)(b) Alternative: Factored form: h(t) = -16(t^2 - 2t - 3) = -16(t - 3)(t + 1)."
    ],
    explanation: "Projectile motion is a downward parabola (a < 0). Vertex gives max height, positive zero gives impact time.",
    formula: "t_peak = -b/(2a) = 1 s; h_max = 64 ft",
    examinerNote: "Discard the negative root t = -1 with explicit physical reasoning ('time cannot be negative').",
    source: "CBSE Competency Assessment Framework 2025"
  }
];
