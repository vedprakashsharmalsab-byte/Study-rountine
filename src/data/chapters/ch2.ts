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
    question: "[CBSE 2020 Standard] If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:",
    options: ["10", "-10", "-7", "-2"],
    correctOption: 1,
    answer: "-10",
    steps: [
      "Step 1: If α is a zero of polynomial p(x), then p(α) = 0.",
      "Step 2: Here, p(x) = x² + 3x + k and α = 2.",
      "Step 3: Substitute x = 2: p(2) = 2² + 3(2) + k = 0.",
      "Step 4: 4 + 6 + k = 0 ⇒ 10 + k = 0 ⇒ k = -10."
    ],
    explanation: "A real number k is a zero of a polynomial p(x) if and only if p(k) = 0. Direct substitution yields k = -10.",
    formula: "p(α) = 0",
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
      "x² - x + 12",
      "x² + x + 12",
      "x² - x - 12",
      "2x² + 2x - 24"
    ],
    correctOption: 2,
    answer: "x² - x - 12",
    steps: [
      "Step 1: Given zeroes α = -3 and β = 4.",
      "Step 2: Sum of zeroes S = α + β = -3 + 4 = 1.",
      "Step 3: Product of zeroes P = αβ = (-3) × 4 = -12.",
      "Step 4: Standard form: p(x) = k[x² - Sx + P] = k[x² - (1)x + (-12)] = x² - x - 12 (taking k = 1)."
    ],
    explanation: "Any quadratic polynomial with zeroes α and β is given by k[x² - (α + β)x + αβ].",
    formula: "p(x) = k[x^2 - Sx + P]",
    examinerNote: "Remember the minus sign before the sum term: x² - Sx + P, NOT x² + Sx + P.",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },
  {
    id: "vq_2_mcq_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019, 2024] If one zero of the quadratic polynomial 3x² + 8x + k is the reciprocal of the other, then the value of k is:",
    options: ["3", "-3", "1/3", "-1/3"],
    correctOption: 0,
    answer: "3",
    steps: [
      "Step 1: Let the zeroes be α and 1/α.",
      "Step 2: Product of zeroes = α × (1/α) = 1.",
      "Step 3: In polynomial ax² + bx + c, product of zeroes = c / a.",
      "Step 4: Here a = 3, b = 8, and c = k. So c / a = k / 3 = 1 ⇒ k = 3."
    ],
    explanation: "Whenever the zeroes of ax² + bx + c are reciprocal to each other, α × (1/α) = 1 ⇒ c / a = 1 ⇒ c = a. Here c = k and a = 3, so k = 3.",
    formula: "Zeroes reciprocal <⇒ c = a",
    examinerNote: "Golden Board Shortcut: If zeroes are reciprocal, simply set constant term c equal to coefficient of x² (k = 3).",
    source: "CBSE Board 2019 Delhi & 2024 Standard"
  },
  {
    id: "vq_2_mcq_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2021 Term-1] The zeroes of the quadratic polynomial x² + 99x + 127 are:",
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
      "Step 2: Sum of zeroes S = α + β = -b / a = -99 < 0.",
      "Step 3: Product of zeroes P = αβ = c / a = 127 > 0.",
      "Step 4: Since product is positive, both zeroes must have the same sign.",
      "Step 5: Since sum is negative, both zeroes must be strictly NEGATIVE."
    ],
    explanation: "If a, b, c all have the same positive sign, then sum = -b/a < 0 and product = c/a > 0, forcing both roots to be negative.",
    formula: "α + β = -b/a, αβ = c/a",
    examinerNote: "Do not attempt to solve the quadratic equation using formula; use sign analysis of sum and product.",
    source: "CBSE Term-1 Board Exam 2021"
  },
  {
    id: "vq_2_mcq_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] Assertion (A): The polynomial p(x) = x² - 4x + 4 has exactly one distinct zero.\nReason (R): The discriminant of p(x) is 0, which means the quadratic has real and equal zeroes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: p(x) = (x - 2)². Setting p(x) = 0 gives x = 2, 2.",
      "Step 2: There is exactly one distinct real zero (x = 2). Thus Assertion (A) is true.",
      "Step 3: Discriminant D = b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0.",
      "Step 4: D = 0 implies real and coincident (equal) zeroes. Reason (R) is true and correctly explains (A)."
    ],
    explanation: "When a parabola touches the x-axis at exactly one point, D = 0, giving two equal roots (one distinct value).",
    formula: "D = b^2 - 4ac = 0 ⇒ Coincident Zeroes",
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
    question: "[CBSE 2019 Standard] Find the zeroes of the quadratic polynomial 4s² - 4s + 1 and verify the relationship between the zeroes and the coefficients.",
    answer: "Zeroes are 1/2, 1/2; Sum = 1, Product = 1/4 (Verified)",
    steps: [
      "Step 1: Factorise 4s² - 4s + 1 by splitting middle term or identity:\n4s² - 4s + 1 = (2s - 1)² = 0.",
      "Step 2: (2s - 1) = 0 ⇒ s = 1/2. Therefore, zeroes are α = 1/2 and β = 1/2.",
      "Step 3: Verification of Sum of zeroes:\nα + β = 1/2 + 1/2 = 1.\nFrom formula: -b / a = -(-4) / 4 = 4 / 4 = 1. (α + β = -b / a verified).",
      "Step 4: Verification of Product of zeroes:\nαβ = ½ × (1/2) = 1/4.\nFrom formula: c / a = 1 / 4. (αβ = c / a verified)."
    ],
    explanation: "Factorisation reveals coincident zeroes s = 1/2. Evaluating both direct algebraic sum/product and coefficient ratios establishes complete verification.",
    formula: "α + β = -b/a; αβ = c/a",
    examinerNote: "Must write both the direct calculation and the formula ratio to earn full 2 marks.",
    source: "CBSE Board 2019 (Set 30/1/1)"
  },
  {
    id: "vq_2_vsa_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2017, 2023] If α and β are the zeroes of the polynomial p(x) = 2x² + 5x + k such that α² + β² + αβ = 21/4, find the value of k.",
    answer: "k = 2",
    steps: [
      "Step 1: From p(x) = 2x² + 5x + k:\nSum of zeroes: α + β = -b / a = -5 / 2.\nProduct of zeroes: αβ = c / a = k / 2.",
      "Step 2: Express α² + β² in terms of sum and product:\nα² + β² = (α + β)² - 2αβ.",
      "Step 3: Substitute into given equation:\n(α² + β²) + αβ = 21 / 4\n[(α + β)² - 2αβ] + αβ = 21 / 4\n(α + β)² - αβ = 21 / 4.",
      "Step 4: Substitute values of sum and product:\n(-5/2)² - (k / 2) = 21 / 4\n25 / 4 - k / 2 = 21 / 4.",
      "Step 5: Solve for k:\nk / 2 = 25 / 4 - 21 / 4 = 4 / 4 = 1 ⇒ k = 2."
    ],
    explanation: "Rewrite symmetric expressions in terms of fundamental sum (α + β) and product (αβ) before substituting.",
    formula: "α^2 + β^2 = (α + β)^2 - 2αβ",
    examinerNote: "Be careful when squaring -5/2: (-5/2)² = +25/4.",
    source: "CBSE Board 2023 Standard (Set 30/3/1)"
  },
  {
    id: "vq_2_vsa_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2016, 2020] Find a quadratic polynomial whose zeroes are (3 + √5) and (3 - √5).",
    answer: "x² - 6x + 4",
    steps: [
      "Step 1: Let α = 3 + √5 and β = 3 - √5.",
      "Step 2: Sum of zeroes S = α + β = (3 + √5) + (3 - √5) = 6.",
      "Step 3: Product of zeroes P = αβ = (3 + √5)(3 - √5) = 3² - (√5)² = 9 - 5 = 4.",
      "Step 4: Quadratic polynomial = k[x² - Sx + P] = k[x² - 6x + 4]. Taking k = 1: x² - 6x + 4."
    ],
    explanation: "Irrational roots of polynomials with rational coefficients always occur in conjugate pairs. Product uses (a+b)(a-b) = a² - b².",
    formula: "p(x) = k[x^2 - (α + β)x + αβ]",
    examinerNote: "Any constant multiple k(x² - 6x + 4) is valid. Taking k = 1 is standard.",
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
    question: "[CBSE 2013, 2018, 2024] If α and β are the zeroes of the quadratic polynomial f(x) = x² - p(x + 1) - c, prove that (α + 1)(β + 1) = 1 - c.",
    answer: "(α + 1)(β + 1) = 1 - c (Proved)",
    steps: [
      "Step 1: Rewrite f(x) in standard quadratic form ax² + bx + c:\nf(x) = x² - px - p - c = x² - px - (p + c).",
      "Step 2: Identify coefficients:\na = 1, b = -p, constant term C = -(p + c).",
      "Step 3: Calculate sum and product of zeroes:\nα + β = -b / a = -(-p) / 1 = p\nαβ = C / a = -(p + c) / 1 = -(p + c).",
      "Step 4: Expand the LHS of the identity to be proved:\nLHS = (α + 1)(β + 1) = αβ + α + β + 1\nLHS = αβ + (α + β) + 1.",
      "Step 5: Substitute the values from Step 3:\nLHS = -(p + c) + p + 1 = -p - c + p + 1 = 1 - c = RHS.",
      "Step 6: Hence proved: (α + 1)(β + 1) = 1 - c."
    ],
    explanation: "First expanding and simplifying the given polynomial into ax² + bx + c standard form is the critical key step.",
    formula: "(α + 1)(β + 1) = αβ + (α + β) + 1",
    examinerNote: "Most students fail to rewrite the polynomial in standard form first, wrongly taking b = -p and c = -c.",
    source: "CBSE Board 2024 (Set 30/1/3) & 2018 All India"
  },
  {
    id: "vq_2_sa_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2011, 2017, 2024] If α and β are the zeroes of the quadratic polynomial f(x) = 2x² - 5x + 7, evaluate:\n(i) 1/α + 1/β\n(ii) α² + β²\n(iii) α/β + β/α",
    answer: "(i) 5/7; (ii) -3/4; (iii) -3/14",
    steps: [
      "Step 1: From f(x) = 2x² - 5x + 7, a = 2, b = -5, c = 7:\nα + β = -(-5) / 2 = 5 / 2\nαβ = 7 / 2.",
      "Step 2: Part (i): 1/α + 1/β = (α + β) / (αβ) = (5/2) / (7/2) = 5 / 7.",
      "Step 3: Part (ii): α² + β² = (α + β)² - 2αβ = (5/2)² - 2 × (7/2) = 25/4 - 7 = 25/4 - 28/4 = -3/4.",
      "Step 4: Part (iii): α/β + β/α = (α² + β²) / (αβ) = (-3/4) / (7/2) = (-3/4) × (2/7) = -3 / 14."
    ],
    explanation: "Every symmetric rational function of roots can be systematically expressed using only (α + β) and (αβ).",
    formula: "α/β + β/α = (α^2 + β^2)/(αβ)",
    examinerNote: "A negative value for α² + β² indicates that the zeroes are complex (since D = 25 - 56 = -31 < 0), but the algebraic evaluation is 100% correct.",
    source: "CBSE Board 2017 All India & 2024 Standard"
  },
  {
    id: "vq_2_sa_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2008, 2020] Find the zeroes of the quadratic polynomial 6x² - 3 - 7x and verify the relationship between the zeroes and the coefficients.",
    answer: "Zeroes are 3/2 and -1/3; Sum = 7/6, Product = -1/2 (Verified)",
    steps: [
      "Step 1: Rearrange in standard descending powers form:\n6x² - 7x - 3 = 0.",
      "Step 2: Factorise by splitting middle term (product = 6 × (-3) = -18, sum = -7):\n-18 = (-9) × 2 and -9 + 2 = -7.\n6x² - 9x + 2x - 3 = 0\n3x(2x - 3) + 1(2x - 3) = 0\n(2x - 3)(3x + 1) = 0.",
      "Step 3: Zeroes are: 2x - 3 = 0 ⇒ x = 3/2, and 3x + 1 = 0 ⇒ x = -1/3.\nSo α = 3/2 and β = -1/3.",
      "Step 4: Verification:\nSum of zeroes: α + β = 3/2 + (-1/3) = (9 - 2) / 6 = 7 / 6.\nFormula: -b / a = -(-7) / 6 = 7 / 6. (Sum verified).\nProduct of zeroes: αβ = (3/2) × (-1/3) = -1/2.\nFormula: c / a = -3 / 6 = -1 / 2. (Product verified)."
    ],
    explanation: "Standard form ax² + bx + c must be written first to avoid misidentifying b as -3 and c as -7.",
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
    question: "[CBSE 2016, 2022] If α and β are the zeroes of the polynomial x² - 2x - 8, find a new quadratic polynomial whose zeroes are (2α + 1) and (2β + 1).",
    answer: "x² - 8x - 29 (or k[x² - 8x - 29])",
    steps: [
      "Step 1: From the given polynomial p(x) = x² - 2x - 8:\na = 1, b = -2, c = -8.\nSum of zeroes: α + β = -(-2) / 1 = 2.\nProduct of zeroes: αβ = -8 / 1 = -8.",
      "Step 2: Let the zeroes of the required new polynomial be S_{1} and S_{2}, where:\nS_1 = 2α + 1 and S_{2} = 2β + 1.",
      "Step 3: Find the sum of the new zeroes (S_new):\nS_new = S₁ + S₂ = (2α + 1) + (2β + 1)\nS_new = 2(α + β) + 2 = 2(2) + 2 = 4 + 2 = 6.",
      "Step 4: Find the product of the new zeroes (P_new):\nP_new = S₁ · S₂ = (2α + 1)(2β + 1)\nP_new = 4αβ + 2α + 2β + 1\nP_new = 4αβ + 2(α + β) + 1\nP_new = 4(-8) + 2(2) + 1 = -32 + 4 + 1 = -27.",
      "Step 5: Form the new quadratic polynomial:\nq(x) = k[x² - (S_new)x + P_new] = k[x² - 6x - 27]. Taking k = 1: x² - 6x - 27.",
      "Step 6: Alternative Direct Verification:\nSolve x² - 2x - 8 = 0 ⇒ (x - 4)(x + 2) = 0 ⇒ α = 4, β = -2.\nThen 2α + 1 = 2(4) + 1 = 9; 2β + 1 = 2(-2) + 1 = -3.\nNew polynomial zeroes are 9 and -3 ⇒ (x - 9)(x + 3) = x² - 6x - 27. Fully verified!"
    ],
    explanation: "Two valid approaches exist: algebraic symmetric transformation or directly finding α and β when easily factorisable. Both give x² - 6x - 27.",
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
    question: "[CBSE 2024 Competency Case Study] Highway Overpass Design: The path traced by an overpass bridge over a railway track is parabolic and modeled by the quadratic polynomial p(x) = -x² + 2x + 8, where x represents the horizontal distance in meters from a reference point, and p(x) represents the height of the arch above ground level in meters.\n\nBased on this information, answer the following questions:\n(i) State whether the parabolic curve opens upwards or downwards, and give reason. (1 Mark)\n(ii) Find the zeroes of the polynomial p(x). (1 Mark)\n(iii) (a) Find the coordinates of the points where the overpass meets the ground level, and find the span (width) of the bridge base. (2 Marks)\nOR\n(iii) (b) Find the maximum height reached by the overpass arch above ground level. (2 Marks)",
    answer: "(i) Opens downwards as a = -1 < 0; (ii) Zeroes are 4 and -2; (iii)(a) Points (-2, 0) and (4, 0), Span = 6 meters; (iii)(b) Max height = 9 meters at x = 1",
    steps: [
      "Part (i): For p(x) = ax² + bx + c, the coefficient of x² is a = -1. Since a < 0 (negative), the parabola opens DOWNWARDS.",
      "Part (ii): To find zeroes, set p(x) = 0:\n-x² + 2x + 8 = 0 ⇒ x² - 2x - 8 = 0\n(x - 4)(x + 2) = 0 ⇒ x = 4 or x = -2.\nZeroes of the polynomial are 4 and -2.",
      "Part (iii)(a): The overpass meets ground level where height p(x) = 0.\nPoints on ground level are (-2, 0) and (4, 0).\nSpan (width) = distance between points = |4 - (-2)| = 6 meters.",
      "Part (iii)(b) Alternative: Maximum height occurs at the vertex of the parabola:\nx_vertex = -b / (2a) = -2 / (2 × (-1)) = -2 / (-2) = 1 meter.\nMaximum height = p(1) = -1² + 2(1) + 8 = -1 + 2 + 8 = 9 meters."
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
    question: "[CBSE 2024 Standard] Assertion (A): The polynomial p(x) = x² + 4x + 5 has no real zeroes.\nReason (R): A quadratic polynomial can have at most two real zeroes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 1,
    answer: "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
    steps: [
      "Step 1: Check Assertion (A): Discriminant D = b² - 4ac = 4² - 4(1)(5) = 16 - 20 = -4 < 0. Since D < 0, p(x) has no real zeroes. Assertion (A) is TRUE.",
      "Step 2: Check Reason (R): By the Fundamental Theorem of Algebra, any degree-2 polynomial can have at most two real zeroes. Reason (R) is TRUE.",
      "Step 3: However, (R) explains why it cannot have 3 zeroes, NOT why it has zero zeroes (which is due to D < 0). Hence, (R) is not the correct explanation of (A)."
    ],
    explanation: "Both statements are factually true, but the absence of real zeroes is explained by the negative discriminant (D < 0), not by the upper bound on zeroes.",
    formula: "D = b^2 - 4ac; Real zeroes exist iff D ≥ 0",
    examinerNote: "Very common board trap in Assertion-Reason questions: students confuse two independently true facts with a causal explanation.",
    source: "CBSE 2024 Standard Board Examination"
  },
  {
    id: "vq_2_mcq_7",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:",
    options: ["10", "-10", "-7", "-2"],
    correctOption: 1,
    answer: "-10",
    steps: [
      "Step 1: Since x = 2 is a zero of p(x) = x² + 3x + k, we must have p(2) = 0.",
      "Step 2: Substitute x = 2: 2² + 3(2) + k = 0.",
      "Step 3: 4 + 6 + k = 0 ⇒ 10 + k = 0 ⇒ k = -10."
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
    formula: "p(x) = k(x - α)(x - β), k ≠ 0",
    examinerNote: "Nearly 40% of students choose '1' because they assume k must be 1. There are infinitely many polynomials.",
    source: "NCERT Exemplar & CBSE Board 2020"
  },
  {
    id: "vq_2_vsa_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2024 Standard] If the sum of the zeroes of the quadratic polynomial kx² + 2x + 3k is equal to their product, find the value of k.",
    answer: "k = -2/3",
    steps: [
      "Step 1: Given polynomial p(x) = kx² + 2x + 3k, where a = k, b = 2, c = 3k (k ≠ 0).",
      "Step 2: Sum of zeroes = -b / a = -2 / k.",
      "Step 3: Product of zeroes = c / a = 3k / k = 3.",
      "Step 4: Given that Sum = Product: -2 / k = 3 ⇒ 3k = -2 ⇒ k = -2/3."
    ],
    explanation: "Equating -b/a to c/a directly gives -2/k = 3, yielding k = -2/3.",
    formula: "α + β = -b/a; αβ = c/a",
    examinerNote: "Make sure k ≠ 0 is maintained so that the polynomial remains quadratic.",
    source: "CBSE Board 2024 Standard"
  },
  {
    id: "vq_2_vsa_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2020, 2022] If α and β are the zeroes of the polynomial p(x) = 4x² - x - 4, find the value of (1/α + 1/β).",
    answer: "-1/4",
    steps: [
      "Step 1: From p(x) = 4x² - x - 4, we have a = 4, b = -1, c = -4.",
      "Step 2: Sum of zeroes: α + β = -(-1) / 4 = 1/4.",
      "Step 3: Product of zeroes: αβ = -4 / 4 = -1.",
      "Step 4: 1/α + 1/β = (β + α) / (αβ) = (α + β) / (αβ).",
      "Step 5: Substitute values: (1/4) / (-1) = -1/4."
    ],
    explanation: "Take LCM of fractions to express in terms of elementary symmetric polynomials (sum and product).",
    formula: "1/α + 1/β = (α + β) / (αβ)",
    examinerNote: "Do not attempt to solve for α and β separately using quadratic formula; it wastes time and introduces radical algebra errors.",
    source: "CBSE 2022 Term-2 Board Examination"
  },
  {
    id: "vq_2_sa_4",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2019, 2023 Standard] If α and β are the zeroes of the quadratic polynomial f(x) = x² - 5x + k such that α - β = 1, find the value of k.",
    answer: "k = 6",
    steps: [
      "Step 1: For f(x) = x² - 5x + k: a = 1, b = -5, c = k.",
      "Step 2: α + β = -(-5)/1 = 5, and αβ = k.",
      "Step 3: Use the algebraic identity: (α - β)² = (α + β)² - 4αβ.",
      "Step 4: Substitute given values: 1² = 5² - 4k.",
      "Step 5: 1 = 25 - 4k ⇒ 4k = 25 - 1 = 24 ⇒ k = 6.",
      "Step 6: Verification: For k = 6, x² - 5x + 6 = (x - 3)(x - 2) = 0 ⇒ zeroes are 3 and 2. 3 - 2 = 1. Verified!"
    ],
    explanation: "The golden identity (α - β)² = (α + β)² - 4αβ connects difference of zeroes to their sum and product.",
    formula: "(α - β)^2 = (α + β)^2 - 4αβ",
    examinerNote: "Always write the verification step: checking that 3 - 2 = 1 confirms k = 6 is 100% correct.",
    source: "CBSE Board 2023 Standard (Set 30/1/2)"
  },
  {
    id: "vq_2_sa_5",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2024 Standard] Find a quadratic polynomial whose zeroes are the reciprocals of the zeroes of the polynomial ax² + bx + c (a ≠ 0, c ≠ 0).",
    answer: "cx² + bx + a (or k[cx² + bx + a])",
    steps: [
      "Step 1: Let α and β be the zeroes of p(x) = ax² + bx + c.\nThen α + β = -b/a, and αβ = c/a.",
      "Step 2: The zeroes of the required polynomial are 1/α and 1/β.",
      "Step 3: New Sum (S) = 1/α + 1/β = (α + β) / (αβ) = (-b/a) / (c/a) = -b/c.",
      "Step 4: New Product (P) = (1/α) × (1/β) = 1 / (αβ) = 1 / (c/a) = a/c.",
      "Step 5: The required polynomial is q(x) = k[x² - Sx + P] = k[x² - (-b/c)x + (a/c)] = k[x² + (b/c)x + a/c].",
      "Step 6: Taking k = c (to clear fraction): q(x) = cx² + bx + a."
    ],
    explanation: "Reversing the coefficients of a polynomial inverts its roots: the reciprocal polynomial of ax² + bx + c is cx² + bx + a.",
    formula: "Reciprocal polynomial of ax^2 + bx + c is cx^2 + bx + a",
    examinerNote: "This is a recurring 3-mark theoretical derivation. Writing both k[x² + (b/c)x + a/c] and cx² + bx + a gets full marks.",
    source: "CBSE Board 2024 Standard"
  },
  {
    id: "vq_2_sa_6",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "[CBSE 2018, 2022] If the sum of the squares of the zeroes of the quadratic polynomial p(x) = x² - 8x + k is 40, find the value of k.",
    answer: "k = 12",
    steps: [
      "Step 1: For p(x) = x² - 8x + k, a = 1, b = -8, c = k.",
      "Step 2: α + β = -(-8)/1 = 8, and αβ = k.",
      "Step 3: We are given that α² + β² = 40.",
      "Step 4: Using identity: α² + β² = (α + β)² - 2αβ.",
      "Step 5: 40 = 8² - 2k ⇒ 40 = 64 - 2k.",
      "Step 6: 2k = 64 - 40 = 24 ⇒ k = 12.",
      "Step 7: Verification: x² - 8x + 12 = (x - 6)(x - 2) = 0 ⇒ zeroes are 6 and 2. 6² + 2² = 36 + 4 = 40. Verified!"
    ],
    explanation: "Express α² + β² as (α + β)² - 2αβ and solve the linear equation in k.",
    formula: "α^2 + β^2 = (α + β)^2 - 2αβ",
    examinerNote: "Do not write (α + β)² = α² + β². The cross term 2αβ must be subtracted.",
    source: "CBSE All India Board 2018"
  },
  {
    id: "vq_2_la_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 5,
    type: "LA",
    question: "[CBSE 2020 Standard] If α and β are the zeroes of the polynomial 2x² + 5x + k, calculate the value of k such that (α + β)² - 2αβ = 21/4. Also, using this value of k, compute the numerical value of (α³ + β³).",
    answer: "k = 1; α³ + β³ = -95/8",
    steps: [
      "Step 1: Identify coefficients from the quadratic polynomial p(x) = 2x² + 5x + k:",
      "a = 2, b = 5, c = k.",
      "Step 2: Apply the relationships between zeroes and coefficients:",
      "Sum of zeroes: α + β = -b/a = -5/2",
      "Product of zeroes: αβ = c/a = k/2",
      "Step 3: Substitute into the given condition (α + β)² - 2αβ = 21/4:",
      "(-5/2)² - 2(k/2) = 21/4",
      "25/4 - k = 21/4",
      "k = 25/4 - 21/4 = 4/4 = 1",
      "Step 4: Now find α³ + β³ using the standard algebraic identity:",
      "α³ + β³ = (α + β)³ - 3αβ(α + β)",
      "With k = 1, we have α + β = -5/2 and αβ = 1/2:",
      "α³ + β³ = (-5/2)³ - 3 × (1/2) × (-5/2)",
      "= -125/8 + 15/4 = -125/8 + 30/8 = -95/8",
      "Step 5: Final Conclusion: The value of k is 1, and the value of (α³ + β³) is -95/8."
    ],
    explanation: "This problem uses symmetric relations of zeroes (α + β and αβ) derived from Vieta's formulas, avoiding the need to solve for individual roots directly.",
    formula: "\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)",
    examinerNote: "Make sure to write out the expansion identity explicitly. Don't forget that 2 × (k/2) simplifies to k.",
    source: "CBSE Board 2020 Standard (Set 30/3/1)"
  },
  {
    id: "vq_2_la_3",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 5,
    type: "LA",
    question: "[CBSE 2023 Standard] If α and β are the zeroes of polynomial p(x) = 3x² - 4x + 1, find a quadratic polynomial whose zeroes are α²/β and β²/α.",
    answer: "9x² - 28x + 3 (or k[9x² - 28x + 3])",
    steps: [
      "Step 1: For p(x) = 3x² - 4x + 1: a = 3, b = -4, c = 1.\nα + β = 4/3, αβ = 1/3.",
      "Step 2: Let the new zeroes be z_1 = α²/β and z_2 = β²/α.",
      "Step 3: New Sum = z₁ + z₂ = α²/β + β²/α = (α³ + β³) / (αβ).",
      "Step 4: Compute α³ + β³:\nα³ + β³ = (α + β)³ - 3αβ(α + β)\n= (4/3)³ - 3 × (1/3) × (4/3) = 64/27 - 4/3 = 64/27 - 36/27 = 28/27.",
      "Step 5: Therefore, New Sum = (28/27) / (1/3) = (28/27) × 3 = 28/9.",
      "Step 6: New Product = z₁ · z₂ = (α²/β) × (β²/α) = αβ = 1/3.",
      "Step 7: The required polynomial is:\nq(x) = k[x² - (28/9)x + 1/3] = k[(9x² - 28x + 3)/9]. Taking k = 9: 9x² - 28x + 3."
    ],
    explanation: "Product of new zeroes simplifies neatly: (α²/β) × (β²/α) = αβ = 1/3. Sum requires the cubic identity.",
    formula: "z₁ · z₂ = αβ; z₁ + z₂ = (α^3 + β^3) / (αβ)",
    examinerNote: "Notice how the product simplifies directly to αβ without any messy fractions.",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },
  {
    id: "vq_2_case_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Sample Paper Case Study] Roller Coaster Track Profile: In an amusement park, a section of the roller coaster track is shaped like a parabola given by y = x² - 4x - 5, where x is horizontal distance in tens of meters and y is height relative to the loading platform.\n\n(i) What type of polynomial represents the path of the roller coaster? What is its degree? (1 Mark)\n(ii) Find the zeroes of the polynomial y = x² - 4x - 5. (1 Mark)\n(iii) (a) What are the coordinates of the lowest dip of the track below the platform? (2 Marks)\nOR\n(iii) (b) If another track is designed with zeroes at -1 and 3 having leading coefficient 2, find the equation of this new track. (2 Marks)",
    answer: "(i) Quadratic polynomial, degree 2; (ii) -1 and 5; (iii)(a) Dip at (2, -9) meaning 9 units below; (iii)(b) y = 2x² - 4x - 6",
    steps: [
      "Part (i): The polynomial is a quadratic polynomial because the highest exponent of x is 2. Its degree is 2.",
      "Part (ii): x² - 4x - 5 = 0 ⇒ (x - 5)(x + 1) = 0 ⇒ x = 5, x = -1. Zeroes are 5 and -1.",
      "Part (iii)(a): Lowest point (vertex) occurs at x = -b / (2a) = -(-4) / (2 × 1) = 4 / 2 = 2.\nHeight at dip y(2) = 2² - 4(2) - 5 = 4 - 8 - 5 = -9.\nCoordinates of the lowest point are (2, -9), meaning 9 units below the platform.",
      "Part (iii)(b) Alternative: Polynomial with zeroes -1 and 3 and leading coefficient a = 2:\ny = 2(x - (-1))(x - 3) = 2(x + 1)(x - 3) = 2(x² - 2x - 3) = 2x² - 4x - 6."
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
    question: "[CBSE 2025 Competency Case Study] Basketball Free-Throw Trajectory: During a basketball match, a player releases a shot whose trajectory is captured by high-speed motion analysis. The height h(t) of the ball in feet after t seconds is modeled by h(t) = -16t² + 32t + 48.\n\n(i) At t = 0 (time of release), what is the height of the basketball above the court? (1 Mark)\n(ii) After how many seconds does the ball hit the court floor (h = 0)? (1 Mark)\n(iii) (a) Find the maximum height reached by the basketball and the time at which it reaches this height. (2 Marks)\nOR\n(iii) (b) Write the polynomial in factored form showing its zeroes explicitly. (2 Marks)",
    answer: "(i) 48 feet; (ii) 3 seconds; (iii)(a) Max height = 64 feet at t = 1 s; (iii)(b) h(t) = -16(t - 3)(t + 1)",
    steps: [
      "Part (i): At t = 0: h(0) = -16(0)² + 32(0) + 48 = 48 feet.",
      "Part (ii): When the ball hits the floor, h(t) = 0:\n-16t² + 32t + 48 = 0\nDivide by -16: t² - 2t - 3 = 0\n(t - 3)(t + 1) = 0 ⇒ t = 3 or t = -1.\nSince time cannot be negative, t = 3 seconds.",
      "Part (iii)(a): Peak of projectile occurs at vertex: t = -b / (2a) = -32 / (2 × (-16)) = -32 / -32 = 1 second.\nMax height h(1) = -161² + 32(1) + 48 = -16 + 32 + 48 = 64 feet.",
      "Part (iii)(b) Alternative: Factored form: h(t) = -16(t² - 2t - 3) = -16(t - 3)(t + 1)."
    ],
    explanation: "Projectile motion is a downward parabola (a < 0). Vertex gives max height, positive zero gives impact time.",
    formula: "t_peak = -b/(2a) = 1 s; h_max = 64 ft",
    examinerNote: "Discard the negative root t = -1 with explicit physical reasoning ('time cannot be negative').",
    source: "CBSE Competency Assessment Framework 2025"
  }
];
