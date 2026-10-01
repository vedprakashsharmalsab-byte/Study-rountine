import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH2_QUESTIONS: VaultQuestion[] = [
  {
    id: "vq_2_1m_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "If one zero of the quadratic polynomial x^2 + 3x + k is 2, then the value of k is:",
    options: ["10", "-10", "-7", "-2"],
    correctOption: 1,
    answer: "-10",
    steps: [
      "Since 2 is a zero of P(x) = x^2 + 3x + k, P(2) must equal 0.",
      "P(2) = (2)^2 + 3(2) + k = 0",
      "4 + 6 + k = 0 => 10 + k = 0 => k = -10."
    ],
    formula: "P(alpha) = 0 if alpha is a zero of P(x)",
    examinerNote: "Substitute x = 2 directly into the polynomial."
  },
  {
    id: "vq_2_1m_2",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 1,
    type: "MCQ",
    question: "A quadratic polynomial, whose zeroes are -3 and 4, is:",
    options: ["x^2 - x + 12", "x^2 + x + 12", "x^2 - x - 12", "2x^2 + 2x - 24"],
    correctOption: 2,
    answer: "x^2 - x - 12",
    steps: [
      "Sum of zeroes S = -3 + 4 = 1",
      "Product of zeroes P = (-3) * 4 = -12",
      "Quadratic polynomial = k[x^2 - Sx + P] = x^2 - (1)x + (-12) = x^2 - x - 12."
    ],
    formula: "k[x^2 - (alpha + beta)x + alpha*beta]",
    examinerNote: "Formula middle sign is negative: -(alpha + beta)x."
  },
  {
    id: "vq_2_2m_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 2,
    type: "VSA",
    question: "Find a quadratic polynomial whose zeroes are (3 + sqrt(5)) and (3 - sqrt(5)).",
    answer: "x^2 - 6x + 4",
    steps: [
      "Sum of zeroes S = (3 + sqrt(5)) + (3 - sqrt(5)) = 6",
      "Product of zeroes P = (3 + sqrt(5))(3 - sqrt(5)) = 3^2 - (sqrt(5))^2 = 9 - 5 = 4",
      "Polynomial is k[x^2 - Sx + P] = k[x^2 - 6x + 4]. Taking k = 1: x^2 - 6x + 4."
    ],
    formula: "k[x^2 - Sx + P]",
    examinerNote: "Use (a+b)(a-b) = a^2 - b^2 for the product."
  },
  {
    id: "vq_2_3m_1",
    chapter: 2,
    chapterName: "Polynomials",
    marks: 3,
    type: "SA",
    question: "Find the zeroes of the quadratic polynomial 6x^2 - 3 - 7x and verify the relationship between zeroes and coefficients.",
    answer: "Zeroes are 3/2 and -1/3. Sum = 7/6 = -b/a; Product = -1/2 = c/a.",
    steps: [
      "Standard form: 6x^2 - 7x - 3 = 0 (a = 6, b = -7, c = -3)",
      "Split middle term: 6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (2x - 3)(3x + 1) = 0",
      "Zeroes: alpha = 3/2, beta = -1/3",
      "Sum verification: alpha + beta = 3/2 - 1/3 = 7/6. -b/a = -(-7)/6 = 7/6 (Verified)",
      "Product verification: alpha * beta = (3/2)(-1/3) = -1/2. c/a = -3/6 = -1/2 (Verified)"
    ],
    formula: "alpha + beta = -b/a, alpha * beta = c/a",
    examinerNote: "Arrange in descending powers of x first."
  }
];
