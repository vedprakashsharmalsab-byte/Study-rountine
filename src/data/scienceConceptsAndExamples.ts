// =========================================================================
// CBSE Class 10 Science — 100% Comprehensive NCERT Concept & Solved Guide
// Standard: CBSE Board 2026-27 (Code 086) & Lakshmipat Singhania Academy Syllabus
// Complete coverage of EVERY single topic from NCERT with ZERO skipped details.
// Each topic has 3 to 7 leveled examples (Level 1: 1M, Level 2: 2M-3M, Level 3: 4M-5M)
// =========================================================================

export interface ScienceConceptExample {
  id: string;
  level: "Level 1 (1M Foundation)" | "Level 2 (2M-3M Board Standard)" | "Level 3 (4M-5M Master / Case Study)";
  marks: number;
  question: string;
  options?: string[]; // for MCQs / Assertion-Reason
  correctOption?: number;
  givenOrData?: string;
  solutionSteps: string[];
  keyTakeaway: string;
  examinerTrap: string;
}

export interface ScienceConceptTopic {
  id: string;
  chapterNo: number;
  chapterName: string;
  discipline: "Chemistry" | "Biology" | "Physics" | "Natural Resources";
  topicTitle: string;
  ncertSection: string;
  ncertSummary: string;
  corePrinciples: string[];
  keyReactionsOrFormulas?: { name: string; formula: string; note?: string }[];
  commonMistakesWarning: string;
  examples: ScienceConceptExample[];
}

