import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH5_QUESTIONS: VaultQuestion[] = [
  {
    id: "vq_5_1m_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 1,
    type: "MCQ",
    question: "The 10th term of the AP: 2, 7, 12, ... is:",
    options: ["47", "52", "42", "49"],
    correctOption: 0,
    answer: "47",
    steps: [
      "Here first term a = 2, common difference d = 7 - 2 = 5.",
      "a_10 = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = 47."
    ],
    formula: "a_n = a + (n - 1)d",
    examinerNote: "Remember (n - 1) is 9 for the 10th term."
  },
  {
    id: "vq_5_2m_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 2,
    type: "VSA",
    question: "Find the 20th term from the last term of the AP: 3, 8, 13, ..., 253.",
    answer: "158",
    steps: [
      "Last term l = 253, common difference d = 8 - 3 = 5.",
      "nth term from end: a_n' = l - (n - 1)d.",
      "For n = 20: a_20' = 253 - (20 - 1)(5) = 253 - 19(5) = 253 - 95 = 158."
    ],
    formula: "a_n' = l - (n - 1)d",
    examinerNote: "Subtract from the last term."
  },
  {
    id: "vq_5_3m_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 3,
    type: "SA",
    question: "If the sum of the first 14 terms of an AP is 1050 and its first term is 10, find the 20th term.",
    answer: "a_20 = 200",
    steps: [
      "Given: S_14 = 1050, a = 10.",
      "S_14 = (14/2)[2(10) + (14 - 1)d] = 1050",
      "7[20 + 13d] = 1050 => 20 + 13d = 150 => 13d = 130 => d = 10.",
      "Now, a_20 = a + (20 - 1)d = 10 + 19(10) = 10 + 190 = 200."
    ],
    formula: "S_n = (n/2)[2a + (n-1)d], a_n = a + (n-1)d",
    examinerNote: "Solve for d first, then compute a_20."
  },
  {
    id: "vq_5_4m_1",
    chapter: 5,
    chapterName: "Arithmetic Progressions",
    marks: 4,
    type: "Case Study",
    question: "A spiral is made up of successive semicircles with centres alternately at A and B, starting with centre at A, of radii 0.5 cm, 1.0 cm, 1.5 cm, 2.0 cm, ... What is the total length of such a spiral made up of 13 consecutive semicircles? (Take pi = 22/7)",
    answer: "143 cm",
    steps: [
      "Length of semicircle = pi * r.",
      "Lengths form AP: 0.5 pi, 1.0 pi, 1.5 pi, ... with a = 0.5 pi and d = 0.5 pi.",
      "Total length S_13 = (13/2)[2(0.5 pi) + (13 - 1)(0.5 pi)] = (13/2)[pi + 6 pi] = (13/2) * 7 pi.",
      "Substitute pi = 22/7: S_13 = (13/2) * 7 * (22/7) = 13 * 11 = 143 cm."
    ],
    formula: "S_n = (n/2)[2a + (n-1)d]; Length = pi * r",
    examinerNote: "Semicircle length is pi * r, not 2 * pi * r."
  }
];
