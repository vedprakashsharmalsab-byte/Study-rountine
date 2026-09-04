import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH14_QUESTIONS: VaultQuestion[] = [
  {
    "id": "vq_14_1m_1",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 3 red, 5 white and 7 black balls. The probability of drawing a white ball is:",
    "options": [
      "1/5",
      "1/3",
      "5/15",
      "5/7"
    ],
    "correctOption": 2,
    "answer": "5/15 = 1/3",
    "steps": [
      "Step 1: Total = 3+5+7 = 15 [Given in Problem]",
      "Step 2: P(white) = 5/15 = 1/3. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_2",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "Two dice are thrown simultaneously. The probability of getting a doublet is:",
    "options": [
      "1/6",
      "5/6",
      "1/36",
      "1/3"
    ],
    "correctOption": 0,
    "answer": "1/6",
    "steps": [
      "Step 1: Doublets: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6 outcomes [Given in Problem]",
      "Step 2: Total = 36 [Algebraic Simplification]",
      "Step 3: P = 6/36 = 1/6. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_3",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "From a well-shuffled pack of 52 cards, probability of drawing a face card is:",
    "options": [
      "3/13",
      "4/13",
      "1/13",
      "12/52"
    ],
    "correctOption": 0,
    "answer": "3/13",
    "steps": [
      "Step 1: Face cards = 4K+4Q+4J = 12 [Given in Problem]",
      "Step 2: P = 12/52 = 3/13. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_4",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "In a non-leap year, the probability of getting 53 Sundays is:",
    "options": [
      "1/7",
      "2/7",
      "53/365",
      "1/52"
    ],
    "correctOption": 0,
    "answer": "1/7",
    "steps": [
      "Step 1: 365 days = 52 weeks + 1 extra day [Given in Problem]",
      "Step 2: The extra day can be any of 7 days of the week [Algebraic Simplification]",
      "Step 3: P(Sunday) = 1/7. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_5",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "Two coins are tossed. The probability of getting exactly one head is:",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "2/3"
    ],
    "correctOption": 1,
    "answer": "1/2",
    "steps": [
      "Step 1: S = {HH, HT, TH, TT}. n(S) = 4 [Given in Problem]",
      "Step 2: Exactly 1 head = {HT, TH} = 2 [Algebraic Simplification]",
      "Step 3: P = 2/4 = 1/2. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_6",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "The probability of an event that is certain to happen is:",
    "options": [
      "0",
      "0.5",
      "1",
      "Cannot be determined"
    ],
    "correctOption": 2,
    "answer": "1",
    "steps": [
      "Step 1: A certain event always happens [Given in Problem]",
      "Step 2: By definition, P(certain event) = 1. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_1m_7",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A card is drawn from 52 cards. P(neither a king nor a queen) is:",
    "options": [
      "11/13",
      "2/13",
      "6/13",
      "1/13"
    ],
    "correctOption": 0,
    "answer": "11/13",
    "steps": [
      "Step 1: Kings+Queens = 8 [Given in Problem]",
      "Step 2: Neither = 52−8 = 44 [Algebraic Simplification]",
      "Step 3: P = 44/52 = 11/13. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_2m_1",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "Two coins are tossed simultaneously. Find the probability of getting: (i) at least one head, (ii) at most one head.",
    "answer": "(i) P = 3/4. (ii) P = 3/4.",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: S = {HH, HT, TH, TT}. (i) At least 1H = {HH,HT,TH} → P = 3/4. (ii) At most 1H = {TT,HT,TH} → P = 3/4. [Algebraic Simplification]",
      "Step 3: Final statement: (i) P = 3/4. (ii) P = 3/4. [Final Result with Units]"
    ],
    "examinerNote": "Both answers are 3/4 — but for different favourable sets! 'At least 1' excludes only TT; 'at most 1' excludes only HH.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_2m_2",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A card is drawn from a pack of 52 cards. Find the probability of getting: (i) a king of red suit, (ii) a face card.",
    "answer": "(i) P = 2/52 = 1/26. (ii) P = 12/52 = 3/13.",
    "steps": [
      "Step 1: Red suit kings = 2 (♥ and ♦) [Given in Problem]",
      "Step 2: Face cards = 4K+4Q+4J = 12. [Final Result with Units]"
    ],
    "examinerNote": "Red suit kings = 2 (NOT 4). Face cards = 12 (NOT 16 — Aces are not face cards!).",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_2m_3",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A die is thrown once. Find the probability of getting: (i) a prime number, (ii) a number between 2 and 6.",
    "answer": "(i) P = 1/2. (ii) P = 1/2.",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: (i) Primes on die: {2,3,5} → P = 3/6 = 1/2. (ii) Between 2 and 6 (exclusive): {3,4,5} → P = 3/6 = 1/2. [Algebraic Simplification]",
      "Step 3: Final statement: (i) P = 1/2. (ii) P = 1/2. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_2m_4",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "What is the probability that a leap year selected at random will have 53 Sundays?",
    "answer": "P = 2/7",
    "steps": [
      "Step 1: Leap year = 366 days = 52 weeks + 2 extra days [Given in Problem]",
      "Step 2: The 2 extra days can be any of: (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun) [Algebraic Simplification]",
      "Step 3: Pairs containing Sunday = 2 [Algebraic Simplification]",
      "Step 4: P = 2/7. [Final Result with Units]"
    ],
    "examinerNote": "Leap year has 2 extra days. List all 7 consecutive-day pairs. Only (Sun,Mon) and (Sat,Sun) contain Sunday.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_2m_5",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red and 8 white balls. If a ball is drawn at random, what is the probability that it is NOT red?",
    "answer": "P(not red) = 8/13",
    "steps": [
      "Step 1: P(red) = 5/13 [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 2: P(not red) = 1 − 5/13 = 8/13 [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: Or directly: white balls = 8, total = 13, P = 8/13. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_3m_1",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "One card is drawn from a well-shuffled deck of 52 cards. Find the probability of drawing: (i) a red king, (ii) a face card, (iii) neither an ace nor a king.",
    "answer": "(i) 1/26 (ii) 3/13 (iii) 11/13",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: (i) Red kings = 2 → P = 2/52 = 1/26. (ii) Face cards = 12 → P = 12/52 = 3/13. (iii) Aces+Kings = 8 → Neither = 44 → P = 44/52 = 11/13. [Algebraic Simplification]",
      "Step 3: Final statement: (i) 1/26 (ii) 3/13 (iii) 11/13 [Final Result with Units]"
    ],
    "examinerNote": "Aces are NOT face cards. Face cards = only K, Q, J (3 × 4 suits = 12 cards).",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_3m_2",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "Two dice are thrown simultaneously. Find the probability of getting: (i) sum = 8, (ii) a doublet, (iii) sum < 5.",
    "answer": "(i) 5/36 (ii) 1/6 (iii) 1/6",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: (i) Sum 8: (2,6)(3,5)(4,4)(5,3)(6,2) = 5 → P = 5/36. (ii) Doublets: 6 → P = 6/36 = 1/6. (iii) Sum < 5: (1,1)(1,2)(1,3)(2,1)(2,2)(3,1) = 6 → P = 6/36 = 1/6. [Algebraic Simplification]",
      "Step 3: Final statement: (i) 5/36 (ii) 1/6 (iii) 1/6 [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_3m_3",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A box contains 90 discs numbered 1 to 90. A disc is drawn at random. Find P: (i) 2-digit number, (ii) perfect square, (iii) divisible by 5.",
    "answer": "(i) 9/10 (ii) 1/10 (iii) 1/5",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: (i) 2-digit: 10−90 = 81 → P = 81/90 = 9/10. (ii) Perfect squares: {1,4,9,16,25,36,49,64,81} = 9 → P = 9/90 = 1/10. (iii) Divisible by 5: {5,10,...,90} = 18 → P = 18/90 = 1/5. [Algebraic Simplification]",
      "Step 3: Final statement: (i) 9/10 (ii) 1/10 (iii) 1/5 [Final Result with Units]"
    ],
    "examinerNote": "Two-digit numbers: count from 10 to 90 inclusive = 81 numbers (not 80!).",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_3m_4",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "Cards marked with numbers 13 to 60 are placed in a box and mixed thoroughly. One card is drawn. Find P: (i) divisible by 5, (ii) a perfect square, (iii) a number between 40 and 55.",
    "answer": "n(S) = 48. (i) {15,20,25,30,35,40,45,50,55,60}=10 → P=10/48=5/24. (ii) {16,25,36,49}=4 → P=4/48=1/12. (iii) 41 to 54 = 14 → P=14/48=7/24.",
    "steps": [
      "Step 1: Total cards = 60 − 13 + 1 = 48 [Given in Problem]",
      "Step 2: List each favourable set carefully. [Final Result with Units]"
    ],
    "examinerNote": "'Between 40 and 55' is exclusive: 41,42,...,54 = 14 numbers.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_3m_5",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "Three coins are tossed simultaneously. Find the probability of getting: (i) exactly 2 heads, (ii) at least 2 heads, (iii) at most 2 tails.",
    "answer": "(i) 3/8 (ii) 1/2 (iii) 7/8",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: S = {HHH,HHT,HTH,THH,HTT,THT,TTH,TTT} → n(S) = 8. (i) Exactly 2H: {HHT,HTH,THH} = 3 → P = 3/8. (ii) ≥2H: {HHH,HHT,HTH,THH} = 4 → P = 4/8 = 1/2. (iii) ≤2T: all except TTT = 7 → P = 7/8. [Algebraic Simplification]",
      "Step 3: Final statement: (i) 3/8 (ii) 1/2 (iii) 7/8 [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_5m_1",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 5,
    "type": "LA",
    "question": "A box contains 90 discs numbered 1 to 90. Find probability of drawing: (i) 2-digit number, (ii) perfect square, (iii) divisible by 5, (iv) prime less than 20, (v) odd number divisible by 3.",
    "answer": "(i) 9/10 (ii) 1/10 (iii) 1/5 (iv) 4/45 (v) 1/6",
    "steps": [
      "Step 1: State given values and applicable theorem/formula. [Given in Problem]",
      "Step 2: (i) 81/90=9/10. (ii) {1,4,9,16,25,36,49,64,81}=9 → 1/10. (iii) {5,10,...,90}=18 → 1/5. (iv) Primes<20: {2,3,5,7,11,13,17,19}=8 → 8/90=4/45. (v) Odd multiples of 3: {3,9,15,...,87}: 87=3+(n-1)×6 → n=15 → P=15/90=1/6. [Algebraic Simplification]",
      "Step 3: Final statement: (i) 9/10 (ii) 1/10 (iii) 1/5 (iv) 4/45 (v) 1/6 [Final Result with Units]"
    ],
    "examinerNote": "Prime < 20: Don't forget 2! And don't include 1 (not prime). Odd multiples of 3 = {3,9,15,21,...,87} = AP with first=3, last=87, d=6.",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)"
  },
  {
    "id": "vq_14_5m_2",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 5,
    "type": "LA",
    "question": "All kings, queens and aces are removed from a pack of 52 cards. The remaining cards are well-shuffled and one card is drawn at random. Find: (i) P(black face card), (ii) P(red card), (iii) P(a '10'), (iv) P(a '7').",
    "answer": "Remaining = 52−4−4−4 = 40 cards. (i) Black face cards remaining = only Jacks(black) = 2 → 2/40 = 1/20. (ii) Red cards: 26−6(3red kings+3red queens+3red aces? No: 2red kings+2red queens+2red aces removed = 6 removed) → 26−6=20 red → 20/40=1/2. (iii) '10' cards = 4 → 4/40 = 1/10. (iv) '7' cards = 4 → 4/40 = 1/10.",
    "steps": [
      "Step 1: Removed: 4K + 4Q + 4A = 12 [Given in Problem]",
      "Step 2: Remaining = 40 [Algebraic Simplification]",
      "Step 3: Black face cards left = 2 Jacks (black) [Algebraic Simplification]",
      "Step 4: Red remaining = 26−6 = 20. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_5m_3",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 5,
    "type": "LA",
    "question": "Two dice are thrown together. Find probability of getting: (i) sum = 7, (ii) sum is a prime, (iii) same number on both, (iv) sum ≤ 9, (v) sum is even.",
    "answer": "(i) 1/6 (ii) 5/12 (iii) 1/6 (iv) 5/6 (v) 1/2",
    "steps": [
      "Step 1: (i) Sum 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 → 6/36=1/6. (ii) Primes in sums: 2,3,5,7,11 [Given in Problem]",
      "Step 2: Count: sum2(1)+sum3(2)+sum5(4)+sum7(6)+sum11(2)=15 → 15/36=5/12. (iii) Doublets = 6 → 1/6. (iv) Sum ≤ 9: total 36 − sum≥10(sum10=3,sum11=2,sum12=1=6) → 30 → 30/36=5/6. (v) Even sums: 2,4,6,8,10,12 → 1+3+5+5+3+1=18 → 18/36=1/2. [Final Result with Units]"
    ],
    "source": "CBSE Board / KVS Support / RD Sharma",
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_21",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 4 red balls, 5 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/14, (ii) P(not white) = 9/14",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 5 (black) + 5 (white) = 14. ∴ n(S) = 14. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/14. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 5 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/14. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_22",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 6 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/17, (ii) P(not white) = 11/17",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 6 (black) + 6 (white) = 17. ∴ n(S) = 17. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/17. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 6 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/17. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_23",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 7 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/20, (ii) P(not white) = 13/20",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 7 (black) + 7 (white) = 20. ∴ n(S) = 20. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/20. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 7 = 13. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 13/20. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_24",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 3 red balls, 8 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/16, (ii) P(not white) = 11/16",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 8 (black) + 5 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 8 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_25",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 4 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/14, (ii) P(not white) = 8/14",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 4 (black) + 6 (white) = 14. ∴ n(S) = 14. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/14. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 4 = 8. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 8/14. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_26",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 5 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/17, (ii) P(not white) = 10/17",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 5 (black) + 7 (white) = 17. ∴ n(S) = 17. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/17. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 5 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/17. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_27",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 6 red balls, 6 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/17, (ii) P(not white) = 12/17",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 6 (black) + 5 (white) = 17. ∴ n(S) = 17. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/17. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 6 = 12. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 12/17. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_28",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 3 red balls, 7 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/16, (ii) P(not white) = 10/16",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 7 (black) + 6 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 7 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_29",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 8 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/19, (ii) P(not white) = 12/19",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 8 (black) + 7 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 8 = 12. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 12/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_30",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 5 red balls, 4 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/14, (ii) P(not white) = 9/14",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 4 (black) + 5 (white) = 14. ∴ n(S) = 14. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/14. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 4 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/14. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_31",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 5 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/17, (ii) P(not white) = 11/17",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 5 (black) + 6 (white) = 17. ∴ n(S) = 17. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/17. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 5 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/17. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_32",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 3 red balls, 6 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/16, (ii) P(not white) = 9/16",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 6 (black) + 7 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 6 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_33",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 4 red balls, 7 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/16, (ii) P(not white) = 11/16",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 7 (black) + 5 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 7 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_34",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 8 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/19, (ii) P(not white) = 13/19",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 8 (black) + 6 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 8 = 13. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 13/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_35",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 4 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/17, (ii) P(not white) = 10/17",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 4 (black) + 7 (white) = 17. ∴ n(S) = 17. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/17. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 4 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/17. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_36",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 3 red balls, 5 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/13, (ii) P(not white) = 8/13",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 5 (black) + 5 (white) = 13. ∴ n(S) = 13. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/13. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 5 = 8. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 8/13. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_37",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 6 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/16, (ii) P(not white) = 10/16",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 6 (black) + 6 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 6 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_38",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 7 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/19, (ii) P(not white) = 12/19",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 7 (black) + 7 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 7 = 12. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 12/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_39",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 6 red balls, 8 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/19, (ii) P(not white) = 14/19",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 8 (black) + 5 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 8 = 14. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 14/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_40",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 3 red balls, 4 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/13, (ii) P(not white) = 7/13",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 4 (black) + 6 (white) = 13. ∴ n(S) = 13. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/13. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 4 = 7. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 7/13. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_41",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 5 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/16, (ii) P(not white) = 9/16",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 5 (black) + 7 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 5 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_42",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 5 red balls, 6 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/16, (ii) P(not white) = 11/16",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 6 (black) + 5 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 6 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_43",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 7 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/19, (ii) P(not white) = 13/19",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 7 (black) + 6 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 7 = 13. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 13/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_44",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 3 red balls, 8 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/18, (ii) P(not white) = 11/18",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 8 (black) + 7 (white) = 18. ∴ n(S) = 18. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/18. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 8 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/18. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_45",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 4 red balls, 4 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/13, (ii) P(not white) = 8/13",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 4 (black) + 5 (white) = 13. ∴ n(S) = 13. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/13. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 4 = 8. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 8/13. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_46",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 5 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/16, (ii) P(not white) = 10/16",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 5 (black) + 6 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 5 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_47",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 6 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/19, (ii) P(not white) = 12/19",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 6 (black) + 7 (white) = 19. ∴ n(S) = 19. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/19. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 6 = 12. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 12/19. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_48",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 3 red balls, 7 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/15, (ii) P(not white) = 10/15",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 7 (black) + 5 (white) = 15. ∴ n(S) = 15. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/15. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 7 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/15. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_49",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 8 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/18, (ii) P(not white) = 12/18",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 8 (black) + 6 (white) = 18. ∴ n(S) = 18. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/18. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 8 = 12. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 12/18. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_50",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 5 red balls, 4 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/16, (ii) P(not white) = 9/16",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 4 (black) + 7 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 4 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_51",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 6 red balls, 5 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/16, (ii) P(not white) = 11/16",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 5 (black) + 5 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 5 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_52",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 2,
    "type": "SA",
    "question": "A bag contains 3 red balls, 6 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 3/15, (ii) P(not white) = 9/15",
    "steps": [
      "Step 1: Total number of balls = 3 (red) + 6 (black) + 6 (white) = 15. ∴ n(S) = 15. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 3. ∴ P(red) = 3/15. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 3 + 6 = 9. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 9/15. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_53",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 4 red balls, 7 black balls, and 7 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 4/18, (ii) P(not white) = 11/18",
    "steps": [
      "Step 1: Total number of balls = 4 (red) + 7 (black) + 7 (white) = 18. ∴ n(S) = 18. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 4. ∴ P(red) = 4/18. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 4 + 7 = 11. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 11/18. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_board_54",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 3,
    "type": "SA",
    "question": "A bag contains 5 red balls, 8 black balls, and 5 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 5/18, (ii) P(not white) = 13/18",
    "steps": [
      "Step 1: Total number of balls = 5 (red) + 8 (black) + 5 (white) = 18. ∴ n(S) = 18. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 5. ∴ P(red) = 5/18. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 5 + 8 = 13. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 13/18. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_14_board_55",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 1,
    "type": "MCQ",
    "question": "A bag contains 6 red balls, 4 black balls, and 6 white balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red, (ii) not white?",
    "answer": "(i) P(red) = 6/16, (ii) P(not white) = 10/16",
    "steps": [
      "Step 1: Total number of balls = 6 (red) + 4 (black) + 6 (white) = 16. ∴ n(S) = 16. [Given in Problem]",
      "Step 2: (i) Let E be event of drawing red ball. Number of favourable outcomes = 6. ∴ P(red) = 6/16. [Using P(E) = Number of favourable outcomes / Total outcomes]",
      "Step 3: (ii) Let F be event of drawing a ball that is NOT white. Favourable outcomes = red + black = 6 + 4 = 10. [Algebraic Simplification]",
      "Step 4: ∴ P(not white) = 10/16. [Using P(E) = Number of favourable outcomes / Total outcomes]"
    ],
    "formula": "P(E) = n(E) / n(S)",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_14_4m_1",
    "chapter": 14,
    "chapterName": "Probability",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Quality Control in Smartphone Battery Factory\n\nA battery manufacturing plant tests a lot of 500 phone batteries. 20 batteries are found to be defective and the remaining are good. One battery is drawn at random from the lot:\n(i) What is the probability that the battery drawn is defective? [1 Mark]\n(ii) What is the probability that the battery drawn is good? [1 Mark]\n(iii) If the first battery drawn was good and was not replaced, what is the probability that the second battery drawn is defective? [2 Marks]",
    "answer": "(i) P(defective) = 1/25 = 0.04; (ii) P(good) = 24/25 = 0.96; (iii) P(second defective) = 20/499",
    "steps": [
      "Total batteries n(S) = 500. Defective batteries = 20. Good batteries = 500 - 20 = 480.",
      "Part (i): P(defective) = 20 / 500 = 2 / 50 = 1 / 25 = 0.04. [P = 1/25]",
      "Part (ii): P(good) = 480 / 500 = 48 / 50 = 24 / 25 = 0.96 (or 1 - 0.04 = 0.96). [P = 24/25]",
      "Part (iii): Since 1 good battery was drawn and NOT replaced, total remaining batteries = 500 - 1 = 499. Defective batteries remain 20.",
      "∴ P(second is defective) = 20 / 499. [P = 20/499]"
    ],
    "formula": "P(E) = Favourable outcomes / Total outcomes",
    "examinerNote": "4-Mark Competency Scenario: Answer each sub-part clearly with formula and units."
  }
];
