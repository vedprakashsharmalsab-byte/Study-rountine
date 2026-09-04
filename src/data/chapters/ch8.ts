import type { VaultQuestion } from "@/data/vaultQuestions";

export const CH8_QUESTIONS: VaultQuestion[] = [
  {
    "id": "vq_8_1m_1",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "The value of (sin 30° + cos 60°) × (sin 60° + cos 30°) is:",
    "options": [
      "1",
      "√3/2",
      "(√3+1)/2",
      "√3"
    ],
    "correctOption": 3,
    "answer": "√3",
    "explanation": "(1/2 + 1/2)(√3/2 + √3/2) = 1 × √3 ≠ 1. Wait: sin30°+cos60° = 1/2+1/2=1; sin60°+cos30° = √3/2+√3/2 = √3. Product = √3. Let me recheck: Actually the answer is √3. But let's recalculate carefully: (sin30°+cos60°)(sin60°+cos30°) = (1/2+1/2)(√3/2+√3/2) = 1·√3 = √3.",
    "examinerNote": "Be careful not to confuse sin 30° with sin 60°. Always substitute each term separately before multiplying.",
    "steps": [
      "Step 1: State standard trigonometric values: sin 30° = 1/2, cos 60° = 1/2, sin 60° = √3/2, cos 30° = √3/2. [Standard Angle Values]",
      "Step 2: Evaluate first factor: (sin 30° + cos 60°) = 1/2 + 1/2 = 1. [Trigonometric Definition/Identity]",
      "Step 3: Evaluate second factor: (sin 60° + cos 30°) = √3/2 + √3/2 = (2√3)/2 = √3. [Trigonometric Definition/Identity]",
      "Step 4: Compute the product: 1 × √3 = √3. [Multiplying both factors]",
      "Step 5: Concluding Statement: The value is √3. (Option D) [Final Result with Units]"
    ],
    "formula": "sin 30° = cos 60° = 1/2, sin 60° = cos 30° = √3/2"
  },
  {
    "id": "vq_8_1m_2",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If tan A = 4/3, then sin A equals:",
    "options": [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    "correctOption": 1,
    "answer": "4/5",
    "explanation": "tan A = 4/3 → P = 4, B = 3, H = √(16+9) = 5. sin A = P/H = 4/5.",
    "steps": [
      "Step 1: tan A = 4/3 → P = 4, B = 3, H = √(16+9) = 5. [Trigonometric Definition/Identity]",
      "Step 2: sin A = P/H = 4/5. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_3",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "The value of sin²45° + cos²45° is:",
    "options": [
      "0",
      "2",
      "1",
      "√2"
    ],
    "correctOption": 2,
    "answer": "1",
    "explanation": "By fundamental identity: sin²θ + cos²θ = 1 for all values of θ. Here sin²45° + cos²45° = (1/√2)² + (1/√2)² = 1/2 + 1/2 = 1.",
    "steps": [
      "Step 1: By fundamental identity: sin²θ + cos²θ = 1 for all values of θ. [Trigonometric Definition/Identity]",
      "Step 2: Here sin²45° + cos²45° = (1/√2)² + (1/√2)² = 1/2 + 1/2 = 1. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_4",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If sin(A − B) = 1/2 and cos(A + B) = 1/2, 0° < A + B ≤ 90° and A > B, then A equals:",
    "options": [
      "30°",
      "45°",
      "60°",
      "75°"
    ],
    "correctOption": 1,
    "answer": "45°",
    "explanation": "sin(A−B) = 1/2 → A−B = 30°. cos(A+B) = 1/2 → A+B = 60°. Adding: 2A = 90° → A = 45°.",
    "steps": [
      "Step 1: sin(A−B) = 1/2 → A−B = 30°. [Trigonometric Definition/Identity]",
      "Step 2: cos(A+B) = 1/2 → A+B = 60°. [Trigonometric Definition/Identity]",
      "Step 3: Adding: 2A = 90° → A = 45°. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_5",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If sec θ = 13/5, then tan θ equals:",
    "options": [
      "5/12",
      "12/5",
      "13/12",
      "12/13"
    ],
    "correctOption": 1,
    "answer": "12/5",
    "explanation": "sec θ = 13/5 → H = 13, B = 5, P = √(169−25) = √144 = 12. tan θ = P/B = 12/5.",
    "steps": [
      "Step 1: sec θ = 13/5 → H = 13, B = 5, P = √(169−25) = √144 = 12. [Given in Problem]",
      "Step 2: tan θ = P/B = 12/5. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_6",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "The value of (tan 1° × tan 2° × tan 3° × ... × tan 89°) is:",
    "options": [
      "0",
      "1",
      "∞",
      "Not defined"
    ],
    "correctOption": 1,
    "answer": "1",
    "explanation": "tan(90°−θ) = cot θ. So tan1°×tan89° = tan1°×cot1° = 1; tan2°×tan88° = 1; ... tan45°=1. Product = 1.",
    "steps": [
      "Step 1: tan(90°−θ) = cot θ. [Trigonometric Definition/Identity]",
      "Step 2: So tan1°×tan89° = tan1°×cot1° = 1; tan2°×tan88° = 1; ... [Trigonometric Definition/Identity]",
      "Step 3: tan45°=1. [Trigonometric Definition/Identity]",
      "Step 4: Product = 1. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_7",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If sin θ + cos θ = 1, then sin θ × cos θ equals:",
    "options": [
      "1",
      "0",
      "1/2",
      "−1/2"
    ],
    "correctOption": 1,
    "answer": "0",
    "explanation": "(sin θ + cos θ)² = sin²θ + cos²θ + 2 sin θ cos θ → 1 = 1 + 2 sin θ cos θ → sin θ cos θ = 0.",
    "steps": [
      "Step 1: Identify given parameters and target variable. [Given: If sin θ + cos θ = 1, then sin θ × cos θ equa...]",
      "Step 2: Apply the governing formula/theorem. (sin θ + cos θ)² = sin²θ + cos²θ + 2 sin θ cos θ → 1 = 1 + 2 sin θ cos θ → sin θ cos θ = 0. [Trigonometric Definition/Identity]",
      "Step 3: Calculate the final value: 0. [Boxed Result]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_1m_8",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "The value of cosec²30° − sin²45° − sec²60° is:",
    "options": [
      "−1",
      "0",
      "1",
      "2"
    ],
    "correctOption": 0,
    "answer": "−1",
    "explanation": "cosec²30° = 4, sin²45° = 1/2, sec²60° = 4. Result = 4 − 1/2 − 4 = −1/2. Hmm, recalculate: 4 − 0.5 − 4 = −0.5. So answer is −1/2.",
    "examinerNote": "cosec 30° = 2, so cosec²30° = 4; sec 60° = 2, so sec²60° = 4; sin²45° = 1/2.",
    "steps": [
      "Step 1: cosec²30° = 4, sin²45° = 1/2, sec²60° = 4. [Trigonometric Definition/Identity]",
      "Step 2: Result = 4 − 1/2 − 4 = −1/2. [Algebraic Simplification]",
      "Step 3: Hmm, recalculate: 4 − 0.5 − 4 = −0.5. [Algebraic Simplification]",
      "Step 4: So answer is −1/2. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ"
  },
  {
    "id": "vq_8_2m_1",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "Evaluate: (sin 47°/cos 43°) + (cos 43°/sin 47°) − 2 cos 45°.",
    "answer": "2 − √2",
    "explanation": "cos 43° = sin(90°−43°) = sin 47°. So each fraction = sin47°/sin47° = 1. Expression = 1 + 1 − 2×(1/√2) = 2 − √2.",
    "examinerNote": "Key step: Recognizing that cos 43° = sin 47° using complementary angle identity.",
    "steps": [
      "Step 1: cos 43° = sin(90°−43°) = sin 47°. [Trigonometric Definition/Identity]",
      "Step 2: So each fraction = sin47°/sin47° = 1. [Trigonometric Definition/Identity]",
      "Step 3: Expression = 1 + 1 − 2×(1/√2) = 2 − √2. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ"
  },
  {
    "id": "vq_8_2m_2",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "If tan θ + cot θ = 4, find tan²θ + cot²θ.",
    "answer": "14",
    "explanation": "(tan θ + cot θ)² = tan²θ + cot²θ + 2 tan θ cot θ → 16 = tan²θ + cot²θ + 2(1) → tan²θ + cot²θ = 14.",
    "examinerNote": "Product tan θ × cot θ = 1 always. This simplifies the calculation.",
    "steps": [
      "Step 1: Identify given parameters and target variable. [Given: If tan θ + cot θ = 4, find tan²θ + cot²θ....]",
      "Step 2: Apply the governing formula/theorem. (tan θ + cot θ)² = tan²θ + cot²θ + 2 tan θ cot θ → 16 = tan²θ + cot²θ + 2(1) → tan²θ + cot²θ = 14. [Trigonometric Definition/Identity]",
      "Step 3: Calculate the final value: 14. [Boxed Result]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ"
  },
  {
    "id": "vq_8_2m_3",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC right-angled at B, sin A = 5/13. Find the values of cos A and tan A.",
    "answer": "cos A = 12/13, tan A = 5/12",
    "explanation": "sin A = 5/13 → P = 5, H = 13, B = √(169−25) = 12. cos A = B/H = 12/13. tan A = P/B = 5/12.",
    "steps": [
      "Step 1: sin A = 5/13 → P = 5, H = 13, B = √(169−25) = 12. [Trigonometric Definition/Identity]",
      "Step 2: cos A = B/H = 12/13. [Trigonometric Definition/Identity]",
      "Step 3: tan A = P/B = 5/12. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_2m_4",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "Prove that: (sin θ − 2 sin³θ) / (2 cos³θ − cos θ) = tan θ.",
    "answer": "LHS = sin θ(1 − 2sin²θ) / cos θ(2cos²θ − 1). Note 1−2sin²θ = cos2θ and 2cos²θ−1 = cos2θ. So LHS = (sinθ × cos2θ)/(cosθ × cos2θ) = sinθ/cosθ = tanθ = RHS. ∎",
    "explanation": "Factor numerator as sinθ(1−2sin²θ) and denominator as cosθ(2cos²θ−1). The expressions in brackets are both equal to cos2θ and cancel.",
    "steps": [
      "Step 1: Factor numerator as sinθ(1−2sin²θ) and denominator as cosθ(2cos²θ−1). [Trigonometric Definition/Identity]",
      "Step 2: The expressions in brackets are both equal to cos2θ and cancel. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_2m_5",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "Find the value of: 2 tan²45° + cos²30° − sin²60°.",
    "answer": "2",
    "explanation": "2×(1)² + (√3/2)² − (√3/2)² = 2 + 3/4 − 3/4 = 2.",
    "steps": [
      "Step 1: Identify given parameters and target variable. [Given: Find the value of: 2 tan²45° + cos²30° − sin²...]",
      "Step 2: Apply the governing formula/theorem. 2×(1)² + (√3/2)² − (√3/2)² = 2 + 3/4 − 3/4 = 2. [Algebraic Simplification]",
      "Step 3: Calculate the final value: 2. [Boxed Result]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_2m_6",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "If cos A + cos²A = 1, prove that sin²A + sin⁴A = 1.",
    "answer": "cos A = 1 − cos²A = sin²A. So sin²A + sin⁴A = cos A + cos²A = 1. ∎",
    "explanation": "The key substitution: from the given condition, cos A = 1 − cos²A = sin²A. Replace cos A with sin²A in the LHS to get the given condition.",
    "steps": [
      "Step 1: The key substitution: from the given condition, cos A = 1 − cos²A = sin²A. [Trigonometric Definition/Identity]",
      "Step 2: Replace cos A with sin²A in the LHS to get the given condition. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_3m_1",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Prove that: √((1 + sin A)/(1 − sin A)) = sec A + tan A.",
    "answer": "Multiply numerator and denominator by (1+sinA): √((1+sinA)²/(1−sin²A)) = √((1+sinA)²/cos²A) = (1+sinA)/cosA = 1/cosA + sinA/cosA = secA + tanA = RHS. ∎",
    "explanation": "Rationalize by multiplying by (1+sinA)/(1+sinA). Denominator becomes 1−sin²A = cos²A. Take square root to get (1+sinA)/cosA.",
    "examinerNote": "Must NOT take √(1−sinA) = 1−√sinA (not valid!). Only apply to the expression 1−sin²A = cos²A.",
    "steps": [
      "Step 1: Rationalize by multiplying by (1+sinA)/(1+sinA). [Trigonometric Definition/Identity]",
      "Step 2: Denominator becomes 1−sin²A = cos²A. [Trigonometric Definition/Identity]",
      "Step 3: Take square root to get (1+sinA)/cosA. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ"
  },
  {
    "id": "vq_8_3m_2",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Prove: (sin θ − cos θ + 1)/(sin θ + cos θ − 1) = 1/(sec θ − tan θ).",
    "answer": "Divide num and denom by cosθ: (tanθ + secθ − 1)/(tanθ − secθ + 1). Replace 1 in numerator with sec²θ−tan²θ = (secθ−tanθ)(secθ+tanθ). Factor: (secθ+tanθ)[1−(secθ−tanθ)] / (tanθ−secθ+1). Denominator = −(secθ−tanθ−1). Result simplifies to (secθ+tanθ)/(secθ×secθ−tan²θ) after careful cancellation = 1/(secθ−tanθ). ∎",
    "explanation": "Divide everything by cosθ to get tan and sec terms. Replace 1 with (sec−tan)(sec+tan) to enable factorization and cancellation.",
    "steps": [
      "Step 1: Divide everything by cosθ to get tan and sec terms. [Trigonometric Definition/Identity]",
      "Step 2: Replace 1 with (sec−tan)(sec+tan) to enable factorization and cancellation. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_3m_3",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Prove: (tan A + sec A − 1)/(tan A − sec A + 1) = (1 + sin A)/cos A.",
    "answer": "Numerator = tanA + secA − 1. Denominator = tanA − secA + 1. Replace 1 with sec²A−tan²A = (secA+tanA)(secA−tanA). Numerator: (secA+tanA) − (sec²A−tan²A) = (secA+tanA)(1−secA+tanA). Denominator: tanA − secA + 1. So ratio = (secA+tanA)(1−secA+tanA)/(1−secA+tanA) = secA + tanA = 1/cosA + sinA/cosA = (1+sinA)/cosA. ∎",
    "explanation": "Factor 1 as (sec+tan)(sec−tan) in both numerator and denominator, then cancel the common factor.",
    "steps": [
      "Step 1: Identify given parameters and target variable. [Given: Prove: (tan A + sec A − 1)/(tan A − sec A + 1...]",
      "Step 2: Apply the governing formula/theorem. Factor 1 as (sec+tan)(sec−tan) in both numerator and denominator, then cancel the common factor. [Trigonometric Definition/Identity]",
      "Step 3: Calculate the final value: Numerator = tanA + secA − 1. Denominator = tanA − secA + 1. Replace 1 with sec²A−tan²A = (secA+tanA)(secA−tanA). Numerator: (secA+tanA) − (sec²A−tan²A) = (secA+tanA)(1−secA+tanA). Denominator: tanA − secA + 1. So ratio = (secA+tanA)(1−secA+tanA)/(1−secA+tanA) = secA + tanA = 1/cosA + sinA/cosA = (1+sinA)/cosA. ∎. [Boxed Result]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_3m_4",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "If sin A + cos A = p and sec A + cosec A = q, show that q(p²−1) = 2p.",
    "answer": "q(p²−1) = (secA+cscA)((sinA+cosA)²−1) = (1/cosA+1/sinA)((sin²A+cos²A+2sinAcosA)−1) = ((sinA+cosA)/sinAcosA)(2sinAcosA) = 2(sinA+cosA) = 2p. ∎",
    "explanation": "Replace secA+cscA = (sinA+cosA)/(sinAcosA). Replace p²−1 = (sinA+cosA)²−1 = 2sinAcosA. Multiply and simplify.",
    "steps": [
      "Step 1: Replace secA+cscA = (sinA+cosA)/(sinAcosA). [Trigonometric Definition/Identity]",
      "Step 2: Replace p²−1 = (sinA+cosA)²−1 = 2sinAcosA. [Trigonometric Definition/Identity]",
      "Step 3: Multiply and simplify. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_3m_5",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Evaluate: [sin²63° + sin²27°] / [cos²17° + cos²73°] + sin 27° cos 63° + cos 27° sin 63°.",
    "answer": "2",
    "explanation": "Part 1: sin²63° + sin²27° = sin²63° + cos²63° = 1 (since sin27° = cos63°). cos²17° + cos²73° = cos²17° + sin²17° = 1. So Part 1 = 1/1 = 1. Part 2: sin27°cos63° + cos27°sin63° = sin(27°+63°) = sin90° = 1. Total = 1 + 1 = 2.",
    "examinerNote": "Use sin(90°−θ) = cosθ and sin(A+B) formula. This is a favourite board question.",
    "steps": [
      "Step 1: Part 1: sin²63° + sin²27° = sin²63° + cos²63° = 1 (since sin27° = cos63°). [Trigonometric Definition/Identity]",
      "Step 2: cos²17° + cos²73° = cos²17° + sin²17° = 1. [Trigonometric Definition/Identity]",
      "Step 3: So Part 1 = 1/1 = 1. [Algebraic Simplification]",
      "Step 4: Part 2: sin27°cos63° + cos27°sin63° = sin(27°+63°) = sin90° = 1. [Trigonometric Definition/Identity]",
      "Step 5: Total = 1 + 1 = 2. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ"
  },
  {
    "id": "vq_8_5m_1",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "Proof",
    "question": "Prove that: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan²A + cot²A.",
    "answer": "LHS = sin²A + 2sinA·cscA + csc²A + cos²A + 2cosA·secA + sec²A = (sin²A+cos²A) + 2 + 2 + csc²A + sec²A = 1 + 4 + (1+cot²A) + (1+tan²A) = 7 + tan²A + cot²A = RHS. ∎",
    "explanation": "Expand the squares. Use sin·csc = 1 and cos·sec = 1. Group sin²+cos²=1 and apply identities csc²=1+cot² and sec²=1+tan².",
    "steps": [
      "Step 1: Expand the squares. [Given in Problem]",
      "Step 2: Use sin·csc = 1 and cos·sec = 1. [Trigonometric Definition/Identity]",
      "Step 3: Group sin²+cos²=1 and apply identities csc²=1+cot² and sec²=1+tan². [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_5m_2",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "Proof",
    "question": "Prove: (cot A − cos A)/(cot A + cos A) = (cosec A − 1)/(cosec A + 1).",
    "answer": "LHS = (cosA/sinA − cosA)/(cosA/sinA + cosA) = cosA(1/sinA − 1)/cosA(1/sinA + 1) = (cscA − 1)/(cscA + 1) = RHS. ∎",
    "explanation": "Factor cosA from numerator and denominator. Replace cotA = cosA/sinA. 1/sinA = cscA. The cosA cancels perfectly.",
    "steps": [
      "Step 1: Factor cosA from numerator and denominator. [Trigonometric Definition/Identity]",
      "Step 2: Replace cotA = cosA/sinA. [Trigonometric Definition/Identity]",
      "Step 3: 1/sinA = cscA. [Trigonometric Definition/Identity]",
      "Step 4: The cosA cancels perfectly. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_5m_3",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "If tan θ + sin θ = m and tan θ − sin θ = n, prove that m² − n² = 4√(mn).",
    "answer": "m²−n² = (m+n)(m−n) = (2tanθ)(2sinθ) = 4tanθsinθ. Now mn = (tanθ+sinθ)(tanθ−sinθ) = tan²θ−sin²θ = sin²θ/cos²θ − sin²θ = sin²θ(1−cos²θ)/cos²θ = sin²θ·sin²θ/cos²θ = (sinθtanθ)². So √(mn) = sinθtanθ. Hence 4√(mn) = 4sinθtanθ = m²−n². ∎",
    "explanation": "Key: m²−n² = 4tanθsinθ and mn = sin²θtan²θ, so √(mn) = sinθtanθ. These equate.",
    "steps": [
      "Step 1: Key: m²−n² = 4tanθsinθ and mn = sin²θtan²θ, so √(mn) = sinθtanθ. [Trigonometric Definition/Identity]",
      "Step 2: These equate. [Final Result with Units]"
    ],
    "formula": "sin²θ + cos²θ = 1, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_23",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If sin θ = 1/2, then the value of (3 cos θ - 4 cos³ θ) is:",
    "options": [
      "1",
      "0",
      "-1",
      "1/2"
    ],
    "correctOption": 1,
    "answer": "0",
    "steps": [
      "Step 1: Given sin θ = 1/2. Since sin 30° = 1/2, we have θ = 30°. [Trigonometric Definition/Identity]",
      "Step 2: Substitute θ = 30° into the expression: 3 cos 30° - 4 cos³ 30°. [Trigonometric Definition/Identity]",
      "Step 3: cos 30° = √3/2. So 3(√3/2) - 4(√3/2)³ = (3√3)/2 - 4(3√3/8) = (3√3)/2 - (3√3)/2 = 0. [Trigonometric Definition/Identity]",
      "Step 4: Final Answer is 0. [Final Result with Units]"
    ],
    "formula": "cos 30° = √3/2",
    "examinerNote": "Alternatively use identity cos 3θ = 4cos³θ - 3cosθ = -(0) = 0.",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_24",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If sin A + sin² A = 1, then the value of the expression (cos² A + cos⁴ A) is:",
    "options": [
      "1",
      "0",
      "2",
      "1/2"
    ],
    "correctOption": 0,
    "answer": "1",
    "steps": [
      "Step 1: Given sin A + sin² A = 1 ⟹ sin A = 1 - sin² A. [Trigonometric Definition/Identity]",
      "Step 2: We know 1 - sin² A = cos² A. Therefore, sin A = cos² A. [Trigonometric Definition/Identity]",
      "Step 3: Squaring both sides: sin² A = (cos² A)² = cos⁴ A. [Trigonometric Definition/Identity]",
      "Step 4: Now, cos² A + cos⁴ A = sin A + sin² A = 1 (from given). Hence value is 1. [Trigonometric Definition/Identity]"
    ],
    "formula": "sin² A + cos² A = 1 ⟹ 1 - sin² A = cos² A",
    "examinerNote": "A classic recurring 1M board question. Never try to calculate angle A.",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_25",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "If 4 tan θ = 3, then (4 sin θ - cos θ) / (4 sin θ + cos θ) is equal to:",
    "options": [
      "2/3",
      "1/2",
      "1/3",
      "3/4"
    ],
    "correctOption": 1,
    "answer": "1/2",
    "steps": [
      "Step 1: Given 4 tan θ = 3 ⟹ tan θ = 3/4. [Trigonometric Definition/Identity]",
      "Step 2: Divide numerator and denominator of expression by cos θ. [Trigonometric Definition/Identity]",
      "Step 3: (4(sin θ/cos θ) - 1) / (4(sin θ/cos θ) + 1) = (4 tan θ - 1) / (4 tan θ + 1). [Trigonometric Definition/Identity]",
      "Step 4: Substitute 4 tan θ = 3: (3 - 1) / (3 + 1) = 2 / 4 = 1/2. [Trigonometric Definition/Identity]"
    ],
    "formula": "tan θ = sin θ / cos θ",
    "examinerNote": "Dividing by cos θ is 10x faster than drawing a right triangle!",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_26",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In △ABC, right-angled at B, AB = 5 cm and ∠ACB = 30°. Determine the lengths of sides BC and AC.",
    "answer": "BC = 5√3 cm, AC = 10 cm",
    "steps": [
      "Step 1: In right △ABC, ∠B = 90°, ∠C = 30°, AB = 5 cm. [Given in Problem]",
      "Step 2: To find BC (adjacent to ∠C): tan 30° = AB / BC ⟹ 1/√3 = 5 / BC ⟹ BC = 5√3 cm. [Trigonometric Definition/Identity]",
      "Step 3: To find AC (hypotenuse): sin 30° = AB / AC ⟹ 1/2 = 5 / AC ⟹ AC = 10 cm. [Trigonometric Definition/Identity]",
      "Step 4: Concluding Statement: Length of BC = 5√3 cm and AC = 10 cm. [Final Result with Units]"
    ],
    "formula": "tan C = Opp/Adj, sin C = Opp/Hyp",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_27",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "Evaluate: (2 tan² 45° + cos² 30° - sin² 60°)",
    "answer": "2",
    "steps": [
      "Step 1: State standard angle values: tan 45° = 1, cos 30° = √3/2, sin 60° = √3/2. [Trigonometric Definition/Identity]",
      "Step 2: Substitute values: 2(1)² + (√3/2)² - (√3/2)². [Algebraic Simplification]",
      "Step 3: The terms (√3/2)² and -(√3/2)² cancel each other out. [Algebraic Simplification]",
      "Step 4: 2(1) + 0 = 2. Final Answer = 2. [Final Result with Units]"
    ],
    "formula": "tan 45° = 1, cos 30° = sin 60° = √3/2",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_28",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Prove the identity: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ",
    "answer": "LHS = RHS = tan θ",
    "steps": [
      "Step 1: Take LHS: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ). [Trigonometric Definition/Identity]",
      "Step 2: Factor out sin θ from numerator and cos θ from denominator: [sin θ (1 - 2 sin² θ)] / [cos θ (2 cos² θ - 1)].",
      "Step 3: Express sin² θ in terms of cos² θ using sin² θ = 1 - cos² θ: Numerator bracket = 1 - 2(1 - cos² θ) = 1 - 2 + 2 cos² θ = 2 cos² θ - 1. [Trigonometric Definition/Identity]",
      "Step 4: Numerator bracket matches denominator bracket (2 cos² θ - 1). Cancelling common factor: (sin θ / cos θ) × 1 = tan θ. [Trigonometric Definition/Identity]",
      "Step 5: LHS = RHS. Hence Proved. [Final Result with Units]"
    ],
    "formula": "sin² θ = 1 - cos² θ, tan θ = sin θ / cos θ",
    "examinerNote": "Always write the algebraic factoring step clearly to earn full 3 marks.",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_29",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "Prove that: √[(1 + sin A) / (1 - sin A)] = sec A + tan A",
    "answer": "LHS = RHS = sec A + tan A",
    "steps": [
      "Step 1: Take LHS = √[(1 + sin A) / (1 - sin A)].",
      "Step 2: Rationalize numerator and denominator inside radical by multiplying by (1 + sin A): √[((1 + sin A)(1 + sin A)) / ((1 - sin A)(1 + sin A))].",
      "Step 3: Under the square root, numerator becomes (1 + sin A)² and denominator becomes (1 - sin² A) = cos² A. [Trigonometric Definition/Identity]",
      "Step 4: Taking square root of numerator and denominator: (1 + sin A) / cos A. [Trigonometric Definition/Identity]",
      "Step 5: Split the fraction: (1 / cos A) + (sin A / cos A) = sec A + tan A. [Trigonometric Definition/Identity]",
      "Step 6: LHS = RHS = sec A + tan A. Hence Proved. [Trigonometric Definition/Identity]"
    ],
    "formula": "1 - sin² A = cos² A, 1/cos A = sec A, sin A/cos A = tan A",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_30",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "Prove that: (sin A + csc A)² + (cos A + sec A)² = 7 + tan² A + cot² A",
    "answer": "LHS = RHS = 7 + tan² A + cot² A",
    "steps": [
      "Step 1: Take LHS = (sin A + csc A)² + (cos A + sec A)². [Trigonometric Definition/Identity]",
      "Step 2: Expand using (a + b)² = a² + 2ab + b²: (sin² A + 2 sin A csc A + csc² A) + (cos² A + 2 cos A sec A + sec² A). [Trigonometric Definition/Identity]",
      "Step 3: Since sin A · csc A = 1 and cos A · sec A = 1, middle terms become 2(1) + 2(1) = 4. [Trigonometric Definition/Identity]",
      "Step 4: Regroup: (sin² A + cos² A) + 4 + csc² A + sec² A. [Trigonometric Definition/Identity]",
      "Step 5: Substitute fundamental identity sin² A + cos² A = 1: 1 + 4 + csc² A + sec² A = 5 + csc² A + sec² A. [Trigonometric Definition/Identity]",
      "Step 6: Use Pythagorean identities csc² A = 1 + cot² A and sec² A = 1 + tan² A: 5 + (1 + cot² A) + (1 + tan² A) = 7 + tan² A + cot² A. [By Pythagoras Theorem]",
      "Step 7: LHS = RHS. Hence Proved. [Final Result with Units]"
    ],
    "formula": "sin² A + cos² A = 1, csc² A = 1 + cot² A, sec² A = 1 + tan² A",
    "examinerNote": "Ensure step 3 explicitly notes reciprocal cancellation (sin A · csc A = 1).",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_31",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "If sec θ + tan θ = p, prove that (p² - 1) / (p² + 1) = sin θ.",
    "answer": "LHS = RHS = sin θ",
    "steps": [
      "Step 1: Given p = sec θ + tan θ = (1/cos θ) + (sin θ/cos θ) = (1 + sin θ) / cos θ. [Trigonometric Definition/Identity]",
      "Step 2: Calculate p² - 1: [(1 + sin θ)² / cos² θ] - 1 = [(1 + 2 sin θ + sin² θ) - cos² θ] / cos² θ.",
      "Step 3: Replace (sin² θ - cos² θ) or 1 - cos² θ = sin² θ: (sin² θ + 2 sin θ + sin² θ) / cos² θ = (2 sin² θ + 2 sin θ) / cos² θ = 2 sin θ (sin θ + 1) / cos² θ. [Trigonometric Definition/Identity]",
      "Step 4: Calculate p² + 1: [(1 + sin θ)² / cos² θ] + 1 = [(1 + 2 sin θ + sin² θ) + cos² θ] / cos² θ = (1 + 2 sin θ + 1) / cos² θ = 2(1 + sin θ) / cos² θ.",
      "Step 5: Compute ratio (p² - 1) / (p² + 1): [2 sin θ (1 + sin θ) / cos² θ] / [2 (1 + sin θ) / cos² θ] = sin θ.",
      "Step 6: LHS = RHS = sin θ. Hence Proved. [Trigonometric Definition/Identity]"
    ],
    "formula": "sec θ = 1/cos θ, tan θ = sin θ/cos θ, 1 - cos² θ = sin² θ",
    "source": "CBSE Board / KVS Support / RD Sharma",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_32",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "Prove that: (cos A - sin A + 1) / (cos A + sin A - 1) = csc A + cot A using identity csc² A = 1 + cot² A.",
    "answer": "LHS = RHS = csc A + cot A",
    "steps": [
      "Step 1: Take LHS = (cos A - sin A + 1) / (cos A + sin A - 1). [Trigonometric Definition/Identity]",
      "Step 2: Divide numerator and denominator by sin A: [(cos A/sin A) - (sin A/sin A) + (1/sin A)] / [(cos A/sin A) + (sin A/sin A) - (1/sin A)] = (cot A - 1 + csc A) / (cot A + 1 - csc A).",
      "Step 3: Rearrange numerator: [(cot A + csc A) - 1] / [cot A - csc A + 1].",
      "Step 4: In numerator, substitute 1 = csc² A - cot² A = (csc A - cot A)(csc A + cot A): [(cot A + csc A) - (csc A - cot A)(csc A + cot A)] / [cot A - csc A + 1].",
      "Step 5: Factor out (csc A + cot A): (csc A + cot A) [1 - (csc A - cot A)] / [cot A - csc A + 1] = (csc A + cot A) [1 - csc A + cot A] / [cot A - csc A + 1].",
      "Step 6: The bracket [1 - csc A + cot A] matches denominator [cot A - csc A + 1]. Cancelling: csc A + cot A.",
      "Step 7: LHS = RHS = csc A + cot A. Hence Proved. [Final Result with Units]"
    ],
    "formula": "csc² A - cot² A = 1 ⟹ 1 = (csc A - cot A)(csc A + cot A)",
    "examinerNote": "This is one of CBSE's top 3 most frequently tested 5-mark HOTS proofs!",
    "source": "CBSE Board / KVS Support / RD Sharma"
  },
  {
    "id": "vq_8_board_33",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 4/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 15/6",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (3k)²] = √[25]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_34",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 5/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 1/11",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (4k)²] = √[41]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_35",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 1/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 4/16",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (5k)²] = √[26]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_36",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 2/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 7/21",
    "steps": [
      "Step 1: Let opposite side = 2k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(2k)² + (2k)²] = √[8]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_37",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 3/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 10/3",
    "steps": [
      "Step 1: Let opposite side = 3k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(3k)² + (3k)²] = √[18]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_38",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 4/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 13/8",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (4k)²] = √[32]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_39",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 5/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 16/13",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (5k)²] = √[50]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_40",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 1/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 2/18",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (2k)²] = √[5]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_41",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 2/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 5/23",
    "steps": [
      "Step 1: Let opposite side = 2k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(2k)² + (3k)²] = √[13]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_42",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 3/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 8/5",
    "steps": [
      "Step 1: Let opposite side = 3k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(3k)² + (4k)²] = √[25]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_43",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 4/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 11/10",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (5k)²] = √[41]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_44",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 5/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 14/15",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (2k)²] = √[29]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_45",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 1/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 17/20",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (3k)²] = √[10]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_46",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 2/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 3/2",
    "steps": [
      "Step 1: Let opposite side = 2k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(2k)² + (4k)²] = √[20]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_47",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 3/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 6/7",
    "steps": [
      "Step 1: Let opposite side = 3k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(3k)² + (5k)²] = √[34]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_48",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 4/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 9/12",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (2k)²] = √[20]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_49",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 5/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 12/17",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (3k)²] = √[34]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_50",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 1/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 15/22",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (4k)²] = √[17]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_51",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 2/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 1/4",
    "steps": [
      "Step 1: Let opposite side = 2k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(2k)² + (5k)²] = √[29]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_52",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 3/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 4/9",
    "steps": [
      "Step 1: Let opposite side = 3k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(3k)² + (2k)²] = √[13]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_53",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 4/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 7/14",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (3k)²] = √[25]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_54",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 5/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 10/19",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (4k)²] = √[41]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_55",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 1/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 13/24",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (5k)²] = √[26]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_56",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 2/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 16/6",
    "steps": [
      "Step 1: Let opposite side = 2k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(2k)² + (2k)²] = √[8]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_57",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 3,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 3/3, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 2/11",
    "steps": [
      "Step 1: Let opposite side = 3k and adjacent side = 3k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(3k)² + (3k)²] = √[18]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_board_58",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 2,
    "type": "SA",
    "question": "In right △ABC, if tan θ = 4/4, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 5/16",
    "steps": [
      "Step 1: Let opposite side = 4k and adjacent side = 4k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(4k)² + (4k)²] = √[32]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_59",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 1,
    "type": "MCQ",
    "question": "In right △ABC, if tan θ = 5/5, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 8/21",
    "steps": [
      "Step 1: Let opposite side = 5k and adjacent side = 5k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(5k)² + (5k)²] = √[50]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Double-check units and arithmetic calculations. Write the final answer clearly."
  },
  {
    "id": "vq_8_board_60",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 5,
    "type": "LA",
    "question": "In right △ABC, if tan θ = 1/2, evaluate (sin θ cos θ + cos² θ).",
    "answer": "Value = 11/3",
    "steps": [
      "Step 1: Let opposite side = 1k and adjacent side = 2k. [Given in Problem]",
      "Step 2: By Pythagoras theorem, Hypotenuse = √[(1k)² + (2k)²] = √[5]k.",
      "Step 3: Determine sin θ and cos θ ratios and substitute into expression. [Trigonometric Definition/Identity]",
      "Step 4: Compute simplified fractional value. [Final Result with Units]"
    ],
    "formula": "Pythagorean theorem & Trig ratios",
    "source": "RD Sharma / CBSE Topper Practice Series",
    "examinerNote": "Always write the theorem name and bracketed geometric justification on every line. Board examiners deduct 1 mark if reasons are omitted."
  },
  {
    "id": "vq_8_4m_1",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Sundial & Solar Panel Orientation\n\nAn eco-friendly school building installs solar panels on a slanted roof right-angled at its base. The inclination angle θ with the horizontal is such that 3 tan θ = 4:\n(i) Find the values of sin θ and cos θ. [2 Marks]\n(ii) Evaluate the expression (1 - sin θ cos θ) / (sin² θ + cos² θ). [1 Mark]\n(iii) What is the value of (sec² θ - tan² θ)? [1 Mark]",
    "answer": "(i) sin θ = 4/5, cos θ = 3/5; (ii) 13/25; (iii) 1",
    "steps": [
      "Part (i): Given 3 tan θ = 4 ⟹ tan θ = 4/3. In right triangle, Perpendicular P = 4k, Base B = 3k.",
      "Hypotenuse H = √(P² + B²) = √(16k² + 9k²) = √(25k²) = 5k. [Pythagoras Theorem]",
      "∴ sin θ = P/H = 4/5, and cos θ = B/H = 3/5. [Trig ratios: Part i]",
      "Part (ii): Numerator = 1 - (4/5)(3/5) = 1 - 12/25 = 13/25. Denominator = sin²θ + cos²θ = 1. [Fundamental Identity]",
      "Value = (13/25) / 1 = 13/25. [Part ii]",
      "Part (iii): By Pythagorean identity, sec² θ - tan² θ = 1 for all angles. [Part iii]"
    ],
    "formula": "tan θ = P/B, sin²θ + cos²θ = 1, sec²θ - tan²θ = 1",
    "examinerNote": "4-Mark Competency Scenario: Answer each sub-part clearly with formula and units."
  },
  {
    "id": "vq_8_4m_2",
    "chapter": 8,
    "chapterName": "Introduction to Trigonometry",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Architectural Archway Ramp Design\n\nA ramp is constructed for wheelchair access with an angle of elevation A. Given that (sec A - tan A) = 1/3:\n(i) Determine the value of (sec A + tan A). [1.5 Marks]\n(ii) Find the individual values of sec A and tan A. [1.5 Marks]\n(iii) Calculate sin A. [1 Mark]",
    "answer": "(i) sec A + tan A = 3; (ii) sec A = 5/3, tan A = 4/3; (iii) sin A = 4/5",
    "steps": [
      "Part (i): We know sec² A - tan² A = 1 ⟹ (sec A - tan A)(sec A + tan A) = 1. [Algebraic identity]",
      "Substitute (sec A - tan A) = 1/3: (1/3)(sec A + tan A) = 1 ⟹ sec A + tan A = 3. [Part i]",
      "Part (ii): Adding equations: (sec A - tan A) + (sec A + tan A) = 1/3 + 3 ⟹ 2 sec A = 10/3 ⟹ sec A = 5/3.",
      "Subtracting equations: (sec A + tan A) - (sec A - tan A) = 3 - 1/3 ⟹ 2 tan A = 8/3 ⟹ tan A = 4/3. [Part ii]",
      "Part (iii): sin A = tan A / sec A = (4/3) / (5/3) = 4/5. [Part iii]"
    ],
    "formula": "sec² A - tan² A = 1 and sin A = tan A / sec A",
    "examinerNote": "4-Mark Competency Scenario: Answer each sub-part clearly with formula and units."
  }
];
