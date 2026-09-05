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
  },
  {"id": "sci_c2_q12",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following salts does not contain water of crystallization?\n(a) Blue vitriol\n(b) Baking soda\n(c) Washing soda\n(d) Gypsum",
    "options": [
      "Blue vitriol",
      "Baking soda",
      "Washing soda",
      "Gypsum"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Baking soda (NaHCO₃).",
    "explanation": "Baking soda is anhydrous NaHCO₃ without water of crystallization. Blue vitriol is CuSO₄·5H₂O, Washing soda is Na₂CO₃·10H₂O, and Gypsum is CaSO₄·2H₂O.",
    "formula": "\\text{NaHCO}_3",
    "examinerNote": "Frequently tested board MCQ on water of crystallization.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c2_q13",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Tooth enamel is made up of a crystalline form of calcium phosphate. It begins to corrode when the pH of the mouth drops below:\n(a) 7.0\n(b) 6.5\n(c) 5.5\n(d) 4.0",
    "options": [
      "7.0",
      "6.5",
      "5.5",
      "4.0"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: 5.5.",
    "explanation": "Tooth decay starts when bacteria in the mouth ferment sugar residues, producing acids that lower mouth pH below 5.5, dissolving the hard calcium hydroxyapatite enamel.",
    "examinerNote": "Standard tooth decay threshold in CBSE board syllabus.",
    "source": "NCERT Class 10 Page 27"
  },
  {
    "id": "sci_c2_q14",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Which gas is evolved when sodium hydrogen carbonate reacts with dilute hydrochloric acid?\n(a) Hydrogen gas\n(b) Chlorine gas\n(c) Carbon dioxide gas\n(d) Sulphur dioxide gas",
    "options": [
      "Hydrogen gas",
      "Chlorine gas",
      "Carbon dioxide gas",
      "Sulphur dioxide gas"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Carbon dioxide gas.",
    "explanation": "NaHCO₃ + HCl ⟶ NaCl + H₂O + CO₂↑. The evolved CO₂ gas produces brisk effervescence and turns clear lime water milky.",
    "formula": "NaHCO₃ + HCl ⟶ NaCl + H₂O + CO₂↑",
    "source": "CBSE 2022, 2024"
  },
  {
    "id": "sci_c2_q15",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Plaster of Paris hardens on mixing with water due to the formation of:\n(a) Gypsum\n(b) Anhydrous calcium sulphate\n(c) Calcium carbonate\n(d) Calcium hydroxide",
    "options": [
      "Gypsum",
      "Anhydrous calcium sulphate",
      "Calcium carbonate",
      "Calcium hydroxide"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Gypsum.",
    "explanation": "CaSO₄·½H₂O + 1½H₂O ⟶ CaSO₄·2H₂O. POP rehydrates to form hard interlocking crystalline gypsum.",
    "formula": "CaSO₄\\cdot \\frac{1}{2}H₂O + 1\\frac{1}{2}H₂O ⟶ CaSO₄\\cdot 2H₂O",
    "source": "NCERT Class 10 Page 33"
  },
  {
    "id": "sci_c2_q16",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "A solution of pH 1 is mixed with an equal volume of a solution of pH 13. The resulting solution is:\n(a) Strongly acidic\n(b) Strongly basic\n(c) Nearly neutral\n(d) Moderately acidic",
    "options": [
      "Strongly acidic",
      "Strongly basic",
      "Nearly neutral",
      "Moderately acidic"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Nearly neutral.",
    "explanation": "pH 1 has [H⁺] = 0.1 M (strong acid). pH 13 has [OH⁻] = 0.1 M (strong base). Equal volumes of equimolar strong acid and strong base neutralize each other, resulting in pH ~ 7.",
    "formula": "[H^+] = [OH^-] ⟹ pH \\approx 7",
    "source": "CBSE CFPQ 2025"
  },
  {
    "id": "sci_c2_q17",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Dry HCl gas does not change the color of dry blue litmus paper.\nReason (R): Acidic properties are shown only in aqueous solution due to the generation of hydronium ions (H₃O⁺).\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Hydrogen ions cannot exist without water molecules. In the absence of moisture, HCl gas cannot dissociate into H⁺(aq) and therefore cannot turn blue litmus red.",
    "formula": "HCl + H₂O ⟶ H₃O^+ + Cl^-",
    "source": "CBSE Board 2023"
  },
  {
    "id": "sci_c2_q18",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following gives yellow color with universal indicator?\n(a) Pure water (pH 7)\n(b) Tomato juice (pH ~ 4–5)\n(c) Sodium hydroxide solution (pH 14)\n(d) Milk of magnesia (pH 10)",
    "options": [
      "Pure water (pH 7)",
      "Tomato juice (pH ~ 4–5)",
      "Sodium hydroxide solution (pH 14)",
      "Milk of magnesia (pH 10)"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Tomato juice.",
    "explanation": "Universal indicator colors: Red (pH 1-3), Orange/Yellow (pH 4-6, weak acid), Green (pH 7, neutral), Blue (pH 8-10), Violet/Purple (pH 11-14). Tomato juice is weakly acidic (pH ~ 4-5) and turns yellow.",
    "source": "NCERT Class 10 Page 26"
  },
  {
    "id": "sci_c2_q19",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "Nettle leaf sting injects a chemical that causes burning pain. A traditional remedy is rubbing the leaf of a dock plant. The chemical in nettle sting and dock plant leaf are respectively:\n(a) Methanoic acid and basic plant juice\n(b) Ethanoic acid and citric acid\n(c) Oxalic acid and sodium chloride\n(d) Lactic acid and tartaric acid",
    "options": [
      "Methanoic acid and basic plant juice",
      "Ethanoic acid and citric acid",
      "Oxalic acid and sodium chloride",
      "Lactic acid and tartaric acid"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Methanoic acid and basic plant juice.",
    "explanation": "Nettle sting hairs inject methanoic acid (formic acid, HCOOH). Dock plant leaves contain mildly basic alkaline sap that neutralizes the acid.",
    "formula": "\\text{HCOOH} + \\text{Base} ⟶ \\text{Salt} + H_2O",
    "source": "NCERT Class 10 Page 28"
  },
  {
    "id": "sci_c2_q20",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "The chemical formula of Bleaching Powder is:\n(a) CaCl₂\n(b) CaOCl₂\n(c) Ca(ClO₃)₂\n(d) Ca(OH)₂",
    "options": [
      "CaCl₂",
      "CaOCl₂",
      "Ca(ClO₃)₂",
      "Ca(OH)₂"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: CaOCl₂ (Calcium oxychloride).",
    "explanation": "Produced by the action of dry chlorine gas on dry slaked lime: Ca(OH)₂ + Cl₂ ⟶ CaOCl₂ + H₂O.",
    "formula": "\\text{CaOCl}_2",
    "source": "CBSE 2021"
  },
  {
    "id": "sci_c2_q21",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 1,
    "type": "MCQ",
    "question": "An aqueous solution turns phenolphthalein solution pink. On adding excess of which of the following substances will the pink color disappear?\n(a) Baking powder\n(b) Lime\n(c) Common salt\n(d) Hydrochloric acid",
    "options": [
      "Baking powder",
      "Lime",
      "Common salt",
      "Hydrochloric acid"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Hydrochloric acid.",
    "explanation": "Phenolphthalein turns pink in basic solutions. Adding an acid (HCl) neutralizes the base and makes the solution acidic, where phenolphthalein becomes colorless.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c2_q22",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "Why does distilled water not conduct electricity, whereas rain water does?",
    "answer": "(1) Distilled Water: It is pure water consisting solely of neutral covalent H₂O molecules without any dissolved minerals or salts. Since there are virtually no free mobile ions, it does not conduct electric current.\n\n(2) Rain Water: While falling through the atmosphere, rain dissolves acidic gases such as carbon dioxide (CO₂), sulphur dioxide (SO₂), and nitrogen oxides. These react with water to form weak carbonic acid ($H_2CO_3$), sulphurous acid ($H_2SO_3$), etc., which ionize to produce free mobile hydronium ($H_3O^+$) and acid anion ions, conducting electricity.",
    "formula": "CO₂(g) + H₂O(l) ⟶ H₂CO₃(aq) \\rightleftharpoons 2H^+(aq) + CO₃^{2-}(aq)",
    "examinerNote": "Contrast absence of ions in distilled water with ion formation in rain water.",
    "source": "NCERT Exercises Ch 2"
  },
  {
    "id": "sci_c2_q23",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "Why should curd and sour substances (like lemon juice, pickles) not be kept in brass and copper vessels?",
    "answer": "(1) Reason: Curd and sour substances contain organic acids (such as lactic acid in curd, citric acid in lemon juice).\n(2) Chemical hazard: These acids react chemically with brass and copper metal surfaces to produce toxic, poisonous metallic copper and zinc salt compounds.\n(3) Health consequence: Consuming food containing these toxic metallic salts causes severe food poisoning, stomach cramps, and vomiting.",
    "examinerNote": "Mention organic acids reacting with metal to form poisonous salts.",
    "source": "NCERT Class 10 In-text"
  },
  {
    "id": "sci_c2_q24",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "What is a neutralization reaction? Give two balanced chemical equations: one involving a strong acid and a strong base, and one involving a weak acid and a strong base.",
    "answer": "Definition: A chemical reaction in which an acid reacts with a base to form salt and water with the release of heat energy ($H^+ + OH^- ⟶ H_2O$).\n\n(1) Strong Acid + Strong Base:\nHCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l)\n\n(2) Weak Acid + Strong Base:\nCH₃COOH(aq) + NaOH(aq) ⟶ CH₃COONa(aq) + H₂O(l)",
    "formula": "H^+(aq) + OH^-(aq) ⟶ H₂O(l)",
    "source": "CBSE 2022 Board Paper"
  },
  {
    "id": "sci_c2_q25",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "Write the chemical name, chemical formula, and two practical uses of Bleaching Powder.",
    "answer": "(1) Chemical Name: Calcium Oxychloride.\n(2) Chemical Formula: CaOCl₂.\n(3) Two Uses:\n- For bleaching cotton and linen in textile industry and wood pulp in paper factories.\n- As a chemical disinfectant for sterilizing drinking water to make it germ-free.",
    "formula": "\\text{CaOCl}_2",
    "source": "NCERT Class 10 Page 31"
  },
  {
    "id": "sci_c2_q26",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "Five solutions A, B, C, D, and E have pH values of 4, 1, 11, 7, and 9 respectively. Which solution is:\n(a) Strongly acidic?\n(b) Strongly alkaline?\n(c) Neutral?\n(d) Weakly acidic?",
    "answer": "(a) Strongly acidic: Solution B (pH = 1)\n(b) Strongly alkaline: Solution C (pH = 11)\n(c) Neutral: Solution D (pH = 7)\n(d) Weakly acidic: Solution A (pH = 4)",
    "examinerNote": "Remember: lower pH = stronger acid; higher pH = stronger base.",
    "source": "NCERT Class 10 Page 34"
  },
  {
    "id": "sci_c2_q27",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 2,
    "type": "SA",
    "question": "What happens when Plaster of Paris is stored in an unsealed container exposed to air? Write the chemical equation.",
    "answer": "(1) Effect: POP absorbs moisture/atmospheric water vapor from open air and sets into an unusable, hard solid mass of Gypsum.\n\n(2) Chemical Equation:\nCaSO₄·½H₂O(s) + 1½H₂O(l) ⟶ CaSO₄·2H₂O(s) [Hard mass Gypsum]\nHence, POP must always be stored in moisture-proof, airtight containers.",
    "formula": "CaSO₄\\cdot \\frac{1}{2}H₂O + 1\\frac{1}{2}H₂O ⟶ CaSO₄\\cdot 2H₂O",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c2_q28",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "A white powder 'X' is a component of baking powder and is also used as an antacid:\n(a) Name the powder 'X' and write its chemical formula.\n(b) Explain why 'X' acts as an effective antacid in hyperacidity.\n(c) What happens when 'X' is heated during cooking? Write the balanced equation.",
    "answer": "(a) Powder 'X': Sodium Hydrogen Carbonate (Sodium Bicarbonate).\nFormula: NaHCO₃.\n\n(b) Antacid Action: NaHCO₃ is a mildly basic, non-corrosive salt. When ingested, it neutralizes excess hydrochloric acid secreted in gastric juice, relieving stomach burning and hyperacidity:\nNaHCO₃ + HCl ⟶ NaCl + H₂O + CO₂↑\n\n(c) Heating during cooking: When heated, NaHCO₃ undergoes thermal decomposition to release carbon dioxide gas, which causes cakes and bread to rise and become spongy:\n2NaHCO₃(s) —[Heat]⟶ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑",
    "formula": "2NaHCO₃ ⟶ Na₂CO₃ + H₂O + CO₂↑",
    "examinerNote": "Baking powder = Baking soda + Tartaric acid. Tartaric acid neutralizes bitter Na₂CO₃.",
    "source": "NCERT Class 10 Page 31"
  },
  {
    "id": "sci_c2_q29",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "Explain the Chlor-alkali process for industrial production of sodium hydroxide:\n(a) Why is this process named 'Chlor-alkali'?\n(b) Name the gases liberated at the anode and cathode.\n(c) Write the complete balanced chemical equation for the process.",
    "answer": "(a) Origin of Name: It is named 'Chlor-alkali' because the products formed are Chlorine ('chlor') and Sodium Hydroxide ('alkali', a water-soluble base).\n\n(b) Products at Electrodes:\n- At Anode (+ve electrode): Chlorine gas (Cl₂).\n- At Cathode (-ve electrode): Hydrogen gas (H₂).\n- Near Cathode: Sodium hydroxide (NaOH) solution is formed.\n\n(c) Balanced Chemical Equation:\n2NaCl(aq) + 2H₂O(l) —[Electricity]⟶ 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑",
    "formula": "2NaCl + 2H₂O ⟶ 2NaOH + Cl₂ + H₂",
    "examinerNote": "Very frequent 3M question. Make sure Cl₂ at anode and H₂ at cathode are correctly paired.",
    "source": "CBSE 2020, 2024 Board Papers"
  },
  {
    "id": "sci_c2_q30",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "Give scientific reasons for the following:\n(a) Dry ammonia gas does not change the color of dry red litmus paper, but aqueous ammonia turns red litmus blue.\n(b) While diluting concentrated sulphuric acid, acid must be added to water slowly with constant stirring, never water to acid.\n(c) An aqueous solution of sodium chloride has pH 7, while an aqueous solution of ammonium chloride has pH < 7.",
    "answer": "(a) Dry ammonia gas has no free hydroxide ions ($OH^-$). In aqueous solution, ammonia reacts with water to form ammonium hydroxide ($NH_4OH$), dissociating into $NH_4^+$ and $OH^-$ ions which impart basicity, turning red litmus blue.\n\n(b) Dilution of concentrated acid is a violently exothermic process. If water is poured into concentrated acid, the sudden massive heat turns water to steam instantly, causing acid to splatter out on skin and face, cracking glass containers. Pouring acid into large volume of water dissipates heat safely.\n\n(c) NaCl is a salt of a strong acid (HCl) and strong base (NaOH); it undergoes no hydrolysis and remains neutral (pH = 7). NH₄Cl is a salt of a strong acid (HCl) and weak base ($NH_4OH$); cation hydrolysis produces excess $H^+$ ions, making the solution acidic (pH < 7).",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "sci_c2_q31",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "What is water of crystallization? Name two hydrated salts with their chemical formulas and explain what happens when blue copper sulphate crystals are heated in a dry boiling tube.",
    "answer": "(1) Water of Crystallization: The fixed number of water molecules chemically combined in a definite stoichiometric ratio per formula unit of a salt in its crystalline structure.\n\n(2) Two Hydrated Salts:\n- Washing Soda: Na₂CO₃·10H₂O\n- Gypsum: CaSO₄·2H₂O\n\n(3) Heating Copper Sulphate:\n- Blue copper sulphate crystals contain 5 water of crystallization molecules: CuSO₄·5H₂O.\n- When heated, the crystals lose their water of crystallization, the blue color vanishes, and white anhydrous copper sulphate powder is formed:\nCuSO₄·5H₂O(s) [Blue] —[Heat]⟶ CuSO₄(s) [White] + 5H₂O(g)↑\n- If water drops are added back to the white powder, it instantly turns blue again.",
    "formula": "CuSO₄\\cdot 5H₂O ⟶ CuSO₄ + 5H₂O",
    "source": "NCERT Class 10 Activity 2.15"
  },
  {
    "id": "sci_c2_q32",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "A metal carbonate 'X' on reacting with dilute acid gives a gas 'Y' that turns lime water milky. Another metal 'Z' reacts with dilute acid to produce a gas 'W' that burns with a pop sound:\n(a) Identify gases 'Y' and 'W'.\n(b) Write the chemical equation for the turning of lime water milky by gas 'Y', and explain what happens when gas 'Y' is passed in excess.\n(c) Identify the type of reaction when metal 'Z' produces gas 'W'.",
    "answer": "(a) Identification:\n- Gas 'Y': Carbon dioxide gas (CO₂).\n- Gas 'W': Hydrogen gas (H₂).\n\n(b) Lime Water Reaction:\n- Initial milkiness: Insoluble calcium carbonate precipitate is formed:\nCa(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s)↓ [Milky white] + H₂O(l)\n- Excess CO₂ passed: The milkiness clears and disappears because insoluble CaCO₃ converts into soluble calcium hydrogen carbonate:\nCaCO₃(s) + H₂O(l) + CO₂(g) ⟶ Ca(HCO₃)₂(aq) [Clear soluble solution]\n\n(c) Reaction Type for Metal 'Z': Single displacement reaction (Metal + Acid ⟶ Salt + H₂↑).",
    "formula": "Ca(OH)₂ + CO₂ ⟶ CaCO₃↓ + H₂O",
    "examinerNote": "The clearing of milkiness with excess CO₂ is a top examiner favorite.",
    "source": "CBSE 2024 Board Paper"
  },
  {
    "id": "sci_c2_q33",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "Explain the role of pH in the following biological and environmental phenomena:\n(a) Soil pH and plant growth.\n(b) Acid rain and aquatic life.\n(c) Self-defense by honeybees and ants.",
    "answer": "(a) Soil pH & Plant Growth: Most agricultural crops grow optimally in neutral to mildly acidic soil (pH 6.5 to 7.2). If soil is too acidic (pH < 5.5), farmers treat it with quicklime (CaO) or slaked lime ($Ca(OH)_2$). If overly alkaline, organic matter (manure) is added.\n\n(b) Acid Rain & Aquatic Life: When atmospheric pollutants (SO₂, NO₂) dissolve in rain, lowering rain pH below 5.6, it forms acid rain. Acid rain flowing into rivers lowers river pH, killing fish eggs, destroying aquatic gills, and dissolving toxic aluminium from riverbed soil.\n\n(c) Bee & Ant Defense: Bee stings and red ant bites inject acidic venom containing methanoic acid, causing intense irritation and pain. Applying a mild base like baking soda ($NaHCO_3$) paste neutralizes the acid and provides immediate relief. (Wasp sting is alkaline, treated with mild acid like vinegar).",
    "source": "NCERT Class 10 Pages 26–28"
  },
  {
    "id": "sci_c2_q34",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 3,
    "type": "SA",
    "question": "Write balanced chemical equations to explain how washing soda is prepared from sodium chloride via the Solvay process in three systematic stages.",
    "answer": "Stage 1: Production of Sodium Hydrogen Carbonate:\nCold concentrated sodium chloride brine is saturated with ammonia and carbon dioxide gas:\nNaCl + H₂O + NH₃ + CO₂ ⟶ NH₄Cl(aq) + NaHCO₃(s)↓\n\nStage 2: Thermal Decomposition to Anhydrous Soda Ash:\nPrecipitated NaHCO₃ is filtered, dried, and heated strongly to obtain anhydrous sodium carbonate (soda ash):\n2NaHCO₃(s) —[Heat]⟶ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑\n\nStage 3: Recrystallization to Hydrated Washing Soda:\nAnhydrous Na₂CO₃ is dissolved in water and recrystallized to obtain decahydrate crystals:\nNa₂CO₃ + 10H₂O ⟶ Na₂CO₃·10H₂O(s) [Washing Soda]",
    "formula": "\\text{Na}_2\\text{CO}_3 + 10\\text{H}_2\\text{O} ⟶ \\text{Na}_2\\text{CO}_3\\cdot 10\\text{H}_2\\text{O}",
    "examinerNote": "All 3 equations are required for full 3 marks.",
    "source": "NCERT Class 10 Page 32"
  },
  {
    "id": "sci_c2_q35",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an industrial chemistry project, students studied the electrolytic chlor-alkali cell. Saturated aqueous brine solution is electrolyzed using inert titanium anode and nickel cathode. Three valuable commercial products (P, Q, and R) are produced simultaneously.\n\n(a) Identify substances P, Q, and R if P is collected at anode, Q at cathode, and R remains in solution near cathode.\n(b) Write the chemical equation for the industrial synthesis of bleaching powder using product P.\n(c) What fuel application does product Q have?\n(d) Write two large-scale industrial uses of product R.",
    "answer": "(a) Identification:\n- Product P (at anode): Chlorine gas (Cl₂).\n- Product Q (at cathode): Hydrogen gas (H₂).\n- Product R (near cathode): Sodium Hydroxide solution (NaOH).\n\n(b) Bleaching Powder Synthesis: Chlorine gas (P) is reacted with dry slaked lime:\nCa(OH)₂(s) + Cl₂(g) ⟶ CaOCl₂(s) + H₂O(l)\n\n(c) Fuel Application of Hydrogen (Q): Liquid hydrogen is used as high-efficiency, clean rocket fuel in spacecraft and as fuel in hydrogen fuel cells (zero emission).\n\n(d) Industrial Uses of Sodium Hydroxide (R):\n- De-greasing metals and machinery.\n- Manufacturing soaps, detergents, paper pulp, and artificial textile fibers (rayon).",
    "formula": "2NaCl + 2H₂O ⟶ 2NaOH + Cl₂ + H₂",
    "examinerNote": "1 mark per sub-part. Classic industrial case-study.",
    "source": "CBSE Sample Paper 2025"
  },
  {
    "id": "sci_c2_q36",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: A farmer tests the soil of his fields using a portable electronic pH probe and finds the soil pH is 4.8. His potato yield has declined sharply. A local agricultural scientist advises him to add compound 'A'. In an adjacent plot where alkaline soil of pH 8.9 was measured, compound 'B' was recommended.\n\n(a) Why has the potato yield dropped in soil of pH 4.8?\n(b) Name two chemical compounds that can be used as compound 'A' to treat acidic soil.\n(c) What substance 'B' should be added to neutralise excessively alkaline soil?\n(d) Write the chemical equation when slaked lime is added to acidic soil containing sulphuric acid residue from acid rain.",
    "answer": "(a) Crop plants thrive best in neutral or near-neutral soil (pH 6.5–7.2). At pH 4.8, the soil is strongly acidic; essential nutrients like phosphorus and magnesium become chemically locked and unavailable, while toxic ions like aluminium are mobilized, damaging crop roots.\n\n(b) Compounds for treating acidic soil (Compound 'A'):\n- Quicklime: Calcium oxide (CaO)\n- Slaked lime: Calcium hydroxide (Ca(OH)₂)\n- Chalk/Agricultural limestone: Calcium carbonate (CaCO₃)\n\n(c) Treatment for alkaline soil (Compound 'B'): Decomposed organic matter (manure/compost). As it decays, it releases natural organic acids that gently neutralize alkaline soil salts.\n\n(d) Chemical Equation:\nCa(OH)₂(aq) + H₂SO₄(aq) ⟶ CaSO₄(s) + 2H₂O(l)",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c2_q37",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an orthopedic clinic, a doctor mixes a white powder with water to form a thick paste. Within 15 minutes, the paste sets into a rigid cast around a patient's fractured arm.\n\n(a) Name the white powder used by the orthopedic surgeon and write its chemical formula.\n(b) Explain why it is manufactured by heating gypsum at exactly 373 K (100°C) and not at higher temperatures.\n(c) Write the chemical reaction that occurs during the setting of the cast.\n(d) Why does the chemical formula contain half a molecule of water (½H₂O)?",
    "answer": "(a) Name: Plaster of Paris (Hemihydrate of calcium sulphate).\nFormula: CaSO₄·½H₂O.\n\n(b) Temperature Control: Gypsum is heated carefully at precisely 373 K:\nCaSO₄·2H₂O —[373 K]⟶ CaSO₄·½H₂O + 1½H₂O\nIf heated above 373 K (e.g., > 100°C), it loses all its water of crystallization completely to form anhydrous calcium sulphate (CaSO₄), known as 'dead burnt plaster', which completely loses the property of setting with water.\n\n(c) Setting Reaction: Rehydration into interlocking crystalline gypsum:\nCaSO₄·½H₂O(s) + 1½H₂O(l) ⟶ CaSO₄·2H₂O(s) [Hard Gypsum]\n\n(d) Meaning of ½H₂O: Two formula units of CaSO₄ share one single molecule of water of crystallization between them, represented stoichiometrically as CaSO₄·½H₂O or 2CaSO₄·H₂O.",
    "formula": "\\text{CaSO}_4\\cdot \\frac{1}{2}\\text{H}_2\\text{O}",
    "examinerNote": "Dead burnt plaster explanation is required for full marks in part (b).",
    "source": "NCERT Class 10 Page 33"
  },
  {
    "id": "sci_c2_q38",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: A baker prepares dough for a sponge cake using wheat flour, milk, and baking powder. His apprentice mistakenly used baking soda instead of baking powder in batch A, and omitted both in batch B. The original cake was batch C.\n\n(a) Describe the texture and taste of cake in Batch A. Why does it taste bitter?\n(b) Describe the cake obtained in Batch B.\n(c) What is the chemical difference between Baking Soda and Baking Powder?\n(d) Write the two chemical functions of tartaric acid added to baking powder.",
    "answer": "(a) Batch A (only baking soda used):\n- Texture: Soft and raised.\n- Taste: Unpleasantly bitter with a soapy taste.\n- Reason: Thermal decomposition of baking soda produces sodium carbonate (Na₂CO₃), a basic salt that imparts a sharp bitter alkaline taste.\n\n(b) Batch B (neither added):\n- Texture: Hard, dense, flat, and unrisen, because no gas was evolved to generate air pockets.\n\n(c) Chemical Difference:\n- Baking Soda: Pure chemical compound, Sodium Hydrogen Carbonate (NaHCO₃).\n- Baking Powder: A dry mixture of baking soda (NaHCO₃) and a mild edible organic acid (like Tartaric acid or Citric acid), plus an inert starch filler.\n\n(d) Two Functions of Tartaric Acid:\n- Neutralizes alkaline Na₂CO₃ formed upon heating, eliminating any bitter taste:\n2H⁺ + Na₂CO₃ ⟶ 2Na⁺ + H₂O + CO₂↑\n- Produces additional carbon dioxide gas during the acid-base reaction, creating extra bubbles that make cakes extra fluffy and soft.",
    "examinerNote": "Key distinction between baking soda and baking powder tested regularly.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c2_q39",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 5,
    "type": "LA",
    "question": "Salts and their parent acids and bases:\n(a) What are the salts formed from: (i) Strong acid + Strong base, (ii) Strong acid + Weak base, (iii) Weak acid + Strong base? State the pH range for each.\n(b) Identify the parent acid and parent base for each of the following salts:\n(i) Sodium acetate (CH₃COONa)\n(ii) Ammonium chloride (NH₄Cl)\n(iii) Potassium sulphate (K₂SO₄)\n(iv) Copper sulphate (CuSO₄)\n(c) Why is an aqueous solution of sodium carbonate alkaline in nature? Write the hydrolysis equation.",
    "answer": "(a) Salt Categories & pH Ranges:\n(i) Strong Acid + Strong Base: Neutral salt, pH = 7. Example: NaCl, KNO₃.\n(ii) Strong Acid + Weak Base: Acidic salt, pH < 7. Example: NH₄Cl, AlCl₃.\n(iii) Weak Acid + Strong Base: Basic (alkaline) salt, pH > 7. Example: CH₃COONa, Na₂CO₃.\n\n(b) Parent Acids & Bases:\n(i) CH₃COONa: Parent Acid = Acetic acid (CH₃COOH, weak); Parent Base = Sodium hydroxide (NaOH, strong).\n(ii) NH₄Cl: Parent Acid = Hydrochloric acid (HCl, strong); Parent Base = Ammonium hydroxide (NH₄OH, weak).\n(iii) K₂SO₄: Parent Acid = Sulphuric acid (H₂SO₄, strong); Parent Base = Potassium hydroxide (KOH, strong).\n(iv) CuSO₄: Parent Acid = Sulphuric acid (H₂SO₄, strong); Parent Base = Copper hydroxide (Cu(OH)₂, weak).\n\n(c) Hydrolysis of Sodium Carbonate:\nWhen Na₂CO₃ dissolves in water, the carbonate anion ($CO_3^{2-}$) undergoes anion hydrolysis with water molecules, releasing excess mobile hydroxide ($OH^-$) ions into solution:\nCO₃²⁻(aq) + 2H₂O(l) ⇌ H₂CO₃(aq) + 2OH⁻(aq)\nBecause OH⁻ concentration exceeds H⁺ concentration, the solution tests basic (pH ~ 11) and turns red litmus blue.",
    "formula": "\\text{CO}_3^{2-} + 2\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 + 2\\text{OH}^-",
    "examinerNote": "Salt hydrolysis explanation distinguishes a 100% topper paper.",
    "source": "CBSE Board 2022 Long Answer"
  },
  {
    "id": "sci_c2_q40",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 5,
    "type": "LA",
    "question": "Complete chemical synthesis and applications of Bleaching Powder, Baking Soda, and Washing Soda:\n(a) Write balanced equations for the preparation of Bleaching Powder and Washing Soda.\n(b) What happens when cold dilute bleaching powder solution is left exposed to air? Write the reaction.\n(c) State two distinct industrial or domestic uses each for:\n(i) Bleaching powder\n(ii) Baking soda\n(iii) Washing soda",
    "answer": "(a) Preparation Equations:\n- Bleaching Powder: Action of chlorine gas on dry slaked lime:\nCa(OH)₂(s) + Cl₂(g) ⟶ CaOCl₂(s) + H₂O(l)\n- Washing Soda: Recrystallization of sodium carbonate:\nNa₂CO₃(s) + 10H₂O(l) ⟶ Na₂CO₃·10H₂O(s)\n\n(b) Bleaching Powder Exposure to Air:\nBleaching powder reacts slowly with atmospheric carbon dioxide, gradually releasing chlorine gas, which gives it a strong chlorine smell:\nCaOCl₂(s) + CO₂(g) ⟶ CaCO₃(s) + Cl₂(g)↑\n\n(c) Two Uses Each:\n(i) Bleaching Powder:\n- Disinfecting municipal drinking water supplies to eliminate pathogenic microbes.\n- Bleaching agent for cotton fabrics in textile mills.\n(ii) Baking Soda:\n- Constituent of dry-chemical soda-acid fire extinguishers (generates smothering CO₂).\n- In baking and confectionery as a leavening agent.\n(iii) Washing Soda:\n- Softening permanent hardness of water (precipitates soluble Ca²⁺ and Mg²⁺ as carbonates).\n- Manufacturing glass, soap, and borax.",
    "formula": "\\text{CaOCl}_2 + \\text{CO}_2 ⟶ \\text{CaCO}_3 + \\text{Cl}_2",
    "source": "CBSE 2020, 2023 5M Question"
  },
  {
    "id": "sci_c2_q41",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 5,
    "type": "LA",
    "question": "Experimental study of acids and bases:\n(a) Draw an experimental flow and write the chemical equation for the reaction of zinc granules with dilute sulphuric acid.\n(b) How is the gas evolved collected and tested?\n(c) What happens when zinc granules are treated with concentrated sodium hydroxide solution instead of acid? Write the balanced equation and name the salt formed.\n(d) Do all metals react with bases to produce hydrogen gas? Give one example.",
    "answer": "(a) Reaction with Acid:\nZinc reacts with dilute sulphuric acid in a conical flask, evolving effervescent bubbles of hydrogen gas:\nZn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)↑\n\n(b) Collection and Test:\n- Collection: Collected by downward displacement of water because hydrogen is lighter than air and insoluble in water.\n- Confirmatory Test: When a burning splinter is held near the gas bubble or test tube mouth, the gas ignites with a sharp, characteristic 'pop' sound, producing water vapor.\n\n(c) Reaction with Base (Amphoteric Metal Behavior):\nZinc reacts with hot concentrated sodium hydroxide solution, liberating hydrogen gas and forming a soluble complex salt:\nZn(s) + 2NaOH(aq) —[Heat]⟶ Na₂ZnO₂(aq) [Sodium Zincate] + H₂(g)↑\n\n(d) Generalization: No, not all metals react with bases. Only amphoteric metals (like Zn, Al, and Pb) react with strong alkalis to liberate hydrogen gas. Less reactive metals like copper, iron, and silver do not react.",
    "formula": "Zn + 2NaOH ⟶ Na₂ZnO₂ + H₂↑",
    "examinerNote": "Sodium zincate formula (Na₂ZnO₂) is a frequent 1-mark trap within 5-mark questions.",
    "source": "NCERT Class 10 Activity 2.3 & 2.4"
  },
  {
    "id": "sci_c2_q42",
    "chapter": 2,
    "chapterName": "Acids, Bases and Salts",
    "marks": 5,
    "type": "LA",
    "question": "Comprehensive study of pH scale and chemical indicators:\n(a) Define pH. Express mathematically how pH is related to hydrogen ion concentration. What is the pH of pure neutral water at 25°C?\n(b) Differentiate between a Strong Acid and a Weak Acid, and between a Concentrated Acid and a Dilute Acid.\n(c) Describe the color changes observed with Universal Indicator across the pH range from 1 to 14.\n(d) Explain what olfactory indicators are and name two common natural olfactory indicators.",
    "answer": "(a) pH Definition & Math:\n- Definition: pH is a measure of the hydrogen ion ($H^+$ or $H_3O^+$) concentration in an aqueous solution, representing its degree of acidity or alkalinity.\n- Mathematical relation: $\\text{pH} = -\\log_{10}[\\text{H}^+]$.\n- Pure neutral water at 25°C: $[\\text{H}^+] = 10^{-7}\\text{ mol/L}$, hence $\\text{pH} = 7$.\n\n(b) Strong vs Weak & Concentrated vs Dilute:\n- Strong Acid: Completely ionizes/dissociates in aqueous solution into $H^+$ ions (e.g., HCl, $HNO_3$, $H_2SO_4$).\n- Weak Acid: Partially ionizes in aqueous solution, leaving most molecules intact (e.g., $CH_3COOH$, $H_2CO_3$).\n- Concentrated Acid: Has a relatively large amount of acid dissolved per unit volume of water.\n- Dilute Acid: Has a relatively small amount of acid dissolved in a large volume of water.\n\n(c) Universal Indicator Color Palette:\n- pH 1–3 (Strong Acid): Deep Red to Pinkish-Red.\n- pH 4–6 (Weak Acid): Orange to Yellow.\n- pH 7 (Neutral): Grass Green.\n- pH 8–10 (Weak Base): Blue to Cyan.\n- pH 11–14 (Strong Base): Dark Blue, Indigo, to Deep Violet/Purple.\n\n(d) Olfactory Indicators:\n- Definition: Substances whose characteristic odor changes or disappears in acidic or basic media.\n- Two Natural Examples: (1) Chopped Onion extract (loses odor in base, retains in acid), (2) Vanilla essence or Clove oil.",
    "formula": "\\text{pH} = -\\log_{10}[\\text{H}^+]",
    "source": "CBSE 2024 Long Answer"
  },
];