export const SCIENCE_CONCEPTS_AND_EXAMPLES: ScienceConceptTopic[] = [
  // =======================================================================
  // CHAPTER 1: CHEMICAL REACTIONS AND EQUATIONS (CHEMISTRY)
  // =======================================================================
  {
    id: "sci_c1_t1",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    topicTitle: "Chemical Reactions, Characteristics & Law of Conservation of Mass",
    ncertSection: "NCERT Chapter 1, Sections 1.1 & 1.1.1 (Pages 1–4)",
    ncertSummary: "A chemical reaction involves the breaking and forming of chemical bonds to produce new substances with entirely different properties. A balanced chemical equation must satisfy the Law of Conservation of Mass (mass of reactants = mass of products; total number of atoms of each element remains identical on both sides). Always include physical states: (s), (l), (g), (aq), and reaction conditions above the arrow.",
    corePrinciples: [
      "Evidence of chemical change: Change in state, change in color, evolution of a gas, or change in temperature.",
      "Balancing procedure: Start with the compound having the maximum number of atoms. Never alter the chemical formula subscripts; only change balancing coefficients.",
      "Physical state notation: (s) for solid, (l) for liquid, (g) for gas, (aq) for aqueous solution in water."
    ],
    keyReactionsOrFormulas: [
      { name: "Magnesium Ribbon Burning", formula: "2Mg(s) + O₂(g) ⟶ 2MgO(s) + Heat + Dazzling White Flame", note: "Clean ribbon with sandpaper first to remove protective basic magnesium carbonate layer." },
      { name: "Zinc with Dilute Sulphuric Acid", formula: "Zn(s) + H₂SO₄(aq) ⟶ ZnSO₄(aq) + H₂(g)↑", note: "Hydrogen gas burns with a characteristic 'pop' sound." }
    ],
    commonMistakesWarning: "Students frequently change formula subscripts (e.g., writing H₂O₂ instead of 2H₂O) while balancing. Always adjust coefficients only. Forgetting state symbols costs 0.5 mark in 3M/5M board questions.",
    examples: [
      {
        id: "ex_c1_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why should a magnesium ribbon be cleaned with sandpaper before burning in air?",
        solutionSteps: [
          "Magnesium is a reactive metal that reacts slowly with atmospheric oxygen to form a stable protective layer of basic magnesium oxide / carbonate on its surface.",
          "Rubbing with sandpaper removes this protective insulating coating so that pure magnesium metal can readily come into direct contact with atmospheric oxygen and burn efficiently."
        ],
        keyTakeaway: "Surface cleaning removes the passive oxide/carbonate layer, allowing combustion with a dazzling white flame.",
        examinerTrap: "Do not just write 'to remove dust'. You must mention 'protective layer of magnesium oxide/carbonate'."
      },
      {
        id: "ex_c1_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 2,
        question: "Balance the following chemical equation and identify the physical states: Fe + H₂O ⟶ Fe₃O₄ + H₂",
        solutionSteps: [
          "Step 1 (Count atoms): Reactants: Fe = 1, H = 2, O = 1. Products: Fe = 3, H = 2, O = 4.",
          "Step 2 (Balance Oxygen): Fe₃O₄ has 4 Oxygen atoms, so multiply H₂O by 4: Fe + 4H₂O ⟶ Fe₃O₄ + H₂.",
          "Step 3 (Balance Hydrogen): Left side now has 8 H atoms (4×2), so multiply right side H₂ by 4: Fe + 4H₂O ⟶ Fe₃O₄ + 4H₂.",
          "Step 4 (Balance Iron): Fe₃O₄ has 3 Iron atoms, so multiply Fe by 3: 3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)↑.",
          "Note: Water is in the gaseous state (steam)."
        ],
        keyTakeaway: "Iron reacts only with steam (gaseous water), forming magnetic iron oxide Fe₃O₄ and hydrogen gas.",
        examinerTrap: "Writing H₂O(l) instead of H₂O(g) steam causes 0.5 mark loss because red hot iron does not react with cold or liquid water."
      },
      {
        id: "ex_c1_3",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Write balanced chemical equations with state symbols for: (a) Lead nitrate crystals heated strongly in a dry test tube. (b) Dilute hydrochloric acid added to calcium carbonate.",
        solutionSteps: [
          "Part (a): 2Pb(NO₃)₂(s) —[Δ]⟶ 2PbO(s) + 4NO₂(g)↑ + O₂(g)↑. Lead(II) oxide formed is yellow when cold, while nitrogen dioxide is a pungent reddish-brown gas.",
          "Part (b): CaCO₃(s) + 2HCl(aq) ⟶ CaCl₂(aq) + H₂O(l) + CO₂(g)↑. Brisk effervescence of carbon dioxide gas turns lime water milky."
        ],
        keyTakeaway: "Thermal decomposition of lead nitrate yields reddish-brown NO₂ fumes, a frequent Board practical-based question.",
        examinerTrap: "Students often forget the balancing coefficient 4 for NO₂ or misidentify the yellow residue as lead metal instead of PbO."
      },
      {
        id: "ex_c1_4",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Case Study: In a school laboratory, Priya was given a white powdery substance 'X'. When water was added slowly to 'X', vigorous boiling occurred with a hissing sound and the beaker became extremely hot, forming a suspension 'Y'. The clear solution of 'Y' was applied onto the walls during whitewashing. After 2–3 days, the walls developed a bright shiny white finish due to compound 'Z'.\n(a) Identify X, Y, and Z.\n(b) Write balanced chemical equations for both reactions.\n(c) Classify the reaction between X and water as exothermic or endothermic with justification.",
        solutionSteps: [
          "Substance 'X' is Calcium oxide (Quicklime, CaO).",
          "Substance 'Y' is Calcium hydroxide (Slaked lime, Ca(OH)₂).",
          "Substance 'Z' is Calcium carbonate (Limestone / Marble, CaCO₃).",
          "Reaction 1: CaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + Heat (Combination & highly Exothermic).",
          "Reaction 2: Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s) + H₂O(l). Slaked lime reacts slowly with atmospheric CO₂ over 2–3 days to form a thin, shiny layer of insoluble CaCO₃ on walls.",
          "Classification: The reaction is Exothermic because heat energy is liberated into the surroundings, causing a substantial increase in temperature."
        ],
        keyTakeaway: "CaO (quicklime) + water ⟶ Ca(OH)₂ (slaked lime) + heat; then Ca(OH)₂ + CO₂ ⟶ CaCO₃ (shiny finish) + H₂O.",
        examinerTrap: "Confusing common names: Quicklime is CaO, Slaked lime is Ca(OH)₂, and Limestone/whitewash sheen is CaCO₃."
      }
    ]
  },
  {
    id: "sci_c1_t2",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    topicTitle: "Types of Chemical Reactions: Decomposition & Thermal/Photolytic Breakdown",
    ncertSection: "NCERT Chapter 1, Section 1.2.2 (Pages 8–10)",
    ncertSummary: "Decomposition reactions are the exact opposite of combination reactions. A single reactant breaks down upon the supply of energy (Heat, Electricity, or Sunlight) to form two or more simpler products. Because energy must be absorbed, decomposition reactions are predominantly endothermic.",
    corePrinciples: [
      "Thermal decomposition (Energy via Heat): FeSO₄ crystals breakdown; CaCO₃ thermal calcination; Pb(NO₃)₂ breakdown.",
      "Electrolytic decomposition (Energy via Electricity): Electrolysis of acidified water yields 2 volumes of H₂ at cathode and 1 volume of O₂ at anode (2:1 ratio).",
      "Photolytic decomposition (Energy via Light): Silver halides (AgCl, AgBr) turn grey in sunlight due to formation of silver metal. Used in black-and-white photography."
    ],
    keyReactionsOrFormulas: [
      { name: "Ferrous Sulphate Thermal Decomposition", formula: "2FeSO₄(s) —[Δ]⟶ Fe₂O₃(s) + SO₂(g)↑ + SO₃(g)↑", note: "Green crystals (FeSO₄·7H₂O) lose water of crystallization, then decompose to reddish-brown ferric oxide with choking sulfur fumes." },
      { name: "Electrolysis of Acidified Water", formula: "2H₂O(l) —[Electricity]⟶ 2H₂(g) [Cathode] + O₂(g) [Anode]", note: "Volume ratio H₂ : O₂ = 2 : 1 because water molecule contains 2 hydrogen atoms per 1 oxygen atom." },
      { name: "Photolysis of Silver Chloride", formula: "2AgCl(s) [White] —[Sunlight]⟶ 2Ag(s) [Grey] + Cl₂(g)↑", note: "Stored in dark amber-colored bottles to prevent photolytic decomposition." }
    ],
    commonMistakesWarning: "In water electrolysis, students often mix up which gas collects at which electrode. Remember: Hydrogen cations (H⁺) migrate to Cathode (-); Oxygen anions (O²⁻) migrate to Anode (+).",
    examples: [
      {
        id: "ex_c1_5",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why are silver chloride and silver bromide chemicals stored in dark amber-coloured bottles in laboratories?",
        solutionSteps: [
          "Silver chloride and silver bromide undergo photolytic decomposition when exposed to sunlight, decomposing into grey metallic silver and halogen gas.",
          "Dark amber bottles absorb light rays and prevent sunlight from reaching the chemical, thus preventing its photolytic degradation."
        ],
        keyTakeaway: "Amber bottles block sunlight to preserve light-sensitive silver halides from decomposing into Ag metal.",
        examinerTrap: "Writing 'to protect from air' is wrong. The degradation is specifically driven by sunlight (photolysis)."
      },
      {
        id: "ex_c1_6",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Green crystals of a substance 'A' on heating in a dry test tube give off gases having a characteristic suffocating smell of burning sulphur and leave a reddish-brown residue 'B'.\n(a) Identify A and B.\n(b) Write the balanced chemical reaction.\n(c) Name the type of chemical reaction.",
        solutionSteps: [
          "(a) Substance 'A' is Ferrous sulphate crystals (FeSO₄·7H₂O, green in color). The reddish-brown residue 'B' is Ferric oxide (Fe₂O₃).",
          "(b) Heating first causes loss of water: FeSO₄·7H₂O(s) —[Δ]⟶ FeSO₄(s) + 7H₂O(g).\nOn further strong heating: 2FeSO₄(s) —[Δ]⟶ Fe₂O₃(s) + SO₂(g) + SO₃(g).",
          "(c) This is a Thermal Decomposition reaction (endothermic), as heat causes a single reactant to break down into three products."
        ],
        keyTakeaway: "FeSO₄ decomposition produces reddish-brown Fe₂O₃ and two acidic gases: SO₂ and SO₃.",
        examinerTrap: "Writing only one gas (SO₂) instead of both sulfur dioxide (SO₂) and sulfur trioxide (SO₃) costs 1 mark."
      },
      {
        id: "ex_c1_7",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "During electrolysis of acidified water:\n(a) Name the gas collected at the cathode and the anode.\n(b) Why is the volume of gas collected at one electrode double the volume collected at the other?\n(c) What happens if dilute H₂SO₄ is not added to pure distilled water?\n(d) How will you test the gas evolved at the cathode?",
        solutionSteps: [
          "(a) Cathode (negative electrode): Hydrogen gas (H₂). Anode (positive electrode): Oxygen gas (O₂).",
          "(b) By stoichiometry, one molecule of water (H₂O) consists of two hydrogen atoms and one oxygen atom in a 2:1 atomic ratio: 2H₂O(l) ⟶ 2H₂(g) + O₂(g). Therefore, 2 volumes of H₂ gas are liberated for every 1 volume of O₂ gas.",
          "(c) Pure distilled water is a poor conductor of electricity because it has negligible free ions. Adding a few drops of dilute H₂SO₄ provides mobile ions (H⁺ and SO₄²⁻), making the water electrically conductive.",
          "(d) Bring a burning splinter near the mouth of the test tube collecting the cathode gas. The gas ignites with a characteristic 'pop' sound, confirming it is Hydrogen."
        ],
        keyTakeaway: "Water electrolysis yields H₂ at cathode and O₂ at anode in a 2:1 volume ratio, requiring electrolyte acid ions.",
        examinerTrap: "Reversing cathode and anode gases is the #1 mistake. Mnemonic: H is positive, goes to negative Cathode."
      }
    ]
  },
  {
    id: "sci_c1_t3",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    topicTitle: "Displacement, Double Displacement & Redox Reactions",
    ncertSection: "NCERT Chapter 1, Sections 1.2.3, 1.2.4 & 1.2.5 (Pages 10–13)",
    ncertSummary: "Displacement occurs when a more reactive element displaces a less reactive element from its aqueous salt solution. Double displacement involves an exchange of ions between two aqueous compounds, often resulting in an insoluble precipitate. Redox (Reduction-Oxidation) reactions involve the simultaneous transfer of oxygen/hydrogen or electrons: oxidation is gain of oxygen/loss of hydrogen; reduction is loss of oxygen/gain of hydrogen.",
    corePrinciples: [
      "Reactivity Series order: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.",
      "Precipitation: Double displacement reactions that produce an insoluble solid residue (e.g. BaSO₄ white precipitate, PbI₂ brilliant yellow precipitate).",
      "Redox duality: The substance that gets oxidized acts as the Reducing Agent; the substance that gets reduced acts as the Oxidizing Agent."
    ],
    keyReactionsOrFormulas: [
      { name: "Iron Nail in Copper Sulphate Solution", formula: "Fe(s) [Grey] + CuSO₄(aq) [Blue] ⟶ FeSO₄(aq) [Light Green] + Cu(s) [Brown deposit]", note: "Iron is more reactive than copper and displaces it." },
      { name: "Sodium Sulphate & Barium Chloride Precipitation", formula: "Na₂SO₄(aq) + BaCl₂(aq) ⟶ BaSO₄(s)↓ [White ppt] + 2NaCl(aq)", note: "Classic double displacement precipitation reaction." },
      { name: "Lead Nitrate & Potassium Iodide Reaction", formula: "Pb(NO₃)₂(aq) + 2KI(aq) ⟶ PbI₂(s)↓ [Yellow ppt] + 2KNO₃(aq)", note: "Forms an unmistakable yellow precipitate of lead iodide." },
      { name: "Copper Oxide Reduction by Hydrogen", formula: "CuO(s) [Black] + H₂(g) —[Δ]⟶ Cu(s) [Brown] + H₂O(g)", note: "CuO is reduced (oxidizing agent); H₂ is oxidized (reducing agent)." }
    ],
    commonMistakesWarning: "Students frequently misidentify oxidizing and reducing agents. The oxidizing and reducing agents are ALWAYS on the REACTANT side, never on the product side.",
    examples: [
      {
        id: "ex_c1_8",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "In the reaction: MnO₂ + 4HCl ⟶ MnCl₂ + 2H₂O + Cl₂, identify the substance oxidized and the substance reduced.",
        solutionSteps: [
          "HCl loses hydrogen and gains chlorine to form Cl₂, so HCl is oxidized.",
          "MnO₂ loses oxygen to form MnCl₂, so MnO₂ is reduced."
        ],
        keyTakeaway: "Substance oxidized: HCl. Substance reduced: MnO₂. Oxidizing agent: MnO₂. Reducing agent: HCl.",
        examinerTrap: "Never choose products (MnCl₂ or Cl₂) as oxidizing/reducing agents. Agents are always reactants."
      },
      {
        id: "ex_c1_9",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 2,
        question: "What happens when an iron nail is placed in copper sulphate solution for 30 minutes? State two distinct visual observations and write the chemical equation.",
        solutionSteps: [
          "Observation 1: The deep blue color of the copper sulphate solution gradually fades and transforms into a light pale green color due to the formation of ferrous sulphate (FeSO₄).",
          "Observation 2: A reddish-brown coating of metallic copper is deposited on the surface of the iron nail.",
          "Equation: Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)."
        ],
        keyTakeaway: "Single displacement: Fe displaces Cu, shifting solution from blue to light green with brown Cu deposit.",
        examinerTrap: "Writing 'color becomes colorless' is incorrect. FeSO₄ is distinctly pale green."
      },
      {
        id: "ex_c1_10",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A shiny brown coloured element 'X' on heating in air turns black and forms compound 'Y'. When hydrogen gas is passed over heated 'Y', the black coating turns brown again and yields substance 'X' along with water.\n(a) Identify element 'X' and compound 'Y'.\n(b) Write balanced chemical equations for both reactions.\n(c) For the second reaction, identify: (i) Substance oxidized, (ii) Substance reduced, (iii) Oxidizing agent, (iv) Reducing agent.",
        solutionSteps: [
          "(a) Element 'X' is Copper metal (Cu, reddish-brown). Compound 'Y' is Copper(II) oxide (CuO, black).",
          "(b) Reaction 1 (Oxidation): 2Cu(s) + O₂(g) —[Δ]⟶ 2CuO(s) [Black].\nReaction 2 (Reduction): CuO(s) [Black] + H₂(g) —[Δ]⟶ Cu(s) [Brown] + H₂O(g).",
          "(c) In the second reaction:\n(i) Substance oxidized: H₂ (gains oxygen to form H₂O).\n(ii) Substance reduced: CuO (loses oxygen to form Cu).\n(iii) Oxidizing agent: CuO (provides oxygen).\n(iv) Reducing agent: H₂ (removes oxygen)."
        ],
        keyTakeaway: "Copper oxidizes to black CuO in air; heated CuO is reduced back to brown Cu by hydrogen gas.",
        examinerTrap: "Students often write 'Cu' as the substance reduced in step (c). The reactant is CuO, not Cu."
      }
    ]
  },
  {
    id: "sci_c1_t4",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    topicTitle: "Corrosion of Metals & Rancidity of Foods with Prevention Methods",
    ncertSection: "NCERT Chapter 1, Section 1.3 (Pages 13–14)",
    ncertSummary: "Corrosion is the slow chemical degradation of metals caused by exposure to atmospheric moisture, oxygen, and acidic gases. Rusting of iron forms hydrated ferric oxide Fe₂O₃·xH₂O. Rancidity is the aerial oxidation of fats and oils in food substances, resulting in an unpleasant taste and foul smell. Prevention techniques include flushing packets with unreactive nitrogen gas, adding antioxidants (BHA, BHT), and airtight refrigeration.",
    corePrinciples: [
      "Conditions essential for rusting of iron: BOTH Oxygen (air) and Moisture (water) are simultaneously required. Depriving either halts rusting.",
      "Silver tarnish: Silver objects turn black due to reaction with hydrogen sulphide (H₂S) in air forming silver sulphide (Ag₂S).",
      "Copper patina: Copper develops a green coating when exposed to moist air due to the formation of basic copper carbonate [CuCO₃·Cu(OH)₂].",
      "Rancidity prevention: Flushing with inert Nitrogen gas (which creates an oxygen-free envelope), airtight packaging, refrigeration, and adding antioxidants."
    ],
    keyReactionsOrFormulas: [
      { name: "Rusting of Iron", formula: "4Fe(s) + 3O₂(g) + 2xH₂O(l) ⟶ 2Fe₂O₃·xH₂O(s) [Hydrated Ferric Oxide / Rust]", note: "Reddish-brown flaky coating that accelerates further corrosion." },
      { name: "Silver Tarnishing", formula: "2Ag(s) + H₂S(g) ⟶ Ag₂S(s) [Black tarnish] + H₂(g)↑", note: "Reacts with trace sulfur pollutants in air." },
      { name: "Copper Green Patina", formula: "2Cu(s) + H₂O(l) + CO₂(g) + O₂(g) ⟶ CuCO₃·Cu(OH)₂(s) [Basic Copper Carbonate, Green]", note: "Slow corrosion of bronze/copper monuments." }
    ],
    commonMistakesWarning: "Students write that chips are flushed with nitrogen because it makes them crispy. Nitrogen is used strictly because it is chemically unreactive (inert) and displaces oxygen, preventing aerial oxidation of fats!",
    examples: [
      {
        id: "ex_c1_11",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why do manufacturers of potato chips flush bags of chips with nitrogen gas?",
        solutionSteps: [
          "Potato chips contain oils and fats that readily undergo aerial oxidation (rancidity) when exposed to atmospheric oxygen, producing a rancid smell and bad taste.",
          "Nitrogen is an unreactive, inert gas. Flushing bags with nitrogen expels oxygen, creating an oxygen-free environment that prevents the oxidation of fats and keeps chips fresh."
        ],
        keyTakeaway: "Nitrogen creates an inert blanket that blocks aerial oxidation of oils and prevents rancidity.",
        examinerTrap: "Never write 'nitrogen makes chips crunchy'. The scientific answer is 'to prevent rancidity (oxidation of fats and oils)'."
      },
      {
        id: "ex_c1_12",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 2,
        question: "What is rancidity? Mention any three distinct methods used in food processing to prevent or retard rancidity.",
        solutionSteps: [
          "Definition: The condition produced by the aerial oxidation of fats and oils in foods marked by unpleasant odor and foul taste is known as rancidity.",
          "Three preventive methods:\n(1) Adding antioxidants (e.g. BHA - Butylated Hydroxyanisole, Vitamin E) to food before packaging.\n(2) Packaging fat-containing foods in airtight containers away from light.\n(3) Flushing containers with an unreactive inert gas such as Nitrogen (N₂).\n(4) Storing food at lower temperatures in refrigerators to slow down reaction kinetics."
        ],
        keyTakeaway: "Rancidity = aerial lipid oxidation; prevented by antioxidants, inert nitrogen flushing, airtight storage, and cooling.",
        examinerTrap: "Do not confuse rancidity (fats oxidation) with microbial rotting/spoilage. Rancidity specifically refers to oxidation of fats and oils."
      },
      {
        id: "ex_c1_13",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "During an experiment to determine conditions necessary for rusting, three test tubes A, B, and C containing clean iron nails were set up:\n- Tube A contains iron nails partially immersed in ordinary tap water with air.\n- Tube B contains iron nails immersed in boiled distilled water covered with a layer of oil.\n- Tube C contains iron nails with dry anhydrous calcium chloride, sealed with a rubber cork.\nState and explain the visual observation in each tube after one week.",
        solutionSteps: [
          "Tube A Observation: The iron nails rust heavily and a reddish-brown flaky substance (Fe₂O₃·xH₂O) accumulates. Explanation: Both oxygen from air and water moisture are present simultaneously, satisfying all conditions for rusting.",
          "Tube B Observation: The iron nails do NOT rust. Explanation: Boiling water removes dissolved oxygen, and the floating oil layer prevents atmospheric oxygen from dissolving back in. Water is present, but oxygen is absent.",
          "Tube C Observation: The iron nails do NOT rust. Explanation: Anhydrous calcium chloride is a powerful drying agent that absorbs all moisture from the air inside the tube. Oxygen is present, but water moisture is absent.",
          "Deduction: Rusting of iron strictly requires the SIMULTANEOUS presence of both moisture (water) and oxygen (air)."
        ],
        keyTakeaway: "Rusting requires both O₂ and H₂O simultaneously; boiling removes O₂, anhydrous CaCl₂ removes H₂O.",
        examinerTrap: "Forgetting the role of the oil layer in Tube B (prevents oxygen dissolution) or the role of anhydrous CaCl₂ in Tube C (desiccant)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 2: ACIDS, BASES AND SALTS (CHEMISTRY)
  // =======================================================================
  {
    id: "sci_c2_t1",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    topicTitle: "Indicators, Chemical Properties of Acids/Bases & pH Scale",
    ncertSection: "NCERT Chapter 2, Sections 2.1 & 2.2 (Pages 17–27)",
    ncertSummary: "Acids generate H⁺(aq) / H₃O⁺ ions in aqueous solution, taste sour, and turn blue litmus red. Bases generate OH⁻(aq) ions, taste bitter, feel soapy, and turn red litmus blue. pH is the negative logarithm of hydrogen ion concentration: pH < 7 is acidic, pH = 7 is neutral, and pH > 7 is basic. Living organisms operate within a narrow pH range (human body: 7.0–7.8).",
    corePrinciples: [
      "Natural indicators: Litmus (purple lichen dye; red in acid, blue in base), Turmeric (yellow in acid/neutral, reddish-brown in base).",
      "Synthetic indicators: Phenolphthalein (colorless in acid, deep pink in base); Methyl orange (red in acid, yellow in base).",
      "Olfactory indicators: Vanilla essence, clove oil, onion juice retain smell in acids, but lose their characteristic smell in basic medium.",
      "Reaction with metals: Acid + Metal ⟶ Salt + H₂↑ (Pop test). Exceptions: Nitric acid (HNO₃) is a strong oxidizer and produces water instead of H₂, except with Mg and Mn.",
      "Reaction with metal carbonates / bicarbonates: Acid + Carbonate ⟶ Salt + H₂O + CO₂↑ (turns lime water milky, clears upon excess CO₂)."
    ],
    keyReactionsOrFormulas: [
      { name: "Acid + Metal Carbonate", formula: "Na₂CO₃(s) + 2HCl(aq) ⟶ 2NaCl(aq) + H₂O(l) + CO₂(g)↑", note: "Brisk effervescence of CO₂ gas." },
      { name: "Lime Water Test for Carbon Dioxide", formula: "Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s)↓ [Milky ppt] + H₂O(l)", note: "Excess CO₂ dissolves precipitate: CaCO₃ + H₂O + CO₂ ⟶ Ca(HCO₃)₂(aq) [Clear]." },
      { name: "Amphoteric Base with Metal", formula: "2NaOH(aq) + Zn(s) —[Δ]⟶ Na₂ZnO₂(aq) [Sodium Zincate] + H₂(g)↑", note: "High board recurrence." }
    ],
    commonMistakesWarning: "Students often forget that dry HCl gas does not change the color of dry blue litmus paper because H⁺ ions are only produced in the presence of water (forming hydronium H₃O⁺).",
    examples: [
      {
        id: "ex_c2_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why does dry HCl gas not change the colour of dry blue litmus paper, but moist blue litmus paper turns red?",
        solutionSteps: [
          "Acids exhibit acidic properties solely due to the presence of free hydrogen ions (H⁺) or hydronium ions (H₃O⁺).",
          "Dry HCl gas does not contain water, so it cannot dissociate into ions. In the presence of water in moist litmus paper, HCl dissolves and ionizes: HCl + H₂O ⟶ H₃O⁺ + Cl⁻, turning blue litmus red."
        ],
        keyTakeaway: "Hydrogen ions cannot exist in isolation; they always associate with water molecules as hydronium ions (H₃O⁺).",
        examinerTrap: "Must emphasize that ionization of acids requires water to produce H₃O⁺ ions."
      },
      {
        id: "ex_c2_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A student passed carbon dioxide gas through lime water.\n(a) What change was observed initially? Write the chemical equation.\n(b) What happens when excess carbon dioxide is passed through the same solution? Write the chemical equation.",
        solutionSteps: [
          "(a) Initial observation: Lime water turns milky white due to the formation of an insoluble white precipitate of calcium carbonate (CaCO₃).\nEquation: Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃(s)↓ + H₂O(l).",
          "(b) On passing excess CO₂: The milkiness completely disappears and the solution becomes clear and transparent due to the formation of soluble calcium hydrogen carbonate / calcium bicarbonate [Ca(HCO₃)₂].\nEquation: CaCO₃(s) + H₂O(l) + CO₂(g) ⟶ Ca(HCO₃)₂(aq) [Soluble in water]."
        ],
        keyTakeaway: "Lime water milkiness (CaCO₃) dissolves with excess CO₂ due to conversion into soluble Ca(HCO₃)₂.",
        examinerTrap: "Forgetting the second reaction for excess CO₂ is very common. Always write Ca(HCO₃)₂."
      },
      {
        id: "ex_c2_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Explain the importance of pH in the following everyday phenomena:\n(a) Digestive system in human stomach.\n(b) Tooth decay prevention.\n(c) Soil pH and crop growth.\n(d) Self-defence by honeybees and nettle plant leaves.",
        solutionSteps: [
          "(a) Stomach pH: Gastric glands produce dilute hydrochloric acid (pH ~1.2 to 2.0) that facilitates the activation of the protein-digesting enzyme pepsin and kills pathogens without harming stomach walls. During acidity, antacids like Mg(OH)₂ (milk of magnesia) neutralize excess acid.",
          "(b) Tooth decay: Tooth enamel is composed of calcium hydroxyapatite (hardest substance in the body). Bacteria in the mouth ferment residual sugars to produce acids. When mouth pH falls below 5.5, enamel corrodes. Toothpastes are basic and neutralize this acid.",
          "(c) Soil pH: Most plants thrive in neutral to slightly acidic soils (pH 6.5–7.5). If soil is overly acidic, farmers treat it with slaked lime [Ca(OH)₂] or quicklime [CaO]. If too basic, organic matter/manure is added.",
          "(d) Self-defence: Bee stings and stinging hair of nettle leaves inject methanoic acid (formic acid, HCOOH), causing burning pain. Bee stings are treated with mild bases like baking soda (NaHCO₃), while nettle stings are traditionally cured by rubbing with leaves of the dock plant (which contains mild base)."
        ],
        keyTakeaway: "pH controls biological and chemical equilibria: stomach ~1.5, tooth enamel decay threshold < 5.5, soil ~7.",
        examinerTrap: "Do not confuse bee stings (acidic, treat with mild base NaHCO₃) with wasp stings (alkaline, treat with mild acid like vinegar)."
      }
    ]
  },
  {
    id: "sci_c2_t2",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    topicTitle: "Chlor-Alkali Process & Important Commercial Salts",
    ncertSection: "NCERT Chapter 2, Sections 2.4.1 to 2.4.4 (Pages 28–33)",
    ncertSummary: "Common salt (NaCl) is a crucial raw material for producing essential industrial chemicals. When electricity is passed through an aqueous solution of sodium chloride (called brine), it decomposes to form sodium hydroxide (alkali), chlorine gas, and hydrogen gas. This is called the Chlor-Alkali Process.",
    corePrinciples: [
      "Chlor-Alkali Products:\n- At Anode (positive electrode): Chlorine gas (Cl₂).\n- At Cathode (negative electrode): Hydrogen gas (H₂).\n- Near Cathode in solution: Sodium hydroxide (NaOH).",
      "Bleaching Powder (CaOCl₂): Prepared by the action of chlorine gas on dry slaked lime: Ca(OH)₂ + Cl₂ ⟶ CaOCl₂ + H₂O. Used as disinfectant and bleaching agent in textile/paper mills.",
      "Baking Soda (Sodium Hydrogen Carbonate, NaHCO₃): Prepared by Solvay process: NaCl + H₂O + CO₂ + NH₃ ⟶ NH₄Cl + NaHCO₃. Mild, non-corrosive base used in baking powder (mixed with tartaric acid to prevent bitterness) and soda-acid fire extinguishers.",
      "Washing Soda (Na₂CO₃·10H₂O): Recrystallization of sodium carbonate yields decahydrate salt. Used to remove permanent hardness of water and in glass/soap/paper industries.",
      "Plaster of Paris (CaSO₄·½H₂O): Prepared by carefully heating gypsum at 373 K (100°C): CaSO₄·2H₂O —[373 K]⟶ CaSO₄·½H₂O + 1½H₂O. On mixing with water, it re-hydrates to form hard gypsum."
    ],
    keyReactionsOrFormulas: [
      { name: "Chlor-Alkali Process", formula: "2NaCl(aq) + 2H₂O(l) —[Electricity]⟶ 2NaOH(aq) + Cl₂(g)↑ [Anode] + H₂(g)↑ [Cathode]", note: "Industrial pillar for caustic soda, bleach, and clean fuel." },
      { name: "Bleaching Powder Formation", formula: "Ca(OH)₂(s) [Dry] + Cl₂(g) ⟶ CaOCl₂(s) + H₂O(l)", note: "Slaked lime must be completely dry." },
      { name: "Baking Soda Thermal Decomposition", formula: "2NaHCO₃(s) —[Heat]⟶ Na₂CO₃(s) + H₂O(g) + CO₂(g)↑", note: "CO₂ causes cake/bread batter to rise and become spongy." },
      { name: "Plaster of Paris Setting", formula: "CaSO₄·½H₂O(s) + 1½H₂O(l) ⟶ CaSO₄·2H₂O(s) [Gypsum Hard Mass]", note: "Heating above 373 K destroys water of crystallization, producing dead burnt plaster (anhydrous CaSO₄)." }
    ],
    commonMistakesWarning: "Heating gypsum above 373 K (100°C) produces dead burnt plaster (anhydrous CaSO₄) which does not set upon adding water. Temperature control at 373 K is compulsory.",
    examples: [
      {
        id: "ex_c2_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is tartaric acid added to baking soda to make baking powder for cakes?",
        solutionSteps: [
          "When baking soda (NaHCO₃) is heated during baking, it decomposes into sodium carbonate (Na₂CO₃), which is basic and imparts an unpleasant bitter taste.",
          "Tartaric acid provides hydrogen ions (H⁺) that neutralize the basic sodium carbonate into a pleasant-tasting sodium tartrate salt, preventing bitterness while still allowing CO₂ release to make the cake soft and fluffy."
        ],
        keyTakeaway: "Baking powder = Baking soda + mild edible acid (tartaric acid) to eliminate bitter Na₂CO₃.",
        examinerTrap: "Confusing baking soda (pure NaHCO₃) with baking powder (NaHCO₃ + tartaric acid)."
      },
      {
        id: "ex_c2_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A chemical compound 'P' is used extensively in hospitals for supporting fractured bones in the right position.\n(a) Identify compound 'P' and state its chemical formula.\n(b) How is 'P' prepared from gypsum? State the exact reaction temperature.\n(c) What precautions must be taken during its storage?",
        solutionSteps: [
          "(a) Compound 'P' is Plaster of Paris (Hemihydrate of calcium sulphate). Chemical formula: CaSO₄·½H₂O.",
          "(b) Preparation: It is prepared by heating gypsum (CaSO₄·2H₂O) at controlled temperature of 373 K (100°C):\nCaSO₄·2H₂O —[373 K]⟶ CaSO₄·½H₂O + 1½H₂O.",
          "(c) Storage precaution: It must be stored in completely moisture-proof airtight containers because in the presence of ambient moisture, it slowly absorbs water and hardens into gypsum, losing its setting property."
        ],
        keyTakeaway: "Plaster of Paris is CaSO₄·½H₂O, formed at 373 K; sets into hard gypsum upon hydration.",
        examinerTrap: "Never write formula as CaSO₄·2H₂O (that is Gypsum) or CaSO₄ (dead burnt plaster). It is strictly CaSO₄·½H₂O."
      },
      {
        id: "ex_c2_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        question: "Explain the Chlor-Alkali process with a labeled chemical diagram or flow description:\n(a) What is brine?\n(b) Name the gases liberated at cathode and anode, and state one key industrial use for each.\n(c) What compound is formed in solution near the cathode? State two of its uses.\n(d) Write the balanced chemical reaction with physical states.",
        solutionSteps: [
          "(a) Brine is a concentrated aqueous solution of sodium chloride (NaCl in water).",
          "(b) Gas at Anode (+): Chlorine gas (Cl₂). Use: Disinfectant for water treatment, manufacture of PVC, CFCs, and bleaching powder.\nGas at Cathode (-): Hydrogen gas (H₂). Use: Fuel, manufacture of ammonia for fertilizers, and margarine.",
          "(c) Substance near cathode: Sodium hydroxide (NaOH, caustic soda). Uses: De-greasing metals, soap and detergent manufacturing, paper making, and artificial fibers (rayon).",
          "(d) Balanced Equation:\n2NaCl(aq) + 2H₂O(l) —[Electric Current]⟶ 2NaOH(aq) + Cl₂(g)↑ [at Anode] + H₂(g)↑ [at Cathode]."
        ],
        keyTakeaway: "Electrolysis of brine generates three commercial chemicals: Cl₂ (anode), H₂ (cathode), NaOH (solution).",
        examinerTrap: "Ensure you assign Cl₂ to anode and H₂ to cathode. Switching them results in losing 2 marks."
      }
    ]
  },
  {
    id: "sci_c2_t3",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    topicTitle: "Acid Dilution Safety, Strengths of Acids & Water of Crystallization",
    ncertSection: "NCERT Chapter 2, Sections 2.3 & 2.4.4 (Pages 24–34)",
    ncertSummary: "Strong acids (HCl, H₂SO₄, HNO₃) dissociate completely into ions in aqueous solution, whereas weak acids (CH₃COOH, H₂CO₃) dissociate only partially. Diluting concentrated acid is an intensely exothermic process; acid must ALWAYS be added slowly to water with continuous stirring, NEVER water to acid. Water of crystallization refers to the fixed number of water molecules chemically bonded in one formula unit of a crystalline salt.",
    corePrinciples: [
      "Acid Dilution Rule: Always add ACID TO WATER slowly with constant stirring. If water is added to concentrated acid, the sudden immense heat released causes the acid to boil violently and splash out, causing severe chemical burns.",
      "Water of Crystallization examples: Copper sulphate crystals (CuSO₄·5H₂O, blue; turns white anhydrous on heating), Washing soda (Na₂CO₃·10H₂O), Gypsum (CaSO₄·2H₂O), Ferrous sulphate (FeSO₄·7H₂O, green).",
      "Salt pH Families:\n- Strong Acid + Strong Base ⟶ Neutral Salt (pH = 7, e.g. NaCl, K₂SO₄).\n- Strong Acid + Weak Base ⟶ Acidic Salt (pH < 7, e.g. NH₄Cl, CuSO₄).\n- Weak Acid + Strong Base ⟶ Basic Salt (pH > 7, e.g. CH₃COONa, Na₂CO₃)."
    ],
    keyReactionsOrFormulas: [
      { name: "Copper Sulphate Dehydration", formula: "CuSO₄·5H₂O(s) [Blue] —[Heat]⟶ CuSO₄(s) [White Anhydrous] + 5H₂O(g)↑", note: "Adding drops of water restores vibrant blue color." },
      { name: "Acid Ionization in Water", formula: "HCl(g) + H₂O(l) ⟶ H₃O⁺(aq) + Cl⁻(aq)", note: "Hydronium ion formation is highly exothermic." }
    ],
    commonMistakesWarning: "Never pour water into acid! The localized heat causes explosive steam pockets that shatter glass beakers and spray corrosive acid.",
    examples: [
      {
        id: "ex_c2_7",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is it recommended that acid should be added to water and not water to acid?",
        solutionSteps: [
          "The process of dissolving a concentrated acid in water is highly exothermic.",
          "If water is poured into concentrated acid, a huge amount of heat is generated instantaneously at the contact point, which can cause the corrosive acid mixture to violently boil, splash out, and cause severe chemical burns, or even crack the glass container."
        ],
        keyTakeaway: "Acid to water with stirring absorbs heat safely in large heat capacity of water.",
        examinerTrap: "Do not write 'it creates steam'. Specify 'the mixture splashes out causing acid burns and container rupture'."
      },
      {
        id: "ex_c2_8",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 2,
        question: "Blue crystals of copper sulphate turn white on heating in a test tube. Explain why this happens and what happens when water is added back to the white residue.",
        solutionSteps: [
          "Blue copper sulphate crystals contain 5 molecules of water of crystallization per formula unit (CuSO₄·5H₂O).",
          "On heating, these water molecules evaporate as steam, leaving behind anhydrous copper sulphate (CuSO₄), which is powdery white in color.",
          "When a few drops of water are added back to the white residue, hydration occurs, reforming CuSO₄·5H₂O and restoring the vibrant blue color."
        ],
        keyTakeaway: "Water of crystallization gives CuSO₄ its blue crystalline shape; heating removes it, turning it white.",
        examinerTrap: "Writing that copper sulphate decomposes into copper oxide on gentle heating is incorrect. It merely loses water."
      },
      {
        id: "ex_c2_9",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Classify the following aqueous salt solutions into Acidic, Basic, or Neutral, and explain their pH with the parent acid and parent base for each:\n(a) Sodium chloride (NaCl)\n(b) Ammonium chloride (NH₄Cl)\n(c) Sodium carbonate (Na₂CO₃)\n(d) Potassium sulphate (K₂SO₄).",
        solutionSteps: [
          "(a) Sodium chloride (NaCl): Neutral (pH = 7). Derived from strong acid (HCl) and strong base (NaOH). Neither ion undergoes significant hydrolysis.",
          "(b) Ammonium chloride (NH₄Cl): Acidic (pH < 7). Derived from strong acid (HCl) and weak base (NH₄OH). NH₄⁺ ions hydrolyze in water to yield excess hydronium H⁺ ions.",
          "(c) Sodium carbonate (Na₂CO₃): Basic (pH > 7). Derived from weak acid (H₂CO₃ - carbonic acid) and strong base (NaOH). CO₃²⁻ ions hydrolyze to generate excess hydroxide OH⁻ ions.",
          "(d) Potassium sulphate (K₂SO₄): Neutral (pH = 7). Derived from strong acid (H₂SO₄) and strong base (KOH)."
        ],
        keyTakeaway: "Strong acid + Weak base = Acidic (pH < 7); Weak acid + Strong base = Basic (pH > 7); Strong + Strong = Neutral (pH = 7).",
        examinerTrap: "Assuming all salts are neutral (pH 7). Salts of weak acids or weak bases hydrolyze to shift the pH."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 3: METALS AND NON-METALS (CHEMISTRY)
  // =======================================================================
  {
    id: "sci_c3_t1",
    chapterNo: 3,
    chapterName: "Metals and Non-metals",
    discipline: "Chemistry",
    topicTitle: "Properties, Reactivity Series, Amphoteric Oxides & Exceptions",
    ncertSection: "NCERT Chapter 3, Sections 3.1 & 3.2 (Pages 37–48)",
    ncertSummary: "Metals are electropositive elements that readily donate valence electrons to form cations. They are malleable, ductile, lustrous, good conductors of heat and electricity, and form basic oxides. Non-metals are electronegative elements that accept electrons, form acidic or neutral oxides, and are brittle. Several notable physical exceptions are high-priority board exam questions.",
    corePrinciples: [
      "Physical exceptions:\n- Mercury (Hg) is the only liquid metal at room temperature.\n- Gallium (Ga) and Cesium (Cs) have such low melting points that they melt in the palm of your hand (MP < 30°C).\n- Iodine (I₂) is a non-metal but is remarkably lustrous.\n- Diamond (allotrope of carbon) is a non-metal but is the hardest natural substance known with high MP/BP.\n- Graphite (allotrope of carbon) is a non-metal that conducts electricity due to delocalized electrons.\n- Alkali metals (Li, Na, K) are so soft they can be cut with a knife and have low densities.",
      "Amphoteric Oxides: Metal oxides that react with BOTH acids and bases to produce salt and water (Al₂O₃ and ZnO).",
      "Reactivity with Water: Na and K react violently with cold water releasing H₂ which catches fire immediately. Ca reacts less violently, floats because H₂ bubbles stick to its surface. Mg reacts only with hot water. Al, Fe, Zn react only with steam.",
      "Nitric Acid (HNO₃) exception: When metals react with dilute HNO₃, hydrogen gas is NOT evolved because HNO₃ is a strong oxidizing agent that oxidizes H₂ to H₂O and itself gets reduced to nitrogen oxides (N₂O, NO, NO₂). Exception: Very dilute HNO₃ reacts with Magnesium (Mg) and Manganese (Mn) to liberate H₂ gas."
    ],
    keyReactionsOrFormulas: [
      { name: "Aluminium Oxide with Hydrochloric Acid", formula: "Al₂O₃(s) + 6HCl(aq) ⟶ 2AlCl₃(aq) + 3H₂O(l)", note: "Behaving as a basic oxide." },
      { name: "Aluminium Oxide with Sodium Hydroxide", formula: "Al₂O₃(s) + 2NaOH(aq) ⟶ 2NaAlO₂(aq) [Sodium Aluminate] + H₂O(l)", note: "Behaving as an acidic oxide." },
      { name: "Iron Reaction with Steam", formula: "3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)↑", note: "Iron does not react with cold or hot liquid water." }
    ],
    commonMistakesWarning: "Students write Al₂O₃ + NaOH ⟶ Na₂AlO₃ or incorrect formulas for sodium aluminate. The correct formula is NaAlO₂.",
    examples: [
      {
        id: "ex_c3_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Name one metal and one non-metal which exist in liquid state at room temperature.",
        solutionSteps: [
          "Liquid metal at room temperature: Mercury (Hg).",
          "Liquid non-metal at room temperature: Bromine (Br₂)."
        ],
        keyTakeaway: "Mercury (Hg) is the sole liquid metal; Bromine (Br₂) is the sole liquid non-metal.",
        examinerTrap: "Do not write Gallium or Cesium as liquid metals at room temperature; they are solids at room temperature (25°C) and only melt near 30°C."
      },
      {
        id: "ex_c3_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "What are amphoteric oxides? Choose amphoteric oxides from the following: Na₂O, ZnO, Al₂O₃, CO₂, SO₂. Write balanced chemical equations showing the amphoteric nature of one of them.",
        solutionSteps: [
          "Definition: Metal oxides that show both acidic as well as basic behavior by reacting with acids as well as bases to form salt and water are called amphoteric oxides.",
          "Amphoteric oxides from the list: ZnO and Al₂O₃.",
          "Equations for Al₂O₃:\n(1) As a base (reacting with acid): Al₂O₃(s) + 6HCl(aq) ⟶ 2AlCl₃(aq) + 3H₂O(l).\n(2) As an acid (reacting with base): Al₂O₃(s) + 2NaOH(aq) ⟶ 2NaAlO₂(aq) [Sodium Aluminate] + H₂O(l)."
        ],
        keyTakeaway: "Amphoteric oxides (Al₂O₃, ZnO) neutralize both acids (forming AlCl₃) and bases (forming NaAlO₂).",
        examinerTrap: "CO₂ and SO₂ are non-metallic acidic oxides, NOT amphoteric. Only Al₂O₃ and ZnO qualify."
      },
      {
        id: "ex_c3_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Give reasons for the following chemical facts:\n(a) Calcium starts floating when added to water.\n(b) Hydrogen gas is not evolved when a metal reacts with dilute nitric acid.\n(c) Sodium and potassium are kept immersed in kerosene oil.\n(d) Gold and platinum occur in the native free state in nature.",
        solutionSteps: [
          "(a) Calcium floats because the reaction with water produces hydrogen gas, and the bubbles of H₂ gas stick to the surface of the calcium pieces, making them buoyant: Ca + 2H₂O ⟶ Ca(OH)₂ + H₂↑.",
          "(b) Nitric acid (HNO₃) is a powerful oxidizing agent. As soon as H₂ gas is formed, HNO₃ oxidizes it to water (H₂O) and gets reduced to nitrogen oxides (such as N₂O, NO, or NO₂).",
          "(c) Sodium and potassium are extremely reactive alkali metals. They react vigorously with atmospheric oxygen and moisture at room temperature, liberating hydrogen gas which catches fire explosively. Kerosene prevents contact with air and moisture.",
          "(d) Gold and platinum lie at the very bottom of the reactivity series. They are least reactive, highly unreactive noble metals that do not react with atmospheric oxygen, water, or carbon dioxide, hence remaining in free elemental state."
        ],
        keyTakeaway: "Reactivity hierarchy explains why Na is stored in kerosene while Au/Pt exist free in nature.",
        examinerTrap: "For part (b), remember the only metals that DO liberate H₂ with very dilute HNO₃ are Mg and Mn."
      }
    ]
  },
  {
    id: "sci_c3_t2",
    chapterNo: 3,
    chapterName: "Metals and Non-metals",
    discipline: "Chemistry",
    topicTitle: "Ionic Bonding, Metallurgy (Roasting/Calcination) & Refining",
    ncertSection: "NCERT Chapter 3, Sections 3.3, 3.4 & 3.5 (Pages 48–56)",
    ncertSummary: "Ionic (electrovalent) compounds are formed by the complete transfer of one or more electrons from a metallic atom to a non-metallic atom. In metallurgy, ores are concentrated, converted to oxides via Calcination (carbonate ores in absence of air) or Roasting (sulphide ores in excess air), reduced to metals (using carbon or thermite Al reduction), and purified by electrolytic refining.",
    corePrinciples: [
      "Properties of Ionic Compounds: High melting and boiling points (strong electrostatic attractions), hard crystalline solids, soluble in water, insoluble in organic solvents (kerosene, petrol), conduct electricity in molten or aqueous state (free mobile ions) but NOT in solid state (ions locked in crystal lattice).",
      "Roasting: Heating sulphide ore strongly in the EXCESS presence of air below melting point: 2ZnS + 3O₂ —[Δ]⟶ 2ZnO + 2SO₂↑.",
      "Calcination: Heating carbonate ore strongly in the ABSENCE / limited air below melting point: ZnCO₃ —[Δ]⟶ ZnO + CO₂↑.",
      "Thermite Reaction: Highly exothermic reduction of metal oxides (like Fe₂O₃) using aluminium powder: Fe₂O₃(s) + 2Al(s) ⟶ 2Fe(l) + Al₂O₃(s) + Heat. The iron is produced in molten liquid state and used to weld railway tracks.",
      "Electrolytic Refining of Copper: Impure copper acts as Anode; thin strip of pure copper acts as Cathode; acidified CuSO₄ solution acts as Electrolyte. Pure copper deposits on cathode; impurities settle below anode as 'anode mud'."
    ],
    keyReactionsOrFormulas: [
      { name: "Electron Dot Transfer for MgCl₂", formula: "Mg [2,8,2] ⟶ Mg²⁺ + 2e⁻;  2Cl [2,8,7] + 2e⁻ ⟶ 2Cl⁻ [2,8,8]  ⟹ [Mg²⁺][ :Cl̈:⁻ ]₂", note: "Shows complete valence electron transfer." },
      { name: "Thermite Welding Reaction", formula: "Fe₂O₃(s) + 2Al(s) ⟶ 2Fe(l) + Al₂O₃(s) + Enormous Heat", note: "Heat evolved melts the iron metal." },
      { name: "Electrolytic Refining Equations", formula: "Anode: Cu(s) [Impure] ⟶ Cu²⁺(aq) + 2e⁻;  Cathode: Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) [Pure]", note: "Anode decreases in mass, cathode gains mass." }
    ],
    commonMistakesWarning: "Students confuse Calcination with Roasting. Mnemonic: Calcination has 'C' for Carbonate ores (no oxygen needed). Roasting is for Sulphide ores (needs Oxygen).",
    examples: [
      {
        id: "ex_c3_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why do ionic compounds conduct electricity in the molten or aqueous state, but not in the solid state?",
        solutionSteps: [
          "In the solid state, electrostatic forces of attraction between oppositely charged ions are exceptionally strong, locking ions in rigid fixed lattice positions with no mobile charge carriers.",
          "In the molten state (due to heat) or aqueous solution (due to hydration), the electrostatic bonds weaken, allowing ions to move freely towards opposite electrodes and conduct electric current."
        ],
        keyTakeaway: "Electrical conduction requires mobile ions; solid ionic crystals lack free mobile ions.",
        examinerTrap: "Do not say 'electrons move'. In ionic solutions/melts, charge is carried by mobile IONS, not electrons."
      },
      {
        id: "ex_c3_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Differentiate between Roasting and Calcination with one balanced chemical equation for each using zinc ores.",
        solutionSteps: [
          "Difference 1 (Ore type): Roasting is applied to Sulphide ores; Calcination is applied to Carbonate ores.",
          "Difference 2 (Air supply): Roasting requires strong heating in EXCESS of air; Calcination requires heating in LIMITED or ABSENCE of air.",
          "Difference 3 (Gas liberated): Roasting produces Sulphur dioxide (SO₂); Calcination produces Carbon dioxide (CO₂).",
          "Roasting equation: 2ZnS(s) [Zinc Blende] + 3O₂(g) —[Δ]⟶ 2ZnO(s) + 2SO₂(g)↑.",
          "Calcination equation: ZnCO₃(s) [Calamine] —[Δ]⟶ ZnO(s) + CO₂(g)↑."
        ],
        keyTakeaway: "Roasting converts sulphide ore with O₂ (releasing SO₂); Calcination converts carbonate ore without O₂ (releasing CO₂).",
        examinerTrap: "Students often write 'in presence of air' for calcination. It must be 'limited air or absence of air'."
      },
      {
        id: "ex_c3_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "With the help of an electron dot diagram, illustrate the formation of Magnesium Chloride (MgCl₂) from Magnesium (Z=12) and Chlorine (Z=17). State two physical properties of this compound.",
        solutionSteps: [
          "Electronic configuration: Mg (Z=12) = 2, 8, 2 (has 2 valence electrons). Cl (Z=17) = 2, 8, 7 (needs 1 electron for octet).",
          "Step 1 (Cation formation): Mg ⟶ Mg²⁺ + 2e⁻ (Mg loses 2 electrons to achieve stable neon octet 2,8).",
          "Step 2 (Anion formation): 2Cl + 2e⁻ ⟶ 2Cl⁻ (each chlorine atom accepts 1 electron to achieve stable argon octet 2,8,8).",
          "Step 3 (Electron transfer diagram): Mg with 2 dot electrons transfers one dot to each of the two :Cl̈: atoms, resulting in: [Mg]²⁺ [ :Cl̈: ]⁻₂.",
          "Physical Properties:\n(1) High melting and boiling point due to strong electrostatic attraction between Mg²⁺ and Cl⁻ ions.\n(2) Soluble in water but insoluble in non-polar organic solvents like petrol and kerosene."
        ],
        keyTakeaway: "Mg transfers 2 electrons to two Cl atoms, forming [Mg]²⁺ and 2 [Cl]⁻ with high ionic lattice energy.",
        examinerTrap: "Drawing single chlorine atom instead of two chlorine atoms is an automatic 1-mark deduction."
      }
    ]
  },
  {
    id: "sci_c3_t3",
    chapterNo: 3,
    chapterName: "Metals and Non-metals",
    discipline: "Chemistry",
    topicTitle: "Corrosion Prevention, Galvanization & Commercial Alloys",
    ncertSection: "NCERT Chapter 3, Section 3.5 (Pages 54–56)",
    ncertSummary: "Corrosion of metals can be prevented by barrier methods (painting, oiling, greasing), sacrificial protection (galvanization with zinc), and alloying. An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal, designed to enhance hardness, tensile strength, and resistance to corrosion.",
    corePrinciples: [
      "Galvanization: Coating iron or steel with a thin layer of Zinc (Zn). Even if the zinc surface is scratched, zinc corrodes preferentially because it is more electropositive than iron (sacrificial protection).",
      "Key Alloys & Compositions:\n- Brass: Copper + Zinc (Cu + Zn) — musical instruments, decorative items.\n- Bronze: Copper + Tin (Cu + Sn) — medals, statues, coins.\n- Solder: Lead + Tin (Pb + Sn) — low melting point, used to solder electrical wires.\n- Stainless Steel: Iron + Nickel + Chromium + Carbon (Fe + Ni + Cr + C) — hard, rust-proof cutlery/surgical tools.\n- Amalgam: Any alloy containing Mercury (Hg) as one of the constituent metals (e.g. dental amalgam).\n- Pure Gold (24 carats): Very soft; alloyed with 2 parts Copper or Silver to make 22-carat gold suitable for jewelry."
    ],
    keyReactionsOrFormulas: [
      { name: "Sacrificial Zinc Oxidation", formula: "Zn(s) ⟶ Zn²⁺ + 2e⁻ [Zinc sacrifices itself to protect Fe]", note: "Operates even when coating is scratched." },
      { name: "22-Carat Gold Composition", formula: "22 \\text{ parts pure Au} + 2 \\text{ parts Cu or Ag}", note: "Imparts structural hardness for delicate ornaments." }
    ],
    commonMistakesWarning: "Students confuse Brass (Cu + Zn) with Bronze (Cu + Sn). Mnemonic: BroNZ contains 'Z' in sound, but has Tin (Sn); BraSS has Zinc (Zn).",
    examples: [
      {
        id: "ex_c3_7",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why does a galvanized iron sheet not rust even if the outer zinc coating gets scratched?",
        solutionSteps: [
          "Zinc is more reactive (higher in reactivity series) than iron.",
          "When the coating is scratched and both metals are exposed to moisture, zinc oxidizes preferentially, sacrificing itself to protect the underlying iron from rusting (sacrificial cathodic protection)."
        ],
        keyTakeaway: "Zinc is more electropositive than iron and acts as a sacrificial anode even when breached.",
        examinerTrap: "Do not say 'zinc paint seals the surface'. When scratched, protection is sacrificial oxidation, not barrier sealing."
      },
      {
        id: "ex_c3_8",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "State the primary constituents of each of the following alloys and give one characteristic property that makes it industrially useful:\n(a) Solder\n(b) Brass\n(c) Stainless steel.",
        solutionSteps: [
          "(a) Solder: Constituents are Lead and Tin (Pb + Sn). Useful property: Very low melting point, making it ideal for fusing and joining electrical components.",
          "(b) Brass: Constituents are Copper and Zinc (Cu + Zn). Useful property: Highly malleable and resistant to corrosion, used for musical instruments and decorative plumbing fittings.",
          "(c) Stainless Steel: Constituents are Iron, Nickel, Chromium, and Carbon (Fe + Ni + Cr + trace C). Useful property: Extremely hard and does not rust at all, ideal for surgical instruments and cookware."
        ],
        keyTakeaway: "Alloying modifies melting points, tensile strengths, and eliminates chemical corrosion.",
        examinerTrap: "Forgetting to list Carbon in stainless steel. Carbon is essential to impart hardness to the iron lattice."
      },
      {
        id: "ex_c3_9",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "What is an amalgam? Why is 24-carat gold not used for making delicate jewelry? How is it converted into suitable gold?",
        solutionSteps: [
          "Amalgam definition: An alloy in which one of the constituent metals is liquid Mercury (Hg). For example, silver amalgam is used in dental fillings.",
          "24-carat gold issue: Pure gold is rated as 24 carats. It is an extremely soft, malleable metal that bends easily under finger pressure, making it unsuitable for making delicate, rigid jewelry.",
          "Conversion: To impart mechanical hardness and tensile strength, it is alloyed with 2 parts of either Copper (Cu) or Silver (Ag).",
          "This resulting alloy is known as 22-carat gold, meaning 22 parts of pure gold are alloyed with 2 parts of copper or silver."
        ],
        keyTakeaway: "Amalgam requires Hg; 24-carat gold is too soft; 22-carat gold has 2 parts Cu/Ag for structural rigidity.",
        examinerTrap: "Stating that 22-carat gold is 22% gold. It is 22/24 = 91.6% pure gold, NOT 22%."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 4: CARBON AND ITS COMPOUNDS (CHEMISTRY)
  // =======================================================================
  {
    id: "sci_c4_t1",
    chapterNo: 4,
    chapterName: "Carbon and its Compounds",
    discipline: "Chemistry",
    topicTitle: "Covalent Bonding, Versatile Nature of Carbon & Allotropes",
    ncertSection: "NCERT Chapter 4, Sections 4.1 & 4.2 (Pages 58–66)",
    ncertSummary: "Carbon has atomic number 6 (electronic configuration 2,4). It cannot gain 4 electrons (to form C⁴⁻, as 6 protons cannot hold 10 electrons) nor lose 4 electrons (to form C⁴⁺, requiring too high ionization energy). Hence, carbon exclusively shares electrons to form covalent bonds. The versatile nature of carbon stems from Catenation (self-linking) and Tetravalency.",
    corePrinciples: [
      "Why Carbon forms Covalent Bonds: C⁴⁻ is unstable due to nuclear charge imbalance (6 protons holding 10 electrons); C⁴⁺ requires colossal energy to remove 4 valence electrons.",
      "Two Pillars of Carbon's Versatility:\n(1) Catenation: The unique ability of carbon to form strong, stable bonds with other carbon atoms, creating long straight chains, branched chains, and closed rings.\n(2) Tetravalency: Carbon has 4 valence electrons and forms stable covalent bonds with 4 other monovalent atoms (H, Cl) or polyvalent atoms (O, N).",
      "Allotropes of Carbon:\n- Diamond: Each C atom is bonded to 4 other C atoms in a rigid 3D tetrahedral framework. Hardest natural substance, non-conductor of electricity.\n- Graphite: Each C atom is bonded to 3 other C atoms in hexagonal planar layers held by weak van der Waals forces. Slippery lubricant, conducts electricity due to free delocalized electrons.\n- Buckminsterfullerene (C₆₀): 60 carbon atoms arranged in soccer ball-shaped cages (interlocking pentagons and hexagons)."
    ],
    keyReactionsOrFormulas: [
      { name: "Covalent Bonding in Methane", formula: "CH₄: C shares 1 electron with each of 4 H atoms", note: "Single covalent bonds (sigma bonds)." },
      { name: "Double Bond in Oxygen Molecule", formula: "O₂: :Ö=Ö: (Shares 2 electron pairs)", note: "Double covalent bond." }
    ],
    commonMistakesWarning: "Students say graphite conducts because it is a metal. Graphite is a NON-METAL allotrope of carbon; it conducts electricity solely because each carbon uses only 3 valence electrons, leaving 1 free delocalized electron per atom.",
    examples: [
      {
        id: "ex_c4_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why does graphite conduct electricity whereas diamond is an electrical insulator?",
        solutionSteps: [
          "In graphite, each carbon atom is bonded to only 3 other carbon atoms in a hexagonal layer, leaving the fourth valence electron free and delocalized to drift between sheets and conduct electricity.",
          "In diamond, all 4 valence electrons of every carbon atom are firmly locked in rigid, directional covalent bonds in a 3D tetrahedral network, leaving zero free electrons."
        ],
        keyTakeaway: "Graphite has 1 free delocalized electron per carbon atom; diamond has all 4 valence electrons locked.",
        examinerTrap: "Never say diamond has no ions. Neither has ions; the difference is the presence of free delocalized electrons in graphite."
      },
      {
        id: "ex_c4_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Explain the two unique characteristics of carbon that lead to the formation of millions of organic compounds.",
        solutionSteps: [
          "Characteristic 1: Catenation. Carbon has the remarkable property to combine with other carbon atoms through strong, stable covalent bonds to form exceptionally large molecules. These can form straight chains, branched chains, and closed rings. The C-C single bond is extremely strong (high bond energy) because carbon's atomic radius is tiny.",
          "Characteristic 2: Tetravalency. Carbon has a valency of four, meaning it can bond with four other atoms of carbon or other elements like hydrogen, oxygen, nitrogen, chlorine, and sulfur. The bonds formed are very strong due to small atomic size, which enables the nucleus to hold onto the shared pairs of electrons firmly."
        ],
        keyTakeaway: "Carbon's millions of compounds result from Catenation (self-linking) + Tetravalency (4 bonding sites).",
        examinerTrap: "Mentioning silicon as having catenation. Silicon forms weak, unstable Si-Si chains (max 7-8 atoms), while carbon catenation is virtually limitless."
      },
      {
        id: "ex_c4_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Draw the electron dot structures of:\n(a) Water molecule (H₂O)\n(b) Carbon dioxide molecule (CO₂)\n(c) Nitrogen molecule (N₂)\nState the number of single, double, or triple covalent bonds present in each.",
        solutionSteps: [
          "(a) Water (H₂O): Central O atom (6 valence electrons) shares 1 electron with each of two H atoms. There are 2 single covalent bonds and 2 lone pairs on Oxygen.",
          "(b) Carbon dioxide (CO₂): Central C atom (4 valence electrons) shares 2 electrons with one Oxygen atom and 2 electrons with the second Oxygen atom: O=C=O. There are 2 double covalent bonds.",
          "(c) Nitrogen molecule (N₂): Each N atom has 5 valence electrons. Both N atoms share 3 pairs of electrons between them: :N≡N:. There is 1 triple covalent bond.",
          "Conclusion: H₂O has 2 single bonds; CO₂ has 2 double bonds; N₂ has 1 triple bond."
        ],
        keyTakeaway: "H₂O = 2 single bonds; CO₂ = 2 double bonds; N₂ = 1 triple bond with noble gas octet completion.",
        examinerTrap: "Forgetting to draw the unshared lone pairs on Oxygen (2 lone pairs) and Nitrogen (1 lone pair each)."
      }
    ]
  },
  {
    id: "sci_c4_t2",
    chapterNo: 4,
    chapterName: "Carbon and its Compounds",
    discipline: "Chemistry",
    topicTitle: "Homologous Series, Functional Groups & IUPAC Nomenclature",
    ncertSection: "NCERT Chapter 4, Sections 4.2.2 & 4.2.3 (Pages 64–70)",
    ncertSummary: "Hydrocarbons are compounds containing only carbon and hydrogen. Saturated hydrocarbons (alkanes, C_n H_{2n+2}) contain only single C-C bonds. Unsaturated hydrocarbons contain double bonds (alkenes, C_n H_{2n}) or triple bonds (alkynes, C_n H_{2n-2}). A Homologous Series is a family of compounds with identical functional groups and similar chemical properties, where successive members differ by a -CH₂- unit (14 unified mass units).",
    corePrinciples: [
      "Homologous Series Characteristics: (1) Common general molecular formula, (2) Successive members differ by -CH₂-, (3) Molecular mass increases by 14 u between adjacent members, (4) Gradual gradation in physical properties (boiling point rises with molecular weight), (5) Identical chemical properties.",
      "Key Functional Groups in Class 10:\n- Haloalkanes: -Cl (Chloro), -Br (Bromo).\n- Alcohol: -OH (suffix: -ol, e.g. Methanol, Ethanol).\n- Aldehyde: -CHO (suffix: -al, e.g. Methanal, Ethanal).\n- Ketone: >C=O (suffix: -one, e.g. Propanone, minimum 3 carbons).\n- Carboxylic Acid: -COOH (suffix: -oic acid, e.g. Ethanoic acid)."
    ],
    keyReactionsOrFormulas: [
      { name: "Alkanes General Formula", formula: "C_n H_{2n+2} \quad (n = 1, 2, 3...)", note: "Methane CH₄, Ethane C₂H₆, Propane C₃H₈." },
      { name: "Alkenes General Formula", formula: "C_n H_{2n} \quad (n = 2, 3...)", note: "Ethene C₂H₄, Propene C₃H₆." },
      { name: "Alkynes General Formula", formula: "C_n H_{2n-2} \quad (n = 2, 3...)", note: "Ethyne C₂H₂, Propyne C₃H₄." }
    ],
    commonMistakesWarning: "The simplest ketone is Propanone (CH₃-CO-CH₃) with 3 carbon atoms. Methanone and Ethanone do not exist because a ketone carbonyl group must be bonded to two carbon atoms!",
    examples: [
      {
        id: "ex_c4_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why does propane have a higher boiling point than ethane?",
        solutionSteps: [
          "Propane (C₃H₈) has a higher molecular mass and larger molecular size than ethane (C₂H₆).",
          "As molecular mass increases in a homologous series, the strength of intermolecular attractive van der Waals forces increases, requiring more thermal energy to boil."
        ],
        keyTakeaway: "Boiling points increase with molecular mass in a homologous series due to stronger intermolecular forces.",
        examinerTrap: "Do not say 'propane has more bonds'. The correct scientific term is 'stronger intermolecular forces due to higher molecular mass'."
      },
      {
        id: "ex_c4_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Write the molecular formula, structural formula, and IUPAC name for:\n(a) An alkyne with 3 carbon atoms\n(b) An aldehyde with 2 carbon atoms\n(c) The simplest ketone.",
        solutionSteps: [
          "(a) Alkyne with 3 carbons: Molecular formula: C₃H₄. Structure: CH₃-C≡CH. IUPAC Name: Propyne.",
          "(b) Aldehyde with 2 carbons: Molecular formula: C₂H₄O. Structure: CH₃-CHO. IUPAC Name: Ethanal (commonly acetaldehyde).",
          "(c) Simplest ketone: Minimum 3 carbons required. Molecular formula: C₃H₆O. Structure: CH₃-CO-CH₃. IUPAC Name: Propanone (commonly acetone)."
        ],
        keyTakeaway: "Propyne (C₃H₄), Ethanal (CH₃CHO), Propanone (CH₃COCH₃) represent key IUPAC standards.",
        examinerTrap: "Calling CH₃CHO 'Ethanol'. Ethanol is alcohol (-OH); Ethanal is aldehyde (-CHO). Ending letter matters!"
      },
      {
        id: "ex_c4_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Define homologous series. State any three important characteristics of a homologous series. Write the molecular formulas of the 2nd and 3rd members of the homologous series of alkenes.",
        solutionSteps: [
          "Definition: A homologous series is a series of organic carbon compounds having the same functional group and similar chemical properties, in which successive members differ by a -CH₂- unit.",
          "Three Characteristics:\n(1) All members conform to a single general molecular formula.\n(2) Any two adjacent homologues differ by one carbon and two hydrogen atoms (-CH₂-), corresponding to a molecular mass difference of 14 u.\n(3) Members display regular gradation in physical properties (e.g. melting point, boiling point, density) as molecular mass increases, but show nearly identical chemical behavior.",
          "Alkene Series (C_n H_{2n}, where n begins at 2):\n- 1st member (n=2): Ethene (C₂H₄).\n- 2nd member (n=3): Propene (C₃H₆).\n- 3rd member (n=4): Butene (C₄H₈)."
        ],
        keyTakeaway: "In alkenes, n=1 does not exist; the 2nd member is Propene (C₃H₆) and the 3rd member is Butene (C₄H₈).",
        examinerTrap: "Writing Methene as 1st member and Ethene as 2nd member. A double bond requires 2 carbons, so n starts at 2!"
      }
    ]
  },
  {
    id: "sci_c4_t3",
    chapterNo: 4,
    chapterName: "Carbon and its Compounds",
    discipline: "Chemistry",
    topicTitle: "Chemical Properties, Ethanol, Ethanoic Acid & Soaps/Detergents",
    ncertSection: "NCERT Chapter 4, Sections 4.3, 4.4 & 4.5 (Pages 70–76)",
    ncertSummary: "Carbon compounds undergo combustion, oxidation (via alkaline KMnO₄ or acidified K₂Cr₂O₇), addition reactions (hydrogenation of vegetable oils), and substitution reactions. Ethanol (C₂H₅OH) and Ethanoic acid (CH₃COOH) undergo Esterification in the presence of concentrated H₂SO₄ to form sweet-smelling esters. Soaps are sodium/potassium salts of long-chain fatty acids that clean via spherical micelle structures.",
    corePrinciples: [
      "Combustion: Saturated hydrocarbons burn with a clean blue flame; unsaturated burn with a yellow sooty flame due to unburnt carbon particles.",
      "Oxidation: Ethanol is oxidized to ethanoic acid using alkaline KMnO₄ + heat or acidified K₂Cr₂O₇ + heat.",
      "Addition Reaction: Unsaturated hydrocarbons add hydrogen in presence of Nickel/Palladium catalyst to form saturated hydrocarbons. Industrial application: Hydrogenation of vegetable oils into vanaspati ghee.",
      "Esterification: Reaction between alcohol and carboxylic acid in presence of conc. H₂SO₄ yields fruity-smelling ester: CH₃COOH + C₂H₅OH —[conc. H₂SO₄]⟶ CH₃COOC₂H₅ + H₂O.",
      "Saponification: Alkaline hydrolysis of esters with NaOH produces soap (sodium ethanoate) and alcohol.",
      "Cleansing Action of Soap: Soap molecule has a hydrophilic ionic head (COO⁻Na⁺) and a hydrophobic long hydrocarbon tail. In water, tails dissolve in oily dirt while heads face outward, forming a spherical cluster called a Micelle. Agitation lifts the dirt away.",
      "Hard Water Problem: Soaps form an insoluble sticky precipitate (scum) with Ca²⁺ and Mg²⁺ ions in hard water. Detergents (sodium salts of sulphonic acids) do not form scum in hard water."
    ],
    keyReactionsOrFormulas: [
      { name: "Ethanol Controlled Oxidation", formula: "CH₃CH₂OH —[Alkaline KMnO₄ + Heat]⟶ CH₃COOH", note: "KMnO₄ acts as oxidizing agent." },
      { name: "Esterification Reaction", formula: "CH₃COOH + C₂H₅OH —[conc. H₂SO₄]⟶ CH₃COOC₂H₅ [Ethyl Ethanoate] + H₂O", note: "Sweet fruity fragrance used in perfumes." },
      { name: "Saponification", formula: "CH₃COOC₂H₅ + NaOH ⟶ CH₃COONa [Soap] + C₂H₅OH", note: "Reverse of esterification." }
    ],
    commonMistakesWarning: "Soaps do not work in hard water because they react with calcium and magnesium ions to form insoluble scum. Detergents work effectively in both soft and hard water.",
    examples: [
      {
        id: "ex_c4_7",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is the reaction between an acid and an alcohol called an esterification reaction?",
        solutionSteps: [
          "When a carboxylic acid reacts with an alcohol in the presence of an acid catalyst (conc. H₂SO₄), a sweet-smelling organic compound called an 'Ester' is formed.",
          "Because an ester is the primary product of this condensation reaction, it is termed Esterification."
        ],
        keyTakeaway: "Acid + Alcohol ⟶ Ester + Water (catalyzed by concentrated sulphuric acid).",
        examinerTrap: "Forgetting the role of concentrated H₂SO₄: it acts as an acid catalyst AND a dehydrating agent to pull water out."
      },
      {
        id: "ex_c4_8",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Differentiate between Soaps and Detergents. Why are detergents preferred over soaps for washing clothes in regions with hard water?",
        solutionSteps: [
          "Difference 1: Soaps are sodium or potassium salts of long-chain fatty acids (e.g. C₁₇H₃₅COONa). Detergents are sodium salts of long-chain benzene sulphonic acids or alkyl hydrogen sulphates.",
          "Difference 2: Soaps are biodegradable, while some synthetic detergents are non-biodegradable.",
          "Why detergents are preferred in hard water: Hard water contains dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) salts. When soap is added, it reacts with these ions to form an insoluble, sticky curdy precipitate called 'Scum', which wastes soap and sticks to fabric fibers. In contrast, the charged ends of detergents do not form insoluble precipitates with Ca²⁺ or Mg²⁺, remaining completely effective."
        ],
        keyTakeaway: "Detergents do not form insoluble scum with Ca²⁺/Mg²⁺ ions, making them fully effective in hard water.",
        examinerTrap: "Writing that soaps are acidic and detergents are basic. Both soaps and detergents are alkaline in nature."
      },
      {
        id: "ex_c4_9",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        question: "Explain the mechanism of the cleansing action of soap with the help of a labeled micelle diagram description. Why does soap form scum with hard water?",
        solutionSteps: [
          "Structure of Soap Molecule: A soap molecule (e.g. Sodium Stearate, C₁₇H₃₅COO⁻Na⁺) has two distinct ends with opposing properties:\n(1) Hydrophobic tail: Non-polar hydrocarbon chain that repels water but dissolves readily in oil/grease.\n(2) Hydrophilic head: Polar ionic carboxylate end (COO⁻Na⁺) that loves water and dissolves in water.",
          "Micelle Formation: Most dirt on clothes is oily or greasy in nature. When soap is dissolved in water, the hydrophobic hydrocarbon tails trap and embed themselves into the central oil droplet, while the hydrophilic ionic heads stick outward into the water.",
          "A spherical colloidal cluster called a 'Micelle' is formed. The outward-facing negative ionic heads repel other micelles, preventing them from coalescing into larger droplets.",
          "Mechanical Action: Upon mechanical agitation or scrubbing, the micelles containing the trapped oil droplet are pulled into the water emulsion and rinsed away.",
          "Scum Formation: In hard water containing Ca²⁺ and Mg²⁺ ions, soap molecules react to form insoluble calcium and magnesium stearate precipitates (scum), neutralizing the soap before micelles can form."
        ],
        keyTakeaway: "Soap cleansing: Hydrophobic tail traps oil, hydrophilic head faces water, forming micelles that wash away with agitation.",
        examinerTrap: "Reversing tail and head: Tail is hydrophobic (oil-soluble); head is hydrophilic (water-soluble)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 5: LIFE PROCESSES (BIOLOGY)
  // =======================================================================
  {
    id: "sci_c5_t1",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    topicTitle: "Photosynthesis, Stomata & Human Digestive Enzyme Cascade",
    ncertSection: "NCERT Chapter 5, Sections 5.2 & 5.2.3 (Pages 81–90)",
    ncertSummary: "Nutrition is the process of intake and utilization of nutrients. Plants perform autotrophic photosynthesis using sunlight, chlorophyll, CO₂, and water. The exchange of gases occurs through stomata, regulated by the turgidity of guard cells. Human digestion is a multi-stage biochemical breakdown of complex macromolecules into absorbable micromolecules via specific digestive enzymes.",
    corePrinciples: [
      "Three steps of Photosynthesis: (1) Absorption of light energy by chlorophyll, (2) Conversion of light energy to chemical energy and splitting of water into hydrogen and oxygen, (3) Reduction of carbon dioxide to carbohydrates.",
      "Stomatal Mechanism: When water flows into the guard cells, they swell (become turgid), causing the curved outer walls to pull the thick inner walls apart, opening the pore. When guard cells lose water, they shrink (become flaccid) and the pore closes.",
      "Human Digestive Enzymes:\n- Mouth: Salivary amylase breaks starch into maltose sugar at pH ~6.8.\n- Stomach: Gastric juice contains HCl (creates acidic pH ~1.5 to activate pepsin & kills microbes), Pepsin (digests proteins into peptones), and Mucus (shields inner lining from HCl erosion).\n- Small Intestine (Site of complete digestion):\n  * Bile juice (from Liver): Alkaline medium + emulsification of large fat globules into tiny droplets.\n  * Pancreatic juice: Trypsin (digests proteins into peptides) + Pancreatic Lipase (digests emulsified fats into fatty acids & glycerol) + Pancreatic Amylase.\n  * Intestinal juice: Completes digestion into glucose, amino acids, fatty acids & glycerol."
    ],
    keyReactionsOrFormulas: [
      { name: "Photosynthesis Master Equation", formula: "6CO₂ + 12H₂O —[Sunlight / Chlorophyll]⟶ C₆H₁₂O₆ + 6O₂ + 6H₂O", note: "Oxygen evolved comes exclusively from the photolysis of water, NOT from carbon dioxide." },
      { name: "Starch Digestion in Mouth", formula: "Starch —[Salivary Amylase / pH 6.8]⟶ Maltose (Disaccharide)", note: "Digestion initiates in buccal cavity." }
    ],
    commonMistakesWarning: "Students state that bile juice contains digestive enzymes. Bile contains NO enzymes! It contains bile salts that perform mechanical emulsification of fats and create an alkaline medium.",
    examples: [
      {
        id: "ex_c5_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What is the role of mucus secreted by the gastric glands in the human stomach?",
        solutionSteps: [
          "Mucus forms a protective physical barrier lining the inner wall of the stomach.",
          "It shields the delicate gastric mucosal lining from the corrosive action of concentrated hydrochloric acid (HCl) and prevents the stomach wall from being digested by pepsin."
        ],
        keyTakeaway: "Mucus prevents gastric self-digestion and peptic ulcers caused by concentrated HCl.",
        examinerTrap: "Do not say 'it helps in digestion'. Mucus has zero digestive enzyme activity; its role is purely protective."
      },
      {
        id: "ex_c5_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Explain the mechanism of opening and closing of stomata with a neat labeled conceptual description.",
        solutionSteps: [
          "The opening and closing of stomatal pores is exclusively governed by the turgidity and flaccidity of the two kidney-shaped guard cells flanking each pore.",
          "Opening: During daytime, guard cells absorb water by endosmosis from adjacent epidermal cells. As water enters, guard cells swell and become turgid. The thin, elastic outer walls expand outward, pulling the thick, inelastic inner walls apart, widening the stomatal pore.",
          "Closing: In the dark or during water stress, water leaves the guard cells by exosmosis. The guard cells lose turgor pressure, become flaccid, and their elastic inner walls return to their original relaxed position, closing the pore."
        ],
        keyTakeaway: "Turgid guard cells pull the pore open; flaccid guard cells relax and seal the pore.",
        examinerTrap: "Forgetting to mention the differential thickness of guard cell walls (thick inner, thin outer) costs 0.5 mark."
      },
      {
        id: "ex_c5_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        question: "Trace the complete biochemical digestion of a meal containing Carbohydrates, Proteins, and Fats as it passes through the human alimentary canal. Mention the organ, enzyme, and end product for each.",
        solutionSteps: [
          "1. Carbohydrate Digestion:\n- Mouth: Salivary amylase breaks starch into disaccharide maltose.\n- Small Intestine: Pancreatic amylase and intestinal enzymes convert maltose and complex starches into Glucose (final absorbable unit).",
          "2. Protein Digestion:\n- Stomach: Gastric pepsin (in acidic HCl medium) cleaves complex proteins into smaller peptones and proteoses.\n- Small Intestine: Pancreatic Trypsin (in alkaline medium) breaks peptones into peptides; intestinal peptidases hydrolyze peptides into Amino Acids (final absorbable unit).",
          "3. Fat Digestion:\n- Small Intestine: Bile salts from liver emulsify large fat globules into tiny droplets (increasing surface area).\n- Small Intestine: Pancreatic Lipase digests emulsified fat droplets into Fatty Acids and Glycerol (final absorbable unit).",
          "Absorption: The inner wall of small intestine possesses millions of microscopic finger-like projections called Villi, richly supplied with blood vessels and lacteals (lymphatic capillaries) to maximize absorption efficiency."
        ],
        keyTakeaway: "Carbs ⟶ Glucose; Proteins ⟶ Amino Acids; Fats ⟶ Fatty Acids & Glycerol via salivary, gastric, and pancreatic enzymes.",
        examinerTrap: "Stating that fats are digested in the stomach. Fat digestion occurs exclusively in the small intestine."
      }
    ]
  },
  {
    id: "sci_c5_t2",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    topicTitle: "Respiration (3 Glucose Pathways), Heart Double Circulation & Nephron Excretion",
    ncertSection: "NCERT Chapter 5, Sections 5.3, 5.4 & 5.5 (Pages 91–105)",
    ncertSummary: "Respiration releases chemical energy from cellular glucose breakdown. In human double circulation, blood passes through the four-chambered heart twice during one complete cycle (preventing oxygenated and deoxygenated blood mixing). Excretion involves the filtration of toxic nitrogenous waste (urea/uric acid) from blood by millions of nephrons in the kidneys.",
    corePrinciples: [
      "The 3 Pathways of Glucose Breakdown:\n- Step 1 (Universal Glycolysis in Cytoplasm): 1 Molecule of 6-Carbon Glucose ⟶ 2 Molecules of 3-Carbon Pyruvate + 2 ATP.\n- Pathway A (Absence of O₂ in Yeast / Fermentation): Pyruvate ⟶ Ethanol (2C) + CO₂ + 2 ATP.\n- Pathway B (Lack of O₂ in human Muscle Cells during strenuous exercise): Pyruvate ⟶ Lactic Acid (3C) + 2 ATP. Accumulation of lactic acid causes muscle cramps.\n- Pathway C (Presence of O₂ in Mitochondria / Aerobic Respiration): Pyruvate + O₂ ⟶ 6CO₂ + 6H₂O + 38 ATP.",
      "Human Heart & Double Circulation:\n- Right Atrium receives deoxygenated blood from vena cava ⟶ Right Ventricle ⟶ Pulmonary Artery ⟶ Lungs (oxygenation).\n- Lungs ⟶ Pulmonary Veins ⟶ Left Atrium ⟶ Left Ventricle ⟶ Aorta (oxygenated blood to body).\n- Double circulation ensures high efficiency of oxygen delivery, vital for maintaining warm-blooded constant body temperature.",
      "Nephron Structure & Urine Formation:\n- Step 1 (Ultrafiltration in Glomerulus & Bowman's Capsule): High blood pressure filters water, glucose, amino acids, salts, and urea into the renal tubule.\n- Step 2 (Selective Reabsorption in Tubule): Useful substances (glucose, amino acids, major water via ADH) are reabsorbed back into peritubular capillaries.\n- Step 3 (Tubular Secretion & Collection): Remaining fluid containing concentrated urea and excess salts flows into the collecting duct as urine."
    ],
    keyReactionsOrFormulas: [
      { name: "Aerobic Respiration in Mitochondria", formula: "C₆H₁₂O₆ + 6O₂ ⟶ 6CO₂ + 6H₂O + 38 ATP (High Energy Yield)", note: "Occurs inside mitochondria of eukaryotic cells." },
      { name: "Anaerobic Respiration in Yeast", formula: "C₆H₁₂O₆ ⟶ 2C₂H₅OH (Ethanol) + 2CO₂ + 2 ATP", note: "Used in brewing and baking industries." },
      { name: "Lactic Acid Formation in Muscle", formula: "C₆H₁₂O₆ ⟶ 2 Lactic Acid [CH₃CH(OH)COOH] + 2 ATP", note: "Anaerobic burst during sprint causes muscle fatigue and cramps." }
    ],
    commonMistakesWarning: "Students label Pulmonary Artery as carrying oxygenated blood because it is an artery. All arteries carry oxygenated blood EXCEPT the Pulmonary Artery (carries deoxygenated blood to lungs). All veins carry deoxygenated blood EXCEPT the Pulmonary Vein (carries oxygenated blood to heart).",
    examples: [
      {
        id: "ex_c5_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why do athletes often suffer from severe muscle cramps during a fast sprint?",
        solutionSteps: [
          "During strenuous running, the demand for energy in muscle cells is extremely high, exceeding the rate of oxygen supply.",
          "To meet energy demands, muscle cells switch to anaerobic respiration, breaking down pyruvate into Lactic Acid in the absence of sufficient oxygen. Accumulation of lactic acid in muscle tissue causes painful cramps."
        ],
        keyTakeaway: "Muscle cramps are caused by the accumulation of 3-carbon lactic acid during anaerobic glycolysis.",
        examinerTrap: "Do not write 'due to lack of energy'. It is specifically caused by the physical accumulation of lactic acid."
      },
      {
        id: "ex_c5_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Why is double circulation necessary in mammals and birds, but absent in fishes?",
        solutionSteps: [
          "Mammals and birds are warm-blooded (endothermic) organisms that continuously expend significant energy to maintain a constant internal body temperature regardless of ambient weather.",
          "Double circulation completely segregates oxygenated blood (left side) from deoxygenated blood (right side), ensuring zero mixing and delivering highly oxygenated blood under high pressure to tissues for maximal cellular respiration.",
          "In contrast, fish have a 2-chambered heart and single circulation: blood goes from heart to gills for oxygenation and passes directly to the body without returning to the heart."
        ],
        keyTakeaway: "Double circulation prevents blood mixing, providing high oxygen throughput to sustain warm-blooded thermoregulation.",
        examinerTrap: "Must state 'prevents mixing of oxygenated and deoxygenated blood' and link it to 'high energy demand for constant body temperature'."
      },
      {
        id: "ex_c5_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        question: "Describe the structure of a nephron and explain the three fundamental steps involved in urine formation in human kidneys.",
        solutionSteps: [
          "Structure of Nephron: The structural and functional filtration unit of kidney consisting of:\n(1) Bowman's capsule containing a knot of high-pressure blood capillaries called Glomerulus.\n(2) Convoluted renal tubule surrounded by peritubular capillaries.\n(3) Collecting duct leading to ureter.",
          "Three Steps of Urine Formation:\n1. Glomerular Ultrafiltration: Blood enters under high pressure via afferent arteriole into the glomerulus. Water, urea, uric acid, glucose, amino acids, and inorganic salts filter across thin capillary walls into Bowman's capsule as initial glomerular filtrate (approx. 180 L/day in an adult).\n2. Selective Tubular Reabsorption: As filtrate moves along the tubule, essential substances like all glucose, all amino acids, major salts, and 99% of water are actively and passively reabsorbed back into surrounding blood capillaries.\n3. Tubular Secretion: Excess ions (K⁺, H⁺, creatinine) are actively secreted from blood into the tubule to regulate blood pH and osmolarity. The remaining 1.5–2 L of concentrated fluid is urine, which drains into collecting ducts."
        ],
        keyTakeaway: "Nephron urine formation = Glomerular ultrafiltration + Selective tubular reabsorption + Tubular secretion.",
        examinerTrap: "Confusing glomerular filtrate volume (180 L/day) with final urine excreted (1.5–2 L/day). 99% is reabsorbed."
      }
    ]
  },
  {
    id: "sci_c5_t3",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    topicTitle: "Transportation in Plants (Xylem vs Phloem) & Plant Excretion",
    ncertSection: "NCERT Chapter 5, Sections 5.4.2 & 5.5.2 (Pages 101–107)",
    ncertSummary: "Plants transport water and dissolved minerals upwards via Xylem (vessels and tracheids) driven by transpiration pull during the day and root pressure at night. Food (sucrose) is transported bidirectionally via Phloem (sieve tubes and companion cells) using metabolic energy (ATP) through a process called Translocation. Plants excrete wastes via stomatal diffusion, transpiration, shedding leaves, storing resins/gums in old xylem, and secreting into soil.",
    corePrinciples: [
      "Xylem Transport: Passive physical transport of water and inorganic minerals from roots to leaves in a unidirectional upward column. Major driving force during daytime is Transpiration Pull (suction force created by water evaporation from stomata).",
      "Phloem Translocation: Active biological transport of soluble photosynthetic products (sucrose, amino acids) bidirectionally from source (leaves) to sink (roots, fruits, buds). Requires ATP to build osmotic pressure that moves sap.",
      "Plant Excretion Mechanisms: O₂ is released during photosynthesis; CO₂ during respiration; excess water lost via transpiration; cellular wastes stored in dead leaves that fall off; resins and gums stored in old, non-functional xylem."
    ],
    keyReactionsOrFormulas: [
      { name: "Transpiration Pull Mechanism", formula: "\\text{Transpiration Loss at Stomata} \\implies \\text{Negative Pressure Pull in Xylem Vessel}", note: "Enables water to reach heights over 100 meters." },
      { name: "Phloem Osmotic Loading", formula: "\\text{Sucrose} + \\text{ATP} \\implies \\text{High Osmotic Pressure} \\implies \\text{Bulk Flow to Sink}", note: "Active transport mechanism." }
    ],
    commonMistakesWarning: "Students believe xylem and phloem transport are both passive. Xylem is largely passive physical pull, but Phloem translocation is an ACTIVE process requiring cellular ATP!",
    examples: [
      {
        id: "ex_c5_7",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What is the primary driving force for the upward movement of water in tall trees during the daytime?",
        solutionSteps: [
          "During daytime when stomata are open, the evaporation of water molecules from leaf cells creates a continuous suction force called the 'Transpiration Pull'.",
          "This transpiration pull draws water up through the xylem vessels and tracheids from the roots to the highest tips of tall trees."
        ],
        keyTakeaway: "Daytime upward water transport is powered by Transpiration Pull; nighttime transport relies on Root Pressure.",
        examinerTrap: "Writing 'capillary action' or 'root pressure' for tall trees during daytime. Transpiration pull is the primary force."
      },
      {
        id: "ex_c5_8",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Differentiate between transport of materials in Xylem and Phloem on the basis of: (a) Direction of transport, (b) Energy requirement (ATP), (c) Conducting cells.",
        solutionSteps: [
          "(a) Direction of Transport: Xylem transport is strictly UNIDIRECTIONAL (only upwards from roots to leaves). Phloem transport is BIDIRECTIONAL (both upwards and downwards from leaves/storage organs to growing tissues).",
          "(b) Energy Requirement: Xylem transport relies on physical forces (transpiration pull, adhesion-cohesion) and does NOT require metabolic energy (ATP). Phloem translocation requires metabolic energy in the form of ATP to create osmotic pressure gradients.",
          "(c) Conducting Cells: Xylem conducts through non-living, lignified cells (Vessels and Tracheids). Phloem conducts through living cells (Sieve tubes aided by Companion cells)."
        ],
        keyTakeaway: "Xylem = unidirectional, passive, dead vessels; Phloem = bidirectional, active (ATP), living sieve tubes.",
        examinerTrap: "Stating that phloem cells are dead. Sieve tubes and companion cells are living cells."
      },
      {
        id: "ex_c5_9",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Explain four different strategies used by green plants to eliminate their excretory waste products.",
        solutionSteps: [
          "(1) Gaseous Waste Elimination: Oxygen (O₂) produced as a byproduct of photosynthesis and Carbon dioxide (CO₂) produced during respiration are eliminated directly by diffusion through the stomata in leaves and lenticels in bark.",
          "(2) Transpiration: Excess water is excreted into the atmosphere in the form of water vapor through stomata via the process of transpiration.",
          "(3) Abscission of Leaves: Many cellular waste products are sequestered and stored in the vacuoles of older leaves. When these leaves age and shed (abscission), the accumulated waste products are permanently shed from the plant body.",
          "(4) Storage in Dead Tissues: Waste substances like resins, gums, and tannins are sequestered and permanently stored in non-functional, older xylem tissue (heartwood) or excreted directly into surrounding soil via root hairs."
        ],
        keyTakeaway: "Plants excrete via stomatal diffusion, transpiration, leaf shedding, and storing resins/gums in old xylem.",
        examinerTrap: "Saying plants do not have excretory products. Plants produce metabolic wastes, but handle them without specialized kidneys."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 6: CONTROL AND COORDINATION (BIOLOGY)
  // =======================================================================
  {
    id: "sci_c6_t1",
    chapterNo: 6,
    chapterName: "Control and Coordination",
    discipline: "Biology",
    topicTitle: "Neuron Anatomy, Synaptic Neurotransmission, Reflex Arc & Human Brain",
    ncertSection: "NCERT Chapter 6, Sections 6.1 & 6.1.2 (Pages 110–118)",
    ncertSummary: "Control and coordination in animals are executed by the nervous and endocrine systems. The functional unit of the nervous system is the Neuron. Information travels as an electrical impulse along the axon and as a chemical neurotransmitter across the Synapse. A Reflex Arc provides an involuntary, rapid response to stimuli via the spinal cord before conscious perception by the brain. The Human Brain has three main regions: Forebrain, Midbrain, and Hindbrain.",
    corePrinciples: [
      "Pathway of Nerve Impulse: Receptor (sensory organ) ⟶ Dendrite tip (detects signal & initiates electrical impulse) ⟶ Cell body (cyton) ⟶ Axon ⟶ Axon terminal ⟶ Synaptic gap (electrical impulse triggers release of neurotransmitters like acetylcholine) ⟶ Dendrite of next neuron.",
      "Reflex Arc Sequence: Receptor (e.g. pain/heat in skin) ⟶ Sensory neuron (afferent) ⟶ Spinal Cord (relay/association neuron) ⟶ Motor neuron (efferent) ⟶ Effector organ (muscle contracts). Provides instantaneous survival reaction.",
      "Human Brain Regions & Roles:\n- Forebrain (Cerebrum): Site of thinking, intelligence, sensory interpretation, voluntary movements, memory, and hunger sensations.\n- Midbrain: Controls involuntary visual, auditory, and eye pupil reflexes.\n- Hindbrain:\n  * Cerebellum: Coordinates precision of voluntary actions and maintains posture and body equilibrium (e.g. walking straight, riding bicycle).\n  * Medulla oblongata: Regulates involuntary visceral functions (blood pressure, salivation, vomiting, heartbeat).\n  * Pons: Regulates respiration rhythm."
    ],
    keyReactionsOrFormulas: [
      { name: "Synaptic Transmission", formula: "\\text{Electrical Impulse in Axon} \\xrightarrow{\\text{Synapse}} \\text{Chemical Neurotransmitter} \\xrightarrow{\\text{Dendrite}} \\text{New Electrical Impulse}", note: "Ensures one-way transmission of nerve signals." },
      { name: "Reflex Arc Pathway", formula: "\\text{Stimulus} ⟶ \\text{Receptor} ⟶ \\text{Sensory Neuron} ⟶ \\text{Spinal Cord} ⟶ \\text{Motor Neuron} ⟶ \\text{Effector Muscle}", note: "Spinal cord processes signal for instantaneous protective reflex." }
    ],
    commonMistakesWarning: "Students confuse the Cerebrum (thinking, intelligence, voluntary control) with the Cerebellum (motor balance, posture, equilibrium). Cerebellum is for Balance and Equilibrium!",
    examples: [
      {
        id: "ex_c6_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What is a synapse? How does a nerve impulse cross this junction?",
        solutionSteps: [
          "A synapse is a microscopic physical gap between the axon terminal of one neuron and the dendrite of the adjacent neuron.",
          "When an electrical impulse reaches the axon terminal, it triggers the release of chemical messengers called neurotransmitters. These chemicals diffuse across the fluid-filled synaptic cleft and bind to receptors on the next dendrite, setting off a new electrical impulse."
        ],
        keyTakeaway: "Synapse is a microscopic gap crossed by chemical neurotransmitters, ensuring unidirectional signal flow.",
        examinerTrap: "Claiming that electric sparks jump across the synapse. It is strictly a chemical neurotransmitter diffusion."
      },
      {
        id: "ex_c6_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Draw the pathway of a reflex arc when your hand accidentally touches a hot frying pan. Why are reflex actions mediated through the spinal cord rather than the brain?",
        solutionSteps: [
          "Reflex Arc Pathway: Heat stimulus on skin ⟶ Heat receptors (thermoreceptors) ⟶ Sensory neuron ⟶ Spinal cord (Relay neuron) ⟶ Motor neuron ⟶ Effector (Biceps muscle) ⟶ Arm contracts and pulls hand away.",
          "Why spinal cord mediates: Thinking by the brain is a complex process involving multiple neuronal synapses, which takes valuable time. A reflex action is an emergency survival mechanism designed for immediate response to prevent severe tissue injury. By routing through the spinal cord, the response occurs in milliseconds, while the brain is simultaneously notified afterward."
        ],
        keyTakeaway: "Reflex arc shortcuts through spinal cord for instantaneous protective response to prevent burning or injury.",
        examinerTrap: "Omitting the Relay neuron in the spinal cord when listing the pathway components."
      },
      {
        id: "ex_c6_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Identify which part of the human brain is responsible for each of the following actions:\n(a) Maintaining posture and balance of the body while riding a bicycle.\n(b) Vomiting and salivation upon seeing delicious food.\n(c) Feeling full after eating a complete meal.\n(d) Precision of voluntary motor movements like threading a needle.",
        solutionSteps: [
          "(a) Maintaining posture, balance, and equilibrium: Cerebellum (part of Hindbrain).",
          "(b) Involuntary visceral reflexes such as vomiting, salivation, and blood pressure: Medulla oblongata (part of Hindbrain).",
          "(c) Sensation of hunger and satiety (feeling full): Cerebrum / Hypothalamus (part of Forebrain).",
          "(d) Precision of delicate voluntary movements: Cerebellum (part of Hindbrain)."
        ],
        keyTakeaway: "Balance/precision = Cerebellum; Involuntary reflexes (vomiting/salivation) = Medulla; Hunger/thinking = Forebrain.",
        examinerTrap: "Assigning salivation or vomiting to cerebrum. They are involuntary hindbrain reflexes governed by the Medulla."
      }
    ]
  },
  {
    id: "sci_c6_t2",
    chapterNo: 6,
    chapterName: "Control and Coordination",
    discipline: "Biology",
    topicTitle: "Plant Hormones (Phytohormones), Tropisms & Endocrine Glands",
    ncertSection: "NCERT Chapter 6, Sections 6.2 & 6.3 (Pages 118–127)",
    ncertSummary: "Plants lack a nervous system; coordination is achieved chemically via Phytohormones. Plant movements are either directional (Tropic movements: Phototropism, Geotropism, Hydrotropism, Chemotropism) or non-directional (Nastic movements: Thigmonasty in touch-me-not). In humans, the Endocrine System coordinates body physiology using hormones secreted directly into the bloodstream.",
    corePrinciples: [
      "Major Plant Hormones:\n- Auxins: Synthesized at shoot tips; promotes cell elongation. Auxin diffuses to the shaded side of shoot, stimulating cells to grow longer on the dark side, causing the shoot to bend towards light (Positive Phototropism).\n- Gibberellins: Promote stem elongation, seed germination, and flowering.\n- Cytokinins: Promote rapid cell division; present in high concentration in fruits and seeds; delays senescence.\n- Abscisic Acid (ABA): Plant growth inhibitor; promotes wilting/falling of leaves and closure of stomata during water stress.\n- Ethylene: Gaseous hormone that triggers fruit ripening.",
      "Tropic Movements:\n- Phototropism: Shoot bends towards light (+ve); root bends away from light (-ve).\n- Geotropism: Root grows towards gravity (+ve); shoot grows away from gravity (-ve).\n- Chemotropism: Growth of pollen tube towards ovule induced by chemical secretions in style.",
      "Human Endocrine Glands & Hormones:\n- Pituitary Gland ('Master Gland'): Growth Hormone (deficiency = Dwarfism, excess = Gigantism).\n- Thyroid Gland: Thyroxin (regulates carbohydrate, protein, and fat metabolism for optimal growth; Iodine is essential to synthesize thyroxin; deficiency causes Goitre).\n- Pancreas: Insulin (regulates blood glucose levels; deficiency causes Diabetes mellitus).\n- Adrenal Glands: Adrenaline ('Fight or Flight' hormone; increases heart rate, breathing rate, blood pressure, redirects blood to skeletal muscles)."
    ],
    keyReactionsOrFormulas: [
      { name: "Phototropism Auxin Redistribution", formula: "\\text{Light on one side} ⟹ \\text{Auxin migrates to shaded side} ⟹ \\text{Shaded cells elongate faster} ⟹ \\text{Stem bends towards light}", note: "Classic board demonstration question." },
      { name: "Thyroxin Synthesis", formula: "\\text{Tyrosine} + \\text{Iodine} ⟶ \\text{Thyroxin} \quad [\\text{Deficiency} ⟹ \\text{Swollen neck goitre}]", note: "Iodized table salt prevents goitre." }
    ],
    commonMistakesWarning: "Students state that roots are positively phototropic. Roots are NEGATIVELY phototropic (grow away from light) and POSITIVELY geotropic (grow towards gravity).",
    examples: [
      {
        id: "ex_c6_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is the use of iodised salt advisable in daily diet?",
        solutionSteps: [
          "Iodine is an essential mineral required by the thyroid gland to synthesize the hormone Thyroxin.",
          "Thyroxin regulates carbohydrate, protein, and fat metabolism in the body to maintain balanced growth. If dietary iodine is deficient, thyroxin synthesis drops and the thyroid gland enlarges, leading to Goitre (swollen neck)."
        ],
        keyTakeaway: "Iodine is required for Thyroxin synthesis; deficiency causes thyroid enlargement (Goitre).",
        examinerTrap: "Do not just say 'to stay healthy'. Mention 'Thyroxin hormone synthesis' and 'prevention of Goitre'."
      },
      {
        id: "ex_c6_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "How do auxins promote the bending of a plant stem towards a unidirectional light source? Explain the biochemical mechanism.",
        solutionSteps: [
          "Auxin is synthesized at the growing tip (apical meristem) of the shoot.",
          "When light strikes the shoot unidirectionally from one side, auxin diffuses away from the illuminated side and concentrates on the shaded side of the shoot tip.",
          "The higher concentration of auxin on the shaded side stimulates cells there to elongate much more rapidly than the cells on the lighted side.",
          "Because the shaded side expands faster than the illuminated side, the shoot bends toward the light source (Positive Phototropism)."
        ],
        keyTakeaway: "Auxin migrates to the shaded side, accelerating cell elongation on the shadow side and bending the stem towards light.",
        examinerTrap: "Writing that auxin accumulates on the illuminated side. Auxin is light-sensitive and migrates to the SHADED side."
      },
      {
        id: "ex_c6_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Name the hormone and the endocrine gland responsible for:\n(a) Emergency 'fight or flight' physical responses when encountering danger.\n(b) Development of secondary sexual characteristics in human males at puberty.\n(c) Regulation of blood sugar level to prevent diabetes.\n(d) Growth of bones and body tissues during childhood.",
        solutionSteps: [
          "(a) Emergency response: Adrenaline, secreted by the Adrenal glands (located atop each kidney). Increases heartbeat, pumps more blood to muscles, and dilates bronchioles.",
          "(b) Male secondary sexual characteristics: Testosterone, secreted by the Testes. Deepens voice, stimulates facial hair and sperm production.",
          "(c) Blood sugar regulation: Insulin, secreted by the β-cells of Islets of Langerhans in the Pancreas. Facilitates cellular uptake of glucose from blood.",
          "(d) Bone and tissue growth: Growth Hormone (GH), secreted by the Pituitary gland (master endocrine gland at the base of brain)."
        ],
        keyTakeaway: "Adrenaline = Adrenals (emergency); Testosterone = Testes; Insulin = Pancreas (glucose); Growth Hormone = Pituitary.",
        examinerTrap: "Writing that insulin digests sugar. Insulin does not digest sugar; it signals body cells to absorb glucose from blood."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 7: HOW DO ORGANISMS REPRODUCE? (BIOLOGY)
  // =======================================================================
  {
    id: "sci_c7_t1",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    discipline: "Biology",
    topicTitle: "Asexual Reproduction: Fission, Budding, Spores & Vegetative Propagation",
    ncertSection: "NCERT Chapter 7, Sections 7.1 & 7.2 (Pages 128–137)",
    ncertSummary: "Reproduction ensures continuity of species. Asexual reproduction involves a single parent without gamete fusion, producing genetically identical offspring (clones). Mechanisms include Binary and Multiple Fission, Fragmentation, Regeneration, Budding, Spore Formation, and Vegetative Propagation.",
    corePrinciples: [
      "Binary Fission: Single parent cell divides into two identical daughter cells (e.g. Amoeba divides in any plane; Leishmania divides in a definite longitudinal orientation in relation to whip-like flagellum).",
      "Multiple Fission: Parent divides into many daughter cells simultaneously inside a protective cyst during unfavorable conditions (e.g. Plasmodium, malarial parasite).",
      "Budding: A small outgrowth (bud) develops due to repeated mitotic cell division at one specific site, matures, and detaches (e.g. Yeast, Hydra).",
      "Spore Formation: Spores housed inside sporangia on upright hyphae develop thick resistant walls that survive harsh conditions until landing on moist food substrates (e.g. Rhizopus / bread mould).",
      "Regeneration: Ability of specialized cells in cut body fragments to proliferate and regenerate a complete organism (e.g. Planaria, Hydra). Not identical to reproduction as it depends on accidental injury.",
      "Vegetative Propagation: New plants develop from vegetative parts (root, stem, leaf). Examples: Bryophyllum leaf notches produce adventitious buds; Potato tubers have 'eyes' (buds); Money plant stem cuttings. Benefits: Exact genetic clones, seedless varieties (banana, orange), faster maturation."
    ],
    keyReactionsOrFormulas: [
      { name: "Binary Fission in Amoeba", formula: "\\text{Parent Cell} ⟶ \\text{Karyokinesis (Nuclear Division)} ⟶ \\text{Cytokinesis} ⟶ \\text{2 Daughter Amoebae}", note: "Occurs in any plane." },
      { name: "Bread Mould Spores", formula: "\\text{Sporangium} —[\\text{Ruptures}]⟶ \\text{Thousands of airborne spores} ⟶ \\text{New mycelium on bread}", note: "Thick cell wall protects against desiccation." }
    ],
    commonMistakesWarning: "Students confuse Regeneration with true reproduction. Regeneration is an accidental wound repair mechanism; organisms do not rely on being cut into pieces to reproduce!",
    examples: [
      {
        id: "ex_c7_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "How does binary fission in Amoeba differ from binary fission in Leishmania?",
        solutionSteps: [
          "In Amoeba, the single cell can divide across any arbitrary plane because it lacks a fixed anatomical polarity.",
          "In Leishmania (the parasite causing Kala-Azar), binary fission occurs strictly in a definite longitudinal orientation relative to its whip-like flagellum at one end."
        ],
        keyTakeaway: "Amoeba divides in any plane; Leishmania divides longitudinally relative to its flagellum.",
        examinerTrap: "Must mention the 'whip-like structure / flagellum' and 'definite longitudinal plane' for Leishmania."
      },
      {
        id: "ex_c7_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Explain Vegetative Propagation. State two commercial advantages of growing plants by this method over seeds.",
        solutionSteps: [
          "Definition: Vegetative propagation is an asexual reproduction method in which new plant individuals develop from vegetative parts of the parent plant such as roots, stems, or leaves, without the involvement of flowers or seeds.",
          "Commercial Advantage 1: Genetic Uniformity. All offspring plants produced are exact genetic clones of the parent, preserving desirable commercial qualities such as high yield, sweetness, and disease resistance.",
          "Commercial Advantage 2: Cultivation of Seedless Varieties. It enables the propagation of commercially vital crops that have lost the capacity to produce viable seeds, such as seedless bananas, seedless grapes, oranges, rose, and jasmine.",
          "Commercial Advantage 3: Faster Maturity. Plants raised by vegetative propagation bear flowers and fruits much earlier than those grown from seeds."
        ],
        keyTakeaway: "Vegetative propagation enables seedless plant propagation, faster fruiting, and 100% genetic preservation.",
        examinerTrap: "Writing that it increases genetic variation. Asexual vegetative propagation produces NO genetic variation."
      },
      {
        id: "ex_c7_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A piece of moist bread left in a warm, dark container for 3–4 days develops a fuzzy white-and-black cottony growth:\n(a) Name the organism and the type of asexual reproduction.\n(b) Identify the fine thread-like structures and the black blob-on-a-stick structures.\n(c) What are spores and how do they withstand adverse environmental conditions?",
        solutionSteps: [
          "(a) Organism: Rhizopus (Bread Mould, a fungus). Reproduction: Spore Formation.",
          "(b) Fine thread-like structures: Hyphae (which form the vegetative mycelium). Blob-on-a-stick structures: Sporangia (singular: Sporangium), which contain hundreds of microscopic reproductive spores.",
          "(c) Spores are tiny, microscopic asexual reproductive bodies. Each spore is covered with a thick, resistant protective outer wall that protects it from adverse environmental conditions like extreme heat, lack of moisture, and desiccation. When the sporangium bursts and spores land on a moist, nutrient-rich substrate like bread, the thick wall breaks and spores germinate into new hyphae."
        ],
        keyTakeaway: "Rhizopus reproduces via thick-walled airborne spores housed in spherical sporangia atop hyphae.",
        examinerTrap: "Calling hyphae 'roots'. Hyphae are fungal filaments that absorb nutrients, not true plant roots."
      }
    ]
  },
  {
    id: "sci_c7_t2",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    discipline: "Biology",
    topicTitle: "Sexual Reproduction in Flowering Plants (Pollination & Fertilization)",
    ncertSection: "NCERT Chapter 7, Section 7.3 (Pages 133–137)",
    ncertSummary: "Flowers are the reproductive organs of angiosperms. The male reproductive whorl is the Stamen (anther and filament), producing pollen grains containing male gametes. The female reproductive whorl is the Carpel / Pistil (stigma, style, ovary), containing ovules. Pollination transfers pollen to stigma. Fertilization unites male and female gametes to form a zygote, which develops into an embryo inside the seed.",
    corePrinciples: [
      "Flower Structure: Sepals (calyx, protection), Petals (corolla, attract pollinators), Stamens (androecium, male), Carpel/Pistil (gynoecium, female).",
      "Pollination Types:\n- Self-pollination: Transfer of pollen from anther to stigma of the same flower or another flower on the same plant.\n- Cross-pollination: Transfer of pollen from anther of one flower to stigma of another flower on a different plant of the same species (carried by wind, water, insects).",
      "Pollen Tube Growth: Pollen lands on sticky stigma ⟶ germinates ⟶ pollen tube grows down through the style carrying two male gamete nuclei into the ovary ⟶ enters ovule through micropyle.",
      "Post-Fertilization Transformations:\n- Zygote (2n) ⟶ Embryo.\n- Ovule ⟶ Hard resistant Seed coat containing stored food (cotyledons) and embryo.\n- Ovary ⟶ Ripens into the fleshy or dry Fruit.\n- Petals, sepals, stamens, style, and stigma wither and fall off."
    ],
    keyReactionsOrFormulas: [
      { name: "Post-Fertilization Fates", formula: "\\text{Zygote} ⟶ \\text{Embryo}; \quad \\text{Ovule} ⟶ \\text{Seed}; \quad \\text{Ovary} ⟶ \\text{Fruit}", note: "Guaranteed 1-mark board objective." }
    ],
    commonMistakesWarning: "Students confuse ovule with ovary. The OVULE becomes the SEED; the OVARY becomes the FRUIT!",
    examples: [
      {
        id: "ex_c7_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What are the post-fertilization fates of the Ovary and the Ovule in a flower?",
        solutionSteps: [
          "After fertilization, the Ovule develops a tough protective coat and converts into a Seed.",
          "The surrounding Ovary grows rapidly, ripens, and transforms into the Fruit."
        ],
        keyTakeaway: "Ovule ⟶ Seed; Ovary ⟶ Fruit.",
        examinerTrap: "Swapping them: writing ovary becomes seed and ovule becomes fruit is an immediate 0 marks."
      },
      {
        id: "ex_c7_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Differentiate between self-pollination and cross-pollination. Why is cross-pollination biologically preferred in nature?",
        solutionSteps: [
          "Difference 1: Self-pollination is the transfer of pollen grains from the anther to the stigma of the same flower or another flower on the same individual plant. Cross-pollination is the transfer of pollen from the anther of one flower to the stigma of a flower on a different plant of the same species.",
          "Difference 2: Self-pollination does not require external pollinating agents (insects, wind). Cross-pollination depends on external biotic or abiotic agents.",
          "Biological preference: Cross-pollination brings together genetic traits from two distinct parent plants, generating genetic variations in the offspring. These variations enhance adaptability to changing climatic conditions, promote disease resistance, and drive evolutionary survival."
        ],
        keyTakeaway: "Cross-pollination introduces genetic diversity from two separate parents, increasing evolutionary vigor.",
        examinerTrap: "Stating cross-pollination can occur between different species (e.g. rose to mango). It must be of the SAME species."
      },
      {
        id: "ex_c7_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Describe the events that occur from the moment a pollen grain lands on a compatible stigma until the formation of a zygote in flowering plants.",
        solutionSteps: [
          "Step 1 (Pollen Recognition & Germination): The compatible pollen grain absorbs sugary secretions from the sticky surface of the stigma and germinates, projecting a slender pollen tube.",
          "Step 2 (Pollen Tube Elongation): The pollen tube secretes enzymes that digest a path down through the tissues of the style, carrying two male gamete nuclei towards the ovary.",
          "Step 3 (Entry into Ovule): The pollen tube reaches the ovary, enters the ovule through a microscopic opening called the micropyle, and discharges the two male gametes into the embryo sac.",
          "Step 4 (Syngamy): One of the male gametes fuses with the female egg cell nucleus to form a diploid Zygote (2n). (The second male gamete fuses with the two polar nuclei to form the triploid endosperm).",
          "Step 5: The zygote undergoes multiple mitotic divisions to develop into the embryo inside the seed."
        ],
        keyTakeaway: "Pollen tube traverses style to deliver male gametes to ovule for syngamy to form the diploid zygote.",
        examinerTrap: "Forgetting to mention the pollen tube growth through the style or the micropyle entry point."
      }
    ]
  },
  {
    id: "sci_c7_t3",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    discipline: "Biology",
    topicTitle: "Human Reproductive Systems, Menstrual Cycle & Contraceptive Methods",
    ncertSection: "NCERT Chapter 7, Sections 7.4 & 7.5 (Pages 137–144)",
    ncertSummary: "Human reproduction is sexual and viviparous with distinct sexual dimorphism. Males produce sperm in testes housed outside the abdominal cavity in the scrotum. Females produce ova in ovaries; fertilization occurs in the fallopian tube (oviduct), and the embryo implants in the uterine wall. Contraceptive methods prevent unwanted pregnancies and sexually transmitted infections (STIs).",
    corePrinciples: [
      "Male Reproductive System: Testes located outside abdominal cavity in Scrotum because sperm production requires a temperature 2–2.5°C lower than normal body temperature (37°C). Vas deferens transports sperm; prostate gland and seminal vesicles add alkaline nourishing secretions to form Semen.",
      "Female Reproductive System: Ovaries produce one mature ovum every month. Fallopian Tube (Oviduct) is the exclusive site of fertilization. Uterus is the site of implantation and fetal gestation. Placenta provides nutrients and oxygen from mother to fetus and removes metabolic waste.",
      "Menstrual Cycle: If ovum is not fertilized, the thickened, vascularized uterine lining breaks down. Blood and mucus are discharged through vagina over 3–5 days (Menstruation).",
      "Contraception Categories:\n(1) Barrier methods: Condoms, diaphragms (block sperm from reaching egg; condoms prevent STIs like HIV-AIDS, Syphilis, Gonorrhoea).\n(2) Chemical / Hormonal methods: Oral contraceptive pills (alter hormonal balance to prevent ovulation).\n(3) Intrauterine Contraceptive Devices (IUCD): Copper-T placed in uterus to prevent implantation.\n(4) Surgical methods: Vasectomy in males (vas deferens tied/cut); Tubectomy in females (fallopian tubes tied/cut). Permanent birth control."
    ],
    keyReactionsOrFormulas: [
      { name: "Scrotal Thermoregulation", formula: "\\text{Scrotum Temperature} = \\text{Core Body Temp (37°C)} - 2.5^\\circ\\text{C} \\approx 34.5^\\circ\\text{C}", note: "Optimal temperature for spermatogenesis." },
      { name: "Fertilization Site", formula: "\\text{Sperm} + \\text{Ovum} \\xrightarrow{\\text{Ampulla of Fallopian Tube}} \\text{Zygote}", note: "Implantation occurs later in Uterus." }
    ],
    commonMistakesWarning: "Students write that fertilization takes place in the uterus. Fertilization occurs EXCLUSIVELY in the Fallopian Tube (Oviduct). Implantation occurs in the uterus.",
    examples: [
      {
        id: "ex_c7_7",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why are the human testes situated outside the abdominal cavity within the scrotum?",
        solutionSteps: [
          "The formation and maturation of viable sperms (spermatogenesis) requires a lower temperature than the normal internal body temperature (approx. 2 to 2.5°C cooler).",
          "The scrotum hangs outside the abdominal cavity to provide this cooler ambient temperature essential for healthy sperm production."
        ],
        keyTakeaway: "Scrotum maintains 2–2.5°C lower temperature necessary for viable sperm production.",
        examinerTrap: "Must quantify the temperature difference: '2 to 2.5 degrees Celsius lower than normal body temperature'."
      },
      {
        id: "ex_c7_8",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "What is the function of the placenta in human pregnancy? Describe its anatomical structure.",
        solutionSteps: [
          "Anatomy of Placenta: The placenta is a specialized disc-like vascular tissue embedded deeply in the uterine wall of the mother. On the fetal side, it contains millions of microscopic villi; on the maternal side, blood spaces surround these villi, creating an enormous surface area for exchange.",
          "Function 1 (Nutrient and Oxygen Supply): All glucose, amino acids, vitamins, and oxygen diffuse across the placental barrier from the mother's blood into the developing embryo's blood.",
          "Function 2 (Waste Elimination): Carbon dioxide, urea, and metabolic waste generated by the growing fetus diffuse across the placenta into maternal blood for excretion.",
          "Function 3 (Endocrine): Secretes vital pregnancy hormones (hCG, progesterone) to maintain uterine lining."
        ],
        keyTakeaway: "Placenta is a disc-shaped vascular organ with villi providing nutrient supply, gas exchange, and waste removal.",
        examinerTrap: "Never write that mother's blood and baby's blood mix directly. They are separated by thin placental membranes; transport occurs strictly via diffusion."
      },
      {
        id: "ex_c7_9",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Differentiate between Vasectomy and Tubectomy. Name two sexually transmitted diseases (STDs) caused by bacteria and two caused by viruses. Which contraceptive method provides effective protection against STDs?",
        solutionSteps: [
          "Vasectomy vs Tubectomy:\n- Vasectomy: Surgical birth control in males where a small portion of both vas deferens is cut or tied up, preventing sperms from reaching the semen.\n- Tubectomy: Surgical birth control in females where a small portion of both fallopian tubes is cut or tied up, preventing the egg from meeting sperm.",
          "Bacterial STDs: Gonorrhoea and Syphilis.",
          "Viral STDs: HIV-AIDS and Genital Warts (Human Papillomavirus / HPV) / Genital Herpes.",
          "Protection: Mechanical barrier methods (specifically Condoms) provide dual protection: they prevent unwanted pregnancies and physically block the transmission of bodily fluids, shielding against STDs."
        ],
        keyTakeaway: "Vasectomy cuts vas deferens; Tubectomy cuts fallopian tubes; Condoms are the only contraceptives that shield against STDs.",
        examinerTrap: "Listing Oral pills or Copper-T as protecting against STDs. They prevent pregnancy, but provide ZERO protection against STDs."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 8: HEREDITY (BIOLOGY)
  // =======================================================================
  {
    id: "sci_c8_t1",
    chapterNo: 8,
    chapterName: "Heredity",
    discipline: "Biology",
    topicTitle: "Mendel's Monohybrid & Dihybrid Crosses and Laws of Inheritance",
    ncertSection: "NCERT Chapter 8, Sections 8.1 & 8.2 (Pages 146–153)",
    ncertSummary: "Heredity is the transmission of traits from parents to offspring. Gregor Johann Mendel unraveled the mechanisms of inheritance using garden pea plants (Pisum sativum). In a Monohybrid Cross (single trait: Tall vs Short), the F1 generation shows only the dominant phenotype, while F2 exhibits a 3:1 phenotypic ratio (1:2:1 genotypic ratio). In a Dihybrid Cross (two traits: Seed shape & color), the F2 phenotypic ratio is 9:3:3:1, establishing the Law of Independent Assortment.",
    corePrinciples: [
      "Why Mendel chose Garden Pea (Pisum sativum): (1) Short life span, (2) Easy to grow and pollinate artificially, (3) Distinct, easily observable contrasting pairs of traits, (4) Naturally self-pollinating, but easily cross-pollinated.",
      "Monohybrid Cross (TT × tt):\n- Parents: Pure Tall (TT) × Pure Dwarf (tt).\n- F1 generation: All hybrid Tall (Tt) plants. Dwarf trait is masked (Recessive).\n- F2 generation (Tt × Tt): Phenotypic ratio = 3 Tall : 1 Dwarf. Genotypic ratio = 1 TT : 2 Tt : 1 tt (1 : 2 : 1).",
      "Law of Segregation: The two alleles of a gene pair segregate during gamete formation so that each gamete carries only one allele.",
      "Dihybrid Cross (Round Yellow RRYY × Wrinkled Green rryy):\n- F1 generation: All Round Yellow (RrYy).\n- F2 generation: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9 : 3 : 3 : 1).",
      "Law of Independent Assortment: When two pairs of contrasting traits are combined in a hybrid, the segregation of one pair of characters is completely independent of the other pair."
    ],
    keyReactionsOrFormulas: [
      { name: "Monohybrid F2 Ratios", formula: "\\text{Phenotypic} = 3 : 1; \quad \\text{Genotypic} = 1 : 2 : 1 \; (1\\text{TT} : 2\\text{Tt} : 1\\text{tt})", note: "Shows recessive allele remains unblended." },
      { name: "Dihybrid F2 Phenotypic Ratio", formula: "9 \\text{ Round Yellow} : 3 \\text{ Round Green} : 3 \\text{ Wrinkled Yellow} : 1 \\text{ Wrinkled Green}", note: "Demonstrates independent assortment." }
    ],
    commonMistakesWarning: "Students confuse phenotypic ratio with genotypic ratio. Phenotypic is physical appearance (3:1); Genotypic is genetic makeup (1:2:1). Specify which ratio you are writing!",
    examples: [
      {
        id: "ex_c8_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What is the difference between a dominant trait and a recessive trait?",
        solutionSteps: [
          "A dominant trait is an allele that expresses its phenotype even in the presence of an alternative contrasting allele (i.e. in both homozygous TT and heterozygous Tt conditions).",
          "A recessive trait is an allele that is masked in the presence of a dominant allele and can only express its phenotype in the homozygous condition (tt)."
        ],
        keyTakeaway: "Dominant expresses in both TT and Tt; Recessive expresses only in homozygous tt.",
        examinerTrap: "Do not say 'dominant is stronger'. Say 'dominant expresses in heterozygous condition'."
      },
      {
        id: "ex_c8_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A cross was made between pure tall pea plants (TT) and pure dwarf pea plants (tt).\n(a) What was the phenotype and genotype of the F1 progeny?\n(b) When F1 plants were self-pollinated, what phenotypic and genotypic ratios were obtained in F2 progeny? Show the cross.",
        solutionSteps: [
          "(a) F1 Progeny: Phenotype = 100% Tall plants. Genotype = All heterozygous Tt.",
          "(b) Self-pollination of F1 (Tt × Tt):\nGametes from each parent: T and t.\nPunnett Square:\n- T × T ⟶ TT (Tall)\n- T × t ⟶ Tt (Tall)\n- t × T ⟶ Tt (Tall)\n- t × t ⟶ tt (Dwarf).\nPhenotypic ratio in F2: 3 Tall : 1 Dwarf.\nGenotypic ratio in F2: 1 TT : 2 Tt : 1 tt (1 : 2 : 1)."
        ],
        keyTakeaway: "Monohybrid cross F2 gives 3:1 physical appearance and 1:2:1 exact genetic constitution.",
        examinerTrap: "Forgetting to write the Punnett square or mixing up genotypic ratio (1:2:1) with phenotypic ratio (3:1)."
      },
      {
        id: "ex_c8_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "In a dihybrid cross between a pea plant with Round Yellow seeds (RRYY) and a plant with Wrinkled Green seeds (rryy):\n(a) State the phenotype and genotype of F1 generation.\n(b) List the four distinct phenotypic combinations obtained in the F2 generation and their exact numerical ratios.\n(c) What fundamental law of genetics does this cross establish?",
        solutionSteps: [
          "(a) F1 Generation: Phenotype = All Round Yellow seeds. Genotype = All RrYy (heterozygous for both traits).",
          "(b) F2 Generation Phenotypes and Ratios (Total 16 combinations):\n(1) Round Yellow (Parental type) = 9/16\n(2) Round Green (New recombinant) = 3/16\n(3) Wrinkled Yellow (New recombinant) = 3/16\n(4) Wrinkled Green (Parental type) = 1/16.\nNumerical Ratio = 9 : 3 : 3 : 1.",
          "(c) Law Established: Mendel's Law of Independent Assortment, which states that when two pairs of contrasting traits are inherited together, the alleles of each trait segregate and sort into gametes completely independently of the alleles of the other trait."
        ],
        keyTakeaway: "Dihybrid cross produces two new recombinant phenotypes (Round Green & Wrinkled Yellow) in a 9:3:3:1 ratio.",
        examinerTrap: "Writing that the F2 generation has only parental types. The appearance of recombinants (3 Round Green, 3 Wrinkled Yellow) is the critical proof of independent assortment."
      }
    ]
  },
  {
    id: "sci_c8_t2",
    chapterNo: 8,
    chapterName: "Heredity",
    discipline: "Biology",
    topicTitle: "DNA to Proteins Mechanism & Sex Determination in Humans",
    ncertSection: "NCERT Chapter 8, Section 8.3 (Pages 150–153)",
    ncertSummary: "Genes are segments of DNA located on chromosomes that provide the information code for synthesizing specific cellular proteins. Enzymes are proteins that catalyze biochemical reactions (e.g. synthesizing plant growth hormones). In humans, sex is determined genetically at fertilization by the sex chromosome contributed by the sperm: an X sperm produces a girl (XX), while a Y sperm produces a boy (XY). The father's sperm alone determines the sex of the child.",
    corePrinciples: [
      "Gene Expression Cascade: DNA segment (Gene) ⟶ Messenger RNA ⟶ Protein (Enzyme) ⟶ Biochemical reaction (e.g. hormone synthesis) ⟶ Observable Trait (Phenotype). A mutation in a gene produces an altered protein, modifying the trait.",
      "Sex Chromosomes in Humans: Humans possess 23 pairs (46 chromosomes) in diploid somatic cells: 22 pairs of Autosomes + 1 pair of Sex Chromosomes.",
      "Female genotype: 44 Autosomes + XX (Homogametic, all ova carry one X chromosome).",
      "Male genotype: 44 Autosomes + XY (Heterogametic, 50% sperms carry X chromosome, 50% sperms carry Y chromosome).",
      "Sex Determination: If an X-carrying sperm fertilizes the ovum ⟶ XX (Female baby). If a Y-carrying sperm fertilizes the ovum ⟶ XY (Male baby). Probability for either sex is precisely 50% (1:1 ratio) in every pregnancy. The father is genetically responsible, never the mother."
    ],
    keyReactionsOrFormulas: [
      { name: "Sex Determination Cross", formula: "\\text{Mother (XX)} \\times \\text{Father (XY)} ⟹ 50\% \\text{ XX (Female)} + 50\% \\text{ XY (Male)}", note: "Statistical probability is strictly 1:1." }
    ],
    commonMistakesWarning: "In society, women are wrongly blamed for giving birth to girls. Biologically, the mother contributes ONLY X chromosomes. The sex of the child is determined EXCLUSIVELY by whether the father's sperm carries an X or a Y chromosome!",
    examples: [
      {
        id: "ex_c8_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "A couple has four daughters. What is the statistical probability that their fifth child will be a boy?",
        solutionSteps: [
          "Every conception event is a completely independent biological occurrence.",
          "During each fertilization, 50% of the father's sperms carry an X chromosome and 50% carry a Y chromosome, while all maternal ova carry an X chromosome.",
          "Therefore, the probability of having a boy (or a girl) is always exactly 50% (or 1/2) in every individual pregnancy, regardless of previous births."
        ],
        keyTakeaway: "Sex determination probability is fixed at 50% (1/2) for every pregnancy, completely independent of past children.",
        examinerTrap: "Falling for the gambler's fallacy and saying 100% or 20%. The probability is always exactly 50% (0.5)."
      },
      {
        id: "ex_c8_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "With the help of a genetic cross, explain how sex is determined in human beings. Who determines the sex of the child — the mother or the father?",
        solutionSteps: [
          "Human somatic cells contain 23 pairs of chromosomes, of which the 23rd pair is the sex chromosome pair.",
          "Females have two identical X chromosomes (XX). All ova produced carry 22 autosomes + one X chromosome.",
          "Males have one X and one Y chromosome (XY). 50% of sperms carry 22 autosomes + X, while 50% carry 22 autosomes + Y.",
          "Cross:\n- Mother (XX) produces gametes: X and X.\n- Father (XY) produces gametes: X and Y.\n- Offspring: X (mother) + X (father) ⟶ XX (Female child, 50%).\n- Offspring: X (mother) + Y (father) ⟶ XY (Male child, 50%).",
          "Conclusion: Since all ova carry an X chromosome, the sex of the child depends entirely on whether the fertilizing sperm from the father carries an X or a Y chromosome. Hence, the father determines the sex."
        ],
        keyTakeaway: "Father is heterogametic (XY) producing X and Y sperms; father's sperm exclusively determines the sex of the offspring.",
        examinerTrap: "Drawing the cross without showing gamete segregation or forgetting to state the 50:50 probability."
      },
      {
        id: "ex_c8_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "How do genes control traits in organisms? Explain the molecular pathway linking a gene to an observable physical characteristic like plant height.",
        solutionSteps: [
          "Step 1 (Gene as Information Source): A gene is a specific sequence of nucleotides on a DNA molecule that contains the coded genetic instructions for synthesizing a specific cellular protein.",
          "Step 2 (Protein as an Enzyme): The synthesized protein often functions as an enzyme. For instance, in pea plants, a specific enzyme catalyzes the biochemical synthesis of the plant growth hormone (Auxin/Gibberellin).",
          "Step 3 (Hormone and Trait Expression): If the gene is normal and efficient (dominant T allele), large quantities of the active enzyme are made, resulting in abundant growth hormone and causing the plant to grow Tall.",
          "Step 4 (Altered Gene / Recessive Allele): If the gene possesses an alteration or mutation (recessive t allele), the enzyme produced is non-functional or produced in tiny quantities. Less hormone is synthesized, and the plant remains Dwarf.",
          "Conclusion: Physical traits are the direct expression of cellular hormones and biochemical products whose synthesis is governed by enzyme proteins coded by genes."
        ],
        keyTakeaway: "Gene (DNA) ⟶ Enzyme (Protein) ⟶ Hormone (Biochemical) ⟶ Visible Physical Trait.",
        examinerTrap: "Writing that the gene itself stretches the stem. The gene codes for an enzyme, which produces the growth hormone."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 9: LIGHT – REFLECTION AND REFRACTION (PHYSICS)
  // =======================================================================
  {
    id: "sci_c9_t1",
    chapterNo: 9,
    chapterName: "Light – Reflection and Refraction",
    discipline: "Physics",
    topicTitle: "Spherical Mirrors, Sign Convention, Mirror Formula & Ray Diagrams",
    ncertSection: "NCERT Chapter 9, Sections 9.1 & 9.2 (Pages 160–172)",
    ncertSummary: "Spherical mirrors have curved reflecting surfaces: Concave (curved inward, converging) and Convex (curved outward, diverging). The New Cartesian Sign Convention assigns negative signs to object distances ($u$) and distances measured opposite to incident light. The Mirror Formula relates object distance ($u$), image distance ($v$), and focal length ($f$): $1/v + 1/u = 1/f$. Magnification $m = -v/u = h_i / h_o$.",
    corePrinciples: [
      "Cartesian Sign Convention: (1) Object is always placed on the left of mirror (incident light travels left to right), (2) Pole (P) is the origin, (3) Distances measured in direction of incident light are positive (+x), opposite are negative (-x), (4) Heights above principal axis are positive (+y), below are negative (-y).",
      "Focal Length Rules: $f$ is ALWAYS NEGATIVE for Concave mirror ($f < 0$); $f$ is ALWAYS POSITIVE for Convex mirror ($f > 0$). $R = 2f$.",
      "Object Distance: $u$ is ALWAYS NEGATIVE for real objects ($u < 0$).",
      "Concave Mirror Applications: Shaving mirror / dentist mirror (object between P and F produces magnified virtual erect image), solar furnaces, headlights/torches (source at F produces parallel beam).",
      "Convex Mirror Applications: Rear-view mirrors in vehicles because they always form an erect, diminished virtual image and provide a wide field of view."
    ],
    keyReactionsOrFormulas: [
      { name: "Mirror Formula", formula: "\frac{1}{v} + \\frac{1}{u} = \frac{1}{f}", note: "Use Cartesian signs for u, v, f." },
      { name: "Magnification of Mirror", formula: "m = \frac{h_i}{h_o} = -\frac{v}{u}", note: "m < 0 means Real & Inverted; m > 0 means Virtual & Erect." },
      { name: "Focal Length vs Radius", formula: "f = \frac{R}{2}", note: "Valid for spherical mirrors of small aperture." }
    ],
    commonMistakesWarning: "In mirror magnification, students forget the minus sign: $m = -v/u$. In lens magnification, it is positive: $m = +v/u$. Do not confuse the two!",
    examples: [
      {
        id: "ex_c9_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why are convex mirrors preferred as rear-view mirrors in automobiles?",
        solutionSteps: [
          "A convex mirror always forms a virtual, erect, and diminished image of objects regardless of where they are positioned.",
          "Because the image is diminished and the reflecting surface curves outwards, convex mirrors offer a significantly wider field of view compared to a plane or concave mirror, enabling the driver to monitor traffic behind."
        ],
        keyTakeaway: "Convex mirrors always form erect, diminished images providing a wide field of view.",
        examinerTrap: "Writing 'it forms a real image'. Convex mirrors form VIRTUAL erect diminished images."
      },
      {
        id: "ex_c9_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position, nature, and size of the image.",
        solutionSteps: [
          "Given:\nRadius of curvature $R = +3.00\\text{ m} ⟹$ Focal length $f = R/2 = +1.50\\text{ m}$ (positive for convex).\nObject distance $u = -5.00\\text{ m}$.\nImage distance $v = ?$",
          "Using Mirror Formula: $\frac{1}{v} + \\frac{1}{u} = \frac{1}{f} ⟹ \frac{1}{v} = \frac{1}{f} - \\frac{1}{u}$.\n$\frac{1}{v} = \frac{1}{1.50} - \\left(\frac{1}{-5.00}\\right) = \frac{1}{1.5} + \frac{1}{5.0} = \frac{10}{15} + \frac{1}{5} = \frac{2}{3} + \frac{1}{5} = \frac{10 + 3}{15} = \frac{13}{15}$.\n$v = +\frac{15}{13} = +1.15\\text{ m}$.",
          "Image Position & Nature: The image is formed at a distance of $1.15\\text{ m}$ behind the mirror. Since $v$ is positive, the image is Virtual and Erect.",
          "Magnification: $m = -\frac{v}{u} = -\frac{+1.15}{-5.00} = +0.23$.\nThe image is virtual, erect, and diminished to $0.23$ times the size of the bus."
        ],
        keyTakeaway: "For convex mirror: $v = +1.15\\text{ m}$, Virtual and Erect, $m = +0.23$ (diminished).",
        examinerTrap: "Using negative sign for convex focal length. Convex mirror focal length is ALWAYS POSITIVE."
      },
      {
        id: "ex_c9_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A concave mirror produces three times magnified real image of an object placed at 10 cm in front of it.\n(a) Where is the image located?\n(b) What is the focal length of the mirror?\n(c) If the object is moved to 5 cm from the mirror, what will be the nature of the new image? Draw a ray diagram description.",
        solutionSteps: [
          "Part (a):\nGiven: Object distance $u = -10\\text{ cm}$.\nSince the image is Real, magnification $m$ must be negative: $m = -3$.\nFormula: $m = -\frac{v}{u} ⟹ -3 = -\frac{v}{-10} ⟹ -3 = \frac{v}{10} ⟹ v = -30\\text{ cm}$.\nThe image is located at a distance of $30\\text{ cm}$ in front of the mirror (on the same side as object).",
          "Part (b):\nUsing Mirror Formula: $\frac{1}{f} = \frac{1}{v} + \\frac{1}{u} = \frac{1}{-30} + \frac{1}{-10} = -\frac{1}{30} - \frac{3}{30} = -\frac{4}{30} = -\frac{2}{15}$.\n$f = -\frac{15}{2} = -7.5\\text{ cm}$. Focal length is $7.5\\text{ cm}$ (concave).",
          "Part (c):\nWhen the object is placed at $u' = -5\\text{ cm}$, notice that $|u'| = 5\\text{ cm} < |f| = 7.5\\text{ cm}$. The object is now between the Pole (P) and Focus (F)!\nFor an object between P and F of a concave mirror, the rays diverge after reflection and appear to meet behind the mirror, forming a Virtual, Erect, and Magnified image behind the mirror."
        ],
        keyTakeaway: "Real magnified image means $m = -3, v = -30\\text{ cm}, f = -7.5\\text{ cm}$. Object at $5\\text{ cm} < f$ forms Virtual Erect image.",
        examinerTrap: "Taking $m = +3$ for a real image. Real images are ALWAYS inverted, so $m$ is negative ($m = -3$)."
      }
    ]
  },
  {
    id: "sci_c9_t2",
    chapterNo: 9,
    chapterName: "Light – Reflection and Refraction",
    discipline: "Physics",
    topicTitle: "Refraction, Snell's Law, Refractive Index, Lenses & Lens Power",
    ncertSection: "NCERT Chapter 9, Sections 9.3 & 9.4 (Pages 171–186)",
    ncertSummary: "Refraction is the bending of a light ray when passing obliquely from one optical medium to another due to a change in speed. Snell's Law: $\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21}$. Absolute refractive index $n = c/v$. Lenses form images via refraction: Convex (converging) has positive focal length ($f > 0$); Concave (diverging) has negative focal length ($f < 0$). Lens Formula: $1/v - 1/u = 1/f$. Power of lens $P = 1/f(\\text{in meters})$, measured in Dioptres (D).",
    corePrinciples: [
      "Laws of Refraction:\n(1) The incident ray, refracted ray, and normal at the point of incidence all lie in the same plane.\n(2) Snell's Law: The ratio of sine of angle of incidence to sine of angle of refraction is constant for light of a given color and media pair: $\frac{\\sin i}{\\sin r} = n_{21} = \frac{n_2}{n_1} = \frac{v_1}{v_2}$.",
      "Optical Density vs Physical Density: Optical density is the ratio of speed of light; it is NOT mass density. (e.g. Kerosene has lower mass density than water and floats on it, but is optically denser than water and bends light more).",
      "Convex Lens (Converging): Real inverted images for all positions except when object is between optical center $O$ and focus $F_1$ (magnifying glass mode, forms virtual erect magnified image). $f > 0$.",
      "Concave Lens (Diverging): ALWAYS forms a virtual, erect, and diminished image on the same side as object. $f < 0$.",
      "Power of a Lens: $P = \frac{1}{f(\\text{in meters})}$. SI unit is Dioptre ($1\\text{ D} = 1\\text{ m}^{-1}$). Converging/Convex lens has $+P$; Diverging/Concave lens has $-P$. Combination power $P_{\\text{total}} = P_1 + P_2$."
    ],
    keyReactionsOrFormulas: [
      { name: "Snell's Law of Refraction", formula: "\frac{\\sin i}{\\sin r} = \frac{n_2}{n_1} = \frac{v_1}{v_2}", note: "Ray bends towards normal when entering denser medium ($v_2 < v_1$)." },
      { name: "Lens Formula", formula: "\frac{1}{v} - \\frac{1}{u} = \frac{1}{f}", note: "Notice minus sign before 1/u (unlike mirror formula)." },
      { name: "Magnification of Lens", formula: "m = \frac{h_i}{h_o} = +\frac{v}{u}", note: "Positive sign for lens magnification." },
      { name: "Power of a Lens", formula: "P = \frac{1}{f(\\text{m})} = \frac{100}{f(\\text{cm})}", note: "Always convert cm to meters before calculating Dioptres." }
    ],
    commonMistakesWarning: "Forgetting to convert focal length from centimeters to meters when calculating Power ($P = 1/f$). If $f = +50\\text{ cm}$, $P = 1/0.5 = +2\\text{ D}$, NOT $1/50 = 0.02\\text{ D}$!",
    examples: [
      {
        id: "ex_c9_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Define 1 Dioptre of power of a lens.",
        solutionSteps: [
          "One Dioptre (1 D) is defined as the optical power of a lens whose focal length is exactly one meter ($1\\text{ m}$).",
          "Formula: $P = \frac{1}{f(\\text{m})} ⟹ 1\\text{ D} = 1\\text{ m}^{-1}$."
        ],
        keyTakeaway: "1 Dioptre is the power of a lens with a focal length of 1 meter ($1\\text{ D} = 1\\text{ m}^{-1}$).",
        examinerTrap: "Omitting the unit 'meter'. Writing 'focal length of 1 unit' loses 0.5 mark."
      },
      {
        id: "ex_c9_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A concave lens has focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens? Also, find the magnification produced by the lens.",
        solutionSteps: [
          "Given:\nConcave lens has negative focal length: $f = -15\\text{ cm}$.\nConcave lens always forms a virtual image on the same side: $v = -10\\text{ cm}$.\nObject distance $u = ?$",
          "Using Lens Formula: $\frac{1}{v} - \\frac{1}{u} = \frac{1}{f} ⟹ \\frac{1}{u} = \frac{1}{v} - \frac{1}{f}$.\n$\\frac{1}{u} = \frac{1}{-10} - \\left(\frac{1}{-15}\\right) = -\frac{1}{10} + \frac{1}{15} = \frac{-3 + 2}{30} = -\frac{1}{30}$.\n$u = -30\\text{ cm}$.\nThe object should be placed at a distance of $30\\text{ cm}$ in front of the lens.",
          "Magnification: $m = +\frac{v}{u} = \frac{-10}{-30} = +\frac{1}{3} = +0.33$.\nThe positive sign confirms the image is Virtual and Erect; value $0.33$ shows it is diminished to one-third size."
        ],
        keyTakeaway: "Concave lens: $f = -15\\text{ cm}, v = -10\\text{ cm} ⟹ u = -30\\text{ cm}, m = +1/3$.",
        examinerTrap: "Using positive sign for image distance $v$. Concave lenses NEVER form real images; $v$ is always negative!"
      },
      {
        id: "ex_c9_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A doctor prescribes a corrective lens of power $-2.5\\text{ D}$ to a student.\n(a) Find the focal length of the lens.\n(b) Is the prescribed lens diverging or converging?\n(c) Which vision defect does the student suffer from?\n(d) If this lens is combined with another lens of power $+4.0\\text{ D}$, what is the focal length and nature of the combination?",
        solutionSteps: [
          "(a) Focal length: $f = \frac{1}{P} = \frac{1}{-2.5\\text{ D}} = -0.4\\text{ m} = -40\\text{ cm}$.",
          "(b) Lens Nature: Since power and focal length are negative, it is a Diverging lens (Concave lens).",
          "(c) Vision Defect: A concave lens corrects Myopia (near-sightedness / short-sightedness).",
          "(d) Combination Power:\n$P_{\\text{total}} = P_1 + P_2 = (-2.5\\text{ D}) + (+4.0\\text{ D}) = +1.5\\text{ D}$.\nFocal length of combination: $F = \frac{1}{P_{\\text{total}}} = \frac{1}{+1.5} = +\frac{10}{15}\\text{ m} = +0.67\\text{ m} = +66.7\\text{ cm}$.\nSince the net power is positive ($+1.5\\text{ D}$), the combination behaves as a Converging (Convex) lens."
        ],
        keyTakeaway: "$P = -2.5\\text{ D} ⟹ f = -40\\text{ cm}$ (Concave / Myopia). Combination $P = -2.5 + 4.0 = +1.5\\text{ D} ⟹ f = +66.7\\text{ cm}$ (Convex).",
        examinerTrap: "Adding focal lengths directly instead of adding powers. You must add powers ($P_1 + P_2$), NEVER $f_1 + f_2$."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 10: THE HUMAN EYE AND THE COLOURFUL WORLD (PHYSICS)
  // =======================================================================
  {
    id: "sci_c10_t1",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    discipline: "Physics",
    topicTitle: "Human Eye Anatomy, Accommodation & Corrective Lenses for Defects",
    ncertSection: "NCERT Chapter 10, Sections 10.1 & 10.2 (Pages 187–193)",
    ncertSummary: "The human eye functions like a camera with an adjustable crystalline lens projecting real, inverted images onto the photosensitive Retina. The Power of Accommodation is the ability of the ciliary muscles to alter lens curvature (focal length) to focus objects from 25 cm (near point) to infinity (far point). Vision defects include Myopia (concave lens), Hypermetropia (convex lens), and Presbyopia (bifocal lens).",
    corePrinciples: [
      "Key Eye Components:\n- Cornea: Transparent front membrane; performs 80% of light refraction.\n- Iris & Pupil: Iris regulates pupil aperture to control light intensity entering eye.\n- Ciliary Muscles: Relax to thin the lens (focus distant objects, maximum focal length); contract to thicken the lens (focus near objects, minimum focal length).\n- Retina: Light-sensitive layer containing Rods (twilight/dim vision) and Cones (color vision).\n- Near point of normal human eye: $25\\text{ cm}$. Far point: Infinity ($\\infty$).",
      "Myopia (Near-sightedness): Can see nearby clearly, distant objects blurry. Causes: (1) Excessive curvature of eye lens, (2) Elongation of eyeball. Image forms IN FRONT of retina. Correction: Concave (diverging) lens of suitable power.",
      "Hypermetropia (Far-sightedness): Can see distant clearly, nearby objects blurry. Causes: (1) Focal length of eye lens too long, (2) Eyeball too short. Image forms BEHIND retina. Correction: Convex (converging) lens of suitable power.",
      "Presbyopia: Old-age far-sightedness caused by weakening of ciliary muscles and diminishing lens flexibility. Corrected by Bifocal lenses (upper part concave for distant vision, lower part convex for reading)."
    ],
    keyReactionsOrFormulas: [
      { name: "Myopia Correction Condition", formula: "u = -\\infty, \quad v = -\\text{Far Point} ⟹ f = -\\text{Far Point}", note: "Concave lens brings virtual image from infinity to the defective far point." },
      { name: "Hypermetropia Correction Condition", formula: "u = -25\\text{ cm}, \quad v = -\\text{Near Point} ⟹ \frac{1}{f} = \frac{1}{v} - \\frac{1}{u}", note: "Convex lens shifts image from 25 cm to the defective near point." }
    ],
    commonMistakesWarning: "In Myopia, the image is formed IN FRONT of the retina (not on it). In Hypermetropia, it is formed BEHIND the retina. Draw the ray diagrams accurately with arrows!",
    examples: [
      {
        id: "ex_c10_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "What is the function of the Ciliary Muscles in the human eye?",
        solutionSteps: [
          "Ciliary muscles modify the curvature and focal length of the flexible eye lens.",
          "When looking at distant objects, they relax to make the lens thin (increasing focal length); when looking at near objects, they contract to make the lens thick and rounded (decreasing focal length), enabling sharp focus on the retina (accommodation)."
        ],
        keyTakeaway: "Ciliary muscles alter lens curvature to focus near and far objects on the retina.",
        examinerTrap: "Confusing Ciliary muscles (adjusts lens focal length) with Iris (adjusts pupil size for light intensity)."
      },
      {
        id: "ex_c10_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A student sitting on the last bench cannot read the blackboard clearly. Name the defect of vision she is suffering from. State two causes of this defect and draw a ray diagram to show its correction.",
        solutionSteps: [
          "Defect: Myopia (Near-sightedness / Short-sightedness).",
          "Two Causes:\n(1) Excessive curvature (over-convergence) of the crystalline eye lens.\n(2) Elongation of the eyeball along the antero-posterior axis.",
          "Image position: The image of distant blackboard letters is focused in front of the retina instead of directly on it.",
          "Correction: A concave (diverging) lens of appropriate focal length is placed in front of the eye. The concave lens diverges incoming parallel rays slightly, so that after passing through the eye lens, the rays converge precisely onto the photosensitive retina."
        ],
        keyTakeaway: "Myopia = image in front of retina, caused by long eyeball/over-curved lens, corrected by Concave lens.",
        examinerTrap: "Drawing the corrected rays converging before the retina. In the corrected diagram, rays MUST meet exactly on the retina."
      },
      {
        id: "ex_c10_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "The near point of a hypermetropic person is 75 cm. Calculate the focal length and power of the corrective lens required to read a book comfortably at 25 cm.",
        solutionSteps: [
          "Understanding the problem:\nThe person wants to read a book held at normal reading distance: Object distance $u = -25\\text{ cm}$.\nThe corrective lens must form a virtual image of this book at the person's defective near point: Image distance $v = -75\\text{ cm}$.",
          "Using Lens Formula: $\frac{1}{f} = \frac{1}{v} - \\frac{1}{u}$.\n$\frac{1}{f} = \frac{1}{-75} - \\left(\frac{1}{-25}\\right) = -\frac{1}{75} + \frac{1}{25} = \frac{-1 + 3}{75} = \frac{+2}{75}$.\nFocal length $f = +\frac{75}{2}\\text{ cm} = +37.5\\text{ cm} = +0.375\\text{ m}$.",
          "Power Calculation: $P = \frac{1}{f(\\text{m})} = \frac{1}{+0.375} = \frac{1000}{375} = +2.67\\text{ Dioptres}$.",
          "Conclusion: The person requires a Convex lens of focal length $+37.5\\text{ cm}$ and power $+2.67\\text{ D}$."
        ],
        keyTakeaway: "Hypermetropia: $u = -25\\text{ cm}, v = -75\\text{ cm} ⟹ f = +37.5\\text{ cm}, P = +2.67\\text{ D}$ (Convex).",
        examinerTrap: "Using positive value for $u$ or $v$. By Cartesian sign convention, both object and virtual image distances are negative!"
      }
    ]
  },
  {
    id: "sci_c10_t2",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    discipline: "Physics",
    topicTitle: "Prism Dispersion, Atmospheric Refraction & Light Scattering",
    ncertSection: "NCERT Chapter 10, Sections 10.3, 10.4 & 10.5 (Pages 193–199)",
    ncertSummary: "White light passing through a glass prism splits into its component spectrum (VIBGYOR) due to dispersion; violet bends the most (shortest wavelength), red bends the least (longest wavelength). Atmospheric refraction causes stars to twinkle and produces advance sunrise (2 min) and delayed sunset (2 min). Scattering of light (Tyndall Effect, Rayleigh scattering $\\propto 1/\\lambda^4$) explains why the sky appears blue and the sun appears reddish at sunrise and sunset.",
    corePrinciples: [
      "Dispersion through Glass Prism: Different colors of light have different speeds in glass. Red has the longest wavelength ($\\lambda$) and travels fastest in glass, so it deviates least. Violet has the shortest wavelength and travels slowest, so it deviates most.",
      "Recombination of Spectrum: Sir Isaac Newton demonstrated that placing a second identical inverted prism alongside the first recombines the seven colors back into a single beam of white light.",
      "Rainbow Formation: Natural dispersion phenomenon caused by tiny suspended raindrops acting as mini-prisms: (1) Refraction and dispersion upon entry, (2) Internal reflection at rear wall, (3) Refraction upon exiting droplet.",
      "Atmospheric Refraction Phenomena:\n- Twinkling of Stars: Continuous fluctuations in atmospheric density and temperature cause random shifts in apparent star position and light intensity.\n- Planets do not twinkle: They are closer to earth and act as extended disc sources of light; fluctuations average out to zero.\n- Advance Sunrise & Delayed Sunset: Light bends towards earth's surface due to increasing atmospheric density downwards, making the sun visible 2 minutes before actual horizon crossing and 2 minutes after setting (day lengthened by ~4 minutes).",
      "Scattering of Light (Rayleigh Scattering $\\propto 1/\\lambda^4$):\n- Blue Sky: Fine air molecules scatter short wavelength blue light ~16 times more effectively than red light.\n- Red Sun at Sunrise/Sunset: Light travels through maximum thickness of atmosphere; blue light is scattered away, leaving long wavelength red light to reach our eyes.\n- Danger Signals are Red: Red has the longest wavelength and is scattered the least by fog and smoke, remaining visible from large distances."
    ],
    keyReactionsOrFormulas: [
      { name: "Rayleigh Scattering Law", formula: "I_{\\text{scattered}} \\propto \frac{1}{\\lambda^4}", note: "Scattering intensity is inversely proportional to fourth power of wavelength." },
      { name: "Day Length Extension", formula: "\\Delta t = 2\\text{ min (sunrise)} + 2\\text{ min (sunset)} = 4\\text{ minutes}", note: "Caused by atmospheric refraction." }
    ],
    commonMistakesWarning: "Students state that rainbow formation involves 'total internal reflection'. NCERT explicitly specifies 'internal reflection' inside the raindrop (it is not necessarily total internal reflection).",
    examples: [
      {
        id: "ex_c10_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why do 'Danger' signal lights installed on towers and traffic signals always use red color?",
        solutionSteps: [
          "Red light has the longest wavelength among all colors in the visible spectrum.",
          "According to Rayleigh's scattering law ($I \\propto 1/\\lambda^4$), red light is scattered the least by atmospheric fog, mist, and smoke particles, allowing it to travel the greatest distance without losing intensity."
        ],
        keyTakeaway: "Red has the longest wavelength, suffers minimal atmospheric scattering, and remains visible through fog.",
        examinerTrap: "Do not just write 'red is bright'. Mention 'longest wavelength and least scattered by smoke/fog'."
      },
      {
        id: "ex_c10_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "Explain why stars appear to twinkle in the night sky, but planets do not twinkle.",
        solutionSteps: [
          "Why Stars Twinkle: Stars are situated trillions of kilometers away, acting as point sources of light. As starlight passes through various layers of the earth's atmosphere, it encounters air layers whose temperature and optical densities fluctuate continuously. This causes the apparent position and intensity of starlight entering the eye to waver rapidly, producing the twinkling effect.",
          "Why Planets Do Not Twinkle: Planets are located much closer to earth and act as extended collections of millions of point sources of light. While light from individual points flickers, the fluctuations from different parts of the planet cancel each other out, keeping the total amount of light entering the eye constant."
        ],
        keyTakeaway: "Stars = distant point sources (twinkle due to atmospheric density fluctuations); Planets = close extended sources (fluctuations cancel).",
        examinerTrap: "Saying planets are closer is only half the answer. You must state they act as 'extended sources' where variations average out."
      },
      {
        id: "ex_c10_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Explain the optical phenomenon responsible for:\n(a) The apparent delay of 2 minutes in sunset.\n(b) The formation of a rainbow in the sky after rain.\n(c) The sky appearing dark instead of blue to an astronaut orbiting in space.",
        solutionSteps: [
          "(a) Delayed Sunset: Caused by Atmospheric Refraction. When the sun is physically slightly below the horizon, light rays entering earth's increasingly denser atmosphere bend downwards towards the normal, making the virtual image of the sun appear above the horizon for 2 minutes after actual sunset.",
          "(b) Rainbow Formation: Raindrops act as tiny prisms. Sunlight entering a spherical raindrop undergoes: (1) Refraction and Dispersion (splitting into VIBGYOR), (2) Internal Reflection at the back wall of droplet, (3) Refraction again upon leaving the droplet to reach the observer's eye.",
          "(c) Dark Sky in Space: The blue color of the sky on earth is caused by the scattering of sunlight by gas molecules and dust particles in the atmosphere. In outer space, there is a vacuum with no atmosphere or particles to scatter light. Hence, no scattered light enters the astronaut's eyes, and the sky appears pitch black."
        ],
        keyTakeaway: "Delayed sunset = atmospheric refraction; Rainbow = refraction + dispersion + internal reflection; Dark sky = absence of scattering atmosphere.",
        examinerTrap: "Writing 'total internal reflection' for rainbow. Write 'internal reflection' as per NCERT standard."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 11: ELECTRICITY (PHYSICS)
  // =======================================================================
  {
    id: "sci_c11_t1",
    chapterNo: 11,
    chapterName: "Electricity",
    discipline: "Physics",
    topicTitle: "Ohm's Law, Resistance, Factors Affecting Resistance & Resistivity",
    ncertSection: "NCERT Chapter 11, Sections 11.1, 11.2 & 11.3 (Pages 199–209)",
    ncertSummary: "Electric current is the rate of flow of electric charges ($I = Q/t$). Potential difference between two points is the work done in moving a unit positive charge ($V = W/Q$). Ohm's Law states that at constant temperature, the current through a conductor is directly proportional to the potential difference across its ends ($V = IR$). Resistance depends on conductor length, cross-sectional area, and material resistivity.",
    corePrinciples: [
      "Ohm's Law: $V = IR$, meaning $R = V/I$. The V-I graph for an ohmic conductor is a straight line passing through the origin; its slope gives Resistance ($R$).",
      "Factors affecting Resistance: (1) Directly proportional to length ($R \\propto l$), (2) Inversely proportional to cross-sectional area ($R \\propto 1/A$), (3) Nature of material (Resistivity $\\rho$), (4) Temperature (increases with temperature for pure metals).",
      "Resistivity formula: $R = \\rho \frac{l}{A} \\implies \\rho = \frac{R \cdot A}{l}$. SI unit of resistivity is $\\Omega \cdot \\text{m}$ (Ohm-meter).",
      "Resistivity is an intrinsic material property. It depends ONLY on the material and temperature; it does NOT change when length or thickness of the wire is altered!",
      "Alloys (Nichrome, Manganin, Constantan) have much higher resistivity than pure metals and do not oxidize (burn) at high temperatures, making them ideal for heating element appliances (electric iron, toaster, geyser)."
    ],
    keyReactionsOrFormulas: [
      { name: "Current Definition", formula: "I = \frac{Q}{t} \quad [1\\text{ A} = 1\\text{ C/s}]", note: "Measured by low-resistance Ammeter connected in series." },
      { name: "Potential Difference", formula: "V = \frac{W}{Q} \quad [1\\text{ V} = 1\\text{ J/C}]", note: "Measured by high-resistance Voltmeter connected in parallel." },
      { name: "Resistivity Relation", formula: "R = \\rho \frac{l}{A} = \\rho \frac{l}{\\pi r^2}", note: "If wire is stretched to double length, volume remains constant, so area halves and resistance quadruples (4x)." }
    ],
    commonMistakesWarning: "When a wire is stretched to double its length ($l' = 2l$), its cross-sectional area automatically halves ($A' = A/2$) because volume is conserved! New resistance becomes $R' = \\rho (2l)/(A/2) = 4R$ (four times, NOT twice!).",
    examples: [
      {
        id: "ex_c11_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "A wire of resistivity 'ρ' is stretched to double its original length. What will be its new resistivity?",
        solutionSteps: [
          "Resistivity (ρ) is an intrinsic property of the material that depends solely on the nature of the substance and temperature.",
          "It does NOT depend on the physical dimensions (length or cross-sectional area) of the conductor.",
          "Therefore, the new resistivity remains unchanged: ρ' = ρ."
        ],
        keyTakeaway: "Resistivity is a material constant independent of wire geometry (unlike Resistance).",
        examinerTrap: "Students mistakenly answer 2ρ or 4ρ. Only Resistance changes; Resistivity stays constant!"
      },
      {
        id: "ex_c11_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "A cylindrical copper wire of resistance R is drawn out so that its length is increased by 100% (i.e. doubled). Calculate the percentage increase in its resistance.",
        solutionSteps: [
          "Original wire: Length = $l$, Area = $A$. Resistance $R = \\rho \frac{l}{A}$.",
          "When length is doubled: New length $l' = 2l$.",
          "Since mass and density remain constant, Volume remains conserved: $V = A \\times l = A' \\times l' \\implies A' = \frac{A \\times l}{2l} = \frac{A}{2}$.",
          "New Resistance: $R' = \\rho \frac{l'}{A'} = \\rho \frac{2l}{A/2} = 4 \\left(\\rho \frac{l}{A}\\right) = 4R$.",
          "Increase in resistance: $\\Delta R = R' - R = 4R - R = 3R$.",
          "Percentage increase = $\frac{\\Delta R}{R} \\times 100 = \frac{3R}{R} \\times 100 = 300\%$."
        ],
        keyTakeaway: "Doubling length halves area, making resistance $4R$, which represents a $300\%$ increase.",
        examinerTrap: "Writing percentage increase as 400% instead of 300%. $R'$ is 400% of $R$, but the INCREASE is 300%."
      },
      {
        id: "ex_c11_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A copper wire has diameter 0.5 mm and resistivity of $1.6 \\times 10^{-8} \; \\Omega \cdot \\text{m}$.\n(a) What will be the length of this wire to make its resistance $10 \; \\Omega$?\n(b) How much does the resistance change if the diameter is doubled without changing its length?",
        solutionSteps: [
          "Part (a):\nDiameter $d = 0.5\\text{ mm} = 0.5 \\times 10^{-3}\\text{ m}$. Radius $r = 0.25 \\times 10^{-3}\\text{ m}$.\nCross-sectional Area $A = \\pi r^2 = 3.14 \\times (0.25 \\times 10^{-3})^2 = 3.14 \\times 0.0625 \\times 10^{-6} = 1.9635 \\times 10^{-7}\\text{ m}^2$.\nGiven $R = 10\;\\Omega$ and $\\rho = 1.6 \\times 10^{-8}\;\\Omega\cdot\\text{m}$.\nFormula: $R = \\rho \frac{l}{A} \\implies l = \frac{R \cdot A}{\\rho}$.\n$l = \frac{10 \\times 1.9635 \\times 10^{-7}}{1.6 \\times 10^{-8}} = \frac{1.9635 \\times 10^{-6}}{1.6 \\times 10^{-8}} = \frac{196.35}{1.6} = 122.7\\text{ meters}$.",
          "Part (b):\nResistance is inversely proportional to square of diameter: $R = \\rho \frac{l}{\\pi (d/2)^2} = \frac{4\\rho l}{\\pi d^2} \\implies R \\propto \frac{1}{d^2}$.\nIf diameter is doubled ($d' = 2d$):\n$R' = \frac{4\\rho l}{\\pi (2d)^2} = \frac{1}{4} R$.\nThe new resistance becomes one-fourth ($\frac{1}{4}$) of its initial value."
        ],
        keyTakeaway: "Resistance scales inversely with the square of diameter: doubling diameter cuts resistance to 1/4th.",
        examinerTrap: "Forgetting to convert mm to meters ($10^{-3}$) causes an error of $10^6$ in the final answer."
      }
    ]
  },
  {
    id: "sci_c11_t2",
    chapterNo: 11,
    chapterName: "Electricity",
    discipline: "Physics",
    topicTitle: "Series & Parallel Combinations, Joule's Heating & Power Calculations",
    ncertSection: "NCERT Chapter 11, Sections 11.4, 11.5 & 11.6 (Pages 209–220)",
    ncertSummary: "In series circuits, electric current is identical through all components, while potential difference divides ($R_s = R_1 + R_2$). In parallel circuits, potential difference across each branch is identical, while current divides ($1/R_p = 1/R_1 + 1/R_2$). Joule's Heating Law states that heat produced in a resistor is proportional to the square of current, resistance, and time ($H = I^2Rt$). Commercial electric energy is billed in kilowatt-hours (kWh).",
    corePrinciples: [
      "Series rules: $I$ constant, $V = V_1 + V_2 + V_3$. Equivalent resistance $R_s$ is greater than the greatest individual resistance.",
      "Parallel rules: $V$ constant, $I = I_1 + I_2 + I_3$. Equivalent resistance $R_p$ is less than the smallest individual resistance.",
      "Advantages of Parallel in domestic wiring: (1) Each appliance receives full line voltage (220 V), (2) If one appliance fails or is turned off, others continue operating independently, (3) Each appliance can have its own dedicated switch and fuse, (4) Overall circuit resistance is low, allowing adequate current draw.",
      "Joule's Heating Effect: $H = I^2Rt = VIt = \frac{V^2}{R}t$.",
      "Electric Power expressions: $P = VI = I^2R = \frac{V^2}{R}$. SI unit is Watt (W) = 1 J/s.",
      "Commercial unit of energy: $1\\text{ unit} = 1\\text{ kilowatt-hour (kWh)} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ Joules}$."
    ],
    keyReactionsOrFormulas: [
      { name: "Series Equivalent Resistance", formula: "R_s = R_1 + R_2 + R_3", note: "Current is identical through each resistor." },
      { name: "Parallel Equivalent Resistance", formula: "\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} \quad \\left[\\text{For two: } R_p = \frac{R_1 R_2}{R_1 + R_2}\\right]", note: "Voltage is identical across each branch." },
      { name: "Commercial Energy Billing", formula: "E(\\text{kWh}) = \frac{P(\\text{W}) \\times t(\\text{hours})}{1000}, \quad \\text{Cost} = E \\times \\text{Rate}", note: "Remember to convert time into hours and power into kilowatts." }
    ],
    commonMistakesWarning: "In power calculations for series circuits where current is constant, use $P = I^2R$. For parallel circuits where voltage is constant, use $P = V^2/R$. Using the wrong formula causes inverted proportionalities.",
    examples: [
      {
        id: "ex_c11_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is an ammeter always connected in series and a voltmeter in parallel in an electrical circuit?",
        solutionSteps: [
          "An ammeter measures the total electric current flowing through a circuit; connecting it in series ensures all circuit current passes through it. It has nearly zero internal resistance so it does not alter the circuit current.",
          "A voltmeter measures potential difference between two distinct points; connecting it in parallel allows it to sample voltage across the component. It has extremely high internal resistance so it draws negligible current from the main line."
        ],
        keyTakeaway: "Ammeter = low resistance in series; Voltmeter = high resistance in parallel.",
        examinerTrap: "Do not mix them up. Connecting an ammeter in parallel causes a catastrophic short circuit."
      },
      {
        id: "ex_c11_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "An electric bulb rated 220 V, 100 W is operated on 110 V. Calculate:\n(a) The resistance of the filament.\n(b) The actual power consumed at 110 V.",
        solutionSteps: [
          "(a) Resistance is an invariant physical property of the filament:\nFormula: $P = \frac{V^2}{R} \\implies R = \frac{V^2}{P}$.\n$R = \frac{(220)^2}{100} = \frac{48400}{100} = 484\;\\Omega$.",
          "(b) Power consumed when operated at $V' = 110\\text{ V}$:\n$P' = \frac{(V')^2}{R} = \frac{(110)^2}{484} = \frac{12100}{484} = 25\\text{ Watts}$.\nNotice: Halving the voltage reduces power to one-fourth (25 W), because $P \\propto V^2$."
        ],
        keyTakeaway: "Resistance is calculated from rated specs ($R = V^2/P$); operating at half voltage quarters power ($25\\text{ W}$).",
        examinerTrap: "Assuming power halves to 50 W. Power is proportional to $V^2$, so halving voltage yields $100/4 = 25\\text{ W}$."
      },
      {
        id: "ex_c11_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        question: "A household uses the following electrical appliances daily:\n(i) A refrigerator rated 400 W for 10 hours/day.\n(ii) Two electric fans rated 80 W each for 12 hours/day.\n(iii) Six LED bulbs rated 10 W each for 6 hours/day.\nCalculate the total electricity bill for a month of 30 days if the cost of electrical energy is ₹6.00 per unit (kWh).",
        solutionSteps: [
          "Step 1: Calculate daily energy consumption for each appliance:\n- Refrigerator: $E_1 = 400\\text{ W} \\times 10\\text{ h} = 4000\\text{ Wh} = 4.0\\text{ kWh}$.\n- Two Fans: $E_2 = (2 \\times 80\\text{ W}) \\times 12\\text{ h} = 160\\text{ W} \\times 12\\text{ h} = 1920\\text{ Wh} = 1.92\\text{ kWh}$.\n- Six Bulbs: $E_3 = (6 \\times 10\\text{ W}) \\times 6\\text{ h} = 60\\text{ W} \\times 6\\text{ h} = 360\\text{ Wh} = 0.36\\text{ kWh}$.",
          "Step 2: Total energy consumed per day:\n$E_{\\text{daily}} = 4.0 + 1.92 + 0.36 = 6.28\\text{ kWh (units)}$.",
          "Step 3: Total energy consumed in 30 days:\n$E_{\\text{monthly}} = 6.28\\text{ kWh/day} \\times 30\\text{ days} = 188.4\\text{ kWh (units)}$.",
          "Step 4: Total Cost Calculation:\n$\\text{Bill} = 188.4\\text{ units} \\times ₹6.00/\\text{unit} = ₹1,130.40$."
        ],
        keyTakeaway: "Total Units = $\\sum (P \\times t) / 1000$; monthly bill = monthly units $\\times$ rate per unit.",
        examinerTrap: "Forgetting to multiply by the number of appliances (2 fans, 6 bulbs) or forgetting to convert Wh to kWh."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 12: MAGNETIC EFFECTS OF ELECTRIC CURRENT (PHYSICS)
  // =======================================================================
  {
    id: "sci_c12_t1",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    discipline: "Physics",
    topicTitle: "Magnetic Field Lines, Solenoids, Fleming's Left-Hand Rule & Domestic Wiring",
    ncertSection: "NCERT Chapter 12, Sections 12.1 to 12.5 (Pages 223–238)",
    ncertSummary: "An electric current produces a magnetic field in its surrounding space (Oersted's discovery). Magnetic field lines emerge from the North pole and merge at the South pole outside a magnet, forming closed concentric loops. A solenoid behaves like a bar magnet. A current-carrying conductor in an external magnetic field experiences a mechanical force whose direction is given by Fleming's Left-Hand Rule.",
    corePrinciples: [
      "Properties of Magnetic Field Lines: (1) Emerge from North pole and enter South pole externally (directed S to N inside magnet), (2) Form continuous closed loops, (3) Degree of closeness indicates field strength (crowded at poles = strongest), (4) Two magnetic field lines NEVER intersect (if they did, a compass needle would point in two directions simultaneously at the intersection point, which is physically impossible).",
      "Right-Hand Thumb Rule (Straight conductor): Point right thumb in current direction; curled fingers give concentric magnetic field lines direction.",
      "Solenoid: A coil of many circular turns of insulated copper wire wrapped closely in cylindrical shape. Produces a uniform magnetic field inside (parallel straight lines). Used to magnetize soft iron core, creating an Electromagnet.",
      "Fleming's Left-Hand Rule: Stretch Thumb, Forefinger, and Middle finger mutually perpendicular: Forefinger = Magnetic Field (B); Middle finger = Current (I); Thumb = Direction of Force / Motion (F). [Mnemonic: Father, Mother, Child = Force, Magnetic Field, Current].",
      "Domestic Wiring: Live wire (Red/Brown, 220 V), Neutral wire (Black/Blue, 0 V), Earth wire (Green/Yellow). Earth wire provides a low-resistance path to ground, protecting users from electric shocks if insulation fails."
    ],
    keyReactionsOrFormulas: [
      { name: "Magnetic Force on Conductor", formula: "F = B I l \\sin\theta", note: "Force is maximum when conductor is perpendicular (90°) to magnetic field lines." },
      { name: "Solenoid Field Strength", formula: "B \\propto n \cdot I", note: "Directly proportional to number of turns per unit length (n) and current magnitude (I)." }
    ],
    commonMistakesWarning: "Students confuse Fleming's Left-Hand Rule (used for electric motor / force on conductor) with Right-Hand Rule. Remember: Left hand is for Force on a current conductor!",
    examples: [
      {
        id: "ex_c12_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why do two magnetic field lines never intersect each other?",
        solutionSteps: [
          "The tangent to a magnetic field line at any point gives the direction of the magnetic field at that specific point.",
          "If two lines intersected, it would imply that at the single point of intersection, the compass needle would have to point in two different directions simultaneously, which is impossible."
        ],
        keyTakeaway: "Field line intersection implies two directions of magnetic field at one point, which is impossible.",
        examinerTrap: "Answer must clearly mention the compass needle / direction of magnetic field."
      },
      {
        id: "ex_c12_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "What is a solenoid? Draw the pattern of magnetic field lines through and around a current-carrying solenoid. State two ways to increase its magnetic strength.",
        solutionSteps: [
          "Definition: A solenoid is a long coil containing a large number of close turns of insulated copper wire wrapped in the shape of a cylinder.",
          "Field pattern description: Outside the solenoid, field lines emerge from North and enter South, resembling a bar magnet. Inside the core, field lines are parallel, straight, and equidistant, demonstrating a completely UNIFORM magnetic field.",
          "Two ways to increase strength:\n(1) Increase the number of turns (n) of copper wire in the coil.\n(2) Increase the magnitude of electric current (I) flowing through the solenoid.\n(3) Insert a soft iron core inside the solenoid to create a powerful electromagnet."
        ],
        keyTakeaway: "Solenoid interior field is uniform and parallel; strength $\\propto$ number of turns and current.",
        examinerTrap: "Drawing curved field lines inside the solenoid. Inside the solenoid, lines MUST be straight and parallel."
      },
      {
        id: "ex_c12_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "An alpha particle (positively charged Helium nucleus, He²⁺) projected towards the West is deflected towards the North by a magnetic field. Determine the direction of the magnetic field using Fleming's Left-Hand Rule.",
        solutionSteps: [
          "Step 1: Identify current direction. Current flows in the direction of motion of positive charges. Since the positively charged alpha particle moves towards the WEST, the conventional current (I) is towards the WEST.",
          "Step 2: Identify force direction. The particle is deflected towards the North, so the magnetic force (F) acting on it is directed towards the NORTH.",
          "Step 3: Apply Fleming's Left-Hand Rule:\n- Align Middle finger in the direction of Current (pointing West).\n- Align Thumb in the direction of Force (pointing North).\n- Observe Forefinger (Magnetic Field B): It naturally points straight UPWARD (out of the plane of the page).",
          "Conclusion: The magnetic field is directed UPWARDS (vertically upwards / out of the page)."
        ],
        keyTakeaway: "Positive charge motion = current direction. Fleming's Left-Hand Rule: Current West + Force North ⟹ Field Upwards.",
        examinerTrap: "If the question had mentioned an ELECTRON (negative charge), current direction would be OPPOSITE to motion."
      }
    ]
  },
  {
    id: "sci_c12_t2",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    discipline: "Physics",
    topicTitle: "Force on Current Conductor & Domestic Circuit Safety (Earthing, Fuse, Overloading)",
    ncertSection: "NCERT Chapter 12, Sections 12.3 & 12.5 (Pages 228–238)",
    ncertSummary: "A current-carrying conductor placed in a magnetic field experiences a mechanical force, maximized when the wire is perpendicular to the field. Domestic electric power enters houses at 220 V, 50 Hz AC via Live and Neutral wires. Safety features protect from Overloading (too many high-power appliances on one socket), Short-circuiting (live and neutral wires touching directly), and Electric Shocks (Earthing wire connected to metal casing of appliances).",
    corePrinciples: [
      "Domestic AC Voltage in India: $220\\text{ V}$, frequency $50\\text{ Hz}$ (alternates direction 100 times per second).",
      "Wire Color Coding:\n- Live wire: Red or Brown (carries 220 V high potential).\n- Neutral wire: Black or Blue (zero potential, returns current).\n- Earth wire: Green or Yellow (safety grounding, zero potential).",
      "Short Circuiting: Occurs when insulation of wires is damaged and Live wire comes in direct physical contact with Neutral wire. Circuit resistance drops to near zero, causing a massive surge of current and extreme heat, leading to electrical fires.",
      "Overloading: Occurs when too many high-power appliances (e.g. AC, geyser, heater) are switched on simultaneously on a single electrical socket, drawing current beyond the safe carrying limit of the wire.",
      "Electric Fuse: A safety device made of a lead-tin alloy with a low melting point. Placed in series with the LIVE wire. If excessive current flows, Joule's heating melts the fuse wire, breaking the circuit instantly.",
      "Earthing: The green earth wire connects the metallic casing of high-power appliances (refrigerator, toaster, iron) to a deep copper plate buried in ground. If an appliance's live wire touches its metallic body, current takes the low-resistance path to earth, tripping the fuse and protecting the user from a lethal electric shock."
    ],
    keyReactionsOrFormulas: [
      { name: "Fuse Rating Equation", formula: "I_{\\text{rated}} = \frac{P}{V} \\implies \\text{Fuse rating chosen just above } I_{\\text{rated}}", note: "For 1 kW, 220 V appliance: I = 1000/220 = 4.54 A ⟹ 5 A fuse used." },
      { name: "Short Circuit Resistance", formula: "R \\to 0 \\implies I = \frac{V}{R} \\to \\infty \\implies H = I^2Rt \\text{ surges violently}", note: "Causes fires without an operating fuse." }
    ],
    commonMistakesWarning: "An electric fuse must ALWAYS be connected to the LIVE wire. If connected to the neutral wire, the fuse may blow during a fault, but the appliance will still remain at lethal 220 V high potential!",
    examples: [
      {
        id: "ex_c12_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is an electric fuse always connected in series with the Live wire and not with the Neutral wire?",
        solutionSteps: [
          "The Live wire carries high electric potential (220 V), while the Neutral wire is at zero potential.",
          "Connecting the fuse in the Live wire ensures that when an overcurrent melts the fuse wire, the high-voltage supply is completely severed from the appliance, eliminating risk of shock. If connected in the neutral wire, the appliance would still remain energized at 220 V even after the fuse blows."
        ],
        keyTakeaway: "Fuse in live wire severs high-voltage 220 V supply completely during an electrical fault.",
        examinerTrap: "Saying 'it doesn't matter'. Connecting fuse in neutral leaves the appliance live and dangerous."
      },
      {
        id: "ex_c12_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "What is the function of an Earth wire? Why is it necessary to earth metallic appliances like electric irons and refrigerators?",
        solutionSteps: [
          "Function of Earth Wire: The earth wire has a green/yellow insulation and provides an extremely low-resistance conducting path from the appliance's metal casing directly to a metal plate buried deep in the ground.",
          "Why metallic appliances must be earthed: In appliances with metal bodies (electric iron, refrigerator, toaster, washing machine), there is a risk that internal insulation may wear out and the live wire might touch the metal casing.",
          "If earthed: Any leakage current flows harmlessly down the earth wire into the ground rather than through a human body touching the appliance. Furthermore, the massive current surge through the low-resistance ground wire immediately melts the fuse, safely cutting off power."
        ],
        keyTakeaway: "Earth wire safely routes fault current into ground and trips the fuse, preventing lethal electrocution.",
        examinerTrap: "Saying earth wire absorbs extra electricity. Earth wire provides a safe low-resistance drain route."
      },
      {
        id: "ex_c12_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "An electric oven rated at 2 kW is operated in a domestic circuit of 220 V that has a current rating of 5 A.\n(a) What is the current drawn by the oven?\n(b) What will happen in the circuit? Explain with calculations.\n(c) What corrective measure should be taken to operate this appliance safely?",
        solutionSteps: [
          "(a) Current calculation:\nGiven Power $P = 2\\text{ kW} = 2000\\text{ W}$.\nVoltage $V = 220\\text{ V}$.\nFormula: $P = VI ⟹ I = \frac{P}{V} = \frac{2000}{220} = 9.09\\text{ Amperes}$.",
          "(b) What happens:\nThe current drawn by the oven ($9.09\\text{ A}$) substantially exceeds the maximum safe current rating of the circuit fuse ($5\\text{ A}$).\nBecause $I_{\\text{drawn}} > I_{\\text{fuse}}$, excessive Joule's heating will melt the 5 A fuse wire, and the circuit will trip and break immediately to prevent overloading and wire burning.",
          "(c) Corrective Measure:\nHigh-power heating appliances drawing large currents must never be operated on a 5 A light/fan circuit. The electric oven must be connected to a dedicated high-power 15 A domestic power circuit with a properly rated 15 A fuse and heavy-gauge wiring."
        ],
        keyTakeaway: "$2\\text{ kW}$ at $220\\text{ V}$ draws $9.09\\text{ A}$, which blows a $5\\text{ A}$ fuse. High-power heating devices require a $15\\text{ A}$ power circuit.",
        examinerTrap: "Forgetting to convert kW to Watts ($2000\\text{ W}$). Writing $I = 2/220$ yields completely wrong numerical answers."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 13: OUR ENVIRONMENT (ECOLOGY)
  // =======================================================================
  {
    id: "sci_c13_t1",
    chapterNo: 13,
    chapterName: "Our Environment",
    discipline: "Natural Resources",
    topicTitle: "Food Chains, 10% Energy Transfer Law & Biological Magnification",
    ncertSection: "NCERT Chapter 13, Sections 13.1 & 13.2 (Pages 241–248)",
    ncertSummary: "An ecosystem comprises biotic organisms (producers, consumers, decomposers) and abiotic physical factors (temperature, soil, sunlight). Food chains show unidirectional transfer of food energy. According to Lindeman's 10% Law, only 10% of energy is transferred to the next trophic level; 90% is lost as heat, digestion, and life activities. Toxic non-biodegradable pesticides accumulate in increasing concentrations at successive trophic levels (Biological Magnification), peaking at humans (top carnivores).",
    corePrinciples: [
      "10% Law of Energy: $E_{\\text{next}} = 0.10 \\times E_{\\text{current}}$. Because energy loss is so high, food chains rarely exceed 4 or 5 trophic levels.",
      "Energy flow is strictly UNIDIRECTIONAL: Solar energy captured by autotrophs never reverts back to the sun; energy passed to herbivores cannot be re-captured by producers.",
      "Biological Magnification: Progressive accumulation of non-biodegradable chemicals (e.g. DDT) per unit biomass at each trophic level. Top consumers have the maximum concentration.",
      "Ozone Layer ($O_3$) Depletion: Stratospheric ozone shields earth from harmful UV-B radiation (which causes skin cancer, cataracts, immune suppression). Ozone forms via UV photolysis of $O_2$: $O_2 \\xrightarrow{UV} O + O$; $O + O_2 ⟶ O_3$. Chlorofluorocarbons (CFCs) release chlorine radicals that destroy thousands of ozone molecules. UNEP frozen CFC production in 1987 (Montreal Protocol)."
    ],
    keyReactionsOrFormulas: [
      { name: "Ozone Formation in Stratosphere", formula: "O₂ —[High-energy UV]⟶ O + O;  O + O₂ ⟶ O₃ (Ozone)", note: "Ozone is a deadly poison at ground level, but life-saving in stratosphere." },
      { name: "Lindeman's 10% Law", formula: "\\text{Energy at Level } (n+1) = \\text{Energy at Level } n \\times 0.10", note: "Remaining 90% lost to environment as heat and metabolic maintenance." }
    ],
    commonMistakesWarning: "In energy calculations: producers absorb only 1% of total sunlight falling on their leaves! Do not apply 10% between Sun and Producer. Apply 1% from Sun to Plants, then 10% between all subsequent trophic levels.",
    examples: [
      {
        id: "ex_c13_1",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why is the flow of energy in an ecosystem always unidirectional?",
        solutionSteps: [
          "Solar energy captured by green autotrophs (producers) cannot revert back to the sun.",
          "Energy that passes from autotrophs to herbivores and carnivores is dissipated as metabolic heat and cannot be returned to lower trophic levels.",
          "Energy moves progressively forward from lower to higher trophic levels and is lost as environmental heat, making the flow strictly one-way."
        ],
        keyTakeaway: "Dissipated heat cannot be re-harnessed by organisms; energy flow is strictly irreversible and one-way.",
        examinerTrap: "Do not confuse energy flow (unidirectional) with nutrient/mineral cycling (cyclic)."
      },
      {
        id: "ex_c13_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "If 20,000 J of solar energy falls on green plants in a terrestrial ecosystem, calculate the energy available to the lion in the following food chain: Plants ⟶ Deer ⟶ Lion.",
        solutionSteps: [
          "Step 1 (Sun to Plants): Terrestrial plants capture only about 1% of the solar energy that strikes their leaves:\n$\\text{Energy captured by Plants} = 1\% \\text{ of } 20,000\\text{ J} = \frac{1}{100} \\times 20,000 = 200\\text{ Joules}$.",
          "Step 2 (Plants to Deer): According to Lindeman's 10% Law, 10% of plant energy is transferred to the primary consumer (deer):\n$\\text{Energy available to Deer} = 10\% \\text{ of } 200\\text{ J} = 0.10 \\times 200 = 20\\text{ Joules}$.",
          "Step 3 (Deer to Lion): 10% of deer energy is transferred to secondary consumer (lion):\n$\\text{Energy available to Lion} = 10\% \\text{ of } 20\\text{ J} = 0.10 \\times 20 = 2\\text{ Joules}$.",
          "Final Answer: The lion receives 2 Joules of energy."
        ],
        keyTakeaway: "Sun to Plants = 1%; Plants to Deer = 10% of 200 = 20 J; Deer to Lion = 10% of 20 = 2 J.",
        examinerTrap: "Applying 10% to the sun's energy. Sun to plant is ONLY 1%! Applying 10% results in a 10x error (20 J instead of 2 J)."
      },
      {
        id: "ex_c13_3",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "A pesticide was sprayed in a pond to eliminate mosquito larvae. A food chain exists in the pond: Phytoplankton ⟶ Zooplankton ⟶ Small Fish ⟶ Large Bird (Hawk).\n(a) Which organism will accumulate the highest concentration of the pesticide? Name this biological phenomenon.\n(b) Why do non-biodegradable pesticides build up in such alarming quantities at higher trophic levels?\n(c) What measures are adopted globally to curb stratospheric ozone layer depletion?",
        solutionSteps: [
          "(a) Highest concentration: The Large Bird (Hawk / top carnivore). Phenomenon: Biological Magnification (Biomagnification).",
          "(b) Non-biodegradable substances cannot be metabolized, broken down, or excreted by living organisms. Because each organism consumes many individuals from the lower trophic level throughout its lifetime, the concentration of toxic chemical per unit body mass progressively multiplies at each successive trophic step.",
          "(c) Ozone protection measures: In 1987, the United Nations Environment Programme (UNEP) forged the historic Montreal Protocol, freezing the worldwide manufacturing and emissions of chlorofluorocarbons (CFCs) at 1986 levels and mandating ozone-safe hydrofluorocarbon alternatives for refrigerators and air conditioners."
        ],
        keyTakeaway: "Biological magnification peaks at top carnivores because non-biodegradables cannot be excreted.",
        examinerTrap: "Do not write that phytoplankton have the highest concentration. Top consumer (Hawk) has maximum concentration."
      }
    ]
  },
  {
    id: "sci_c13_t2",
    chapterNo: 13,
    chapterName: "Our Environment",
    discipline: "Natural Resources",
    topicTitle: "Ozone Layer Depletion, Montreal Protocol & Scientific Waste Management",
    ncertSection: "NCERT Chapter 13, Section 13.3 (Pages 246–250)",
    ncertSummary: "The ozone layer ($O_3$) in the stratosphere absorbs lethal ultraviolet (UV) radiation from sunlight. Its depletion was driven by synthetic chlorofluorocarbons (CFCs) used in refrigerators and fire extinguishers. Waste management classifies garbage into Biodegradable (decomposed by biological enzymes into harmless minerals) and Non-Biodegradable (cannot be degraded, causing long-term pollution). Methods include composting, biogas generation, recycling, and sanitary landfills.",
    corePrinciples: [
      "Ozone Photochemistry: High-energy UV splits molecular oxygen into free oxygen atoms: $O_2 \\xrightarrow{UV} O + O$. Free oxygen atom combines with molecular oxygen to form ozone: $O + O_2 ⟶ O_3$.",
      "CFC Destruction Cycle: In the stratosphere, UV radiation splits CFCs, releasing active Chlorine (Cl) free radicals. A single chlorine radical can catalytically destroy over 100,000 ozone molecules: $Cl + O_3 ⟶ ClO + O_2$.",
      "Montreal Protocol 1987: Historic treaty orchestrated by the UNEP that successfully froze and phased out CFC production worldwide, allowing the ozone layer to recover.",
      "Biodegradable vs Non-Biodegradable:\n- Biodegradable: Plant peelings, paper, animal dung, cotton cloth. Can be broken down into simple harmless substances by saprophytic bacteria and fungi.\n- Non-Biodegradable: Plastics, DDT, synthetic pesticides, glass, metal cans. Microorganisms lack specific enzymes to cleave their chemical bonds, causing persistent soil and water toxicity.",
      "Waste Management Best Practices:\n- Segregation at source (green bin for wet biodegradable, blue bin for dry recyclable).\n- Composting and vermicomposting for organic kitchen waste.\n- Biogas plants (anaerobic digestion generates methane fuel and rich manure).\n- Recycling of plastics, glass, and metal scrap."
    ],
    keyReactionsOrFormulas: [
      { name: "Ozone Photolytic Synthesis", formula: "O_2 \\xrightarrow{\\text{UV}} O + O; \quad O + O_2 ⟶ O_3", note: "Deadly poison at ground level, but shield in stratosphere." },
      { name: "Catalytic Ozone Destruction", formula: "\\text{CFC} \\xrightarrow{\\text{UV}} \\text{Cl}^\\bullet; \quad \\text{Cl}^\\bullet + O_3 ⟶ \\text{ClO}^\\bullet + O_2", note: "Chlorine acts as a catalyst destroying thousands of O₃ molecules." }
    ],
    commonMistakesWarning: "Students confuse Ozone Depletion with Global Warming. Ozone depletion is caused by CFCs and lets in harmful UV rays (causing skin cancer/cataracts). Global warming is caused by greenhouse gases (CO₂, CH₄) trapping infrared heat.",
    examples: [
      {
        id: "ex_c13_4",
        level: "Level 1 (1M Foundation)",
        marks: 1,
        question: "Why can bacteria not decompose plastic bags and synthetic polythene?",
        solutionSteps: [
          "Enzymes produced by decomposers (bacteria and fungi) are highly substrate-specific in their action.",
          "Synthetic plastics have strong man-made polymer bonds that natural microbial enzymes do not recognize and cannot cleave, leaving plastics non-biodegradable and persistent in the environment."
        ],
        keyTakeaway: "Decomposer enzymes are strictly substrate-specific and cannot cleave synthetic plastic bonds.",
        examinerTrap: "Writing 'plastics are too hard'. The correct reason is enzyme substrate-specificity."
      },
      {
        id: "ex_c13_5",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        question: "How is ozone formed in the upper atmosphere? Why was ozone depletion a major global concern, and what step was taken to arrest it?",
        solutionSteps: [
          "Ozone Formation:\n(1) High-energy UV radiation splits molecular oxygen into free oxygen atoms: $O_2 \\xrightarrow{UV} O + O$.\n(2) These nascent oxygen atoms are highly reactive and combine with molecular oxygen to form ozone: $O + O_2 ⟶ O_3$.",
          "Why Depletion was a Concern: The stratospheric ozone layer shields earth from solar UV radiation. Depletion allows harmful UV-B rays to penetrate to the surface, causing skin cancer, cataracts in eyes, and destruction of phytoplankton in oceans.",
          "Global Step Taken: In 1987, the United Nations Environment Programme (UNEP) succeeded in forging the Montreal Protocol, which legally froze and phased out the worldwide manufacture of ozone-depleting Chlorofluorocarbons (CFCs)."
        ],
        keyTakeaway: "Ozone forms via UV photolysis ($O + O_2 ⟶ O_3$); Montreal Protocol 1987 froze CFCs to protect human health from UV radiation.",
        examinerTrap: "Forgetting to write both chemical equations for ozone formation ($O_2 ⟶ O + O$ and $O + O_2 ⟶ O_3$)."
      },
      {
        id: "ex_c13_6",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 4,
        question: "Suggest four scientifically sound methods for the safe disposal of non-biodegradable municipal solid waste in modern cities.",
        solutionSteps: [
          "(1) Segregation at Source: Mandate household segregation of garbage into biodegradable (wet organic) and non-biodegradable (dry recyclable) waste to prevent cross-contamination.",
          "(2) Industrial Recycling: Mechanically sort and recycle waste materials such as plastic bottles (PET), aluminium cans, glass containers, and paper to reprocess them into new commercial products, conserving virgin raw materials.",
          "(3) Incineration at High Temperatures: Non-recyclable, hazardous hospital and chemical waste should be incinerated in controlled high-temperature closed furnaces (over 1000°C) with scrubbers to reduce volume to harmless ash without releasing toxic dioxins.",
          "(4) Sanitary Landfills: Residues that cannot be recycled are compacted and spread in engineered sanitary landfills lined with impermeable geotextile clay liners to prevent toxic leachate from seeping into and contaminating underground groundwater tables."
        ],
        keyTakeaway: "Modern waste management relies on source segregation, material recycling, high-temp incineration, and engineered sanitary landfills.",
        examinerTrap: "Suggesting open burning of plastic waste. Open burning releases toxic carcinogenic dioxins and is illegal."
      }
    ]
  }
];
