import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 5: ARITHMETIC PROGRESSIONS
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// =========================================================================

export const CH5_QUESTIONS: VaultQuestion[] = [
  // -----------------------------------------------------------------------
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // -----------------------------------------------------------------------
  {
    id: "vq_5_mcq_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020, 2023 Standard] If the common difference of an AP is 5, then what is the value of (a_18 - a_13)?",
    options: ["5", "20", "25", "30"],
    correctOption: 2,
    answer: "25",
    steps: [
      "Step 1: Formula for the n-th term is a_n = a + (n - 1)d.",
      "Step 2: a_18 = a + 17d, and a_13 = a + 12d.",
      "Step 3: a_18 - a_13 = (a + 17d) - (a + 12d) = 17d - 12d = 5d.",
      "Step 4: Given d = 5: 5d = 5 * 5 = 25."
    ],
    explanation: "For any two terms in an AP, the difference a_m - a_n = (m - n)d, independent of the first term a. Here (18 - 13)*5 = 5 * 5 = 25.",
    formula: "a_m - a_n = (m - n)d",
    examinerNote: "Do not waste time trying to find the first term 'a'; it cancels out completely.",
    source: "CBSE Board 2023 Standard (Set 30/1/1)"
  },
  {
    id: "vq_5_mcq_2",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2014, 2021, 2024] If (k + 2), (4k - 6), and (3k - 2) are three consecutive terms of an AP, then the value of k is:",
    options: ["1", "2", "3", "-3"],
    correctOption: 2,
    answer: "3",
    steps: [
      "Step 1: If a, b, c are in AP, then 2b = a + c (common difference is constant).",
      "Step 2: Here a = k + 2, b = 4k - 6, c = 3k - 2.",
      "Step 3: 2(4k - 6) = (k + 2) + (3k - 2).",
      "Step 4: 8k - 12 = 4k => 8k - 4k = 12 => 4k = 12 => k = 3."
    ],
    explanation: "Three numbers a, b, c form an AP if and only if the middle term is the arithmetic mean of the ends: 2b = a + c.",
    formula: "Three terms in AP <=> 2b = a + c",
    examinerNote: "Verify by substituting k = 3: terms become 5, 6, 7 (common difference d = 1).",
    source: "CBSE Board 2024 Standard (Set 30/2/1)"
  },
  {
    id: "vq_5_mcq_3",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2019 All India] Which term of the AP: 21, 18, 15, ... is -81?",
    options: ["28th term", "32nd term", "35th term", "36th term"],
    correctOption: 2,
    answer: "35th term",
    steps: [
      "Step 1: Identify parameters: a = 21, d = 18 - 21 = -3, a_n = -81.",
      "Step 2: Use n-th term formula: a_n = a + (n - 1)d.",
      "Step 3: -81 = 21 + (n - 1)(-3).",
      "Step 4: -81 - 21 = -3(n - 1) => -102 = -3(n - 1).",
      "Step 5: n - 1 = -102 / -3 = 34 => n = 34 + 1 = 35."
    ],
    explanation: "Because d = -3 is negative, terms decrease. Setting a_n = -81 gives n = 35.",
    formula: "n = (a_n - a)/d + 1",
    examinerNote: "Common error: forgetting that d is negative (-3, not +3).",
    source: "CBSE Board 2019 All India"
  },
  {
    id: "vq_5_mcq_4",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2018, 2022] The 11th term of the AP: -3, -1/2, 2, ... is:",
    options: ["28", "22", "-38", "-46(1/2)"],
    correctOption: 1,
    answer: "22",
    steps: [
      "Step 1: First term a = -3.",
      "Step 2: Common difference d = (-1/2) - (-3) = -1/2 + 3 = 5/2 = 2.5.",
      "Step 3: 11th term: a_11 = a + 10d.",
      "Step 4: a_11 = -3 + 10 * (5/2) = -3 + 5 * 5 = -3 + 25 = 22."
    ],
    explanation: "Subtracting fractions accurately for d: -1/2 - (-3) = 5/2. Then a_11 = -3 + 10(5/2) = 22.",
    formula: "a_11 = a + 10d",
    examinerNote: "NCERT Exemplar and Board favourite MCQ.",
    source: "CBSE Board 2018 (Series AJM)"
  },
  {
    id: "vq_5_mcq_5",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020, 2024] If the sum of the first n terms of an AP is given by S_n = 3n^2 + 5n, then its common difference is:",
    options: ["3", "5", "6", "8"],
    correctOption: 2,
    answer: "6",
    steps: [
      "Step 1: Method 1 (Topper Shortcut): In S_n = An^2 + Bn, the common difference d is ALWAYS equal to 2*A. Here A = 3, so d = 2 * 3 = 6.",
      "Step 2: Method 2 (Formal Verification):\nS_1 = 3(1)^2 + 5(1) = 8 => a_1 = 8.\nS_2 = 3(2)^2 + 5(2) = 3(4) + 10 = 22.\na_2 = S_2 - S_1 = 22 - 8 = 14.\nCommon difference d = a_2 - a_1 = 14 - 8 = 6."
    ],
    explanation: "In any AP, S_n is a quadratic in n without a constant term: S_n = (d/2)n^2 + (a - d/2)n. The coefficient of n^2 is d/2, so d = 2 * (coefficient of n^2) = 2 * 3 = 6.",
    formula: "S_n = An^2 + Bn => Common Difference d = 2*A",
    examinerNote: "Use the 2*A shortcut in MCQs to find the common difference in 2 seconds.",
    source: "CBSE Board 2024 Standard (Set 30/1/1)"
  },
  {
    id: "vq_5_mcq_6",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2023, 2024] Assertion (A): The sequence -5, -5/2, 0, 5/2, ... is an AP with common difference 5/2.\nReason (R): The terms of an arithmetic progression can have a positive, negative, or zero common difference.",
    options: [
      "Both Assertion (A) and Reason (R) are true and (R) is the correct explanation of (A)",
      "Both Assertion (A) and Reason (R) are true but (R) is not the correct explanation of (A)",
      "Assertion (A) is true but Reason (R) is false",
      "Assertion (A) is false but Reason (R) is true"
    ],
    correctOption: 1,
    answer: "Both Assertion (A) and Reason (R) are true but (R) is not the correct explanation of (A)",
    steps: [
      "Step 1: Check Assertion (A): -5/2 - (-5) = -5/2 + 5 = 5/2. 0 - (-5/2) = 5/2. The difference is constant (5/2). So (A) is true.",
      "Step 2: Check Reason (R): By definition, the common difference d of an AP can be positive, negative, or zero. So (R) is true.",
      "Step 3: While both statements are true, (R) is a general definition and not the specific arithmetic verification that (-5/2) - (-5) = 5/2.",
      "Step 4: Therefore, both (A) and (R) are true, but (R) is not the correct explanation of (A)."
    ],
    explanation: "Both statements are mathematically correct facts, but the reason does not explain the calculation showing d = 5/2.",
    formula: "d = a_{k+1} - a_k (constant)",
    examinerNote: "CBSE official marking scheme standard for Assertion-Reason questions.",
    source: "CBSE Board 2024 (Set 30/1/2)"
  },
  {
    id: "vq_5_mcq_7",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "[CBSE 2020, 2023 Standard] If the n-th term of an AP is given by a_n = 7 - 4n, then its common difference is:",
    options: ["4", "-4", "3", "7"],
    correctOption: 1,
    answer: "-4",
    steps: [
      "Step 1: Method 1 (Direct Shortcut): For any linear expression a_n = An + B, the common difference is always the coefficient of n, which is -4.",
      "Step 2: Method 2 (Formal Calculation):\na_1 = 7 - 4(1) = 3.\na_2 = 7 - 4(2) = 7 - 8 = -1.\na_3 = 7 - 4(3) = 7 - 12 = -5.",
      "Step 3: Common difference d = a_2 - a_1 = -1 - 3 = -4."
    ],
    explanation: "In any AP, the n-th term is linear in n. The coefficient of n is always the common difference: d = -4.",
    formula: "a_n = An + B => d = A",
    examinerNote: "Do not forget the negative sign; d = -4, not 4.",
    source: "CBSE Board 2023 Standard (Set 30/2/1)"
  },

  // -----------------------------------------------------------------------
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // -----------------------------------------------------------------------
  {
    id: "vq_5_vsa_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2014, 2018, 2023] Find the 20th term from the end of the AP: 3, 8, 13, ..., 253.",
    answer: "158",
    steps: [
      "Step 1: Formula for the n-th term from the END of an AP is: a_n(end) = l - (n - 1)d, where l is the last term and d is the common difference.",
      "Step 2: Here l = 253, d = 8 - 3 = 5, and n = 20.",
      "Step 3: a_20(end) = 253 - (20 - 1) * 5.",
      "Step 4: a_20(end) = 253 - 19 * 5 = 253 - 95 = 158.",
      "Step 5: Alternative Method: Reverse the AP: 253, 248, 243, ..., 3. Here a' = 253, d' = -5. a_20 = 253 + 19(-5) = 253 - 95 = 158."
    ],
    explanation: "Reversing the sequence turns the end term into the first term with opposite common difference, or the direct formula l - (n-1)d can be applied.",
    formula: "n-th term from end = l - (n - 1)d",
    examinerNote: "Do not write + (n-1)d from the end. The minus sign is essential: l - (n - 1)d.",
    source: "CBSE Board 2023 Standard (Set 30/1/2) & NCERT Ex 5.2"
  },
  {
    id: "vq_5_vsa_2",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2012, 2019] How many two-digit numbers are divisible by 3?",
    answer: "30 two-digit numbers",
    steps: [
      "Step 1: The two-digit numbers divisible by 3 start with 12 and end with 99.",
      "Step 2: The sequence is: 12, 15, 18, ..., 99.",
      "Step 3: This forms an AP where first term a = 12, common difference d = 3, and last term a_n = 99.",
      "Step 4: Use a_n = a + (n - 1)d:\n99 = 12 + (n - 1)(3)\n99 - 12 = 3(n - 1) => 87 = 3(n - 1).",
      "Step 5: n - 1 = 87 / 3 = 29 => n = 29 + 1 = 30.",
      "Step 6: There are 30 two-digit numbers divisible by 3."
    ],
    explanation: "Forming the AP of two-digit multiples of 3 (12 to 99) and solving for n confirms 30 terms.",
    formula: "a_n = a + (n - 1)d",
    examinerNote: "Smallest two-digit number divisible by 3 is 12 (not 3, 6, 9 which are single digit).",
    source: "CBSE Board 2019 (Set 30/2/1)"
  },
  {
    id: "vq_5_vsa_3",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2017, 2022] Which term of the AP: 3, 15, 27, 39, ... will be 132 more than its 54th term?",
    answer: "65th term",
    steps: [
      "Step 1: Given AP: a = 3, d = 15 - 3 = 12.",
      "Step 2: Let the required term be a_n.\nCondition: a_n = a_54 + 132.",
      "Step 3: Using a_n - a_54 = (n - 54)d:\n(n - 54) * d = 132.",
      "Step 4: Substitute d = 12:\n(n - 54) * 12 = 132\nn - 54 = 132 / 12 = 11.",
      "Step 5: n = 54 + 11 = 65.",
      "Step 6: The 65th term of the AP is 132 more than its 54th term."
    ],
    explanation: "Notice that a_n - a_54 = (n - 54)d. Setting (n - 54)*12 = 132 gives n - 54 = 11 => n = 65 directly without computing a_54!",
    formula: "a_n - a_m = (n - m)d",
    examinerNote: "Avoid computing the large number a_54 = 3 + 53(12) = 639. Use the (n - 54)d shortcut.",
    source: "CBSE Board 2022 Standard & NCERT Ex 5.2"
  },
  {
    id: "vq_5_vsa_4",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2016, 2020, 2023 Standard] Check whether -150 is a term of the AP: 11, 8, 5, 2, ...",
    answer: "No, -150 is not a term of this AP",
    steps: [
      "Step 1: Given AP: 11, 8, 5, 2, ...\nFirst term a = 11, common difference d = 8 - 11 = -3.",
      "Step 2: Let -150 be the n-th term of the AP: a_n = -150.",
      "Step 3: Use formula a_n = a + (n - 1)d:\n-150 = 11 + (n - 1)(-3)\n-150 - 11 = -3(n - 1)\n-161 = -3(n - 1).",
      "Step 4: Solve for n:\nn - 1 = -161 / -3 = 161 / 3\nn = 161/3 + 1 = 164/3 = 54.67 (or 54 2/3).",
      "Step 5: The number of terms n MUST be a positive integer (natural number). Since 164/3 is a fraction, -150 cannot be a term of this AP."
    ],
    explanation: "For any number to belong to an AP, the index n must evaluate to a positive integer. Here n = 54 2/3, so -150 does not belong to the sequence.",
    formula: "n = (a_n - a)/d + 1 must be in N",
    examinerNote: "Explicitly state: 'Since n is not a natural number (positive integer), -150 is not a term.'",
    source: "CBSE Board 2023 Standard & NCERT Ex 5.2 Q6"
  },
  {
    id: "vq_5_vsa_5",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "[CBSE 2015, 2021, 2024 Standard] Find the middle term of the finite AP: 6, 13, 20, ..., 216.",
    answer: "111 (16th term)",
    steps: [
      "Step 1: In the given AP, first term a = 6, common difference d = 13 - 6 = 7, and last term a_n = 216.",
      "Step 2: Find total number of terms n:\n216 = 6 + (n - 1) * 7\n210 = 7(n - 1) => n - 1 = 30 => n = 31.",
      "Step 3: Since n = 31 is odd, there is exactly one middle term:\nMiddle term index = (n + 1) / 2 = (31 + 1) / 2 = 16th term.",
      "Step 4: Calculate the 16th term a_16:\na_16 = a + (16 - 1)d = 6 + 15 * 7 = 6 + 105 = 111.",
      "Step 5: Therefore, the middle term of the AP is 111."
    ],
    explanation: "When total terms n is odd, the middle term is ((n + 1)/2)-th term. Here n = 31, middle term is a_16 = 111.",
    formula: "Middle term index = (n + 1)/2 when n is odd",
    examinerNote: "Always show both steps: finding total number of terms n = 31, then finding a_16 = 111.",
    source: "CBSE Board 2024 Standard (Set 30/2/1) & 2015 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // -----------------------------------------------------------------------
  {
    id: "vq_5_sa_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "Proof",
    question: "[CBSE 2013, 2017, 2023] If 7 times the 7th term of an AP is equal to 11 times the 11th term, show that the 18th term of the AP is zero.",
    answer: "a_18 = 0 (Proved)",
    steps: [
      "Step 1: Let the first term of the AP be 'a' and common difference be 'd'.",
      "Step 2: 7th term: a_7 = a + 6d.\n11th term: a_11 = a + 10d.",
      "Step 3: According to the given condition:\n7 * a_7 = 11 * a_11\n7(a + 6d) = 11(a + 10d).",
      "Step 4: Expand both sides:\n7a + 42d = 11a + 110d.",
      "Step 5: Transpose terms to one side:\n11a - 7a + 110d - 42d = 0\n4a + 68d = 0.",
      "Step 6: Divide the entire equation by 4:\na + 17d = 0.",
      "Step 7: Recognize that the 18th term is a_18 = a + (18 - 1)d = a + 17d.",
      "Step 8: Since a + 17d = 0, we have a_18 = 0. Hence proved!"
    ],
    explanation: "Algebraic simplification of m*a_m = n*a_n always proves that a_{m+n} = 0. Here 7*a_7 = 11*a_11 leads directly to a + 17d = 0.",
    formula: "m*a_m = n*a_n => a_{m+n} = 0",
    examinerNote: "Do not attempt to solve for 'a' or 'd' individually; only the combined relationship a + 17d = 0 is needed.",
    source: "CBSE Board 2023 Standard (Set 30/1/3) & 2017 All India"
  },
  {
    id: "vq_5_sa_2",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "Proof",
    question: "[CBSE 2011, 2018, 2024] If the m-th term of an AP is 1/n and the n-th term is 1/m, prove that its (mn)-th term is 1.",
    answer: "a_{mn} = 1 (Proved)",
    steps: [
      "Step 1: Let 'a' be the first term and 'd' be the common difference.\nm-th term: a_m = a + (m - 1)d = 1 / n  --- (Equation 1).\nn-th term: a_n = a + (n - 1)d = 1 / m  --- (Equation 2).",
      "Step 2: Subtract Equation (2) from Equation (1):\n[a + (m - 1)d] - [a + (n - 1)d] = 1/n - 1/m\n(m - n)d = (m - n) / (mn).",
      "Step 3: Divide both sides by (m - n) [since m != n]:\nd = 1 / (mn).",
      "Step 4: Substitute d = 1/(mn) into Equation (1):\na + (m - 1)(1 / (mn)) = 1 / n\na + m/(mn) - 1/(mn) = 1 / n\na + 1/n - 1/(mn) = 1 / n => a = 1 / (mn).",
      "Step 5: Now calculate the (mn)-th term:\na_{mn} = a + (mn - 1)d.",
      "Step 6: Substitute values of a and d:\na_{mn} = 1/(mn) + (mn - 1)(1 / (mn))\na_{mn} = 1/(mn) + (mn)/(mn) - 1/(mn)\na_{mn} = 1.",
      "Step 7: Hence proved: a_{mn} = 1."
    ],
    explanation: "Classic CBSE proof: finding both a = 1/(mn) and d = 1/(mn) leads to exact cancellation in a_{mn} = a + (mn - 1)d = 1.",
    formula: "a = 1/(mn), d = 1/(mn) => a_{mn} = 1",
    examinerNote: "Explicitly mention that m != n so dividing by (m - n) is mathematically sound.",
    source: "CBSE Board 2024 (Set 30/3/1) & 2018 All India"
  },
  {
    id: "vq_5_sa_3",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "SA",
    question: "[CBSE 2015, 2021] Find the sum of all natural numbers between 100 and 1000 which are multiples of 5.",
    answer: "98450",
    steps: [
      "Step 1: The numbers 'between 100 and 1000' strictly EXCLUDE 100 and 1000.",
      "Step 2: The first multiple of 5 after 100 is 105; the last multiple of 5 before 1000 is 995.",
      "Step 3: The AP is: 105, 110, 115, ..., 995.\nHere a = 105, d = 5, l = a_n = 995.",
      "Step 4: Find the number of terms n:\n995 = 105 + (n - 1)(5)\n995 - 105 = 5(n - 1) => 890 = 5(n - 1)\nn - 1 = 890 / 5 = 178 => n = 179 terms.",
      "Step 5: Find the sum using S_n = (n / 2)(a + l):\nS_179 = (179 / 2) * (105 + 995)\nS_179 = (179 / 2) * 1100 = 179 * 550 = 98450.",
      "Step 6: The sum of all multiples of 5 between 100 and 1000 is 98450."
    ],
    explanation: "Language precision: 'between 100 and 1000' excludes boundaries (105 to 995). Using S_n = n/2(a + l) with n = 179 gives 98450.",
    formula: "S_n = (n/2)(a + l)",
    examinerNote: "FATAL TRAP: Including 100 or 1000 violates 'between' and leads to an incorrect answer (100 is excluded).",
    source: "CBSE Board 2021 Term-2 & 2015 Delhi"
  },
  {
    id: "vq_5_sa_4",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "Proof",
    question: "[CBSE 2016, 2020 Standard] The ratio of the sums of m and n terms of an AP is m^2 : n^2. Show that the ratio of their m-th and n-th terms is (2m - 1) : (2n - 1).",
    answer: "a_m / a_n = (2m - 1) / (2n - 1) (Proved)",
    steps: [
      "Step 1: Given: S_m / S_n = m^2 / n^2.",
      "Step 2: Use sum formula S_k = (k / 2)[2a + (k - 1)d]:\n[(m / 2)[2a + (m - 1)d]] / [(n / 2)[2a + (n - 1)d]] = m^2 / n^2.",
      "Step 3: Cancel (1/2) and one power of m and n:\n[2a + (m - 1)d] / [2a + (n - 1)d] = m / n.",
      "Step 4: Cross multiply:\nn[2a + (m - 1)d] = m[2a + (n - 1)d]\n2an + nmd - nd = 2am + mnd - md.",
      "Step 5: Notice nmd cancels from both sides:\n2an - nd = 2am - md => md - nd = 2am - 2an\nd(m - n) = 2a(m - n).",
      "Step 6: Since m != n, divide by (m - n): d = 2a.",
      "Step 7: Now find the ratio of m-th and n-th terms:\na_m / a_n = [a + (m - 1)d] / [a + (n - 1)d].",
      "Step 8: Substitute d = 2a:\na_m / a_n = [a + (m - 1)(2a)] / [a + (n - 1)(2a)]\na_m / a_n = [a + 2am - 2a] / [a + 2an - 2a] = [2am - a] / [2an - a] = a(2m - 1) / [a(2n - 1)].",
      "Step 9: Cancel 'a': a_m / a_n = (2m - 1) / (2n - 1). Hence proved!"
    ],
    explanation: "Cross-multiplying S_m/S_n = m^2/n^2 establishes d = 2a. Substituting d = 2a into the term ratio gives (2m - 1)/(2n - 1).",
    formula: "d = 2a => a_m / a_n = (2m - 1)/(2n - 1)",
    examinerNote: "Proving d = 2a carries 2 marks; substituting to find ratio carries the final 1 mark.",
    source: "CBSE Board 2020 Standard (Set 30/1/1)"
  },
  {
    id: "vq_5_sa_5",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "SA",
    question: "[CBSE 2009, 2014, 2024 Standard] The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP.",
    answer: "-13, -8, -3",
    steps: [
      "Step 1: Let the first term be 'a' and common difference be 'd'.\n4th term a_4 = a + 3d, 8th term a_8 = a + 7d.\n6th term a_6 = a + 5d, 10th term a_10 = a + 9d.",
      "Step 2: Given: a_4 + a_8 = 24:\n(a + 3d) + (a + 7d) = 24 => 2a + 10d = 24.\nDivide by 2: a + 5d = 12  --- (Equation 1).",
      "Step 3: Given: a_6 + a_10 = 44:\n(a + 5d) + (a + 9d) = 44 => 2a + 14d = 44.\nDivide by 2: a + 7d = 22  --- (Equation 2).",
      "Step 4: Subtract Equation (1) from Equation (2):\n(a + 7d) - (a + 5d) = 22 - 12\n2d = 10 => d = 5.",
      "Step 5: Substitute d = 5 into Equation (1):\na + 5(5) = 12 => a + 25 = 12 => a = 12 - 25 = -13.",
      "Step 6: The first three terms are:\na_1 = a = -13\na_2 = a + d = -13 + 5 = -8\na_3 = a + 2d = -8 + 5 = -3.",
      "Step 7: Conclude: The first three terms of the AP are -13, -8, and -3."
    ],
    explanation: "Two linear equations in two variables (a and d) are formed from the given sums. Solving simultaneously yields a = -13 and d = 5.",
    formula: "a_n = a + (n - 1)d",
    examinerNote: "Common mistake is adding incorrectly: 12 - 25 = -13 (not +13). Check negative sign carefully.",
    source: "CBSE Board 2024 (Set 30/1/3) & 2014 Delhi"
  },
  {
    id: "vq_5_sa_6",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "SA",
    question: "[CBSE 2017, 2022, 2024 Standard] Find the sum of the first 25 terms of an AP whose n-th term is given by a_n = 2 - 3n.",
    answer: "-925",
    steps: [
      "Step 1: Given n-th term formula: a_n = 2 - 3n.",
      "Step 2: Find the first term (n = 1):\na_1 = a = 2 - 3(1) = 2 - 3 = -1.",
      "Step 3: Find the 25th term (n = 25):\na_25 = l = 2 - 3(25) = 2 - 75 = -73.",
      "Step 4: Use the shortcut sum formula S_n = (n / 2)(a + l):\nS_25 = (25 / 2) * [a_1 + a_25].",
      "Step 5: Substitute values:\nS_25 = (25 / 2) * [-1 + (-73)] = (25 / 2) * (-74).",
      "Step 6: S_25 = 25 * (-37) = -925.",
      "Step 7: Conclude: The sum of the first 25 terms of the AP is -925."
    ],
    explanation: "Finding first term a_1 = -1 and last term a_25 = -73 allows direct evaluation using S_n = (n/2)(a + l) = 25 * (-37) = -925.",
    formula: "S_n = (n/2)(a + l)",
    examinerNote: "Finding a_1 and a_25 directly is 3 times faster and less error-prone than finding d and using the 2a + (n-1)d formula.",
    source: "CBSE Board 2022 Standard & 2017 All India"
  },

  // -----------------------------------------------------------------------
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // -----------------------------------------------------------------------
  {
    id: "vq_5_la_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 5,
    type: "LA",
    question: "[CBSE 2014, 2017, 2022, 2024] If the ratio of the sum of first n terms of two APs is (7n + 1) : (4n + 27), find the ratio of their 9th terms.",
    answer: "24 : 19",
    steps: [
      "Step 1: Let the first AP have first term a_1 and common difference d_1.\nLet the second AP have first term a_2 and common difference d_2.",
      "Step 2: Ratio of sums of first n terms:\nS_n / S_n' = [(n / 2)[2a_1 + (n - 1)d_1]] / [(n / 2)[2a_2 + (n - 1)d_2]] = (7n + 1) / (4n + 27).",
      "Step 3: Cancel (n / 2):\n[2a_1 + (n - 1)d_1] / [2a_2 + (n - 1)d_2] = (7n + 1) / (4n + 27)  --- (Equation 1).",
      "Step 4: Divide numerator and denominator of LHS by 2:\n[a_1 + ((n - 1) / 2)d_1] / [a_2 + ((n - 1) / 2)d_2] = (7n + 1) / (4n + 27)  --- (Equation 2).",
      "Step 5: We want the ratio of the 9th terms: t_9 / t_9' = (a_1 + 8d_1) / (a_2 + 8d_2).",
      "Step 6: Compare LHS of (2) with the 9th term formula:\n(n - 1) / 2 = 8 => n - 1 = 16 => n = 17.",
      "Step 7: Substitute n = 17 into RHS of Equation (1):\n[7(17) + 1] / [4(17) + 27].",
      "Step 8: Compute numerator: 7 * 17 + 1 = 119 + 1 = 120.\nCompute denominator: 4 * 17 + 27 = 68 + 27 = 95.",
      "Step 9: Ratio = 120 / 95. Simplify by dividing by 5: 120 / 5 = 24 and 95 / 5 = 19.\nRatio of 9th terms = 24 : 19."
    ],
    explanation: "To convert a ratio of sums to a ratio of m-th terms, substitute n = 2m - 1. For m = 9, n = 2(9) - 1 = 17.",
    formula: "Replace n with (2m - 1) to find ratio of m-th terms",
    examinerNote: "Universal Board Rule: To find the ratio of m-th terms from ratio of sums, ALWAYS substitute n = 2m - 1.",
    source: "CBSE Board 2024 Standard (Set 30/1/1) — Appeared in 2014, 2017, 2022"
  },
  {
    id: "vq_5_la_2",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 5,
    type: "LA",
    question: "[CBSE 2018, 2020 Standard] The sum of four consecutive numbers in an AP is 32 and the ratio of the product of the first and the last term to the product of the two middle terms is 7 : 15. Find the numbers.",
    answer: "The numbers are 2, 6, 10, 14 (or 14, 10, 6, 2)",
    steps: [
      "Step 1: Let the four consecutive numbers in AP be (a - 3d), (a - d), (a + d), and (a + 3d) with common difference 2d.",
      "Step 2: Sum of the four numbers = 32:\n(a - 3d) + (a - d) + (a + d) + (a + 3d) = 32\n4a = 32 => a = 8.",
      "Step 3: First term = a - 3d; Last term = a + 3d.\nMiddle terms = (a - d) and (a + d).",
      "Step 4: Set up the given ratio of products:\n[(a - 3d)(a + 3d)] / [(a - d)(a + d)] = 7 / 15\n(a^2 - 9d^2) / (a^2 - d^2) = 7 / 15.",
      "Step 5: Substitute a = 8 (a^2 = 64):\n(64 - 9d^2) / (64 - d^2) = 7 / 15.",
      "Step 6: Cross multiply:\n15(64 - 9d^2) = 7(64 - d^2)\n960 - 135d^2 = 448 - 7d^2\n960 - 448 = 135d^2 - 7d^2\n512 = 128d^2 => d^2 = 512 / 128 = 4 => d = +2 or d = -2.",
      "Step 7: Case 1 (d = 2, a = 8):\na - 3d = 8 - 3(2) = 8 - 6 = 2\na - d = 8 - 2 = 6\na + d = 8 + 2 = 10\na + 3d = 8 + 3(2) = 14.\nNumbers are 2, 6, 10, 14.",
      "Step 8: Case 2 (d = -2, a = 8) gives the same numbers in reverse: 14, 10, 6, 2.",
      "Step 9: Conclude: The required four numbers are 2, 6, 10, and 14."
    ],
    explanation: "Assuming symmetric variables (a - 3d, a - d, a + d, a + 3d) cancels d in the sum, giving a = 8 immediately. The difference of squares (a^2 - 9d^2)/(a^2 - d^2) easily yields d = +/- 2.",
    formula: "4 terms in AP: (a - 3d), (a - d), (a + d), (a + 3d)",
    examinerNote: "Assuming a, a+d, a+2d, a+3d makes the algebra 4 times harder. Always use symmetric terms.",
    source: "CBSE Board 2020 Standard (Set 30/2/1) & 2018 All India"
  },
  {
    id: "vq_5_la_3",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 5,
    type: "Proof",
    question: "[CBSE 2012, 2019, 2023 Standard] If S_n denotes the sum of the first n terms of an AP, prove that S_12 = 3(S_8 - S_4).",
    answer: "LHS = RHS = 12a + 66d (Proved)",
    steps: [
      "Step 1: Let the first term of the AP be 'a' and common difference be 'd'.",
      "Step 2: General formula for sum of n terms: S_n = (n / 2)[2a + (n - 1)d].",
      "Step 3: Express S_12 (LHS):\nS_12 = (12 / 2)[2a + (12 - 1)d] = 6[2a + 11d] = 12a + 66d  --- (Equation 1).",
      "Step 4: Express S_8 and S_4:\nS_8 = (8 / 2)[2a + (8 - 1)d] = 4[2a + 7d] = 8a + 28d.\nS_4 = (4 / 2)[2a + (4 - 1)d] = 2[2a + 3d] = 4a + 6d.",
      "Step 5: Compute (S_8 - S_4):\nS_8 - S_4 = (8a + 28d) - (4a + 6d)\nS_8 - S_4 = (8a - 4a) + (28d - 6d) = 4a + 22d.",
      "Step 6: Compute 3(S_8 - S_4) (RHS):\n3(S_8 - S_4) = 3 * (4a + 22d) = 12a + 66d  --- (Equation 2).",
      "Step 7: From Equation (1) and Equation (2):\nLHS = RHS = 12a + 66d.\nTherefore, S_12 = 3(S_8 - S_4). Hence proved!"
    ],
    explanation: "Expanding S_12, S_8, and S_4 in terms of a and d shows that both LHS and RHS reduce identically to 12a + 66d.",
    formula: "S_n = (n/2)[2a + (n - 1)d]",
    examinerNote: "Classic 5-mark proof question that tests algebraic manipulation and accuracy with signs.",
    source: "CBSE Board 2023 Standard (Set 30/1/1) & 2019 Delhi"
  },
  {
    id: "vq_5_la_4",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 5,
    type: "LA",
    question: "[CBSE 2015, 2018, 2021 Standard] 200 logs are stacked in the following manner: 20 logs in the bottom row, 19 in the next row, 18 in the row next to it and so on. In how many rows are the 200 logs placed and how many logs are in the top row?",
    answer: "16 rows, with 5 logs in the top row",
    steps: [
      "Step 1: The number of logs in each row forms an AP:\nBottom row: a_1 = 20, next row: a_2 = 19, next: a_3 = 18, ...",
      "Step 2: Here first term a = 20, common difference d = 19 - 20 = -1, and total sum S_n = 200.",
      "Step 3: Apply the sum formula S_n = (n / 2)[2a + (n - 1)d]:\n200 = (n / 2) * [2(20) + (n - 1)(-1)]\n400 = n * [40 - n + 1]\n400 = n * (41 - n) = 41n - n^2.",
      "Step 4: Rearrange into standard quadratic equation:\nn^2 - 41n + 400 = 0.",
      "Step 5: Solve by splitting the middle term (product = 400, sum = -41):\nn^2 - 25n - 16n + 400 = 0\nn(n - 25) - 16(n - 25) = 0\n(n - 16)(n - 25) = 0 => n = 16 or n = 25.",
      "Step 6: Physical verification of both values of n:\nCase 1: If n = 25:\nNumber of logs in top row a_25 = a + 24d = 20 + 24(-1) = 20 - 24 = -4.\nA row cannot contain -4 logs (physically impossible), so n = 25 is rejected.\nCase 2: If n = 16:\nNumber of logs in top row a_16 = a + 15d = 20 + 15(-1) = 20 - 15 = 5 logs.",
      "Step 7: Conclude: The 200 logs are placed in 16 rows, and there are 5 logs in the top row."
    ],
    explanation: "The quadratic equation yields two roots n = 16 and n = 25. Physically verifying the top row rejects n = 25 because logs cannot be negative, confirming n = 16 rows with 5 logs.",
    formula: "S_n = (n/2)[2a + (n - 1)d]; a_n = a + (n - 1)d",
    examinerNote: "Crucial marking step: You MUST show why n = 25 is rejected (a_25 = -4 logs is impossible). Leaving n = 25 unaddressed loses 1 full mark.",
    source: "CBSE Board 2021 Term-2 & NCERT Ex 5.3 Q19"
  },

  // -----------------------------------------------------------------------
  // SECTION E: 4-MARK COMPETENCY CASE STUDY (CBSE 2024-2026 PATTERN)
  // -----------------------------------------------------------------------
  {
    id: "vq_5_case_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2024 Competency Case Study] Solar Rooftop Loan Repayment: A residential society installs a solar energy rooftop system costing Rs 1,18,000. They opt to repay the cost in monthly installments. The agreement states that the first monthly installment is Rs 1,000, and each subsequent monthly installment increases by Rs 100 over the previous month.\n\nBased on this information, answer the following questions:\n(i) What amount does the society pay in the 30th installment? (1 Mark)\n(ii) Find the total amount paid by the society in the first 30 installments. (2 Marks)\n(iii) (a) If the entire loan of Rs 1,18,000 is settled in 40 installments, what is the amount paid in the 40th installment? (1 Mark)\nOR\n(iii) (b) How much unpaid balance remains after paying the first 30 installments? (1 Mark)",
    answer: "(i) Rs 3,900; (ii) Rs 73,500; (iii)(a) Rs 4,900; (iii)(b) Rs 44,500 remaining",
    steps: [
      "Part (i): The installments form an AP with first term a = Rs 1000 and common difference d = Rs 100.\n30th installment a_30 = a + 29d = 1000 + 29(100) = 1000 + 2900 = Rs 3,900.",
      "Part (ii): Total amount paid in 30 installments = S_30.\nS_n = (n / 2)[2a + (n - 1)d]\nS_30 = (30 / 2)[2(1000) + 29(100)] = 15 * [2000 + 2900] = 15 * 4900 = Rs 73,500.",
      "Part (iii)(a): 40th installment a_40 = a + 39d = 1000 + 39(100) = 1000 + 3900 = Rs 4,900.",
      "Part (iii)(b) Alternative: Remaining unpaid balance after 30 installments:\nTotal Loan - Amount Paid in 30 installments = Rs 1,18,000 - Rs 73,500 = Rs 44,500."
    ],
    explanation: "Financial installment schemes with fixed increments follow arithmetic progressions. Using a_n and S_n resolves each installment and cumulative payment.",
    formula: "a_n = a + (n - 1)d; S_n = (n/2)[2a + (n - 1)d]",
    examinerNote: "Include units (Rs) with every numerical answer.",
    source: "CBSE Official CFPQ 2024 & Sample Paper 2024-25"
  },
  {
    id: "vq_5_case_2",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2023, 2025 Model] Factory Output & Uniform Growth: A manufacturer of television sets produces 600 sets in the third year and 700 sets in the seventh year. Assuming that the production increases uniformly by a fixed number every year, answer the following:\n\n(i) Find the production in the 1st year. (1 Mark)\n(ii) Find the production in the 10th year. (1 Mark)\n(iii) (a) Find the total production in the first 7 years. (2 Marks)\nOR\n(iii) (b) In which year will the annual production reach 1,000 sets? (2 Marks)",
    answer: "(i) 550 sets; (ii) 775 sets; (iii)(a) 4,375 sets; (iii)(b) 19th year",
    steps: [
      "Part (i): Since production increases uniformly by a constant number each year, the annual production forms an AP.\nGiven: a_3 = 600 and a_7 = 700.\na_3 = a + 2d = 600  --- (1)\na_7 = a + 6d = 700  --- (2)\nSubtracting (1) from (2): 4d = 100 => d = 25 sets/year.\nSubstitute d = 25 into (1): a + 2(25) = 600 => a + 50 = 600 => a = 550 sets in the 1st year.",
      "Part (ii): Production in the 10th year:\na_10 = a + 9d = 550 + 9(25) = 550 + 225 = 775 sets.",
      "Part (iii)(a): Total production in first 7 years = S_7:\nS_7 = (7 / 2)[a + a_7] = (7 / 2)[550 + 700] = (7 / 2) * 1250 = 7 * 625 = 4,375 sets.",
      "Part (iii)(b) Alternative: In which year production reaches 1,000 sets:\na_n = 1000\na + (n - 1)d = 1000\n550 + (n - 1)(25) = 1000\n25(n - 1) = 450 => n - 1 = 450 / 25 = 18 => n = 19th year."
    ],
    explanation: "Standard uniform linear growth modeled by an AP where a = 550, d = 25. Solving standard n-th term and sum equations yields each milestone.",
    formula: "a_n = a + (n - 1)d; S_n = (n/2)(a + l)",
    examinerNote: "Write units ('sets' or 'years') after every calculated value.",
    source: "CBSE Official Sample Question Paper 2024-25 & NCERT Ex 5.3"
  },
  {
    id: "vq_5_case_3",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 4,
    type: "Case Study",
    question: "[CBSE 2022, 2024 Sample Paper] Decorative Semicircular Spiral: A spiral is made up of successive semicircles, with centers alternately at A and B, starting with center at A, of radii 0.5 cm, 1.0 cm, 1.5 cm, 2.0 cm, ... (Take pi = 22/7)\n\nBased on this information, answer the following questions:\n(i) What is the length of the first semicircle l_1? (1 Mark)\n(ii) Show that the lengths of successive semicircles form an AP and find its common difference. (1 Mark)\n(iii) (a) What is the total length of such a spiral made up of 13 consecutive semicircles? (2 Marks)\nOR\n(iii) (b) If the total length of a spiral is 396 cm, how many consecutive semicircles does it contain? (2 Marks)",
    answer: "(i) 11/7 cm (or 1.57 cm); (ii) Common difference d = 11/7 cm; (iii)(a) 143 cm; (iii)(b) 21 semicircles",
    steps: [
      "Part (i): Perimeter of a semicircle of radius r is l = pi * r.\nFor first semicircle r_1 = 0.5 cm = 1/2 cm:\nl_1 = pi * (0.5) = (22/7) * (1/2) = 11/7 cm (= 1.57 cm).",
      "Part (ii): Lengths of successive semicircles:\nl_1 = pi * 0.5, l_2 = pi * 1.0, l_3 = pi * 1.5, ...\nDifference l_2 - l_1 = pi(1.0 - 0.5) = 0.5*pi = (1/2)*(22/7) = 11/7 cm.\nDifference l_3 - l_2 = pi(1.5 - 1.0) = 0.5*pi = 11/7 cm.\nSince the difference between consecutive lengths is constant (d = 11/7 cm), the lengths form an AP.",
      "Part (iii)(a): Total length of 13 consecutive semicircles = S_13:\nS_13 = (13 / 2) * [2 * a + (13 - 1)d] where a = 11/7 and d = 11/7.\nS_13 = (13 / 2) * [2(11/7) + 12(11/7)] = (13 / 2) * [14 * (11/7)] = (13 / 2) * [2 * 11] = (13 / 2) * 22 = 13 * 11 = 143 cm.",
      "Part (iii)(b) Alternative: Given total length S_n = 396 cm:\nS_n = (n / 2)[2a + (n - 1)d] = (n / 2) * (11/7) * [2 + n - 1] = (n / 2) * (11/7) * (n + 1) = [11 * n(n + 1)] / 14 = 396.\nn(n + 1) = (396 * 14) / 11 = 36 * 14 = 504.\nn^2 + n - 504 = 0 => (n + 24)(n - 21) = 0 => n = 21 (since n > 0).\nTherefore, the spiral contains 21 consecutive semicircles."
    ],
    explanation: "Perimeter of semicircle is pi*r. When radius increases in AP (0.5, 1.0, 1.5...), perimeter lengths form an AP with a = pi/2 and d = pi/2. Total length is the sum S_13 = 143 cm.",
    formula: "l = pi * r; S_n = (n/2)[2a + (n - 1)d]",
    examinerNote: "Factoring out (pi * 0.5) from the sum makes the calculation: (11/7) * [1 + 2 + ... + 13] = (11/7) * 91 = 11 * 13 = 143 cm.",
    source: "CBSE Board 2024 Sample Paper & NCERT Ex 5.3 Q18"
  }
];
