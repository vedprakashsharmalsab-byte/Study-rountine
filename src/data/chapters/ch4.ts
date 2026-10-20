import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 4: QUADRATIC EQUATIONS
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
// =========================================================================

export const CH4_QUESTIONS: VaultQuestion[] = [
  // -----------------------------------------------------------------------
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // -----------------------------------------------------------------------
  {
    id: "vq_4_mcq_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2021, 2024 Standard] For what value of k will the equation x² + 4x + k = 0 have real and equal roots?",
    options: ["k = 2", "k = 4", "k = -4", "k = 16"],
    correctOption: 1,
    answer: "k = 4",
    steps: [
      "Step 1: Compare the given quadratic equation x² + 4x + k = 0 with the standard form ax² + bx + c = 0. We identify the coefficients: a = 1, b = 4, and c = k.",
      "Step 2: Recall the fundamental criterion for real and equal roots: the discriminant D must be strictly zero ($D = b^2 - 4ac = 0$).",
      "Step 3: Substitute the coefficients into the discriminant formula:\n$$D = (4)^2 - 4(1)(k) = 16 - 4k = 0$$",
      "Step 4: Solve the resulting linear equation for k:\n$$16 - 4k = 0 \\implies 4k = 16 \\implies k = \\frac{16}{4} = 4$$",
      "Step 5: Verification: Substituting k = 4 back into the equation yields x² + 4x + 4 = 0, which factorises as (x + 2)² = 0, giving two coincident real roots x = -2, -2."
    ],
    explanation: "Reason: A quadratic equation ax² + bx + c = 0 possesses coincident (real and equal) roots if and only if its discriminant $D = b^2 - 4ac = 0$. For x² + 4x + k = 0, setting $4^2 - 4(1)(k) = 0$ directly gives $16 = 4k \\implies k = 4$.\n• Why other options are wrong:\n- k = 2: Gives $D = 16 - 4(2) = 8 > 0$, producing two distinct real roots ($x = -2 \\pm \\sqrt{2}$), not equal roots.\n- k = -4: Gives $D = 16 - 4(-4) = 32 > 0$, also producing two distinct real roots.\n- k = 16: Gives $D = 16 - 4(16) = -48 < 0$, resulting in no real roots (complex roots).",
    formula: "D = b^2 - 4ac = 0 \\iff \\text{Real and Equal Roots}",
    examinerNote: "Do not square 4 as 8 by careless mental slip: (4)² = 16, so 16 - 4k = 0 yields k = 4. Always write the discriminant condition explicitly.",
    source: "CBSE Board 2024 Standard (Set 30/1/1)"
  },
  {
    id: "vq_4_mcq_2",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2013, 2020 Standard] For what values of k does the quadratic equation kx(x - 2) + 6 = 0 have two equal roots?",
    options: ["k = 0", "k = 6", "k = 0 or 6", "k = -6"],
    correctOption: 1,
    answer: "k = 6",
    steps: [
      "Step 1: Expand the given equation into standard quadratic form ax² + bx + c = 0:\n$$kx(x - 2) + 6 = 0 \\implies kx^2 - 2kx + 6 = 0$$",
      "Step 2: Identify the coefficients: a = k, b = -2k, and c = 6. Crucially, by definition of a quadratic equation, the leading coefficient must not be zero: $a \\neq 0 \\implies k \\neq 0$.",
      "Step 3: Apply the condition for two equal real roots ($D = b^2 - 4ac = 0$):\n$$D = (-2k)^2 - 4(k)(6) = 4k^2 - 24k = 0$$",
      "Step 4: Factorise the quadratic expression in k:\n$$4k(k - 6) = 0 \\implies k = 0 \\quad \\text{or} \\quad k = 6$$",
      "Step 5: Enforce the non-zero leading coefficient constraint: If k = 0, the equation reduces to $0x^2 - 0x + 6 = 0 \\implies 6 = 0$, which is mathematically impossible and ceases to be a quadratic equation. Therefore, k = 0 must be rejected, leaving strictly k = 6."
    ],
    explanation: "Reason: The equal roots condition D = 0 produces $4k(k - 6) = 0$, yielding candidate values k = 0 and k = 6. However, the fundamental definition of a quadratic equation ax² + bx + c = 0 strictly requires $a \\neq 0$. Since a = k, we must have $k \\neq 0$. Rejecting k = 0 leaves strictly k = 6.\n• Why other options are wrong:\n- k = 0: Makes the coefficient of x² equal to 0, destroying the quadratic nature and leaving 6 = 0 (an absurdity).\n- k = 0 or 6: The #1 most common CBSE trap! Students factorise correctly but forget to reject k = 0 under the domain constraint $a \\neq 0$.\n- k = -6: Gives $D = 4(-6)^2 - 24(-6) = 144 + 144 = 288 \\neq 0$.",
    formula: "D = b^2 - 4ac = 0 \\quad \\text{with constraint } a \\neq 0",
    examinerNote: "CRITICAL CBSE BOARD TRAP: Every year thousands of students choose 'k = 0 or 6' and lose the mark. Whenever the unknown parameter is in the leading coefficient (coefficient of x²), check whether any root makes that coefficient zero and reject it!",
    source: "CBSE Board 2020 Standard (Set 30/3/1)"
  },
  {
    id: "vq_4_mcq_3",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] The nature of roots of the quadratic equation 2x² - 4x + 3 = 0 is:",
    options: [
      "real and distinct",
      "real and equal",
      "no real roots",
      "more than two real roots"
    ],
    correctOption: 2,
    answer: "no real roots",
    steps: [
      "Step 1: Identify coefficients from the standard form ax² + bx + c = 0: a = 2, b = -4, and c = 3.",
      "Step 2: Calculate the discriminant $D = b^2 - 4ac$:\n$$D = (-4)^2 - 4(2)(3) = 16 - 24 = -8$$",
      "Step 3: Analyze the sign of the discriminant: D = -8 < 0 (strictly negative).",
      "Step 4: Recall the three cases of the root nature theorem:\n- If D > 0: Two distinct real roots\n- If D = 0: Two equal real roots\n- If D < 0: No real roots (roots are non-real complex conjugate numbers)",
      "Step 5: Since D = -8 < 0, the given quadratic equation has NO REAL ROOTS."
    ],
    explanation: "Reason: Because the discriminant $D = b^2 - 4ac = 16 - 24 = -8 < 0$, the radical $\\sqrt{D} = \\sqrt{-8}$ does not exist in the set of real numbers $\\mathbb{R}$. Geometrically, the parabola y = 2x² - 4x + 3 opens upwards with its vertex at (1, 1), entirely above the x-axis, so it never touches or crosses the x-axis.\n• Why other options are wrong:\n- real and distinct: Demands D > 0, but here D = -8 < 0.\n- real and equal: Demands D = 0, but here D = -8 \\neq 0.\n- more than two real roots: Impossible for any quadratic equation, as a degree-2 polynomial can have at most 2 roots (Fundamental Theorem of Algebra).",
    formula: "D = b^2 - 4ac < 0 \\iff \\text{No Real Roots}",
    examinerNote: "CBSE official marking terminology uses 'no real roots'. Avoid stating 'roots do not exist'; roots exist, but they are not real numbers.",
    source: "CBSE Board 2023 Standard (Set 30/4/1)"
  },
  {
    id: "vq_4_mcq_4",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019 Delhi] If one root of the quadratic equation 2x² + kx - 6 = 0 is 2, then the value of k is:",
    options: ["1", "-1", "2", "-2"],
    correctOption: 1,
    answer: "-1",
    steps: [
      "Step 1: Understand the definition of a root: If x = 2 is a root of 2x² + kx - 6 = 0, it must satisfy the equation when substituted for x.",
      "Step 2: Substitute x = 2 into the given equation:\n$$2(2)^2 + k(2) - 6 = 0$$",
      "Step 3: Compute powers and products:\n$$2(4) + 2k - 6 = 0 \\implies 8 + 2k - 6 = 0$$",
      "Step 4: Combine the constant terms: 2k + 2 = 0.",
      "Step 5: Solve for k: $$2k = -2 \\implies k = \\frac{-2}{2} = -1$$",
      "Step 6: Verification: For k = -1, the equation becomes 2x² - x - 6 = 0. Factorising: $(2x + 3)(x - 2) = 0 \\implies x = 2 \\text{ or } x = -3/2$. This confirms 2 is indeed a root."
    ],
    explanation: "Reason: By the Factor Theorem, x = 2 is a root of p(x) = 2x² + kx - 6 if and only if p(2) = 0. Substituting gives $2(2)^2 + k(2) - 6 = 8 + 2k - 6 = 2k + 2 = 0 \\implies k = -1$.\n• Why other options are wrong:\n- k = 1: Gives $p(2) = 8 + 2(1) - 6 = 4 \\neq 0$.\n- k = 2: Gives $p(2) = 8 + 2(2) - 6 = 6 \\neq 0$.\n- k = -2: Gives $p(2) = 8 + 2(-2) - 6 = -2 \\neq 0$.",
    formula: "p(\\alpha) = 0 \\iff \\alpha \\text{ is a root of } p(x) = 0",
    examinerNote: "Ensure proper exponent precedence: 2(2)² = 2 × 4 = 8, not 4² = 16. Direct substitution is the quickest, most reliable method.",
    source: "CBSE Board 2019 Delhi"
  },
  {
    id: "vq_4_mcq_5",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020 Standard] Which of the following is a quadratic equation?",
    options: [
      "(x + 2)(x - 1) = x² - 2x + 3",
      "(x - 2)² + 1 = 2x - 3",
      "x² + 2x + 1 = (4 - x)² + 3",
      "-2x² = (5 - x)(2x - 2/5)"
    ],
    correctOption: 1,
    answer: "(x - 2)² + 1 = 2x - 3",
    steps: [
      "Step 1: Recall the definition of a quadratic equation: Any equation that can be written in standard form ax² + bx + c = 0 where a \\neq 0 (meaning the highest power of the variable x is strictly 2 after complete simplification).",
      "Step 2: Test Option A: $(x + 2)(x - 1) = x^2 - 2x + 3$\nExpanding LHS: $x^2 + x - 2 = x^2 - 2x + 3$\nSubtract x² from both sides: $x - 2 = -2x + 3 \\implies 3x - 5 = 0$. Degree is 1 (Linear, NOT quadratic).",
      "Step 3: Test Option B: $(x - 2)^2 + 1 = 2x - 3$\nExpanding LHS: $(x^2 - 4x + 4) + 1 = 2x - 3 \\implies x^2 - 4x + 5 = 2x - 3$\nTranspose all terms to LHS: $x^2 - 6x + 8 = 0$.\nHere the degree is strictly 2 and coefficient of x² is 1 \\neq 0. Therefore, this IS a quadratic equation!",
      "Step 4: Test Option C: $x^2 + 2x + 1 = (4 - x)^2 + 3$\nExpanding RHS: $x^2 + 2x + 1 = (16 - 8x + x^2) + 3 = x^2 - 8x + 19$\nSubtract x² from both sides: $2x + 1 = -8x + 19 \\implies 10x - 18 = 0$ (Linear, NOT quadratic).",
      "Step 5: Test Option D: $-2x^2 = (5 - x)(2x - \\frac{2}{5})$\nExpanding RHS: $-2x^2 = 10x - 2 - 2x^2 + \\frac{2}{5}x$\nAdd 2x² to both sides: $0 = \\frac{52}{5}x - 2 \\implies \\frac{52}{5}x - 2 = 0$ (Linear, NOT quadratic).",
      "Step 6: Conclusion: Only Option B yields a non-zero x² term upon full simplification."
    ],
    explanation: "Reason: An equation is quadratic if and only if, after expanding and transferring all terms to one side, the highest power of x is strictly 2 with a non-zero leading coefficient ($a \\neq 0$). In Option B, $(x - 2)^2 + 1 = 2x - 3$ simplifies to $x^2 - 6x + 8 = 0$, where $a = 1 \\neq 0$.\n• Why other options are wrong:\n- Option A: x² cancels on both sides, reducing to $3x - 5 = 0$ (degree 1).\n- Option C: x² cancels on both sides, reducing to $10x - 18 = 0$ (degree 1).\n- Option D: -2x² cancels on both sides, reducing to $\\frac{52}{5}x - 2 = 0$ (degree 1).",
    formula: "ax^2 + bx + c = 0 \\quad (a \\neq 0) \\iff \\text{Degree is strictly 2}",
    examinerNote: "Never judge quadratic equations by eye! Expressions that appear quadratic often cancel out the x² term upon expansion. Always expand both sides completely.",
    source: "CBSE Board 2020 Standard"
  },
  {
    id: "vq_4_mcq_6",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2024 Standard] Assertion (A): The equation 4x² - 12x + 9 = 0 has two real and equal roots.\nReason (R): For any quadratic equation ax² + bx + c = 0, the roots are real and equal if and only if b² - 4ac = 0.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOption: 0,
    answer: "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    steps: [
      "Step 1: Evaluate Reason (R): By the root discriminant theorem, a quadratic equation ax² + bx + c = 0 has real and equal roots if and only if the discriminant $D = b^2 - 4ac = 0$. Hence, Reason (R) is a universally TRUE mathematical statement.",
      "Step 2: Evaluate Assertion (A): For the equation 4x² - 12x + 9 = 0, identify the coefficients: a = 4, b = -12, and c = 9.",
      "Step 3: Calculate the discriminant D:\n$$D = b^2 - 4ac = (-12)^2 - 4(4)(9) = 144 - 144 = 0$$",
      "Step 4: Because D = 0, by virtue of the exact theorem in (R), the equation has two real and equal roots (each root = $-(-12)/(2 \\times 4) = 12/8 = 3/2$). Thus, Assertion (A) is TRUE.",
      "Step 5: Check causality: Assertion (A) is true precisely because the condition stated in Reason (R) holds true. Hence, (R) is the correct explanation of (A)."
    ],
    explanation: "Reason: The discriminant $D = (-12)^2 - 4(4)(9) = 144 - 144 = 0$ confirms that the equation has real and equal roots, validating Assertion (A). Reason (R) states the foundational theorem linking equal roots to $D = 0$. Since (R) directly explains why (A) is true, Option A is the correct answer.\n• Why other options are wrong:\n- Option B: Incorrect because (R) is the precise mathematical rationale for (A), not an isolated fact.\n- Option C: Incorrect because (R) is true.\n- Option D: Incorrect because (A) is true.",
    formula: "D = b^2 - 4ac = 0 \\iff \\text{Real and Equal Roots}",
    examinerNote: "Notice that 4x² - 12x + 9 is a perfect square trinomial: (2x - 3)² = 0, which immediately yields the single repeated root x = 3/2.",
    source: "CBSE 2024 Standard Board Examination"
  },
  {
    id: "vq_4_mcq_7",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023 Standard] Which of the following is NOT a quadratic equation?",
    options: [
      "(x - 2)² + 1 = 2x - 3",
      "x(x + 1) + 8 = (x + 2)(x - 2)",
      "x(2x + 3) = x² + 1",
      "(x + 2)³ = x³ - 4"
    ],
    correctOption: 1,
    answer: "x(x + 1) + 8 = (x + 2)(x - 2)",
    steps: [
      "Step 1: Test Option A: $(x - 2)^2 + 1 = 2x - 3 \\implies x^2 - 4x + 4 + 1 = 2x - 3 \\implies x^2 - 6x + 8 = 0$. Degree is 2 (Quadratic).",
      "Step 2: Test Option B: $x(x + 1) + 8 = (x + 2)(x - 2)$\nExpanding LHS: $x^2 + x + 8$\nExpanding RHS using difference of squares: $x^2 - 4$\nEquate both sides: $x^2 + x + 8 = x^2 - 4$\nSubtract x² from both sides: $x + 8 = -4 \\implies x + 12 = 0$.\nDegree is 1 (Linear). Hence, this is NOT a quadratic equation!",
      "Step 3: Test Option C: $x(2x + 3) = x^2 + 1 \\implies 2x^2 + 3x = x^2 + 1 \\implies x^2 + 3x - 1 = 0$. Degree is 2 (Quadratic).",
      "Step 4: Test Option D: $(x + 2)^3 = x^3 - 4$\nExpanding LHS using $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$:\n$$x^3 + 6x^2 + 12x + 8 = x^3 - 4$$\nSubtract x³ from both sides:\n$$6x^2 + 12x + 12 = 0 \\implies x^2 + 2x + 2 = 0$$\nDegree is 2 (Quadratic)!",
      "Step 5: Therefore, Option B is the only expression that collapses to degree 1."
    ],
    explanation: "Reason: Expanding $x(x + 1) + 8 = (x + 2)(x - 2)$ yields $x^2 + x + 8 = x^2 - 4$. Subtracting x² from both sides leaves $x + 12 = 0$, a linear equation with degree 1. Since the coefficient of x² is 0, it fails the definition of a quadratic equation.\n• Why other options are wrong:\n- Option A: Simplifies to $x^2 - 6x + 8 = 0$ (quadratic, a = 1).\n- Option C: Simplifies to $x^2 + 3x - 1 = 0$ (quadratic, a = 1).\n- Option D: A classic CBSE trap! Even though degree 3 appears on expansion, x³ cancels from both sides, leaving $6x^2 + 12x + 12 = 0$ (quadratic, a = 6).",
    formula: "ax^2 + bx + c = 0 \\quad (a \\neq 0)",
    examinerNote: "Option D is an iconic board exam distractor: students see (x + 2)³ and wrongly believe it is cubic. Always expand before deciding!",
    source: "CBSE 2023 Standard (Set 30/2/1)"
  },

  // -----------------------------------------------------------------------
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // -----------------------------------------------------------------------
  {
    id: "vq_4_vsa_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2014, 2017, 2023] Solve the following quadratic equation by factorisation:\n$$\\sqrt{2}x^2 + 7x + 5\\sqrt{2} = 0$$",
    answer: "x = -\\sqrt{2} \\quad \\text{or} \\quad x = -\\frac{5}{\\sqrt{2}} = -\\frac{5\\sqrt{2}}{2}",
    steps: [
      "Step 1: Compute the product of the leading coefficient and the constant term (ac):\n$$ac = \\sqrt{2} \\times 5\\sqrt{2} = 5 \\times (\\sqrt{2} \\times \\sqrt{2}) = 5 \\times 2 = 10$$",
      "Step 2: Find two numbers whose product is 10 and whose algebraic sum equals the middle term coefficient b = 7.\nThe required numbers are 5 and 2 (since 5 × 2 = 10 and 5 + 2 = 7).",
      "Step 3: Split the middle term 7x into 2x + 5x:\n$$\\sqrt{2}x^2 + 2x + 5x + 5\\sqrt{2} = 0$$",
      "Step 4: Factor by grouping. Express 2 as $\\sqrt{2} \\times \\sqrt{2}$:\n$$\\sqrt{2}x(x + \\sqrt{2}) + 5(x + \\sqrt{2}) = 0$$",
      "Step 5: Extract the common binomial factor $(x + \\sqrt{2})$:\n$$(x + \\sqrt{2})(\\sqrt{2}x + 5) = 0$$",
      "Step 6: Equate each factor to zero to obtain the roots:\n$$x + \\sqrt{2} = 0 \\implies x = -\\sqrt{2}$$\n$$\\sqrt{2}x + 5 = 0 \\implies x = -\\frac{5}{\\sqrt{2}} = -\\frac{5\\sqrt{2}}{2}$$",
      "Step 7: Verification: For $x = -\\sqrt{2}$: $\\sqrt{2}(-\\sqrt{2})^2 + 7(-\\sqrt{2}) + 5\\sqrt{2} = 2\\sqrt{2} - 7\\sqrt{2} + 5\\sqrt{2} = 0$. Verified!"
    ],
    explanation: "Reason: The core algebraic step in factorising surd quadratics is writing the integer 2 as $\\sqrt{2} \\times \\sqrt{2}$, which allows factoring $\\sqrt{2}x$ out of the first two terms: $\\sqrt{2}x^2 + 2x = \\sqrt{2}x(x + \\sqrt{2})$. This reveals the common binomial $(x + \\sqrt{2})$.",
    formula: "ac = 10, \\quad b = 7 \\implies 7x = 2x + 5x",
    examinerNote: "CBSE Marking Scheme: 0.5 mark for splitting middle term into 2x + 5x, 0.5 mark for correct grouping, 1.0 mark for both final roots. Rationalising $-5/\\sqrt{2}$ as $-5\\sqrt{2}/2$ is recommended.",
    source: "CBSE Board 2023 Standard & NCERT Ex 4.2"
  },
  {
    id: "vq_4_vsa_2",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2013, 2019 Standard] Solve by factorisation:\n$$4\\sqrt{3}x^2 + 5x - 2\\sqrt{3} = 0$$",
    answer: "x = \\frac{\\sqrt{3}}{4} \\quad \\text{or} \\quad x = -\\frac{2}{\\sqrt{3}} = -\\frac{2\\sqrt{3}}{3}",
    steps: [
      "Step 1: Compute the product of the outer coefficients (ac):\n$$ac = (4\\sqrt{3}) \\times (-2\\sqrt{3}) = -8 \\times 3 = -24$$",
      "Step 2: Find two numbers whose product is -24 and whose sum is b = +5.\nThe required pair is +8 and -3 (since 8 × (-3) = -24 and 8 - 3 = 5).",
      "Step 3: Split the middle term 5x into 8x - 3x:\n$$4\\sqrt{3}x^2 + 8x - 3x - 2\\sqrt{3} = 0$$",
      "Step 4: Factor by grouping. Notice that $3 = \\sqrt{3} \\times \\sqrt{3}$:\n$$4x(\\sqrt{3}x + 2) - \\sqrt{3}(\\sqrt{3}x + 2) = 0$$",
      "Step 5: Extract the common binomial factor $(\\sqrt{3}x + 2)$:\n$$(\\sqrt{3}x + 2)(4x - \\sqrt{3}) = 0$$",
      "Step 6: Solve for the roots:\n$$\\sqrt{3}x + 2 = 0 \\implies x = -\\frac{2}{\\sqrt{3}} = -\\frac{2\\sqrt{3}}{3}$$\n$$4x - \\sqrt{3} = 0 \\implies x = \\frac{\\sqrt{3}}{4}$$"
    ],
    explanation: "Reason: Recognizing that $3 = (\\sqrt{3})^2$ is the crucial insight that allows extracting $-\\sqrt{3}$ from the second pair of terms: $-3x - 2\\sqrt{3} = -\\sqrt{3}(\\sqrt{3}x + 2)$. The matching binomial factor produces the exact factorised form.",
    formula: "ac = -24, \\quad b = 5 \\implies 5x = 8x - 3x",
    examinerNote: "Always write both roots clearly. Writing $-2/\\sqrt{3}$ as $-2\\sqrt{3}/3$ shows strong mathematical fluency and avoids any potential half-mark deduction.",
    source: "CBSE Board 2019 (Set 30/2/1)"
  },
  {
    id: "vq_4_vsa_3",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2016, 2022] If -5 is a root of the quadratic equation 2x² + px - 15 = 0, and the quadratic equation p(x² + x) + k = 0 has equal roots, find the value of k.",
    answer: "p = 7, \\quad k = \\frac{7}{4}",
    steps: [
      "Step 1: Since x = -5 is a root of 2x² + px - 15 = 0, substitute x = -5 into the equation:\n$$2(-5)^2 + p(-5) - 15 = 0$$\n$$2(25) - 5p - 15 = 0 \\implies 50 - 5p - 15 = 0$$\n$$35 - 5p = 0 \\implies 5p = 35 \\implies p = 7$$",
      "Step 2: Substitute p = 7 into the second equation p(x² + x) + k = 0:\n$$7(x^2 + x) + k = 0 \\implies 7x^2 + 7x + k = 0$$",
      "Step 3: Identify the coefficients of this new quadratic equation: a = 7, b = 7, and c = k.",
      "Step 4: The problem specifies that this equation has equal roots. Therefore, the discriminant D must be zero:\n$$D = b^2 - 4ac = (7)^2 - 4(7)(k) = 49 - 28k = 0$$",
      "Step 5: Solve for k:\n$$28k = 49 \\implies k = \\frac{49}{28} = \\frac{7}{4}$$"
    ],
    explanation: "Reason: A classic two-stage problem: First utilize the root substitution property to determine the numerical value of parameter p (p = 7). Then apply the equal roots discriminant criterion $D = b^2 - 4ac = 0$ on the second quadratic equation to determine $k = 7/4$.",
    formula: "\\text{Stage 1: } p(-5) = 0 \\implies p = 7; \\quad \\text{Stage 2: } D = b^2 - 4ac = 0 \\implies k = \\frac{7}{4}",
    examinerNote: "CBSE Marking Scheme: 1 mark for calculating p = 7 correctly, 1 mark for setting D = 49 - 28k = 0 and finding k = 7/4. Simplify 49/28 to 7/4.",
    source: "CBSE Board 2022 Standard & 2016 All India"
  },
  {
    id: "vq_4_vsa_4",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2023 Standard] Find the discriminant of the quadratic equation 2x² - 4x + 3 = 0, and hence state the nature of its roots.",
    answer: "Discriminant D = -8; \\quad \\text{Nature of roots: No real roots (not real)}",
    steps: [
      "Step 1: Identify coefficients from the standard form ax² + bx + c = 0: a = 2, b = -4, and c = 3.",
      "Step 2: Compute the discriminant D using $D = b^2 - 4ac$:\n$$D = (-4)^2 - 4(2)(3) = 16 - 24 = -8$$",
      "Step 3: Analyze the numerical value obtained: D = -8 < 0.",
      "Step 4: Conclude the nature of roots: Since D < 0, the given quadratic equation has no real roots (two non-real complex conjugate roots)."
    ],
    explanation: "Reason: The discriminant determines whether $\\sqrt{D}$ is a real quantity. Since D = -8 is negative, $\\sqrt{-8}$ is not a real number, proving that the equation possesses no real roots.",
    formula: "D = b^2 - 4ac; \\quad D < 0 \\implies \\text{No Real Roots}",
    examinerNote: "CBSE Marking Scheme: 1 mark for finding D = -8 correctly, 1 mark for explicitly stating 'no real roots'. Both parts are required for full 2 marks.",
    source: "CBSE Board 2023 Standard"
  },
  {
    id: "vq_4_vsa_5",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2021, 2022] Find the value of p for which the quadratic equation px(x - 3) + 9 = 0 has two equal real roots.",
    answer: "p = 4 \\quad (p \\neq 0)",
    steps: [
      "Step 1: Expand the equation into standard quadratic form:\n$$px(x - 3) + 9 = 0 \\implies px^2 - 3px + 9 = 0$$",
      "Step 2: Identify coefficients: a = p, b = -3p, and c = 9. For the equation to be quadratic, $a \\neq 0 \\implies p \\neq 0$.",
      "Step 3: For equal real roots, set the discriminant D = 0:\n$$D = b^2 - 4ac = (-3p)^2 - 4(p)(9) = 0$$\n$$9p^2 - 36p = 0$$",
      "Step 4: Factorise the quadratic expression in p:\n$$9p(p - 4) = 0 \\implies p = 0 \\quad \\text{or} \\quad p = 4$$",
      "Step 5: Apply the quadratic existence constraint: If p = 0, the original equation collapses to 9 = 0 (invalid and not quadratic). Therefore, p = 0 must be rejected.\nHence, p = 4."
    ],
    explanation: "Reason: The condition D = 0 gives 9p(p - 4) = 0. However, if p = 0, the x² term vanishes, leaving 9 = 0, which violates the requirement that $a \\neq 0$. Thus, p = 0 is rejected, leaving p = 4.",
    formula: "D = b^2 - 4ac = 0 \\quad \\text{with } a = p \\neq 0",
    examinerNote: "Failing to explicitly reject p = 0 loses 0.5 marks. Always state: 'Since p = 0 does not yield a quadratic equation, p = 4'.",
    source: "CBSE Term-2 Board Examination"
  },

  // -----------------------------------------------------------------------
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // -----------------------------------------------------------------------
  {
    id: "vq_4_sa_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "[CBSE 2015, 2018, 2020, 2024] Solve for x:\n$$\\frac{1}{x + 4} - \\frac{1}{x - 7} = \\frac{11}{30}, \\quad \\text{where } x \\neq -4, 7$$",
    answer: "x = 1 \\quad \\text{or} \\quad x = 2",
    steps: [
      "Step 1: Combine the rational expressions on the LHS using the common denominator (x + 4)(x - 7):\n$$\\frac{(x - 7) - (x + 4)}{(x + 4)(x - 7)} = \\frac{11}{30}$$",
      "Step 2: Simplify the numerator and expand the denominator:\n$$\\frac{x - 7 - x - 4}{x^2 - 7x + 4x - 28} = \\frac{11}{30} \\implies \\frac{-11}{x^2 - 3x - 28} = \\frac{11}{30}$$",
      "Step 3: Divide both sides by 11 to simplify numbers:\n$$\\frac{-1}{x^2 - 3x - 28} = \\frac{1}{30}$$",
      "Step 4: Cross-multiply:\n$$-1 \\times 30 = 1 \\times (x^2 - 3x - 28) \\implies -30 = x^2 - 3x - 28$$",
      "Step 5: Collect all terms on the RHS to form a standard quadratic equation:\n$$x^2 - 3x - 28 + 30 = 0 \\implies x^2 - 3x + 2 = 0$$",
      "Step 6: Factorise by middle term splitting (product = 2, sum = -3 \\implies -2, -1):\n$$(x - 1)(x - 2) = 0 \\implies x = 1 \\quad \\text{or} \\quad x = 2$$",
      "Step 7: Check domain restrictions: Given x \\neq -4, 7. Both x = 1 and x = 2 are valid!"
    ],
    explanation: "Reason: A high-frequency CBSE pattern where the numerator simplifies to -11, cancelling cleanly with the 11 on the RHS. This reduces an otherwise complex algebraic fraction into the simple quadratic x² - 3x + 2 = 0 with integer roots 1 and 2.",
    formula: "\\frac{1}{A} - \\frac{1}{B} = \\frac{B - A}{AB}",
    examinerNote: "CBSE Marking Scheme: 1 mark for combining fractions and obtaining -11/(x² - 3x - 28) = 11/30, 1 mark for reducing to x² - 3x + 2 = 0, 1 mark for factorising and stating both roots.",
    source: "CBSE Board 2024 Standard (Set 30/2/1) & 2020 All India"
  },
  {
    id: "vq_4_sa_2",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "[CBSE 2014, 2019] Solve for x:\n$$\\frac{x - 1}{x - 2} + \\frac{x - 3}{x - 4} = \\frac{10}{3}, \\quad \\text{where } x \\neq 2, 4$$",
    answer: "x = 5 \\quad \\text{or} \\quad x = \\frac{5}{2}",
    steps: [
      "Step 1: Take the common denominator (x - 2)(x - 4) on the LHS:\n$$\\frac{(x - 1)(x - 4) + (x - 3)(x - 2)}{(x - 2)(x - 4)} = \\frac{10}{3}$$",
      "Step 2: Expand the terms in the numerator:\n$$(x - 1)(x - 4) = x^2 - 5x + 4$$\n$$(x - 3)(x - 2) = x^2 - 5x + 6$$\n$$\\text{Numerator} = (x^2 - 5x + 4) + (x^2 - 5x + 6) = 2x^2 - 10x + 10 = 2(x^2 - 5x + 5)$$",
      "Step 3: Expand the denominator: $(x - 2)(x - 4) = x^2 - 6x + 8$.",
      "Step 4: Equate and simplify by dividing both numerator and RHS by 2:\n$$\\frac{2(x^2 - 5x + 5)}{x^2 - 6x + 8} = \\frac{10}{3} \\implies \\frac{x^2 - 5x + 5}{x^2 - 6x + 8} = \\frac{5}{3}$$",
      "Step 5: Cross-multiply:\n$$3(x^2 - 5x + 5) = 5(x^2 - 6x + 8)$$\n$$3x^2 - 15x + 15 = 5x^2 - 30x + 40$$",
      "Step 6: Transpose all terms to one side:\n$$2x^2 - 15x + 25 = 0$$",
      "Step 7: Factorise (ac = 2 × 25 = 50, sum = -15 \\implies -10, -5):\n$$2x^2 - 10x - 5x + 25 = 0$$\n$$2x(x - 5) - 5(x - 5) = 0 \\implies (x - 5)(2x - 5) = 0$$\n$$x = 5 \\quad \\text{or} \\quad x = \\frac{5}{2}$$",
      "Step 8: Both roots satisfy the domain condition x \\neq 2, 4."
    ],
    explanation: "Reason: Factoring out 2 from the numerator in Step 4 simplifies the equation from 10/3 to 5/3, halving the magnitude of the cross-multiplication coefficients and eliminating arithmetic errors.",
    formula: "2x^2 - 15x + 25 = (x - 5)(2x - 5) = 0",
    examinerNote: "Dividing by common factor 2 before cross-multiplying saves 3 minutes of tedious arithmetic and avoids working with 10(x² - 6x + 8).",
    source: "CBSE Board 2019 (Set 30/1/2)"
  },
  {
    id: "vq_4_sa_3",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "Proof",
    question: "[CBSE 2002, 2015, 2019] If the roots of the equation (b - c)x² + (c - a)x + (a - b) = 0 are equal, prove that 2b = a + c (i.e., a, b, c are in AP).",
    answer: "2b = a + c \\quad \\text{(Proved)}",
    steps: [
      "Step 1: Method 1 (Topper Observation Method - Recommended by CBSE Evaluators):\nNotice the algebraic sum of the coefficients of the equation Ax² + Bx + C = 0:\n$$A + B + C = (b - c) + (c - a) + (a - b) = 0$$",
      "Step 2: When the sum of coefficients of a polynomial equation equals zero, x = 1 is ALWAYS a root!\nProof: $A(1)^2 + B(1) + C = A + B + C = 0$.",
      "Step 3: The question gives that the equation has EQUAL roots. Therefore, the second root must also be exactly 1.",
      "Step 4: Recall the formula for the product of roots of Ax² + Bx + C = 0:\n$$\\text{Product of roots} = \\frac{C}{A} = \\frac{a - b}{b - c}$$",
      "Step 5: Since both roots are 1, their product is 1 × 1 = 1:\n$$\\frac{a - b}{b - c} = 1 \\implies a - b = b - c$$",
      "Step 6: Rearrange the terms:\n$$a + c = b + b \\implies 2b = a + c$$\nHence proved!",
      "Step 7: Method 2 (Standard Discriminant Method):\nSetting $D = (c - a)^2 - 4(b - c)(a - b) = 0$ gives $c^2 - 2ca + a^2 - 4(ba - b^2 - ca + cb) = 0$, which rearranges to $(a + c - 2b)^2 = 0 \\implies a + c - 2b = 0 \\implies 2b = a + c$."
    ],
    explanation: "Reason: The elegant observation that the sum of coefficients $(b - c) + (c - a) + (a - b) = 0$ proves that x = 1 is a root. Since the roots are given to be equal, both roots must equal 1, making the product of roots $C/A = 1$, directly producing $a - b = b - c \\implies 2b = a + c$ in 5 lines.",
    formula: "\\sum \\text{coefficients} = 0 \\implies x = 1 \\text{ is a root; } \\quad \\alpha \\beta = \\frac{C}{A}",
    examinerNote: "Both Method 1 and Method 2 receive 100% full marks in CBSE. Method 1 is faster and eliminates the risk of sign errors when expanding -4(b - c)(a - b).",
    source: "CBSE Board 2019 All India & NCERT Exemplar"
  },
  {
    id: "vq_4_sa_4",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "Proof",
    question: "[CBSE 2014, 2017, 2023] If the roots of the equation (1 + m²)x² + 2mcx + (c² - a²) = 0 are equal, prove that c² = a²(1 + m²).",
    answer: "c² = a²(1 + m²) \\quad \\text{(Proved)}",
    steps: [
      "Step 1: Identify coefficients from Ax² + Bx + C = 0: A = (1 + m²), B = 2mc, and C = (c² - a²).",
      "Step 2: The roots are given to be equal. Therefore, the discriminant D must be zero:\n$$D = B^2 - 4AC = 0$$",
      "Step 3: Substitute the expressions into the discriminant:\n$$(2mc)^2 - 4(1 + m^2)(c^2 - a^2) = 0$$",
      "Step 4: Expand the squares and terms:\n$$4m^2c^2 - 4[(1)(c^2 - a^2) + m^2(c^2 - a^2)] = 0$$\n$$4m^2c^2 - 4[c^2 - a^2 + m^2c^2 - m^2a^2] = 0$$",
      "Step 5: Divide the entire equation by 4:\n$$m^2c^2 - [c^2 - a^2 + m^2c^2 - m^2a^2] = 0$$",
      "Step 6: Remove brackets with careful sign distribution:\n$$m^2c^2 - c^2 + a^2 - m^2c^2 + m^2a^2 = 0$$",
      "Step 7: Notice that the m²c² and -m²c² terms cancel out completely:\n$$-c^2 + a^2 + m^2a^2 = 0 \\implies c^2 = a^2 + m^2a^2$$",
      "Step 8: Factor out a² on the RHS:\n$$c^2 = a^2(1 + m^2)$$\nHence proved!"
    ],
    explanation: "Reason: Setting $D = B^2 - 4AC = 0$ and dividing by 4 at Step 5 allows the $4m^2c^2$ term to cancel with $-4m^2c^2$, directly leaving $-c^2 + a^2(1 + m^2) = 0$, which rearranges to $c^2 = a^2(1 + m^2)$. This is the condition of tangency for the line y = mx + c to the circle x² + y² = a².",
    formula: "D = B^2 - 4AC = 0 \\implies (2mc)^2 - 4(1+m^2)(c^2-a^2) = 0",
    examinerNote: "CBSE Marking Scheme: 1 mark for setting up D = 0 correctly, 1 mark for expanding and cancelling m²c², 1 mark for factoring a² and concluding proof.",
    source: "CBSE Board 2023 Standard (Set 30/1/3)"
  },
  {
    id: "vq_4_sa_5",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "[CBSE 2024 Standard] Solve for x:\n$$\\frac{1}{(x - 1)(x - 2)} + \\frac{1}{(x - 2)(x - 3)} = \\frac{2}{3}, \\quad \\text{where } x \\neq 1, 2, 3$$",
    answer: "x = 0 \\quad \\text{or} \\quad x = 4",
    steps: [
      "Step 1: Notice the common factor (x - 2) in the denominators. Take the LCM of the denominators: LCM = (x - 1)(x - 2)(x - 3).",
      "Step 2: Combine the fractions on the LHS:\n$$\\frac{(x - 3) + (x - 1)}{(x - 1)(x - 2)(x - 3)} = \\frac{2}{3}$$",
      "Step 3: Simplify the numerator: $(x - 3) + (x - 1) = 2x - 4 = 2(x - 2)$.",
      "Step 4: Substitute back into the expression:\n$$\\frac{2(x - 2)}{(x - 1)(x - 2)(x - 3)} = \\frac{2}{3}$$",
      "Step 5: Since x \\neq 2, cancel the non-zero common factor (x - 2) from numerator and denominator:\n$$\\frac{2}{(x - 1)(x - 3)} = \\frac{2}{3}$$",
      "Step 6: Divide both sides by 2:\n$$\\frac{1}{(x - 1)(x - 3)} = \\frac{1}{3} \\implies (x - 1)(x - 3) = 3$$",
      "Step 7: Expand and solve the quadratic:\n$$x^2 - 4x + 3 = 3 \\implies x^2 - 4x = 0 \\implies x(x - 4) = 0$$",
      "Step 8: The roots are x = 0 or x = 4. Both satisfy the domain restriction x \\neq 1, 2, 3."
    ],
    explanation: "Reason: Factoring 2(x - 2) in the numerator allows immediate cancellation with the (x - 2) in the denominator. This reduces a cubic-order rational equation to a trivial quadratic x(x - 4) = 0.",
    formula: "\\frac{2(x - 2)}{(x - 1)(x - 2)(x - 3)} = \\frac{2}{(x - 1)(x - 3)}",
    examinerNote: "CBSE 2024 Exam Setter Masterpiece: Students who blindly cross-multiply without noticing the common factor end up with a 4th-degree polynomial and run out of time!",
    source: "CBSE Board 2024 Standard (Set 30/4/1)"
  },
  {
    id: "vq_4_sa_6",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "[CBSE 2020 Standard] The diagonal of a rectangular field is 60 meters more than the shorter side. If the longer side is 30 meters more than the shorter side, find the sides of the field.",
    answer: "Shorter side = 90 m, \\quad \\text{Longer side} = 120 m \\quad (\\text{Diagonal} = 150 m)",
    steps: [
      "Step 1: Let the length of the shorter side (breadth) be x meters (x > 0).\nThen the longer side (length) = (x + 30) meters.\nThe diagonal = (x + 60) meters.",
      "Step 2: By Pythagoras theorem on the right triangle formed by length, breadth, and diagonal:\n$$(\\text{Diagonal})^2 = (\\text{Shorter side})^2 + (\\text{Longer side})^2$$\n$$(x + 60)^2 = x^2 + (x + 30)^2$$",
      "Step 3: Expand all squared terms:\n$$x^2 + 120x + 3600 = x^2 + (x^2 + 60x + 900)$$\n$$x^2 + 120x + 3600 = 2x^2 + 60x + 900$$",
      "Step 4: Transpose all terms to the RHS:\n$$2x^2 - x^2 + 60x - 120x + 900 - 3600 = 0 \\implies x^2 - 60x - 2700 = 0$$",
      "Step 5: Factorise (product = -2700, sum = -60 \\implies -90, +30):\n$$x^2 - 90x + 30x - 2700 = 0$$\n$$x(x - 90) + 30(x - 90) = 0 \\implies (x - 90)(x + 30) = 0$$",
      "Step 6: Roots are x = 90 or x = -30. Since physical dimensions cannot be negative, we reject x = -30.\nTherefore, x = 90 meters.",
      "Step 7: Calculate the sides: Shorter side = 90 m; Longer side = x + 30 = 90 + 30 = 120 m.",
      "Step 8: Verification: 90² + 120² = 8100 + 14400 = 22500 = 150² = (90 + 60)². Perfectly verified!"
    ],
    explanation: "Reason: The geometric sides of a rectangle and its diagonal form a right triangle governed by Pythagoras theorem. Formulating the relationship in terms of the single variable x yields x² - 60x - 2700 = 0, whose positive root x = 90 provides the physical dimension.",
    formula: "(\\text{Diagonal})^2 = (\\text{Length})^2 + (\\text{Breadth})^2",
    examinerNote: "You must explicitly state: 'Since length cannot be negative, x = -30 is rejected'. Stating both sides (90 m and 120 m) with units is required.",
    source: "CBSE Board 2020 Standard & NCERT Ex 4.3"
  },
  {
    id: "vq_4_sa_7",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "[CBSE 2018, 2023 Standard] A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the original speed of the train.",
    answer: "Original speed of the train = 40 km/h",
    steps: [
      "Step 1: Let the original uniform speed of the train be x km/h (x > 0).\nIncreased speed = (x + 5) km/h.\nTotal distance = 360 km.",
      "Step 2: Express time taken in both scenarios (Time = Distance / Speed):\nTime at original speed: $T_1 = \\frac{360}{x} \\text{ hours}$\nTime at increased speed: $T_2 = \\frac{360}{x + 5} \\text{ hours}$",
      "Step 3: The journey with higher speed takes 1 hour less ($T_1 - T_2 = 1$):\n$$\\frac{360}{x} - \\frac{360}{x + 5} = 1$$",
      "Step 4: Factor out 360 and combine fractions:\n$$360 \\left[ \\frac{(x + 5) - x}{x(x + 5)} \\right] = 1 \\implies 360 \\left[ \\frac{5}{x^2 + 5x} \\right] = 1$$\n$$\\frac{1800}{x^2 + 5x} = 1 \\implies x^2 + 5x - 1800 = 0$$",
      "Step 5: Factorise x² + 5x - 1800 = 0 (product = -1800, sum = 5 \\implies +45, -40):\n$$x^2 + 45x - 40x - 1800 = 0$$\n$$x(x + 45) - 40(x + 45) = 0 \\implies (x + 45)(x - 40) = 0$$",
      "Step 6: x = 40 or x = -45. Since speed cannot be negative, we reject x = -45.\nTherefore, original speed of the train = 40 km/h.",
      "Step 7: Verification: $T_1 = 360/40 = 9$ hours. $T_2 = 360/45 = 8$ hours. Time saved = 9 - 8 = 1 hour. Verified!"
    ],
    explanation: "Reason: The time difference equation $T_\\text{slow} - T_\\text{fast} = \\Delta t$ models the relationship. Setting $360/x - 360/(x + 5) = 1$ yields $x^2 + 5x - 1800 = 0$, whose unique positive root x = 40 gives the train speed.",
    formula: "\\frac{d}{x} - \\frac{d}{x + \\Delta v} = \\Delta t",
    examinerNote: "Common Error: Writing 360/(x + 5) - 360/x = 1 leads to negative values. Remember: slower speed takes MORE time, so 360/x is the larger fraction.",
    source: "CBSE Board 2023 Standard & 2018 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // -----------------------------------------------------------------------
  {
    id: "vq_4_la_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 5,
    type: "LA",
    question: "[CBSE 2013, 2017, 2022] An express train takes 1 hour less than a passenger train to travel 132 km between Mysore and Bangalore. If the average speed of the express train is 11 km/h more than that of the passenger train, find the average speeds of both trains.",
    answer: "Passenger train speed = 33 km/h; \\quad \\text{Express train speed} = 44 km/h",
    steps: [
      "Step 1: Let the average speed of the passenger train be x km/h (x > 0).\nThen the average speed of the express train = (x + 11) km/h.\nTotal distance between Mysore and Bangalore = 132 km.",
      "Step 2: Express time taken by each train (Time = Distance / Speed):\nTime taken by passenger train: $T_p = \\frac{132}{x} \\text{ hours}$\nTime taken by express train: $T_e = \\frac{132}{x + 11} \\text{ hours}$",
      "Step 3: Set up the time difference equation (the express train takes 1 hour less: $T_p - T_e = 1$):\n$$\\frac{132}{x} - \\frac{132}{x + 11} = 1$$",
      "Step 4: Factor out 132 from the numerator:\n$$132 \\left[ \\frac{1}{x} - \\frac{1}{x + 11} \\right] = 1$$\n$$132 \\left[ \\frac{(x + 11) - x}{x(x + 11)} \\right] = 1 \\implies 132 \\times \\frac{11}{x^2 + 11x} = 1$$",
      "Step 5: Multiply 132 × 11 = 1452 and cross-multiply:\n$$\\frac{1452}{x^2 + 11x} = 1 \\implies x^2 + 11x - 1452 = 0$$",
      "Step 6: Factorise x² + 11x - 1452 = 0 (1452 = 44 × 33, and 44 - 33 = 11):\n$$x^2 + 44x - 33x - 1452 = 0$$\n$$x(x + 44) - 33(x + 44) = 0 \\implies (x + 44)(x - 33) = 0$$",
      "Step 7: Roots are x = 33 or x = -44. Since speed cannot be negative, we reject x = -44.\nTherefore, speed of the passenger train = 33 km/h.",
      "Step 8: Speed of the express train = x + 11 = 33 + 11 = 44 km/h.",
      "Step 9: Verification: $T_p = 132/33 = 4$ hours; $T_e = 132/44 = 3$ hours; Time difference = 4 - 3 = 1 hour. Exactly matches given problem!"
    ],
    explanation: "Reason: The foundational principle is $T_\\text{slow} - T_\\text{fast} = \\Delta t$. Setting $132/x - 132/(x + 11) = 1$ yields $x^2 + 11x - 1452 = 0$. Solving via middle term splitting (44 × 33 = 1452) gives the unique positive speed 33 km/h.",
    formula: "\\frac{d}{x} - \\frac{d}{x + 11} = 1 \\implies x^2 + 11x - 1452 = 0",
    examinerNote: "CBSE Marking Scheme: 1 mark for speed variable definitions, 1.5 marks for formulating the equation 132/x - 132/(x + 11) = 1, 1.5 marks for solving x² + 11x - 1452 = 0, 1 mark for stating both train speeds with units.",
    source: "CBSE Board 2022 Standard & NCERT Ex 4.3"
  },
  {
    id: "vq_4_la_2",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 5,
    type: "LA",
    question: "[CBSE 2010, 2016, 2020, 2024] Two water taps together can fill a tank in 9(3/8) hours (i.e. 75/8 hours). The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.",
    answer: "Smaller tap = 25 hours; \\quad \\text{Larger tap} = 15 hours",
    steps: [
      "Step 1: Let the smaller diameter tap fill the tank alone in x hours (where x > 10).\nThen the larger diameter tap fills the tank alone in (x - 10) hours.",
      "Step 2: Express the hourly work rate of each tap (Portion filled in 1 hour):\nPart filled by smaller tap in 1 hour = $\\frac{1}{x}$\nPart filled by larger tap in 1 hour = $\\frac{1}{x - 10}$",
      "Step 3: Together they fill the tank in 75/8 hours, so in 1 hour they jointly fill $\\frac{1}{75/8} = \\frac{8}{75}$ of the tank:\n$$\\frac{1}{x} + \\frac{1}{x - 10} = \\frac{8}{75}$$",
      "Step 4: Combine the rational expressions on the LHS:\n$$\\frac{(x - 10) + x}{x(x - 10)} = \\frac{8}{75} \\implies \\frac{2x - 10}{x^2 - 10x} = \\frac{8}{75}$$",
      "Step 5: Factor out 2 from the numerator and divide both sides by 2:\n$$\\frac{2(x - 5)}{x^2 - 10x} = \\frac{8}{75} \\implies \\frac{x - 5}{x^2 - 10x} = \\frac{4}{75}$$",
      "Step 6: Cross-multiply:\n$$75(x - 5) = 4(x^2 - 10x)$$\n$$75x - 375 = 4x^2 - 40x$$\n$$4x^2 - 115x + 375 = 0$$",
      "Step 7: Factorise 4x² - 115x + 375 = 0 (ac = 4 × 375 = 1500, sum = -115 \\implies -100, -15):\n$$4x^2 - 100x - 15x + 375 = 0$$\n$$4x(x - 25) - 15(x - 25) = 0 \\implies (x - 25)(4x - 15) = 0$$",
      "Step 8: Roots are x = 25 or x = 15/4 = 3.75 hours.\nIf x = 3.75 hours, time for larger tap = x - 10 = 3.75 - 10 = -6.25 hours (IMPOSSIBLE, as time cannot be negative).\nTherefore, x = 3.75 is rejected, leaving x = 25 hours.",
      "Step 9: Calculate individual times:\nSmaller tap alone = 25 hours\nLarger tap alone = x - 10 = 25 - 10 = 15 hours.",
      "Step 10: Verification: 1/25 + 1/15 = 3/75 + 5/75 = 8/75 per hour. Inverted time = 75/8 = 9(3/8) hours. Verified!"
    ],
    explanation: "Reason: Work-rate problem based on hourly reciprocal rates: $\\text{Rate}_1 + \\text{Rate}_2 = \\text{Combined Rate}$. Setting $1/x + 1/(x - 10) = 8/75$ leads to $4x^2 - 115x + 375 = 0$. Crucially, x = 3.75 must be rejected because physical time for the larger tap (x - 10) would become negative.",
    formula: "\\frac{1}{x} + \\frac{1}{x - 10} = \\frac{8}{75}",
    examinerNote: "CBSE Marking Scheme: Mandatory 1 full mark deduction if the rejection of x = 15/4 (3.75 hours) is not shown with reason (x - 10 would be negative).",
    source: "CBSE Board 2024 Standard (Set 30/1/2) & NCERT Ex 4.3"
  },
  {
    id: "vq_4_la_3",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 5,
    type: "LA",
    question: "[CBSE 2019, 2024 Standard] A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.",
    answer: "Speed of the stream = 6 km/h",
    steps: [
      "Step 1: Let the speed of the stream be y km/h (where 0 < y < 18, since boat must make headway upstream).\nSpeed of boat in still water = 18 km/h.\nEffective speed upstream (against current) = (18 - y) km/h.\nEffective speed downstream (with current) = (18 + y) km/h.\nOne-way distance = 24 km.",
      "Step 2: Express time taken for each leg (Time = Distance / Speed):\nTime taken upstream: $T_\\text{up} = \\frac{24}{18 - y} \\text{ hours}$\nTime taken downstream: $T_\\text{down} = \\frac{24}{18 + y} \\text{ hours}$",
      "Step 3: Upstream journey takes 1 hour more than downstream journey ($T_\\text{up} - T_\\text{down} = 1$):\n$$\\frac{24}{18 - y} - \\frac{24}{18 + y} = 1$$",
      "Step 4: Factor out 24 and combine fractions:\n$$24 \\left[ \\frac{(18 + y) - (18 - y)}{(18 - y)(18 + y)} \\right] = 1$$\n$$24 \\left[ \\frac{2y}{324 - y^2} \\right] = 1 \\implies \\frac{48y}{324 - y^2} = 1$$",
      "Step 5: Cross-multiply and rearrange into standard form:\n$$48y = 324 - y^2 \\implies y^2 + 48y - 324 = 0$$",
      "Step 6: Factorise y² + 48y - 324 = 0 (product = -324, sum = 48 \\implies +54, -6):\n$$y^2 + 54y - 6y - 324 = 0$$\n$$y(y + 54) - 6(y + 54) = 0 \\implies (y + 54)(y - 6) = 0$$",
      "Step 7: Roots are y = 6 or y = -54. Since stream speed cannot be negative, reject y = -54.\nTherefore, speed of the stream = 6 km/h.",
      "Step 8: Verification: Upstream speed = 18 - 6 = 12 km/h \\implies $T_\\text{up} = 24/12 = 2$ hours. Downstream speed = 18 + 6 = 24 km/h \\implies $T_\\text{down} = 24/24 = 1$ hour. Difference = 2 - 1 = 1 hour. Correct!"
    ],
    explanation: "Reason: The upstream speed is always retarded by the stream (18 - y), while downstream speed is assisted (18 + y). Setting $24/(18 - y) - 24/(18 + y) = 1$ gives $y^2 + 48y - 324 = 0$, whose positive root y = 6 km/h provides the stream speed.",
    formula: "\\frac{d}{v_b - v_s} - \\frac{d}{v_b + v_s} = \\Delta t",
    examinerNote: "Common Pitfall: Writing upstream speed as (y - 18) instead of (18 - y). Since the boat moves against the stream, still water speed must exceed stream speed (18 > y).",
    source: "CBSE Board 2024 Standard & 2019 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION E: 4-MARK COMPETENCY CASE STUDY (CBSE 2024-2026 PATTERN)
  // -----------------------------------------------------------------------
  {
    id: "vq_4_case_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Competency Case Study] Rainwater Harvesting Reservoir: An eco-friendly school is constructing a rectangular underground rainwater harvesting reservoir. The civil engineer specifies that the length of the reservoir base must be 4 meters more than twice its breadth. The total area of the reservoir base is planned to be 96 square meters, and its uniform depth is 2 meters.\n\nBased on this information, answer the following questions:\n(i) If the breadth of the reservoir base is taken as x meters, formulate a quadratic equation representing the given situation. (1 Mark)\n(ii) Find the length and breadth of the reservoir base. (2 Marks)\n(iii) Find the total water-holding capacity of the reservoir in liters. (Given: 1 m³ = 1000 liters) (1 Mark)",
    answer: "(i) x² + 2x - 48 = 0; \\quad (ii) Breadth = 6 m, Length = 16 m; \\quad (iii) Capacity = 192,000 liters",
    steps: [
      "Part (i) (1 Mark):\nLet the breadth of the rectangular base be x meters (x > 0).\nAccording to the question, length = 4 meters more than twice breadth = (2x + 4) meters.\nArea of base = Length × Breadth = x(2x + 4) = 96 m².\n$$2x^2 + 4x = 96 \\implies 2x^2 + 4x - 96 = 0$$\nDividing the entire equation by 2 yields standard form:\n$$x^2 + 2x - 48 = 0$$",
      "Part (ii) (2 Marks):\nSolve the quadratic equation x² + 2x - 48 = 0 by factorisation:\nFind two numbers with product = -48 and sum = 2: +8 and -6.\n$$x^2 + 8x - 6x - 48 = 0$$\n$$x(x + 8) - 6(x + 8) = 0 \\implies (x + 8)(x - 6) = 0$$\n$$x = 6 \\quad \\text{or} \\quad x = -8$$\nSince physical length and breadth cannot be negative, x = -8 is rejected.\nBreadth x = 6 meters.\nLength = 2x + 4 = 2(6) + 4 = 16 meters.",
      "Part (iii) (1 Mark):\nVolume of the reservoir = Length × Breadth × Depth\n$$\\text{Volume} = 16 \\text{ m} \\times 6 \\text{ m} \\times 2 \\text{ m} = 192 \\text{ m}^3$$\nCapacity in liters = 192 × 1000 = 192,000 liters."
    ],
    explanation: "Reason: The problem translates verbal geometric constraints into the quadratic equation $x(2x + 4) = 96 \\implies x^2 + 2x - 48 = 0$. Physical admissibility rejects the negative root x = -8, giving dimensions 16 m × 6 m. Volumetric calculation then provides storage capacity.",
    formula: "\\text{Area} = L \\times B; \\quad \\text{Capacity} = L \\times B \\times H \\times 1000 \\text{ liters}",
    examinerNote: "CBSE Marking Scheme: Part (i) 1 mark for x² + 2x - 48 = 0, Part (ii) 2 marks for factorising and stating Breadth = 6 m, Length = 16 m with rejection of -8, Part (iii) 1 mark for 192,000 liters.",
    source: "CBSE Official CFPQ 2024 & Sample Paper 2024-25"
  },
  {
    id: "vq_4_case_2",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Sample Paper Case Study] Commercial Flight Delay: An aircraft was delayed by 30 minutes at takeoff due to inclement weather. In order to reach its destination 1500 km away on schedule, the pilot had to increase the aircraft's cruising speed by 250 km/h from its usual speed.\n\n(i) If usual speed is x km/h, write the expression for time taken at usual speed and increased speed. (1 Mark)\n(ii) Formulate the quadratic equation governing this situation. (1 Mark)\n(iii) (a) Find the usual cruising speed of the aircraft and the original scheduled flight duration. (2 Marks)\nOR\n(iii) (b) If the aircraft instead had to decrease its speed by 100 km/h on a return journey of 1500 km, find the additional time taken compared to usual speed. (2 Marks)",
    answer: "(i) 1500/x and 1500/(x+250); \\quad (ii) x² + 250x - 750000 = 0; \\quad (iii)(a) Speed = 750 km/h, Scheduled time = 2 hours; \\quad (iii)(b) 18.5 minutes delay",
    steps: [
      "Part (i) (1 Mark):\nTime at usual speed x km/h: $T_1 = \\frac{1500}{x} \\text{ hours}$.\nTime at increased speed (x + 250) km/h: $T_2 = \\frac{1500}{x + 250} \\text{ hours}$.",
      "Part (ii) (1 Mark):\nDelay = 30 minutes = 30/60 = 1/2 hour.\nT_1 - T_2 = 1/2:\n$$\\frac{1500}{x} - \\frac{1500}{x + 250} = \\frac{1}{2}$$\n$$1500 \\left[ \\frac{250}{x(x + 250)} \\right] = \\frac{1}{2} \\implies \\frac{375000}{x^2 + 250x} = \\frac{1}{2}$$\n$$x^2 + 250x = 750000 \\implies x^2 + 250x - 750000 = 0$$",
      "Part (iii)(a) (2 Marks):\nSolve x² + 250x - 750000 = 0 by factorisation:\nFind numbers with product = -750000 and sum = 250: +1000 and -750.\n$$(x + 1000)(x - 750) = 0 \\implies x = 750 \\quad \\text{or} \\quad x = -1000$$\nSince speed cannot be negative, x = 750 km/h.\nUsual cruising speed = 750 km/h.\nOriginal scheduled flight duration = 1500 / 750 = 2 hours.",
      "Part (iii)(b) Alternative (2 Marks):\nReduced speed = 750 - 100 = 650 km/h.\nTime at reduced speed = 1500 / 650 = 30 / 13 hours \\approx 2.3077 hours = 2 hours 18.46 minutes.\nAdditional time taken = 2 hours 18.5 min - 2 hours = 18.5 minutes."
    ],
    explanation: "Reason: Crucial modeling step: 30 minutes must be converted to hours (1/2 hr) so units remain consistent with km/h. Solving $1500/x - 1500/(x + 250) = 1/2$ yields x = 750 km/h.",
    formula: "\\frac{d}{x} - \\frac{d}{x + 250} = \\frac{1}{2}",
    examinerNote: "Always ensure unit consistency: 30 minutes = 1/2 hour. Using '30' directly produces an erroneous equation.",
    source: "CBSE Official Sample Paper 2024"
  },
  {
    id: "vq_4_case_3",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2025 Competency Case Study] Solar Rooftop Installation: A green building design team plans a solar panel array on a rectangular roof of dimensions 20 meters by 15 meters. A walkway of uniform width x meters is left all around the boundary of the roof for maintenance, and the remaining inner central area of 176 square meters is covered with solar panels.\n\n(i) Express the length and breadth of the solar panel zone in terms of walkway width x. (1 Mark)\n(ii) Formulate the quadratic equation for the solar panel area. (1 Mark)\n(iii) (a) Find the width of the walkway x. (2 Marks)\nOR\n(iii) (b) If each square meter of solar panel produces 1.5 kWh of electricity daily, find the daily electricity generation of the installation. (2 Marks)",
    answer: "(i) Length = 20 - 2x, Breadth = 15 - 2x; \\quad (ii) 2x² - 35x + 62 = 0; \\quad (iii)(a) x = 2 meters; \\quad (iii)(b) 264 kWh daily",
    steps: [
      "Part (i) (1 Mark):\nThe walkway of width x borders all four sides.\nInner length = 20 - x - x = (20 - 2x) meters.\nInner breadth = 15 - x - x = (15 - 2x) meters (where x < 7.5 meters).",
      "Part (ii) (1 Mark):\nInner Area = Length × Breadth = 176 m²:\n$$(20 - 2x)(15 - 2x) = 176$$\n$$300 - 40x - 30x + 4x^2 = 176$$\n$$4x^2 - 70x + 124 = 0$$\nDivide entire equation by 2:\n$$2x^2 - 35x + 62 = 0$$",
      "Part (iii)(a) (2 Marks):\nSolve 2x² - 35x + 62 = 0 by factorisation (ac = 2 × 62 = 124, sum = -35 \\implies -31, -4):\n$$2x^2 - 4x - 31x + 62 = 0$$\n$$2x(x - 2) - 31(x - 2) = 0 \\implies (x - 2)(2x - 31) = 0$$\n$$x = 2 \\quad \\text{or} \\quad x = \\frac{31}{2} = 15.5$$\nPhysical constraint check: Since total roof breadth is 15 meters, the walkway on both sides (2x) must be less than 15 meters (x < 7.5 m). Thus x = 15.5 m is physically impossible.\nTherefore, width of walkway x = 2 meters.",
      "Part (iii)(b) Alternative (2 Marks):\nTotal solar panel area = 176 m².\nDaily energy generation = 176 m² × 1.5 kWh/m² = 264 kWh."
    ],
    explanation: "Reason: A uniform border of width x reduces both dimensions by 2x. The inner area $(20 - 2x)(15 - 2x) = 176$ reduces to $2x^2 - 35x + 62 = 0$. The root x = 15.5 is rejected because the walkway width cannot exceed half the total roof breadth (x < 7.5 m).",
    formula: "\\text{Inner Area} = (L - 2x)(B - 2x) = 176",
    examinerNote: "CBSE Marking Scheme: You must explain why x = 15.5 is rejected (it exceeds the 15 m total breadth of the roof). Walkway width x = 2 meters.",
    source: "CBSE Competency Assessment Framework 2025"
  }
];
