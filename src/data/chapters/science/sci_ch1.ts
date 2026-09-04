import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH1_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c1_q1",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is a balanced chemical equation with correct physical state symbols for the reaction between red hot iron and steam?\n(a) Fe(s) + H₂O(l) ⟶ FeO(s) + H₂(g)\n(b) 3Fe(s) + 4H₂O(l) ⟶ Fe₃O₄(s) + 4H₂(g)\n(c) 3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)\n(d) 2Fe(s) + 3H₂O(g) ⟶ Fe₂O₃(s) + 3H₂(g)",
    options: [
      "Fe(s) + H₂O(l) ⟶ FeO(s) + H₂(g)",
      "3Fe(s) + 4H₂O(l) ⟶ Fe₃O₄(s) + 4H₂(g)",
      "3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)",
      "2Fe(s) + 3H₂O(g) ⟶ Fe₂O₃(s) + 3H₂(g)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: 3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g).",
    explanation: "Iron does not react with cold or hot liquid water; it reacts only with steam (gaseous water, H₂O(g)), forming magnetic iron oxide (Fe₃O₄) and hydrogen gas.",
    formula: "3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)",
    examinerNote: "Crucial state symbol check: Water must be labeled (g) because iron reacts exclusively with steam.",
    source: "CBSE Sample Paper 2026 / Educart One Shot"
  },
  {
    id: "sci_c1_q2",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "When lead nitrate crystals are heated strongly in a dry test tube, the brown gas evolved is:\n(a) Lead oxide (PbO)\n(b) Nitrogen dioxide (NO₂)\n(c) Oxygen (O₂)\n(d) Nitrous oxide (N₂O)",
    options: [
      "Lead oxide (PbO)",
      "Nitrogen dioxide (NO₂)",
      "Oxygen (O₂)",
      "Nitrous oxide (N₂O)"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Nitrogen dioxide (NO₂).",
    explanation: "Thermal decomposition of lead nitrate yields solid yellow PbO, colorless O₂ gas, and pungent reddish-brown fumes of nitrogen dioxide (NO₂).",
    formula: "2Pb(NO₃)₂(s) ⟶ 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑",
    examinerNote: "Frequent practical question: PbO is yellow solid; NO₂ is brown gas; O₂ is colorless gas.",
    source: "NCERT Exemplar / CBSE Board PYQ"
  },
  {
    id: "sci_c1_q3",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "In the reaction: CuO + H₂ —[Heat]⟶ Cu + H₂O, which substance undergoes oxidation and which acts as the oxidizing agent?\n(a) H₂ is oxidized, CuO is oxidizing agent\n(b) Cu is oxidized, H₂O is oxidizing agent\n(c) CuO is oxidized, H₂ is oxidizing agent\n(d) H₂ is oxidized, H₂ is oxidizing agent",
    options: [
      "H₂ is oxidized, CuO is oxidizing agent",
      "Cu is oxidized, H₂O is oxidizing agent",
      "CuO is oxidized, H₂ is oxidizing agent",
      "H₂ is oxidized, H₂ is oxidizing agent"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: H₂ is oxidized, and CuO is the oxidizing agent.",
    explanation: "H₂ gains oxygen to form H₂O (oxidation). CuO provides the oxygen and gets reduced to Cu (acting as the oxidizing agent).",
    formula: "CuO + H₂ ⟶ Cu + H₂O",
    examinerNote: "Agents are ALWAYS reactants. Never select products like Cu or H₂O as oxidizing or reducing agents.",
    source: "Arihant All-In-One Class 10"
  },
  {
    id: "sci_c1_q4",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Calcium hydroxide solution is used for whitewashing walls.\nReason (R): Calcium hydroxide reacts slowly with carbon dioxide in the air to form a thin shiny layer of calcium carbonate on the walls.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    explanation: "Ca(OH)₂ applied during whitewashing reacts with atmospheric CO₂ over 2–3 days to deposit shiny, hard CaCO₃, explaining why whitewashed walls gleam after drying.",
    formula: "Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s) + H₂O(l)",
    examinerNote: "Classic assertion-reason. Both statements are accurate and logically linked.",
    source: "CBSE 2024 Board Question"
  },
  {
    id: "sci_c1_q5",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Which of the following processes is endothermic in nature?\n(a) Respiration in human body\n(b) Decomposition of calcium carbonate into quicklime and carbon dioxide\n(c) Dissolution of quicklime in water\n(d) Burning of natural gas (methane)",
    options: [
      "Respiration in human body",
      "Decomposition of calcium carbonate into quicklime and carbon dioxide",
      "Dissolution of quicklime in water",
      "Burning of natural gas (methane)"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Decomposition of calcium carbonate.",
    explanation: "Thermal decomposition of CaCO₃ requires continuous absorption of heat energy (1000°C), making it endothermic. Respiration, quicklime dissolution, and methane combustion are all exothermic.",
    formula: "CaCO₃(s) —[Heat]⟶ CaO(s) + CO₂(g)",
    examinerNote: "Respiration is exothermic because glucose oxidation releases ATP energy.",
    source: "KVS Support Material 2025-26"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c1_q6",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "SA",
    question: "Why does the color of copper sulphate solution change when an iron nail is dipped in it? Write the balanced chemical equation and state the type of reaction.",
    answer: "The blue color fades to light pale green because iron is more reactive than copper and displaces copper from copper sulphate solution to form ferrous sulphate (FeSO₄). Reddish-brown copper metal deposits on the nail.",
    steps: [
      "Step 1: State reactivity comparison: Iron (Fe) lies above Copper (Cu) in the metal reactivity series.",
      "Step 2: Write balanced equation: Fe(s) + CuSO₄(aq) [Blue] ⟶ FeSO₄(aq) [Pale Green] + Cu(s) [Brown deposit].",
      "Step 3: Classify reaction: Single Displacement Reaction."
    ],
    explanation: "Iron atoms lose 2 electrons to form Fe²⁺ ions, while Cu²⁺ ions in solution gain 2 electrons to form metallic Cu.",
    formula: "Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)",
    examinerNote: "Do not write that solution becomes colorless. The color changes specifically from blue to light pale green.",
    source: "NCERT Class 10 In-Text Page 10"
  },
  {
    id: "sci_c1_q7",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "SA",
    question: "Why is respiration considered an exothermic reaction? Explain with a balanced chemical equation.",
    answer: "During digestion, carbohydrates are broken down into glucose. In cellular respiration, this glucose combines with inhaled oxygen inside mitochondria to produce carbon dioxide, water, and liberate heat energy in the form of ATP.",
    steps: [
      "Step 1: Explain biochemical release of energy during cellular glucose oxidation.",
      "Step 2: Write balanced equation: C₆H₁₂O₆(aq) + 6O₂(g) ⟶ 6CO₂(g) + 6H₂O(l) + Energy (38 ATP)."
    ],
    explanation: "Any chemical process that releases energy to the surroundings is classified as exothermic.",
    formula: "C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + Energy",
    examinerNote: "1 mark for definition and explanation; 1 mark for balanced equation with 'Energy' shown on products side.",
    source: "CBSE 2023 Board Paper"
  },
  {
    id: "sci_c1_q8",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "SA",
    question: "Oil and fat containing food items are flushed with nitrogen gas before packaging. Why? Explain the chemical phenomenon prevented.",
    answer: "Nitrogen is an inert gas that creates an unreactive, oxygen-free atmosphere. It prevents Rancidity — the aerial oxidation of unsaturated fats and oils which produces foul smell, unpleasant taste, and toxic aldehydes.",
    steps: [
      "Step 1: Define Rancidity as slow oxidation of fats/oils when exposed to air.",
      "Step 2: Explain role of Nitrogen: acts as an antioxidant cushion displacing oxygen.",
      "Step 3: State consumer benefits: preserves crispness, aroma, and shelf-life."
    ],
    explanation: "Flushing bags with N₂ gas blocks contact between atmospheric oxygen and double bonds in lipids.",
    examinerNote: "Students must use the specific scientific term 'Rancidity' and mention 'inert atmosphere'.",
    source: "NCERT Class 10 Exercise Page 13"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c1_q9",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "A student added dilute sulphuric acid to zinc granules in a conical flask.\n(a) What changes were observed in temperature and gas evolution?\n(b) How will you confirm the identity of the gas evolved?\n(c) Write the balanced chemical equation with state symbols.",
    answer: "(a) Brisk effervescence with tiny bubbles was observed; the conical flask became warm to touch (exothermic).\n(b) Bring a burning wooden splinter near the mouth of the test tube; the gas burns with a characteristic 'pop' sound, confirming Hydrogen gas (H₂).\n(c) Zn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)↑.",
    steps: [
      "Step 1: State temperature observation (flask becomes hot ⟹ exothermic).",
      "Step 2: Describe H₂ pop sound combustion test.",
      "Step 3: Write balanced equation with state symbols: Zn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)↑."
    ],
    explanation: "Zinc is above hydrogen in the reactivity series, displacing H⁺ from dilute acid.",
    formula: "Zn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)",
    examinerNote: "Pop sound test is mandatory for proving H₂ gas.",
    source: "PW Sample Paper 2026 / CBSE 2022"
  },
  {
    id: "sci_c1_q10",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "Identify the type of chemical reaction in each of the following cases and write balanced chemical equations:\n(a) White silver chloride turns grey in sunlight.\n(b) Sodium sulphate solution is mixed with barium chloride solution.\n(c) Quicklime reacts vigorously with water.",
    answer: "(a) Photolytic Decomposition: 2AgCl(s) —[Sunlight]⟶ 2Ag(s) [Grey] + Cl₂(g)↑.\n(b) Double Displacement / Precipitation: Na₂SO₄(aq) + BaCl₂(aq) ⟶ BaSO₄(s)↓ [White ppt] + 2NaCl(aq).\n(c) Combination / Exothermic: CaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + Heat.",
    steps: [
      "Part (a): Photolysis of AgCl yielding silver metal.",
      "Part (b): Double displacement precipitation yielding insoluble barium sulphate.",
      "Part (c): Combination of calcium oxide and water forming slaked lime."
    ],
    explanation: "Reaction (a) is endothermic photolysis; (b) is ionic exchange precipitation; (c) is synthesis combination.",
    examinerNote: "1 mark per part (0.5 mark for identifying type, 0.5 mark for balanced equation).",
    source: "Arihant All-In-One Page 24"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c1_q11",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 5,
    type: "LA",
    question: "Decomposition reactions require energy in the form of heat, light, or electricity for breaking down reactants. Write one balanced chemical equation for each of these three types of decomposition reactions, stating the source of energy and the visual color/observation changes for each.",
    answer: "1. Thermal Decomposition (Heat):\n2FeSO₄(s) [Green] —[Heat]⟶ Fe₂O₃(s) [Reddish-brown] + SO₂(g) + SO₃(g).\nObservation: Green crystals lose water, turn white, then decompose into reddish-brown solid with choking smell of burning sulphur.\n\n2. Electrolytic Decomposition (Electricity):\n2H₂O(l) —[Electric Current]⟶ 2H₂(g) [Cathode] + O₂(g) [Anode].\nObservation: Bubbles of gas form at both electrodes; volume of H₂ at cathode is double that of O₂ at anode.\n\n3. Photolytic Decomposition (Light):\n2AgBr(s) [Pale Yellow] —[Sunlight]⟶ 2Ag(s) [Grey] + Br₂(g)↑.\nObservation: Pale yellow silver bromide turns metallic grey due to silver formation; used in black-and-white photography.",
    steps: [
      "Step 1: Write thermal decomposition equation (FeSO₄ or Pb(NO₃)₂) with color observations.",
      "Step 2: Write electrolysis of water with 2:1 volume ratio and electrode designations.",
      "Step 3: Write photolysis of AgCl or AgBr with photographic application note."
    ],
    explanation: "Decomposition reactions are endothermic because chemical bonds in the single reactant must absorb energy to cleave.",
    examinerNote: "Ensure you state both the reaction condition above the arrow and the color changes.",
    source: "CBSE 2024 Board 5-Mark Question"
  },
  {
    id: "sci_c1_q12",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In a laboratory investigation of redox reactions, a teacher heated black copper(II) oxide powder in a combustion tube while passing dry hydrogen gas over it. After some time, the black substance turned into a gleaming reddish-brown solid, and tiny water droplets collected at the cooler outlet of the tube.\n\n(a) Name the black substance and the reddish-brown product.\n(b) Write the balanced chemical equation for the reaction.\n(c) Identify the substance oxidized, substance reduced, oxidizing agent, and reducing agent.\n(d) Define redox reaction in terms of electron transfer.",
    answer: "(a) Black substance: Copper(II) oxide (CuO). Reddish-brown product: Copper metal (Cu).\n(b) CuO(s) [Black] + H₂(g) —[Heat]⟶ Cu(s) [Reddish-brown] + H₂O(g).\n(c) Substance oxidized: H₂ (gains oxygen). Substance reduced: CuO (loses oxygen). Oxidizing agent: CuO (furnishes oxygen). Reducing agent: H₂ (removes oxygen).\n(d) In terms of electrons: Oxidation is the loss of electrons (LEO), and Reduction is the gain of electrons (GER).",
    steps: [
      "Part (a): Identify CuO and Cu.",
      "Part (b): Write balanced redox equation.",
      "Part (c): Break down oxidation/reduction pairs and agents.",
      "Part (d): Modern electronic definition: Oxidation = loss of electrons; Reduction = gain of electrons."
    ],
    explanation: "CuO + H₂ is the benchmark CBSE redox reaction demonstrating simultaneous oxidation and reduction.",
    formula: "CuO + H₂ ⟶ Cu + H₂O",
    examinerNote: "All 4 redox terms in part (c) must be answered accurately for full 2 marks in that section.",
    source: "Educart Science One Shot 2026"
  }
];
