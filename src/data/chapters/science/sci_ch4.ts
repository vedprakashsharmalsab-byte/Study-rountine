import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH4_QUESTIONS: VaultQuestion[] = [
  // =========================================================================
  // 1-MARK MCQs & ASSERTION-REASON
  // =========================================================================
  {
    id: "sci_c4_q1",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Carbon forms covalent bonds by sharing its four valence electrons with other atoms because:\n(a) It cannot form C4+ cation due to very high ionization energy.\n(b) It cannot form C4- anion because a nucleus with 6 protons cannot stably hold 10 electrons.\n(c) Both (a) and (b) are correct.\n(d) Carbon possesses high metallic character.",
    options: [
      "It cannot form C4+ cation due to very high ionization energy.",
      "It cannot form C4- anion because a nucleus with 6 protons cannot stably hold 10 electrons.",
      "Both (a) and (b) are correct.",
      "Carbon possesses high metallic character."
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Both (a) and (b) are correct.",
    explanation: "Carbon has atomic number 6 with electronic configuration (2, 4). Gaining 4 electrons requires 6 protons to hold 10 electrons, which is energetically unstable. Losing 4 electrons requires overcoming huge successive ionization energies. Hence, carbon exclusively shares electrons to form covalent bonds.",
    formula: "Carbon (2, 4): Attains noble gas configuration exclusively by electron sharing",
    examinerNote: "NCERT Section 4.1 'Bonding in Carbon'. Foundation conceptual question in CBSE exams.",
    source: "CBSE 2024 / NCERT Section 4.1"
  },
  {
    id: "sci_c4_q2",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "A molecule of propane (C3H8) contains:\n(a) 8 covalent bonds\n(b) 9 covalent bonds\n(c) 10 covalent bonds\n(d) 11 covalent bonds",
    options: [
      "8 covalent bonds",
      "9 covalent bonds",
      "10 covalent bonds",
      "11 covalent bonds"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: 10 covalent bonds.",
    explanation: "In propane (CH3-CH2-CH3), there are 2 single C-C bonds between carbon atoms and 8 single C-H bonds with hydrogen atoms. Total covalent bonds = 2 + 8 = 10 covalent bonds. Formula: 3n + 1 = 3(3) + 1 = 10.",
    formula: "Total Covalent Bonds in Alkane (CnH2n+2) = 3n + 1 = 3(3) + 1 = 10",
    examinerNote: "Students often only count the hydrogens (8) and forget the C-C bonds (2).",
    source: "NCERT Exemplar Q1 / CBSE 2023"
  },
  {
    id: "sci_c4_q3",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Vinegar is a solution of:\n(a) 50% to 60% acetic acid in alcohol\n(b) 5% to 8% acetic acid in water\n(c) 5% to 8% acetic acid in alcohol\n(d) 100% pure ethanoic acid",
    options: [
      "50% to 60% acetic acid in alcohol",
      "5% to 8% acetic acid in water",
      "5% to 8% acetic acid in alcohol",
      "100% pure ethanoic acid"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: 5% to 8% acetic acid in water.",
    explanation: "A 5% to 8% aqueous solution of ethanoic acid (acetic acid) in water is commercially known as vinegar. It is widely used as a preservative in food and pickles.",
    formula: "Vinegar = 5% to 8% aqueous solution of CH3COOH in water",
    examinerNote: "Pure 100% ethanoic acid is called glacial acetic acid (MP 290 K), not vinegar.",
    source: "NCERT Section 4.4.2 / CBSE 2024"
  },
  {
    id: "sci_c4_q4",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Why does graphite conduct electricity whereas diamond is an electrical insulator?\n(a) Diamond has a planar structure while graphite is tetrahedral.\n(b) In graphite, each carbon atom is bonded to three other carbons, leaving one free delocalised electron per atom.\n(c) Graphite has ionic bonds while diamond has covalent bonds.\n(d) Diamond contains impurities that inhibit electron movement.",
    options: [
      "Diamond has a planar structure while graphite is tetrahedral.",
      "In graphite, each carbon atom is bonded to three other carbons, leaving one free delocalised electron per atom.",
      "Graphite has ionic bonds while diamond has covalent bonds.",
      "Diamond contains impurities that inhibit electron movement."
    ],
    correctOption: 1,
    answer: "Option (b) is correct: In graphite, each carbon atom is bonded to three other carbons, leaving one free delocalised electron per atom.",
    explanation: "In graphite, carbon atoms form hexagonal planar layers where each carbon bonds with 3 neighbours. The 4th valence electron is delocalised and free to migrate across layers. In diamond, all 4 valence electrons form rigid tetrahedral covalent bonds, leaving zero free electrons.",
    formula: "Graphite: 3 bonds + 1 delocalised electron -> Conductor; Diamond: 4 bonds -> Insulator",
    examinerNote: "NCERT Section 4.1.1 Allotropes of Carbon.",
    source: "CBSE 2024 / NCERT Intext"
  },
  {
    id: "sci_c4_q5",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "How many structural isomers are possible for Butane (C4H10)?\n(a) 1\n(b) 2\n(c) 3\n(d) 4",
    options: ["1", "2", "3", "4"],
    correctOption: 1,
    answer: "Option (b) is correct: 2 structural isomers.",
    explanation: "Butane (C4H10) has exactly two structural isomers: 1. n-Butane (straight chain: CH3-CH2-CH2-CH3) and 2. Isobutane / 2-Methylpropane (branched chain: CH3-CH(CH3)-CH3).",
    formula: "Isomers of C4H10: Butane and 2-Methylpropane",
    examinerNote: "Pentane (C5H12) has 3 isomers; Butane (C4H10) has 2 isomers.",
    source: "NCERT Section 4.2.2 / CBSE 2023"
  },
  {
    id: "sci_c4_q6",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The functional group present in Propanone (CH3COCH3) is:\n(a) Alcohol (-OH)\n(b) Aldehyde (-CHO)\n(c) Ketone (>C=O)\n(d) Carboxylic acid (-COOH)",
    options: [
      "Alcohol (-OH)",
      "Aldehyde (-CHO)",
      "Ketone (>C=O)",
      "Carboxylic acid (-COOH)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Ketone (>C=O).",
    explanation: "Propanone has the structure CH3-CO-CH3, where a carbonyl group (>C=O) is situated between two carbon atoms. The suffix '-one' denotes the ketone functional group.",
    formula: "Ketone: R-CO-R' (Suffix: -one)",
    examinerNote: "Propanone is the first and simplest member of the ketone family (minimum 3 carbons).",
    source: "NCERT Section 4.2.4 / CBSE 2024"
  },
  {
    id: "sci_c4_q7",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "When ethanol reacts with sodium metal, the gas evolved is:\n(a) Carbon dioxide\n(b) Hydrogen\n(c) Oxygen\n(d) Carbon monoxide",
    options: [
      "Carbon dioxide",
      "Hydrogen",
      "Oxygen",
      "Carbon monoxide"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Hydrogen gas (H2).",
    explanation: "Ethanol reacts with active sodium metal to produce sodium ethoxide and liberate hydrogen gas with effervescence: 2CH3CH2OH + 2Na -> 2CH3CH2ONa + H2(g). The evolved gas burns with a sharp 'pop' sound.",
    formula: "2C2H5OH + 2Na -> 2C2H5ONa + H2(g)",
    examinerNote: "NCERT Section 4.4.1 Reaction of ethanol with sodium.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c4_q8",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The conversion of unsaturated vegetable oils into solid saturated fats (vanaspati ghee) in the presence of nickel catalyst is an example of:\n(a) Substitution reaction\n(b) Addition reaction\n(c) Oxidation reaction\n(d) Esterification reaction",
    options: [
      "Substitution reaction",
      "Addition reaction",
      "Oxidation reaction",
      "Esterification reaction"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Addition reaction (Hydrogenation).",
    explanation: "Unsaturated vegetable oils possess double bonds (C=C). In the presence of a finely divided Nickel (Ni) catalyst, hydrogen adds across the double bonds to form saturated fats (vanaspati ghee). This is an addition / hydrogenation reaction.",
    formula: "R2C=CR2 + H2 -> R2CH-CHR2 [Ni catalyst]",
    examinerNote: "NCERT Section 4.3.3. Industrial hydrogenation.",
    source: "CBSE 2024 / NCERT Intext"
  },
  {
    id: "sci_c4_q9",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Covalent compounds generally have low melting and boiling points.\nReason (R): The intermolecular forces of attraction between covalent molecules are comparatively weak.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "In covalent compounds, the intramolecular covalent bonds within a molecule are strong, but the intermolecular forces (van der Waals forces) between separate molecules are weak. A small amount of thermal energy is sufficient to overcome these intermolecular attractions, leading to low melting and boiling points.",
    formula: "Weak Intermolecular Forces -> Low MP and BP",
    examinerNote: "NCERT Section 4.1. Contrast with ionic compounds (strong electrostatic lattice -> high MP).",
    source: "CBSE Official Sample Paper 2025"
  },
  {
    id: "sci_c4_q10",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Unsaturated hydrocarbons burn with a yellow, smoky flame while saturated hydrocarbons burn with a clean blue flame in sufficient oxygen.\nReason (R): Unsaturated hydrocarbons have a higher percentage of carbon, which does not undergo complete combustion in open air.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Alkenes and alkynes have a higher carbon-to-hydrogen ratio compared to alkanes. In atmospheric air, available oxygen is insufficient to completely oxidise all carbon atoms, resulting in unburnt carbon particles (soot) that glow incandescently yellow and emit smoke.",
    formula: "High Carbon % -> Incomplete Combustion -> Sooty Yellow Flame",
    examinerNote: "NCERT Section 4.3.1 Combustion.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c4_q11",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Synthetic detergents can be used for washing clothes effectively even in hard water.\nReason (R): The charged sulphonate or ammonium groups of synthetic detergents do not form insoluble precipitates (scum) with calcium and magnesium ions in hard water.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Soaps react with Ca(2+) and Mg(2+) ions in hard water to precipitate insoluble calcium/magnesium salts of fatty acids (scum). Synthetic detergents are sodium salts of sulphonic acids; their calcium and magnesium salts are soluble in water, allowing them to lather instantly without forming scum.",
    formula: "Detergent Head: -SO3(-) Na+ (Does NOT precipitate with Ca2+ or Mg2+)",
    examinerNote: "NCERT Section 4.5 Soaps and Detergents.",
    source: "CBSE Board 2023"
  },

  // =========================================================================
  // 2-MARK VERY SHORT ANSWER (VSA)
  // =========================================================================
  {
    id: "sci_c4_q12",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "What is meant by catenation? Why does carbon exhibit the maximum tendency for catenation compared to silicon?",
    answer: "Catenation is the unique ability of an element to form covalent bonds with other atoms of the same element to construct long open chains, branched chains, or closed rings.\nReason for carbon's maximum catenation:\nCarbon has an exceptionally small atomic size. Because the atomic radius is tiny, the shared electron pair is held tightly by the positively charged nuclei, forming very strong, stable C-C bonds (bond energy ~348 kJ/mol). Silicon has larger atoms; its Si-Si bonds are much weaker and reactive, limiting silicon chains to only 7-8 atoms.",
    explanation: "Small atomic size -> short bond length -> immense bond strength.",
    formula: "Catenation: C-C-C-C... (Stable due to tiny atomic radius and high bond energy)",
    examinerNote: "NCERT Section 4.2. Award 1 mark for definition; 1 mark for small atomic size / strong bond energy explanation.",
    source: "NCERT Intext / CBSE 2024"
  },
  {
    id: "sci_c4_q13",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Draw the electron dot structures of:\n(a) Methane (CH4)\n(b) Carbon dioxide (CO2)",
    answer: "(a) Methane (CH4):\n    Central Carbon atom (4 valence electrons) shares 1 electron with each of the 4 Hydrogen atoms (1 valence electron each):\n    H:C(:H)(:H):H\n    Each H atom attains a stable duplet (2 electrons) and Carbon attains an octet (8 electrons). Total 4 single covalent bonds.\n\n(b) Carbon dioxide (CO2):\n    Central Carbon atom shares 2 pairs of electrons with each of the two Oxygen atoms (6 valence electrons each):\n    :O::C::O:\n    Forms two double covalent bonds (O=C=O). Carbon has 8 electrons; each Oxygen atom has 8 electrons (including 2 non-bonding lone pairs).",
    explanation: "Standard Lewis dot structures satisfying octet and duplet rules.",
    formula: "CH4: 4 single bonds; CO2: 2 double bonds (O=C=O)",
    examinerNote: "1 mark per accurate electron dot diagram showing shared pairs.",
    source: "NCERT Section 4.1 / CBSE 2024"
  },
  {
    id: "sci_c4_q14",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Differentiate between saturated and unsaturated hydrocarbons. Give the molecular formula and structure of one member of each family.",
    answer: "1. Saturated Hydrocarbons (Alkanes, CnH2n+2):\n   - Hydrocarbons in which carbon atoms are joined exclusively by single covalent bonds.\n   - Example: Ethane (C2H6) -> Structure: CH3-CH3.\n\n2. Unsaturated Hydrocarbons (Alkenes & Alkynes, CnH2n & CnH2n-2):\n   - Hydrocarbons containing one or more double or triple covalent bonds between carbon atoms.\n   - Example: Ethene (C2H4) -> Structure: CH2=CH2, or Ethyne (C2H2) -> Structure: CH=CH.",
    explanation: "Saturated hydrocarbons undergo substitution; unsaturated undergo addition reactions.",
    formula: "Alkane: CnH2n+2; Alkene: CnH2n; Alkyne: CnH2n-2",
    examinerNote: "1 mark for definition difference; 1 mark for formulas and structures.",
    source: "NCERT Section 4.2.1 / CBSE 2023"
  },
  {
    id: "sci_c4_q15",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "What happens when ethanol is heated with excess concentrated sulphuric acid at 443 K (170 deg C)? Write the balanced chemical equation and state the role of conc. H2SO4.",
    answer: "When ethanol is heated with excess concentrated sulphuric acid at 443 K, it undergoes dehydration to produce ethene gas and water:\nEquation: CH3-CH2OH -> CH2=CH2 + H2O [Conc. H2SO4 at 443 K]\n\nRole of Concentrated H2SO4: It acts as a powerful DEHYDRATING AGENT that chemically extracts the water molecule from the ethanol molecule.",
    explanation: "Temperature must be precisely 443 K (170 deg C). At 413 K (140 deg C), diethyl ether is formed.",
    formula: "C2H5OH -> C2H4 + H2O (Conc. H2SO4, 443 K)",
    examinerNote: "1 mark for equation with 443 K condition; 1 mark for stating conc. H2SO4 is a dehydrating agent.",
    source: "NCERT Section 4.4.1 / CBSE 2024"
  },
  {
    id: "sci_c4_q16",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Write the molecular formulas and IUPAC names of the first two members of the homologous series of carboxylic acids.",
    answer: "1. First Member (1 Carbon):\n   - Molecular Formula: HCOOH\n   - IUPAC Name: Methanoic acid (Common name: Formic acid)\n\n2. Second Member (2 Carbons):\n   - Molecular Formula: CH3COOH\n   - IUPAC Name: Ethanoic acid (Common name: Acetic acid)",
    explanation: "General formula for carboxylic acids is CnH2n+1COOH (for n = 0, 1, 2...).",
    formula: "HCOOH (Methanoic acid) and CH3COOH (Ethanoic acid)",
    examinerNote: "1 mark for each member (formula + IUPAC name).",
    source: "NCERT Section 4.2.4 / CBSE 2023"
  },

  // =========================================================================
  // 3-MARK SHORT ANSWER (SA)
  // =========================================================================
  {
    id: "sci_c4_q17",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Draw the electron dot structures of:\n(a) Water (H2O)\n(b) Ethene (C2H4)\n(c) Nitrogen molecule (N2)",
    answer: "(a) Water (H2O):\n    Central Oxygen atom (6 valence electrons) shares 1 electron each with two Hydrogen atoms (1 valence electron each). Oxygen retains 2 non-bonding lone pairs: H:O(:):H. Forms 2 single covalent bonds.\n\n(b) Ethene (C2H4):\n    Two Carbon atoms share 2 pairs of electrons between them (forming a double bond C=C), and each carbon shares 1 electron pair with each of two hydrogen atoms: H2C::CH2. Total 6 covalent bonds.\n\n(c) Nitrogen molecule (N2):\n    Two Nitrogen atoms (5 valence electrons each) share 3 pairs of electrons between them, forming a triple covalent bond (:N:::N:). Each nitrogen retains 1 lone pair.",
    explanation: "Lewis structures illustrate octet completion in covalent molecules.",
    formula: "H2O: 2 single bonds; C2H4: 1 double C=C + 4 C-H; N2: 1 triple bond (N=N)",
    examinerNote: "1 mark per correct diagram with complete valence electrons and shared pairs.",
    source: "NCERT Section 4.1 / CBSE 2024"
  },
  {
    id: "sci_c4_q18",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "What are structural isomers? Draw the structural formulas and write the IUPAC names of all three structural isomers of Pentane (C5H12).",
    answer: "Structural isomers are compounds that possess the same molecular formula but different structural arrangements of atoms in their molecules.\n\nIsomers of Pentane (C5H12):\n1. n-Pentane (Pentane):\n   CH3-CH2-CH2-CH2-CH3 (Unbranched straight chain of 5 carbons)\n\n2. Isopentane (2-Methylbutane):\n   CH3-CH(CH3)-CH2-CH3 (4-carbon chain with a methyl branch on carbon-2)\n\n3. Neopentane (2,2-Dimethylpropane):\n   C(CH3)4 (3-carbon chain with two methyl branches on central carbon-2)",
    explanation: "Pentane is the smallest alkane to exhibit 3 structural isomers.",
    formula: "Pentane, 2-Methylbutane, 2,2-Dimethylpropane",
    examinerNote: "0.5 marks for definition; 2.5 marks for drawing all 3 structures with correct IUPAC names.",
    source: "NCERT Section 4.2.2 / CBSE 2024"
  },
  {
    id: "sci_c4_q19",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "(a) What is a homologous series of carbon compounds?\n(b) State three core characteristics of a homologous series.\n(c) Why do members of a homologous series show a gradual gradation in physical properties?",
    answer: "(a) A homologous series is a family of structurally related organic compounds containing the same functional group, in which successive members differ from each other by a -CH2- (methylene) unit.\n\n(b) Three Characteristics:\n  1. Successive members differ by a molecular mass of 14 unified mass units (14 u).\n  2. All members conform to the same general molecular formula (e.g. Alcohols: CnH2n+1OH).\n  3. All members possess identical chemical properties because they contain the same functional group.\n\n(c) Gradation in Physical Properties: As molecular mass increases across the series, molecular size increases. Larger molecules have stronger intermolecular van der Waals forces of attraction, requiring more thermal energy to separate them; hence melting point, boiling point, and density increase progressively.",
    explanation: "Chemical properties are dictated by the functional group; physical properties depend on molecular mass and chain length.",
    formula: "Successive members differ by -CH2- and 14 u mass",
    examinerNote: "1 mark for definition; 1.5 marks for characteristics; 0.5 marks for physical gradation reason.",
    source: "NCERT Section 4.2.4 / CBSE 2023"
  },
  {
    id: "sci_c4_q20",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Describe two chemical tests to distinguish between Ethanol (C2H5OH) and Ethanoic acid (CH3COOH) in the laboratory.",
    answer: "1. Sodium Hydrogencarbonate Test (Brisk Effervescence Test):\n   - Add a pinch of sodium hydrogencarbonate (NaHCO3) to both liquids.\n   - Observation: Ethanoic acid reacts vigorously with brisk effervescence of carbon dioxide (CO2) gas, which turns lime water milky: CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2.\n   - Ethanol does NOT react with NaHCO3; no effervescence is observed.\n\n2. Litmus Test:\n   - Test both liquids with blue litmus paper.\n   - Observation: Ethanoic acid is an acid (pH ~3) and turns blue litmus paper red.\n   - Ethanol is a neutral organic compound (pH ~7) and produces no color change on blue or red litmus paper.",
    explanation: "The NaHCO3 test is the definitive board exam diagnostic test for carboxylic acids.",
    formula: "CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2(g) [Lime water milky]",
    examinerNote: "1.5 marks per test with reagent, reaction, and distinct observations for both substances.",
    source: "NCERT Intext Question / CBSE 2024"
  },
  {
    id: "sci_c4_q21",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "(a) What is an addition reaction? Write one example with chemical equation.\n(b) How is an addition reaction used in the industrial hydrogenation of vegetable oils?\n(c) From a health perspective, which type of fats (saturated or unsaturated) should be consumed, and why?",
    answer: "(a) An addition reaction is a reaction in which an unsaturated compound combines with another substance across its double or triple bonds to form a single saturated product without eliminating any atoms.\n   Example: CH2=CH2 + H2 -> CH3-CH3 [Ni catalyst, heat]\n\n(b) Industrial Application: Vegetable oils are liquid unsaturated hydrocarbons containing long fatty acid chains with double bonds. Hydrogen gas is bubbled through vegetable oils in the presence of a finely divided Nickel (Ni) catalyst at ~200 deg C. The double bonds are hydrogenated into single bonds, converting liquid oil into solid saturated fat (vanaspati ghee).\n\n(c) Health Context: Vegetable oils containing UNSATURATED fatty acids are healthy and should be consumed for cooking. Animal fats containing SATURATED fatty acids increase blood LDL cholesterol levels and cardiovascular disease risk, making them harmful to health.",
    explanation: "Unsaturated vegetable oils = healthy liquid fats; Saturated fats (vanaspati ghee) = harmful solid fats.",
    formula: "Unsaturated Oil + H2 -> Saturated Fat (Ni catalyst)",
    examinerNote: "1 mark for definition and equation; 1 mark for hydrogenation; 1 mark for health dietary perspective.",
    source: "NCERT Section 4.3.3 / CBSE 2024"
  },

  // =========================================================================
  // 5-MARK LONG ANSWER (LA)
  // =========================================================================
  {
    id: "sci_c4_q22",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "(a) Differentiate between Esterification and Saponification reactions with balanced chemical equations for each.\n(b) What are esters? State two important commercial uses of esters.\n(c) What happens when ethanoic acid reacts with sodium hydroxide? Write the balanced chemical equation and name the salt formed.",
    answer: "(a) Esterification vs Saponification:\n\n1. Esterification Reaction:\n   - Definition: The condensation reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst (conc. H2SO4) to form a sweet-smelling ester and water.\n   - Equation: CH3COOH(l) [Ethanoic acid] + C2H5OH(l) [Ethanol] -> CH3COOC2H5(l) [Ethyl ethanoate / Ester] + H2O(l) [in presence of conc. H2SO4]\n\n2. Saponification Reaction:\n   - Definition: The alkaline hydrolysis of an ester with a strong base (such as NaOH) to yield the parent alcohol and the sodium salt of the carboxylic acid (soap).\n   - Equation: CH3COOC2H5(l) + NaOH(aq) -> CH3COONa(aq) [Sodium ethanoate] + C2H5OH(l) [Ethanol]\n\n(b) Esters & Commercial Uses:\n   - Esters are sweet-smelling, pleasant, fruity organic compounds formed by condensation of acids and alcohols.\n   - Commercial Uses:\n     1. Used in the manufacture of perfumes, deodorants, and cosmetics.\n     2. Used as synthetic artificial flavouring agents in ice creams, candies, beverages, and confectionery.\n\n(c) Reaction with Sodium Hydroxide:\n   - Ethanoic acid neutralises sodium hydroxide to form sodium ethanoate and water:\n     CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) [Sodium ethanoate] + H2O(l)",
    explanation: "Saponification is named after 'sapo' (Latin for soap) because it is the fundamental process used in soap manufacture.",
    formula: "Esterification: Acid + Alcohol -> Ester + H2O; Saponification: Ester + NaOH -> Soap + Alcohol",
    examinerNote: "2 marks for esterification vs saponification with equations; 1.5 marks for ester definition & uses; 1.5 marks for NaOH reaction.",
    source: "CBSE Board 2024 (Set 31/1/1)"
  },
  {
    id: "sci_c4_q23",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "An organic compound 'A' of molecular formula C2H6O is an active ingredient of all alcoholic beverages and is also used in cough syrups.\n(a) Identify compound 'A' and write its structural formula.\n(b) When 'A' is heated with alkaline KMnO4, it oxidises to form compound 'B'. Identify 'B' and write the balanced chemical equation.\n(c) When 'A' and 'B' are warmed together in the presence of a few drops of concentrated sulphuric acid, a sweet-smelling compound 'C' is formed. Identify 'C', name the reaction, and write the balanced equation.\n(d) What happens when compound 'C' is treated with sodium hydroxide solution? Write the chemical equation.\n(e) What happens when a piece of sodium metal is dropped into compound 'A'? Write the balanced equation and state the observation.",
    answer: "(a) Compound 'A' is Ethanol (Ethyl alcohol). Structural Formula: CH3-CH2-OH (or C2H5OH).\n\n(b) Oxidation to Compound 'B':\n    Compound 'B' is Ethanoic acid (Acetic acid, CH3COOH).\n    Equation: CH3CH2OH + 2[O] -> CH3COOH + H2O [Alkaline KMnO4, Heat]\n\n(c) Formation of Compound 'C':\n    Compound 'C' is Ethyl ethanoate (an ester, CH3COOC2H5).\n    Reaction Name: Esterification reaction.\n    Equation: CH3COOH + C2H5OH -> CH3COOC2H5 + H2O [Conc. H2SO4]\n\n(d) Saponification of 'C':\n    Treatment with NaOH hydrolyses the ester back to sodium ethanoate and ethanol:\n    CH3COOC2H5 + NaOH -> CH3COONa + C2H5OH\n\n(e) Reaction of 'A' with Sodium Metal:\n    Sodium displaces hydrogen from ethanol with effervescence:\n    2CH3CH2OH + 2Na -> 2CH3CH2ONa [Sodium ethoxide] + H2(g)\n    Observation: Vigorous bubbling of hydrogen gas, which burns with a sharp 'pop' sound.",
    explanation: "A = C2H5OH, B = CH3COOH, C = CH3COOC2H5. Classic 5-mark organic deduction.",
    formula: "A = Ethanol; B = Ethanoic acid; C = Ethyl ethanoate",
    examinerNote: "1 mark each for parts (a), (b), (c), (d), and (e).",
    source: "CBSE Board 2024 / NCERT Intext"
  },
  {
    id: "sci_c4_q24",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "Explain the cleansing action of soaps in detail:\n(a) Describe the molecular structure of a soap molecule, identifying its two distinct functional parts.\n(b) Explain with a diagrammatic description how soap molecules form micelles around an oily dirt droplet on dirty cloth.\n(c) How does mechanical agitation help in removing the dirt?\n(d) Why do soaps not clean effectively in hard water? What is scum and write its formation reaction?",
    answer: "(a) Molecular Structure of Soap:\n    A soap molecule (such as sodium stearate, C17H35COO(-) Na(+)) consists of two chemically distinct parts:\n    1. Hydrophobic Tail: A long, non-polar hydrocarbon chain (C17H35-) that is insoluble in water (water-hating) but dissolves in oils and grease.\n    2. Hydrophilic Head: An ionic carboxylate group (-COO(-) Na(+)) that is soluble in polar water (water-loving) and insoluble in oils.\n\n(b) Micelle Formation:\n    When soap is dissolved in water on greasy cloth, soap molecules orient themselves radially into spherical clusters called micelles:\n    - The hydrophobic hydrocarbon tails point inwards, embedding into and dissolving in the central oil/grease droplet.\n    - The polar hydrophilic ionic heads point outwards into the surrounding water.\n    - Electrostatic repulsion between the negatively charged heads (-COO(-)) on the micelle surfaces prevents the droplets from coalescing together, creating a stable colloidal emulsion.\n\n(c) Mechanical Agitation:\n    When the fabric is scrubbed or agitated in water, the suspended micelles carrying the trapped oily dirt droplets are pulled off the fabric surface and remain suspended in water, allowing them to be rinsed away easily.\n\n(d) Hard Water Problem & Scum:\n    Hard water contains dissolved salts of Calcium (Ca(2+)) and Magnesium (Mg(2+)). When soap is added, the soap molecules react with Ca(2+) and Mg(2+) ions to form insoluble curdy white precipitates called SCUM:\n    2C17H35COONa(aq) + Ca(2+)(aq) -> (C17H35COO)2Ca(s) [Calcium stearate / Scum] + 2Na+(aq)\n    This wastes a large amount of soap and sticks to the cloth, preventing lathering and hindering effective cleaning.",
    explanation: "Amphiphilic nature of soap molecules drives micelle thermodynamics and emulsification.",
    formula: "Soap: R-COO(-) Na(+); Micelle: Tails inward into oil, Heads outward in water; Scum: (RCOO)2Ca",
    examinerNote: "Award 1.5 marks for molecular structure; 1.5 marks for micelle formation; 1 mark for agitation; 1 mark for hard water scum reaction.",
    source: "NCERT Section 4.5 / CBSE Board 2024"
  },

  // =========================================================================
  // 4-MARK CASE-BASED / COMPETENCY QUESTIONS
  // =========================================================================
  {
    id: "sci_c4_q25",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 4,
    type: "Case Study",
    question: "Read the passage and answer the following questions:\n\nCarbon exhibits allotropy, existing in diverse structural forms with remarkably contrasting physical properties despite having identical chemical compositions. In diamond, each carbon atom is covalently bonded to four other carbon atoms in a rigid, three-dimensional tetrahedral network. In graphite, each carbon atom is bonded to three other carbon atoms in the same plane, giving a hexagonal array of layered sheets. Another class of carbon allotropes discovered in 1985 are the fullerenes, of which C60 (Buckminsterfullerene) consists of 60 carbon atoms arranged in interlocking pentagons and hexagons resembling a football.\n\n(a) Why is diamond the hardest natural substance known while graphite is soft and slippery? [1.5M]\n(b) Why does graphite conduct electricity whereas diamond is an electrical insulator? [1.5M]\n(c) What was the inspiration behind the naming of Buckminsterfullerene (C60)? [1M]",
    answer: "(a) Hardness Contrast: In diamond, each carbon atom is tightly locked to 4 other carbons by strong covalent bonds in an unyielding 3D tetrahedral framework, making it exceptionally hard. In graphite, carbon atoms form 2D hexagonal planar layers held together only by weak van der Waals forces. These layers can easily slide over one another, making graphite soft, smooth, and slippery (used as a lubricant).\n\n(b) Electrical Conduction: In graphite, each carbon atom forms 3 covalent bonds, leaving its fourth valence electron delocalised and free to move throughout the layer, conducting electricity. In diamond, all four valence electrons are locked in covalent bonds with zero free mobile electrons, making it an electrical insulator.\n\n(c) Fullerenes were named after the visionary American architect Richard Buckminster Fuller because the cage-like molecular structure of C60 resembles the geodesic domes he designed.",
    explanation: "Allotropy demonstrates how microscopic atomic lattice geometry dictates macroscopic physical properties.",
    formula: "Diamond: 3D Tetrahedral (Insulator); Graphite: 2D Hexagonal Layers (Conductor); C60: Geodesic Dome",
    examinerNote: "1.5 marks for part (a); 1.5 marks for part (b); 1 mark for part (c).",
    source: "CBSE Competency-Based Question Bank 2025"
  },
  {
    id: "sci_c4_q26",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 4,
    type: "Case Study",
    question: "Read the case text regarding soaps and synthetic detergents and answer the questions below:\n\nIn everyday hygiene and laundering, cleaning dirt—which is predominantly oily or greasy—presents a chemical challenge because oil does not dissolve in water. Soaps and synthetic detergents belong to a class of compounds known as surfactants. Soaps are sodium or potassium salts of long-chain fatty acids manufactured by boiling animal fats or vegetable oils with sodium hydroxide. While soaps are effective in soft water, their cleansing power is severely compromised in regions with hard water containing dissolved calcium and magnesium chlorides or sulphates. To solve this limitation, synthetic detergents were developed in the mid-20th century.\n\n(a) Explain why a soap solution appears cloudy or milky in water. [1M]\n(b) What chemical difference distinguishes synthetic detergents from soaps? [1.5M]\n(c) Give one ecological advantage of soaps over synthetic detergents, and one practical advantage of detergents over soaps. [1.5M]",
    answer: "(a) A soap solution appears cloudy because soap micelles are large colloidal clusters (aggregates of hundreds of molecules). These colloidal particles are large enough to scatter incident visible light rays (Tyndall effect), making the soap solution appear cloudy or translucent.\n\n(b) Chemical Difference: Soaps are sodium or potassium salts of long-chain carboxylic acids (-COO(-) Na(+)). Synthetic detergents are sodium salts of long-chain sulphonic acids (-SO3(-) Na(+)) or ammonium salts with chlorides or bromides. The sulphonate groups of detergents do not form insoluble precipitates with Ca(2+) and Mg(2+) ions in hard water.\n\n(c) Ecological vs Practical Comparison:\n    - Ecological Advantage of Soaps: Soaps are 100% biodegradable because microorganisms can metabolise natural linear fatty acid chains easily, avoiding water pollution.\n    - Practical Advantage of Detergents: Detergents clean effectively and produce rich lather in both soft water and hard water, whereas soaps form useless scum in hard water.",
    explanation: "Tyndall effect explains micelle cloudiness; biodegradability distinguishes soaps from branched non-biodegradable detergents.",
    formula: "Soap: R-COO(-) Na+ (Biodegradable); Detergent: R-SO3(-) Na+ (Hard Water Resistant)",
    examinerNote: "1 mark for Tyndall effect/cloudiness; 1.5 marks for chemical functional groups; 1.5 marks for ecological/practical trade-offs.",
    source: "CBSE Competency-Based Sample Paper 2025"
  },
  {
    id: "sci_c4_q27",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "The total number of single covalent bonds present in a molecule of pentane (C5H12) is:\n(a) 12\n(b) 15\n(c) 16\n(d) 17",
    options: [
      "12",
      "15",
      "16",
      "17"
    ],
    correctOption: 2,
    answer: "(c) 16",
    explanation: "Pentane (C5H12) contains a backbone of 5 carbon atoms connected by 4 C-C single bonds, and 12 hydrogen atoms connected to carbons by 12 C-H single bonds. Total single covalent bonds = 4 + 12 = 16.",
    formula: "Total covalent bonds in alkane CnH(2n+2) = (n - 1) + (2n + 2) = 3n + 1 = 3(5) + 1 = 16",
    examinerNote: "Common error: students only count C-H bonds (12) and forget the 4 C-C backbone bonds.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c4_q28",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 1,
    type: "MCQ",
    question: "When alkaline potassium permanganate (KMnO4) or acidified potassium dichromate (K2Cr2O7) is warmed with ethanol, the purple/orange color discharges because:\n(a) They act as reducing agents removing oxygen from ethanol\n(b) They act as oxidising agents supplying nascent oxygen to oxidise ethanol into ethanoic acid\n(c) Ethanol dehydrates into ethene gas\n(d) Potassium ions react violently with hydrogen to liberate hydrogen gas",
    options: [
      "They act as reducing agents removing oxygen from ethanol",
      "They act as oxidising agents supplying nascent oxygen to oxidise ethanol into ethanoic acid",
      "Ethanol dehydrates into ethene gas",
      "Potassium ions react violently with hydrogen to liberate hydrogen gas"
    ],
    correctOption: 1,
    answer: "(b) They act as oxidising agents supplying nascent oxygen to oxidise ethanol into ethanoic acid.",
    explanation: "Alkaline KMnO4 or acidified K2Cr2O7 are powerful oxidising agents that donate nascent oxygen atoms [O] to oxidise the primary alcohol ethanol (CH3CH2OH) into ethanoic acid (CH3COOH).",
    formula: "CH3CH2OH + 2[O] --Alkaline KMnO4 / Heat--> CH3COOH + H2O",
    examinerNote: "Direct NCERT Section 4.3.2. Note the reagent role as an oxidising agent.",
    source: "NCERT Class 10 Section 4.3.2 / CBSE 2023"
  },
  {
    id: "sci_c4_q29",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Explain why carbon cannot attain a stable noble gas configuration by forming either C(4+) cation or C(4-) anion, and why it forms exclusively covalent bonds.",
    answer: "Energetic and Nuclear Constraints:\n1. Why not C(4-): Carbon has 6 protons in its nucleus. If it gains 4 electrons to form C(4-), it would be energetically impossible for a small nucleus with 6 protons to stably hold 10 electrons.\n2. Why not C(4+): Carbon has an atomic radius that holds its valence electrons tightly. Removing 4 electrons successively to form C(4+) requires an immense amount of ionization energy, leaving a tiny cation with 6 protons holding just 2 electrons.\nConclusion: To overcome these energy barriers, carbon achieves an octet exclusively by sharing its 4 valence electrons with other atoms, forming covalent bonds.",
    explanation: "NCERT Section 4.1. Electrostatic nuclear-electron attraction prevents tetra-ionic states in period 2 elements.",
    formula: "Carbon (Z=6): 2,4. Shared pairs overcome C(4+) and C(4-) energetic instability.",
    examinerNote: "1 mark for 6 protons vs 10 electrons in C(4-); 1 mark for massive ionization energy in C(4+).",
    source: "NCERT Section 4.1 / CBSE 2024"
  },
  {
    id: "sci_c4_q30",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 2,
    type: "VSA",
    question: "Why is pure ethanoic acid commonly referred to as 'glacial acetic acid'? State its melting point and one commercial use.",
    answer: "Glacial Acetic Acid:\n- Pure (100% anhydrous) ethanoic acid has a melting point of 290 K (17 °C).\n- In cold climates or during winter months, it freezes readily into colourless, transparent ice-like crystals resembling glaciers, which earned it the name 'glacial acetic acid'.\n- Commercial Use: Used as a solvent, in the industrial manufacture of cellulose acetate (rayon fibers), and in the preparation of synthetic esters for perfumes and flavorings.",
    explanation: "Strong intermolecular hydrogen bonding elevates ethanoic acid's melting point above common ambient winter temperatures.",
    formula: "CH3COOH Melting Point = 290 K (17 °C); Glacial crystalline state",
    examinerNote: "1 mark for 290 K / 17 °C melting point and freezing rationale; 1 mark for commercial use.",
    source: "NCERT Section 4.4.2 / CBSE Board 2023"
  },
  {
    id: "sci_c4_q31",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "Draw the electron dot structures and describe the bonding for:\n(a) Nitrogen molecule (N2)\n(b) Ammonia molecule (NH3)\n(c) Cyclohexane (C6H12)",
    answer: "(a) Nitrogen Molecule (N2):\n  - Nitrogen (Z = 7) has electronic configuration 2,5. Each nitrogen atom requires 3 electrons to complete its octet.\n  - The two nitrogen atoms share three pairs of valence electrons between them, forming a strong Triple Covalent Bond (:N:::N: or N≡N) with one unshared lone pair on each atom.\n\n(b) Ammonia Molecule (NH3):\n  - Central nitrogen atom shares one valence electron with each of the three hydrogen atoms, forming three Single Covalent Bonds (N-H).\n  - The nitrogen atom retains one unshared non-bonding lone pair of electrons (:NH3).\n\n(c) Cyclohexane (C6H12):\n  - A closed ring of 6 carbon atoms, where each carbon forms 2 single covalent bonds with adjacent carbons (C-C) and 2 single covalent bonds with hydrogen atoms (C-H).\n  - Total single covalent bonds = 6 (ring C-C) + 12 (C-H) = 18 single covalent bonds.",
    explanation: "Lewis structures illustrate octet fulfillment through single, double, and triple electron pair sharing.",
    formula: "N2: Triple Bond (3 shared pairs); NH3: 3 Single Bonds + 1 Lone Pair; C6H12: 18 Single Bonds",
    examinerNote: "1 mark per part. Must accurately describe shared electron pairs and lone pairs.",
    source: "NCERT Section 4.1 & 4.2.2 / CBSE 2024"
  },
  {
    id: "sci_c4_q32",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "(a) Why do saturated hydrocarbons generally burn with a clear blue flame, whereas unsaturated hydrocarbons burn with a yellow smoky flame?\n(b) Why does the bottom of cooking vessels on a kitchen gas stove sometimes turn blackened on the outside? What corrective measure should be taken?",
    answer: "(a) Combustion Mechanism:\n    - Saturated Hydrocarbons (alkanes): Have a lower percentage of carbon and undergo complete combustion in adequate air, releasing CO2 and H2O with high heat and a non-luminous, clean blue flame.\n    - Unsaturated Hydrocarbons (alkenes and alkynes): Have a much higher carbon-to-hydrogen ratio. They undergo incomplete combustion in atmospheric air, leaving unburnt carbon particles (soot) which become incandescent and glow with a yellow luminous, smoky flame.\n\n(b) Blackened Vessel Bottoms:\n    - Cause: The air inlets (ventilation holes) of the gas burner are blocked or clogged by dirt/grease. This starves the fuel of sufficient oxygen, leading to incomplete combustion of LPG, producing unburnt carbon soot that deposits on cooking vessels.\n    - Corrective Measure: Clean and unblock the air holes/vents of the stove burner to restore adequate air-to-fuel ratio and complete combustion.",
    explanation: "NCERT Section 4.3.1. Stoichiometric oxygen availability dictates complete vs incomplete hydrocarbon combustion.",
    formula: "Complete: CH4 + 2O2 -> CO2 + 2H2O (Blue); Incomplete: Soot (C) + CO (Yellow smoky)",
    examinerNote: "1.5 marks for carbon percentage and flame colors; 1.5 marks for blocked air holes and corrective action.",
    source: "NCERT Section 4.3.1 / CBSE Board 2024"
  },
  {
    id: "sci_c4_q33",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 3,
    type: "SA",
    question: "(a) What is catalytic hydrogenation? Write the balanced chemical equation with reaction conditions and catalyst.\n(b) How is this reaction used in the food industry to manufacture vanaspati ghee from vegetable oils?\n(c) State one reason why health experts advise using unsaturated vegetable oils over saturated fats for everyday cooking.",
    answer: "(a) Catalytic Hydrogenation: The addition of molecular hydrogen (H2) across the carbon-carbon double or triple bonds of unsaturated hydrocarbons in the presence of a metal catalyst such as Nickel (Ni) or Palladium (Pd) to yield saturated hydrocarbons:\n    R2C=CR2 + H2 --Ni catalyst / 473 K--> R2CH-CHR2\n\n(b) Industrial Application:\n    Vegetable oils (such as groundnut, sunflower, or mustard oil) are liquid at room temperature because they contain long unsaturated carbon chains with double bonds. Passing hydrogen gas through hot vegetable oil in the presence of finely divided nickel catalyst converts unsaturated liquid oils into solid, saturated fats known as vanaspati ghee.\n\n(c) Health Rationale:\n    Unsaturated vegetable oils contain healthy cis-polyunsaturated fatty acids that maintain healthy blood cholesterol profiles. In contrast, saturated animal fats and hydrogenated fats contain saturated fatty acids and trans-fats that increase low-density lipoprotein (LDL / bad cholesterol), elevating the risk of cardiovascular diseases and atherosclerosis.",
    explanation: "NCERT Section 4.3.4. Addition reaction across pi-bonds transforms liquid oils into solid triglycerides.",
    formula: "Unsaturated Oil (Liquid) + H2 --Ni--> Saturated Fat (Solid Vanaspati Ghee)",
    examinerNote: "1 mark for definition and chemical equation; 1 mark for industrial vanaspati process; 1 mark for nutritional health comparison.",
    source: "NCERT Section 4.3.4 / CBSE Board 2023"
  },
  {
    id: "sci_c4_q34",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "An organic compound 'A' having molecular formula C2H4O2 reacts with ethanol in the presence of concentrated H2SO4 to form a sweet fruity-smelling compound 'B'.\nWhen compound 'B' is refluxed with aqueous sodium hydroxide solution, it regenerates ethanol along with compound 'C'.\nWhen compound 'A' is treated with solid sodium hydrogen carbonate (NaHCO3), brisk effervescence of a gas 'D' is evolved which turns lime water milky.\n(a) Identify the compounds A, B, C, and D.\n(b) Write balanced chemical equations for all three reactions involved.\n(c) State the common name, IUPAC name, and functional group present in compound A.",
    answer: "(a) Identification of Compounds:\n  - Compound A: Ethanoic acid (Acetic acid), CH3COOH\n  - Compound B: Ethyl ethanoate (an ester), CH3COOCH2CH3\n  - Compound C: Sodium ethanoate (Sodium acetate), CH3COONa\n  - Compound D: Carbon dioxide gas, CO2\n\n(b) Balanced Chemical Equations:\n  1. Esterification Reaction:\n     CH3COOH(l) + CH3CH2OH(l) --Conc. H2SO4--> CH3COOCH2CH3(l) + H2O(l)\n  2. Saponification Reaction (Alkaline Hydrolysis of Ester):\n     CH3COOCH2CH3(l) + NaOH(aq) -> CH3COONa(aq) + CH3CH2OH(l)\n  3. Reaction with Sodium Hydrogen Carbonate:\n     CH3COOH(aq) + NaHCO3(s) -> CH3COONa(aq) + H2O(l) + CO2(g)↑\n     [CO2 turns lime water milky: Ca(OH)2 + CO2 -> CaCO3(s) + H2O]\n\n(c) Compound A Details:\n  - Common Name: Acetic Acid\n  - IUPAC Name: Ethanoic Acid\n  - Functional Group: Carboxylic Acid group (-COOH)",
    explanation: "Classic Board deductive sequence integrating esterification, saponification, and carbonate acid effervescence.",
    formula: "A: CH3COOH; B: CH3COOC2H5; C: CH3COONa; D: CO2",
    examinerNote: "2 marks for identification of A, B, C, D; 2 marks for balanced chemical equations; 1 mark for names and functional group.",
    source: "CBSE Board 2024 / Exemplar HOTS"
  },
  {
    id: "sci_c4_q35",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 4,
    type: "Case Study",
    question: "Read the experimental passage based on NCERT Activity 4.10 and Activity 4.11 and answer the questions:\n\nA student took two test tubes, labelled 'P' and 'Q'. In test tube P, 10 mL of distilled water was placed, and in test tube Q, 10 mL of hard water containing dissolved calcium chloride (CaCl2) was placed. Five drops of liquid soap solution were added to both test tubes, and both were shaken vigorously for 20 seconds. Test tube P produced an abundant layer of thick foam/lather that remained persistent for minutes. Test tube Q formed a sticky, white curd-like precipitate with negligible foam. When the experiment in test tube Q was repeated using a synthetic detergent instead of soap, abundant foam was immediately formed.\n\n(a) What causes hardness in water? Name two mineral ions responsible for water hardness. [1M]\n(b) Explain why soap forms a curdy white precipitate (scum) in test tube Q and write the chemical equation using calcium ion. [1.5M]\n(c) Why do synthetic detergents function effectively even in hard water? State one environmental precaution associated with detergent use. [1.5M]",
    answer: "(a) Cause of Hardness: The presence of dissolved hydrogencarbonates, chlorides, and sulphates of calcium and magnesium in water. Two ions: Calcium ions (Ca(2+)) and Magnesium ions (Mg(2+)).\n\n(b) Scum Formation Mechanism:\n    - Soap molecules are sodium salts of long-chain fatty acids (e.g., sodium stearate, C17H35COONa).\n    - When soap is added to hard water, sodium ions are displaced by Ca(2+) and Mg(2+) ions, forming insoluble calcium stearate and magnesium stearate that precipitate as a sticky white scum:\n      2C17H35COONa(aq) + Ca(2+)(aq) -> (C17H35COO)2Ca(s)↓ [Scum] + 2Na(+)(aq)\n    - A large amount of soap is wasted in precipitating these ions before any lather can be produced.\n\n(c) Synthetic Detergents Action & Precaution:\n    - Detergent Action: Detergents are sodium salts of sulphonic acids or alkyl hydrogen sulphates. Their calcium and magnesium salts are completely water-soluble and do not precipitate as scum, allowing rich lather and cleaning even in hard water.\n    - Environmental Precaution: Non-linear, branched-chain synthetic detergents are non-biodegradable, persisting in water bodies and causing foaming and toxic aquatic pollution.",
    explanation: "Solubility product differences between calcium carboxylates (insoluble scum) and calcium sulphonates (soluble).",
    formula: "2RCOONa + Ca(2+) -> (RCOO)2Ca(s) [Insoluble Scum] + 2Na(+)",
    examinerNote: "1 mark for hardness ions; 1.5 marks for scum equation and displacement; 1.5 marks for detergent solubility & non-biodegradability.",
    source: "NCERT Activity 4.10 / CBSE Board 2024"
  },
  {
    id: "sci_c4_q36",
    chapter: 4,
    chapterName: "Carbon and its Compounds",
    marks: 5,
    type: "LA",
    question: "(a) What are structural isomers? Draw the structural formulas and write the IUPAC names of all three structural isomers of Pentane (C5H12). [2.5M]\n(b) Explain why structural isomerism is not possible for methane, ethane, and propane. [1M]\n(c) Draw the cyclic ring structure of Cyclopentane (C5H10) and calculate the total number of single covalent bonds present in one molecule. [1.5M]",
    answer: "(a) Structural Isomers of Pentane (C5H12):\n  Compounds having identical molecular formula but different structural arrangements of atoms.\n  1. n-Pentane (Pentane): Straight chain of 5 carbons\n     CH3-CH2-CH2-CH2-CH3\n  2. Isopentane (2-Methylbutane): Branched chain with 4-carbon parent chain and one methyl branch at C-2\n     CH3-CH(CH3)-CH2-CH3\n  3. Neopentane (2,2-Dimethylpropane): Highly branched cross structure with central carbon bonded to four methyl groups\n     C(CH3)4 or CH3-C(CH3)2-CH3\n\n(b) Why Methane, Ethane, and Propane cannot show Isomerism:\n  - Structural isomerism requires the possibility of branching in the carbon skeleton.\n  - Methane (1 carbon), Ethane (2 carbons), and Propane (3 carbons) cannot have branching; any rearrangement of 1, 2, or 3 carbons results in the exact same continuous linear chain. A minimum of 4 carbon atoms (butane) is required to produce a branch.\n\n(c) Cyclopentane (C5H10):\n  - Ring Structure: A closed pentagonal ring of 5 carbon atoms, where each carbon atom is bonded to two adjacent carbons and two hydrogen atoms (-CH2- units arranged in a ring).\n  - Total Covalent Bonds Calculation:\n    - 5 C-C single bonds forming the pentagonal ring\n    - 10 C-H single bonds (2 per carbon atom)\n    - Total Single Covalent Bonds = 5 + 10 = 15 single covalent bonds.",
    explanation: "NCERT Section 4.2.2. Isomerism arises from branching degrees of freedom requiring >= 4 carbon atoms.",
    formula: "Pentane Isomers: n-pentane, 2-methylbutane, 2,2-dimethylpropane; Cyclopentane = 15 Single Bonds",
    examinerNote: "2.5 marks for three pentane structures and IUPAC names; 1 mark for >=4 carbons branching rule; 1.5 marks for cyclopentane ring & 15 bonds.",
    source: "CBSE Board 2024 / NCERT Exemplar"
  }
];

