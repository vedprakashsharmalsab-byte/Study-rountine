import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH3_QUESTIONS: VaultQuestion[] = [
  {
    id: "vq_3_1m_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 1,
    type: "MCQ",
    question: "For what value of k do the equations 3x - y + 8 = 0 and 6x - k y = -16 represent coincident lines?",
    options: ["1/2", "-1/2", "2", "-2"],
    correctOption: 2,
    answer: "k = 2",
    steps: [
      "Standard form: 3x - y + 8 = 0 and 6x - ky + 16 = 0.",
      "For coincident lines: a1/a2 = b1/b2 = c1/c2.",
      "3/6 = (-1)/(-k) = 8/16.",
      "1/2 = 1/k = 1/2 => k = 2."
    ],
    formula: "a1/a2 = b1/b2 = c1/c2 (Coincident)",
    examinerNote: "Put both constant terms on the same side."
  },
  {
    id: "vq_3_2m_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 2,
    type: "VSA",
    question: "Solve by substitution: x + y = 14 and x - y = 4.",
    answer: "x = 9, y = 5",
    steps: [
      "From eq 2: x = y + 4.",
      "Substitute in eq 1: (y + 4) + y = 14 => 2y + 4 = 14 => 2y = 10 => y = 5.",
      "Then x = 5 + 4 = 9."
    ],
    formula: "Substitution Method",
    examinerNote: "Verify x + y = 14 (9 + 5 = 14)."
  },
  {
    id: "vq_3_3m_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 3,
    type: "SA",
    question: "Solve the following pair of equations by elimination: 2x + 3y = 11 and 2x - 4y = -24.",
    answer: "x = -2, y = 5",
    steps: [
      "Eq 1: 2x + 3y = 11",
      "Eq 2: 2x - 4y = -24",
      "Subtract Eq 2 from Eq 1: (2x - 2x) + (3y - (-4y)) = 11 - (-24)",
      "7y = 35 => y = 5",
      "Substitute y = 5 into Eq 1: 2x + 3(5) = 11 => 2x = 11 - 15 = -4 => x = -2."
    ],
    formula: "Elimination Method",
    examinerNote: "Watch the double negative: 3y - (-4y) = 7y."
  },
  {
    id: "vq_3_5m_1",
    chapter: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    marks: 5,
    type: "LA",
    question: "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.",
    answer: "Speed of boat = 8 km/h, Speed of stream = 3 km/h",
    steps: [
      "Let boat speed = x km/h, stream speed = y km/h (x > y).",
      "Upstream speed = x - y, Downstream speed = x + y.",
      "30/(x - y) + 44/(x + y) = 10  --- (1)",
      "40/(x - y) + 55/(x + y) = 13  --- (2)",
      "Substitute u = 1/(x - y) and v = 1/(x + y):",
      "30u + 44v = 10 and 40u + 55v = 13",
      "Solving gives u = 1/5 and v = 1/11.",
      "x - y = 5 and x + y = 11.",
      "Adding gives 2x = 16 => x = 8 km/h.",
      "Subtracting gives 2y = 6 => y = 3 km/h."
    ],
    formula: "v_up = x - y, v_down = x + y, t = d/v",
    examinerNote: "Define u and v clearly and do not forget to find x and y at the end."
  }
];
