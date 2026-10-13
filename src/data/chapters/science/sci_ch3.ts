import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH3_QUESTIONS: VaultQuestion[] = [
  // =========================================================================
  // 1-MARK MCQs & ASSERTION-REASON
  // =========================================================================
  {
    id: "sci_c3_q1",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Which of the following metals does NOT react with cold as well as hot water, but reacts with steam?\n(a) Sodium\n(b) Calcium\n(c) Magnesium\n(d) Iron",
    options: ["Sodium", "Calcium", "Magnesium", "Iron"],
    correctOption: 3,
    answer: "Option (d) is correct: Iron.",
    explanation: "Sodium and Calcium react vigorously with cold water. Magnesium does not react with cold water but reacts with hot water. Iron, Zinc, and Aluminium react only with steam: 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g).",
    formula: "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)",
    examinerNote: "NCERT Chapter 3 Activity 3.5 benchmark question.",
    source: "CBSE 2024 / NCERT Exemplar Q1"
  },
  {
    id: "sci_c3_q2",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Generally, non-metals are not lustrous. Which of the following non-metal is lustrous?\n(a) Sulphur\n(b) Oxygen\n(c) Nitrogen\n(d) Iodine",
    options: ["Sulphur", "Oxygen", "Nitrogen", "Iodine"],
    correctOption: 3,
    answer: "Option (d) is correct: Iodine.",
    explanation: "Iodine is a non-metal that possesses a natural metallic lustre (shiny crystalline appearance), which is an exception to the general property that non-metals are dull.",
    formula: "Exception: Iodine (Non-metal with metallic lustre)",
    examinerNote: "NCERT Section 3.1.1 physical exceptions.",
    source: "NCERT Exemplar Q3 / CBSE 2023"
  },
  {
    id: "sci_c3_q3",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Which of the following oxide(s) of iron would be obtained on prolonged reaction of iron with steam?\n(a) FeO\n(b) Fe2O3\n(c) Fe3O4\n(d) Fe2O3 and Fe3O4",
    options: ["FeO", "Fe2O3", "Fe3O4", "Fe2O3 and Fe3O4"],
    correctOption: 2,
    answer: "Option (c) is correct: Fe3O4 (Iron(II,III) oxide / Magnetic iron oxide).",
    explanation: "Prolonged heating of iron in steam yields magnetic iron oxide (Fe3O4, also known as triiron tetroxide, a mixed oxide of FeO and Fe2O3): 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g).",
    formula: "3Fe + 4H2O(g) -> Fe3O4 + 4H2",
    examinerNote: "Common error: Students pick Fe2O3. The correct product is Fe3O4.",
    source: "NCERT Exemplar Q4 / CBSE 2024"
  },
  {
    id: "sci_c3_q4",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "What happens when calcium is treated with water?\n(i) It does not react with water.\n(ii) It reacts violently with water.\n(iii) It reacts less violently with water.\n(iv) Bubbles of hydrogen gas formed stick to the surface of calcium.\n(a) (i) and (iv)\n(b) (ii) and (iii)\n(c) (i) and (ii)\n(d) (iii) and (iv)",
    options: [
      "(i) and (iv)",
      "(ii) and (iii)",
      "(i) and (ii)",
      "(iii) and (iv)"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: (iii) and (iv).",
    explanation: "Calcium reacts less violently with water compared to sodium. The heat evolved is insufficient for hydrogen to catch fire. Bubbles of liberated hydrogen gas adhere to the calcium pieces, causing them to float on the surface of the water.",
    formula: "Ca(s) + 2H2O(l) -> Ca(OH)2(aq) + H2(g)",
    examinerNote: "Both Calcium and Magnesium float on water due to hydrogen gas bubbles sticking to their surfaces.",
    source: "NCERT Exemplar Q5 / CBSE 2023"
  },
  {
    id: "sci_c3_q5",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Which of the following pairs of metals will give hydrogen gas on reaction with very dilute nitric acid (HNO3)?\n(a) Magnesium and Manganese\n(b) Copper and Iron\n(c) Zinc and Lead\n(d) Aluminium and Mercury",
    options: [
      "Magnesium and Manganese",
      "Copper and Iron",
      "Zinc and Lead",
      "Aluminium and Mercury"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Magnesium (Mg) and Manganese (Mn).",
    explanation: "Nitric acid (HNO3) is a powerful oxidising agent. It oxidises liberated H2 to H2O and itself gets reduced to nitrogen oxides (N2O, NO, NO2). However, very dilute (1%) HNO3 reacts with Magnesium and Manganese to evolve hydrogen gas.",
    formula: "Mg(s) + 2HNO3(very dil.) -> Mg(NO3)2(aq) + H2(g); Mn(s) + 2HNO3(very dil.) -> Mn(NO3)2(aq) + H2(g)",
    examinerNote: "Exceptional reaction heavily tested in CBSE board exams.",
    source: "NCERT Intext Question / CBSE 2024"
  },
  {
    id: "sci_c3_q6",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Aqua regia is a freshly prepared mixture of concentrated hydrochloric acid and concentrated nitric acid in the ratio of:\n(a) 1 : 3\n(b) 3 : 1\n(c) 2 : 3\n(d) 3 : 2",
    options: ["1 : 3", "3 : 1", "2 : 3", "3 : 2"],
    correctOption: 1,
    answer: "Option (b) is correct: 3 : 1 (Conc. HCl : Conc. HNO3).",
    explanation: "Aqua regia (royal water) is a freshly prepared fuming mixture of 3 parts concentrated hydrochloric acid to 1 part concentrated nitric acid by volume. It can dissolve noble metals such as gold and platinum.",
    formula: "3 Conc. HCl : 1 Conc. HNO3",
    examinerNote: "Pay attention to the order: Conc. HCl is 3, Conc. HNO3 is 1.",
    source: "NCERT Section 3.2.3 / CBSE 2024"
  },
  {
    id: "sci_c3_q7",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "An alloy of copper and zinc is known as:\n(a) Bronze\n(b) Brass\n(c) Solder\n(d) Stainless steel",
    options: ["Bronze", "Brass", "Solder", "Stainless steel"],
    correctOption: 1,
    answer: "Option (b) is correct: Brass.",
    explanation: "Brass is an alloy of copper and zinc (Cu + Zn). Bronze is an alloy of copper and tin (Cu + Sn). Solder is an alloy of lead and tin (Pb + Sn). Stainless steel is an alloy of iron, nickel, chromium, and carbon.",
    formula: "Brass = Cu + Zn; Bronze = Cu + Sn; Solder = Pb + Sn",
    examinerNote: "Mnemonic: Brass has Zinc (ends in s/z sound). Bronze has Tin.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c3_q8",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Aluminium is used for making cooking utensils. Which of the following properties of aluminium are responsible for the same?\n(i) Good thermal conductivity\n(ii) Good electrical conductivity\n(iii) Ductility\n(iv) High melting point\n(a) (i) and (ii)\n(b) (i) and (iii)\n(c) (ii) and (iii)\n(d) (i) and (iv)",
    options: [
      "(i) and (ii)",
      "(i) and (iii)",
      "(ii) and (iii)",
      "(i) and (iv)"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: (i) and (iv).",
    explanation: "For cooking utensils, good thermal conductivity (for rapid, uniform heat distribution) and high melting point (so the vessel does not melt on high cooking flames) are the two mandatory properties. Electrical conductivity and ductility are irrelevant to cooking function.",
    formula: "Cooking Utensil Requirement: High Thermal Conductivity + High Melting Point",
    examinerNote: "NCERT Exemplar Q2.",
    source: "NCERT Exemplar / CBSE 2022"
  },
  {
    id: "sci_c3_q9",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Aluminium oxide (Al2O3) is an amphoteric oxide.\nReason (R): Aluminium oxide reacts with both acids as well as bases to produce salt and water.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Amphoteric oxides are metallic oxides that show both acidic as well as basic behaviour. Al2O3 reacts with acids like HCl (acting as a base) and with bases like NaOH (acting as an acid) to form salt and water.",
    formula: "Al2O3 + 6HCl -> 2AlCl3 + 3H2O; Al2O3 + 2NaOH -> 2NaAlO2 + H2O",
    examinerNote: "NCERT Section 3.2.1. ZnO is also an amphoteric oxide.",
    source: "CBSE Official Sample Paper 2025"
  },
  {
    id: "sci_c3_q10",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Ionic compounds conduct electricity in the molten state and aqueous solution, but not in the solid state.\nReason (R): In the solid state, electrostatic attractions hold ions rigidly in fixed lattice positions, whereas in molten or aqueous states, ions are free to move.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Electrical conduction requires mobile charge carriers. In solid ionic compounds, strong electrostatic forces of attraction bind ions in rigid 3D crystal lattices. Upon melting or dissolving in water, these electrostatic forces weaken, freeing mobile cations and anions to conduct electric current.",
    formula: "Solid: Rigid Lattice (Insulator); Molten/Aqueous: Mobile Ions (Conductor)",
    examinerNote: "NCERT Section 3.3.4. Crucial property of ionic compounds.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c3_q11",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Galvanised iron articles do not rust even if the zinc coating is broken or scratched.\nReason (R): Zinc is more reactive than iron and oxidises preferentially, providing sacrificial protection.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Zinc lies above iron in the reactivity series. Even when the protective zinc layer is scratched, zinc corrodes sacrificially before iron by releasing electrons (Zn -> Zn(2+) + 2e-), preventing iron atoms from losing electrons and rusting.",
    formula: "Sacrificial Protection: Zn -> Zn(2+) + 2e- (Protects Fe)",
    examinerNote: "Contrast with tin coating: if tin (less reactive than iron) is scratched, iron rusts more rapidly.",
    source: "CBSE Board 2023"
  },

  // =========================================================================
  // 2-MARK VERY SHORT ANSWER (VSA)
  // =========================================================================
  {
    id: "sci_c3_q12",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 2,
    type: "VSA",
    question: "What are amphoteric oxides? Choose the amphoteric oxides from amongst the following:\nNa2O, ZnO, Al2O3, CO2, H2O",
    answer: "Amphoteric oxides are metallic oxides that react with both acids as well as bases to form salt and water, exhibiting dual acidic and basic properties.\nFrom the given list, the amphoteric oxides are:\n1. Zinc oxide (ZnO)\n2. Aluminium oxide (Al2O3)\n(Na2O is basic, CO2 is acidic, and H2O is neutral).",
    explanation: "Amphoteric oxides neutralize both hydrochloric acid and sodium hydroxide.",
    formula: "ZnO and Al2O3",
    examinerNote: "1 mark for definition; 1 mark for identifying both ZnO and Al2O3.",
    source: "CBSE 2024 / NCERT Intext"
  },
  {
    id: "sci_c3_q13",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 2,
    type: "VSA",
    question: "Why are sodium and potassium kept immersed in kerosene oil?",
    answer: "Sodium and potassium are highly reactive alkali metals. If exposed to open air at room temperature, they react vigorously with atmospheric oxygen and moisture, releasing immense heat that causes liberated hydrogen gas to catch fire and explode.\nTo prevent accidental fires and cut off contact with air and moisture, they are stored safely immersed in kerosene oil.",
    explanation: "4Na + O2 -> 2Na2O; 2Na + 2H2O -> 2NaOH + H2 + Enormous Heat.",
    formula: "2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g) + Heat (Catches Fire)",
    examinerNote: "NCERT Intext Question. Key keywords: 'reacts vigorously with air and moisture', 'exothermic', 'prevent accidental fires'.",
    source: "NCERT Intext / CBSE 2023"
  },
  {
    id: "sci_c3_q14",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 2,
    type: "VSA",
    question: "Write balanced chemical equations for the reactions of aluminium oxide (Al2O3) with:\n(a) Dilute Hydrochloric acid (HCl)\n(b) Aqueous Sodium hydroxide (NaOH)",
    answer: "(a) Reaction with Acid (Al2O3 acts as a base):\n    Al2O3(s) + 6HCl(aq) -> 2AlCl3(aq) [Aluminium chloride] + 3H2O(l)\n\n(b) Reaction with Base (Al2O3 acts as an acid):\n    Al2O3(s) + 2NaOH(aq) -> 2NaAlO2(aq) [Sodium aluminate] + H2O(l)",
    explanation: "Demonstrates the amphoteric nature of aluminium oxide.",
    formula: "Al2O3 + 6HCl -> 2AlCl3 + 3H2O; Al2O3 + 2NaOH -> 2NaAlO2 + H2O",
    examinerNote: "1 mark for each balanced equation. The formula of sodium aluminate is NaAlO2.",
    source: "CBSE 2024"
  },
  {
    id: "sci_c3_q15",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Roasting and Calcination with one balanced chemical equation for each process.",
    answer: "1. Roasting: The process of heating a sulphide ore strongly in the PRESENCE of excess air to convert it into a metal oxide.\n   Example: 2ZnS(s) [Zinc blende] + 3O2(g) -> 2ZnO(s) + 2SO2(g)\n\n2. Calcination: The process of heating a carbonate ore strongly in the ABSENCE or limited supply of air to convert it into a metal oxide.\n   Example: ZnCO3(s) [Calamine] -> ZnO(s) + CO2(g)",
    explanation: "Roasting produces SO2 gas; calcination produces CO2 gas.",
    formula: "Roasting: 2ZnS + 3O2 -> 2ZnO + 2SO2; Calcination: ZnCO3 -> ZnO + CO2",
    examinerNote: "1 mark for roasting (definition + equation); 1 mark for calcination (definition + equation).",
    source: "CBSE 2023 / NCERT Section 3.4.3"
  },
  {
    id: "sci_c3_q16",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 2,
    type: "VSA",
    question: "What is an amalgam? Give an example and state why 24-carat gold is not used for making jewellery.",
    answer: "An amalgam is an alloy in which one of the constituent metals is Mercury (Hg).\nExample: Dental amalgam (alloy of mercury with silver, tin, and copper) or Sodium amalgam (Na-Hg).\n\n24-carat gold is pure gold, which is extremely soft, ductile, and easily bends or loses its shape under slight stress. To make durable jewellery, it is alloyed with 2 parts of copper or silver (22-carat gold = 22 parts gold + 2 parts Cu/Ag) to impart structural hardness.",
    explanation: "Interstitial alloying of copper/silver atoms distorts the gold crystal lattice, preventing slippage.",
    formula: "Amalgam = Metal + Hg; 22-carat Gold = 22/24 Au + 2/24 (Cu or Ag)",
    examinerNote: "1 mark for amalgam definition and example; 1 mark for 24-carat gold softness explanation.",
    source: "NCERT Section 3.5 / CBSE 2024"
  },

  // =========================================================================
  // 3-MARK SHORT ANSWER (SA)
  // =========================================================================
  {
    id: "sci_c3_q17",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 3,
    type: "SA",
    question: "(a) What is the Thermite reaction? Write its balanced chemical equation.\n(b) State the practical application of the Thermite reaction.\n(c) Why does the iron produced in this reaction exist in the liquid state?",
    answer: "(a) The Thermite reaction is a highly exothermic displacement reaction in which iron(III) oxide is reduced by aluminium powder:\n    Fe2O3(s) + 2Al(s) -> 2Fe(l) + Al2O3(s) + Enormous Heat\n\n(b) Practical Application: Used for welding broken railway tracks or cracked heavy machine frames on site without requiring a furnace.\n\n(c) The amount of heat liberated during this reaction is so immense that the temperature exceeds the melting point of iron (1538 deg C), causing the liberated iron metal to form directly in the molten (liquid) state, which flows into and seals the rail crack.",
    explanation: "Aluminium has a higher affinity for oxygen than iron, driving this violent displacement.",
    formula: "Fe2O3(s) + 2Al(s) -> 2Fe(l) + Al2O3(s) + Heat",
    examinerNote: "1 mark for balanced equation; 1 mark for application (railway track welding); 1 mark for explaining why iron is liquid.",
    source: "CBSE 2024 / NCERT Section 3.4.3"
  },
  {
    id: "sci_c3_q18",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 3,
    type: "SA",
    question: "Explain the electrolytic refining of copper with the help of chemical equations:\n(a) What are used as the anode, cathode, and electrolyte?\n(b) Write the chemical reactions occurring at the cathode and anode.\n(c) What happens to soluble and insoluble impurities during this process?",
    answer: "(a) Apparatus Components:\n    - Anode (+): A thick block of impure blister copper.\n    - Cathode (-): A thin strip of high-purity copper.\n    - Electrolyte: Acidified copper sulphate (CuSO4 + dilute H2SO4) solution.\n\n(b) Electrode Reactions:\n    - At Anode (Oxidation): Cu(s) -> Cu(2+)(aq) + 2e(-)\n    - At Cathode (Reduction): Cu(2+)(aq) + 2e(-) -> Cu(s)\n\n(c) Fate of Impurities:\n    - Soluble impurities go into the electrolyte solution.\n    - Insoluble impurities (such as precious metals gold, silver, and platinum) settle at the bottom below the anode as ANODE MUD.",
    explanation: "Electrolytic refining yields copper of 99.99% purity suitable for electrical wiring.",
    formula: "Anode: Cu -> Cu(2+) + 2e(-); Cathode: Cu(2+) + 2e(-) -> Cu",
    examinerNote: "1 mark for anode/cathode/electrolyte; 1 mark for reactions; 1 mark for fate of impurities and anode mud.",
    source: "CBSE 2024 / NCERT Figure 3.12"
  },
  {
    id: "sci_c3_q19",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 3,
    type: "SA",
    question: "Describe Activity 3.14 to investigate the conditions under which iron rusts:\n(a) Describe the setup of the three test tubes A, B, and C.\n(b) State the observation for each test tube after a few days.\n(c) What scientific conclusion is drawn from this activity?",
    answer: "(a) Setup of Test Tubes:\n  - Test Tube A: Clean iron nails placed in tap water exposed to open air (both air and water present).\n  - Test Tube B: Clean iron nails placed in boiled distilled water with a layer of oil on top (water present, air excluded by oil).\n  - Test Tube C: Clean iron nails placed in dry air containing anhydrous calcium chloride (CaCl2) with a tight rubber cork (air present, moisture absorbed by CaCl2).\n\n(b) Observations:\n  - Test Tube A: Iron nails rust heavily (reddish-brown flaky coating).\n  - Test Tube B: Iron nails do NOT rust at all.\n  - Test Tube C: Iron nails do NOT rust at all.\n\n(c) Scientific Conclusion: Rusting of iron requires the SIMULTANEOUS presence of BOTH air (oxygen) and water (moisture). Neither air alone nor water alone can cause rusting.",
    explanation: "Boiling removes dissolved oxygen; anhydrous CaCl2 absorbs all atmospheric humidity.",
    formula: "Rusting Condition: Fe + O2 + H2O -> Fe2O3.xH2O (Both O2 and H2O mandatory)",
    examinerNote: "1 mark for setup description; 1 mark for observations; 1 mark for conclusion.",
    source: "NCERT Activity 3.14 / CBSE 2023"
  },
  {
    id: "sci_c3_q20",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 3,
    type: "SA",
    question: "Write the constituents and one special property / application for each of the following alloys:\n(a) Brass\n(b) Bronze\n(c) Solder",
    answer: "(a) Brass:\n    - Constituents: Copper (Cu, ~70%) and Zinc (Zn, ~30%).\n    - Property/Application: Malleable, corrosion resistant, acoustic resonance. Used for musical instruments, decorative hardware, plumbing fittings.\n\n(b) Bronze:\n    - Constituents: Copper (Cu, ~90%) and Tin (Sn, ~10%).\n    - Property/Application: Hard, tough, resistant to saltwater corrosion. Used for statues, coins, medals, and marine hardware.\n\n(c) Solder:\n    - Constituents: Lead (Pb, ~50%) and Tin (Sn, ~50%).\n    - Property/Application: Has a very low melting point (~183 deg C). Indispensable for welding electrical wires and soldering electronic circuit boards.",
    explanation: "Alloying lowers electrical conductivity and melting point while increasing hardness.",
    formula: "Brass: Cu+Zn; Bronze: Cu+Sn; Solder: Pb+Sn (Low MP)",
    examinerNote: "1 mark each for (a), (b), and (c). Low melting point of solder is a mandatory board point.",
    source: "CBSE 2024 / NCERT Section 3.5"
  },
  {
    id: "sci_c3_q21",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 3,
    type: "SA",
    question: "Show the formation of Magnesium chloride (MgCl2) by the transfer of electrons:\n(a) Write the electronic configuration of Magnesium (atomic number 12) and Chlorine (atomic number 17).\n(b) Draw the electron dot representation of the bond formation.\n(c) Name the ions present in MgCl2 and state why it has a high melting point.",
    answer: "(a) Electronic Configurations:\n    - Magnesium (Mg, Z = 12): 2, 8, 2 (Valence electrons = 2)\n    - Chlorine (Cl, Z = 17): 2, 8, 7 (Valence electrons = 7)\n\n(b) Electron Transfer:\n    Mg atom loses 2 valence electrons to achieve stable octet (2, 8):\n    Mg -> Mg(2+) + 2e(-)\n    Two Chlorine atoms each accept 1 electron to achieve stable octet (2, 8, 8):\n    2Cl + 2e(-) -> 2Cl(-)\n    Representation: [Mg](2+) 2[:Cl:](-)\n\n(c) Ions present: Magnesium cation (Mg(2+)) and Chloride anion (Cl(-)).\n    High Melting Point Reason: Mg(2+) and Cl(-) are held together by exceptionally strong electrostatic forces of attraction in a 3D crystal lattice. A large amount of thermal energy is required to break these strong ionic bonds.",
    explanation: "Ionic bonds are formed by complete transfer of electrons from metal to non-metal.",
    formula: "Mg(2+) + 2Cl(-) -> MgCl2",
    examinerNote: "1 mark for configurations; 1 mark for electron dot diagram; 1 mark for ions and high MP justification.",
    source: "CBSE Board 2024"
  },

  // =========================================================================
  // 5-MARK LONG ANSWER (LA)
  // =========================================================================
  {
    id: "sci_c3_q22",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 5,
    type: "LA",
    question: "(a) How are metals in the middle of the reactivity series extracted from their carbonate and sulphide ores? Give balanced chemical equations using Zinc as an example.\n(b) How is a metal at the top of the reactivity series (such as sodium) extracted from its molten chloride? Why can sodium not be obtained by reduction with carbon?\n(c) How is a metal at the bottom of the reactivity series (such as mercury) extracted from its sulphide ore cinnabar (HgS)? Write the balanced chemical equations.",
    answer: "(a) Metals in Middle of Reactivity Series (Zn, Fe, Pb):\n    Step 1: Convert ore to oxide:\n    - From Sulphide ore by Roasting (excess air):\n      2ZnS(s) + 3O2(g) -> 2ZnO(s) + 2SO2(g)\n    - From Carbonate ore by Calcination (limited air):\n      ZnCO3(s) -> ZnO(s) + CO2(g)\n    Step 2: Reduction of metal oxide using carbon (coke):\n      ZnO(s) + C(s) -> Zn(s) + CO(g)\n\n(b) Metals at Top of Reactivity Series (Na, Ca, Mg, Al):\n    - Extracted by electrolytic reduction of their molten chlorides:\n      Molten NaCl is electrolysed: 2NaCl(l) -> 2Na(s) [at cathode] + Cl2(g) [at anode]\n      Cathode: Na+ + e- -> Na; Anode: 2Cl- -> Cl2 + 2e-\n    - Why Carbon cannot reduce sodium: Sodium has a much greater affinity for oxygen than carbon does; carbon cannot overcome the strong ionic bonding of sodium compounds.\n\n(c) Metals at Bottom of Reactivity Series (Hg):\n    Cinnabar (HgS) is heated strongly in air:\n    Stage 1: 2HgS(s) + 3O2(g) -> 2HgO(s) + 2SO2(g)\n    Stage 2: 2HgO(s) -> 2Hg(l) + O2(g) (Thermal reduction without any reducing agent).",
    explanation: "Reactivity series dictates metallurgy: low reactivity = thermal reduction; medium = roasting/calcination + carbon; high = electrolytic reduction.",
    formula: "Low: HgS->HgO->Hg; Medium: ZnS/ZnCO3->ZnO->Zn; High: Molten NaCl electrolysis",
    examinerNote: "2 marks for part (a); 2 marks for part (b); 1 mark for part (c).",
    source: "CBSE Board 2024 (Set 31/1/1)"
  },
  {
    id: "sci_c3_q23",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 5,
    type: "LA",
    question: "(a) What are ionic compounds? List any four general physical properties of ionic compounds and justify each property scientifically.\n(b) By electron transfer, show the formation of Sodium oxide (Na2O) from sodium (Z = 11) and oxygen (Z = 8).",
    answer: "(a) Ionic compounds are compounds composed of positively charged cations and negatively charged anions held together by strong electrostatic forces of attraction.\nGeneral Properties:\n1. Physical State & Hardness: Solids and hard/brittle because strong electrostatic forces bind ions tightly in a rigid crystal lattice. Brittle because pressure shifts like-charged ions into alignment, causing repulsive cleavage.\n2. High Melting & Boiling Points: A very large amount of thermal energy is needed to break the immense electrostatic forces between oppositely charged ions.\n3. Solubility: Highly soluble in polar solvents like water (water solvates ions), but insoluble in non-polar organic solvents like kerosene and petrol.\n4. Electrical Conductivity: Insulators in solid state (ions locked in lattice); excellent electrical conductors in molten state and aqueous solution because ions become mobile charge carriers.\n\n(b) Formation of Sodium Oxide (Na2O):\n- Na (2, 8, 1) loses 1 electron: 2Na -> 2Na(+) + 2e(-)\n- O (2, 6) accepts 2 electrons: O + 2e(-) -> O(2-)\n- Electron Dot Structure: 2[Na](+) [:O:](2-)\n- Formula: Na2O.",
    explanation: "Complete ionic lattice justification required for full 5 marks.",
    formula: "2Na+ + O(2-) -> Na2O",
    examinerNote: "3 marks for properties with scientific justifications; 2 marks for electron dot formation of Na2O.",
    source: "CBSE Board 2023 / NCERT Section 3.3"
  },
  {
    id: "sci_c3_q24",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 5,
    type: "LA",
    question: "A metal 'M' found in nature as its sulphide ore 'MS' is used extensively in galvanisation of iron articles.\n(a) Identify metal 'M' and write the name and formula of its sulphide ore.\n(b) Explain with balanced chemical equations how metal 'M' is extracted from this sulphide ore.\n(c) Name one carbonate ore of metal 'M' and describe how the metal is extracted from it.\n(d) Explain what happens when a strip of metal 'M' is dipped into an aqueous solution of copper sulphate. Write the balanced chemical equation and state the observation.\n(e) What happens when metal 'M' is heated with concentrated sodium hydroxide solution?",
    answer: "(a) Metal 'M' is Zinc (Zn).\n    Sulphide ore: Zinc blende. Formula: ZnS.\n\n(b) Extraction from Sulphide Ore:\n    1. Roasting: 2ZnS(s) + 3O2(g) -> 2ZnO(s) + 2SO2(g)\n    2. Reduction with Carbon: ZnO(s) + C(s) -> Zn(s) + CO(g)\n\n(c) Carbonate Ore: Calamine (ZnCO3).\n    Calcination: ZnCO3(s) -> ZnO(s) + CO2(g)\n    Followed by reduction: ZnO(s) + C(s) -> Zn(s) + CO(g)\n\n(d) Zinc in Copper Sulphate Solution:\n    Zinc displaces copper because zinc is more reactive than copper:\n    Zn(s) + CuSO4(aq) [Blue] -> ZnSO4(aq) [Colourless] + Cu(s) [Reddish-brown deposit]\n    Observation: The blue colour of the solution fades and turns completely colourless, and reddish-brown copper metal coats the zinc strip.\n\n(e) Reaction with Sodium Hydroxide (Amphoteric Behavior):\n    Zinc reacts with hot concentrated NaOH to produce sodium zincate and hydrogen gas:\n    Zn(s) + 2NaOH(aq) -> Na2ZnO2(aq) [Sodium zincate] + H2(g)",
    explanation: "Deductive metallurgical synthesis question testing entire Zinc chemistry in CBSE Class 10.",
    formula: "ZnS -> ZnO -> Zn; Zn + CuSO4 -> ZnSO4 + Cu; Zn + 2NaOH -> Na2ZnO2 + H2",
    examinerNote: "1 mark each for parts (a), (b), (c), (d), and (e).",
    source: "CBSE Board 2024"
  },

  // =========================================================================
  // 4-MARK CASE-BASED / COMPETENCY QUESTIONS
  // =========================================================================
  {
    id: "sci_c3_q25",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 4,
    type: "Case Study",
    question: "Read the passage and answer the questions that follow:\n\nCopper is one of the oldest metals known to human civilization, prized for its exceptional electrical conductivity and thermal properties. In nature, copper occurs both in native state and combined state as copper pyrites (CuFeS2) or copper glance (Cu2S). When extracted by smelting, blister copper is obtained which contains approximately 1-2% impurities including iron, zinc, lead, silver, and gold. For electrical wiring and telecommunications, copper must be refined to 99.99% purity through electrolytic refining in a specialized chemical tank.\n\n(a) Identify the materials used as the cathode, anode, and electrolyte in the electrolytic refining of copper. [1.5M]\n(b) Write the electrode reactions taking place at the anode and cathode during refining. [1.5M]\n(c) What happens to the precious metals (gold, silver, platinum) present as impurities in blister copper? [1M]",
    answer: "(a) Apparatus Setup:\n    - Anode (+): Impure blister copper block.\n    - Cathode (-): Thin strip of pure copper.\n    - Electrolyte: Acidified copper sulphate (CuSO4 + dilute H2SO4) solution.\n\n(b) Electrode Reactions:\n    - At Anode: Cu(s) -> Cu(2+)(aq) + 2e(-) [Copper oxidises and dissolves]\n    - At Cathode: Cu(2+)(aq) + 2e(-) -> Cu(s) [Pure copper deposits]\n\n(c) Precious metals (gold, silver, platinum) are chemically less reactive and insoluble in the electrolyte. They fall to the bottom of the electrolytic tank directly beneath the anode, forming a sediment known as ANODE MUD, which is recovered and refined as a valuable commercial byproduct.",
    explanation: "Electrolytic refining exploits standard reduction potentials: active impurities dissolve; noble impurities drop as anode mud.",
    formula: "Anode: Cu -> Cu(2+) + 2e-; Cathode: Cu(2+) + 2e- -> Cu",
    examinerNote: "1.5 marks for setup; 1.5 marks for reactions; 1 mark for anode mud explanation.",
    source: "CBSE Class 10 Board 2024"
  },
  {
    id: "sci_c3_q26",
    chapter: 3,
    chapterName: "Metals and Non-Metals",
    marks: 4,
    type: "Case Study",
    question: "Read the passage and answer the following questions:\n\nPure metals often lack the mechanical strength, corrosion resistance, or specialized thermal properties required for modern engineering. To overcome these limitations, metallurgists synthesize alloys by combining metals with other elements. For example, pure iron is soft and deforms easily when heated, but mixing it with just 0.05% carbon increases its tensile strength dramatically. Adding chromium and nickel produces stainless steel, which resists rusting entirely. Similarly, electrical solder has a lower melting point than either of its pure constituents, making it ideal for joining electrical circuits.\n\n(a) Define an alloy and explain how alloys are prepared. [1.5M]\n(b) State the composition of solder and explain why it is chosen for welding electrical wires over pure copper or pure lead. [1.5M]\n(c) Why is stainless steel preferred over pure iron for making surgical instruments and kitchen cookware? [1M]",
    answer: "(a) Definition: An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.\n    Preparation: The primary metal is melted first in a furnace, and the alloying elements are dissolved into it in definite proportions, followed by cooling to room temperature.\n\n(b) Solder Composition: Lead (Pb, ~50%) and Tin (Sn, ~50%).\n    Why chosen: Solder has a very low melting point (~183 deg C), significantly lower than pure copper (~1085 deg C) or pure lead (~327 deg C). It melts easily with a soldering iron, wetting the copper wire joints without melting or damaging adjacent sensitive electronic components.\n\n(c) Pure iron rusts rapidly in the presence of air and moisture and is easily corroded by acids in food. Stainless steel (alloyed with chromium and nickel) forms a permanent, self-healing chromium oxide film that makes it completely rust-free, chemically non-reactive, and structurally hard.",
    explanation: "Alloying modifies lattice bonding, resulting in lower melting points and enhanced chemical passivity.",
    formula: "Solder: Pb + Sn (Low MP); Stainless Steel: Fe + Cr + Ni + C (Rust-Free)",
    examinerNote: "1.5 marks for part (a); 1.5 marks for part (b); 1 mark for part (c).",
    source: "CBSE Competency-Based Sample Paper 2025"
  }
];
