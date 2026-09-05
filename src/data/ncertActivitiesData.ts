// =========================================================================
// CBSE Class 10 Science — 100% Comprehensive NCERT Activities Master Bank
// Covers EVERY single high-yield laboratory & classroom activity from NCERT
// Standard: CBSE Board Examination 2026-27 (Code 086)
// =========================================================================

export interface NCERTActivity {
  id: string;
  activityNo: string; // e.g. "Activity 1.1"
  chapterNo: number;
  chapterName: string;
  discipline: "Chemistry" | "Biology" | "Physics" | "Natural Resources";
  title: string;
  aim: string;
  apparatusAndMaterials: string[];
  procedureSteps: string[];
  keyObservations: {
    label: string;
    details: string;
    highlightColor?: "amber" | "emerald" | "rose" | "blue" | "purple";
  }[];
  chemicalEquationsOrFormulas?: {
    name: string;
    equation: string;
    note?: string;
  }[];
  scientificInference: string;
  examinerTrapAndSafety: string;
  boardQuestions: {
    marks: number;
    question: string;
    answer: string;
  }[];
}

export const NCERT_SCIENCE_ACTIVITIES: NCERTActivity[] = [
  // =======================================================================
  // CHAPTER 1: CHEMICAL REACTIONS AND EQUATIONS
  // =======================================================================
  {
    id: "act_1_1",
    activityNo: "Activity 1.1",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Burning of Magnesium Ribbon in Air",
    aim: "To demonstrate a chemical combination reaction and observe the change of state and temperature during combustion.",
    apparatusAndMaterials: [
      "Magnesium ribbon (3-4 cm)",
      "Sandpaper",
      "Pair of tongs",
      "Spirit lamp / Bunsen burner",
      "Watch glass"
    ],
    procedureSteps: [
      "Clean a magnesium ribbon about 3-4 cm long by rubbing it thoroughly with sandpaper.",
      "Hold it firmly with a pair of tongs.",
      "Ignite the magnesium ribbon using a Bunsen burner flame.",
      "Collect the white ash produced in a watch glass held underneath."
    ],
    keyObservations: [
      {
        label: "Flame Appearance",
        details: "Magnesium burns with a dazzling, brilliant white flame that is blinding to look at directly.",
        highlightColor: "amber"
      },
      {
        label: "Product Formed",
        details: "A brilliant white, brittle powder (Magnesium oxide) is deposited in the watch glass.",
        highlightColor: "emerald"
      },
      {
        label: "Temperature Change",
        details: "Significant heat and light are released (Highly Exothermic reaction).",
        highlightColor: "rose"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Combustion of Magnesium",
        equation: "2\\text{Mg}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{MgO}(s) + \\text{Heat} + \\text{Light}",
        note: "Magnesium is oxidized; Oxygen is reduced. This is a Combination & Exothermic reaction."
      },
      {
        name: "Testing Basicity of Ash",
        equation: "\\text{MgO}(s) + \\text{H}_2\\text{O}(l) \\to \\text{Mg(OH)}_2(aq)",
        note: "Solution turns red litmus blue, confirming magnesium oxide is a basic metallic oxide."
      }
    ],
    scientificInference: "Magnesium combines with atmospheric oxygen to form magnesium oxide. A new chemical substance is formed with entirely different chemical properties.",
    examinerTrapAndSafety: "CBSE deduction trap: 'Why must magnesium ribbon be rubbed with sandpaper before burning?' Answer: To remove the protective, unreactive layer of basic magnesium carbonate / magnesium oxide that prevents combustion.",
    boardQuestions: [
      {
        marks: 1,
        question: "Why should a magnesium ribbon be cleaned with sandpaper before burning in air?",
        answer: "To remove the inert coating of basic magnesium carbonate [MgCO3·Mg(OH)2] formed on its surface by reaction with moist air, allowing it to burn smoothly."
      },
      {
        marks: 2,
        question: "What type of chemical reaction occurs when magnesium burns? Give the balanced equation and state.",
        answer: "It is a Combination and Exothermic reaction. Equation: 2Mg(s) + O2(g) -> 2MgO(s) + Heat."
      }
    ]
  },
  {
    id: "act_1_2",
    activityNo: "Activity 1.2",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Precipitation of Lead Iodide (Double Displacement)",
    aim: "To demonstrate a precipitation / double displacement reaction between lead nitrate and potassium iodide.",
    apparatusAndMaterials: [
      "Lead nitrate solution [Pb(NO3)2]",
      "Potassium iodide solution [KI]",
      "Test tubes and test tube rack"
    ],
    procedureSteps: [
      "Take approximately 2 mL of clear, colorless lead nitrate solution in a clean test tube.",
      "In another test tube, take about 2 mL of colorless potassium iodide solution.",
      "Carefully pour the potassium iodide solution into the lead nitrate solution and observe."
    ],
    keyObservations: [
      {
        label: "Color Change & Precipitation",
        details: "An immediate bright yellow insoluble precipitate of Lead(II) iodide [PbI2] forms instantaneously.",
        highlightColor: "amber"
      },
      {
        label: "Supernatant Liquid",
        details: "Colorless potassium nitrate [KNO3] solution remains above the yellow precipitate.",
        highlightColor: "blue"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Double Displacement Reaction",
        equation: "\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\to \\text{PbI}_2\\downarrow(s) \\text{ [Yellow ppt]} + 2\\text{KNO}_3(aq)",
        note: "Precipitation reaction involving mutual exchange of Pb²⁺ and K⁺ ions."
      }
    ],
    scientificInference: "Ions are exchanged between two soluble aqueous salts, resulting in the formation of an insoluble yellow compound (precipitate).",
    examinerTrapAndSafety: "CBSE MCQ Trap: Lead iodide is YELLOW, while lead chloride and lead sulfate are WHITE. If KI is unavailable, lead acetate or potassium iodate can be substituted, but NOT lead sulfate (as it is already insoluble).",
    boardQuestions: [
      {
        marks: 2,
        question: "State the color of the precipitate formed when lead nitrate reacts with potassium iodide. Name the compound and write the balanced chemical equation.",
        answer: "Yellow precipitate of Lead Iodide [PbI2]. Equation: Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)."
      }
    ]
  },
  {
    id: "act_1_3",
    activityNo: "Activity 1.3",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Reaction of Zinc with Dilute Acid (Evolution of Gas)",
    aim: "To observe the evolution of hydrogen gas and temperature rise during the reaction of a metal with dilute acid.",
    apparatusAndMaterials: [
      "Zinc granules",
      "Dilute sulfuric acid (H2SO4) or dilute hydrochloric acid (HCl)",
      "Conical flask with single-bore cork",
      "Glass delivery tube",
      "Soap solution in a trough",
      "Burning candle / matchstick"
    ],
    procedureSteps: [
      "Place a few granulated zinc pieces in a clean conical flask.",
      "Add dilute sulfuric acid or hydrochloric acid over the zinc granules until submerged.",
      "Fit the conical flask with a cork and delivery tube leading into a trough of soap solution.",
      "Observe the bubbles forming on the surface of zinc granules.",
      "Bring a burning splinter near the soap bubbles emerging from the trough."
    ],
    keyObservations: [
      {
        label: "Gas Evolution",
        details: "Brisk effervescence with rapid formation of colorless, odorless gas bubbles around the zinc granules.",
        highlightColor: "blue"
      },
      {
        label: "Pop Sound Test",
        details: "The gas-filled soap bubbles burst with a distinct, sharp 'POP' sound when brought near a burning candle.",
        highlightColor: "rose"
      },
      {
        label: "Temperature Rise",
        details: "The flask feels noticeably warm to the touch (Exothermic reaction).",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Metal + Acid Reaction",
        equation: "\\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{H}_2\\uparrow(g) + \\text{Heat}",
        note: "Single displacement reaction where Zn displaces H⁺ ions from acid."
      }
    ],
    scientificInference: "Active metals above hydrogen in the reactivity series displace hydrogen from dilute mineral acids, producing salt, hydrogen gas, and heat.",
    examinerTrapAndSafety: "CBSE Deduction: Nitric acid (HNO3) cannot be used to produce H2 gas with zinc because HNO3 is a strong oxidizing agent and oxidizes H2 to H2O while reducing itself to nitrogen oxides (NO, NO2).",
    boardQuestions: [
      {
        marks: 2,
        question: "How is hydrogen gas tested in the laboratory? Why is dilute HNO3 not preferred for preparing H2 gas with zinc?",
        answer: "By bringing a burning candle near the gas; it burns with a characteristic 'pop' sound. Dilute HNO3 is a strong oxidizing agent that oxidizes H2 to H2O instead of releasing H2 gas."
      }
    ]
  },
  {
    id: "act_1_4",
    activityNo: "Activity 1.4",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Slaking of Quicklime (Vigorous Exothermic Combination)",
    aim: "To demonstrate an exothermic combination reaction between quicklime (calcium oxide) and water.",
    apparatusAndMaterials: [
      "Quicklime (Calcium oxide, CaO)",
      "Beaker",
      "Water",
      "Thermometer"
    ],
    procedureSteps: [
      "Take about 5 g of quicklime (calcium oxide) in a dry 250 mL beaker.",
      "Slowly add water to the beaker while stirring.",
      "Observe the reaction and touch the beaker gently from the outside."
    ],
    keyObservations: [
      {
        label: "Vigorous Hissing Sound",
        details: "Quicklime reacts vigorously with water, producing a hissing sound and steam.",
        highlightColor: "amber"
      },
      {
        label: "Extreme Temperature Rise",
        details: "The beaker becomes extremely hot, often boiling the water localized at the contact points.",
        highlightColor: "rose"
      },
      {
        label: "Suspension Formation",
        details: "Quicklime crumbles into a white milky suspension called slaked lime [Ca(OH)2].",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Formation of Slaked Lime",
        equation: "\\text{CaO}(s) \\text{ [Quicklime]} + \\text{H}_2\\text{O}(l) \\to \\text{Ca(OH)}_2(aq) \\text{ [Slaked lime]} + \\text{Heat}",
        note: "Combination reaction that releases immense heat energy (Exothermic)."
      },
      {
        name: "Whitewashing Wall Reaction",
        equation: "\\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3(s) \\text{ [Shiny Marble Finish]} + \\text{H}_2\\text{O}(l)",
        note: "Slaked lime reacts with atmospheric CO2 over 2-3 days to form shiny calcium carbonate."
      }
    ],
    scientificInference: "Two reactants combine to form a single product with the liberation of large amounts of heat, classifying it as an exothermic combination reaction.",
    examinerTrapAndSafety: "CBSE Board favorite 3-mark question: Why do walls get a shiny white finish 2 to 3 days after whitewashing? Answer: Ca(OH)2 reacts slowly with atmospheric CO2 to form a thin, shiny layer of insoluble CaCO3.",
    boardQuestions: [
      {
        marks: 3,
        question: "A solution of substance 'X' is used for white-washing. (i) Name 'X' and write its formula. (ii) Write its reaction with water. (iii) Explain why walls shine after 2-3 days.",
        answer: "(i) Substance 'X' is Quicklime (Calcium Oxide, CaO). (ii) CaO(s) + H2O(l) -> Ca(OH)2(aq) + Heat. (iii) Ca(OH)2 absorbs atmospheric CO2 to form a thin, durable layer of Calcium Carbonate (CaCO3) which gives a shiny appearance."
      }
    ]
  },
  {
    id: "act_1_5",
    activityNo: "Activity 1.5",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Thermal Decomposition of Ferrous Sulphate Crystals",
    aim: "To observe the thermal decomposition of hydrated ferrous sulphate crystals and identify the gases evolved.",
    apparatusAndMaterials: [
      "Ferrous sulphate crystals (FeSO4·7H2O)",
      "Dry boiling tube",
      "Test tube holder",
      "Bunsen burner / spirit lamp"
    ],
    procedureSteps: [
      "Take about 2 g of green ferrous sulphate crystals in a completely dry boiling tube.",
      "Note the initial green color of the crystals.",
      "Heat the boiling tube over the burner flame using a test tube holder.",
      "Gently waft the emitted gases towards your nose (do NOT inhale directly)."
    ],
    keyObservations: [
      {
        label: "Color Shift",
        details: "Initial pale green color changes to dirty white (anhydrous FeSO4) and finally to reddish-brown (Ferric oxide, Fe2O3).",
        highlightColor: "amber"
      },
      {
        label: "Water Droplets",
        details: "Water droplets condense on the cooler inner upper walls of the boiling tube (loss of 7H2O of crystallization).",
        highlightColor: "blue"
      },
      {
        label: "Characteristic Odor",
        details: "Choking, suffocating smell of burning sulfur (due to SO2 and SO3 gases).",
        highlightColor: "rose"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Step 1: Loss of Water of Crystallisation",
        equation: "\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}(s) \\text{ [Green]} \\xrightarrow{\\Delta} \\text{FeSO}_4(s) \\text{ [Dirty White]} + 7\\text{H}_2\\text{O}(g)",
        note: "Dehydration step."
      },
      {
        name: "Step 2: Thermal Decomposition",
        equation: "2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) \\text{ [Reddish-Brown Solid]} + \\text{SO}_2(g) + \\text{SO}_3(g)",
        note: "Single reactant breaks down into three products upon heating (Thermal Decomposition)."
      }
    ],
    scientificInference: "A single chemical compound decomposes upon absorbing heat into simpler substances, demonstrating endothermic thermal decomposition.",
    examinerTrapAndSafety: "Safety precaution: The mouth of the boiling tube must be pointed AWAY from yourself and classmates. Do not inhale the gases directly; waft them gently, as SO2 is toxic and irritates the respiratory tract.",
    boardQuestions: [
      {
        marks: 3,
        question: "State the color change observed when green ferrous sulphate crystals are heated strongly in a dry test tube. Write the balanced chemical equation and name the gases evolved.",
        answer: "Green crystals turn dirty white, then reddish-brown. Gases evolved are Sulfur dioxide (SO2) and Sulfur trioxide (SO3), having the odor of burning sulfur. Equation: 2FeSO4(s) -> Fe2O3(s) + SO2(g) + SO3(g)."
      }
    ]
  },
  {
    id: "act_1_6",
    activityNo: "Activity 1.6",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Thermal Decomposition of Lead Nitrate",
    aim: "To observe the thermal decomposition of lead nitrate and detect the emission of nitrogen dioxide brown fumes.",
    apparatusAndMaterials: [
      "Lead nitrate powder [Pb(NO3)2]",
      "Dry boiling tube",
      "Pair of tongs / holder",
      "Bunsen burner"
    ],
    procedureSteps: [
      "Take about 2 g of dry white lead nitrate powder in a clean, dry boiling tube.",
      "Hold the boiling tube with a test tube holder over a burner flame.",
      "Observe the color changes and any gas fumes escaping from the mouth of the tube."
    ],
    keyObservations: [
      {
        label: "Brown Fumes Evolved",
        details: "Copious, dense reddish-brown fumes of Nitrogen dioxide gas [NO2] are evolved.",
        highlightColor: "rose"
      },
      {
        label: "Crackling Sound",
        details: "A distinct decrepitation (crackling sound) is heard as crystals fracture under intense heat.",
        highlightColor: "amber"
      },
      {
        label: "Solid Residue",
        details: "A yellow solid residue of Lead(II) oxide [PbO] is left behind on the walls of the tube.",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Thermal Decomposition of Lead Nitrate",
        equation: "2\\text{Pb(NO}_3)_2(s) \\xrightarrow{\\Delta} 2\\text{PbO}(s) \\text{ [Yellow Residue]} + 4\\text{NO}_2(g) \\text{ [Brown Fumes]} + \\text{O}_2(g)",
        note: "Oxygen supports burning (re-ignites a glowing splinter); NO2 turns moist blue litmus red."
      }
    ],
    scientificInference: "Lead nitrate decomposes into lead oxide, nitrogen dioxide, and oxygen gas upon strong heating, proving thermal decomposition.",
    examinerTrapAndSafety: "CBSE Trap: Students often write PbO as white or black. Lead oxide (PbO) is reddish-brown when hot, but turns DISTINCTLY YELLOW when cold.",
    boardQuestions: [
      {
        marks: 2,
        question: "When lead nitrate powder is heated in a boiling tube, brown fumes are emitted. Identify the brown gas and the yellow residue left behind.",
        answer: "The brown fumes are Nitrogen dioxide (NO2). The yellow residue left in the test tube is Lead(II) oxide (PbO)."
      }
    ]
  },
  {
    id: "act_1_7",
    activityNo: "Activity 1.7",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Electrolytic Decomposition of Water (Electrolysis)",
    aim: "To demonstrate the electrolytic decomposition of water and verify the 2:1 volume ratio of hydrogen to oxygen.",
    apparatusAndMaterials: [
      "Plastic mug with two drilled bottom holes and rubber stoppers",
      "Two carbon (graphite) electrodes",
      "6V DC battery",
      "Dilute sulfuric acid (H2SO4)",
      "Two identical graduated test tubes",
      "Connecting wires and switch"
    ],
    procedureSteps: [
      "Insert carbon electrodes into the rubber stoppers fitted at the bottom of the plastic mug.",
      "Fill the mug with water such that electrodes are completely immersed.",
      "Add a few drops of dilute sulfuric acid to acidulate water and increase electrical conductivity.",
      "Invert two water-filled test tubes over the two graphite electrodes.",
      "Connect the electrodes to a 6V DC battery and switch on the current.",
      "Observe gas bubble collection by downward displacement of water."
    ],
    keyObservations: [
      {
        label: "Volume of Gases Collected",
        details: "The volume of gas collected at the cathode is exactly DOUBLE the volume collected at the anode (2:1 ratio).",
        highlightColor: "blue"
      },
      {
        label: "Cathode Gas Test",
        details: "Gas at cathode burns with a 'POP' sound when tested with a burning candle (Hydrogen gas, H2).",
        highlightColor: "rose"
      },
      {
        label: "Anode Gas Test",
        details: "Gas at anode rekindles a glowing wooden splinter (Oxygen gas, O2).",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Electrolytic Decomposition",
        equation: "2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electric Current}} 2\\text{H}_2(g) \\text{ [Cathode]} + \\text{O}_2(g) \\text{ [Anode]}",
        note: "Water molecule consists of 2 hydrogen atoms for every 1 oxygen atom, hence the 2:1 volume ratio."
      }
    ],
    scientificInference: "Electrical energy breaks down chemical bonds in water molecules, decomposing it into hydrogen and oxygen gases in a stoichiometric 2:1 ratio.",
    examinerTrapAndSafety: "CBSE Examiner Question: 'Why is dilute H2SO4 added to water?' Pure distilled water is a non-electrolyte and does not conduct electricity; H2SO4 provides mobile ions (H⁺ and SO4²⁻) to enable electrolysis.",
    boardQuestions: [
      {
        marks: 3,
        question: "(i) Name the gas collected at the cathode and anode during electrolysis of water. (ii) Why is the volume of gas collected at one electrode double that of the other? (iii) Why are a few drops of H2SO4 added?",
        answer: "(i) Cathode: Hydrogen (H2); Anode: Oxygen (O2). (ii) A water molecule contains 2 parts hydrogen to 1 part oxygen by volume (H2O), so double the volume of H2 is liberated. (iii) To make water conducting by providing free mobile ions."
      }
    ]
  },
  {
    id: "act_1_8",
    activityNo: "Activity 1.8",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Photolytic Decomposition of Silver Chloride",
    aim: "To demonstrate photochemical decomposition of silver chloride under sunlight.",
    apparatusAndMaterials: [
      "Silver chloride (AgCl) powder",
      "China dish",
      "Direct sunlight"
    ],
    procedureSteps: [
      "Take about 2 g of pure white silver chloride in a clean china dish.",
      "Note the initial white color.",
      "Place the china dish near a window sill in direct sunlight for 15-30 minutes.",
      "Observe the color change of the crystals."
    ],
    keyObservations: [
      {
        label: "Color Transformation",
        details: "White silver chloride turns grey after exposure to sunlight.",
        highlightColor: "amber"
      },
      {
        label: "Gas Released",
        details: "Greenish-yellow chlorine gas is liberated slowly into the atmosphere.",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Photochemical Decomposition",
        equation: "2\\text{AgCl}(s) \\text{ [White]} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag}(s) \\text{ [Grey]} + \\text{Cl}_2(g)",
        note: "Silver bromide (AgBr) behaves identically: 2AgBr -> 2Ag + Br2."
      }
    ],
    scientificInference: "Light energy breaks silver-chlorine ionic bonds, reducing silver ions into metallic silver (grey particles).",
    examinerTrapAndSafety: "CBSE Exam link: 'Name the chemical reaction used in black and white photography.' Answer: Photolytic decomposition of silver bromide / silver chloride.",
    boardQuestions: [
      {
        marks: 2,
        question: "Why are silver chloride and silver bromide stored in dark, amber-colored bottles?",
        answer: "To prevent their photolytic decomposition into metallic silver and halogen gases by blocking sunlight."
      }
    ]
  },
  {
    id: "act_1_9",
    activityNo: "Activity 1.9",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    discipline: "Chemistry",
    title: "Displacement of Copper by Iron from Copper Sulphate",
    aim: "To observe a single displacement reaction and verify that iron is more reactive than copper.",
    apparatusAndMaterials: [
      "Three clean iron nails",
      "Sandpaper",
      "Copper sulphate solution (CuSO4)",
      "Two test tubes (labeled A and B)",
      "Thread and test tube stand"
    ],
    procedureSteps: [
      "Clean iron nails with sandpaper to remove rust.",
      "Take 10 mL of blue CuSO4 solution in test tube A and 10 mL in test tube B.",
      "Tie two iron nails with thread and immerse them into test tube A for 20 minutes.",
      "Keep the third nail and test tube B untouched as control references.",
      "After 20 minutes, pull out the nails and compare the solution color and nail coating."
    ],
    keyObservations: [
      {
        label: "Solution Color Change",
        details: "The deep blue color of copper sulphate fades and turns pale light green (due to FeSO4 formation).",
        highlightColor: "emerald"
      },
      {
        label: "Nail Coating",
        details: "The immersed iron nails get covered with a reddish-brown deposit of metallic copper.",
        highlightColor: "rose"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Single Displacement Reaction",
        equation: "\\text{Fe}(s) + \\text{CuSO}_4(aq) \\text{ [Blue]} \\to \\text{FeSO}_4(aq) \\text{ [Light Green]} + \\text{Cu}(s) \\text{ [Reddish-Brown]}",
        note: "Iron is higher than copper in the reactivity series, displacing Cu²⁺ ions."
      }
    ],
    scientificInference: "A more reactive metal displaces a less reactive metal from its aqueous salt solution.",
    examinerTrapAndSafety: "CBSE Trap: If a copper wire is dipped into FeSO4 solution, NO reaction occurs because copper is less reactive than iron.",
    boardQuestions: [
      {
        marks: 2,
        question: "What changes do you observe when an iron nail is dipped in copper sulphate solution for 20 minutes? Write the chemical equation.",
        answer: "The blue solution fades to light green (FeSO4 forms), and a reddish-brown coating of copper deposits on the nail. Equation: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 2: ACIDS, BASES AND SALTS
  // =======================================================================
  {
    id: "act_2_5",
    activityNo: "Activity 2.5",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    title: "Reaction of Carbonates & Bicarbonates with Acids (Lime Water Test)",
    aim: "To demonstrate the liberation of carbon dioxide when metal carbonates/bicarbonates react with acids and verify the lime water test.",
    apparatusAndMaterials: [
      "Sodium carbonate (Na2CO3)",
      "Sodium hydrogen carbonate (NaHCO3)",
      "Dilute hydrochloric acid (HCl)",
      "Freshly prepared lime water [Ca(OH)2]",
      "Two test tubes, thistle funnel, delivery tube"
    ],
    procedureSteps: [
      "Take 0.5 g of Na2CO3 in test tube A and 0.5 g of NaHCO3 in test tube B.",
      "Add 2 mL of dilute HCl to test tube A through the thistle funnel.",
      "Pass the liberated gas through freshly prepared lime water via a delivery tube.",
      "Repeat the same procedure with test tube B.",
      "Continue passing the gas in excess through the milky lime water."
    ],
    keyObservations: [
      {
        label: "Brisk Effervescence",
        details: "Rapid bubbling of a colorless, odorless gas (CO2) in both test tubes.",
        highlightColor: "blue"
      },
      {
        label: "Lime Water Turns Milky",
        details: "Lime water turns turbid / milky white due to formation of insoluble Calcium carbonate [CaCO3].",
        highlightColor: "emerald"
      },
      {
        label: "Milkiness Disappears with Excess Gas",
        details: "On passing excess CO2, the milky suspension becomes completely clear and transparent again.",
        highlightColor: "purple"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Carbonate + Acid",
        equation: "\\text{Na}_2\\text{CO}_3(s) + 2\\text{HCl}(aq) \\to 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2\\uparrow(g)",
        note: "Sodium hydrogen carbonate yields the same products: NaHCO3 + HCl -> NaCl + H2O + CO2."
      },
      {
        name: "Milkiness Reaction",
        equation: "\\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3\\downarrow(s) \\text{ [Insoluble White ppt]} + \\text{H}_2\\text{O}(l)",
        note: "Confirms presence of CO2."
      },
      {
        name: "Clearing of Milkiness (Excess CO2)",
        equation: "\\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g) \\to \\text{Ca(HCO}_3)_2(aq) \\text{ [Soluble Calcium Bicarbonate]}",
        note: "Soluble bicarbonate dissolves, rendering the solution clear."
      }
    ],
    scientificInference: "All metal carbonates and bicarbonates react with acids to produce salt, water, and carbon dioxide gas.",
    examinerTrapAndSafety: "CBSE Board Favorite: 'What happens when excess CO2 is passed through lime water?' The milkiness disappears because insoluble CaCO3 converts into soluble calcium hydrogen carbonate [Ca(HCO3)2].",
    boardQuestions: [
      {
        marks: 3,
        question: "A gas 'G' is evolved when dilute HCl is added to baking soda. (i) Identify 'G'. (ii) What happens when 'G' is passed through lime water for a short time and then for an excess duration? Write both equations.",
        answer: "(i) Gas 'G' is Carbon dioxide (CO2). (ii) Short time: Lime water turns milky due to insoluble CaCO3: Ca(OH)2 + CO2 -> CaCO3(s) + H2O. Excess time: Milkiness disappears due to formation of soluble Ca(HCO3)2: CaCO3 + H2O + CO2 -> Ca(HCO3)2(aq)."
      }
    ]
  },
  {
    id: "act_2_8",
    activityNo: "Activity 2.8",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    title: "Electrical Conduction of Acids vs Glucose / Alcohol",
    aim: "To demonstrate that electrical conductivity of solutions depends on the presence of free mobile ions.",
    apparatusAndMaterials: [
      "Dilute HCl, H2SO4, glucose solution (C6H12O6), ethanol (C2H5OH)",
      "Beaker, cork with two iron nails",
      "6V battery, bulb, switch, connecting wires"
    ],
    procedureSteps: [
      "Fix two iron nails on a rubber cork and place it inside a 100 mL beaker.",
      "Connect the nails to the two terminals of a 6V battery through a bulb and switch.",
      "Pour dilute HCl into the beaker and switch on the current. Observe the bulb.",
      "Repeat the experiment separately with dilute H2SO4, glucose solution, and ethanol."
    ],
    keyObservations: [
      {
        label: "Acid Solutions (HCl, H2SO4)",
        details: "The bulb glows brightly, and bubbles evolve at the electrodes. The ammeter shows electric current flow.",
        highlightColor: "emerald"
      },
      {
        label: "Glucose and Alcohol Solutions",
        details: "The bulb does NOT glow at all. No current passes through the circuit.",
        highlightColor: "rose"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Ionization of Acid in Water",
        equation: "\\text{HCl}(aq) + \\text{H}_2\\text{O}(l) \\to \\text{H}_3\\text{O}^+(aq) + \\text{Cl}^-(aq)",
        note: "Hydronium (H3O⁺) and chloride ions carry electric current."
      }
    ],
    scientificInference: "All acids contain hydrogen and produce mobile H⁺ / H3O⁺ ions in aqueous solution that conduct electricity. Glucose and alcohol contain hydrogen but are covalent compounds and do NOT dissociate into ions.",
    examinerTrapAndSafety: "CBSE deduction trap: 'All acids contain hydrogen, but all hydrogen-containing compounds are not acids. Justify.' Use this activity as experimental proof.",
    boardQuestions: [
      {
        marks: 2,
        question: "Why do aqueous solutions of HCl conduct electricity whereas glucose and alcohol solutions do not, despite having hydrogen atoms in their molecules?",
        answer: "HCl dissociates in water to produce mobile H3O⁺ (hydronium) and Cl⁻ ions which carry current. Glucose and alcohol do not ionize in water, hence no mobile ions exist to conduct electricity."
      }
    ]
  },
  {
    id: "act_2_9",
    activityNo: "Activity 2.9",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    title: "Dry vs Moist HCl Gas with Litmus (Role of Water in Acidic Character)",
    aim: "To demonstrate that acids show acidic behavior only in the presence of water.",
    apparatusAndMaterials: [
      "Solid sodium chloride (NaCl)",
      "Concentrated sulfuric acid (conc. H2SO4)",
      "Dry test tube with delivery tube and guard tube containing anhydrous CaCl2",
      "Dry blue litmus paper and moist blue litmus paper"
    ],
    procedureSteps: [
      "Take 1 g of solid NaCl in a clean, dry test tube and add 1 mL of concentrated H2SO4.",
      "Fit a delivery tube with a guard tube containing calcium chloride to dry the gas.",
      "Test the evolving HCl gas first with DRY blue litmus paper.",
      "Then test the gas with MOIST blue litmus paper and observe color changes."
    ],
    keyObservations: [
      {
        label: "Dry Litmus Paper",
        details: "No color change occurs on the dry blue litmus paper.",
        highlightColor: "amber"
      },
      {
        label: "Moist Litmus Paper",
        details: "Moist blue litmus paper immediately turns bright RED.",
        highlightColor: "rose"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Generation of HCl gas",
        equation: "\\text{NaCl}(s) + \\text{H}_2\\text{SO}_4(l) \\to \\text{NaHSO}_4(s) + \\text{HCl}(g)",
        note: "Produces dry hydrogen chloride gas."
      },
      {
        name: "Dissociation in Moisture",
        equation: "\\text{HCl}(g) + \\text{H}_2\\text{O}(l) \\to \\text{H}_3\\text{O}^+(aq) + \\text{Cl}^-(aq)",
        note: "H⁺ cannot exist alone; it combines with water to form hydronium ion (H3O⁺)."
      }
    ],
    scientificInference: "Hydrogen ions in HCl can only be generated in the presence of water. Dry HCl gas does NOT possess acidic properties because it cannot dissociate into H⁺ ions without water.",
    examinerTrapAndSafety: "CBSE Examiner alert: 'What is the role of the guard tube containing anhydrous calcium chloride?' It absorbs moisture from the evolving gas, ensuring only bone-dry HCl gas reaches the litmus paper.",
    boardQuestions: [
      {
        marks: 2,
        question: "Why does dry HCl gas not change the color of dry blue litmus paper, but turns moist blue litmus paper red?",
        answer: "Dry HCl gas does not produce H⁺/H3O⁺ ions in the absence of water. When moisture is present on the paper, HCl dissolves and ionizes into H3O⁺ ions, which exhibit acidic properties and turn blue litmus red."
      }
    ]
  },
  {
    id: "act_2_14",
    activityNo: "Activity 2.14",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    discipline: "Chemistry",
    title: "Water of Crystallization in Copper Sulphate Crystals",
    aim: "To demonstrate the presence of water of crystallization in hydrated copper sulphate and its reversibility.",
    apparatusAndMaterials: [
      "Blue copper sulphate crystals (CuSO4·5H2O)",
      "Dry boiling tube, test tube holder, burner",
      "Dropper with water"
    ],
    procedureSteps: [
      "Take a few blue crystals of copper sulphate in a completely dry boiling tube.",
      "Heat the boiling tube strongly over the flame.",
      "Observe the color change and the walls of the tube.",
      "Allow the test tube to cool, then add 2-3 drops of water to the white powder."
    ],
    keyObservations: [
      {
        label: "Color Shift on Heating",
        details: "The vibrant blue crystals lose their color and turn into a white amorphous anhydrous powder.",
        highlightColor: "amber"
      },
      {
        label: "Condensation",
        details: "Tiny droplets of water appear on the cooler upper walls of the test tube.",
        highlightColor: "blue"
      },
      {
        label: "Rehydration with Droplets",
        details: "Upon adding 2-3 drops of water to the white powder, the brilliant blue color is instantly restored!",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Dehydration Reaction",
        equation: "\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}(s) \\text{ [Blue]} \\xrightarrow{\\Delta} \\text{CuSO}_4(s) \\text{ [White]} + 5\\text{H}_2\\text{O}(g)",
        note: "Loss of 5 molecules of water of crystallization."
      },
      {
        name: "Rehydration Reaction",
        equation: "\\text{CuSO}_4(s) \\text{ [White]} + 5\\text{H}_2\\text{O}(l) \\to \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}(s) \\text{ [Blue]}",
        note: "Exothermic recombination restoring crystalline structure."
      }
    ],
    scientificInference: "Water of crystallization is the fixed number of water molecules chemically bonded into one formula unit of a salt. Removing it destroys the crystal lattice and color; re-adding water restores them.",
    examinerTrapAndSafety: "CBSE Definition trap: 'Water of crystallization is NOT free wet water' - the crystals appear completely dry to touch because the 5 water molecules are integrated into the geometric lattice.",
    boardQuestions: [
      {
        marks: 2,
        question: "Define water of crystallization. Give two examples of salts containing water of crystallization with their chemical formula.",
        answer: "Water of crystallization is the fixed number of water molecules present in one formula unit of a salt. Examples: (1) Hydrated Copper Sulphate (CuSO4·5H2O, 5 molecules), (2) Washing Soda (Na2CO3·10H2O, 10 molecules)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 3: METALS AND NON-METALS
  // =======================================================================
  {
    id: "act_3_14",
    activityNo: "Activity 3.14",
    chapterNo: 3,
    chapterName: "Metals and Non-Metals",
    discipline: "Chemistry",
    title: "Conditions Necessary for Rusting of Iron (Three Test Tubes)",
    aim: "To demonstrate that both oxygen (air) and moisture (water) are mutually essential for the corrosion (rusting) of iron.",
    apparatusAndMaterials: [
      "Three clean, shiny iron nails",
      "Three test tubes (labeled A, B, and C)",
      "Tap water, boiled distilled water",
      "Anhydrous calcium chloride (CaCl2)",
      "Turpentine / vegetable oil",
      "Rubber stoppers"
    ],
    procedureSteps: [
      "Test Tube A: Place iron nails in tap water such that they are partially submerged in water and exposed to air. Cork tightly.",
      "Test Tube B: Pour boiled distilled water to remove dissolved oxygen. Put nails in and add 1 mL of oil layer on top to block atmospheric air. Cork tightly.",
      "Test Tube C: Place nails in dry air with a lump of anhydrous CaCl2 (drying agent to absorb all moisture). Cork tightly.",
      "Leave all three test tubes undisturbed for 4-5 days, then inspect the nails."
    ],
    keyObservations: [
      {
        label: "Test Tube A (Water + Air)",
        details: "Nails are heavily rusted with a reddish-brown flaky deposit [Fe2O3·xH2O].",
        highlightColor: "rose"
      },
      {
        label: "Test Tube B (Water only, No Air)",
        details: "Nails do NOT rust at all. They remain completely clean and shiny.",
        highlightColor: "emerald"
      },
      {
        label: "Test Tube C (Dry Air only, No Water)",
        details: "Nails do NOT rust at all. They remain completely clean and shiny.",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Rust Formation Equation",
        equation: "4\\text{Fe}(s) + 3\\text{O}_2(g) + 2x\\text{H}_2\\text{O}(l) \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}(s) \\text{ [Hydrated Ferric Oxide / Rust]}",
        note: "Rusting requires both oxygen and water simultaneously."
      }
    ],
    scientificInference: "Rusting of iron is an electrochemical oxidation process that requires BOTH oxygen and water. Absence of either factor completely prevents rusting.",
    examinerTrapAndSafety: "CBSE Favorite Viva/MCQ: What is the purpose of boiling water and adding an oil layer in Test Tube B? Boiling expels all dissolved oxygen from water, and the oil film prevents atmospheric oxygen from redissolving.",
    boardQuestions: [
      {
        marks: 3,
        question: "Describe an activity with a labeled diagram to show that both air and water are necessary for the rusting of iron.",
        answer: "Set up 3 test tubes: A (water + air), B (boiled water + oil layer, no air), C (anhydrous CaCl2, no moisture). After 4 days, only nails in tube A rust, proving both air and water are essential."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 4: CARBON AND ITS COMPOUNDS
  // =======================================================================
  {
    id: "act_4_8",
    activityNo: "Activity 4.8",
    chapterNo: 4,
    chapterName: "Carbon and its Compounds",
    discipline: "Chemistry",
    title: "Esterification Reaction (Sweet Fruity Odor Test)",
    aim: "To synthesize an ester by the reaction between an organic acid and alcohol in the presence of an acid catalyst.",
    apparatusAndMaterials: [
      "Absolute ethanol (1 mL)",
      "Glacial acetic acid (1 mL)",
      "Concentrated sulfuric acid (conc. H2SO4, 3-4 drops)",
      "Test tube, water bath, burner, beaker with 20 mL water"
    ],
    procedureSteps: [
      "Take 1 mL of ethanol and 1 mL of glacial acetic acid in a clean test tube.",
      "Add a few drops of concentrated sulfuric acid (acting as catalyst and dehydrating agent).",
      "Warm the test tube in a water bath at 60°C for at least 5 minutes (NEVER heat directly over open flame).",
      "Pour the contents into a beaker containing 20-50 mL of water and smell the resulting mixture."
    ],
    keyObservations: [
      {
        label: "Sweet Fruity Aroma",
        details: "A distinct, pleasant, sweet fruity fragrance (resembling raw bananas/apples) is immediately released.",
        highlightColor: "emerald"
      },
      {
        label: "Oily Layer on Water",
        details: "A lighter, immiscible oily layer floats on top of the water surface (Ethyl ethanoate).",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Esterification Equation",
        equation: "\\text{CH}_3\\text{COOH}(l) + \\text{CH}_3\\text{CH}_2\\text{OH}(l) \\xrightarrow{\\text{Conc. H}_2\\text{SO}_4, \\Delta} \\text{CH}_3\\text{COOCH}_2\\text{CH}_3(l) \\text{ [Ethyl Ethanoate]} + \\text{H}_2\\text{O}(l)",
        note: "Conc. H2SO4 acts as both an acid catalyst and a dehydrating agent by removing water."
      }
    ],
    scientificInference: "Carboxylic acids react with alcohols in the presence of concentrated sulfuric acid to yield esters, which are characterized by sweet fruity odors used in perfumes and artificial flavorings.",
    examinerTrapAndSafety: "Safety Warning: Ethanol and ethyl acetate are highly volatile and flammable! The mixture MUST be heated in a water bath, never directly on an open flame.",
    boardQuestions: [
      {
        marks: 3,
        question: "(i) Write the chemical equation for the reaction between ethanol and ethanoic acid in the presence of conc. H2SO4. (ii) Name the product formed and mention its characteristic property. (iii) What is the reverse of this reaction called?",
        answer: "(i) CH3COOH + C2H5OH --(conc H2SO4)--> CH3COOC2H5 + H2O. (ii) Ethyl Ethanoate (ester), characterized by a sweet fruity odor. (iii) Saponification (alkaline hydrolysis of esters)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 5: LIFE PROCESSES
  // =======================================================================
  {
    id: "act_5_1",
    activityNo: "Activity 5.1",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    title: "Chlorophyll is Essential for Photosynthesis (Variegated Leaf)",
    aim: "To demonstrate that chlorophyll is indispensable for the synthesis of starch during photosynthesis.",
    apparatusAndMaterials: [
      "Variegated potted plant (Croton or Money Plant)",
      "Beaker, water, ethanol (alcohol), boiling water bath",
      "Iodine solution",
      "Petri dish, tracing paper"
    ],
    procedureSteps: [
      "Destarch the potted plant by keeping it in a completely dark room for 3 full days.",
      "Place the plant in bright sunlight for about 6 hours.",
      "Pluck a variegated leaf. Trace the green and non-green regions on tracing paper.",
      "Boil the leaf in water for a few minutes to soften cell walls.",
      "Immerse the leaf in a beaker of alcohol and place it in a boiling water bath until chlorophyll is completely de-colorized.",
      "Wash the bleached leaf in warm water and place it in a petri dish.",
      "Pour dilute iodine solution over the leaf and compare with your traced outline."
    ],
    keyObservations: [
      {
        label: "Green Regions (Chlorophyll)",
        details: "Turn intense BLUE-BLACK with iodine, confirming the presence of newly synthesized starch.",
        highlightColor: "emerald"
      },
      {
        label: "Non-Green / White Regions",
        details: "Show NO blue-black color; they stain pale yellow-brown, confirming absence of starch.",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Photosynthesis Overall Equation",
        equation: "6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}",
        note: "Chlorophyll captures photon energy to split water and reduce CO2."
      }
    ],
    scientificInference: "Starch is synthesized solely in the green parts of the leaf containing chlorophyll. Thus, chlorophyll is essential for photosynthesis.",
    examinerTrapAndSafety: "Safety Precaution: Alcohol is highly inflammable! The test tube containing alcohol MUST be heated in a water bath, NEVER directly on a flame.",
    boardQuestions: [
      {
        marks: 3,
        question: "Explain why: (i) The plant is kept in dark for 3 days prior to the experiment. (ii) The leaf is boiled in alcohol before testing with iodine. (iii) Why is alcohol boiled in a water bath?",
        answer: "(i) To destarch the leaves by consuming all previously stored starch. (ii) To remove chlorophyll and bleach the leaf so color change with iodine is clearly visible. (iii) Alcohol is highly flammable and catches fire on open flames."
      }
    ]
  },
  {
    id: "act_5_2",
    activityNo: "Activity 5.2",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    title: "Carbon Dioxide is Essential for Photosynthesis (KOH Bell Jar)",
    aim: "To demonstrate that carbon dioxide is indispensable for the production of starch during photosynthesis.",
    apparatusAndMaterials: [
      "Two healthy destarched potted plants of equal size (labeled A and B)",
      "Two glass bell jars, two flat glass plates",
      "Watch glass with Potassium Hydroxide (KOH) pellets",
      "Vaseline / grease",
      "Iodine solution, ethanol, water bath"
    ],
    procedureSteps: [
      "Keep both potted plants in a dark room for 3 days to completely destarch their leaves.",
      "Place each plant on a separate glass plate.",
      "Next to plant A, place a watch glass containing KOH pellets (which absorbs all CO2). Plant B has no KOH.",
      "Cover both plants with separate airtight bell jars.",
      "Apply vaseline around the bottom rim of bell jars to seal them completely airtight.",
      "Keep both setups in bright sunlight for 2-3 hours.",
      "Pluck a leaf from each plant and test for starch using the iodine test."
    ],
    keyObservations: [
      {
        label: "Leaf from Plant A (With KOH)",
        details: "Does NOT turn blue-black with iodine; remains brown (No starch formed because KOH absorbed all CO2).",
        highlightColor: "rose"
      },
      {
        label: "Leaf from Plant B (Control, without KOH)",
        details: "Turns deep BLUE-BLACK with iodine, confirming plentiful starch synthesis in presence of CO2.",
        highlightColor: "emerald"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Absorption of CO2 by Potassium Hydroxide",
        equation: "2\\text{KOH}(s) + \\text{CO}_2(g) \\to \\text{K}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(l)",
        note: "Creates a CO2-free environment inside Bell Jar A."
      }
    ],
    scientificInference: "Plant A failed to produce starch despite receiving sunlight and water because carbon dioxide was absent. Thus, carbon dioxide is essential for photosynthesis.",
    examinerTrapAndSafety: "CBSE Question: 'What is the role of KOH in this experiment?' Potassium hydroxide absorbs carbon dioxide from the bell jar atmosphere to test photosynthesis in a CO2-deficient environment.",
    boardQuestions: [
      {
        marks: 2,
        question: "State the role of potassium hydroxide (KOH) in the experiment showing that CO2 is necessary for photosynthesis. What result is observed in the plant kept with KOH?",
        answer: "KOH absorbs all carbon dioxide gas inside the sealed bell jar. The leaf from this plant does not turn blue-black with iodine, proving no starch was synthesized in the absence of CO2."
      }
    ]
  },
  {
    id: "act_5_4",
    activityNo: "Activity 5.4",
    chapterNo: 5,
    chapterName: "Life Processes",
    discipline: "Biology",
    title: "Carbon Dioxide is Exhaled During Respiration (Lime Water Test)",
    aim: "To demonstrate that exhaled air contains a much higher proportion of carbon dioxide than atmospheric air.",
    apparatusAndMaterials: [
      "Two test tubes (labeled A and B)",
      "Freshly prepared lime water [Ca(OH)2]",
      "Pichkari / syringe",
      "Drinking straw / glass tube"
    ],
    procedureSteps: [
      "Take equal volumes (about 5 mL) of freshly prepared lime water in test tubes A and B.",
      "In test tube A, use a syringe or pichkari to pass atmospheric air through the lime water.",
      "In test tube B, use a straw to blow exhaled breath directly through the lime water.",
      "Record the time taken for the lime water to turn milky in each tube."
    ],
    keyObservations: [
      {
        label: "Test Tube B (Exhaled Breath)",
        details: "Turns milky almost INSTANTANEOUSLY within a few vigorous puffs (5-10 seconds).",
        highlightColor: "emerald"
      },
      {
        label: "Test Tube A (Atmospheric Air)",
        details: "Takes a very long time (several minutes of pumping) to show faint milkiness.",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Cellular Respiration Product",
        equation: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2\\uparrow + 6\\text{H}_2\\text{O} + 38\\text{ ATP}",
        note: "Exhaled air contains ~4.4% CO2 compared to only 0.04% in atmospheric air."
      }
    ],
    scientificInference: "Exhaled air contains a substantially higher concentration of carbon dioxide produced as a metabolic waste product of cellular respiration.",
    examinerTrapAndSafety: "CBSE MCQ trap: Freshly prepared lime water must be used because old lime water already reacts with atmospheric CO2 forming a crust of CaCO3.",
    boardQuestions: [
      {
        marks: 2,
        question: "Why does lime water turn milky much faster when we blow exhaled air into it compared to when atmospheric air is pumped in using a syringe?",
        answer: "Exhaled air contains approximately 4.4% CO2 (produced during cellular respiration), which is over 100 times more concentrated than atmospheric air (0.04% CO2)."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 9: LIGHT — REFLECTION AND REFRACTION
  // =======================================================================
  {
    id: "act_9_10",
    activityNo: "Activity 9.10",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    discipline: "Physics",
    title: "Refraction & Lateral Displacement Through a Rectangular Glass Slab",
    aim: "To trace the path of a ray of light through a rectangular glass slab, verify Snell's Law, and measure lateral displacement.",
    apparatusAndMaterials: [
      "Rectangular glass slab",
      "Drawing board, white paper sheet, drawing pins",
      "Four identical optical pins",
      "Protractor, sharp pencil, ruler"
    ],
    procedureSteps: [
      "Fix a white paper sheet on the drawing board using drawing pins.",
      "Place the glass slab in the center and draw its boundary ABCD.",
      "Draw an incident ray line EF making an angle of incidence (i = 30° to 60°) with the normal NN' at point E on face AB.",
      "Fix two pins P and Q vertically on line EF about 5 cm apart.",
      "Look through the opposite face CD of the slab and fix pins R and S such that all four pin bases appear in a single straight line.",
      "Remove slab and pins, join R and S to face CD at point F, and draw emergent ray line and normal MM'.",
      "Join E and F inside the slab to represent the refracted ray.",
      "Extend the incident ray forward with dashed lines and measure the lateral shift."
    ],
    keyObservations: [
      {
        label: "Bending of Ray at Air-Glass Interface",
        details: "Light bends TOWARDS the normal when entering glass (rarer to denser medium, ∠i > ∠r).",
        highlightColor: "blue"
      },
      {
        label: "Bending of Ray at Glass-Air Interface",
        details: "Light bends AWAY from the normal when exiting into air (denser to rarer medium, ∠e > ∠r).",
        highlightColor: "emerald"
      },
      {
        label: "Angle Equality & Parallelism",
        details: "The angle of incidence equals the angle of emergence (∠i = ∠e). The emergent ray is exactly PARALLEL to the incident ray direction.",
        highlightColor: "purple"
      },
      {
        label: "Lateral Displacement",
        details: "The perpendicular distance between the original incident path and the emergent ray is lateral displacement (d).",
        highlightColor: "amber"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Snell's Law of Refraction",
        equation: "\\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21} = \\frac{n_2}{n_1} = \\frac{v_1}{v_2}",
        note: "Refractive index of glass with respect to air."
      },
      {
        name: "Lateral Displacement Formula",
        equation: "d = \\frac{t \\cdot \\sin(i - r)}{\\cos r}",
        note: "Directly proportional to slab thickness (t), angle of incidence (i), and refractive index (n)."
      }
    ],
    scientificInference: "Light travels with different speeds in different optical media. Upon parallel refraction through two opposing boundaries, the deviation cancels out, resulting only in a lateral parallel shift.",
    examinerTrapAndSafety: "CBSE Examiner Marks Trap: 'On what factors does lateral displacement depend?' It increases with: (1) Increase in slab thickness, (2) Increase in angle of incidence, (3) Increase in refractive index of the slab, and (4) Decrease in wavelength of light (violet displaced more than red).",
    boardQuestions: [
      {
        marks: 3,
        question: "(i) Draw a labeled ray diagram showing refraction through a rectangular glass slab. (ii) Show that angle of incidence equals angle of emergence. (iii) State two factors on which lateral displacement depends.",
        answer: "(i) Diagram with normal NN', MM', ∠i, ∠r, ∠e, lateral displacement 'd'. (ii) Since opposite faces AB and CD are parallel, alternating interior angles are equal (r1 = r2), hence by Snell's law, sin i / sin r = sin e / sin r, yielding ∠i = ∠e. (iii) Thickness of slab and refractive index."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 11: ELECTRICITY
  // =======================================================================
  {
    id: "act_11_1",
    activityNo: "Activity 11.1",
    chapterNo: 11,
    chapterName: "Electricity",
    discipline: "Physics",
    title: "Verification of Ohm's Law (V-I Linear Characteristic)",
    aim: "To demonstrate that the potential difference across a conductor is directly proportional to current flowing through it at constant temperature.",
    apparatusAndMaterials: [
      "Nichrome wire of length 0.5 m (resistor)",
      "Four 1.5 V dry cells (or DC power supply)",
      "Ammeter (0-3 A)",
      "Voltmeter (0-5 V)",
      "Plug key and connecting wires"
    ],
    procedureSteps: [
      "Connect the circuit with one 1.5 V cell, plug key, ammeter in series, and nichrome wire.",
      "Connect the voltmeter in parallel across the nichrome wire.",
      "Close the key and record current (I) in ammeter and potential difference (V) in voltmeter.",
      "Connect two cells in series, repeat readings.",
      "Repeat with three and four cells in series.",
      "Calculate the ratio V / I for each reading and plot a V vs I graph."
    ],
    keyObservations: [
      {
        label: "Constant Ratio V / I",
        details: "For every set of readings, the ratio V / I remains constant within experimental limits (equals Resistance R).",
        highlightColor: "emerald"
      },
      {
        label: "Linear V-I Graph",
        details: "The graph plotted between V (y-axis) and I (x-axis) is a straight line passing through the origin.",
        highlightColor: "blue"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Ohm's Law Mathematical Statement",
        equation: "V \\propto I \\quad \\implies \\quad V = I \\cdot R \\quad \\implies \\quad R = \\frac{V}{I} = \\text{Slope of } V\\text{-}I \\text{ Graph}",
        note: "Valid only when temperature and physical dimensions remain constant."
      }
    ],
    scientificInference: "Current through an ohmic conductor is directly proportional to potential difference across its terminals at constant temperature.",
    examinerTrapAndSafety: "CBSE Examiner deduction trap: Ammeter is always connected in SERIES (has very low resistance); Voltmeter is always connected in PARALLEL (has very high resistance). The slope of a V-I graph represents R, but the slope of an I-V graph represents 1/R!",
    boardQuestions: [
      {
        marks: 3,
        question: "State Ohm's Law. Draw a labeled circuit diagram to verify it. What does the slope of a V-I graph represent?",
        answer: "Ohm's Law states that electric current flowing through a conductor is directly proportional to the potential difference across its ends, provided physical conditions such as temperature remain constant (V = IR). Slope of V-I graph gives resistance R."
      }
    ]
  },

  // =======================================================================
  // CHAPTER 12: MAGNETIC EFFECTS OF ELECTRIC CURRENT
  // =======================================================================
  {
    id: "act_12_7",
    activityNo: "Activity 12.7",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    discipline: "Physics",
    title: "Force on a Current-Carrying Conductor in a Magnetic Field (Kick Experiment)",
    aim: "To demonstrate the mechanical force experienced by a current-carrying conductor placed in a magnetic field and verify Fleming's Left-Hand Rule.",
    apparatusAndMaterials: [
      "Small aluminium rod AB (about 5 cm)",
      "Strong horseshoe magnet",
      "DC Battery (6V), plug key, rheostat",
      "Connecting wires and laboratory stand"
    ],
    procedureSteps: [
      "Suspend the aluminium rod horizontally using connecting wires from a stand.",
      "Position the strong horseshoe magnet such that the rod lies between the two poles (magnetic field directed vertically upwards: North pole below, South pole above).",
      "Connect the aluminium rod in series with a battery, key, and rheostat.",
      "Pass current from end B to end A (into the plane).",
      "Observe the direction of displacement of the rod.",
      "Reverse the direction of current (from A to B) and observe the new displacement direction.",
      "Invert the magnet poles (field directed downwards) and observe."
    ],
    keyObservations: [
      {
        label: "Displacement of Rod",
        details: "The suspended aluminium rod gets physically deflected / displaced towards the left when current flows from B to A.",
        highlightColor: "emerald"
      },
      {
        label: "Reversal of Current",
        details: "When current direction is reversed, the rod is deflected in the OPPOSITE direction (towards the right).",
        highlightColor: "blue"
      },
      {
        label: "Reversal of Magnetic Field",
        details: "When magnet poles are flipped, the displacement direction also reverses.",
        highlightColor: "purple"
      }
    ],
    chemicalEquationsOrFormulas: [
      {
        name: "Lorentz Force on Conductor",
        equation: "F = I \\cdot (L \\times B) = I \\cdot L \\cdot B \\cdot \\sin\\theta",
        note: "Force is maximum when conductor is perpendicular to magnetic field (θ = 90°); zero when parallel (θ = 0°)."
      }
    ],
    scientificInference: "A current-carrying conductor placed in an external magnetic field experiences a mechanical force whose direction is given by Fleming's Left-Hand Rule and magnitude depends on current, magnetic field, and length.",
    examinerTrapAndSafety: "Fleming's Left-Hand Rule: Stretch Thumb, Forefinger, and Central finger mutually perpendicular. Forefinger = Field (B), Central finger = Current (I), Thumb = Force / Motion (F). [Mnemonic: Father, Mother, Child -> Force, Magnetic field, Current].",
    boardQuestions: [
      {
        marks: 3,
        question: "State Fleming's Left-Hand Rule. Under what condition is the force experienced by a current-carrying conductor in a magnetic field: (i) Maximum? (ii) Zero?",
        answer: "Fleming's Left-Hand Rule: Stretch thumb, forefinger, and middle finger mutually perpendicular. Forefinger = Magnetic field, Middle finger = Current, Thumb = Direction of force/motion. (i) Maximum when conductor is perpendicular to magnetic field (θ = 90°). (ii) Zero when conductor is parallel to magnetic field (θ = 0° or 180°)."
      }
    ]
  }
];
