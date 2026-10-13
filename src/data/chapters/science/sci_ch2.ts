import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH2_QUESTIONS: VaultQuestion[] = [
  // =========================================================================
  // 1-MARK MCQs & ASSERTION-REASON
  // =========================================================================
  {
    id: "sci_c2_q1",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "An aqueous solution turns red litmus solution blue. Excess addition of which of the following solution would reverse the change?\n(a) Baking powder\n(b) Lime\n(c) Ammonium hydroxide solution\n(d) Hydrochloric acid",
    options: [
      "Baking powder",
      "Lime",
      "Ammonium hydroxide solution",
      "Hydrochloric acid"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: Hydrochloric acid.",
    explanation: "Turning red litmus blue indicates the solution is basic. To reverse the change (turn blue litmus back to red), an excess of an acidic substance must be added. Hydrochloric acid (HCl) is a strong acid, whereas baking powder, lime, and ammonium hydroxide are all basic.",
    formula: "Base + Excess Acid -> Acidic Medium (pH < 7)",
    examinerNote: "NCERT Chapter 2 End Exercise Q2. The other 3 options are all basic substances.",
    source: "CBSE 2024 / NCERT Exercise"
  },
  {
    id: "sci_c2_q2",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Which of the following gives the correct increasing order of acidic strength?\n(a) Water < Acetic acid < Hydrochloric acid\n(b) Water < Hydrochloric acid < Acetic acid\n(c) Acetic acid < Water < Hydrochloric acid\n(d) Hydrochloric acid < Water < Acetic acid",
    options: [
      "Water < Acetic acid < Hydrochloric acid",
      "Water < Hydrochloric acid < Acetic acid",
      "Acetic acid < Water < Hydrochloric acid",
      "Hydrochloric acid < Water < Acetic acid"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Water < Acetic acid < Hydrochloric acid.",
    explanation: "Pure water is neutral (pH 7). Acetic acid (CH3COOH) is a weak organic acid that partially ionises in water. Hydrochloric acid (HCl) is a strong mineral acid that completely dissociates into hydronium ions in water.",
    formula: "[H+] order: Water (10^-7 M) < Acetic acid (~10^-3 M) < Hydrochloric acid (~1 M)",
    examinerNote: "Strong acids ionise completely; weak acids ionise partially; pure water is neutral.",
    source: "NCERT Exemplar Q5"
  },
  {
    id: "sci_c2_q3",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "During the preparation of hydrogen chloride gas on a humid day, the gas is usually passed through the guard tube containing calcium chloride. The role of calcium chloride taken in the guard tube is to:\n(a) Absorb the evolved gas\n(b) Moisten the gas\n(c) Absorb moisture from the gas\n(d) Absorb Cl- ions from the evolved gas",
    options: [
      "Absorb the evolved gas",
      "Moisten the gas",
      "Absorb moisture from the gas",
      "Absorb Cl- ions from the evolved gas"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Absorb moisture from the gas.",
    explanation: "Anhydrous calcium chloride (CaCl2) is a powerful desiccant / drying agent. It removes atmospheric moisture/water vapour from the generated HCl gas so that dry HCl gas can be tested on dry litmus paper.",
    formula: "CaCl2(s) + xH2O(g) -> CaCl2.xH2O(s)",
    examinerNote: "NCERT Activity 2.9. Crucial experiment testing that dry HCl gas does NOT turn dry blue litmus red.",
    source: "CBSE 2023 / NCERT Activity 2.9"
  },
  {
    id: "sci_c2_q4",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "A sample of soil is mixed with water and allowed to settle. The clear supernatant solution turns the pH paper yellowish-orange. Which of the following would change the colour of this pH paper to greenish-blue?\n(a) Lemon juice\n(b) Vinegar\n(c) Common salt\n(d) An antacid",
    options: [
      "Lemon juice",
      "Vinegar",
      "Common salt",
      "An antacid"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: An antacid.",
    explanation: "Yellowish-orange pH paper indicates an acidic soil (pH ~4 to 5). To change it to greenish-blue (basic, pH ~8 to 9), a mild base must be added. An antacid (such as Mg(OH)2 or NaHCO3) is basic, whereas lemon juice and vinegar are acidic, and common salt is neutral.",
    formula: "Acidic (Yellow-Orange, pH < 7) -> Basic (Greenish-Blue, pH > 7)",
    examinerNote: "NCERT Exemplar Q7. Greenish-blue on universal indicator represents mild alkaline medium.",
    source: "NCERT Exemplar / CBSE Board 2022"
  },
  {
    id: "sci_c2_q5",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Sodium hydrogencarbonate when added to acetic acid evolves a gas. Which of the following statements are true about the gas evolved?\n(i) It turns lime water milky.\n(ii) It extinguishes a burning splinter.\n(iii) It dissolves in a solution of sodium hydroxide.\n(iv) It has a pungent suffocating odour.\n(a) (i) and (ii)\n(b) (i), (ii) and (iii)\n(c) (ii), (iii) and (iv)\n(d) (i) and (iv)",
    options: [
      "(i) and (ii)",
      "(i), (ii) and (iii)",
      "(ii), (iii) and (iv)",
      "(i) and (iv)"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: (i), (ii) and (iii).",
    explanation: "The reaction produces carbon dioxide gas: CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2. Carbon dioxide turns lime water milky, extinguishes a burning splinter, and dissolves in NaOH solution to form sodium carbonate (2NaOH + CO2 -> Na2CO3 + H2O). CO2 is an odorless gas, so statement (iv) is false.",
    formula: "CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2(g)",
    examinerNote: "CO2 is odorless; SO2 has a pungent suffocating odor. Do not confuse the two gases.",
    source: "NCERT Exemplar / CBSE 2023"
  },
  {
    id: "sci_c2_q6",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Common salt besides being used in kitchen can also be used as the raw material for making:\n(i) Washing soda\n(ii) Bleaching powder\n(iii) Baking soda\n(iv) Slaked lime\n(a) (i) and (ii)\n(b) (i), (ii) and (iii)\n(c) (i) and (iii)\n(d) (i), (iii) and (iv)",
    options: [
      "(i) and (ii)",
      "(i), (ii) and (iii)",
      "(i) and (iii)",
      "(i), (iii) and (iv)"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: (i), (ii) and (iii).",
    explanation: "Sodium chloride (NaCl) is the direct industrial starting material for making Baking soda and Washing soda (via the Solvay process) and Chlorine gas (via the Chlor-Alkali process), which is then reacted with slaked lime to make Bleaching powder. Slaked lime (Ca(OH)2) is obtained from limestone (CaCO3), not common salt.",
    formula: "NaCl -> NaOH + Cl2 -> CaOCl2; NaCl -> NaHCO3 -> Na2CO3.10H2O",
    examinerNote: "Slaked lime is manufactured by reacting quicklime (CaO from limestone) with water.",
    source: "NCERT Exemplar Q8"
  },
  {
    id: "sci_c2_q7",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "What is the formula and chemical name of Plaster of Paris?\n(a) CaSO4.2H2O, Calcium sulphate dihydrate\n(b) CaSO4.1/2H2O, Calcium sulphate hemihydrate\n(c) CaSO4.H2O, Calcium sulphate monohydrate\n(d) 2CaSO4.H2O, Dicalcium sulphate monohydrate",
    options: [
      "CaSO4.2H2O, Calcium sulphate dihydrate",
      "CaSO4.1/2H2O, Calcium sulphate hemihydrate",
      "CaSO4.H2O, Calcium sulphate monohydrate",
      "2CaSO4.H2O, Dicalcium sulphate monohydrate"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: CaSO4.1/2H2O, Calcium sulphate hemihydrate.",
    explanation: "Plaster of Paris is formed by heating gypsum at 373 K: CaSO4.2H2O -> CaSO4.1/2H2O + 1.5H2O. Two formula units of CaSO4 share one molecule of water of crystallisation.",
    formula: "CaSO4.1/2H2O",
    examinerNote: "CaSO4.2H2O is Gypsum. CaSO4.1/2H2O is Plaster of Paris.",
    source: "CBSE 2024 (Set 31/2/1)"
  },
  {
    id: "sci_c2_q8",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Which of the following compounds is used for softening hard water?\n(a) NaHCO3\n(b) Na2CO3.10H2O\n(c) CaOCl2\n(d) CaSO4.1/2H2O",
    options: [
      "NaHCO3",
      "Na2CO3.10H2O",
      "CaOCl2",
      "CaSO4.1/2H2O"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Na2CO3.10H2O (Washing soda).",
    explanation: "Washing soda (sodium carbonate decahydrate) removes permanent hardness of water by precipitating soluble calcium and magnesium ions as insoluble carbonates: Ca(2+) + CO3(2-) -> CaCO3(s).",
    formula: "Na2CO3.10H2O",
    examinerNote: "CBSE board favorite application question for Washing Soda.",
    source: "NCERT Intext Question / CBSE 2023"
  },
  {
    id: "sci_c2_q9",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): While diluting an acid, water should never be added to concentrated acid.\nReason (R): Dilution of concentrated acid is a highly exothermic process; adding water to acid causes localized boiling and splashing of caustic acid.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Dilution of an acid is highly exothermic. If water is poured into concentrated acid, the heat generated suddenly causes localized boiling, which can splash caustic acid out of the beaker and shatter the glass container. Acid must always be added slowly to water with constant stirring.",
    formula: "Concentrated Acid + Water -> Hydrated Ions + Enormous Heat",
    examinerNote: "Standard laboratory safety question in CBSE Section A.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c2_q10",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Tooth decay starts when the pH of the mouth falls below 5.5.\nReason (R): Bacteria present in the mouth degrade residual sugar and food particles to produce acids that corrode tooth enamel.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Tooth enamel is made of calcium hydroxyapatite (hardest substance in the body). When oral bacteria ferment leftover sugars, they release acids that lower the mouth pH below 5.5, dissolving and demineralizing the enamel.",
    formula: "Enamel Demineralisation Threshold: pH < 5.5",
    examinerNote: "Brushing with mildly alkaline toothpaste neutralises oral acidity.",
    source: "CBSE Official Sample Paper 2025"
  },
  {
    id: "sci_c2_q11",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Plaster of Paris should be stored in moisture-proof airtight containers.\nReason (R): Plaster of Paris absorbs moisture from the atmosphere and sets into a hard solid mass called gypsum.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Plaster of Paris (CaSO4.1/2H2O) readily combines with atmospheric water vapour: CaSO4.1/2H2O + 1.5H2O -> CaSO4.2H2O (Gypsum). Once it hydrates into hard gypsum, it permanently loses its setting property and becomes useless.",
    formula: "CaSO4.1/2H2O + 1.5H2O -> CaSO4.2H2O",
    examinerNote: "NCERT Chapter 2 End Exercise Q14.",
    source: "NCERT Exercise / CBSE 2023"
  },

  // =========================================================================
  // 2-MARK VERY SHORT ANSWER (VSA)
  // =========================================================================
  {
    id: "sci_c2_q12",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "VSA",
    question: "Why do curd and other sour substances not be kept in brass and copper vessels?",
    answer: "Curd and sour foodstuffs contain organic acids (such as lactic acid). When stored in brass or copper containers, these acids react with the copper and zinc metals to form toxic, poisonous metallic salts that can cause severe food poisoning.",
    explanation: "Metals react with acids to form metallic salts: Metal + Acid -> Salt + Hydrogen gas.",
    formula: "Organic Acid + Cu/Zn -> Toxic Copper/Zinc Salts + H2",
    examinerNote: "NCERT Intext Question. Full 2 marks for mentioning acid content of sour food and formation of poisonous/toxic metal salts.",
    source: "NCERT Intext / CBSE 2024"
  },
  {
    id: "sci_c2_q13",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "VSA",
    question: "Why does an aqueous solution of an acid conduct electricity, whereas aqueous solutions of glucose and alcohol do not?",
    answer: "An aqueous solution of an acid dissociates into mobile hydrogen/hydronium ions (H3O+) and anions (such as Cl-, SO4(2-)), which carry electrical charge and allow current to flow.\nIn contrast, glucose (C6H12O6) and ethyl alcohol (C2H5OH) form covalent solutions in water that do NOT dissociate into free ions. In the absence of mobile ions, electrical conduction cannot take place.",
    explanation: "NCERT Activity 2.8. Conduction in liquids requires free mobile ions.",
    formula: "HCl + H2O -> H3O+ + Cl- (Conductor); Glucose + H2O -> No Ions (Insulator)",
    examinerNote: "Award 1 mark for mentioning acid ionization into mobile ions, 1 mark for explaining non-ionization of glucose/alcohol.",
    source: "CBSE 2023 / NCERT Intext"
  },
  {
    id: "sci_c2_q14",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "VSA",
    question: "Why does dry HCl gas not change the colour of dry litmus paper, but turns moist blue litmus paper red?",
    answer: "Acidic properties are caused exclusively by hydrogen ions (H+) or hydronium ions (H3O+). Dry HCl gas is a covalent molecular gas that does NOT dissociate into H+ ions in the complete absence of water.\nWhen HCl gas comes into contact with moist blue litmus paper, it dissolves in the water film to dissociate into hydronium ions: HCl + H2O -> H3O+ + Cl-. These H3O+ ions turn blue litmus red.",
    explanation: "NCERT Activity 2.9. Ionization of acids is strictly an aqueous phenomenon.",
    formula: "HCl(g) + H2O(l) -> H3O+(aq) + Cl-(aq)",
    examinerNote: "Key phrase required: 'HCl ionises to release H+ ions only in the presence of water'.",
    source: "NCERT Intext / CBSE Board 2024"
  },
  {
    id: "sci_c2_q15",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "VSA",
    question: "A bee sting causes severe pain and irritation. What substance is present in the sting and what immediate household remedy should be applied to relieve the pain?",
    answer: "A bee sting injects an acidic venom containing methanoic acid (formic acid, HCOOH).\nImmediate household remedy: Applying a paste of a mild base such as baking soda (sodium hydrogencarbonate, NaHCO3) or calamine solution to the affected skin area neutralises the injected acid, providing instant pain relief.",
    explanation: "Neutralisation of injected methanoic acid by a mild base restores neutral skin pH.",
    formula: "Methanoic Acid + Mild Base (NaHCO3) -> Neutral Salt + Water",
    examinerNote: "Do NOT suggest vinegar (vinegar is acidic and would worsen a bee sting). Wasp stings are alkaline and treated with vinegar.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c2_q16",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 2,
    type: "VSA",
    question: "Explain what happens when carbon dioxide gas is passed through lime water:\n(a) For a short duration.\n(b) For an extended duration (in excess).\nWrite balanced chemical equations for both stages.",
    answer: "(a) Short duration: Lime water turns milky due to the formation of an insoluble white precipitate of calcium carbonate:\n    Ca(OH)2(aq) + CO2(g) -> CaCO3(s) [White ppt - Milky] + H2O(l)\n(b) Excess duration: The milkiness disappears completely and a clear solution is formed because insoluble calcium carbonate converts into soluble calcium hydrogencarbonate:\n    CaCO3(s) + H2O(l) + CO2(g) [excess] -> Ca(HCO3)2(aq) [Soluble / Clear]",
    explanation: "Standard qualitative test for carbon dioxide gas in NCERT Activity 2.5.",
    formula: "Ca(OH)2 + CO2 -> CaCO3; CaCO3 + H2O + CO2 -> Ca(HCO3)2",
    examinerNote: "1 mark for part (a) with equation; 1 mark for part (b) with equation.",
    source: "CBSE 2024 / NCERT Activity 2.5"
  },

  // =========================================================================
  // 3-MARK SHORT ANSWER (SA)
  // =========================================================================
  {
    id: "sci_c2_q17",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "Explain the Chlor-Alkali process for the manufacture of sodium hydroxide:\n(a) Write the balanced chemical equation.\n(b) Name the products liberated at the cathode and at the anode.\n(c) State one major commercial use for each of the three products.",
    answer: "(a) Balanced Chemical Equation:\n    2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + Cl2(g) [at anode] + H2(g) [at cathode]\n\n(b) Electrodes:\n    - Product at Anode (+): Chlorine gas (Cl2)\n    - Product at Cathode (-): Hydrogen gas (H2)\n    - In solution near Cathode: Sodium hydroxide (NaOH)\n\n(c) Commercial Uses:\n    1. Chlorine (Cl2): Disinfectant for water treatment, manufacture of PVC, pesticides, and bleaching powder.\n    2. Hydrogen (H2): Rocket fuel, manufacture of ammonia for fertilizers, margarine.\n    3. Sodium Hydroxide (NaOH): Manufacture of soaps and detergents, degreasing metals, paper making.",
    explanation: "Called 'Chlor-Alkali' because the products are chlorine ('chlor') and an alkali (NaOH).",
    formula: "2NaCl + 2H2O -> 2NaOH + Cl2 + H2",
    examinerNote: "1 mark for balanced equation; 1 mark for electrode allocations; 1 mark for uses.",
    source: "CBSE 2024 / NCERT Figure 2.8"
  },
  {
    id: "sci_c2_q18",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "Regarding Bleaching Powder:\n(a) Give its chemical name and chemical formula.\n(b) How is it manufactured? Write the balanced chemical equation.\n(c) State any two important commercial uses of bleaching powder.",
    answer: "(a) Chemical Name: Calcium oxychloride.\n    Chemical Formula: CaOCl2.\n\n(b) Manufacture: Bleaching powder is produced by the action of chlorine gas on dry slaked lime [Ca(OH)2]:\n    Ca(OH)2(s) + Cl2(g) -> CaOCl2(s) + H2O(l)\n\n(c) Commercial Uses:\n    1. Bleaching cotton and linen in textile mills; bleaching wood pulp in paper factories.\n    2. Disinfectant for drinking water to make it germ-free.\n    3. Used as an oxidising agent in chemical synthesis industries.",
    explanation: "Bleaching powder acts by releasing nascent oxygen when reacted with dilute acids or atmospheric carbon dioxide.",
    formula: "Ca(OH)2 + Cl2 -> CaOCl2 + H2O",
    examinerNote: "1 mark for name and formula; 1 mark for equation; 1 mark for two valid uses.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c2_q19",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "(a) What is baking powder? How does it differ from baking soda?\n(b) What role does baking powder play in making cakes soft and spongy?\n(c) What happens when baking soda is heated during cooking? Write the balanced chemical equation.",
    answer: "(a) Baking soda is pure sodium hydrogencarbonate (NaHCO3). Baking powder is a mixture of baking soda (NaHCO3) and a mild edible acid such as tartaric acid.\n\n(b) When baking powder is mixed with water and heated during baking, NaHCO3 reacts with tartaric acid to produce carbon dioxide gas:\n    NaHCO3 + H+ -> CO2 + H2O + Sodium tartrate salt\n    The evolved CO2 gas gets trapped in the wet dough, bubbles up, and causes the cake or bread to rise, making it porous, soft, and spongy. The tartaric acid neutralises the alkaline sodium carbonate formed, preventing a bitter taste.\n\n(c) When baking soda is heated alone during cooking:\n    2NaHCO3(s) -> Na2CO3(s) + H2O(l) + CO2(g)",
    explanation: "Tartaric acid acts as an edible neutralising buffer against bitter sodium carbonate.",
    formula: "2NaHCO3 -> Na2CO3 + H2O + CO2; NaHCO3 + H+ -> CO2 + H2O + Sodium salt",
    examinerNote: "1 mark for difference; 1 mark for soft/spongy explanation; 1 mark for heating equation.",
    source: "CBSE 2024 / NCERT Intext"
  },
  {
    id: "sci_c2_q20",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "(a) How is Washing Soda prepared from sodium chloride? Write the balanced chemical equations.\n(b) What is meant by water of crystallisation?\n(c) Name one sodium compound other than sodium hydroxide manufactured using washing soda.",
    answer: "(a) Preparation of Washing Soda (Solvay Process):\n    Step 1: NaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3\n    Step 2: 2NaHCO3 -> Na2CO3 + H2O + CO2\n    Step 3 (Recrystallisation): Na2CO3 + 10H2O -> Na2CO3.10H2O [Washing Soda]\n\n(b) Water of crystallisation is the fixed number of water molecules chemically bonded to each formula unit of a salt in its crystal lattice.\n\n(c) Borax [Na2B4O7.10H2O] is manufactured industrially using sodium carbonate.",
    explanation: "Decahydrate indicates that 10 molecules of water are coordinate-bonded to each sodium carbonate formula unit.",
    formula: "Na2CO3 + 10H2O -> Na2CO3.10H2O",
    examinerNote: "1.5 marks for equations; 1 mark for water of crystallisation definition; 0.5 marks for Borax.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c2_q21",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 3,
    type: "SA",
    question: "Regarding Plaster of Paris (POP):\n(a) Write the balanced chemical equation for the preparation of POP from gypsum, mentioning the exact temperature required.\n(b) Why should the temperature not be allowed to rise above 373 K (100 deg C)?\n(c) Explain what happens when POP is mixed with water.",
    answer: "(a) POP is prepared by heating gypsum at precisely 373 K (100 deg C):\n    CaSO4.2H2O(s) -> CaSO4.1/2H2O(s) + 1.5H2O(g)\n\n(b) If temperature exceeds 373 K, gypsum loses ALL its water of crystallisation to form anhydrous calcium sulphate (CaSO4), commonly called 'dead burnt plaster'. Dead burnt plaster completely loses the property of setting with water.\n\n(c) When POP is mixed with water, it rehydrates and sets within 10 to 15 minutes into a hard rigid crystalline mass of gypsum:\n    CaSO4.1/2H2O(s) + 1.5H2O(l) -> CaSO4.2H2O(s) [Gypsum - Hard Mass]",
    explanation: "The setting of POP is an exothermic hydration process accompanied by slight volumetric expansion, which helps it fill casting moulds perfectly.",
    formula: "CaSO4.2H2O <-> CaSO4.1/2H2O + 1.5H2O",
    examinerNote: "1 mark for preparation equation with 373 K; 1 mark for dead burnt plaster; 1 mark for rehydration equation.",
    source: "CBSE 2024 (Set 31/1/3)"
  },

  // =========================================================================
  // 5-MARK LONG ANSWER (LA)
  // =========================================================================
  {
    id: "sci_c2_q22",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 5,
    type: "LA",
    question: "A white chemical compound 'X' is widely used in baking and as an antacid.\n(a) Identify compound 'X' and write its chemical formula.\n(b) How is 'X' manufactured industrially? Write the balanced chemical equation.\n(c) What happens when 'X' is heated strongly? Write the chemical equation.\n(d) When compound 'X' is heated, it forms compound 'Y'. When 'Y' is recrystallised with water, it forms compound 'Z', which is used to remove permanent hardness of water. Identify 'Y' and 'Z' and write the balanced equation for the formation of 'Z'.\n(e) State why compound 'X' is used in soda-acid fire extinguishers.",
    answer: "(a) Compound 'X' is Sodium hydrogencarbonate (Baking soda). Formula: NaHCO3.\n\n(b) Industrial Manufacture (Solvay Process):\n    NaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3\n\n(c) Heating 'X':\n    2NaHCO3(s) -> Na2CO3(s) + H2O(l) + CO2(g)\n\n(d) Compound 'Y' is anhydrous Sodium carbonate (Na2CO3).\n    Compound 'Z' is Sodium carbonate decahydrate (Washing soda, Na2CO3.10H2O).\n    Recrystallisation Equation: Na2CO3(s) + 10H2O(l) -> Na2CO3.10H2O(s)\n\n(e) In soda-acid fire extinguishers, NaHCO3 reacts with dilute sulphuric acid to produce a large volume of carbon dioxide gas (CO2) under high pressure. CO2 is non-flammable and heavier than air; it envelopes the burning material, cutting off atmospheric oxygen supply and extinguishing the fire.",
    explanation: "This classic CBSE 5-mark deductive synthesis problem tests the relationships connecting common salt, baking soda, and washing soda.",
    formula: "X = NaHCO3; Y = Na2CO3; Z = Na2CO3.10H2O",
    examinerNote: "1 mark each for parts (a), (b), (c), (d), and (e).",
    source: "CBSE Board 2024 (Set 31/2/2)"
  },
  {
    id: "sci_c2_q23",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 5,
    type: "LA",
    question: "(a) Define the pH scale. How is pH related to the concentration of hydronium ions in solution?\n(b) Five solutions A, B, C, D, and E have pH values of 4, 1, 11, 7, and 9 respectively. Which solution is:\n  (i) Strongly acidic?\n  (ii) Strongly alkaline?\n  (iii) Neutral?\n  (iv) Weakly acidic?\n  (v) Weakly alkaline?\nArrange the solutions in increasing order of hydrogen ion concentration.\n(c) State three real-world examples illustrating the biological or everyday importance of pH.",
    answer: "(a) The pH scale is a logarithmic scale ranging from 0 to 14 used to measure the hydrogen/hydronium ion concentration of a solution. pH = -log10[H3O+]. As [H3O+] increases, the pH decreases. A neutral solution has pH 7, acidic solutions have pH < 7, and alkaline solutions have pH > 7.\n\n(b) Solution Classifications:\n  (i) Strongly acidic: B (pH = 1)\n  (ii) Strongly alkaline: C (pH = 11)\n  (iii) Neutral: D (pH = 7)\n  (iv) Weakly acidic: A (pH = 4)\n  (v) Weakly alkaline: E (pH = 9)\n  Increasing order of [H+] concentration (lowest to highest):\n  C (pH 11) < E (pH 9) < D (pH 7) < A (pH 4) < B (pH 1)\n\n(c) Three Everyday Examples:\n  1. Human Digestive System: Stomach produces HCl at pH ~1.2 to activate pepsin. Excess acid causes hyperacidity, treated with antacids like Mg(OH)2.\n  2. Tooth Decay: Tooth enamel corrodes when mouth pH drops below 5.5 due to microbial acid production; alkaline toothpastes prevent decay.\n  3. Soil pH: Optimal crop growth occurs near pH 6.5-7.5. Acidic soil is neutralized with quicklime (CaO) or slaked lime [Ca(OH)2].",
    explanation: "Inverse logarithmic relationship: each single drop in pH represents a 10-fold increase in [H+] concentration.",
    formula: "pH = -log[H+]; Order: C < E < D < A < B",
    examinerNote: "Award 1.5 marks for part (a), 2 marks for part (b) including order, and 1.5 marks for part (c).",
    source: "NCERT Exercise Q9 & CBSE 2023"
  },
  {
    id: "sci_c2_q24",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 5,
    type: "LA",
    question: "(a) What is water of crystallisation? Describe an activity with a labelled diagram description to demonstrate that blue copper sulphate crystals contain water of crystallisation.\n(b) Name the chemical salt that changes colour upon heating and regaining moisture, and write the balanced reversible equation.\n(c) A student takes 2 mL of sodium hydroxide solution in a test tube and adds two drops of phenolphthalein solution. What colour change is observed? What happens when dilute HCl is added dropwise to this solution, and what happens when excess NaOH is added again? Explain the chemistry.",
    answer: "(a) Water of crystallisation is the fixed number of water molecules chemically combined in a formula unit of a salt in crystalline form.\nActivity Demonstration:\n1. Take 2 g of blue copper sulphate crystals (CuSO4.5H2O) in a clean, dry test tube.\n2. Heat the test tube over a burner flame.\nObservation: The blue crystals turn into a white anhydrous powder (CuSO4), and water droplets condense on the cooler upper walls of the test tube.\n3. Add 2 to 3 drops of water to the white powder.\nObservation: The characteristic blue colour is immediately restored!\n\n(b) Salt: Copper sulphate pentahydrate (CuSO4.5H2O).\n    Equation: CuSO4.5H2O(s) [Blue] <-> CuSO4(s) [White] + 5H2O(g)\n\n(c) Phenolphthalein Sequence:\n1. Phenolphthalein in NaOH: Turns deep pink (phenolphthalein is magenta-pink in basic medium).\n2. Adding dilute HCl dropwise: When enough acid is added to neutralise the base (H+ + OH- -> H2O), the solution turns colorless.\n3. Adding excess NaOH again: The basic medium is restored, so the pink colour reappears!",
    explanation: "Phenolphthalein changes from colorless in acid/neutral to pink in basic medium.",
    formula: "CuSO4.5H2O <-> CuSO4 + 5H2O; Net Neutralisation: H+ + OH- -> H2O",
    examinerNote: "2 marks for activity description; 1 mark for reversible equation; 2 marks for indicator colour cascade.",
    source: "NCERT Activity 2.15 & Activity 2.6"
  },

  // =========================================================================
  // 4-MARK CASE-BASED / COMPETENCY QUESTIONS
  // =========================================================================
  {
    id: "sci_c2_q25",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 4,
    type: "Case Study",
    question: "Read the passage and answer the following questions:\n\nIn an industrial electrolysis plant, electricity is passed through a concentrated aqueous solution of sodium chloride known as brine. The brine splits into three high-demand chemical products. At the anode, a greenish-yellow gas with a choking smell is liberated. At the cathode, a colorless, odorless gas with combustible properties is evolved. In the solution surrounding the cathode, a strong alkali is formed. In an adjoining unit of the factory, the greenish-yellow gas is bubbled over dry slaked lime to manufacture a disinfectant powder used in municipal water supplies.\n\n(a) Name this industrial process and write the balanced chemical equation. [1M]\n(b) Identify the gas evolved at the cathode and write its characteristic test. [1M]\n(c) Identify the disinfectant powder manufactured in the adjoining unit and write the balanced chemical equation for its formation. [2M]",
    answer: "(a) Name: The Chlor-Alkali Process.\n    Equation: 2NaCl(aq) + 2H2O(l) -> 2NaOH(aq) + Cl2(g) + H2(g)\n(b) Gas at Cathode (-): Hydrogen gas (H2).\n    Characteristic Test: It is combustible and bursts with a sharp 'pop' sound when tested with a burning candle.\n(c) Disinfectant Powder: Bleaching powder (Calcium oxychloride, CaOCl2).\n    Equation: Ca(OH)2(s) + Cl2(g) -> CaOCl2(s) + H2O(l)",
    explanation: "Brine electrolysis is the foundation of the chlor-alkali industry supplying raw materials for sanitation and chemical synthesis.",
    formula: "2NaCl + 2H2O -> 2NaOH + Cl2 + H2; Ca(OH)2 + Cl2 -> CaOCl2 + H2O",
    examinerNote: "Ensure anode is matched to chlorine and cathode to hydrogen. Inverting electrodes loses marks.",
    source: "CBSE Competency-Based Question Bank 2025"
  },
  {
    id: "sci_c2_q26",
    chapter: 2,
    chapterName: "Acids, Bases and Salts",
    marks: 4,
    type: "Case Study",
    question: "Read the passage and answer the questions that follow:\n\npH plays a crucial role in maintaining biological equilibrium. Human blood has a strictly regulated pH range of 7.35 to 7.45. In agriculture, crops fail to thrive if soil pH deviates from the optimal range. In nature, plants and animals employ chemical warfare using acids and bases. For instance, when a honeybee stings a human, it injects an acidic substance causing intense pain. Conversely, wasp stings inject an alkaline fluid. Wild nettle plants have stinging hairs that inject an acid, but nature often provides the remedy nearby in the form of dock plants.\n\n(a) What happens when the pH of rain water falls below 5.6, and what is its impact on aquatic life? [1M]\n(b) Name the acid present in nettle plant leaves and explain how the leaves of the dock plant provide relief. [1.5M]\n(c) A farmer finds that the soil of his crop field has a pH of 4.5. Suggest two chemical compounds he should add to the soil to optimize it for crop cultivation. [1.5M]",
    answer: "(a) When rain water pH falls below 5.6, it is classified as acid rain. When acid rain flows into lakes and rivers, it lowers water pH, impairing enzyme function and threatening the survival of aquatic organisms (fish, plants).\n(b) Acid in nettle plant: Methanoic acid (formic acid, HCOOH).\n    Relief by dock plant: Dock plant leaves contain mildly alkaline juices. Rubbing dock leaves over the stung area neutralises the acidic venom, soothing the pain.\n(c) The soil is overly acidic (pH 4.5). The farmer should treat it with basic compounds to neutralise the excess acidity:\n    1. Quicklime: Calcium oxide (CaO)\n    2. Slaked lime: Calcium hydroxide [Ca(OH)2], or chalk / limestone (CaCO3).",
    explanation: "Neutralisation in agriculture and nature maintains optimal physiological and biochemical conditions.",
    formula: "Acid Rain: pH < 5.6; Nettle Acid: HCOOH; Soil Neutraliser: CaO / Ca(OH)2",
    examinerNote: "1 mark for part (a); 1.5 marks for part (b); 1.5 marks for part (c).",
    source: "CBSE Board 2024 (Set 31/3/1)"
  }
];
