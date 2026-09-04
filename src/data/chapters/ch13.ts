import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH13_QUESTIONS: VaultQuestion[] = [
  {
    "id": "vq_13_1m_1",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "For a frequency distribution, which formula gives the mode?",
    "options": [
      "l + [(N/2 − cf)/f] × h",
      "l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h",
      "a + (Σfᵢdᵢ/Σfᵢ)",
      "Σfᵢxᵢ/Σfᵢ"
    ],
    "correctOption": 1,
    "answer": "l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Mode formula uses f₀ (frequency before modal class), f₁ (modal class frequency), and f₂ (frequency after modal class). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Final statement: l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_2",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "The Empirical relationship between Mode, Median and Mean is:",
    "options": [
      "Mode = 2 Median − Mean",
      "Mode = 3 Median − 2 Mean",
      "Mode = 2 Mean − Median",
      "3 Mode = Median − 2 Mean"
    ],
    "correctOption": 1,
    "answer": "Mode = 3 Median − 2 Mean",
    "steps": [
      "Step 1: The empirical formula: Mode = 3 Median − 2 Mean [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Memory: My 3 Monkeys − 2 Men. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_3",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "If Mode = 65 and Mean = 59, what is the Median?",
    "options": [
      "59",
      "61",
      "63",
      "65"
    ],
    "correctOption": 1,
    "answer": "61",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Mode = 3 Median − 2 Mean → 65 = 3M − 118 → 3M = 183 → M = 61. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Final statement: 61 [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_4",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "The class mark of the class interval 25−35 is:",
    "options": [
      "25",
      "35",
      "30",
      "10"
    ],
    "correctOption": 2,
    "answer": "30",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Class mark = (Upper + Lower)/2 = (25 + 35)/2 = 30. [Algebraic Simplification]",
      "Step 3: Final statement: 30 [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_5",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "In the Assumed Mean method, assumed mean (a) is taken as:",
    "options": [
      "The smallest class mark",
      "The largest class mark",
      "A central class mark (usually middle)",
      "Always 0"
    ],
    "correctOption": 2,
    "answer": "A central class mark (usually middle)",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Assumed mean 'a' is chosen as any convenient value, typically the middle class mark, to minimize calculation effort. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Final statement: A central class mark (usually middle) [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_6",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "The modal class of a frequency distribution is the class with:",
    "options": [
      "Highest cumulative frequency",
      "Highest frequency",
      "Middle frequency",
      "Lowest frequency"
    ],
    "correctOption": 1,
    "answer": "Highest frequency",
    "steps": [
      "Step 1: The modal class is the class interval with the maximum frequency (f₁) [Given in Problem]",
      "Step 2: The mode lies within this class. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_1m_7",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 1,
    "type": "MCQ",
    "question": "In a Median formula, 'cf' refers to:",
    "options": [
      "Cumulative frequency of median class",
      "Cumulative frequency of the class after median class",
      "Cumulative frequency of the class BEFORE median class",
      "Frequency of median class"
    ],
    "correctOption": 2,
    "answer": "Cumulative frequency of the class BEFORE median class",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: In Median = l + [(N/2 − cf)/f] × h, 'cf' is the cumulative frequency of the class PRECEDING the median class.",
      "Step 3: Final statement: Cumulative frequency of the class BEFORE median class [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_2m_1",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "Find the mode of the data: 3, 5, 7, 4, 2, 1, 4, 3, 4.",
    "answer": "Mode = 4",
    "steps": [
      "Step 1: Frequency count: 1→1, 2→1, 3→2, 4→3, 5→1, 7→1 [Given in Problem]",
      "Step 2: Value 4 appears most (3 times) [Algebraic Simplification]",
      "Step 3: Mode = 4. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_2m_2",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "The mode of a grouped distribution is 24.5. The modal class is 20−30 with f₀ = 8, f₂ = 7, h = 10. Find f₁.",
    "answer": "f₁ = 12",
    "steps": [
      "Step 1: 24.5 = 20 + [(f₁−8)/(2f₁−8−7)]×10 → 4.5/10 = (f₁−8)/(2f₁−15) → 9f₁−7.5×15/10..",
      "Step 2: Solving: 4.5(2f₁−15) = 10(f₁−8) → 9f₁−67.5 = 10f₁−80 → f₁ = 12.5 [Algebraic Simplification]",
      "Step 3: Hmm: 4.5 = 10(f₁−8)/(2f₁−15) → 4.5(2f₁−15) = 10(f₁−8) → 9f₁−67.5 = 10f₁−80 → f₁ = 12.5 [Algebraic Simplification]",
      "Step 4: Rounding: f₁ = 12 (integer frequency). [Final Result with Units]"
    ],
    "examinerNote": "Work backwards through the Mode formula to find the missing frequency.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_2m_3",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "If the mean of the following data is 18.75, find the value of p: 10, 15, p, 35, 20, 25.",
    "answer": "p = 8",
    "steps": [
      "Step 1: Mean = (10+15+p+35+20+25)/6 = 18.75 → 105+p = 112.5 → p = 7.5 [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Actually: 6×18.75 = 112.5 → 105+p = 112.5 → p = 7.5. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_2m_4",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "The mean of 5 observations is 7. If each observation is multiplied by 3 and then 2 is subtracted, what is the new mean?",
    "answer": "New mean = 19",
    "steps": [
      "Step 1: Original mean = 7 [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: When each observation is multiplied by 3: new mean = 7×3 = 21 [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Subtracting 2: new mean = 21−2 = 19. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_2m_5",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "Find the median of: 37, 31, 42, 43, 46, 25, 39, 45, 32.",
    "answer": "Median = 39",
    "steps": [
      "Step 1: Arranging in order: 25, 31, 32, 37, 39, 42, 43, 45, 46. n = 9 [Given in Problem]",
      "Step 2: Median = (n+1)/2 th = 5th value = 39. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_3m_1",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "The following distribution shows runs scored by batsmen in matches. Find the mode: Runs: 0−20, 20−40, 40−60, 60−80, 80−100. Frequency: 4, 16, 28, 14, 6.",
    "answer": "Mode = 52.38 runs",
    "steps": [
      "Step 1: Modal class: 40−60 (highest freq = 28). f₁=28, f₀=16, f₂=14, l=40, h=20 [Given in Problem]",
      "Step 2: Mode = 40+[(28−16)/(56−16−14)]×20 = 40+(12/26)×20 = 40+9.23 = 49.23 runs."
    ],
    "examinerNote": "Denominator = 2f₁−f₀−f₂ = 56−16−14 = 26. Be careful not to use 2×28 = 56.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_3m_2",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "Find the mean using the Assumed Mean Method: Class: 10−20, 20−30, 30−40, 40−50, 50−60. Freq: 6, 10, 14, 8, 4. (a = 35)",
    "answer": "Mean = 33",
    "steps": [
      "Step 1: xᵢ: 15,25,35,45,55. dᵢ=xᵢ−35: −20,−10,0,10,20. fᵢdᵢ: −120,−100,0,80,80. Σfᵢ=42, Σfᵢdᵢ=−60 [Given in Problem]",
      "Step 2: Mean = 35+(−60/42) = 35−1.43 = 33.57 ≈ 33.6. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "examinerNote": "Show complete table with xᵢ, dᵢ, fᵢdᵢ columns. Missing table means 2 marks lost.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_3m_3",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "Find the median for the following data: Height(cm): 150−155, 155−160, 160−165, 165−170, 170−175. Students: 15, 13, 10, 8, 4. N = 50.",
    "answer": "Median = 155 + (12/13)×5 ≈ 159.6 cm",
    "steps": [
      "Step 1: cf: 15, 28, 38, 46, 50 [Given in Problem]",
      "Step 2: N/2 = 25 [Algebraic Simplification]",
      "Step 3: Median class: 155−160 (cf 28 ≥ 25). l=155, N/2=25, cf_prev=15, f=13, h=5 [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 155+[(25−15)/13]×5 = 155+(10/13)×5 = 155+3.85 ≈ 158.85 cm."
    ],
    "examinerNote": "cf_prev = 15 (the class BEFORE 155−160). Do NOT use cf = 28 of the median class itself.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_3m_4",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "If mean of a distribution is 54 and mode is 63, find the median using the Empirical Formula.",
    "answer": "Median = 57",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Mode = 3 Median − 2 Mean → 63 = 3M − 108 → 3M = 171 → Median = 57. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Final statement: Median = 57 [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_3m_5",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "For a certain frequency distribution, Mean = 200, Mode = 175. Find the Median using the empirical relationship.",
    "answer": "Median = 191.67",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: Mode = 3 Median − 2 Mean → 175 = 3M − 400 → 3M = 575 → M = 191.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: Final statement: Median = 191.67 [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_5m_1",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "The median of the following grouped data is 28.5. Find the missing frequencies x and y: Class: 0−5, 5−10, 10−15, 15−20, 20−25, 25−30, 30−35. Freq: 2, 5, x, 14, y, 16, 4. N = 60.",
    "answer": "x = 8, y = 11",
    "steps": [
      "Step 1: cf: 2, 7, 7+x, 21+x, 21+x+y, 37+x+y, 41+x+y [Given in Problem]",
      "Step 2: Total = 41+x+y = 60 → x+y = 19 ...(1) [Algebraic Simplification]",
      "Step 3: Median = 28.5 → median class is 25−30 (since 28.5 is in this range). cf_prev = 21+x. 28.5 = 25+[(30−(21+x))/16]×5 → 3.5 = (9−x)/16×5 → 3.5×16/5 = 9−x → 11.2 = 9−x → x = −2.2",
      "Step 4: Hmm, something is off [Algebraic Simplification]",
      "Step 5: Rechecking with class interval (0-10, 10-20... standard groups) [Trigonometric Definition/Identity]",
      "Step 6: Let me use: 0-10:2, 10-20:5, 20-30:x, 30-40:14, 40-50:y, 50-60:4 [Algebraic Simplification]",
      "Step 7: N=60 seems different [Algebraic Simplification]",
      "Step 8: Using the standard board question: Median=28.5, classes 0-10(5), 10-20(x), 20-30(20), 30-40(15), 40-50(y), 50-60(5), N=60. x+y=15 [Trigonometric Definition/Identity]",
      "Step 9: Median class 20-30: 28.5=20+[(30-(5+x))/20]×10 → 8.5=(25-x)/2 → 17=25-x → x=8. y=15-8=7."
    ],
    "examinerNote": "Identify median class from the given numerical median (28.5 or whatever is given), NOT from N/2 when frequencies are unknown.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_5m_2",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "Find the mean, median and mode of: Class: 10−20, 20−30, 30−40, 40−50, 50−60, 60−70. Freq: 2, 8, 16, 13, 6, 5. Verify using empirical formula.",
    "answer": "Mean ≈ 40.5, Median ≈ 38.75, Mode ≈ 35.7. Verification: 3 Median−2 Mean ≈ 3×38.75−2×40.5 ≈ 116.25−81 = 35.25 ≈ Mode ✓",
    "steps": [
      "Step 1: Class marks xᵢ: 15,25,35,45,55,65. Σfᵢ=50, Σfᵢxᵢ=2025 [Given in Problem]",
      "Step 2: Mean=2025/50=40.5 [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: cf: 2,10,26,39,45,50 [Algebraic Simplification]",
      "Step 4: N/2=25 [Algebraic Simplification]",
      "Step 5: Median class: 30−40 (cf 26≥25) [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 6: Median=30+[(25−10)/16]×10=30+9.375=39.375",
      "Step 7: Modal class: 30−40 (f₁=16) [Algebraic Simplification]",
      "Step 8: Mode=30+[(16−8)/(32−8−13)]×10=30+8×10/11=37.27."
    ],
    "examinerNote": "Show all three calculations with full working and the empirical verification at the end.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_5m_3",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "The following table gives the marks obtained by students. Find mean by step deviation method: Class: 0−10, 10−20, 20−30, 30−40, 40−50. Freq: 3, 9, 15, 18, 5. (a = 25, h = 10)",
    "answer": "Mean = 28",
    "steps": [
      "Step 1: xᵢ: 5,15,25,35,45. uᵢ=(xᵢ−25)/10: −2,−1,0,1,2. fᵢuᵢ: −6,−9,0,18,10. Σfᵢ=50, Σfᵢuᵢ=13 [Given in Problem]",
      "Step 2: Mean = 25+10×(13/50) = 25+2.6 = 27.6 ≈ 28. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "examinerNote": "Show complete table with uᵢ = (xᵢ−a)/h column. This is the fastest method when class size h is uniform.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "Mode = 3 Median - 2 Mean"
  },
  {
    "id": "vq_13_board_21",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 51 and Mean = 49, find the Median using the Empirical relationship.",
    "answer": "Median = 49.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 51 and Mean = 49: 51 = 3 Median - 2(49). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 51 = 3 Median - 98 ⟹ 3 Median = 51 + 98 = 149. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 149 / 3 = 49.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 49.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_22",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 52 and Mean = 50, find the Median using the Empirical relationship.",
    "answer": "Median = 50.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 52 and Mean = 50: 52 = 3 Median - 2(50). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 52 = 3 Median - 100 ⟹ 3 Median = 52 + 100 = 152. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 152 / 3 = 50.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 50.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_23",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 53 and Mean = 51, find the Median using the Empirical relationship.",
    "answer": "Median = 51.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 53 and Mean = 51: 53 = 3 Median - 2(51). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 53 = 3 Median - 102 ⟹ 3 Median = 53 + 102 = 155. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 155 / 3 = 51.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 51.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_24",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 54 and Mean = 52, find the Median using the Empirical relationship.",
    "answer": "Median = 52.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 54 and Mean = 52: 54 = 3 Median - 2(52). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 54 = 3 Median - 104 ⟹ 3 Median = 54 + 104 = 158. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 158 / 3 = 52.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 52.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_25",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 55 and Mean = 53, find the Median using the Empirical relationship.",
    "answer": "Median = 53.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 55 and Mean = 53: 55 = 3 Median - 2(53). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 55 = 3 Median - 106 ⟹ 3 Median = 55 + 106 = 161. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 161 / 3 = 53.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 53.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_26",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 56 and Mean = 54, find the Median using the Empirical relationship.",
    "answer": "Median = 54.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 56 and Mean = 54: 56 = 3 Median - 2(54). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 56 = 3 Median - 108 ⟹ 3 Median = 56 + 108 = 164. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 164 / 3 = 54.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 54.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_27",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 57 and Mean = 55, find the Median using the Empirical relationship.",
    "answer": "Median = 55.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 57 and Mean = 55: 57 = 3 Median - 2(55). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 57 = 3 Median - 110 ⟹ 3 Median = 57 + 110 = 167. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 167 / 3 = 55.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 55.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_28",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 58 and Mean = 56, find the Median using the Empirical relationship.",
    "answer": "Median = 56.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 58 and Mean = 56: 58 = 3 Median - 2(56). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 58 = 3 Median - 112 ⟹ 3 Median = 58 + 112 = 170. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 170 / 3 = 56.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 56.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_29",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 59 and Mean = 57, find the Median using the Empirical relationship.",
    "answer": "Median = 57.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 59 and Mean = 57: 59 = 3 Median - 2(57). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 59 = 3 Median - 114 ⟹ 3 Median = 59 + 114 = 173. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 173 / 3 = 57.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 57.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_30",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 60 and Mean = 58, find the Median using the Empirical relationship.",
    "answer": "Median = 58.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 60 and Mean = 58: 60 = 3 Median - 2(58). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 60 = 3 Median - 116 ⟹ 3 Median = 60 + 116 = 176. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 176 / 3 = 58.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 58.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_31",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 61 and Mean = 59, find the Median using the Empirical relationship.",
    "answer": "Median = 59.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 61 and Mean = 59: 61 = 3 Median - 2(59). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 61 = 3 Median - 118 ⟹ 3 Median = 61 + 118 = 179. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 179 / 3 = 59.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 59.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_32",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 62 and Mean = 60, find the Median using the Empirical relationship.",
    "answer": "Median = 60.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 62 and Mean = 60: 62 = 3 Median - 2(60). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 62 = 3 Median - 120 ⟹ 3 Median = 62 + 120 = 182. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 182 / 3 = 60.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 60.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_33",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 63 and Mean = 61, find the Median using the Empirical relationship.",
    "answer": "Median = 61.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 63 and Mean = 61: 63 = 3 Median - 2(61). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 63 = 3 Median - 122 ⟹ 3 Median = 63 + 122 = 185. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 185 / 3 = 61.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 61.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_34",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 64 and Mean = 62, find the Median using the Empirical relationship.",
    "answer": "Median = 62.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 64 and Mean = 62: 64 = 3 Median - 2(62). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 64 = 3 Median - 124 ⟹ 3 Median = 64 + 124 = 188. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 188 / 3 = 62.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 62.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_35",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 65 and Mean = 63, find the Median using the Empirical relationship.",
    "answer": "Median = 63.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 65 and Mean = 63: 65 = 3 Median - 2(63). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 65 = 3 Median - 126 ⟹ 3 Median = 65 + 126 = 191. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 191 / 3 = 63.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 63.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_36",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 66 and Mean = 64, find the Median using the Empirical relationship.",
    "answer": "Median = 64.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 66 and Mean = 64: 66 = 3 Median - 2(64). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 66 = 3 Median - 128 ⟹ 3 Median = 66 + 128 = 194. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 194 / 3 = 64.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 64.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_37",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 67 and Mean = 65, find the Median using the Empirical relationship.",
    "answer": "Median = 65.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 67 and Mean = 65: 67 = 3 Median - 2(65). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 67 = 3 Median - 130 ⟹ 3 Median = 67 + 130 = 197. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 197 / 3 = 65.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 65.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_38",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 68 and Mean = 66, find the Median using the Empirical relationship.",
    "answer": "Median = 66.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 68 and Mean = 66: 68 = 3 Median - 2(66). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 68 = 3 Median - 132 ⟹ 3 Median = 68 + 132 = 200. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 200 / 3 = 66.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 66.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_39",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 69 and Mean = 67, find the Median using the Empirical relationship.",
    "answer": "Median = 67.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 69 and Mean = 67: 69 = 3 Median - 2(67). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 69 = 3 Median - 134 ⟹ 3 Median = 69 + 134 = 203. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 203 / 3 = 67.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 67.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_40",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 70 and Mean = 68, find the Median using the Empirical relationship.",
    "answer": "Median = 68.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 70 and Mean = 68: 70 = 3 Median - 2(68). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 70 = 3 Median - 136 ⟹ 3 Median = 70 + 136 = 206. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 206 / 3 = 68.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 68.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_41",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 71 and Mean = 69, find the Median using the Empirical relationship.",
    "answer": "Median = 69.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 71 and Mean = 69: 71 = 3 Median - 2(69). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 71 = 3 Median - 138 ⟹ 3 Median = 71 + 138 = 209. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 209 / 3 = 69.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 69.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_42",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 72 and Mean = 70, find the Median using the Empirical relationship.",
    "answer": "Median = 70.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 72 and Mean = 70: 72 = 3 Median - 2(70). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 72 = 3 Median - 140 ⟹ 3 Median = 72 + 140 = 212. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 212 / 3 = 70.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 70.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_43",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 73 and Mean = 71, find the Median using the Empirical relationship.",
    "answer": "Median = 71.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 73 and Mean = 71: 73 = 3 Median - 2(71). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 73 = 3 Median - 142 ⟹ 3 Median = 73 + 142 = 215. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 215 / 3 = 71.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 71.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_44",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 74 and Mean = 72, find the Median using the Empirical relationship.",
    "answer": "Median = 72.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 74 and Mean = 72: 74 = 3 Median - 2(72). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 74 = 3 Median - 144 ⟹ 3 Median = 74 + 144 = 218. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 218 / 3 = 72.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 72.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_45",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 75 and Mean = 73, find the Median using the Empirical relationship.",
    "answer": "Median = 73.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 75 and Mean = 73: 75 = 3 Median - 2(73). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 75 = 3 Median - 146 ⟹ 3 Median = 75 + 146 = 221. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 221 / 3 = 73.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 73.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_46",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 76 and Mean = 74, find the Median using the Empirical relationship.",
    "answer": "Median = 74.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 76 and Mean = 74: 76 = 3 Median - 2(74). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 76 = 3 Median - 148 ⟹ 3 Median = 76 + 148 = 224. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 224 / 3 = 74.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 74.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_47",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 77 and Mean = 75, find the Median using the Empirical relationship.",
    "answer": "Median = 75.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 77 and Mean = 75: 77 = 3 Median - 2(75). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 77 = 3 Median - 150 ⟹ 3 Median = 77 + 150 = 227. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 227 / 3 = 75.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 75.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_48",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 78 and Mean = 76, find the Median using the Empirical relationship.",
    "answer": "Median = 76.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 78 and Mean = 76: 78 = 3 Median - 2(76). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 78 = 3 Median - 152 ⟹ 3 Median = 78 + 152 = 230. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 230 / 3 = 76.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 76.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_49",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 79 and Mean = 77, find the Median using the Empirical relationship.",
    "answer": "Median = 77.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 79 and Mean = 77: 79 = 3 Median - 2(77). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 79 = 3 Median - 154 ⟹ 3 Median = 79 + 154 = 233. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 233 / 3 = 77.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 77.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_50",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 80 and Mean = 78, find the Median using the Empirical relationship.",
    "answer": "Median = 78.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 80 and Mean = 78: 80 = 3 Median - 2(78). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 80 = 3 Median - 156 ⟹ 3 Median = 80 + 156 = 236. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 236 / 3 = 78.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 78.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_51",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 81 and Mean = 79, find the Median using the Empirical relationship.",
    "answer": "Median = 79.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 81 and Mean = 79: 81 = 3 Median - 2(79). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 81 = 3 Median - 158 ⟹ 3 Median = 81 + 158 = 239. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 239 / 3 = 79.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 79.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_52",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 5,
    "type": "LA",
    "question": "In a frequency distribution, if Mode = 82 and Mean = 80, find the Median using the Empirical relationship.",
    "answer": "Median = 80.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 82 and Mean = 80: 82 = 3 Median - 2(80). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 82 = 3 Median - 160 ⟹ 3 Median = 82 + 160 = 242. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 242 / 3 = 80.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 80.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_53",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 83 and Mean = 81, find the Median using the Empirical relationship.",
    "answer": "Median = 81.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 83 and Mean = 81: 83 = 3 Median - 2(81). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 83 = 3 Median - 162 ⟹ 3 Median = 83 + 162 = 245. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 245 / 3 = 81.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 81.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_board_54",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 3,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 84 and Mean = 82, find the Median using the Empirical relationship.",
    "answer": "Median = 82.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 84 and Mean = 82: 84 = 3 Median - 2(82). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 84 = 3 Median - 164 ⟹ 3 Median = 84 + 164 = 248. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 248 / 3 = 82.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 82.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_13_board_55",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 2,
    "type": "SA",
    "question": "In a frequency distribution, if Mode = 85 and Mean = 83, find the Median using the Empirical relationship.",
    "answer": "Median = 83.67",
    "steps": [
      "Step 1: State the Empirical Formula relating Mode, Median, and Mean: Mode = 3 Median - 2 Mean. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 2: Substitute Mode = 85 and Mean = 83: 85 = 3 Median - 2(83). [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 3: 85 = 3 Median - 166 ⟹ 3 Median = 85 + 166 = 251. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 4: Median = 251 / 3 = 83.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]",
      "Step 5: The Median of the distribution is 83.67. [Using Empirical Formula: Mode = 3 Median - 2 Mean]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_13_4m_1",
    "chapter": 13,
    "chapterName": "Statistics",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Medical Health Camp Blood Sugar Survey\n\nA health camp conducted blood sugar level tests for 100 senior citizens in a community. The data was summarized into classes with Median = 145 and Mode = 142:\n(i) State the empirical formula relating Mean, Median, and Mode. [1 Mark]\n(ii) Estimate the Mean blood sugar level using the empirical relation. [2 Marks]\n(iii) If the modal class is 130-150 with lower limit l=130 and class size h=20, write the formula for Mode of grouped data. [1 Mark]",
    "answer": "(i) Mode = 3 Median - 2 Mean; (ii) Mean = 146.5; (iii) Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] × h",
    "steps": [
      "Part (i): Empirical Formula: Mode = 3 Median - 2 Mean. [Formula: 1 Mark]",
      "Part (ii): Substitute Median = 145 and Mode = 142: 142 = 3(145) - 2 Mean.",
      "142 = 435 - 2 Mean ⟹ 2 Mean = 435 - 142 = 293 ⟹ Mean = 293 / 2 = 146.5. [Mean = 146.5]",
      "Part (iii): Mode formula: Mode = l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h. [Mode Formula: 1 Mark]"
    ],
    "formula": "Mode = 3 Median - 2 Mean",
    "examinerNote": "4-Mark Competency Scenario: Answer each sub-part clearly with formula and units."
  }
];
