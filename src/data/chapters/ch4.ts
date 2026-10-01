import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH4_QUESTIONS: VaultQuestion[] = [
  {
    id: "vq_4_1m_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 1,
    type: "MCQ",
    question: "The discriminant of the quadratic equation 2x^2 - 4x + 3 = 0 is:",
    options: ["-8", "10", "-16", "8"],
    correctOption: 0,
    answer: "-8",
    steps: [
      "Here a = 2, b = -4, c = 3.",
      "D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8."
    ],
    formula: "D = b^2 - 4ac",
    examinerNote: "(-4)^2 is +16, not -16."
  },
  {
    id: "vq_4_2m_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 2,
    type: "VSA",
    question: "Find the roots of the quadratic equation x^2 - 3x - 10 = 0 by factorisation.",
    answer: "x = 5 and x = -2",
    steps: [
      "x^2 - 5x + 2x - 10 = 0",
      "x(x - 5) + 2(x - 5) = 0",
      "(x - 5)(x + 2) = 0 => x = 5, x = -2."
    ],
    formula: "Factorisation by splitting the middle term",
    examinerNote: "Verify 5 * (-2) = -10 and 5 + (-2) = 3."
  },
  {
    id: "vq_4_3m_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 3,
    type: "SA",
    question: "Find the values of k for which the quadratic equation (k + 4)x^2 + (k + 1)x + 1 = 0 has equal roots.",
    answer: "k = 5 or k = -3",
    steps: [
      "For equal roots: D = b^2 - 4ac = 0.",
      "(k + 1)^2 - 4(k + 4)(1) = 0",
      "k^2 + 2k + 1 - 4k - 16 = 0 => k^2 - 2k - 15 = 0",
      "(k - 5)(k + 3) = 0 => k = 5 or k = -3."
    ],
    formula: "D = b^2 - 4ac = 0 (Equal Roots)",
    examinerNote: "Check that k + 4 != 0 for both values."
  },
  {
    id: "vq_4_5m_1",
    chapter: 4,
    chapterName: "Quadratic Equations",
    marks: 5,
    type: "LA",
    question: "A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.",
    answer: "6 km/h",
    steps: [
      "Let speed of stream = x km/h (x < 18).",
      "Upstream speed = (18 - x) km/h, Downstream speed = (18 + x) km/h.",
      "Time upstream - Time downstream = 1 hour.",
      "24/(18 - x) - 24/(18 + x) = 1",
      "24[(18 + x - (18 - x)) / (324 - x^2)] = 1",
      "24(2x) = 324 - x^2 => x^2 + 48x - 324 = 0",
      "(x + 54)(x - 6) = 0 => x = 6 (since speed > 0)."
    ],
    formula: "t_up - t_down = 1; Time = Distance / Speed",
    examinerNote: "Reject negative speed x = -54 with an explicit reason."
  }
];
