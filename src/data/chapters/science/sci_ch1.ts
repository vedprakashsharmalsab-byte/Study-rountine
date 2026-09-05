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
  },
  {"id": "sci_c1_q13",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Barium chloride on reacting with ammonium sulphate forms barium sulphate and ammonium chloride. Which category does this reaction belong to?\n(a) Displacement reaction only\n(b) Precipitation reaction only\n(c) Combination reaction\n(d) Double displacement and precipitation reaction",
    "options": [
      "Displacement reaction only",
      "Precipitation reaction only",
      "Combination reaction",
      "Double displacement and precipitation reaction"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Double displacement and precipitation reaction.",
    "explanation": "BaCl₂(aq) + (NH₄)₂SO₄(aq) ⟶ BaSO₄(s)↓ + 2NH₄Cl(aq). There is an exchange of ions between reactants (double displacement), and an insoluble white precipitate of BaSO₄ is formed.",
    "formula": "BaCl₂(aq) + (NH₄)₂SO₄(aq) ⟶ BaSO₄(s)↓ + 2NH₄Cl(aq)",
    "examinerNote": "BaSO₄ precipitate is insoluble in water and white in color.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c1_q14",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Electrolysis of water is a decomposition reaction. The mole ratio of hydrogen and oxygen gases liberated at the cathode and anode respectively during electrolysis of water is:\n(a) 1 : 1\n(b) 2 : 1\n(c) 4 : 1\n(d) 1 : 2",
    "options": [
      "1 : 1",
      "2 : 1",
      "4 : 1",
      "1 : 2"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 2 : 1.",
    "explanation": "Water formula is H₂O. Decomposition: 2H₂O(l) ⟶ 2H₂(g) + O₂(g). 2 moles of H₂ gas collect at the cathode for every 1 mole of O₂ gas at the anode, giving a volume ratio of 2:1.",
    "formula": "2H₂O(l) ⟶ 2H₂(g) + O₂(g)",
    "examinerNote": "Remember: Hydrogen collects at cathode (-ve electrode), Oxygen at anode (+ve electrode).",
    "source": "CBSE 2020, 2023"
  },
  {
    "id": "sci_c1_q15",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Fatty foods stored for a long period undergo rancidity due to:\n(a) Reduction of fats\n(b) Oxidation of oils and fats\n(c) Hydrogenation of unsaturated oils\n(d) Thermal decomposition of esters",
    "options": [
      "Reduction of fats",
      "Oxidation of oils and fats",
      "Hydrogenation of unsaturated oils",
      "Thermal decomposition of esters"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Oxidation of oils and fats.",
    "explanation": "When oils and fats are exposed to atmospheric oxygen, they get oxidized, resulting in foul taste and pungent odor known as rancidity.",
    "examinerNote": "Nitrogen gas (an unreactive antioxidant) is flushed in chip bags to prevent this.",
    "source": "NCERT Chapter 1 Page 13"
  },
  {
    "id": "sci_c1_q16",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "When silver chloride is exposed to sunlight for a long duration, it turns grey due to:\n(a) Formation of silver by decomposition of silver chloride\n(b) Sublimation of silver chloride\n(c) Evolution of chlorine gas from silver\n(d) Oxidation of silver chloride",
    "options": [
      "Formation of silver by decomposition of silver chloride",
      "Sublimation of silver chloride",
      "Evolution of chlorine gas from silver",
      "Oxidation of silver chloride"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Formation of silver by decomposition of silver chloride.",
    "explanation": "Photolytic decomposition: 2AgCl(s) —[Sunlight]⟶ 2Ag(s) + Cl₂(g). White AgCl decomposes to give metallic grey silver metal.",
    "formula": "2AgCl(s) ⟶ 2Ag(s) + Cl₂(g)",
    "examinerNote": "This photolytic reaction is the basis of black-and-white photography.",
    "source": "CBSE 2019, 2024"
  },
  {
    "id": "sci_c1_q17",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following gases can be used for storage of fresh samples of oil for a long time?\n(a) Carbon dioxide or oxygen\n(b) Nitrogen or oxygen\n(c) Carbon dioxide or helium\n(d) Helium or nitrogen",
    "options": [
      "Carbon dioxide or oxygen",
      "Nitrogen or oxygen",
      "Carbon dioxide or helium",
      "Helium or nitrogen"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Helium or nitrogen.",
    "explanation": "Both Helium and Nitrogen are chemically inert and provide an oxygen-free, non-oxidizing atmosphere preventing oxidation of fats.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c1_q18",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Silver bromide is stored in dark colored bottles.\nReason (R): Silver bromide decomposes in the presence of sunlight.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Dark bottles cut off incoming light rays to prevent photolytic decomposition of light-sensitive AgBr into silver and bromine vapor.",
    "source": "CBSE Board 2022"
  },
  {
    "id": "sci_c1_q19",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Respiration is an exothermic reaction.\nReason (R): During respiration, glucose combines with oxygen in cells of our body and releases energy.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + Energy (ATP). Heat/biological energy is liberated, satisfying the definition of exothermic reaction.",
    "formula": "C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + \\text{Energy}",
    "source": "NCERT Class 10 Page 10"
  },
  {
    "id": "sci_c1_q20",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "When crystals of ferrous sulphate are heated in a dry boiling tube, the color of the crystals changes from:\n(a) Green to blue\n(b) Green to reddish-brown\n(c) Red to white\n(d) Blue to green",
    "options": [
      "Green to blue",
      "Green to reddish-brown",
      "Red to white",
      "Blue to green"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Green to reddish-brown.",
    "explanation": "Green FeSO₄·7H₂O crystals first lose water of crystallization to turn white, then decompose into reddish-brown solid Fe₂O₃ and suffocating SO₂ and SO₃ gases.",
    "formula": "2FeSO₄(s) ⟶ Fe₂O₃(s) + SO₂(g) + SO₃(g)",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c1_q21",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 1,
    "type": "MCQ",
    "question": "Zinc reacts with dilute sulphuric acid to produce a gas that burns with a 'pop' sound. The gas is:\n(a) Oxygen\n(b) Sulphur dioxide\n(c) Hydrogen\n(d) Carbon dioxide",
    "options": [
      "Oxygen",
      "Sulphur dioxide",
      "Hydrogen",
      "Carbon dioxide"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Hydrogen.",
    "explanation": "Zn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)↑. Hydrogen gas burns with a characteristic pop sound when a burning splinter is brought near.",
    "formula": "Zn + H₂SO₄ ⟶ ZnSO₄ + H₂↑",
    "source": "NCERT Class 10 Page 2"
  },
  {
    "id": "sci_c1_q22",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "Why should a magnesium ribbon be cleaned before burning in air? Write the balanced chemical equation for the burning of magnesium ribbon.",
    "answer": "(1) Reason: Magnesium is a reactive metal. When stored, it reacts with atmospheric oxygen to form a stable, protective coating of basic magnesium oxide (MgO) on its surface. This layer prevents further contact with oxygen and inhibits burning. Sandpaper rubbing removes this layer.\n\n(2) Balanced Equation:\n2Mg(s) + O₂(g) ⟶ 2MgO(s) + Heat + Dazzling White Light",
    "formula": "2Mg(s) + O₂(g) ⟶ 2MgO(s)",
    "examinerNote": "State that the protective layer is magnesium oxide and mention sandpaper cleaning.",
    "source": "NCERT Class 10 Page 14 Question 1"
  },
  {
    "id": "sci_c1_q23",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "Differentiate between an Exothermic reaction and an Endothermic reaction with one balanced chemical equation for each.",
    "answer": "(1) Exothermic Reaction: A reaction in which heat energy is released into the surroundings.\nExample: Burning of natural gas:\nCH₄(g) + 2O₂(g) ⟶ CO₂(g) + 2H₂O(g) + Heat\n\n(2) Endothermic Reaction: A reaction in which heat energy is absorbed from the surroundings.\nExample: Decomposition of calcium carbonate:\nCaCO₃(s) —[Heat]⟶ CaO(s) + CO₂(g)",
    "formula": "CH₄ + 2O₂ ⟶ CO₂ + 2H₂O + \\Delta H",
    "examinerNote": "Equations must be balanced to get full 2 marks.",
    "source": "CBSE 2021, 2023"
  },
  {
    "id": "sci_c1_q24",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "Identify the substance oxidized, substance reduced, oxidizing agent, and reducing agent in the reaction:\nMnO₂ + 4HCl ⟶ MnCl₂ + 2H₂O + Cl₂",
    "answer": "(1) Substance Oxidized: HCl (loses hydrogen to form Cl₂).\n(2) Substance Reduced: MnO₂ (loses oxygen to form MnCl₂).\n(3) Oxidizing Agent: MnO₂ (supplies oxygen and oxidizes HCl).\n(4) Reducing Agent: HCl (supplies hydrogen and reduces MnO₂).",
    "formula": "MnO₂ + 4HCl ⟶ MnCl₂ + 2H₂O + Cl₂",
    "examinerNote": "Remember agents are always the reactants, never the products.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c1_q25",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "A shiny brown colored element 'X' on heating in air becomes black in color. Name the element 'X' and the black colored compound formed. Write the balanced equation.",
    "answer": "(1) Element 'X': Copper (Cu), which is a shiny reddish-brown metal.\n(2) Black compound formed: Copper(II) oxide (CuO).\n(3) Balanced Equation:\n2Cu(s) + O₂(g) —[Heat]⟶ 2CuO(s) [Black coating]",
    "formula": "2Cu(s) + O₂(g) ⟶ 2CuO(s)",
    "examinerNote": "NCERT In-text classic question. Specify copper(II) oxide, not cuprous oxide.",
    "source": "NCERT Class 10 In-text"
  },
  {
    "id": "sci_c1_q26",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "What is corrosion? Name two conditions necessary for the rusting of iron. Suggest one method to prevent rusting.",
    "answer": "(1) Definition: Corrosion is the slow eating away of metals by the chemical action of air, moisture, or acids on their surface.\n(2) Necessary Conditions for Rusting: (i) Presence of Oxygen (Air), and (ii) Presence of Moisture (Water).\n(3) Prevention Method: Galvanization (coating iron with a protective thin layer of molten zinc) or painting.",
    "examinerNote": "Rust formula: Fe₂O₃·xH₂O (hydrated ferric oxide).",
    "source": "CBSE 2020 Board Paper"
  },
  {
    "id": "sci_c1_q27",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 2,
    "type": "SA",
    "question": "Why do we apply paint on iron articles? What role does oil/fat packaging with nitrogen gas play?",
    "answer": "(1) Painting Iron Articles: Paint creates an impermeable barrier that cuts off direct physical contact between the metallic iron surface and atmospheric oxygen and moisture, preventing rust formation.\n\n(2) Nitrogen Packaging: Nitrogen is an unreactive inert gas. Replacing oxygen with nitrogen in chip packets prevents oxidation of unsaturated fats and oils, avoiding rancidity.",
    "examinerNote": "Two practical daily-life applications of redox control.",
    "source": "NCERT Exercises Ch 1"
  },
  {
    "id": "sci_c1_q28",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "2 g of ferrous sulphate crystals are heated in a dry boiling tube:\n(a) List two distinct observations.\n(b) Identify the type of chemical reaction taking place.\n(c) Write the complete balanced chemical equation for the reaction.",
    "answer": "(a) Two Observations:\n- The pale green color of ferrous sulphate crystals changes to reddish-brown solid (ferric oxide).\n- Characteristic suffocating odor of burning sulphur is evolved due to SO₂ and SO₃ gases.\n\n(b) Type of Reaction: Thermal Decomposition reaction (a single reactant breaks down into three simpler products upon heating).\n\n(c) Balanced Equation:\n2FeSO₄(s) —[Heat]⟶ Fe₂O₃(s) + SO₂(g)↑ + SO₃(g)↑",
    "formula": "2FeSO₄(s) ⟶ Fe₂O₃(s) + SO₂(g) + SO₃(g)",
    "examinerNote": "Mention both gases SO₂ and SO₃. Fe₂O₃ is reddish-brown.",
    "source": "CBSE 2022, 2023"
  },
  {
    "id": "sci_c1_q29",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "Write balanced chemical equations with state symbols for the following reactions:\n(a) Solutions of barium chloride and sodium sulphate in water react to form insoluble barium sulphate and sodium chloride solution.\n(b) Sodium hydroxide solution reacts with hydrochloric acid solution to produce sodium chloride and water.\n(c) Heating limestone strongly to produce quicklime and carbon dioxide gas.",
    "answer": "(a) BaCl₂(aq) + Na₂SO₄(aq) ⟶ BaSO₄(s)↓ + 2NaCl(aq)\n\n(b) NaOH(aq) + HCl(aq) ⟶ NaCl(aq) + H₂O(l)\n\n(c) CaCO₃(s) —[Heat]⟶ CaO(s) + CO₂(g)↑",
    "formula": "BaCl₂ + Na₂SO₄ ⟶ BaSO₄↓ + 2NaCl",
    "examinerNote": "State symbols (s, l, g, aq) are mandatory when requested in board questions.",
    "source": "NCERT Class 10 Page 6"
  },
  {
    "id": "sci_c1_q30",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "Translate into balanced chemical equations and identify the type of reaction in each case:\n(a) Potassium bromide(aq) + Barium iodide(aq) ⟶ Potassium iodide(aq) + Barium bromide(s)\n(b) Zinc carbonate(s) ⟶ Zinc oxide(s) + Carbon dioxide(g)\n(c) Hydrogen(g) + Chlorine(g) ⟶ Hydrogen chloride(g)",
    "answer": "(a) Equation: 2KBr(aq) + BaI₂(aq) ⟶ 2KI(aq) + BaBr₂(s)\nType: Double displacement reaction.\n\n(b) Equation: ZnCO₃(s) —[Heat]⟶ ZnO(s) + CO₂(g)↑\nType: Thermal decomposition reaction.\n\n(c) Equation: H₂(g) + Cl₂(g) —[Sunlight]⟶ 2HCl(g)\nType: Combination reaction.",
    "examinerNote": "1 mark per sub-part: 0.5 for equation + 0.5 for reaction type.",
    "source": "CBSE 2020 Board Paper"
  },
  {
    "id": "sci_c1_q31",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "Explain the following terms with one suitable chemical example for each:\n(a) Precipitation reaction\n(b) Thermal decomposition\n(c) Displacement reaction",
    "answer": "(a) Precipitation Reaction: Any reaction that produces an insoluble solid (precipitate) that separates out from the solution.\nExample: AgNO₃(aq) + NaCl(aq) ⟶ AgCl(s)↓ [White ppt] + NaNO₃(aq)\n\n(b) Thermal Decomposition: A decomposition reaction carried out by heating.\nExample: 2Pb(NO₃)₂(s) —[Heat]⟶ 2PbO(s) + 4NO₂(g) + O₂(g)\n\n(c) Displacement Reaction: A reaction in which a more reactive element displaces a less reactive element from its aqueous salt solution.\nExample: Fe(s) + CuSO₄(aq) [Blue] ⟶ FeSO₄(aq) [Pale Green] + Cu(s) [Brown deposit]",
    "source": "CBSE 2021, 2024"
  },
  {
    "id": "sci_c1_q32",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "A student drops clean iron nails into copper sulphate solution in a test tube. After 30 minutes:\n(a) What changes in color of the solution and the iron nails are observed?\n(b) Why does this change take place? Explain on the basis of reactivity.\n(c) Write the balanced chemical equation with state symbols.",
    "answer": "(a) Observations:\n- The initial deep blue color of copper sulphate solution fades and gradually turns light pale green.\n- The surface of iron nails gets coated with a reddish-brown deposit of copper metal.\n\n(b) Scientific Reason: Iron is situated higher than copper in the metal reactivity series. Hence, iron displaces copper from copper sulphate solution, releasing copper atoms that deposit on the nail while Fe²⁺ ions enter the solution forming ferrous sulphate.\n\n(c) Balanced Equation:\nFe(s) + CuSO₄(aq) [Blue] ⟶ FeSO₄(aq) [Pale Green] + Cu(s) [Reddish-Brown]",
    "formula": "Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)",
    "examinerNote": "Pale green FeSO₄ and reddish brown Cu must both be noted.",
    "source": "NCERT Class 10 Activity 1.9"
  },
  {
    "id": "sci_c1_q33",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "Define redox reaction. In the following reactions, identify the species oxidized and reduced:\n(a) H₂S + Cl₂ ⟶ 2HCl + S\n(b) Fe₂O₃ + 3CO ⟶ 2Fe + 3CO₂\n(c) 2Na + H₂ ⟶ 2NaH",
    "answer": "Definition: A chemical reaction in which oxidation and reduction take place simultaneously is known as a redox (reduction-oxidation) reaction.\n\n(a) In H₂S + Cl₂ ⟶ 2HCl + S:\n- H₂S is oxidized to S (loss of hydrogen).\n- Cl₂ is reduced to HCl (gain of hydrogen).\n\n(b) In Fe₂O₃ + 3CO ⟶ 2Fe + 3CO₂:\n- Fe₂O₃ is reduced to Fe (loss of oxygen).\n- CO is oxidized to CO₂ (gain of oxygen).\n\n(c) In 2Na + H₂ ⟶ 2NaH:\n- Na is oxidized to Na⁺ (loss of electron).\n- H₂ is reduced to H⁻ hydride (gain of electron).",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c1_q34",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 3,
    "type": "SA",
    "question": "A small amount of quicklime is added to water in a beaker:\n(a) Name and define the type of reaction that occurs.\n(b) What change in temperature is observed? Is this reaction endothermic or exothermic?\n(c) Write the chemical name, common name, and balanced equation for the product formed.",
    "answer": "(a) Type of Reaction: Combination Reaction (and vigorous exothermic reaction). Two reactants combine to yield a single product.\n\n(b) Temperature Change: The beaker becomes intensely hot to touch with hissing sound. This is an Exothermic reaction because a large amount of heat energy is evolved.\n\n(c) Product:\n- Chemical Name: Calcium hydroxide\n- Common Name: Slaked lime\n- Balanced Equation: CaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + Heat",
    "formula": "CaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + \\text{Heat}",
    "examinerNote": "CaO is quicklime; Ca(OH)₂ is slaked lime.",
    "source": "NCERT Class 10 Activity 1.4"
  },
  {
    "id": "sci_c1_q35",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an electrochemistry laboratory, a group of students set up the electrolysis of acidified water using carbon electrodes, a 6V battery, and two graduated test tubes filled with water inverted over the electrodes.\n\n(a) Why is a few drops of dilute sulphuric acid added to distilled water before passing electric current?\n(b) Name the gases collected at the cathode and anode respectively.\n(c) Why is the volume of gas collected over one electrode double that of the gas collected over the other?\n(d) How would you test the gas evolved at the cathode?",
    "answer": "(a) Pure distilled water is a covalent liquid with very low concentration of free ions, making it a poor conductor of electricity. Adding dilute sulphuric acid provides free H⁺ and SO₄²⁻ ions, making it conduct electric current freely.\n\n(b) Gases collected:\n- At Cathode (negative electrode): Hydrogen gas (H₂).\n- At Anode (positive electrode): Oxygen gas (O₂).\n\n(c) Water molecule contains hydrogen and oxygen in the atomic ratio 2 : 1 by volume ($H_2O$). The stoichiometry of the decomposition reaction is:\n2H₂O(l) ⟶ 2H₂(g) + O₂(g)\nThus, 2 volumes of hydrogen are liberated for every 1 volume of oxygen.\n\n(d) Bring a burning wooden splinter near the mouth of the cathode test tube. The gas burns rapidly with a characteristic sharp 'pop' sound, confirming hydrogen gas.",
    "formula": "2H₂O(l) \\xrightarrow{\\text{Electricity}} 2H₂(g) + O₂(g)",
    "examinerNote": "1 mark per sub-part. Emphasize why water must be acidified.",
    "source": "CBSE Official Sample Paper 2025"
  },
  {
    "id": "sci_c1_q36",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: An art conservator noticed that an ancient silver artifact turned completely black over time in a polluted urban environment. Meanwhile, an old copper vessel acquired a dull greenish patina, and iron structural bars formed flaky brown powder.\n\n(a) Name the black substance formed on the silver artifact and state the chemical gas responsible for this tarnishing.\n(b) What is the green substance formed on copper? Write its chemical formula.\n(c) State the chemical name and formula of rust formed on iron.\n(d) Differentiate between tarnishing of silver and rusting of iron in terms of structural damage to the metal.",
    "answer": "(a) The black substance is Silver Sulphide (Ag₂S). It forms when silver reacts with trace hydrogen sulphide gas (H₂S) present in polluted air:\n2Ag(s) + H₂S(g) ⟶ Ag₂S(s) + H₂(g)\n\n(b) The green coating on copper is Basic Copper Carbonate, a mixture of copper carbonate and copper hydroxide:\nFormula: CuCO₃·Cu(OH)₂\n\n(c) Rust is Hydrated Ferric Oxide:\nFormula: Fe₂O₃·xH₂O\n\n(d) Structural Impact:\n- Tarnishing of silver forms a thin surface coating that does not eat deep into the core metal.\n- Rusting of iron forms a porous, flaky layer that continuously chips off, exposing fresh underlying iron to further corrosion until the entire structural metal is destroyed.",
    "formula": "4Fe + 3O₂ + 2xH₂O ⟶ 2Fe₂O₃\\cdot xH₂O",
    "examinerNote": "Ensure CuCO₃·Cu(OH)₂ is specified for green copper corrosion.",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c1_q37",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an industrial chemistry plant, calcium carbonate (limestone) is heated continuously in a lime kiln to produce quicklime. Quicklime is then slaked with water for whitewashing. A painter applies slaked lime on walls, which gradually develops a shiny marble-like finish after 2–3 days.\n\n(a) Write the balanced chemical equation for the decomposition of limestone in the kiln.\n(b) What type of reaction is the conversion of quicklime to slaked lime? Write the equation.\n(c) Explain the chemical reason why whitewashed walls do not shine immediately but acquire a glossy marble look after 48 to 72 hours.\n(d) Write the chemical formula of marble and limestone.",
    "answer": "(a) Thermal decomposition of limestone in lime kiln:\nCaCO₃(s) —[1000°C]⟶ CaO(s) + CO₂(g)↑\n\n(b) It is an Exothermic Combination reaction:\nCaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + Heat\n\n(c) Reason for delayed shine: Calcium hydroxide (slaked lime) solution applied on the wall reacts very slowly with atmospheric carbon dioxide gas over 2 to 3 days to precipitate a thin, hard, reflective crystalline crust of calcium carbonate (CaCO₃):\nCa(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s) + H₂O(l)\nThis insoluble CaCO₃ imparts the brilliant white shiny finish.\n\n(d) Chemical formula of marble, limestone, and chalk is identical: CaCO₃ (Calcium Carbonate).",
    "formula": "Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s) + H₂O(l)",
    "examinerNote": "Classic limestone cycle question. All three equations must be known.",
    "source": "NCERT Class 10 Page 7"
  },
  {
    "id": "sci_c1_q38",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an experiment, a student dissolved 2 g of lead nitrate in 20 mL distilled water in test tube A, and 2 g of potassium iodide in 20 mL distilled water in test tube B. When the contents of both test tubes were mixed together, an instantaneous vibrant change was observed.\n\n(a) What is the color of the precipitate formed upon mixing? Name the compound.\n(b) Write the complete balanced ionic chemical equation for this reaction.\n(c) Is this a double displacement reaction, a precipitation reaction, or both? Justify.\n(d) If potassium sulphate was used instead of potassium iodide, what would be the formula and color of the precipitate formed, if any?",
    "answer": "(a) A bright Yellow precipitate is formed. The compound is Lead Iodide (PbI₂).\n\n(b) Balanced Chemical Equation:\nPb(NO₃)₂(aq) + 2KI(aq) ⟶ PbI₂(s)↓ [Yellow ppt] + 2KNO₃(aq)\n\n(c) It is BOTH a double displacement and a precipitation reaction:\n- Double Displacement: Because there is mutual exchange of ions (Pb²⁺ exchanges with K⁺).\n- Precipitation: Because an insoluble solid (PbI₂) separates out from aqueous solution.\n\n(d) If potassium sulphate (K₂SO₄) is used, lead sulphate (PbSO₄) would be formed as a White precipitate:\nPb(NO₃)₂(aq) + K₂SO₄(aq) ⟶ PbSO₄(s)↓ [White ppt] + 2KNO₃(aq)",
    "formula": "Pb(NO₃)₂(aq) + 2KI(aq) ⟶ PbI₂(s)↓ + 2KNO₃(aq)",
    "examinerNote": "PbI₂ is bright yellow; PbSO₄ is white. Very common practical exam question.",
    "source": "NCERT Class 10 Activity 1.2"
  },
  {
    "id": "sci_c1_q39",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 5,
    "type": "LA",
    "question": "Answer the following comprehensive questions on chemical reactions:\n(a) What is a balanced chemical equation? Why should chemical equations always be balanced according to modern physical laws?\n(b) Balance the following skeletal equations:\n(i) HNO₃ + Ca(OH)₂ ⟶ Ca(NO₃)₂ + H₂O\n(ii) NaOH + H₂SO₄ ⟶ Na₂SO₄ + H₂O\n(iii) NaCl + AgNO₃ ⟶ AgCl + NaNO₃\n(c) Write two limitations of a chemical equation and state how they can be overcome to make the equation more informative.",
    "answer": "(a) Balanced Chemical Equation:\n- Definition: A chemical equation in which the total number of atoms of each element is equal on both the reactant side and the product side.\n- Scientific Law: Must be balanced in accordance with the Law of Conservation of Mass (Lavoisier, 1789), which states that matter can neither be created nor destroyed in a chemical reaction. Therefore, the total mass of products must equal the total mass of reactants.\n\n(b) Balanced Equations:\n(i) 2HNO₃ + Ca(OH)₂ ⟶ Ca(NO₃)₂ + 2H₂O\n(ii) 2NaOH + H₂SO₄ ⟶ Na₂SO₄ + 2H₂O\n(iii) NaCl + AgNO₃ ⟶ AgCl + NaNO₃ [Already balanced]\n\n(c) Making Equations More Informative:\n- Limitation 1: Skeletal equation does not reveal physical states. Solved by writing state symbols: (s) for solid, (l) for liquid, (g) for gas, and (aq) for aqueous solution.\n- Limitation 2: Does not indicate specific reaction conditions. Solved by specifying temperature, pressure, or catalyst above/below the arrow (e.g., sunlight, Δ for heat, 340 atm).",
    "formula": "\\text{Total Mass of Reactants} = \\text{Total Mass of Products}",
    "examinerNote": "Always quote Lavoisier's Law of Conservation of Mass in part (a).",
    "source": "CBSE Board 2024 Long Answer"
  },
  {
    "id": "sci_c1_q40",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 5,
    "type": "LA",
    "question": "Classify and explain the five major types of chemical reactions. Provide one authentic balanced chemical equation with state symbols for each type:\n(a) Combination Reaction\n(b) Decomposition Reaction\n(c) Displacement Reaction\n(d) Double Displacement Reaction\n(e) Redox Reaction",
    "answer": "(a) Combination Reaction:\nA reaction where two or more substances combine to form a single new product.\nEquation: 2Mg(s) + O₂(g) ⟶ 2MgO(s)\n\n(b) Decomposition Reaction:\nA reaction where a single compound breaks down into two or more simpler substances when supplied with heat, light, or electricity.\nEquation: 2KClO₃(s) —[Heat]⟶ 2KCl(s) + 3O₂(g)↑\n\n(c) Displacement Reaction:\nA reaction where a more reactive element displaces a less reactive element from its aqueous salt solution.\nEquation: Zn(s) + CuSO₄(aq) ⟶ ZnSO₄(aq) + Cu(s)\n\n(d) Double Displacement Reaction:\nA reaction where two ionic compounds exchange ions in aqueous solution to form two new compounds, one of which is often an insoluble precipitate.\nEquation: Na₂SO₄(aq) + BaCl₂(aq) ⟶ BaSO₄(s)↓ + 2NaCl(aq)\n\n(e) Redox Reaction:\nA reaction involving simultaneous oxidation (loss of electrons / gain of oxygen) and reduction (gain of electrons / loss of oxygen).\nEquation: CuO(s) + H₂(g) —[Heat]⟶ Cu(s) + H₂O(g)",
    "examinerNote": "All 5 balanced equations must be accompanied with proper states.",
    "source": "NCERT Class 10 Chapter Summary"
  },
  {
    "id": "sci_c1_q41",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 5,
    "type": "LA",
    "question": "Thermal decomposition reactions of nitrates and carbonates:\n(a) 2 g of lead nitrate powder is heated strongly in a dry test tube. State the color of residue left behind and name the two gases evolved.\n(b) Write the balanced chemical equation with state symbols for thermal decomposition of lead nitrate.\n(c) How would you identify the two gases evolved?\n(d) Name one industrial decomposition reaction that produces quicklime used in cement manufacture.",
    "answer": "(a) Observations:\n- Residue color: Buff-yellow solid of lead monoxide (PbO) remains in the boiling tube (reddish-brown when hot, yellow when cold).\n- Two gases evolved: Brown nitrogen dioxide fumes (NO₂) and colorless oxygen gas (O₂).\n\n(b) Balanced Chemical Equation:\n2Pb(NO₃)₂(s) —[Heat]⟶ 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑\n\n(c) Gas Identification Tests:\n- Nitrogen dioxide (NO₂): Reddish-brown pungent choking gas that turns moist blue litmus paper red (acidic gas).\n- Oxygen (O₂): Colorless, odorless gas that rekindles a glowing wooden splinter inserted into the test tube mouth.\n\n(d) Industrial Application:\nThermal decomposition of Calcium Carbonate (limestone) in a kiln:\nCaCO₃(s) —[Heat]⟶ CaO(s) [Quicklime] + CO₂(g)↑\nQuicklime is a critical primary raw material for manufacturing Portland cement and glass.",
    "formula": "2Pb(NO₃)₂(s) ⟶ 2PbO(s) + 4NO₂(g) + O₂(g)",
    "examinerNote": "High occurrence 5-mark board question.",
    "source": "CBSE 2020, 2023 Board Papers"
  },
  {
    "id": "sci_c1_q42",
    "chapter": 1,
    "chapterName": "Chemical Reactions and Equations",
    "marks": 5,
    "type": "LA",
    "question": "Redox processes in daily life and industrial chemistry:\n(a) Explain Rancidity. Suggest four distinct practical methods used in food industries to prevent rancidity.\n(b) What is Corrosion? Explain the electrochemical nature of rusting in iron.\n(c) Why is corrosion of iron a serious national economic problem while corrosion of aluminium is actually beneficial?",
    "answer": "(a) Rancidity & Prevention:\n- Definition: Slow aerial oxidation of fats and oils in foods, resulting in unpleasant smell, bad taste, and toxic compounds.\n- 4 Prevention Methods:\n  1. Adding synthetic antioxidants (BHA - Butylated Hydroxyanisole, BHT, Vitamin E).\n  2. Vacuum packing or flushing packaging with inert Nitrogen gas.\n  3. Refrigerating food (low temperature slows oxidation kinetics).\n  4. Storing foods in airtight, light-resistant opaque containers away from sunlight.\n\n(b) Corrosion & Rusting of Iron:\n- Chemical nature: In presence of moisture and oxygen, iron acts as a miniature electrochemical cell. Iron oxidizes to Fe²⁺ at anode, which further oxidizes to Fe³⁺, precipitating hydrated ferric oxide ($Fe_2O_3\\cdot xH_2O$):\n4Fe(s) + 3O₂(g) + 2xH₂O(l) ⟶ 2Fe₂O₃·xH₂O(s)\n\n(c) Iron vs Aluminium Corrosion:\n- Iron: Rust is soft, flaky, and porous. It chips off constantly, exposing fresh iron layers underneath until bridges, vehicles, and structures collapse (costing billions annually).\n- Aluminium: Readily reacts with atmospheric oxygen to form a continuous, non-porous, tenacious oxide skin of Al₂O₃ that adheres tightly to the metal, sealing it hermetically from further oxidation and protecting it permanently.",
    "formula": "4Al(s) + 3O₂(g) ⟶ 2Al₂O₃(s)",
    "examinerNote": "Comparing iron rust (porous) with aluminium oxide (impermeable protective film) is a hallmark of 100% topper answer.",
    "source": "NCERT Exemplar / CBSE Board 2022"
  },
];
