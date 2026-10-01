import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH1_QUESTIONS: VaultQuestion[] = [
  {
    id: "vq_1_1m_1",
    chapter: 1,
    chapterName: "Real Numbers",
    marks: 1,
    type: "MCQ",
    question: "The exponent of 2 in the prime factorisation of 144 is:",
    options: ["2", "4", "3", "6"],
    correctOption: 1,
    answer: "4",
    steps: [
      "144 = 2 * 72 = 2 * 2 * 36 = 2^3 * 18 = 2^4 * 9",
      "9 = 3^2, so 144 = 2^4 * 3^2",
      "The exponent of 2 is 4."
    ],
    formula: "Prime factorisation x = p1^a1 * p2^a2",
    examinerNote: "Do not write 2; the question asks for the exponent, which is 4."
  },
  {
    id: "vq_1_1m_2",
    chapter: 1,
    chapterName: "Real Numbers",
    marks: 1,
    type: "MCQ",
    question: "If HCF(336, 54) = 6, then LCM(336, 54) is:",
    options: ["3024", "18144", "2016", "1512"],
    correctOption: 0,
    answer: "3024",
    steps: [
      "HCF(a, b) * LCM(a, b) = a * b",
      "6 * LCM(336, 54) = 336 * 54",
      "LCM(336, 54) = (336 * 54) / 6 = 336 * 9 = 3024."
    ],
    formula: "HCF(a, b) * LCM(a, b) = a * b",
    examinerNote: "Divide 54 by 6 first to get 9, then multiply 336 by 9 to save time."
  },
  {
    id: "vq_1_2m_1",
    chapter: 1,
    chapterName: "Real Numbers",
    marks: 2,
    type: "VSA",
    question: "Find the HCF and LCM of 404 and 96 and verify that HCF * LCM = Product of the two numbers.",
    answer: "HCF = 4, LCM = 9696; 4 * 9696 = 38784 = 404 * 96",
    steps: [
      "Prime factorise 404: 404 = 2^2 * 101",
      "Prime factorise 96: 96 = 2^5 * 3",
      "HCF(404, 96) = 2^2 = 4",
      "LCM(404, 96) = 2^5 * 3 * 101 = 32 * 3 * 101 = 9696",
      "Verification: HCF * LCM = 4 * 9696 = 38784",
      "Product of numbers = 404 * 96 = 38784. Hence verified."
    ],
    formula: "HCF * LCM = a * b",
    examinerNote: "Show prime factorisation clearly for both numbers."
  },
  {
    id: "vq_1_3m_1",
    chapter: 1,
    chapterName: "Real Numbers",
    marks: 3,
    type: "SA",
    question: "Prove that sqrt(5) is an irrational number.",
    answer: "sqrt(5) is irrational by contradiction.",
    steps: [
      "Assume to the contrary that sqrt(5) is rational.",
      "Then sqrt(5) = a / b, where a and b are coprime integers (HCF(a, b) = 1) and b != 0.",
      "Squaring both sides: 5 = a^2 / b^2 => a^2 = 5b^2. Hence 5 divides a^2 => 5 divides a.",
      "Let a = 5c for some integer c. Substitute: (5c)^2 = 5b^2 => 25c^2 = 5b^2 => b^2 = 5c^2.",
      "Hence 5 divides b^2 => 5 divides b.",
      "Thus 5 divides both a and b, contradicting that a and b are coprime.",
      "Hence our assumption is false and sqrt(5) is irrational."
    ],
    formula: "p divides a^2 implies p divides a (Fundamental Theorem)",
    examinerNote: "Must explicitly state that a and b are coprime integers."
  },
  {
    id: "vq_1_3m_2",
    chapter: 1,
    chapterName: "Real Numbers",
    marks: 3,
    type: "SA",
    question: "Three alarm clocks ring at intervals of 4, 12 and 20 minutes respectively. If they ring together now, after how much time will they ring together next?",
    answer: "60 minutes (1 hour)",
    steps: [
      "The bells ring together at the Lowest Common Multiple (LCM) of 4, 12, and 20 minutes.",
      "4 = 2^2",
      "12 = 2^2 * 3",
      "20 = 2^2 * 5",
      "LCM(4, 12, 20) = 2^2 * 3 * 5 = 4 * 15 = 60 minutes = 1 hour.",
      "Therefore, they will ring together next after 60 minutes (1 hour)."
    ],
    formula: "LCM = product of greatest powers of each prime factor",
    examinerNote: "State LCM clearly and conclude with units (minutes or hours)."
  }
];
