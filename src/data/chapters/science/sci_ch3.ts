import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH3_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c3_q1",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 1,
    type: "MCQ",
    question: "Which of the following metals melts when kept on the palm of your hand due to an exceptionally low melting point?\n(a) Magnesium\n(b) Aluminium\n(c) Gallium\n(d) Sodium",
    options: [
      "Magnesium",
      "Aluminium",
      "Gallium",
      "Sodium"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Gallium (and Cesium).",
    explanation: "Gallium (Ga) and Cesium (Cs) have very low melting points (around 30°C / 303 K). The normal human body temperature (~37°C) supplies sufficient heat to melt them into liquid state in the palm.",
    examinerNote: "Mercury is liquid at room temperature (25°C), while Gallium and Cesium are solids that melt at body temperature.",
    source: "NCERT Class 10 Page 40"
  },
  {
    id: "sci_c3_q2",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 1,
    type: "MCQ",
    question: "An element reacts with oxygen to give a compound with a high melting point. This compound is also highly soluble in water. The element is likely to be:\n(a) Calcium\n(b) Carbon\n(c) Silicon\n(d) Iron",
    options: [
      "Calcium",
      "Carbon",
      "Silicon",
      "Iron"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Calcium.",
    explanation: "Calcium reacts with oxygen to form calcium oxide (CaO), which is an ionic compound with a high melting point (2613°C) and dissolves vigorously in water to form calcium hydroxide [Ca(OH)₂]. Carbon forms CO₂ (gas), Silicon forms SiO₂ (insoluble), and Iron forms insoluble oxides.",
    formula: "2Ca + O₂ ⟶ 2CaO;  CaO + H₂O ⟶ Ca(OH)₂",
    examinerNote: "Classic NCERT textbook question. High MP + Water solubility points specifically to CaO.",
    source: "NCERT Chapter 3 Exercise Question 1"
  },
  {
    id: "sci_c3_q3",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 1,
    type: "MCQ",
    question: "Food cans are coated with tin and not with zinc because:\n(a) Zinc is costlier than tin\n(b) Zinc has a higher melting point than tin\n(c) Zinc is more reactive than tin\n(d) Zinc is less reactive than tin",
    options: [
      "Zinc is costlier than tin",
      "Zinc has a higher melting point than tin",
      "Zinc is more reactive than tin",
      "Zinc is less reactive than tin"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Zinc is more reactive than tin.",
    explanation: "Zinc lies above tin in the metal reactivity series. If zinc were used to coat food cans, it would readily react with organic food acids (like citric and acetic acids) to produce toxic, poisonous zinc salts. Tin is much less reactive and food-safe.",
    examinerNote: "Reactivity hierarchy is the scientific explanation; cost is not the chemical reason.",
    source: "CBSE 2023 Board Question"
  },
  {
    id: "sci_c3_q4",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Magnesium metal reacts with very dilute nitric acid (HNO₃) to liberate hydrogen gas.\nReason (R): Nitric acid is a strong oxidizing agent that oxidizes hydrogen to water in most metals, but magnesium and manganese are exceptions.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    explanation: "Dilute HNO₃ oxidizes H₂ to H₂O with most metals. Only very dilute (~1%) HNO₃ reacts with Magnesium (Mg) and Manganese (Mn) to liberate H₂ gas because of their powerful electropositive reducing strength.",
    formula: "Mg(s) + 2HNO₃(aq) [Very Dilute] ⟶ Mg(NO₃)₂(aq) + H₂(g)↑",
    examinerNote: "High recurrence board question. Remember the twin exceptions: Mg and Mn.",
    source: "Arihant All-In-One Chapter 3"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c3_q5",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 2,
    type: "SA",
    question: "What are amphoteric oxides? Give two examples of amphoteric oxides and write a balanced equation for the reaction of one of them with sodium hydroxide.",
    answer: "Amphoteric oxides are metal oxides that exhibit both acidic and basic characteristics, reacting with acids as well as bases to produce salt and water. Examples: Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO).\nEquation with NaOH:\nAl₂O₃(s) + 2NaOH(aq) ⟶ 2NaAlO₂(aq) [Sodium Aluminate] + H₂O(l).",
    steps: [
      "Step 1: Define amphoteric oxide.",
      "Step 2: Name two examples (Al₂O₃, ZnO).",
      "Step 3: Write balanced chemical equation with sodium hydroxide forming sodium aluminate."
    ],
    explanation: "Al₂O₃ behaves as an acid when reacting with strong base NaOH, yielding sodium aluminate.",
    formula: "Al₂O₃ + 2NaOH ⟶ 2NaAlO₂ + H₂O",
    examinerNote: "Ensure formula for sodium aluminate is written as NaAlO₂ (not Na₂AlO₃).",
    source: "NCERT Class 10 Page 41"
  },
  {
    id: "sci_c3_q6",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 2,
    type: "SA",
    question: "Give reasons for the following:\n(a) Sodium, potassium, and lithium are stored under kerosene oil.\n(b) Aluminium is a highly reactive metal, yet it is used to make cooking utensils.",
    answer: "(a) Sodium, potassium, and lithium are highly electropositive alkali metals that react vigorously with atmospheric oxygen and moisture at room temperature, releasing flammable H₂ that ignites explosively. Storing them under kerosene seals them from air and moisture.\n\n(b) Freshly exposed aluminium quickly reacts with atmospheric oxygen to form a thin, tenacious, and impermeable protective layer of aluminium oxide (Al₂O₃) on its surface. This passive oxide film protects the underlying metal from further corrosion. Moreover, aluminium is lightweight and an excellent conductor of heat.",
    steps: [
      "Part (a): High reactivity with ambient moisture/oxygen + kerosene insulation.",
      "Part (b): Self-protecting passive Al₂O₃ oxide layer + high thermal conductivity."
    ],
    explanation: "The passive Al₂O₃ film makes aluminium chemically stable under cooking conditions.",
    examinerNote: "In part (b), must mention the 'impermeable protective oxide layer of Al₂O₃'.",
    source: "CBSE Board PYQ"
  },
  {
    id: "sci_c3_q7",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 2,
    type: "SA",
    question: "What is an alloy? Name the constituent metals of:\n(a) Brass\n(b) Bronze\n(c) Solder\nState one special property of solder.",
    answer: "An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.\n(a) Brass: Copper (Cu ~70%) + Zinc (Zn ~30%)\n(b) Bronze: Copper (Cu ~90%) + Tin (Sn ~10%)\n(c) Solder: Lead (Pb 50%) + Tin (Sn 50%)\nSpecial property of solder: Exceptionally low melting point, making it ideal for welding electrical wires.",
    steps: [
      "Step 1: Define alloy as homogeneous metallic mixture.",
      "Step 2: List constituent elements for Brass (Cu+Zn), Bronze (Cu+Sn), and Solder (Pb+Sn).",
      "Step 3: State low melting point property of solder."
    ],
    explanation: "Alloying lowers electrical conductivity and melting point while enhancing tensile strength and corrosion resistance.",
    examinerNote: "Common error: confusing Brass (Cu+Zn) with Bronze (Cu+Sn). Remember Bronze has Tin (Sn).",
    source: "NCERT Class 10 Page 54"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c3_q8",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 3,
    type: "SA",
    question: "Explain the Thermite reaction:\n(a) What is the chemical equation for the reaction?\n(b) Why is this reaction called highly exothermic?\n(c) State one major real-world industrial application of this reaction.",
    answer: "(a) Chemical Equation:\nFe₂O₃(s) + 2Al(s) ⟶ 2Fe(l) + Al₂O₃(s) + Enormous Heat.\n\n(b) It is classified as highly exothermic because the displacement of iron by aluminium releases an extraordinary amount of heat energy, causing the iron produced to be in the molten (liquid) state.\n\n(c) Application: The molten iron produced in-situ is poured directly into the gap between broken railway tracks or cracked heavy machine frames to weld them together on-site.",
    steps: [
      "Part (a): Balanced equation of iron(III) oxide with aluminium powder.",
      "Part (b): Note that heat evolved is sufficient to produce iron in liquid state Fe(l).",
      "Part (c): Application: Thermite welding of railway tracks and machine castings."
    ],
    explanation: "Aluminium has a stronger affinity for oxygen than iron, driving a powerful displacement.",
    formula: "Fe₂O₃ + 2Al ⟶ 2Fe + Al₂O₃ + Heat",
    examinerNote: "State Fe(l) as liquid iron; this confirms understanding of the thermite temperature.",
    source: "Educart Science Class 10"
  },
  {
    id: "sci_c3_q9",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 3,
    type: "SA",
    question: "Draw the electron dot structure to show the formation of Sodium Oxide (Na₂O) and Calcium Oxide (CaO). Mention the ions present in each compound.",
    answer: "1. Formation of Sodium Oxide (Na₂O):\n- Na (Z=11): 2, 8, 1 ⟶ Na⁺ + e⁻ (each of two Na atoms loses 1 electron).\n- O (Z=8): 2, 6 + 2e⁻ ⟶ O²⁻ [2, 8] (oxygen gains 2 electrons).\n- Electron Dot Structure: 2 [Na]⁺ [ :Ö: ]²⁻ ⟹ Na₂O.\n- Ions present: Sodium cations (Na⁺) and Oxide anions (O²⁻).\n\n2. Formation of Calcium Oxide (CaO):\n- Ca (Z=20): 2, 8, 8, 2 ⟶ Ca²⁺ + 2e⁻ (calcium loses 2 electrons).\n- O (Z=8): 2, 6 + 2e⁻ ⟶ O²⁻ [2, 8] (oxygen gains 2 electrons).\n- Electron Dot Structure: [Ca]²⁺ [ :Ö: ]²⁻ ⟹ CaO.\n- Ions present: Calcium cations (Ca²⁺) and Oxide anions (O²⁻).",
    steps: [
      "Step 1: Write electronic configurations for Na, Ca, and O.",
      "Step 2: Show electron transfer arrows from metals to oxygen.",
      "Step 3: Write bracketed ionic representations with charges.",
      "Step 4: Explicitly identify the cations and anions."
    ],
    explanation: "Both are ionic electrovalent compounds formed by complete valence electron transfer.",
    examinerNote: "1.5 marks for Na₂O; 1.5 marks for CaO. Always show 8 dots on the oxide anion.",
    source: "CBSE 2024 Board Question"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c3_q10",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 5,
    type: "LA",
    question: "Explain the electrolytic refining of copper with the help of a neat labeled diagram description:\n(a) What substances are used as Anode, Cathode, and Electrolyte?\n(b) Write the chemical reactions taking place at the Anode and Cathode.\n(c) What is 'anode mud' and where does it collect?\n(d) Why does the concentration of copper sulphate in the electrolyte remain constant throughout the process?",
    answer: "(a) Setup:\n- Anode (+ electrode): Thick block of impure blister copper.\n- Cathode (- electrode): Thin strip of pure copper metal.\n- Electrolyte: Acidified aqueous solution of Copper Sulphate (CuSO₄ + a few drops of dil. H₂SO₄).\n\n(b) Electrode Reactions:\n- At Anode (+): Cu(s) [Impure] ⟶ Cu²⁺(aq) + 2e⁻ (Oxidation of copper metal into solution).\n- At Cathode (-): Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) [Pure] (Reduction of copper ions deposited as pure metal).\n\n(c) Anode Mud: The insoluble impurities present in the blister copper (such as gold, silver, platinum) do not dissolve in the electrolyte and settle down at the bottom beneath the anode as an insoluble sludge called 'anode mud'.\n\n(d) Constant Concentration: For every Cu²⁺ ion deposited onto the cathode from the electrolyte, exactly one equivalent Cu²⁺ ion dissolves into the electrolyte from the impure copper anode. Thus, the rate of dissolution equals the rate of deposition, keeping the copper sulphate concentration unchanged.",
    steps: [
      "Step 1: Define Anode (impure), Cathode (pure), and Electrolyte (acidified CuSO₄).",
      "Step 2: Write half-cell reactions at anode and cathode.",
      "Step 3: Define anode mud and identify precious insoluble impurities (Au, Ag).",
      "Step 4: Explain mass-action rate equality that maintains electrolyte concentration."
    ],
    explanation: "Electrolytic refining produces 99.99% pure electrolytic grade copper suitable for electrical wiring.",
    formula: "Anode: Cu ⟶ Cu²⁺ + 2e⁻;  Cathode: Cu²⁺ + 2e⁻ ⟶ Cu",
    examinerNote: "Cathode gains weight; anode decreases in weight. Anode mud collects under anode.",
    source: "CBSE 2023 Board 5-Mark Question"
  },
  {
    id: "sci_c3_q11",
    chapter: 3,
    chapterName: "Metals and Non-metals",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an experiment to extract zinc from its ores, a metallurgical engineer obtained two samples:\n- Ore A: Zinc Blende (ZnS)\n- Ore B: Calamine (ZnCO₃)\nBoth ores are converted to zinc oxide prior to reduction with coke (carbon).\n\n(a) Name the thermal processes used to convert Ore A and Ore B into Zinc Oxide.\n(b) Write balanced chemical equations for the conversion of both Ore A and Ore B.\n(c) Write the reduction equation where zinc oxide is converted into zinc metal using coke.\n(d) Why is it easier to obtain metals from their oxides than from their sulphides or carbonates?",
    answer: "(a) Ore A (ZnS, sulphide) is converted by Roasting (heating in excess air).\nOre B (ZnCO₃, carbonate) is converted by Calcination (heating in limited/absence of air).\n\n(b) Roasting equation for Ore A:\n2ZnS(s) + 3O₂(g) —[Heat]⟶ 2ZnO(s) + 2SO₂(g)↑.\nCalcination equation for Ore B:\nZnCO₃(s) —[Heat]⟶ ZnO(s) + CO₂(g)↑.\n\n(c) Reduction equation:\nZnO(s) + C(s) [Coke] —[Heat]⟶ Zn(s) + CO(g)↑.\n\n(d) Reduction of metal oxides using carbon (coke) or other reducing agents is thermodynamically much easier, more spontaneous, and cheaper compared to reducing sulphides or carbonates directly. Therefore, ores are always first converted to oxides.",
    steps: [
      "Part (a): Identify Roasting for sulphide and Calcination for carbonate.",
      "Part (b): Write balanced roasting and calcination equations.",
      "Part (c): Write carbon reduction reaction producing Zn and CO.",
      "Part (d): Explain thermodynamic ease of reducing oxides compared to sulphides."
    ],
    explanation: "Roasting + Calcination ⟶ Oxide ⟶ Carbon reduction is the classical pyrometallurgy flow.",
    formula: "2ZnS + 3O₂ ⟶ 2ZnO + 2SO₂;  ZnCO₃ ⟶ ZnO + CO₂;  ZnO + C ⟶ Zn + CO",
    examinerNote: "1 mark per sub-part. Ensure state symbols are balanced.",
    source: "PW Sample Paper 2026 / CBSE Case Study"
  }
];
