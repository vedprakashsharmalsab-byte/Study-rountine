import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH2_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c2_q1",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "An aqueous solution turns red litmus paper blue. Excess addition of which of the following solutions would reverse the change?\n(a) Baking powder\n(b) Lime water\n(c) Ammonium hydroxide solution\n(d) Hydrochloric acid",
    options: [
      "Baking powder",
      "Lime water",
      "Ammonium hydroxide solution",
      "Hydrochloric acid"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: Hydrochloric acid.",
    explanation: "A solution that turns red litmus blue is basic. To reverse the color change back to red, an excess of an acid (such as Hydrochloric acid, HCl) must be added to neutralize the base and make the solution acidic.",
    formula: "Acid + Base ⟶ Salt + Water",
    examinerNote: "Baking powder, lime water, and ammonium hydroxide are all basic; only HCl is acidic.",
    source: "NCERT Class 10 Exemplar"
  },
  {
    id: "sci_c2_q2",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "During the preparation of hydrogen chloride gas on a humid day, the gas is usually passed through a guard tube containing calcium chloride. The role of calcium chloride is to:\n(a) Absorb the evolved gas\n(b) Moisten the gas\n(c) Absorb moisture from the gas\n(d) Absorb Cl⁻ ions from the evolved gas",
    options: [
      "Absorb the evolved gas",
      "Moisten the gas",
      "Absorb moisture from the gas",
      "Absorb Cl⁻ ions from the evolved gas"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Absorb moisture from the gas.",
    explanation: "Anhydrous calcium chloride (CaCl₂) is a strong desiccant (drying agent). It absorbs ambient atmospheric moisture, ensuring the HCl gas emerging from the tube is completely dry for litmus testing.",
    examinerNote: "Dry HCl gas only shows acidic character when tested with moist litmus paper, which is why drying the gas is essential.",
    source: "CBSE 2023 Board Question"
  },
  {
    id: "sci_c2_q3",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Which of the following salts does not contain water of crystallization?\n(a) Blue vitriol\n(b) Baking soda\n(c) Washing soda\n(d) Gypsum",
    options: [
      "Blue vitriol",
      "Baking soda",
      "Washing soda",
      "Gypsum"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Baking soda (NaHCO₃).",
    explanation: "Baking soda is anhydrous sodium hydrogen carbonate (NaHCO₃). In contrast: Blue vitriol is CuSO₄·5H₂O, Washing soda is Na₂CO₃·10H₂O, and Gypsum is CaSO₄·2H₂O.",
    formula: "NaHCO₃ (No water of crystallization)",
    examinerNote: "Common trap: students assume baking soda is a hydrate like washing soda.",
    source: "NCERT Class 10 Page 32"
  },
  {
    id: "sci_c2_q4",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The chemical formula of Bleaching powder is CaOCl₂.\nReason (R): Bleaching powder is prepared by passing dry chlorine gas over dry slaked lime [Ca(OH)₂].\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 1,
    answer: "Option (b) is correct.",
    explanation: "Both statements are chemically true facts. However, the preparation method in R does not explain why the formula is stoichiometrically CaOCl₂ (calcium oxychloride).",
    formula: "Ca(OH)₂(s) + Cl₂(g) ⟶ CaOCl₂(s) + H₂O(l)",
    examinerNote: "Very subtle assertion-reason distinction: both are true, but R describes synthesis, not formula rationale.",
    source: "Arihant All-In-One Chapter 2"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c2_q5",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "SA",
    question: "Why should curd and sour foodstuffs (like pickles, lemon juice) never be kept in brass and copper vessels?",
    answer: "Curd and sour substances contain natural organic acids (such as lactic acid, citric acid). When stored in brass or copper containers, these acids react with the metal to produce toxic, poisonous metallic salts and liberate hydrogen gas, contaminating the food and causing heavy metal food poisoning.",
    steps: [
      "Step 1: Note that sour substances contain acids (e.g. lactic acid).",
      "Step 2: Explain reaction: Acid + Copper/Brass ⟶ Toxic metal salts + H₂↑.",
      "Step 3: State health impact: Causes food poisoning and digestive toxicity."
    ],
    explanation: "Acidic foods corrode copper and brass alloy, leaching Cu²⁺ and Zn²⁺ ions into the food.",
    examinerNote: "Must mention 'formation of toxic / poisonous metal compounds'.",
    source: "NCERT Class 10 In-Text Page 18"
  },
  {
    id: "sci_c2_q6",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "SA",
    question: "Write the balanced chemical equation for the reaction of zinc granules with:\n(a) Dilute hydrochloric acid\n(b) Concentrated sodium hydroxide solution",
    answer: "(a) Zn(s) + 2HCl(aq) ⟶ ZnCl₂(aq) + H₂(g)↑.\n(b) Zn(s) + 2NaOH(aq) —[Heat]⟶ Na₂ZnO₂(aq) [Sodium Zincate] + H₂(g)↑.",
    steps: [
      "Part (a): Acid displacement forming Zinc chloride and Hydrogen.",
      "Part (b): Base displacement forming Sodium zincate and Hydrogen gas."
    ],
    explanation: "Zinc is amphoteric in nature and reacts with both acids and strong alkalis to liberate hydrogen gas.",
    formula: "Zn + 2NaOH ⟶ Na₂ZnO₂ + H₂",
    examinerNote: "Sodium zincate formula is Na₂ZnO₂. Writing NaZnO₂ is a common mistake.",
    source: "CBSE 2024 Board Question"
  },
  {
    id: "sci_c2_q7",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "SA",
    question: "While diluting an acid, why is it recommended that the acid should always be added to water and not water to the acid?",
    answer: "The dissolution of a concentrated acid (such as H₂SO₄ or HNO₃) in water is a highly exothermic process. If water is poured into concentrated acid, the sudden heat generated instantaneously vaporizes the water, causing the acid to violently splash out and cause severe chemical burns. Furthermore, the local thermal shock may shatter the glass beaker. Adding acid drop-by-drop to a large volume of water with constant stirring safely dissipates the heat.",
    steps: [
      "Step 1: State that dilution of acid is an intensely exothermic reaction.",
      "Step 2: Explain hazard: Water into acid causes explosive boiling, acid splashing, and glass breakage.",
      "Step 3: Correct method: Add acid slowly to water with continuous stirring."
    ],
    explanation: "Water has a high specific heat capacity and absorbs the heat when acid is added gradually.",
    examinerNote: "Key phrase 'highly exothermic' and 'acid splashes out causing burns' must be present.",
    source: "NCERT Class 10 Page 24"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c2_q8",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "Five solutions A, B, C, D and E when tested with universal indicator showed pH of 4, 1, 11, 7 and 9 respectively.\n(a) Which solution is: (i) Neutral, (ii) Strongly alkaline, (iii) Strongly acidic, (iv) Weakly acidic, (v) Weakly alkaline?\n(b) Arrange the solutions in increasing order of hydrogen-ion concentration.",
    answer: "(a)\n(i) Neutral: Solution D (pH = 7)\n(ii) Strongly alkaline: Solution C (pH = 11)\n(iii) Strongly acidic: Solution B (pH = 1)\n(iv) Weakly acidic: Solution A (pH = 4)\n(v) Weakly alkaline: Solution E (pH = 9)\n\n(b) Hydrogen ion concentration is inversely proportional to pH (Lower pH ⟹ higher [H⁺]).\nIncreasing order of [H⁺] (lowest to highest):\nC (pH 11) < E (pH 9) < D (pH 7) < A (pH 4) < B (pH 1).",
    steps: [
      "Step 1: Classify each pH value based on standard 1-14 scale.",
      "Step 2: Invert pH sequence for hydrogen ion concentration: [H⁺] increases as pH decreases.",
      "Step 3: Write increasing inequality: C < E < D < A < B."
    ],
    explanation: "pH = -log[H⁺]. Therefore, pH 1 has $10^{10}$ times more H⁺ ions than pH 11.",
    examinerNote: "Ensure the increasing order has correct signs (<) and goes from pH 11 to pH 1.",
    source: "Educart Science Class 10 2026"
  },
  {
    id: "sci_c2_q9",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "Write the chemical name, chemical formula, and two important industrial uses for each of the following:\n(a) Bleaching powder\n(b) Plaster of Paris",
    answer: "(a) Bleaching powder:\n- Chemical Name: Calcium oxychloride\n- Chemical Formula: CaOCl₂\n- Uses: (1) Disinfectant for sterilizing drinking water, (2) Bleaching agent for cotton and linen in textile industry.\n\n(b) Plaster of Paris:\n- Chemical Name: Calcium sulphate hemihydrate\n- Chemical Formula: CaSO₄·½H₂O\n- Uses: (1) Setting fractured bones in orthopedic casts, (2) Making decorative ceiling plaster, casts, and statues.",
    steps: [
      "Part (a): Calcium oxychloride (CaOCl₂) with water sterilization and textile bleaching uses.",
      "Part (b): Calcium sulphate hemihydrate (CaSO₄·½H₂O) with bone cast and statue moulding uses."
    ],
    explanation: "Both compounds are derivatives of calcium and widely tested in board exams.",
    examinerNote: "1.5 marks for Bleaching powder; 1.5 marks for Plaster of Paris.",
    source: "KVS Support Material 2025-26"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c2_q10",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 5,
    type: "LA",
    question: "Explain the Chlor-Alkali process for the manufacturing of sodium hydroxide:\n(a) What is brine?\n(b) Write the balanced chemical equation representing the process.\n(c) Name the gases liberated at cathode and anode, and state one important use of each.\n(d) What happens when chlorine gas is passed over dry slaked lime? Write the equation.",
    answer: "(a) Brine is a saturated, concentrated aqueous solution of sodium chloride (NaCl) in water.\n\n(b) Balanced Chemical Equation:\n2NaCl(aq) + 2H₂O(l) —[Electric Current]⟶ 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑.\n\n(c) Electrodes and Gases:\n- At Anode (+): Chlorine gas (Cl₂). Use: Disinfectant for water purification, manufacturing of PVC and pesticides.\n- At Cathode (-): Hydrogen gas (H₂). Use: Rocket fuel, hydrogenation of vegetable oils to make vanaspati ghee, and ammonia for fertilizers.\n- Solution formed near Cathode: Sodium hydroxide (NaOH), used in soap manufacturing and paper de-fibering.\n\n(d) When Cl₂ gas is passed over dry slaked lime [Ca(OH)₂], Bleaching powder is formed:\nCa(OH)₂(s) + Cl₂(g) ⟶ CaOCl₂(s) + H₂O(l).",
    steps: [
      "Step 1: Define brine (concentrated aqueous NaCl).",
      "Step 2: Write balanced chlor-alkali equation with state symbols.",
      "Step 3: State gases at anode (Cl₂) and cathode (H₂) with uses.",
      "Step 4: Formulate bleaching powder synthesis from Cl₂ and dry slaked lime."
    ],
    explanation: "Called 'Chlor-Alkali' because products are Chlorine ('chlor') and Sodium Hydroxide ('alkali').",
    formula: "2NaCl + 2H₂O ⟶ 2NaOH + Cl₂ + H₂",
    examinerNote: "Never swap cathode and anode gases. Cl₂ is at anode; H₂ is at cathode.",
    source: "CBSE 2024 Board 5-Mark Question"
  },
  {
    id: "sci_c2_q11",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 4,
    type: "Case Study",
    question: "Case Study: A baker was preparing a cake for a customer. He used baking soda instead of baking powder in the cake batter. When the cake was baked, it rose properly and was soft, but when the customer tasted it, the cake had an unpleasantly bitter taste. Moreover, on another occasion, a child was stung by a bee, causing severe pain and burning sensation. The baker applied a pinch of moist baking soda to the sting, giving immediate relief.\n\n(a) Why did the cake taste bitter when baked with baking soda?\n(b) What should the baker have added to baking soda to eliminate the bitterness?\n(c) Write the chemical equation for the thermal decomposition of baking soda during baking.\n(d) Why did applying baking soda give immediate relief from the bee sting?",
    answer: "(a) When baking soda (NaHCO₃) is heated, it decomposes to form sodium carbonate (Na₂CO₃), which is alkaline (basic) and imparts an unpleasant bitter taste.\n\n(b) The baker should have added a mild edible acid, such as tartaric acid (which constitutes baking powder). The acid neutralizes the basic sodium carbonate to produce pleasant-tasting sodium tartrate.\n\n(c) 2NaHCO₃(s) —[Heat]⟶ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑.\n\n(d) A bee sting injects acidic liquid containing methanoic acid (formic acid, HCOOH). Baking soda is a mild base that neutralizes the methanoic acid, bringing relief from pain and inflammation.",
    steps: [
      "Part (a): Identify Na₂CO₃ formation as cause of bitterness.",
      "Part (b): Name tartaric acid as the neutralizing agent.",
      "Part (c): Write balanced equation for thermal breakdown of NaHCO₃.",
      "Part (d): Explain acid-base neutralization between methanoic acid and NaHCO₃."
    ],
    explanation: "Baking soda is NaHCO₃; heat releases CO₂ for spongy texture, but leaves bitter Na₂CO₃ unless neutralized by tartaric acid.",
    formula: "2NaHCO₃ ⟶ Na₂CO₃ + H₂O + CO₂",
    examinerNote: "1 mark for each sub-question. Accurate identification of methanoic acid in bee sting is required.",
    source: "PW Sample Paper 2026 / CBSE Case Study"
  }
];
