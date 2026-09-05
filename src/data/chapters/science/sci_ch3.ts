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
  },
  {"id": "sci_c3_q12",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following non-metals is a liquid at room temperature?\n(a) Carbon\n(b) Bromine\n(c) Iodine\n(d) Phosphorus",
    "options": [
      "Carbon",
      "Bromine",
      "Iodine",
      "Phosphorus"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Bromine.",
    "explanation": "Bromine (Br₂) is the only non-metal that exists as a reddish-brown liquid at room temperature. Mercury is the only liquid metal.",
    "examinerNote": "Classic exception question in Class 10 board exam.",
    "source": "NCERT Class 10 Page 38"
  },
  {
    "id": "sci_c3_q13",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following metals catches fire vigorously when exposed to room air or dropped in cold water?\n(a) Iron\n(b) Copper\n(c) Sodium\n(d) Magnesium",
    "options": [
      "Iron",
      "Copper",
      "Sodium",
      "Magnesium"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Sodium (Na).",
    "explanation": "Sodium and potassium have very low ionization energies and react violently with cold water, producing H₂ gas which immediately catches fire due to large exothermic heat.",
    "formula": "2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g) + \\text{Heat}",
    "source": "NCERT Class 10 Page 41"
  },
  {
    "id": "sci_c3_q14",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "An alloy is a homogeneous mixture of:\n(a) Two or more metals, or a metal and a non-metal\n(b) Two non-metals only\n(c) A metal and a metalloid only\n(d) Ionic compounds only",
    "options": [
      "Two or more metals, or a metal and a non-metal",
      "Two non-metals only",
      "A metal and a metalloid only",
      "Ionic compounds only"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Two or more metals, or a metal and a non-metal.",
    "explanation": "An alloy is a solid homogeneous solution prepared by melting the primary metal and dissolving other elements in definite proportions. Example: Steel (Fe + C), Brass (Cu + Zn).",
    "source": "NCERT Class 10 Page 54"
  },
  {
    "id": "sci_c3_q15",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Amalgam is an alloy in which one of the component metals is always:\n(a) Gold\n(b) Silver\n(c) Mercury\n(d) Lead",
    "options": [
      "Gold",
      "Silver",
      "Mercury",
      "Lead"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Mercury.",
    "explanation": "An alloy of any metal with mercury (Hg) is known as an amalgam (e.g., sodium amalgam, dental silver amalgam).",
    "source": "NCERT Class 10 Page 55"
  },
  {
    "id": "sci_c3_q16",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Ionic compounds generally have high melting and boiling points.\nReason (R): A considerable amount of energy is required to break the strong inter-ionic electrostatic forces of attraction.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Oppositely charged cations and anions form a dense three-dimensional ionic lattice held by strong Coulombic attractions, demanding large thermal energy to melt.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c3_q17",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "During electrolytic refining of blister copper, the anode is made of:\n(a) Thin strip of pure copper\n(b) Thick slab of impure copper\n(c) Platinum wire\n(d) Graphite rod",
    "options": [
      "Thin strip of pure copper",
      "Thick slab of impure copper",
      "Platinum wire",
      "Graphite rod"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Thick slab of impure copper.",
    "explanation": "In electrolytic refining, the impure metal slab serves as the anode (+ve electrode) which dissolves into the electrolyte, while a thin pure metal sheet acts as cathode (-ve electrode).",
    "source": "NCERT Class 10 Page 52"
  },
  {
    "id": "sci_c3_q18",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following oxides is an amphoteric oxide?\n(a) Na₂O\n(b) SO₂\n(c) Al₂O₃\n(d) CO₂",
    "options": [
      "Na₂O",
      "SO₂",
      "Al₂O₃",
      "CO₂"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Al₂O₃ (Aluminium oxide).",
    "explanation": "Aluminium oxide and zinc oxide (ZnO) react with both acids and bases to produce salt and water, exhibiting amphoteric properties.",
    "formula": "\\text{Al}_2\\text{O}_3 + 6\\text{HCl} ⟶ 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}",
    "source": "NCERT Class 10 Page 41"
  },
  {
    "id": "sci_c3_q19",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Aqua regia is a freshly prepared corrosive mixture of concentrated hydrochloric acid and concentrated nitric acid in the volumetric ratio of:\n(a) 1 : 3\n(b) 3 : 1\n(c) 2 : 1\n(d) 3 : 2",
    "options": [
      "1 : 3",
      "3 : 1",
      "2 : 1",
      "3 : 2"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 3 : 1 (Conc. HCl : Conc. HNO₃).",
    "explanation": "Aqua regia (royal water) consists of 3 parts conc. HCl and 1 part conc. HNO₃ by volume. It dissolves noble metals like gold and platinum by generating nascent chlorine.",
    "examinerNote": "Common trap: Remember ratio is HCl : HNO₃ = 3 : 1 (not 1 : 3).",
    "source": "NCERT Class 10 Page 44"
  },
  {
    "id": "sci_c3_q20",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "The major ore of mercury is Cinnabar. Its chemical formula is:\n(a) HgO\n(b) HgS\n(c) HgCl₂\n(d) HgSO₄",
    "options": [
      "HgO",
      "HgS",
      "HgCl₂",
      "HgSO₄"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: HgS (Mercuric sulphide).",
    "explanation": "Cinnabar is HgS. When roasted in air, it first oxidizes to mercuric oxide (HgO), which on further heating decomposes into liquid mercury and oxygen.",
    "formula": "2HgS + 3O₂ ⟶ 2HgO + 2SO₂",
    "source": "NCERT Class 10 Page 50"
  },
  {
    "id": "sci_c3_q21",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 1,
    "type": "MCQ",
    "question": "Galvanization is a method of protecting iron from rusting by coating it with a thin layer of:\n(a) Gallium\n(b) Aluminium\n(c) Zinc\n(d) Silver",
    "options": [
      "Gallium",
      "Aluminium",
      "Zinc",
      "Silver"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Zinc.",
    "explanation": "Iron sheets are dipped in molten zinc. Zinc is more reactive than iron and preferentially oxidizes (sacrificial protection), even if the surface coating is scratched.",
    "source": "CBSE 2021, 2023"
  },
  {
    "id": "sci_c3_q22",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "What are amphoteric oxides? Choose the amphoteric oxides from: Na₂O, ZnO, CO₂, Al₂O₃, and SO₂. Write one balanced equation showing amphoteric nature.",
    "answer": "(1) Definition: Metal oxides that react with both acids as well as bases to produce salt and water are called amphoteric oxides.\n\n(2) Selected Amphoteric Oxides: ZnO and Al₂O₃.\n\n(3) Chemical Equations for Al₂O₃:\n- Reacting with Acid: Al₂O₃ + 6HCl ⟶ 2AlCl₃ + 3H₂O\n- Reacting with Base: Al₂O₃ + 2NaOH ⟶ 2NaAlO₂ [Sodium aluminate] + H₂O",
    "formula": "\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} ⟶ 2\\text{NaAlO}_2 + \\text{H}_2\\text{O}",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c3_q23",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "Why do ionic compounds conduct electricity in molten state and in aqueous solution, but not in solid state?",
    "answer": "(1) In Solid State: Ions are held firmly in fixed crystallographic positions by powerful electrostatic forces of attraction. Because ions cannot move, no electrical charge transport occurs, and they act as insulators.\n\n(2) In Molten & Aqueous States: High heat breaks the crystal lattice (molten) or polar water molecules hydrate and separate the ions (aqueous), freeing cations and anions to migrate freely toward opposite electrodes under an electric field.",
    "examinerNote": "Key phrase required: 'free mobile ions are absent in solid state'.",
    "source": "NCERT Class 10 Page 49"
  },
  {
    "id": "sci_c3_q24",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "Differentiate between Roasting and Calcination with one balanced chemical equation for each.",
    "answer": "(1) Roasting: Heating a sulphide ore strongly below its melting point in the PRESENCE OF EXCESS AIR to convert it into metal oxide.\nExample: Zinc blende ore:\n2ZnS(s) + 3O₂(g) —[Heat]⟶ 2ZnO(s) + 2SO₂(g)↑\n\n(2) Calcination: Heating a carbonate or hydrated ore strongly below its melting point in the ABSENCE OR LIMITED SUPPLY OF AIR to convert it into metal oxide.\nExample: Calamine ore:\nZnCO₃(s) —[Heat]⟶ ZnO(s) + CO₂(g)↑",
    "formula": "2\\text{ZnS} + 3\\text{O}_2 ⟶ 2\\text{ZnO} + 2\\text{SO}_2",
    "source": "NCERT Class 10 Page 51"
  },
  {
    "id": "sci_c3_q25",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "Explain why aluminium is a highly reactive metal, yet it is widely used to make cooking utensils and food packaging foil.",
    "answer": "(1) Reason: Aluminium instantly reacts with atmospheric oxygen to form an ultra-thin, highly adherent, and non-porous protective surface film of Aluminium Oxide ($Al_2O_3$).\n\n(2) Protection: This oxide layer is chemically unreactive and acts as an impenetrable shield preventing oxygen, moisture, and food ingredients from contacting the metal underneath. Additionally, aluminium has high thermal conductivity and light weight.",
    "formula": "4Al + 3O₂ ⟶ 2Al₂O₃",
    "source": "NCERT Exercises Ch 3"
  },
  {
    "id": "sci_c3_q26",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "Give reasons for the following observations:\n(a) Platinum, gold, and silver are used to make jewelry.\n(b) Sodium and potassium are stored immersed under kerosene oil.",
    "answer": "(a) Platinum, gold, and silver are noble metals situated at the bottom of the reactivity series. They possess brilliant metallic lustre, high malleability and ductility, and do not corrode, tarnish, or react with air and moisture even after centuries.\n\n(b) Sodium and potassium are exceptionally reactive alkali metals with very low activation energy. In open air, they react vigorously with atmospheric oxygen and moisture, generating sufficient heat to ignite hydrogen gas. Kerosene oil cuts off air and water contact.",
    "source": "CBSE 2021 Board Paper"
  },
  {
    "id": "sci_c3_q27",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 2,
    "type": "SA",
    "question": "What is an alloy? Name the constituent metals in: (a) Brass, (b) Bronze, (c) Solder, (d) Stainless Steel.",
    "answer": "Definition: An alloy is a homogeneous metallic mixture of two or more metals, or a metal and a non-metal, synthesized to enhance mechanical properties.\n\n(a) Brass: Copper (Cu, ~70%) + Zinc (Zn, ~30%)\n(b) Bronze: Copper (Cu, ~90%) + Tin (Sn, ~10%)\n(c) Solder: Lead (Pb, ~50%) + Tin (Sn, ~50%) [Low melting point]\n(d) Stainless Steel: Iron (Fe, ~74%) + Chromium (Cr, ~18%) + Nickel (Ni, ~8%) + Carbon (C, ~0.1–0.5%)",
    "examinerNote": "Solder's low melting point makes it ideal for joining electrical wires.",
    "source": "NCERT Class 10 Page 55"
  },
  {
    "id": "sci_c3_q28",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Show the formation of Magnesium Chloride (MgCl₂) by electron transfer between magnesium and chlorine atoms. State the nature of bonding and write two physical properties of the compound formed.",
    "answer": "(1) Electron Transfer:\n- Magnesium (Z = 12): Electronic configuration = 2, 8, 2. It loses 2 valence electrons to achieve stable octet:\nMg ⟶ Mg²⁺ + 2e⁻\n- Chlorine (Z = 17): Electronic configuration = 2, 8, 7. Two chlorine atoms each gain 1 electron:\n2Cl + 2e⁻ ⟶ 2Cl⁻\n- Ionic Assembly:\nMg²⁺ + 2[ :Cl̈: ]⁻ ⟶ MgCl₂\n\n(2) Nature of Bonding: Electrovalent (Ionic) bond formed by complete electrostatic transfer of electrons from metal to non-metal.\n\n(3) Two Physical Properties:\n- High melting and boiling points due to strong Coulombic inter-ionic forces.\n- Soluble in polar solvents like water, but insoluble in organic solvents (kerosene, petrol).",
    "formula": "\\text{Mg}^{2+} + 2\\text{Cl}^- ⟶ \\text{MgCl}_2",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c3_q29",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Explain the Thermit process:\n(a) What is the Thermit reaction? Write the balanced chemical equation.\n(b) Which substance acts as the reducing agent?\n(c) State one major engineering application of this reaction and explain why the metal is obtained in molten liquid state.",
    "answer": "(a) Thermit Reaction: The reduction of a metal oxide (ferric oxide) by aluminium powder through a highly exothermic displacement reaction:\nFe₂O₃(s) + 2Al(s) —[Ignition]⟶ 2Fe(l) + Al₂O₃(s) + Enormous Heat\n\n(b) Reducing Agent: Aluminium powder (Al), which has an exceptionally high affinity for oxygen.\n\n(c) Engineering Application & Molten State:\n- Application: Used to weld broken railway tracks and repair cracked heavy machinery parts in-situ.\n- Reason for Molten State: The enthalpy of reaction is so massive that the temperature rises above 2500°C (well exceeding the 1538°C melting point of iron), causing pure iron to be produced as a molten white-hot liquid that flows into the crack, welding it permanently upon cooling.",
    "formula": "\\text{Fe}_2\\text{O}_3 + 2\\text{Al} ⟶ 2\\text{Fe}(l) + \\text{Al}_2\\text{O}_3 + \\text{Heat}",
    "examinerNote": "Mention molten iron state Fe(l) due to massive exothermic heat.",
    "source": "NCERT Class 10 Page 51"
  },
  {
    "id": "sci_c3_q30",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Metals positioned in the middle of the reactivity series (like iron, zinc, lead, copper) are usually present as sulphides or carbonates in nature:\n(a) Why is it necessary to convert these sulphide and carbonate ores into metal oxides before reduction?\n(b) Name the two processes used for this conversion and write one balanced equation for each using zinc ores.\n(c) Name a common commercial reducing agent used to reduce zinc oxide to metallic zinc.",
    "answer": "(a) Reason for Oxide Conversion: It is thermodynamically far easier and energy-efficient to reduce a metal oxide to free metal using common reducing agents (like carbon/CO) than it is to reduce metal sulphides or carbonates directly.\n\n(b) Two Processes & Equations:\n- Roasting (for Zinc sulphide ore, Sphalerite):\n2ZnS(s) + 3O₂(g) —[Heat in excess air]⟶ 2ZnO(s) + 2SO₂(g)↑\n- Calcination (for Zinc carbonate ore, Calamine):\nZnCO₃(s) —[Heat in limited air]⟶ ZnO(s) + CO₂(g)↑\n\n(c) Commercial Reducing Agent: Carbon (Coke). Heating zinc oxide with crushed coke reduces it to zinc:\nZnO(s) + C(s) —[1400°C]⟶ Zn(g) + CO(g)↑",
    "formula": "\\text{ZnO} + \\text{C} ⟶ \\text{Zn} + \\text{CO}",
    "source": "NCERT Class 10 Pages 50–51"
  },
  {
    "id": "sci_c3_q31",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Samples of four metals A, B, C, and D were added to the following solutions one by one:\n- Metal A displaces iron from FeSO₄ solution.\n- Metal B does not displace iron from FeSO₄, but displaces copper from CuSO₄.\n- Metal C displaces zinc from ZnSO₄ solution.\n- Metal D does not react with any of ZnSO₄, FeSO₄, CuSO₄, or AgNO₃ solutions.\n(a) Which is the most reactive metal?\n(b) What would you observe if B is added to a solution of CuSO₄?\n(c) Arrange the metals A, B, C, and D in the order of decreasing reactivity.",
    "answer": "(a) Most reactive metal: Metal C, because it displaces zinc (which is situated highest in the reactivity series among the tested ions).\n\n(b) Observation with B in CuSO₄: Metal B displaces copper; therefore, the blue color of copper sulphate solution fades and a reddish-brown deposit of copper metal appears on metal B.\n\n(c) Decreasing order of reactivity:\nC > A > B > D\n- C displaces Zn (highest).\n- A displaces Fe (below Zn but above Cu).\n- B displaces Cu (below Fe).\n- D displaces none (least reactive, below Ag).",
    "source": "NCERT Class 10 Page 45 Question 3"
  },
  {
    "id": "sci_c3_q32",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Explain the extraction of copper from its sulphide ore (copper glance, Cu₂S) through self-reduction (auto-reduction) with balanced chemical equations.",
    "answer": "(1) Stage 1: Partial Roasting in Air:\nCrushed copper glance (Cu₂S) is heated strongly in a reverberatory furnace with air. Part of the cuprous sulphide is converted into cuprous oxide:\n2Cu₂S(s) + 3O₂(g) —[Heat]⟶ 2Cu₂O(s) + 2SO₂(g)↑\n\n(2) Stage 2: Self-Reduction (Auto-reduction):\nThe supply of air is turned off, and the temperature is raised. The newly formed cuprous oxide reacts with the remaining unreacted cuprous sulphide without requiring any external reducing agent:\n2Cu₂O(s) + Cu₂S(s) —[High Heat]⟶ 6Cu(l) + SO₂(g)↑\n\n(3) Resulting Metal: The molten copper solidifies with escaping bubbles of SO₂ gas, creating a rough, blistered surface known as 'Blister Copper' (~98% pure).",
    "formula": "2\\text{Cu}_2\\text{O} + \\text{Cu}_2\\text{S} ⟶ 6\\text{Cu} + \\text{SO}_2",
    "examinerNote": "Highlight self-reduction mechanism and the formation of blister copper.",
    "source": "NCERT Class 10 Page 50"
  },
  {
    "id": "sci_c3_q33",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Why cannot sodium, magnesium, and calcium be obtained from their oxides by reduction with carbon? How are these highly reactive metals extracted?",
    "answer": "(1) Why Carbon Reduction Fails: Sodium, magnesium, and calcium are positioned at the very top of the reactivity series. These electropositive metals have a much higher affinity for oxygen than carbon does. Hence, carbon is incapable of stripping oxygen from their stable oxides ($Na_2O$, $MgO$, $CaO$).\n\n(2) Extraction Method: They are extracted by Electrolytic Reduction of their molten chlorides.\n\n(3) Example - Extraction of Sodium from Molten NaCl:\n- At Cathode (reduction): Na⁺ + e⁻ ⟶ Na(s) [Sodium metal deposits]\n- At Anode (oxidation): 2Cl⁻ ⟶ Cl₂(g)↑ + 2e⁻ [Chlorine gas liberates]",
    "formula": "\\text{Na}^+ + e^- ⟶ \\text{Na}",
    "source": "CBSE 2022, 2024"
  },
  {
    "id": "sci_c3_q34",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 3,
    "type": "SA",
    "question": "Compare metals and non-metals on the basis of their chemical properties with respect to:\n(a) Nature of oxides formed.\n(b) Reaction with dilute acids.\n(c) Reducing/oxidizing behavior.",
    "answer": "(a) Nature of Oxides:\n- Metals: Form basic oxides (e.g., Na₂O, CaO) or amphoteric oxides (Al₂O₃, ZnO) which dissolve in water to form alkaline solutions.\n- Non-metals: Form acidic oxides (e.g., SO₂, CO₂, NO₂) which dissolve in water to form acids, or neutral oxides (CO, H₂O, N₂O).\n\n(b) Reaction with Dilute Acids:\n- Metals: Reactive metals (above H in reactivity series) displace hydrogen gas from dilute HCl/H₂SO₄:\nMg + 2HCl ⟶ MgCl₂ + H₂↑\n- Non-metals: Do not react with dilute acids to evolve hydrogen gas because non-metals cannot donate electrons to H⁺ ions.\n\n(c) Redox Behavior:\n- Metals: Act as Reducing Agents because they readily lose valence electrons (electropositive).\n- Non-metals: Act as Oxidizing Agents because they readily gain electrons to complete their octet (electronegative).",
    "source": "NCERT Class 10 Chapter 3 Summary"
  },
  {
    "id": "sci_c3_q35",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an industrial copper refinery, electrolytic refining of blister copper is carried out in large electrolytic tanks.\n\n(a) Name the materials used as the anode, the cathode, and the electrolyte.\n(b) Write the electrochemical reactions occurring at the cathode and anode.\n(c) What is 'anode mud'? Which valuable elements are recovered from it?\n(d) Why does the concentration of copper sulphate in the electrolyte remain virtually constant throughout the refining process?",
    "answer": "(a) Cell Components:\n- Anode (+ve terminal): Thick plate of impure blister copper.\n- Cathode (-ve terminal): Thin sheet of high-purity refined copper.\n- Electrolyte: Acidified copper sulphate solution (aqueous CuSO₄ + dilute H₂SO₄).\n\n(b) Electrode Reactions:\n- At Anode (Oxidation): Cu(s) [impure] ⟶ Cu²⁺(aq) + 2e⁻\n- At Cathode (Reduction): Cu²⁺(aq) + 2e⁻ ⟶ Cu(s) [99.99% pure]\n\n(c) Anode Mud: Insoluble impurities (such as gold, silver, and platinum) that do not dissolve into the electrolyte settle down at the bottom of the cell below the anode as a rich residue known as 'anode mud'. Precious metals are economically recovered from this mud.\n\n(d) Constant Concentration: For every copper atom that dissolves as Cu²⁺ from the impure anode into solution, exactly one Cu²⁺ ion from solution discharges and deposits as metallic copper onto the cathode.",
    "formula": "\\text{Cu}^{2+} + 2e^- ⟶ \\text{Cu}",
    "examinerNote": "Anode mud composition (noble metals Ag, Au, Pt) is a frequent question.",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c3_q36",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an engineering workshop, railway maintenance workers prepared an ignition mixture of barium peroxide and magnesium ribbon over a crucible containing ferric oxide and aluminium powder to weld a fissure on a high-speed train track.\n\n(a) Identify the chemical reaction utilized for welding tracks. Write its balanced equation.\n(b) Why is a magnesium ribbon used as a fuse to ignite the mixture?\n(c) Explain why this reaction is preferred over traditional electric arc welding in remote railway tracks.\n(d) How is the aluminium acting as a reducing agent in this reaction in terms of electron transfer?",
    "answer": "(a) Reaction: Thermit Reaction (aluminothermic reduction of iron(III) oxide):\nFe₂O₃(s) + 2Al(s) ⟶ 2Fe(l) + Al₂O₃(s) + Enormous Heat\n\n(b) Function of Magnesium Ribbon: The thermit mixture requires a very high ignition activation temperature (~1000°C) to initiate. Burning magnesium ribbon provides this initial flash of intense activation heat.\n\n(c) Advantage in Remote Sites: The Thermit reaction is completely self-sustaining and chemically generates its own extreme heat (over 2500°C) without needing electrical power generators, high-voltage lines, or heavy welding machinery in remote field locations.\n\n(d) Electron Transfer Mechanism: Neutral aluminium atoms ($Al^0$) lose 3 electrons each to form $Al^{3+}$ ions (oxidation), transferring electrons to $Fe^{3+}$ ions in $Fe_2O_3$ which gain 3 electrons each to form neutral molten iron atoms ($Fe^0$, reduction).",
    "formula": "\\text{Fe}_2\\text{O}_3 + 2\\text{Al} ⟶ 2\\text{Fe} + \\text{Al}_2\\text{O}_3",
    "source": "CBSE Official Sample Paper 2025"
  },
  {
    "id": "sci_c3_q37",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Corrosion scientists investigated the preservation of the ancient Iron Pillar at Mehrauli, Delhi, which has stood for over 1600 years without rusting. In modern construction, iron rebars are rust-prevented through several advanced metallurgical techniques.\n\n(a) Why has the Delhi Iron Pillar not rusted despite centuries of exposure to monsoon rains and heat?\n(b) Explain the chemical principle of 'Galvanization'. Why does galvanized iron not rust even when the surface zinc coating is scratched?\n(c) What is 'Anodising'? How does it protect aluminium articles?\n(d) Why is iron never used in its pure elemental state for structural construction?",
    "answer": "(a) Delhi Pillar Mystery: Ancient Indian metallurgists forged high-phosphorus wrought iron, which formed an ultra-thin, continuous protective surface passivation film of crystalline iron hydrogen phosphate hydrate ($FePO_4\\cdot H_3PO_4\\cdot 4H_2O$, 'misawite') that hermetically seals the iron core from oxygen and moisture.\n\n(b) Galvanization & Scratched Protection: Iron is coated with a thin layer of molten Zinc. Even if scratched, zinc is higher than iron in the reactivity series ($E^\\circ_{Zn^{2+}/Zn} = -0.76\\text{ V}$ vs $E^\\circ_{Fe^{2+}/Fe} = -0.44\\text{ V}$). Zinc preferentially oxidizes sacrificially ($Zn ⟶ Zn^{2+} + 2e^-$), supplying electrons to iron and preserving it from corrosion.\n\n(c) Anodising: An electrochemical process where aluminium is made the anode in an electrolytic bath of dilute sulphuric acid. Oxygen evolved reacts with the aluminium anode to form a uniform, thick, impermeable layer of aluminium oxide ($Al_2O_3$) that resists corrosion and can be dyed in bright colors.\n\n(d) Pure Iron Weakness: Pure iron is exceptionally soft and stretches easily when warm. Alloying it with just 0.05% carbon converts it into steel, which is intensely hard, tough, and mechanically strong.",
    "examinerNote": "Sacrificial protection of zinc is a must-include concept.",
    "source": "NCERT Class 10 Pages 53–55"
  },
  {
    "id": "sci_c3_q38",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an inorganic chemistry laboratory, students investigated the physical and electrical properties of ionic compound Sodium Chloride (NaCl) compared to covalent compound Carbon Tetrachloride (CCl₄).\n\n(a) Explain why NaCl is a hard crystalline solid with a melting point of 1074 K, whereas CCl₄ is a volatile liquid.\n(b) A student places two electrodes connected to a bulb in solid dry NaCl powder and switches on the current. The bulb does not glow. When distilled water is added to dissolve the powder, the bulb glows brightly. Explain.\n(c) Why are ionic compounds brittle and shatter into pieces when struck with a hammer?\n(d) Predict whether NaCl will dissolve in petrol or kerosene. State the scientific rule governing this.",
    "answer": "(a) Melting Point Difference:\n- NaCl: Composed of $Na^+$ cations and $Cl^-$ anions packed in a rigid 3D lattice held by strong omnidirectional Coulombic electrostatic attractions, requiring massive thermal energy (1074 K) to break.\n- CCl₄: Composed of discrete covalent molecules held only by weak intermolecular van der Waals forces, requiring very little heat to vaporize.\n\n(b) Electrical Conductivity:\n- Solid NaCl: Ions are locked rigidly in crystallographic lattice positions with zero mobile charge carriers; hence the bulb does not glow.\n- Aqueous NaCl: Water has high dielectric constant (~80) which shields ionic charges, dissolving the lattice into free mobile $Na^+(aq)$ and $Cl^-(aq)$ ions that carry current across the solution.\n\n(c) Brittleness: When a mechanical shear stress or hammer blow hits an ionic crystal, one layer of ions slips over another. Like charges come opposite to each other ($+$ against $+$, $-$ against $-$). Massive electrostatic repulsion causes the crystal lattice to fracture and shatter.\n\n(d) Non-polar Solubility: Insoluble in petrol/kerosene. Governed by the rule 'Like dissolves like': non-polar organic solvents cannot solvate or overcome the powerful electrostatic forces binding ionic lattices.",
    "examinerNote": "The shear plane repulsion explanation for brittleness demonstrates master-level understanding.",
    "source": "NCERT Class 10 Pages 48–49"
  },
  {
    "id": "sci_c3_q39",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 5,
    "type": "LA",
    "question": "Comprehensive Metallurgy of Metals:\n(a) Differentiate between a Mineral and an Ore. Give one example of an ore of aluminium and an ore of iron.\n(b) Outline the flow of extraction steps for metals in the three reactivity zones:\n(i) Metals of high reactivity\n(ii) Metals of medium reactivity\n(iii) Metals of low reactivity\n(c) Name the process used to enrich ores by removing gangue (matrix) based on magnetic properties.",
    "answer": "(a) Mineral vs Ore:\n- Mineral: A naturally occurring inorganic substance containing metals and compounds found in the earth's crust.\n- Ore: A mineral from which a metal can be extracted profitably, economically, and conveniently on a commercial scale.\n- Examples: Aluminium ore = Bauxite ($Al_2O_3\\cdot 2H_2O$); Iron ore = Haematite ($Fe_2O_3$).\n\n(b) Extraction Flows by Reactivity:\n(i) Metals of High Reactivity (K, Na, Ca, Mg, Al):\n- Cannot be reduced with carbon.\n- Extracted exclusively by Electrolytic reduction of their molten chlorides or oxides.\n\n(ii) Metals of Medium Reactivity (Zn, Fe, Pb, Cu):\n- Exist primarily as Carbonates or Sulphides.\n- Step 1: Concentration of ore.\n- Step 2: Conversion to oxide by Calcination (for carbonates) or Roasting (for sulphides).\n- Step 3: Chemical reduction to metal using Carbon (Coke) or reactive metal displacement (Aluminothermy).\n- Step 4: Refining of impure metal.\n\n(iii) Metals of Low Reactivity (Hg, Cu, Ag, Au):\n- Often exist as sulphides or in native free state.\n- Step 1: Roasting in air converts sulphide directly to oxide or metal (e.g., cinnabar HgS roasted to HgO, then decomposes to Hg on further heating).\n- Step 2: Refining.\n\n(c) Magnetic Separation: Uses a magnetic roller to separate magnetic minerals (like magnetite $Fe_3O_4$) from non-magnetic rocky gangue.",
    "examinerNote": "All ores are minerals, but all minerals are not ores. Standard 5M board question.",
    "source": "NCERT Class 10 Pages 49–52"
  },
  {
    "id": "sci_c3_q40",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 5,
    "type": "LA",
    "question": "Chemical properties of metals with oxygen, water, and acids:\n(a) How do the following metals react with cold water, hot water, and steam respectively: (i) Sodium, (ii) Magnesium, (iii) Iron? Write balanced equations.\n(b) Why do gold and silver not react with water even at high temperatures?\n(c) Why is hydrogen gas usually not evolved when a metal reacts with dilute nitric acid ($HNO_3$)? Name two metals that can evolve hydrogen gas with very dilute $HNO_3$.",
    "answer": "(a) Reactions with Water:\n(i) Sodium (with Cold Water):\nReacts violently with cold water, liberating hydrogen which catches fire immediately:\n2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)↑ + Heat\n\n(ii) Magnesium (with Hot Water):\nDoes not react with cold water. Reacts with boiling hot water to form magnesium hydroxide and hydrogen gas; the metal floats due to bubbles of H₂ sticking to its surface:\nMg(s) + 2H₂O(l) [Hot] ⟶ Mg(OH)₂(aq) + H₂(g)↑\n\n(iii) Iron (with Steam):\nDoes not react with cold or hot liquid water; reacts only with steam (water vapor) to form magnetic iron oxide:\n3Fe(s) + 4H₂O(g) [Steam] ⟶ Fe₃O₄(s) + 4H₂(g)↑\n\n(b) Gold & Silver Inertness: Gold and silver are situated at the very bottom of the electrochemical reactivity series. Their standard reduction potentials are highly positive, meaning they have no thermodynamic tendency to reduce $H^+$ ions to $H_2$.\n\n(c) Reaction with Nitric Acid:\n- Reason: Dilute nitric acid ($HNO_3$) is a powerful oxidizing agent. As soon as hydrogen gas ($H_2$) is liberated, $HNO_3$ immediately oxidizes it to water ($H_2O$), while itself getting reduced to nitrogen oxides ($NO_2$, $NO$, or $N_2O$).\n- Two Exceptional Metals: Magnesium (Mg) and Manganese (Mn) react with extremely dilute (~1%) nitric acid to evolve hydrogen gas:\nMg + 2HNO₃(dilute) ⟶ Mg(NO₃)₂ + H₂↑",
    "formula": "\\text{Mg} + 2\\text{HNO}_3 ⟶ \\text{Mg}(\\text{NO}_3)_2 + \\text{H}_2",
    "examinerNote": "Mg and Mn reacting with dilute HNO₃ is one of the most tested exceptions in CBSE.",
    "source": "NCERT Class 10 Pages 41–43"
  },
  {
    "id": "sci_c3_q41",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 5,
    "type": "LA",
    "question": "Structure, properties, and formation of electrovalent compounds:\n(a) With the help of electron dot structures, show the transfer of electrons in the formation of:\n(i) Sodium Oxide (Na₂O)\n(ii) Calcium Oxide (CaO)\n(b) State the ions present in each of these compounds.\n(c) List three general properties of ionic compounds and justify each on the basis of their bonding structure.",
    "answer": "(a) Electron Dot Structures:\n(i) Formation of Na₂O:\n- Sodium atom (Z=11, 2,8,1) has 1 valence electron: $\\text{Na}^\\bullet$.\n- Oxygen atom (Z=8, 2,6) has 6 valence electrons: :Ö:.\n- Two sodium atoms donate 1 electron each to one oxygen atom:\n2Na ⟶ 2Na⁺ + 2e⁻\nO + 2e⁻ ⟶ O²⁻ (2,8)\nCompound representation: [Na⁺]₂ [ :Ö: ]²⁻ ⟹ Na₂O.\n\n(ii) Formation of CaO:\n- Calcium atom (Z=20, 2,8,8,2) loses 2 valence electrons: Ca ⟶ Ca²⁺ + 2e⁻.\n- Oxygen atom gains 2 electrons: O + 2e⁻ ⟶ O²⁻.\nCompound representation: [Ca²⁺] [ :Ö: ]²⁻ ⟹ CaO.\n\n(b) Ions Present:\n- In Na₂O: Sodium cation ($Na^+$) and Oxide anion ($O^{2-}$).\n- In CaO: Calcium cation ($Ca^{2+}$) and Oxide anion ($O^{2-}$).\n\n(c) Three Properties Justified:\n1. High Melting & Boiling Points: Omnidirectional Coulombic attractions across the 3D crystal lattice require enormous thermal energy to disrupt.\n2. Electrical Conductivity in Solution/Melt: Mobile ions are free to migrate to opposite electrodes under electric fields.\n3. Solubility: Polar water molecules hydrate cations and anions, releasing hydration energy that overcomes the crystal lattice energy.",
    "source": "CBSE Board 2023 Long Answer"
  },
  {
    "id": "sci_c3_q42",
    "chapter": 3,
    "chapterName": "Metals and Non-metals",
    "marks": 5,
    "type": "LA",
    "question": "Corrosion and its prevention in modern civil engineering:\n(a) What is Rusting? Write its chemical equation and name the chemical product.\n(b) Describe an activity with three test tubes to demonstrate that both air and moisture are essential for the rusting of iron.\n(c) Explain four distinct metallurgical methods used to protect iron from rusting:\n(i) Galvanization\n(ii) Alloying\n(iii) Electroplating\n(iv) Cathodic sacrificial protection",
    "answer": "(a) Rusting Definition & Equation:\n- Definition: The slow destructive oxidation of iron metal when exposed to both atmospheric oxygen and moisture.\n- Equation: 4Fe(s) + 3O₂(g) + 2xH₂O(l) ⟶ 2Fe₂O₃·xH₂O(s)\n- Product: Hydrated Ferric Oxide (Rust), a reddish-brown flaky substance.\n\n(b) Three Test-Tubes Activity:\n- Test Tube A (Air + Water): Contains clean iron nails half-submerged in tap water. The nails rust heavily after a few days (both air and water present).\n- Test Tube B (Water only, No Air): Contains boiled distilled water (boiling expels dissolved air) with a layer of oil poured on top to seal off atmospheric air. The nails do not rust (water present, but oxygen absent).\n- Test Tube C (Air only, No Water): Contains dry air with anhydrous calcium chloride ($CaCl_2$) pellets to absorb all moisture, tightly stoppered. The nails do not rust (oxygen present, but water absent).\n- Conclusion: Both oxygen (air) and moisture (water) are simultaneously essential for rusting.\n\n(c) Four Prevention Methods:\n(i) Galvanization: Dipping cleaned steel/iron in molten zinc (450°C), forming a protective sacrificial zinc skin.\n(ii) Alloying: Mixing molten iron with chromium (18%) and nickel (8%) to produce stainless steel, which never rusts.\n(iii) Electroplating: Electrolytically coating iron with less reactive metals like nickel or chromium.\n(iv) Cathodic Protection: Connecting underground iron gas/oil pipelines to blocks of more reactive sacrificial magnesium or zinc via a wire, which corrodes preferentially.",
    "formula": "4\\text{Fe} + 3\\text{O}_2 + 2x\\text{H}_2\\text{O} ⟶ 2\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}",
    "examinerNote": "The 3 test tube experiment is an NCERT cornerstone activity with guaranteed diagram/question appearances.",
    "source": "NCERT Class 10 Activity 3.14"
  },
];
