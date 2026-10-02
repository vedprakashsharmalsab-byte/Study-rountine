import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH4_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c4_q1",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Carbon forms four covalent bonds by sharing its four valence electrons with four univalent atoms. After forming four bonds, carbon attains the electronic configuration of:\n(a) Helium\n(b) Neon\n(c) Argon\n(d) Krypton",
    options: ["Helium", "Neon", "Argon", "Krypton"],
    correctOption: 1,
    answer: "Option (b): Neon",
    steps: [
      "Carbon atomic number = 6, configuration = (2, 4). It has 4 valence electrons.",
      "By sharing 4 electrons (e.g., in CH₄), carbon gains 4 shared electrons.",
      "Total electrons in outer shell = 4 + 4 = 8 → matches Neon (2, 8)."
    ],
    explanation: "Carbon forms 4 covalent bonds to complete its octet, achieving neon-like configuration (2,8).",
    formula: "\\text{C (2, 4)} + 4e^- \\to \\text{Ne (2, 8)} \\text{ configuration}",
    examinerNote: "Hydrogen attains He configuration (2). Carbon attains Ne configuration (2, 8). Don't confuse.",
    source: "CBSE Board 2024 / NCERT"
  },
  {
    id: "sci_c4_q2",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Vinegar is a solution of:\n(a) 50–60% acetic acid in alcohol\n(b) 5–8% acetic acid in alcohol\n(c) 5–8% acetic acid in water\n(d) 50–60% acetic acid in water",
    options: [
      "50–60% acetic acid in alcohol",
      "5–8% acetic acid in alcohol",
      "5–8% acetic acid in water",
      "50–60% acetic acid in water"
    ],
    correctOption: 2,
    answer: "Option (c): 5–8% acetic acid in water",
    steps: [
      "Vinegar is a food-grade dilute solution of ethanoic acid (acetic acid) in water.",
      "Concentration: 5–8% solution."
    ],
    explanation: "5–8% aqueous solution of acetic acid = vinegar (used as preservative/food flavoring).",
    formula: "\\text{Vinegar} = 5\\text{–}8\\% \\text{ CH}_3\\text{COOH (aq)}",
    examinerNote: "Direct NCERT fact. Solvent is water, not alcohol. Exact % range is 5-8.",
    source: "CBSE Board 2023 / NCERT 4.4.2"
  },
  {
    id: "sci_c4_q3",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Covalent compounds generally have low melting and boiling points.\nReason (R): The forces of attraction between covalent molecules are relatively weak.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation of A",
      "Both A and R are true but R is NOT correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R true, R is correct explanation",
    steps: [
      "A: Covalent compounds DO have low M.P. and B.P. ✓ TRUE",
      "R: Intermolecular forces between covalent molecules are weak ✓ TRUE",
      "R correctly explains A: weak forces require less thermal energy to break → low M.P./B.P."
    ],
    explanation: "Weak van der Waals intermolecular forces cause low melting/boiling points in covalent compounds.",
    examinerNote: "Contrast: Ionic compounds have strong lattice attraction → HIGH M.P./B.P.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c4_q4",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is a saturated hydrocarbon?\n(a) Ethene (C₂H₄)\n(b) Ethyne (C₂H₂)\n(c) Ethane (C₂H₆)\n(d) Benzene (C₆H₆)",
    options: ["Ethene (C₂H₄)", "Ethyne (C₂H₂)", "Ethane (C₂H₆)", "Benzene (C₆H₆)"],
    correctOption: 2,
    answer: "Option (c): Ethane (C₂H₆)",
    steps: [
      "Saturated hydrocarbons have ONLY single C–C bonds (alkanes).",
      "Ethene has a C=C double bond → unsaturated.",
      "Ethyne has a C≡C triple bond → unsaturated.",
      "Ethane (C₂H₆): H₃C–CH₃, only single bonds → SATURATED."
    ],
    explanation: "Saturated = only single bonds. Alkanes (general formula CₙH₂ₙ₊₂) are saturated hydrocarbons.",
    formula: "C_nH_{2n+2} \\text{ (Alkane, saturated)}",
    examinerNote: "Alkane = saturated, Alkene = one double bond, Alkyne = one triple bond. Must memorize all three.",
    source: "NCERT Section 4.2"
  },
  {
    id: "sci_c4_q5",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The functional group –OH present in alcohols is:\n(a) Carboxyl group\n(b) Hydroxyl group\n(c) Aldehyde group\n(d) Ketone group",
    options: ["Carboxyl group", "Hydroxyl group", "Aldehyde group", "Ketone group"],
    correctOption: 1,
    answer: "Option (b): Hydroxyl group",
    steps: [
      "–OH = Hydroxyl group (present in alcohols like ethanol C₂H₅OH).",
      "–COOH = Carboxyl group (acids), –CHO = Aldehyde group, C=O (in middle of chain) = Ketone."
    ],
    explanation: "The hydroxyl group (–OH) defines alcohols in organic chemistry.",
    formula: "\\text{Alcohol: R–OH where –OH = Hydroxyl}",
    examinerNote: "CBSE tests functional group identification every year. Memorize: –OH (alcohol), –COOH (acid), –CHO (aldehyde).",
    source: "NCERT Section 4.3"
  },
  {
    id: "sci_c4_q6",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The product formed when ethanol reacts with sodium metal is:\n(a) Sodium ethoxide + H₂ gas\n(b) Sodium acetate + H₂O\n(c) Ethyl acetate + Na₂O\n(d) Sodium carbonate + CO₂",
    options: [
      "Sodium ethoxide + H₂ gas",
      "Sodium acetate + H₂O",
      "Ethyl acetate + Na₂O",
      "Sodium carbonate + CO₂"
    ],
    correctOption: 0,
    answer: "Option (a): Sodium ethoxide + H₂ gas",
    steps: [
      "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑",
      "Ethanol reacts with sodium to produce sodium ethoxide and hydrogen gas."
    ],
    explanation: "Alcohol reacts with sodium metal to release H₂ gas and form sodium alkoxide.",
    formula: "2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\to 2\\text{C}_2\\text{H}_5\\text{ONa} + \\text{H}_2 \\uparrow",
    examinerNote: "This is a key property of alcohols. The H₂ evolution confirms the –OH group in alcohol.",
    source: "NCERT Section 4.4.1"
  },
  {
    id: "sci_c4_q7",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The process of making soap from oils/fats using NaOH is called:\n(a) Esterification\n(b) Hydrogenation\n(c) Saponification\n(d) Fermentation",
    options: ["Esterification", "Hydrogenation", "Saponification", "Fermentation"],
    correctOption: 2,
    answer: "Option (c): Saponification",
    steps: [
      "Saponification = hydrolysis of ester (fat/oil) with NaOH to give soap (sodium salt of fatty acid) + glycerol.",
      "Fat (triester) + 3NaOH → 3 Soap molecules + Glycerol"
    ],
    explanation: "Saponification is the alkaline hydrolysis of fats/oils to produce soap and glycerol.",
    formula: "\\text{Fat} + \\text{NaOH} \\xrightarrow{\\Delta} \\text{Soap} + \\text{Glycerol}",
    examinerNote: "Saponification uses NaOH (base). Esterification uses H₂SO₄ (acid). Don't confuse the two.",
    source: "NCERT Section 4.5"
  },
  {
    id: "sci_c4_q8",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Which property of carbon allows it to form long chains, branched chains, and rings?\n(a) Catenation\n(b) Tetravalency\n(c) Polymerization\n(d) Hybridization",
    options: ["Catenation", "Tetravalency", "Polymerization", "Hybridization"],
    correctOption: 0,
    answer: "Option (a): Catenation",
    steps: [
      "Catenation = ability of carbon atoms to bond with each other to form long chains, branched chains, and rings.",
      "Tetravalency = carbon's 4 valence electrons (different property)."
    ],
    explanation: "Catenation is the unique ability of carbon to form bonds with its own atoms.",
    formula: "\\text{Catenation: C–C–C–C} \\text{ (chains, rings, branches)}",
    examinerNote: "Catenation + Tetravalency together explain why carbon forms millions of compounds.",
    source: "NCERT Section 4.1"
  },

  // ==========================================
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // ==========================================
  {
    id: "sci_c4_q9",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "What are homologous series of carbon compounds? State any two characteristics of a homologous series.",
    answer: "A series of carbon compounds with same functional group, differing by –CH₂– and 14 u.",
    steps: [
      "Definition: A family of organic compounds having the same functional group and similar chemical properties, in which successive members differ by a –CH₂– group and 14 u in molecular mass.",
      "Two Characteristics:",
      "1. All members have the same general formula (e.g., CₙH₂ₙ₊₂ for alkanes).",
      "2. Gradation in physical properties (M.P., B.P., density) with increasing molecular mass."
    ],
    explanation: "Homologous series: same functional group, differ by –CH₂–, gradation in physical properties.",
    formula: "\\Delta \\text{Formula} = -\\text{CH}_2-, \\quad \\Delta \\text{Mass} = 14 \\text{ u}",
    examinerNote: "Must mention BOTH –CH₂– structural difference AND 14 u mass difference for full credit.",
    source: "CBSE Board 2023 / NCERT"
  },
  {
    id: "sci_c4_q10",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Distinguish between esterification and saponification with equations.",
    answer: "Esterification: acid + alcohol → ester + water. Saponification: ester + NaOH → sodium salt (soap) + alcohol.",
    steps: [
      "Esterification (forward reaction):",
      "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (catalyst: conc. H₂SO₄)",
      "Saponification (reverse reaction with alkali):",
      "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH"
    ],
    explanation: "Esterification and saponification are reverse processes. Esterification is acid-catalyzed; saponification uses NaOH.",
    formula: "\\text{Ester} + \\text{NaOH} \\to \\text{Sodium salt (Soap)} + \\text{Alcohol}",
    examinerNote: "Saponification produces a SODIUM SALT (soap) not the original acid. Key distinction.",
    source: "NCERT Section 4.4"
  },
  {
    id: "sci_c4_q11",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "What happens when ethanol is burnt in air? Write a balanced chemical equation.",
    answer: "Ethanol undergoes complete combustion to give CO₂ and H₂O with release of heat and light.",
    steps: [
      "Combustion of ethanol: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + Heat + Light",
      "Ethanol burns with a blue flame (complete combustion produces CO₂, not CO)."
    ],
    explanation: "Complete combustion of alcohols gives CO₂ and H₂O. The blue flame indicates complete burning.",
    formula: "\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\to 2\\text{CO}_2 + 3\\text{H}_2\\text{O}",
    examinerNote: "Balance correctly: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Combustion of ethanol is a must-know reaction.",
    source: "NCERT Section 4.4.1"
  },

  // ==========================================
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // ==========================================
  {
    id: "sci_c4_q12",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Write balanced chemical equations for the following reactions:\n(i) Esterification reaction\n(ii) Saponification reaction\n(iii) Oxidation of ethanol with alkaline KMnO₄",
    answer: "Three key organic reactions of ethanol and ethanoic acid with balanced equations.",
    steps: [
      "(i) Esterification: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (conc. H₂SO₄ catalyst)",
      "(ii) Saponification: CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH",
      "(iii) Oxidation: CH₃CH₂OH + 2[O] → CH₃COOH + H₂O (alkaline KMnO₄ or acidified K₂Cr₂O₇)"
    ],
    explanation: "Esterification forms ester. Saponification reverses it with NaOH. KMnO₄ oxidizes alcohol to acid.",
    formula: "\\text{Ethanol} \\xrightarrow{[O]} \\text{Ethanoic acid}",
    examinerNote: "Catalysts must be written over the arrows: conc. H₂SO₄ for esterification, alkaline KMnO₄ for oxidation.",
    source: "CBSE Board 2020, 2024 / NCERT"
  },
  {
    id: "sci_c4_q13",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "What are structural isomers? Draw structural formulae of all possible structural isomers of butane (C₄H₁₀).",
    answer: "Structural isomers are compounds with same molecular formula but different structural formulae. Butane has 2 isomers.",
    steps: [
      "Definition: Structural isomers have the same molecular formula but different arrangements of atoms.",
      "Isomers of C₄H₁₀ (Butane):",
      "1. n-Butane (straight chain): CH₃–CH₂–CH₂–CH₃",
      "2. Iso-butane (branched chain): CH₃–CH(CH₃)–CH₃ (2-methylpropane)"
    ],
    explanation: "C₄H₁₀ has two structural isomers: n-butane (straight chain) and isobutane (branched chain).",
    formula: "\\text{Molecular formula same: } C_4H_{10} \\text{, but structures differ}",
    examinerNote: "Draw actual structural formulas (Lewis-type expansion). Just writing names is insufficient for full marks.",
    source: "NCERT Exemplar / Board 2022"
  },
  {
    id: "sci_c4_q14",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Explain why soaps do not work well in hard water. How do detergents solve this problem?",
    answer: "Soap reacts with Ca²⁺ and Mg²⁺ in hard water to form scum. Detergents don't react with hard water ions.",
    steps: [
      "Hard water contains Ca²⁺ and Mg²⁺ ions.",
      "Soap molecules (sodium salts of fatty acids, e.g., C₁₇H₃₅COONa) react with Ca²⁺ and Mg²⁺:",
      "2C₁₇H₃₅COONa + CaCl₂ → (C₁₇H₃₅COO)₂Ca↓ + 2NaCl",
      "The insoluble calcium/magnesium soap precipitates as a grey-white scum, wasting soap and leaving residue on fabrics.",
      "Detergents: Sulphonate group (–SO₃Na) or ammonium salts don't react with Ca²⁺/Mg²⁺ ions.",
      "So detergents remain effective in hard water, producing lather freely."
    ],
    explanation: "Soap + hard water → insoluble scum. Detergent stays soluble in hard water because sulphonate is not precipitated.",
    formula: "2\\text{C}_{17}\\text{H}_{35}\\text{COO}^-\\text{Na}^+ + \\text{Ca}^{2+} \\to (\\text{Scum}) \\downarrow",
    examinerNote: "Write the precipitation equation for scum formation. Then explain WHY detergents work in hard water.",
    source: "NCERT Section 4.5"
  },

  // ==========================================
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // ==========================================
  {
    id: "sci_c4_q15",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "Explain the mechanism of the cleansing action of soaps. Why does soap form scum with hard water, and why do detergents remain effective in hard water?",
    answer: "Soap cleans via micelle formation; hard water precipitates soap as scum; detergents stay soluble.",
    steps: [
      "1. Structure of soap molecule: Long hydrocarbon tail (hydrophobic/lipophilic) + Ionic carboxylate head (–COO⁻Na⁺, hydrophilic).",
      "2. Micelle formation:",
      "   - In water, soap's hydrophobic tails point toward grease/oil on cloth.",
      "   - Ionic hydrophilic heads orient outward into water.",
      "   - Spherical micelle forms with oil trapped inside.",
      "3. Cleaning action: During agitation/washing, micelles carrying grease are rinsed away by water.",
      "4. Scum formation in hard water:",
      "   - Ca²⁺ and Mg²⁺ in hard water react with soap molecules.",
      "   - Form insoluble calcium/magnesium salts of fatty acids = SCUM.",
      "   - Scum wastes soap and may stick to fabrics.",
      "5. Detergents in hard water:",
      "   - Detergents use sulphonate/ammonium groups instead of carboxylate.",
      "   - These groups do NOT precipitate with Ca²⁺/Mg²⁺ ions.",
      "   - Detergents lather freely in both hard and soft water."
    ],
    explanation: "Complete 5-point cleansing action with micelle, scum, and detergent advantage.",
    formula: "\\text{Micelle: Hydrophobic tail} \\to \\text{center (oil)}, \\text{ Hydrophilic head} \\to \\text{water}",
    examinerNote: "Drawing a labeled micelle diagram earns full 5 marks! Show hydrocarbon tail pointing inward and ionic head outward.",
    source: "CBSE Board 2022, 2024 / NCERT Section 4.5"
  },
  {
    id: "sci_c4_q16",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "Write the names and general formulae of the first three members of alkanes, alkenes, and alkynes. Also write the general formula for each series and indicate whether they are saturated or unsaturated.",
    answer: "Three homologous series of hydrocarbons with systematic names and formulas.",
    steps: [
      "ALKANES (Saturated, CₙH₂ₙ₊₂):",
      "1. Methane: CH₄ (n=1)",
      "2. Ethane: C₂H₆ (n=2)",
      "3. Propane: C₃H₈ (n=3)",
      "ALKENES (Unsaturated, one C=C double bond, CₙH₂ₙ):",
      "1. Ethene: C₂H₄ (n=2, minimum 2 carbons for double bond)",
      "2. Propene: C₃H₆ (n=3)",
      "3. Butene: C₄H₈ (n=4)",
      "ALKYNES (Unsaturated, one C≡C triple bond, CₙH₂ₙ₋₂):",
      "1. Ethyne: C₂H₂ (n=2)",
      "2. Propyne: C₃H₄ (n=3)",
      "3. Butyne: C₄H₆ (n=4)"
    ],
    explanation: "Three main hydrocarbon series with formulas, saturation, and names.",
    formula: "\\text{Alkane: } C_nH_{2n+2}, \\text{ Alkene: } C_nH_{2n}, \\text{ Alkyne: } C_nH_{2n-2}",
    examinerNote: "Memorize all three general formulas. Alkenes start from C₂ (ethene), alkynes also start from C₂ (ethyne).",
    source: "NCERT Section 4.2 / Board 2023"
  },

  // ==========================================
  // SECTION E: CASE-BASED STUDY (4 MARKS)
  // ==========================================
  {
    id: "sci_c4_q17",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 4,
    type: "Case Study",
    question: "Riya has two liquids — Liquid A: obtained by fermentation of sugar (colourless, pleasant smell, boiling point 78°C), Liquid B: has a sharp, pungent smell, turns blue litmus red, is used as a preservative.\n\n(i) [1M] Identify Liquid A and Liquid B.\n(ii) [1M] Name the functional group present in each.\n(iii) [2M] Write the chemical reaction that converts Liquid A to Liquid B.",
    answer: "(i) A = Ethanol (C₂H₅OH), B = Ethanoic acid (CH₃COOH). (ii) A: –OH (Hydroxyl), B: –COOH (Carboxyl). (iii) Oxidation with alkaline KMnO₄.",
    steps: [
      "(i) Liquid A: fermented from sugar, pleasant smell, BP = 78°C → Ethanol (C₂H₅OH).",
      "Liquid B: pungent smell, acidic (turns blue litmus red), preservative → Ethanoic acid (CH₃COOH).",
      "(ii) A: Hydroxyl group (–OH). B: Carboxyl group (–COOH).",
      "(iii) Oxidation: C₂H₅OH + 2[O] → CH₃COOH + H₂O (alkaline KMnO₄ or acidified K₂Cr₂O₇ as oxidizing agent)"
    ],
    explanation: "Ethanol → Ethanoic acid by oxidation. Functional groups: –OH (alcohol) and –COOH (acid).",
    formula: "\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{[O]}} \\text{CH}_3\\text{COOH}",
    examinerNote: "Describe the properties to identify each compound. Then write the correct oxidation equation with oxidizing agent.",
    source: "CBSE Board 2025 Practice Set"
  },
  {
    id: "sci_c4_q18",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 4,
    type: "Case Study",
    question: "In a science experiment, a student heated ethanol with excess concentrated H₂SO₄ at 170°C and collected a gas. Another student added bromine water to this gas, which decolourised it.\n\n(i) [1M] Name the gas produced.\n(ii) [1M] Write the structural formula of the gas.\n(iii) [2M] Write the dehydration and bromination reactions.",
    answer: "(i) Ethene (C₂H₄), (ii) H₂C=CH₂, (iii) Dehydration + Bromination reactions.",
    steps: [
      "(i) Ethanol heated with excess conc. H₂SO₄ at 170°C undergoes dehydration to form ETHENE (C₂H₄).",
      "(ii) Structural formula: H₂C=CH₂ (or CH₂=CH₂)",
      "(iii) Dehydration: C₂H₅OH →(conc. H₂SO₄, 170°C)→ CH₂=CH₂↑ + H₂O",
      "Bromination (addition reaction): CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (1,2-dibromoethane)",
      "This decolourises brown bromine water → confirms unsaturation."
    ],
    explanation: "Ethanol dehydration gives ethene. Bromine water test confirms C=C double bond (addition reaction).",
    formula: "\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{170°C, H_2SO_4} \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}",
    examinerNote: "At 170°C: elimination (ethene). At 140°C: substitution (diethyl ether). Temperature matters!",
    source: "NCERT Exemplar / Board 2023"
  },

  // ==========================================
  // ADDITIONAL PYQs - HIGH PRIORITY
  // ==========================================
  {
    id: "sci_c4_q19",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "What is addition reaction? Write the reaction between ethene and bromine and state the industrial application of this type of reaction.",
    answer: "Addition reaction: unsaturated compound + small molecule → saturated compound. Application: hydrogenation of oils to make vegetable ghee.",
    steps: [
      "Addition reaction: A reaction where two or more molecules combine to form a single product without losing any atoms.",
      "Only unsaturated compounds (alkenes, alkynes) undergo addition reactions.",
      "Ethene + Bromine: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (1,2-dibromoethane)",
      "Industrial application: Hydrogenation of oils (vegetable oil + H₂ →(Ni catalyst)→ Vanaspati ghee)",
      "Vegetable oils (unsaturated) → Solid fats (saturated) by addition of H₂."
    ],
    explanation: "Addition reactions convert double/triple bonds to single bonds. Industrial use: making Vanaspati ghee.",
    formula: "\\text{Vegetable oil (unsaturated)} + \\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{Vanaspati (saturated)}",
    examinerNote: "Always mention the catalyst (Ni) for hydrogenation. The question asks for INDUSTRIAL application specifically.",
    source: "NCERT Section 4.2 / Board 2022, 2024"
  },
  {
    id: "sci_c4_q20",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Why does carbon form compounds mainly by covalent bonding? Give two reasons.",
    answer: "Carbon forms covalent bonds because: (1) it cannot lose 4e⁻ (too much energy needed), (2) it cannot gain 4e⁻ (C⁴⁻ is too unstable).",
    steps: [
      "Reason 1: To lose 4 electrons, carbon would need to form C⁴⁺, which requires too much energy. Uneconomical and energetically unfavorable.",
      "Reason 2: To gain 4 electrons, carbon would form C⁴⁻, which would be very difficult to maintain because: the nuclear charge (+6) cannot hold extra 4 electrons strongly.",
      "Therefore, carbon shares electrons (covalent bonding) to complete its octet."
    ],
    explanation: "Carbon's position in the middle of the periodic table means neither losing nor gaining 4 electrons is feasible.",
    examinerNote: "Two distinct points needed for 2 marks. Must mention energy consideration for losing AND stability for gaining.",
    source: "NCERT Section 4.1"
  },
  {
    id: "sci_c4_q21",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Name the two allotropes of carbon mentioned in NCERT. State two differences between them.",
    answer: "Diamond and Graphite are two allotropes of carbon.",
    steps: [
      "Two allotropes: Diamond and Graphite (also fullerene, but NCERT focuses on these two).",
      "Diamond:",
      "- Each C bonded to 4 other C atoms in tetrahedral structure → very hard (hardest natural substance).",
      "- Poor conductor of electricity (no free electrons).",
      "Graphite:",
      "- Each C bonded to 3 others in hexagonal layers → soft (layers can slide).",
      "- Good conductor of electricity (one free electron per C atom moves between layers).",
      "Differences: (i) Diamond hard, graphite soft. (ii) Diamond non-conductor, graphite conductor."
    ],
    explanation: "Same element (C), different bonding patterns → different physical properties. This is allotropy.",
    formula: "\\text{Diamond: sp}^3 \\text{ hybrid}, \\text{ Graphite: sp}^2 \\text{ hybrid}",
    examinerNote: "The question asks for DIFFERENCES. Write in tabular format for clarity and full marks.",
    source: "NCERT Section 4.1 / Board 2021, 2023"
  },
  {
    id: "sci_c4_q22",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Ethanoic acid reacts with ethanol in presence of an acid catalyst to form:\n(a) Ethyl acetate + H₂O\n(b) Diethyl ether + H₂O\n(c) Sodium ethanoate + H₂\n(d) Acetic anhydride + H₂O",
    options: [
      "Ethyl acetate + H₂O",
      "Diethyl ether + H₂O",
      "Sodium ethanoate + H₂",
      "Acetic anhydride + H₂O"
    ],
    correctOption: 0,
    answer: "Option (a): Ethyl acetate + H₂O",
    steps: [
      "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (conc. H₂SO₄)",
      "This is esterification. Product is ethyl ethanoate (ethyl acetate)."
    ],
    explanation: "Ethanoic acid + ethanol = ethyl ethanoate (sweet smelling ester) + water. Conc. H₂SO₄ as catalyst.",
    formula: "\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{H_2SO_4} \\text{Ester} + \\text{H}_2\\text{O}",
    examinerNote: "Ester has a sweet/fruity smell. Used in perfumes and food flavourings. NCERT practical observation.",
    source: "NCERT / Board 2024"
  },
  {
    id: "sci_c4_q23",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "What is denatured alcohol? Why is it used?",
    answer: "Denatured alcohol is ethanol made unfit for drinking by adding poisonous substances like methanol and pyridine.",
    steps: [
      "Denatured alcohol = Industrial ethanol rendered poisonous by addition of methanol (about 5%), pyridine, copper sulphate (blue dye).",
      "Purpose: Ethanol is a potable alcohol subject to heavy taxation. To prevent misuse as a beverage, industrial alcohol is denatured.",
      "Denaturing makes it extremely bitter/toxic → cannot be consumed safely.",
      "Used in: cleaning agents, industrial solvents, fuels (NOT for drinking)."
    ],
    explanation: "Denatured alcohol prevents misuse of industrial ethanol as a beverage by making it toxic.",
    examinerNote: "Frequently asked 2-mark question. Must state both: what it is AND why it is used.",
    source: "NCERT Section 4.4.1"
  },
  {
    id: "sci_c4_q24",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "State the properties of ethanoic acid that show it is an organic acid. Write two uses of ethanoic acid.",
    answer: "Ethanoic acid shows acidic properties (reacts with metals, carbonates, turns litmus red). Used in vinegar and as preservative.",
    steps: [
      "Acidic Properties of Ethanoic Acid (CH₃COOH):",
      "1. Turns blue litmus paper red (pH < 7, weak acid).",
      "2. Reacts with metals: 2CH₃COOH + 2Na → 2CH₃COONa + H₂↑",
      "3. Reacts with NaOH (neutralization): CH₃COOH + NaOH → CH₃COONa + H₂O",
      "4. Reacts with Na₂CO₃ (fizzing/CO₂ released): 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂",
      "Two Uses:",
      "1. As vinegar (5–8% solution) — food preservative and flavoring agent.",
      "2. As a solvent and in making polymers (e.g., rayon, plastics)."
    ],
    explanation: "Ethanoic acid is a weak organic acid. Shows all typical acid properties: litmus, metal, base, carbonate reactions.",
    formula: "\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\to \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow",
    examinerNote: "Board markers specifically check reaction with Na₂CO₃ as a key indicator of acidic nature.",
    source: "NCERT Section 4.4.2 / Board 2023"
  }
];
