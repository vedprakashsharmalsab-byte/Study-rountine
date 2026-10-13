import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH1_QUESTIONS: VaultQuestion[] = [
  // =========================================================================
  // 1-MARK MCQs & ASSERTION-REASON
  // =========================================================================
  {
    id: "sci_c1_q1",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is a balanced chemical equation with correct physical state symbols for the reaction between red hot iron and steam?\n(a) Fe(s) + H2O(l) -> FeO(s) + H2(g)\n(b) 3Fe(s) + 4H2O(l) -> Fe3O4(s) + 4H2(g)\n(c) 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)\n(d) 2Fe(s) + 3H2O(g) -> Fe2O3(s) + 3H2(g)",
    options: [
      "Fe(s) + H2O(l) -> FeO(s) + H2(g)",
      "3Fe(s) + 4H2O(l) -> Fe3O4(s) + 4H2(g)",
      "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)",
      "2Fe(s) + 3H2O(g) -> Fe2O3(s) + 3H2(g)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g).",
    explanation: "Iron does not react with cold or hot liquid water; it reacts only with steam (gaseous water, H2O(g)), forming magnetic iron oxide (Fe3O4) and hydrogen gas.",
    formula: "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)",
    examinerNote: "Crucial state symbol check: Water must be labeled (g) because iron reacts exclusively with steam.",
    source: "CBSE Sample Paper 2026 / Educart One Shot"
  },
  {
    id: "sci_c1_q2",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "When lead nitrate crystals are heated strongly in a dry test tube, the brown gas evolved is:\n(a) Lead oxide (PbO)\n(b) Nitrogen dioxide (NO2)\n(c) Oxygen (O2)\n(d) Nitrous oxide (N2O)",
    options: [
      "Lead oxide (PbO)",
      "Nitrogen dioxide (NO2)",
      "Oxygen (O2)",
      "Nitrous oxide (N2O)"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Nitrogen dioxide (NO2).",
    explanation: "Thermal decomposition of lead nitrate yields solid yellow PbO, colorless O2 gas, and pungent reddish-brown fumes of nitrogen dioxide (NO2).",
    formula: "2Pb(NO3)2(s) -> 2PbO(s) + 4NO2(g) + O2(g)",
    examinerNote: "Frequent practical question: PbO is yellow solid; NO2 is brown gas; O2 is colorless gas.",
    source: "NCERT Exemplar / CBSE Board PYQ"
  },
  {
    id: "sci_c1_q3",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "During electrolysis of acidified water, the ratio of volume of gas collected at the cathode to that at the anode is:\n(a) 1 : 1\n(b) 1 : 2\n(c) 2 : 1\n(d) 4 : 1",
    options: ["1 : 1", "1 : 2", "2 : 1", "4 : 1"],
    correctOption: 2,
    answer: "Option (c) is correct: 2 : 1.",
    explanation: "Water (H2O) contains 2 parts hydrogen to 1 part oxygen by stoichiometric atom count. At the cathode, hydrogen gas is liberated, while oxygen is liberated at the anode: 2H2O -> 2H2(cathode) + O2(anode). Hence volume ratio V(cathode) : V(anode) = 2 : 1.",
    formula: "2H2O(l) -> 2H2(g) [Cathode, 2 vol] + O2(g) [Anode, 1 vol]",
    examinerNote: "Examiners trap students by inverting the question to anode : cathode (which would be 1:2). Pay careful attention to order!",
    source: "CBSE 2024 (Set 31/1/1)"
  },
  {
    id: "sci_c1_q4",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "What happens when dilute hydrochloric acid is added to iron filings?\n(a) Hydrogen gas and iron(II) chloride are produced.\n(b) Chlorine gas and iron(III) hydroxide are produced.\n(c) No reaction takes place.\n(d) Iron salt and water are produced.",
    options: [
      "Hydrogen gas and iron(II) chloride are produced.",
      "Chlorine gas and iron(III) hydroxide are produced.",
      "No reaction takes place.",
      "Iron salt and water are produced."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Hydrogen gas and iron(II) chloride (FeCl2) are produced.",
    explanation: "Iron is more reactive than hydrogen and displaces it from dilute acid: Fe(s) + 2HCl(aq) -> FeCl2(aq) + H2(g).",
    formula: "Fe(s) + 2HCl(aq) -> FeCl2(aq) + H2(g)",
    examinerNote: "Notice iron forms iron(II) chloride (FeCl2), NOT iron(III) chloride (FeCl3), because liberated H2 prevents further oxidation.",
    source: "NCERT Chapter 1 End Exercise Q1"
  },
  {
    id: "sci_c1_q5",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is a double displacement and precipitation reaction?\n(a) CaO(s) + H2O(l) -> Ca(OH)2(aq)\n(b) 2Mg(s) + O2(g) -> 2MgO(s)\n(c) Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)\n(d) Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)",
    options: [
      "CaO(s) + H2O(l) -> Ca(OH)2(aq)",
      "2Mg(s) + O2(g) -> 2MgO(s)",
      "Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)",
      "Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq).",
    explanation: "Ions are mutually exchanged between sodium sulphate and barium chloride, resulting in the instant formation of an insoluble white precipitate of barium sulphate (BaSO4).",
    formula: "Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) [White ppt] + 2NaCl(aq)",
    examinerNote: "The formation of insoluble BaSO4 confirms it is both a double displacement and a precipitation reaction.",
    source: "CBSE 2023 (Set 31/2/1)"
  },
  {
    id: "sci_c1_q6",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "In the redox reaction: MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2, the substance oxidised and the oxidising agent are respectively:\n(a) HCl and MnO2\n(b) MnO2 and HCl\n(c) HCl and Cl2\n(d) MnO2 and MnCl2",
    options: [
      "HCl and MnO2",
      "MnO2 and HCl",
      "HCl and Cl2",
      "MnO2 and MnCl2"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: HCl is oxidised and MnO2 is the oxidising agent.",
    explanation: "HCl loses hydrogen to form Cl2, meaning HCl is oxidised (hence it acts as the reducing agent). MnO2 loses oxygen to form MnCl2, meaning MnO2 is reduced (hence it acts as the oxidising agent).",
    formula: "MnO2 [Oxidising Agent] + 4HCl [Substance Oxidised] -> MnCl2 + 2H2O + Cl2",
    examinerNote: "Always select the oxidising agent and reducing agent from the REACTANTS side, never the products side.",
    source: "CBSE Board 2022 Term-1"
  },
  {
    id: "sci_c1_q7",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Exposure of white silver chloride to sunlight for a long duration turns it grey due to:\n(a) The formation of silver by decomposition of silver chloride\n(b) Sublimation of silver chloride\n(c) Evolution of chlorine gas from the silver chloride\n(d) Oxidation of silver chloride",
    options: [
      "The formation of silver by decomposition of silver chloride",
      "Sublimation of silver chloride",
      "Evolution of chlorine gas from the silver chloride",
      "Oxidation of silver chloride"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: The formation of silver metal by photolytic decomposition of silver chloride.",
    explanation: "In sunlight, silver chloride undergoes photochemical decomposition: 2AgCl(s) -> 2Ag(s) [grey] + Cl2(g). The grey color is due to finely divided silver metal.",
    formula: "2AgCl(s) [White] -> 2Ag(s) [Grey] + Cl2(g)",
    examinerNote: "NCERT Activity 1.8. This reaction and photolysis of AgBr are used in black and white photography.",
    source: "NCERT Exemplar Q2"
  },
  {
    id: "sci_c1_q8",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Barium chloride on reacting with ammonium sulphate forms barium sulphate and ammonium chloride. Which of the following correctly represents the type of the reaction involved?\n(i) Displacement reaction\n(ii) Precipitation reaction\n(iii) Combination reaction\n(iv) Double displacement reaction\n(a) (i) only\n(b) (ii) only\n(c) (iv) only\n(d) (ii) and (iv)",
    options: [
      "(i) only",
      "(ii) only",
      "(iv) only",
      "(ii) and (iv)"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: (ii) and (iv).",
    explanation: "BaCl2(aq) + (NH4)2SO4(aq) -> BaSO4(s) [white precipitate] + 2NH4Cl(aq). An exchange of ions takes place (double displacement) and an insoluble white precipitate of BaSO4 separates out (precipitation).",
    formula: "BaCl2(aq) + (NH4)2SO4(aq) -> BaSO4(s) + 2NH4Cl(aq)",
    examinerNote: "A double displacement reaction that forms an insoluble solid is simultaneously classified as a precipitation reaction.",
    source: "CBSE Board 2023"
  },
  {
    id: "sci_c1_q9",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): A magnesium ribbon is cleaned with sandpaper before burning in air.\nReason (R): Cleaning removes the protective layer of basic magnesium oxide / carbonate from the surface of the ribbon.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Magnesium reacts with atmospheric oxygen and moisture to form a thin, unreactive layer of basic magnesium carbonate/oxide. Sandpaper rubs away this coating so pure magnesium can react cleanly with oxygen and burn with a dazzling white flame.",
    formula: "2Mg(s) + O2(g) -> 2MgO(s)",
    examinerNote: "NCERT Activity 1.1 benchmark question. Full mark requires mentioning 'removal of protective oxide/carbonate layer'.",
    source: "CBSE Official Sample Paper 2025"
  },
  {
    id: "sci_c1_q10",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Respiration is considered an exothermic reaction.\nReason (R): During respiration, glucose combines with oxygen in the cells of our body and releases energy.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "During respiration, digested carbohydrates (glucose) undergo oxidation in body cells: C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy (ATP). Because energy is liberated, respiration is strictly classified as an exothermic process.",
    formula: "C6H12O6(aq) + 6O2(g) -> 6CO2(g) + 6H2O(l) + Energy",
    examinerNote: "Common misconception: Students confuse cellular respiration with breathing (mechanical inhalation/exhalation).",
    source: "CBSE Board 2024 (Set 31/3/2)"
  },
  {
    id: "sci_c1_q11",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Manufacturers of potato chips flush bags of chips with nitrogen gas.\nReason (R): Nitrogen is an inert gas that prevents oxidation of fats and oils (rancidity).\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Potato chips contain oils and fats. In the presence of atmospheric oxygen, these fats undergo oxidation, becoming rancid with an unpleasant odor and taste. Flushing packets with unreactive nitrogen gas displaces oxygen, preserving freshness.",
    formula: "Aerial Oxidation: Oils + O2 -> Rancid Acids / Aldehydes (Foul Odor)",
    examinerNote: "Examiners look for the keyword 'inert gas preventing aerial oxidation/rancidity'.",
    source: "CBSE Board 2023"
  },

  // =========================================================================
  // 2-MARK VERY SHORT ANSWER (VSA)
  // =========================================================================
  {
    id: "sci_c1_q12",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "VSA",
    question: "Why does the colour of copper sulphate solution change when an iron nail is dipped in it? Write the balanced chemical equation.",
    answer: "Iron is more reactive than copper and displaces copper from copper sulphate solution. The deep blue colour of CuSO4 fades to pale green due to the formation of ferrous sulphate (FeSO4), while reddish-brown copper metal deposits on the surface of the iron nail.\nEquation: Fe(s) + CuSO4(aq) [Blue] -> FeSO4(aq) [Pale Green] + Cu(s) [Reddish-Brown]",
    explanation: "This is a single displacement reaction governed by the reactivity series: Fe lies above Cu in the activity series.",
    formula: "Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s)",
    examinerNote: "Marking scheme: 1 mark for stating that iron is more reactive and forms green FeSO4; 1 mark for balanced equation with state symbols.",
    source: "NCERT Intext Question / CBSE 2024"
  },
  {
    id: "sci_c1_q13",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "VSA",
    question: "A solution of substance 'X' is used for white-washing.\n(a) Name the substance 'X' and write its chemical formula.\n(b) Write the reaction of substance 'X' with water and explain why walls acquire a shiny finish 2 to 3 days after white-washing.",
    answer: "(a) Substance 'X' is Calcium oxide (Quicklime). Formula: CaO.\n(b) Reaction with water: CaO(s) + H2O(l) -> Ca(OH)2(aq) [Slaked lime] + Heat.\nAfter white-washing, slaked lime reacts slowly with atmospheric carbon dioxide (CO2) over 2-3 days to form a thin, shiny layer of calcium carbonate (CaCO3):\nCa(OH)2(aq) + CO2(g) -> CaCO3(s) + H2O(l).",
    explanation: "Calcium carbonate gives the walls a durable, hard, shiny white marble-like finish.",
    formula: "Ca(OH)2(aq) + CO2(g) -> CaCO3(s) + H2O(l)",
    examinerNote: "Common error: Confusing substance 'X' (CaO) with the white-washing solution itself (Ca(OH)2). 'X' is quicklime (CaO).",
    source: "NCERT Intext Question / CBSE 2023"
  },
  {
    id: "sci_c1_q14",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "VSA",
    question: "Identify the substance oxidised, the substance reduced, the oxidising agent, and the reducing agent in the following reaction:\nCuO(s) + H2(g) -> Cu(s) + H2O(l)",
    answer: "- Substance oxidised: H2 (gains oxygen to form H2O)\n- Substance reduced: CuO (loses oxygen to form Cu)\n- Oxidising agent: CuO (provides oxygen)\n- Reducing agent: H2 (removes oxygen)",
    explanation: "In redox chemistry, the substance that is oxidised acts as the reducing agent, and the substance that is reduced acts as the oxidising agent.",
    formula: "CuO + H2 -> Cu + H2O",
    examinerNote: "Each identification carries 0.5 marks. Never write products (Cu or H2O) as oxidising/reducing agents.",
    source: "CBSE Board 2022"
  },
  {
    id: "sci_c1_q15",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "VSA",
    question: "What is meant by a precipitation reaction? Explain by giving a balanced chemical equation with state symbols.",
    answer: "A chemical reaction in which two aqueous solutions react to form an insoluble solid that separates out of the solution is called a precipitation reaction.\nExample: Aqueous sodium sulphate reacts with aqueous barium chloride to produce an insoluble white precipitate of barium sulphate:\nNa2SO4(aq) + BaCl2(aq) -> BaSO4(s) [white precipitate] + 2NaCl(aq)",
    explanation: "The precipitate is formed by electrostatic attraction between Ba(2+) cations and SO4(2-) anions in solution.",
    formula: "Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)",
    examinerNote: "1 mark for definition; 1 mark for balanced chemical equation with (s) and (aq) state symbols.",
    source: "NCERT Chapter 1 End Exercise Q8"
  },
  {
    id: "sci_c1_q16",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 2,
    type: "VSA",
    question: "Define rancidity. Write any two commercial methods used to prevent the rancidity of fat- and oil-containing food items.",
    answer: "Rancidity is the aerial oxidation of fats and oils present in food materials, resulting in the production of volatile compounds with an unpleasant, foul odor and sour taste.\nMethods to prevent rancidity:\n1. Flushing food packaging (such as potato chips bags) with unreactive nitrogen gas (N2) to displace atmospheric oxygen.\n2. Adding food antioxidants such as BHA (Butylated Hydroxyanisole) or BHT (Butylated Hydroxytoluene), or storing foods in airtight containers in refrigeration.",
    explanation: "Antioxidants preferentially react with oxygen free radicals, preventing lipid peroxidation.",
    formula: "Fats/Oils + O2 -> Rancid peroxides/acids",
    examinerNote: "1 mark for definition; 0.5 marks each for two prevention methods.",
    source: "CBSE 2024 / NCERT Exercise Q20"
  },

  // =========================================================================
  // 3-MARK SHORT ANSWER (SA)
  // =========================================================================
  {
    id: "sci_c1_q17",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "2 g of ferrous sulphate crystals are heated in a dry boiling tube.\n(a) List any two observations.\n(b) Name the chemical reaction taking place and write the balanced chemical equation with state symbols.\n(c) Describe the characteristic smell of the gases evolved.",
    answer: "(a) Observations:\n  1. The initial light green colour of ferrous sulphate crystals (FeSO4.7H2O) changes first to white (anhydrous FeSO4) and then to a reddish-brown solid (Fe2O3).\n  2. Choking, pungent smelling gases are evolved.\n(b) Type: Thermal decomposition reaction.\n  Equation: 2FeSO4(s) -> Fe2O3(s) [Reddish-Brown] + SO2(g) + SO3(g)\n(c) Smell: Characteristic suffocating odor of burning sulphur.",
    explanation: "Ferrous sulphate heptahydrate loses its 7 water molecules of crystallisation on gentle heating before decomposing at high temperature.",
    formula: "2FeSO4(s) -> Fe2O3(s) + SO2(g) + SO3(g)",
    examinerNote: "NCERT Activity 1.5. Award 1 mark for observations, 1 mark for balanced equation, 1 mark for reaction type and smell description.",
    source: "CBSE 2024 / NCERT Activity 1.5"
  },
  {
    id: "sci_c1_q18",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "Differentiate between a displacement reaction and a double displacement reaction. Give one balanced chemical equation for each category.",
    answer: "1. Displacement Reaction:\n  - Definition: A reaction in which a more reactive element displaces a less reactive element from its aqueous salt solution.\n  - Example: Zn(s) + CuSO4(aq) [Blue] -> ZnSO4(aq) [Colourless] + Cu(s) [Reddish-Brown]\n\n2. Double Displacement Reaction:\n  - Definition: A reaction in which two different aqueous compounds exchange their mutual ions to form two new compounds, often involving precipitate formation.\n  - Example: Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) [Yellow ppt] + 2KNO3(aq)",
    explanation: "Displacement involves an element and a compound; double displacement involves two ionic compounds swapping ionic partners.",
    formula: "Displacement: A + BC -> AC + B; Double Displacement: AB + CD -> AD + CB",
    examinerNote: "1.5 marks for displacement (definition + equation); 1.5 marks for double displacement (definition + equation).",
    source: "NCERT Exercise Q13 / CBSE 2023"
  },
  {
    id: "sci_c1_q19",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "Write balanced chemical equations for each of the following reactions and state their reaction classification:\n(a) Thermite reaction used to join cracked railway tracks.\n(b) Photochemical reaction used in black and white photography.\n(c) Dilute sulphuric acid added to zinc granules with evolution of hydrogen gas.",
    answer: "(a) Thermite Reaction (Displacement & Highly Exothermic):\n  Fe2O3(s) + 2Al(s) -> 2Fe(l) + Al2O3(s) + Heat\n  (The immense heat generated melts the iron into liquid state, which fuses the rail gap).\n\n(b) Black and White Photography (Photolytic Decomposition):\n  2AgBr(s) [Pale yellow] -> 2Ag(s) [Grey] + Br2(g)\n\n(c) Zinc with Dilute Sulphuric Acid (Single Displacement):\n  Zn(s) + H2SO4(aq) -> ZnSO4(aq) + H2(g)",
    explanation: "Each reaction illustrates a vital industrial or scientific principle in the CBSE curriculum.",
    formula: "Fe2O3 + 2Al -> 2Fe + Al2O3; 2AgBr -> 2Ag + Br2; Zn + H2SO4 -> ZnSO4 + H2",
    examinerNote: "1 mark per balanced equation with classification. In thermite reaction, state of iron as (l) earns high credit.",
    source: "CBSE Sample Paper 2025"
  },
  {
    id: "sci_c1_q20",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "(a) What is corrosion? Give the chemical formula and colour of rust.\n(b) Name the chemical compound and its colour formed when:\n  (i) Silver articles tarnish in air.\n  (ii) Copper vessels develop a greenish coating upon exposure to moist air.",
    answer: "(a) Corrosion is the slow, continuous deterioration of a metal into its oxide, sulphide, or carbonate due to chemical attack by atmospheric gases and moisture.\n  - Formula of rust: Fe2O3.xH2O (Hydrated iron(III) oxide).\n  - Colour: Reddish-brown.\n\n(b) (i) Silver tarnish: Black silver sulphide (Ag2S), formed by reaction with trace atmospheric H2S gas.\n    (ii) Copper green coating: Basic copper carbonate [CuCO3.Cu(OH)2], formed by reaction with moist CO2 and O2.",
    explanation: "Unlike aluminium oxide which forms a protective passive barrier, iron rust flakes off continuously, exposing fresh metal underneath.",
    formula: "Rust: Fe2O3.xH2O; Silver: Ag2S; Copper: CuCO3.Cu(OH)2",
    examinerNote: "1 mark for corrosion definition and rust formula; 1 mark for silver tarnish; 1 mark for green copper patina formula.",
    source: "CBSE Board 2024 (Set 31/1/2)"
  },
  {
    id: "sci_c1_q21",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 3,
    type: "SA",
    question: "An aqueous solution of metal nitrate 'P' reacts with potassium iodide solution to give a yellow precipitate 'Q'.\n(a) Identify 'P' and 'Q'.\n(b) Write the balanced chemical equation for the reaction taking place.\n(c) Name the type of reaction and state one reason why it belongs to that category.",
    answer: "(a) Substance 'P' is Lead nitrate [Pb(NO3)2].\n    Substance 'Q' is Lead iodide [PbI2].\n(b) Balanced Chemical Equation:\n    Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) [Yellow precipitate] + 2KNO3(aq)\n(c) Type of Reaction: Double displacement and precipitation reaction.\n    Reason: Mutual exchange of ions takes place between Pb(2+) and I(-) ions, forming an insoluble solid precipitate that settles out.",
    explanation: "NCERT Activity 1.2. The bright yellow precipitate is the definitive qualitative test for lead ions in board practicals.",
    formula: "Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)",
    examinerNote: "1 mark for identifying P and Q; 1 mark for balanced equation; 1 mark for reaction classification and justification.",
    source: "CBSE 2023 (Set 31/4/1)"
  },

  // =========================================================================
  // 5-MARK LONG ANSWER (LA)
  // =========================================================================
  {
    id: "sci_c1_q22",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 5,
    type: "LA",
    question: "A reddish-brown metal 'X' when heated in a china dish in air turns into a black powdery substance 'Y'. When hydrogen gas is passed over heated 'Y', the reddish-brown metal 'X' is regenerated.\n(a) Identify metal 'X' and black compound 'Y'.\n(b) Write balanced chemical equations for both stages of the process.\n(c) Classify the chemical reaction occurring in each stage.\n(d) In the second stage, identify: (i) Substance oxidised, (ii) Substance reduced, (iii) Oxidising agent, (iv) Reducing agent.",
    answer: "(a) Metal 'X' is Copper (Cu).\n    Black compound 'Y' is Copper(II) oxide (CuO).\n\n(b) Balanced Equations:\n    Stage 1 (Oxidation): 2Cu(s) [Reddish-brown] + O2(g) -> 2CuO(s) [Black]\n    Stage 2 (Redox): CuO(s) [Black] + H2(g) -> Cu(s) [Reddish-brown] + H2O(l)\n\n(c) Classifications:\n    Stage 1: Combination and Oxidation reaction.\n    Stage 2: Redox (Oxidation-Reduction) and Single Displacement reaction.\n\n(d) In Stage 2 (CuO + H2 -> Cu + H2O):\n    (i) Substance oxidised: H2 (gains oxygen)\n    (ii) Substance reduced: CuO (loses oxygen)\n    (iii) Oxidising agent: CuO\n    (iv) Reducing agent: H2",
    explanation: "Copper metal oxidises at high temperatures to black cupric oxide. Passing dry hydrogen gas reduces cupric oxide back to elemental copper while hydrogen oxidises to water.",
    formula: "2Cu + O2 -> 2CuO; CuO + H2 -> Cu + H2O",
    examinerNote: "1 mark for identifying X and Y; 1.5 marks for both balanced equations; 0.5 marks for classifications; 2 marks for redox identification breakdown.",
    source: "CBSE Board 2024 & NCERT Activity 1.11"
  },
  {
    id: "sci_c1_q23",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 5,
    type: "LA",
    question: "Balance each of the following chemical equations with appropriate physical state symbols, and classify each into its specific reaction archetype:\n(a) Lead nitrate crystals heated strongly in a dry test tube.\n(b) Solid calcium oxide treated with water.\n(c) Iron reacting with steam to produce magnetic oxide of iron and hydrogen.\n(d) Barium chloride solution mixed with aluminium sulphate solution.\n(e) Methane gas combusting completely in atmospheric oxygen.",
    answer: "(a) Thermal Decomposition:\n  2Pb(NO3)2(s) -> 2PbO(s) [Yellow] + 4NO2(g) [Brown fumes] + O2(g) [Colourless]\n\n(b) Combination & Exothermic Reaction:\n  CaO(s) + H2O(l) -> Ca(OH)2(aq) + Heat\n\n(c) Single Displacement Reaction:\n  3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)\n\n(d) Double Displacement & Precipitation Reaction:\n  3BaCl2(aq) + Al2(SO4)3(aq) -> 3BaSO4(s) [White ppt] + 2AlCl3(aq)\n\n(e) Combustion & Exothermic Reaction:\n  CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g) + Heat + Light",
    explanation: "Master balancing check verifies stoichiometric coefficients and physical state symbols required by the CBSE rubric.",
    formula: "Stoichiometry verification: 2Pb(NO3)2; CaO+H2O; 3Fe+4H2O; 3BaCl2+Al2(SO4)3; CH4+2O2",
    examinerNote: "1 mark per equation (0.5 for correct balancing and state symbols + 0.5 for accurate classification).",
    source: "CBSE Exemplar / Board Question Bank"
  },
  {
    id: "sci_c1_q24",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 5,
    type: "LA",
    question: "(a) What is the Law of Conservation of Mass? How does balancing a chemical equation validate this universal law?\n(b) Explain why photosynthesis is classified as an endothermic reaction while cellular respiration is classified as an exothermic reaction. Write the balanced chemical equations for both processes.\n(c) State why food items containing fats and oils are packaged in airtight containers and flushed with nitrogen gas.",
    answer: "(a) The Law of Conservation of Mass states that mass can neither be created nor destroyed in a chemical reaction. The total mass of elements present in the products must equal the total mass of elements present in the reactants. Balancing an equation ensures that the number of atoms of each element on the reactant side (LHS) is strictly equal to that on the product side (RHS).\n\n(b) Energetics Comparison:\n  1. Photosynthesis is Endothermic because green plants absorb solar radiant energy to break stable bonds of CO2 and H2O to synthesize glucose:\n     6CO2(aq) + 12H2O(l) -> C6H12O6(aq) + 6O2(aq) + 6H2O(l) [Requires Sunlight & Chlorophyll]\n  2. Respiration is Exothermic because glucose is oxidised in living cells, liberating energy in the form of ATP:\n     C6H12O6(aq) + 6O2(g) -> 6CO2(g) + 6H2O(l) + Energy\n\n(c) Fats and oils undergo aerial oxidation when exposed to oxygen, producing foul-smelling and bitter-tasting substances (rancidity). Airtight containers prevent oxygen entry, and flushing with inert nitrogen gas purges oxygen, preventing oxidation.",
    explanation: "Decomposition and synthesis reactions are governed by thermodynamic enthalpy changes and the conservation of mass.",
    formula: "Sum(m_reactants) = Sum(m_products); Photosynthesis: 6CO2+12H2O; Respiration: C6H12O6+6O2",
    examinerNote: "Award 1.5 marks for part (a), 2.5 marks for part (b) with both balanced equations, and 1 mark for part (c).",
    source: "CBSE Board 2023"
  },

  // =========================================================================
  // 4-MARK CASE-BASED / COMPETENCY QUESTIONS
  // =========================================================================
  {
    id: "sci_c1_q25",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 4,
    type: "Case Study",
    question: "Read the following experimental passage and answer the questions that follow:\n\nIn an activity to demonstrate the decomposition of water, a student took a plastic mug, drilled two holes at its base, fitted rubber stoppers, and inserted carbon (graphite) electrodes. The electrodes were connected to a 6V battery. The mug was filled with water such that the electrodes were immersed, and a few drops of dilute sulphuric acid were added. Two test tubes filled with water were inverted over the two carbon electrodes. Current was switched on and the apparatus was left undisturbed for some time. Gas bubbles were observed evolving at both electrodes, displacing water in the test tubes.\n\n(a) Why were a few drops of dilute sulphuric acid added to the water? [1M]\n(b) Name the gases collected at the cathode and the anode. [1M]\n(c) What is the ratio of the volume of gas collected at the cathode to that at the anode? Justify this ratio using the chemical formula of water. [2M]",
    answer: "(a) Pure distilled water is a covalent liquid with very low degree of ionization and is an electrical insulator. Adding a few drops of dilute sulphuric acid provides mobile hydronium ions (H3O+) and sulphate ions (SO4(2-)), making the water an electrolytic conductor.\n(b) Gas collected at Cathode (-): Hydrogen gas (H2).\n    Gas collected at Anode (+): Oxygen gas (O2).\n(c) The volume ratio of gas at cathode (H2) to that at anode (O2) is 2 : 1.\n    Justification: The chemical equation for the electrolysis of water is:\n    2H2O(l) -> 2H2(g) [at cathode] + O2(g) [at anode]\n    Each molecule of water contains two atoms of hydrogen and one atom of oxygen in a 2:1 ratio. According to Gay-Lussac's law of combining volumes, 2 moles of water decompose into 2 volumes of hydrogen gas and 1 volume of oxygen gas.",
    explanation: "Electrolytic decomposition is a classic board practical illustrating stoichiometry and ion migration.",
    formula: "2H2O(l) -> 2H2(g) + O2(g)",
    examinerNote: "Students often flip the ratio if they confuse cathode and anode. Remember: Cation (H+) migrates to Cathode (-); Anion (O(2-)) migrates to Anode (+).",
    source: "CBSE Class 10 Board 2024 / NCERT Activity 1.7"
  },
  {
    id: "sci_c1_q26",
    chapter: 1,
    chapterName: "Chemical Reactions and Equations",
    marks: 4,
    type: "Case Study",
    question: "Read the case text below regarding corrosion and food preservation:\n\nCorrosion is a natural electrochemical process that converts refined metals into more chemically stable forms such as oxides, sulphides, or carbonates. It causes extensive damage to bridges, iron railings, automobile bodies, and ships, costing billions of dollars annually. When iron is exposed to moist air for prolonged periods, it rusts, forming a flaky reddish-brown hydrated oxide. Similarly, silver ornaments lose their shine and turn black over time, while ancient copper monuments develop a green coating. On the other hand, food products containing unsaturated fats and oils spoil when left open in air, changing their smell and taste through an aerial oxidation process known as rancidity.\n\n(a) Write the chemical formula of rust and state the two essential conditions required for rusting. [1M]\n(b) Why does silver turn black and copper turn green when exposed to air? Name the chemical compounds responsible for each. [2M]\n(c) State one difference between galvanisation and painting as methods of protecting iron from corrosion. [1M]",
    answer: "(a) Chemical formula of rust: Fe2O3.xH2O (Hydrated ferric oxide).\n    Two essential conditions: Simultaneous presence of (1) Oxygen (air) and (2) Moisture (water).\n\n(b) Silver turns black because it reacts with trace hydrogen sulphide (H2S) in air to form black silver sulphide (Ag2S):\n    2Ag + H2S -> Ag2S [Black] + H2\n    Copper turns green because it reacts slowly with moist atmospheric carbon dioxide to form a basic copper carbonate coating [CuCO3.Cu(OH)2]:\n    2Cu + H2O + CO2 + O2 -> CuCO3.Cu(OH)2 [Green]\n\n(c) Painting provides only a barrier protection; once the paint is scratched, the exposed iron begins to rust immediately. Galvanisation (coating with zinc) provides sacrificial protection; even if the zinc layer is scratched, zinc corrodes preferentially because it is more reactive than iron, transferring electrons to prevent iron from oxidising.",
    explanation: "Sacrificial cathodic/anodic protection explains why galvanised iron outlasts painted iron.",
    formula: "Rust: Fe2O3.xH2O; Silver tarnish: Ag2S; Copper patina: CuCO3.Cu(OH)2",
    examinerNote: "Full marks require chemical formulas for both tarnish products and the scientific rationale for sacrificial protection of zinc.",
    source: "CBSE Competency-Based Sample Paper 2025"
  }
];
