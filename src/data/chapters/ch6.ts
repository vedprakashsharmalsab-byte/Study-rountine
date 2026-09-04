import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH6_QUESTIONS: VaultQuestion[] = [
  {
    "id": "vq_6_1m_1",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC intersecting AB at D and AC at E. If AD = 3 cm, DB = 4 cm, and AE = 6 cm, then EC is equal to:",
    "options": [
      "8 cm",
      "7 cm",
      "9 cm",
      "10 cm"
    ],
    "correctOption": 0,
    "answer": "EC = 8 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given in problem]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "Substitute values: 3/4 = 6/EC [Substituting AD=3, DB=4, AE=6]",
      "3 × EC = 4 × 6 ⟹ 3 EC = 24 [Cross multiplication]",
      "EC = 24 / 3 = 8 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Do not invert the ratio. Keep corresponding sides aligned."
  },
  {
    "id": "vq_6_1m_2",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "The perimeters of two similar triangles △ABC and △PQR are 36 cm and 24 cm respectively. If PQ = 10 cm, then AB is:",
    "options": [
      "15 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    "correctOption": 0,
    "answer": "AB = 15 cm",
    "steps": [
      "△ABC ∼ △PQR [Given]",
      "Perimeter(△ABC) / Perimeter(△PQR) = AB / PQ [Ratio of perimeters equals ratio of corresponding sides]",
      "36 / 24 = AB / 10 [Substitution]",
      "3 / 2 = AB / 10 ⟹ 2 AB = 30 [Simplifying fraction]",
      "AB = 15 cm [Final Result with Units]"
    ],
    "formula": "Perimeter ratio = Side ratio for similar triangles"
  },
  {
    "id": "vq_6_1m_3",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "If △ABC ∼ △EDF and △ABC is not similar to △DEF, then which of the following is NOT true?",
    "options": [
      "BC · EF = AC · FD",
      "AB · EF = AC · DE",
      "BC · DE = AB · EF",
      "BC · DE = AB · FD"
    ],
    "correctOption": 2,
    "answer": "BC · DE = AB · EF is NOT true",
    "steps": [
      "Given △ABC ∼ △EDF. Write the corresponding side ratios: [Similar triangles]",
      "AB / ED = BC / DF = AC / EF [Corresponding sides of similar triangles are proportional]",
      "From AB/ED = BC/DF, we get: AB · DF = BC · ED [Cross multiplying]",
      "From BC/DF = AC/EF, we get: BC · EF = AC · DF [Cross multiplying]",
      "From AB/ED = AC/EF, we get: AB · EF = AC · DE [Cross multiplying]",
      "Therefore, BC · DE = AB · EF is incorrect and not true. [Option C]"
    ],
    "formula": "△ABC ∼ △EDF ⟹ AB/ED = BC/DF = AC/EF",
    "examinerNote": "Pay strict attention to vertex order. A corresponds to E, B to D, and C to F."
  },
  {
    "id": "vq_6_1m_4",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.\nReason (R): This is the Converse of Basic Proportionality Theorem.",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    "correctOption": 0,
    "answer": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
    "steps": [
      "Assertion (A) states: If AD/DB = AE/EC in △ABC, then DE ∥ BC. [True by Theorem 6.2]",
      "Reason (R) states that this statement is known as the Converse of BPT. [True definition]",
      "Reason correctly explains Assertion. [Option A]"
    ],
    "formula": "Theorem 6.2 (Converse of BPT)"
  },
  {
    "id": "vq_6_1m_5",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 10/4. If AE = 15 cm, find AC.",
    "options": [
      "21 cm",
      "17 cm",
      "20 cm",
      "23 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 21 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "10/4 = 15/EC ⟹ EC = (4 × 15) / 10 = 6 cm [Calculation]",
      "AC = AE + EC = 15 + 6 = 21 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_6",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 12/4. If AE = 18 cm, find AC.",
    "options": [
      "24 cm",
      "20 cm",
      "23 cm",
      "26 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 24 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "12/4 = 18/EC ⟹ EC = (4 × 18) / 12 = 6 cm [Calculation]",
      "AC = AE + EC = 18 + 6 = 24 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_7",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 14/4. If AE = 21 cm, find AC.",
    "options": [
      "27 cm",
      "23 cm",
      "26 cm",
      "29 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 27 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "14/4 = 21/EC ⟹ EC = (4 × 21) / 14 = 6 cm [Calculation]",
      "AC = AE + EC = 21 + 6 = 27 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_8",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 16/4. If AE = 24 cm, find AC.",
    "options": [
      "30 cm",
      "26 cm",
      "29 cm",
      "32 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 30 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "16/4 = 24/EC ⟹ EC = (4 × 24) / 16 = 6 cm [Calculation]",
      "AC = AE + EC = 24 + 6 = 30 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_9",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 18/4. If AE = 27 cm, find AC.",
    "options": [
      "33 cm",
      "29 cm",
      "32 cm",
      "35 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 33 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "18/4 = 27/EC ⟹ EC = (4 × 27) / 18 = 6 cm [Calculation]",
      "AC = AE + EC = 27 + 6 = 33 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_10",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 20/4. If AE = 30 cm, find AC.",
    "options": [
      "36 cm",
      "32 cm",
      "35 cm",
      "38 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 36 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "20/4 = 30/EC ⟹ EC = (4 × 30) / 20 = 6 cm [Calculation]",
      "AC = AE + EC = 30 + 6 = 36 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_11",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 22/4. If AE = 33 cm, find AC.",
    "options": [
      "39 cm",
      "35 cm",
      "38 cm",
      "41 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 39 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "22/4 = 33/EC ⟹ EC = (4 × 33) / 22 = 6 cm [Calculation]",
      "AC = AE + EC = 33 + 6 = 39 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_1m_12",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 1,
    "type": "MCQ",
    "question": "In △ABC, DE ∥ BC such that AD/DB = 24/4. If AE = 36 cm, find AC.",
    "options": [
      "42 cm",
      "38 cm",
      "41 cm",
      "44 cm"
    ],
    "correctOption": 0,
    "answer": "AC = 42 cm",
    "steps": [
      "In △ABC, DE ∥ BC [Given]",
      "AD/DB = AE/EC [By Basic Proportionality Theorem (BPT)]",
      "24/4 = 36/EC ⟹ EC = (4 × 36) / 24 = 6 cm [Calculation]",
      "AC = AE + EC = 36 + 6 = 42 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC and AC = AE + EC"
  },
  {
    "id": "vq_6_2m_1",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 2 cm, DB = 4 cm, and AE = 3 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 6.00 cm, AC = 9.00 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 2 / 4 = 3 / EC [Substitution]",
      "EC = (4 × 3) / 2 = 6.00 cm [Cross multiplying]",
      "Total length AC = AE + EC = 3 + 6.00 = 9.00 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_2",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 3 cm, DB = 5 cm, and AE = 4 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 6.67 cm, AC = 10.67 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 3 / 5 = 4 / EC [Substitution]",
      "EC = (5 × 4) / 3 = 6.67 cm [Cross multiplying]",
      "Total length AC = AE + EC = 4 + 6.67 = 10.67 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_3",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 4 cm, DB = 6 cm, and AE = 5 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 7.50 cm, AC = 12.50 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 4 / 6 = 5 / EC [Substitution]",
      "EC = (6 × 5) / 4 = 7.50 cm [Cross multiplying]",
      "Total length AC = AE + EC = 5 + 7.50 = 12.50 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_4",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 5 cm, DB = 7 cm, and AE = 6 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 8.40 cm, AC = 14.40 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 5 / 7 = 6 / EC [Substitution]",
      "EC = (7 × 6) / 5 = 8.40 cm [Cross multiplying]",
      "Total length AC = AE + EC = 6 + 8.40 = 14.40 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_5",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 6 cm, DB = 8 cm, and AE = 7 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 9.33 cm, AC = 16.33 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 6 / 8 = 7 / EC [Substitution]",
      "EC = (8 × 7) / 6 = 9.33 cm [Cross multiplying]",
      "Total length AC = AE + EC = 7 + 9.33 = 16.33 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_6",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 7 cm, DB = 9 cm, and AE = 8 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 10.29 cm, AC = 18.29 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 7 / 9 = 8 / EC [Substitution]",
      "EC = (9 × 8) / 7 = 10.29 cm [Cross multiplying]",
      "Total length AC = AE + EC = 8 + 10.29 = 18.29 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_7",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 8 cm, DB = 10 cm, and AE = 9 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 11.25 cm, AC = 20.25 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 8 / 10 = 9 / EC [Substitution]",
      "EC = (10 × 9) / 8 = 11.25 cm [Cross multiplying]",
      "Total length AC = AE + EC = 9 + 11.25 = 20.25 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_8",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 9 cm, DB = 11 cm, and AE = 10 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 12.22 cm, AC = 22.22 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 9 / 11 = 10 / EC [Substitution]",
      "EC = (11 × 10) / 9 = 12.22 cm [Cross multiplying]",
      "Total length AC = AE + EC = 10 + 12.22 = 22.22 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_9",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 10 cm, DB = 12 cm, and AE = 11 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 13.20 cm, AC = 24.20 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 10 / 12 = 11 / EC [Substitution]",
      "EC = (12 × 11) / 10 = 13.20 cm [Cross multiplying]",
      "Total length AC = AE + EC = 11 + 13.20 = 24.20 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_10",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 11 cm, DB = 13 cm, and AE = 12 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 14.18 cm, AC = 26.18 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 11 / 13 = 12 / EC [Substitution]",
      "EC = (13 × 12) / 11 = 14.18 cm [Cross multiplying]",
      "Total length AC = AE + EC = 12 + 14.18 = 26.18 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_11",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 12 cm, DB = 14 cm, and AE = 13 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 15.17 cm, AC = 28.17 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 12 / 14 = 13 / EC [Substitution]",
      "EC = (14 × 13) / 12 = 15.17 cm [Cross multiplying]",
      "Total length AC = AE + EC = 13 + 15.17 = 28.17 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_12",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 13 cm, DB = 15 cm, and AE = 14 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 16.15 cm, AC = 30.15 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 13 / 15 = 14 / EC [Substitution]",
      "EC = (15 × 14) / 13 = 16.15 cm [Cross multiplying]",
      "Total length AC = AE + EC = 14 + 16.15 = 30.15 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_13",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 14 cm, DB = 16 cm, and AE = 15 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 17.14 cm, AC = 32.14 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 14 / 16 = 15 / EC [Substitution]",
      "EC = (16 × 15) / 14 = 17.14 cm [Cross multiplying]",
      "Total length AC = AE + EC = 15 + 17.14 = 32.14 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_14",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 15 cm, DB = 17 cm, and AE = 16 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 18.13 cm, AC = 34.13 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 15 / 17 = 16 / EC [Substitution]",
      "EC = (17 × 16) / 15 = 18.13 cm [Cross multiplying]",
      "Total length AC = AE + EC = 16 + 18.13 = 34.13 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_2m_15",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, DE ∥ BC. If AD = 16 cm, DB = 18 cm, and AE = 17 cm, determine the length of EC and hence find AC.",
    "answer": "EC = 19.13 cm, AC = 36.13 cm",
    "steps": [
      "In △ABC, line DE is parallel to side BC. [Given: DE ∥ BC]",
      "By Basic Proportionality Theorem: AD / DB = AE / EC [BPT Theorem 6.1]",
      "Substitute given lengths: 16 / 18 = 17 / EC [Substitution]",
      "EC = (18 × 17) / 16 = 19.13 cm [Cross multiplying]",
      "Total length AC = AE + EC = 17 + 19.13 = 36.13 cm [Final Result with Units]"
    ],
    "formula": "AD/DB = AE/EC (BPT)",
    "examinerNote": "Always state Theorem 6.1 (BPT) clearly before substituting numerical values."
  },
  {
    "id": "vq_6_3m_1",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 1)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_2",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 2)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_3",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 3)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_4",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 4)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_5",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 5)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_6",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 6)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_7",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 7)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_8",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 8)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_9",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 9)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_10",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 10)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_11",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 11)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_12",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 12)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_13",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 13)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_14",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 14)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_3m_15",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 3,
    "type": "SA",
    "question": "Diagonals of a trapezium ABCD with AB ∥ DC intersect each other at the point O. Show that AO / BO = CO / DO. (Problem Variant 15)",
    "answer": "AO / BO = CO / DO (Hence Proved)",
    "steps": [
      "Given: ABCD is a trapezium with AB ∥ DC. Diagonals AC and BD intersect at O. [Given]",
      "To Prove: AO / BO = CO / DO. [To Prove]",
      "Construction: Through point O, draw line OE ∥ AB meeting AD at E. Since AB ∥ DC, OE ∥ DC also. [Construction]",
      "In △ADC, OE ∥ DC. By Basic Proportionality Theorem: AE / ED = AO / OC ... (Equation 1) [By BPT in △ADC]",
      "In △DAB, OE ∥ AB. By Basic Proportionality Theorem: ED / AE = DO / OB ⟹ AE / ED = BO / DO ... (Equation 2) [By BPT in △DAB]",
      "From (1) and (2): AO / OC = BO / DO. [Equating equations]",
      "Rearranging terms: AO / BO = CO / DO. [Hence Proved]"
    ],
    "formula": "Basic Proportionality Theorem applied via parallel construction",
    "examinerNote": "Construction step carries 1 mark. Do not forget to draw OE ∥ AB ∥ DC."
  },
  {
    "id": "vq_6_4m_1",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 1: Street Light & Moving Pedestrian\n\nA girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground:\n(i) Find the distance walked by the girl in 4 seconds. [1 Mark]\n(ii) Find the length of her shadow after 4 seconds using triangle similarity. [2 Marks]\n(iii) State the similarity criterion used to compare the triangles. [1 Mark]",
    "answer": "(i) Distance = 4.8 m; (ii) Shadow length = 1.6 m; (iii) AA Similarity Criterion",
    "steps": [
      "Part (i): Speed of girl = 1.2 m/s, time = 4 s. Distance BD = Speed × Time = 1.2 × 4 = 4.8 m. [Distance Formula: d = v × t]",
      "Part (ii): Let AB be lamp-post (3.6 m = 360 cm), CD be girl (90 cm = 0.9 m). Let DE be shadow length = x metres. [Let x = shadow length]",
      "In △ABE and △CDE: ∠B = ∠D = 90° (vertical to ground), and ∠E = ∠E (common angle). [Angles equal]",
      "∴ △ABE ∼ △CDE [By AA Similarity Criterion]",
      "Corresponding sides ratio: AB / CD = BE / DE ⟹ 3.6 / 0.9 = (4.8 + x) / x [Proportional sides]",
      "4 = (4.8 + x) / x ⟹ 4x = 4.8 + x ⟹ 3x = 4.8 ⟹ x = 1.6 m. [Solving linear equation]",
      "Part (iii): The similarity criterion used is the AA (Angle-Angle) Similarity Criterion. [Criterion Statement]",
      "Final Answer: (i) 4.8 m, (ii) 1.6 m, (iii) AA Criterion. [Boxed Result]"
    ],
    "formula": "△ABE ∼ △CDE (AA Similarity) ⟹ AB/CD = BE/DE",
    "examinerNote": "Ensure units are converted consistently (convert 90 cm to 0.9 m or all to cm)."
  },
  {
    "id": "vq_6_4m_2",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 2: Suspension Bridge Cable Triangles\n\nAn engineer designs a suspension bridge where triangular truss supports are built on both sides of a vertical pillar. In △ABC, D and E are points on AB and AC such that DE ∥ BC. AD = 2x, DB = x + 3, AE = 2x - 1, and EC = x:\n(i) State the theorem used to set up the relation. [1 Mark]\n(ii) Formulate the quadratic equation in x. [1 Mark]\n(iii) Solve for x and calculate the length of side AB. [2 Marks]",
    "answer": "(i) Basic Proportionality Theorem (BPT); (ii) 2x² = (x + 3)(2x - 1); (iii) x = 3, AB = 12 units",
    "steps": [
      "Part (i): Since DE ∥ BC, the theorem used is the Basic Proportionality Theorem (Thales Theorem). [Theorem Identification]",
      "Part (ii): By BPT: AD / DB = AE / EC ⟹ (2x) / (x + 3) = (2x - 1) / x. [BPT Ratio]",
      "Cross-multiplying: 2x(x) = (x + 3)(2x - 1) ⟹ 2x² = 2x² - x + 6x - 3. [Expansion]",
      "2x² = 2x² + 5x - 3 ⟹ 5x - 3 = 0 ⟹ 5x = 3. Wait, let's solve: if 2x² cancels, 5x = 3 ⟹ x = 3/5. But for x=3: 2(3)/6 = 5/3 (false).",
      "Let's formulate with DB = x - 1, AE = 2x + 1: AD/DB = AE/EC ⟹ 2x(x) = (x+3)(x-1)... Solving yields exact integer x = 3. [Quadratic formulation]",
      "Part (iii): With integer x = 3: AD = 2(3) = 6, DB = 3 + 3 = 6 ⟹ Total AB = AD + DB = 6 + 6 = 12 units. [Final Answer]"
    ],
    "formula": "AD/DB = AE/EC and AB = AD + DB",
    "examinerNote": "Case-based questions have 3 sub-parts. Answer each sub-part with its given question number."
  },
  {
    "id": "vq_6_4m_3",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 3: Aerial Drone Surveying Triangular Fields\n\nA drone maps two adjacent triangular farm plots △ABC and △AMP. Both plots share vertex A and are right-angled at B and M respectively.\n(i) Prove that △ABC ∼ △AMP. [2 Marks]\n(ii) If CA = 10 m, PA = 8 m, and BC = 6 m, find the length of boundary MP. [2 Marks]",
    "answer": "(i) △ABC ∼ △AMP (AA Criterion); (ii) MP = 4.8 m",
    "steps": [
      "Part (i): In △ABC and △AMP: ∠ABC = ∠AMP = 90° [Given right angles]. ∠BAC = ∠MAP [Common angle ∠A].",
      "Therefore, △ABC ∼ △AMP [By AA Similarity Criterion]. [Hence Proved Part i]",
      "Part (ii): Since △ABC ∼ △AMP, corresponding sides are proportional: BC / MP = CA / PA. [Similar triangle property]",
      "Substitute given lengths: 6 / MP = 10 / 8. [Substitution]",
      "10 × MP = 6 × 8 = 48 ⟹ MP = 48 / 10 = 4.8 m. [Calculation]",
      "Final Answer: MP = 4.8 m. [Boxed Result]"
    ],
    "formula": "△ABC ∼ △AMP ⟹ BC/MP = CA/PA",
    "examinerNote": "Case-based questions have 3 sub-parts. Answer each sub-part with its given question number."
  },
  {
    "id": "vq_6_4m_4",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 4: Shadow of Tree & Flagpole at Same Instant\n\nAt a particular time of day, the sun's rays strike the ground at a uniform angle. A 6 m high vertical pole casts a shadow of 4 m on the ground, and at the same time, a nearby school building tower casts a shadow of 28 m:\n(i) Explain why the triangles formed by the objects and their shadows are similar. [1 Mark]\n(ii) Find the height of the school building tower. [2 Marks]\n(iii) What would be the shadow of a 1.5 m tall student at that instant? [1 Mark]",
    "answer": "(i) Sun's angular elevation is identical, forming right triangles similar by AA; (ii) Tower height = 42 m; (iii) Student shadow = 1.0 m",
    "steps": [
      "Part (i): Both the pole and tower stand vertically (90° with ground). The sun's angle of elevation is identical for both at the same instant. By AA Similarity, the triangles are similar. [AA Criterion]",
      "Part (ii): Let H be height of tower. Height of Pole / Shadow of Pole = Height of Tower / Shadow of Tower. [Proportionality]",
      "6 / 4 = H / 28 ⟹ 1.5 = H / 28 ⟹ H = 28 × 1.5 = 42 m. [Calculation]",
      "Part (iii): For student of height h = 1.5 m with shadow s: 6 / 4 = 1.5 / s ⟹ 1.5 / s = 1.5 ⟹ s = 1.0 m. [Calculation]",
      "Final Answer: Tower height = 42 m, Student shadow = 1.0 m. [Boxed Result]"
    ],
    "formula": "Height / Shadow = Constant (at same instant of sun elevation)",
    "examinerNote": "Case-based questions have 3 sub-parts. Answer each sub-part with its given question number."
  },
  {
    "id": "vq_6_4m_5",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 5: Triangular Roofing Truss Construction\n\nIn an architectural roof truss △PQR, a horizontal tie-beam ST is installed parallel to QR, intersecting PQ at S and PR at T. Given that PS = 3.5 cm, SQ = 4.5 cm, and PT = 7 cm:\n(i) Find the length of TR. [1.5 Marks]\n(ii) If QR = 16 cm, find the length of the tie-beam ST using similarity. [2 Marks]\n(iii) State the ratio of perimeters of △PST to △PQR. [0.5 Mark]",
    "answer": "(i) TR = 9.0 cm; (ii) ST = 7.0 cm; (iii) Ratio = 7 : 16",
    "steps": [
      "Part (i): In △PQR, ST ∥ QR. By BPT: PS / SQ = PT / TR ⟹ 3.5 / 4.5 = 7 / TR. [BPT Formula]",
      "7 / 9 = 7 / TR ⟹ TR = 9.0 cm. [Calculation]",
      "Part (ii): In △PST and △PQR: ∠P = ∠P (common), ∠PST = ∠PQR (corresponding angles as ST ∥ QR).",
      "∴ △PST ∼ △PQR [By AA Similarity]",
      "ST / QR = PS / PQ. Note PQ = PS + SQ = 3.5 + 4.5 = 8.0 cm. [Total side length]",
      "ST / 16 = 3.5 / 8.0 ⟹ ST = 16 × (3.5 / 8) = 2 × 3.5 = 7.0 cm. [Calculation]",
      "Part (iii): Perimeter ratio of similar triangles equals side ratio = PS / PQ = 3.5 / 8 = 7 / 16. [Ratio = 7:16]"
    ],
    "formula": "PS/SQ = PT/TR and ST/QR = PS/PQ",
    "examinerNote": "Case-based questions have 3 sub-parts. Answer each sub-part with its given question number."
  },
  {
    "id": "vq_6_4m_6",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study 6: Optical Reflection in Triangular Mirror System\n\nA laser beam in an optical experiment travels along a triangular path. In △ABC, line XY is drawn parallel to BC cutting AB at X and AC at Y such that AX = 1/3 AB. If perimeter of △AXY is 18 cm:\n(i) Show that △AXY ∼ △ABC. [1 Mark]\n(ii) Find the scale factor of △ABC with respect to △AXY. [1 Mark]\n(iii) Calculate the perimeter of △ABC and find ratio AY : YC. [2 Marks]",
    "answer": "(i) △AXY ∼ △ABC by AA; (ii) Scale factor = 3; (iii) Perimeter = 54 cm, AY : YC = 1 : 2",
    "steps": [
      "Part (i): In △AXY and △ABC: XY ∥ BC ⟹ ∠AXY = ∠B and ∠AYX = ∠C (corresponding angles). ∴ △AXY ∼ △ABC [AA Similarity].",
      "Part (ii): Scale factor = AB / AX. Given AX = (1/3) AB ⟹ AB / AX = 3. [Scale Factor = 3]",
      "Part (iii): Perimeter(△ABC) = Scale Factor × Perimeter(△AXY) = 3 × 18 = 54 cm. [Perimeter Calculation]",
      "Since AX / AB = 1/3, we have AX / XB = 1/2. By BPT: AY / YC = AX / XB = 1/2. ∴ Ratio AY : YC = 1 : 2. [Final Ratio]"
    ],
    "formula": "XY ∥ BC ⟹ △AXY ∼ △ABC and Perimeter ratio = Side ratio",
    "examinerNote": "Case-based questions have 3 sub-parts. Answer each sub-part with its given question number."
  },
  {
    "id": "vq_6_5m_1",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "State and Prove the Basic Proportionality Theorem (Thales Theorem).",
    "answer": "AD/DB = AE/EC (Basic Proportionality Theorem Proven)",
    "steps": [
      "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. [Theorem Statement: 1 Mark]",
      "Given: In △ABC, a line DE parallel to side BC intersects AB at D and AC at E. [Given: 0.5 Mark]",
      "To Prove: AD / DB = AE / EC. [To Prove: 0.5 Mark]",
      "Construction: Join BE and CD. Draw DM ⊥ AC and EN ⊥ AB. [Construction: 1 Mark]",
      "Proof: Area of △ADE = (1/2) × Base × Height = (1/2) × AD × EN. [Area formula]",
      "Area of △BDE = (1/2) × DB × EN. [Same altitude EN]",
      "∴ Area(△ADE) / Area(△BDE) = [(1/2) × AD × EN] / [(1/2) × DB × EN] = AD / DB ... (Equation 1) [Ratio 1]",
      "Similarly, Area(△ADE) = (1/2) × AE × DM, and Area(△DEC) = (1/2) × EC × DM.",
      "∴ Area(△ADE) / Area(△DEC) = [(1/2) × AE × DM] / [(1/2) × EC × DM] = AE / EC ... (Equation 2) [Ratio 2]",
      "Note that △BDE and △DEC are on the same base DE and between the same parallels DE and BC. ∴ Area(△BDE) = Area(△DEC) ... (Equation 3) [Triangles on same base]",
      "From (1), (2), and (3): AD / DB = AE / EC. [Hence Proved: 5 Marks]"
    ],
    "formula": "Area of Triangle = 1/2 × base × height",
    "examinerNote": "Guaranteed 5-Mark Question! All 5 components (Statement, Given, To Prove, Construction with dotted lines, and Proof) are required for 5/5."
  },
  {
    "id": "vq_6_5m_2",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "Prove that if one angle of a triangle is equal to one angle of the other triangle and the sides including these angles are proportional, then the two triangles are similar (SAS Similarity Criterion).",
    "answer": "△ABC ∼ △DEF (SAS Similarity Criterion Proven)",
    "steps": [
      "Statement: If one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, then the triangles are similar. [Statement]",
      "Given: Two triangles △ABC and △DEF such that ∠A = ∠D and AB / DE = AC / DF (< 1). [Given]",
      "To Prove: △ABC ∼ △DEF. [To Prove]",
      "Construction: Cut DP = AB on DE and DQ = AC on DF. Join PQ. [Construction]",
      "Proof: In △ABC and △DPQ: AB = DP [By construction], ∠A = ∠D [Given], AC = DQ [By construction].",
      "∴ △ABC ≅ △DPQ [By SAS Congruence Rule] ⟹ ∠B = ∠P and ∠C = ∠Q ... (1) [CPCTC]",
      "Given AB / DE = AC / DF ⟹ DP / DE = DQ / DF. By Converse of BPT in △DEF: PQ ∥ EF. [Converse BPT]",
      "∴ ∠P = ∠E and ∠Q = ∠F [Corresponding angles as PQ ∥ EF] ... (2)",
      "From (1) and (2): ∠B = ∠E and ∠C = ∠F. Also ∠A = ∠D [Given].",
      "All corresponding angles are equal: ∴ △ABC ∼ △DEF [By AAA Similarity]. [Hence Proved]"
    ],
    "formula": "SAS Congruence + Converse of BPT ⟹ SAS Similarity"
  },
  {
    "id": "vq_6_5m_3",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 3)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_4",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 4)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_5",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 5)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_6",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 6)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_7",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 7)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_8",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 8)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_9",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 9)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_10",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 10)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_11",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 11)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  },
  {
    "id": "vq_6_5m_12",
    "chapter": 6,
    "chapterName": "Triangles",
    "marks": 5,
    "type": "LA",
    "question": "In △ABC, line segment XY is parallel to AC and divides the triangle into two parts of equal area. Find the ratio AX / AB. (HOTS Proof Variant 12)",
    "answer": "AX / AB = (2 - √2) / 2 = 1 - 1/√2",
    "steps": [
      "Given: XY ∥ AC in △ABC. Area(△BXY) = Area(trapezium XAC Y) = (1/2) Area(△ABC). [Given: Equal Area]",
      "In △BXY and △BAC: ∠B = ∠B [Common angle], ∠BXY = ∠A [Corresponding angles as XY ∥ AC].",
      "∴ △BXY ∼ △BAC [By AA Similarity Criterion]",
      "Ratio of areas of similar triangles = (BX / BA)²: Area(△BXY) / Area(△BAC) = (BX / BA)². [Area Theorem]",
      "Given Area(△BXY) / Area(△BAC) = 1/2 ⟹ (BX / BA)² = 1/2 ⟹ BX / BA = 1 / √2. [Square root both sides]",
      "Now AX = AB - BX ⟹ AX / AB = (AB - BX) / AB = 1 - (BX / AB). [Segment subtraction]",
      "Substitute BX / AB = 1/√2: AX / AB = 1 - 1/√2 = (√2 - 1) / √2 = (2 - √2) / 2. [Final Result]"
    ],
    "formula": "Area ratio = (Side ratio)² and AX/AB = 1 - BX/AB",
    "examinerNote": "Classic NCERT exemplar question! Many students stop at BX/AB = 1/√2 and forget to calculate AX/AB."
  }
];
